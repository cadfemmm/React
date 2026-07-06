const BASE_API = (process.env.REACT_APP_API_DJANGO || 'https://backend.tps-ind.com') + '/api/'
const RMS_API = 'https://api.dev.rehab-software.com/api/v1/'
const AI_SERVICE_TARGET =
    process.env.REACT_APP_AI_SERVICE_TARGET || "https://ai.dev.rehab-software.com";
const TYMPANOGRAM_EXTRACT_URL = `${AI_SERVICE_TARGET}/api/extract/tympanogram`;
const OTOSCOPIC_EXTRACT_URL = `${AI_SERVICE_TARGET}/api/extract/otoscopic`;
// Dev: same-origin /new-stt via setupProxy.js. Prod: call AI service directly (or override via env).
const STT_API_BASE =
    process.env.REACT_APP_STT_API_BASE ||
    (process.env.NODE_ENV === "production"
        ? `${AI_SERVICE_TARGET}/new-stt`
        : "/new-stt");
const STT_SESSION_START_URL =
    process.env.REACT_APP_STT_SESSION_START_URL || `${STT_API_BASE}/session/start`;
const sttWebspeechUrl = (sessionId) =>
    `${STT_API_BASE}/session/${encodeURIComponent(sessionId)}/webspeech`;

const API_URL = {
    // Users apis
    USER: BASE_API + 'user/',
    ME: BASE_API + 'user/me/',
    LOGIN: RMS_API + 'auth/login/',
    LOGOUT: RMS_API + 'auth/logout/',

    // Tokens apis
    TOKEN: BASE_API + 'token/',
    VERIFY: BASE_API + 'token/verify/',
    REFRESH: RMS_API + 'auth/refresh/',

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
    
    // ICD codes with ICF and ICHI
    icdByDepartment: (department) =>
        BASE_API + `codes/icd/${encodeURIComponent(department)}/`,

    // Patients apis
    PATIENT: BASE_API + 'patient/',
    PATIENTS_LIST: RMS_API + 'patients/',
    PATIENT_DETAILS: (patientId) =>
        `${RMS_API}patients/${encodeURIComponent(patientId)}/`,
    PATIENT_PARTIAL_UPDATE: (patientId) =>
        `${RMS_API}patients/${encodeURIComponent(patientId)}/partial-update/`,
    PATIENT_ALL: BASE_API + 'patient/all',
    PATIENT_ALERT: BASE_API + 'alerts/patient',
    EQUIPMENT_LIST: RMS_API + "rehab-equipment-lists/",

    // Medication api
    MEDICATION_MASTER: RMS_API + "medication-masters/",
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
    DEPARTMENT_APPOINTMENTS: (departmentSlug) =>
        RMS_API + `appointment/appmts/${encodeURIComponent(departmentSlug)}/`,
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
    OTOSCOPIC_EXTRACT_URL,
    STT_SESSION_START_URL,
    STT_API_BASE,
    sttWebspeechUrl,
}
