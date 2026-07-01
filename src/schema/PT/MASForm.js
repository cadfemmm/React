const SCHEMA = {
  "title": "Modified Ashworth Scale (MAS)",
  "titleInfo": {
    "title": "Modified Ashworth Scale (MAS)",
    "content": [
      "0 – No increase in tone",
      "1 – Slight increase in tone, catch/release at end ROM",
      "1+ – Slight increase in tone, catch/release and resistance through rest ROM (½ ROM)",
      "2 – More marked increase in tone through ROM, but affected part moved easily",
      "3 – Considerable increase in tone, passive movement difficult",
      "4 – Affected part in rigid flexion and extension"
    ]
  },
  "fields": [
    {
      "type": "accordion",
      "name": "shoulder_region",
      "label": "Shoulder and Elbow region",
      "defaultOpen": true,
      "children": [
        {
          "type": "refraction-12col",
          "name": "shoulder_region",
          "cornerLabel": "Muscle",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Modified Ashworth Scale (MAS)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "pectoralis_major",
              "label": "Pectoralis Major",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                }
              ]
            },
            {
              "value": "triceps",
              "label": "Triceps",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                }
              ]
            },
            {
              "value": "biceps_brachii",
              "label": "Biceps Brachii",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                }
              ]
            },
            {
              "value": "brachialis",
              "label": "Brachialis",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                }
              ]
            },
            {
              "value": "brachioradialis",
              "label": "Brachioradialis",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "accordion",
      "name": "wrist_region",
      "label": "Wrist Region",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "wrist_region",
          "cornerLabel": "Muscle",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Modified Ashworth Scale (MAS)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "pronator_teres",
              "label": "Pronator Teres",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                }
              ]
            },
            {
              "value": "flexor_carpi_ulnaris",
              "label": "Flexor Carpi Ulnaris (FCU)",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                }
              ]
            },
            {
              "value": "flexor_carpi_radialis",
              "label": "Flexor Carpi Radialis (FCR)",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "accordion",
      "name": "finger_region",
      "label": "Finger Region",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "finger_region",
          "cornerLabel": "Muscle",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Modified Ashworth Scale (MAS)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "flexor_digitorum_profundus",
              "label": "Flexor Digitorum Profundus (FDP)",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                }
              ]
            },
            {
              "value": "flexor_digitorum_superficialis",
              "label": "Flexor Digitorum Superficialis (FDS)",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                }
              ]
            },
            {
              "value": "flexor_pollicis_longus",
              "label": "Flexor Pollicis Longus (FPL)",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "accordion",
      "name": "hamstring",
      "label": "Hamstring",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "hamstring",
          "cornerLabel": "Muscle",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Modified Ashworth Scale (MAS)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "bicep_femoris",
              "label": "Bicep Femoris",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                }
              ]
            },
            {
              "value": "semitendinosus",
              "label": "Semitendinosus",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                }
              ]
            },
            {
              "value": "semimembranosus",
              "label": "Semimembranosus",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                }
              ]
            },
            {
              "value": "adductors",
              "label": "Adductors",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "accordion",
      "name": "ankle_region",
      "label": "Ankle Region",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "ankle_region",
          "cornerLabel": "Muscle",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Modified Ashworth Scale (MAS)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "gastrocnemius",
              "label": "Gastrocnemius",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                }
              ]
            },
            {
              "value": "medical_head",
              "label": "Medical Head",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                }
              ]
            },
            {
              "value": "lateral_head",
              "label": "Lateral Head",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                }
              ]
            },
            {
              "value": "soleus",
              "label": "Soleus",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                }
              ]
            },
            {
              "value": "posterior_tibialis",
              "label": "Posterior Tibialis",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                }
              ]
            },
            {
              "value": "flexor_digitorum_longus",
              "label": "Flexor Digitorum Longus (FDL)",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                }
              ]
            },
            {
              "value": "flexor_hallucis_longus",
              "label": "Flexor Hallucis Longus (FHL)",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
                    }
                  ]
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0",
                      "value": "0"
                    },
                    {
                      "label": "1",
                      "value": "1"
                    },
                    {
                      "label": "1+",
                      "value": "1+"
                    },
                    {
                      "label": "2",
                      "value": "2"
                    },
                    {
                      "label": "3",
                      "value": "3"
                    },
                    {
                      "label": "4",
                      "value": "4"
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