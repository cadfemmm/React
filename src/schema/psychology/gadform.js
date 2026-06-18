export const SCHEMA = {
  "title": "Generalized Anxiety Disorder (GAD-7)",
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
          "label": "1. Feeling nervous, anxious, or on edge.",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "info": {
            "title": "GAD-7 Scale",
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
          "label": "2. Not being able to stop or control worrying.",
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
          "label": "3. Worrying too much about different things.",
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
          "label": "4. Trouble relaxing.",
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
          "label": "5. Being so restless that it is hard to sit still.",
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
          "label": "6. Becoming easily annoyed or irritable.",
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
          "label": "7. Feeling afraid, as if something awful might happen.",
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