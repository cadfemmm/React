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
const mainSchema = {
  "title": "Additional Tinnitus Profile",
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
          "label": "Subjective Rating Scales For Tinnitus"
        },
        {
          "name": "enable_vas",
          "label": "Subjective Rating Scales (Hearing Loss)",
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
          "name": "enable_hhia",
          "label": "HHIA (Hearing Handicap Inventory for Adults)",
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
          "name": "enable_cosi",
          "label": "COSI (Client Oriented Scale of Improvement)",
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
      "title": "Subjective Rating Scales (Hearing Loss)",
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
          "name": "emotional_vas",
          "label": "Analogue Scale : Emotional (0-10)",
          "type": "scale-slider",
          "min": 0,
          "max": 10,
          "showIf": {
            "field": "enable_vas",
            "equals": "yes"
          }
        },
        {
          "name": "emotional_severity",
          "label": "Emotional Severity",
          "type": "score-box",
          "showIf": {
            "field": "enable_vas",
            "equals": "yes"
          }
        },
        {
          "name": "social_vas",
          "label": "Analogue Scale : Social / Situational (0-10)",
          "type": "scale-slider",
          "min": 0,
          "max": 10,
          "showIf": {
            "field": "enable_vas",
            "equals": "yes"
          }
        },
        {
          "name": "social_severity",
          "label": "Social Severity",
          "type": "score-box",
          "showIf": {
            "field": "enable_vas",
            "equals": "yes"
          }
        }
      ]
    },
    {
      "title": "HHIA (Hearing Handicap Inventory for Adults)",
      "actions": [
        {
          "type": "toggle-show-scores"
        }
      ],
      "showIf": {
        "field": "enable_hhia",
        "equals": "yes"
      },
      "fields": [
        {
          "type": "info-text",
          "text": "HHIA Scoring: No = 0, Sometimes = 2, Yes = 4"
        },
        {
          "name": "hhia_1",
          "label": "1. Does a hearing problem cause you to feel embarrassed when meeting new people?",
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
          "name": "hhia_2",
          "label": "2. Does a hearing problem cause you to feel frustrated when talking to family members?",
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
          "name": "hhia_3",
          "label": "3. Do you have difficulty hearing when someone speaks softly or from another room?",
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
          "name": "hhia_4",
          "label": "4. Does a hearing problem cause you difficulty when visiting friends, relatives, or neighbors?",
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
          "name": "hhia_5",
          "label": "5. Does a hearing problem cause you to attend religious services less often than you would like?",
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
          "name": "hhia_6",
          "label": "6. Does a hearing problem cause you arguments with family members?",
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
          "name": "hhia_7",
          "label": "7. Does a hearing problem cause you difficulty when listening to TV or radio?",
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
          "name": "hhia_8",
          "label": "8. Does a hearing problem cause you to feel left out of conversations?",
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
          "name": "hhia_9",
          "label": "9. Does a hearing problem cause you difficulty when talking on the telephone?",
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
          "name": "hhia_10",
          "label": "10. Does a hearing problem make you feel isolated or alone?",
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
          "name": "hhia_11",
          "label": "11. Does a hearing problem cause you difficulty in understanding speech in a group of people?",
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
          "name": "hhia_12",
          "label": "12. Does a hearing problem make you feel stressed or anxious in social situations?",
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
          "name": "hhia_13",
          "label": "13. Does a hearing problem cause you difficulty in understanding speech in noisy places?",
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
          "name": "hhia_14",
          "label": "14. Does a hearing problem make it difficult to enjoy social gatherings?",
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
          "name": "hhia_15",
          "label": "15. Does a hearing problem cause you difficulty in understanding speech in quiet environments?",
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
          "name": "hhia_16",
          "label": "16. Does a hearing problem affect your work or job performance?",
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
          "name": "hhia_17",
          "label": "17. Does a hearing problem cause you to avoid social situations?",
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
          "name": "hhia_18",
          "label": "18. Does a hearing problem cause misunderstandings with family or friends?",
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
          "name": "hhia_19",
          "label": "19. Does a hearing problem make you feel frustrated in conversations?",
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
          "name": "hhia_20",
          "label": "20. Does a hearing problem affect your confidence in social situations?",
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
          "name": "hhia_21",
          "label": "21. Does a hearing problem cause difficulty in understanding speech when watching TV with others?",
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
          "name": "hhia_22",
          "label": "22. Does a hearing problem make you feel dependent on others?",
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
          "name": "hhia_23",
          "label": "23. Does a hearing problem cause difficulty in hearing doorbells or alarms?",
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
          "name": "hhia_24",
          "label": "24. Does a hearing problem make you feel irritated in daily communication?",
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
          "name": "hhia_25",
          "label": "25. Does a hearing problem affect your overall quality of life?",
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
          "name": "hhia_social",
          "label": "Social Score (/48)",
          "type": "score-box",
          "showIf": {
            "field": "enable_hhia",
            "equals": "yes"
          }
        },
        {
          "name": "hhia_emotional",
          "label": "Emotional Score (/52)",
          "type": "score-box",
          "showIf": {
            "field": "enable_hhia",
            "equals": "yes"
          }
        },
        {
          "name": "hhia_total",
          "label": "Total Score (/100)",
          "type": "score-box",
          "showIf": {
            "field": "enable_hhia",
            "equals": "yes"
          }
        },
        {
          "name": "hhia_social_percent",
          "label": "Social %",
          "type": "score-box",
          "showIf": {
            "field": "enable_hhia",
            "equals": "yes"
          }
        },
        {
          "name": "hhia_emotional_percent",
          "label": "Emotional %",
          "type": "score-box",
          "showIf": {
            "field": "enable_hhia",
            "equals": "yes"
          }
        },
        {
          "name": "hhia_total_percent",
          "label": "Total %",
          "type": "score-box",
          "showIf": {
            "field": "enable_hhia",
            "equals": "yes"
          }
        },
        {
          "name": "hhia_interpretation",
          "label": "Interpretation",
          "type": "score-box",
          "showIf": {
            "field": "enable_hhia",
            "equals": "yes"
          }
        }
      ]
    },
    {
      "title": "COSI (Client Oriented Scale of Improvement)",
      "showIf": {
        "field": "enable_cosi",
        "equals": "yes"
      },
      "fields": [
        {
          "name": "cosi_situations",
          "label": "Select listening situations (choose up to 5)",
          "type": "checkbox-group",
          "maxSelect": 5,
          "options": [
            {
              "label": "Conversation with 1 or 2 in quiet",
              "value": "conversation_1_2_quiet"
            },
            {
              "label": "Conversation with 1 or 2 in noise",
              "value": "conversation_1_2_noise"
            },
            {
              "label": "Conversation with group in quiet",
              "value": "conversation_group_quiet"
            },
            {
              "label": "Conversation with group in noise",
              "value": "conversation_group_noise"
            },
            {
              "label": "Television / Radio at normal volume",
              "value": "tv_radio_normal_volume"
            },
            {
              "label": "Familiar speaker on phone",
              "value": "familiar_speaker_phone"
            },
            {
              "label": "Unfamiliar speaker on phone",
              "value": "unfamiliar_speaker_phone"
            },
            {
              "label": "Hearing phone ring from another room",
              "value": "phone_ring_other_room"
            },
            {
              "label": "Hear front door bell or knock",
              "value": "door_bell_knock"
            },
            {
              "label": "Hear traffic",
              "value": "hear_traffic"
            },
            {
              "label": "Increased social contact",
              "value": "increased_social_contact"
            },
            {
              "label": "Feel embarrassed or stupid",
              "value": "feel_embarrassed_stupid"
            },
            {
              "label": "Feeling left out",
              "value": "feeling_left_out"
            },
            {
              "label": "Feeling upset or angry",
              "value": "feeling_upset_angry"
            },
            {
              "label": "Church or meeting",
              "value": "church_meeting"
            },
            {
              "label": "Other",
              "value": "other"
            }
          ]
        },
        {
          "name": "cosi_other_text",
          "label": "If 'Other', specify",
          "type": "text",
          "placeholder": "Describe additional listening situation...",
          "showIf": {
            "field": "cosi_situations",
            "includes": "other"
          }
        },
        {
          "name": "cosi_priority_ranking",
          "label": "Selected goals — priority ranking (1 = most important)",
          "type": "ranking",
          "sourceField": "cosi_situations",
          "minRank": 1,
          "maxRank": 5,
          "showIf": {
            "field": "cosi_situations",
            "notEmpty": true
          }
        },
        {
          "type": "info-text",
          "label": "Step-2: Post-Intervention - Degree of Change",
          "showIf": {
            "field": "mode",
            "equals": "followup"
          }
        },
        {
          "type": "dynamic-section",
          "name": "cosi_change",
          "showIf": {
            "field": "mode",
            "equals": "followup"
          },
          "fields": [
            {
              "name": "goal",
              "label": "Goal",
              "type": "input"
            },
            {
              "name": "change",
              "label": "Degree of Change",
              "type": "radio",
              "options": [
                "Much better",
                "Better",
                "Slightly better",
                "No change",
                "Worse"
              ]
            }
          ]
        },
        {
          "sections": [
            {
              "title": null,
              "fields": [
                {
                  "type": "info-text",
                  "label": "Step-2: Post-Intervention - Degree of Change",
                  "showIf": {
                    "field": "mode",
                    "equals": "followup"
                  }
                },
                {
                  "type": "dynamic-section",
                  "name": "cosi_change",
                  "showIf": {
                    "field": "mode",
                    "equals": "followup"
                  },
                  "fields": [
                    {
                      "name": "goal",
                      "label": "Goal",
                      "type": "input"
                    },
                    {
                      "name": "change",
                      "label": "Degree of Change",
                      "type": "radio",
                      "options": [
                        "Much better",
                        "Better",
                        "Slightly better",
                        "No change",
                        "Worse"
                      ]
                    }
                  ]
                },
                {
                  "type": "info-text",
                  "label": "Step 3: Post-Intervention - Final Ability Rating",
                  "showIf": {
                    "field": "mode",
                    "equals": "followup"
                  }
                },
                {
                  "type": "dynamic-section",
                  "name": "cosi_final",
                  "showIf": {
                    "field": "mode",
                    "equals": "followup"
                  },
                  "fields": [
                    {
                      "name": "goal",
                      "label": "Goal",
                      "type": "input"
                    },
                    {
                      "name": "final",
                      "label": "Final Ability Rating",
                      "type": "radio",
                      "options": [
                        "Hardly ever",
                        "Occasionally",
                        "Half the time",
                        "Most of the time",
                        "Almost always"
                      ]
                    }
                  ]
                },
                {
                  "type": "subheading",
                  "label": "Counseling Summary",
                  "showIf": {
                    "field": "mode",
                    "equals": "followup"
                  }
                },
                {
                  "name": "understanding",
                  "label": "Patient's understanding of hearing loss",
                  "type": "input",
                  "showIf": {
                    "field": "mode",
                    "equals": "followup"
                  }
                },
                {
                  "name": "goals",
                  "label": "Expectations / goals",
                  "type": "input",
                  "showIf": {
                    "field": "mode",
                    "equals": "followup"
                  }
                },
                {
                  "name": "education",
                  "label": "Education provided",
                  "type": "input",
                  "showIf": {
                    "field": "mode",
                    "equals": "followup"
                  }
                },
                {
                  "name": "next_steps",
                  "label": "Recommended next steps",
                  "type": "input",
                  "showIf": {
                    "field": "mode",
                    "equals": "followup"
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "info-text",
          "label": "Step 3: Post-Intervention - Final Ability Rating",
          "showIf": {
            "field": "mode",
            "equals": "followup"
          }
        },
        {
          "type": "dynamic-section",
          "name": "cosi_final",
          "showIf": {
            "field": "mode",
            "equals": "followup"
          },
          "fields": [
            {
              "name": "goal",
              "label": "Goal",
              "type": "input"
            },
            {
              "name": "final",
              "label": "Final Ability Rating",
              "type": "radio",
              "options": [
                "Hardly ever",
                "Occasionally",
                "Half the time",
                "Most of the time",
                "Almost always"
              ]
            }
          ]
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