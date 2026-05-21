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
import BodyImage from "../../assets/General.png";
import AboveKnee from "../../assets/Upper Limb.png";
import BelowKnee from "../../assets/LowerLimb.png";
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
  scoliosis_brace_measurement: ScoliosisBraceMeasurementForm.apply,
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
fields: [
  /* ===================== CASE TYPE & DEVICE USAGE ===================== */

  {
    type: "subheading",
    label: "Case Type & Device Usage"
  },

  {
    name: "case_type",
    label: "Case Type",
    type: "radio",
    options: [
      { label: "Amputee", value: "amputee" },
      { label: "Non-amputee", value: "non_amputee" }
    ]
  },

  {
    name: "using_prosthesis",
    label: "Using Prosthesis",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" }
    ]
  },

  {
    name: "using_orthosis",
    label: "Using Orthosis",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" }
    ]
  },

  /* ===================== FUNCTIONAL STATUS ===================== */

  {
    type: "subheading",
    label: "Functional Status"
  },

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
    name: "functional_status_remarks",
    label: "Remarks",
    type: "textarea"
  },

  /* ===================== MOBILITY ===================== */

  {
    type: "subheading",
    label: "Mobility"
  },

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
    showIf: {
      field: "fall_history",
      equals: "yes"
    },
    options: [
      { label: "Once", value: "once" },
      { label: "Occasional", value: "occasional" },
      { label: "Recurrent", value: "recurrent" }
    ]
  },

  {
    name: "mobility_remarks",
    label: "Remarks",
    type: "textarea"
  },

  /* ===================== LIMB CONDITION ===================== */

  {
    type: "subheading",
    label: "Limb Condition"
  },

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
    name: "limb_condition_remarks",
    label: "Remarks",
    type: "textarea"
  }
]
    }
  ]
}

