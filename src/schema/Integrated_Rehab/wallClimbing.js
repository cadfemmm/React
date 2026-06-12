const SUBJECTIVE ={
    "sections": [
        {
            "fields": [
                {
                    "name": "consent_type",
                    "label": "Consent",
                    "type": "single-select",
                    "options": [
                        {
                            "label": "Wall Climbing",
                            "value": "wall_climbing"
                        },
                        {
                            "label": "Dry Needling",
                            "value": "dry_needling"
                        },
                        {
                            "label": "ATV Form",
                            "value": "atv"
                        }
                    ]
                },
                {
                    "name": "route_selection",
                    "label": "Route Selection",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Adaptive Wall",
                            "value": "adaptive_wall"
                        },
                        {
                            "label": "Curved Wall",
                            "value": "curved_wall"
                        },
                        {
                            "label": "Bouldering Wall",
                            "value": "bouldering_wall"
                        }
                    ]
                },
                {
                    "name": "mc_chief_complaint_obj",
                    "label": "Chief Complaint",
                    "type": "input"
                },
                {
                    "name": "hpi",
                    "label": "History of Presenting Illness (HPI)",
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
                    "label": "Overall Climbing Performance"
                },
                {
                    "name": "overall_performance",
                    "label": "Performance",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Pass",
                            "value": "pass"
                        },
                        {
                            "label": "Pass with assistance & adaptation",
                            "value": "assisted"
                        },
                        {
                            "label": "Unable to complete",
                            "value": "unable"
                        }
                    ]
                },
                {
                    "name": "time_min",
                    "label": "Time (minutes)",
                    "type": "input"
                },
                {
                    "name": "time_sec",
                    "label": "Time (seconds)",
                    "type": "input"
                },
                {
                    "type": "subheading",
                    "label": "Strength and Power"
                },
                {
                    "name": "grip_strength",
                    "label": "Grip Strength",
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
                    "name": "upper_body_power",
                    "label": "Upper Body Pulling Power",
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
                    "label": "Core Stability and Tension"
                },
                {
                    "name": "body_tension",
                    "label": "Body Tension",
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
                    "name": "core_endurance",
                    "label": "Core Endurance",
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
                    "name": "postural_control",
                    "label": "Postural Control",
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
                    "label": "Lower Body and Footwork"
                },
                {
                    "name": "foot_precision",
                    "label": "Foot Precision",
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
                    "name": "lower_limb_strength",
                    "label": "Lower Limb Strength",
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
                    "name": "hip_mobility",
                    "label": "Hip Flexibility",
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
                    "label": "Mobility and Movement Efficiency"
                },
                {
                    "name": "hip_shoulder_flexibility",
                    "label": "Hip & Shoulder Flexibility",
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
                    "name": "movement_coordination",
                    "label": "Movement Coordination",
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
                    "name": "weight_transfer",
                    "label": "Weight Transfer",
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
                    "label": "Endurance"
                },
                {
                    "name": "endurance",
                    "label": "Endurance",
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
                    "label": "Attention & Concentration"
                },
                {
                    "name": "attention",
                    "label": "Attention & Concentration",
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

const ASSESSMENT = {
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
                    "name": "clinical_impression",
                    "label": "Clinical Impression",
                    "type": "input"
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
                    "name": "shortterm_blocks"
                },
                {
                    "type": "subheading",
                    "label": "Long-Term Goals (6–12 weeks)"
                },
                {
                    "type": "dynamic-goals",
                    "name": "longterm_blocks"
                },
                {
                    "name": "plan",
                    "label": "Plan",
                    "type": "input"
                }
            ]
        }
    ]
}