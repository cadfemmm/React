export const SCHEMA = {
  "title": "Refraction Assessment",
  "sections": [
    {
      "fields": [
        {
          "name": "refraction_sections",
          "type": "checkbox-group",
          "options": [
            { "label": "Auto-Refractor", "value": "auto_refractor" },
            { "label": "Keratometry", "value": "keratometry" },
            { "label": "Retinoscopy", "value": "retinoscopy" },
            { "label": "Subjective Refraction", "value": "subjective_refraction" },
            { "label": "Final Prescription", "value": "final_prescription" }
          ]
        },
        {
          "type": "subheading",
          "label": "Auto-Refractor",
          "showIf": { "field": "refraction_sections", "includes": "auto_refractor" }
        },
        {
          "type": "row",
          "fields": [
            {
              "type": "attach-file",
              "name": "auto_refractor_file_right",
              "label": "Auto-refractor Right Eye",
              "accept": "image/*,.pdf"
            },
            {
              "type": "attach-file",
              "name": "auto_refractor_file_left",
              "label": "Auto-refractor Left Eye",
              "accept": "image/*,.pdf"
            }
          ],
          "showIf": { "field": "refraction_sections", "includes": "auto_refractor" }
        },
        {
          "type": "input",
          "name": "auto_refractor_reading",
          "label": "Auto-refractor Reading",
          "showIf": { "field": "refraction_sections", "includes": "auto_refractor" }
        },
        {
          "type": "subheading",
          "label": "Keratometry",
          "showIf": { "field": "refraction_sections", "includes": "keratometry" }
        },
        {
          "type": "row",
          "fields": [
            {
              "type": "attach-file",
              "name": "keratometry_file_right",
              "label": "Keratometry Right Eye",
              "accept": "image/*,.pdf"
            },
            {
              "type": "attach-file",
              "name": "keratometry_file_left",
              "label": "Keratometry Left Eye",
              "accept": "image/*,.pdf"
            }
          ],
          "showIf": { "field": "refraction_sections", "includes": "keratometry" }
        },
        {
          "type": "input",
          "name": "keratometry_reading",
          "label": "Keratometry Reading",
          "showIf": { "field": "refraction_sections", "includes": "keratometry" }
        },
        {
          "type": "subheading",
          "label": "Retinoscopy",
          "showIf": { "field": "refraction_sections", "includes": "retinoscopy" }
        },
        {
          "type": "row",
          "fields": [
            {
              "type": "input",
              "name": "retinoscopy_left",
              "label": "Left Eye"
            },
            {
              "type": "input",
              "name": "retinoscopy_right",
              "label": "Right Eye"
            }
          ],
          "showIf": { "field": "refraction_sections", "includes": "retinoscopy" }
        },
        {
          "type": "subheading",
          "label": "Subjective Refraction",
          "showIf": { "field": "refraction_sections", "includes": "subjective_refraction" }
        },
        {
          "type": "refraction-col",
          "name": "subjective_refraction",
          "rows": [
            { "label": "Distance", "value": "distance" },
            { "label": "ADD", "value": "add", "merge": 4 },
            { "label": "Near", "value": "near" }
          ],
          "groups": [
            {
              "label": "Right Eye",
              "columns": ["Sphere", "Cylinder", "Axis", "Prism", "Acuity"]
            },
            {
              "label": "Left Eye",
              "columns": ["Sphere", "Cylinder", "Axis", "Prism", "Acuity"]
            },
            {
              "label": "Pupil",
              "columns": ["Distance", "Height"]
            }
          ],
          "showIf": { "field": "refraction_sections", "includes": "subjective_refraction" }
        },
        {
          "type": "subheading",
          "label": "Final Prescription",
          "showIf": { "field": "refraction_sections", "includes": "final_prescription" }
        },
        {
          "type": "refraction-col",
          "name": "final_prescription",
          "rows": [
            { "label": "Distance", "value": "distance" },
            { "label": "ADD", "value": "add", "merge": 4 },
            { "label": "Near", "value": "near" }
          ],
          "groups": [
            {
              "label": "Right Eye",
              "columns": ["Sphere", "Cylinder", "Axis", "Prism", "Acuity"]
            },
            {
              "label": "Left Eye",
              "columns": ["Sphere", "Cylinder", "Axis", "Prism", "Acuity"]
            },
            {
              "label": "Pupil",
              "columns": ["Distance", "Height"]
            }
          ],
          "showIf": { "field": "refraction_sections", "includes": "final_prescription" }
        },
        {
          "type": "input",
          "name": "bcva_category",
          "label": "Best Corrected Visual Acuity (BCVA) – Vision Category"
        },
        {
          "type": "input",
          "name": "refraction_remark",
          "label": "Remark"
        }
      ]
    }
  ]
};
