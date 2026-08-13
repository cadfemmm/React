const schema = {
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Biological Status"
        },
        {
          "name": "biological_status",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Comorbidities & Medical history",
              "value": "comorbidities"
            },
            {
              "label": "Physical limitation",
              "value": "physical_limitation"
            },
            {
              "label": "Chronic pain / sleep issue",
              "value": "chronic_pain_sleep"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Psychological"
        },
        {
          "name": "psychological",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Emotional status (anxiety, depression, coping)",
              "value": "emotional_status"
            },
            {
              "label": "Cognitive Function",
              "value": "cognitive_function"
            },
            {
              "label": "Stressor",
              "value": "stressor"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Social"
        },
        {
          "name": "social",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Family & Caregiver support",
              "value": "family_caregiver"
            },
            {
              "label": "Financial / Insurance status",
              "value": "financial_insurance"
            },
            {
              "label": "Language/communication barriers",
              "value": "language_barriers"
            },
            {
              "label": "Cultural / religious considerations",
              "value": "cultural_religious"
            }
          ]
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "unit_ward",
              "label": "Unit/Ward",
              "type": "input"
            },
            {
              "name": "attending_physician",
              "label": "Attending Physician",
              "type": "checkbox-group",
              "options": [
                {
                  "label": "Dr. Liyana",
                  "value": "Dr.Liyana"
                },
                {
                  "label": "Mr. Tan",
                  "value": "Mr.Tan"
                },
                {
                  "label": "Dr. Hussain",
                  "value": "Dr.Hussain"
                },
                {
                  "label": "Dr. Naz",
                  "value": "Dr.Naz"
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "date_of_admission",
              "label": "Date of Admission",
              "type": "date"
            },
            {
              "name": "reason_for_admission",
              "label": "Reason for Admission",
              "type": "input"
            }
          ]
        }
      ]
    }
  ]
}


