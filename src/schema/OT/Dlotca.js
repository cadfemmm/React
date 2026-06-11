const SCHEMA = {
  "title": "DLOTCA – Full Cognitive Assessment",
  "sections": [
    {
      "title": "ORIENTATION",
      "fields": [
        {
          "type": "grid-header",
          "label": "",
          "template": "220px repeat(4, 80px) 100px",
          "cols": [
            "A",
            "B",
            "C",
            "D",
            "       Total / by 4"
          ]
        },
        {
          "type": "grid-row",
          "name": "orientation_place",
          "label": "1. Orientation for place",
          "cols": [
            {
              "type": "single-select",
              "options": [
                0,
                1,
                2
              ]
            },
            {
              "type": "single-select",
              "options": [
                0,
                1,
                2
              ]
            },
            {
              "type": "single-select",
              "options": [
                0,
                1,
                2
              ]
            },
            {
              "type": "single-select",
              "options": [
                0,
                1,
                2
              ]
            },
            {
              "type": "static",
              "name": "orientation_place_total"
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "orientation_time",
          "label": "2. Orientation for time",
          "cols": [
            {
              "type": "single-select",
              "options": [
                0,
                1,
                2
              ]
            },
            {
              "type": "single-select",
              "options": [
                0,
                1,
                2
              ]
            },
            {
              "type": "single-select",
              "options": [
                0,
                1,
                2
              ]
            },
            {
              "type": "single-select",
              "options": [
                0,
                1,
                2
              ]
            },
            {
              "type": "static",
              "name": "orientation_time_total"
            }
          ]
        },
        {
          "type": "score-box",
          "name": "orientation_domain_score",
          "label": "Domain score total divided by 2"
        }
      ]
    },
    {
      "title": "AWARENESS",
      "fields": [
        {
          "type": "radio",
          "name": "awareness_reason",
          "label": "3. Awareness of reason for hospitalization",
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
            }
          ]
        },
        {
          "type": "radio",
          "name": "awareness_before",
          "label": "4a. Awareness of cognitive disabilities before testing",
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
            }
          ]
        },
        {
          "type": "radio",
          "name": "awareness_after",
          "label": "4b. Awareness of cognitive disabilities after testing",
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
            }
          ]
        },
        {
          "type": "info-text",
          "text": "Note: No domain is calculated; compare 4b to 4a to evaluate a change in online awareness."
        }
      ]
    },
    {
      "title": "VISUAL PERCEPTION",
      "fields": [
        {
          "type": "grid-header",
          "cols": [
            "Before Mediation (Static Score)",
            "After Mediation (Static Score)",
            "Mediation Score"
          ]
        },
        {
          "type": "grid-row",
          "name": "object_identification",
          "label": "5. Object Identification",
          "cols": [
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4
              ]
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4
              ]
            },
            {
              "type": "single-select",
              "options": [
                {
                  "label": "1 - General Intervention",
                  "value": 1
                },
                {
                  "label": "2 - General Feedback",
                  "value": 2
                },
                {
                  "label": "3 - Specific Specific",
                  "value": 3
                },
                {
                  "label": "4 - Structured Category",
                  "value": 4
                }
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "figure_ground",
          "label": "6. Figure-ground",
          "cols": [
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4
              ]
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4
              ]
            },
            {
              "type": "single-select",
              "options": [
                {
                  "label": "1 - General Intervention",
                  "value": 1
                },
                {
                  "label": "2 - General Feedback",
                  "value": 2
                },
                {
                  "label": "3 - Specific Specific",
                  "value": 3
                },
                {
                  "label": "4 - Structured Category",
                  "value": 4
                }
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "object_constancy",
          "label": "7. Object Constancy",
          "cols": [
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4
              ]
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4
              ]
            },
            {
              "type": "single-select",
              "options": [
                {
                  "label": "1 - General Intervention",
                  "value": 1
                },
                {
                  "label": "2 - General Feedback",
                  "value": 2
                },
                {
                  "label": "3 - Specific Specific",
                  "value": 3
                },
                {
                  "label": "4 - Structured Category",
                  "value": 4
                }
              ]
            }
          ]
        },
        {
          "type": "score-box",
          "name": "visual_domain_before",
          "label": "Domain score before mediation total divided by 3"
        },
        {
          "type": "score-box",
          "name": "visual_domain_after",
          "label": "After mediation divide by number of items mediated"
        }
      ]
    },
    {
      "title": "SPATIAL PERCEPTION",
      "fields": [
        {
          "type": "subheading",
          "label": "8. Directions on Client’s Body (questions a–d)"
        },
        {
          "type": "grid-header",
          "cols": [
            "Before Mediation",
            "After Mediation",
            "Mediation Score"
          ]
        },
        {
          "type": "grid-row",
          "name": "directions_body_a",
          "label": "a.",
          "cols": [
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                {
                  "label": "1 - General Intervention",
                  "value": 1
                },
                {
                  "label": "2 - General Feedback",
                  "value": 2
                },
                {
                  "label": "3 - Specific Feedback",
                  "value": 3
                },
                {
                  "label": "4 - Structured Category",
                  "value": 4
                }
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "directions_body_b",
          "label": "b.",
          "cols": [
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                {
                  "label": "1 - General Intervention",
                  "value": 1
                },
                {
                  "label": "2 - General Feedback",
                  "value": 2
                },
                {
                  "label": "3 - Specific Specific",
                  "value": 3
                },
                {
                  "label": "4 - Structured Category",
                  "value": 4
                }
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "directions_body_c",
          "label": "c.",
          "cols": [
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                {
                  "label": "1 - General Intervention",
                  "value": 1
                },
                {
                  "label": "2 - General Feedback",
                  "value": 2
                },
                {
                  "label": "3 - Specific Specific",
                  "value": 3
                },
                {
                  "label": "4 - Structured Category",
                  "value": 4
                }
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "directions_body_d",
          "label": "d.",
          "cols": [
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                {
                  "label": "1 - General Intervention",
                  "value": 1
                },
                {
                  "label": "2 - General Feedback",
                  "value": 2
                },
                {
                  "label": "3 - Specific Specific",
                  "value": 3
                },
                {
                  "label": "4 - Structured Category",
                  "value": 4
                }
              ]
            }
          ]
        },
        {
          "type": "score-box",
          "name": "directions_body_total",
          "label": "Total / by 4"
        },
        {
          "type": "score-box",
          "name": "directions_body_after_avg",
          "label": "Total / by No items"
        }
      ]
    },
    {
      "title": "PRAXIS",
      "fields": [
        {
          "type": "subheading",
          "label": "9. Spatial Relations between Client and Objects in Near Space (questions a–d)"
        },
        {
          "type": "grid-header",
          "cols": [
            "Before Mediation",
            "After Mediation",
            "Mediation Score"
          ]
        },
        {
          "type": "grid-row",
          "name": "directions_body_a",
          "label": "a.",
          "cols": [
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                "1 - General Intervention",
                "2 - General Feedback",
                "3 - Specific Feedback",
                "4 - Structured Category"
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "directions_body_b",
          "label": "b.",
          "cols": [
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                {
                  "label": "1 - General Intervention",
                  "value": 1
                },
                {
                  "label": "2 - General Feedback",
                  "value": 2
                },
                {
                  "label": "3 - Specific Specific",
                  "value": 3
                },
                {
                  "label": "4 - Structured Category",
                  "value": 4
                }
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "directions_body_c",
          "label": "c.",
          "cols": [
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                {
                  "label": "1 - General Intervention",
                  "value": 1
                },
                {
                  "label": "2 - General Feedback",
                  "value": 2
                },
                {
                  "label": "3 - Specific Specific",
                  "value": 3
                },
                {
                  "label": "4 - Structured Category",
                  "value": 4
                }
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "directions_body_d",
          "label": "d.",
          "cols": [
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                {
                  "label": "1 - General Intervention",
                  "value": 1
                },
                {
                  "label": "2 - General Feedback",
                  "value": 2
                },
                {
                  "label": "3 - Specific Specific",
                  "value": 3
                },
                {
                  "label": "4 - Structured Category",
                  "value": 4
                }
              ]
            }
          ]
        },
        {
          "type": "score-box",
          "name": "directions_body_total",
          "label": "Total / by 4"
        },
        {
          "type": "score-box",
          "name": "directions_body_after_avg",
          "label": "Total / by No items"
        }
      ]
    },
    {
      "title": "Spatial Relations on a Picture (questions a–d)",
      "fields": [
        {
          "type": "subheading",
          "label": "10. Spatial Relations on a Picture (questions a–d)"
        },
        {
          "type": "grid-header",
          "cols": [
            "Before Mediation",
            "After Mediation",
            "Mediation Score"
          ]
        },
        {
          "type": "grid-row",
          "name": "spatial_picture_a",
          "label": "a.",
          "cols": [
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                {
                  "label": "1 - General Intervention",
                  "value": 1
                },
                {
                  "label": "2 - General Feedback",
                  "value": 2
                },
                {
                  "label": "3 - Specific Specific",
                  "value": 3
                },
                {
                  "label": "4 - Structured Category",
                  "value": 4
                }
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "spatial_picture_b",
          "label": "b.",
          "cols": [
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                {
                  "label": "1 - General Intervention",
                  "value": 1
                },
                {
                  "label": "2 - General Feedback",
                  "value": 2
                },
                {
                  "label": "3 - Specific Specific",
                  "value": 3
                },
                {
                  "label": "4 - Structured Category",
                  "value": 4
                }
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "spatial_picture_c",
          "label": "c.",
          "cols": [
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                {
                  "label": "1 - General Intervention",
                  "value": 1
                },
                {
                  "label": "2 - General Feedback",
                  "value": 2
                },
                {
                  "label": "3 - Specific Specific",
                  "value": 3
                },
                {
                  "label": "4 - Structured Category",
                  "value": 4
                }
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "spatial_picture_d",
          "label": "d.",
          "cols": [
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                {
                  "label": "1 - General Intervention",
                  "value": 1
                },
                {
                  "label": "2 - General Feedback",
                  "value": 2
                },
                {
                  "label": "3 - Specific Specific",
                  "value": 3
                },
                {
                  "label": "4 - Structured Category",
                  "value": 4
                }
              ]
            }
          ]
        },
        {
          "type": "score-box",
          "name": "spatial_picture_total_before",
          "label": "Total / by 4"
        },
        {
          "type": "score-box",
          "name": "spatial_picture_total_after",
          "label": "Total / by No items"
        },
        {
          "type": "score-box",
          "name": "spatial_picture_domain_before",
          "label": "Domain score before mediation total divided by 3"
        },
        {
          "type": "score-box",
          "name": "spatial_picture_domain_after",
          "label": "After mediation divide by number of items mediated"
        },
        {
          "type": "textarea",
          "name": "spatial_picture_comments",
          "label": "Comments"
        }
      ]
    },
    {
      "title": "VISUOMOTOR CONSTRUCTION",
      "fields": [
        {
          "type": "grid-header",
          "cols": [
            "Before (1–5)",
            "After (1–5)",
            "T*",
            "Mediation Score"
          ]
        },
        {
          "type": "grid-row",
          "name": "copy_geometric",
          "label": "14. Copy Geometric Forms",
          "cols": [
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "two_dimensional_model",
          "label": "15. Two-Dimensional Model",
          "cols": [
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "pegboard",
          "label": "16. Pegboard Construction",
          "cols": [
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "colored_block",
          "label": "17. Colored Block Design",
          "cols": [
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "plain_block",
          "label": "18. Plain Block Design",
          "cols": [
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "puzzle",
          "label": "19. Puzzle",
          "cols": [
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "clock_drawing",
          "label": "20. Clock Drawing",
          "cols": [
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          "type": "score-box",
          "name": "spatial_picture_domain_before",
          "label": "Domain score before mediation total divided by 7"
        },
        {
          "type": "score-box",
          "name": "spatial_picture_domain_after",
          "label": "After mediation divide by number of items mediated"
        },
        {
          "type": "textarea",
          "name": "spatial_picture_comments",
          "label": "Comments"
        },
        {
          "type": "subheading",
          "label": "* T = Time"
        }
      ]
    },
    {
      "title": "THINKING OPERATIONS",
      "fields": [
        {
          "type": "grid-header",
          "cols": [
            "Before (1–5)",
            "After (1–5)",
            "T*",
            "Mediation Score"
          ]
        },
        {
          "type": "grid-row",
          "name": "categorization",
          "label": "21. Categorization",
          "cols": [
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "roc_unstructured",
          "label": "22. ROC-Unstructured",
          "cols": [
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "pictorial_sequence_a",
          "label": "23. Pictorial Sequence A",
          "cols": [
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "pictorial_sequence_b",
          "label": "24. Pictorial Sequence B",
          "cols": [
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "geometric_sequence_a",
          "label": "25. Geometric Sequences A",
          "cols": [
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "geometric_sequence_b",
          "label": "26. Geometric Sequences B",
          "cols": [
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "roc_structured",
          "label": "28. ROC-Structured",
          "cols": [
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          "type": "score-box",
          "name": "thinking_domain_before",
          "label": "Domain score before mediation total divided by 7 (including ROC-Structured)"
        },
        {
          "type": "score-box",
          "name": "thinking_domain_after",
          "label": "After mediation divide by number of items mediated"
        },
        {
          "type": "subheading",
          "label": "27. Verbal Mathematical Questions (questions a–d)"
        },
        {
          "type": "grid-header",
          "cols": [
            "Before (0–1)",
            "After (0–1)",
            "Mediation Score"
          ]
        },
        {
          "type": "grid-row",
          "name": "verbal_math_a",
          "label": "a.",
          "cols": [
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "verbal_math_b",
          "label": "b.",
          "cols": [
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "verbal_math_c",
          "label": "c.",
          "cols": [
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "verbal_math_d",
          "label": "d.",
          "cols": [
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                0,
                1
              ]
            },
            {
              "type": "single-select",
              "options": [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          "type": "score-box",
          "name": "verbal_math_total_before",
          "label": "Total / by 4"
        },
        {
          "type": "score-box",
          "name": "verbal_math_total_after",
          "label": "Total / by No items"
        }
      ]
    }
  ]
}