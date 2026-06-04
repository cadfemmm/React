const schema = {
  "title": "Auditory Assessment",
  "actions": [
    {
      "type": "back",
      "label": "Back"
    }
  ],
  "sections": [
    {
      "title": "Hearing device Trial",
      "showIf": {
        "field": "mode",
        "equals": "followup"
      },
      "fields": [
        {
          "name": "hearingaidtrial_required",
          "label": "Hearing device Trial",
          "type": "radio",
          "options": [
            {
              "label": "Yes",
              "value": "yes"
            },
            {
              "label": "No",
              "value": "no"
            }
          ]
        },
        {
          "name": "hearingaidtrial_launcher_obj",
          "label": "",
          "type": "assessment-launcher",
          "showIf": {
            "field": "hearingaidtrial_required",
            "equals": "yes"
          },
          "options": [
            {
              "label": "Hearing device Trial",
              "value": "hearingaidtrial_form_obj"
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "tympanometry_section",
          "label": "Tympanometry",
          "defaultOpen": false,
          "children": [
            {
              "type": "row",
              "columns": 2,
              "fields": [
                {
                  "type": "attach-file",
                  "name": "tympanometry_report",
                  "accept": "application/pdf,image/*",
                  "title": "Tympanometry",
                  "multiple": false,
                  "previewSize": {
                    "width": 400,
                    "height": 400
                  },
                  "hideInputAfterSelect": true
                }
              ]
            },
            {
              "type": "paired-select",
              "right": {
                "name": "tymp_type_r",
                "title": "Right Ear"
              },
              "left": {
                "name": "tymp_type_l",
                "title": "Left Ear"
              },
              "options": [
                {
                  "label": "Type A",
                  "value": "A"
                },
                {
                  "label": "Type As",
                  "value": "As"
                },
                {
                  "label": "Type Ad",
                  "value": "Ad"
                },
                {
                  "label": "Type B (Normal ECV)",
                  "value": "B_normal"
                },
                {
                  "label": "Type B (Small ECV)",
                  "value": "B_small"
                },
                {
                  "label": "Type B (Large ECV)",
                  "value": "B_large"
                },
                {
                  "label": "Type C",
                  "value": "C"
                },
                {
                  "label": "Could Not Test",
                  "value": "could_not"
                }
              ]
            },
            {
              "type": "paired-text",
              "name": "peak_pressure",
              "pairs": [
                {
                  "name": "peak_pressure_r",
                  "title": "Peak Pressure (daPa) – Right"
                },
                {
                  "name": "peak_pressure_l",
                  "title": "Peak Pressure (daPa) – Left"
                }
              ]
            },
            {
              "type": "paired-text",
              "name": "static_compliance",
              "pairs": [
                {
                  "name": "static_compliance_r",
                  "title": "Static Compliance (ml / cm³) – Right"
                },
                {
                  "name": "static_compliance_l",
                  "title": "Static Compliance (ml / cm³) – Left"
                }
              ]
            },
            {
              "type": "paired-text",
              "name": "ecv",
              "pairs": [
                {
                  "name": "ecv_r",
                  "title": "Ear Canal Volume (ml / cm³) – Right"
                },
                {
                  "name": "ecv_l",
                  "title": "Ear Canal Volume (ml / cm³) – Left"
                }
              ]
            }
          ]
        },
        {
          "type": "accordion",
          "name": "oae_section",
          "label": "OAE Screening",
          "defaultOpen": false,
          "children": [
            {
              "type": "row",
              "columns": 2,
              "fields": [
                {
                  "type": "attach-file",
                  "name": "oae_right_upload",
                  "accept": "application/pdf,image/*",
                  "title": "OAE – Right Ear",
                  "multiple": false
                },
                {
                  "type": "attach-file",
                  "name": "oae_left_upload",
                  "accept": "application/pdf,image/*",
                  "title": "OAE – Left Ear",
                  "multiple": false
                }
              ]
            },
            {
              "type": "row",
              "fields": [
                {
                  "name": "oae_right",
                  "type": "radio",
                  "options": [
                    {
                      "label": "Pass",
                      "value": "pass"
                    },
                    {
                      "label": "Refer",
                      "value": "refer"
                    },
                    {
                      "label": "Could Not Test",
                      "value": "could_not_test"
                    }
                  ]
                },
                {
                  "name": "oae_left",
                  "type": "radio",
                  "options": [
                    {
                      "label": "Pass",
                      "value": "pass"
                    },
                    {
                      "label": "Refer",
                      "value": "refer"
                    },
                    {
                      "label": "Could Not Test",
                      "value": "could_not_test"
                    }
                  ]
                }
              ]
            },
            {
              "type": "row",
              "columns": 2,
              "fields": [
                {
                  "type": "attach-file",
                  "name": "dpoae_right_upload",
                  "accept": "application/pdf,image/*",
                  "title": "DPOAE – Right Ear",
                  "multiple": false
                },
                {
                  "type": "attach-file",
                  "name": "dpoae_left_upload",
                  "accept": "application/pdf,image/*",
                  "title": "DPOAE – Left Ear",
                  "multiple": false
                }
              ]
            },
            {
              "type": "row",
              "fields": [
                {
                  "name": "dpoae_right",
                  "type": "radio",
                  "options": [
                    {
                      "label": "Pass",
                      "value": "pass"
                    },
                    {
                      "label": "Refer",
                      "value": "refer"
                    },
                    {
                      "label": "Could Not Test",
                      "value": "could_not_test"
                    }
                  ]
                },
                {
                  "name": "dpoae_left",
                  "type": "radio",
                  "options": [
                    {
                      "label": "Pass",
                      "value": "pass"
                    },
                    {
                      "label": "Refer",
                      "value": "refer"
                    },
                    {
                      "label": "Could Not Test",
                      "value": "could_not_test"
                    }
                  ]
                }
              ]
            },
            {
              "type": "row",
              "columns": 2,
              "fields": [
                {
                  "type": "attach-file",
                  "name": "teoae_right_upload",
                  "accept": "application/pdf,image/*",
                  "title": "TEOAE – Right Ear",
                  "multiple": false
                },
                {
                  "type": "attach-file",
                  "name": "teoae_left_upload",
                  "accept": "application/pdf,image/*",
                  "title": "TEOAE – Left Ear",
                  "multiple": false
                }
              ]
            },
            {
              "type": "row",
              "fields": [
                {
                  "name": "teoae_right",
                  "type": "radio",
                  "options": [
                    {
                      "label": "Pass",
                      "value": "pass"
                    },
                    {
                      "label": "Refer",
                      "value": "refer"
                    },
                    {
                      "label": "Could Not Test",
                      "value": "could_not_test"
                    }
                  ]
                },
                {
                  "name": "teoae_left",
                  "type": "radio",
                  "options": [
                    {
                      "label": "Pass",
                      "value": "pass"
                    },
                    {
                      "label": "Refer",
                      "value": "refer"
                    },
                    {
                      "label": "Could Not Test",
                      "value": "could_not_test"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "accordion",
          "name": "acoustic_reflex_section",
          "label": "Acoustic Reflex - Frequency (Hz)",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "acoustic_reflex_matrix",
              "cornerLabel": "Frequency",
              "cornerLikeGroupHeader": true,
              "showColumnHeaders": true,
              "groups": [
                {
                  "label": "",
                  "columns": [
                    {
                      "key": "Ipsilateral (Right Ear, dB HL)"
                    },
                    {
                      "key": "Ipsilateral (Left Ear, dB HL)"
                    },
                    {
                      "key": "Contralateral (Right Ear Stim)"
                    },
                    {
                      "key": "Contralateral (Left Ear Stim)"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "500",
                  "label": "500 Hz",
                  "columns": [
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "Present",
                          "value": 0
                        },
                        {
                          "label": "Elevated",
                          "value": 1
                        },
                        {
                          "label": "Absent",
                          "value": 2
                        },
                        {
                          "label": "Could Not Test",
                          "value": 3
                        }
                      ]
                    },
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "Present",
                          "value": 0
                        },
                        {
                          "label": "Elevated",
                          "value": 1
                        },
                        {
                          "label": "Absent",
                          "value": 2
                        },
                        {
                          "label": "Could Not Test",
                          "value": 3
                        }
                      ]
                    },
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "Present",
                          "value": 0
                        },
                        {
                          "label": "Elevated",
                          "value": 1
                        },
                        {
                          "label": "Absent",
                          "value": 2
                        },
                        {
                          "label": "Could Not Test",
                          "value": 3
                        }
                      ]
                    },
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "Present",
                          "value": 0
                        },
                        {
                          "label": "Elevated",
                          "value": 1
                        },
                        {
                          "label": "Absent",
                          "value": 2
                        },
                        {
                          "label": "Could Not Test",
                          "value": 3
                        }
                      ]
                    }
                  ]
                },
                {
                  "value": "1000",
                  "label": "1000 Hz",
                  "columns": [
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "Present",
                          "value": 0
                        },
                        {
                          "label": "Elevated",
                          "value": 1
                        },
                        {
                          "label": "Absent",
                          "value": 2
                        },
                        {
                          "label": "Could Not Test",
                          "value": 3
                        }
                      ]
                    },
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "Present",
                          "value": 0
                        },
                        {
                          "label": "Elevated",
                          "value": 1
                        },
                        {
                          "label": "Absent",
                          "value": 2
                        },
                        {
                          "label": "Could Not Test",
                          "value": 3
                        }
                      ]
                    },
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "Present",
                          "value": 0
                        },
                        {
                          "label": "Elevated",
                          "value": 1
                        },
                        {
                          "label": "Absent",
                          "value": 2
                        },
                        {
                          "label": "Could Not Test",
                          "value": 3
                        }
                      ]
                    },
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "Present",
                          "value": 0
                        },
                        {
                          "label": "Elevated",
                          "value": 1
                        },
                        {
                          "label": "Absent",
                          "value": 2
                        },
                        {
                          "label": "Could Not Test",
                          "value": 3
                        }
                      ]
                    }
                  ]
                },
                {
                  "value": "2000",
                  "label": "2000 Hz",
                  "columns": [
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "Present",
                          "value": 0
                        },
                        {
                          "label": "Elevated",
                          "value": 1
                        },
                        {
                          "label": "Absent",
                          "value": 2
                        },
                        {
                          "label": "Could Not Test",
                          "value": 3
                        }
                      ]
                    },
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "Present",
                          "value": 0
                        },
                        {
                          "label": "Elevated",
                          "value": 1
                        },
                        {
                          "label": "Absent",
                          "value": 2
                        },
                        {
                          "label": "Could Not Test",
                          "value": 3
                        }
                      ]
                    },
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "Present",
                          "value": 0
                        },
                        {
                          "label": "Elevated",
                          "value": 1
                        },
                        {
                          "label": "Absent",
                          "value": 2
                        },
                        {
                          "label": "Could Not Test",
                          "value": 3
                        }
                      ]
                    },
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "Present",
                          "value": 0
                        },
                        {
                          "label": "Elevated",
                          "value": 1
                        },
                        {
                          "label": "Absent",
                          "value": 2
                        },
                        {
                          "label": "Could Not Test",
                          "value": 3
                        }
                      ]
                    }
                  ]
                },
                {
                  "value": "4000",
                  "label": "4000 Hz",
                  "columns": [
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "Present",
                          "value": 0
                        },
                        {
                          "label": "Elevated",
                          "value": 1
                        },
                        {
                          "label": "Absent",
                          "value": 2
                        },
                        {
                          "label": "Could Not Test",
                          "value": 3
                        }
                      ]
                    },
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "Present",
                          "value": 0
                        },
                        {
                          "label": "Elevated",
                          "value": 1
                        },
                        {
                          "label": "Absent",
                          "value": 2
                        },
                        {
                          "label": "Could Not Test",
                          "value": 3
                        }
                      ]
                    },
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "Present",
                          "value": 0
                        },
                        {
                          "label": "Elevated",
                          "value": 1
                        },
                        {
                          "label": "Absent",
                          "value": 2
                        },
                        {
                          "label": "Could Not Test",
                          "value": 3
                        }
                      ]
                    },
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "Present",
                          "value": 0
                        },
                        {
                          "label": "Elevated",
                          "value": 1
                        },
                        {
                          "label": "Absent",
                          "value": 2
                        },
                        {
                          "label": "Could Not Test",
                          "value": 3
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
    },
    {
      "title": "Eustachian Tube Function",
      "fields": [
        {
          "type": "row",
          "cols": 2,
          "labelAbove": true,
          "fields": [
            {
              "name": "etf_right",
              "label": "Right Ear Peak Pressure (daPa)",
              "type": "radio",
              "options": [
                {
                  "label": "Normal",
                  "value": 0
                },
                {
                  "label": "Reduced",
                  "value": 1
                },
                {
                  "label": "Absent",
                  "value": 2
                },
                {
                  "label": "Could Not Test",
                  "value": "could_not"
                }
              ]
            },
            {
              "name": "etf_left",
              "label": "Left Ear Peak Pressure (daPa)",
              "type": "radio",
              "options": [
                {
                  "label": "Normal",
                  "value": 0
                },
                {
                  "label": "Reduced",
                  "value": 1
                },
                {
                  "label": "Absent",
                  "value": 2
                },
                {
                  "label": "Could Not Test",
                  "value": "could_not"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": "Speech Test",
      "fields": [
        {
          "type": "checkbox-group",
          "name": "speech_tests",
          "label": "",
          "options": [
            {
              "label": "Speech Reception Threshold (SRT)",
              "value": "srt"
            },
            {
              "label": "Word Recognition Score (WRS)",
              "value": "wrs"
            },
            {
              "label": "Listening Comprehension Task (LCT)",
              "value": "lct"
            },
            {
              "label": "Auditory Processing Task (APT)",
              "value": "apt"
            }
          ]
        },
        {
          "type": "row",
          "cols": 2,
          "showIf": {
            "field": "speech_tests",
            "includes": "srt"
          },
          "fields": [
            {
              "name": "srt_r",
              "label": "SRT Right Ear",
              "type": "input"
            },
            {
              "name": "srt_l",
              "label": "SRT Left Ear",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "cols": 2,
          "showIf": {
            "field": "speech_tests",
            "includes": "wrs"
          },
          "fields": [
            {
              "name": "wrs_r",
              "label": "WRS Right Ear",
              "type": "input"
            },
            {
              "name": "wrs_l",
              "label": "WRS Left Ear",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "cols": 2,
          "showIf": {
            "field": "speech_tests",
            "includes": "lct"
          },
          "fields": [
            {
              "name": "lct_r",
              "label": "LCT Right Ear",
              "type": "input"
            },
            {
              "name": "lct_l",
              "label": "LCT Left Ear",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "cols": 2,
          "showIf": {
            "field": "speech_tests",
            "includes": "apt"
          },
          "fields": [
            {
              "name": "apt_r",
              "label": "APT Right Ear",
              "type": "input"
            },
            {
              "name": "apt_l",
              "label": "APT Left Ear",
              "type": "input"
            }
          ]
        },
        {
          "name": "remarks",
          "label": "Remarks",
          "type": "input",
          "showIf": {
            "field": "speech_tests",
            "notEmpty": true
          }
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "assr_section",
          "label": "Auditory Steady-State Response",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "assr_matrix",
              "cornerLabel": "Frequency",
              "cornerLikeGroupHeader": true,
              "showColumnHeaders": true,
              "groups": [
                {
                  "label": "",
                  "columns": [
                    {
                      "key": "Right Ear Threshold (dB nHL)"
                    },
                    {
                      "key": "Left Ear Threshold (dB nHL)"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "500",
                  "label": "500 Hz",
                  "columns": [
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "0",
                          "value": 0
                        },
                        {
                          "label": "5",
                          "value": 5
                        },
                        {
                          "label": "10",
                          "value": 10
                        },
                        {
                          "label": "15",
                          "value": 15
                        },
                        {
                          "label": "20",
                          "value": 20
                        },
                        {
                          "label": "25",
                          "value": 25
                        },
                        {
                          "label": "30",
                          "value": 30
                        },
                        {
                          "label": "35",
                          "value": 35
                        },
                        {
                          "label": "40",
                          "value": 40
                        },
                        {
                          "label": "45",
                          "value": 45
                        },
                        {
                          "label": "50",
                          "value": 50
                        },
                        {
                          "label": "55",
                          "value": 55
                        },
                        {
                          "label": "60",
                          "value": 60
                        },
                        {
                          "label": "65",
                          "value": 65
                        },
                        {
                          "label": "70",
                          "value": 70
                        },
                        {
                          "label": "75",
                          "value": 75
                        },
                        {
                          "label": "80",
                          "value": 80
                        },
                        {
                          "label": "85",
                          "value": 85
                        },
                        {
                          "label": "90",
                          "value": 90
                        },
                        {
                          "label": "95",
                          "value": 95
                        },
                        {
                          "label": "100",
                          "value": 100
                        }
                      ]
                    },
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "0",
                          "value": 0
                        },
                        {
                          "label": "5",
                          "value": 5
                        },
                        {
                          "label": "10",
                          "value": 10
                        },
                        {
                          "label": "15",
                          "value": 15
                        },
                        {
                          "label": "20",
                          "value": 20
                        },
                        {
                          "label": "25",
                          "value": 25
                        },
                        {
                          "label": "30",
                          "value": 30
                        },
                        {
                          "label": "35",
                          "value": 35
                        },
                        {
                          "label": "40",
                          "value": 40
                        },
                        {
                          "label": "45",
                          "value": 45
                        },
                        {
                          "label": "50",
                          "value": 50
                        },
                        {
                          "label": "55",
                          "value": 55
                        },
                        {
                          "label": "60",
                          "value": 60
                        },
                        {
                          "label": "65",
                          "value": 65
                        },
                        {
                          "label": "70",
                          "value": 70
                        },
                        {
                          "label": "75",
                          "value": 75
                        },
                        {
                          "label": "80",
                          "value": 80
                        },
                        {
                          "label": "85",
                          "value": 85
                        },
                        {
                          "label": "90",
                          "value": 90
                        },
                        {
                          "label": "95",
                          "value": 95
                        },
                        {
                          "label": "100",
                          "value": 100
                        }
                      ]
                    }
                  ]
                },
                {
                  "value": "1000",
                  "label": "1000 Hz",
                  "columns": [
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "0",
                          "value": 0
                        },
                        {
                          "label": "5",
                          "value": 5
                        },
                        {
                          "label": "10",
                          "value": 10
                        },
                        {
                          "label": "15",
                          "value": 15
                        },
                        {
                          "label": "20",
                          "value": 20
                        },
                        {
                          "label": "25",
                          "value": 25
                        },
                        {
                          "label": "30",
                          "value": 30
                        },
                        {
                          "label": "35",
                          "value": 35
                        },
                        {
                          "label": "40",
                          "value": 40
                        },
                        {
                          "label": "45",
                          "value": 45
                        },
                        {
                          "label": "50",
                          "value": 50
                        },
                        {
                          "label": "55",
                          "value": 55
                        },
                        {
                          "label": "60",
                          "value": 60
                        },
                        {
                          "label": "65",
                          "value": 65
                        },
                        {
                          "label": "70",
                          "value": 70
                        },
                        {
                          "label": "75",
                          "value": 75
                        },
                        {
                          "label": "80",
                          "value": 80
                        },
                        {
                          "label": "85",
                          "value": 85
                        },
                        {
                          "label": "90",
                          "value": 90
                        },
                        {
                          "label": "95",
                          "value": 95
                        },
                        {
                          "label": "100",
                          "value": 100
                        }
                      ]
                    },
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "0",
                          "value": 0
                        },
                        {
                          "label": "5",
                          "value": 5
                        },
                        {
                          "label": "10",
                          "value": 10
                        },
                        {
                          "label": "15",
                          "value": 15
                        },
                        {
                          "label": "20",
                          "value": 20
                        },
                        {
                          "label": "25",
                          "value": 25
                        },
                        {
                          "label": "30",
                          "value": 30
                        },
                        {
                          "label": "35",
                          "value": 35
                        },
                        {
                          "label": "40",
                          "value": 40
                        },
                        {
                          "label": "45",
                          "value": 45
                        },
                        {
                          "label": "50",
                          "value": 50
                        },
                        {
                          "label": "55",
                          "value": 55
                        },
                        {
                          "label": "60",
                          "value": 60
                        },
                        {
                          "label": "65",
                          "value": 65
                        },
                        {
                          "label": "70",
                          "value": 70
                        },
                        {
                          "label": "75",
                          "value": 75
                        },
                        {
                          "label": "80",
                          "value": 80
                        },
                        {
                          "label": "85",
                          "value": 85
                        },
                        {
                          "label": "90",
                          "value": 90
                        },
                        {
                          "label": "95",
                          "value": 95
                        },
                        {
                          "label": "100",
                          "value": 100
                        }
                      ]
                    }
                  ]
                },
                {
                  "value": "2000",
                  "label": "2000 Hz",
                  "columns": [
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "0",
                          "value": 0
                        },
                        {
                          "label": "5",
                          "value": 5
                        },
                        {
                          "label": "10",
                          "value": 10
                        },
                        {
                          "label": "15",
                          "value": 15
                        },
                        {
                          "label": "20",
                          "value": 20
                        },
                        {
                          "label": "25",
                          "value": 25
                        },
                        {
                          "label": "30",
                          "value": 30
                        },
                        {
                          "label": "35",
                          "value": 35
                        },
                        {
                          "label": "40",
                          "value": 40
                        },
                        {
                          "label": "45",
                          "value": 45
                        },
                        {
                          "label": "50",
                          "value": 50
                        },
                        {
                          "label": "55",
                          "value": 55
                        },
                        {
                          "label": "60",
                          "value": 60
                        },
                        {
                          "label": "65",
                          "value": 65
                        },
                        {
                          "label": "70",
                          "value": 70
                        },
                        {
                          "label": "75",
                          "value": 75
                        },
                        {
                          "label": "80",
                          "value": 80
                        },
                        {
                          "label": "85",
                          "value": 85
                        },
                        {
                          "label": "90",
                          "value": 90
                        },
                        {
                          "label": "95",
                          "value": 95
                        },
                        {
                          "label": "100",
                          "value": 100
                        }
                      ]
                    },
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "0",
                          "value": 0
                        },
                        {
                          "label": "5",
                          "value": 5
                        },
                        {
                          "label": "10",
                          "value": 10
                        },
                        {
                          "label": "15",
                          "value": 15
                        },
                        {
                          "label": "20",
                          "value": 20
                        },
                        {
                          "label": "25",
                          "value": 25
                        },
                        {
                          "label": "30",
                          "value": 30
                        },
                        {
                          "label": "35",
                          "value": 35
                        },
                        {
                          "label": "40",
                          "value": 40
                        },
                        {
                          "label": "45",
                          "value": 45
                        },
                        {
                          "label": "50",
                          "value": 50
                        },
                        {
                          "label": "55",
                          "value": 55
                        },
                        {
                          "label": "60",
                          "value": 60
                        },
                        {
                          "label": "65",
                          "value": 65
                        },
                        {
                          "label": "70",
                          "value": 70
                        },
                        {
                          "label": "75",
                          "value": 75
                        },
                        {
                          "label": "80",
                          "value": 80
                        },
                        {
                          "label": "85",
                          "value": 85
                        },
                        {
                          "label": "90",
                          "value": 90
                        },
                        {
                          "label": "95",
                          "value": 95
                        },
                        {
                          "label": "100",
                          "value": 100
                        }
                      ]
                    }
                  ]
                },
                {
                  "value": "4000",
                  "label": "4000 Hz",
                  "columns": [
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "0",
                          "value": 0
                        },
                        {
                          "label": "5",
                          "value": 5
                        },
                        {
                          "label": "10",
                          "value": 10
                        },
                        {
                          "label": "15",
                          "value": 15
                        },
                        {
                          "label": "20",
                          "value": 20
                        },
                        {
                          "label": "25",
                          "value": 25
                        },
                        {
                          "label": "30",
                          "value": 30
                        },
                        {
                          "label": "35",
                          "value": 35
                        },
                        {
                          "label": "40",
                          "value": 40
                        },
                        {
                          "label": "45",
                          "value": 45
                        },
                        {
                          "label": "50",
                          "value": 50
                        },
                        {
                          "label": "55",
                          "value": 55
                        },
                        {
                          "label": "60",
                          "value": 60
                        },
                        {
                          "label": "65",
                          "value": 65
                        },
                        {
                          "label": "70",
                          "value": 70
                        },
                        {
                          "label": "75",
                          "value": 75
                        },
                        {
                          "label": "80",
                          "value": 80
                        },
                        {
                          "label": "85",
                          "value": 85
                        },
                        {
                          "label": "90",
                          "value": 90
                        },
                        {
                          "label": "95",
                          "value": 95
                        },
                        {
                          "label": "100",
                          "value": 100
                        }
                      ]
                    },
                    {
                      "type": "select",
                      "options": [
                        {
                          "label": "0",
                          "value": 0
                        },
                        {
                          "label": "5",
                          "value": 5
                        },
                        {
                          "label": "10",
                          "value": 10
                        },
                        {
                          "label": "15",
                          "value": 15
                        },
                        {
                          "label": "20",
                          "value": 20
                        },
                        {
                          "label": "25",
                          "value": 25
                        },
                        {
                          "label": "30",
                          "value": 30
                        },
                        {
                          "label": "35",
                          "value": 35
                        },
                        {
                          "label": "40",
                          "value": 40
                        },
                        {
                          "label": "45",
                          "value": 45
                        },
                        {
                          "label": "50",
                          "value": 50
                        },
                        {
                          "label": "55",
                          "value": 55
                        },
                        {
                          "label": "60",
                          "value": 60
                        },
                        {
                          "label": "65",
                          "value": 65
                        },
                        {
                          "label": "70",
                          "value": 70
                        },
                        {
                          "label": "75",
                          "value": 75
                        },
                        {
                          "label": "80",
                          "value": 80
                        },
                        {
                          "label": "85",
                          "value": 85
                        },
                        {
                          "label": "90",
                          "value": 90
                        },
                        {
                          "label": "95",
                          "value": 95
                        },
                        {
                          "label": "100",
                          "value": 100
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "assr_imp",
              "label": "Impression",
              "type": "input"
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "abr_section",
          "label": "Auditory Brainstem Response",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "abr_matrix",
              "cornerLabel": "",
              "cornerLikeGroupHeader": false,
              "showColumnHeaders": true,
              "groups": [
                {
                  "label": "",
                  "columns": [
                    {
                      "key": "Right Ear"
                    },
                    {
                      "key": "Left Ear"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "abr",
                  "label": "Auditory Brainstem Response",
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
                  "value": "impression",
                  "label": "Impression",
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
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "ep_section",
          "label": "Electrophysiology For Hearing",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "ep_matrix",
              "cornerLabel": "",
              "cornerLikeGroupHeader": false,
              "showColumnHeaders": true,
              "groups": [
                {
                  "label": "",
                  "columns": [
                    {
                      "key": "Right Ear"
                    },
                    {
                      "key": "Left Ear"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "ep",
                  "label": "Electrophysiology For Hearing",
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
                  "value": "impression",
                  "label": "Impression",
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
        }
      ]
    },
    {
      "title": "Special Test",
      "fields": [
        {
          "name": "special_test",
          "label": "Details",
          "type": "input"
        }
      ]
    }
  ]
}