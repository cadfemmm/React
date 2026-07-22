const schema = {
  "title": "Water Swallow Test",
  "subtitle": "To be carried out with patients admitted with acute Stroke or Transient Ischemic Attack symptoms within 4 hours of admission to ED / CAU by a nurse trained in the procedure.",
  "sections": [
    {
      "title": "Part 1A — Pre-Assessment Criteria (Patient alertness and positioning)",
      "fields": [
        {
          "name": "a1",
          "label": "A1) Is the patient consistently alert for 10 minutes?",
          "type": "radio",
          "options": [
            {
              "label": "YES",
              "value": "YES"
            },
            {
              "label": "NO",
              "value": "NO"
            }
          ]
        },
        {
          "name": "a2",
          "label": "A2) Is the patient able to be supported in an upright position?",
          "type": "radio",
          "options": [
            {
              "label": "YES",
              "value": "YES"
            },
            {
              "label": "NO",
              "value": "NO"
            }
          ]
        },
        {
          "type": "alert-box",
          "severity": "danger",
          "message": "STOP. If NO to either — Record the patient NIL BY MOUTH. Repeat daily until the patient's clinical condition improves.",
          "showIf": {
            "or": [
              {
                "field": "a1",
                "equals": "NO"
              },
              {
                "field": "a2",
                "equals": "NO"
              }
            ]
          }
        },
        {
          "type": "alert-box",
          "severity": "info",
          "message": "Before proceeding: Check the patient's mouth and perform and maintain oral hygiene as required.",
          "showIf": {
            "field": "a1",
            "equals": "YES",
            "and": {
              "field": "a2",
              "equals": "YES"
            }
          }
        }
      ]
    },
    {
      "title": "Part 1B — Voice & Secretion Check (Does the patient show any sign of:)",
      "showIf": {
        "field": "a1",
        "equals": "YES",
        "and": {
          "field": "a2",
          "equals": "YES"
        }
      },
      "fields": [
        {
          "name": "b1",
          "label": "B1) A hoarse, wet, weak or absent voice?",
          "type": "radio",
          "options": [
            {
              "label": "YES",
              "value": "YES"
            },
            {
              "label": "NO",
              "value": "NO"
            }
          ]
        },
        {
          "name": "b2",
          "label": "B2) Being unable to deal with own oral secretions?",
          "type": "radio",
          "options": [
            {
              "label": "YES",
              "value": "YES"
            },
            {
              "label": "NO",
              "value": "NO"
            }
          ]
        },
        {
          "type": "alert-box",
          "severity": "danger",
          "message": "STOP. If YES to either — Record the patient NIL BY MOUTH and refer to Speech and Language Therapy.",
          "showIf": {
            "or": [
              {
                "field": "b1",
                "equals": "YES"
              },
              {
                "field": "b2",
                "equals": "YES"
              }
            ]
          }
        },
        {
          "type": "alert-box",
          "severity": "success",
          "message": "Criteria met — proceed to Part 2: Water Swallow Test.",
          "showIf": {
            "field": "b1",
            "equals": "NO",
            "and": {
              "field": "b2",
              "equals": "NO"
            }
          }
        }
      ]
    },
    {
      "title": "Part 2 — Teaspoon Water Test (Give the patient a teaspoon of water, watch for swallow and observe. Do this 3 times.)",
      "showIf": {
        "field": "b1",
        "equals": "NO",
        "and": {
          "field": "b2",
          "equals": "NO"
        }
      },
      "fields": [
        {
          "name": "tsp_sign_0",
          "label": "No or delayed swallow?",
          "type": "radio",
          "options": [
            {
              "label": "YES",
              "value": "YES"
            },
            {
              "label": "NO",
              "value": "NO"
            }
          ]
        },
        {
          "name": "tsp_sign_1",
          "label": "Immediate or delayed coughing?",
          "type": "radio",
          "options": [
            {
              "label": "YES",
              "value": "YES"
            },
            {
              "label": "NO",
              "value": "NO"
            }
          ]
        },
        {
          "name": "tsp_sign_2",
          "label": "Choking?",
          "type": "radio",
          "options": [
            {
              "label": "YES",
              "value": "YES"
            },
            {
              "label": "NO",
              "value": "NO"
            }
          ]
        },
        {
          "name": "tsp_sign_3",
          "label": "Change in voice quality? (Check by asking patient to say aaah)",
          "type": "radio",
          "options": [
            {
              "label": "YES",
              "value": "YES"
            },
            {
              "label": "NO",
              "value": "NO"
            }
          ]
        },
        {
          "name": "tsp_sign_4",
          "label": "Change in breathing pattern, or increased breathlessness whilst sipping?",
          "type": "radio",
          "options": [
            {
              "label": "YES",
              "value": "YES"
            },
            {
              "label": "NO",
              "value": "NO"
            }
          ]
        },
        {
          "type": "alert-box",
          "severity": "danger",
          "message": "STOP. If YES to any of the above — Record the patient NIL BY MOUTH and refer to Speech and Language Therapy (SLT).",
          "showIf": {
            "or": [
              {
                "field": "tsp_sign_0",
                "equals": "YES"
              },
              {
                "field": "tsp_sign_1",
                "equals": "YES"
              },
              {
                "field": "tsp_sign_2",
                "equals": "YES"
              },
              {
                "field": "tsp_sign_3",
                "equals": "YES"
              },
              {
                "field": "tsp_sign_4",
                "equals": "YES"
              }
            ]
          }
        },
        {
          "type": "alert-box",
          "severity": "success",
          "message": "No signs observed — proceed to the controlled sips test.",
          "showIf": {
            "field": "tsp_sign_0",
            "equals": "NO",
            "and": {
              "field": "tsp_sign_1",
              "equals": "NO",
              "and": {
                "field": "tsp_sign_2",
                "equals": "NO",
                "and": {
                  "field": "tsp_sign_3",
                  "equals": "NO",
                  "and": {
                    "field": "tsp_sign_4",
                    "equals": "NO"
                  }
                }
              }
            }
          }
        }
      ]
    },
    {
      "title": "Part 2 — Controlled Sips Test (Observe the patient taking several controlled sips (minimum of 3) from a glass of water.)",
      "showIf": {
        "field": "tsp_sign_0",
        "equals": "NO",
        "and": {
          "field": "tsp_sign_1",
          "equals": "NO",
          "and": {
            "field": "tsp_sign_2",
            "equals": "NO",
            "and": {
              "field": "tsp_sign_3",
              "equals": "NO",
              "and": {
                "field": "tsp_sign_4",
                "equals": "NO"
              }
            }
          }
        }
      },
      "fields": [
        {
          "name": "sip_sign_0",
          "label": "No or delayed swallow?",
          "type": "radio",
          "options": [
            {
              "label": "YES",
              "value": "YES"
            },
            {
              "label": "NO",
              "value": "NO"
            }
          ]
        },
        {
          "name": "sip_sign_1",
          "label": "Immediate or delayed coughing?",
          "type": "radio",
          "options": [
            {
              "label": "YES",
              "value": "YES"
            },
            {
              "label": "NO",
              "value": "NO"
            }
          ]
        },
        {
          "name": "sip_sign_2",
          "label": "Choking?",
          "type": "radio",
          "options": [
            {
              "label": "YES",
              "value": "YES"
            },
            {
              "label": "NO",
              "value": "NO"
            }
          ]
        },
        {
          "name": "sip_sign_3",
          "label": "Change in voice quality? (Check by asking patient to say aaah)",
          "type": "radio",
          "options": [
            {
              "label": "YES",
              "value": "YES"
            },
            {
              "label": "NO",
              "value": "NO"
            }
          ]
        },
        {
          "name": "sip_sign_4",
          "label": "Change in breathing pattern, or increased breathlessness whilst sipping?",
          "type": "radio",
          "options": [
            {
              "label": "YES",
              "value": "YES"
            },
            {
              "label": "NO",
              "value": "NO"
            }
          ]
        },
        {
          "type": "alert-box",
          "severity": "danger",
          "message": "STOP. If YES to any of the above — Record the patient NIL BY MOUTH and refer to Speech and Language Therapy (SLT).",
          "showIf": {
            "or": [
              {
                "field": "sip_sign_0",
                "equals": "YES"
              },
              {
                "field": "sip_sign_1",
                "equals": "YES"
              },
              {
                "field": "sip_sign_2",
                "equals": "YES"
              },
              {
                "field": "sip_sign_3",
                "equals": "YES"
              },
              {
                "field": "sip_sign_4",
                "equals": "YES"
              }
            ]
          }
        },
        {
          "type": "alert-box",
          "severity": "success",
          "message": "No difficulties observed — patient may proceed with diet and fluids.",
          "showIf": {
            "field": "sip_sign_0",
            "equals": "NO",
            "and": {
              "field": "sip_sign_1",
              "equals": "NO",
              "and": {
                "field": "sip_sign_2",
                "equals": "NO",
                "and": {
                  "field": "sip_sign_3",
                  "equals": "NO",
                  "and": {
                    "field": "sip_sign_4",
                    "equals": "NO"
                  }
                }
              }
            }
          }
        }
      ]
    },
    {
      "title": "Diet & Fluid Recommendations",
      "showIf": {
        "field": "sip_sign_0",
        "equals": "NO",
        "and": {
          "field": "sip_sign_1",
          "equals": "NO",
          "and": {
            "field": "sip_sign_2",
            "equals": "NO",
            "and": {
              "field": "sip_sign_3",
              "equals": "NO",
              "and": {
                "field": "sip_sign_4",
                "equals": "NO"
              }
            }
          }
        }
      },
      "fields": [
        {
          "type": "info-text",
          "text": [
            "Allow the patient to commence with diet and thin fluids (Level 0).",
            "Ensure the patient initially selects Level 6 diet from the normal menu.",
            "Supervise the patient with a Level 6 main course. If the patient is managing to chew and swallow fully then resume Regular / Level 7 diet.",
            "If any difficulties are observed refer to Speech and Language Therapy for a full clinical swallowing assessment."
          ]
        }
      ]
    },
    {
      "title": "Sign Off Verification",
      "showIf": {
        "field": "sip_sign_0",
        "equals": "NO",
        "and": {
          "field": "sip_sign_1",
          "equals": "NO",
          "and": {
            "field": "sip_sign_2",
            "equals": "NO",
            "and": {
              "field": "sip_sign_3",
              "equals": "NO",
              "and": {
                "field": "sip_sign_4",
                "equals": "NO"
              }
            }
          }
        }
      },
      "fields": [
        {
          "type": "row",
          "fields": [
            {
              "name": "initials",
              "label": "Initials",
              "type": "input"
            },
            {
              "name": "assessment_time",
              "label": "Time",
              "type": "input"
            },
            {
              "name": "assessment_date",
              "label": "Date",
              "type": "date"
            }
          ]
        }
      ]
    },
    {
      "title": "Sign Off Verification",
      "showIf": {
        "field": "sip_sign_0",
        "equals": "YES",
        "and": {
          "field": "sip_sign_1",
          "equals": "YES",
          "and": {
            "field": "sip_sign_2",
            "equals": "YES",
            "and": {
              "field": "sip_sign_3",
              "equals": "YES",
              "and": {
                "field": "sip_sign_4",
                "equals": "YES"
              }
            }
          }
        }
      },
      "fields": [
        {
          "type": "row",
          "fields": [
            {
              "name": "initials",
              "label": "Initials",
              "type": "input"
            },
            {
              "name": "assessment_time",
              "label": "Time",
              "type": "input"
            },
            {
              "name": "assessment_date",
              "label": "Date",
              "type": "date"
            }
          ]
        }
      ]
    },
    {
      "title": "Sign Off Verification",
      "showIf": {
        "or": [
          {
            "field": "tsp_sign_0",
            "equals": "YES"
          },
          {
            "field": "tsp_sign_1",
            "equals": "YES"
          },
          {
            "field": "tsp_sign_2",
            "equals": "YES"
          },
          {
            "field": "tsp_sign_3",
            "equals": "YES"
          },
          {
            "field": "tsp_sign_4",
            "equals": "YES"
          }
        ]
      },
      "fields": [
        {
          "type": "row",
          "fields": [
            {
              "name": "initials",
              "label": "Initials",
              "type": "input"
            },
            {
              "name": "assessment_time",
              "label": "Time",
              "type": "input"
            },
            {
              "name": "assessment_date",
              "label": "Date",
              "type": "date"
            }
          ]
        }
      ]
    }
  ]
}