import api from "../shared/api/apiClient";
import { API_URL } from "../platform/config/api.config";


const start = async (
    doctorId,
    patientId,
    department,
    visitType,
    totalScore,
    isCompleted,
    
) => {
    const response = await api.post(
        API_URL.ASSESSMENT + `${department}/start`,
        {
            doctor: doctorId,
            patient: patientId,
            visit_type: visitType,
            total_score: totalScore,
            is_completed: isCompleted,
            
        }
    )
    return response
}

const end = async (sessionId, sessionData) => {
    return await api.patch(
        API_URL.ASSESSMENT + `session/${sessionId}/end/`,
        sessionData
    )   
}

export default {
    end,
    start
};
