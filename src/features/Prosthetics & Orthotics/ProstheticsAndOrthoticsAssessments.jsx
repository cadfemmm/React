// OrthoticsAssessment.jsx
import React, { useEffect, useState } from "react";
import CommonFormBuilder from "../CommonComponenets/FormBuilder";
import LowerExtremityOrthoticsPrescription from "./LowerExtremityorthoticsAssessment";
import UpperExtremityOrthoticsPrescription from "./UpperExtremityorthoticsAssessment";
import AboveKneeMeasurementForm from "./AboveKneeMeasurementForm";
import AnkleFootOrthosisMeasurementForm from "./AnkleFootOrthosisMeasurementForm";
import BelowKneeMeasurementForm from "./BelowKneeMeasurementForm";
import CorrectiveAccommodativeFootOrthosisForm from "./CorrectiveAccommodativeFootOrthosisForm";
import ScoliosisBraceMeasurementForm from "./ScoliosisBraceMeasurementForm";
import LowerLimbProsthesisPrescription from "./LowerExtremityProsthetics";
import MASForm from "../PT/components/MASForm";
import PTROMForm from "../PT/components/ROMForm";
import PatientCard from "../../shared/cards/PatientCard";
/* ===================== OPTIONS ===================== */

const YES_NO = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" }
];

const CLASSIFICATION = [
  { label: "Neuro", value: "neuro" },
  { label: "SCI", value: "sci" },
  { label: "MSD", value: "msd" },
  { label: "Others", value: "others" }
];

const ORTHOTICS_ASSESSMENT_REGISTRY = {
  lower_extremity_orthotics: LowerExtremityOrthoticsPrescription,
  upper_extremity_orthotics: UpperExtremityOrthoticsPrescription,
  lower_extremity_prosthotics:LowerLimbProsthesisPrescription,
  above_knee_measurement: AboveKneeMeasurementForm,
  ankle_foot_orthosis_measurement: AnkleFootOrthosisMeasurementForm,
  below_knee_measurement: BelowKneeMeasurementForm,
  corrective_accommodative_foot_orthosis: CorrectiveAccommodativeFootOrthosisForm,
  scoliosis_brace_measurement: ScoliosisBraceMeasurementForm,
  mas_scale: MASForm,
  rom: PTROMForm,
};


const PROGNOSIS = [
  { label: "Good", value: "good" },
  { label: "Fair", value: "fair" },
  { label: "Poor", value: "poor" }
];

const WALKING_AID = [
  { label: "Single Point Cane (SPC)", value: "spc" },
  { label: "Quadripod", value: "quadripod" },
  { label: "Walking Frame", value: "wf" },
  { label: "Wheelchair", value: "wheelchair" },
  { label: "None", value: "none" },
];

const WALKING_PATTERN = [
  { label: "Normal", value: "normal" },
  { label: "Hemiplegic", value: "hemiplegic" },
  { label: "Antalgic", value: "antalgic" },
  { label: "Ataxic", value: "ataxic" },
  { label: "Trendelenburg", value: "trendelenburg" }
];

const FOOT_CLEARANCE = [
  { label: "Normal", value: "normal" },
  { label: "Reduced", value: "reduced" },
  { label: "Dragging", value: "dragging" },
  { label: "Foot Drop", value: "foot_drop" }
];

const STEP_LENGTH = [
  { label: "Normal", value: "normal" },
  { label: "Shortened (affected side)", value: "short_affected" }
];

const STANCE_PHASE = [
  { label: "Normal", value: "normal" },
  { label: "Knee collapse", value: "knee_collapse" },
  { label: "Genu recurvatum", value: "genu_recurvatum" },
  { label: "Hip instability", value: "hip_instability" }
];

const SWING_PHASE = [
  { label: "Normal", value: "normal" },
  { label: "Circumduction", value: "circumduction" },
  { label: "Hip hiking", value: "hip_hiking" },
  { label: "Reduced flexion", value: "reduced_flexion" }
];

const WEIGHT_BEARING = [
  { label: "Symmetrical", value: "symmetrical" },
  { label: "Asymmetrical", value: "asymmetrical" }
];

const GAIT_BALANCE = [
  { label: "Good", value: "good" },
  { label: "Fair", value: "fair" },
  { label: "Poor", value: "poor" }
];

const ENDURANCE = [
  { label: "Good", value: "good" },
  { label: "Limited distance", value: "limited" },
  { label: "Fatigue early", value: "fatigue" }
];

const INDICATIONS = [
  { label: "Improve stability", value: "stability" },
  { label: "Improve foot clearance", value: "clearance" },
  { label: "Reduce pain", value: "pain" },
  { label: "Prevent deformity", value: "deformity" },
  { label: "Support weak limb", value: "support" }
];

const ORTHOSIS_TYPES = [
  "FO",
  "AFO Rigid",
  "AFO Hinged",
  "AFO PLS",
  "GRAFO",
  "KO",
  "KAFO",
  "WHO Functional",
  "WHO Resting",
  "WHO Anti-spastic",
  "Elbow ROM",
  "Shoulder Support",
  "LSO",
  "TLSO",
  "Cervical Collar"
].map(v => ({ label: v, value: v }));



/* ===================== SCHEMAS ===================== */

// const ORTHOTICS_CONTAINER_SCHEMA = {
//   title: "Patient Information",
//   sections: []
// };

// Common schema for both prosthetics and orthosis
const SUB_COMMON_SCHEMA = {
  title: "",

  actions: [
    { type: "back", label: "Back" },
    { type: "clear", label: "Clear" },
    { type: "save", label: "Save" }
  ],

  sections: [
    {
      title: "",

      fields: [
        {
          name: "chief_complaint",
          label: "Chief Complaint",
          type: "textarea"
        },

        {
          name: "hopi",
          label: "HOPI",
          type: "textarea"
        }
      ]
    },

    /* =====================================================
       FUNCTIONAL STATUS
    ===================================================== */

    {
      title: "Functional Status",

      fields: [
        {
          name: "functional_difficulty",
          label: "Functional Difficulty",
          type: "checkbox-group",
          options: [
            { label: "Walking", value: "walking" },
            { label: "Standing", value: "standing" },
            { label: "Transfer", value: "transfer" },
            { label: "Stairs", value: "stairs" },
            { label: "ADL", value: "adl" },
            { label: "RTW", value: "rtw" },
            { label: "Balance", value: "balance" },
            { label: "Others", value: "others" }
          ]
        },

        {
          name: "pain",
          label: "Pain",
          type: "radio",
          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          name: "pain_location",
          label: "Pain Location",
          type: "checkbox-group",
          showIf: {
            field: "pain",
            equals: "yes"
          },
          options: [
            { label: "Limb", value: "limb" },
            { label: "Joint", value: "joint" },
            { label: "Back", value: "back" },
            { label: "Stump", value: "stump" },
            { label: "General", value: "general" }
          ]
        },

        {
          name: "pain_score",
          label: "Pain Score",
          type: "scale-slider",
          min: 0,
          max: 10,
          showIf: {
            field: "pain",
            equals: "yes"
          }
        },

        {
          name: "pain_timing",
          label: "Pain Timing",
          type: "checkbox-group",
          showIf: {
            field: "pain",
            equals: "yes"
          },
          options: [
            { label: "Rest", value: "rest" },
            { label: "Movement", value: "movement" },
            { label: "Night", value: "night" },
            { label: "Weight-bearing", value: "weight_bearing" }
          ]
        },

        {
          name: "functional_status_remark",
          label: "Remark",
          type: "textarea"
        }
      ]
    },

    /* =====================================================
       MOBILITY
    ===================================================== */

    {
      title: "Mobility",

      fields: [
        {
          name: "mobility_status",
          label: "Mobility Status",
          type: "radio",
          options: [
            { label: "Independent", value: "independent" },
            { label: "Supervision", value: "supervision" },
            { label: "Min Assist", value: "min_assist" },
            { label: "Mod Assist", value: "mod_assist" },
            { label: "Max Assist", value: "max_assist" },
            { label: "Dependent", value: "dependent" }
          ]
        },

        {
          name: "assistive_device",
          label: "Assistive Device",
          type: "checkbox-group",
          options: [
            { label: "Cane", value: "cane" },
            { label: "Quadripod", value: "quadripod" },
            { label: "Walker", value: "walker" },
            { label: "Crutches", value: "crutches" },
            { label: "Wheelchair", value: "wheelchair" },
             { label: "None", value: "none" },
          ]
        },

        {
          name: "walking_distance",
          label: "Walking Distance",
          type: "radio",
          options: [
            { label: "Unable", value: "unable" },
            { label: "<10m", value: "less_10m" },
            { label: "Household", value: "household" },
            { label: "Community", value: "community" }
          ]
        },

        {
          name: "balance_issue",
          label: "Balance Issue",
          type: "radio",
          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          name: "fall_history",
          label: "Fall History",
          type: "radio",
          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          name: "fall_frequency",
          label: "Fall Frequency",
          type: "radio",
          // showIf: {
          //   field: "fall_history",
          //   equals: "yes"
          // },
          options: [
            { label: "Once", value: "once" },
            { label: "Occasional", value: "occasional" },
            { label: "Recurrent", value: "recurrent" }
          ]
        },

        {
          name: "mobility_remark",
          label: "Remark",
          type: "textarea"
        }
      ]
    },

    /* =====================================================
       GENERAL SCREENING
    ===================================================== */

    {
      title: "General Screening",

      fields: [
        {
          name: "hearing",
          label: "Hearing",
          type: "radio",
          options: [
            { label: "Normal", value: "normal" },
            { label: "Impaired", value: "impaired" }
          ]
        },

        {
          name: "vision",
          label: "Vision",
          type: "radio",
          options: [
            { label: "Normal", value: "normal" },
            { label: "Impaired", value: "impaired" }
          ]
        },

        {
          name: "hand_function",
          label: "Hand Function",
          type: "radio",
          options: [
            { label: "Normal", value: "normal" },
            { label: "Impaired", value: "impaired" }
          ]
        },

        {
          name: "cognitive",
          label: "Cognitive",
          type: "radio",
          options: [
            { label: "Normal", value: "normal" },
            { label: "Impaired", value: "impaired" }
          ]
        },

        {
          name: "fatigue_level",
          label: "Fatigue Level",
          type: "radio",
          options: [
            { label: "None", value: "none" },
            { label: "Mild", value: "mild" },
            { label: "Moderate", value: "moderate" },
            { label: "Severe", value: "severe" }
          ]
        },

        {
          name: "general_screening_remark",
          label: "Remark",
          type: "textarea"
        }
      ]
    },

    /* =====================================================
       LIMB CONDITION
    ===================================================== */

    {
      title: "Limb Condition",

      fields: [
        {
          name: "skin_condition",
          label: "Skin Condition",
          type: "checkbox-group",
          options: [
            { label: "Normal", value: "normal" },
            { label: "Redness", value: "redness" },
            { label: "Wound", value: "wound" },
            { label: "Scar", value: "scar" },
            { label: "Sensitive", value: "sensitive" }
          ]
        },

        {
          name: "sensation_issue",
          label: "Sensation Issue",
          type: "radio",
          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          name: "sound_limb_condition",
          label: "Sound Limb Condition",
          type: "checkbox-group",
          options: [
            { label: "Normal", value: "normal" },
            { label: "Pain", value: "pain" },
            { label: "Weakness", value: "weakness" },
            { label: "Wound", value: "wound" },
            { label: "Deformity", value: "deformity" }
          ]
        },

        {
          name: "limb_condition_remark",
          label: "Remark",
          type: "textarea"
        }
      ]
    },

    /* =====================================================
       FUNCTIONAL & ENVIRONMENTAL PROFILE
    ===================================================== */

    {
      title: "Functional & Environmental Profile",

      fields: [
        {
          name: "home_environment",
          label: "Home Environment",
          type: "checkbox-group",
          options: [
            { label: "Flat", value: "flat" },
            { label: "Stairs", value: "stairs" },
            { label: "Uneven", value: "uneven" },
            { label: "Narrow space", value: "narrow_space" }
          ]
        },

        {
          name: "occupational_activity_level",
          label: "Occupational Activity Level",
          type: "radio",
          options: [
            { label: "Sedentary", value: "sedentary" },
            { label: "Light", value: "light" },
            { label: "Moderate", value: "moderate" },
            { label: "Heavy", value: "heavy" }
          ]
        },

        {
          name: "compliance_to_devices",
          label: "Compliance To Devices",
          type: "radio",
          options: [
            { label: "Good", value: "good" },
            { label: "Partial", value: "partial" },
            { label: "Poor", value: "poor" },
            { label: "Not Applicable", value: "na" }
          ]
        },

        {
          name: "functional_environment_remark",
          label: "Remark",
          type: "textarea"
        }
      ]
    },

    /* =====================================================
       SOCIAL HISTORY
    ===================================================== */

    {
      title: "Social History",

      fields: [
        {
          name: "marital_status",
          label: "Marital Status",
          type: "input",
          readOnly: true
        },

        {
          name: "dependent_children_status",
          label: "Dependent Children Status",
          type: "input",
          readOnly: true
        },

        {
          name: "job_status",
          label: "Job Status",
          type: "input",
          readOnly: true
        },

        {
          name: "social_history_remark",
          label: "Remark",
          type: "textarea"
        }
      ]
    }
  ]
};

