import React, { useState, useEffect } from "react";
import PatientCard from "../../../shared/cards/PatientCard"
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import { DIET_ASSESSMENT_REGISTRY } from "./DietAssessmentWrapper";
import FFQAssessment from "./FFQAssessment";
import GrowthChartAssessment from "./GrowthChart";

const ET_OPTIONS = {
  "increased_energy_expenditure": [
    { label: "Voluntary or involuntary physical activity/movement", value: "voluntary_activity" },
    { label: "Accelerated growth oranabolism", value: "accelerated_growth" },
    { label: "Maintenance of body temperature", value: "body_temperature_maintenance"}
  ],
  "inadequate_energy_intake": [
    { label: "Access to food, fluid, nutrients", value: "food_access"},
    { label: "Food and nutrition knowledge deficit", value: "knowledge_deficit"},
    { label: "Decreased ability to consume sufficient energy, nutrients", value: "decreased_ability"},
    { label: "Prolonged catabolic illness", value: "prolonged_catabolic"},
    { label: "Psychological causes such as depression and disordered eating", value: "eating_disordered"},
    { label: "Food or artificial nutrition", value: "food_nutrition"}
  ],

  "predicted_excessive_energy_intake": [
    { label: "Culture of overeating", value: "overeating_culture"},
    { label: "Change in physical sctivity anticipated", value: "physical_activity_change"},
    { label: "Genetic predisposition to overweight/obesity", value: "obesity"},
    { label: "Altered metabolism", value: "altered_metabolism"},
    { label: "Family or social history of overeating", value: "overeating_history"},
    { label: "Increased psychological/life stress", value: "life_stress"},
    { label: "Change in living situation", value: "living_situation"},
    { label: "Planned therapy or medication predicted to reduce energy/nutrient need or metabolic rate/metabolism", value: "metabolism"}
  ]
}

