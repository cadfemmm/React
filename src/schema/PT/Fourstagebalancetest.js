const SCHEMA = {
  "title": "Four-Stage Balance Test",
  "sections": [
    {
      "title": null,
      "fields": [
        {
          "type": "grid-header",
          "cols": [
            "Result",
            "Time Held (sec)",
            "Score",
            "Notes"
          ],
          "template": "220px 120px 110px 180px minmax(120px, 1fr)"
        },
        {
          "type": "grid-row",
          "name": "fsbt_stage1",
          "label": "Stage 1 – Feet Side-by-Side",
          "template": "220px 120px 110px 180px minmax(120px, 1fr)",
          "cols": [
            {
              "name": "fsbt_stage1_result",
              "type": "single-select",
              "options": [
                {
                  "label": "Completed",
                  "value": "completed"
                },
                {
                  "label": "Unable",
                  "value": "unable"
                }
              ]
            },
            {
              "name": "fsbt_stage1_time_sec",
              "type": "number",
              "suffix": "sec",
              "min": 0
            },
            {
              "name": "fsbt_stage1_score",
              "type": "single-select",
              "options": [
                {
                  "label": "0 – Unable to Hold Position",
                  "value": "0"
                },
                {
                  "label": "1 – Successfully Completed",
                  "value": "1"
                }
              ]
            },
            {
              "name": "fsbt_stage1_notes",
              "type": "text"
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "fsbt_stage2",
          "label": "Stage 2 – Semi-Tandem",
          "template": "220px 120px 110px 180px minmax(120px, 1fr)",
          "cols": [
            {
              "name": "fsbt_stage2_result",
              "type": "single-select",
              "options": [
                {
                  "label": "Completed",
                  "value": "completed"
                },
                {
                  "label": "Unable",
                  "value": "unable"
                }
              ]
            },
            {
              "name": "fsbt_stage2_time_sec",
              "type": "number",
              "suffix": "sec",
              "min": 0
            },
            {
              "name": "fsbt_stage2_score",
              "type": "single-select",
              "options": [
                {
                  "label": "0 – Unable to Hold Position",
                  "value": "0"
                },
                {
                  "label": "1 – Successfully Completed",
                  "value": "1"
                }
              ]
            },
            {
              "name": "fsbt_stage2_notes",
              "type": "text"
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "fsbt_stage3",
          "label": "Stage 3 – Tandem",
          "template": "220px 120px 110px 180px minmax(120px, 1fr)",
          "cols": [
            {
              "name": "fsbt_stage3_result",
              "type": "single-select",
              "options": [
                {
                  "label": "Completed",
                  "value": "completed"
                },
                {
                  "label": "Unable",
                  "value": "unable"
                }
              ]
            },
            {
              "name": "fsbt_stage3_time_sec",
              "type": "number",
              "suffix": "sec",
              "min": 0
            },
            {
              "name": "fsbt_stage3_score",
              "type": "single-select",
              "options": [
                {
                  "label": "0 – Unable to Hold Position",
                  "value": "0"
                },
                {
                  "label": "1 – Successfully Completed",
                  "value": "1"
                }
              ]
            },
            {
              "name": "fsbt_stage3_notes",
              "type": "text"
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "fsbt_stage4",
          "label": "Stage 4 – Single Leg Stance",
          "template": "220px 120px 110px 180px minmax(120px, 1fr)",
          "cols": [
            {
              "name": "fsbt_stage4_result",
              "type": "single-select",
              "options": [
                {
                  "label": "Completed",
                  "value": "completed"
                },
                {
                  "label": "Unable",
                  "value": "unable"
                }
              ]
            },
            {
              "name": "fsbt_stage4_time_sec",
              "type": "number",
              "suffix": "sec",
              "min": 0
            },
            {
              "name": "fsbt_stage4_score",
              "type": "single-select",
              "options": [
                {
                  "label": "0 – Unable to Hold Position",
                  "value": "0"
                },
                {
                  "label": "1 – Successfully Completed",
                  "value": "1"
                }
              ]
            },
            {
              "name": "fsbt_stage4_notes",
              "type": "text"
            }
          ]
        },
        {
          "type": "score-box",
          "name": "fsbt_total_score",
          "label": "Total Score (/4)"
        },
        {
          "type": "score-box",
          "name": "fsbt_fall_risk_level",
          "label": "Fall Risk Level"
        },
        {
          "type": "textarea",
          "name": "fsbt_clinical_meaning",
          "label": "Interpretation / Clinical Meaning",
          "placeholder": "Auto-generated from Total Score, editable"
        }
      ]
    }
  ]
}