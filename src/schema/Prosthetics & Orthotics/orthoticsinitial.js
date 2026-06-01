const SUBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "name": "chief_complaint",
          "label": "Chief Complaint",
          "type": "input"
        },
        {
          "name": "hpi",
          "label": "History of Present Illness",
          "type": "input"
        },
        {
          "title": "Functional Status",
          "fields": [
            {
              "name": "functional_difficulty",
              "label": "Functional Difficulty",
              "type": "checkbox-group",
              "options": [
                {
                  "label": "Walking",
                  "value": "walking"
                },
                {
                  "label": "Standing",
                  "value": "standing"
                },
                {
                  "label": "Transfer",
                  "value": "transfer"
                },
                {
                  "label": "Stairs",
                  "value": "stairs"
                },
                {
                  "label": "ADL",
                  "value": "adl"
                },
                {
                  "label": "RTW",
                  "value": "rtw"
                },
                {
                  "label": "Balance",
                  "value": "balance"
                },
                {
                  "label": "Others",
                  "value": "others"
                }
              ]
            },
            {
              "name": "pain",
              "label": "Pain",
              "type": "radio",
              "options": [
                {
                  "label": "No",
                  "value": "no"
                },
                {
                  "label": "Yes",
                  "value": "yes"
                }
              ]
            },
            {
              "name": "pain_location",
              "label": "Pain Location",
              "type": "checkbox-group",
              "showIf": {
                "field": "pain",
                "equals": "yes"
              },
              "options": [
                {
                  "label": "Limb",
                  "value": "limb"
                },
                {
                  "label": "Joint",
                  "value": "joint"
                },
                {
                  "label": "Back",
                  "value": "back"
                },
                {
                  "label": "Stump",
                  "value": "stump"
                },
                {
                  "label": "General",
                  "value": "general"
                }
              ]
            },
            {
              "name": "pain_score",
              "label": "Pain Score",
              "type": "scale-slider",
              "min": 0,
              "max": 10,
              "ranges": [
                {
                  "min": 0,
                  "max": 1,
                  "label": "Mild",
                  "color": "#22c55e"
                },
                {
                  "min": 1,
                  "max": 5,
                  "label": "Moderate",
                  "color": "#facc15"
                },
                {
                  "min": 5,
                  "max": 10,
                  "label": "Severe",
                  "color": "#ef4444"
                }
              ],
              "showValue": true,
              "showif": {
                "field": "pain",
                "equals": "yes"
              }
            },
            {
              "name": "pain_timing",
              "label": "Pain Timing",
              "type": "checkbox-group",
              "showIf": {
                "field": "pain",
                "equals": "yes"
              },
              "options": [
                {
                  "label": "Rest",
                  "value": "rest"
                },
                {
                  "label": "Movement",
                  "value": "movement"
                },
                {
                  "label": "Night",
                  "value": "night"
                },
                {
                  "label": "Weight-bearing",
                  "value": "weight_bearing"
                }
              ]
            },
            {
              "name": "functional_status_remark",
              "label": "Remark",
              "type": "textarea"
            }
          ]
        },
        {
          "title": "Mobility",
          "fields": [
            {
              "name": "mobility_status",
              "label": "Mobility Status",
              "type": "radio",
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
                },
                {
                  "label": "Dependent",
                  "value": "dependent"
                }
              ]
            },
            {
              "name": "assistive_device",
              "label": "Assistive Device",
              "type": "checkbox-group",
              "options": [
                {
                  "label": "Cane",
                  "value": "cane"
                },
                {
                  "label": "Quadripod",
                  "value": "quadripod"
                },
                {
                  "label": "Walker",
                  "value": "walker"
                },
                {
                  "label": "Crutches",
                  "value": "crutches"
                },
                {
                  "label": "Wheelchair",
                  "value": "wheelchair"
                },
                {
                  "label": "None",
                  "value": "none"
                }
              ]
            },
            {
              "name": "walking_distance",
              "label": "Walking Distance",
              "type": "radio",
              "options": [
                {
                  "label": "Unable",
                  "value": "unable"
                },
                {
                  "label": "<10m",
                  "value": "less_10m"
                },
                {
                  "label": "Household",
                  "value": "household"
                },
                {
                  "label": "Community",
                  "value": "community"
                }
              ]
            },
            {
              "name": "balance_issue",
              "label": "Balance Issue",
              "type": "radio",
              "options": [
                {
                  "label": "No",
                  "value": "no"
                },
                {
                  "label": "Yes",
                  "value": "yes"
                }
              ]
            },
            {
              "name": "fall_history",
              "label": "Fall History",
              "type": "radio",
              "options": [
                {
                  "label": "No",
                  "value": "no"
                },
                {
                  "label": "Yes",
                  "value": "yes"
                }
              ]
            },
            {
              "name": "fall_frequency",
              "label": "Fall Frequency",
              "type": "radio",
              "options": [
                {
                  "label": "Once",
                  "value": "once"
                },
                {
                  "label": "Occasional",
                  "value": "occasional"
                },
                {
                  "label": "Recurrent",
                  "value": "recurrent"
                }
              ]
            },
            {
              "name": "mobility_remark",
              "label": "Remark",
              "type": "textarea"
            }
          ]
        },
        {
          "title": "General Screening",
          "fields": [
            {
              "name": "hearing",
              "label": "Hearing",
              "type": "radio",
              "options": [
                {
                  "label": "Normal",
                  "value": "normal"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            },
            {
              "name": "vision",
              "label": "Vision",
              "type": "radio",
              "options": [
                {
                  "label": "Normal",
                  "value": "normal"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            },
            {
              "name": "hand_function",
              "label": "Hand Function",
              "type": "radio",
              "options": [
                {
                  "label": "Normal",
                  "value": "normal"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            },
            {
              "name": "cognitive",
              "label": "Cognitive",
              "type": "radio",
              "options": [
                {
                  "label": "Normal",
                  "value": "normal"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                }
              ]
            },
            {
              "name": "fatigue_level",
              "label": "Fatigue Level",
              "type": "radio",
              "options": [
                {
                  "label": "None",
                  "value": "none"
                },
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
            },
            {
              "name": "general_screening_remark",
              "label": "Remark",
              "type": "textarea"
            }
          ]
        },
        {
          "title": "Limb Condition",
          "fields": [
            {
              "name": "skin_condition",
              "label": "Skin Condition",
              "type": "checkbox-group",
              "options": [
                {
                  "label": "Normal",
                  "value": "normal"
                },
                {
                  "label": "Redness",
                  "value": "redness"
                },
                {
                  "label": "Wound",
                  "value": "wound"
                },
                {
                  "label": "Scar",
                  "value": "scar"
                },
                {
                  "label": "Sensitive",
                  "value": "sensitive"
                }
              ]
            },
            {
              "name": "sensation_issue",
              "label": "Sensation Issue",
              "type": "radio",
              "options": [
                {
                  "label": "No",
                  "value": "no"
                },
                {
                  "label": "Yes",
                  "value": "yes"
                }
              ]
            },
            {
              "name": "sound_limb_condition",
              "label": "Sound Limb Condition",
              "type": "checkbox-group",
              "options": [
                {
                  "label": "Normal",
                  "value": "normal"
                },
                {
                  "label": "Pain",
                  "value": "pain"
                },
                {
                  "label": "Weakness",
                  "value": "weakness"
                },
                {
                  "label": "Wound",
                  "value": "wound"
                },
                {
                  "label": "Deformity",
                  "value": "deformity"
                }
              ]
            },
            {
              "name": "limb_condition_remark",
              "label": "Remark",
              "type": "textarea"
            }
          ]
        },
        {
          "title": "Functional & Environmental Profile",
          "fields": [
            {
              "name": "home_environment",
              "label": "Home Environment",
              "type": "checkbox-group",
              "options": [
                {
                  "label": "Flat",
                  "value": "flat"
                },
                {
                  "label": "Stairs",
                  "value": "stairs"
                },
                {
                  "label": "Uneven",
                  "value": "uneven"
                },
                {
                  "label": "Narrow space",
                  "value": "narrow_space"
                }
              ]
            },
            {
              "name": "occupational_activity_level",
              "label": "Occupational Activity Level",
              "type": "radio",
              "options": [
                {
                  "label": "Sedentary",
                  "value": "sedentary"
                },
                {
                  "label": "Light",
                  "value": "light"
                },
                {
                  "label": "Moderate",
                  "value": "moderate"
                },
                {
                  "label": "Heavy",
                  "value": "heavy"
                }
              ]
            },
            {
              "name": "compliance_to_devices",
              "label": "Compliance To Devices",
              "type": "radio",
              "options": [
                {
                  "label": "Good",
                  "value": "good"
                },
                {
                  "label": "Partial",
                  "value": "partial"
                },
                {
                  "label": "Poor",
                  "value": "poor"
                },
                {
                  "label": "Not Applicable",
                  "value": "na"
                }
              ]
            },
            {
              "name": "functional_environment_remark",
              "label": "Remark",
              "type": "textarea"
            }
          ]
        },
        {
          "title": "Social History",
          "fields": [
            {
              "name": "marital_status",
              "label": "Marital Status",
              "type": "input",
              "readOnly": true
            },
            {
              "name": "dependent_children_status",
              "label": "Dependent Children Status",
              "type": "input",
              "readOnly": true
            },
            {
              "name": "job_status",
              "label": "Job Status",
              "type": "input",
              "readOnly": true
            },
            {
              "name": "social_history_remark",
              "label": "Remark",
              "type": "textarea"
            }
          ]
        },
        {
          "title": "Previous Orthosis",
          "fields": [
            {
              "name": "previous_orthosis",
              "label": "Previous Orthosis",
              "type": "radio",
              "options": [
                {
                  "label": "No",
                  "value": "no"
                },
                {
                  "label": "Yes",
                  "value": "yes"
                }
              ]
            },
            {
              "name": "previous_orthosis_other_issue",
              "label": "Other Issue",
              "type": "textarea"
            }
          ]
        },
        {
          "title": "Orthosis Usage",
          "showIf": {
            "field": "previous_orthosis",
            "equals": "yes"
          },
          "fields": [
            {
              "name": "orthosis_wearing_time",
              "label": "Wearing Time",
              "type": "single-select",
              "options": [
                {
                  "label": "Not using",
                  "value": "not_using"
                },
                {
                  "label": "<2h",
                  "value": "less_2h"
                },
                {
                  "label": "2–6h",
                  "value": "between_2_6h"
                },
                {
                  "label": ">6h",
                  "value": "more_6h"
                }
              ]
            },
            {
              "name": "skin_issue_with_orthosis",
              "label": "Skin Issue With Orthosis",
              "type": "radio",
              "options": [
                {
                  "label": "No",
                  "value": "no"
                },
                {
                  "label": "Yes",
                  "value": "yes"
                }
              ]
            },
            {
              "name": "current_orthosis_issue",
              "label": "Current Orthosis Issue",
              "type": "checkbox-group",
              "options": [
                {
                  "label": "Pain",
                  "value": "pain"
                },
                {
                  "label": "Poor Fit",
                  "value": "poor_fit"
                },
                {
                  "label": "Heavy",
                  "value": "heavy"
                },
                {
                  "label": "Not Effective",
                  "value": "not_effective"
                },
                {
                  "label": "Broken",
                  "value": "broken"
                }
              ]
            },
            {
              "name": "orthosis_usage_remark",
              "label": "Remark",
              "type": "textarea"
            }
          ]
        },
        {
          "title": "Gait & Control",
          "fields": [
            {
              "name": "gait_issue",
              "label": "Gait Issue",
              "type": "checkbox-group",
              "options": [
                {
                  "label": "Toe Drag",
                  "value": "toe_drag"
                },
                {
                  "label": "Knee Buckling",
                  "value": "knee_buckling"
                },
                {
                  "label": "Hyperextension",
                  "value": "hyperextension"
                },
                {
                  "label": "Inversion",
                  "value": "inversion"
                },
                {
                  "label": "Circumduction",
                  "value": "circumduction"
                },
                {
                  "label": "Poor Balance",
                  "value": "poor_balance"
                }
              ]
            },
            {
              "name": "gait_issue_other",
              "label": "Other Gait Issue",
              "type": "textarea"
            },
            {
              "name": "spasticity",
              "label": "Spasticity",
              "type": "single-select",
              "options": [
                {
                  "label": "No",
                  "value": "no"
                },
                {
                  "label": "Yes",
                  "value": "yes"
                }
              ]
            },
            {
              "name": "gait_previous_orthosis",
              "label": "Previous Orthosis",
              "type": "single-select",
              "options": [
                {
                  "label": "No",
                  "value": "no"
                },
                {
                  "label": "Yes",
                  "value": "yes"
                }
              ]
            },
            {
              "name": "gait_other_issue",
              "label": "Other Issue",
              "type": "textarea"
            }
          ]
        },
        {
          "title": "Usage",
          "showIf": {
            "field": "gait_previous_orthosis",
            "equals": "yes"
          },
          "fields": [
            {
              "name": "usage_wearing_time",
              "label": "Wearing Time",
              "type": "single-select",
              "options": [
                {
                  "label": "Not using",
                  "value": "not_using"
                },
                {
                  "label": "<2h",
                  "value": "less_2h"
                },
                {
                  "label": "2–6h",
                  "value": "between_2_6h"
                },
                {
                  "label": ">6h",
                  "value": "more_6h"
                }
              ]
            },
            {
              "name": "usage_skin_issue_with_orthosis",
              "label": "Skin Issue with Orthosis",
              "type": "single-select",
              "options": [
                {
                  "label": "No",
                  "value": "no"
                },
                {
                  "label": "Yes",
                  "value": "yes"
                }
              ]
            },
            {
              "name": "usage_current_orthosis_issue",
              "label": "Current Orthosis Issue",
              "type": "checkbox-group",
              "options": [
                {
                  "label": "Pain",
                  "value": "pain"
                },
                {
                  "label": "Poor Fit",
                  "value": "poor_fit"
                },
                {
                  "label": "Heavy",
                  "value": "heavy"
                },
                {
                  "label": "Not Effective",
                  "value": "not_effective"
                },
                {
                  "label": "Broken",
                  "value": "broken"
                }
              ]
            },
            {
              "name": "usage_remark",
              "label": "Remark",
              "type": "textarea"
            }
          ]
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
          "label": "Muscle Strength"
        },
        {
          "name": "mmt_upper_limb",
          "label": "MMT Upper Limb (R/L)",
          "type": "input"
        },
        {
          "name": "mmt_lower_limb",
          "label": "MMT Lower Limb (R/L)",
          "type": "input"
        },
        {
          "name": "affected_area_weakness",
          "label": "Affected Area (Weakness)",
          "type": "checkbox-group",
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
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "grip_strength_right",
          "label": "Grip Strength (Right)",
          "type": "input"
        },
        {
          "name": "grip_strength_left",
          "label": "Grip Strength (Left)",
          "type": "input"
        },
        {
          "name": "muscle_strength_remarks",
          "label": "Remarks",
          "type": "textarea"
        },
        {
          "type": "subheading",
          "label": "Tone & Tightness"
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
          "name": "tightness",
          "label": "Tightness",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        },
        {
          "name": "tone_tightness_remarks",
          "label": "Remarks",
          "type": "textarea"
        },
        {
          "type": "subheading",
          "label": "Range Of Motion"
        },
        {
          "name": "rom_launcher",
          "label": "",
          "type": "assessment-launcher",
          "options": [
            {
              "label": "Range Of Motion (ROM)",
              "value": "rom"
            }
          ]
        },
        {
          "name": "contracture",
          "label": "Contracture",
          "type": "checkbox-group",
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
          ]
        },
        {
          "name": "contracture_angle",
          "label": "Contracture Angle",
          "type": "input",
          "showIf": {
            "field": "contracture",
            "hasValue": true
          }
        },
        {
          "name": "rom_remarks",
          "label": "Remarks",
          "type": "textarea"
        },
        {
          "type": "subheading",
          "label": "Sensory"
        },
        {
          "name": "sensation",
          "label": "Sensation",
          "type": "radio",
          "options": [
            {
              "label": "Intact",
              "value": "intact"
            },
            {
              "label": "Reduced",
              "value": "reduced"
            },
            {
              "label": "Altered",
              "value": "altered"
            }
          ]
        },
        {
          "name": "proprioception",
          "label": "Proprioception",
          "type": "radio",
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
          "name": "sensory_remarks",
          "label": "Remarks",
          "type": "textarea"
        },
        {
          "type": "subheading",
          "label": "Gait Observation"
        },
        {
          "name": "mobility_status",
          "label": "Mobility Status",
          "type": "radio",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "With Aid",
              "value": "with_aid"
            },
            {
              "label": "Wheelchair",
              "value": "wheelchair"
            },
            {
              "label": "Unable",
              "value": "unable"
            }
          ]
        },
        {
          "name": "weight_bearing",
          "label": "Weight Bearing",
          "type": "radio",
          "options": [
            {
              "label": "Full",
              "value": "full"
            },
            {
              "label": "Partial",
              "value": "partial"
            },
            {
              "label": "Non-weight Bearing",
              "value": "non_weight_bearing"
            }
          ]
        },
        {
          "name": "gait_pattern",
          "label": "Gait Pattern",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Normal",
              "value": "normal"
            },
            {
              "label": "Antalgic",
              "value": "antalgic"
            },
            {
              "label": "Hemiplegic",
              "value": "hemiplegic"
            },
            {
              "label": "Ataxic",
              "value": "ataxic"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "gait_deviation",
          "label": "Gait Deviation",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Foot Drop",
              "value": "foot_drop"
            },
            {
              "label": "Circumduction",
              "value": "circumduction"
            },
            {
              "label": "Hip Hiking",
              "value": "hip_hiking"
            },
            {
              "label": "Knee Hyperextension",
              "value": "knee_hyperextension"
            },
            {
              "label": "Toe Drag",
              "value": "toe_drag"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "step_length",
          "label": "Step Length",
          "type": "radio",
          "options": [
            {
              "label": "Symmetrical",
              "value": "symmetrical"
            },
            {
              "label": "Reduced",
              "value": "reduced"
            }
          ]
        },
        {
          "name": "trunk_control",
          "label": "Trunk Control",
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
          ]
        },
        {
          "name": "postural",
          "label": "Postural",
          "type": "textarea"
        },
        {
          "name": "vicon_report",
          "label": "Vicon Report",
          "type": "textarea",
          "readOnly": true
        },
        {
          "name": "gait_remarks",
          "label": "Gait Remarks",
          "type": "textarea"
        },
        {
          "type": "subheading",
          "label": "Joint Assessment"
        },
        {
          "name": "joint",
          "label": "Joint",
          "type": "single-select",
          "options": [
            {
              "label": "Shoulder Right",
              "value": "shoulder_right"
            },
            {
              "label": "Shoulder Left",
              "value": "shoulder_left"
            },
            {
              "label": "Elbow Right",
              "value": "elbow_right"
            },
            {
              "label": "Elbow Left",
              "value": "elbow_left"
            },
            {
              "label": "Wrist Right",
              "value": "wrist_right"
            },
            {
              "label": "Wrist Left",
              "value": "wrist_left"
            },
            {
              "label": "Hip Right",
              "value": "hip_right"
            },
            {
              "label": "Hip Left",
              "value": "hip_left"
            },
            {
              "label": "Knee Right",
              "value": "knee_right"
            },
            {
              "label": "Knee Left",
              "value": "knee_left"
            },
            {
              "label": "Ankle Right",
              "value": "ankle_right"
            },
            {
              "label": "Ankle Left",
              "value": "ankle_left"
            }
          ]
        },
        {
          "name": "stability",
          "label": "Stability",
          "type": "radio",
          "options": [
            {
              "label": "Stable",
              "value": "stable"
            },
            {
              "label": "Mild Instability",
              "value": "mild_instability"
            },
            {
              "label": "Severe Instability",
              "value": "severe_instability"
            }
          ]
        },
        {
          "name": "deformity",
          "label": "Deformity",
          "type": "checkbox-group",
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "Varus",
              "value": "varus"
            },
            {
              "label": "Valgus",
              "value": "valgus"
            },
            {
              "label": "Equinus",
              "value": "equinus"
            },
            {
              "label": "Flexion",
              "value": "flexion"
            }
          ]
        },
        {
          "name": "swelling",
          "label": "Swelling",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        },
        {
          "name": "tenderness",
          "label": "Tenderness",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        },
        {
          "name": "joint_assessment_remarks",
          "label": "Remarks",
          "type": "textarea"
        },
        {
          "name": "region",
          "label": "Region/Type",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Upper Limb",
              "value": "upper_limb"
            },
            {
              "label": "Lower Limb",
              "value": "lower_limb"
            },
            {
              "label": "Spinal",
              "value": "spinal"
            }
          ]
        },
        {
          "name": "side",
          "label": "Side",
          "type": "checkbox-group",
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
          ]
        },
        {
          "name": "level",
          "label": "Level",
          "type": "radio",
          "options": [
            {
              "label": "FO",
              "value": "fo"
            },
            {
              "label": "AFO",
              "value": "afo"
            },
            {
              "label": "KO",
              "value": "ko"
            },
            {
              "label": "KAFO",
              "value": "kafo"
            },
            {
              "label": "Wrist-Hand",
              "value": "wrist_hand"
            },
            {
              "label": "Elbow",
              "value": "elbow"
            },
            {
              "label": "Shoulder",
              "value": "shoulder"
            },
            {
              "label": "TLSO",
              "value": "tlso"
            },
            {
              "label": "LSO",
              "value": "lso"
            },
            {
              "label": "Cervical",
              "value": "cervical"
            }
          ]
        },
        {
          "name": "indication",
          "label": "Indication",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Shoulder Sublux",
              "value": "shoulder_sublux"
            },
            {
              "label": "Prevent Sublux",
              "value": "prevent_sublux"
            },
            {
              "label": "Weakness",
              "value": "weakness"
            },
            {
              "label": "Spasticity",
              "value": "spasticity"
            },
            {
              "label": "Pain",
              "value": "pain"
            },
            {
              "label": "Instability",
              "value": "instability"
            },
            {
              "label": "Deformity",
              "value": "deformity"
            },
            {
              "label": "Post-OP",
              "value": "post_op"
            }
          ]
        },
        {
          "name": "control_issue",
          "label": "Control Issue",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Foot Drop",
              "value": "foot_drop"
            },
            {
              "label": "Knee Hyperextension",
              "value": "knee_hyperextension"
            },
            {
              "label": "Knee Instability",
              "value": "knee_instability"
            },
            {
              "label": "Limited ROM",
              "value": "limited_rom"
            },
            {
              "label": "Contracture",
              "value": "contracture"
            },
            {
              "label": "Poor Balance",
              "value": "poor_balance"
            }
          ]
        },
        {
          "name": "pain_score",
          "label": "Pain Score",
          "type": "scale-slider",
          "min": 0,
          "max": 10,
          "ranges": [
            {
              "min": 0,
              "max": 1,
              "label": "Mild",
              "color": "#22c55e"
            },
            {
              "min": 1,
              "max": 5,
              "label": "Moderate",
              "color": "#facc15"
            },
            {
              "min": 5,
              "max": 10,
              "label": "Severe",
              "color": "#ef4444"
            }
          ],
          "showValue": true
        },
        {
          "type": "subheading",
          "label": "Stump Management"
        },
        {
          "name": "stump_picture",
          "label": "Stump Picture",
          "type": "attach-file",
          "accept": "application/pdf,image/*",
          "multiple": false,
          "previewSize": {
            "width": 400,
            "height": 400
          },
          "hideInputAfterSelect": true
        },
        {
          "name": "stump_management_remark",
          "label": "Remarks",
          "type": "textarea"
        },
        {
          "type": "subheading",
          "label": "Functional Observation"
        },
        {
          "name": "foot_clearance",
          "label": "Foot Clearance",
          "type": "radio",
          "options": [
            {
              "label": "Normal",
              "value": "normal"
            },
            {
              "label": "Reduced",
              "value": "reduced"
            },
            {
              "label": "Absent",
              "value": "absent"
            }
          ]
        },
        {
          "name": "ankle_control",
          "label": "Ankle Control",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Normal",
              "value": "normal"
            },
            {
              "label": "Supination",
              "value": "supination"
            },
            {
              "label": "Pronation",
              "value": "pronation"
            },
            {
              "label": "Foot Drop",
              "value": "foot_drop"
            }
          ]
        },
        {
          "name": "knee_control",
          "label": "Knee Control",
          "type": "radio",
          "options": [
            {
              "label": "Stable",
              "value": "stable"
            },
            {
              "label": "Buckling",
              "value": "buckling"
            },
            {
              "label": "Hyperextension",
              "value": "hyperextension"
            }
          ]
        },
        {
          "name": "hip_hiking",
          "label": "Hip Hiking",
          "type": "single-select",
          "options": [
            {
              "label": "None",
              "value": "none"
            },
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
        },
        {
          "name": "weight_bearing",
          "label": "Weight Bearing",
          "type": "radio",
          "options": [
            {
              "label": "Full",
              "value": "full"
            },
            {
              "label": "Partial",
              "value": "partial"
            },
            {
              "label": "Unable",
              "value": "unable"
            }
          ]
        },
        {
          "name": "trunk_control_observation",
          "label": "Trunk Control",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Normal",
              "value": "normal"
            },
            {
              "label": "Forward Lean",
              "value": "forward_lean"
            },
            {
              "label": "Lateral Lean",
              "value": "lateral_lean"
            },
            {
              "label": "Poor Stability",
              "value": "poor_stability"
            },
            {
              "label": "Excessive Sway",
              "value": "excessive_sway"
            }
          ]
        },
        {
          "name": "upper_limb_function",
          "label": "Upper Limb Function",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Normal Arm Swing",
              "value": "normal_arm_swing"
            },
            {
              "label": "Reduced Arm Swing",
              "value": "reduced_arm_swing"
            },
            {
              "label": "Uses Walking Aid",
              "value": "uses_walking_aid"
            },
            {
              "label": "Weight Support On Aid",
              "value": "weight_support_on_aid"
            },
            {
              "label": "Guarding Position",
              "value": "guarding_position"
            }
          ]
        },
        {
          "name": "functional_observation_remark",
          "label": "Remark",
          "type": "textarea"
        },
        {
          "name": "using_orthosis",
          "label": "Using Orthosis",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Orthotic Check",
          "showIf": {
            "field": "using_orthosis",
            "equals": "yes"
          }
        },
        {
          "name": "orthosis_fit",
          "label": "Orthosis Fit",
          "type": "radio",
          "showIf": {
            "field": "using_orthosis",
            "equals": "yes"
          },
          "options": [
            {
              "label": "Good",
              "value": "good"
            },
            {
              "label": "Loose",
              "value": "loose"
            },
            {
              "label": "Tight",
              "value": "tight"
            },
            {
              "label": "Not Applicable",
              "value": "na"
            }
          ]
        },
        {
          "name": "skin_reaction",
          "label": "Skin Reaction",
          "type": "checkbox-group",
          "showIf": {
            "field": "using_orthosis",
            "equals": "yes"
          },
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "Redness",
              "value": "redness"
            },
            {
              "label": "Pressure Mark",
              "value": "pressure_mark"
            },
            {
              "label": "Skin Breakdown",
              "value": "skin_breakdown"
            }
          ]
        },
        {
          "name": "effectiveness",
          "label": "Effectiveness",
          "type": "radio",
          "showIf": {
            "field": "using_orthosis",
            "equals": "yes"
          },
          "options": [
            {
              "label": "Effective",
              "value": "effective"
            },
            {
              "label": "Partially Effective",
              "value": "partially_effective"
            },
            {
              "label": "Not Effective",
              "value": "not_effective"
            },
            {
              "label": "Not Applicable",
              "value": "na"
            }
          ]
        },
        {
          "name": "orthotic_check_remark",
          "label": "Remark",
          "type": "textarea",
          "showIf": {
            "field": "using_orthosis",
            "equals": "yes"
          }
        }
      ]
    }
  ]
}

