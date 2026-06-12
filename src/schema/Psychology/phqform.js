export const SCHEMA = {
  "title": "Patient Health Questionnaire (PHQ-9)",
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
          "label": "1. Little interest or pleasure in doing things.",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "info": {
            "title": "PHQ-9 Scale",
            "content": [
              "0 – Not at all",
              "1 – Several days",
              "2 – More than half the days",
              "3 – Nearly every day"
            ]
          },
          "showInfoInRow": false,
          "options": [
            {
              "label": "Not at all (0)",
              "value": 0
            },
            {
              "label": "Several days (1)",
              "value": 1
            },
            {
              "label": "More than half the days (2)",
              "value": 2
            },
            {
              "label": "Nearly every day (3)",
              "value": 3
            }
          ]
        },
        {
          "name": "q2",
          "label": "2. Feeling down, depressed, or hopeless.",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "showInfoInRow": false,
          "options": [
            {
              "label": "Not at all (0)",
              "value": 0
            },
            {
              "label": "Several days (1)",
              "value": 1
            },
            {
              "label": "More than half the days (2)",
              "value": 2
            },
            {
              "label": "Nearly every day (3)",
              "value": 3
            }
          ]
        },
        {
          "name": "q3",
          "label": "3. Trouble falling or staying asleep, or sleeping too much.",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "showInfoInRow": false,
          "options": [
            {
              "label": "Not at all (0)",
              "value": 0
            },
            {
              "label": "Several days (1)",
              "value": 1
            },
            {
              "label": "More than half the days (2)",
              "value": 2
            },
            {
              "label": "Nearly every day (3)",
              "value": 3
            }
          ]
        },
        {
          "name": "q4",
          "label": "4. Feeling tired or having little energy.",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "showInfoInRow": false,
          "options": [
            {
              "label": "Not at all (0)",
              "value": 0
            },
            {
              "label": "Several days (1)",
              "value": 1
            },
            {
              "label": "More than half the days (2)",
              "value": 2
            },
            {
              "label": "Nearly every day (3)",
              "value": 3
            }
          ]
        },
        {
          "name": "q5",
          "label": "5. Poor appetite or overeating.",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "showInfoInRow": false,
          "options": [
            {
              "label": "Not at all (0)",
              "value": 0
            },
            {
              "label": "Several days (1)",
              "value": 1
            },
            {
              "label": "More than half the days (2)",
              "value": 2
            },
            {
              "label": "Nearly every day (3)",
              "value": 3
            }
          ]
        },
        {
          "name": "q6",
          "label": "6. Feeling bad about yourself — or that you are a failure or have let yourself or your family down.",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "showInfoInRow": false,
          "options": [
            {
              "label": "Not at all (0)",
              "value": 0
            },
            {
              "label": "Several days (1)",
              "value": 1
            },
            {
              "label": "More than half the days (2)",
              "value": 2
            },
            {
              "label": "Nearly every day (3)",
              "value": 3
            }
          ]
        },
        {
          "name": "q7",
          "label": "7. Trouble concentrating on things, such as reading the newspaper or watching television.",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "showInfoInRow": false,
          "options": [
            {
              "label": "Not at all (0)",
              "value": 0
            },
            {
              "label": "Several days (1)",
              "value": 1
            },
            {
              "label": "More than half the days (2)",
              "value": 2
            },
            {
              "label": "Nearly every day (3)",
              "value": 3
            }
          ]
        },
        {
          "name": "q8",
          "label": "8. Moving or speaking so slowly that other people could have noticed? Or being so fidgety or restless that you have been moving more than usual.",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "showInfoInRow": false,
          "options": [
            {
              "label": "Not at all (0)",
              "value": 0
            },
            {
              "label": "Several days (1)",
              "value": 1
            },
            {
              "label": "More than half the days (2)",
              "value": 2
            },
            {
              "label": "Nearly every day (3)",
              "value": 3
            }
          ]
        },
        {
          "name": "q9",
          "label": "9. Thoughts that you would be better off dead or of hurting yourself in some way.",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "showInfoInRow": false,
          "options": [
            {
              "label": "Not at all (0)",
              "value": 0
            },
            {
              "label": "Several days (1)",
              "value": 1
            },
            {
              "label": "More than half the days (2)",
              "value": 2
            },
            {
              "label": "Nearly every day (3)",
              "value": 3
            }
          ]
        }
      ]
    }
  ]
}