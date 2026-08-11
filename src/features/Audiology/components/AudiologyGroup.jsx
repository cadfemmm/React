import { useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import PatientCard from "../../../shared/cards/PatientCard";
import AUDIOLOGY_GROUP_SCHEMA from "../../../schema/audiology/group";
import { ASSESSMENT_TABS, TAB_META } from "../../../schema/actions";

/**
 * Audiology Group Intervention — SOAP from local schema
 * (src/schema/audiology/group.js), not backend AssessmentLoader.
 */
export default function AudiologyGroupAssessmentForm({
  patient,
  selectedPatients = [],
  patients = [],
  onBack,
  onSubmit,
}) {
  const participants = selectedPatients.length ? selectedPatients : patients;
  const primaryPatient = patient || participants[0] || null;

  const [values, setValues] = useState({});
  const [activeTab, setActiveTab] = useState("subjective");
  const [submitted, setSubmitted] = useState(false);

  const activeTabIdx = ASSESSMENT_TABS.indexOf(activeTab);

  const handleChange = (name, value) =>
    setValues((prev) => ({ ...prev, [name]: value }));

  const handleAction = (type) => {
    if (type === "back") {
      onBack?.();
      return;
    }
    if (type === "clear") {
      setValues({});
      setSubmitted(false);
      return;
    }
    if (type === "save") {
      onSubmit?.(values);
      return;
    }
    if (type === "next") {
      if (activeTabIdx < ASSESSMENT_TABS.length - 1) {
        setActiveTab(ASSESSMENT_TABS[activeTabIdx + 1]);
      }
    }
  };

  const schemaMap = {
    subjective: AUDIOLOGY_GROUP_SCHEMA.SUBJECTIVE,
    objective: AUDIOLOGY_GROUP_SCHEMA.OBJECTIVE,
    assessment: AUDIOLOGY_GROUP_SCHEMA.ASSESSMENT,
    plan: AUDIOLOGY_GROUP_SCHEMA.PLAN,
  };

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
    <div style={S.page}>
      {participants.length > 0 && (
        <div style={S.groupBanner}>
          <div style={S.groupTitle}>
            Group session — {participants.length} participant
            {participants.length !== 1 ? "s" : ""}
          </div>
          <div style={S.chipRow}>
            {participants.map((p) => (
              <span
                key={p.id ?? p.patient_id ?? p.mrn}
                style={S.chip}
              >
                {p.name || p.patient_name || p.mrn || "Patient"}
              </span>
            ))}
          </div>
        </div>
      )}

      <div style={S.patientCardWrap}>
        <PatientCard patient={primaryPatient} />
      </div>

      <div style={S.soapShell}>
        <div style={S.tabBar}>
          {ASSESSMENT_TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                style={{ ...S.tab, ...(isActive ? S.tabActive : {}) }}
                onClick={() => setActiveTab(tab)}
              >
                {TAB_META[tab].label}
              </button>
            );
          })}
        </div>

        <div style={S.tabContent}>
          <CommonFormBuilder
            schema={schemaMap[activeTab]}
            values={values}
            onChange={handleChange}
            submitted={submitted}
            onAction={handleAction}
          >
            {activeTab !== "plan" ? (
              <div style={S.actionRow}>
                <button
                  type="button"
                  style={S.nextBtn}
                  onClick={() => handleAction("next")}
                >
                  Next: {TAB_META[ASSESSMENT_TABS[activeTabIdx + 1]]?.label} →
                </button>
              </div>
            ) : (
              <div style={S.actionRow}>
                <button
                  type="button"
                  style={S.submitBtn}
                  onClick={() => {
                    setSubmitted(true);
                    onSubmit?.(values);
                  }}
                >
                  Submit Group Intervention
                </button>
              </div>
            )}
          </CommonFormBuilder>
        </div>
      </div>
    </div>
  );
}

const S = {
  page: {
    background: "#f0f4f8",
    minHeight: "100vh",
    fontFamily: "'Inter', 'Segoe UI', Roboto, sans-serif",
    padding: 16,
  },
  groupBanner: {
    margin: "0 0 12px",
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid #bfdbfe",
    background: "#eff6ff",
  },
  groupTitle: { fontSize: 13, fontWeight: 700, color: "#1e40af" },
  chipRow: { display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 },
  chip: {
    fontSize: 12,
    fontWeight: 600,
    color: "#1d4ed8",
    background: "#fff",
    border: "1px solid #bfdbfe",
    borderRadius: 999,
    padding: "4px 10px",
  },
  patientCardWrap: {
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 12,
  },
  soapShell: {
    background: "#fff",
    borderRadius: 12,
    border: "1px solid #e2e8f0",
    overflow: "hidden",
  },
  tabBar: {
    display: "flex",
    gap: 0,
    borderBottom: "1px solid #e2e8f0",
    background: "#f8fafc",
  },
  tab: {
    flex: 1,
    padding: "12px 8px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 600,
    color: "#64748b",
  },
  tabActive: {
    color: "#1d4ed8",
    borderBottom: "2px solid #1d4ed8",
    background: "#fff",
  },
  tabContent: { padding: 16 },
  actionRow: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 16,
    gap: 8,
  },
  nextBtn: {
    padding: "10px 18px",
    borderRadius: 8,
    border: "1px solid #2563eb",
    background: "#fff",
    color: "#2563eb",
    fontWeight: 600,
    cursor: "pointer",
  },
  submitBtn: {
    padding: "10px 18px",
    borderRadius: 8,
    border: "none",
    background: "#2563eb",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
  },
};
