const schema = {
  "title": "Epworth Sleepiness Scale (ESS)",
  "fields": [
    {
      "type": "subheading",
      "label": "How likely are you to doze off or fall asleep in the following situations, in contrast to feeling just tired?"
    },
    {
      "type": "radio-matrix",
      "name": "q1",
      "label": "Sitting and reading",
      "options": [
        {
          "label": "Would never doze",
          "value": 0
        },
        {
          "label": "Slight chance of dozing",
          "value": 1
        },
        {
          "label": "Moderate chance of dozing",
          "value": 2
        },
        {
          "label": "High chance of dozing",
          "value": 3
        }
      ]
    },
    {
      "type": "radio-matrix",
      "name": "q2",
      "label": "Watching TV",
      "options": [
        {
          "label": "Would never doze",
          "value": 0
        },
        {
          "label": "Slight chance of dozing",
          "value": 1
        },
        {
          "label": "Moderate chance of dozing",
          "value": 2
        },
        {
          "label": "High chance of dozing",
          "value": 3
        }
      ]
    },
    {
      "type": "radio-matrix",
      "name": "q3",
      "label": "Sitting inactive in a public place (e.g. theatre or meeting)",
      "options": [
        {
          "label": "Would never doze",
          "value": 0
        },
        {
          "label": "Slight chance of dozing",
          "value": 1
        },
        {
          "label": "Moderate chance of dozing",
          "value": 2
        },
        {
          "label": "High chance of dozing",
          "value": 3
        }
      ]
    },
    {
      "type": "radio-matrix",
      "name": "q4",
      "label": "As a passenger in a car for an hour without a break",
      "options": [
        {
          "label": "Would never doze",
          "value": 0
        },
        {
          "label": "Slight chance of dozing",
          "value": 1
        },
        {
          "label": "Moderate chance of dozing",
          "value": 2
        },
        {
          "label": "High chance of dozing",
          "value": 3
        }
      ]
    },
    {
      "type": "radio-matrix",
      "name": "q5",
      "label": "Lying down to rest in the afternoon when circumstances permit",
      "options": [
        {
          "label": "Would never doze",
          "value": 0
        },
        {
          "label": "Slight chance of dozing",
          "value": 1
        },
        {
          "label": "Moderate chance of dozing",
          "value": 2
        },
        {
          "label": "High chance of dozing",
          "value": 3
        }
      ]
    },
    {
      "type": "radio-matrix",
      "name": "q6",
      "label": "Sitting and talking to someone",
      "options": [
        {
          "label": "Would never doze",
          "value": 0
        },
        {
          "label": "Slight chance of dozing",
          "value": 1
        },
        {
          "label": "Moderate chance of dozing",
          "value": 2
        },
        {
          "label": "High chance of dozing",
          "value": 3
        }
      ]
    },
    {
      "type": "radio-matrix",
      "name": "q7",
      "label": "Sitting quietly after a lunch without alcohol",
      "options": [
        {
          "label": "Would never doze",
          "value": 0
        },
        {
          "label": "Slight chance of dozing",
          "value": 1
        },
        {
          "label": "Moderate chance of dozing",
          "value": 2
        },
        {
          "label": "High chance of dozing",
          "value": 3
        }
      ]
    },
    {
      "type": "radio-matrix",
      "name": "q8",
      "label": "In a car, while stopped for a few minutes in traffic",
      "options": [
        {
          "label": "Would never doze",
          "value": 0
        },
        {
          "label": "Slight chance of dozing",
          "value": 1
        },
        {
          "label": "Moderate chance of dozing",
          "value": 2
        },
        {
          "label": "High chance of dozing",
          "value": 3
        }
      ]
    },
    {
      "type": "input",
      "name": "ess_total",
      "label": "ESS Total Score",
      "readOnly": true
    },
    {
      "type": "input",
      "name": "ess_interpretation",
      "label": "Interpretation",
      "readOnly": true
    }
  ]
}