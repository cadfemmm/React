const CONSENT = {
  "title": "",
  "sections": [
    {
      "fields": [
        {
          "type": "row",
          "fields": [
            {
              "name": "consent_obtained",
              "type": "checkbox-group",
              "options": [
                {
                  "label": "Consent obtained",
                  "value": "yes"
                }
              ]
            },
            {
              "name": "consent_upload",
              "label": "Upload",
              "type": "file-upload",
              "showIf": {
                "field": "consent_obtained",
                "includes": "yes"
              }
            }
          ]
        },
        {
          "name": "hep_reviewed",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Home Exercise Program (HEP) reviewed and demonstrated",
              "value": "yes"
            }
          ]
        },
        {
          "name": "current_diagnosis",
          "label": "Current Diagnosis",
          "type": "multi-select-dropdown",
          "options": [
            {
              "label": "Stroke",
              "value": "stroke"
            },
            {
              "label": "Traumatic Brain Injury",
              "value": "tbi"
            },
            {
              "label": "Parkinson Disease",
              "value": "parkinson"
            },
            {
              "label": "Spinal Cord Injury",
              "value": "sci"
            },
            {
              "label": "Peripheral Neuropathy",
              "value": "peripheral_neuropathy"
            },
            {
              "label": "Ligament injuries",
              "value": "ligament_injuries"
            },
            {
              "label": "Ataxia",
              "value": "ataxia"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "current_diagnosis_other",
          "label": "Other Diagnosis (specify)",
          "type": "input",
          "showIf": {
            "field": "current_diagnosis",
            "includes": "others"
          }
        },
        {
          "name": "equipment_owned",
          "label": "List of Equipment Owned",
          "type": "checkbox-group",
          "options": [
            {
              "label": "PERKESO",
              "value": "perkeso"
            },
            {
              "label": "NGO",
              "value": "ngo"
            },
            {
              "label": "Self-purchased",
              "value": "self"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "equipment_perkeso",
          "label": "PERKESO Equipment Details",
          "type": "input",
          "showIf": {
            "field": "equipment_owned",
            "includes": "perkeso"
          }
        },
        {
          "name": "equipment_ngo",
          "label": "NGO Equipment Details",
          "type": "input",
          "showIf": {
            "field": "equipment_owned",
            "includes": "ngo"
          }
        },
        {
          "name": "equipment_self",
          "label": "Self-purchased Equipment Details",
          "type": "input",
          "showIf": {
            "field": "equipment_owned",
            "includes": "self"
          }
        },
        {
          "name": "equipment_others",
          "label": "Other Equipment Details",
          "type": "input",
          "showIf": {
            "field": "equipment_owned",
            "includes": "others"
          }
        },
        {
          "type": "subheading",
          "label": "Referral Information"
        },
        {
          "name": "referred_by",
          "label": "Referred by",
          "type": "input",
          "readOnly": true
        },
        {
          "name": "referral_reasons",
          "label": "Referral Reasons",
          "type": "input",
          "readOnly": true
        }
      ]
    }
  ]
}

const SUBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "name": "msk_chief_complaint",
          "label": "Chief Complaint",
          "type": "input"
        },
        {
          "name": "msk_hpi",
          "label": "History of Presenting Illness",
          "type": "input"
        },
        {
          "name": "msk_primary_region",
          "label": "Primary Region",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Spine/General",
              "value": "spine_general"
            },
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
          "name": "_body_chart",
          "type": "custom"
        },
        {
          "name": "msk_functional_limitation",
          "label": "Functional Limitation",
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
          "name": "msk_functional_limitation_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "msk_functional_limitation",
            "equals": "yes"
          }
        },
        {
          "name": "msk_sleep_issue",
          "label": "Sleep Issue",
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
          "name": "msk_sleep_issue_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "msk_sleep_issue",
            "equals": "yes"
          }
        },
        {
          "name": "msk_smoking_alcohol",
          "label": "Smoking/Alcohol",
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
          "name": "msk_smoking_alcohol_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "msk_smoking_alcohol",
            "equals": "yes"
          }
        },
        {
          "name": "msk_cough_sneezing",
          "label": "Cough/Sneezing",
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
          ],
          "showIf": {
            "field": "msk_primary_region",
            "includes": "spine_general"
          }
        },
        {
          "name": "msk_cough_sneezing_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "msk_cough_sneezing",
            "equals": "yes",
            "and": {
              "field": "msk_primary_region",
              "includes": "spine_general"
            }
          }
        },
        {
          "name": "msk_incontinence",
          "label": "Incontinence",
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
          ],
          "showIf": {
            "field": "msk_primary_region",
            "includes": "spine_general"
          }
        },
        {
          "name": "msk_incontinence_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "msk_incontinence",
            "equals": "yes",
            "and": {
              "field": "msk_primary_region",
              "includes": "spine_general"
            }
          }
        },
        {
          "name": "msk_headache_vertigo",
          "label": "Headache/Vertigo",
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
          ],
          "showIf": {
            "field": "msk_primary_region",
            "includes": "spine_general"
          }
        },
        {
          "name": "msk_headache_vertigo_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "msk_headache_vertigo",
            "equals": "yes",
            "and": {
              "field": "msk_primary_region",
              "includes": "spine_general"
            }
          }
        },
        {
          "name": "msk_dominant",
          "label": "Dominant",
          "type": "radio",
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
            "or": [
              {
                "field": "msk_primary_region",
                "includes": "upper_limb"
              },
              {
                "field": "msk_primary_region",
                "includes": "lower_limb"
              }
            ]
          }
        },
        {
          "name": "msk_nature_of_work",
          "label": "Nature of Work",
          "type": "input"
        },
        {
          "name": "msk_client_goals",
          "label": "Client Goals",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Pain reduction",
              "value": "pain_reduction"
            },
            {
              "label": "Return to work",
              "value": "return_to_work"
            },
            {
              "label": "Improve ROM",
              "value": "improve_rom"
            },
            {
              "label": "Improve strength",
              "value": "improve_strength"
            },
            {
              "label": "Improve function",
              "value": "improve_function"
            },
            {
              "label": "Return to sport",
              "value": "return_to_sport"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "msk_client_goals_other",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "msk_client_goals",
            "includes": "others"
          }
        }
      ]
    }
  ]
}

const OBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Standard Alignment",
          "showIf": {
            "or": [
              {
                "field": "msk_primary_region",
                "includes": "spine_general"
              },
              {
                "field": "msk_primary_region",
                "includes": "lower_limb"
              }
            ]
          }
        },
        {
          "name": "obj_postural_type",
          "label": "Postural Type",
          "type": "radio",
          "showIf": {
            "or": [
              {
                "field": "msk_primary_region",
                "includes": "spine_general"
              },
              {
                "field": "msk_primary_region",
                "includes": "lower_limb"
              }
            ]
          },
          "options": [
            {
              "label": "Normal",
              "value": "normal"
            },
            {
              "label": "Flat back",
              "value": "flat_back"
            },
            {
              "label": "Swayback",
              "value": "swayback"
            },
            {
              "label": "Lordotic",
              "value": "lordotic"
            },
            {
              "label": "Ext neck",
              "value": "ext_neck"
            },
            {
              "label": "Forward head",
              "value": "forward_head"
            },
            {
              "label": "Scoliosis",
              "value": "scoliosis"
            },
            {
              "label": "Kyphotic",
              "value": "kyphotic"
            }
          ]
        },
        {
          "name": "obj_iliac_crest",
          "label": "Iliac Crest Level",
          "type": "radio",
          "showIf": {
            "or": [
              {
                "field": "msk_primary_region",
                "includes": "spine_general"
              },
              {
                "field": "msk_primary_region",
                "includes": "lower_limb"
              }
            ]
          },
          "options": [
            {
              "label": "Symmetrical",
              "value": "symmetrical"
            },
            {
              "label": "Right higher",
              "value": "right_higher"
            },
            {
              "label": "Left higher",
              "value": "left_higher"
            }
          ]
        },
        {
          "name": "obj_pelvic_tilt",
          "label": "Pelvic Tilt",
          "type": "radio",
          "showIf": {
            "or": [
              {
                "field": "msk_primary_region",
                "includes": "spine_general"
              },
              {
                "field": "msk_primary_region",
                "includes": "lower_limb"
              }
            ]
          },
          "options": [
            {
              "label": "Normal",
              "value": "normal"
            },
            {
              "label": "Posterior",
              "value": "posterior"
            },
            {
              "label": "Anterior",
              "value": "anterior"
            },
            {
              "label": "Lateral tilt",
              "value": "lateral_tilt"
            },
            {
              "label": "Rotation Left",
              "value": "rotation_left"
            },
            {
              "label": "Rotation Right",
              "value": "rotation_right"
            }
          ]
        },
        {
          "name": "obj_hip",
          "label": "Hip",
          "type": "radio",
          "showIf": {
            "or": [
              {
                "field": "msk_primary_region",
                "includes": "spine_general"
              },
              {
                "field": "msk_primary_region",
                "includes": "lower_limb"
              }
            ]
          },
          "options": [
            {
              "label": "Flexed",
              "value": "flexed"
            },
            {
              "label": "Extended",
              "value": "extended"
            },
            {
              "label": "Medial Rotation",
              "value": "medial_rotation"
            },
            {
              "label": "Lateral Rotation",
              "value": "lateral_rotation"
            }
          ]
        },
        {
          "name": "obj_knees",
          "label": "Knees",
          "type": "radio",
          "showIf": {
            "or": [
              {
                "field": "msk_primary_region",
                "includes": "spine_general"
              },
              {
                "field": "msk_primary_region",
                "includes": "lower_limb"
              }
            ]
          },
          "options": [
            {
              "label": "Hyperextended",
              "value": "hyperextended"
            },
            {
              "label": "Flexed",
              "value": "flexed"
            },
            {
              "label": "Valgus",
              "value": "valgus"
            },
            {
              "label": "Varum",
              "value": "varum"
            }
          ]
        },
        {
          "name": "obj_tibia",
          "label": "Tibia",
          "type": "radio",
          "showIf": {
            "or": [
              {
                "field": "msk_primary_region",
                "includes": "spine_general"
              },
              {
                "field": "msk_primary_region",
                "includes": "lower_limb"
              }
            ]
          },
          "options": [
            {
              "label": "Torsion Left",
              "value": "torsion_left"
            },
            {
              "label": "Torsion Right",
              "value": "torsion_right"
            }
          ]
        },
        {
          "name": "obj_foot",
          "label": "Foot",
          "type": "radio",
          "showIf": {
            "or": [
              {
                "field": "msk_primary_region",
                "includes": "spine_general"
              },
              {
                "field": "msk_primary_region",
                "includes": "lower_limb"
              }
            ]
          },
          "options": [
            {
              "label": "Pronated",
              "value": "pronated"
            },
            {
              "label": "Supinated",
              "value": "supinated"
            },
            {
              "label": "Normal",
              "value": "normal"
            }
          ]
        },
        {
          "name": "obj_scapula_spine",
          "label": "Scapula",
          "type": "radio",
          "showIf": {
            "field": "msk_primary_region",
            "includes": "spine_general"
          },
          "options": [
            {
              "label": "Bil. Elevated",
              "value": "bil_elevated"
            },
            {
              "label": "Anterior tilt",
              "value": "anterior_tilt"
            },
            {
              "label": "Winging",
              "value": "winging"
            },
            {
              "label": "Abducted",
              "value": "abducted"
            },
            {
              "label": "Normal",
              "value": "normal"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Upper Limb Simplified Alignment",
          "showIf": {
            "field": "msk_primary_region",
            "includes": "upper_limb"
          }
        },
        {
          "name": "obj_ul_postural_type",
          "label": "Postural Type",
          "type": "radio",
          "showIf": {
            "field": "msk_primary_region",
            "includes": "upper_limb"
          },
          "options": [
            {
              "label": "Forward head",
              "value": "forward_head"
            },
            {
              "label": "Kyphotic",
              "value": "kyphotic"
            },
            {
              "label": "Normal",
              "value": "normal"
            }
          ]
        },
        {
          "name": "obj_ul_scapula",
          "label": "Scapula",
          "type": "radio",
          "showIf": {
            "field": "msk_primary_region",
            "includes": "upper_limb"
          },
          "options": [
            {
              "label": "Elevated",
              "value": "elevated"
            },
            {
              "label": "Normal",
              "value": "normal"
            },
            {
              "label": "Winging",
              "value": "winging"
            }
          ]
        },
        {
          "name": "obj_ul_shoulder",
          "label": "Shoulder",
          "type": "radio",
          "showIf": {
            "field": "msk_primary_region",
            "includes": "upper_limb"
          },
          "options": [
            {
              "label": "Rounded",
              "value": "rounded"
            },
            {
              "label": "Internally rotated",
              "value": "internally_rotated"
            },
            {
              "label": "Normal",
              "value": "normal"
            }
          ]
        },
        {
          "name": "obj_palpation_findings",
          "label": "Palpation Findings",
          "type": "input",
          "showIf": {
            "or": [
              {
                "field": "msk_primary_region",
                "includes": "upper_limb"
              },
              {
                "field": "msk_primary_region",
                "includes": "lower_limb"
              }
            ]
          }
        },
        {
          "type": "subheading",
          "label": "Scales"
        },
        {
          "name": "msk_scales",
          "type": "assessment-launcher",
          "options": [
            {
              "label": "Oswestry Disability Index",
              "value": "oswestry",
              "regions": [
                "spine_general"
              ]
            },
            {
              "label": "Neck Disability Index",
              "value": "ndi",
              "regions": [
                "spine_general"
              ]
            },
            {
              "label": "Lower Extremity Functional Scale (LEFS)",
              "value": "lefs",
              "regions": [
                "lower_limb"
              ]
            },
            {
              "label": "Upper Limb Functional Scale (ULFS)",
              "value": "ulfs",
              "regions": [
                "spine_general",
                "upper_limb"
              ]
            },
            {
              "label": "Brachial Assessment Tool (BRAT)",
              "value": "brat",
              "regions": [
                "spine_general",
                "upper_limb"
              ]
            },
            {
              "label": "ROM",
              "value": "rom",
              "regions": []
            },
            {
              "label": "MMT",
              "value": "mmt",
              "regions": []
            },
            {
              "label": "Isometric Test",
              "value": "isometric",
              "regions": []
            }
          ],
          "filterByRegionField": "msk_primary_region"
        },
        {
          "type": "subheading",
          "label": "Special Tests"
        },
        {
          "name": "msk_special_tests",
          "type": "assessment-launcher",
          "options": [
            {
              "label": "Muscle Length Test",
              "value": "muscle_length",
              "regions": []
            },
            {
              "label": "Balance Test",
              "value": "balance_test",
              "regions": []
            },
            {
              "label": "Neurodynamic Test",
              "value": "neurodynamic",
              "regions": [
                "spine_general"
              ]
            },
            {
              "label": "PAIVM",
              "value": "paivm",
              "regions": [
                "spine_general"
              ]
            },
            {
              "label": "Compression / Distraction Test",
              "value": "compression",
              "regions": [
                "spine_general"
              ]
            },
            {
              "label": "Lower Limb Discrepancy Test",
              "value": "lld_general",
              "regions": [
                "spine_general"
              ]
            },
            {
              "label": "Muscle Length Test",
              "value": "ml_lower",
              "regions": [
                "lower_limb"
              ]
            },
            {
              "label": "Functional Test",
              "value": "func_lower",
              "regions": [
                "lower_limb"
              ]
            },
            {
              "label": "Lower Limb Discrepancy — True Leg Length",
              "value": "true_leg_length",
              "regions": [
                "lower_limb"
              ]
            },
            {
              "label": "Lower Limb Discrepancy — Apparent Leg Length",
              "value": "apparent_leg_length",
              "regions": [
                "lower_limb"
              ]
            },
            {
              "label": "Q-Angle Measurement",
              "value": "q_angle",
              "regions": [
                "lower_limb"
              ]
            },
            {
              "label": "Instability Test",
              "value": "instability",
              "regions": [
                "upper_limb"
              ]
            },
            {
              "label": "Special Test",
              "value": "special_upper",
              "regions": [
                "upper_limb"
              ]
            },
            {
              "label": "Functional Test",
              "value": "func_upper",
              "regions": [
                "upper_limb"
              ]
            }
          ],
          "filterByRegionField": "msk_primary_region"
        }
      ]
    }
  ]
}

