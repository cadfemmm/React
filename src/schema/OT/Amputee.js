const CONSENT = {
  "title": "",
  "sections": [
    {
      "fields": [
        {
          "type": "row",
          "fields": [
            {
              "name": "consent_obtained",
              "label": "Consent",
              "type": "single-select",
              "options": [
                {
                  "label": "Dry Needling",
                  "value": "dry_needling"
                },
                {
                  "label": "Wall Climbing",
                  "value": "wall_climbing"
                }
              ]
            }
          ]
        },
        {
          "type": "custom",
          "name": "_open_saved_consent"
        },
        {
          "name": "hep_reviewed",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Home Exercise Program (HEP) reviewed and demonstrated",
              "value": "yes"
            }
          ]
        },
        {
          "name": "current_diagnosis",
          "label": "Current Diagnosis",
          "type": "multi-select-dropdown",
          "options": [
            {
              "label": "Stroke",
              "value": "stroke"
            },
            {
              "label": "Traumatic Brain Injury",
              "value": "tbi"
            },
            {
              "label": "Parkinson Disease",
              "value": "parkinson"
            },
            {
              "label": "Spinal Cord Injury",
              "value": "sci"
            },
            {
              "label": "Peripheral Neuropathy",
              "value": "peripheral_neuropathy"
            },
            {
              "label": "Ligament injuries",
              "value": "ligament_injuries"
            },
            {
              "label": "Ataxia",
              "value": "ataxia"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "current_diagnosis_other",
          "label": "Other Diagnosis (specify)",
          "type": "textarea",
          "showIf": {
            "field": "current_diagnosis",
            "includes": "others"
          }
        },
        {
          "name": "equipment_owned",
          "label": "List of Equipment Owned",
          "type": "checkbox-group",
          "options": [
            {
              "label": "PERKESO",
              "value": "perkeso"
            },
            {
              "label": "NGO",
              "value": "ngo"
            },
            {
              "label": "Self-purchased",
              "value": "self"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "equipment_perkeso",
          "label": "PERKESO Equipment Details",
          "type": "textarea",
          "showIf": {
            "field": "equipment_owned",
            "includes": "perkeso"
          }
        },
        {
          "name": "equipment_ngo",
          "label": "NGO Equipment Details",
          "type": "textarea",
          "showIf": {
            "field": "equipment_owned",
            "includes": "ngo"
          }
        },
        {
          "name": "equipment_self",
          "label": "Self-purchased Equipment Details",
          "type": "textarea",
          "showIf": {
            "field": "equipment_owned",
            "includes": "self"
          }
        },
        {
          "name": "equipment_others",
          "label": "Other Equipment Details",
          "type": "textarea",
          "showIf": {
            "field": "equipment_owned",
            "includes": "others"
          }
        },
        {
          "type": "subheading",
          "label": "Referral Information"
        },
        {
          "name": "referred_by",
          "label": "Referred by",
          "type": "input",
          "readOnly": true
        },
        {
          "name": "referral_reasons",
          "label": "Referral Reasons",
          "type": "textarea",
          "readOnly": true
        }
      ]
    }
  ]
}

const SUBJECTIVE = {
  "title": "",
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Chief Complaint & History"
        },
        {
          "type": "input",
          "name": "chief_complaint",
          "label": "Chief Complaint"
        },
        {
          "type": "input",
          "name": "history_present_illness",
          "label": "History of Present Illness"
        },
        {
          "type": "subheading",
          "label": "Social & Personal History"
        },
        {
          "type": "input",
          "name": "work_history",
          "label": "Work History"
        },
        {
          "type": "input",
          "name": "client_expectations",
          "label": "Client Expectations"
        },
        {
          "type": "input",
          "name": "driving_history",
          "label": "Driving History"
        },
        {
          "type": "subheading",
          "label": "Driving Details"
        },
        {
          "type": "single-select",
          "name": "driving_license_type",
          "label": "Driving License Type",
          "options": [
            {
              "label": "None",
              "value": "None"
            },
            {
              "label": "B2 – Motor Car (Private Vehicle)",
              "value": "B2"
            },
            {
              "label": "D – Heavy Motor Vehicle",
              "value": "D"
            },
            {
              "label": "E – Heavy Trailer Vehicle",
              "value": "E"
            },
            {
              "label": "GDL – Goods Driving License",
              "value": "GDL"
            },
            {
              "label": "PSV – Public Service Vehicle",
              "value": "PSV"
            },
            {
              "label": "Other",
              "value": "Other"
            }
          ]
        },
        {
          "type": "input",
          "name": "driving_license_other",
          "label": "Please specify",
          "showIf": {
            "field": "driving_license_type",
            "equals": "Other"
          }
        },
        {
          "type": "radio",
          "name": "returned_to_driving",
          "label": "Returned to Drive Post Injury?",
          "options": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "input",
          "name": "driving_duration_distance",
          "label": "If Yes – Duration & Distance",
          "showIf": {
            "field": "returned_to_driving",
            "equals": "Yes"
          }
        }
      ]
    }
  ]
}

