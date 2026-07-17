const SCHEMA = {
  "title": "PAIVM / Spinal Segmental Mobility",
  "sections": [
    {
      "title": null,
      "fields": [
        {
          "type": "checkbox-group",
          "name": "paivm_regions_assessed",
          "label": "Select Region(s) Assessed",
          "options": [
            {
              "label": "Cervical Spine",
              "value": "cervical"
            },
            {
              "label": "Thoracic Spine",
              "value": "thoracic"
            },
            {
              "label": "Lumbar Spine",
              "value": "lumbar"
            },
            {
              "label": "Sacroiliac Joint",
              "value": "sacroiliac"
            },
            {
              "label": "Coccyx",
              "value": "coccyx"
            }
          ]
        },
        {
          "type": "accordion",
          "name": "paivm_cervical_section",
          "label": "PAIVM (Cervical Spine)",
          "defaultOpen": false,
          "showIf": {
            "field": "paivm_regions_assessed",
            "includes": "cervical"
          },
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "Central PA",
                "Facet Joint L (UPA)",
                "Facet Joint R (UPA)",
                "Lateral Glide L",
                "Lateral Glide R",
                "Pain",
                "Notes"
              ],
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)"
            },
            {
              "type": "grid-row",
              "name": "paivm_c2",
              "label": "C2",
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)",
              "cols": [
                {
                  "name": "paivm_c2_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c2_facet_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c2_facet_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c2_lateral_glide_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c2_lateral_glide_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c2_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_c2_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "paivm_c3",
              "label": "C3",
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)",
              "cols": [
                {
                  "name": "paivm_c3_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c3_facet_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c3_facet_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c3_lateral_glide_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c3_lateral_glide_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c3_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_c3_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "paivm_c4",
              "label": "C4",
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)",
              "cols": [
                {
                  "name": "paivm_c4_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c4_facet_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c4_facet_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c4_lateral_glide_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c4_lateral_glide_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c4_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_c4_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "paivm_c5",
              "label": "C5",
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)",
              "cols": [
                {
                  "name": "paivm_c5_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c5_facet_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c5_facet_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c5_lateral_glide_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c5_lateral_glide_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c5_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_c5_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "paivm_c6",
              "label": "C6",
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)",
              "cols": [
                {
                  "name": "paivm_c6_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c6_facet_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c6_facet_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c6_lateral_glide_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c6_lateral_glide_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c6_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_c6_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "paivm_c7",
              "label": "C7",
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)",
              "cols": [
                {
                  "name": "paivm_c7_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c7_facet_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c7_facet_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c7_lateral_glide_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c7_lateral_glide_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_c7_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_c7_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "textarea",
              "name": "paivm_cervical_interpretation",
              "label": "Interpretation",
              "placeholder": "Auto-generated, editable"
            }
          ]
        },
        {
          "type": "accordion",
          "name": "paivm_thoracic_section",
          "label": "PAIVM (Thoracic Spine)",
          "defaultOpen": false,
          "showIf": {
            "field": "paivm_regions_assessed",
            "includes": "thoracic"
          },
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "Central PA",
                "Facet Joint L (UPA)",
                "Facet Joint R (UPA)",
                "Lateral Glide L",
                "Lateral Glide R",
                "Pain",
                "Notes"
              ],
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)"
            },
            {
              "type": "grid-row",
              "name": "paivm_t1",
              "label": "T1",
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)",
              "cols": [
                {
                  "name": "paivm_t1_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t1_facet_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t1_facet_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t1_lateral_glide_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t1_lateral_glide_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t1_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_t1_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "paivm_t2",
              "label": "T2",
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)",
              "cols": [
                {
                  "name": "paivm_t2_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t2_facet_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t2_facet_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t2_lateral_glide_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t2_lateral_glide_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t2_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_t2_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "paivm_t3",
              "label": "T3",
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)",
              "cols": [
                {
                  "name": "paivm_t3_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t3_facet_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t3_facet_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t3_lateral_glide_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t3_lateral_glide_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t3_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_t3_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "paivm_t4",
              "label": "T4",
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)",
              "cols": [
                {
                  "name": "paivm_t4_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t4_facet_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t4_facet_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t4_lateral_glide_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t4_lateral_glide_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t4_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_t4_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "paivm_t5",
              "label": "T5",
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)",
              "cols": [
                {
                  "name": "paivm_t5_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t5_facet_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t5_facet_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t5_lateral_glide_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t5_lateral_glide_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t5_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_t5_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "paivm_t6",
              "label": "T6",
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)",
              "cols": [
                {
                  "name": "paivm_t6_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t6_facet_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t6_facet_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t6_lateral_glide_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t6_lateral_glide_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t6_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_t6_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "paivm_t7",
              "label": "T7",
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)",
              "cols": [
                {
                  "name": "paivm_t7_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t7_facet_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t7_facet_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t7_lateral_glide_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t7_lateral_glide_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t7_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_t7_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "paivm_t8",
              "label": "T8",
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)",
              "cols": [
                {
                  "name": "paivm_t8_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t8_facet_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t8_facet_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t8_lateral_glide_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t8_lateral_glide_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t8_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_t8_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "paivm_t9",
              "label": "T9",
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)",
              "cols": [
                {
                  "name": "paivm_t9_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t9_facet_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t9_facet_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t9_lateral_glide_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t9_lateral_glide_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t9_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_t9_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "paivm_t10",
              "label": "T10",
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)",
              "cols": [
                {
                  "name": "paivm_t10_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t10_facet_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t10_facet_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t10_lateral_glide_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t10_lateral_glide_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t10_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_t10_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "paivm_t11",
              "label": "T11",
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)",
              "cols": [
                {
                  "name": "paivm_t11_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t11_facet_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t11_facet_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t11_lateral_glide_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t11_lateral_glide_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t11_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_t11_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "paivm_t12",
              "label": "T12",
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)",
              "cols": [
                {
                  "name": "paivm_t12_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t12_facet_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t12_facet_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t12_lateral_glide_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t12_lateral_glide_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_t12_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_t12_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "textarea",
              "name": "paivm_thoracic_interpretation",
              "label": "Interpretation",
              "placeholder": "Auto-generated, editable"
            }
          ]
        },
        {
          "type": "accordion",
          "name": "paivm_lumbar_section",
          "label": "PAIVM (Lumbar Spine)",
          "defaultOpen": false,
          "showIf": {
            "field": "paivm_regions_assessed",
            "includes": "lumbar"
          },
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "Central PA",
                "Facet Joint L (UPA)",
                "Facet Joint R (UPA)",
                "Lateral Glide L",
                "Lateral Glide R",
                "Pain",
                "Notes"
              ],
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)"
            },
            {
              "type": "grid-row",
              "name": "paivm_l1",
              "label": "L1",
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)",
              "cols": [
                {
                  "name": "paivm_l1_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l1_facet_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l1_facet_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l1_lateral_glide_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l1_lateral_glide_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l1_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_l1_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "paivm_l2",
              "label": "L2",
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)",
              "cols": [
                {
                  "name": "paivm_l2_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l2_facet_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l2_facet_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l2_lateral_glide_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l2_lateral_glide_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l2_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_l2_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "paivm_l3",
              "label": "L3",
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)",
              "cols": [
                {
                  "name": "paivm_l3_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l3_facet_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l3_facet_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l3_lateral_glide_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l3_lateral_glide_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l3_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_l3_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "paivm_l4",
              "label": "L4",
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)",
              "cols": [
                {
                  "name": "paivm_l4_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l4_facet_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l4_facet_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l4_lateral_glide_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l4_lateral_glide_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l4_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_l4_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "paivm_l5",
              "label": "L5",
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)",
              "cols": [
                {
                  "name": "paivm_l5_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l5_facet_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l5_facet_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l5_lateral_glide_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l5_lateral_glide_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_l5_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_l5_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "paivm_s1",
              "label": "S1",
              "template": "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)",
              "cols": [
                {
                  "name": "paivm_s1_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_s1_facet_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_s1_facet_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_s1_lateral_glide_l",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_s1_lateral_glide_r",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_s1_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_s1_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "textarea",
              "name": "paivm_lumbar_interpretation",
              "label": "Interpretation",
              "placeholder": "Auto-generated, editable"
            }
          ]
        },
        {
          "type": "accordion",
          "name": "paivm_sacroiliac_section",
          "label": "PAIVM (Sacroiliac Joint)",
          "defaultOpen": false,
          "showIf": {
            "field": "paivm_regions_assessed",
            "includes": "sacroiliac"
          },
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "Central PA",
                "SIJ L",
                "SIJ R",
                "Pain",
                "Notes"
              ],
              "template": "120px 140px 140px 140px 70px minmax(150px, 1fr)"
            },
            {
              "type": "grid-row",
              "name": "paivm_sij",
              "label": "Sacroiliac Joint",
              "template": "120px 140px 140px 140px 70px minmax(150px, 1fr)",
              "cols": [
                {
                  "name": "paivm_sij_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_sij_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_sij_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_sij_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_sij_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "textarea",
              "name": "paivm_sacroiliac_interpretation",
              "label": "Interpretation",
              "placeholder": "Auto-generated, editable"
            }
          ]
        },
        {
          "type": "accordion",
          "name": "paivm_coccyx_section",
          "label": "PAIVM (Coccyx)",
          "defaultOpen": false,
          "showIf": {
            "field": "paivm_regions_assessed",
            "includes": "coccyx"
          },
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "Central PA",
                "Left Response",
                "Right Response",
                "Pain",
                "Notes"
              ],
              "template": "120px 140px 140px 140px 70px minmax(150px, 1fr)"
            },
            {
              "type": "grid-row",
              "name": "paivm_coccyx",
              "label": "Coccyx",
              "template": "120px 140px 140px 140px 70px minmax(150px, 1fr)",
              "cols": [
                {
                  "name": "paivm_coccyx_central_pa",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_coccyx_left",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_coccyx_right",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Hypomobile",
                      "value": "hypomobile"
                    },
                    {
                      "label": "Hypermobile",
                      "value": "hypermobile"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "paivm_coccyx_pain",
                  "type": "checkbox"
                },
                {
                  "name": "paivm_coccyx_notes",
                  "type": "text",
                  "placeholder": "Free text"
                }
              ]
            },
            {
              "type": "textarea",
              "name": "paivm_coccyx_interpretation",
              "label": "Interpretation",
              "placeholder": "Auto-generated, editable"
            }
          ]
        }
      ]
    }
  ]
}