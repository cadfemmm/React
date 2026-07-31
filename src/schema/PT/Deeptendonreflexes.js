const SCHEMA = {
  "title": "Deep Tendon Reflexes",
  "sections": [
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "dtr_upper_limb_section",
          "label": "Deep Tendon Reflexes (Upper Limb)",
          "defaultOpen": true,
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "Spinal Level",
                "Left",
                "Right"
              ],
              "template": "minmax(200px, 1fr) 130px 180px 180px"
            },
            {
              "type": "grid-row",
              "name": "biceps",
              "label": "Biceps",
              "template": "minmax(200px, 1fr) 130px 180px 180px",
              "cols": [
                {
                  "type": "static",
                  "text": "C5 – C6",
                  "textAlign": "center"
                },
                {
                  "name": "biceps_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (2+)",
                      "value": "normal_2plus"
                    },
                    {
                      "label": "Hyporeflexia (1+)",
                      "value": "hyporeflexia_1plus"
                    },
                    {
                      "label": "Areflexia (0)",
                      "value": "areflexia_0"
                    },
                    {
                      "label": "Hyperreflexia (3+)",
                      "value": "hyperreflexia_3plus"
                    },
                    {
                      "label": "Clonus (4+)",
                      "value": "clonus_4plus"
                    }
                  ]
                },
                {
                  "name": "biceps_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (2+)",
                      "value": "normal_2plus"
                    },
                    {
                      "label": "Hyporeflexia (1+)",
                      "value": "hyporeflexia_1plus"
                    },
                    {
                      "label": "Areflexia (0)",
                      "value": "areflexia_0"
                    },
                    {
                      "label": "Hyperreflexia (3+)",
                      "value": "hyperreflexia_3plus"
                    },
                    {
                      "label": "Clonus (4+)",
                      "value": "clonus_4plus"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "brachioradialis",
              "label": "Brachioradialis",
              "template": "minmax(200px, 1fr) 130px 180px 180px",
              "cols": [
                {
                  "type": "static",
                  "text": "C6",
                  "textAlign": "center"
                },
                {
                  "name": "brachioradialis_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (2+)",
                      "value": "normal_2plus"
                    },
                    {
                      "label": "Hyporeflexia (1+)",
                      "value": "hyporeflexia_1plus"
                    },
                    {
                      "label": "Areflexia (0)",
                      "value": "areflexia_0"
                    },
                    {
                      "label": "Hyperreflexia (3+)",
                      "value": "hyperreflexia_3plus"
                    },
                    {
                      "label": "Clonus (4+)",
                      "value": "clonus_4plus"
                    }
                  ]
                },
                {
                  "name": "brachioradialis_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (2+)",
                      "value": "normal_2plus"
                    },
                    {
                      "label": "Hyporeflexia (1+)",
                      "value": "hyporeflexia_1plus"
                    },
                    {
                      "label": "Areflexia (0)",
                      "value": "areflexia_0"
                    },
                    {
                      "label": "Hyperreflexia (3+)",
                      "value": "hyperreflexia_3plus"
                    },
                    {
                      "label": "Clonus (4+)",
                      "value": "clonus_4plus"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "triceps",
              "label": "Triceps",
              "template": "minmax(200px, 1fr) 130px 180px 180px",
              "cols": [
                {
                  "type": "static",
                  "text": "C7",
                  "textAlign": "center"
                },
                {
                  "name": "triceps_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (2+)",
                      "value": "normal_2plus"
                    },
                    {
                      "label": "Hyporeflexia (1+)",
                      "value": "hyporeflexia_1plus"
                    },
                    {
                      "label": "Areflexia (0)",
                      "value": "areflexia_0"
                    },
                    {
                      "label": "Hyperreflexia (3+)",
                      "value": "hyperreflexia_3plus"
                    },
                    {
                      "label": "Clonus (4+)",
                      "value": "clonus_4plus"
                    }
                  ]
                },
                {
                  "name": "triceps_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (2+)",
                      "value": "normal_2plus"
                    },
                    {
                      "label": "Hyporeflexia (1+)",
                      "value": "hyporeflexia_1plus"
                    },
                    {
                      "label": "Areflexia (0)",
                      "value": "areflexia_0"
                    },
                    {
                      "label": "Hyperreflexia (3+)",
                      "value": "hyperreflexia_3plus"
                    },
                    {
                      "label": "Clonus (4+)",
                      "value": "clonus_4plus"
                    }
                  ]
                }
              ]
            },
            {
              "type": "textarea",
              "name": "dtr_upper_limb_notes",
              "label": "Notes",
              "placeholder": "Free text for clinician observations"
            },
            {
              "type": "textarea",
              "name": "dtr_upper_limb_interpretation",
              "label": "Interpretation",
              "placeholder": "Auto-generated, editable — e.g. Reflex asymmetry / Normal"
            }
          ]
        },
        {
          "type": "accordion",
          "name": "dtr_lower_limb_section",
          "label": "Deep Tendon Reflexes (Lower Limb)",
          "defaultOpen": false,
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "Spinal Level",
                "Left",
                "Right"
              ],
              "template": "minmax(200px, 1fr) 130px 180px 180px"
            },
            {
              "type": "grid-row",
              "name": "patellar",
              "label": "Patellar Reflex",
              "template": "minmax(200px, 1fr) 130px 180px 180px",
              "cols": [
                {
                  "type": "static",
                  "text": "L4",
                  "textAlign": "center"
                },
                {
                  "name": "patellar_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (2+)",
                      "value": "normal_2plus"
                    },
                    {
                      "label": "Hyporeflexia (1+)",
                      "value": "hyporeflexia_1plus"
                    },
                    {
                      "label": "Areflexia (0)",
                      "value": "areflexia_0"
                    },
                    {
                      "label": "Hyperreflexia (3+)",
                      "value": "hyperreflexia_3plus"
                    },
                    {
                      "label": "Clonus (4+)",
                      "value": "clonus_4plus"
                    }
                  ]
                },
                {
                  "name": "patellar_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (2+)",
                      "value": "normal_2plus"
                    },
                    {
                      "label": "Hyporeflexia (1+)",
                      "value": "hyporeflexia_1plus"
                    },
                    {
                      "label": "Areflexia (0)",
                      "value": "areflexia_0"
                    },
                    {
                      "label": "Hyperreflexia (3+)",
                      "value": "hyperreflexia_3plus"
                    },
                    {
                      "label": "Clonus (4+)",
                      "value": "clonus_4plus"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "achilles",
              "label": "Achilles Reflex",
              "template": "minmax(200px, 1fr) 130px 180px 180px",
              "cols": [
                {
                  "type": "static",
                  "text": "S1",
                  "textAlign": "center"
                },
                {
                  "name": "achilles_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (2+)",
                      "value": "normal_2plus"
                    },
                    {
                      "label": "Hyporeflexia (1+)",
                      "value": "hyporeflexia_1plus"
                    },
                    {
                      "label": "Areflexia (0)",
                      "value": "areflexia_0"
                    },
                    {
                      "label": "Hyperreflexia (3+)",
                      "value": "hyperreflexia_3plus"
                    },
                    {
                      "label": "Clonus (4+)",
                      "value": "clonus_4plus"
                    }
                  ]
                },
                {
                  "name": "achilles_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal (2+)",
                      "value": "normal_2plus"
                    },
                    {
                      "label": "Hyporeflexia (1+)",
                      "value": "hyporeflexia_1plus"
                    },
                    {
                      "label": "Areflexia (0)",
                      "value": "areflexia_0"
                    },
                    {
                      "label": "Hyperreflexia (3+)",
                      "value": "hyperreflexia_3plus"
                    },
                    {
                      "label": "Clonus (4+)",
                      "value": "clonus_4plus"
                    }
                  ]
                }
              ]
            },
            {
              "type": "textarea",
              "name": "dtr_lower_limb_notes",
              "label": "Notes",
              "placeholder": "Free text for clinician observations"
            },
            {
              "type": "textarea",
              "name": "dtr_lower_limb_interpretation",
              "label": "Interpretation",
              "placeholder": "Auto-generated, editable — e.g. Reflex asymmetry / Normal"
            }
          ]
        }
      ]
    }
  ]
}