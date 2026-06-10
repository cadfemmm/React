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
  "fields": [
    {
      "name": "chief_complaint",
      "label": "Chief Complaint",
      "type": "input"
    },
    {
      "name": "hopi",
      "label": "History of Presenting Illness",
      "type": "input"
    },
    {
      "name": "pain_score",
      "label": "Pain Score(Visual Analog Scale)",
      "type": "scale-slider",
      "min": 0,
      "max": 10,
      "ranges": [
        {
          "min": 0,
          "max": 1,
          "label": "Mild",
          "color": "#22c55e"
        },
        {
          "min": 1,
          "max": 5,
          "label": "Moderate",
          "color": "#facc15"
        },
        {
          "min": 5,
          "max": 10,
          "label": "Severe",
          "color": "#ef4444"
        }
      ],
      "showValue": true
    },
    {
      "name": "medication",
      "label": "Current Medication",
      "type": "input"
    },
    {
      "name": "social_history",
      "label": "Social History",
      "type": "subheading"
    },
    {
      "name": "house_type",
      "label": "Type of House",
      "type": "radio",
      "options": [
        {
          "label": "Single storey",
          "value": "single"
        },
        {
          "label": "Double storey",
          "value": "double"
        },
        {
          "label": "Apartment with lift",
          "value": "apartment"
        },
        {
          "label": "Others",
          "value": "others"
        }
      ]
    },
    {
      "name": "house_type_other",
      "label": "Specify",
      "type": "input",
      "showIf": {
        "field": "house_type",
        "equals": "others"
      }
    },
    {
      "name": "toilet_type",
      "label": "Toilet type",
      "type": "radio",
      "options": [
        {
          "label": "Sitting",
          "value": "sitting"
        },
        {
          "label": "Squatting",
          "value": "squatting"
        }
      ]
    },
    {
      "name": "marital_status",
      "label": "Marital Status",
      "type": "radio",
      "options": [
        {
          "label": "Single",
          "value": "single"
        },
        {
          "label": "Married",
          "value": "married"
        },
        {
          "label": "Divorced",
          "value": "divorced"
        }
      ]
    },
    {
      "name": "care_giver",
      "label": "Caregiver",
      "type": "radio",
      "options": [
        {
          "label": "Live Alone",
          "value": "live_alone"
        },
        {
          "label": "Lives With Family",
          "value": "live_with_family"
        }
      ]
    },
    {
      "name": "employement_status",
      "label": "Employement Status",
      "type": "radio",
      "options": [
        {
          "label": "Employed",
          "value": "employed"
        },
        {
          "label": "Unemployed",
          "value": "unemployed"
        }
      ]
    },
    {
      "name": "Patient-Reported Functional Goals",
      "label": "Patient Reported Functional Goals",
      "type": "input"
    },
    {
      "name": "bowel_control",
      "label": "Bowel control",
      "type": "radio",
      "options": [
        {
          "label": "Continence",
          "value": "continence"
        },
        {
          "label": "Incontinence",
          "value": "incontinence"
        }
      ]
    },
    {
      "name": "bowel_control_details",
      "label": "Bowel Incontinence Details",
      "type": "input",
      "placeholder": "Enter bowel incontinence details",
      "showIf": {
        "field": "bowel_control",
        "equals": "incontinence"
      }
    },
    {
      "name": "bladder",
      "label": "Bladder control",
      "type": "radio",
      "options": [
        {
          "label": "Continence",
          "value": "continence"
        },
        {
          "label": "Incontinence",
          "value": "incontinence"
        }
      ]
    },
    {
      "name": "bladder_details",
      "label": "Bladder Incontinence Details",
      "type": "input",
      "placeholder": "Enter bladder incontinence details",
      "showIf": {
        "field": "bladder",
        "equals": "incontinence"
      }
    }
  ]
}

const OBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "General Observation"
        },
        {
          "name": "body_size",
          "label": "Body Size",
          "type": "radio",
          "options": [
            {
              "label": "Ectomorph",
              "value": "ectomorph"
            },
            {
              "label": "Mesomorph",
              "value": "mesomorph"
            },
            {
              "label": "Endomorph",
              "value": "endomorph"
            }
          ]
        },
        {
          "name": "ambulation",
          "label": "Ambulation",
          "type": "radio",
          "options": [
            {
              "label": "Wheelchair (self propel)",
              "value": "wheelchair_self"
            },
            {
              "label": "Wheelchair (motorized)",
              "value": "wheelchair_motor"
            },
            {
              "label": "Wheelchair (assist by carer)",
              "value": "wheelchair_carer"
            },
            {
              "label": "Walking aids",
              "value": "walking_aids"
            },
            {
              "label": "Walk independently",
              "value": "independent"
            }
          ]
        },
        {
          "name": "walking_aids_type",
          "label": "Walking Aids (specify)",
          "type": "input",
          "placeholder": "e.g. elbow crutches, walking frame...",
          "showIf": {
            "field": "ambulation",
            "equals": "walking_aids"
          }
        },
        {
          "name": "accompanied_by",
          "label": "Accompanied By",
          "type": "radio",
          "options": [
            {
              "label": "With carer",
              "value": "with_carer"
            },
            {
              "label": "Without carer",
              "value": "without_carer"
            }
          ]
        },
        {
          "name": "generated_observation_display",
          "label": "Generated Observation",
          "type": "input",
          "readOnly": true,
          "showIf": {
            "field": "generated_observation_display",
            "notEmpty": true
          }
        },
        {
          "name": "local_observations",
          "label": "Local Observations",
          "type": "input"
        },
        {
          "name": "palpation",
          "label": "Palpation",
          "type": "input"
        },
        {
          "type": "subheading",
          "label": "Scales / Outcome Measures"
        },
        {
          "name": "spinal_scales_launcher",
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
              "label": "Muscle Tone (MAS)",
              "value": "mas"
            },
            {
              "label": "10 Meter Walk Test",
              "value": "tenmwt"
            },
            {
              "label": "Berg Balance Scale (BBS)",
              "value": "bbs"
            },
            {
              "label": "Timed Up and Go (TUG)",
              "value": "tug"
            },
            {
              "label": "6 Minutes Walk Test (6MWT)",
              "value": "sixmwt"
            },
            {
              "label": "6 Minutes Wheelchair Pust Test",
              "value": "sixmwpt"
            },
            {
              "label": "Wheelchair Skills Test",
              "value": "wst"
            },
            {
              "label": "Walking Index for Spinal Cord Injury",
              "value": "wisci"
            },
            {
              "label": "Modified Functional Reach Test",
              "value": "mfrt"
            }
          ]
        },
        {
          "name": "spinal_scales",
          "type": "multi-select-dropdown",
          "label": "Select Outcome Measures",
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
              "label": "Muscle Tone (MAS)",
              "value": "mas"
            },
            {
              "label": "10 Meter Walk Test",
              "value": "tenmwt"
            },
            {
              "label": "Berg Balance Scale (BBS)",
              "value": "bbs"
            },
            {
              "label": "Timed Up and Go (TUG)",
              "value": "tug"
            },
            {
              "label": "6 Minutes Walk Test (6MWT)",
              "value": "sixmwt"
            },
            {
              "label": "6 Minutes Wheelchair Push Test",
              "value": "sixmwpt"
            },
            {
              "label": "Wheelchair Skills Test",
              "value": "wst"
            },
            {
              "label": "Walking Index for Spinal Cord Injury",
              "value": "wisci"
            },
            {
              "label": "Modified Functional Reach Test",
              "value": "mfrt"
            }
          ]
        },
        {
          "name": "rom_params",
          "label": "ROM — Parameters / Notes",
          "type": "input",
          "showIf": {
            "field": "spinal_scales",
            "includes": "rom"
          }
        },
        {
          "name": "mmt_params",
          "label": "MMT — Parameters / Notes",
          "type": "input",
          "showIf": {
            "field": "spinal_scales",
            "includes": "mmt"
          }
        },
        {
          "name": "mas_params",
          "label": "MAS — Parameters / Notes",
          "type": "input",
          "showIf": {
            "field": "spinal_scales",
            "includes": "mas"
          }
        },
        {
          "name": "tenmwt_params",
          "label": "10 Meter Walk Test — Parameters / Notes",
          "type": "input",
          "showIf": {
            "field": "spinal_scales",
            "includes": "tenmwt"
          }
        },
        {
          "name": "bbs_params",
          "label": "Berg Balance Scale — Parameters / Notes",
          "type": "input",
          "showIf": {
            "field": "spinal_scales",
            "includes": "bbs"
          }
        },
        {
          "name": "tug_params",
          "label": "TUG — Parameters / Notes",
          "type": "input",
          "showIf": {
            "field": "spinal_scales",
            "includes": "tug"
          }
        },
        {
          "name": "sixmwt_params",
          "label": "6MWT — Parameters / Notes",
          "type": "input",
          "showIf": {
            "field": "spinal_scales",
            "includes": "sixmwt"
          }
        },
        {
          "name": "sixmwpt_params",
          "label": "6 Min Wheelchair Push Test — Parameters / Notes",
          "type": "input",
          "showIf": {
            "field": "spinal_scales",
            "includes": "sixmwpt"
          }
        },
        {
          "name": "wst_params",
          "label": "Wheelchair Skills Test — Parameters / Notes",
          "type": "input",
          "showIf": {
            "field": "spinal_scales",
            "includes": "wst"
          }
        },
        {
          "name": "wisci_params",
          "label": "WISCI — Parameters / Notes",
          "type": "input",
          "showIf": {
            "field": "spinal_scales",
            "includes": "wisci"
          }
        },
        {
          "name": "mfrt_params",
          "label": "MFRT — Parameters / Notes",
          "type": "input",
          "showIf": {
            "field": "spinal_scales",
            "includes": "mfrt"
          }
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
          "name": "equipment_list",
          "label": "Equipment List",
          "type": "equipment-list",
          "options": []
        },
        {
          "type": "subheading",
          "label": "Treatment Plan"
        },
        {
          "name": "intervention_plan",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Stretching",
              "value": "stretching"
            },
            {
              "label": "Strengthening",
              "value": "strengthening"
            },
            {
              "label": "Sitting Balance Training",
              "value": "sitting_balance_training"
            },
            {
              "label": "Standing Balance Training",
              "value": "standing_balance_training"
            },
            {
              "label": "Endurance Training",
              "value": "endurance_training"
            },
            {
              "label": "Gait Training",
              "value": "gait_training"
            },
            {
              "label": "Transfer Training",
              "value": "transfer_training"
            },
            {
              "label": "Wheelchair Skills Training",
              "value": "wheelchair_skills_training"
            },
            {
              "label": "Walking Aids Prescription",
              "value": "walking_aids_prescription"
            }
          ]
        },
        {
          "name": "stretching_frequency",
          "label": "Stretching - Frequency",
          "type": "input",
          "placeholder": "e.g. 3 times per week",
          "showIf": {
            "field": "intervention_plan",
            "includes": "stretching"
          }
        },
        {
          "name": "stretching_duration",
          "label": "Stretching - Duration",
          "type": "input",
          "placeholder": "e.g. 6 weeks",
          "showIf": {
            "field": "intervention_plan",
            "includes": "stretching"
          }
        },
        {
          "name": "strengthening_frequency",
          "label": "Strengthening - Frequency",
          "type": "input",
          "placeholder": "e.g. 3 times per week",
          "showIf": {
            "field": "intervention_plan",
            "includes": "strengthening"
          }
        },
        {
          "name": "strengthening_duration",
          "label": "Strengthening - Duration",
          "type": "input",
          "placeholder": "e.g. 6 weeks",
          "showIf": {
            "field": "intervention_plan",
            "includes": "strengthening"
          }
        },
        {
          "name": "sitting_balance_training_frequency",
          "label": "Sitting Balance Training - Frequency",
          "type": "input",
          "placeholder": "e.g. 3 times per week",
          "showIf": {
            "field": "intervention_plan",
            "includes": "sitting_balance_training"
          }
        },
        {
          "name": "sitting_balance_training_duration",
          "label": "Sitting Balance Training - Duration",
          "type": "input",
          "placeholder": "e.g. 6 weeks",
          "showIf": {
            "field": "intervention_plan",
            "includes": "sitting_balance_training"
          }
        },
        {
          "name": "standing_balance_training_frequency",
          "label": "Standing Balance Training - Frequency",
          "type": "input",
          "placeholder": "e.g. 3 times per week",
          "showIf": {
            "field": "intervention_plan",
            "includes": "standing_balance_training"
          }
        },
        {
          "name": "standing_balance_training_duration",
          "label": "Standing Balance Training - Duration",
          "type": "input",
          "placeholder": "e.g. 6 weeks",
          "showIf": {
            "field": "intervention_plan",
            "includes": "standing_balance_training"
          }
        },
        {
          "name": "endurance_training_frequency",
          "label": "Endurance Training - Frequency",
          "type": "input",
          "placeholder": "e.g. 3 times per week",
          "showIf": {
            "field": "intervention_plan",
            "includes": "endurance_training"
          }
        },
        {
          "name": "endurance_training_duration",
          "label": "Endurance Training - Duration",
          "type": "input",
          "placeholder": "e.g. 6 weeks",
          "showIf": {
            "field": "intervention_plan",
            "includes": "endurance_training"
          }
        },
        {
          "name": "gait_training_frequency",
          "label": "Gait Training - Frequency",
          "type": "input",
          "placeholder": "e.g. 3 times per week",
          "showIf": {
            "field": "intervention_plan",
            "includes": "gait_training"
          }
        },
        {
          "name": "gait_training_duration",
          "label": "Gait Training - Duration",
          "type": "input",
          "placeholder": "e.g. 6 weeks",
          "showIf": {
            "field": "intervention_plan",
            "includes": "gait_training"
          }
        },
        {
          "name": "transfer_training_frequency",
          "label": "Transfer Training - Frequency",
          "type": "input",
          "placeholder": "e.g. 3 times per week",
          "showIf": {
            "field": "intervention_plan",
            "includes": "transfer_training"
          }
        },
        {
          "name": "transfer_training_duration",
          "label": "Transfer Training - Duration",
          "type": "input",
          "placeholder": "e.g. 6 weeks",
          "showIf": {
            "field": "intervention_plan",
            "includes": "transfer_training"
          }
        },
        {
          "name": "wheelchair_skills_training_frequency",
          "label": "Wheelchair Skills Training - Frequency",
          "type": "input",
          "placeholder": "e.g. 3 times per week",
          "showIf": {
            "field": "intervention_plan",
            "includes": "wheelchair_skills_training"
          }
        },
        {
          "name": "wheelchair_skills_training_duration",
          "label": "Wheelchair Skills Training - Duration",
          "type": "input",
          "placeholder": "e.g. 6 weeks",
          "showIf": {
            "field": "intervention_plan",
            "includes": "wheelchair_skills_training"
          }
        },
        {
          "name": "walking_aids_prescription_frequency",
          "label": "Walking Aids Prescription - Frequency",
          "type": "input",
          "placeholder": "e.g. Once during treatment",
          "showIf": {
            "field": "intervention_plan",
            "includes": "walking_aids_prescription"
          }
        },
        {
          "name": "walking_aids_prescription_duration",
          "label": "Walking Aids Prescription - Duration",
          "type": "input",
          "placeholder": "e.g. 1 session",
          "showIf": {
            "field": "intervention_plan",
            "includes": "walking_aids_prescription"
          }
        },
        {
          "type": "subheading",
          "label": "Interventions Plan"
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
          "label": "HEP (home exercise program)"
        },
        {
          "name": "hep_home_exercise_program",
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
              "label": "Standing / sitting balance training",
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
              "label": "Patient & carer education",
              "value": "patient_carer_education"
            },
            {
              "label": "Others",
              "value": "other"
            }
          ]
        },
        {
          "type": "subheading",
          "label": " Follow-up plans"
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
              "label": "Track progress via outcome measures",
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