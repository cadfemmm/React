const SCHEMA = {
  "title": "Sewing Integrated Functional Training",
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
      "name": "carrying",
      "label": "Carrying",
      "description": "Transporting tools, equipment and material safely from one location to another.",
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
      "name": "lifting",
      "label": "Lifting",
      "description": "Lifting tools, equipment and material from lower storage area onto work table.",
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
      "name": "standing",
      "label": "Standing",
      "description": "Sustained standing while retrieving tools, equipment and material.",
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
      "name": "gripping",
      "label": "Gripping",
      "description": "Grasping tools, equipment and material from storage to work table.",
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
      "name": "walking",
      "label": "Walking",
      "description": "Walking from storage area to work table and around workshop area.",
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
      "name": "dexterity",
      "label": "Dexterity",
      "description": "Manipulate small items such as buttons, needles and pins.",
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
      "name": "reaching_forward",
      "label": "Reaching Forward",
      "description": "Drawing on table and taking material/tool from middle of table.",
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
      "name": "reach_down_bend",
      "label": "Reach Down / Bend",
      "description": "Bends trunk when measuring body length.",
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
      "name": "coordination",
      "label": "Coordination",
      "description": "Bilateral use of hand while sketching.",
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
      "name": "sitting",
      "label": "Sitting",
      "description": "Seated for prolonged time at working table.",
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
      "name": "kneeling_squatting",
      "label": "Kneeling / Squatting",
      "description": "Kneel or squat when measuring lower limb of client.",
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
      "name": "memory_short",
      "label": "Memory (Short-Term)",
      "description": "Remembering list of tools and equipment needed.",
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
      "name": "memory_long",
      "label": "Memory (Long-Term)",
      "description": "Recalling items to be taken.",
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
      "name": "planning_ease",
      "label": "Planning & Organization",
      "description": "Finding ways to ease material handling.",
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
      "name": "planning_priority",
      "label": "Planning & Organization (Priority)",
      "description": "Choosing tools based on usage and task sequence.",
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
      "name": "planning_workspace",
      "label": "Planning & Organization (Workspace)",
      "description": "Organizing workspace, tools and materials.",
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
      "name": "attention_sustained",
      "label": "Attention",
      "description": "Spending time to complete sketch before next step.",
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
      "name": "numerical_extrainch",
      "label": "Numerical / Calculation Ability",
      "description": "Adding necessary extra inch while measuring.",
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
      "name": "numerical_units",
      "label": "Numerical / Calculation Ability (Units)",
      "description": "Reading and interpreting units.",
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
      "name": "touch_tactile",
      "label": "Touch / Tactile",
      "description": "Recognizing thickness and texture of fabric.",
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
      "description": "Recognizing material, tool and equipment.",
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
      "name": "vestibular",
      "label": "Vestibular",
      "description": "Maintaining balance when moving or bending.",
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
      "name": "auditory",
      "label": "Auditory",
      "description": "Listening to verbal or sewing class instructions.",
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