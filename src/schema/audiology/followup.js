const SUBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "type": "input",
          "name": "chief_complaints",
          "label": "Chief Complaints"
        },
        {
          "type": "input",
          "name": "hpi",
          "label": "History of Present Illness (HPI)"
        }
      ]
    },
    {
      "title": "A. Otology",
      "fields": [
        {
          "type": "radio",
          "name": "ear_infection",
          "label": "Ear Infection",
          "options": [
            {
              "label": "No",
              "value": "none"
            },
            {
              "label": "Right",
              "value": "right"
            },
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Bilateral",
              "value": "bilateral"
            }
          ]
        },
        {
          "type": "input",
          "name": "ear_infection_notes",
          "label": "Specify",
          "showIf": {
            "field": "ear_infection",
            "oneOf": [
              "right",
              "left",
              "bilateral",
              "none"
            ]
          }
        },
        {
          "type": "radio",
          "name": "ear_fullness",
          "label": "Echo or Ear Fullness",
          "options": [
            {
              "label": "No",
              "value": "none"
            },
            {
              "label": "Right",
              "value": "right"
            },
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Bilateral",
              "value": "bilateral"
            }
          ]
        },
        {
          "type": "input",
          "name": "ear_fullness_notes",
          "label": "Specify",
          "showIf": {
            "field": "ear_fullness",
            "oneOf": [
              "right",
              "left",
              "bilateral"
            ]
          }
        },
        {
          "type": "radio",
          "name": "head_neck_injury",
          "label": "Head or Neck Injury",
          "options": [
            {
              "label": "Yes",
              "value": "1"
            },
            {
              "label": "No",
              "value": "0"
            }
          ]
        },
        {
          "type": "input",
          "name": "head_neck_notes",
          "label": "Specify",
          "showIf": {
            "field": "head_neck_injury",
            "equals": "1"
          }
        },
        {
          "type": "radio",
          "name": "ear_pain",
          "label": "Otalgia",
          "options": [
            {
              "label": "No",
              "value": "none"
            },
            {
              "label": "Right",
              "value": "right"
            },
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Bilateral",
              "value": "bilateral"
            }
          ]
        },
        {
          "type": "input",
          "name": "ear_pain_notes",
          "label": "Specify",
          "showIf": {
            "field": "ear_pain",
            "oneOf": [
              "right",
              "left",
              "bilateral",
              "none"
            ]
          }
        },
        {
          "type": "radio",
          "name": "otorrhea",
          "label": "Otorrhea",
          "options": [
            {
              "label": "No",
              "value": "none"
            },
            {
              "label": "Right",
              "value": "right"
            },
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Bilateral",
              "value": "bilateral"
            }
          ]
        },
        {
          "type": "input",
          "name": "otorrhea_notes",
          "label": "Specify",
          "showIf": {
            "field": "otorrhea",
            "oneOf": [
              "right",
              "left",
              "bilateral",
              "none"
            ]
          }
        },
        {
          "type": "input",
          "name": "otology_others",
          "label": "Others"
        }
      ]
    },
    {
      "title": "B. Hearing",
      "fields": [
        {
          "type": "radio",
          "name": "tinnitus",
          "label": "Tinnitus",
          "options": [
            {
              "label": "No",
              "value": "none"
            },
            {
              "label": "Right",
              "value": "right"
            },
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Bilateral",
              "value": "bilateral"
            },
            {
              "label": "In the Head",
              "value": "in_head"
            }
          ]
        },
        {
          "type": "input",
          "name": "tinnitus_notes",
          "label": "Specify",
          "showIf": {
            "field": "tinnitus",
            "oneOf": [
              "right",
              "left",
              "bilateral",
              "in_head"
            ]
          }
        },
        {
          "type": "radio",
          "name": "loudness_discomfort",
          "label": "Loudness Discomfort",
          "options": [
            {
              "label": "No",
              "value": "none"
            },
            {
              "label": "Right",
              "value": "right"
            },
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Bilateral",
              "value": "bilateral"
            }
          ]
        },
        {
          "name": "loudness_notes",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "loudness_discomfort",
            "oneOf": [
              "right",
              "left",
              "bilateral"
            ]
          }
        },
        {
          "type": "radio",
          "name": "hearing_difficulties",
          "label": "Hearing Difficulties",
          "options": [
            {
              "label": "No",
              "value": "none"
            },
            {
              "label": "Right",
              "value": "right"
            },
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Bilateral",
              "value": "bilateral"
            }
          ]
        },
        {
          "type": "input",
          "name": "hearing_difficulties_notes",
          "label": "Specify",
          "showIf": {
            "field": "hearing_difficulties",
            "oneOf": [
              "right",
              "left",
              "bilateral"
            ]
          }
        },
        {
          "type": "radio",
          "name": "better_hearing",
          "label": "Better Hearing",
          "options": [
            {
              "label": "No",
              "value": "none"
            },
            {
              "label": "Right",
              "value": "right"
            },
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Bilateral",
              "value": "bilateral"
            }
          ]
        },
        {
          "type": "input",
          "name": "better_hearing_notes",
          "label": "Specify",
          "showIf": {
            "field": "better_hearing",
            "oneOf": [
              "right",
              "left",
              "bilateral"
            ]
          }
        },
        {
          "type": "checkbox-group",
          "name": "communication_difficulties",
          "label": "Communication Difficulties",
          "options": [
            {
              "label": "None",
              "value": "none",
              "exclusive": true
            },
            {
              "label": "In quiet",
              "value": "in_quiet"
            },
            {
              "label": "In noise",
              "value": "in_noise"
            },
            {
              "label": "Group",
              "value": "group"
            },
            {
              "label": "Telephone",
              "value": "telephone"
            }
          ]
        },
        {
          "type": "input",
          "name": "communication_notes",
          "label": "Specify",
          "showIf": {
            "field": "communication_difficulties",
            "oneOf": [
              "in_quiet",
              "in_noise",
              "group",
              "telephone"
            ]
          }
        },
        {
          "type": "checkbox-group",
          "name": "exposure_loud_sounds",
          "label": "Exposure to Loud Sounds",
          "options": [
            {
              "label": "No",
              "value": "none"
            },
            {
              "label": "Occupational",
              "value": "occupational"
            },
            {
              "label": "Recreational",
              "value": "recreational"
            }
          ]
        },
        {
          "type": "checkbox-group",
          "name": "exposure_notes",
          "label": "Specify",
          "showIf": {
            "field": "exposure_loud_sounds",
            "oneOf": [
              "occupational",
              "recreational"
            ]
          }
        },
        {
          "type": "radio",
          "name": "family_social_from_registration",
          "label": "Family History",
          "options": [
            {
              "label": "Yes",
              "value": "1"
            },
            {
              "label": "No",
              "value": "0"
            }
          ]
        },
        {
          "type": "input",
          "name": "family_history_notes",
          "label": "Specify",
          "showIf": {
            "field": "family_social_from_registration",
            "equals": "1"
          }
        },
        {
          "type": "checkbox-group",
          "name": "psychosocial_impact",
          "label": "Psychosocial Impact",
          "options": [
            {
              "label": "No",
              "value": "0",
              "exclusive": true
            },
            {
              "label": "Withdrawal",
              "value": "1"
            },
            {
              "label": "Stress",
              "value": "2"
            },
            {
              "label": "Anxiety",
              "value": "3"
            },
            {
              "label": "Low self-confidence",
              "value": "4"
            }
          ]
        },
        {
          "type": "input",
          "name": "psychosocial_notes",
          "label": "Specify",
          "showIf": {
            "field": "psychosocial_impact",
            "oneOf": [
              "1",
              "2",
              "3",
              "4"
            ]
          }
        },
        {
          "type": "checkbox-group",
          "name": "environmental_context",
          "label": "Environmental Context",
          "options": [
            {
              "label": "No",
              "value": "0"
            },
            {
              "label": "Noisy environment",
              "value": "1"
            },
            {
              "label": "Supportive family",
              "value": "2"
            },
            {
              "label": "Uses assistive device",
              "value": "3"
            }
          ]
        },
        {
          "type": "input",
          "name": "environmental_notes",
          "label": "Specify",
          "showIf": {
            "field": "environmental_context",
            "oneOf": [
              "1",
              "2",
              "3"
            ]
          }
        },
        {
          "type": "radio",
          "name": "presence_amplification",
          "label": "Presence of Amplification",
          "options": [
            {
              "label": "Yes",
              "value": "1"
            },
            {
              "label": "No",
              "value": "0"
            }
          ]
        },
        {
          "type": "input",
          "name": "amplification_notes",
          "label": "",
          "showIf": {
            "field": "presence_amplification",
            "equals": "1"
          }
        },
        {
          "name": "others",
          "label": "Others",
          "type": "input"
        },
        {
          "type": "assessment-launcher",
          "name": "hearing_assessments_launcher",
          "label": "",
          "options": [
            {
              "label": "Additional Tinnitus Profile",
              "value": "tinnitus_form"
            },
            {
              "label": "Additional Hyperacusis Profile",
              "value": "loudness_form"
            },
            {
              "label": "Additional Auditory Profile ",
              "value": "hearing_form"
            }
          ]
        }
      ]
    },
    {
      "title": "C. Vestibular",
      "fields": [
        {
          "type": "checkbox-group",
          "name": "vestibular_symptoms",
          "label": "Symptoms",
          "options": [
            {
              "label": "No",
              "value": "0",
              "exclusive": true
            },
            {
              "label": "Vertigo",
              "value": "1"
            },
            {
              "label": "Imbalance",
              "value": "2"
            },
            {
              "label": "Dizziness",
              "value": "3"
            },
            {
              "label": "Oscillopsia",
              "value": "4"
            }
          ]
        },
        {
          "type": "input",
          "name": "vestibular_notes",
          "label": "",
          "showIf": {
            "field": "vestibular_symptoms",
            "oneOf": [
              "1",
              "2",
              "3",
              "4"
            ]
          }
        },
        {
          "type": "input",
          "name": "duration_frequency",
          "label": "Duration / Frequency"
        },
        {
          "type": "checkbox-group",
          "name": "triggers",
          "label": "Triggers",
          "options": [
            {
              "label": "No",
              "value": "0",
              "exclusive": true
            },
            {
              "label": "Positional",
              "value": "1"
            },
            {
              "label": "Head movement",
              "value": "2"
            },
            {
              "label": "Visual stimuli",
              "value": "3"
            },
            {
              "label": "Spontaneous",
              "value": "4"
            }
          ]
        },
        {
          "type": "input",
          "name": "trigger_notes",
          "label": "",
          "showIf": {
            "field": "triggers",
            "oneOf": [
              "1",
              "2",
              "3",
              "4"
            ]
          }
        },
        {
          "type": "input",
          "name": "falls_history",
          "label": "Fall History"
        },
        {
          "type": "input",
          "name": "vestibular_others",
          "label": "Others"
        },
        {
          "type": "assessment-launcher",
          "name": "vestibular_assessments_launcher",
          "label": "",
          "options": [
            {
              "label": "Additional Vestibular Profile",
              "value": "vestibular_form"
            }
          ]
        }
      ]
    }
  ]
}


