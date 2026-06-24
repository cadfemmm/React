const SCHEMA = {
  "title": "Urbanfarming Integrated Functional Training",
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
      "name": "manual_labor",
      "label": "Manual Labor",
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
      "name": "handling_materials",
      "label": "Handling Materials",
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
      "name": "building_structures",
      "label": "Building Structures",
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
      "name": "ergonomic_positions",
      "label": "Ergonomic Positions",
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
      "name": "planning_decision_making",
      "label": "Planning & Decision-Making",
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
      "name": "system_management",
      "label": "System Management",
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
      "name": "problem_solving",
      "label": "Problem-Solving",
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
      "name": "technological_literacy",
      "label": "Technological Literacy",
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
      "name": "visual",
      "label": "Visual",
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
      "name": "tactile_touch",
      "label": "Tactile (Touch)",
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
      "name": "olfactory_smell",
      "label": "Olfactory (Smell)",
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
      "name": "auditory_sound",
      "label": "Auditory (Sound)",
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
      "name": "gustatory_taste",
      "label": "Gustatory (Taste)",
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