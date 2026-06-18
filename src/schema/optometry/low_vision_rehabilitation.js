export const SCHEMA = {
  "title": "Low Vision Rehabilitation",
  "sections": [
    {
      "fields": [
        {
          "name": "case_background_sections",
          "label": "Case Background",
          "type": "textarea"
        },
        {
          "type": "subheading",
          "label": "Current LVD/s"
        },
        {
          "type": "grid-header",
          "cols": [
            "RE",
            "LE",
            "Comments"
          ]
        },
        {
          "type": "grid-row",
          "name": "current_lvd",
          "label": "Current LVD/s",
          "cols": [
            {
              "type": "single-select",
              "options": [
                {
                  "label": "Yes",
                  "value": "1"
                },
                {
                  "label": "No",
                  "value": "0"
                }
              ]
            },
            {
              "type": "single-select",
              "options": [
                {
                  "label": "Yes",
                  "value": "1"
                },
                {
                  "label": "No",
                  "value": "0"
                }
              ]
            },
            "input"
          ]
        },
        {
          "type": "grid-row",
          "name": "lvd_distance",
          "label": "Distance",
          "cols": [
            "input",
            "input",
            "input"
          ]
        },
        {
          "type": "grid-row",
          "name": "lvd_near",
          "label": "Near",
          "cols": [
            "input",
            "input",
            "input"
          ]
        },
        {
          "type": "subheading",
          "label": "Visual Acuity"
        },
        {
          "type": "grid-header",
          "cols": [
            "RE",
            "LE",
            "Comments"
          ]
        },
        {
          "type": "grid-row",
          "name": "va_distance",
          "label": "Distance",
          "cols": [
            "input",
            "input",
            "input"
          ]
        },
        {
          "type": "grid-row",
          "name": "va_near",
          "label": "Near",
          "cols": [
            "input",
            "input",
            "input"
          ]
        },
        {
          "type": "grid-row",
          "name": "visual_field_assessment",
          "label": "Visual Field Assessment",
          "cols": [
            {
              "type": "file-upload-modal"
            },
            {
              "type": "file-upload-modal"
            },
            "input"
          ]
        },
        {
          "type": "grid-row",
          "name": "contrast_sensitivity",
          "label": "Contrast Sensitivity",
          "cols": [
            "input",
            "input",
            "input"
          ]
        },
        {
          "type": "subheading",
          "label": "Refraction"
        },
        {
          "type": "grid-header",
          "cols": [
            "RE",
            "LE",
            "Comments"
          ]
        },
        {
          "type": "grid-row",
          "name": "refraction_distance",
          "label": "Distance",
          "cols": [
            "input",
            "input",
            "input"
          ]
        },
        {
          "type": "grid-row",
          "name": "refraction_near",
          "label": "Near",
          "cols": [
            "input",
            "input",
            "input"
          ]
        },
        {
          "type": "grid-row",
          "name": "magnification_needed",
          "label": "Magnification Needed",
          "cols": [
            "input",
            "input",
            "input"
          ]
        },
        {
          "type": "subheading",
          "label": "Low Vision Aid Trial"
        },
        {
          "type": "dynamic-section",
          "name": "low_vision_aid_trial",
          "fields": [
            {
              "name": "type",
              "label": "Type",
              "type": "single-select",
              "options": [
                {
                  "label": "Optical",
                  "value": "optical"
                },
                {
                  "label": "Non Optical",
                  "value": "non_optical"
                }
              ]
            },
            {
              "type": "row",
              "cols": 5,
              "fields": [
                {
                  "name": "description",
                  "label": "Description",
                  "type": "input"
                },
                {
                  "name": "dn",
                  "label": "D/N",
                  "type": "input"
                },
                {
                  "name": "rl",
                  "label": "R/L",
                  "type": "input"
                },
                {
                  "name": "va",
                  "label": "VA",
                  "type": "input"
                },
                {
                  "name": "comments",
                  "label": "Comments",
                  "type": "input"
                }
              ]
            }
          ]
        },
        {
          "name": "impressions_management_plan",
          "label": "Impression, Management & Plan",
          "type": "textarea"
        },
        {
          "name": "remarks",
          "label": "Remarks",
          "type": "textarea"
        },
        {
          "name": "low_vision_prescription",
          "label": "Low Vision Prescription",
          "type": "textarea"
        },
        {
          "name": "low_vision_followup",
          "label": "Low Vision Follow up",
          "type": "radio",
          "options": [
            {
              "label": "Yes",
              "value": "1"
            },
            {
              "label": "No",
              "value": "0"
            }
          ]
        },
        {
          "name": "low_vision_referral",
          "label": "Low Vision Referral",
          "type": "radio",
          "options": [
            {
              "label": "Yes",
              "value": "1"
            },
            {
              "label": "No",
              "value": "0"
            }
          ]
        },
        {
          "type": "button",
          "name": "save",
          "label": "Save",
          "action": "save"
        }
      ]
    }
  ]
}