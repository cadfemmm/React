const SCHEMA = {
  "title": "Sexual Assessment",
  "sections": [
    {
      "title": null,
      "fields": [
        {
          "type": "radio",
          "name": "sexual_issue",
          "label": "Sexual issue",
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
          "name": "onset_erectile_dysfunction",
          "label": "Onset of Erectile dysfunction",
          "options": [
            {
              "label": "Acute",
              "value": "acute"
            },
            {
              "label": "Gradual",
              "value": "gradual"
            }
          ],
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "lack_of_libido",
          "label": "Lack of libido",
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
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "assessment-launcher",
          "name": "ehs_assessment",
          "label": "Rigidity of erection",
          "options": [
            {
              "label": "EHS score",
              "value": "ehs"
            }
          ],
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "input",
          "name": "ehs_score_label",
          "label": "Selected EHS score",
          "readOnly": true,
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes",
            "and": {
              "field": "ehs_score",
              "exists": true
            }
          }
        },
        {
          "type": "input",
          "name": "duration_of_sexual_stimulation",
          "label": "Duration of sexual stimulation",
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "difficulty_ejaculation_orgasm",
          "label": "Difficulty with ejaculation/orgasm",
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
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "frequency_sexual_intercourse",
          "label": "Frequency of sexual intercourse",
          "labelAbove": true,
          "options": [
            {
              "label": "Weekly",
              "value": "weekly"
            },
            {
              "label": "Monthly",
              "value": "monthly"
            },
            {
              "label": "Once every 3 months",
              "value": "every_3_months"
            },
            {
              "label": "Once every 6 months",
              "value": "every_6_months"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ],
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "input",
          "name": "frequency_sexual_intercourse_other",
          "label": "Frequency of sexual intercourse (Specify)",
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes",
            "and": {
              "field": "frequency_sexual_intercourse",
              "equals": "others"
            }
          }
        },
        {
          "type": "radio",
          "name": "absence_early_morning_erection",
          "label": "Absence of early morning erection",
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
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "checkbox-group",
          "name": "past_medical_surgical_history",
          "label": "Past medical/surgical history",
          "options": [
            {
              "label": "Previous sexual dysfunction",
              "value": "previous_sexual_dysfunction"
            },
            {
              "label": "Cardiovascular disease",
              "value": "cardiovascular_disease"
            },
            {
              "label": "Metabolic syndrome",
              "value": "metabolic_syndrome"
            },
            {
              "label": "Pelvic surgery",
              "value": "pelvic_surgery"
            }
          ],
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "checkbox-group",
          "name": "medication_history",
          "label": "Medication history",
          "options": [
            {
              "label": "Antihypertensives",
              "value": "antihypertensives"
            },
            {
              "label": "Antidepressants",
              "value": "antidepressants"
            },
            {
              "label": "Antipsychotics",
              "value": "antipsychotics"
            },
            {
              "label": "Anticonvulsants",
              "value": "anticonvulsants"
            },
            {
              "label": "Nitrates",
              "value": "nitrates"
            },
            {
              "label": "PDE5i",
              "value": "pde5i"
            }
          ],
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "checkbox-group",
          "name": "psychiatric_history",
          "label": "Psychiatric history",
          "options": [
            {
              "label": "Current or previous psychological problems",
              "value": "psychological_problems"
            },
            {
              "label": "Cognitive factors",
              "value": "cognitive_factors"
            },
            {
              "label": "Previous trauma",
              "value": "previous_trauma"
            }
          ],
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "checkbox-group",
          "name": "social_history",
          "label": "Social history",
          "options": [
            {
              "label": "Smoking",
              "value": "smoking"
            },
            {
              "label": "Alcohol consumption",
              "value": "alcohol"
            },
            {
              "label": "Illicit drug use",
              "value": "illicit_drugs"
            },
            {
              "label": "Diet",
              "value": "diet"
            },
            {
              "label": "Exercise",
              "value": "exercise"
            }
          ],
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "subheading",
          "label": "Sexual history",
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "sexually_active",
          "label": "Sexually active",
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
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "current_sexual_partner",
          "label": "Current sexual partner(s)",
          "options": [
            {
              "label": "Same",
              "value": "same"
            },
            {
              "label": "Different",
              "value": "different"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ],
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes",
            "and": {
              "field": "sexually_active",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "input",
          "name": "current_sexual_partner_other",
          "label": "Current sexual partner(s) (Specify)",
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes",
            "and": {
              "field": "current_sexual_partner",
              "equals": "others"
            }
          }
        },
        {
          "type": "input",
          "name": "partner_perception_ed",
          "label": "Partner's perception to ED",
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes",
            "and": {
              "field": "sexually_active",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "sexual_exposure_experience",
          "label": "Sexual exposure & experience",
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
            "field": "sexual_issue",
            "equals": "Yes",
            "and": {
              "field": "sexually_active",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "plan_for_children",
          "label": "Plan for children",
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
            "field": "sexual_issue",
            "equals": "Yes",
            "and": {
              "field": "sexually_active",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "input",
          "name": "previous_method_tried",
          "label": "Previous method tried",
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes",
            "and": {
              "field": "plan_for_children",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "trial_pvs_device",
          "label": "Trial of penile vibrator stimulation device",
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
            "field": "sexual_issue",
            "equals": "Yes",
            "and": {
              "field": "__hidden__",
              "equals": "__never__"
            }
          }
        },
        {
          "type": "radio",
          "name": "venous_constriction_band",
          "label": "Venous constriction band",
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
            "field": "sexual_issue",
            "equals": "Yes",
            "and": {
              "field": "__hidden__",
              "equals": "__never__"
            }
          }
        },
        {
          "type": "radio",
          "name": "vacuum_erection_device",
          "label": "Vacuum erection device (VED)",
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
            "field": "sexual_issue",
            "equals": "Yes",
            "and": {
              "field": "__hidden__",
              "equals": "__never__"
            }
          }
        },
        {
          "type": "radio",
          "name": "intra_cavernous_injection",
          "label": "Intra-cavernous injection (ICI)",
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
            "field": "sexual_issue",
            "equals": "Yes",
            "and": {
              "field": "__hidden__",
              "equals": "__never__"
            }
          }
        },
        {
          "type": "radio",
          "name": "sperm_retrieval",
          "label": "Sperm Retrieval",
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
            "field": "sexual_issue",
            "equals": "Yes",
            "and": {
              "field": "__hidden__",
              "equals": "__never__"
            }
          }
        },
        {
          "type": "radio",
          "name": "penile_prosthesis",
          "label": "Penile prosthesis",
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
            "field": "sexual_issue",
            "equals": "Yes",
            "and": {
              "field": "__hidden__",
              "equals": "__never__"
            }
          }
        },
        {
          "type": "radio",
          "name": "male_surgery",
          "label": "Surgery",
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
            "field": "sexual_issue",
            "equals": "Yes",
            "and": {
              "field": "__hidden__",
              "equals": "__never__"
            }
          }
        },
        {
          "type": "radio",
          "name": "adverse_event_complication",
          "label": "Any adverse event/ complication",
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
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "checkbox-group",
          "name": "adverse_event_types",
          "label": "Adverse event/ complication types",
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes",
            "and": {
              "field": "adverse_event_complication",
              "equals": "Yes"
            }
          },
          "options": [
            {
              "label": "Headache, dyspepsia, dizziness, rash (due to PDE5i)",
              "value": "pde5i_events"
            },
            {
              "label": "Priapism, pain, penile bruising or swelling (due to ICI)",
              "value": "ici_events"
            },
            {
              "label": "Uncomfortable and sensation of the cold penis (due to VED)",
              "value": "ved_events"
            },
            {
              "label": "Infection, mechanical failures (due to Penile prosthesis)",
              "value": "prosthesis_events"
            },
            {
              "label": "Autonomic dysreflexia",
              "value": "autonomic_dysreflexia"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "type": "input",
          "name": "adverse_event_others_specify",
          "label": "Others (Specify)",
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes",
            "and": {
              "field": "adverse_event_types",
              "includes": "others"
            }
          }
        },
        {
          "type": "assessment-launcher",
          "name": "iief5_assessment",
          "label": "5-ITEM VERSION OF INTERNATIONAL INDEX OF ERECTILE FUNCTION (IIEF-5)",
          "options": [
            {
              "label": "IIEF-5 Questionnaire",
              "value": "iief5"
            }
          ],
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "input",
          "name": "iief5_interpretation",
          "label": "Score & Interpretation",
          "readOnly": true,
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "subheading",
          "label": "Female specific",
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "female_dyspareunia",
          "label": "Dyspareunia",
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
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "female_loss_genital_sensation",
          "label": "Loss of genital sensation",
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
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "female_vaginal_secretion",
          "label": "Vaginal secretion",
          "options": [
            {
              "label": "Same as previously",
              "value": "same"
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
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "female_difficulty_orgasm",
          "label": "Difficulty with orgasm",
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
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "female_adverse_event",
          "label": "Adverse event/ complication",
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
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "female_adverse_event_type",
          "label": "Adverse event/ complication details",
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes",
            "and": {
              "field": "female_adverse_event",
              "equals": "Yes"
            }
          },
          "options": [
            {
              "label": "Autonomic dysreflexia",
              "value": "autonomic_dysreflexia"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "type": "input",
          "name": "female_adverse_event_other_specify",
          "label": "Others (Specify)",
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes",
            "and": {
              "field": "female_adverse_event_type",
              "equals": "others"
            }
          }
        },
        {
          "type": "input",
          "name": "female_specific_specify",
          "label": "Specify",
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "subheading",
          "label": "Goals",
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "name": "sexual_goals",
          "type": "textarea",
          "placeholder": "Enter goals",
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "subheading",
          "label": "Plan",
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "checkbox-group",
          "name": "sexual_plan",
          "label": "",
          "options": [
            {
              "label": "Sexual education for patient and partner - pre & post intercourse preparation,position",
              "value": "sexual_education"
            },
            {
              "label": "Aim - erection quality : offer venous constriction band, vacuum erection device, PDE-5 inhibitor",
              "value": "aim_erection_quality"
            },
            {
              "label": "Aim - ejaculation : Penile vibrator stimulation",
              "value": "aim_ejaculation"
            },
            {
              "label": "Aim - Conceive : improve semen quality, UTI prevention, semen analysis, blood analysis for testosterone level, IUI, IVF (Fertility center)",
              "value": "aim_conceive"
            },
            {
              "label": "Lifestyle modification",
              "value": "lifestyle_modification"
            },
            {
              "label": "Psychological assessment",
              "value": "psychological_assessment"
            }
          ],
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes"
          }
        },
        {
          "type": "checkbox-group",
          "name": "lifestyle_modification_options",
          "label": "Lifestyle modification options",
          "showIf": {
            "field": "sexual_issue",
            "equals": "Yes",
            "and": {
              "field": "sexual_plan",
              "includes": "lifestyle_modification"
            }
          },
          "options": [
            {
              "label": "Stop smoking & alcohol consumption",
              "value": "stop_smoking_alcohol"
            },
            {
              "label": "Diet modification",
              "value": "diet_modification"
            }
          ]
        }
      ]
    }
  ]
}