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
      "title": "Therapeutic Interventions",
      "fields": [
        {
          "name": "therapeutic_exercises",
          "type": "checkbox-group",
          "options": [
            {
              "label": "ROM exercise",
              "value": "rom_exercise"
            },
            {
              "label": "Strengthening exercise",
              "value": "strengthening_exercise"
            },
            {
              "label": "Gait training",
              "value": "gait_training"
            },
            {
              "label": "Weight-bearing exercise",
              "value": "weight_bearing_exercise"
            },
            {
              "label": "Balance training",
              "value": "balance_training"
            },
            {
              "label": "Mat Activity",
              "value": "mat_activity"
            },
            {
              "label": "Postural control training",
              "value": "postural_control_training"
            },
            {
              "label": "Coordination",
              "value": "coordination"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "ROM Exercise",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "rom_exercise"
          }
        },
        {
          "name": "rom_exercise_type",
          "label": "ROM Exercise Type",
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
            "field": "therapeutic_exercises",
            "includes": "rom_exercise"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "rom_exercise"
          },
          "fields": [
            {
              "name": "rom_exercise_remarks",
              "label": "Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Strengthening Exercise",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "strengthening_exercise"
          }
        },
        {
          "name": "strengthening_exercise_type",
          "label": "Select Area",
          "type": "radio",
          "options": [
            {
              "label": "UL",
              "value": "ul"
            },
            {
              "label": "LL",
              "value": "ll"
            }
          ],
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "strengthening_exercise"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "strengthening_exercise"
          },
          "fields": [
            {
              "name": "strengthening_exercise_remarks",
              "label": "Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Gait Training",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "gait_training"
          }
        },
        {
          "name": "gait_training_type",
          "label": "Gait Training Type",
          "type": "radio",
          "options": [
            {
              "label": "With BWS",
              "value": "with_bws"
            },
            {
              "label": "Without BWS",
              "value": "without_bws"
            },
            {
              "label": "Parallel Bar",
              "value": "parallel_bar"
            }
          ],
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "gait_training"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "gait_training"
          },
          "fields": [
            {
              "name": "gait_training_remarks",
              "label": "Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Weight-bearing Exercise",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "weight_bearing_exercise"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "weight_bearing_exercise"
          },
          "fields": [
            {
              "name": "weight_bearing_exercise_remarks",
              "label": "Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Balance Training",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "balance_training"
          }
        },
        {
          "name": "balance_training_type",
          "label": "Balance Training Type",
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
            "field": "therapeutic_exercises",
            "includes": "balance_training"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "balance_training"
          },
          "fields": [
            {
              "name": "balance_training_remarks",
              "label": "Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Mat Activity",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "mat_activity"
          }
        },
        {
          "name": "mat_activity_remarks",
          "label": "Remarks",
          "type": "input",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "mat_activity"
          }
        },
        {
          "type": "subheading",
          "label": "Postural Control Training",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "postural_control_training"
          }
        },
        {
          "name": "postural_control_training_remarks",
          "label": "Remarks",
          "type": "input",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "postural_control_training"
          }
        },
        {
          "type": "subheading",
          "label": "Coordination",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "coordination"
          }
        },
        {
          "name": "coordination_remarks",
          "label": "Remarks",
          "type": "input",
          "showIf": {
            "field": "therapeutic_exercises",
            "includes": "coordination"
          }
        },
        {
          "type": "subheading",
          "label": "Functional Mobility Training"
        },
        {
          "name": "functional_mobility_training",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Bed Mobility training",
              "value": "bed_mobility_training"
            },
            {
              "label": "Transfer training",
              "value": "transfer_training"
            },
            {
              "label": "Standing to floor training",
              "value": "standing_to_floor_training"
            },
            {
              "label": "Floor to standing training",
              "value": "floor_to_standing_training"
            },
            {
              "label": "Wheelchair Training",
              "value": "wheelchair_training"
            },
            {
              "label": "Walking Aids Training",
              "value": "walking_aids_training"
            }
          ]
        },
        {
          "name": "bed_mobility_training_remarks",
          "label": "Bed Mobility Training Remarks",
          "type": "input",
          "showIf": {
            "field": "functional_mobility_training",
            "includes": "bed_mobility_training"
          }
        },
        {
          "name": "transfer_training_remarks",
          "label": "Transfer Training Remarks",
          "type": "input",
          "showIf": {
            "field": "functional_mobility_training",
            "includes": "transfer_training"
          }
        },
        {
          "name": "standing_to_floor_training_remarks",
          "label": "Standing to Floor Training Remarks",
          "type": "input",
          "showIf": {
            "field": "functional_mobility_training",
            "includes": "standing_to_floor_training"
          }
        },
        {
          "name": "floor_to_standing_training_remarks",
          "label": "Floor to Standing Training Remarks",
          "type": "input",
          "showIf": {
            "field": "functional_mobility_training",
            "includes": "floor_to_standing_training"
          }
        },
        {
          "name": "wheelchair_training_remarks",
          "label": "Wheelchair Training Remarks",
          "type": "input",
          "showIf": {
            "field": "functional_mobility_training",
            "includes": "wheelchair_training"
          }
        },
        {
          "name": "walking_aids_training_remarks",
          "label": "Walking Aids Training Remarks",
          "type": "input",
          "showIf": {
            "field": "functional_mobility_training",
            "includes": "walking_aids_training"
          }
        },
        {
          "type": "subheading",
          "label": "Manual Therapy"
        },
        {
          "name": "manual_therapy",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Bobath/NDT Therapy",
              "value": "bobath_ndt_therapy"
            },
            {
              "label": "Stretching",
              "value": "stretching"
            },
            {
              "label": "Soft tissue manipulation",
              "value": "soft_tissue_manipulation"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Bobath / NDT Therapy",
          "showIf": {
            "field": "manual_therapy",
            "includes": "bobath_ndt_therapy"
          }
        },
        {
          "name": "bobath_ndt_area",
          "label": "Choose Area",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Trunk & Pelvis",
              "value": "trunk_pelvis"
            },
            {
              "label": "Lower Limb",
              "value": "lower_limb"
            },
            {
              "label": "Upper Limb & Hand",
              "value": "upper_limb_hand"
            },
            {
              "label": "Neck",
              "value": "neck"
            }
          ],
          "showIf": {
            "field": "manual_therapy",
            "includes": "bobath_ndt_therapy"
          }
        },
        {
          "name": "bobath_ndt_difficulty_level",
          "label": "Difficulty Level",
          "type": "radio",
          "info": {
            "title": "Difficulty Level Guide",
            "content": [
              "Low — Requires full facilitation (hand-over-hand), Poor selective control, Synergy pattern dominant",
              "Moderate — Partial facilitation required, Emerging selective movement, Able to initiate movement with cues",
              "High — Minimal facilitation / supervision only, Good motor control, Able to perform functional task independently"
            ]
          },
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
          ],
          "showIf": {
            "field": "manual_therapy",
            "includes": "bobath_ndt_therapy"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "manual_therapy",
            "includes": "bobath_ndt_therapy"
          },
          "fields": [
            {
              "name": "bobath_ndt_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "inputType": "number",
              "min": 0
            },
            {
              "name": "bobath_ndt_remarks",
              "label": "Remarks",
              "type": "input",
              "rows": 3
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Stretching",
          "showIf": {
            "field": "manual_therapy",
            "includes": "stretching"
          }
        },
        {
          "name": "stretching_type",
          "label": "Stretching Type",
          "type": "radio",
          "options": [
            {
              "label": "Passive",
              "value": "passive"
            },
            {
              "label": "Active",
              "value": "active"
            }
          ],
          "showIf": {
            "field": "manual_therapy",
            "includes": "stretching"
          }
        },
        {
          "name": "stretching_remarks",
          "label": "Remarks",
          "type": "input",
          "showIf": {
            "field": "manual_therapy",
            "includes": "stretching"
          }
        },
        {
          "type": "subheading",
          "label": "Soft Tissue Manipulation",
          "showIf": {
            "field": "manual_therapy",
            "includes": "soft_tissue_manipulation"
          }
        },
        {
          "name": "soft_tissue_manipulation_remarks",
          "label": "Remarks",
          "type": "input",
          "rows": 3,
          "showIf": {
            "field": "manual_therapy",
            "includes": "soft_tissue_manipulation"
          }
        },
        {
          "type": "subheading",
          "label": "Others",
          "showIf": {
            "field": "manual_therapy",
            "includes": "others"
          }
        },
        {
          "name": "manual_therapy_others",
          "label": "Specify Other Manual Therapy",
          "type": "input",
          "showIf": {
            "field": "manual_therapy",
            "includes": "others"
          }
        },
        {
          "type": "subheading",
          "label": "Functional Exercises (Exercise Modalities)"
        },
        {
          "name": "functional_exercise_modalities",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Cycling",
              "value": "cycling"
            },
            {
              "label": "Sidra LEG",
              "value": "sidra_leg"
            },
            {
              "label": "NMES",
              "value": "nmes"
            },
            {
              "label": "HP Cosmos Treadmill",
              "value": "hp_cosmos_treadmill"
            },
            {
              "label": "Pablo",
              "value": "pablo"
            },
            {
              "label": "Tymo",
              "value": "tymo"
            },
            {
              "label": "Ankle Motus",
              "value": "ankle_motus"
            },
            {
              "label": "Tilt Table",
              "value": "tilt_table"
            },
            {
              "label": "Galileo Vibration Plate",
              "value": "galileo_vibration_plate"
            },
            {
              "label": "Evolv Easystand",
              "value": "evolv_easystand"
            },
            {
              "label": "Lusio Mate",
              "value": "lusio_mate"
            },
            {
              "label": "Vibramoov",
              "value": "vibramoov"
            },
            {
              "label": "Huber 360",
              "value": "huber_360"
            },
            {
              "label": "Tano",
              "value": "tano"
            },
            {
              "label": "Alter G",
              "value": "alter_g"
            },
            {
              "label": "Eulon Ankle",
              "value": "eulon_ankle"
            },
            {
              "label": "Eulon Hip",
              "value": "eulon_hip"
            },
            {
              "label": "FESIA Walk",
              "value": "fesia_walk"
            },
            {
              "label": "FESIA Cycle",
              "value": "fesia_cycle"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Cycling",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "cycling"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "cycling"
          },
          "fields": [
            {
              "name": "cycling_minutes",
              "label": "Cycling Duration (Minutes)",
              "type": "input",
              "inputType": "number",
              "min": 0
            },
            {
              "name": "cycling_remarks",
              "label": "Cycling Remarks",
              "type": "input",
              "rows": 3
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Sidra LEG",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "sidra_leg"
          }
        },
        {
          "name": "sidra_leg_training_type",
          "label": "Sidra LEG Training Type",
          "type": "checkbox-group",
          "options": [
            {
              "label": "CPM Knee",
              "value": "cpm_knee"
            },
            {
              "label": "CPM Ankle",
              "value": "cpm_ankle"
            },
            {
              "label": "CPM Knee with Synced Ankle",
              "value": "cpm_knee_synced_ankle"
            },
            {
              "label": "CPM Knee Progressive",
              "value": "cpm_knee_progressive"
            },
            {
              "label": "CPM Ankle Progressive",
              "value": "cpm_ankle_progressive"
            },
            {
              "label": "CPM Knee with Synced Ankle Progressive",
              "value": "cpm_knee_synced_ankle_progressive"
            },
            {
              "label": "CPM+EMG Knee",
              "value": "cpm_emg_knee"
            },
            {
              "label": "CPM EMG+ Ankle",
              "value": "cpm_emg_ankle"
            },
            {
              "label": "CPM EMG Knee with Synced Ankle",
              "value": "cpm_emg_knee_synced_ankle"
            },
            {
              "label": "CPM+ EMS Knee",
              "value": "cpm_ems_knee"
            },
            {
              "label": "CPM+ EMS Ankle",
              "value": "cpm_ems_ankle"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ],
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "sidra_leg"
          }
        },
        {
          "name": "sidra_leg_other_training",
          "label": "Other Training Type",
          "type": "input",
          "showIf": {
            "field": "sidra_leg_training_type",
            "equals": "others"
          }
        },
        {
          "name": "sidra_leg_time_repetition",
          "label": "Time / Repetition",
          "type": "input",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "sidra_leg"
          }
        },
        {
          "name": "sidra_leg_side",
          "label": "Side",
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Right",
              "value": "right"
            }
          ],
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "sidra_leg"
          }
        },
        {
          "name": "sidra_leg_remarks",
          "label": "Remarks",
          "type": "input",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "sidra_leg"
          }
        },
        {
          "type": "subheading",
          "label": "NMES",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "nmes"
          }
        },
        {
          "name": "nmes_body_regions",
          "label": "Body Regions",
          "type": "input",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "nmes"
          }
        },
        {
          "name": "nmes_side",
          "label": "Side",
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Right",
              "value": "right"
            }
          ],
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "nmes"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "nmes"
          },
          "fields": [
            {
              "name": "nmes_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "inputType": "number",
              "min": 0
            },
            {
              "name": "nmes_frequency",
              "label": "Frequency (Hz)",
              "type": "input",
              "inputType": "number",
              "min": 0
            },
            {
              "name": "nmes_pulse_width",
              "label": "Pulse Width (μs)",
              "type": "input",
              "inputType": "number",
              "min": 0
            },
            {
              "name": "nmes_amplitude",
              "label": "Amplitude (mA)",
              "type": "input",
              "inputType": "number",
              "min": 0
            },
            {
              "name": "nmes_remarks",
              "label": "Remarks",
              "type": "input",
              "rows": 3
            }
          ]
        },
        {
          "type": "subheading",
          "label": "HP Cosmos Treadmill",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "hp_cosmos_treadmill"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "hp_cosmos_treadmill"
          },
          "fields": [
            {
              "name": "hp_cosmos_speed",
              "label": "Speed",
              "type": "input",
              "inputType": "number",
              "min": 0
            },
            {
              "name": "hp_cosmos_elevation",
              "label": "Elevation",
              "type": "input",
              "inputType": "number",
              "min": 0
            },
            {
              "name": "hp_cosmos_distance",
              "label": "Distance",
              "type": "input",
              "inputType": "number",
              "min": 0
            },
            {
              "name": "hp_cosmos_minutes",
              "label": "Minutes",
              "type": "input",
              "inputType": "number",
              "min": 0
            },
            {
              "name": "hp_cosmos_remarks",
              "label": "Remarks",
              "type": "input",
              "rows": 3
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Pablo",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "pablo"
          }
        },
        {
          "name": "pablo_therapy_program",
          "label": "Therapy Program",
          "type": "checkbox-group",
          "options": [
            {
              "label": "1D Accuracy",
              "value": "1d_accuracy"
            },
            {
              "label": "1D Reaction",
              "value": "1d_reaction"
            },
            {
              "label": "2D Motor Function",
              "value": "2d_motor_function"
            },
            {
              "label": "2D Cognition",
              "value": "2d_cognition"
            }
          ],
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "pablo"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "pablo"
          },
          "fields": [
            {
              "name": "pablo_exercise_type",
              "label": "Types of Exercise",
              "type": "input"
            },
            {
              "name": "pablo_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "inputType": "number",
              "min": 0
            },
            {
              "name": "pablo_remarks",
              "label": "Remarks",
              "type": "input",
              "rows": 3
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Tymo",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "tymo"
          }
        },
        {
          "name": "tymo_therapy_program",
          "label": "Therapy Program",
          "type": "checkbox-group",
          "options": [
            {
              "label": "1D Accuracy",
              "value": "1d_accuracy"
            },
            {
              "label": "1D Reaction",
              "value": "1d_reaction"
            },
            {
              "label": "2D Motor Function",
              "value": "2d_motor_function"
            },
            {
              "label": "2D Cognition",
              "value": "2d_cognition"
            }
          ],
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "tymo"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "tymo"
          },
          "fields": [
            {
              "name": "tymo_exercise_type",
              "label": "Types of Exercise",
              "type": "input"
            },
            {
              "name": "tymo_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "inputType": "number",
              "min": 0
            },
            {
              "name": "tymo_remarks",
              "label": "Remarks",
              "type": "input",
              "rows": 3
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Ankle Motus",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "ankle_motus"
          }
        },
        {
          "name": "ankle_motus_training_type",
          "label": "Training Type",
          "type": "radio",
          "options": [
            {
              "label": "Active",
              "value": "active"
            },
            {
              "label": "Passive",
              "value": "passive"
            },
            {
              "label": "Resistance",
              "value": "resistance"
            },
            {
              "label": "Assisted",
              "value": "assisted"
            }
          ],
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "ankle_motus"
          }
        },
        {
          "name": "ankle_motus_duration",
          "label": "Duration",
          "type": "input",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "ankle_motus"
          }
        },
        {
          "type": "subheading",
          "label": "Tilt Table",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "tilt_table"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "tilt_table"
          },
          "fields": [
            {
              "name": "tilt_table_degree",
              "label": "Tilting Degree",
              "type": "input",
              "inputType": "number",
              "min": 0
            },
            {
              "name": "tilt_table_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "inputType": "number",
              "min": 0
            },
            {
              "name": "tilt_table_remarks",
              "label": "Remarks",
              "type": "input",
              "rows": 3
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Galileo Vibration Plate",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "galileo_vibration_plate"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "galileo_vibration_plate"
          },
          "fields": [
            {
              "name": "galileo_exercise_type",
              "label": "Types of Exercise",
              "type": "input"
            },
            {
              "name": "galileo_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "inputType": "number",
              "min": 0
            },
            {
              "name": "galileo_remarks",
              "label": "Remarks",
              "type": "input",
              "rows": 3
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Evolv Easystand",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "evolv_easystand"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "evolv_easystand"
          },
          "fields": [
            {
              "name": "evolv_easystand_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "inputType": "number",
              "min": 0
            },
            {
              "name": "evolv_easystand_activity",
              "label": "Activity",
              "type": "input"
            },
            {
              "name": "evolv_easystand_remarks",
              "label": "Remarks",
              "type": "input",
              "rows": 3
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Lusio Mate",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "lusio_mate"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "lusio_mate"
          },
          "fields": [
            {
              "name": "lusio_mate_exercise_type",
              "label": "Types of Exercise",
              "type": "input"
            },
            {
              "name": "lusio_mate_minutes",
              "label": "Minutes",
              "type": "input",
              "inputType": "number",
              "min": 0
            },
            {
              "name": "lusio_mate_remarks",
              "label": "Remarks",
              "type": "input",
              "rows": 3
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Vibramoov",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "vibramoov"
          }
        },
        {
          "name": "vibramoov_mode",
          "label": "Mode",
          "type": "radio",
          "options": [
            {
              "label": "Functional Proprioceptive Stimulations (FPS)",
              "value": "fps"
            },
            {
              "label": "Focal Vibration (FV)",
              "value": "fv"
            }
          ],
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "vibramoov"
          }
        },
        {
          "name": "vibramoov_body_parts",
          "label": "Body Parts",
          "type": "radio",
          "options": [
            {
              "label": "Legs",
              "value": "legs"
            },
            {
              "label": "Arms",
              "value": "arms"
            }
          ],
          "showIf": {
            "field": "vibramoov_mode",
            "equals": "fps"
          }
        },
        {
          "type": "subheading",
          "label": "FPS Mode - Legs",
          "showIf": {
            "field": "vibramoov_body_parts",
            "equals": "legs"
          }
        },
        {
          "name": "vibramoov_legs_position",
          "label": "Position",
          "type": "radio",
          "options": [
            {
              "label": "Lying Down",
              "value": "lying_down"
            },
            {
              "label": "Verticalized",
              "value": "verticalized"
            },
            {
              "label": "Standing",
              "value": "standing"
            }
          ],
          "showIf": {
            "field": "vibramoov_body_parts",
            "equals": "legs"
          }
        },
        {
          "name": "vibramoov_legs_exercises",
          "label": "Exercises",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Multi Activity",
              "value": "multi_activity"
            },
            {
              "label": "Gait",
              "value": "gait"
            },
            {
              "label": "Flexions",
              "value": "flexions"
            },
            {
              "label": "Stairs",
              "value": "stairs"
            },
            {
              "label": "Postural Control",
              "value": "postural_control"
            }
          ],
          "showIf": {
            "field": "vibramoov_body_parts",
            "equals": "legs"
          }
        },
        {
          "name": "vibramoov_legs_intensity",
          "label": "Intensity",
          "type": "radio",
          "options": [
            {
              "label": "Low",
              "value": "low"
            },
            {
              "label": "Medium",
              "value": "medium"
            },
            {
              "label": "High",
              "value": "high"
            }
          ],
          "showIf": {
            "field": "vibramoov_body_parts",
            "equals": "legs"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "vibramoov_body_parts",
            "equals": "legs"
          },
          "fields": [
            {
              "name": "vibramoov_legs_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "inputType": "number",
              "min": 0
            },
            {
              "name": "vibramoov_legs_remarks",
              "label": "Remarks",
              "type": "input",
              "rows": 3
            }
          ]
        },
        {
          "type": "subheading",
          "label": "FPS Mode - Arms",
          "showIf": {
            "field": "vibramoov_body_parts",
            "equals": "arms"
          }
        },
        {
          "name": "vibramoov_arms_side",
          "label": "Side",
          "type": "radio",
          "options": [
            {
              "label": "Bilateral",
              "value": "bilateral"
            },
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Right",
              "value": "right"
            }
          ],
          "showIf": {
            "field": "vibramoov_body_parts",
            "equals": "arms"
          }
        },
        {
          "name": "vibramoov_arms_exercises",
          "label": "Exercises",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Multi Activity",
              "value": "multi_activity"
            },
            {
              "label": "Reaching-pointing",
              "value": "reaching_pointing"
            },
            {
              "label": "Writing-Drawing",
              "value": "writing_drawing"
            },
            {
              "label": "ADL",
              "value": "adl"
            }
          ],
          "showIf": {
            "field": "vibramoov_body_parts",
            "equals": "arms"
          }
        },
        {
          "name": "vibramoov_arms_intensity",
          "label": "Intensity",
          "type": "radio",
          "options": [
            {
              "label": "Low",
              "value": "low"
            },
            {
              "label": "Medium",
              "value": "medium"
            },
            {
              "label": "High",
              "value": "high"
            }
          ],
          "showIf": {
            "field": "vibramoov_body_parts",
            "equals": "arms"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "vibramoov_body_parts",
            "equals": "arms"
          },
          "fields": [
            {
              "name": "vibramoov_arms_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "inputType": "number",
              "min": 0
            },
            {
              "name": "vibramoov_arms_remarks",
              "label": "Remarks",
              "type": "input",
              "rows": 3
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Focal Vibration (FV)",
          "showIf": {
            "field": "vibramoov_mode",
            "equals": "fv"
          }
        },
        {
          "name": "vibramoov_fv_level",
          "label": "Level",
          "type": "radio",
          "options": [
            {
              "label": "Severe",
              "value": "severe"
            },
            {
              "label": "Moderate",
              "value": "moderate"
            }
          ],
          "showIf": {
            "field": "vibramoov_mode",
            "equals": "fv"
          }
        },
        {
          "name": "vibramoov_fv_intensity",
          "label": "Intensity",
          "type": "radio",
          "options": [
            {
              "label": "Long",
              "value": "long"
            },
            {
              "label": "Short",
              "value": "short"
            }
          ],
          "showIf": {
            "field": "vibramoov_mode",
            "equals": "fv"
          }
        },
        {
          "name": "vibramoov_fv_duration",
          "label": "Duration (Minutes)",
          "type": "number",
          "showIf": {
            "field": "vibramoov_mode",
            "equals": "fv"
          }
        },
        {
          "name": "vibramoov_fv_remarks",
          "label": "Remarks",
          "type": "input",
          "rows": 3,
          "showIf": {
            "field": "vibramoov_mode",
            "equals": "fv"
          }
        },
        {
          "type": "subheading",
          "label": "Huber 360",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "huber_360"
          }
        },
        {
          "name": "huber360_training_type",
          "label": "Training Type",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Flexibility and Mobility",
              "value": "flexibility_mobility"
            },
            {
              "label": "Dynamic Reinforcement",
              "value": "dynamic_reinforcement"
            },
            {
              "label": "Posture and Balance",
              "value": "posture_balance"
            },
            {
              "label": "Resistance",
              "value": "resistance"
            }
          ],
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "huber_360"
          }
        },
        {
          "type": "subheading",
          "label": "Flexibility and Mobility",
          "showIf": {
            "field": "huber360_training_type",
            "includes": "flexibility_mobility"
          }
        },
        {
          "name": "huber360_flexibility_body_parts",
          "label": "Body Parts",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Shoulder (flexibility & mobility)",
              "value": "shoulder"
            },
            {
              "label": "Hip (mobility)",
              "value": "hip"
            },
            {
              "label": "Knee (mobility)",
              "value": "knee"
            },
            {
              "label": "Ankle (mobility)",
              "value": "ankle"
            },
            {
              "label": "Thoracic (flexibility & mobility)",
              "value": "thoracic"
            },
            {
              "label": "Lumbar (flexibility & mobility)",
              "value": "lumbar"
            },
            {
              "label": "Glutes (flexibility)",
              "value": "glutes"
            },
            {
              "label": "Hamstring (flexibility)",
              "value": "hamstring"
            },
            {
              "label": "Calf (flexibility)",
              "value": "calf"
            }
          ],
          "showIf": {
            "field": "huber360_training_type",
            "includes": "flexibility_mobility"
          }
        },
        {
          "name": "huber360_flexibility_side",
          "label": "Side",
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
              "label": "Right + Left",
              "value": "bilateral"
            }
          ],
          "showIf": {
            "field": "huber360_training_type",
            "includes": "flexibility_mobility"
          }
        },
        {
          "name": "huber360_flexibility_level",
          "label": "Level",
          "type": "radio",
          "options": [
            {
              "label": "1",
              "value": "1"
            },
            {
              "label": "2",
              "value": "2"
            },
            {
              "label": "3",
              "value": "3"
            },
            {
              "label": "4",
              "value": "4"
            },
            {
              "label": "5",
              "value": "5"
            }
          ],
          "showIf": {
            "field": "huber360_training_type",
            "includes": "flexibility_mobility"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "huber360_training_type",
            "includes": "flexibility_mobility"
          },
          "fields": [
            {
              "name": "huber360_flexibility_coordination",
              "label": "Coordination (%)",
              "type": "input",
              "inputType": "number",
              "min": 0,
              "max": 100
            },
            {
              "name": "huber360_flexibility_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "inputType": "number",
              "min": 0
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Dynamic Reinforcement",
          "showIf": {
            "field": "huber360_training_type",
            "includes": "dynamic_reinforcement"
          }
        },
        {
          "name": "huber360_dynamic_body_parts",
          "label": "Body Parts",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Biceps brachii",
              "value": "biceps_brachii"
            },
            {
              "label": "Pectoralis major",
              "value": "pectoralis_major"
            },
            {
              "label": "Abdominal external/oblique",
              "value": "abdominal_external_oblique"
            },
            {
              "label": "Rectus abdominis",
              "value": "rectus_abdominis"
            },
            {
              "label": "Abductors",
              "value": "abductors"
            },
            {
              "label": "Quadriceps femoris",
              "value": "quadriceps_femoris"
            },
            {
              "label": "Infraspinatus",
              "value": "infraspinatus"
            },
            {
              "label": "Triceps brachii",
              "value": "triceps_brachii"
            },
            {
              "label": "Latissimus dorsi",
              "value": "latissimus_dorsi"
            },
            {
              "label": "Quadratus Lumborum",
              "value": "quadratus_lumborum"
            },
            {
              "label": "Glutes",
              "value": "glutes"
            },
            {
              "label": "Adductors",
              "value": "adductors"
            },
            {
              "label": "Gastrocnemius",
              "value": "gastrocnemius"
            }
          ],
          "showIf": {
            "field": "huber360_training_type",
            "includes": "dynamic_reinforcement"
          }
        },
        {
          "name": "huber360_dynamic_level",
          "label": "Level",
          "type": "radio",
          "options": [
            {
              "label": "1",
              "value": "1"
            },
            {
              "label": "2",
              "value": "2"
            },
            {
              "label": "3",
              "value": "3"
            },
            {
              "label": "4",
              "value": "4"
            },
            {
              "label": "5",
              "value": "5"
            }
          ],
          "showIf": {
            "field": "huber360_training_type",
            "includes": "dynamic_reinforcement"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "huber360_training_type",
            "includes": "dynamic_reinforcement"
          },
          "fields": [
            {
              "name": "huber360_dynamic_average_strength",
              "label": "Average Strength",
              "type": "input"
            },
            {
              "name": "huber360_dynamic_coordination",
              "label": "Coordination (%)",
              "type": "input",
              "inputType": "number",
              "min": 0,
              "max": 100
            },
            {
              "name": "huber360_dynamic_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "inputType": "number",
              "min": 0
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Posture and Balance",
          "showIf": {
            "field": "huber360_training_type",
            "includes": "posture_balance"
          }
        },
        {
          "name": "huber360_posture_games",
          "label": "Games",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Game 1",
              "value": "game_1"
            },
            {
              "label": "Game 2",
              "value": "game_2"
            },
            {
              "label": "Game 3",
              "value": "game_3"
            },
            {
              "label": "Game 4",
              "value": "game_4"
            },
            {
              "label": "Game 5",
              "value": "game_5"
            },
            {
              "label": "Game 6",
              "value": "game_6"
            }
          ],
          "showIf": {
            "field": "huber360_training_type",
            "includes": "posture_balance"
          }
        },
        {
          "name": "huber360_posture_level",
          "label": "Level",
          "type": "radio",
          "options": [
            {
              "label": "1",
              "value": "1"
            },
            {
              "label": "2",
              "value": "2"
            },
            {
              "label": "3",
              "value": "3"
            },
            {
              "label": "4",
              "value": "4"
            },
            {
              "label": "5",
              "value": "5"
            }
          ],
          "showIf": {
            "field": "huber360_training_type",
            "includes": "posture_balance"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "huber360_training_type",
            "includes": "posture_balance"
          },
          "fields": [
            {
              "name": "huber360_posture_coordination",
              "label": "Coordination (%)",
              "type": "input",
              "inputType": "number",
              "min": 0,
              "max": 100
            },
            {
              "name": "huber360_posture_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "inputType": "number",
              "min": 0
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Resistance",
          "showIf": {
            "field": "huber360_training_type",
            "includes": "resistance"
          }
        },
        {
          "name": "huber360_resistance_games",
          "label": "Games",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Game 1",
              "value": "game_1"
            },
            {
              "label": "Game 2",
              "value": "game_2"
            },
            {
              "label": "Game 3",
              "value": "game_3"
            },
            {
              "label": "Game 4",
              "value": "game_4"
            },
            {
              "label": "Game 5",
              "value": "game_5"
            },
            {
              "label": "Game 6",
              "value": "game_6"
            }
          ],
          "showIf": {
            "field": "huber360_training_type",
            "includes": "resistance"
          }
        },
        {
          "name": "huber360_resistance_level",
          "label": "Level",
          "type": "radio",
          "options": [
            {
              "label": "1",
              "value": "1"
            },
            {
              "label": "2",
              "value": "2"
            },
            {
              "label": "3",
              "value": "3"
            },
            {
              "label": "4",
              "value": "4"
            },
            {
              "label": "5",
              "value": "5"
            }
          ],
          "showIf": {
            "field": "huber360_training_type",
            "includes": "resistance"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "huber360_training_type",
            "includes": "resistance"
          },
          "fields": [
            {
              "name": "huber360_resistance_coordination",
              "label": "Coordination (%)",
              "type": "input",
              "inputType": "number",
              "min": 0,
              "max": 100
            },
            {
              "name": "huber360_resistance_duration",
              "label": "Duration (Minutes)",
              "type": "input",
              "inputType": "number",
              "min": 0
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Tano",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "tano"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "tano"
          },
          "fields": [
            {
              "name": "tano_exercise_type",
              "label": "Types of Exercise",
              "type": "input"
            },
            {
              "name": "tano_minutes",
              "label": "Minutes",
              "type": "input",
              "inputType": "number",
              "min": 0
            },
            {
              "name": "tano_remarks",
              "label": "Remarks",
              "type": "input",
              "rows": 3
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Alter G",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "alter_g"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "alter_g"
          },
          "fields": [
            {
              "name": "alter_g_mode",
              "label": "Mode",
              "type": "input"
            },
            {
              "name": "alter_g_minutes",
              "label": "Minutes",
              "type": "input",
              "inputType": "number",
              "min": 0
            },
            {
              "name": "alter_g_remarks",
              "label": "Remarks",
              "type": "input",
              "rows": 3
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Eulon Ankle",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "eulon_ankle"
          }
        },
        {
          "name": "eulon_ankle_remarks",
          "label": "Remarks",
          "type": "input",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "eulon_ankle"
          }
        },
        {
          "type": "subheading",
          "label": "Eulon Hip",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "eulon_hip"
          }
        },
        {
          "name": "eulon_hip_remarks",
          "label": "Remarks",
          "type": "input",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "eulon_hip"
          }
        },
        {
          "type": "subheading",
          "label": "FESIA Walk",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "fesia_walk"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "fesia_walk"
          },
          "fields": [
            {
              "name": "fesia_walk_duration",
              "label": "Duration (Minutes)",
              "type": "input"
            },
            {
              "name": "fesia_walk_frequency",
              "label": "Frequency (Hz)",
              "type": "input"
            },
            {
              "name": "fesia_walk_pulse_width",
              "label": "Pulse Width (μs)",
              "type": "input"
            },
            {
              "name": "fesia_walk_amplitude",
              "label": "Amplitude (mA)",
              "type": "input"
            },
            {
              "name": "fesia_walk_remarks",
              "label": "Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "FESIA Cycle",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "fesia_cycle"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "fesia_cycle"
          },
          "fields": [
            {
              "name": "fesia_cycle_duration",
              "label": "Duration (Minutes)",
              "type": "input"
            },
            {
              "name": "fesia_cycle_frequency",
              "label": "Frequency (Hz)",
              "type": "input"
            },
            {
              "name": "fesia_cycle_pulse_width",
              "label": "Pulse Width (μs)",
              "type": "input"
            },
            {
              "name": "fesia_cycle_amplitude",
              "label": "Amplitude (mA)",
              "type": "input"
            },
            {
              "name": "fesia_cycle_remarks",
              "label": "Remarks",
              "type": "input"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Others",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "others"
          }
        },
        {
          "name": "functional_exercise_other",
          "label": "Specify Other Exercise Modality",
          "type": "input",
          "showIf": {
            "field": "functional_exercise_modalities",
            "includes": "others"
          }
        },
        {
          "type": "subheading",
          "label": "Pain Management"
        },
        {
          "name": "pain_management",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Cold Therapy",
              "value": "cold_therapy"
            },
            {
              "label": "Heat Therapy",
              "value": "heat_therapy"
            },
            {
              "label": "Laser Therapy",
              "value": "laser_therapy"
            },
            {
              "label": "CryoMag Therapy",
              "value": "cryomag_therapy"
            },
            {
              "label": "Ultrasound Therapy",
              "value": "ultrasound_therapy"
            },
            {
              "label": "Transcutaneous Electrical Nerve Stimulation (TENS)",
              "value": "tens"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "cold_therapy_remarks",
          "label": "Cold Therapy Remarks",
          "type": "input",
          "rows": 3,
          "showIf": {
            "field": "pain_management",
            "includes": "cold_therapy"
          }
        },
        {
          "name": "heat_therapy_remarks",
          "label": "Heat Therapy Remarks",
          "type": "input",
          "rows": 3,
          "showIf": {
            "field": "pain_management",
            "includes": "heat_therapy"
          }
        },
        {
          "name": "laser_therapy_remarks",
          "label": "Laser Therapy Remarks",
          "type": "input",
          "rows": 3,
          "showIf": {
            "field": "pain_management",
            "includes": "laser_therapy"
          }
        },
        {
          "name": "cryomag_therapy_remarks",
          "label": "CryoMag Therapy Remarks",
          "type": "input",
          "rows": 3,
          "showIf": {
            "field": "pain_management",
            "includes": "cryomag_therapy"
          }
        },
        {
          "name": "ultrasound_therapy_remarks",
          "label": "Ultrasound Therapy Remarks",
          "type": "input",
          "rows": 3,
          "showIf": {
            "field": "pain_management",
            "includes": "ultrasound_therapy"
          }
        },
        {
          "name": "tens_therapy_remarks",
          "label": "TENS Remarks",
          "type": "input",
          "rows": 3,
          "showIf": {
            "field": "pain_management",
            "includes": "tens"
          }
        },
        {
          "name": "pain_management_other",
          "label": "Others",
          "type": "input",
          "showIf": {
            "field": "pain_management",
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
          "type": "subheading",
          "label": "Therapeutic Exercises"
        },
        {
          "name": "therapeutic_exercises",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Continue exercise program",
              "value": "continue_exercise_program"
            },
            {
              "label": "Improve strength",
              "value": "improve_strength"
            },
            {
              "label": "Increase ROM",
              "value": "increase_rom"
            },
            {
              "label": "Improve balance",
              "value": "improve_balance"
            },
            {
              "label": "Improve coordination",
              "value": "improve_coordination"
            },
            {
              "label": "Progress gait / ambulation training",
              "value": "progress_gait_training"
            }
          ]
        },
        {
          "name": "therapeutic_exercises_comments",
          "label": "Comments",
          "type": "input"
        },
        {
          "type": "subheading",
          "label": "Functional Mobility Training"
        },
        {
          "name": "functional_mobility_training",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Improve bed mobility",
              "value": "improve_bed_mobility"
            },
            {
              "label": "Improve transfer",
              "value": "improve_transfer"
            },
            {
              "label": "Improve wheelchair skills",
              "value": "improve_wheelchair_skills"
            }
          ]
        },
        {
          "name": "functional_mobility_comments",
          "label": "Comments",
          "type": "input"
        },
        {
          "type": "subheading",
          "label": "Manual Therapy"
        },
        {
          "name": "manual_therapy",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Continue passive stretching",
              "value": "continue_passive_stretching"
            },
            {
              "label": "Continue soft tissue mobilization",
              "value": "continue_soft_tissue_mobilization"
            },
            {
              "label": "Continue Bobath/NDT Therapy",
              "value": "continue_bobath_ndt_therapy"
            }
          ]
        },
        {
          "name": "manual_therapy_comments",
          "label": "Comments",
          "type": "input"
        },
        {
          "type": "subheading",
          "label": "Functional Exercises"
        },
        {
          "name": "functional_exercises",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Continue functional exercise program",
              "value": "continue_functional_exercise_program"
            },
            {
              "label": "Functional exercise progression (review of exercise modalities)",
              "value": "functional_exercise_progression"
            }
          ]
        },
        {
          "name": "functional_exercises_comments",
          "label": "Comments",
          "type": "input"
        },
        {
          "type": "subheading",
          "label": "Pain Management"
        },
        {
          "name": "pain_management_plan",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Continue pain management program",
              "value": "continue_pain_management_program"
            },
            {
              "label": "Refer for further pain management intervention",
              "value": "refer_further_pain_management"
            }
          ]
        },
        {
          "name": "pain_management_comments",
          "label": "Comments",
          "type": "input"
        },
        {
          "type": "subheading",
          "label": "Education"
        },
        {
          "name": "education_plan",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Patient education",
              "value": "patient_education"
            },
            {
              "label": "Carer Training",
              "value": "carer_training"
            },
            {
              "label": "Continue safety supervision",
              "value": "continue_safety_supervision"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "education_others",
          "label": "Others",
          "type": "input",
          "showIf": {
            "field": "education_plan",
            "includes": "others"
          }
        },
        {
          "name": "education_comments",
          "label": "Comments",
          "type": "input"
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