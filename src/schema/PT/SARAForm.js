const SCHEMA = {
  "title": "Scale for the Assessment and Rating of Ataxia (SARA)",
  "subtitle": "Neurological Ataxia Assessment",
  "sections": [
    {
      "title": "1. Gait",
      "fields": [
        {
          "type": "single-select",
          "name": "gait",
          "label": "Gait (0–8)",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            },
            {
              "label": "5",
              "value": 5
            },
            {
              "label": "6",
              "value": 6
            },
            {
              "label": "7",
              "value": 7
            },
            {
              "label": "8",
              "value": 8
            }
          ]
        }
      ]
    },
    {
      "title": "2. Stance",
      "fields": [
        {
          "type": "single-select",
          "name": "stance",
          "label": "Stance (0–6)",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            },
            {
              "label": "5",
              "value": 5
            },
            {
              "label": "6",
              "value": 6
            }
          ]
        }
      ]
    },
    {
      "title": "3. Sitting",
      "fields": [
        {
          "type": "single-select",
          "name": "sitting",
          "label": "Sitting (0–4)",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "title": "4. Speech Disturbance",
      "fields": [
        {
          "type": "single-select",
          "name": "speech",
          "label": "Speech (0–6)",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            },
            {
              "label": "5",
              "value": 5
            },
            {
              "label": "6",
              "value": 6
            }
          ]
        }
      ]
    },
    {
      "title": "5. Finger Chase",
      "fields": [
        {
          "type": "radio-matrix",
          "name": "finger_chase_right",
          "label": "Finger Chase Right",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            }
          ],
          "info": {
            "content": [
              "4 – Unable to perform 5 pointing movements ",
              "3 – Dysmetria, under/ overshooting target > 15 cm",
              "2 – Dysmetria, under/ overshooting target < 15 cm",
              "1 – Dysmetria, under/ overshooting target <5 cm ",
              "0 – No dysmetria"
            ]
          }
        },
        {
          "type": "radio-matrix",
          "name": "finger_chase_left",
          "label": "Finger Chase Left",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            }
          ],
          "info": {
            "content": [
              "4 – Unable to perform 5 pointing movements ",
              "3 – Dysmetria, under/ overshooting target > 15 cm",
              "2 – Dysmetria, under/ overshooting target < 15 cm",
              "1 – Dysmetria, under/ overshooting target <5 cm ",
              "0 – No dysmetria"
            ]
          }
        },
        {
          "type": "score-box",
          "name": "finger_chase_mean",
          "label": "Finger Chase Mean"
        },
        {
          "type": "radio-matrix",
          "name": "nose_finger_right",
          "label": "Nose-finger Right",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            }
          ],
          "info": {
            "content": [
              "4 – Unable to perform 5 pointing movements ",
              "3 – Dysmetria, under/ overshooting target > 15 cm",
              "2 – Dysmetria, under/ overshooting target < 15 cm",
              "1 – Tremor with an amplitude < 2 cm",
              "0 – No tremor"
            ]
          }
        },
        {
          "type": "radio-matrix",
          "name": "nose_finger_left",
          "label": "Nose-finger Left",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            }
          ],
          "info": {
            "content": [
              "4 – Unable to perform 5 pointing movements ",
              "3 – Dysmetria, under/ overshooting target > 15 cm",
              "2 – Dysmetria, under/ overshooting target < 15 cm",
              "1 – Dysmetria, under/ overshooting target <5 cm ",
              "0 – No dysmetria"
            ]
          }
        },
        {
          "type": "score-box",
          "name": "nose_finger_mean",
          "label": "Mean (R+L)/2"
        }
      ]
    },
    {
      "title": "6. Nose–Finger Test",
      "fields": [
        {
          "type": "radio-matrix",
          "name": "nose_finger_right",
          "label": "Right",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "nose_finger_left",
          "label": "Left",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            }
          ]
        },
        {
          "type": "score-box",
          "name": "nose_finger_mean",
          "label": "Mean (R+L)/2"
        }
      ]
    },
    {
      "title": "7. Fast Alternating Hand Movements",
      "fields": [
        {
          "type": "radio-matrix",
          "name": "fast_hand_right",
          "label": "Right",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "fast_hand_left",
          "label": "Left",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            }
          ]
        },
        {
          "type": "score-box",
          "name": "fast_hand_mean",
          "label": "Mean (R+L)/2"
        }
      ]
    },
    {
      "title": "8. Heel–Shin Slide",
      "fields": [
        {
          "type": "radio-matrix",
          "name": "heel_shin_right",
          "label": "Right",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            }
          ]
        },
        {
          "type": "radio-matrix",
          "name": "heel_shin_left",
          "label": "Left",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            }
          ]
        },
        {
          "type": "score-box",
          "name": "heel_shin_mean",
          "label": "Mean (R+L)/2"
        }
      ]
    },
    {
      "title": "Final SARA Score",
      "fields": [
        {
          "type": "score-box",
          "name": "sara_total",
          "label": "Total SARA Score (0–40)"
        }
      ]
    }
  ]
}