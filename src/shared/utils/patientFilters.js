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
    patient.status ??
    "";
  return String(raw).trim().toLowerCase();
}

export function isPatientApproved(patient) {
  if (!patient) return false;
  if (patient.is_approved === true) return true;
  return getPatientApprovalStatus(patient) === "approved";
}

export function isPatientPending(patient) {
  const s = getPatientApprovalStatus(patient);
  return s === "pending" || s === "awaiting approval" || s === "awaiting_approval";
}

export function filterApprovedPatients(patients) {
  return (patients || []).filter(isPatientApproved);
}