const OBJECTIVE = {
  "sections": [
    {
      "title": "General Audiology Assessment",
      "fields": [
        {
          "type": "accordion",
          "name": "otoscopy_section",
          "label": "Otoscopic Examination",
          "defaultOpen": false,
          "children": [
            {
              "type": "row",
              "columns": 2,
              "fields": [
                {
                  "type": "attach-file",
                  "name": "otoscopic_examination_right",
                  "accept": "application/pdf,image/*",
                  "title": "Otoscopic Examination - Right",
                  "multiple": false,
                  "previewSize": {
                    "width": 400,
                    "height": 400
                  },
                  "hideInputAfterSelect": true
                },
                {
                  "type": "attach-file",
                  "name": "otoscopic_examination_left",
                  "accept": "application/pdf,image/*",
                  "title": "Otoscopic Examination - Left",
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
                "name": "external_canal_r",
                "title": "External Ear Canal – Right"
              },
              "left": {
                "name": "external_canal_l",
                "title": "External Ear Canal – Left"
              },
              "options": [
                {
                  "label": "Clear",
                  "value": "clear"
                },
                {
                  "label": "Inflamed",
                  "value": "inflamed"
                },
                {
                  "label": "Minimal cerumen",
                  "value": "minimal_cerumen"
                },
                {
                  "label": "Impacted cerumen",
                  "value": "impacted_cerumen"
                },
                {
                  "label": "Discharge present",
                  "value": "discharge"
                },
                {
                  "label": "Swelling",
                  "value": "swelling"
                }
              ]
            },
            {
              "type": "paired-select",
              "right": {
                "name": "tm_appearance_r",
                "title": "Tympanic Membrane (TM) Appearance – Right"
              },
              "left": {
                "name": "tm_appearance_l",
                "title": "Tympanic Membrane (TM) Appearance – Left"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Perforated",
                  "value": "perforated"
                },
                {
                  "label": "Dull",
                  "value": "dull"
                },
                {
                  "label": "Retracted",
                  "value": "retracted"
                },
                {
                  "label": "Bulging",
                  "value": "bulging"
                },
                {
                  "label": "Opaque",
                  "value": "opaque"
                }
              ]
            },
            {
              "type": "paired-select",
              "right": {
                "name": "tm_colour_r",
                "title": "TM Colour – Right"
              },
              "left": {
                "name": "tm_colour_l",
                "title": "TM Colour – Left"
              },
              "options": [
                {
                  "label": "Pearly grey",
                  "value": "pearly_grey"
                },
                {
                  "label": "Reddened",
                  "value": "red"
                },
                {
                  "label": "Yellowish",
                  "value": "yellow"
                },
                {
                  "label": "Bluish",
                  "value": "blue"
                },
                {
                  "label": "White patches",
                  "value": "white_patches"
                }
              ]
            },
            {
              "type": "paired-text",
              "pairs": [
                {
                  "name": "otoscopy_other_r",
                  "title": "Other Findings – Right"
                },
                {
                  "name": "otoscopy_other_l",
                  "title": "Other Findings – Left"
                }
              ]
            }
          ]
        },
        {
          "type": "accordion",
          "name": "audiometry_section",
          "label": "Audiometry",
          "defaultOpen": false,
          "children": [
            {
              "name": "audifile",
              "type": "attach-file",
              "accept": "application/pdf,image/*",
              "title": "Upload Audiometry File",
              "multiple": false,
              "previewSize": {
                "width": 400,
                "height": 400
              },
              "hideInputAfterSelect": true
            },
            {
              "type": "audiogram-graph",
              "name": "audiogram_graph"
            },
            {
              "type": "row",
              "fields": [
                {
                  "name": "impression_r",
                  "label": "Impression – Right Ear",
                  "type": "input"
                },
                {
                  "name": "impression_l",
                  "label": "Impression – Left Ear",
                  "type": "input"
                }
              ]
            },
            {
              "type": "radio",
              "name": "audiometry_type",
              "label": "Type of Audiometry",
              "options": [
                {
                  "label": "Screening",
                  "value": "screening"
                },
                {
                  "label": "Diagnostic Pure Tone",
                  "value": "pta"
                },
                {
                  "label": "Play",
                  "value": "play"
                },
                {
                  "label": "Visual Reinforcement (VR)",
                  "value": "vra"
                },
                {
                  "label": "Free field Audiometry",
                  "value": "free_field"
                },
                {
                  "label": "Aided Response",
                  "value": "aided"
                }
              ]
            },
            {
              "type": "radio",
              "name": "masking",
              "label": "Masking",
              "options": [
                {
                  "label": "Unmasked",
                  "value": "unmasked"
                },
                {
                  "label": "Masking",
                  "value": "masked"
                }
              ]
            },
            {
              "type": "radio",
              "name": "reliability",
              "label": "Reliability",
              "options": [
                {
                  "label": "Good",
                  "value": "Good"
                },
                {
                  "label": "Fair",
                  "value": "Fair"
                },
                {
                  "label": "Poor",
                  "value": "Poor"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": "",
      "fields": [
        {
          "name": "hearing_assessments_launcher_obj",
          "label": "",
          "type": "assessment-launcher",
          "options": [
            {
              "label": "Auditory Profile",
              "value": "hearing_form_obj"
            },
            {
              "label": "Tinnitus Profile",
              "value": "tinnitus_form_obj"
            },
            {
              "label": "Hyperacusis Profile",
              "value": "loudness_form_obj"
            },
            {
              "label": "Vestibular Profile",
              "value": "vestibular_form_obj"
            },
            {
              "label": "Industrial Audiometry",
              "value": "industrial_form_obj"
            }
          ]
        }
      ]
    }
  ]
}

const ASSESSMENT = {
  "sections": [
    {
      "fields": [
        {
          "type": "input",
          "name": "clinical_impression",
          "label": "Clinical Impression"
        },
        {
          "type": "input",
          "name": "problem_list",
          "label": "Problem Listing"
        }
      ]
    }
  ]
}


const PLAN = {
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Short Term Goals (2–4 Weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "short_term_goals"
        },
        {
          "type": "subheading",
          "label": "Long Term Goals (6–12 Weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "long_term_goals"
        },
        {
          "type": "checkbox-group",
          "name": "intervention_plan",
          "label": "Intervention Plan",
          "options": [
            {
              "label": "Monitoring",
              "value": "monitoring"
            },
            {
              "label": "Amplification",
              "value": "amplification"
            },
            {
              "label": "Medical referral",
              "value": "medical_referral"
            },
            {
              "label": "Further assessment",
              "value": "further_assessment"
            },
            {
              "label": "Auditory training",
              "value": "auditory_training"
            },
            {
              "label": "Tinnitus management",
              "value": "tinnitus_management"
            },
            {
              "label": "Hyperacusis management",
              "value": "hyperacusis_management"
            },
            {
              "label": "Vestibular management",
              "value": "vestibular_management"
            },
            {
              "label": "Prevention program",
              "value": "prevention_program"
            },
            {
              "label": "Others",
              "value": "other"
            }
          ]
        },
        {
          "type": "input",
          "name": "intervention_plan_details",
          "label": "Specify",
          "showIf": {
            "field": "intervention_plan",
            "includes": "other"
          }
        },
        {
          "type": "multi-select-dropdown",
          "name": "plan_options",
          "label": "Required further assessment",
          "options": [
            {
              "label": "Otoscopic Examination",
              "value": "otoscopic"
            },
            {
              "label": "Tympanometry",
              "value": "tympanometry"
            },
            {
              "label": "Audiometry",
              "value": "audiometry"
            },
            {
              "label": "Acoustic Reflex",
              "value": "acoustic_reflex"
            },
            {
              "label": "OAE Screening",
              "value": "oae_screening"
            },
            {
              "label": "Eustachian tube Function",
              "value": "eustachian_tube"
            },
            {
              "label": "Auditory steady-state response",
              "value": "assr"
            },
            {
              "label": "Auditory brainstem response",
              "value": "abr"
            },
            {
              "label": "Electrophysiology for hearing",
              "value": "electrophysiology"
            },
            {
              "label": "Special test",
              "value": "special_test"
            },
            {
              "label": "Hearing Handicap Inventory for Adults (HHIA)",
              "value": "hhia"
            },
            {
              "label": "Client oriented scale of improvement (COSI)",
              "value": "cosi"
            },
            {
              "label": "Tinnitus",
              "value": "tinnitus"
            },
            {
              "label": "Hyperacusis",
              "value": "hyperacusis"
            },
            {
              "label": "Vestibular",
              "value": "vestibular"
            },
            {
              "label": "Speech Test",
              "value": "speech_test"
            },
            {
              "label": "Videonystagmography",
              "value": "vng"
            },
            {
              "label": "Optokinetic Test",
              "value": "optokinetic"
            },
            {
              "label": "Spontaneous Nystagmus",
              "value": "spontaneous_nystagmus"
            },
            {
              "label": "High Frequency Head Shake",
              "value": "head_shake"
            },
            {
              "label": "Gaze Test",
              "value": "gaze_test"
            },
            {
              "label": "Subjective Visual Vertical",
              "value": "svv"
            },
            {
              "label": "Positional Test",
              "value": "positional_test"
            },
            {
              "label": "Dynamic Visual Acuity (DVA)",
              "value": "dva"
            },
            {
              "label": "Gaze Stabilization",
              "value": "gaze_stabilization"
            },
            {
              "label": "Video Head Impulse Test (vHIT)",
              "value": "vhit"
            },
            {
              "label": "Posturography",
              "value": "posturography"
            },
            {
              "label": "Functional Gait Assessment",
              "value": "fga"
            },
            {
              "label": "Sensory Organization Performance",
              "value": "sop"
            },
            {
              "label": "VEMP",
              "value": "vemp"
            },
            {
              "label": "Hearing Device Orientation",
              "value": "hearing_device_orientation"
            },
            {
              "label": "Hearing Device Trial",
              "value": "hearing_device_trial"
            },
            {
              "label": "Hearing Device Fitting",
              "value": "hearing_device_fitting"
            },
            {
              "label": "Hearing Device Verification",
              "value": "hearing_device_verification"
            },
            {
              "label": "Hearing Device Validation",
              "value": "hearing_device_validation"
            },
            {
              "label": "Fine Tuning of Hearing Device",
              "value": "hearing_device_finetuning"
            },
            {
              "label": "Others",
              "value": "other"
            }
          ]
        },
        {
          "type": "input",
          "name": "plan_options_details",
          "label": "Specify",
          "showIf": {
            "field": "plan_options",
            "includes": "other"
          }
        },
        {
          "type": "multi-select-dropdown",
          "name": "plan_tinnitus_options",
          "label": "Tinnitus Options",
          "showIf": {
            "field": "plan_options",
            "includes": "tinnitus"
          },
          "options": [
            {
              "label": "Tinnitus Handicap Inventory (THI)",
              "value": "thi"
            },
            {
              "label": "Tinnitus Functional Index (TFI)",
              "value": "tfi"
            },
            {
              "label": "Tinnitus Visual Analog Scale (VAS)",
              "value": "tinnitus_vas"
            },
            {
              "label": "Tinnitus Annoyance",
              "value": "tinnitus_annoyance"
            },
            {
              "label": "Tinnitus Awareness",
              "value": "tinnitus_awareness"
            }
          ]
        },
        {
          "type": "multi-select-dropdown",
          "name": "plan_hyperacusis_options",
          "label": "Hyperacusis Options",
          "showIf": {
            "field": "plan_options",
            "includes": "hyperacusis"
          },
          "options": [
            {
              "label": "Modified Khalfa Hyperacusis Questionnaire",
              "value": "khalfa"
            },
            {
              "label": "Hyperacusis Questionnaire (HQ)",
              "value": "hq"
            },
            {
              "label": "Visual Analog Scale (VAS) – Loudness Discomfort",
              "value": "vas_loudness"
            },
            {
              "label": "Visual Analog Scale (VAS) – Annoyance",
              "value": "vas_annoyance"
            }
          ]
        },
        {
          "type": "multi-select-dropdown",
          "name": "plan_vestibular_options",
          "label": "Vestibular Options",
          "showIf": {
            "field": "plan_options",
            "includes": "vestibular"
          },
          "options": [
            {
              "label": "Dizziness Handicap Inventory (DHI)",
              "value": "dhi"
            },
            {
              "label": "Visual Vertigo Analogue Score (VVAS)",
              "value": "vvas"
            },
            {
              "label": "Vertigo Handicap Questionnaire (VHQ)",
              "value": "vhq"
            },
            {
              "label": "Malay Version Vertigo Symptom Scale (MVVSS)",
              "value": "mvvss"
            },
            {
              "label": "Vestibular Evaluation",
              "value": "vestibular_eval"
            },
            {
              "label": "Dynamic Visual Acuity (DVA)",
              "value": "dva"
            },
            {
              "label": "Video Head Impulse Test (vHIT)",
              "value": "vhit"
            },
            {
              "label": "Posturography",
              "value": "posturography"
            },
            {
              "label": "Functional Gait Assessment",
              "value": "fga"
            },
            {
              "label": "cVEMP",
              "value": "cvemp"
            },
            {
              "label": "oVEMP",
              "value": "ovemp"
            },
            {
              "label": "Videonystagmography",
              "value": "videonystagmography"
            }
          ]
        },
        {
          "type": "input",
          "name": "plan_special_test_details",
          "label": "Special Test Details",
          "placeholder": "Enter special test details...",
          "showIf": {
            "field": "plan_options",
            "includes": "special_test"
          }
        },
        {
          "type": "date",
          "name": "plan_next_follow_up",
          "label": "Next Follow-Up"
        },
        {
          "type": "radio",
          "name": "plan_required_referral",
          "label": "Required Referral",
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
          "type": "input",
          "name": "plan_required_referral_details",
          "label": "",
          "placeholder": "Specify referral details...",
          "showIf": {
            "field": "plan_required_referral",
            "equals": "yes"
          }
        }
      ]
    }
  ]
}

export default {
  PLAN,
  OBJECTIVE,
  SUBJECTIVE,
  ASSESSMENT,
};
