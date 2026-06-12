const INDICATION = {
    "title": "MetaMotus™ Galileo — Initial Assessment",
    "sections": [
        {
            "title": "Indication Category (tick which is applicable)",
            "fields": [
                {
                    "name": "indication_category",
                    "label": "",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Musculoskeletal",
                            "value": "musculoskeletal"
                        },
                        {
                            "label": "Neurological",
                            "value": "neurological"
                        },
                        {
                            "label": "Amputation",
                            "value": "amputation"
                        },
                        {
                            "label": "Spinal Cord Injury",
                            "value": "sci"
                        },
                        {
                            "label": "Psychological / Cognitive",
                            "value": "psych_cog"
                        }
                    ]
                }
            ]
        }
    ]
}

const SUBJECTIVE ={
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
                    "label": "Chief Complaint"
                },
                {
                    "name": "chief_complaint",
                    "label": "",
                    "type": "input",
                    "placeholder": "Free text..."
                },
                {
                    "name": "hpi",
                    "label": "History of Presenting Illness (HPI)",
                    "type": "input"
                },
                {
                    "type": "subheading",
                    "label": "Pain Assessment"
                },
                {
                    "name": "vas_score",
                    "label": "VAS Score (≤5 required)",
                    "type": "scale-slider",
                    "min": 0,
                    "max": 10,
                    "step": 1,
                    "ranges": [
                        {
                            "from": 0,
                            "to": 2,
                            "color": "#22c55e",
                            "label": "No Pain"
                        },
                        {
                            "from": 3,
                            "to": 4,
                            "color": "#84cc16",
                            "label": "Mild"
                        },
                        {
                            "from": 5,
                            "to": 5,
                            "color": "#f59e0b",
                            "label": "Moderate"
                        },
                        {
                            "from": 6,
                            "to": 8,
                            "color": "#f97316",
                            "label": "Severe"
                        },
                        {
                            "from": 9,
                            "to": 10,
                            "color": "#ef4444",
                            "label": "Worst Pain"
                        }
                    ]
                },
                {
                    "name": "pain_remarks",
                    "label": "Pain Remarks",
                    "type": "input",
                    "placeholder": "Free text..."
                },
                {
                    "type": "subheading",
                    "label": "Functional Limitations"
                },
                {
                    "name": "walking_tolerance",
                    "label": "Walking Tolerance",
                    "type": "radio",
                    "options": [
                        {
                            "label": "≥10 minutes",
                            "value": "gte10"
                        },
                        {
                            "label": "<10 minutes",
                            "value": "lt10"
                        }
                    ]
                },
                {
                    "name": "assistive_devices",
                    "label": "Assistive Devices",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "None",
                            "value": "none"
                        },
                        {
                            "label": "Walking stick",
                            "value": "walking_stick"
                        },
                        {
                            "label": "Elbow crutches",
                            "value": "elbow_crutches"
                        },
                        {
                            "label": "Axillary crutches",
                            "value": "axillary_crutches"
                        },
                        {
                            "label": "Others",
                            "value": "others"
                        }
                    ]
                },
                {
                    "name": "assistive_others",
                    "label": "Specify Others",
                    "type": "input",
                    "placeholder": "Specify...",
                    "showIf": {
                        "field": "assistive_devices",
                        "includes": "others"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Safety / Hygiene Checks"
                },
                {
                    "name": "safety_checks",
                    "label": "",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Hx of seizure",
                            "value": "seizure"
                        },
                        {
                            "label": "Unstable fracture",
                            "value": "fracture"
                        },
                        {
                            "label": "Moderate / severe cognitive impairment",
                            "value": "cognitive"
                        },
                        {
                            "label": "Skin issue (wound, dry skin)",
                            "value": "skin"
                        },
                        {
                            "label": "Incontinence",
                            "value": "incontinence"
                        }
                    ]
                }
            ]
        }
    ]
}

