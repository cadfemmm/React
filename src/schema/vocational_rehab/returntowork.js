const SCHEMA = {
  "title": "Readiness For Return-To-Work Scale",
  "sections": [
    {
      "fields": [
        {
          "type": "radio",
          "name": "back_at_work",
          "label": "Are you currently back at work?",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        },
        {
          "type": "score-box",
          "name": "rtw_total",
          "label": "TOTAL PROFILE SCORE",
          "text": "Total Score (auto-calculated): 0"
        }
      ]
    }
  ]
}