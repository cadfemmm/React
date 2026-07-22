const schema = {
  "title": "Numeric Rating Scale (NRS) 0-10",
  "sections": [
    {
      "fields": [
        {
          "name": "current_pain",
          "label": "Current pain",
          "type": "input",
          "placeholder": "0–10"
        },
        {
          "name": "best_pain",
          "label": "Best pain (past 24 hours)",
          "type": "input",
          "placeholder": "0–10"
        },
        {
          "name": "worst_pain",
          "label": "Worst pain (past 24 hours)",
          "type": "input",
          "placeholder": "0–10"
        },
        {
          "name": "pain_average",
          "label": "Average pain (past 24 hours)",
          "type": "score-box"
        }
      ]
    }
  ]
}