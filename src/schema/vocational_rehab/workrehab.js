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
              "type": "checkbox-group",
              "options": [
                {
                  "label": "Consent obtained",
                  "value": "yes"
                }
              ]
            },
            {
              "name": "consent_upload",
              "label": "Upload",
              "type": "file-upload",
              "showIf": {
                "field": "consent_obtained",
                "includes": "yes"
              }
            }
          ]
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
          "name": "chief_complaints",
          "label": "Chief Complaints"
        },
        {
          "type": "input",
          "name": "hpi",
          "label": "History of Present Illness (HPI)"
        },
        {
          "type": "",
          "label": "Which best describes your current work status, or if currently not working your last work status"
        },
        {
          "type": "radio",
          "name": "work_status",
          "label": "",
          "options": [
            {
              "value": "employed",
              "label": "Employed"
            },
            {
              "value": "self_employed",
              "label": "Self-employed"
            },
            {
              "value": "non_paid_work",
              "label": "Non-paid work such as volunteer"
            },
            {
              "value": "student",
              "label": "Student or in training"
            },
            {
              "value": "homemaker",
              "label": "Homemaker"
            },
            {
              "value": "retired",
              "label": "Retired"
            },
            {
              "value": "not_applicable",
              "label": "Not applicable"
            }
          ]
        },
        {
          "type": "radio",
          "name": "current_status",
          "label": "Which of the following describes your current work status best",
          "options": [
            {
              "value": "working",
              "label": "Working"
            },
            {
              "value": "not_working",
              "label": "Not working"
            }
          ]
        },
        {
          "type": "radio",
          "name": "current_work_type",
          "label": "If currently working, are you",
          "options": [
            {
              "value": "full_time",
              "label": "Full time"
            },
            {
              "value": "part_time",
              "label": "Part time"
            },
            {
              "value": "modified_duty",
              "label": "On modified or light duty"
            }
          ],
          "showIf": {
            "field": "work_status",
            "equals": "working"
          }
        },
        {
          "type": "radio",
          "name": "not_working_reason",
          "label": "If currently not working, are you",
          "labelAbove": true,
          "options": [
            {
              "value": "health_reason",
              "label": "Not working due to health reason"
            },
            {
              "value": "vocational_rehab",
              "label": "Not working due to ongoing vocational rehabilitation"
            },
            {
              "value": "other",
              "label": "Not working due to other reasons"
            }
          ],
          "showIf": {
            "field": "work_status",
            "equals": "not_working"
          }
        },
        {
          "type": "input",
          "name": "not_working_other_specify",
          "label": "Please specify:",
          "placeholder": "Enter reason",
          "showIf": {
            "field": "not_working_reason",
            "equals": "other"
          }
        },
        {
          "type": "input",
          "name": "off_work_since",
          "label": "If currently not working, since when have you been off from work",
          "placeholder": "Enter date or duration",
          "showIf": {
            "field": "work_status",
            "equals": "not_working"
          }
        },
        {
          "type": "",
          "label": "When thinking about your work or vocational rehabilitation program: Are you currently:"
        },
        {
          "type": "radio",
          "name": "vocational_status",
          "label": "",
          "options": [
            {
              "value": "training",
              "label": "Engaging in vocational training activities such as in acquiring knowledge and skills for a job, including school training"
            },
            {
              "value": "employment_prep",
              "label": "Engaging in programs related to preparation for employment such as apprenticeship or internship"
            },
            {
              "value": "securing_job",
              "label": "Engaging in activities to secure or maintain your current job"
            },
            {
              "value": "looking_for_job",
              "label": "Looking for a (new) job or work"
            }
          ]
        },
        {
          "type": "",
          "label": "What is the highest level of education that you have completed"
        },
        {
          "type": "radio",
          "name": "education_level",
          "label": "",
          "options": [
            {
              "value": "no_formal",
              "label": "No formal schooling"
            },
            {
              "value": "less_than_primary",
              "label": "Less than primary school"
            },
            {
              "value": "primary",
              "label": "Primary school"
            },
            {
              "value": "secondary",
              "label": "Secondary school"
            },
            {
              "value": "college",
              "label": "College / university"
            },
            {
              "value": "post_graduate",
              "label": "Post-graduate degree"
            }
          ]
        },
        {
          "type": "input",
          "name": "job_title",
          "label": "What is your current job or profession or if currently not working, what is the last job or profession you worked in (job title)"
        },
        {
          "type": "input",
          "name": "business_industry",
          "label": "What kind of business, industry or service is (or was) your job in",
          "placeholder": "e.g., cardboard box manufacturing, road maintenance, retail shoe store, secondary school, dairy farm, municipal government"
        },
        {
          "type": "input",
          "name": "work_type",
          "label": "What kind of work are (or were) you doing",
          "placeholder": "e.g., driving trucks, operating machines, writing letters, answering telephone calls"
        },
        {
          "type": "radio",
          "name": "job_change_planned",
          "label": "If a change of job is planned, what future job are you aiming for",
          "options": [
            {
              "value": "yes",
              "label": "Yes"
            },
            {
              "value": "not_applicable",
              "label": "Not Applicable"
            }
          ]
        },
        {
          "type": "input",
          "name": "future_job",
          "placeholder": "Specify future job",
          "showIf": {
            "field": "job_change_planned",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "medical_treatment",
          "label": "Are you in medical or therapeutic treatment (e.g. with physician, therapists, etc.)",
          "options": [
            {
              "value": "yes",
              "label": "Yes"
            },
            {
              "value": "no",
              "label": "No"
            },
            {
              "value": "not_applicable",
              "label": "Not Applicable"
            }
          ]
        },
        {
          "type": "input",
          "name": "medical_treatment_specify",
          "label": "If yes, please specify:",
          "placeholder": "Enter details",
          "showIf": {
            "field": "medical_treatment",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "current_restrictions",
          "label": "Do you have current restrictions",
          "info": "e.g. lifting limited to 5kg, limited weight bearing on your leg or arm",
          "options": [
            {
              "value": "yes",
              "label": "Yes"
            },
            {
              "value": "no",
              "label": "No"
            },
            {
              "value": "not_applicable",
              "label": "Not Applicable"
            }
          ]
        },
        {
          "type": "input",
          "name": "restrictions_specify",
          "label": "If yes, please specify:",
          "placeholder": "Enter restrictions",
          "showIf": {
            "field": "current_restrictions",
            "equals": "yes"
          }
        },
        {
          "type": "input",
          "name": "vocational_intervention",
          "label": "What kind of work or vocational intervention are you receiving now (list all you know)",
          "placeholder": "e.g. physical training, cognitive training, case management, vocational training, work place adaptation, work evaluation etc."
        },
        {
          "type": "radio",
          "name": "family_support",
          "label": "In your current situation, do you get the support you need from your family",
          "options": [
            {
              "value": "yes",
              "label": "Yes"
            },
            {
              "value": "no",
              "label": "No"
            },
            {
              "value": "not_applicable",
              "label": "Not Applicable"
            }
          ]
        },
        {
          "type": "input",
          "name": "family_support_specify",
          "label": "If yes, please specify what kind of support you get:",
          "placeholder": "Enter details",
          "showIf": {
            "field": "family_support",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "supervisor_support",
          "label": "If still employed, do you get the support you need from your supervisor or boss",
          "options": [
            {
              "value": "yes",
              "label": "Yes"
            },
            {
              "value": "no",
              "label": "No"
            },
            {
              "value": "not_applicable",
              "label": "Not Applicable"
            }
          ]
        },
        {
          "type": "input",
          "name": "supervisor_support_specify",
          "label": "If yes, please specify what kind of support you get:",
          "placeholder": "Enter details",
          "showIf": {
            "field": "supervisor_support",
            "equals": "yes"
          }
        },
        {
          "type": "radio",
          "name": "government_support",
          "label": "Outside of your current work or vocational rehabilitation program, do you get the support you need from government or private employment agencies to find suitable work, or looking for different work",
          "labelAbove": true,
          "options": [
            {
              "value": "yes",
              "label": "Yes"
            },
            {
              "value": "no",
              "label": "No"
            },
            {
              "value": "not_applicable",
              "label": "Not Applicable"
            }
          ]
        },
        {
          "type": "input",
          "name": "government_support_specify",
          "label": "If yes, please specify what kind of support you get:",
          "placeholder": "Enter details",
          "showIf": {
            "field": "government_support",
            "equals": "yes"
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
          "name": "work_scales",
          "type": "assessment-launcher",
          "options": [
            {
              "label": "WORQ",
              "value": "Part2MainSection"
            },
            {
              "label": "WORK HARDENING MODALITIES",
              "value": "WorkHardeningModalities"
            },
            {
              "label": "WORK HARDENING SCREENING TEMPLATE",
              "value": "WorkHardeningScreening"
            },
            {
              "label": "READINESS FOR RETURN-TO-WORK SCALE",
              "value": "ReadinessReturnToWorkScale"
            },
            {
              "label": "FUNCTIONAL CAPACITY EVALUATION",
              "value": "FunctionalCapacityEvaluation"
            },
            {
              "label": "BECKER WORK ADJUSTMENT PROFILE",
              "value": "BeckerWorkAdjustmentProfile"
            }
          ]
        }
      ]
    }
  ]
}

