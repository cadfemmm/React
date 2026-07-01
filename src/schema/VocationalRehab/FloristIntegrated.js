const SCHEMA = {
  "title": "Florist Integrated Functional Training",
  "titleInfo": {
    "title": "Difficulty Rating Scale",
    "content": [
      "1 – No Difficulty",
      "2 – Mild Difficulty",
      "3 – Moderate Difficulty",
      "4 – Severe Difficulty",
      "5 – Complete Difficulty"
    ]
  },
  "fields": [
    {
      "type": "radio-matrix",
      "name": "stamina_standing",
      "label": "Stamina & Standing",
      "options": [
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
      ],
      "matrixHeaderLabel": "Demand",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "fine_motor_skills",
      "label": "Fine Motor Skills",
      "options": [
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
      ],
      "matrixHeaderLabel": "Demand",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "hand_strength",
      "label": "Hand Strength",
      "options": [
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
      ],
      "matrixHeaderLabel": "Demand",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "repetitive_motion",
      "label": "Repetitive Motion",
      "options": [
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
      ],
      "matrixHeaderLabel": "Demand",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "lifting_reaching",
      "label": "Lifting / Reaching",
      "options": [
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
      ],
      "matrixHeaderLabel": "Demand",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "spatial_reasoning",
      "label": "Spatial Reasoning",
      "options": [
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
      ],
      "matrixHeaderLabel": "Demand",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "creativity_design",
      "label": "Creativity & Design",
      "options": [
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
      ],
      "matrixHeaderLabel": "Demand",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "sequence_management",
      "label": "Sequence Management",
      "options": [
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
      ],
      "matrixHeaderLabel": "Demand",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "attention_to_detail",
      "label": "Attention to Detail",
      "options": [
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
      ],
      "matrixHeaderLabel": "Demand",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "learning_nomenclature",
      "label": "Learning Nomenclature",
      "options": [
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
      ],
      "matrixHeaderLabel": "Demand",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "tactile_engagement",
      "label": "Tactile Engagement",
      "options": [
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
      ],
      "matrixHeaderLabel": "Demand",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "olfactory_processing",
      "label": "Olfactory Processing",
      "options": [
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
      ],
      "matrixHeaderLabel": "Demand",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "visual_perception",
      "label": "Visual Perception",
      "options": [
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
      ],
      "matrixHeaderLabel": "Demand",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "sound",
      "label": "Sound",
      "options": [
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
      ],
      "matrixHeaderLabel": "Demand",
      "showInfoInRow": false
    },
    {
      "type": "textarea",
      "name": "trainer_remarks",
      "label": "Trainer Remarks"
    },
    {
      "type": "text",
      "name": "trainer_name",
      "label": "Trainer Name",
      "value": "Auto detect from system",
      "readOnly": true
    },
    {
      "type": "date",
      "name": "date",
      "label": "Date"
    },
    {
      "type": "checkbox",
      "name": "generate_report",
      "label": "Generate Report"
    }
  ]
}