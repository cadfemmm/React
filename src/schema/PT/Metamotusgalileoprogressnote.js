const SUBJECTIVE = {
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
          "label": "Scenario Training"
        },
        {
          "name": "scenario_types",
          "label": "",
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
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "bus_duration",
              "label": "Duration (min)",
              "type": "input",
              "placeholder": "e.g. 10"
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
              ]
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
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "train_duration",
              "label": "Duration (min)",
              "type": "input",
              "placeholder": "e.g. 10"
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
              ]
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
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "static_others_duration",
              "label": "Duration (min)",
              "type": "input",
              "placeholder": "e.g. 10"
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
              ]
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
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "rowboat_duration",
              "label": "Duration (min)",
              "type": "input",
              "placeholder": "e.g. 10"
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
              ]
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
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "balance_boat_duration",
              "label": "Duration (min)",
              "type": "input",
              "placeholder": "e.g. 10"
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
              ]
            }
          ],
          "showIf": {
            "field": "scenario_types",
            "includes": "dynamic"
          }
        },
        {
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "balance_boat_coins",
              "label": "Coins Collected",
              "type": "input",
              "placeholder": "e.g. 5"
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
              ]
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
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "dynamic_others_duration",
              "label": "Duration (min)",
              "type": "input",
              "placeholder": "e.g. 10"
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
              ]
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
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "chinatown_duration",
              "label": "Duration (min)",
              "type": "input",
              "placeholder": "e.g. 10"
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
              ]
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
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "park1_duration",
              "label": "Duration (min)",
              "type": "input",
              "placeholder": "e.g. 10"
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
              ]
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
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "klcc_park1_duration",
              "label": "Duration (min)",
              "type": "input",
              "placeholder": "e.g. 10"
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
              ]
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
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "century_park_duration",
              "label": "Duration (min)",
              "type": "input",
              "placeholder": "e.g. 10"
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
              ]
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
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "lian_temple_duration",
              "label": "Duration (min)",
              "type": "input",
              "placeholder": "e.g. 10"
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
              ]
            }
          ],
          "showIf": {
            "field": "scenario_types",
            "includes": "walking"
          }
        },
        {
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "lian_temple_coins",
              "label": "Coins Collected",
              "type": "input",
              "placeholder": "e.g. 5"
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
              ]
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
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "walking_others_duration",
              "label": "Duration (min)",
              "type": "input",
              "placeholder": "e.g. 10"
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
              ]
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
          "label": "Slope / Stairs — a. Fountain",
          "showIf": {
            "field": "scenario_types",
            "includes": "slope"
          }
        },
        {
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "fountain_duration",
              "label": "Duration (min)",
              "type": "input",
              "placeholder": "e.g. 10"
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
              ]
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
          "label": "Slope / Stairs — b. Food Market",
          "showIf": {
            "field": "scenario_types",
            "includes": "slope"
          }
        },
        {
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "food_market_duration",
              "label": "Duration (min)",
              "type": "input",
              "placeholder": "e.g. 10"
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
              ]
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
          "label": "Slope / Stairs — c. Wild Adventure",
          "showIf": {
            "field": "scenario_types",
            "includes": "slope"
          }
        },
        {
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "wild_adventure_duration",
              "label": "Duration (min)",
              "type": "input",
              "placeholder": "e.g. 10"
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
              ]
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
          "label": "Slope / Stairs — d. Outdoor Track",
          "showIf": {
            "field": "scenario_types",
            "includes": "slope"
          }
        },
        {
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "outdoor_track_duration",
              "label": "Duration (min)",
              "type": "input",
              "placeholder": "e.g. 10"
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
              ]
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
          "label": "Slope / Stairs — e. Lian Temple Climb",
          "showIf": {
            "field": "scenario_types",
            "includes": "slope"
          }
        },
        {
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "lian_temple_climb_duration",
              "label": "Duration (min)",
              "type": "input",
              "placeholder": "e.g. 10"
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
              ]
            }
          ],
          "showIf": {
            "field": "scenario_types",
            "includes": "slope"
          }
        },
        {
          "type": "row",
          "cols": 2,
          "fields": [
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
              ]
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
          "label": "Slope / Stairs — f. Others",
          "showIf": {
            "field": "scenario_types",
            "includes": "slope"
          }
        },
        {
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "slope_others_duration",
              "label": "Duration (min)",
              "type": "input",
              "placeholder": "e.g. 10"
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
              ]
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
          "name": "session_response",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Tolerated Well",
              "value": "tolerated_well"
            },
            {
              "label": "Fatigued During Session",
              "value": "fatigued"
            },
            {
              "label": "Demonstrated Improved Performance",
              "value": "improved_performance"
            },
            {
              "label": "Demonstrated Reduced Performance",
              "value": "reduced_performance"
            },
            {
              "label": "Adverse Effect During Training",
              "value": "adverse_effect"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Therapist Notes"
        },
        {
          "name": "assessment_therapist_notes",
          "label": "",
          "type": "input",
          "placeholder": "Free text..."
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
          "name": "plan_actions",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Increase Duration",
              "value": "increase_duration"
            },
            {
              "label": "Increase Difficulty Level",
              "value": "increase_difficulty"
            },
            {
              "label": "Progress to New Scenario",
              "value": "progress_new_scenario"
            },
            {
              "label": "Maintain Current Programme",
              "value": "maintain_current"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Therapist Notes"
        },
        {
          "name": "plan_therapist_notes",
          "label": "",
          "type": "input",
          "placeholder": "Free text..."
        }
      ]
    }
  ]
}