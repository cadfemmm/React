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
        {
          "type": "custom",
          "name": "_open_saved_consent"
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
  "title": "",
  "sections": [
    {
      "fields": [
        {
          "type": "textarea",
          "name": "chief_complaint",
          "label": "Chief Complaint"
        },
        {
          "type": "radio",
          "name": "pain_location",
          "label": "Pain Location",
          "labelAbove": true,
          "options": [
            {
              "label": "Neck",
              "value": "neck"
            },
            {
              "label": "Shoulder",
              "value": "shoulder"
            },
            {
              "label": "Back",
              "value": "back"
            },
            {
              "label": "Upper Limb (UE)",
              "value": "ue"
            },
            {
              "label": "Lower Limb (LE)",
              "value": "le"
            },
            {
              "label": "Multiple",
              "value": "multiple"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "pain_intensity",
          "label": "Pain Intensity (NPRS 0–10)",
          "min": 0,
          "max": 10,
          "step": 1,
          "showValue": true
        },
        {
          "type": "radio",
          "name": "pain_behavior",
          "label": "Pain Behavior",
          "labelAbove": true,
          "options": [
            {
              "label": "With movement",
              "value": "movement"
            },
            {
              "label": "Prolonged position",
              "value": "prolonged_position"
            },
            {
              "label": "Lifting",
              "value": "lifting"
            },
            {
              "label": "End of day",
              "value": "end_day"
            }
          ]
        },
        {
          "type": "textarea",
          "name": "neurological_symptoms",
          "label": "Neurological / Sensory Symptoms (e.g. numbness, tingling, radiation)"
        },
        {
          "type": "textarea",
          "name": "history_present_illness",
          "label": "History of Present Illness"
        },
        {
          "type": "textarea",
          "name": "medication_pain_management",
          "label": "Medication / Pain Management (if relevant)"
        },
        {
          "type": "textarea",
          "name": "client_goals_expectations",
          "label": "Client's Goals & Expectations"
        },
        {
          "type": "subheading",
          "label": "F. Driving & Community Mobility"
        },
        {
          "type": "radio",
          "name": "driving_license_type",
          "label": "Driving License Type",
          "labelAbove": true,
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "B2",
              "value": "b2"
            },
            {
              "label": "D",
              "value": "d"
            },
            {
              "label": "E",
              "value": "e"
            },
            {
              "label": "GDL",
              "value": "gdl"
            },
            {
              "label": "PSV",
              "value": "psv"
            }
          ]
        },
        {
          "type": "radio",
          "name": "driving_status_post_injury",
          "label": "Driving Status Post-Injury",
          "labelAbove": true,
          "options": [
            {
              "label": "Not driving",
              "value": "not_driving"
            },
            {
              "label": "Short distance only",
              "value": "short_distance"
            },
            {
              "label": "Independent driving",
              "value": "independent"
            }
          ]
        },
        {
          "type": "radio",
          "name": "community_mobility_limitation",
          "label": "Community Mobility Limitation",
          "labelAbove": true,
          "options": [
            {
              "label": "Public transport",
              "value": "public_transport"
            },
            {
              "label": "Walking tolerance",
              "value": "walking_tolerance"
            },
            {
              "label": "Riding",
              "value": "riding"
            },
            {
              "label": "None",
              "value": "none"
            }
          ]
        },
        {
          "type": "textarea",
          "name": "mobility_notes",
          "label": "Notes"
        }
      ]
    }
  ]
}