const ASSESSMENT = 
{
   "sections":[
      {
         "fields":[
            {
               "name":"weight_bearing",
               "label":"Weight Bearing",
               "type":"radio",
               "readOnly":true,
               "options":[
                  {
                     "label":"Full",
                     "value":"full"
                  },
                  {
                     "label":"Partial",
                     "value":"partial"
                  },
                  {
                     "label":"Non-weight Bearing",
                     "value":"non_weight_bearing"
                  }
               ]
            },
            {
               "type":"input",
               "name":"clinical_impression",
               "label":"Clinical Impression"
            },
            {
               "name":"problem_listing",
               "label":"Problem Listing",
               "type":"textarea",
               "readOnly":true
            },
            {
               "name":"rehab_potential",
               "label":"Rehab Potential",
               "type":"single-select",
               "options":[
                  {
                     "label":"UL",
                     "value":"ul"
                  },
                  {
                     "label":"LL",
                     "value":"ll"
                  },
                  {
                     "label":"Others",
                     "value":"others"
                  }
               ]
            },
            {
               "name":"assessment_remarks",
               "label":"Remarks",
               "type":"textarea"
            },
            {
               "name":"case_type",
               "label":"Case Type",
               "type":"radio",
               "options":[
                  {
                     "label":"Amputee",
                     "value":"amputee"
                  },
                  {
                     "label":"Non-amputee",
                     "value":"non_amputee"
                  }
               ]
            },
            {
               "type":"subheading",
               "label":"Non-Amputee Assessment",
               "showIf":{
                  "field":"case_type",
                  "equals":"non_amputee"
               }
            },
            {
               "name":"indication",
               "label":"Indication",
               "type":"checkbox-group",
               "showIf":{
                  "field":"case_type",
                  "equals":"non_amputee"
               },
               "options":[
                  {
                     "label":"Foot Drop",
                     "value":"foot_drop"
                  },
                  {
                     "label":"Knee Instability",
                     "value":"knee_instability"
                  },
                  {
                     "label":"Pain",
                     "value":"pain"
                  },
                  {
                     "label":"Deformity",
                     "value":"deformity"
                  },
                  {
                     "label":"Others",
                     "value":"others"
                  }
               ]
            },
            {
               "name":"control_needed",
               "label":"Control Needed",
               "type":"radio",
               "showIf":{
                  "field":"case_type",
                  "equals":"non_amputee"
               },
               "options":[
                  {
                     "label":"Minimal",
                     "value":"minimal"
                  },
                  {
                     "label":"Moderate",
                     "value":"moderate"
                  },
                  {
                     "label":"Maximum",
                     "value":"maximum"
                  }
               ]
            },
            {
               "name":"existing_orthosis_issue",
               "label":"Existing Orthosis Issue",
               "type":"checkbox-group",
               "showIf":{
                  "field":"case_type",
                  "equals":"non_amputee"
               },
               "options":[
                  {
                     "label":"Poor Fit",
                     "value":"poor_fit"
                  },
                  {
                     "label":"Pain",
                     "value":"pain"
                  },
                  {
                     "label":"Not Effective",
                     "value":"not_effective"
                  },
                  {
                     "label":"Broken",
                     "value":"broken"
                  },
                  {
                     "label":"None",
                     "value":"none"
                  }
               ]
            },
            {
               "name":"non_amputee_assessment_remark",
               "label":"Remarks",
               "type":"textarea",
               "showIf":{
                  "field":"case_type",
                  "equals":"non_amputee"
               }
            }
         ]
      }
   ]
}

