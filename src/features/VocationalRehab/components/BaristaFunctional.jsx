import { useState, useEffect } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import PatientCard from "../../../shared/cards/PatientCard";

/* ── Shared actions ── */
const ACTIONS = [
  { type: "clear", label: "Clear" },
  { type: "save",  label: "Save"  },
];
const MOVEMENT_TOOLTIP = {
  title: "Pain Score (P/C)",
  content: [
    "P = Pain during activity",
    "C = Pain at maximum capacity",
    "0 = No pain",
    "1 = Mild",
    "2 = Moderate",
    "3 = Severe",
    "4 = Complete",
    "8 = Not assessable",
    "9 = Not recorded",
  ]
};
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
    //     {
    //       name: "observation",
    //       label: "Observation",
    //       type: "input",
    //       placeholder: "Enter observation",
    //       enableVoiceToText: true,
    //       enableOCR: true
    //     },
    //     {
    //       name: "any_complaints",
    //       label: "Any Complaints",
    //       type: "input",
    //       placeholder: "Enter any complaints",
    //       enableVoiceToText: true,
    //       enableOCR: true
    //     },
    //     // {
    //     //   name: "pain_scale",
    //     //   label: "Pain Scale",
    //     //   type: "input",
    //     //   placeholder: "Enter pain scale",
    //     //   enableVoiceToText: true,
    //     //   enableOCR: true
    //     // },
    //     {
    //     name: "pain_score",
    //     label: "Pain Score(Visual Analog Scale)",
    //     type: "scale-slider",

    //     min: 0,
    //     max: 10,
    //     ranges: [
    //       {
    //         min: 0,
    //         max: 1,
    //         label: "Mild",
    //         color: "#22c55e"   // green
    //       },
    //       {
    //         min: 1,
    //         max: 5,
    //         label: "Moderate",
    //         color: "#facc15"   // yellow
    //       },
    //       {
    //         min: 5,
    //         max: 10,
    //         label: "Severe",
    //         color: "#ef4444"   // red
    //       }
    //     ],
    //     showValue: true
    //   },
    //     {
    //       name: "new_finding_issue",
    //       label: "New Finding / Issue",
    //       type: "input",
    //       placeholder: "Enter new finding or issue",
    //       enableVoiceToText: true,
    //       enableOCR: true
    //     }
      
    ],
  }],
};
// const OBJECTIVE_SCHEMA = {

// actions: [
//       { type: "back", label: "Back" },
//       { type: "clear", label: "Clear" },
//       { type: "save", label: "Save" }
//     ],
//   sections: [
//     {
     
//       fields: [

//         // =========================
//         // MASTER TREATMENT SELECTION
//         // =========================
//         {type:'subheading',label:'Pain Score'},
       

//     {
//   type: "scale-table",
//   name: "activity_participation",
//   label: "Activities and Participation",
//   columns: [
//     { label: "0", value: 0 },
//     { label: "1", value: 1 },
//     { label: "2", value: 2 },
//     { label: "3", value: 3 },
//     { label: "4", value: 4 },
//     { label: "8", value: 8 },
//     { label: "9", value: 9 }
//   ],
//   rows: [
//     "d155 - Acquiring skills (P)",
//     "d155 - Acquiring skills (C)",
//     "d160 - Focusing attention (P)",
//     "d160 - Focusing attention (C)",
//     "d163 - Thinking (P)",
//     "d163 - Thinking (C)",
//     "d166 - Reading(P)",
//     "d166 - Reading(C)",
//     "d170 - Writing(P)",
//     "d170 - Writing(P)",
//     "d172 - Calculating(P)",
//      "d172 - Calculating(C)",
//     "d175 - Solving Problem(P)",
//     "d175 - Solving Problem(C)",
//     "d177 - Making Decisions(P)",
//     "d177 - Making Decisions(C)",
//     "d210 - UnderTakeing a single task(P)",
//     "d210 - UnderTakeing a single task(C)",
//     "d220 - UnderTakeing multiple tasks(P)",
//     "d220 - UnderTakeing multiple tasks(C)",
//     "d310 - Communicating with -receiving -spoken message(P)",
//     "d310 - Communicating with -receiving-spoken message(C)",
//     "d315 - Communicating with -receiving nonverbal message(P)",
//     "d315 - Communicating with -receiving nonverbal message(C)",
//     "d350 - Conversation(P)",

