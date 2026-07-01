const SCHEMA = {
  "title": "Sensation Test",
  "fields": [
    {
      "type": "accordion",
      "name": "sensation_superficial",
      "label": "1. Superficial Sensation",
      "defaultOpen": true,
      "children": [
        {
          "type": "refraction-12col",
          "name": "sens_superficial",
          "cornerLabel": "Test",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Right",
              "columns": [
                {
                  "key": ""
                }
              ]
            },
            {
              "label": "Left",
              "columns": [
                {
                  "key": ""
                }
              ]
            },
            {
              "label": "Notes",
              "columns": [
                {
                  "key": ""
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "light_touch",
              "label": "Light Touch",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "Intact",
                      "value": "intact"
                    },
                    {
                      "label": "Reduced",
                      "value": "reduced"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "Intact",
                      "value": "intact"
                    },
                    {
                      "label": "Reduced",
                      "value": "reduced"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "type": "input"
                }
              ]
            },
            {
              "value": "pain_sharp_dull",
              "label": "Pain (Sharp/Dull)",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "Intact",
                      "value": "intact"
                    },
                    {
                      "label": "Reduced",
                      "value": "reduced"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "Intact",
                      "value": "intact"
                    },
                    {
                      "label": "Reduced",
                      "value": "reduced"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "type": "input"
                }
              ]
            },
            {
              "value": "temperature",
              "label": "Temperature",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "Intact",
                      "value": "intact"
                    },
                    {
                      "label": "Reduced",
                      "value": "reduced"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "Intact",
                      "value": "intact"
                    },
                    {
                      "label": "Reduced",
                      "value": "reduced"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "type": "input"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "accordion",
      "name": "sensation_proprioception",
      "label": "2. Proprioception",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "sens_proprioception",
          "cornerLabel": "Test",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Right",
              "columns": [
                {
                  "key": ""
                }
              ]
            },
            {
              "label": "Left",
              "columns": [
                {
                  "key": ""
                }
              ]
            },
            {
              "label": "Notes",
              "columns": [
                {
                  "key": ""
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "joint_position",
              "label": "Joint Position Sense",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "Intact",
                      "value": "intact"
                    },
                    {
                      "label": "Impaired",
                      "value": "impaired"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "Intact",
                      "value": "intact"
                    },
                    {
                      "label": "Impaired",
                      "value": "impaired"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "type": "input"
                }
              ]
            },
            {
              "value": "vibration",
              "label": "Vibration (128 Hz)",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "Intact",
                      "value": "intact"
                    },
                    {
                      "label": "Reduced",
                      "value": "reduced"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "Intact",
                      "value": "intact"
                    },
                    {
                      "label": "Reduced",
                      "value": "reduced"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "type": "input"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "accordion",
      "name": "sensation_cortical",
      "label": "3. Cortical Sensation",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "sens_cortical",
          "cornerLabel": "Test",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Right",
              "columns": [
                {
                  "key": ""
                }
              ]
            },
            {
              "label": "Left",
              "columns": [
                {
                  "key": ""
                }
              ]
            },
            {
              "label": "Notes",
              "columns": [
                {
                  "key": ""
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "stereognosis",
              "label": "Stereognosis",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "Intact",
                      "value": "intact"
                    },
                    {
                      "label": "Impaired",
                      "value": "impaired"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "Intact",
                      "value": "intact"
                    },
                    {
                      "label": "Impaired",
                      "value": "impaired"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "type": "input"
                }
              ]
            },
            {
              "value": "graphesthesia",
              "label": "Graphesthesia",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "Intact",
                      "value": "intact"
                    },
                    {
                      "label": "Impaired",
                      "value": "impaired"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "Intact",
                      "value": "intact"
                    },
                    {
                      "label": "Impaired",
                      "value": "impaired"
                    },
                    {
                      "label": "Absent",
                      "value": "absent"
                    }
                  ]
                },
                {
                  "type": "input"
                }
              ]
            },
            {
              "value": "two_point_discrim",
              "label": "Two-Point Discrimination",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced",
                      "value": "reduced"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "Normal",
                      "value": "normal"
                    },
                    {
                      "label": "Reduced",
                      "value": "reduced"
                    }
                  ]
                },
                {
                  "type": "input"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}