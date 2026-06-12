import { useState, useEffect } from "react";
import TUG from "./TUGForm";
import MMTForm from "./MMTForm";
import ROMForm from "./ROMForm";
import MASForm from "./MASForm";
import WSTForm from "./WSTForm";
import MFRTForm from "./MFRTForm";
import BergBalanceScale from "./BBS";
import WISCIForm from "./WISCIForm";
import SixMWTForm from "./SixMWTForm";
import SixMWPTForm from "./SixMWPTForm";
import TenMWTForm from "./TenMWTForm";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import CervicalNeuracAssessment, {
  CERVICAL_MOVEMENTS,
  CERVICAL_SETTINGS,
  CERVICAL_PROXIMAL_GROUPS,
} from "./CervicalNeuracAssessment";
import {
  buildPerformTestFields,
  buildNeuracMovementProtocolFields,
  buildNeuracSettingsProtocolFields,
  buildNeuracProximalProtocolFields,
} from "./NeuracShared";
import ElbowNeuracAssessment, { ELBOW_PROXIMAL_GROUPS } from "./ElbowNeuracAssessment";
import ShoulderNeuracAssessment, { SHOULDER_PROXIMAL_GROUPS } from "./ShoulderNeuracAssessment";
import KneeNeuracAssessment, { KNEE_PROXIMAL_GROUPS } from "./KneeNeuracAssessment";
import HipNeuracAssessment, { HIP_PROXIMAL_GROUPS } from "./HipNeuracAssessment";
import LumbarNeuracAssessment, {
  LUMBAR_SETTINGS,
  LUMBAR_PROXIMAL_GROUPS,
} from "./LumbarNeuracAssessment";
import IsometricTestForm from "./IsometricTestForm";
import PatientCard from "../../../shared/cards/PatientCard";
const POS_NEG_OPTIONS = [
  { label: "Positive", value: "positive" },
  { label: "Negative", value: "negative" }
];
const ACTIONS = [
  { type: "back",  label: "Back"  },
  { type: "clear", label: "Clear" },
  { type: "save",  label: "Save"  },
];

const SUBJECTIVE_SCHEMA = {
  actions: ACTIONS,
  sections: [{
    fields: [
      { name: "chief_complaint",  label: "Chief Complaint",                 type: "input" },
      { name: "hopi",             label: "History of Presenting Illness",    type: "input" },
       {
          type: "subheading",
          label: "Patient Goals"
        },
      { name: "short_term_goals", label: "Short Term Goals",                 type: "input" },
      { name: "long_term_goals",  label: "Long Term Goals",                  type: "input" },
    ],
  }],
};

const OBJECTIVE_SCHEMA = {
  
  actions: ACTIONS,
  sections: [{
    fields: [
      { type: "subheading", label: "Outcome Measures" },
      {
        name: "neuro_scales",
        type: "assessment-launcher",
        options: [
          { label: "Range of Motion (ROM)",value: "rom" },
          { label: "Isometric Test",value: "isometric" }
          
          
        ],
      },
      {
   name: "others",
      label: "Others",
      type: "input",
},


    ],
  }],
};

const ASSESSMENT_SCHEMA = {
 
  actions: ACTIONS,
  sections: [{
    fields: [{
      name: "clinical_impression",
      label: "Clinical Impression",
      type: "input",
      placeholder: "Enter clinical findings and summary...",
    }],
  }],
};

const PLAN_SCHEMA = {
 
  actions: ACTIONS,
  sections: [{
    fields: [
      { type: "subheading",    label: "Short-Term Goals (2–4 weeks)" },
      { type: "dynamic-goals", name: "short_term_goals"              },
      { type: "subheading",    label: "Long-Term Goals (6–12 weeks)" },
      { type: "dynamic-goals", name: "long_term_goals"               },
      { name: "Interventions", label: "Interventions", type: "input"   },
      { name: "plan",          label: "Plan",          type: "input" },
    ],
  }],
};

