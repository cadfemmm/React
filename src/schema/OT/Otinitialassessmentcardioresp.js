const SUBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Presenting Complaint"
        },
        {
          "name": "presenting_complaint",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Shortness of Breath",
              "value": "shortness_of_breath"
            },
            {
              "label": "Fatigue",
              "value": "fatigue"
            },
            {
              "label": "Reduced Endurance",
              "value": "reduced_endurance"
            },
            {
              "label": "Difficulty in ADL",
              "value": "difficulty_adl"
            },
            {
              "label": "Chest Discomfort",
              "value": "chest_discomfort"
            },
            {
              "label": "Reduced Work Performance",
              "value": "reduced_work_performance"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "presenting_complaint_others",
          "label": "Specify Others",
          "type": "input",
          "placeholder": "Specify...",
          "showIf": {
            "field": "presenting_complaint",
            "includes": "others"
          }
        },
        {
          "type": "subheading",
          "label": "History"
        },
        {
          "name": "history",
          "label": "",
          "type": "input",
          "placeholder": "Free text..."
        },
        {
          "type": "subheading",
          "label": "Patient Goal"
        },
        {
          "name": "patient_goal",
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
          "label": "Functional Capacity"
        },
        {
          "name": "functional_capacity_launchers",
          "type": "assessment-launcher",
          "options": [
            {
              "label": "6MWT",
              "value": "six_mwt"
            },
            {
              "label": "MMT",
              "value": "mmt"
            }
          ]
        },
        {
          "name": "activity_tolerance",
          "label": "Activity Tolerance",
          "type": "radio",
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
          "label": "Activities of Daily Living (ADL) & Instrumental Activities of Daily Living (IADL)"
        },
        {
          "name": "adl_iadl_launchers",
          "type": "assessment-launcher",
          "options": [
            {
              "label": "Functional Independence Measure (FIM)",
              "value": "fim"
            },
            {
              "label": "Lawton IADL",
              "value": "iadl"
            },
            {
              "label": "ADL",
              "value": "adl_doc"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Upper Limb Function"
        },
        {
          "name": "ul_function_launchers",
          "type": "assessment-launcher",
          "options": [
            {
              "label": "Range of Motion (ROM)",
              "value": "rom"
            },
            {
              "label": "Strength",
              "value": "strength"
            },
            {
              "label": "Grip Strength",
              "value": "grip_strength"
            },
            {
              "label": "Coordination",
              "value": "coordination"
            }
          ]
        },
        {
          "name": "assistive_device",
          "label": "Assistive Device",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        },
        {
          "name": "assistive_device_specify",
          "label": "Specify",
          "type": "input",
          "placeholder": "Specify...",
          "showIf": {
            "field": "assistive_device",
            "equals": "yes"
          }
        },
        {
          "type": "subheading",
          "label": "Work & Social Participation"
        },
        {
          "type": "subheading",
          "label": "Current Work Status"
        },
        {
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "job_title",
              "label": "Job Title",
              "type": "input",
              "placeholder": "e.g. Accountant"
            },
            {
              "name": "nature_of_job",
              "label": "Nature of Job",
              "type": "input",
              "placeholder": "Free text..."
            }
          ]
        },
        {
          "name": "working_hours",
          "label": "Working Hours",
          "type": "input",
          "placeholder": "e.g. 9am – 5pm"
        },
        {
          "type": "subheading",
          "label": "Physical Demand"
        },
        {
          "name": "physical_demand",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Sitting",
              "value": "sitting"
            },
            {
              "label": "Standing",
              "value": "standing"
            },
            {
              "label": "Walking",
              "value": "walking"
            },
            {
              "label": "Lifting",
              "value": "lifting"
            },
            {
              "label": "Carrying",
              "value": "carrying"
            },
            {
              "label": "Manual Handling",
              "value": "manual_handling"
            },
            {
              "label": "Driving",
              "value": "driving"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "physical_demand_others",
          "label": "Specify Others",
          "type": "input",
          "placeholder": "Specify...",
          "showIf": {
            "field": "physical_demand",
            "includes": "others"
          }
        },
        {
          "name": "return_to_work",
          "label": "Return To Work",
          "type": "radio",
          "options": [
            {
              "label": "Ready",
              "value": "ready"
            },
            {
              "label": "Partially Ready",
              "value": "partially_ready"
            },
            {
              "label": "Not Ready",
              "value": "not_ready"
            }
          ]
        },
        {
          "name": "driving",
          "label": "Driving",
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
          "type": "subheading",
          "label": "Home Environment"
        },
        {
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "lives_with",
              "label": "Lives With",
              "type": "single-select",
              "options": [
                {
                  "label": "Alone",
                  "value": "alone"
                },
                {
                  "label": "Spouse",
                  "value": "spouse"
                },
                {
                  "label": "Children",
                  "value": "children"
                },
                {
                  "label": "Family",
                  "value": "family"
                },
                {
                  "label": "Caregiver",
                  "value": "caregiver"
                }
              ]
            },
            {
              "name": "home_type",
              "label": "Home Type",
              "type": "single-select",
              "options": [
                {
                  "label": "Single Storey",
                  "value": "single_storey"
                },
                {
                  "label": "Double Storey",
                  "value": "double_storey"
                },
                {
                  "label": "Apartment",
                  "value": "apartment"
                },
                {
                  "label": "Flat",
                  "value": "flat"
                },
                {
                  "label": "Others",
                  "value": "others"
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
          "label": "OT Problem List"
        },
        {
          "name": "ot_problem_list",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Reduced Endurance",
              "value": "reduced_endurance"
            },
            {
              "label": "Reduced Activity Tolerance",
              "value": "reduced_activity_tolerance"
            },
            {
              "label": "Reduced ADL Independence",
              "value": "reduced_adl_independence"
            },
            {
              "label": "Reduced Mobility",
              "value": "reduced_mobility"
            },
            {
              "label": "Pain",
              "value": "pain"
            },
            {
              "label": "Reduced Work Capacity",
              "value": "reduced_work_capacity"
            },
            {
              "label": "Balance Impairment",
              "value": "balance_impairment"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "ot_problem_list_others",
          "label": "Specify Others",
          "type": "input",
          "placeholder": "Specify...",
          "showIf": {
            "field": "ot_problem_list",
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
          "label": "Goals"
        },
        {
          "name": "short_term_goals",
          "label": "Short-Term Goals",
          "type": "input",
          "placeholder": "Free text..."
        },
        {
          "name": "long_term_goals",
          "label": "Long-Term Goals",
          "type": "input",
          "placeholder": "Free text..."
        },
        {
          "type": "subheading",
          "label": "Intervention Plan"
        },
        {
          "name": "intervention_plan",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "ADL Retraining",
              "value": "adl_retraining"
            },
            {
              "label": "Functional Mobility",
              "value": "functional_mobility"
            },
            {
              "label": "Endurance Training",
              "value": "endurance_training"
            },
            {
              "label": "Strengthening",
              "value": "strengthening"
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
              "label": "Energy Conservation",
              "value": "energy_conservation"
            },
            {
              "label": "Activity Pacing",
              "value": "activity_pacing"
            },
            {
              "label": "Work Conditioning",
              "value": "work_conditioning"
            },
            {
              "label": "Cognitive Strategy",
              "value": "cognitive_strategy"
            },
            {
              "label": "RTW Programme",
              "value": "rtw_programme"
            },
            {
              "label": "Patient Education",
              "value": "patient_education"
            },
            {
              "label": "Caregiver Education",
              "value": "caregiver_education"
            },
            {
              "label": "Home Programme",
              "value": "home_programme"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "intervention_plan_others",
          "label": "Specify Others",
          "type": "input",
          "placeholder": "Specify...",
          "showIf": {
            "field": "intervention_plan",
            "includes": "others"
          }
        }
      ]
    }
  ]
}