const OBJ_COMMON_SCHEMA = [
  /* =====================================================
     MUSCLE STRENGTH
  ===================================================== */

  {
    type: "subheading",
    label: "Muscle Strength"
  },

  {
    name: "mmt_upper_limb",
    label: "MMT Upper Limb (R/L)",
    type: "input"
  },

  {
    name: "mmt_lower_limb",
    label: "MMT Lower Limb (R/L)",
    type: "input"
  },

  {
    name: "affected_area_weakness",
    label: "Affected Area (Weakness)",
    type: "checkbox-group",
    options: [
      { label: "Shoulder", value: "shoulder" },
      { label: "Elbow", value: "elbow" },
      { label: "Wrist", value: "wrist" },
      { label: "Hip", value: "hip" },
      { label: "Knee", value: "knee" },
      { label: "Ankle", value: "ankle" },
      { label: "Others", value: "others" }
    ]
  },

  {
    name: "grip_strength_right",
    label: "Grip Strength (Right)",
    type: "input"
  },

  {
    name: "grip_strength_left",
    label: "Grip Strength (Left)",
    type: "input"
  },

  {
    name: "muscle_strength_remarks",
    label: "Remarks",
    type: "textarea"
  },

  /* =====================================================
     TONE & TIGHTNESS
  ===================================================== */

  {
    type: "subheading",
    label: "Tone & Tightness"
  },

 {
            type: "row",
            compact: true,
            fields: [
              {
                name: "pe_muscle_tone_side",
                label: "Muscle Tone",
                type: "checkbox-group",
                position: "side",
                options: [
                  { label: "Right", value: "right" },
                  { label: "Left", value: "left" },
                ],
              },
            ],
          },
          {
            type: "row",
            compact: true,
            fields: [
              {
                name: "pe_muscle_tone_right",
                label: "Right",
                type: "radio",
                showIf: { field: "pe_muscle_tone_side", includes: "right" },
                options: [
                  { label: "Normal", value: "normal" },
                  { label: "Hypotonia", value: "hypotonia" },
                  { label: "Hypertonia", value: "hypertonia" },
                ],
              },
              {
                name: "pe_muscle_tone_left",
                label: "Left",
                type: "radio",
                showIf: { field: "pe_muscle_tone_side", includes: "left" },
                options: [
                  { label: "Normal", value: "normal" },
                  { label: "Hypotonia", value: "hypotonia" },
                  { label: "Hypertonia", value: "hypertonia" },
                ],
              },
            ],
          },
          {
            type: "row",
            compact: true,
            fields: [
              {
                name: "pe_muscle_tone_comment_right",
                label: "Muscle Tone Comment – Right",
                type: "input",
                showIf: {
                  field: "pe_muscle_tone_right",
                  oneOf: ["hypotonia", "hypertonia"],
                  and: { field: "pe_muscle_tone_side", includes: "right" },
                },
              },
              {
                name: "pe_muscle_tone_comment_left",
                label: "Muscle Tone Comment – Left",
                type: "input",
                showIf: {
                  field: "pe_muscle_tone_left",
                  oneOf: ["hypotonia", "hypertonia"],
                  and: { field: "pe_muscle_tone_side", includes: "left" },
                },
              },
            ],
          },
          {
            name: "pe_mas_launcher",
            label: "",
            type: "assessment-launcher",
            options: [{ label: "Modified Ashworth Scale (MAS)", value: "mas_scale" }],
          },

  {
    name: "tightness",
    label: "Tightness",
    type: "radio",
    options: [
      { label: "No", value: "no" },
      { label: "Yes", value: "yes" }
    ]
  },

  {
    name: "tone_tightness_remarks",
    label: "Remarks",
    type: "textarea"
  },

  /* =====================================================
     RANGE OF MOTION
  ===================================================== */

  {
    type: "subheading",
    label: "Range Of Motion"
  },

  {
    name: "rom_launcher",
    label: "",
    type: "assessment-launcher",
    options: [
      {
        label: "Range Of Motion (ROM)",
        value: "rom"
      }
    ]
  },

  {
    name: "contracture",
    label: "Contracture",
    type: "checkbox-group",
    options: [
      { label: "Shoulder", value: "shoulder" },
      { label: "Elbow", value: "elbow" },
      { label: "Wrist", value: "wrist" },
      { label: "Hip", value: "hip" },
      { label: "Knee", value: "knee" },
      { label: "Ankle", value: "ankle" }
    ]
  },

  {
    name: "contracture_angle",
    label: "Contracture Angle",
    type: "number",
    showIf: {
      field: "contracture",
      hasValue: true
    }
  },

  {
    name: "rom_remarks",
    label: "Remarks",
    type: "textarea"
  },

  /* =====================================================
     SENSORY
  ===================================================== */

  {
    type: "subheading",
    label: "Sensory"
  },

  {
    name: "sensation",
    label: "Sensation",
    type: "radio",
    options: [
      { label: "Intact", value: "intact" },
      { label: "Reduced", value: "reduced" },
      { label: "Altered", value: "altered" }
    ]
  },

  {
    name: "proprioception",
    label: "Proprioception",
    type: "radio",
    options: [
      { label: "Intact", value: "intact" },
      { label: "Impaired", value: "impaired" }
    ]
  },

  {
    name: "sensory_remarks",
    label: "Remarks",
    type: "textarea"
  },

  /* =====================================================
     GAIT OBSERVATION
  ===================================================== */

  {
    type: "subheading",
    label: "Gait Observation"
  },

  {
    name: "mobility_status",
    label: "Mobility Status",
    type: "radio",
    options: [
      { label: "Independent", value: "independent" },
      { label: "With Aid", value: "with_aid" },
      { label: "Wheelchair", value: "wheelchair" },
      { label: "Unable", value: "unable" }
    ]
  },

  {
    name: "weight_bearing",
    label: "Weight Bearing",
    type: "radio",
    options: [
      { label: "Full", value: "full" },
      { label: "Partial", value: "partial" },
      { label: "Non-weight Bearing", value: "non_weight_bearing" }
    ]
  },

  {
    name: "gait_pattern",
    label: "Gait Pattern",
    type: "checkbox-group",
    options: [
      { label: "Normal", value: "normal" },
      { label: "Antalgic", value: "antalgic" },
      { label: "Hemiplegic", value: "hemiplegic" },
      { label: "Ataxic", value: "ataxic" },
      { label: "Others", value: "others" }
    ]
  },

  {
    name: "gait_deviation",
    label: "Gait Deviation",
    type: "checkbox-group",
    options: [
      { label: "Foot Drop", value: "foot_drop" },
      { label: "Circumduction", value: "circumduction" },
      { label: "Hip Hiking", value: "hip_hiking" },
      { label: "Knee Hyperextension", value: "knee_hyperextension" },
      { label: "Toe Drag", value: "toe_drag" },
      { label: "Others", value: "others" }
    ]
  },

  {
    name: "step_length",
    label: "Step Length",
    type: "radio",
    options: [
      { label: "Symmetrical", value: "symmetrical" },
      { label: "Reduced", value: "reduced" }
    ]
  },

  {
    name: "trunk_control",
    label: "Trunk Control",
    type: "radio",
    options: [
      { label: "Good", value: "good" },
      { label: "Fair", value: "fair" },
      { label: "Poor", value: "poor" }
    ]
  },

  {
    name: "postural",
    label: "Postural",
    type: "textarea"
  },

  {
    name: "vicon_report",
    label: "Vicon Report",
    type: "textarea",
    readOnly: true
  },

  {
    name: "gait_remarks",
    label: "Remarks",
    type: "textarea"
  },

  /* =====================================================
     JOINT ASSESSMENT
  ===================================================== */

  {
    type: "subheading",
    label: "Joint Assessment"
  },

  {
    name: "joint",
    label: "Joint",
    type: "single-select",
    options: [
      { label: "Shoulder Right", value: "shoulder_right" },
      { label: "Shoulder Left", value: "shoulder_left" },
      { label: "Elbow Right", value: "elbow_right" },
      { label: "Elbow Left", value: "elbow_left" },
      { label: "Wrist Right", value: "wrist_right" },
      { label: "Wrist Left", value: "wrist_left" },
      { label: "Hip Right", value: "hip_right" },
      { label: "Hip Left", value: "hip_left" },
      { label: "Knee Right", value: "knee_right" },
      { label: "Knee Left", value: "knee_left" },
      { label: "Ankle Right", value: "ankle_right" },
      { label: "Ankle Left", value: "ankle_left" }
    ]
  },

  {
    name: "stability",
    label: "Stability",
    type: "radio",
    options: [
      { label: "Stable", value: "stable" },
      { label: "Mild Instability", value: "mild_instability" },
      { label: "Severe Instability", value: "severe_instability" }
    ]
  },

  {
    name: "deformity",
    label: "Deformity",
    type: "checkbox-group",
    options: [
      { label: "None", value: "none" },
      { label: "Varus", value: "varus" },
      { label: "Valgus", value: "valgus" },
      { label: "Equinus", value: "equinus" },
      { label: "Flexion", value: "flexion" }
    ]
  },

  {
    name: "swelling",
    label: "Swelling",
    type: "radio",
    options: [
      { label: "No", value: "no" },
      { label: "Yes", value: "yes" }
    ]
  },

  {
    name: "tenderness",
    label: "Tenderness",
    type: "radio",
    options: [
      { label: "No", value: "no" },
      { label: "Yes", value: "yes" }
    ]
  },

  {
    name: "joint_assessment_remarks",
    label: "Remarks",
    type: "textarea"
  }
];

