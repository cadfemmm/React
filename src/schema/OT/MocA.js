const SCHEMA = {
  "title": "Montreal Cognitive Assessment (MoCA)",
  "sections": [
    {
      "title": "Visuospatial/Executive",
      "fields": [
        {
          "type": "radio",
          "name": "executive_function",
          "label": "Executive Function",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            }
          ]
        },
        {
          "type": "radio",
          "name": "cube_copying",
          "label": "Cube Copying",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            }
          ]
        },
        {
          "type": "radio",
          "name": "clock_drawing",
          "label": "Clock Drawing",
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
            }
          ]
        }
      ]
    },
    {
      "title": "Naming",
      "fields": [
        {
          "type": "radio",
          "name": "naming",
          "label": "Naming",
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
            }
          ]
        }
      ]
    },
    {
      "title": "Attention",
      "fields": [
        {
          "type": "radio",
          "name": "number_repetition",
          "label": "Number Repetition",
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
            }
          ]
        },
        {
          "type": "radio",
          "name": "vigilance",
          "label": "Vigilance",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            }
          ]
        },
        {
          "type": "radio",
          "name": "serial_7_calculation",
          "label": "Serial 7 Calculation",
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
            }
          ]
        }
      ]
    },
    {
      "title": "Language",
      "fields": [
        {
          "type": "radio",
          "name": "sentence_repetition",
          "label": "Sentence Repetition",
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
            }
          ]
        },
        {
          "type": "radio",
          "name": "animal_naming",
          "label": "Animal Naming",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "title": "Abstraction",
      "fields": [
        {
          "type": "radio",
          "name": "abstraction",
          "label": "Abstraction",
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
            }
          ]
        }
      ]
    },
    {
      "title": "Delayed Recall",
      "fields": [
        {
          "type": "radio",
          "name": "delayed_recall",
          "label": "Delayed Recall",
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
              "value": "5"
            }
          ]
        },
        {
          "min": 0,
          "max": 15,
          "type": "input-number-range",
          "name": "mis_score",
          "label": "MIS Score"
        }
      ]
    },
    {
      "title": "Orientation",
      "fields": [
        {
          "type": "radio",
          "name": "orientation",
          "label": "Orientation",
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
              "value": "5"
            },
            {
              "label": "6",
              "value": "6"
            }
          ]
        }
      ]
    },
    {
      "title": "",
      "fields": [
        {
          "type": "score-box",
          "name": "total_moca_score",
          "label": "Total MoCA Score"
        },
        {
          "type": "radio",
          "name": "classification_score",
          "label": "Classification of Score",
          "options": [
            {
              "label": "Normal",
              "value": "Normal"
            },
            {
              "label": "Mild",
              "value": "Mild"
            },
            {
              "label": "Moderate",
              "value": "Moderate"
            },
            {
              "label": "Severe",
              "value": "Severe"
            }
          ]
        },
        {
          "type": "textarea",
          "name": "comments",
          "label": "Comments"
        },
        {
          "type": "file-upload-modal",
          "name": "additional-documents",
          "label": "Additional Appendixes / Documents"
        }
      ]
    }
  ]
}