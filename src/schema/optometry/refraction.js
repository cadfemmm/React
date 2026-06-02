const SCHEMA = {
  "title": "Refraction Assessment",
  "sections": [
    {
      "fields": [
        {
          "name": "refraction_sections",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Auto-Refractor",
              "value": "auto_refractor_file"
            },
            {
              "label": "Keratometry",
              "value": "keratometry_file"
            },
            {
              "label": "Retinoscopy",
              "value": "retinoscopy"
            },
            {
              "label": "Subjective Refraction",
              "value": "subjective_refraction"
            },
            {
              "label": "Final Prescription",
              "value": "final_prescription"
            }
          ]
        },
        {
          "type": "row",
          "fields": [
            {
              "type": "attach-file",
              "label": "Auto-refractor Right Eye",
              "name": "auto_refractor_file"
            },
            {
              "type": "attach-file",
              "label": "Auto-refractor Left Eye",
              "name": "keratometry_reading_file"
            }
          ],
          "showIf": {
            "field": "refraction_sections",
            "includes": "auto_refractor_file"
          }
        },
        {
          "type": "input",
          "name": "auto_refractor",
          "label": "Auto-refractor",
          "showIf": {
            "field": "refraction_sections",
            "includes": "auto_refractor_file"
          }
        },
        {
          "type": "row",
          "fields": [
            {
              "type": "attach-file",
              "label": "Keratometry Right Eye",
              "name": "keratometry_file_right"
            },
            {
              "type": "attach-file",
              "label": "Keratometry Left Eye",
              "name": "keratometry_file_left"
            }
          ],
          "showIf": {
            "field": "refraction_sections",
            "includes": "keratometry_file"
          }
        },
        {
          "type": "input",
          "name": "keratometry_reading",
          "label": "Keratometry Reading",
          "showIf": {
            "field": "refraction_sections",
            "includes": "keratometry_file"
          }
        },
        {
          "type": "input",
          "name": "retinoscopy",
          "label": "Retinoscopy",
          "showIf": {
            "field": "refraction_sections",
            "includes": "retinoscopy"
          }
        },
        {
          "type": "subheading",
          "label": "Subjective Refraction",
          "showIf": {
            "field": "binocular_examination_sections",
            "includes": "general_examination"
          }
        },
        {
          "type": "refraction-table",
          "name": "subjective_refraction",
          "columns": [
            "Sphere",
            "Cylinder",
            "Axis",
            "Prism",
            "Visual Acuity"
          ],
          "extraColumns": [
            "Pupil Distance",
            "Pupil Height"
          ],
          "rows": [
            {
              "label": "Distance",
              "value": "distance"
            },
            {
              "label": "ADD",
              "value": "add",
              "merge": 4
            },
            {
              "label": "Near",
              "value": "near"
            }
          ],
          "showIf": {
            "field": "binocular_examination_sections",
            "includes": "general_examination"
          }
        },
        {
          "type": "subheading",
          "label": "Final Prescription",
          "showIf": {
            "field": "refraction_sections",
            "includes": "final_prescription"
          }
        },
        {
          "type": "refraction-col",
          "name": "final_refraction",
          "rows": [
            {
              "label": "Distance",
              "value": "distance"
            },
            {
              "label": "ADD",
              "value": "add",
              "merge": 4
            },
            {
              "label": "Near",
              "value": "near"
            }
          ],
          "groups": [
            {
              "label": "Right Eye",
              "columns": [
                "Sphere",
                "Cylinder",
                "Axis",
                "Prism",
                "Acuity"
              ]
            },
            {
              "label": "Left Eye",
              "columns": [
                "Sphere",
                "Cylinder",
                "Axis",
                "Prism",
                "Acuity"
              ]
            },
            {
              "label": "Pupil",
              "columns": [
                "Distance",
                "Height"
              ]
            }
          ]
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