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
          "label": "Functional Modalities"
        },
        {
          "name": "functional_exercises_items",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Motomed",
              "value": "motomed"
            },
            {
              "label": "Cycle Motus",
              "value": "cycle_motus"
            },
            {
              "label": "Fourier Wrist Motus",
              "value": "fourier_wrist_motus"
            },
            {
              "label": "Meissa OT",
              "value": "meissa_ot"
            },
            {
              "label": "Fesia Grasp",
              "value": "fesia_grasp"
            },
            {
              "label": "Fesia Bike",
              "value": "fesia_bike"
            },
            {
              "label": "Robotic Glove Hand Exerciser",
              "value": "robotic_glove_hand_exerciser"
            },
            {
              "label": "EMS",
              "value": "ems"
            },
            {
              "label": "FES",
              "value": "fes"
            },
            {
              "label": "Flint Rehab - FITMI",
              "value": "flint_rehab_fitmi"
            },
            {
              "label": "Flint Rehab - Music Glove",
              "value": "flint_rehab_music_glove"
            },
            {
              "label": "Rapael input",
              "value": "rapael_neofect_smart_pegboard"
            },
            {
              "label": "Lusio Mate",
              "value": "lusio_mate"
            },
            {
              "label": "Fluidotherapy",
              "value": "fluidotherapy"
            },
            {
              "label": "Saebo Stim",
              "value": "saebo_stim"
            },
            {
              "label": "Saebo Hand Treatment Kit",
              "value": "saebo_hand_treatment_kit"
            },
            {
              "label": "Moto Tiles",
              "value": "moto_tiles"
            },
            {
              "label": "Treax pads",
              "value": "treax_pads"
            },
            {
              "label": "Neofect Smart Pegboard",
              "value": "neofect_smart_pegboard"
            },
            {
              "label": "Driving Simulator",
              "value": "driving_simulator"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Motomed",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "motomed"
          }
        },
        {
          "name": "motomed",
          "label": "Motomed",
          "type": "row",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "motomed"
          },
          "fields": [
            {
              "name": "motomed_mode",
              "label": "Mode",
              "type": "input",
              "placeholder": "Enter mode"
            },
            {
              "name": "motomed_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Neofect Smart Pegboard",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "neofect_smart_pegboard"
          }
        },
        {
          "name": "neofect_smart_pegboard",
          "label": "Neofect Smart Pegboard",
          "type": "row",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "neofect_smart_pegboard"
          },
          "fields": [
            {
              "name": "neofect_smart_pegboard_mode",
              "label": "Mode",
              "type": "input",
              "placeholder": "Enter mode"
            },
            {
              "name": "neofect_smart_pegboard_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Cycle Motus",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "cycle_motus"
          }
        },
        {
          "name": "cycle_motus",
          "label": "Cycle Motus",
          "type": "row",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "cycle_motus"
          },
          "fields": [
            {
              "name": "cycle_motus_mode",
              "label": "Mode",
              "type": "input",
              "placeholder": "Enter mode"
            },
            {
              "name": "cycle_motus_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Fourier Wrist Motus",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "fourier_wrist_motus"
          }
        },
        {
          "name": "fourier_wrist_motus",
          "label": "Fourier Wrist Motus",
          "type": "row",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "fourier_wrist_motus"
          },
          "fields": [
            {
              "name": "fourier_wrist_motus_mode",
              "label": "Mode",
              "type": "input",
              "placeholder": "Enter mode"
            },
            {
              "name": "fourier_wrist_motus_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Meissa OT",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "meissa_ot"
          }
        },
        {
          "name": "meissa_ot",
          "label": "Meissa OT",
          "type": "row",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "meissa_ot"
          },
          "fields": [
            {
              "name": "meissa_ot_type_of_exercise",
              "label": "Type of Exercise",
              "type": "input",
              "placeholder": "Enter type of exercise"
            },
            {
              "name": "meissa_ot_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Fesia Grasp",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "fesia_grasp"
          }
        },
        {
          "name": "fesia_grasp",
          "label": "Fesia Grasp",
          "type": "row",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "fesia_grasp"
          },
          "fields": [
            {
              "name": "fesia_grasp_protocol",
              "label": "Protocol",
              "type": "input",
              "placeholder": "Enter protocol"
            },
            {
              "name": "fesia_grasp_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Fesia Bike",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "fesia_bike"
          }
        },
        {
          "name": "fesia_bike",
          "label": "Fesia Bike",
          "type": "row",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "fesia_bike"
          },
          "fields": [
            {
              "name": "fesia_bike_protocol",
              "label": "Protocol",
              "type": "input",
              "placeholder": "Enter protocol"
            },
            {
              "name": "fesia_bike_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Robotic Glove Hand Exerciser",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "robotic_glove_hand_exerciser"
          }
        },
        {
          "name": "robotic_glove_hand_exerciser",
          "label": "Robotic Glove Hand Exerciser",
          "type": "row",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "robotic_glove_hand_exerciser"
          },
          "fields": [
            {
              "name": "robotic_glove_hand_exerciser_type_of_exercise",
              "label": "Type of Exercise",
              "type": "input",
              "placeholder": "Enter type of exercise"
            },
            {
              "name": "robotic_glove_hand_exerciser_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Flint Rehab - FITMI",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "flint_rehab_fitmi"
          }
        },
        {
          "name": "flint_rehab_fitmi",
          "label": "Flint Rehab - FITMI",
          "type": "row",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "flint_rehab_fitmi"
          },
          "fields": [
            {
              "name": "flint_rehab_fitmi_type_of_exercise",
              "label": "Type of Exercise",
              "type": "input",
              "placeholder": "Enter type of exercise"
            },
            {
              "name": "flint_rehab_fitmi_repetition",
              "label": "Repetition",
              "type": "input",
              "placeholder": "Enter number of repetitions"
            },
            {
              "name": "flint_rehab_fitmi_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "name": "flint_rehab_fitmi_body_part",
          "label": "Body Part",
          "type": "radio",
          "options": [
            {
              "label": "Left Arm",
              "value": "left_arm"
            },
            {
              "label": "Right Arm",
              "value": "right_arm"
            },
            {
              "label": "Left Leg",
              "value": "left_leg"
            },
            {
              "label": "Right Leg",
              "value": "right_leg"
            }
          ],
          "showIf": {
            "field": "flint_rehab_fitmi_intervention_mode",
            "equals": "music_touch"
          }
        },
        {
          "name": "flint_rehab_fitmi_type_of_exercise",
          "label": "Type of Exercise",
          "type": "radio",
          "options": [
            {
              "label": "Single Puck",
              "value": "single_puck"
            },
            {
              "label": "Double Puck Horizontal",
              "value": "double_puck_horizontal"
            },
            {
              "label": "Double Puck Vertical",
              "value": "double_puck_vertical"
            }
          ],
          "showIf": {
            "field": "flint_rehab_fitmi_intervention_mode",
            "equals": "music_touch"
          }
        },
        {
          "name": "flint_rehab_fitmi_difficulty_level",
          "label": "Difficulty Level",
          "type": "radio",
          "options": [
            {
              "label": "Easy",
              "value": "easy"
            },
            {
              "label": "Medium",
              "value": "medium"
            },
            {
              "label": "Hard",
              "value": "hard"
            }
          ],
          "showIf": {
            "field": "flint_rehab_fitmi_intervention_mode",
            "equals": "music_touch"
          }
        },
        {
          "name": "flint_rehab_fitmi_music_touch_duration",
          "label": "Duration (Minutes)",
          "type": "radio",
          "options": [
            {
              "label": "5 Minutes",
              "value": "5"
            },
            {
              "label": "10 Minutes",
              "value": "10"
            },
            {
              "label": "15 Minutes",
              "value": "15"
            },
            {
              "label": "20 Minutes",
              "value": "20"
            }
          ],
          "showIf": {
            "field": "flint_rehab_fitmi_intervention_mode",
            "equals": "music_touch"
          }
        },
        {
          "name": "flint_rehab_fitmi_rehab_studio_mode",
          "label": "Rehab Studio Mode",
          "type": "radio",
          "options": [
            {
              "label": "Rep Mode",
              "value": "rep_mode"
            },
            {
              "label": "Timed Mode",
              "value": "timed_mode"
            }
          ],
          "showIf": {
            "field": "flint_rehab_fitmi_intervention_mode",
            "equals": "rehab_studio"
          }
        },
        {
          "name": "flint_rehab_fitmi_rehab_studio_duration",
          "label": "Duration (Minutes)",
          "type": "radio",
          "options": [
            {
              "label": "5 Minutes",
              "value": "5"
            },
            {
              "label": "10 Minutes",
              "value": "10"
            },
            {
              "label": "15 Minutes",
              "value": "15"
            },
            {
              "label": "20 Minutes",
              "value": "20"
            }
          ],
          "showIf": {
            "field": "flint_rehab_fitmi_intervention_mode",
            "equals": "rehab_studio"
          }
        },
        {
          "type": "subheading",
          "label": "Flint Rehab - Music Glove",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "flint_rehab_music_glove"
          }
        },
        {
          "name": "flint_rehab_music_glove",
          "label": "Flint Rehab - Music Glove",
          "type": "row",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "flint_rehab_music_glove"
          },
          "fields": [
            {
              "name": "flint_rehab_music_glove_region",
              "label": "Region",
              "type": "input",
              "placeholder": "Enter region"
            },
            {
              "name": "flint_rehab_music_glove_difficulty_level",
              "label": "Difficulty Level / Speed",
              "type": "input",
              "placeholder": "Enter difficulty level or speed"
            },
            {
              "name": "flint_rehab_music_glove_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Lusio Mate",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "lusio_mate"
          }
        },
        {
          "name": "lusio_mate",
          "label": "Lusio Mate",
          "type": "row",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "lusio_mate"
          },
          "fields": [
            {
              "name": "lusio_mate_difficulty_level",
              "label": "Difficulty Level",
              "type": "input",
              "placeholder": "Enter difficulty level"
            },
            {
              "name": "lusio_mate_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Lusio Mate",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "lusio_mate"
          }
        },
        {
          "name": "lusio_mate",
          "label": "Lusio Mate",
          "type": "row",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "lusio_mate"
          },
          "fields": [
            {
              "name": "lusio_mate_difficulty_level",
              "label": "Difficulty Level",
              "type": "input",
              "placeholder": "Enter difficulty level"
            },
            {
              "name": "lusio_mate_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Fluidotherapy",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "fluidotherapy"
          }
        },
        {
          "name": "fluidotherapy",
          "label": "Fluidotherapy",
          "type": "row",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "fluidotherapy"
          },
          "fields": [
            {
              "name": "functional_fluidotherapy_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            },
            {
              "name": "functional_fluidotherapy_temperature",
              "label": "Temperature",
              "type": "input",
              "placeholder": "Enter temperature"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "EMS",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "ems"
          }
        },
        {
          "name": "functional_ems",
          "label": "EMS",
          "type": "row",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "ems"
          },
          "fields": [
            {
              "name": "functional_ems_body_region",
              "label": "Body Region",
              "type": "input",
              "placeholder": "Enter body region"
            },
            {
              "name": "functional_ems_frequency_hz",
              "label": "Frequency (Hz)",
              "type": "input",
              "placeholder": "Enter frequency (10–50 Hz)"
            },
            {
              "name": "functional_ems_intensity_ma",
              "label": "Intensity (mA)",
              "type": "input",
              "placeholder": "Enter intensity in mA"
            },
            {
              "name": "functional_ems_duration",
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
            "field": "functional_exercises_items",
            "includes": "saebo_stim"
          }
        },
        {
          "name": "functional_saebo_stim",
          "label": "Saebo Stim",
          "type": "row",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "saebo_stim"
          },
          "fields": [
            {
              "name": "functional_saebo_stim_body_region",
              "label": "Body Region",
              "type": "input",
              "placeholder": "Enter body region"
            },
            {
              "name": "functional_saebo_stim_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "name": "functional_exercises_other",
          "label": "Others",
          "type": "input",
          "placeholder": "Specify other functional exercise modality",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "others"
          }
        },
        {
          "name": "functional_exercises_other_remarks",
          "label": "Others Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "others"
          }
        },
        {
          "type": "subheading",
          "label": "Saebo Hand Treatment Kit",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "saebo_hand_treatment_kit"
          }
        },
        {
          "name": "saebo_hand_treatment_kit",
          "label": "Saebo Hand Treatment Kit",
          "type": "row",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "saebo_hand_treatment_kit"
          },
          "fields": [
            {
              "name": "saebo_hand_treatment_kit_type_of_exercise",
              "label": "Type of Exercise",
              "type": "input",
              "placeholder": "Enter type of exercise"
            },
            {
              "name": "saebo_hand_treatment_kit_repetitions_sets",
              "label": "Repetitions / Sets",
              "type": "input",
              "placeholder": "Enter repetitions or sets"
            },
            {
              "name": "saebo_hand_treatment_kit_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Moto Tiles",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "moto_tiles"
          }
        },
        {
          "name": "moto_tiles",
          "label": "Moto Tiles",
          "type": "row",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "moto_tiles"
          },
          "fields": [
            {
              "name": "moto_tiles_type_of_exercise",
              "label": "Type of Exercise",
              "type": "input",
              "placeholder": "Enter type of exercise"
            },
            {
              "name": "moto_tiles_level_difficulty",
              "label": "Level / Difficulty",
              "type": "input",
              "placeholder": "Enter level or difficulty"
            },
            {
              "name": "moto_tiles_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Treax Pads",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "treax_pads"
          }
        },
        {
          "name": "treax_pads",
          "label": "Treax Pads",
          "type": "row",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "treax_pads"
          },
          "fields": [
            {
              "name": "treax_pads_type_of_exercise",
              "label": "Type of Exercise",
              "type": "input",
              "placeholder": "Enter type of exercise"
            },
            {
              "name": "treax_pads_sets_duration",
              "label": "Sets / Duration",
              "type": "input",
              "placeholder": "Enter sets or duration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Driving Simulator",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "driving_simulator"
          }
        },
        {
          "name": "driving_simulator",
          "label": "Driving Simulator",
          "type": "row",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "driving_simulator"
          },
          "fields": [
            {
              "name": "driving_simulator_setting",
              "label": "Setting",
              "type": "input",
              "placeholder": "Enter setting (e.g. automatic transmission / manual transmission)"
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
          "label": "FES",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "fes"
          }
        },
        {
          "name": "functional_fes",
          "label": "FES",
          "type": "row",
          "showIf": {
            "field": "functional_exercises_items",
            "includes": "fes"
          },
          "fields": [
            {
              "name": "functional_fes_body_region",
              "label": "Body Region",
              "type": "input",
              "placeholder": "Enter body region"
            },
            {
              "name": "functional_fes_frequency_hz",
              "label": "Frequency (Hz)",
              "type": "input",
              "placeholder": "Enter frequency (10–50 Hz)"
            },
            {
              "name": "functional_fes_intensity_ma",
              "label": "Intensity (mA)",
              "type": "input",
              "placeholder": "Enter intensity in mA"
            },
            {
              "name": "functional_fes_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "placeholder": "Enter duration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Therapeutic Interventions"
        },
        {
          "type": "subheading",
          "label": "Therapeutic Exercises"
        },
        {
          "name": "therapeutic_exercises_items",
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
              "label": "Muscle Tone Management",
              "value": "muscle_tone_management"
            },
            {
              "label": "Fine Motor and Dexterity Training",
              "value": "fine_motor_and_dexterity_training"
            },
            {
              "label": "Bobath/NDT Therapy",
              "value": "bobath_ndt_therapy"
            },
            {
              "label": "Constraint Induced Movement Therapy (CIMT)",
              "value": "cimt"
            },
            {
              "label": "Graded Motor Imagery (GMI)",
              "value": "gmi"
            }
          ]
        },
        {
          "name": "functional_rom_exercise_remarks",
          "label": "Functional ROM Exercise Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "therapeutic_exercises_items",
            "includes": "functional_rom_exercise"
          }
        },
        {
          "name": "functional_strengthening_exercise_type",
          "label": "Functional Strengthening Exercise Type",
          "type": "radio",
          "options": [
            {
              "label": "Passive",
              "value": "passive"
            },
            {
              "label": "Active",
              "value": "active"
            },
            {
              "label": "Assisted",
              "value": "assisted"
            }
          ],
          "showIf": {
            "field": "therapeutic_exercises_items",
            "includes": "functional_strengthening_exercise"
          }
        },
        {
          "name": "functional_strengthening_exercise_remarks",
          "label": "Functional Strengthening Exercise Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "therapeutic_exercises_items",
            "includes": "functional_strengthening_exercise"
          }
        },
        {
          "name": "muscle_tone_management_remarks",
          "label": "Muscle Tone Management Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "therapeutic_exercises_items",
            "includes": "muscle_tone_management"
          }
        },
        {
          "name": "weight_bearing_exercise_remarks",
          "label": "Weight Bearing Exercise Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "therapeutic_exercises_items",
            "includes": "weight_bearing_exercise"
          }
        },
        {
          "name": "fine_motor_and_dexterity_training_remarks",
          "label": "Fine Motor and Dexterity Training Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "therapeutic_exercises_items",
            "includes": "fine_motor_and_dexterity_training"
          }
        },
        {
          "name": "coordination_training_remarks",
          "label": "Coordination Training Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "therapeutic_exercises_items",
            "includes": "coordination_training"
          }
        },
        {
          "name": "balance_training_sitting_type",
          "label": "Balance Training - Sitting",
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
            "field": "therapeutic_exercises_items",
            "includes": "balance_training_sitting"
          }
        },
        {
          "name": "balance_training_sitting_remarks",
          "label": "Balance Training - Sitting Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "therapeutic_exercises_items",
            "includes": "balance_training_sitting"
          }
        },
        {
          "name": "balance_training_standing_type",
          "label": "Balance Training - Standing",
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
            "field": "therapeutic_exercises_items",
            "includes": "balance_training_standing"
          }
        },
        {
          "name": "balance_training_standing_remarks",
          "label": "Balance Training - Standing Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "therapeutic_exercises_items",
            "includes": "balance_training_standing"
          }
        },
        {
          "name": "bobath_ndt_therapy_type",
          "label": "Bobath/NDT Therapy",
          "type": "radio",
          "options": [
            {
              "label": "Trunk & Pelvis Facilitation",
              "value": "trunk_pelvis_facilitation"
            },
            {
              "label": "Lower Limb Facilitation",
              "value": "lower_limb_facilitation"
            },
            {
              "label": "Upper Limb & Hand Facilitation",
              "value": "upper_limb_hand_facilitation"
            },
            {
              "label": "Neck Facilitation",
              "value": "neck_facilitation"
            }
          ],
          "showIf": {
            "field": "therapeutic_exercises_items",
            "includes": "bobath_ndt_therapy"
          }
        },
        {
          "name": "bobath_ndt_therapy_remarks",
          "label": "Bobath/NDT Therapy Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "therapeutic_exercises_items",
            "includes": "bobath_ndt_therapy"
          }
        },
        {
          "name": "cimt_remarks",
          "label": "Constraint Induced Movement Therapy (CIMT) Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "therapeutic_exercises_items",
            "includes": "cimt"
          }
        },
        {
          "name": "gmi_remarks",
          "label": "Graded Motor Imagery (GMI) Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "therapeutic_exercises_items",
            "includes": "gmi"
          }
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
              "label": "Eating/Feeding",
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
              "label": "Locomotion - Wheelchair Propelling, Walking with Aids",
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
          "name": "adl_dressing_remarks",
          "label": "Dressing Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "adl_training_items",
            "includes": "dressing"
          }
        },
        {
          "name": "adl_toileting_remarks",
          "label": "Toileting Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "adl_training_items",
            "includes": "toileting"
          }
        },
        {
          "name": "adl_eating_feeding_remarks",
          "label": "Eating/Feeding Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "adl_training_items",
            "includes": "eating_feeding"
          }
        },
        {
          "name": "adl_grooming_remarks",
          "label": "Grooming Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "adl_training_items",
            "includes": "grooming"
          }
        },
        {
          "name": "adl_sphincter_control_remarks",
          "label": "Sphincter Control Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "adl_training_items",
            "includes": "sphincter_control"
          }
        },
        {
          "name": "adl_transfers_type",
          "label": "Transfers Type",
          "type": "radio",
          "options": [
            {
              "label": "Wheelchair to Bed vice versa",
              "value": "wheelchair_to_bed"
            },
            {
              "label": "Wheelchair into Car vice versa",
              "value": "wheelchair_into_car"
            },
            {
              "label": "Bed to Commode vice versa",
              "value": "bed_to_commode"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ],
          "showIf": {
            "field": "adl_training_items",
            "includes": "transfers"
          }
        },
        {
          "name": "adl_transfers_other",
          "label": "Other Transfer Type",
          "type": "input",
          "placeholder": "Specify other transfer type",
          "showIf": {
            "field": "adl_transfers_type",
            "equals": "others"
          }
        },
        {
          "name": "adl_transfers_remarks",
          "label": "Transfers Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "adl_training_items",
            "includes": "transfers"
          }
        },
        {
          "name": "adl_locomotion_remarks",
          "label": "Locomotion Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "adl_training_items",
            "includes": "locomotion"
          }
        },
        {
          "type": "subheading",
          "label": "IADL Training"
        },
        {
          "name": "iadl_training_items",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Telephone / Communication Aide Training",
              "value": "telephone_communication_aide_training"
            },
            {
              "label": "Food Preparation & Kitchen Simulation Training",
              "value": "food_preparation_kitchen_simulation_training"
            },
            {
              "label": "Home Management Training",
              "value": "home_management_training"
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
          "name": "telephone_communication_aide_training_remarks",
          "label": "Telephone / Communication Aide Training Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "iadl_training_items",
            "includes": "telephone_communication_aide_training"
          }
        },
        {
          "name": "food_preparation_kitchen_simulation_training_remarks",
          "label": "Food Preparation & Kitchen Simulation Training Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "iadl_training_items",
            "includes": "food_preparation_kitchen_simulation_training"
          }
        },
        {
          "name": "home_management_training_remarks",
          "label": "Home Management Training Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "iadl_training_items",
            "includes": "home_management_training"
          }
        },
        {
          "name": "iadl_medication_management_remarks",
          "label": "Medication Management Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "iadl_training_items",
            "includes": "medication_management"
          }
        },
        {
          "name": "iadl_financial_management_remarks",
          "label": "Financial Management Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "iadl_training_items",
            "includes": "financial_management"
          }
        },
        {
          "name": "iadl_driving_rehabilitation_type",
          "label": "Driving Rehabilitation",
          "type": "radio",
          "options": [
            {
              "label": "Off Road",
              "value": "off_road"
            },
            {
              "label": "On Road",
              "value": "on_road"
            }
          ],
          "showIf": {
            "field": "iadl_training_items",
            "includes": "driving_rehabilitation"
          }
        },
        {
          "name": "iadl_driving_rehabilitation_remarks",
          "label": "Driving Rehabilitation Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "iadl_training_items",
            "includes": "driving_rehabilitation"
          }
        },
        {
          "name": "iadl_riding_rehabilitation_remarks",
          "label": "Riding Rehabilitation Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "iadl_training_items",
            "includes": "riding_rehabilitation"
          }
        },
        {
          "type": "subheading",
          "label": "Education"
        },
        {
          "name": "education_training",
          "label": "Education & Training Provided",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Patient Education (Theraband Exercise, Theraputty Exercise)",
              "value": "patient_education"
            },
            {
              "label": "Carer Training",
              "value": "carer_training"
            },
            {
              "label": "Wheelchair Care Education",
              "value": "wheelchair_care_education"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Assistive & Adaptive Devices Prescription Plan"
        },
        {
          "name": "assistive_devices_equipment",
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
              "label": "Standard (DCB) Wheelchair",
              "value": "standard_dcb_wheelchair"
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
              "label": "Recliner Wheelchair",
              "value": "recliner_wheelchair"
            },
            {
              "label": "Bariatric / Heavy Duty Wheelchair",
              "value": "bariatric_heavy_duty_wheelchair"
            },
            {
              "label": "Self-Propel Shower Commode Chair",
              "value": "self_propel_shower_commode_chair"
            },
            {
              "label": "Reclining Commode Wheelchair",
              "value": "reclining_commode_wheelchair"
            },
            {
              "label": "Commode Chair with Caster",
              "value": "commode_chair_with_caster"
            },
            {
              "label": "Commode Chair without Caster",
              "value": "commode_chair_without_caster"
            },
            {
              "label": "Foldable Commode Wheelchair 2 in 1",
              "value": "foldable_commode_wheelchair_2_in_1"
            },
            {
              "label": "Bariatric Commode",
              "value": "bariatric_commode"
            },
            {
              "label": "Geomatt Cushion",
              "value": "geomatt_cushion"
            },
            {
              "label": "Air Cushion",
              "value": "air_cushion"
            },
            {
              "label": "SYSTAM Cushion",
              "value": "systam_cushion"
            },
            {
              "label": "ROHO Quadtro Cushion",
              "value": "roho_quadtro_cushion"
            },
            {
              "label": "Molift Raiser Pro",
              "value": "molift_raiser_pro"
            },
            {
              "label": "Pro Turner",
              "value": "pro_turner"
            },
            {
              "label": "Electric Hoist with Sling",
              "value": "electric_hoist_with_sling"
            },
            {
              "label": "Single Crank Hospital Bed",
              "value": "single_crank_hospital_bed"
            },
            {
              "label": "Double Crank Hospital Bed",
              "value": "double_crank_hospital_bed"
            },
            {
              "label": "3 Crank Hospital Bed",
              "value": "three_crank_hospital_bed"
            },
            {
              "label": "Electrical Hospital Bed",
              "value": "electrical_hospital_bed"
            },
            {
              "label": "Ripple Mattress",
              "value": "ripple_mattress"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "assistive_devices_other",
          "label": "Others - Specify",
          "type": "input",
          "placeholder": "Enter other assistive device or equipment",
          "showIf": {
            "field": "assistive_devices_equipment",
            "includes": "others"
          }
        },
        {
          "name": "splint_usage_and_care_remarks",
          "label": "Splint Usage and Care Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "assistive_adaptive_devices_usage_training_items",
            "includes": "splint_usage_and_care"
          }
        },
        {
          "name": "pressure_garment_usage_and_care_remarks",
          "label": "Pressure Garment Usage and Care Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "assistive_adaptive_devices_usage_training_items",
            "includes": "pressure_garment_usage_and_care"
          }
        },
        {
          "name": "tubigrip_usage_and_care_remarks",
          "label": "Tubigrip Usage and Care Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "assistive_adaptive_devices_usage_training_items",
            "includes": "tubigrip_usage_and_care"
          }
        },
        {
          "name": "adaptive_nail_clipper_remarks",
          "label": "Adaptive Nail Clipper Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "assistive_adaptive_devices_usage_training_items",
            "includes": "adaptive_nail_clipper"
          }
        },
        {
          "name": "wheelchair_assemble_disassemble_remarks",
          "label": "Wheelchair Assemble Disassemble Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "assistive_adaptive_devices_usage_training_items",
            "includes": "wheelchair_assemble_disassemble"
          }
        },
        {
          "name": "self_propel_shower_commode_chair_assemble_disassemble_remarks",
          "label": "Self Propel Shower Commode Chair Assemble Disassemble Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "assistive_adaptive_devices_usage_training_items",
            "includes": "self_propel_shower_commode_chair_assemble_disassemble"
          }
        },
        {
          "name": "air_cushion_usage_and_care_remarks",
          "label": "Air Cushion Usage and Care Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "assistive_adaptive_devices_usage_training_items",
            "includes": "air_cushion_usage_and_care"
          }
        },
        {
          "name": "systam_cushion_usage_and_care_remarks",
          "label": "SYSTAM Cushion Usage and Care Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "assistive_adaptive_devices_usage_training_items",
            "includes": "systam_cushion_usage_and_care"
          }
        },
        {
          "name": "roho_quadtro_usage_and_care_remarks",
          "label": "ROHO Quadtro Usage and Care Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "assistive_adaptive_devices_usage_training_items",
            "includes": "roho_quadtro_usage_and_care"
          }
        },
        {
          "name": "molift_raiser_usage_and_care_remarks",
          "label": "Molift Raiser Usage and Care Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "assistive_adaptive_devices_usage_training_items",
            "includes": "molift_raiser_usage_and_care"
          }
        },
        {
          "name": "pro_turner_usage_and_care_remarks",
          "label": "Pro Turner Usage and Care Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "assistive_adaptive_devices_usage_training_items",
            "includes": "pro_turner_usage_and_care"
          }
        },
        {
          "name": "electric_hoist_with_sling_usage_and_care_remarks",
          "label": "Electric Hoist with Sling Usage and Care Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "assistive_adaptive_devices_usage_training_items",
            "includes": "electric_hoist_with_sling_usage_and_care"
          }
        },
        {
          "name": "assistive_adaptive_devices_usage_training_other",
          "label": "Others",
          "type": "input",
          "placeholder": "Specify other device training",
          "showIf": {
            "field": "assistive_adaptive_devices_usage_training_items",
            "includes": "others"
          }
        },
        {
          "name": "assistive_adaptive_devices_usage_training_other_remarks",
          "label": "Others Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "assistive_adaptive_devices_usage_training_items",
            "includes": "others"
          }
        },
        {
          "name": "education_items",
          "label": "Education",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Patient Education (Theraband Exercise, Theraputty Exercise)",
              "value": "patient_education"
            },
            {
              "label": "Carer Training",
              "value": "carer_training"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ],
          "showIf": {
            "field": "therapeutic_interventions",
            "includes": "education"
          }
        },
        {
          "name": "patient_education_remarks",
          "label": "Patient Education Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "education_items",
            "includes": "patient_education"
          }
        },
        {
          "name": "carer_training_remarks",
          "label": "Carer Training Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "education_items",
            "includes": "carer_training"
          }
        },
        {
          "name": "education_other",
          "label": "Others",
          "type": "input",
          "placeholder": "Specify other education topics",
          "showIf": {
            "field": "education_items",
            "includes": "others"
          }
        },
        {
          "name": "education_other_remarks",
          "label": "Others Remarks",
          "type": "input",
          "rows": 3,
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "education_items",
            "includes": "others"
          }
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
          "name": "neurology_progress_status",
          "label": "Client Demonstrates",
          "type": "radio",
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
          "label": "Plan",
          "name": "plan"
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