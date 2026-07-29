const PSQI_SCHEMA = {
  "title": "Pittsburgh Sleep Quality Index (PSQI)",
  "fields": [
    {
      "type": "subheading",
      "label": "Pittsburgh Sleep Quality Index (PSQI)"
    },
    {
      "name": "bed_time",
      "label": "1. What time have you usually gone to bed?",
      "type": "input"
    },
    {
      "name": "sleep_latency",
      "label": "2. How long has it taken to fall asleep?",
      "type": "single-select",
      "options": [
        {
          "label": "0-15 minutes",
          "value": 0
        },
        {
          "label": "16-30 minutes",
          "value": 1
        },
        {
          "label": "31-60 minutes",
          "value": 2
        },
        {
          "label": "More than 60 minutes",
          "value": 3
        }
      ]
    },
    {
      "name": "wake_time",
      "label": "3. What time have you usually gotten up?",
      "type": "input"
    },
    {
      "name": "actual_sleep_hours",
      "label": "4. How many hours of actual sleep did you get?",
      "type": "input"
    },
    {
      "name": "cannot_sleep",
      "label": "Cannot get to sleep within 30 minutes",
      "type": "radio-matrix",
      "matrixHeaderLabel": "5. During the past month, how often have you had trouble sleeping because you...",
      "options": [
        {
          "label": "0 - Not during the past month",
          "value": 0
        },
        {
          "label": "1 - Less than once a week",
          "value": 1
        },
        {
          "label": "2 - Once or twice a week",
          "value": 2
        },
        {
          "label": "3 - Three or more times a week",
          "value": 3
        }
      ]
    },
    {
      "name": "wake_middle",
      "label": "Wake up in the middle of the night or early morning",
      "type": "radio-matrix",
      "matrixHeaderLabel": "5. During the past month, how often have you had trouble sleeping because you...",
      "options": [
        {
          "label": "0 - Not during the past month",
          "value": 0
        },
        {
          "label": "1 - Less than once a week",
          "value": 1
        },
        {
          "label": "2 - Once or twice a week",
          "value": 2
        },
        {
          "label": "3 - Three or more times a week",
          "value": 3
        }
      ]
    },
    {
      "name": "bathroom",
      "label": "Have to get up to use the bathroom",
      "type": "radio-matrix",
      "matrixHeaderLabel": "5. During the past month, how often have you had trouble sleeping because you...",
      "options": [
        {
          "label": "0 - Not during the past month",
          "value": 0
        },
        {
          "label": "1 - Less than once a week",
          "value": 1
        },
        {
          "label": "2 - Once or twice a week",
          "value": 2
        },
        {
          "label": "3 - Three or more times a week",
          "value": 3
        }
      ]
    },
    {
      "name": "breathing",
      "label": "Cannot breathe comfortably",
      "type": "radio-matrix",
      "matrixHeaderLabel": "5. During the past month, how often have you had trouble sleeping because you...",
      "options": [
        {
          "label": "0 - Not during the past month",
          "value": 0
        },
        {
          "label": "1 - Less than once a week",
          "value": 1
        },
        {
          "label": "2 - Once or twice a week",
          "value": 2
        },
        {
          "label": "3 - Three or more times a week",
          "value": 3
        }
      ]
    },
    {
      "name": "snoring",
      "label": "Cough or snore loudly",
      "type": "radio-matrix",
      "matrixHeaderLabel": "5. During the past month, how often have you had trouble sleeping because you...",
      "options": [
        {
          "label": "0 - Not during the past month",
          "value": 0
        },
        {
          "label": "1 - Less than once a week",
          "value": 1
        },
        {
          "label": "2 - Once or twice a week",
          "value": 2
        },
        {
          "label": "3 - Three or more times a week",
          "value": 3
        }
      ]
    },
    {
      "name": "cold",
      "label": "Feel too cold",
      "type": "radio-matrix",
      "matrixHeaderLabel": "5. During the past month, how often have you had trouble sleeping because you...",
      "options": [
        {
          "label": "0 - Not during the past month",
          "value": 0
        },
        {
          "label": "1 - Less than once a week",
          "value": 1
        },
        {
          "label": "2 - Once or twice a week",
          "value": 2
        },
        {
          "label": "3 - Three or more times a week",
          "value": 3
        }
      ]
    },
    {
      "name": "hot",
      "label": "Feel too hot",
      "type": "radio-matrix",
      "matrixHeaderLabel": "5. During the past month, how often have you had trouble sleeping because you...",
      "options": [
        {
          "label": "0 - Not during the past month",
          "value": 0
        },
        {
          "label": "1 - Less than once a week",
          "value": 1
        },
        {
          "label": "2 - Once or twice a week",
          "value": 2
        },
        {
          "label": "3 - Three or more times a week",
          "value": 3
        }
      ]
    },
    {
      "name": "bad_dreams",
      "label": "Have bad dreams",
      "type": "radio-matrix",
      "matrixHeaderLabel": "5. During the past month, how often have you had trouble sleeping because you...",
      "options": [
        {
          "label": "0 - Not during the past month",
          "value": 0
        },
        {
          "label": "1 - Less than once a week",
          "value": 1
        },
        {
          "label": "2 - Once or twice a week",
          "value": 2
        },
        {
          "label": "3 - Three or more times a week",
          "value": 3
        }
      ]
    },
    {
      "name": "pain",
      "label": "Have pain",
      "type": "radio-matrix",
      "matrixHeaderLabel": "5. During the past month, how often have you had trouble sleeping because you...",
      "options": [
        {
          "label": "0 - Not during the past month",
          "value": 0
        },
        {
          "label": "1 - Less than once a week",
          "value": 1
        },
        {
          "label": "2 - Once or twice a week",
          "value": 2
        },
        {
          "label": "3 - Three or more times a week",
          "value": 3
        }
      ]
    },
    {
      "name": "other_reason",
      "label": "Other reason(s)",
      "type": "radio-matrix",
      "matrixHeaderLabel": "5. During the past month, how often have you had trouble sleeping because you...",
      "options": [
        {
          "label": "0 - Not during the past month",
          "value": 0
        },
        {
          "label": "1 - Less than once a week",
          "value": 1
        },
        {
          "label": "2 - Once or twice a week",
          "value": 2
        },
        {
          "label": "3 - Three or more times a week",
          "value": 3
        }
      ]
    },
    {
      "name": "other_reason_description",
      "label": "Other reason(s), please describe",
      "type": "input"
    },
    {
      "name": "sleep_medication",
      "label": "6. During the past month, how often have you taken medicine to help you sleep?",
      "type": "single-select",
      "matrixHeaderLabel": "Sleep Medication",
      "options": [
        {
          "label": "0 - Not during the past month",
          "value": 0
        },
        {
          "label": "1 - Less than once a week",
          "value": 1
        },
        {
          "label": "2 - Once or twice a week",
          "value": 2
        },
        {
          "label": "3 - Three or more times a week",
          "value": 3
        }
      ]
    },
    {
      "name": "daytime_sleepiness",
      "label": "7. During the past month, how often have you had trouble staying awake while driving, eating meals, or engaging in social activity?",
      "type": "single-select",
      "matrixHeaderLabel": "Daytime Sleepiness",
      "options": [
        {
          "label": "0 - Not during the past month",
          "value": 0
        },
        {
          "label": "1 - Less than once a week",
          "value": 1
        },
        {
          "label": "2 - Once or twice a week",
          "value": 2
        },
        {
          "label": "3 - Three or more times a week",
          "value": 3
        }
      ]
    },
    {
      "name": "enthusiasm",
      "label": "8. During the past month, how much of a problem has it been to keep up enough enthusiasm to get things done?",
      "type": "single-select",
      "matrixHeaderLabel": "Enthusiasm",
      "options": [
        {
          "label": "0 - Not during the past month",
          "value": 0
        },
        {
          "label": "1 - Less than once a week",
          "value": 1
        },
        {
          "label": "2 - Once or twice a week",
          "value": 2
        },
        {
          "label": "3 - Three or more times a week",
          "value": 3
        }
      ]
    },
    {
      "name": "sleep_quality",
      "label": "9. During the past month, how would you rate your sleep quality overall?",
      "type": "single-select",
      "options": [
        {
          "label": "Very Good",
          "value": 0
        },
        {
          "label": "Fairly Good",
          "value": 1
        },
        {
          "label": "Fairly Bad",
          "value": 2
        },
        {
          "label": "Very Bad",
          "value": 3
        }
      ]
    },
    {
      "name": "partner_snoring",
      "label": "Loud snoring",
      "type": "radio-matrix",
      "matrixHeaderLabel": "10. Do you have a bed partner or room mate?",
      "options": [
        {
          "label": "0 - Not during the past month",
          "value": 0
        },
        {
          "label": "1 - Less than once a week",
          "value": 1
        },
        {
          "label": "2 - Once or twice a week",
          "value": 2
        },
        {
          "label": "3 - Three or more times a week",
          "value": 3
        }
      ]
    },
    {
      "name": "partner_breathing_pause",
      "label": "Long pauses between breaths while asleep",
      "type": "radio-matrix",
      "matrixHeaderLabel": "10. Do you have a bed partner or room mate?",
      "options": [
        {
          "label": "0 - Not during the past month",
          "value": 0
        },
        {
          "label": "1 - Less than once a week",
          "value": 1
        },
        {
          "label": "2 - Once or twice a week",
          "value": 2
        },
        {
          "label": "3 - Three or more times a week",
          "value": 3
        }
      ]
    },
    {
      "name": "partner_leg_twitching",
      "label": "Legs twitching or jerking while you sleep",
      "type": "radio-matrix",
      "matrixHeaderLabel": "10. Do you have a bed partner or room mate?",
      "options": [
        {
          "label": "0 - Not during the past month",
          "value": 0
        },
        {
          "label": "1 - Less than once a week",
          "value": 1
        },
        {
          "label": "2 - Once or twice a week",
          "value": 2
        },
        {
          "label": "3 - Three or more times a week",
          "value": 3
        }
      ]
    },
    {
      "name": "partner_confusion",
      "label": "Episodes of disorientation or confusion during sleep",
      "type": "radio-matrix",
      "matrixHeaderLabel": "10. Do you have a bed partner or room mate?",
      "options": [
        {
          "label": "0 - Not during the past month",
          "value": 0
        },
        {
          "label": "1 - Less than once a week",
          "value": 1
        },
        {
          "label": "2 - Once or twice a week",
          "value": 2
        },
        {
          "label": "3 - Three or more times a week",
          "value": 3
        }
      ]
    },
    {
      "name": "partner_restlessness",
      "label": "Other restlessness while you sleep",
      "type": "radio-matrix",
      "matrixHeaderLabel": "10. Do you have a bed partner or room mate?",
      "options": [
        {
          "label": "0 - Not during the past month",
          "value": 0
        },
        {
          "label": "1 - Less than once a week",
          "value": 1
        },
        {
          "label": "2 - Once or twice a week",
          "value": 2
        },
        {
          "label": "3 - Three or more times a week",
          "value": 3
        }
      ]
    },
    {
      "name": "partner_restlessness_description",
      "label": "Other restlessness description",
      "type": "input"
    },
    {
      "name": "psqi_total_score",
      "label": "Total PSQI Score",
      "type": "input",
      "readOnly": true
    },
    {
      "name": "sleep_interpretation",
      "label": "Sleep Quality",
      "type": "input",
      "readOnly": true
    }
  ]
}