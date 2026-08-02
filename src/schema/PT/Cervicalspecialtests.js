const SCHEMA = {
  "title": "Cervical – Special Tests",
  "sections": [
    {
      "title": null,
      "fields": [
        {
          "type": "grid-header",
          "cols": [
            "L Side Result",
            "R Side Result"
          ],
          "template": "minmax(300px, 1fr) 190px 190px"
        },
        {
          "type": "grid-row",
          "name": "spurling_test",
          "label": "Spurling Test",
          "template": "minmax(300px, 1fr) 190px 190px",
          "cols": [
            {
              "name": "spurling_test_l_result",
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
              "name": "spurling_test_r_result",
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
          "name": "cervical_distraction_test",
          "label": "Cervical Distraction Test",
          "template": "minmax(300px, 1fr) 190px 190px",
          "cols": [
            {
              "name": "cervical_distraction_test_l_result",
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
              "name": "cervical_distraction_test_r_result",
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
          "name": "cervical_compression_test",
          "label": "Cervical Compression Test",
          "template": "minmax(300px, 1fr) 190px 190px",
          "cols": [
            {
              "name": "cervical_compression_test_l_result",
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
              "name": "cervical_compression_test_r_result",
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
          "name": "valsalva_maneuver",
          "label": "Valsalva Maneuver",
          "template": "minmax(300px, 1fr) 190px 190px",
          "cols": [
            {
              "name": "valsalva_maneuver_l_result",
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
              "name": "valsalva_maneuver_r_result",
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
          "name": "shoulder_abduction_relief_bakody",
          "label": "Shoulder Abduction Relief Test (Bakody Sign)",
          "template": "minmax(300px, 1fr) 190px 190px",
          "cols": [
            {
              "name": "shoulder_abduction_relief_bakody_l_result",
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
              "name": "shoulder_abduction_relief_bakody_r_result",
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
          "name": "lhermitte_sign",
          "label": "Lhermitte Sign",
          "template": "minmax(300px, 1fr) 190px 190px",
          "cols": [
            {
              "name": "lhermitte_sign_l_result",
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
              "name": "lhermitte_sign_r_result",
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
          "name": "sharp_purser_test",
          "label": "Sharp-Purser Test",
          "template": "minmax(300px, 1fr) 190px 190px",
          "cols": [
            {
              "name": "sharp_purser_test_l_result",
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
              "name": "sharp_purser_test_r_result",
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
          "name": "alar_ligament_stress_test",
          "label": "Alar Ligament Stress Test",
          "template": "minmax(300px, 1fr) 190px 190px",
          "cols": [
            {
              "name": "alar_ligament_stress_test_l_result",
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
              "name": "alar_ligament_stress_test_r_result",
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
          "name": "vertebral_artery_test",
          "label": "Vertebral Artery Test",
          "template": "minmax(300px, 1fr) 190px 190px",
          "cols": [
            {
              "name": "vertebral_artery_test_l_result",
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
              "name": "vertebral_artery_test_r_result",
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
          "type": "textarea",
          "name": "cervical_special_tests_notes",
          "label": "Notes",
          "placeholder": "Free text"
        },
        {
          "type": "textarea",
          "name": "cervical_special_tests_interpretation",
          "label": "Interpretation",
          "placeholder": "Auto-inserted, editable"
        }
      ]
    }
  ]
}