const subjective = {
  "sections": [
    {
      "fields": [
        {
          "name": "chief_complaint",
          "label": "Chief Complaint",
          "type": "input"
        },
        {
          "name": "history_present_illness",
          "label": "History of Present Illness",
          "type": "input"
        },
        {
          "name": "past_medical_surgical",
          "label": "Past Medical/Surgical",
          "type": "textarea"
        },
        {
          "name": "past_family_medical_history",
          "label": "Past Family Medical History",
          "type": "textarea"
        }
      ]
    },
    {
      "title": "Allergies & Alerts",
      "fields": [
        {
          "name": "drug_allergies",
          "label": "Drug allergies",
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
          "name": "drug_allergies_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "drug_allergies",
            "equals": "yes"
          }
        },
        {
          "name": "food_allergies",
          "label": "Food allergies",
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
          "name": "food_allergies_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "food_allergies",
            "equals": "yes"
          }
        },
        {
          "name": "latex_allergy",
          "label": "Other allergy",
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
          "name": "latex_allergy_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "latex_allergy",
            "equals": "yes"
          }
        },
        {
          "name": "environmental_allergies",
          "label": "Environmental allergies",
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
          "name": "environmental_allergies_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "environmental_allergies",
            "equals": "yes"
          }
        },
        {
          "name": "reaction_type",
          "label": "Reaction type",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Rash",
              "value": "rash"
            },
            {
              "label": "Anaphylaxis",
              "value": "anaphylaxis"
            },
            {
              "label": "GI upset",
              "value": "gi_upset"
            },
            {
              "label": "Respiratory",
              "value": "respiratory"
            },
            {
              "label": "Other",
              "value": "other"
            }
          ]
        },
        {
          "name": "reaction_type_other",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "reaction_type",
            "includes": "other"
          }
        }
      ]
    },
    {
      "title": "Pain Assessment",
      "fields": [
        {
          "name": "pain_present",
          "label": "Pain present",
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
          "label": "Full pain panel (OPQRST)",
          "showIf": {
            "field": "pain_present",
            "equals": "yes"
          }
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "pain_onset",
              "label": "Onset",
              "type": "date"
            },
            {
              "type": "subheading",
              "label": "Provocation/Palliation",
              "showIf": {
                "field": "pain_present",
                "equals": "yes"
              }
            },
            {
              "name": "pain_provocation",
              "label": "Provocation",
              "type": "input",
              "showIf": {
                "field": "pain_present",
                "equals": "yes"
              }
            },
            {
              "name": "pain_palliation",
              "label": "Palliation",
              "type": "input",
              "showIf": {
                "field": "pain_present",
                "equals": "yes"
              }
            }
          ],
          "showIf": {
            "field": "pain_present",
            "equals": "yes"
          }
        },
        {
          "name": "pain_provocation_relieved_by",
          "label": "Specify relieved by",
          "type": "input",
          "showIf": {
            "field": "pain_provocation",
            "equals": "relieved_by"
          }
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "pain_quality",
              "label": "Quality",
              "type": "input"
            },
            {
              "name": "pain_region",
              "label": "Region/Radiation",
              "type": "input"
            }
          ],
          "showIf": {
            "field": "pain_present",
            "equals": "yes"
          }
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "pain_severity_at_rest",
              "label": "Severity At rest (0 - 10)",
              "type": "single-select",
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
                },
                {
                  "label": "5",
                  "value": "5"
                },
                {
                  "label": "6",
                  "value": "6"
                },
                {
                  "label": "7",
                  "value": "7"
                },
                {
                  "label": "8",
                  "value": "8"
                },
                {
                  "label": "9",
                  "value": "9"
                },
                {
                  "label": "10",
                  "value": "10"
                }
              ]
            },
            {
              "name": "pain_severity_with_movement",
              "label": "Severity With movement (0 - 10)",
              "type": "single-select",
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
                },
                {
                  "label": "5",
                  "value": "5"
                },
                {
                  "label": "6",
                  "value": "6"
                },
                {
                  "label": "7",
                  "value": "7"
                },
                {
                  "label": "8",
                  "value": "8"
                },
                {
                  "label": "9",
                  "value": "9"
                },
                {
                  "label": "10",
                  "value": "10"
                }
              ]
            }
          ]
        },
        {
          "name": "pain_assessment_form",
          "label": "",
          "type": "assessment-launcher",
          "options": [
            {
              "label": "Numeric Rating Scale",
              "value": "numeric_pain_rating_scale"
            }
          ],
          "showIf": {
            "field": "pain_present",
            "equals": "yes"
          }
        },
        {
          "name": "pain_timing",
          "label": "Timing",
          "type": "input",
          "showIf": {
            "field": "pain_present",
            "equals": "yes"
          }
        },
        {
          "name": "pain_type",
          "label": "Pain Type",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Burning",
              "value": "burning"
            },
            {
              "label": "Tingling",
              "value": "tingling"
            },
            {
              "label": "Numbness",
              "value": "numbness"
            },
            {
              "label": "Sharp",
              "value": "sharp"
            },
            {
              "label": "Cramping",
              "value": "cramping"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ],
          "showIf": {
            "field": "pain_present",
            "equals": "yes"
          }
        },
        {
          "type": "input",
          "name": "pain_type_other",
          "label": "Specify",
          "showIf": {
            "field": "pain_type",
            "includes": "others"
          }
        },
        {
          "name": "pain_at_rest_night",
          "label": "Pain at Rest/ Night Pain",
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
          ],
          "showIf": {
            "field": "pain_present",
            "equals": "yes"
          }
        },
        {
          "name": "pain_free_text",
          "label": "Specify",
          "type": "textarea",
          "showIf": {
            "field": "pain_present",
            "equals": "yes"
          }
        }
      ]
    },
    {
      "title": "Emotional Status",
      "fields": [
        {
          "name": "mood_status",
          "label": "Mood Status",
          "type": "radio",
          "options": [
            {
              "label": "Euthymic",
              "value": "euthymic"
            },
            {
              "label": "Depressed",
              "value": "depressed"
            },
            {
              "label": "Anxious",
              "value": "anxious"
            },
            {
              "label": "Irritable",
              "value": "irritable"
            },
            {
              "label": "Other",
              "value": "other"
            }
          ]
        },
        {
          "name": "mood_status_other",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "mood_status",
            "equals": "other"
          }
        },
        {
          "name": "emotional_status",
          "label": "Emotional Status",
          "type": "radio",
          "options": [
            {
              "label": "Good",
              "value": "good"
            },
            {
              "label": "Mild emotional distress",
              "value": "mild_distress"
            },
            {
              "label": "Moderate emotional distress",
              "value": "moderate_distress"
            },
            {
              "label": "Severe emotional distress",
              "value": "severe_distress"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Mental Health Screening",
          "showIf": {
            "or": [
              {
                "field": "mood_status",
                "oneOf": [
                  "depressed",
                  "anxious",
                  "irritable",
                  "other"
                ]
              },
              {
                "field": "emotional_status",
                "oneOf": [
                  "mild_distress",
                  "moderate_distress",
                  "severe_distress"
                ]
              }
            ]
          }
        },
        {
          "name": "anxiety_stress_depression",
          "label": "Anxiety/stress/depression symptoms",
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
          ],
          "showIf": {
            "or": [
              {
                "field": "mood_status",
                "oneOf": [
                  "depressed",
                  "anxious",
                  "irritable",
                  "other"
                ]
              },
              {
                "field": "emotional_status",
                "oneOf": [
                  "mild_distress",
                  "moderate_distress",
                  "severe_distress"
                ]
              }
            ]
          }
        },
        {
          "name": "restlessness_pacing",
          "label": "Restlessness/pacing",
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
          ],
          "showIf": {
            "or": [
              {
                "field": "mood_status",
                "oneOf": [
                  "depressed",
                  "anxious",
                  "irritable",
                  "other"
                ]
              },
              {
                "field": "emotional_status",
                "oneOf": [
                  "mild_distress",
                  "moderate_distress",
                  "severe_distress"
                ]
              }
            ]
          }
        },
        {
          "name": "aggression",
          "label": "Aggression (verbal/physical)",
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
          ],
          "showIf": {
            "or": [
              {
                "field": "mood_status",
                "oneOf": [
                  "depressed",
                  "anxious",
                  "irritable",
                  "other"
                ]
              },
              {
                "field": "emotional_status",
                "oneOf": [
                  "mild_distress",
                  "moderate_distress",
                  "severe_distress"
                ]
              }
            ]
          }
        },
        {
          "name": "hallucinations_delusions",
          "label": "Hallucinations/delusions reported",
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
          ],
          "showIf": {
            "or": [
              {
                "field": "mood_status",
                "oneOf": [
                  "depressed",
                  "anxious",
                  "irritable",
                  "other"
                ]
              },
              {
                "field": "emotional_status",
                "oneOf": [
                  "mild_distress",
                  "moderate_distress",
                  "severe_distress"
                ]
              }
            ]
          }
        },
        {
          "name": "suicidal_ideation",
          "label": "Suicidal ideation/self-harm thoughts",
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
          ],
          "showIf": {
            "or": [
              {
                "field": "mood_status",
                "oneOf": [
                  "depressed",
                  "anxious",
                  "irritable",
                  "other"
                ]
              },
              {
                "field": "emotional_status",
                "oneOf": [
                  "mild_distress",
                  "moderate_distress",
                  "severe_distress"
                ]
              }
            ]
          }
        },
        {
          "name": "psychiatric_diagnosis_history",
          "label": "Current psychiatric diagnosis/history",
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
          ],
          "showIf": {
            "or": [
              {
                "field": "mood_status",
                "oneOf": [
                  "depressed",
                  "anxious",
                  "irritable",
                  "other"
                ]
              },
              {
                "field": "emotional_status",
                "oneOf": [
                  "mild_distress",
                  "moderate_distress",
                  "severe_distress"
                ]
              }
            ]
          }
        },
        {
          "name": "psychiatric_diagnosis_specify",
          "label": "Specify",
          "type": "textarea",
          "showIf": {
            "field": "psychiatric_diagnosis_history",
            "equals": "yes"
          }
        }
      ]
    },
    {
      "title": "Nutrition & Hydration",
      "fields": [
        {
          "name": "appetite_level",
          "label": "Appetite level",
          "type": "radio",
          "options": [
            {
              "label": "Normal",
              "value": "normal"
            },
            {
              "label": "Poor",
              "value": "poor"
            },
            {
              "label": "Increased",
              "value": "increased"
            }
          ]
        },
        {
          "name": "dietary_intake_adequate",
          "label": "Food intake adequate",
          "type": "radio-matrix",
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
          "name": "swallowing_difficulty",
          "label": "Swallowing difficulty",
          "type": "radio-matrix",
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
          "name": "daily_fluid_intake_adequate",
          "label": "Daily fluid intake adequate",
          "type": "radio-matrix",
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
          "name": "significant_weight_change",
          "label": "Significant weight change in past year",
          "type": "radio-matrix",
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
          "name": "weight_change_specify",
          "label": "Specify",
          "type": "textarea",
          "showIf": {
            "field": "significant_weight_change",
            "equals": "yes"
          }
        },
        {
          "name": "nutrition_hydration_specify",
          "label": "Specify",
          "type": "textarea"
        }
      ]
    },
    {
      "title": "Cardiorespiratory & Autonomic Symptoms",
      "fields": [
        {
          "name": "activity_tolerance",
          "label": "Activity Tolerance",
          "type": "radio",
          "options": [
            {
              "label": "Full",
              "value": "full"
            },
            {
              "label": "Mild limitation",
              "value": "mild_limitation"
            },
            {
              "label": "Moderate limitation",
              "value": "moderate_limitation"
            },
            {
              "label": "Severe",
              "value": "severe"
            },
            {
              "label": "Unable",
              "value": "unable"
            }
          ]
        },
        {
          "name": "adl_performance",
          "label": "ADL Performance",
          "type": "radio",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Pacing required",
              "value": "pacing_required"
            },
            {
              "label": "Rest breaks",
              "value": "rest_breaks"
            },
            {
              "label": "Assistance needed",
              "value": "assistance_needed"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "name": "chest_pain",
          "label": "Chest pain",
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
          "name": "dyspnea",
          "label": "Dyspnea at rest/exertion",
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
          "name": "palpitations",
          "label": "Palpitations",
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
          "name": "cardiac_assessment_launcher_subjective",
          "label": "",
          "type": "assessment-launcher",
          "options": [
            {
              "label": "Cardiac Assessment",
              "value": "cardiac_assessment"
            }
          ],
          "showIf": {
            "field": "show_cardiac_launcher",
            "equals": true
          }
        },
        {
          "name": "dizziness_syncope",
          "label": "Dizziness/syncope",
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
          "name": "orthostatic_symptoms",
          "label": "Orthostatic symptoms",
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
          "name": "exercise_intolerance",
          "label": "Exercise intolerance/fatigue",
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
          "name": "cardiorespiratory_specify",
          "label": "Specify",
          "type": "textarea"
        }
      ]
    },
    {
      "title": "Bowel and Bladder",
      "fields": [
        {
          "name": "bowel_pattern",
          "label": "Bowel pattern",
          "type": "radio",
          "options": [
            {
              "label": "Continence",
              "value": "continence"
            },
            {
              "label": "Incontinence",
              "value": "incontinence"
            }
          ]
        },
        {
          "type": "assessment-launcher",
          "name": "bowel_assessment_inline",
          "autoOpen": true,
          "hideRemarks": true,
          "showIf": {
            "field": "bowel_pattern",
            "equals": "incontinence"
          },
          "options": [
            {
              "label": "Bowel Assessment",
              "value": "bowel_assessment"
            }
          ]
        },
        {
          "name": "bladder_pattern",
          "label": "Bladder pattern",
          "type": "radio",
          "options": [
            {
              "label": "Continence",
              "value": "continence"
            },
            {
              "label": "Incontinence",
              "value": "incontinence"
            }
          ]
        },
        {
          "type": "assessment-launcher",
          "name": "bladder_assessment_inline",
          "autoOpen": true,
          "hideRemarks": true,
          "showIf": {
            "field": "bladder_pattern",
            "equals": "incontinence"
          },
          "options": [
            {
              "label": "Bladder Issue",
              "value": "bladder_issue"
            }
          ]
        }
      ]
    },
    {
      "title": "Functional Status",
      "fields": [
        {
          "name": "difficulty_mobility_transfers",
          "label": "Difficulty with mobility/transfers",
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
          "type": "row",
          "fields": [
            {
              "name": "mobility_short_distance",
              "label": "Short Distance",
              "type": "input"
            },
            {
              "name": "mobility_long_distance",
              "label": "Long Distance",
              "type": "input"
            }
          ],
          "showIf": {
            "field": "difficulty_mobility_transfers",
            "equals": "yes"
          }
        },
        {
          "name": "history_of_falls",
          "label": "History of falls/near-falls",
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
          "label": "History of Fall (Within 3 Months)",
          "showIf": {
            "field": "history_of_falls",
            "equals": "yes"
          }
        },
        {
          "type": "row",
          "cols": 3,
          "fields": [
            {
              "name": "last_fall",
              "label": "Last Fall",
              "type": "input"
            },
            {
              "name": "mechanism_of_fall",
              "label": "Mechanism of Fall",
              "type": "input"
            },
            {
              "name": "fall_impact",
              "label": "Fall Impact",
              "type": "input"
            }
          ],
          "showIf": {
            "field": "history_of_falls",
            "equals": "yes"
          }
        },
        {
          "name": "adl_limitations",
          "label": "ADL limitations",
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
          "name": "time_same_position",
          "label": "Time in same position",
          "type": "radio",
          "options": [
            {
              "label": "< 2 hours",
              "value": "lt_2_hours"
            },
            {
              "label": "> 2 hours",
              "value": "gte_2_hours"
            }
          ],
          "showIf": {
            "field": "adl_limitations",
            "equals": "yes"
          }
        },
        {
          "name": "pressure_areas",
          "label": "Pressure areas (sacrum, coccyx, heels, elbows)",
          "type": "radio",
          "options": [
            {
              "label": "Intact",
              "value": "intact"
            },
            {
              "label": "Reddened",
              "value": "reddened"
            },
            {
              "label": "Breakdown",
              "value": "breakdown"
            }
          ],
          "showIf": {
            "field": "adl_limitations",
            "equals": "yes"
          }
        },
        {
          "name": "pressure_areas_stage",
          "label": "Stage",
          "type": "input",
          "showIf": {
            "field": "pressure_areas",
            "equals": "breakdown"
          }
        },
        {
          "name": "skin_moisture",
          "label": "Skin moisture",
          "type": "radio",
          "options": [
            {
              "label": "Dry",
              "value": "dry"
            },
            {
              "label": "Occasionally moist",
              "value": "occasionally_moist"
            },
            {
              "label": "Frequently moist",
              "value": "frequently_moist"
            },
            {
              "label": "Constantly moist",
              "value": "constantly_moist"
            }
          ],
          "showIf": {
            "field": "adl_limitations",
            "equals": "yes"
          }
        },
        {
          "name": "functional_status_other",
          "label": "Others",
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
          "name": "sleep_pattern",
          "label": "Sleep pattern",
          "type": "radio",
          "options": [
            {
              "label": "Normal",
              "value": "normal"
            },
            {
              "label": "Disturbed",
              "value": "disturbed"
            }
          ],
          "showIf": {
            "field": "functional_status_other",
            "equals": "yes"
          }
        },
        {
          "name": "appetite_functional",
          "label": "Appetite",
          "type": "radio",
          "options": [
            {
              "label": "Normal",
              "value": "normal"
            },
            {
              "label": "Decreased",
              "value": "decreased"
            },
            {
              "label": "Increased",
              "value": "increased"
            }
          ],
          "showIf": {
            "field": "functional_status_other",
            "equals": "yes"
          }
        },
        {
          "name": "fatigue_reduced_endurance",
          "label": "Fatigue/reduced endurance",
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
          ],
          "showIf": {
            "field": "functional_status_other",
            "equals": "yes"
          }
        },
        {
          "name": "functional_status_specify",
          "label": "Specify",
          "type": "textarea"
        }
      ]
    },
    {
      "title": "Safety & Comfort Concerns",
      "fields": [
        {
          "name": "morse_fall_scale_launcher",
          "label": "",
          "type": "assessment-launcher",
          "options": [
            {
              "label": "Morse Fall Scale",
              "value": "morse_fall_scale"
            }
          ],
          "showIf": {
            "field": "history_of_falls",
            "equals": "yes"
          }
        },
        {
          "name": "dizziness_balance_issues",
          "label": "Dizziness/balance issues",
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
          "name": "dizziness_type",
          "label": "",
          "type": "radio",
          "options": [
            {
              "label": "Continuous",
              "value": "continuous"
            },
            {
              "label": "Upon change of postures",
              "value": "change_of_postures"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ],
          "showIf": {
            "field": "dizziness_balance_issues",
            "equals": "yes"
          }
        },
        {
          "name": "dizziness_type_other",
          "label": "Others",
          "type": "input",
          "showIf": {
            "field": "dizziness_balance_issues",
            "equals": "yes",
            "and": {
              "field": "dizziness_type",
              "equals": "others"
            }
          }
        },
        {
          "type": "subheading",
          "label": "Orthostatic vitals",
          "showIf": {
            "field": "dizziness_balance_issues",
            "equals": "yes"
          }
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "ortho_supine_bp",
              "label": "Supine: BP",
              "type": "input"
            },
            {
              "name": "ortho_supine_hr",
              "label": "Supine: HR",
              "type": "input"
            }
          ],
          "showIf": {
            "field": "dizziness_balance_issues",
            "equals": "yes"
          }
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "ortho_sitting_bp",
              "label": "Sitting: BP",
              "type": "input"
            },
            {
              "name": "ortho_sitting_hr",
              "label": "Sitting: HR",
              "type": "input"
            }
          ],
          "showIf": {
            "field": "dizziness_balance_issues",
            "equals": "yes"
          }
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "ortho_stand1_bp",
              "label": "Standing (1 min): BP",
              "type": "input"
            },
            {
              "name": "ortho_stand1_hr",
              "label": "Standing (1 min): HR",
              "type": "input"
            }
          ],
          "showIf": {
            "field": "dizziness_balance_issues",
            "equals": "yes"
          }
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "ortho_stand3_bp",
              "label": "Standing (3 min): BP",
              "type": "input"
            },
            {
              "name": "ortho_stand3_hr",
              "label": "Standing (3 min): HR",
              "type": "input"
            }
          ],
          "showIf": {
            "field": "dizziness_balance_issues",
            "equals": "yes"
          }
        },
        {
          "name": "pain_with_movement",
          "label": "Pain with movement/positioning",
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
          "name": "fear_hesitation_mobility",
          "label": "Fear/hesitation with mobility",
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
          "name": "safety_comfort_specify",
          "label": "Specify",
          "type": "textarea"
        }
      ]
    },
    {
      "title": "Infection Risk & Exposure Screening",
      "fields": [
        {
          "name": "fever_infection_14days",
          "label": "Fever/infection in past 14 days",
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
          "name": "fever_infection_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "fever_infection_14days",
            "equals": "yes"
          }
        },
        {
          "name": "tb_exposure_history",
          "label": "TB exposure/history",
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
          "name": "tb_exposure_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "tb_exposure_history",
            "equals": "yes"
          }
        },
        {
          "name": "mrsa_vre_mdro_history",
          "label": "MRSA/VRE/MDRO history",
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
          "name": "mrsa_vre_mdro_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "mrsa_vre_mdro_history",
            "equals": "yes"
          }
        },
        {
          "name": "recent_international_travel",
          "label": "Recent international travel",
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
          "name": "recent_travel_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "recent_international_travel",
            "equals": "yes"
          }
        }
      ]
    },
    {
      "title": "Psychosocial",
      "fields": [
        {
          "name": "family_social_support",
          "label": "Family/social support available",
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
    },
    {
      "title": "Medication Reconciliation",
      "fields": [
        {
          "name": "recent_medication_changes",
          "label": "Recent medication changes",
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
          "name": "recent_medication_changes_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "recent_medication_changes",
            "equals": "yes"
          }
        }
      ]
    },
    {
      "title": "Discharge Readiness",
      "fields": [
        {
          "name": "caregiver_available_discharge",
          "label": "Caregiver available at discharge",
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
          "name": "home_environment_safe",
          "label": "Home environment safe",
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
          "name": "barriers_to_discharge",
          "label": "Barriers to discharge",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Financial",
              "value": "financial"
            },
            {
              "label": "Mobility",
              "value": "mobility"
            },
            {
              "label": "Housing",
              "value": "housing"
            },
            {
              "label": "Transport",
              "value": "transport"
            },
            {
              "label": "None",
              "value": "none"
            }
          ]
        }
      ]
    },
    {
      "title": "Endocrine / Metabolic",
      "fields": [
        {
          "name": "hypoglycemia_symptoms",
          "label": "Hypoglycemia symptoms",
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
          "name": "hyperglycemia_symptoms",
          "label": "Hyperglycemia symptoms",
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
          "name": "steroid_therapy",
          "label": "Steroid therapy",
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
    },
    {
      "title": "Spasticity / Spasm",
      "fields": [
        {
          "type": "assessment-launcher",
          "name": "spasticity_inline",
          "hideRemarks": true,
          "options": [
            {
              "label": "Spasticity Assessment",
              "value": "spasticity_assessment"
            }
          ]
        }
      ]
    }
  ]
}