export default function DietProgressAssessmentForm({ patient, onSubmit, onBack }) {
    const [submitted, setSubmitted] = useState(false);
    const [values, setValues] = useState({});
  const DietGrowthChartAssessment = (props) => (
    <GrowthChartAssessment {...props} patient={patient} />
  );

  const handleSubmit = () => {
    setSubmitted(true);
    console.log("Diet Progress Assessment Submited", values);
    alert("Assessment submitted");
  };
  const DIET_REGISTRY = {
    ...DIET_ASSESSMENT_REGISTRY,
    "Growth Chart": DietGrowthChartAssessment,
    FFQ: FFQAssessment,
  };

  const [form, setForm] = useState({
    chief_complaint: "",
    additional_allergic_conditions: "",
    medical_history: patient.medical_history || "",
    family_history: patient.family_history || "",  // NEW FIELD PREFILLED
    oral_intake: "",
    tube_type: "",
    swallowing_issue: "",
    chewing_issue: "",
    dentition_issue: "",
    appetite: "",
    bo: "",
    bo_details: "",
    bo_pattern_details: "",
    pu: "",
    pu_details: "",
    voiding_method: "",
    voiding_method_other: "",
    sleep: "",
    nausea: "",
    vomiting: "",
    other_complaints: "",
    breakfast_diet: [], breakfast_time: "",
    morning_tea_diet: [], morning_tea_time: "",
    lunch_diet: [], lunch_time: "",
    afternoon_tea_diet: [], afternoon_tea_time: "",
    dinner_diet: [], dinner_time: "",
    supper_diet: [], supper_time: "",
    meal_plan_feeding_type: [],
    meal_plan_enteral_details: "",
    meal_plan_mixed_details: "",
    meal_plan_fluid_details: "",
    from_date: "", to_date: "",
    diagnosis_problems: [], // Array of {problem, etiology, signs}
    diet_breakfast: "",
diet_morning_tea: "",
diet_lunch: "",
diet_afternoon_tea: "",
diet_supper: "",
diet_dinner: "",
feeding_type: "",
enteral_feeding_details: "",
    enteral_feeding_table_rows: [{ time: "", scoops: "", water: "", flushing: "" ,}],
mixed_feeding_details: "",
    mixed_feeding_table_rows: [{ time: "", scoops: "", water: "", flushing: "" }],
    iddsi_level: "",
fluid_intake_details: "",
    ffq: "",
ons_regime: "",
    weight_record_date: "",
    wheelchair_weight: patient.wheelchair_weight || "30",
    wheelchair_type: patient.wheelchair_type || "",
    wheelchair_size: patient.wheelchair_size || "",
    diet_assessment_data: {},
    diet_prognosis: "",
    diet_intervention: [],
    diet_intervention_initiate_nutrition: "",
    diet_intervention_monitor_intake: "",
    diet_intervention_document_plan: "",
    diet_intervention_order_consult: "",
    diet_intervention_supplements_enteral: "",
    diet_intervention_others: "",
    plan_short_term_goals: "",
    plan_long_term_goals: "",
    plan_review_date: "",
    plan_referral_type: "",
    plan_referral_internal: [],
    plan_referral_internal_others: "",
    plan_referral_optometry_details: "",
    plan_referral_psychology_details: "",
    plan_referral_doctors_details: "",
    plan_referral_audiology_details: "",
    plan_referral_speech_details: "",
    plan_referral_others_details: "",
    plan_referral_internal_memo: null,
    plan_referral_external_memo: null,
  });
// ----------------------------------------------
// DOCTOR REPORTS STATE + LOAD
// ----------------------------------------------
const [doctorReports, setDoctorReports] = useState([]);
const [showProblemChart, setShowProblemChart] = useState(false);

const IDNT_PROBLEM_CHART = {
  "1. Energy Balance": [
    {
      label: "Increased energy expenditure",
      etiology: "related to insufficient energy consumption",
    },
    {
      label: "Inadequate energy intake",
      etiology: "related to excessive caloric consumption",
    },
    {
      label: "Excessive energy intake",
      etiology: "related to prolonged inadequate intake",
    },
    {
      label: "Predicted suboptimal energy intake",
      etiology: "related to insufficient protein and energy intake",
    },
        {
      label: "Predicted excessive energy intake",
      etiology: "related to insufficient protein and energy intake",
    },
  ],

  "2. Oral or Nutrition Support Intake": [
    {
      label: "Inadequate oral intake",
      etiology: "related to swallowing difficulty",
    },
    {
      label: "Excessive oral intake",
      etiology: "related to excessive oral nutrition support",
    },
    {
      label: "Inadequate enteral nutrition infusion",
      etiology: "related to interruption of enteral feeding",
    },
    {
      label: "Excessive enternal nutrition infusion",
      etiology: "related to inadequate parenteral delivery",
    },
        {
      label: "Less than optimal enteral nutrition composition or modality",
      etiology: "related to inadequate parenteral delivery",
    },
            {
      label: "Inadequate parenteral nutrition infusion",
      etiology: "related to inadequate parenteral delivery",
    },
            {
      label: "Excessive parenteral nutrition infusion",
      etiology: "related to inadequate parenteral delivery",
    },
            {
      label: "Less than optimal parenteral nutrition composition or modality",
      etiology: "related to inadequate parenteral delivery",
    },        {
      label: "Limited food acceptance",
      etiology: "related to inadequate parenteral delivery",
    },
  ],

  "3. Fluid Intake": [
    {
      label: "Inadequate fluid intake",
      etiology: "related to reduced fluid consumption",
    },
    {
      label: "Excessive fluid intake",
      etiology: "related to excessive fluid administration",
    },
  ],

  "4. Bioactive Substances": [
    {
      label: "Suboptimal bioactive substance intake",
      etiology: "related to inadequate intake of functional food components",
    },
    {
      label: "Excessive bioactive substance intake",
      etiology: "related to excessive supplement consumption",
    },
    {
      label: "Excessive alcohol intake",
      etiology: "related to habitual alcohol consumption",
    },
  ],

  "5. Nutrient": [
    {
      label: "Increased nutrient needs",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Malnutrition",
      etiology: "related to reduced carbohydrate consumption",
    },
    {
      label: "Inadequate protein-energy intake",
      etiology: "related to excessive carbohydrate intake",
    },
    {
      label: "Decreased nutrient needs",
      etiology: "related to insufficient fat consumption",
    },
    {
      label: "Imbalance of nutrients",
      etiology: "related to insufficient vitamin intake",
    },

  ],

  "5.6 Fat & Cholesterol": [
    {
      label: "Inadequate fat intake",
      etiology: "related to poor protein food choices",
    },
      {
      label: "Excessive fat intake",
      etiology: "related to poor protein food choices",
    },
        {
      label: "Less than optimal intake of types of fats",
      etiology: "related to poor protein food choices",
    },
  ],

"5.7 Protein": [
    {
      label: "Inadequate protein intake",
      etiology: "related to poor protein food choices",
    },
      {
      label: "Excessive protein intake",
      etiology: "related to poor protein food choices",
    },
        {
      label: "Less than optimal intake of types of proteins or amino acids",
      etiology: "related to poor protein food choices",
    },
  ],

  "5.8 Carbohydrate and Fiber": [
    {
      label: "Inadequate carbohydrate intake",
      etiology: "related to poor protein food choices",
    },
      {
      label: "Excessive carbohydrate intake",
      etiology: "related to poor protein food choices",
    },
        {
      label: "Less than optimal intake of types of carbohydrate",
      etiology: "related to poor protein food choices",
    },
{
      label: "Inconsistent carbohydrate intake",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Inadequate fiber intake",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Excessive fiber intake",
      etiology: "related to poor protein food choices",
    },
    

  ],

"5.9 Inadequate vitamin intake": [
  {
      label: "Inadequate - Vitamin A",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Inadequate - Vitamin C",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Inadequate - Vitamin D",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Inadequate - Vitamin E",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Inadequate - Vitamin K",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Inadequate - Thiamin",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Inadequate - Riboflavin",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Inadequate - Niacin",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Inadequate - Folate",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Inadequate - Vitamin B6",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Inadequate - Vitamin B12",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Inadequate - Pantothenic acid",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Inadequate - Biotin",
      etiology: "related to poor protein food choices",
    },
],

"5.10 Excessive vitamin intake": [
  {
      label: "Excessive - Vitamin A",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Excessive - Vitamin C",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Excessive - Vitamin D",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Excessive - Vitamin E",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Excessive - Vitamin K",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Excessive - Thiamin",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Excessive - Riboflavin",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Excessive - Niacin",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Excessive - Folate",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Excessive - Vitamin B6",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Excessive - Vitamin B12",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Excessive - Pantothenic acid",
      etiology: "related to poor protein food choices",
    },
    {
      label: "Excessive - Biotin",
      etiology: "related to poor protein food choices",
    },
]

};

const vitals = {
  bp: "120 / 80 mmHg",
  pulse: "78 bpm",
  rr: "18 / min",
  temp: "36.6 °C",
  spo2: "98 %",
  rbs: "5.4 mmol/L",
  pain: "2 / 10",
};

useEffect(() => {
  const key = `patient_${patient.id}_reports`;
  const saved = JSON.parse(localStorage.getItem(key) || "[]");
  setDoctorReports(saved);
}, [patient.id]);


  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));
  const [submittedRows, setSubmittedRows] = useState([]);
  const [showReport, setShowReport] = useState(false);
  const [activeTab, setActiveTab] = useState("subjective");

  /* ----------------------------------------
     SAVE ONLY (NO SUBMIT)
  -----------------------------------------*/
  const saveOnly = () => {
    const timestamp = new Date().toLocaleString();

    if (form.swallowing_issue?.toUpperCase() === "Yes") {
      const newRow = {
        time: timestamp,
        assessment: "IA",
        icf: "b510",
        ichi: [
"SMF.AN.ZZ - Interview in relation to eating", 
"VEA.AN.ZZ Interview in relation to eating behaviours",
"KTC.AN.ZZ Interview in relation to swallowing",
"ATI.AN.ZZ Interview in relation to energy and drive functions", 

          "KTC.AN.ZZ Interview in relation to swallowing",
        ].join(", "),
      };

      setSubmittedRows((prev) => [...prev, newRow]);
    }
  };

  /* ----------------------------------------
     SUBMIT + SAVE
  -----------------------------------------*/
