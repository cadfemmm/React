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
          "type": "textarea",
          "name": "history_present_illness",
          "label": "History of Present Illness"
        },
        {
          "type": "textarea",
          "name": "work_history",
          "label": "Work History"
        },
        {
          "type": "radio",
          "name": "work_status",
          "label": "Work Status",
          "options": [
            {
              "label": "Employed",
              "value": "employed"
            },
            {
              "label": "Unemployed",
              "value": "unemployed"
            }
          ]
        },
        {
          "type": "radio",
          "name": "rtw_status",
          "label": "Return to Work (RTW) Status",
          "options": [
            {
              "label": "Yes",
              "value": "yes"
            },
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "type": "input",
          "name": "rtw_status_other",
          "label": "Specify RTW Status",
          "showIf": {
            "field": "rtw_status",
            "equals": "others"
          }
        },
        {
          "type": "radio",
          "name": "keen_to_rtw",
          "label": "If No, Keen to RTW",
          "showIf": {
            "field": "rtw_status",
            "equals": "no"
          },
          "options": [
            {
              "label": "Yes",
              "value": "yes"
            },
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "NIL",
              "value": "nil"
            }
          ]
        },
        {
          "type": "textarea",
          "name": "client_expectations",
          "label": "Client Expectations"
        },
        {
          "type": "textarea",
          "name": "driving_history",
          "label": "Driving History"
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
              "label": "B2 – Motor Car",
              "value": "b2"
            },
            {
              "label": "D – Heavy Motor Vehicle",
              "value": "d"
            },
            {
              "label": "E – Heavy Trailer Vehicle",
              "value": "e"
            },
            {
              "label": "GDL – Goods Driving License",
              "value": "gdl"
            },
            {
              "label": "PSV – Public Service Vehicle",
              "value": "psv"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "type": "input",
          "name": "license_other",
          "label": "Other License Type",
          "showIf": {
            "field": "driving_license_type",
            "equals": "others"
          }
        },
        {
          "type": "radio",
          "name": "license_status",
          "label": "License Status",
          "options": [
            {
              "label": "Active",
              "value": "active"
            },
            {
              "label": "Not active",
              "value": "not_active"
            }
          ]
        },
        {
          "type": "radio",
          "name": "return_to_drive_post_injury",
          "label": "Have You Returned to Drive Post Injury",
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
          "type": "textarea",
          "name": "riding_details",
          "label": "If Yes – Riding Duration, Distance, Modification",
          "showIf": {
            "field": "return_to_drive_post_injury",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "keen_to_rtd",
          "label": "If No, Keen to Return to Driving (RTD)",
          "showIf": {
            "field": "return_to_drive_post_injury",
            "equals": "no"
          },
          "options": [
            {
              "label": "Yes",
              "value": "yes"
            },
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "NIL",
              "value": "nil"
            }
          ]
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
          "label": "Physical Status"
        },
        {
          "type": "radio",
          "name": "dominant_hand",
          "label": "Dominant",
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
          "label": "Standardized Outcome Measures"
        },
        {
          "name": "neuro_scales",
          "type": "assessment-launcher",
          "options": [
            {
              "label": "Range of Motion (ROM)",
              "value": "rom"
            },
            {
              "label": "Manual Muscle Test (MMT)",
              "value": "mmt"
            },
            {
              "label": "Muscle Tone (MAS)",
              "value": "mas"
            },
            {
              "label": "Functional Independence Measure (FIM)",
              "value": "FIM"
            },
            {
              "label": "Montreal Cognitive Assessment (MoCA)",
              "value": "moca"
            },
            {
              "label": "International Spinal Cord Injury Female Sexual and Reproductive Function",
              "value": "scifemale"
            },
            {
              "label": "International Spinal Cord Injury Male Sexual Function",
              "value": "scimale"
            },
            {
              "label": "Lawton Instrumental Activities of Daily Living Scale (IADL)",
              "value": "iadl"
            },
            {
              "label": "Capabilities of Upper Extremity Questionnaire (CUE-Q)",
              "value": "cueq"
            },
            {
              "label": "SCIM – Spinal Cord Independence Measure",
              "value": "scim"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Additional Observation / Tests"
        },
        {
          "type": "checkbox-group",
          "name": "additional_tests",
          "label": "Tests",
          "options": [
            {
              "label": "Sensation Testing",
              "value": "sensation_testing"
            },
            {
              "label": "Pain Scale",
              "value": "pain_scale"
            },
            {
              "label": "Fine Motor and Dexterity Assessment",
              "value": "fine_motor"
            }
          ]
        }
      ]
    }
  ]
}

