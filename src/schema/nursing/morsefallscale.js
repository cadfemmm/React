const MORSE_FALL_SCALE_SCHEMA = {
  "title": "Morse Fall Scale",
  "sections": [
    {
      "fields": [
        {
          "name": "history_of_falling",
          "label": "1. History of falling; immediate or within 3 months",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        },
        {
          "name": "secondary_diagnosis",
          "label": "2. Secondary diagnosis",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        },
        {
          "name": "ambulatory_aid",
          "label": "3. Ambulatory aid",
          "type": "radio",
          "options": [
            {
              "label": "Bed rest/nurse assist",
              "value": "bed_rest_nurse_assist"
            },
            {
              "label": "Crutches/cane/walker",
              "value": "crutches_cane_walker"
            },
            {
              "label": "Furniture",
              "value": "furniture"
            }
          ]
        },
        {
          "name": "iv_heparin_lock",
          "label": "4. IV/Heparin Lock",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        },
        {
          "name": "gait_transferring",
          "label": "5. Gait/Transferring",
          "type": "radio",
          "options": [
            {
              "label": "Normal/bedrest/immobile",
              "value": "normal_bedrest_immobile"
            },
            {
              "label": "Weak",
              "value": "weak"
            },
            {
              "label": "Impaired",
              "value": "impaired"
            }
          ]
        },
        {
          "name": "mental_status",
          "label": "6. Mental status",
          "type": "radio",
          "options": [
            {
              "label": "Oriented to own ability",
              "value": "oriented"
            },
            {
              "label": "Forgets limitations",
              "value": "forgets_limitations"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Score Summary"
        },
        {
          "name": "total_score_display",
          "label": "Total MFS Score",
          "type": "score-box"
        },
        {
          "name": "risk_level_display",
          "label": "Risk Level",
          "type": "score-box"
        },
        {
          "name": "recommended_action_display",
          "label": "Recommended Action",
          "type": "score-box"
        }
      ]
    }
  ]
}