const submitAndSave = () => {
  saveOnly();

  // ✅ Save as an "initial diet" report for this patient
  if (patient && patient.id) {
    const key = `patient_${patient.id}_reports`;
    const existing = JSON.parse(localStorage.getItem(key) || "[]");

    const initialReport = {
      reportId: "diet_progress_" + Date.now(),
      patientId: patient.id,
      createdBy: "Dietitian",
      type: "diet_progress",
      timestamp: new Date().toISOString(),

      // snapshot of patient info
      patientSnapshot: {
        id: patient.id,
        name: patient.name,
        age: patient.age,
        sex: patient.gender || patient.sex,
        ward: patient.ward,
        diagnosis: patient.diagnosis,
      },

      // full initial diet form – all fields you filled
      form: { ...form },
    };

    localStorage.setItem(key, JSON.stringify([...existing, initialReport]));
  }

  // existing callback
  onSubmit(form);
};

  /* ----------------------------------------
     HANDLE ACTION (Back, Clear, Save) - Psychology style
  -----------------------------------------*/
  const storageKey = patient ? `diet_progress_draft_${patient.id}` : null;

  useEffect(() => {
    if (!storageKey) return;
    const draft = localStorage.getItem(storageKey);
    if (draft) {
      try {
        const parsed = JSON.parse(draft);
        if (parsed.form) setForm(prev => ({ ...prev, ...parsed.form }));
        if (Array.isArray(parsed.submittedRows)) setSubmittedRows(parsed.submittedRows);
      } catch (e) { /* ignore */ }
    }
  }, [storageKey]);

  const handleAction = (type) => {
    if (type === "back") onBack?.();

    if (type === "clear") {
      if (window.confirm("Clear all form data?")) {
        setForm({
          chief_complaint: "",
          additional_allergic_conditions: "",
          medical_history: patient?.medical_history || "",
          family_history: patient?.family_history || "",
          oral_intake: "", tube_type: "", swallowing_issue: "", chewing_issue: "",
          dentition_issue: "", appetite: "", bo: "", bo_details: "", bo_pattern_details: "",
          pu: "", pu_details: "", voiding_method: "", voiding_method_other: "", sleep: "", nausea: "", vomiting: "", other_complaints: "",
          breakfast_diet: [], breakfast_time: "", morning_tea_diet: [], morning_tea_time: "",
          lunch_diet: [], lunch_time: "", afternoon_tea_diet: [], afternoon_tea_time: "",
          dinner_diet: [], dinner_time: "", supper_diet: [], supper_time: "",
          meal_plan_feeding_type: [], meal_plan_enteral_details: "", meal_plan_mixed_details: "",
          meal_plan_fluid_details: "", from_date: "", to_date: "",
          diagnosis_problems: [],
          diet_breakfast: "", diet_morning_tea: "", diet_lunch: "", diet_afternoon_tea: "",
          diet_supper: "", diet_dinner: "", feeding_type: "",
          enteral_feeding_details: "", enteral_feeding_table_rows: [{ time: "", scoops: "", water: "", flushing: "" }], mixed_feeding_details: "", mixed_feeding_table_rows: [{ time: "", scoops: "", water: "", flushing: "" }], iddsi_level: "", fluid_intake_details: "",
          ons_regime: "", weight_record_date: "",
          wheelchair_weight: patient?.wheelchair_weight || "30",
          wheelchair_type: patient?.wheelchair_type || "",
          wheelchair_size: patient?.wheelchair_size || "",
          diet_assessment_data: {},
          diet_prognosis: "",
          diet_intervention: [],
          diet_intervention_initiate_nutrition: "",
          diet_intervention_monitor_intake: "",
          diet_intervention_document_plan: "",
          diet_intervention_order_consult: "",
          diet_intervention_supplements_enteral: "",
          diet_intervention_others: "",
          meal_plan_mod_feeding_type: "",
          meal_plan_mod_oral: [],
          meal_plan_mod_oral_others: "",
          plan_enteral_feeding_table_rows: [{ time: "", scoops: "", water: "", flushing: "" }],
          plan_enteral_feeding_details: "",
          plan_mixed_feeding_table_rows: [{ time: "", scoops: "", water: "", flushing: "" }],
          plan_mixed_feeding_details: "",
          plan_oral_fluid_intake: "",
          plan_enteral_fluid_intake: "",
          plan_mixed_fluid_intake: "",
          plan_short_term_goals: "",
          plan_long_term_goals: "",
          plan_review_date: "",
          plan_referral_type: "",
          plan_referral_internal: [],
          plan_referral_internal_others: "",
          plan_referral_optometry_details: "",
          plan_referral_psychology_details: "",
          plan_referral_doctors_details: "",
          plan_referral_audiology_details: "",
          plan_referral_speech_details: "",
          plan_referral_others_details: "",
          plan_referral_internal_memo: null,
          plan_referral_external_memo: null
        });
        setSubmittedRows([]);
        if (storageKey) localStorage.removeItem(storageKey);
      }
    }

    if (type === "save") {
      if (storageKey) {
        localStorage.setItem(storageKey, JSON.stringify({ form, submittedRows, updatedAt: new Date() }));
      }
      submitAndSave();
    }
};

  // clinician + notes + actions
  var [clinician, setClinician] = useState("");
  var [notes, setNotes] = useState("");
  var [actionInitiateNutrition, setActionInitiateNutrition] = useState(false);
  var [actionOrderConsult, setActionOrderConsult] = useState(false);
  var [actionMonitorIntake, setActionMonitorIntake] = useState(false);
  var [actionSupplements, setActionSupplements] = useState(false);
  var [actionDocumentPlan, setActionDocumentPlan] = useState(false);

  var [actionInitiateTNutrition, setActionInitiateTNutrition] = useState(false);
  var [actionTOrderConsult, setActionTOrderConsult] = useState(false);
  var [actionTMonitorIntake, setActionTMonitorIntake] = useState(false);
  var [actionTSupplements, setActionTSupplements] = useState(false);
  var [actionTDocumentPlan, setActionTDocumentPlan] = useState(false);
  /* ----------------------------------------
     BASIC VALUES
  -----------------------------------------*/
  const bmi =
    patient.weight && patient.height
      ? (patient.weight / (patient.height / 100) ** 2).toFixed(1)
      : "-";

  const weightRecordDate = (() => {
    const dateStr = patient.weight_record_date || patient.weight_height_date;
    if (!dateStr) return "-";
    try {
      const date = new Date(dateStr);
      return isNaN(date.getTime()) ? dateStr : date.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" });
    } catch (e) {
      return dateStr;
    }
  })();

  /* ===================== DIET SCHEMAS (Psychology style) ===================== */
  const DIET_ACTIONS = [
    { type: "back", label: "Back" },
    { type: "clear", label: "Clear" },
    { type: "save", label: "Save" }
  ];

  const DIET_SUBJECTIVE_SCHEMA = {
    actions: DIET_ACTIONS,
    sections: [
        {
        fields: [
          { name: "chief_complaint", label: "Chief Complaint", type: "input" },
          { name: "hpi", label: "History of Presenting Illness (HPI)", type: "input" },
            {
            name: "session_for",
            label: "Session For",
            type: "radio",
            options: [
                { label: "Dietetic Therapy", value: "therapy" },
                { label: "Specialised Programme", value: "specialized_programmes" }
            ]
            },
{
    name: "specialized_programme",
    label: "Specify Specialized Programme",
    type: "input",
    showIf: {
        field: "session_for",
        equals: "specialized_programmes"
    }
},

            {
            name: "consent",
            label: "Consent",
            type: "checkbox-group",
            options: [
                {
                label: "Consultation has been given based on findings. Client was in his/her best interest.",
                value: "yes"
                }
            ]
            },
            {
  name: "consent_document",
  label: "Upload Consent Document",
  type: "attach-file",
  showIf: {
    field: "consent",
    includes: "yes"
  }
},
            { name: "case_overview", label: "Case Overview", type: "input" },


            // { name: "new_complaints", label: "New Complaints", type: "input" },
            {
  name: "has_new_complaints",
  label: "New Complaints",
  type: "radio",
  options: [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" }
  ]
},
{
  name: "new_complaints",
  label: "Please Specify New Complaints",
  type: "input",
  showIf: {
    field: "has_new_complaints",
    equals: "yes"
  }
},
            // { name: "sessions", label: "Sessions", type: "input" }
//             {
//   name: "session_type",
//   label: "Session Type",
//   type: "radio",
//   options: [
//     { label: "Center Based", value: "center_based" },
//     { label: "Home Based", value: "home_based" },
//     { label: "Tele Rehab", value: "tele_rehab" }
//   ]
// }
        ]
        }
    ]
    };


  const DIET_OBJECTIVE_SCHEMA = {
    actions: DIET_ACTIONS,
    sections: [
        {
        fields: [
           
 {
            name: "objectives",
            label: "Objective(s)",
            type: "dynamic-section",
            fields: [
              {
                name: "objective",
                label: "Objective",
                type: "input"
              }
            ]
          },
           { name: "case_overview", label: "Case Overview", type: "input" },
           {
  type: "radio",
  name: "modalities",
  label: "Modalities",
  options: [
    { label: "Weighing scale", value: "weighing_scale" },
    { label: "Body Composition Analysis", value: "body_composition_analysis" },
    { label: "Others", value: "others" },
    { label: "Not relevant", value: "not_relevant" }
  ]
},
{
  type: "input",
  name: "modalities_other",
  label: "Specify Other Modality",
  showIf: {
    field: "modalities",
    equals: "others"
  }
},
            {
            name: "therapeutic_exercise",
            label: "Therapeutic Exercise/Intervention",
            type: "checkbox-group",
            options: [
                { label: "Medical Nutrition Therapy", value: "mnt" },
                { label: "Therapeutic Diet Preparation", value: "tdp" },
                { label: "Nutrition Support", value: "nutrition_support" },
                { label: "Dietary Education", value: "dietary_education" },
                { label: "Others", value: "others" }
            ]
            },


            {
  name: "therapeutic_exercise_others",
  label: "Others - Please Specify",
  type: "input",
  showIf: {
    field: "therapeutic_exercise",
    includes: "others"
  }
},
{
            name: "strateggies_activities",
            label: "Strateggies/Activities",
            type: "checkbox-group",
            options: [
                { label: "Medical Nutrition Therapy", value: "mnt" },
                { label: "Therapeutic Diet Preparation", value: "tdp" },
                { label: "Nutrition Support", value: "nutrition_support" },
                { label: "Dietary Education", value: "dietary_education" },
                
            ]
            },
            
{
  name: "adverse_reaction",
  label: "Adverse Reaction",
  type: "radio",
  options: [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" }
  ]
},
{
  name: "adverse_reaction_details",
  label: "Details of Adverse Reaction",
  type: "input",
  showIf: {
    field: "adverse_reaction",
    equals: "yes"
  }
},
{
  name: "adverse_reaction_document",
  label: "Upload Supporting Document",
  type: "file-upload",
  showIf: {
    field: "adverse_reaction",
    equals: "yes"
  }
},

            // { name: "strategies", label: "Strategies", type: "input" },

          
        ]
        }
    ]
    };

