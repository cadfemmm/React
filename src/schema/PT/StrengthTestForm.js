const SCHEMA = {
  "title": "Strength Test",
  "sections": [
    {
      "fields": [
        {
          "type": "grid-header",
          "label": "Grip Strength",
          "cols": [
            "Right (kgF)",
            "Left (kgF)"
          ]
        },
        {
          "type": "grid-row",
          "name": "grip_strength_trial_one",
          "label": "1st Trial",
          "cols": [
            {
              "type": "input-number-range",
              "name": "grip_strength_trial_one_right"
            },
            {
              "type": "input-number-range",
              "name": "grip_strength_trial_one_left"
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "grip_strength_trial_second",
          "label": "2nd Trial",
          "cols": [
            {
              "type": "input-number-range",
              "name": "grip_strength_trial_second_right"
            },
            {
              "type": "input-number-range",
              "name": "grip_strength_trial_second_left"
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "grip_strength_trial_third",
          "label": "3rd Trial",
          "cols": [
            {
              "type": "input-number-range",
              "name": "grip_strength_trial_third_right"
            },
            {
              "type": "input-number-range",
              "name": "grip_strength_trial_third_left"
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "grip_strength_average",
          "label": "Total (average) kgF",
          "cols": [
            {
              "type": "input-number-range",
              "readOnly": "true",
              "name": "grip_strength_average_right"
            },
            {
              "type": "input-number-range",
              "readOnly": "true",
              "name": "grip_strength_average_left"
            }
          ]
        },
        {
          "type": "grid-header",
          "label": "Lateral Pinch",
          "cols": [
            "Right (kgF)",
            "Left (kgF)"
          ]
        },
        {
          "type": "grid-row",
          "name": "lateral_pinch_trial_one",
          "label": "1st Trial",
          "cols": [
            {
              "type": "input-number-range",
              "name": "lateral_pinch_trial_one_right"
            },
            {
              "type": "input-number-range",
              "name": "lateral_pinch_trial_one_left"
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "lateral_pinch_trial_second",
          "label": "2nd Trial",
          "cols": [
            {
              "type": "input-number-range",
              "name": "lateral_pinch_trial_second_right"
            },
            {
              "type": "input-number-range",
              "name": "lateral_pinch_trial_second_left"
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "lateral_pinch_trial_third",
          "label": "3rd Trial",
          "cols": [
            {
              "type": "input-number-range",
              "name": "lateral_pinch_trial_third_right"
            },
            {
              "type": "input-number-range",
              "name": "lateral_pinch_trial_third_left"
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "lateral_pinch_average",
          "label": "Total (average) kgF",
          "cols": [
            {
              "type": "input-number-range",
              "readOnly": "true",
              "name": "lateral_pinch_average_right"
            },
            {
              "type": "input-number-range",
              "readOnly": "true",
              "name": "lateral_pinch_average_left"
            }
          ]
        },
        {
          "type": "grid-header",
          "label": "Tip Pinch",
          "cols": [
            "Right (kgF)",
            "Left (kgF)"
          ]
        },
        {
          "type": "grid-row",
          "name": "tip_pinch_trial_one",
          "label": "1st Trial",
          "cols": [
            {
              "type": "input-number-range",
              "name": "tip_pinch_trial_one_right"
            },
            {
              "type": "input-number-range",
              "name": "tip_pinch_trial_one_left"
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "tip_pinch_trial_second",
          "label": "2nd Trial",
          "cols": [
            {
              "type": "input-number-range",
              "name": "tip_pinch_trial_second_right"
            },
            {
              "type": "input-number-range",
              "name": "tip_pinch_trial_second_left"
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "tip_pinch_trial_third",
          "label": "3rd Trial",
          "cols": [
            {
              "type": "input-number-range",
              "name": "tip_pinch_trial_third_right"
            },
            {
              "type": "input-number-range",
              "name": "tip_pinch_trial_third_left"
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "tip_pinch_average",
          "label": "Total (average) kgF",
          "cols": [
            {
              "type": "input-number-range",
              "readOnly": "true",
              "name": "tip_pinch_average_right"
            },
            {
              "type": "input-number-range",
              "readOnly": "true",
              "name": "tip_pinch_average_left"
            }
          ]
        },
        {
          "type": "grid-header",
          "label": "Tripod Pinch",
          "cols": [
            "Right (kgF)",
            "Left (kgF)"
          ]
        },
        {
          "type": "grid-row",
          "name": "tripod_pinch_trial_one",
          "label": "1st Trial",
          "cols": [
            {
              "type": "input-number-range",
              "name": "tripod_pinch_trial_one_right"
            },
            {
              "type": "input-number-range",
              "name": "tripod_pinch_trial_one_left"
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "tripod_pinch_trial_second",
          "label": "2nd Trial",
          "cols": [
            {
              "type": "input-number-range",
              "name": "tripod_pinch_trial_second_right"
            },
            {
              "type": "input-number-range",
              "name": "tripod_pinch_trial_second_left"
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "tripod_pinch_trial_third",
          "label": "3rd Trial",
          "cols": [
            {
              "type": "input-number-range",
              "name": "tripod_pinch_trial_third_right"
            },
            {
              "type": "input-number-range",
              "name": "tripod_pinch_trial_third_left"
            }
          ]
        },
        {
          "type": "grid-row",
          "name": "tripod_pinch_average",
          "label": "Total (average) kgF",
          "cols": [
            {
              "type": "input-number-range",
              "readOnly": "true",
              "name": "tripod_pinch_average_right"
            },
            {
              "type": "input-number-range",
              "readOnly": "true",
              "name": "tripod_pinch_average_left"
            }
          ]
        }
      ]
    }
  ]
}