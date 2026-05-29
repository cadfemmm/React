import { useState, useEffect } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import PatientCard from "../../../shared/cards/PatientCard";

/* ── Shared actions ── */
const ACTIONS = [
  { type: "clear", label: "Clear" },
  { type: "save",  label: "Save"  },
];

/* ══════════════════════════════════════════════════════════
   SCHEMAS
══════════════════════════════════════════════════════════ */

const SUBJECTIVE_SCHEMA = {
 
actions: [
      { type: "back", label: "Back" },
      { type: "clear", label: "Clear" },
      { type: "save", label: "Save" }
    ],  sections: [{
    fields: [
      { name: "complaint", label: "Cheif Complaint", type: "input", placeholder: "Therapist assessment..." },
      { name: "History of Present", label: "History of Present Illnes", type: "input" },
      
    ],
  }],
};


const OBJECTIVE_SCHEMA = {
 
  actions: [
      { type: "back", label: "Back" },
      { type: "clear", label: "Clear" },
      { type: "save", label: "Save" }
    ],
  sections: [
    {
      title: "Therapeutic Interventions",
      fields: [
        {
  name: "therapeutic_exercises_given",
  // label: "Therapeutic Exercises",
  type: "checkbox-group",
  options: [
    { label: "ROM exercise", value: "rom_exercise" },
    { label: "Chest Expansion Exercise", value: "chest_expansion" },
    { label: "Airway Clearance Technique", value: "airway_clearance" },
    { label: "Positioning", value: "positioning" },
    { label: "Strengthening exercise", value: "strengthening" },
    { label: "Stretching", value: "stretching" },
    { label: "Cardiovascular endurance training", value: "cardio_endurance" },
    { label: "Mobilisation / ambulation training", value: "mobility_training" },
    { label: "Breathing exercise", value: "breathing_exercise" },
    { label: "Others", value: "others" }
  ]
},
{
  name: "rom_exercise_type",
  label: "ROM Type",
  type: "radio",
  options: [
    { label: "Passive", value: "passive" },
    { label: "Active", value: "active" },
    { label: "Assisted", value: "assisted" }
  ],
  showIf: {
    field: "therapeutic_exercises_given",
    includes: "rom_exercise"
  }
},
{ type: "row", showIf: { field: "therapeutic_exercises_given", includes: "rom_exercise" }, fields: [
  { name: "rom_exercise_remarks", label: "Remark", type: "input" },
]},
{ type: "row", showIf: { field: "therapeutic_exercises_given", includes: "chest_expansion" }, fields: [
  { name: "chest_expansion_remarks", label: "Remark", type: "input" },
]},
{
  name: "airway_clearance_type",
  label: "Technique",
  type: "radio",
  options: [
    { label: "ACBT", value: "acbt" },
    { label: "Huffing", value: "huffing" },
    { label: "Coughing", value: "coughing" }
  ],
  showIf: {
    field: "therapeutic_exercises_given",
    includes: "airway_clearance"
  }
},
{ type: "row", showIf: { field: "therapeutic_exercises_given", includes: "airway_clearance" }, fields: [
  { name: "airway_clearance_remarks", label: "Remark", type: "input" },
]},
{ type: "row", showIf: { field: "therapeutic_exercises_given", includes: "positioning" }, fields: [
  { name: "positioning_remarks", label: "Remark", type: "input" },
]},
{
  name: "strengthening_type",
  label: "Area",
  type: "radio",
  options: [
    { label: "UL", value: "ul" },
    { label: "LL", value: "ll" }
  ],
  showIf: {
    field: "therapeutic_exercises_given",
    includes: "strengthening"
  }
},
{ type: "row", showIf: { field: "therapeutic_exercises_given", includes: "strengthening" }, fields: [
  { name: "strengthening_remarks", label: "Remark", type: "input" },
]},
{
  name: "stretching_type",
  label: "Stretching Type",
  type: "radio",
  options: [
    { label: "Passive", value: "passive" },
    { label: "Active", value: "active" }
  ],
  showIf: {
    field: "therapeutic_exercises_given",
    includes: "stretching"
  }
},

{ type: "row", showIf: { field: "therapeutic_exercises_given", includes: "stretching" }, fields: [
  { name: "stretching_remarks", label: "Remark", type: "input" },
]},
{ type: "row", showIf: { field: "therapeutic_exercises_given", includes: "cardio_endurance" }, fields: [
  { name: "cardio_endurance_remarks", label: "Remark", type: "input" },
]},
{ type: "row", showIf: { field: "therapeutic_exercises_given", includes: "mobility_training" }, fields: [
  { name: "mobility_training_remarks", label: "Remark", type: "input" },
]},
{ type: "row", showIf: { field: "therapeutic_exercises_given", includes: "breathing_exercise" }, fields: [
  { name: "breathing_exercise_remarks", label: "Remark", type: "input" },
]},
{ type: "row", showIf: { field: "therapeutic_exercises_given", includes: "others" }, fields: [
  { name: "therapeutic_exercises_others", label: "Others", type: "input" },
]},
 { type: "subheading", label: "Therapeutic Modalities" },
{
  name: "therapeutic_modalities",
  // label: "Therapeutic Modalities",
  type: "checkbox-group",
  options: [
    { label: "LEGA Kit", value: "lega_kit" },
    { label: "POWERBreath", value: "power_breath" },
    { label: "Peak Flow Meter", value: "peak_flow_meter" },
    { label: "Spirometry", value: "spirometry" },
    { label: "Suction Machine", value: "suction_machine" },
    { label: "Cough Assist", value: "cough_assist" },
    { label: "Others", value: "others" }
  ]
},

{
  type: "subheading",

  showIf: {
    field: "therapeutic_modalities",
    includes: "lega_kit"
  }
},

{ type: "row", showIf: { field: "therapeutic_modalities", includes: "lega_kit" }, fields: [
  { name: "lega_kit_remarks", label: "LEGA Kit Remarks", type: "input" },
]},
{ type: "row", showIf: { field: "therapeutic_modalities", includes: "power_breath" }, fields: [
  { name: "power_breath_remarks", label: "POWERBreath Remarks", type: "input" },
]},

{ type: "row", showIf: { field: "therapeutic_modalities", includes: "peak_flow_meter" }, fields: [
  { name: "peak_flow_meter_remarks", label: "Peak Flow Meter Remarks", type: "input" },
]},
{ type: "row", showIf: { field: "therapeutic_modalities", includes: "spirometry" }, fields: [
  { name: "spirometry_remarks", label: "Spirometry Remarks", type: "input" },
]},

{ type: "row", showIf: { field: "therapeutic_modalities", includes: "suction_machine" }, fields: [
  { name: "suction_machine_remarks", label: "Suction Machine Remarks", type: "input" },
]},
{ type: "row", showIf: { field: "therapeutic_modalities", includes: "cough_assist" }, fields: [
  { name: "cough_assist_remarks", label: "Cough Assist Remarks", type: "input" },
]},
{ type: "row", showIf: { field: "therapeutic_modalities", includes: "others" }, fields: [
  { name: "therapeutic_modalities_others", label: "Others", type: "input" },
]},
// =========================
// Others
// =========================
   ]
    }
  ]
};
const ASSESSMENT_SCHEMA = {
 actions: [
      { type: "back", label: "Back" },
      { type: "clear", label: "Clear" },
      { type: "save", label: "Save" }
    ],
  sections: [{
    fields: [
    
      { name: "assessment_notes", label: "Clinical Impression / Notes", type: "input", placeholder: "Therapist assessment..." },


      
    ],
  }],
};

