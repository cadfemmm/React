const SCHEMA = {
  "title": "DASH Questionnaire",
  "sections": [
    {
      "fields": [
        {
          "type": "info-text",
          "text": "Please rate your difficulty (1 = No difficulty, 5 = Unable)"
        },
        {
          "type": "subheading",
          "label": "Functional Activities"
        },
        {
          "type": "scale-table",
          "name": "dash_functional",
          "label": "Activity",
          "columns": [
            {
              "label": "No difficulty",
              "value": 1
            },
            {
              "label": "Mild",
              "value": 2
            },
            {
              "label": "Moderate",
              "value": 3
            },
            {
              "label": "Severe",
              "value": 4
            },
            {
              "label": "Unable",
              "value": 5
            }
          ],
          "rows": [
            "Open a tight or new jar",
            "Write",
            "Turn a key",
            "Prepare a meal",
            "Push open a heavy door",
            "Place object on shelf above head",
            "Heavy household chores",
            "Garden / yard work",
            "Make a bed",
            "Carry shopping bag",
            "Carry heavy object",
            "Change light bulb overhead",
            "Wash / blow dry hair",
            "Wash your back",
            "Put on pullover sweater",
            "Use knife to cut food"
          ]
        },
        {
          "type": "subheading",
          "label": "Recreational Activities"
        },
        {
          "type": "scale-table",
          "name": "dash_recreation",
          "label": "Activity",
          "columns": [
            {
              "label": "No difficulty",
              "value": 1
            },
            {
              "label": "Mild",
              "value": 2
            },
            {
              "label": "Moderate",
              "value": 3
            },
            {
              "label": "Severe",
              "value": 4
            },
            {
              "label": "Unable",
              "value": 5
            }
          ],
          "rows": [
            "Light recreational activities",
            "Force/impact activities",
            "Free arm movement activities"
          ]
        },
        {
          "type": "subheading",
          "label": "Symptoms"
        },
        {
          "type": "scale-table",
          "name": "dash_symptoms",
          "label": "Symptom / Activity",
          "columns": [
            {
              "label": "No difficulty",
              "value": 1
            },
            {
              "label": "Mild",
              "value": 2
            },
            {
              "label": "Moderate",
              "value": 3
            },
            {
              "label": "Severe",
              "value": 4
            },
            {
              "label": "Unable",
              "value": 5
            }
          ],
          "rows": [
            "Transportation needs",
            "Sexual activities",
            "Social activity interference",
            "Work limitation",
            "Daily activity limitation",
            "Pain at rest",
            "Pain during activity",
            "Tingling",
            "Weakness",
            "Stiffness",
            "Sleep difficulty"
          ]
        }
      ]
    }
  ]
}