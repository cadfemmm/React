import React from "react";
import DepartmentAppointmentPatients from "../common/DepartmentAppointmentPatients";
import DietPatientspage from "./pages/DietPatientspage";

export default function DieteticsPatients(props) {
  return (
    <DepartmentAppointmentPatients
      {...props}
      department="Dietetics"
      queueLabel="Today's dietetics appointment queue"
      renderAssessment={({ patient, assessmentView, onBackToCards }) => (
        <DietPatientspage
          patient={patient}
          mode={assessmentView}
          onBack={onBackToCards}
        />
      )}
    />
  );
}
