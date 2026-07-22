  const schema = {
  "fields": [
    {
      "key": "patientName",
      "type": "text",
      "label": "Patient Full Name",
      "readOnly": false
    },
    {
      "key": "woundAssessmentMap",
      "type": "woundLocationMarker",
      "label": "Anatomical Wound Mapping Diagram",
      "pinLabelPrefix": "W",
      "markerLegendTitle": "Active Pressure Injuries / Lesions",
      "markerHelperText": "Click precise coordinates on the target region to drop a pin. Click a pin to edit label or remove.",
      "markerTotalLabel": "Total tracked pressure areas",
      "views": [
        {
          "key": "body",
          "label": "Full Body View",
          "src": "/body_high.png"
        },
        {
          "key": "hands",
          "label": "Palmar View",
          "src": "/palm.png"
        },
        {
          "key": "feet",
          "label": "Plantar View",
          "src": "/feet_high.png"
        }
      ]
    }
  ]
}