const DIET_ASSESSMENT_SCHEMA = {
  actions: DIET_ACTIONS,
  sections: [
    {
      fields: [
        { type: "input", label: "Clinical Impression" },
        {
          type: "subheading",
          label: "A – ANALYSIS / ASSESSMENT / ACTION"
        },

        {
          name: "tasks",
          type: "dynamic-section",
          fields: [
            {
              name: "task",
              label: "Task",
              type: "input"
            },
            {
              name: "achievement",
              label: "Achievement",
              type: "radio",
              labelAbove: true,
              options: [
                { label: "Excellent", value: "excellent" },
                { label: "Good", value: "good" },
                { label: "Fair", value: "fair" },
                { label: "Poor", value: "poor" }
              ]
            },
            {
              name: "comment",
              label: "Comment / Remark",
              type: "input"
            },

          ]
        },
      ]
    }
  ]
};

  const DIET_PLAN_SCHEMA = {
    actions: DIET_ACTIONS,
    sections: [
        {
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
            { name: "plan", label: "Plan", type: "input" },
            { name: "comment", label: "Comment", type: "input" },
        ]
        }
    ]
    };

  const schemaMap = {
    subjective: DIET_SUBJECTIVE_SCHEMA,
    objective: DIET_OBJECTIVE_SCHEMA,
    assessment: DIET_ASSESSMENT_SCHEMA,
    plan: DIET_PLAN_SCHEMA
  };

  // Bladder Control: from Doctor's Bladder Assessment - patient.bladder_control or latest report
  const bladderControlValue = patient.bladder_control || (() => {
    try {
      const reports = JSON.parse(localStorage.getItem(`patient_${patient.id}_reports`) || "[]");
      const withBladder = [...reports].reverse().find(r => r.summary?.bladder?.urinaryProblem);
      return withBladder?.summary?.bladder?.urinaryProblem || "";
    } catch { return ""; }
  })() || form.pu || "";

  // Bowel Control: from Doctor's Bowel Assessment - patient.bowel_control or latest report (control: Yes→CONTINENT, No→INCONTINENT)
  const bowelControlValue = patient.bowel_control || (() => {
    try {
      const reports = JSON.parse(localStorage.getItem(`patient_${patient.id}_reports`) || "[]");
      const withBowel = [...reports].reverse().find(r => r.summary?.bowel?.control);
      const c = withBowel?.summary?.bowel?.control;
      return c === "Yes" ? "CONTINENT" : c === "No" ? "INCONTINENT" : "";
    } catch { return ""; }
  })() || form.bo || "";

  const dietValues = {
    ...form,
    pmh_from_registration: patient.medical_history || "No data",
    family_social_from_registration: patient.diagnosis_history || "No data",
    allergic_history: patient.nkfa || "-",  // NKFA (Allergies) from Customer Service
    bo: bowelControlValue,  // From Doctor Bowel Assessment (read-only)
    pu: bladderControlValue,  // From Doctor Bladder Assessment (read-only)
    weight: patient.weight || "-",
    height: patient.height || "-",
    bmi,
    weight_record_date: weightRecordDate,
    medications: patient.medications ? patient.medications.join(", ") : "Dolo 650, Aspirin",
    iddsi_level: patient.iddsi_level || form.iddsi_level || "",
      bp: vitals.bp,
      pulse: vitals.pulse,
      rr: vitals.rr,
      temp: vitals.temp,
      spo2: vitals.spo2,
      rbs: vitals.rbs,
      pain: vitals.pain
  };

  const dietOnChange = (name, value) => {
    const readonly = ["weight", "height", "bmi", "weight_record_date", "pmh_from_registration", "family_social_from_registration", "allergic_history", "bo", "pu", "medications", "iddsi_level", "bp", "pulse", "rr", "temp", "spo2", "rbs", "pain"];
    if (readonly.includes(name)) return;
    setField(name, value);
  };
