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
          "label": "Medical Information"
        },
        {
          "type": "input",
          "name": "surgical_history",
          "label": "Surgical History"
        },
        {
          "type": "subheading",
          "label": "Common Neurological Conditions"
        },
        {
          "type": "checkbox-group",
          "name": "neuro_conditions",
          "label": "",
          "options": [
            {
              "label": "Stroke",
              "value": "Stroke"
            },
            {
              "label": "Traumatic Brain Injury",
              "value": "TBI"
            },
            {
              "label": "Spinal Cord Injury",
              "value": "SCI"
            },
            {
              "label": "Parkinson’s Disease",
              "value": "Parkinsons"
            },
            {
              "label": "Multiple Sclerosis",
              "value": "MS"
            },
            {
              "label": "Brain Tumor",
              "value": "BrainTumor"
            },
            {
              "label": "Other",
              "value": "Other"
            }
          ]
        },
        {
          "type": "textarea",
          "name": "neuro_other_details",
          "label": "Others",
          "showIf": {
            "includes": "Other",
            "field": "neuro_conditions"
          }
        },
        {
          "type": "subheading",
          "label": "Prior Level of Function (PLOF)"
        },
        {
          "name": "plof_mobility",
          "label": "Mobility prior to current condition",
          "labelAbove": true,
          "type": "radio",
          "options": [
            {
              "label": "Independent community ambulation",
              "value": "community"
            },
            {
              "label": "Independent household ambulation",
              "value": "household"
            },
            {
              "label": "Ambulated with aid",
              "value": "aid"
            },
            {
              "label": "Wheelchair dependent",
              "value": "wheelchair"
            },
            {
              "label": "Bedbound",
              "value": "bedbound"
            }
          ]
        },
        {
          "name": "plof_mobility_aid",
          "label": "Specify aid used",
          "type": "input",
          "showIf": {
            "field": "plof_mobility",
            "equals": "aid"
          }
        },
        {
          "name": "plof_transfers",
          "label": "Transfers prior to current condition",
          "labelAbove": true,
          "type": "radio",
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
            }
          ]
        },
        {
          "name": "plof_adl",
          "label": "ADL status prior to current condition",
          "labelAbove": true,
          "type": "radio",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
            },
            {
              "label": "Minimal assistance",
              "value": "minimal"
            },
            {
              "label": "Moderate assistance",
              "value": "moderate"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "name": "plof_work_role",
          "label": "Work / role participation prior to condition",
          "labelAbove": true,
          "type": "radio",
          "options": [
            {
              "label": "Full-time work",
              "value": "full_time"
            },
            {
              "label": "Part-time work",
              "value": "part_time"
            },
            {
              "label": "Homemaker",
              "value": "homemaker"
            },
            {
              "label": "Student",
              "value": "student"
            },
            {
              "label": "Retired",
              "value": "retired"
            }
          ]
        },
        {
          "name": "plof_recreation",
          "label": "Recreational / social participation",
          "type": "radio",
          "options": [
            {
              "label": "Independent",
              "value": "independent"
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
          "name": "plof_remarks",
          "label": "Remarks",
          "type": "textarea"
        },
        {
          "type": "subheading",
          "label": "Living Situation & Context"
        },
        {
          "type": "radio",
          "name": "residence_type",
          "label": "Residence",
          "options": [
            {
              "label": "Home",
              "value": "Home"
            },
            {
              "label": "Rehab Facility",
              "value": "Rehab"
            },
            {
              "label": "LTC",
              "value": "LTC"
            },
            {
              "label": "Other",
              "value": "Other"
            }
          ]
        },
        {
          "type": "input",
          "name": "residence_other",
          "label": "Others",
          "showIf": {
            "field": "residence_type",
            "equals": "Other"
          }
        },
        {
          "type": "input",
          "name": "lives_with",
          "label": "Lives With"
        },
        {
          "type": "radio",
          "name": "caregiver_support",
          "label": "Caregiver Support Level",
          "options": [
            {
              "label": "Independent",
              "value": "Independent"
            },
            {
              "label": "Supervision",
              "value": "Supervision"
            },
            {
              "label": "Partial Assist",
              "value": "Partial"
            },
            {
              "label": "Full Assist",
              "value": "Full"
            }
          ]
        },
        {
          "type": "textarea",
          "name": "home_environment",
          "label": "Home Environment"
        },
        {
          "type": "radio",
          "name": "house_type",
          "label": "Type of House",
          "options": [
            {
              "label": "Single-storey",
              "value": "Single"
            },
            {
              "label": "Double-storey",
              "value": "Double"
            },
            {
              "label": "Apartment (Lift)",
              "value": "Apartment"
            },
            {
              "label": "Other",
              "value": "Other"
            }
          ]
        },
        {
          "type": "input",
          "name": "house_type_other",
          "label": "Others",
          "placeholder": "Enter house type",
          "showIf": {
            "field": "house_type",
            "equals": "Other"
          }
        },
        {
          "type": "radio",
          "name": "toilet_type",
          "label": "Type of Toilet",
          "options": [
            {
              "label": "Sitting",
              "value": "Sitting"
            },
            {
              "label": "Squatting",
              "value": "Squatting"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Educational Level"
        },
        {
          "type": "single-select",
          "name": "education_level",
          "label": "Highest Education",
          "options": [
            {
              "label": "Primary",
              "value": "Primary"
            },
            {
              "label": "Secondary",
              "value": "Secondary"
            },
            {
              "label": "Diploma",
              "value": "Diploma"
            },
            {
              "label": "Degree",
              "value": "Degree"
            },
            {
              "label": "Master",
              "value": "Master"
            },
            {
              "label": "PhD",
              "value": "PhD"
            },
            {
              "label": "Other",
              "value": "Other"
            }
          ]
        },
        {
          "type": "input",
          "name": "education_level_other",
          "label": "Please specify",
          "showIf": {
            "field": "education_level",
            "equals": "Other"
          }
        },
        {
          "type": "subheading",
          "label": "Driving & Licensing"
        },
        {
          "type": "single-select",
          "name": "driving_license_type",
          "label": "Driving License Type",
          "options": [
            {
              "label": "None – No Driving License",
              "value": "None"
            },
            {
              "label": "B2 – Motor Car (Private Vehicle)",
              "value": "B2"
            },
            {
              "label": "D – Heavy Motor Vehicle",
              "value": "D"
            },
            {
              "label": "E – Heavy Trailer Vehicle",
              "value": "E"
            },
            {
              "label": "GDL – Goods Driving License",
              "value": "GDL"
            },
            {
              "label": "PSV – Public Service Vehicle",
              "value": "PSV"
            },
            {
              "label": "Other",
              "value": "Other"
            }
          ]
        },
        {
          "type": "input",
          "name": "driving_license_other",
          "label": "Please specify",
          "showIf": {
            "field": "driving_license_type",
            "equals": "Other"
          }
        },
        {
          "type": "radio",
          "name": "returned_to_driving",
          "label": "Returned to Driving Post-Injury",
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
          "name": "driving_duration_distance",
          "label": "Duration & Distance",
          "showIf": {
            "field": "returned_to_driving",
            "equals": "yes"
          }
        },
        {
          "type": "subheading",
          "label": "Client Expectations / Patient Goals"
        },
        {
          "type": "textarea",
          "name": "patient_goals",
          "label": ""
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
          "label": "Functional & Mobility Status"
        },
        {
          "name": "neuro_scales",
          "type": "assessment-launcher",
          "options": [
            {
              "label": "Range of Motion (ROM)",
              "value": "rom"
            },
            {
              "label": "Manual Muscle Test (MMT)",
              "value": "mmt"
            },
            {
              "label": "Muscle Tone (MAS)",
              "value": "mas"
            },
            {
              "label": "Scale for the Assessment and Rating of Ataxia (SARA)",
              "value": "sara"
            },
            {
              "label": "Fugl Meyer Assessment (FMA-UE)",
              "value": "flug"
            },
            {
              "label": "Trunk Impairment Scale (TIS)",
              "value": "tsi"
            },
            {
              "label": "Box & Block",
              "value": "bbt"
            },
            {
              "label": "Functional Independence Measure (FIM)",
              "value": "FIM"
            },
            {
              "label": "Action Research Arm Test(ARAT)",
              "value": "arat"
            },
            {
              "label": "Montreal Cognitive Assessment (MoCA)",
              "value": "moca"
            },
            {
              "label": "Jebsen Hand Function",
              "value": "jfht"
            }
          ]
        },
        {
          "type": "radio",
          "name": "dominant_hand",
          "label": "Dominant Hand",
          "options": [
            {
              "label": "Right",
              "value": "Right"
            },
            {
              "label": "Left",
              "value": "Left"
            }
          ]
        },
        {
          "type": "checkbox-group",
          "name": "affected_side",
          "label": "Affected Side",
          "options": [
            {
              "label": "LUE – Left Upper Extremity",
              "value": "LUE"
            },
            {
              "label": "RUE – Right Upper Extremity",
              "value": "RUE"
            },
            {
              "label": "LLE – Left Lower Extremity",
              "value": "LLE"
            },
            {
              "label": "RLE – Right Lower Extremity",
              "value": "RLE"
            }
          ]
        },
        {
          "type": "radio",
          "name": "assist_level",
          "label": "Assist Level",
          "labelAbove": true,
          "options": [
            {
              "label": "Independent",
              "value": "Independent"
            },
            {
              "label": "Supervision",
              "value": "Supervision"
            },
            {
              "label": "SBA – Stand-By Assist",
              "value": "SBA"
            },
            {
              "label": "CGA – Contact Guard Assist",
              "value": "CGA"
            },
            {
              "label": "Min Assist",
              "value": "MinA"
            },
            {
              "label": "Mod Assist",
              "value": "ModA"
            },
            {
              "label": "Max Assist",
              "value": "MaxA"
            },
            {
              "label": "Dependent",
              "value": "Dependent"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Neuro Factors Observed"
        },
        {
          "type": "checkbox-group",
          "name": "neuro_factors",
          "label": "",
          "options": [
            {
              "label": "Hemiparesis",
              "value": "Hemiparesis"
            },
            {
              "label": "Ataxia",
              "value": "Ataxia"
            },
            {
              "label": "Spasticity",
              "value": "Spasticity"
            },
            {
              "label": "Hypotonia",
              "value": "Hypotonia"
            },
            {
              "label": "Neglect",
              "value": "Neglect"
            },
            {
              "label": "Apraxia",
              "value": "Apraxia"
            },
            {
              "label": "Sensory Loss",
              "value": "SensoryLoss"
            },
            {
              "label": "Cognitive Deficit",
              "value": "CognitiveDeficit"
            },
            {
              "label": "Visual-Perceptual Deficit",
              "value": "VisualPerceptual"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Motor Assessment"
        },
        {
          "type": "subheading",
          "label": "Tone"
        },
        {
          "type": "radio",
          "name": "tone_type",
          "label": "Tone Type",
          "position": "side",
          "options": [
            {
              "label": "Normal",
              "value": "Normal"
            },
            {
              "label": "Hypotonic",
              "value": "Hypotonic"
            },
            {
              "label": "Hypertonic",
              "value": "Hypertonic"
            }
          ]
        },
        {
          "type": "input",
          "name": "mas_grade",
          "label": "MAS Grade"
        },
        {
          "type": "subheading",
          "label": "AROM"
        },
        {
          "type": "row",
          "fields": [
            {
              "type": "input",
              "name": "arom_rue",
              "label": "Right Upper Extremity (RUE)"
            },
            {
              "type": "input",
              "name": "arom_lue",
              "label": "Left Upper Extremity (LUE)"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Strength (MMT)"
        },
        {
          "type": "row",
          "fields": [
            {
              "type": "input",
              "name": "mmt_rue",
              "label": "Right Upper Extremity (RUE) (/5)"
            },
            {
              "type": "input",
              "name": "mmt_lue",
              "label": "Left Upper Extremity (LUE) (/5)"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Coordination"
        },
        {
          "type": "radio",
          "name": "finger_to_nose",
          "label": "Finger-to-Nose",
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
          "name": "rapid_alt_movement",
          "label": "Rapid Alternating Movement",
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
          "type": "input",
          "name": "functional_reach_cm",
          "label": "Functional Reach (cm)"
        },
        {
          "type": "subheading",
          "label": "Fine Motor"
        },
        {
          "type": "input",
          "name": "nine_hole_peg",
          "label": "9-Hole Peg Test (sec)"
        },
        {
          "type": "radio",
          "name": "functional_grasp",
          "label": "Functional Grasp",
          "options": [
            {
              "label": "Effective",
              "value": "Effective"
            },
            {
              "label": "Ineffective",
              "value": "Ineffective"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Balance & Postural Control"
        },
        {
          "type": "radio",
          "name": "sitting_balance",
          "label": "Sitting Balance",
          "options": [
            {
              "label": "Static",
              "value": "Static"
            },
            {
              "label": "Dynamic",
              "value": "Dynamic"
            },
            {
              "label": "Poor",
              "value": "Poor"
            }
          ]
        },
        {
          "type": "input",
          "name": "standing_tolerance",
          "label": "Standing Tolerance (minutes)"
        },
        {
          "type": "radio",
          "name": "loss_of_balance_adl",
          "label": "Loss of Balance During ADL",
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
          "name": "assistive_device_used",
          "label": "Assistive Device Used"
        },
        {
          "type": "subheading",
          "label": "Ambulatory Status – Short Distance"
        },
        {
          "type": "radio",
          "name": "ambulatory_status",
          "label": "Ambulatory Status",
          "labelAbove": true,
          "options": [
            {
              "label": "Independent Walking",
              "value": "IndependentWalking"
            },
            {
              "label": "Wheelchair",
              "value": "Wheelchair"
            },
            {
              "label": "Quadripod (Narrow/Wide)",
              "value": "Quadripod"
            },
            {
              "label": "Walking Stick",
              "value": "WalkingStick"
            },
            {
              "label": "Walking Frame",
              "value": "WalkingFrame"
            },
            {
              "label": "Elbow Crutches",
              "value": "ElbowCrutches"
            },
            {
              "label": "Other",
              "value": "Other"
            }
          ]
        },
        {
          "type": "input",
          "name": "ambulatory_status_other",
          "label": "Please specify",
          "showIf": {
            "field": "ambulatory_status",
            "equals": "Other"
          }
        },
        {
          "type": "subheading",
          "label": "Clinical Observations / Tests"
        },
        {
          "type": "assessment-launcher",
          "name": "clinical_tests",
          "label": "",
          "options": [
            {
              "label": "Strength Testing",
              "value": "strength_testing"
            },
            {
              "label": "Sensory Testing",
              "value": "sensory_testing"
            },
            {
              "label": "Balance Testing",
              "value": "balance_testing"
            },
            {
              "label": "Fine Motor / Dexterity Testing",
              "value": "fine_motor_testing"
            }
          ]
        }
      ]
    }
  ]
}

const ASSESSMENT =  {
  "title": "Assessment",
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Problem List"
        },
        {
          "type": "textarea",
          "name": "problem_list",
          "label": "Problem List"
        },
        {
          "type": "subheading",
          "label": "Clinical Impression"
        },
        {
          "name": "assessment_notes",
          "label": "Clinical Impression / Notes",
          "type": "input",
          "placeholder": "Therapist assessment..."
        },
        {
          "type": "textarea",
          "name": "functional_limitations",
          "label": "Functional Limitations"
        },
        {
          "type": "textarea",
          "name": "clinical_diagnosis",
          "label": "Diagnosis"
        },
        {
          "type": "subheading",
          "label": "Rehabilitation Potential"
        },
        {
          "type": "radio",
          "name": "rehab_potential",
          "label": "Select Potential Level",
          "options": [
            {
              "label": "Excellent",
              "value": "Excellent"
            },
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
        },
        {
          "type": "info-text",
          "name": "rehab_note",
          "text": "(Based on cognition, motivation, severity, comorbidities)"
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
          "label": "Intervention Plan",
          "options": [
            {
              "label": "ADL Retraining",
              "value": "ADLRetraining"
            },
            {
              "label": "IADL Retraining",
              "value": "IADLRetraining"
            },
            {
              "label": "Muscle Tone Management",
              "value": "MuscleTone"
            },
            {
              "label": "GMI Training",
              "value": "GMI"
            },
            {
              "label": "Constraint Induced Movement Therapy (CIMT)",
              "value": "CIMT"
            },
            {
              "label": "Functional ROM Exercise",
              "value": "FunctionalROM"
            },
            {
              "label": "Functional Strengthening exercise",
              "value": "Strengthening"
            },
            {
              "label": "Fine Motor Training",
              "value": "FineMotor"
            },
            {
              "label": "Bobath/NDT Therapy",
              "value": "BobathNDT"
            },
            {
              "label": "Equipment Prescription (Lightweight WC, Commode WC)",
              "value": "EquipmentPrescription"
            },
            {
              "label": "Assistive and adaptive equipment Recommendation",
              "value": "AssistiveEquipment"
            },
            {
              "label": "Driving and riding Assessment",
              "value": "DrivingAssessment"
            },
            {
              "label": "Others",
              "value": "Others"
            }
          ]
        },
        {
          "type": "textarea",
          "name": "intervention_plan_others",
          "label": "If others, specify",
          "showIf": {
            "field": "intervention_plan",
            "includes": "Others"
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