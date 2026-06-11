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
          "name": "History of Present",
          "label": "History of Present Illnes",
          "type": "input"
        },
        {
          "type": "subheading",
          "label": "Educational Background"
        },
        {
          "name": "highest_education_level",
          "type": "checkbox-group",
          "options": [
            {
              "label": "PhD Degree",
              "value": "phd_degree"
            },
            {
              "label": "Master Degree",
              "value": "master_degree"
            },
            {
              "label": "Bachelor Degree",
              "value": "bachelor_degree"
            },
            {
              "label": "Professional Certificate",
              "value": "professional_certificate"
            },
            {
              "label": "Diploma Kemahiran Malaysia",
              "value": "diploma_kemahiran_malaysia"
            },
            {
              "label": "Sijil Kemahiran Malaysia",
              "value": "sijil_kemahiran_malaysia"
            },
            {
              "label": "STPM",
              "value": "stpm"
            },
            {
              "label": "SPM",
              "value": "spm"
            },
            {
              "label": "PMR / PT3",
              "value": "pmr_pt3"
            },
            {
              "label": "UPSR",
              "value": "upsr"
            },
            {
              "label": "Did not attend formal education",
              "value": "no_formal_education"
            }
          ]
        },
        {
          "type": "subheading",
          "label": " Driving License"
        },
        {
          "name": "driving_license",
          "type": "radio",
          "labelAbove": true,
          "options": [
            {
              "label": "Did not posses any",
              "value": "none"
            },
            {
              "label": "D, DA (Motorcar below 3500 kg)",
              "value": "d_da"
            },
            {
              "label": "B, B1, B2 (Motocycle 500 cc, below 500 cc, below 250 cc)",
              "value": "b_b1_b2"
            },
            {
              "label": "A, A1 (Invalid Carriage Motocycle, Motorcar)",
              "value": "a_a1"
            },
            {
              "label": "E, F, G, H, I (Heavy Motorcar, Tractor, Machinery)",
              "value": "e_f_g_h_i"
            },
            {
              "label": "PSV, GDL (Vocational Driving License)",
              "value": "psv_gdl"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Client's Vocational Interests"
        },
        {
          "name": "client_interest",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Sewing",
              "value": "sewing"
            },
            {
              "label": "Bakery",
              "value": "bakery"
            },
            {
              "label": "Urban farming",
              "value": "urban_farming"
            },
            {
              "label": "Design",
              "value": "design"
            },
            {
              "label": "Hands On",
              "value": "hands_on"
            },
            {
              "label": "Electrical",
              "value": "electrical"
            },
            {
              "label": "Electronics",
              "value": "electronics"
            },
            {
              "label": "Office Administration",
              "value": "office_admin"
            },
            {
              "label": "Short Course",
              "value": "short_course"
            },
            {
              "label": "Entrepreneurship",
              "value": "entrepreneurship"
            },
            {
              "label": "Barista",
              "value": "barista"
            },
            {
              "label": "Hairstyling",
              "value": "hairstyling"
            },
            {
              "label": "Culinary",
              "value": "culinary"
            },
            {
              "label": "Automotive",
              "value": "automotive"
            },
            {
              "label": "Innovart",
              "value": "innovart"
            },
            {
              "label": "Florist",
              "value": "florist"
            },
            {
              "label": "Not Sure / Undecided",
              "value": "undecided"
            }
          ]
        },
        {
          "name": "client_self_reported_goals_preferences",
          "label": "Client's Self-Reported Goals / Preferences",
          "type": "input",
          "placeholder": "Enter the client's self-reported goals and preferences"
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
          "label": "Environmental & Physical Functional Limitations"
        },
        {
          "name": "functional_limitations",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Standing",
              "value": "standing"
            },
            {
              "label": "Walking",
              "value": "walking"
            },
            {
              "label": "Sitting",
              "value": "sitting"
            },
            {
              "label": "Stretching",
              "value": "stretching"
            },
            {
              "label": "Squatting or Crouching",
              "value": "squatting_or_crouching"
            },
            {
              "label": "Twisting Body or Neck",
              "value": "twisting_body_or_neck"
            },
            {
              "label": "Lifting and Carrying Weight",
              "value": "lifting_and_carrying_weight"
            },
            {
              "label": "Repetitive Movement",
              "value": "repetitive_movement"
            },
            {
              "label": "Driving",
              "value": "driving"
            },
            {
              "label": "Using Hand Equipment",
              "value": "using_hand_equipment"
            },
            {
              "label": "Stooping",
              "value": "stooping"
            },
            {
              "label": "Memory / Concentration Activity",
              "value": "memory_concentration_activity"
            },
            {
              "label": "Visual Impairment",
              "value": "visual_impairment"
            },
            {
              "label": "Hearing Impairment",
              "value": "hearing_impairment"
            },
            {
              "label": "Speech Impairment",
              "value": "speech_impairment"
            }
          ]
        },
        {
          "name": "therapist_objective_observations",
          "label": "Therapist's Objective Observations on Occupational Performance",
          "type": "input",
          "placeholder": "Enter therapist's objective observations on occupational performance"
        }
      ]
    }
  ]
}

