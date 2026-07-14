import axios from "axios";
import { API_URL } from "../../platform/config/api.config";

// ──────────────────────────────────────────────
// Cookie helpers (same pattern as tps-ui)
// ──────────────────────────────────────────────

const COOKIE_MAX_AGE = 60 * 60 * 24; // 1 day in seconds

const isBrowser = () => typeof window !== "undefined";

const getCookieAttributes = (maxAge) => {
  const attributes = ["Path=/", "SameSite=Lax"];
  if (typeof maxAge === "number") {
    attributes.push(`Max-Age=${maxAge}`);
  }
  if (isBrowser() && window.location.protocol === "https:") {
    attributes.push("Secure");
  }
  return attributes.join("; ");
};

export function setCookie(name, value, maxAge = COOKIE_MAX_AGE) {
  if (!isBrowser()) return;
  document.cookie = [
    `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
    getCookieAttributes(maxAge),
  ].join("; ");
}

export function getCookie(name) {
  if (!isBrowser()) return null;
  const encodedName = `${encodeURIComponent(name)}=`;
  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith(encodedName));
  return cookie ? decodeURIComponent(cookie.slice(encodedName.length)) : null;
}

export function deleteCookie(name) {
  if (!isBrowser()) return;
  document.cookie = [
    `${encodeURIComponent(name)}=`,
    getCookieAttributes(0),
  ].join("; ");
}

// ──────────────────────────────────────────────
// Token + Refresh state
// ──────────────────────────────────────────────

const REFRESH_BUFFER_MS = 30 * 1000;

let refreshTimer = null;

// Single refresh promise shared by all concurrent failed requests
let refreshPromise = null;

const COOKIE_ACCESS_KEY = "access_token";
const COOKIE_REFRESH_KEY = "refresh_token";

// ──────────────────────────────────────────────
// Axios instance
// ──────────────────────────────────────────────

const api = axios.create({
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

// ──────────────────────────────────────────────
// Token setters / clearers
// ──────────────────────────────────────────────

export const setAccessToken = (data) => {
  if (data.access_token) {
    setCookie(COOKIE_ACCESS_KEY, data.access_token);
  }
  if (data.refresh_token) {
    setCookie(COOKIE_REFRESH_KEY, data.refresh_token);
  }

  // Keep user info in localStorage (non-token data)
  if (data.user) {
    localStorage.setItem("username", data.user.user_name || "");
    localStorage.setItem("userRole", data.user?.user_role?.name || "");
    localStorage.setItem("user_id", data.user.user_id || "");
  }

  // Start proactive refresh scheduler
  startTokenRefresh();
};

export const clearAccessToken = () => {
  deleteCookie(COOKIE_ACCESS_KEY);
  deleteCookie(COOKIE_REFRESH_KEY);
  if (refreshTimer) {
    clearTimeout(refreshTimer);
    refreshTimer = null;
  }
};

// ──────────────────────────────────────────────
// Refresh token logic (same pattern as tps-ui)
// ──────────────────────────────────────────────

async function refreshAccessToken() {
  const refreshToken = getCookie(COOKIE_REFRESH_KEY);
  if (!refreshToken) {
    throw new Error("Refresh token missing");
  }

  // Use raw axios so we don't go through interceptors
  const { data } = await axios.post(API_URL.REFRESH, {
    refresh_token: refreshToken,
  });

  setCookie(COOKIE_ACCESS_KEY, data.access_token);
  setCookie(COOKIE_REFRESH_KEY, data.refresh_token);
  return data.access_token;
}

function getFreshAccessToken() {
  if (!refreshPromise) {
    refreshPromise = refreshAccessToken().finally(() => {
      refreshPromise = null;
    });
  }
  return refreshPromise;
}

// ──────────────────────────────────────────────
// Proactive token refresh scheduler
// ──────────────────────────────────────────────

export function stopTokenRefresh() {
  if (refreshTimer) {
    clearTimeout(refreshTimer);
    refreshTimer = null;
  }
}

export function startTokenRefresh() {
  stopTokenRefresh();
  const expireAt = Date.now() + COOKIE_MAX_AGE * 1000;
  const delay = expireAt - Date.now() - REFRESH_BUFFER_MS;

  if (delay <= 0) {
    void getFreshAccessToken().then(startTokenRefresh).catch(clearAccessToken);
    return;
  }

  refreshTimer = setTimeout(async () => {
    try {
      await getFreshAccessToken();
      startTokenRefresh();
    } catch {
      clearAccessToken();
      stopTokenRefresh();
    }
  }, delay);
}

// ──────────────────────────────────────────────
// REQUEST INTERCEPTOR
//
// Attach access token from cookie.
// ──────────────────────────────────────────────

api.interceptors.request.use(
  (config) => {
    const token = getCookie(COOKIE_ACCESS_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ──────────────────────────────────────────────
// RESPONSE INTERCEPTOR
//
// On 401 → refresh token → retry original request once.
// ──────────────────────────────────────────────

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      !originalRequest ||
      error.response?.status !== 401 ||
      originalRequest._retry
    ) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      const newToken = await getFreshAccessToken();
      originalRequest.headers.Authorization = `Bearer ${newToken}`;
      return api(originalRequest);
    } catch (e) {
      clearAccessToken();
      return Promise.reject(e);
    }
  }
);

export default api;
