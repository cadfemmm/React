import api from "../shared/api/apiClient";
import { API_URL } from "../platform/config/api.config";

/**
 * In-memory cache to prevent duplicate in-flight requests for the same
 * department+screeningType combination.
 */
const responseCache = new Map();
const inflightPromises = new Map();

const fetch = async (department, screeningType = "") => {
    const cacheKey = `${String(department || "").trim().toLowerCase()}::${screeningType}`;

    if (responseCache.has(cacheKey)) {
        return responseCache.get(cacheKey) || [];
    }

    if (inflightPromises.has(cacheKey)) {
        return inflightPromises.get(cacheKey);
    }

    const p = (async () => {
        try {
            // Build query: department_name is required, screening_name is optional
            let url = `${API_URL.TEMPLATE}?department_name=${encodeURIComponent(department)}`;
            if (screeningType) {
                url += `&screening_name=${encodeURIComponent(screeningType)}`;
            }

            const response = await api.get(url);
            const payload = response.data;

            let results = [];
            if (Array.isArray(payload)) {
                results = payload;
            } else if (Array.isArray(payload?.results)) {
                results = payload.results;
            }

            // Only cache non-empty responses
            if (results.length > 0) {
                responseCache.set(cacheKey, results);
            }
            return results;
        } catch (e) {
            // Do not cache failures — allow retry on next call
            return [];
        } finally {
            inflightPromises.delete(cacheKey);
        }
    })();

    inflightPromises.set(cacheKey, p);
    return p;
}

const fetchData = async (assessmentId) => {
    // New endpoint: /api/session/assessment-data/{id}/
    return await api.get(API_URL.ASSESSMENT_DATA_BY_ID(assessmentId));
}

const fetchById = async (formId) => {
    // New endpoint: master-data/template/{id}/
    return await api.get(API_URL.TEMPLATE_BY_ID(formId));
}

const save = async (
    templateDataId,
    assessmentData
) => {
    // New endpoint: PATCH /api/session/assessment-data/{id}/
    return await api.patch(
        API_URL.ASSESSMENT_DATA_BY_ID(templateDataId),
        { data: assessmentData }
    )
}

const fetchSessionCharge = async (department) => {
    return await api.get(
        API_URL.BILLING(
            department.toLowerCase()
        )
    );
}

export default {
    save,
    fetch,
    fetchData,
    fetchById,
    fetchSessionCharge
};