const OBJECTIVE = {
  "title": "",
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Physical Status"
        },
        {
          "name": "neuro_scales",
          "type": "assessment-launcher",
          "options": [
            {
              "label": "Range of Motion (ROM)",
              "value": "rom"
            },
            {
              "label": "Manual Muscle Test (MMT)",
              "value": "mmt"
            },
            {
              "label": "Functional Independence Measure (FIM)",
              "value": "fim"
            },
            {
              "label": "Lawton IADL",
              "value": "flug"
            },
            {
              "label": "Montreal Cognitive Assessment (MoCA)",
              "value": "moca"
            }
          ]
        },
        {
          "type": "radio",
          "name": "dominant_side",
          "label": "Dominant",
          "options": [
            "Right",
            "Left"
          ]
        },
        {
          "type": "checkbox-group",
          "name": "affected_side",
          "label": "Affected",
          "position": "side",
          "options": [
            {
              "label": "Left UE",
              "value": "LUE"
            },
            {
              "label": "Right UE",
              "value": "RUE"
            },
            {
              "label": "Left LE",
              "value": "LLE"
            },
            {
              "label": "Right LE",
              "value": "RLE"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Stump / Skin Condition"
        },
        {
          "type": "radio",
          "name": "wound_status",
          "label": "Wound",
          "options": [
            "Nil",
            "Present"
          ]
        },
        {
          "type": "input",
          "name": "wound_details",
          "label": "Wound Details",
          "showIf": {
            "field": "wound_status",
            "equals": "Present"
          }
        },
        {
          "type": "single-select",
          "name": "muscle_condition",
          "label": "Muscle",
          "position": "side",
          "options": [
            {
              "label": "Firm",
              "value": "Firm"
            },
            {
              "label": "Flabby",
              "value": "Flabby"
            },
            {
              "label": "Atrophied",
              "value": "Atrophied"
            },
            {
              "label": "Others",
              "value": "Other"
            }
          ]
        },
        {
          "type": "input",
          "name": "muscle_condition_other",
          "label": "Please specify",
          "placeholder": "Enter muscle condition",
          "position": "side",
          "showIf": {
            "field": "muscle_condition",
            "equals": "Other"
          }
        },
        {
          "type": "radio",
          "name": "edema",
          "label": "Edema",
          "options": [
            "Nil",
            "Present"
          ]
        },
        {
          "type": "input",
          "name": "edema_grade",
          "label": "Grade / Measurement"
        },
        {
          "type": "radio",
          "name": "skin_condition",
          "label": "Skin",
          "position": "side",
          "options": [
            {
              "label": "Normal",
              "value": "Normal"
            },
            {
              "label": "Dry",
              "value": "Dry"
            },
            {
              "label": "Fragile",
              "value": "Fragile"
            },
            {
              "label": "Discoloured",
              "value": "Discoloured"
            },
            {
              "label": "Breakdown",
              "value": "Breakdown"
            }
          ]
        },
        {
          "type": "radio",
          "name": "scar_type",
          "label": "Scar",
          "position": "side",
          "options": [
            {
              "label": "Matured",
              "value": "Matured"
            },
            {
              "label": "Adhered",
              "value": "Adhered"
            },
            {
              "label": "Hypertrophic",
              "value": "Hypertrophic"
            },
            {
              "label": "Keloid",
              "value": "Keloid"
            }
          ]
        },
        {
          "type": "radio",
          "name": "stump_shape",
          "label": "Shape",
          "position": "side",
          "options": [
            {
              "label": "Conical",
              "value": "Conical"
            },
            {
              "label": "Cylindrical",
              "value": "Cylindrical"
            },
            {
              "label": "Bulbous",
              "value": "Bulbous"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Sensation / Pain (Residual Limb)"
        },
        {
          "type": "radio",
          "name": "phantom_sensation",
          "label": "Phantom Sensation",
          "options": [
            "Nil",
            "Sometimes",
            "Present",
            "Absent"
          ]
        },
        {
          "type": "radio",
          "name": "phantom_pain",
          "label": "Phantom Pain",
          "options": [
            "Nil",
            "Sometimes",
            "Present",
            "Absent"
          ]
        },
        {
          "type": "scale-slider",
          "name": "phantom_vas",
          "label": "Phantom Pain VAS (0–10)",
          "min": 0,
          "max": 10,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 0,
              "max": 3,
              "color": "#16a34a",
              "label": "Mild"
            },
            {
              "min": 4,
              "max": 6,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 7,
              "max": 10,
              "color": "#dc2626",
              "label": "Severe"
            }
          ]
        },
        {
          "type": "radio",
          "name": "stump_pain",
          "label": "Stump Pain",
          "options": [
            "Nil",
            "Sometimes",
            "Present",
            "Absent"
          ]
        },
        {
          "type": "scale-slider",
          "name": "stump_vas",
          "label": "Stump Pain VAS (0–10)",
          "min": 0,
          "max": 10,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 0,
              "max": 3,
              "color": "#16a34a",
              "label": "Mild"
            },
            {
              "min": 4,
              "max": 6,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 7,
              "max": 10,
              "color": "#dc2626",
              "label": "Severe"
            }
          ]
        },
        {
          "type": "radio",
          "name": "hypersensitivity",
          "label": "Hypersensitivity",
          "options": [
            "Nil",
            "Yes"
          ]
        },
        {
          "type": "radio",
          "name": "light_touch",
          "label": "Light Touch",
          "options": [
            "Intact",
            "Impaired"
          ]
        },
        {
          "type": "radio",
          "name": "deep_touch",
          "label": "Deep Touch",
          "options": [
            "Intact",
            "Impaired"
          ]
        },
        {
          "type": "input",
          "name": "semmes_weinstein",
          "label": "Semmes Weinstein (if applicable)"
        },
        {
          "type": "subheading",
          "label": "Mobility & Ambulation"
        },
        {
          "type": "single-select",
          "name": "short_distance",
          "label": "Short Distance",
          "options": [
            {
              "label": "Independent Walking",
              "value": "Independent"
            },
            {
              "label": "Wheelchair",
              "value": "Wheelchair"
            },
            {
              "label": "Quadripod Narrow Base",
              "value": "QuadNarrow"
            },
            {
              "label": "Quadripod Wide Base",
              "value": "QuadWide"
            },
            {
              "label": "Walking Stick",
              "value": "Stick"
            },
            {
              "label": "Walking Frame",
              "value": "Frame"
            },
            {
              "label": "Elbow Crutches",
              "value": "ElbowCrutches"
            },
            {
              "label": "Axillary Crutches",
              "value": "Axillary"
            },
            {
              "label": "Others",
              "value": "Other"
            }
          ]
        },
        {
          "type": "input",
          "name": "short_distance_other",
          "label": "Please specify (Short Distance)",
          "showIf": {
            "field": "short_distance",
            "equals": "Other"
          }
        },
        {
          "type": "single-select",
          "name": "long_distance",
          "label": "Long Distance",
          "options": [
            {
              "label": "Independent Walking",
              "value": "Independent"
            },
            {
              "label": "Wheelchair",
              "value": "Wheelchair"
            },
            {
              "label": "Quadripod Narrow Base",
              "value": "QuadNarrow"
            },
            {
              "label": "Walking Stick",
              "value": "Stick"
            },
            {
              "label": "Walking Frame",
              "value": "Frame"
            },
            {
              "label": "Elbow Crutches",
              "value": "ElbowCrutches"
            },
            {
              "label": "Others",
              "value": "Other"
            }
          ]
        },
        {
          "type": "input",
          "name": "long_distance_other",
          "label": "Please specify (Long Distance)",
          "placeholder": "Enter walking aid",
          "showIf": {
            "field": "long_distance",
            "equals": "Other"
          }
        },
        {
          "type": "subheading",
          "label": "Transfer"
        },
        {
          "type": "single-select",
          "name": "bed_chair_transfer",
          "label": "Bed ↔ Chair",
          "options": [
            {
              "label": "Independent",
              "value": "Independent"
            },
            {
              "label": "Supervision",
              "value": "Supervision"
            },
            {
              "label": "Minimal Assistance",
              "value": "MinA"
            },
            {
              "label": "Moderate Assistance",
              "value": "ModA"
            },
            {
              "label": "Max Assistance",
              "value": "MaxA"
            }
          ]
        },
        {
          "type": "radio",
          "name": "toilet_transfer",
          "label": "Toilet Transfer",
          "options": [
            {
              "label": "Independent",
              "value": "Independent"
            },
            {
              "label": "Assistance",
              "value": "Assistance"
            }
          ]
        },
        {
          "type": "input",
          "name": "car_transfer",
          "label": "Car Transfer (with/without prosthesis)"
        },
        {
          "type": "subheading",
          "label": "Standing Tolerance"
        },
        {
          "type": "input",
          "name": "standing_duration",
          "label": "Standing Duration (minutes)"
        },
        {
          "type": "radio",
          "name": "standing_status",
          "label": "Standing Status",
          "options": [
            "Independent",
            "Requires Support",
            "Unable"
          ]
        },
        {
          "type": "input",
          "name": "standing_observation",
          "label": "Observation"
        },
        {
          "type": "subheading",
          "label": "Balance Testing"
        },
        {
          "type": "grid-table-flat",
          "name": "balance_table",
          "headers": [
            "Without Prosthesis",
            "With Prosthesis"
          ],
          "rows": [
            {
              "key": "sit_static",
              "label": "Sitting – Static"
            },
            {
              "key": "sit_dynamic",
              "label": "Sitting – Dynamic"
            },
            {
              "key": "stand_static",
              "label": "Standing – Static"
            },
            {
              "key": "stand_dynamic",
              "label": "Standing – Dynamic"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Strength Testing (Jamar Dynamometer)"
        },
        {
          "type": "grid-table-flat",
          "name": "jamar_table",
          "headers": [
            "Right (KGF)",
            "Left (KGF)"
          ],
          "rows": [
            {
              "key": "grip",
              "label": "Grip"
            },
            {
              "key": "tip",
              "label": "Tip"
            },
            {
              "key": "lateral",
              "label": "Lateral"
            },
            {
              "key": "tripod",
              "label": "Tripod"
            }
          ]
        }
      ]
    }
  ]
}

