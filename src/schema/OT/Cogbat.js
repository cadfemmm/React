const SCHEMA = {
  "title": "Basic Cognitive Testing (COGBAT)",
  "sections": [
    {
      "title": "Attention",
      "fields": [
        {
          "type": "radio",
          "name": "alertness_visual",
          "label": "Alertness, Visual",
          "options": [
            {
              "label": "Below average",
              "value": "below_average"
            },
            {
              "label": "Average",
              "value": "average"
            },
            {
              "label": "Above average",
              "value": "above_average"
            }
          ]
        },
        {
          "label": "",
          "type": "textarea",
          "name": "alertness_visual_notes",
          "showIf": {
            "field": "alertness_visual",
            "oneOf": [
              {
                "label": "Below average",
                "value": "below_average"
              },
              {
                "label": "Average",
                "value": "average"
              },
              {
                "label": "Above average",
                "value": "above_average"
              }
            ]
          }
        },
        {
          "type": "radio",
          "name": "divided_attention",
          "label": "Divided attention",
          "options": [
            {
              "label": "Below average",
              "value": "below_average"
            },
            {
              "label": "Average",
              "value": "average"
            },
            {
              "label": "Above average",
              "value": "above_average"
            }
          ]
        },
        {
          "label": "",
          "type": "textarea",
          "name": "divided_attention_notes",
          "showIf": {
            "field": "divided_attention",
            "oneOf": [
              {
                "label": "Below average",
                "value": "below_average"
              },
              {
                "label": "Average",
                "value": "average"
              },
              {
                "label": "Above average",
                "value": "above_average"
              }
            ]
          }
        }
      ]
    },
    {
      "title": "Memory",
      "fields": [
        {
          "type": "radio",
          "name": "working_memory",
          "label": "Working memory, Verbal",
          "options": [
            {
              "label": "Below average",
              "value": "below_average"
            },
            {
              "label": "Average",
              "value": "average"
            },
            {
              "label": "Above average",
              "value": "above_average"
            }
          ]
        },
        {
          "label": "",
          "type": "textarea",
          "name": "working_memory_notes",
          "showIf": {
            "field": "working_memory",
            "oneOf": [
              {
                "label": "Below average",
                "value": "below_average"
              },
              {
                "label": "Average",
                "value": "average"
              },
              {
                "label": "Above average",
                "value": "above_average"
              }
            ]
          }
        },
        {
          "type": "radio",
          "name": "figural_learning_ability",
          "label": "Long-term memory, Figural - Learning ability",
          "options": [
            {
              "label": "Below average",
              "value": "below_average"
            },
            {
              "label": "Average",
              "value": "average"
            },
            {
              "label": "Above average",
              "value": "above_average"
            }
          ]
        },
        {
          "label": "",
          "type": "textarea",
          "name": "figural_learning_ability_notes",
          "showIf": {
            "field": "figural_learning_ability",
            "oneOf": [
              {
                "label": "Below average",
                "value": "below_average"
              },
              {
                "label": "Average",
                "value": "average"
              },
              {
                "label": "Above average",
                "value": "above_average"
              }
            ]
          }
        },
        {
          "type": "radio",
          "name": "figural_short_term",
          "label": "Long-term memory, Figural - Short term",
          "options": [
            {
              "label": "Below average",
              "value": "below_average"
            },
            {
              "label": "Average",
              "value": "average"
            },
            {
              "label": "Above average",
              "value": "above_average"
            }
          ]
        },
        {
          "label": "",
          "type": "textarea",
          "name": "figural_short_term_notes",
          "showIf": {
            "field": "figural_short_term",
            "oneOf": [
              {
                "label": "Below average",
                "value": "below_average"
              },
              {
                "label": "Average",
                "value": "average"
              },
              {
                "label": "Above average",
                "value": "above_average"
              }
            ]
          }
        },
        {
          "type": "radio",
          "name": "figural_long_term",
          "label": "Long-term memory, Figural - Long term",
          "options": [
            {
              "label": "Below average",
              "value": "below_average"
            },
            {
              "label": "Average",
              "value": "average"
            },
            {
              "label": "Above average",
              "value": "above_average"
            }
          ]
        },
        {
          "label": "",
          "type": "textarea",
          "name": "figural_long_term_notes",
          "showIf": {
            "field": "figural_long_term",
            "oneOf": [
              {
                "label": "Below average",
                "value": "below_average"
              },
              {
                "label": "Average",
                "value": "average"
              },
              {
                "label": "Above average",
                "value": "above_average"
              }
            ]
          }
        },
        {
          "type": "radio",
          "name": "figural_recognition",
          "label": "Long-term memory, Figural - Recognition",
          "options": [
            {
              "label": "Below average",
              "value": "below_average"
            },
            {
              "label": "Average",
              "value": "average"
            },
            {
              "label": "Above average",
              "value": "above_average"
            }
          ]
        },
        {
          "label": "",
          "type": "textarea",
          "name": "figural_recognition_notes",
          "showIf": {
            "field": "figural_recognition",
            "oneOf": [
              {
                "label": "Below average",
                "value": "below_average"
              },
              {
                "label": "Average",
                "value": "average"
              },
              {
                "label": "Above average",
                "value": "above_average"
              }
            ]
          }
        }
      ]
    },
    {
      "title": "Executive Functions",
      "fields": [
        {
          "type": "radio",
          "name": "cognitive_flexibility",
          "label": "Cognitive flexibility",
          "options": [
            {
              "label": "Below average",
              "value": "below_average"
            },
            {
              "label": "Average",
              "value": "average"
            },
            {
              "label": "Above average",
              "value": "above_average"
            }
          ]
        },
        {
          "label": "",
          "type": "textarea",
          "name": "cognitive_flexibility_notes",
          "showIf": {
            "field": "cognitive_flexibility",
            "oneOf": [
              {
                "label": "Below average",
                "value": "below_average"
              },
              {
                "label": "Average",
                "value": "average"
              },
              {
                "label": "Above average",
                "value": "above_average"
              }
            ]
          }
        },
        {
          "type": "radio",
          "name": "planing_ability",
          "label": "Planing ability, Visual-spatial",
          "options": [
            {
              "label": "Below average",
              "value": "below_average"
            },
            {
              "label": "Average",
              "value": "average"
            },
            {
              "label": "Above average",
              "value": "above_average"
            }
          ]
        },
        {
          "label": "",
          "type": "textarea",
          "name": "planing_ability_notes",
          "showIf": {
            "field": "planing_ability",
            "oneOf": [
              {
                "label": "Below average",
                "value": "below_average"
              },
              {
                "label": "Average",
                "value": "average"
              },
              {
                "label": "Above average",
                "value": "above_average"
              }
            ]
          }
        },
        {
          "type": "radio",
          "name": "response_inhibition",
          "label": "Response inhibition",
          "options": [
            {
              "label": "Below average",
              "value": "below_average"
            },
            {
              "label": "Average",
              "value": "average"
            },
            {
              "label": "Above average",
              "value": "above_average"
            }
          ]
        },
        {
          "label": "",
          "type": "textarea",
          "name": "response_inhibition_notes",
          "showIf": {
            "field": "response_inhibition",
            "oneOf": [
              {
                "label": "Below average",
                "value": "below_average"
              },
              {
                "label": "Average",
                "value": "average"
              },
              {
                "label": "Above average",
                "value": "above_average"
              }
            ]
          }
        }
      ]
    },
    {
      "title": "Processing Speed",
      "fields": [
        {
          "type": "radio",
          "name": "information_processing_speed",
          "label": "Information processing speed",
          "options": [
            {
              "label": "Below average",
              "value": "below_average"
            },
            {
              "label": "Average",
              "value": "average"
            },
            {
              "label": "Above average",
              "value": "above_average"
            }
          ]
        },
        {
          "label": "",
          "type": "textarea",
          "name": "information_processing_speed_notes",
          "showIf": {
            "field": "information_processing_speed",
            "oneOf": [
              {
                "label": "Below average",
                "value": "below_average"
              },
              {
                "label": "Average",
                "value": "average"
              },
              {
                "label": "Above average",
                "value": "above_average"
              }
            ]
          }
        }
      ]
    },
    {
      "title": "Neglect",
      "fields": [
        {
          "type": "radio",
          "name": "unilateral_left",
          "label": "Neglect unilateral left",
          "options": [
            {
              "label": "Below average",
              "value": "below_average"
            },
            {
              "label": "Average",
              "value": "average"
            },
            {
              "label": "Above average",
              "value": "above_average"
            }
          ]
        },
        {
          "label": "",
          "type": "textarea",
          "name": "unilateral_left_notes",
          "showIf": {
            "field": "unilateral_left",
            "oneOf": [
              {
                "label": "Below average",
                "value": "below_average"
              },
              {
                "label": "Average",
                "value": "average"
              },
              {
                "label": "Above average",
                "value": "above_average"
              }
            ]
          }
        },
        {
          "type": "radio",
          "name": "unilateral_right",
          "label": "Neglect unilateral right",
          "options": [
            {
              "label": "Below average",
              "value": "below_average"
            },
            {
              "label": "Average",
              "value": "average"
            },
            {
              "label": "Above average",
              "value": "above_average"
            }
          ]
        },
        {
          "label": "",
          "type": "textarea",
          "name": "unilateral_right_notes",
          "showIf": {
            "field": "unilateral_right",
            "oneOf": [
              {
                "label": "Below average",
                "value": "below_average"
              },
              {
                "label": "Average",
                "value": "average"
              },
              {
                "label": "Above average",
                "value": "above_average"
              }
            ]
          }
        }
      ]
    },
    {
      "title": "Mouse Use",
      "fields": [
        {
          "type": "radio",
          "name": "mouse_use",
          "label": "Mouse use",
          "options": [
            {
              "label": "Below average",
              "value": "below_average"
            },
            {
              "label": "Average",
              "value": "average"
            },
            {
              "label": "Above average",
              "value": "above_average"
            }
          ]
        },
        {
          "label": "",
          "type": "textarea",
          "name": "mouse_use_notes",
          "showIf": {
            "field": "mouse_use",
            "oneOf": [
              {
                "label": "Below average",
                "value": "below_average"
              },
              {
                "label": "Average",
                "value": "average"
              },
              {
                "label": "Above average",
                "value": "above_average"
              }
            ]
          }
        }
      ]
    },
    {
      "title": "",
      "fields": [
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