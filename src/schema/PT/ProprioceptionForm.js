const SCHEMA = {
  "title": "Proprioception Assessment",
  "fields": [
    {
      "type": "refraction-12col",
      "name": "prop_table",
      "cornerLabel": "Test",
      "cornerLikeGroupHeader": true,
      "showColumnHeaders": true,
      "groups": [
        {
          "label": "Right",
          "columns": [
            {
              "key": ""
            }
          ]
        },
        {
          "label": "Left",
          "columns": [
            {
              "key": ""
            }
          ]
        },
        {
          "label": "Notes",
          "columns": [
            {
              "key": ""
            }
          ]
        }
      ],
      "rows": [
        {
          "value": "joint_position",
          "label": "Joint Position Sense",
          "columns": [
            {
              "type": "select",
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                },
                {
                  "label": "Absent",
                  "value": "absent"
                }
              ]
            },
            {
              "type": "select",
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Impaired",
                  "value": "impaired"
                },
                {
                  "label": "Absent",
                  "value": "absent"
                }
              ]
            },
            {
              "type": "input"
            }
          ]
        },
        {
          "value": "vibration",
          "label": "Vibration (128 Hz)",
          "columns": [
            {
              "type": "select",
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Reduced",
                  "value": "reduced"
                },
                {
                  "label": "Absent",
                  "value": "absent"
                }
              ]
            },
            {
              "type": "select",
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Reduced",
                  "value": "reduced"
                },
                {
                  "label": "Absent",
                  "value": "absent"
                }
              ]
            },
            {
              "type": "input"
            }
          ]
        }
      ]
    }
  ]
}