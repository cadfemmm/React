const SCHEMA = {
  "title": "Trinity Amputation and Prosthesis Experience Scales (TAPES)",
  "fields": [
    {
      "type": "subheading",
      "label": "Part 1"
    },
    {
      "type": "accordion",
      "name": "tapes_psychosocial",
      "label": "Section 1: Psychosocial Adjustment",
      "defaultOpen": true,
      "children": [
        {
          "type": "subheading",
          "label": ""
        },
        {
          "type": "radio-matrix",
          "name": "tp_1",
          "label": "1. I have adjusted to having a prosthesis",
          "options": [
            {
              "label": "Strongly disagree (1)",
              "value": "1"
            },
            {
              "label": "Disagree (2)",
              "value": "2"
            },
            {
              "label": "Agree (3)",
              "value": "3"
            },
            {
              "label": "Strongly agree (4)",
              "value": "4"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "tp_2",
          "label": "2. As time goes by, I accept my prosthesis more",
          "options": [
            {
              "label": "Strongly disagree (1)",
              "value": "1"
            },
            {
              "label": "Disagree (2)",
              "value": "2"
            },
            {
              "label": "Agree (3)",
              "value": "3"
            },
            {
              "label": "Strongly agree (4)",
              "value": "4"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "tp_3",
          "label": "3. I feel that I have dealt successfully with this trauma in my life",
          "options": [
            {
              "label": "Strongly disagree (1)",
              "value": "1"
            },
            {
              "label": "Disagree (2)",
              "value": "2"
            },
            {
              "label": "Agree (3)",
              "value": "3"
            },
            {
              "label": "Strongly agree (4)",
              "value": "4"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "tp_4",
          "label": "4. Although I have a prosthesis, my life is full",
          "options": [
            {
              "label": "Strongly disagree (1)",
              "value": "1"
            },
            {
              "label": "Disagree (2)",
              "value": "2"
            },
            {
              "label": "Agree (3)",
              "value": "3"
            },
            {
              "label": "Strongly agree (4)",
              "value": "4"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "tp_5",
          "label": "5. I have gotten used to wearing a prosthesis",
          "options": [
            {
              "label": "Strongly disagree (1)",
              "value": "1"
            },
            {
              "label": "Disagree (2)",
              "value": "2"
            },
            {
              "label": "Agree (3)",
              "value": "3"
            },
            {
              "label": "Strongly agree (4)",
              "value": "4"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "tp_6",
          "label": "6. I don't care if somebody looks at my prosthesis",
          "options": [
            {
              "label": "Strongly disagree (1)",
              "value": "1"
            },
            {
              "label": "Disagree (2)",
              "value": "2"
            },
            {
              "label": "Agree (3)",
              "value": "3"
            },
            {
              "label": "Strongly agree (4)",
              "value": "4"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "tp_7",
          "label": "7. I find it easy to talk about my prosthesis",
          "options": [
            {
              "label": "Strongly disagree (1)",
              "value": "1"
            },
            {
              "label": "Disagree (2)",
              "value": "2"
            },
            {
              "label": "Agree (3)",
              "value": "3"
            },
            {
              "label": "Strongly agree (4)",
              "value": "4"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "tp_8",
          "label": "8. I don't mind people asking about my prosthesis",
          "options": [
            {
              "label": "Strongly disagree (1)",
              "value": "1"
            },
            {
              "label": "Disagree (2)",
              "value": "2"
            },
            {
              "label": "Agree (3)",
              "value": "3"
            },
            {
              "label": "Strongly agree (4)",
              "value": "4"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "tp_9",
          "label": "9. I find it easy to talk about my limb loss in conversation",
          "options": [
            {
              "label": "Strongly disagree (1)",
              "value": "1"
            },
            {
              "label": "Disagree (2)",
              "value": "2"
            },
            {
              "label": "Agree (3)",
              "value": "3"
            },
            {
              "label": "Strongly agree (4)",
              "value": "4"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "tp_10",
          "label": "10. I don't care if somebody notices that I am limping",
          "options": [
            {
              "label": "Strongly disagree (1)",
              "value": "1"
            },
            {
              "label": "Disagree (2)",
              "value": "2"
            },
            {
              "label": "Agree (3)",
              "value": "3"
            },
            {
              "label": "Strongly agree (4)",
              "value": "4"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "tp_11",
          "label": "11. A prosthesis interferes with the ability to do my work",
          "options": [
            {
              "label": "Strongly disagree (1)",
              "value": "1"
            },
            {
              "label": "Disagree (2)",
              "value": "2"
            },
            {
              "label": "Agree (3)",
              "value": "3"
            },
            {
              "label": "Strongly agree (4)",
              "value": "4"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "tp_12",
          "label": "12. Having a prosthesis makes me more dependent on others than I would like",
          "options": [
            {
              "label": "Strongly disagree (1)",
              "value": "1"
            },
            {
              "label": "Disagree (2)",
              "value": "2"
            },
            {
              "label": "Agree (3)",
              "value": "3"
            },
            {
              "label": "Strongly agree (4)",
              "value": "4"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "tp_13",
          "label": "13. Having a prosthesis limits the kind of work that I can do",
          "options": [
            {
              "label": "Strongly disagree (1)",
              "value": "1"
            },
            {
              "label": "Disagree (2)",
              "value": "2"
            },
            {
              "label": "Agree (3)",
              "value": "3"
            },
            {
              "label": "Strongly agree (4)",
              "value": "4"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "tp_14",
          "label": "14. Being an amputee means that I can't do what I want to do",
          "options": [
            {
              "label": "Strongly disagree (1)",
              "value": "1"
            },
            {
              "label": "Disagree (2)",
              "value": "2"
            },
            {
              "label": "Agree (3)",
              "value": "3"
            },
            {
              "label": "Strongly agree (4)",
              "value": "4"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "tp_15",
          "label": "15. Having a prosthesis limits the amount of work that I can do",
          "options": [
            {
              "label": "Strongly disagree (1)",
              "value": "1"
            },
            {
              "label": "Disagree (2)",
              "value": "2"
            },
            {
              "label": "Agree (3)",
              "value": "3"
            },
            {
              "label": "Strongly agree (4)",
              "value": "4"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "name": "_tp_score",
          "type": "custom"
        }
      ]
    },
    {
      "type": "accordion",
      "name": "tapes_activity",
      "label": "Section 2: Activity Restriction",
      "defaultOpen": false,
      "children": [
        {
          "type": "subheading",
          "label": ""
        },
        {
          "type": "radio-matrix",
          "name": "ta_a",
          "label": "(a) Vigorous activities, such as running, lifting heavy objects, participating in strenuous sports",
          "options": [
            {
              "label": "Yes, limited a lot (2)",
              "value": "2"
            },
            {
              "label": "Limited a little (1)",
              "value": "1"
            },
            {
              "label": "No, not limited (0)",
              "value": "0"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "ta_b",
          "label": "(b) Climbing several flights of stairs",
          "options": [
            {
              "label": "Yes, limited a lot (2)",
              "value": "2"
            },
            {
              "label": "Limited a little (1)",
              "value": "1"
            },
            {
              "label": "No, not limited (0)",
              "value": "0"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "ta_c",
          "label": "(c) Running for a bus",
          "options": [
            {
              "label": "Yes, limited a lot (2)",
              "value": "2"
            },
            {
              "label": "Limited a little (1)",
              "value": "1"
            },
            {
              "label": "No, not limited (0)",
              "value": "0"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "ta_d",
          "label": "(d) Sport and recreation",
          "options": [
            {
              "label": "Yes, limited a lot (2)",
              "value": "2"
            },
            {
              "label": "Limited a little (1)",
              "value": "1"
            },
            {
              "label": "No, not limited (0)",
              "value": "0"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "ta_e",
          "label": "(e) Climbing one flight of stairs",
          "options": [
            {
              "label": "Yes, limited a lot (2)",
              "value": "2"
            },
            {
              "label": "Limited a little (1)",
              "value": "1"
            },
            {
              "label": "No, not limited (0)",
              "value": "0"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "ta_f",
          "label": "(f) Walking more than a mile",
          "options": [
            {
              "label": "Yes, limited a lot (2)",
              "value": "2"
            },
            {
              "label": "Limited a little (1)",
              "value": "1"
            },
            {
              "label": "No, not limited (0)",
              "value": "0"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "ta_g",
          "label": "(g) Walking half a mile",
          "options": [
            {
              "label": "Yes, limited a lot (2)",
              "value": "2"
            },
            {
              "label": "Limited a little (1)",
              "value": "1"
            },
            {
              "label": "No, not limited (0)",
              "value": "0"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "ta_h",
          "label": "(h) Walking 100 metres",
          "options": [
            {
              "label": "Yes, limited a lot (2)",
              "value": "2"
            },
            {
              "label": "Limited a little (1)",
              "value": "1"
            },
            {
              "label": "No, not limited (0)",
              "value": "0"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "ta_i",
          "label": "(i) Working on hobbies",
          "options": [
            {
              "label": "Yes, limited a lot (2)",
              "value": "2"
            },
            {
              "label": "Limited a little (1)",
              "value": "1"
            },
            {
              "label": "No, not limited (0)",
              "value": "0"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "ta_j",
          "label": "(j) Going to work",
          "options": [
            {
              "label": "Yes, limited a lot (2)",
              "value": "2"
            },
            {
              "label": "Limited a little (1)",
              "value": "1"
            },
            {
              "label": "No, not limited (0)",
              "value": "0"
            },
            {
              "label": "Not applicable",
              "value": "na"
            }
          ],
          "showInfoInRow": false
        },
        {
          "name": "_ta_score",
          "type": "custom"
        }
      ]
    },
    {
      "type": "accordion",
      "name": "tapes_satisfaction",
      "label": "Section 3: Prosthesis Satisfaction",
      "defaultOpen": false,
      "children": [
        {
          "type": "subheading",
          "label": ""
        },
        {
          "type": "radio-matrix",
          "name": "ts_i",
          "label": "(i) Colour",
          "options": [
            {
              "label": "Not satisfied (1)",
              "value": "1"
            },
            {
              "label": "Satisfied (2)",
              "value": "2"
            },
            {
              "label": "Very satisfied (3)",
              "value": "3"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "ts_ii",
          "label": "(ii) Shape",
          "options": [
            {
              "label": "Not satisfied (1)",
              "value": "1"
            },
            {
              "label": "Satisfied (2)",
              "value": "2"
            },
            {
              "label": "Very satisfied (3)",
              "value": "3"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "ts_iii",
          "label": "(iii) Appearance",
          "options": [
            {
              "label": "Not satisfied (1)",
              "value": "1"
            },
            {
              "label": "Satisfied (2)",
              "value": "2"
            },
            {
              "label": "Very satisfied (3)",
              "value": "3"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "ts_iv",
          "label": "(iv) Weight",
          "options": [
            {
              "label": "Not satisfied (1)",
              "value": "1"
            },
            {
              "label": "Satisfied (2)",
              "value": "2"
            },
            {
              "label": "Very satisfied (3)",
              "value": "3"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "ts_v",
          "label": "(v) Usefulness",
          "options": [
            {
              "label": "Not satisfied (1)",
              "value": "1"
            },
            {
              "label": "Satisfied (2)",
              "value": "2"
            },
            {
              "label": "Very satisfied (3)",
              "value": "3"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "ts_vi",
          "label": "(vi) Reliability",
          "options": [
            {
              "label": "Not satisfied (1)",
              "value": "1"
            },
            {
              "label": "Satisfied (2)",
              "value": "2"
            },
            {
              "label": "Very satisfied (3)",
              "value": "3"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "ts_vii",
          "label": "(vii) Fit",
          "options": [
            {
              "label": "Not satisfied (1)",
              "value": "1"
            },
            {
              "label": "Satisfied (2)",
              "value": "2"
            },
            {
              "label": "Very satisfied (3)",
              "value": "3"
            }
          ],
          "showInfoInRow": false
        },
        {
          "type": "radio-matrix",
          "name": "ts_viii",
          "label": "(viii) Comfort",
          "options": [
            {
              "label": "Not satisfied (1)",
              "value": "1"
            },
            {
              "label": "Satisfied (2)",
              "value": "2"
            },
            {
              "label": "Very satisfied (3)",
              "value": "3"
            }
          ],
          "showInfoInRow": false
        },
        {
          "name": "_ts_score",
          "type": "custom"
        }
      ]
    },
    {
      "name": "tapes_overall_satisfaction",
      "label": "Please circle the number (0–10) that best describes how satisfied you are with your prosthesis?",
      "type": "scale-slider",
      "min": 0,
      "max": 10,
      "step": 1,
      "showValue": true,
      "ranges": [
        {
          "min": 0,
          "max": 4,
          "label": "Not at all Satisfied",
          "color": "#ef4444"
        },
        {
          "min": 4,
          "max": 7,
          "label": "Moderately Satisfied",
          "color": "#f59e0b"
        },
        {
          "min": 7,
          "max": 10,
          "label": "Very Satisfied",
          "color": "#22c55e"
        }
      ]
    },
    {
      "name": "tapes_overall_satisfaction",
      "label": "Overall Satisfaction Score",
      "type": "score-box"
    },
    {
      "type": "accordion",
      "name": "tapes_part2",
      "label": "Part II",
      "defaultOpen": false,
      "children": [
        {
          "name": "p2_hours_worn",
          "label": "1. On average, how many hours a day do you wear your prosthesis?",
          "type": "input",
          "placeholder": "hours"
        },
        {
          "name": "p2_health",
          "label": "2. In general, would you say your health is:",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Very Poor (1)",
              "value": "1"
            },
            {
              "label": "Poor (2)",
              "value": "2"
            },
            {
              "label": "Fair (3)",
              "value": "3"
            },
            {
              "label": "Good (4)",
              "value": "4"
            },
            {
              "label": "Very Good (5)",
              "value": "5"
            }
          ]
        },
        {
          "name": "p2_physical",
          "label": "3. In general, would you say your physical capabilities are:",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Very Poor (1)",
              "value": "1"
            },
            {
              "label": "Poor (2)",
              "value": "2"
            },
            {
              "label": "Fair (3)",
              "value": "3"
            },
            {
              "label": "Good (4)",
              "value": "4"
            },
            {
              "label": "Very Good (5)",
              "value": "5"
            }
          ]
        },
        {
          "name": "p2_stump_pain",
          "label": "4(a) Do you experience residual limb (stump) pain (pain in the remaining part of your amputated limb)?",
          "type": "radio",
          "labelAbove": true,
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Yes (1)",
              "value": "1"
            }
          ]
        },
        {
          "name": "p2_stump_freq",
          "label": "(b) During the last week, how many times have you experienced stump pain?",
          "type": "input",
          "placeholder": "number of times",
          "showIf": {
            "field": "p2_stump_pain",
            "equals": "1"
          }
        },
        {
          "name": "p2_stump_duration",
          "label": "(c) How long, on average, did each episode of pain last?",
          "type": "input",
          "placeholder": "duration",
          "showIf": {
            "field": "p2_stump_pain",
            "equals": "1"
          }
        },
        {
          "name": "p2_stump_level",
          "label": "(d) Average level of stump pain during the last week:",
          "type": "radio",
          "labelAbove": true,
          "showIf": {
            "field": "p2_stump_pain",
            "equals": "1"
          },
          "options": [
            {
              "label": "Excruciating (5)",
              "value": "5"
            },
            {
              "label": "Horrible (4)",
              "value": "4"
            },
            {
              "label": "Distressing (3)",
              "value": "3"
            },
            {
              "label": "Discomforting (2)",
              "value": "2"
            },
            {
              "label": "Mild (1)",
              "value": "1"
            }
          ]
        },
        {
          "name": "p2_stump_interfere",
          "label": "(e) How much did stump pain interfere with your normal lifestyle (e.g. work, social and family activities) during the last week?",
          "type": "radio",
          "labelAbove": true,
          "showIf": {
            "field": "p2_stump_pain",
            "equals": "1"
          },
          "options": [
            {
              "label": "A Lot (5)",
              "value": "5"
            },
            {
              "label": "Quite a Bit (4)",
              "value": "4"
            },
            {
              "label": "Moderately (3)",
              "value": "3"
            },
            {
              "label": "A Little Bit (2)",
              "value": "2"
            },
            {
              "label": "Not at All (1)",
              "value": "1"
            }
          ]
        },
        {
          "name": "p2_phantom_pain",
          "label": "5(a) Do you experience phantom limb pain (pain in the part of the limb which was amputated)?",
          "type": "radio",
          "labelAbove": true,
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Yes (1)",
              "value": "1"
            }
          ]
        },
        {
          "name": "p2_phantom_freq",
          "label": "(b) During the last week, how many times have you experienced phantom limb pain?",
          "type": "input",
          "placeholder": "number of times",
          "showIf": {
            "field": "p2_phantom_pain",
            "equals": "1"
          }
        },
        {
          "name": "p2_phantom_duration",
          "label": "(c) How long, on average, did each episode of pain last?",
          "type": "input",
          "placeholder": "duration",
          "showIf": {
            "field": "p2_phantom_pain",
            "equals": "1"
          }
        },
        {
          "name": "p2_phantom_level",
          "label": "(d) Average level of phantom limb pain during the last week:",
          "type": "radio",
          "labelAbove": true,
          "showIf": {
            "field": "p2_phantom_pain",
            "equals": "1"
          },
          "options": [
            {
              "label": "Excruciating (5)",
              "value": "5"
            },
            {
              "label": "Horrible (4)",
              "value": "4"
            },
            {
              "label": "Distressing (3)",
              "value": "3"
            },
            {
              "label": "Discomforting (2)",
              "value": "2"
            },
            {
              "label": "Mild (1)",
              "value": "1"
            }
          ]
        },
        {
          "name": "p2_phantom_interfere",
          "label": "(e) How much did phantom limb pain interfere with your normal lifestyle (e.g. work, social and family activities) during the last week?",
          "type": "radio",
          "labelAbove": true,
          "showIf": {
            "field": "p2_phantom_pain",
            "equals": "1"
          },
          "options": [
            {
              "label": "A Lot (5)",
              "value": "5"
            },
            {
              "label": "Quite a Bit (4)",
              "value": "4"
            },
            {
              "label": "Moderately (3)",
              "value": "3"
            },
            {
              "label": "A Little Bit (2)",
              "value": "2"
            },
            {
              "label": "Not at All (1)",
              "value": "1"
            }
          ]
        },
        {
          "name": "p2_other_problems",
          "label": "6(a) Do you experience any other medical problems apart from stump pain or phantom limb pain?",
          "type": "radio",
          "labelAbove": true,
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Yes (1)",
              "value": "1"
            }
          ]
        },
        {
          "name": "p2_other_specify",
          "label": "(b) Please specify what problems you experience",
          "type": "input",
          "showIf": {
            "field": "p2_other_problems",
            "equals": "1"
          }
        },
        {
          "name": "p2_other_freq",
          "label": "(c) During the last week, how many times have you suffered from these medical problems?",
          "type": "input",
          "placeholder": "number of times",
          "showIf": {
            "field": "p2_other_problems",
            "equals": "1"
          }
        },
        {
          "name": "p2_other_duration",
          "label": "(d) How long, on average, did each problem last?",
          "type": "input",
          "placeholder": "duration",
          "showIf": {
            "field": "p2_other_problems",
            "equals": "1"
          }
        },
        {
          "name": "p2_other_level",
          "label": "(e) Level of pain from these problems during the last week:",
          "type": "radio",
          "labelAbove": true,
          "showIf": {
            "field": "p2_other_problems",
            "equals": "1"
          },
          "options": [
            {
              "label": "Excruciating (5)",
              "value": "5"
            },
            {
              "label": "Horrible (4)",
              "value": "4"
            },
            {
              "label": "Distressing (3)",
              "value": "3"
            },
            {
              "label": "Discomforting (2)",
              "value": "2"
            },
            {
              "label": "Mild (1)",
              "value": "1"
            }
          ]
        },
        {
          "name": "p2_other_interfere",
          "label": "(f) How much did these medical problems interfere with your normal lifestyle (e.g. work, social and family activities) during the last week?",
          "type": "radio",
          "labelAbove": true,
          "showIf": {
            "field": "p2_other_problems",
            "equals": "1"
          },
          "options": [
            {
              "label": "A Lot (5)",
              "value": "5"
            },
            {
              "label": "Quite a Bit (4)",
              "value": "4"
            },
            {
              "label": "Moderately (3)",
              "value": "3"
            },
            {
              "label": "A Little Bit (2)",
              "value": "2"
            },
            {
              "label": "Not at All (1)",
              "value": "1"
            }
          ]
        },
        {
          "name": "p2_other_pain_extra",
          "label": "(g) Do you experience any other pain that you have not previously mentioned?",
          "type": "radio",
          "labelAbove": true,
          "showIf": {
            "field": "p2_other_problems",
            "equals": "1"
          },
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Yes (1)",
              "value": "1"
            }
          ]
        },
        {
          "name": "p2_other_pain_specify",
          "label": "If yes, please specify",
          "type": "input",
          "showIf": {
            "field": "p2_other_pain_extra",
            "equals": "1"
          }
        },
        {
          "name": "p2_completed_by",
          "label": "7. Did you complete this questionnaire?",
          "type": "radio",
          "labelAbove": true,
          "options": [
            {
              "label": "On your own",
              "value": "own"
            },
            {
              "label": "With assistance",
              "value": "assisted"
            }
          ]
        },
        {
          "name": "_p2_date",
          "type": "custom"
        }
      ]
    }
  ]
}