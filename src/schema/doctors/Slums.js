const SLUMS_SCHEMA = {
  "title": "SLUMS Assessment",
  "sections": [
    {
      "title": "Orientation",
      "fields": [
        {
          "type": "input",
          "name": "day",
          "label": "1. What day of the week is it?"
        },
        {
          "type": "input",
          "name": "year",
          "label": "2. What is the year?"
        },
        {
          "type": "input",
          "name": "state",
          "label": "3. What State (or Territory) are we in?"
        }
      ]
    },
    {
      "title": "Memory Registration",
      "fields": [
        {
          "type": "info-text",
          "text": "4. Please remember these five objects:"
        },
        {
          "type": "info-text",
          "text": "Apple    •    Pen    •    Tie    •    House    •    Car"
        }
      ]
    },
    {
      "title": "Calculation & Verbal Fluency",
      "fields": [
        {
          "type": "input",
          "name": "moneyLeft",
          "label": "5. You have $100 and buy apples for $3 and a T-shirt for $20. How much money is left?",
          "placeholder": "Money left?"
        },
        {
          "type": "input",
          "name": "animals",
          "label": "6. Please name as many animals as you can in one minute. (Enter count)",
          "inputType": "number"
        }
      ]
    },
    {
      "title": "Delayed Recall",
      "fields": [
        {
          "type": "info-text",
          "text": "7. What were the 5 objects I asked you to remember?"
        },
        {
          "type": "checkbox-group",
          "name": "recall",
          "options": [
            {
              "label": "Apple",
              "value": "Apple"
            },
            {
              "label": "Pen",
              "value": "Pen"
            },
            {
              "label": "Tie",
              "value": "Tie"
            },
            {
              "label": "House",
              "value": "House"
            },
            {
              "label": "Car",
              "value": "Car"
            }
          ]
        }
      ]
    },
    {
      "title": "Reverse Numbers",
      "fields": [
        {
          "type": "info-text",
          "text": "8. Reverse these numbers:"
        },
        {
          "type": "row",
          "cols": 3,
          "fields": [
            {
              "type": "input",
              "name": "reverse98",
              "placeholder": "98 →"
            },
            {
              "type": "input",
              "name": "reverse486",
              "placeholder": "486 →"
            },
            {
              "type": "input",
              "name": "reverse8537",
              "placeholder": "8537 →"
            }
          ]
        }
      ]
    },
    {
      "title": "Clock Drawing",
      "fields": [
        {
          "type": "subheading",
          "label": "9. Draw a clock showing 10 minutes past 11.",
          "info": {
            "type": "image",
            "src": "/circle.jpg",
            "alt": "Clock Drawing Reference"
          }
        },
        {
          "type": "radio",
          "name": "clockHours",
          "label": "Hours marked correctly?",
          "options": [
            {
              "label": "Correct (2 pts)",
              "value": "correct"
            },
            {
              "label": "Incorrect",
              "value": "incorrect"
            }
          ]
        },
        {
          "type": "radio",
          "name": "clockMinutes",
          "label": "Time correct?",
          "options": [
            {
              "label": "Correct (2 pts)",
              "value": "correct"
            },
            {
              "label": "Incorrect",
              "value": "incorrect"
            }
          ]
        }
      ]
    },
    {
      "title": "Visual Spatial",
      "fields": [
        {
          "type": "subheading",
          "label": "10. Place an X in the triangle",
          "info": {
            "type": "image",
            "src": "/images.png",
            "alt": "Clock Drawing Reference"
          }
        },
        {
          "type": "radio",
          "name": "shapeX",
          "label": "X placed correctly?",
          "options": [
            {
              "label": "Correct",
              "value": "correct"
            },
            {
              "label": "Incorrect",
              "value": "incorrect"
            }
          ]
        },
        {
          "type": "radio",
          "name": "largestShape",
          "label": "Largest figure correct?",
          "options": [
            {
              "label": "Correct",
              "value": "correct"
            },
            {
              "label": "Incorrect",
              "value": "incorrect"
            }
          ]
        }
      ]
    },
    {
      "title": "Story Recall",
      "fields": [
        {
          "type": "info-text",
          "text": "11. Story (Read aloud to patient): Kate was a very successful stockbroker. She made a lot of money on the stock market. She then met Fred, a devastatingly handsome man. She married him and had three children. They lived in Sydney. She then stopped work and stayed at home to bring up her children. When they were teenagers, she went back to work."
        },
        {
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "type": "input",
              "name": "storyName",
              "label": "1. Name:"
            },
            {
              "type": "input",
              "name": "storyWork",
              "label": "2. Work:"
            }
          ]
        },
        {
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "type": "input",
              "name": "storyReturn",
              "label": "3. Returned when:"
            },
            {
              "type": "input",
              "name": "storyState",
              "label": "4. State:"
            }
          ]
        }
      ]
    },
    {
      "title": "Scoring",
      "fields": [
        {
          "type": "score-box",
          "name": "totalSlumsScore",
          "label": "Total SLUMS Score"
        },
        {
          "type": "textarea",
          "name": "comments",
          "label": "Comments"
        },
        {
          "type": "file-upload-modal",
          "name": "additional_document",
          "label": "Additional Document"
        }
      ]
    }
  ]
}