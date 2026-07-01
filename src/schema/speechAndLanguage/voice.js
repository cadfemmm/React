const SCHEMA_SUBJECTIVE = {
  "sections": [
    {
      "title": "Voice History",
      "fields": [
        {
          "type": "subheading",
          "label": "Medical history (related to voice)"
        },
        {
          "name": "reflux",
          "label": "Reflux",
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
          "name": "throat_surgery",
          "label": "Throat surgery",
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
          "name": "vf_pathology",
          "label": "Known VF pathology",
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
          "name": "current_medication",
          "label": "Current medication",
          "type": "textarea"
        },
        {
          "type": "subheading",
          "label": "Voice History"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "onset",
              "label": "Onset",
              "type": "radio",
              "options": [
                {
                  "label": "Gradual",
                  "value": "gradual"
                },
                {
                  "label": "Sudden",
                  "value": "sudden"
                }
              ]
            },
            {
              "name": "onset_duration",
              "label": "Date or duration",
              "type": "input"
            }
          ]
        },
        {
          "name": "progression",
          "label": "Progression",
          "type": "radio",
          "options": [
            {
              "label": "Better",
              "value": "better"
            },
            {
              "label": "Worse",
              "value": "worse"
            },
            {
              "label": "No Change",
              "value": "no_change"
            }
          ]
        },
        {
          "name": "vocal_misuse",
          "label": "Vocal misuse/abuse behaviours",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Screaming",
              "value": "screaming"
            },
            {
              "label": "Shouting",
              "value": "shouting"
            },
            {
              "label": "Excessive throat clearing",
              "value": "throat_clearing"
            }
          ]
        },
        {
          "name": "vocal_demand",
          "label": "Vocal Demand Level",
          "type": "radio",
          "options": [
            {
              "label": "Low",
              "value": "low"
            },
            {
              "label": "Moderate",
              "value": "moderate"
            },
            {
              "label": "High",
              "value": "high"
            },
            {
              "label": "Elite Voice User",
              "value": "elite_voice_user"
            }
          ]
        },
        {
          "name": "talking_hours",
          "label": "Hours of talking per day",
          "type": "radio",
          "options": [
            {
              "label": "<1",
              "value": "<1"
            },
            {
              "label": "1-3",
              "value": "1-3"
            },
            {
              "label": "3-5",
              "value": "3-5"
            },
            {
              "label": ">5",
              "value": ">5"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Lifestyle / Dietary Habits"
        },
        {
          "name": "water_intake",
          "label": "Daily water intake",
          "type": "radio",
          "options": [
            {
              "label": "<0.5L",
              "value": "<0.5L"
            },
            {
              "label": "0.5-1.0L",
              "value": "0.5-1.0L"
            },
            {
              "label": "1-1.5L",
              "value": "1-1.5L"
            },
            {
              "label": "1.5-2.0L",
              "value": "1.5-2.0L"
            },
            {
              "label": ">2.0L",
              "value": ">2.0L"
            }
          ]
        },
        {
          "name": "smoking",
          "label": "Smoking",
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
          "name": "smoking_packs",
          "label": "Packs/day",
          "type": "input",
          "showIf": {
            "field": "smoking",
            "equals": "yes"
          }
        },
        {
          "name": "vaping",
          "label": "Vaping exposure",
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
          "name": "second_hand_smoke",
          "label": "Second-hand smoke exposure",
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
          "name": "hydration_habits",
          "label": "Hydration habits",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Sips frequently",
              "value": "sips"
            },
            {
              "label": "Long gaps without drinking",
              "value": "gaps"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Diet Intake"
        },
        {
          "name": "diet_intake",
          "label": "Enter Diet Intake Details",
          "type": "textarea",
          "placeholder": "Type diet intake information here..."
        },
        {
          "name": "alcohol",
          "label": "Alcohol",
          "type": "radio",
          "options": [
            {
              "label": "Never",
              "value": "never"
            },
            {
              "label": "Occasionally",
              "value": "occasionally"
            },
            {
              "label": "Daily",
              "value": "daily"
            }
          ]
        },
        {
          "name": "caffeine",
          "label": "Caffeine",
          "type": "radio",
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "1-2 cups/day",
              "value": "1-2_cups/day"
            },
            {
              "label": ">2 cups/day",
              "value": ">2_cups/day"
            }
          ]
        },
        {
          "name": "spicy_food",
          "label": "Spicy food",
          "type": "radio",
          "options": [
            {
              "label": "Rare",
              "value": "rare"
            },
            {
              "label": "Regular",
              "value": "regular"
            }
          ]
        },
        {
          "name": "dairy",
          "label": "Dairy",
          "type": "radio",
          "options": [
            {
              "label": "Rare",
              "value": "rare"
            },
            {
              "label": "Regular",
              "value": "regular"
            }
          ]
        },
        {
          "name": "acidic_food",
          "label": "Acidic foods (citrus)",
          "type": "radio",
          "options": [
            {
              "label": "Rare",
              "value": "rare"
            },
            {
              "label": "Regular",
              "value": "regular"
            }
          ]
        },
        {
          "name": "late_eating",
          "label": "Eating late at night",
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
          "type": "subheading",
          "label": "Associated Symptoms"
        },
        {
          "name": "globus",
          "label": "Globus sensation",
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
          "name": "throat_dryness",
          "label": "Throat dryness",
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
          "name": "throat_tightness",
          "label": "Throat tension / tightness",
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
          "name": "pain_talking",
          "label": "Pain when talking",
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
          "name": "vocal_fatigue",
          "label": "Vocal fatigue / endurance issues",
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
          "name": "dysphagia_liquids",
          "label": "Dysphagia or coughing with liquids",
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
          "name": "breathlessness_talking",
          "label": "Feeling out of breath when talking",
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
          "name": "other_symptoms",
          "label": "Other(s)",
          "type": "textarea"
        },
        {
          "type": "subheading",
          "label": "Musculoskeletal symptoms"
        },
        {
          "name": "jaw_tension",
          "label": "Jaw tension / teeth clenching",
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
          "name": "neck_shoulder_tension",
          "label": "Neck / shoulder tension",
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
        }
      ]
    }
  ]
}

