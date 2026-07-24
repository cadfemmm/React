const SCHEMA = {
  "enableLanguageToggle": true,
  "title": {
    "en": "Clinical Notes",
    "ms": "Nota Klinikal"
  },
  "sections": [
    {
      "fields": [
        {
          "name": "clinical_note_type",
          "label": {
            "en": "Type",
            "ms": "Jenis"
          },
          "type": "radio",
          "options": [
            {
              "label": {
                "en": "Emergency",
                "ms": "Kecemasan"
              },
              "value": "emergency"
            },
            {
              "label": {
                "en": "Non-Emergency",
                "ms": "Bukan Kecemasan"
              },
              "value": "non_emergency"
            }
          ]
        },
        {
          "name": "aduan",
          "label": {
            "en": "Chief Complaint",
            "ms": "Aduan Utama"
          },
          "type": "textarea",
          "placeholder": {
            "en": "Enter chief complaint",
            "ms": "Masukkan aduan utama"
          }
        },
        {
          "type": "accordion",
          "name": "vitals_section",
          "label": {
            "en": "Vital Signs & Measurements",
            "ms": "Tanda Vital"
          },
          "defaultOpen": false,
          "children": [
            {
              "type": "row",
              "fields": [
                {
                  "name": "bp",
                  "label": {
                    "en": "BP",
                    "ms": "BP"
                  },
                  "type": "input",
                  "readOnly": true
                },
                {
                  "name": "rr",
                  "label": {
                    "en": "RR",
                    "ms": "RR"
                  },
                  "type": "input",
                  "readOnly": true
                },
                {
                  "name": "spo2",
                  "label": {
                    "en": "SPO2",
                    "ms": "SPO2"
                  },
                  "type": "input",
                  "readOnly": true
                },
                {
                  "name": "hr",
                  "label": {
                    "en": "HR",
                    "ms": "HR"
                  },
                  "type": "input",
                  "readOnly": true
                },
                {
                  "name": "temp",
                  "label": {
                    "en": "T",
                    "ms": "T"
                  },
                  "type": "input",
                  "readOnly": true
                },
                {
                  "name": "ps",
                  "label": {
                    "en": "P/S",
                    "ms": "P/S"
                  },
                  "type": "input",
                  "readOnly": true
                }
              ]
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
          "name": "xray_upload",
          "title": {
            "en": "Upload X-Ray Report",
            "ms": "Muat Naik Laporan X-Ray"
          },
          "type": "attach-file",
          "accept": "application/pdf,image/*",
          "multiple": false,
          "showIf": {
            "field": "xray_status",
            "equals": "yes"
          }
        },
        {
          "name": "lab_status",
          "label": {
            "en": "Lab Report",
            "ms": "Laporan Makmal"
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
          "name": "lab_upload",
          "title": {
            "en": "Upload Lab Report",
            "ms": "Muat Naik Laporan Makmal"
          },
          "type": "attach-file",
          "accept": "application/pdf,image/*",
          "multiple": false,
          "showIf": {
            "field": "lab_status",
            "equals": "yes"
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
          "placeholder": {
            "en": "Enter diagnosis",
            "ms": "Masukkan diagnosis"
          }
        },
        {
          "name": "dirawat_oleh_doktor",
          "label": {
            "en": "Treated by Doctor",
            "ms": "Dirawat Oleh Doktor"
          },
          "type": "input",
          "placeholder": {
            "en": "Doctor name",
            "ms": "Nama doktor"
          }
        },
        {
          "name": "doctor_plan",
          "label": {
            "en": "Plan / Management",
            "ms": "Pelan / Pengurusan"
          },
          "type": "textarea",
          "placeholder": {
            "en": "Enter plan or management",
            "ms": "Masukkan pelan atau pengurusan"
          }
        },
        {
          "name": "others",
          "label": {
            "en": "Others",
            "ms": "Lain-Lain"
          },
          "type": "textarea",
          "placeholder": {
            "en": "Additional notes",
            "ms": "Nota tambahan"
          }
        }
      ]
    }
  ]
}