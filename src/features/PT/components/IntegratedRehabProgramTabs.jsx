import React, { useState, useEffect } from "react";
import SpinalCordInjury from "./SpinalcordInjury";
import DryNeedlingAssessment from "./DryNeedlingAssessment";
import WallClimbingAssessment from "./WallClimbingAssessment";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import MetaMotusGalileoAssessment from "./MetaMotusGalileoAssessment";
import ATVConsentForm from "./ATVConsentForm";
import NeuracTherapyAssessment from './NeuracTherapyAssessment'

import CervicalNeuracAssessment from "./CervicalNeuracAssessment";
import ShoulderNeuracAssessment from "./ShoulderNeuracAssessment";
import ElbowNeuracAssessment from "./ElbowNeuracAssessment";
import LumbarNeuracAssessment from "./LumbarNeuracAssessment";
import KneeNeuracAssessment from "./KneeNeuracAssessment";
import HipNeuracAssessment from "./HipNeuracAssessment";
import NeuromodulationAssessment from "./NeuromodulationAssessment";
import CybernicsAssessment from "./CybernicsAssessment";

/* ── Progress pages ── */
import NeuracTherapyProgress   from "./NeuracTherapyProgress";
import NeuromodulationProgress from "./NeuromodulationProgress";
import NeuroroticProgress      from "./NeuroroticProgress";
import PatientCard from "../../../shared/cards/PatientCard";

/* ── Appendix A: Relation Gait Feature → Possible Impairments ── */
export const GAIT_FEATURE_MAPPING = {
  forward_lean: [
    { plane: "S", segment: "Trunk", gaitPhase: "Stance", impairment: "<< Knee extension increased", mean: 3.5, sd: 0.7 },
  ],
  hyper_lordose: [
    { plane: "S", segment: "Trunk", gaitPhase: "Stance", impairment: "<< Anterior tilt increased", mean: 4.4, sd: 0.5 },
    { plane: "S", segment: "Trunk", gaitPhase: "Stance", impairment: "<< Knee extension increased", mean: 3.4, sd: 0.8 },
  ],
  ipsilateral_lean: [
    { plane: "F", segment: "Trunk", gaitPhase: "EST-LST", impairment: "Gluteus medius weakness", mean: 4.1, sd: 0.6 },
  ],
  anterior_tilt: [
    { plane: "S", segment: "Pelvis", gaitPhase: "Stance", impairment: "Gluteus maximus weakness", mean: 3.2, sd: 0.7 },
    { plane: "S", segment: "Pelvis", gaitPhase: "Stance", impairment: "Hamstrings weakness", mean: 3.4, sd: 0.9 },
    { plane: "S", segment: "Pelvis", gaitPhase: "Stance", impairment: "Iliopsoas spasticity / contracture", mean: 3.9, sd: 0.6 },
    { plane: "S", segment: "Pelvis", gaitPhase: "Stance", impairment: "<< Knee extension increased", mean: 2.9, sd: 1.0 },
    { plane: "S", segment: "Pelvis", gaitPhase: "Swing", impairment: "Iliopsoas spasticity / contracture", mean: 3.6, sd: 1.0 },
  ],
  posterior_tilt: [
    { plane: "S", segment: "Pelvis", gaitPhase: "LSW", impairment: "Hamstrings spasticity / contracture", mean: 4.3, sd: 0.6 },
  ],
  obliquity_drop: [
    { plane: "F", segment: "Pelvis", gaitPhase: "Gait cycle", impairment: "Anatomical leg length discrepancy - shortest leg", mean: 3.0, sd: 1.0 },
  ],
  obliquity_lift: [
    { plane: "F", segment: "Pelvis", gaitPhase: "Gait cycle", impairment: "Adductor spasticity / contracture", mean: 2.6, sd: 0.6 },
    { plane: "F", segment: "Pelvis", gaitPhase: "Gait cycle", impairment: "Anatomical leg length discrepancy - longest leg", mean: 2.9, sd: 1.0 },
    { plane: "F", segment: "Pelvis", gaitPhase: "Stance", impairment: "Gluteus medius weakness", mean: 3.6, sd: 1.0 },
    { plane: "F", segment: "Pelvis", gaitPhase: "Swing", impairment: "<< Clearance decreased", mean: 3.2, sd: 1.1 },
  ],
  protraction: [
    { plane: "T", segment: "Pelvis", gaitPhase: "Stance", impairment: "<< Contralateral retraction increased", mean: 3.8, sd: 0.7 },
  ],
  retraction: [
    { plane: "T", segment: "Pelvis", gaitPhase: "LST-PSW", impairment: "Femoral anteversion increased", mean: 3.1, sd: 0.8 },
    { plane: "T", segment: "Pelvis", gaitPhase: "LST-PSW", impairment: "Iliopsoas spasticity / contracture", mean: 3.6, sd: 0.6 },
    { plane: "T", segment: "Pelvis", gaitPhase: "LST-PSW", impairment: "<< Hip extension decreased", mean: 3.9, sd: 0.7 },
  ],
  hip_extension_decreased: [
    { plane: "S", segment: "Hip", gaitPhase: "LST-PSW", impairment: "Rectus femoris spasticity", mean: 2.6, sd: 1.0 },
    { plane: "S", segment: "Hip", gaitPhase: "LST-PSW", impairment: "Iliopsoas spasticity / contracture", mean: 3.8, sd: 0.6 },
    { plane: "S", segment: "Hip", gaitPhase: "LST-PSW", impairment: "Gluteus maximus weakness", mean: 2.7, sd: 1.3 },
  ],
  peak_extension_delayed: [
    { plane: "S", segment: "Hip", gaitPhase: "Stance", impairment: "Gastrocnemius weakness", mean: 2.7, sd: 1.2 },
    { plane: "S", segment: "Hip", gaitPhase: "Stance", impairment: "Soleus weakness", mean: 2.8, sd: 1.3 },
    { plane: "S", segment: "Hip", gaitPhase: "Stance", impairment: "Gluteus maximus weakness", mean: 2.6, sd: 0.9 },
  ],
  flexion_delayed: [
    { plane: "S", segment: "Hip", gaitPhase: "ESW", impairment: "Limited selective control (flexion/extension synergy)", mean: 2.9, sd: 1.0 },
  ],
  flexion_increased: [
    { plane: "S", segment: "Hip", gaitPhase: "Stance", impairment: "Gluteus maximus weakness", mean: 3.1, sd: 1.0 },
    { plane: "S", segment: "Hip", gaitPhase: "Stance", impairment: "<< Knee flexion increased", mean: 2.8, sd: 0.9 },
  ],
}
const CONSENT_AND_REFERRAL_SCHEMA = {
  sections: [
    {
      fields: [
        { name: "gait_report",    label: "Upload",          type: "attach-file" },
        { name: "cheif_complaint", label: "Chief Complaint", type: "input"   },
      ],
    },
  ],
};

