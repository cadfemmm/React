const SCHEMA = {
  "title": "Limb Length Alignment",
  "sections": [
    {
      "title": null,
      "fields": [
        {
          "type": "grid-header",
          "cols": [
            "R Value (cm)",
            "L Value (cm)",
            "Difference"
          ],
          "template": "220px 170px 170px 170px"
        },
        {
          "type": "grid-row",
          "name": "true_leg_length",
          "label": "True Leg Length",
          "template": "220px 170px 170px 170px",
          "cols": [
            {
              "name": "true_leg_length_r_value",
              "type": "number",
              "suffix": "cm"
            },
            {
              "name": "true_leg_length_l_value",
              "type": "number",
              "suffix": "cm"
            },
            {
              "type": "computed",
              "plain": true
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "apparent_leg_length",
          "label": "Apparent Leg Length",
          "template": "220px 170px 170px 170px",
          "cols": [
            {
              "name": "apparent_leg_length_r_value",
              "type": "number",
              "suffix": "cm"
            },
            {
              "name": "apparent_leg_length_l_value",
              "type": "number",
              "suffix": "cm"
            },
            {
              "type": "computed",
              "plain": true
            }
          ]
        },
        {
          "type": "textarea",
          "name": "limb_length_interpretation",
          "label": "Interpretation",
          "placeholder": "Auto-generated, editable"
        },
        {
          "type": "textarea",
          "name": "limb_length_other_test",
          "label": "Other Test",
          "placeholder": "Free text"
        }
      ]
    }
  ]
}