const OBJ_COMMON_SCHEMA = [

  /* ===================== CASE TYPE & DEVICE USAGE ===================== */

  {
    type: "subheading",
    label: "Case Type & Device Usage"
  },

  {
    name: "case_type",
    label: "Case Type",
    type: "radio",
    options: [
      { label: "Amputee", value: "amputee" },
      { label: "Non-amputee", value: "non_amputee" }
    ]
  },

  {
    name: "using_prosthesis",
    label: "Using Prosthesis",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" }
    ]
  },

  {
    name: "using_orthosis",
    label: "Using Orthosis",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" }
    ]
  },

  /* ===================== MUSCLE STRENGTH ===================== */

  {
    type: "subheading",
    label: "Muscle Strength"
  },

  {
    name: "strength_change",
    label: "Strength Change",
    type: "radio",
    options: [
      { label: "Improved", value: "improved" },
      { label: "Same", value: "same" },
      { label: "Reduced", value: "reduced" }
    ]
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
    name: "selected_mmt",
    label: "Selected MMT",
    type: "textarea"
  },

  {
    name: "grip_strength_change",
    label: "Grip Strength Change",
    type: "radio",
    options: [
      { label: "Improved", value: "improved" },
      { label: "Same", value: "same" },
      { label: "Reduced", value: "reduced" }
    ]
  },

  {
    name: "muscle_strength_remarks",
    label: "Remarks",
    type: "textarea"
  },

  /* ===================== TONE & TIGHTNESS ===================== */

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

  /* ===================== RANGE OF MOTION ===================== */

  {
    type: "subheading",
    label: "Range of Motion"
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

  /* ===================== SENSORY ===================== */

  {
    type: "subheading",
    label: "Sensory"
  },

  {
    name: "sensation_change",
    label: "Sensation Change",
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

  /* ===================== GAIT OBSERVATION ===================== */

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
    name: "assistive_device",
    label: "Assistive Device",
    type: "checkbox-group",
    options: [
      { label: "None", value: "none" },
      { label: "Cane", value: "cane" },
      { label: "Quadripod", value: "quadripod" },
      { label: "Walker", value: "walker" },
      { label: "Crutches", value: "crutches" },
      { label: "Wheelchair", value: "wheelchair" }
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
    type: "radio",
    options: [
      { label: "None", value: "none" },
      { label: "Mild", value: "mild" },
      { label: "Moderate", value: "moderate" },
      { label: "Severe", value: "severe" }
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
      { label: "Weight Support on Aid", value: "weight_support_on_aid" },
      { label: "Guarding Position", value: "guarding_position" }
    ]
  },

  {
    name: "gait_remarks",
    label: "Remarks",
    type: "textarea"
  },

  /* ===================== JOINT ASSESSMENT ===================== */

  {
    type: "subheading",
    label: "Joint Assessment"
  },

  {
    name: "joint_change",
    label: "Joint Change Since Last Review",
    type: "radio",
    options: [
      { label: "No Change", value: "no_change" },
      { label: "Improved", value: "improved" },
      { label: "Worse", value: "worse" }
    ]
  },

  {
    name: "joint_stability",
    label: "Joint Stability",
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
    name: "joint_swelling",
    label: "Joint Swelling",
    type: "radio",
    options: [
      { label: "No", value: "no" },
      { label: "Yes", value: "yes" }
    ]
  },

  {
    name: "joint_tenderness",
    label: "Joint Tenderness",
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
  }

];

const PLAN_COMMON_SCHEMA = [

  /* ===================== GOAL ===================== */

  {
    name: "goal",
    label: "Goal",
    type: "radio",
    options: [
      { label: "Short Term", value: "short_term" },
      { label: "Long Term", value: "long_term" }
    ]
  },

  /* ===================== INTERVENTION ===================== */

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

  /* ===================== TRAINING ===================== */

  {
    name: "training",
    label: "Training",
    type: "input",
    placeholder:
      "Stump bandaging / Prosthetic donning & doffing / Gait training / Others"
  },

  /* ===================== EDUCATION ===================== */

  {
    name: "education",
    label: "Education",
    type: "input",
    placeholder:
      "Stump bandaging / Prosthetic donning & doffing / Skin care / Others"
  },

  /* ===================== REMARKS ===================== */

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

  actions: SUB_COMMON_SCHEMA.actions,

  sections: [
    {
      fields: [

        /* ===================== CONDITION ===================== */

        {
          type: "subheading",
          label: "Condition",
          showIf: {
            field: "case_type",
            equals: "non_amputee"
          }
        },

        {
          name: "main_problem",
          label: "Main Problem",
          type: "checkbox-group",
          showIf: {
            field: "case_type",
            equals: "non_amputee"
          },
          options: [
            { label: "Foot drop", value: "foot_drop" },
            { label: "Knee instability", value: "knee_instability" },
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
          name: "condition_other_issue",
          label: "Other Issue",
          type: "textarea",
          showIf: {
            field: "case_type",
            equals: "non_amputee"
          }
        },

        /* ===================== GAIT & CONTROL ===================== */

        {
          type: "subheading",
          label: "Gait & Control",
          showIf: {
            field: "case_type",
            equals: "non_amputee"
          }
        },

        {
          name: "gait_issue",
          label: "Gait Issue",
          type: "checkbox-group",
          showIf: {
            field: "case_type",
            equals: "non_amputee"
          },
          options: [
            { label: "Toe drag", value: "toe_drag" },
            { label: "Knee buckling", value: "knee_buckling" },
            { label: "Hyperextension", value: "hyperextension" },
            { label: "Inversion", value: "inversion" },
            { label: "Circumduction", value: "circumduction" },
            { label: "Poor balance", value: "poor_balance" },
            { label: "Others", value: "others" }
          ]
        },

        {
          name: "spasticity",
          label: "Spasticity",
          type: "radio",
          showIf: {
            field: "case_type",
            equals: "non_amputee"
          },
          options: YES_NO
        },

        {
          name: "gait_control_other_issue",
          label: "Other Issue",
          type: "textarea",
          showIf: {
            field: "case_type",
            equals: "non_amputee"
          }
        },

        /* ===================== ORTHOSIS USAGE ===================== */

        {
          type: "subheading",
          label: "Orthosis Usage",
          showIf: {
            field: "using_orthosis",
            equals: "yes"
          }
        },

        {
          name: "orthosis_wearing_time",
          label: "Wearing Time",
          type: "radio",
          showIf: {
            field: "using_orthosis",
            equals: "yes"
          },
          options: [
            { label: "Not using", value: "not_using" },
            { label: "<2h", value: "less_2h" },
            { label: "2–6h", value: "between_2_6h" },
            { label: ">6h", value: "more_6h" }
          ]
        },

        {
          name: "skin_issue_with_orthosis",
          label: "Skin Issue with Orthosis",
          type: "radio",
          showIf: {
            field: "using_orthosis",
            equals: "yes"
          },
          options: YES_NO
        },

        {
          name: "current_orthosis_issue",
          label: "Current Orthosis Issue",
          type: "checkbox-group",
          showIf: {
            field: "using_orthosis",
            equals: "yes"
          },
          options: [
            { label: "Pain", value: "pain" },
            { label: "Poor fit", value: "poor_fit" },
            { label: "Heavy", value: "heavy" },
            { label: "Not effective", value: "not_effective" },
            { label: "Broken", value: "broken" }
          ]
        },

        {
          name: "orthosis_usage_remarks",
          label: "Remarks",
          type: "textarea",
          showIf: {
            field: "using_orthosis",
            equals: "yes"
          }
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

        /* ===================== ORTHOTIC CHECK ===================== */

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
            { label: "Not Applicable", value: "not_applicable" }
          ]
        },

        {
          name: "skin_reaction",
          label: "Skin Reaction",
          type: "radio",
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
          name: "device_effectiveness",
          label: "Device Effectiveness",
          type: "radio",
          showIf: {
            field: "using_orthosis",
            equals: "yes"
          },
          options: [
            { label: "Effective", value: "effective" },
            { label: "Partially Effective", value: "partially_effective" },
            { label: "Not Effective", value: "not_effective" },
            { label: "Not Applicable", value: "not_applicable" }
          ]
        },

        {
          name: "orthotic_check_remarks",
          label: "Remarks",
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

        /* ===================== ORTHOTIC ASSESSMENT ===================== */

        {
          type: "subheading",
          label: "Orthotic Assessment",
          showIf: {
            or: [
              {
                field: "case_type",
                equals: "non_amputee"
              },
              {
                field: "using_orthosis",
                equals: "yes"
              }
            ]
          }
        },

        {
          name: "orthotic_indication",
          label: "Indication",
          type: "checkbox-group",
          showIf: {
            or: [
              {
                field: "case_type",
                equals: "non_amputee"
              },
              {
                field: "using_orthosis",
                equals: "yes"
              }
            ]
          },
          options: [
            { label: "Foot drop", value: "foot_drop" },
            { label: "Knee instability", value: "knee_instability" },
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
            or: [
              {
                field: "case_type",
                equals: "non_amputee"
              },
              {
                field: "using_orthosis",
                equals: "yes"
              }
            ]
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
            or: [
              {
                field: "case_type",
                equals: "non_amputee"
              },
              {
                field: "using_orthosis",
                equals: "yes"
              }
            ]
          },
          options: [
            { label: "None", value: "none" },
            { label: "Poor fit", value: "poor_fit" },
            { label: "Pain", value: "pain" },
            { label: "Not effective", value: "not_effective" },
            { label: "Broken", value: "broken" }
          ]
        },

        {
          name: "orthotic_assessment_remarks",
          label: "Remarks",
          type: "textarea",
          showIf: {
            or: [
              {
                field: "case_type",
                equals: "non_amputee"
              },
              {
                field: "using_orthosis",
                equals: "yes"
              }
            ]
          }
        }

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

        /* ===================== ORTHOTIC PRESCRIPTION ===================== */

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
          name: "orthosis_item",
          label: "Item",
          type: "inventory-select",
          inventoryCategory: "orthosis",
          showIf: {
            field: "orthosis_category",
            equals: "ready_made"
          }
        },

        {
          name: "orthosis_item_other",
          label: "Other Item",
          type: "textarea",
          showIf: {
            field: "orthosis_item",
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
          helperText: "Casting Date + 5 working days",
          showIf: {
            field: "orthosis_category",
            equals: "custom_made"
          }
        },

        {
          name: "follow_up_date",
          label: "Follow-up Date",
          type: "radio",
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
          name: "follow_up_date_other",
          label: "Specify Follow-up",
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
          multiple: false,
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
          options: YES_NO
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

        /* ===================== SUPPLIER WORKFLOW ===================== */

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
          buttonText: "Generate Template",
          variant: "secondary",
          showIf: {
            field: "intervention_required",
            equals: "prescription"
          }
        },

        {
          name: "request_quotation",
          label: "Request for Quotation",
          type: "button",
          buttonText: "Send Email to Supplier",
          variant: "primary",
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
      fields: PLAN_COMMON_SCHEMA.concat([
          {
          name: "orthosis_category",
          label: "Orthosis Category",
          type: "radio",
          options: [
            { label: "Ready-Made", value: "ready_made" },
            { label: "Custom-Made", value: "custom_made" }
          ]
        },
        {
          name: "orthosis_type",
          label: "Orthosis Type",
          type: "multi-select-dropdown",
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
          name: "orthosis_item",
          label: "Item",
          type: "select-with-input",
          optionsFrom: "inventory",
          showIf: {
            field: "orthosis_category",
            equals: "ready_made"
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
          autoCalculate: {
            basedOn: "casting_date",
            addDays: 5
          },
          showIf: {
            field: "orthosis_category",
            equals: "custom_made"
          }
        },
        {
          name: "follow_up",
          label: "Follow-up",
          type: "checkbox-group",
          options: [
            { label: "2 Weeks", value: "2_weeks" },
            { label: "4 Weeks", value: "4_weeks" },
            { label: "Others", value: "others" }
          ],
          showIf: {
            field: "orthosis_category",
            equals: "custom_made"
          }
        },
        {
          name: "follow_up_other",
          label: "Other Follow-up",
          type: "input",
          showIf: {
            field: "follow_up",
            includes: "others"
          }
        },
        {
          name: "gait_issue_checkbox",
          type: "checkbox-group",
          options: [
            { label: "Review Existing Orthosis", value: "existing_orthosis" },
            { label: "Fitting issue (pressure / loose / discomfort)", value: "pressure" },
            { label: "Gait Deviation Observed", value: "gait_deviation" },
            { label: "Skin Issue Related to Orthosis", value: "skin_orthosis" },
            { label: "Request New Orthosis", value: "request_new_orthosis" },
            { label: "Reassessment After Therapy Progress", value: "reassessment_after" },
            { label: "Others", value: "others" }
          ]
        },
        {
          name: "others",
          label: "Specify",
          type: "textarea",
          showIf: {
            field: "gait_issue_checkbox",
            includes: "others"
          }
        },
        {
            name: "memo",
            label: "Generate MEMO",
            type: "button"
        }
      ])
    }
  ]
};
/* ===================== PROSTHETICS SCHEMAS ===================== */
const PROSTHETICS_SUBJECTIVE_SCHEMA = {
  title: "",

  actions: SUB_COMMON_SCHEMA.actions,

  sections: [
    {
      fields: [

        /* ===================== STUMP CONDITION ===================== */

        {
          type: "subheading",
          label: "Stump Condition",
          showIf: {
            field: "case_type",
            equals: "amputee"
          }
        },

        {
          name: "stump_side",
          label: "Side",
          type: "radio",
          showIf: {
            field: "case_type",
            equals: "amputee"
          },
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
          showIf: {
            field: "case_type",
            equals: "amputee"
          },
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
          showIf: {
            field: "case_type",
            equals: "amputee"
          },
          options: YES_NO
        },

        {
          name: "phantom_pain",
          label: "Phantom Pain",
          type: "radio",
          showIf: {
            field: "case_type",
            equals: "amputee"
          },
          options: YES_NO
        },

        {
          name: "phantom_sensation",
          label: "Phantom Sensation",
          type: "radio",
          showIf: {
            field: "case_type",
            equals: "amputee"
          },
          options: YES_NO
        },

        {
          name: "volume_fluctuation",
          label: "Volume Fluctuation",
          type: "radio",
          showIf: {
            field: "case_type",
            equals: "amputee"
          },
          options: YES_NO
        },

        {
          name: "sweating",
          label: "Sweating",
          type: "radio",
          showIf: {
            field: "case_type",
            equals: "amputee"
          },
          options: YES_NO
        },

        {
          name: "stump_other_issue",
          label: "Other Issue",
          type: "textarea",
          showIf: {
            field: "case_type",
            equals: "amputee"
          }
        },

        /* ===================== PROSTHETIC USAGE ===================== */

        {
          type: "subheading",
          label: "Prosthetic Usage",
          showIf: {
            field: "using_prosthesis",
            equals: "yes"
          }
        },

        {
          name: "existing_user",
          label: "Existing User",
          type: "radio",
          showIf: {
            field: "using_prosthesis",
            equals: "yes"
          },
          options: YES_NO
        },

        {
          name: "current_issue",
          label: "Current Issue",
          type: "checkbox-group",
          showIf: {
            field: "using_prosthesis",
            equals: "yes"
          },
          options: [
            { label: "Loose", value: "loose" },
            { label: "Pain", value: "pain" },
            { label: "Heavy", value: "heavy" },
            { label: "Unstable", value: "unstable" },
            { label: "Cosmetic", value: "cosmetic" },
            { label: "Broken", value: "broken" },
            { label: "Nil", value: "nil" },
            { label: "Others", value: "others" }
          ]
        },

        {
          name: "wearing_time",
          label: "Wearing Time",
          type: "radio",
          showIf: {
            field: "using_prosthesis",
            equals: "yes"
          },
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
          showIf: {
            field: "using_prosthesis",
            equals: "yes"
          },
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
          showIf: {
            field: "using_prosthesis",
            equals: "yes"
          },
          options: [
            { label: "Slipping", value: "slipping" },
            { label: "Difficult donning", value: "difficult_donning" },
            { label: "Pain", value: "pain" },
            { label: "Nil", value: "nil" },
            { label: "Others", value: "others" }
          ]
        },

        {
          name: "prosthetic_other_issue",
          label: "Other Issue",
          type: "textarea",
          showIf: {
            field: "using_prosthesis",
            equals: "yes"
          }
        },

        /* ===================== FUNCTIONAL LEVEL ===================== */

        {
          type: "subheading",
          label: "Functional Level",
          showIf: {
            field: "using_prosthesis",
            equals: "yes"
          }
        },

        {
          name: "mobility_level",
          label: "Mobility Level",
          type: "radio",
          showIf: {
            field: "using_prosthesis",
            equals: "yes"
          },
          options: [
            { label: "Wheelchair", value: "wheelchair" },
            { label: "Household Ambulator", value: "household_ambulator" },
            { label: "Community Ambulator", value: "community_ambulator" }
          ]
        },

        {
          name: "functional_level_assistive_device",
          label: "Assistive Device",
          type: "checkbox-group",
          showIf: {
            field: "using_prosthesis",
            equals: "yes"
          },
          options: [
            { label: "None", value: "none" },
            { label: "Cane", value: "cane" },
            { label: "Walker", value: "walker" },
            { label: "Crutches", value: "crutches" }
          ]
        },

        {
          name: "functional_balance_issue",
          label: "Balance Issue",
          type: "radio",
          showIf: {
            field: "using_prosthesis",
            equals: "yes"
          },
          options: YES_NO
        },

        {
          name: "functional_other_issue",
          label: "Other Issue",
          type: "textarea",
          showIf: {
            field: "using_prosthesis",
            equals: "yes"
          }
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

        /* ===================== STUMP ASSESSMENT ===================== */

        {
          type: "subheading",
          label: "Stump Assessment",
          showIf: {
            field: "case_type",
            equals: "amputee"
          }
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
          name: "volume_fluctuation",
          label: "Volume Fluctuation",
          type: "radio",
          showIf: {
            field: "case_type",
            equals: "amputee"
          },
          options: YES_NO
        },

        {
          name: "stump_tenderness",
          label: "Stump Tenderness",
          type: "radio",
          showIf: {
            field: "case_type",
            equals: "amputee"
          },
          options: YES_NO
        },

        {
          name: "edema",
          label: "Edema",
          type: "radio",
          showIf: {
            field: "case_type",
            equals: "amputee"
          },
          options: YES_NO
        },

        {
          name: "active_wound",
          label: "Active Wound",
          type: "radio",
          showIf: {
            field: "case_type",
            equals: "amputee"
          },
          options: YES_NO
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
          name: "stump_assessment_remarks",
          label: "Remarks",
          type: "textarea",
          showIf: {
            field: "case_type",
            equals: "amputee"
          }
        },

        /* ===================== ALIGNMENT / PROSTHETIC CHECK ===================== */

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
            { label: "Needs adjustment", value: "needs_adjustment" }
          ]
        },

        {
          name: "height_with_prosthesis",
          label: "Height with Prosthesis",
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
          label: "Gait with Prosthesis",
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
          name: "current_prosthetic_issue",
          label: "Current Prosthetic Issue",
          type: "checkbox-group",
          showIf: {
            field: "using_prosthesis",
            equals: "yes"
          },
          options: [
            { label: "Pain", value: "pain" },
            { label: "Poor fit", value: "poor_fit" },
            { label: "Loose", value: "loose" },
            { label: "Broken", value: "broken" },
            { label: "Heavy", value: "heavy" },
            { label: "Alignment", value: "alignment" },
            { label: "Cosmetic", value: "cosmetic" },
            { label: "Others", value: "others" }
          ]
        },

        {
          name: "prosthetic_check_remarks",
          label: "Remarks",
          type: "textarea",
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

        /* ===================== AMPUTEE ASSESSMENT ===================== */

        {
          type: "subheading",
          label: "Amputee Assessment",
          showIf: {
            field: "case_type",
            equals: "amputee"
          }
        },

        {
          name: "stump_concern",
          label: "Stump Concern",
          type: "textarea",
          showIf: {
            field: "case_type",
            equals: "amputee"
          }
        },

        {
          name: "suitable_for_restoration",
          label: "Suitable for Restoration",
          type: "radio",
          showIf: {
            field: "case_type",
            equals: "amputee"
          },
          options: [
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
            { label: "Defer", value: "defer" }
          ]
        },

        {
          name: "donning_ability_assessment",
          label: "Donning Ability",
          type: "radio",
          showIf: {
            field: "case_type",
            equals: "amputee"
          },
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
          showIf: {
            field: "case_type",
            equals: "amputee"
          },
          options: [
            { label: "None", value: "none" },
            { label: "Poor fit", value: "poor_fit" },
            { label: "Pain", value: "pain" },
            { label: "Alignment issue", value: "alignment_issue" },
            { label: "Broken", value: "broken" }
          ]
        },

        {
          name: "amputee_assessment_remarks",
          label: "Remarks",
          type: "textarea",
          showIf: {
            field: "case_type",
            equals: "amputee"
          }
        }

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

        /* ===================== PROSTHETIC PRESCRIPTION ===================== */

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
          type: "inventory-select",
          inventoryCategory: "socket",
          showIf: {
            field: "prescription_type",
            equals: "prosthetic"
          }
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
          placeholder: "Any additional component",
          showIf: {
            field: "prescription_type",
            equals: "prosthetic"
          }
        },

        {
          name: "casting_date",
          label: "Casting Date",
          type: "date",
          helperText: "Prosthetic casting / measurement",
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
          helperText: "Casting Date + 5 working days",
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
          accept: "application/pdf,image/*",
          multiple: false,
          showIf: {
            field: "prescription_type",
            equals: "prosthetic"
          }
        },

        {
          name: "training_in_prosthesis_use",
          label: "Training in Prosthesis Use",
          type: "radio",
          showIf: {
            field: "prescription_type",
            equals: "prosthetic"
          },
          options: YES_NO
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
      fields: PLAN_COMMON_SCHEMA.concat([
  {
          name: "suspension",
          label: "Suspension",
          type: "single-select",
          options: [
            { label: "Easy Sleeve", value: "easy_sleeve" },
            { label: "Genu Sleeve", value: "genu_sleeve" },
            { label: "Juzo Suspension Sleeve", value: "juzo_suspension_sleeve" },
            { label: "Lite Liner Supreme Gel Suspension", value: "lite_liner_supreme_gel_suspension" },
            { label: "Distal End Silicone Cup", value: "distal_end_silicone_cup" },
            { label: "Extreme Trans Femoral Locking Liner / Trans Femoral Cushion Liner", value: "extreme_trans_femoral_locking_liner_trans_femoral_cushion_liner" },
            { label: "Anterior Posterior Tapered Liner", value: "anterior_posterior_tapered_liner" },
            { label: "General Purpose Liner", value: "general_purpose_liner" },
            { label: "4Seal Classic Standard TF", value: "4seal_classic_standard_tf" },
            { label: "Iceross Dermo Cushion TT", value: "iceross_dermo_cushion_tt" },
            { label: "Iceross Dermo Locking", value: "iceross_dermo_locking" },
            { label: "Iceross Transfemoral Locking", value: "iceross_transfemoral_locking" },
            { label: "Iceross Sport Locking TT", value: "iceross_sport_locking_tt" },
            { label: "Streifeneder AK Control Sil", value: "streifenedar_ak_control_sil" },
            { label: "Streifeneder BK Comfortsil Basic", value: "streifenedar_bk_comfortsil_basic" },
            { label: "Caleo 3D (6Y93)", value: "caleo_3d_6y93" },
            { label: "Caleo (6Y92)", value: "caleo_6y92" },
            { label: "Skeo Skinguard (TF/AK) (6Y85)", value: "skeo_skinguard_tf_ak_6y85" },
            { label: "Proseal Sil Liner (6Y81)", value: "proseal_sil_liner_6y81" },
            { label: "Proseal Ring (452A1)", value: "proseal_ring_452a1" },
            { label: "Kiss Lanyard System", value: "kiss_lanyard_system" },
            { label: "Easy Fit", value: "easy_fit" },
            { label: "Easyliner Lock", value: "easyliner_lock" },
            { label: "Easyliner Stretch Gel Cushion Liner", value: "easyliner_stretch_gel_cushion_liner" },
            { label: "Superior Performance Cushion Liner", value: "superior_performance_cushion_liner" },
            { label: "Superior Performance Gel Locking Liner", value: "superior_performance_gel_locking_liner" },
            { label: "Softskin Air S40 Without Distal Attachment", value: "softskin_air_s40_without_distal_attachment" },
            { label: "Softskin Air S50", value: "softskin_airs50" },
            { label: "Softskin Air S50CL Without Distal Attachment", value: "softskin_airs50cl_without_distal_attachment" },
            { label: "Lite Liner Gel Supreme Locking Standard 4W9", value: "lite_liner_gel_supreme_locking_standard_4w9" },
            { label: "Proximal Seal Cushion Liner", value: "proximal_seal_cushion_liner" },
            { label: "Liberty II Locking Liner", value: "liberty_ii_locking_liner" },
            { label: "Stepline Plus Evolution (With Distal Attachment)", value: "stepline_plus_evolution_with_distal_attachment" },
            { label: "Stepline Plus Evolution (Without Distal Attachment)", value: "stepline_plus_evolution_without_distal_attachment" },
            { label: "Stepline Plus AK (With Distal Attachment)", value: "stepline_plus_ak_with_distal_attachment" },
            { label: "Stepline Plus AK (Without Distal Attachment)", value: "stepline_plus_ak_without_distal_attachment" },
            { label: "Stepline Plus Sealing Sleeve", value: "stepline_plus_sealing_sleeve" },
            { label: "Silicone Pro Liner Cushion", value: "silicone_pro_liner_cushion" },
            { label: "Silicone Pro Liner Lock", value: "silicone_pro_liner_lock" },
            { label: "Eco Liner Lock", value: "eco_liner_lock" },
            { label: "Eco Liner Cushion", value: "eco_liner_cushion" },
            { label: "Free Text", value: "free_text" }
          ],
      },
 {
          name: "socker_design",
          label: "Socket Design",
          type: "single-select",
          options: [
            { label: "Transtibial PP Socket (PTB/PTS/TSB)", value: "transtibial_pp_socket_ptb_pts_tsb" },
            { label: "Transtibial PP/PE Double Socket (PTB/PTS/TSB)", value: "transtibial_pp_pe_double_socket_ptb_pts_tsb" },
            { label: "Transtibial Laminated Socket (PTB/PTS/TSB)", value: "transtibial_laminated_socket_ptb_pts_tsb" },
            { label: "Transtibial Laminated Double Socket", value: "transtibial_laminated_double_socket" },
            { label: "Knee Disarticulation PP Socket With Pelite Liner", value: "knee_disarticulation_pp_socket_with_pelite_liner" },
            { label: "Knee Disarticulation PP/PE Double Socket", value: "knee_disarticulation_pp_pe_double_socket" },
            { label: "Knee Disarticulation Laminated Socket", value: "knee_disarticulation_laminated_socket" },
            { label: "Transfemoral PP Socket (Quadrilateral/Ischial)", value: "transfemoral_pp_socket_quadrilateral_ischial" },
            { label: "Transfemoral PP/PE Double Socket (Quadrilateral/Ischial)", value: "transfemoral_pp_pe_double_socket_quadrilateral_ischial" },
            { label: "Transfemoral Laminated Socket (Quadrilateral/Ischial)", value: "transfemoral_laminated_socket_quadrilateral_ischial" },
            { label: "Transfemoral Laminated Double Socket + PP/PE (Quadrilateral/Ischial)", value: "transfemoral_laminated_double_socket_pp_pe_quadrilateral_ischial" },
            { label: "Hip Disarticulation PP Socket", value: "hip_disarticulation_pp_socket" },
            { label: "Hip Polypropylene Double Socket", value: "hip_polypropylene_double_socket" },
            { label: "Hip Disarticulation Laminated Socket", value: "hip_disarticulation_laminated_socket" },
            { label: "Symes PP Socket", value: "symes_pp_socket" },
            { label: "Symes Laminated Socket With Pelite", value: "symes_laminated_socket_with_pelite" },
            { label: "Chopart Socket", value: "chopart_socket" },
            { label: "Syme 3D Socket", value: "syme_3d_socket" },
            { label: "Syme Transparent Check Socket", value: "syme_transparent_check_socket" },
            { label: "Below Knee Carbon Laminate Socket", value: "below_knee_carbon_laminate_socket" },
            { label: "Below Knee Adjustable Carbon Laminate Socket", value: "below_knee_adjustable_carbon_laminate_socket" },
            { label: "Below Knee Transparent Check Socket", value: "below_knee_transparent_check_socket" },
            { label: "Below Knee 3D Socket", value: "below_knee_3d_socket" },
            { label: "Above Knee Adjustable Carbon Laminate Socket", value: "above_knee_adjustable_carbon_laminate_socket" },
            { label: "Above Knee Transparent Check Socket", value: "above_knee_transparent_check_socket" },
            { label: "Above Knee 3D Socket", value: "above_knee_3d_socket" },
            { label: "Through Knee Transparent Check Socket", value: "through_knee_transparent_check_socket" },
            { label: "Free Text", value: "free_text" }
          ],
        },
        {
          name: "knee_joint",
          label: "Knee Joint",
          type: "single-select",
          options: [
            { label: "V One Microprocessor-Controlled Knee", value: "v_one_microprocessor_controlled_knee" },
            { label: "Orion 2 Knee Joint", value: "orion_2_knee_joint" },
            { label: "Plie 3 MPC Electronic Knee", value: "plie_3_mpc_electronic_knee" },
            { label: "Total Knee 1900 Polycentric Knee With Geometric Locking System", value: "total_knee_1900_polycentric_knee_with_geometric_locking_system" },
            { label: "Total Knee 2100", value: "total_knee_2100" },
            { label: "3R78 Polycentric Knee Joint With Pneumatic Swing Phase Control", value: "3r78_polycentric_knee_joint_with_pneumatic_swing_phase_control" },
            { label: "Endolite ESK+ With PSPC", value: "endolite_esk_pspc" },
            { label: "4 Bar Knee Joint System (3R20)", value: "4_bar_knee_joint_system_3r20" },
            { label: "Four Bar Knee Joint With Integrated Extension Assist (3R20)", value: "four_bar_knee_joint_with_integrated_extension_assist_3r20" },
            { label: "Mauch Knee", value: "mauch_knee" },
            { label: "Modular Polycentric EBS Knee Joint With Hydraulic Swing Phase Control (3R60)", value: "modular_polycentric_ebs_knee_joint_hydraulic_swing_phase_control_3r60" },
            { label: "Compact Semi-Automatic Knee Lock (SAKL)", value: "compact_semi_automatic_knee_lock_sakl" },
            { label: "OFM1 SE Balance Knee", value: "ofm1_se_balance_knee" },
            { label: "Modular Single Axis Knee Joint With Pneumatic Swing Phase Control (3R92)", value: "modular_single_axis_knee_joint_pneumatic_swing_phase_control_3r92" },
            { label: "Hy-Stan 4 Bar Knee", value: "hy_stan_4_bar_knee" },
            { label: "Hy-Stan 4 Bar Pneumatic Knee", value: "hy_stan_4_bar_pneumatic_knee" },
            { label: "Graph-Lite 4 Bar Knee With Manual Lock", value: "graph_lite_4_bar_knee_with_manual_lock" },
            { label: "Graph-Lite 5 Bar Pneumatic Knee High Activity", value: "graph_lite_5_bar_pneumatic_knee_high_activity" },
            { label: "Knee Joint With Extension Assist", value: "knee_joint_with_extension_assist" },
            { label: "Monocentric Brake Knee Joint With Stance Flexion And Manual Lock", value: "monocentric_brake_knee_joint_with_stance_flexion_and_manual_lock" },
            { label: "Waterproof Knee Joint With Lock", value: "waterproof_knee_joint_with_lock" },
            { label: "Stand Auto Lock Pneumatic Knee", value: "stand_auto_lock_pneumatic_knee" },
            { label: "4 Bar Mechanical Knee Joint (Flat Top)", value: "4_bar_mechanical_knee_joint_flat_top" },
            { label: "Hydraulic Polycentric Knee Joint With Extension Assist", value: "hydraulic_polycentric_knee_joint_with_extension_assist" },
            { label: "Polycentric Knee Joint With Lock", value: "polycentric_knee_joint_with_lock" },
            { label: "Polycentric Knee Joint", value: "polycentric_knee_joint" },
            { label: "Pneumatic Polycentric Knee Joint", value: "pneumatic_polycentric_knee_joint" },
            { label: "Phoenix Graph-Lite 4 Bar Pneumatic Knee", value: "phoenix_graph_lite_4_bar_pneumatic_knee" },
            { label: "Matik", value: "matik" },
            { label: "Hy-Stan 4 Bar Knee Disarticulation Knee", value: "hy_stan_4_bar_knee_disarticulation_knee" },
            { label: "4-Bar Knee (Economy)", value: "4_bar_knee_economy" },
            { label: "4 Bar Geometric Straight Lock Pneumatic Knee", value: "4_bar_geometric_straight_lock_pneumatic_knee" },
            { label: "Graph Lite 4-Bar Pneumatic Knee Disarticulation Knee", value: "graph_lite_4_bar_pneumatic_knee_disarticulation_knee" },
            { label: "Graph Lite 4 Bar Pneumatic Knee (Mini)", value: "graph_lite_4_bar_pneumatic_knee_mini" },
            { label: "Free Text", value: "free_text" }
          ],
        },
        {
          name: "foot",
          label: "Foot",
          type: "single-select",
          options: [
            { label: "1S101 Sach+ Foot", value: "1s101_sach_foot" },
            { label: "2R8 M10 Sach Foot Adapter", value: "2r8_m10_sach_foot_adapter" },
            { label: "1H38 Single Axis Foot", value: "1h38_single_axis_foot" },
            { label: "2R10 Single Axis Foot Adapter", value: "2r10_single_axis_foot_adapter" },
            { label: "2R33 Single Axis Foot Adapter With Screw", value: "2r33_single_axis_foot_adapter_with_screw" },
            { label: "1D10 Dynamic Foot With Adapter", value: "1d10_dynamic_foot_with_adapter" },
            { label: "1D35 Dynamic Motion Foot", value: "1d35_dynamic_motion_foot" },
            { label: "Endolite Multiflex Foot", value: "endolite_multiflex_foot" },
            { label: "1WR95 Water Resistance Foot", value: "1wr95_water_resistance_foot" },
            { label: "Sach Foot", value: "sach_foot" },
            { label: "Single Axis Flat Foot With Toes", value: "single_axis_flat_foot_with_toes" },
            { label: "Quantum Syme Foot Spring Module", value: "quantum_syme_foot_spring_module" },
            { label: "1C63 Triton Low Profile", value: "1c63_triton_low_profile" },
            { label: "Foot Shell For Triton Low Profile Foot", value: "foot_shell_for_triton_low_profile_foot" },
            { label: "Senator Prosthetic Foot", value: "senator_prosthetic_foot" },
            { label: "Endurance Foot", value: "endurance_foot" },
            { label: "Feather Carbon Foot", value: "feather_carbon_foot" },
            { label: "Trias Energy Storing Foot (1C30)", value: "trias_energy_storing_foot_1c30" },
            { label: "Adjustable Single Axis Ankle", value: "adjustable_single_axis_ankle" },
            { label: "Foot Adapter With Screw Connection", value: "foot_adapter_with_screw_connection" },
            { label: "Multiflex Ankle Standard", value: "multiflex_ankle_standard" },
            { label: "Multiflex Snubber", value: "multiflex_snubber" },
            { label: "Hy-Stan Single Axis Ankle", value: "hy_stan_single_axis_ankle" },
            { label: "Hy-Stan Ultra-Short Ankle", value: "hy_stan_ultra_short_ankle" },
            { label: "Adjustable Multi-Axis Ankle Joint", value: "adjustable_multi_axis_ankle_joint" },
            { label: "Mono-Axis Ankle Joint", value: "mono_axis_ankle_joint" },
            { label: "Single Axis With Pyramid", value: "single_axis_with_pyramid" },
            { label: "Single Axis Ankle Joint With Pyramid", value: "single_axis_ankle_joint_with_pyramid" },
            { label: "Graph-Lite Multi-Axis Ankle", value: "graph_lite_multi_axis_ankle" },
            { label: "Vacuum Ankle Adaptor", value: "vacuum_ankle_adaptor" },
            { label: "Hydraulic Vacuum Ankle", value: "hydraulic_vacuum_ankle" },
            { label: "Stainless Steel Pyramid Base (Max 125Kg)", value: "stainless_steel_pyramid_base_max_125kg" },
            { label: "Proteor Sach Foot", value: "proteor_sach_foot" },
            { label: "Sierra (FS1)", value: "sierra_fs1" },
            { label: "Highlander (FS3)", value: "highlander_fs3" },
            { label: "Freedom Agilix (F15)", value: "freedom_agilix_f15" },
            { label: "Dynastar", value: "dynastar" },
            { label: "Dynastep", value: "dynastep" },
            { label: "Freedom Dynadapt (F10)", value: "freedom_dynadapt_f10" },
            { label: "Rush Hipro", value: "rush_hipro" },
            { label: "Rush Rampage LP", value: "rush_rampage_lp" },
            { label: "Kinterra Foot/Ankle (ROM)", value: "kinterra_foot_ankle_rom" },
            { label: "Super Sach Foot", value: "super_sach_foot" },
            { label: "Motion Control Foot", value: "motion_control_foot" },
            { label: "Kare Dynamic Foot With Ankle", value: "kare_dynamic_foot_with_ankle" },
            { label: "Carbon Foot Cover (For Endurance Foot)", value: "carbon_foot_cover_for_endurance_foot" },
            { label: "Footshell For Trias", value: "footshell_for_trias" },
            { label: "Footshell (Proteor Foot)", value: "footshell_proteor_foot" },
            { label: "Rush Foot Cover", value: "rush_foot_cover" },
            { label: "Feather Carbon Foot Cover", value: "feather_carbon_foot_cover" },
            { label: "Kare Dynamic Foot Cover", value: "kare_dynamic_foot_cover" },
            { label: "Foot Cover (Tehsen)", value: "foot_cover_tehsen" },
            { label: "Foot Shell (Gen 3, Gen 2, Shockwave, Kinnex)", value: "foot_shell_gen3_gen2_shockwave_kinnex" },
            { label: "Foot Cover", value: "foot_cover" },
            { label: "Foot Shell (Ossur Foot Shell)", value: "foot_shell_ossur" },
            { label: "Foot Cover For CPI", value: "foot_cover_for_cpi" },
            { label: "High Definition Silicone Foot Cover For Partial Foot", value: "high_definition_silicone_foot_cover_partial" },
            { label: "HDSF (With Carbon Fibre Foot Plate)", value: "hdsf_with_carbon_fibre_foot_plate" },
            { label: "High Definition Silicone Foot Cover For Partial Foot - High Top Ankle", value: "high_definition_silicone_foot_cover_partial_high_top" },
            { label: "HDSF (With Carbon Fibre Foot Plate) - High Top Ankle", value: "hdsf_with_carbon_fibre_foot_plate_high_top" },
            { label: "Free Text", value: "free_text" }
          ],
        },
        {
          name: "others",
          label: "Others",
          type: "textarea"
        },
        {
          name: "casting_date",
          label: "Casting Date",
          type: "date"
        },
        {
          name: "fitting_date",
          label: "Fitting Date",
          type: "date",
          autoCalculate: {
            basedOn: "casting_date",
            addDays: 5
          }
        },
        {
          name: "follow_up",
          label: "Follow-up",
          type: "checkbox-group",
          options: [
            { label: "2 Weeks", value: "2_weeks" },
            { label: "4 Weeks", value: "4_weeks" },
            { label: "Others", value: "others" }
          ]
        },
        {
          name: "follow_up_other",
          label: "Other Follow-up",
          type: "input",
          showIf: {
            field: "follow_up",
            includes: "others"
          }
        },
        {
          name: "upload_measurement_form",
          label: "Upload Measurement Form",
          type: "file-upload-modal"
        },
      ])
    }
  ]
};

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

export default function OrthoticsFollowUp({ patient, onSubmit, onBack }) {
  const [values, setValues] = useState({
    assignment_type: 'orthotics',
    amp_upper_limb_location: [],
    amp_lower_limb_location: [],
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("subjective");
  const storageKey = patient ? `orthotics_followup_${patient.id}` : null;

  /* ── Restore draft ── */
  useEffect(() => {
    if (!storageKey) return;
    const saved = localStorage.getItem(storageKey);
    if (saved) setValues(JSON.parse(saved).values || {});
  }, [storageKey]);

  /* ── Pre-fill from patient record ── */
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
      skin_auto: patient.skin,
    }));
  }, [patient]);

  const onChange = (name, value) => {
    setValues(v => {
      const next = { ...v, [name]: value };
      if (name === "assignment_type" && value === "orthotics") delete next.visit_type;
      return next;
    });
  };

  const handleAction = (type) => {
    if (type === "back") onBack?.();
    if (type === "clear") {
      setValues({ assignment_type: 'orthotics', amp_upper_limb_location: [], amp_lower_limb_location: [] });
      setSubmitted(false);
      localStorage.removeItem(storageKey);
    }
    if (type === "save") {
      localStorage.setItem(storageKey, JSON.stringify({ values, updatedAt: new Date() }));
      alert("Follow-up draft saved");
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    onSubmit?.(values);
    alert("Follow-up submitted");
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


  const SOAP_TABS = ["subjective", "objective", "assessment", "plan"];

  function PatientInfo({ patient, values, onChange }) {
    if (!patient) return null;
    return (
      <div style={{ marginBottom: 12 }}>
        {/* Follow-up banner */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 12, fontSize: 14
        }}>
          <div><b>Name:</b> {patient.name}</div>
          <div><b>IC:</b> {patient.id}</div>
          <div><b>DOB:</b> {patient?.dob}</div>
          <div><b>Age / Gender:</b> {patient?.age} / {patient?.sex}</div>
          <div><b>ICD:</b> {patient?.icd}</div>
          <div><b>Date of Assessment:</b> {patient?.date_of_assessment}</div>
          <div><b>Date of Onset:</b> {patient?.date_of_onset}</div>
          <div><b>Duration of Diagnosis:</b>{" "} {patient?.date_of_onset}</div>
          <div><b>Primary Diagnosis:</b> {patient?.diagnosis_history || "-"}</div>
          <div><b>Secondary Diagnosis:</b> {patient?.medical_history || "-"}</div>

          <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <b>What do you want to perform?</b>
            <div style={{ display: 'flex', gap: 12 }}>
              {["orthotics", "prosthetics"].map(type => (
                <label key={type} style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="assignment_type"
                    value={type}
                    checked={values.assignment_type === type}
                    onChange={e => onChange('assignment_type', e.target.value)}
                  />
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Patient info card */}
      <PatientCard
           patient={patient}
           department="P&O"
           assignmentType={values.assignment_type}
           onAssignmentTypeChange={(val) => onChange('assignment_type', val)}
         />

      {/* Consent / status block */}
      {/* <CommonFormBuilder
        schema={getConsentSchema(values.assignment_type)}
        values={values}
        onChange={onChange}
      /> */}

      {/* ── SOAP Tabs ── */}
      <div style={{
        display: "flex",
        gap: 12,
        justifyContent: "center",
        borderBottom: "1px solid #ddd",
        marginBottom: 12
      }}>
        {SOAP_TABS.map(tab => (
          <div
            key={tab}
            style={{
              padding: "10px 22px",
              fontWeight: 600,
              cursor: "pointer",
              color: activeTab === tab ? "#2451b3" : "#0f172a",
              borderBottom: activeTab === tab ? "3px solid #2451b3" : "none"
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </div>
        ))}
      </div>

      {/* Active tab form */}
      <CommonFormBuilder
        schema={schemaMap[activeTab]}
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
              fontWeight: 700,
              cursor: "pointer"
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
