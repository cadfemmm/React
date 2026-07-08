import React, { useState, useMemo } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import { localDateTimeString } from "../../../shared/utils/dateFormatter";
import PatientCard from "../../../shared/cards/PatientCard";

const TAB_ORDER = ["subjective", "objective", "assessment", "plan"];

const THERAPEUTIC_INTERVENTION_OPTIONS = [
  { label: "Hearing device orientation", value: "hearing_device_orientation" },
  { label: "Hearing device trial", value: "hearing_device_trial" },
  { label: "Hearing device fitting", value: "hearing_device_fitting" },
  { label: "Hearing device verification", value: "hearing_device_verification" },
  { label: "Hearing device validation", value: "hearing_device_validation" },
  { label: "Ear monitoring", value: "ear_monitoring" },
  { label: "Fine tuning of hearing device", value: "fine_tuning_hearing_device" },
  { label: "Auditory training", value: "auditory_training" },
  { label: "Hearing device counselling", value: "hearing_device_counselling" },
  { label: "Communication strategies training", value: "communication_strategies_training" },
  { label: "Tinnitus retraining therapy", value: "tinnitus_retraining_therapy" },
  { label: "Sound therapy", value: "sound_therapy" },
  { label: "Hearing devices or Assistive devices for tinnitus", value: "hearing_devices_tinnitus" },
  { label: "Tinnitus counselling", value: "tinnitus_counselling" },
  { label: "Sound Desensitisation or Sound Tolerance Training", value: "sound_desensitisation" },
  { label: "Hearing devices or Assistive devices for hyperacusis", value: "hearing_devices_hyperacusis" },
  { label: "Environmental modification", value: "environmental_modification" },
  { label: "Hyperacusis counselling", value: "hyperacusis_counselling" },
  { label: "Vestibular rehabilitation exercises", value: "vestibular_rehabilitation_exercises" },
  { label: "Canalith repositioning maneuver", value: "canalith_repositioning_maneuver" },
  { label: "Gaze stability training", value: "gaze_stability_training" },
  { label: "Fall prevention education", value: "fall_prevention_education" },
  { label: "Functional Gait training", value: "functional_gait_training" },
  { label: "Vestibular Counseling", value: "vestibular_counseling" },
  { label: "Others", value: "others" },
];

const MODALITY_OPTIONS = [
  { label: "Otoscope", value: "otoscope" },
  { label: "Middle ear analyzer", value: "middle_ear_analyzer" },
  { label: "Otoacoustic emission", value: "otoacoustic_emission" },
  { label: "Audiometer", value: "audiometer" },
  { label: "Hearing aid analyser", value: "hearing_aid_analyser" },
  { label: "Videonystagmography", value: "videonystagmography" },
  { label: "Dynamic Visual Acuity", value: "dynamic_visual_acuity" },
  { label: "Video Head Impulse Test (VHIT)", value: "vhit" },
  { label: "Posturography", value: "posturography" },
  { label: "Sensory Organization Performance", value: "sensory_organization_performance" },
  { label: "Auditory Steady State Response", value: "assr" },
  { label: "Auditory evoked potential", value: "auditory_evoked_potential" },
  { label: "Others", value: "others" },
];

