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

const HOME_ASSESSMENT_SCHEMA = {
  "title": "Home Assessment",
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Occupational Profile"
        },
        {
          "name": "ha_pre_morbid_function",
          "label": "Pre-morbid function",
          "type": "radio",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Semi-dependent",
              "value": "semi_dependent"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "name": "ha_current_main_concerns",
          "label": "Current main concerns (patient/caregiver report)",
          "type": "input"
        },
        {
          "type": "subheading",
          "label": "Patient Goals"
        },
        {
          "name": "ha_short_term_goals",
          "label": "Short term goals",
          "type": "input"
        },
        {
          "name": "ha_long_term_goals",
          "label": "Long term goals",
          "type": "input"
        },
        {
          "name": "ha_roles",
          "label": "Roles",
          "type": "radio",
          "options": [
            {
              "label": "Worker",
              "value": "worker"
            },
            {
              "label": "Caregiver",
              "value": "caregiver"
            },
            {
              "label": "Retired",
              "value": "retired"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Home Environment Overview"
        },
        {
          "name": "ha_residence_type",
          "label": "Type of residence",
          "type": "radio",
          "options": [
            {
              "label": "Terrace house",
              "value": "terrace_house"
            },
            {
              "label": "Flat",
              "value": "flat"
            },
            {
              "label": "Apartment",
              "value": "apartment"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "ha_residence_type_others",
          "label": "Others (specify)",
          "type": "input",
          "showIf": {
            "field": "ha_residence_type",
            "equals": "others"
          }
        },
        {
          "name": "ha_living_arrangement",
          "label": "Living arrangement",
          "type": "radio",
          "options": [
            {
              "label": "Alone",
              "value": "alone"
            },
            {
              "label": "With family",
              "value": "with_family"
            },
            {
              "label": "Paid caregiver",
              "value": "paid_caregiver"
            }
          ]
        },
        {
          "name": "ha_number_of_storeys",
          "label": "Number of storeys",
          "type": "input"
        },
        {
          "name": "ha_bedroom_location",
          "label": "Bedroom location",
          "type": "radio",
          "options": [
            {
              "label": "Ground floor",
              "value": "ground_floor"
            },
            {
              "label": "Upstairs",
              "value": "upstairs"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Access to Home"
        },
        {
          "name": "ha_access_to_home",
          "label": "Access to home",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Steps",
              "value": "steps"
            },
            {
              "label": "Ramp present",
              "value": "ramp_present"
            },
            {
              "label": "Lift access",
              "value": "lift_access"
            }
          ]
        },
        {
          "name": "ha_steps_number",
          "label": "Steps (number)",
          "type": "input",
          "showIf": {
            "field": "ha_access_to_home",
            "includes": "steps"
          }
        },
        {
          "name": "ha_steps_handrail",
          "label": "Handrail",
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
            "field": "ha_access_to_home",
            "includes": "steps"
          }
        },
        {
          "name": "ha_surface_condition",
          "label": "Surface condition",
          "type": "radio",
          "options": [
            {
              "label": "Even",
              "value": "even"
            },
            {
              "label": "Uneven",
              "value": "uneven"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Functional Status (ADL / IADL)"
        },
        {
          "type": "subheading",
          "label": "Basic ADL"
        },
        {
          "type": "grid-header",
          "cols": [
            "Task",
            "Independent",
            "Supervision",
            "Assist",
            "Dependent"
          ]
        },
        {
          "name": "ha_adl_bathing",
          "label": "Bathing",
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
              "label": "Assist",
              "value": "assist"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "name": "ha_adl_dressing",
          "label": "Dressing",
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
              "label": "Assist",
              "value": "assist"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "name": "ha_adl_toileting",
          "label": "Toileting",
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
              "label": "Assist",
              "value": "assist"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "name": "ha_adl_feeding",
          "label": "Feeding",
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
              "label": "Assist",
              "value": "assist"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "name": "ha_adl_mobility",
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
              "label": "Assist",
              "value": "assist"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Instrumental ADL (IADL)"
        },
        {
          "type": "grid-header",
          "cols": [
            "Task",
            "Independent",
            "Supervision",
            "Assist",
            "Dependent"
          ]
        },
        {
          "name": "ha_iadl_cooking",
          "label": "Cooking",
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
              "label": "Assist",
              "value": "assist"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "name": "ha_iadl_medication_management",
          "label": "Medication management",
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
              "label": "Assist",
              "value": "assist"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "name": "ha_iadl_housekeeping",
          "label": "Housekeeping",
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
              "label": "Assist",
              "value": "assist"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "name": "ha_iadl_shopping",
          "label": "Shopping",
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
              "label": "Assist",
              "value": "assist"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "name": "ha_iadl_driving",
          "label": "Driving",
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
              "label": "Assist",
              "value": "assist"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Physical & Cognitive Findings"
        },
        {
          "type": "subheading",
          "label": "Functional Strength "
        },
        {
          "name": "muscle_strength",
          "label": "Muscle strength:",
          "type": "radio",
          "options": [
            {
              "label": "Functional for ADL",
              "value": "functional_for_adl"
            },
            {
              "label": "Reduced affecting function",
              "value": "reduced_affecting_function"
            },
            {
              "label": "Severely limited",
              "value": "severely_limited"
            }
          ]
        },
        {
          "name": "muscle_strength_affected_areas",
          "label": "Affected Areas",
          "type": "input",
          "placeholder": "Enter affected areas"
        },
        {
          "name": "muscle_strength_functional_impact",
          "label": "Functional Impact Noted In",
          "type": "input",
          "placeholder": "Enter functional impact"
        },
        {
          "type": "subheading",
          "label": "Balance & Postural Control "
        },
        {
          "name": "static_sitting_balance",
          "label": "Static Sitting Balance",
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
          "name": "dynamic_sitting_balance",
          "label": "Dynamic Sitting Balance",
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
          "name": "static_standing_balance",
          "label": "Static Standing Balance",
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
          "name": "dynamic_standing_balance",
          "label": "Dynamic Standing Balance",
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
          "name": "protective_reactions",
          "label": "Protective Reactions",
          "type": "radio",
          "options": [
            {
              "label": "Intact",
              "value": "intact"
            },
            {
              "label": "Delayed",
              "value": "delayed"
            },
            {
              "label": "Absent",
              "value": "absent"
            }
          ]
        },
        {
          "name": "functional_implications",
          "label": "Functional Implications",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Risk of falls during transfers",
              "value": "risk_of_falls_during_transfers"
            },
            {
              "label": "Requires supervision during bathing",
              "value": "requires_supervision_during_bathing"
            },
            {
              "label": "Unable to perform standing ADLs safely",
              "value": "unable_to_perform_standing_adls_safely"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Transfer Skills (Occupation-Based Performance)"
        },
        {
          "name": "bed_mobility",
          "label": "Bed Mobility",
          "type": "radio",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Needs Assistance",
              "value": "needs_assistance"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "name": "sit_to_stand_transfer",
          "label": "Sit ↔ Stand Transfer",
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
              "label": "Assistance Required",
              "value": "assistance_required"
            }
          ]
        },
        {
          "name": "toilet_transfer",
          "label": "Toilet Transfer",
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
              "label": "Assistance Required",
              "value": "assistance_required"
            }
          ]
        },
        {
          "name": "shower_bath_transfer",
          "label": "Shower / Bath Transfer",
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
              "label": "Assistance Required",
              "value": "assistance_required"
            }
          ]
        },
        {
          "name": "compensatory_strategies_used",
          "label": "Compensatory Strategies Used",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Uses furniture for support",
              "value": "uses_furniture_for_support"
            },
            {
              "label": "Requires caregiver physical lifting",
              "value": "requires_caregiver_physical_lifting"
            },
            {
              "label": "Uses assistive device",
              "value": "uses_assistive_device"
            },
            {
              "label": "Not safe without supervision",
              "value": "not_safe_without_supervision"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Mobility & Functional Ambulation"
        },
        {
          "name": "mobility_status",
          "label": "Mobility Status",
          "type": "radio",
          "options": [
            {
              "label": "Independent Ambulation",
              "value": "independent_ambulation"
            },
            {
              "label": "Supervised Ambulation",
              "value": "supervised_ambulation"
            },
            {
              "label": "Assisted Ambulation",
              "value": "assisted_ambulation"
            },
            {
              "label": "Wheelchair Dependent",
              "value": "wheelchair_dependent"
            },
            {
              "label": "Bedbound",
              "value": "bedbound"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Mobility Aid"
        },
        {
          "name": "current_mobility_aid",
          "label": "Current Mobility Aid",
          "type": "input",
          "placeholder": "Enter current mobility aid"
        },
        {
          "name": "mobility_aid_dependency",
          "label": "Level of Dependency on Aid",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Uses Independently and Safely",
              "value": "uses_independently_and_safely"
            },
            {
              "label": "Uses but Requires Supervision",
              "value": "uses_but_requires_supervision"
            },
            {
              "label": "Inappropriate / Unsafe Use Observed",
              "value": "inappropriate_unsafe_use_observed"
            }
          ]
        },
        {
          "name": "ot_recommendation",
          "label": "OT Recommendation",
          "type": "input",
          "placeholder": "Enter OT recommendation"
        },
        {
          "type": "subheading",
          "label": "Cognitive"
        },
        {
          "name": "orientation",
          "label": "Orientation",
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
          "name": "memory",
          "label": "Memory",
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
          "name": "attention",
          "label": "Attention",
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
          "name": "safety_awareness",
          "label": "Safety Awareness",
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
          ]
        },
        {
          "type": "subheading",
          "label": "Home Safety Assessment"
        },
        {
          "type": "subheading",
          "label": "Entrance"
        },
        {
          "name": "entrance_door_width_cm",
          "label": "Door Width (cm)",
          "type": "input",
          "placeholder": "Enter door width in cm"
        },
        {
          "name": "entrance_hazards",
          "label": "Hazards Identified",
          "type": "radio",
          "options": [
            {
              "label": "Steps Present",
              "value": "steps_present"
            },
            {
              "label": "Poor Lighting",
              "value": "poor_lighting"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "entrance_steps_risk",
          "label": "Risk Associated with Steps",
          "type": "input",
          "placeholder": "Describe risk",
          "showIf": {
            "field": "entrance_hazards",
            "includes": "steps_present"
          }
        },
        {
          "name": "entrance_other_details",
          "label": "Other Entrance Issues",
          "type": "input",
          "placeholder": "Enter other issues",
          "showIf": {
            "field": "entrance_hazards",
            "includes": "others"
          }
        },
        {
          "name": "entrance_recommendation",
          "label": "Recommendation",
          "type": "input",
          "placeholder": "Enter recommendation",
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "entrance_photo",
          "label": "Insert Photo",
          "type": "attach-file",
          "accept": "image/*",
          "capture": "environment"
        },
        {
          "type": "subheading",
          "label": "Living Area"
        },
        {
          "name": "living_area_hazards",
          "label": "Hazards Identified",
          "type": "radio",
          "options": [
            {
              "label": "Cluttered Environment",
              "value": "cluttered_environment"
            },
            {
              "label": "Loose Rugs",
              "value": "loose_rugs"
            },
            {
              "label": "Poor Lighting",
              "value": "poor_lighting"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "living_area_other_details",
          "label": "Other Living Area Issues",
          "type": "input",
          "placeholder": "Enter other issues",
          "showIf": {
            "field": "living_area_hazards",
            "includes": "others"
          }
        },
        {
          "name": "living_area_recommendation",
          "label": "Recommendation",
          "type": "input",
          "placeholder": "Enter recommendation",
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "living_area_photo",
          "label": "Insert Photo",
          "type": "attach-file",
          "accept": "image/*",
          "capture": "environment"
        },
        {
          "type": "subheading",
          "label": "Bathroom"
        },
        {
          "name": "bathroom_door_width_cm",
          "label": "Door Width (cm)",
          "type": "input",
          "placeholder": "Enter door width in cm"
        },
        {
          "name": "bathroom_hazards",
          "label": "Hazards Identified",
          "type": "radio",
          "options": [
            {
              "label": "No Grab Bars",
              "value": "no_grab_bars"
            },
            {
              "label": "Slippery Floor",
              "value": "slippery_floor"
            },
            {
              "label": "High / Low Toilet Seat",
              "value": "high_low_toilet_seat"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "bathroom_other_details",
          "label": "Other Bathroom Issues",
          "type": "input",
          "placeholder": "Enter other issues",
          "showIf": {
            "field": "bathroom_hazards",
            "includes": "others"
          }
        },
        {
          "name": "bathroom_recommendation",
          "label": "Recommendation",
          "type": "input",
          "placeholder": "Enter recommendation",
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "bathroom_photo",
          "label": "Insert Photo",
          "type": "attach-file",
          "accept": "image/*",
          "capture": "environment"
        },
        {
          "type": "subheading",
          "label": "Bedroom"
        },
        {
          "name": "bedroom_door_width_cm",
          "label": "Door Width (cm)",
          "type": "input",
          "placeholder": "Enter door width in cm"
        },
        {
          "name": "bedroom_hazards",
          "label": "Hazards Identified",
          "type": "radio",
          "options": [
            {
              "label": "Bed Too High / Low",
              "value": "bed_too_high_low"
            },
            {
              "label": "Limited Turning Space",
              "value": "limited_turning_space"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "bedroom_other_details",
          "label": "Other Bedroom Issues",
          "type": "input",
          "placeholder": "Enter other issues",
          "showIf": {
            "field": "bedroom_hazards",
            "includes": "others"
          }
        },
        {
          "name": "bedroom_recommendation",
          "label": "Recommendation",
          "type": "input",
          "placeholder": "Enter recommendation",
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "bedroom_photo",
          "label": "Insert Photo",
          "type": "attach-file",
          "accept": "image/*",
          "capture": "environment"
        },
        {
          "type": "subheading",
          "label": "Kitchen"
        },
        {
          "name": "kitchen_hazards",
          "label": "Hazards Identified",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Unsafe Access to Items / Unsafe Storage",
              "value": "unsafe_access_storage"
            },
            {
              "label": "Risk of Burns / Falls",
              "value": "risk_of_burns_falls"
            },
            {
              "label": "Difficulty Reaching Items",
              "value": "difficulty_reaching_items"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "kitchen_other_details",
          "label": "Other Kitchen Issues",
          "type": "input",
          "placeholder": "Enter other issues",
          "showIf": {
            "field": "kitchen_hazards",
            "includes": "others"
          }
        },
        {
          "name": "kitchen_recommendation",
          "label": "Recommendation",
          "type": "input",
          "placeholder": "Enter recommendation",
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "kitchen_photo",
          "label": "Insert Photo",
          "type": "attach-file",
          "accept": "image/*",
          "capture": "environment"
        },
        {
          "type": "subheading",
          "label": "Outcome Measures"
        },
        {
          "name": "spinal_scales_launcher",
          "type": "assessment-launcher",
          "options": [
            {
              "label": "Functional Independence Measure (FIM)",
              "value": "fim"
            },
            {
              "label": "Montreal Cognitive Assessment (MoCA)",
              "value": "moca"
            },
            {
              "label": "Mini Mental Status Examination (MMSE)",
              "value": "mmse"
            },
            {
              "label": "Modified Barthel Index (MBI)",
              "value": "barthel"
            },
            {
              "label": "Berg Balance Scale (BBS)",
              "value": "bbs"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Assistive Devicess"
        },
        {
          "name": "recommended_assistive_devices",
          "label": "Recommended",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Wheelchair",
              "value": "wheelchair"
            },
            {
              "label": "Commode",
              "value": "commode"
            },
            {
              "label": "Cushion",
              "value": "cushion"
            },
            {
              "label": "Transfer Aid",
              "value": "transfer_aid"
            },
            {
              "label": "Grab Bars",
              "value": "grab_bars"
            },
            {
              "label": "Raised Toilet Seat",
              "value": "raised_toilet_seat"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "wheelchair_type",
          "label": "Wheelchair Type",
          "type": "input",
          "placeholder": "Enter wheelchair type",
          "showIf": {
            "field": "recommended_assistive_devices",
            "includes": "wheelchair"
          }
        },
        {
          "name": "wheelchair_size",
          "label": "Wheelchair Size",
          "type": "input",
          "placeholder": "Enter wheelchair size",
          "showIf": {
            "field": "recommended_assistive_devices",
            "includes": "wheelchair"
          }
        },
        {
          "name": "cushion_type",
          "label": "Cushion Type",
          "type": "input",
          "placeholder": "Enter cushion type",
          "showIf": {
            "field": "recommended_assistive_devices",
            "includes": "cushion"
          }
        },
        {
          "name": "cushion_size",
          "label": "Cushion Size",
          "type": "input",
          "placeholder": "Enter cushion size",
          "showIf": {
            "field": "recommended_assistive_devices",
            "includes": "cushion"
          }
        },
        {
          "name": "transfer_aid_details",
          "label": "Transfer Aid",
          "type": "input",
          "placeholder": "Enter transfer aid details",
          "showIf": {
            "field": "recommended_assistive_devices",
            "includes": "transfer_aid"
          }
        },
        {
          "name": "grab_bars_details",
          "label": "Grab Bars",
          "type": "input",
          "placeholder": "Enter grab bar details",
          "showIf": {
            "field": "recommended_assistive_devices",
            "includes": "grab_bars"
          }
        },
        {
          "name": "raised_toilet_seat_details",
          "label": "Raised Toilet Seat",
          "type": "input",
          "placeholder": "Enter raised toilet seat details",
          "showIf": {
            "field": "recommended_assistive_devices",
            "includes": "raised_toilet_seat"
          }
        },
        {
          "name": "assistive_devices_other_details",
          "label": "Other Assistive Devices",
          "type": "input",
          "placeholder": "Enter other assistive devices",
          "showIf": {
            "field": "recommended_assistive_devices",
            "includes": "others"
          }
        },
        {
          "name": "assistive_devices_other_details",
          "label": "Other Assistive Devices",
          "type": "input",
          "placeholder": "Enter other assistive devices",
          "showIf": {
            "field": "recommended_assistive_devices",
            "includes": "others"
          }
        },
        {
          "type": "subheading",
          "label": "Risk Analysis"
        },
        {
          "name": "falls_risk",
          "label": "Falls Risk",
          "type": "radio",
          "options": [
            {
              "label": "Low",
              "value": "low"
            },
            {
              "label": "Moderate",
              "value": "moderate"
            },
            {
              "label": "High",
              "value": "high"
            }
          ]
        },
        {
          "name": "environmental_risk",
          "label": "Environmental Risk",
          "type": "radio",
          "options": [
            {
              "label": "Low",
              "value": "low"
            },
            {
              "label": "Moderate",
              "value": "moderate"
            },
            {
              "label": "High",
              "value": "high"
            }
          ]
        },
        {
          "name": "clinical_justification",
          "label": "Clinical Justification",
          "type": "input",
          "placeholder": "Enter clinical justification",
          "speechToText": true,
          "ocr": true
        },
        {
          "type": "subheading",
          "label": "Clinical Impression"
        },
        {
          "name": "clinical_impression",
          "label": "Clinical Impression",
          "type": "input",
          "placeholder": "Enter clinical impression",
          "speechToText": true,
          "ocr": true
        },
        {
          "type": "subheading",
          "label": "Recommendations"
        },
        {
          "name": "home_modifications",
          "label": "Home Modifications",
          "type": "input",
          "placeholder": "Enter home modification recommendations",
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "adl_training",
          "label": "ADL Training",
          "type": "input",
          "placeholder": "Enter ADL training recommendations",
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "caregiver_education",
          "label": "Caregiver Education",
          "type": "input",
          "placeholder": "Enter caregiver education recommendations",
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "follow_up",
          "label": "Follow-up",
          "type": "input",
          "placeholder": "Enter follow-up plan",
          "speechToText": true,
          "ocr": true
        },
        {
          "type": "subheading",
          "label": "Signature"
        },
        {
          "name": "assessor_name",
          "label": "Assessor",
          "type": "input",
          "placeholder": "Enter assessor name"
        },
        {
          "name": "designation",
          "label": "Designation",
          "type": "input",
          "defaultValue": "Occupational Therapist",
          "placeholder": "Occupational Therapist"
        },
        {
          "name": "assessment_date",
          "label": "Date",
          "type": "date"
        }
      ]
    }
  ]
}

export default {
  HOME_ASSESSMENT_SCHEMA,
  CONSENT
};