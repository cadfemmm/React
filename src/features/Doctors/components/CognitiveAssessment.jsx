// import React, { useState, useEffect } from "react";
// import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
// import PHQ9Assessment from "./PHQ9Assessment";
// import GAD7Assessment from "./GAD7Assessment";
// import ESSAssessment from "./ESSAssessment";

// import DASS21Assessment from "./DASS21Assessment";
// import PSQIAssessment from "./PSQIAssessment";
// import ISIAssessment from "./ISIAssessment";
// import GlasgowComaScale from "./GlasgowComaScale";
// import JFKComaRecoveryScale from "./JFKComaRecoveryScale";
// import MoCAAssessment from "../../OT/components/MocA";
// import CASPAssessment from "../../OT/components/Casp";
// import DLOTCAForm from "../../OT/components/Slums";
// import LOTCAForm from "../../OT/components/Lotca";
// import DLOTCAFullAssessment from "../../OT/components/Dlocta";
// import DLOTCA_G_Full from "../../OT/components/Dlocta-g";
// import COTNABAssessment from "../../OT/components/Cotnab";
// import RPAB_Assessment from "../../OT/components/RPAB";
// import DCOGAssessment from "../../OT/components/Dcog";
// import COGBATAssessment from "../../OT/components/Cogbat";
// import OTMMSEAssessment from "../../OT/components/Mmse";
// import RLARAssessment from "../../OT/components/Rlar";
import React, { useState, useEffect } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

import PHQ9Assessment from "./PHQ9Assessment";
import GAD7Assessment from "./GAD7Assessment";
import DASS21Assessment from "./DASS21Assessment";
import ESSAssessment from "./ESSAssessment";
import PSQIAssessment from "./PSQIAssessment";
import ISIAssessment from "./ISIAssessment";

import GlasgowComaScale from "./GlasgowComaScale";
import JFKComaRecoveryScale from "./JFKComaRecoveryScale";

import MoCAAssessment from "../../OT/components/MocA";
import CASPAssessment from "../../OT/components/Casp";
import DLOTCAForm from "../../OT/components/Slums";
import LOTCAForm from "../../OT/components/Lotca";
import DLOTCAFullAssessment from "../../OT/components/Dlocta";
import DLOTCA_G_Full from "../../OT/components/Dlocta-g";
import COTNABAssessment from "../../OT/components/Cotnab";
import RPAB_Assessment from "../../OT/components/RPAB";
import DCOGAssessment from "../../OT/components/Dcog";
import COGBATAssessment from "../../OT/components/Cogbat";
import OTMMSEAssessment from "../../OT/components/Mmse";
import RLARAssessment from "../../OT/components/Rlar";


