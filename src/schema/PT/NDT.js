const SCHEMA = {
  "title": "Neurodynamic Tests",
  "sections": [
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "cervical_upper_limb_section",
          "label": "Neurodynamic Test (Cervical / Upper Limb Tension Tests)",
          "defaultOpen": false,
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "Left Result",
                "Right Result",
                "Onset Angle L (°)",
                "Onset Angle R (°)"
              ],
              "template": "minmax(250px, 1fr) 140px 140px 100px 100px"
            },
            {
              "type": "grid-row",
              "name": "ultt1_median",
              "label": "ULTT1 – Median Nerve",
              "template": "minmax(250px, 1fr) 140px 140px 100px 100px",
              "cols": [
                {
                  "name": "ultt1_median_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Positive – Pain",
                      "value": "positive_pain"
                    },
                    {
                      "label": "Positive – Paraesthesia",
                      "value": "positive_paraesthesia"
                    },
                    {
                      "label": "Positive – Neural Stretch",
                      "value": "positive_neural_stretch"
                    },
                    {
                      "label": "Inconclusive",
                      "value": "inconclusive"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "ultt1_median_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Positive – Pain",
                      "value": "positive_pain"
                    },
                    {
                      "label": "Positive – Paraesthesia",
                      "value": "positive_paraesthesia"
                    },
                    {
                      "label": "Positive – Neural Stretch",
                      "value": "positive_neural_stretch"
                    },
                    {
                      "label": "Inconclusive",
                      "value": "inconclusive"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "ultt1_median_onset_angle_left",
                  "type": "number",
                  "suffix": "°"
                },
                {
                  "name": "ultt1_median_onset_angle_right",
                  "type": "number",
                  "suffix": "°"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "ultt2a_median_musculocutaneous_axillary",
              "label": "ULTT2a – Median / Musculocutaneous / Axillary",
              "template": "minmax(250px, 1fr) 140px 140px 100px 100px",
              "cols": [
                {
                  "name": "ultt2a_median_musculocutaneous_axillary_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Positive – Pain",
                      "value": "positive_pain"
                    },
                    {
                      "label": "Positive – Paraesthesia",
                      "value": "positive_paraesthesia"
                    },
                    {
                      "label": "Positive – Neural Stretch",
                      "value": "positive_neural_stretch"
                    },
                    {
                      "label": "Inconclusive",
                      "value": "inconclusive"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "ultt2a_median_musculocutaneous_axillary_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Positive – Pain",
                      "value": "positive_pain"
                    },
                    {
                      "label": "Positive – Paraesthesia",
                      "value": "positive_paraesthesia"
                    },
                    {
                      "label": "Positive – Neural Stretch",
                      "value": "positive_neural_stretch"
                    },
                    {
                      "label": "Inconclusive",
                      "value": "inconclusive"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "ultt2a_median_musculocutaneous_axillary_onset_angle_left",
                  "type": "number",
                  "suffix": "°"
                },
                {
                  "name": "ultt2a_median_musculocutaneous_axillary_onset_angle_right",
                  "type": "number",
                  "suffix": "°"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "ultt2b_radial",
              "label": "ULTT2b – Radial Nerve",
              "template": "minmax(250px, 1fr) 140px 140px 100px 100px",
              "cols": [
                {
                  "name": "ultt2b_radial_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Positive – Pain",
                      "value": "positive_pain"
                    },
                    {
                      "label": "Positive – Paraesthesia",
                      "value": "positive_paraesthesia"
                    },
                    {
                      "label": "Positive – Neural Stretch",
                      "value": "positive_neural_stretch"
                    },
                    {
                      "label": "Inconclusive",
                      "value": "inconclusive"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "ultt2b_radial_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Positive – Pain",
                      "value": "positive_pain"
                    },
                    {
                      "label": "Positive – Paraesthesia",
                      "value": "positive_paraesthesia"
                    },
                    {
                      "label": "Positive – Neural Stretch",
                      "value": "positive_neural_stretch"
                    },
                    {
                      "label": "Inconclusive",
                      "value": "inconclusive"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "ultt2b_radial_onset_angle_left",
                  "type": "number",
                  "suffix": "°"
                },
                {
                  "name": "ultt2b_radial_onset_angle_right",
                  "type": "number",
                  "suffix": "°"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "ultt3_ulnar",
              "label": "ULTT3 – Ulnar Nerve",
              "template": "minmax(250px, 1fr) 140px 140px 100px 100px",
              "cols": [
                {
                  "name": "ultt3_ulnar_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Positive – Pain",
                      "value": "positive_pain"
                    },
                    {
                      "label": "Positive – Paraesthesia",
                      "value": "positive_paraesthesia"
                    },
                    {
                      "label": "Positive – Neural Stretch",
                      "value": "positive_neural_stretch"
                    },
                    {
                      "label": "Inconclusive",
                      "value": "inconclusive"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "ultt3_ulnar_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Positive – Pain",
                      "value": "positive_pain"
                    },
                    {
                      "label": "Positive – Paraesthesia",
                      "value": "positive_paraesthesia"
                    },
                    {
                      "label": "Positive – Neural Stretch",
                      "value": "positive_neural_stretch"
                    },
                    {
                      "label": "Inconclusive",
                      "value": "inconclusive"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "ultt3_ulnar_onset_angle_left",
                  "type": "number",
                  "suffix": "°"
                },
                {
                  "name": "ultt3_ulnar_onset_angle_right",
                  "type": "number",
                  "suffix": "°"
                }
              ]
            },
            {
              "type": "textarea",
              "name": "cervical_upper_limb_notes",
              "label": "Notes",
              "placeholder": "Clinician observations (e.g. pain reproduction, tingling, functional limitation)"
            },
            {
              "type": "textarea",
              "name": "cervical_upper_limb_interpretation",
              "label": "Interpretation",
              "placeholder": "e.g. Neurodynamic irritability: Mild / Moderate / Severe / None"
            }
          ]
        },
        {
          "type": "accordion",
          "name": "lumbar_lower_limb_section",
          "label": "Neurodynamic Test (Lumbar / Lower Limb Tension Tests)",
          "defaultOpen": false,
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "Left Result",
                "Right Result",
                "Onset Angle L (°)",
                "Onset Angle R (°)"
              ],
              "template": "minmax(250px, 1fr) 140px 140px 100px 100px"
            },
            {
              "type": "grid-row",
              "name": "slr_sciatic",
              "label": "Straight Leg Raise (SLR – Sciatic Nerve)",
              "template": "minmax(250px, 1fr) 140px 140px 100px 100px",
              "cols": [
                {
                  "name": "slr_sciatic_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Positive – Pain",
                      "value": "positive_pain"
                    },
                    {
                      "label": "Positive – Paraesthesia",
                      "value": "positive_paraesthesia"
                    },
                    {
                      "label": "Positive – Neural Stretch",
                      "value": "positive_neural_stretch"
                    },
                    {
                      "label": "Inconclusive",
                      "value": "inconclusive"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "slr_sciatic_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Positive – Pain",
                      "value": "positive_pain"
                    },
                    {
                      "label": "Positive – Paraesthesia",
                      "value": "positive_paraesthesia"
                    },
                    {
                      "label": "Positive – Neural Stretch",
                      "value": "positive_neural_stretch"
                    },
                    {
                      "label": "Inconclusive",
                      "value": "inconclusive"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "slr_sciatic_onset_angle_left",
                  "type": "number",
                  "suffix": "°"
                },
                {
                  "name": "slr_sciatic_onset_angle_right",
                  "type": "number",
                  "suffix": "°"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "slump_test",
              "label": "Slump Test",
              "template": "minmax(250px, 1fr) 140px 140px 100px 100px",
              "cols": [
                {
                  "name": "slump_test_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Positive – Pain",
                      "value": "positive_pain"
                    },
                    {
                      "label": "Positive – Paraesthesia",
                      "value": "positive_paraesthesia"
                    },
                    {
                      "label": "Positive – Neural Stretch",
                      "value": "positive_neural_stretch"
                    },
                    {
                      "label": "Inconclusive",
                      "value": "inconclusive"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "slump_test_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Positive – Pain",
                      "value": "positive_pain"
                    },
                    {
                      "label": "Positive – Paraesthesia",
                      "value": "positive_paraesthesia"
                    },
                    {
                      "label": "Positive – Neural Stretch",
                      "value": "positive_neural_stretch"
                    },
                    {
                      "label": "Inconclusive",
                      "value": "inconclusive"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "slump_test_onset_angle_left",
                  "type": "number",
                  "suffix": "°"
                },
                {
                  "name": "slump_test_onset_angle_right",
                  "type": "number",
                  "suffix": "°"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "femoral_nerve_stretch",
              "label": "Femoral Nerve Stretch Test",
              "template": "minmax(250px, 1fr) 140px 140px 100px 100px",
              "cols": [
                {
                  "name": "femoral_nerve_stretch_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Positive – Pain",
                      "value": "positive_pain"
                    },
                    {
                      "label": "Positive – Paraesthesia",
                      "value": "positive_paraesthesia"
                    },
                    {
                      "label": "Positive – Neural Stretch",
                      "value": "positive_neural_stretch"
                    },
                    {
                      "label": "Inconclusive",
                      "value": "inconclusive"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "femoral_nerve_stretch_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Positive – Pain",
                      "value": "positive_pain"
                    },
                    {
                      "label": "Positive – Paraesthesia",
                      "value": "positive_paraesthesia"
                    },
                    {
                      "label": "Positive – Neural Stretch",
                      "value": "positive_neural_stretch"
                    },
                    {
                      "label": "Inconclusive",
                      "value": "inconclusive"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "femoral_nerve_stretch_onset_angle_left",
                  "type": "number",
                  "suffix": "°"
                },
                {
                  "name": "femoral_nerve_stretch_onset_angle_right",
                  "type": "number",
                  "suffix": "°"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "lumbar_flexion_extension_neurodynamic",
              "label": "Lumbar Flexion / Extension Neurodynamic Response",
              "template": "minmax(250px, 1fr) 140px 140px 100px 100px",
              "cols": [
                {
                  "name": "lumbar_flexion_extension_neurodynamic_left_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Positive – Pain",
                      "value": "positive_pain"
                    },
                    {
                      "label": "Positive – Paraesthesia",
                      "value": "positive_paraesthesia"
                    },
                    {
                      "label": "Positive – Neural Stretch",
                      "value": "positive_neural_stretch"
                    },
                    {
                      "label": "Inconclusive",
                      "value": "inconclusive"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "lumbar_flexion_extension_neurodynamic_right_result",
                  "type": "single-select",
                  "options": [
                    {
                      "label": "Negative",
                      "value": "negative"
                    },
                    {
                      "label": "Positive – Pain",
                      "value": "positive_pain"
                    },
                    {
                      "label": "Positive – Paraesthesia",
                      "value": "positive_paraesthesia"
                    },
                    {
                      "label": "Positive – Neural Stretch",
                      "value": "positive_neural_stretch"
                    },
                    {
                      "label": "Inconclusive",
                      "value": "inconclusive"
                    },
                    {
                      "label": "Not Tested",
                      "value": "not_tested"
                    }
                  ]
                },
                {
                  "name": "lumbar_flexion_extension_neurodynamic_onset_angle_left",
                  "type": "number",
                  "suffix": "°"
                },
                {
                  "name": "lumbar_flexion_extension_neurodynamic_onset_angle_right",
                  "type": "number",
                  "suffix": "°"
                }
              ]
            },
            {
              "type": "textarea",
              "name": "lumbar_lower_limb_notes",
              "label": "Notes",
              "placeholder": "Clinician observations (e.g. pain reproduction, tingling, functional limitation)"
            },
            {
              "type": "textarea",
              "name": "lumbar_lower_limb_interpretation",
              "label": "Interpretation",
              "placeholder": "e.g. Neurodynamic irritability: Mild / Moderate / Severe / None"
            }
          ]
        }
      ]
    }
  ]
}