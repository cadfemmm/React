const SCHEMA = {
  "title": "Timed Up and Go (TUG)",
  "sections": [
    {
      "fields": [
        {
          "type": "textarea",
          "name": "assistive_device",
          "label": "Assistive Device and/or Bracing Used",
          "helper": "Example: Walker, Cane, AFO, Knee brace, None"
        },
        {
          "type": "subheading",
          "label": "Timed Up and Go (TUG)"
        },
        {
          "type": "row",
          "fields": [
            {
              "type": "input",
              "name": "tug_trial1",
              "label": "Trial 1 (s)",
              "placeholder": "e.g. 12.4"
            },
            {
              "type": "input",
              "name": "tug_trial2",
              "label": "Trial 2 (s)",
              "placeholder": "e.g. 11.8"
            },
            {
              "type": "input",
              "name": "tug_trial3",
              "label": "Trial 3 (s)",
              "placeholder": "e.g. 12.1"
            }
          ]
        },
        {
          "type": "custom",
          "name": "tug_score_display"
        }
      ]
    }
  ]
}