const SUBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "name": "complaint",
          "label": "Cheif Complaint",
          "type": "input",
          "placeholder": "Therapist assessment..."
        },
        {
          "name": "History of Present",
          "label": "History of Present Illnes",
          "type": "input"
        }
      ]
    }
  ]
}

const OBJECTIVE = {
  "sections": [
    {
      "title": "Therapeutic Interventions",
      "fields": [
        {
          "name": "treatment_given",
          "label": "Therapeutic Exercise ",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Therapeutic Exercise",
              "value": "therapeutic_exercise"
            },
            {
              "label": "Group Exercise",
              "value": "group_exercise"
            },
            {
              "label": "Water Specific Therapy",
              "value": "water_specific_therapy"
            },
            {
              "label": "Bad Ragaz",
              "value": "bad_ragaz"
            },
            {
              "label": "Ai-Chi",
              "value": "ai_chi"
            },
            {
              "label": "Halliwick",
              "value": "halliwick"
            },
            {
              "label": "Watsu",
              "value": "watsu"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Therapeutic Exercise",
          "showIf": {
            "field": "treatment_given",
            "includes": "therapeutic_exercise"
          }
        },
        {
          "name": "therapeutic_exercises",
          "label": "Select Therapeutic Exercises",
          "type": "checkbox-group",
          "showIf": {
            "field": "treatment_given",
            "includes": "therapeutic_exercise"
          },
          "options": [
            {
              "label": "ROM exercise",
              "value": "rom_exercise"
            },
            {
              "label": "Strengthening exercise",
              "value": "strengthening_exercise"
            },
            {
              "label": "Warm-up / Aquatic Gait",
              "value": "warmup_gait"
            },
            {
              "label": "Resistance (Buoyancy)",
              "value": "resistance_buoyancy"
            },
            {
              "label": "Weight-bearing",
              "value": "weight_bearing"
            },
            {
              "label": "Balance & Stability",
              "value": "balance_stability"
            },
            {
              "label": "Stretching in water",
              "value": "stretching_water"
            },
            {
              "label": "Back exercise",
              "value": "back_exercise"
            },
            {
              "label": "Endurance training",
              "value": "endurance_training"
            }
          ]
        },
        {
          "name": "rom_type",
          "label": "ROM Type",
          "type": "radio",
          "options": [
            {
              "label": "Passive",
              "value": "passive"
            },
            {
              "label": "Active",
              "value": "active"
            },
            {
              "label": "Assisted",
              "value": "assisted"
            }
          ],
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "rom_exercise"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "rom_exercise"
          },
          "fields": [
            {
              "name": "rom_remarks",
              "label": "ROM Remarks",
              "type": "input"
            }
          ]
        },
        {
          "name": "strength_area",
          "label": "Strengthening Area",
          "type": "radio",
          "options": [
            {
              "label": "Upper Limb",
              "value": "ul"
            },
            {
              "label": "Lower Limb",
              "value": "ll"
            }
          ],
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "strengthening_exercise"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "strengthening_exercise"
          },
          "fields": [
            {
              "name": "strength_remarks",
              "label": "Strengthening Remarks",
              "type": "input"
            }
          ]
        },
        {
          "name": "gait_type",
          "label": "Gait Training Type",
          "type": "radio",
          "options": [
            {
              "label": "With BWS",
              "value": "with_bws"
            },
            {
              "label": "Without BWS",
              "value": "without_bws"
            },
            {
              "label": "Parallel Bar",
              "value": "parallel_bar"
            }
          ],
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "warmup_gait"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "warmup_gait"
          },
          "fields": [
            {
              "name": "gait_remarks",
              "label": "Gait Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "resistance_buoyancy"
          },
          "fields": [
            {
              "name": "resistance_remarks",
              "label": "Resistance Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "weight_bearing"
          },
          "fields": [
            {
              "name": "weight_bearing_remarks",
              "label": "Weight Bearing Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "balance_stability"
          },
          "fields": [
            {
              "name": "balance_remarks",
              "label": "Balance Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "stretching_water"
          },
          "fields": [
            {
              "name": "stretching_remarks",
              "label": "Stretching Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "back_exercise"
          },
          "fields": [
            {
              "name": "back_remarks",
              "label": "Back Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "endurance_training"
          },
          "fields": [
            {
              "name": "endurance_remarks",
              "label": "Endurance Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "treatment_given",
            "includes": "group_exercise"
          },
          "fields": [
            {
              "name": "group_exercise_remarks",
              "label": "Group Exercise Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "treatment_given",
            "includes": "water_specific_therapy"
          },
          "fields": [
            {
              "name": "water_specific_therapy_remarks",
              "label": "Water Specific Therapy Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "treatment_given",
            "includes": "bad_ragaz"
          },
          "fields": [
            {
              "name": "bad_ragaz_remarks",
              "label": "Bad Ragaz Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "treatment_given",
            "includes": "ai_chi"
          },
          "fields": [
            {
              "name": "ai_chi_remarks",
              "label": "Ai-Chi Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "treatment_given",
            "includes": "halliwick"
          },
          "fields": [
            {
              "name": "halliwick_remarks",
              "label": "Halliwick Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "treatment_given",
            "includes": "watsu"
          },
          "fields": [
            {
              "name": "watsu_remarks",
              "label": "Watsu Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "treatment_given",
            "includes": "others"
          },
          "fields": [
            {
              "name": "treatment_given_others",
              "label": "Others",
              "type": "input"
            }
          ]
        },
        {
          "name": "therapeutic_modalities",
          "label": "Therapeutic Modalities",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Hydropool",
              "value": "hydropool"
            },
            {
              "label": "Infrared Sauna",
              "value": "infrared_sauna"
            },
            {
              "label": "Upper Limb Whirlpool",
              "value": "upper_whirlpool"
            },
            {
              "label": "Lower Limb Whirlpool",
              "value": "lower_whirlpool"
            },
            {
              "label": "Aquatic Treadmill",
              "value": "aquatic_treadmill"
            },
            {
              "label": "Butterfly Shape Hydrotherapy Bath",
              "value": "butterfly_bath"
            },
            {
              "label": "Underwater Bicycle (EWAC)",
              "value": "underwater_bicycle"
            },
            {
              "label": "Self-Propelled Treadmill (EWAC)",
              "value": "self_treadmill"
            },
            {
              "label": "Water Jet Massage",
              "value": "water_jet_massage"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "therapeutic_modalities",
            "includes": "hydropool"
          },
          "fields": [
            {
              "name": "hydropool_water_level",
              "label": "Water Level (meters)",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "therapeutic_modalities",
            "includes": "infrared_sauna"
          },
          "fields": [
            {
              "name": "infrared_programme",
              "label": "Programme",
              "type": "input"
            },
            {
              "name": "infrared_temp",
              "label": "Temperature",
              "type": "input"
            },
            {
              "name": "infrared_minutes",
              "label": "Minutes",
              "type": "input"
            },
            {
              "name": "infrared_remarks",
              "label": "Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "therapeutic_modalities",
            "includes": "upper_whirlpool"
          },
          "fields": [
            {
              "name": "upper_whirlpool_minutes",
              "label": "Minutes",
              "type": "input"
            },
            {
              "name": "upper_whirlpool_temp",
              "label": "Temperature",
              "type": "input"
            },
            {
              "name": "upper_whirlpool_remarks",
              "label": "Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "therapeutic_modalities",
            "includes": "lower_whirlpool"
          },
          "fields": [
            {
              "name": "lower_whirlpool_minutes",
              "label": "Minutes",
              "type": "input"
            },
            {
              "name": "lower_whirlpool_temp",
              "label": "Temperature",
              "type": "input"
            },
            {
              "name": "lower_whirlpool_remarks",
              "label": "Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "therapeutic_modalities",
            "includes": "aquatic_treadmill"
          },
          "fields": [
            {
              "name": "aquatic_minutes",
              "label": "Minutes",
              "type": "input"
            },
            {
              "name": "aquatic_speed",
              "label": "Speed",
              "type": "input"
            },
            {
              "name": "aquatic_water_level",
              "label": "Water Level",
              "type": "input"
            },
            {
              "name": "aquatic_remarks",
              "label": "Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "therapeutic_modalities",
            "includes": "butterfly_bath"
          },
          "fields": [
            {
              "name": "butterfly_minutes",
              "label": "Minutes",
              "type": "input"
            },
            {
              "name": "butterfly_temp",
              "label": "Temperature",
              "type": "input"
            },
            {
              "name": "butterfly_remarks",
              "label": "Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "therapeutic_modalities",
            "includes": "underwater_bicycle"
          },
          "fields": [
            {
              "name": "underwater_bike_minutes",
              "label": "Minutes",
              "type": "input"
            },
            {
              "name": "underwater_bike_remarks",
              "label": "Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "therapeutic_modalities",
            "includes": "self_treadmill"
          },
          "fields": [
            {
              "name": "self_treadmill_minutes",
              "label": "Minutes",
              "type": "input"
            },
            {
              "name": "self_treadmill_remarks",
              "label": "Remarks",
              "type": "input"
            }
          ]
        },
        {
          "name": "waterjet_intensity",
          "label": "Intensity",
          "type": "radio",
          "options": [
            {
              "label": "Low",
              "value": "low"
            },
            {
              "label": "Medium",
              "value": "medium"
            },
            {
              "label": "High",
              "value": "high"
            }
          ],
          "showIf": {
            "field": "therapeutic_modalities",
            "includes": "water_jet_massage"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "therapeutic_modalities",
            "includes": "water_jet_massage"
          },
          "fields": [
            {
              "name": "waterjet_remarks",
              "label": "Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "therapeutic_modalities",
            "includes": "others"
          },
          "fields": [
            {
              "name": "modalities_others",
              "label": "Others",
              "type": "input"
            }
          ]
        },
        {
          "name": "pain_management",
          "label": "Pain Management",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Heat Therapy",
              "value": "heat_therapy"
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "pain_management",
            "includes": "heat_therapy"
          },
          "fields": [
            {
              "name": "heat_therapy_remarks",
              "label": "Heat Therapy Remarks",
              "type": "input"
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
          "name": "assessment_notes",
          "label": "Clinical Impression / Notes",
          "type": "input",
          "placeholder": "Therapist assessment..."
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
          "name": "plan_therapist_notes",
          "label": "Therapist Notes",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Continue exercise program",
              "value": "continue_exercise_program"
            },
            {
              "label": "Improve strength",
              "value": "improve_strength"
            },
            {
              "label": "Increase ROM",
              "value": "increase_rom"
            },
            {
              "label": "Improve balance",
              "value": "improve_balance"
            },
            {
              "label": "Progress gait training",
              "value": "progress_gait_training"
            },
            {
              "label": "Improve endurance",
              "value": "improve_endurance"
            },
            {
              "label": "Improve postural and core control",
              "value": "improve_postural_core_control"
            },
            {
              "label": "Improve water confidence",
              "value": "improve_water_confidence"
            },
            {
              "label": "Improve swimming modification",
              "value": "improve_swimming_modification"
            },
            {
              "label": "Progress with specialized aquatic therapy program",
              "value": "aquatic_therapy_progress"
            },
            {
              "label": "Requires ongoing supervision for safety",
              "value": "requires_supervision"
            },
            {
              "label": "Monitor vital signs during exercise",
              "value": "monitor_vitals"
            },
            {
              "label": "Patient education",
              "value": "patient_education"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "plan_therapist_notes_others",
          "label": "Others (Specify)",
          "type": "input",
          "showIf": {
            "field": "plan_therapist_notes",
            "includes": "others"
          }
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
};