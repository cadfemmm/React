const EST_Schema = {
  "enableLanguageToggle": true,
  "title": {
    "en": "EST (Exercise Stress Test)",
    "ms": "EST (Ujian Tekanan Senaman)"
  },
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
          "name": "date_of_appointment",
          "label": {
            "en": "Date of Appointment",
            "ms": "Tarikh Temujanji"
          },
          "type": "date",
          "placeholder": {
            "en": "Select date",
            "ms": "Pilih tarikh"
          }
        },
        {
          "name": "type_est",
          "label": {
            "en": "Type of EST",
            "ms": "Jenis EST"
          },
          "type": "radio",
          "options": [
            {
              "value": "treadmill",
              "label": {
                "en": "Exercise Stress Test Treadmill",
                "ms": "Ujian Tekanan Senaman Treadmill"
              }
            },
            {
              "value": "treadmill_wheelchair",
              "label": {
                "en": "Exercise Stress Test Treadmill With Wheelchair",
                "ms": "Ujian Tekanan Senaman Treadmill Dengan Kerusi Roda"
              }
            },
            {
              "value": "ergometry",
              "label": {
                "en": "Ergometry",
                "ms": "Ergometri"
              }
            }
          ],
          "labelAbove": true
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "bmi",
              "label": {
                "en": "BMI",
                "ms": "BMI"
              },
              "type": "input",
              "readOnly": true
            }
          ]
        },
        {
          "name": "target_heart_rate",
          "label": {
            "en": "Target Heart Rate",
            "ms": "Kadar Denyutan Jantung Sasaran"
          },
          "type": "input",
          "placeholder": {
            "en": "Free text",
            "ms": "Teks bebas"
          }
        },
        {
          "name": "indication",
          "label": {
            "en": "Indication",
            "ms": "Indikasi"
          },
          "type": "radio",
          "options": [
            {
              "value": "pre_phase_ii",
              "label": {
                "en": "Pre Cardiac Rehabilitation Phase II",
                "ms": "Fasa II Rehabilitasi Jantung Awal"
              }
            },
            {
              "value": "post_phase_ii",
              "label": {
                "en": "Post Cardiac Rehabilitation Phase II",
                "ms": "Fasa II Rehabilitasi Jantung Selepas"
              }
            },
            {
              "value": "post_phase_iii",
              "label": {
                "en": "Post Cardiac Rehabilitation Phase III",
                "ms": "Fasa III Rehabilitasi Jantung Selepas"
              }
            },
            {
              "value": "cardiac_screening",
              "label": {
                "en": "Cardiac Screening",
                "ms": "Saringan Jantung"
              }
            },
            {
              "value": "others",
              "label": {
                "en": "Others",
                "ms": "Lain-lain"
              }
            }
          ],
          "labelAbove": true
        },
        {
          "name": "indication_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Free text",
            "ms": "Teks bebas"
          },
          "showIf": {
            "field": "indication",
            "equals": "others"
          }
        },
        {
          "name": "protocol",
          "label": {
            "en": "Protocol",
            "ms": "Protokol"
          },
          "type": "radio",
          "options": [
            {
              "value": "bruce",
              "label": {
                "en": "Bruce",
                "ms": "Bruce"
              }
            },
            {
              "value": "modified_bruce",
              "label": {
                "en": "Modified Bruce",
                "ms": "Bruce Diubah Suai"
              }
            },
            {
              "value": "who",
              "label": {
                "en": "WHO",
                "ms": "WHO"
              }
            },
            {
              "value": "others",
              "label": {
                "en": "Others",
                "ms": "Lain-Lain"
              }
            }
          ]
        },
        {
          "name": "protocol_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Free text",
            "ms": "Teks bebas"
          },
          "showIf": {
            "field": "protocol",
            "equals": "others"
          }
        },
        {
          "type": "subheading",
          "label": {
            "en": "Graph",
            "ms": "Graph"
          }
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "graf_1",
              "label": {
                "en": "Upload",
                "ms": "Muat naik"
              },
              "title": {
                "en": "Graph 1",
                "ms": "Graph 1"
              },
              "type": "attach-file",
              "accept": "image/*,.pdf"
            },
            {
              "name": "graf_2",
              "label": {
                "en": "Upload",
                "ms": "Muat naik"
              },
              "title": {
                "en": "Graph 2",
                "ms": "Graph 2"
              },
              "type": "attach-file",
              "accept": "image/*,.pdf"
            }
          ]
        },
        {
          "name": "final_report",
          "label": {
            "en": "Final Report",
            "ms": "Laporan Akhir"
          },
          "type": "radio",
          "options": [
            {
              "value": "positive",
              "label": {
                "en": "Positive Stress Test",
                "ms": "Ujian Tekanan Positif"
              }
            },
            {
              "value": "negative",
              "label": {
                "en": "Negative Stress Test",
                "ms": "Ujian Tekanan Negatif"
              }
            },
            {
              "value": "others",
              "label": {
                "en": "Others",
                "ms": "Lain-Lain"
              }
            }
          ]
        },
        {
          "name": "final_report_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Free text",
            "ms": "Teks bebas"
          },
          "showIf": {
            "field": "final_report",
            "equals": "others"
          }
        }
      ]
    }
  ]
}