const ASS_COMMON_SCHEMA = [
  /* =====================================================
     GENERAL ASSESSMENT
  ===================================================== */

  // {
  //   type: "subheading",
  //   label: "Assessment Summary"
  // },

  {
    name: "problem_listing",
    label: "Problem Listing",
    type: "textarea",
    readOnly: true
  },

  {
    name: "clinical_impression",
    label: "Clinical Impression",
    type: "textarea"
  },

  {
    name: "rehab_potential",
    label: "Rehab Potential",
    type: "single-select",
    options: [
      { label: "UL", value: "ul" },
      { label: "LL", value: "ll" },
      { label: "Others", value: "others" }
    ]
  },

  {
    name: "assessment_remarks",
    label: "Remarks",
    type: "textarea"
  },

  // /* =====================================================
  //    AMPUTEE ASSESSMENT
  // ===================================================== */

  // {
  //   type: "subheading",
  //   label: "Amputee Assessment",

  //   showIf: {
  //     field: "case_type",
  //     equals: "amputee"
  //   }
  // },

  // {
  //   name: "lower_limb_mmt",
  //   label: "MMT Lower Limb",
  //   type: "input",
  //   readOnly: true,

  //   showIf: {
  //     field: "case_type",
  //     equals: "amputee"
  //   }
  // },

  // {
  //   name: "upper_limb_mmt",
  //   label: "MMT Upper Limb",
  //   type: "input",
  //   readOnly: true,

  //   showIf: {
  //     field: "case_type",
  //     equals: "amputee"
  //   }
  // },

  // {
  //   name: "rom",
  //   label: "ROM",
  //   type: "input",

  //   showIf: {
  //     field: "case_type",
  //     equals: "amputee"
  //   }
  // },

  // {
  //   name: "tone",
  //   label: "Tone",
  //   type: "input",
  //   readOnly: true,

  //   showIf: {
  //     field: "case_type",
  //     equals: "amputee"
  //   }
  // },

  // {
  //   name: "sensation",
  //   label: "Sensation",
  //   type: "input",
  //   readOnly: true,

  //   showIf: {
  //     field: "case_type",
  //     equals: "amputee"
  //   }
  // },

  // {
  //   name: "skin_condition",
  //   label: "Skin Condition",
  //   type: "checkbox-group",

  //   showIf: {
  //     field: "case_type",
  //     equals: "amputee"
  //   },

  //   options: [
  //     {
  //       label: "Itchy/Dry in Creases",
  //       value: "dry_creases"
  //     },
  //     {
  //       label: "Scaly/Silvery",
  //       value: "silvery"
  //     },
  //     {
  //       label: "Brownish/Swollen",
  //       value: "swollen"
  //     },
  //     {
  //       label: "Hot/Red/Painful",
  //       value: "painful"
  //     },
  //     {
  //       label: "Rough/Tiny Bumps",
  //       value: "rough"
  //     }
  //   ]
  // },

  // {
  //   name: "wound",
  //   label: "Wound",
  //   type: "image",

  //   showIf: {
  //     field: "case_type",
  //     equals: "amputee"
  //   }
  // }
];

const PLAN_COMMON_SCHEMA = [
  /* =====================================================
     GOAL
  ===================================================== */

  // {
  //   type: "subheading",
  //   label: "Goal & Intervention Plan"
  // },

  {
    name: "goal",
    label: "Goal",
    type: "radio",
    options: [
      { label: "Short Term", value: "short_term" },
      { label: "Long Term", value: "long_term" }
    ]
  },

  /* =====================================================
     INTERVENTION REQUIRED
  ===================================================== */

  {
    name: "intervention_required",
    label: "Intervention Required",
    type: "single-select",
    options: [
      { label: "Prescription", value: "prescription" },
      { label: "Repair", value: "repair" },
      { label: "No Intervention", value: "no_intervention" }
    ]
  },

  {
    name: "prescription_type",
    label: "Prescription Type",
    type: "single-select",

    showIf: {
      field: "intervention_required",
      equals: "prescription"
    },

    options: [
      { label: "Prosthetic", value: "prosthetic" },
      { label: "Orthotic", value: "orthotic" }
    ]
  },

  /* =====================================================
     READINESS FOR MEASUREMENT
  ===================================================== */

  {
    name: "readiness_for_measurement",
    label: "Readiness for Measurement",
    type: "single-select",

    options: [
      {
        label: "Suitable for Immediate Measurement",
        value: "immediate_measurement"
      },

      {
        label: "Requires Training Before Measurement",
        value: "requires_training"
      },

      {
        label: "Defer Prescription",
        value: "defer_prescription"
      }
    ]
  },

  {
    name: "reason_training_required",
    label: "Reason if Training Required",
    type: "input",

    showIf: {
      field: "readiness_for_measurement",
      equals: "requires_training"
    },

    placeholder:
      "Strengthening / Balance training / Stump shaping / ROM improvement / Prosthetic training / Others"
  },

  /* =====================================================
     TRAINING
  ===================================================== */

  {
    name: "training",
    label: "Training",
    type: "input",

    placeholder:
      "Stump bandaging / Prosthetic donning & doffing / Gait training / Strengthening / Others"
  },

  /* =====================================================
     EDUCATION
  ===================================================== */

  {
    name: "education",
    label: "Education",
    type: "input",

    placeholder:
      "Stump care / Skin care / Prosthetic education / Orthotic education / Others"
  },

  /* =====================================================
     REMARKS
  ===================================================== */

  {
    name: "plan_remarks",
    label: "Remarks",
    type: "textarea"
  }
];

const FOLLOW_UP_COMMON_SCHEMA = [
  {
    name: "adjustment",
    label: "Adjustment",
    type: "radio",
    options: [
      {label: "Yes", value: "yes"},
      {label: "No", value: "no"}
    ]
  },
  {
    name: "adjustment_date",
    label: "Adjustment Date",
    type: "date"
  },
  {
    name: "remarks",
    label: "Remarks",
    type: "textarea"
  }
]

//  ORTHOSIS SCHEMAS
const ORTHOTICS_SUBJECTIVE_SCHEMA = {
  title: "",

  sections: [
    /* =====================================================
       PREVIOUS ORTHOSIS
    ===================================================== */

    {
      title: "Previous Orthosis",

      fields: [
        {
          name: "previous_orthosis",
          label: "Previous Orthosis",
          type: "radio",

          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          name: "previous_orthosis_other_issue",
          label: "Other Issue",
          type: "textarea"
        }
      ]
    },

    /* =====================================================
       ORTHOSIS USAGE
    ===================================================== */

    {
      title: "Orthosis Usage",

      showIf: {
        field: "previous_orthosis",
        equals: "yes"
      },

      fields: [
        {
          name: "orthosis_wearing_time",
          label: "Wearing Time",
          type: "single-select",

          options: [
            { label: "Not using", value: "not_using" },
            { label: "<2h", value: "less_2h" },
            { label: "2–6h", value: "between_2_6h" },
            { label: ">6h", value: "more_6h" }
          ]
        },

        {
          name: "skin_issue_with_orthosis",
          label: "Skin Issue With Orthosis",
          type: "radio",

          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          name: "current_orthosis_issue",
          label: "Current Orthosis Issue",
          type: "checkbox-group",

          options: [
            { label: "Pain", value: "pain" },
            { label: "Poor Fit", value: "poor_fit" },
            { label: "Heavy", value: "heavy" },
            { label: "Not Effective", value: "not_effective" },
            { label: "Broken", value: "broken" }
          ]
        },

        {
          name: "orthosis_usage_remark",
          label: "Remark",
          type: "textarea"
        }
      ]
    },

    /* =====================================================
       GAIT & CONTROL
    ===================================================== */

    {
      title: "Gait & Control",

      fields: [
        {
          name: "gait_issue",
          label: "Gait Issue",
          type: "checkbox-group",

          options: [
            { label: "Toe Drag", value: "toe_drag" },
            { label: "Knee Buckling", value: "knee_buckling" },
            { label: "Hyperextension", value: "hyperextension" },
            { label: "Inversion", value: "inversion" },
            { label: "Circumduction", value: "circumduction" },
            { label: "Poor Balance", value: "poor_balance" }
          ]
        },

        {
          name: "gait_issue_other",
          label: "Other Gait Issue",
          type: "textarea"
        },

        {
          name: "spasticity",
          label: "Spasticity",
          type: "single-select",

          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          name: "gait_previous_orthosis",
          label: "Previous Orthosis",
          type: "single-select",

          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          name: "gait_other_issue",
          label: "Other Issue",
          type: "textarea"
        }
      ]
    },

    /* =====================================================
       IF PREVIOUS ORTHOSIS = YES
    ===================================================== */

    {
      title: "Usage",

      showIf: {
        field: "gait_previous_orthosis",
        equals: "yes"
      },

      fields: [
        {
          name: "usage_wearing_time",
          label: "Wearing Time",
          type: "single-select",

          options: [
            { label: "Not using", value: "not_using" },
            { label: "<2h", value: "less_2h" },
            { label: "2–6h", value: "between_2_6h" },
            { label: ">6h", value: "more_6h" }
          ]
        },

        {
          name: "usage_skin_issue_with_orthosis",
          label: "Skin Issue with Orthosis",
          type: "single-select",

          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          name: "usage_current_orthosis_issue",
          label: "Current Orthosis Issue",
          type: "checkbox-group",

          options: [
            { label: "Pain", value: "pain" },
            { label: "Poor Fit", value: "poor_fit" },
            { label: "Heavy", value: "heavy" },
            { label: "Not Effective", value: "not_effective" },
            { label: "Broken", value: "broken" }
          ]
        },

        {
          name: "usage_remark",
          label: "Remark",
          type: "textarea"
        }
      ]
    }
  ]
};

