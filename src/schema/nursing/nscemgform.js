const NSCEMGFORM = {
  "enableLanguageToggle": true,
  "title": {
    "en": "NCS(Nerve conduction studies) & EMG(Electomyography)",
    "ms": "NCS & EMG"
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
          "name": "type_of_study",
          "label": {
            "en": "Type of Study",
            "ms": "Jenis Kajian"
          },
          "type": "radio",
          "options": [
            {
              "value": "ncs",
              "label": {
                "en": "Nerves Conduction Study (NCS)",
                "ms": "Kajian Pengaliran Saraf (NCS)"
              }
            },
            {
              "value": "emg",
              "label": {
                "en": "Electromyogram (EMG)",
                "ms": "Elektromiogram (EMG)"
              }
            },
            {
              "value": "both",
              "label": {
                "en": "Both",
                "ms": "Both"
              }
            }
          ],
          "labelAbove": true
        },
        {
          "name": "trace_old_report",
          "label": {
            "en": "Trace Old Report",
            "ms": "Jejak Laporan Lama"
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
          "name": "location",
          "label": {
            "en": "Location",
            "ms": "Lokasi"
          },
          "type": "radio",
          "options": [
            {
              "value": "upper",
              "label": {
                "en": "Upper Extremity",
                "ms": "Anggota Badan Atas"
              }
            },
            {
              "value": "lower",
              "label": {
                "en": "Lower Extremity",
                "ms": "Anggota Badan Bawah"
              }
            },
            {
              "value": "upper_lower",
              "label": {
                "en": "Upper & Lower Extremity",
                "ms": "Anggota Badan Atas & Bawah"
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
          "name": "location_others",
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
            "field": "location",
            "equals": "others"
          }
        },
        {
          "name": "study_modality",
          "label": {
            "en": "Type Of Study (Modality)",
            "ms": "Jenis Kajian (Modaliti)"
          },
          "type": "radio",
          "options": [
            {
              "value": "motor",
              "label": {
                "en": "Motor Study",
                "ms": "Kajian Motor"
              }
            },
            {
              "value": "sensory",
              "label": {
                "en": "Sensory Study",
                "ms": "Kajian Deria"
              }
            },
            {
              "value": "motor_sensory",
              "label": {
                "en": "Motor & Sensory Study",
                "ms": "Kajian Motor & Deria"
              }
            },
            {
              "value": "late_response",
              "label": {
                "en": "Late Response",
                "ms": "Respon Lambat"
              }
            }
          ],
          "labelAbove": true
        },
        {
          "name": "previous_study",
          "label": {
            "en": "Previous Study",
            "ms": "Kajian Sebelumnya"
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
            "en": "Upload Previous NCS/EMG",
            "ms": "Muat naik NCS/EMG Sebelumnya"
          },
          "type": "attach-file",
          "accept": "image/*,.pdf",
          "showIf": {
            "field": "previous_study",
            "equals": "yes"
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
              "value": "20",
              "label": {
                "en": "20 μV",
                "ms": "20 μV"
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
          "name": "sensitivity_others",
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
            "field": "sensitivity",
            "equals": "others"
          }
        },
        {
          "name": "duration",
          "label": {
            "en": "Duration",
            "ms": "Tempoh"
          },
          "type": "radio",
          "options": [
            {
              "value": "1",
              "label": {
                "en": "1 m/sec",
                "ms": "1 m/saat"
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
          "name": "duration_others",
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
            "field": "duration",
            "equals": "others"
          }
        },
        {
          "name": "time_base",
          "label": {
            "en": "Time Base",
            "ms": "Asas Masa"
          },
          "type": "radio",
          "options": [
            {
              "value": "2",
              "label": {
                "en": "2 m/sec",
                "ms": "2 m/saat"
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
          "name": "time_base_others",
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
            "field": "time_base",
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
              "value": "normal",
              "label": {
                "en": "Normal Findings",
                "ms": "Pemerhatian Normal"
              }
            },
            {
              "value": "abnormal",
              "label": {
                "en": "Abnormal Findings",
                "ms": "Pemerhatian Tidak Normal"
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
            "oneOf": [
              "normal",
              "abnormal"
            ]
          }
        }
      ]
    }
  ]
}