const ASSESSMENT = {
  "fields": [
    {
      "type": "subheading",
      "label": "Clinical Interpretation"
    },
    {
      "name": "clinical_impression",
      "label": "Clinical Impression",
      "type": "input",
      "placeholder": "Enter clinical impression"
    },
    {
      "name": "summary_of_findings_clinical_reasoning",
      "label": "Summary of Findings & Clinical Reasoning",
      "type": "input",
      "placeholder": "Enter summary of findings and clinical reasoning"
    },
    {
      "type": "subheading",
      "label": "Vocational Potential & Barriers"
    },
    {
      "name": "strengths_facilitators",
      "label": "Strengths / Facilitators",
      "type": "input",
      "placeholder": "Enter strengths and facilitators"
    },
    {
      "name": "barriers_challenges",
      "label": "Barriers / Challenges",
      "type": "input",
      "placeholder": "Enter barriers and challenges"
    }
  ]
}

const PLAN =  {
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
          "name": "plan_therapist_remarks",
          "label": "Plan / Therapist Remarks",
          "type": "input",
          "placeholder": "Enter plan and therapist remarks"
        },
        {
          "name": "suggestions_recommendations",
          "label": "Suggestions & Recommendations",
          "type": "input",
          "placeholder": "Enter suggestions and recommendations"
        },
        {
          "name": "functional_assessment_workshop",
          "label": "Functional Assessment & Workshop Referral",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Book for Vocational Functional Assessment (auto-booking)",
              "value": "book_vocational_functional_assessment"
            },
            {
              "label": "Discharge from Vocational Programme (client not interested / not required)",
              "value": "discharge_from_vocational_programme"
            },
            {
              "label": "Refer to Trainer (see reference list below)",
              "value": "refer_to_trainer"
            },
            {
              "label": "Refer to Module (see reference list below)",
              "value": "refer_to_module"
            }
          ]
        },
        {
          "name": "referred_trainer",
          "label": "Referred Trainer",
          "type": "select",
          "placeholder": "Select from Trainer List",
          "options": [
            {
              "label": "Khairunnisa Mokhtar",
              "value": "khairunnisa_mokhtar"
            },
            {
              "label": "Muzammer Zakaria",
              "value": "muzammer_zakaria"
            },
            {
              "label": "Mohd Rafidy A. Bakar",
              "value": "mohd_rafidy_a_bakar"
            },
            {
              "label": "Muhamad Zharif Zainal",
              "value": "muhamad_zharif_zainal"
            },
            {
              "label": "Muhammad Syafiq Arshad",
              "value": "muhammad_syafiq_arshad"
            },
            {
              "label": "Sabaruddin Mohammad",
              "value": "sabaruddin_mohammad"
            },
            {
              "label": "Muhammad Luqmanul Hakiim Zaidi",
              "value": "muhammad_luqmanul_hakiim_zaidi"
            },
            {
              "label": "Azzratul Auri Azir",
              "value": "azzratul_auri_azir"
            },
            {
              "label": "Muhammad 'Irfan Azman",
              "value": "muhammad_irfan_azman"
            },
            {
              "label": "Mohd Zaki Ali",
              "value": "mohd_zaki_ali"
            },
            {
              "label": "Irma Shuhada Jhorni",
              "value": "irma_shuhada_jhorni"
            },
            {
              "label": "Muhammad Saiful Darus",
              "value": "muhammad_saiful_darus"
            },
            {
              "label": "All Trainers",
              "value": "all_trainers"
            }
          ],
          "showIf": {
            "field": "functional_assessment_workshop",
            "includes": "refer_to_trainer"
          }
        },
        {
          "name": "referred_module",
          "label": "Referred Module",
          "type": "select",
          "placeholder": "Select from Module List",
          "options": [
            {
              "label": "Sewing",
              "value": "sewing"
            },
            {
              "label": "Entrepreneurship",
              "value": "entrepreneurship"
            },
            {
              "label": "Electric / Electronic",
              "value": "electric_electronic"
            },
            {
              "label": "Hairstyling",
              "value": "hairstyling"
            },
            {
              "label": "Design",
              "value": "design"
            },
            {
              "label": "Office Administration",
              "value": "office_administration"
            },
            {
              "label": "Bakery",
              "value": "bakery"
            },
            {
              "label": "Culinary",
              "value": "culinary"
            },
            {
              "label": "Barista",
              "value": "barista"
            },
            {
              "label": "Florist",
              "value": "florist"
            },
            {
              "label": "Urban Farming",
              "value": "urban_farming"
            },
            {
              "label": "Pre-Vocational",
              "value": "pre_vocational"
            },
            {
              "label": "Initial / Screening Assessment",
              "value": "initial_screening_assessment"
            }
          ],
          "showIf": {
            "field": "functional_assessment_workshop",
            "includes": "refer_to_module"
          }
        }
      ]
    }
  ]
}

export { CONSENT, SUBJECTIVE, OBJECTIVE, ASSESSMENT, PLAN }