const SUBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Pre-Session Status"
        },
        {
          "name": "pre_session_status",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "No new concerns reported",
              "value": "no_new_concerns"
            },
            {
              "label": "Ready and willing to participate",
              "value": "ready_and_willing"
            },
            {
              "label": "Reports pain/symptoms (specify)",
              "value": "reports_pain_symptoms"
            },
            {
              "label": "Reports fatigue",
              "value": "reports_fatigue"
            },
            {
              "label": "Reports dizziness",
              "value": "reports_dizziness"
            },
            {
              "label": "Reports recent fall/near fall",
              "value": "reports_recent_fall"
            }
          ]
        },
        {
          "name": "pre_session_pain_symptoms_specify",
          "label": "Specify Pain/Symptoms",
          "type": "input",
          "placeholder": "Specify...",
          "showIf": {
            "field": "pre_session_status",
            "includes": "reports_pain_symptoms"
          }
        },
        {
          "type": "subheading",
          "label": "Patient Report"
        },
        {
          "name": "patient_report",
          "label": "",
          "type": "input",
          "placeholder": "Free text..."
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
          "label": "Group Activity"
        },
        {
          "name": "group_activity",
          "label": "Select all that apply",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Gym-Based Rehabilitation",
              "value": "gym_based_rehabilitation"
            },
            {
              "label": "Hydrotherapy",
              "value": "hydrotherapy"
            },
            {
              "label": "Functional Rehabilitation",
              "value": "functional_rehabilitation"
            },
            {
              "label": "Circuit Exercise",
              "value": "circuit_exercise"
            },
            {
              "label": "Balance & Mobility Training",
              "value": "balance_mobility_training"
            },
            {
              "label": "Falls Prevention Training",
              "value": "falls_prevention_training"
            },
            {
              "label": "Back Care Education & Exercise",
              "value": "back_care_education"
            },
            {
              "label": "Cardiopulmonary Exercise Training",
              "value": "cardiopulmonary_training"
            },
            {
              "label": "Therapeutic Exercise Group",
              "value": "therapeutic_exercise_group"
            },
            {
              "label": "Health Education",
              "value": "health_education"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "group_activity_others_specify",
          "label": "Specify",
          "type": "input",
          "placeholder": "Specify...",
          "showIf": {
            "field": "group_activity",
            "includes": "others"
          }
        },
        {
          "type": "subheading",
          "label": "Participation Level"
        },
        {
          "name": "participation_level",
          "label": "Select One",
          "type": "radio",
          "options": [
            {
              "label": "Fully Participated",
              "value": "fully_participated"
            },
            {
              "label": "Participated with Minimal Encouragement",
              "value": "minimal_encouragement"
            },
            {
              "label": "Participated with Frequent Cueing",
              "value": "frequent_cueing"
            },
            {
              "label": "Partial Participation",
              "value": "partial_participation"
            },
            {
              "label": "Declined Participation",
              "value": "declined_participation"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Assistance Required"
        },
        {
          "name": "assistance_required",
          "label": "Select One",
          "type": "radio",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Supervision",
              "value": "supervision"
            },
            {
              "label": "Minimal Assistance",
              "value": "minimal_assistance"
            },
            {
              "label": "Moderate Assistance",
              "value": "moderate_assistance"
            },
            {
              "label": "Maximum Assistance",
              "value": "maximum_assistance"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Therapist's Observation"
        },
        {
          "name": "therapist_observation",
          "label": "",
          "type": "input",
          "placeholder": "Free text..."
        },
        {
          "type": "subheading",
          "label": "Performance Observed"
        },
        {
          "type": "subheading",
          "label": "Exercise Performance",
          "level": 3
        },
        {
          "name": "performance_observed",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Initiated activity independently",
              "value": "initiated_independently"
            },
            {
              "label": "Followed exercise instructions",
              "value": "followed_instructions"
            },
            {
              "label": "Completed prescribed exercises",
              "value": "completed_prescribed_exercises"
            },
            {
              "label": "Demonstrated correct exercise technique",
              "value": "correct_exercise_technique"
            },
            {
              "label": "Maintained balance during activities",
              "value": "maintained_balance"
            },
            {
              "label": "Demonstrated safe mobility",
              "value": "safe_mobility"
            },
            {
              "label": "Tolerated prescribed exercise intensity",
              "value": "tolerated_intensity"
            },
            {
              "label": "Required verbal cueing",
              "value": "required_verbal_cueing"
            },
            {
              "label": "Required physical assistance",
              "value": "required_physical_assistance"
            },
            {
              "label": "Required frequent prompting",
              "value": "required_frequent_prompting"
            },
            {
              "label": "Required rest breaks",
              "value": "required_rest_breaks"
            },
            {
              "label": "Experienced pain during activity",
              "value": "experienced_pain"
            },
            {
              "label": "Experienced fatigue during activity",
              "value": "experienced_fatigue"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "performance_observed_others_specify",
          "label": "Specify",
          "type": "input",
          "placeholder": "Specify...",
          "showIf": {
            "field": "performance_observed",
            "includes": "others"
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
          "label": "Clinical Interpretation"
        },
        {
          "name": "clinical_interpretation",
          "label": "",
          "type": "input",
          "placeholder": "Free text..."
        },
        {
          "type": "subheading",
          "label": "Physical Performance and Response"
        },
        {
          "name": "physical_performance_response",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Improved exercise tolerance",
              "value": "improved_exercise_tolerance"
            },
            {
              "label": "Improved cardiovascular endurance",
              "value": "improved_cardiovascular_endurance"
            },
            {
              "label": "Improved mobility",
              "value": "improved_mobility"
            },
            {
              "label": "Improved gait pattern",
              "value": "improved_gait_pattern"
            },
            {
              "label": "Improved balance",
              "value": "improved_balance"
            },
            {
              "label": "Improved muscle strength",
              "value": "improved_muscle_strength"
            },
            {
              "label": "Improved flexibility",
              "value": "improved_flexibility"
            },
            {
              "label": "Improved coordination",
              "value": "improved_coordination"
            },
            {
              "label": "Improved postural control",
              "value": "improved_postural_control"
            },
            {
              "label": "Improved functional independence",
              "value": "improved_functional_independence"
            },
            {
              "label": "Reduced pain",
              "value": "reduced_pain"
            },
            {
              "label": "Increased confidence with mobility",
              "value": "increased_confidence"
            },
            {
              "label": "Maintained current functional status",
              "value": "maintained_functional_status"
            },
            {
              "label": "Limited progress observed",
              "value": "limited_progress"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "physical_performance_response_others_specify",
          "label": "Specify",
          "type": "input",
          "placeholder": "Specify...",
          "showIf": {
            "field": "physical_performance_response",
            "includes": "others"
          }
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
          "name": "plan_next_session",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Continue current group programme",
              "value": "continue_programme"
            },
            {
              "label": "Progress exercise intensity",
              "value": "progress_intensity"
            },
            {
              "label": "Progress exercise complexity",
              "value": "progress_complexity"
            },
            {
              "label": "Reduce exercise intensity",
              "value": "reduce_intensity"
            },
            {
              "label": "Introduce advanced functional activities",
              "value": "introduce_advanced_activities"
            },
            {
              "label": "Emphasise balance training",
              "value": "emphasise_balance"
            },
            {
              "label": "Emphasise strengthening programme",
              "value": "emphasise_strengthening"
            },
            {
              "label": "Reinforce home exercise programme",
              "value": "reinforce_home_exercise"
            },
            {
              "label": "Continue patient education",
              "value": "continue_patient_education"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "plan_next_session_others_specify",
          "label": "Specify",
          "type": "input",
          "placeholder": "Specify...",
          "showIf": {
            "field": "plan_next_session",
            "includes": "others"
          }
        }
      ]
    }
  ]
}