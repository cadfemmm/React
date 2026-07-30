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
  "sections": [
    {
      "fields": [
        {
          "name": "vocational_scales",
          "type": "assessment-launcher",
          "options": [
            {
              "label": "Berg Balance Scale (BBS)",
              "value": "BergBalanceScale"
            },
            {
              "label": "Montreal Cognitive Assessment (MoCA)",
              "value": "MoCAAssessment"
            },
            {
              "label": "BECKER WORK ADJUSTMENT PROFILE",
              "value": "BeckerWorkAdjustmentProfile"
            },
            {
              "label": "BTE PRIMUS RS",
              "value": "BTEAssessment"
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
          "type": "subheading",
          "label": "Physical, Cognitive and Sensory Demand"
        },
        {
          "type": "accordion",
          "name": "physical_demand_section",
          "label": "Physical Demand",
          "defaultOpen": false,
          "children": [
            {
              "type": "grid-table-flat",
              "name": "physical_demand",
              "headers": [
                "Observation/Remarks",
                "Score"
              ],
              "headerOptions": {
                "Score": [
                  "0",
                  "1",
                  "2",
                  "3",
                  "4"
                ]
              },
              "rows": [
                {
                  "key": "sitting_tolerance",
                  "label": "Sitting Tolerance"
                },
                {
                  "key": "standing_tolerance",
                  "label": "Standing Tolerance"
                },
                {
                  "key": "walking_mobility",
                  "label": "Walking & Mobility"
                },
                {
                  "key": "upper_limb_function",
                  "label": "Upper Limb Function"
                },
                {
                  "key": "hand_function",
                  "label": "Hand Function"
                },
                {
                  "key": "bilateral_coordination",
                  "label": "Bilateral Coordination"
                },
                {
                  "key": "strength_endurance",
                  "label": "Strength & Endurance"
                },
                {
                  "key": "fine_motor_skills",
                  "label": "Fine Motor Skills"
                },
                {
                  "key": "gross_motor_skills",
                  "label": "Gross Motor Skills"
                },
                {
                  "key": "safety_awareness",
                  "label": "Safety Awareness"
                }
              ]
            }
          ]
        },
        {
          "type": "accordion",
          "name": "cognitive_demand_section",
          "label": "Cognitive Demand",
          "defaultOpen": false,
          "children": [
            {
              "type": "grid-table-flat",
              "name": "cognitive_demand",
              "headers": [
                "Observation/Remarks",
                "Score"
              ],
              "headerOptions": {
                "Score": [
                  "0",
                  "1",
                  "2",
                  "3",
                  "4"
                ]
              },
              "rows": [
                {
                  "key": "attention",
                  "label": "Attention & Concentration"
                },
                {
                  "key": "understanding",
                  "label": "Understanding Instructions"
                },
                {
                  "key": "memory",
                  "label": "Memory"
                },
                {
                  "key": "problem_solving",
                  "label": "Problem Solving"
                },
                {
                  "key": "sequencing",
                  "label": "Sequencing"
                },
                {
                  "key": "learning_ability",
                  "label": "Learning Ability"
                },
                {
                  "key": "decision_making",
                  "label": "Decision Making"
                },
                {
                  "key": "time_awareness",
                  "label": "Time Awareness"
                },
                {
                  "key": "task_completion",
                  "label": "Task Completion"
                },
                {
                  "key": "adaptability",
                  "label": "Adaptability"
                }
              ]
            }
          ]
        },
        {
          "type": "accordion",
          "name": "sensory_demand_section",
          "label": "Sensory & Perceptual Demand",
          "defaultOpen": false,
          "children": [
            {
              "type": "grid-table-flat",
              "name": "sensory_demand",
              "headers": [
                "Observation/Remarks",
                "Score"
              ],
              "headerOptions": {
                "Score": [
                  "0",
                  "1",
                  "2",
                  "3",
                  "4"
                ]
              },
              "rows": [
                {
                  "key": "vision",
                  "label": "Vision"
                },
                {
                  "key": "hearing",
                  "label": "Hearing"
                },
                {
                  "key": "communication",
                  "label": "Communication"
                },
                {
                  "key": "tactile_function",
                  "label": "Tactile Function"
                },
                {
                  "key": "visual_motor",
                  "label": "Visual-Motor Coordination"
                },
                {
                  "key": "spatial_awareness",
                  "label": "Spatial Awareness"
                },
                {
                  "key": "sensory_tolerance",
                  "label": "Sensory Tolerance"
                },
                {
                  "key": "environmental_awareness",
                  "label": "Environmental Awareness"
                }
              ]
            }
          ]
        },
        {
          "type": "accordion",
          "name": "rating_scale_section",
          "label": "Rating Scale",
          "defaultOpen": false,
          "children": [
            {
              "name": "functional_rating_scale",
              "label": "Rating Scale",
              "type": "scale-slider",
              "min": 0,
              "max": 4,
              "ranges": [
                {
                  "min": 0,
                  "max": 0,
                  "label": "Unable / Full Assistance",
                  "color": "#ef4444"
                },
                {
                  "min": 1,
                  "max": 1,
                  "label": "Significant Difficulty",
                  "color": "#f97316"
                },
                {
                  "min": 2,
                  "max": 2,
                  "label": "Moderate Difficulty",
                  "color": "#facc15"
                },
                {
                  "min": 3,
                  "max": 3,
                  "label": "Mild Difficulty",
                  "color": "#84cc16"
                },
                {
                  "min": 4,
                  "max": 4,
                  "label": "Independent / Functional",
                  "color": "#22c55e"
                }
              ],
              "showValue": true
            }
          ]
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
          "name": "module_referral",
          "label": "Module Referral",
          "type": "checkbox-group",
          "options": [
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
            "field": "module_referral",
            "includes": "refer_to_trainer"
          }
        },
        {
          "name": "referred_module",
          "label": "Referred Module",
          "type": "multi-select-dropdown",
          "placeholder": "Select from Module List",
          "options": [
            {
              "label": "3D Innovation",
              "value": "3d_innovation"
            },
            {
              "label": "Art & Crafts",
              "value": "art_crafts"
            },
            {
              "label": "Automotive Technology",
              "value": "automotive_technology"
            },
            {
              "label": "Bakery",
              "value": "bakery"
            },
            {
              "label": "Barista",
              "value": "barista"
            },
            {
              "label": "Call Centre",
              "value": "call_centre"
            },
            {
              "label": "Carpentry",
              "value": "carpentry"
            },
            {
              "label": "Creative Multimedia",
              "value": "creative_multimedia"
            },
            {
              "label": "Culinary",
              "value": "culinary"
            },
            {
              "label": "Design & Printing",
              "value": "design_printing"
            },
            {
              "label": "Domestic Electrical",
              "value": "domestic_electrical"
            },
            {
              "label": "Electrical",
              "value": "electrical"
            },
            {
              "label": "Electric Vehicle (EV)",
              "value": "electric_vehicle_ev"
            },
            {
              "label": "Electronics",
              "value": "electronics"
            },
            {
              "label": "Entrepreneurship",
              "value": "entrepreneurship"
            },
            {
              "label": "Floristry",
              "value": "floristry"
            },
            {
              "label": "Graphic & Virtual Arts",
              "value": "graphic_virtual_arts"
            },
            {
              "label": "Hairstyling",
              "value": "hairstyling"
            },
            {
              "label": "Job Profiling & Readiness",
              "value": "job_profiling_readiness"
            },
            {
              "label": "Office Administration",
              "value": "office_administration"
            },
            {
              "label": "Sewing & Fashion",
              "value": "sewing_fashion"
            },
            {
              "label": "Spa & Cosmetology",
              "value": "spa_cosmetology"
            },
            {
              "label": "Urban Farming",
              "value": "urban_farming"
            },
            {
              "label": "Work Trial",
              "value": "work_trial"
            }
          ],
          "showIf": {
            "field": "module_referral",
            "includes": "refer_to_module"
          }
        }
      ]
    }
  ]
}


export { CONSENT, SUBJECTIVE, OBJECTIVE, ASSESSMENT, PLAN }