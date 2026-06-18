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
              "label": "Consent",
              "type": "single-select",
              "options": [
                {
                  "label": "Dry Needling",
                  "value": "dry_needling"
                },
                {
                  "label": "Wall Climbing",
                  "value": "wall_climbing"
                }
              ]
            }
          ]
        },
        // {
        //   "type": "custom",
        //   "name": "_open_saved_consent"
        // },
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
          "type": "textarea",
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
          "type": "textarea",
          "showIf": {
            "field": "equipment_owned",
            "includes": "perkeso"
          }
        },
        {
          "name": "equipment_ngo",
          "label": "NGO Equipment Details",
          "type": "textarea",
          "showIf": {
            "field": "equipment_owned",
            "includes": "ngo"
          }
        },
        {
          "name": "equipment_self",
          "label": "Self-purchased Equipment Details",
          "type": "textarea",
          "showIf": {
            "field": "equipment_owned",
            "includes": "self"
          }
        },
        {
          "name": "equipment_others",
          "label": "Other Equipment Details",
          "type": "textarea",
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
          "type": "textarea",
          "readOnly": true
        }
      ]
    }
  ]
}

const SUBJECTIVE = {
  "title": "SUBJECTIVE",
  "sections": [
    {
      "fields": [
        {
          "type": "input",
          "name": "chief_complaint",
          "label": "Chief Complaint"
        },
        {
          "type": "input",
          "name": "history_present_illness",
          "label": "History of Present Illness"
        },
        {
          "name": "dr_steering_control",
          "label": "Steering Control",
          "type": "radio",
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
        },
        {
          "name": "dr_accel_brake",
          "label": "Accelerator/Brake Control",
          "type": "radio",
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
        },
        {
          "type": "subheading",
          "label": "Vision"
        },
        {
          "name": "dr_right_eye_acuity",
          "label": "Right Eye Visual Acuity",
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
          "name": "dr_left_eye_acuity",
          "label": "Left Eye Visual Acuity",
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
          "name": "dr_right_eye_fields",
          "label": "Right Eye Visual Fields",
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
          "name": "dr_left_eye_fields",
          "label": "Left Eye Visual Fields",
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
        }
      ]
    }
  ]
}

