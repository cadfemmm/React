const PUSH_TOOL_SCHEMA = {
  "title": "PUSH Tool – Pressure Ulcer Scale for Healing",
  "fields": [
    {
      "name": "push_records",
      "type": "dynamic-table",
      "minRows": 3,
      "columns": [
        {
          "key": "date",
          "label": "Date",
          "type": "date"
        },
        {
          "key": "time",
          "label": "Time",
          "type": "time"
        },
        {
          "key": "length",
          "label": "Length (cm)",
          "type": "number",
          "min": 0,
          "step": 0.1
        },
        {
          "key": "width",
          "label": "Width (cm)",
          "type": "number",
          "min": 0,
          "step": 0.1
        },
        {
          "key": "area",
          "label": "Length × Width (cm²)",
          "type": "computed"
        },
        {
          "key": "exudate",
          "label": "Exudate Amount",
          "type": "single-select",
          "options": [
            {
              "label": "None (0)",
              "value": "none",
              "score": 0
            },
            {
              "label": "Light (1)",
              "value": "light",
              "score": 1
            },
            {
              "label": "Moderate (2)",
              "value": "moderate",
              "score": 2
            },
            {
              "label": "Heavy (3)",
              "value": "heavy",
              "score": 3
            }
          ]
        },
        {
          "key": "tissue",
          "label": "Tissue Type",
          "type": "single-select",
          "options": [
            {
              "label": "Closed (0)",
              "value": "closed",
              "score": 0
            },
            {
              "label": "Epithelial Tissue (1)",
              "value": "epithelial",
              "score": 1
            },
            {
              "label": "Granulation Tissue (2)",
              "value": "granulation",
              "score": 2
            },
            {
              "label": "Slough (3)",
              "value": "slough",
              "score": 3
            },
            {
              "label": "Necrotic Tissue (4)",
              "value": "necrotic",
              "score": 4
            }
          ]
        },
        {
          "key": "totalScore",
          "label": "PUSH Total Score",
          "type": "computed"
        }
      ]
    }
  ]
}