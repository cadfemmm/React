const SCHEMA = {
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Symptoms History"
        },
        {
          "type": "subheading",
          "label": "Motor Symptoms"
        },
        {
          "name": "motor_muscle_weakness",
          "label": "Muscle weakness",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ]
        },
        {
          "name": "motor_muscle_weakness_sites",
          "label": "Site",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Right Upper Limb",
              "value": "rul"
            },
            {
              "label": "Left Upper Limb",
              "value": "lul"
            },
            {
              "label": "Right Lower Limb",
              "value": "rll"
            },
            {
              "label": "Left Lower Limb",
              "value": "lll"
            }
          ],
          "showIf": {
            "field": "motor_muscle_weakness",
            "equals": "Yes"
          }
        },
        {
          "name": "motor_muscle_weakness_site_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "motor_muscle_weakness",
            "equals": "Yes",
            "and": {
              "or": [
                {
                  "field": "motor_muscle_weakness_sites",
                  "includes": "rul"
                },
                {
                  "field": "motor_muscle_weakness_sites",
                  "includes": "lul"
                },
                {
                  "field": "motor_muscle_weakness_sites",
                  "includes": "rll"
                },
                {
                  "field": "motor_muscle_weakness_sites",
                  "includes": "lll"
                }
              ]
            }
          }
        },
        {
          "name": "motor_pain",
          "label": "Pain",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ]
        },
        {
          "name": "motor_pain_assessment",
          "label": "",
          "type": "assessment-launcher",
          "autoOpen": true,
          "options": [
            {
              "label": "Pain Assessment",
              "value": "pain_assessment"
            }
          ],
          "showIf": {
            "field": "motor_pain",
            "equals": "Yes"
          }
        },
        {
          "name": "motor_abnormal_movements",
          "label": "Abnormal movements",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ]
        },
        {
          "name": "motor_abnormal_movement_type",
          "label": "Movement",
          "type": "radio",
          "options": [
            {
              "label": "Tremor",
              "value": "tremor"
            },
            {
              "label": "Spasm",
              "value": "spasm"
            },
            {
              "label": "Involuntary",
              "value": "involuntary"
            }
          ],
          "showIf": {
            "field": "motor_abnormal_movements",
            "equals": "Yes"
          }
        },
        {
          "name": "motor_abnormal_movement_sites",
          "label": "Site",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Right Upper Limb",
              "value": "rul"
            },
            {
              "label": "Left Upper Limb",
              "value": "lul"
            },
            {
              "label": "Right Lower Limb",
              "value": "rll"
            },
            {
              "label": "Left Lower Limb",
              "value": "lll"
            }
          ],
          "showIf": {
            "field": "motor_abnormal_movements",
            "equals": "Yes"
          }
        },
        {
          "name": "motor_abnormal_movements_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "motor_abnormal_movements",
            "equals": "Yes"
          }
        },
        {
          "name": "motor_tight_stiff_muscles",
          "label": "Tight / Stiff muscles",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ]
        },
        {
          "name": "motor_tight_stiff_muscles_sites",
          "label": "Site",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Right Upper Limb",
              "value": "rul"
            },
            {
              "label": "Left Upper Limb",
              "value": "lul"
            },
            {
              "label": "Right Lower Limb",
              "value": "rll"
            },
            {
              "label": "Left Lower Limb",
              "value": "lll"
            }
          ],
          "showIf": {
            "field": "motor_tight_stiff_muscles",
            "equals": "Yes"
          }
        },
        {
          "name": "motor_tight_stiff_muscles_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "motor_tight_stiff_muscles",
            "equals": "Yes"
          }
        },
        {
          "name": "motor_poor_coordination",
          "label": "Poor coordination",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ]
        },
        {
          "name": "motor_muscle_fatigue",
          "label": "Muscle fatigue",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ]
        },
        {
          "name": "motor_muscle_fatigue_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "motor_muscle_fatigue",
            "equals": "Yes"
          }
        },
        {
          "name": "motor_postural_balance_issue",
          "label": "Postural / Balance issue",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ]
        },
        {
          "name": "motor_postural_balance_issue_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "motor_postural_balance_issue",
            "equals": "Yes"
          }
        },
        {
          "name": "motor_other_free_text",
          "label": "Other issues",
          "type": "textarea"
        },
        {
          "type": "subheading",
          "label": "Sensory Symptoms"
        },
        {
          "name": "sensory_numbness",
          "label": "Numbness",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ]
        },
        {
          "name": "sensory_numbness_sites",
          "label": "Site",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Right Upper Limb",
              "value": "rul"
            },
            {
              "label": "Left Upper Limb",
              "value": "lul"
            },
            {
              "label": "Right Lower Limb",
              "value": "rll"
            },
            {
              "label": "Left Lower Limb",
              "value": "lll"
            }
          ],
          "showIf": {
            "field": "sensory_numbness",
            "equals": "Yes"
          }
        },
        {
          "name": "sensory_numbness_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "sensory_numbness",
            "equals": "Yes"
          }
        },
        {
          "name": "sensory_reduced_sensation",
          "label": "Reduced sensation",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ]
        },
        {
          "name": "sensory_reduced_sensation_sites",
          "label": "Site",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Right Upper Limb",
              "value": "rul"
            },
            {
              "label": "Left Upper Limb",
              "value": "lul"
            },
            {
              "label": "Right Lower Limb",
              "value": "rll"
            },
            {
              "label": "Left Lower Limb",
              "value": "lll"
            }
          ],
          "showIf": {
            "field": "sensory_reduced_sensation",
            "equals": "Yes"
          }
        },
        {
          "name": "sensory_reduced_sensation_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "sensory_reduced_sensation",
            "equals": "Yes"
          }
        },
        {
          "name": "sensory_other_complaint",
          "label": "Other sensory complaint",
          "type": "textarea"
        },
        {
          "name": "red_flag_screening",
          "label": "Red Flag Screening",
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
          "name": "neurological_emergency",
          "label": "Neurological Emergency",
          "type": "radio",
          "labelAbove": true,
          "options": [
            {
              "label": "Progressive weakness",
              "value": "progressive_weakness"
            },
            {
              "label": "Bowel/bladder loss (suspect Cauda Equina)",
              "value": "bowel_bladder_loss"
            },
            {
              "label": "Horner's syndrome",
              "value": "horners_syndrome"
            }
          ],
          "showIf": {
            "field": "red_flag_screening",
            "equals": "yes"
          }
        },
        {
          "name": "infection_flags",
          "label": "Infection",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Fever",
              "value": "fever"
            },
            {
              "label": "Chills",
              "value": "chills"
            },
            {
              "label": "Night sweats",
              "value": "night_sweats"
            },
            {
              "label": "Persistent infection",
              "value": "persistent_infection"
            }
          ],
          "showIf": {
            "field": "red_flag_screening",
            "equals": "yes"
          }
        },
        {
          "name": "tumor_cancer_indicators",
          "label": "Tumor/Cancer Indicators",
          "type": "checkbox-group",
          "options": [
            {
              "label": "History of cancer",
              "value": "history_cancer"
            },
            {
              "label": "Unexplained weight loss",
              "value": "weight_loss"
            },
            {
              "label": "Night pain",
              "value": "night_pain"
            },
            {
              "label": "Pain not relieved by rest",
              "value": "no_relief_rest"
            }
          ],
          "showIf": {
            "field": "red_flag_screening",
            "equals": "yes"
          }
        },
        {
          "name": "trauma_fracture_flags",
          "label": "Trauma/Fracture",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Recent fall",
              "value": "recent_fall"
            },
            {
              "label": "Inability to bear weight",
              "value": "cannot_bear_weight"
            }
          ],
          "showIf": {
            "field": "red_flag_screening",
            "equals": "yes"
          }
        },
        {
          "name": "severe_persistent_pain_flags",
          "label": "Severe/Persistent Pain",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Sudden severe pain",
              "value": "sudden_severe_pain"
            },
            {
              "label": "Not improving with rest",
              "value": "no_improvement_rest"
            },
            {
              "label": "Worsening night pain",
              "value": "worsening_night_pain"
            }
          ],
          "showIf": {
            "field": "red_flag_screening",
            "equals": "yes"
          }
        },
        {
          "name": "cardiac_flags",
          "label": "Cardiac",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Chest pain",
              "value": "chest_pain"
            },
            {
              "label": "Tachycardia",
              "value": "tachycardia"
            },
            {
              "label": "Breathlessness on exertion",
              "value": "breathlessness_exertion"
            }
          ],
          "showIf": {
            "field": "red_flag_screening",
            "equals": "yes"
          }
        },
        {
          "name": "red_flag_specific",
          "label": "Specify",
          "type": "textarea",
          "showIf": {
            "field": "red_flag_screening",
            "equals": "yes"
          }
        },
        {
          "name": "arthritis_flags",
          "label": "Arthritis",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Morning stiffness",
              "value": "morning_stiffness"
            },
            {
              "label": "Peripheral joint swelling",
              "value": "peripheral_joint_swelling"
            }
          ],
          "showIf": {
            "field": "red_flag_screening",
            "equals": "yes"
          }
        },
        {
          "name": "yellow_flag_screening_present",
          "label": "Yellow Flag Screening",
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
          "name": "yellow_flag_screening",
          "label": "YELLOW FLAG SCREENING",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Fear avoidance",
              "value": "fear_avoidance"
            },
            {
              "label": "Catastrophizing",
              "value": "catastrophizing"
            },
            {
              "label": "Low mood",
              "value": "low_mood"
            },
            {
              "label": "Social stress",
              "value": "social_stress"
            },
            {
              "label": "Chronic pain behavior",
              "value": "chronic_pain_behavior"
            },
            {
              "label": "Other",
              "value": "other_yellow_flag"
            }
          ],
          "showIf": {
            "field": "yellow_flag_screening_present",
            "equals": "yes"
          }
        },
        {
          "name": "yellow_flag_screening_specify",
          "label": "Specify",
          "type": "textarea",
          "showIf": {
            "field": "yellow_flag_screening",
            "includes": "other_yellow_flag"
          }
        },
        {
          "type": "subheading",
          "label": "Condition Logic"
        },
        {
          "name": "category",
          "label": "Category",
          "type": "checkbox-group",
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "Neurological Disorders",
              "value": "stroke"
            },
            {
              "label": "Spinal Cord Injury (SCI)",
              "value": "sci"
            },
            {
              "label": "Amputation",
              "value": "amputation"
            }
          ]
        },
        {
          "name": "region",
          "label": "Region",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Upper Limb",
              "value": "upper_limb"
            },
            {
              "label": "Lower Limb",
              "value": "lower_limb"
            }
          ]
        },
        {
          "name": "amp_upper_limb_location",
          "label": "Location",
          "type": "radio",
          "options": [
            {
              "label": "Above Elbow",
              "value": "above_elbow"
            },
            {
              "label": "Below Elbow",
              "value": "below_elbow"
            },
            {
              "label": "Shoulder Disortation",
              "value": "shoulder_disortation"
            },
            {
              "label": "Rays Amputation",
              "value": "rays_amputation"
            },
            {
              "label": "Carpal / Metacarpal",
              "value": "carpal_metacarpal"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation",
            "and": {
              "field": "region",
              "includes": "upper_limb"
            }
          }
        },
        {
          "name": "amp_lower_limb_location",
          "label": "Location",
          "type": "radio",
          "options": [
            {
              "label": "Above Knee",
              "value": "above_knee"
            },
            {
              "label": "Below Knee",
              "value": "below_knee"
            },
            {
              "label": "Hip Disortation",
              "value": "hip_disortation"
            },
            {
              "label": "Rays Amputation(Toes/Fingers)",
              "value": "rays_amputation"
            },
            {
              "label": "Tarsal / Metatarsal",
              "value": "tarsal_metatarsal"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation",
            "and": {
              "field": "region",
              "includes": "lower_limb"
            }
          }
        },
        {
          "type": "subheading",
          "label": "Physical Examination"
        },
        {
          "type": "subheading",
          "label": "General Inspection - Motor"
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_muscle_bulk_side",
              "label": "Muscle Bulk",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_muscle_bulk_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_muscle_bulk_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Normal",
                  "value": "normal"
                },
                {
                  "label": "Atrophied",
                  "value": "atrophied"
                },
                {
                  "label": "Hypertrophied",
                  "value": "hypertrophied"
                }
              ]
            },
            {
              "name": "pe_muscle_bulk_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_muscle_bulk_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Normal",
                  "value": "normal"
                },
                {
                  "label": "Atrophied",
                  "value": "atrophied"
                },
                {
                  "label": "Hypertrophied",
                  "value": "hypertrophied"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_muscle_bulk_comment_right",
              "label": "Muscle Bulk Comment – Right",
              "type": "input",
              "showIf": {
                "field": "pe_muscle_bulk_right",
                "oneOf": [
                  "atrophied",
                  "hypertrophied"
                ],
                "and": {
                  "field": "pe_muscle_bulk_side",
                  "includes": "right"
                }
              }
            },
            {
              "name": "pe_muscle_bulk_comment_left",
              "label": "Muscle Bulk Comment – Left",
              "type": "input",
              "showIf": {
                "field": "pe_muscle_bulk_left",
                "oneOf": [
                  "atrophied",
                  "hypertrophied"
                ],
                "and": {
                  "field": "pe_muscle_bulk_side",
                  "includes": "left"
                }
              }
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_posture_side",
              "label": "Posture",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_posture_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_posture_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Normal",
                  "value": "normal"
                },
                {
                  "label": "Abnormal",
                  "value": "abnormal"
                }
              ]
            },
            {
              "name": "pe_posture_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_posture_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Normal",
                  "value": "normal"
                },
                {
                  "label": "Abnormal",
                  "value": "abnormal"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_posture_comment_right",
              "label": "Posture Comment – Right",
              "type": "input",
              "showIf": {
                "field": "pe_posture_right",
                "equals": "abnormal",
                "and": {
                  "field": "pe_posture_side",
                  "includes": "right"
                }
              }
            },
            {
              "name": "pe_posture_comment_left",
              "label": "Posture Comment – Left",
              "type": "input",
              "showIf": {
                "field": "pe_posture_left",
                "equals": "abnormal",
                "and": {
                  "field": "pe_posture_side",
                  "includes": "left"
                }
              }
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_deformity_side",
              "label": "Deformity",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_deformity_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_deformity_side",
                "includes": "right"
              },
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
              "name": "pe_deformity_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_deformity_side",
                "includes": "left"
              },
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
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_deformity_comment_right",
              "label": "Deformity Comment – Right",
              "type": "input",
              "showIf": {
                "field": "pe_deformity_right",
                "equals": "yes",
                "and": {
                  "field": "pe_deformity_side",
                  "includes": "right"
                }
              }
            },
            {
              "name": "pe_deformity_comment_left",
              "label": "Deformity Comment – Left",
              "type": "input",
              "showIf": {
                "field": "pe_deformity_left",
                "equals": "yes",
                "and": {
                  "field": "pe_deformity_side",
                  "includes": "left"
                }
              }
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_scars_side",
              "label": "Scars",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_scars_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_scars_side",
                "includes": "right"
              },
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
              "name": "pe_scars_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_scars_side",
                "includes": "left"
              },
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
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_scars_comment_right",
              "label": "Scars Comment – Right",
              "type": "input",
              "showIf": {
                "field": "pe_scars_right",
                "equals": "yes",
                "and": {
                  "field": "pe_scars_side",
                  "includes": "right"
                }
              }
            },
            {
              "name": "pe_scars_comment_left",
              "label": "Scars Comment – Left",
              "type": "input",
              "showIf": {
                "field": "pe_scars_left",
                "equals": "yes",
                "and": {
                  "field": "pe_scars_side",
                  "includes": "left"
                }
              }
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Tone"
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_muscle_tone_side",
              "label": "Muscle Tone",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_muscle_tone_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_muscle_tone_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Normal",
                  "value": "normal"
                },
                {
                  "label": "Hypotonia",
                  "value": "hypotonia"
                },
                {
                  "label": "Hypertonia",
                  "value": "hypertonia"
                }
              ]
            },
            {
              "name": "pe_muscle_tone_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_muscle_tone_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Normal",
                  "value": "normal"
                },
                {
                  "label": "Hypotonia",
                  "value": "hypotonia"
                },
                {
                  "label": "Hypertonia",
                  "value": "hypertonia"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_muscle_tone_comment_right",
              "label": "Muscle Tone Comment – Right",
              "type": "input",
              "showIf": {
                "field": "pe_muscle_tone_right",
                "oneOf": [
                  "hypotonia",
                  "hypertonia"
                ],
                "and": {
                  "field": "pe_muscle_tone_side",
                  "includes": "right"
                }
              }
            },
            {
              "name": "pe_muscle_tone_comment_left",
              "label": "Muscle Tone Comment – Left",
              "type": "input",
              "showIf": {
                "field": "pe_muscle_tone_left",
                "oneOf": [
                  "hypotonia",
                  "hypertonia"
                ],
                "and": {
                  "field": "pe_muscle_tone_side",
                  "includes": "left"
                }
              }
            }
          ]
        },
        {
          "name": "pe_mas_launcher",
          "label": "",
          "type": "assessment-launcher",
          "options": [
            {
              "label": "Modified Ashworth Scale (MAS)",
              "value": "mas_scale"
            }
          ]
        },
        {
          "name": "pe_inspection_specify",
          "label": "Specify",
          "type": "input"
        },
        {
          "type": "subheading",
          "label": "ROM"
        },
        {
          "name": "pe_rom_launcher",
          "label": "",
          "type": "assessment-launcher",
          "autoOpen": true,
          "options": [
            {
              "label": "Mobility of Joint Functions: ROM",
              "value": "rom"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Strength"
        },
        {
          "name": "pe_strength_assessment",
          "label": "Strength Assessment",
          "type": "radio",
          "showIf": {
            "field": "is_sci_selected",
            "equals": true
          },
          "options": [
            {
              "label": "MRC Scale",
              "value": "mrc_scale"
            }
          ]
        },
        {
          "name": "pe_strength_assessment",
          "label": "Strength Assessment",
          "type": "radio",
          "showIf": {
            "field": "is_sci_selected",
            "equals": false
          },
          "options": [
            {
              "label": "MRC Scale",
              "value": "mrc_scale"
            },
            {
              "label": "Myotome Testing",
              "value": "myotome_testing"
            }
          ]
        },
        {
          "name": "pe_mrc_launcher",
          "label": "",
          "type": "assessment-launcher",
          "autoOpen": true,
          "options": [
            {
              "label": "MRC Scale",
              "value": "mrc_scale"
            }
          ],
          "showIf": {
            "field": "pe_strength_assessment",
            "equals": "mrc_scale"
          }
        },
        {
          "name": "pe_myotome_launcher",
          "label": "",
          "type": "assessment-launcher",
          "autoOpen": true,
          "options": [
            {
              "label": "Myotome Testing",
              "value": "myotome_testing"
            }
          ],
          "showIf": {
            "field": "pe_strength_assessment",
            "equals": "myotome_testing"
          }
        },
        {
          "type": "subheading",
          "label": "Involuntary Movements"
        },
        {
          "name": "pe_involuntary_movements",
          "label": "",
          "type": "radio",
          "labelAbove": true,
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "Tremor",
              "value": "tremor"
            },
            {
              "label": "Chorea",
              "value": "chorea"
            },
            {
              "label": "Dystonia",
              "value": "dystonia"
            },
            {
              "label": "Fasciculation",
              "value": "fasciculation"
            }
          ]
        },
        {
          "name": "pe_involuntary_movements_freetext",
          "label": "Specify",
          "type": "input"
        },
        {
          "type": "subheading",
          "label": "Reflexes"
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_reflex_biceps_side",
              "label": "Biceps",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_reflex_biceps_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_reflex_biceps_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Present",
                  "value": "present"
                },
                {
                  "label": "Absent",
                  "value": "absent"
                }
              ]
            },
            {
              "name": "pe_reflex_biceps_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_reflex_biceps_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Present",
                  "value": "present"
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
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_reflex_triceps_side",
              "label": "Triceps",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_reflex_triceps_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_reflex_triceps_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Present",
                  "value": "present"
                },
                {
                  "label": "Absent",
                  "value": "absent"
                }
              ]
            },
            {
              "name": "pe_reflex_triceps_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_reflex_triceps_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Present",
                  "value": "present"
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
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_reflex_knee_side",
              "label": "Knee",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_reflex_knee_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_reflex_knee_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Present",
                  "value": "present"
                },
                {
                  "label": "Absent",
                  "value": "absent"
                }
              ]
            },
            {
              "name": "pe_reflex_knee_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_reflex_knee_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Present",
                  "value": "present"
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
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_reflex_ankle_side",
              "label": "Ankle",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_reflex_ankle_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_reflex_ankle_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Present",
                  "value": "present"
                },
                {
                  "label": "Absent",
                  "value": "absent"
                }
              ]
            },
            {
              "name": "pe_reflex_ankle_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_reflex_ankle_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Present",
                  "value": "present"
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
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_reflex_babinski_side",
              "label": "Babinski",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_reflex_babinski_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_reflex_babinski_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Present",
                  "value": "present"
                },
                {
                  "label": "Absent",
                  "value": "absent"
                }
              ]
            },
            {
              "name": "pe_reflex_babinski_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_reflex_babinski_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Present",
                  "value": "present"
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
          "type": "subheading",
          "label": "Sensory Examination (General)"
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_light_touch_area",
              "label": "Light Touch",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Upper limb",
                  "value": "upper"
                },
                {
                  "label": "Lower limb",
                  "value": "lower"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_light_touch_upper",
              "label": "Upper limb",
              "type": "radio",
              "showIf": {
                "field": "pe_light_touch_area",
                "includes": "upper"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            },
            {
              "name": "pe_light_touch_lower",
              "label": "Lower limb",
              "type": "radio",
              "showIf": {
                "field": "pe_light_touch_area",
                "includes": "lower"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_light_touch_upper_specify",
              "label": "Specify (Upper)",
              "type": "input",
              "showIf": {
                "field": "pe_light_touch_upper",
                "equals": "impaired",
                "and": {
                  "field": "pe_light_touch_area",
                  "includes": "upper"
                }
              }
            },
            {
              "name": "pe_light_touch_lower_specify",
              "label": "Specify (Lower)",
              "type": "input",
              "showIf": {
                "field": "pe_light_touch_lower",
                "equals": "impaired",
                "and": {
                  "field": "pe_light_touch_area",
                  "includes": "lower"
                }
              }
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_pinprick_area",
              "label": "Pin Prick",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Upper limb",
                  "value": "upper"
                },
                {
                  "label": "Lower limb",
                  "value": "lower"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_pinprick_upper",
              "label": "Upper limb",
              "type": "radio",
              "showIf": {
                "field": "pe_pinprick_area",
                "includes": "upper"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            },
            {
              "name": "pe_pinprick_lower",
              "label": "Lower limb",
              "type": "radio",
              "showIf": {
                "field": "pe_pinprick_area",
                "includes": "lower"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_pinprick_upper_specify",
              "label": "Specify (Upper)",
              "type": "input",
              "showIf": {
                "field": "pe_pinprick_upper",
                "equals": "impaired",
                "and": {
                  "field": "pe_pinprick_area",
                  "includes": "upper"
                }
              }
            },
            {
              "name": "pe_pinprick_lower_specify",
              "label": "Specify (Lower)",
              "type": "input",
              "showIf": {
                "field": "pe_pinprick_lower",
                "equals": "impaired",
                "and": {
                  "field": "pe_pinprick_area",
                  "includes": "lower"
                }
              }
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_proprioception_area",
              "label": "Proprioception",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Upper limb",
                  "value": "upper"
                },
                {
                  "label": "Lower limb",
                  "value": "lower"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_proprioception_upper",
              "label": "Upper limb",
              "type": "radio",
              "showIf": {
                "field": "pe_proprioception_area",
                "includes": "upper"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            },
            {
              "name": "pe_proprioception_lower",
              "label": "Lower limb",
              "type": "radio",
              "showIf": {
                "field": "pe_proprioception_area",
                "includes": "lower"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_proprioception_upper_specify",
              "label": "Specify (Upper)",
              "type": "input",
              "showIf": {
                "field": "pe_proprioception_upper",
                "equals": "impaired",
                "and": {
                  "field": "pe_proprioception_area",
                  "includes": "upper"
                }
              }
            },
            {
              "name": "pe_proprioception_lower_specify",
              "label": "Specify (Lower)",
              "type": "input",
              "showIf": {
                "field": "pe_proprioception_lower",
                "equals": "impaired",
                "and": {
                  "field": "pe_proprioception_area",
                  "includes": "lower"
                }
              }
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_vibration_area",
              "label": "Vibration",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Upper limb",
                  "value": "upper"
                },
                {
                  "label": "Lower limb",
                  "value": "lower"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_vibration_upper",
              "label": "Upper limb",
              "type": "radio",
              "showIf": {
                "field": "pe_vibration_area",
                "includes": "upper"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            },
            {
              "name": "pe_vibration_lower",
              "label": "Lower limb",
              "type": "radio",
              "showIf": {
                "field": "pe_vibration_area",
                "includes": "lower"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_vibration_upper_comment",
              "label": "Vibration – Comment (Upper)",
              "type": "input",
              "showIf": {
                "field": "pe_vibration_upper",
                "equals": "impaired",
                "and": {
                  "field": "pe_vibration_area",
                  "includes": "upper"
                }
              }
            },
            {
              "name": "pe_vibration_lower_comment",
              "label": "Vibration – Comment (Lower)",
              "type": "input",
              "showIf": {
                "field": "pe_vibration_lower",
                "equals": "impaired",
                "and": {
                  "field": "pe_vibration_area",
                  "includes": "lower"
                }
              }
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cortical_sensory_area",
              "label": "Cortical Sensory",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Upper limb",
                  "value": "upper"
                },
                {
                  "label": "Lower limb",
                  "value": "lower"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cortical_sensory_upper",
              "label": "Upper limb",
              "type": "radio",
              "showIf": {
                "field": "pe_cortical_sensory_area",
                "includes": "upper"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            },
            {
              "name": "pe_cortical_sensory_lower",
              "label": "Lower limb",
              "type": "radio",
              "showIf": {
                "field": "pe_cortical_sensory_area",
                "includes": "lower"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cortical_sensory_upper_comment",
              "label": "Cortical Sensory – Comment (Upper)",
              "type": "input",
              "showIf": {
                "field": "pe_cortical_sensory_upper",
                "equals": "impaired",
                "and": {
                  "field": "pe_cortical_sensory_area",
                  "includes": "upper"
                }
              }
            },
            {
              "name": "pe_cortical_sensory_lower_comment",
              "label": "Cortical Sensory – Comment (Lower)",
              "type": "input",
              "showIf": {
                "field": "pe_cortical_sensory_lower",
                "equals": "impaired",
                "and": {
                  "field": "pe_cortical_sensory_area",
                  "includes": "lower"
                }
              }
            }
          ]
        },
        {
          "name": "pe_cortical_sensory_specify",
          "label": "Specify",
          "type": "textarea",
          "showIf": {
            "or": [
              {
                "field": "pe_cortical_sensory_upper",
                "equals": "impaired"
              },
              {
                "field": "pe_cortical_sensory_lower",
                "equals": "impaired"
              }
            ]
          }
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "pe_temperature_upper",
              "label": "Temperature – Upper Limb",
              "type": "input"
            },
            {
              "name": "pe_temperature_lower",
              "label": "Temperature – Lower Limb",
              "type": "input"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Cranial Nerve Examination: CRANIAL NERVES (CN I–XII)"
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_1_side",
              "label": "CN I – Olfactory",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_1_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_cn_1_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            },
            {
              "name": "pe_cn_1_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_cn_1_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_1_right_specify",
              "label": "Specify (Right)",
              "type": "input",
              "showIf": {
                "field": "pe_cn_1_right",
                "equals": "impaired",
                "and": {
                  "field": "pe_cn_1_side",
                  "includes": "right"
                }
              }
            },
            {
              "name": "pe_cn_1_left_specify",
              "label": "Specify (Left)",
              "type": "input",
              "showIf": {
                "field": "pe_cn_1_left",
                "equals": "impaired",
                "and": {
                  "field": "pe_cn_1_side",
                  "includes": "left"
                }
              }
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_2_side",
              "label": "CN II – Optic",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_2_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_cn_2_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            },
            {
              "name": "pe_cn_2_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_cn_2_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_2_right_specify",
              "label": "Specify (Right)",
              "type": "input",
              "showIf": {
                "field": "pe_cn_2_right",
                "equals": "impaired",
                "and": {
                  "field": "pe_cn_2_side",
                  "includes": "right"
                }
              }
            },
            {
              "name": "pe_cn_2_left_specify",
              "label": "Specify (Left)",
              "type": "input",
              "showIf": {
                "field": "pe_cn_2_left",
                "equals": "impaired",
                "and": {
                  "field": "pe_cn_2_side",
                  "includes": "left"
                }
              }
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_3_side",
              "label": "CN III – Oculomotor",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_3_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_cn_3_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            },
            {
              "name": "pe_cn_3_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_cn_3_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_3_right_specify",
              "label": "Specify (Right)",
              "type": "input",
              "showIf": {
                "field": "pe_cn_3_right",
                "equals": "impaired",
                "and": {
                  "field": "pe_cn_3_side",
                  "includes": "right"
                }
              }
            },
            {
              "name": "pe_cn_3_left_specify",
              "label": "Specify (Left)",
              "type": "input",
              "showIf": {
                "field": "pe_cn_3_left",
                "equals": "impaired",
                "and": {
                  "field": "pe_cn_3_side",
                  "includes": "left"
                }
              }
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_4_side",
              "label": "CN IV – Trochlear",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_4_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_cn_4_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            },
            {
              "name": "pe_cn_4_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_cn_4_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_4_right_specify",
              "label": "Specify (Right)",
              "type": "input",
              "showIf": {
                "field": "pe_cn_4_right",
                "equals": "impaired",
                "and": {
                  "field": "pe_cn_4_side",
                  "includes": "right"
                }
              }
            },
            {
              "name": "pe_cn_4_left_specify",
              "label": "Specify (Left)",
              "type": "input",
              "showIf": {
                "field": "pe_cn_4_left",
                "equals": "impaired",
                "and": {
                  "field": "pe_cn_4_side",
                  "includes": "left"
                }
              }
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_5_side",
              "label": "CN V – Trigeminal",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_5_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_cn_5_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            },
            {
              "name": "pe_cn_5_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_cn_5_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_5_right_specify",
              "label": "Specify (Right)",
              "type": "input",
              "showIf": {
                "field": "pe_cn_5_right",
                "equals": "impaired",
                "and": {
                  "field": "pe_cn_5_side",
                  "includes": "right"
                }
              }
            },
            {
              "name": "pe_cn_5_left_specify",
              "label": "Specify (Left)",
              "type": "input",
              "showIf": {
                "field": "pe_cn_5_left",
                "equals": "impaired",
                "and": {
                  "field": "pe_cn_5_side",
                  "includes": "left"
                }
              }
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_6_side",
              "label": "CN VI – Abducens",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_6_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_cn_6_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            },
            {
              "name": "pe_cn_6_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_cn_6_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_6_right_specify",
              "label": "Specify (Right)",
              "type": "input",
              "showIf": {
                "field": "pe_cn_6_right",
                "equals": "impaired",
                "and": {
                  "field": "pe_cn_6_side",
                  "includes": "right"
                }
              }
            },
            {
              "name": "pe_cn_6_left_specify",
              "label": "Specify (Left)",
              "type": "input",
              "showIf": {
                "field": "pe_cn_6_left",
                "equals": "impaired",
                "and": {
                  "field": "pe_cn_6_side",
                  "includes": "left"
                }
              }
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_7_side",
              "label": "CN VII – Facial",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_7_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_cn_7_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            },
            {
              "name": "pe_cn_7_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_cn_7_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_7_right_specify",
              "label": "Specify (Right)",
              "type": "input",
              "showIf": {
                "field": "pe_cn_7_right",
                "equals": "impaired",
                "and": {
                  "field": "pe_cn_7_side",
                  "includes": "right"
                }
              }
            },
            {
              "name": "pe_cn_7_left_specify",
              "label": "Specify (Left)",
              "type": "input",
              "showIf": {
                "field": "pe_cn_7_left",
                "equals": "impaired",
                "and": {
                  "field": "pe_cn_7_side",
                  "includes": "left"
                }
              }
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_8_side",
              "label": "CN VIII – Vestibulocochlear",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_8_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_cn_8_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            },
            {
              "name": "pe_cn_8_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_cn_8_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_8_right_specify",
              "label": "Specify (Right)",
              "type": "input",
              "showIf": {
                "field": "pe_cn_8_right",
                "equals": "impaired",
                "and": {
                  "field": "pe_cn_8_side",
                  "includes": "right"
                }
              }
            },
            {
              "name": "pe_cn_8_left_specify",
              "label": "Specify (Left)",
              "type": "input",
              "showIf": {
                "field": "pe_cn_8_left",
                "equals": "impaired",
                "and": {
                  "field": "pe_cn_8_side",
                  "includes": "left"
                }
              }
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_9_10_side",
              "label": "CN IX, X – Glossopharyngeal / Vagus",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_9_10_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_cn_9_10_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            },
            {
              "name": "pe_cn_9_10_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_cn_9_10_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_9_10_right_specify",
              "label": "Specify (Right)",
              "type": "input",
              "showIf": {
                "field": "pe_cn_9_10_right",
                "equals": "impaired",
                "and": {
                  "field": "pe_cn_9_10_side",
                  "includes": "right"
                }
              }
            },
            {
              "name": "pe_cn_9_10_left_specify",
              "label": "Specify (Left)",
              "type": "input",
              "showIf": {
                "field": "pe_cn_9_10_left",
                "equals": "impaired",
                "and": {
                  "field": "pe_cn_9_10_side",
                  "includes": "left"
                }
              }
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_11_side",
              "label": "CN XI – Accessory",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_11_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_cn_11_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            },
            {
              "name": "pe_cn_11_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_cn_11_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_11_right_specify",
              "label": "Specify (Right)",
              "type": "input",
              "showIf": {
                "field": "pe_cn_11_right",
                "equals": "impaired",
                "and": {
                  "field": "pe_cn_11_side",
                  "includes": "right"
                }
              }
            },
            {
              "name": "pe_cn_11_left_specify",
              "label": "Specify (Left)",
              "type": "input",
              "showIf": {
                "field": "pe_cn_11_left",
                "equals": "impaired",
                "and": {
                  "field": "pe_cn_11_side",
                  "includes": "left"
                }
              }
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_12_side",
              "label": "CN XII – Hypoglossal",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_12_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_cn_12_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            },
            {
              "name": "pe_cn_12_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_cn_12_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_cn_12_right_specify",
              "label": "Specify (Right)",
              "type": "input",
              "showIf": {
                "field": "pe_cn_12_right",
                "equals": "impaired",
                "and": {
                  "field": "pe_cn_12_side",
                  "includes": "right"
                }
              }
            },
            {
              "name": "pe_cn_12_left_specify",
              "label": "Specify (Left)",
              "type": "input",
              "showIf": {
                "field": "pe_cn_12_left",
                "equals": "impaired",
                "and": {
                  "field": "pe_cn_12_side",
                  "includes": "left"
                }
              }
            }
          ]
        },
        {
          "name": "pe_cranial_nerve_specify",
          "label": "Specify",
          "type": "textarea"
        },
        {
          "type": "subheading",
          "label": "Coordination and cerebellar function"
        },
        {
          "name": "pe_titubation",
          "label": "Titubation",
          "type": "radio",
          "options": [
            {
              "label": "Present",
              "value": "present"
            },
            {
              "label": "Absent",
              "value": "absent"
            }
          ]
        },
        {
          "name": "pe_titubation_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "pe_titubation",
            "equals": "present"
          }
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_nystagmus_side",
              "label": "Nystagmus",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_nystagmus_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_nystagmus_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Present",
                  "value": "present"
                },
                {
                  "label": "Absent",
                  "value": "absent"
                }
              ]
            },
            {
              "name": "pe_nystagmus_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_nystagmus_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Present",
                  "value": "present"
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
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_nystagmus_right_specify",
              "label": "Specify (Right)",
              "type": "input",
              "showIf": {
                "field": "pe_nystagmus_right",
                "equals": "present",
                "and": {
                  "field": "pe_nystagmus_side",
                  "includes": "right"
                }
              }
            },
            {
              "name": "pe_nystagmus_left_specify",
              "label": "Specify (Left)",
              "type": "input",
              "showIf": {
                "field": "pe_nystagmus_left",
                "equals": "present",
                "and": {
                  "field": "pe_nystagmus_side",
                  "includes": "left"
                }
              }
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_finger_nose_side",
              "label": "Finger-nose Test",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_finger_nose_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_finger_nose_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Present",
                  "value": "present"
                },
                {
                  "label": "Absent",
                  "value": "absent"
                }
              ]
            },
            {
              "name": "pe_finger_nose_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_finger_nose_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Present",
                  "value": "present"
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
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_finger_nose_right_specify",
              "label": "Specify (Right)",
              "type": "input",
              "showIf": {
                "field": "pe_finger_nose_right",
                "equals": "present",
                "and": {
                  "field": "pe_finger_nose_side",
                  "includes": "right"
                }
              }
            },
            {
              "name": "pe_finger_nose_left_specify",
              "label": "Specify (Left)",
              "type": "input",
              "showIf": {
                "field": "pe_finger_nose_left",
                "equals": "present",
                "and": {
                  "field": "pe_finger_nose_side",
                  "includes": "left"
                }
              }
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_rebound_side",
              "label": "Rebound Phenomenon",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_rebound_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_rebound_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Present",
                  "value": "present"
                },
                {
                  "label": "Absent",
                  "value": "absent"
                }
              ]
            },
            {
              "name": "pe_rebound_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_rebound_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Present",
                  "value": "present"
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
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_rebound_right_specify",
              "label": "Specify (Right)",
              "type": "input",
              "showIf": {
                "field": "pe_rebound_right",
                "equals": "present",
                "and": {
                  "field": "pe_rebound_side",
                  "includes": "right"
                }
              }
            },
            {
              "name": "pe_rebound_left_specify",
              "label": "Specify (Left)",
              "type": "input",
              "showIf": {
                "field": "pe_rebound_left",
                "equals": "present",
                "and": {
                  "field": "pe_rebound_side",
                  "includes": "left"
                }
              }
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_pronator_drift_side",
              "label": "Pronator drift",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_pronator_drift_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_pronator_drift_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Present",
                  "value": "present"
                },
                {
                  "label": "Absent",
                  "value": "absent"
                }
              ]
            },
            {
              "name": "pe_pronator_drift_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_pronator_drift_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Present",
                  "value": "present"
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
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_pronator_drift_right_specify",
              "label": "Specify (Right)",
              "type": "input",
              "showIf": {
                "field": "pe_pronator_drift_right",
                "equals": "present",
                "and": {
                  "field": "pe_pronator_drift_side",
                  "includes": "right"
                }
              }
            },
            {
              "name": "pe_pronator_drift_left_specify",
              "label": "Specify (Left)",
              "type": "input",
              "showIf": {
                "field": "pe_pronator_drift_left",
                "equals": "present",
                "and": {
                  "field": "pe_pronator_drift_side",
                  "includes": "left"
                }
              }
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_dysdiadochokinesia_side",
              "label": "Dysdiadochokinesia",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_dysdiadochokinesia_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_dysdiadochokinesia_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Present",
                  "value": "present"
                },
                {
                  "label": "Absent",
                  "value": "absent"
                }
              ]
            },
            {
              "name": "pe_dysdiadochokinesia_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_dysdiadochokinesia_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Present",
                  "value": "present"
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
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_dysdiadochokinesia_right_specify",
              "label": "Specify (Right)",
              "type": "input",
              "showIf": {
                "field": "pe_dysdiadochokinesia_right",
                "equals": "present",
                "and": {
                  "field": "pe_dysdiadochokinesia_side",
                  "includes": "right"
                }
              }
            },
            {
              "name": "pe_dysdiadochokinesia_left_specify",
              "label": "Specify (Left)",
              "type": "input",
              "showIf": {
                "field": "pe_dysdiadochokinesia_left",
                "equals": "present",
                "and": {
                  "field": "pe_dysdiadochokinesia_side",
                  "includes": "left"
                }
              }
            }
          ]
        },
        {
          "name": "pe_romberg",
          "label": "Romberg's Test",
          "type": "radio",
          "options": [
            {
              "label": "Present",
              "value": "present"
            },
            {
              "label": "Absent",
              "value": "absent"
            }
          ]
        },
        {
          "name": "pe_romberg_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "pe_romberg",
            "equals": "present"
          }
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_heel_shin_side",
              "label": "Heel shin Test",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_heel_shin_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_heel_shin_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Present",
                  "value": "present"
                },
                {
                  "label": "Absent",
                  "value": "absent"
                }
              ]
            },
            {
              "name": "pe_heel_shin_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_heel_shin_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Present",
                  "value": "present"
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
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_heel_shin_right_specify",
              "label": "Specify (Right)",
              "type": "input",
              "showIf": {
                "field": "pe_heel_shin_right",
                "equals": "present",
                "and": {
                  "field": "pe_heel_shin_side",
                  "includes": "right"
                }
              }
            },
            {
              "name": "pe_heel_shin_left_specify",
              "label": "Specify (Left)",
              "type": "input",
              "showIf": {
                "field": "pe_heel_shin_left",
                "equals": "present",
                "and": {
                  "field": "pe_heel_shin_side",
                  "includes": "left"
                }
              }
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_pendular_reflexes_side",
              "label": "Pendular Reflexes",
              "type": "checkbox-group",
              "position": "side",
              "options": [
                {
                  "label": "Right",
                  "value": "right"
                },
                {
                  "label": "Left",
                  "value": "left"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_pendular_reflexes_right",
              "label": "Right",
              "type": "radio",
              "showIf": {
                "field": "pe_pendular_reflexes_side",
                "includes": "right"
              },
              "options": [
                {
                  "label": "Present",
                  "value": "present"
                },
                {
                  "label": "Absent",
                  "value": "absent"
                }
              ]
            },
            {
              "name": "pe_pendular_reflexes_left",
              "label": "Left",
              "type": "radio",
              "showIf": {
                "field": "pe_pendular_reflexes_side",
                "includes": "left"
              },
              "options": [
                {
                  "label": "Present",
                  "value": "present"
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
          "type": "row",
          "compact": true,
          "fields": [
            {
              "name": "pe_pendular_reflexes_right_specify",
              "label": "Specify (Right)",
              "type": "input",
              "showIf": {
                "field": "pe_pendular_reflexes_right",
                "equals": "present",
                "and": {
                  "field": "pe_pendular_reflexes_side",
                  "includes": "right"
                }
              }
            },
            {
              "name": "pe_pendular_reflexes_left_specify",
              "label": "Specify (Left)",
              "type": "input",
              "showIf": {
                "field": "pe_pendular_reflexes_left",
                "equals": "present",
                "and": {
                  "field": "pe_pendular_reflexes_side",
                  "includes": "left"
                }
              }
            }
          ]
        },
        {
          "name": "pe_tandem_gait",
          "label": "Tandem Gait",
          "type": "radio",
          "options": [
            {
              "label": "Present",
              "value": "present"
            },
            {
              "label": "Absent",
              "value": "absent"
            }
          ]
        },
        {
          "name": "pe_tandem_gait_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "pe_tandem_gait",
            "equals": "present"
          }
        },
        {
          "type": "subheading",
          "label": "Special Tests (If Indicated)"
        },
        {
          "name": "pe_special_region",
          "label": "Region",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Cervical (Neck)",
              "value": "cervical"
            },
            {
              "label": "Shoulder",
              "value": "shoulder"
            },
            {
              "label": "Lumbar (L1-L5) (Lower Back)",
              "value": "lumbar"
            },
            {
              "label": "Knee",
              "value": "knee"
            },
            {
              "label": "Ankle",
              "value": "ankle"
            },
            {
              "label": "Thoracic Spine (T1-T5) (upper and mid-back)",
              "value": "thoracic_spine"
            },
            {
              "label": "Hip",
              "value": "hip"
            },
            {
              "label": "Elbow",
              "value": "elbow"
            },
            {
              "label": "Wrist",
              "value": "wrist"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Cervical (Neck)",
          "showIf": {
            "field": "pe_special_region",
            "includes": "cervical"
          }
        },
        {
          "name": "pe_special_cervical_tests",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Spurling maneuver",
              "value": "spurling"
            },
            {
              "label": "Shoulder abduction sign",
              "value": "shoulder_abduction_sign"
            },
            {
              "label": "Neck distraction test",
              "value": "neck_distraction"
            },
            {
              "label": "Vasalva test",
              "value": "vasalva"
            },
            {
              "label": "Lhermitte's sign",
              "value": "lhermittes"
            }
          ],
          "showIf": {
            "field": "pe_special_region",
            "includes": "cervical"
          }
        },
        {
          "name": "pe_special_cervical_spurling",
          "label": "Spurling maneuver",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_cervical_tests",
            "includes": "spurling"
          }
        },
        {
          "name": "pe_special_cervical_shoulder_abduction",
          "label": "Shoulder abduction sign",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_cervical_tests",
            "includes": "shoulder_abduction_sign"
          }
        },
        {
          "name": "pe_special_cervical_neck_distraction",
          "label": "Neck distraction test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_cervical_tests",
            "includes": "neck_distraction"
          }
        },
        {
          "name": "pe_special_cervical_vasalva",
          "label": "Vasalva test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_cervical_tests",
            "includes": "vasalva"
          }
        },
        {
          "name": "pe_special_cervical_lhermittes",
          "label": "Lhermitte's sign",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_cervical_tests",
            "includes": "lhermittes"
          }
        },
        {
          "type": "subheading",
          "label": "Shoulder",
          "showIf": {
            "field": "pe_special_region",
            "includes": "shoulder"
          }
        },
        {
          "name": "pe_special_shoulder_tests",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Scalf test",
              "value": "scalf"
            },
            {
              "label": "Yergason test",
              "value": "yergason"
            },
            {
              "label": "Speed test",
              "value": "speed"
            },
            {
              "label": "Empty can test",
              "value": "empty_can"
            },
            {
              "label": "Bellt press test",
              "value": "bellt_press"
            },
            {
              "label": "External rotation strength test",
              "value": "external_rotation_strength"
            },
            {
              "label": "Drop arm test",
              "value": "drop_arm"
            },
            {
              "label": "Neer's test",
              "value": "neers"
            },
            {
              "label": "Hawkins Kennedy test",
              "value": "hawkins_kennedy"
            }
          ],
          "showIf": {
            "field": "pe_special_region",
            "includes": "shoulder"
          }
        },
        {
          "name": "pe_special_shoulder_scalf",
          "label": "Scalf test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_shoulder_tests",
            "includes": "scalf"
          }
        },
        {
          "name": "pe_special_shoulder_yergason",
          "label": "Yergason test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_shoulder_tests",
            "includes": "yergason"
          }
        },
        {
          "name": "pe_special_shoulder_speed",
          "label": "Speed test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_shoulder_tests",
            "includes": "speed"
          }
        },
        {
          "name": "pe_special_shoulder_empty_can",
          "label": "Empty can test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_shoulder_tests",
            "includes": "empty_can"
          }
        },
        {
          "name": "pe_special_shoulder_bellt_press",
          "label": "Bellt press test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_shoulder_tests",
            "includes": "bellt_press"
          }
        },
        {
          "name": "pe_special_shoulder_external_rotation",
          "label": "External rotation strength test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_shoulder_tests",
            "includes": "external_rotation_strength"
          }
        },
        {
          "name": "pe_special_shoulder_drop_arm",
          "label": "Drop arm test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_shoulder_tests",
            "includes": "drop_arm"
          }
        },
        {
          "name": "pe_special_shoulder_neers",
          "label": "Neer's test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_shoulder_tests",
            "includes": "neers"
          }
        },
        {
          "name": "pe_special_shoulder_hawkins_kennedy",
          "label": "Hawkins Kennedy test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_shoulder_tests",
            "includes": "hawkins_kennedy"
          }
        },
        {
          "type": "subheading",
          "label": "Elbow",
          "showIf": {
            "field": "pe_special_region",
            "includes": "elbow"
          }
        },
        {
          "name": "pe_special_elbow_tests",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Cozen's test",
              "value": "cozens"
            },
            {
              "label": "Mudsleys test",
              "value": "mudsleys"
            }
          ],
          "showIf": {
            "field": "pe_special_region",
            "includes": "elbow"
          }
        },
        {
          "name": "pe_special_elbow_cozens",
          "label": "Cozen's test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_elbow_tests",
            "includes": "cozens"
          }
        },
        {
          "name": "pe_special_elbow_mudsleys",
          "label": "Mudsleys test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_elbow_tests",
            "includes": "mudsleys"
          }
        },
        {
          "type": "subheading",
          "label": "Lumbar (L1-L5) (Lower Back)",
          "showIf": {
            "field": "pe_special_region",
            "includes": "lumbar"
          }
        },
        {
          "name": "pe_special_lumbar_tests",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Straight leg raising test",
              "value": "slr"
            },
            {
              "label": "Kemp's test",
              "value": "kemps"
            },
            {
              "label": "FABER",
              "value": "faber"
            },
            {
              "label": "Thigh thrust",
              "value": "thigh_thrust"
            },
            {
              "label": "Compression test",
              "value": "compression"
            },
            {
              "label": "Sacral trust",
              "value": "sacral_trust"
            },
            {
              "label": "FADER",
              "value": "fader"
            },
            {
              "label": "FAIR",
              "value": "fair"
            }
          ],
          "showIf": {
            "field": "pe_special_region",
            "includes": "lumbar"
          }
        },
        {
          "name": "pe_special_lumbar_slr",
          "label": "Straight leg raising test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_lumbar_tests",
            "includes": "slr"
          }
        },
        {
          "name": "pe_special_lumbar_kemps",
          "label": "Kemp's test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_lumbar_tests",
            "includes": "kemps"
          }
        },
        {
          "name": "pe_special_lumbar_faber",
          "label": "FABER",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_lumbar_tests",
            "includes": "faber"
          }
        },
        {
          "name": "pe_special_lumbar_thigh_thrust",
          "label": "Thigh thrust",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_lumbar_tests",
            "includes": "thigh_thrust"
          }
        },
        {
          "name": "pe_special_lumbar_compression",
          "label": "Compression test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_lumbar_tests",
            "includes": "compression"
          }
        },
        {
          "name": "pe_special_lumbar_sacral_trust",
          "label": "Sacral trust",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_lumbar_tests",
            "includes": "sacral_trust"
          }
        },
        {
          "name": "pe_special_lumbar_fader",
          "label": "FADER",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_lumbar_tests",
            "includes": "fader"
          }
        },
        {
          "name": "pe_special_lumbar_fair",
          "label": "FAIR",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_lumbar_tests",
            "includes": "fair"
          }
        },
        {
          "type": "subheading",
          "label": "Knee",
          "showIf": {
            "field": "pe_special_region",
            "includes": "knee"
          }
        },
        {
          "name": "pe_special_knee_tests",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Varus stress test",
              "value": "varus_stress"
            },
            {
              "label": "Valgus stress test",
              "value": "valgus_stress"
            },
            {
              "label": "Anterior drawer test",
              "value": "anterior_drawer"
            },
            {
              "label": "Posterior drawer test",
              "value": "posterior_drawer"
            },
            {
              "label": "Mc Murray test",
              "value": "mc_murray"
            }
          ],
          "showIf": {
            "field": "pe_special_region",
            "includes": "knee"
          }
        },
        {
          "name": "pe_special_knee_varus",
          "label": "Varus stress test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_knee_tests",
            "includes": "varus_stress"
          }
        },
        {
          "name": "pe_special_knee_valgus",
          "label": "Valgus stress test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_knee_tests",
            "includes": "valgus_stress"
          }
        },
        {
          "name": "pe_special_knee_anterior_drawer",
          "label": "Anterior drawer test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_knee_tests",
            "includes": "anterior_drawer"
          }
        },
        {
          "name": "pe_special_knee_posterior_drawer",
          "label": "Posterior drawer test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_knee_tests",
            "includes": "posterior_drawer"
          }
        },
        {
          "name": "pe_special_knee_mc_murray",
          "label": "Mc Murray test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_knee_tests",
            "includes": "mc_murray"
          }
        },
        {
          "type": "subheading",
          "label": "Ankle",
          "showIf": {
            "field": "pe_special_region",
            "includes": "ankle"
          }
        },
        {
          "name": "pe_special_ankle_tests",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Anterior drawer test",
              "value": "anterior_drawer"
            },
            {
              "label": "Talar tilt test",
              "value": "talar_tilt"
            },
            {
              "label": "Inversion stress test",
              "value": "inversion_stress"
            }
          ],
          "showIf": {
            "field": "pe_special_region",
            "includes": "ankle"
          }
        },
        {
          "name": "pe_special_ankle_anterior_drawer",
          "label": "Anterior drawer test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_ankle_tests",
            "includes": "anterior_drawer"
          }
        },
        {
          "name": "pe_special_ankle_talar_tilt",
          "label": "Talar tilt test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_ankle_tests",
            "includes": "talar_tilt"
          }
        },
        {
          "name": "pe_special_ankle_inversion_stress",
          "label": "Inversion stress test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_ankle_tests",
            "includes": "inversion_stress"
          }
        },
        {
          "type": "subheading",
          "label": "Thoracic Spine (T1-T5) (upper and mid-back)",
          "showIf": {
            "field": "pe_special_region",
            "includes": "thoracic_spine"
          }
        },
        {
          "name": "pe_special_thoracic_tests",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Kemp's test",
              "value": "kemps"
            }
          ],
          "showIf": {
            "field": "pe_special_region",
            "includes": "thoracic_spine"
          }
        },
        {
          "name": "pe_special_thoracic_kemps",
          "label": "Kemp's test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_thoracic_tests",
            "includes": "kemps"
          }
        },
        {
          "type": "subheading",
          "label": "Hip",
          "showIf": {
            "field": "pe_special_region",
            "includes": "hip"
          }
        },
        {
          "name": "pe_special_hip_tests",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Ober's test",
              "value": "obers"
            },
            {
              "label": "Trendelenburg test",
              "value": "trendelenburg"
            }
          ],
          "showIf": {
            "field": "pe_special_region",
            "includes": "hip"
          }
        },
        {
          "name": "pe_special_hip_obers",
          "label": "Ober's test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_hip_tests",
            "includes": "obers"
          }
        },
        {
          "name": "pe_special_hip_trendelenburg",
          "label": "Trendelenburg test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_hip_tests",
            "includes": "trendelenburg"
          }
        },
        {
          "type": "subheading",
          "label": "Wrist",
          "showIf": {
            "field": "pe_special_region",
            "includes": "wrist"
          }
        },
        {
          "name": "pe_special_wrist_tests",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Tinnel sign",
              "value": "tinnel"
            },
            {
              "label": "Phallen's test",
              "value": "phallens"
            }
          ],
          "showIf": {
            "field": "pe_special_region",
            "includes": "wrist"
          }
        },
        {
          "name": "pe_special_wrist_tinnel",
          "label": "Tinnel sign",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_wrist_tests",
            "includes": "tinnel"
          }
        },
        {
          "name": "pe_special_wrist_phallens",
          "label": "Phallen's test",
          "type": "radio",
          "options": [
            {
              "label": "Positive",
              "value": "positive"
            },
            {
              "label": "Negative",
              "value": "negative"
            }
          ],
          "showIf": {
            "field": "pe_special_wrist_tests",
            "includes": "phallens"
          }
        },
        {
          "type": "subheading",
          "label": "Goals"
        },
        {
          "name": "physical_goals",
          "type": "textarea",
          "placeholder": "Enter goals"
        },
        {
          "type": "subheading",
          "label": "Plan"
        },
        {
          "name": "physical_plan",
          "type": "textarea",
          "placeholder": "Enter plan"
        },
        {
          "name": "sci_asia_launcher",
          "label": "",
          "type": "assessment-launcher",
          "autoOpen": true,
          "options": [
            {
              "label": "ASIA / ISNCSCI Assessment",
              "value": "asia_sci"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "sci"
          }
        },
        {
          "type": "subheading",
          "label": "AMPUTATION HISTORY",
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_amputation",
          "label": "Amputation",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_site",
          "label": "Site of Amputation",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Right",
              "value": "right"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation",
            "and": {
              "field": "amp_amputation",
              "equals": "Yes"
            }
          }
        },
        {
          "name": "amp_date_operation",
          "label": "Date of Operation/Amputation",
          "type": "date",
          "showIf": {
            "field": "category",
            "includes": "amputation",
            "and": {
              "field": "amp_amputation",
              "equals": "Yes"
            }
          }
        },
        {
          "name": "amp_indication",
          "label": "Indication for Amputation",
          "type": "radio",
          "labelAbove": true,
          "options": [
            {
              "label": "Diabetic foot complication",
              "value": "diabetic_foot"
            },
            {
              "label": "Traumatic",
              "value": "traumatic"
            },
            {
              "label": "Peripheral vascular disease",
              "value": "pvd"
            },
            {
              "label": "Tumour",
              "value": "tumour"
            },
            {
              "label": "Congenital",
              "value": "congenital"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation",
            "and": {
              "field": "amp_amputation",
              "equals": "Yes"
            }
          }
        },
        {
          "name": "amp_wound_healing",
          "label": "Post-operative Wound Healing",
          "type": "radio",
          "labelAbove": true,
          "options": [
            {
              "label": "Satisfactory",
              "value": "satisfactory"
            },
            {
              "label": "Delayed",
              "value": "delayed"
            },
            {
              "label": "Infection present",
              "value": "infection_present"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation",
            "and": {
              "field": "amp_amputation",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "subheading",
          "label": "PROSTHESIS HISTORY",
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_prosthesis_restored",
          "label": "Prosthesis Restored",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_prosthesis_type",
          "label": "Type of Prosthesis",
          "type": "input",
          "showIf": {
            "field": "category",
            "includes": "amputation",
            "and": {
              "field": "amp_prosthesis_restored",
              "equals": "Yes"
            }
          }
        },
        {
          "name": "amp_prosthesis_date_fitting",
          "label": "Date of Fitting",
          "type": "date",
          "showIf": {
            "field": "category",
            "includes": "amputation",
            "and": {
              "field": "amp_prosthesis_restored",
              "equals": "Yes"
            }
          }
        },
        {
          "name": "amp_prosthesis_supplier",
          "label": "Supplier / Prosthetic Center",
          "type": "input",
          "showIf": {
            "field": "category",
            "includes": "amputation",
            "and": {
              "field": "amp_prosthesis_restored",
              "equals": "Yes"
            }
          }
        },
        {
          "name": "amp_prosthesis_issues",
          "label": "Any Prosthesis-related issues",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation",
            "and": {
              "field": "amp_prosthesis_restored",
              "equals": "Yes"
            }
          }
        },
        {
          "name": "amp_prosthesis_issues_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "category",
            "includes": "amputation",
            "and": {
              "field": "amp_prosthesis_restored",
              "equals": "Yes",
              "and": {
                "field": "amp_prosthesis_issues",
                "equals": "Yes"
              }
            }
          }
        },
        {
          "name": "amp_premorbid_mobility",
          "label": "PRE-AMPUTATION FUNCTIONAL STATUS (Premorbid Mobility)",
          "type": "radio",
          "labelAbove": true,
          "options": [
            {
              "label": "Independent without aid",
              "value": "independent"
            },
            {
              "label": "With walking aid",
              "value": "walking_aid"
            },
            {
              "label": "Household ambulator",
              "value": "household_ambulator"
            },
            {
              "label": "Wheelchair dependent",
              "value": "wheelchair_dependent"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "type": "subheading",
          "label": "PHYSICAL EXAMINATION",
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "type": "subheading",
          "label": "BODY FUNCTIONS",
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_inspection",
          "label": "Inspection",
          "type": "textarea",
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_observe_for",
          "label": "Observe for",
          "type": "radio",
          "labelAbove": true,
          "options": [
            {
              "label": "Residual limb condition",
              "value": "residual_limb"
            },
            {
              "label": "Posture",
              "value": "posture"
            },
            {
              "label": "Muscle wasting",
              "value": "muscle_wasting"
            },
            {
              "label": "Skin changes",
              "value": "skin_changes"
            },
            {
              "label": "Deformity",
              "value": "deformity"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_palpation",
          "label": "Palpation",
          "type": "radio",
          "options": [
            {
              "label": "Normal",
              "value": "normal"
            },
            {
              "label": "Warmth",
              "value": "warmth"
            },
            {
              "label": "Erythematous",
              "value": "erythematous"
            },
            {
              "label": "Tenderness",
              "value": "tenderness"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_involuntary_movement",
          "label": "Involuntary Movement Functions",
          "type": "radio",
          "options": [
            {
              "label": "Tremor",
              "value": "tremor"
            },
            {
              "label": "Chorea",
              "value": "chorea"
            },
            {
              "label": "Dystonia",
              "value": "dystonia"
            },
            {
              "label": "Dyskinesia",
              "value": "dyskinesia"
            },
            {
              "label": "Athetosis",
              "value": "athetosis"
            },
            {
              "label": "Nil",
              "value": "nil"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "type": "subheading",
          "label": "Sensory Functions & Pain",
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "type": "subheading",
          "label": "Sensory Examination",
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_light_touch",
          "label": "Light Touch",
          "type": "radio",
          "options": [
            {
              "label": "Intact",
              "value": "intact"
            },
            {
              "label": "Absent",
              "value": "absent"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_pin_prick",
          "label": "Pin Prick",
          "type": "radio",
          "options": [
            {
              "label": "Intact",
              "value": "intact"
            },
            {
              "label": "Absent",
              "value": "absent"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "type": "subheading",
          "label": "Phantom limb",
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_phantom_limb_sensation",
          "label": "Sensation",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_phantom_limb_pain",
          "label": "Pain",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_phantom_limb_specify",
          "label": "Severity & frequency",
          "type": "input",
          "showIf": {
            "field": "category",
            "includes": "amputation",
            "and": {
              "or": [
                {
                  "field": "amp_phantom_limb_sensation",
                  "equals": "Yes"
                },
                {
                  "field": "amp_phantom_limb_pain",
                  "equals": "Yes"
                }
              ]
            }
          }
        },
        {
          "name": "amp_neuropathic_pain",
          "label": "Neuropathic Pain",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_neuropathic_pain_specify",
          "label": "Severity & frequency",
          "type": "input",
          "showIf": {
            "field": "category",
            "includes": "amputation",
            "and": {
              "field": "amp_neuropathic_pain",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "subheading",
          "label": "Sensory Hypersensitivity",
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_hypersensitivity",
          "label": "Hypersensitivity",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_hyperesthesia",
          "label": "Hyperesthesia",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "type": "subheading",
          "label": "Stump (Residual Limb) Examination",
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_stump_site",
          "label": "Site",
          "type": "input",
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_stump_shape",
          "label": "Shape",
          "type": "radio",
          "options": [
            {
              "label": "Conical",
              "value": "conical"
            },
            {
              "label": "Cylindrical",
              "value": "cylindrical"
            },
            {
              "label": "Bulbous",
              "value": "bulbous"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_stump_length",
          "label": "Length",
          "type": "radio",
          "options": [
            {
              "label": "Adequate",
              "value": "adequate"
            },
            {
              "label": "Long",
              "value": "long"
            },
            {
              "label": "Short",
              "value": "short"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_redundant_tissue",
          "label": "Redundant Tissue",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "type": "subheading",
          "label": "Skin Condition",
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_skin_colour",
          "label": "Color",
          "type": "radio",
          "options": [
            {
              "label": "Normal",
              "value": "normal"
            },
            {
              "label": "Cyanotic",
              "value": "cyanotic"
            },
            {
              "label": "Erythematous",
              "value": "erythematous"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_skin_moisture",
          "label": "Moisture",
          "type": "radio",
          "options": [
            {
              "label": "Dry",
              "value": "dry"
            },
            {
              "label": "Scaly",
              "value": "scaly"
            },
            {
              "label": "Moist",
              "value": "moist"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_skin_integrity",
          "label": "Integrity",
          "type": "radio",
          "options": [
            {
              "label": "Ulcer",
              "value": "ulcer"
            },
            {
              "label": "Blister",
              "value": "blister"
            },
            {
              "label": "Scar",
              "value": "scar"
            },
            {
              "label": "Infection",
              "value": "infection"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_graft_flap_viability",
          "label": "Graft / Flap Viability",
          "type": "radio",
          "options": [
            {
              "label": "Yes",
              "value": "yes"
            },
            {
              "label": "No graft / flap",
              "value": "no_graft_flap"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_edema_swelling",
          "label": "Edema / Swelling",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_trophic_changes",
          "label": "Trophic Changes",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "type": "subheading",
          "label": "Scar Assessment",
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_scar_location",
          "label": "Location",
          "type": "textarea",
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_scar_tenderness",
          "label": "Tenderness",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_scar_adherence",
          "label": "Adherence",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "type": "subheading",
          "label": "Musculoskeletal Complications",
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_contracture",
          "label": "Contracture",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_joint_stiffness",
          "label": "Joint Stiffness",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_contracture_stiffness_joint",
          "label": "Which Joint involved",
          "type": "input",
          "showIf": {
            "field": "category",
            "includes": "amputation",
            "and": {
              "or": [
                {
                  "field": "amp_contracture",
                  "equals": "Yes"
                },
                {
                  "field": "amp_joint_stiffness",
                  "equals": "Yes"
                }
              ]
            }
          }
        },
        {
          "name": "amp_gait_pattern",
          "label": "Gait Pattern Functions",
          "type": "radio",
          "labelAbove": true,
          "options": [
            {
              "label": "Spastic gait",
              "value": "spastic"
            },
            {
              "label": "Hemiplegic gait",
              "value": "hemiplegic"
            },
            {
              "label": "Paraplegic gait",
              "value": "paraplegic"
            },
            {
              "label": "Asymmetric gait",
              "value": "asymmetric"
            },
            {
              "label": "Limping gait",
              "value": "limping"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "type": "subheading",
          "label": "PROSTHETIC FIT & TOLERANCE",
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_socket_fit",
          "label": "Socket Fit",
          "type": "radio",
          "options": [
            {
              "label": "Good",
              "value": "good"
            },
            {
              "label": "Poor",
              "value": "poor"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_socket_fit_issue",
          "label": "Describe Issue",
          "type": "input",
          "showIf": {
            "field": "category",
            "includes": "amputation",
            "and": {
              "field": "amp_socket_fit",
              "equals": "poor"
            }
          }
        },
        {
          "name": "amp_alignment",
          "label": "Alignment",
          "type": "radio",
          "options": [
            {
              "label": "Good",
              "value": "good"
            },
            {
              "label": "Poor",
              "value": "poor"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_alignment_issue",
          "label": "Describe Issue",
          "type": "input",
          "showIf": {
            "field": "category",
            "includes": "amputation",
            "and": {
              "field": "amp_alignment",
              "equals": "poor"
            }
          }
        },
        {
          "name": "amp_bony_prominence",
          "label": "Bony Prominence / Pressure Sensitive Areas",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_bony_prominence_wound_pins",
          "label": "Mark Location of the Bony Prominence / Pressure Sensitive Areas",
          "type": "wound-location-marker",
          "views": [
            {
              "key": "body",
              "label": "Body (Front/Back)",
              "src": "/body_high.png"
            },
            {
              "key": "feet",
              "label": "Feet",
              "src": "/feet_high.png"
            },
            {
              "key": "hands",
              "label": "Hands",
              "src": "/palm.png"
            }
          ],
          "info": {
            "type": "images",
            "title": "Reference",
            "images": [
              {
                "src": "/static/media/amputeeref1.f00cfce9faede5abd4ea.png",
                "alt": "Bony prominence reference 1"
              },
              {
                "src": "/static/media/amputeeref2.f206ab322a9c741a29df.png",
                "alt": "Bony prominence reference 2"
              }
            ]
          },
          "showIf": {
            "field": "category",
            "includes": "amputation",
            "and": {
              "field": "amp_bony_prominence",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "subheading",
          "label": "Activities & Participation",
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_changing_body_position",
          "label": "Changing body position",
          "type": "scale-table",
          "rows": [
            "Lying → Sitting",
            "Squatting / Kneeling",
            "Sit → Stand",
            "Rolling",
            "Bending",
            "Weight shifting"
          ],
          "columns": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Supervision",
              "value": "supervision"
            },
            {
              "label": "Min Assist",
              "value": "min_assist"
            },
            {
              "label": "Mod Assist",
              "value": "mod_assist"
            },
            {
              "label": "Max Assist",
              "value": "max_assist"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_maintaining_body_position",
          "label": "Maintaining Body Position",
          "type": "radio",
          "options": [
            {
              "label": "Good",
              "value": "good"
            },
            {
              "label": "Fair",
              "value": "fair"
            },
            {
              "label": "Poor",
              "value": "poor"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_transferring",
          "label": "Transferring Oneself",
          "type": "radio",
          "labelAbove": true,
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Supervision",
              "value": "supervision"
            },
            {
              "label": "Contact Guard Assist",
              "value": "contact_guard"
            },
            {
              "label": "Minimal Assist",
              "value": "minimal_assist"
            },
            {
              "label": "Moderate Assist",
              "value": "moderate_assist"
            },
            {
              "label": "Maximal Assist",
              "value": "maximal_assist"
            },
            {
              "label": "Total Assist",
              "value": "total_assist"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "type": "subheading",
          "label": "Walking",
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_walking_short",
          "label": "Walking Short Distance",
          "type": "radio",
          "labelAbove": true,
          "options": [
            {
              "label": "Without aid",
              "value": "without_aid"
            },
            {
              "label": "Walking frame",
              "value": "walking_frame"
            },
            {
              "label": "Axillary crutches",
              "value": "axillary_crutches"
            },
            {
              "label": "Elbow crutches",
              "value": "elbow_crutches"
            },
            {
              "label": "Quadripod",
              "value": "quadripod"
            },
            {
              "label": "Walking stick",
              "value": "walking_stick"
            },
            {
              "label": "Wheelchair",
              "value": "wheelchair"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_walking_long",
          "label": "Walking Long Distance",
          "type": "radio",
          "labelAbove": true,
          "options": [
            {
              "label": "Without aid",
              "value": "without_aid"
            },
            {
              "label": "Walking frame",
              "value": "walking_frame"
            },
            {
              "label": "Axillary crutches",
              "value": "axillary_crutches"
            },
            {
              "label": "Elbow crutches",
              "value": "elbow_crutches"
            },
            {
              "label": "Quadripod",
              "value": "quadripod"
            },
            {
              "label": "Walking stick",
              "value": "walking_stick"
            },
            {
              "label": "Wheelchair",
              "value": "wheelchair"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "type": "subheading",
          "label": "Dressing",
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_dressing_prosthesis",
          "label": "(Donning / Doffing Prosthesis)",
          "type": "radio",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Assisted",
              "value": "assisted"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_technique_acceptable",
          "label": "Technique acceptable",
          "type": "radio",
          "options": [
            "Yes",
            "No"
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "type": "subheading",
          "label": "Environmental Factors",
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_assistive_products",
          "label": "Assistive Products",
          "type": "radio",
          "labelAbove": true,
          "options": [
            {
              "label": "Wheelchair",
              "value": "wheelchair"
            },
            {
              "label": "Walking frame",
              "value": "walking_frame"
            },
            {
              "label": "Axillary crutches",
              "value": "axillary_crutches"
            },
            {
              "label": "Elbow crutches",
              "value": "elbow_crutches"
            },
            {
              "label": "Quadripod",
              "value": "quadripod"
            },
            {
              "label": "Walking stick",
              "value": "walking_stick"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_family_support",
          "label": "Family Support",
          "type": "radio",
          "options": [
            {
              "label": "Facilitator",
              "value": "facilitator"
            },
            {
              "label": "Neutral",
              "value": "neutral"
            },
            {
              "label": "Barrier",
              "value": "barrier"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "type": "subheading",
          "label": "Environmental Accessibility",
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        },
        {
          "name": "amp_building_access",
          "label": "Building access",
          "type": "radio",
          "options": [
            {
              "label": "Stairs – Barrier",
              "value": "stairs_barrier"
            },
            {
              "label": "Ramp available",
              "value": "ramp_available"
            },
            {
              "label": "Lift available",
              "value": "lift_available"
            }
          ],
          "showIf": {
            "field": "category",
            "includes": "amputation"
          }
        }
      ]
    }
  ]
}