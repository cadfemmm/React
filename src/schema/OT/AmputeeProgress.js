const SUBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Session Notes"
        },
        {
          "name": "any_complaints",
          "label": "Any Complaints",
          "type": "input",
          "placeholder": "Enter patient's complaints",
          "speechToText": true,
          "ocr": true
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
          "name": "new_finding",
          "label": "New Finding",
          "type": "input",
          "placeholder": "Example: Wound, low mood, swelling, redness, dizziness",
          "speechToText": true,
          "ocr": true
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
          "label": "Interventions Provided"
        },
        {
          "type": "subheading",
          "label": "Modalities used"
        },
        {
          "name": "functional_exercise_modalities",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Chattanooga Wireless Pro",
              "value": "chattanooga_wireless_pro"
            },
            {
              "label": "Hot Pack",
              "value": "hot_pack"
            },
            {
              "label": "Cold Pack",
              "value": "cold_pack"
            },
            {
              "label": "Cryo Cuff",
              "value": "cryo_cuff"
            },
            {
              "label": "Light Force (Laser)",
              "value": "light_force_laser"
            },
            {
              "label": "Ultrasound",
              "value": "ultrasound"
            },
            {
              "label": "Vital Sign Monitor",
              "value": "vital_sign_monitor"
            },
            {
              "label": "Bobath Couch",
              "value": "bobath_couch"
            },
            {
              "label": "Shuttle Recovery",
              "value": "shuttle_recovery"
            },
            {
              "label": "Recumbent Bike",
              "value": "recumbent_bike"
            },
            {
              "label": "Upright Bike",
              "value": "upright_bike"
            },
            {
              "label": "MOTOMED",
              "value": "motomed"
            },
            {
              "label": "Rowing",
              "value": "rowing"
            },
            {
              "label": "Shoulder Pulley",
              "value": "shoulder_pulley"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Chattanooga Wireless Pro",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "chattanooga_wireless_pro"
          }
        },
        {
          "name": "chattanooga_wireless_pro",
          "label": "Chattanooga Wireless Pro",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "chattanooga_wireless_pro"
          },
          "fields": [
            {
              "name": "chattanooga_wireless_pro_mode",
              "label": "Mode",
              "type": "input",
              "placeholder": "Enter mode"
            },
            {
              "name": "chattanooga_wireless_pro_intensity",
              "label": "Intensity",
              "type": "input",
              "placeholder": "Enter intensity"
            },
            {
              "name": "chattanooga_wireless_pro_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration in minutes"
            },
            {
              "name": "chattanooga_wireless_pro_area",
              "label": "Area",
              "type": "input",
              "placeholder": "Enter treatment area"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Hot Pack",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "hot_pack"
          }
        },
        {
          "name": "hot_pack",
          "label": "Hot Pack",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "hot_pack"
          },
          "fields": [
            {
              "name": "hot_pack_area",
              "label": "Area",
              "type": "input",
              "placeholder": "Enter treatment area"
            },
            {
              "name": "hot_pack_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration in minutes"
            },
            {
              "name": "hot_pack_position",
              "label": "Position",
              "type": "input",
              "placeholder": "Enter patient position"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "cold Pack",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "cold_pack"
          }
        },
        {
          "name": "cold_pack",
          "label": "Cold Pack",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "cold_pack"
          },
          "fields": [
            {
              "name": "cold_pack_area",
              "label": "Area",
              "type": "input",
              "placeholder": "Enter treatment area"
            },
            {
              "name": "cold_pack_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration in minutes"
            },
            {
              "name": "cold_pack_position",
              "label": "Position",
              "type": "input",
              "placeholder": "Enter patient position"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Cryo Cuff",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "cryo_cuff"
          }
        },
        {
          "name": "cryo_cuff",
          "label": "Cryo Cuff",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "cryo_cuff"
          },
          "fields": [
            {
              "name": "cryo_cuff_area",
              "label": "Area",
              "type": "input",
              "placeholder": "Enter treatment area"
            },
            {
              "name": "cryo_cuff_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration in minutes"
            },
            {
              "name": "cryo_cuff_compression",
              "label": "Compression",
              "type": "input",
              "placeholder": "Enter compression setting"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Light Force",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "light_force_laser"
          }
        },
        {
          "name": "light_force_laser",
          "label": "Light Force (Laser)",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "light_force_laser"
          },
          "fields": [
            {
              "name": "light_force_laser_mode",
              "label": "Mode",
              "type": "input",
              "placeholder": "Enter mode"
            },
            {
              "name": "light_force_laser_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration in minutes"
            },
            {
              "name": "light_force_laser_area",
              "label": "Area",
              "type": "input",
              "placeholder": "Enter treatment area"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Ultrasound",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "ultrasound"
          }
        },
        {
          "name": "ultrasound",
          "label": "Ultrasound",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "ultrasound"
          },
          "fields": [
            {
              "name": "ultrasound_frequency",
              "label": "Frequency (MHz)",
              "type": "input",
              "placeholder": "Enter frequency"
            },
            {
              "name": "ultrasound_mode",
              "label": "Mode",
              "type": "input",
              "placeholder": "Continuous / Pulsed"
            },
            {
              "name": "ultrasound_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration in minutes"
            },
            {
              "name": "ultrasound_area",
              "label": "Area",
              "type": "input",
              "placeholder": "Enter treatment area"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Vital Sign Monitor",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "vital_sign_monitor"
          }
        },
        {
          "name": "vital_sign_monitor",
          "label": "Vital Sign Monitor",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "vital_sign_monitor"
          },
          "fields": [
            {
              "name": "vital_sign_monitor_pre_bp",
              "label": "Pre BP (mmHg)",
              "type": "input",
              "placeholder": "e.g. 120/80"
            },
            {
              "name": "vital_sign_monitor_pre_hr",
              "label": "Pre HR (bpm)",
              "type": "input",
              "placeholder": "Enter heart rate"
            },
            {
              "name": "vital_sign_monitor_pre_spo2",
              "label": "Pre SpO₂ (%)",
              "type": "input",
              "placeholder": "Enter oxygen saturation"
            },
            {
              "name": "vital_sign_monitor_post_bp",
              "label": "Post BP (mmHg)",
              "type": "input",
              "placeholder": "e.g. 118/78"
            },
            {
              "name": "vital_sign_monitor_post_hr",
              "label": "Post HR (bpm)",
              "type": "input",
              "placeholder": "Enter heart rate"
            },
            {
              "name": "vital_sign_monitor_post_spo2",
              "label": "Post SpO₂ (%)",
              "type": "input",
              "placeholder": "Enter oxygen saturation"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Shuttle Recovery",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "shuttle_recovery"
          }
        },
        {
          "name": "shuttle_recovery",
          "label": "Shuttle Recovery",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "shuttle_recovery"
          },
          "fields": [
            {
              "name": "shuttle_recovery_resistance",
              "label": "Resistance",
              "type": "input",
              "placeholder": "Enter resistance"
            },
            {
              "name": "shuttle_recovery_sets_reps",
              "label": "Sets / Reps",
              "type": "input",
              "placeholder": "e.g. 3 sets × 10 reps"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Recumbent Bike",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "recumbent_bike"
          }
        },
        {
          "name": "recumbent_bike",
          "label": "Recumbent Bike",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "recumbent_bike"
          },
          "fields": [
            {
              "name": "recumbent_bike_resistance_level",
              "label": "Resistance Level",
              "type": "input",
              "placeholder": "Enter resistance level"
            },
            {
              "name": "recumbent_bike_duration",
              "label": "Duration (min)",
              "type": "input",
              "placeholder": "Enter duration in minutes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Upright Bike",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "upright_bike"
          }
        },
        {
          "name": "upright_bike",
          "label": "Upright Bike",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "upright_bike"
          },
          "fields": [
            {
              "name": "upright_bike_resistance_level",
              "label": "Resistance Level",
              "type": "input",
              "placeholder": "Enter resistance level"
            },
            {
              "name": "upright_bike_duration",
              "label": "Duration (min)",
              "type": "input",
              "placeholder": "Enter duration in minutes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "MOtomed",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "motomed"
          }
        },
        {
          "name": "motomed",
          "label": "Motomed",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "motomed"
          },
          "fields": [
            {
              "name": "motomed_remarks",
              "label": "Mode",
              "type": "input",
              "placeholder": "Enter remarks",
              "speechToText": true,
              "ocr": true
            },
            {
              "name": "motomed_duration",
              "label": "Duration (min)",
              "type": "input",
              "placeholder": "Enter duration in minutes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Rowing",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "rowing"
          }
        },
        {
          "name": "rowing",
          "label": "Rowing",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "rowing"
          },
          "fields": [
            {
              "name": "rowing_resistance_level",
              "label": "Resistance Level",
              "type": "input",
              "placeholder": "Enter resistance level"
            },
            {
              "name": "rowing_duration",
              "label": "Duration (min)",
              "type": "input",
              "placeholder": "Enter duration in minutes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Shoulder Pulley",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "shoulder_pulley"
          }
        },
        {
          "name": "shoulder_pulley_type",
          "label": "Shoulder Pulley - Type (AAROM / AROM)",
          "type": "radio",
          "options": [
            {
              "label": "AAROM",
              "value": "aarom"
            },
            {
              "label": "AROM",
              "value": "arom"
            }
          ],
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "shoulder_pulley"
          }
        },
        {
          "name": "shoulder_pulley",
          "label": "Shoulder Pulley",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "shoulder_pulley"
          },
          "fields": [
            {
              "name": "shoulder_pulley_duration",
              "label": "Sets/Reps",
              "type": "input",
              "placeholder": "Enter duration in minutes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Bobath Couch",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "bobath_couch"
          }
        },
        {
          "name": "bobath_couch",
          "label": "Bobath Couch",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "bobath_couch"
          },
          "fields": [
            {
              "name": "bobath_couch_exercise_type",
              "label": "Activity",
              "type": "input",
              "placeholder": "Enter exercise type"
            },
            {
              "name": "bobath_couch_duration",
              "label": "Duration (min)",
              "type": "input",
              "placeholder": "Enter duration in minutes"
            }
          ]
        },
        {
          "name": "fibod_balance_board",
          "label": "Fibod Balance Board",
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "fibod_balance_board"
          },
          "fields": [
            {
              "name": "fibod_balance_board_exercise_type",
              "label": "Type of Exercise",
              "type": "input",
              "placeholder": "Enter exercise type"
            },
            {
              "name": "fibod_balance_board_duration",
              "label": "Duration (min)",
              "type": "input",
              "placeholder": "Enter duration in minutes"
            },
            {
              "name": "fibod_balance_board_repetition",
              "label": "Repetition",
              "type": "input",
              "placeholder": "Enter repetitions"
            },
            {
              "name": "fibod_balance_board_remarks",
              "label": "Remarks",
              "type": "input",
              "placeholder": "Enter remarks",
              "speechToText": true,
              "ocr": true
            }
          ]
        },
        {
          "name": "functional_exercise_other_name",
          "label": "Other Exercise",
          "type": "input",
          "placeholder": "Enter exercise name",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "others"
          }
        },
        {
          "name": "functional_exercise_other_remarks",
          "label": "Other Exercise Remarks",
          "type": "input",
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "others"
          },
          "speechToText": true,
          "ocr": true
        },
        {
          "type": "subheading",
          "label": "Pre-Prosthesis Training"
        },
        {
          "name": "pre_prosthesis_therapeutic_exercises",
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
              "label": "Functional Mobility Exercise",
              "value": "functional_mobility_exercise"
            },
            {
              "label": "Functional Endurance Exercise",
              "value": "functional_endurance_exercise"
            },
            {
              "label": "Functional Balance Exercise",
              "value": "functional_balance_exercise"
            },
            {
              "label": "Fine Motor and Dexterity Training",
              "value": "fine_motor_dexterity_training"
            },
            {
              "label": "Education on Stump Management",
              "value": "education_on_stump_management"
            },
            {
              "label": "Sensory Desensitization",
              "value": "sensory_desensitization"
            },
            {
              "label": "Wheelchair Training",
              "value": "wheelchair_training"
            },
            {
              "label": "Education",
              "value": "education_home_program"
            }
          ]
        },
        {
          "name": "functional_rom_exercise_remarks",
          "label": "Functional ROM Exercise Remarks",
          "type": "input",
          "placeholder": "Enter ROM exercise details",
          "showIf": {
            "field": "pre_prosthesis_therapeutic_exercises",
            "includes": "functional_rom_exercise"
          },
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "functional_strengthening_exercise_remarks",
          "label": "Functional Strengthening Exercise Remarks",
          "type": "input",
          "placeholder": "Enter strengthening exercise details",
          "showIf": {
            "field": "pre_prosthesis_therapeutic_exercises",
            "includes": "functional_strengthening_exercise"
          },
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "functional_mobility_exercise_remarks",
          "label": "Functional Mobility Exercise Remarks",
          "type": "input",
          "placeholder": "Enter transfer / walking aids / wheelchair training details",
          "showIf": {
            "field": "pre_prosthesis_therapeutic_exercises",
            "includes": "functional_mobility_exercise"
          },
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "functional_endurance_exercise_remarks",
          "label": "Functional Endurance Exercise Remarks",
          "type": "input",
          "placeholder": "Enter endurance exercise details",
          "showIf": {
            "field": "pre_prosthesis_therapeutic_exercises",
            "includes": "functional_endurance_exercise"
          },
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "functional_balance_type",
          "label": "Balance Type",
          "type": "radio",
          "options": [
            {
              "label": "Static",
              "value": "static"
            },
            {
              "label": "Dynamic",
              "value": "dynamic"
            }
          ],
          "showIf": {
            "field": "pre_prosthesis_therapeutic_exercises",
            "includes": "functional_balance_exercise"
          }
        },
        {
          "name": "functional_balance_exercise_remarks",
          "label": "Functional Balance Exercise Remarks",
          "type": "input",
          "placeholder": "Enter balance exercise details",
          "showIf": {
            "field": "pre_prosthesis_therapeutic_exercises",
            "includes": "functional_balance_exercise"
          },
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "fine_motor_dexterity_training_remarks",
          "label": "Fine Motor and Dexterity Training Remarks",
          "type": "input",
          "placeholder": "Enter fine motor and dexterity training details",
          "showIf": {
            "field": "pre_prosthesis_therapeutic_exercises",
            "includes": "fine_motor_dexterity_training"
          },
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "education_on_stump_management_remarks",
          "label": "Education on Stump Management Remarks",
          "type": "input",
          "placeholder": "Enter stump management education details",
          "showIf": {
            "field": "pre_prosthesis_therapeutic_exercises",
            "includes": "education_on_stump_management"
          },
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "sensory_desensitization_remarks",
          "label": "Sensory Desensitization Remarks",
          "type": "input",
          "placeholder": "Enter desensitization details",
          "showIf": {
            "field": "pre_prosthesis_therapeutic_exercises",
            "includes": "sensory_desensitization"
          },
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "wheelchair_training_remarks",
          "label": "Wheelchair Training Remarks",
          "type": "input",
          "placeholder": "Enter wheelchair training details (e.g. motorized)",
          "showIf": {
            "field": "pre_prosthesis_therapeutic_exercises",
            "includes": "wheelchair_training"
          },
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "education_home_program_remarks",
          "label": "Education (Home Program / Exercise) Remarks",
          "type": "input",
          "placeholder": "Enter home program or exercise education details",
          "showIf": {
            "field": "pre_prosthesis_therapeutic_exercises",
            "includes": "education_home_program"
          },
          "speechToText": true,
          "ocr": true
        },
        {
          "type": "subheading",
          "label": "Post-Prosthesis Training"
        },
        {
          "name": "post_prosthesis_therapeutic_exercises",
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
              "label": "Functional Mobility Exercise",
              "value": "functional_mobility_exercise"
            },
            {
              "label": "Functional Endurance Exercise",
              "value": "functional_endurance_exercise"
            },
            {
              "label": "Functional Balance Exercise",
              "value": "functional_balance_exercise"
            },
            {
              "label": "Fine Motor and Dexterity Training",
              "value": "fine_motor_dexterity_training"
            },
            {
              "label": "Education",
              "value": "education"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "post_functional_rom_exercise_remarks",
          "label": "Functional ROM Exercise Remarks",
          "type": "input",
          "placeholder": "Enter ROM exercise details",
          "showIf": {
            "field": "post_prosthesis_therapeutic_exercises",
            "includes": "functional_rom_exercise"
          },
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "post_functional_strengthening_exercise_remarks",
          "label": "Functional Strengthening Exercise Remarks",
          "type": "input",
          "placeholder": "Enter strengthening exercise details",
          "showIf": {
            "field": "post_prosthesis_therapeutic_exercises",
            "includes": "functional_strengthening_exercise"
          },
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "post_functional_mobility_exercise_remarks",
          "label": "Functional Mobility Exercise Remarks",
          "type": "input",
          "placeholder": "Enter transfer / walking aids / wheelchair training details",
          "showIf": {
            "field": "post_prosthesis_therapeutic_exercises",
            "includes": "functional_mobility_exercise"
          },
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "post_functional_endurance_exercise_remarks",
          "label": "Functional Endurance Exercise Remarks",
          "type": "input",
          "placeholder": "Enter endurance exercise details",
          "showIf": {
            "field": "post_prosthesis_therapeutic_exercises",
            "includes": "functional_endurance_exercise"
          },
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "post_functional_balance_type",
          "label": "Balance Type",
          "type": "radio",
          "options": [
            {
              "label": "Static",
              "value": "static"
            },
            {
              "label": "Dynamic",
              "value": "dynamic"
            }
          ],
          "showIf": {
            "field": "post_prosthesis_therapeutic_exercises",
            "includes": "functional_balance_exercise"
          }
        },
        {
          "name": "post_functional_balance_exercise_remarks",
          "label": "Functional Balance Exercise Remarks",
          "type": "input",
          "placeholder": "Enter balance exercise details",
          "showIf": {
            "field": "post_prosthesis_therapeutic_exercises",
            "includes": "functional_balance_exercise"
          },
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "post_fine_motor_dexterity_training_remarks",
          "label": "Fine Motor and Dexterity Training Remarks",
          "type": "input",
          "placeholder": "Enter fine motor and dexterity training details",
          "showIf": {
            "field": "post_prosthesis_therapeutic_exercises",
            "includes": "fine_motor_dexterity_training"
          },
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "post_education_remarks",
          "label": "Education Remarks",
          "type": "input",
          "placeholder": "Enter education details",
          "showIf": {
            "field": "post_prosthesis_therapeutic_exercises",
            "includes": "education"
          },
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "post_others_remarks",
          "label": "Others Remarks",
          "type": "input",
          "placeholder": "Enter other intervention details",
          "showIf": {
            "field": "post_prosthesis_therapeutic_exercises",
            "includes": "others"
          },
          "speechToText": true,
          "ocr": true
        },
        {
          "type": "subheading",
          "label": "ADL and Functional Training"
        },
        {
          "name": "adl_training_items",
          "label": "ADL Training",
          "type": "checkbox-group",
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
              "label": "Eating / Feeding",
              "value": "eating_feeding"
            },
            {
              "label": "Grooming",
              "value": "grooming"
            },
            {
              "label": "Sphincter Control",
              "value": "sphincter_control"
            },
            {
              "label": "Transfers",
              "value": "transfers"
            },
            {
              "label": "Locomotion (Wheelchair Propelling / Walking with Aids)",
              "value": "locomotion"
            }
          ]
        },
        {
          "name": "adl_dressing_type",
          "label": "Dressing Type",
          "type": "radio",
          "options": [
            {
              "label": "Upper Garment",
              "value": "upper_garment"
            },
            {
              "label": "Lower Garment",
              "value": "lower_garment"
            },
            {
              "label": "Inner Garment",
              "value": "inner_garment"
            }
          ],
          "showIf": {
            "field": "adl_training_items",
            "includes": "dressing"
          }
        },
        {
          "name": "iadl_training_items",
          "label": "IADL Training",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Telephone / Communication Aide Training",
              "value": "telephone_communication"
            },
            {
              "label": "Food Preparation Simulation Training",
              "value": "food_preparation_simulation"
            },
            {
              "label": "Home Management Training",
              "value": "home_management"
            },
            {
              "label": "Medication Management",
              "value": "medication_management"
            },
            {
              "label": "Financial Management",
              "value": "financial_management"
            },
            {
              "label": "Driving Rehabilitation",
              "value": "driving_rehabilitation"
            },
            {
              "label": "Riding Rehabilitation",
              "value": "riding_rehabilitation"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Leisure & Recreational Training"
        },
        {
          "name": "leisure_training_items",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Morning Walk",
              "value": "morning_walk"
            },
            {
              "label": "Indoor Games",
              "value": "indoor_games"
            },
            {
              "label": "Gardening",
              "value": "gardening"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "leisure_training_other",
          "label": "Other Leisure Activity",
          "type": "input",
          "placeholder": "Specify other activity",
          "showIf": {
            "field": "leisure_training_items",
            "includes": "others"
          }
        },
        {
          "type": "subheading",
          "label": "Assistive & Adaptive Devices Prescription Plan"
        },
        {
          "name": "assistive_devices_prescription",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Splint",
              "value": "splint"
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
              "label": "Adaptive Nail Clipper",
              "value": "adaptive_nail_clipper"
            },
            {
              "label": "Lightweight Wheelchair",
              "value": "lightweight_wheelchair"
            },
            {
              "label": "Ultralightweight Wheelchair",
              "value": "ultralightweight_wheelchair"
            },
            {
              "label": "Motorised / Electric Wheelchair",
              "value": "motorised_electric_wheelchair"
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
          "name": "assistive_devices_other",
          "label": "Other Assistive Device",
          "type": "input",
          "placeholder": "Specify other assistive device",
          "showIf": {
            "field": "assistive_devices_prescription",
            "includes": "others"
          }
        },
        {
          "name": "assistive_devices_prescription_remarks",
          "label": "Assistive Devices Remarks (Sizing, Type, Details)",
          "type": "input",
          "placeholder": "Enter sizing, type, and additional details"
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
          "name": "client_progress_status",
          "label": "Client Demonstrates",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Improvement",
              "value": "improvement"
            },
            {
              "label": "No Change",
              "value": "no_change"
            },
            {
              "label": "Decline",
              "value": "decline"
            },
            {
              "label": "With Prosthesis",
              "value": "with_prosthesis"
            },
            {
              "label": "Without Prosthesis",
              "value": "without_prosthesis"
            }
          ]
        },
        {
          "name": "strengths_client_benefited",
          "label": "Strengths / Client Benefited (Increased Independence) Using",
          "type": "input",
          "placeholder": "Enter strengths and areas of increased independence",
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "barriers_to_performance",
          "label": "Barriers to Performance / Areas of Difficulty",
          "type": "input",
          "placeholder": "Enter barriers and areas of difficulty",
          "speechToText": true,
          "ocr": true
        },
        {
          "name": "underlying_cause",
          "label": "Others / Underlying Cause",
          "type": "input",
          "placeholder": "Enter other contributing factors or underlying causes",
          "speechToText": true,
          "ocr": true
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
          "type": "input",
          "name": "plan",
          "label": "Plan"
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