const tabOrder = ["subjective", "objective", "assessment", "plan"];
const activeTabIdx = tabOrder.indexOf(activeTab);

  const diagnosisComputedValues = (problems) => {
    var data = {}
    problems.forEach((item, index) => {
      const problemKey = item.problem?.toLowerCase().replaceAll(' ', '_');
      const etiologyOptions = ET_OPTIONS[problemKey] || [];
      const selectedEtiologyValues = Array.isArray(item.etiology) ? item.etiology : [];
      const selectedEtiologyLabels = etiologyOptions
        .filter((opt) => selectedEtiologyValues.includes(opt.value))
        .map((opt) => opt.label);
      data[`diagnosis_signs_${index}`] = item.signs
      data[`diagnosis_problem_${index}`] = item.problem
      data[`diagnosis_etiology_${index}`] = selectedEtiologyValues
      data[`nutrition_diagnosis_${index}`] =
        item.problem && selectedEtiologyLabels.length > 0 && item.signs
          ? `${item.problem} related to ${selectedEtiologyLabels.join(", ")} as evidenced by ${item.signs}`
          : ""
    })
    return data
    
  }                 



return (
  <div style={dietOuterWrap}>
    <div style={dietFormBox}>

      {/* PATIENT INFO */}
      
        <PatientCard
          patient={patient}
          
        />

        

      {/* TABS */}
      <div style={dietTabBar}>
        {["subjective", "objective", "assessment", "plan"].map(tab => (
          <div
            key={tab}
            style={activeTab === tab ? dietTabActive : dietTabBtn}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </div>
        ))}
      </div>

      {/* FORM CONTENT */}
      <CommonFormBuilder
        schema={schemaMap[activeTab]}
        values={dietValues}
        onChange={dietOnChange}
        onAction={handleAction}

      />
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
  </div>
);
}

