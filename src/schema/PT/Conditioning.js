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
              "type": "checkbox-group",
              "options": [
                {
                  "label": "Consent obtained",
                  "value": "yes"
                }
              ]
            },
            {
              "name": "consent_upload",
              "label": "Upload",
              "type": "file-upload",
              "showIf": {
                "field": "consent_obtained",
                "includes": "yes"
              }
            }
          ]
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
          "type": "input",
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
          "type": "input",
          "showIf": {
            "field": "equipment_owned",
            "includes": "perkeso"
          }
        },
        {
          "name": "equipment_ngo",
          "label": "NGO Equipment Details",
          "type": "input",
          "showIf": {
            "field": "equipment_owned",
            "includes": "ngo"
          }
        },
        {
          "name": "equipment_self",
          "label": "Self-purchased Equipment Details",
          "type": "input",
          "showIf": {
            "field": "equipment_owned",
            "includes": "self"
          }
        },
        {
          "name": "equipment_others",
          "label": "Other Equipment Details",
          "type": "input",
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
          "type": "input",
          "readOnly": true
        }
      ]
    }
  ]
}

const SUBJECTIVE = {
  "sections": [
    {
      "fields": [
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
          "name": "patient_goals",
          "label": "Patient Goals",
          "type": "subheading"
        },
        {
          "name": "short_term_goals",
          "label": "Short Term Goals",
          "type": "input"
        },
        {
          "name": "long_term_goals",
          "label": "Long Term Goals",
          "type": "input"
        },
        {
          "type": "input",
          "name": "prior_level_function",
          "label": "Prior Level of Function"
        }
      ]
    },
    {
      "title": "Occupational & Activity Status",
      "fields": [
        {
          "type": "input",
          "name": "occupation",
          "label": "Occupation"
        },
        {
          "type": "radio",
          "name": "activity_level_before_illness",
          "label": "Activity Level Before Illness",
          "options": [
            {
              "label": "Sedentary",
              "value": "Sedentary"
            },
            {
              "label": "Moderate",
              "value": "Moderate"
            },
            {
              "label": "Active",
              "value": "Active"
            }
          ]
        }
      ]
    },
    {
      "title": "Pain & Symptoms",
      "fields": [
        {
          "type": "scale-slider",
          "name": "pain_nrs",
          "label": "Pain (NRS 0–10)",
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
          "type": "scale-slider",
          "name": "fatigue_scale",
          "label": "Fatigue (0–10)",
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
          "type": "scale-slider",
          "name": "borg_scale",
          "label": "Borg Scale (Dyspnea / Exertion)",
          "min": 1,
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
        }
      ]
    },
    {
      "title": "Medical History & Safety",
      "fields": [
        {
          "type": "radio",
          "name": "falls_history",
          "label": "Falls History",
          "options": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "input",
          "name": "assistive_device",
          "label": "Assistive Device"
        },
        {
          "type": "input",
          "name": "premorbid_activity",
          "label": "Pre-morbid Activity Level"
        }
      ]
    }
  ]
}

const OBJECTIVE = {
  "sections": [
    {
      "title": "",
      "fields": [
        {
          "name": "neuro_scales",
          "type": "assessment-launcher",
          "options": [
            {
              "label": "6MWT",
              "value": "sixmwt"
            },
            {
              "label": "Manual Muscle Test (MMT)",
              "value": "mmt"
            },
            {
              "label": "Y balance",
              "value": "y_balance"
            },
            {
              "label": "Leg press symmetry",
              "value": "fac"
            },
            {
              "label": "Shoulder Pain & Disability Index (SPADI)",
              "value": "spadi"
            },
            {
              "label": "HOOS",
              "value": "hoos"
            },
            {
              "label": "Knee Injury and Osteoarthritis",
              "value": "koos"
            },
            {
              "label": "FAOS",
              "value": "faos"
            }
          ]
        }
      ]
    },
    {
      "title": "Vitals",
      "fields": [
        {
          "type": "row",
          "fields": [
            {
              "type": "input",
              "name": "bp_systolic",
              "label": "BP (Systolic)",
              "placeholder": "mmHg"
            },
            {
              "type": "input",
              "name": "bp_diastolic",
              "label": "BP (Diastolic)",
              "placeholder": "mmHg"
            }
          ]
        },
        {
          "type": "row",
          "fields": [
            {
              "type": "input",
              "name": "heart_rate",
              "label": "HR",
              "placeholder": "bpm"
            },
            {
              "type": "input",
              "name": "respiratory_rate",
              "label": "RR",
              "placeholder": "/min"
            }
          ]
        },
        {
          "type": "row",
          "fields": [
            {
              "type": "input",
              "name": "spo2",
              "label": "SpO2",
              "placeholder": "%"
            },
            {
              "type": "input",
              "name": "temperature",
              "label": "Temperature",
              "placeholder": "°C"
            }
          ]
        }
      ]
    },
    {
      "title": "Isometric Strength (Muscle Meter)",
      "fields": [
        {
          "type": "row",
          "fields": [
            {
              "type": "input",
              "name": "quadriceps_left",
              "label": "Quadriceps Left (N)",
              "placeholder": "Newton"
            },
            {
              "type": "input",
              "name": "quadriceps_right",
              "label": "Quadriceps Right (N)",
              "placeholder": "Newton"
            }
          ]
        },
        {
          "type": "row",
          "fields": [
            {
              "type": "input",
              "name": "hamstring_left",
              "label": "Hamstring Left (N)",
              "placeholder": "Newton"
            },
            {
              "type": "input",
              "name": "hamstring_right",
              "label": "Hamstring Right (N)",
              "placeholder": "Newton"
            }
          ]
        },
        {
          "type": "row",
          "fields": [
            {
              "type": "input",
              "name": "muscle_interpretation",
              "label": "Interpretation Formula: (Force / Body weight) × 100"
            }
          ]
        }
      ]
    }
  ]
}

