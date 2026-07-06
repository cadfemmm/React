import React, { useMemo, useState, useEffect } from "react";
import { localDateTimeString } from "../utils/dateFormatter";
import { fetchPatientDetails } from "../api/patientsList";

const PRIMARY_ROW_COUNT = 2;
const COLS = 3;

function displayValue(value) {
  if (value === null || value === undefined || value === "") return "—";
  return String(value);
}

function getIcNumber(patient) {
  return (
    patient.ic ||
    patient.ic_number ||
    patient.nric ||
    patient.identification_number ||
    null
  );
}

function buildDemographics(patient) {
  const livingEnv =
    patient.living_environment === "Other" && patient.living_environment_other
      ? patient.living_environment_other
      : patient.living_environment;

  const education =
    patient.education_background === "Other" && patient.education_background_other
      ? patient.education_background_other
      : patient.education_background;

  return [
    { key: "dob", label: "Date of birth", value: localDateTimeString(patient.dob || patient.date_of_birth) },
    { key: "age_gender", label: "Age / gender", value: [patient.age ? `${patient.age} yrs` : null, patient.sex || patient.gender].filter(Boolean).join(" · ") || null },
    { key: "primary_dx", label: "Primary diagnosis", value: patient.diagnosis_history || patient.icd },
    { key: "marital", label: "Marital status", value: patient.marital_status },
    { key: "secondary_dx", label: "Secondary diagnosis", value: patient.medical_history || patient.secondary_diagnosis },
    { key: "living", label: "Living environment", value: livingEnv },
    { key: "caregiver", label: "Main caregiver", value: patient.main_caregiver },
    { key: "nok", label: "Next of kin", value: patient.next_of_kin },
    { key: "employment", label: "Employment status", value: patient.employment_status },
    { key: "mc_date", label: "MC date", value: patient.mc_date },
    { key: "scheme", label: "Scheme", value: patient.scheme },
    { key: "gl", label: "GL duration", value: patient.gl_date },
    { key: "dominant", label: "Dominant side", value: patient.dominant_side },
    { key: "language", label: "Language preference", value: patient.language_preference },
    { key: "education", label: "Education level", value: education },
    { key: "driving", label: "Driving status", value: patient.driving_status },
  ];
}

function FieldCell({ label, value }) {
  return (
    <div style={fieldCell}>
      <div style={fieldLabel}>{label}</div>
      <div style={fieldValue} title={displayValue(value)}>
        {displayValue(value)}
      </div>
    </div>
  );
}

