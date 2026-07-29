const CRS_R_SCHEMA = {
  "title": "Mini-Mental State Examination (MMSE)",
  "actions": [],
  "sections": [
    {
      "title": null,
      "fields": [
        {
          "name": "q1",
          "type": "checkbox-group",
          "label": "1. Time Orientation",
          "options": [
            {
              "label": "1. What year is this?",
              "value": "q1_0"
            },
            {
              "label": "2. What is the current season?",
              "value": "q1_1"
            },
            {
              "label": "3. What month is this?",
              "value": "q1_2"
            },
            {
              "label": "4. What is the date today?",
              "value": "q1_3"
            },
            {
              "label": "5. What day of the week is it?",
              "value": "q1_4"
            }
          ]
        },
        {
          "name": "q2",
          "type": "checkbox-group",
          "label": "2. Place Orientation",
          "options": [
            {
              "label": "1. Which country are we in right now?",
              "value": "q2_0"
            },
            {
              "label": "2. What state/province are we in?",
              "value": "q2_1"
            },
            {
              "label": "3. What city or town are we in?",
              "value": "q2_2"
            },
            {
              "label": "4. What building are we in?",
              "value": "q2_3"
            },
            {
              "label": "5. On which floor are we located?",
              "value": "q2_4"
            }
          ]
        },
        {
          "name": "q3",
          "type": "checkbox-group",
          "label": "3. Registration (Repeat words)",
          "options": [
            {
              "label": "1. BALL",
              "value": "q3_0"
            },
            {
              "label": "2. CAR",
              "value": "q3_1"
            },
            {
              "label": "3. MAN",
              "value": "q3_2"
            }
          ]
        },
        {
          "name": "q4",
          "type": "checkbox-group",
          "label": "4. Spell WORLD backwards",
          "options": [
            {
              "label": "1. D",
              "value": "q4_0"
            },
            {
              "label": "2. L",
              "value": "q4_1"
            },
            {
              "label": "3. R",
              "value": "q4_2"
            },
            {
              "label": "4. O",
              "value": "q4_3"
            },
            {
              "label": "5. W",
              "value": "q4_4"
            }
          ]
        },
        {
          "name": "q5",
          "type": "checkbox-group",
          "label": "5. Recall words",
          "options": [
            {
              "label": "1. BALL",
              "value": "q5_0"
            },
            {
              "label": "2. CAR",
              "value": "q5_1"
            },
            {
              "label": "3. MAN",
              "value": "q5_2"
            }
          ]
        },
        {
          "name": "q6",
          "type": "checkbox-group",
          "label": "6. Naming (Watch)",
          "options": [
            {
              "label": "What object is this? (Show a wrist watch)",
              "value": "q6_0"
            }
          ]
        },
        {
          "name": "q7",
          "type": "checkbox-group",
          "label": "7. Naming (Pencil)",
          "options": [
            {
              "label": "What object is this? (Show a pencil)",
              "value": "q7_0"
            }
          ]
        },
        {
          "name": "q8",
          "type": "checkbox-group",
          "label": "8. Repetition",
          "options": [
            {
              "label": "Repeat this phrase: No ifs, ands, or buts.",
              "value": "q8_0"
            }
          ]
        },
        {
          "name": "q9",
          "type": "checkbox-group",
          "label": "9. Reading and obeying",
          "options": [
            {
              "label": "Read and perform: CLOSE YOUR EYES",
              "value": "q9_0"
            }
          ]
        },
        {
          "name": "q10",
          "type": "checkbox-group",
          "label": "10. 3-step command",
          "options": [
            {
              "label": "1. Take the paper in your right/left hand",
              "value": "q10_0"
            },
            {
              "label": "2. Fold it in half",
              "value": "q10_1"
            },
            {
              "label": "3. Put it on the floor",
              "value": "q10_2"
            }
          ]
        },
        {
          "name": "q11",
          "type": "checkbox-group",
          "label": "11. Writing",
          "options": [
            {
              "label": "Write a complete sentence on a piece of paper.",
              "value": "q11_0"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "12. Copy the Design (Pentagons)",
          "info": {
            "type": "image",
            "src": "/Pentagons.jpg",
            "alt": "MMSE Pentagon Reference"
          }
        },
        {
          "name": "pentagon_upload",
          "label": "Upload Patient's Pentagon Drawing",
          "type": "attach-file",
          "accept": "image/*"
        },
        {
          "name": "pentagons_copy",
          "label": "Patient copied the design correctly?",
          "type": "radio",
          "options": [
            {
              "label": "Correct",
              "value": 1
            },
            {
              "label": "Incorrect",
              "value": 0
            }
          ]
        },
        {
          "name": "mmse_total_score",
          "label": "Total Score",
          "type": "input",
          "readOnly": true
        },
        {
          "name": "cognitive_interpretation",
          "label": "Interpretation",
          "type": "input",
          "readOnly": true
        }
      ]
    }
  ]
}