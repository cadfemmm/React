const SCHEMA = {
  "title": "Upper Extremity Functional Scale (UEFS)",
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
          "label": "Item Scores"
        },
        {
          "type": "radio-matrix",
          "name": "uefs_item_1",
          "label": "1. Usual work, housework, or school activities",
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
          "name": "uefs_item_2",
          "label": "2. Usual hobbies, recreational or sporting activities",
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
          "name": "uefs_item_3",
          "label": "3. Lifting groceries or shopping bags",
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
          "name": "uefs_item_4",
          "label": "4. Grooming hair",
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
          "name": "uefs_item_5",
          "label": "5. Pushing up from a chair using arms",
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
          "name": "uefs_item_6",
          "label": "6. Preparing food (cutting, cooking)",
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
          "name": "uefs_item_7",
          "label": "7. Driving or operating vehicle controls",
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
          "name": "uefs_item_8",
          "label": "8. Using tools or utensils",
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
          "name": "uefs_item_9",
          "label": "9. Opening jars or tight containers",
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
          "name": "uefs_item_10",
          "label": "10. Carrying objects with one hand",
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
          "name": "uefs_item_11",
          "label": "11. Carrying objects with two hands",
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
          "name": "uefs_item_12",
          "label": "12. Dressing upper body (shirt, jacket)",
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
          "name": "uefs_item_13",
          "label": "13. Reaching overhead",
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
          "name": "uefs_item_14",
          "label": "14. Reaching behind back",
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
          "name": "uefs_item_15",
          "label": "15. Reaching to the side",
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
          "name": "uefs_item_16",
          "label": "16. Throwing a ball",
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
          "name": "uefs_item_17",
          "label": "17. Catching a ball",
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
          "name": "uefs_item_18",
          "label": "18. Sleeping due to arm/shoulder discomfort",
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
          "name": "uefs_item_19",
          "label": "19. Performing fine hand tasks (writing, typing)",
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
          "name": "uefs_item_20",
          "label": "20. Performing heavy upper limb activities",
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
          "name": "uefs_total_score",
          "label": "Total Score (/80)"
        },
        {
          "type": "score-box",
          "name": "uefs_percentage",
          "label": "Percentage (%)"
        },
        {
          "type": "score-box",
          "name": "uefs_interpretation",
          "label": "Interpretation"
        }
      ]
    }
  ]
}