const ORTHO_OBJECTIVE_SCHEMA = {
  title: "",
  actions: SUB_COMMON_SCHEMA.actions,

  sections: [
    {
      fields: OBJ_COMMON_SCHEMA.concat([
        /* =====================================================
           REGION / TYPE
        ===================================================== */

        {
          name: "region",
          label: "Region/Type",
          type: "checkbox-group",

          options: [
            { label: "Upper Limb", value: "upper_limb" },
            { label: "Lower Limb", value: "lower_limb" },
            { label: "Spinal", value: "spinal" }
          ]
        },

        {
          name: "side",
          label: "Side",
          type: "checkbox-group",

          options: [
            { label: "Right", value: "right" },
            { label: "Left", value: "left" },
            { label: "Bilateral", value: "bilateral" }
          ]
        },

        {
          name: "level",
          label: "Level",
          type: "radio",

          options: [
            { label: "FO", value: "fo" },
            { label: "AFO", value: "afo" },
            { label: "KO", value: "ko" },
            { label: "KAFO", value: "kafo" },
            { label: "Wrist-Hand", value: "wrist_hand" },
            { label: "Elbow", value: "elbow" },
            { label: "Shoulder", value: "shoulder" },
            { label: "TLSO", value: "tlso" },
            { label: "LSO", value: "lso" },
            { label: "Cervical", value: "cervical" }
          ]
        },

        {
          name: "indication",
          label: "Indication",
          type: "checkbox-group",

          options: [
            { label: "Shoulder Sublux", value: "shoulder_sublux" },
            { label: "Prevent Sublux", value: "prevent_sublux" },
            { label: "Weakness", value: "weakness" },
            { label: "Spasticity", value: "spasticity" },
            { label: "Pain", value: "pain" },
            { label: "Instability", value: "instability" },
            { label: "Deformity", value: "deformity" },
            { label: "Post-OP", value: "post_op" }
          ]
        },

        {
          name: "control_issue",
          label: "Control Issue",
          type: "checkbox-group",

          options: [
            { label: "Foot Drop", value: "foot_drop" },
            { label: "Knee Hyperextension", value: "knee_hyperextension" },
            { label: "Knee Instability", value: "knee_instability" },
            { label: "Limited ROM", value: "limited_rom" },
            { label: "Contracture", value: "contracture" },
            { label: "Poor Balance", value: "poor_balance" }
          ]
        },

        {
          name: "pain_score",
          label: "Pain Score",
          type: "scale-slider",
          min: 0,
          max: 10
        },

        /* =====================================================
           STUMP MANAGEMENT
        ===================================================== */

        {
          type: "subheading",
          label: "Stump Management"
        },

{
          name: "stump_picture",
          label: "Stump Picture",
          type: "attach-file",
          accept: "application/pdf,image/*",
          multiple: false,
          previewSize: { width: 400, height: 400 },
          hideInputAfterSelect: true
        },

        {
          name: "stump_management_remark",
          label: "Remarks",
          type: "textarea"
        },

        /* =====================================================
           FUNCTIONAL OBSERVATION
        ===================================================== */

        {
          type: "subheading",
          label: "Functional Observation"
        },

        {
          name: "foot_clearance",
          label: "Foot Clearance",
          type: "radio",

          options: [
            { label: "Normal", value: "normal" },
            { label: "Reduced", value: "reduced" },
            { label: "Absent", value: "absent" }
          ]
        },

        {
          name: "ankle_control",
          label: "Ankle Control",
          type: "checkbox-group",

          options: [
            { label: "Normal", value: "normal" },
            { label: "Supination", value: "supination" },
            { label: "Pronation", value: "pronation" },
            { label: "Foot Drop", value: "foot_drop" }
          ]
        },

        {
          name: "knee_control",
          label: "Knee Control",
          type: "radio",

          options: [
            { label: "Stable", value: "stable" },
            { label: "Buckling", value: "buckling" },
            { label: "Hyperextension", value: "hyperextension" }
          ]
        },

        {
          name: "hip_hiking",
          label: "Hip Hiking",
          type: "single-select",

          options: [
            { label: "None", value: "none" },
            { label: "Mild", value: "mild" },
            { label: "Moderate", value: "moderate" },
            { label: "Severe", value: "severe" }
          ]
        },

        {
          name: "weight_bearing",
          label: "Weight Bearing",
          type: "radio",

          options: [
            { label: "Full", value: "full" },
            { label: "Partial", value: "partial" },
            { label: "Unable", value: "unable" }
          ]
        },

        {
          name: "trunk_control_observation",
          label: "Trunk Control",
          type: "checkbox-group",

          options: [
            { label: "Normal", value: "normal" },
            { label: "Forward Lean", value: "forward_lean" },
            { label: "Lateral Lean", value: "lateral_lean" },
            { label: "Poor Stability", value: "poor_stability" },
            { label: "Excessive Sway", value: "excessive_sway" }
          ]
        },

        {
          name: "upper_limb_function",
          label: "Upper Limb Function",
          type: "checkbox-group",

          options: [
            { label: "Normal Arm Swing", value: "normal_arm_swing" },
            { label: "Reduced Arm Swing", value: "reduced_arm_swing" },
            { label: "Uses Walking Aid", value: "uses_walking_aid" },
            { label: "Weight Support On Aid", value: "weight_support_on_aid" },
            { label: "Guarding Position", value: "guarding_position" }
          ]
        },

        {
          name: "functional_observation_remark",
          label: "Remark",
          type: "textarea"
        },

        /* =====================================================
           ORTHOTIC CHECK
        ===================================================== */

        {
          name: "using_orthosis",
          label: "Using Orthosis",
          type: "radio",

          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          type: "subheading",
          label: "Orthotic Check",

          showIf: {
            field: "using_orthosis",
            equals: "yes"
          }
        },

        {
          name: "orthosis_fit",
          label: "Orthosis Fit",
          type: "radio",

          showIf: {
            field: "using_orthosis",
            equals: "yes"
          },

          options: [
            { label: "Good", value: "good" },
            { label: "Loose", value: "loose" },
            { label: "Tight", value: "tight" },
            { label: "Not Applicable", value: "na" }
          ]
        },

        {
          name: "skin_reaction",
          label: "Skin Reaction",
          type: "checkbox-group",

          showIf: {
            field: "using_orthosis",
            equals: "yes"
          },

          options: [
            { label: "None", value: "none" },
            { label: "Redness", value: "redness" },
            { label: "Pressure Mark", value: "pressure_mark" },
            { label: "Skin Breakdown", value: "skin_breakdown" }
          ]
        },

        {
          name: "effectiveness",
          label: "Effectiveness",
          type: "radio",

          showIf: {
            field: "using_orthosis",
            equals: "yes"
          },

          options: [
            { label: "Effective", value: "effective" },
            { label: "Partially Effective", value: "partially_effective" },
            { label: "Not Effective", value: "not_effective" },
            { label: "Not Applicable", value: "na" }
          ]
        },

        {
          name: "orthotic_check_remark",
          label: "Remark",
          type: "textarea",

          showIf: {
            field: "using_orthosis",
            equals: "yes"
          }
        }
      ])
    }
  ]
};

const ORTHO_ASSESSMENT_SCHEMA = {
  title: "",
  actions: SUB_COMMON_SCHEMA.actions,

  sections: [
    {
      fields: ASS_COMMON_SCHEMA.concat([
        /* =====================================================
           CASE TYPE
        ===================================================== */

        {
          name: "case_type",
          label: "Case Type",
          type: "radio",

          options: [
            { label: "Amputee", value: "amputee" },
            { label: "Non-amputee", value: "non_amputee" }
          ]
        },

        /* =====================================================
           NON-AMPUTEE ASSESSMENT
        ===================================================== */

        {
          type: "subheading",
          label: "Non-Amputee Assessment",

          showIf: {
            field: "case_type",
            equals: "non_amputee"
          }
        },

        {
          name: "indication",
          label: "Indication",
          type: "checkbox-group",

          showIf: {
            field: "case_type",
            equals: "non_amputee"
          },

          options: [
            { label: "Foot Drop", value: "foot_drop" },
            { label: "Knee Instability", value: "knee_instability" },
            { label: "Pain", value: "pain" },
            { label: "Deformity", value: "deformity" },
            { label: "Others", value: "others" }
          ]
        },

        {
          name: "control_needed",
          label: "Control Needed",
          type: "radio",

          showIf: {
            field: "case_type",
            equals: "non_amputee"
          },

          options: [
            { label: "Minimal", value: "minimal" },
            { label: "Moderate", value: "moderate" },
            { label: "Maximum", value: "maximum" }
          ]
        },

        {
          name: "existing_orthosis_issue",
          label: "Existing Orthosis Issue",
          type: "checkbox-group",

          showIf: {
            field: "case_type",
            equals: "non_amputee"
          },

          options: [
            { label: "Poor Fit", value: "poor_fit" },
            { label: "Pain", value: "pain" },
            { label: "Not Effective", value: "not_effective" },
            { label: "Broken", value: "broken" },
            { label: "None", value: "none" },
          ]
        },

        {
          name: "non_amputee_assessment_remark",
          label: "Remarks",
          type: "textarea",

          showIf: {
            field: "case_type",
            equals: "non_amputee"
          }
        },
      ])
    }
  ]
};

const ORTHO_PLAN_SCHEMA = {
  title: "",
  actions: SUB_COMMON_SCHEMA.actions,

  sections: [
    {
      fields: PLAN_COMMON_SCHEMA.concat([
        /* =====================================================
           ORTHOTIC PRESCRIPTION
        ===================================================== */

        {
          type: "subheading",
          label: "Orthotic Prescription",

          showIf: {
            field: "prescription_type",
            equals: "orthotic"
          }
        },

        {
          name: "orthosis_category",
          label: "Orthosis Category",
          type: "single-select",

          showIf: {
            field: "prescription_type",
            equals: "orthotic"
          },

          options: [
            { label: "Ready-Made", value: "ready_made" },
            { label: "Custom-Made", value: "custom_made" }
          ]
        },

        {
          name: "orthosis_type",
          label: "Orthosis Type",
          type: "single-select",

          showIf: {
            field: "prescription_type",
            equals: "orthotic"
          },

          options: [
            { label: "FO", value: "fo" },
            { label: "AFO Rigid", value: "afo_rigid" },
            { label: "AFO Hinged", value: "afo_hinged" },
            { label: "AFO PLS", value: "afo_pls" },
            { label: "GRAFO", value: "grafo" },
            { label: "KO", value: "ko" },
            { label: "KAFO", value: "kafo" },
            { label: "WHO Functional", value: "who_functional" },
            { label: "WHO Resting", value: "who_resting" },
            { label: "WHO Anti-spastic", value: "who_anti_spastic" },
            { label: "Elbow ROM", value: "elbow_rom" },
            { label: "Shoulder Support", value: "shoulder_support" },
            { label: "LSO", value: "lso" },
            { label: "TLSO", value: "tlso" },
            { label: "Cervical Collar", value: "cervical_collar" }
          ]
        },

        {
          name: "item",
          label: "Item",
          type: "single-select",

          showIf: {
            field: "orthosis_category",
            equals: "ready_made"
          },

          options: [
            { label: "Others", value: "others" }
          ]
        },

        {
          name: "item_others",
          label: "Others",
          type: "textarea",

          showIf: {
            field: "item",
            equals: "others"
          }
        },

        {
          name: "casting_date",
          label: "Casting Date",
          type: "date",

          showIf: {
            field: "orthosis_category",
            equals: "custom_made"
          }
        },

        {
          name: "fitting_date",
          label: "Fitting Date",
          type: "date",
          readOnly: true,

          showIf: {
            field: "orthosis_category",
            equals: "custom_made"
          }
        },

        {
          name: "follow_up_date",
          label: "Follow-up Date",
          type: "single-select",

          showIf: {
            field: "prescription_type",
            equals: "orthotic"
          },

          options: [
            { label: "2 weeks", value: "2_weeks" },
            { label: "4 weeks", value: "4_weeks" },
            { label: "Others", value: "others" }
          ]
        },

        {
          name: "follow_up_others",
          label: "Other Follow-up",
          type: "textarea",

          showIf: {
            field: "follow_up_date",
            equals: "others"
          }
        },

        {
          name: "upload_measurement_form",
          label: "Upload Measurement Form",
          type: "attach-file",

          accept: "application/pdf,image/*",

          showIf: {
            field: "prescription_type",
            equals: "orthotic"
          }
        },

        {
          name: "training_in_orthosis_use",
          label: "Training in Orthosis Use",
          type: "radio",

          showIf: {
            field: "prescription_type",
            equals: "orthotic"
          },

          options: [
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" }
          ]
        },

        {
          name: "orthotic_prescription_remarks",
          label: "Remarks",
          type: "textarea",

          showIf: {
            field: "prescription_type",
            equals: "orthotic"
          }
        },

        /* =====================================================
           SUPPLIER WORKFLOW
        ===================================================== */

        {
          type: "subheading",
          label: "Supplier Workflow",

          showIf: {
            field: "intervention_required",
            equals: "prescription"
          }
        },

        {
          name: "generate_memo",
          label: "Generate Memo",
          type: "button",

          showIf: {
            field: "intervention_required",
            equals: "prescription"
          }
        },

        {
          name: "request_quotation",
          label: "Request for Quotation",
          type: "button",

          showIf: {
            field: "intervention_required",
            equals: "prescription"
          }
        }
      ])
    }
  ]
};

