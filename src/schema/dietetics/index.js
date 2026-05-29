const SUBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Nutrition Assessment"
        },
        {
          "name": "chief_complaint",
          "label": "Chief Complaint",
          "type": "textarea"
        },
        {
          "name": "medical_history",
          "label": "History of Presenting Illness (HPI)",
          "type": "textarea"
        },
        {
          "type": "subheading",
          "label": "Initial Evaluation - Screening"
        },
        {
          "name": "oral_intake",
          "label": "Oral Intake",
          "type": "radio",
          "options": [
            {
              "label": "Normal",
              "value": "Yes"
            },
            {
              "label": "Impaired",
              "value": "No"
            }
          ]
        },
        {
          "name": "tube_type",
          "label": "NG / PEG / Others",
          "type": "input",
          "showIf": {
            "field": "oral_intake",
            "equals": "No"
          }
        },
        {
          "name": "swallowing_issue",
          "label": "Swallowing",
          "type": "radio",
          "options": [
            {
              "label": "Normal",
              "value": "No"
            },
            {
              "label": "Impaired",
              "value": "Yes"
            }
          ]
        },
        {
          "name": "chewing_issue",
          "label": "Chewing",
          "type": "radio",
          "options": [
            {
              "label": "Normal",
              "value": "No"
            },
            {
              "label": "Impaired",
              "value": "Yes"
            }
          ]
        },
        {
          "name": "dentition_issue",
          "label": "Dentition",
          "type": "radio",
          "options": [
            {
              "label": "Normal",
              "value": "No"
            },
            {
              "label": "Impaired",
              "value": "Yes"
            }
          ]
        },
        {
          "name": "appetite",
          "label": "Appetite",
          "type": "radio",
          "options": [
            {
              "label": "Good",
              "value": "Good"
            },
            {
              "label": "Poor",
              "value": "Poor"
            }
          ]
        },
        {
          "name": "nausea",
          "label": "Nausea",
          "type": "radio",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "name": "vomiting",
          "label": "Vomiting",
          "type": "radio",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Bowel Status"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "bo",
              "label": "Bowel Control",
              "type": "radio",
              "options": [
                {
                  "label": "Continent",
                  "value": "CONTINENT"
                },
                {
                  "label": "Incontinent",
                  "value": "INCONTINENT"
                }
              ],
              "readOnly": true
            },
            {
              "name": "bo_details",
              "label": "Bowel Pattern",
              "type": "single-select",
              "options": [
                {
                  "label": "Normal",
                  "value": "NORMAL"
                },
                {
                  "label": "Constipation",
                  "value": "CONSTIPATION"
                },
                {
                  "label": "Diarrhea",
                  "value": "DIARRHEA"
                },
                {
                  "label": "Others",
                  "value": "OTHERS"
                }
              ]
            }
          ]
        },
        {
          "name": "bo_pattern_details",
          "label": "Details",
          "type": "textarea",
          "showIf": {
            "field": "bo_details",
            "oneOf": [
              "CONSTIPATION",
              "DIARRHEA",
              "OTHERS"
            ]
          }
        },
        {
          "type": "subheading",
          "label": "Bladder Status"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "pu",
              "label": "Bladder Control",
              "type": "radio",
              "options": [
                {
                  "label": "Continent",
                  "value": "CONTINENT"
                },
                {
                  "label": "Incontinent",
                  "value": "INCONTINENT"
                }
              ],
              "readOnly": true
            },
            {
              "name": "voiding_method",
              "label": "Voiding Method",
              "type": "single-select",
              "options": [
                {
                  "label": "Spontaneous",
                  "value": "Spontaneous"
                },
                {
                  "label": "Condom catheter",
                  "value": "Condom"
                },
                {
                  "label": "CIC",
                  "value": "CIC"
                },
                {
                  "label": "CBD",
                  "value": "CBD"
                },
                {
                  "label": "Other",
                  "value": "Other"
                }
              ]
            }
          ]
        },
        {
          "name": "voiding_method_other",
          "label": "Specify other",
          "type": "input",
          "showIf": {
            "field": "voiding_method",
            "equals": "Other"
          }
        },
        {
          "name": "sleep",
          "label": "Sleeping Pattern",
          "type": "single-select",
          "options": [
            {
              "label": "Good",
              "value": "Good"
            },
            {
              "label": "Difficulty in sleeping due to Pain",
              "value": "PAIN"
            },
            {
              "label": "Difficulty in sleeping due to other reason",
              "value": "OTHER"
            },
            {
              "label": "Difficulty in sleeping",
              "value": "NOREASON"
            }
          ]
        },
        {
          "name": "sleep_difficulty_reason",
          "label": "Reason",
          "type": "textarea",
          "showIf": {
            "field": "sleep",
            "oneOf": [
              "OTHER"
            ]
          }
        },
        {
          "name": "hypoglycemic_episode",
          "label": "Hypoglycemic Episode",
          "type": "single-select",
          "options": [
            {
              "label": "Never",
              "value": "Never"
            },
            {
              "label": "Occasional",
              "value": "Occasional"
            },
            {
              "label": "Frequent",
              "value": "Frequent"
            },
            {
              "label": "Unknown",
              "value": "UNKNOWN"
            },
            {
              "label": "Not Relevant",
              "value": "NOT_RELEVANT"
            }
          ]
        },
        {
          "name": "hypoglycemic_episode_details",
          "label": "Hypoglycemic Episode Details",
          "type": "textarea",
          "placeholder": "Please specify...",
          "showIf": {
            "field": "hypoglycemic_episode",
            "oneOf": [
              "Occasional",
              "Frequent",
              "UNKNOWN"
            ]
          }
        },
        {
          "name": "other_complaints",
          "label": "Other Nutrition-Related Complaints",
          "type": "textarea"
        },
        {
          "type": "subheading",
          "label": "Food / Nutrition Related History"
        },
        {
          "name": "medications",
          "label": "List of Medication",
          "type": "textarea",
          "readOnly": true
        },
        {
          "name": "feeding_type",
          "label": "Feeding Type",
          "type": "radio",
          "options": [
            {
              "label": "Oral Feeding",
              "value": "oral"
            },
            {
              "label": "Enteral Feeding",
              "value": "enteral"
            },
            {
              "label": "Mixed Feeding",
              "value": "mixed"
            }
          ]
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "diet_breakfast",
              "label": "Breakfast",
              "type": "textarea"
            },
            {
              "name": "diet_morning_tea",
              "label": "Morning Tea",
              "type": "textarea"
            },
            {
              "name": "diet_lunch",
              "label": "Lunch",
              "type": "textarea"
            },
            {
              "name": "diet_afternoon_tea",
              "label": "Afternoon Tea",
              "type": "textarea"
            },
            {
              "name": "diet_supper",
              "label": "Dinner",
              "type": "textarea"
            },
            {
              "name": "diet_dinner",
              "label": "Supper",
              "type": "textarea"
            }
          ],
          "showIf": {
            "field": "feeding_type",
            "equals": "oral"
          }
        },
        {
          "name": "enteral_feeding_table",
          "label": "Enteral Feeding",
          "type": "enteral-feeding-table",
          "showIf": {
            "field": "feeding_type",
            "equals": "enteral"
          }
        },
        {
          "name": "enteral_feeding_details",
          "label": "Enteral Feeding Notes",
          "type": "textarea",
          "showIf": {
            "field": "feeding_type",
            "equals": "enteral"
          }
        },
        {
          "name": "mixed_feeding_table",
          "label": "Mixed Feeding",
          "type": "enteral-feeding-table",
          "showIf": {
            "field": "feeding_type",
            "equals": "mixed"
          }
        },
        {
          "name": "mixed_feeding_details",
          "label": "Mixed Feeding Notes",
          "type": "textarea",
          "showIf": {
            "field": "feeding_type",
            "equals": "mixed"
          }
        },
        {
          "type": "subheading",
          "label": "Texture Modification @ IDDSI Level",
          "showIf": {
            "field": "feeding_type",
            "oneOf": [
              "oral",
              "mixed"
            ]
          }
        },
        {
          "name": "iddsi_food",
          "label": "Food",
          "type": "radio",
          "labelAbove": true,
          "showIf": {
            "field": "feeding_type",
            "oneOf": [
              "oral",
              "mixed"
            ]
          },
          "options": [
            {
              "label": "7 – Regular",
              "value": "7"
            },
            {
              "label": "6 – Easy To Chew",
              "value": "6"
            },
            {
              "label": "5 – Soft & Bite-Sized",
              "value": "5"
            },
            {
              "label": "4 – Pureed",
              "value": "4"
            },
            {
              "label": "3 – Liquidised",
              "value": "3"
            }
          ]
        },
        {
          "name": "iddsi_drink",
          "label": "Drink",
          "type": "radio",
          "labelAbove": true,
          "showIf": {
            "field": "feeding_type",
            "oneOf": [
              "oral",
              "mixed"
            ]
          },
          "options": [
            {
              "label": "0 – Thin",
              "value": "0"
            },
            {
              "label": "1 – Slightly Thick",
              "value": "1"
            },
            {
              "label": "2 – Mildly Thick",
              "value": "2"
            },
            {
              "label": "3 – Moderately Thick",
              "value": "3"
            },
            {
              "label": "4 – Extremely Thick",
              "value": "4"
            }
          ]
        },
        {
          "name": "fluid_intake_details",
          "label": "Fluid Intake",
          "type": "input",
          "showIf": {
            "field": "feeding_type",
            "oneOf": [
              "oral",
              "enteral",
              "mixed"
            ]
          }
        },
        {
          "name": "cdi_frequency",
          "label": "Frequency (times/day)",
          "type": "input",
          "showIf": {
            "field": "current_diet_intake_type",
            "equals": "oral_enteral"
          }
        },
        {
          "name": "cdi_enteral_type",
          "label": "Type",
          "type": "radio",
          "labelAbove": true,
          "showIf": {
            "field": "current_diet_intake_type",
            "equals": "enteral"
          },
          "options": [
            {
              "label": "OGT",
              "value": "OGT"
            },
            {
              "label": "NGT",
              "value": "NGT"
            },
            {
              "label": "NJT",
              "value": "NJT"
            },
            {
              "label": "G-tube",
              "value": "G-tube"
            },
            {
              "label": "J-tube",
              "value": "J-tube"
            }
          ]
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "cdi_enteral_scoops",
              "label": "Regimen – Scoops",
              "type": "input"
            },
            {
              "name": "cdi_enteral_water_ml",
              "label": "Water (ml)",
              "type": "input"
            }
          ],
          "showIf": {
            "field": "current_diet_intake_type",
            "equals": "enteral"
          }
        },
        {
          "name": "cdi_enteral_schedule",
          "label": "Feeding Schedule",
          "type": "radio",
          "showIf": {
            "field": "current_diet_intake_type",
            "equals": "enteral"
          },
          "options": [
            {
              "label": "3-hourly",
              "value": "3_hourly"
            },
            {
              "label": "4-hourly",
              "value": "4_hourly"
            },
            {
              "label": "Continuous",
              "value": "continuous"
            }
          ]
        },
        {
          "name": "cdi_enteral_iddsi_level",
          "label": "IDDSI Level",
          "type": "radio",
          "labelAbove": true,
          "showIf": {
            "field": "current_diet_intake_type",
            "equals": "enteral"
          },
          "options": [
            {
              "label": "Level 0 – Thin",
              "value": "0"
            },
            {
              "label": "Level 1 – Slightly Thick",
              "value": "1"
            },
            {
              "label": "Level 2 – Mildly Thick",
              "value": "2"
            },
            {
              "label": "Level 3 – Moderately Thick / Liquidised",
              "value": "3"
            },
            {
              "label": "Level 4 – Extremely Thick / Pureed",
              "value": "4"
            },
            {
              "label": "Level 5 – Minced & Moist",
              "value": "5"
            },
            {
              "label": "Level 6 – Soft & Bite-sized",
              "value": "6"
            },
            {
              "label": "Level 7EC – Easy to Chew",
              "value": "7EC"
            },
            {
              "label": "Level 7 – Regular",
              "value": "7"
            }
          ]
        },
        {
          "name": "cdi_enteral_fluids",
          "label": "Fluids",
          "type": "input",
          "showIf": {
            "field": "current_diet_intake_type",
            "equals": "enteral"
          }
        },
        {
          "name": "fluid_intake_details",
          "label": "Fluid Intake",
          "type": "input",
          "showIf": {
            "field": "current_diet_intake_type",
            "oneOf": [
              "oral_enteral",
              "enteral"
            ]
          }
        },
        {
          "name": "ffq_assessment",
          "label": "Food Frequency Questionnaire (FFQ)",
          "type": "assessment-launcher",
          "autoOpen": true,
          "options": [
            {
              "label": "Food Frequency Questionnaire (FFQ)",
              "value": "FFQ"
            }
          ]
        },
        {
          "name": "ons_regime",
          "label": "Oral Nutrition Supplement Regime",
          "type": "textarea"
        }
      ]
    }
  ]
}

const OBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "name": "diet_assessments",
          "type": "assessment-launcher",
          "options": [
            {
              "label": "NRS",
              "value": "NRS"
            },
            {
              "label": "Growth Chart",
              "value": "Growth Chart"
            },
            {
              "label": "PG-SGA",
              "value": "PG-SGA-Metric-version"
            },
            {
              "label": "SGA",
              "value": "SGA"
            },
            {
              "label": "MST",
              "value": "MST"
            },
            {
              "label": "BIA",
              "value": "BIA"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Anthropometric Measurement"
        },
        {
          "type": "row",
          "columns": 2,
          "fields": [
            {
              "name": "weight",
              "label": "Weight (kg)",
              "type": "input",
              "readOnly": true
            },
            {
              "name": "height",
              "label": "Height (cm)",
              "type": "input",
              "readOnly": true
            },
            {
              "name": "bmi",
              "label": "BMI",
              "type": "input",
              "readOnly": true
            }
          ]
        },
        {
          "name": "weight_record_date",
          "label": "Date of Weight/Height Record",
          "type": "input",
          "readOnly": true
        },
        {
          "name": "weight_change",
          "label": "Weight Changes",
          "type": "radio",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "name": "previous_weight",
          "label": "Previous Weight (kg)",
          "type": "input",
          "showIf": {
            "field": "weight_change",
            "equals": "Yes"
          }
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "wheelchair_weight",
              "label": "Wheelchair Weight",
              "type": "input"
            },
            {
              "name": "wheelchair_type",
              "label": "Wheelchair Type",
              "type": "single-select",
              "options": [
                {
                  "label": "Detachable Adult Wheelchair",
                  "value": "detachable_adult"
                },
                {
                  "label": "LightWeight Adult Wheelchair",
                  "value": "lightweight_adult"
                },
                {
                  "label": "Reclining Wheelchair",
                  "value": "reclining"
                },
                {
                  "label": "Heavy Duty Extra Wide Manual Wheelchair",
                  "value": "heavy_duty_extra_wide"
                }
              ]
            }
          ]
        },
        {
          "name": "anthro_remarks",
          "label": "Remarks",
          "type": "textarea"
        },
        {
          "type": "subheading",
          "label": "Vital Signs & Measurements"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "bp",
              "label": "Blood Pressure",
              "type": "input",
              "readOnly": true
            },
            {
              "name": "pulse",
              "label": "Heart Rate",
              "type": "input",
              "readOnly": true
            },
            {
              "name": "rr",
              "label": "Respiratory Rate",
              "type": "input",
              "readOnly": true
            },
            {
              "name": "temp",
              "label": "Temperature",
              "type": "input",
              "readOnly": true
            },
            {
              "name": "spo2",
              "label": "SpO₂",
              "type": "input",
              "readOnly": true
            },
            {
              "name": "rbs",
              "label": "Random Blood Sugar",
              "type": "input",
              "readOnly": true
            },
            {
              "name": "pain",
              "label": "Pain Score",
              "type": "input",
              "readOnly": true
            }
          ]
        },
        {
          "name": "diet_prognosis",
          "label": "Diet Prognosis",
          "type": "single-select",
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

const ASSESSMENT = {
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Clinical Impression"
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
          "label": "Goals"
        },
        {
          "name": "plan_short_term_goals",
          "label": "Short-Term Goals",
          "type": "input"
        },
        {
          "name": "plan_long_term_goals",
          "label": "Long-Term Goals",
          "type": "input"
        },
        {
          "type": "heading",
          "label": "Plan"
        },
        {
          "type": "subheading",
          "label": "Diet Type"
        },
        {
          "name": "meal_plan_mod_feeding_type",
          "label": "Feeding Type",
          "type": "radio",
          "options": [
            {
              "label": "Oral Feeding",
              "value": "oral"
            },
            {
              "label": "Enteral Feeding",
              "value": "enteral"
            },
            {
              "label": "Mixed Feeding",
              "value": "mixed"
            }
          ]
        },
        {
          "name": "meal_plan_mod_oral",
          "label": "Meal Plan",
          "type": "multi-select-dropdown",
          "options": [
            {
              "label": "Diabetic",
              "value": "Diabetic"
            },
            {
              "label": "Low Salt",
              "value": "Low Salt"
            },
            {
              "label": "Low Fat",
              "value": "Low Fat"
            },
            {
              "label": "Low Purine",
              "value": "Low Purine"
            },
            {
              "label": "High Protein",
              "value": "High Protein"
            },
            {
              "label": "Low Protein",
              "value": "Low Protein"
            },
            {
              "label": "RTF Regime",
              "value": "RTF Regime"
            },
            {
              "label": "Addons (Supplements)",
              "value": "Addons (Supplements)"
            },
            {
              "label": "Others",
              "value": "Others"
            },
            {
              "label": "Special Diet",
              "value": "Special Diet"
            },
            {
              "label": "Special Request",
              "value": "Special Request"
            }
          ],
          "showIf": {
            "field": "meal_plan_mod_feeding_type",
            "equals": "oral"
          }
        },
        {
          "name": "meal_plan_mod_oral_others",
          "label": "Others – Please specify",
          "type": "input",
          "showIf": {
            "field": "meal_plan_mod_oral",
            "includes": "Others"
          }
        },
        {
          "name": "plan_oral_fluid_intake",
          "label": "Fluid Intake",
          "type": "input",
          "showIf": {
            "field": "meal_plan_mod_feeding_type",
            "equals": "oral"
          }
        },
        {
          "name": "plan_enteral_feeding_table",
          "label": "Enteral Feeding",
          "type": "enteral-feeding-table",
          "showIf": {
            "field": "meal_plan_mod_feeding_type",
            "equals": "enteral"
          }
        },
        {
          "name": "plan_enteral_feeding_details",
          "label": "Enteral Feeding Notes",
          "type": "textarea",
          "showIf": {
            "field": "meal_plan_mod_feeding_type",
            "equals": "enteral"
          }
        },
        {
          "name": "plan_enteral_fluid_intake",
          "label": "Fluid Intake",
          "type": "input",
          "showIf": {
            "field": "meal_plan_mod_feeding_type",
            "equals": "enteral"
          }
        },
        {
          "name": "plan_mixed_feeding_table",
          "label": "Mixed Feeding",
          "type": "enteral-feeding-table",
          "showIf": {
            "field": "meal_plan_mod_feeding_type",
            "equals": "mixed"
          }
        },
        {
          "name": "plan_mixed_feeding_details",
          "label": "Mixed Feeding Notes",
          "type": "textarea",
          "showIf": {
            "field": "meal_plan_mod_feeding_type",
            "equals": "mixed"
          }
        },
        {
          "name": "plan_mixed_fluid_intake",
          "label": "Fluid Intake",
          "type": "input",
          "showIf": {
            "field": "meal_plan_mod_feeding_type",
            "equals": "mixed"
          }
        },
        {
          "name": "diet_intervention",
          "label": "Intervention",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Initiate nutritional Intervention",
              "value": "initiate_nutrition"
            },
            {
              "label": "Monitor Oral Intake",
              "value": "monitor_intake"
            },
            {
              "label": "Order Nutrition consult",
              "value": "order_consult"
            },
            {
              "label": "Start supplements/considering enteral",
              "value": "supplements_enteral"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "diet_intervention_initiate_nutrition",
          "label": "Initiate nutritional Intervention – Details",
          "type": "input",
          "showIf": {
            "field": "diet_intervention",
            "includes": "initiate_nutrition"
          }
        },
        {
          "name": "diet_intervention_monitor_intake",
          "label": "Monitor Oral Intake – Details",
          "type": "input",
          "showIf": {
            "field": "diet_intervention",
            "includes": "monitor_intake"
          }
        },
        {
          "name": "diet_intervention_order_consult",
          "label": "Order Nutrition consult – Details",
          "type": "input",
          "showIf": {
            "field": "diet_intervention",
            "includes": "order_consult"
          }
        },
        {
          "name": "diet_intervention_supplements_enteral",
          "label": "Start supplements/considering enteral – Details",
          "type": "input",
          "showIf": {
            "field": "diet_intervention",
            "includes": "supplements_enteral"
          }
        },
        {
          "name": "diet_intervention_others",
          "label": "Others – Details",
          "type": "input",
          "showIf": {
            "field": "diet_intervention",
            "includes": "others"
          }
        },
        {
          "type": "subheading",
          "label": "Follow-Up Plan"
        },
        {
          "name": "plan_review_date",
          "label": "Review in (select date)",
          "type": "date"
        },
        {
          "name": "plan_referral_type",
          "label": "Referral",
          "type": "radio",
          "options": [
            {
              "label": "Internal",
              "value": "internal"
            },
            {
              "label": "External",
              "value": "external"
            }
          ]
        },
        {
          "name": "plan_referral_internal",
          "label": "Internal Referral",
          "type": "multi-select-dropdown",
          "options": [
            {
              "label": "Optometry",
              "value": "Optometry"
            },
            {
              "label": "Psychology",
              "value": "Psychology"
            },
            {
              "label": "Doctors",
              "value": "Doctors"
            },
            {
              "label": "Audiology",
              "value": "Audiology"
            },
            {
              "label": "Speech",
              "value": "Speech"
            },
            {
              "label": "Others",
              "value": "Others"
            }
          ],
          "showIf": {
            "field": "plan_referral_type",
            "equals": "internal"
          }
        },
        {
          "name": "plan_referral_optometry_details",
          "label": "Optometry – Please specify",
          "type": "textarea",
          "showIf": {
            "field": "plan_referral_internal",
            "includes": "Optometry"
          }
        },
        {
          "name": "plan_referral_psychology_details",
          "label": "Psychology – Please specify",
          "type": "textarea",
          "showIf": {
            "field": "plan_referral_internal",
            "includes": "Psychology"
          }
        },
        {
          "name": "plan_referral_doctors_details",
          "label": "Doctors – Please specify",
          "type": "textarea",
          "showIf": {
            "field": "plan_referral_internal",
            "includes": "Doctors"
          }
        },
        {
          "name": "plan_referral_audiology_details",
          "label": "Audiology – Please specify",
          "type": "textarea",
          "showIf": {
            "field": "plan_referral_internal",
            "includes": "Audiology"
          }
        },
        {
          "name": "plan_referral_speech_details",
          "label": "Speech – Please specify",
          "type": "textarea",
          "showIf": {
            "field": "plan_referral_internal",
            "includes": "Speech"
          }
        },
        {
          "name": "plan_referral_others_details",
          "label": "Others – Please specify",
          "type": "textarea",
          "showIf": {
            "field": "plan_referral_internal",
            "includes": "Others"
          }
        },
        {
          "name": "plan_referral_external_memo",
          "label": "Upload Memo",
          "type": "file-upload",
          "showIf": {
            "field": "plan_referral_type",
            "equals": "external"
          }
        }
      ]
    }
  ]
}