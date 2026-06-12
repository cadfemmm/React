export const SCHEMA = {
  "title": "Binocular Vision Dysfunction Assessment",
  "sections": [
    {
      "title": "BVD Questionnaire (BVDQ)",
      "fields": [
        {
          "type": "scale-table",
          "name": "bvdq",
          "columns": [
            {
              "label": "Always",
              "value": 3
            },
            {
              "label": "Frequently",
              "value": 2
            },
            {
              "label": "Occasionally",
              "value": 1
            },
            {
              "label": "Never",
              "value": 0
            }
          ],
          "rows": [
            "Do you have headaches and/or facial pain?",
            "Do you have pain in your eyes with eye movement?",
            "Do you experience neck or shoulder discomfort?",
            "Do you have dizziness and/or light headedness?",
            "Do you experience dizziness, light headedness, or nausea while performing close-up activities (computer work, reading, writing, etc.)?",
            "Do you experience dizziness, light headedness, or nausea while performing far-distance activities (driving, television, movies, etc.)?",
            "Do you experience dizziness, light headedness, or nausea when bending down and standing back up, or when getting up quickly from a seated position?",
            "Do you feel unsteady or drift to one side while walking?",
            "Do you feel overwhelmed or anxious while walking in a large department store?",
            "Do you feel overwhelmed or anxious when in a crowd?",
            "Does riding in a car make you feel dizzy or uncomfortable?",
            "Do you experience anxiety or nervousness because of your dizziness?",
            "Do you ever find yourself with your head tilted to one side?",
            "Do you experience poor depth perception or have difficulty estimating distances accurately?",
            "Do you experience double/overlapping/shadowed vision at far distances?",
            "Do you experience double/overlapping/shadowed vision at near distances?",
            "Do you experience glare or have sensitivity to bright lights?",
            "Do you close or cover one eye when reading or doing close work?",
            "Do you skip lines or lose your place when reading?",
            "Do you tire easily with close-up tasks (computer work, reading, writing)?",
            "Do you experience blurred vision with far-distance activities?",
            "Do you experience blurred vision with close-up activities?",
            "Do you blink frequently or rub your eyes after working at a desk or doing close-up activities?",
            "Do you experience words running together while reading?",
            "Do you experience difficulty with reading or reading comprehension?"
          ]
        }
      ]
    },
    {
      "title": "Symptom Severity Index (SSI)",
      "fields": [
        {
          "type": "scale-table",
          "name": "ssi",
          "columns": [
            {
              "label": "0\nNone",
              "value": 0,
              "required": true
            },
            {
              "label": "1",
              "value": 1,
              "required": true
            },
            {
              "label": "2",
              "value": 2,
              "required": true
            },
            {
              "label": "3",
              "value": 3,
              "required": true
            },
            {
              "label": "4",
              "value": 4,
              "required": true
            },
            {
              "label": "5",
              "value": 5,
              "required": true
            },
            {
              "label": "6",
              "value": 6,
              "required": true
            },
            {
              "label": "7",
              "value": 7,
              "required": true
            },
            {
              "label": "8",
              "value": 8,
              "required": true
            },
            {
              "label": "9",
              "value": 9,
              "required": true
            },
            {
              "label": "10\nWorst",
              "value": 10,
              "required": true
            }
          ],
          "rows": [
            "Dizziness",
            "Nausea",
            "Anxiety",
            "Headache",
            "Neckache",
            "Unsteady when walking",
            "Sensitivity to light",
            "Reading difficulty",
            "Sound sensitivity"
          ]
        }
      ]
    },
    {
      "fields": [
        {
          "type": "button",
          "name": "save",
          "label": "Save",
          "action": "save"
        }
      ]
    }
  ]
}