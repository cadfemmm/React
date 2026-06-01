const SUBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "name": "chief_complaint",
          "label": "Chief Complaint",
          "type": "input"
        },
        {
          "name": "hpi",
          "label": "History of Present Illness",
          "type": "input"
        },
       {
          type: "textarea",
          name: "case_overview",
          label: "Case Overview"
        },

        {
          type: "single-select",
          name: "session_for",
          label: "Session For",
          options: [
            { label: "Prosthetic Training", value: "prosthetic_training" },
            { label: "Orthotic Training", value: "orthotic_training" },
            { label: "Gait Training", value: "gait_training" },
            { label: "Stump Care", value: "stump_care" },
            { label: "Others", value: "others" }
          ]
        },

        {
          type: "single-select",
          name: "session_type",
          label: "Session Type",
          options: [
            { label: "Centre-based", value: "centre_based" },
            { label: "Home-based", value: "home_based" },
            { label: "Tele-rehab", value: "tele_rehab" }
          ]
        },

        {
          type: "radio",
          name: "new_complaint",
          label: "New Complaint",
          options: [
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" }
          ]
        },

        {
          type: "radio",
          name: "pain_during_session",
          label: "Pain During Session",
          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          "name": "pain_score",
          "label": "Pain Score",
          "type": "scale-slider",
          "min": 0,
          "max": 10,
          "ranges": [
            {
              "min": 0,
              "max": 3,
              "label": "Mild",
              "color": "#22c55e"
            },
            {
              "min": 4,
              "max": 7,
              "label": "Moderate",
              "color": "#facc15"
            },
            {
              "min": 8,
              "max": 10,
              "label": "Severe",
              "color": "#ef4444"
            }
          ],
          "showValue": true,
          "showIf": {
            "field": "pain_during_session",
            "equals": "yes"
          }
          
        },


        {
          type: "radio",
          name: "adverse_reaction",
          label: "Adverse Reaction",
          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          type: "textarea",
          name: "adverse_reaction_details",
          label: "Adverse Reaction Details",
          showIf: {
            field: "adverse_reaction",
            equals: "yes"
          }
        },

        {
          type: "input",
          name: "session_number",
          label: "Session Number",
          readOnly: true
        },

        {
          type: "textarea",
          name: "subjective_remarks",
          label: "Remarks"
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
          "type": "multi-select-dropdown",
          "name": "therapeutic_exercise",
          "label": "Therapeutic Exercise / Intervention",
          "options": [
            { "label": "Gait training", "value": "gait_training" },
            { "label": "Balance training", "value": "balance_training" },
            { "label": "Strengthening", "value": "strengthening" },
            { "label": "ROM exercise", "value": "rom_exercise" },
            { "label": "Transfer training", "value": "transfer_training" },
            { "label": "Prosthetic gait training", "value": "prosthetic_gait_training" },
            { "label": "Donning & doffing", "value": "donning_doffing" },
            { "label": "Stump bandaging", "value": "stump_bandaging" },
            { "label": "Stair training", "value": "stair_training" },
            { "label": "Weight shifting", "value": "weight_shifting" },
            { "label": "Others", "value": "others" }
          ]
        },

        {
          "type": "multi-select-dropdown",
          "name": "modalities_equipment",
          "label": "Modalities / Equipment",
          "options": [
            { "label": "Parallel bar", "value": "parallel_bar" },
            { "label": "Walker", "value": "walker" },
            { "label": "Quadripod", "value": "quadripod" },
            { "label": "Prosthesis", "value": "prosthesis" },
            { "label": "Orthosis", "value": "orthosis" },
            { "label": "Resistance band", "value": "resistance_band" },
            { "label": "Mirror therapy", "value": "mirror_therapy" },
            { "label": "TENS", "value": "tens" },
            { "label": "Ultrasound", "value": "ultrasound" },
            { "label": "Others", "value": "others" }
          ]
        },

        {
          "type": "textarea",
          "name": "observation_during_treatment",
          "label": "Observation During Treatment"
        },

        {
          "type": "single-select",
          "name": "tolerance",
          "label": "Tolerance",
          "options": [
            { "label": "Good", "value": "good" },
            { "label": "Fair", "value": "fair" },
            { "label": "Poor", "value": "poor" }
          ]
        },

        {
          "type": "single-select",
          "name": "assistance_level",
          "label": "Assistance Level",
          "options": [
            { "label": "Independent", "value": "independent" },
            { "label": "Supervision", "value": "supervision" },
            { "label": "Min Assist", "value": "min_assist" },
            { "label": "Mod Assist", "value": "mod_assist" },
            { "label": "Max Assist", "value": "max_assist" },
            { "label": "Dependent", "value": "dependent" }
          ]
        },

        {
          "type": "input",
          "name": "distance_repetition",
          "label": "Distance / Repetition"
        },

        {
          "type": "input",
          "name": "skin_stump_check",
          "label": "Skin / Stump Check"
        },

        {
          "type": "textarea",
          "name": "objective_remarks",
          "label": "Remarks"
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
          "type": "input",
          "name": "clinical_impression",
          "label": "Clinical Impression"
        },
        {
          "type": "textarea",
          "name": "response_to_intervention",
          "label": "Response to Intervention"
        },

        {
          "type": "single-select",
          "name": "progression_status",
          "label": "Progression Status",
          "options": [
            { "label": "Improved", "value": "improved" },
            { "label": "Static", "value": "static" },
            { "label": "Reduced", "value": "reduced" }
          ]
        },

        {
          "type": "textarea",
          "name": "clinical_impression",
          "label": "Clinical Impression"
        },

        {
          "type": "multi-select-dropdown",
          "name": "problem_identified",
          "label": "Problem Identified",
          "options": [
            { "label": "Poor balance", "value": "poor_balance" },
            { "label": "Pain", "value": "pain" },
            { "label": "Poor endurance", "value": "poor_endurance" },
            { "label": "Poor compliance", "value": "poor_compliance" },
            { "label": "Skin issue", "value": "skin_issue" },
            { "label": "Poor fit", "value": "poor_fit" },
            { "label": "Weakness", "value": "weakness" },
            { "label": "Others", "value": "others" }
          ]
        },

        {
          "type": "textarea",
          "name": "assessment_remarks",
          "label": "Remarks"
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
          "label": "Short Term Goals (2–4 Weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "short_term_goals"
        },
        {
          "type": "subheading",
          "label": "Long Term Goals (6–12 Weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "long_term_goals"
        },
        {
          "type": "single-select",
          "name": "plan",
          "label": "Plan",
          "options": [
            { "label": "Modify", "value": "modify" },
            { "label": "Continue", "value": "continue" },
            { "label": "Progress", "value": "progress" },
            { "label": "Hold", "value": "hold" },
            { "label": "Discharge", "value": "discharge" }
          ]
        },

        {
          "type": "textarea",
          "name": "updated_intervention_plan",
          "label": "Updated Intervention Plan",
          showIf: {
            or: [
              { field: "plan", equals: "modify" },
              { field: "plan", equals: "progress" }
            ]
          }
        },

        {
        "type": "multi-select-dropdown",
        "name": "plan_therapeutic_exercise",
        "label": "Therapeutic Exercise / Intervention",
        "options": [
            { "label": "Gait training", "value": "gait_training" },
            { "label": "Balance training", "value": "balance_training" },
            { "label": "Strengthening", "value": "strengthening" },
            { "label": "ROM exercise", "value": "rom_exercise" },
            { "label": "Transfer training", "value": "transfer_training" },
            { "label": "Prosthetic gait training", "value": "prosthetic_gait_training" },
            { "label": "Donning & doffing", "value": "donning_doffing" },
            { "label": "Stump bandaging", "value": "stump_bandaging" },
            { "label": "Stair training", "value": "stair_training" },
            { "label": "Weight shifting", "value": "weight_shifting" },
            { "label": "Others", "value": "others" }
        ]
        },
        {
        "type": "multi-select-dropdown",
        "name": "plan_modalities",
        "label": "Modalities",
        "options": [
            { "label": "Parallel bar", "value": "parallel_bar" },
            { "label": "Walker", "value": "walker" },
            { "label": "Quadripod", "value": "quadripod" },
            { "label": "Prosthesis", "value": "prosthesis" },
            { "label": "Orthosis", "value": "orthosis" },
            { "label": "Resistance band", "value": "resistance_band" },
            { "label": "Mirror therapy", "value": "mirror_therapy" },
            { "label": "TENS", "value": "tens" },
            { "label": "Ultrasound", "value": "ultrasound" },
            { "label": "Others", "value": "others" }
        ]
        },

        {
          "type": "textarea",
          "name": "home_program",
          "label": "Home Program / Education"
        },

        {
          "type": "date",
          "name": "next_appointment",
          "label": "Next Appointment"
        },

        {
          "type": "textarea",
          "name": "others",
          "label": "Others"
        },

        {
          "type": "textarea",
          "name": "comment",
          "label": "Comment"
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
