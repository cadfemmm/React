const Plan_schema = {
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
          "name": "referred_module_functional",
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