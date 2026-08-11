import { useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import PatientCard from "../../../shared/cards/PatientCard";
import AUDIOLOGY_PROGRESS_SCHEMA from "../../../schema/audiology/progress";
import { ASSESSMENT_TABS, TAB_META } from "../../../schema/actions";

/**
 * Audiology Progress Intervention — SOAP from local schema
 * (src/schema/audiology/progress.js), not backend AssessmentLoader.
 */
export default function AudiologyProgressAssessmentForm({
  patient,
  onSubmit,
  onBack,
}) {
  const [values, setValues] = useState({ session_number: "1" });
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
      setValues({ session_number: "1" });
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
    subjective: AUDIOLOGY_PROGRESS_SCHEMA.SUBJECTIVE,
    objective: AUDIOLOGY_PROGRESS_SCHEMA.OBJECTIVE,
    assessment: AUDIOLOGY_PROGRESS_SCHEMA.ASSESSMENT,
    plan: AUDIOLOGY_PROGRESS_SCHEMA.PLAN,
  };

  return (
    <div style={S.page}>
      <div style={S.patientCardWrap}>
        <PatientCard patient={patient} />
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
                  Submit Progress Intervention
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
  patientCardWrap: {
    borderRadius: 10,
    overflow: "hidden",
    boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
    marginBottom: 14,
    border: "1px solid #e0f2fe",
  },
  soapShell: {
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    border: "1px solid #e2e8f0",
  },
  tabBar: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    background: "#fff",
  },
  tab: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px 8px",
    background: "none",
    border: "none",
    borderBottom: "3px solid transparent",
    marginBottom: -1,
    fontSize: 13,
    fontWeight: 500,
    color: "#64748b",
    cursor: "pointer",
  },
  tabActive: {
    color: "#2563eb",
    fontWeight: 700,
    borderBottomColor: "#2563eb",
  },
  tabContent: { width: "100%" },
  actionRow: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "16px 24px",
    borderTop: "1px solid #e2e8f0",
    background: "#f8fafc",
  },
  nextBtn: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "9px 24px",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
  },
  submitBtn: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "9px 24px",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
  },
};
