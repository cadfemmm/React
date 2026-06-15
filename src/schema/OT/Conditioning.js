const CONSENT = {
  "title": "",
  "sections": [
    {
      "fields": [
        {
          "type": "row",
          "fields": [
            {
              "name": "consent_obtained",
              "label": "Consent",
              "type": "single-select",
              "options": [
                {
                  "label": "Dry Needling",
                  "value": "dry_needling"
                },
                {
                  "label": "Wall Climbing",
                  "value": "wall_climbing"
                }
              ]
            }
          ]
        },
        {
          "type": "custom",
          "name": "_open_saved_consent"
        },
        {
          "name": "hep_reviewed",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Home Exercise Program (HEP) reviewed and demonstrated",
              "value": "yes"
            }
          ]
        },
        {
          "name": "current_diagnosis",
          "label": "Current Diagnosis",
          "type": "multi-select-dropdown",
          "options": [
            {
              "label": "Stroke",
              "value": "stroke"
            },
            {
              "label": "Traumatic Brain Injury",
              "value": "tbi"
            },
            {
              "label": "Parkinson Disease",
              "value": "parkinson"
            },
            {
              "label": "Spinal Cord Injury",
              "value": "sci"
            },
            {
              "label": "Peripheral Neuropathy",
              "value": "peripheral_neuropathy"
            },
            {
              "label": "Ligament injuries",
              "value": "ligament_injuries"
            },
            {
              "label": "Ataxia",
              "value": "ataxia"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "current_diagnosis_other",
          "label": "Other Diagnosis (specify)",
          "type": "textarea",
          "showIf": {
            "field": "current_diagnosis",
            "includes": "others"
          }
        },
        {
          "name": "equipment_owned",
          "label": "List of Equipment Owned",
          "type": "checkbox-group",
          "options": [
            {
              "label": "PERKESO",
              "value": "perkeso"
            },
            {
              "label": "NGO",
              "value": "ngo"
            },
            {
              "label": "Self-purchased",
              "value": "self"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "equipment_perkeso",
          "label": "PERKESO Equipment Details",
          "type": "textarea",
          "showIf": {
            "field": "equipment_owned",
            "includes": "perkeso"
          }
        },
        {
          "name": "equipment_ngo",
          "label": "NGO Equipment Details",
          "type": "textarea",
          "showIf": {
            "field": "equipment_owned",
            "includes": "ngo"
          }
        },
        {
          "name": "equipment_self",
          "label": "Self-purchased Equipment Details",
          "type": "textarea",
          "showIf": {
            "field": "equipment_owned",
            "includes": "self"
          }
        },
        {
          "name": "equipment_others",
          "label": "Other Equipment Details",
          "type": "textarea",
          "showIf": {
            "field": "equipment_owned",
            "includes": "others"
          }
        },
        {
          "type": "subheading",
          "label": "Referral Information"
        },
        {
          "name": "referred_by",
          "label": "Referred by",
          "type": "input",
          "readOnly": true
        },
        {
          "name": "referral_reasons",
          "label": "Referral Reasons",
          "type": "textarea",
          "readOnly": true
        }
      ]
    }
  ]
}

const SUBJECTIVE = {
  "title": "",
  "sections": [
    {
      "fields": [
        {
          "type": "input",
          "name": "chief_complaint",
          "label": "Chief Complaint"
        },
        {
          "type": "input",
          "name": "history_present_illness",
          "label": "History of Present Illness"
        },
        {
          "type": "subheading",
          "label": "Client Perception of Functional Impact"
        },
        {
          "type": "radio",
          "name": "functional_impact",
          "label": "Affected Areas",
          "options": [
            {
              "label": "Home",
              "value": "Home"
            },
            {
              "label": "Work",
              "value": "Work"
            },
            {
              "label": "School",
              "value": "School"
            },
            {
              "label": "Community",
              "value": "Community"
            },
            {
              "label": "Driving",
              "value": "Driving"
            },
            {
              "label": "Social Participation",
              "value": "SocialParticipation"
            }
          ]
        },
        {
          "type": "input",
          "name": "functional_impact_description",
          "label": "Description"
        },
        {
          "type": "input",
          "name": "client_goals",
          "label": "Client Goals"
        },
        {
          "type": "subheading",
          "label": "Prior Level of Function – ADL"
        },
        {
          "type": "radio-matrix",
          "name": "plof_adl_feeding",
          "label": "Feeding",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Supervision",
              "value": "supervision"
            },
            {
              "label": "Assistance",
              "value": "assistance"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "plof_adl_grooming",
          "label": "Grooming",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Supervision",
              "value": "supervision"
            },
            {
              "label": "Assistance",
              "value": "assistance"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "plof_adl_upper_dressing",
          "label": "Upper Body Dressing",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Supervision",
              "value": "supervision"
            },
            {
              "label": "Assistance",
              "value": "assistance"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "plof_adl_lower_dressing",
          "label": "Lower Body Dressing",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Supervision",
              "value": "supervision"
            },
            {
              "label": "Assistance",
              "value": "assistance"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "plof_adl_bathing",
          "label": "Bathing",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Supervision",
              "value": "supervision"
            },
            {
              "label": "Assistance",
              "value": "assistance"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "plof_adl_toileting",
          "label": "Toileting",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Supervision",
              "value": "supervision"
            },
            {
              "label": "Assistance",
              "value": "assistance"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "plof_adl_transfers",
          "label": "Transfers",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Supervision",
              "value": "supervision"
            },
            {
              "label": "Assistance",
              "value": "assistance"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "plof_adl_mobility",
          "label": "Functional Mobility",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Supervision",
              "value": "supervision"
            },
            {
              "label": "Assistance",
              "value": "assistance"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Prior Level of Function – IADL"
        },
        {
          "type": "radio-matrix",
          "name": "plof_iadl_meal_prep",
          "label": "Meal Preparation",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Supervision",
              "value": "supervision"
            },
            {
              "label": "Assistance",
              "value": "assistance"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "plof_iadl_housekeeping",
          "label": "Housekeeping",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Supervision",
              "value": "supervision"
            },
            {
              "label": "Assistance",
              "value": "assistance"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "plof_iadl_laundry",
          "label": "Laundry",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Supervision",
              "value": "supervision"
            },
            {
              "label": "Assistance",
              "value": "assistance"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "plof_iadl_shopping",
          "label": "Shopping",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Supervision",
              "value": "supervision"
            },
            {
              "label": "Assistance",
              "value": "assistance"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "plof_iadl_medication",
          "label": "Medication Management",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Supervision",
              "value": "supervision"
            },
            {
              "label": "Assistance",
              "value": "assistance"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "plof_iadl_financial",
          "label": "Financial Management",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Supervision",
              "value": "supervision"
            },
            {
              "label": "Assistance",
              "value": "assistance"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "plof_iadl_community",
          "label": "Community Mobility",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Supervision",
              "value": "supervision"
            },
            {
              "label": "Assistance",
              "value": "assistance"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "plof_iadl_driving",
          "label": "Driving",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Supervision",
              "value": "supervision"
            },
            {
              "label": "Assistance",
              "value": "assistance"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Social & Environmental Context"
        },
        {
          "type": "radio",
          "name": "employment_status",
          "label": "Employment Status",
          "options": [
            {
              "label": "Employed",
              "value": "Employed"
            },
            {
              "label": "Student",
              "value": "Student"
            },
            {
              "label": "Homemaker",
              "value": "Homemaker"
            },
            {
              "label": "Retired",
              "value": "Retired"
            },
            {
              "label": "Unemployed",
              "value": "Unemployed"
            }
          ]
        },
        {
          "type": "radio",
          "name": "driving_status",
          "label": "Driving",
          "options": [
            {
              "name": "response",
              "label": "Response",
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
          "type": "radio",
          "name": "community_mobility",
          "label": "Community Mobility",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Assisted",
              "value": "assisted"
            }
          ]
        },
        {
          "type": "radio",
          "name": "living_environment",
          "label": "Living Environment",
          "options": [
            {
              "label": "Alone",
              "value": "Alone"
            },
            {
              "label": "With Spouse",
              "value": "Spouse"
            },
            {
              "label": "With Family",
              "value": "Family"
            },
            {
              "label": "Caregiver Available",
              "value": "CaregiverAvailable"
            }
          ]
        },
        {
          "type": "radio",
          "name": "home_type",
          "label": "Home Type",
          "options": [
            {
              "label": "Apartment",
              "value": "Apartment"
            },
            {
              "label": "Independent House",
              "value": "IndependentHouse"
            },
            {
              "label": "Assisted Facility",
              "value": "AssistedFacility"
            }
          ]
        },
        {
          "type": "input",
          "name": "environmental_barriers",
          "label": "Environmental Barriers"
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
          "type": "subheading",
          "label": "Physical Status"
        },
        {
          "name": "neuro_scales",
          "type": "assessment-launcher",
          "options": [
            {
              "label": "Montreal Cognitive Assessment (MoCA)",
              "value": "moca"
            },
            {
              "label": "Cognitive Assessment for Stroke Patients (CASP)",
              "value": "casp"
            },
            {
              "label": "Mini-Mental State Examination (MMSE)",
              "value": "mmse"
            },
            {
              "label": "SLUMS Examination (SLUMS)",
              "value": "slums"
            },
            {
              "label": "Loewenstein OT Cognitive Assessment (LOTCA)",
              "value": "lotca"
            },
            {
              "label": "Dynamic Loewenstein Occupational Therapy Cognitive Assessment (DLOTCA)",
              "value": "dlocta"
            },
            {
              "label": "Dynamic Loewenstein Occupational Therapy Cognitive Assessment – Geriatric Version (DLOTCA-G)",
              "value": "dloctag"
            },
            {
              "label": "Chessington OT Neuropsych Assessment Battery (COTNAB)",
              "value": "cotnab"
            },
            {
              "label": "Rivermead Perceptual Assessment Battery (RPAB)",
              "value": "rpab"
            },
            {
              "label": "Techcare Digital Cognitive (DCOG)",
              "value": "dcog"
            },
            {
              "label": "COGBAT (VTS)",
              "value": "cogbat"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Medication Management"
        },
        {
          "type": "radio",
          "name": "med_initiation",
          "label": "Initiation",
          "options": [
            {
              "label": "Intact",
              "value": "Intact"
            },
            {
              "label": "Requires Prompting",
              "value": "Requires Prompting"
            },
            {
              "label": "Unable",
              "value": "Unable"
            }
          ]
        },
        {
          "type": "radio",
          "name": "med_sequencing",
          "label": "Sequencing",
          "options": [
            {
              "label": "Intact",
              "value": "Intact"
            },
            {
              "label": "Impaired",
              "value": "Impaired"
            },
            {
              "label": "Severely Impaired",
              "value": "Severely Impaired"
            }
          ]
        },
        {
          "type": "radio",
          "name": "med_safety",
          "label": "Safety Awareness",
          "options": [
            {
              "label": "Intact",
              "value": "Intact"
            },
            {
              "label": "Reduced",
              "value": "Reduced"
            },
            {
              "label": "Unsafe",
              "value": "Unsafe"
            }
          ]
        },
        {
          "type": "radio",
          "name": "med_assistance",
          "label": "Assistance Level",
          "labelAbove": true,
          "options": [
            {
              "label": "I – Independent ",
              "value": "I"
            },
            {
              "label": "M I – Modified Independent",
              "value": "MI"
            },
            {
              "label": "SV – Supervision ",
              "value": "SV"
            },
            {
              "label": "Min A – Minimal Assistance ",
              "value": "MinA"
            },
            {
              "label": "Mod A – Moderate Assistance ",
              "value": "ModA"
            },
            {
              "label": "Max A – Maximal Assistance ",
              "value": "MaxA"
            },
            {
              "label": "TD – Total Dependence ",
              "value": "TD"
            }
          ]
        },
        {
          "type": "radio",
          "name": "med_cueing",
          "label": "Cueing Type",
          "options": [
            {
              "label": "Verbal",
              "value": "Verbal"
            },
            {
              "label": "Visual",
              "value": "Visual"
            },
            {
              "label": "Gestural",
              "value": "Gestural"
            },
            {
              "label": "Physical",
              "value": "Physical"
            }
          ]
        },
        {
          "type": "radio",
          "name": "med_error_type",
          "label": "Error Type",
          "options": [
            {
              "label": "Omission",
              "value": "Omission"
            },
            {
              "label": "Commission",
              "value": "Commission"
            },
            {
              "label": "Timing Error",
              "value": "Timing"
            },
            {
              "label": "Perseveration",
              "value": "Perseveration"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Meal Preparation"
        },
        {
          "type": "radio",
          "name": "meal_initiation",
          "label": "Initiation",
          "options": [
            {
              "label": "Intact",
              "value": "Intact"
            },
            {
              "label": "Delayed",
              "value": "Delayed"
            },
            {
              "label": "Unable",
              "value": "Unable"
            }
          ]
        },
        {
          "type": "radio",
          "name": "meal_sequencing",
          "label": "Sequencing",
          "options": [
            {
              "label": "Intact",
              "value": "Intact"
            },
            {
              "label": "Impaired",
              "value": "Impaired"
            },
            {
              "label": "Severely Impaired",
              "value": "Severely Impaired"
            }
          ]
        },
        {
          "type": "radio",
          "name": "meal_safety",
          "label": "Safety Awareness",
          "options": [
            {
              "label": "Intact",
              "value": "Intact"
            },
            {
              "label": "Reduced",
              "value": "Reduced"
            },
            {
              "label": "Unsafe",
              "value": "Unsafe"
            }
          ]
        },
        {
          "type": "single-select",
          "name": "meal_assistance",
          "label": "Assistance Level",
          "options": [
            {
              "label": "I",
              "value": "I",
              "required": true
            },
            {
              "label": "M I",
              "value": "M I",
              "required": true
            },
            {
              "label": "SV",
              "value": "SV",
              "required": true
            },
            {
              "label": "Min A",
              "value": "Min A",
              "required": true
            },
            {
              "label": "Mod A",
              "value": "Mod A",
              "required": true
            },
            {
              "label": "Max A",
              "value": "Max A",
              "required": true
            },
            {
              "label": "TD",
              "value": "TD",
              "required": true
            }
          ]
        },
        {
          "type": "radio",
          "name": "meal_cueing",
          "label": "Cueing Type",
          "options": [
            {
              "label": "Verbal",
              "value": "Verbal"
            },
            {
              "label": "Visual",
              "value": "Visual"
            },
            {
              "label": "Gestural",
              "value": "Gestural"
            },
            {
              "label": "Physical",
              "value": "Physical"
            }
          ]
        },
        {
          "type": "radio",
          "name": "meal_error_type",
          "label": "Error Type",
          "options": [
            {
              "label": "Step Omission",
              "value": "StepOmission"
            },
            {
              "label": "Disorganization",
              "value": "Disorganization"
            },
            {
              "label": "Safety Error",
              "value": "SafetyError"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Calendar / Scheduling Use"
        },
        {
          "type": "radio",
          "name": "calendar_initiation",
          "label": "Initiation",
          "options": [
            {
              "label": "Independent",
              "value": "Independent"
            },
            {
              "label": "Requires Prompting",
              "value": "Requires Prompting"
            },
            {
              "label": "Unable",
              "value": "Unable"
            }
          ]
        },
        {
          "type": "radio",
          "name": "calendar_consistency",
          "label": "Consistency",
          "options": [
            {
              "label": "Consistent",
              "value": "Consistent"
            },
            {
              "label": "Inconsistent",
              "value": "Inconsistent"
            },
            {
              "label": "Unable",
              "value": "Unable"
            }
          ]
        },
        {
          "type": "radio",
          "name": "calendar_cueing",
          "label": "Cueing Required",
          "options": [
            {
              "label": "Verbal",
              "value": "Verbal"
            },
            {
              "label": "Visual",
              "value": "Visual"
            },
            {
              "label": "None",
              "value": "None"
            }
          ]
        },
        {
          "type": "radio",
          "name": "calendar_carryover",
          "label": "Carryover",
          "options": [
            {
              "label": "Good",
              "value": "Good"
            },
            {
              "label": "Limited",
              "value": "Limited"
            },
            {
              "label": "Poor",
              "value": "Poor"
            }
          ]
        },
        {
          "type": "radio",
          "name": "calendar_time_awareness",
          "label": "Time Awareness",
          "options": [
            {
              "label": "Intact",
              "value": "Intact"
            },
            {
              "label": "Impaired",
              "value": "Impaired"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Cognitive Domain Examination"
        },
        {
          "type": "radio",
          "name": "problem_solving",
          "label": "Problem Solving",
          "options": [
            {
              "label": "Intact",
              "value": "Intact"
            },
            {
              "label": "Mild",
              "value": "Mild"
            },
            {
              "label": "Moderate",
              "value": "Moderate"
            },
            {
              "label": "Severe",
              "value": "Severe"
            }
          ]
        },
        {
          "type": "radio",
          "name": "task_initiation",
          "label": "Task Initiation",
          "options": [
            {
              "label": "Independent",
              "value": "Independent"
            },
            {
              "label": "Requires Prompting",
              "value": "Requires Prompting"
            },
            {
              "label": "Unable",
              "value": "Unable"
            }
          ]
        },
        {
          "type": "radio",
          "name": "mental_flexibility",
          "label": "Mental Flexibility",
          "options": [
            {
              "label": "Intact",
              "value": "Intact"
            },
            {
              "label": "Decreased",
              "value": "Decreased"
            },
            {
              "label": "Severely Impaired",
              "value": "Severely Impaired"
            }
          ]
        },
        {
          "type": "radio",
          "name": "organization",
          "label": "Organization",
          "options": [
            {
              "label": "Intact",
              "value": "Intact"
            },
            {
              "label": "Impaired",
              "value": "Impaired"
            },
            {
              "label": "Severely Impaired",
              "value": "Severely Impaired"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Attention"
        },
        {
          "type": "radio",
          "name": "sustained_attention",
          "label": "Sustained Attention",
          "options": [
            {
              "label": "Intact",
              "value": "Intact"
            },
            {
              "label": "Variable",
              "value": "Variable"
            },
            {
              "label": "Impaired",
              "value": "Impaired"
            },
            {
              "label": "Severely Impaired",
              "value": "Severely Impaired"
            }
          ]
        },
        {
          "type": "radio",
          "name": "selective_attention",
          "label": "Selective Attention",
          "options": [
            {
              "label": "Intact",
              "value": "Intact"
            },
            {
              "label": "Variable",
              "value": "Variable"
            },
            {
              "label": "Impaired",
              "value": "Impaired"
            },
            {
              "label": "Severely Impaired",
              "value": "Severely Impaired"
            }
          ]
        },
        {
          "type": "radio",
          "name": "distractibility",
          "label": "Distractibility",
          "options": [
            {
              "label": "Present",
              "value": "Present"
            },
            {
              "label": "Absent",
              "value": "Absent"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Additional Cognitive Findings"
        },
        {
          "type": "radio",
          "name": "orientation",
          "label": "Orientation",
          "options": [
            {
              "label": "Person",
              "value": "Person"
            },
            {
              "label": "Place",
              "value": "Place"
            },
            {
              "label": "Time",
              "value": "Time"
            },
            {
              "label": "Situation",
              "value": "Situation"
            }
          ]
        },
        {
          "type": "textarea",
          "name": "orientation_comments",
          "label": "Comments"
        },
        {
          "type": "radio",
          "name": "memory",
          "label": "Memory",
          "options": [
            {
              "label": "Immediate",
              "value": "Immediate"
            },
            {
              "label": "Short-term",
              "value": "ShortTerm"
            },
            {
              "label": "Working",
              "value": "Working"
            },
            {
              "label": "Long-term",
              "value": "LongTerm"
            }
          ]
        },
        {
          "type": "radio",
          "name": "executive_function",
          "label": "Executive Function",
          "labelAbove": true,
          "options": [
            {
              "label": "Planning",
              "value": "Planning"
            },
            {
              "label": "Sequencing",
              "value": "Sequencing"
            },
            {
              "label": "Organization",
              "value": "Organization"
            },
            {
              "label": "Problem Solving",
              "value": "ProblemSolving"
            },
            {
              "label": "Abstract Reasoning",
              "value": "Abstract"
            },
            {
              "label": "Mental Flexibility",
              "value": "Flexibility"
            }
          ]
        },
        {
          "type": "radio",
          "name": "safety_judgment",
          "label": "Safety & Judgment",
          "labelAbove": true,
          "options": [
            {
              "label": "Poor Insight",
              "value": "PoorInsight"
            },
            {
              "label": "Impulsive",
              "value": "Impulsive"
            },
            {
              "label": "Unsafe in Kitchen",
              "value": "KitchenUnsafe"
            },
            {
              "label": "Medication Mismanagement",
              "value": "MedMismanagement"
            },
            {
              "label": "Requires Supervision",
              "value": "Supervision"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Functional Performance Assessment"
        },
        {
          "type": "textarea",
          "name": "observation",
          "label": "Observation"
        },
        {
          "type": "radio",
          "name": "insight",
          "label": "Insight",
          "options": [
            {
              "label": "Good",
              "value": "Good"
            },
            {
              "label": "Partial",
              "value": "Partial"
            },
            {
              "label": "Poor",
              "value": "Poor"
            }
          ]
        },
        {
          "type": "radio",
          "name": "communication",
          "label": "Communication",
          "options": [
            {
              "label": "Intact",
              "value": "Intact"
            },
            {
              "label": "Impaired",
              "value": "Impaired"
            }
          ]
        },
        {
          "type": "radio",
          "name": "endurance",
          "label": "Endurance",
          "options": [
            {
              "label": "Adequate",
              "value": "Adequate"
            },
            {
              "label": "Reduced",
              "value": "Reduced"
            }
          ]
        },
        {
          "type": "textarea",
          "name": "compensatory_strategies",
          "label": "Compensatory Strategies Observed"
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
          "name": "Clinical Impression",
          "label": "Clinical Impression / Notes",
          "type": "input",
          "placeholder": "Therapist assessment..."
        },
        {
          "type": "textarea",
          "name": "cognitive_strengths",
          "label": "Cognitive Strengths"
        },
        {
          "type": "textarea",
          "name": "cognitive_deficits",
          "label": "Cognitive Deficits (Problem List)"
        },
        {
          "type": "checkbox-group",
          "name": "impact_on_occupational_performance",
          "label": "Impacts of Cognitive Deficits on Occupational Performance",
          "options": [
            {
              "label": "ADL limitation",
              "value": "ADL"
            },
            {
              "label": "IADL limitation",
              "value": "IADL"
            },
            {
              "label": "Work limitation",
              "value": "Work"
            },
            {
              "label": "Driving safety concern",
              "value": "Driving"
            },
            {
              "label": "Community participation restriction",
              "value": "Community"
            },
            {
              "label": "Requires supervision",
              "value": "Supervision"
            }
          ]
        },
        {
          "type": "textarea",
          "name": "safety_concerns",
          "label": "Safety Concerns"
        },
        {
          "type": "radio",
          "name": "rehabilitation_prognosis",
          "label": "Rehabilitation Prognosis",
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
              "label": "Guarded",
              "value": "Guarded"
            },
            {
              "label": "Poor",
              "value": "Poor"
            }
          ]
        },
        {
          "type": "textarea",
          "name": "clinical_impression",
          "label": "Clinical Impression"
        }
      ]
    }
  ]
}

const PLAN = {
  "title": "",
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
          "type": "subheading",
          "label": "Intervention Plan"
        },
        {
          "type": "checkbox-group",
          "name": "intervention_plan",
          "label": "Select Interventions",
          "options": [
            {
              "label": "Attention & concentration training",
              "value": "Attention"
            },
            {
              "label": "Orientation",
              "value": "Orientation"
            },
            {
              "label": "Memory restorative & retraining",
              "value": "Memory"
            },
            {
              "label": "Executive function training",
              "value": "Executive"
            },
            {
              "label": "Processing speed tasks",
              "value": "Processing"
            },
            {
              "label": "Cognitive remediation therapy",
              "value": "CRT"
            },
            {
              "label": "Computer-based training using games",
              "value": "Computer"
            },
            {
              "label": "Perceptual training",
              "value": "Perceptual"
            }
          ]
        },
        {
          "type": "radio",
          "name": "perceptual_training_type",
          "label": "Perceptual Training Type",
          "labelAbove": true,
          "options": [
            {
              "label": "Praxis training",
              "value": "Praxis"
            },
            {
              "label": "Spatial Perception training",
              "value": "Spatial"
            },
            {
              "label": "Visuospatial & Constructional skills training",
              "value": "Visuospatial"
            },
            {
              "label": "Visual perceptual skills training",
              "value": "VisualPerceptual"
            },
            {
              "label": "Visual scanning & tracking exercises",
              "value": "VisualScanning"
            }
          ],
          "showIf": {
            "field": "intervention_plan",
            "includes": "Perceptual"
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
  CONSENT
};