const PLAN_SCHEMA = {
 
 actions: [
      { type: "back", label: "Back" },
      { type: "clear", label: "Clear" },
      { type: "save", label: "Save" }
    ],
  sections: [{
    fields: [
       { type: "subheading", label: "Short-Term Goals (2–4 weeks)" },
        {
            type: "dynamic-goals",
            name: "short_term_goals"
          },
          { type: "subheading", label: "Long-Term Goals (6–12 weeks)" },
          {
            type: "dynamic-goals",
            name: "long_term_goals"
          },  
          {
  name: "plan_therapist_notes",
  label: "Therapist Notes",
  type: "checkbox-group",
  options: [
    { label: "Continue treatment program", value: "continue_treatment_program" },
    { label: "Continue therapeutic exercise", value: "continue_therapeutic_exercise" },
    { label: "Improve breathing pattern", value: "improve_breathing_pattern" },
    { label: "Improve exercise tolerance", value: "improve_exercise_tolerance" },
    { label: "Progress gait / ambulation training", value: "progress_gait_ambulation_training" },
    { label: "Progress functional activities training", value: "progress_functional_activities_training" },
    { label: "Requires ongoing supervision for safety", value: "ongoing_supervision_safety" },
    { label: "Monitor vital signs during exercise", value: "monitor_vital_signs" },
    { label: "Patient education", value: "patient_education" },
    { label: "Carer Training", value: "carer_training" },
    { label: "Others", value: "others" }
  ]
},

{
  name: "plan_therapist_notes_others",
  label: "Others (Specify)",
  type: "input",
  showIf: {
    field: "plan_therapist_notes",
    includes: "others"
  }
},

    ],
  }],
};

const SOAP_TABS = [
  { key: "subjective",     label: "Subjective"     },
  { key: "objective", label: "Objective" },
  { key: "assessment",   label: "Assessment"   },
  { key: "plan",         label: "Plan"         },
];

