const SCHEMA = {
  "title": "Jebsen Hand Function Test",
  "sections": [
    {
      "fields": [
        {
          "type": "radio",
          "name": "dominant_hand",
          "label": "Dominant Hand",
          "options": [
            {
              "label": "Right",
              "value": "R"
            },
            {
              "label": "Left",
              "value": "L"
            }
          ]
        },
        {
          "type": "radio",
          "name": "affected_hand",
          "label": "Affected Hand",
          "options": [
            {
              "label": "Right",
              "value": "R"
            },
            {
              "label": "Left",
              "value": "L"
            }
          ]
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "RIGHT (SECONDS)",
            "LEFT (SECONDS)"
          ],
          "template": "1fr 100px 100px"
        },
        {
          "type": "grid-row",
          "label": "WRITING (NON DOMINANT)",
          "template": "1fr 100px 100px",
          "cols": [
            {
              "type": "input",
              "name": "right_0",
              "inputType": "number"
            },
            {
              "type": "input",
              "name": "left_0",
              "inputType": "number"
            }
          ]
        },
        {
          "type": "grid-row",
          "label": "WRITING (DOMINANT HAND)",
          "template": "1fr 100px 100px",
          "cols": [
            {
              "type": "input",
              "name": "right_1",
              "inputType": "number"
            },
            {
              "type": "input",
              "name": "left_1",
              "inputType": "number"
            }
          ]
        },
        {
          "type": "grid-row",
          "label": "CARD TURNING (NON DOMINANT)",
          "template": "1fr 100px 100px",
          "cols": [
            {
              "type": "input",
              "name": "right_2",
              "inputType": "number"
            },
            {
              "type": "input",
              "name": "left_2",
              "inputType": "number"
            }
          ]
        },
        {
          "type": "grid-row",
          "label": "CARD TURNING (DOMINANT HAND)",
          "template": "1fr 100px 100px",
          "cols": [
            {
              "type": "input",
              "name": "right_3",
              "inputType": "number"
            },
            {
              "type": "input",
              "name": "left_3",
              "inputType": "number"
            }
          ]
        },
        {
          "type": "grid-row",
          "label": "SMALL COMMON OBJECTS (NON DOMINANT)",
          "template": "1fr 100px 100px",
          "cols": [
            {
              "type": "input",
              "name": "right_4",
              "inputType": "number"
            },
            {
              "type": "input",
              "name": "left_4",
              "inputType": "number"
            }
          ]
        },
        {
          "type": "grid-row",
          "label": "SMALL COMMON OBJECTS (DOMINANT HAND)",
          "template": "1fr 100px 100px",
          "cols": [
            {
              "type": "input",
              "name": "right_5",
              "inputType": "number"
            },
            {
              "type": "input",
              "name": "left_5",
              "inputType": "number"
            }
          ]
        },
        {
          "type": "grid-row",
          "label": "SIMULATED FEEDING (NON DOMINANT)",
          "template": "1fr 100px 100px",
          "cols": [
            {
              "type": "input",
              "name": "right_6",
              "inputType": "number"
            },
            {
              "type": "input",
              "name": "left_6",
              "inputType": "number"
            }
          ]
        },
        {
          "type": "grid-row",
          "label": "SIMULATED FEEDING (DOMINANT HAND)",
          "template": "1fr 100px 100px",
          "cols": [
            {
              "type": "input",
              "name": "right_7",
              "inputType": "number"
            },
            {
              "type": "input",
              "name": "left_7",
              "inputType": "number"
            }
          ]
        },
        {
          "type": "grid-row",
          "label": "CHECKERS FEEDING (NON DOMINANT)",
          "template": "1fr 100px 100px",
          "cols": [
            {
              "type": "input",
              "name": "right_8",
              "inputType": "number"
            },
            {
              "type": "input",
              "name": "left_8",
              "inputType": "number"
            }
          ]
        },
        {
          "type": "grid-row",
          "label": "CHECKERS (DOMINANT HAND)",
          "template": "1fr 100px 100px",
          "cols": [
            {
              "type": "input",
              "name": "right_9",
              "inputType": "number"
            },
            {
              "type": "input",
              "name": "left_9",
              "inputType": "number"
            }
          ]
        },
        {
          "type": "grid-row",
          "label": "LARGE LIGHT OBJECT (NON DOMINANT)",
          "template": "1fr 100px 100px",
          "cols": [
            {
              "type": "input",
              "name": "right_10",
              "inputType": "number"
            },
            {
              "type": "input",
              "name": "left_10",
              "inputType": "number"
            }
          ]
        },
        {
          "type": "grid-row",
          "label": "LARGE LIGHT OBJECT (DOMINANT HAND)",
          "template": "1fr 100px 100px",
          "cols": [
            {
              "type": "input",
              "name": "right_11",
              "inputType": "number"
            },
            {
              "type": "input",
              "name": "left_11",
              "inputType": "number"
            }
          ]
        },
        {
          "type": "grid-row",
          "label": "LARGE HEAVY OBJECT (NON DOMINANT)",
          "template": "1fr 100px 100px",
          "cols": [
            {
              "type": "input",
              "name": "right_12",
              "inputType": "number"
            },
            {
              "type": "input",
              "name": "left_12",
              "inputType": "number"
            }
          ]
        },
        {
          "type": "grid-row",
          "label": "LARGE HEAVY OBJECT (DOMINANT HAND)",
          "template": "1fr 100px 100px",
          "cols": [
            {
              "type": "input",
              "name": "right_13",
              "inputType": "number"
            },
            {
              "type": "input",
              "name": "left_13",
              "inputType": "number"
            }
          ]
        },
        {
          "type": "grid-row",
          "label": "Right Hand Total",
          "cols": [
            {
              "type": "score-box",
              "name": "right_total"
            }
          ]
        },
        {
          "type": "grid-row",
          "label": "Left Hand Total",
          "cols": [
            {
              "type": "score-box",
              "name": "left_total"
            }
          ]
        },
        {
          "type": "grid-row",
          "label": "Overall Time",
          "cols": [
            {
              "type": "score-box",
              "name": "overall_total"
            }
          ]
        }
      ]
    }
  ]
}