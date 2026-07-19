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
          "label": "History of Presenting Illness (HPI)",
          "type": "input"
        },
        {
          "name": "session_for",
          "label": "Session For",
          "type": "radio",
          "options": [
            {
              "label": "Dietetic Therapy",
              "value": "therapy"
            },
            {
              "label": "Specialised Programme",
              "value": "specialized_programmes"
            }
          ]
        },
        {
          "name": "specialized_programme",
          "label": "Specify Specialized Programme",
          "type": "input",
          "showIf": {
            "field": "session_for",
            "equals": "specialized_programmes"
          }
        },
        {
          "name": "consent",
          "label": "Consent",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Consultation has been given based on findings. Client was in his/her best interest.",
              "value": "yes"
            }
          ]
        },
        {
          "name": "consent_document",
          "label": "Upload Consent Document",
          "type": "attach-file",
          "showIf": {
            "field": "consent",
            "includes": "yes"
          }
        },
        {
          "name": "case_overview",
          "label": "Case Overview",
          "type": "input"
        },
        {
          "name": "has_new_complaints",
          "label": "New Complaints",
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
          "name": "new_complaints",
          "label": "Please Specify New Complaints",
          "type": "input",
          "showIf": {
            "field": "has_new_complaints",
            "equals": "yes"
          }
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
          "name": "objectives",
          "label": "Objective(s)",
          "type": "dynamic-section",
          "fields": [
            {
              "name": "objective",
              "label": "Objective",
              "type": "input"
            }
          ]
        },
        {
          "name": "case_overview",
          "label": "Case Overview",
          "type": "input"
        },
        {
          "type": "radio",
          "name": "modalities",
          "label": "Modalities",
          "options": [
            {
              "label": "Weighing scale",
              "value": "weighing_scale"
            },
            {
              "label": "Body Composition Analysis",
              "value": "body_composition_analysis"
            },
            {
              "label": "Others",
              "value": "others"
            },
            {
              "label": "Not relevant",
              "value": "not_relevant"
            }
          ]
        },
        {
          "type": "input",
          "name": "modalities_other",
          "label": "Specify Other Modality",
          "showIf": {
            "field": "modalities",
            "equals": "others"
          }
        },
        {
          "name": "therapeutic_exercise",
          "label": "Therapeutic Exercise/Intervention",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Medical Nutrition Therapy",
              "value": "mnt"
            },
            {
              "label": "Therapeutic Diet Preparation",
              "value": "tdp"
            },
            {
              "label": "Nutrition Support",
              "value": "nutrition_support"
            },
            {
              "label": "Dietary Education",
              "value": "dietary_education"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "therapeutic_exercise_others",
          "label": "Others - Please Specify",
          "type": "input",
          "showIf": {
            "field": "therapeutic_exercise",
            "includes": "others"
          }
        },
        {
          "name": "strateggies_activities",
          "label": "Strateggies/Activities",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Medical Nutrition Therapy",
              "value": "mnt"
            },
            {
              "label": "Therapeutic Diet Preparation",
              "value": "tdp"
            },
            {
              "label": "Nutrition Support",
              "value": "nutrition_support"
            },
            {
              "label": "Dietary Education",
              "value": "dietary_education"
            }
          ]
        },
        {
          "name": "adverse_reaction",
          "label": "Adverse Reaction",
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
          "name": "adverse_reaction_details",
          "label": "Details of Adverse Reaction",
          "type": "input",
          "showIf": {
            "field": "adverse_reaction",
            "equals": "yes"
          }
        },
        {
          "name": "adverse_reaction_document",
          "label": "Upload Supporting Document",
          "type": "file-upload",
          "showIf": {
            "field": "adverse_reaction",
            "equals": "yes"
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
          "type": "textarea",
          "label": "Clinical Impression",
          "name": "clinical_impression"
        },
        {
          "type": "subheading",
          "label": "A – ANALYSIS / ASSESSMENT / ACTION"
        },
        {
          "name": "tasks",
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
              "labelAbove": true,
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
          "name": "plan",
          "label": "Plan",
          "type": "input"
        },
        {
          "name": "comment",
          "label": "Comment",
          "type": "input"
        }
      ]
    }
  ]
}