const SCHEMA = {
  "title": "Oswestry Disability Index (ODI)",
  "sections": [
    {
      "title": "ODI",
      "enableScoreToggle": true,
      "actions": [
        {
          "type": "toggle-show-scores",
          "label": "Doctor View"
        }
      ],
      "fields": [
        {
          "type": "grid-header",
          "cols": [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5"
          ]
        },
        {
          "type": "radio-matrix",
          "name": "odi_pain_intensity",
          "label": "Pain Intensity",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            },
            {
              "label": "5",
              "value": 5
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "odi_personal_care",
          "label": "Personal Care",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            },
            {
              "label": "5",
              "value": 5
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "odi_lifting",
          "label": "Lifting",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            },
            {
              "label": "5",
              "value": 5
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "odi_walking",
          "label": "Walking",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            },
            {
              "label": "5",
              "value": 5
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "odi_sitting",
          "label": "Sitting",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            },
            {
              "label": "5",
              "value": 5
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "odi_standing",
          "label": "Standing",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            },
            {
              "label": "5",
              "value": 5
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "odi_sleeping",
          "label": "Sleeping",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            },
            {
              "label": "5",
              "value": 5
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "odi_social_life",
          "label": "Social Life",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            },
            {
              "label": "5",
              "value": 5
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "odi_travelling",
          "label": "Travelling",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            },
            {
              "label": "5",
              "value": 5
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "odi_degree_of_pain",
          "label": "Degree of Pain",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            },
            {
              "label": "5",
              "value": 5
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Auto Calculation"
        },
        {
          "type": "score-box",
          "name": "odi_total",
          "label": "ODI Total"
        },
        {
          "type": "score-box",
          "name": "odi_percentage",
          "label": "ODI Percentage"
        },
        {
          "type": "score-box",
          "name": "odi_interpretation",
          "label": "Interpretation"
        },
        {
          "type": "info-text",
          "text": [
            "Interpretation",
            "",
            "0–20% : Minimal disability",
            "21–40% : Moderate disability",
            "41–60% : Severe disability",
            "61–80% : Crippled",
            "81–100% : Bedbound / Exaggeration"
          ]
        }
      ]
    }
  ]
}