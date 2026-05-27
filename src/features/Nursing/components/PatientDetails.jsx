import React from "react";
import NursingAssessment from "./NursingAssessment";

export default function PatientDetails({ patient, onBack }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12, padding: "16px 24px 0" }}>
        <button
          onClick={onBack}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#2563eb", fontSize: 14 }}
        >
          Back
        </button>
      </div>

      <NursingAssessment patient={patient} onSubmit={(v) => console.log(v)} onBack={onBack} />
    </div>
  );
}
