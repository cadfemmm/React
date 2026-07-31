import { useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import PatientCard from "../../../shared/cards/PatientCard";

/* ── Assessment launchers ── */
import FIMAssessment   from "./Fim";
import IADLAssessment  from "./IADL";
import ROMForm         from "./RomForm";
import MMTForm         from "./MMTForm";
import GripStrengthForm, { GripOnlyForm, PinchOnlyForm } from "../../PT/components/GripStrengthForm";
import StrengthTestForm    from "../../PT/components/StrengthTestForm";
import CoordinationTest from "../../PT/components/Coordinationtests"; 
import SixMWTForm      from "../../PT/components/SixMWTForm";
/* ══════════════════════════════════════════════════════════
   SELF-CONTAINED ADL ASSESSMENT (Activities of Daily Living)
   Mirrors the ADL tab from the Doctor's Functional form.
══════════════════════════════════════════════════════════ */
const DEPENDENCE_OPTIONS = [
  { label: "Independent",         value: 0 },
  { label: "Minimal dependence",  value: 1 },
  { label: "Moderate dependence", value: 2 },
  { label: "Maximum dependence",  value: 3 },
  { label: "Total dependence",    value: 4 },
];

const ADL_SCHEMA = {
  title: "Activities of Daily Living",
  fields: [
    { name: "adl_washing",           label: "Washing oneself",            type: "radio-matrix", options: DEPENDENCE_OPTIONS },
    { name: "adl_body_care",         label: "Caring for body parts",      type: "radio-matrix", options: DEPENDENCE_OPTIONS },
    { name: "adl_toileting",         label: "Toileting",                  type: "radio-matrix", options: DEPENDENCE_OPTIONS },
    { name: "adl_dressing",          label: "Dressing",                   type: "radio-matrix", options: DEPENDENCE_OPTIONS },
    { name: "adl_eating",            label: "Eating",                     type: "radio-matrix", options: DEPENDENCE_OPTIONS },
    { name: "adl_drinking",          label: "Drinking",                   type: "radio-matrix", options: DEPENDENCE_OPTIONS },
    { name: "adl_health_mgmt",       label: "Looking after one's health", type: "radio-matrix", options: DEPENDENCE_OPTIONS },
    { name: "adl_other_selfcare",    label: "Other self-care activities", type: "radio-matrix", options: DEPENDENCE_OPTIONS },
    { name: "adl_overall_selfcare",  label: "Overall self-care",          type: "radio-matrix", options: DEPENDENCE_OPTIONS },
    { name: "adl_remarks",           label: "Remarks",                    type: "textarea"      },
    {
      type: "radio",
      name: "adl_recent_fall_history",
      label: "Any recent history of fall",
      options: [
        { label: "Yes", value: "Yes" },
        { label: "No",  value: "No"  },
      ],
    },
    {
      type: "dynamic-section",
      name: "adl_fall_history_entries",
      showIf: { field: "adl_recent_fall_history", equals: "Yes" },
      fields: [{ type: "input", name: "specify", label: "Specify" }],
    },
    {
      type: "radio",
      name: "adl_fall_complication",
      label: "Complication of the fall",
      options: [
        { label: "Yes", value: "Yes" },
        { label: "No",  value: "No"  },
      ],
    },
    {
      type: "textarea",
      name: "adl_fall_complication_details",
      label: "Complication details",
      showIf: { field: "adl_fall_complication", equals: "Yes" },
    },
  ],
};

function ADLAssessment({ patient, onBack }) {
  const [values, setValues] = useState({});
  const storageKey = patient ? `ot_cardioresp_adl_draft_${patient.id}` : null;

  return (
    <CommonFormBuilder
      schema={ADL_SCHEMA}
      values={values}
      onChange={(name, value) => setValues(prev => ({ ...prev, [name]: value }))}
    />
  );
}

const CARDIORESP_ASSESSMENT_REGISTRY = {
  fim:           FIMAssessment,
  iadl:          IADLAssessment,
  adl_doc:       ADLAssessment,
  rom:           ROMForm,
  mmt:           MMTForm,
  grip_strength: GripStrengthForm,
  strength:      StrengthTestForm,
  coordination:  CoordinationTest,
  six_mwt:       SixMWTForm,
};

const ACTIONS = [
  { type: "back", label: "Back" },
  { type: "clear", label: "Clear" },
  { type: "save", label: "Save" },
];

/* ══════════════════════════════════════════════════════════
   SCHEMAS
══════════════════════════════════════════════════════════ */

// ---------- 2. Subjective Assessment (S) ----------
const SUBJECTIVE_SCHEMA = {
  actions: ACTIONS,
  sections: [
    {
      fields: [
        { type: "subheading", label: "Presenting Complaint" },
        {
          name: "presenting_complaint",
          label: "",
          type: "checkbox-group",
          options: [
            { label: "Shortness of Breath", value: "shortness_of_breath" },
            { label: "Fatigue", value: "fatigue" },
            { label: "Reduced Endurance", value: "reduced_endurance" },
            { label: "Difficulty in ADL", value: "difficulty_adl" },
            { label: "Chest Discomfort", value: "chest_discomfort" },
            { label: "Reduced Work Performance", value: "reduced_work_performance" },
            { label: "Others", value: "others" },
          ],
        },
        {
          name: "presenting_complaint_others",
          label: "Specify Others",
          type: "input",
          placeholder: "Specify...",
          showIf: { field: "presenting_complaint", includes: "others" },
        },

        { type: "subheading", label: "History" },
        { name: "history", label: "", type: "input", placeholder: "Free text..." },

        { type: "subheading", label: "Patient Goal" },
        { name: "patient_goal", label: "", type: "input", placeholder: "Free text..." },
      ],
    },
  ],
};

// ---------- 3. Occupational Performance Assessment (O) ----------
const OBJECTIVE_SCHEMA = {
  actions: ACTIONS,
  sections: [
    {
      fields: [
        /* Functional Capacity */
        { type: "subheading", label: "Functional Capacity" },
        {
          name: "functional_capacity_launchers",
          type: "assessment-launcher",
          options: [
            { label: "6MWT", value: "six_mwt"  },
            { label:"MMT", value: "mmt" },
          ],
        },
        {
          name: "activity_tolerance",
          label: "Activity Tolerance",
          type: "radio",
          options: [
            { label: "Good", value: "good" },
            { label: "Fair", value: "fair" },
            { label: "Poor", value: "poor" },
          ],
        },

        /* ADL & IADL — Standardized Outcome Measures */
        {
          type: "subheading",
          label: "Activities of Daily Living (ADL) & Instrumental Activities of Daily Living (IADL)",
        },
        {
          name: "adl_iadl_launchers",
          type: "assessment-launcher",
          options: [
            { label: "Functional Independence Measure (FIM)", value: "fim"     },
            { label: "Lawton IADL",                           value: "iadl"    },
            { label: "ADL",             value: "adl_doc" },
          ],
        },

        /* Upper Limb Function */
        { type: "subheading", label: "Upper Limb Function" },
        {
          name: "ul_function_launchers",
          type: "assessment-launcher",
          options: [
            { label: "Range of Motion (ROM)",      value: "rom"      },
            { label: "Strength",             value: "strength"      },
            { label: "Grip Strength",       value: "grip_strength"     },
            { label: "Coordination", value: "coordination" },
          ],
        },
        {
          name: "assistive_device",
          label: "Assistive Device",
          type: "radio",
          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" },
          ],
        },
        {
          name: "assistive_device_specify",
          label: "Specify",
          type: "input",
          placeholder: "Specify...",
          showIf: { field: "assistive_device", equals: "yes" },
        },

        /* Work & Social Participation */
        { type: "subheading", label: "Work & Social Participation" },
        { type: "subheading", label: "Current Work Status" },
        {
          type: "row",
          cols: 2,
          fields: [
            { name: "job_title", label: "Job Title", type: "input", placeholder: "e.g. Accountant" },
            { name: "nature_of_job", label: "Nature of Job", type: "input", placeholder: "Free text..." },
          ],
        },
        { name: "working_hours", label: "Working Hours", type: "input", placeholder: "e.g. 9am – 5pm" },
        { type: "subheading", label: "Physical Demand" },
        {
          name: "physical_demand",
          label: "",
          type: "checkbox-group",
          options: [
            { label: "Sitting", value: "sitting" },
            { label: "Standing", value: "standing" },
            { label: "Walking", value: "walking" },
            { label: "Lifting", value: "lifting" },
            { label: "Carrying", value: "carrying" },
            { label: "Manual Handling", value: "manual_handling" },
            { label: "Driving", value: "driving" },
            { label: "Others", value: "others" },
          ],
        },
        {
          name: "physical_demand_others",
          label: "Specify Others",
          type: "input",
          placeholder: "Specify...",
          showIf: { field: "physical_demand", includes: "others" },
        },
        {
          name: "return_to_work",
          label: "Return To Work",
          type: "radio",
          options: [
            { label: "Ready", value: "ready" },
            { label: "Partially Ready", value: "partially_ready" },
            { label: "Not Ready", value: "not_ready" },
          ],
        },
        {
          name: "driving",
          label: "Driving",
          type: "radio",
          options: [
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ],
        },

        /* Home Environment */
        { type: "subheading", label: "Home Environment" },
        {
          type: "row",
          cols: 2,
          fields: [
            {
              name: "lives_with",
              label: "Lives With",
              type: "single-select",
              options: [
                { label: "Alone", value: "alone" },
                { label: "Spouse", value: "spouse" },
                { label: "Children", value: "children" },
                { label: "Family", value: "family" },
                { label: "Caregiver", value: "caregiver" },
              ],
            },
            {
              name: "home_type",
              label: "Home Type",
              type: "single-select",
              options: [
                { label: "Single Storey", value: "single_storey" },
                { label: "Double Storey", value: "double_storey" },
                { label: "Apartment", value: "apartment" },
                { label: "Flat", value: "flat" },
                { label: "Others", value: "others" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// ---------- 4. Assessment (A) ----------
const ASSESSMENT_SCHEMA = {
  actions: ACTIONS,
  sections: [
    {
      fields: [
        { type: "subheading", label: "OT Problem List" },
        {
          name: "ot_problem_list",
          label: "",
          type: "checkbox-group",
          options: [
            { label: "Reduced Endurance", value: "reduced_endurance" },
            { label: "Reduced Activity Tolerance", value: "reduced_activity_tolerance" },
            { label: "Reduced ADL Independence", value: "reduced_adl_independence" },
            { label: "Reduced Mobility", value: "reduced_mobility" },
            { label: "Pain", value: "pain" },
            { label: "Reduced Work Capacity", value: "reduced_work_capacity" },
            { label: "Balance Impairment", value: "balance_impairment" },
            { label: "Others", value: "others" },
          ],
        },
        {
          name: "ot_problem_list_others",
          label: "Specify Others",
          type: "input",
          placeholder: "Specify...",
          showIf: { field: "ot_problem_list", includes: "others" },
        },
      ],
    },
  ],
};

// ---------- 5. Plan (P) ----------
const PLAN_SCHEMA = {
  actions: ACTIONS,
  sections: [
    {
      fields: [
        { type: "subheading", label: "Goals" },
        { name: "short_term_goals", label: "Short-Term Goals", type: "input", placeholder: "Free text..." },
        { name: "long_term_goals", label: "Long-Term Goals", type: "input", placeholder: "Free text..." },

        { type: "subheading", label: "Intervention Plan" },
        {
          name: "intervention_plan",
          label: "",
          type: "checkbox-group",
          options: [
            { label: "ADL Retraining", value: "adl_retraining" },
            { label: "Functional Mobility", value: "functional_mobility" },
            { label: "Endurance Training", value: "endurance_training" },
            { label: "Strengthening", value: "strengthening" },
            { label: "Upper Limb Exercise", value: "upper_limb_exercise" },
            { label: "Breathing Exercise", value: "breathing_exercise" },
            { label: "Energy Conservation", value: "energy_conservation" },
            { label: "Activity Pacing", value: "activity_pacing" },
            { label: "Work Conditioning", value: "work_conditioning" },
            { label: "Cognitive Strategy", value: "cognitive_strategy" },
            { label: "RTW Programme", value: "rtw_programme" },
            { label: "Patient Education", value: "patient_education" },
            { label: "Caregiver Education", value: "caregiver_education" },
            { label: "Home Programme", value: "home_programme" },
            { label: "Others", value: "others" },
          ],
        },
        {
          name: "intervention_plan_others",
          label: "Specify Others",
          type: "input",
          placeholder: "Specify...",
          showIf: { field: "intervention_plan", includes: "others" },
        },
      ],
    },
  ],
};

const SOAP_TABS = [
  { key: "subjective", label: "Subjective" },
  { key: "objective", label: "Objective" },
  { key: "assessment", label: "Assessment" },
  { key: "plan", label: "Plan" },
];

const SCHEMA_MAP = {
  subjective: SUBJECTIVE_SCHEMA,
  objective: OBJECTIVE_SCHEMA,
  assessment: ASSESSMENT_SCHEMA,
  plan: PLAN_SCHEMA,
};

/* ══════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════ */
export default function OTInitialAssessmentCardioResp({ patient, onBack }) {
  const [values, setValues] = useState({});
  const [activeTab, setActiveTab] = useState("subjective");
  const [submitted, setSubmitted] = useState(false);

  const storageKey = patient ? `ot_cardioresp_initial_draft_${patient.id}` : null;

  const handleAction = (type) => {
    if (type === "back") onBack?.();
    if (type === "clear") {
      setValues({});
      setSubmitted(false);
      localStorage.removeItem(storageKey);
    }
    if (type === "save") {
      localStorage.setItem(storageKey, JSON.stringify({ values, updatedAt: new Date() }));
      alert("OT Initial Assessment (Cardiorespiratory) draft saved.");
    }
  };

  const onChange = (name, value) => setValues((prev) => ({ ...prev, [name]: value }));

  return (
    <div>
      {/* 1. Patient Information (auto-populated) */}
      <PatientCard patient={patient} />

      {/* SOAP Tabs (2. Subjective, 3. Objective, 4. Assessment, 5. Plan) */}
      <div style={tabBar}>
        {SOAP_TABS.map((tab) => (
          <div
            key={tab.key}
            style={activeTab === tab.key ? tabActive : tabBtn}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Tab content */}
      <CommonFormBuilder
        schema={SCHEMA_MAP[activeTab]}
        values={values}
        onChange={onChange}
        onAction={handleAction}
        assessmentRegistry={CARDIORESP_ASSESSMENT_REGISTRY}
      />
    </div>
  );
}

/* ── Styles ── */
const tabBar = {
  display: "flex",
  gap: 12,
  justifyContent: "center",
  borderBottom: "1px solid #ddd",
  marginBottom: 12,
};
const tabBtn = {
  padding: "10px 22px",
  fontWeight: 600,
  cursor: "pointer",
  color: "#0f172a",
};
const tabActive = {
  ...tabBtn,
  borderBottom: "3px solid #2451b3",
  color: "#2451b3",
};