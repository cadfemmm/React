const SUBJECTIVE = {
  "title": "",
  "sections": [
    {
      "fields": [
        {
          "name": "session_for",
          "label": "Session For",
          "type": "radio",
          "options": [
            {
              "label": "Vision Therapy",
              "value": "vision_therapy"
            },
            {
              "label": "Visual Rehabilitation",
              "value": "visual_rehabilitation"
            },
            {
              "label": "Low Vision-Blind Rehabilitation",
              "value": "low_vision_blind_rehab"
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
          "label": "New Complaint(s)",
          "type": "textarea"
        },
        {
          "name": "session",
          "label": "Session(s)",
          "type": "custom"
        }
      ]
    }
  ]
}

const OBJECTIVE = {
  "title": "",
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
              "label": "Home Exercise",
              "value": "home_exercise"
            },
            {
              "label": "In Office Training",
              "value": "in_office_training"
            },
            {
              "label": "Both",
              "value": "both"
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
          "label": "Objectives",
          "type": "dynamic-section",
          "fields": [
            {
              "name": "objective_text",
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
  "title": "",
  "sections": [
    {
      "fields": [
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
  "sections": [
    {
      "fields": [
        {
          "name": "plan_text",
          "label": "Plan",
          "type": "textarea"
        },
        {
          "name": "comment_text",
          "label": "Comment",
          "type": "textarea"
        },
        {
          "name": "remark_text",
          "label": "Remark",
          "type": "textarea"
        }
      ]
    }
  ]
}