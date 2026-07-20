const XRAY_Schema = {
  "enableLanguageToggle": true,
  "title": {
    "en": "X-Ray Information (E-Form)",
    "ms": "Maklumat X-Ray (E-Form)"
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
          "name": "xray",
          "label": {
            "en": "XRay",
            "ms": "XRay"
          },
          "type": "radio",
          "options": [
            {
              "value": "abdomen",
              "label": {
                "en": "Abdomen",
                "ms": "Abdomen"
              }
            },
            {
              "value": "chest",
              "label": {
                "en": "Chest",
                "ms": "Dada"
              }
            },
            {
              "value": "spine",
              "label": {
                "en": "Spine",
                "ms": "Tulang Belakang"
              }
            },
            {
              "value": "skull",
              "label": {
                "en": "Skull",
                "ms": "Tengkorak"
              }
            },
            {
              "value": "pelvis",
              "label": {
                "en": "Pelvis",
                "ms": "Pelvis"
              }
            },
            {
              "value": "extremity",
              "label": {
                "en": "Extremity",
                "ms": "Anggota Badan"
              }
            },
            {
              "value": "others",
              "label": {
                "en": "Others",
                "ms": "Lain-lain"
              }
            }
          ]
        },
        {
          "name": "xray_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter X-ray type",
            "ms": "Masukkan jenis X-ray"
          },
          "showIf": {
            "field": "xray",
            "equals": "others"
          }
        },
        {
          "name": "side",
          "label": {
            "en": "Side of Examination",
            "ms": "Bahagian Pemeriksaan"
          },
          "type": "radio",
          "options": [
            {
              "value": "right",
              "label": {
                "en": "Right",
                "ms": "Kanan"
              }
            },
            {
              "value": "left",
              "label": {
                "en": "Left",
                "ms": "Kiri"
              }
            },
            {
              "value": "bilateral",
              "label": {
                "en": "Bilateral",
                "ms": "Dua Hala"
              }
            },
            {
              "value": "na",
              "label": {
                "en": "N/A",
                "ms": "T/A"
              }
            }
          ]
        },
        {
          "name": "position",
          "label": {
            "en": "Position",
            "ms": "Posisi"
          },
          "type": "radio",
          "options": [
            {
              "value": "pa",
              "label": {
                "en": "PA",
                "ms": "PA"
              }
            },
            {
              "value": "ap",
              "label": {
                "en": "AP",
                "ms": "AP"
              }
            },
            {
              "value": "lateral",
              "label": {
                "en": "Lateral",
                "ms": "Lateral"
              }
            },
            {
              "value": "oblique",
              "label": {
                "en": "Oblique",
                "ms": "Oblique"
              }
            },
            {
              "value": "others",
              "label": {
                "en": "Others",
                "ms": "Lain-lain"
              }
            }
          ]
        },
        {
          "name": "position_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter position",
            "ms": "Masukkan posisi"
          },
          "showIf": {
            "field": "position",
            "equals": "others"
          }
        },
        {
          "type": "subheading",
          "label": {
            "en": "History & Consent",
            "ms": "Sejarah & Persetujuan"
          }
        },
        {
          "name": "history_from_doctor",
          "label": {
            "en": "Medical History from the Doctor",
            "ms": "Sejarah Perubatan dari Doktor"
          },
          "type": "textarea",
          "readOnly": true,
          "placeholder": {
            "en": "Auto-generated from Customer Service",
            "ms": "Dijana secara automatik daripada Perkhidmatan Pelanggan"
          }
        },
        {
          "name": "consent_from_client",
          "label": {
            "en": "Consent from Client",
            "ms": "Persetujuan dari Klien"
          },
          "type": "radio",
          "options": [
            {
              "label": {
                "en": "Yes",
                "ms": "Ya"
              },
              "value": "yes"
            },
            {
              "label": {
                "en": "No",
                "ms": "No"
              },
              "value": "no"
            }
          ],
          "placeholder": {
            "en": "Enter consent information",
            "ms": "Masukkan maklumat persetujuan"
          }
        },
        {
          "type": "subheading",
          "label": {
            "en": "Clinical Details",
            "ms": "Butiran Klinikal"
          }
        },
        {
          "name": "client_status",
          "label": {
            "en": "Client Status",
            "ms": "Status Klien"
          },
          "type": "radio",
          "options": [
            {
              "value": "walking",
              "label": {
                "en": "Walking",
                "ms": "Berjalan"
              }
            },
            {
              "value": "wheel_chair",
              "label": {
                "en": "Wheel Chair",
                "ms": "Kerusi Roda"
              }
            },
            {
              "value": "trolly",
              "label": {
                "en": "Trolly",
                "ms": "Troli"
              }
            }
          ]
        },
        {
          "name": "status_ob_pp_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter status",
            "ms": "Masukkan status"
          },
          "showIf": {
            "field": "status_ob_pp",
            "equals": "others"
          }
        },
        {
          "name": "ward",
          "label": {
            "en": "Ward",
            "ms": "Wad"
          },
          "type": "radio",
          "options": [
            {
              "value": "tsw",
              "label": {
                "en": "TSW",
                "ms": "TSW"
              }
            },
            {
              "value": "dpw",
              "label": {
                "en": "DPW",
                "ms": "DPW"
              }
            },
            {
              "value": "premier_ward",
              "label": {
                "en": "Premier Ward",
                "ms": "Wad Premier"
              }
            },
            {
              "value": "out_patient",
              "label": {
                "en": "Out Patient",
                "ms": "Pesakit Luar"
              }
            }
          ]
        },
        {
          "name": "lmp_date",
          "label": {
            "en": "Last Menstrual Date",
            "ms": "Tarikh Haid Terakhir"
          },
          "type": "date"
        },
        {
          "type": "subheading",
          "label": {
            "en": "Exposure Factor",
            "ms": "Faktor Pendedahan"
          }
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "kvp",
              "label": {
                "en": "kVp",
                "ms": "kVp"
              },
              "type": "input",
              "placeholder": {
                "en": "kVp",
                "ms": "kVp"
              }
            },
            {
              "name": "mas",
              "label": {
                "en": "mAs",
                "ms": "mAs"
              },
              "type": "input",
              "placeholder": {
                "en": "mAs",
                "ms": "mAs"
              }
            },
            {
              "name": "seconds",
              "label": {
                "en": "S (Seconds)",
                "ms": "S (Saat)"
              },
              "type": "input",
              "placeholder": {
                "en": "S",
                "ms": "S"
              }
            }
          ]
        },
        {
          "type": "subheading",
          "label": {
            "en": "XRay Image Upload",
            "ms": "Muat Naik Gambar XRay"
          }
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "xray_image_1",
              "title": {
                "en": "XRay Image 1",
                "ms": "Gambar XRay 1"
              },
              "type": "attach-file",
              "accept": "image/*,.pdf"
            },
            {
              "name": "xray_image_2",
              "title": {
                "en": "XRay Image 2",
                "ms": "Gambar XRay 2"
              },
              "type": "attach-file",
              "accept": "image/*,.pdf"
            },
            {
              "name": "xray_image_3",
              "title": {
                "en": "XRay Image 3",
                "ms": "Gambar XRay 3"
              },
              "type": "attach-file",
              "accept": "image/*,.pdf",
              "showIf": {
                "field": "_xray_image_count",
                "oneOf": [
                  "3",
                  "4",
                  "5"
                ]
              }
            },
            {
              "name": "xray_image_4",
              "title": {
                "en": "XRay Image 4",
                "ms": "Gambar XRay 4"
              },
              "type": "attach-file",
              "accept": "image/*,.pdf",
              "showIf": {
                "field": "_xray_image_count",
                "oneOf": [
                  "4",
                  "5"
                ]
              }
            },
            {
              "name": "xray_image_5",
              "title": {
                "en": "XRay Image 5",
                "ms": "Gambar XRay 5"
              },
              "type": "attach-file",
              "accept": "image/*,.pdf",
              "showIf": {
                "field": "_xray_image_count",
                "equals": "5"
              }
            }
          ]
        },
        {
          "type": "button",
          "label": {
            "en": "Added Image File (+)",
            "ms": "Tambah Fail Gambar (+)"
          },
          "action": "add_xray_image"
        },
        {
          "type": "subheading",
          "label": {
            "en": "Report from Radiographer",
            "ms": "Laporan dari Ahli Radiografi"
          }
        },
        {
          "name": "basic_report",
          "label": {
            "en": "Basic Report",
            "ms": "Laporan Asas"
          },
          "type": "radio",
          "options": [
            {
              "value": "normal",
              "label": {
                "en": "Normal",
                "ms": "Normal"
              }
            },
            {
              "value": "abnormal",
              "label": {
                "en": "Abnormal",
                "ms": "Tidak Normal"
              }
            }
          ]
        },
        {
          "name": "problem_client_position",
          "label": {
            "en": "Problem Client Position",
            "ms": "Masalah Posisi Klien"
          },
          "type": "radio",
          "options": [
            {
              "value": "cannot_move",
              "label": {
                "en": "Cannot Move",
                "ms": "Tidak Boleh Bergerak"
              }
            },
            {
              "value": "cannot_turn",
              "label": {
                "en": "Cannot Turn",
                "ms": "Tidak Boleh Berpaling"
              }
            },
            {
              "value": "moving",
              "label": {
                "en": "Moving",
                "ms": "Bergerak"
              }
            },
            {
              "value": "foreign_body",
              "label": {
                "en": "Foreign Body",
                "ms": "Benda Asing"
              }
            }
          ]
        },
        {
          "type": "subheading",
          "label": {
            "en": "Report from Doctor",
            "ms": "Laporan dari Doktor"
          }
        },
        {
          "name": "report_from_doctor",
          "label": {
            "en": "Report from Doctor",
            "ms": "Laporan dari Doktor"
          },
          "type": "textarea",
          "placeholder": {
            "en": "Enter report",
            "ms": "Masukkan laporan"
          }
        },
        {
          "name": "charging",
          "label": {
            "en": "Charging",
            "ms": "Caj"
          },
          "type": "single-select",
          "options": [
            {
              "value": "abdomen_rm60",
              "label": {
                "en": "Abdomen RM60",
                "ms": "Abdomen RM60"
              }
            },
            {
              "value": "chest_rm60",
              "label": {
                "en": "Chest RM 60",
                "ms": "Dada RM 60"
              }
            },
            {
              "value": "skull_rm90",
              "label": {
                "en": "Skull RM 90",
                "ms": "Tengkorak RM 90"
              }
            }
          ]
        }
      ]
    }
  ]
}