const ORTHO_FOLLOW_UP_SCHEMA = {
  title: "",
  actions: SUB_COMMON_SCHEMA.actions,
  sections: [
    {
      fields: FOLLOW_UP_COMMON_SCHEMA.concat([
        {
          name: "othosis_checkbox",
          type: "checkbox-group",
          options: [
            {label: "Review Existing Orthosis", value: "existing_orthosis"},
          ]
        },
        {
          name: "fitting_issue_checkbox",
          type: "checkbox-group",
          options: [
            {label:"Pressure", value: "pressure"},
            {label: "Loose", value: "loose"},
            {label: "Discomfort", value: "discomfort"}
          ]
        },
        {
          name: "gait_issue_checkbox",
          type: "checkbox-group",
          options: [
            {label:"Gait Deviation Observed", value: "gait_deviation"},
            {label: "Skin Issue Related to Orthosis", value: "skin_orthosis"},
            {label: "Request New Orthosis", value: "request_new_orthosis"},
            {label: "Reassessment After", value: "reassessment_after"},
            {label: "Others", value: "others"}
          ]
        },
        {
          name: "others",
          label: "Others",
          type: "textarea",
          showIf: {
            field: "gait_issue_checkbox",
            equals: "others"
          }
        }
      ])
    }
  ]
}
/* ===================== PROSTHETICS SCHEMAS ===================== */
const PROSTHETICS_SUBJECTIVE_SCHEMA = {
  title: "",

  sections: [
    /* =====================================================
       AMPUTEE SECTION
    ===================================================== */

    {
      title: "Amputee Section",

      fields: [
        {
          name: "amputation_level",
          label: "Amputation Level",
          type: "picture-selector",

          options: [
            {
              label: "Partial Foot",
              value: "partial_foot"
            },

            {
              label: "Transtibial",
              value: "transtibial"
            },

            {
              label: "Knee Disarticulation",
              value: "knee_disarticulation"
            },

            {
              label: "Transfemoral",
              value: "transfemoral"
            },

            {
              label: "Upper Limb",
              value: "upper_limb"
            }
          ]
        },

        {
          name: "amputation_side",
          label: "Side",
          type: "checkbox-group",

          options: [
            { label: "Right", value: "right" },
            { label: "Left", value: "left" },
            { label: "Bilateral", value: "bilateral" }
          ]
        },

        {
          name: "stump_condition",
          label: "Stump Condition",
          type: "checkbox-group",

          options: [
            { label: "Healed", value: "healed" },
            { label: "Wound", value: "wound" },
            { label: "Swelling", value: "swelling" },
            { label: "Redness", value: "redness" },
            { label: "Sensitive", value: "sensitive" },
            { label: "Flabby", value: "flabby" }
          ]
        },

        {
          name: "stump_pain",
          label: "Stump Pain",
          type: "radio",

          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          name: "phantom_pain",
          label: "Phantom Pain",
          type: "radio",

          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          name: "phantom_sensation",
          label: "Phantom Sensation",
          type: "radio",

          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          name: "volume_fluctuation",
          label: "Volume Fluctuation",
          type: "radio",

          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          name: "sweating",
          label: "Sweating",
          type: "radio",

          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          name: "amputee_other_issue",
          label: "Other Issue",
          type: "textarea"
        }
      ]
    },

    /* =====================================================
       PROSTHETIC USAGE
    ===================================================== */

    {
      title: "Prosthetic Usage",

      fields: [
        {
          name: "existing_user",
          label: "Existing User",
          type: "radio",

          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          name: "current_issue",
          label: "Current Issue",
          type: "checkbox-group",

          options: [
            { label: "Loose", value: "loose" },
            { label: "Pain", value: "pain" },
            { label: "Heavy", value: "heavy" },
            { label: "Unstable", value: "unstable" },
            { label: "Cosmetic", value: "cosmetic" },
            { label: "Broken", value: "broken" },
            { label: "Nil", value: "nil" }
          ]
        },

        {
          name: "wearing_time",
          label: "Wearing Time",
          type: "single-select",

          options: [
            { label: "Not using", value: "not_using" },
            { label: "<2h", value: "less_2h" },
            { label: "2–6h", value: "between_2_6h" },
            { label: ">6h", value: "more_6h" }
          ]
        },

        {
          name: "donning_ability",
          label: "Donning Ability",
          type: "radio",

          options: [
            { label: "Independent", value: "independent" },
            { label: "Assist", value: "assist" },
            { label: "Unable", value: "unable" }
          ]
        },

        {
          name: "suspension_issue",
          label: "Suspension Issue",
          type: "checkbox-group",

          options: [
            { label: "Slipping", value: "slipping" },
            { label: "Difficult Donning", value: "difficult_donning" },
            { label: "Pain", value: "pain" },
            { label: "Nil", value: "nil" }
          ]
        },

        {
          name: "prosthetic_usage_other_issue",
          label: "Other Issue",
          type: "textarea"
        }
      ]
    },

    /* =====================================================
       FUNCTIONAL LEVEL
    ===================================================== */

    {
      title: "Functional Level",

      fields: [
        {
          name: "mobility_level",
          label: "Mobility Level",
          type: "radio",

          options: [
            {
              label: "Wheelchair",
              value: "wheelchair"
            },

            {
              label: "Household Ambulator",
              value: "household_ambulator"
            },

            {
              label: "Community Ambulator",
              value: "community_ambulator"
            }
          ]
        },

        {
          name: "prosthetic_assistive_device",
          label: "Assistive Device",
          type: "checkbox-group",

          options: [
            { label: "None", value: "none" },
            { label: "Cane", value: "cane" },
            { label: "Walker", value: "walker" },
            { label: "Crutches", value: "crutches" }
          ]
        },

        {
          name: "prosthetic_balance_issue",
          label: "Balance Issue",
          type: "radio",

          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        }
      ]
    },

    /* =====================================================
       NON-AMPUTEE SECTION
    ===================================================== */

    {
      title: "Non-Amputee Section",

      fields: [
        {
          name: "region",
          label: "Region",
          type: "single-select",

          options: [
            { label: "Upper Limb", value: "upper_limb" },
            { label: "Lower Limb", value: "lower_limb" },
            { label: "Spine", value: "spine" },
            { label: "Footwear", value: "footwear" }
          ]
        },

        {
          name: "non_amputee_side",
          label: "Side",
          type: "checkbox-group",

          options: [
            { label: "Right", value: "right" },
            { label: "Left", value: "left" },
            { label: "Bilateral", value: "bilateral" },
            { label: "None", value: "none" }
          ]
        },

        {
          name: "main_problem",
          label: "Main Problem",
          type: "checkbox-group",

          options: [
            { label: "Foot Drop", value: "foot_drop" },
            { label: "Knee Instability", value: "knee_instability" },
            { label: "Pain", value: "pain" },
            { label: "Deformity", value: "deformity" },
            { label: "Weakness", value: "weakness" },
            { label: "Spasticity", value: "spasticity" },
            { label: "Post-op", value: "post_op" },
            { label: "Diabetic Foot", value: "diabetic_foot" },
            { label: "Others", value: "others" }
          ]
        },

        {
          name: "non_amputee_other_issue",
          label: "Other Issue",
          type: "textarea"
        }
      ]
    },

    /* =====================================================
       GAIT & CONTROL
    ===================================================== */

    {
      title: "Gait & Control",

      fields: [
        {
          name: "gait_issue",
          label: "Gait Issue",
          type: "checkbox-group",

          options: [
            { label: "Toe Drag", value: "toe_drag" },
            { label: "Knee Buckling", value: "knee_buckling" },
            { label: "Hyperextension", value: "hyperextension" },
            { label: "Inversion", value: "inversion" },
            { label: "Circumduction", value: "circumduction" },
            { label: "Poor Balance", value: "poor_balance" }
          ]
        },

        {
          name: "spasticity",
          label: "Spasticity",
          type: "radio",

          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        }
      ]
    }
  ]
};

const PROSTHETICS_OBJECTIVE_SCHEMA = {
  title: "",
  actions: SUB_COMMON_SCHEMA.actions,

  sections: [
    {
      fields: OBJ_COMMON_SCHEMA.concat([
        /* =====================================================
           CASE TYPE
        ===================================================== */

        {
          name: "case_type",
          label: "Case Type",
          type: "radio",

          options: [
            { label: "Amputee", value: "amputee" },
            { label: "Non-Amputee", value: "non_amputee" }
          ]
        },

        /* =====================================================
           STUMP ASSESSMENT
        ===================================================== */

        {
          type: "subheading",
          label: "Stump Assessment",

          showIf: {
            field: "case_type",
            equals: "amputee"
          }
        },

        {
          name: "stump_length",
          label: "Stump Length",
          type: "single-select",

          showIf: {
            field: "case_type",
            equals: "amputee"
          },

          options: [
            { label: "Short", value: "short" },
            { label: "Medium", value: "medium" },
            { label: "Long", value: "long" }
          ]
        },

        {
          name: "stump_length_value",
          label: "Stump Length Value",
          type: "input",

          showIf: {
            field: "case_type",
            equals: "amputee"
          }
        },

        {
          name: "stump_shape",
          label: "Stump Shape",
          type: "radio",

          showIf: {
            field: "case_type",
            equals: "amputee"
          },

          options: [
            { label: "Conical", value: "conical" },
            { label: "Cylindrical", value: "cylindrical" },
            { label: "Bulbous", value: "bulbous" }
          ]
        },

        {
          name: "stump_skin",
          label: "Stump Skin",
          type: "checkbox-group",

          showIf: {
            field: "case_type",
            equals: "amputee"
          },

          options: [
            { label: "Normal", value: "normal" },
            { label: "Redness", value: "redness" },
            { label: "Wound", value: "wound" },
            { label: "Scar", value: "scar" },
            { label: "Adherent", value: "adherent" }
          ]
        },

        {
          name: "stump_maturity",
          label: "Stump Maturity",
          type: "radio",

          showIf: {
            field: "case_type",
            equals: "amputee"
          },

          options: [
            { label: "Immature", value: "immature" },
            { label: "Mature", value: "mature" }
          ]
        },

        {
          name: "tenderness",
          label: "Tenderness",
          type: "radio",

          showIf: {
            field: "case_type",
            equals: "amputee"
          },

          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          name: "edema",
          label: "Edema",
          type: "radio",

          showIf: {
            field: "case_type",
            equals: "amputee"
          },

          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          name: "active_wound",
          label: "Active Wound",
          type: "radio",

          showIf: {
            field: "case_type",
            equals: "amputee"
          },

          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          name: "latest_wound_picture",
          label: "Latest Wound Picture",
          type: "attach-file",

          accept: "image/*",

          showIf: {
            field: "active_wound",
            equals: "yes"
          }
        },

        {
          name: "redundant_tissue",
          label: "Redundant Tissue",
          type: "radio",

          showIf: {
            field: "case_type",
            equals: "amputee"
          },

          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          name: "bony_prominence",
          label: "Bony Prominence",
          type: "radio",

          showIf: {
            field: "case_type",
            equals: "amputee"
          },

          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          name: "stump_assessment_others",
          label: "Others",
          type: "textarea",

          showIf: {
            field: "case_type",
            equals: "amputee"
          }
        },

        /* =====================================================
           STUMP CONTROL
        ===================================================== */

        {
          type: "subheading",
          label: "Stump Control",

          showIf: {
            field: "case_type",
            equals: "amputee"
          }
        },

        {
          name: "residual_limb_control",
          label: "Residual Limb Control",
          type: "radio",

          showIf: {
            field: "case_type",
            equals: "amputee"
          },

          options: [
            { label: "Good", value: "good" },
            { label: "Fair", value: "fair" },
            { label: "Poor", value: "poor" }
          ]
        },

        {
          name: "residual_limb_strength",
          label: "Residual Limb Strength",
          type: "radio",

          showIf: {
            field: "case_type",
            equals: "amputee"
          },

          options: [
            { label: "Good", value: "good" },
            { label: "Fair", value: "fair" },
            { label: "Poor", value: "poor" }
          ]
        },

        {
          name: "contracture",
          label: "Contracture",
          type: "single-select",

          showIf: {
            field: "case_type",
            equals: "amputee"
          },

          options: [
            { label: "None", value: "none" },
            { label: "Hip", value: "hip" },
            { label: "Knee", value: "knee" }
          ]
        },

        {
          name: "weight_bearing",
          label: "Weight Bearing",
          type: "radio",

          showIf: {
            field: "case_type",
            equals: "amputee"
          },

          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          name: "stump_control_remarks",
          label: "Remarks",
          type: "textarea",

          showIf: {
            field: "case_type",
            equals: "amputee"
          }
        },

        /* =====================================================
           ALIGNMENT / PROSTHETIC CHECK
        ===================================================== */

        {
          name: "using_prosthesis",
          label: "Using Prosthesis",
          type: "radio",

          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          type: "subheading",
          label: "Alignment / Prosthetic Check",

          showIf: {
            field: "using_prosthesis",
            equals: "yes"
          }
        },

        {
          name: "prosthesis_fit",
          label: "Prosthesis Fit",
          type: "radio",

          showIf: {
            field: "using_prosthesis",
            equals: "yes"
          },

          options: [
            { label: "Good", value: "good" },
            { label: "Loose", value: "loose" },
            { label: "Tight", value: "tight" }
          ]
        },

        {
          name: "suspension",
          label: "Suspension",
          type: "radio",

          showIf: {
            field: "using_prosthesis",
            equals: "yes"
          },

          options: [
            { label: "Secure", value: "secure" },
            { label: "Loose", value: "loose" }
          ]
        },

        {
          name: "alignment",
          label: "Alignment",
          type: "radio",

          showIf: {
            field: "using_prosthesis",
            equals: "yes"
          },

          options: [
            { label: "Good", value: "good" },
            { label: "Needs Adjustment", value: "needs_adjustment" }
          ]
        },

        {
          name: "issue_with_prosthetic",
          label: "Issue With Prosthetic",
          type: "textarea",

          showIf: {
            field: "using_prosthesis",
            equals: "yes"
          }
        },

        {
          name: "height_with_prosthesis",
          label: "Height With Prosthesis",
          type: "radio",

          showIf: {
            field: "using_prosthesis",
            equals: "yes"
          },

          options: [
            { label: "Equal", value: "equal" },
            { label: "Short", value: "short" },
            { label: "Long", value: "long" }
          ]
        },

        {
          name: "gait_with_prosthesis",
          label: "Gait With Prosthesis",
          type: "radio",

          showIf: {
            field: "using_prosthesis",
            equals: "yes"
          },

          options: [
            { label: "Stable", value: "stable" },
            { label: "Unstable", value: "unstable" }
          ]
        },

        {
          name: "k_level",
          label: "K-Level",
          type: "single-select",
          readOnly: false,

          showIf: {
            field: "using_prosthesis",
            equals: "yes"
          },

          options: [
            { label: "K0", value: "k0" },
            { label: "K1", value: "k1" },
            { label: "K2", value: "k2" },
            { label: "K3", value: "k3" },
            { label: "K4", value: "k4" }
          ]
        },

        {
          name: "stump_picture",
          label: "Stump Picture",
          type: "attach-file",

          accept: "image/*",

          showIf: {
            field: "using_prosthesis",
            equals: "yes"
          }
        },

        {
          name: "measurement_date",
          label: "Measurement Date",
          type: "date",

          showIf: {
            field: "using_prosthesis",
            equals: "yes"
          }
        }
      ])
    }
  ]
};