/* --------------------------------- STYLES --------------------------------- */

const styles = {
  input: {
    width: "100%",
    padding: "7px 12px",
    borderRadius: 6,
    border: "1px solid #ccc",
  },
  readonlyInput: {
    width: "100%",
    padding: "7px 12px",
    borderRadius: 6,
    border: "1px solid #ccc",
    background: "#eee",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "7px 12px",
    borderRadius: 6,
    border: "1px solid #ccc",
  },
  select:{
    marginBottom:"5px",
  }
};

const th = { padding: 10, textAlign: "left", fontWeight: 600 };
const td = { padding: 10, verticalAlign: "top" };

const btnBack = {
  padding: "8px 16px",
  background: "#5640d3",
  color: "white",
  borderRadius: 6,
  border: "none",
  cursor: "pointer",
};

const btnSave = {
  padding: "12px 28px",
  background: "#444",
  color: "white",
  borderRadius: 6,
  border: "none",
  cursor: "pointer",
  fontSize: 16,
};

const btnSubmit = {
  padding: "12px 28px",
  background: "#0050ff",
  color: "white",
  borderRadius: 6,
  border: "none",
  cursor: "pointer",
  fontSize: 16,
};

const btnOrange = {
  padding: "10px 22px",
  background: "#ff7a00",
  color: "white",
  borderRadius: 6,
  cursor: "pointer",
  marginTop: 12,
  border: "none",
};