const OBJECTIVE = {
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
                    "label": "Motion Sickness Screening (1-minute screen exposure)"
                },
                {
                    "name": "motion_sickness",
                    "label": "Result",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Pass",
                            "value": "pass"
                        },
                        {
                            "label": "Fail",
                            "value": "fail"
                        }
                    ]
                },
                {
                    "type": "subheading",
                    "label": "Basic Functional Screening"
                },
                {
                    "name": "standing_ability",
                    "label": "Standing Ability",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Independent",
                            "value": "independent"
                        },
                        {
                            "label": "With assistance",
                            "value": "with_assistance"
                        },
                        {
                            "label": "Unable",
                            "value": "unable"
                        }
                    ]
                },
                {
                    "name": "balance",
                    "label": "Balance",
                    "type": "radio",
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
                            "label": "High fall risk",
                            "value": "high_fall_risk"
                        }
                    ]
                },
                {
                    "type": "subheading",
                    "label": "Scenario Test"
                },
                {
                    "name": "scenario_types",
                    "label": "Select applicable scenarios",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Static standing (Transportation scenario)",
                            "value": "static"
                        },
                        {
                            "label": "Dynamic standing (Transportation scenario)",
                            "value": "dynamic"
                        },
                        {
                            "label": "Walking",
                            "value": "walking"
                        },
                        {
                            "label": "Slope / Stairs",
                            "value": "slope"
                        },
                        {
                            "label": "Cognitive",
                            "value": "cognitive"
                        },
                        {
                            "label": "Psychological",
                            "value": "psychological"
                        }
                    ]
                },
                {
                    "type": "subheading",
                    "label": "Static — a. Bus",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "static"
                    }
                },
                {
                    "name": "bus_duration",
                    "label": "Duration (min)",
                    "type": "input",
                    "placeholder": "e.g. 10",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "static"
                    }
                },
                {
                    "name": "bus_difficulty",
                    "label": "Difficulty Level",
                    "type": "single-select",
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
                        "field": "scenario_types",
                        "includes": "static"
                    }
                },
                {
                    "name": "bus_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Free text...",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "static"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Static — b. Train",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "static"
                    }
                },
                {
                    "name": "train_duration",
                    "label": "Duration (min)",
                    "type": "input",
                    "placeholder": "e.g. 10",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "static"
                    }
                },
                {
                    "name": "train_difficulty",
                    "label": "Difficulty Level",
                    "type": "single-select",
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
                        "field": "scenario_types",
                        "includes": "static"
                    }
                },
                {
                    "name": "train_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Free text...",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "static"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Static — c. Others",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "static"
                    }
                },
                {
                    "name": "static_others_duration",
                    "label": "Duration (min)",
                    "type": "input",
                    "placeholder": "e.g. 10",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "static"
                    }
                },
                {
                    "name": "static_others_difficulty",
                    "label": "Difficulty Level",
                    "type": "single-select",
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
                        "field": "scenario_types",
                        "includes": "static"
                    }
                },
                {
                    "name": "static_others_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Free text...",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "static"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Dynamic — a. Rowboat",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "dynamic"
                    }
                },
                {
                    "name": "rowboat_duration",
                    "label": "Duration (min)",
                    "type": "input",
                    "placeholder": "e.g. 10",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "dynamic"
                    }
                },
                {
                    "name": "rowboat_difficulty",
                    "label": "Difficulty Level",
                    "type": "single-select",
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
                        "field": "scenario_types",
                        "includes": "dynamic"
                    }
                },
                {
                    "name": "rowboat_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Free text...",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "dynamic"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Dynamic — b. Balance Boat",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "dynamic"
                    }
                },
                {
                    "name": "balance_boat_duration",
                    "label": "Duration (min)",
                    "type": "input",
                    "placeholder": "e.g. 10",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "dynamic"
                    }
                },
                {
                    "name": "balance_boat_difficulty",
                    "label": "Difficulty Level",
                    "type": "single-select",
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
                        "field": "scenario_types",
                        "includes": "dynamic"
                    }
                },
                {
                    "name": "balance_boat_coins",
                    "label": "Coins Collected",
                    "type": "input",
                    "placeholder": "e.g. 5",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "dynamic"
                    }
                },
                {
                    "name": "balance_boat_weather",
                    "label": "Weather Selected",
                    "type": "single-select",
                    "options": [
                        {
                            "label": "Sunny",
                            "value": "sunny"
                        },
                        {
                            "label": "Overcast",
                            "value": "overcast"
                        },
                        {
                            "label": "Foggy",
                            "value": "foggy"
                        },
                        {
                            "label": "Rain",
                            "value": "rain"
                        },
                        {
                            "label": "Thunderstorm",
                            "value": "thunderstorm"
                        },
                        {
                            "label": "Snow",
                            "value": "snow"
                        },
                        {
                            "label": "Blizzard",
                            "value": "blizzard"
                        },
                        {
                            "label": "Sanddust",
                            "value": "sanddust"
                        }
                    ],
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "dynamic"
                    }
                },
                {
                    "name": "balance_boat_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Free text...",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "dynamic"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Dynamic — c. Others",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "dynamic"
                    }
                },
                {
                    "name": "dynamic_others_duration",
                    "label": "Duration (min)",
                    "type": "input",
                    "placeholder": "e.g. 10",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "dynamic"
                    }
                },
                {
                    "name": "dynamic_others_difficulty",
                    "label": "Difficulty Level",
                    "type": "single-select",
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
                        "field": "scenario_types",
                        "includes": "dynamic"
                    }
                },
                {
                    "name": "dynamic_others_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Free text...",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "dynamic"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Walking — a. Chinatown",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "name": "chinatown_duration",
                    "label": "Duration (min)",
                    "type": "input",
                    "placeholder": "e.g. 10",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "name": "chinatown_difficulty",
                    "label": "Difficulty Level",
                    "type": "single-select",
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
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "name": "chinatown_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Free text...",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Walking — b. Park 1",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "name": "park1_duration",
                    "label": "Duration (min)",
                    "type": "input",
                    "placeholder": "e.g. 10",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "name": "park1_difficulty",
                    "label": "Difficulty Level",
                    "type": "single-select",
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
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "name": "park1_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Free text...",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Walking — c. KLCC Park 1",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "name": "klcc_park1_duration",
                    "label": "Duration (min)",
                    "type": "input",
                    "placeholder": "e.g. 10",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "name": "klcc_park1_difficulty",
                    "label": "Difficulty Level",
                    "type": "single-select",
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
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "name": "klcc_park1_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Free text...",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Walking — d. Century Park",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "name": "century_park_duration",
                    "label": "Duration (min)",
                    "type": "input",
                    "placeholder": "e.g. 10",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "name": "century_park_difficulty",
                    "label": "Difficulty Level",
                    "type": "single-select",
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
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "name": "century_park_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Free text...",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Walking — e. Lian Temple",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "name": "lian_temple_duration",
                    "label": "Duration (min)",
                    "type": "input",
                    "placeholder": "e.g. 10",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "name": "lian_temple_difficulty",
                    "label": "Difficulty Level",
                    "type": "single-select",
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
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "name": "lian_temple_coins",
                    "label": "Coins Collected",
                    "type": "input",
                    "placeholder": "e.g. 5",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "name": "lian_temple_weather",
                    "label": "Weather Selected",
                    "type": "single-select",
                    "options": [
                        {
                            "label": "Sunny",
                            "value": "sunny"
                        },
                        {
                            "label": "Overcast",
                            "value": "overcast"
                        },
                        {
                            "label": "Foggy",
                            "value": "foggy"
                        },
                        {
                            "label": "Rain",
                            "value": "rain"
                        },
                        {
                            "label": "Thunderstorm",
                            "value": "thunderstorm"
                        },
                        {
                            "label": "Snow",
                            "value": "snow"
                        },
                        {
                            "label": "Blizzard",
                            "value": "blizzard"
                        },
                        {
                            "label": "Sanddust",
                            "value": "sanddust"
                        }
                    ],
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "name": "lian_temple_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Free text...",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Walking — f. Others",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "name": "walking_others_duration",
                    "label": "Duration (min)",
                    "type": "input",
                    "placeholder": "e.g. 10",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "name": "walking_others_difficulty",
                    "label": "Difficulty Level",
                    "type": "single-select",
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
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "name": "walking_others_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Free text...",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "walking"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Slope — a. Fountain",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "name": "fountain_duration",
                    "label": "Duration (min)",
                    "type": "input",
                    "placeholder": "e.g. 10",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "name": "fountain_difficulty",
                    "label": "Difficulty Level",
                    "type": "single-select",
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
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "name": "fountain_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Free text...",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Slope — b. Food Market",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "name": "food_market_duration",
                    "label": "Duration (min)",
                    "type": "input",
                    "placeholder": "e.g. 10",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "name": "food_market_difficulty",
                    "label": "Difficulty Level",
                    "type": "single-select",
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
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "name": "food_market_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Free text...",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Slope — c. Wild Adventure",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "name": "wild_adventure_duration",
                    "label": "Duration (min)",
                    "type": "input",
                    "placeholder": "e.g. 10",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "name": "wild_adventure_difficulty",
                    "label": "Difficulty Level",
                    "type": "single-select",
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
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "name": "wild_adventure_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Free text...",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Slope — d. Outdoor Track",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "name": "outdoor_track_duration",
                    "label": "Duration (min)",
                    "type": "input",
                    "placeholder": "e.g. 10",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "name": "outdoor_track_difficulty",
                    "label": "Difficulty Level",
                    "type": "single-select",
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
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "name": "outdoor_track_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Free text...",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Slope — e. Lian Temple Climb",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "name": "lian_temple_climb_duration",
                    "label": "Duration (min)",
                    "type": "input",
                    "placeholder": "e.g. 10",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "name": "lian_temple_climb_difficulty",
                    "label": "Difficulty Level",
                    "type": "single-select",
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
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "name": "lian_temple_climb_weather",
                    "label": "Weather Selected",
                    "type": "single-select",
                    "options": [
                        {
                            "label": "Sunny",
                            "value": "sunny"
                        },
                        {
                            "label": "Overcast",
                            "value": "overcast"
                        },
                        {
                            "label": "Foggy",
                            "value": "foggy"
                        },
                        {
                            "label": "Rain",
                            "value": "rain"
                        },
                        {
                            "label": "Thunderstorm",
                            "value": "thunderstorm"
                        },
                        {
                            "label": "Snow",
                            "value": "snow"
                        },
                        {
                            "label": "Blizzard",
                            "value": "blizzard"
                        },
                        {
                            "label": "Sanddust",
                            "value": "sanddust"
                        }
                    ],
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "name": "lian_temple_climb_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Free text...",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Slope — f. Others",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "name": "slope_others_duration",
                    "label": "Duration (min)",
                    "type": "input",
                    "placeholder": "e.g. 10",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "name": "slope_others_difficulty",
                    "label": "Difficulty Level",
                    "type": "single-select",
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
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "name": "slope_others_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Free text...",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "slope"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Cognitive — a. Grocery",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "cognitive"
                    }
                },
                {
                    "name": "cognitive_grocery",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Free text...",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "cognitive"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Cognitive — b. Food Market",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "cognitive"
                    }
                },
                {
                    "name": "cognitive_food_market",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Free text...",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "cognitive"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Psychological — a. Glass Trestle",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "psychological"
                    }
                },
                {
                    "name": "psych_glass_trestle",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Free text...",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "psychological"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Psychological — b. Earthquake",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "psychological"
                    }
                },
                {
                    "name": "psych_earthquake",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Free text...",
                    "showIf": {
                        "field": "scenario_types",
                        "includes": "psychological"
                    }
                },
                {
                    "type": "subheading",
                    "label": "4. MetaMotus Galileo Evaluation Report"
                },
                {
                    "name": "gait_pdf",
                    "label": "Upload Gait Parameter PDF",
                    "type": "file-upload"
                },
                {
                    "name": "gait_remarks",
                    "label": "Remarks",
                    "type": "input",
                    "placeholder": "Free text..."
                },
                {
                    "type": "subheading",
                    "label": " Vital Signs"
                },
                {
                    "type": "row",
                    "fields": [
                        {
                            "name": "bp_systolic",
                            "label": "BP Systolic (mmHg)",
                            "type": "input",
                            "placeholder": "120"
                        },
                        {
                            "name": "bp_diastolic",
                            "label": "BP Diastolic (mmHg)",
                            "type": "input",
                            "placeholder": "80"
                        },
                        {
                            "name": "heart_rate",
                            "label": "Heart Rate (bpm)",
                            "type": "input",
                            "placeholder": "72"
                        },
                        {
                            "name": "temperature",
                            "label": "Temperature (°C)",
                            "type": "input",
                            "placeholder": "36.5"
                        },
                        {
                            "name": "spo2",
                            "label": "SpO₂ (%)",
                            "type": "input",
                            "placeholder": "98"
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
                    "name": "suitability",
                    "label": "Suitability",
                    "type": "radio",
                    "options": [
                        {
                            "label": "Suitable",
                            "value": "suitable"
                        },
                        {
                            "label": "Suitable with adaptation/assistance",
                            "value": "suitable_adapted"
                        },
                        {
                            "label": "Not suitable",
                            "value": "not_suitable"
                        }
                    ]
                },
                {
                    "type": "subheading",
                    "label": "Problem Identifications"
                },
                {
                    "name": "problems",
                    "label": "",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Balance",
                            "value": "balance"
                        },
                        {
                            "label": "Core stability",
                            "value": "core_stability"
                        },
                        {
                            "label": "Gait & walking",
                            "value": "gait"
                        },
                        {
                            "label": "Weight distribution",
                            "value": "weight_dist"
                        },
                        {
                            "label": "Coordination",
                            "value": "coordination"
                        },
                        {
                            "label": "Perturbation",
                            "value": "perturbation"
                        },
                        {
                            "label": "Righting Reaction",
                            "value": "righting"
                        },
                        {
                            "label": "Reaction Time",
                            "value": "reaction_time"
                        },
                        {
                            "label": "Strength",
                            "value": "strength"
                        },
                        {
                            "label": "Endurance",
                            "value": "endurance"
                        },
                        {
                            "label": "ROM and flexibility",
                            "value": "rom"
                        },
                        {
                            "label": "Cognitive deficits (attention / concentration / following instructions)",
                            "value": "cognitive"
                        },
                        {
                            "label": "Psychological issues (fear, anxiety, hypersensitive, PTSD)",
                            "value": "psychological"
                        },
                        {
                            "label": "Others",
                            "value": "others"
                        }
                    ]
                },
                {
                    "name": "problems_others",
                    "label": "Specify Others",
                    "type": "input",
                    "placeholder": "Describe...",
                    "showIf": {
                        "field": "problems",
                        "includes": "others"
                    }
                },
                {
                    "type": "subheading",
                    "label": "Clinical Reasoning"
                },
                {
                    "name": "clinical_reasoning",
                    "label": "",
                    "type": "input",
                    "placeholder": "Free text..."
                }
            ]
        }
    ]
}

