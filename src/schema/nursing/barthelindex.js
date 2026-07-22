const BARTHEL_SCHEMA = {
  "title": "Barthel Index",
  "sections": [
    {
      "fields": [
        {
          "name": "feeding",
          "label": "Feeding",
          "type": "radio",
          "info": {
            "content": [
              "0 = unable",
              "5 = needs help cutting, spreading butter, etc., or requires modified diet",
              "10 = independent"
            ]
          },
          "options": [
            { "value": 0, "label": "0" },
            { "value": 5, "label": "5" },
            { "value": 10, "label": "10" }
          ]
        },
        {
          "name": "bathing",
          "label": "Bathing",
          "type": "radio",
          "info": {
            "content": [
              "0 = dependent",
              "5 = independent (or in shower)"
            ]
          },
          "options": [
            { "value": 0, "label": "0" },
            { "value": 5, "label": "5" }
          ]
        },
        {
          "name": "grooming",
          "label": "Grooming",
          "type": "radio",
          "info": {
            "content": [
              "0 = needs to help with personal care",
              "5 = independent face/hair/teeth/shaving (implements provided)"
            ]
          },
          "options": [
            { "value": 0, "label": "0" },
            { "value": 5, "label": "5" }
          ]
        },
        {
          "name": "dressing",
          "label": "Dressing",
          "type": "radio",
          "info": {
            "content": [
              "0 = dependent",
              "5 = needs help but can do about half unaided",
              "10 = independent (including buttons, zips, laces, etc.)"
            ]
          },
          "options": [
            { "value": 0, "label": "0" },
            { "value": 5, "label": "5" },
            { "value": 10, "label": "10" }
          ]
        },
        {
          "name": "bowel_control",
          "label": "Bowels",
          "type": "radio",
          "info": {
            "content": [
              "0 = incontinent (or needs to be given enemas)",
              "5 = occasional accident",
              "10 = continent"
            ]
          },
          "options": [
            { "value": 0, "label": "0" },
            { "value": 5, "label": "5" },
            { "value": 10, "label": "10" }
          ]
        },
        {
          "name": "bladder_control",
          "label": "Bladder",
          "type": "radio",
          "info": {
            "content": [
              "0 = incontinent, or catheterized and unable to manage alone",
              "5 = occasional accident",
              "10 = continent"
            ]
          },
          "options": [
            { "value": 0, "label": "0" },
            { "value": 5, "label": "5" },
            { "value": 10, "label": "10" }
          ]
        },
        {
          "name": "toilet_use",
          "label": "Toilet Use",
          "type": "radio",
          "info": {
            "content": [
              "0 = dependent",
              "5 = needs some help, but can do something alone",
              "10 = independent (on and off, dressing, wiping)"
            ]
          },
          "options": [
            { "value": 0, "label": "0" },
            { "value": 5, "label": "5" },
            { "value": 10, "label": "10" }
          ]
        },
        {
          "name": "transfers",
          "label": "Transfers (bed to chair and back)",
          "type": "radio",
          "info": {
            "content": [
              "0 = unable, no sitting balance",
              "5 = major help (one or two people, physical), can sit",
              "10 = minor help (verbal or physical)",
              "15 = independent"
            ]
          },
          "options": [
            { "value": 0, "label": "0" },
            { "value": 5, "label": "5" },
            { "value": 10, "label": "10" },
            { "value": 15, "label": "15" }
          ]
        },
        {
          "name": "mobility",
          "label": "Mobility (on level surfaces)",
          "type": "radio",
          "info": {
            "content": [
              "0 = immobile or < 50 yards",
              "5 = wheelchair independent, including corners, > 50 yards",
              "10 = walks with help of one person (verbal or physical) > 50 yards",
              "15 = independent (but may use any aid; e.g. stick) > 50 yards"
            ]
          },
          "options": [
            { "value": 0, "label": "0" },
            { "value": 5, "label": "5" },
            { "value": 10, "label": "10" },
            { "value": 15, "label": "15" }
          ]
        },
        {
          "name": "stairs",
          "label": "Stairs",
          "type": "radio",
          "info": {
            "content": [
              "0 = unable",
              "5 = needs help (verbal, physical, carrying aid)",
              "10 = independent"
            ]
          },
          "options": [
            { "value": 0, "label": "0" },
            { "value": 5, "label": "5" },
            { "value": 10, "label": "10" }
          ]
        },
        {
          "name": "barthel_total",
          "label": "Total Score",
          "type": "score-box"
        }
      ]
    }
  ]
}