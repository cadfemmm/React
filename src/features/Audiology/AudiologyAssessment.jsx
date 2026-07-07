import AudiologyDepartmentAdultPage from "./components/AudiologyAdultIA";
import AudiologyDepartmentPediatricPage from "./components/AudiologyPediatricIA";

export const ADULT_AGE_THRESHOLD = 20;

export function getAudiologyPatientAge(patient) {
  return Number(patient?.age ?? 99);
}

export function isPediatricAudiologyPatient(patient) {
  return getAudiologyPatientAge(patient) < ADULT_AGE_THRESHOLD;
}

export default function AudiologyAssessment({
  patient,
  mode = "initial",
  onSubmit,
  onBack,
  onUpdatePatient,
}) {
  const Component = isPediatricAudiologyPatient(patient)
    ? AudiologyDepartmentPediatricPage
    : AudiologyDepartmentAdultPage;

  return (
    <Component
      patient={patient}
      mode={mode}
      onSubmit={onSubmit}
      onBack={onBack}
      onUpdatePatient={onUpdatePatient}
    />
  );
}