/* ── Progress sub-type data ── */
const PROGRESS_SUBTYPES = [
  { key: "neurac",          title: "Neurac Therapy",           desc: "Neurac sling-based neuromuscular therapy progress",    icon: "🔗", accent: "#2563eb", tagBg: "#dbeafe", tagColor: "#1d4ed8" },
  { key: "neuromodulation", title: "Neuromodulation",          desc: "Neuromodulation intervention progress notes",          icon: "⚡", accent: "#7c3aed", tagBg: "#ede9fe", tagColor: "#5b21b6" },
  { key: "cybernics",       title: "Neurorobotic & Cybernics", desc: "Cyberdyne HAL and neurorobotic intervention progress", icon: "🤖", accent: "#059669", tagBg: "#d1fae5", tagColor: "#065f46" },
];

function ProgressSubtypeCard({ item, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff", borderRadius: 14, border: "1px solid #e9ecef",
        borderTop: `3px solid ${item.accent}`, padding: "22px 22px 18px", cursor: "pointer",
        transition: "box-shadow .2s, transform .2s", display: "flex", flexDirection: "column", minHeight: 160,
        boxShadow: hovered ? `0 12px 32px ${item.accent}22` : "0 2px 8px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-3px)" : "none",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <div style={{ width: 44, height: 44, borderRadius: 10, background: item.accent + "12", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{item.icon}</div>
        <span style={{ background: item.tagBg, color: item.tagColor, borderRadius: 999, padding: "3px 10px", fontSize: 11, fontWeight: 700 }}>Progress</span>
      </div>
      <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{item.title}</div>
      <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, flex: 1 }}>{item.desc}</div>
      <div style={{ marginTop: 16, paddingTop: 12, borderTop: "1px solid #f3f4f6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: item.accent }}>Open Progress</span>
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: item.accent, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 16, fontWeight: 700 }}>›</div>
      </div>
    </div>
  );
}

const backBtnStyle = {
  background: "none", border: "1px solid #d1d5db", borderRadius: 8,
  padding: "8px 16px", fontSize: 13, fontWeight: 600, color: "#374151", cursor: "pointer",
};

/* ══════════════════════════════════════════════════════════
   Assessment Type selection cards
══════════════════════════════════════════════════════════ */
const ASSESSMENT_TYPES = [
  { id: "initial",  title: "Initial Assessment",   desc: "Comprehensive assessment for new patient visit",  icon: "📋", accent: "#1D4ED8", tag: "New Patient",   tagBg: "#dbeafe", tagColor: "#1d4ed8" },
  { id: "followup", title: "Re-assessment",         desc: "Reassess progress and update the treatment plan", icon: "🔄", accent: "#059669", tag: "Returning",     tagBg: "#d1fae5", tagColor: "#065f46" },
  { id: "progress", title: "Progress Intervention", desc: "Document interventions and track outcomes",       icon: "📈", accent: "#7C3AED", tag: "Ongoing Care",  tagBg: "#ede9fe", tagColor: "#5b21b6" },
  { id: "group",    title: "Group Intervention",    desc: "Record group session and multi-patient notes",    icon: "👥", accent: "#DC2626", tag: "Group Session", tagBg: "#fee2e2", tagColor: "#991b1b" },
];

