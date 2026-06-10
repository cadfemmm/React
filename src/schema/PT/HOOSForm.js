const SCHEMA = {
  "title": "Hip Disability and Osteoarthritis Outcome Score (HOOS-12)",
  "sections": [
    {
      "fields": [
        {
          "type": "label",
          "label": "Instructions: Answer every question by selecting one option per row. 0 = no problem, 4 = extreme problem."
        },
        {
          "type": "accordion",
          "name": "hoos_pain_acc",
          "label": "PAIN",
          "defaultOpen": true,
          "children": [
            {
              "type": "radio",
              "name": "hoos_pain_freq",
              "label": "How often do you experience hip pain?",
              "labelAbove": true,
              "options": [
                {
                  "label": "Never",
                  "value": "0"
                },
                {
                  "label": "Monthly",
                  "value": "1"
                },
                {
                  "label": "Weekly",
                  "value": "2"
                },
                {
                  "label": "Daily",
                  "value": "3"
                },
                {
                  "label": "Always",
                  "value": "4"
                }
              ]
            },
            {
              "type": "subheading",
              "label": "Hip pain during the last week while:"
            },
            {
              "type": "radio-matrix",
              "name": "hoos_pain_flat",
              "label": "Walking on a flat surface",
              "matrixHeaderLabel": "Pain level",
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ],
              "showInfoInRow": false
            },
            {
              "type": "radio-matrix",
              "name": "hoos_pain_stairs",
              "label": "Going up or down stairs",
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ],
              "showInfoInRow": false
            },
            {
              "type": "radio-matrix",
              "name": "hoos_pain_sitting",
              "label": "Sitting or lying",
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ],
              "showInfoInRow": false
            },
            {
              "type": "custom",
              "name": "hoos_pain_score_box"
            }
          ]
        },
        {
          "type": "accordion",
          "name": "hoos_func_acc",
          "label": "Function, Daily Living",
          "defaultOpen": true,
          "children": [
            {
              "type": "label",
              "label": "Degree of difficulty experienced in the last week due to your hip:"
            },
            {
              "type": "radio-matrix",
              "name": "hoos_func_rising",
              "label": "Rising from sitting",
              "matrixHeaderLabel": "Difficulty",
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ],
              "showInfoInRow": false
            },
            {
              "type": "radio-matrix",
              "name": "hoos_func_standing",
              "label": "Standing",
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ],
              "showInfoInRow": false
            },
            {
              "type": "radio-matrix",
              "name": "hoos_func_car",
              "label": "Getting in/out of car",
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ],
              "showInfoInRow": false
            },
            {
              "type": "radio-matrix",
              "name": "hoos_func_twist",
              "label": "Twisting/pivoting on your injured hip",
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ],
              "showInfoInRow": false
            },
            {
              "type": "radio",
              "name": "hoos_func_awareness",
              "label": "How often are you aware of your hip problem?",
              "labelAbove": true,
              "options": [
                {
                  "label": "Never",
                  "value": "0"
                },
                {
                  "label": "Monthly",
                  "value": "1"
                },
                {
                  "label": "Weekly",
                  "value": "2"
                },
                {
                  "label": "Daily",
                  "value": "3"
                },
                {
                  "label": "Always",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "hoos_func_lifestyle",
              "label": "Have you modified your lifestyle to avoid activities potentially damaging to your hip?",
              "labelAbove": true,
              "options": [
                {
                  "label": "Not at all",
                  "value": "0"
                },
                {
                  "label": "Mildly",
                  "value": "1"
                },
                {
                  "label": "Moderately",
                  "value": "2"
                },
                {
                  "label": "Severely",
                  "value": "3"
                },
                {
                  "label": "Totally",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "hoos_func_confidence",
              "label": "How much are you troubled with lack of confidence in your hip?",
              "labelAbove": true,
              "options": [
                {
                  "label": "Not at all",
                  "value": "0"
                },
                {
                  "label": "Mildly",
                  "value": "1"
                },
                {
                  "label": "Moderately",
                  "value": "2"
                },
                {
                  "label": "Severely",
                  "value": "3"
                },
                {
                  "label": "Totally",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "hoos_func_difficulty",
              "label": "In general, how much difficulty do you have with your hip?",
              "labelAbove": true,
              "options": [
                {
                  "label": "Not at all",
                  "value": "0"
                },
                {
                  "label": "Mildly",
                  "value": "1"
                },
                {
                  "label": "Moderately",
                  "value": "2"
                },
                {
                  "label": "Severely",
                  "value": "3"
                },
                {
                  "label": "Totally",
                  "value": "4"
                }
              ]
            },
            {
              "type": "custom",
              "name": "hoos_func_score_box"
            }
          ]
        },
        {
          "type": "custom",
          "name": "hoos_total_box"
        },
        {
          "type": "label",
          "label": "The HOOS-12 contains 12 questions scored 0–4. The summary score is converted to a 0–100 scale where 100 is the best possible outcome."
        }
      ]
    }
  ]
}