const ASSESSMENT = {
  "fields": [
    {
      "type": "subheading",
      "label": "Problem List"
    },
    {
      "name": "problem_list",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Reduced muscle strength",
          "value": "reduced_muscle_strength"
        },
        {
          "label": "Reduced muscle endurance",
          "value": "reduced_muscle_endurance"
        },
        {
          "label": "Reduced cardiovascular endurance",
          "value": "reduced_cardiovascular_endurance"
        },
        {
          "label": "Reduced ROM",
          "value": "reduced_rom"
        },
        {
          "label": "Poor wheelchair skills",
          "value": "poor_wheelchair_skills"
        },
        {
          "label": "Reduced standing balance",
          "value": "reduced_standing_balance"
        },
        {
          "label": "Reduced sitting balance",
          "value": "reduced_sitting_balance"
        },
        {
          "label": "Poor trunk control",
          "value": "poor_trunk_control"
        },
        {
          "label": "Unable to walk",
          "value": "unable_to_walk"
        },
        {
          "label": "Poor walking endurance",
          "value": "poor_walking_endurance"
        },
        {
          "label": "Poor wheelchair endurance",
          "value": "poor_wheelchair_endurance"
        },
        {
          "label": "Others",
          "value": "other"
        }
      ]
    },
    {
      "name": "problem_list_other_text",
      "label": "Other Problem (Specify)",
      "type": "input",
      "placeholder": "Enter additional problems...",
      "showIf": {
        "field": "problem_list",
        "includes": "other"
      }
    },
    {
      "name": "clinical_impression",
      "label": "Clinical Impression",
      "type": "input"
    },
    {
      "name": "prognosis",
      "label": "Rehab Prognosis",
      "type": "radio",
      "options": [
        {
          "label": "Excellent",
          "value": "excellent"
        },
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
      ]
    }
  ]
}