const SCHEMA_MAP = {
  subjective: SUBJECTIVE_SCHEMA,
  objective:  OBJECTIVE_SCHEMA,
  assessment: ASSESSMENT_SCHEMA,
  plan:       PLAN_SCHEMA,
};

const NEURAC_PERFORM_ROWS = {
  cervical: [
    "Core Brace", "Abduction", "Heel Raise", "Adduction",
    "Scapula Assist", "Scapula Retraction", "Scapula Stabilization",
  ],
  shoulder: [
    "Core Brace", "Abduction", "Heel Raise", "Adduction",
    "Scapula Assist", "Scapula Retraction", "Scapula Stabilization",
  ],
  elbow: [
    "Core Brace", "Abduction", "Heel Raise", "Adduction",
    "Scapula Assist", "Scapula Retraction", "Scapula Stabilization",
  ],
  lumbar: ["Core Brace", "Abduction", "Heel Raise", "Scapula Assist"],
  knee:   ["Core Brace", "Abduction", "Heel Raise", "Scapula Assist"],
  hip:    ["Core Brace", "Abduction", "Heel Raise", "Scapula Assist"],
};

function getObjectiveSchema(region) {
  const baseFields = OBJECTIVE_SCHEMA.sections[0].fields;
  const performRows = NEURAC_PERFORM_ROWS[region];
  if (!performRows) return OBJECTIVE_SCHEMA;

  const fields = [...baseFields, ...buildPerformTestFields(region, performRows)];

  if (region === "cervical") {
    fields.push(
      ...buildNeuracMovementProtocolFields({
        title: "Neurac Test Protocol — Cervical Movements",
        movements: CERVICAL_MOVEMENTS,
        prefix: "cm",
      }),
      ...buildNeuracSettingsProtocolFields({
        title: "Cervical Settings",
        rows: CERVICAL_SETTINGS,
        prefix: "cs",
      }),
      ...buildNeuracProximalProtocolFields({
        title: "Additional Myofascial Chain Tests for Neck Examination",
        groups: CERVICAL_PROXIMAL_GROUPS,
        prefix: "cx_px",
      })
    );
  }

  if (region === "shoulder") {
    fields.push(
      ...buildNeuracProximalProtocolFields({
        title: "Myofascial Chain Tests for Shoulder Examination",
        groups: SHOULDER_PROXIMAL_GROUPS,
        prefix: "shoulder_px",
      })
    );
  }

  if (region === "elbow") {
    fields.push(
      ...buildNeuracProximalProtocolFields({
        title: "Myofascial Chain Tests for Elbow Examination",
        groups: ELBOW_PROXIMAL_GROUPS,
        prefix: "elbow_px",
      })
    );
  }

  if (region === "lumbar") {
    fields.push(
      ...buildNeuracSettingsProtocolFields({
        title: "Lumbar Settings",
        rows: LUMBAR_SETTINGS,
        prefix: "ls",
      }),
      ...buildNeuracProximalProtocolFields({
        title: "Myofascial Chain Tests",
        groups: LUMBAR_PROXIMAL_GROUPS,
        prefix: "lumbar_px",
      })
    );
  }

  if (region === "knee") {
    fields.push(
      ...buildNeuracProximalProtocolFields({
        title: "Myofascial Chain Tests for Knee Examination",
        groups: KNEE_PROXIMAL_GROUPS,
        prefix: "knee_px",
      })
    );
  }

  if (region === "hip") {
    fields.push(
      ...buildNeuracProximalProtocolFields({
        title: "Myofascial Chain Tests for Hip Examination",
        groups: HIP_PROXIMAL_GROUPS,
        prefix: "hip_px",
      })
    );
  }

  return {
    ...OBJECTIVE_SCHEMA,
    sections: [{ fields }],
  };
}

const SPINAL_ASSESSMENT_REGISTRY = {
  tug:     TUG,
  rom:     ROMForm,
  mmt:     MMTForm,
  mas:     MASForm,
  wst:     WSTForm,
  mfrt:    MFRTForm,
  wisci:   WISCIForm,
  tenmwt:  TenMWTForm,
  sixmwt:  SixMWTForm,
  sixmwpt: SixMWPTForm,
  bbs:     BergBalanceScale,
  isometric: IsometricTestForm,
  
};