const ASSESSMENT = {
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Problem List"
        },
        {
          "name": "problem_list",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Reduced muscle strength",
              "value": "reduced_muscle_strength"
            },
            {
              "label": "Reduced muscle endurance",
              "value": "reduced_muscle_endurance"
            },
            {
              "label": "Reduced cardiovascular endurance",
              "value": "reduced_cardiovascular_endurance"
            },
            {
              "label": "Reduced ROM",
              "value": "reduced_rom"
            },
            {
              "label": "Poor wheelchair skills",
              "value": "poor_wheelchair_skills"
            },
            {
              "label": "Reduced standing balance",
              "value": "reduced_standing_balance"
            },
            {
              "label": "Reduced sitting balance",
              "value": "reduced_sitting_balance"
            },
            {
              "label": "Poor trunk control",
              "value": "poor_trunk_control"
            },
            {
              "label": "Unable to walk",
              "value": "unable_to_walk"
            },
            {
              "label": "Poor walking endurance",
              "value": "poor_walking_endurance"
            },
            {
              "label": "Poor wheelchair endurance",
              "value": "poor_wheelchair_endurance"
            },
            {
              "label": "Others",
              "value": "other"
            }
          ]
        },
        {
          "name": "problem_list_other_text",
          "label": "Other Problem (Specify)",
          "type": "input",
          "placeholder": "Enter additional problems...",
          "showIf": {
            "field": "problem_list",
            "includes": "other"
          }
        },
        {
          "name": "clinical_impression",
          "label": "Clinical Impression",
          "type": "input"
        },
        {
          "name": "prognosis",
          "label": "Rehab Prognosis",
          "type": "radio",
          "options": [
            {
              "label": "Excellent",
              "value": "excellent"
            },
            {
              "label": "Good",
              "value": "good"
            },
            {
              "label": "Fair",
              "value": "fair"
            },
            {
              "label": "Poor",
              "value": "poor"
            }
          ]
        }
      ]
    }
  ]
}

