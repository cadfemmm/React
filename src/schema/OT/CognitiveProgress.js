const SUBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "name": "complaints_pain_fatigue_stress",
          "label": "Any Complaints (Pain/Fatigue/Stress)",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter complaints"
        },
        {
          "name": "History of Present",
          "label": "History of Present Illnes",
          "type": "input"
        },
        {
          "name": "appearance_mood",
          "label": "Observation: Appearance/Mood",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter appearance and mood"
        },
        {
          "name": "client_carer_report",
          "label": "Client / Carer Report Of",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter client/carer report"
        },
        {
          "name": "concern_to",
          "label": "Concern To",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter concerns"
        },
        {
          "name": "new_finding_issue_related",
          "label": "New Finding / Issue Related",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter new findings or issues"
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
          "label": "Addressed Cognitive issue & targeted"
        },
        {
          "name": "cognitive_functions",
          "label": "Cognitive Functions",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Attention",
              "value": "attention"
            },
            {
              "label": "Concentration",
              "value": "concentration"
            },
            {
              "label": "Orientation",
              "value": "orientation"
            },
            {
              "label": "Memory Function",
              "value": "memory_function"
            },
            {
              "label": "Visual Perception",
              "value": "visual_perception"
            },
            {
              "label": "Constructional Ability",
              "value": "constructional_ability"
            },
            {
              "label": "Comprehension Ability",
              "value": "comprehension_ability"
            },
            {
              "label": "Executive Functioning",
              "value": "executive_functioning"
            },
            {
              "label": "Information Processing Ability & Speed",
              "value": "information_processing_ability_speed"
            },
            {
              "label": "Other",
              "value": "other"
            }
          ]
        },
        {
          "name": "cognitive_functions_other",
          "label": "Other Cognitive Function",
          "type": "input",
          "placeholder": "Specify other cognitive function",
          "showIf": {
            "field": "cognitive_functions",
            "includes": "other"
          }
        },
        {
          "type": "subheading",
          "label": "Interventions Used"
        },
        {
          "name": "cognitive_interventions_used",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Reality Orientation to Place, Time, and People",
              "value": "reality_orientation"
            },
            {
              "label": "Attention and Concentration Training",
              "value": "attention_concentration_training"
            },
            {
              "label": "Memory Restorative/Retraining and Compensatory Strategies Training",
              "value": "memory_restorative_training"
            },
            {
              "label": "Sensory Stimulation",
              "value": "sensory_stimulation"
            },
            {
              "label": "Higher Cognitive / Executive Function Training",
              "value": "higher_cognitive_executive_function_training"
            },
            {
              "label": "Communication / Social Techniques",
              "value": "communication_social_techniques"
            },
            {
              "label": "Cognitive Group Therapy",
              "value": "cognitive_group_therapy"
            },
            {
              "label": "Cognitive Remediation Therapy (CRT)",
              "value": "cognitive_remediation_therapy"
            },
            {
              "label": "Visuospatial & Constructional Skills Training",
              "value": "visuospatial_constructional_skills_training"
            },
            {
              "label": "Visual Perception Skills Training",
              "value": "visual_perception_skills_training"
            },
            {
              "label": "Visual Scanning",
              "value": "visual_scanning"
            },
            {
              "label": "Praxis Skills Training",
              "value": "praxis_skills_training"
            },
            {
              "label": "Functional Cognitive Training",
              "value": "functional_cognitive_training"
            },
            {
              "label": "Activities of Daily Living (ADL) Training",
              "value": "adl_training"
            },
            {
              "label": "Instrumental Activities of Daily Living (IADL) Training",
              "value": "iadl_training"
            },
            {
              "label": "Carer and Patient Education & Training",
              "value": "carer_patient_education_training"
            },
            {
              "label": "Home Program",
              "value": "home_program"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "functional_cognitive_training_details",
          "label": "Functional Cognitive Training",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter details",
          "showIf": {
            "field": "cognitive_interventions_used",
            "includes": "functional_cognitive_training"
          }
        },
        {
          "name": "adl_training_details",
          "label": "Activities of Daily Living (ADL) Training",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter details",
          "showIf": {
            "field": "cognitive_interventions_used",
            "includes": "adl_training"
          }
        },
        {
          "name": "iadl_training_details",
          "label": "Instrumental Activities of Daily Living (IADL) Training",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter details",
          "showIf": {
            "field": "cognitive_interventions_used",
            "includes": "iadl_training"
          }
        },
        {
          "name": "others_details",
          "label": "Others",
          "type": "input",
          "rows": 3,
          "placeholder": "Specify other interventions",
          "showIf": {
            "field": "cognitive_interventions_used",
            "includes": "others"
          }
        },
        {
          "type": "subheading",
          "label": "Modalities used"
        },
        {
          "name": "modalities_used",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Eyas Digital Cognitive Training System",
              "value": "eyas_digital_cognitive_training_system"
            },
            {
              "label": "Vienna Test System",
              "value": "vienna_test_system"
            },
            {
              "label": "Rehacom",
              "value": "rehacom"
            },
            {
              "label": "Neofect Smart Pegboard",
              "value": "neofect_smart_pegboard"
            },
            {
              "label": "Grolier Cognitive Training Set",
              "value": "grolier_cognitive_training_set"
            },
            {
              "label": "Multi-sensory / Snoezelen Room",
              "value": "multi_sensory_snoezelen_room"
            },
            {
              "label": "Brain Training Game Apps",
              "value": "brain_training_game_apps"
            },
            {
              "label": "General Puzzle, Card Games & Board Games",
              "value": "general_puzzle_card_games_board_games"
            },
            {
              "label": "Paper-and-Pencil",
              "value": "paper_and_pencil"
            },
            {
              "label": "Pegboards Sets",
              "value": "pegboards_sets"
            },
            {
              "label": "Block Sets",
              "value": "block_sets"
            },
            {
              "label": "Puzzles Sets",
              "value": "puzzles_sets"
            }
          ]
        },
        {
          "name": "brain_training_game_apps_details",
          "label": "Brain Training Game Apps",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter app names or details",
          "showIf": {
            "field": "modalities_used",
            "includes": "brain_training_game_apps"
          }
        },
        {
          "name": "general_puzzle_card_games_board_games_details",
          "label": "General Puzzle, Card Games & Board Games",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter details",
          "showIf": {
            "field": "modalities_used",
            "includes": "general_puzzle_card_games_board_games"
          }
        },
        {
          "name": "paper_and_pencil_details",
          "label": "Paper-and-Pencil",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter details",
          "showIf": {
            "field": "modalities_used",
            "includes": "paper_and_pencil"
          }
        },
        {
          "type": "subheading",
          "label": "Performance measures"
        },
        {
          "name": "performance_measures",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Task Complexity",
              "value": "task_complexity"
            },
            {
              "label": "Level of Cueing",
              "value": "level_of_cueing"
            },
            {
              "label": "Task Completion Time / Response Time / Endurance",
              "value": "task_completion_time"
            },
            {
              "label": "Completed Task / Accuracy (%)",
              "value": "completed_task_accuracy"
            }
          ]
        },
        {
          "name": "task_complexity",
          "label": "Task Complexity",
          "type": "radio",
          "options": [
            {
              "label": "Simple",
              "value": "simple"
            },
            {
              "label": "Moderate",
              "value": "moderate"
            },
            {
              "label": "Complex",
              "value": "complex"
            }
          ],
          "showIf": {
            "field": "performance_measures",
            "includes": "task_complexity"
          }
        },
        {
          "name": "level_of_cueing",
          "label": "Level of Cueing",
          "type": "radio",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Minimum",
              "value": "minimum"
            },
            {
              "label": "Moderate",
              "value": "moderate"
            },
            {
              "label": "Maximum",
              "value": "maximum"
            }
          ],
          "showIf": {
            "field": "performance_measures",
            "includes": "level_of_cueing"
          }
        },
        {
          "name": "task_completion_time_details",
          "label": "Task Completion Time / Response Time / Endurance",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter details",
          "showIf": {
            "field": "performance_measures",
            "includes": "task_completion_time"
          }
        },
        {
          "name": "completed_task_accuracy",
          "label": "Completed Task / Accuracy (%)",
          "type": "input",
          "placeholder": "Enter accuracy percentage",
          "showIf": {
            "field": "performance_measures",
            "includes": "completed_task_accuracy"
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
          "name": "assessment_notes",
          "label": "Clinical Impression / Notes",
          "type": "input",
          "placeholder": "Therapist assessment..."
        },
        {
          "name": "client_cognitive_progress",
          "label": "Client Demonstrates",
          "type": "radio",
          "options": [
            {
              "label": "Improvement",
              "value": "improvement"
            },
            {
              "label": "No Change",
              "value": "no_change"
            },
            {
              "label": "Decline",
              "value": "decline"
            }
          ]
        },
        {
          "name": "strengths_client_benefited",
          "label": "Strength / Client Benefited (Increased Independence) Using",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter strengths and strategies that improved independence"
        },
        {
          "name": "barriers_to_performance",
          "label": "Barriers to Performance / Areas of Difficulty",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter barriers or areas of difficulty"
        },
        {
          "name": "overall_client_response_feedback",
          "label": "Overall Client Response, Impression or Feedback to Strategies",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter client's response, impression, or feedback"
        }
      ]
    }
  ]
}

const PLAN = {
  "sections": [
    {
      "title": "Therapist Notes",
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
          "name": "continue_cognitive_rehabilitation_focus",
          "label": "Continue Cognitive Rehabilitation Targeting / Focus On",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter targeted domains or focus areas"
        },
        {
          "name": "modify_interventions_by",
          "label": "Modify Interventions By",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter modifications to interventions"
        },
        {
          "name": "compensatory_strategies",
          "label": "Introduce / Continue Compensatory Strategies",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter compensatory strategies"
        },
        {
          "name": "frequency_duration",
          "label": "Frequency / Duration",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter treatment frequency and duration"
        },
        {
          "name": "home_exercise_program",
          "label": "Home Exercise Program / Carryover Activities Assigned",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter home exercise program or carryover activities"
        },
        {
          "name": "others",
          "label": "Others",
          "type": "input"
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