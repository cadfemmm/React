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
                    "type": "subheading",
                    "label": "Conventional Exercise"
                },
                {
                    "name": "conventional_exercise",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Gait Training",
                            "value": "gait_training"
                        },
                        {
                            "label": "Others",
                            "value": "others"
                        }
                    ]
                },
                {
                    "name": "gait_training_mode",
                    "label": "Gait Training Mode",
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
                        "field": "conventional_exercise",
                        "includes": "gait_training"
                    }
                },
                {
                    "name": "gait_training_remarks",
                    "label": "Gait Training Remarks",
                    "type": "input",
                    "rows": 3,
                    "showIf": {
                        "field": "conventional_exercise",
                        "includes": "gait_training"
                    }
                },
                {
                    "name": "conventional_exercise_other",
                    "label": "Others",
                    "type": "input",
                    "showIf": {
                        "field": "conventional_exercise",
                        "includes": "others"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Cybernics Interventions"
                },
                {
                    "name": "cybernics_interventions",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Cyberdyne HAL Lower Limb",
                            "value": "cyberdyne_hal_lower_limb"
                        },
                        {
                            "label": "Cyberdyne HAL SJ",
                            "value": "cyberdyne_hal_sj"
                        },
                        {
                            "label": "Cyberdyne HAL Lumbar",
                            "value": "cyberdyne_hal_lumbar"
                        }
                    ]
                },
                {
                    "name": "hal_lower_limb_training_modality",
                    "label": "Training Modality",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Treadmill",
                            "value": "treadmill"
                        },
                        {
                            "label": "AIO Walker",
                            "value": "aio_walker"
                        },
                        {
                            "label": "Ceiling Hoist",
                            "value": "ceiling_hoist"
                        }
                    ],
                    "showIf": {
                        "field": "cybernics_interventions",
                        "includes": "cyberdyne_hal_lower_limb"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Parameter",
                    "showIf": {
                        "field": "cybernics_interventions",
                        "includes": "cyberdyne_hal_lower_limb"
                    }
                },
                {
                    "name": "hal_lower_limb_side",
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
                        },
                        {
                            "label": "Bilateral",
                            "value": "bilateral"
                        }
                    ],
                    "showIf": {
                        "field": "cybernics_interventions",
                        "includes": "cyberdyne_hal_lower_limb"
                    }
                },
                {
                    "name": "hal_lower_limb_mode",
                    "label": "Mode",
                    "type": "radio",
                    "options": [
                        {
                            "label": "CVC",
                            "value": "cvc"
                        },
                        {
                            "label": "CAC",
                            "value": "cac"
                        },
                        {
                            "label": "CVC + CAC",
                            "value": "cvc_cac"
                        }
                    ],
                    "showIf": {
                        "field": "cybernics_interventions",
                        "includes": "cyberdyne_hal_lower_limb"
                    }
                },
                {
                    "name": "hal_lower_limb_lh_sensitivity",
                    "label": "LH Sensitivity Level",
                    "type": "single-select",
                    "options": [
                        {
                            "label": "A1",
                            "value": "A1"
                        },
                        {
                            "label": "A2",
                            "value": "A2"
                        },
                        {
                            "label": "A5",
                            "value": "A5"
                        },
                        {
                            "label": "A10",
                            "value": "A10"
                        },
                        {
                            "label": "B1",
                            "value": "B1"
                        },
                        {
                            "label": "B2",
                            "value": "B2"
                        },
                        {
                            "label": "B5",
                            "value": "B5"
                        },
                        {
                            "label": "B10",
                            "value": "B10"
                        }
                    ],
                    "showIf": {
                        "field": "cybernics_interventions",
                        "includes": "cyberdyne_hal_lower_limb"
                    }
                },
                {
                    "name": "hal_lower_limb_rh_sensitivity",
                    "label": "RH Sensitivity Level",
                    "type": "single-select",
                    "options": [
                        {
                            "label": "A1",
                            "value": "A1"
                        },
                        {
                            "label": "A2",
                            "value": "A2"
                        },
                        {
                            "label": "A5",
                            "value": "A5"
                        },
                        {
                            "label": "A10",
                            "value": "A10"
                        },
                        {
                            "label": "B1",
                            "value": "B1"
                        },
                        {
                            "label": "B2",
                            "value": "B2"
                        },
                        {
                            "label": "B5",
                            "value": "B5"
                        },
                        {
                            "label": "B10",
                            "value": "B10"
                        }
                    ],
                    "showIf": {
                        "field": "cybernics_interventions",
                        "includes": "cyberdyne_hal_lower_limb"
                    }
                },
                {
                    "name": "hal_lower_limb_lk_sensitivity",
                    "label": "LK Sensitivity Level",
                    "type": "single-select",
                    "options": [
                        {
                            "label": "A1",
                            "value": "A1"
                        },
                        {
                            "label": "A2",
                            "value": "A2"
                        },
                        {
                            "label": "A5",
                            "value": "A5"
                        },
                        {
                            "label": "A10",
                            "value": "A10"
                        },
                        {
                            "label": "B1",
                            "value": "B1"
                        },
                        {
                            "label": "B2",
                            "value": "B2"
                        },
                        {
                            "label": "B5",
                            "value": "B5"
                        },
                        {
                            "label": "B10",
                            "value": "B10"
                        }
                    ],
                    "showIf": {
                        "field": "cybernics_interventions",
                        "includes": "cyberdyne_hal_lower_limb"
                    }
                },
                {
                    "name": "hal_lower_limb_rk_sensitivity",
                    "label": "RK Sensitivity Level",
                    "type": "single-select",
                    "options": [
                        {
                            "label": "A1",
                            "value": "A1"
                        },
                        {
                            "label": "A2",
                            "value": "A2"
                        },
                        {
                            "label": "A5",
                            "value": "A5"
                        },
                        {
                            "label": "A10",
                            "value": "A10"
                        },
                        {
                            "label": "B1",
                            "value": "B1"
                        },
                        {
                            "label": "B2",
                            "value": "B2"
                        },
                        {
                            "label": "B5",
                            "value": "B5"
                        },
                        {
                            "label": "B10",
                            "value": "B10"
                        }
                    ],
                    "showIf": {
                        "field": "cybernics_interventions",
                        "includes": "cyberdyne_hal_lower_limb"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "cybernics_interventions",
                        "includes": "cyberdyne_hal_lower_limb"
                    },
                    "fields": [
                        {
                            "name": "hal_lower_limb_lh_torque",
                            "label": "LH Torque",
                            "type": "input",
                            "placeholder": "Enter LH torque"
                        },
                        {
                            "name": "hal_lower_limb_rh_torque",
                            "label": "RH Torque",
                            "type": "input",
                            "placeholder": "Enter RH torque"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "cybernics_interventions",
                        "includes": "cyberdyne_hal_lower_limb"
                    },
                    "fields": [
                        {
                            "name": "hal_lower_limb_lk_torque",
                            "label": "LK Torque",
                            "type": "input",
                            "placeholder": "Enter LK torque"
                        },
                        {
                            "name": "hal_lower_limb_rk_torque",
                            "label": "RK Torque",
                            "type": "input",
                            "placeholder": "Enter RK torque"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "cybernics_interventions",
                        "includes": "cyberdyne_hal_lower_limb"
                    },
                    "fields": [
                        {
                            "name": "hal_lower_limb_duration",
                            "label": "Duration (Minutes)",
                            "type": "input",
                            "placeholder": "Enter duration"
                        },
                        {
                            "name": "hal_lower_limb_steps",
                            "label": "Steps",
                            "type": "input",
                            "placeholder": "Enter steps"
                        }
                    ]
                },
                {
                    "name": "hal_lower_limb_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Enter remarks",
                    "showIf": {
                        "field": "cybernics_interventions",
                        "includes": "cyberdyne_hal_lower_limb"
                    }
                },
                {
                    "name": "hal_sj_body_parts",
                    "label": "Body Parts",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Elbow",
                            "value": "elbow"
                        },
                        {
                            "label": "Knee",
                            "value": "knee"
                        },
                        {
                            "label": "Wrist",
                            "value": "wrist"
                        },
                        {
                            "label": "Ankle",
                            "value": "ankle"
                        },
                        {
                            "label": "Shoulder",
                            "value": "shoulder"
                        }
                    ],
                    "showIf": {
                        "field": "cybernics_interventions",
                        "includes": "cyberdyne_hal_sj"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Parameters",
                    "showIf": {
                        "field": "cybernics_interventions",
                        "includes": "cyberdyne_hal_sj"
                    }
                },
                {
                    "name": "hal_sj_mode",
                    "label": "Mode",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Standard",
                            "value": "standard"
                        },
                        {
                            "label": "Gentle",
                            "value": "gentle"
                        },
                        {
                            "label": "Auto-Ext",
                            "value": "auto_ext"
                        },
                        {
                            "label": "Auto-Flex",
                            "value": "auto_flex"
                        }
                    ],
                    "showIf": {
                        "field": "cybernics_interventions",
                        "includes": "cyberdyne_hal_sj"
                    }
                },
                {
                    "name": "hal_sj_exercises",
                    "label": "Types of Exercise / Movements",
                    "type": "input",
                    "placeholder": "Enter exercises or movements",
                    "showIf": {
                        "field": "cybernics_interventions",
                        "includes": "cyberdyne_hal_sj"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "cybernics_interventions",
                        "includes": "cyberdyne_hal_sj"
                    },
                    "fields": [
                        {
                            "name": "hal_sj_duration",
                            "label": "Duration (Minutes)",
                            "type": "input",
                            "placeholder": "Enter duration"
                        },
                        {
                            "name": "hal_sj_repetitions",
                            "label": "Repetitions",
                            "type": "input",
                            "placeholder": "Enter repetitions"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "cybernics_interventions",
                        "includes": "cyberdyne_hal_sj"
                    },
                    "fields": [
                        {
                            "name": "hal_sj_sets",
                            "label": "Sets",
                            "type": "input",
                            "placeholder": "Enter sets"
                        },
                        {
                            "name": "hal_sj_remarks",
                            "label": "Remarks",
                            "type": "input",
                            "placeholder": "Enter remarks"
                        }
                    ]
                },
                {
                    "type": "subheading",
                    "label": "Parameter",
                    "showIf": {
                        "field": "cybernics_interventions",
                        "includes": "cyberdyne_hal_lumbar"
                    }
                },
                {
                    "name": "hal_lumbar_mode",
                    "label": "Mode",
                    "type": "radio",
                    "options": [
                        {
                            "label": "CVC",
                            "value": "cvc"
                        },
                        {
                            "label": "CAC",
                            "value": "cac"
                        },
                        {
                            "label": "CVC + CAC",
                            "value": "cvc_cac"
                        }
                    ],
                    "showIf": {
                        "field": "cybernics_interventions",
                        "includes": "cyberdyne_hal_lumbar"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "cybernics_interventions",
                        "includes": "cyberdyne_hal_lumbar"
                    },
                    "fields": [
                        {
                            "name": "hal_lumbar_exercises",
                            "label": "Types of Exercise / Movements",
                            "type": "input",
                            "placeholder": "Enter exercises or movements"
                        },
                        {
                            "name": "hal_lumbar_duration",
                            "label": "Duration (Minutes)",
                            "type": "input",
                            "placeholder": "Enter duration"
                        },
                        {
                            "name": "hal_lumbar_repetitions",
                            "label": "Repetitions",
                            "type": "input",
                            "placeholder": "Enter repetitions"
                        },
                        {
                            "name": "hal_lumbar_sets",
                            "label": "Sets",
                            "type": "input",
                            "placeholder": "Enter sets"
                        },
                        {
                            "name": "hal_lumbar_remarks",
                            "label": "Remarks",
                            "type": "input",
                            "placeholder": "Enter remarks"
                        }
                    ]
                },
                {
                    "type": "subheading",
                    "label": "Neuro-Robotics and Neuromodulation Interventions"
                },
                {
                    "name": "neuro_robotics_neuromodulation_interventions",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Luna EMG",
                            "value": "luna_emg"
                        },
                        {
                            "label": "Stella Bio",
                            "value": "stella_bio"
                        },
                        {
                            "label": "Meissa OT",
                            "value": "meissa_ot"
                        },
                        {
                            "label": "Sidra LEG",
                            "value": "sidra_leg"
                        },
                        {
                            "label": "FESIA Walk",
                            "value": "fesia_walk"
                        },
                        {
                            "label": "FESIA Grasp",
                            "value": "fesia_grasp"
                        },
                        {
                            "label": "FESIA Bike",
                            "value": "fesia_bike"
                        },
                        {
                            "label": "MyndMove",
                            "value": "myndmove"
                        },
                        {
                            "label": "Vibramoov",
                            "value": "vibramoov"
                        },
                        {
                            "label": "ROBERT",
                            "value": "robert"
                        },
                        {
                            "label": "Arm Motus EMU",
                            "value": "arm_motus_emu"
                        },
                        {
                            "label": "Arm Motus M2 Pro",
                            "value": "arm_motus_m2_pro"
                        },
                        {
                            "label": "Exo Motus",
                            "value": "exo_motus"
                        },
                        {
                            "label": "Ankle Motus",
                            "value": "ankle_motus"
                        },
                        {
                            "label": "Pelma Motus",
                            "value": "pelma_motus"
                        },
                        {
                            "label": "Wrist Motus",
                            "value": "wrist_motus"
                        },
                        {
                            "label": "Cycle Motus",
                            "value": "cycle_motus"
                        },
                        {
                            "label": "Tymo",
                            "value": "tymo"
                        },
                        {
                            "label": "Pablo",
                            "value": "pablo"
                        },
                        {
                            "label": "BWS Walker",
                            "value": "bws_walker"
                        },
                        {
                            "label": "Syrebo",
                            "value": "syrebo"
                        },
                        {
                            "label": "LIFESCAPE Medical BCI",
                            "value": "lifescape_medical_bci"
                        },
                        {
                            "label": "RecoveriX Brain Computer Interface (BCI)",
                            "value": "recoverix_bci"
                        },
                        {
                            "label": "Others",
                            "value": "others"
                        }
                    ]
                },
                {
                    "name": "Luna_EMG_subheading",
                    "label": "Luna EMG",
                    "type": "subheading",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "luna_emg"
                    }
                },
                {
                    "name": "neuro_robotics_neuromodulation_others",
                    "label": "Others",
                    "type": "input",
                    "placeholder": "Enter other interventions",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "others"
                    }
                },
                {
                    "name": "luna_emg_region",
                    "label": "Region",
                    "type": "radio",
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
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "luna_emg"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Mode Selection",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "luna_emg"
                    }
                },
                {
                    "name": "luna_emg_mode",
                    "label": "Mode",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Orthopedic",
                            "value": "orthopedic"
                        },
                        {
                            "label": "Neurologic",
                            "value": "neurologic"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "luna_emg"
                    }
                },
                {
                    "name": "luna_emg_orthopedic_programs",
                    "label": "Orthopedic Programs",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "CPM",
                            "value": "cpm"
                        },
                        {
                            "label": "Elastic Resistance",
                            "value": "elastic_resistance"
                        },
                        {
                            "label": "Joint Position Sense - Visible Position",
                            "value": "joint_position_visible"
                        },
                        {
                            "label": "Joint Position Sense - Hidden Position",
                            "value": "joint_position_hidden"
                        },
                        {
                            "label": "Weight Lifting",
                            "value": "weight_lifting"
                        },
                        {
                            "label": "Dynamic Reversal",
                            "value": "dynamic_reversal"
                        },
                        {
                            "label": "Progressive CPM",
                            "value": "progressive_cpm"
                        }
                    ],
                    "showIf": {
                        "field": "luna_emg_mode",
                        "equals": "orthopedic"
                    }
                },
                {
                    "name": "luna_emg_cpm_subheading",
                    "label": "CPM Parameters",
                    "type": "subheading",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "cpm"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "cpm"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_cpm_exs_time",
                            "label": "Exercise Time",
                            "type": "input",
                            "placeholder": "Enter exercise time"
                        },
                        {
                            "name": "luna_emg_cpm_speed",
                            "label": "Speed",
                            "type": "input",
                            "placeholder": "Enter speed"
                        },
                        {
                            "name": "luna_emg_cpm_max_torque",
                            "label": "Max Torque",
                            "type": "input"
                        },
                        {
                            "name": "luna_emg_cpm_remarks",
                            "label": "Remarks",
                            "type": "input",
                            "placeholder": "Enter remarks"
                        }
                    ]
                },
                {
                    "name": "luna_emg_elastic_resistance_subheading",
                    "label": "Elastic Resistance Parameters",
                    "type": "subheading",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "elastic_resistance"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "elastic_resistance"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_elastic_resistance_multiplier",
                            "label": "Multiplier",
                            "type": "input",
                            "placeholder": "Enter multiplier"
                        },
                        {
                            "name": "luna_emg_elastic_resistance_max_torque",
                            "label": "Max Torque",
                            "type": "input",
                            "placeholder": "Enter maximum torque"
                        },
                        {
                            "name": "luna_emg_elastic_resistance_connection_point",
                            "label": "Connection Point",
                            "type": "input",
                            "placeholder": "Enter connection point"
                        },
                        {
                            "name": "luna_emg_elastic_resistance_remarks",
                            "label": "Remarks",
                            "type": "input",
                            "placeholder": "Enter remarks"
                        }
                    ]
                },
                {
                    "name": "luna_emg_joint_position_visible_subheading",
                    "label": "Joint Position Sense - Visible Position Parameters",
                    "type": "subheading",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "joint_position_visible"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "joint_position_visible"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_joint_position_visible_speed",
                            "label": "Speed",
                            "type": "input",
                            "placeholder": "Enter speed"
                        },
                        {
                            "name": "luna_emg_joint_position_visible_insensitivity",
                            "label": "Insensitivity",
                            "type": "input",
                            "placeholder": "Enter insensitivity"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "joint_position_visible"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_joint_position_visible_position_keep_time",
                            "label": "Position Keep Time",
                            "type": "input",
                            "placeholder": "Enter position keep time"
                        },
                        {
                            "name": "luna_emg_joint_position_visible_goal_position_size",
                            "label": "Goal Position Size",
                            "type": "input",
                            "placeholder": "Enter goal position size"
                        }
                    ]
                },
                {
                    "name": "luna_emg_joint_position_visible_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Enter remarks",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "joint_position_visible"
                    }
                },
                {
                    "name": "luna_emg_joint_position_hidden_subheading",
                    "label": "Joint Position Sense - Hidden Position Parameters",
                    "type": "subheading",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "joint_position_hidden"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "joint_position_hidden"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_joint_position_hidden_speed",
                            "label": "Speed",
                            "type": "input",
                            "placeholder": "Enter speed"
                        },
                        {
                            "name": "luna_emg_joint_position_hidden_insensitivity",
                            "label": "Insensitivity",
                            "type": "input",
                            "placeholder": "Enter insensitivity"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "joint_position_hidden"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_joint_position_hidden_position_keep_time",
                            "label": "Position Keep Time",
                            "type": "input",
                            "placeholder": "Enter position keep time"
                        },
                        {
                            "name": "luna_emg_joint_position_hidden_goal_position_size",
                            "label": "Goal Position Size",
                            "type": "input",
                            "placeholder": "Enter goal position size"
                        }
                    ]
                },
                {
                    "name": "luna_emg_joint_position_hidden_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Enter remarks",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "joint_position_hidden"
                    }
                },
                {
                    "name": "luna_emg_weight_lifting_subheading",
                    "label": "Weight Lifting Parameters",
                    "type": "subheading",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "weight_lifting"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "weight_lifting"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_weight_lifting_speed",
                            "label": "Speed",
                            "type": "input",
                            "placeholder": "Enter speed"
                        },
                        {
                            "name": "luna_emg_weight_lifting_insensitivity",
                            "label": "Insensitivity",
                            "type": "input",
                            "placeholder": "Enter insensitivity"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "weight_lifting"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_weight_lifting_max_torque",
                            "label": "Max Torque",
                            "type": "input",
                            "placeholder": "Enter maximum torque"
                        },
                        {
                            "name": "luna_emg_weight_lifting_centre_of_gravity",
                            "label": "Centre of Gravity",
                            "type": "input",
                            "placeholder": "Enter centre of gravity"
                        }
                    ]
                },
                {
                    "name": "luna_emg_weight_lifting_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Enter remarks",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "weight_lifting"
                    }
                },
                {
                    "name": "luna_emg_dynamic_reversal_subheading",
                    "label": "Dynamic Reversal Parameters",
                    "type": "subheading",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "dynamic_reversal"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "dynamic_reversal"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_dynamic_reversal_speed",
                            "label": "Speed",
                            "type": "input",
                            "placeholder": "Enter speed"
                        },
                        {
                            "name": "luna_emg_dynamic_reversal_exs_time",
                            "label": "Exercise Time",
                            "type": "input",
                            "placeholder": "Enter exercise time"
                        }
                    ]
                },
                {
                    "name": "luna_emg_dynamic_reversal_insensitivity",
                    "label": "Insensitivity",
                    "type": "input",
                    "placeholder": "Enter insensitivity",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "dynamic_reversal"
                    }
                },
                {
                    "name": "luna_emg_dynamic_reversal_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Enter remarks",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "dynamic_reversal"
                    }
                },
                {
                    "name": "luna_emg_progressive_cpm_subheading",
                    "label": "Progressive CPM Parameters",
                    "type": "subheading",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "progressive_cpm"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "progressive_cpm"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_progressive_cpm_speed",
                            "label": "Speed",
                            "type": "input",
                            "placeholder": "Enter speed"
                        },
                        {
                            "name": "luna_emg_progressive_cpm_max_torque",
                            "label": "Max Torque",
                            "type": "input",
                            "placeholder": "Enter maximum torque"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "progressive_cpm"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_progressive_cpm_angle_increment",
                            "label": "Angle Increment",
                            "type": "input",
                            "placeholder": "Enter angle increment"
                        },
                        {
                            "name": "luna_emg_progressive_cpm_increment_every_reps",
                            "label": "Increment Every (Reps)",
                            "type": "input",
                            "placeholder": "Enter repetitions"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "progressive_cpm"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_progressive_cpm_pause_min_rom",
                            "label": "Pause in Minimum ROM (sec)",
                            "type": "input",
                            "placeholder": "Enter pause duration"
                        },
                        {
                            "name": "luna_emg_progressive_cpm_pause_max_rom",
                            "label": "Pause in Maximum ROM (sec)",
                            "type": "input",
                            "placeholder": "Enter pause duration"
                        }
                    ]
                },
                {
                    "name": "luna_emg_progressive_cpm_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Enter remarks",
                    "showIf": {
                        "field": "luna_emg_orthopedic_programs",
                        "includes": "progressive_cpm"
                    }
                },
                {
                    "name": "luna_emg_neurologic_programs",
                    "label": "Neurologic Programs",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Advanced EMG Biofeedback",
                            "value": "advanced_emg_biofeedback"
                        },
                        {
                            "label": "EMG Biofeedback",
                            "value": "emg_biofeedback"
                        },
                        {
                            "label": "Reactive EMG T&H",
                            "value": "reactive_emg_th"
                        },
                        {
                            "label": "Reactive EMG T&R",
                            "value": "reactive_emg_tr"
                        }
                    ],
                    "showIf": {
                        "field": "luna_emg_mode",
                        "equals": "neurologic"
                    }
                },
                {
                    "name": "luna_emg_advanced_emg_biofeedback_subheading",
                    "label": "Advanced EMG Biofeedback Parameters",
                    "type": "subheading",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "advanced_emg_biofeedback"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "advanced_emg_biofeedback"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_advanced_emg_biofeedback_duration",
                            "label": "Duration",
                            "type": "input",
                            "placeholder": "Enter duration"
                        },
                        {
                            "name": "luna_emg_advanced_emg_biofeedback_rom",
                            "label": "ROM",
                            "type": "input",
                            "placeholder": "Enter ROM"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "advanced_emg_biofeedback"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_advanced_emg_biofeedback_average_torque",
                            "label": "Average Torque",
                            "type": "input",
                            "placeholder": "Enter average torque"
                        },
                        {
                            "name": "luna_emg_advanced_emg_biofeedback_peak_torque",
                            "label": "Peak Torque",
                            "type": "input",
                            "placeholder": "Enter peak torque"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "advanced_emg_biofeedback"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_advanced_emg_biofeedback_speed",
                            "label": "Speed",
                            "type": "input",
                            "placeholder": "Enter speed"
                        },
                        {
                            "name": "luna_emg_advanced_emg_biofeedback_repetition",
                            "label": "Repetition",
                            "type": "input",
                            "placeholder": "Enter repetitions"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "advanced_emg_biofeedback"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_advanced_emg_biofeedback_minimum_uv",
                            "label": "Minimum μV",
                            "type": "input",
                            "placeholder": "Enter minimum μV"
                        },
                        {
                            "name": "luna_emg_advanced_emg_biofeedback_maximum_uv",
                            "label": "Maximum μV",
                            "type": "input",
                            "placeholder": "Enter maximum μV"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "advanced_emg_biofeedback"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_advanced_emg_biofeedback_average_uv",
                            "label": "Average μV",
                            "type": "input",
                            "placeholder": "Enter average μV"
                        },
                        {
                            "name": "luna_emg_advanced_emg_biofeedback_muscle_tone",
                            "label": "Muscle Tone",
                            "type": "input",
                            "placeholder": "Enter muscle tone"
                        }
                    ]
                },
                {
                    "name": "luna_emg_advanced_emg_biofeedback_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Enter remarks",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "advanced_emg_biofeedback"
                    }
                },
                {
                    "name": "luna_emg_emg_biofeedback_subheading",
                    "label": "EMG Biofeedback Parameters",
                    "type": "subheading",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "emg_biofeedback"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "emg_biofeedback"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_emg_biofeedback_duration",
                            "label": "Duration",
                            "type": "input",
                            "placeholder": "Enter duration"
                        },
                        {
                            "name": "luna_emg_emg_biofeedback_rom",
                            "label": "ROM",
                            "type": "input",
                            "placeholder": "Enter ROM"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "emg_biofeedback"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_emg_biofeedback_average_torque",
                            "label": "Average Torque",
                            "type": "input",
                            "placeholder": "Enter average torque"
                        },
                        {
                            "name": "luna_emg_emg_biofeedback_peak_torque",
                            "label": "Peak Torque",
                            "type": "input",
                            "placeholder": "Enter peak torque"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "emg_biofeedback"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_emg_biofeedback_speed",
                            "label": "Speed",
                            "type": "input",
                            "placeholder": "Enter speed"
                        },
                        {
                            "name": "luna_emg_emg_biofeedback_repetition",
                            "label": "Repetition",
                            "type": "input",
                            "placeholder": "Enter repetitions"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "emg_biofeedback"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_emg_biofeedback_minimum_uv",
                            "label": "Minimum μV",
                            "type": "input",
                            "placeholder": "Enter minimum μV"
                        },
                        {
                            "name": "luna_emg_emg_biofeedback_maximum_uv",
                            "label": "Maximum μV",
                            "type": "input",
                            "placeholder": "Enter maximum μV"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "emg_biofeedback"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_emg_biofeedback_average_uv",
                            "label": "Average μV",
                            "type": "input",
                            "placeholder": "Enter average μV"
                        },
                        {
                            "name": "luna_emg_emg_biofeedback_muscle_tone",
                            "label": "Muscle Tone",
                            "type": "input",
                            "placeholder": "Enter muscle tone"
                        }
                    ]
                },
                {
                    "name": "luna_emg_emg_biofeedback_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Enter remarks",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "emg_biofeedback"
                    }
                },
                {
                    "name": "luna_emg_reactive_emg_th_subheading",
                    "label": "Reactive EMG T&H Parameters",
                    "type": "subheading",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "reactive_emg_th"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "reactive_emg_th"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_reactive_emg_th_duration",
                            "label": "Duration",
                            "type": "input",
                            "placeholder": "Enter duration"
                        },
                        {
                            "name": "luna_emg_reactive_emg_th_rom",
                            "label": "ROM",
                            "type": "input",
                            "placeholder": "Enter ROM"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "reactive_emg_th"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_reactive_emg_th_average_torque",
                            "label": "Average Torque",
                            "type": "input",
                            "placeholder": "Enter average torque"
                        },
                        {
                            "name": "luna_emg_reactive_emg_th_peak_torque",
                            "label": "Peak Torque",
                            "type": "input",
                            "placeholder": "Enter peak torque"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "reactive_emg_th"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_reactive_emg_th_speed",
                            "label": "Speed",
                            "type": "input",
                            "placeholder": "Enter speed"
                        },
                        {
                            "name": "luna_emg_reactive_emg_th_repetition",
                            "label": "Repetition",
                            "type": "input",
                            "placeholder": "Enter repetitions"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "reactive_emg_th"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_reactive_emg_th_minimum_uv",
                            "label": "Minimum μV",
                            "type": "input",
                            "placeholder": "Enter minimum μV"
                        },
                        {
                            "name": "luna_emg_reactive_emg_th_maximum_uv",
                            "label": "Maximum μV",
                            "type": "input",
                            "placeholder": "Enter maximum μV"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "reactive_emg_th"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_reactive_emg_th_average_uv",
                            "label": "Average μV",
                            "type": "input",
                            "placeholder": "Enter average μV"
                        },
                        {
                            "name": "luna_emg_reactive_emg_th_muscle_tone",
                            "label": "Muscle Tone",
                            "type": "input",
                            "placeholder": "Enter muscle tone"
                        }
                    ]
                },
                {
                    "name": "luna_emg_reactive_emg_th_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Enter remarks",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "reactive_emg_th"
                    }
                },
                {
                    "name": "luna_emg_reactive_emg_tr_subheading",
                    "label": "Reactive EMG T&R Parameters",
                    "type": "subheading",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "reactive_emg_tr"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "reactive_emg_tr"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_reactive_emg_tr_duration",
                            "label": "Duration",
                            "type": "input",
                            "placeholder": "Enter duration"
                        },
                        {
                            "name": "luna_emg_reactive_emg_tr_rom",
                            "label": "ROM",
                            "type": "input",
                            "placeholder": "Enter ROM"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "reactive_emg_tr"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_reactive_emg_tr_average_torque",
                            "label": "Average Torque",
                            "type": "input",
                            "placeholder": "Enter average torque"
                        },
                        {
                            "name": "luna_emg_reactive_emg_tr_peak_torque",
                            "label": "Peak Torque",
                            "type": "input",
                            "placeholder": "Enter peak torque"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "reactive_emg_tr"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_reactive_emg_tr_speed",
                            "label": "Speed",
                            "type": "input",
                            "placeholder": "Enter speed"
                        },
                        {
                            "name": "luna_emg_reactive_emg_tr_repetition",
                            "label": "Repetition",
                            "type": "input",
                            "placeholder": "Enter repetitions"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "reactive_emg_tr"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_reactive_emg_tr_minimum_uv",
                            "label": "Minimum μV",
                            "type": "input",
                            "placeholder": "Enter minimum μV"
                        },
                        {
                            "name": "luna_emg_reactive_emg_tr_maximum_uv",
                            "label": "Maximum μV",
                            "type": "input",
                            "placeholder": "Enter maximum μV"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "reactive_emg_tr"
                    },
                    "fields": [
                        {
                            "name": "luna_emg_reactive_emg_tr_average_uv",
                            "label": "Average μV",
                            "type": "input",
                            "placeholder": "Enter average μV"
                        },
                        {
                            "name": "luna_emg_reactive_emg_tr_muscle_tone",
                            "label": "Muscle Tone",
                            "type": "input",
                            "placeholder": "Enter muscle tone"
                        }
                    ]
                },
                {
                    "name": "luna_emg_reactive_emg_tr_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Enter remarks",
                    "showIf": {
                        "field": "luna_emg_neurologic_programs",
                        "includes": "reactive_emg_tr"
                    }
                },
                {
                    "name": "stella_bio_subheading",
                    "label": "Stella Bio",
                    "type": "subheading",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "stella_bio"
                    }
                },
                {
                    "name": "stella_bio_therapy_condition",
                    "label": "Therapy Condition Selection",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Neuro",
                            "value": "neuro"
                        },
                        {
                            "label": "Ortho",
                            "value": "ortho"
                        },
                        {
                            "label": "Pain",
                            "value": "pain"
                        },
                        {
                            "label": "Pelvic",
                            "value": "pelvic"
                        },
                        {
                            "label": "Sport",
                            "value": "sport"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "stella_bio"
                    }
                },
                {
                    "name": "stella_bio_neuro_mode_heading",
                    "label": "Therapy Mode Selection",
                    "type": "subheading",
                    "showIf": {
                        "field": "stella_bio_therapy_condition",
                        "equals": "neuro"
                    }
                },
                {
                    "name": "stella_bio_neuro_therapy_mode",
                    "label": "Therapy Mode",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "EMS",
                            "value": "ems"
                        },
                        {
                            "label": "EMS + EMG",
                            "value": "ems_emg"
                        },
                        {
                            "label": "EMG",
                            "value": "emg"
                        },
                        {
                            "label": "EMG Games",
                            "value": "emg_games"
                        }
                    ],
                    "showIf": {
                        "field": "stella_bio_therapy_condition",
                        "equals": "neuro"
                    }
                },
                {
                    "name": "stella_bio_neuro_ems_exercise_mode",
                    "label": "EMS Exercise Modes",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Mild Atrophy",
                            "value": "mild_atrophy"
                        },
                        {
                            "label": "Severe Atrophy",
                            "value": "severe_atrophy"
                        },
                        {
                            "label": "Muscle Spasm Relaxation",
                            "value": "muscle_spasm_relaxation"
                        },
                        {
                            "label": "Grasp and Release",
                            "value": "grasp_and_release"
                        },
                        {
                            "label": "Open & Close",
                            "value": "open_close"
                        },
                        {
                            "label": "Arm Extension / Support",
                            "value": "arm_extension_support"
                        },
                        {
                            "label": "Hand to Mouth",
                            "value": "hand_to_mouth"
                        },
                        {
                            "label": "EMS User Program",
                            "value": "ems_user_program"
                        }
                    ],
                    "showIf": {
                        "field": "stella_bio_neuro_therapy_mode",
                        "includes": "ems"
                    }
                },
                {
                    "name": "stella_bio_neuro_ems_emg_exercise_mode",
                    "label": "EMS + EMG Exercise Modes",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Grasp and Release (EMG Triggered)",
                            "value": "grasp_and_release_emg_triggered"
                        },
                        {
                            "label": "Open & Close (EMG Triggered)",
                            "value": "open_close_emg_triggered"
                        },
                        {
                            "label": "Arm Extension / Support (EMG Triggered)",
                            "value": "arm_extension_support_emg_triggered"
                        },
                        {
                            "label": "Hand to Mouth (EMG Triggered)",
                            "value": "hand_to_mouth_emg_triggered"
                        },
                        {
                            "label": "EMG Triggered (1 Channel)",
                            "value": "emg_triggered_1_channel"
                        }
                    ],
                    "showIf": {
                        "field": "stella_bio_neuro_therapy_mode",
                        "includes": "ems_emg"
                    }
                },
                {
                    "name": "stella_bio_neuro_emg_exercise_mode",
                    "label": "EMG Exercise Modes",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "5s Work – 5s Rest",
                            "value": "5s_work_5s_rest"
                        },
                        {
                            "label": "10s Work – 10s Rest",
                            "value": "10s_work_10s_rest"
                        },
                        {
                            "label": "Quick Flicks",
                            "value": "quick_flicks"
                        },
                        {
                            "label": "EMG Endurance Training",
                            "value": "emg_endurance_training"
                        },
                        {
                            "label": "EMG Biofeedback",
                            "value": "emg_biofeedback"
                        },
                        {
                            "label": "EMG View",
                            "value": "emg_view"
                        },
                        {
                            "label": "EMG View with MVC",
                            "value": "emg_view_with_mvc"
                        },
                        {
                            "label": "Relaxation Analysis",
                            "value": "relaxation_analysis"
                        }
                    ],
                    "showIf": {
                        "field": "stella_bio_neuro_therapy_mode",
                        "includes": "emg"
                    }
                },
                {
                    "name": "stella_bio_neuro_emg_games_exercise_mode",
                    "label": "EMG Games Exercise Modes",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Cosmic Mission",
                            "value": "cosmic_mission"
                        }
                    ],
                    "showIf": {
                        "field": "stella_bio_neuro_therapy_mode",
                        "includes": "emg_games"
                    }
                },
                {
                    "name": "stella_bio_ortho_mode_heading",
                    "label": "Therapy Mode Selection",
                    "type": "subheading",
                    "showIf": {
                        "field": "stella_bio_therapy_condition",
                        "equals": "ortho"
                    }
                },
                {
                    "name": "stella_bio_ortho_therapy_mode",
                    "label": "Therapy Mode",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "EMS",
                            "value": "ems"
                        },
                        {
                            "label": "EMG",
                            "value": "emg"
                        },
                        {
                            "label": "EMG Games",
                            "value": "emg_games"
                        }
                    ],
                    "showIf": {
                        "field": "stella_bio_therapy_condition",
                        "equals": "ortho"
                    }
                },
                {
                    "name": "stella_bio_ortho_ems_exercise_mode",
                    "label": "EMS Exercise Modes",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Muscle Atrophy",
                            "value": "muscle_atrophy"
                        },
                        {
                            "label": "EMG User Program",
                            "value": "emg_user_program"
                        },
                        {
                            "label": "Circulation",
                            "value": "circulation"
                        }
                    ],
                    "showIf": {
                        "field": "stella_bio_ortho_therapy_mode",
                        "includes": "ems"
                    }
                },
                {
                    "name": "stella_bio_ortho_emg_exercise_mode",
                    "label": "EMG Exercise Modes",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "5s Work – 5s Rest",
                            "value": "5s_work_5s_rest"
                        },
                        {
                            "label": "10s Work – 10s Rest",
                            "value": "10s_work_10s_rest"
                        },
                        {
                            "label": "Quick Flicks",
                            "value": "quick_flicks"
                        },
                        {
                            "label": "EMG Endurance Training",
                            "value": "emg_endurance_training"
                        },
                        {
                            "label": "EMG Biofeedback",
                            "value": "emg_biofeedback"
                        },
                        {
                            "label": "EMG View",
                            "value": "emg_view"
                        },
                        {
                            "label": "EMG View with MVC",
                            "value": "emg_view_with_mvc"
                        },
                        {
                            "label": "Relaxation Analysis",
                            "value": "relaxation_analysis"
                        },
                        {
                            "label": "Low Back Pain Test",
                            "value": "low_back_pain_test"
                        },
                        {
                            "label": "Sorensen Test",
                            "value": "sorensen_test"
                        }
                    ],
                    "showIf": {
                        "field": "stella_bio_ortho_therapy_mode",
                        "includes": "emg"
                    }
                },
                {
                    "name": "stella_bio_ortho_emg_games_exercise_mode",
                    "label": "EMG Games Exercise Modes",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Cosmic Mission",
                            "value": "cosmic_mission"
                        }
                    ],
                    "showIf": {
                        "field": "stella_bio_ortho_therapy_mode",
                        "includes": "emg_games"
                    }
                },
                {
                    "name": "stella_bio_pain_therapy_mode",
                    "label": "Therapy Mode",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "TENS",
                            "value": "tens"
                        }
                    ],
                    "showIf": {
                        "field": "stella_bio_therapy_condition",
                        "equals": "pain"
                    }
                },
                {
                    "name": "stella_bio_pain_tens_exercise_modes",
                    "label": "Exercise Modes",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "TENS Conventional",
                            "value": "tens_conventional"
                        },
                        {
                            "label": "TENS Frequency Modulated",
                            "value": "tens_frequency_modulated"
                        },
                        {
                            "label": "TENS Acupuncture",
                            "value": "tens_acupuncture"
                        },
                        {
                            "label": "TENS Burst",
                            "value": "tens_burst"
                        },
                        {
                            "label": "TENS User Program",
                            "value": "tens_user_program"
                        }
                    ],
                    "showIf": {
                        "field": "stella_bio_pain_therapy_mode",
                        "includes": "tens"
                    }
                },
                {
                    "name": "stella_bio_pelvic_therapy_mode",
                    "label": "Therapy Mode",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "EMS",
                            "value": "ems"
                        },
                        {
                            "label": "EMG Triggered Electrical Stimulation",
                            "value": "emg_triggered_electrical_stimulation"
                        },
                        {
                            "label": "EMG",
                            "value": "emg"
                        },
                        {
                            "label": "EMG Games",
                            "value": "emg_games"
                        }
                    ],
                    "showIf": {
                        "field": "stella_bio_therapy_condition",
                        "equals": "pelvic"
                    }
                },
                {
                    "name": "stella_bio_pelvic_ems_exercise_modes",
                    "label": "Exercise Modes",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Fecal Incontinence",
                            "value": "fecal_incontinence"
                        },
                        {
                            "label": "Incontinence Mixed",
                            "value": "incontinence_mixed"
                        },
                        {
                            "label": "Incontinence Urge",
                            "value": "incontinence_urge"
                        },
                        {
                            "label": "Incontinence Stress",
                            "value": "incontinence_stress"
                        },
                        {
                            "label": "Relaxation",
                            "value": "relaxation"
                        },
                        {
                            "label": "Relaxation Plus",
                            "value": "relaxation_plus"
                        },
                        {
                            "label": "EMS Pelvic User Program",
                            "value": "ems_pelvic_user_program"
                        }
                    ],
                    "showIf": {
                        "field": "stella_bio_pelvic_therapy_mode",
                        "includes": "ems"
                    }
                },
                {
                    "name": "stella_bio_pelvic_emg_triggered_exercise_modes",
                    "label": "Exercise Modes",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Fecal Incontinence (EMG Triggered)",
                            "value": "fecal_incontinence_emg_triggered"
                        },
                        {
                            "label": "Incontinence (EMG Triggered)",
                            "value": "incontinence_emg_triggered"
                        }
                    ],
                    "showIf": {
                        "field": "stella_bio_pelvic_therapy_mode",
                        "includes": "emg_triggered_electrical_stimulation"
                    }
                },
                {
                    "name": "stella_bio_pelvic_emg_exercise_modes",
                    "label": "Exercise Modes",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "5s Work – 5s Rest",
                            "value": "5s_work_5s_rest"
                        },
                        {
                            "label": "10s Work – 10s Rest",
                            "value": "10s_work_10s_rest"
                        },
                        {
                            "label": "Quick Flicks",
                            "value": "quick_flicks"
                        },
                        {
                            "label": "EMG Endurance Training",
                            "value": "emg_endurance_training"
                        },
                        {
                            "label": "EMG Biofeedback",
                            "value": "emg_biofeedback"
                        },
                        {
                            "label": "EMG View",
                            "value": "emg_view"
                        },
                        {
                            "label": "EMG View with MVC",
                            "value": "emg_view_with_mvc"
                        },
                        {
                            "label": "Relaxation Analysis",
                            "value": "relaxation_analysis"
                        },
                        {
                            "label": "Glazer Protocol",
                            "value": "glazer_protocol"
                        }
                    ],
                    "showIf": {
                        "field": "stella_bio_pelvic_therapy_mode",
                        "includes": "emg"
                    }
                },
                {
                    "name": "stella_bio_pelvic_emg_games_exercise_modes",
                    "label": "Exercise Modes",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Cosmic Mission",
                            "value": "cosmic_mission"
                        }
                    ],
                    "showIf": {
                        "field": "stella_bio_pelvic_therapy_mode",
                        "includes": "emg_games"
                    }
                },
                {
                    "name": "stella_bio_sport_therapy_mode",
                    "label": "Therapy Mode",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "EMS",
                            "value": "ems"
                        },
                        {
                            "label": "EMG",
                            "value": "emg"
                        },
                        {
                            "label": "EMG Games",
                            "value": "emg_games"
                        }
                    ],
                    "showIf": {
                        "field": "stella_bio_therapy_condition",
                        "equals": "sport"
                    }
                },
                {
                    "name": "stella_bio_sport_ems_exercise_modes",
                    "label": "Exercise Modes",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Agonist / Antagonist",
                            "value": "agonist_antagonist"
                        },
                        {
                            "label": "Power Training",
                            "value": "power_training"
                        },
                        {
                            "label": "Muscle Strengthening",
                            "value": "muscle_strengthening"
                        },
                        {
                            "label": "Exercise Prep",
                            "value": "exercise_prep"
                        },
                        {
                            "label": "Active Recovery",
                            "value": "active_recovery"
                        },
                        {
                            "label": "Massage",
                            "value": "massage"
                        },
                        {
                            "label": "Endurance Training",
                            "value": "endurance_training"
                        }
                    ],
                    "showIf": {
                        "field": "stella_bio_sport_therapy_mode",
                        "includes": "ems"
                    }
                },
                {
                    "name": "stella_bio_sport_emg_exercise_modes",
                    "label": "Exercise Modes",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "5s Work – 5s Rest",
                            "value": "5s_work_5s_rest"
                        },
                        {
                            "label": "10s Work – 10s Rest",
                            "value": "10s_work_10s_rest"
                        },
                        {
                            "label": "Quick Flicks",
                            "value": "quick_flicks"
                        },
                        {
                            "label": "EMG Endurance Training",
                            "value": "emg_endurance_training"
                        },
                        {
                            "label": "EMG Biofeedback",
                            "value": "emg_biofeedback"
                        },
                        {
                            "label": "EMG View",
                            "value": "emg_view"
                        },
                        {
                            "label": "EMG View with MVC",
                            "value": "emg_view_with_mvc"
                        },
                        {
                            "label": "Relaxation Analysis",
                            "value": "relaxation_analysis"
                        }
                    ],
                    "showIf": {
                        "field": "stella_bio_sport_therapy_mode",
                        "includes": "emg"
                    }
                },
                {
                    "name": "stella_bio_sport_emg_games_exercise_modes",
                    "label": "Exercise Modes",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Cosmic Mission",
                            "value": "cosmic_mission"
                        }
                    ],
                    "showIf": {
                        "field": "stella_bio_sport_therapy_mode",
                        "includes": "emg_games"
                    }
                },
                {
                    "name": "meissa_ot_subheading",
                    "label": "Meissa OT",
                    "type": "subheading",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "meissa_ot"
                    }
                },
                {
                    "name": "meissa_ot_training_type",
                    "label": "Training Type",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "CPM",
                            "value": "cpm"
                        },
                        {
                            "label": "CPM + EMS",
                            "value": "cpm_ems"
                        },
                        {
                            "label": "CPM + EMG",
                            "value": "cpm_emg"
                        },
                        {
                            "label": "CPM + EMG + EMS",
                            "value": "cpm_emg_ems"
                        },
                        {
                            "label": "CAM Isokinetic",
                            "value": "cam_isokinetic"
                        },
                        {
                            "label": "CAM Turn Key",
                            "value": "cam_turn_key"
                        },
                        {
                            "label": "CAM Torque",
                            "value": "cam_torque"
                        },
                        {
                            "label": "CPM Force",
                            "value": "cpm_force"
                        },
                        {
                            "label": "Cosmic Mission",
                            "value": "cosmic_mission"
                        },
                        {
                            "label": "Dream Drive",
                            "value": "dream_drive"
                        },
                        {
                            "label": "Rope-Nope",
                            "value": "rope_nope"
                        },
                        {
                            "label": "Others",
                            "value": "others"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "meissa_ot"
                    }
                },
                {
                    "name": "meissa_ot_other_training_type",
                    "label": "Other Training Type",
                    "type": "input",
                    "placeholder": "Specify other training type",
                    "showIf": {
                        "field": "meissa_ot_training_type",
                        "includes": "others"
                    }
                },
                {
                    "name": "meissa_ot_parameters_heading",
                    "label": "Parameters",
                    "type": "subheading",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "meissa_ot"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "meissa_ot"
                    },
                    "fields": [
                        {
                            "name": "meissa_ot_time",
                            "label": "Time",
                            "type": "input",
                            "placeholder": "Enter time"
                        },
                        {
                            "name": "meissa_ot_repetitions",
                            "label": "Repetitions",
                            "type": "input",
                            "placeholder": "Enter repetitions"
                        }
                    ]
                },
                {
                    "name": "meissa_ot_side",
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
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "meissa_ot"
                    }
                },
                {
                    "name": "meissa_ot_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Enter remarks",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "meissa_ot"
                    }
                },
                {
                    "name": "sidra_leg_subheading",
                    "label": "Sidra LEG",
                    "type": "subheading",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "sidra_leg"
                    }
                },
                {
                    "name": "sidra_leg_training_type",
                    "label": "Training Type",
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
                            "label": "CPM + EMG Knee",
                            "value": "cpm_emg_knee"
                        },
                        {
                            "label": "CPM + EMG Ankle",
                            "value": "cpm_emg_ankle"
                        },
                        {
                            "label": "CPM + EMG Knee with Synced Ankle",
                            "value": "cpm_emg_knee_synced_ankle"
                        },
                        {
                            "label": "CPM + EMS Knee",
                            "value": "cpm_ems_knee"
                        },
                        {
                            "label": "CPM + EMS Ankle",
                            "value": "cpm_ems_ankle"
                        },
                        {
                            "label": "Others",
                            "value": "others"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "sidra_leg"
                    }
                },
                {
                    "name": "sidra_leg_other_training_type",
                    "label": "Other Training Type",
                    "type": "input",
                    "placeholder": "Specify other training type",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "others"
                    }
                },
                {
                    "name": "sidra_leg_parameters_heading",
                    "label": "Parameters",
                    "type": "subheading",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "sidra_leg"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "sidra_leg"
                    },
                    "fields": [
                        {
                            "name": "sidra_leg_time",
                            "label": "Time",
                            "type": "input",
                            "placeholder": "Enter time"
                        },
                        {
                            "name": "sidra_leg_repetitions",
                            "label": "Repetitions",
                            "type": "input",
                            "placeholder": "Enter repetitions"
                        }
                    ]
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
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "sidra_leg"
                    }
                },
                {
                    "name": "sidra_leg_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Enter remarks",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "sidra_leg"
                    }
                },
                {
                    "name": "fesia_walk_heading",
                    "label": "FESIA Walk",
                    "type": "heading",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "fesia_walk"
                    }
                },
                {
                    "name": "fesia_walk_parameters_heading",
                    "label": "Parameters",
                    "type": "subheading",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "fesia_walk"
                    }
                },
                {
                    "name": "fesia_walk_protocols",
                    "label": "Protocols",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Habituation",
                            "value": "habituation"
                        },
                        {
                            "label": "Tone Reduction",
                            "value": "tone_reduction"
                        },
                        {
                            "label": "Repetitive Task Training",
                            "value": "repetitive_task_training"
                        },
                        {
                            "label": "Gait",
                            "value": "gait"
                        },
                        {
                            "label": "Balance",
                            "value": "balance"
                        },
                        {
                            "label": "External Assistance",
                            "value": "external_assistance"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "fesia_walk"
                    }
                },
                {
                    "name": "fesia_walk_side",
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
                        },
                        {
                            "label": "Bilateral",
                            "value": "bilateral"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "fesia_walk"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "fesia_walk"
                    },
                    "fields": [
                        {
                            "name": "fesia_walk_duration",
                            "label": "Duration (Minutes)",
                            "type": "input",
                            "placeholder": "Enter duration in minutes"
                        },
                        {
                            "name": "fesia_walk_frequency",
                            "label": "Frequency (Hz)",
                            "type": "input",
                            "placeholder": "Enter frequency in Hz"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "fesia_walk"
                    },
                    "fields": [
                        {
                            "name": "fesia_walk_pulse_width",
                            "label": "Pulse Width (μs)",
                            "type": "input",
                            "placeholder": "Enter pulse width in microseconds"
                        },
                        {
                            "name": "fesia_walk_amplitude",
                            "label": "Amplitude (mA)",
                            "type": "input",
                            "placeholder": "Enter amplitude in mA"
                        }
                    ]
                },
                {
                    "name": "fesia_walk_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Enter remarks",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "fesia_walk"
                    }
                },
                {
                    "name": "fesia_grasp_heading",
                    "label": "FESIA Grasp",
                    "type": "heading",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "fesia_grasp"
                    }
                },
                {
                    "name": "fesia_grasp_parameters_heading",
                    "label": "Parameters",
                    "type": "subheading",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "fesia_grasp"
                    }
                },
                {
                    "name": "fesia_grasp_protocols",
                    "label": "Protocols",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Habituation",
                            "value": "habituation"
                        },
                        {
                            "label": "Tone Reduction",
                            "value": "tone_reduction"
                        },
                        {
                            "label": "Repetitive Task Training",
                            "value": "repetitive_task_training"
                        },
                        {
                            "label": "Sensorimotor Trigger Stimulation",
                            "value": "sensorimotor_trigger_stimulation"
                        },
                        {
                            "label": "ADLs Training",
                            "value": "adls_training"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "fesia_grasp"
                    }
                },
                {
                    "name": "fesia_grasp_side",
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
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "fesia_grasp"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "fesia_grasp"
                    },
                    "fields": [
                        {
                            "name": "fesia_grasp_duration",
                            "label": "Duration (Minutes)",
                            "type": "input",
                            "placeholder": "Enter duration in minutes"
                        },
                        {
                            "name": "fesia_grasp_frequency",
                            "label": "Frequency (Hz)",
                            "type": "input",
                            "placeholder": "Enter frequency in Hz"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "fesia_grasp"
                    },
                    "fields": [
                        {
                            "name": "fesia_grasp_pulse_width",
                            "label": "Pulse Width (μs)",
                            "type": "input",
                            "placeholder": "Enter pulse width in microseconds"
                        },
                        {
                            "name": "fesia_grasp_amplitude",
                            "label": "Amplitude (mA)",
                            "type": "input",
                            "placeholder": "Enter amplitude in mA"
                        }
                    ]
                },
                {
                    "name": "fesia_grasp_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Enter remarks",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "fesia_grasp"
                    }
                },
                {
                    "name": "fesia_bike_heading",
                    "label": "FESIA Bike",
                    "type": "heading",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "fesia_bike"
                    }
                },
                {
                    "name": "fesia_bike_parameters_heading",
                    "label": "Parameters",
                    "type": "subheading",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "fesia_bike"
                    }
                },
                {
                    "name": "fesia_bike_side",
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
                        },
                        {
                            "label": "Bilateral",
                            "value": "bilateral"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "fesia_bike"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "fesia_bike"
                    },
                    "fields": [
                        {
                            "name": "fesia_bike_duration",
                            "label": "Duration (Minutes)",
                            "type": "input",
                            "placeholder": "Enter duration in minutes"
                        },
                        {
                            "name": "fesia_bike_frequency",
                            "label": "Frequency (Hz)",
                            "type": "input",
                            "placeholder": "Enter frequency in Hz"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "fesia_bike"
                    },
                    "fields": [
                        {
                            "name": "fesia_bike_pulse_width",
                            "label": "Pulse Width (μs)",
                            "type": "input",
                            "placeholder": "Enter pulse width in microseconds"
                        },
                        {
                            "name": "fesia_bike_amplitude",
                            "label": "Amplitude (mA)",
                            "type": "input",
                            "placeholder": "Enter amplitude in mA"
                        }
                    ]
                },
                {
                    "name": "fesia_bike_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Enter remarks",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "fesia_bike"
                    }
                },
                {
                    "name": "myndmove_heading",
                    "label": "MyndMove",
                    "type": "heading",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "myndmove"
                    }
                },
                {
                    "name": "myndmove_parameters_heading",
                    "label": "Parameters",
                    "type": "subheading",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "myndmove"
                    }
                },
                {
                    "name": "myndmove_protocols",
                    "label": "Protocols",
                    "type": "input",
                    "placeholder": "Enter protocol details",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "myndmove"
                    }
                },
                {
                    "name": "myndmove_side",
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
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "myndmove"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "myndmove"
                    },
                    "fields": [
                        {
                            "name": "myndmove_duration",
                            "label": "Duration (Minutes)",
                            "type": "input",
                            "placeholder": "Enter duration in minutes"
                        },
                        {
                            "name": "myndmove_frequency",
                            "label": "Frequency (Hz)",
                            "type": "input",
                            "placeholder": "Enter frequency in Hz"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "myndmove"
                    },
                    "fields": [
                        {
                            "name": "myndmove_pulse_width",
                            "label": "Pulse Width (μs)",
                            "type": "input",
                            "placeholder": "Enter pulse width in microseconds"
                        },
                        {
                            "name": "myndmove_amplitude",
                            "label": "Amplitude (mA)",
                            "type": "input",
                            "placeholder": "Enter amplitude in mA"
                        }
                    ]
                },
                {
                    "name": "myndmove_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Enter remarks",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "myndmove"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Vibramoov",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
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
                        "field": "neuro_robotics_neuromodulation_interventions",
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
                    "name": "robert_heading",
                    "label": "ROBERT",
                    "type": "heading",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "robert"
                    }
                },
                {
                    "name": "robert_lower_extremity_heading",
                    "label": "Lower Extremity",
                    "type": "subheading",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "robert"
                    }
                },
                {
                    "name": "robert_lower_primary_joint",
                    "label": "Primary Joint",
                    "type": "radio",
                    "options": [
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
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "robert"
                    }
                },
                {
                    "name": "robert_lower_side",
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
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "robert"
                    }
                },
                {
                    "name": "robert_lower_position",
                    "label": "Position",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Supine",
                            "value": "supine"
                        },
                        {
                            "label": "Lateral",
                            "value": "lateral"
                        },
                        {
                            "label": "Seated",
                            "value": "seated"
                        },
                        {
                            "label": "Prone",
                            "value": "prone"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "robert"
                    }
                },
                {
                    "name": "robert_lower_movement",
                    "label": "Movement",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Flexion",
                            "value": "flexion"
                        },
                        {
                            "label": "Extension",
                            "value": "extension"
                        },
                        {
                            "label": "Abduction",
                            "value": "abduction"
                        },
                        {
                            "label": "Adduction",
                            "value": "adduction"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "robert"
                    }
                },
                {
                    "name": "robert_lower_motion_setup",
                    "label": "Motion Setup",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Active",
                            "value": "active"
                        },
                        {
                            "label": "Guided",
                            "value": "guided"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "robert"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "robert"
                    },
                    "fields": [
                        {
                            "name": "robert_lower_repetitions",
                            "label": "Repetitions",
                            "type": "input",
                            "placeholder": "Enter repetitions"
                        },
                        {
                            "name": "robert_lower_resistance",
                            "label": "Resistance",
                            "type": "input",
                            "placeholder": "Enter resistance"
                        }
                    ]
                },
                {
                    "name": "robert_lower_sas",
                    "label": "SAS",
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
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "robert"
                    }
                },
                {
                    "name": "robert_lower_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Enter remarks",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "robert"
                    }
                },
                {
                    "name": "robert_upper_extremity_heading",
                    "label": "Upper Extremity",
                    "type": "subheading",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "robert"
                    }
                },
                {
                    "name": "robert_upper_primary_joint",
                    "label": "Primary Joint",
                    "type": "radio",
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
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "robert"
                    }
                },
                {
                    "name": "robert_upper_position",
                    "label": "Position",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Supine",
                            "value": "supine"
                        },
                        {
                            "label": "Seated",
                            "value": "seated"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "robert"
                    }
                },
                {
                    "name": "robert_upper_movement",
                    "label": "Movement",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Shoulder Internal Rotation",
                            "value": "shoulder_internal_rotation"
                        },
                        {
                            "label": "Shoulder External Rotation",
                            "value": "shoulder_external_rotation"
                        },
                        {
                            "label": "Shoulder Flexion",
                            "value": "shoulder_flexion"
                        },
                        {
                            "label": "Shoulder Extension",
                            "value": "shoulder_extension"
                        },
                        {
                            "label": "Shoulder Abduction",
                            "value": "shoulder_abduction"
                        },
                        {
                            "label": "Shoulder Adduction",
                            "value": "shoulder_adduction"
                        },
                        {
                            "label": "Elbow Flexion",
                            "value": "elbow_flexion"
                        },
                        {
                            "label": "Elbow Extension",
                            "value": "elbow_extension"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "robert"
                    }
                },
                {
                    "name": "robert_upper_motion_setup",
                    "label": "Motion Setup",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Active",
                            "value": "active"
                        },
                        {
                            "label": "Guided",
                            "value": "guided"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "robert"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "robert"
                    },
                    "fields": [
                        {
                            "name": "robert_upper_repetitions",
                            "label": "Repetitions",
                            "type": "input",
                            "placeholder": "Enter repetitions"
                        },
                        {
                            "name": "robert_upper_resistance",
                            "label": "Resistance",
                            "type": "input",
                            "placeholder": "Enter resistance"
                        }
                    ]
                },
                {
                    "name": "robert_upper_sas",
                    "label": "SAS",
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
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "robert"
                    }
                },
                {
                    "name": "robert_upper_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Enter remarks",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "robert"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Arm Motus EMU",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "arm_motus_emu"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Motor Coordination",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "arm_motus_emu"
                    }
                },
                {
                    "name": "arm_motus_emu_motor_coordination_mode",
                    "label": "Training Mode",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Musical Note",
                            "value": "musical_note"
                        },
                        {
                            "label": "Go Fishing",
                            "value": "go_fishing"
                        },
                        {
                            "label": "Trajectory Training",
                            "value": "trajectory_training"
                        },
                        {
                            "label": "Touch It",
                            "value": "touch_it"
                        },
                        {
                            "label": "Table Tennis",
                            "value": "table_tennis"
                        },
                        {
                            "label": "Botanical Garden",
                            "value": "botanical_garden"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "arm_motus_emu"
                    }
                },
                {
                    "name": "arm_motus_emu_motor_coordination_type",
                    "label": "Type",
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
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "arm_motus_emu"
                    }
                },
                {
                    "name": "arm_motus_emu_motor_coordination_duration",
                    "label": "Duration",
                    "type": "input",
                    "placeholder": "Enter duration",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "arm_motus_emu"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Cognitive Training",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "arm_motus_emu"
                    }
                },
                {
                    "name": "arm_motus_emu_cognitive_training_mode",
                    "label": "Training Mode",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Happy Restaurant",
                            "value": "happy_restaurant"
                        },
                        {
                            "label": "Clever Mind",
                            "value": "clever_mind"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "arm_motus_emu"
                    }
                },
                {
                    "name": "arm_motus_emu_cognitive_training_type",
                    "label": "Type",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Assisted",
                            "value": "assisted"
                        },
                        {
                            "label": "Active",
                            "value": "active"
                        },
                        {
                            "label": "Resistance",
                            "value": "resistance"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "arm_motus_emu"
                    }
                },
                {
                    "name": "arm_motus_emu_cognitive_training_duration",
                    "label": "Duration",
                    "type": "input",
                    "placeholder": "Enter duration",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "arm_motus_emu"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Arm Motus M2 Pro",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "arm_motus_m2_pro"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Motor Coordination",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "arm_motus_m2_pro"
                    }
                },
                {
                    "name": "arm_motus_m2_pro_motor_coordination_mode",
                    "label": "Training Mode",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Zoo & Friends",
                            "value": "zoo_and_friends"
                        },
                        {
                            "label": "Herbal Garden",
                            "value": "herbal_garden"
                        },
                        {
                            "label": "Ball",
                            "value": "ball"
                        },
                        {
                            "label": "Defend Base",
                            "value": "defend_base"
                        },
                        {
                            "label": "Cube World",
                            "value": "cube_world"
                        },
                        {
                            "label": "Musical Note",
                            "value": "musical_note"
                        },
                        {
                            "label": "Go Fishing",
                            "value": "go_fishing"
                        },
                        {
                            "label": "Botanical Garden",
                            "value": "botanical_garden"
                        },
                        {
                            "label": "Colour Rush",
                            "value": "colour_rush"
                        },
                        {
                            "label": "Galaxy War",
                            "value": "galaxy_war"
                        },
                        {
                            "label": "Table Tennis",
                            "value": "table_tennis"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "arm_motus_m2_pro"
                    }
                },
                {
                    "name": "arm_motus_m2_pro_motor_coordination_type",
                    "label": "Type",
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
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "arm_motus_m2_pro"
                    }
                },
                {
                    "name": "arm_motus_m2_pro_motor_coordination_duration",
                    "label": "Duration",
                    "type": "input",
                    "placeholder": "Enter duration",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "arm_motus_m2_pro"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Cognitive Training",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "arm_motus_m2_pro"
                    }
                },
                {
                    "name": "arm_motus_m2_pro_cognitive_training_mode",
                    "label": "Training Mode",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Wrack A Mole",
                            "value": "wrack_a_mole"
                        },
                        {
                            "label": "Find Treasure",
                            "value": "find_treasure"
                        },
                        {
                            "label": "Happy Restaurant",
                            "value": "happy_restaurant"
                        },
                        {
                            "label": "Clever Mind",
                            "value": "clever_mind"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "arm_motus_m2_pro"
                    }
                },
                {
                    "name": "arm_motus_m2_pro_cognitive_training_type",
                    "label": "Type",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Passive",
                            "value": "passive"
                        },
                        {
                            "label": "Assisted",
                            "value": "assisted"
                        },
                        {
                            "label": "Active",
                            "value": "active"
                        },
                        {
                            "label": "Resistance",
                            "value": "resistance"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "arm_motus_m2_pro"
                    }
                },
                {
                    "name": "arm_motus_m2_pro_cognitive_training_duration",
                    "label": "Duration",
                    "type": "input",
                    "placeholder": "Enter duration",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "arm_motus_m2_pro"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Isometric Training",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "arm_motus_m2_pro"
                    }
                },
                {
                    "name": "arm_motus_m2_pro_isometric_training_mode",
                    "label": "Training Mode",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Air Gunner",
                            "value": "air_gunner"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "arm_motus_m2_pro"
                    }
                },
                {
                    "name": "arm_motus_m2_pro_isometric_training_type",
                    "label": "Type",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Active",
                            "value": "active"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "arm_motus_m2_pro"
                    }
                },
                {
                    "name": "arm_motus_m2_pro_isometric_training_duration",
                    "label": "Duration",
                    "type": "input",
                    "placeholder": "Enter duration",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "arm_motus_m2_pro"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Exo Motus",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "exo_motus"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Passive Training",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "exo_motus"
                    }
                },
                {
                    "name": "exo_motus_passive_training_mode",
                    "label": "Training Mode",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Walking",
                            "value": "walking"
                        },
                        {
                            "label": "Stepping",
                            "value": "stepping"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "exo_motus"
                    }
                },
                {
                    "name": "exo_motus_passive_training_type",
                    "label": "Training Type",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Passive",
                            "value": "passive"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "exo_motus"
                    }
                },
                {
                    "name": "exo_motus_passive_speed",
                    "label": "Speed",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Level 1",
                            "value": "level_1"
                        },
                        {
                            "label": "Level 2",
                            "value": "level_2"
                        },
                        {
                            "label": "Level 3",
                            "value": "level_3"
                        },
                        {
                            "label": "Level 4",
                            "value": "level_4"
                        },
                        {
                            "label": "Level 5",
                            "value": "level_5"
                        },
                        {
                            "label": "Level 6",
                            "value": "level_6"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "exo_motus"
                    }
                },
                {
                    "name": "exo_motus_passive_step_length",
                    "label": "Step Length",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Level 1",
                            "value": "level_1"
                        },
                        {
                            "label": "Level 2",
                            "value": "level_2"
                        },
                        {
                            "label": "Level 3",
                            "value": "level_3"
                        },
                        {
                            "label": "Level 4",
                            "value": "level_4"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "exo_motus"
                    }
                },
                {
                    "name": "exo_motus_passive_duration",
                    "label": "Duration",
                    "type": "input",
                    "placeholder": "Enter duration",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "exo_motus"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Assisted Training",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "exo_motus"
                    }
                },
                {
                    "name": "exo_motus_assisted_training_mode",
                    "label": "Training Mode",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Walking",
                            "value": "walking"
                        },
                        {
                            "label": "Stepping",
                            "value": "stepping"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "exo_motus"
                    }
                },
                {
                    "name": "exo_motus_assisted_training_type",
                    "label": "Training Type",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Assisted",
                            "value": "assisted"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "exo_motus"
                    }
                },
                {
                    "name": "exo_motus_assisted_guidance_force",
                    "label": "Guidance Force",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Level 1",
                            "value": "level_1"
                        },
                        {
                            "label": "Level 2",
                            "value": "level_2"
                        },
                        {
                            "label": "Level 3",
                            "value": "level_3"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "exo_motus"
                    }
                },
                {
                    "name": "exo_motus_assisted_step_length",
                    "label": "Step Length",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Level 1",
                            "value": "level_1"
                        },
                        {
                            "label": "Level 2",
                            "value": "level_2"
                        },
                        {
                            "label": "Level 3",
                            "value": "level_3"
                        },
                        {
                            "label": "Level 4",
                            "value": "level_4"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "exo_motus"
                    }
                },
                {
                    "name": "exo_motus_assisted_duration",
                    "label": "Duration",
                    "type": "input",
                    "placeholder": "Enter duration",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "exo_motus"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Ankle Motus",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "ankle_motus"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Motor Coordination",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "ankle_motus"
                    }
                },
                {
                    "name": "ankle_motus_motor_coordination_mode",
                    "label": "Training Mode",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Botanical Garden",
                            "value": "botanical_garden"
                        },
                        {
                            "label": "Spring Pong",
                            "value": "spring_pong"
                        },
                        {
                            "label": "Tower Defense",
                            "value": "tower_defense"
                        },
                        {
                            "label": "Colour Rush",
                            "value": "colour_rush"
                        },
                        {
                            "label": "Galaxy War",
                            "value": "galaxy_war"
                        },
                        {
                            "label": "Ocean Adventure",
                            "value": "ocean_adventure"
                        },
                        {
                            "label": "Cube War",
                            "value": "cube_war"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "ankle_motus"
                    }
                },
                {
                    "name": "ankle_motus_motor_coordination_type",
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
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "ankle_motus"
                    }
                },
                {
                    "name": "ankle_motus_motor_coordination_duration",
                    "label": "Duration",
                    "type": "input",
                    "placeholder": "Enter duration",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "ankle_motus"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Cognitive Training",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "ankle_motus"
                    }
                },
                {
                    "name": "ankle_motus_cognitive_training_mode",
                    "label": "Training Mode",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Clever Mind",
                            "value": "clever_mind"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "ankle_motus"
                    }
                },
                {
                    "name": "ankle_motus_cognitive_training_type",
                    "label": "Type",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Assisted",
                            "value": "assisted"
                        },
                        {
                            "label": "Active",
                            "value": "active"
                        },
                        {
                            "label": "Resistance",
                            "value": "resistance"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "ankle_motus"
                    }
                },
                {
                    "name": "ankle_motus_cognitive_training_duration",
                    "label": "Duration",
                    "type": "input",
                    "placeholder": "Enter duration",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "ankle_motus"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Isometric Training",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "ankle_motus"
                    }
                },
                {
                    "name": "ankle_motus_isometric_training_mode",
                    "label": "Training Mode",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Air Gunner",
                            "value": "air_gunner"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "ankle_motus"
                    }
                },
                {
                    "name": "ankle_motus_isometric_training_type",
                    "label": "Type",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Active",
                            "value": "active"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "ankle_motus"
                    }
                },
                {
                    "name": "ankle_motus_isometric_training_duration",
                    "label": "Duration",
                    "type": "input",
                    "placeholder": "Enter duration",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "ankle_motus"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Stretching",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "ankle_motus"
                    }
                },
                {
                    "name": "ankle_motus_stretching_mode",
                    "label": "Training Mode",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Stretching",
                            "value": "stretching"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "ankle_motus"
                    }
                },
                {
                    "name": "ankle_motus_stretching_type",
                    "label": "Type",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Passive",
                            "value": "passive"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "ankle_motus"
                    }
                },
                {
                    "name": "ankle_motus_stretching_duration",
                    "label": "Duration",
                    "type": "input",
                    "placeholder": "Enter duration",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "ankle_motus"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Pelma Motus",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "pelma_motus"
                    }
                },
                {
                    "name": "pelma_motus_training_trajectory",
                    "label": "Training Trajectory",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Random",
                            "value": "random"
                        },
                        {
                            "label": "Circular",
                            "value": "circular"
                        },
                        {
                            "label": "Forward",
                            "value": "forward"
                        },
                        {
                            "label": "Backward",
                            "value": "backward"
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
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "pelma_motus"
                    }
                },
                {
                    "name": "pelma_motus_type_scene",
                    "label": "Type Scene",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Barefoot",
                            "value": "barefoot"
                        },
                        {
                            "label": "Accessory",
                            "value": "accessory"
                        },
                        {
                            "label": "Shoes",
                            "value": "shoes"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "pelma_motus"
                    }
                },
                {
                    "name": "pelma_motus_difficulty",
                    "label": "Difficulty",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Easy",
                            "value": "easy"
                        },
                        {
                            "label": "Normal",
                            "value": "normal"
                        },
                        {
                            "label": "Hard",
                            "value": "hard"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "pelma_motus"
                    }
                },
                {
                    "name": "pelma_motus_duration",
                    "label": "Duration",
                    "type": "input",
                    "placeholder": "Enter duration",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "pelma_motus"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Wrist Motus",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "wrist_motus"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Motor Coordination",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "wrist_motus"
                    }
                },
                {
                    "name": "wrist_motus_motor_coordination_mode",
                    "label": "Training Mode",
                    "type": "single-select",
                    "options": [
                        {
                            "label": "Botanical Garden",
                            "value": "botanical_garden"
                        },
                        {
                            "label": "Spring Pong",
                            "value": "spring_pong"
                        },
                        {
                            "label": "Tower Defense",
                            "value": "tower_defense"
                        },
                        {
                            "label": "Colour Rush",
                            "value": "colour_rush"
                        },
                        {
                            "label": "Galaxy War",
                            "value": "galaxy_war"
                        },
                        {
                            "label": "Table Tennis",
                            "value": "table_tennis"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "wrist_motus"
                    }
                },
                {
                    "name": "wrist_motus_motor_coordination_type",
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
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "wrist_motus"
                    }
                },
                {
                    "name": "wrist_motus_motor_coordination_duration",
                    "label": "Duration",
                    "type": "input",
                    "placeholder": "Enter duration",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "wrist_motus"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Cognitive Training",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "wrist_motus"
                    }
                },
                {
                    "name": "wrist_motus_cognitive_training_mode",
                    "label": "Training Mode",
                    "type": "single-select",
                    "options": [
                        {
                            "label": "Clever Mind",
                            "value": "clever_mind"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "wrist_motus"
                    }
                },
                {
                    "name": "wrist_motus_cognitive_training_type",
                    "label": "Type",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Assisted",
                            "value": "assisted"
                        },
                        {
                            "label": "Active",
                            "value": "active"
                        },
                        {
                            "label": "Resistance",
                            "value": "resistance"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "wrist_motus"
                    }
                },
                {
                    "name": "wrist_motus_cognitive_training_duration",
                    "label": "Duration",
                    "type": "input",
                    "placeholder": "Enter duration",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "wrist_motus"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Isometric Training",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "wrist_motus"
                    }
                },
                {
                    "name": "wrist_motus_isometric_training_mode",
                    "label": "Training Mode",
                    "type": "single-select",
                    "options": [
                        {
                            "label": "Air Gunner",
                            "value": "air_gunner"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "wrist_motus"
                    }
                },
                {
                    "name": "wrist_motus_isometric_training_type",
                    "label": "Type",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Active",
                            "value": "active"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "wrist_motus"
                    }
                },
                {
                    "name": "wrist_motus_isometric_training_duration",
                    "label": "Duration",
                    "type": "input",
                    "placeholder": "Enter duration",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "wrist_motus"
                    }
                },
                {
                    "name": "luna_emg_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Enter remarks",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "luna_emg"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Cycle Motus",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "cycle_motus"
                    }
                },
                {
                    "name": "cycle_motus_training_type",
                    "label": "Training Type",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Cross Cycling",
                            "value": "cross_cycling"
                        },
                        {
                            "label": "Horizontal",
                            "value": "horizontal"
                        },
                        {
                            "label": "Sync Cycling",
                            "value": "sync_cycling"
                        },
                        {
                            "label": "Leg Trainer",
                            "value": "leg_trainer"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "cycle_motus"
                    }
                },
                {
                    "name": "cycle_motus_training_mode",
                    "label": "Training Mode",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Intelligent",
                            "value": "intelligent"
                        },
                        {
                            "label": "Active",
                            "value": "active"
                        },
                        {
                            "label": "Passive",
                            "value": "passive"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "cycle_motus"
                    }
                },
                {
                    "name": "cycle_motus_duration",
                    "label": "Duration",
                    "type": "input",
                    "placeholder": "Enter duration",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "cycle_motus"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Tymo",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "tymo"
                    }
                },
                {
                    "name": "tymo_therapy_program",
                    "label": "Therapy Program",
                    "type": "radio",
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
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "tymo"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Parameters",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "tymo"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "tymo"
                    },
                    "fields": [
                        {
                            "name": "tymo_types_of_exercise",
                            "label": "Types of Exercise",
                            "type": "input",
                            "placeholder": "Enter types of exercise"
                        },
                        {
                            "name": "tymo_duration",
                            "label": "Duration",
                            "type": "input",
                            "placeholder": "Enter duration"
                        },
                        {
                            "name": "tymo_remarks",
                            "label": "Remarks",
                            "type": "input",
                            "placeholder": "Enter remarks"
                        }
                    ]
                },
                {
                    "type": "subheading",
                    "label": "Pablo",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "pablo"
                    }
                },
                {
                    "name": "pablo_therapy_program",
                    "label": "Therapy Program",
                    "type": "radio",
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
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "pablo"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Parameters",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "pablo"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "pablo"
                    },
                    "fields": [
                        {
                            "name": "pablo_types_of_exercise",
                            "label": "Types of Exercise",
                            "type": "input",
                            "placeholder": "Enter types of exercise"
                        },
                        {
                            "name": "pablo_duration",
                            "label": "Duration",
                            "type": "input",
                            "placeholder": "Enter duration"
                        },
                        {
                            "name": "pablo_remarks",
                            "label": "Remarks",
                            "type": "input",
                            "placeholder": "Enter remarks"
                        }
                    ]
                },
                {
                    "type": "subheading",
                    "label": "BWS Walker",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "bws_walker"
                    }
                },
                {
                    "name": "bws_walker_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Enter remarks",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "bws_walker"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Syrebo",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "syrebo"
                    }
                },
                {
                    "name": "syrebo_training_mode",
                    "label": "Training Mode",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Group Mode",
                            "value": "group_mode"
                        },
                        {
                            "label": "Refined Mode",
                            "value": "refined_mode"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "syrebo"
                    }
                },
                {
                    "name": "syrebo_group_mode_training",
                    "label": "Group Mode Training",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Passive Training",
                            "value": "passive_training"
                        },
                        {
                            "label": "Master Slave",
                            "value": "master_slave"
                        },
                        {
                            "label": "Assistance",
                            "value": "assistance"
                        },
                        {
                            "label": "Resistance",
                            "value": "resistance"
                        }
                    ],
                    "showIf": {
                        "field": "syrebo_training_mode",
                        "equals": "group_mode"
                    }
                },
                {
                    "name": "syrebo_refined_mode_training",
                    "label": "Refined Mode Training",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Passive Training",
                            "value": "passive_training"
                        },
                        {
                            "label": "Action Library",
                            "value": "action_library"
                        },
                        {
                            "label": "Master Slave",
                            "value": "master_slave"
                        },
                        {
                            "label": "Functional Training",
                            "value": "functional_training"
                        }
                    ],
                    "showIf": {
                        "field": "syrebo_training_mode",
                        "equals": "refined_mode"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Parameters",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "syrebo"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "syrebo"
                    },
                    "fields": [
                        {
                            "name": "syrebo_training_time",
                            "label": "Training Time",
                            "type": "input",
                            "placeholder": "Enter training time"
                        },
                        {
                            "name": "syrebo_remarks",
                            "label": "Remarks",
                            "type": "input",
                            "placeholder": "Enter remarks"
                        }
                    ]
                },
                {
                    "type": "subheading",
                    "label": "LIFESCAPE Medical BCI",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "lifescape_medical_bci"
                    }
                },
                {
                    "name": "lifescape_medical_bci_movements",
                    "label": "Movements",
                    "type": "input",
                    "placeholder": "Enter movements",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "lifescape_medical_bci"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Parameters",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "lifescape_medical_bci"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "lifescape_medical_bci"
                    },
                    "fields": [
                        {
                            "name": "lifescape_medical_bci_intensity",
                            "label": "Intensity (mA)",
                            "type": "input",
                            "placeholder": "Enter intensity in mA"
                        },
                        {
                            "name": "lifescape_medical_bci_repetitions",
                            "label": "Repetitions (reps)",
                            "type": "input",
                            "placeholder": "Enter repetitions"
                        },
                        {
                            "name": "lifescape_medical_bci_duration",
                            "label": "Duration (minutes)",
                            "type": "input",
                            "placeholder": "Enter duration in minutes"
                        },
                        {
                            "name": "lifescape_medical_bci_remarks",
                            "label": "Remarks",
                            "type": "input",
                            "placeholder": "Enter remarks"
                        }
                    ]
                },
                {
                    "type": "subheading",
                    "label": "RecoveriX Brain Computer Interface (BCI)",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "recoverix_bci"
                    }
                },
                {
                    "name": "recoverix_bci_region",
                    "label": "Region",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Right Wrist + Left Wrist",
                            "value": "right_wrist_left_wrist"
                        },
                        {
                            "label": "Right Wrist + Left Ankle",
                            "value": "right_wrist_left_ankle"
                        },
                        {
                            "label": "Left Wrist + Right Ankle",
                            "value": "left_wrist_right_ankle"
                        }
                    ],
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "recoverix_bci"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Parameters",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "recoverix_bci"
                    }
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "recoverix_bci"
                    },
                    "fields": [
                        {
                            "name": "recoverix_bci_intensity",
                            "label": "Intensity (mA)",
                            "type": "input",
                            "placeholder": "Enter intensity in mA"
                        },
                        {
                            "name": "recoverix_bci_total_set",
                            "label": "Total Set",
                            "type": "input",
                            "placeholder": "Enter total number of sets"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "recoverix_bci"
                    },
                    "fields": [
                        {
                            "name": "recoverix_bci_total_time",
                            "label": "Total Time",
                            "type": "input",
                            "placeholder": "Enter total time"
                        },
                        {
                            "name": "recoverix_bci_scoring_1",
                            "label": "Scoring 1 (%)",
                            "type": "input",
                            "placeholder": "Enter first score percentage"
                        }
                    ]
                },
                {
                    "type": "row",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "recoverix_bci"
                    },
                    "fields": [
                        {
                            "name": "recoverix_bci_scoring_2",
                            "label": "Scoring 2 (%)",
                            "type": "input",
                            "placeholder": "Enter second score percentage"
                        },
                        {
                            "name": "recoverix_bci_scoring_3",
                            "label": "Scoring 3 (%)",
                            "type": "input",
                            "placeholder": "Enter third score percentage"
                        }
                    ]
                },
                {
                    "name": "recoverix_bci_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Enter remarks",
                    "showIf": {
                        "field": "neuro_robotics_neuromodulation_interventions",
                        "includes": "recoverix_bci"
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
                            "label": "Other",
                            "value": "other"
                        }
                    ]
                },
                {
                    "name": "cold_therapy_remarks",
                    "label": "Cold Therapy Remarks",
                    "type": "input",
                    "showIf": {
                        "field": "pain_management",
                        "includes": "cold_therapy"
                    }
                },
                {
                    "name": "heat_therapy_remarks",
                    "label": "Heat Therapy Remarks",
                    "type": "input",
                    "showIf": {
                        "field": "pain_management",
                        "includes": "heat_therapy"
                    }
                },
                {
                    "name": "laser_therapy_remarks",
                    "label": "Laser Therapy Remarks",
                    "type": "input",
                    "showIf": {
                        "field": "pain_management",
                        "includes": "laser_therapy"
                    }
                },
                {
                    "name": "other_pain_management",
                    "label": "Other Pain Management",
                    "type": "input",
                    "showIf": {
                        "field": "pain_management",
                        "includes": "other"
                    }
                },
                {
                    "name": "other_pain_management_remarks",
                    "label": "Other Remarks",
                    "type": "input",
                    "showIf": {
                        "field": "pain_management",
                        "includes": "other"
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
                    "label": "Therapist Notes"
                },
                {
                    "name": "plan_therapist_notes",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Continue Intervention",
                            "value": "continue_intervention"
                        },
                        {
                            "label": "Modify Parameters",
                            "value": "modify_parameters"
                        },
                        {
                            "label": "Progress Exercises To",
                            "value": "progress_exercises_to"
                        },
                        {
                            "label": "Frequency of Next Treatment",
                            "value": "frequency_next_treatment"
                        },
                        {
                            "label": "Reassessment Plan",
                            "value": "reassessment_plan"
                        },
                        {
                            "label": "Remarks",
                            "value": "remarks"
                        }
                    ]
                },
                {
                    "name": "plan_modify_parameters",
                    "label": "Modify Parameters (if any)",
                    "type": "input",
                    "rows": 3,
                    "showIf": {
                        "field": "plan_therapist_notes",
                        "includes": "modify_parameters"
                    }
                },
                {
                    "name": "plan_progress_exercises_to",
                    "label": "Progress Exercises To",
                    "type": "input",
                    "rows": 3,
                    "showIf": {
                        "field": "plan_therapist_notes",
                        "includes": "progress_exercises_to"
                    }
                },
                {
                    "name": "plan_frequency_next_treatment",
                    "label": "Frequency of Next Treatment",
                    "type": "input",
                    "showIf": {
                        "field": "plan_therapist_notes",
                        "includes": "frequency_next_treatment"
                    }
                },
                {
                    "name": "plan_reassessment_plan",
                    "label": "Reassessment Plan",
                    "type": "input",
                    "rows": 3,
                    "showIf": {
                        "field": "plan_therapist_notes",
                        "includes": "reassessment_plan"
                    }
                },
                {
                    "name": "plan_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "rows": 4,
                    "showIf": {
                        "field": "plan_therapist_notes",
                        "includes": "remarks"
                    }
                }
            ]
        }
    ]
}