const OBJECTIVE_FIELDS = [

  {
    name: "objectives",
    label: "Objective(s)",
    type: "dynamic-section",
    fields: [{ name: "objective", label: "Objective", type: "input" }],
  },
  {
    name: "therapeutic_interventions",
    label: "Therapeutic Interventions",
    type: "multi-select-dropdown",
    options: THERAPEUTIC_INTERVENTION_OPTIONS,
  },
  {
    name: "therapeutic_interventions_others",
    label: "Others (specify)",
    type: "input",
    showIf: { field: "therapeutic_interventions", includes: "others" },
  },
  {
    name: "modalities",
    label: "Modalities",
    type: "multi-select-dropdown",
    options: MODALITY_OPTIONS,
  },
  {
    name: "modalities_others",
    label: "Others (specify)",
    type: "input",
    showIf: { field: "modalities", includes: "others" },
  },
  {
    name: "observation_during_treatment",
    label: "Observation during Treatment",
    type: "textarea",
  },
  {
    name: "adverse_reaction",
    label: "Adverse reaction",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "adverse_reaction_details",
    label: "Details",
    type: "textarea",
    showIf: { field: "adverse_reaction", equals: "yes" },
  },
  {
    type: "accordion",
    name: "note_section",
    label: "Note",
    defaultOpen: false,
    children: [
      {
        name: "note_upload",
        type: "attach-file",
        accept: "application/pdf,image/*",
        title: "Upload Note File",
        multiple: false,
        previewSize: { width: 400, height: 400 },
        hideInputAfterSelect: true,
      },
      {
        name: "note",
        label: "Note",
        type: "textarea",
      },
    ],
  },
];

const PLAN_MODIFY_SHOW_IF = { field: "plan", equals: "modify" };

const PLAN_FIELDS = [

  {
    name: "plan",
    label: "Plan",
    type: "radio",
    options: [
      { label: "Modify", value: "modify" },
      { label: "Continue", value: "continue" },
    ],
  },
  {
    name: "plan_therapeutic_interventions",
    label: "Therapeutic Interventions",
    type: "multi-select-dropdown",
    options: THERAPEUTIC_INTERVENTION_OPTIONS,
    showIf: PLAN_MODIFY_SHOW_IF,
  },
  {
    name: "plan_therapeutic_interventions_others",
    label: "Others (specify)",
    type: "input",
    showIf: {
      field: "plan",
      equals: "modify",
      and: { field: "plan_therapeutic_interventions", includes: "others" },
    },
  },
  {
    name: "plan_modalities",
    label: "Modalities",
    type: "multi-select-dropdown",
    options: MODALITY_OPTIONS,
    showIf: PLAN_MODIFY_SHOW_IF,
  },
  {
    name: "plan_modalities_others",
    label: "Others (specify)",
    type: "input",
    showIf: {
      field: "plan",
      equals: "modify",
      and: { field: "plan_modalities", includes: "others" },
    },
  },
  {
    name: "plan_others",
    label: "Others",
    type: "input",
    showIf: PLAN_MODIFY_SHOW_IF,
  },
  {
    name: "upcoming_booking_schedule",
    label: "Upcoming Booking Schedule",
    type: "date",
    showIf: PLAN_MODIFY_SHOW_IF,
  },
  {
    name: "plan_comment",
    label: "Comment",
    type: "textarea",
  },
];

