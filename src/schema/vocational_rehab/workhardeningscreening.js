const SCHEMA = {
  "title": "Work Hardening Screening Form",
  "sections": [
    {
      "fields": [
        {
          "type": "radio",
          "name": "lift_right_status",
          "label": "Lift - Right Hand",
          "options": [
            {
              "label": "Able",
              "value": "able"
            },
            {
              "label": "Unable",
              "value": "unable"
            },
            {
              "label": "Never perform after injury",
              "value": "never_after_injury"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "lift_right_scale",
          "label": "Pain Scale",
          "min": 0,
          "max": 10,
          "showValue": true,
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
          "showIf": {
            "field": "lift_right_status",
            "equals": "able"
          }
        },
        {
          "type": "input",
          "name": "lift_right_remark",
          "label": "Remark"
        },
        {
          "type": "radio",
          "name": "lift_left_status",
          "label": "Lift - Left Hand",
          "options": [
            {
              "label": "Able",
              "value": "able"
            },
            {
              "label": "Unable",
              "value": "unable"
            },
            {
              "label": "Never perform after injury",
              "value": "never_after_injury"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "lift_left_scale",
          "label": "Pain Scale",
          "min": 0,
          "max": 10,
          "showValue": true,
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
          "showIf": {
            "field": "lift_left_status",
            "equals": "able"
          }
        },
        {
          "type": "input",
          "name": "lift_left_remark",
          "label": "Remark"
        },
        {
          "type": "radio",
          "name": "carry_right_status",
          "label": "Carry - Right Hand",
          "options": [
            {
              "label": "Able",
              "value": "able"
            },
            {
              "label": "Unable",
              "value": "unable"
            },
            {
              "label": "Never perform after injury",
              "value": "never_after_injury"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "carry_right_scale",
          "label": "Pain Scale",
          "min": 0,
          "max": 10,
          "showValue": true,
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
          "showIf": {
            "field": "carry_right_status",
            "equals": "able"
          }
        },
        {
          "type": "input",
          "name": "carry_right_remark",
          "label": "Remark"
        },
        {
          "type": "radio",
          "name": "carry_left_status",
          "label": "Carry - Left Hand",
          "options": [
            {
              "label": "Able",
              "value": "able"
            },
            {
              "label": "Unable",
              "value": "unable"
            },
            {
              "label": "Never perform after injury",
              "value": "never_after_injury"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "carry_left_scale",
          "label": "Pain Scale",
          "min": 0,
          "max": 10,
          "showValue": true,
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
          "showIf": {
            "field": "carry_left_status",
            "equals": "able"
          }
        },
        {
          "type": "input",
          "name": "carry_left_remark",
          "label": "Remark"
        },
        {
          "type": "radio",
          "name": "push_right_status",
          "label": "Push - Right Hand",
          "options": [
            {
              "label": "Able",
              "value": "able"
            },
            {
              "label": "Unable",
              "value": "unable"
            },
            {
              "label": "Never perform after injury",
              "value": "never_after_injury"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "push_right_scale",
          "label": "Pain Scale",
          "min": 0,
          "max": 10,
          "showValue": true,
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
          "showIf": {
            "field": "push_right_status",
            "equals": "able"
          }
        },
        {
          "type": "input",
          "name": "push_right_remark",
          "label": "Remark"
        },
        {
          "type": "radio",
          "name": "push_left_status",
          "label": "Push - Left Hand",
          "options": [
            {
              "label": "Able",
              "value": "able"
            },
            {
              "label": "Unable",
              "value": "unable"
            },
            {
              "label": "Never perform after injury",
              "value": "never_after_injury"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "push_left_scale",
          "label": "Pain Scale",
          "min": 0,
          "max": 10,
          "showValue": true,
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
          "showIf": {
            "field": "push_left_status",
            "equals": "able"
          }
        },
        {
          "type": "input",
          "name": "push_left_remark",
          "label": "Remark"
        },
        {
          "type": "radio",
          "name": "pull_right_status",
          "label": "Pull - Right Hand",
          "options": [
            {
              "label": "Able",
              "value": "able"
            },
            {
              "label": "Unable",
              "value": "unable"
            },
            {
              "label": "Never perform after injury",
              "value": "never_after_injury"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "pull_right_scale",
          "label": "Pain Scale",
          "min": 0,
          "max": 10,
          "showValue": true,
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
          "showIf": {
            "field": "pull_right_status",
            "equals": "able"
          }
        },
        {
          "type": "input",
          "name": "pull_right_remark",
          "label": "Remark"
        },
        {
          "type": "radio",
          "name": "pull_left_status",
          "label": "Pull - Left Hand",
          "options": [
            {
              "label": "Able",
              "value": "able"
            },
            {
              "label": "Unable",
              "value": "unable"
            },
            {
              "label": "Never perform after injury",
              "value": "never_after_injury"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "pull_left_scale",
          "label": "Pain Scale",
          "min": 0,
          "max": 10,
          "showValue": true,
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
          "showIf": {
            "field": "pull_left_status",
            "equals": "able"
          }
        },
        {
          "type": "input",
          "name": "pull_left_remark",
          "label": "Remark"
        },
        {
          "type": "radio",
          "name": "stand_status",
          "label": "Stand",
          "options": [
            {
              "label": "Able",
              "value": "able"
            },
            {
              "label": "Unable",
              "value": "unable"
            },
            {
              "label": "Never perform after injury",
              "value": "never_after_injury"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "stand_scale",
          "label": "Pain Scale",
          "min": 0,
          "max": 10,
          "showValue": true,
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
          "showIf": {
            "field": "stand_status",
            "equals": "able"
          }
        },
        {
          "type": "input",
          "name": "stand_remark",
          "label": "Remark"
        },
        {
          "type": "radio",
          "name": "sit_status",
          "label": "Sit",
          "options": [
            {
              "label": "Able",
              "value": "able"
            },
            {
              "label": "Unable",
              "value": "unable"
            },
            {
              "label": "Never perform after injury",
              "value": "never_after_injury"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "sit_scale",
          "label": "Pain Scale",
          "min": 0,
          "max": 10,
          "showValue": true,
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
          "showIf": {
            "field": "sit_status",
            "equals": "able"
          }
        },
        {
          "type": "input",
          "name": "sit_remark",
          "label": "Remark"
        },
        {
          "type": "radio",
          "name": "squat_status",
          "label": "Squat",
          "options": [
            {
              "label": "Able",
              "value": "able"
            },
            {
              "label": "Unable",
              "value": "unable"
            },
            {
              "label": "Never perform after injury",
              "value": "never_after_injury"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "squat_scale",
          "label": "Pain Scale",
          "min": 0,
          "max": 10,
          "showValue": true,
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
          "showIf": {
            "field": "squat_status",
            "equals": "able"
          }
        },
        {
          "type": "input",
          "name": "squat_remark",
          "label": "Remark"
        },
        {
          "type": "radio",
          "name": "kneel_status",
          "label": "Kneel",
          "options": [
            {
              "label": "Able",
              "value": "able"
            },
            {
              "label": "Unable",
              "value": "unable"
            },
            {
              "label": "Never perform after injury",
              "value": "never_after_injury"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "kneel_scale",
          "label": "Pain Scale",
          "min": 0,
          "max": 10,
          "showValue": true,
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
          "showIf": {
            "field": "kneel_status",
            "equals": "able"
          }
        },
        {
          "type": "input",
          "name": "kneel_remark",
          "label": "Remark"
        },
        {
          "type": "radio",
          "name": "walk_status",
          "label": "Walk",
          "options": [
            {
              "label": "Able",
              "value": "able"
            },
            {
              "label": "Unable",
              "value": "unable"
            },
            {
              "label": "Never perform after injury",
              "value": "never_after_injury"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "walk_scale",
          "label": "Pain Scale",
          "min": 0,
          "max": 10,
          "showValue": true,
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
          "showIf": {
            "field": "walk_status",
            "equals": "able"
          }
        },
        {
          "type": "input",
          "name": "walk_remark",
          "label": "Remark"
        },
        {
          "type": "radio",
          "name": "wheelchair_type",
          "label": "Wheelchair",
          "options": [
            {
              "label": "Not related",
              "value": "not_related"
            },
            {
              "label": "Self-manoeuvre",
              "value": "self_manoeuvre"
            },
            {
              "label": "Assisted",
              "value": "assisted"
            }
          ]
        },
        {
          "type": "radio",
          "name": "wheelchair_status",
          "label": "Wheelchair Difficulty",
          "options": [
            {
              "label": "Able",
              "value": "able"
            },
            {
              "label": "Unable",
              "value": "unable"
            },
            {
              "label": "Never perform after injury",
              "value": "never_after_injury"
            }
          ],
          "showIf": {
            "field": "wheelchair_type",
            "oneOf": [
              "self_manoeuvre",
              "assisted"
            ]
          }
        },
        {
          "type": "scale-slider",
          "name": "wheelchair_scale",
          "label": "Pain Scale",
          "min": 0,
          "max": 10,
          "showValue": true,
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
          "showIf": {
            "field": "wheelchair_type",
            "oneOf": [
              "self_manoeuvre",
              "assisted"
            ]
          }
        },
        {
          "type": "input",
          "name": "wheelchair_remark",
          "label": "Remark",
          "showIf": {
            "field": "wheelchair_type",
            "oneOf": [
              "self_manoeuvre",
              "assisted"
            ]
          }
        },
        {
          "type": "radio",
          "name": "stairs_status",
          "label": "Stairs",
          "options": [
            {
              "label": "Able",
              "value": "able"
            },
            {
              "label": "Unable",
              "value": "unable"
            },
            {
              "label": "Never perform after injury",
              "value": "never_after_injury"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "stairs_scale",
          "label": "Pain Scale",
          "min": 0,
          "max": 10,
          "showValue": true,
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
          "showIf": {
            "field": "stairs_status",
            "equals": "able"
          }
        },
        {
          "type": "input",
          "name": "stairs_remark",
          "label": "Remark"
        },
        {
          "type": "radio",
          "name": "ladder_status",
          "label": "Ladder",
          "options": [
            {
              "label": "Able",
              "value": "able"
            },
            {
              "label": "Unable",
              "value": "unable"
            },
            {
              "label": "Never perform after injury",
              "value": "never_after_injury"
            }
          ]
        },
        {
          "type": "scale-slider",
          "name": "ladder_scale",
          "label": "Pain Scale",
          "min": 0,
          "max": 10,
          "showValue": true,
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
          "showIf": {
            "field": "ladder_status",
            "equals": "able"
          }
        },
        {
          "type": "input",
          "name": "ladder_remark",
          "label": "Remark"
        }
      ]
    }
  ]
}