const objective = {
   "sections":[
      {
         "fields":[
            {
               "type":"subheading",
               "label":"Vital Signs"
            },
            {
               "type":"row",
               "fields":[
                  {
                     "name":"obj_body_temp",
                     "label":"Body Temperature (°C)",
                     "type":"input",
                     "placeholder":"°C"
                  },
                  {
                     "name":"obj_heart_rate",
                     "label":"Heart Rate (/min)",
                     "type":"input",
                     "placeholder":"/min"
                  },
                  {
                     "name":"obj_resp_rate",
                     "label":"Respiratory Rate (/min)",
                     "type":"input",
                     "placeholder":"/min"
                  }
               ]
            },
            {
               "type":"row",
               "fields":[
                  {
                     "name":"obj_bp",
                     "label":"Blood Pressure (mmHg)",
                     "type":"input",
                     "placeholder":"e.g. 120/80"
                  },
                  {
                     "name":"obj_spo2",
                     "label":"Oxygen Saturation (SpO2) (%)",
                     "type":"input",
                     "placeholder":"%"
                  }
               ]
            },
            {
               "name":"objective_pain_assessment_form",
               "label":"",
               "type":"assessment-launcher",
               "options":[
                  {
                     "label":"Numeric Rating Scale",
                     "value":"numeric_pain_rating_scale"
                  }
               ]
            },
            {
               "name":"wound_location_pins",
               "label":"Mark Wound Location on Body Diagram",
               "type":"wound-location-marker",
               "views":[
                  {
                     "key":"body",
                     "label":"Body (Front/Back)",
                     "src":"/body_high.png"
                  },
                  {
                     "key":"feet",
                     "label":"Feet",
                     "src":"/feet_high.png"
                  },
                  {
                     "key":"handsfeet",
                     "label":"Hands",
                     "src":"/palm.png"
                  }
               ],
               "showIf":{
                  "field":"show_motor_pain_assessment",
                  "equals":true
               }
            },
            {
               "name":"wound_location_notes",
               "label":"Wound Location Notes",
               "type":"textarea",
               "placeholder":"Enter wound location details...",
               "showIf":{
                  "field":"show_motor_pain_assessment",
                  "equals":true
               }
            },
            {
               "type":"subheading",
               "label":"Glucose Monitoring"
            },
            {
               "name":"glucose_monitoring",
               "label":"",
               "type":"input",
               "placeholder":"To include CGM report if present"
            },
            {
               "name":"cardiac_assessment_launcher",
               "label":"",
               "type":"assessment-launcher",
               "options":[
                  {
                     "label":"Cardiac Assessment",
                     "value":"cardiac_assessment"
                  }
               ],
               "showIf":{
                  "field":"show_cardiac_launcher",
                  "equals":true
               }
            },
            {
               "type":"subheading",
               "label":"Anthropometry"
            },
            {
               "type":"row",
               "fields":[
                  {
                     "name":"obj_height",
                     "label":"Height (cm)",
                     "type":"input"
                  },
                  {
                     "name":"obj_weight",
                     "label":"Weight (kg)",
                     "type":"input",
                     "placeholder":"kg"
                  }
               ]
            },
            {
               "name":"obj_bmi",
               "label":"BMI (kg/mÂ²)",
               "type":"score-box"
            },
            {
               "type":"subheading",
               "label":"Devices / Lines / Tubes"
            },
            {
               "name":"iv_access",
               "label":"IV access",
               "type":"radio",
               "options":[
                  {
                     "label":"None",
                     "value":"none"
                  },
                  {
                     "label":"Peripheral",
                     "value":"peripheral"
                  },
                  {
                     "label":"Central",
                     "value":"central"
                  }
               ]
            },
            {
               "name":"iv_access_site",
               "label":"Site",
               "type":"input",
               "showIf":{
                  "field":"iv_access",
                  "oneOf":[
                     "peripheral",
                     "central"
                  ]
               }
            },
            {
               "name":"oxygen_device",
               "label":"Oxygen device",
               "type":"radio",
               "options":[
                  {
                     "label":"Room air",
                     "value":"room_air"
                  },
                  {
                     "label":"NC",
                     "value":"nc"
                  },
                  {
                     "label":"Mask",
                     "value":"mask"
                  },
                  {
                     "label":"Vent",
                     "value":"vent"
                  }
               ]
            },
            {
               "name":"urinary_catheter",
               "label":"Urinary catheter",
               "type":"radio",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "name":"feeding_tube",
               "label":"Feeding tube",
               "type":"radio",
               "options":[
                  {
                     "label":"NG",
                     "value":"ng"
                  },
                  {
                     "label":"PEG",
                     "value":"peg"
                  },
                  {
                     "label":"None",
                     "value":"none"
                  }
               ]
            },
            {
               "name":"drains_wound_vac",
               "label":"Drains/wound VAC",
               "type":"radio",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            }
         ]
      },
      {
         "title":"On Admission: Head-to-Toe Physical Assessment",
         "fields":[
            {
               "type":"subheading",
               "label":"Neurological"
            },
            {
               "name":"neuro_loc",
               "label":"Level of consciousness",
               "type":"radio",
               "options":[
                  {
                     "label":"Alert",
                     "value":"alert"
                  },
                  {
                     "label":"Drowsy",
                     "value":"drowsy"
                  },
                  {
                     "label":"Lethargic",
                     "value":"lethargic"
                  },
                  {
                     "label":"Unresponsive",
                     "value":"unresponsive"
                  }
               ]
            },
            {
               "name":"neuro_cognition_orientation",
               "label":"Cognition / Orientation",
               "type":"checkbox-group",
               "options":[
                  {
                     "label":"Person",
                     "value":"person"
                  },
                  {
                     "label":"Place",
                     "value":"place"
                  },
                  {
                     "label":"Time",
                     "value":"time"
                  },
                  {
                     "label":"Situation",
                     "value":"situation"
                  }
               ]
            },
            {
               "name":"neuro_communication",
               "label":"Communication",
               "type":"checkbox-group",
               "options":[
                  {
                     "label":"Normal speech",
                     "value":"normal_speech"
                  },
                  {
                     "label":"Dysarthria",
                     "value":"dysarthria"
                  },
                  {
                     "label":"Expressive aphasia",
                     "value":"expressive_aphasia"
                  },
                  {
                     "label":"Receptive aphasia",
                     "value":"receptive_aphasia"
                  },
                  {
                     "label":"Global aphasia",
                     "value":"global_aphasia"
                  },
                  {
                     "label":"Uses Alternative Communication Strategies (AAC / writing / gestures / device)",
                     "value":"aac"
                  }
               ]
            },
            {
               "name":"neuro_pupils",
               "label":"Pupils",
               "type":"radio",
               "options":[
                  {
                     "label":"Equal",
                     "value":"equal"
                  },
                  {
                     "label":"Reactive",
                     "value":"reactive"
                  },
                  {
                     "label":"Non-reactive",
                     "value":"non_reactive"
                  }
               ]
            },
            {
               "name":"neuro_motor_strength",
               "label":"Motor strength",
               "type":"radio",
               "options":[
                  {
                     "label":"Normal",
                     "value":"normal"
                  },
                  {
                     "label":"Weak (specify side)",
                     "value":"weak"
                  }
               ]
            },
            {
               "name":"neuro_motor_strength_specify",
               "label":"Motor strength weak (specify side)",
               "type":"input",
               "showIf":{
                  "field":"neuro_motor_strength",
                  "equals":"weak"
               }
            },
            {
               "name":"neuro_sensory_function",
               "label":"Sensory function",
               "type":"radio",
               "options":[
                  {
                     "label":"Intact",
                     "value":"intact"
                  },
                  {
                     "label":"Impaired (specify)",
                     "value":"impaired"
                  }
               ]
            },
            {
               "name":"neuro_sensory_function_specify",
               "label":"Sensory function impaired (specify)",
               "type":"input",
               "showIf":{
                  "field":"neuro_sensory_function",
                  "equals":"impaired"
               }
            },
            {
               "name":"neuro_reflexes",
               "label":"Reflexes",
               "type":"radio",
               "options":[
                  {
                     "label":"Normal",
                     "value":"normal"
                  },
                  {
                     "label":"Hypoactive",
                     "value":"hypoactive"
                  },
                  {
                     "label":"Hyperactive",
                     "value":"hyperactive"
                  }
               ]
            },
            {
               "name":"neuro_coordination_gait",
               "label":"Coordination / gait",
               "type":"radio",
               "options":[
                  {
                     "label":"Normal",
                     "value":"normal"
                  },
                  {
                     "label":"Unsteady",
                     "value":"unsteady"
                  }
               ]
            },
            {
               "name":"neuro_deficits",
               "label":"Neurological deficits",
               "type":"radio",
               "options":[
                  {
                     "label":"None",
                     "value":"none"
                  },
                  {
                     "label":"Present (specify)",
                     "value":"present"
                  }
               ]
            },
            {
               "name":"neuro_deficits_specify",
               "label":"Neurological deficits specify",
               "type":"textarea",
               "showIf":{
                  "field":"neuro_deficits",
                  "equals":"present"
               }
            },
            {
               "name":"neuro_overall_specify",
               "label":"Specify",
               "type":"textarea"
            },
            {
               "type":"subheading",
               "label":"Head and Neck"
            },
            {
               "name":"hn_head",
               "label":"Head",
               "type":"radio",
               "options":[
                  {
                     "label":"Normocephalic",
                     "value":"normocephalic"
                  },
                  {
                     "label":"Abnormal (specify)",
                     "value":"abnormal"
                  }
               ]
            },
            {
               "name":"hn_head_specify",
               "label":"Head abnormal (specify)",
               "type":"input",
               "showIf":{
                  "field":"hn_head",
                  "equals":"abnormal"
               }
            },
            {
               "name":"hn_eyes",
               "label":"Eyes",
               "type":"checkbox-group",
               "options":[
                  {
                     "label":"PERRLA",
                     "value":"perrla"
                  },
                  {
                     "label":"Redness",
                     "value":"redness"
                  },
                  {
                     "label":"Discharge",
                     "value":"discharge"
                  },
                  {
                     "label":"Visual deficit",
                     "value":"visual_deficit"
                  }
               ]
            },
            {
               "name":"eye_assessment_launcher",
               "label":"",
               "type":"assessment-launcher",
               "options":[
                  {
                     "label":"Eye Assessment",
                     "value":"eye_assessment"
                  }
               ],
               "showIf":{
                  "or":[
                     {
                        "field":"hn_eyes",
                        "includes":"redness"
                     },
                     {
                        "field":"hn_eyes",
                        "includes":"discharge"
                     },
                     {
                        "field":"hn_eyes",
                        "includes":"visual_deficit"
                     }
                  ]
               }
            },
            {
               "name":"hn_ears",
               "label":"Ears",
               "type":"checkbox-group",
               "options":[
                  {
                     "label":"Clear canals",
                     "value":"clear_canals"
                  },
                  {
                     "label":"Discharge",
                     "value":"discharge"
                  },
                  {
                     "label":"Hearing deficit",
                     "value":"hearing_deficit"
                  }
               ]
            },
            {
               "name":"hn_ears_audiology_referral",
               "label":"Audiology referral indicated",
               "type":"radio",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ],
               "showIf":{
                  "field":"hn_ears",
                  "includes":"hearing_deficit"
               }
            },
            {
               "name":"hn_nose",
               "label":"Nose",
               "type":"radio",
               "options":[
                  {
                     "label":"Patent",
                     "value":"patent"
                  },
                  {
                     "label":"Congestion",
                     "value":"congestion"
                  },
                  {
                     "label":"Discharge",
                     "value":"discharge"
                  }
               ]
            },
            {
               "name":"hn_mouth",
               "label":"Mouth / oral mucosa",
               "type":"checkbox-group",
               "options":[
                  {
                     "label":"Moist",
                     "value":"moist"
                  },
                  {
                     "label":"Dry",
                     "value":"dry"
                  },
                  {
                     "label":"Pale",
                     "value":"pale"
                  },
                  {
                     "label":"Lesions",
                     "value":"lesions"
                  }
               ]
            },
            {
               "name":"hn_throat",
               "label":"Throat / swallowing",
               "type":"radio",
               "options":[
                  {
                     "label":"Intact",
                     "value":"intact"
                  },
                  {
                     "label":"Dysphagia",
                     "value":"dysphagia"
                  }
               ]
            },
            {
               "name":"hn_neck",
               "label":"Neck",
               "type":"checkbox-group",
               "options":[
                  {
                     "label":"Supple",
                     "value":"supple"
                  },
                  {
                     "label":"Masses",
                     "value":"masses"
                  },
                  {
                     "label":"Lymphadenopathy",
                     "value":"lymphadenopathy"
                  }
               ]
            },
            {
               "name":"hn_jvd",
               "label":"Jugular venous distension (JVD)",
               "type":"radio",
               "options":[
                  {
                     "label":"Absent",
                     "value":"absent"
                  },
                  {
                     "label":"Present",
                     "value":"present"
                  }
               ]
            },
            {
               "name":"head_neck_assessment_launcher",
               "label":"",
               "type":"assessment-launcher",
               "options":[
                  {
                     "label":"Head & Neck Assessment",
                     "value":"head_neck_assessment"
                  }
               ],
               "showIf":{
                  "or":[
                     {
                        "field":"hn_head",
                        "equals":"abnormal"
                     },
                     {
                        "field":"hn_neck",
                        "includes":"masses"
                     },
                     {
                        "field":"hn_neck",
                        "includes":"lymphadenopathy"
                     }
                  ]
               }
            },
            {
               "type":"subheading",
               "label":"Chest & Lungs / Respiratory System"
            },
            {
               "name":"resp_breathing_pattern",
               "label":"Breathing pattern",
               "type":"radio",
               "options":[
                  {
                     "label":"Regular",
                     "value":"regular"
                  },
                  {
                     "label":"Labored",
                     "value":"labored"
                  },
                  {
                     "label":"Shallow",
                     "value":"shallow"
                  }
               ]
            },
            {
               "name":"resp_chest_expansion",
               "label":"Chest expansion",
               "type":"radio",
               "options":[
                  {
                     "label":"Symmetrical",
                     "value":"symmetrical"
                  },
                  {
                     "label":"Asymmetrical",
                     "value":"asymmetrical"
                  }
               ]
            },
            {
               "name":"resp_breath_sounds",
               "label":"Breath sounds",
               "type":"checkbox-group",
               "options":[
                  {
                     "label":"Clear",
                     "value":"clear"
                  },
                  {
                     "label":"Wheeze",
                     "value":"wheeze"
                  },
                  {
                     "label":"Crackles",
                     "value":"crackles"
                  },
                  {
                     "label":"Diminished",
                     "value":"diminished"
                  }
               ]
            },
            {
               "name":"resp_o2_saturation",
               "label":"Oxygen saturation (%)",
               "type":"input",
               "placeholder":"%"
            },
            {
               "name":"resp_o2_mode",
               "label":"Oxygen delivery",
               "type":"radio",
               "options":[
                  {
                     "label":"Room air (RA)",
                     "value":"ra"
                  },
                  {
                     "label":"O2",
                     "value":"o2"
                  }
               ]
            },
            {
               "name":"resp_distress_signs",
               "label":"Signs of respiratory distress",
               "type":"radio",
               "options":[
                  {
                     "label":"None",
                     "value":"none"
                  },
                  {
                     "label":"Retractions",
                     "value":"retractions"
                  },
                  {
                     "label":"Nasal flaring",
                     "value":"nasal_flaring"
                  },
                  {
                     "label":"Cyanosis",
                     "value":"cyanosis"
                  }
               ]
            },
            {
               "name":"respiratory_assessment_launcher",
               "label":"",
               "type":"assessment-launcher",
               "options":[
                  {
                     "label":"Respiratory Assessment",
                     "value":"respiratory_assessment"
                  }
               ],
               "showIf":{
                  "field":"show_respiratory_launcher",
                  "equals":true
               }
            },
            {
               "name":"resp_work_of_breathing",
               "label":"Work of breathing",
               "type":"radio",
               "options":[
                  {
                     "label":"Normal",
                     "value":"normal"
                  },
                  {
                     "label":"Increased",
                     "value":"increased"
                  }
               ]
            },
            {
               "name":"resp_lung_auscultation",
               "label":"Lung auscultation",
               "type":"radio",
               "options":[
                  {
                     "label":"Clear",
                     "value":"clear"
                  },
                  {
                     "label":"Abnormal (specify)",
                     "value":"abnormal"
                  }
               ]
            },
            {
               "name":"resp_lung_auscultation_specify",
               "label":"Lung auscultation abnormal (specify)",
               "type":"textarea",
               "showIf":{
                  "field":"resp_lung_auscultation",
                  "equals":"abnormal"
               }
            },
            {
               "type":"subheading",
               "label":"Heart & Vascular System"
            },
            {
               "name":"hv_rhythm",
               "label":"Rhythm",
               "type":"radio",
               "options":[
                  {
                     "label":"Regular",
                     "value":"regular"
                  },
                  {
                     "label":"Irregular",
                     "value":"irregular"
                  }
               ]
            },
            {
               "name":"hv_heart_sounds",
               "label":"Heart sounds",
               "type":"radio",
               "options":[
                  {
                     "label":"S1 S2 normal",
                     "value":"normal"
                  },
                  {
                     "label":"Murmur",
                     "value":"murmur"
                  },
                  {
                     "label":"Extra sounds",
                     "value":"extra_sounds"
                  }
               ]
            },
            {
               "name":"hv_radial_quality",
               "label":"Peripheral pulses Radial",
               "type":"radio",
               "options":[
                  {
                     "label":"Normal",
                     "value":"normal"
                  },
                  {
                     "label":"Weak",
                     "value":"weak"
                  },
                  {
                     "label":"Absent",
                     "value":"absent"
                  }
               ]
            },
            {
               "name":"hv_dorsalis_pedis_quality",
               "label":"Peripheral pulses Dorsalis pedis",
               "type":"radio",
               "options":[
                  {
                     "label":"Normal",
                     "value":"normal"
                  },
                  {
                     "label":"Weak",
                     "value":"weak"
                  },
                  {
                     "label":"Absent",
                     "value":"absent"
                  }
               ]
            },
            {
               "name":"hv_posterior_tibial_quality",
               "label":"Peripheral pulses Posterior tibial",
               "type":"radio",
               "options":[
                  {
                     "label":"Normal",
                     "value":"normal"
                  },
                  {
                     "label":"Weak",
                     "value":"weak"
                  },
                  {
                     "label":"Absent",
                     "value":"absent"
                  }
               ]
            },
            {
               "name":"cardiac_assessment_launcher_heart_vascular",
               "label":"",
               "type":"assessment-launcher",
               "options":[
                  {
                     "label":"Cardiac Assessment",
                     "value":"cardiac_assessment"
                  }
               ],
               "showIf":{
                  "field":"show_cardiac_launcher",
                  "equals":true
               }
            },
            {
               "name":"hv_cap_refill",
               "label":"Capillary refill (seconds)",
               "type":"input",
               "placeholder":"e.g. 2"
            },
            {
               "name":"hv_edema",
               "label":"Edema",
               "type":"radio",
               "options":[
                  {
                     "label":"None",
                     "value":"none"
                  },
                  {
                     "label":"+1",
                     "value":"1"
                  },
                  {
                     "label":"+2",
                     "value":"2"
                  },
                  {
                     "label":"+3",
                     "value":"3"
                  },
                  {
                     "label":"+4",
                     "value":"4"
                  }
               ]
            },
            {
               "name":"hv_edema_location",
               "label":"Edema location",
               "type":"input",
               "placeholder":"Location",
               "showIf":{
                  "field":"hv_edema",
                  "oneOf":[
                     "1",
                     "2",
                     "3",
                     "4"
                  ]
               }
            },
            {
               "name":"hv_skin_temp_color",
               "label":"Skin temperature / colour",
               "type":"radio",
               "options":[
                  {
                     "label":"Warm",
                     "value":"warm"
                  },
                  {
                     "label":"Cool",
                     "value":"cool"
                  },
                  {
                     "label":"Pale",
                     "value":"pale"
                  },
                  {
                     "label":"Cyanotic",
                     "value":"cyanotic"
                  }
               ]
            },
            {
               "type":"subheading",
               "label":"Abdomen / Gastrointestinal System"
            },
            {
               "type":"assessment-launcher",
               "name":"gi_bowel_assessments_launcher",
               "label":"Related Assessments",
               "options":[
                  {
                     "label":"Bladder Diary",
                     "value":"bladder_diary"
                  },
                  {
                     "label":"Bristol Chart",
                     "value":"bristol_chart"
                  }
               ]
            },
            {
               "name":"gi_inspection",
               "label":"Inspection",
               "type":"radio",
               "options":[
                  {
                     "label":"Flat",
                     "value":"flat"
                  },
                  {
                     "label":"Distended",
                     "value":"distended"
                  },
                  {
                     "label":"Symmetrical",
                     "value":"symmetrical"
                  }
               ]
            },
            {
               "name":"gi_palpation",
               "label":"Palpation",
               "type":"radio",
               "options":[
                  {
                     "label":"Soft",
                     "value":"soft"
                  },
                  {
                     "label":"Tender",
                     "value":"tender"
                  },
                  {
                     "label":"Guarding",
                     "value":"guarding"
                  },
                  {
                     "label":"Masses",
                     "value":"masses"
                  }
               ]
            },
            {
               "name":"gi_bowel_sounds",
               "label":"Bowel sounds",
               "type":"radio",
               "options":[
                  {
                     "label":"Normoactive",
                     "value":"normoactive"
                  },
                  {
                     "label":"Hypoactive",
                     "value":"hypoactive"
                  },
                  {
                     "label":"Hyperactive",
                     "value":"hyperactive"
                  },
                  {
                     "label":"Absent",
                     "value":"absent"
                  }
               ]
            },
            {
               "name":"gi_nausea_vomiting",
               "label":"Nausea / vomiting",
               "type":"radio",
               "options":[
                  {
                     "label":"No",
                     "value":"no"
                  },
                  {
                     "label":"Yes",
                     "value":"yes"
                  }
               ]
            },
            {
               "name":"gi_gu_assessment_launcher",
               "label":"",
               "type":"assessment-launcher",
               "options":[
                  {
                     "label":"GI or GU Assessment",
                     "value":"gi_gu_assessment"
                  }
               ],
               "showIf":{
                  "field":"show_gi_gu_launcher",
                  "equals":true
               }
            },
            {
               "name":"gi_last_bm",
               "label":"Last bowel movement",
               "type":"input"
            },
            {
               "name":"gi_continence",
               "label":"Continence",
               "type":"radio",
               "options":[
                  {
                     "label":"Continent",
                     "value":"continent"
                  },
                  {
                     "label":"Incontinent",
                     "value":"incontinent"
                  }
               ]
            },
            {
               "name":"gi_frequency",
               "label":"Frequency",
               "type":"radio",
               "options":[
                  {
                     "label":"Daily",
                     "value":"daily"
                  },
                  {
                     "label":"Every ___ days",
                     "value":"every_x_days"
                  },
                  {
                     "label":"Irregular",
                     "value":"irregular"
                  }
               ]
            },
            {
               "name":"gi_frequency_specify",
               "label":"Frequency every ___ days",
               "type":"input",
               "placeholder":"e.g. every 3 days",
               "showIf":{
                  "field":"gi_frequency",
                  "equals":"every_x_days"
               }
            },
            {
               "name":"gi_ease_defecation",
               "label":"Ease of defecation",
               "type":"radio",
               "options":[
                  {
                     "label":"No straining",
                     "value":"no_straining"
                  },
                  {
                     "label":"Straining",
                     "value":"straining"
                  },
                  {
                     "label":"Painful",
                     "value":"painful"
                  }
               ]
            },
            {
               "name":"gi_ostomy_present",
               "label":"Ostomy present",
               "type":"radio",
               "options":[
                  {
                     "label":"No",
                     "value":"no"
                  },
                  {
                     "label":"Yes",
                     "value":"yes"
                  }
               ]
            },
            {
               "name":"gi_ostomy_type",
               "label":"Ostomy type",
               "type":"input",
               "placeholder":"Type",
               "showIf":{
                  "field":"gi_ostomy_present",
                  "equals":"yes"
               }
            },
            {
               "name":"gi_abdominal_distension_bowel",
               "label":"Abdominal distension related to bowel",
               "type":"radio",
               "options":[
                  {
                     "label":"No",
                     "value":"no"
                  },
                  {
                     "label":"Yes",
                     "value":"yes"
                  }
               ]
            },
            {
               "name":"gi_bowel_function",
               "label":"Bowel Function",
               "type":"radio",
               "options":[
                  {
                     "label":"Independent",
                     "value":"independent"
                  },
                  {
                     "label":"Needs some help",
                     "value":"needs_help"
                  },
                  {
                     "label":"Dependent",
                     "value":"dependent"
                  }
               ]
            },
            {
               "name":"gi_bowel_method_needs_help",
               "label":"Method (Needs some help)",
               "type":"radio",
               "options":[
                  {
                     "label":"Toilet",
                     "value":"toilet"
                  },
                  {
                     "label":"Diaper",
                     "value":"diaper"
                  }
               ],
               "showIf":{
                  "field":"gi_bowel_function",
                  "equals":"needs_help"
               }
            },
            {
               "name":"gi_bowel_method_dependent",
               "label":"Method (Dependent)",
               "type":"radio",
               "options":[
                  {
                     "label":"Digital rectal stimulation",
                     "value":"digital_stimulation"
                  },
                  {
                     "label":"Manual evacuation",
                     "value":"manual_evacuation"
                  },
                  {
                     "label":"Suppository",
                     "value":"suppository"
                  },
                  {
                     "label":"Enema",
                     "value":"enema"
                  },
                  {
                     "label":"Lactulose",
                     "value":"lactulose"
                  }
               ],
               "showIf":{
                  "field":"gi_bowel_function",
                  "equals":"dependent"
               }
            },
            {
               "type":"subheading",
               "label":"Genitourinary System"
            },
            {
               "name":"gu_voiding",
               "label":"Voiding",
               "type":"radio",
               "options":[
                  {
                     "label":"Spontaneous",
                     "value":"spontaneous"
                  },
                  {
                     "label":"Assisted",
                     "value":"assisted"
                  },
                  {
                     "label":"Catheterized",
                     "value":"catheterized"
                  }
               ]
            },
            {
               "name":"gu_urine_output",
               "label":"Urine output (mL/hr)",
               "type":"input",
               "placeholder":"mL/hr"
            },
            {
               "name":"gu_urine_appearance",
               "label":"Urine colour / clarity",
               "type":"radio",
               "options":[
                  {
                     "label":"Clear",
                     "value":"clear"
                  },
                  {
                     "label":"Cloudy",
                     "value":"cloudy"
                  },
                  {
                     "label":"Dark",
                     "value":"dark"
                  },
                  {
                     "label":"Hematuria",
                     "value":"hematuria"
                  }
               ]
            },
            {
               "name":"gu_dysuria",
               "label":"Dysuria",
               "type":"radio",
               "options":[
                  {
                     "label":"Absent",
                     "value":"absent"
                  },
                  {
                     "label":"Present",
                     "value":"present"
                  }
               ]
            },
            {
               "name":"renal_assessment_launcher",
               "label":"",
               "type":"assessment-launcher",
               "options":[
                  {
                     "label":"Renal Assessment",
                     "value":"renal_assessment"
                  }
               ],
               "showIf":{
                  "field":"show_renal_launcher",
                  "equals":true
               }
            },
            {
               "name":"gu_incontinence",
               "label":"Incontinence",
               "type":"radio",
               "options":[
                  {
                     "label":"No",
                     "value":"no"
                  },
                  {
                     "label":"Yes",
                     "value":"yes"
                  }
               ]
            },
            {
               "name":"gu_bladder_function",
               "label":"Bladder Function",
               "type":"radio",
               "options":[
                  {
                     "label":"Independent",
                     "value":"independent"
                  },
                  {
                     "label":"Needs some help",
                     "value":"needs_help"
                  },
                  {
                     "label":"Full dependent",
                     "value":"full_dependent"
                  }
               ]
            },
            {
               "name":"gu_bladder_method_full_dependent",
               "label":"Bladder management method (Full dependent)",
               "type":"radio",
               "options":[
                  {
                     "label":"Intermittent catheterization",
                     "value":"intermittent_catheter"
                  },
                  {
                     "label":"Indwelling (Foley) catheter",
                     "value":"indwelling_foley"
                  },
                  {
                     "label":"Suprapubic catheter",
                     "value":"suprapubic_catheter"
                  },
                  {
                     "label":"Condom (external) catheter",
                     "value":"condom_catheter"
                  }
               ],
               "showIf":{
                  "field":"gu_bladder_function",
                  "equals":"full_dependent"
               }
            },
            {
               "type":"subheading",
               "label":"Nutrition & Hydration"
            },
            {
               "name":"nut_oral_intake",
               "label":"Oral intake",
               "type":"radio",
               "options":[
                  {
                     "label":"Normal",
                     "value":"normal"
                  },
                  {
                     "label":"Reduced",
                     "value":"reduced"
                  },
                  {
                     "label":"Minimal / NPO",
                     "value":"minimal_npo"
                  }
               ]
            },
            {
               "name":"nut_weight_change",
               "label":"Weight change",
               "type":"radio",
               "options":[
                  {
                     "label":"Stable",
                     "value":"stable"
                  },
                  {
                     "label":"Loss >5% in 30 days",
                     "value":"loss_5_30"
                  },
                  {
                     "label":"Loss >10% in 6 months",
                     "value":"loss_10_6"
                  }
               ]
            },
            {
               "name":"nut_appetite",
               "label":"Appetite",
               "type":"radio",
               "options":[
                  {
                     "label":"Good",
                     "value":"good"
                  },
                  {
                     "label":"Fair",
                     "value":"fair"
                  },
                  {
                     "label":"Poor",
                     "value":"poor"
                  }
               ]
            },
            {
               "name":"nut_albumin",
               "label":"Albumin / prealbumin (if available)",
               "type":"radio",
               "options":[
                  {
                     "label":"Normal",
                     "value":"normal"
                  },
                  {
                     "label":"Low",
                     "value":"low"
                  }
               ]
            },
            {
               "name":"nut_swallow_difficulty",
               "label":"Swallow difficulty",
               "type":"radio",
               "options":[
                  {
                     "label":"No",
                     "value":"no"
                  },
                  {
                     "label":"Yes",
                     "value":"yes"
                  }
               ]
            },
            {
               "type":"subheading",
               "label":"",
               "showIf":{
                  "field":"nut_swallow_difficulty",
                  "equals":"yes"
               }
            },
            {
               "name":"swallow_assessment_launcher",
               "label":"",
               "type":"assessment-launcher",
               "options":[
                  {
                     "label":"Swallow Screener",
                     "value":"swallow_screener"
                  },
                  {
                     "label":"Water Swallow Test",
                     "value":"water_swallow_test"
                  }
               ],
               "showIf":{
                  "field":"nut_swallow_difficulty",
                  "equals":"yes"
               }
            },
            {
               "type":"subheading",
               "label":"Safety & Comfort Concerns"
            },
            {
               "type":"subheading",
               "label":"Orthostatic vitals"
            },
            {
               "type":"row",
               "fields":[
                  {
                     "name":"ortho_supine_bp",
                     "label":"Supine: BP",
                     "type":"input"
                  },
                  {
                     "name":"ortho_supine_hr",
                     "label":"Supine: HR",
                     "type":"input"
                  }
               ]
            },
            {
               "type":"row",
               "fields":[
                  {
                     "name":"ortho_sitting_bp",
                     "label":"Sitting: BP",
                     "type":"input"
                  },
                  {
                     "name":"ortho_sitting_hr",
                     "label":"Sitting: HR",
                     "type":"input"
                  }
               ]
            },
            {
               "type":"row",
               "fields":[
                  {
                     "name":"ortho_stand1_bp",
                     "label":"Standing (1 min): BP",
                     "type":"input"
                  },
                  {
                     "name":"ortho_stand1_hr",
                     "label":"Standing (1 min): HR",
                     "type":"input"
                  }
               ]
            },
            {
               "type":"row",
               "fields":[
                  {
                     "name":"ortho_stand3_bp",
                     "label":"Standing (3 min): BP",
                     "type":"input"
                  },
                  {
                     "name":"ortho_stand3_hr",
                     "label":"Standing (3 min): HR",
                     "type":"input"
                  }
               ]
            },
            {
               "type":"subheading",
               "label":"Musculoskeletal System"
            },
            {
               "name":"msk_rom",
               "label":"Range of motion (ROM)",
               "type":"radio",
               "options":[
                  {
                     "label":"Full",
                     "value":"full"
                  },
                  {
                     "label":"Limited (specify joint)",
                     "value":"limited"
                  }
               ]
            },
            {
               "name":"msk_rom_specify",
               "label":"ROM limited specify joint",
               "type":"input",
               "showIf":{
                  "field":"msk_rom",
                  "equals":"limited"
               }
            },
            {
               "name":"msk_strength",
               "label":"Muscle strength",
               "type":"radio",
               "options":[
                  {
                     "label":"5/5",
                     "value":"5_5"
                  },
                  {
                     "label":"strength (location)",
                     "value":"decreased"
                  }
               ]
            },
            {
               "name":"msk_strength_specify",
               "label":"Muscle strength location",
               "type":"input",
               "showIf":{
                  "field":"msk_strength",
                  "equals":"decreased"
               }
            },
            {
               "name":"msk_gait",
               "label":"Gait",
               "type":"radio",
               "options":[
                  {
                     "label":"Normal",
                     "value":"normal"
                  },
                  {
                     "label":"Unsteady",
                     "value":"unsteady"
                  },
                  {
                     "label":"Uses assistive device",
                     "value":"assistive_device"
                  }
               ]
            },
            {
               "name":"msk_joint_swelling_deformity",
               "label":"Joint swelling / deformity",
               "type":"radio",
               "options":[
                  {
                     "label":"None",
                     "value":"none"
                  },
                  {
                     "label":"Present",
                     "value":"present"
                  }
               ]
            },
            {
               "name":"msk_pain_with_movement",
               "label":"Pain with movement",
               "type":"radio",
               "options":[
                  {
                     "label":"No",
                     "value":"no"
                  },
                  {
                     "label":"Yes (location)",
                     "value":"yes"
                  }
               ]
            },
            {
               "name":"msk_pain_with_movement_location",
               "label":"Pain with movement location",
               "type":"input",
               "showIf":{
                  "field":"msk_pain_with_movement",
                  "equals":"yes"
               }
            },
            {
               "name":"msk_lower_extremity",
               "label":"Lower extremity assessment",
               "type":"radio",
               "options":[
                  {
                     "label":"Intact",
                     "value":"intact"
                  },
                  {
                     "label":"Weak",
                     "value":"weak"
                  },
                  {
                     "label":"Edematous",
                     "value":"edematous"
                  }
               ]
            },
            {
               "name":"musculoskeletal_assessment_launcher",
               "label":"",
               "type":"assessment-launcher",
               "options":[
                  {
                     "label":"Musculoskeletal Assessment",
                     "value":"musculoskeletal_assessment"
                  }
               ],
               "showIf":{
                  "field":"show_msk_launcher",
                  "equals":true
               }
            },
            {
               "type":"subheading",
               "label":"Integumentary System / Skin Integrity"
            },
            {
               "name":"skin_colour",
               "label":"Skin colour",
               "type":"radio",
               "options":[
                  {
                     "label":"Normal",
                     "value":"normal"
                  },
                  {
                     "label":"Pale",
                     "value":"pale"
                  },
                  {
                     "label":"Cyanotic",
                     "value":"cyanotic"
                  },
                  {
                     "label":"Jaundiced",
                     "value":"jaundiced"
                  }
               ]
            },
            {
               "name":"skin_assessment_launcher",
               "label":"",
               "type":"assessment-launcher",
               "options":[
                  {
                     "label":"Skin Focused Assessment",
                     "value":"skin_assessment"
                  }
               ],
               "showIf":{
                  "field":"skin_colour",
                  "equals":"pale"
               }
            },
            {
               "name":"skin_temperature",
               "label":"Temperature",
               "type":"radio",
               "options":[
                  {
                     "label":"Warm",
                     "value":"warm"
                  },
                  {
                     "label":"Cool",
                     "value":"cool"
                  }
               ]
            },
            {
               "name":"skin_moisture",
               "label":"Moisture",
               "type":"radio",
               "options":[
                  {
                     "label":"Dry",
                     "value":"dry"
                  },
                  {
                     "label":"Moist",
                     "value":"moist"
                  },
                  {
                     "label":"Diaphoretic",
                     "value":"diaphoretic"
                  }
               ]
            },
            {
               "name":"skin_turgor",
               "label":"Turgor",
               "type":"radio",
               "options":[
                  {
                     "label":"Normal",
                     "value":"normal"
                  },
                  {
                     "label":"Poor",
                     "value":"poor"
                  }
               ]
            },
            {
               "name":"skin_integrity",
               "label":"Integrity",
               "type":"radio",
               "options":[
                  {
                     "label":"Intact",
                     "value":"intact"
                  },
                  {
                     "label":"Dry",
                     "value":"dry"
                  },
                  {
                     "label":"Cracks",
                     "value":"cracks"
                  },
                  {
                     "label":"Callus",
                     "value":"callus"
                  },
                  {
                     "label":"Fissures",
                     "value":"fissures"
                  }
               ]
            },
            {
               "name":"pi_time_same_position",
               "label":"Time in same position",
               "type":"radio",
               "options":[
                  {
                     "label":"<2 hours",
                     "value":"lt_2h"
                  },
                  {
                     "label":">2 hours",
                     "value":"gte_2h"
                  }
               ]
            },
            {
               "name":"pi_pressure_areas",
               "label":"Pressure areas (sacrum, coccyx, heels, elbows)",
               "type":"radio",
               "options":[
                  {
                     "label":"Intact",
                     "value":"intact"
                  },
                  {
                     "label":"Reddened",
                     "value":"reddened"
                  },
                  {
                     "label":"Breakdown (stage ___)",
                     "value":"breakdown"
                  }
               ]
            },
            {
               "name":"pi_breakdown_stage",
               "label":"Breakdown stage",
               "type":"input",
               "placeholder":"Stage",
               "showIf":{
                  "field":"pi_pressure_areas",
                  "equals":"breakdown"
               }
            },
            {
               "name":"pi_skin_moisture",
               "label":"Skin moisture",
               "type":"radio",
               "options":[
                  {
                     "label":"Dry",
                     "value":"dry"
                  },
                  {
                     "label":"Occasionally moist",
                     "value":"occasionally_moist"
                  },
                  {
                     "label":"Frequently moist",
                     "value":"frequently_moist"
                  },
                  {
                     "label":"Constantly moist",
                     "value":"constantly_moist"
                  }
               ]
            },
            {
               "name":"pi_incontinence_type",
               "label":"Incontinence",
               "type":"radio",
               "options":[
                  {
                     "label":"None",
                     "value":"none"
                  },
                  {
                     "label":"Urinary",
                     "value":"urinary"
                  },
                  {
                     "label":"Fecal",
                     "value":"fecal"
                  },
                  {
                     "label":"Dual",
                     "value":"dual"
                  }
               ]
            },
            {
               "name":"pi_perspiration",
               "label":"Perspiration / diaphoresis",
               "type":"radio",
               "options":[
                  {
                     "label":"No",
                     "value":"no"
                  },
                  {
                     "label":"Yes",
                     "value":"yes"
                  }
               ]
            },
            {
               "name":"pi_devices_moisture",
               "label":"Devices causing moisture (diapers, catheters, drains)",
               "type":"radio",
               "options":[
                  {
                     "label":"No",
                     "value":"no"
                  },
                  {
                     "label":"Yes",
                     "value":"yes"
                  }
               ]
            },
            {
               "type":"subheading",
               "label":"Wounds / Pressure Injury"
            },
            {
               "name":"pi_ulcer_wound_present",
               "label":"Ulcer / wound present",
               "type":"radio",
               "options":[
                  {
                     "label":"No",
                     "value":"no"
                  },
                  {
                     "label":"Yes",
                     "value":"yes"
                  }
               ]
            },
            {
               "name":"pi_braden_scale",
               "label":"",
               "type":"assessment-launcher",
               "options":[
                  {
                     "label":"Braden Scale",
                     "value":"braden_scale"
                  }
               ],
               "showIf":{
                  "field":"pi_ulcer_wound_present",
                  "equals":"yes"
               }
            },
            {
               "name":"pi_drainage",
               "label":"Drainage",
               "type":"radio",
               "options":[
                  {
                     "label":"None",
                     "value":"none"
                  },
                  {
                     "label":"Serous",
                     "value":"serous"
                  },
                  {
                     "label":"Purulent",
                     "value":"purulent"
                  },
                  {
                     "label":"Bloody",
                     "value":"bloody"
                  }
               ]
            },
            {
               "name":"pi_dressing_status",
               "label":"Dressing status",
               "type":"radio",
               "options":[
                  {
                     "label":"Clean/dry/intact",
                     "value":"clean_dry_intact"
                  },
                  {
                     "label":"Soiled",
                     "value":"soiled"
                  },
                  {
                     "label":"Loose",
                     "value":"loose"
                  }
               ]
            },
            {
               "type":"subheading",
               "label":"Functional Status"
            },
            {
               "name":"pi_position_tolerance",
               "label":"Current position tolerance",
               "type":"radio",
               "labelAbove":true,
               "options":[
                  {
                     "label":"Independent repositioning",
                     "value":"independent_repositioning"
                  },
                  {
                     "label":"Requires assistance to reposition",
                     "value":"requires_assistance"
                  },
                  {
                     "label":"Bedbound / Chairbound",
                     "value":"bedbound_chairbound"
                  }
               ]
            },
            {
               "name":"pi_transfers",
               "label":"Transfers",
               "type":"radio",
               "options":[
                  {
                     "label":"Independent",
                     "value":"independent"
                  },
                  {
                     "label":"One assist",
                     "value":"one_assist"
                  },
                  {
                     "label":"Two assist / mechanical lift",
                     "value":"two_assist_mech_lift"
                  }
               ]
            },
            {
               "type":"subheading",
               "label":"Mobility Aid"
            },
            {
               "name":"walking_aid_type",
               "label":"Walking Aid Type",
               "type":"radio",
               "options":[
                  {
                     "label":"Walking stick/cane",
                     "value":"walking_stick"
                  },
                  {
                     "label":"Elbow crutches (single/bilateral)",
                     "value":"elbow_crutches"
                  },
                  {
                     "label":"Axillary crutches (single/bilateral)",
                     "value":"axillary_crutches"
                  },
                  {
                     "label":"Platform crutches (single/bilateral)",
                     "value":"platform_crutches"
                  },
                  {
                     "label":"Quadripod",
                     "value":"quadripod"
                  },
                  {
                     "label":"Walking Frame",
                     "value":"walking_frame"
                  },
                  {
                     "label":"Wheeled Walker",
                     "value":"wheeled_walker"
                  },
                  {
                     "label":"Rollator / Reverse Rollator",
                     "value":"rollator"
                  }
               ]
            },
            {
               "name":"walking_aid_assistance",
               "label":"Assistance Level",
               "type":"radio",
               "options":[
                  {
                     "label":"Independent",
                     "value":"independent"
                  },
                  {
                     "label":"Minimal Assistance",
                     "value":"minimal_assistance"
                  },
                  {
                     "label":"Moderate Assistance",
                     "value":"moderate_assistance"
                  },
                  {
                     "label":"Maximum Assistance",
                     "value":"maximum_assistance"
                  },
                  {
                     "label":"Total Dependent",
                     "value":"total_dependent"
                  }
               ]
            },
            {
               "name":"walking_aid_distance",
               "label":"Distance",
               "type":"radio",
               "options":[
                  {
                     "label":"Short Distance",
                     "value":"short_distance"
                  },
                  {
                     "label":"Long Distance",
                     "value":"long_distance"
                  }
               ]
            },
            {
               "name":"wheelchair_type",
               "label":"Wheelchair Type",
               "type":"radio",
               "options":[
                  {
                     "label":"Manual Wheelchair",
                     "value":"manual_wheelchair"
                  },
                  {
                     "label":"Electrical Wheelchair",
                     "value":"electrical_wheelchair"
                  }
               ]
            },
            {
               "name":"wheelchair_assistance",
               "label":"Assistance Level",
               "type":"radio",
               "options":[
                  {
                     "label":"Independent",
                     "value":"independent"
                  },
                  {
                     "label":"Minimal Assistance",
                     "value":"minimal_assistance"
                  },
                  {
                     "label":"Moderate Assistance",
                     "value":"moderate_assistance"
                  },
                  {
                     "label":"Maximum Assistance",
                     "value":"maximum_assistance"
                  },
                  {
                     "label":"Total Dependent",
                     "value":"total_dependent"
                  }
               ]
            },
            {
               "name":"wheelchair_distance",
               "label":"Distance",
               "type":"radio",
               "options":[
                  {
                     "label":"Short Distance",
                     "value":"short_distance"
                  },
                  {
                     "label":"Long Distance",
                     "value":"long_distance"
                  }
               ]
            },
            {
               "type":"subheading",
               "label":"Others"
            },
            {
               "name":"mobility_aid_other",
               "label":"Specify",
               "type":"textarea"
            },
            {
               "type":"subheading",
               "label":"Psychosocial  & Emotional Status"
            },
            {
               "name":"beh_appearance",
               "label":"Appearance",
               "type":"radio",
               "options":[
                  {
                     "label":"Well-groomed",
                     "value":"well_groomed"
                  },
                  {
                     "label":"Disheveled",
                     "value":"disheveled"
                  },
                  {
                     "label":"Neglected",
                     "value":"neglected"
                  }
               ]
            },
            {
               "name":"beh_behavior",
               "label":"Behavior",
               "type":"radio",
               "options":[
                  {
                     "label":"Calm",
                     "value":"calm"
                  },
                  {
                     "label":"Cooperative",
                     "value":"cooperative"
                  },
                  {
                     "label":"Agitated",
                     "value":"agitated"
                  },
                  {
                     "label":"Aggressive",
                     "value":"aggressive"
                  },
                  {
                     "label":"Withdrawn",
                     "value":"withdrawn"
                  }
               ]
            },
            {
               "name":"beh_psychomotor",
               "label":"Psychomotor activity",
               "type":"radio",
               "options":[
                  {
                     "label":"Normal",
                     "value":"normal"
                  },
                  {
                     "label":"Increased",
                     "value":"increased"
                  },
                  {
                     "label":"Decreased",
                     "value":"decreased"
                  }
               ]
            },
            {
               "name":"beh_eye_contact",
               "label":"Eye contact",
               "type":"radio",
               "options":[
                  {
                     "label":"Appropriate",
                     "value":"appropriate"
                  },
                  {
                     "label":"Poor",
                     "value":"poor"
                  },
                  {
                     "label":"Avoidant",
                     "value":"avoidant"
                  }
               ]
            },
            {
               "name":"beh_speech",
               "label":"Speech",
               "type":"radio",
               "options":[
                  {
                     "label":"Normal",
                     "value":"normal"
                  },
                  {
                     "label":"Pressured",
                     "value":"pressured"
                  },
                  {
                     "label":"Slow",
                     "value":"slow"
                  },
                  {
                     "label":"Incoherent",
                     "value":"incoherent"
                  }
               ]
            },
            {
               "name":"beh_mood",
               "label":"Mood",
               "type":"radio",
               "options":[
                  {
                     "label":"Euthymic",
                     "value":"euthymic"
                  },
                  {
                     "label":"Anxious",
                     "value":"anxious"
                  },
                  {
                     "label":"Depressed",
                     "value":"depressed"
                  },
                  {
                     "label":"Irritable",
                     "value":"irritable"
                  }
               ]
            },
            {
               "name":"beh_affect",
               "label":"Affect",
               "type":"radio",
               "options":[
                  {
                     "label":"Appropriate",
                     "value":"appropriate"
                  },
                  {
                     "label":"Flat",
                     "value":"flat"
                  },
                  {
                     "label":"Labile",
                     "value":"labile"
                  }
               ]
            },
            {
               "name":"beh_thought_process",
               "label":"Thought process",
               "type":"radio",
               "options":[
                  {
                     "label":"Logical",
                     "value":"logical"
                  },
                  {
                     "label":"Disorganized",
                     "value":"disorganized"
                  }
               ]
            },
            {
               "name":"beh_thought_content",
               "label":"Thought content",
               "type":"radio",
               "options":[
                  {
                     "label":"Normal",
                     "value":"normal"
                  },
                  {
                     "label":"Delusions",
                     "value":"delusions"
                  },
                  {
                     "label":"Hallucinations",
                     "value":"hallucinations"
                  }
               ]
            },
            {
               "name":"beh_orientation_person",
               "label":"Oriented to person",
               "type":"radio",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "name":"beh_orientation_place",
               "label":"Oriented to place",
               "type":"radio",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "name":"beh_orientation_time",
               "label":"Oriented to time",
               "type":"radio",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "name":"beh_obeys_3_step",
               "label":"Obeys 3-step command",
               "type":"radio",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "name":"beh_insight_judgment",
               "label":"Insight / judgment",
               "type":"radio",
               "options":[
                  {
                     "label":"Intact",
                     "value":"intact"
                  },
                  {
                     "label":"Impaired",
                     "value":"impaired"
                  }
               ]
            },
            {
               "name":"beh_risk_behaviors",
               "label":"Risk behaviors observed",
               "type":"radio",
               "options":[
                  {
                     "label":"None",
                     "value":"none"
                  },
                  {
                     "label":"Self-harm",
                     "value":"self_harm"
                  },
                  {
                     "label":"Harm to others",
                     "value":"harm_others"
                  },
                  {
                     "label":"Wandering",
                     "value":"wandering"
                  }
               ]
            }
         ]
      },
      {
         "fields":[
            {
               "type":"subheading",
               "label":"Forms"
            },
            {
               "name":"nursing_assessments",
               "type":"assessment-launcher",
               "options":[
                  {
                     "label":"Barthel Index",
                     "value":"barthel"
                  },
                  {
                     "label":"ADL",
                     "value":"adl"
                  },
                  {
                     "label":"Morse Fall Scale",
                     "value":"morse_fall_scale"
                  },
                  {
                     "label":"Braden Scale",
                     "value":"braden_scale"
                  },
                  {
                     "label":"Wound Treatment Flowsheet",
                     "value":"wound_treatment_flowsheet"
                  },
                  {
                     "label":"Numeric Rating Scale (NRS) 0-10",
                     "value":"numeric_pain_rating_scale"
                  },
                  {
                     "label":"Diabetic Foot Assessment",
                     "value":"diabetic_foot_assessment"
                  },
                  {
                     "label":"Medication Chart",
                     "value":"medication_chart"
                  },
                  {
                     "label":"Bladder Diary",
                     "value":"bladder_diary"
                  },
                  {
                     "label":"PUSH Tool",
                     "value":"push_tool"
                  },
                  {
                     "label":"Agitated Behaviour Scale",
                     "value":"agitated_behaviour_scale"
                  },
                  {
                     "label":"Glucose Monitor",
                     "value":"glucose_monitor"
                  },
                  {
                     "label":"Rehab Checklist",
                     "value":"rehab_checklist"
                  },
                  {
                     "label":"Seizure Chart",
                     "value":"seizure_chart"
                  },
                  {
                     "label":"Swallow Screener",
                     "value":"swallow_screener"
                  },
                  {
                     "label":"Water Swallow Test",
                     "value":"water_swallow_test"
                  },
                  {
                     "label":"Repositioning & Skin Inspection",
                     "value":"repositioning_skin_chart"
                  }
               ]
            }
         ]
      }
   ]
   }
   
   const assessment = {
      "sections":[
         {
            "fields":[
               {
                  "name":"assessment_problem_summary",
                  "label":"Problem Summary",
                  "type":"textarea"
               },
               {
                  "type":"subheading",
                  "label":"Problem List — Nursing Diagnosis"
               },
               {
                  "type":"custom",
                  "name":"nursing_diagnosis_panel",
                  "component":"nursing-diagnosis-panel",
                  "globalValues":true
               },
               {
                  "name":"assessment_problem_other",
                  "label":"Other problem (free text)",
                  "type":"input"
               },
               {
                  "type":"subheading",
                  "label":"Severity / Status"
               },
               {
                  "name":"assessment_severity",
                  "label":"Severity",
                  "type":"checkbox-group",
                  "options":[
                     { "label":"Mild", "value":"mild" },
                     { "label":"Moderate", "value":"moderate" },
                     { "label":"Severe", "value":"severe" },
                     { "label":"Improving", "value":"improving" },
                     { "label":"Stable", "value":"stable" },
                     { "label":"Deteriorating", "value":"deteriorating" }
                  ]
               },
               {
                  "type":"subheading",
                  "label":"Functional Impact"
               },
               {
                  "name":"assessment_functional_impact",
                  "label":"",
                  "type":"checkbox-group",
                  "options":[
                     { "label":"Affects ambulation", "value":"affects_ambulation" },
                     { "label":"Affects transfers", "value":"affects_transfers" },
                     { "label":"Affects self-care", "value":"affects_self_care" },
                     { "label":"Affects continence", "value":"affects_continence" },
                     { "label":"Affects communication", "value":"affects_communication" },
                     { "label":"Affects swallowing", "value":"affects_swallowing" }
                  ]
               },
               {
                  "name":"assessment_other_notes",
                  "label":"Others",
                  "type":"input"
               },
               {
                  "name":"assessment_risk_level",
                  "label":"Risk Level (related to falls, skin, aspiration, infection)",
                  "type":"radio",
                  "options":[
                     { "label":"Low", "value":"low" },
                     { "label":"Moderate", "value":"moderate" },
                     { "label":"High", "value":"high" }
                  ]
               },
               {
                  "name":"assessment_clinical_impression",
                  "label":"Nursing Diagnosis",
                  "type":"textarea"
               },
               {
                  "name":"assessment_rehab_interpretation",
                  "label":"Rehab-Specific Interpretation (participation tolerance, endurance, therapy readiness)",
                  "type":"textarea"
               }
            ]
         }
      ]
   };
   
   const plan = {
      "sections":[
         {
            "fields":[
               { "type":"subheading", "label":"Short Term Goals (2–4 Weeks)" },
               { "type":"dynamic-goals", "name":"short_term_goals" },
               { "type":"subheading", "label":"Long Term Goals (6–12 Weeks)" },
               { "type":"dynamic-goals", "name":"long_term_goals" },
               {
                  "type":"subheading",
                  "label":"Nursing Diagnosis & Interventions Plan"
               },
               {
                  "type":"custom",
                  "name":"nursing_plan_panel",
                  "component":"nursing-plan-panel",
                  "globalValues":true
               },
               {
                  "name":"plan_nursing_interventions",
                  "label":"Additional Nursing Interventions",
                  "type":"textarea"
               },
               {
                  "name":"plan_monitoring",
                  "label":"Monitoring Plan",
                  "type":"textarea"
               },
               {
                  "name":"plan_safety_measures",
                  "label":"Safety Measures / Precautions implemented",
                  "type":"textarea"
               },
               {
                  "name":"plan_reassessment_timeline",
                  "label":"Reassessment Timeline",
                  "type":"date"
               }
            ]
         }
      ]
   };
   
   export default {
      schema,
      subjective,
      objective,
      assessment,
      plan
   };
