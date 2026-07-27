import { useState, useEffect } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import PatientCard from "../../../shared/cards/PatientCard";
import { info } from "autoprefixer";

/* ── Shared actions ── */

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
      { name: "complaint", label: "Cheif' Self-Reported Golas/Preferes", type: "input", placeholder: "Therapist assessment..." },
   
    ],
  }],
};

/* ─────────────────────────────────────────────
   PAIN SCORE SCALE INFO
───────────────────────────────────────────── */



/* ─────────────────────────────────────────────
   PAIN SCORE FIELD BUILDER
───────────────────────────────────────────── */
const STRENGTH_OPTIONS = [
  { label: "Motivated to participate", value: "motivated_to_participate" },
  { label: "Cooperative", value: "cooperative" },
  { label: "Positive attitude", value: "positive_attitude" },
  { label: "Good communication", value: "good_communication" },
  { label: "Follows simple instructions", value: "follows_simple_instructions" },
  { label: "Good attention during assessment", value: "good_attention_during_assessment" },
  { label: "Good interpersonal skills", value: "good_interpersonal_skills" },
  { label: "Good physical endurance", value: "good_physical_endurance" },
  { label: "Good upper limb function", value: "good_upper_limb_function" },
  { label: "Good hand coordination", value: "good_hand_coordination" },
  { label: "Good balance and mobility", value: "good_balance_and_mobility" },
  { label: "Demonstrates interest in vocational training", value: "interest_vocational_training" }
];
const LIMITATION_OPTIONS = [
  { label: "Requires encouragement", value: "requires_encouragement" },
  { label: "Limited motivation", value: "limited_motivation" },
  { label: "Difficulty following instructions", value: "difficulty_following_instructions" },
  { label: "Reduced attention/concentration", value: "reduced_attention_concentration" },
  { label: "Poor communication skills", value: "poor_communication_skills" },
  { label: "Low self-confidence", value: "low_self_confidence" },
  { label: "Difficulty interacting with others", value: "difficulty_interacting_with_others" },
  { label: "Requires supervision", value: "requires_supervision" },
  { label: "Reduced hand function", value: "reduced_hand_function" },
  { label: "Reduced physical endurance", value: "reduced_physical_endurance" },
  { label: "Limited standing tolerance", value: "limited_standing_tolerance" },
  { label: "Limited mobility", value: "limited_mobility" }
];

const INITIAL_IMPRESSION_OPTIONS = [
  {
    label: "Suitable for vocational training",
    value: "suitable_for_vocational_training"
  },
  {
    label: "Suitable with minimal support",
    value: "suitable_with_minimal_support"
  },
  {
    label: "Suitable with close supervision",
    value: "suitable_with_close_supervision"
  },
  {
    label: "Requires further functional rehabilitation",
    value: "requires_further_functional_rehabilitation"
  },
  {
    label: "Requires comprehensive vocational assessment",
    value: "requires_comprehensive_vocational_assessment"
  },
  {
    label:
      "Requires multidisciplinary intervention before vocational training",
    value: "requires_multidisciplinary_intervention"
  }
];



const OBJECTIVE_SCHEMA = {
  title: "Objective",

  titleInfo: {
    title: "Activities and participations",
    content: [
      "0 – No difficulty",
      "1 – Mild difficulty",
      "2 – Moderate difficulty",
      "3 – Severe difficulty",
      "4 – Complete difficulty ",
      "5 - Not applicable"
      
    ]
  },

  sections: [
    {
      fields: [
       
        {
          type: "scale-table",
          name: "activities",
          label:'Activities & Participation (ICF)',
          columns: [
            { label: "0", value: "0", required: true },
            { label: "1", value: "1", required: true },
            { label: "2", value: "2", required: true },
            { label: "3", value: "3", required: true },
            { label: "4", value: "4", required: true },
            { label: "8", value: "8", required: true }
          ],
          rows: [
            "Acquiring Skills",
            "Focusing Attention",
            "Thinking",
           
            "Writing (pattern marking)",
            "Calculating",
            "Solving problems",
            "Making decisions",
            "Undertaking a single task",
            "Undertaking multiple tasks",
            "Carrying out daily routine",
            "Handling stress",
            "Conversation",
            "Using communication devices",
            "Changing body position",
            "Maintaining body position",
            "Lifting and carrying objects",
            "Fine hand use",
            "Hand and arm use",
            "Walking",
            "Basic interpersonal interactions",
            "Complex interpersonal interactions",
            "Formal relationships",
            "Vocational training",
            "Apprenticeship / Work preparation",
            "Acquiring, keeping and terminating a job"
          ]
        },
//         {
//   name: "total_score",
//   label: "Total Score",
//   type: "input",
//   readOnly: true
// }
      ]
    }
  ]
};

