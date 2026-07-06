import { useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import PatientCard from "../../../shared/cards/PatientCard";

// Schema
import OPTO_PRO_SCHEMA from "../../../schema/optometry/progress"
import { ASSESSMENT_TABS, TAB_META } from "../../../schema/actions"

/* ── Main component ── */
export default function OptometryProgressAssessment({ patient, onSubmit, onBack }) {
  const [values,    setValues]    = useState({ session_number: "1" });
  const [activeTab, setActiveTab] = useState("subjective");

  const activeTabIdx = ASSESSMENT_TABS.indexOf(activeTab);

  const handleChange = (name, value) => setValues((prev) => ({ ...prev, [name]: value }));

  const handleAction = (type) => {
    if (type === "back")  { onBack?.(); return; }
    if (type === "clear") { setValues({ session_number: "1" }); return; }
    if (type === "save")  { onSubmit?.(values); return; }
    if (type === "next") {
      const idx = ASSESSMENT_TABS.indexOf(activeTab);
      if (idx < ASSESSMENT_TABS.length - 1) setActiveTab(ASSESSMENT_TABS[idx + 1]);
    }
  };
  const schemaMap = {
    subjective: OPTO_PRO_SCHEMA.SUBJECTIVE,
    objective: OPTO_PRO_SCHEMA.OBJECTIVE,
    assessment: OPTO_PRO_SCHEMA.ASSESSMENT,
    plan: OPTO_PRO_SCHEMA.PLAN
  }
  return (
    <div style={S.page}>
      {/* Patient header */}
      <div style={S.patientCardWrap}>
        <PatientCard patient={patient} />
      </div>

      {/* SOAP shell */}
      <div style={S.soapShell}>
        {/* Tab bar */}
        <div style={S.tabBar}>
          {ASSESSMENT_TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                style={{ ...S.tab, ...(isActive ? S.tabActive : {}) }}
                onClick={() => setActiveTab(tab)}
              >
                {TAB_META[tab].label}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <div style={S.tabContent}>
          <CommonFormBuilder
            schema={schemaMap[activeTab]}
            values={values}
            onChange={handleChange}
            onAction={handleAction}
          >
            {activeTab !== "plan" && (
              <div style={S.actionRow}>
                <button
                  style={S.nextBtn}
                  onMouseEnter={e => e.currentTarget.style.background = "#1a6fc4"}
                  onMouseLeave={e => e.currentTarget.style.background = "#2563eb"}
                  onClick={() => handleAction("next")}
                >
                  Next: {TAB_META[ASSESSMENT_TABS[activeTabIdx + 1]]?.label} →
                </button>
              </div>
            )}
            {activeTab === "plan" && (
              <div style={S.actionRow}>
                <button
                  style={S.submitBtn}
                  onMouseEnter={e => e.currentTarget.style.background = "#1d4ed8"}
                  onMouseLeave={e => e.currentTarget.style.background = "#2563eb"}
                  onClick={() => onSubmit?.(values)}
                >
                  Submit Progress Assessment
                </button>
              </div>
            )}
          </CommonFormBuilder>
        </div>
      </div>
    </div>
  );
}

/* ── Styles — identical to OptometryAssessment ── */
const S = {
  page: {
    background: "#f0f4f8",
    minHeight: "100vh",
    fontFamily: "'Inter', 'Segoe UI', Roboto, sans-serif",
    padding: "16px",
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
    transition: "color .15s",
    whiteSpace: "nowrap",
    letterSpacing: "0.01em",
  },
  tabActive: {
    color: "#2563eb",
    fontWeight: 700,
    borderBottomColor: "#2563eb",
    background: "none",
  },
  tabContent: {
    width: "100%",
  },
  actionRow: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
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
    transition: "background .15s",
    boxShadow: "0 1px 4px rgba(37,99,235,0.2)",
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
    transition: "background .15s",
    boxShadow: "0 1px 4px rgba(37,99,235,0.2)",
  },
};

/* ── Patient header card styles — identical to OptometryAssessment ── */
const PI = {
  card: { background: "#fff", overflow: "hidden" },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 20px",
    background: "#dbeafe",
    borderBottom: "1px solid #bae6fd",
  },
  headerLeft: { display: "flex", alignItems: "center", gap: 12 },
  avatar: {
    width: 38, height: 38, borderRadius: "50%",
    background: "#0284c7", border: "2px solid #bae6fd",
    color: "#fff", display: "flex", alignItems: "center",
    justifyContent: "center", fontSize: 15, fontWeight: 800, flexShrink: 0,
  },
  name:    { fontSize: 15, fontWeight: 700, color: "#0c4a6e", marginBottom: 2 },
  metaRow: { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" },
  metaChip: {
    display: "inline-flex", alignItems: "center", gap: 4,
    fontSize: 11, color: "#0369a1", fontWeight: 500,
  },
  metaDot: {
    width: 4, height: 4, borderRadius: "50%",
    background: "#0284c7", display: "inline-block",
  },
  metaDivider: { width: 1, height: 11, background: "#bae6fd", display: "inline-block" },
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", background: "#fff" },
  field: { padding: "10px 20px", minHeight: 52 },
  fieldLabel: {
    fontSize: 10, fontWeight: 700, color: "#94a3b8",
    textTransform: "uppercase", letterSpacing: "0.7px", marginBottom: 3,
  },
  fieldValue: { fontSize: 13, fontWeight: 500, color: "#1e293b" },
};
