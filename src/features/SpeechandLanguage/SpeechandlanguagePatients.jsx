import React from "react";
import DepartmentAppointmentPatients, {
  SPEECH_DUMMY_PATIENTS,
} from "../common/DepartmentAppointmentPatients";
import SpeechAssessment from "./SpeechAssessment";
import SpeechTherapyAdultSOAP from "./SpeechandlanguageAdultprogress";
import SpeechTherapyPaedSOAP from "./SpeechandlanguagePaedprogress";

const SPEECH_DEPARTMENT = "Speech & Language Therapy";

const ADULT_AGE_THRESHOLD = 20;
function isAdult(patient) {
  return Number(patient?.age ?? 99) >= ADULT_AGE_THRESHOLD;
}

/**
 * Speech & Language patients — same appointment queue UI as Optometry,
 * SOAP content from frontend schemas only (no backend AssessmentLoader).
 */
export default function SpeechPatients(props) {
  return (
    <DepartmentAppointmentPatients
      {...props}
      department={SPEECH_DEPARTMENT}
      queueLabel="Today's speech & language appointment queue"
      fallbackPatients={SPEECH_DUMMY_PATIENTS}
      renderAssessment={({ patient, assessmentView, onBackToCards }) => (
        <>
          {(assessmentView === "initial" || assessmentView === "followup") && (
            <SpeechAssessment
              patient={patient}
              mode={assessmentView}
              onBack={onBackToCards}
            />
          )}

          {assessmentView === "progress" && (
            <>
              {isAdult(patient) ? (
                <SpeechTherapyAdultSOAP patient={patient} onBack={onBackToCards} />
              ) : (
                <SpeechTherapyPaedSOAP patient={patient} onBack={onBackToCards} />
              )}
            </>
          )}
        </>
      )}
    />
  );
}