const ASSESSMENT = {
  "title": "",
  "sections": [
    {
      "fields": [
        {
          "name": "clinical_impression",
          "label": "Clinical Impression / Notes",
          "type": "input",
          "placeholder": "Therapist assessment..."
        },
        {
          "type": "subheading",
          "label": "Problem List"
        },
        {
          "type": "textarea",
          "name": "problem_list",
          "placeholder": "Enter problem list..."
        },
        {
          "type": "subheading",
          "label": "Clinical Impression"
        },
        {
          "type": "textarea",
          "name": "functional_limitations",
          "label": "Functional limitations",
          "placeholder": "e.g. gait impairment, unsafe transfers"
        },
        {
          "type": "textarea",
          "name": "underlying_cause",
          "label": "Underlying cause",
          "placeholder": "e.g. CVA, fracture, neuropathy, TBI"
        },
        {
          "type": "subheading",
          "label": "Rehab Prognosis"
        },
        {
          "type": "radio",
          "name": "rehab_prognosis",
          "label": "Select prognosis",
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
        },
        {
          "type": "info-text",
          "text": "Based on cognition, motivation, severity, comorbidities"
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
          "label": "Therapeutic Exercises",
          "type": "checkbox-group",
          "name": "therapeutic_exercises",
          "options": [
            {
              "label": "Functional ROM Exercise",
              "value": "rom"
            },
            {
              "label": "Functional Strengthening Exercise",
              "value": "strength"
            },
            {
              "label": "Muscle Tone Management",
              "value": "tone"
            },
            {
              "label": "Fine Motor & Dexterity Training",
              "value": "fine_motor"
            },
            {
              "label": "Bobath/NDT Therapy",
              "value": "ndt"
            },
            {
              "label": "Trunk & Core Control Training",
              "value": "core"
            },
            {
              "label": "Lower Limb Activity Training",
              "value": "lower_limb"
            },
            {
              "label": "Endurance / Cardiovascular Training",
              "value": "cardio"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "type": "checkbox-group",
          "name": "ndt_focus",
          "label": "NDT Focus Area",
          "options": [
            {
              "label": "Trunk & Pelvis",
              "value": "trunk"
            },
            {
              "label": "Lower Limb",
              "value": "lower"
            },
            {
              "label": "Upper Limb & Hand",
              "value": "upper"
            },
            {
              "label": "Neck",
              "value": "neck"
            }
          ],
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "ndt"
          }
        },
        {
          "type": "textarea",
          "name": "therapeutic_other",
          "label": "Other Exercises",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "others"
          }
        },
        {
          "label": "ADL Training",
          "type": "checkbox-group",
          "name": "adl_training",
          "options": [
            {
              "label": "Eating / Feeding",
              "value": "eating"
            },
            {
              "label": "Bathing / Showering",
              "value": "bathing"
            },
            {
              "label": "Dressing",
              "value": "dressing"
            },
            {
              "label": "Grooming",
              "value": "grooming"
            },
            {
              "label": "Toileting",
              "value": "toileting"
            },
            {
              "label": "Sphincter Control",
              "value": "sphincter"
            },
            {
              "label": "Bed Mobility",
              "value": "bed"
            },
            {
              "label": "Transfers (Bed)",
              "value": "transfer_bed"
            },
            {
              "label": "Transfers (Toilet)",
              "value": "transfer_toilet"
            },
            {
              "label": "Advanced Transfer (Car)",
              "value": "car"
            },
            {
              "label": "Advanced Transfer (Ground)",
              "value": "ground"
            },
            {
              "label": "Locomotion / Mobility",
              "value": "mobility"
            },
            {
              "label": "Stair Management",
              "value": "stairs"
            }
          ]
        },
        {
          "label": "IADL Training",
          "type": "checkbox-group",
          "name": "iadl_training",
          "options": [
            {
              "label": "Telephone Use",
              "value": "phone"
            },
            {
              "label": "Shopping",
              "value": "shopping"
            },
            {
              "label": "Food Preparation",
              "value": "cooking"
            },
            {
              "label": "Housekeeping",
              "value": "housekeeping"
            },
            {
              "label": "Laundry",
              "value": "laundry"
            },
            {
              "label": "Transportation",
              "value": "transport"
            },
            {
              "label": "Medication Management",
              "value": "medication"
            },
            {
              "label": "Financial Management",
              "value": "finance"
            }
          ]
        },
        {
          "type": "radio",
          "label": "Driving Rehabilitation",
          "name": "driving",
          "options": [
            {
              "label": "Off-road Driving",
              "value": "offroad"
            },
            {
              "label": "On-road Driving",
              "value": "onroad"
            }
          ]
        },
        {
          "type": "radio",
          "label": "Riding Rehabilitation",
          "name": "riding",
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
          "label": "Assistive & Adaptive Devices",
          "type": "checkbox-group",
          "name": "assistive_devices",
          "options": [
            {
              "label": "Splint",
              "value": "splint"
            },
            {
              "label": "Pressure Garment",
              "value": "pressure"
            },
            {
              "label": "Tubigrip",
              "value": "tubigrip"
            },
            {
              "label": "Adaptive Nail Clipper",
              "value": "clipper"
            },
            {
              "label": "Lightweight Wheelchair",
              "value": "lw_wc"
            },
            {
              "label": "Ultralight Wheelchair",
              "value": "ul_wc"
            },
            {
              "label": "Motorised Wheelchair",
              "value": "motor_wc"
            },
            {
              "label": "Commode Chair",
              "value": "commode"
            },
            {
              "label": "Cushion (Air/Foam/Gel)",
              "value": "cushion"
            },
            {
              "label": "Palmar Pocket",
              "value": "palmar"
            },
            {
              "label": "Transfer Board",
              "value": "board"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "type": "textarea",
          "name": "assistive_other",
          "label": "Other Devices",
          "showIf": {
            "field": "assistive_devices",
            "includes": "others"
          }
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