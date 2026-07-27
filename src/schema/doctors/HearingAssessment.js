const SCHEMA = {
  "title": "Hearing Assessment",
  "sections": [
    {
      "title": null,
      "fields": [
        {
          "type": "radio",
          "name": "ear_status",
          "label": "Ear Issue",
          "options": [
            {
              "label": "Intact",
              "value": "intact"
            },
            {
              "label": "Impaired",
              "value": "impaired"
            }
          ]
        },
        {
          "type": "multi-select-dropdown",
          "name": "hearing_issue",
          "label": "Hearing Issue",
          "showIf": {
            "field": "ear_status",
            "equals": "impaired"
          },
          "options": [
            {
              "label": "No issue",
              "value": "no_issue"
            },
            {
              "label": "Ear pain",
              "value": "ear_pain"
            },
            {
              "label": "Hearing loss",
              "value": "hearing_loss"
            },
            {
              "label": "Tinnitus",
              "value": "tinnitus"
            },
            {
              "label": "Feeling of fullness",
              "value": "fullness"
            },
            {
              "label": "Ear discharge",
              "value": "ear_discharge"
            },
            {
              "label": "Dizziness",
              "value": "dizziness"
            },
            {
              "label": "Vertigo",
              "value": "vertigo"
            },
            {
              "label": "Nausea",
              "value": "nausea"
            },
            {
              "label": "Itching",
              "value": "itching"
            },
            {
              "label": "Hyperacusis",
              "value": "hyperacusis"
            },
            {
              "label": "Deformity",
              "value": "deformity"
            }
          ]
        },
        {
          "type": "input",
          "name": "hearing_issue_notes",
          "label": "Specify",
          "showIf": {
            "field": "hearing_issue",
            "notEmpty": true
          }
        },
        {
          "type": "radio",
          "name": "hearing_device",
          "label": "Use of Hearing Device",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Hearing aid",
              "value": "hearing_aid"
            },
            {
              "label": "Cochlear implant",
              "value": "cochlear_implant"
            },
            {
              "label": "Other",
              "value": "other"
            }
          ],
          "showIf": {
            "field": "ear_status",
            "equals": "impaired"
          }
        },
        {
          "type": "input",
          "name": "hearing_device_other",
          "label": "Other (specify)",
          "showIf": {
            "field": "ear_status",
            "equals": "impaired",
            "and": {
              "field": "hearing_device",
              "equals": "other"
            }
          }
        },
        {
          "type": "refraction-12col",
          "name": "external_ear_table",
          "cornerLabel": "External Ear",
          "showColumnHeaders": false,
          "groups": [
            {
              "label": "Right Ear",
              "columns": [
                {
                  "key": "Value"
                }
              ]
            },
            {
              "label": "Left Ear",
              "columns": [
                {
                  "key": "Value"
                }
              ]
            }
          ],
          "rows": [
            {
              "label": "Deformity",
              "value": "deformity",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                }
              ]
            },
            {
              "label": "Deformity - Specify",
              "value": "deformity_specify",
              "showIf": {
                "or": [
                  {
                    "field": "external_ear_table_deformity_0",
                    "equals": "Yes"
                  },
                  {
                    "field": "external_ear_table_deformity_1",
                    "equals": "Yes"
                  }
                ]
              },
              "columns": [
                {
                  "type": "input"
                },
                {
                  "type": "input"
                }
              ]
            },
            {
              "label": "Redness",
              "value": "redness",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                }
              ]
            },
            {
              "label": "Redness - Specify",
              "value": "redness_specify",
              "showIf": {
                "or": [
                  {
                    "field": "external_ear_table_redness_0",
                    "equals": "Yes"
                  },
                  {
                    "field": "external_ear_table_redness_1",
                    "equals": "Yes"
                  }
                ]
              },
              "columns": [
                {
                  "type": "input"
                },
                {
                  "type": "input"
                }
              ]
            },
            {
              "label": "Swelling",
              "value": "swelling",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                }
              ]
            },
            {
              "label": "Swelling - Specify",
              "value": "swelling_specify",
              "showIf": {
                "or": [
                  {
                    "field": "external_ear_table_swelling_0",
                    "equals": "Yes"
                  },
                  {
                    "field": "external_ear_table_swelling_1",
                    "equals": "Yes"
                  }
                ]
              },
              "columns": [
                {
                  "type": "input"
                },
                {
                  "type": "input"
                }
              ]
            },
            {
              "label": "Tenderness",
              "value": "tenderness",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                }
              ]
            },
            {
              "label": "Tenderness - Specify",
              "value": "tenderness_specify",
              "showIf": {
                "or": [
                  {
                    "field": "external_ear_table_tenderness_0",
                    "equals": "Yes"
                  },
                  {
                    "field": "external_ear_table_tenderness_1",
                    "equals": "Yes"
                  }
                ]
              },
              "columns": [
                {
                  "type": "input"
                },
                {
                  "type": "input"
                }
              ]
            },
            {
              "label": "Discharge",
              "value": "discharge",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                }
              ]
            },
            {
              "label": "Discharge - Specify",
              "value": "discharge_specify",
              "showIf": {
                "or": [
                  {
                    "field": "external_ear_table_discharge_0",
                    "equals": "Yes"
                  },
                  {
                    "field": "external_ear_table_discharge_1",
                    "equals": "Yes"
                  }
                ]
              },
              "columns": [
                {
                  "type": "input"
                },
                {
                  "type": "input"
                }
              ]
            }
          ],
          "showIf": {
            "field": "ear_status",
            "equals": "impaired"
          }
        },
        {
          "type": "refraction-12col",
          "name": "ear_canal_table",
          "cornerLabel": "Internal Ear",
          "showColumnHeaders": false,
          "groups": [
            {
              "label": "Right Ear",
              "columns": [
                {
                  "key": "Value"
                }
              ]
            },
            {
              "label": "Left Ear",
              "columns": [
                {
                  "key": "Value"
                }
              ]
            }
          ],
          "rows": [
            {
              "label": "Wax",
              "value": "wax",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                }
              ]
            },
            {
              "label": "Wax - Specify",
              "value": "wax_specify",
              "showIf": {
                "or": [
                  {
                    "field": "ear_canal_table_wax_0",
                    "equals": "Yes"
                  },
                  {
                    "field": "ear_canal_table_wax_1",
                    "equals": "Yes"
                  }
                ]
              },
              "columns": [
                {
                  "type": "input"
                },
                {
                  "type": "input"
                }
              ]
            },
            {
              "label": "Redness",
              "value": "redness",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                }
              ]
            },
            {
              "label": "Redness - Specify",
              "value": "redness_specify",
              "showIf": {
                "or": [
                  {
                    "field": "ear_canal_table_redness_0",
                    "equals": "Yes"
                  },
                  {
                    "field": "ear_canal_table_redness_1",
                    "equals": "Yes"
                  }
                ]
              },
              "columns": [
                {
                  "type": "input"
                },
                {
                  "type": "input"
                }
              ]
            },
            {
              "label": "Swelling",
              "value": "swelling",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                }
              ]
            },
            {
              "label": "Swelling - Specify",
              "value": "swelling_specify",
              "showIf": {
                "or": [
                  {
                    "field": "ear_canal_table_swelling_0",
                    "equals": "Yes"
                  },
                  {
                    "field": "ear_canal_table_swelling_1",
                    "equals": "Yes"
                  }
                ]
              },
              "columns": [
                {
                  "type": "input"
                },
                {
                  "type": "input"
                }
              ]
            },
            {
              "label": "Foreign body",
              "value": "foreign_body",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                }
              ]
            },
            {
              "label": "Foreign body - Specify",
              "value": "foreign_body_specify",
              "showIf": {
                "or": [
                  {
                    "field": "ear_canal_table_foreign_body_0",
                    "equals": "Yes"
                  },
                  {
                    "field": "ear_canal_table_foreign_body_1",
                    "equals": "Yes"
                  }
                ]
              },
              "columns": [
                {
                  "type": "input"
                },
                {
                  "type": "input"
                }
              ]
            },
            {
              "label": "Discharge",
              "value": "discharge",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                }
              ]
            },
            {
              "label": "Discharge - Specify",
              "value": "discharge_specify",
              "showIf": {
                "or": [
                  {
                    "field": "ear_canal_table_discharge_0",
                    "equals": "Yes"
                  },
                  {
                    "field": "ear_canal_table_discharge_1",
                    "equals": "Yes"
                  }
                ]
              },
              "columns": [
                {
                  "type": "input"
                },
                {
                  "type": "input"
                }
              ]
            }
          ],
          "showIf": {
            "field": "ear_status",
            "equals": "impaired"
          }
        },
        {
          "type": "subheading",
          "label": "Tympanic membrane (TM)",
          "showIf": {
            "field": "ear_status",
            "equals": "impaired"
          }
        },
        {
          "type": "refraction-12col",
          "name": "tm_table",
          "cornerLabel": "",
          "showColumnHeaders": false,
          "groups": [
            {
              "label": "Right Ear",
              "columns": [
                {
                  "key": "Value"
                }
              ]
            },
            {
              "label": "Left Ear",
              "columns": [
                {
                  "key": "Value"
                }
              ]
            }
          ],
          "rows": [
            {
              "label": "Color: pearly grey (normal)",
              "value": "color",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                }
              ]
            },
            {
              "label": "Color - Specify",
              "value": "color_specify",
              "showIf": {
                "or": [
                  {
                    "field": "tm_table_color_0",
                    "equals": "No"
                  },
                  {
                    "field": "tm_table_color_1",
                    "equals": "No"
                  }
                ]
              },
              "columns": [
                {
                  "type": "input"
                },
                {
                  "type": "input"
                }
              ]
            },
            {
              "label": "Position",
              "value": "position",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    "Neutral",
                    "Bulging",
                    "Retracted"
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    "Neutral",
                    "Bulging",
                    "Retracted"
                  ]
                }
              ]
            },
            {
              "label": "Position - Specify",
              "value": "position_specify",
              "showIf": {
                "or": [
                  {
                    "field": "tm_table_position_0",
                    "oneOf": [
                      "Bulging",
                      "Retracted"
                    ]
                  },
                  {
                    "field": "tm_table_position_1",
                    "oneOf": [
                      "Bulging",
                      "Retracted"
                    ]
                  }
                ]
              },
              "columns": [
                {
                  "type": "input"
                },
                {
                  "type": "input"
                }
              ]
            },
            {
              "label": "Handle of malleus",
              "value": "handle_of_malleus",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                }
              ]
            },
            {
              "label": "Cone of light",
              "value": "cone_of_light",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                }
              ]
            },
            {
              "label": "Perforation or scarring",
              "value": "perforation_scarring",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    "Yes",
                    "No"
                  ]
                }
              ]
            },
            {
              "label": "Specify",
              "value": "landmarks_specify",
              "showIf": {
                "or": [
                  {
                    "field": "tm_table_perforation_scarring_0",
                    "equals": "Yes"
                  },
                  {
                    "field": "tm_table_perforation_scarring_1",
                    "equals": "Yes"
                  }
                ]
              },
              "columns": [
                {
                  "type": "input"
                },
                {
                  "type": "input"
                }
              ]
            }
          ],
          "showIf": {
            "field": "ear_status",
            "equals": "impaired"
          }
        },
        {
          "type": "subheading",
          "label": "Hearing Test",
          "showIf": {
            "field": "ear_status",
            "equals": "impaired"
          }
        },
        {
          "type": "refraction-12col",
          "name": "hearing_test_table",
          "cornerLabel": "",
          "showColumnHeaders": false,
          "groups": [
            {
              "label": "Right Ear",
              "columns": [
                {
                  "key": "Value"
                }
              ]
            },
            {
              "label": "Left Ear",
              "columns": [
                {
                  "key": "Value"
                }
              ]
            }
          ],
          "rows": [
            {
              "label": "Whisper Test",
              "value": "whisper_test",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    "Passed",
                    "Failed"
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    "Passed",
                    "Failed"
                  ]
                }
              ]
            },
            {
              "label": "Dix-Hallpike Test",
              "value": "dix_hallpike_test",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    "Positive",
                    "Negative"
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    "Positive",
                    "Negative"
                  ]
                }
              ]
            }
          ],
          "showIf": {
            "field": "ear_status",
            "equals": "impaired"
          }
        },
        {
          "type": "subheading",
          "label": "Goals",
          "showIf": {
            "field": "ear_status",
            "equals": "impaired",
            "and": {
              "field": "ear_status",
              "equals": "impaired"
            }
          }
        },
        {
          "type": "textarea",
          "name": "hearing_goals",
          "placeholder": "Enter goals",
          "showIf": {
            "field": "ear_status",
            "equals": "impaired",
            "and": {
              "field": "ear_status",
              "equals": "impaired"
            }
          }
        },
        {
          "type": "checkbox-group",
          "name": "hearing_plan",
          "label": "Plan",
          "options": [
            {
              "label": "For further evaluation by Audiologist",
              "value": "audiologist_evaluation"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ],
          "showIf": {
            "field": "ear_status",
            "equals": "impaired"
          }
        },
        {
          "type": "input",
          "name": "hearing_plan_others",
          "label": "Others (Specify)",
          "showIf": {
            "field": "ear_status",
            "equals": "impaired",
            "and": {
              "field": "hearing_plan",
              "includes": "others"
            }
          }
        }
      ]
    }
  ]
}