const SCHEMA_OBJECTIVE = {
  "sections": [
    {
      "title": "A. Respiratory Observations",
      "fields": [
        {
          "name": "breathing_type",
          "label": "Type of breathing",
          "type": "radio",
          "options": [
            {
              "label": "Nose",
              "value": "nose"
            },
            {
              "label": "Mouth",
              "value": "mouth"
            }
          ]
        },
        {
          "name": "breathing_pattern",
          "label": "Breathing pattern",
          "type": "radio",
          "options": [
            {
              "label": "Clavicular",
              "value": "clavicular"
            },
            {
              "label": "Thoracic",
              "value": "thoracic"
            },
            {
              "label": "Diaphragmatic",
              "value": "diaphragmatic"
            }
          ]
        }
      ]
    },
    {
      "title": "B. Objective Voice Measures",
      "fields": [
        {
          "type": "subheading",
          "label": "Maximum Phonation Time (MPT)  –  auto-populate longest /a/"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "a_trial1",
              "label": "/a/ Trial 1 (s)",
              "type": "input"
            },
            {
              "name": "a_trial2",
              "label": "/a/ Trial 2 (s)",
              "type": "input"
            },
            {
              "name": "a_trial3",
              "label": "/a/ Trial 3 (s)",
              "type": "input"
            },
            {
              "name": "mpt",
              "label": "MPT – Longest (s)",
              "type": "input",
              "readOnly": true
            }
          ]
        },
        {
          "type": "subheading",
          "label": "S/Z Ratio  (longest s ÷ longest z)  –  Normal reference ≈ 1.0"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "s_trial1",
              "label": "/s/ Trial 1 (s)",
              "type": "input"
            },
            {
              "name": "s_trial2",
              "label": "/s/ Trial 2 (s)",
              "type": "input"
            },
            {
              "name": "s_trial3",
              "label": "/s/ Trial 3 (s)",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "z_trial1",
              "label": "/z/ Trial 1 (s)",
              "type": "input"
            },
            {
              "name": "z_trial2",
              "label": "/z/ Trial 2 (s)",
              "type": "input"
            },
            {
              "name": "z_trial3",
              "label": "/z/ Trial 3 (s)",
              "type": "input"
            }
          ]
        },
        {
          "name": "sz_ratio",
          "label": "S/Z Ratio (auto-calculated)",
          "type": "input",
          "readOnly": true
        },
        {
          "type": "info-text",
          "text": "Elevated ratio (>1.4) → possible vocal fold inefficiency | Low ratio (<0.8) → phonation difficulties possible"
        },
        {
          "type": "subheading",
          "label": "Acoustic Analysis (Praat)  –  Task: Sustained /a/ for 3 trials (best trial analysed)"
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "f0_mean",
              "label": "F0 Mean (Hz)",
              "type": "input"
            },
            {
              "name": "jitter",
              "label": "Jitter (%)",
              "type": "input"
            }
          ]
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "shimmer",
              "label": "Shimmer (%)",
              "type": "input"
            },
            {
              "name": "hnr_cpp",
              "label": "HNR / CPP (dB)",
              "type": "input"
            }
          ]
        },
        {
          "name": "intensity_range",
          "label": "Intensity Range (dB)",
          "type": "input"
        },
        {
          "type": "note",
          "label": "Typical Range:  Jitter <1%  |  Shimmer <3–4%  |  HNR >12 dB  |  CPP >13–14 dB (sustained vowel)"
        }
      ]
    },
    {
      "title": "C. Perceptual Voice Measures",
      "fields": [
        {
          "type": "subheading",
          "label": "GRBASI Scale  – GxRxBxAxSxIx"
        },
        {
          "name": "grbasi_grade",
          "label": "Grade",
          "type": "radio",
          "options": [
            {
              "label": "0 - Normal",
              "value": 0
            },
            {
              "label": "1 - Mild",
              "value": 1
            },
            {
              "label": "2 - Moderate",
              "value": 2
            },
            {
              "label": "3 - Severe",
              "value": 3
            }
          ]
        },
        {
          "name": "grbasi_roughness",
          "label": "Roughness",
          "type": "radio",
          "options": [
            {
              "label": "0 - Normal",
              "value": 0
            },
            {
              "label": "1 - Mild",
              "value": 1
            },
            {
              "label": "2 - Moderate",
              "value": 2
            },
            {
              "label": "3 - Severe",
              "value": 3
            }
          ]
        },
        {
          "name": "grbasi_breathiness",
          "label": "Breathiness",
          "type": "radio",
          "options": [
            {
              "label": "0 - Normal",
              "value": 0
            },
            {
              "label": "1 - Mild",
              "value": 1
            },
            {
              "label": "2 - Moderate",
              "value": 2
            },
            {
              "label": "3 - Severe",
              "value": 3
            }
          ]
        },
        {
          "name": "grbasi_asthenia",
          "label": "Asthenia",
          "type": "radio",
          "options": [
            {
              "label": "0 - Normal",
              "value": 0
            },
            {
              "label": "1 - Mild",
              "value": 1
            },
            {
              "label": "2 - Moderate",
              "value": 2
            },
            {
              "label": "3 - Severe",
              "value": 3
            }
          ]
        },
        {
          "name": "grbasi_strain",
          "label": "Strain",
          "type": "radio",
          "options": [
            {
              "label": "0 - Normal",
              "value": 0
            },
            {
              "label": "1 - Mild",
              "value": 1
            },
            {
              "label": "2 - Moderate",
              "value": 2
            },
            {
              "label": "3 - Severe",
              "value": 3
            }
          ]
        },
        {
          "name": "grbasi_instability",
          "label": "Instability",
          "type": "radio",
          "options": [
            {
              "label": "0 - Normal",
              "value": 0
            },
            {
              "label": "1 - Mild",
              "value": 1
            },
            {
              "label": "2 - Moderate",
              "value": 2
            },
            {
              "label": "3 - Severe",
              "value": 3
            }
          ]
        },
        {
          "name": "grbasi_score",
          "label": "GRBASI Final Score",
          "type": "input",
          "readOnly": true
        },
        {
          "type": "subheading",
          "label": "CAPE-V Overall Severity"
        },
        {
          "name": "overall_severity",
          "label": "Overall Severity",
          "type": "radio",
          "options": [
            {
              "label": "Consistent",
              "value": "consistent"
            },
            {
              "label": "Intermittent",
              "value": "intermittent"
            }
          ]
        },
        {
          "name": "cape_overall",
          "label": "",
          "type": "scale-slider",
          "min": 0,
          "max": 100,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "from": 0,
              "to": 10,
              "label": "Normal",
              "color": "#22c55e"
            },
            {
              "from": 11,
              "to": 30,
              "label": "Mild deviation",
              "color": "#84cc16"
            },
            {
              "from": 31,
              "to": 60,
              "label": "Moderate deviation",
              "color": "#f59e0b"
            },
            {
              "from": 61,
              "to": 100,
              "label": "Severe deviation",
              "color": "#ef4444"
            }
          ]
        },
        {
          "name": "overall_roughness",
          "label": "Roughness",
          "type": "radio",
          "options": [
            {
              "label": "Consistent",
              "value": "consistent"
            },
            {
              "label": "Intermittent",
              "value": "intermittent"
            }
          ]
        },
        {
          "name": "cape_roughness",
          "label": "",
          "type": "scale-slider",
          "min": 0,
          "max": 100,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "from": 0,
              "to": 10,
              "label": "Normal",
              "color": "#22c55e"
            },
            {
              "from": 11,
              "to": 30,
              "label": "Mild deviation",
              "color": "#84cc16"
            },
            {
              "from": 31,
              "to": 60,
              "label": "Moderate deviation",
              "color": "#f59e0b"
            },
            {
              "from": 61,
              "to": 100,
              "label": "Severe deviation",
              "color": "#ef4444"
            }
          ]
        },
        {
          "name": "overall_breathiness",
          "label": "Breathiness",
          "type": "radio",
          "options": [
            {
              "label": "Consistent",
              "value": "consistent"
            },
            {
              "label": "Intermittent",
              "value": "intermittent"
            }
          ]
        },
        {
          "name": "cape_breathiness",
          "label": "",
          "type": "scale-slider",
          "min": 0,
          "max": 100,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "from": 0,
              "to": 10,
              "label": "Normal",
              "color": "#22c55e"
            },
            {
              "from": 11,
              "to": 30,
              "label": "Mild deviation",
              "color": "#84cc16"
            },
            {
              "from": 31,
              "to": 60,
              "label": "Moderate deviation",
              "color": "#f59e0b"
            },
            {
              "from": 61,
              "to": 100,
              "label": "Severe deviation",
              "color": "#ef4444"
            }
          ]
        },
        {
          "name": "overall_strain",
          "label": "Strain",
          "type": "radio",
          "options": [
            {
              "label": "Consistent",
              "value": "consistent"
            },
            {
              "label": "Intermittent",
              "value": "intermittent"
            }
          ]
        },
        {
          "name": "cape_strain",
          "label": "",
          "type": "scale-slider",
          "min": 0,
          "max": 100,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "from": 0,
              "to": 10,
              "label": "Normal",
              "color": "#22c55e"
            },
            {
              "from": 11,
              "to": 30,
              "label": "Mild deviation",
              "color": "#84cc16"
            },
            {
              "from": 31,
              "to": 60,
              "label": "Moderate deviation",
              "color": "#f59e0b"
            },
            {
              "from": 61,
              "to": 100,
              "label": "Severe deviation",
              "color": "#ef4444"
            }
          ]
        },
        {
          "name": "overall_pitch",
          "label": "Pitch",
          "type": "radio",
          "options": [
            {
              "label": "Consistent",
              "value": "consistent"
            },
            {
              "label": "Intermittent",
              "value": "intermittent"
            }
          ]
        },
        {
          "name": "cape_pitch",
          "label": "",
          "type": "scale-slider",
          "min": 0,
          "max": 100,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "from": 0,
              "to": 10,
              "label": "Normal",
              "color": "#22c55e"
            },
            {
              "from": 11,
              "to": 30,
              "label": "Mild deviation",
              "color": "#84cc16"
            },
            {
              "from": 31,
              "to": 60,
              "label": "Moderate deviation",
              "color": "#f59e0b"
            },
            {
              "from": 61,
              "to": 100,
              "label": "Severe deviation",
              "color": "#ef4444"
            }
          ]
        },
        {
          "name": "overall_loudness",
          "label": "Loudness",
          "type": "radio",
          "options": [
            {
              "label": "Consistent",
              "value": "consistent"
            },
            {
              "label": "Intermittent",
              "value": "intermittent"
            }
          ]
        },
        {
          "name": "cape_loudness",
          "label": "",
          "type": "scale-slider",
          "min": 0,
          "max": 100,
          "step": 1,
          "showValue": true,
          "ranges": [
            {
              "from": 0,
              "to": 10,
              "label": "Normal",
              "color": "#22c55e"
            },
            {
              "from": 11,
              "to": 30,
              "label": "Mild deviation",
              "color": "#84cc16"
            },
            {
              "from": 31,
              "to": 60,
              "label": "Moderate deviation",
              "color": "#f59e0b"
            },
            {
              "from": 61,
              "to": 100,
              "label": "Severe deviation",
              "color": "#ef4444"
            }
          ]
        },
        {
          "name": "overall_resonance",
          "label": " Resonance",
          "type": "radio",
          "options": [
            {
              "label": "Normal",
              "value": "normal"
            },
            {
              "label": "Other",
              "value": "other"
            }
          ]
        },
        {
          "name": "overall_resonance_other",
          "label": "Specify",
          "type": "textarea",
          "showIf": {
            "field": "overall_resonance",
            "equals": "other"
          }
        },
        {
          "name": "cape_resonance",
          "label": "Resonance",
          "type": "scale-slider",
          "min": 0,
          "max": 100,
          "step": 1,
          "showValue": true,
          "showIf": {
            "field": "cape_resonance_applicable",
            "equals": "yes"
          },
          "ranges": [
            {
              "from": 0,
              "to": 10,
              "label": "Normal",
              "color": "#22c55e"
            },
            {
              "from": 11,
              "to": 30,
              "label": "Mild deviation",
              "color": "#84cc16"
            },
            {
              "from": 31,
              "to": 60,
              "label": "Moderate deviation",
              "color": "#f59e0b"
            },
            {
              "from": 61,
              "to": 100,
              "label": "Severe deviation",
              "color": "#ef4444"
            }
          ]
        }
      ]
    }
  ]
}

