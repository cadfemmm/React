const SCHEMA = {
  "title": "FIM Assessment",
  "titleInfo": {
    "title": "FIM Instrument",
    "content": [
      "7 – Complete Independence: Patient performs task safely.",
      "6 – Modified Independence: Uses assistive device.",
      "5 – Supervision: Only supervision needed.",
      "4 – Minimal Assistance: Patient performs 75% of task.",
      "3 – Moderate Assistance: Patient performs 50%.",
      "2 – Maximal Assistance: Patient performs 25%.",
      "1 – Total Assistance: Patient performs <25%."
    ]
  },
  "sections": [
    {
      "title": "Self Care",
      "fields": [
        {
          "type": "scale-table",
          "name": "selfcare",
          "columns": [
            {
              "label": "1",
              "value": "1",
              "required": true
            },
            {
              "label": "2",
              "value": "2",
              "required": true
            },
            {
              "label": "3",
              "value": "3",
              "required": true
            },
            {
              "label": "4",
              "value": "4",
              "required": true
            },
            {
              "label": "5",
              "value": "5",
              "required": true
            },
            {
              "label": "6",
              "value": "6",
              "required": true
            },
            {
              "label": "7",
              "value": "7",
              "required": true
            }
          ],
          "rows": [
            "Eating",
            "Grooming",
            "Bathing",
            "Dressing - Upper Body",
            "Dressing - Lower Body",
            "Toileting"
          ]
        }
      ]
    },
    {
      "title": "Sphincter Control",
      "fields": [
        {
          "type": "scale-table",
          "name": "sphincter",
          "columns": [
            {
              "label": "1",
              "value": "1",
              "required": true
            },
            {
              "label": "2",
              "value": "2",
              "required": true
            },
            {
              "label": "3",
              "value": "3",
              "required": true
            },
            {
              "label": "4",
              "value": "4",
              "required": true
            },
            {
              "label": "5",
              "value": "5",
              "required": true
            },
            {
              "label": "6",
              "value": "6",
              "required": true
            },
            {
              "label": "7",
              "value": "7",
              "required": true
            }
          ],
          "rows": [
            "Bladder Management",
            "Bowel Management"
          ]
        }
      ]
    },
    {
      "title": "Transfers",
      "fields": [
        {
          "type": "scale-table",
          "name": "transfer",
          "columns": [
            {
              "label": "1",
              "value": "1",
              "required": true
            },
            {
              "label": "2",
              "value": "2",
              "required": true
            },
            {
              "label": "3",
              "value": "3",
              "required": true
            },
            {
              "label": "4",
              "value": "4",
              "required": true
            },
            {
              "label": "5",
              "value": "5",
              "required": true
            },
            {
              "label": "6",
              "value": "6",
              "required": true
            },
            {
              "label": "7",
              "value": "7",
              "required": true
            }
          ],
          "rows": [
            "Bed / Chair / Wheelchair",
            "Toilet",
            "Tub / Shower"
          ]
        }
      ]
    },
    {
      "title": "Locomotion",
      "fields": [
        {
          "type": "scale-table",
          "name": "locomotion",
          "columns": [
            {
              "label": "1",
              "value": "1",
              "required": true
            },
            {
              "label": "2",
              "value": "2",
              "required": true
            },
            {
              "label": "3",
              "value": "3",
              "required": true
            },
            {
              "label": "4",
              "value": "4",
              "required": true
            },
            {
              "label": "5",
              "value": "5",
              "required": true
            },
            {
              "label": "6",
              "value": "6",
              "required": true
            },
            {
              "label": "7",
              "value": "7",
              "required": true
            }
          ],
          "rows": [
            "Walk / Wheelchair",
            "Stairs"
          ]
        }
      ]
    },
    {
      "title": "Communication",
      "fields": [
        {
          "type": "scale-table",
          "name": "communication",
          "columns": [
            {
              "label": "1",
              "value": "1",
              "required": true
            },
            {
              "label": "2",
              "value": "2",
              "required": true
            },
            {
              "label": "3",
              "value": "3",
              "required": true
            },
            {
              "label": "4",
              "value": "4",
              "required": true
            },
            {
              "label": "5",
              "value": "5",
              "required": true
            },
            {
              "label": "6",
              "value": "6",
              "required": true
            },
            {
              "label": "7",
              "value": "7",
              "required": true
            }
          ],
          "rows": [
            "Comprehension",
            "Expression"
          ]
        }
      ]
    },
    {
      "title": "Social Cognition",
      "fields": [
        {
          "type": "scale-table",
          "name": "social",
          "columns": [
            {
              "label": "1",
              "value": "1",
              "required": true
            },
            {
              "label": "2",
              "value": "2",
              "required": true
            },
            {
              "label": "3",
              "value": "3",
              "required": true
            },
            {
              "label": "4",
              "value": "4",
              "required": true
            },
            {
              "label": "5",
              "value": "5",
              "required": true
            },
            {
              "label": "6",
              "value": "6",
              "required": true
            },
            {
              "label": "7",
              "value": "7",
              "required": true
            }
          ],
          "rows": [
            "Social Interaction",
            "Problem Solving",
            "Memory"
          ]
        }
      ]
    },
    {
      "title": "Scores",
      "fields": [
        {
          "type": "score-box",
          "name": "motor_score",
          "label": "Motor Subtotal"
        },
        {
          "type": "score-box",
          "name": "cognitive_score",
          "label": "Cognitive Subtotal"
        },
        {
          "type": "score-box",
          "name": "total_score",
          "label": "Total FIM Score"
        }
      ]
    }
  ]
}