const ASSESSMENT_SCHEMA = {
  title: "Assessment",
  fields: [
    {
      name: "strengths",
      label: "Strengths",
      type: "checkbox-group",
      options: STRENGTH_OPTIONS
    },
    {
      name: "limitations",
      label: "Limitations",
      type: "checkbox-group",
      options: LIMITATION_OPTIONS
    },
    {
      name: "initial_impression",
      label: "Initial Impression",
      type: "checkbox-group",
      options: INITIAL_IMPRESSION_OPTIONS
    },
    {
      name: "overall_remarks",
      label: "Overall / Remarks",
      type: "input"
    }
  ]
}

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
        //    {
        //   name: "plan_items",
        //   label: "Plan",
        //   type: "checkbox-group",
        //   options: [
        //     {
        //       label: "Continue work hardening targeting / focusing on",
        //       value: "continue_work_hardening"
        //     },
        //     {
        //       label: "Continue assessment targeting / focusing on",
        //       value: "continue_fce_assessment"
        //     },
        //     {
        //       label: "Introduce work adaptation / modification strategies",
        //       value: "introduce_work_adaptation_modification"
        //     },
           
        //     {
        //       label: "Others",
        //       value: "others"
        //     }
        //   ]
        // },

        // {
        //   name: "continue_work_hardening_remarks",
        //   label: "Work Hardening Target / Focus",
        //   type: "input",
        //   placeholder: "Enter work hardening target / focus",
        //   showIf: {
        //     field: "plan_items",
        //     includes: "continue_work_hardening"
        //   }
        // },

        // {
        //   name: "continue_fce_assessment_remarks",
        //   label: "FCE Assessment Target / Focus",
        //   type: "input",
        //   placeholder: "Enter FCE assessment target / focus",
        //   showIf: {
        //     field: "plan_items",
        //     includes: "continue_fce_assessment"
        //   }
        // },

        // {
        //   name: "introduce_work_adaptation_modification_remarks",
        //   label: "Work Adaptation / Modification Strategies",
        //   type: "input",
        //   placeholder: "Enter strategies to introduce",
        //   showIf: {
        //     field: "plan_items",
        //     includes: "introduce_work_adaptation_modification"
        //   }
        // },

        
        // {
        //   name: "plan_other_details",
        //   label: "Other Plan Item",
        //   type: "input",
        //   placeholder: "Enter other plan item",
        //   showIf: {
        //     field: "plan_items",
        //     includes: "others"
        //   }
        // },

        // {
        //   name: "plan_other_remarks",
        //   label: "Other Plan Remarks",
        //   type: "input",
        //   placeholder: "Enter other plan details",
        //   showIf: {
        //     field: "plan_items",
        //     includes: "others"
        //   }
        // }

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
export default function IntegratedTraining({ patient, onBack }) {
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
{/* {activeTab === "objective" && (
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
)} */}
      <div style={submitRow}>
          {activeTab !== "plan" ? (
            <button style={submitBtn} onClick={() => setActiveTab(tabOrder[activeTabIdx + 1])}>
              Next
            </button>
          ) : (
            <button style={submitBtn} onClick={handleSubmit}>
              Submit
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