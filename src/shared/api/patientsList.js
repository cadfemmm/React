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
    id: patient.id ?? record.patient_uuid ?? record.patient_id ?? patient.patient_id ?? record.id,
    patient_id: record.patient_id ?? patient.patient_id ?? patient.id,
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

/**
 * Optometry / Audiology use path aliases:
 *   GET appointment/appmts/{slug}/
 * Dietetics / Psychology use department_id query:
 *   GET appointment/appmts/?department_id={uuid}
 */
const DEPARTMENT_APPOINTMENT_PATH_SLUGS = {
  Optometry: "optometry",
  Audiology: "audiology",
};

const DEPARTMENT_APPOINTMENT_IDS = {
  Dietetics: "d04eda05-115c-4799-b440-4af90029056a",
  Psychology: "a700d94c-dbd0-45fc-ae64-6544b1bc403d",
  "Speech & Language Therapy": "af441a63-7ffb-452f-b42a-11d53790e86b",
};

function normalizeDepartmentKey(name) {
  const raw = String(name || "").trim().replace(/\s+department$/i, "");
  const match = Object.keys({
    ...DEPARTMENT_APPOINTMENT_PATH_SLUGS,
    ...DEPARTMENT_APPOINTMENT_IDS,
  }).find((k) => k.toLowerCase() === raw.toLowerCase());
  return match || raw;
}

async function fetchAppointmentsByPathKey(pathKey, options = {}) {
  const limit = options.limit ?? 10;
  const params = {
    page: options.page ?? 1,
    limit,
  };

  const res = await api.get(API_URL.DEPARTMENT_APPOINTMENTS(pathKey), {
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

async function fetchAppointmentsByDepartmentId(departmentId, options = {}) {
  const limit = options.limit ?? 10;
  const params = {
    department_id: departmentId,
    page: options.page ?? 1,
    limit,
  };

  const res = await api.get(API_URL.DEPARTMENT_APPOINTMENTS_ROOT, {
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

/**
 * Load today's appointments for a department.
 * @param {string} departmentSlugOrName - slug ("optometry") or display name ("Dietetics")
 */
export async function fetchDepartmentAppointments(departmentSlugOrName, options = {}) {
  const raw = String(departmentSlugOrName || "").trim();
  if (!raw) {
    return { patients: [], meta: { page: 1, limit: options.limit ?? 10, total: 0 } };
  }

  const deptKey = normalizeDepartmentKey(raw);
  const departmentId = DEPARTMENT_APPOINTMENT_IDS[deptKey];
  if (departmentId) {
    return fetchAppointmentsByDepartmentId(departmentId, options);
  }

  const pathSlug =
    DEPARTMENT_APPOINTMENT_PATH_SLUGS[deptKey] ||
    (/^[a-z0-9_-]+$/i.test(raw) ? raw.toLowerCase() : null);

  if (!pathSlug) {
    throw new Error(`No appointments endpoint configured for ${raw}`);
  }

  return fetchAppointmentsByPathKey(pathSlug, options);
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

function formatEnumLabel(value) {
  if (!value) return null;
  return String(value)
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function formatGender(value) {
  if (!value) return null;
  const normalized = String(value).trim().toUpperCase();
  if (normalized === "M" || normalized === "MALE") return "Male";
  if (normalized === "F" || normalized === "FEMALE") return "Female";
  return formatEnumLabel(value);
}

function formatDisplayDate(dateStr) {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatGlDuration(coverage) {
  if (!coverage) return null;
  const start = formatDisplayDate(coverage.coverage_start_date);
  const end = formatDisplayDate(coverage.coverage_end_date);
  if (start && end) return `${start} – ${end}`;
  return start || end || null;
}

export function mapPatientDetailsFromApi(data) {
  if (!data || typeof data !== "object") return {};

  const carers = Array.isArray(data.carers) ? data.carers : [];
  const caregiver = carers.find((c) => c.is_caregiver) || carers[0];
  const emergencyContact =
    carers.find((c) => c.is_emergency_contact_person) || caregiver;
  const dob = data.date_of_birth || data.dob;

  return {
    ...data,
    id: data.id,
    patient_id: data.patient_id,
    name: data.patient_name || data.name,
    patient_name: data.patient_name,
    ic: data.ic,
    mrn: data.mrn,
    dob,
    date_of_birth: dob,
    age: resolvePatientAge({ ...data, dob }),
    gender: formatGender(data.gender),
    sex: formatGender(data.gender),
    marital_status: formatEnumLabel(data.marital_status),
    language_preference: data.language_preference,
    diagnosis_history: data.case?.diagnosis || null,
    referral_diagnosis: data.case?.diagnosis || null,
    icd: data.case?.diagnosis || null,
    secondary_diagnosis: data.case?.referral_details || null,
    scheme:
      data.patient_category ||
      data.case?.gl_details?.existing_payer_type ||
      null,
    gl_date: formatGlDuration(data.case?.coverage),
    main_caregiver: caregiver?.full_name || null,
    next_of_kin:
      data.emergency_contact_person || emergencyContact?.full_name || null,
    employment_status: data.occupation || formatEnumLabel(data.client_type),
    email: data.email,
    phone: data.phone,
    address: data.address,
    nationality: data.nationality,
    state: data.state,
    patient_category: data.patient_category,
    approval_status: data.approval_status,
  };
}

function getPatientDetailsFetchIds(patient) {
  if (!patient) return [];
  return [...new Set(
    [patient.id, patient.patient_id, patient.patient_uuid]
      .filter(Boolean)
      .map(String),
  )];
}

export async function fetchPatientDetails(patientOrId) {
  const ids =
    typeof patientOrId === "string" || typeof patientOrId === "number"
      ? [String(patientOrId)]
      : getPatientDetailsFetchIds(patientOrId);

  if (!ids.length) {
    throw new Error("Patient id is required");
  }

  let lastError;
  for (const patientId of ids) {
    try {
      const res = await api.get(API_URL.PATIENT_DETAILS(patientId), {
        headers: { accept: "application/json" },
      });
      const data = res.data?.data ?? res.data;
      return mapPatientDetailsFromApi(data);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError ?? new Error("Failed to fetch patient details");
}
