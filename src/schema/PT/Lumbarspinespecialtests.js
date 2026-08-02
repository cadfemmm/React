const SCHEMA = {
  "title": "Lumbar Spine – Special Tests",
  "sections": [
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "lumbar_section",
          "label": "Lumbar",
          "defaultOpen": true,
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "L Side Result",
                "R Side Result"
              ],
              "template": "minmax(280px, 1fr) 190px 190px"
            },
            {
              "type": "grid-row",
              "name": "crossed_slr",
              "label": "Crossed Straight Leg Raise",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "crossed_slr_l_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Positive",
                      "value": "positive"
                    },
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Limited",
                      "value": "limited"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "crossed_slr_r_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Positive",
                      "value": "positive"
                    },
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Limited",
                      "value": "limited"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "femoral_nerve_stretch",
              "label": "Femoral Nerve Stretch Test",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "femoral_nerve_stretch_l_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Positive",
                      "value": "positive"
                    },
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Limited",
                      "value": "limited"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "femoral_nerve_stretch_r_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Positive",
                      "value": "positive"
                    },
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Limited",
                      "value": "limited"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "lumbar_quadrant_kemp",
              "label": "Lumbar Quadrant Test (Kemp Test)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "lumbar_quadrant_kemp_l_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Positive",
                      "value": "positive"
                    },
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Limited",
                      "value": "limited"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "lumbar_quadrant_kemp_r_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Positive",
                      "value": "positive"
                    },
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Limited",
                      "value": "limited"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "prone_instability",
              "label": "Prone Instability Test",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "prone_instability_l_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Positive",
                      "value": "positive"
                    },
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Limited",
                      "value": "limited"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "prone_instability_r_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Positive",
                      "value": "positive"
                    },
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Limited",
                      "value": "limited"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "passive_lumbar_extension",
              "label": "Passive Lumbar Extension Test",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "passive_lumbar_extension_l_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Positive",
                      "value": "positive"
                    },
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Limited",
                      "value": "limited"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "passive_lumbar_extension_r_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Positive",
                      "value": "positive"
                    },
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Limited",
                      "value": "limited"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "accordion",
          "name": "sacroiliac_section",
          "label": "Sacroiliac",
          "defaultOpen": false,
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "L Side Result",
                "R Side Result"
              ],
              "template": "minmax(280px, 1fr) 190px 190px"
            },
            {
              "type": "grid-row",
              "name": "gaenslen_test",
              "label": "Gaenslen Test",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "gaenslen_test_l_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Positive",
                      "value": "positive"
                    },
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Limited",
                      "value": "limited"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "gaenslen_test_r_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Positive",
                      "value": "positive"
                    },
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Limited",
                      "value": "limited"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "sacral_thrust_test",
              "label": "Sacral Thrust Test",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "sacral_thrust_test_l_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Positive",
                      "value": "positive"
                    },
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Limited",
                      "value": "limited"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "sacral_thrust_test_r_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Positive",
                      "value": "positive"
                    },
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Limited",
                      "value": "limited"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "compression_test_sij",
              "label": "Compression Test (SIJ)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "compression_test_sij_l_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Positive",
                      "value": "positive"
                    },
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Limited",
                      "value": "limited"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "compression_test_sij_r_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Positive",
                      "value": "positive"
                    },
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Limited",
                      "value": "limited"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "distraction_test_sij",
              "label": "Distraction Test (SIJ)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "distraction_test_sij_l_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Positive",
                      "value": "positive"
                    },
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Limited",
                      "value": "limited"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "distraction_test_sij_r_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Positive",
                      "value": "positive"
                    },
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Limited",
                      "value": "limited"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "thigh_thrust_test",
              "label": "Thigh Thrust Test",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "thigh_thrust_test_l_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Positive",
                      "value": "positive"
                    },
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Limited",
                      "value": "limited"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "thigh_thrust_test_r_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Positive",
                      "value": "positive"
                    },
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Limited",
                      "value": "limited"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "gillet_test",
              "label": "Gillet Test",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "gillet_test_l_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Positive",
                      "value": "positive"
                    },
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Limited",
                      "value": "limited"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "gillet_test_r_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Positive",
                      "value": "positive"
                    },
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Limited",
                      "value": "limited"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "accordion",
          "name": "lumbar_pelvic_stability_section",
          "label": "Lumbar / Pelvic Stability",
          "defaultOpen": false,
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "L Side Result",
                "R Side Result"
              ],
              "template": "minmax(280px, 1fr) 190px 190px"
            },
            {
              "type": "grid-row",
              "name": "aslr_test",
              "label": "Active Straight Leg Raise (ASLR)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "aslr_test_l_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Positive",
                      "value": "positive"
                    },
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Limited",
                      "value": "limited"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "aslr_test_r_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Positive",
                      "value": "positive"
                    },
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Limited",
                      "value": "limited"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "textarea",
          "name": "lumbar_spine_special_tests_notes",
          "label": "Notes",
          "placeholder": "Free text"
        },
        {
          "type": "textarea",
          "name": "lumbar_spine_special_tests_interpretation",
          "label": "Interpretation",
          "placeholder": "Auto-generated, editable"
        }
      ]
    }
  ]
}