const OBJECTIVE = {
  "title": "",
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "1. Physical Status"
        },
        {
          "type": "radio",
          "name": "dominant_hand",
          "label": "Dominant Hand",
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
          "type": "checkbox-group",
          "name": "affected_area",
          "label": "Affected Area",
          "labelAbove": true,
          "options": [
            {
              "label": "Left UE",
              "value": "left_ue"
            },
            {
              "label": "Right UE",
              "value": "right_ue"
            },
            {
              "label": "Left LE",
              "value": "left_le"
            },
            {
              "label": "Right LE",
              "value": "right_le"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "type": "input",
          "name": "affected_area_other",
          "label": "Other Affected Area",
          "showIf": {
            "field": "affected_area",
            "includes": "others"
          }
        },
        {
          "type": "subheading",
          "label": "1b. Sensory Screening (Quick – OT)"
        },
        {
          "type": "radio",
          "name": "sensation_status",
          "label": "Sensation Status",
          "options": [
            {
              "label": "Intact",
              "value": "intact"
            },
            {
              "label": "Impaired",
              "value": "impaired"
            },
            {
              "label": "Absent",
              "value": "absent"
            }
          ]
        },
        {
          "type": "checkbox-group",
          "name": "sensory_domains",
          "label": "Sensory Domains Affected",
          "showIf": {
            "field": "sensation_status",
            "equals": "impaired"
          },
          "options": [
            {
              "label": "Light touch",
              "value": "light_touch"
            },
            {
              "label": "Pain (sharp/dull)",
              "value": "pain"
            },
            {
              "label": "Temperature",
              "value": "temperature"
            },
            {
              "label": "Proprioception",
              "value": "proprioception"
            },
            {
              "label": "Hypersensitivity",
              "value": "hypersensitivity"
            }
          ]
        },
        {
          "type": "textarea",
          "name": "functional_impact",
          "label": "Functional Impact on ADL / Work"
        },
        {
          "type": "checkbox-group",
          "name": "functional_impact_area",
          "label": "Affected Limb (Functional Impact)",
          "options": [
            {
              "label": "Left UE",
              "value": "left_ue"
            },
            {
              "label": "Right UE",
              "value": "right_ue"
            },
            {
              "label": "Left LE",
              "value": "left_le"
            },
            {
              "label": "Right LE",
              "value": "right_le"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "type": "input",
          "name": "functional_impact_other",
          "label": "Other Area",
          "showIf": {
            "field": "functional_impact_area",
            "includes": "others"
          }
        },
        {
          "type": "subheading",
          "label": "2. Mobility & Ambulation"
        },
        {
          "type": "radio",
          "name": "weight_bearing_status",
          "label": "Weight Bearing Status",
          "options": [
            {
              "label": "Full WB",
              "value": "full_wb"
            },
            {
              "label": "Partial WB",
              "value": "partial_wb"
            },
            {
              "label": "Non-WB",
              "value": "non_wb"
            }
          ]
        },
        {
          "type": "radio",
          "name": "short_distance_mobility",
          "label": "Short Distance Mobility",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Aid-assisted",
              "value": "assist"
            },
            {
              "label": "Wheelchair",
              "value": "wheelchair"
            }
          ]
        },
        {
          "type": "radio",
          "name": "long_distance_mobility",
          "label": "Long Distance Mobility",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Aid-assisted",
              "value": "assist"
            },
            {
              "label": "Wheelchair",
              "value": "wheelchair"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "3. Standardised Outcome Measures"
        },
        {
          "type": "assessment-launcher",
          "name": "upper_limb_measures",
          "label": "",
          "options": [
            {
              "label": "ROM ",
              "value": "rom"
            },
            {
              "label": "Manual Muscle Testing (MMT)",
              "value": "mmt"
            },
            {
              "label": "QuickDASH",
              "value": "dash"
            },
            {
              "label": "Action Research Arm Test (ARAT)",
              "value": "arat"
            },
            {
              "label": "Jebsen Hand Function Test",
              "value": "jfht"
            },
            {
              "label": "Box and Block Test",
              "value": "bbt"
            },
            {
              "label": "Grip strength",
              "value": "grip_strength"
            },
            {
              "label": "Pinch strength",
              "value": "pinch_strength"
            },
            {
              "label": "Purdue Pegboard Test",
              "value": "ppt"
            },
            {
              "label": "Timed Up and Go (TUG)",
              "value": "tug"
            },
            {
              "label": "6-Minute Walk Test",
              "value": "six_mwt"
            },
            {
              "label": "Berg Balance Scale (BBS)",
              "value": "bbs"
            },
            {
              "label": "Oswestry Disability Index (ODI)",
              "value": "odi"
            },
            {
              "label": "Visual Analogue Scale (VAS)",
              "value": "vas"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "H. Functional Performance"
        },
        {
          "type": "single-select",
          "name": "adl_performance",
          "label": "ADL Performance Level",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Modified Independent",
              "value": "modified_independent"
            },
            {
              "label": "Assistance",
              "value": "assistance"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "type": "checkbox-group",
          "name": "observed_limitations",
          "label": "Observed Limitations",
          "options": [
            {
              "label": "Dressing",
              "value": "dressing"
            },
            {
              "label": "Toileting",
              "value": "toileting"
            },
            {
              "label": "Transfers",
              "value": "transfers"
            },
            {
              "label": "Mobility",
              "value": "mobility"
            },
            {
              "label": "Household tasks",
              "value": "household_tasks"
            }
          ]
        },
        {
          "type": "checkbox-group",
          "name": "postural_movement_issues",
          "label": "Postural & Movement Issues",
          "options": [
            {
              "label": "Poor endurance",
              "value": "endurance"
            },
            {
              "label": "Poor body mechanics",
              "value": "body_mechanics"
            },
            {
              "label": "Reduced balance",
              "value": "balance"
            }
          ]
        },
        {
          "type": "textarea",
          "name": "therapist_observation_notes",
          "label": "Therapist Observation Notes"
        }
      ]
    }
  ]
}