export default function CognitiveSoapAssessment({
  patient,
  onUpdatePatient
}) {
  const [formData, setFormData] = useState(() => patient || {});

  useEffect(() => {
    if (!patient?.id) return;

    const updated = {
      ...patient,
      ...formData
    };

    localStorage.setItem(
      `patient_${patient.id}`,
      JSON.stringify(updated)
    );

    onUpdatePatient?.(updated);
  }, [formData, patient, onUpdatePatient]);

 const schema = {
  fields: [
    /* ==================== 1. GENERAL COGNITIVE & CONSCIOUSNESS ==================== */
    {
      name: "cognitive",
      label: "Cognitive",
      type: "radio",
      options: [
        { label: "Grossly Intact", value: "grossly_intact" },
        { label: "Grossly Impaired", value: "grossly_impaired" }
      ]
    },
    {
      name: "consciousness",
      label: "State of Consciousness",
      type: "radio",
      options: [
        { label: "Alert", value: "Alert" },
        { label: "Altered consciousness", value: "Altered consciousness" }
      ]
    },

    /* Altered Consciousness Options & Charts */
    {
  name: "consciousnessAssessmentLauncher",
  label: "",
  type: "assessment-launcher",
  options: [
    {
      label: "Glasgow Coma Scale Chart",
      value: "gcs",
      visibleIf: {
        field: "consciousness",
        equals: "Altered consciousness"
      }
    },
    {
      label: "JFK CRS-R Chart",
      value: "crs",
      visibleIf: {
        field: "consciousness",
        equals: "Altered consciousness"
      }
    }
  ],
  showIf: {
    field: "consciousness",
    equals: "Altered consciousness"
  }
},
// {
//  name:"gcs",
//  label:"Glasgow Coma Scale Chart",
//  type:"assessment-launcher",
//  options:[
//    {
//      label:"Glasgow Coma Scale chart",
//      value:"gcs"
//    }
//  ],
//  showIf:{
//    field:"consciousness",
//    equals:"Altered consciousness"
//  }
// },

// {
//  name:"crs",
//  label:"JFK CRS-R Chart",
//  type:"assessment-launcher",
//  options:[
//    {
//      label:"JFK CRS-R chart",
//      value:"crs"
//    }
//  ],
//  showIf:{
//    field:"consciousness",
//    equals:"Altered consciousness"
//  }
// },
    {
      name: "alteredRemarks",
      label: "Remarks",
      type: "input",
      placeholder: "Enter remarks",
      showIf: { field: "consciousness", equals: "Altered consciousness" }
    },

// {
//   name: "plans",
//   label: "Plans",
//   type: "checkbox-group",
//   options: [
//     "Monitor GCS",
//     "Repeat JFK Coma Recovery Scale",
//     "For Multimodal Sensory Stimulation",
//     "Plan to Teach Carer Regarding Multimodal Sensory Stimulation",
//     "Others"
//   ]
// },

// // Monitor GCS Frequency
// {
//   name: "monitorGcsFrequency",
//   label: "Monitor GCS Frequency",
//   type: "single-select",
//   options: [
//     "Per Shift",
//     "Daily",
//     "Weekly"
//   ],
//   showIf: {
//     field: "plans",
//     includes: "Monitor GCS"
//   }
// },


// // JFK Frequency
// {
//   name: "jfkFrequency",
//   label: "Repeat JFK Coma Recovery Scale Frequency",
//   type: "single-select",
//   options: [
//     "Weekly",
//     "2 Weekly"
//   ],
//   showIf: {
//     field: "plans",
//     includes: "Repeat JFK Coma Recovery Scale"
//   }
// },


// // Multimodal Frequency
// {
//   name: "multimodalFrequency",
//   label: "Multimodal Sensory Stimulation Frequency",
//   type: "single-select",
//   options: [
//     "Once Daily (OD)",
//     "Twice Daily (BD)",
//     "Thrice Daily (TDS)",
//     "Four Times Daily (QID)"
//   ],
//   showIf: {
//     field: "plans",
//     includes: "For Multimodal Sensory Stimulation"
//   }
// },


// // Teach Carer Details



// // Others Remarks
// {
//   name: "alteredOthersRemarks",
//   label: "Other Recommendations",
//   type: "input",
//   placeholder: "Enter other intervention plans...",
//   showIf: {
//     field: "plans",
//     includes: "Others"
//   }
// },

{
 name:"plans",
 label:"Plans",
 type:"checkbox-group",
 options:[
  {
   label:"Monitor GCS",
   value:"monitor_gcs"
  },
  {
   label:"Repeat JFK Coma Recovery Scale",
   value:"repeat_jfk"
  },
  {
   label:"For Multimodal Sensory Stimulation",
   value:"multimodal"
  },
  {
   label:"Plan to Teach Carer Regarding Multimodal Sensory Stimulation",
   value:"teach_carer"
  },
  {
   label:"Others",
   value:"others"
  }
 ],
  showIf:{
   field:"consciousness",
   equals:"Altered consciousness"
 }
 
},


{
 name:"monitorGcsFrequency",
 label:"Monitor GCS Frequency",
 type: "single-select",
options : [
  {
    label: "Per Shift",
    value: "Per Shift"
  },
  {
    label: "Daily",
    value: "Daily"
  },
  {
    label: "Weekly",
    value: "Weekly"
  }
],
 showIf:{
  field:"plans",
  includes:"monitor_gcs"
 }
},


{
 name:"jfkFrequency",
 label:"Repeat JFK Coma Recovery Scale Frequency",
 type: "single-select",
options : [
  {
    label: "Weekly",
    value: "Weekly"
  },
  {
    label: "2 Weekly",
    value: "2 Weekly"
  }
],
 showIf:{
  field:"plans",
  includes:"repeat_jfk"
 }
},


{
 name:"multimodalFrequency",
 label:"Multimodal Sensory Stimulation Frequency",
 type: "single-select",
 options : [
  {
    label: "Once Daily (OD)",
    value: "Once Daily (OD)"
  },
  {
    label: "Twice Daily (BD)",
    value: "Twice Daily (BD)"
  },
  {
    label: "Thrice Daily (TDS)",
    value: "Thrice Daily (TDS)"
  },
  {
    label: "Four Times Daily (QID)",
    value: "Four Times Daily (QID)"
  }
],
 showIf:{
  field:"plans",
  includes:"multimodal"
 }
},

{
  name: "planOthersRemarks",
  label: "Others",
  type: "input",
  placeholder: "Enter other plan details",
  showIf: {
    field: "plans",
    includes: "others"
  }
},
{
 name:"orientationOthersPlan",
 label:"Plans: Others",
 type:"input",
 placeholder:"Enter orientation plans",
 showIf:{
   field:"orientationPlans",
   includes:"others"
 }
},

    /* ==================== 2. ORIENTATION FUNCTIONS ==================== */
    {
      name: "orientationStatus",
      label: "Orientation Functions",
      type: "radio",
      options: [
        { label: "Intact", value: "intact" },
        { label: "Impaired", value: "impaired" }
      ]
    },
    {
  name: "orientationTime",
  label: "Orientation to Time",
  type: "radio",
  options: [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" }
  ],
  showIf: {
    field: "orientationStatus",
    equals: "impaired"
  }
},

{
  name: "orientationTimeRemarks",
  label: "Orientation to Time Remarks",
  type: "input",
  placeholder: "Enter details",
  showIf: {
    field: "orientationTime",
    equals: "yes"
  }
},


{
  name: "orientationPlace",
  label: "Orientation to Place",
  type: "radio",
  options: [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" }
  ],
  showIf: {
    field: "orientationStatus",
    equals: "impaired"
  }
},

{
  name: "orientationPlaceRemarks",
  label: "Orientation to Place Remarks",
  type: "input",
  placeholder: "Enter details",
  showIf: {
    field: "orientationPlace",
    equals: "yes"
  }
},


{
  name: "orientationPerson",
  label: "Orientation to Person",
  type: "radio",
  options: [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" }
  ],
  showIf: {
    field: "orientationStatus",
    equals: "impaired"
  }
},

{
  name: "orientationPersonRemarks",
  label: "Orientation to Person Remarks",
  type: "input",
  placeholder: "Enter details",
  showIf: {
    field: "orientationPerson",
    equals: "yes"
  }
},
    {
  name: "orientationPlans",
  label: "Plans",
  type: "checkbox-group",
  options: [
    {
      label: "Orientation Board",
      value: "orientation_board"
    },
    {
      label: "Others",
      value: "others"
    }
  ],
  showIf: {
    field: "orientationStatus",
    equals: "impaired"
  }
},


{
  name: "orientationOthersPlan",
  label: "Plans: Others",
  type: "input",
  placeholder: "Enter orientation plans",
  showIf: {
    field: "orientationPlans",
    includes: "others"
  }
},
    /* ==================== 3. ABILITY TO OBEY COMMANDS ==================== */
{
  name: "obeyCommandStatus",
  label: "Ability to Obey Command",
  type: "radio",
  options: [
    { label: "Intact", value: "intact" },
    { label: "Impaired", value: "impaired" }
  ]
},

// =======================
// 3-Step Command
// =======================
{
  name: "obey3StepCommand",
  label: "Obey 3-step Command",
  type: "radio",
  options: [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" }
  ],
  showIf: {
    or: [
      { field: "obeyCommandStatus", equals: "intact" },
      { field: "obeyCommandStatus", equals: "impaired" }
    ]
  }
},
{
  name: "patientObeyed3StepCommand",
  label: "Patient obeyed 3-step command",
  type: "single-select",
  options: [
    { label: "Without Cues", value: "without_cues" },
    { label: "With Cues", value: "with_cues" }
  ],
  showIf: { field: "obey3StepCommand", equals: "yes" }
},
{
  name: "consistency3Step",
  label: "Consistency",
  type: "single-select",
  options: [
    { label: "Consistent", value: "consistent" },
    { label: "Inconsistent", value: "inconsistent" }
  ],
  showIf: { field: "obey3StepCommand", equals: "yes" }
},
{
  name: "cueType3Step",
  label: "Type of cues used",
  type: "single-select",
  options: [
     { label: "With verbal cuse", value: "with_verbal" },
    { label: "With visual cuse", value: "with_visual" },
  ],
  showIf: {
    field: "patientObeyed3StepCommand",
    equals: "with_cues"
  }
},

// =======================
// 2-Step Command
// =======================
{
  name: "obey2StepCommand",
  label: "Obey 2-step Command",
  type: "radio",
  options: [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" }
  ],
  showIf: { field: "obey3StepCommand", equals: "no" }
},
{
  name: "patientObeyed2StepCommand",
  label: "Patient obeyed 2-step command",
  type: "single-select",
  options: [
    { label: "Without Cues", value: "without_cues" },
    { label: "With Cues", value: "with_cues" }
  ],
  showIf: { field: "obey2StepCommand", equals: "yes" }
},
{
  name: "consistency2Step",
  label: "Consistency",
  type: "single-select",
  options: [
    { label: "Consistent", value: "consistent" },
    { label: "Inconsistent", value: "inconsistent" }
  ],
  showIf: { field: "obey2StepCommand", equals: "yes" }
},
{
  name: "cueType2Step",
  label: "Type of cues used",
  type: "single-select",
  options: [
    { label: "With verbal cuse", value: "with_verbal" },
    { label: "With visual cuse", value: "with_visual" },
  ],
  showIf: {
    field: "patientObeyed2StepCommand",
    equals: "with_cues"
  }
},

// =======================
// 1-Step Command
// =======================
{
  name: "obey1StepCommand",
  label: "Obey 1-step Command",
  type: "radio",
  options: [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" }
  ],
  showIf: { field: "obey2StepCommand", equals: "no" }
},
{
  name: "patientObeyed1StepCommand",
  label: "Patient obeyed 1-step command",
  type: "select",
  options: [
    { label: "Without Cues", value: "without_cues" },
    { label: "With Cues", value: "with_cues" }
  ],
  showIf: { field: "obey1StepCommand", equals: "yes" }
},
{
  name: "consistency1Step",
  label: "Consistency",
  type: "select",
  options: [
    { label: "Consistent", value: "consistent" },
    { label: "Inconsistent", value: "inconsistent" }
  ],
  showIf: { field: "obey1StepCommand", equals: "yes" }
},
{
  name: "cueType1Step",
  label: "Type of cues used",
  type: "select",
  options: [
    { label: "With verbal cuse", value: "with_verbal" },
    { label: "With visual cuse", value: "with_visual" },
   
  ],
  showIf: {
    field: "patientObeyed1StepCommand",
    equals: "with_cues"
  }
},
// {
//   name: "obeyCommandStatus",
//   label: "Ability to Obey Command",
//   type: "radio",
//   options: [
//     { label: "Intact", value: "intact" },
//     { label: "Impaired", value: "impaired" }
//   ]
// },

// {
//   name: "obey3StepCommand",
//   label: "Obey 3-step Command",
//   type: "radio",
//   options: [
//     { label: "Yes", value: "yes" },
//     { label: "No", value: "no" }
//   ],
//   showIf: { field: "obeyCommandStatus", equals: "impaired" }
// },

// {
//   name: "patientObeyedCommand",
//   label: "Patient obeyed 3-step command",
//   type: "select",
//   options: [
//     { label: "Without Cues", value: "without_cues" },
//     { label: "With Cues", value: "with_cues" }
//   ],
//   showIf: { field: "obeyCommandStatus", equals: "impaired" }
// },

// {
//   name: "cueType",
//   label: "Type of cues used",
//   type: "select",
//   options: [
//     { label: "Verbal", value: "verbal" },
//     { label: "Visual", value: "visual" },
//     { label: "Gestural", value: "gestural" },
//     { label: "Tactile", value: "tactile" }
//   ],
//   showIf: { field: "obeyCommandStatus", equals: "impaired" }
// },

// {
//   name: "consistency",
//   label: "Consistency",
//   type: "select",
//   options: [
//     { label: "Consistent", value: "consistent" },
//     { label: "Inconsistent", value: "inconsistent" }
//   ],
//   showIf: { field: "obeyCommandStatus", equals: "impaired" }
// },

{
  name: "obeyCommandPlans",
  label: "Plans",
  type: "checkbox-group",
  options: [
    {
      label: "Use simple commands in all activities",
      value: "simple_commands"
    },
    {
      label: "Others",
      value: "others"
    }
  ],
  showIf: { field: "obeyCommandStatus", equals: "impaired" }
},

{
  name: "obeyCommandOthersRemarks",
  label: "Remarks",
  type: "input",
  placeholder: "Enter remarks",
  showIf: {
    field: "obeyCommandPlans",
    includes: "others"
  }
},
    {
      name: "obeyThreeStepCommand",
      label: "Obey 3-step Command",
      type: "radio",
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" }
      ],
      showIf: { field: "obeyCommandStatus", equals: "impaired" }
    },
    {
      name: "commandSimplePlan",
      label: "Plans: Use simple commands in all activities",
      type: "checkbox",
      showIf: { field: "obeyCommandStatus", equals: "impaired" }
    },
    {
      name: "commandOthersPlan",
      label: "Plans: Others",
      type: "input",
      placeholder: "Enter command adaptation plans",
      showIf: { field: "obeyCommandStatus", equals: "impaired" }
    },

    /* ==================== 4. MEMORY FUNCTION ==================== */
{
  name: "memoryStatus",
  label: "Memory Function",
  type: "radio",
  options: [
    { label: "Intact", value: "intact" },
    { label: "Impaired", value: "impaired" }
  ]
},
  {
      name: "memoryRemarks",
      label: "Remarks",
      type: "input",
      showIf: { field: "memoryStatus", equals: "impaired" }
    },
{
  name: "memoryPlans",
  label: "Memory Routine Plans",
  type: "checkbox-group",
  options: [
    { label: "Maintain same routine", value: "maintain_routine" },
    { label: "Others", value: "others" }
  ],
  showIf: { field: "memoryStatus", equals: "impaired" }
},
{
  name: "memoryOthers",
  label: "Please specify",
  type: "input", // or "input"
  showIf: {
    field: "memoryPlans",
    includes: "others"
  }
},
    /* ==================== 5. ATTENTION FUNCTION ==================== */
    {
  name: "attentionStatus",
  label: "Attention Function",
  type: "radio",
  options: [
    { label: "Good", value: "good" },
    { label: "Poor", value: "poor" }
  ]
},
{
  name: "attentionRemarks",
  label: "Remarks",
  type: "input",
  showIf: { field: "attentionStatus", equals: "poor" }
},
{
  name: "attentionPlans",
  label: "Plans",
  type: "checkbox-group",
  options: [
    {
      label: "Do activities in low stimulus environment to reduce distraction",
      value: "low_stimulus"
    },
    {
      label: "Others",
      value: "others"
    }
  ],
  showIf: { field: "attentionStatus", equals: "poor" }
},
{
  name: "attentionOthersPlan",
  label: "Please specify",
  type: "input",
  showIf: {
    field: "attentionPlans",
    includes: "others"
  }
},

    /* ==================== 6. EMOTIONAL / MOOD FUNCTIONS ==================== */
    {
      name: "moodStatus",
      label: "Emotional / Mood Functions",
      type: "radio",
      options: [
        { label: "Normal mood", value: "normal" },
        { label: "Altered mood", value: "altered" }
      ]
    },
  {
  name: "moodAssessmentLauncher",
  label: "",
  type: "assessment-launcher",
  options: [
    {
      label: "Patient Health Questionnaire (PHQ-9)",
      value: "phq9",
      visibleIf: {
        field: "moodStatus",
        equals: "altered"
      }
    },
    {
      label: "Generalized Anxiety Disorder (GAD-7)",
      value: "gad",
      visibleIf: {
        field: "moodStatus",
        equals: "altered"
      }
    },
    {
      label: "Depression Anxiety Stress Scale (DASS-21)",
      value: "dass",
      visibleIf: {
        field: "moodStatus",
        equals: "altered"
      }
    }
  ],
  showIf: {
    field: "moodStatus",
    equals: "altered"
  }
},
    {
      name: "moodRemarks",
      label: "Remarks",
      type: "input",
      showIf: { field: "moodStatus", equals: "altered" }
    },
  {
  name: "moodPlans",
  label: "Plans",
  type: "checkbox-group",
  options: [
    {
      label: "Monitor patient's mood",
      value: "monitor_mood"
    },
    {
      label: "Inform if patient exhibits abnormal behaviour",
      value: "inform_abnormal_behaviour"
    },
    {
      label: "Repeat assessment weekly / when needed",
      value: "repeat_assessment"
    },
    {
      label: "Others",
      value: "others"
    }
  ],
  showIf: {
    field: "moodStatus",
    equals: "altered"
  }
},
{
  name: "moodOtherPlan",
  label: "Please specify",
  type: "input",
  showIf: {
    field: "moodPlans",
    includes: "others"
  }
},

    /* ==================== 7. PERCEPTUAL FUNCTIONS ==================== */
    {
      name: "perceptualStatus",
      label: "Perceptual Functions",
      type: "radio",
      options: [
        { label: "Intact", value: "intact" },
        { label: "Impaired", value: "impaired" }
      ]
    },
    {
      name: "neglect",
      label: "Neglect",
      type: "radio",
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" }
      ],
      showIf: { field: "perceptualStatus", equals: "impaired" }
    },
    {
  name: "specifyNeglect",
  label: "Specify Neglect",
  type: "input",
  showIf: {
    field: "neglect",
    equals: "yes"
  }
},
    {
      name: "Personal",
      label: "Personal",
      type: "radio",
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" }
      ],
      showIf: { field: "perceptualStatus", equals: "impaired" }
    },
    {
  name: "specifyPersonal",
  label: "Specify Personal",
  type: "input",
  showIf: {
    field: "personal",
    equals: "yes"
  }
},
    {
      name: "peripersonal",
      label: "Peripersonal",
      type: "radio",
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" }
      ],
      showIf: { field: "perceptualStatus", equals: "impaired" }
    },
    {
  name: "specifyPeripersonal",
  label: "Specify Peripersonal",
  type: "input",
  showIf: {
    field: "peripersonal",
    equals: "yes"
  }
},
    {
      name: "extraPersonal",
      label: "Extrapersonal",
      type: "radio",
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" }
      ],
      showIf: { field: "perceptualStatus", equals: "impaired" }
    },
    {
  name: "specifyExtraPersonal",
  label: "Specify Extrapersonal",
  type: "input",
  showIf: {
    field: "extraPersonal",
    equals: "yes"
  }
},
    {
      name: "apraxia",
      label: "Apraxia",
      type: "radio",
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" }
      ],
      showIf: { field: "perceptualStatus", equals: "impaired" }
    },
    {
  name: "specifyApraxia",
  label: "Specify Apraxia",
  type: "input",
  showIf: {
    field: "apraxia",
    equals: "yes"
  }
},
   {
  name: "perceptualPlans",
  label: "Perceptual Plans",
  type: "checkbox-group",
  options: [
    {
      label: "To give more stimulation and approach from patient's left side",
      value: "left_side_stimulation"
    },
    {
      label: "Others",
      value: "others"
    }
  ],
  showIf: {
    field: "perceptualStatus",
    equals: "impaired"
  }
},
{
  name: "perceptualOthersPlan",
  label: "Plans: Others",
  type: "input",
  placeholder: "Please specify",
  showIf: {
    field: "perceptualPlans",
    includes: "others"
  }
},
    /* ==================== 8. SLEEP QUALITY ==================== */
   {
  name: "sleepQualityStatus",
  label: "Sleep Quality",
  type: "radio",
  options: [
    { label: "Good", value: "good" },
    { label: "Poor", value: "poor" }
  ]
},

