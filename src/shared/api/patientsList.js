import api from "./apiClient";
import { API_URL } from "../../platform/config/api.config";

export function normalizePatientList(data) {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.results)) return data.results;
  if (Array.isArray(data?.data)) return data.data;
  if (Array.isArray(data?.data?.results)) return data.data.results;
  return [];
}

export async function fetchPatientsList(options = {}) {
  const params = new URLSearchParams();
  if (options.approvalStatus) {
    params.set("approval_status", options.approvalStatus);
  }
  const qs = params.toString();
  const url = qs ? `${API_URL.PATIENTS_LIST}?${qs}` : API_URL.PATIENTS_LIST;

  const res = await api.get(url, {
    headers: { accept: "application/json" },
  });
  return normalizePatientList(res.data);
}

export function fetchInPendingPatients() {
  return fetchPatientsList({ approvalStatus: "IN_PENDING" });
}

export async function updatePatientApprovalStatus(patientId, approvalStatus, extra = {}) {
  const res = await api.patch(
    API_URL.PATIENT_PARTIAL_UPDATE(patientId),
    { approval_status: approvalStatus, ...extra },
    { headers: { accept: "application/json" } },
  );
  return res.data;
}
