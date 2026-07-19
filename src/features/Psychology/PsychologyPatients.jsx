import React from "react";
import DepartmentAppointmentPatients from "../common/DepartmentAppointmentPatients";
import PsychologyAssessment from "./components/PsychologyAssessment";

export default function PsychologyPatients(props) {
  return (
    <DepartmentAppointmentPatients
      {...props}
      department="Psychology"
      queueLabel="Today's psychology appointment queue"
      renderAssessment={({ patient, assessmentView, onBackToCards }) => (
        <PsychologyAssessment
          patient={patient}
          mode={assessmentView}
          onBack={onBackToCards}
          onSubmit={() => onBackToCards()}
        />
      )}
    />
  );
}
