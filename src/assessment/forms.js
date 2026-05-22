import api from "../shared/api/apiClient";
import { API_URL } from "../platform/config/api.config";


const fetch = async (department) => {
    try {
        const response = await api.get(
            API_URL.fetchTemplate(department)
        )
        return response.data.results
    } catch (e) {
        return []
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

export default {
    save,
    fetch,
    fetchData,
    fetchById
};