const SUBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "name": "accompaniedBy",
          "label": "Patient was seen",
          "type": "radio",
          "options": [
            {
              "label": "Unaccompanied",
              "value": "unaccompanied"
            },
            {
              "label": "Accompanied",
              "value": "accompanied"
            }
          ]
        },
        {
          "name": "chief_complaint",
          "label": "Chief Complaint",
          "type": "input"
        },
        {
          "name": "hpi",
          "label": "History of Presenting Illness (HPI)",
          "type": "input"
        },
        {
          "type": "subheading",
          "label": "Presenting Complaints"
        },
        {
          "name": "swallowingProblems",
          "label": "Swallowing problems",
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
          "name": "swallowingDetails",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Drooling",
              "value": "drooling"
            },
            {
              "label": "Coughing with drink",
              "value": "coughing"
            },
            {
              "label": "Choking on food",
              "value": "choking"
            },
            {
              "label": "Food / pills stuck in throat",
              "value": "stuck"
            },
            {
              "label": "Pain on swallowing (odynophagia)",
              "value": "pain"
            }
          ],
          "showIf": {
            "field": "swallowingProblems",
            "equals": "yes"
          }
        },
        {
          "name": "communicationProblems",
          "label": "Communication problems",
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
          "name": "communicationDetails",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Understanding spoken language",
              "value": "understanding"
            },
            {
              "label": "Expressing thoughts verbally",
              "value": "expressing"
            },
            {
              "label": "Reading comprehension",
              "value": "reading"
            },
            {
              "label": "Written expression",
              "value": "writing"
            },
            {
              "label": "Speech clarity / intelligibility",
              "value": "clarity"
            },
            {
              "label": "Voice quality",
              "value": "voice_quality"
            }
          ],
          "showIf": {
            "field": "communicationProblems",
            "equals": "yes"
          }
        },
        {
          "name": "voiceProblems",
          "label": "Voice problems",
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
          "name": "voiceDetails",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Hoarse / weak / strained voice",
              "value": "hoarse"
            },
            {
              "label": "Reduced vocal loudness",
              "value": "low_voice"
            },
            {
              "label": "Voice fatigue",
              "value": "fatigue"
            },
            {
              "label": "Pain when speaking (odynophonia)",
              "value": "pain"
            },
            {
              "label": "Shortness of breath while speaking",
              "value": "breathless"
            }
          ],
          "showIf": {
            "field": "voiceProblems",
            "equals": "yes"
          }
        },
        {
          "name": "tracheostomyProblems",
          "label": "Tracheostomy",
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
          "name": "tracheostomyDetails",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Poor secretion management",
              "value": "secretion"
            },
            {
              "label": "Absent or weak voice",
              "value": "weak_voice"
            },
            {
              "label": "Difficulty tolerating cuff deflation or speaking valve",
              "value": "cuff"
            },
            {
              "label": "Unable to wean / decannulate",
              "value": "wean"
            },
            {
              "label": "Increased coughing during oral intake",
              "value": "coughing"
            }
          ],
          "showIf": {
            "field": "tracheostomyProblems",
            "equals": "yes"
          }
        },
        {
          "name": "otherProblems",
          "label": "Other complaints",
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
          "name": "otherDetails",
          "label": "Remarks",
          "type": "textarea",
          "showIf": {
            "field": "otherProblems",
            "equals": "yes"
          }
        },
        {
          "name": "subjectiveLauncher",
          "type": "assessment-launcher",
          "label": "",
          "options": [
            {
              "label": "Swallowing",
              "value": "swallow_subjective",
              "visibleIf": {
                "field": "swallowingProblems",
                "equals": "yes"
              }
            },
            {
              "label": "Voice",
              "value": "voice_subjective",
              "visibleIf": {
                "field": "voiceProblems",
                "equals": "yes"
              }
            },
            {
              "label": "Tracheostomy",
              "value": "trach_subjective",
              "visibleIf": {
                "field": "tracheostomyProblems",
                "equals": "yes"
              }
            }
          ],
          "showIf": {
            "or": [
              {
                "field": "swallowingProblems",
                "equals": "yes"
              },
              {
                "field": "communicationProblems",
                "equals": "yes"
              },
              {
                "field": "voiceProblems",
                "equals": "yes"
              },
              {
                "field": "tracheostomyProblems",
                "equals": "yes"
              }
            ]
          }
        }
      ]
    }
  ]
}

