import api from "./apiClient";
import { API_URL } from "../../platform/config/api.config";

function extractIcdArray(data) {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.results)) return data.results;
  if (Array.isArray(data?.data)) return data.data;
  if (Array.isArray(data?.data?.results)) return data.data.results;
  return [];
}

function parseIcdMeta(data, page, limit, itemCount) {
  const meta = data?.meta ?? data?.data?.meta ?? {};
  const currentPage = Number(meta.page ?? page);
  const pageLimit = Number(meta.limit ?? limit);
  const total =
    meta.total_record_count ??
    meta.total ??
    data?.count ??
    data?.data?.count ??
    null;
  const totalPages = meta.total_pages ?? null;

  let hasNext;
  if (meta.has_next !== undefined && meta.has_next !== null) {
    hasNext = Boolean(meta.has_next);
  } else if (totalPages != null) {
    hasNext = currentPage < totalPages;
  } else if (total != null) {
    hasNext = currentPage * pageLimit < total;
  } else if (data?.next) {
    hasNext = true;
  } else {
    hasNext = itemCount >= pageLimit && itemCount > 0;
  }

  return {
    page: currentPage,
    limit: pageLimit,
    total,
    hasNext,
  };
}

export function formatIcdOption(item) {
  const code = item?.code || "";
  const name = item?.name || "";
  if (!code) return null;
  return {
    id: item.id,
    code,
    name,
    label: name ? `${code} - ${name}` : code,
    value: code,
  };
}

export async function fetchIcdCodesPage(options = {}) {
  const page = options.page ?? 1;
  const limit = options.limit ?? 100;
  const params = { page, limit };

  if (options.search?.trim()) {
    params.search = options.search.trim();
  }

  const res = await api.get(API_URL.ICD_ALL, {
    params,
    headers: { accept: "application/json" },
  });

  const payload = res.data;
  const items = extractIcdArray(payload)
    .map(formatIcdOption)
    .filter(Boolean);
  const meta = parseIcdMeta(payload, page, limit, items.length);

  return { items, meta };
}

/** Fetch every page (use sparingly — prefer paginated select). */
export async function fetchAllIcdCodes(options = {}) {
  const limit = options.limit ?? 200;
  let page = 1;
  let all = [];
  let hasNext = true;

  while (hasNext) {
    const { items, meta } = await fetchIcdCodesPage({
      page,
      limit,
      search: options.search,
    });
    all = all.concat(items);
    hasNext = Boolean(meta.hasNext) && items.length > 0;
    page += 1;
    if (page > 200) break;
  }

  const seen = new Set();
  return all
    .filter((item) => {
      if (seen.has(item.value)) return false;
      seen.add(item.value);
      return true;
    })
    .sort((a, b) => a.code.localeCompare(b.code));
}