//     "d350 - Conversation(C)",
//     "d410 - Changing basic body position(P)",
//     "d410 - Changing basic body position(C)",
//     "d415 - Maintaining a  body position(P)",
//     "d415 - Maintaining a body position(C)",
//     "d430 - Lifting and carrying objects(P)",
//     "d430 - Lifting and carrying objects(C)",
//     "d440 - Fine hand use(P)",
//     "d440 - Fine hand use(C)",
//     "d445 - Hand  and arm use(P)",
//     "d445 - Hand  and arm use(C)",
//     "d450 - Walking(G)(P)",
//     "d450 - Walking(G)(C)",
//     "d455 - Moving Around(G)(P)",
//     "d455 - Moving Around(G)(C)",
//     "d465 - Moving and using equipment(C)",
//     "d465 - Moving and using equipment(P)",
//     "d470 - Basic interpersonal interactions(P)",
//     "d470 - Basic interpersonal interactions(C)",

//   ]
// }
  

//       ]
//     },

//     // =========================
//     // THERAPEUTIC MODALITIES (FIXED AS SEPARATE SECTION)
//     // =========================
    
//   ]
// };

/* ─────────────────────────────────────────────
   PAIN SCORE SCALE INFO
───────────────────────────────────────────── */

const PAIN_SCORE_INFO = {
  title: "Pain Score (P/C)",
  content: [
    "P = Pain during activity",
    "C = Pain at maximum capacity",
    "0 = No pain",
    "1 = Mild",
    "2 = Moderate",
    "3 = Severe",
    "4 = Complete",
    "8 = Not assessable",
    "9 = Not recorded"
  ]
};

/* ─────────────────────────────────────────────
   PAIN SCORE FIELD BUILDER
───────────────────────────────────────────── */

const PainScoreField = (name, label) => ({
  type: "radio-matrix",
  name,
  label,

  options: [
    { label: "0", value: 0 },
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "8", value: 8 },
    { label: "9", value: 9 }
  ],

  matrixHeaderLabel: "Activies and Participation",
  showInfoInRow: false
});

/* ─────────────────────────────────────────────
   OBJECTIVE FIELDS
───────────────────────────────────────────── */

