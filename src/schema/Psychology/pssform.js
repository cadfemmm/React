const SCHEMA = {
  "title": "Perceived Stress Scale (PSS)",
  "enableScoreToggle": true,
  "actions": [
    {
      "type": "toggle-show-scores"
    }
  ],
  "sections": [
    {
      "fields": [
        {
          "name": "q1",
          "label": "1. In the last month, how often have you been upset because of something that happened unexpectedly?",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "info": {
            "title": "PSS Scale",
            "content": [
              "0 – Never",
              "1 – Almost never",
              "2 – Sometimes",
              "3 – Fairly often",
              "4 – Very often"
            ]
          },
          "showInfoInRow": false,
          "options": [
            {
              "label": "Never (0)",
              "value": 0
            },
            {
              "label": "Almost never (1)",
              "value": 1
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Fairly often (3)",
              "value": 3
            },
            {
              "label": "Very often (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "q2",
          "label": "2. In the last month, how often have you felt that you were unable to control the important things in your life?",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "showInfoInRow": false,
          "options": [
            {
              "label": "Never (0)",
              "value": 0
            },
            {
              "label": "Almost never (1)",
              "value": 1
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Fairly often (3)",
              "value": 3
            },
            {
              "label": "Very often (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "q3",
          "label": "3. In the last month, how often have you felt nervous and stressed?",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "showInfoInRow": false,
          "options": [
            {
              "label": "Never (0)",
              "value": 0
            },
            {
              "label": "Almost never (1)",
              "value": 1
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Fairly often (3)",
              "value": 3
            },
            {
              "label": "Very often (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "q4",
          "label": "4. In the last month, how often have you felt confident about your ability to handle your personal problems?",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "showInfoInRow": false,
          "options": [
            {
              "label": "Never (0)",
              "value": 0
            },
            {
              "label": "Almost never (1)",
              "value": 1
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Fairly often (3)",
              "value": 3
            },
            {
              "label": "Very often (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "q5",
          "label": "5. In the last month, how often have you felt that things were going your way?",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "showInfoInRow": false,
          "options": [
            {
              "label": "Never (0)",
              "value": 0
            },
            {
              "label": "Almost never (1)",
              "value": 1
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Fairly often (3)",
              "value": 3
            },
            {
              "label": "Very often (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "q6",
          "label": "6. In the last month, how often have you found that you could not cope with all the things that you had to do?",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "showInfoInRow": false,
          "options": [
            {
              "label": "Never (0)",
              "value": 0
            },
            {
              "label": "Almost never (1)",
              "value": 1
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Fairly often (3)",
              "value": 3
            },
            {
              "label": "Very often (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "q7",
          "label": "7. In the last month, how often have you been able to control irritations in your life?",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "showInfoInRow": false,
          "options": [
            {
              "label": "Never (0)",
              "value": 0
            },
            {
              "label": "Almost never (1)",
              "value": 1
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Fairly often (3)",
              "value": 3
            },
            {
              "label": "Very often (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "q8",
          "label": "8. In the last month, how often have you felt that you were on top of things?",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "showInfoInRow": false,
          "options": [
            {
              "label": "Never (0)",
              "value": 0
            },
            {
              "label": "Almost never (1)",
              "value": 1
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Fairly often (3)",
              "value": 3
            },
            {
              "label": "Very often (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "q9",
          "label": "9. In the last month, how often have you been angered because of things that were outside of your control?",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "showInfoInRow": false,
          "options": [
            {
              "label": "Never (0)",
              "value": 0
            },
            {
              "label": "Almost never (1)",
              "value": 1
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Fairly often (3)",
              "value": 3
            },
            {
              "label": "Very often (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "q10",
          "label": "10. In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "showInfoInRow": false,
          "options": [
            {
              "label": "Never (0)",
              "value": 0
            },
            {
              "label": "Almost never (1)",
              "value": 1
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Fairly often (3)",
              "value": 3
            },
            {
              "label": "Very often (4)",
              "value": 4
            }
          ]
        }
      ]
    }
  ]
}