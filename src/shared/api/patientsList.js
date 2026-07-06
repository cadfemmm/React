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

function extractAppointmentArray(data) {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.data)) return data.data;
  if (Array.isArray(data?.results)) return data.results;
  if (Array.isArray(data?.data?.results)) return data.data.results;
  return [];
}

function mapAppointmentToPatient(record) {
  if (!record || typeof record !== "object") return record;

  const patient =
    record.patient ||
    record.patient_details ||
    record.patient_info ||
    {};

  const name =
    record.patient_name ||
    patient.name ||
    patient.full_name ||
    patient.patient_name ||
    "";
  const mrn =
    record.mrn ||
    record.ic_number ||
    record.ic ||
    record.nric ||
    patient.mrn ||
    patient.ic_number ||
    patient.ic ||
    patient.nric ||
    "";

  return {
    ...patient,
    ...record,
    id: record.patient_id ?? patient.id ?? patient.patient_id ?? record.id,
    patient_id: record.patient_id ?? patient.id ?? patient.patient_id ?? record.id,
    name,
    patient_name: name,
    mrn,
    ic: mrn || record.ic,
    status:
      record.status ||
      record.appointment_status ||
      record.visit_status ||
      record.queue_status ||
      "New",
    icd: record.icd ?? patient.icd ?? record.diagnosis,
    appointment_id: record.appointment_id ?? record.id,
    appointment_date:
      record.appointment_date ||
      record.appointment_date_myt ||
      record.scheduled_at ||
      record.appointment_time ||
      record.slot_time,
    appointment_date_myt: record.appointment_date_myt ?? record.appointment_date,
    start_time_myt: record.start_time_myt ?? record.start_time,
    end_time_myt: record.end_time_myt ?? record.end_time,
    appointment_type: record.appointment_type ?? record.visit_type,
  };
}

function parseMytDateTime(dateStr, timeStr) {
  if (!dateStr) return 0;
  const combined = timeStr ? `${dateStr} ${timeStr}` : dateStr;
  const ts = new Date(combined).getTime();
  return Number.isNaN(ts) ? 0 : ts;
}

function sortAppointmentsByLatest(records = []) {
  return [...records].sort((a, b) => {
    const aTs = parseMytDateTime(
      a.appointment_date_myt ?? a.appointment_date,
      a.start_time_myt,
    );
    const bTs = parseMytDateTime(
      b.appointment_date_myt ?? b.appointment_date,
      b.start_time_myt,
    );
    return bTs - aTs;
  });
}

export function formatAppointmentDateTime(patient) {
  const date = patient?.appointment_date_myt ?? patient?.appointment_date;
  const start = patient?.start_time_myt;
  const end = patient?.end_time_myt;

  if (!date && !start) return "—";

  let dateLabel = date || "";
  if (date) {
    const parsed = new Date(`${date}T00:00:00`);
    dateLabel = Number.isNaN(parsed.getTime())
      ? date
      : parsed.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
  }

  const timeLabel = [start, end].filter(Boolean).join(" – ");
  return [dateLabel, timeLabel].filter(Boolean).join(" · ");
}

export async function fetchDepartmentAppointments(departmentSlug, options = {}) {
  const limit = options.limit ?? 10;
  const params = {
    page: options.page ?? 1,
    limit,
  };

  const res = await api.get(API_URL.DEPARTMENT_APPOINTMENTS(departmentSlug), {
    params,
    headers: { accept: "application/json" },
  });

  const rows = sortAppointmentsByLatest(
    extractAppointmentArray(res.data).map(mapAppointmentToPatient),
  ).slice(0, limit);
  const meta = res.data?.meta ?? {};

  return {
    patients: normalizePatientList(rows),
    meta: {
      page: meta.page ?? params.page,
      limit,
      total: meta.total_record_count ?? meta.total ?? rows.length,
      hasNext: meta.has_next ?? false,
      hasPrevious: meta.has_previous ?? false,
    },
  };
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