{
  name: "sleepAssessmentLauncher",
  label: "",
  type: "assessment-launcher",
  options: [
    {
      label: "Insomnia Severity Index (ISI)",
      value: "isia",
      visibleIf: {
        field: "sleepQualityStatus",
        equals: "poor"
      }
    },
    {
      label: "Epworth Sleepiness Scale (ESS)",
      value: "ess",
      visibleIf: {
        field: "sleepQualityStatus",
        equals: "poor"
      }
    },
    {
      label: "Pittsburgh Sleep Quality Index (PSQI)",
      value: "psqi",
      visibleIf: {
        field: "sleepQualityStatus",
        equals: "poor"
      }
    }
  ],
  showIf: {
    field: "sleepQualityStatus",
    equals: "poor"
  }
},

{
  name: "sleepRemarks",
  label: "Remarks",
  type: "input",
  showIf: {
    field: "sleepQualityStatus",
    equals: "poor"
  }
},
   {
  name: "sleepPlans",
  label: "Plans",
  type: "checkbox-group",
  options: [
    {
      label: "Education on sleep hygiene",
      value: "sleep_hygiene"
    },
    {
      label: "Avoid caffeine a few hours before sleep time",
      value: "avoid_caffeine"
    },
    {
      label: "For relaxation therapy",
      value: "relaxation_therapy"
    },
    {
      label: "Others",
      value: "others"
    }
  ],
  showIf: {
    field: "sleepQualityStatus",
    equals: "poor"
  }
},
{
  name: "sleepOtherPlan",
  label: "Please specify",
  type: "input",
  showIf: {
    field: "sleepPlans",
    contains: "others"
  }
},

    /* ==================== 9. EXECUTIVE FUNCTIONS ==================== */
    {
  name: "problemSolvingStatus",
  label: "Activity and Participation: Problem Solving",
  type: "radio",
  options: [
    { label: "Intact", value: "intact" },
    { label: "Impaired", value: "impaired" }
  ],
  showIf: {
    field: "sleepQualityStatus",
    equals: "good"
  }
},
{
  name: "decisionMakingStatus",
  label: "Decision Making",
  type: "radio",
  options: [
    { label: "Intact", value: "intact" },
    { label: "Impaired", value: "impaired" }
  ],
  showIf: {
    field: "sleepQualityStatus",
    equals: "good"
  }
},

    /* ==================== 10. STANDARDIZED ASSESSMENT LAUNCHERS ==================== */
    {type:'subheading',label:'Additional Outcome Measure'},
    {
      name: "cognitive_assessment_launchers",
      label: "Cognitive Assessment Tests",
      type: "assessment-launcher",
      options: [
        { label: "Mini-Mental State Examination (MMSE)", value: "mmse" },
        { label: "Rancho Los Amigos Scale – Revised (RLAR-S)", value: "rlar" },
        { label: "Montreal Cognitive Assessment (MoCA)", value: "moca" },
        { label: "Cognitive Assessment for Stroke Patients (CASP)", value: "casp" },
        { label: "SLUMS Examination (SLUMS)", value: "slums" },
        { label: "Loewenstein OT Cognitive Assessment (LOTCA)", value: "lotca" },
        { label: "Dynamic Loewenstein Occupational Therapy Cognitive Assessment (DLOTCA)", value: "dlocta" },
        { label: "Dynamic Loewenstein Occupational Therapy Cognitive Assessment – Geriatric Version (DLOTCA-G)", value: "dloctag" },
        { label: "Chessington OT Neuropsych Assessment Battery (COTNAB)", value: "cotnab" },
        { label: "Rivermead Perceptual Assessment Battery (RPAB)", value: "rpab" },
        { label: "TechCare Digital Cognitive (DCOG)", value: "dcog" },
        { label: "COGBAT (VTS)", value: "cogbat" }
      ]
    },

    /* ==================== 11. GOALS & PLAN SUMMARY ==================== */
    {
      name: "doctorGoals",
      label: "Goals",
      type: "input",
      placeholder: "Enter goals"
    },
    {
      name: "doctorPlan",
      label: "Plan",
      type: "input",
      placeholder: "Enter treatment plan"
    }
  ]
};

console.log(schema)
  return (
    <CommonFormBuilder
      schema={schema}
      values={formData}
      onChange={(field, value) =>
        setFormData(prev => ({
          ...prev,
          [field]: value
        }))
      }
      layout="nested"
      assessmentRegistry={{
        mmse: OTMMSEAssessment,
        moca: MoCAAssessment,
        casp: CASPAssessment,
        slums: DLOTCAForm,
        lotca: LOTCAForm,
        dlocta: DLOTCAFullAssessment,
        dloctag: DLOTCA_G_Full,
        cotnab: COTNABAssessment,
        rpab: RPAB_Assessment,
        dcog: DCOGAssessment,
        cogbat: COGBATAssessment,
        rlar: RLARAssessment,
        gcs:GlasgowComaScale,
        crs:JFKComaRecoveryScale,
        phq9:PHQ9Assessment,
        gad:GAD7Assessment,
        dass:DASS21Assessment,
        isia:ISIAssessment,
        ess:ESSAssessment,
        psqi:PSQIAssessment

      }}
    />
  );
}