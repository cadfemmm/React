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
            { label: "No New Concerns Reported", value: "no_new_concerns" },
            { label: "Ready and Willing to Participate", value: "ready_and_willing" },
            { label: "Reports Pain/Symptoms (Specify)", value: "reports_pain_symptoms" },
            { label: "Reports Fatigue", value: "reports_fatigue" },
            { label: "Reports Fear or Anxiety Regarding Activity", value: "reports_fear_anxiety" },
            { label: "Other Concerns (Specify)", value: "other_concerns" },
          ],
        },
        {
          name: "pre_session_pain_symptoms_specify",
          label: "Specify Pain/Symptoms",
          type: "input",
          placeholder: "Specify...",
          showIf: { field: "pre_session_status", includes: "reports_pain_symptoms" },
        },
        {
          name: "pre_session_other_concerns_specify",
          label: "Specify Other Concerns",
          type: "input",
          placeholder: "Specify...",
          showIf: { field: "pre_session_status", includes: "other_concerns" },
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
        { type: "subheading", label: "Group Activity – Advance Fitness and Functional Rehabilitation" },
        {
          name: "group_activity",
          label: "Select One",
          type: "radio",
          options: [
            { label: "Wall Climbing", value: "wall_climbing" },
            { label: "All-Terrain Vehicle (ATV)", value: "atv" },
            { label: "Sports Activities", value: "sports_activities" },
            { label: "Recreational Activities", value: "recreational_activities" },
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
        {
          name: "performance_observed",
          label: "",
          type: "checkbox-group",
          options: [
            { label: "Initiated Activity Independently", value: "initiated_independently" },
            { label: "Followed Instructions", value: "followed_instructions" },
            { label: "Demonstrated Appropriate Safety Awareness", value: "safety_awareness" },
            { label: "Demonstrated Good Coordination", value: "good_coordination" },
            { label: "Maintained Balance Throughout Activity", value: "maintained_balance" },
            { label: "Completed Assigned Activity", value: "completed_activity" },
            { label: "Demonstrated Appropriate Endurance", value: "appropriate_endurance" },
            { label: "Demonstrated Problem-Solving During Task", value: "problem_solving" },
            { label: "Interacted Appropriately with Group Members", value: "interacted_appropriately" },
            { label: "Required Verbal Cueing", value: "required_verbal_cueing" },
            { label: "Required Physical Assistance", value: "required_physical_assistance" },
            { label: "Required Frequent Prompting", value: "required_frequent_prompting" },
            { label: "Required Rest Breaks", value: "required_rest_breaks" },
            { label: "Activity Limited by Pain", value: "limited_by_pain" },
            { label: "Activity Limited by Fatigue", value: "limited_by_fatigue" },
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

        { type: "subheading", label: "Clinical Response to Intervention" },
        {
          name: "clinical_response",
          label: "",
          type: "checkbox-group",
          options: [
            { label: "Improved Participation", value: "improved_participation" },
            { label: "Improved Confidence", value: "improved_confidence" },
            { label: "Improved Balance", value: "improved_balance" },
            { label: "Improved Coordination", value: "improved_coordination" },
            { label: "Improved Strength", value: "improved_strength" },
            { label: "Improved Endurance", value: "improved_endurance" },
            { label: "Improved Mobility", value: "improved_mobility" },
            { label: "Improved Functional Performance", value: "improved_functional_performance" },
            { label: "Improved Activity Tolerance", value: "improved_activity_tolerance" },
            { label: "Improved Motor Planning", value: "improved_motor_planning" },
            { label: "Improved Social Interaction", value: "improved_social_interaction" },
            { label: "Demonstrated Safe Participation", value: "safe_participation" },
            { label: "Maintained Current Functional Status", value: "maintained_functional_status" },
            { label: "Limited Progress Observed", value: "limited_progress" },
            { label: "Others", value: "others" },
          ],
        },
        {
          name: "clinical_response_others_specify",
          label: "Specify",
          type: "input",
          placeholder: "Specify...",
          showIf: { field: "clinical_response", includes: "others" },
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
            { label: "Continue Current Rehabilitation Programme", value: "continue_current_programme" },
            { label: "Progress Activity Difficulty", value: "progress_activity_difficulty" },
            { label: "Increase Activity Duration", value: "increase_activity_duration" },
            { label: "Increase Task Complexity", value: "increase_task_complexity" },
            { label: "Focus on Balance and Coordination", value: "focus_balance_coordination" },
            { label: "Focus on Strength and Endurance", value: "focus_strength_endurance" },
            { label: "Reinforce Safety Strategies", value: "reinforce_safety_strategies" },
            { label: "Encourage Greater Participation", value: "encourage_greater_participation" },
            { label: "Continue Graded Functional Activities", value: "continue_graded_activities" },
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
export default function IntegratedRehabGroupInterventionProgressNote({ patient, selectedPatients = [], onBack }) {
  const [values, setValues] = useState({});
  const [activeTab, setActiveTab] = useState("subjective");
  const [submitted, setSubmitted] = useState(false);

  // When launched from the dashboard, selectedPatients is the group list.
  // Fall back to wrapping a single patient for backward compatibility.
  const patientList = selectedPatients.length > 0 ? selectedPatients : (patient ? [patient] : []);

  const storageKey = `integrated_rehab_group_progress_draft_${patientList.map(p => p.id).join("_") || "draft"}`;

  const handleAction = (type) => {
    if (type === "back") onBack?.();
    if (type === "clear") {
      setValues({});
      setSubmitted(false);
      localStorage.removeItem(storageKey);
    }
    if (type === "save") {
      localStorage.setItem(storageKey, JSON.stringify({ values, updatedAt: new Date() }));
      alert("Integrated Rehabilitation Group Intervention Progress Note draft saved.");
    }
  };

  const onChange = (name, value) => setValues((prev) => ({ ...prev, [name]: value }));

  return (
    <div>
      {/* Selected participants banner — same pattern as Nursing */}
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