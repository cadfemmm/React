const AMP_PRO = {
  "title": "AMP with Prosthesis (AMPPro)",
  "sections": [
    {
      "fields": [
        {
          "name": "score",
          "label": "Score",
          "type": "input",
          "helper": "Enter total score /43"
        },
        {
          "name": "k_level",
          "label": "K-Level",
          "type": "input",
          "readOnly": true
        },
        {
          "type": "info-text",
          "text": [
            "K0 (0-8)",
            "K1 (9-20)",
            "K2 (21-28)",
            "K3 (29-36)",
            "K4 (37-43)"
          ]
        }
      ]
    }
  ]
}

const AMP_NO_PRO = {
  "title": "AMP without Prosthesis (AMPnoPro)",
  "sections": [
    {
      "fields": [
        {
          "name": "score",
          "label": "Score",
          "type": "input",
          "helper": "Enter total score /47"
        },
        {
          "name": "k_level",
          "label": "K-Level",
          "type": "input",
          "readOnly": true
        },
        {
          "type": "info-text",
          "text": [
            "K0 (n/a)",
            "K1 (15-26)",
            "K2 (27-36)",
            "K3 (37-42)",
            "K4 (43-47)"
          ]
        }
      ]
    }
  ]
}