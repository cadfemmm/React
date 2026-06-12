const SUBJECTIVE={
    "fields": [
        {
            "name": "chief_complaint",
            "label": "Chief Complaint",
            "type": "input"
        },
        {
            "name": "hopi",
            "label": "History of Presenting Illness",
            "type": "input"
        },
        {
            "type": "subheading",
            "label": "Patient Goals"
        },
        {
            "name": "short_term_goals",
            "label": "Short Term Goals",
            "type": "input"
        },
        {
            "name": "long_term_goals",
            "label": "Long Term Goals",
            "type": "input"
        }
    ]
}

const OBJECTIVE={
    "title": "OBJECTIVE",
    "actions": [
        {
            "type": "back",
            "label": "Back"
        },
        {
            "type": "clear",
            "label": "Clear"
        },
        {
            "type": "save",
            "label": "Save"
        }
    ],
    "sections": [
        {
            "fields": [
                {
                    "type": "subheading",
                    "label": "Functional & Mobility Status"
                },
                {
                    "name": "hand_dominance",
                    "label": "Hand Dominance",
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
                    "name": "affected_region",
                    "label": "Affected Side / Region",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Left Upper Limb",
                            "value": "left_upper_limb"
                        },
                        {
                            "label": "Right Upper Limb",
                            "value": "right_upper_limb"
                        },
                        {
                            "label": "Left Lower Limb",
                            "value": "left_lower_limb"
                        },
                        {
                            "label": "Right Lower Limb",
                            "value": "right_lower_limb"
                        },
                        {
                            "label": "Others",
                            "value": "other"
                        }
                    ]
                },
                {
                    "name": "affected_other",
                    "label": "Specify Other",
                    "type": "input",
                    "placeholder": "Enter other affected region...",
                    "showIf": {
                        "field": "affected_region",
                        "includes": "other"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Ambulatory Status"
                },
                {
                    "name": "short_distance_mobility",
                    "label": "Short Distance Mobility",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Independent ambulation",
                            "value": "independent"
                        },
                        {
                            "label": "Wheelchair-dependent",
                            "value": "wheelchair"
                        },
                        {
                            "label": "Quadripod (narrow base)",
                            "value": "quad_narrow"
                        },
                        {
                            "label": "Quadripod (wide base)",
                            "value": "quad_wide"
                        },
                        {
                            "label": "Walking stick",
                            "value": "walking_stick"
                        },
                        {
                            "label": "Walking frame",
                            "value": "walking_frame"
                        },
                        {
                            "label": "Elbow crutches",
                            "value": "elbow_crutches"
                        },
                        {
                            "label": "Others",
                            "value": "other"
                        }
                    ]
                },
                {
                    "name": "short_distance_other",
                    "label": "Specify Other (Short Distance)",
                    "type": "input",
                    "placeholder": "Enter details...",
                    "showIf": {
                        "field": "short_distance_mobility",
                        "includes": "other"
                    }
                },
                {
                    "name": "long_distance_mobility",
                    "label": "Long Distance Mobility",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Independent ambulation",
                            "value": "independent"
                        },
                        {
                            "label": "Wheelchair-dependent",
                            "value": "wheelchair"
                        },
                        {
                            "label": "Quadripod (narrow base)",
                            "value": "quad_narrow"
                        },
                        {
                            "label": "Quadripod (wide base)",
                            "value": "quad_wide"
                        },
                        {
                            "label": "Walking stick",
                            "value": "walking_stick"
                        },
                        {
                            "label": "Walking frame",
                            "value": "walking_frame"
                        },
                        {
                            "label": "Elbow crutches",
                            "value": "elbow_crutches"
                        },
                        {
                            "label": "Others",
                            "value": "other"
                        }
                    ]
                },
                {
                    "name": "long_distance_other",
                    "label": "Specify Other (Long Distance)",
                    "type": "input",
                    "placeholder": "Enter details...",
                    "showIf": {
                        "field": "long_distance_mobility",
                        "includes": "other"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Outcome Measures"
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
                            "label": "Muscle Girth",
                            "value": "Girth"
                        },
                        {
                            "label": "Functional Ambulation Category (FAC)",
                            "value": "fac"
                        },
                        {
                            "label": "Functional Independence Measure (FIM)",
                            "value": "FIM"
                        },
                        {
                            "label": "Fugl Meyer Assessment – Lower Extremity (FMA-LE)",
                            "value": "fma_le"
                        },
                        {
                            "label": "Scale for the Assessment and Rating of Ataxia (SARA)",
                            "value": "sara"
                        },
                        {
                            "label": "Berg Balance Scale (BBS)",
                            "value": "bbs"
                        },
                        {
                            "label": "Tinetti Performance-Oriented Mobility Assessment",
                            "value": "tinetti"
                        },
                        {
                            "label": "10 Meter Walk Test (10MWT)",
                            "value": "tenmwt"
                        },
                        {
                            "label": "Timed Up and Go (TUG)",
                            "value": "tug"
                        },
                        {
                            "label": "6 Minutes Walk Test (6MWT)",
                            "value": "sixmwt"
                        },
                        {
                            "label": "Box & Block",
                            "value": "bbt"
                        },
                        {
                            "label": "9-Hole Peg Test",
                            "value": "9-hole"
                        },
                        {
                            "label": "Montreal Cognitive Assessment (MoCA)",
                            "value": "moca"
                        },
                        {
                            "label": "Function in Sitting Test (FIST)",
                            "value": "FIST"
                        },
                        {
                            "label": "Walking Index for Spinal Cord Injury II (WISCI II)",
                            "value": "wisci"
                        },
                        {
                            "label": "Spinal Cord Independence Measure (SCIM)",
                            "value": "scim"
                        }
                    ]
                },
                {
                    "type": "subheading",
                    "label": "Neurorobotic Rehabilitation & Neuromodulation Modalities Assessment"
                },
                {
                    "name": "cyberdyne_hal",
                    "label": "Cyberdyne (HAL) Assessment",
                    "type": "attach-file",
                    "helperText": "Upload: Trend report, HAL communication sheet, voluntary drive detection, gait symmetry, assist level, EMG response"
                },
                {
                    "name": "luna_emg",
                    "label": "LUNA EMG Analysis",
                    "type": "attach-file"
                },
                {
                    "name": "tymo_balance",
                    "label": "TYMO Balance System",
                    "type": "textarea",
                    "placeholder": "Enter assessment findings..."
                },
                {
                    "name": "pablo_system",
                    "label": "PABLO System (Upper Limb / Gait)",
                    "type": "textarea",
                    "placeholder": "Enter assessment findings..."
                },
                {
                    "name": "pelma_motus",
                    "label": "Pelma Motus Balance Assessment",
                    "type": "textarea",
                    "placeholder": "Enter assessment findings..."
                },
                {
                    "name": "vicon_motion",
                    "label": "Vicon Motion Analysis",
                    "type": "attach-file"
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
                    "name": "problem_list",
                    "label": "Problem List",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Reduced muscle strength",
                            "value": "muscle_strength"
                        },
                        {
                            "label": "Reduced muscular endurance",
                            "value": "muscular_endurance"
                        },
                        {
                            "label": "Reduced cardiovascular endurance",
                            "value": "cardio_endurance"
                        },
                        {
                            "label": "Limited range of motion (ROM)",
                            "value": "rom"
                        },
                        {
                            "label": "Impaired sitting balance",
                            "value": "sitting_balance"
                        },
                        {
                            "label": "Impaired standing balance",
                            "value": "standing_balance"
                        },
                        {
                            "label": "Poor trunk control",
                            "value": "trunk_control"
                        },
                        {
                            "label": "Impaired gait / non-ambulatory",
                            "value": "gait_impairment"
                        },
                        {
                            "label": "Reduced gait endurance",
                            "value": "gait_endurance"
                        },
                        {
                            "label": "Impaired wheelchair mobility skills",
                            "value": "wheelchair_skills"
                        },
                        {
                            "label": "Reduced wheelchair endurance",
                            "value": "wheelchair_endurance"
                        },
                        {
                            "label": "Others",
                            "value": "other"
                        }
                    ]
                },
                {
                    "name": "problem_list_other",
                    "label": "Specify Other",
                    "type": "input",
                    "placeholder": "Enter other problems...",
                    "showIf": {
                        "field": "problem_list",
                        "includes": "other"
                    }
                },
                {
                    "name": "clinical_impression",
                    "label": "Clinical Impression",
                    "type": "textarea",
                    "placeholder": "Enter clinical findings and summary..."
                },
                {
                    "name": "rehab_prognosis",
                    "label": "Rehabilitation Prognosis",
                    "type": "radio",
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
    "actions": [
        {
            "type": "back",
            "label": "Back"
        },
        {
            "type": "clear",
            "label": "Clear"
        },
        {
            "type": "save",
            "label": "Save"
        }
    ],
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
                    "label": "Interventions"
                },
                {
                    "name": "treatment_frequency",
                    "label": "Frequency & Duration",
                    "type": "input",
                    "placeholder": "e.g., 3x/week for 6 weeks"
                },
                {
                    "name": "interventions",
                    "label": "Interventions",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Bed mobility training",
                            "value": "bed_mobility"
                        },
                        {
                            "label": "Transfer training",
                            "value": "transfer_training"
                        },
                        {
                            "label": "Muscle tone management (stretching, positioning, neuromodulation)",
                            "value": "muscle_tone"
                        },
                        {
                            "label": "Sitting balance training",
                            "value": "sitting_balance"
                        },
                        {
                            "label": "Standing balance training",
                            "value": "standing_balance"
                        },
                        {
                            "label": "Functional ROM exercises",
                            "value": "functional_rom"
                        },
                        {
                            "label": "Task-specific strengthening exercises",
                            "value": "strengthening"
                        },
                        {
                            "label": "Cardiovascular / endurance training",
                            "value": "cardio"
                        },
                        {
                            "label": "Task-oriented functional training",
                            "value": "task_functional"
                        },
                        {
                            "label": "Conventional Exercise",
                            "value": "conventional"
                        },
                        {
                            "label": "Neurodevelopmental Treatment (Bobath/NDT)",
                            "value": "ndt"
                        },
                        {
                            "label": "Prescription & training of assistive devices",
                            "value": "assistive_devices"
                        },
                        {
                            "label": "Others",
                            "value": "other"
                        }
                    ]
                },
                {
                    "name": "interventions_other",
                    "label": "Others (Specify)",
                    "type": "input",
                    "placeholder": "Enter other interventions...",
                    "showIf": {
                        "field": "interventions",
                        "includes": "other"
                    }
                }
            ]
        }
    ]
}