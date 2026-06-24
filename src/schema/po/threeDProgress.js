const SUBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "name": "complaint",
          "label": "Chief Complaint",
          "type": "input",
          "placeholder": "Therapist assessment..."
        },
        {
          "name": "history_of_present_illness",
          "label": "History of Present Illness",
          "type": "input"
        },
        {
          "name": "case_overview",
          "label": "Case Overview",
          "type": "input",
          "rows": 5,
          "placeholder": "Start with objective / strategies / progress summary"
        },
        {
          "name": "session_for",
          "label": "Session For",
          "type": "radio",
          "options": [
            {
              "label": "3D Scanning",
              "value": "3d_scanning"
            },
            {
              "label": "Modification",
              "value": "modification"
            },
            {
              "label": "Adjustment",
              "value": "adjustment"
            },
            {
              "label": "Training",
              "value": "training"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "session_type",
          "label": "Session Type",
          "type": "radio",
          "options": [
            {
              "label": "Centre-based",
              "value": "centre_based"
            },
            {
              "label": "Home-based",
              "value": "home_based"
            },
            {
              "label": "Tele-rehab",
              "value": "tele_rehab"
            }
          ]
        },
        {
          "name": "new_complaint",
          "label": "New Complaint",
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
          "name": "pain_during_session",
          "label": "Pain During Session",
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
          "name": "pain_score",
          "label": "Pain Score",
          "type": "scale-slider",
          "min": 0,
          "max": 10,
          "ranges": [
            {
              "min": 0,
              "max": 3,
              "label": "Mild",
              "color": "#22c55e"
            },
            {
              "min": 4,
              "max": 7,
              "label": "Moderate",
              "color": "#facc15"
            },
            {
              "min": 8,
              "max": 10,
              "label": "Severe",
              "color": "#ef4444"
            }
          ],
          "showValue": true
        },
        {
          "name": "adverse_reaction",
          "label": "Adverse Reaction",
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
          "name": "adverse_reaction_details",
          "label": "Adverse Reaction Details",
          "type": "input",
          "rows": 4,
          "showIf": {
            "field": "adverse_reaction",
            "equals": "yes"
          }
        },
        {
          "name": "session_number",
          "label": "Session Number",
          "type": "input",
          "readOnly": true
        },
        {
          "name": "remarks",
          "label": "Remarks",
          "type": "input",
          "rows": 4
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
          "name": "modalities_equipment",
          "label": "Modalities / Equipment",
          "type": "checkbox-group",
          "options": [
            {
              "label": "3D Printer",
              "value": "3d_printer"
            },
            {
              "label": "3D Scanner",
              "value": "3d_scanner"
            },
            {
              "label": "Parallel Bar",
              "value": "parallel_bar"
            }
          ]
        },
        {
          "name": "observation_during_treatment",
          "label": "Observation During Treatment",
          "type": "input",
          "rows": 4
        },
        {
          "name": "tolerance",
          "label": "Tolerance",
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
              "label": "Poor",
              "value": "poor"
            }
          ]
        },
        {
          "name": "assistance_level",
          "label": "Assistance Level",
          "type": "single-select",
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
              "label": "Min Assist",
              "value": "min_assist"
            },
            {
              "label": "Mod Assist",
              "value": "mod_assist"
            },
            {
              "label": "Max Assist",
              "value": "max_assist"
            },
            {
              "label": "Dependent",
              "value": "dependent"
            }
          ]
        },
        {
          "name": "distance_repetition",
          "label": "Distance / Repetition",
          "type": "input"
        },
        {
          "name": "skin_stump_check",
          "label": "Skin / Stump Check",
          "type": "input",
          "rows": 3
        },
        {
          "name": "remarks",
          "label": "Remarks",
          "type": "input",
          "rows": 4
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
          "name": "assessment_notes",
          "label": "Clinical Impression / Notes",
          "type": "input",
          "placeholder": "Therapist assessment..."
        },
        {
          "name": "response_to_intervention",
          "label": "Response to Intervention",
          "type": "input",
          "rows": 4
        },
        {
          "name": "progression_status",
          "label": "Progression Status",
          "type": "radio",
          "options": [
            {
              "label": "Improved",
              "value": "improved"
            },
            {
              "label": "Static",
              "value": "static"
            },
            {
              "label": "Reduced",
              "value": "reduced"
            }
          ]
        },
        {
          "name": "remarks",
          "label": "Remarks",
          "type": "input",
          "rows": 4
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
          "label": "Short-Term Goals (2–4 weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "short_term_goals"
        },
        {
          "type": "subheading",
          "label": "Long-Term Goals (6–12 weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "long_term_goals"
        },
        {
          "type": "input",
          "label": "Plan",
          "name": "plan"
        },
        {
          "name": "modalities",
          "label": "Modalities",
          "type": "checkbox-group",
          "options": [
            {
              "label": "3D Printer",
              "value": "3d_printer"
            },
            {
              "label": "3D Scanner",
              "value": "3d_scanner"
            },
            {
              "label": "Parallel Bar",
              "value": "parallel_bar"
            }
          ]
        },
        {
          "name": "next_appointment",
          "label": "Date & Time",
          "type": "date"
        },
        {
          "name": "inventory_item",
          "label": "Item",
          "type": "single-select",
          "options": [
            {
              "label": "3D Printed Nail Clipper",
              "value": "3d_printed_nail_clipper"
            },
            {
              "label": "3D Printed Hand Brace",
              "value": "3d_printed_hand_brace"
            },
            {
              "label": "3D Printed Knee Brace",
              "value": "3d_printed_knee_brace"
            },
            {
              "label": "3D Printed AFO",
              "value": "3d_printed_afo"
            },
            {
              "label": "3D Printed Prosthetic Socket",
              "value": "3d_printed_prosthetic_socket"
            },
            {
              "label": "3D Printed Assistive Device",
              "value": "3d_printed_assistive_device"
            }
          ]
        },
        {
          "name": "quantity",
          "label": "Quantity (pcs)",
          "type": "input"
        },
        {
          "name": "others",
          "label": "Others",
          "type": "input",
          "rows": 3
        },
        {
          "name": "comment",
          "label": "Comment",
          "type": "input",
          "rows": 4
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