const PAIN_SCORE_FIELDS = [
  PainScoreField("d155_p", "d155 - Acquiring skills (P)"),
  PainScoreField("d155_c", "d155 - Acquiring skills (C)"),

  PainScoreField("d160_p", "d160 - Focusing attention (P)"),
  PainScoreField("d160_c", "d160 - Focusing attention (C)"),

  PainScoreField("d163_p", "d163 - Thinking (P)"),
  PainScoreField("d163_c", "d163 - Thinking (C)"),

  PainScoreField("d166_p", "d166 - Reading (P)"),
  PainScoreField("d166_c", "d166 - Reading (C)"),

  PainScoreField("d170_p", "d170 - Writing (P)"),
  PainScoreField("d170_c", "d170 - Writing (C)"),

  PainScoreField("d172_p", "d172 - Calculating (P)"),
  PainScoreField("d172_c", "d172 - Calculating (C)"),

  PainScoreField("d175_p", "d175 - Solving Problem (P)"),
  PainScoreField("d175_c", "d175 - Solving Problem (C)"),

  // PainScoreField("d177_p", "d177 - Making Decisions (P)"),
  // PainScoreField("d177_c", "d177 - Making Decisions (C)"),

  PainScoreField("d210_p", "d210 - Undertaking single task (P)"),
  PainScoreField("d210_c", "d210 - Undertaking single task (C)"),

  PainScoreField("d220_p", "d220 - Undertaking multiple tasks (P)"),
  PainScoreField("d220_c", "d220 - Undertaking multiple tasks (C)"),

  PainScoreField("d310_p", "d310 - Spoken message (P)"),
  PainScoreField("d310_c", "d310 - Spoken message (C)"),
 PainScoreField("d315_p", "d315 - Communicating with -receiving nonverbal message(P)"),
  PainScoreField("d315_c", "d315 - Communicating with -receiving nonverbal message(C)"),
  PainScoreField("d350_p", "d350 - Conversation (P)"),
  PainScoreField("d350_c", "d350 - Conversation (C)"),



  PainScoreField("d410_p", "d410 - Changing basic body position (P)"),
  PainScoreField("d410_c", "d410 -  Changing basic body position (C)"),

  PainScoreField("d415_p", "d415 - Maintaining body position (P)"),
  PainScoreField("d415_c", "d415 - Maintaining body position (C)"),

  PainScoreField("d430_p", "d430 - Lifting & carrying (P)"),
  PainScoreField("d430_c", "d430 - Lifting & carrying (C)"),

  PainScoreField("d440_p", "d440 - Fine hand use (P)"),
  PainScoreField("d440_c", "d440 - Fine hand use (C)"),

  PainScoreField("d445_p", "d445 - Hand & arm use (P)"),
  PainScoreField("d445_c", "d445 - Hand & arm use (C)"),
    PainScoreField("d450_p", "d450 - Walking (P)"),
  PainScoreField("d450_c", "d450 - Walking (C)"),

  PainScoreField("d455_p", "d455 - Moving around (P)"),
  PainScoreField("d455_c", "d455 - Moving around (C)"),
  PainScoreField("d465_p", "d465 - Moving and using equiment(P)"),
  PainScoreField("d465_c", "d465 - Moving and using equiment(C)"),

  //  PainScoreField("d710_p", "d710 - Basic interpersonal interactions(P)"),
  // PainScoreField("d710_c", "d710 - Basic interpersonal interactions(C)"),

  // PainScoreField("d720_p", "d720 - Complex interpersonal interactionsP)"),
  // PainScoreField("d720_c", "d720 - Complex interpersonal interactions(C)"),

  // PainScoreField("d740_p", "d740 - Formal relationships (P)"),
  // PainScoreField("d740_c", "d740 - Formal relationships (C)"),

  // PainScoreField("d450_p", "d450 - Walking (P)"),
  // PainScoreField("d450_c", "d450 - Walking (C)"),

  // PainScoreField("d455_p", "d455 - Moving around (P)"),
  // PainScoreField("d455_c", "d455 - Moving around (C)"),

  PainScoreField("d825_p", "d825 - Vocational training(P)"),
  PainScoreField("d825_c", "d825 - Vocational training(C)"),

  PainScoreField("d840_p", "d840 - Apprenticeship(work preparation)(P)"),
  PainScoreField("d840_c", "d840 - Apprenticeship(work preparation)(C)"),
    PainScoreField("b144_p", "b144 - Memory function(P)"),
  PainScoreField("b144_c", "b144 - Memory function(C)"),

  PainScoreField("b210_p", "b210 - Seeing function(P)"),
  PainScoreField("b210_c", "b210 - Seeing function(C)"),


  
];

/* ─────────────────────────────────────────────
   OBJECTIVE SCHEMA
───────────────────────────────────────────── */

