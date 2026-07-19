import { ACTIONS_BUTTON } from "../actions";

/**
 * Audiology Progress Intervention — SOAP schemas (Subjective / Objective / Assessment / Plan).
 * Field names and labels are export-friendly for RAP session reports and Preview.
 */

const THERAPEUTIC_INTERVENTION_OPTIONS = [
  { label: "Hearing device orientatiooon", value: "hearing_device_orientation" },
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

const SUBJECTIVE = {
  title: "",
  actions: ACTIONS_BUTTON,
  sections: [
    {
      fields: [
        { type: "subheading", label: "Subjective" },
        {
          name: "case_overview",
          label: "Case Overview",
          type: "textarea",
        },
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
        { type: "subheading", label: "Consent" },
        {
          name: "consent",
          label: "Consent",
          type: "checkbox-group",
          options: [
            {
              label:
                "Consultation has been given based on findings. Client was in his/her best interest.",
              value: "yes",
            },
          ],
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
    },
  ],
};

const OBJECTIVE = {
  title: "",
  actions: ACTIONS_BUTTON,
  sections: [
    {
      fields: [
        { type: "subheading", label: "Objective" },
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
      ],
    },
  ],
};

const ASSESSMENT = {
  title: "",
  actions: ACTIONS_BUTTON,
  sections: [
    {
      fields: [
        { type: "subheading", label: "Assessment" },
        {
          name: "clinical_impression",
          label: "Clinical Impression",
          type: "textarea",
        },
        {
          name: "tasks",
          label: "Tasks",
          type: "dynamic-section",
          fields: [
            { name: "task", label: "Task", type: "input" },
            {
              name: "achievement",
              label: "Achievement",
              type: "radio",
              labelAbove: true,
              options: [
                { label: "Excellent", value: "excellent" },
                { label: "Good", value: "good" },
                { label: "Fair", value: "fair" },
                { label: "Poor", value: "poor" },
              ],
            },
            {
              name: "comment",
              label: "Comment / Remark",
              type: "input",
            },
          ],
        },
      ],
    },
  ],
};

const PLAN = {
  title: "",
  actions: ACTIONS_BUTTON,
  sections: [
    {
      fields: [
        { type: "subheading", label: "Plan" },
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
          showIf: { field: "plan", equals: "modify" },
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
          showIf: { field: "plan", equals: "modify" },
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
          showIf: { field: "plan", equals: "modify" },
        },
        {
          name: "upcoming_booking_schedule",
          label: "Upcoming Booking Schedule",
          type: "date",
          showIf: { field: "plan", equals: "modify" },
        },
        {
          name: "plan_comment",
          label: "Comment",
          type: "textarea",
        },
      ],
    },
  ],
};


console.log (SUBJECTIVE);
console.log (OBJECTIVE);
console.log (ASSESSMENT);
console.log (PLAN);

export default {
  SUBJECTIVE,
  OBJECTIVE,
  ASSESSMENT,
  PLAN,
};
