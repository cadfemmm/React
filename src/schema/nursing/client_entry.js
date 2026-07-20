const RESUS_BAY_SCHEMA = {
  "enableLanguageToggle": true,
  "title": "Clinical Entry",
  "actions": [
    {
      "type": "toggle-language"
    },
    {
      "type": "back",
      "label": {
        "en": "Back",
        "ms": "Kembali"
      }
    }
  ],
  "sections": [
    {
      "fields": [
        {
          "name": "aduan",
          "label": {
            "en": "Complaint",
            "ms": "Aduan"
          },
          "type": "textarea",
          "readOnly": true
        },
        {
          "type": "subheading",
          "label": {
            "en": "Vital Signs & Measurements",
            "ms": "Tanda Vital"
          }
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "bp",
              "label": {
                "en": "BP",
                "ms": "BP"
              },
              "type": "input"
            },
            {
              "name": "rr",
              "label": {
                "en": "RR",
                "ms": "RR"
              },
              "type": "input"
            },
            {
              "name": "spo2",
              "label": {
                "en": "SPO2",
                "ms": "SPO2"
              },
              "type": "input"
            },
            {
              "name": "hr",
              "label": {
                "en": "HR",
                "ms": "HR"
              },
              "type": "input"
            },
            {
              "name": "temp",
              "label": {
                "en": "T",
                "ms": "T"
              },
              "type": "input"
            },
            {
              "name": "ps",
              "label": {
                "en": "P/S",
                "ms": "P/S"
              },
              "type": "input"
            }
          ]
        },
        {
          "type": "subheading",
          "label": {
            "en": "Reports",
            "ms": "Laporan"
          }
        },
        {
          "name": "xray_status",
          "label": {
            "en": "X-Ray",
            "ms": "X-Ray"
          },
          "type": "radio",
          "readOnly": true,
          "options": [
            {
              "value": "non_indicator",
              "label": {
                "en": "Non Indicator",
                "ms": "Tiada Petunjuk"
              }
            },
            {
              "value": "done",
              "label": {
                "en": "Done",
                "ms": "Selesai"
              }
            }
          ]
        },
        {
          "name": "xray_result",
          "label": {
            "en": "X-Ray Result",
            "ms": "Keputusan X-Ray"
          },
          "type": "textarea",
          "placeholder": {
            "en": "X-Ray result",
            "ms": "Keputusan X-Ray"
          },
          "readOnly": true,
          "showIf": {
            "field": "xray_status",
            "equals": "done"
          }
        },
        {
          "name": "lab_status",
          "label": {
            "en": "Lab Result",
            "ms": "Keputusan Makmal"
          },
          "type": "radio",
          "readOnly": true,
          "options": [
            {
              "value": "non_indicator",
              "label": {
                "en": "Non Indicator",
                "ms": "Tiada Petunjuk"
              }
            },
            {
              "value": "done",
              "label": {
                "en": "Done",
                "ms": "Selesai"
              }
            }
          ]
        },
        {
          "name": "lab_result",
          "label": {
            "en": "Lab Result",
            "ms": "KEPUTUSAN MAKMAL"
          },
          "type": "textarea",
          "placeholder": {
            "en": "Lab result",
            "ms": "Keputusan makmal"
          },
          "readOnly": true,
          "showIf": {
            "field": "lab_status",
            "equals": "done"
          }
        },
        {
          "type": "subheading",
          "label": {
            "en": "Diagnosis & Status",
            "ms": "Diagnosis & Status"
          }
        },
        {
          "name": "diagnosis",
          "label": {
            "en": "Diagnosis",
            "ms": "Diagnosis"
          },
          "type": "input",
          "readOnly": true
        },
        {
          "name": "dirawat_oleh_doktor",
          "label": {
            "en": "Treated by Doctor",
            "ms": "Dirawat Oleh Doktor"
          },
          "type": "input",
          "readOnly": true
        },
        {
          "name": "doctor_plan",
          "label": {
            "en": "Plan / Management",
            "ms": "Pelan / Pengurusan"
          },
          "type": "textarea",
          "readOnly": true
        },
        {
          "name": "others",
          "label": {
            "en": "Others",
            "ms": "Lain-Lain"
          },
          "type": "textarea",
          "readOnly": true
        }
      ]
    }
  ]
}