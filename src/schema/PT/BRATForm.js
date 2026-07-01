const SCHEMA = {
  "title": "Brachial Assessment Tool (BrAT)",
  "fields": [
    {
      "type": "accordion",
      "name": "brat_subscale1",
      "label": "Subscale 1: Dressing and Grooming",
      "defaultOpen": true,
      "children": [
        {
          "type": "refraction-12col",
          "name": "brat_s1",
          "cornerLabel": "Activity",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Cannot do now (0)",
              "columns": [
                {
                  "key": "0"
                }
              ]
            },
            {
              "label": "Very hard (1)",
              "columns": [
                {
                  "key": "1"
                }
              ]
            },
            {
              "label": "A little hard (2)",
              "columns": [
                {
                  "key": "2"
                }
              ]
            },
            {
              "label": "Easy to do (3)",
              "columns": [
                {
                  "key": "3"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "s1_q1",
              "label": "1. Use both arms to put on a T-shirt",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s1_q2",
              "label": "2. Use both arms to put on a pair of trousers",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s1_q3",
              "label": "3. Use both hands to put on socks",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s1_q4",
              "label": "4. Use both hands to put toothpaste on a toothbrush",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s1_q5",
              "label": "5. Use both hands to do up belt buckle",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s1_q6",
              "label": "6. Tuck your shirt in using your affected hand",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s1_q7",
              "label": "7. Use both hands to do up shirt buttons",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s1_q8",
              "label": "8. Use both hands to do up tight trouser buttons e.g. jeans",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "accordion",
      "name": "brat_subscale2",
      "label": "Subscale 2: Arm and Hand",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "brat_s2",
          "cornerLabel": "Activity",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Cannot do now (0)",
              "columns": [
                {
                  "key": "0"
                }
              ]
            },
            {
              "label": "Very hard (1)",
              "columns": [
                {
                  "key": "1"
                }
              ]
            },
            {
              "label": "A little hard (2)",
              "columns": [
                {
                  "key": "2"
                }
              ]
            },
            {
              "label": "Easy to do (3)",
              "columns": [
                {
                  "key": "3"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "s2_q9",
              "label": "9. Wash both hands at same time",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s2_q10",
              "label": "10. Use both hands to push a pram, lawnmower or shopping trolley",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s2_q11",
              "label": "11. Use both hands to do up zip including putting ends together",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s2_q12",
              "label": "12. Use both hands to spread butter or jam on a piece of bread",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s2_q13",
              "label": "13. Use both hands to tie up a rubbish bag and put in the bin",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s2_q14",
              "label": "14. Use both hands to tie up shoe laces",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s2_q15",
              "label": "15. Use a knife and fork at the same time",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s2_q16",
              "label": "16. Carry an object only using your affected arm so your other arm/hand is free",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s2_q17",
              "label": "17. Pick up a small object with the fingers of your affected hand e.g. a coin or pen",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s2_q18",
              "label": "18. Hold a pot of food with 1 hand and stir it with the other",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s2_q19",
              "label": "19. Use both arms/hands to change the sheet on a bed",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s2_q20",
              "label": "20. Use both hands to wash your face",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s2_q21",
              "label": "21. Use both arms to peg clothes on the washing line",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s2_q22",
              "label": "22. Use both hands to type on a keyboard",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s2_q23",
              "label": "23. Turn on a light switch using only your affected arm",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s2_q24",
              "label": "24. Use your affected hand to wash your other armpit",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s2_q25",
              "label": "25. Use both arms to lift a box or bag onto a shelf at eye level",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "accordion",
      "name": "brat_subscale3",
      "label": "Subscale 3: Arm Only (No Hand)",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "brat_s3",
          "cornerLabel": "Activity",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Cannot do now (0)",
              "columns": [
                {
                  "key": "0"
                }
              ]
            },
            {
              "label": "Very hard (1)",
              "columns": [
                {
                  "key": "1"
                }
              ]
            },
            {
              "label": "A little hard (2)",
              "columns": [
                {
                  "key": "2"
                }
              ]
            },
            {
              "label": "Easy to do (3)",
              "columns": [
                {
                  "key": "3"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "s3_q26",
              "label": "26. Maintain control of your affected arm so you don't need to wear a sling",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s3_q27",
              "label": "27. Hold an object between your affected upper arm and your chest wall, e.g. a book",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s3_q28",
              "label": "28. Hold an object draped over your affected forearm, e.g. an article of clothing",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s3_q29",
              "label": "29. Stabilize an object with your affected arm while you manipulate it with your other hand",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s3_q30",
              "label": "30. Lift your affected arm to put it through the sleeve of a shirt",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "s3_q31",
              "label": "31. Roll over when sleeping without having to wake to move your affected arm",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "_brat_totals",
      "type": "custom"
    },
    {
      "type": "accordion",
      "name": "brat_writing",
      "label": "Optional: If Affected Arm is Writing Arm (Do NOT add to total)",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "brat_sw",
          "cornerLabel": "Activity",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Cannot do now (0)",
              "columns": [
                {
                  "key": "0"
                }
              ]
            },
            {
              "label": "Very hard (1)",
              "columns": [
                {
                  "key": "1"
                }
              ]
            },
            {
              "label": "A little hard (2)",
              "columns": [
                {
                  "key": "2"
                }
              ]
            },
            {
              "label": "Easy to do (3)",
              "columns": [
                {
                  "key": "3"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "sw_q1",
              "label": "Brush your teeth with your affected arm",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "sw_q2",
              "label": "Write with a pen or pencil with your affected arm",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "sw_q3",
              "label": "Use a computer mouse with your affected hand",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            },
            {
              "value": "sw_q4",
              "label": "Wipe yourself after going to the toilet with your affected arm",
              "columns": [
                {
                  "type": "radio",
                  "value": "0"
                },
                {
                  "type": "radio",
                  "value": "1"
                },
                {
                  "type": "radio",
                  "value": "2"
                },
                {
                  "type": "radio",
                  "value": "3"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}