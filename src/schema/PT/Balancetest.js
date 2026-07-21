const SCHEMA = {
  "title": "Balance Test",
  "sections": [
    {
      "title": null,
      "fields": [
        {
          "type": "subheading",
          "label": "Single Leg Standing"
        },
        {
          "type": "grid-header",
          "cols": [
            "Left",
            "Right"
          ],
          "template": "240px 170px 170px 170px"
        },
        {
          "type": "grid-row",
          "name": "single_leg_standing",
          "label": "Leg Standing",
          "template": "240px 170px 170px 170px",
          "cols": [
            {
              "name": "sls_left_sec",
              "type": "number",
              "suffix": "s",
              "min": 0
            },
            {
              "name": "sls_right_sec",
              "type": "number",
              "suffix": "s",
              "min": 0
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "single_leg_standing_interpretation",
          "label": "Interpretation (Norm: 29s)",
          "template": "240px 170px 170px 170px",
          "cols": [
            {
              "type": "computed"
            },
            {
              "type": "computed"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Y Balance Test"
        },
        {
          "type": "grid-header",
          "cols": [
            "Left",
            "Right",
            "Difference"
          ],
          "template": "240px 170px 170px 170px"
        },
        {
          "type": "grid-row",
          "name": "ybt_anterior",
          "label": "Anterior Reach",
          "template": "240px 170px 170px 170px",
          "cols": [
            {
              "name": "ybt_left_anterior",
              "type": "number",
              "suffix": "cm"
            },
            {
              "name": "ybt_right_anterior",
              "type": "number",
              "suffix": "cm"
            },
            {
              "type": "computed"
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "ybt_pm",
          "label": "Posteromedial Reach",
          "template": "240px 170px 170px 170px",
          "cols": [
            {
              "name": "ybt_left_pm",
              "type": "number",
              "suffix": "cm",
              "min": 0
            },
            {
              "name": "ybt_right_pm",
              "type": "number",
              "suffix": "cm",
              "min": 0
            },
            {
              "type": "computed"
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "ybt_pl",
          "label": "Posterolateral Reach",
          "template": "240px 170px 170px 170px",
          "cols": [
            {
              "name": "ybt_left_pl",
              "type": "number",
              "suffix": "cm",
              "min": 0
            },
            {
              "name": "ybt_right_pl",
              "type": "number",
              "suffix": "cm",
              "min": 0
            },
            {
              "type": "computed"
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "ybt_total",
          "label": "Total Reach Distance",
          "template": "240px 170px 170px 170px",
          "cols": [
            {
              "type": "computed"
            },
            {
              "type": "computed"
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "ybt_limb_length",
          "label": "Limb Length",
          "template": "240px 170px 170px 170px",
          "cols": [
            {
              "name": "ybt_left_limb_length",
              "type": "number",
              "suffix": "cm",
              "min": 0
            },
            {
              "name": "ybt_right_limb_length",
              "type": "number",
              "suffix": "cm",
              "min": 0
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "ybt_composite_score",
          "label": "Composite Score",
          "template": "240px 170px 170px 170px",
          "cols": [
            {
              "type": "computed"
            },
            {
              "type": "computed"
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "ybt_interpretation",
          "label": "Interpretation",
          "template": "240px 170px 170px 170px",
          "cols": [
            {
              "type": "computed"
            },
            {
              "type": "computed"
            }
          ]
        },
        {
          "type": "grid-header",
          "cols": [
            "Value",
            "Risk (RTS)"
          ],
          "template": "240px 180px 260px"
        },
        {
          "type": "grid-row",
          "name": "ybt_asymmetry",
          "label": "Asymmetry (Reach Difference)",
          "template": "240px 180px 260px",
          "cols": [
            {
              "type": "computed"
            },
            {
              "type": "computed"
            }
          ]
        }
      ]
    }
  ]
}