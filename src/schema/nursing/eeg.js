const EEG_SCHEMA = {
  "enableLanguageToggle": true,
  "title": {
    "en": "EEG(Electroencephalogram)",
    "ms": "EEG"
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
          "name": "type_eeg",
          "label": {
            "en": "Type of EEG",
            "ms": "Jenis EEG"
          },
          "type": "radio",
          "options": [
            {
              "value": "routine",
              "label": {
                "en": "Routine EEG",
                "ms": "EEG Rutin"
              }
            },
            {
              "value": "sleep_deprived",
              "label": {
                "en": "Sleep Deprived EEG",
                "ms": "EEG Kurang Tidur"
              }
            },
            {
              "value": "video_telemetry",
              "label": {
                "en": "Video Telemetry Recording",
                "ms": "Rakaman Telemetri Video"
              }
            }
          ],
          "labelAbove": true
        },
        {
          "name": "general_appearance",
          "label": {
            "en": "General Appearance & Mental Status",
            "ms": "Penampakan Umum & Status Mental"
          },
          "type": "textarea",
          "placeholder": {
            "en": "Free text",
            "ms": "Teks bebas"
          }
        },
        {
          "name": "medication",
          "label": {
            "en": "Medication",
            "ms": "Ubatan"
          },
          "type": "textarea",
          "readOnly": true,
          "placeholder": {
            "en": "Free text",
            "ms": "Teks bebas"
          }
        },
        {
          "name": "sedation",
          "label": {
            "en": "Sedation",
            "ms": "Sedasi"
          },
          "type": "radio",
          "options": [
            {
              "value": "yes",
              "label": {
                "en": "Yes",
                "ms": "Ya"
              }
            },
            {
              "value": "no",
              "label": {
                "en": "No",
                "ms": "Tidak"
              }
            }
          ]
        },
        {
          "type": "subheading",
          "label": {
            "en": "Technical Settings",
            "ms": "Tetapan Teknikal"
          }
        },
        {
          "name": "sensitivity",
          "label": {
            "en": "Sensitivity",
            "ms": "Kehasilan"
          },
          "type": "radio",
          "options": [
            {
              "value": "5",
              "label": {
                "en": "5 μV/mm",
                "ms": "5 μV/mm"
              }
            },
            {
              "value": "7",
              "label": {
                "en": "7 μV/mm",
                "ms": "7 μV/mm"
              }
            },
            {
              "value": "10",
              "label": {
                "en": "10 μV/mm",
                "ms": "10 μV/mm"
              }
            },
            {
              "value": "15",
              "label": {
                "en": "15 μV/mm",
                "ms": "15 μV/mm"
              }
            }
          ]
        },
        {
          "name": "high_freq_filter",
          "label": {
            "en": "High Frequency Filter",
            "ms": "Penapis Frekuensi Tinggi"
          },
          "type": "radio",
          "options": [
            {
              "value": "off",
              "label": {
                "en": "OFF",
                "ms": "MATIKAN"
              }
            },
            {
              "value": "50",
              "label": {
                "en": "50 Hz",
                "ms": "50 Hz"
              }
            },
            {
              "value": "70",
              "label": {
                "en": "70 Hz",
                "ms": "70 Hz"
              }
            },
            {
              "value": "100",
              "label": {
                "en": "100 Hz",
                "ms": "100 Hz"
              }
            }
          ]
        },
        {
          "name": "low_freq_filter",
          "label": {
            "en": "Low Frequency Filter",
            "ms": "Penapis Frekuensi Rendah"
          },
          "type": "radio",
          "options": [
            {
              "value": "off",
              "label": {
                "en": "OFF",
                "ms": "MATIKAN"
              }
            },
            {
              "value": "0.1",
              "label": {
                "en": "0.1 Hz",
                "ms": "0.1 Hz"
              }
            },
            {
              "value": "0.3",
              "label": {
                "en": "0.3 Hz",
                "ms": "0.3 Hz"
              }
            },
            {
              "value": "0.5",
              "label": {
                "en": "0.5 Hz",
                "ms": "0.5 Hz"
              }
            }
          ]
        },
        {
          "name": "paper_speed",
          "label": {
            "en": "Paper Speed",
            "ms": "Kelajuan Kertas"
          },
          "type": "radio",
          "options": [
            {
              "value": "60",
              "label": {
                "en": "60 mm/sec",
                "ms": "60 mm/saat"
              }
            },
            {
              "value": "30",
              "label": {
                "en": "30 mm/sec",
                "ms": "30 mm/saat"
              }
            },
            {
              "value": "16",
              "label": {
                "en": "16 mm/sec",
                "ms": "16 mm/saat"
              }
            },
            {
              "value": "3_10",
              "label": {
                "en": "3-10 mm/sec",
                "ms": "3-10 mm/saat"
              }
            }
          ]
        },
        {
          "name": "montages",
          "label": {
            "en": "Montages",
            "ms": "Montages"
          },
          "type": "radio",
          "options": [
            {
              "value": "av_referential",
              "label": {
                "en": "AV Referential",
                "ms": "AV Referential"
              }
            },
            {
              "value": "bipolar",
              "label": {
                "en": "Bipolar / Double Banana",
                "ms": "Bipolar / Double Banana"
              }
            },
            {
              "value": "transverse",
              "label": {
                "en": "Transverse",
                "ms": "Melintang"
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
          "name": "montages_others",
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
            "field": "montages",
            "equals": "others"
          }
        },
        {
          "name": "electrocardiogram",
          "label": {
            "en": "Electrocardiogram",
            "ms": "Elektrokardiogram"
          },
          "type": "radio",
          "options": [
            {
              "value": "yes",
              "label": {
                "en": "Yes",
                "ms": "Ya"
              }
            },
            {
              "value": "no",
              "label": {
                "en": "No",
                "ms": "Tidak"
              }
            }
          ]
        },
        {
          "name": "electromyogram",
          "label": {
            "en": "Electromyogram",
            "ms": "Elektromiogram"
          },
          "type": "radio",
          "options": [
            {
              "value": "yes",
              "label": {
                "en": "Yes",
                "ms": "Ya"
              }
            },
            {
              "value": "no",
              "label": {
                "en": "No",
                "ms": "Tidak"
              }
            }
          ]
        },
        {
          "name": "photic_stimulation",
          "label": {
            "en": "Photic Stimulation",
            "ms": "Rangsangan Fotik"
          },
          "type": "radio",
          "options": [
            {
              "value": "yes",
              "label": {
                "en": "Yes",
                "ms": "Ya"
              }
            },
            {
              "value": "no",
              "label": {
                "en": "No",
                "ms": "Tidak"
              }
            }
          ]
        },
        {
          "name": "hyperventilation",
          "label": {
            "en": "Hyperventilation",
            "ms": "Hiperventilasi"
          },
          "type": "radio",
          "options": [
            {
              "value": "3_min",
              "label": {
                "en": "3 Minutes",
                "ms": "3 Minit"
              }
            },
            {
              "value": "5_min",
              "label": {
                "en": "5 Minutes",
                "ms": "5 Minit"
              }
            },
            {
              "value": "not_done",
              "label": {
                "en": "Not Done",
                "ms": "Tidak Dilakukan"
              }
            }
          ]
        },
        {
          "name": "previous_study",
          "label": {
            "en": " Previous Study",
            "ms": "Muat naik EEG Sebelumnya"
          },
          "type": "radio",
          "options": [
            {
              "value": "yes",
              "label": {
                "en": "Yes",
                "ms": "Ya"
              }
            },
            {
              "value": "no",
              "label": {
                "en": "No",
                "ms": "Tidak"
              }
            }
          ]
        },
        {
          "name": "previous_study_upload",
          "label": {
            "en": "Upload Previous EEG",
            "ms": "Muat naik EEG Sebelumny"
          },
          "type": "attach-file",
          "accept": "image/*,.pdf",
          "showIf": {
            "field": "previous_study",
            "equals": "yes"
          }
        },
        {
          "type": "subheading",
          "label": {
            "en": "Report",
            "ms": "Laporan"
          }
        },
        {
          "name": "graf",
          "title": {
            "en": "Graph (Running Graph Report & Video)",
            "ms": "Graph (Laporan Graph Berjalan & Video)"
          },
          "type": "attach-file",
          "accept": "image/*,.pdf,video/*"
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
              "value": "normal",
              "label": {
                "en": "Normal EEG",
                "ms": "EEG Normal"
              }
            },
            {
              "value": "abnormal",
              "label": {
                "en": "Abnormal EEG",
                "ms": "EEG Tidak Normal"
              }
            },
            {
              "value": "borderline",
              "label": {
                "en": "Borderline EEG",
                "ms": "EEG Sempadan"
              }
            }
          ]
        },
        {
          "name": "final_report_abnormal",
          "label": {
            "en": "Specify",
            "ms": "Nyatakan"
          },
          "type": "textarea",
          "placeholder": {
            "en": "Free text",
            "ms": "Teks bebas"
          },
          "showIf": {
            "field": "final_report",
            "equals": "abnormal"
          }
        },
        {
          "name": "final_report_borderline",
          "label": {
            "en": "Specify",
            "ms": "Nyatakan"
          },
          "type": "textarea",
          "placeholder": {
            "en": "Free text",
            "ms": "Teks bebas"
          },
          "showIf": {
            "field": "final_report",
            "equals": "borderline"
          }
        }
      ]
    }
  ]
}