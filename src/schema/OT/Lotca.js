const SCHEMA = {
  "title": "Loewenstein OT Cognitive Assessment (LOTCA)",
  "sections": [
    {
      "title": "ORIENTATION",
      "fields": [
        {
          "type": "scale-slider",
          "name": "orientation_place",
          "label": "1. Orientation for Place (OP)",
          "min": 1,
          "max": 8,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 3,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 4,
              "max": 5,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 6,
              "max": 8,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "orientation_time",
          "label": "2. Orientation for Time (OT)",
          "min": 1,
          "max": 8,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 3,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 4,
              "max": 5,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 6,
              "max": 8,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        }
      ]
    },
    {
      "title": "VISUAL PERCEPTION",
      "fields": [
        {
          "type": "scale-slider",
          "name": "object_identification",
          "label": "3. Object Identification (OI)",
          "min": 1,
          "max": 4,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 4,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "shape_identification",
          "label": "4. Shape Identification (SI)",
          "min": 1,
          "max": 4,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 4,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "overlapping_figures",
          "label": "5. Overlapping Figures (OF)",
          "min": 1,
          "max": 4,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 4,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "object_constancy",
          "label": "6. Object Constancy (OC)",
          "min": 1,
          "max": 4,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 4,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        }
      ]
    },
    {
      "title": "SPATIAL PERCEPTION",
      "fields": [
        {
          "type": "scale-slider",
          "name": "directions_body",
          "label": "7. Directions on Own Body (SP1)",
          "min": 1,
          "max": 4,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 4,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "spatial_relations",
          "label": "8. Spatial Relations (SP2)",
          "min": 1,
          "max": 4,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 4,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "spatial_picture",
          "label": "9. Spatial Relations on Picture (SP3)",
          "min": 1,
          "max": 4,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 4,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        }
      ]
    },
    {
      "title": "MOTOR PRAXIS",
      "fields": [
        {
          "type": "scale-slider",
          "name": "motor_imitation",
          "label": "10. Motor Imitation (P1)",
          "min": 1,
          "max": 4,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 4,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "utilization_objects",
          "label": "11. Utilization of Objects (P2)",
          "min": 1,
          "max": 4,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 4,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "symbolic_actions",
          "label": "12. Symbolic Actions (P3)",
          "min": 1,
          "max": 4,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 4,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        }
      ]
    },
    {
      "title": "VISUOMOTOR ORGANIZATION",
      "fields": [
        {
          "type": "scale-slider",
          "name": "copy_geometric",
          "label": "13. Copying Geometric Forms (GF)",
          "min": 1,
          "max": 4,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 4,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "two_dim_model",
          "label": "14. Two-Dimensional Model (TM)",
          "min": 1,
          "max": 4,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 4,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "pegboard",
          "label": "15. Pegboard Construction (PC)",
          "min": 1,
          "max": 4,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 4,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "colored_block",
          "label": "16. Colored Block Design (CB)",
          "min": 1,
          "max": 4,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 4,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "plain_block",
          "label": "17. Plain Block Design (PB)",
          "min": 1,
          "max": 4,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 4,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "puzzle_reproduction",
          "label": "18. Reproduction of a Puzzle (RP)",
          "min": 1,
          "max": 4,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 4,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "drawing_clock",
          "label": "19. Drawing a Clock (DC)",
          "min": 1,
          "max": 4,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 4,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        },
        {
          "type": "input",
          "name": "visuomotor_time",
          "label": "Time (seconds)"
        }
      ]
    },
    {
      "title": "THINKING OPERATIONS",
      "fields": [
        {
          "type": "scale-slider",
          "name": "categorization",
          "label": "20. Categorization (CA)",
          "min": 1,
          "max": 5,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 5,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "roc_unstructured",
          "label": "21. ROC Unstructured (RU)",
          "min": 1,
          "max": 5,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 5,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "roc_structured",
          "label": "22. ROC Structured (RS)",
          "min": 1,
          "max": 5,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 5,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "pictorial_sequence_a",
          "label": "23. Pictorial Sequence A (PS1)",
          "min": 1,
          "max": 4,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 4,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "pictorial_sequence_b",
          "label": "24. Pictorial Sequence B (PS2)",
          "min": 1,
          "max": 4,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 4,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "geometric_sequence",
          "label": "25. Geometric Sequence (GS)",
          "min": 1,
          "max": 4,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 4,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "logic_questions",
          "label": "26. Logic Questions (LQ)",
          "min": 1,
          "max": 4,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 4,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        }
      ]
    },
    {
      "title": "ATTENTION AND CONCENTRATION",
      "fields": [
        {
          "type": "scale-slider",
          "name": "attention_concentration",
          "label": "27. Attention and Concentration",
          "min": 1,
          "max": 4,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "min": 1,
              "max": 2,
              "color": "#dc2626",
              "label": "Low"
            },
            {
              "min": 3,
              "max": 3,
              "color": "#f59e0b",
              "label": "Moderate"
            },
            {
              "min": 4,
              "max": 4,
              "color": "#16a34a",
              "label": "High"
            }
          ]
        },
        {
          "type": "radio",
          "name": "assessment_sessions",
          "label": "Assessment was performed in:",
          "options": [
            {
              "label": "One session",
              "value": "one"
            },
            {
              "label": "Two sessions or more",
              "value": "two_or_more"
            }
          ]
        }
      ]
    }
  ]
}