export default function AudiologyProgressAssessmentForm({ patient, onSubmit, onBack }) {
  const [form,      setForm]      = useState({ session_number: "1" });
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("subjective");

  const storageKey = patient ? `audiology_progress_draft_${patient.id}` : null;

  const setField = (key, value) => setForm(prev => ({ ...prev, [key]: value }));

  const handleAction = (type) => {
    if (type === "back")  { onBack?.(); return; }
    if (type === "clear") {
      if (window.confirm("Clear all form data?")) {
        setForm({ session_number: "1" });
        if (storageKey) localStorage.removeItem(storageKey);
      }
      return;
    }
    if (type === "save") {
      if (storageKey) localStorage.setItem(storageKey, JSON.stringify({ values: form, updatedAt: new Date() }));
      alert("Progress draft saved");
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    onSubmit?.(form);
    alert("Audiology progress assessment submitted");
  };

  const ACTIONS = [
    { type: "back",  label: "Back"  },
    { type: "clear", label: "Clear" },
    { type: "save",  label: "Save"  },
  ];

  const schemaMap = useMemo(() => ({
    subjective: {
      actions: ACTIONS,
      sections: [{
        fields: [
          
          { name: "case_overview", label: "Case Overview", type: "textarea" },
          {
            name: "session_for",
            label: "Session For",
            type: "checkbox-group",
            options: [
              { label: "Auditory Management", value: "auditory_management" },
              { label: "Tinnitus Management", value: "tinnitus_management" },
              { label: "Hyperacusis Management", value: "hyperacusis_management" },
              { label: "Vestibular Management", value: "vestibular_management" },
              { label: "Specialized", value: "specialized" },
            ],
          },
          {
            name: "session_type",
            label: "Session Type",
            type: "radio",
            options: [
              { label: "Center based", value: "center_based" },
              { label: "Home based", value: "home_based" },
              { label: "Telerehab", value: "telerehab" },
            ],
          },
          {
            name: "consent",
            label: "Consent",
            type: "checkbox-group",
            options: [{
              label: "Consultation has been given based on findings. Client was in his/her best interest.",
              value: "yes",
            }],
          },
          {
            name: "new_complaint",
            label: "New Complaint",
            type: "radio",
            options: [
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ],
          },
          {
            name: "new_complaint_details",
            label: "Details",
            type: "textarea",
            showIf: { field: "new_complaint", equals: "yes" },
          },
          {
            name: "session_number",
            label: "Session Number",
            type: "input",
            readOnly: true,
          },
        ],
      }],
    },

    objective: {
      actions: ACTIONS,
      sections: [{
        fields: OBJECTIVE_FIELDS,
      }],
    },

    assessment: {
      actions: ACTIONS,
      sections: [{
        fields: [
         
          {
            name: "tasks",
            type: "dynamic-section",
            fields: [
              { name: "task",        label: "Task",             type: "input"    },
              {
                name: "achievement",
                label: "Achievement",
                type: "radio",
                labelAbove: true,
                options: [
                  { label: "Excellent", value: "excellent" },
                  { label: "Good",      value: "good"      },
                  { label: "Fair",      value: "fair"      },
                  { label: "Poor",      value: "poor"      },
                ],
              },
              { name: "comment", label: "Comment / Remark", type: "input" },
            ],
          },
        ],
      }],
    },

    plan: {
      actions: ACTIONS,
      sections: [{
        fields: PLAN_FIELDS,
      }],
    },
  }), []);

  /* ── Render ── */
  return (
    <div style={mainContent}>
      {/* Patient Information Card */}
      <PatientCard patient={patient} />

      {/* SOAP Tabs */}
      <div style={tabBar}>
        {TAB_ORDER.map(tab => (
          <div
            key={tab}
            style={activeTab === tab ? tabActive : tabBtn}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </div>
        ))}
      </div>

      {/* Active tab form */}
      <CommonFormBuilder
        schema={schemaMap[activeTab]}
        values={form}
        onChange={setField}
        submitted={submitted}
        onAction={handleAction}
      >
        <div style={submitRow}>
          {activeTab !== "plan" ? (
            <button
              type="button"
              style={submitBtn}
              onClick={() => {
                const idx = TAB_ORDER.indexOf(activeTab);
                if (idx < TAB_ORDER.length - 1) setActiveTab(TAB_ORDER[idx + 1]);
              }}
            >
              Next
            </button>
          ) : (
            <button type="button" style={submitBtn} onClick={handleSubmit}>
              Submit Audiology Progress
            </button>
          )}
        </div>
      </CommonFormBuilder>
    </div>
  );
}

/* ── Styles — identical to AudiologyAdultIA ── */
const mainContent = { margin: "0 auto", width: "100%" };

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

const submitRow = {
  display: "flex",
  justifyContent: "flex-end",
  marginTop: 20,
};

const submitBtn = {
  padding: "12px 32px",
  background: "#2563EB",
  color: "#fff",
  border: "none",
  borderRadius: 10,
  fontSize: 15,
  fontWeight: 700,
  cursor: "pointer",
};
