const Holter_schema = {
  "enableLanguageToggle": true,
  "title": {
    "en": "HOLTER",
    "ms": "HOLTER"
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
          "name": "type_holter",
          "label": {
            "en": "Type of Holter",
            "ms": "Jenis Holter"
          },
          "type": "radio",
          "options": [
            {
              "value": "recording_devices",
              "label": {
                "en": "Recording Devices",
                "ms": "Peranti Rakaman"
              }
            },
            {
              "value": "patch",
              "label": {
                "en": "Patch",
                "ms": "Tampal"
              }
            }
          ],
          "labelAbove": true
        },
        {
          "name": "hours_recording",
          "label": {
            "en": "Hours Recording",
            "ms": "Jam Rakaman"
          },
          "type": "radio",
          "options": [
            {
              "value": "7",
              "label": {
                "en": "7 hrs",
                "ms": "7 jam"
              }
            },
            {
              "value": "12",
              "label": {
                "en": "12 hrs",
                "ms": "12 jam"
              }
            },
            {
              "value": "24",
              "label": {
                "en": "24 hrs",
                "ms": "24 jam"
              }
            },
            {
              "value": "48",
              "label": {
                "en": "48 hrs",
                "ms": "48 jam"
              }
            },
            {
              "value": "76",
              "label": {
                "en": "76 hrs",
                "ms": "76 jam"
              }
            }
          ]
        },
        {
          "name": "ecg_channel",
          "label": {
            "en": "ECG Channel",
            "ms": "Saluran ECG"
          },
          "type": "radio",
          "options": [
            {
              "value": "2",
              "label": {
                "en": "2 CH",
                "ms": "2 CH"
              }
            },
            {
              "value": "3",
              "label": {
                "en": "3 CH",
                "ms": "3 CH"
              }
            },
            {
              "value": "4",
              "label": {
                "en": "4 CH",
                "ms": "4 CH"
              }
            },
            {
              "value": "5",
              "label": {
                "en": "5 CH",
                "ms": "5 CH"
              }
            },
            {
              "value": "6",
              "label": {
                "en": "6 CH",
                "ms": "6 CH"
              }
            }
          ]
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
          "type": "textarea"
        }
      ]
    }
  ]
}