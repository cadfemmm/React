const GCS_SCHEMA = {
  "title": "Glasgow Coma Scale (GCS)",
  "fields": [
    {
      "type": "single-select",
      "name": "eye_opening",
      "label": "Eye Opening",
      "options": [
        {
          "label": "4 - Spontaneous",
          "value": "4"
        },
        {
          "label": "3 - To Speech",
          "value": "3"
        },
        {
          "label": "2 - To Pain",
          "value": "2"
        },
        {
          "label": "1 - No Eye Opening",
          "value": "1"
        }
      ],
      "required": true
    },
    {
      "type": "single-select",
      "name": "verbal_response",
      "label": "Verbal Response",
      "options": [
        {
          "label": "5 - Oriented",
          "value": "5"
        },
        {
          "label": "4 - Confused Conversation",
          "value": "4"
        },
        {
          "label": "3 - Inappropriate Words",
          "value": "3"
        },
        {
          "label": "2 - Incomprehensible Sounds",
          "value": "2"
        },
        {
          "label": "1 - No Verbal Response",
          "value": "1"
        }
      ],
      "required": true
    },
    {
      "type": "single-select",
      "name": "motor_response",
      "label": "Motor Response",
      "options": [
        {
          "label": "6 - Obeys Commands",
          "value": "6"
        },
        {
          "label": "5 - Localizes Pain",
          "value": "5"
        },
        {
          "label": "4 - Withdraws From Pain",
          "value": "4"
        },
        {
          "label": "3 - Abnormal Flexion",
          "value": "3"
        },
        {
          "label": "2 - Abnormal Extension",
          "value": "2"
        },
        {
          "label": "1 - No Motor Response",
          "value": "1"
        }
      ],
      "required": true
    },
    {
      "type": "input",
      "name": "gcs_total_score",
      "label": "Total GCS Score",
      "readOnly": true
    }
  ],
  "actions": [
    {
      "label": "Cancel",
      "type": "cancel"
    },
    {
      "label": "Save",
      "type": "submit"
    }
  ]
}