function AssessmentTypeCard({ item, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff", borderRadius: 14,
        border: "1px solid #e9ecef",
        borderTop: `3px solid ${item.accent}`,
        padding: "22px 22px 18px", cursor: "pointer",
        transition: "box-shadow .2s, transform .2s",
        display: "flex", flexDirection: "column", minHeight: 190,
        boxShadow: hovered ? `0 12px 32px ${item.accent}22` : "0 2px 8px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-3px)" : "none",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <div style={{ width: 44, height: 44, borderRadius: 10, background: item.accent + "12", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
          {item.icon}
        </div>
        <span style={{ background: item.tagBg, color: item.tagColor, borderRadius: 999, padding: "3px 10px", fontSize: 11, fontWeight: 700 }}>
          {item.tag}
        </span>
      </div>
      <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{item.title}</div>
      <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, flex: 1 }}>{item.desc}</div>
      <div style={{ marginTop: 18, paddingTop: 14, borderTop: "1px solid #f3f4f6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: item.accent }}>Open Assessment</span>
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: item.accent, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 16, fontWeight: 700 }}>›</div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   Main Tabs
══════════════════════════════════════════════════════════ */
export default function IntegratedRehabProgramTabs({ patient, mode, onBack }) {
  const tabs = [
    { key: "motion_capture",  label: "Motion Capture"          },
    { key: "advance_fitness", label: "Advance Fitness Program" },
    { key: "neurac_therapy",  label: "Neurac Therapy"          },
    { key: "neuromodulation", label: "Neuromodulation"         },
    { key: "cybernics",       label: "Neurorobotic & Cybernics" },
    { key: "metamotus",       label: "MetaMotus™ Galileo"      },
  ];

  // If mode is passed from parent (DepartmentPatients), use it directly.
  // If not, manage selection internally.
  const modeFromProp = !!mode;
  const [assessmentType, setAssessmentType] = useState(mode || null);
  const [activeTab, setActiveTab]           = useState("motion_capture");
    // const [activeTab, setActiveTab] = useState("subjective");
 

  // Back handler: if mode came from prop → call onBack (go to DepartmentPatients card screen)
  // If mode was selected internally → go back to internal selection screen
  const handleBack = () => {
    if (modeFromProp) {
      onBack?.();
    } else {
      setAssessmentType(null);
      setActiveTab("motion_capture");
    }
  };

  /* ── STEP 1: No assessment type → show selection cards ── */
  if (!assessmentType) {
    return (
      <div style={{ padding: "40px 28px", fontFamily: "Inter, system-ui", background: "#f8fafc", minHeight: "100vh" }}>
        {/* Back button top-right */}
        {onBack && (
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
            <button type="button" onClick={onBack} style={backBtnStyle}>← Back to Patients</button>
          </div>
        )}
        {/* Centered title */}
        {/* <div style={{ textAlign: "center", marginBottom: 36 }}>

        </div> */}
       
        {/* Strict 2-column grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          maxWidth: 860,
          margin: "0 auto",
        }}>
          {ASSESSMENT_TYPES.map(item => (
            <AssessmentTypeCard key={item.id} item={item} onClick={() => setAssessmentType(item.id)} />
          ))}
        </div>
      </div>
    );
  }

  /* ── STEP 2: Assessment type selected → show tabs ── */
  const TYPE_COLORS = {
    initial:  { bg: "#dbeafe", color: "#1d4ed8" },
    followup: { bg: "#d1fae5", color: "#065f46" },
    progress: { bg: "#ede9fe", color: "#5b21b6" },
    group:    { bg: "#fee2e2", color: "#991b1b" },
  };
  const TYPE_LABELS = {
    initial:  "Initial Assessment",
    followup: "Re-Assessment",
    progress: "Progress Intervention",
    group:    "Group Intervention",
  };

  const renderContent = () => {
    /* Progress → route each tab to its progress component */
    if (assessmentType === "progress") {
      switch (activeTab) {
        case "motion_capture":
          return <EmptySoapPanel patient={patient}  onBack={handleBack} />;
        case "advance_fitness":
          return <AdvanceFitnessWithSubTabs patient={patient} onBack={handleBack} />;
        case "neurac_therapy":
          return <NeuracTherapyProgress patient={patient} onBack={handleBack} />;
        case "neuromodulation":
          return <NeuromodulationProgress patient={patient} onBack={handleBack} />;
        case "cybernics":
          return <NeuroroticProgress patient={patient} onBack={handleBack} />;
        case "metamotus":
          return <MetaMotusGalileoAssessment patient={patient} onBack={handleBack} />;
        default:
          return null;
      }
    }

    /* Initial / Re-Assessment / Group → standard assessment components */
    switch (activeTab) {
      case "motion_capture":
        return <EmptySoapPanel patient={patient} onBack={handleBack} />;
      case "advance_fitness":
        return <AdvanceFitnessWithSubTabs patient={patient} onBack={handleBack} />;
      case "neurac_therapy":
        return <NeuracTherapyAssessment patient={patient} onBack={handleBack} />;
      case "neuromodulation":
        return <NeuromodulationAssessment patient={patient} onBack={handleBack} />;
      case "cybernics":
        return <CybernicsAssessment patient={patient} onBack={handleBack} />;
      case "metamotus":
        return <MetaMotusGalileoAssessment patient={patient} onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Header: back + assessment type badge */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 16px", background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
        <button
          type="button"
          onClick={handleBack}
          style={{ background: "none", border: "none", color: "#2563eb", fontWeight: 700, fontSize: 14, cursor: "pointer" }}
        >
          ← Back
        </button>
        <span style={{
          padding: "4px 14px", borderRadius: 999, fontSize: 12, fontWeight: 700,
          background: TYPE_COLORS[assessmentType]?.bg || "#f1f5f9",
          color:      TYPE_COLORS[assessmentType]?.color || "#374151",
        }}>
          {TYPE_LABELS[assessmentType] || assessmentType}
        </span>
      </div>

      {/* Tabs */}
      <div style={tabRow}>
        {tabs.map((tab) => (
          <div
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{ ...tabItem, ...(activeTab === tab.key ? activeTabStyle : {}) }}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div style={contentContainer}>{renderContent()}</div>
    </div>
  );
}

/* ── Advance Fitness: Wall Climbing + Dry Needling ── */
function AdvanceFitnessWithSubTabs({ patient, onBack }) {
  const subTabs = [
    { key: "wall_climbing", label: "Wall Climbing" },
    { key: "dry_needling",  label: "Dry Needling"  },
  ];
  const [activeSub, setActiveSub] = useState("wall_climbing");

  // Shared ATV consent state — synced across both sub-tabs
  const [atvConsentValues, setAtvConsentValues] = useState({});
  const [atvSubmitted, setAtvSubmitted]         = useState(false);

  const onAtvSubmit = (data) => {
    setAtvConsentValues(data);
    setAtvSubmitted(true);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "left", borderBottom: "2px solid #e5e7eb", background: "#fff" }}>
        {subTabs.map((t) => (
          <div
            key={t.key}
            onClick={() => setActiveSub(t.key)}
            style={{
              padding: "14px 32px",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              color: activeSub === t.key ? "#2563eb" : "#374151",
              borderBottom: activeSub === t.key ? "3px solid #2563eb" : "3px solid transparent",
              marginBottom: -2,
              transition: "color .15s",
            }}
          >
            {t.label}
          </div>
        ))}
      </div>
      {activeSub === "wall_climbing" && (
        <WallClimbingAssessment
          patient={patient}
          sharedAtvValues={atvConsentValues}
          sharedAtvSubmitted={atvSubmitted}
          onAtvSubmit={onAtvSubmit}
          onBack={onBack}
        />
      )}
      {activeSub === "dry_needling" && (
        <DryNeedlingAssessment
          patient={patient}
          sharedAtvValues={atvConsentValues}
          sharedAtvSubmitted={atvSubmitted}
          onAtvSubmit={onAtvSubmit}
          onBack={onBack}
        />
      )}
    </div>
  );
}
function NeuracTherapyTabs({ patient }) {
  const subTabs = [
    { key: "cervical", label: "Cervical" },
    { key: "shoulder", label: "Shoulder" },
    { key: "elbow",    label: "Elbow"    },
    { key: "lumbar",   label: "Lumbar"   },
    { key: "knee",     label: "Knee"     },
    { key: "hip",      label: "Hip"      },
  ];

  const [activeSub, setActiveSub] = useState("cervical");

  return (
    <div>
      {/* Tabs — same style as Motion Capture */}
      <div style={{ display: "flex", justifyContent: "center", borderBottom: "2px solid #e5e7eb", background: "#fff" }}>
        {subTabs.map((t) => (
          <div
            key={t.key}
            onClick={() => setActiveSub(t.key)}
            style={{
              padding: "14px 28px",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              color: activeSub === t.key ? "#2563eb" : "#374151",
              borderBottom: activeSub === t.key ? "3px solid #2563eb" : "3px solid transparent",
              marginBottom: -2,
              transition: "color .15s",
            }}
          >
            {t.label}
          </div>
        ))}
      </div>

      {/* Content */}
      {activeSub === "cervical" && <CervicalNeuracAssessment patient={patient} />}
      {activeSub === "shoulder" && <ShoulderNeuracAssessment patient={patient} />}
      {activeSub === "elbow" && <ElbowNeuracAssessment patient={patient} />}
      {activeSub === "lumbar" && <LumbarNeuracAssessment patient={patient} />}
      {activeSub === "knee" && <KneeNeuracAssessment patient={patient} />}
      {activeSub === "hip" && <HipNeuracAssessment patient={patient} />}
    </div>
  );
}
/* ── Motion Capture: Foot Scan / Gait Analysis / Electromyography ── */
function MotionCaptureSubTabs({ patient, values, onChange }) {
  const subTabs = [
    { key: "foot_scan",        label: "Foot Scan"              },
    { key: "gait_analysis",    label: "Gait Analysis"          },
    { key: "electromyography", label: "Electromyography (EMG)" },
  ];
  const [activeSub, setActiveSub] = useState("foot_scan");


  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", borderBottom: "2px solid #e5e7eb", background: "#fff" }}>
        {subTabs.map((t) => (
          <div
            key={t.key}
            onClick={() => setActiveSub(t.key)}
            style={{
              padding: "14px 32px",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              color: activeSub === t.key ? "#2563eb" : "#374151",
              borderBottom: activeSub === t.key ? "3px solid #2563eb" : "3px solid transparent",
              marginBottom: -2,
              transition: "color .15s",
            }}
          >
            {/* {t.label} */}
          </div>
        ))}
      </div>
     
    </div>
  );
}

/* ── Motion Capture SOAP schemas ── */
const MC_SUBJECTIVE_SCHEMA = {
  
  actions: [
    { type: "back",  label: "Back"  },
    { type: "clear", label: "Clear" },
    { type: "save",  label: "Save"  },
  ],
 sections: [{ fields: [
   
          {
          name: "mc_foot_report",
          label: "Upload Foot Report",
          type: "attach-file",
        },
    { name: "mc_foot_scan", label: "Chief Complaint",     type: "input" },
      {
            name: "hpi_footscan",
            label: "History of Presenting Illness (HPI)",
            type: "input"
          }
  ]}],
};

const MC_OBJECTIVE_SCHEMA = {
  
  actions: [
    { type: "back",  label: "Back"  },
    { type: "clear", label: "Clear" },
    { type: "save",  label: "Save"  },
  ],
  sections: [{ fields: [
    {
          name: "services",
          label: "Services",
          type: "checkbox-group",
          options: [
            { label: "Neurology", value: "neurology" },
            { label: "Musculoskeletal", value: "musculoskeletal" },
            { label: "Peadiatrics (CP)", value: "paediatrics" },
            { label: "Geriatrics", value: "geriatrics" },
            { label: "Amputation", value: "amputation" },
            { label: "Spinal Cord Injury", value: "sci" },
            { label: "Others", value: "others" },
          ],
        },

        {
          name: "other_service",
          label: "Please Specify",
          type: "input",
          showIf: {
            field: "services",
            includes: "others",
          },
        },

        // Impairment Mapping

        {
          name: "paediatrics_mapping",
          label: "Impairment Mapping - Peadiatrics (CP)",
          type: "radio",
          options: ["Yes", "No"],
          showIf: {
            field: "services",
            includes: "paediatrics",
          },
        },

        {
          name: "neurology_mapping",
          label: "Impairment Mapping - Neurology",
          type: "radio",
          options: ["Yes", "No"],
          showIf: {
            field: "services",
            includes: "neurology",
          },
        },

        {
          name: "musculoskeletal_mapping",
          label: "Impairment Mapping - Musculoskeletal",
          type: "radio",
          options: ["Yes", "No"],
          showIf: {
            field: "services",
            includes: "musculoskeletal",
          },
        },

        {
          name: "geriatrics_mapping",
          label: "Impairment Mapping - Geriatrics",
          type: "radio",
          options: ["Yes", "No"],
          showIf: {
            field: "services",
            includes: "geriatrics",
          },
        },

        {
          name: "amputation_mapping",
          label: "Impairment Mapping - Amputation",
          type: "radio",
          options: ["Yes", "No"],
          showIf: {
            field: "services",
            includes: "amputation",
          },
        },

        {
          name: "sci_mapping",
          label: "Impairment Mapping - Spinal Cord Injury",
          type: "radio",
          options: ["Yes", "No"],
          showIf: {
            field: "services",
            includes: "sci",
          },
        },
   {
  name: "motion_capture_category",
  label: "Category",
  type: "single-select",
  placeholder: "Select Category",
  options: [
    { label: "Gait Analysis", value: "gait_analysis" },
    { label: "Upper Limb Analysis", value: "upper_limb_analysis" },
    { label: "Total Body Analysis", value: "total_body_analysis" },
    { label: "Ergonomics Assessment", value: "ergonomics_assessment" },
    { label: "Push Ergonomics Assessment", value: "ergonomics_push" },
    { label: "Pull Ergonomics Assessment", value: "ergonomics_pull" },
    { label: "Lifting Ergonomics Assessment", value: "ergonomics_lifting" },
    { label: "Twisting Ergonomics Assessment", value: "ergonomics_twisting" },
    { label: "Carrying Ergonomics Assessment", value: "ergonomics_carrying" },
    { label: "Sport Biomechanics", value: "sport_biomechanics" },
    { label: "Jumping Sport Biomechanics", value: "sport_jumping" },
    { label: "Landing Sport Biomechanics", value: "sport_landing" },
  ],
},
    { name: "mc_gait_report",         label: "Upload Gait Report",  type: "attach-file" },
    {
  title: "OCR Summary",
  fields: [
    {
      type: "accordion",
      label: "1. Spatial-Temporal Parameter Summary",
      defaultOpen: false,

      children: [
        {
          name: "spatial_temporal",
          type: "grid-table-flat",

          headers: ["Left", "Right", "Norms"],

          rows: [
            {
              key: "step_length",
              label: "Step Length (m)",
            },
            {
              key: "stride_length",
              label: "Stride Length (m)",
            },
            {
              key: "cadence",
              label: "Cadence (step/min)",
            },
            {
              key: "double_support",
              label: "Double supp (s)",
            },
            {
              key: "single_support",
              label: "Single supp (s)",
            },
            {
              key: "step_time",
              label: "Step Time (s)",
            },
            {
              key: "stride_time",
              label: "Stride Time (s)",
            },
          ],

          labelWidth: "250px",
        },
      ],
    },
  ],
},
{
  type: "accordion",
  label: "2. Walking Speed (with Interpretation)",
  defaultOpen: false,
  children: [
    {
      name: "walking_speed",
      type: "grid-table-flat",
      headers: ["Left", "Right", "Norms"],
      rows: [
        {
          key: "speed",
          label: "Speed (m/s)",
        },
      ],
      labelWidth: "180px",
    },
    {
      name: "walking_speed_interpretation",
      label: "Walking Speed Interpretation",
      type: "input",
    },
  ],
},
{
  type: "accordion",
  label: "3. Stance VS Swing Ratio (with Interpretation)",
  defaultOpen: false,
  children: [
    {
      name: "stance_swing_ratio",
      type: "grid-table-flat",
      headers: ["Left", "Right", "Norms"],
      rows: [
        {
          key: "stance",
          label: "Stance (%)",
        },
        {
          key: "swing",
          label: "Swing (%)",
        },
      ],
      labelWidth: "180px",
    },
    {
      name: "stance_swing_interpretation",
      label: "Stance Swing Interpretation",
      type: "input",
    },
  ],
},
{
  type: "accordion",
  label: "4. Step Width (with Interpretation)",
  defaultOpen: false,
  children: [
    {
      name: "step_width",
      type: "grid-table-flat",
      headers: ["Left", "Right", "Norms"],
      rows: [
        {
          key: "width",
          label: "Width (m)",
        },
      ],
      labelWidth: "180px",
    },
    {
      name: "step_width_interpretation",
      label: "Step Width Interpretation",
      type: "input",
    },
  ],
},
{
  type: "accordion",
  label: "5. Kinematic Graph",
  defaultOpen: false,
  children: [
    {
      name: "kinematic_interpretation",
      label: "Kinematic Interpretation",
      type: "input",
    },
  ],
},
    { name: "gait_chieft_complaint", label: "  Gait Chief Complaint",     type: "input" },
     {
            name: "hpi_gait",
            label: "History of Presenting Illness (HPI)",
            type: "input"
          },
        
// {
//       name: "gait_feature",
//       label: "Gait Feature",
//       type: "single-select",

//       options: [
//         { label: "Forward lean increased", value: "forward_lean" },
//         { label: "Hyper lordose", value: "hyper_lordose" },
//         { label: "Ipsilateral lean", value: "ipsilateral_lean" },
//         { label: "Anterior tilt increased", value: "anterior_tilt" },
//         { label: "Posterior tilt movement increased", value: "posterior_tilt" },
//         { label: "Obliquity drop", value: "obliquity_drop" },
//         { label: "Obliquity lift", value: "obliquity_lift" },
//         { label: "Protraction increased", value: "protraction" },
//         { label: "Retraction increased", value: "retraction" },
//         { label: "Extension decreased", value: "hip_extension_decreased" },
//         { label: "Peak extension delayed", value: "peak_extension_delayed" },
//         { label: "Flexion delayed", value: "flexion_delayed" },
//         { label: "Flexion increased", value: "flexion_increased" },
//       ],
//     },
{type:'subheading',label:'Appendix A: Relation gait feature - possible impairments'},
{
  name: "gait_feature",
  label: "Gait Feature",
  type: "multi-select-dropdown",

  showIf: {
    field: "paediatrics_mapping",
    equals: "Yes",
    and: {
      field: "services",
      includes: "paediatrics"
    }
  },

 options: [
    { label: "Forward lean increased", value: "forward_lean" },
    { label: "Hyper lordose", value: "hyper_lordose" },
    { label: "Ipsilateral lean", value: "ipsilateral_lean" },
    { label: "Anterior tilt increased", value: "anterior_tilt" },
    { label: "Posterior tilt movement increased", value: "posterior_tilt" },
    { label: "Obliquity drop", value: "obliquity_drop" },
    { label: "Obliquity lift", value: "obliquity_lift" },
    { label: "Protraction increased", value: "protraction" },
    { label: "Retraction increased", value: "retraction" },
    { label: "Extension decreased", value: "hip_extension_decreased" },
    { label: "Peak extension delayed", value: "peak_extension_delayed" },
    { label: "Flexion delayed", value: "flexion_delayed" },
    { label: "Flexion increased", value: "flexion_increased" },
  ],
},

{
  type: "custom",
  name: "underlying_impairment_dropdown",
  
  render: ({ values, onChange }) => {

    const selectedFeatures =
      values?.gait_feature || [];

    const impairments = [
      ...new Map(
        selectedFeatures
          .flatMap(
            feature => GAIT_FEATURE_MAPPING[feature] || []
          )
          .map(item => [item.impairment, item])
      ).values()
    ];

    return (
      <CommonFormBuilder
        schema={{
          sections: [
            {
              fields: [
                {
                  name: "selected_impairments",
                  label: "Underlying Impairment",
                  type: "multi-select-dropdown",
                   showIf: {
    field: "paediatrics_mapping",
    equals: "Yes",
    and: {
      field: "services",
      includes: "paediatrics"
    }
  },
                  options: impairments.map(item => ({
                    label: item.impairment,
                    value: item.impairment,
                  })),
                },
              ],
            },
          ],
        }}
        values={values}
        onChange={onChange}
      />
    );
  },
},
// {
//   type: "custom",
//   name: "impairment_details",
//   render: ({ values, onChange }) => {
//     const selectedFeatures = values?.gait_feature || [];
//     const selectedImpairment =
//       values?.selected_impairment;

//     const item = selectedFeatures
//       .flatMap(
//         feature => GAIT_FEATURE_MAPPING[feature] || []
//       )
//       .find(
//         x => x.impairment === selectedImpairment
//       );

//     if (!item) return null;

//     return (
//       <div
//         style={{
//           border: "1px solid #e5e7eb",
//           borderRadius: 8,
//           padding: 16,
//           marginTop: 12,
//         }}
//       >
//         <div>
//           <strong>Plane:</strong> {item.plane}
//         </div>

//         <div>
//           <strong>Segment:</strong> {item.segment}
//         </div>

//         <div>
//           <strong>Gait Phase:</strong> {item.gaitPhase}
//         </div>

//         <div style={{ marginTop: 12 }}>
//           <label className="form-label">
//             Likelihood
//           </label>

//           <div className="fb-inline-group">
//             <label>
//               <input
//                 type="radio"
//                 checked={
//                   values?.likelihood === "Yes"
//                 }
//                 onChange={() =>
//                   onChange("likelihood", "Yes")
//                 }
//               />
//               Yes
//             </label>

//             <label>
//               <input
//                 type="radio"
//                 checked={
//                   values?.likelihood === "No"
//                 }
//                 onChange={() =>
//                   onChange("likelihood", "No")
//                 }
//               />
//               No
//             </label>
//           </div>
//         </div>
//       </div>
//     );
//   }
// },

{
  type: "custom",
  name: "impairment_details",
  render: ({ values, onChange }) => {

    const gaitLabels = {
      forward_lean: "Forward lean increased",
      hyper_lordose: "Hyper lordose",
      ipsilateral_lean: "Ipsilateral lean",
      anterior_tilt: "Anterior tilt increased",
      posterior_tilt: "Posterior tilt movement increased",
      obliquity_drop: "Obliquity drop",
      obliquity_lift: "Obliquity lift",
      protraction: "Protraction increased",
      retraction: "Retraction increased",
      hip_extension_decreased: "Extension decreased",
      peak_extension_delayed: "Peak extension delayed",
      flexion_delayed: "Flexion delayed",
      flexion_increased: "Flexion increased",
    };

    const selectedFeatures =
      values?.gait_feature || [];

    const selectedImpairments =
      values?.selected_impairments || [];

    const rows = [];
    const tableValues = {};

    selectedFeatures.forEach(feature => {
      (GAIT_FEATURE_MAPPING[feature] || [])
        .filter(item =>
          selectedImpairments.includes(item.impairment)
        )
        .forEach((item, index) => {

          const rowKey = `${feature}_${index}`;

          rows.push({
            key: rowKey,
            label: gaitLabels[feature]
          });

          tableValues[
            `gait_impairment_table_${rowKey}_Gait Feature`
          ] = gaitLabels[feature];

          tableValues[
            `gait_impairment_table_${rowKey}_Plane`
          ] = item.plane;

          tableValues[
            `gait_impairment_table_${rowKey}_Segment`
          ] = item.segment;

          tableValues[
            `gait_impairment_table_${rowKey}_Gait Phase`
          ] = item.gaitPhase;

          tableValues[
            `gait_impairment_table_${rowKey}_Underlying Impairment`
          ] = item.impairment;

          tableValues[
            `gait_impairment_table_${rowKey}_Likelihood`
          ] = values[
            `gait_impairment_table_${rowKey}_Likelihood`
          ] || "";
        });
    });

    if (!rows.length) return null;

    return (
      <CommonFormBuilder
        schema={{
          sections: [
            {
              fields: [
                {
  name: "gait_impairment_table",
  type: "grid-table-flat",

  headers: [
   
    "Plane",
    "Segment",
    "Gait Phase",
    "Underlying Impairment",
    "Likelihood"
  ],

  rows,

  headerOptions: {
    "Likelihood": ["Yes", "No"]
  },

  labelWidth: "200px"
}
              ]
            }
          ]
        }}
        values={{
          ...values,
          ...tableValues
        }}
        onChange={onChange}
      />
    );
  }
} // {
    //   type: "custom",
    //   name: "gait_impairment_table",
    //   render: ({ values }) => {
    //     const selectedGaitFeature = values?.gait_feature;
    //     const impairments = selectedGaitFeature ? GAIT_FEATURE_MAPPING[selectedGaitFeature] : [];

    //     const planeLabel = { S: "Sagittal", F: "Frontal", T: "Transverse" };

    //     const containerStyle = {
    //       border: "1px solid #e5e7eb",
    //       borderRadius: 8,
    //       overflow: "hidden",
    //       marginTop: 8,
    //     };

    //     const headerStyle = {
    //       display: "grid",
    //       gridTemplateColumns: "100px 100px 120px 1fr 70px 70px",
    //       background: "#f1f5f9",
    //       fontWeight: 700,
    //       fontSize: 12,
    //       color: "#334155",
    //       borderBottom: "2px solid #e2e8f0",
    //     };

    //     const headerCellStyle = {
    //       padding: "10px 8px",
    //       textAlign: "left",
    //       borderRight: "1px solid #e2e8f0",
    //     };

    //     const rowStyle = {
    //       display: "grid",
    //       gridTemplateColumns: "100px 100px 120px 1fr 70px 70px",
    //       borderBottom: "1px solid #e5e7eb",
    //       fontSize: 12,
    //       background: "#fff",
    //     };

    //     const cellStyle = {
    //       padding: "8px",
    //       borderRight: "1px solid #f1f5f9",
    //       display: "flex",
    //       alignItems: "center",
    //     };

    //     // if (!selectedGaitFeature) {
    //     //   return (
    //     //     <div style={{ fontSize: 13, color: "#9ca3af", fontStyle: "italic", marginTop: 8 }}>
    //     //       Select a gait feature above to view related impairments.
    //     //     </div>
    //     //   );
    //     // }

    //     // if (impairments.length === 0) {
    //     //   return (
    //     //     <div style={{ fontSize: 13, color: "#9ca3af", fontStyle: "italic", marginTop: 8 }}>
    //     //       No impairments mapped for this gait feature.
    //     //     </div>
    //     //   );
    //     // }

    //     return (
    //       <div style={containerStyle}>
    //         {/* Header */}
    //         <div style={headerStyle}>
    //           <div style={headerCellStyle}>Plane</div>
    //           <div style={headerCellStyle}>Segment</div>
    //           <div style={headerCellStyle}>Gait Phase</div>
    //           <div style={headerCellStyle}>Underlying Impairment</div>
    //           <div style={{ ...headerCellStyle, textAlign: "center" }}>Mean</div>
    //           <div style={{ ...headerCellStyle, textAlign: "center", borderRight: "none" }}>SD</div>
    //         </div>

    //         {/* Rows */}
    //         {impairments.map((item, idx) => (
    //           <div key={idx} style={{ ...rowStyle, background: idx % 2 === 0 ? "#fff" : "#fafbfc" }}>
    //             <div style={cellStyle}>
    //               <span style={{
    //                 padding: "2px 8px",
    //                 borderRadius: 4,
    //                 fontSize: 11,
    //                 fontWeight: 600,
    //                 color: "#1d4ed8",
    //                 background: "#dbeafe",
    //               }}>
    //                 {planeLabel[item.plane] || item.plane}
    //               </span>
    //             </div>
    //             <div style={cellStyle}>
    //               <span style={{
    //                 padding: "2px 8px",
    //                 borderRadius: 4,
    //                 fontSize: 11,
    //                 fontWeight: 600,
    //                 color: "#065f46",
    //                 background: "#d1fae5",
    //               }}>
    //                 {item.segment}
    //               </span>
    //             </div>
    //             <div style={cellStyle}>{item.gaitPhase}</div>
    //             <div style={{ ...cellStyle, fontWeight: 600, color: "#0f172a" }}>{item.impairment}</div>
    //             <div style={{ ...cellStyle, justifyContent: "center", fontWeight: 600 }}>{item.mean}</div>
    //             <div style={{ ...cellStyle, justifyContent: "center", borderRight: "none" }}>{item.sd}</div>
    //           </div>
    //         ))}
    //       </div>
    //     );
    //   },
    // },

  ]}],
};

const MC_ASSESSMENT_SCHEMA = {
  actions: [
    { type: "back", label: "Back" },
    { type: "clear", label: "Clear" },
    { type: "save", label: "Save" },
  ],

  sections: [
    {
      fields: [
       {
  type: "row",
  cols: 4,
  fields: [
    {
      name: "mc_gait_report",
      label: "Upload EMG Report",
      type: "attach-file",
    },
    {
      name: "upper_limb_report",
      label: "Upper Limb",
      type: "attach-file",
    },
    {
      name: "lower_limb_report",
      label: "Lower Limb",
      type: "attach-file",
    },
    {
      name: "back_report",
      label: "Back",
      type: "attach-file",
    },
  ],
},

        {
          name: "mc_chief_complaint_obj",
          label: "Chief Complaint",
          type: "input",
        },

        {
          name: "hpi",
          label: "History of Presenting Illness (HPI)",
          type: "input",
        },
      ],
    },
  ],
};

const MC_SOAP_TABS = [
  { key: "subjective",  label: "Foot Scan"              },
  { key: "objective",   label: "Gait Analysis"          },
  { key: "assessment",  label: "Electromyography (EMG)" },
];
const MC_SCHEMA_MAP = {
  subjective:  MC_SUBJECTIVE_SCHEMA,
  objective:   MC_OBJECTIVE_SCHEMA,
  assessment:  MC_ASSESSMENT_SCHEMA,
};

/* ── EmptySoapPanel (Motion Capture main view) ── */
function EmptySoapPanel({ patient, onBack }) {
  const storageKey = patient ? `motion_capture_${patient.id}` : null;
  const [values, setValues]       = useState({});
  const [activeSOAP, setActiveSOAP] = useState("subjective");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!storageKey) return;
    const saved = localStorage.getItem(storageKey);
    if (saved) { try { setValues(JSON.parse(saved).values || {}); } catch {} }
  }, [storageKey]);

  const onChange = (name, value) => setValues(v => ({ ...v, [name]: value }));

  const handleAction = (type) => {
    if (type === "back")  { onBack?.(); }
    if (type === "clear") { setValues({}); localStorage.removeItem(storageKey); }
    if (type === "save")  {
      if (storageKey) localStorage.setItem(storageKey, JSON.stringify({ values, updatedAt: new Date() }));
      alert("Motion Capture draft saved");
    }
  };

  const soapOrder = ["subjective", "objective", "assessment"];
  const soapIdx   = soapOrder.indexOf(activeSOAP);

  return (
    // <div style={emptyWrap}>
    <div>
      {/* Patient Information */}
    
        <PatientCard
          patient={patient}/>
      
      {/* SOAP Tabs — uppercase centered style */}
      <div style={{ display: "flex", justifyContent: "center", borderBottom: "2px solid #e5e7eb", background: "#fff" }}>
        {MC_SOAP_TABS.map(t => (
          <div
            key={t.key}
            onClick={() => setActiveSOAP(t.key)}
            style={{
              padding: "14px 32px",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              color: activeSOAP === t.key ? "#2563eb" : "#374151",
              borderBottom: activeSOAP === t.key ? "3px solid #2563eb" : "3px solid transparent",
              marginBottom: -2,
              transition: "color .15s",
            }}
          >
            {t.label}
          </div>
        ))}
      </div>

      {/* SOAP Content */}
      <CommonFormBuilder
        schema={MC_SCHEMA_MAP[activeSOAP]}
        values={values}
        onChange={onChange}
        onAction={handleAction}
      />

{/* Motion Capture sub-tabs (inside Objective) */}
      {activeSOAP === "objective" && (
        <MotionCaptureSubTabs patient={patient} values={values} onChange={onChange} />
      )}

      {/* Gait Feature Details (Appendix A cascading) - renders below the gait_feature select */}
      {activeSOAP === "objective" && values?.gait_feature && (
        <GaitFeatureDetails values={values} onChange={onChange} />
      )}

      {/* Next / Submit */}
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "12px 16px" }}>
        {soapIdx < soapOrder.length - 1 ? (
          <button
            style={submitBtnStyle}
            onClick={() => setActiveSOAP(soapOrder[soapIdx + 1])}
          >
            Next →
          </button>
        ) : (
          <button
            style={submitBtnStyle}
            onClick={() => { setSubmitted(true); alert("Motion Capture assessment submitted"); }}
          >
            Submit Assessment
          </button>
        )}
      </div>
    </div>
  );
}