const PLAN = 
{
   "sections":[
      {
         "fields":[
            {
               "type":"subheading",
               "label":"Short Term Goals (2–4 Weeks)"
            },
            {
               "type":"dynamic-goals",
               "name":"short_term_goals"
            },
            {
               "type":"subheading",
               "label":"Long Term Goals (6–12 Weeks)"
            },
            {
               "type":"dynamic-goals",
               "name":"long_term_goals"
            },
            {
               "name":"weight_bearing",
               "label":"Weight Bearing",
               "type":"radio",
               "readOnly":true,
               "options":[
                  {
                     "label":"Full",
                     "value":"full"
                  },
                  {
                     "label":"Partial",
                     "value":"partial"
                  },
                  {
                     "label":"Non-weight Bearing",
                     "value":"non_weight_bearing"
                  }
               ]
            },
            {
               "name":"intervention_required",
               "label":"Intervention Required",
               "type":"single-select",
               "options":[
                  {
                     "label":"Prescription",
                     "value":"prescription"
                  },
                  {
                     "label":"Repair",
                     "value":"repair"
                  },
                  {
                     "label":"No Intervention",
                     "value":"no_intervention"
                  }
               ]
            },
            {
               "type":"subheading",
               "label":"Supplier Workflow",
               "showIf":{
                  "field":"intervention_required",
                  "equals":"prescription"
               }
            },
            {
               "name":"generate_memo",
               "label":"Generate Memo",
               "type":"button",
               "showIf":{
                  "field":"intervention_required",
                  "equals":"prescription"
               }
            },
            {
               "name":"request_quotation",
               "label":"Request for Quotation",
               "type":"button",
               "showIf":{
                  "field":"intervention_required",
                  "equals":"prescription"
               }
            },
            {
               "name":"prescription_type",
               "label":"Prescription Type",
               "type":"single-select",
               "showIf":{
                  "field":"intervention_required",
                  "equals":"prescription"
               },
               "options":[
                  {
                     "label":"Prosthetic",
                     "value":"prosthetic"
                  },
                  {
                     "label":"Orthotic",
                     "value":"orthotic"
                  }
               ]
            },
            {
               "name":"readiness_for_measurement",
               "label":"Readiness for Measurement",
               "type":"single-select",
               "options":[
                  {
                     "label":"Suitable for Immediate Measurement",
                     "value":"immediate_measurement"
                  },
                  {
                     "label":"Requires Training Before Measurement",
                     "value":"requires_training"
                  },
                  {
                     "label":"Defer Prescription",
                     "value":"defer_prescription"
                  }
               ]
            },
            {
               "name":"reason_training_required",
               "label":"Reason if Training Required",
               "type":"input",
               "showIf":{
                  "field":"readiness_for_measurement",
                  "equals":"requires_training"
               },
               "placeholder":"Strengthening / Balance training / Stump shaping / ROM improvement / Prosthetic training / Others"
            },
            {
               "name":"training",
               "label":"Training",
               "type":"input",
               "placeholder":"Stump bandaging / Prosthetic donning & doffing / Gait training / Strengthening / Others"
            },
            {
               "name":"education",
               "label":"Education",
               "type":"input",
               "placeholder":"Stump care / Skin care / Prosthetic education / Orthotic education / Others"
            },
            {
               "name":"plan_remarks",
               "label":"Remarks",
               "type":"textarea"
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
};
