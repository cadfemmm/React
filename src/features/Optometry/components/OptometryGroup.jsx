import { useState, useEffect } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import PatientCard from "../../../shared/cards/PatientCard";
import OPTO_GROUP_SCHEMA from "../../../schema/optometry/groupIntervention";
import { ASSESSMENT_TABS, TAB_META } from "../../../schema/actions";

export default function OptometryGroupIntervention({
  patient,
  selectedPatients = [],
  patients = [],
  onSubmit,
  onBack,
}) {
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("subjective");

  const participants = selectedPatients.length ? selectedPatients : patients;
  const primaryPatient = patient || participants[0] || null;
  const activeTabIdx = ASSESSMENT_TABS.indexOf(activeTab);

  useEffect(() => {
    if (!participants.length) return;
    setValues((prev) => {
      if (prev.participants?.length) return prev;
      return {
        ...prev,
        participants: participants.map((p) => ({
          clientName: p.name || p.patient_name || "",
          idNo: p.mrn || p.icd || p.ic_number || "",
          mrnNo: p.mrn || p.patient_id || "",
        })),
      };
    });
  }, [participants]);

  const handleChange = (name, value) => setValues((prev) => ({ ...prev, [name]: value }));

  const handleAction = (type) => {
    if (type === "back") { onBack?.(); return; }
    if (type === "clear") { setValues({}); setSubmitted(false); return; }
    if (type === "save") { console.log("Saved:", values); alert("Draft saved"); return; }
    if (type === "next") {
      const idx = ASSESSMENT_TABS.indexOf(activeTab);
      if (idx < ASSESSMENT_TABS.length - 1) setActiveTab(ASSESSMENT_TABS[idx + 1]);
    }
  };

  const schemaMap = {
    subjective: OPTO_GROUP_SCHEMA.SUBJECTIVE,
    objective: OPTO_GROUP_SCHEMA.OBJECTIVE,
    assessment: OPTO_GROUP_SCHEMA.ASSESSMENT,
    plan: OPTO_GROUP_SCHEMA.PLAN,
  };

  return (
    <div style={S.page}>
      {participants.length > 0 ? (
        <div style={S.groupBanner}>
          <div style={S.groupBannerTitle}>
            Group session — {participants.length} participant
            {participants.length !== 1 ? "s" : ""}
          </div>
          <div style={S.groupChips}>
            {participants.map((p) => (
              <span key={p.id ?? p.patient_id ?? p.mrn} style={S.chip}>
                {p.name || p.patient_name || p.mrn || "Patient"}
              </span>
            ))}
          </div>
        </div>
      ) : (
        primaryPatient && (
          <div style={S.patientCardWrap}>
            <PatientCard patient={primaryPatient} />
          </div>
        )
      )}

      <div style={S.soapShell}>
        <div style={S.tabBar}>
          {ASSESSMENT_TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              style={{ ...S.tab, ...(activeTab === tab ? S.tabActive : {}) }}
              onClick={() => setActiveTab(tab)}
            >
              {TAB_META[tab].label}
            </button>
          ))}
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
                <button type="button" style={S.nextBtn} onClick={() => handleAction("next")}>
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
                    alert("Group intervention submitted");
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
    marginBottom: 14,
    padding: "14px 18px",
    borderRadius: 12,
    background: "#eff6ff",
    border: "1px solid #bfdbfe",
  },
  groupBannerTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: "#1e40af",
    marginBottom: 8,
  },
  groupChips: { display: "flex", flexWrap: "wrap", gap: 8 },
  chip: {
    fontSize: 12,
    fontWeight: 600,
    padding: "4px 10px",
    borderRadius: 999,
    background: "#fff",
    color: "#1d4ed8",
    border: "1px solid #bfdbfe",
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