const ASSESSMENT = {
  "fields": [
    {
      "name": "hydro_clinical_impression",
      "label": "Clinical Impression",
      "type": "textarea"
    },
    {
      "type": "checkbox-group",
      "name": "work_hardening_issues",
      "label": "Problem List",
      "options": [
        {
          "label": "Chronic / recurrent pain issues",
          "value": "chronic_recurrent_pain"
        },
        {
          "label": "Limited physical strength",
          "value": "limited_physical_strength"
        },
        {
          "label": "Limited manual material handling ability (lifting, carrying, pushing, pulling)",
          "value": "limited_material_handling"
        },
        {
          "label": "Limited endurance",
          "value": "limited_endurance"
        },
        {
          "label": "Limited repetitive tasks performance",
          "value": "limited_repetitive_tasks"
        },
        {
          "label": "Limited fine motor / dexterity function",
          "value": "limited_fine_motor"
        },
        {
          "label": "Postural dysfunction",
          "value": "postural_dysfunction"
        },
        {
          "label": "Impaired balance",
          "value": "impaired_balance"
        },
        {
          "label": "Walking and gait impairments",
          "value": "walking_gait_impairment"
        },
        {
          "label": "Limited cognitive capabilities",
          "value": "limited_cognitive"
        },
        {
          "label": "Limited communication ability",
          "value": "limited_communication"
        },
        {
          "label": "Psychosocial issues",
          "value": "psychosocial_issues"
        },
        {
          "label": "Ergonomics risk factors",
          "value": "ergonomics_risk"
        },
        {
          "label": "Rate of perceived exertion (RPE)",
          "value": "rpe"
        },
        {
          "label": "Others",
          "value": "others"
        }
      ]
    },
    {
      "type": "textarea",
      "name": "work_hardening_issues_other",
      "label": "Specify",
      "showIf": {
        "field": "work_hardening_issues",
        "includes": "others"
      }
    },
    {
      "type": "subheading",
      "label": "Progress Since Last Session"
    },
    {
      "type": "grid-table-flat",
      "name": "hydro_progress",
      "headers": [
        "Baseline",
        "Progress",
        "Final"
      ],
      "rows": [
        {
          "key": "worq",
          "label": "WORQ"
        },
        {
          "key": "work_scale",
          "label": "Readiness for Return to Work Scale"
        }
      ]
    },
    {
      "name": "hydro_prognosis",
      "label": "Prognosis",
      "type": "radio",
      "options": [
        {
          "label": "Good",
          "value": "good"
        },
        {
          "label": "Fair",
          "value": "fair"
        },
        {
          "label": "Guarded",
          "value": "guarded"
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
          "type": "checkbox-group",
          "name": "intervention_plan",
          "label": "Intervention Plan",
          "options": [
            {
              "label": "Physical Conditioning",
              "value": "physical_conditioning"
            },
            {
              "label": "Work Hardening",
              "value": "work_hardening"
            },
            {
              "label": "Work Simulation",
              "value": "work_simulation"
            },
            {
              "label": "Ergonomics Education",
              "value": "ergonomics_education"
            },
            {
              "label": "Job Modifications",
              "value": "job_modifications"
            },
            {
              "label": "Workplace Assessments & Adaptations",
              "value": "workplace_assessment_adaptation"
            },
            {
              "label": "Functional Capacity Evaluation",
              "value": "functional_capacity_evaluation"
            },
            {
              "label": "Vocational Rehabilitation",
              "value": "vocational_rehabilitation"
            },
            {
              "label": "Job Coaching",
              "value": "job_coaching"
            },
            {
              "label": "Psychosocial Adaptation",
              "value": "psychosocial_adaptation"
            },
            {
              "label": "Cognitive Rehabilitation",
              "value": "cognitive_rehabilitation"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "type": "textarea",
          "name": "intervention_plan_other",
          "label": "Specify",
          "showIf": {
            "field": "intervention_plan",
            "includes": "others"
          }
        }
      ]
    }
  ]
}

export { CONSENT, SUBJECTIVE, OBJECTIVE, ASSESSMENT, PLAN }