const PLAN = {
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
                    "type": "subheading",
                    "label": "Training Components"
                },
                {
                    "name": "training_components",
                    "label": "",
                    "type": "checkbox-group",
                    "options": [
                        {
                            "label": "Balance Training",
                            "value": "balance"
                        },
                        {
                            "label": "Gait Training",
                            "value": "gait"
                        },
                        {
                            "label": "Endurance Training",
                            "value": "endurance"
                        },
                        {
                            "label": "Cognitive Training",
                            "value": "cognitive"
                        },
                        {
                            "label": "ADL Training",
                            "value": "adl"
                        },
                        {
                            "label": "Psychological Training",
                            "value": "psychological"
                        }
                    ]
                },
                {
                    "type": "subheading",
                    "label": "Initial Setup"
                },
                {
                    "name": "harness",
                    "label": "Harness",
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
                    ]
                },
                {
                    "name": "support_level",
                    "label": "Support Level",
                    "type": "radio",
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
                            "label": "Minimal",
                            "value": "minimal"
                        }
                    ]
                },
                {
                    "name": "session_duration",
                    "label": "Session Duration",
                    "type": "input",
                    "placeholder": "e.g. 30 minutes"
                },
                {
                    "type": "subheading",
                    "label": "Post-Session Evaluation"
                },
                {
                    "name": "post_session",
                    "label": "Post session",
                    "type": "radio",
                    "options": [
                        {
                            "label": "No adverse effects",
                            "value": "no_adverse"
                        },
                        {
                            "label": "Adverse effects",
                            "value": "adverse"
                        }
                    ]
                },
                {
                    "name": "adverse_details",
                    "label": "Describe Adverse Effects",
                    "type": "input",
                    "placeholder": "Free text...",
                    "showIf": {
                        "field": "post_session",
                        "equals": "adverse"
                    }
                }
            ]
        }
    ]
}