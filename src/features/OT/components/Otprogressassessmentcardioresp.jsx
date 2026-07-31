import { useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import PatientCard from "../../../shared/cards/PatientCard";

/* ── Assessment launchers ── */


const DEPENDENCE_OPTIONS = [
  { label: "Independent", value: 0 },
  { label: "Minimal dependence", value: 1 },
  { label: "Moderate dependence", value: 2 },
  { label: "Maximum dependence", value: 3 },
  { label: "Total dependence", value: 4 },
];



const ACTIONS = [
  { type: "back", label: "Back" },
  { type: "clear", label: "Clear" },
  { type: "save", label: "Save" },
];

/* ══════════════════════════════════════════════════════════
   S - SUBJECTIVE SCHEMA
══════════════════════════════════════════════════════════ */
const SUBJECTIVE_SCHEMA = {
  actions: ACTIONS,
  sections: [
    {
      fields: [
        { type: "subheading", label: "Patient Report / Symptoms" },
        {
          name: "patient_subjective_status",
          label: "Patient's subjective status today",
          type: "input",
          placeholder: "Enter patient's subjective report...",
        },
        {
          name: "symptom_check",
          label: "Symptom Check (Select all that apply)",
          type: "checkbox-group",
          options: [
            { label: "No symptoms", value: "no_symptoms" },
            { label: "Dyspnoea", value: "dyspnoea" },
            { label: "Fatigue", value: "fatigue" },
            { label: "Chest pain", value: "chest_pain" },
            { label: "Dizziness", value: "dizziness" },
            { label: "Others", value: "others" },
          ],
        },
        {
          name: "symptom_check_others",
          label: "Specify Others",
          type: "input",
          placeholder: "Specify...",
          showIf: { field: "symptom_check", includes: "others" },
        },
        {
          type: "row",
          cols: 2,
          fields: [
            {
              name: "perceived_exertion_mets",
              label: "Perceived Exertion (Estimated METs)",
              type: "input",
              placeholder: "Enter METs value",
            },
            {
              name: "borg_rpe_pre",
              label: "Borg RPE (Pre-session)",
              type: "input",
              placeholder: "__ / 10 ",
            },
          ],
        },
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════════
   O - OBJECTIVE SCHEMA
══════════════════════════════════════════════════════════ */
const OBJECTIVE_SCHEMA = {
  actions: ACTIONS,
  sections: [
    {
      fields: [
                { type: "subheading", label: "1. Pre-session Cardiovascular Status" },
        { type: "subheading", label: "Resting Vital Signs" },
        {
          type: "row",
          cols: 3,
          fields: [
            {
              name: "resting_hr",
              label: "HR",
              type: "input",
              placeholder: "___ bpm",
            },
            {
              name: "resting_bp",
              label: "BP",
              type: "input",
              placeholder: "___ / ___ mmHg",
            },
            {
              name: "resting_spo2",
              label: "SpO2",
              type: "input",
              placeholder: "___ %",
            },
          ],
        },
        { type: "subheading", label: "Intervention Provided - Activity Type" },
        {
          name: "intervention_provided",
          label: "",
          type: "checkbox-group",
          options: [
            { label: "ADL Retraining", value: "adl_retraining" },
            { label: "ADL Simulation", value: "adl_simulation" },
            { label: "Upper Limb Exercise", value: "upper_limb_exercise" },
            { label: "Breathing Exercise", value: "breathing_exercise" },
            { label: "Endurance Training", value: "endurance_training" },
            { label: "Functional Mobility", value: "functional_mobility" },
            { label: "Energy Conservation Training", value: "energy_conservation" },
            { label: "Activity Pacing", value: "activity_pacing" },
            { label: "Work Simulation", value: "work_simulation" },
            { label: "Work Conditioning", value: "work_conditioning" },
            { label: "Patient Education", value: "patient_education" },
            { label: "Cognitive Strategy", value: "cognitive_strategy" },
            { label: "Others", value: "others" },
          ],
        },
        {
          name: "intervention_provided_others",
          label: "Specify Others",
          type: "input",
          placeholder: "Specify...",
          showIf: { field: "intervention_provided", includes: "others" },
        },
        {
          type: "row",
          cols: 2,
          fields: [
            {
              name: "intensity_level",
              label: "Intensity Level",
              type: "select",
              options: [
                { label: "Low", value: "low" },
                { label: "Moderate", value: "moderate" },
                { label: "High", value: "high" },
              ],
            },
            {
              name: "session_duration",
              label: "Duration (minutes)",
              type: "input",
              placeholder: "Enter minutes",
            },
          ],
        },
        { type: "subheading", label: "2. During Session Response" },
        {
          name: "borg_rpe_during",
          label: "Borg RPE (During Activity)",
          type: "input",
              placeholder: "__ / 10 ",
        },
        {
          name: "symptoms_during",
          label: "Symptoms During Activity",
          type: "checkbox-group",
          options: [
            { label: "None", value: "none" },
            { label: "Dyspnoea", value: "dyspnoea" },
            { label: "Fatigue", value: "fatigue" },
            { label: "Chest Pain", value: "chest_pain" },
            { label: "Dizziness", value: "dizziness" },
            { label: "Others", value: "others" },
          ],
        },
        {
          name: "symptoms_during_others",
          label: "Specify Others",
          type: "input",
          placeholder: "Specify...",
          showIf: { field: "symptoms_during", includes: "others" },
        },
        {
          name: "activity_tolerance",
          label: "Activity Tolerance",
          type: "select",
          options: [
            { label: "Good", value: "good" },
            { label: "Fair", value: "fair" },
            { label: "Poor", value: "poor" },
          ],
        },
        { type: "subheading", label: "3. Post-session Status" },
        { type: "subheading", label: "Recovery Response" },
        {
          name: "borg_rpe_post",
          label: "Borg RPE (Post Activity)",
          type: "input",
              placeholder: "__ / 10 ",
        },
        {
          type: "row",
          cols: 2,
          fields: [
            {
              name: "recovery_time",
              label: "Recovery Time (minutes)",
              type: "input",
              placeholder: "Enter minutes",
            },
            {
              name: "symptoms_after",
              label: "Symptoms After Activity",
              type: "select",
              options: [
                { label: "None", value: "none" },
                { label: "Mild", value: "mild" },
                { label: "Moderate", value: "moderate" },
                { label: "Severe", value: "severe" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════════
   A - ASSESSMENT SCHEMA
══════════════════════════════════════════════════════════ */
const ASSESSMENT_SCHEMA = {
  actions: ACTIONS,
  sections: [
    {
      fields: [
        { type: "subheading", label: "Functional Progress Today" },
        {
          name: "adl_performance",
          label: "ADL Performance",
          type: "select",
          options: [
            { label: "Improved", value: "improved" },
            { label: "Maintained", value: "maintained" },
            { label: "Declined", value: "declined" },
          ],
        },
        {
          name: "activity_tolerance_assessment",
          label: "Activity Tolerance",
          type: "select",
          options: [
            { label: "Improved", value: "improved" },
            { label: "Maintained", value: "maintained" },
            { label: "Limited", value: "limited" },
          ],
        },
        {
          name: "work_capacity",
          label: "Work-related Capacity (if applicable)",
          type: "select",
          options: [
            { label: "Improving", value: "improving" },
            { label: "Maintained", value: "maintained" },
            { label: "Not assessed", value: "not_assessed" },
            { label: "Not applicable", value: "not_applicable" },
          ],
        },
        {
          name: "clinical_interpretation",
          label: "Clinical Assessment / Interpretation",
          type: "textarea",
          placeholder: "Enter clinical interpretation...",
        },
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════════
   P - PLAN SCHEMA
══════════════════════════════════════════════════════════ */
const PLAN_SCHEMA = {
  actions: ACTIONS,
  sections: [
    {
      fields: [
        { type: "subheading", label: "Plan for Next Session" },
        {
          name: "next_session_plan",
          label: "",
          type: "select",
          options: [
            { label: "Continue current programme", value: "continue" },
            { label: "Progress intensity", value: "progress_intensity" },
            { label: "Modify intervention", value: "modify" },
            { label: "Discharge planning", value: "discharge" },
            { label: "review_functional_goals", value: "review_functional_goals" },
          ],
        },
        {
          name: "focus_area",
          label: "Focus Area",
          type: "checkbox-group",
          options: [
            { label: "ADL", value: "adl" },
            { label: "Endurance", value: "endurance" },
            { label: "Work Simulation", value: "work_simulation" },
            { label: "Education", value: "education" },
            { label: "Energy Conservation", value: "energy_conservation" },
            { label: "Others", value: "others" },
          ],
        },
        {
          name: "focus_area_others",
          label: "Specify Others",
          type: "input",
          placeholder: "Specify...",
          showIf: { field: "focus_area", includes: "others" },
        },
        {
          name: "next_session_remarks",
          label: "Next Session Plan / Remarks",
          type: "textarea",
          placeholder: "Enter remarks...",
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
export default function OTProgressInterventionNoteCardioResp({ patient, onBack }) {
  const [values, setValues] = useState({});
  const [activeTab, setActiveTab] = useState("subjective");
  const [submitted, setSubmitted] = useState(false);

  const storageKey = patient ? `ot_cardioresp_progress_draft_${patient.id}` : null;

  const handleAction = (type) => {
    if (type === "back") onBack?.();
    if (type === "clear") {
      setValues({});
      setSubmitted(false);
      localStorage.removeItem(storageKey);
    }
    if (type === "save") {
      localStorage.setItem(storageKey, JSON.stringify({ values, updatedAt: new Date() }));
      alert("OT Progress Intervention Note (Cardiorespiratory) draft saved.");
    }
  };

  const onChange = (name, value) => setValues((prev) => ({ ...prev, [name]: value }));

  return (
    <div>
      {/* Patient Information */}
      <PatientCard patient={patient} />

      {/* SOAP Tabs */}
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
  flexWrap: "wrap",
};

const tabBtn = {
  padding: "10px 22px",
  fontWeight: 600,
  cursor: "pointer",
  color: "#0f172a",
  borderBottom: "3px solid transparent",
  transition: "all 0.2s ease",
};

const tabActive = {
  ...tabBtn,
  borderBottom: "3px solid #2451b3",
  color: "#2451b3",
};