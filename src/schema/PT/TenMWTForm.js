const SCHEMA = {
  "title": "10 Meter Walk Test",
  "sections": [
    {
      "fields": [
        {
          "min": 0,
          "name": "meter",
          "label": "Meter",
          "type": "input-number-range"
        },
        {
          "min": 0,
          "name": "seconds",
          "label": "Seconds",
          "type": "input-number-range"
        },
        {
          "name": "meter_per_seconds",
          "label": "m/s",
          "type": "input",
          "readOnly": "true"
        }
      ]
    }
  ]
}