const SCHEMA_MAP = {
  subjective:     SUBJECTIVE_SCHEMA,
  objective: OBJECTIVE_SCHEMA,
  assessment:   ASSESSMENT_SCHEMA,
  plan:         PLAN_SCHEMA,
};

/* ══════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════ */
export default function CardiorespiratoryProgess({ patient, onBack }) {
  const [values, setValues]       = useState({});
  const [activeTab, setActiveTab] = useState("subjective");
   const [submitted, setSubmitted] = useState(false);

 

  const storageKey = patient ? `cardio_progress_${patient.id}` : null;

  useEffect(() => {
    if (!storageKey) return;
    const saved = localStorage.getItem(storageKey);
    if (saved) setValues(JSON.parse(saved).values || {});
  }, [storageKey]);
   useEffect(() => {
          if (!storageKey) return;
          const saved = localStorage.getItem(storageKey);
          if (saved) {
            try {
              setValues(JSON.parse(saved).values || {});
            } catch {}
          }
        }, [storageKey]);

  useEffect(() => {
    if (!patient) return;
    setValues(v => ({
      ...v,
      session_date: v.session_date || new Date().toISOString().split("T")[0],
    }));
  }, [patient]);

  const onChange = (name, value) => setValues(v => ({ ...v, [name]: value }));
const handleSubmit = () => {
    setSubmitted(true);
    console.log("Submitted:", values);
    alert("Assessment submitted");
  };

  const tabOrder = ["subjective", "objective", "assessment", "plan"];
  const activeTabIdx = tabOrder.indexOf(activeTab);
  // const handleAction = (type) => {
  //   if (type === "clear") setValues({});
  //   if (type === "save") {
  //     if (storageKey) localStorage.setItem(storageKey, JSON.stringify({ values, updatedAt: new Date() }));
  //     alert("Progress & Intervention saved.");
  //   }
  // };
    const handleAction = (type) => {
    if (type === "back") onBack?.();
    if (type === "clear") {
      setValues({});
      setSubmitted(false);
      localStorage.removeItem(storageKey);
    }
    if (type === "save") {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ values, updatedAt: new Date() })
      );
      alert("Spinal draft saved");
    }
  };

  return (
    <div>
      {/* Patient Information */}
        
                <PatientCard
                  patient={patient}
                  
                />
              
                
      

      {/* SOAP-style Tabs */}
      <div style={tabBar}>
        {SOAP_TABS.map(tab => (
          <div
            key={tab.key}
            style={activeTab === tab.key ? tabActive : tabBtn}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <CommonFormBuilder
        schema={SCHEMA_MAP[activeTab]}
        values={values}
        onChange={onChange}
        onAction={handleAction}
      />
      <div style={submitRow}>
          {activeTab !== "plan" ? (
            <button style={submitBtn} onClick={() => setActiveTab(tabOrder[activeTabIdx + 1])}>
              Next
            </button>
          ) : (
            <button style={submitBtn} onClick={handleSubmit}>
              Submit Assessment
            </button>
          )}
        </div>
    </div>
  );
}

/* ── Styles ── */
const tabBar    = { display: "flex", gap: 12, justifyContent: "center", borderBottom: "1px solid #ddd", marginBottom: 12 };
const tabBtn    = { padding: "10px 22px", fontWeight: 600, cursor: "pointer", color: "#0f172a" };
const tabActive = { ...tabBtn, borderBottom: "3px solid #2451b3", color: "#2451b3" };
const backBtn   = { marginTop: 10, padding: "8px 18px", borderRadius: 6, border: "1px solid #d1d5db", background: "#fff", color: "#374151", fontWeight: 600, cursor: "pointer" };
const input = {
          width: "100%",
          minHeight: 90,
          marginTop: 6,
          marginBottom: 12,
          padding: "10px 12px",
          borderRadius: 6,
          border: "1px solid #d1d5db",
          fontSize: 14,
          resize: "vertical"
};
const alertBtn = {
  marginTop: 10,
          padding: "10px 20px",
          borderRadius: 6,
          border: "1.5px solid #007bff",
          background: "#007bff",
          color: "#fff",
          fontWeight: 600,
          cursor: "pointer"
};
const doctorsReportBtn = {
  padding: "10px 20px", background: "#2563EB", color: "#fff",
  border: "none", borderRadius: 6, fontSize: 14,
  fontWeight: 600, cursor: "pointer", marginTop: 8
};
const submitRow = {
  display: "flex",
  justifyContent: "flex-end",
  marginTop: 16
};

const submitBtn = {
  padding: "12px 32px",
  background: "#2563EB",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  fontWeight: 600,
  fontSize: 15,
  cursor: "pointer"
};