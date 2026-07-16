const SCHEMA = {
  "title": "Neck Disability Index (NDI)",
  "sections": [
    {
      "title": "NDI",
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
          "name": "ndi_pain_intensity",
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
          "name": "ndi_personal_care",
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
          "name": "ndi_lifting",
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
          "name": "ndi_reading",
          "label": "Reading",
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
          "name": "ndi_headache",
          "label": "Headache",
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
          "name": "ndi_concentration",
          "label": "Concentration",
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
          "name": "ndi_work",
          "label": "Work",
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
          "name": "ndi_driving",
          "label": "Driving",
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
          "name": "ndi_sleeping",
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
          "name": "ndi_recreation",
          "label": "Recreation",
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
          "name": "ndi_total",
          "label": "NDI Total"
        },
        {
          "type": "score-box",
          "name": "ndi_percentage",
          "label": "NDI Percentage"
        },
        {
          "type": "score-box",
          "name": "ndi_interpretation",
          "label": "Interpretation"
        },
        {
          "type": "info-text",
          "text": [
            "Interpretation",
            "",
            "0–4% : No disability",
            "5–14% : Mild disability",
            "15–24% : Moderate disability",
            "25–34% : Severe disability",
            ">35% : Complete disability"
          ]
        }
      ]
    }
  ]
}