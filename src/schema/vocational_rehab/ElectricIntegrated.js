const SCHEMA = {
  "title": "Electric Integrated Functional Training",
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
      "name": "manual_dexterity",
      "label": "Manual Dexterity",
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
      "name": "physical_strength_agility",
      "label": "Physical Strength & Agility",
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
      "name": "hand_eye_coordination",
      "label": "Hand-Eye Coordination",
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
      "name": "technical_understanding",
      "label": "Technical Understanding",
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
      "name": "safety_adherence",
      "label": "Safety Adherence",
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
      "name": "problem_solving_logic",
      "label": "Problem-Solving & Logic",
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
      "name": "spatial_awareness",
      "label": "Spatial Awareness",
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
      "name": "visual_inspection",
      "label": "Visual Inspection",
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
      "name": "tactile_feedback",
      "label": "Tactile Feedback",
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
      "name": "auditory_monitoring",
      "label": "Auditory Monitoring",
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
      "name": "color_vision",
      "label": "Color Vision",
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
      "name": "heavy_work",
      "label": "Heavy Work",
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
      "name": "simulation_vs_practice",
      "label": "Simulation vs. Practice",
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
      "name": "time_pressure",
      "label": "Time Pressure",
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