/* ── Gait Feature Details: Cascading selection for Appendix A ── */
function GaitFeatureDetails({ values, onChange }) {
  // const selectedGaitFeature = values?.gait_feature;
  // const impairments = selectedGaitFeature ? GAIT_FEATURE_MAPPING[selectedGaitFeature] : [];
  const selectedGaitFeatures = Array.isArray(values?.gait_feature)
  ? values.gait_feature
  : [];

const impairments = selectedGaitFeatures.flatMap(
  feature => GAIT_FEATURE_MAPPING[feature] || []
);
  const selectedImpairmentIdx = values?.selected_impairment_idx;

  const handleImpairmentSelect = (idx) => {
    onChange("selected_impairment_idx", String(idx));
  };

  // Gait feature label lookup
  const gaitFeatureLabels = {
    forward_lean: "Forward lean increased",
    hyper_lordose: "Hyper lordose",
    ipsilateral_lean: "Ipsilateral lean",
    anterior_tilt: "Anterior tilt increased",
    posterior_tilt: "Posterior tilt movement increased",
    obliquity_drop: "Obliquity drop",
    obliquity_lift: "Obliquity lift",
    protraction: "Protraction increased",
    retraction: "Retraction increased",
    hip_extension_decreased: "Extension decreased",
    peak_extension_delayed: "Peak extension delayed",
    flexion_delayed: "Flexion delayed",
    flexion_increased: "Flexion increased",
  };

  const planeLabel = {
    S: "Sagittal",
    F: "Frontal",
    T: "Transverse",
  };

  const containerStyle = {
    marginTop: 16,
    padding: "16px 0",
    borderTop: "1px solid #e5e7eb",
  };

  const sectionTitle = {
    fontSize: 14,
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: 12,
  };

  const cardStyle = {
    border: "1px solid #e5e7eb",
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    cursor: "pointer",
    transition: "all 0.15s",
    background: "#fff",
  };

  const activeCardStyle = {
    ...cardStyle,
    border: "2px solid #2563eb",
    background: "#eff6ff",
    boxShadow: "0 0 0 3px rgba(37,99,235,0.1)",
  };

  const labelText = {
    fontSize: 13,
    fontWeight: 600,
    color: "#1e293b",
    marginBottom: 4,
  };

  const metaText = {
    fontSize: 12,
    color: "#6b7280",
    lineHeight: 1.6,
  };

  const detailCardStyle = {
    border: "1px solid #dbeafe",
    borderRadius: 10,
    padding: 16,
    background: "#f8faff",
    marginTop: 8,
  };

  const detailRow = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  };

  const badgeStyle = (color, bg) => ({
    padding: "3px 10px",
    borderRadius: 6,
    fontSize: 13,
    fontWeight: 600,
    color,
    background: bg,
  });

  const meanSdBadge = {
    padding: "4px 10px",
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
    background: "#f1f5f9",
    color: "#475569",
  };

  // If no gait feature selected, nothing to show
  // if (!selectedGaitFeature) return null;

  return (
    <div style={containerStyle}>
      {/* Impairments section */}
     
      {impairments.length === 0 && (
        <div style={{ fontSize: 13, color: "#9ca3af", fontStyle: "italic" }}>
          No impairments mapped for this gait feature.
        </div>
      )}

      {impairments.map((item, idx) => {
        const isActive = selectedImpairmentIdx === String(idx);
        return (
          <div key={idx}>
            
             
                        
          </div>
        );
      })}
    </div>
  );
}