const ASSESSMENT =  {
  "title": "Assessment",
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Problem List"
        },
        {
          "type": "input",
          "name": "problem_list",
          "label": "Problem List"
        },
        {
          "type": "subheading",
          "label": "Functional Limitations"
        },
        {
          "type": "single-select",
          "name": "functional_limitations",
          "label": "Select Functional Limitations",
          "options": [
            {
              "label": "Gait Impairment",
              "value": "Gait"
            },
            {
              "label": "Unsafe Transfers",
              "value": "Transfers"
            },
            {
              "label": "Prosthesis-related Issues",
              "value": "Prosthesis"
            },
            {
              "label": "Pain & Sensory Issues",
              "value": "PainSensory"
            },
            {
              "label": "Balance & Postural Control",
              "value": "Balance"
            },
            {
              "label": "Others",
              "value": "Other"
            }
          ]
        },
        {
          "type": "input",
          "name": "functional_limitations_other",
          "label": "Others, Specify",
          "showIf": {
            "field": "functional_limitations",
            "equals": "Other"
          }
        },
        {
          "type": "subheading",
          "label": "Underlying Cause"
        },
        {
          "type": "single-select",
          "name": "underlying_cause",
          "label": "Select Underlying Cause",
          "options": [
            {
              "label": "Diabetes Mellitus",
              "value": "DM"
            },
            {
              "label": "Peripheral Vascular Disease",
              "value": "PVD"
            },
            {
              "label": "Trauma",
              "value": "Trauma"
            },
            {
              "label": "Infection",
              "value": "Infection"
            },
            {
              "label": "Tumor",
              "value": "Tumor"
            },
            {
              "label": "Others",
              "value": "Other"
            }
          ]
        },
        {
          "type": "input",
          "name": "underlying_cause_other",
          "label": "Others, Specify",
          "showIf": {
            "field": "underlying_cause",
            "equals": "Other"
          }
        },
        {
          "type": "subheading",
          "label": "Clinical Impression"
        },
        {
          "type": "input",
          "name": "clinical_impression",
          "label": "Clinical Impression"
        },
        {
          "type": "subheading",
          "label": "Rehabilitation Prognosis"
        },
        {
          "type": "radio",
          "name": "rehab_prognosis",
          "label": "Select Prognosis",
          "options": [
            "Excellent",
            "Good",
            "Fair",
            "Poor"
          ]
        }
      ]
    }
  ]
}

