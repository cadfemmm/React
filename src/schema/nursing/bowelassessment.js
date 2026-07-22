const Bowel_schema = {
  "title": "Bowel Assessment",
  "sections": [
    {
      "title": "",
      "fields": [
        {
          "type": "heading",
          "label": "History Taking / Assessment"
        },
        {
          "type": "subheading",
          "label": "Premorbid bowel habit"
        },
        {
          "type": "radio",
          "name": "premorbid_frequency",
          "label": "Frequency of defecation",
          "labelAbove": true,
          "options": [
            {
              "label": "Once per day",
              "value": "once_per_day"
            },
            {
              "label": "Twice per day",
              "value": "twice_per_day"
            },
            {
              "label": "Once every 2 days",
              "value": "once_every_2_days"
            },
            {
              "label": "Once every few days",
              "value": "once_every_few_days"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "type": "input",
          "name": "premorbid_frequency_other",
          "label": "Frequency of defecation (Specify)",
          "showIf": {
            "field": "premorbid_frequency",
            "equals": "others"
          }
        },
        {
          "type": "radio",
          "name": "premorbid_medication_use",
          "label": "Medication use",
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
          "name": "premorbid_medication_use_specify",
          "label": "Medication use (Specify)",
          "showIf": {
            "field": "premorbid_medication_use",
            "equals": "Yes"
          }
        },
        {
          "type": "subheading",
          "label": "Current bowel status"
        },
        {
          "type": "radio",
          "name": "current_frequency",
          "label": "Frequency of defecation",
          "labelAbove": true,
          "options": [
            {
              "label": "Once per day",
              "value": "once_per_day"
            },
            {
              "label": "Twice per day",
              "value": "twice_per_day"
            },
            {
              "label": "Once every 2 days",
              "value": "once_every_2_days"
            },
            {
              "label": "Once every few days",
              "value": "once_every_few_days"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "type": "input",
          "name": "current_frequency_other",
          "label": "Frequency of defecation (Specify)",
          "showIf": {
            "field": "current_frequency",
            "equals": "others"
          }
        },
        {
          "type": "radio",
          "name": "sensate",
          "label": "Able to sensate",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            },
            {
              "label": "Unsure",
              "value": "Unsure"
            }
          ]
        },
        {
          "type": "radio",
          "name": "control",
          "label": "Able to control/ hold",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            },
            {
              "label": "Unsure",
              "value": "Unsure"
            }
          ]
        },
        {
          "type": "assessment-launcher",
          "name": "stool_consistency_assessment",
          "label": "Stool consistency",
          "options": [
            {
              "label": "Bristol Chart",
              "value": "bristol_chart"
            }
          ]
        },
        {
          "type": "row",
          "fields": [
            {
              "type": "input",
              "name": "bristol_chart_type_label",
              "label": "Selected Stool Type",
              "readOnly": true,
              "showIf": {
                "field": "bristol_chart_type",
                "exists": true
              }
            },
            {
              "type": "input",
              "name": "bristol_chart_interpretation",
              "label": "Selected Interpretation",
              "readOnly": true,
              "showIf": {
                "field": "bristol_chart_type",
                "exists": true
              }
            }
          ]
        },
        {
          "type": "radio",
          "name": "stool_volume",
          "label": "Stool volume",
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
              "label": "Large amount",
              "value": "large_amount"
            }
          ]
        },
        {
          "type": "radio",
          "name": "medication_for_defecation",
          "label": "Medication use for defecation",
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
          "name": "medication_for_defecation_specify",
          "label": "Medication use for defecation (Specify)",
          "showIf": {
            "field": "medication_for_defecation",
            "equals": "Yes"
          }
        },
        {
          "type": "radio",
          "name": "manual_evacuation",
          "label": "Manual evacuation",
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
          "name": "digital_rectal_stimulation",
          "label": "Digital Rectal Stimulation",
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
          "name": "other_modes_of_defecation",
          "label": "Other modes of defecation",
          "options": [
            {
              "label": "Colostomy",
              "value": "colostomy"
            },
            {
              "label": "Transanal irrigation",
              "value": "transanal_irrigation"
            },
            {
              "label": "Malone antegrade continence enema (MACE)",
              "value": "mace"
            }
          ]
        },
        {
          "type": "radio",
          "name": "complication",
          "label": "Complication",
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
          "name": "complication_types",
          "label": "Complication types",
          "showIf": {
            "field": "complication",
            "equals": "Yes"
          },
          "options": [
            {
              "label": "Bowel accident",
              "value": "bowel_accident"
            },
            {
              "label": "Constipation",
              "value": "constipation"
            },
            {
              "label": "Anorexia",
              "value": "anorexia"
            },
            {
              "label": "Nausea & vomiting",
              "value": "nausea_vomiting"
            },
            {
              "label": "Abdominal distension",
              "value": "abdominal_distension"
            },
            {
              "label": "Autonomic dysreflexia",
              "value": "autonomic_dysreflexia"
            },
            {
              "label": "Skin breakdown",
              "value": "skin_breakdown"
            },
            {
              "label": "Haemorrhoids",
              "value": "haemorrhoids"
            },
            {
              "label": "Fistula",
              "value": "fistula"
            },
            {
              "label": "Anal abscess",
              "value": "anal_abscess"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "type": "input",
          "name": "complication_specify",
          "label": "Specify",
          "showIf": {
            "field": "complication",
            "equals": "Yes",
            "and": {
              "or": [
                {
                  "field": "complication_types",
                  "includes": "bowel_accident"
                },
                {
                  "field": "complication_types",
                  "includes": "constipation"
                },
                {
                  "field": "complication_types",
                  "includes": "anorexia"
                },
                {
                  "field": "complication_types",
                  "includes": "nausea_vomiting"
                },
                {
                  "field": "complication_types",
                  "includes": "abdominal_distension"
                },
                {
                  "field": "complication_types",
                  "includes": "autonomic_dysreflexia"
                },
                {
                  "field": "complication_types",
                  "includes": "skin_breakdown"
                },
                {
                  "field": "complication_types",
                  "includes": "haemorrhoids"
                },
                {
                  "field": "complication_types",
                  "includes": "fistula"
                },
                {
                  "field": "complication_types",
                  "includes": "anal_abscess"
                },
                {
                  "field": "complication_types",
                  "includes": "others"
                }
              ]
            }
          }
        },
        {
          "type": "radio",
          "name": "equipment_usage",
          "label": "Equipment usage: commode chair/wheelchair",
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
          "type": "subheading",
          "label": "Per rectal (PR) examination"
        },
        {
          "type": "radio",
          "name": "vac",
          "label": "VAC",
          "options": [
            {
              "label": "Absent",
              "value": "Absent"
            },
            {
              "label": "Present",
              "value": "Present"
            }
          ]
        },
        {
          "type": "radio",
          "name": "dap",
          "label": "DAP",
          "options": [
            {
              "label": "Absent",
              "value": "Absent"
            },
            {
              "label": "Present",
              "value": "Present"
            }
          ]
        },
        {
          "type": "radio",
          "name": "bcr",
          "label": "BCR",
          "options": [
            {
              "label": "Absent",
              "value": "Absent"
            },
            {
              "label": "Present",
              "value": "Present"
            }
          ]
        },
        {
          "type": "radio",
          "name": "anal_tone",
          "label": "Anal tone",
          "options": [
            {
              "label": "Lax",
              "value": "lax"
            },
            {
              "label": "Intact",
              "value": "intact"
            }
          ]
        },
        {
          "type": "textarea",
          "name": "pr_others",
          "label": "Others"
        },
        {
          "type": "info-text",
          "heading": "Interpretation",
          "text": "0 - No problem: Independent bowel control",
          "showIf": {
            "field": "qualifier_scale",
            "equals": "0"
          }
        },
        {
          "type": "info-text",
          "heading": "Interpretation",
          "text": "1 - Mild problem: Occasional constipation / accident",
          "showIf": {
            "field": "qualifier_scale",
            "equals": "1"
          }
        },
        {
          "type": "info-text",
          "heading": "Interpretation",
          "text": "2 - Moderate problem: Needs cues / occasional suppository",
          "showIf": {
            "field": "qualifier_scale",
            "equals": "2"
          }
        },
        {
          "type": "info-text",
          "heading": "Interpretation",
          "text": "3 - Severe problem: Requires manual evacuation / regular suppository",
          "showIf": {
            "field": "qualifier_scale",
            "equals": "3"
          }
        },
        {
          "type": "info-text",
          "heading": "Interpretation",
          "text": "4 - Complete problem: No voluntary control / total dependent",
          "showIf": {
            "field": "qualifier_scale",
            "equals": "4"
          }
        },
        {
          "type": "subheading",
          "label": "Goals"
        },
        {
          "name": "bowel_goals",
          "type": "textarea",
          "placeholder": "Enter goals"
        },
        {
          "type": "heading",
          "label": "Plan",
          "showIf": {
            "field": "__department",
            "equals": "doctors"
          }
        },
        {
          "type": "checkbox-group",
          "name": "plan_options",
          "showIf": {
            "field": "__department",
            "equals": "doctors"
          },
          "label": "",
          "options": [
            {
              "label": "Imaging: abdominal x ray",
              "value": "imaging_abdominal_xray"
            },
            {
              "label": "Diet and fluid management",
              "value": "diet_fluid_management"
            },
            {
              "label": "Prescription of Oral or rectal medication or both",
              "value": "prescription_oral_rectal"
            },
            {
              "label": "Monitor bristol chart and Input-Output chart",
              "value": "monitor_bristol_io"
            },
            {
              "label": "Education on bowel care/ carer training",
              "value": "education_bowel_care"
            },
            {
              "label": "For independent bowel evacuation in toilet",
              "value": "independent_bowel_evacuation"
            }
          ]
        },
        {
          "type": "checkbox-group",
          "name": "education_bowel_care_options",
          "label": "Education on bowel care/ carer training options",
          "showIf": {
            "field": "plan_options",
            "includes": "education_bowel_care"
          },
          "options": [
            {
              "label": "Abdominal massage",
              "value": "abdominal_massage"
            },
            {
              "label": "Digital Rectal Stimulation",
              "value": "digital_rectal_stimulation"
            },
            {
              "label": "Manual evacuation",
              "value": "manual_evacuation"
            },
            {
              "label": "Suppository medication or Enema insertion technique",
              "value": "suppository_or_enema"
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
                "includes": "imaging_abdominal_xray"
              },
              {
                "field": "plan_options",
                "includes": "diet_fluid_management"
              },
              {
                "field": "plan_options",
                "includes": "prescription_oral_rectal"
              },
              {
                "field": "plan_options",
                "includes": "monitor_bristol_io"
              },
              {
                "field": "plan_options",
                "includes": "education_bowel_care"
              },
              {
                "field": "plan_options",
                "includes": "independent_bowel_evacuation"
              }
            ]
          }
        }
      ]
    }
  ]
}