import api from "./apiClient";
import { API_URL } from "../../platform/config/api.config";

function extractPatientArray(data) {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.results)) return data.results;
  if (Array.isArray(data?.data)) return data.data;
  if (Array.isArray(data?.data?.results)) return data.data.results;
  return [];
}

function calculateAgeFromDob(dob) {
  if (!dob) return null;
  const birthDate = new Date(dob);
  if (Number.isNaN(birthDate.getTime())) return null;

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }
  return age >= 0 ? age : null;
}

function resolvePatientAge(patient) {
  const parsed = Number(patient.age ?? patient.patient_age);
  if (Number.isFinite(parsed) && parsed >= 0) return parsed;

  const dob =
    patient.dob ||
    patient.date_of_birth ||
    patient.birth_date ||
    patient.dateOfBirth;
  return calculateAgeFromDob(dob);
}

function normalizePatientRecord(patient) {
  if (!patient || typeof patient !== "object") return patient;

  const name =
    patient.name ||
    patient.patient_name ||
    patient.full_name ||
    patient.email ||
    "";
  const mrn =
    patient.mrn ||
    patient.ic ||
    patient.ic_number ||
    patient.nric ||
    patient.identification_number ||
    patient.icd ||
    patient.patient_id ||
    "";
  const dob =
    patient.dob ||
    patient.date_of_birth ||
    patient.birth_date ||
    patient.dateOfBirth ||
    null;
  const age = resolvePatientAge({ ...patient, dob });

  return {
    ...patient,
    id: patient.id ?? patient.patient_id,
    name: name || patient.name,
    patient_name: patient.patient_name || name,
    mrn: mrn || patient.mrn,
    dob: dob || patient.dob,
    age: age ?? patient.age,
    gender: patient.gender || patient.sex || patient.gender,
    sex: patient.sex || patient.gender || patient.sex,
  };
}

export function normalizePatientList(data) {
  return extractPatientArray(data).map(normalizePatientRecord);
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
