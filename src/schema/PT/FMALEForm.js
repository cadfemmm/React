const SCHEMA = {
  "title": "Fugl–Meyer Assessment – Lower Extremity (FMA-LE)",
  "subtitle": "Assessment of Sensorimotor Function",
  "sections": [
    {
      "title": "I. Reflex Activity (Supine)",
      "fields": [
        {
          "type": "radio-matrix",
          "name": "reflex_knee_flexors",
          "label": "Knee flexors",
          "options": [
            {
              "label": "None",
              "value": 0
            },
            {
              "label": "Can be elicited",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "reflex_extensors",
          "label": "Extensors (Patellar / Achilles (≥1))",
          "options": [
            {
              "label": "None",
              "value": 0
            },
            {
              "label": "Can be elicited",
              "value": 2
            }
          ]
        },
        {
          "type": "score-box",
          "name": "subtotal_I",
          "label": "Subtotal I (Max 4)",
          "readOnly": true
        }
      ]
    },
    {
      "title": "II. Volitional Movement within Synergies (Supine)",
      "fields": [
        {
          "type": "radio-matrix",
          "name": "flexor_hip",
          "label": "Hip flexion",
          "options": [
            {
              "label": "None",
              "value": 0
            },
            {
              "label": "Partial",
              "value": 1
            },
            {
              "label": "Full",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "flexor_knee",
          "label": "Knee flexion",
          "options": [
            {
              "label": "None",
              "value": 0
            },
            {
              "label": "Partial",
              "value": 1
            },
            {
              "label": "Full",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "flexor_ankle",
          "label": "Ankle dorsiflexion",
          "options": [
            {
              "label": "None",
              "value": 0
            },
            {
              "label": "Partial",
              "value": 1
            },
            {
              "label": "Full",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "extensor_hipe",
          "label": "Hip extension",
          "options": [
            {
              "label": "None",
              "value": 0
            },
            {
              "label": "Partial",
              "value": 1
            },
            {
              "label": "Full",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "extensor_hipa",
          "label": "Hip adduction",
          "options": [
            {
              "label": "None",
              "value": 0
            },
            {
              "label": "Partial",
              "value": 1
            },
            {
              "label": "Full",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "extensor_knee",
          "label": "Knee extension",
          "options": [
            {
              "label": "None",
              "value": 0
            },
            {
              "label": "Partial",
              "value": 1
            },
            {
              "label": "Full",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "extensor_ankle",
          "label": "Ankle plantarflexion",
          "options": [
            {
              "label": "None",
              "value": 0
            },
            {
              "label": "Partial",
              "value": 1
            },
            {
              "label": "Full",
              "value": 2
            }
          ]
        },
        {
          "type": "score-box",
          "name": "subtotal_II",
          "label": "Subtotal II (Max 14)",
          "readOnly": true
        }
      ]
    },
    {
      "title": "III. Volitional Movement Mixing Synergies (Sitting)",
      "fields": [
        {
          "type": "radio-matrix",
          "name": "mix_knee",
          "label": "Knee flexion",
          "options": [
            {
              "label": "None",
              "value": 0
            },
            {
              "label": "Partial",
              "value": 1
            },
            {
              "label": "Full",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "mix_ankle",
          "label": "Ankle dorsiflexion",
          "options": [
            {
              "label": "None",
              "value": 0
            },
            {
              "label": "Partial",
              "value": 1
            },
            {
              "label": "Full",
              "value": 2
            }
          ]
        },
        {
          "type": "score-box",
          "name": "subtotal_III",
          "label": "Subtotal III (Max 4)",
          "readOnly": true
        }
      ]
    },
    {
      "title": "IV. Volitional Movement with Little or No Synergy (Standing)",
      "fields": [
        {
          "type": "radio-matrix",
          "name": "nosyn_knee",
          "label": "Knee flexion to 90°",
          "options": [
            {
              "label": "None",
              "value": 0
            },
            {
              "label": "Partial",
              "value": 1
            },
            {
              "label": "Full",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "nosyn_ankle",
          "label": "Ankle dorsiflexion",
          "options": [
            {
              "label": "None",
              "value": 0
            },
            {
              "label": "Partial",
              "value": 1
            },
            {
              "label": "Full",
              "value": 2
            }
          ]
        },
        {
          "type": "score-box",
          "name": "subtotal_IV",
          "label": "Subtotal IV (Max 4)",
          "readOnly": true
        }
      ]
    },
    {
      "title": "V. Normal Reflex Activity",
      "showIf": {
        "field": "subtotal_IV",
        "equals": 4
      },
      "fields": [
        {
          "type": "radio-matrix",
          "name": "normal_reflex",
          "label": "Reflex activity",
          "options": [
            {
              "label": "Hyper",
              "value": 0
            },
            {
              "label": "Lively",
              "value": 1
            },
            {
              "label": "Normal",
              "value": 2
            }
          ]
        },
        {
          "type": "textarea",
          "name": "subtotal_V",
          "label": "Subtotal V (Max 2)",
          "readOnly": true
        }
      ]
    },
    {
      "title": "F. Coordination / Speed – Movement Quality",
      "fields": [
        {
          "type": "radio-matrix",
          "name": "coord_tremor",
          "label": "Tremor",
          "options": [
            {
              "label": "Marked",
              "value": 0
            },
            {
              "label": "Slight",
              "value": 1
            },
            {
              "label": "None",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "coord_dysmetria",
          "label": "Dysmetria",
          "options": [
            {
              "label": "Marked",
              "value": 0
            },
            {
              "label": "Slight",
              "value": 1
            },
            {
              "label": "None",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "fields": [
        {
          "type": "radio-matrix",
          "name": "coord_time",
          "label": "Time difference",
          "options": [
            {
              "label": "≥ 6s",
              "value": 0
            },
            {
              "label": "2–5s",
              "value": 1
            },
            {
              "label": "< 2s",
              "value": 2
            }
          ]
        },
        {
          "type": "core-box",
          "name": "subtotal_F",
          "readOnly": true
        }
      ]
    },
    {
      "fields": [
        {
          "type": "score-box",
          "name": "total_EF",
          "label": "TOTAL E – F (Motor Function) /34",
          "readOnly": true
        }
      ]
    },
    {
      "title": "H. Sensation (Lower Extremity)",
      "fields": [
        {
          "type": "radio-matrix",
          "name": "sens_light_leg",
          "label": "Light touch – Leg",
          "options": [
            {
              "label": "Anesthesia",
              "value": 0
            },
            {
              "label": "Hypoesthesia / Dysesthesia",
              "value": 1
            },
            {
              "label": "Normal",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "sens_light_foot",
          "label": "Light touch – Foot (sole)",
          "options": [
            {
              "label": "Anesthesia",
              "value": 0
            },
            {
              "label": "Hypoesthesia / Dysesthesia",
              "value": 1
            },
            {
              "label": "Normal",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "fields": [
        {
          "type": "radio-matrix",
          "name": "pos_hip",
          "label": "Position Hip",
          "options": [
            {
              "label": "less than 3/4correct or absence",
              "value": 0
            },
            {
              "label": "3/4 correct or considerable difference",
              "value": 1
            },
            {
              "label": "3/4 correct or considerable difference",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "pos_knee",
          "label": "Position Knee",
          "options": [
            {
              "label": "less than 3/4correct or absence",
              "value": 0
            },
            {
              "label": "3/4 correct or considerable difference",
              "value": 1
            },
            {
              "label": "3/4 correct or considerable difference",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "pos_ankle",
          "label": "Position Ankle",
          "options": [
            {
              "label": "less than 3/4correct or absence",
              "value": 0
            },
            {
              "label": "3/4 correct or considerable difference",
              "value": 1
            },
            {
              "label": "3/4 correct or considerable difference",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "pos_toe",
          "label": "Position Great toe",
          "options": [
            {
              "label": "less than 3/4correct or absence",
              "value": 0
            },
            {
              "label": "3/4 correct or considerable difference",
              "value": 1
            },
            {
              "label": "3/4 correct or considerable difference",
              "value": 2
            }
          ]
        },
        {
          "type": "score-box",
          "name": "subtotal_H",
          "label": "Total H (Max 12)",
          "readOnly": true
        }
      ]
    },
    {
      "title": "I. Passive Joint Motion (Lower Extremity)",
      "fields": [
        {
          "type": "radio-matrix",
          "name": "pm_hip_flex",
          "label": "Hip Flexion",
          "options": [
            {
              "label": "Only few degrees",
              "value": 0
            },
            {
              "label": "Decreased",
              "value": 1
            },
            {
              "label": "Normal",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "pm_hip_abd",
          "label": "Hip Abduction",
          "options": [
            {
              "label": "Only few degrees",
              "value": 0
            },
            {
              "label": "Decreased",
              "value": 1
            },
            {
              "label": "Normal",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "pm_hip_er",
          "label": "Hip External rotation",
          "options": [
            {
              "label": "Only few degrees",
              "value": 0
            },
            {
              "label": "Decreased",
              "value": 1
            },
            {
              "label": "Normal",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "pm_hip_ir",
          "label": "Hip Internal rotation",
          "options": [
            {
              "label": "Only few degrees",
              "value": 0
            },
            {
              "label": "Decreased",
              "value": 1
            },
            {
              "label": "Normal",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "pm_knee_flex",
          "label": "Knee Flexion",
          "options": [
            {
              "label": "Only few degrees",
              "value": 0
            },
            {
              "label": "Decreased",
              "value": 1
            },
            {
              "label": "Normal",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "pm_knee_ext",
          "label": "Knee Extension",
          "options": [
            {
              "label": "Only few degrees",
              "value": 0
            },
            {
              "label": "Decreased",
              "value": 1
            },
            {
              "label": "Normal",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "pm_ankle_df",
          "label": "Ankle Dorsiflexion",
          "options": [
            {
              "label": "Only few degrees",
              "value": 0
            },
            {
              "label": "Decreased",
              "value": 1
            },
            {
              "label": "Normal",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "pm_ankle_pf",
          "label": "Ankle Plantarflexion",
          "options": [
            {
              "label": "Only few degrees",
              "value": 0
            },
            {
              "label": "Decreased",
              "value": 1
            },
            {
              "label": "Normal",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "pm_foot_pro",
          "label": "Foot Pronation",
          "options": [
            {
              "label": "Only few degrees",
              "value": 0
            },
            {
              "label": "Decreased",
              "value": 1
            },
            {
              "label": "Normal",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "pm_foot_sup",
          "label": "Foot Supination",
          "options": [
            {
              "label": "Only few degrees",
              "value": 0
            },
            {
              "label": "Decreased",
              "value": 1
            },
            {
              "label": "Normal",
              "value": 2
            }
          ]
        },
        {
          "type": "score-box",
          "name": "subtotal_I_motion",
          "label": "Total I (Max 20)",
          "readOnly": true
        }
      ]
    },
    {
      "title": "J. Joint Pain during Passive Motion",
      "fields": [
        {
          "type": "radio-matrix",
          "name": "jp_hip_flex",
          "label": "Hip Flexion",
          "options": [
            {
              "label": "Pronounced pain during movement",
              "value": 0
            },
            {
              "label": "Some pain",
              "value": 1
            },
            {
              "label": "No pain",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "jp_hip_abd",
          "label": "Hip Abduction",
          "options": [
            {
              "label": "Pronounced pain during movement",
              "value": 0
            },
            {
              "label": "Some pain",
              "value": 1
            },
            {
              "label": "No pain",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "jp_hip_er",
          "label": "Hip External rotation",
          "options": [
            {
              "label": "Pronounced pain during movement",
              "value": 0
            },
            {
              "label": "Some pain",
              "value": 1
            },
            {
              "label": "No pain",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "jp_hip_ir",
          "label": "Hip Internal rotation",
          "options": [
            {
              "label": "Pronounced pain during movement",
              "value": 0
            },
            {
              "label": "Some pain",
              "value": 1
            },
            {
              "label": "No pain",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "jp_knee_flex",
          "label": "Knee Flexion",
          "options": [
            {
              "label": "Pronounced pain during movement",
              "value": 0
            },
            {
              "label": "Some pain",
              "value": 1
            },
            {
              "label": "No pain",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "jp_knee_ext",
          "label": "Knee Extension",
          "options": [
            {
              "label": "Pronounced pain during movement",
              "value": 0
            },
            {
              "label": "Some pain",
              "value": 1
            },
            {
              "label": "No pain",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "jp_ankle_df",
          "label": "Ankle Dorsiflexion",
          "options": [
            {
              "label": "Pronounced pain during movement",
              "value": 0
            },
            {
              "label": "Some pain",
              "value": 1
            },
            {
              "label": "No pain",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "jp_ankle_pf",
          "label": "Ankle Plantarflexion",
          "options": [
            {
              "label": "Pronounced pain during movement",
              "value": 0
            },
            {
              "label": "Some pain",
              "value": 1
            },
            {
              "label": "No pain",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "jp_foot_pro",
          "label": "Foot Pronation",
          "options": [
            {
              "label": "Pronounced pain during movement",
              "value": 0
            },
            {
              "label": "Some pain",
              "value": 1
            },
            {
              "label": "No pain",
              "value": 2
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "jp_foot_sup",
          "label": "Foot Supination",
          "options": [
            {
              "label": "Pronounced pain during movement",
              "value": 0
            },
            {
              "label": "Some pain",
              "value": 1
            },
            {
              "label": "No pain",
              "value": 2
            }
          ]
        },
        {
          "type": "score-box",
          "name": "subtotal_J",
          "label": "Total J (Max 20)",
          "readOnly": true
        }
      ]
    },
    {
      "title": "Final Scores",
      "fields": [
        {
          "type": "score-box",
          "name": "score_E",
          "label": "E. Lower Extremity /28",
          "readOnly": true
        },
        {
          "type": "score-box",
          "name": "score_F",
          "label": "F. Coordination /6",
          "readOnly": true
        },
        {
          "type": "score-box",
          "name": "score_EF",
          "label": "TOTAL E–F (Motor) /34",
          "readOnly": true
        },
        {
          "type": "score-box",
          "name": "score_H",
          "label": "H. Sensation /12",
          "readOnly": true
        },
        {
          "type": "score-box",
          "name": "score_I",
          "label": "I. Passive Joint Motion /20",
          "readOnly": true
        },
        {
          "type": "score-box",
          "name": "score_J",
          "label": "J. Joint Pain /20",
          "readOnly": true
        }
      ]
    }
  ]
}