const Lab_Schema = {
  "enableLanguageToggle": true,
  "title": {
    "en": "Lab Request Form",
    "ms": "Borang Permintaan Makmal"
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
          "type": "subheading",
          "label": {
            "en": "Sample details",
            "ms": "Butiran Sampel"
          }
        },
        {
          "name": "lab",
          "label": {
            "en": "Lab",
            "ms": "Makmal"
          },
          "type": "radio",
          "options": [
            {
              "value": "inhouse",
              "label": {
                "en": "Inhouse",
                "ms": "Dalam Rumah"
              }
            },
            {
              "value": "out_source",
              "label": {
                "en": "Out source",
                "ms": "Sumber Luar"
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
          "readOnly": true,
          "type": "single-select",
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
              "value": "premier_clinic",
              "label": {
                "en": "Premier Clinic",
                "ms": "Klinik Premier"
              }
            },
            {
              "value": "general_clinic",
              "label": {
                "en": "General Clinic",
                "ms": "Klinik Am"
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
              "value": "general_ward",
              "label": {
                "en": "General ward",
                "ms": "Wad Am"
              }
            },
            {
              "value": "cvw",
              "label": {
                "en": "CVW",
                "ms": "CVW"
              }
            },
            {
              "value": "hb3",
              "label": {
                "en": "HB3",
                "ms": "HB3"
              }
            }
          ]
        },
        {
          "type": "row",
          "fields": [
            {
              "name": "requester_date",
              "label": {
                "en": "Date",
                "ms": "Tarikh"
              },
              "type": "date"
            },
            {
              "name": "requester_time",
              "label": {
                "en": "Time",
                "ms": "Masa"
              },
              "type": "input",
              "placeholder": {
                "en": "HH:MM",
                "ms": "HH:MM"
              }
            }
          ]
        },
        {
          "name": "meal",
          "label": {
            "en": "Meal",
            "ms": "Makanan"
          },
          "type": "radio",
          "options": [
            {
              "value": "fasting",
              "label": {
                "en": "Fasting",
                "ms": "Berpuasa"
              }
            },
            {
              "value": "random",
              "label": {
                "en": "Random",
                "ms": "Tidak Berpuasa"
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
          "name": "meal_others",
          "label": "Others",
          "type": "textarea",
          "showIf": {
            "field": "meal",
            "equals": "others"
          }
        },
        {
          "type": "subheading",
          "label": {
            "en": "Profile Test",
            "ms": "Ujian Profil"
          }
        },
        {
          "name": "profile_test",
          "label": "",
          "type": "checkbox-group",
          "inlineWithLabel": true,
          "options": [
            {
              "value": "rft",
              "label": {
                "en": "RFT",
                "ms": "RFT"
              }
            },
            {
              "value": "cbc",
              "label": {
                "en": "CBC",
                "ms": "CBC"
              }
            },
            {
              "value": "tft",
              "label": {
                "en": "TFT",
                "ms": "TFT"
              }
            },
            {
              "value": "rp",
              "label": {
                "en": "RP",
                "ms": "RP"
              }
            },
            {
              "value": "bmp",
              "label": {
                "en": "BMP",
                "ms": "BMP"
              }
            },
            {
              "value": "lp",
              "label": {
                "en": "LP",
                "ms": "LP"
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
          "name": "profile_test_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter details",
            "ms": "Masukkan butiran"
          },
          "showIf": {
            "field": "profile_test",
            "includes": "others"
          }
        },
        {
          "type": "subheading",
          "label": {
            "en": "Biochemistry",
            "ms": "Biokimia"
          }
        },
        {
          "name": "biochemistry",
          "label": "",
          "type": "checkbox-group",
          "inlineWithLabel": true,
          "options": [
            {
              "value": "hba1c",
              "label": {
                "en": "HbA1c",
                "ms": "HbA1c"
              }
            },
            {
              "value": "psa",
              "label": {
                "en": "PSA",
                "ms": "PSA"
              }
            },
            {
              "value": "hiv",
              "label": {
                "en": "HIV 1&2",
                "ms": "HIV 1&2"
              }
            },
            {
              "value": "afp",
              "label": {
                "en": "AFP",
                "ms": "AFP"
              }
            },
            {
              "value": "cea",
              "label": {
                "en": "CEA",
                "ms": "CEA"
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
          "name": "biochemistry_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter details",
            "ms": "Masukkan butiran"
          },
          "showIf": {
            "field": "biochemistry",
            "includes": "others"
          }
        },
        {
          "type": "subheading",
          "label": {
            "en": "Hematology",
            "ms": "Hematologi"
          }
        },
        {
          "name": "hematology",
          "label": "",
          "type": "checkbox-group",
          "inlineWithLabel": true,
          "options": [
            {
              "value": "fbc",
              "label": {
                "en": "FBC",
                "ms": "FBC"
              }
            },
            {
              "value": "hb",
              "label": {
                "en": "HB",
                "ms": "HB"
              }
            },
            {
              "value": "esr",
              "label": {
                "en": "ESR",
                "ms": "ESR"
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
          "name": "hematology_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter details",
            "ms": "Masukkan butiran"
          },
          "showIf": {
            "field": "hematology",
            "includes": "others"
          }
        },
        {
          "type": "subheading",
          "label": {
            "en": "Microbiology",
            "ms": "Mikrobiologi"
          }
        },
        {
          "name": "microbiology",
          "label": "",
          "type": "checkbox-group",
          "inlineWithLabel": true,
          "options": [
            {
              "value": "ufeme",
              "label": {
                "en": "UFEME",
                "ms": "UFEME"
              }
            },
            {
              "value": "urine_cs",
              "label": {
                "en": "Urine C&S",
                "ms": "Urin C&S"
              }
            },
            {
              "value": "microscopy",
              "label": {
                "en": "Microscopy",
                "ms": "Mikroskopi"
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
          "name": "microbiology_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter details",
            "ms": "Masukkan butiran"
          },
          "showIf": {
            "field": "microbiology",
            "includes": "others"
          }
        },
        {
          "type": "subheading",
          "label": {
            "en": "Specimen",
            "ms": "Spesimen"
          }
        },
        {
          "name": "specimen",
          "label": "",
          "type": "checkbox-group",
          "inlineWithLabel": true,
          "options": [
            {
              "value": "sputum",
              "label": {
                "en": "Sputum",
                "ms": "Kahak"
              }
            },
            {
              "value": "faeces",
              "label": {
                "en": "Faeces",
                "ms": "Najis"
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
          "name": "specimen_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter details",
            "ms": "Masukkan butiran"
          },
          "showIf": {
            "field": "specimen",
            "includes": "others"
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
            "en": "Free text",
            "ms": "Teks bebas"
          }
        },
        {
          "name": "result_upload",
          "title": {
            "en": "Upload The Result",
            "ms": "Muat Naik Keputusan"
          },
          "type": "attach-file",
          "accept": "image/*,.pdf"
        },
        {
          "name": "notify_doctor",
          "label": {
            "en": "Notify Doctor",
            "ms": "Maklumkan Doktor"
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
        }
      ]
    }
  ]
}