const SCHEMA = {
  "title": "Single Leg Stance Test",
  "sections": [
    {
      "title": null,
      "fields": [
        {
          "type": "grid-header",
          "cols": [
            "Time Held (sec)",
            "Stability",
            "Score",
            "Interpretation"
          ],
          "template": "100px 120px 130px 180px 200px"
        },
        {
          "type": "grid-row",
          "name": "sls_left",
          "label": "Left",
          "template": "100px 120px 130px 180px 200px",
          "info": {
            "title": "Score Mapping",
            "content": [
              "Unable to stand",
              "< 5 sec",
              "5–10 sec",
              "11–19 sec",
              "≥ 20 sec"
            ]
          },
          "cols": [
            {
              "name": "sls_left_time_sec",
              "type": "number",
              "suffix": "sec",
              "min": 0
            },
            {
              "name": "sls_left_stability",
              "type": "single-select",
              "options": [
                {
                  "label": "Stable",
                  "value": "stable"
                },
                {
                  "label": "Unstable",
                  "value": "unstable"
                }
              ]
            },
            {
              "name": "sls_left_score",
              "type": "single-select",
              "options": [
                {
                  "label": "Unable to Stand",
                  "value": "0"
                },
                {
                  "label": "< 5 sec",
                  "value": "1"
                },
                {
                  "label": "5–10 sec",
                  "value": "2"
                },
                {
                  "label": "11–19 sec",
                  "value": "3"
                },
                {
                  "label": "≥ 20 sec",
                  "value": "4"
                }
              ]
            },
            {
              "type": "computed",
              "plain": true
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "sls_right",
          "label": "Right",
          "template": "100px 120px 130px 180px 200px",
          "info": {
            "title": "Score Mapping",
            "content": [
              "Unable to stand",
              "< 5 sec",
              "5–10 sec",
              "11–19 sec",
              "≥ 20 sec"
            ]
          },
          "cols": [
            {
              "name": "sls_right_time_sec",
              "type": "number",
              "suffix": "sec",
              "min": 0
            },
            {
              "name": "sls_right_stability",
              "type": "single-select",
              "options": [
                {
                  "label": "Stable",
                  "value": "stable"
                },
                {
                  "label": "Unstable",
                  "value": "unstable"
                }
              ]
            },
            {
              "name": "sls_right_score",
              "type": "single-select",
              "options": [
                {
                  "label": "Unable to Stand",
                  "value": "0"
                },
                {
                  "label": "< 5 sec",
                  "value": "1"
                },
                {
                  "label": "5–10 sec",
                  "value": "2"
                },
                {
                  "label": "11–19 sec",
                  "value": "3"
                },
                {
                  "label": "≥ 20 sec",
                  "value": "4"
                }
              ]
            },
            {
              "type": "computed",
              "plain": true
            }
          ]
        }
      ]
    }
  ]
}