export const SCHEMA = {
  "title": "Hamilton Depression Rating Scale - (HAM-D)",
  "fields": [
    {
      "name": "q1",
      "label": "1. Depressed Mood (sadness, hopeless, helpless, worthless)",
      "type": "single-select",
      "options": [
        {
          "label": "Absent",
          "value": 0
        },
        {
          "label": "Indicated only on questioning",
          "value": 1
        },
        {
          "label": "Spontaneously reported verbally",
          "value": 2
        },
        {
          "label": "Communicates feeling states non-verbally",
          "value": 3
        },
        {
          "label": "Virtually only these feeling states",
          "value": 4
        }
      ]
    },
    {
      "name": "q2",
      "label": "2. Feelings of Guilt",
      "type": "single-select",
      "options": [
        {
          "label": "Absent",
          "value": 0
        },
        {
          "label": "Self reproach",
          "value": 1
        },
        {
          "label": "Ideas of guilt or rumination",
          "value": 2
        },
        {
          "label": "Delusions of guilt",
          "value": 3
        },
        {
          "label": "Hallucinatory accusatory voices",
          "value": 4
        }
      ]
    },
    {
      "name": "q3",
      "label": "3. Suicide",
      "type": "single-select",
      "options": [
        {
          "label": "Absent",
          "value": 0
        },
        {
          "label": "Feels life not worth living",
          "value": 1
        },
        {
          "label": "Wishes he/she were dead",
          "value": 2
        },
        {
          "label": "Ideas or gestures of suicide",
          "value": 3
        },
        {
          "label": "Attempts at suicide",
          "value": 4
        }
      ]
    },
    {
      "name": "q4",
      "label": "4. Insomnia: Early in the Night",
      "type": "single-select",
      "options": [
        {
          "label": "No difficulty",
          "value": 0
        },
        {
          "label": "Occasional difficulty falling asleep",
          "value": 1
        },
        {
          "label": "Nightly difficulty falling asleep",
          "value": 2
        }
      ]
    },
    {
      "name": "q5",
      "label": "5. Insomnia: Middle of the Night",
      "type": "single-select",
      "options": [
        {
          "label": "No difficulty",
          "value": 0
        },
        {
          "label": "Restless / disturbed during night",
          "value": 1
        },
        {
          "label": "Waking during night",
          "value": 2
        }
      ]
    },
    {
      "name": "q6",
      "label": "6. Insomnia: Early Hours of the Morning",
      "type": "single-select",
      "options": [
        {
          "label": "No difficulty",
          "value": 0
        },
        {
          "label": "Wakes early but returns to sleep",
          "value": 1
        },
        {
          "label": "Unable to return to sleep",
          "value": 2
        }
      ]
    },
    {
      "name": "q7",
      "label": "7. Work and Activities",
      "type": "single-select",
      "options": [
        {
          "label": "No difficulty",
          "value": 0
        },
        {
          "label": "Fatigue or weakness",
          "value": 1
        },
        {
          "label": "Loss of interest in activities",
          "value": 2
        },
        {
          "label": "Decreased productivity",
          "value": 3
        },
        {
          "label": "Stopped working",
          "value": 4
        }
      ]
    },
    {
      "name": "q8",
      "label": "8. Retardation (slowness of thought and speech, impaired ability to concentrate, decreased motor activity)",
      "type": "single-select",
      "options": [
        {
          "label": "Normal",
          "value": 0
        },
        {
          "label": "Slight retardation",
          "value": 1
        },
        {
          "label": "Obvious retardation",
          "value": 2
        },
        {
          "label": "Interview difficult",
          "value": 3
        },
        {
          "label": "Complete stupor",
          "value": 4
        }
      ]
    },
    {
      "name": "q9",
      "label": "9. Agitation",
      "type": "single-select",
      "options": [
        {
          "label": "None",
          "value": 0
        },
        {
          "label": "Fidgetiness",
          "value": 1
        },
        {
          "label": "Playing with hands/hair",
          "value": 2
        },
        {
          "label": "Moving about",
          "value": 3
        },
        {
          "label": "Hand wringing, nail biting",
          "value": 4
        }
      ]
    },
    {
      "name": "q10",
      "label": "10. Anxiety – Psychic",
      "type": "single-select",
      "options": [
        {
          "label": "No difficulty",
          "value": 0
        },
        {
          "label": "Subjective tension",
          "value": 1
        },
        {
          "label": "Worrying",
          "value": 2
        },
        {
          "label": "Apprehensive attitude",
          "value": 3
        },
        {
          "label": "Fears without questioning",
          "value": 4
        }
      ]
    },
    {
      "name": "q11",
      "label": "11. Anxiety Somatic (physiological concomitants of anxiety) such as: gastro-intestinal – dry mouth, wind, indigestion, diarrhea, cramps, belching; cardio-vascular – palpitations, headaches; respiratory – hyperventilation, sighing; urinary frequency; sweating",
      "type": "single-select",
      "options": [
        {
          "label": "Absent",
          "value": 0
        },
        {
          "label": "Mild",
          "value": 1
        },
        {
          "label": "Moderate",
          "value": 2
        },
        {
          "label": "Severe",
          "value": 3
        },
        {
          "label": "Incapacitating",
          "value": 4
        }
      ]
    },
    {
      "name": "q12",
      "label": "12. Somatic Symptoms Gastro-Intestinal",
      "type": "single-select",
      "options": [
        {
          "label": "None",
          "value": 0
        },
        {
          "label": "Loss of appetite",
          "value": 1
        },
        {
          "label": "Difficulty eating",
          "value": 2
        }
      ]
    },
    {
      "name": "q13",
      "label": "13. General Somatic Symptoms",
      "type": "single-select",
      "options": [
        {
          "label": "None",
          "value": 0
        },
        {
          "label": "Heaviness / aches",
          "value": 1
        },
        {
          "label": "Clear-cut symptoms",
          "value": 2
        }
      ]
    },
    {
      "name": "q14",
      "label": "14. Genital Symptoms (symptoms such as loss of libido, menstrual disturbances)",
      "type": "single-select",
      "options": [
        {
          "label": "Absent",
          "value": 0
        },
        {
          "label": "Mild",
          "value": 1
        },
        {
          "label": "Severe",
          "value": 2
        }
      ]
    },
    {
      "name": "q15",
      "label": "15. Hypochondriasis",
      "type": "single-select",
      "options": [
        {
          "label": "Not present",
          "value": 0
        },
        {
          "label": "Self absorption",
          "value": 1
        },
        {
          "label": "Preoccupation with health",
          "value": 2
        },
        {
          "label": "Frequent complaints",
          "value": 3
        },
        {
          "label": "Hypochondriacal delusions",
          "value": 4
        }
      ]
    },
    {
      "name": "loss_of_weight_method",
      "label": "16. Loss of Weight (Rate Either a or b)",
      "type": "radio",
      "options": [
        {
          "label": "a) According to the patient",
          "value": "a"
        },
        {
          "label": "b) According to weekly measurements",
          "value": "b"
        }
      ]
    },
    {
      "name": "q16_a",
      "label": "a) According to the patient:",
      "type": "single-select",
      "showIf": {
        "field": "loss_of_weight_method",
        "equals": "a"
      },
      "options": [
        {
          "label": "No weight loss.",
          "value": 0
        },
        {
          "label": "Probable weight loss associated with present illness.",
          "value": 1
        },
        {
          "label": "Definite (according to patient) weight loss.",
          "value": 2
        },
        {
          "label": "Not assessed.",
          "value": 3
        }
      ]
    },
    {
      "name": "q16_b",
      "label": "b) According to weekly measurements:",
      "type": "single-select",
      "showIf": {
        "field": "loss_of_weight_method",
        "equals": "b"
      },
      "options": [
        {
          "label": "Less than 1lb weight loss in a week.",
          "value": 0
        },
        {
          "label": "Greater than 1lb weight loss in a week.",
          "value": 1
        },
        {
          "label": "Greater than 2lb weight loss in a week.",
          "value": 2
        },
        {
          "label": "Not assessed.",
          "value": 3
        }
      ]
    },
    {
      "name": "q17",
      "label": "17. Insight",
      "type": "single-select",
      "options": [
        {
          "label": "Acknowledges illness",
          "value": 0
        },
        {
          "label": "Acknowledges illness but blames external factors",
          "value": 1
        },
        {
          "label": "Denies being ill",
          "value": 2
        }
      ]
    }
  ]
}