const PROSTHETICS_ASSESSMENT_SCHEMA = {
  title: "",
  actions: SUB_COMMON_SCHEMA.actions,

  sections: [
    {
      fields: ASS_COMMON_SCHEMA.concat([

        /* =====================================================
           STUMP CONCERN
        ===================================================== */

        {
          type: "subheading",
          label: "Stump & Functional Assessment"
        },

        {
          name: "stump_concern",
          label: "Stump Concern",
          type: "textarea"
        },

        {
          name: "suitable_for_restoration",
          label: "Suitable For Restoration",
          type: "radio",

          options: [
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
            { label: "Defer", value: "defer" }
          ]
        },

        {
          name: "donning_ability",
          label: "Donning Ability",
          type: "radio",

          options: [
            { label: "Independent", value: "independent" },
            { label: "Assist", value: "assist" },
            { label: "Unable", value: "unable" }
          ]
        },

        {
          name: "existing_prosthesis_issue",
          label: "Existing Prosthesis Issue",
          type: "checkbox-group",

          options: [
            { label: "None", value: "none" },
            { label: "Poor Fit", value: "poor_fit" },
            { label: "Pain", value: "pain" },
            { label: "Alignment Issue", value: "alignment_issue" },
            { label: "Broken", value: "broken" }
          ]
        },

        {
          name: "prosthetics_assessment_remark",
          label: "Remarks",
          type: "textarea"
        },
      ])
    }
  ]
};

const PROSTHETICS_PLAN_SCHEMA = {
  title: "",
  actions: SUB_COMMON_SCHEMA.actions,

  sections: [
    {
      fields: PLAN_COMMON_SCHEMA.concat([
        /* =====================================================
           CASE TYPE
        ===================================================== */

        {
          name: "case_type",
          label: "Case Type",
          type: "radio",

          options: [
            { label: "Amputee", value: "amputee" },
            { label: "Non-Amputee", value: "non_amputee" }
          ]
        },

        /* =====================================================
           PROSTHETIC PRESCRIPTION
        ===================================================== */

{
  type: "subheading",
  label: "Prosthetic Prescription",

  showIf: {
    field: "prescription_type",
    equals: "prosthetic"
  }
},

{
  name: "suspension",
  label: "Suspension",
  type: "single-select",

  showIf: {
    field: "prescription_type",
    equals: "prosthetic"
  },

  options: []
},

{
  name: "socket_design",
  label: "Socket Design",
  type: "single-select",

  showIf: {
    field: "prescription_type",
    equals: "prosthetic"
  },

  options: [
    {
      label: "Transtibial pp socket (ptb/pts/tsb)",
      value: "tt_pp_socket_ptb_pts_tsb"
    },
    {
      label: "Transtibial pp/pe double socket (ptb/pts/tsb)",
      value: "tt_pp_pe_double_socket_ptb_pts_tsb"
    },
    {
      label: "Transtibial laminated socket (ptb/pts/tsb)",
      value: "tt_laminated_socket_ptb_pts_tsb"
    },
    {
      label: "Transtibial laminated double socket",
      value: "tt_laminated_double_socket"
    },
    {
      label: "Knee disarticulation pp socket with pelite liner",
      value: "kd_pp_socket_pelite"
    },
    {
      label: "Knee disarticulation pp/pe double socket",
      value: "kd_pp_pe_double_socket"
    },
    {
      label: "Knee disarticulation laminated socket",
      value: "kd_laminated_socket"
    },
    {
      label: "Transfemoral pp socket (quadrilateral/ischial)",
      value: "tf_pp_socket_quad_ischial"
    },
    {
      label: "Transfemoral pp/pe double socket (quadrilateral/ischial)",
      value: "tf_pp_pe_double_socket_quad_ischial"
    },
    {
      label: "Transfemoral laminated socket (quadrilateral/ischial)",
      value: "tf_laminated_socket_quad_ischial"
    },
    {
      label: "Transfemoral laminated double socket +pp/pe (quadrilateral/ischial)",
      value: "tf_laminated_double_socket_pp_pe_quad_ischial"
    },
    {
      label: "Hip disarticulation pp socket",
      value: "hip_disarticulation_pp_socket"
    },
    {
      label: "Hip polypropylene double socket",
      value: "hip_polypropylene_double_socket"
    },
    {
      label: "Hip disarticulation laminated socket",
      value: "hip_disarticulation_laminated_socket"
    },
    {
      label: "Symes pp socket",
      value: "symes_pp_socket"
    },
    {
      label: "Symes laminated socket with pelite",
      value: "symes_laminated_socket_pelite"
    },
    {
      label: "Chopart socket",
      value: "chopart_socket"
    },
    {
      label: "Syme 3d socket",
      value: "syme_3d_socket"
    },
    {
      label: "Syme transparent check socket",
      value: "syme_transparent_check_socket"
    },
    {
      label: "Below knee carbon laminate socket",
      value: "bk_carbon_laminate_socket"
    },
    {
      label: "Below knee adjustable carbon laminate socket",
      value: "bk_adjustable_carbon_laminate_socket"
    },
    {
      label: "Below knee transparent check socket",
      value: "bk_transparent_check_socket"
    },
    {
      label: "Below knee 3d socket",
      value: "bk_3d_socket"
    },
    {
      label: "Above knee adjustable carbon laminate socket",
      value: "ak_adjustable_carbon_laminate_socket"
    },
    {
      label: "Above knee transparent check socket",
      value: "ak_transparent_check_socket"
    },
    {
      label: "Above knee 3d socket",
      value: "ak_3d_socket"
    },
    {
      label: "Through knee transparent check socket",
      value: "through_knee_transparent_check_socket"
    },
    {
      label: "Others",
      value: "others"
    }
  ]
},
{
  name: "suspension_other",
  label: "Specify Other Socket",
  type: "textarea",

  showIf: {
    field: "socket_design",
    equals: "others"
  }
},
{
  name: "knee_joint",
  label: "Knee Joint",
  type: "single-select",

  showIf: {
    field: "prescription_type",
    equals: "prosthetic"
  },

  options: [
    {
      label: "V one microprocessor-controlled knee",
      value: "v_one_microprocessor_knee"
    },
    {
      label: "Orion 2 knee joint",
      value: "orion_2_knee_joint"
    },
    {
      label: "Plié® 3 mpc electronic knee",
      value: "plie_3_mpc_electronic_knee"
    },
    {
      label: "Total knee 1900 polycentric knee with geometric locking system",
      value: "total_knee_1900_polycentric"
    },
    {
      label: "Total knee® 2100",
      value: "total_knee_2100"
    },
    {
      label: "3r78 polycentric knee joint with pneumatic swing phase control",
      value: "3r78_polycentric_pneumatic"
    },
    {
      label: "Endolite esk+ with pspc",
      value: "endolite_esk_pspc"
    },
    {
      label: "4 bar knee joint system (3r20)",
      value: "4bar_knee_3r20"
    },
    {
      label: "Four bar knee joint with integrated extension assist (3r20)",
      value: "4bar_extension_assist_3r20"
    },
    {
      label: "Mauch knee",
      value: "mauch_knee"
    },
    {
      label: "Modular polycentric ebs knee joint with hydraulic swing phase control (3r60)",
      value: "3r60_hydraulic_polycentric"
    },
    {
      label: "Compact semi-automatic knee lock (sakl)",
      value: "sakl"
    },
    {
      label: "Ofm1 se balance knee",
      value: "ofm1_se_balance"
    },
    {
      label: "Modular single axis knee joints with pneumatic swing phase control (3r92)",
      value: "3r92_single_axis_pneumatic"
    },
    {
      label: "Hy-stan 4 bar knee",
      value: "hy_stan_4bar"
    },
    {
      label: "Hy-stan 4 bar pneumatic knee",
      value: "hy_stan_4bar_pneumatic"
    },
    {
      label: "Graph-lite 4 bar knee with manual lock",
      value: "graph_lite_4bar_manual_lock"
    },
    {
      label: "Graph-lite 5 bar pneumatic knee high activity",
      value: "graph_lite_5bar_pneumatic"
    },
    {
      label: "Knee joint with extension assist",
      value: "knee_extension_assist"
    },
    {
      label: "Monocentric brake knee joint with stance flexion and manual",
      value: "monocentric_brake_knee"
    },
    {
      label: "Waterproof knee joint with lock",
      value: "waterproof_knee_lock"
    },
    {
      label: "Stand auto lock pneumatic knee",
      value: "stand_auto_lock_pneumatic"
    },
    {
      label: "4 bar mechanical knee joint (flat top)",
      value: "4bar_mechanical_flat_top"
    },
    {
      label: "Hydraulic polycentric knee joint with extension assist",
      value: "hydraulic_polycentric_extension_assist"
    },
    {
      label: "Polycentric knee joint",
      value: "polycentric_knee_joint"
    },
    {
      label: "Pneumatic polycentric knee joint",
      value: "pneumatic_polycentric_knee_joint"
    },
    {
      label: "Phoenix graph-lite 4 bar pneumatic knee",
      value: "phoenix_graph_lite_4bar"
    },
    {
      label: "Matik",
      value: "matik"
    },
    {
      label: "Hy-stan 4 bar knee disarticulation knee",
      value: "hy_stan_disarticulation"
    },
    {
      label: "4-bar knee (economy)",
      value: "4bar_knee_economy"
    },
    {
      label: "4 bar geometric straight lock pneumatic knee",
      value: "4bar_geometric_straight_lock"
    },
    {
      label: "Graph lite 4-bar pneumatic knee – disarticulation knee",
      value: "graph_lite_disarticulation"
    },
    {
      label: "Graph lite 4 bar pneumatic knee(mini)",
      value: "graph_lite_4bar_mini"
    },
    {
      label: "Others",
      value: "others"
    }
  ]
},
{
  name: "knee_joint_other",
  label: "Specify Other Knee Joint",
  type: "textarea",

  showIf: {
    field: "knee_joint",
    equals: "others"
  }
},

{
  name: "foot",
  label: "Foot",
  type: "single-select",

  showIf: {
    field: "prescription_type",
    equals: "prosthetic"
  },

  options: [
    { label: "1s101 sach+ foot", value: "1s101_sach_plus_foot" },
    { label: "2r8=m10 sach foot adapter", value: "2r8_m10_sach_adapter" },
    { label: "1h38 single axis foot", value: "1h38_single_axis_foot" },
    { label: "2r10 single axis foot adapter", value: "2r10_single_axis_adapter" },
    { label: "2r33 single axis foot adapter with screw", value: "2r33_single_axis_adapter_screw" },
    { label: "1d10 dynamic foot with adapter", value: "1d10_dynamic_foot_adapter" },
    { label: "1d35 dynamic motion foot", value: "1d35_dynamic_motion_foot" },
    { label: "Endolite multiflex foot", value: "endolite_multiflex_foot" },
    { label: "1wr95 water resistance foot", value: "1wr95_water_resistance_foot" },
    { label: "Sach foot", value: "sach_foot" },
    { label: "Single axis flat foot with toes", value: "single_axis_flat_foot_toes" },
    { label: "Quantum syme foot spring module", value: "quantum_syme_foot_spring" },
    { label: "1c63 triton low profile", value: "1c63_triton_low_profile" },
    { label: "Foot shell for triton low profile foot", value: "triton_low_profile_shell" },
    { label: "Senator prosthetic foot", value: "senator_prosthetic_foot" },
    { label: "Endurance foot", value: "endurance_foot" },
    { label: "Feather carbon foot", value: "feather_carbon_foot" },
    { label: "Trias energy storing foot (1c30)", value: "trias_energy_storing_1c30" },
    { label: "Adjustable single axis ankle", value: "adjustable_single_axis_ankle" },
    { label: "Foot adapter with screw connection", value: "foot_adapter_screw_connection" },
    { label: "Multiflex ankle standard", value: "multiflex_ankle_standard" },
    { label: "Multiflex snubber", value: "multiflex_snubber" },
    { label: "Hy –stan single axis ankle", value: "hy_stan_single_axis_ankle" },
    { label: "Hy –stan ultra-short ankle", value: "hy_stan_ultra_short_ankle" },
    { label: "Adjustable multi-axis ankle joint", value: "adjustable_multi_axis_ankle" },
    { label: "Mono-axis ankle joint", value: "mono_axis_ankle_joint" },
    { label: "Single axis with pyramid", value: "single_axis_with_pyramid" },
    { label: "Single axis ankle joint with pyramid", value: "single_axis_ankle_pyramid" },
    { label: "Graph-lite multi-axis ankle", value: "graph_lite_multi_axis_ankle" },
    { label: "Vacuum ankle adaptor", value: "vacuum_ankle_adaptor" },
    { label: "Hydraulic vacuum ankle", value: "hydraulic_vacuum_ankle" },
    { label: "Stainless steel pyramid base (max 125kg)", value: "stainless_steel_pyramid_base" },
    { label: "Proteor s.a.c.h foot", value: "proteor_sach_foot" },
    { label: "Sierra (fs1)", value: "sierra_fs1" },
    { label: "Highlander (fs3)", value: "highlander_fs3" },
    { label: "Freedom agilix (f15)", value: "freedom_agilix_f15" },
    { label: "Dynastar", value: "dynastar" },
    { label: "Dynastep", value: "dynastep" },
    { label: "Freedom dynadapt (f10)", value: "freedom_dynadapt_f10" },
    { label: "Rush hipro", value: "rush_hipro" },
    { label: "Rush rampage lp", value: "rush_rampage_lp" },
    { label: "Kinterra foot/ankle (rom)", value: "kinterra_rom" },
    { label: "Super sach foot", value: "super_sach_foot" },
    { label: "Motion control foot", value: "motion_control_foot" },
    { label: "Kare dynamic foot with ankle", value: "kare_dynamic_foot_ankle" },
    { label: "Carbon foot cover (for endurance foot)", value: "carbon_foot_cover_endurance" },
    { label: "Footshell for trias", value: "footshell_trias" },
    { label: "Footshell (proteor foot)", value: "footshell_proteor" },
    { label: "Rush foot cover", value: "rush_foot_cover" },
    { label: "Feather carbon foot cover", value: "feather_carbon_foot_cover" },
    { label: "Kare dynamic foot cover", value: "kare_dynamic_foot_cover" },
    { label: "Foot cover (tehsen)", value: "foot_cover_tehsen" },
    { label: "Foot shell (gen 3, gen 2, shockwave, kinnex)", value: "foot_shell_gen_series" },
    { label: "Foot cover", value: "foot_cover" },
    { label: "Foot shell (ossur foot shell)", value: "ossur_foot_shell" },
    { label: "Foot cover for cpi", value: "foot_cover_cpi" },
    { label: "High definition silicone foot cover for partial foot", value: "hdsf_partial_foot" },
    { label: "Hdsf (with carbon fibre foot plate)", value: "hdsf_carbon_plate" },
    { label: "High definition silicone foot cover for partial foot - high top ankle", value: "hdsf_partial_high_top" },
    { label: "Hdsf (with carbon fibre foot plate) - high top ankle", value: "hdsf_carbon_plate_high_top" },
    { label: "Others", value: "others" }
  ]
},
{
  name: "foot_other",
  label: "Specify Other Foot",
  type: "textarea",

  showIf: {
    field: "foot",
    equals: "others"
  }
},

{
  name: "additional_components",
  label: "Additional Components",
  type: "textarea",

  showIf: {
    field: "prescription_type",
    equals: "prosthetic"
  }
},

{
  name: "casting_date",
  label: "Casting Date",
  type: "date",

  showIf: {
    field: "prescription_type",
    equals: "prosthetic"
  }
},

{
  name: "fitting_date",
  label: "Fitting Date",
  type: "date",
  readOnly: true,

  showIf: {
    field: "prescription_type",
    equals: "prosthetic"
  }
},

{
  name: "follow_up_date",
  label: "Follow-up Date",
  type: "date",

  showIf: {
    field: "prescription_type",
    equals: "prosthetic"
  }
},

{
  name: "upload_measurement_form",
  label: "Upload Measurement Form",
  type: "attach-file",

  showIf: {
    field: "prescription_type",
    equals: "prosthetic"
  },

  accept: "application/pdf,image/*"
},

{
  name: "training_in_prosthesis_use",
  label: "Training in Prosthesis Use",
  type: "radio",

  showIf: {
    field: "prescription_type",
    equals: "prosthetic"
  },

  options: [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" }
  ]
},

{
  name: "prosthetic_prescription_remarks",
  label: "Remarks",
  type: "textarea",

  showIf: {
    field: "prescription_type",
    equals: "prosthetic"
  }
}
      ])
    }
  ]
};  

