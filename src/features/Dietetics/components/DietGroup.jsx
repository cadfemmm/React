import { useState, useEffect } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import PatientCard from "../../../shared/cards/PatientCard";
import DIET_GROUP_SCHEMA from "../../../schema/dietetics/groupIntervention";
import { ASSESSMENT_TABS, TAB_META } from "../../../schema/actions";

export default function DietGroupIntervention({
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
  const storageKey = primaryPatient
    ? `dietetics_group_draft_${primaryPatient.id}`
    : null;

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

  const handleChange = (name, value) =>
    setValues((prev) => ({ ...prev, [name]: value }));

  const handleAction = (type) => {
    if (type === "back") {
      onBack?.();
      return;
    }
    if (type === "clear") {
      if (window.confirm("Clear all form data?")) {
        setValues({});
        setSubmitted(false);
        if (storageKey) localStorage.removeItem(storageKey);
      }
      return;
    }
    if (type === "save") {
      if (storageKey) {
        localStorage.setItem(
          storageKey,
          JSON.stringify({ values, updatedAt: new Date() }),
        );
      }
      alert("Group intervention draft saved");
      return;
    }
    if (type === "next") {
      const idx = ASSESSMENT_TABS.indexOf(activeTab);
      if (idx < ASSESSMENT_TABS.length - 1) {
        setActiveTab(ASSESSMENT_TABS[idx + 1]);
      }
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    onSubmit?.(values);
    alert("Dietetics group intervention submitted");
  };

  const schemaMap = {
    subjective: DIET_GROUP_SCHEMA.SUBJECTIVE,
    objective: DIET_GROUP_SCHEMA.OBJECTIVE,
    assessment: DIET_GROUP_SCHEMA.ASSESSMENT,
    plan: DIET_GROUP_SCHEMA.PLAN,
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
            <div style={S.actionRow}>
              {activeTab !== "plan" ? (
                <button
                  type="button"
                  style={S.nextBtn}
                  onClick={() => handleAction("next")}
                >
                  Next :{" "}
                  {TAB_META[
                    ASSESSMENT_TABS[ASSESSMENT_TABS.indexOf(activeTab) + 1]
                  ]?.label || "Next"}{" "}
                  →
                </button>
              ) : (
                <button type="button" style={S.submitBtn} onClick={handleSubmit}>
                  Submit Group Intervention
                </button>
              )}
            </div>
          </CommonFormBuilder>
        </div>
      </div>
    </div>
  );
}

const S = {
  page: { margin: "0 auto", width: "100%" },
  groupBanner: {
    marginBottom: 20,
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
  patientCardWrap: { marginBottom: 16 },
  soapShell: { width: "100%" },
  tabBar: {
    display: "flex",
    gap: 12,
    justifyContent: "center",
    borderBottom: "1px solid #ddd",
    marginBottom: 12,
  },
  tab: {
    padding: "10px 22px",
    fontWeight: 600,
    cursor: "pointer",
    color: "#0f172a",
    background: "transparent",
    border: "none",
    borderBottom: "3px solid transparent",
  },
  tabActive: {
    borderBottom: "3px solid #2451b3",
    color: "#2451b3",
  },
  tabContent: { width: "100%" },
  actionRow: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  nextBtn: {
    padding: "12px 32px",
    background: "#2563EB",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
  },
  submitBtn: {
    padding: "12px 32px",
    background: "#2563EB",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
  },
};
