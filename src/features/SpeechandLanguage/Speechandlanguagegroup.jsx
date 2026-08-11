import React from "react";
import SpeechAssessment from "./SpeechAssessment";

/**
 * Speech & Language Group Intervention — single unified form from backend
 * (not split into SOAP tabs). Includes Start, Submit, and Preview.
 */
export default function SpeechGroupIntervention({
  patient,
  selectedPatients = [],
  patients = [],
  onBack,
}) {
  const participants = selectedPatients.length ? selectedPatients : patients;
  const primaryPatient = patient || participants[0] || null;

  if (!primaryPatient) {
    return (
      <div style={{ padding: 40, textAlign: "center", color: "#6b7280" }}>
        <div style={{ fontSize: 16, fontWeight: 600, color: "#374151" }}>
          No patients selected
        </div>
        <div style={{ fontSize: 13, marginTop: 6 }}>
          Go back and select at least one participant for the group session.
        </div>
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            style={{
              marginTop: 20,
              padding: "9px 20px",
              borderRadius: 8,
              border: "1px solid #2563eb",
              background: "#fff",
              color: "#2563eb",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            ← Back
          </button>
        )}
      </div>
    );
  }

  return (
    <div>
      {participants.length > 0 && (
        <div
          style={{
            margin: "12px 16px 0",
            padding: "12px 14px",
            borderRadius: 10,
            border: "1px solid #fecaca",
            background: "#fef2f2",
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 700, color: "#991b1b" }}>
            Group session — {participants.length} participant
            {participants.length !== 1 ? "s" : ""}
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              marginTop: 8,
            }}
          >
            {participants.map((p) => (
              <span
                key={p.id ?? p.patient_id ?? p.mrn}
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#7f1d1d",
                  background: "#fff",
                  border: "1px solid #fecaca",
                  borderRadius: 999,
                  padding: "4px 10px",
                }}
              >
                {p.name || p.patient_name || p.mrn || "Patient"}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Schema-only fallback: render Speech & Language assessment UI for
          the primary patient (no backend AssessmentLoader). */}
      <SpeechAssessment patient={primaryPatient} mode="initial" onBack={onBack} />
    </div>
  );
}