const btnBlue = {
  padding: "6px 12px",
  background: "#047bff",
  color: "white",
  borderRadius: 6,
  border: "none",
  cursor: "pointer",
};

const patientGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: 12,
};

/* Layout - full width, plain */
const dietOuterWrap = { width: "100%" };
const dietFormBox = {};
const dietSection = { marginBottom: 24 };
const dietPatientGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 12,
  fontSize: 14
};
const dietTabBar = {
  display: "flex",
  gap: 12,
  justifyContent: "center",
  borderBottom: "1px solid #ddd",
  marginBottom: 12
};
const dietTabBtn = {
  padding: "10px 22px",
  fontWeight: 600,
  cursor: "pointer",
  color: "#0f172a"
};
const dietTabActive = {
  padding: "10px 22px",
  fontWeight: 600,
  cursor: "pointer",
  borderBottom: "3px solid #2451b3",
  color: "#2451b3"
};
const dietContentBox = {};
const dietContentWrapper = { marginTop: 16 };
const dietActionRow = {
  display: "flex",
  justifyContent: "flex-end",
  gap: 8,
  marginBottom: 16
};
const dietActionBtn = {
  padding: "8px 18px",
  background: "transparent",
  border: "1px solid #999",
  cursor: "pointer",
  fontSize: 14
};

const anthroGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(197px, 1fr))",
  gap: 12,
};

const modalBoxLarge = {
  background: "#fff",
  padding: 20,
  borderRadius: 8,
  width: "70vw",
  maxHeight: "85vh",
  overflowY: "auto",
};

const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999,
};

const modalBox = {
  background: "#fff",
  padding: 20,
  borderRadius: 8,
  width: 400,
  maxHeight: "80vh",
  overflowY: "auto",
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
  marginTop: 8
};
const submitRow = {
  display: "flex",
  justifyContent: "flex-end",
  marginTop: 20
};

const submitBtn = {
  padding: "12px 32px",
  background: "#2563EB",
  color: "#fff",
  border: "none",
  borderRadius: 10,
  fontSize: 15,
  fontWeight: 700
};