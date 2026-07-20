const schema = {
  "title": "Diabetic Foot Assessment Form",
  "sections": [
    {
      "title": "MEDICAL HISTORY",
      "fields": [
        {
          "name": "medical_history_options",
          "label": "",
          "type": "checkbox-group",
          "inlineWithLabel": true,
          "options": [
            {
              "label": "Newly diagnosed (on admission)",
              "value": "newly_diagnosed"
            },
            {
              "label": "Known case of Diabetes Mellitus (DM)",
              "value": "known_dm"
            }
          ]
        },
        {
          "name": "newly_diagnosed_option",
          "label": "Newly diagnosed:",
          "type": "radio",
          "options": [
            {
              "label": "High blood sugar",
              "value": "high_blood_sugar"
            },
            {
              "label": "Symptomatic",
              "value": "symptomatic"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ],
          "showIf": {
            "field": "medical_history_options",
            "includes": "newly_diagnosed"
          }
        },
        {
          "name": "newly_high_blood_sugar_text",
          "label": "High blood sugar (specify):",
          "type": "input",
          "showIf": {
            "field": "newly_diagnosed_option",
            "equals": "high_blood_sugar"
          },
          "placeholder": "Free text"
        },
        {
          "name": "newly_symptomatic_text",
          "label": "Symptomatic (specify):",
          "type": "input",
          "showIf": {
            "field": "newly_diagnosed_option",
            "equals": "symptomatic"
          },
          "placeholder": "Free text"
        },
        {
          "name": "newly_others_text",
          "label": "Others (specify):",
          "type": "input",
          "showIf": {
            "field": "newly_diagnosed_option",
            "equals": "others"
          },
          "placeholder": "Free text"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "dm_duration",
              "label": "Duration (years):",
              "type": "input",
              "placeholder": "years"
            },
            {
              "name": "dm_date_diagnosis",
              "label": "Date of Diagnosis:",
              "type": "date"
            }
          ],
          "showIf": {
            "field": "medical_history_options",
            "includes": "known_dm"
          }
        },
        {
          "name": "dm_type",
          "label": "Type of DM:",
          "type": "radio",
          "options": [
            {
              "label": "Type 1",
              "value": "type1"
            },
            {
              "label": "Type 2",
              "value": "type2"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ],
          "showIf": {
            "field": "medical_history_options",
            "includes": "known_dm"
          }
        },
        {
          "name": "dm_type_others",
          "label": "Others (specify):",
          "type": "input",
          "showIf": {
            "field": "dm_type",
            "equals": "others"
          },
          "placeholder": "Free text"
        },
        {
          "type": "subheading",
          "label": "Treatment:"
        },
        {
          "name": "treatment",
          "label": "",
          "type": "radio",
          "options": [
            {
              "label": "Never seek medical treatment",
              "value": "never"
            },
            {
              "label": "Self-treated",
              "value": "self"
            },
            {
              "label": "Traditional/alternative treatment",
              "value": "traditional"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Current medical treatment:"
        },
        {
          "name": "current_treatment",
          "label": "",
          "type": "radio",
          "options": [
            {
              "label": "Nil",
              "value": "nil"
            },
            {
              "label": "Diet alone",
              "value": "diet"
            },
            {
              "label": "Medication",
              "value": "medication"
            }
          ]
        },
        {
          "name": "medication_type",
          "label": "If Medication:",
          "type": "radio",
          "options": [
            {
              "label": "Oral Anti-Diabetic Agents",
              "value": "oad"
            },
            {
              "label": "Insulin",
              "value": "insulin"
            },
            {
              "label": "Combined",
              "value": "combined"
            }
          ],
          "showIf": {
            "field": "current_treatment",
            "equals": "medication"
          }
        },
        {
          "name": "medication_specify",
          "label": "Medication (specify):",
          "type": "input",
          "placeholder": "Free text",
          "showIf": {
            "field": "medication_type",
            "oneOf": [
              "oad",
              "insulin",
              "combined"
            ]
          }
        },
        {
          "type": "subheading",
          "label": "Other medical condition:"
        },
        {
          "name": "other_medical",
          "label": "",
          "type": "radio",
          "options": [
            {
              "label": "Ischaemic Heart Disease",
              "value": "ihd"
            },
            {
              "label": "Stroke",
              "value": "stroke"
            },
            {
              "label": "Hypertension",
              "value": "hypertension"
            },
            {
              "label": "Hyperlipidaemia",
              "value": "hyperlipidaemia"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "other_medical_specify",
          "label": "Others (specify):",
          "type": "input",
          "showIf": {
            "field": "other_medical",
            "equals": "others"
          },
          "placeholder": "Free text"
        },
        {
          "type": "subheading",
          "label": "Complications:"
        },
        {
          "name": "complications",
          "label": "",
          "type": "checkbox-group",
          "inlineWithLabel": true,
          "options": [
            {
              "label": "Peripheral Arterial Disease",
              "value": "pad"
            },
            {
              "label": "Neuropathy",
              "value": "neuropathy"
            },
            {
              "label": "Nephropathy",
              "value": "nephropathy"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "complications_others",
          "label": "Others (specify):",
          "type": "input",
          "showIf": {
            "field": "complications",
            "includes": "others"
          },
          "placeholder": "Free text"
        }
      ]
    },
    {
      "title": "SYMPTOMS",
      "fields": [
        {
          "type": "subheading",
          "label": "Paraesthesia (Pin & Needles)"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "paraesthesia_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "paraesthesia_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "paraesthesia_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Claudication/Rest pain"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "claudication_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "claudication_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "claudication_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Foot ulcer"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "foot_ulcer_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "foot_ulcer_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "foot_ulcer_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Amputation"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "amputation_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "amputation_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "amputation_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Orthosis/Prosthesis"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "orthosis_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "orthosis_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "orthosis_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Footwear"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "footwear_indoor",
              "label": "Indoor",
              "type": "input"
            },
            {
              "name": "footwear_outdoor",
              "label": "Outdoor",
              "type": "input"
            },
            {
              "name": "footwear_desc",
              "label": "Description",
              "type": "input"
            }
          ]
        }
      ]
    },
    {
      "title": "FOOT",
      "fields": [
        {
          "type": "info-text",
          "text": "Mark the location with an arrow or an 'X'. Use the buttons below to clear marks."
        }
      ]
    },
    {
      "title": "GENERAL EXAMINATION",
      "fields": [
        {
          "type": "info-text",
          "text": "(Kindly ✔ the appropriate box)"
        },
        {
          "type": "subheading",
          "label": "Skin condition"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "exam_skin_condition_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "exam_skin_condition_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "exam_skin_condition_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Corn/callosity"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "exam_corn_callosity_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "exam_corn_callosity_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "exam_corn_callosity_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Ulcer"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "exam_ulcer_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "exam_ulcer_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "exam_ulcer_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Bunions"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "exam_bunions_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "exam_bunions_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "exam_bunions_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Lesser toe deformities"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "exam_lesser_toe_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "exam_lesser_toe_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "exam_lesser_toe_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Charcot Joints"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "exam_charcot_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "exam_charcot_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "exam_charcot_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        }
      ]
    },
    {
      "title": "NEUROLOGICAL EXAMINATION",
      "fields": [
        {
          "type": "subheading",
          "label": "Muscle wasting"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "neuro_muscle_wasting_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "neuro_muscle_wasting_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "neuro_muscle_wasting_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Presence of proprioception"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "neuro_proprioception_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "neuro_proprioception_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "neuro_proprioception_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Abnormal monofilament test (>3/10)"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "neuro_monofilament_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "neuro_monofilament_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "neuro_monofilament_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Presence of vibration perception"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "neuro_vibration_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "neuro_vibration_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "neuro_vibration_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        }
      ]
    },
    {
      "title": "VASCULAR EXAMINATION",
      "fields": [
        {
          "type": "subheading",
          "label": "Atrophic skin changes"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "vascular_atrophic_skin_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "vascular_atrophic_skin_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "vascular_atrophic_skin_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Dystrophic nail"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "vascular_dystrophic_nail_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "vascular_dystrophic_nail_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "vascular_dystrophic_nail_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Absence of hair"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "vascular_absence_hair_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "vascular_absence_hair_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "vascular_absence_hair_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Abnormal temperature gradient"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "vascular_temp_gradient_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "vascular_temp_gradient_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "vascular_temp_gradient_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Capillary refill >3 seconds"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "vascular_capillary_refill_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "vascular_capillary_refill_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "vascular_capillary_refill_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        }
      ]
    },
    {
      "title": "PALPABLE PULSE",
      "fields": [
        {
          "type": "info-text",
          "text": "Legend: ++ (Normal), + (Weak), - (Absent)"
        },
        {
          "type": "subheading",
          "label": "Dorsalis Pedis Artery (DPA)"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "pulse_dpa_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "value": "normal",
                  "label": "++"
                },
                {
                  "value": "weak",
                  "label": "+"
                },
                {
                  "value": "absent",
                  "label": "-"
                }
              ]
            },
            {
              "name": "pulse_dpa_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "value": "normal",
                  "label": "++"
                },
                {
                  "value": "weak",
                  "label": "+"
                },
                {
                  "value": "absent",
                  "label": "-"
                }
              ]
            },
            {
              "name": "pulse_dpa_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Posterior Tibial Artery (PTA)"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "pulse_pta_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "value": "normal",
                  "label": "++"
                },
                {
                  "value": "weak",
                  "label": "+"
                },
                {
                  "value": "absent",
                  "label": "-"
                }
              ]
            },
            {
              "name": "pulse_pta_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "value": "normal",
                  "label": "++"
                },
                {
                  "value": "weak",
                  "label": "+"
                },
                {
                  "value": "absent",
                  "label": "-"
                }
              ]
            },
            {
              "name": "pulse_pta_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Popliteal Artery (PA)"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "pulse_pa_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "value": "normal",
                  "label": "++"
                },
                {
                  "value": "weak",
                  "label": "+"
                },
                {
                  "value": "absent",
                  "label": "-"
                }
              ]
            },
            {
              "name": "pulse_pa_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "value": "normal",
                  "label": "++"
                },
                {
                  "value": "weak",
                  "label": "+"
                },
                {
                  "value": "absent",
                  "label": "-"
                }
              ]
            },
            {
              "name": "pulse_pa_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Femoral Artery (FA)"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "pulse_fa_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "value": "normal",
                  "label": "++"
                },
                {
                  "value": "weak",
                  "label": "+"
                },
                {
                  "value": "absent",
                  "label": "-"
                }
              ]
            },
            {
              "name": "pulse_fa_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "value": "normal",
                  "label": "++"
                },
                {
                  "value": "weak",
                  "label": "+"
                },
                {
                  "value": "absent",
                  "label": "-"
                }
              ]
            },
            {
              "name": "pulse_fa_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        }
      ]
    },
    {
      "title": "ARTERIAL PULSE / ABI",
      "fields": [
        {
          "type": "subheading",
          "label": "Brachial (mmHg)"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "arterial_brachial_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "arterial_brachial_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "arterial_brachial_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Anterior Tibial (mmHg)"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "arterial_ant_tib_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "arterial_ant_tib_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "arterial_ant_tib_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Posterior Tibial (mmHg)"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "arterial_post_tib_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "arterial_post_tib_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "arterial_post_tib_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Ankle-Brachial Index (ABI)"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "arterial_abi_right",
              "label": "Right",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "arterial_abi_left",
              "label": "Left",
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "value": "yes"
                },
                {
                  "label": "No",
                  "value": "no"
                }
              ]
            },
            {
              "name": "arterial_abi_desc",
              "label": "Description",
              "type": "input",
              "placeholder": "Notes"
            }
          ]
        }
      ]
    },
    {
      "title": "University of Texas Classification of Diabetic Foot",
      "fields": [
        {
          "type": "info-text",
          "text": "Grade 0: Pre- or post-ulcerative lesion completely epithelialised. Grade I: Superficial wound, not involving tendon, capsule or bone. Grade II: Wound penetrating to tendon or capsule. Grade III: Wound penetrating to bone or joint. Stage A: No infection/ischaemia. Stage B: Infection. Stage C: Ischaemia. Stage D: Infection + Ischaemia."
        },
        {
          "name": "texas_grade",
          "label": "Grade",
          "type": "radio",
          "options": [
            {
              "value": "0",
              "label": "0"
            },
            {
              "value": "I",
              "label": "I"
            },
            {
              "value": "II",
              "label": "II"
            },
            {
              "value": "III",
              "label": "III"
            }
          ]
        },
        {
          "name": "texas_stage",
          "label": "Stage",
          "type": "radio",
          "options": [
            {
              "value": "A",
              "label": "A"
            },
            {
              "value": "B",
              "label": "B"
            },
            {
              "value": "C",
              "label": "C"
            },
            {
              "value": "D",
              "label": "D"
            }
          ]
        }
      ]
    },
    {
      "title": "RISK STRATIFICATION",
      "fields": [
        {
          "name": "risk_level",
          "label": "",
          "type": "radio",
          "options": [
            {
              "value": "low",
              "label": "Low risk",
              "color": "#16A34A"
            },
            {
              "value": "moderate",
              "label": "Moderate risk",
              "color": "#EAB308"
            },
            {
              "value": "high",
              "label": "High risk",
              "color": "#F97316"
            }
          ]
        }
      ]
    },
    {
      "title": "MANAGEMENT PLAN",
      "fields": [
        {
          "type": "subheading",
          "label": "Referral:"
        },
        {
          "name": "referral",
          "label": "",
          "type": "checkbox-group",
          "inlineWithLabel": true,
          "options": [
            {
              "label": "Orthopaedic",
              "value": "orthopaedic"
            },
            {
              "label": "Vascular",
              "value": "vascular"
            },
            {
              "label": "Endocrine",
              "value": "endocrine"
            },
            {
              "label": "Primary Care",
              "value": "primary_care"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "referral_others",
          "label": "Others:",
          "type": "input",
          "showIf": {
            "field": "referral",
            "includes": "others"
          }
        },
        {
          "type": "subheading",
          "label": "Follow-up:"
        },
        {
          "name": "follow_up",
          "label": "",
          "type": "checkbox-group",
          "inlineWithLabel": true,
          "options": [
            {
              "label": "3 monthly",
              "value": "3monthly"
            },
            {
              "label": "6 monthly",
              "value": "6monthly"
            },
            {
              "label": "Yearly",
              "value": "yearly"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "follow_up_others",
          "label": "Others:",
          "type": "input",
          "showIf": {
            "field": "follow_up",
            "includes": "others"
          }
        },
        {
          "type": "subheading",
          "label": "Foot care education checklist:"
        },
        {
          "name": "foot_education",
          "label": "",
          "type": "checkbox-group",
          "inlineWithLabel": false,
          "options": [
            {
              "label": "Foot hygiene",
              "value": "hygiene"
            },
            {
              "label": "Nail care",
              "value": "nail_care"
            },
            {
              "label": "Foot wear advice",
              "value": "footwear"
            },
            {
              "label": "Routine foot check",
              "value": "routine_check"
            },
            {
              "label": "Emollient use",
              "value": "emollient"
            },
            {
              "label": "Wound care",
              "value": "wound_care"
            },
            {
              "label": "Recognising active foot problems (e.g., infection/erythema/ulcer)",
              "value": "recognising"
            },
            {
              "label": "Things to avoid (e.g., massage/soak/reflexology/self-treatment)",
              "value": "avoid"
            }
          ]
        }
      ]
    }
  ]
}