const SCHEMA = {
  "title": "Work History",
  "sections": [
    {
      "title": "",
      "fields": [
        {
          "type": "row",
          "fields": [
            {
              "type": "input",
              "name": "working_at",
              "label": "Current job"
            },
            {
              "type": "input",
              "name": "occupation_previous_job",
              "label": "Previous job"
            }
          ]
        },
        {
          "type": "date",
          "name": "employed_since",
          "label": "Employed since"
        },
        {
          "type": "textarea",
          "name": "main_duties",
          "label": "Main duties"
        },
        {
          "type": "input",
          "name": "physical_demands",
          "label": "Physical demands"
        },
        {
          "type": "input",
          "name": "mental_demands",
          "label": "Mental demands"
        },
        {
          "type": "input",
          "name": "work_schedule",
          "label": "Work schedule"
        },
        {
          "type": "input",
          "name": "occupational_exposures",
          "label": "Occupational exposures"
        },
        {
          "type": "input",
          "name": "effect_of_condition_on_work",
          "label": "Effect of medical condition on work"
        },
        {
          "type": "radio",
          "name": "workplace_accommodations",
          "label": "Workplace accommodations",
          "options": [
            "Modified duties",
            "Reduced hours",
            "None"
          ]
        },
        {
          "type": "radio",
          "name": "history_work_related_injury",
          "label": "History of work-related injury",
          "options": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "textarea",
          "name": "history_work_related_injury_details",
          "label": "Work-related injury details",
          "showIf": {
            "field": "history_work_related_injury",
            "equals": "Yes"
          }
        }
      ]
    }
  ]
}