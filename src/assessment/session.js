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
    // New endpoint: POST /api/session/ (instead of POST /api/assessment/{dept}/start)
    const response = await api.post(
        API_URL.SESSION,
        {
            doctor_id: doctorId,
            patient_id: patientId,
            visit_type: visitType,
            total_score: totalScore,
            is_completed: isCompleted,
        }
    )
    return response
}

const end = async (sessionId, sessionData) => {
    // New endpoint: PATCH /api/session/{id}/ (instead of PATCH /api/assessment/session/{id}/end/)
    return await api.patch(
        API_URL.SESSION_BY_ID(sessionId),
        sessionData
    )
}

export default {
    end,
    start
};
