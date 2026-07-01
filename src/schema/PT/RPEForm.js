const SCHEMA = {
  "title": "Rating of Perceived Exertion (RPE Scale)",
  "fields": [
    {
      "name": "rpe_score",
      "label": "RPE Score (1–10)",
      "type": "scale-slider",
      "min": 1,
      "max": 10,
      "step": 1,
      "showValue": true,
      "ranges": [
        {
          "min": 1,
          "max": 2,
          "label": "Rest / Really Easy",
          "color": "#93c5fd"
        },
        {
          "min": 2,
          "max": 4,
          "label": "Easy / Moderate",
          "color": "#86efac"
        },
        {
          "min": 4,
          "max": 7,
          "label": "Challenging / Hard",
          "color": "#fde68a"
        },
        {
          "min": 7,
          "max": 9,
          "label": "Really Hard",
          "color": "#fb923c"
        },
        {
          "min": 9,
          "max": 10,
          "label": "Maximal",
          "color": "#ef4444"
        }
      ]
    },
    {
      "name": "rpe_score",
      "label": "Score",
      "type": "score-box"
    }
  ]
}