const PROSTHETICS_FOLLOW_UP_SCHEMA = {
  title: "",
  actions: SUB_COMMON_SCHEMA.actions,
  sections: [
    {
      fields: FOLLOW_UP_COMMON_SCHEMA.concat([
        {
          name: "stump_picture",
          label: "Stump Picture",
          type: "file-upload-modal"
        },
        {
          name: "measurement_date",
          label: "Measurement Date",
          type: "date"
        },
        {
          name: "stump_measurement_value",
          label: "Stump Measurement Value",
          type: "input"
        },
        // {
        //   name: "add_measurement",
        //   label: "Add Measurement",
        //   type: "button"
        // }
      ])
    }
  ]
}

const PROSTHETICS_CHECKOUT_SCHEMA = {
  title: "",
  actions: SUB_COMMON_SCHEMA.actions,
  sections: [
    {
      fields: [
        {type: "subheading", label: "Prosthetic Fit & Tolerance"},
        {
          name: "socket_fit",
          label: "Socket Fit",
          type: "radio",
          options: YES_NO
        },
        {
          name: "details",
          label: "Details",
          type: "textarea",
          showIf: {
            field: "socket_fit",
            equals: "yes"
          }
        },
        {
          name: "alignment",
          label: "Alignment",
          type: "radio",
          options: [
            {label: "Good", value:"good"},
            {label: "Poor", value: "poor"}
          ]
        },
        {
          name: "details",
          label: "Details",
          type: "textarea",
          showIf: {
            field: "alignment",
            equals: "poor"
          }
        },
        {
          name: "bony_prominence",
          label: "Bony Prominence/Pressure Sensitive Area",
          type: "radio",
          options: YES_NO
        },
        {
          name: "docuement",
          label: "Upload Image",
          type: "file-upload-modal",
          showIf: {
            field: "bony_prominence",
            equals: "yes"
          }
        },
        {type: "subheading", label: "Changing Body Position"},
        {
          name: "changing_body_position",
          label: "Changing Body Position From Lying Down",
          type: "radio",
          labelAbove: true,
          options: [
            {label: "Independent", value: "independent"},
            {label: "With Supervision", value: "super_vision"},
            {label: "Minimal Assist", value: "minimal_assist"},
            {label: "Moderate Assist", value: "moderate_assist"},
            {label: "Maximal Assist", value: "maximal_assist"}
          ]
        },
        {
          name: "from_squatting",
          label: "From Squatting or Kneeling",
          type: "radio",
          options: [
            {label: "Independent", value: "independent"},
            {label: "With Supervision", value: "super_vision"},
            {label: "Minimal Assist", value: "minimal_assist"},
            {label: "Moderate Assist", value: "moderate_assist"},
            {label: "Maximal Assist", value: "maximal_assist"}
          ]
        },
        {
          name: "from_sitting",
          label: "From Sitting or Standing",
          type: "radio",
          options: [
            {label: "Independent", value: "independent"},
            {label: "With Supervision", value: "super_vision"},
            {label: "Minimal Assist", value: "minimal_assist"},
            {label: "Moderate Assist", value: "moderate_assist"},
            {label: "Maximal Assist", value: "maximal_assist"}
          ]
        },
        {
          name: "rolling_over",
          label: "Rolling Over",
          type: "radio",
          options: [
            {label: "Independent", value: "independent"},
            {label: "With Supervision", value: "super_vision"},
            {label: "Minimal Assist", value: "minimal_assist"},
            {label: "Moderate Assist", value: "moderate_assist"},
            {label: "Maximal Assist", value: "maximal_assist"}
          ]
        },
        {
          name: "bending",
          label: "Bending",
          type: "radio",
          options: [
            {label: "Independent", value: "independent"},
            {label: "With Supervision", value: "super_vision"},
            {label: "Minimal Assist", value: "minimal_assist"},
            {label: "Moderate Assist", value: "moderate_assist"},
            {label: "Maximal Assist", value: "maximal_assist"}
          ]
        },
        {
          name: "shifting_body_garvity",
          label: "Shifting the Body's Centre of Gravity",
          type: "radio",
          labelAbove: true,
          options: [
            {label: "Independent", value: "independent"},
            {label: "With Supervision", value: "super_vision"},
            {label: "Minimal Assist", value: "minimal_assist"},
            {label: "Moderate Assist", value: "moderate_assist"},
            {label: "Maximal Assist", value: "maximal_assist"}
          ]
        },
        {
          name: "maintaining_body_position",
          label: "Maintaining a Body Position",
          type: "radio",
          labelAbove: true,
          options: [
            {label: "Good", value: "good"},
            {label: "Fair", value: "fair"},
            {label: "Poor", value: "poor"},
          ]
        },
        {
          name: "transferring_oneself",
          label: "Transferring Oneself",
          type: "radio",
          labelAbove: true,
          options: [
            {label: "Independent", value: "independent"},
            {label: "Supervision", value: "super_vision"},
            {label: "Contract Guard", value: "contract_guard"},
            {label: "Minimal Assist", value: "minimal_assist"},
            {label: "Moderate Assist", value: "moderate_assist"},
            {label: "Maximal Assist", value: "maximal_assist"},
            {label: "Total Assist", value: "total_assist"}
          ]
        },
        {type: "subheading", label: "Walking"},
        {
          name: "walking_short_distances",
          label: "Walking Short Distances",
          type: "radio",
          labelAbove: true,
          options: [
            {label: "Without Aid", value: "without_aid"},
            {label: "Walking Frame", value: "walking_frame"},
            {label: "Axillary Crutches", value: "axillary_crutches"},
            {label: "Elbow Crutches", value: "elbow_crutches"},
            {label: "Quadripod", value: "quadripod"},
            {label: "Walking Stick", value: "walking_stick"},
            {label: "Wheelchair", value: "wheelchair"}
          ]
        },
        {
          name: "walking_long_distances",
          label: "Walking Long Distances",
          type: "radio",
          labelAbove: true,
          options: [
            {label: "Without Aid", value: "without_aid"},
            {label: "Walking Frame", value: "walking_frame"},
            {label: "Axillary Crutches", value: "axillary_crutches"},
            {label: "Elbow Crutches", value: "elbow_crutches"},
            {label: "Quadripod", value: "quadripod"},
            {label: "Walking Stick", value: "walking_stick"},
            {label: "Wheelchair", value: "wheelchair"}
          ]
        },
        {
          name: "dressing",
          label: "Dressing (Donning/Doffing Prosthesis)",
          type: "radio",
          labelAbove: true,
          options: [
            {label: "Independent", value: "independent"},
            {label: "Assisted", value: "assisted"}
          ]
        },
        {type: "subheading", label: "Environmental Factors"},
        {
          name: "assistive_products",
          label: "Assistive Products",
          type: "radio",
          labelAbove: true,
          options:  [
            {label: "Wheelchair", value: "wheelchair"},
            {label: "Walking Frame", value: "walking_frame"},
            {label: "Axillary Crutches", value: "axillary_crutches"},
            {label: "Elbow Crutches", value: "elbow_crutches"},
            {label: "Quadripod", value: "quadripod"},
            {label: "Walking Stick", value: "walking_stick"}            
          ]
        },
        {
          name: "family_support",
          label: "Family Support",
          type: "radio",
          options: YES_NO
        }
      ]
    }
  ]
}

