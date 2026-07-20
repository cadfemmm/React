const Evoke_schema = {
  "enableLanguageToggle": true,
  "title": {
    "en": "Evoke Potential Study",
    "ms": "Kajian Potensi Terangsang"
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
            "en": "Select Date",
            "ms": "Pilih Tarikh"
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
              "value": "vep",
              "label": {
                "en": "Visual Evoked Potential",
                "ms": "Potensi Terangsang Visual"
              }
            },
            {
              "value": "baep",
              "label": {
                "en": "Brain Stem Auditory Evoked Potential",
                "ms": "Potensi Terangsang Pendengaran Batang Otak"
              }
            },
            {
              "value": "ssep_lower",
              "label": {
                "en": "Somatosensory Evoked Potential Lower Limb (Posterior Tibial Nerves)",
                "ms": "Potensi Terangsang Somatosensori Anggota Bawah (Saraf Tibial Posterior)"
              }
            },
            {
              "value": "ssep_upper",
              "label": {
                "en": "Somatosensory Evoked Potential Upper Limb (Median Nerves)",
                "ms": "Potensi Terangsang Somatosensori Anggota Atas (Saraf Median)"
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
          "name": "mode_selection",
          "label": {
            "en": "Mode Selection",
            "ms": "Pemilihan Mod"
          },
          "type": "radio",
          "options": [
            {
              "value": "vep_pattern",
              "label": {
                "en": "VEP PATTERN",
                "ms": "CORAK VEP"
              }
            },
            {
              "value": "vep_goggles",
              "label": {
                "en": "VEP-GOGGLES",
                "ms": "VEP-GOGGEL"
              }
            },
            {
              "value": "baer",
              "label": {
                "en": "BAER",
                "ms": "BAER"
              }
            },
            {
              "value": "ssep",
              "label": {
                "en": "SSEP",
                "ms": "SSEP"
              }
            }
          ]
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
              "value": "off",
              "label": {
                "en": "OFF",
                "ms": "MATIKAN"
              }
            },
            {
              "value": "20",
              "label": {
                "en": "20 μV/mm",
                "ms": "20 μV/mm"
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
              "value": "1",
              "label": {
                "en": "1 Hz",
                "ms": "1 Hz"
              }
            }
          ]
        },
        {
          "name": "impedance_check",
          "label": {
            "en": "Impedance Check",
            "ms": "Semakan Impedans"
          },
          "type": "radio",
          "options": [
            {
              "value": "under_5",
              "label": {
                "en": "< 5 kΩ",
                "ms": "< 5 kΩ"
              }
            },
            {
              "value": "over_5",
              "label": {
                "en": "> 5 kΩ",
                "ms": "> 5 kΩ"
              }
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