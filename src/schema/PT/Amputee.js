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

const AMPUTATION_INFO_SCHEMA = {
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Amputation Information"
        },
        {
          "name": "amp_side",
          "label": "Amputation Side",
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Right",
              "value": "right"
            },
            {
              "label": "Bilateral",
              "value": "bilateral"
            }
          ]
        },
        {
          "name": "amp_region",
          "label": "Amputation Region",
          "type": "radio",
          "options": [
            {
              "label": "Lower Limb",
              "value": "lower_limb"
            },
            {
              "label": "Upper Limb",
              "value": "upper_limb"
            },
            {
              "label": "Both (LL+UL)",
              "value": "both"
            }
          ]
        },
        {
          "name": "amp_level_lower",
          "label": "Amputation Level — Lower Limb",
          "type": "checkbox-group",
          "showIf": {
            "or": [
              {
                "field": "amp_region",
                "equals": "lower_limb"
              },
              {
                "field": "amp_region",
                "equals": "both"
              }
            ]
          },
          "options": [
            {
              "label": "Partial Foot",
              "value": "partial_foot"
            },
            {
              "label": "Ankle Disarticulation",
              "value": "ankle_disarticulation"
            },
            {
              "label": "Transtibial (BK)",
              "value": "transtibial"
            },
            {
              "label": "Knee Disarticulation",
              "value": "knee_disarticulation"
            },
            {
              "label": "Transfemoral (AK)",
              "value": "transfemoral"
            },
            {
              "label": "Hip Disarticulation",
              "value": "hip_disarticulation"
            },
            {
              "label": "Hemipelvectomy",
              "value": "hemipelvectomy"
            },
            {
              "label": "Bilateral Transtibial",
              "value": "bilateral_transtibial"
            },
            {
              "label": "Bilateral Transfemoral",
              "value": "bilateral_transfemoral"
            }
          ]
        },
        {
          "name": "amp_level_upper",
          "label": "Amputation Level — Upper Limb",
          "type": "checkbox-group",
          "showIf": {
            "or": [
              {
                "field": "amp_region",
                "equals": "upper_limb"
              },
              {
                "field": "amp_region",
                "equals": "both"
              }
            ]
          },
          "options": [
            {
              "label": "Partial Hand",
              "value": "partial_hand"
            },
            {
              "label": "Wrist Disarticulation",
              "value": "wrist_disarticulation"
            },
            {
              "label": "Transradial (BE)",
              "value": "transradial"
            },
            {
              "label": "Elbow Disarticulation",
              "value": "elbow_disarticulation"
            },
            {
              "label": "Transhumeral (AE)",
              "value": "transhumeral"
            },
            {
              "label": "Shoulder Disarticulation",
              "value": "shoulder_disarticulation"
            },
            {
              "label": "Forequarter",
              "value": "forequarter"
            },
            {
              "label": "Bilateral Transradial",
              "value": "bilateral_transradial"
            },
            {
              "label": "Quadruple Amputation",
              "value": "quadruple_amputation"
            }
          ]
        },
        {
          "name": "amp_reason",
          "label": "Reason for Amputation",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Diabetes Mellitus",
              "value": "diabetes_mellitus"
            },
            {
              "label": "Traumatic Injury",
              "value": "traumatic_injury"
            },
            {
              "label": "Cancer",
              "value": "cancer"
            },
            {
              "label": "Necrotizing Fasciitis (Non-DM)",
              "value": "necrotizing_fasciitis"
            },
            {
              "label": "Peripheral Vascular Disease",
              "value": "peripheral_vascular"
            },
            {
              "label": "Vascular Injury",
              "value": "vascular_injury"
            },
            {
              "label": "Tumour (Benign)",
              "value": "tumour_benign"
            },
            {
              "label": "Aneurysm",
              "value": "aneurysm"
            },
            {
              "label": "Infection",
              "value": "infection"
            },
            {
              "label": "Other",
              "value": "other"
            }
          ]
        },
        {
          "name": "amp_reason_other",
          "label": "Other (specify)",
          "type": "input",
          "showIf": {
            "field": "amp_reason",
            "includes": "other"
          }
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
          "name": "amp_chief_complaints",
          "label": "Chief Complaints",
          "type": "input"
        },
        {
          "name": "hpi",
          "label": "History of Present Illness",
          "type": "input"
        },
        {
          "type": "subheading",
          "label": "Hypoglycaemic Awareness",
          "showIf": {
            "field": "amp_reason",
            "includes": "diabetes_mellitus"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "amp_reason",
            "includes": "diabetes_mellitus"
          },
          "fields": [
            {
              "name": "hypo_frequency",
              "label": "Frequency",
              "type": "input"
            },
            {
              "name": "hypo_last_episode",
              "label": "Last Episode",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "amp_reason",
            "includes": "diabetes_mellitus"
          },
          "fields": [
            {
              "name": "hypo_common_symptoms",
              "label": "Common Symptoms",
              "type": "input"
            },
            {
              "name": "hypo_time_of_day",
              "label": "Time of Day",
              "type": "input"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Pain Assessment"
        },
        {
          "name": "amp_stump_pain",
          "label": "Stump Pain",
          "type": "radio",
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "Localised",
              "value": "localised"
            },
            {
              "label": "Significant Diffuse",
              "value": "significant_diffuse"
            }
          ]
        },
        {
          "name": "amp_stump_nrs",
          "label": "NRS Score (0 = no pain · 10 = worst)",
          "type": "scale-slider",
          "min": 0,
          "max": 10,
          "showValue": true,
          "showIf": {
            "or": [
              {
                "field": "amp_stump_pain",
                "equals": "localised"
              },
              {
                "field": "amp_stump_pain",
                "equals": "significant_diffuse"
              }
            ]
          },
          "ranges": [
            {
              "min": 0,
              "max": 3,
              "label": "Mild",
              "color": "#22c55e"
            },
            {
              "min": 3,
              "max": 7,
              "label": "Moderate",
              "color": "#facc15"
            },
            {
              "min": 7,
              "max": 10,
              "label": "Severe",
              "color": "#ef4444"
            }
          ]
        },
        {
          "name": "amp_stump_location",
          "label": "Location on stump",
          "type": "input",
          "showIf": {
            "or": [
              {
                "field": "amp_stump_pain",
                "equals": "localised"
              },
              {
                "field": "amp_stump_pain",
                "equals": "significant_diffuse"
              }
            ]
          }
        },
        {
          "name": "amp_pls",
          "label": "Phantom Limb Sensation (PLS)",
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
          "name": "amp_pls_describe",
          "label": "Describe Sensation",
          "type": "input",
          "showIf": {
            "field": "amp_pls",
            "equals": "present"
          }
        },
        {
          "name": "amp_plp",
          "label": "Phantom Limb Pain (PLP)",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Dull",
              "value": "dull"
            },
            {
              "label": "Throbbing",
              "value": "throbbing"
            },
            {
              "label": "Knifelike",
              "value": "knifelike"
            },
            {
              "label": "Burning",
              "value": "burning"
            },
            {
              "label": "Squeezing",
              "value": "squeezing"
            },
            {
              "label": "Shooting",
              "value": "shooting"
            },
            {
              "label": "Prickling",
              "value": "prickling"
            },
            {
              "label": "Tingling",
              "value": "tingling"
            },
            {
              "label": "Cramp-like",
              "value": "cramp_like"
            },
            {
              "label": "Sawing",
              "value": "sawing"
            },
            {
              "label": "Pressing",
              "value": "pressing"
            },
            {
              "label": "Sticking",
              "value": "sticking"
            }
          ]
        },
        {
          "name": "amp_plp_nrs",
          "label": "NRS Score (0–10)",
          "type": "scale-slider",
          "min": 0,
          "max": 10,
          "showValue": true,
          "ranges": [
            {
              "min": 0,
              "max": 3,
              "label": "Mild",
              "color": "#22c55e"
            },
            {
              "min": 3,
              "max": 7,
              "label": "Moderate",
              "color": "#facc15"
            },
            {
              "min": 7,
              "max": 10,
              "label": "Severe",
              "color": "#ef4444"
            }
          ]
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "amp_plp_frequency",
              "label": "Frequency",
              "type": "input"
            },
            {
              "name": "amp_plp_area",
              "label": "Area",
              "type": "input"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "History of Previous Falls"
        },
        {
          "name": "amp_fall_6months",
          "label": "Fall in last 6 months",
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
          "name": "amp_fall_activity",
          "label": "Activity at time of fall",
          "type": "input",
          "showIf": {
            "field": "amp_fall_6months",
            "equals": "yes"
          }
        },
        {
          "name": "amp_get_up_ability",
          "label": "Ability to get up from floor",
          "type": "radio",
          "options": [
            {
              "label": "With Help",
              "value": "with_help"
            },
            {
              "label": "Without Help",
              "value": "without_help"
            },
            {
              "label": "Unable",
              "value": "unable"
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
          "label": "Baseline Vitals"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "obj_bp",
              "label": "BP (mmHg)",
              "type": "input",
              "placeholder": "e.g. 120/80"
            },
            {
              "name": "obj_hr",
              "label": "HR (bpm)",
              "type": "input",
              "placeholder": "bpm"
            },
            {
              "name": "obj_spo2",
              "label": "SpO₂ (%)",
              "type": "input",
              "placeholder": "%"
            }
          ]
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "obj_rr",
              "label": "RR (breaths/min)",
              "type": "input",
              "placeholder": "/min"
            },
            {
              "name": "obj_temp",
              "label": "Temp / BGL",
              "type": "input",
              "placeholder": "°C / mmol/L"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Sensory"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "obj_vision",
              "label": "Vision",
              "type": "input"
            },
            {
              "name": "obj_hearing",
              "label": "Hearing",
              "type": "input"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Stump Assessment"
        },
        {
          "name": "stump_shape",
          "label": "Stump Shape",
          "type": "radio",
          "options": [
            {
              "label": "Cylindrical",
              "value": "cylindrical"
            },
            {
              "label": "Conical",
              "value": "conical"
            },
            {
              "label": "Club-shaped",
              "value": "club_shaped"
            },
            {
              "label": "Bulbous",
              "value": "bulbous"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "stump_shape_other",
          "label": "Others (specify)",
          "type": "input",
          "showIf": {
            "field": "stump_shape",
            "equals": "others"
          }
        },
        {
          "name": "stump_length",
          "label": "Length",
          "type": "radio",
          "options": [
            {
              "label": "Short",
              "value": "short"
            },
            {
              "label": "Medium",
              "value": "medium"
            },
            {
              "label": "Long",
              "value": "long"
            }
          ]
        },
        {
          "name": "stump_scar",
          "label": "Scar",
          "type": "radio",
          "options": [
            {
              "label": "Well Healed",
              "value": "well_healed"
            },
            {
              "label": "Unhealed",
              "value": "unhealed"
            }
          ]
        },
        {
          "name": "stump_skin",
          "label": "Skin",
          "type": "radio",
          "options": [
            {
              "label": "Undamaged",
              "value": "undamaged"
            },
            {
              "label": "Deep Wrinkle",
              "value": "deep_wrinkle"
            },
            {
              "label": "Macerated",
              "value": "macerated"
            },
            {
              "label": "Blistered",
              "value": "blistered"
            }
          ]
        },
        {
          "name": "stump_solidity",
          "label": "Solidity",
          "type": "radio",
          "options": [
            {
              "label": "Soft",
              "value": "soft"
            },
            {
              "label": "Edematous",
              "value": "edematous"
            },
            {
              "label": "Firm",
              "value": "firm"
            }
          ]
        },
        {
          "name": "stump_end",
          "label": "End of Stump",
          "type": "radio",
          "options": [
            {
              "label": "Rounded",
              "value": "rounded"
            },
            {
              "label": "Bony Prominent",
              "value": "bony_prominent"
            },
            {
              "label": "Adherent Scar",
              "value": "adherent_scar"
            }
          ]
        },
        {
          "name": "stump_sensitivity",
          "label": "Sensitivity",
          "type": "radio",
          "options": [
            {
              "label": "Normal",
              "value": "normal"
            },
            {
              "label": "Hypersensitive",
              "value": "hypersensitive"
            },
            {
              "label": "Reduced",
              "value": "reduced"
            }
          ]
        },
        {
          "name": "stump_sensation",
          "label": "Sensation",
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
          "name": "stump_oedema",
          "label": "Oedema",
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
          "name": "stump_skin_integrity",
          "label": "Skin Integrity",
          "type": "radio",
          "options": [
            {
              "label": "Intact",
              "value": "intact"
            },
            {
              "label": "Open wound",
              "value": "open_wound"
            },
            {
              "label": "Blister",
              "value": "blister"
            }
          ]
        },
        {
          "name": "intact_limb_condition",
          "label": "Condition of Intact Limb",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Calluses",
              "value": "calluses"
            },
            {
              "label": "Dry / Cracked Foot",
              "value": "dry_cracked_foot"
            },
            {
              "label": "Charcot Foot",
              "value": "charcot_foot"
            },
            {
              "label": "History of Fracture",
              "value": "fracture_history"
            },
            {
              "label": "Lower Limb Oedema",
              "value": "lower_limb_oedema"
            },
            {
              "label": "Thickened Toenail",
              "value": "thickened_toenail"
            },
            {
              "label": "Flat Foot",
              "value": "flat_foot"
            },
            {
              "label": "Hallux Valgus",
              "value": "hallux_valgus"
            },
            {
              "label": "Hammer Toe Deformity",
              "value": "hammer_toe_deformity"
            },
            {
              "label": "Claw Toe Deformity",
              "value": "claw_toe_deformity"
            },
            {
              "label": "Varicose Vein",
              "value": "varicose_vein"
            },
            {
              "label": "No abnormality",
              "value": "no_abnormality"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Current Functional Mobility & Transfer"
        },
        {
          "name": "assistive_device",
          "label": "Assistive Device",
          "type": "radio",
          "labelAbove": true,
          "options": [
            {
              "label": "Wheelchair",
              "value": "wheelchair"
            },
            {
              "label": "Frame",
              "value": "frame"
            },
            {
              "label": "Crutches",
              "value": "crutches"
            },
            {
              "label": "Cane",
              "value": "cane"
            },
            {
              "label": "Prosthesis",
              "value": "prosthesis"
            },
            {
              "label": "None",
              "value": "none"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Function"
        },
        {
          "name": "func_mobility",
          "label": "Mobility",
          "type": "radio-matrix",
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
              "label": "Total Dep.",
              "value": "total_dep"
            }
          ]
        },
        {
          "name": "func_bed_mobility",
          "label": "Bed Mobility",
          "type": "radio-matrix",
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
              "label": "Total Dep.",
              "value": "total_dep"
            }
          ]
        },
        {
          "name": "func_toilet_transfer",
          "label": "Toilet Transfer",
          "type": "radio-matrix",
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
              "label": "Total Dep.",
              "value": "total_dep"
            }
          ]
        },
        {
          "name": "func_sit_to_stand",
          "label": "Sit-to-Stand",
          "type": "radio-matrix",
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
              "label": "Total Dep.",
              "value": "total_dep"
            }
          ]
        },
        {
          "name": "func_standing_balance",
          "label": "Standing Balance",
          "type": "radio-matrix",
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
              "label": "Total Dep.",
              "value": "total_dep"
            }
          ]
        },
        {
          "name": "func_stairs",
          "label": "Stairs",
          "type": "radio-matrix",
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
              "label": "Total Dep.",
              "value": "total_dep"
            }
          ]
        },
        {
          "name": "func_community_ambulation",
          "label": "Community Ambulation",
          "type": "radio-matrix",
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
              "label": "Total Dep.",
              "value": "total_dep"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Scales"
        },
        {
          "name": "amp_scales",
          "type": "assessment-launcher",
          "options": [
            {
              "label": "ROM",
              "value": "rom",
              "regions": []
            },
            {
              "label": "MMT",
              "value": "mmt",
              "regions": []
            }
          ],
          "filterByRegionField": "amp_region"
        },
        {
          "type": "subheading",
          "label": "Lower Limb Outcome Measures",
          "showIf": {
            "or": [
              {
                "field": "amp_region",
                "equals": "lower_limb"
              },
              {
                "field": "amp_region",
                "equals": "both"
              }
            ]
          }
        },
        {
          "name": "amp_ll_outcomes",
          "type": "assessment-launcher",
          "showIf": {
            "or": [
              {
                "field": "amp_region",
                "equals": "lower_limb"
              },
              {
                "field": "amp_region",
                "equals": "both"
              }
            ]
          },
          "options": [
            {
              "label": "AMP with Prosthesis (AMPPro)",
              "value": "amp_pro"
            },
            {
              "label": "AMP without Prosthesis (AMPnoPro)",
              "value": "amp_nopro"
            },
            {
              "label": "5× Sit-to-Stand Test (5xSTS)",
              "value": "5xsts"
            },
            {
              "label": "6-Minute Walk Test (6MWT)",
              "value": "sixmwt"
            },
            {
              "label": "Functional Gait Assessment (FGA)",
              "value": "fga"
            },
            {
              "label": "Locomotor Capabilities Index-5 (LCI-5)",
              "value": "lci5"
            },
            {
              "label": "TAPES",
              "value": "tapes"
            },
            {
              "label": "Timed Up and Go (TUG)",
              "value": "tug"
            },
            {
              "label": "L-Test",
              "value": "ltest"
            },
            {
              "label": "Berg Balance Scale (BBS)",
              "value": "bbs"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Upper Limb Outcome Measures",
          "showIf": {
            "or": [
              {
                "field": "amp_region",
                "equals": "upper_limb"
              },
              {
                "field": "amp_region",
                "equals": "both"
              }
            ]
          }
        },
        {
          "name": "amp_ul_outcomes",
          "type": "assessment-launcher",
          "showIf": {
            "or": [
              {
                "field": "amp_region",
                "equals": "upper_limb"
              },
              {
                "field": "amp_region",
                "equals": "both"
              }
            ]
          },
          "options": [
            {
              "label": "DASH (Disabilities of Arm, Shoulder & Hand)",
              "value": "dash"
            },
            {
              "label": "OPUS (Orthotics & Prosthetics Functional Outcome)",
              "value": "opus"
            },
            {
              "label": "Grip Strength (Dynamometer)",
              "value": "grip"
            },
            {
              "label": "9-Hole Peg Test",
              "value": "nine_hole_peg"
            },
            {
              "label": "Box & Block Test",
              "value": "box_block"
            }
          ]
        }
      ]
    }
  ]
}

