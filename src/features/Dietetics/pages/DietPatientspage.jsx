import React from "react";
import AssessmentLoader from "../../../assessment";

/**
 * Dietetics assessment entry — all SOAP visit types load form content from the backend.
 */
export default function DietPatientspage({
  patient,
  selectedPatients = [],
  patients = [],
  mode,
  onBack,
  onSubmit,
}) {
  const participants = selectedPatients.length ? selectedPatients : patients;
  const primaryPatient = patient || participants[0] || null;

  if (!primaryPatient) {
    return (
      <div style={{ padding: 40, textAlign: "center", color: "#6b7280" }}>
        No patient selected.
      </div>
    );
  }

  const visitTypeByMode = {
    followup: "FOLLOWUP",
    progress: "PROGRESS",
    group: "GROUP",
    initial: "INITIAL",
  };

  const visitType = visitTypeByMode[mode] || "INITIAL";

  return (
    <AssessmentLoader
      department="Dietetics"
      patient={primaryPatient}
      visitType={visitType}
    />
  );
}