const SCHEMA_ASSESSMENT = {
  "sections": [
    {
      "title": "Clinical Impression",
      "fields": [
        {
          "name": "voice_status",
          "label": "Voice Status",
          "type": "radio",
          "options": [
            {
              "label": "Voice is within functional limits",
              "value": "voice_normal"
            },
            {
              "label": "The patient presents with voice disorders",
              "value": "presents_with"
            }
          ]
        },
        {
          "name": "voice_diagnosis",
          "label": "The patient presents with",
          "type": "checkbox-group",
          "showIf": {
            "field": "voice_status",
            "equals": "presents_with"
          },
          "options": [
            {
              "label": "Dysphonia",
              "value": "dysphonia"
            },
            {
              "label": "Aphonia",
              "value": "aphonia"
            },
            {
              "label": "Hypernasality / Hyponasality",
              "value": "resonance_disorder"
            },
            {
              "label": "Other voice disturbances",
              "value": "other_voice_disorder"
            }
          ]
        },
        {
          "name": "voice_characteristics",
          "label": "Characteristics",
          "type": "checkbox-group",
          "showIf": {
            "field": "voice_status",
            "equals": "presents_with"
          },
          "options": [
            {
              "label": "Breathy dysphonia",
              "value": "breathy"
            },
            {
              "label": "Strained/rough voice",
              "value": "strained"
            },
            {
              "label": "Reduced loudness",
              "value": "low_loudness"
            },
            {
              "label": "Possible VF pathology",
              "value": "vf_pathology"
            }
          ]
        }
      ]
    }
  ]
}