const PLAN = {
  "title": "",
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Short Term Goals (2–4 Weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "short_term_goals"
        },
        {
          "type": "subheading",
          "label": "Long Term Goals (6–12 Weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "long_term_goals"
        },
        {
          "type": "checkbox-group",
          "name": "intervention_plan",
          "label": "Intervention Plan",
          "options": [
            {
              "label": "Functional Endurance",
              "value": "FunctionalEndurance"
            },
            {
              "label": "Functional Balance",
              "value": "FunctionalBalance"
            },
            {
              "label": "Wheelchair training",
              "value": "WheelchairTraining"
            },
            {
              "label": "Education",
              "value": "Education"
            },
            {
              "label": "Community Reintegration",
              "value": "CommunityReintegration"
            },
            {
              "label": "Driving Assessment",
              "value": "DrivingAssessment"
            },
            {
              "label": "Riding Assessment",
              "value": "RidingAssessment"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "ADL Training"
        },
        {
          "type": "checkbox-group",
          "name": "adl_training",
          "label": "",
          "options": [
            {
              "label": "Dressing",
              "value": "Dressing"
            },
            {
              "label": "Bathing",
              "value": "Bathing"
            },
            {
              "label": "Feeding",
              "value": "Feeding"
            },
            {
              "label": "Grooming",
              "value": "Grooming"
            },
            {
              "label": "Transfers",
              "value": "Transfers"
            },
            {
              "label": "Locomotion",
              "value": "Locomotion"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "IADL Training"
        },
        {
          "type": "checkbox-group",
          "name": "iadl_training",
          "label": "",
          "options": [
            {
              "label": "Telephoning",
              "value": "Telephoning"
            },
            {
              "label": "Shopping",
              "value": "Shopping"
            },
            {
              "label": "Food Preparation",
              "value": "FoodPreparation"
            },
            {
              "label": "Housekeeping",
              "value": "Housekeeping"
            },
            {
              "label": "Laundry",
              "value": "Laundry"
            },
            {
              "label": "Mode of transportation",
              "value": "ModeOfTransportation"
            },
            {
              "label": "Medication management",
              "value": "MedicationManagement"
            },
            {
              "label": "Money management",
              "value": "MoneyManagement"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Driving / Riding Rehab"
        },
        {
          "type": "checkbox-group",
          "name": "driving_riding_rehab",
          "label": "",
          "options": [
            {
              "label": "Driving Rehabilitation",
              "value": "DrivingRehabilitation"
            },
            {
              "label": "Riding Rehabilitation",
              "value": "RidingRehabilitation"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Assistive & Adaptive Devices"
        },
        {
          "type": "checkbox-group",
          "name": "assistive_devices",
          "label": "",
          "options": [
            {
              "label": "Splint",
              "value": "Splint"
            },
            {
              "label": "Pressure garment",
              "value": "PressureGarment"
            },
            {
              "label": "Tubular",
              "value": "Tubular"
            },
            {
              "label": "Manual wheelchair",
              "value": "ManualWheelchair"
            },
            {
              "label": "Lightweight wheelchair",
              "value": "LightweightWheelchair"
            },
            {
              "label": "Ultralight wheelchair",
              "value": "UltralightWheelchair"
            },
            {
              "label": "Motorised wheelchair",
              "value": "MotorisedWheelchair"
            },
            {
              "label": "Commode",
              "value": "Commode"
            },
            {
              "label": "Others",
              "value": "AssistiveOthers"
            }
          ]
        },
        {
          "type": "input",
          "name": "assistive_devices_others",
          "label": "Please specify",
          "showIf": {
            "field": "assistive_devices",
            "includes": "AssistiveOthers"
          }
        },
        {
          "type": "subheading",
          "label": "Treatment Plan: Therapeutic Exercise (Multiselect)"
        },
        {
          "type": "checkbox-group",
          "name": "therapeutic_exercise",
          "label": "",
          "options": [
            {
              "label": "Functional ROM",
              "value": "FunctionalROM"
            },
            {
              "label": "Fine Motor Training",
              "value": "FineMotorTraining"
            },
            {
              "label": "Stump Management Station",
              "value": "StumpManagement"
            },
            {
              "label": "Functional Mobility",
              "value": "FunctionalMobility"
            },
            {
              "label": "Sensory Desensitization",
              "value": "SensoryDesensitization"
            }
          ]
        }
      ]
    }
  ]
}

export default {
  PLAN,
  OBJECTIVE,
  SUBJECTIVE,
  ASSESSMENT,
  CONSENT
};