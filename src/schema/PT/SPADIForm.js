const SCHEMA = {
  "title": "Shoulder Pain & Disability Index (SPADI)",
  "sections": [
    {
      "fields": [
        {
          "type": "accordion",
          "name": "spadi_pain",
          "label": "PAIN",
          "defaultOpen": true,
          "children": [
            {
              "type": "label",
              "label": "0 = no pain  |  10 = worst pain imaginable"
            },
            {
              "type": "scale-slider",
              "name": "pain_worst",
              "label": "At its worst",
              "min": 0,
              "max": 10,
              "step": 1,
              "showValue": true,
              "ranges": [
                {
                  "from": 0,
                  "to": 2,
                  "color": "#22c55e",
                  "label": "None"
                },
                {
                  "from": 3,
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
                  "label": "Worst"
                }
              ]
            },
            {
              "type": "scale-slider",
              "name": "pain_lying",
              "label": "When lying on the involved side?",
              "min": 0,
              "max": 10,
              "step": 1,
              "showValue": true,
              "ranges": [
                {
                  "from": 0,
                  "to": 2,
                  "color": "#22c55e",
                  "label": "None"
                },
                {
                  "from": 3,
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
                  "label": "Worst"
                }
              ]
            },
            {
              "type": "scale-slider",
              "name": "pain_high_shelf",
              "label": "Reaching for something on a high shelf?",
              "min": 0,
              "max": 10,
              "step": 1,
              "showValue": true,
              "ranges": [
                {
                  "from": 0,
                  "to": 2,
                  "color": "#22c55e",
                  "label": "None"
                },
                {
                  "from": 3,
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
                  "label": "Worst"
                }
              ]
            },
            {
              "type": "scale-slider",
              "name": "pain_neck",
              "label": "Touching the back of your neck?",
              "min": 0,
              "max": 10,
              "step": 1,
              "showValue": true,
              "ranges": [
                {
                  "from": 0,
                  "to": 2,
                  "color": "#22c55e",
                  "label": "None"
                },
                {
                  "from": 3,
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
                  "label": "Worst"
                }
              ]
            },
            {
              "type": "scale-slider",
              "name": "pain_push",
              "label": "Pushing with the involved arm?",
              "min": 0,
              "max": 10,
              "step": 1,
              "showValue": true,
              "ranges": [
                {
                  "from": 0,
                  "to": 2,
                  "color": "#22c55e",
                  "label": "None"
                },
                {
                  "from": 3,
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
                  "label": "Worst"
                }
              ]
            },
            // {
            //   "type": "custom",
            //   "name": "pain_total_display"
            // }
          ]
        },
        {
          "type": "accordion",
          "name": "spadi_disability",
          "label": "DISABILITY",
          "defaultOpen": true,
          "children": [
            {
              "type": "label",
              "label": "0 = no difficulty  |  10 = so difficult it requires help"
            },
            {
              "type": "scale-slider",
              "name": "dis_hair",
              "label": "Washing your hair?",
              "min": 0,
              "max": 10,
              "step": 1,
              "showValue": true,
              "ranges": [
                {
                  "from": 0,
                  "to": 2,
                  "color": "#22c55e",
                  "label": "None"
                },
                {
                  "from": 3,
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
                  "label": "Worst"
                }
              ]
            },
            {
              "type": "scale-slider",
              "name": "dis_back",
              "label": "Washing your back?",
              "min": 0,
              "max": 10,
              "step": 1,
              "showValue": true,
              "ranges": [
                {
                  "from": 0,
                  "to": 2,
                  "color": "#22c55e",
                  "label": "None"
                },
                {
                  "from": 3,
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
                  "label": "Worst"
                }
              ]
            },
            {
              "type": "scale-slider",
              "name": "dis_undershirt",
              "label": "Putting on an undershirt or jumper?",
              "min": 0,
              "max": 10,
              "step": 1,
              "showValue": true,
              "ranges": [
                {
                  "from": 0,
                  "to": 2,
                  "color": "#22c55e",
                  "label": "None"
                },
                {
                  "from": 3,
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
                  "label": "Worst"
                }
              ]
            },
            {
              "type": "scale-slider",
              "name": "dis_shirt",
              "label": "Putting on a shirt that buttons down the front?",
              "min": 0,
              "max": 10,
              "step": 1,
              "showValue": true,
              "ranges": [
                {
                  "from": 0,
                  "to": 2,
                  "color": "#22c55e",
                  "label": "None"
                },
                {
                  "from": 3,
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
                  "label": "Worst"
                }
              ]
            },
            {
              "type": "scale-slider",
              "name": "dis_pants",
              "label": "Putting on your pants?",
              "min": 0,
              "max": 10,
              "step": 1,
              "showValue": true,
              "ranges": [
                {
                  "from": 0,
                  "to": 2,
                  "color": "#22c55e",
                  "label": "None"
                },
                {
                  "from": 3,
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
                  "label": "Worst"
                }
              ]
            },
            {
              "type": "scale-slider",
              "name": "dis_shelf",
              "label": "Placing an object on a high shelf?",
              "min": 0,
              "max": 10,
              "step": 1,
              "showValue": true,
              "ranges": [
                {
                  "from": 0,
                  "to": 2,
                  "color": "#22c55e",
                  "label": "None"
                },
                {
                  "from": 3,
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
                  "label": "Worst"
                }
              ]
            },
            {
              "type": "scale-slider",
              "name": "dis_heavy",
              "label": "Carrying a heavy object of 10 pounds (4.5 kilograms)?",
              "min": 0,
              "max": 10,
              "step": 1,
              "showValue": true,
              "ranges": [
                {
                  "from": 0,
                  "to": 2,
                  "color": "#22c55e",
                  "label": "None"
                },
                {
                  "from": 3,
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
                  "label": "Worst"
                }
              ]
            },
            {
              "type": "scale-slider",
              "name": "dis_pocket",
              "label": "Removing something from your back pocket?",
              "min": 0,
              "max": 10,
              "step": 1,
              "showValue": true,
              "ranges": [
                {
                  "from": 0,
                  "to": 2,
                  "color": "#22c55e",
                  "label": "None"
                },
                {
                  "from": 3,
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
                  "label": "Worst"
                }
              ]
            },
            // {
            //   "type": "custom",
            //   "name": "dis_total_display"
            // }
          ]
        },
        // {
        //   "type": "custom",
        //   "name": "spadi_total_display"
        // }
      ]
    }
  ]
}