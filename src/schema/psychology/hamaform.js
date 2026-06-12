export const SCHEMA = {
  "title": "Hamilton Anxiety Rating Scale (HAM-A)",
  "enableScoreToggle": true,
  "actions": [
    {
      "type": "toggle-show-scores"
    }
  ],
  "sections": [
    {
      "fields": [
        {
          "name": "q1",
          "label": "1. Anxious mood",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "info": {
            "title": "HAM-A Scale",
            "content": [
              "0 – Not present",
              "1 – Mild",
              "2 – Moderate",
              "3 – Severe",
              "4 – Very Severe"
            ]
          },
          "rowInfo": {
            "title": "1. Anxious mood",
            "content": [
              "Worries, anticipation of the worst, fearful anticipation, irritability"
            ]
          },
          "showInfoInRow": true,
          "options": [
            {
              "label": "Not present (0)",
              "value": 0
            },
            {
              "label": "Mild (1)",
              "value": 1
            },
            {
              "label": "Moderate (2)",
              "value": 2
            },
            {
              "label": "Severe (3)",
              "value": 3
            },
            {
              "label": "Very Severe (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "q2",
          "label": "2. Tension",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "rowInfo": {
            "title": "2. Tension",
            "content": [
              "Feelings of tension, fatigability, startle response, moved to tears easily, trembling, feelings of restlessness, inability to relax"
            ]
          },
          "showInfoInRow": true,
          "options": [
            {
              "label": "Not present (0)",
              "value": 0
            },
            {
              "label": "Mild (1)",
              "value": 1
            },
            {
              "label": "Moderate (2)",
              "value": 2
            },
            {
              "label": "Severe (3)",
              "value": 3
            },
            {
              "label": "Very Severe (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "q3",
          "label": "3. Fears",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "rowInfo": {
            "title": "3. Fears",
            "content": [
              "Of dark, of strangers, of being left alone, of animals, of traffic, of crowds"
            ]
          },
          "showInfoInRow": true,
          "options": [
            {
              "label": "Not present (0)",
              "value": 0
            },
            {
              "label": "Mild (1)",
              "value": 1
            },
            {
              "label": "Moderate (2)",
              "value": 2
            },
            {
              "label": "Severe (3)",
              "value": 3
            },
            {
              "label": "Very Severe (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "q4",
          "label": "4. Insomnia",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "rowInfo": {
            "title": "4. Insomnia",
            "content": [
              "Difficulty in falling asleep, broken sleep, unsatisfying sleep and fatigue on waking, dreams, nightmares, night terrors"
            ]
          },
          "showInfoInRow": true,
          "options": [
            {
              "label": "Not present (0)",
              "value": 0
            },
            {
              "label": "Mild (1)",
              "value": 1
            },
            {
              "label": "Moderate (2)",
              "value": 2
            },
            {
              "label": "Severe (3)",
              "value": 3
            },
            {
              "label": "Very Severe (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "q5",
          "label": "5. Intellectual",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "rowInfo": {
            "title": "5. Intellectual",
            "content": [
              "Difficulty concentrating, poor memory"
            ]
          },
          "showInfoInRow": true,
          "options": [
            {
              "label": "Not present (0)",
              "value": 0
            },
            {
              "label": "Mild (1)",
              "value": 1
            },
            {
              "label": "Moderate (2)",
              "value": 2
            },
            {
              "label": "Severe (3)",
              "value": 3
            },
            {
              "label": "Very Severe (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "q6",
          "label": "6. Depressed mood",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "rowInfo": {
            "title": "6. Depressed mood",
            "content": [
              "Loss of interest, lack of pleasure in hobbies, depression, early waking, diurnal swing"
            ]
          },
          "showInfoInRow": true,
          "options": [
            {
              "label": "Not present (0)",
              "value": 0
            },
            {
              "label": "Mild (1)",
              "value": 1
            },
            {
              "label": "Moderate (2)",
              "value": 2
            },
            {
              "label": "Severe (3)",
              "value": 3
            },
            {
              "label": "Very Severe (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "q7",
          "label": "7. Somatic (muscular)",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "rowInfo": {
            "title": "7. Somatic (muscular)",
            "content": [
              "Pains and aches, twitching, stiffness, myoclonic jerks, grinding of teeth, unsteady voice, increased muscular tone"
            ]
          },
          "showInfoInRow": true,
          "options": [
            {
              "label": "Not present (0)",
              "value": 0
            },
            {
              "label": "Mild (1)",
              "value": 1
            },
            {
              "label": "Moderate (2)",
              "value": 2
            },
            {
              "label": "Severe (3)",
              "value": 3
            },
            {
              "label": "Very Severe (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "q8",
          "label": "8. Somatic (sensory)",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "rowInfo": {
            "title": "8. Somatic (sensory)",
            "content": [
              "Tinnitus, blurring of vision, hot and cold flushes, feelings of weakness, pricking sensation"
            ]
          },
          "showInfoInRow": true,
          "options": [
            {
              "label": "Not present (0)",
              "value": 0
            },
            {
              "label": "Mild (1)",
              "value": 1
            },
            {
              "label": "Moderate (2)",
              "value": 2
            },
            {
              "label": "Severe (3)",
              "value": 3
            },
            {
              "label": "Very Severe (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "q9",
          "label": "9. Cardiovascular symptoms",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "rowInfo": {
            "title": "9. Cardiovascular symptoms",
            "content": [
              "Tachycardia, palpitations, pain in chest, throbbing of vessels, fainting feelings, missing beat"
            ]
          },
          "showInfoInRow": true,
          "options": [
            {
              "label": "Not present (0)",
              "value": 0
            },
            {
              "label": "Mild (1)",
              "value": 1
            },
            {
              "label": "Moderate (2)",
              "value": 2
            },
            {
              "label": "Severe (3)",
              "value": 3
            },
            {
              "label": "Very Severe (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "q10",
          "label": "10. Respiratory symptoms",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "rowInfo": {
            "title": "10. Respiratory symptoms",
            "content": [
              "Pressure or constriction in chest, choking feelings, sighing, dyspnea"
            ]
          },
          "showInfoInRow": true,
          "options": [
            {
              "label": "Not present (0)",
              "value": 0
            },
            {
              "label": "Mild (1)",
              "value": 1
            },
            {
              "label": "Moderate (2)",
              "value": 2
            },
            {
              "label": "Severe (3)",
              "value": 3
            },
            {
              "label": "Very Severe (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "q11",
          "label": "11. Gastrointestinal symptoms",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "rowInfo": {
            "title": "11. Gastrointestinal symptoms",
            "content": [
              "Difficulty in swallowing, wind abdominal pain, burning sensations, abdominal fullness, nausea, vomitting, borborygmi, looseness of bowels, loss of weight, constipation"
            ]
          },
          "showInfoInRow": true,
          "options": [
            {
              "label": "Not present (0)",
              "value": 0
            },
            {
              "label": "Mild (1)",
              "value": 1
            },
            {
              "label": "Moderate (2)",
              "value": 2
            },
            {
              "label": "Severe (3)",
              "value": 3
            },
            {
              "label": "Very Severe (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "q12",
          "label": "12. Genitourinary symptoms",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "rowInfo": {
            "title": "12. Genitourinary symptoms",
            "content": [
              "Frequency of micturition, urgency of micturition, amenorrhea, menorrhagia, development of frigidity, premature ejaculation, loss of libido, impotence"
            ]
          },
          "showInfoInRow": true,
          "options": [
            {
              "label": "Not present (0)",
              "value": 0
            },
            {
              "label": "Mild (1)",
              "value": 1
            },
            {
              "label": "Moderate (2)",
              "value": 2
            },
            {
              "label": "Severe (3)",
              "value": 3
            },
            {
              "label": "Very Severe (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "q13",
          "label": "13. Autonomic symptoms",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "rowInfo": {
            "title": "13. Autonomic symptoms",
            "content": [
              "Dry mouth, flushing, pallor, tendency to sweat, giddiness, tension headache, raising of hair"
            ]
          },
          "showInfoInRow": true,
          "options": [
            {
              "label": "Not present (0)",
              "value": 0
            },
            {
              "label": "Mild (1)",
              "value": 1
            },
            {
              "label": "Moderate (2)",
              "value": 2
            },
            {
              "label": "Severe (3)",
              "value": 3
            },
            {
              "label": "Very Severe (4)",
              "value": 4
            }
          ]
        },
        {
          "name": "q14",
          "label": "14. Behavior at interview",
          "type": "radio-matrix",
          "validation": {
            "required": true,
            "message": "This question is required"
          },
          "rowInfo": {
            "title": "14. Behavior at interview",
            "content": [
              "Fidgeting, restlessness or pacing, tremor of hands, furrowed brow, strained face, sighing or rapid respiration, facial pallor, swallowing, etc."
            ]
          },
          "showInfoInRow": true,
          "options": [
            {
              "label": "Not present (0)",
              "value": 0
            },
            {
              "label": "Mild (1)",
              "value": 1
            },
            {
              "label": "Moderate (2)",
              "value": 2
            },
            {
              "label": "Severe (3)",
              "value": 3
            },
            {
              "label": "Very Severe (4)",
              "value": 4
            }
          ]
        }
      ]
    }
  ]
}