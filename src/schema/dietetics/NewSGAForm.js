const newsgaSchema = {
  "title": "Subjective Global Assessment (SGA)",
  "sections": [
    {
      "title": "Section A — Medical History",
      "fields": [
        {
          "type": "subheading",
          "label": "1. Weight Changes"
        },
        {
          "type": "input",
          "name": "overall_weight_loss_6months",
          "label": "Overall loss in past 6 months (kg)",
          "placeholder": "e.g. 3 kg"
        },
        {
          "type": "radio",
          "name": "weight_loss_percent",
          "label": "Percent change (%)",
          "options": [
            {
              "label": "< 5%",
              "value": "1"
            },
            {
              "label": "5–10%",
              "value": "2"
            },
            {
              "label": "10–20%",
              "value": "3"
            },
            {
              "label": "> 20%",
              "value": "4"
            }
          ]
        },
        {
          "type": "radio",
          "name": "weight_change_2_weeks",
          "label": "Change in last 2 weeks",
          "options": [
            {
              "label": "Increase",
              "value": "0"
            },
            {
              "label": "No Change",
              "value": "0"
            },
            {
              "label": "Decrease",
              "value": "1"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "2. Dietary Intake"
        },
        {
          "type": "radio",
          "name": "dietary_intake_overall_changes",
          "label": "Overall changes",
          "options": [
            {
              "label": "No change",
              "value": "0"
            },
            {
              "label": "Change",
              "value": "1"
            }
          ]
        },
        {
          "type": "input",
          "name": "dietary_intake_duration",
          "label": "Duration of change",
          "placeholder": "e.g. 2 weeks",
          "showIf": {
            "field": "dietary_intake_overall_changes",
            "equals": "1"
          }
        },
        {
          "type": "radio",
          "name": "dietary_intake_changes",
          "label": "Type of change",
          "showIf": {
            "field": "dietary_intake_overall_changes",
            "equals": "1"
          },
          "options": [
            {
              "label": "Soft diet / adequate intake",
              "value": "1"
            },
            {
              "label": "Full liquid diet",
              "value": "2"
            },
            {
              "label": "Hypocaloric liquid / inadequate",
              "value": "3"
            },
            {
              "label": "Minimal intake / starvation",
              "value": "4"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "3. Gastrointestinal Symptoms (> 2 weeks)"
        },
        {
          "type": "checkbox-group",
          "name": "gi_symptoms",
          "label": "GI Symptoms",
          "options": [
            {
              "label": "None",
              "value": "0"
            },
            {
              "label": "Nausea",
              "value": "1"
            },
            {
              "label": "Vomiting",
              "value": "3"
            },
            {
              "label": "Diarrhoea >5/day",
              "value": "3"
            },
            {
              "label": "Anorexia",
              "value": "3"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "4. Functional Impairment"
        },
        {
          "type": "radio",
          "name": "functional_status_overall_impainment",
          "label": "Overall impairment",
          "options": [
            {
              "label": "None (no dysfunction)",
              "value": "0"
            },
            {
              "label": "Working but reduced",
              "value": "1"
            },
            {
              "label": "Ambulatory",
              "value": "2"
            },
            {
              "label": "Bedridden",
              "value": "3"
            }
          ]
        },
        {
          "type": "radio",
          "name": "functional_status_past_2weeks",
          "label": "Change in past 2 weeks",
          "options": [
            {
              "label": "Improved",
              "value": "0"
            },
            {
              "label": "No change",
              "value": "1"
            },
            {
              "label": "Regressed",
              "value": "2"
            }
          ]
        },
        {
          "type": "input",
          "name": "medicalHistoryScore",
          "label": "Section A Score (auto-calculated)",
          "readOnly": true
        }
      ]
    },
    {
      "title": "Section B — Physical Examination",
      "fields": [
        {
          "type": "radio",
          "name": "subcutaneous_fat",
          "label": "Loss of Subcutaneous Fat",
          "options": [
            {
              "label": "Normal (0)",
              "value": "0"
            },
            {
              "label": "Mild (1)",
              "value": "1"
            },
            {
              "label": "Moderate (1)",
              "value": "1"
            },
            {
              "label": "Severe (2)",
              "value": "2"
            }
          ]
        },
        {
          "type": "radio",
          "name": "muscle_wasting",
          "label": "Muscle Wasting",
          "options": [
            {
              "label": "Normal (0)",
              "value": "0"
            },
            {
              "label": "Mild (1)",
              "value": "1"
            },
            {
              "label": "Moderate (1)",
              "value": "1"
            },
            {
              "label": "Severe (2)",
              "value": "2"
            }
          ]
        },
        {
          "type": "radio",
          "name": "edema",
          "label": "Oedema",
          "options": [
            {
              "label": "None (0)",
              "value": "0"
            },
            {
              "label": "Moderate (1)",
              "value": "1"
            },
            {
              "label": "Severe (2)",
              "value": "2"
            }
          ]
        },
        {
          "type": "radio",
          "name": "ascites",
          "label": "Ascites",
          "options": [
            {
              "label": "None (0)",
              "value": "0"
            },
            {
              "label": "Moderate (1)",
              "value": "1"
            },
            {
              "label": "Severe (2)",
              "value": "2"
            }
          ]
        },
        {
          "type": "input",
          "name": "total_sga_score",
          "label": "Total SGA Score (auto-calculated)",
          "readOnly": true
        },
        {
          "type": "input",
          "name": "interpretation",
          "label": "SGA Rating",
          "readOnly": true
        }
      ]
    }
  ]
}
