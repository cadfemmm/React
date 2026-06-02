const SUBJECTIVE = {
  "sections": [
    {
      "fields": [
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
              "label": "Dietetic Rehabilitation",
              "value": "rehabilitation"
            }
          ]
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
          "name": "new_complaints",
          "label": "New Complaints",
          "type": "textarea"
        },
        {
          "name": "sessions",
          "label": "Sessions",
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
          "name": "case_overview",
          "label": "Case Overview",
          "type": "textarea"
        },
        {
          "name": "modalities",
          "label": "Modalities",
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
          "name": "strategies",
          "label": "Strategies",
          "type": "textarea"
        },
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
          "name": "plan",
          "label": "Plan",
          "type": "textarea"
        },
        {
          "name": "comment",
          "label": "Comment",
          "type": "textarea"
        },
        {
          "name": "remark",
          "label": "Remark",
          "type": "textarea"
        }
      ]
    }
  ]
}