const PLAN = {
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Short-Term Goals (2–4 weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "short_term_goals"
        },
        {
          "type": "subheading",
          "label": "Long-Term Goals (6–12 weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "long_term_goals"
        },
        {
          "type": "subheading",
          "label": "Interventions and Plan"
        },
        {
          "name": "interventions_plan",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Bed mobility training",
              "value": "bed_mobility_training"
            },
            {
              "label": "Transfer training",
              "value": "transfer_training"
            },
            {
              "label": "Muscle tone management",
              "value": "muscle_tone_management"
            },
            {
              "label": "Sitting balance training",
              "value": "sitting_balance_training"
            },
            {
              "label": "Standing balance training",
              "value": "standing_balance_training"
            },
            {
              "label": "Functional ROM exercise",
              "value": "functional_rom_exercise"
            },
            {
              "label": "Functional strengthening exercise",
              "value": "functional_strengthening_exercise"
            },
            {
              "label": "Endurance training",
              "value": "endurance_training"
            },
            {
              "label": "Functional training",
              "value": "functional_training"
            },
            {
              "label": "Gait training",
              "value": "gait_training"
            },
            {
              "label": "Bobath / NDT therapy",
              "value": "bobath_ndt_therapy"
            },
            {
              "label": "Walking aid prescription",
              "value": "walking_aid_prescription"
            },
            {
              "label": "Others",
              "value": "other"
            }
          ]
        },
        {
          "name": "interventions_plan_other",
          "label": "Specify Other Intervention",
          "type": "input",
          "placeholder": "Enter other rehabilitation intervention",
          "showIf": {
            "field": "interventions_plan",
            "includes": "other"
          }
        },
        {
          "type": "subheading",
          "label": "HEP (Home Exercise Program)"
        },
        {
          "name": "home_exercise_program",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Strengthening exercises",
              "value": "strengthening_exercises"
            },
            {
              "label": "Stretching exercises",
              "value": "stretching_exercises"
            },
            {
              "label": "Standing / Sitting balance training",
              "value": "balance_training"
            },
            {
              "label": "Endurance training",
              "value": "endurance_training"
            },
            {
              "label": "Fitness regime",
              "value": "fitness_regime"
            },
            {
              "label": "Mobilization",
              "value": "mobilization"
            },
            {
              "label": "ROM exercise",
              "value": "rom_exercise"
            },
            {
              "label": "Patient & Carer education",
              "value": "patient_carer_education"
            },
            {
              "label": "Others",
              "value": "other"
            }
          ]
        },
        {
          "name": "home_exercise_program_other",
          "label": "Specify Other HEP",
          "type": "input",
          "placeholder": "Enter other home exercise program",
          "showIf": {
            "field": "home_exercise_program",
            "includes": "other"
          }
        },
        {
          "type": "subheading",
          "label": "Strength Conditioning"
        },
        {
          "type": "checkbox-group",
          "name": "strength_exercises",
          "label": "Select Strength Exercises",
          "options": [
            {
              "label": "Leg Press Progression (40–60% 1RM)",
              "value": "leg_press"
            },
            {
              "label": "Closed Chain Strengthening",
              "value": "closed_chain"
            },
            {
              "label": "Core Stabilization",
              "value": "core_stabilization"
            },
            {
              "label": "Hip Abduction / Adduction",
              "value": "hip_abd_add"
            },
            {
              "label": "Knee Flexion / Extension",
              "value": "knee_flex_ext"
            },
            {
              "label": "Ankle Dorsiflexion / Plantarflexion",
              "value": "ankle_flex_ext"
            }
          ]
        },
        {
          "type": "input",
          "name": "strength_notes",
          "label": "Strength Conditioning Notes"
        },
        {
          "type": "subheading",
          "label": "Endurance Training"
        },
        {
          "type": "checkbox-group",
          "name": "endurance_activities",
          "label": "Select Endurance Activities",
          "options": [
            {
              "label": "Treadmill (10–20 min, HR 60–70%)",
              "value": "treadmill"
            },
            {
              "label": "Cycling (10 min)",
              "value": "cycling"
            },
            {
              "label": "Stair Climbing",
              "value": "stairs"
            },
            {
              "label": "Recumbent Bike",
              "value": "recumbent_bike"
            }
          ]
        },
        {
          "type": "input",
          "name": "endurance_duration",
          "label": "Duration (Minutes)"
        },
        {
          "type": "input",
          "name": "endurance_notes",
          "label": "Endurance Notes"
        },
        {
          "type": "subheading",
          "label": "Balance Training"
        },
        {
          "type": "checkbox-group",
          "name": "balance_exercises",
          "label": "Select Balance Exercises",
          "options": [
            {
              "label": "Single Leg Stance",
              "value": "single_leg"
            },
            {
              "label": "Tandem Stance",
              "value": "tandem_stance"
            },
            {
              "label": "Dynamic Stepping Drills",
              "value": "dynamic_stepping"
            },
            {
              "label": "Turn & Look",
              "value": "turn_look"
            },
            {
              "label": "Reach Exercises",
              "value": "reach"
            },
            {
              "label": "Weight Shifting",
              "value": "weight_shift"
            }
          ]
        },
        {
          "type": "input",
          "name": "balance_notes",
          "label": "Balance Notes"
        },
        {
          "type": "input",
          "name": "home_frequency",
          "label": "Frequency (e.g., 3×/week)"
        },
        {
          "type": "subheading",
          "label": "Follow-up Plan"
        },
        {
          "name": "follow_up_plan",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Reassessment scheduled in 2–4 weeks",
              "value": "reassessment_2_4_weeks"
            },
            {
              "label": "Track progress via Outcome measures",
              "value": "track_progress_outcome_measures"
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