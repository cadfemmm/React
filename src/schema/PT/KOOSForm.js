const SCHEMA = {
  "title": "Knee Injury and Osteoarthritis Outcome Score (KOOS-12)",
  "sections": [
    {
      "fields": [
        {
          "type": "label",
          "label": "Instructions: This questionnaire asks for your views about your knee. Answer every question by marking the appropriate box, only one box for each question. If you are unsure about how to answer a question, please give the best answer you can."
        },
        {
          "type": "accordion",
          "name": "koos_pain_acc",
          "label": "PAIN",
          "defaultOpen": true,
          "children": [
            {
              "type": "radio",
              "name": "koos_pain_freq",
              "label": "How often do you experience knee pain?",
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
              "label": "What amount of knee pain have you experienced the last week during the following activities?"
            },
            {
              "type": "radio-matrix",
              "name": "koos_pain_flat",
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
              "name": "koos_pain_stairs",
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
              "name": "koos_pain_sitting",
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
              "name": "koos_pain_score_box"
            }
          ]
        },
        {
          "type": "accordion",
          "name": "koos_func_acc",
          "label": "Function, Daily Living",
          "defaultOpen": true,
          "children": [
            {
              "type": "label",
              "label": "The following questions concern your physical function. By this we mean your ability to move around and to look after yourself. For each of the following activities please indicate the degree of difficulty you have experienced in the last week due to your knee."
            },
            {
              "type": "radio-matrix",
              "name": "koos_func_rising",
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
              "name": "koos_func_standing",
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
              "name": "koos_func_car",
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
              "name": "koos_func_twist",
              "label": "Twisting/pivoting on your injured knee",
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
              "name": "koos_func_awareness",
              "label": "How often are you aware of your knee problem?",
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
              "name": "koos_func_lifestyle",
              "label": "Have you modified your lifestyle to avoid activities potentially damaging to your knee?",
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
              "name": "koos_func_confidence",
              "label": "How much are you troubled with lack of confidence in your knee?",
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
              "name": "koos_func_difficulty",
              "label": "In general, how much difficulty do you have with your knee?",
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
              "name": "koos_func_score_box"
            }
          ]
        },
        {
          "type": "custom",
          "name": "koos_total_box"
        },
        {
          "type": "label",
          "label": "The KOOS-12 contains 12 questions scored 0–4. The summary score is converted to a 0–100 scale where 100 is the best possible outcome."
        }
      ]
    }
  ]
}