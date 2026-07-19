const SUBJECTIVE = {
  "Section": [
    {
      "fields": [
        {
          "name": "chief_complaint",
          "label": "Chief Complaint",
          "type": "input"
        },
        {
          "name": "hpi",
          "label": "History of Presenting Illness (HPI)",
          "type": "input"
        },
        {
          "name": "current_nutrition_intake",
          "label": "Current Nutrition Intake",
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
          "type": "subheading",
          "label": "Enteral Feeding Assessment",
          "showIf": {
            "field": "current_nutrition_intake",
            "equals": "enteral"
          }
        },
        {
          "name": "enteral_intake_vs_requirement",
          "label": "Intake vs Requirement",
          "type": "radio",
          "options": [
            {
              "label": "Adequate",
              "value": "adequate"
            },
            {
              "label": "Inadequate",
              "value": "inadequate"
            },
            {
              "label": "Excessive",
              "value": "excessive"
            },
            {
              "label": "Not Relevant",
              "value": "not_relevant"
            }
          ],
          "showIf": {
            "field": "current_nutrition_intake",
            "equals": "enteral"
          }
        },
        {
          "name": "enteral_intake_vs_requirement_remarks",
          "label": "Remarks",
          "type": "input",
          "showIf": {
            "or": [
              {
                "field": "enteral_intake_vs_requirement",
                "equals": "inadequate"
              },
              {
                "field": "enteral_intake_vs_requirement",
                "equals": "excessive"
              }
            ]
          }
        },
        {
          "name": "enteral_bowel_pattern",
          "label": "Bowel Pattern",
          "type": "radio",
          "options": [
            {
              "label": "Normal",
              "value": "normal"
            },
            {
              "label": "Constipation",
              "value": "constipation"
            },
            {
              "label": "Diarrhea",
              "value": "diarrhea"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ],
          "showIf": {
            "field": "current_nutrition_intake",
            "equals": "enteral"
          }
        },
        {
          "name": "enteral_constipation_details",
          "label": "Constipation Details",
          "type": "input",
          "showIf": {
            "field": "enteral_bowel_pattern",
            "equals": "constipation"
          }
        },
        {
          "name": "enteral_diarrhea_details",
          "label": "Diarrhea Details",
          "type": "input",
          "showIf": {
            "field": "enteral_bowel_pattern",
            "equals": "diarrhea"
          }
        },
        {
          "name": "enteral_recent_hypoglycemic_episodes",
          "label": "Recent Hypoglycemic Episodes",
          "type": "radio",
          "options": [
            {
              "label": "Never",
              "value": "never"
            },
            {
              "label": "Occasional",
              "value": "occasional"
            },
            {
              "label": "Frequent",
              "value": "frequent"
            },
            {
              "label": "Unknown",
              "value": "unknown"
            },
            {
              "label": "Not Relevant",
              "value": "not_relevant"
            }
          ],
          "showIf": {
            "field": "current_nutrition_intake",
            "equals": "enteral"
          }
        },
        {
          "name": "enteral_recent_hypoglycemic_remarks",
          "label": "Remarks",
          "type": "input",
          "showIf": {
            "or": [
              {
                "field": "enteral_recent_hypoglycemic_episodes",
                "equals": "occasional"
              },
              {
                "field": "enteral_recent_hypoglycemic_episodes",
                "equals": "frequent"
              },
              {
                "field": "enteral_recent_hypoglycemic_episodes",
                "equals": "unknown"
              }
            ]
          }
        },
        {
          "name": "enteral_toleration",
          "label": "Toleration",
          "type": "radio",
          "options": [
            {
              "label": "Tolerating well",
              "value": "tolerating_well"
            },
            {
              "label": "Not tolerating well",
              "value": "not_tolerating_well"
            }
          ],
          "showIf": {
            "field": "current_nutrition_intake",
            "equals": "enteral"
          }
        },
        {
          "name": "enteral_toleration_remarks",
          "label": "Remarks",
          "type": "input",
          "showIf": {
            "field": "enteral_toleration",
            "equals": "not_tolerating_well"
          }
        },
        {
          "name": "enteral_aspiration",
          "label": "Aspiration",
          "type": "radio",
          "options": [
            {
              "label": "Yes",
              "value": "yes"
            },
            {
              "label": "No",
              "value": "no"
            }
          ],
          "showIf": {
            "field": "current_nutrition_intake",
            "equals": "enteral"
          }
        },
        {
          "name": "enteral_aspiration_details",
          "label": "If Yes – Please specify",
          "type": "input",
          "showIf": {
            "field": "enteral_aspiration",
            "equals": "yes"
          }
        },
        {
          "name": "enteral_vomiting",
          "label": "Vomiting",
          "type": "radio",
          "options": [
            {
              "label": "Yes",
              "value": "yes"
            },
            {
              "label": "No",
              "value": "no"
            }
          ],
          "showIf": {
            "field": "current_nutrition_intake",
            "equals": "enteral"
          }
        },
        {
          "name": "enteral_vomiting_details",
          "label": "If Yes – Please specify",
          "type": "input",
          "showIf": {
            "field": "enteral_vomiting",
            "equals": "yes"
          }
        },
        {
          "name": "nutrition_related_complaints",
          "label": "Oral Nutritional-Related Complaints",
          "type": "input",
          "showIf": {
            "or": [
              {
                "field": "current_nutrition_intake",
                "equals": "enteral"
              }
            ]
          }
        },
        {
          "name": "ons_regime",
          "label": "Oral Nutrition Supplement Regime",
          "type": "input",
          "showIf": {
            "or": [
              {
                "field": "current_nutrition_intake",
                "equals": "enteral"
              }
            ]
          }
        },
        {
          "type": "subheading",
          "label": "Texture Modification @ IDDSI Level",
          "info": {
            "type": "image",
            "src": "/static/media/diet_image.b70cd13c6fdb1400a706.png",
            "alt": "IDDSI Reference Chart"
          },
          "showIf": {
            "or": [
              {
                "field": "current_nutrition_intake",
                "equals": "oral"
              },
              {
                "field": "current_nutrition_intake",
                "equals": "mixed"
              }
            ]
          }
        },
        {
          "name": "iddsi_food_level",
          "label": "Food",
          "type": "radio",
          "labelAbove": true,
          "options": [
            {
              "label": "7 – Regular/Easy To Chew",
              "value": "7"
            },
            {
              "label": "6 – Soft & Bite-Sized",
              "value": "6"
            },
            {
              "label": "5 – Minced & Moist",
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
          ],
          "showIf": {
            "or": [
              {
                "field": "current_nutrition_intake",
                "equals": "oral"
              },
              {
                "field": "current_nutrition_intake",
                "equals": "mixed"
              }
            ]
          }
        },
        {
          "name": "iddsi_drink_level",
          "label": "Drink",
          "type": "radio",
          "labelAbove": true,
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
          ],
          "showIf": {
            "or": [
              {
                "field": "current_nutrition_intake",
                "equals": "oral"
              },
              {
                "field": "current_nutrition_intake",
                "equals": "mixed"
              }
            ]
          }
        },
        {
          "name": "intake_vs_requirement",
          "label": "Intake vs Requirement",
          "type": "radio",
          "options": [
            {
              "label": "Adequate",
              "value": "adequate"
            },
            {
              "label": "Inadequate",
              "value": "inadequate"
            },
            {
              "label": "Excessive",
              "value": "excessive"
            },
            {
              "label": "Not Relevant",
              "value": "not_relevant"
            }
          ],
          "showIf": {
            "or": [
              {
                "field": "current_nutrition_intake",
                "equals": "oral"
              },
              {
                "field": "current_nutrition_intake",
                "equals": "mixed"
              }
            ]
          }
        },
        {
          "name": "intake_vs_requirement_remarks",
          "label": "Remarks",
          "type": "input",
          "showIf": {
            "or": [
              {
                "field": "intake_vs_requirement",
                "equals": "inadequate"
              },
              {
                "field": "intake_vs_requirement",
                "equals": "excessive"
              }
            ]
          }
        },
        {
          "name": "bowel_pattern",
          "label": "Bowel Pattern",
          "type": "radio",
          "options": [
            {
              "label": "Normal",
              "value": "normal"
            },
            {
              "label": "Constipation",
              "value": "constipation"
            },
            {
              "label": "Diarrhea",
              "value": "diarrhea"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ],
          "showIf": {
            "or": [
              {
                "field": "current_nutrition_intake",
                "equals": "oral"
              },
              {
                "field": "current_nutrition_intake",
                "equals": "mixed"
              }
            ]
          }
        },
        {
          "name": "constipation_details",
          "label": "Constipation Details",
          "type": "input",
          "showIf": {
            "field": "bowel_pattern",
            "equals": "constipation"
          }
        },
        {
          "name": "diarrhea_details",
          "label": "Diarrhea Details",
          "type": "input",
          "showIf": {
            "field": "bowel_pattern",
            "equals": "diarrhea"
          }
        },
        {
          "name": "recent_hypoglycemic_episodes",
          "label": "Recent Hypoglycemic Episodes",
          "type": "radio",
          "options": [
            {
              "label": "Never",
              "value": "never"
            },
            {
              "label": "Occasional",
              "value": "occasional"
            },
            {
              "label": "Frequent",
              "value": "frequent"
            },
            {
              "label": "Unknown",
              "value": "unknown"
            },
            {
              "label": "Not Relevant",
              "value": "not_relevant"
            }
          ],
          "showIf": {
            "or": [
              {
                "field": "current_nutrition_intake",
                "equals": "oral"
              },
              {
                "field": "current_nutrition_intake",
                "equals": "mixed"
              }
            ]
          }
        },
        {
          "name": "recent_hypoglycemic_remarks",
          "label": "Remarks",
          "type": "input",
          "showIf": {
            "or": [
              {
                "field": "recent_hypoglycemic_episodes",
                "equals": "occasional"
              },
              {
                "field": "recent_hypoglycemic_episodes",
                "equals": "frequent"
              },
              {
                "field": "recent_hypoglycemic_episodes",
                "equals": "unknown"
              }
            ]
          }
        },
        {
          "name": "nutrition_related_complaints",
          "label": "Oral Nutritional-Related Complaints",
          "type": "input",
          "showIf": {
            "or": [
              {
                "field": "current_nutrition_intake",
                "equals": "oral"
              },
              {
                "field": "current_nutrition_intake",
                "equals": "mixed"
              }
            ]
          }
        },
        {
          "name": "ons_regime",
          "label": "Oral Nutrition Supplement Regime",
          "type": "input",
          "showIf": {
            "or": [
              {
                "field": "current_nutrition_intake",
                "equals": "oral"
              },
              {
                "field": "current_nutrition_intake",
                "equals": "mixed"
              }
            ]
          }
        },
        {
          "name": "ffq_followup",
          "label": "Food Frequency Questionnaire (FFQ)",
          "type": "assessment-launcher",
          "options": [
            {
              "label": "Open FFQ",
              "value": "FFQ"
            }
          ],
          "showIf": {
            "or": [
              {
                "field": "current_nutrition_intake",
                "equals": "oral"
              },
              {
                "field": "current_nutrition_intake",
                "equals": "mixed"
              }
            ]
          }
        }
      ]
    }
  ]
}
const OBJECTIVE = {
  "SECTION": [
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
            },
            {
              "label": "NewSGA",
              "value": "NewSGA"
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
              "label": "Previous Weight (kg)",
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
              "label": "BMI (Current)",
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
              "value": "yes"
            },
            {
              "label": "No",
              "value": "no"
            }
          ]
        },
        {
          "type": "row",
          "columns": 2,
          "fields": [
            {
              "name": "previous_weight",
              "label": "Current Weight (kg)",
              "type": "input",
              "showIf": {
                "field": "weight_change",
                "equals": "yes"
              }
            }
          ]
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
          "type": "input"
        },
        {
          "type": "accordion",
          "name": "vital_signs_accordion",
          "label": "Vital Signs & Measurements",
          "defaultOpen": false,
          "children": [
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
                },
                {
                  "name": "vital_signs_others",
                  "label": "Others",
                  "type": "input"
                },
                {
                  "name": "vital_signs_upload",
                  "label": "upload",
                  "type": "attach-file"
                }
              ]
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
          "type": "textarea",
          "name": "clinical_impression",
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
          "name": "monitor_plan_mod_oral",
          "label": "Monitoring Parameter",
          "type": "multi-select-dropdown",
          "options": [
            {
              "label": "Weight",
              "value": "WEIGHT"
            },
            {
              "label": "Intake %",
              "value": "INTAKE_PERCENT"
            },
            {
              "label": "Bowel Pattern",
              "value": "BOWEL_PATTERN"
            },
            {
              "label": "Muscle Loss",
              "value": "MUSCLE_LOSS"
            },
            {
              "label": "Appetite",
              "value": "APPETITE"
            },
            {
              "label": "GM",
              "value": "GM"
            },
            {
              "label": "BP",
              "value": "BP"
            },
            {
              "label": "Sleep",
              "value": "SLEEP"
            },
            {
              "label": "Others",
              "value": "OTHERS"
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
          "type": "input",
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
          "type": "input",
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
          "type": "input",
          "showIf": {
            "field": "plan_referral_internal",
            "includes": "Optometry"
          }
        },
        {
          "name": "plan_referral_psychology_details",
          "label": "Psychology – Please specify",
          "type": "input",
          "showIf": {
            "field": "plan_referral_internal",
            "includes": "Psychology"
          }
        },
        {
          "name": "plan_referral_doctors_details",
          "label": "Doctors – Please specify",
          "type": "input",
          "showIf": {
            "field": "plan_referral_internal",
            "includes": "Doctors"
          }
        },
        {
          "name": "plan_referral_audiology_details",
          "label": "Audiology – Please specify",
          "type": "input",
          "showIf": {
            "field": "plan_referral_internal",
            "includes": "Audiology"
          }
        },
        {
          "name": "plan_referral_speech_details",
          "label": "Speech – Please specify",
          "type": "input",
          "showIf": {
            "field": "plan_referral_internal",
            "includes": "Speech"
          }
        },
        {
          "name": "plan_referral_others_details",
          "label": "Others – Please specify",
          "type": "input",
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