const OBJECTIVE = {
  "title": "",
  "sections": [
    {
      "fields": [
        {
          "name": "arousalLevel",
          "label": "Arousal level",
          "type": "radio",
          "options": [
            {
              "label": "Alert",
              "value": "Alert"
            },
            {
              "label": "Fleeting Alertness",
              "value": "Fleeting Alertness"
            },
            {
              "label": "Drowsy",
              "value": "Drowsy"
            }
          ]
        },
        {
          "name": "sittingIn",
          "label": "Sitting in",
          "type": "radio",
          "options": [
            {
              "label": "Chair",
              "value": "chair"
            },
            {
              "label": "Wheelchair",
              "value": "wheelchair"
            },
            {
              "label": "Bed",
              "value": "bed"
            }
          ]
        },
        {
          "name": "position",
          "label": "Position",
          "type": "radio",
          "options": [
            {
              "label": "Upright (90 degrees)",
              "value": "upright"
            },
            {
              "label": "Slightly Reclined",
              "value": "slightly_reclined"
            },
            {
              "label": "60 Degrees",
              "value": "60_degrees"
            },
            {
              "label": "45 Degrees",
              "value": "45_degrees"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Vitals"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "spo2",
              "label": "SpO2 (%)",
              "type": "input",
              "placeholder": "e.g. 98"
            },
            {
              "name": "rr",
              "label": "RR (breaths/min)",
              "type": "input",
              "placeholder": "e.g. 18"
            },
            {
              "name": "hr",
              "label": "HR (bpm)",
              "type": "input",
              "placeholder": "e.g. 72"
            },
            {
              "name": "bp",
              "label": "BP (mmHg)",
              "type": "input",
              "placeholder": "e.g. 120/80"
            }
          ]
        },
        {
          "name": "oralHygiene",
          "label": "Oral hygiene",
          "type": "radio",
          "options": [
            {
              "label": "Poor",
              "value": "poor"
            },
            {
              "label": "Fair",
              "value": "fair"
            },
            {
              "label": "Good",
              "value": "good"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Oral Structure Observation"
        },
        {
          "name": "teeth",
          "label": "Teeth",
          "type": "radio",
          "options": [
            {
              "label": "Complete",
              "value": "complete"
            },
            {
              "label": "Incomplete",
              "value": "incomplete"
            },
            {
              "label": "Dentures",
              "value": "dentures"
            },
            {
              "label": "Edentulous",
              "value": "edentulous"
            }
          ]
        },
        {
          "name": "hardPalate",
          "label": "Hard palate",
          "type": "radio",
          "options": [
            {
              "label": "No Abnormality Detected",
              "value": "no_abnormalit_detected"
            },
            {
              "label": "High Arch",
              "value": "high_arch"
            },
            {
              "label": "Cleft",
              "value": "cleft"
            }
          ]
        },
        {
          "name": "softPalate",
          "label": "Soft palate",
          "type": "radio",
          "options": [
            {
              "label": "No Abnormality Detected",
              "value": "No_abnormality_detected"
            },
            {
              "label": "Reduced Elevation",
              "value": "reduced_elevation"
            },
            {
              "label": "Bifid Uvula",
              "value": "bifid_uvula"
            },
            {
              "label": "Scarring",
              "value": "scarring"
            }
          ]
        },
        {
          "name": "tongue",
          "label": "Tongue",
          "type": "radio",
          "options": [
            {
              "label": "No Abnormality Detected",
              "value": "No_abnormality_detected"
            },
            {
              "label": "Deviation",
              "value": "deviation"
            },
            {
              "label": "Fasciculations",
              "value": "fasciculations"
            },
            {
              "label": "Thrush",
              "value": "thrush"
            },
            {
              "label": "Reduced ROM",
              "value": "reduced_rom"
            }
          ]
        },
        {
          "name": "lips",
          "label": "Lips",
          "type": "radio",
          "options": [
            {
              "label": "No Abnormality Detected",
              "value": "No_abnormality_detected"
            },
            {
              "label": "Reduced Seal",
              "value": "reduced_seal"
            },
            {
              "label": "Asymmetry",
              "value": "asymmetry"
            },
            {
              "label": "Cleft",
              "value": "cleft"
            },
            {
              "label": "Scarring",
              "value": "scarring"
            }
          ]
        },
        {
          "name": "hardPalateRemarks",
          "label": "Remarks",
          "type": "textarea"
        },
        {
          "type": "subheading",
          "label": "Cranial Nerve Examination"
        },
        {
          "name": "cranial_nerve",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "CN V",
              "value": "cn_v"
            },
            {
              "label": "CN VII",
              "value": "cn_vii"
            },
            {
              "label": "CN IX & X",
              "value": "cn_ix_x"
            },
            {
              "label": "CN XII",
              "value": "cn_xii"
            }
          ]
        },
        {
          "label": "CN V",
          "showIf": {
            "field": "cranial_nerve",
            "includes": "cn_v"
          }
        },
        {
          "name": "cn5_motor",
          "label": "Motor (Jaw ROM / Strength)",
          "type": "radio",
          "showIf": {
            "field": "cranial_nerve",
            "includes": "cn_v"
          },
          "options": [
            {
              "label": "Within Normal Limit",
              "value": "wnl"
            },
            {
              "label": "Impaired",
              "value": "impaired"
            },
            {
              "label": "Not Tested",
              "value": "not_tested"
            }
          ]
        },
        {
          "name": "cn5_sensory",
          "label": "Sensory (Facial sensation)",
          "type": "radio",
          "showIf": {
            "field": "cranial_nerve",
            "includes": "cn_v"
          },
          "options": [
            {
              "label": "Within Normal Limit",
              "value": "wnl"
            },
            {
              "label": "Impaired",
              "value": "impaired"
            },
            {
              "label": "Not Tested",
              "value": "not_tested"
            }
          ]
        },
        {
          "label": "CN VII",
          "showIf": {
            "field": "cranial_nerve",
            "includes": "cn_vii"
          }
        },
        {
          "name": "cn7_motor",
          "label": "Motor (Facial movements)",
          "type": "radio",
          "showIf": {
            "field": "cranial_nerve",
            "includes": "cn_vii"
          },
          "options": [
            {
              "label": "Within Normal Limit",
              "value": "wnl"
            },
            {
              "label": "Impaired",
              "value": "impaired"
            },
            {
              "label": "Not Tested",
              "value": "not_tested"
            }
          ]
        },
        {
          "name": "cn7_symmetry",
          "label": "Facial Symmetry",
          "type": "radio",
          "showIf": {
            "field": "cranial_nerve",
            "includes": "cn_vii"
          },
          "options": [
            {
              "label": "Symmetry",
              "value": "symmetry"
            },
            {
              "label": "Asymmetrical",
              "value": "asymmetrical"
            },
            {
              "label": "Left Facial Droop",
              "value": "left_droop"
            },
            {
              "label": "Right Facial Droop",
              "value": "right_droop"
            }
          ]
        },
        {
          "name": "cn7_sensory",
          "label": "Sensory (Taste - anterior 2/3 tongue)",
          "type": "radio",
          "showIf": {
            "field": "cranial_nerve",
            "includes": "cn_vii"
          },
          "options": [
            {
              "label": "Within Normal Limit",
              "value": "wnl"
            },
            {
              "label": "Impaired",
              "value": "impaired"
            },
            {
              "label": "Not Tested",
              "value": "not_tested"
            }
          ]
        },
        {
          "label": "CN IX & X",
          "showIf": {
            "field": "cranial_nerve",
            "includes": "cn_ix_x"
          }
        },
        {
          "name": "cn9_10_motor",
          "label": "Motor (Soft Palate, Cough)",
          "type": "radio",
          "showIf": {
            "field": "cranial_nerve",
            "includes": "cn_ix_x"
          },
          "options": [
            {
              "label": "Within Normal Limit",
              "value": "wnl"
            },
            {
              "label": "Impaired",
              "value": "impaired"
            },
            {
              "label": "Not Tested",
              "value": "not_tested"
            }
          ]
        },
        {
          "name": "cn9_10_sensory",
          "label": "Sensory (Gag)",
          "type": "radio",
          "showIf": {
            "field": "cranial_nerve",
            "includes": "cn_ix_x"
          },
          "options": [
            {
              "label": "Within Normal Limit",
              "value": "wnl"
            },
            {
              "label": "Reduced",
              "value": "reduced"
            },
            {
              "label": "Not Tested",
              "value": "not_tested"
            }
          ]
        },
        {
          "name": "cn9_10_voice",
          "label": "Voice quality",
          "type": "radio",
          "showIf": {
            "field": "cranial_nerve",
            "includes": "cn_ix_x"
          },
          "options": [
            {
              "label": "No Abnormality Detected",
              "value": "nad"
            },
            {
              "label": "Impaired",
              "value": "impaired"
            },
            {
              "label": "Not Tested",
              "value": "not_tested"
            }
          ]
        },
        {
          "label": "CN XII",
          "showIf": {
            "field": "cranial_nerve",
            "includes": "cn_xii"
          }
        },
        {
          "name": "cn12_motor",
          "label": "Motor (Tongue ROM / Strength)",
          "type": "radio",
          "showIf": {
            "field": "cranial_nerve",
            "includes": "cn_xii"
          },
          "options": [
            {
              "label": "Within Normal Limit",
              "value": "wnl"
            },
            {
              "label": "Impaired",
              "value": "impaired"
            },
            {
              "label": "Not Tested",
              "value": "not_tested"
            }
          ]
        },
        {
          "name": "objectiveLauncher",
          "type": "assessment-launcher",
          "label": "",
          "options": [
            {
              "label": "Swallowing",
              "value": "swallow_objective",
              "visibleIf": {
                "field": "swallowingProblems",
                "equals": "yes"
              }
            },
            {
              "label": "Speech & Language",
              "value": "comm_objective",
              "visibleIf": {
                "field": "communicationProblems",
                "equals": "yes"
              }
            },
            {
              "label": "Voice",
              "value": "voice_objective",
              "visibleIf": {
                "field": "voiceProblems",
                "equals": "yes"
              }
            },
            {
              "label": "Tracheostomy",
              "value": "trach_objective",
              "visibleIf": {
                "field": "tracheostomyProblems",
                "equals": "yes"
              }
            }
          ],
          "showIf": {
            "or": [
              {
                "field": "swallowingProblems",
                "equals": "yes"
              },
              {
                "field": "communicationProblems",
                "equals": "yes"
              },
              {
                "field": "voiceProblems",
                "equals": "yes"
              },
              {
                "field": "tracheostomyProblems",
                "equals": "yes"
              }
            ]
          }
        }
      ]
    }
  ]
}

