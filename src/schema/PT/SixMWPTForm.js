const SCHEMA = {
  "title": "6 Minutes Wheelchair Push Test",
  "sections": [
    {
      "fields": [
        {
          "name": "distances",
          "label": "Distances",
          "type": "textarea"
        },
        {
          "name": "fitness_level",
          "label": "Level of Fitness",
          "type": "radio",
          "options": [
            {
              "label": "Low Fitness",
              "value": "low_fitness"
            },
            {
              "label": "Moderate Fitness",
              "value": "moderate_fitness"
            },
            {
              "label": "High Fitness",
              "value": "high_fitness"
            }
          ]
        }
      ]
    }
  ]
}