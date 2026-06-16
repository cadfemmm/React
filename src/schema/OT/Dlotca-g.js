const SCHEMA = {
  "title": "DLOTCA-G – Full Cognitive Assessment",
  "sections": [
    {
      "title": "ORIENTATION",
      "fields": [
        {
          "type": "grid-header",
          "template": "240px repeat(4,80px) 120px",
          "cols": [
            "A",
            "B",
            "C",
            "D",
            "Total / 4"
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
              "type": "single-select",
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
              "type": "single-select",
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
              "type": "single-select",
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
              "type": "single-select",
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
              "type": "single-select",
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
              "type": "single-select",
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
          "text": "Note: No domain is calculated; compare 4b to 4a."
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
                }
              ]
            },
            {
              "type": "single-select",
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
                }
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
          "name": "figure_ground",
          "label": "6. Figure-ground",
          "cols": [
            {
              "type": "single-select",
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
                }
              ]
            },
            {
              "type": "single-select",
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
                }
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
          "name": "object_constancy",
          "label": "7. Object Constancy",
          "cols": [
            {
              "type": "single-select",
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
                }
              ]
            },
            {
              "type": "single-select",
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
                }
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
      "title": "8 .SPATIAL PERCEPTION – Directions on Client’s Body (a–d)",
      "fields": [
        {
          "type": "grid-header",
          "template": "240px 140px 140px 220px",
          "cols": [
            "Before",
            "After",
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
              "type": "single-select",
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
          "name": "directions_body_c",
          "label": "c.",
          "cols": [
            {
              "type": "single-select",
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
              "type": "single-select",
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
          "name": "directions_body_d",
          "label": "d.",
          "cols": [
            {
              "type": "single-select",
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
          "type": "score-box",
          "name": "directions_body_total",
          "label": "Total / 4"
        },
        {
          "type": "score-box",
          "name": "directions_body_after_avg",
          "label": "Total / No. items mediated"
        }
      ]
    },
    {
      "title": "9. Spatial Relations on the Examiner (questions a–d)",
      "fields": [
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
          "name": "examiner_spatial_a",
          "label": "a.",
          "cols": [
            {
              "type": "single-select",
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
              "type": "single-select",
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
          "name": "examiner_spatial_b",
          "label": "b.",
          "cols": [
            {
              "type": "single-select",
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
              "type": "single-select",
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
          "name": "examiner_spatial_c",
          "label": "c.",
          "cols": [
            {
              "type": "single-select",
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
          "name": "examiner_spatial_d",
          "label": "d.",
          "cols": [
            {
              "type": "single-select",
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
              "type": "single-select",
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
          "type": "score-box",
          "name": "examiner_spatial_total_before",
          "label": "Total / by 4"
        },
        {
          "type": "score-box",
          "name": "examiner_spatial_total_after",
          "label": "Total / by No items"
        }
      ]
    },
    {
      "title": "10. Spatial Relations in the Near Environment (questions a–d)",
      "fields": [
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
          "name": "environment_spatial_a",
          "label": "a.",
          "cols": [
            {
              "type": "single-select",
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
              "type": "single-select",
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
                },
                {
                  "label": "5 - Reduced Amount",
                  "value": 5
                }
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "environment_spatial_b",
          "label": "b.",
          "cols": [
            {
              "type": "single-select",
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
                },
                {
                  "label": "5 - Reduced Amount",
                  "value": 5
                }
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "environment_spatial_c",
          "label": "c.",
          "cols": [
            {
              "type": "single-select",
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
              "type": "single-select",
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
                },
                {
                  "label": "5 - Reduced Amount",
                  "value": 5
                }
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "environment_spatial_d",
          "label": "d.",
          "cols": [
            {
              "type": "single-select",
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
              "type": "single-select",
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
                },
                {
                  "label": "5 - Reduced Amount",
                  "value": 5
                }
              ]
            }
          ]
        },
        {
          "type": "score-box",
          "name": "environment_spatial_total_before",
          "label": "Total / by 4"
        },
        {
          "type": "score-box",
          "name": "environment_spatial_total_after",
          "label": "Total / by No items"
        },
        {
          "type": "score-box",
          "name": "environment_spatial_domain_before",
          "label": "Domain score before mediation total divided by 3"
        },
        {
          "type": "score-box",
          "name": "environment_spatial_domain_after",
          "label": "After mediation divide by number of items mediated"
        },
        {
          "type": "textarea",
          "name": "environment_spatial_comments",
          "label": "Comments"
        }
      ]
    },
    {
      "title": "11. Motor Imitation (questions a–d)",
      "fields": [
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
          "name": "motor_imitation_a",
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
          "name": "motor_imitation_b",
          "label": "b.",
          "cols": [
            {
              "type": "single-select",
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
              "type": "single-select",
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
          "name": "motor_imitation_c",
          "label": "c.",
          "cols": [
            {
              "type": "single-select",
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
              "type": "single-select",
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
          "name": "motor_imitation_d",
          "label": "d.",
          "cols": [
            {
              "type": "single-select",
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
              "type": "single-select",
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
          "type": "score-box",
          "name": "motor_imitation_total_before",
          "label": "Total / by 4"
        },
        {
          "type": "score-box",
          "name": "motor_imitation_total_after",
          "label": "Total / by No items"
        }
      ]
    },
    {
      "title": "12. Utilization of Objects (questions a–d)",
      "fields": [
        {
          "type": "grid-header",
          "template": "260px 120px 120px 260px",
          "cols": [
            "Before (0–1)",
            "After (0–1)",
            "Mediation Score"
          ]
        },
        {
          "type": "grid-row",
          "name": "utilization_objects_a",
          "label": "a.",
          "cols": [
            {
              "type": "single-select",
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
              "type": "single-select",
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
          "name": "utilization_objects_b",
          "label": "b.",
          "cols": [
            {
              "type": "single-select",
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
              "type": "single-select",
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
          "name": "utilization_objects_c",
          "label": "c.",
          "cols": [
            {
              "type": "single-select",
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
              "type": "single-select",
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
          "name": "utilization_objects_d",
          "label": "d.",
          "cols": [
            {
              "type": "single-select",
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
              "type": "single-select",
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
          "type": "score-box",
          "name": "utilization_objects_total_before",
          "label": "Total / by 4"
        },
        {
          "type": "score-box",
          "name": "utilization_objects_total_after",
          "label": "Total / by No items"
        }
      ]
    },
    {
      "title": "13. Symbolic Actions (questions a–d)",
      "fields": [
        {
          "type": "grid-header",
          "template": "260px 120px 120px 300px",
          "cols": [
            "Before (0–1)",
            "After (0–1)",
            "Mediation Score"
          ]
        },
        {
          "type": "grid-row",
          "name": "symbolic_actions_a",
          "label": "a.",
          "cols": [
            {
              "type": "single-select",
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
              "type": "single-select",
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
                },
                {
                  "label": "5 - Reduced Amount",
                  "value": 5
                }
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "symbolic_actions_b",
          "label": "b.",
          "cols": [
            {
              "type": "single-select",
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
              "type": "single-select",
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
                },
                {
                  "label": "5 - Reduced Amount",
                  "value": 5
                }
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "symbolic_actions_c",
          "label": "c.",
          "cols": [
            {
              "type": "single-select",
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
              "type": "single-select",
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
                },
                {
                  "label": "5 - Reduced Amount",
                  "value": 5
                }
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "symbolic_actions_d",
          "label": "d.",
          "cols": [
            {
              "type": "single-select",
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
              "type": "single-select",
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
                },
                {
                  "label": "5 - Reduced Amount",
                  "value": 5
                }
              ]
            }
          ]
        },
        {
          "type": "score-box",
          "name": "symbolic_actions_total_before",
          "label": "Total / by 4"
        },
        {
          "type": "score-box",
          "name": "symbolic_actions_total_after",
          "label": "Total / by No items"
        },
        {
          "type": "score-box",
          "name": "praxis_domain_before",
          "label": "Domain score before mediation total divided by 3"
        },
        {
          "type": "score-box",
          "name": "praxis_domain_after",
          "label": "After mediation divide by number of items mediated"
        },
        {
          "type": "textarea",
          "name": "praxis_comments",
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
              "type": "single-select",
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
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
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
              "type": "single-select",
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
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
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
              "type": "single-select",
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
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
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
              "type": "single-select",
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
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
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
              "type": "single-select",
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
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
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
              "type": "single-select",
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
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
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
              "type": "single-select",
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
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
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
              ]
            }
          ]
        },
        {
          "type": "score-box",
          "name": "visuomotor_domain_before",
          "label": "Domain score before mediation total divided by 7"
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
          "label": "CATEGORIZATION",
          "cols": [
            {
              "type": "single-select",
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
              ]
            },
            {
              "type": "single-select",
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
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
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
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "roc_unstructured",
          "label": "ROC UNSTRUCTURED",
          "cols": [
            {
              "type": "single-select",
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
              ]
            },
            {
              "type": "single-select",
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
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
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
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "pictorial_sequence_a",
          "label": "PICTORIAL SEQUENCE A",
          "cols": [
            {
              "type": "single-select",
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
              ]
            },
            {
              "type": "single-select",
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
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
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
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "pictorial_sequence_b",
          "label": "PICTORIAL SEQUENCE B",
          "cols": [
            {
              "type": "single-select",
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
              ]
            },
            {
              "type": "single-select",
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
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
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
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "geometric_sequence_a",
          "label": "GEOMETRIC SEQUENCE A",
          "cols": [
            {
              "type": "single-select",
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
              ]
            },
            {
              "type": "single-select",
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
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
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
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "geometric_sequence_b",
          "label": "GEOMETRIC SEQUENCE B",
          "cols": [
            {
              "type": "single-select",
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
              ]
            },
            {
              "type": "single-select",
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
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
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
              ]
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "roc_structured",
          "label": "ROC STRUCTURED",
          "cols": [
            {
              "type": "single-select",
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
              ]
            },
            {
              "type": "single-select",
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
              ]
            },
            {
              "type": "time-input"
            },
            {
              "type": "single-select",
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
              ]
            }
          ]
        },
        {
          "type": "score-box",
          "name": "thinking_domain_before",
          "label": "Domain score before mediation total divided by 7"
        }
      ]
    },
    {
      "title": "MEMORY",
      "fields": [
        {
          "type": "radio",
          "name": "famous_personality",
          "label": "22. Famous Personality",
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
            }
          ]
        },
        {
          "type": "radio",
          "name": "personal_possessions",
          "label": "23. Personal Possessions",
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
            }
          ]
        },
        {
          "type": "radio",
          "name": "everyday_objects",
          "label": "24. Everyday Objects",
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
            }
          ]
        },
        {
          "type": "textarea",
          "name": "memory_comments",
          "label": "Comments"
        }
      ]
    }
  ]
}