const ASSESSMENT = {
  "title": "",
  "sections": [
    {
      "fields": [
        {
          "name": "clinical_impression",
          "label": "Clinical Impression",
          "type": "input"
        },
        {
          "name": "assessmentLauncher",
          "type": "assessment-launcher",
          "label": "",
          "options": [
            {
              "label": "Swallowing",
              "value": "swallow_assessment",
              "visibleIf": {
                "field": "swallowingProblems",
                "equals": "yes"
              }
            },
            {
              "label": "Speech & Language",
              "value": "comm_assessment",
              "visibleIf": {
                "field": "communicationProblems",
                "equals": "yes"
              }
            },
            {
              "label": "Voice",
              "value": "voice_assessment",
              "visibleIf": {
                "field": "voiceProblems",
                "equals": "yes"
              }
            },
            {
              "label": "Tracheostomy",
              "value": "trach_assessment",
              "visibleIf": {
                "field": "tracheostomyProblems",
                "equals": "yes"
              }
            }
          ],
          "showIf": {
            "or": [
              {
                "field": "swallowingProblems",
                "equals": "yes"
              },
              {
                "field": "communicationProblems",
                "equals": "yes"
              },
              {
                "field": "voiceProblems",
                "equals": "yes"
              },
              {
                "field": "tracheostomyProblems",
                "equals": "yes"
              }
            ]
          }
        }
      ]
    }
  ]
}

