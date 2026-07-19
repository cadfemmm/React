/**
 * Audiology Progress Intervention — SOAP Subjective / Objective / Assessment / Plan
 * via AssessmentLoader (backend Progress forms, with local schema fallback).
 * Same pattern as Optometry Progress Intervention.
 */
import AssessmentLoader from "../../../assessment";

export default function AudiologyProgressAssessmentForm({ patient }) {
  return (
    <AssessmentLoader
      department="Audiology"
      patient={patient}
      visitType="PROGRESS"
    />
  );
}
