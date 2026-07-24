const SCHEMA = {
  "title": "Ward-Around",
  "actions": [
    {
      "type": "back",
      "label": "Back"
    },
    {
      "type": "save",
      "label": "Save"
    }
  ],
  "sections": [
    {
      "fields": [
        {
          "type": "accordion",
          "label": "Reports",
          "defaultOpen": false,
          "children": []
        },
        {
          "name": "ward_new_issue",
          "label": "New Issue",
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
        },
        {
          "name": "ward_new_issue_domains",
          "label": "Select",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Cognitive",
              "value": "cognitive"
            },
            {
              "label": "Swallowing,Speech & Language",
              "value": "swallowing_speech_language"
            },
            {
              "label": "Visual",
              "value": "visual"
            },
            {
              "label": "Hearing",
              "value": "hearing"
            },
            {
              "label": "Cardiovascular & Respiratory System",
              "value": "cardiovascular_respiratory"
            },
            {
              "label": "Physical",
              "value": "physical"
            },
            {
              "label": "Bowel Issue",
              "value": "bowel_issue"
            },
            {
              "label": "Bladder Issue",
              "value": "bladder_issue"
            },
            {
              "label": "Sexual",
              "value": "sexual"
            },
            {
              "label": "Spasm & Spasticity",
              "value": "spasm_spasticity"
            },
            {
              "label": "Skin",
              "value": "skin"
            },
            {
              "label": "Functional",
              "value": "functional"
            }
          ],
          "showIf": {
            "field": "ward_new_issue",
            "equals": "yes"
          }
        },
        {
          "name": "current_complaints",
          "label": "Current Complaints with description",
          "type": "input",
          "placeholder": "Enter current complaints..."
        },
        {
          "type": "accordion",
          "label": "Vital Sign",
          "defaultOpen": true,
          "children": [
            {
              "type": "input",
              "name": "heart_rate",
              "label": "Heart Rate (bpm)",
              "readOnly": true,
              "placeholder": "Auto-populated"
            },
            {
              "type": "row",
              "fields": [
                {
                  "type": "input",
                  "name": "blood_pressure",
                  "label": "Blood Pressure",
                  "readOnly": true,
                  "placeholder": "Auto-populated"
                },
                {
                  "type": "radio",
                  "name": "bp_position",
                  "label": "Position",
                  "options": [
                    {
                      "label": "Lying",
                      "value": "lying"
                    },
                    {
                      "label": "Sitting",
                      "value": "sitting"
                    },
                    {
                      "label": "Standing",
                      "value": "standing"
                    }
                  ],
                  "readOnly": true
                }
              ]
            },
            {
              "type": "row",
              "fields": [
                {
                  "type": "input",
                  "name": "respiratory_rate",
                  "label": "Respiratory Rate",
                  "readOnly": true,
                  "placeholder": "Auto-populated"
                },
                {
                  "type": "input",
                  "name": "spo2",
                  "label": "SpO2 (%)",
                  "readOnly": true,
                  "placeholder": "Auto-populated"
                },
                {
                  "type": "input",
                  "name": "temperature",
                  "label": "Temperature (°C)",
                  "readOnly": true,
                  "placeholder": "Auto-populated"
                }
              ]
            }
          ]
        },
        {
          "name": "physical_examination",
          "label": "Physical Examination",
          "type": "input",
          "placeholder": "Enter physical examination details..."
        },
        {
          "name": "plan",
          "label": "Plan",
          "type": "textarea",
          "placeholder": "Enter plan..."
        }
      ]
    }
  ]
}