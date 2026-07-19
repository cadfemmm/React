import { ACTIONS_BUTTON } from "../actions";

const SUBJECTIVE = {
  "title": "",
  "actions": ACTIONS_BUTTON,
  "sections": [
    {
      "fields": [

        {
          "name": "case_overview",
          "label": "Case Overview",
          "type": "input"
        },
        {
          "name": "session_for",
          "label": "Session For",
          "type": "radio",
          "options": [
            { "label": "Vision Therapy", "value": "vision_therapy" },
            { "label": "Visual Rehabilitation", "value": "visual_rehabilitation" },
            { "label": "Low Vision & Blind Rehabilitation", "value": "low_vision_blind_rehab" },
            { "label": "Specialized Programme", "value": "specialized_programme" }
          ]
        },
        {
          "name": "session_type",
          "label": "Session Type",
          "type": "radio",
          "options": [
            { "label": "In Office training", "value": "in_office_training" },
            { "label": "Home-based exercise review", "value": "home_based_exercise_review" },
            { "label": "Consultation", "value": "consultation" },
            { "label": "Tele-rehabilitation", "value": "tele_rehabilitation" }
          ]
        },
        {
          "type": "subheading",
          "label": "Consent"
        },
        {
          "name": "new_complaint",
          "label": "New Complaint",
          "type": "radio",
          "options": [
            { "label": "Yes", "value": "yes" },
            { "label": "No", "value": "no" }
          ]
        },
        {
          "name": "session_number",
          "label": "Session Number",
          "type": "input",
          "readOnly": true
        }
      ]
    }
  ]
}

const OBJECTIVE = {
  "title": "",
  "actions": ACTIONS_BUTTON,
  "sections": [
    {
      "fields": [
        {
          "name": "objectives_of_strategies",
          "label": "Objective of the Strategies",
          "type": "dynamic-section",
          "fields": [
            {
              "name": "strategy_text",
              "label": "Strategy",
              "type": "textarea"
            }
          ]
        },
        {
          "type": "multi-select-dropdown",
          "name": "modalities_used",
          "label": "Modalities Used",
          "options": [
            { "label": "Vision Therapy module", "value": "vision_therapy_module" },
            { "label": "Neuro-Visual Rehabilitation module", "value": "neuro_visual_rehabilitation_module" },
            { "label": "Low Vision & Blind Rehabilitation module", "value": "low_vision_blind_rehabilitation_module" },
            { "label": "Restitution Program", "value": "restitution_program" },
            { "label": "Visual Adaptation Technique", "value": "visual_adaptation_technique" },
            { "label": "Computer-based/Digital Training", "value": "computer_based_digital_training" },
            { "label": "Visual Sustitution Method", "value": "visual_substitution_method" },
            { "label": "Compensatory Strategies", "value": "compensatory_strategies" },
            { "label": "Visual Aids Trial & Training", "value": "visual_aids_trial_training" },
            { "label": "Low Vision Aids Trial & Training", "value": "low_vision_aids_trial_training" },
            { "label": "Low Vision Aids Dispensing", "value": "low_vision_aids_dispensing" },
            { "label": "Eccentric Viewing Training", "value": "eccentric_viewing_training" },
            { "label": "Others", "value": "others" }
          ]
        },
        {
          "name": "modalities_used_others",
          "label": "Others (specify)",
          "type": "input",
          "showIf": {
            "field": "modalities_used",
            "includes": "others"
          }
        }
      ]
    }
  ]
}

const ASSESSMENT = {
  "title": "",
  "actions": ACTIONS_BUTTON,
  "sections": [
    {
      "fields": [
        {
          "name": "observation_during_treatment",
          "label": "Observation During Treatment",
          "type": "input"
        },
        {
          "name": "tasks",
          "label": "Tasks",
          "type": "dynamic-section",
          "fields": [
            {
              "name": "task",
              "label": "Task",
              "type": "input"
            },
            {
              "name": "achievement",
              "label": "Achievement",
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
            },
            {
              "name": "comment",
              "label": "Comment / Remark",
              "type": "input"
            }
          ]
        }
      ]
    }
  ]
}


const PLAN = {
  "title": "",
  "actions": ACTIONS_BUTTON,
  "sections": [
    {
      "fields": [
        {
          "name": "plan",
          "label": "Plan",
          "type": "radio",
          "options": [
            { "label": "To continue current modalities", "value": "continue_current_modalities" },
            { "label": "To re-evaluate/modify current modalities", "value": "reevaluate_modify_modalities" },
            { "label": "To re-assess client performance", "value": "reassess_client_performance" },
            { "label": "Others", "value": "others" }
          ]
        },
        {
          "name": "plan_others",
          "label": "Others (specify)",
          "type": "input",
          "showIf": {
            "field": "plan",
            "equals": "others"
          }
        },
        {
          "name": "remarks",
          "label": "Remarks",
          "type": "input"
        }
      ]
    }
  ]
}
console.log (SUBJECTIVE);
console.log (OBJECTIVE);
console.log (ASSESSMENT);
console.log (PLAN);
export default {
  PLAN,
  OBJECTIVE,
  SUBJECTIVE,
  ASSESSMENT,
};
