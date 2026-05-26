import api from "../shared/api/apiClient";
import { API_URL } from "../platform/config/api.config";


const create = async(referralData) => {
    return await api.post(
        API_URL.REFERRAL,
        { data: referralData }
    )
}

export default {
    create
};