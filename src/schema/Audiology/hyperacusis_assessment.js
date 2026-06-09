 const schema = 
 {
  "title": "Hyperacusis Assessment",
  "actions": [
    {
      "type": "back",
      "label": "Back"
    }
  ],
  "sections": [
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "ldl_section",
          "label": "Loudness Discomfort Levels (LDL)",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "ldl_matrix",
              "cornerLabel": "Frequency",
              "cornerLikeGroupHeader": true,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    {
                      "key": "Right Ear (dB HL)"
                    },
                    {
                      "key": "Left Ear (dB HL)"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "250",
                  "label": "250 Hz",
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
                  "value": "500",
                  "label": "500 Hz",
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
                  "value": "1000",
                  "label": "1000 Hz",
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
                  "value": "2000",
                  "label": "2000 Hz",
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
                  "value": "4000",
                  "label": "4000 Hz",
                  "columns": [
                    {
                      "type": "input"
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
          "type": "subheading",
          "label": "Special Test"
        },
        {
          "name": "special_test",
          "label": "Details",
          "type": "input"
        },
        {
          "type": "accordion",
          "name": "intervention_section",
          "label": "Interventions",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "intervention_matrix",
              "cornerLabel": "",
              "cornerLikeGroupHeader": false,
              "showColumnHeaders": true,
              "groups": [
                {
                  "label": "",
                  "columns": [
                    {
                      "key": "Yes / No"
                    },
                    {
                      "key": "Remarks"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "counselling",
                  "label": "Counselling",
                  "columns": [
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "No",
                          "value": 0
                        },
                        {
                          "label": "Yes",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "sound",
                  "label": "Sound Desensitisation / Sound Tolerance Training",
                  "columns": [
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "No",
                          "value": 0
                        },
                        {
                          "label": "Yes",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "hearingaid",
                  "label": "Hearing Aids / Assistive Devices",
                  "columns": [
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "No",
                          "value": 0
                        },
                        {
                          "label": "Yes",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "environment",
                  "label": "Environmental Modification",
                  "columns": [
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "No",
                          "value": 0
                        },
                        {
                          "label": "Yes",
                          "value": 1
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
  ]
}

const mainSchema = {
  "title": "Additional Hyperacusis Profile",
  "actions": [
    {
      "type": "back",
      "label": "Back"
    }
  ],
  "sections": [
    {
      "title": null,
      "fields": [
        {
          "type": "subheading",
          "label": "Case History (Hyperacusis)"
        },
        {
          "name": "onset",
          "label": "Onset of Hyperacusis",
          "type": "input"
        },
        {
          "name": "duration",
          "label": "Duration",
          "type": "input"
        },
        {
          "name": "progression",
          "label": "Progression of symptoms",
          "type": "input"
        },
        {
          "name": "ears",
          "label": "Ears affected",
          "type": "radio",
          "options": [
            {
              "label": "Right",
              "valve": "right"
            },
            {
              "label": "Left",
              "valve": "left"
            },
            {
              "label": "Bilateral",
              "valve": "bilateral"
            }
          ],
          "showIf": {
            "field": "mode",
            "equals": "followup"
          }
        },
        {
          "name": "associated",
          "label": "Associated symptoms",
          "type": "checkbox-group",
          "options": [
            {
              "label": "None",
              "value": "associated_none"
            },
            {
              "label": "Hearing loss",
              "value": "hearing_loss"
            },
            {
              "label": "Vertigo",
              "value": "vertigo"
            },
            {
              "label": "Ear fullness",
              "value": "ear_fullness"
            },
            {
              "label": "Otalgia",
              "value": "otalgia"
            },
            {
              "label": "Hyperacusis",
              "value": "hyperacusis"
            },
            {
              "label": "Other",
              "value": "other"
            }
          ]
        },
        {
          "name": "associated_details",
          "label": "Specify",
          "type": "textarea",
          "showIf": {
            "field": "associated",
            "notEmpty": true
          }
        },
        {
          "name": "exposure",
          "label": "Noise exposure history",
          "type": "checkbox-group",
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "Recreational",
              "value": "recreational"
            },
            {
              "label": "Occupational",
              "value": "occupational"
            }
          ]
        },
        {
          "name": "exposure_details",
          "label": "Specify",
          "type": "textarea",
          "showIf": {
            "field": "exposure",
            "notEmpty": true
          }
        },
        {
          "name": "triggers",
          "label": "Type of sounds that trigger discomfort",
          "type": "input"
        },
        {
          "name": "situations",
          "label": "Situations where sound intolerance is most noticeable",
          "type": "input"
        },
        {
          "name": "reaction",
          "label": "Typical reaction to sound exposure",
          "type": "input"
        },
        {
          "name": "impact",
          "label": "Daily impact (work, sleep, social interaction)",
          "type": "input"
        },
        {
          "type": "subheading",
          "label": "Subjective Rating Scales For Tinnitus"
        },
        {
          "name": "enable_vas",
          "label": "Visual Analog Scale (VAS)",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        },
        {
          "name": "enable_hq",
          "label": "Hyperacusis Questionnaire (HQ)",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        },
        {
          "name": "enable_khalfa",
          "label": "Modified Khalfa Hyperacusis Questionnaire",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        }
      ]
    },
    {
      "title": "Visual Analog Scale (VAS)",
      "enableScoreToggle": true,
      "showIf": {
        "field": "enable_vas",
        "equals": "yes"
      },
      "fields": [
        {
          "type": "info-text",
          "text": "0 = none, 10 = worst possible"
        },
        {
          "name": "vas_loudness",
          "label": "VAS — Loudness Discomfort",
          "type": "scale-slider",
          "min": 0,
          "max": 10,
          "showIf": {
            "field": "enable_vas",
            "equals": "yes"
          }
        },
        {
          "name": "vas_loudness_severity",
          "label": "Loudness Severity",
          "type": "score-box",
          "showIf": {
            "field": "enable_vas",
            "equals": "yes"
          }
        },
        {
          "name": "vas_annoyance",
          "label": "Annoyance - How annoying or bothersome is your tinnitus?",
          "type": "scale-slider",
          "min": 0,
          "max": 10,
          "showIf": {
            "field": "enable_vas",
            "equals": "yes"
          }
        },
        {
          "name": "vas_annoyance_severity",
          "label": "Annoyance Severity",
          "type": "score-box",
          "showIf": {
            "field": "enable_vas",
            "equals": "yes"
          }
        }
      ]
    },
    {
      "title": "Hyperacusis Questionnaire (HQ)",
      "actions": [
        {
          "type": "toggle-show-scores"
        }
      ],
      "showIf": {
        "field": "enable_hq",
        "equals": "yes"
      },
      "fields": [
        {
          "name": "hq_1",
          "label": "1. Do you ever use ear-plugs or ear-muffs to reduce your noise perception (do not consider use during high exposure)?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "A little (1)",
              "value": 1
            },
            {
              "label": "Quite a lot (2)",
              "value": 2
            },
            {
              "label": "A lot (3)",
              "value": 3
            }
          ]
        },
        {
          "name": "hq_2",
          "label": "2. Do you find it harder to ignore sounds around you in everyday situations?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "A little (1)",
              "value": 1
            },
            {
              "label": "Quite a lot (2)",
              "value": 2
            },
            {
              "label": "A lot (3)",
              "value": 3
            }
          ]
        },
        {
          "name": "hq_3",
          "label": "3. Do you have trouble reading in a noisy or loud environment?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "A little (1)",
              "value": 1
            },
            {
              "label": "Quite a lot (2)",
              "value": 2
            },
            {
              "label": "A lot (3)",
              "value": 3
            }
          ]
        },
        {
          "name": "hq_4",
          "label": "4. Do you have trouble concentrating in noisy surroundings?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "A little (1)",
              "value": 1
            },
            {
              "label": "Quite a lot (2)",
              "value": 2
            },
            {
              "label": "A lot (3)",
              "value": 3
            }
          ]
        },
        {
          "name": "hq_5",
          "label": "5. Do you have difficulty listening to conversations in noisy places?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "A little (1)",
              "value": 1
            },
            {
              "label": "Quite a lot (2)",
              "value": 2
            },
            {
              "label": "A lot (3)",
              "value": 3
            }
          ]
        },
        {
          "name": "hq_6",
          "label": "6. Has anyone told you that you tolerate noise or certain sounds badly?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "A little (1)",
              "value": 1
            },
            {
              "label": "Quite a lot (2)",
              "value": 2
            },
            {
              "label": "A lot (3)",
              "value": 3
            }
          ]
        },
        {
          "name": "hq_7",
          "label": "7. Are you particularly sensitive to or bothered by street noise?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "A little (1)",
              "value": 1
            },
            {
              "label": "Quite a lot (2)",
              "value": 2
            },
            {
              "label": "A lot (3)",
              "value": 3
            }
          ]
        },
        {
          "name": "hq_8",
          "label": "8. Do you find noise unpleasant in social situations (clubs, concerts, etc.)?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "A little (1)",
              "value": 1
            },
            {
              "label": "Quite a lot (2)",
              "value": 2
            },
            {
              "label": "A lot (3)",
              "value": 3
            }
          ]
        },
        {
          "name": "hq_9",
          "label": "9. When someone suggests going out, do you think about the noise you will face?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "A little (1)",
              "value": 1
            },
            {
              "label": "Quite a lot (2)",
              "value": 2
            },
            {
              "label": "A lot (3)",
              "value": 3
            }
          ]
        },
        {
          "name": "hq_10",
          "label": "10. Do you turn down invitations because of noise?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "A little (1)",
              "value": 1
            },
            {
              "label": "Quite a lot (2)",
              "value": 2
            },
            {
              "label": "A lot (3)",
              "value": 3
            }
          ]
        },
        {
          "name": "hq_11",
          "label": "11. Do noises bother you more in a quiet place than in a slightly noisy room?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "A little (1)",
              "value": 1
            },
            {
              "label": "Quite a lot (2)",
              "value": 2
            },
            {
              "label": "A lot (3)",
              "value": 3
            }
          ]
        },
        {
          "name": "hq_12",
          "label": "12. Do stress and tiredness reduce your ability to concentrate in noise?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "A little (1)",
              "value": 1
            },
            {
              "label": "Quite a lot (2)",
              "value": 2
            },
            {
              "label": "A lot (3)",
              "value": 3
            }
          ]
        },
        {
          "name": "hq_13",
          "label": "13. Are you less able to concentrate in noise toward the end of the day?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "A little (1)",
              "value": 1
            },
            {
              "label": "Quite a lot (2)",
              "value": 2
            },
            {
              "label": "A lot (3)",
              "value": 3
            }
          ]
        },
        {
          "name": "hq_14",
          "label": "14. Do noise and certain sounds cause you stress and irritation?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "A little (1)",
              "value": 1
            },
            {
              "label": "Quite a lot (2)",
              "value": 2
            },
            {
              "label": "A lot (3)",
              "value": 3
            }
          ]
        },
        {
          "name": "hq_att",
          "label": "Attentional",
          "type": "score-box"
        },
        {
          "name": "hq_soc",
          "label": "Social",
          "type": "score-box"
        },
        {
          "name": "hq_emo",
          "label": "Emotional",
          "type": "score-box"
        },
        {
          "name": "hq_total",
          "label": "Total",
          "type": "score-box"
        }
      ]
    },
    {
      "title": "Modified Khalfa Hyperacusis Questionnaire",
      "showIf": {
        "field": "enable_khalfa",
        "equals": "yes"
      },
      "fields": [
        {
          "name": "khalfa_1",
          "label": "1. Do you have trouble concentrating in a noisy or loud environment?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Yes (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "khalfa_2",
          "label": "2. Do you have trouble reading in a noisy or loud environment?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Yes (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "khalfa_3",
          "label": "3. Do you use earplugs or earmuffs to reduce noise perception?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Yes (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "khalfa_4",
          "label": "4. Do you find it harder to ignore sounds in everyday situations?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Yes (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "khalfa_5",
          "label": "5. Do you find it difficult to listen to announcements (airport, airplane)?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Yes (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "khalfa_6",
          "label": "6. Are you sensitive to or bothered by street noise?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Yes (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "khalfa_7",
          "label": "7. Do you automatically cover your ears with louder sounds?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Yes (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "khalfa_8",
          "label": "8. Do you think about noise when planning outings?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Yes (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "khalfa_9",
          "label": "9. Do you avoid going out because of noise?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Yes (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "khalfa_10",
          "label": "10. Do you find noise unpleasant in social situations?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Yes (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "khalfa_11",
          "label": "11. Has anyone told you that you tolerate noise poorly?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Yes (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "khalfa_12",
          "label": "12. Are you bothered by sounds others are not?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Yes (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "khalfa_13",
          "label": "13. Are you afraid of sounds others are not?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Yes (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "khalfa_14",
          "label": "14. Do noise and sounds cause stress and irritation?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Yes (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "khalfa_15",
          "label": "15. Are you less able to concentrate in noise later in the day?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Yes (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "khalfa_16",
          "label": "16. Do stress and tiredness reduce concentration in noise?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Yes (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "khalfa_17",
          "label": "17. Do sounds annoy you but not others?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Yes (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "khalfa_18",
          "label": "18. Are you emotionally drained by daily sounds?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Yes (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "khalfa_19",
          "label": "19. Do daily sounds have emotional impact?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Yes (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "khalfa_20",
          "label": "20. Are you irritated by sounds that others tolerate?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": 0
            },
            {
              "label": "Sometimes (2)",
              "value": 2
            },
            {
              "label": "Yes (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "khalfa_func",
          "label": "Functional",
          "type": "score-box"
        },
        {
          "name": "khalfa_soc",
          "label": "Social",
          "type": "score-box"
        },
        {
          "name": "khalfa_emo",
          "label": "Emotional",
          "type": "score-box"
        },
        {
          "name": "khalfa_total",
          "label": "Total",
          "type": "score-box"
        }
      ]
    },
    {
      "title": "Counseling Summary",
      "showIf": {
        "field": "mode",
        "equals": "followup"
      },
      "fields": [
        {
          "name": "understanding",
          "label": "Client's Understanding Of Tinnitus",
          "type": "input"
        },
        {
          "name": "recommendations",
          "label": "Recommendations",
          "type": "input"
        }
      ]
    }
  ]
}