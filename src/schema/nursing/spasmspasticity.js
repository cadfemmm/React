const Spasm_schema = {
  "title": "Spasm & Spasticity Assessment",
  "sections": [
    {
      "fields": [
        {
          "type": "radio",
          "name": "spasticity_present",
          "label": "Spasticity",
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
          "type": "radio",
          "name": "spasticity_pain_severity",
          "label": "Severity",
          "options": [
            [
              {
                "label": "Mild",
                "value": "mild"
              },
              {
                "label": "Moderate",
                "value": "moderate"
              },
              {
                "label": "Severe",
                "value": "severe"
              }
            ]
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes",
            "and": {
              "field": "spasticity_symptoms",
              "includes": "pain_associated_spasticity"
            }
          }
        },
        {
          "type": "subheading",
          "label": "Onset & Duration",
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "spasticity_onset",
          "label": "Onset",
          "options": [
            {
              "label": "Post Stroke",
              "value": "post_stroke"
            },
            {
              "label": "Cerebral Palsy",
              "value": "cerebral_palsy"
            },
            {
              "label": "Spinal Cord Injury",
              "value": "spinal_cord_injury"
            },
            {
              "label": "Other",
              "value": "other"
            }
          ],
          "labelAbove": true,
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes"
          }
        },
        {
          "type": "input",
          "name": "spasticity_onset_other_specify",
          "label": "Onset - Other (Specify)",
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes",
            "and": {
              "field": "spasticity_onset",
              "equals": "Other"
            }
          }
        },
        {
          "type": "radio",
          "name": "spasticity_duration",
          "label": "Duration",
          "options": [
            {
              "label": "< 1 month",
              "value": "less_than_1_month"
            },
            {
              "label": "1-3 months",
              "value": "1_3_months"
            },
            {
              "label": "> 3 months",
              "value": "greater_than_3_months"
            },
            {
              "label": "Chronic",
              "value": "chronic"
            }
          ],
          "labelAbove": true,
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes"
          }
        },
        {
          "type": "checkbox-group",
          "name": "spasticity_functional_complaints",
          "label": "Functional Complaints",
          "options": [
            {
              "label": "Difficulty walking",
              "value": "difficulty_walking"
            },
            {
              "label": "Difficulty in hand use",
              "value": "difficulty_hand_use"
            },
            {
              "label": "Difficulty in positioning",
              "value": "difficulty_positioning"
            },
            {
              "label": "Difficulty in hygiene",
              "value": "difficulty_hygiene"
            }
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "spasticity_distribution",
          "label": "Distribution",
          "options": [
            {
              "label": "Upper limb",
              "value": "upper_limb"
            },
            {
              "label": "Lower limb",
              "value": "lower_limb"
            },
            {
              "label": "Generalized",
              "value": "generalized"
            }
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes"
          }
        },
        {
          "type": "checkbox-group",
          "name": "spasticity_muscle_groups_upper",
          "label": "Muscle Groups Involved",
          "options": [
            {
              "label": "Shoulder",
              "value": "shoulder"
            },
            {
              "label": "Elbow",
              "value": "elbow"
            },
            {
              "label": "Wrist",
              "value": "wrist"
            },
            {
              "label": "Hand",
              "value": "hand"
            }
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes",
            "and": {
              "field": "spasticity_distribution",
              "equals": "Upper limb"
            }
          }
        },
        {
          "type": "checkbox-group",
          "name": "spasticity_muscle_groups_lower",
          "label": "Muscle Groups Involved",
          "options": [
            {
              "label": "Hip",
              "value": "hip"
            },
            {
              "label": "Knee",
              "value": "knee"
            },
            {
              "label": "Ankle",
              "value": "ankle"
            }
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes",
            "and": {
              "field": "spasticity_distribution",
              "equals": "Lower limb"
            }
          }
        },
        {
          "type": "checkbox-group",
          "name": "spasticity_muscle_groups_generalized",
          "label": "Muscle Groups Involved",
          "options": [
            {
              "label": "Shoulder",
              "value": "shoulder"
            },
            {
              "label": "Elbow",
              "value": "elbow"
            },
            {
              "label": "Wrist",
              "value": "wrist"
            },
            {
              "label": "Hand",
              "value": "hand"
            },
            {
              "label": "Hip",
              "value": "hip"
            },
            {
              "label": "Knee",
              "value": "knee"
            },
            {
              "label": "Ankle",
              "value": "ankle"
            }
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes",
            "and": {
              "field": "spasticity_distribution",
              "equals": "Generalized"
            }
          }
        },
        {
          "type": "radio",
          "name": "spasticity_side_shoulder",
          "label": "Side Involvement - Shoulder",
          "options": [
            {
              "label": "Right",
              "value": "right"
            },
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Bilateral",
              "value": "bilateral"
            }
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes",
            "and": {
              "or": [
                {
                  "field": "spasticity_muscle_groups_upper",
                  "includes": "shoulder"
                },
                {
                  "field": "spasticity_muscle_groups_generalized",
                  "includes": "shoulder"
                }
              ]
            }
          }
        },
        {
          "type": "radio",
          "name": "spasticity_side_elbow",
          "label": "Side Involvement - Elbow",
          "options": [
            {
              "label": "Right",
              "value": "right"
            },
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Bilateral",
              "value": "bilateral"
            }
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes",
            "and": {
              "or": [
                {
                  "field": "spasticity_muscle_groups_upper",
                  "includes": "elbow"
                },
                {
                  "field": "spasticity_muscle_groups_generalized",
                  "includes": "elbow"
                }
              ]
            }
          }
        },
        {
          "type": "radio",
          "name": "spasticity_side_wrist",
          "label": "Side Involvement - Wrist",
          "options": [
            {
              "label": "Right",
              "value": "right"
            },
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Bilateral",
              "value": "bilateral"
            }
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes",
            "and": {
              "or": [
                {
                  "field": "spasticity_muscle_groups_upper",
                  "includes": "wrist"
                },
                {
                  "field": "spasticity_muscle_groups_generalized",
                  "includes": "wrist"
                }
              ]
            }
          }
        },
        {
          "type": "radio",
          "name": "spasticity_side_hand",
          "label": "Side Involvement - Hand",
          "options": [
            {
              "label": "Right",
              "value": "right"
            },
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Bilateral",
              "value": "bilateral"
            }
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes",
            "and": {
              "or": [
                {
                  "field": "spasticity_muscle_groups_upper",
                  "includes": "hand"
                },
                {
                  "field": "spasticity_muscle_groups_generalized",
                  "includes": "hand"
                }
              ]
            }
          }
        },
        {
          "type": "radio",
          "name": "spasticity_side_hip",
          "label": "Side Involvement - Hip",
          "options": [
            {
              "label": "Right",
              "value": "right"
            },
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Bilateral",
              "value": "bilateral"
            }
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes",
            "and": {
              "or": [
                {
                  "field": "spasticity_muscle_groups_lower",
                  "includes": "hip"
                },
                {
                  "field": "spasticity_muscle_groups_generalized",
                  "includes": "hip"
                }
              ]
            }
          }
        },
        {
          "type": "radio",
          "name": "spasticity_side_knee",
          "label": "Side Involvement - Knee",
          "options": [
            {
              "label": "Right",
              "value": "right"
            },
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Bilateral",
              "value": "bilateral"
            }
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes",
            "and": {
              "or": [
                {
                  "field": "spasticity_muscle_groups_lower",
                  "includes": "knee"
                },
                {
                  "field": "spasticity_muscle_groups_generalized",
                  "includes": "knee"
                }
              ]
            }
          }
        },
        {
          "type": "radio",
          "name": "spasticity_side_ankle",
          "label": "Side Involvement - Ankle",
          "options": [
            {
              "label": "Right",
              "value": "right"
            },
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Bilateral",
              "value": "bilateral"
            }
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes",
            "and": {
              "or": [
                {
                  "field": "spasticity_muscle_groups_lower",
                  "includes": "ankle"
                },
                {
                  "field": "spasticity_muscle_groups_generalized",
                  "includes": "ankle"
                }
              ]
            }
          }
        },
        {
          "type": "checkbox-group",
          "name": "spasticity_associated_findings",
          "label": "Associated Findings",
          "options": [
            {
              "label": "Hyperreflexia",
              "value": "hyperreflexia"
            },
            {
              "label": "Clonus",
              "value": "clonus"
            },
            {
              "label": "Contracture",
              "value": "contracture"
            }
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes"
          }
        },
        {
          "type": "subheading",
          "label": "Muscle Tone Assessment",
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes"
          }
        },
        {
          "type": "subheading",
          "label": "Upper limb",
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes"
          }
        },
        {
          "type": "refraction-12col",
          "name": "spasticity_muscle_tone_upper_table",
          "cornerLabel": "Muscle",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Modified Ashworth Scale (MAS)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Tardieu Scale (R2)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Tardieu Scale (R1)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Tardieu Scale (R2-R1)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "pectoralis_major",
              "label": "Pectoralis Major",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {},
                {},
                {},
                {},
                {},
                {}
              ]
            },
            {
              "value": "subscapularis",
              "label": "Subscapularis",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {},
                {},
                {},
                {},
                {},
                {}
              ]
            },
            {
              "value": "triceps",
              "label": "Triceps",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {},
                {},
                {},
                {},
                {},
                {}
              ]
            },
            {
              "value": "biceps_brachii",
              "label": "Biceps Brachii",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {},
                {},
                {},
                {},
                {},
                {}
              ]
            },
            {
              "value": "brachialis",
              "label": "Brachialis",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {},
                {},
                {},
                {},
                {},
                {}
              ]
            },
            {
              "value": "brachioradialis",
              "label": "Brachioradialis",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {},
                {},
                {},
                {},
                {},
                {}
              ]
            },
            {
              "value": "pronator_teres",
              "label": "Pronator Teres",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {},
                {},
                {},
                {},
                {},
                {}
              ]
            },
            {
              "value": "fcu",
              "label": "Flexor Carpi Ulnaris (FCU)",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {},
                {},
                {},
                {},
                {},
                {}
              ]
            },
            {
              "value": "fcr",
              "label": "Flexor Carpi Radialis (FCR)",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {},
                {},
                {},
                {},
                {},
                {}
              ]
            },
            {
              "value": "fdp",
              "label": "Flexor Digitorum Profundus (FDP)",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {},
                {},
                {},
                {},
                {},
                {}
              ]
            },
            {
              "value": "fds",
              "label": "Flexor Digitorum Superficialis (FDS)",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {},
                {},
                {},
                {},
                {},
                {}
              ]
            },
            {
              "value": "fpl",
              "label": "Flexor Pollicis Longus (FPL)",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {},
                {},
                {},
                {},
                {},
                {}
              ]
            }
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes"
          }
        },
        {
          "type": "subheading",
          "label": "Lower limb",
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes"
          }
        },
        {
          "type": "refraction-12col",
          "name": "spasticity_muscle_tone_lower_table",
          "cornerLabel": "Muscle",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Modified Ashworth Scale (MAS)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Tardieu Scale (R2)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Tardieu Scale (R1)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Tardieu Scale (R2-R1)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "bicep_femoris",
              "label": "Bicep Femoris",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {},
                {},
                {},
                {},
                {},
                {}
              ]
            },
            {
              "value": "semitendinosus",
              "label": "Semitendinosus",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {},
                {},
                {},
                {},
                {},
                {}
              ]
            },
            {
              "value": "semimembranosus",
              "label": "Semimembranosus",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {},
                {},
                {},
                {},
                {},
                {}
              ]
            },
            {
              "value": "adductors",
              "label": "Adductors",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {},
                {},
                {},
                {},
                {},
                {}
              ]
            },
            {
              "value": "gastrocnemius",
              "label": "Gastrocnemius",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {},
                {},
                {},
                {},
                {},
                {}
              ]
            },
            {
              "value": "soleus",
              "label": "Soleus",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {},
                {},
                {},
                {},
                {},
                {}
              ]
            },
            {
              "value": "posterior_tibialis",
              "label": "Posterior Tibialis",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {},
                {},
                {},
                {},
                {},
                {}
              ]
            },
            {
              "value": "fdl",
              "label": "Flexor Digitorum Longus (FDL)",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {},
                {},
                {},
                {},
                {},
                {}
              ]
            },
            {
              "value": "fhl",
              "label": "Flexor Hallucis Longus (FHL)",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 - No increase in tone",
                      "value": "0_no"
                    },
                    {
                      "label": "1 - Slight increase in tone. Catch/Release at end ROM",
                      "value": "1"
                    },
                    {
                      "label": "1+ - Slight increase in tone. Catch/Release and resistance through rest ROM (1/2 ROM)",
                      "value": "1+"
                    },
                    {
                      "label": "2 - More marked increase in tone through ROM, but affected part moved easily",
                      "value": "2"
                    },
                    {
                      "label": "3 - Considerable increase in tone, passive movement difficult",
                      "value": "3"
                    },
                    {
                      "label": "4 - Affected part in rigid flexion and extension",
                      "value": "4"
                    }
                  ]
                },
                {},
                {},
                {},
                {},
                {},
                {}
              ]
            }
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes"
          }
        },
        {
          "type": "subheading",
          "label": "Environmental",
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "spasticity_assistive_device",
          "label": "Assistive device",
          "options": [
            "None",
            "Walker",
            "Orthosis",
            "Wheelchair"
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes"
          }
        },
        {
          "type": "textarea",
          "name": "spasticity_personal_factors",
          "label": "Personal Factors",
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes"
          }
        },
        {
          "type": "checkbox-group",
          "name": "spasticity_rehab_goals",
          "label": "Rehabilitation Goals",
          "options": [
            {
              "label": "Reduce pain",
              "value": "reduce_pain"
            },
            {
              "label": "Improve positioning",
              "value": "improve_positioning"
            },
            {
              "label": "Prevent contracture",
              "value": "prevent_contracture"
            },
            {
              "label": "Improve ADL",
              "value": "improve_adl"
            },
            {
              "label": "Improve gait / mobility",
              "value": "improve_gait_mobility"
            }
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes"
          }
        },
        {
          "type": "subheading",
          "label": "Goals",
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes"
          }
        },
        {
          "name": "spasticity_goals",
          "type": "textarea",
          "placeholder": "Enter goals",
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes"
          }
        },
        {
          "type": "heading",
          "label": "Plan",
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes"
          }
        },
        {
          "type": "checkbox-group",
          "name": "spasticity_plan_sections",
          "label": "",
          "options": [
            {
              "label": "Physiotherapy Intervention",
              "value": "physiotherapy_intervention"
            },
            {
              "label": "Pharmacological Management",
              "value": "pharmacological_management"
            },
            {
              "label": "Occupational Therapy ADL training",
              "value": "occupational_therapy"
            },
            {
              "label": "Orthotic Management Splint / Brace prescription",
              "value": "orthotic_management"
            },
            {
              "label": "Education & Counselling Home program & Caregiver training",
              "value": "education_counselling"
            },
            {
              "label": "Follow-up Plan",
              "value": "follow_up_plan"
            }
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes"
          }
        },
        {
          "type": "checkbox-group",
          "name": "spasticity_plan_physiotherapy",
          "label": "Physiotherapy Intervention",
          "options": [
            {
              "label": "Stretching",
              "value": "stretching"
            },
            {
              "label": "Positioning",
              "value": "positioning"
            },
            {
              "label": "Splinting",
              "value": "splinting"
            }
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes",
            "and": {
              "field": "spasticity_plan_sections",
              "includes": "physiotherapy_intervention"
            }
          }
        },
        {
          "type": "checkbox-group",
          "name": "spasticity_plan_pharm_oral",
          "label": "Oral medication",
          "options": [
            {
              "label": "Baclofen",
              "value": "baclofen"
            },
            {
              "label": "Tizanidine",
              "value": "tizanidine"
            }
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes",
            "and": {
              "field": "spasticity_plan_sections",
              "includes": "pharmacological_management"
            }
          }
        },
        {
          "type": "checkbox-group",
          "name": "spasticity_plan_pharm_injection",
          "label": "Injection",
          "options": [
            {
              "label": "Botulinum toxin type A",
              "value": "botulinum_toxin_type_a"
            }
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes",
            "and": {
              "field": "spasticity_plan_sections",
              "includes": "pharmacological_management"
            }
          }
        },
        {
          "type": "checkbox-group",
          "name": "spasticity_plan_botox_goals",
          "label": "Botulinum toxin type A goals",
          "options": [
            {
              "label": "Pain reduction",
              "value": "pain_reduction"
            },
            {
              "label": "Improve ROM",
              "value": "improve_rom"
            },
            {
              "label": "Improve hygiene",
              "value": "improve_hygiene"
            },
            {
              "label": "Improve function",
              "value": "improve_function"
            },
            {
              "label": "Reduce caregiver burden",
              "value": "reduce_caregiver_burden"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes",
            "and": {
              "field": "spasticity_plan_pharm_injection",
              "includes": "botulinum_toxin_type_a"
            }
          }
        },
        {
          "type": "textarea",
          "name": "spasticity_plan_botox_goals_others",
          "label": "Others (Specify)",
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes",
            "and": {
              "field": "spasticity_plan_botox_goals",
              "includes": "others"
            }
          }
        },
        {
          "type": "radio",
          "name": "spasticity_follow_up_review_in",
          "label": "Review in",
          "options": [
            {
              "label": "1 week",
              "value": "1_week"
            },
            {
              "label": "2 weeks",
              "value": "2_weeks"
            },
            {
              "label": "1 month",
              "value": "1_month"
            }
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes",
            "and": {
              "field": "spasticity_plan_sections",
              "includes": "follow_up_plan"
            }
          }
        },
        {
          "type": "checkbox-group",
          "name": "spasticity_follow_up_outcome_measures",
          "label": "Outcome measures to track",
          "options": [
            {
              "label": "MAS",
              "value": "mas"
            },
            {
              "label": "Penn Scale",
              "value": "penn_scale"
            },
            {
              "label": "Functional improvement",
              "value": "functional_improvement"
            }
          ],
          "showIf": {
            "field": "spasticity_present",
            "equals": "yes",
            "and": {
              "field": "spasticity_plan_sections",
              "includes": "follow_up_plan"
            }
          }
        }
      ]
    },
    {
      "fields": [
        {
          "type": "radio",
          "name": "spasm_present",
          "label": "Spasms",
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
          "type": "subheading",
          "label": "Symptoms",
          "showIf": {
            "field": "spasm_present",
            "equals": "yes"
          }
        },
        {
          "type": "checkbox-group",
          "name": "spasm_sites",
          "label": "Site",
          "options": [
            {
              "label": "Lower limbs",
              "value": "lower_limbs"
            },
            {
              "label": "Upper limbs",
              "value": "upper_limbs"
            },
            {
              "label": "Trunk",
              "value": "trunk"
            }
          ],
          "showIf": {
            "field": "spasm_present",
            "equals": "yes"
          }
        },
        {
          "type": "input",
          "name": "spasm_site_specify",
          "label": "Specify",
          "showIf": {
            "field": "spasm_present",
            "equals": "yes",
            "and": {
              "or": [
                {
                  "field": "spasm_sites",
                  "includes": "lower_limbs"
                },
                {
                  "field": "spasm_sites",
                  "includes": "upper_limbs"
                },
                {
                  "field": "spasm_sites",
                  "includes": "trunk"
                }
              ]
            }
          }
        },
        {
          "type": "assessment-launcher",
          "name": "spasm_penn_frequency_assessment",
          "label": "PENN Spasm Frequency Scale (PSFS)",
          "options": [
            {
              "label": "PENN Spasm Frequency Scale (PSFS)",
              "value": "penn_scale"
            }
          ],
          "showIf": {
            "field": "spasm_present",
            "equals": "yes"
          }
        },
        {
          "type": "input",
          "name": "spasm_frequency_score_interpretation",
          "label": "Frequency - Score & Interpretation",
          "readOnly": true,
          "showIf": {
            "field": "spasm_present",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "spasm_frequency_severity",
          "label": "Severity",
          "options": [
            "Mild",
            "Moderate",
            "Severe"
          ],
          "showIf": {
            "field": "spasm_present",
            "equals": "yes"
          }
        },
        {
          "type": "subheading",
          "label": "Effect",
          "showIf": {
            "field": "spasm_present",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "spasm_causes_pain",
          "label": "Causes Pain",
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
            "field": "spasm_present",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "spasm_disturb_sleep",
          "label": "Disturb Sleep",
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
            "field": "spasm_present",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "spasm_affect_function",
          "label": "Affect Function",
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
            "field": "spasm_present",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "spasm_affect_ambulation",
          "label": "Ambulation",
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
            "field": "spasm_affect_function",
            "equals": "yes"
          }
        },
        {
          "type": "input",
          "name": "spasm_affect_ambulation_specify",
          "label": "Ambulation (Specify)",
          "showIf": {
            "field": "spasm_affect_ambulation",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "spasm_affect_standing",
          "label": "Standing",
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
            "field": "spasm_affect_function",
            "equals": "yes"
          }
        },
        {
          "type": "input",
          "name": "spasm_affect_standing_specify",
          "label": "Standing (Specify)",
          "showIf": {
            "field": "spasm_affect_standing",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "spasm_affect_transfer",
          "label": "Transfer",
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
            "field": "spasm_affect_function",
            "equals": "yes"
          }
        },
        {
          "type": "input",
          "name": "spasm_affect_transfer_specify",
          "label": "Transfer (Specify)",
          "showIf": {
            "field": "spasm_affect_transfer",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "spasm_affect_adl",
          "label": "ADL",
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
            "field": "spasm_affect_function",
            "equals": "yes"
          }
        },
        {
          "type": "input",
          "name": "spasm_affect_adl_specify",
          "label": "ADL (Specify)",
          "showIf": {
            "field": "spasm_affect_adl",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "spasm_affect_others",
          "label": "Others",
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
            "field": "spasm_affect_function",
            "equals": "yes"
          }
        },
        {
          "type": "input",
          "name": "spasm_affect_others_specify",
          "label": "Others (Specify)",
          "showIf": {
            "field": "spasm_affect_others",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "spasm_oral_agents",
          "label": "Oral",
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
            "field": "spasm_antispastic_agent",
            "equals": "yes"
          }
        },
        {
          "type": "input",
          "name": "spasm_oral_agents_specify",
          "label": "Oral (Specify)",
          "showIf": {
            "field": "spasm_oral_agents",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "spasm_intrathecal_agents",
          "label": "Intrathecal agents",
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
            "field": "spasm_antispastic_agent",
            "equals": "yes"
          }
        },
        {
          "type": "input",
          "name": "spasm_intrathecal_agents_specify",
          "label": "Intrathecal agents (Specify)",
          "showIf": {
            "field": "spasm_intrathecal_agents",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "spasm_botox_injection",
          "label": "Intramuscular botulinum toxin injection",
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
            "field": "spasm_injection",
            "equals": "yes"
          }
        },
        {
          "type": "textarea",
          "name": "spasm_botox_details",
          "label": "Which year / Site & Goal of injection / Lasting effect",
          "showIf": {
            "field": "spasm_botox_injection",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "spasm_neurolysis",
          "label": "Neurolysis",
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
            "field": "spasm_injection",
            "equals": "yes"
          }
        },
        {
          "type": "input",
          "name": "spasm_neurolysis_specify",
          "label": "Neurolysis (Specify)",
          "showIf": {
            "field": "spasm_neurolysis",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "spasm_hand_splint",
          "label": "Antispastic hand splint",
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
            "field": "spasm_orthosis_use",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "spasm_afo_type",
          "label": "Ankle foot orthosis (AFO)",
          "options": [
            "Solid AFO",
            "Hinged AFO",
            "Others"
          ],
          "showIf": {
            "field": "spasm_orthosis_use",
            "equals": "yes"
          }
        },
        {
          "type": "input",
          "name": "spasm_afo_type_other_specify",
          "label": "AFO - Others (Specify)",
          "showIf": {
            "field": "spasm_afo_type",
            "equals": "Others"
          }
        },
        {
          "type": "subheading",
          "label": "Goals",
          "showIf": {
            "field": "spasm_present",
            "equals": "yes"
          }
        },
        {
          "name": "spasm_goals",
          "type": "textarea",
          "placeholder": "Enter goals",
          "showIf": {
            "field": "spasm_present",
            "equals": "yes"
          }
        },
        {
          "type": "subheading",
          "label": "Plan",
          "showIf": {
            "field": "spasm_present",
            "equals": "yes"
          }
        },
        {
          "type": "checkbox-group",
          "name": "spasm_plan",
          "label": "",
          "options": [
            {
              "label": "Eliminate noxious stimuli eg infection, constipation, pain and others",
              "value": "eliminate_noxious_stimuli"
            },
            {
              "label": "Schedule for Intramuscular botulinum toxin type A injection",
              "value": "schedule_botox"
            },
            {
              "label": "For further evaluation by CPO for orthosis",
              "value": "evaluation_cpo_orthosis"
            }
          ],
          "showIf": {
            "field": "spasm_present",
            "equals": "yes"
          }
        },
        {
          "type": "input",
          "name": "spasm_plan_schedule_botox_specify",
          "label": "Schedule for Intramuscular botulinum toxin type A injection (Specify)",
          "showIf": {
            "field": "spasm_plan",
            "includes": "schedule_botox"
          }
        },
        {
          "type": "subheading",
          "label": "Treatment",
          "showIf": {
            "field": "spasm_present",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "spasm_antispastic_agent",
          "label": "Antispastic agent",
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
            "field": "spasm_present",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "spasm_injection",
          "label": "Injection",
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
            "field": "spasm_present",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "spasm_physical_therapy",
          "label": "Physical therapy (stretching, casting, physical modality)",
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
            "field": "spasm_present",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "spasm_orthosis_use",
          "label": "Use of orthosis",
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
            "field": "spasm_present",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "spasm_orthopaedic_procedure",
          "label": "Orthopaedic procedure",
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
            "field": "spasm_present",
            "equals": "yes"
          }
        },
        {
          "type": "input",
          "name": "spasm_treatment_specify",
          "label": "Specify",
          "showIf": {
            "field": "spasm_present",
            "equals": "yes"
          }
        }
      ]
    }
  ]
}
const penn_schema = {
  "title": "Penn Spasm Frequency Scale (PSFS)",
  "sections": [
    {
      "fields": [
        {
          "type": "radio",
          "name": "spasm_penn_frequency_score",
          "label": "Frequency Score",
          "options": [
            {
              "label": "0 - No spasms",
              "value": "0"
            },
            {
              "label": "1 - Mild spasms induced by stimulation",
              "value": "1"
            },
            {
              "label": "2 - Infrequent spasms occurring less than once per hour",
              "value": "2"
            },
            {
              "label": "3 - Spasms occurring more than once per hour",
              "value": "3"
            },
            {
              "label": "4 - Spasms occurring more than 10 times per hour",
              "value": "4"
            }
          ]
        },
        {
          "type": "input",
          "name": "spasm_penn_frequency_interpretation",
          "label": "Score & Interpretation",
          "readOnly": true
        }
      ]
    }
  ]
}
