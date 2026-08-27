import React, { useState } from "react";
import AssessmentLoader from "../../../assessment";
import NursingAssessment from "./NursingAssessment";

/**
 * Nursing patient detail.
 *
 * Default: renders AssessmentLoader (department="Nursing"), which loads the
 * backend template (master-data/template/?department_name=Nursing&screening_name=INITIAL)
 * and renders the SOAP tabs (subjective / objective / assessment / plan) via
 * FormBuilder. This is the path that makes backend-admin schema edits appear.
 *
 * If no Nursing template is configured in the backend yet, AssessmentLoader
 * shows its own "No form available" empty state — use the toggle below to fall
 * back to the legacy hardcoded NursingAssessment form.
 */
export default function PatientDetails({ patient, onBack }) {
  const [useBackendTemplate, setUseBackendTemplate] = useState(true);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12, padding: "16px 24px 0" }}>
        <button
          onClick={onBack}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#2563eb", fontSize: 14 }}
        >
          Back
        </button>

        <label style={{ marginLeft: "auto", fontSize: 12, color: "#475569", display: "flex", alignItems: "center", gap: 6 }}>
          <input
            type="checkbox"
            checked={useBackendTemplate}
            onChange={(e) => setUseBackendTemplate(e.target.checked)}
          />
          Use backend template (AssessmentLoader)
        </label>
      </div>

      {useBackendTemplate ? (
        <AssessmentLoader
          department="Nursing"
          patient={patient}
          visitType="INITIAL"
        />
      ) : (
        <NursingAssessment patient={patient} onSubmit={(v) => console.log(v)} onBack={onBack} />
      )}
    </div>
  );
}
