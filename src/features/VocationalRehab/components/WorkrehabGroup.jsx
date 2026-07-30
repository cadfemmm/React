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
            { label: "Reports pain / discomfort (specify)", value: "reports_pain_discomfort" },
            { label: "Reports fatigue", value: "reports_fatigue" },
            { label: "Reports work-related concerns", value: "reports_work_concerns" },
            { label: "Other concerns (specify)", value: "other_concerns" },
          ],
        },
        {
          name: "pre_session_pain_specify",
          label: "Specify Pain/Discomfort",
          type: "input",
          placeholder: "Specify...",
          showIf: { field: "pre_session_status", includes: "reports_pain_discomfort" },
        },
        {
          name: "pre_session_work_concerns_specify",
          label: "Specify Work-Related Concerns",
          type: "input",
          placeholder: "Specify...",
          showIf: { field: "pre_session_status", includes: "reports_work_concerns" },
        },
        {
          name: "pre_session_other_concerns_specify",
          label: "Specify Other Concerns",
          type: "input",
          placeholder: "Specify...",
          showIf: { field: "pre_session_status", includes: "other_concerns" },
        },

        { type: "subheading", label: "Patient Report" },
        { name: "patient_report", label: "", type: "textarea", placeholder: "Free text..." },
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
            { label: "Ergonomic Education", value: "ergonomic_education" },
            { label: "Back Care Management & Education", value: "back_care_management" },
            { label: "Job Task Circuit", value: "job_task_circuit" },
            { label: "Physical Conditioning Circuit", value: "physical_conditioning_circuit" },
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
            { label: "Followed instructions appropriately", value: "followed_instructions" },
            { label: "Completed assigned work tasks", value: "completed_work_tasks" },
            { label: "Demonstrated correct body mechanics", value: "correct_body_mechanics" },
            { label: "Applied ergonomic principles during tasks", value: "applied_ergonomic_principles" },
            { label: "Demonstrated safe work techniques", value: "safe_work_techniques" },
            { label: "Maintained appropriate work pace", value: "maintained_work_pace" },
            { label: "Demonstrated good work tolerance/endurance", value: "good_work_tolerance" },
            { label: "Required verbal cueing", value: "required_verbal_cueing" },
            { label: "Required physical assistance", value: "required_physical_assistance" },
            { label: "Required rest breaks", value: "required_rest_breaks" },
            { label: "Pain limited performance", value: "pain_limited_performance" },
            { label: "Fatigue limited performance", value: "fatigue_limited_performance" },
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

        { type: "subheading", label: "Work Performance & Clinical Response" },
        {
          name: "clinical_response",
          label: "",
          type: "checkbox-group",
          options: [
            { label: "Improved work tolerance/endurance", value: "improved_tolerance_endurance" },
            { label: "Improved task performance", value: "improved_task_performance" },
            { label: "Improved work pacing", value: "improved_work_pacing" },
            { label: "Improved ergonomic awareness and safe work techniques", value: "improved_ergonomic_awareness" },
            { label: "Improved confidence in work-related activities", value: "improved_confidence" },
            { label: "Improved ability to perform simulated job tasks", value: "improved_simulated_tasks" },
            { label: "Maintained current work performance", value: "maintained_performance" },
            { label: "Limited progress observed", value: "limited_progress" },
            { label: "Suitable to progress work demands", value: "suitable_to_progress" },
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
            { label: "Continue current work rehabilitation programme", value: "continue_programme" },
            { label: "Progress activity/task demands", value: "progress_activity_demands" },
            { label: "Increase exercise/work conditioning intensity", value: "increase_intensity" },
            { label: "Reinforce ergonomic and safe work practices", value: "reinforce_safety" },
            { label: "Introduce higher-level work simulation activities", value: "higher_level_simulation" },
            { label: "Prepare for return-to-work activities", value: "prepare_return_to_work" },
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
export default function WorkRehabGroupIntervention({ patient, selectedPatients = [], onBack }) {
  const [values, setValues] = useState({});
  const [activeTab, setActiveTab] = useState("subjective");
  const [submitted, setSubmitted] = useState(false);

  // When launched from the dashboard, selectedPatients is the group list.
  // Fall back to wrapping a single patient for backward compatibility.
  const patientList = selectedPatients.length > 0 ? selectedPatients : (patient ? [patient] : []);

  const storageKey = `work_rehab_group_progress_draft_${patientList.map(p => p.id).join("_") || "draft"}`;

  const handleAction = (type) => {
    if (type === "back") onBack?.();
    if (type === "clear") {
      setValues({});
      setSubmitted(false);
      localStorage.removeItem(storageKey);
    }
    if (type === "save") {
      localStorage.setItem(storageKey, JSON.stringify({ values, updatedAt: new Date() }));
      alert("Work Rehabilitation Group Intervention Progress Note draft saved.");
    }
  };

  const onChange = (name, value) => setValues((prev) => ({ ...prev, [name]: value }));

  return (
    <div>
      {/* Selected participants banner — same pattern as Integrated Rehab */}
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