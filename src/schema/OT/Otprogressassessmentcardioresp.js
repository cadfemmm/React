const SUBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Patient Report / Symptoms"
        },
        {
          "name": "patient_subjective_status",
          "label": "Patient's subjective status today",
          "type": "input",
          "placeholder": "Enter patient's subjective report..."
        },
        {
          "name": "symptom_check",
          "label": "Symptom Check (Select all that apply)",
          "type": "checkbox-group",
          "options": [
            {
              "label": "No symptoms",
              "value": "no_symptoms"
            },
            {
              "label": "Dyspnoea",
              "value": "dyspnoea"
            },
            {
              "label": "Fatigue",
              "value": "fatigue"
            },
            {
              "label": "Chest pain",
              "value": "chest_pain"
            },
            {
              "label": "Dizziness",
              "value": "dizziness"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "symptom_check_others",
          "label": "Specify Others",
          "type": "input",
          "placeholder": "Specify...",
          "showIf": {
            "field": "symptom_check",
            "includes": "others"
          }
        },
        {
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "perceived_exertion_mets",
              "label": "Perceived Exertion (Estimated METs)",
              "type": "input",
              "placeholder": "Enter METs value"
            },
            {
              "name": "borg_rpe_pre",
              "label": "Borg RPE (Pre-session)",
              "type": "input",
              "placeholder": "__ / 10 "
            }
          ]
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
          "type": "subheading",
          "label": "1. Pre-session Cardiovascular Status"
        },
        {
          "type": "subheading",
          "label": "Resting Vital Signs"
        },
        {
          "type": "row",
          "cols": 3,
          "fields": [
            {
              "name": "resting_hr",
              "label": "HR",
              "type": "input",
              "placeholder": "___ bpm"
            },
            {
              "name": "resting_bp",
              "label": "BP",
              "type": "input",
              "placeholder": "___ / ___ mmHg"
            },
            {
              "name": "resting_spo2",
              "label": "SpO2",
              "type": "input",
              "placeholder": "___ %"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Intervention Provided - Activity Type"
        },
        {
          "name": "intervention_provided",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "ADL Retraining",
              "value": "adl_retraining"
            },
            {
              "label": "ADL Simulation",
              "value": "adl_simulation"
            },
            {
              "label": "Upper Limb Exercise",
              "value": "upper_limb_exercise"
            },
            {
              "label": "Breathing Exercise",
              "value": "breathing_exercise"
            },
            {
              "label": "Endurance Training",
              "value": "endurance_training"
            },
            {
              "label": "Functional Mobility",
              "value": "functional_mobility"
            },
            {
              "label": "Energy Conservation Training",
              "value": "energy_conservation"
            },
            {
              "label": "Activity Pacing",
              "value": "activity_pacing"
            },
            {
              "label": "Work Simulation",
              "value": "work_simulation"
            },
            {
              "label": "Work Conditioning",
              "value": "work_conditioning"
            },
            {
              "label": "Patient Education",
              "value": "patient_education"
            },
            {
              "label": "Cognitive Strategy",
              "value": "cognitive_strategy"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "intervention_provided_others",
          "label": "Specify Others",
          "type": "input",
          "placeholder": "Specify...",
          "showIf": {
            "field": "intervention_provided",
            "includes": "others"
          }
        },
        {
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "intensity_level",
              "label": "Intensity Level",
              "type": "select",
              "options": [
                {
                  "label": "Low",
                  "value": "low"
                },
                {
                  "label": "Moderate",
                  "value": "moderate"
                },
                {
                  "label": "High",
                  "value": "high"
                }
              ]
            },
            {
              "name": "session_duration",
              "label": "Duration (minutes)",
              "type": "input",
              "placeholder": "Enter minutes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "2. During Session Response"
        },
        {
          "name": "borg_rpe_during",
          "label": "Borg RPE (During Activity)",
          "type": "input",
          "placeholder": "__ / 10 "
        },
        {
          "name": "symptoms_during",
          "label": "Symptoms During Activity",
          "type": "checkbox-group",
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "Dyspnoea",
              "value": "dyspnoea"
            },
            {
              "label": "Fatigue",
              "value": "fatigue"
            },
            {
              "label": "Chest Pain",
              "value": "chest_pain"
            },
            {
              "label": "Dizziness",
              "value": "dizziness"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "symptoms_during_others",
          "label": "Specify Others",
          "type": "input",
          "placeholder": "Specify...",
          "showIf": {
            "field": "symptoms_during",
            "includes": "others"
          }
        },
        {
          "name": "activity_tolerance",
          "label": "Activity Tolerance",
          "type": "select",
          "options": [
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
        },
        {
          "type": "subheading",
          "label": "3. Post-session Status"
        },
        {
          "type": "subheading",
          "label": "Recovery Response"
        },
        {
          "name": "borg_rpe_post",
          "label": "Borg RPE (Post Activity)",
          "type": "input",
          "placeholder": "__ / 10 "
        },
        {
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "recovery_time",
              "label": "Recovery Time (minutes)",
              "type": "input",
              "placeholder": "Enter minutes"
            },
            {
              "name": "symptoms_after",
              "label": "Symptoms After Activity",
              "type": "select",
              "options": [
                {
                  "label": "None",
                  "value": "none"
                },
                {
                  "label": "Mild",
                  "value": "mild"
                },
                {
                  "label": "Moderate",
                  "value": "moderate"
                },
                {
                  "label": "Severe",
                  "value": "severe"
                }
              ]
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
          "label": "Functional Progress Today"
        },
        {
          "name": "adl_performance",
          "label": "ADL Performance",
          "type": "select",
          "options": [
            {
              "label": "Improved",
              "value": "improved"
            },
            {
              "label": "Maintained",
              "value": "maintained"
            },
            {
              "label": "Declined",
              "value": "declined"
            }
          ]
        },
        {
          "name": "activity_tolerance_assessment",
          "label": "Activity Tolerance",
          "type": "select",
          "options": [
            {
              "label": "Improved",
              "value": "improved"
            },
            {
              "label": "Maintained",
              "value": "maintained"
            },
            {
              "label": "Limited",
              "value": "limited"
            }
          ]
        },
        {
          "name": "work_capacity",
          "label": "Work-related Capacity (if applicable)",
          "type": "select",
          "options": [
            {
              "label": "Improving",
              "value": "improving"
            },
            {
              "label": "Maintained",
              "value": "maintained"
            },
            {
              "label": "Not assessed",
              "value": "not_assessed"
            },
            {
              "label": "Not applicable",
              "value": "not_applicable"
            }
          ]
        },
        {
          "name": "clinical_interpretation",
          "label": "Clinical Assessment / Interpretation",
          "type": "textarea",
          "placeholder": "Enter clinical interpretation..."
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
          "label": "Plan for Next Session"
        },
        {
          "name": "next_session_plan",
          "label": "",
          "type": "select",
          "options": [
            {
              "label": "Continue current programme",
              "value": "continue"
            },
            {
              "label": "Progress intensity",
              "value": "progress_intensity"
            },
            {
              "label": "Modify intervention",
              "value": "modify"
            },
            {
              "label": "Discharge planning",
              "value": "discharge"
            },
            {
              "label": "review_functional_goals",
              "value": "review_functional_goals"
            }
          ]
        },
        {
          "name": "focus_area",
          "label": "Focus Area",
          "type": "checkbox-group",
          "options": [
            {
              "label": "ADL",
              "value": "adl"
            },
            {
              "label": "Endurance",
              "value": "endurance"
            },
            {
              "label": "Work Simulation",
              "value": "work_simulation"
            },
            {
              "label": "Education",
              "value": "education"
            },
            {
              "label": "Energy Conservation",
              "value": "energy_conservation"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "focus_area_others",
          "label": "Specify Others",
          "type": "input",
          "placeholder": "Specify...",
          "showIf": {
            "field": "focus_area",
            "includes": "others"
          }
        },
        {
          "name": "next_session_remarks",
          "label": "Next Session Plan / Remarks",
          "type": "textarea",
          "placeholder": "Enter remarks..."
        }
      ]
    }
  ]
}