const OBJECTIVE_SCHEMA = {
  title: "Activies and Participation",
  titleInfo: PAIN_SCORE_INFO,

  actions: [
    { type: "back", label: "Back" },
    { type: "clear", label: "Clear" },
    { type: "save", label: "Save" }
  ],

  fields: [
    ...PAIN_SCORE_FIELDS
  ]
};
const ASSESSMENT_SCHEMA = {
 
actions: [
      { type: "back", label: "Back" },
      { type: "clear", label: "Clear" },
      { type: "save", label: "Save" }
    ],  sections: [{
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
    ],  sections: [{
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
          name: "plan_items",
          label: "Plan",
          type: "checkbox-group",
          options: [
            {
              label: "Continue work hardening targeting / focusing on",
              value: "continue_work_hardening"
            },
            {
              label: "Continue assessment targeting / focusing on",
              value: "continue_fce_assessment"
            },
            {
              label: "Introduce work adaptation / modification strategies",
              value: "introduce_work_adaptation_modification"
            },
           
            {
              label: "Others",
              value: "others"
            }
          ]
        },

        {
          name: "continue_work_hardening_remarks",
          label: "Work Hardening Target / Focus",
          type: "input",
          placeholder: "Enter work hardening target / focus",
          showIf: {
            field: "plan_items",
            includes: "continue_work_hardening"
          }
        },

        {
          name: "continue_fce_assessment_remarks",
          label: "FCE Assessment Target / Focus",
          type: "input",
          placeholder: "Enter FCE assessment target / focus",
          showIf: {
            field: "plan_items",
            includes: "continue_fce_assessment"
          }
        },

        {
          name: "introduce_work_adaptation_modification_remarks",
          label: "Work Adaptation / Modification Strategies",
          type: "input",
          placeholder: "Enter strategies to introduce",
          showIf: {
            field: "plan_items",
            includes: "introduce_work_adaptation_modification"
          }
        },

        
        {
          name: "plan_other_details",
          label: "Other Plan Item",
          type: "input",
          placeholder: "Enter other plan item",
          showIf: {
            field: "plan_items",
            includes: "others"
          }
        },

        {
          name: "plan_other_remarks",
          label: "Other Plan Remarks",
          type: "input",
          placeholder: "Enter other plan details",
          showIf: {
            field: "plan_items",
            includes: "others"
          }
        }

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
export default function BaristaFunctional({ patient, onBack }) {
  const [values, setValues]       = useState({});
  const [activeTab, setActiveTab] = useState("subjective");
  const [submitted, setSubmitted] = useState(false);
 

  const storageKey = patient ? `amputee_progress_${patient.id}` : null;

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
// 

const calculatePainScoreTotal = () => {
  let total = 0;

  Object.keys(values).forEach((key) => {
    const val = values[key];

    // only count 0-4 values
    if (
      typeof val === "number" &&
      val >= 0 &&
      val <= 4
    ) {
      total += val;
    }
  });

  return total;
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
  //   const handleAction = (type) => {
  //   if (type === "back") onBack?.();
  //   if (type === "clear") {
  //     setValues({});
  //     setSubmitted(false);
  //     localStorage.removeItem(storageKey);
  //   }
  //   if (type === "save") {
  //     localStorage.setItem(
  //       storageKey,
  //       JSON.stringify({ values, updatedAt: new Date() })
  //     );
  //     alert("Spinal draft saved");
  //   }
  // };
  const handleAction = (type) => {
  console.log("Action Clicked:", type);

  switch (type) {
    case "back":
      // ✅ FIX: handle tab navigation FIRST
      if (activeTabIdx > 0) {
        setActiveTab(tabOrder[activeTabIdx - 1]); // go to previous tab
        return;
      }

      // ✅ If already first tab → go back page
      

    case "clear":
      setValues({});
      setSubmitted(false);
      if (storageKey) localStorage.removeItem(storageKey);
      break;

    case "save":
      if (storageKey) {
        localStorage.setItem(
          storageKey,
          JSON.stringify({ values, updatedAt: new Date() })
        );
      }
      alert("Spinal draft saved");
      break;

    default:
      break;
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
      {/* {activeTab === "objective" && (
  <div
    style={{
      marginTop: 14,
      padding: "12px 16px",
      background: "#f8fafc",
      border: "1px solid #cbd5e1",
      borderRadius: 8,
      fontWeight: 700,
      fontSize: 16
    }}
  >
    Total Score :
    {" "}
    {calculateScaleTableTotal("activity_participation")}
  </div>
)} */}
{activeTab === "objective" && (
  <div
    style={{
      marginTop: 16,
      padding: "14px 18px",
      background: "#f8fafc",
      border: "1px solid #cbd5e1",
      borderRadius: 10,
      fontSize: 18,
      fontWeight: 700,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}
  >
    <span>Total Pain Score</span>

    <span
     
    >
      {calculatePainScoreTotal()}
    </span>
  </div>
)}
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