const OBJECTIVE = {
  "title": "OBJECTIVE",
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Physical / Motor"
        },
        {
          "name": "dr_dominant_hand",
          "label": "Dominant Hand",
          "type": "radio",
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
        },
        {
          "name": "dr_dominant_hand_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "or": [
              {
                "field": "dr_dominant_hand",
                "equals": "right"
              },
              {
                "field": "dr_dominant_hand",
                "equals": "left"
              }
            ]
          }
        },
        {
          "name": "dr_hand_function",
          "label": "Hand Function / Dexterity Test",
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
          "name": "dr_rom",
          "label": "ROM",
          "type": "radio",
          "options": [
            {
              "label": "Full AROM",
              "value": "full_arom"
            },
            {
              "label": "Limited AROM",
              "value": "limited_arom"
            }
          ]
        },
        {
          "name": "dr_strength",
          "label": "Strength / MMT / Power",
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
          "name": "dr_mas",
          "label": "Modified Ashworth Scale (MAS)",
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
          "name": "dr_sensation",
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
          "name": "dr_coordination",
          "label": "Coordination",
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
          "type": "subheading",
          "label": "Proprioception Test"
        },
        {
          "name": "dr_prop_upper",
          "label": "Upper Limb",
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
          "name": "dr_prop_lower",
          "label": "Lower Limb",
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
          "type": "subheading",
          "label": "Balance"
        },
        {
          "name": "dr_berg_balance",
          "label": "Berg Balance Scale",
          "type": "input",
          "placeholder": "Score"
        },
        {
          "type": "subheading",
          "label": "General Physical Endurance"
        },
        {
          "name": "dr_6mwt",
          "label": "6MWT",
          "type": "input",
          "placeholder": "metres"
        },
        {
          "name": "dr_wheelchair_mgmt",
          "label": "W/Chair Management",
          "type": "input"
        },
        {
          "name": "dr_cabin_control",
          "label": "Arms enough movement and strength to control all features and gadgets at cabin",
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
          "name": "dr_brake_reaction",
          "label": "Brake Reaction Time (s)",
          "info": {
            "title": "Brake Reaction Time",
            "content": [
              "0.35–0.65 seconds — Good",
              "0.66–1.0 seconds — Fair",
              "More than 1.0 second — Poor"
            ]
          },
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
          "name": "dr_heel_pivot",
          "label": "Right Heel Pivot Test",
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
          "type": "subheading",
          "label": "Cognitive And Perceptual"
        },
        {
          "name": "dr_moca",
          "label": "Montreal Cognitive Assessment (MoCA)",
          "info": {
            "title": "MoCA Interpretation",
            "content": [
              "27 and above — Good",
              "16–26 — Fair",
              "0–15 — Poor"
            ]
          },
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
          "name": "dr_rdb",
          "label": "Rookwood Driving Battery (RDB)",
          "type": "scale-slider",
          "min": 0,
          "max": 22,
          "step": 1,
          "showValue": true,
          "tickMajorValues": [
            0,
            5,
            10,
            15,
            20,
            22
          ],
          "tickMinorStep": 1,
          "showMinorTicks": true,
          "showMinorLabels": false,
          "ranges": [
            {
              "min": 0,
              "max": 5,
              "label": "Pass On Road Test",
              "color": "#22c55e"
            },
            {
              "min": 6,
              "max": 10,
              "label": "Reduced Ability but Appropriate For On Road",
              "color": "#f59e0b"
            },
            {
              "min": 11,
              "max": 22,
              "label": "Not Indicated For On Road Test",
              "color": "#ef4444"
            }
          ]
        },
        {
          "name": "dr_cotnab",
          "label": "Chessington Occupational Therapy Neurological Assessment Battery (COTNAB)",
          "type": "radio",
          "labelAbove": true,
          "options": [
            {
              "label": "Within Normal Limit",
              "value": "normal"
            },
            {
              "label": "Below Average",
              "value": "below_average"
            },
            {
              "label": "Borderline",
              "value": "borderline"
            },
            {
              "label": "Impaired",
              "value": "impaired"
            },
            {
              "label": "Severely Impaired",
              "value": "severely_impaired"
            },
            {
              "label": "Unable To Perform / Affected Side",
              "value": "unable"
            }
          ]
        },
        {
          "name": "dr_others_cog",
          "label": "Others",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Digital Cognitive Assessment (DCOG)",
              "value": "dcog"
            },
            {
              "label": "RPAB (Rivermead Perceptual Assessment Battery)",
              "value": "rpab"
            }
          ]
        },
        {
          "name": "dr_dcog_result",
          "label": "DCOG Result",
          "type": "input",
          "showIf": {
            "field": "dr_others_cog",
            "includes": "dcog"
          }
        },
        {
          "name": "dr_rpab_result",
          "label": "RPAB Result",
          "type": "input",
          "showIf": {
            "field": "dr_others_cog",
            "includes": "rpab"
          }
        },
        {
          "name": "dr_memory",
          "label": "Memory",
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
          "name": "dr_road_rules",
          "label": "Knowledge of Road Rules and Signs",
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
          "name": "dr_judgement",
          "label": "Judgement",
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
          "name": "dr_decision_making",
          "label": "Decision Making",
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
          "name": "dr_vehicle_knowledge",
          "label": "Knowledge of Basic Vehicle Components",
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
          "name": "dr_visual_understanding",
          "label": "Understand What He/She Sees",
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
          "type": "subheading",
          "label": "Behavioral And Psychosocial"
        },
        {
          "name": "dr_anger_mgmt",
          "label": "Anger Management",
          "type": "input"
        },
        {
          "name": "dr_stress_tolerance",
          "label": "Stress Tolerance",
          "type": "input"
        },
        {
          "name": "dr_reckless_driving",
          "label": "Reckless Driving Attitude",
          "type": "input"
        }
      ]
    }
  ]
}

