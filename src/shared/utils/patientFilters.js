/**
 * Patient list approval helpers.
 * Clinical queues show only approved patients; pending/denied are hidden.
 */

export function getPatientApprovalStatus(patient) {
  if (!patient) return "";
  const raw =
    patient.approval_status ??
    patient.registration_status ??
    patient.patient_approval_status ??
    "";
  return String(raw).trim().toLowerCase();
}

const PENDING_APPROVAL_STATUSES = new Set([
  "pending",
  "awaiting approval",
  "awaiting_approval",
  "in_pending",
]);

const DENIED_APPROVAL_STATUSES = new Set([
  "denied",
  "rejected",
  "declined",
]);

export function isPatientApproved(patient) {
  if (!patient) return false;
  if (patient.is_approved === true) return true;
  if (patient.is_approved === false) return false;

  const approval = getPatientApprovalStatus(patient);
  if (approval === "approved") return true;
  if (PENDING_APPROVAL_STATUSES.has(approval)) return false;
  if (DENIED_APPROVAL_STATUSES.has(approval)) return false;

  // RMS clinical queue: no explicit approval field → show in Today's Patients
  if (!approval) return true;

  return approval === "approved";
}

export function isPatientPending(patient) {
  const s = getPatientApprovalStatus(patient);
  return s === "pending" || s === "awaiting approval" || s === "awaiting_approval";
}

/** Approve/Deny queue — RMS patients with approval_status IN_PENDING only */
export function isPatientInPending(patient) {
  if (!patient) return false;
  const raw = patient.approval_status ?? patient.patient_approval_status ?? "";
  return String(raw).trim().toUpperCase() === "IN_PENDING";
}

export function filterApprovedPatients(patients) {
  return (patients || []).filter(isPatientApproved);
}

export function patientBelongsToDepartment(patient, department) {
  if (!department) return true;
  if (!Array.isArray(patient?.departments)) return true;
  const deptLower = String(department).toLowerCase();
  const assigned = patient.departments.map((d) => String(d).toLowerCase());
  if (deptLower === "nursing") {
    return assigned.includes("nursing") || assigned.includes("medical assistant");
  }
  return assigned.includes(deptLower);
}

export function filterPatientsForDepartment(patients, department) {
  return (patients || []).filter(
    (p) => patientBelongsToDepartment(p, department) && isPatientApproved(p),
  );
}