export default function PatientCard({
  patient,
  patientHistory,
  setPatientHistory,
  showDoctorsReport = true,
  department,
  assignmentType,
  onAssignmentTypeChange,
  fetchDetails = true,
}) {
  const [expanded, setExpanded] = useState(false);
  const [details, setDetails] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);

  useEffect(() => {
    if (!fetchDetails || !patient) {
      setDetails(null);
      return;
    }

    if (!patient.id && !patient.patient_id) return;

    let cancelled = false;
    setDetailsLoading(true);

    fetchPatientDetails(patient)
      .then((data) => {
        if (!cancelled) setDetails(data);
      })
      .catch((error) => {
        console.error("Failed to load patient details:", error);
        if (!cancelled) setDetails(null);
      })
      .finally(() => {
        if (!cancelled) setDetailsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [fetchDetails, patient?.id, patient?.patient_id]);

  const displayPatient = useMemo(
    () => (patient ? { ...patient, ...(details || {}) } : null),
    [patient, details],
  );

  const demographics = useMemo(
    () => (displayPatient ? buildDemographics(displayPatient) : []),
    [displayPatient],
  );

  const primaryCount = PRIMARY_ROW_COUNT * COLS;
  const primaryFields = demographics.slice(0, primaryCount);
  const extraFields = demographics.slice(primaryCount);
  const hasMoreDemographics = extraFields.length > 0;
  const showHistory = Boolean(setPatientHistory || patientHistory);
  const hasExpandable = hasMoreDemographics || showHistory || department === "P&O";

  if (!patient) return <span style={{ color: "#64748b" }}>—</span>;

  const initials = (displayPatient.name || displayPatient.email || "?")
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div style={card} className="patient-card">
      <style>{`
        @media (max-width: 900px) {
          .patient-card .patient-card-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 560px) {
          .patient-card .patient-card-grid {
            grid-template-columns: 1fr;
          }
          .patient-card .patient-card-header {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>
      {/* Header */}
      <div style={cardHeader} className="patient-card-header">
        <div style={headerLeft}>
          <div style={avatar} aria-hidden>
            {initials}
          </div>
          <div style={headerText}>
            <div style={headerName}>{displayValue(displayPatient.name)}</div>
            <div style={headerIcRow}>
              <span style={headerIcLabel}>IC</span>
              <span style={headerIcValue}>{displayValue(getIcNumber(displayPatient))}</span>
            </div>
          </div>
        </div>
        <div style={headerActions}>
          <button
            type="button"
            style={alertBtn}
            onClick={() => alert("Alerts will be generating soon")}
          >
            Alerts
          </button>
          {showDoctorsReport && (
            <button
              type="button"
              style={reportBtnOutline}
              onClick={() => alert("Report will be generating soon")}
            >
              Doctor&apos;s reports
            </button>
          )}
        </div>
      </div>

      {/* Demographics — first 2 rows */}
      {detailsLoading ? (
        <div style={{ fontSize: 13, color: "#64748b", padding: "8px 0" }}>
          Loading patient details…
        </div>
      ) : (
        <div style={grid} className="patient-card-grid">
          {primaryFields.map((f) => (
            <FieldCell key={f.key} label={f.label} value={f.value} />
          ))}
        </div>
      )}

      {hasExpandable && (
        <button
          type="button"
          style={toggleBtn}
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          <span style={toggleChevron}>{expanded ? "▾" : "▸"}</span>
          {expanded ? "Show less" : "Show more"}
        </button>
      )}

      {expanded && hasExpandable && (
        <div style={expandedBlock}>
          {hasMoreDemographics && (
            <div style={{ ...grid, marginTop: 12 }} className="patient-card-grid">
              {extraFields.map((f) => (
                <FieldCell key={f.key} label={f.label} value={f.value} />
              ))}
            </div>
          )}

          {showHistory && (
            <div style={historySection}>
              <div style={historyHeading}>Patient history</div>
              <div style={historyGrid}>
                <HistoryField
                  label="Past medical history"
                  value={patientHistory?.past_medical_history || ""}
                  onChange={(v) => setPatientHistory?.((prev) => ({ ...prev, past_medical_history: v }))}
                  readOnly={!setPatientHistory}
                />
                <HistoryField
                  label="Family history"
                  value={patientHistory?.past_family_history || ""}
                  onChange={(v) => setPatientHistory?.((prev) => ({ ...prev, past_family_history: v }))}
                  readOnly={!setPatientHistory}
                />
                <HistoryField
                  label="Allergies"
                  value={patientHistory?.alerts_and_allergies || ""}
                  onChange={(v) => setPatientHistory?.((prev) => ({ ...prev, alerts_and_allergies: v }))}
                  readOnly={!setPatientHistory}
                />
                <HistoryField
                  label="Work history"
                  value={patientHistory?.work_history || ""}
                  onChange={(v) => setPatientHistory?.((prev) => ({ ...prev, work_history: v }))}
                  readOnly={!setPatientHistory}
                />
              </div>
            </div>
          )}

          {department === "P&O" && (
            <div style={assignmentSection}>
              <div style={assignmentHeader}>
                <span style={assignmentLabel}>What do you want to perform?</span>
                <div style={radioGroup}>
                  <label style={radioLabel}>
                    <input
                      type="radio"
                      name="assignment_type"
                      value="orthotics"
                      checked={assignmentType === "orthotics"}
                      onChange={(e) => onAssignmentTypeChange?.(e.target.value)}
                    />
                    Orthotics
                  </label>
                  <label style={radioLabel}>
                    <input
                      type="radio"
                      name="assignment_type"
                      value="prosthetics"
                      checked={assignmentType === "prosthetics"}
                      onChange={(e) => onAssignmentTypeChange?.(e.target.value)}
                    />
                    Prosthetics
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function HistoryField({ label, value, onChange, readOnly }) {
  return (
    <div style={historyField}>
      <label style={historyLabel}>{label}</label>
      {readOnly ? (
        <div style={historyReadonly}>{displayValue(value)}</div>
      ) : (
        <input
          type="text"
          className="form-control form-control-sm"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="—"
          style={historyInput}
        />
      )}
    </div>
  );
}

/* ================= STYLES ================= */

const card = {
  margin: "0 0 20px 0",
  padding: "20px 22px",
  background: "#fff",
  border: "1px solid #e2e8f0",
  borderRadius: 12,
  boxShadow: "0 1px 3px rgba(15, 23, 42, 0.06)",
};

const cardHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 16,
  flexWrap: "wrap",
  marginBottom: 18,
  paddingBottom: 16,
  borderBottom: "1px solid #f1f5f9",
};

const headerLeft = {
  display: "flex",
  alignItems: "center",
  gap: 14,
  minWidth: 0,
};

const avatar = {
  width: 44,
  height: 44,
  borderRadius: 10,
  background: "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)",
  color: "#1e40af",
  fontSize: 15,
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  border: "1px solid #bfdbfe",
};

const headerText = { minWidth: 0 };

const headerName = {
  fontSize: 18,
  fontWeight: 700,
  color: "#0f172a",
  lineHeight: 1.3,
  wordBreak: "break-word",
  marginBottom: 4,
};

const headerIcRow = {
  display: "flex",
  alignItems: "baseline",
  gap: 8,
  flexWrap: "wrap",
};

const headerIcLabel = {
  fontSize: 12,
  fontWeight: 600,
  color: "#64748b",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
};

const headerIcValue = {
  fontSize: 14,
  fontWeight: 500,
  color: "#334155",
  wordBreak: "break-word",
};

const headerActions = {
  display: "flex",
  gap: 8,
  flexWrap: "wrap",
  alignItems: "center",
};

const alertBtn = {
  padding: "8px 14px",
  borderRadius: 8,
  border: "none",
  background: "#2563eb",
  color: "#fff",
  fontWeight: 600,
  fontSize: 13,
  cursor: "pointer",
};

const reportBtnOutline = {
  padding: "8px 14px",
  borderRadius: 8,
  border: "1px solid #cbd5e1",
  background: "#fff",
  color: "#334155",
  fontWeight: 600,
  fontSize: 13,
  cursor: "pointer",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "14px 20px",
};

const fieldCell = {
  minWidth: 0,
};

const fieldLabel = {
  fontSize: 11,
  fontWeight: 600,
  color: "#64748b",
  textTransform: "uppercase",
  letterSpacing: "0.03em",
  marginBottom: 4,
};

const fieldValue = {
  fontSize: 14,
  fontWeight: 500,
  color: "#0f172a",
  lineHeight: 1.4,
  wordBreak: "break-word",
};

const toggleBtn = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  marginTop: 14,
  padding: "6px 0",
  border: "none",
  background: "transparent",
  color: "#2563eb",
  fontSize: 13,
  fontWeight: 600,
  cursor: "pointer",
};

const toggleChevron = {
  fontSize: 11,
  lineHeight: 1,
};

const expandedBlock = {
  marginTop: 4,
};

const historySection = {
  marginTop: 20,
  paddingTop: 18,
  borderTop: "1px solid #f1f5f9",
};

const historyHeading = {
  fontSize: 14,
  fontWeight: 700,
  color: "#0f172a",
  marginBottom: 14,
};

const historyGrid = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 14,
};

const historyField = { minWidth: 0 };

const historyLabel = {
  display: "block",
  fontSize: 12,
  fontWeight: 600,
  color: "#475569",
  marginBottom: 6,
};

const historyInput = {
  fontSize: 13,
};

const historyReadonly = {
  fontSize: 13,
  color: "#334155",
  padding: "6px 10px",
  background: "#f8fafc",
  borderRadius: 6,
  border: "1px solid #e2e8f0",
  minHeight: 34,
};

const assignmentSection = {
  marginTop: 20,
  paddingTop: 18,
  borderTop: "1px solid #f1f5f9",
};

const assignmentHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 12,
  width: "100%",
};

const assignmentLabel = {
  fontSize: 14,
  fontWeight: 600,
  color: "#0f172a",
};

const radioGroup = {
  display: "flex",
  alignItems: "center",
  gap: 20,
};

const radioLabel = {
  display: "flex",
  alignItems: "center",
  gap: 6,
  cursor: "pointer",
  fontSize: 14,
  color: "#334155",
};
