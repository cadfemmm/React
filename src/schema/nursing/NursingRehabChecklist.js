const SCHEMA = {
  "title": "Nursing Assessment Checklist – Rehabilitation Setting",
  "sections": [
    {
      "title": "A. Patient Identification & General Information",
      "fields": [
        {
          "name": "full_name",
          "label": "Full Name",
          "type": "input"
        },
        {
          "name": "mrn",
          "label": "MRN / ID Number",
          "type": "input"
        },
        {
          "name": "age_gender",
          "label": "Age / Gender",
          "type": "input"
        },
        {
          "name": "date_admission",
          "label": "Date of Admission",
          "type": "date"
        },
        {
          "name": "diagnosis",
          "label": "Primary & Secondary Diagnosis",
          "type": "textarea"
        },
        {
          "name": "allergies",
          "label": "Allergies (Drug / Food / Environmental)",
          "type": "textarea"
        },
        {
          "name": "attending_doctor",
          "label": "Attending Doctor / Case Manager",
          "type": "input"
        },
        {
          "name": "marital_status",
          "label": "Marital Status",
          "type": "single-select",
          "options": [
            {
              "label": "Single",
              "value": "single"
            },
            {
              "label": "Married",
              "value": "married"
            },
            {
              "label": "Divorced",
              "value": "divorced"
            },
            {
              "label": "Widowed",
              "value": "widowed"
            }
          ]
        },
        {
          "name": "employment_status",
          "label": "Employment Status",
          "type": "single-select",
          "options": [
            {
              "label": "Employed",
              "value": "employed"
            },
            {
              "label": "Unemployed",
              "value": "unemployed"
            },
            {
              "label": "Retired",
              "value": "retired"
            },
            {
              "label": "Student",
              "value": "student"
            }
          ]
        },
        {
          "name": "occupation",
          "label": "Occupation",
          "type": "input"
        },
        {
          "name": "educational_bg",
          "label": "Educational Background",
          "type": "input"
        },
        {
          "name": "living_arrangement",
          "label": "Living Arrangement",
          "type": "input"
        },
        {
          "name": "main_caregiver",
          "label": "Main Caregiver",
          "type": "input"
        }
      ]
    },
    {
      "title": "B. Medical & Nursing Assessment",
      "fields": [
        {
          "name": "vital_signs",
          "label": "Vital Signs",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Completed",
              "value": "done"
            }
          ]
        },
        {
          "name": "consciousness_level",
          "label": "Consciousness Level (GCS/AVPU)",
          "type": "single-select",
          "options": [
            {
              "label": "Alert",
              "value": "alert"
            },
            {
              "label": "Voice",
              "value": "voice"
            },
            {
              "label": "Pain",
              "value": "pain"
            },
            {
              "label": "Unresponsive",
              "value": "unresponsive"
            }
          ]
        },
        {
          "name": "current_medications",
          "label": "Current Medications (including from home)",
          "type": "textarea"
        },
        {
          "name": "nutrition_status",
          "label": "Nutrition Status",
          "type": "radio",
          "options": [
            {
              "label": "Oral",
              "value": "oral"
            },
            {
              "label": "NGT",
              "value": "ngt"
            },
            {
              "label": "PEG",
              "value": "peg"
            },
            {
              "label": "RTF",
              "value": "rtf"
            }
          ]
        },
        {
          "name": "elimination_status",
          "label": "Elimination Status",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Catheter",
              "value": "catheter"
            },
            {
              "label": "Stoma",
              "value": "stoma"
            },
            {
              "label": "Diapers",
              "value": "diapers"
            },
            {
              "label": "Independent",
              "value": "independent"
            }
          ]
        },
        {
          "name": "skin_integrity",
          "label": "Skin Integrity (Braden Scale)",
          "type": "radio",
          "options": [
            {
              "label": "Intact",
              "value": "intact"
            },
            {
              "label": "At Risk",
              "value": "at_risk"
            },
            {
              "label": "Impaired",
              "value": "impaired"
            }
          ]
        },
        {
          "name": "pain_score",
          "label": "Pain Score (0–10)",
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
          "name": "pain_description",
          "label": "Pain Description",
          "type": "input"
        },
        {
          "name": "sleep_pattern",
          "label": "Sleep Pattern",
          "type": "radio",
          "options": [
            {
              "label": "Normal",
              "value": "normal"
            },
            {
              "label": "Disturbed",
              "value": "disturbed"
            },
            {
              "label": "Insomnia",
              "value": "insomnia"
            }
          ]
        },
        {
          "name": "fall_risk",
          "label": "Risk of Fall Assessment",
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
            }
          ]
        },
        {
          "name": "functional_limitations",
          "label": "Functional Limitations (Motor / Sensory Deficits)",
          "type": "textarea"
        }
      ]
    },
    {
      "title": "C. Biopsychosocial Assessment",
      "fields": [
        {
          "type": "subheading",
          "label": "Biological"
        },
        {
          "name": "comorbidities",
          "label": "Comorbidities & Medical History",
          "type": "textarea"
        },
        {
          "name": "physical_limitations",
          "label": "Physical Limitations",
          "type": "textarea"
        },
        {
          "name": "chronic_pain_sleep",
          "label": "Chronic Pain / Sleep Issues",
          "type": "textarea"
        },
        {
          "type": "subheading",
          "label": "Psychological"
        },
        {
          "name": "emotional_status",
          "label": "Emotional Status (Anxiety, Depression, Coping)",
          "type": "radio",
          "options": [
            {
              "label": "Stable",
              "value": "stable"
            },
            {
              "label": "Anxious",
              "value": "anxious"
            },
            {
              "label": "Depressed",
              "value": "depressed"
            },
            {
              "label": "Agitated",
              "value": "agitated"
            }
          ]
        },
        {
          "name": "cognitive_function",
          "label": "Cognitive Function",
          "type": "radio",
          "options": [
            {
              "label": "Intact",
              "value": "intact"
            },
            {
              "label": "Mildly Impaired",
              "value": "mild"
            },
            {
              "label": "Moderately Impaired",
              "value": "moderate"
            },
            {
              "label": "Severely Impaired",
              "value": "severe"
            }
          ]
        },
        {
          "name": "stressors",
          "label": "Stressors",
          "type": "textarea"
        },
        {
          "type": "subheading",
          "label": "Social"
        },
        {
          "name": "family_support",
          "label": "Family & Caregiver Support",
          "type": "radio",
          "options": [
            {
              "label": "Available",
              "value": "yes"
            },
            {
              "label": "Limited",
              "value": "limited"
            },
            {
              "label": "None",
              "value": "none"
            }
          ]
        },
        {
          "name": "financial_status",
          "label": "Financial / Insurance Status",
          "type": "input"
        },
        {
          "name": "language_barriers",
          "label": "Language / Communication Barriers",
          "type": "textarea"
        },
        {
          "name": "cultural_religious",
          "label": "Cultural / Religious Considerations",
          "type": "textarea"
        }
      ]
    },
    {
      "title": "D. Activities of Daily Living (ADL)",
      "fields": [
        {
          "type": "subheading",
          "label": "Mark the level of dependency for each ADL:"
        },
        {
          "name": "adl_feeding",
          "label": "Feeding",
          "type": "radio",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Minimum Dependent",
              "value": "min_dependent"
            },
            {
              "label": "Moderate Dependent",
              "value": "mod_dependent"
            },
            {
              "label": "Maximum Dependent",
              "value": "max_dependent"
            }
          ]
        },
        {
          "name": "adl_bathing",
          "label": "Bathing",
          "type": "radio",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Minimum Dependent",
              "value": "min_dependent"
            },
            {
              "label": "Moderate Dependent",
              "value": "mod_dependent"
            },
            {
              "label": "Maximum Dependent",
              "value": "max_dependent"
            }
          ]
        },
        {
          "name": "adl_dressing",
          "label": "Dressing",
          "type": "radio",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Minimum Dependent",
              "value": "min_dependent"
            },
            {
              "label": "Moderate Dependent",
              "value": "mod_dependent"
            },
            {
              "label": "Maximum Dependent",
              "value": "max_dependent"
            }
          ]
        },
        {
          "name": "adl_toileting",
          "label": "Toileting",
          "type": "radio",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Minimum Dependent",
              "value": "min_dependent"
            },
            {
              "label": "Moderate Dependent",
              "value": "mod_dependent"
            },
            {
              "label": "Maximum Dependent",
              "value": "max_dependent"
            }
          ]
        },
        {
          "name": "adl_grooming",
          "label": "Grooming",
          "type": "radio",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Minimum Dependent",
              "value": "min_dependent"
            },
            {
              "label": "Moderate Dependent",
              "value": "mod_dependent"
            },
            {
              "label": "Maximum Dependent",
              "value": "max_dependent"
            }
          ]
        },
        {
          "name": "adl_mobility",
          "label": "Mobility",
          "type": "radio",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Minimum Dependent",
              "value": "min_dependent"
            },
            {
              "label": "Moderate Dependent",
              "value": "mod_dependent"
            },
            {
              "label": "Maximum Dependent",
              "value": "max_dependent"
            }
          ]
        },
        {
          "name": "adl_transferring",
          "label": "Transferring",
          "type": "radio",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Minimum Dependent",
              "value": "min_dependent"
            },
            {
              "label": "Moderate Dependent",
              "value": "mod_dependent"
            },
            {
              "label": "Maximum Dependent",
              "value": "max_dependent"
            }
          ]
        },
        {
          "name": "adl_continence",
          "label": "Continence",
          "type": "radio",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Minimum Dependent",
              "value": "min_dependent"
            },
            {
              "label": "Moderate Dependent",
              "value": "mod_dependent"
            },
            {
              "label": "Maximum Dependent",
              "value": "max_dependent"
            }
          ]
        }
      ]
    }
  ]
}