/* ── Patient Information block ── */


/* ── Styles ── */
const tabRow = {
  display: "flex",
  gap: 32,
  padding: "12px 16px 0",
  borderBottom: "1px solid #e5e7eb",
  background: "#f9fafb",
  flexWrap: "wrap",
};
const tabItem = {
  paddingBottom: 8,
  fontSize: 14,
  fontWeight: 600,
  cursor: "pointer",
  color: "#111827",
  borderBottom: "3px solid transparent",
  whiteSpace: "nowrap",
};
const activeTabStyle = {
  color: "#2563eb",
  borderBottom: "3px solid #2563eb",
};
const contentContainer = { padding: 16 };
// const emptyWrap = {
//   border: "1px solid #e5e7eb",
//   borderRadius: 10,
//   background: "#fff",
//   overflow: "hidden",
// };
const subTabRow = {
  display: "flex",
  gap: 0,
  borderBottom: "2px solid #e5e7eb",
  background: "#f1f5f9",
  padding: "0 16px",
};
const subTabItem = {
  padding: "10px 24px",
  fontWeight: 600,
  fontSize: 14,
  cursor: "pointer",
  color: "#475569",
  borderBottom: "3px solid transparent",
  marginBottom: -2,
};
const subTabActive = {
  color: "#2563eb",
  borderBottom: "3px solid #2563eb",
  background: "#fff",
};
const input = {
  width: "100%",
  minHeight: 90,
  marginTop: 6,
  marginBottom: 12,
  padding: "10px 12px",
  borderRadius: 6,
  border: "1px solid #d1d5db",
  fontSize: 14,
  resize: "vertical",
};
const alertBtn = {
  marginTop: 10,
  padding: "10px 20px",
  borderRadius: 6,
  border: "1.5px solid #007bff",
  background: "#007bff",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
};
const doctorsReportBtn = {
  padding: "10px 20px",
  background: "#2563EB",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  fontSize: 14,
  fontWeight: 600,
  cursor: "pointer",
  marginTop: 8,
};
const submitBtnStyle = {
  padding: "12px 32px",
  background: "#2563EB",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  fontWeight: 600,
  fontSize: 15,
  cursor: "pointer",
};
const tabBar = {
  display: "flex", gap: 12, justifyContent: "center",
  borderBottom: "1px solid #ddd", marginBottom: 12,
};
const tabBtn    = { padding: "10px 22px", fontWeight: 600, cursor: "pointer", color: "#0f172a" };
const tabActive = { ...tabBtn, borderBottom: "3px solid #2451b3", color: "#2451b3" };
