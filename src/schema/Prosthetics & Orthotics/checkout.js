const SCHEMA = {
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
            "title": "Checkout Overview",
            "fields": [
                {
                    "type": "single-select",
                    "name": "checkout_category",
                    "label": "Checkout Category",
                    "options": [
                        {
                            "label": "Lower Limb Prosthesis",
                            "value": "llp"
                        },
                        {
                            "label": "Upper Limb Prosthesis",
                            "value": "ulp"
                        },
                        {
                            "label": "Lower Limb Orthosis",
                            "value": "llo"
                        },
                        {
                            "label": "Upper Limb Orthosis",
                            "value": "ulo"
                        },
                        {
                            "label": "Spinal Orthosis",
                            "value": "spinal_orthosis"
                        },
                        {
                            "label": "Foot Orthosis",
                            "value": "foot_orthosis"
                        },
                        {
                            "label": "Others",
                            "value": "others"
                        }
                    ]
                },
                {
                    "type": "input",
                    "name": "device_type",
                    "label": "Device Type",
                    "readOnly": true
                },
                {
                    "type": "input",
                    "name": "amputation_level",
                    "label": "Amputation / Orthosis Level",
                    "readOnly": true
                },
                {
                    "type": "textarea",
                    "name": "checkout_remark",
                    "label": "Remarks"
                }
            ]
        },
        {
            "title": "Socket / Interface Assessment",
            "fields": [
                {
                    "type": "single-select",
                    "name": "socket_fit",
                    "label": "Socket / Interface Fit",
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
                    "type": "single-select",
                    "name": "comfort_level",
                    "label": "Comfort Level",
                    "options": [
                        {
                            "label": "Comfortable",
                            "value": "comfortable"
                        },
                        {
                            "label": "Mild discomfort",
                            "value": "mild_discomfort"
                        },
                        {
                            "label": "Pain",
                            "value": "pain"
                        }
                    ]
                },
                {
                    "type": "multi-select-dropdown",
                    "name": "pressure_area",
                    "label": "Pressure Area",
                    "options": [
                        {
                            "label": "None",
                            "value": "none"
                        },
                        {
                            "label": "Tibial crest",
                            "value": "tibial_crest"
                        },
                        {
                            "label": "Fibular head",
                            "value": "fibular_head"
                        },
                        {
                            "label": "Distal end",
                            "value": "distal_end"
                        },
                        {
                            "label": "Patella",
                            "value": "patella"
                        },
                        {
                            "label": "Epicondyle",
                            "value": "epicondyle"
                        },
                        {
                            "label": "Spine prominence",
                            "value": "spine_prominence"
                        },
                        {
                            "label": "Others",
                            "value": "others"
                        }
                    ]
                },
                {
                    "type": "multi-select-dropdown",
                    "name": "skin_condition",
                    "label": "Skin Condition",
                    "options": [
                        {
                            "label": "Normal",
                            "value": "normal"
                        },
                        {
                            "label": "Redness",
                            "value": "redness"
                        },
                        {
                            "label": "Wound",
                            "value": "wound"
                        },
                        {
                            "label": "Pressure area",
                            "value": "pressure_area"
                        },
                        {
                            "label": "Skin breakdown",
                            "value": "skin_breakdown"
                        }
                    ]
                },
                {
                    "type": "single-select",
                    "name": "suspension_security",
                    "label": "Suspension Security",
                    "options": [
                        {
                            "label": "Secure",
                            "value": "secure"
                        },
                        {
                            "label": "Loose",
                            "value": "loose"
                        },
                        {
                            "label": "Not applicable",
                            "value": "na"
                        }
                    ]
                },
                {
                    "type": "textarea",
                    "name": "socket_remark",
                    "label": "Remarks"
                }
            ]
        },
        {
            "title": "Component Check",
            "fields": [
                {
                    "type": "single-select",
                    "name": "knee_joint_function",
                    "label": "Knee Joint Function",
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
                    "type": "single-select",
                    "name": "hip_joint_function",
                    "label": "Hip Joint Function",
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
                    "type": "single-select",
                    "name": "foot_ankle_component",
                    "label": "Foot / Ankle Component",
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
                    "type": "single-select",
                    "name": "locking_mechanism",
                    "label": "Locking Mechanism",
                    "options": [
                        {
                            "label": "Functional",
                            "value": "functional"
                        },
                        {
                            "label": "Partial",
                            "value": "partial"
                        },
                        {
                            "label": "Not functioning",
                            "value": "not_functioning"
                        }
                    ]
                },
                {
                    "type": "single-select",
                    "name": "joint_control",
                    "label": "Joint Control",
                    "options": [
                        {
                            "label": "Adequate",
                            "value": "adequate"
                        },
                        {
                            "label": "Partial",
                            "value": "partial"
                        },
                        {
                            "label": "Inadequate",
                            "value": "inadequate"
                        }
                    ]
                },
                {
                    "type": "single-select",
                    "name": "strap_security",
                    "label": "Strap / Velcro Security",
                    "options": [
                        {
                            "label": "Secure",
                            "value": "secure"
                        },
                        {
                            "label": "Loose",
                            "value": "loose"
                        }
                    ]
                },
                {
                    "type": "single-select",
                    "name": "cable_battery_system",
                    "label": "Cable / Battery System",
                    "options": [
                        {
                            "label": "Functional",
                            "value": "functional"
                        },
                        {
                            "label": "Needs adjustment",
                            "value": "needs_adjustment"
                        }
                    ]
                },
                {
                    "type": "single-select",
                    "name": "terminal_device_function",
                    "label": "Terminal Device Function",
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
                    "type": "textarea",
                    "name": "component_remark",
                    "label": "Remarks"
                }
            ]
        },
        {
            "title": "Alignment & Biomechanical Check",
            "fields": [
                {
                    "type": "single-select",
                    "name": "alignment",
                    "label": "Alignment",
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
                    "type": "single-select",
                    "name": "height_equalization",
                    "label": "Height Equalization",
                    "options": [
                        {
                            "label": "Equal",
                            "value": "equal"
                        },
                        {
                            "label": "Short",
                            "value": "short"
                        },
                        {
                            "label": "Long",
                            "value": "long"
                        }
                    ]
                },
                {
                    "type": "single-select",
                    "name": "foot_clearance",
                    "label": "Foot Clearance",
                    "options": [
                        {
                            "label": "Normal",
                            "value": "normal"
                        },
                        {
                            "label": "Reduced",
                            "value": "reduced"
                        },
                        {
                            "label": "Absent",
                            "value": "absent"
                        }
                    ]
                },
                {
                    "type": "single-select",
                    "name": "knee_stability",
                    "label": "Knee Stability",
                    "options": [
                        {
                            "label": "Stable",
                            "value": "stable"
                        },
                        {
                            "label": "Buckling",
                            "value": "buckling"
                        },
                        {
                            "label": "Hyperextension",
                            "value": "hyperextension"
                        }
                    ]
                },
                {
                    "type": "single-select",
                    "name": "weight_bearing_tolerance",
                    "label": "Weight Bearing Tolerance",
                    "options": [
                        {
                            "label": "Full",
                            "value": "full"
                        },
                        {
                            "label": "Partial",
                            "value": "partial"
                        },
                        {
                            "label": "Unable",
                            "value": "unable"
                        }
                    ]
                },
                {
                    "type": "single-select",
                    "name": "postural_alignment",
                    "label": "Postural Alignment",
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
                    "type": "textarea",
                    "name": "alignment_remark",
                    "label": "Remarks"
                }
            ]
        },
        {
            "title": "Functional Check",
            "fields": [
                {
                    "type": "single-select",
                    "name": "standing_balance",
                    "label": "Standing Balance",
                    "options": [
                        {
                            "label": "Independent",
                            "value": "independent"
                        },
                        {
                            "label": "Assisted",
                            "value": "assisted"
                        },
                        {
                            "label": "Unable",
                            "value": "unable"
                        }
                    ]
                },
                {
                    "type": "single-select",
                    "name": "walking_ability",
                    "label": "Walking Ability",
                    "options": [
                        {
                            "label": "Independent",
                            "value": "independent"
                        },
                        {
                            "label": "With aid",
                            "value": "with_aid"
                        },
                        {
                            "label": "Unable",
                            "value": "unable"
                        }
                    ]
                },
                {
                    "type": "single-select",
                    "name": "gait_stability",
                    "label": "Gait Stability",
                    "options": [
                        {
                            "label": "Stable",
                            "value": "stable"
                        },
                        {
                            "label": "Mild instability",
                            "value": "mild_instability"
                        },
                        {
                            "label": "Unstable",
                            "value": "unstable"
                        }
                    ]
                },
                {
                    "type": "single-select",
                    "name": "transfer_ability",
                    "label": "Transfer Ability",
                    "options": [
                        {
                            "label": "Independent",
                            "value": "independent"
                        },
                        {
                            "label": "Assisted",
                            "value": "assisted"
                        },
                        {
                            "label": "Unable",
                            "value": "unable"
                        }
                    ]
                },
                {
                    "type": "single-select",
                    "name": "stair_negotiation",
                    "label": "Stair Negotiation",
                    "options": [
                        {
                            "label": "Independent",
                            "value": "independent"
                        },
                        {
                            "label": "Assisted",
                            "value": "assisted"
                        },
                        {
                            "label": "Unable",
                            "value": "unable"
                        }
                    ]
                },
                {
                    "type": "single-select",
                    "name": "reach_function",
                    "label": "Reach Function",
                    "options": [
                        {
                            "label": "Independent",
                            "value": "independent"
                        },
                        {
                            "label": "Assisted",
                            "value": "assisted"
                        },
                        {
                            "label": "Unable",
                            "value": "unable"
                        }
                    ]
                },
                {
                    "type": "single-select",
                    "name": "grasp_release",
                    "label": "Grasp & Release",
                    "options": [
                        {
                            "label": "Functional",
                            "value": "functional"
                        },
                        {
                            "label": "Partial",
                            "value": "partial"
                        },
                        {
                            "label": "Unable",
                            "value": "unable"
                        }
                    ]
                },
                {
                    "type": "single-select",
                    "name": "adl_performance",
                    "label": "ADL Performance",
                    "options": [
                        {
                            "label": "Independent",
                            "value": "independent"
                        },
                        {
                            "label": "Assisted",
                            "value": "assisted"
                        },
                        {
                            "label": "Unable",
                            "value": "unable"
                        }
                    ]
                },
                {
                    "type": "textarea",
                    "name": "functional_remark",
                    "label": "Remarks"
                }
            ]
        },
        {
            "title": "Spinal / Body Brace Check",
            "showIf": {
                "field": "checkout_category",
                "in": [
                    "spinal_orthosis"
                ]
            },
            "fields": [
                {
                    "type": "single-select",
                    "name": "trimline_position",
                    "label": "Trimline Position",
                    "options": [
                        {
                            "label": "Correct",
                            "value": "correct"
                        },
                        {
                            "label": "Needs adjustment",
                            "value": "needs_adjustment"
                        }
                    ]
                },
                {
                    "type": "single-select",
                    "name": "pressure_distribution",
                    "label": "Pressure Distribution",
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
                    "type": "single-select",
                    "name": "breathing_comfort",
                    "label": "Breathing Comfort",
                    "options": [
                        {
                            "label": "Comfortable",
                            "value": "comfortable"
                        },
                        {
                            "label": "Mild discomfort",
                            "value": "mild_discomfort"
                        },
                        {
                            "label": "Poor tolerance",
                            "value": "poor_tolerance"
                        }
                    ]
                },
                {
                    "type": "single-select",
                    "name": "sitting_tolerance",
                    "label": "Sitting Tolerance",
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
                    "type": "single-select",
                    "name": "postural_correction",
                    "label": "Postural Correction",
                    "options": [
                        {
                            "label": "Adequate",
                            "value": "adequate"
                        },
                        {
                            "label": "Partial",
                            "value": "partial"
                        },
                        {
                            "label": "Inadequate",
                            "value": "inadequate"
                        }
                    ]
                },
                {
                    "type": "single-select",
                    "name": "brace_strap_security",
                    "label": "Strap Security",
                    "options": [
                        {
                            "label": "Secure",
                            "value": "secure"
                        },
                        {
                            "label": "Loose",
                            "value": "loose"
                        }
                    ]
                },
                {
                    "type": "textarea",
                    "name": "spinal_brace_remark",
                    "label": "Remarks"
                }
            ]
        },
        {
            "title": "Self-care & Education",
            "fields": [
                {
                    "type": "single-select",
                    "name": "donning",
                    "label": "Donning",
                    "options": [
                        {
                            "label": "Independent",
                            "value": "independent"
                        },
                        {
                            "label": "Assisted",
                            "value": "assisted"
                        },
                        {
                            "label": "Unable",
                            "value": "unable"
                        }
                    ]
                },
                {
                    "type": "single-select",
                    "name": "doffing",
                    "label": "Doffing",
                    "options": [
                        {
                            "label": "Independent",
                            "value": "independent"
                        },
                        {
                            "label": "Assisted",
                            "value": "assisted"
                        },
                        {
                            "label": "Unable",
                            "value": "unable"
                        }
                    ]
                },
                {
                    "type": "radio",
                    "name": "wearing_schedule_education",
                    "label": "Wearing Schedule Education",
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
                    "type": "radio",
                    "name": "skin_care_education",
                    "label": "Skin Care Education",
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
                    "type": "radio",
                    "name": "maintenance_education",
                    "label": "Maintenance Education",
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
                    "name": "education_remark",
                    "label": "Remarks"
                }
            ]
        },
        {
            "title": "Outcome",
            "fields": [
                {
                    "type": "single-select",
                    "name": "patient_satisfaction",
                    "label": "Patient Satisfaction",
                    "options": [
                        {
                            "label": "Satisfied",
                            "value": "satisfied"
                        },
                        {
                            "label": "Partial",
                            "value": "partial"
                        },
                        {
                            "label": "Unsatisfied",
                            "value": "unsatisfied"
                        }
                    ]
                },
                {
                    "type": "single-select",
                    "name": "overall_outcome",
                    "label": "Overall Outcome",
                    "options": [
                        {
                            "label": "Achieved",
                            "value": "achieved"
                        },
                        {
                            "label": "Partial",
                            "value": "partial"
                        },
                        {
                            "label": "Not achieved",
                            "value": "not_achieved"
                        }
                    ]
                },
                {
                    "type": "single-select",
                    "name": "functional_level",
                    "label": "Functional Level",
                    "options": [
                        {
                            "label": "Independent",
                            "value": "independent"
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
                    "type": "radio",
                    "name": "ready_for_training",
                    "label": "Ready for Functional Training",
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
                    "name": "outcome_remark",
                    "label": "Remarks"
                }
            ]
        },
        {
            "title": "Plan",
            "fields": [
                {
                    "type": "radio",
                    "name": "continue_device",
                    "label": "Continue Device",
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
                    "type": "radio",
                    "name": "repair_needed",
                    "label": "Repair / Adjustment Needed",
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
                    "type": "single-select",
                    "name": "follow_up",
                    "label": "Follow-up",
                    "options": [
                        {
                            "label": "None",
                            "value": "none"
                        },
                        {
                            "label": "PRN",
                            "value": "prn"
                        },
                        {
                            "label": "Scheduled",
                            "value": "scheduled"
                        }
                    ]
                },
                {
                    "type": "date",
                    "name": "follow_up_date",
                    "label": "Follow-up Date"
                },
                {
                    "type": "textarea",
                    "name": "plan_remark",
                    "label": "Remarks"
                }
            ]
        },
        {
            "title": "Final Supply Documentation",
            "fields": [
                {
                    "type": "file-upload",
                    "name": "final_supply_photo",
                    "label": "Final Supply Photo with Items"
                },
                {
                    "type": "radio",
                    "name": "device_delivered",
                    "label": "Device Delivered",
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
                    "type": "date",
                    "name": "delivery_date",
                    "label": "Delivery Date"
                },
                {
                    "type": "input",
                    "name": "delivered_by",
                    "label": "Delivered By"
                },
                {
                    "type": "radio",
                    "name": "patient_acknowledgement",
                    "label": "Patient / Caregiver Acknowledgement",
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
                    "type": "radio",
                    "name": "endorsed_payment",
                    "label": "Endorsed for Payment",
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
                    "type": "input",
                    "name": "endorsed_by",
                    "label": "Endorsed By"
                },
                {
                    "type": "textarea",
                    "name": "final_supply_remark",
                    "label": "Remarks"
                }
            ]
        }
    ]
}