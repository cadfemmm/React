import apiClient from '../../../shared/api/apiClient';
import { API_URL } from '../../../platform/config/api.config';
export const fetchBookingQueue = async (params = {}) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const { data } = await apiClient.get(API_URL.BOOKING_QUEUE, {
        params: {
            page: (_a = params.page) !== null && _a !== void 0 ? _a : 1,
            limit: (_b = params.limit) !== null && _b !== void 0 ? _b : 10,
            search: ((_c = params.search) === null || _c === void 0 ? void 0 : _c.trim()) || undefined,
            priority: params.priority || undefined,
            sla: params.sla || undefined,
            consent_status: params.consent_status || undefined,
            department_id: params.department_id || undefined,
        },
    });
    return {
        rows: (_d = data === null || data === void 0 ? void 0 : data.data) !== null && _d !== void 0 ? _d : [],
        meta: (_e = data === null || data === void 0 ? void 0 : data.meta) !== null && _e !== void 0 ? _e : {
            page: (_f = params.page) !== null && _f !== void 0 ? _f : 1,
            limit: (_g = params.limit) !== null && _g !== void 0 ? _g : 10,
            total_record_count: 0,
            total_pages: 0,
            has_next: false,
            has_previous: false,
        },
    };
};
export const continueSlots = async (bookingId, payload) => {
    const { data } = await apiClient.post(API_URL.BOOKING_QUEUE_CONTINUE_SLOTS(bookingId), payload);
    return data.data;
};
export const reserveBooking = async (bookingId, payload) => {
    const { data } = await apiClient.post(API_URL.BOOKING_QUEUE_BOOK_RESERVE(bookingId), payload);
    return data.data;
};
export const confirmBooking = async (bookingId, payload) => {
    const { data } = await apiClient.post(API_URL.BOOKING_QUEUE_BOOK_CONFIRM(bookingId), payload);
    return data.data;
};
export const fetchBookingQueueSummary = async () => {
    const { data } = await apiClient.get(API_URL.BOOKING_QUEUE_SUMMARY);
    return data.data;
};