const ASSESSMENT =  {
  "title": "",
  "sections": [
    {
      "fields": [
        {
          "type": "textarea",
          "name": "problem_list",
          "label": "Problem List"
        },
        {
          "type": "radio",
          "name": "clinical_impression",
          "label": "Clinical Impression",
          "labelAbove": true,
          "options": [
            {
              "label": "Pain dominant",
              "value": "pain_dominant"
            },
            {
              "label": "Strength deficit",
              "value": "strength_deficit"
            },
            {
              "label": "Mobility limitation",
              "value": "mobility_limitation"
            },
            {
              "label": "Work-related",
              "value": "work_related"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "type": "textarea",
          "name": "clinical_impression_notes",
          "label": "Clinical Impression Notes",
          "showIf": {
            "field": "clinical_impression",
            "equals": "others"
          }
        },
        {
          "type": "radio",
          "name": "rehabilitation_potential",
          "label": "Rehabilitation Potential",
          "labelAbove": true,
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
  ]
}

const PLAN = {
  "title": "",
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
          "label": "Therapeutic Intervention",
          "type": "checkbox-group",
          "name": "therapeutic_intervention",
          "options": [
            {
              "label": "ROM exercise",
              "value": "rom_exercise"
            },
            {
              "label": "Strengthening",
              "value": "strengthening"
            },
            {
              "label": "Endurance training",
              "value": "endurance_training"
            },
            {
              "label": "Joint protection",
              "value": "joint_protection"
            },
            {
              "label": "Pain management",
              "value": "pain_management"
            },
            {
              "label": "Fine motor training",
              "value": "fine_motor_training"
            }
          ]
        },
        {
          "label": "Functional Training",
          "type": "checkbox-group",
          "name": "functional_training",
          "options": [
            {
              "label": "ADL",
              "value": "adl"
            },
            {
              "label": "IADL",
              "value": "iadl"
            },
            {
              "label": "Work simulation",
              "value": "work_simulation"
            },
            {
              "label": "Driving",
              "value": "driving"
            },
            {
              "label": "Riding",
              "value": "riding"
            }
          ]
        },
        {
          "type": "checkbox-group",
          "name": "assistive_device_plan",
          "label": "Assistive / Adaptive Device Plan",
          "options": [
            {
              "label": "Splint",
              "value": "splint"
            },
            {
              "label": "Mobility aid",
              "value": "mobility_aid"
            },
            {
              "label": "Home modification",
              "value": "home_modification"
            },
            {
              "label": "Nil",
              "value": "nil"
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
};