const SUB_TABS = [
  { key: "cervical", label: "Cervical" },
  { key: "shoulder", label: "Shoulder" },
  { key: "elbow",    label: "Elbow"    },
  { key: "lumbar",   label: "Lumbar"   },
  { key: "knee",     label: "Knee"     },
  { key: "hip",      label: "Hip"      },
];

/* ══════════════════════════════════════════════════════════
   MAIN — sub-tabs always visible at top
══════════════════════════════════════════════════════════ */
export default function NeuracTherapyAssessment({ patient, onSubmit, onBack }) {
  const [activeSub, setActiveSub] = useState("cervical");

  return (
    <div>
      {/* Sub-tabs always visible */}
      <div style={subTabRow}>
        {SUB_TABS.map(tab => (
          <div
            key={tab.key}
            onClick={() => setActiveSub(tab.key)}
            style={{ ...subTabItem, ...(activeSub === tab.key ? subTabActive : {}) }}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Selected sub-tab content */}
      <div style={{ background: "#fff" }}>
        {activeSub === "cervical" && <NeuracSoapWrapper patient={patient} region="cervical" onSubmit={onSubmit} onBack={onBack} />}
        {activeSub === "shoulder" && <NeuracSoapWrapper patient={patient} region="shoulder" onSubmit={onSubmit} onBack={onBack} />}
        {activeSub === "elbow"    && <NeuracSoapWrapper patient={patient} region="elbow"    onSubmit={onSubmit} onBack={onBack} />}
        {activeSub === "lumbar"   && <NeuracSoapWrapper patient={patient} region="lumbar"   onSubmit={onSubmit} onBack={onBack} />}
        {activeSub === "knee"     && <NeuracSoapWrapper patient={patient} region="knee"     onSubmit={onSubmit} onBack={onBack} />}
        {activeSub === "hip"      && <NeuracSoapWrapper patient={patient} region="hip"      onSubmit={onSubmit} onBack={onBack} />}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   NeuracSoapWrapper — Patient Info + SOAP tabs per sub-tab
   Objective: Outcome Measures (assessment-launcher) +
              region-specific Neurac tables below
══════════════════════════════════════════════════════════ */
function NeuracSoapWrapper({ patient, region, onSubmit, onBack }) {
  const [values, setValues]       = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("subjective");


  const storageKey = patient ? `neurac_${region}_draft_${patient.id}` : null;

  useEffect(() => {
    if (!storageKey) return;
    const saved = localStorage.getItem(storageKey);
    if (saved) setValues(JSON.parse(saved).values || {});
  }, [storageKey]);

  useEffect(() => {
    if (!patient) return;
    setValues(v => ({
      ...v,
      referred_by:      patient.case_manager      || "",
      referral_reasons: patient.diagnosis_history || patient.icd || "",
    }));
 
  }, [patient]);

  const onChange = (name, value) => setValues(v => ({ ...v, [name]: value }));

  const handleAction = (type) => {
    if (type === "back")  onBack?.();
    if (type === "clear") { setValues({}); setSubmitted(false); localStorage.removeItem(storageKey); }
    if (type === "save")  {
      localStorage.setItem(storageKey, JSON.stringify({ values, updatedAt: new Date() }));
      alert(`${region.charAt(0).toUpperCase() + region.slice(1)} draft saved`);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    onSubmit?.(values);
    alert("Neurac Therapy assessment submitted");
  };

  const saveProps = {
    onSave:  () => handleAction("save"),
    onClear: () => handleAction("clear"),
  };

  const TABS = ["subjective", "objective", "assessment", "plan"];

  return (
    <div style={{ padding: "0 0 16px" }}>

      {/* Patient Information */}
      
      
        <PatientCard
          patient={patient}
        
        />
        

      {/* SOAP Tabs */}
      <div style={tabBar}>
        {TABS.map(tab => (
          <div
            key={tab}
            style={activeTab === tab ? tabActive : tabBtn}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </div>
        ))}
      </div>

      {/* OBJECTIVE — Outcome Measures + region Neurac tables */}
      {activeTab === "objective" && (
        <>
          {/* Outcome Measures assessment-launcher */}
          <CommonFormBuilder
            schema={getObjectiveSchema(region)}
            values={values}
            onChange={onChange}
            onAction={handleAction}
            assessmentRegistry={SPINAL_ASSESSMENT_REGISTRY}
          />

          {/* Region-specific Neurac tables below */}
          {region === "cervical" && <CervicalNeuracAssessment values={values} onChange={onChange} {...saveProps} />}
          {region === "shoulder" && <ShoulderNeuracAssessment values={values} onChange={onChange} {...saveProps} />}
          {region === "elbow"    && <ElbowNeuracAssessment    values={values} onChange={onChange} {...saveProps} />}
          {region === "lumbar"   && <LumbarNeuracAssessment   values={values} onChange={onChange} {...saveProps} />}
          {region === "knee"     && <KneeNeuracAssessment     values={values} onChange={onChange} {...saveProps} />}
          {region === "hip"      && <HipNeuracAssessment      values={values} onChange={onChange} {...saveProps} />}

          <div style={{ ...submitRow, padding: "0 16px 8px" }}>
            <button type="button" style={submitBtn} onClick={() => setActiveTab("assessment")}>
              Next
            </button>
          </div>
        </>
      )}

      {/* SUBJECTIVE / ASSESSMENT / PLAN */}
      {activeTab !== "objective" && (
        <CommonFormBuilder
          schema={SCHEMA_MAP[activeTab]}
          values={values}
          onChange={onChange}
          submitted={submitted}
          onAction={handleAction}
          assessmentRegistry={SPINAL_ASSESSMENT_REGISTRY}
        >
          <div style={submitRow}>
            {activeTab !== "plan" ? (
              <button
                type="button"
                style={submitBtn}
                onClick={() => {
                  if (activeTab === "subjective") setActiveTab("objective");
                  else if (activeTab === "assessment") setActiveTab("plan");
                }}
              >
                Next
              </button>
            ) : (
              <button type="button" style={submitBtn} onClick={handleSubmit}>
                Submit
              </button>
            )}
          </div>
        </CommonFormBuilder>
      )}
    </div>
  );
}

/* ── Patient Information Block ── */


/* ── Styles ── */
const subTabRow    = { display: "flex", gap: 0, borderBottom: "2px solid #e5e7eb", background: "#f1f5f9", padding: "0 16px" };
const subTabItem   = { padding: "10px 24px", fontWeight: 600, fontSize: 14, cursor: "pointer", color: "#475569", borderBottom: "3px solid transparent", marginBottom: -2 };
const subTabActive = { color: "#2563eb", borderBottom: "3px solid #2563eb", background: "#fff" };
const tabBar       = { display: "flex", gap: 12, justifyContent: "center", borderBottom: "1px solid #ddd", marginBottom: 12 };
const tabBtn       = { padding: "10px 22px", fontWeight: 600, cursor: "pointer", color: "#0f172a" };
const tabActive    = { ...tabBtn, borderBottom: "3px solid #2451b3", color: "#2451b3" };
const submitRow    = { display: "flex", justifyContent: "flex-end", marginTop: 20 };
const submitBtn    = { padding: "12px 32px", background: "#2563EB", color: "#fff", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 700 };
const input     = { width: "100%", minHeight: 90, marginTop: 6, marginBottom: 12, padding: "10px 12px", borderRadius: 6, border: "1px solid #d1d5db", fontSize: 14, resize: "vertical" };
const alertBtn     = { marginTop: 10, padding: "10px 20px", borderRadius: 6, border: "1.5px solid #007bff", background: "#007bff", color: "#fff", fontWeight: 600, cursor: "pointer" };
const doctorsReportBtn = { padding: "10px 20px", background: "#2563EB", color: "#fff", border: "none", borderRadius: 6, fontSize: 14, fontWeight: 600, cursor: "pointer", marginTop: 8 };
