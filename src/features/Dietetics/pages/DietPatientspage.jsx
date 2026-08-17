import React from "react";
import DietInitialAssessmentForm from "../components/DietInitialAssessmentForm";
import DietFollowupAssessmentForm from "../components/DietFollowupAssessmentForm";
import DietProgressAssessmentForm from "../components/DietProgressAssessmentForm";

/**
 * Dietetics assessment entry — SOAP from local frontend forms/schemas only
 * (not backend AssessmentLoader).
 */
export default function DietPatientspage({
  patient,
  selectedPatients = [],
  patients = [],
  mode = "initial",
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

  if (mode === "followup") {
    return (
      <DietFollowupAssessmentForm
        patient={primaryPatient}
        onBack={onBack}
        onSubmit={onSubmit}
      />
    );
  }

  if (mode === "progress") {
    return (
      <DietProgressAssessmentForm
        patient={primaryPatient}
        onBack={onBack}
        onSubmit={onSubmit}
      />
    );
  }

  return (
    <DietInitialAssessmentForm
      patient={primaryPatient}
      onBack={onBack}
      onSubmit={onSubmit}
    />
  );
}
