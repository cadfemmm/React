import { useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const ACTIONS = [
  { type: "back", label: "Back" },
  { type: "clear", label: "Clear" },
  { type: "save", label: "Save" },
];

/* ══════════════════════════════════════════════════════════
   SCHEMAS
══════════════════════════════════════════════════════════ */

// ---------- S – Subjective ----------
const SUBJECTIVE_SCHEMA = {
  actions: ACTIONS,
  sections: [
    {
      fields: [
        { type: "subheading", label: "Pre-Session Status" },
        {
          name: "pre_session_status",
          label: "",
          type: "checkbox-group",
          options: [
            { label: "No new concerns reported", value: "no_new_concerns" },
            { label: "Ready and willing to participate", value: "ready_and_willing" },
            { label: "Reports pain/symptoms (specify)", value: "reports_pain_symptoms" },
            { label: "Reports fatigue", value: "reports_fatigue" },
            { label: "Reports dizziness", value: "reports_dizziness" },
            { label: "Reports recent fall/near fall", value: "reports_recent_fall" },
          ],
        },
        {
          name: "pre_session_pain_symptoms_specify",
          label: "Specify Pain/Symptoms",
          type: "input",
          placeholder: "Specify...",
          showIf: { field: "pre_session_status", includes: "reports_pain_symptoms" },
        },

        { type: "subheading", label: "Patient Report" },
        { name: "patient_report", label: "", type: "input", placeholder: "Free text..." },
      ],
    },
  ],
};

// ---------- O – Objective ----------
const OBJECTIVE_SCHEMA = {
  actions: ACTIONS,
  sections: [
    {
      fields: [
        { type: "subheading", label: "Group Activity" },
        {
          name: "group_activity",
          label: "Select One",
          type: "radio",
          options: [
            { label: "ADL Training", value: "adl_training" },
            { label: "IADL Simulation", value: "iadl_simulation" },
            { label: "Leisure Activity", value: "leisure_activity" },
            { label: "Creative Activity", value: "creative_activity" },
            { label: "Indoor Games", value: "indoor_games" },
            { label: "Outdoor Games", value: "outdoor_games" },
            { label: "Cognitive Activity", value: "cognitive_activity" },
            { label: "Social Skills Training", value: "social_skills_training" },
            { label: "Community Reintegration", value: "community_reintegration" },
            { label: "Health Education", value: "health_education" },
            { label: "Relaxation Activity", value: "relaxation_activity" },
            { label: "Others", value: "others" },
          ],
        },
        {
          name: "group_activity_others_specify",
          label: "Specify",
          type: "input",
          placeholder: "Specify...",
          showIf: { field: "group_activity", equals: "others" },
        },

        { type: "subheading", label: "Participation Level" },
        {
          name: "participation_level",
          label: "Select One",
          type: "radio",
          options: [
            { label: "Fully Participated", value: "fully_participated" },
            { label: "Participated with Minimal Encouragement", value: "minimal_encouragement" },
            { label: "Participated with Frequent Cueing", value: "frequent_cueing" },
            { label: "Partial Participation", value: "partial_participation" },
            { label: "Declined Participation", value: "declined_participation" },
          ],
        },

        { type: "subheading", label: "Assistance Required" },
        {
          name: "assistance_required",
          label: "Select One",
          type: "radio",
          options: [
            { label: "Independent", value: "independent" },
            { label: "Supervision", value: "supervision" },
            { label: "Minimal Assistance", value: "minimal_assistance" },
            { label: "Moderate Assistance", value: "moderate_assistance" },
            { label: "Maximum Assistance", value: "maximum_assistance" },
          ],
        },

        { type: "subheading", label: "Therapist's Observation" },
        { name: "therapist_observation", label: "", type: "input", placeholder: "Free text..." },

        { type: "subheading", label: "Performance Observed" },
        { type: "subheading", label: "Task Performance", level: 3 },
        {
          name: "performance_observed",
          label: "",
          type: "checkbox-group",
          options: [
            { label: "Initiated activity independently", value: "initiated_independently" },
            { label: "Followed instructions", value: "followed_instructions" },
            { label: "Completed activity", value: "completed_activity" },
            { label: "Required verbal cueing", value: "required_verbal_cueing" },
            { label: "Required physical assistance", value: "required_physical_assistance" },
            { label: "Required frequent prompting", value: "required_frequent_prompting" },
            { label: "Required rest breaks", value: "required_rest_breaks" },
            { label: "Others", value: "others" },
          ],
        },
        {
          name: "performance_observed_others_specify",
          label: "Specify",
          type: "input",
          placeholder: "Specify...",
          showIf: { field: "performance_observed", includes: "others" },
        },
      ],
    },
  ],
};

// ---------- A – Assessment ----------
const ASSESSMENT_SCHEMA = {
  actions: ACTIONS,
  sections: [
    {
      fields: [
        { type: "subheading", label: "Clinical Interpretation" },
        { name: "clinical_interpretation", label: "", type: "input", placeholder: "Free text..." },

        { type: "subheading", label: "Functional & Occupational Performance Observed" },
        
        { type: "subheading", label: "Occupational Performance", level: 3 },
        {
          name: "occupational_performance",
          label: "",
          type: "checkbox-group",
          options: [
            { label: "Improved ADL participation", value: "improved_adl_participation" },
            { label: "Improved IADL performance", value: "improved_iadl_performance" },
            { label: "Improved task completion", value: "improved_task_completion" },
            { label: "Improved activity tolerance", value: "improved_activity_tolerance" },
            { label: "Improved functional independence", value: "improved_functional_independence" },
          ],
        },

        { type: "subheading", label: "Cognitive & Psychosocial Performance", level: 3 },
        {
          name: "cognitive_psychosocial_performance",
          label: "",
          type: "checkbox-group",
          options: [
            { label: "Improved attention and concentration", value: "improved_attention_concentration" },
            { label: "Improved problem-solving", value: "improved_problem_solving" },
            { label: "Improved planning and organisation", value: "improved_planning_organisation" },
            { label: "Improved confidence", value: "improved_confidence" },
            { label: "Improved social interaction", value: "improved_social_interaction" },
          ],
        },

        { type: "subheading", label: "Motor & Process Skills", level: 3 },
        {
          name: "motor_process_skills",
          label: "",
          type: "checkbox-group",
          options: [
            { label: "Improved upper limb function", value: "improved_upper_limb_function" },
            { label: "Improved coordination", value: "improved_coordination" },
            { label: "Improved balance", value: "improved_balance" },
            { label: "Improved fine motor skills", value: "improved_fine_motor_skills" },
            { label: "Improved gross motor skills", value: "improved_gross_motor_skills" },
          ],
        },

        { type: "subheading", label: "Overall Progress", level: 3 },
        {
          name: "overall_progress",
          label: "",
          type: "checkbox-group",
          options: [
            { label: "Maintained current functional status", value: "maintained_functional_status" },
            { label: "Limited progress observed", value: "limited_progress" },
            { label: "Others", value: "others" },
          ],
        },
        {
          name: "overall_progress_others_specify",
          label: "Specify",
          type: "input",
          placeholder: "Specify...",
          showIf: { field: "overall_progress", includes: "others" },
        },
      ],
    },
  ],
};

// ---------- P – Plan ----------
const PLAN_SCHEMA = {
  actions: ACTIONS,
  sections: [
    {
      fields: [
        { type: "subheading", label: "Plan for Next Session" },
        {
          name: "plan_next_session",
          label: "",
          type: "checkbox-group",
          options: [
            { label: "Continue current group programme", value: "continue_programme" },
            { label: "Progress activity complexity", value: "progress_complexity" },
            { label: "Simplify activity", value: "simplify_activity" },
            { label: "Introduce new occupation-based activity", value: "introduce_occupation_activity" },
            { label: "Community reintegration activity", value: "community_reintegration_activity" },
            { label: "Others", value: "others" },
          ],
        },
        {
          name: "plan_next_session_others_specify",
          label: "Specify",
          type: "input",
          placeholder: "Specify...",
          showIf: { field: "plan_next_session", includes: "others" },
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
export default function OccupationalTherapyGroupIntervention({ patient, selectedPatients = [], onBack }) {
  const [values, setValues] = useState({});
  const [activeTab, setActiveTab] = useState("subjective");
  const [submitted, setSubmitted] = useState(false);

  // When launched from the dashboard, selectedPatients is the group list.
  // Fall back to wrapping a single patient for backward compatibility.
  const patientList = selectedPatients.length > 0 ? selectedPatients : (patient ? [patient] : []);

  const storageKey = `occupational_therapy_group_progress_draft_${patientList.map(p => p.id).join("_") || "draft"}`;

  const handleAction = (type) => {
    if (type === "back") onBack?.();
    if (type === "clear") {
      setValues({});
      setSubmitted(false);
      localStorage.removeItem(storageKey);
    }
    if (type === "save") {
      localStorage.setItem(storageKey, JSON.stringify({ values, updatedAt: new Date() }));
      alert("Occupational Therapy Group Intervention Progress Note draft saved.");
    }
  };

  const onChange = (name, value) => setValues((prev) => ({ ...prev, [name]: value }));

  return (
    <div>
      {/* Selected participants banner — same pattern as other group notes */}
      {patientList.length > 0 && (
        <div
          style={{
            marginBottom: 20,
            padding: "14px 18px",
            borderRadius: 12,
            background: "#fef2f2",
            border: "1px solid #fecaca",
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 700, color: "#991b1b", marginBottom: 8 }}>
            Selected participants ({patientList.length})
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {patientList.map((p) => (
              <span
                key={p.id ?? p.patient_id ?? p.mrn}
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  padding: "4px 10px",
                  borderRadius: 999,
                  background: "#fff",
                  color: "#7f1d1d",
                  border: "1px solid #fecaca",
                  textTransform: "uppercase",
                }}
              >
                {p.name || p.patient_name || p.mrn || "Patient"}
              </span>
            ))}
          </div>
        </div>
      )}

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