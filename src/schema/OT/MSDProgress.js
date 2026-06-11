const SUBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "name": "complaint",
          "label": "Cheif Complaint",
          "type": "input",
          "placeholder": "Therapist assessment..."
        },
        {
          "name": "History of Present",
          "label": "History of Present Illnes",
          "type": "input"
        },
        {
          "name": "pain_score",
          "label": "Pain Score(Visual Analog Scale)",
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
          "name": "Additional_observations",
          "label": "Additional Observations",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter additional observations"
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
          "label": "Therapeutic Interventions"
        },
        {
          "type": "subheading",
          "label": " Modalities Provided "
        },
        {
          "name": "functional_exercise_modalities_items",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Hot Therapy",
              "value": "hot_therapy"
            },
            {
              "label": "Cold Therapy",
              "value": "cold_therapy"
            },
            {
              "label": "Fluidotherapy",
              "value": "fluidotherapy"
            },
            {
              "label": "MOTOMED",
              "value": "motomed"
            },
            {
              "label": "Robo Hand",
              "value": "robo_hand"
            },
            {
              "label": "EMS",
              "value": "ems"
            },
            {
              "label": "TENS",
              "value": "tens"
            },
            {
              "label": "FITMI",
              "value": "fitmi"
            },
            {
              "label": "Music Glove",
              "value": "music_glove"
            },
            {
              "label": "Saebo Stim",
              "value": "saebo_stim"
            },
            {
              "label": "Saebo Pro",
              "value": "saebo_pro"
            },
            {
              "label": "Driving Simulator",
              "value": "driving_simulator"
            },
            {
              "label": "Ultrasound",
              "value": "ultrasound"
            },
            {
              "label": "Laser",
              "value": "laser"
            },
            {
              "label": "Other",
              "value": "other"
            }
          ]
        },
        {
          "name": "hot_therapy",
          "label": "Hot Therapy Remark",
          "type": "input",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "hot_therapy"
          }
        },
        {
          "name": "cold_therapy",
          "label": "Cold Therapy Remark",
          "type": "input",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "cold_therapy"
          }
        },
        {
          "type": "subheading",
          "label": "Fluidotherapy",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "fluidotherapy"
          }
        },
        {
          "name": "pain_fluidotherapy_side",
          "label": "Fluidotherapy - Side",
          "type": "radio",
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
            "field": "functional_exercise_modalities_items",
            "includes": "fluidotherapy"
          }
        },
        {
          "name": "pain_fluidotherapy_duration",
          "label": "Fluidotherapy - Duration (Minutes)",
          "type": "input",
          "placeholder": "Enter duration",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "fluidotherapy"
          }
        },
        {
          "name": "motomed_duration",
          "label": "MOTOMED - Duration (Minutes)",
          "type": "input",
          "placeholder": "Enter duration in minutes",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "motomed"
          }
        },
        {
          "type": "subheading",
          "label": "Robo Hand",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "robo_hand"
          }
        },
        {
          "name": "robo_hand",
          "label": "Robo Hand",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "robo_hand"
          },
          "fields": [
            {
              "name": "robo_hand_type",
              "label": "Type",
              "type": "input",
              "placeholder": "Enter type"
            },
            {
              "name": "robo_hand_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "FITMI",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "fitmi"
          }
        },
        {
          "name": "fitmi",
          "label": "FITMI",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "fitmi"
          },
          "fields": [
            {
              "name": "fitmi_exercise",
              "label": "Exercise",
              "type": "input",
              "placeholder": "Enter exercise type"
            },
            {
              "name": "fitmi_reps",
              "label": "Repetitions",
              "type": "input",
              "placeholder": "Enter repetitions"
            },
            {
              "name": "fitmi_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Music Glove",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "music_glove"
          }
        },
        {
          "name": "music_glove",
          "label": "Music Glove",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "music_glove"
          },
          "fields": [
            {
              "name": "music_glove_level",
              "label": "Level",
              "type": "input"
            },
            {
              "name": "music_glove_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Saebo Stim",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "saebo_stim"
          }
        },
        {
          "name": "saebo_stim",
          "label": "Saebo Stim",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "saebo_stim"
          },
          "fields": [
            {
              "name": "saebo_stim_region",
              "label": "Region",
              "type": "input",
              "placeholder": "Enter region"
            },
            {
              "name": "saebo_stim_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Saebo Pro",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "saebo_pro"
          }
        },
        {
          "name": "saebo_pro",
          "label": "Saebo Pro",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "saebo_pro"
          },
          "fields": [
            {
              "name": "saebo_pro_region",
              "label": "Region",
              "type": "input",
              "placeholder": "Enter region"
            },
            {
              "name": "saebo_pro_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "EMS",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "ems"
          }
        },
        {
          "name": "ems",
          "label": "EMS",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "ems"
          },
          "fields": [
            {
              "name": "ems_region",
              "label": "Region",
              "type": "input",
              "placeholder": "Enter region"
            },
            {
              "name": "ems_frequency",
              "label": "Frequency (Hz)",
              "type": "input",
              "placeholder": "Enter frequency in Hz"
            },
            {
              "name": "ems_intensity",
              "label": "Intensity (mA)",
              "type": "input",
              "placeholder": "Enter intensity in mA"
            },
            {
              "name": "ems_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Tens",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "tens"
          }
        },
        {
          "name": "tens",
          "label": "TENS",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "tens"
          },
          "fields": [
            {
              "name": "tens_region",
              "label": "Region",
              "type": "input",
              "placeholder": "Enter treatment region"
            },
            {
              "name": "tens_frequency",
              "label": "Frequency (Hz)",
              "type": "input",
              "placeholder": "Enter frequency in Hz"
            },
            {
              "name": "tens_intensity",
              "label": "Intensity (mA)",
              "type": "input",
              "placeholder": "Enter intensity in mA"
            },
            {
              "name": "tens_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Driving Simulator",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "driving_simulator"
          }
        },
        {
          "name": "driving_simulator",
          "label": "Driving Simulator",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "driving_simulator"
          },
          "fields": [
            {
              "name": "driving_simulator_settings",
              "label": "Settings",
              "type": "input",
              "placeholder": "Enter settings (e.g. automatic / manual)"
            },
            {
              "name": "driving_simulator_mode",
              "label": "Mode",
              "type": "input",
              "placeholder": "Enter mode"
            },
            {
              "name": "driving_simulator_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Ultrasound",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "ultrasound"
          }
        },
        {
          "name": "ultrasound",
          "label": "Ultrasound",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "ultrasound"
          },
          "fields": [
            {
              "name": "ultrasound_region",
              "label": "Region",
              "type": "input",
              "placeholder": "Enter region"
            },
            {
              "name": "ultrasound_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Laser",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "laser"
          }
        },
        {
          "name": "laser",
          "label": "Laser",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "laser"
          },
          "fields": [
            {
              "name": "laser_region",
              "label": "Region",
              "type": "input",
              "placeholder": "Enter region"
            },
            {
              "name": "laser_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "name": "grasp_reach_activity",
          "label": "Grasp / Reach / Manipulation - Activity",
          "type": "input",
          "placeholder": "Enter activity",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "grasp_reach_manipulation_training"
          }
        },
        {
          "name": "laser_body_part",
          "label": "Laser Therapy - Body Part",
          "type": "input",
          "placeholder": "Enter body part",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "laser_therapy"
          }
        },
        {
          "name": "laser_power",
          "label": "Laser Therapy - Power (Watts)",
          "type": "input",
          "placeholder": "Enter power",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "laser_therapy"
          }
        },
        {
          "name": "laser_mode",
          "label": "Laser Therapy - Mode",
          "type": "radio",
          "options": [
            {
              "label": "Continuous",
              "value": "continuous"
            },
            {
              "label": "Pulsed",
              "value": "pulsed"
            }
          ],
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "laser_therapy"
          }
        },
        {
          "name": "laser_energy",
          "label": "Laser Therapy - Total Energy (Joules)",
          "type": "input",
          "placeholder": "Enter energy",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "laser_therapy"
          }
        },
        {
          "name": "laser_remarks",
          "label": "Laser Therapy Remarks",
          "type": "input",
          "rows": 3,
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "laser_therapy"
          }
        },
        {
          "name": "scar_technique",
          "label": "Scar Management - Technique",
          "type": "input",
          "placeholder": "Massage / Desensitisation",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "scar_management"
          }
        },
        {
          "name": "scar_area",
          "label": "Scar Management - Area",
          "type": "input",
          "placeholder": "Enter area",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "scar_management"
          }
        },
        {
          "name": "scar_duration",
          "label": "Scar Management - Duration (min)",
          "type": "input",
          "placeholder": "Enter duration",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "scar_management"
          }
        },
        {
          "name": "scar_remarks",
          "label": "Scar Management Remarks",
          "type": "input",
          "rows": 3,
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "scar_management"
          }
        },
        {
          "name": "tissue_technique",
          "label": "Tissue Mobilisation - Technique",
          "type": "input",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "tissue_mobilisation_techniques"
          }
        },
        {
          "name": "tissue_area",
          "label": "Tissue Mobilisation - Target Area",
          "type": "input",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "tissue_mobilisation_techniques"
          }
        },
        {
          "name": "tissue_duration",
          "label": "Tissue Mobilisation - Duration (min)",
          "type": "input",
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "tissue_mobilisation_techniques"
          }
        },
        {
          "name": "tissue_remarks",
          "label": "Tissue Mobilisation Remarks",
          "type": "input",
          "rows": 3,
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "tissue_mobilisation_techniques"
          }
        },
        {
          "name": "other_modalities",
          "label": "Others (Taping / Silicone / Vibration Therapy)",
          "type": "input",
          "rows": 3,
          "showIf": {
            "field": "functional_exercise_modalities_items",
            "includes": "other"
          }
        },
        {
          "type": "subheading",
          "label": "Interventions Provided"
        },
        {
          "name": "interventions_provided",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Functional ROM Exercise",
              "value": "functional_rom_exercise"
            },
            {
              "label": "Functional Strengthening Exercise",
              "value": "functional_strengthening_exercise"
            },
            {
              "label": "Fine Motor & Dexterity Training",
              "value": "fine_motor_dexterity_training"
            },
            {
              "label": "Therapeutic Exercises",
              "value": "therapeutic_exercises"
            },
            {
              "label": "Edema Management",
              "value": "edema_management"
            },
            {
              "label": "Pain Management",
              "value": "pain_management"
            },
            {
              "label": "Scar Management",
              "value": "scar_management"
            },
            {
              "label": "Positional Tolerance Training",
              "value": "positional_tolerance_training"
            }
          ]
        },
        {
          "name": "interventions_provided_free_text",
          "label": "Free Text",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter additional intervention details",
          "speechToText": true,
          "ocr": true
        },
        {
          "type": "subheading",
          "label": "Patient Education"
        },
        {
          "name": "patient_education_items",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Joint Protection Strategies",
              "value": "joint_protection_strategies"
            },
            {
              "label": "Energy Conservation Techniques",
              "value": "energy_conservation_techniques"
            },
            {
              "label": "Ergonomic Education",
              "value": "ergonomic_education"
            },
            {
              "label": "Caregiver Training",
              "value": "caregiver_training"
            },
            {
              "label": "Work Modification Advice",
              "value": "work_modification_advice"
            }
          ]
        },
        {
          "label": "Free text",
          "type": "input",
          "name": "free_text"
        },
        {
          "type": "subheading",
          "label": "ADL & IADL Training (Core OT Component)"
        },
        {
          "name": "adl_iadl_core_items",
          "label": "ADL Training",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Dressing",
              "value": "dressing"
            },
            {
              "label": "Grooming",
              "value": "grooming"
            },
            {
              "label": "Feeding",
              "value": "feeding"
            },
            {
              "label": "Toileting",
              "value": "toileting"
            },
            {
              "label": "Bathing",
              "value": "bathing"
            },
            {
              "label": "Transfers (Bed/Chair/Toilet)",
              "value": "transfers"
            },
            {
              "label": "Locomotion",
              "value": "locomotion"
            },
            {
              "label": "others",
              "value": "others"
            }
          ]
        },
        {
          "name": "others",
          "label": "Others",
          "type": "input",
          "showIf": {
            "field": "adl_iadl_core_items",
            "includes": "others"
          }
        },
        {
          "name": "iadl_training_items",
          "label": "IADL Training",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Cooking",
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
              "label": "Shopping",
              "value": "shopping"
            },
            {
              "label": "Transport / Community Mobility",
              "value": "transport_community_mobility"
            },
            {
              "label": "Medication Management",
              "value": "medication_management"
            },
            {
              "label": "Financial Tasks",
              "value": "financial_tasks"
            },
            {
              "label": "Telephone Use",
              "value": "telephone_use"
            },
            {
              "label": "Driving Rehabilitation",
              "value": "driving_rehabilitation"
            },
            {
              "label": "Riding Rehabilitation",
              "value": "riding_rehabilitation"
            },
            {
              "label": "others",
              "value": "others"
            }
          ]
        },
        {
          "name": "others",
          "label": "Others",
          "type": "input",
          "rows": 3,
          "showIf": {
            "field": "iadl_training_items",
            "includes": "others"
          }
        },
        {
          "type": "subheading",
          "label": "Assistive Devices / Adaptive Equipment"
        },
        {
          "name": "assistive_devices_equipment",
          "label": "Assistive Devices / Equipment",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Splint",
              "value": "splint"
            },
            {
              "label": "ADL",
              "value": "adl"
            },
            {
              "label": "Pressure Garment",
              "value": "pressure_garment"
            },
            {
              "label": "Tubigrip",
              "value": "tubigrip"
            },
            {
              "label": "Theraputty",
              "value": "theraputty"
            },
            {
              "label": "Theraband",
              "value": "theraband"
            },
            {
              "label": "Adaptive Nail Clipper",
              "value": "adaptive_nail_clipper"
            },
            {
              "label": "Wheelchair (Lightweight / Ultra / Motorised)",
              "value": "wheelchair"
            },
            {
              "label": "Commode",
              "value": "commode"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "splint_details",
          "label": "Splint Details",
          "type": "input",
          "placeholder": "Describe splint type / specification",
          "showIf": {
            "field": "assistive_devices_equipment",
            "includes": "splint"
          }
        },
        {
          "name": "assistive_devices_others",
          "label": "Others (Specify)",
          "type": "input",
          "placeholder": "Enter other assistive device",
          "showIf": {
            "field": "assistive_devices_equipment",
            "includes": "others"
          },
          "speechToText": true
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
          "name": "assessment_notes",
          "label": "Clinical Impression / Notes",
          "type": "input",
          "placeholder": "Therapist assessment..."
        },
        {
          "name": "functional_performance",
          "label": "Functional Performance",
          "type": "radio",
          "options": [
            {
              "label": "Improved",
              "value": "improved"
            },
            {
              "label": "No Change",
              "value": "no_change"
            },
            {
              "label": "Decline",
              "value": "decline"
            }
          ]
        }
      ]
    }
  ]
}

const PLAN = {
  "sections": [
    {
      "title": "Therapist Notes",
      "fields": [
        {
          "type": "subheading",
          "label": "Short-Term Goals (2–4 weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "short_term_goals"
        },
        {
          "type": "subheading",
          "label": "Long-Term Goals (6–12 weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "long_term_goals"
        },
        {
          "name": "therapist_plan_notes_comments",
          "label": "Notes / Comments",
          "type": "input",
          "rows": 4,
          "placeholder": "Enter notes or comments"
        },
        {
          "name": "therapist_signature",
          "label": "Signature / Therapist",
          "type": "input",
          "placeholder": "Auto-fill / electronic signature",
          "autoFill": true
        },
        {
          "name": "date",
          "label": "Date",
          "type": "date",
          "placeholder": "Auto-fill date",
          "autoFill": true
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