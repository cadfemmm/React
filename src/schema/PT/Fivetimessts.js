const SCHEMA = {
  "title": "Five Times Sit-to-Stand Test (5xSTS)",
  "sections": [
    {
      "title": null,
      "fields": [
        {
          "type": "grid-header",
          "cols": [
            "Result (seconds)",
            "Score"
          ],
          "template": "minmax(220px, 1fr) 180px 220px"
        },
        {
          "type": "grid-row",
          "name": "sts5x",
          "label": "5x STS",
          "template": "minmax(220px, 1fr) 180px 220px",
          "info": {
            "title": "Score Mapping",
            "content": [
              "0 = < 12 sec",
              "1 = 12–15 sec",
              "2 = 16–20 sec",
              "3 = > 20 sec"
            ]
          },
          "cols": [
            {
              "name": "sts5x_result_seconds",
              "type": "number",
              "suffix": "sec",
              "min": 0
            },
            {
              "name": "sts5x_score",
              "type": "single-select",
              "options": [
                {
                  "label": "< 12 sec",
                  "value": "0"
                },
                {
                  "label": "12–15 sec",
                  "value": "1"
                },
                {
                  "label": "16–20 sec",
                  "value": "2"
                },
                {
                  "label": "20 sec",
                  "value": "3"
                }
              ]
            }
          ]
        },
        {
          "type": "textarea",
          "name": "sts5x_interpretation",
          "label": "Interpretation",
          "placeholder": "Auto-filled from Score — editable"
        }
      ]
    }
  ]
}