const SCHEMA = {
    "title": "Locomotor Capabilities Index-5 (LCI-5)",
    "sections": [
        {
            "enableScoreToggle": true,
            "actions": [
                {
                    "type": "toggle-show-scores",
                    "label": "Doctor View"
                }
            ],
            "fields": [
                {
                    "type": "subheading",
                    "label": "Scale Description"
                },
                {
                    "type": "info-text",
                    "text": [
                        "0 = No",
                        "1 = Yes with help",
                        "2 = Yes with supervision",
                        "3 = Yes alone with aid(s)",
                        "4 = Yes alone, no aids"
                    ]
                },
                {
                    "type": "subheading",
                    "label": "Basic Activities"
                },
                {
                    "type": "radio-matrix",
                    "name": "get_up_from_chair",
                    "label": "Get up from a chair",
                    "options": [
                        {
                            "label": "0",
                            "value": 0
                        },
                        {
                            "label": "1",
                            "value": 1
                        },
                        {
                            "label": "2",
                            "value": 2
                        },
                        {
                            "label": "3",
                            "value": 3
                        },
                        {
                            "label": "4",
                            "value": 4
                        }
                    ],
                    "matrixHeaderLabel": "Score"
                },
                {
                    "type": "radio-matrix",
                    "name": "walk_house",
                    "label": "Walk in the house",
                    "options": [
                        {
                            "label": "0",
                            "value": 0
                        },
                        {
                            "label": "1",
                            "value": 1
                        },
                        {
                            "label": "2",
                            "value": 2
                        },
                        {
                            "label": "3",
                            "value": 3
                        },
                        {
                            "label": "4",
                            "value": 4
                        }
                    ]
                },
                {
                    "type": "radio-matrix",
                    "name": "walk_even_ground",
                    "label": "Walk outside on even ground",
                    "options": [
                        {
                            "label": "0",
                            "value": 0
                        },
                        {
                            "label": "1",
                            "value": 1
                        },
                        {
                            "label": "2",
                            "value": 2
                        },
                        {
                            "label": "3",
                            "value": 3
                        },
                        {
                            "label": "4",
                            "value": 4
                        }
                    ]
                },
                {
                    "type": "radio-matrix",
                    "name": "stairs_up_handrail",
                    "label": "Go up the stairs with a handrail",
                    "options": [
                        {
                            "label": "0",
                            "value": 0
                        },
                        {
                            "label": "1",
                            "value": 1
                        },
                        {
                            "label": "2",
                            "value": 2
                        },
                        {
                            "label": "3",
                            "value": 3
                        },
                        {
                            "label": "4",
                            "value": 4
                        }
                    ]
                },
                {
                    "type": "radio-matrix",
                    "name": "stairs_down_handrail",
                    "label": "Go down the stairs with a handrail",
                    "options": [
                        {
                            "label": "0",
                            "value": 0
                        },
                        {
                            "label": "1",
                            "value": 1
                        },
                        {
                            "label": "2",
                            "value": 2
                        },
                        {
                            "label": "3",
                            "value": 3
                        },
                        {
                            "label": "4",
                            "value": 4
                        }
                    ]
                },
                {
                    "type": "radio-matrix",
                    "name": "step_up_curb",
                    "label": "Step up a sidewalk curb",
                    "options": [
                        {
                            "label": "0",
                            "value": 0
                        },
                        {
                            "label": "1",
                            "value": 1
                        },
                        {
                            "label": "2",
                            "value": 2
                        },
                        {
                            "label": "3",
                            "value": 3
                        },
                        {
                            "label": "4",
                            "value": 4
                        }
                    ]
                },
                {
                    "type": "radio-matrix",
                    "name": "step_down_curb",
                    "label": "Step down a sidewalk curb",
                    "options": [
                        {
                            "label": "0",
                            "value": 0
                        },
                        {
                            "label": "1",
                            "value": 1
                        },
                        {
                            "label": "2",
                            "value": 2
                        },
                        {
                            "label": "3",
                            "value": 3
                        },
                        {
                            "label": "4",
                            "value": 4
                        }
                    ]
                },
                {
                    "type": "score-box",
                    "name": "basic_activities_score",
                    "label": "Basic Activities Score (/28)"
                },
                {
                    "type": "subheading",
                    "label": "Advanced Activities"
                },
                {
                    "type": "radio-matrix",
                    "name": "pick_object_floor",
                    "label": "Pick up an object from the floor (when standing with your prosthesis)",
                    "options": [
                        {
                            "label": "0",
                            "value": 0
                        },
                        {
                            "label": "1",
                            "value": 1
                        },
                        {
                            "label": "2",
                            "value": 2
                        },
                        {
                            "label": "3",
                            "value": 3
                        },
                        {
                            "label": "4",
                            "value": 4
                        }
                    ],
                    "matrixHeaderLabel": "Score"
                },
                {
                    "type": "radio-matrix",
                    "name": "get_up_floor",
                    "label": "Get up from the floor (e.g. if you fell)",
                    "options": [
                        {
                            "label": "0",
                            "value": 0
                        },
                        {
                            "label": "1",
                            "value": 1
                        },
                        {
                            "label": "2",
                            "value": 2
                        },
                        {
                            "label": "3",
                            "value": 3
                        },
                        {
                            "label": "4",
                            "value": 4
                        }
                    ]
                },
                {
                    "type": "radio-matrix",
                    "name": "walk_uneven_ground",
                    "label": "Walk outside on uneven ground (grass, gravel, slope)",
                    "options": [
                        {
                            "label": "0",
                            "value": 0
                        },
                        {
                            "label": "1",
                            "value": 1
                        },
                        {
                            "label": "2",
                            "value": 2
                        },
                        {
                            "label": "3",
                            "value": 3
                        },
                        {
                            "label": "4",
                            "value": 4
                        }
                    ]
                },
                {
                    "type": "radio-matrix",
                    "name": "walk_bad_weather",
                    "label": "Walk outside in inclement weather (snow, rain, ice)",
                    "options": [
                        {
                            "label": "0",
                            "value": 0
                        },
                        {
                            "label": "1",
                            "value": 1
                        },
                        {
                            "label": "2",
                            "value": 2
                        },
                        {
                            "label": "3",
                            "value": 3
                        },
                        {
                            "label": "4",
                            "value": 4
                        }
                    ]
                },
                {
                    "type": "radio-matrix",
                    "name": "stairs_up_no_handrail",
                    "label": "Go up a few steps (stairs) without a handrail",
                    "options": [
                        {
                            "label": "0",
                            "value": 0
                        },
                        {
                            "label": "1",
                            "value": 1
                        },
                        {
                            "label": "2",
                            "value": 2
                        },
                        {
                            "label": "3",
                            "value": 3
                        },
                        {
                            "label": "4",
                            "value": 4
                        }
                    ]
                },
                {
                    "type": "radio-matrix",
                    "name": "stairs_down_no_handrail",
                    "label": "Go down a few steps (stairs) without a handrail",
                    "options": [
                        {
                            "label": "0",
                            "value": 0
                        },
                        {
                            "label": "1",
                            "value": 1
                        },
                        {
                            "label": "2",
                            "value": 2
                        },
                        {
                            "label": "3",
                            "value": 3
                        },
                        {
                            "label": "4",
                            "value": 4
                        }
                    ]
                },
                {
                    "type": "radio-matrix",
                    "name": "walk_carry_object",
                    "label": "Walk while carrying an object",
                    "options": [
                        {
                            "label": "0",
                            "value": 0
                        },
                        {
                            "label": "1",
                            "value": 1
                        },
                        {
                            "label": "2",
                            "value": 2
                        },
                        {
                            "label": "3",
                            "value": 3
                        },
                        {
                            "label": "4",
                            "value": 4
                        }
                    ]
                },
                {
                    "type": "score-box",
                    "name": "advanced_activities_score",
                    "label": "Advanced Activities Score (/28)"
                },
                {
                    "type": "score-box",
                    "name": "total_score",
                    "label": "Total Score (/56)"
                }
            ]
        }
    ]
}