// const getConsentSchema = (assignmentType) => ({
//   title: assignmentType === "orthotics"
//     ? "Orthotics Status"
//     : "Prosthetic Status",

//   fields: [
//     {
//       type: "radio",
//       name: "prosthesis_restoration",
//       label: assignmentType === "orthotics" ? "Orthotics Restoration" : "Prosthesis Restoration",
//       options: [
//         { label: "New", value: "new" },
//         { label: "Repair", value: "repair" }
//       ]
//     },
//     {
//       type: "radio",
//       name: "inspire_scheme",
//       label: "Inspire Scheme",
//       options: [
//         { label: "Yes", value: "yes" },
//         { label: "No", value: "no" }
//       ]
//     },
//     {
//       name: "supplier_name",
//       label: "Supplier Name",
//       type: "single-select",
//       showIf: { field: "inspire_scheme", equals: "yes" },
//       options: [
//         { label: "Unit P&O PRPSB", value: "unit_po_prpsb" },
//         { label: "TehLin", value: "tehlin" },
//         { label: "Warisan Jasamedik", value: "warisan" },
//         { label: "Limb Brace", value: "limb_brace" },
//         { label: "Bioapps", value: "bioapps" },
//         { label: "Hasba Medik", value: "hasba" },
//         { label: "Restu Progresif", value: "restu" },
//         { label: "Central Limb", value: "central_limb" },
//         { label: "RS Alfa", value: "rs_alfa" },
//         { label: "Secure Logic Tech (SLT)", value: "slt" }
//       ]
//     },
//     { type: "date", name: "po_date", label: "PO Date" },
//     {
//       name: "visit_type",
//       label: "Type of Visit",
//       type: "radio",
//       labelAbove: true,
//       options: [
//         { label: "Walk-in", value: "walk_in" },
//         { label: "IA", value: "ia" },
//         { label: "Follow-Up", value: "follow_up" },
//         ...(assignmentType === "orthotics"
//           ? []
//           : [{ label: "Checkout", value: "checkout" }])
//       ]
//     }
//   ]
// });
/* ===================== COMPONENT ===================== */
const TAB_ORDER = ["subjective", "objective", "assessment", "plan"];

const TAB_META = {
  subjective:  { label: "Subjective"  },
  objective:   { label: "Objective"   },
  assessment:  { label: "Assessment"  },
  plan:        { label: "Plan"        },
};
export default function OrthoticsAssessment({ patient, onSubmit, onBack }) {
  const [values, setValues] = useState({ assignment_type: 'orthotics', amp_upper_limb_location: [],
  amp_lower_limb_location: [], });
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("subjective");
  const storageKey = patient ? `orthotics_draft_${patient.id}` : null;

  useEffect(() => {
    if (!storageKey) return;
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setValues(JSON.parse(saved).values || {});
    }
  }, [storageKey]);

  useEffect(() => {
    if (!patient) return;

    setValues(v => ({
      ...v,
      ul_mmt_r: patient.ul_mmt_r,
      ul_mmt_l: patient.ul_mmt_l,
      ll_mmt_r: patient.ll_mmt_r,
      ll_mmt_l: patient.ll_mmt_l,
      rom_auto: patient.rom,
      tone_auto: patient.tone,
      sensation_auto: patient.sensation,
      skin_auto: patient.skin
    }));
  }, [patient]);

  // Only sync tab when visit/assignment mode changes — not on every field edit (that was resetting SOA&P tabs to Subjective).
  useEffect(() => {
    if (values?.visit_type === "checkout" && values?.assignment_type === "prosthetics") {
      setActiveTab("checkout");
    } else if (values?.visit_type === "follow_up") {
      setActiveTab("follow_up");
    } else {
      setActiveTab("subjective");
    }
  }, [values?.visit_type, values?.assignment_type]);

  const onChange = (name, value) => {
    setValues(v => {
      const next = { ...v, [name]: value };
      if (name === "assignment_type" && value === "orthotics" && v.visit_type === "checkout") {
        delete next.visit_type;
      }
      return next;
    });
    // Orthotics has no checkout schema; avoid one frame with activeTab "checkout" + orthotics (crashes FormBuilder).
    if (name === "assignment_type" && value === "orthotics") {
      setActiveTab(t => (t === "checkout" ? "subjective" : t));
    }
  };

  const handleAction = (type) => {
    if (type === "back") onBack?.();
    if (type === "clear") {
      setValues({ assignment_type: 'orthotics',amp_upper_limb_location: [],
    amp_lower_limb_location: [], });
      setSubmitted(false);
      localStorage.removeItem(storageKey);
    }
    if (type === "save") {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ values, updatedAt: new Date() })
      );
    if (type === "next") {
      const idx = TAB_ORDER.indexOf(activeTab);
      if (idx < TAB_ORDER.length - 1) setActiveTab(TAB_ORDER[idx + 1]);
      return;
    }
      alert("Orthotics draft saved");
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    onSubmit?.(values);
    alert("Orthotics assessment submitted");
  };

const MERGED_PROSTHETICS_SUBJECTIVE_SCHEMA = {
  title: "",

  actions: SUB_COMMON_SCHEMA.actions,

  sections: [
    ...SUB_COMMON_SCHEMA.sections,

    ...PROSTHETICS_SUBJECTIVE_SCHEMA.sections
  ]
};

const MERGED_ORTHOTICS_SUBJECTIVE_SCHEMA = {
  title: "",

  actions: SUB_COMMON_SCHEMA.actions,

  sections: [
    ...SUB_COMMON_SCHEMA.sections,

    ...ORTHOTICS_SUBJECTIVE_SCHEMA.sections
  ]
};

const schemaMap =
  values.assignment_type === "orthotics"
    ? {
        
        subjective: MERGED_ORTHOTICS_SUBJECTIVE_SCHEMA,

        objective: ORTHO_OBJECTIVE_SCHEMA,

        assessment: ORTHO_ASSESSMENT_SCHEMA,

        plan: ORTHO_PLAN_SCHEMA,

        follow_up: ORTHO_FOLLOW_UP_SCHEMA,
      }
    : {
        
        subjective: MERGED_PROSTHETICS_SUBJECTIVE_SCHEMA,

        objective: PROSTHETICS_OBJECTIVE_SCHEMA,

        assessment: PROSTHETICS_ASSESSMENT_SCHEMA,

        plan: PROSTHETICS_PLAN_SCHEMA,

        follow_up: PROSTHETICS_FOLLOW_UP_SCHEMA,

        checkout: PROSTHETICS_CHECKOUT_SCHEMA,
      };

  const assessmentSchemaKey =
    values?.assignment_type === "orthotics" && values?.visit_type === "checkout"
      ? "subjective"
      : activeTab;
  const assessmentSchema =
    schemaMap[assessmentSchemaKey] ?? schemaMap.subjective;

  function PatientInfo({ patient, values, onChange }) {
    if (!patient) return null;
    return (
      <div style={{ marginBottom: 12 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 12,
          fontSize: 14
        }}>
          <div><b>Name:</b> {patient.name}</div>
          <div><b>IC:</b> {patient.id}</div>
          <div><b>DOB:</b> {patient?.dob}</div>
          <div><b>Age / Gender:</b> {patient?.age} / {patient?.sex}</div>
          <div><b>ICD:</b> {patient?.icd}</div>
          <div><b>Date of Assessment:</b> {patient?.date_of_assessment}</div>
          <div><b>Date of Onset:</b> {patient?.date_of_onset}</div>
          <div>
            <b>Duration of Diagnosis:</b>{" "}
            {patient?.date_of_onset}
          </div>
          <div><b>Primary Diagnosis:</b> {patient?.diagnosis_history || "-"}</div>
          <div><b>Secondary Diagnosis:</b> {patient?.medical_history || "-"}</div>

          <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <b>What do you want to perform?</b>
            <div style={{ display: 'flex', gap: 12 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <input
                  type="radio"
                  name="assignment_type"
                  value="orthotics"
                  checked={values.assignment_type === 'orthotics'}
                  onChange={(e) => onChange('assignment_type', e.target.value)}
                />
                Orthotics
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <input
                  type="radio"
                  name="assignment_type"
                  value="prosthetics"
                  checked={values.assignment_type === 'prosthetics'}
                  onChange={(e) => onChange('assignment_type', e.target.value)}
                />
                Prosthetics
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
  const activeTabIdx = TAB_ORDER.indexOf(activeTab);

  return (
    <div>
  <PatientCard
      patient={patient}
      department="P&O"
      assignmentType={values.assignment_type}
      onAssignmentTypeChange={(val) => onChange('assignment_type', val)}
    />
      {/* <CommonFormBuilder
        schema={getConsentSchema(values.assignment_type)}
        values={values}
        onChange={onChange}
      /> */}
      <div style={{
        display: "flex",
        gap: 12,
        justifyContent: "center",
        borderBottom: "1px solid #ddd",
        marginBottom: 12
      }}>
        {(
          (values?.visit_type === "checkout" && values.assignment_type === "prosthetics" )
          ? ["checkout"]
          : values?.visit_type === "follow_up"
          ? ["follow-up"]
          : ["subjective", "objective", "assessment", "plan"]
        ).map(tab => (
          <div
            key={tab}
            style={{
              padding: "10px 22px",
              fontWeight: 600,
              cursor: "pointer",
              color: activeTab === tab.replace("-", "_") ? "#2451b3" : "#0f172a",
              borderBottom: activeTab === tab.replace("-", "_") ? "3px solid #2451b3" : "none"
            }}
            onClick={() => setActiveTab(tab.replace('-', '_'))}
          >
            {tab.toUpperCase()}
          </div>
        ))}
      </div>

      <CommonFormBuilder
        schema={assessmentSchema}
        values={values}
        onChange={onChange}
        submitted={submitted}
        onAction={handleAction}
        assessmentRegistry={ORTHOTICS_ASSESSMENT_REGISTRY}
      >

        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
          <button
            style={{
              padding: "12px 32px",
              background: "#2563EB",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 700
            }}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </CommonFormBuilder>
    </div>
  );
}
