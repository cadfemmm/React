const SCHEMA = {
  "title": "Lower Limb – Special Tests (Hip, Knee, Ankle)",
  "sections": [
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "hip_section",
          "label": "Hip",
          "defaultOpen": true,
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "L Side Result",
                "R Side Result"
              ],
              "template": "minmax(260px, 1fr) 190px 190px"
            },
            {
              "type": "grid-row",
              "name": "trendelenburg",
              "label": "Trendelenburg Test",
              "template": "minmax(260px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "trendelenburg_l_result",
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
                  "name": "trendelenburg_r_result",
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
              "name": "fadir",
              "label": "FADIR Test",
              "template": "minmax(260px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "fadir_l_result",
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
                  "name": "fadir_r_result",
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
              "name": "scour",
              "label": "Scour Test",
              "template": "minmax(260px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "scour_l_result",
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
                  "name": "scour_r_result",
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
          "name": "knee_section",
          "label": "Knee",
          "defaultOpen": false,
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "L Side Result",
                "R Side Result"
              ],
              "template": "minmax(260px, 1fr) 190px 190px"
            },
            {
              "type": "grid-row",
              "name": "lachman",
              "label": "Lachman Test",
              "template": "minmax(260px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "lachman_l_result",
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
                  "name": "lachman_r_result",
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
              "name": "anterior_drawer_knee",
              "label": "Anterior Drawer Test",
              "template": "minmax(260px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "anterior_drawer_knee_l_result",
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
                  "name": "anterior_drawer_knee_r_result",
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
              "name": "posterior_drawer_knee",
              "label": "Posterior Drawer Test",
              "template": "minmax(260px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "posterior_drawer_knee_l_result",
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
                  "name": "posterior_drawer_knee_r_result",
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
              "name": "mcmurray",
              "label": "McMurray Test",
              "template": "minmax(260px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "mcmurray_l_result",
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
                  "name": "mcmurray_r_result",
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
              "name": "apley_compression",
              "label": "Apley Compression Test",
              "template": "minmax(260px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "apley_compression_l_result",
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
                  "name": "apley_compression_r_result",
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
              "name": "valgus_stress",
              "label": "Valgus Stress Test",
              "template": "minmax(260px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "valgus_stress_l_result",
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
                  "name": "valgus_stress_r_result",
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
              "name": "varus_stress",
              "label": "Varus Stress Test",
              "template": "minmax(260px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "varus_stress_l_result",
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
                  "name": "varus_stress_r_result",
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
          "name": "ankle_section",
          "label": "Ankle",
          "defaultOpen": false,
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "L Side Result",
                "R Side Result"
              ],
              "template": "minmax(260px, 1fr) 190px 190px"
            },
            {
              "type": "grid-row",
              "name": "anterior_drawer_ankle",
              "label": "Anterior Drawer Test (Ankle)",
              "template": "minmax(260px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "anterior_drawer_ankle_l_result",
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
                  "name": "anterior_drawer_ankle_r_result",
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
              "name": "talar_tilt",
              "label": "Talar Tilt Test",
              "template": "minmax(260px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "talar_tilt_l_result",
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
                  "name": "talar_tilt_r_result",
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
              "name": "thompson",
              "label": "Thompson Test (Achilles)",
              "template": "minmax(260px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "thompson_l_result",
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
                  "name": "thompson_r_result",
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
              "name": "kleiger",
              "label": "Kleiger External Rotation Test",
              "template": "minmax(260px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "kleiger_l_result",
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
                  "name": "kleiger_r_result",
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
          "name": "foot_section",
          "label": "Foot",
          "defaultOpen": false,
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "L Side Result",
                "R Side Result"
              ],
              "template": "minmax(260px, 1fr) 190px 190px"
            },
            {
              "type": "grid-row",
              "name": "windlass",
              "label": "Windlass Test (Plantar Fascia)",
              "template": "minmax(260px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "windlass_l_result",
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
                  "name": "windlass_r_result",
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
          "name": "lower_limb_special_tests_notes",
          "label": "Notes",
          "placeholder": "Free text"
        },
        {
          "type": "textarea",
          "name": "lower_limb_special_tests_interpretation",
          "label": "Interpretation",
          "placeholder": "Auto-generated, editable"
        }
      ]
    }
  ]
}