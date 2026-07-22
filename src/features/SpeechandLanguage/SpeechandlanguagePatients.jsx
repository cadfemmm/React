import React from "react";
import DepartmentAppointmentPatients from "../common/DepartmentAppointmentPatients";
import AssessmentLoader from "../../assessment";

const SPEECH_DEPARTMENT = "Speech & Language Therapy";

const VISIT_TYPE_BY_MODE = {
  initial: "INITIAL",
  followup: "FOLLOWUP",
  progress: "PROGRESS",
  group: "GROUP",
};

/**
 * Speech & Language patients — same appointment queue UI as Optometry,
 * SOAP content from backend via AssessmentLoader (Start / Submit / Preview / PatientCard).
 */
export default function SpeechPatients(props) {
  return (
    <DepartmentAppointmentPatients
      {...props}
      department={SPEECH_DEPARTMENT}
      queueLabel="Today's speech & language appointment queue"
      renderAssessment={({ patient, assessmentView }) => (
        <AssessmentLoader
          department={SPEECH_DEPARTMENT}
          patient={patient}
          visitType={VISIT_TYPE_BY_MODE[assessmentView] || "INITIAL"}
        />
      )}
    />
  );
}
