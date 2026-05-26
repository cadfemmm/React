import api from "../shared/api/apiClient";
import { API_URL } from "../platform/config/api.config";


const getAll = async() => {
    return await api.get(
        API_URL.DEPTARMENT + 'all/',
    )
}

export default {
    getAll
};