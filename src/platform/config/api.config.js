const BASE_API = (process.env.REACT_APP_API_DJANGO || 'https://backend.tps-ind.com') + '/api/'
const RMS_API = 'https://api.dev.rehab-software.com/api/v1/'
const TYMPANOGRAM_EXTRACT_URL = "https://ai.dev.rehab-software.com/api/extract/tympanogram";
const OTOSCOPIC_EXTRACT_URL = "https://ai.dev.rehab-software.com/api/extract/otoscopic";

const API_URL = {
    // Users apis
    USER: BASE_API + 'user/',
    ME: BASE_API + 'user/me/',
    LOGIN: BASE_API + 'user/login/',
    LOGOUT: BASE_API + 'user/logout/',

    // Tokens apis
    TOKEN: BASE_API + 'token/',
    VERIFY: BASE_API + 'token/verify/',
    REFRESH: BASE_API + 'token/refresh/',

    // Assessment apis
    ASSESSMENT: BASE_API + 'assessment/',
    fetchTemplate: (department) => 
        BASE_API + `assessment/department/${encodeURIComponent(department)}/`,
    patientAssessments: (patientId) =>
        BASE_API + `assessment/patient/${encodeURIComponent(patientId)}/`,
    assessmentFormData: (formDataId) =>
        BASE_API + `assessment/data/${encodeURIComponent(formDataId)}/`,

    // Referrral apis
    REFERRAL: BASE_API + 'referrals/',
    
    // Department
    DEPTARMENT: BASE_API + 'department/',

    // Patients apis
    PATIENT: BASE_API + 'patient/',
    PATIENT_ALL: BASE_API + 'patient/all',
    PATIENT_ALERT: BASE_API + 'alerts/patient',
    EQUIPMENT_LIST: RMS_API + "rehab-equipment-lists/",
    BOOKING_QUEUE: RMS_API + "booking-queue/",
    BOOKING_QUEUE_SUMMARY: RMS_API + "booking-queue/summary/",
    BOOKING_QUEUE_CONTINUE_SLOTS: (bookingId) =>
        RMS_API + `booking-queue/${encodeURIComponent(bookingId)}/appmts/continue-slots/`,
    BOOKING_QUEUE_BOOK_PREVIEW: (bookingId) =>
        RMS_API + `booking-queue/${encodeURIComponent(bookingId)}/book/preview/`,
    BOOKING_QUEUE_BOOK_RESERVE: (bookingId) =>
        RMS_API + `booking-queue/${encodeURIComponent(bookingId)}/book/reserve/`,
    BOOKING_QUEUE_BOOK_CONFIRM: (bookingId) =>
        RMS_API + `booking-queue/${encodeURIComponent(bookingId)}/book/confirm/`,

    // Billing price
    BILLING: (
        dept,
    ) => RMS_API + `master-charges/?page=1&limit=100&category_name=${dept}&subcategory_name=session&search=${encodeURIComponent('single session')}`,

    DYNAMIC_FORM_RESPONSE: (patientId) =>
        `${RMS_API}dynamic-form/form-response/with-data/${patientId ? `?patient_id=${encodeURIComponent(patientId)}` : ""}`,
    DYNAMIC_FORM_RESPONSE_ACTION: (responseId) =>
        `${RMS_API}dynamic-form/form-response/${encodeURIComponent(responseId)}/`,
}

export {
    API_URL,
    BASE_API,
    RMS_API,
    TYMPANOGRAM_EXTRACT_URL,
    OTOSCOPIC_EXTRACT_URL
}
