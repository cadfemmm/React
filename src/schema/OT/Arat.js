const SCHEMA = {
  "title": "Action Research Arm Test",
  "sections": [
    {
      "title": "",
      "fields": [
        {
          "type": "radio",
          "name": "hand_tested",
          "label": "Dominant Hand",
          "options": [
            {
              "label": "Right",
              "value": "R"
            },
            {
              "label": "Left",
              "value": "L"
            }
          ]
        },
        {
          "type": "radio",
          "name": "affected_tested",
          "label": "Affected Hand",
          "options": [
            {
              "label": "Right",
              "value": "R"
            },
            {
              "label": "Left",
              "value": "L"
            }
          ]
        }
      ]
    },
    {
      "title": "Grasp",
      "fields": [
        {
          "type": "scale-table",
          "name": "grasp",
          "columns": [
            {
              "label": "0",
              "value": "0",
              "required": true
            },
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
            }
          ],
          "rows": [
            "Block (wood) 10 cm",
            "Block (wood) 2.5 cm",
            "Block (wood) 5 cm",
            "Block (wood) 7.5 cm",
            "Cricket ball",
            "Sharpening stone"
          ]
        },
        {
          "type": "score-box",
          "name": "grasp_score",
          "label": "Grasp Score"
        }
      ]
    },
    {
      "title": "Grip",
      "fields": [
        {
          "type": "scale-table",
          "name": "grip",
          "columns": [
            {
              "label": "0",
              "value": "0",
              "required": true
            },
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
            }
          ],
          "rows": [
            "Pour water",
            "Transfer 2.25 cm tube",
            "Transfer 1 cm tube",
            "Place washer"
          ]
        },
        {
          "type": "score-box",
          "name": "grip_score",
          "label": "Grip Score"
        }
      ]
    },
    {
      "title": "Pinch",
      "fields": [
        {
          "type": "scale-table",
          "name": "pinch",
          "columns": [
            {
              "label": "0",
              "value": "0",
              "required": true
            },
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
            }
          ],
          "rows": [
            "Ball bearing (thumb & third finger)",
            "Marble (thumb & first finger)",
            "Ball bearing (thumb & second finger)",
            "Ball bearing (thumb & first finger)",
            "Marble (thumb & third finger)",
            "Marble (thumb & second finger)"
          ]
        },
        {
          "type": "score-box",
          "name": "pinch_score",
          "label": "Pinch Score"
        }
      ]
    },
    {
      "title": "Gross Movement",
      "fields": [
        {
          "type": "scale-table",
          "name": "gross",
          "columns": [
            {
              "label": "0",
              "value": "0",
              "required": true
            },
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
            }
          ],
          "rows": [
            "Hand behind head",
            "Hand on top of head",
            "Hand to mouth"
          ]
        },
        {
          "type": "score-box",
          "name": "gross_score",
          "label": "Gross Movement Score"
        }
      ]
    },
    {
      "title": "Final Score",
      "fields": [
        {
          "type": "score-box",
          "name": "total_score",
          "label": "Total Score"
        },
        {
          "type": "score-box",
          "name": "interpretation",
          "label": "Interpretation"
        }
      ]
    }
  ]
}