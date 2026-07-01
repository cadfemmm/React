const SCHEMA = {
  "title": "Barista Integrated Functional Training",
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
      "name": "reaching",
      "label": "Reaching",
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
      "name": "bend",
      "label": "Bend",
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
      "name": "manipulating",
      "label": "Manipulating",
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
      "name": "coordination_eyehand",
      "label": "Coordination (Eye-Hand)",
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
      "name": "coordination_bilateral",
      "label": "Coordination (Bilateral)",
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
      "name": "moves",
      "label": "Moves",
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
      "name": "transport",
      "label": "Transport",
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
      "name": "hlcf_judgment",
      "label": "Higher Level Cognitive Function (Judgment)",
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
      "name": "hlcf_conceptformation",
      "label": "Higher Level Cognitive Function (Concept Formation)",
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
      "name": "hlcf_cognitiveflexibility",
      "label": "Higher Level Cognitive Function (Cognitive Flexibility)",
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
      "name": "hlcf_praxis",
      "label": "Higher Level Cognitive Function (Praxis)",
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
      "label": "Attention (Sustained)",
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
      "name": "attention_selective",
      "label": "Attention (Selective)",
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
      "name": "perception_visual",
      "label": "Perception (Visual)",
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
      "name": "perception_tactile",
      "label": "Perception (Tactile)",
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
      "name": "thought",
      "label": "Thought",
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
      "name": "consciousness",
      "label": "Consciousness",
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
      "name": "visual_ingredients",
      "label": "Visual (Ingredients)",
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
      "name": "visual_monitoring",
      "label": "Visual (Monitoring)",
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
      "name": "vestibular_balance",
      "label": "Vestibular (Balance)",
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
      "name": "vestibular_posture",
      "label": "Vestibular (Posture)",
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
      "name": "proprioceptive_force",
      "label": "Proprioceptive (Force)",
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
      "name": "proprioceptive_navigation",
      "label": "Proprioceptive (Navigation)",
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
      "name": "tactile_temperature",
      "label": "Tactile (Temperature)",
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
      "name": "tactile_grasping",
      "label": "Tactile (Grasping)",
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
      "name": "pain",
      "label": "Pain",
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
      "name": "temperature_hot",
      "label": "Sensitivity to Temperature & Pressure",
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
      "name": "temperature_pressure",
      "label": "Sensitivity to Temperature & Pressure (Pressure)",
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
      "name": "taste",
      "label": "Taste",
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
      "name": "smell",
      "label": "Smell",
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
      "name": "auditory_equipment",
      "label": "Auditory (Equipment)",
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
      "name": "auditory_instructions",
      "label": "Auditory (Instructions)",
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