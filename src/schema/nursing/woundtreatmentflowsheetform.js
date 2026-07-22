 const WOUND_CHART_SCHEMA = {
  "title": "",
  "sections": [
    {
      "title": "Wound location (describe or mark area):",
      "fields": [
        {
          "name": "wound_location_notes",
          "label": "",
          "type": "textarea",
          "placeholder": "Describe location or reference"
        }
      ]
    },
    {
      "title": "Wound Measurements in cm",
      "fields": [
        {
          "type": "row",
          "fields": [
            {
              "name": "wound_length",
              "label": "Length",
              "type": "input",
              "placeholder": "cm"
            },
            {
              "name": "wound_width",
              "label": "Width",
              "type": "input",
              "placeholder": "cm"
            },
            {
              "name": "wound_depth",
              "label": "Depth",
              "type": "input",
              "placeholder": "cm"
            }
          ]
        },
        {
          "type": "info-text",
          "text": "Location corresponds to face of clock with patient's head at 12 o'clock position."
        }
      ]
    },
    {
      "title": "Sinus Tracts & Undermining",
      "fields": [
        {
          "type": "row",
          "fields": [
            {
              "name": "sinus_tract_1_depth",
              "label": "Sinus Tract #1 Depth (cm)",
              "type": "input"
            },
            {
              "name": "sinus_tract_1_location",
              "label": "Location (o'clock)",
              "type": "input",
              "placeholder": "e.g. 3"
            }
          ]
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "sinus_tract_2_depth",
              "label": "Sinus Tract #2 Depth (cm)",
              "type": "input"
            },
            {
              "name": "sinus_tract_2_location",
              "label": "Location (o'clock)",
              "type": "input",
              "placeholder": "e.g. 3"
            }
          ]
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "undermining_1_depth",
              "label": "Undermining #1 Depth (cm)",
              "type": "input"
            },
            {
              "name": "undermining_1_location",
              "label": "Location (o'clock)",
              "type": "input",
              "placeholder": "e.g. 3"
            }
          ]
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "undermining_2_depth",
              "label": "Undermining #2 Depth (cm)",
              "type": "input"
            },
            {
              "name": "undermining_2_location",
              "label": "Location (o'clock)",
              "type": "input",
              "placeholder": "e.g. 3"
            }
          ]
        }
      ]
    },
    {
      "title": "Wound Bed:",
      "fields": [
        {
          "type": "info-text",
          "text": "Total % must = 100%"
        },
        {
          "name": "wound_bed_pink_red",
          "label": "% Pink/Red",
          "type": "input",
          "placeholder": "%"
        },
        {
          "name": "wound_bed_granulation",
          "label": "% Granulation (red pebbly)",
          "type": "input",
          "placeholder": "%"
        },
        {
          "name": "wound_bed_slough",
          "label": "% Slough",
          "type": "input",
          "placeholder": "%"
        },
        {
          "name": "wound_bed_eschar",
          "label": "% Eschar",
          "type": "input",
          "placeholder": "%"
        },
        {
          "name": "wound_bed_foreign_body",
          "label": "% Foreign body (sutures, mesh, hardware)",
          "type": "input",
          "placeholder": "%"
        },
        {
          "name": "wound_bed_underlying_structures",
          "label": "% Underlying structures (fascia, tendon, bone)",
          "type": "input",
          "placeholder": "%"
        },
        {
          "name": "wound_bed_not_visible",
          "label": "% Not visible",
          "type": "input",
          "placeholder": "%"
        },
        {
          "name": "wound_bed_other",
          "label": "% Other:",
          "type": "input",
          "placeholder": "%"
        }
      ]
    },
    {
      "title": "Exudate Amount",
      "fields": [
        {
          "type": "info-text",
          "text": "Select one"
        },
        {
          "name": "exudate_amount",
          "label": "",
          "type": "radio",
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "Scant/small",
              "value": "scant_small"
            },
            {
              "label": "Moderate",
              "value": "moderate"
            },
            {
              "label": "Large/copious",
              "value": "large_copious"
            }
          ]
        }
      ]
    },
    {
      "title": "Initials",
      "fields": [
        {
          "name": "wound_chart_initials",
          "label": "",
          "type": "input",
          "placeholder": "Initials"
        }
      ]
    }
  ]
}


  const SCHEMA = {
  "title": "WOUND TREATMENT FLOWSHEET",
  "sections": [
    {
      "fields": [
        {
          "name": "wound_date_of_onset",
          "label": "Wound Date of Onset",
          "type": "date"
        }
      ]
    },
    {
      "title": "Goal of Care:",
      "fields": [
        {
          "name": "goal_of_care",
          "label": "",
          "type": "checkbox-group",
          "inlineWithLabel": true,
          "options": [
            {
              "label": "To Heal",
              "value": "to_heal"
            },
            {
              "label": "To Maintain",
              "value": "to_maintain"
            },
            {
              "label": "To Monitor / Manage",
              "value": "to_monitor_manage"
            }
          ]
        }
      ]
    },
    {
      "title": "Wound Type/Etiology (if known):",
      "fields": [
        {
          "name": "wound_type",
          "label": "",
          "type": "checkbox-group",
          "inlineWithLabel": true,
          "options": [
            {
              "label": "Pressure Injury",
              "value": "pressure_injury"
            },
            {
              "label": "Venous Insufficiency",
              "value": "venous_insufficiency"
            },
            {
              "label": "Arterial Insufficiency",
              "value": "arterial_insufficiency"
            },
            {
              "label": "Diabetic Ulcer",
              "value": "diabetic_ulcer"
            },
            {
              "label": "Surgical 2º Intention",
              "value": "surgical_2_intention"
            },
            {
              "label": "Skin Tear",
              "value": "skin_tear"
            },
            {
              "label": "IAD (Incontinent Associated Dermatitis)",
              "value": "iad"
            },
            {
              "label": "Unknown",
              "value": "unknown"
            },
            {
              "label": "Other",
              "value": "other"
            }
          ]
        },
        {
          "name": "wound_type_other",
          "label": "Other (specify):",
          "type": "input",
          "placeholder": "Specify",
          "showIf": {
            "field": "wound_type",
            "includes": "other"
          }
        }
      ]
    },
    {
      "title": "If Pressure Injury, chart stage and date. If wound deteriorates, chart new stage and date.",
      "showIf": {
        "field": "wound_type",
        "includes": "pressure_injury"
      },
      "fields": [
        {
          "name": "pressure_injury_stages",
          "label": "",
          "type": "checkbox-group",
          "inlineWithLabel": true,
          "options": [
            { "label": "Stage 1", "value": "stage_1" },
            { "label": "Stage 2", "value": "stage_2" },
            { "label": "Stage 3", "value": "stage_3" },
            { "label": "Stage 4", "value": "stage_4" },
            { "label": "Unstageable", "value": "unstageable" },
            { "label": "DTI (Deep Tissue Injury)", "value": "dti" },
            { "label": "Medical Device", "value": "medical_device" },
            { "label": "Mucosal", "value": "mucosal" }
          ]
        },
        {
          "name": "stage_1_date",
          "label": "Stage 1 (dd/mm):",
          "type": "input",
          "placeholder": "dd/mm",
          "showIf": { "field": "pressure_injury_stages", "includes": "stage_1" }
        },
        {
          "name": "stage_2_date",
          "label": "Stage 2 (dd/mm):",
          "type": "input",
          "placeholder": "dd/mm",
          "showIf": { "field": "pressure_injury_stages", "includes": "stage_2" }
        },
        {
          "name": "stage_3_date",
          "label": "Stage 3 (dd/mm):",
          "type": "input",
          "placeholder": "dd/mm",
          "showIf": { "field": "pressure_injury_stages", "includes": "stage_3" }
        },
        {
          "name": "stage_4_date",
          "label": "Stage 4 (dd/mm):",
          "type": "input",
          "placeholder": "dd/mm",
          "showIf": { "field": "pressure_injury_stages", "includes": "stage_4" }
        },
        {
          "name": "unstageable_date",
          "label": "Unstageable (dd/mm):",
          "type": "input",
          "placeholder": "dd/mm",
          "showIf": { "field": "pressure_injury_stages", "includes": "unstageable" }
        },
        {
          "name": "dti_date",
          "label": "DTI (Deep Tissue Injury) (dd/mm):",
          "type": "input",
          "placeholder": "dd/mm",
          "showIf": { "field": "pressure_injury_stages", "includes": "dti" }
        },
        {
          "name": "medical_device_date",
          "label": "Medical Device (dd/mm):",
          "type": "input",
          "placeholder": "dd/mm",
          "showIf": { "field": "pressure_injury_stages", "includes": "medical_device" }
        },
        {
          "name": "mucosal_date",
          "label": "Mucosal (dd/mm):",
          "type": "input",
          "placeholder": "dd/mm",
          "showIf": { "field": "pressure_injury_stages", "includes": "mucosal" }
        }
      ]
    }
  ]
}
