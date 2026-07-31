const SCHEMA = {
  "title": "Upper Limb – Special Tests (Shoulder, Elbow, Wrist)",
  "sections": [
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "shoulder_section",
          "label": "Shoulder",
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
              "name": "hawkins_kennedy",
              "label": "Hawkins-Kennedy Test (Sh Impingement)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "hawkins_kennedy_l_result",
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
                  "name": "hawkins_kennedy_r_result",
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
              "name": "neer_impingement",
              "label": "Neer Impingement Test (Sh Impingement)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "neer_impingement_l_result",
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
                  "name": "neer_impingement_r_result",
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
              "name": "empty_can_jobe",
              "label": "Empty Can / Jobe Test (Sh Impingement)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "empty_can_jobe_l_result",
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
                  "name": "empty_can_jobe_r_result",
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
              "name": "hornblowers_sign",
              "label": "Hornblower's Sign (Teres Minor Integrity)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "hornblowers_sign_l_result",
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
                  "name": "hornblowers_sign_r_result",
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
              "name": "speed_test",
              "label": "Speed Test (Biceps Long Head)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "speed_test_l_result",
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
                  "name": "speed_test_r_result",
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
              "name": "yergason_test",
              "label": "Yergason Test (Biceps)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "yergason_test_l_result",
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
                  "name": "yergason_test_r_result",
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
              "name": "drop_arm_test",
              "label": "Drop Arm Test",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "drop_arm_test_l_result",
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
                  "name": "drop_arm_test_r_result",
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
              "name": "anterior_drawer_shoulder",
              "label": "Anterior Drawer Test (Anterior Shoulder Stability)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "anterior_drawer_shoulder_l_result",
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
                  "name": "anterior_drawer_shoulder_r_result",
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
              "name": "apprehension_test",
              "label": "Apprehension Test (Anterior Instability)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "apprehension_test_l_result",
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
                  "name": "apprehension_test_r_result",
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
              "name": "relocation_test",
              "label": "Relocation Test",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "relocation_test_l_result",
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
                  "name": "relocation_test_r_result",
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
              "name": "ac_compression",
              "label": "AC Compression Test / Cross-Body Adduction",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "ac_compression_l_result",
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
                  "name": "ac_compression_r_result",
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
              "name": "obrien_test",
              "label": "O'Brien Test (Active Compression / SLAP)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "obrien_test_l_result",
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
                  "name": "obrien_test_r_result",
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
              "name": "clunk_test",
              "label": "Clunk Test (Tear of Glenoid Labrum)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "clunk_test_l_result",
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
                  "name": "clunk_test_r_result",
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
              "name": "lift_off_test",
              "label": "Lift-Off Test (Subscapularis)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "lift_off_test_l_result",
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
                  "name": "lift_off_test_r_result",
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
              "name": "belly_press_test",
              "label": "Belly-Press Test (Subscapularis)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "belly_press_test_l_result",
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
                  "name": "belly_press_test_r_result",
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
              "name": "posterior_apprehension_jerk",
              "label": "Posterior Apprehension / Jerk Test",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "posterior_apprehension_jerk_l_result",
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
                  "name": "posterior_apprehension_jerk_r_result",
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
              "name": "sulcus_sign",
              "label": "Sulcus Sign (Inferior Instability)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "sulcus_sign_l_result",
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
                  "name": "sulcus_sign_r_result",
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
          "name": "elbow_section",
          "label": "Elbow",
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
              "name": "valgus_stress_elbow",
              "label": "Valgus Stress Test (UCL)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "valgus_stress_elbow_l_result",
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
                  "name": "valgus_stress_elbow_r_result",
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
              "name": "varus_stress_elbow",
              "label": "Varus Stress Test (RCL)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "varus_stress_elbow_l_result",
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
                  "name": "varus_stress_elbow_r_result",
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
              "name": "cozens_test",
              "label": "Cozen's Test (Lateral Epicondylitis)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "cozens_test_l_result",
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
                  "name": "cozens_test_r_result",
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
              "name": "mills_test",
              "label": "Mill's Test (Lateral Epicondylitis)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "mills_test_l_result",
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
                  "name": "mills_test_r_result",
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
              "name": "medial_epicondylitis_test",
              "label": "Medial Epicondylitis Test",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "medial_epicondylitis_test_l_result",
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
                  "name": "medial_epicondylitis_test_r_result",
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
              "name": "tinel_elbow",
              "label": "Tinel Sign at Elbow (Ulnar Nerve)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "tinel_elbow_l_result",
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
                  "name": "tinel_elbow_r_result",
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
              "name": "pronator_teres_syndrome",
              "label": "Pronator Teres Syndrome Test",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "pronator_teres_syndrome_l_result",
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
                  "name": "pronator_teres_syndrome_r_result",
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
              "name": "lateral_pivot_shift",
              "label": "Lateral Pivot Shift Test",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "lateral_pivot_shift_l_result",
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
                  "name": "lateral_pivot_shift_r_result",
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
          "name": "wrist_hand_section",
          "label": "Wrist / Hand",
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
              "name": "phalen_test",
              "label": "Phalen Test (CTS)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "phalen_test_l_result",
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
                  "name": "phalen_test_r_result",
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
              "name": "reverse_phalen_test",
              "label": "Reverse Phalen Test",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "reverse_phalen_test_l_result",
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
                  "name": "reverse_phalen_test_r_result",
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
              "name": "tinel_wrist",
              "label": "Tinel Sign at Wrist (Median Nerve)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "tinel_wrist_l_result",
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
                  "name": "tinel_wrist_r_result",
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
              "name": "finkelstein_test",
              "label": "Finkelstein Test (De Quervain's Tenosynovitis)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "finkelstein_test_l_result",
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
                  "name": "finkelstein_test_r_result",
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
              "name": "bunnel_littler_test",
              "label": "Bunnel-Littler Test (Intrinsic Tightness)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "bunnel_littler_test_l_result",
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
                  "name": "bunnel_littler_test_r_result",
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
              "name": "froments_sign",
              "label": "Froment's Sign",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "froments_sign_l_result",
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
                  "name": "froments_sign_r_result",
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
              "name": "watson_test",
              "label": "Watson Test (Scaphoid Instability)",
              "template": "minmax(280px, 1fr) 190px 190px",
              "cols": [
                {
                  "name": "watson_test_l_result",
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
                  "name": "watson_test_r_result",
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
          "name": "upper_limb_special_tests_notes",
          "label": "Notes",
          "placeholder": "Free text"
        },
        {
          "type": "textarea",
          "name": "upper_limb_special_tests_interpretation",
          "label": "Interpretation",
          "placeholder": "Auto-generated, editable"
        }
      ]
    }
  ]
}