const PLAN = {
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Short-Term Goals (2–4 weeks)"
        },
        {
          "name": "treatment_goals",
          "label": "Goals",
          "type": "checkbox-group",
          "options": [
            {
              "label": "To reduce pain",
              "value": "reduce_pain"
            },
            {
              "label": "To improve ROM",
              "value": "improve_rom"
            },
            {
              "label": "To improve strength",
              "value": "improve_strength"
            }
          ]
        },
        {
          "type": "dynamic-goals",
          "name": "msk_short_term_goals"
        },
        {
          "type": "subheading",
          "label": "Long-Term Goals (6–12 weeks)"
        },
        {
          "name": "long_term_goals",
          "label": "Goals",
          "type": "checkbox-group",
          "options": [
            {
              "label": "To improve function",
              "value": "improve_function"
            },
            {
              "label": "Return to work (RTW)",
              "value": "rtw"
            }
          ]
        },
        {
          "type": "dynamic-goals",
          "name": "msk_long_term_goals"
        },
        {
          "type": "subheading",
          "label": "Physiotherapy Plan "
        },
        {
          "name": "treatment_components",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Pain management",
              "value": "pain_management"
            },
            {
              "label": "Electrical Stimulation (FMS, NMES)",
              "value": "electrical_stimulation"
            },
            {
              "label": "Swelling management",
              "value": "swelling_management"
            },
            {
              "label": "Soft tissue / bone healing",
              "value": "soft_tissue_bone_healing"
            },
            {
              "label": "Manual therapy (Joint mobilization, Soft tissue release, Other)",
              "value": "manual_therapy"
            },
            {
              "label": "Mobilizing / Stretching",
              "value": "mobilizing_stretching"
            },
            {
              "label": "Strength training",
              "value": "strength_training"
            },
            {
              "label": "Endurance training",
              "value": "endurance_training"
            },
            {
              "label": "Neuromuscular control",
              "value": "neuromuscular_control"
            },
            {
              "label": "Spinal decompression",
              "value": "spinal_decompression"
            },
            {
              "label": "Balance training",
              "value": "balance_training"
            },
            {
              "label": "Gait / Ambulation training",
              "value": "gait_ambulation_training"
            },
            {
              "label": "Functional training",
              "value": "functional_training"
            },
            {
              "label": "Other",
              "value": "other"
            }
          ]
        },
        {
          "name": "treatment_components_other",
          "label": "Specify Other Treatment Component",
          "type": "input",
          "placeholder": "Enter other treatment component",
          "showIf": {
            "field": "treatment_components",
            "includes": "other"
          }
        },
        {
          "type": "subheading",
          "label": "Review/Reassessment "
        },
        {
          "name": "review_reassessment",
          "type": "input",
          "placeholder": "Enter review and reassessment notes",
          "rows": 4
        }
      ]
    }
  ]
}

export default {
  PLAN,
  OBJECTIVE,
  SUBJECTIVE,
  ASSESSMENT,
  CONSENT
};