const SCHEMA_PLAN = {
  "sections": [
    {
      "title": "Plan",
      "fields": [
        {
          "type": "subheading",
          "label": "Therapy"
        },
        {
          "name": "voice_therapy",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Training of voice functions",
              "value": "training_voice_functions"
            },
            {
              "label": "Education about voice functions",
              "value": "education_voice_functions"
            },
            {
              "label": "Advising about voice functions",
              "value": "advising_voice_functions"
            }
          ]
        },
        {
          "name": "voice_exercises",
          "label": "Voice exercises",
          "type": "textarea"
        },
        {
          "type": "subheading",
          "label": "Other Management"
        },
        {
          "name": "other_management",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Referral for medical management",
              "value": "medical_referral"
            },
            {
              "label": "Further Assessment",
              "value": "further_assessment"
            }
          ]
        },
        {
          "name": "further_assessment",
          "label": "",
          "type": "checkbox-group",
          "showIf": {
            "field": "other_management",
            "includes": "further_assessment"
          },
          "options": [
            {
              "label": "Assessment of communication, unspecified",
              "value": "assessment"
            },
            {
              "label": "Test of communication, unspecified",
              "value": "test"
            },
            {
              "label": "Observation of communication, unspecified",
              "value": "observation"
            },
            {
              "label": "Interview in relation to communication, unspecified",
              "value": "interview"
            }
          ]
        }
      ]
    }
  ]
}