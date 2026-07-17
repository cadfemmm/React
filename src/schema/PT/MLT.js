const SCHEMA = {
  "title": "Muscle Length Tests",
  "sections": [
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "cervical_section",
          "label": "Cervical Muscle Length Tests",
          "defaultOpen": false,
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "Result",
                "Pain"
              ],
              "template": "minmax(260px, 1fr) 180px 90px"
            },
            {
              "type": "grid-row",
              "name": "scm",
              "label": "Sternocleidomastoid (SCM) – Head Tilt / Rotation Test",
              "template": "minmax(260px, 1fr) 180px 90px",
              "cols": [
                {
                  "name": "scm_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "scm_pain",
                  "type": "checkbox"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "upper_trapezius",
              "label": "Upper Trapezius – Lateral Flexion Test",
              "template": "minmax(260px, 1fr) 180px 90px",
              "cols": [
                {
                  "name": "upper_trapezius_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "upper_trapezius_pain",
                  "type": "checkbox"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "levator_scapula",
              "label": "Levator Scapula – Neck Flexion & Rotation Test",
              "template": "minmax(260px, 1fr) 180px 90px",
              "cols": [
                {
                  "name": "levator_scapula_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "levator_scapula_pain",
                  "type": "checkbox"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "cervical_flexors",
              "label": "Cervical Flexors (Deep Neck Flexor Stretch)",
              "template": "minmax(260px, 1fr) 180px 90px",
              "cols": [
                {
                  "name": "cervical_flexors_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "cervical_flexors_pain",
                  "type": "checkbox"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "cervical_extensors",
              "label": "Cervical Extensors (Upper Cervical Extension Stretch)",
              "template": "minmax(260px, 1fr) 180px 90px",
              "cols": [
                {
                  "name": "cervical_extensors_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "cervical_extensors_pain",
                  "type": "checkbox"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "cervical_rotation_left",
              "label": "Cervical Rotation (Left Rotation Stretch)",
              "template": "minmax(260px, 1fr) 180px 90px",
              "cols": [
                {
                  "name": "cervical_rotation_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "cervical_rotation_left_pain",
                  "type": "checkbox"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "cervical_rotation_right",
              "label": "Cervical Rotation (Right Rotation Stretch)",
              "template": "minmax(260px, 1fr) 180px 90px",
              "cols": [
                {
                  "name": "cervical_rotation_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "cervical_rotation_right_pain",
                  "type": "checkbox"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "cervical_side_flexors_left",
              "label": "Cervical Side Flexors – Left Side Stretch",
              "template": "minmax(260px, 1fr) 180px 90px",
              "cols": [
                {
                  "name": "cervical_side_flexors_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "cervical_side_flexors_left_pain",
                  "type": "checkbox"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "cervical_side_flexors_right",
              "label": "Cervical Side Flexors – Right Side Stretch",
              "template": "minmax(260px, 1fr) 180px 90px",
              "cols": [
                {
                  "name": "cervical_side_flexors_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "cervical_side_flexors_right_pain",
                  "type": "checkbox"
                }
              ]
            }
          ]
        },
        {
          "type": "accordion",
          "name": "upper_limb_section",
          "label": "Upper Limb Muscle Length Tests",
          "defaultOpen": false,
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "Left Result",
                "Left Pain",
                "Right Result",
                "Right Pain"
              ],
              "template": "minmax(220px, 1fr) 160px 80px 160px 80px"
            },
            {
              "type": "grid-row",
              "name": "pec_major",
              "label": "Pectoralis Major – Horizontal Abduction Test",
              "template": "minmax(220px, 1fr) 160px 80px 160px 80px",
              "cols": [
                {
                  "name": "pec_major_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "pec_major_left_pain",
                  "type": "checkbox"
                },
                {
                  "name": "pec_major_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "pec_major_right_pain",
                  "type": "checkbox"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "pec_minor",
              "label": "Pectoralis Minor – Scapular Posterior Tilt Stretch",
              "template": "minmax(220px, 1fr) 160px 80px 160px 80px",
              "cols": [
                {
                  "name": "pec_minor_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "pec_minor_left_pain",
                  "type": "checkbox"
                },
                {
                  "name": "pec_minor_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "pec_minor_right_pain",
                  "type": "checkbox"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "biceps_brachii",
              "label": "Biceps Brachii – Elbow Extension & Shoulder Extension Test",
              "template": "minmax(220px, 1fr) 160px 80px 160px 80px",
              "cols": [
                {
                  "name": "biceps_brachii_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "biceps_brachii_left_pain",
                  "type": "checkbox"
                },
                {
                  "name": "biceps_brachii_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "biceps_brachii_right_pain",
                  "type": "checkbox"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "forearm_flexors",
              "label": "Forearm Flexors – Wrist/Finger Extension Stretch",
              "template": "minmax(220px, 1fr) 160px 80px 160px 80px",
              "cols": [
                {
                  "name": "forearm_flexors_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "forearm_flexors_left_pain",
                  "type": "checkbox"
                },
                {
                  "name": "forearm_flexors_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "forearm_flexors_right_pain",
                  "type": "checkbox"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "forearm_extensors",
              "label": "Forearm Extensors – Wrist/Finger Flexion Stretch",
              "template": "minmax(220px, 1fr) 160px 80px 160px 80px",
              "cols": [
                {
                  "name": "forearm_extensors_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "forearm_extensors_left_pain",
                  "type": "checkbox"
                },
                {
                  "name": "forearm_extensors_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "forearm_extensors_right_pain",
                  "type": "checkbox"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "deltoid_posterior",
              "label": "Deltoid Posterior Fibers – Horizontal Adduction Stretch",
              "template": "minmax(220px, 1fr) 160px 80px 160px 80px",
              "cols": [
                {
                  "name": "deltoid_posterior_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "deltoid_posterior_left_pain",
                  "type": "checkbox"
                },
                {
                  "name": "deltoid_posterior_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "deltoid_posterior_right_pain",
                  "type": "checkbox"
                }
              ]
            }
          ]
        },
        {
          "type": "accordion",
          "name": "lumbar_section",
          "label": "Lumbar / Trunk Muscle Length Tests",
          "defaultOpen": false,
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "Left Result",
                "Left Pain",
                "Right Result",
                "Right Pain"
              ],
              "template": "minmax(220px, 1fr) 160px 80px 160px 80px"
            },
            {
              "type": "grid-row",
              "name": "lumbar_hamstrings_slr",
              "label": "Hamstrings – Supine Straight Leg Raise",
              "template": "minmax(220px, 1fr) 160px 80px 160px 80px",
              "cols": [
                {
                  "name": "lumbar_hamstrings_slr_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "lumbar_hamstrings_slr_left_pain",
                  "type": "checkbox"
                },
                {
                  "name": "lumbar_hamstrings_slr_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "lumbar_hamstrings_slr_right_pain",
                  "type": "checkbox"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "hip_flexors_thomas",
              "label": "Hip Flexors – Thomas Test (Iliopsoas)",
              "template": "minmax(220px, 1fr) 160px 80px 160px 80px",
              "cols": [
                {
                  "name": "hip_flexors_thomas_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "hip_flexors_thomas_left_pain",
                  "type": "checkbox"
                },
                {
                  "name": "hip_flexors_thomas_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "hip_flexors_thomas_right_pain",
                  "type": "checkbox"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "quadratus_lumborum",
              "label": "Quadratus Lumborum – Side Bending Stretch",
              "template": "minmax(220px, 1fr) 160px 80px 160px 80px",
              "cols": [
                {
                  "name": "quadratus_lumborum_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "quadratus_lumborum_left_pain",
                  "type": "checkbox"
                },
                {
                  "name": "quadratus_lumborum_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "quadratus_lumborum_right_pain",
                  "type": "checkbox"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "glute_max_piriformis",
              "label": "Gluteus Maximus / Piriformis – Hip Flexion/Internal Rotation Test",
              "template": "minmax(220px, 1fr) 160px 80px 160px 80px",
              "cols": [
                {
                  "name": "glute_max_piriformis_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "glute_max_piriformis_left_pain",
                  "type": "checkbox"
                },
                {
                  "name": "glute_max_piriformis_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "glute_max_piriformis_right_pain",
                  "type": "checkbox"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "erector_spinae",
              "label": "Erector Spinae – Prone Lumbar Extension Stretch",
              "template": "minmax(220px, 1fr) 160px 80px 160px 80px",
              "cols": [
                {
                  "name": "erector_spinae_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "erector_spinae_left_pain",
                  "type": "checkbox"
                },
                {
                  "name": "erector_spinae_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "erector_spinae_right_pain",
                  "type": "checkbox"
                }
              ]
            }
          ]
        },
        {
          "type": "accordion",
          "name": "lower_limb_section",
          "label": "Lower Limb Muscle Length Tests",
          "defaultOpen": false,
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "Left Result",
                "Left Pain",
                "Right Result",
                "Right Pain"
              ],
              "template": "minmax(220px, 1fr) 160px 80px 160px 80px"
            },
            {
              "type": "grid-row",
              "name": "quadriceps",
              "label": "Quadriceps – Prone Knee Flexion Stretch",
              "template": "minmax(220px, 1fr) 160px 80px 160px 80px",
              "cols": [
                {
                  "name": "quadriceps_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "quadriceps_left_pain",
                  "type": "checkbox"
                },
                {
                  "name": "quadriceps_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "quadriceps_right_pain",
                  "type": "checkbox"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "calf_gastrocnemius",
              "label": "Calf – Gastrocnemius Stretch (Knee Extended)",
              "template": "minmax(220px, 1fr) 160px 80px 160px 80px",
              "cols": [
                {
                  "name": "calf_gastrocnemius_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "calf_gastrocnemius_left_pain",
                  "type": "checkbox"
                },
                {
                  "name": "calf_gastrocnemius_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "calf_gastrocnemius_right_pain",
                  "type": "checkbox"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "soleus",
              "label": "Soleus – Calf Stretch (Knee Flexed)",
              "template": "minmax(220px, 1fr) 160px 80px 160px 80px",
              "cols": [
                {
                  "name": "soleus_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "soleus_left_pain",
                  "type": "checkbox"
                },
                {
                  "name": "soleus_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "soleus_right_pain",
                  "type": "checkbox"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "it_band_ober",
              "label": "IT Band – Ober's Test",
              "template": "minmax(220px, 1fr) 160px 80px 160px 80px",
              "cols": [
                {
                  "name": "it_band_ober_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "it_band_ober_left_pain",
                  "type": "checkbox"
                },
                {
                  "name": "it_band_ober_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "it_band_ober_right_pain",
                  "type": "checkbox"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "hip_adductors",
              "label": "Hip Adductors – Supine Abduction Stretch",
              "template": "minmax(220px, 1fr) 160px 80px 160px 80px",
              "cols": [
                {
                  "name": "hip_adductors_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "hip_adductors_left_pain",
                  "type": "checkbox"
                },
                {
                  "name": "hip_adductors_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "hip_adductors_right_pain",
                  "type": "checkbox"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "hip_abductors",
              "label": "Hip Abductors – Adduction Stretch",
              "template": "minmax(220px, 1fr) 160px 80px 160px 80px",
              "cols": [
                {
                  "name": "hip_abductors_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "hip_abductors_left_pain",
                  "type": "checkbox"
                },
                {
                  "name": "hip_abductors_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "hip_abductors_right_pain",
                  "type": "checkbox"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "hamstrings_seated_supine",
              "label": "Hamstrings – Seated / Supine Stretch",
              "template": "minmax(220px, 1fr) 160px 80px 160px 80px",
              "cols": [
                {
                  "name": "hamstrings_seated_supine_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "hamstrings_seated_supine_left_pain",
                  "type": "checkbox"
                },
                {
                  "name": "hamstrings_seated_supine_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Mild Tightness",
                      "value": "mild_tightness"
                    },
                    {
                      "label": "Moderate Tightness",
                      "value": "moderate_tightness"
                    },
                    {
                      "label": "Severe Tightness",
                      "value": "severe_tightness"
                    }
                  ]
                },
                {
                  "name": "hamstrings_seated_supine_right_pain",
                  "type": "checkbox"
                }
              ]
            }
          ]
        },
        {
          "type": "accordion",
          "name": "interpretation_section",
          "label": "Interpretation",
          "defaultOpen": true,
          "children": [
            {
              "type": "textarea",
              "name": "muscle_length_interpretation",
              "label": "Interpretation"
            }
          ]
        }
      ]
    }
  ]
}