const ASSESSMENT = {
  "title": "ASSESSMENT",
  "sections": [
    {
      "fields": [
        {
          "name": "Clinical Impression",
          "label": "Clinical Impression / Notes",
          "type": "input",
          "placeholder": "Therapist assessment..."
        },
        {
          "type": "subheading",
          "label": "On Road Driving Summary"
        },
        {
          "type": "subheading",
          "label": "Hand Control"
        },
        {
          "name": "dr_pre_drive_check",
          "label": "Pre-Drive Check",
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
          "name": "dr_seat_position",
          "label": "Seat Position",
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
          "name": "dr_seat_belt",
          "label": "Seat Belt",
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
          "name": "dr_rear_view_mirrors",
          "label": "Rear View Mirrors",
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
          "name": "dr_hand_control_specify",
          "label": "Specify",
          "type": "textarea"
        },
        {
          "type": "subheading",
          "label": "Posture"
        },
        {
          "name": "dr_leg_length",
          "label": "Leg Length",
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
          "name": "dr_arms_length",
          "label": "Arm's Length",
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
          "name": "dr_right_foot_brace",
          "label": "Right Foot Bracing",
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
          "name": "dr_posture_specify",
          "label": "Specify",
          "type": "textarea"
        },
        {
          "type": "subheading",
          "label": "Steering"
        },
        {
          "name": "dr_hand_contact",
          "label": "Hand Contact",
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
          "name": "dr_hand_position",
          "label": "Hand Position",
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
          "name": "dr_technique",
          "label": "Technique",
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
          "name": "dr_steering_specify",
          "label": "Specify",
          "type": "textarea"
        },
        {
          "type": "subheading",
          "label": "Vehicle Control Skills"
        },
        {
          "name": "dr_obs_to_rear",
          "label": "Observation to Rear",
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
          "name": "dr_appropriate_speed",
          "label": "Appropriate Speed",
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
          "name": "dr_accuracy",
          "label": "Accuracy",
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
          "name": "dr_vcs_specify",
          "label": "Specify",
          "type": "textarea"
        },
        {
          "name": "dr_vcs_overall",
          "label": "Vehicle Control Skills (Overall)",
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
          "type": "subheading",
          "label": "Shutdown"
        },
        {
          "name": "dr_shutdown",
          "label": "When stopped, apply handbrake first, then release footbrake, then 'P' and switch engine off",
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
          "name": "dr_clinical_impression",
          "label": "Clinical Impression",
          "type": "textarea"
        }
      ]
    }
  ]
}

const PLAN = {
  "title": "PLAN",
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Short Term Goals (2–4 Weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "short_term_goals"
        },
        {
          "type": "subheading",
          "label": "Long Term Goals (6–12 Weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "long_term_goals"
        },
        {
          "type": "subheading",
          "label": "Therapeutic Intervention"
        },
        {
          "name": "dr_shifting_gear",
          "label": "Shifting Gear",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Floor Manual",
              "value": "floor_manual"
            },
            {
              "label": "Automatic",
              "value": "automatic"
            },
            {
              "label": "Extended Clutch",
              "value": "extended_clutch"
            }
          ]
        },
        {
          "name": "dr_shifting_gear_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "dr_shifting_gear",
            "notEmpty": true
          }
        },
        {
          "name": "dr_accelerator",
          "label": "Accelerator",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Hand Control Right",
              "value": "hand_right"
            },
            {
              "label": "Hand Control Left",
              "value": "hand_left"
            },
            {
              "label": "Foot Control Right",
              "value": "foot_right"
            },
            {
              "label": "Foot Control Left",
              "value": "foot_left"
            },
            {
              "label": "Foot Control-Extended",
              "value": "foot_extended"
            }
          ]
        },
        {
          "name": "dr_accelerator_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "dr_accelerator",
            "notEmpty": true
          }
        },
        {
          "name": "dr_brake",
          "label": "Brake",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Power",
              "value": "power"
            },
            {
              "label": "Hand Control",
              "value": "hand_control"
            },
            {
              "label": "Hand Control-Extended",
              "value": "hand_extended"
            }
          ]
        },
        {
          "name": "dr_brake_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "dr_brake",
            "notEmpty": true
          }
        },
        {
          "name": "dr_steering_knob",
          "label": "Steering Knob",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Swivel Knob",
              "value": "swivel_knob"
            },
            {
              "label": "Palmar Cuff",
              "value": "palmar_cuff"
            },
            {
              "label": "Amputee Ring",
              "value": "amputee_ring"
            }
          ]
        },
        {
          "name": "dr_steering_knob_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "dr_steering_knob",
            "notEmpty": true
          }
        },
        {
          "type": "subheading",
          "label": "Summary"
        },
        {
          "name": "dr_plan",
          "type": "textarea"
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