const PLAN = {
  "title": "",
  "sections": [
    {
      "title": "",
      "fields": [
        {
          "type": "subheading",
          "label": "Short-Term Goals (2–4 weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "short_term_goals"
        },
        {
          "type": "subheading",
          "label": "Long-Term Goals (6–12 weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "long_term_goals"
        },
        {
          "name": "planLauncher",
          "type": "assessment-launcher",
          "label": "",
          "options": [
            {
              "label": "Swallowing",
              "value": "swallow_plan",
              "visibleIf": {
                "field": "swallowingProblems",
                "equals": "yes"
              }
            },
            {
              "label": "Speech & Language",
              "value": "comm_plan",
              "visibleIf": {
                "field": "communicationProblems",
                "equals": "yes"
              }
            },
            {
              "label": "Voice",
              "value": "voice_plan",
              "visibleIf": {
                "field": "voiceProblems",
                "equals": "yes"
              }
            },
            {
              "label": "Tracheostomy",
              "value": "trach_plan",
              "visibleIf": {
                "field": "tracheostomyProblems",
                "equals": "yes"
              }
            }
          ],
          "showIf": {
            "or": [
              {
                "field": "swallowingProblems",
                "equals": "yes"
              },
              {
                "field": "communicationProblems",
                "equals": "yes"
              },
              {
                "field": "voiceProblems",
                "equals": "yes"
              },
              {
                "field": "tracheostomyProblems",
                "equals": "yes"
              }
            ]
          }
        },
        {
          "name": "others",
          "label": "Others",
          "type": "textarea"
        }
      ]
    }
  ]
}