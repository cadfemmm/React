const SUBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "name": "complaint",
          "label": "Cheif Complaints",
          "type": "input",
          "placeholder": "Therapist assessment..."
        },
        {
          "name": "History of Present",
          "label": "History of Present Illnes",
          "type": "input"
        },
        {
          "name": "observation",
          "label": "Observation",
          "type": "input",
          "placeholder": "Enter observation",
          "enableVoiceToText": true,
          "enableOCR": true
        },
        {
          "name": "any_complaints",
          "label": "Any Complaints",
          "type": "input",
          "placeholder": "Enter any complaints",
          "enableVoiceToText": true,
          "enableOCR": true
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
          "name": "new_finding_issue",
          "label": "New Finding / Issue",
          "type": "input",
          "placeholder": "Enter new finding or issue",
          "enableVoiceToText": true,
          "enableOCR": true
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
          "name": "objective_interventions",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Work Hardening",
              "value": "work_hardening"
            },
            {
              "label": "Work Simulation",
              "value": "work_simulation"
            },
            {
              "label": "Ergonomics Education",
              "value": "ergonomics_education"
            },
            {
              "label": "Job Modifications",
              "value": "job_modifications"
            },
            {
              "label": "Workplace Assessments & Adaptations",
              "value": "workplace_assessments_adaptations"
            },
            {
              "label": "Functional Capacity Evaluation",
              "value": "functional_capacity_evaluation"
            },
            {
              "label": "Vocational Rehabilitation",
              "value": "vocational_rehabilitation"
            },
            {
              "label": "Job Coaching",
              "value": "job_coaching"
            },
            {
              "label": "Psychosocial Adaptation",
              "value": "psychosocial_adaptation"
            },
            {
              "label": "Cognitive Training",
              "value": "cognitive_training"
            },
            {
              "label": "Pain Management",
              "value": "pain_management"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "work_hardening_components",
          "label": "Work Hardening Components",
          "type": "checkbox-group",
          "options": [
            {
              "label": "BTE Primus",
              "value": "bte_primus"
            },
            {
              "label": "Positional Tolerance Training",
              "value": "positional_tolerance_training"
            },
            {
              "label": "Fine Motor Training",
              "value": "fine_motor_training"
            },
            {
              "label": "Strength and Endurance Training",
              "value": "strength_endurance_training"
            }
          ],
          "showIf": {
            "field": "objective_interventions",
            "includes": "work_hardening"
          }
        },
        {
          "name": "work_hardening_bte_primus_remarks",
          "label": "BTE Primus Remarks",
          "type": "input",
          "showIf": {
            "field": "work_hardening_components",
            "includes": "bte_primus"
          }
        },
        {
          "name": "positional_tolerance_training_remarks",
          "label": "Positional Tolerance Training Remarks",
          "type": "input",
          "showIf": {
            "field": "work_hardening_components",
            "includes": "positional_tolerance_training"
          }
        },
        {
          "name": "fine_motor_training_remarks",
          "label": "Fine Motor Training Remarks",
          "type": "input",
          "showIf": {
            "field": "work_hardening_components",
            "includes": "fine_motor_training"
          }
        },
        {
          "name": "strength_endurance_training_items",
          "label": "Strength and Endurance Training",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Pushing",
              "value": "pushing"
            },
            {
              "label": "Pulling",
              "value": "pulling"
            },
            {
              "label": "Walking",
              "value": "walking"
            },
            {
              "label": "Tread Climber",
              "value": "tread_climber"
            },
            {
              "label": "Wheelchair Manoeuvre",
              "value": "wheelchair_manoeuvre"
            },
            {
              "label": "Stairs",
              "value": "stairs"
            },
            {
              "label": "Stair Mill",
              "value": "stair_mill"
            },
            {
              "label": "Industrial Ladder",
              "value": "industrial_ladder"
            },
            {
              "label": "Jacob’s Ladder",
              "value": "jacobs_ladder"
            },
            {
              "label": "Microprocessor Upper and Limb Exerciser (MULE)",
              "value": "mule"
            },
            {
              "label": "HIIT UBE",
              "value": "hiit_ube"
            },
            {
              "label": "HIIT MILL",
              "value": "hiit_mill"
            },
            {
              "label": "Eccentron",
              "value": "eccentron"
            },
            {
              "label": "BTE Multi-Cervical Unit (MCU)",
              "value": "bte_mcu"
            },
            {
              "label": "BTE Primus",
              "value": "strength_bte_primus"
            },
            {
              "label": "Con-Trex",
              "value": "con_trex"
            },
            {
              "label": "HUMAC NORM",
              "value": "humac_norm"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ],
          "showIf": {
            "field": "work_hardening_components",
            "includes": "strength_endurance_training"
          }
        },
        {
          "name": "pushing_remarks",
          "label": "Pushing Remarks",
          "type": "input",
          "showIf": {
            "field": "strength_endurance_training_items",
            "includes": "pushing"
          }
        },
        {
          "name": "pulling_remarks",
          "label": "Pulling Remarks",
          "type": "input",
          "showIf": {
            "field": "strength_endurance_training_items",
            "includes": "pulling"
          }
        },
        {
          "name": "walking_remarks",
          "label": "Walking Remarks",
          "type": "input",
          "showIf": {
            "field": "strength_endurance_training_items",
            "includes": "walking"
          }
        },
        {
          "name": "strength_endurance_others",
          "label": "Other Strength and Endurance Training Remarks",
          "type": "input",
          "showIf": {
            "field": "strength_endurance_training_items",
            "includes": "others"
          }
        },
        {
          "name": "work_simulation_remarks",
          "label": "Work Simulation Remarks",
          "type": "input",
          "showIf": {
            "field": "objective_interventions",
            "includes": "work_simulation"
          }
        },
        {
          "name": "ergonomics_education_remarks",
          "label": "Ergonomics Education Remarks",
          "type": "input",
          "showIf": {
            "field": "objective_interventions",
            "includes": "ergonomics_education"
          }
        },
        {
          "name": "job_modifications_remarks",
          "label": "Job Modifications Remarks",
          "type": "input",
          "showIf": {
            "field": "objective_interventions",
            "includes": "job_modifications"
          }
        },
        {
          "name": "workplace_assessments_adaptations_remarks",
          "label": "Workplace Assessments & Adaptations Remarks",
          "type": "input",
          "showIf": {
            "field": "objective_interventions",
            "includes": "workplace_assessments_adaptations"
          }
        },
        {
          "name": "fce_components",
          "label": "Functional Capacity Evaluation",
          "type": "radio",
          "options": [
            {
              "label": "BTE Evaltech",
              "value": "bte_evaltech"
            },
            {
              "label": "BTE Primus",
              "value": "bte_primus"
            },
            {
              "label": "Valpar Joule",
              "value": "valpar_joule"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ],
          "showIf": {
            "field": "objective_interventions",
            "includes": "functional_capacity_evaluation"
          }
        },
        {
          "name": "bte_evaltech_remarks",
          "label": "BTE Evaltech Remarks",
          "type": "input",
          "placeholder": "Enter BTE Evaltech remarks",
          "showIf": {
            "field": "fce_components",
            "equals": "bte_evaltech"
          }
        },
        {
          "name": "fce_bte_primus_remarks",
          "label": "BTE Primus Remarks",
          "type": "input",
          "placeholder": "Enter BTE Primus remarks",
          "showIf": {
            "field": "fce_components",
            "equals": "bte_primus"
          }
        },
        {
          "name": "valpar_joule_remarks",
          "label": "Valpar Joule Remarks",
          "type": "input",
          "placeholder": "Enter Valpar Joule remarks",
          "showIf": {
            "field": "fce_components",
            "equals": "valpar_joule"
          }
        },
        {
          "name": "fce_components_other_details",
          "label": "Other Functional Capacity Evaluation",
          "type": "input",
          "placeholder": "Enter other functional capacity evaluation",
          "showIf": {
            "field": "fce_components",
            "equals": "others"
          }
        },
        {
          "name": "bte_evaltech_remarks",
          "label": "BTE Evaltech Remarks",
          "type": "input",
          "showIf": {
            "field": "fce_components",
            "includes": "bte_evaltech"
          }
        },
        {
          "name": "fce_bte_primus_remarks",
          "label": "BTE Primus Remarks",
          "type": "input",
          "showIf": {
            "field": "fce_components",
            "includes": "bte_primus"
          }
        },
        {
          "name": "valpar_joule_remarks",
          "label": "Valpar Joule Remarks",
          "type": "input",
          "showIf": {
            "field": "fce_components",
            "includes": "valpar_joule"
          }
        },
        {
          "name": "fce_others_remarks",
          "label": "Other Functional Capacity Evaluation Remarks",
          "type": "input",
          "showIf": {
            "field": "fce_components",
            "includes": "others"
          }
        },
        {
          "name": "vocational_rehabilitation_remarks",
          "label": "Vocational Rehabilitation Remarks",
          "type": "input",
          "showIf": {
            "field": "objective_interventions",
            "includes": "vocational_rehabilitation"
          }
        },
        {
          "name": "job_coaching_remarks",
          "label": "Job Coaching Remarks",
          "type": "input",
          "showIf": {
            "field": "objective_interventions",
            "includes": "job_coaching"
          }
        },
        {
          "name": "psychosocial_adaptation_remarks",
          "label": "Psychosocial Adaptation Remarks",
          "type": "input",
          "showIf": {
            "field": "objective_interventions",
            "includes": "psychosocial_adaptation"
          }
        },
        {
          "name": "cognitive_training_remarks",
          "label": "Cognitive Training Remarks",
          "type": "input",
          "showIf": {
            "field": "objective_interventions",
            "includes": "cognitive_training"
          }
        },
        {
          "name": "pain_management_items",
          "label": "Pain Management",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Hot Pack",
              "value": "hot_pack"
            },
            {
              "label": "Cold Pack",
              "value": "cold_pack"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ],
          "showIf": {
            "field": "objective_interventions",
            "includes": "pain_management"
          }
        },
        {
          "name": "hot_pack_remarks",
          "label": "Hot Pack Remarks",
          "type": "input",
          "placeholder": "Enter hot pack remarks",
          "showIf": {
            "field": "pain_management_items",
            "includes": "hot_pack"
          }
        },
        {
          "name": "cold_pack_remarks",
          "label": "Cold Pack Remarks",
          "type": "input",
          "placeholder": "Enter cold pack remarks",
          "showIf": {
            "field": "pain_management_items",
            "includes": "cold_pack"
          }
        },
        {
          "name": "pain_management_others_remarks",
          "label": "Other Pain Management Remarks",
          "type": "input",
          "showIf": {
            "field": "pain_management_items",
            "includes": "others"
          }
        },
        {
          "name": "objective_others",
          "label": "Others",
          "type": "input",
          "showIf": {
            "field": "objective_interventions",
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
          "name": "plan_items",
          "label": "Plan",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Continue work hardening targeting / focusing on",
              "value": "continue_work_hardening"
            },
            {
              "label": "Continue assessment targeting / focusing on",
              "value": "continue_fce_assessment"
            },
            {
              "label": "Introduce work adaptation / modification strategies",
              "value": "introduce_work_adaptation_modification"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "continue_work_hardening_remarks",
          "label": "Work Hardening Target / Focus",
          "type": "input",
          "placeholder": "Enter work hardening target / focus",
          "showIf": {
            "field": "plan_items",
            "includes": "continue_work_hardening"
          }
        },
        {
          "name": "continue_fce_assessment_remarks",
          "label": "FCE Assessment Target / Focus",
          "type": "input",
          "placeholder": "Enter FCE assessment target / focus",
          "showIf": {
            "field": "plan_items",
            "includes": "continue_fce_assessment"
          }
        },
        {
          "name": "introduce_work_adaptation_modification_remarks",
          "label": "Work Adaptation / Modification Strategies",
          "type": "input",
          "placeholder": "Enter strategies to introduce",
          "showIf": {
            "field": "plan_items",
            "includes": "introduce_work_adaptation_modification"
          }
        },
        {
          "name": "plan_other_details",
          "label": "Other Plan Item",
          "type": "input",
          "placeholder": "Enter other plan item",
          "showIf": {
            "field": "plan_items",
            "includes": "others"
          }
        },
        {
          "name": "plan_other_remarks",
          "label": "Other Plan Remarks",
          "type": "input",
          "placeholder": "Enter other plan details",
          "showIf": {
            "field": "plan_items",
            "includes": "others"
          }
        }
      ]
    }
  ]
}

export { SUBJECTIVE, OBJECTIVE, ASSESSMENT, PLAN }