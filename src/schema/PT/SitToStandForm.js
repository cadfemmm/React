const SCHEMA = {
  "title": "30-Second Sit-to-Stand Test",
  "fields": [
    {
      "type": "row",
      "fields": [
        {
          "name": "sts_age",
          "label": "Patient Age",
          "type": "input",
          "placeholder": "e.g. 72"
        },
        {
          "name": "sts_gender",
          "label": "Gender",
          "type": "radio",
          "options": [
            {
              "label": "Male",
              "value": "male"
            },
            {
              "label": "Female",
              "value": "female"
            }
          ]
        }
      ]
    },
    {
      "name": "sts_score",
      "label": "Number of Stands Completed (0–25)",
      "type": "scale-slider",
      "min": 0,
      "max": 25,
      "step": 1,
      "showValue": true,
      "ranges": [
        {
          "min": 0,
          "max": 8,
          "label": "Below Average",
          "color": "#ef4444"
        },
        {
          "min": 8,
          "max": 17,
          "label": "Average",
          "color": "#f59e0b"
        },
        {
          "min": 17,
          "max": 25,
          "label": "Above Average",
          "color": "#22c55e"
        }
      ]
    },
    {
      "name": "sts_score",
      "label": "Score",
      "type": "score-box"
    },
    {
      "name": "_sts_interp",
      "type": "custom"
    }
  ]
}