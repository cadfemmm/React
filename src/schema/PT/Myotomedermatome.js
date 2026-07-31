const SCHEMA = {
  "title": "Neurological / Neurodynamic Assessment – Left vs Right",
  "sections": [
    {
      "title": null,
      "fields": [
        {
          "type": "checkbox-group",
          "name": "myotome_dermatome_regions_assessed",
          "label": "Select Region(s) Assessed",
          "options": [
            {
              "label": "Cervical",
              "value": "cervical"
            },
            {
              "label": "Upper Limb",
              "value": "upper_limb"
            },
            {
              "label": "Lumbar, Trunk",
              "value": "lumbar_trunk"
            },
            {
              "label": "Lower Limb",
              "value": "lower_limb"
            }
          ]
        },
        {
          "type": "accordion",
          "name": "dermatome_cervical_section",
          "label": "Dermatome Assessment (Cervical/Upper Limb Sensory)",
          "defaultOpen": false,
          "showIf": {
            "field": "myotome_dermatome_regions_assessed",
            "oneOf": [
              "cervical",
              "upper_limb"
            ]
          },
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "Left Result",
                "Right Result"
              ],
              "template": "minmax(300px, 1fr) 190px 190px"
            },
            {
              "type": "grid-row",
              "name": "c4_dermatome",
              "label": "C4 – Upper Shoulder / Clavicular Area",
              "template": "minmax(300px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "c4_dermatome_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "name": "c4_dermatome_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "c5_dermatome",
              "label": "C5 – Lateral Shoulder / Upper Arm",
              "template": "minmax(300px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "c5_dermatome_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "name": "c5_dermatome_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "c6_dermatome",
              "label": "C6 – Lateral Forearm / Thumb",
              "template": "minmax(300px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "c6_dermatome_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "name": "c6_dermatome_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "c7_dermatome",
              "label": "C7 – Middle Finger",
              "template": "minmax(300px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "c7_dermatome_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "name": "c7_dermatome_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "c8_dermatome",
              "label": "C8 – Medial Forearm / Little Finger",
              "template": "minmax(300px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "c8_dermatome_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "name": "c8_dermatome_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "t1_dermatome",
              "label": "T1 – Medial Upper Arm",
              "template": "minmax(300px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "t1_dermatome_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "name": "t1_dermatome_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                }
              ]
            },
            {
              "type": "textarea",
              "name": "dermatome_cervical_notes",
              "label": "Notes",
              "placeholder": "Free text for clinician observations (pain reproduction, tingling, functional limitation)"
            },
            {
              "type": "textarea",
              "name": "dermatome_cervical_interpretation",
              "label": "Interpretation",
              "placeholder": "Auto-generated, editable — e.g. Dermatome deficits / Normal"
            }
          ]
        },
        {
          "type": "accordion",
          "name": "dermatome_lumbar_section",
          "label": "Dermatome Assessment (Lumbar/Lower Limb Sensory)",
          "defaultOpen": false,
          "showIf": {
            "field": "myotome_dermatome_regions_assessed",
            "oneOf": [
              "lumbar_trunk",
              "lower_limb"
            ]
          },
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "Left Result",
                "Right Result"
              ],
              "template": "minmax(300px, 1fr) 190px 190px"
            },
            {
              "type": "grid-row",
              "name": "l1_dermatome",
              "label": "L1 – Groin / Upper Hip Region",
              "template": "minmax(300px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "l1_dermatome_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "name": "l1_dermatome_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "l2_dermatome",
              "label": "L2 – Anterior Proximal Thigh",
              "template": "minmax(300px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "l2_dermatome_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "name": "l2_dermatome_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "l3_dermatome",
              "label": "L3 – Anterior Mid-Thigh / Medial Knee",
              "template": "minmax(300px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "l3_dermatome_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "name": "l3_dermatome_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "l4_dermatome",
              "label": "L4 – Medial Leg / Medial Malleolus",
              "template": "minmax(300px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "l4_dermatome_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "name": "l4_dermatome_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "l5_dermatome",
              "label": "L5 – Lateral Leg / Dorsum of Foot / Great Toe",
              "template": "minmax(300px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "l5_dermatome_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "name": "l5_dermatome_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "s1_dermatome",
              "label": "S1 – Lateral Foot / Heel",
              "template": "minmax(300px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "s1_dermatome_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "name": "s1_dermatome_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "s2_dermatome",
              "label": "S2 – Posterior Thigh / Calf",
              "template": "minmax(300px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "s2_dermatome_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "name": "s2_dermatome_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced Sensation",
                      "value": "reduced_sensation"
                    },
                    {
                      "label": "Hypersensitive",
                      "value": "hypersensitive"
                    },
                    {
                      "label": "Paraesthesia",
                      "value": "paraesthesia"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                }
              ]
            },
            {
              "type": "textarea",
              "name": "dermatome_lumbar_notes",
              "label": "Notes",
              "placeholder": "Free text for clinician observations (pain reproduction, tingling, functional limitation)"
            },
            {
              "type": "textarea",
              "name": "dermatome_lumbar_interpretation",
              "label": "Interpretation",
              "placeholder": "Auto-generated, editable — e.g. Dermatome deficits / Normal"
            }
          ]
        },
        {
          "type": "accordion",
          "name": "myotome_cervical_section",
          "label": "Myotome Assessment (Cervical/Upper Limb)",
          "defaultOpen": false,
          "showIf": {
            "field": "myotome_dermatome_regions_assessed",
            "oneOf": [
              "cervical",
              "upper_limb"
            ]
          },
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "Key Movement",
                "Left Result",
                "Right Result"
              ],
              "template": "80px minmax(220px, 1fr) 190px 190px"
            },
            {
              "type": "grid-row",
              "name": "c4_myotome",
              "label": "C4",
              "template": "80px minmax(220px, 1fr) 190px 190px",
              "cols": [
                {
                  "type": "static",
                  "text": "Shoulder Elevation"
                },
                {
                  "name": "c4_myotome_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (5/5)",
                      "value": "normal_5"
                    },
                    {
                      "label": "Mild Weakness (4/5)",
                      "value": "mild_4"
                    },
                    {
                      "label": "Moderate Weakness (3/5)",
                      "value": "moderate_3"
                    },
                    {
                      "label": "Severe Weakness (2/5)",
                      "value": "severe_2"
                    },
                    {
                      "label": "Trace (1/5)",
                      "value": "trace_1"
                    },
                    {
                      "label": "No Contraction (0/5)",
                      "value": "none_0"
                    }
                  ]
                },
                {
                  "name": "c4_myotome_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (5/5)",
                      "value": "normal_5"
                    },
                    {
                      "label": "Mild Weakness (4/5)",
                      "value": "mild_4"
                    },
                    {
                      "label": "Moderate Weakness (3/5)",
                      "value": "moderate_3"
                    },
                    {
                      "label": "Severe Weakness (2/5)",
                      "value": "severe_2"
                    },
                    {
                      "label": "Trace (1/5)",
                      "value": "trace_1"
                    },
                    {
                      "label": "No Contraction (0/5)",
                      "value": "none_0"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "c5_myotome",
              "label": "C5",
              "template": "80px minmax(220px, 1fr) 190px 190px",
              "cols": [
                {
                  "type": "static",
                  "text": "Shoulder Abduction"
                },
                {
                  "name": "c5_myotome_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (5/5)",
                      "value": "normal_5"
                    },
                    {
                      "label": "Mild Weakness (4/5)",
                      "value": "mild_4"
                    },
                    {
                      "label": "Moderate Weakness (3/5)",
                      "value": "moderate_3"
                    },
                    {
                      "label": "Severe Weakness (2/5)",
                      "value": "severe_2"
                    },
                    {
                      "label": "Trace (1/5)",
                      "value": "trace_1"
                    },
                    {
                      "label": "No Contraction (0/5)",
                      "value": "none_0"
                    }
                  ]
                },
                {
                  "name": "c5_myotome_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (5/5)",
                      "value": "normal_5"
                    },
                    {
                      "label": "Mild Weakness (4/5)",
                      "value": "mild_4"
                    },
                    {
                      "label": "Moderate Weakness (3/5)",
                      "value": "moderate_3"
                    },
                    {
                      "label": "Severe Weakness (2/5)",
                      "value": "severe_2"
                    },
                    {
                      "label": "Trace (1/5)",
                      "value": "trace_1"
                    },
                    {
                      "label": "No Contraction (0/5)",
                      "value": "none_0"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "c6_myotome",
              "label": "C6",
              "template": "80px minmax(220px, 1fr) 190px 190px",
              "cols": [
                {
                  "type": "static",
                  "text": "Elbow Flexion / Wrist Extension"
                },
                {
                  "name": "c6_myotome_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (5/5)",
                      "value": "normal_5"
                    },
                    {
                      "label": "Mild Weakness (4/5)",
                      "value": "mild_4"
                    },
                    {
                      "label": "Moderate Weakness (3/5)",
                      "value": "moderate_3"
                    },
                    {
                      "label": "Severe Weakness (2/5)",
                      "value": "severe_2"
                    },
                    {
                      "label": "Trace (1/5)",
                      "value": "trace_1"
                    },
                    {
                      "label": "No Contraction (0/5)",
                      "value": "none_0"
                    }
                  ]
                },
                {
                  "name": "c6_myotome_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (5/5)",
                      "value": "normal_5"
                    },
                    {
                      "label": "Mild Weakness (4/5)",
                      "value": "mild_4"
                    },
                    {
                      "label": "Moderate Weakness (3/5)",
                      "value": "moderate_3"
                    },
                    {
                      "label": "Severe Weakness (2/5)",
                      "value": "severe_2"
                    },
                    {
                      "label": "Trace (1/5)",
                      "value": "trace_1"
                    },
                    {
                      "label": "No Contraction (0/5)",
                      "value": "none_0"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "c7_myotome",
              "label": "C7",
              "template": "80px minmax(220px, 1fr) 190px 190px",
              "cols": [
                {
                  "type": "static",
                  "text": "Elbow Extension / Wrist Flexion"
                },
                {
                  "name": "c7_myotome_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (5/5)",
                      "value": "normal_5"
                    },
                    {
                      "label": "Mild Weakness (4/5)",
                      "value": "mild_4"
                    },
                    {
                      "label": "Moderate Weakness (3/5)",
                      "value": "moderate_3"
                    },
                    {
                      "label": "Severe Weakness (2/5)",
                      "value": "severe_2"
                    },
                    {
                      "label": "Trace (1/5)",
                      "value": "trace_1"
                    },
                    {
                      "label": "No Contraction (0/5)",
                      "value": "none_0"
                    }
                  ]
                },
                {
                  "name": "c7_myotome_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (5/5)",
                      "value": "normal_5"
                    },
                    {
                      "label": "Mild Weakness (4/5)",
                      "value": "mild_4"
                    },
                    {
                      "label": "Moderate Weakness (3/5)",
                      "value": "moderate_3"
                    },
                    {
                      "label": "Severe Weakness (2/5)",
                      "value": "severe_2"
                    },
                    {
                      "label": "Trace (1/5)",
                      "value": "trace_1"
                    },
                    {
                      "label": "No Contraction (0/5)",
                      "value": "none_0"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "c8_myotome",
              "label": "C8",
              "template": "80px minmax(220px, 1fr) 190px 190px",
              "cols": [
                {
                  "type": "static",
                  "text": "Thumb Extension / Finger Flexion"
                },
                {
                  "name": "c8_myotome_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (5/5)",
                      "value": "normal_5"
                    },
                    {
                      "label": "Mild Weakness (4/5)",
                      "value": "mild_4"
                    },
                    {
                      "label": "Moderate Weakness (3/5)",
                      "value": "moderate_3"
                    },
                    {
                      "label": "Severe Weakness (2/5)",
                      "value": "severe_2"
                    },
                    {
                      "label": "Trace (1/5)",
                      "value": "trace_1"
                    },
                    {
                      "label": "No Contraction (0/5)",
                      "value": "none_0"
                    }
                  ]
                },
                {
                  "name": "c8_myotome_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (5/5)",
                      "value": "normal_5"
                    },
                    {
                      "label": "Mild Weakness (4/5)",
                      "value": "mild_4"
                    },
                    {
                      "label": "Moderate Weakness (3/5)",
                      "value": "moderate_3"
                    },
                    {
                      "label": "Severe Weakness (2/5)",
                      "value": "severe_2"
                    },
                    {
                      "label": "Trace (1/5)",
                      "value": "trace_1"
                    },
                    {
                      "label": "No Contraction (0/5)",
                      "value": "none_0"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "t1_myotome",
              "label": "T1",
              "template": "80px minmax(220px, 1fr) 190px 190px",
              "cols": [
                {
                  "type": "static",
                  "text": "Finger Abduction / Adduction"
                },
                {
                  "name": "t1_myotome_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (5/5)",
                      "value": "normal_5"
                    },
                    {
                      "label": "Mild Weakness (4/5)",
                      "value": "mild_4"
                    },
                    {
                      "label": "Moderate Weakness (3/5)",
                      "value": "moderate_3"
                    },
                    {
                      "label": "Severe Weakness (2/5)",
                      "value": "severe_2"
                    },
                    {
                      "label": "Trace (1/5)",
                      "value": "trace_1"
                    },
                    {
                      "label": "No Contraction (0/5)",
                      "value": "none_0"
                    }
                  ]
                },
                {
                  "name": "t1_myotome_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (5/5)",
                      "value": "normal_5"
                    },
                    {
                      "label": "Mild Weakness (4/5)",
                      "value": "mild_4"
                    },
                    {
                      "label": "Moderate Weakness (3/5)",
                      "value": "moderate_3"
                    },
                    {
                      "label": "Severe Weakness (2/5)",
                      "value": "severe_2"
                    },
                    {
                      "label": "Trace (1/5)",
                      "value": "trace_1"
                    },
                    {
                      "label": "No Contraction (0/5)",
                      "value": "none_0"
                    }
                  ]
                }
              ]
            },
            {
              "type": "textarea",
              "name": "myotome_cervical_notes",
              "label": "Notes",
              "placeholder": "Free text for clinician observations (pain reproduction, tingling, functional limitation)"
            },
            {
              "type": "textarea",
              "name": "myotome_cervical_interpretation",
              "label": "Interpretation",
              "placeholder": "Auto-generated, editable — e.g. Myotome weakness / Normal"
            }
          ]
        },
        {
          "type": "accordion",
          "name": "myotome_lumbar_section",
          "label": "Myotome Assessment (Lumbar/Lower Limb)",
          "defaultOpen": false,
          "showIf": {
            "field": "myotome_dermatome_regions_assessed",
            "oneOf": [
              "lumbar_trunk",
              "lower_limb"
            ]
          },
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "Key Movement",
                "Left Result",
                "Right Result"
              ],
              "template": "80px minmax(220px, 1fr) 190px 190px"
            },
            {
              "type": "grid-row",
              "name": "l2_myotome",
              "label": "L2",
              "template": "80px minmax(220px, 1fr) 190px 190px",
              "cols": [
                {
                  "type": "static",
                  "text": "Hip Flexion"
                },
                {
                  "name": "l2_myotome_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (5/5)",
                      "value": "normal_5"
                    },
                    {
                      "label": "Mild Weakness (4/5)",
                      "value": "mild_4"
                    },
                    {
                      "label": "Moderate Weakness (3/5)",
                      "value": "moderate_3"
                    },
                    {
                      "label": "Severe Weakness (2/5)",
                      "value": "severe_2"
                    },
                    {
                      "label": "Trace (1/5)",
                      "value": "trace_1"
                    },
                    {
                      "label": "No Contraction (0/5)",
                      "value": "none_0"
                    }
                  ]
                },
                {
                  "name": "l2_myotome_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (5/5)",
                      "value": "normal_5"
                    },
                    {
                      "label": "Mild Weakness (4/5)",
                      "value": "mild_4"
                    },
                    {
                      "label": "Moderate Weakness (3/5)",
                      "value": "moderate_3"
                    },
                    {
                      "label": "Severe Weakness (2/5)",
                      "value": "severe_2"
                    },
                    {
                      "label": "Trace (1/5)",
                      "value": "trace_1"
                    },
                    {
                      "label": "No Contraction (0/5)",
                      "value": "none_0"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "l3_myotome",
              "label": "L3",
              "template": "80px minmax(220px, 1fr) 190px 190px",
              "cols": [
                {
                  "type": "static",
                  "text": "Knee Extension"
                },
                {
                  "name": "l3_myotome_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (5/5)",
                      "value": "normal_5"
                    },
                    {
                      "label": "Mild Weakness (4/5)",
                      "value": "mild_4"
                    },
                    {
                      "label": "Moderate Weakness (3/5)",
                      "value": "moderate_3"
                    },
                    {
                      "label": "Severe Weakness (2/5)",
                      "value": "severe_2"
                    },
                    {
                      "label": "Trace (1/5)",
                      "value": "trace_1"
                    },
                    {
                      "label": "No Contraction (0/5)",
                      "value": "none_0"
                    }
                  ]
                },
                {
                  "name": "l3_myotome_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (5/5)",
                      "value": "normal_5"
                    },
                    {
                      "label": "Mild Weakness (4/5)",
                      "value": "mild_4"
                    },
                    {
                      "label": "Moderate Weakness (3/5)",
                      "value": "moderate_3"
                    },
                    {
                      "label": "Severe Weakness (2/5)",
                      "value": "severe_2"
                    },
                    {
                      "label": "Trace (1/5)",
                      "value": "trace_1"
                    },
                    {
                      "label": "No Contraction (0/5)",
                      "value": "none_0"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "l4_myotome",
              "label": "L4",
              "template": "80px minmax(220px, 1fr) 190px 190px",
              "cols": [
                {
                  "type": "static",
                  "text": "Ankle Dorsiflexion"
                },
                {
                  "name": "l4_myotome_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (5/5)",
                      "value": "normal_5"
                    },
                    {
                      "label": "Mild Weakness (4/5)",
                      "value": "mild_4"
                    },
                    {
                      "label": "Moderate Weakness (3/5)",
                      "value": "moderate_3"
                    },
                    {
                      "label": "Severe Weakness (2/5)",
                      "value": "severe_2"
                    },
                    {
                      "label": "Trace (1/5)",
                      "value": "trace_1"
                    },
                    {
                      "label": "No Contraction (0/5)",
                      "value": "none_0"
                    }
                  ]
                },
                {
                  "name": "l4_myotome_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (5/5)",
                      "value": "normal_5"
                    },
                    {
                      "label": "Mild Weakness (4/5)",
                      "value": "mild_4"
                    },
                    {
                      "label": "Moderate Weakness (3/5)",
                      "value": "moderate_3"
                    },
                    {
                      "label": "Severe Weakness (2/5)",
                      "value": "severe_2"
                    },
                    {
                      "label": "Trace (1/5)",
                      "value": "trace_1"
                    },
                    {
                      "label": "No Contraction (0/5)",
                      "value": "none_0"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "l5_myotome",
              "label": "L5",
              "template": "80px minmax(220px, 1fr) 190px 190px",
              "cols": [
                {
                  "type": "static",
                  "text": "Great Toe Extension"
                },
                {
                  "name": "l5_myotome_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (5/5)",
                      "value": "normal_5"
                    },
                    {
                      "label": "Mild Weakness (4/5)",
                      "value": "mild_4"
                    },
                    {
                      "label": "Moderate Weakness (3/5)",
                      "value": "moderate_3"
                    },
                    {
                      "label": "Severe Weakness (2/5)",
                      "value": "severe_2"
                    },
                    {
                      "label": "Trace (1/5)",
                      "value": "trace_1"
                    },
                    {
                      "label": "No Contraction (0/5)",
                      "value": "none_0"
                    }
                  ]
                },
                {
                  "name": "l5_myotome_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (5/5)",
                      "value": "normal_5"
                    },
                    {
                      "label": "Mild Weakness (4/5)",
                      "value": "mild_4"
                    },
                    {
                      "label": "Moderate Weakness (3/5)",
                      "value": "moderate_3"
                    },
                    {
                      "label": "Severe Weakness (2/5)",
                      "value": "severe_2"
                    },
                    {
                      "label": "Trace (1/5)",
                      "value": "trace_1"
                    },
                    {
                      "label": "No Contraction (0/5)",
                      "value": "none_0"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "s1_myotome",
              "label": "S1",
              "template": "80px minmax(220px, 1fr) 190px 190px",
              "cols": [
                {
                  "type": "static",
                  "text": "Ankle Plantarflexion"
                },
                {
                  "name": "s1_myotome_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (5/5)",
                      "value": "normal_5"
                    },
                    {
                      "label": "Mild Weakness (4/5)",
                      "value": "mild_4"
                    },
                    {
                      "label": "Moderate Weakness (3/5)",
                      "value": "moderate_3"
                    },
                    {
                      "label": "Severe Weakness (2/5)",
                      "value": "severe_2"
                    },
                    {
                      "label": "Trace (1/5)",
                      "value": "trace_1"
                    },
                    {
                      "label": "No Contraction (0/5)",
                      "value": "none_0"
                    }
                  ]
                },
                {
                  "name": "s1_myotome_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (5/5)",
                      "value": "normal_5"
                    },
                    {
                      "label": "Mild Weakness (4/5)",
                      "value": "mild_4"
                    },
                    {
                      "label": "Moderate Weakness (3/5)",
                      "value": "moderate_3"
                    },
                    {
                      "label": "Severe Weakness (2/5)",
                      "value": "severe_2"
                    },
                    {
                      "label": "Trace (1/5)",
                      "value": "trace_1"
                    },
                    {
                      "label": "No Contraction (0/5)",
                      "value": "none_0"
                    }
                  ]
                }
              ]
            },
            {
              "type": "textarea",
              "name": "myotome_lumbar_notes",
              "label": "Notes",
              "placeholder": "Free text for clinician observations (pain reproduction, tingling, functional limitation)"
            },
            {
              "type": "textarea",
              "name": "myotome_lumbar_interpretation",
              "label": "Interpretation",
              "placeholder": "Auto-generated, editable — e.g. Myotome weakness / Normal"
            }
          ]
        }
      ]
    }
  ]
}