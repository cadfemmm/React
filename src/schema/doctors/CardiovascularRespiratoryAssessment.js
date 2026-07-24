const SCHEMA = {
  "title": "Cardiovascular & Respiratory Assessment",
  "sections": [
    {
      "title": "",
      "fields": [
        {
          "type": "subheading",
          "label": "Respiratory"
        },
        {
          "type": "radio",
          "name": "respiratory_section",
          "label": "Respiratory Symptoms",
          "options": [
            {
              "label": "Issue",
              "value": "Yes"
            },
            {
              "label": "No Issue",
              "value": "No"
            }
          ]
        },
        {
          "type": "radio",
          "name": "cough",
          "label": "Cough",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "respiratory_section",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "cough_type",
          "label": "Cough Type",
          "options": [
            {
              "label": "Productive",
              "value": "productive"
            },
            {
              "label": "Non-Productive",
              "value": "non_productive"
            }
          ],
          "showIf": {
            "field": "cough",
            "equals": "Yes",
            "and": {
              "field": "respiratory_section",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "sputum",
          "label": "Sputum",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "respiratory_section",
            "equals": "Yes"
          }
        },
        {
          "type": "checkbox-group",
          "name": "sputum_color",
          "label": "Sputum Color",
          "options": [
            {
              "label": "Whitish",
              "value": "whitish"
            },
            {
              "label": "Yellowish",
              "value": "yellowish"
            },
            {
              "label": "Greenish",
              "value": "greenish"
            },
            {
              "label": "Pinkish",
              "value": "pinkish"
            },
            {
              "label": "Reddish",
              "value": "reddish"
            }
          ],
          "showIf": {
            "field": "sputum",
            "equals": "Yes",
            "and": {
              "field": "respiratory_section",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "checkbox-group",
          "name": "sputum_quantity",
          "label": "Sputum Quantity",
          "options": [
            {
              "label": "Minimal",
              "value": "minimal"
            },
            {
              "label": "Moderate",
              "value": "moderate"
            },
            {
              "label": "Large",
              "value": "large"
            }
          ],
          "showIf": {
            "field": "sputum",
            "equals": "Yes",
            "and": {
              "field": "respiratory_section",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "wheeze",
          "label": "Wheeze",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "respiratory_section",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "chest_pain",
          "label": "Chest Pain",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "respiratory_section",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "dyspnoea",
          "label": "Dyspnoea",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "respiratory_section",
            "equals": "Yes"
          }
        },
        {
          "type": "checkbox-group",
          "name": "dyspnoea_type",
          "label": "Dyspnoea Type",
          "options": [
            {
              "label": "At rest",
              "value": "at_rest"
            },
            {
              "label": "On exertion",
              "value": "on_exertion"
            }
          ],
          "showIf": {
            "field": "dyspnoea",
            "equals": "Yes",
            "and": {
              "field": "respiratory_section",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "orthopnoea",
          "label": "Orthopnoea",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "respiratory_section",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "paroxysmal_nocturnal_dyspnoea",
          "label": "Paroxysmal Nocturnal Dyspnoea",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "respiratory_section",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "fatigue",
          "label": "Fatigue",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "respiratory_section",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "weight_loss",
          "label": "Weight Loss",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "respiratory_section",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "oxygen_requirement",
          "label": "Oxygen Requirement",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "respiratory_section",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "oxygen_mode",
          "label": "Oxygen Mode",
          "options": [
            {
              "label": "Nasal Prong",
              "value": "nasal_prong"
            },
            {
              "label": "Face Mask",
              "value": "face_mask"
            },
            {
              "label": "High Flow",
              "value": "high_flow"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ],
          "showIf": {
            "field": "oxygen_requirement",
            "equals": "Yes",
            "and": {
              "field": "respiratory_section",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "input",
          "name": "oxygen_free_text",
          "label": "Oxygen Free text",
          "showIf": {
            "field": "oxygen_requirement",
            "equals": "Yes",
            "and": {
              "field": "oxygen_mode",
              "equals": "others"
            }
          }
        },
        {
          "type": "input",
          "name": "respiratory_symptoms_specify",
          "label": "Specify",
          "showIf": {
            "or": [
              {
                "field": "cough",
                "equals": "Yes"
              },
              {
                "field": "sputum",
                "equals": "Yes"
              },
              {
                "field": "wheeze",
                "equals": "Yes"
              },
              {
                "field": "chest_pain",
                "equals": "Yes"
              },
              {
                "field": "dyspnoea",
                "equals": "Yes"
              },
              {
                "field": "orthopnoea",
                "equals": "Yes"
              },
              {
                "field": "paroxysmal_nocturnal_dyspnoea",
                "equals": "Yes"
              },
              {
                "field": "fatigue",
                "equals": "Yes"
              },
              {
                "field": "weight_loss",
                "equals": "Yes"
              },
              {
                "field": "oxygen_requirement",
                "equals": "Yes"
              }
            ]
          }
        },
        {
          "type": "subheading",
          "label": "Cardiovascular"
        },
        {
          "type": "radio",
          "name": "cardio_section",
          "label": "Cardiovascular Symptoms",
          "options": [
            {
              "label": "Issue",
              "value": "Yes"
            },
            {
              "label": "No Issue",
              "value": "No"
            }
          ]
        },
        {
          "type": "radio",
          "name": "palpitations",
          "label": "Palpitations",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "cardio_section",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "syncope_presyncope",
          "label": "Syncope / Pre-syncope",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "cardio_section",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "ankle_swelling",
          "label": "Ankle Swelling",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "cardio_section",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "exercise_intolerance",
          "label": "Exercise Intolerance",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "cardio_section",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "fluid_restriction",
          "label": "Fluid Restriction",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "cardio_section",
            "equals": "Yes"
          }
        },
        {
          "type": "input",
          "name": "cardiovascular_symptoms_specify",
          "label": "Specify",
          "showIf": {
            "or": [
              {
                "field": "palpitations",
                "equals": "Yes"
              },
              {
                "field": "syncope_presyncope",
                "equals": "Yes"
              },
              {
                "field": "ankle_swelling",
                "equals": "Yes"
              },
              {
                "field": "exercise_intolerance",
                "equals": "Yes"
              },
              {
                "field": "fluid_restriction",
                "equals": "Yes"
              }
            ]
          }
        },
        {
          "type": "subheading",
          "label": "Past Medical History"
        },
        {
          "type": "radio",
          "name": "pmh_copd",
          "label": "COPD",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "radio",
          "name": "pmh_asthma",
          "label": "Asthma",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "radio",
          "name": "pmh_osa",
          "label": "Obstructive Sleep Apnea (OSA)",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "radio",
          "name": "pmh_recent_infections",
          "label": "Recent Infections",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "input",
          "name": "pmh_recent_infections_specify",
          "label": "Recent Infections (Specify)",
          "showIf": {
            "field": "pmh_recent_infections",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "pmh_tracheostomy",
          "label": "Tracheostomy",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "date",
          "name": "pmh_tracheostomy_last_change_date",
          "label": "Last change date",
          "showIf": {
            "field": "pmh_tracheostomy",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "pmh_prior_mi",
          "label": "Prior Myocardial Infarction",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "radio",
          "name": "pmh_heart_failure",
          "label": "Heart Failure",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "radio",
          "name": "pmh_arrhythmias",
          "label": "Arrhythmias",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "radio",
          "name": "pmh_hypertension",
          "label": "Hypertension",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "radio",
          "name": "pmh_dyslipidaemia",
          "label": "Dyslipidaemia",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "radio",
          "name": "pmh_diabetes_mellitus",
          "label": "Diabetes Mellitus",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "radio",
          "name": "pmh_valve_disease",
          "label": "Valve Disease",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "input",
          "name": "pmh_valve_disease_details",
          "label": "Specify",
          "showIf": {
            "field": "pmh_valve_disease",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "pmh_previous_surgery",
          "label": "Previous Surgery",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "input",
          "name": "pmh_previous_surgery_details",
          "label": "Specify",
          "showIf": {
            "field": "pmh_previous_surgery",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "pmh_echo_done",
          "label": "Echo Done",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "checkbox-group",
          "name": "echo_details",
          "label": "Echo Details",
          "options": [
            {
              "label": "Ejection Fraction (%)",
              "value": "ejection_fraction"
            },
            {
              "label": "Regional Wall Motion Abnormality (RWMA)",
              "value": "rwma"
            },
            {
              "label": "Tricuspid Regurgitation (TR)",
              "value": "tr"
            },
            {
              "label": "Mitral Regurgitation (MR)",
              "value": "mr"
            },
            {
              "label": "Other",
              "value": "other"
            }
          ],
          "showIf": {
            "field": "pmh_echo_done",
            "equals": "Yes"
          }
        },
        {
          "type": "input",
          "name": "echo_details_specify",
          "label": "Specify",
          "showIf": {
            "field": "pmh_echo_done",
            "equals": "Yes",
            "and": {
              "or": [
                {
                  "field": "echo_details",
                  "includes": "ejection_fraction"
                },
                {
                  "field": "echo_details",
                  "includes": "rwma"
                },
                {
                  "field": "echo_details",
                  "includes": "tr"
                },
                {
                  "field": "echo_details",
                  "includes": "mr"
                },
                {
                  "field": "echo_details",
                  "includes": "other"
                }
              ]
            }
          }
        },
        {
          "type": "heading",
          "label": "Risk Factors"
        },
        {
          "type": "radio",
          "name": "risk_smoking",
          "label": "Smoking",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "radio",
          "name": "pmh_environment_exposure",
          "label": "Environmental / Occupational Exposure",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "radio",
          "name": "risk_stress",
          "label": "Stress",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "input",
          "name": "risk_stress_specify",
          "label": "Stress (Specify)",
          "showIf": {
            "field": "risk_stress",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "risk_exercise",
          "label": "Exercise",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "input",
          "name": "risk_exercise_specify",
          "label": "Exercise (Specify)",
          "showIf": {
            "field": "risk_exercise",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "risk_physical_activity",
          "label": "Physical Activity",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "input",
          "name": "risk_physical_activity_specify",
          "label": "Physical Activity (Specify)",
          "showIf": {
            "field": "risk_physical_activity",
            "equals": "Yes"
          }
        },
        {
          "type": "row",
          "fields": [
            {
              "type": "input",
              "name": "height",
              "label": "Height",
              "readOnly": true,
              "placeholder": "Auto-populated from registration"
            },
            {
              "type": "input",
              "name": "weight",
              "label": "Weight",
              "readOnly": true,
              "placeholder": "Auto-populated from registration"
            },
            {
              "type": "input",
              "name": "bmi",
              "label": "BMI",
              "readOnly": true,
              "placeholder": "Auto-populated from registration"
            }
          ]
        },
        {
          "type": "heading",
          "label": "Examination"
        },
        {
          "type": "subheading",
          "label": "General & Respiratory Examination"
        },
        {
          "type": "radio",
          "name": "speaking_ability",
          "label": "Speaking Ability",
          "options": [
            {
              "label": "Full sentences",
              "value": "full_sentences"
            },
            {
              "label": "Short phrases",
              "value": "short_phrases"
            },
            {
              "label": "Words",
              "value": "words"
            },
            {
              "label": "Unable",
              "value": "unable"
            }
          ]
        },
        {
          "type": "radio",
          "name": "cyanosis",
          "label": "Cyanosis",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "radio",
          "name": "clubbing",
          "label": "Clubbing",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "radio",
          "name": "accessory_muscles",
          "label": "Use of Accessory Muscles",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "radio",
          "name": "cough_effort",
          "label": "Cough Effort",
          "options": [
            {
              "label": "Good",
              "value": "good"
            },
            {
              "label": "Poor",
              "value": "poor"
            },
            {
              "label": "Absent",
              "value": "absent"
            }
          ]
        },
        {
          "type": "input",
          "name": "cough_effort_specify",
          "label": "Cough Effort (Specify)",
          "showIf": {
            "field": "cough_effort",
            "oneOf": [
              "poor",
              "absent"
            ]
          }
        },
        {
          "type": "radio",
          "name": "respiratory_auscultation",
          "label": "Auscultation (Respiratory)",
          "labelAbove": true,
          "options": [
            {
              "label": "Clear",
              "value": "clear"
            },
            {
              "label": "Reduced Air Entry",
              "value": "reduced_air_entry"
            },
            {
              "label": "Absent",
              "value": "absent"
            },
            {
              "label": "Crepitations",
              "value": "crepitations"
            },
            {
              "label": "Rhonchi",
              "value": "rhonchi"
            },
            {
              "label": "Transmitted sounds",
              "value": "transmitted_sounds"
            }
          ]
        },
        {
          "type": "input",
          "name": "respiratory_auscultation_specify",
          "label": "Auscultation (Respiratory) (Specify)",
          "showIf": {
            "field": "respiratory_auscultation",
            "oneOf": [
              "reduced_air_entry",
              "absent",
              "crepitations",
              "rhonchi",
              "transmitted_sounds"
            ]
          }
        },
        {
          "type": "subheading",
          "label": "Cardiovascular Examination"
        },
        {
          "type": "accordion",
          "name": "latest_vitals",
          "label": "Latest Vitals",
          "children": [
            {
              "type": "input",
              "name": "heart_rate",
              "label": "Heart Rate (bpm)",
              "readOnly": true,
              "placeholder": "Auto-populated"
            },
            {
              "type": "row",
              "fields": [
                {
                  "type": "input",
                  "name": "blood_pressure",
                  "label": "Blood Pressure",
                  "readOnly": true,
                  "placeholder": "Auto-populated"
                },
                {
                  "type": "radio",
                  "name": "bp_position",
                  "label": "Position",
                  "options": [
                    {
                      "label": "Lying",
                      "value": "lying"
                    },
                    {
                      "label": "Sitting",
                      "value": "sitting"
                    },
                    {
                      "label": "Standing",
                      "value": "standing"
                    }
                  ],
                  "readOnly": true
                }
              ]
            },
            {
              "type": "row",
              "fields": [
                {
                  "type": "input",
                  "name": "respiratory_rate",
                  "label": "Respiratory Rate",
                  "readOnly": true,
                  "placeholder": "Auto-populated"
                },
                {
                  "type": "input",
                  "name": "spo2",
                  "label": "SpO2 (%)",
                  "readOnly": true,
                  "placeholder": "Auto-populated"
                },
                {
                  "type": "input",
                  "name": "temperature",
                  "label": "Temperature (°C)",
                  "readOnly": true,
                  "placeholder": "Auto-populated"
                }
              ]
            }
          ]
        },
        {
          "type": "accordion",
          "name": "current_vitals",
          "label": "Current Vitals",
          "children": [
            {
              "type": "input",
              "name": "current_heart_rate",
              "label": "Heart Rate (bpm)"
            },
            {
              "type": "row",
              "fields": [
                {
                  "type": "input",
                  "name": "current_blood_pressure",
                  "label": "Blood Pressure"
                },
                {
                  "type": "radio",
                  "name": "current_bp_position",
                  "label": "Position",
                  "options": [
                    {
                      "label": "Lying",
                      "value": "lying"
                    },
                    {
                      "label": "Sitting",
                      "value": "sitting"
                    },
                    {
                      "label": "Standing",
                      "value": "standing"
                    }
                  ]
                }
              ]
            },
            {
              "type": "row",
              "fields": [
                {
                  "type": "input",
                  "name": "current_respiratory_rate",
                  "label": "Respiratory Rate"
                },
                {
                  "type": "input",
                  "name": "current_spo2",
                  "label": "SpO2 (%)"
                },
                {
                  "type": "input",
                  "name": "current_temperature",
                  "label": "Temperature (°C)"
                }
              ]
            }
          ]
        },
        {
          "type": "radio",
          "name": "capillary_refill_time",
          "label": "Capillary Refill Time",
          "options": [
            {
              "label": "<2 sec",
              "value": "lt_2_sec"
            },
            {
              "label": ">2 sec",
              "value": "gt_2_sec"
            }
          ]
        },
        {
          "type": "radio",
          "name": "skin_colour",
          "label": "Skin Colour",
          "options": [
            {
              "label": "Pink",
              "value": "pink"
            },
            {
              "label": "Pale",
              "value": "pale"
            },
            {
              "label": "Cyanosed",
              "value": "cyanosed"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "type": "input",
          "name": "skin_colour_specify",
          "label": "Skin Colour (Specify)",
          "showIf": {
            "field": "skin_colour",
            "equals": "others"
          }
        },
        {
          "type": "radio",
          "name": "pulse_volume",
          "label": "Pulse Volume",
          "options": [
            {
              "label": "Strong",
              "value": "strong"
            },
            {
              "label": "Feeble",
              "value": "feeble"
            },
            {
              "label": "Not palpable",
              "value": "not_palpable"
            }
          ]
        },
        {
          "type": "radio",
          "name": "pulse_rhythm",
          "label": "Pulse Rhythm",
          "options": [
            {
              "label": "Regular",
              "value": "regular"
            },
            {
              "label": "Irregular",
              "value": "irregular"
            }
          ]
        },
        {
          "type": "radio",
          "name": "dorsalis_pedis",
          "label": "Dorsalis Pedis",
          "options": [
            {
              "label": "Strong",
              "value": "strong"
            },
            {
              "label": "Feeble",
              "value": "feeble"
            },
            {
              "label": "Not palpable",
              "value": "not_palpable"
            }
          ]
        },
        {
          "type": "radio",
          "name": "posterior_tibial",
          "label": "Posterior Tibial",
          "options": [
            {
              "label": "Strong",
              "value": "strong"
            },
            {
              "label": "Feeble",
              "value": "feeble"
            },
            {
              "label": "Not palpable",
              "value": "not_palpable"
            }
          ]
        },
        {
          "type": "radio",
          "name": "raised_jvp",
          "label": "Raised Jugular Venous Pressure",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "radio",
          "name": "oedema",
          "label": "Oedema",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ]
        },
        {
          "type": "radio",
          "name": "oedema_type",
          "label": "Oedema Type",
          "options": [
            {
              "label": "Pitting",
              "value": "pitting"
            },
            {
              "label": "Non-pitting",
              "value": "non_pitting"
            }
          ],
          "showIf": {
            "field": "oedema",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "cardiac_auscultation",
          "label": "Cardiac Auscultation",
          "labelAbove": true,
          "options": [
            {
              "label": "No Abnormality Detected",
              "value": "no_abnormality_detected"
            },
            {
              "label": "Murmurs",
              "value": "murmurs"
            },
            {
              "label": "S3",
              "value": "s3"
            },
            {
              "label": "S4",
              "value": "s4"
            },
            {
              "label": "Rubs",
              "value": "rubs"
            },
            {
              "label": "Gallops",
              "value": "gallops"
            }
          ]
        },
        {
          "type": "input",
          "name": "cardiac_auscultation_specify",
          "label": "Cardiac Auscultation (Specify)",
          "showIf": {
            "field": "cardiac_auscultation",
            "oneOf": [
              "murmurs",
              "s3",
              "s4",
              "rubs",
              "gallops"
            ]
          }
        },
        {
          "type": "textarea",
          "name": "examination_others",
          "label": "Others"
        },
        {
          "type": "heading",
          "label": "Scoring & Classification"
        },
        {
          "type": "assessment-launcher",
          "name": "cardio_scoring_assessments",
          "label": "",
          "options": [
            {
              "label": "NYHA Classification",
              "value": "nyha"
            },
            {
              "label": "STOP-BANG Questionnaire",
              "value": "stopbang"
            }
          ]
        },
        {
          "type": "input",
          "name": "nyha_classification",
          "label": "NYHA Classification",
          "readOnly": true
        },
        {
          "type": "input",
          "name": "stop_bang_score_display",
          "label": "STOP-BANG Score",
          "readOnly": true
        },
        {
          "type": "info-text",
          "heading": "STOP-BANG Interpretation",
          "text": "Enter STOP-BANG score using questionnaire."
        },
        {
          "type": "heading",
          "label": "Investigations"
        },
        {
          "type": "input",
          "name": "ecg_data",
          "label": "ECG",
          "readOnly": true,
          "placeholder": "No reports are attached till now"
        },
        {
          "type": "subheading",
          "label": "Goals"
        },
        {
          "type": "textarea",
          "name": "cardiovascular_goals",
          "placeholder": "Enter goals"
        },
        {
          "type": "heading",
          "label": "Plan"
        },
        {
          "type": "checkbox-group",
          "name": "plan_options",
          "label": "",
          "options": [
            {
              "label": "Suction",
              "value": "suction"
            },
            {
              "label": "Nebuliser",
              "value": "nebuliser"
            },
            {
              "label": "Oxygen Supplement",
              "value": "oxygen_supplement"
            },
            {
              "label": "Incentive Spirometry",
              "value": "incentive_spirometry"
            },
            {
              "label": "High Frequency Chest Wall Oscillation (HFCWO)",
              "value": "hfcwo"
            },
            {
              "label": "Fluid Restriction Monitoring",
              "value": "fluid_restriction_monitoring"
            },
            {
              "label": "Serial ECG",
              "value": "serial_ecg"
            },
            {
              "label": "ABI Assessment",
              "value": "abi_assessment"
            },
            {
              "label": "BP Monitoring",
              "value": "bp_monitoring"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "type": "input",
          "name": "plan_specify",
          "label": "Specify",
          "showIf": {
            "or": [
              {
                "field": "plan_options",
                "includes": "suction"
              },
              {
                "field": "plan_options",
                "includes": "nebuliser"
              },
              {
                "field": "plan_options",
                "includes": "oxygen_supplement"
              },
              {
                "field": "plan_options",
                "includes": "incentive_spirometry"
              },
              {
                "field": "plan_options",
                "includes": "hfcwo"
              },
              {
                "field": "plan_options",
                "includes": "fluid_restriction_monitoring"
              },
              {
                "field": "plan_options",
                "includes": "serial_ecg"
              },
              {
                "field": "plan_options",
                "includes": "abi_assessment"
              },
              {
                "field": "plan_options",
                "includes": "bp_monitoring"
              },
              {
                "field": "plan_options",
                "includes": "others"
              }
            ]
          }
        },
        {
          "type": "radio",
          "name": "bp_monitoring",
          "label": "BP Monitoring",
          "options": [
            {
              "label": "Lying",
              "value": "lying"
            },
            {
              "label": "Upright",
              "value": "upright"
            }
          ],
          "showIf": {
            "field": "plan_options",
            "includes": "bp_monitoring"
          }
        }
      ]
    }
  ]
}