const ASSESSMENT = {
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "PROBLEM LISTING"
        },
        {
          "name": "problem_listing",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Muscle weakness",
              "value": "muscle_weakness"
            },
            {
              "label": "Reduced range of motion",
              "value": "reduced_range_of_motion"
            },
            {
              "label": "Contractures",
              "value": "contractures"
            },
            {
              "label": "Phantom limb pain or sensation",
              "value": "phantom_limb_pain_sensation"
            },
            {
              "label": "Edema or poor stump shaping",
              "value": "edema_poor_stump_shaping"
            },
            {
              "label": "Poor cardiorespiratory endurance",
              "value": "poor_cardiorespiratory_endurance"
            },
            {
              "label": "Poor muscular endurance",
              "value": "poor_muscular_endurance"
            },
            {
              "label": "Post-operative pain",
              "value": "post_operative_pain"
            },
            {
              "label": "Wound healing issues",
              "value": "wound_healing_issues"
            },
            {
              "label": "Dermatological disorder",
              "value": "dermatological_disorder"
            },
            {
              "label": "Poor postural balance",
              "value": "poor_postural_balance"
            },
            {
              "label": "Poor prosthetic fitting",
              "value": "poor_prosthetic_fitting"
            },
            {
              "label": "Asymmetrical gait pattern",
              "value": "asymmetrical_gait_pattern"
            },
            {
              "label": "Difficulty with donning/doffing prosthesis",
              "value": "difficulty_donning_doffing_prosthesis"
            },
            {
              "label": "Reduced mobility",
              "value": "reduced_mobility"
            },
            {
              "label": "Dependence on assistive devices",
              "value": "dependence_on_assistive_devices"
            },
            {
              "label": "Weight gain",
              "value": "weight_gain"
            },
            {
              "label": "Others",
              "value": "other"
            }
          ]
        },
        {
          "name": "problem_listing_other",
          "label": "Specify Other Problem",
          "type": "input",
          "placeholder": "Enter other problem",
          "showIf": {
            "field": "problem_listing",
            "includes": "other"
          }
        },
        {
          "type": "subheading",
          "label": "CLINICAL IMPRESSION "
        },
        {
          "name": "clinical_impression",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Deficits in muscular force production likely secondary to disuse atrophy",
              "value": "muscular_force_disuse_atrophy"
            },
            {
              "label": "Shortening of muscle fibers and surrounding tissues due to prolonged inactivity or immobilization",
              "value": "muscle_shortening_immobilization"
            },
            {
              "label": "Inability to maintain safe ambulation without external support",
              "value": "unsafe_ambulation_support_required"
            },
            {
              "label": "Altered center of mass and impaired proprioception",
              "value": "altered_com_proprioception"
            },
            {
              "label": "Neuropathic pain originating in CNS or peripheral nerves",
              "value": "neuropathic_pain"
            },
            {
              "label": "Fluctuating residual limb volume",
              "value": "residual_limb_volume_fluctuation"
            },
            {
              "label": "Fear of falling",
              "value": "fear_of_falling"
            },
            {
              "label": "Impaired control and sensory loss",
              "value": "impaired_control_sensory_loss"
            },
            {
              "label": "Physical inactivity",
              "value": "physical_inactivity"
            },
            {
              "label": "Protective posture",
              "value": "protective_posture"
            },
            {
              "label": "Mechanical mismatch between residual limb and prosthesis",
              "value": "prosthesis_mismatch"
            },
            {
              "label": "Improper donning/doffing technique",
              "value": "improper_donning_doffing"
            },
            {
              "label": "Inadequate prosthetic adaptation",
              "value": "inadequate_prosthetic_adaptation"
            },
            {
              "label": "Increased BMI secondary to sedentary lifestyle",
              "value": "increased_bmi_sedentary"
            },
            {
              "label": "Others",
              "value": "other"
            }
          ]
        },
        {
          "name": "clinical_impression_other",
          "label": "Specify Other Clinical Impression",
          "type": "input",
          "placeholder": "Enter other clinical impression",
          "showIf": {
            "field": "clinical_impression",
            "includes": "other"
          }
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
          "type": "dynamic-goals",
          "name": "amp_short_term_goals"
        },
        {
          "type": "subheading",
          "label": "Long-Term Goals (6–12 weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "amp_long_term_goals"
        },
        {
          "type": "subheading",
          "label": "PLAN AND INTERVENTIONS"
        },
        {
          "name": "plan_and_interventions",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Neuromuscular re-education",
              "value": "neuromuscular_reeducation"
            },
            {
              "label": "Stretching exercise",
              "value": "stretching_exercise"
            },
            {
              "label": "Proprioceptive training",
              "value": "proprioceptive_training"
            },
            {
              "label": "Weight shifting training",
              "value": "weight_shifting_training"
            },
            {
              "label": "Dual task training",
              "value": "dual_task_training"
            },
            {
              "label": "Soft tissue mobilization",
              "value": "soft_tissue_mobilization"
            },
            {
              "label": "Compression therapy",
              "value": "compression_therapy"
            },
            {
              "label": "Electrotherapy",
              "value": "electrotherapy"
            },
            {
              "label": "Positioning program",
              "value": "positioning_program"
            },
            {
              "label": "Mirror therapy",
              "value": "mirror_therapy"
            },
            {
              "label": "Graded Motor Imagery (GMI)",
              "value": "graded_motor_imagery"
            },
            {
              "label": "Patient education",
              "value": "patient_education"
            },
            {
              "label": "Donning/doffing training",
              "value": "donning_doffing_training"
            },
            {
              "label": "Gait correction / re-education with prosthesis",
              "value": "gait_reeducation_prosthesis"
            },
            {
              "label": "Others",
              "value": "other"
            }
          ]
        },
        {
          "name": "plan_and_interventions_other",
          "label": "Specify Other Intervention",
          "type": "input",
          "placeholder": "Enter other intervention",
          "showIf": {
            "field": "plan_and_interventions",
            "includes": "other"
          }
        },
        {
          "type": "subheading",
          "label": "HOME EXERCISE PROGRAM"
        },
        {
          "name": "home_exercise_program",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Stretching and joint mobilization",
              "value": "stretching_joint_mobilization"
            },
            {
              "label": "Sit to stand",
              "value": "sit_to_stand"
            },
            {
              "label": "Strengthening with elastic band",
              "value": "elastic_band_strengthening"
            },
            {
              "label": "Weight shift (forward/backward, side to side)",
              "value": "weight_shift"
            },
            {
              "label": "Walking (indoor/outdoor)",
              "value": "walking"
            },
            {
              "label": "Imagined movement (motor imagery)",
              "value": "motor_imagery"
            },
            {
              "label": "Others",
              "value": "other"
            }
          ]
        },
        {
          "name": "home_exercise_program_other",
          "label": "Specify Other Home Exercise",
          "type": "input",
          "placeholder": "Enter other home exercise program",
          "showIf": {
            "field": "home_exercise_program",
            "includes": "other"
          }
        },
        {
          "type": "subheading",
          "label": "Referrals"
        },
        {
          "name": "amp_referrals",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Cyberdyne",
              "value": "cyberdyne"
            },
            {
              "label": "Hydrotherapy",
              "value": "hydrotherapy"
            },
            {
              "label": "SCI",
              "value": "sci"
            },
            {
              "label": "Nursing",
              "value": "nursing"
            },
            {
              "label": "Gait Analysis",
              "value": "gait_analysis"
            },
            {
              "label": "Advanced Robotic",
              "value": "advanced_robotic"
            },
            {
              "label": "MSD",
              "value": "msd"
            },
            {
              "label": "Gym",
              "value": "gym"
            },
            {
              "label": "tDCS",
              "value": "tdcs"
            },
            {
              "label": "rTMS",
              "value": "rtms"
            },
            {
              "label": "Metamotus Galileo",
              "value": "metamotus_galileo"
            },
            {
              "label": "Neuro",
              "value": "neuro"
            },
            {
              "label": "Vocational",
              "value": "vocational"
            },
            {
              "label": "Prosthetics / O&P",
              "value": "prosthetics_op"
            },
            {
              "label": "Psychology",
              "value": "psychology"
            }
          ]
        },
        {
          "name": "amp_assistive_device_prescribed",
          "label": "Assistive Device Prescribed",
          "type": "radio",
          "labelAbove": true,
          "options": [
            {
              "label": "Wheelchair",
              "value": "wheelchair"
            },
            {
              "label": "Frame",
              "value": "frame"
            },
            {
              "label": "Crutches",
              "value": "crutches"
            },
            {
              "label": "Cane",
              "value": "cane"
            },
            {
              "label": "Prosthesis",
              "value": "prosthesis"
            },
            {
              "label": "None",
              "value": "none"
            }
          ]
        },
        {
          "name": "amp_prosthesis_type",
          "label": "Prosthesis type / components",
          "type": "input",
          "showIf": {
            "field": "amp_assistive_device_prescribed",
            "equals": "prosthesis"
          }
        },
        {
          "type": "subheading",
          "label": "Next Review / Follow-up"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "amp_next_appointment",
              "label": "Next Appointment Date",
              "type": "date"
            },
            {
              "name": "amp_session_frequency",
              "label": "Frequency of Sessions",
              "type": "input"
            }
          ]
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
  CONSENT,
  AMPUTATION_INFO_SCHEMA
};