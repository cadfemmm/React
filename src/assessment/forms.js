import api from "../shared/api/apiClient";
import { API_URL } from "../platform/config/api.config";


const fetch = async (department) => {
    try {
        let url = API_URL.fetchTemplate(department);
        const all = [];

        while (url) {
            const response = await api.get(url);
            const payload = response.data;

            if (Array.isArray(payload)) {
                return payload;
            }

            if (Array.isArray(payload?.results)) {
                all.push(...payload.results);
            }

            url = payload?.next || null;
        }

        return all;
    } catch (e) {
        return [];
    }
}

const fetchData = async (assessmentId) => {
    return await api.get(
        API_URL.ASSESSMENT + `data/${assessmentId}`
    )
}

const fetchById = async (formId) => {
    return await api.get(
        API_URL.ASSESSMENT + `form/${formId}`
    )
}

const save = async (
    templateDataId,
    assessmentData
) => {
    return await api.patch(
        API_URL.ASSESSMENT + `data/${templateDataId}/`,
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
