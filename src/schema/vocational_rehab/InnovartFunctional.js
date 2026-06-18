const SUBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "name": "complaint",
          "label": "Cheif Complaint",
          "type": "input",
          "placeholder": "Therapist assessment..."
        },
        {
          "name": "History of Present",
          "label": "History of Present Illnes",
          "type": "input"
        }
      ]
    }
  ]
}

const OBJECTIVE = {
  "title": "Activies and Participation",
  "titleInfo": {
    "title": "Pain Score (P/C)",
    "content": [
      "P = Pain during activity",
      "C = Pain at maximum capacity",
      "0 = No pain",
      "1 = Mild",
      "2 = Moderate",
      "3 = Severe",
      "4 = Complete",
      "8 = Not assessable",
      "9 = Not recorded"
    ]
  },
  "fields": [
    {
      "type": "radio-matrix",
      "name": "d155_p",
      "label": "d155 - Acquiring skills (P)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d155_c",
      "label": "d155 - Acquiring skills (C)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d160_p",
      "label": "d160 - Focusing attention (P)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d160_c",
      "label": "d160 - Focusing attention (C)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d166_p",
      "label": "d166 - Reading (P)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d166_c",
      "label": "d166 - Reading (C)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d170_p",
      "label": "d170 - Writing (P)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d170_c",
      "label": "d170 - Writing (C)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d172_p",
      "label": "d172 - Calculating (P)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d172_c",
      "label": "d172 - Calculating (C)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d210_p",
      "label": "d210 - Undertaking single task (P)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d210_c",
      "label": "d210 - Undertaking single task (C)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d220_p",
      "label": "d220 - Undertaking multiple tasks (P)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d220_c",
      "label": "d220 - Undertaking multiple tasks (C)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d310_p",
      "label": "d310 - Spoken message (P)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d310_c",
      "label": "d310 - Spoken message (C)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d315_p",
      "label": "d315 - Communicating with -receiving nonverbal message(P)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d315_c",
      "label": "d315 - Communicating with -receiving nonverbal message(C)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d350_p",
      "label": "d350 - Conversation (P)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d350_c",
      "label": "d350 - Conversation (C)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d410_p",
      "label": "d410 - Changing basic body position (P)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d410_c",
      "label": "d410 -  Changing basic body position (C)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d415_p",
      "label": "d415 - Maintaining body position (P)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d415_c",
      "label": "d415 - Maintaining body position (C)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d430_p",
      "label": "d430 - Lifting & carrying (P)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d430_c",
      "label": "d430 - Lifting & carrying (C)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d440_p",
      "label": "d440 - Fine hand use (P)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d440_c",
      "label": "d440 - Fine hand use (C)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d445_p",
      "label": "d445 - Hand & arm use (P)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d445_c",
      "label": "d445 - Hand & arm use (C)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d450_p",
      "label": "d450 - Walking (P)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d450_c",
      "label": "d450 - Walking (C)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d455_p",
      "label": "d455 - Moving around (P)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d455_c",
      "label": "d455 - Moving around (C)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d465_p",
      "label": "d465 - Moving and using equiment(P)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d465_c",
      "label": "d465 - Moving and using equiment(C)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d75_p",
      "label": "d475 - Driving(P)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d475_c",
      "label": "d465 - Driving(C)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d710_p",
      "label": "d710 - Basic interpersonal interactions(P)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d710_c",
      "label": "d710 - Basic interpersonal interactions(C)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d720_p",
      "label": "d720 - Complex interpersonal interactionsP)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d720_c",
      "label": "d720 - Complex interpersonal interactions(C)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d740_p",
      "label": "d740 - Formal relationships (P)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d740_c",
      "label": "d740 - Formal relationships (C)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d825_p",
      "label": "d825 - Vocational training(P)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d825_c",
      "label": "d825 - Vocational training(C)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d840_p",
      "label": "d840 - Apprenticeship(work preparation)(P)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    },
    {
      "type": "radio-matrix",
      "name": "d840_c",
      "label": "d840 - Apprenticeship(work preparation)(C)",
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
          "label": "8",
          "value": 8
        },
        {
          "label": "9",
          "value": 9
        }
      ],
      "matrixHeaderLabel": "Activies and Participation",
      "showInfoInRow": false
    }
  ]
}

const ASSESSMENT = {
  "sections": [
    {
      "fields": [
        {
          "name": "assessment_notes",
          "label": "Clinical Impression / Notes",
          "type": "input",
          "placeholder": "Therapist assessment..."
        }
      ]
    }
  ]
}

const PLAN = {
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Short-Term Goals (2–4 weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "short_term_goals"
        },
        {
          "type": "subheading",
          "label": "Long-Term Goals (6–12 weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "long_term_goals"
        },
        {
          "name": "plan_items",
          "label": "Plan",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Continue work hardening targeting / focusing on",
              "value": "continue_work_hardening"
            },
            {
              "label": "Continue assessment targeting / focusing on",
              "value": "continue_fce_assessment"
            },
            {
              "label": "Introduce work adaptation / modification strategies",
              "value": "introduce_work_adaptation_modification"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "continue_work_hardening_remarks",
          "label": "Work Hardening Target / Focus",
          "type": "input",
          "placeholder": "Enter work hardening target / focus",
          "showIf": {
            "field": "plan_items",
            "includes": "continue_work_hardening"
          }
        },
        {
          "name": "continue_fce_assessment_remarks",
          "label": "FCE Assessment Target / Focus",
          "type": "input",
          "placeholder": "Enter FCE assessment target / focus",
          "showIf": {
            "field": "plan_items",
            "includes": "continue_fce_assessment"
          }
        },
        {
          "name": "introduce_work_adaptation_modification_remarks",
          "label": "Work Adaptation / Modification Strategies",
          "type": "input",
          "placeholder": "Enter strategies to introduce",
          "showIf": {
            "field": "plan_items",
            "includes": "introduce_work_adaptation_modification"
          }
        },
        {
          "name": "plan_other_details",
          "label": "Other Plan Item",
          "type": "input",
          "placeholder": "Enter other plan item",
          "showIf": {
            "field": "plan_items",
            "includes": "others"
          }
        },
        {
          "name": "plan_other_remarks",
          "label": "Other Plan Remarks",
          "type": "input",
          "placeholder": "Enter other plan details",
          "showIf": {
            "field": "plan_items",
            "includes": "others"
          }
        }
      ]
    }
  ]
}

export default {
  PLAN,
  OBJECTIVE,
  SUBJECTIVE,
  ASSESSMENT,
};