import React from "react";
import InitialAssessmentForm from "../components/DietInitialAssessmentForm";
import DietFollowupAssessmentForm from "../components/DietFollowupAssessmentForm";
import DietProgressAssessmentForm from "../components/DietProgressAssessmentForm";
import DietGroupIntervention from "../components/DietGroup";

export default function DietPatientspage({
  patient,
  selectedPatients = [],
  patients = [],
  mode,
  onBack,
  onSubmit,
}) {
  switch (mode) {
    case "followup":
      return (
        <DietFollowupAssessmentForm
          patient={patient}
          onBack={onBack}
          onSubmit={onSubmit}
        />
      );

    case "progress":
      return (
        <DietProgressAssessmentForm
          patient={patient}
          onBack={onBack}
          onSubmit={onSubmit}
        />
      );

    case "group":
      return (
        <DietGroupIntervention
          patient={patient}
          selectedPatients={selectedPatients}
          patients={patients}
          onBack={onBack}
          onSubmit={onSubmit}
        />
      );

    default:
      return (
        <InitialAssessmentForm
          patient={patient}
          onBack={onBack}
          onSubmit={onSubmit}
        />
      );
  }
}