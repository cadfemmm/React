const patient_fleet = {
  "enableLanguageToggle": true,
  "actions": "ACTIONS",
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Patient Fleet Management"
        },
        {
          "name": "acm_cm_detail",
          "label": {
            "en": "ACM/CM Detail",
            "ms": "Butiran ACM/CM"
          },
          "type": "input",
          "readOnly": true
        },
        {
          "name": "nama_carer",
          "label": {
            "en": "Carer Name",
            "ms": "Nama Carer"
          },
          "type": "input",
          "readOnly": true
        },
        {
          "name": "booking_location",
          "label": "Booking Location",
          "labelAbove": true,
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
              "value": "general_ward",
              "label": {
                "en": "General Ward",
                "ms": "Wad Am"
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
              "value": "others",
              "label": {
                "en": "Others",
                "ms": "Lain-lain"
              }
            }
          ]
        },
        {
          "name": "booking_location_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-lain"
          },
          "type": "input",
          "showIf": {
            "field": "booking_location",
            "equals": "others"
          }
        },
        {
          "type": "subheading",
          "label": {
            "en": "Condition & Aid",
            "ms": "Keadaan & Alat Bantu"
          }
        },
        {
          "name": "kondisi_ob",
          "label": {
            "en": "Patient Condition",
            "ms": "Kondisi OB"
          },
          "type": "radio",
          "options": [
            {
              "value": "wheel_chair",
              "label": {
                "en": "Wheel Chair",
                "ms": "Kerusi Roda"
              }
            },
            {
              "value": "bed_ridden",
              "label": {
                "en": "Bed Ridden",
                "ms": "Terbaring di Katil"
              }
            },
            {
              "value": "walk_with_aid",
              "label": {
                "en": "Walk with Walking Aid",
                "ms": "Berjalan dengan Alat Bantu"
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
          "name": "kondisi_ob_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-lain"
          },
          "type": "input",
          "showIf": {
            "field": "kondisi_ob",
            "equals": "others"
          }
        },
        {
          "name": "ambulatory_aid",
          "label": {
            "en": "Ambulatory Aid",
            "ms": "Alat Bantu Berjalan"
          },
          "type": "radio",
          "options": [
            {
              "value": "walking_stick",
              "label": {
                "en": "Walking Stick",
                "ms": "Walking Stick"
              }
            },
            {
              "value": "quadripod",
              "label": {
                "en": "Quadripod",
                "ms": "Quadripod"
              }
            },
            {
              "value": "crutches",
              "label": {
                "en": "Crutches",
                "ms": "Crutches"
              }
            },
            {
              "value": "no_aid",
              "label": {
                "en": "No Ambulatory Aid",
                "ms": "No Ambulatory Aid"
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
          "name": "ambulatory_aid_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter if Others selected",
            "ms": "Masukkan jika Lain-lain dipilih"
          },
          "showIf": {
            "field": "ambulatory_aid",
            "equals": "others"
          }
        },
        {
          "name": "jenis_kes",
          "label": {
            "en": "Case Type",
            "ms": "Jenis kes"
          },
          "type": "radio",
          "options": [
            {
              "value": "non_urgent",
              "label": {
                "en": "Non Urgent Case",
                "ms": "Kes Tidak Mendesak"
              }
            },
            {
              "value": "urgent",
              "label": {
                "en": "Urgent Case",
                "ms": "Kes Mendesak"
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
          "name": "jenis_kes_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter if Others selected",
            "ms": "Masukkan jika Lain-lain dipilih"
          },
          "showIf": {
            "field": "jenis_kes",
            "equals": "others"
          }
        },
        {
          "type": "subheading",
          "label": {
            "en": "Delivery Information",
            "ms": "Maklumat Penghantaran"
          }
        },
        {
          "name": "lokasi_penghantaran",
          "label": {
            "en": "Delivery Location",
            "ms": "Lokasi Penghantaran"
          },
          "type": "input"
        },
        {
          "name": "tujuan_penghantaran",
          "label": {
            "en": "Delivery Purpose",
            "ms": "Tujuan Penghantaran"
          },
          "type": "input"
        },
        {
          "name": "tarikh_penghantaran",
          "label": {
            "en": "Departure Date",
            "ms": "Tarikh"
          },
          "type": "date"
        },
        {
          "name": "masa_penghantaran",
          "label": {
            "en": "Departure Time",
            "ms": "Masa Penghantaran"
          },
          "type": "input",
          "placeholder": {
            "en": "Departure time",
            "ms": "Masa penghantaran"
          }
        },
        {
          "type": "subheading",
          "label": {
            "en": "Trip & Appointment",
            "ms": "Perjalanan & Temujanji"
          }
        },
        {
          "name": "trip",
          "label": {
            "en": "Trip Type",
            "ms": "Jenis Perjalanan"
          },
          "type": "radio",
          "options": [
            {
              "value": "one_way",
              "label": {
                "en": "One Way",
                "ms": "Sehala"
              }
            },
            {
              "value": "two_way",
              "label": {
                "en": "Two Way",
                "ms": "Dua hala"
              }
            }
          ]
        },
        {
          "name": "estimated_arrival_time",
          "label": {
            "en": "Estimated Arrival Time",
            "ms": "Anggaran Masa Tiba"
          },
          "type": "time-input",
          "showIf": {
            "field": "trip",
            "equals": "two_way"
          }
        },
        {
          "name": "other_appointment",
          "label": {
            "en": "Other Appointment",
            "ms": "Temujanji Lain"
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
          "name": "pengambilan_ubatan_others",
          "label": {
            "en": "Medication Type",
            "ms": "JENIS UBAT"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter type of medication",
            "ms": "Masukkan jenis ubat"
          },
          "showIf": {
            "field": "pengambilan_ubatan",
            "equals": "others"
          }
        },
        {
          "name": "rehat_tidur_cukup",
          "label": {
            "en": "Rest & Sleep Sufficient",
            "ms": "Rehat & Tidur Cukup"
          },
          "type": "radio",
          "options": [
            {
              "value": "cukup",
              "label": {
                "en": "Enough",
                "ms": "Cukup"
              }
            },
            {
              "value": "tidak_cukup",
              "label": {
                "en": "Not Enough",
                "ms": "Tidak Cukup"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kesihatan"
          }
        },
        {
          "name": "rehat_tidur_others",
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
            "field": "rehat_tidur_cukup",
            "equals": "others"
          }
        },
        {
          "name": "lesen_memandu",
          "label": {
            "en": "Driving License",
            "ms": "Lesen Memandu"
          },
          "type": "radio",
          "options": [
            {
              "value": "ada",
              "label": {
                "en": "Yes",
                "ms": "Ada"
              }
            },
            {
              "value": "tamat_tempoh",
              "label": {
                "en": "Expired",
                "ms": "TAMAT TEMPOH"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kesihatan"
          }
        },
        {
          "name": "lesen_memandu_others",
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
            "field": "lesen_memandu",
            "equals": "others"
          }
        },
        {
          "name": "pengambilan_ubatan_others",
          "label": {
            "en": "Medication Type",
            "ms": "JENIS UBAT"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter type of medication",
            "ms": "Masukkan jenis ubat"
          },
          "showIf": {
            "field": "pengambilan_ubatan",
            "equals": "others"
          }
        },
        {
          "name": "rehat_tidur_cukup",
          "label": {
            "en": "Rest & Sleep Sufficient",
            "ms": "Rehat & Tidur Cukup"
          },
          "type": "radio",
          "options": [
            {
              "value": "cukup",
              "label": {
                "en": "Enough",
                "ms": "Cukup"
              }
            },
            {
              "value": "tidak_cukup",
              "label": {
                "en": "Not Enough",
                "ms": "Tidak Cukup"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kesihatan"
          }
        },
        {
          "name": "rehat_tidur_others",
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
            "field": "rehat_tidur_cukup",
            "equals": "others"
          }
        },
        {
          "name": "lesen_memandu",
          "label": {
            "en": "Driving License",
            "ms": "Lesen Memandu"
          },
          "type": "radio",
          "options": [
            {
              "value": "ada",
              "label": {
                "en": "Yes",
                "ms": "Ada"
              }
            },
            {
              "value": "tamat_tempoh",
              "label": {
                "en": "Expired",
                "ms": "TAMAT TEMPOH"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kesihatan"
          }
        },
        {
          "name": "lesen_memandu_others",
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
            "field": "lesen_memandu",
            "equals": "others"
          }
        },
        {
          "type": "subheading",
          "label": {
            "en": "Vehicle Safety Before Driving",
            "ms": "Keselamatan Kenderaan Sebelum Memandu"
          },
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          },
          "fields": [
            {
              "name": "tarikh_kenderaan",
              "label": {
                "en": "Date",
                "ms": "Tarikh"
              },
              "type": "date"
            },
            {
              "name": "masa_kenderaan",
              "label": {
                "en": "Time",
                "ms": "Masa"
              },
              "type": "input",
              "placeholder": {
                "en": "Time",
                "ms": "Masa"
              }
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          },
          "fields": [
            {
              "name": "no_plate_kenderaan",
              "label": {
                "en": "Number Plate",
                "ms": "No Plate"
              },
              "type": "input",
              "placeholder": {
                "en": "Number plate",
                "ms": "Nombor plat"
              }
            },
            {
              "name": "odometer_kenderaan",
              "label": {
                "en": "Odometer",
                "ms": "Odometer"
              },
              "type": "input",
              "placeholder": {
                "en": "Odometer reading",
                "ms": "Bacaan odometer"
              }
            }
          ]
        },
        {
          "name": "bahan_api",
          "label": {
            "en": "Fuel",
            "ms": "Bahan Api"
          },
          "type": "radio",
          "options": [
            {
              "value": "full",
              "label": {
                "en": "Full",
                "ms": "Full"
              }
            },
            {
              "value": "half",
              "label": {
                "en": "1/2",
                "ms": "1/2"
              }
            },
            {
              "value": "quarter",
              "label": {
                "en": "1/4",
                "ms": "1/4"
              }
            },
            {
              "value": "three_quarter",
              "label": {
                "en": "3/4",
                "ms": "3/4"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "bahan_api_others",
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
            "field": "bahan_api",
            "equals": "others"
          }
        },
        {
          "name": "keadaan_cermin_hadapan",
          "label": {
            "en": "Front Mirror Condition",
            "ms": "Keadaan Cermin Hadapan"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "keadaan_cermin_hadapan_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "keadaan_cermin_hadapan",
            "equals": "others"
          }
        },
        {
          "name": "wiper",
          "label": {
            "en": "Wiper",
            "ms": "Wiper"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "wiper_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "wiper",
            "equals": "others"
          }
        },
        {
          "name": "bonet_hadapan",
          "label": {
            "en": "Front Hood",
            "ms": "Bonet Hadapan"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "bonet_hadapan_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "bonet_hadapan",
            "equals": "others"
          }
        },
        {
          "name": "hos_getah_engine",
          "label": {
            "en": "Engine Rubber Hose",
            "ms": "Hos Getah Engine"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "hos_getah_engine_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "hos_getah_engine",
            "equals": "others"
          }
        },
        {
          "name": "bateri",
          "label": {
            "en": "Battery",
            "ms": "Bateri"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "bateri_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "bateri",
            "equals": "others"
          }
        },
        {
          "name": "lampu_hadapan",
          "label": {
            "en": "Headlights",
            "ms": "Lampu Hadapan"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "lampu_hadapan_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "lampu_hadapan",
            "equals": "others"
          }
        },
        {
          "name": "lampu_isyarat",
          "label": {
            "en": "Signal Lights",
            "ms": "Lampu Isyarat"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "lampu_isyarat_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "lampu_isyarat",
            "equals": "others"
          }
        },
        {
          "name": "tekanan_tayar",
          "label": {
            "en": "Tire Pressure",
            "ms": "Tekanan Tayar"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "tekanan_tayar_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "tekanan_tayar",
            "equals": "others"
          }
        },
        {
          "name": "keadaan_tayar",
          "label": {
            "en": "Tire Condition",
            "ms": "Keadaan Tayar"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "keadaan_tayar_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "keadaan_tayar",
            "equals": "others"
          }
        },
        {
          "name": "cermin_sisi",
          "label": {
            "en": "Side Mirrors (Left/Right)",
            "ms": "Cermin Sisi (Kiri/Kanan)"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "cermin_sisi_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "cermin_sisi",
            "equals": "others"
          }
        },
        {
          "name": "lampu_brek",
          "label": {
            "en": "Brake Lights",
            "ms": "Lampu Brek"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "lampu_brek_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "lampu_brek",
            "equals": "others"
          }
        },
        {
          "name": "lampu_reverse",
          "label": {
            "en": "Reverse Lights",
            "ms": "Lampu Reverse"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "lampu_reverse_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "lampu_reverse",
            "equals": "others"
          }
        },
        {
          "name": "no_plat_depan_belakang",
          "label": {
            "en": "Number Plate (Front/Back)",
            "ms": "No Plat (Depan/Belakang)"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "no_plat_depan_belakang_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "no_plat_depan_belakang",
            "equals": "others"
          }
        },
        {
          "name": "minyak_brake",
          "label": {
            "en": "Brake Fluid",
            "ms": "Minyak Brake"
          },
          "type": "radio",
          "options": [
            {
              "value": "cukup",
              "label": {
                "en": "Sufficient",
                "ms": "CUKUP"
              }
            },
            {
              "value": "tidak_cukup",
              "label": {
                "en": "Insufficient",
                "ms": "TIDAK CUKUP"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "minyak_brake_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "minyak_brake",
            "equals": "others"
          }
        },
        {
          "name": "air_kenderaan",
          "label": {
            "en": "Vehicle Water",
            "ms": "Air Kenderaan"
          },
          "type": "radio",
          "options": [
            {
              "value": "cukup",
              "label": {
                "en": "Sufficient",
                "ms": "CUKUP"
              }
            },
            {
              "value": "tidak_cukup",
              "label": {
                "en": "Insufficient",
                "ms": "TIDAK CUKUP"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "air_kenderaan_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "air_kenderaan",
            "equals": "others"
          }
        },
        {
          "name": "minyak_power_steering",
          "label": {
            "en": "Power Steering Fluid",
            "ms": "Minyak Power Steering"
          },
          "type": "radio",
          "options": "CUKUP_TIDAK_CUKUP_OPTIONS",
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "minyak_power_steering_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "minyak_power_steering",
            "equals": "others"
          }
        },
        {
          "name": "minyak_engine",
          "label": {
            "en": "Engine Oil",
            "ms": "Minyak Engine"
          },
          "type": "radio",
          "options": [
            {
              "value": "cukup",
              "label": {
                "en": "Sufficient",
                "ms": "CUKUP"
              }
            },
            {
              "value": "tidak_cukup",
              "label": {
                "en": "Insufficient",
                "ms": "TIDAK CUKUP"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "minyak_engine_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "minyak_engine",
            "equals": "others"
          }
        },
        {
          "type": "subheading",
          "label": {
            "en": "Perkeso Official Vehicle Information",
            "ms": "Makluma Kenderaan Rasmi Perkeso"
          },
          "showIf": {
            "field": "fleet_checklist",
            "includes": "perkeso"
          }
        },
        {
          "name": "perkeso_gambar_geran",
          "title": {
            "en": "Vehicle Registration Document Image",
            "ms": "Gambar Geran Kenderaan"
          },
          "type": "attach-file",
          "accept": "image/*,.pdf",
          "showIf": {
            "field": "fleet_checklist",
            "includes": "perkeso"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "fleet_checklist",
            "includes": "perkeso"
          },
          "fields": [
            {
              "name": "perkeso_tarikh_puspakom",
              "label": {
                "en": "Vehicle Puspakom Date",
                "ms": "Tarikh Puspakom Kenderaan"
              },
              "type": "date"
            },
            {
              "name": "perkeso_tarikh_servis",
              "label": {
                "en": "Vehicle Service Date",
                "ms": "Tarikh Servis Kenderaan"
              },
              "type": "date"
            }
          ]
        },
        {
          "name": "perkeso_jenis_kenderaan",
          "label": {
            "en": "Vehicle Type",
            "ms": "Jenis Kenderaan"
          },
          "type": "input",
          "placeholder": {
            "en": "Vehicle type",
            "ms": "Jenis kenderaan"
          },
          "showIf": {
            "field": "fleet_checklist",
            "includes": "perkeso"
          }
        },
        {
          "name": "perkeso_jenis_bahan_bakar",
          "label": {
            "en": "Fuel Type",
            "ms": "Jenis Bahan Bakar"
          },
          "type": "input",
          "placeholder": {
            "en": "Fuel type",
            "ms": "Jenis bahan bakar"
          },
          "showIf": {
            "field": "fleet_checklist",
            "includes": "perkeso"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "fleet_checklist",
            "includes": "perkeso"
          },
          "fields": [
            {
              "name": "perkeso_tarikh_isi_bahan_bakar",
              "label": {
                "en": "Vehicle Fuel Refill Date",
                "ms": "Tarikh Isi Bahan Bakar Kenderaan"
              },
              "type": "date"
            },
            {
              "name": "perkeso_tarikh_insuran",
              "label": {
                "en": "Vehicle Insurance Date",
                "ms": "Tarikh Insuran Kenderaan"
              },
              "type": "date"
            }
          ]
        },
        {
          "name": "perkeso_odo_sebelum_guna",
          "label": {
            "en": "Vehicle Odometer Before Use",
            "ms": "Odometer Kenderaan Sebelum Diguna"
          },
          "type": "input",
          "placeholder": {
            "en": "Odometer before use",
            "ms": "Odometer sebelum digunakan"
          },
          "showIf": {
            "field": "fleet_checklist",
            "includes": "perkeso"
          }
        },
        {
          "name": "perkeso_odo_selepas_guna",
          "label": {
            "en": "Vehicle Odometer After Use",
            "ms": "Odometer Kenderaan Selepas Diguna"
          },
          "type": "input",
          "placeholder": {
            "en": "Odometer after use",
            "ms": "Odometer selepas digunakan"
          },
          "showIf": {
            "field": "fleet_checklist",
            "includes": "perkeso"
          }
        },
        {
          "name": "perkeso_odo_sebelum_isi",
          "label": {
            "en": "Odometer Before Fuel Refill",
            "ms": "Odometer Sebelum Isi Bahan Bakar"
          },
          "type": "input",
          "placeholder": {
            "en": "Odometer before fuel refill",
            "ms": "Odometer sebelum isi bahan bakar"
          },
          "showIf": {
            "field": "fleet_checklist",
            "includes": "perkeso"
          }
        },
        {
          "name": "perkeso_baki_touch_n_go",
          "label": {
            "en": "Vehicle Touch N Go Balance",
            "ms": "Baki Touch N Go Kenderaan"
          },
          "type": "input",
          "placeholder": {
            "en": "Touch N Go balance",
            "ms": "Baki Touch N Go"
          },
          "showIf": {
            "field": "fleet_checklist",
            "includes": "perkeso"
          }
        }
      ]
    }
  ]
}

const drive_fleet = {
  "enableLanguageToggle": true,
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
            "en": "Driver Fleet Management",
            "ms": "Pengurusan Armada Pemandu"
          }
        },
        {
          "name": "fleet_checklist",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "value": "peralatan",
              "label": {
                "en": "Medical Equipment Checklist",
                "ms": "Senarai Semak Peralatan Perubatan"
              }
            },
            {
              "value": "kesihatan",
              "label": {
                "en": "Health & Safety Checklist Before Driving",
                "ms": "Senarai Semak Kesihatan Dan Keselamatan Sebelum Pemandu"
              }
            },
            {
              "value": "kenderaan",
              "label": {
                "en": "Vehicle Safety Before Driving",
                "ms": "Keselamatan Kenderaan Sebelum Memandu"
              }
            },
            {
              "value": "perkeso",
              "label": {
                "en": "Perkeso Official Vehicle Information",
                "ms": "Makluma Kenderaan Rasmi Perkeso"
              }
            }
          ]
        },
        {
          "name": "peralatan_main",
          "label": {
            "en": "Medical Equipment Checklist",
            "ms": "Senarai Semak Peralatan Perubatan"
          },
          "type": "multi-select-dropdown",
          "options": [
            {
              "value": "portable_ventilator",
              "label": {
                "en": "PORTABLE VENTILATOR (WEINNMANN) -TYPE A SAHAJA-",
                "ms": "VENTILATOR MUDAH ALIH (WEINNMANN) -JENIS A SAHAJA-"
              }
            },
            {
              "value": "aed_nihon_kohden",
              "label": {
                "en": "AED NIHON KOHDEN",
                "ms": "AED NIHON KOHDEN"
              }
            },
            {
              "value": "suction",
              "label": {
                "en": "SUCTION",
                "ms": "SEDUTAN"
              }
            },
            {
              "value": "responder_bag",
              "label": {
                "en": "RESPONDER BAG",
                "ms": "BEG RESPONDER"
              }
            },
            {
              "value": "syringe_pump",
              "label": {
                "en": "SYRINGE PUMP",
                "ms": "PAM PICAGARI"
              }
            },
            {
              "value": "cervical_collar_kit",
              "label": {
                "en": "CERVICAL COLLAR KIT",
                "ms": "KIT KOLLAR SERVIKS"
              }
            },
            {
              "value": "emergency_oxygen_bag",
              "label": {
                "en": "EMERGENCY OXYGEN BAG (HIJAU)",
                "ms": "BEG OKSIGEN KECEMASAN (HIJAU)"
              }
            },
            {
              "value": "oxygen_bag",
              "label": {
                "en": "OXYGEN BAG",
                "ms": "BEG OKSIGEN"
              }
            },
            {
              "value": "foldable_wheelchair",
              "label": {
                "en": "FOLDABLE WHEELCHAIR",
                "ms": "KERUSI RODA LIPAT"
              }
            },
            {
              "value": "stretcher",
              "label": {
                "en": "STRETCHER",
                "ms": "USUNG"
              }
            },
            {
              "value": "kendrick_extrication",
              "label": {
                "en": "KENDRICK EXTRICATION DEVICE (SED) -TYPE A SAHAJA.",
                "ms": "PERANTI PENGELUARAN KENDRICK (SED) -JENIS A SAHAJA."
              }
            },
            {
              "value": "splint_bag",
              "label": {
                "en": "SPLINT BAG",
                "ms": "BEG SPLINT"
              }
            },
            {
              "value": "spinal_board",
              "label": {
                "en": "SPINAL BOARD WITH CERVICAL PROTECTION",
                "ms": "PAPAN TULANG BELAKANG DENGAN PERLINDUNGAN SERVIKS"
              }
            },
            {
              "value": "foldable_stretcher",
              "label": {
                "en": "FOLDABLE STRETCHER",
                "ms": "USUNG LIPAT"
              }
            },
            {
              "value": "tpod_pelvic_binder",
              "label": {
                "en": "T-POD PELVIC BINDER",
                "ms": "PENGIKAT PELVIS T-POD"
              }
            },
            {
              "value": "hare_splint",
              "label": {
                "en": "HARE SPLINT",
                "ms": "SPLINT HARE"
              }
            },
            {
              "value": "medication_box",
              "label": {
                "en": "MEDICATION BOX",
                "ms": "KOTAK UBAT"
              }
            },
            {
              "value": "fire_extinguisher",
              "label": {
                "en": "FIRE EXTINGUISHER",
                "ms": "PEMADAM API"
              }
            },
            {
              "value": "waste_bin",
              "label": {
                "en": "WASTE BIN/SHARP BIN",
                "ms": "BIN SISA/BIN TAJAM"
              }
            },
            {
              "value": "glove",
              "label": {
                "en": "GLOVE",
                "ms": "SARUNG TANGAN"
              }
            },
            {
              "value": "mask",
              "label": {
                "en": "MASK",
                "ms": "TOPENG"
              }
            },
            {
              "value": "trauma_bag",
              "label": {
                "en": "TRAUMA BAG",
                "ms": "BEG TRAUMA"
              }
            }
          ],
          "showIf": {
            "field": "fleet_checklist",
            "includes": "peralatan"
          }
        },
        {
          "name": "peralatan_responder_bag",
          "label": {
            "en": "RESPONDER BAG",
            "ms": "BEG RESPONDER"
          },
          "type": "multi-select-dropdown",
          "options": [
            {
              "value": "bag_valve_mask",
              "label": {
                "en": "BAG VALVE MASK",
                "ms": "BAG VALVE MASK"
              }
            },
            {
              "value": "laryngealscope_set",
              "label": {
                "en": "LARYNGEALSCOPE SET",
                "ms": "LARYNGEALSCOPE SET"
              }
            },
            {
              "value": "oropharyngeal_airway",
              "label": {
                "en": "OROPHARYNGEAL AIRWAY (SIZE 2,3,4)",
                "ms": "OROPHARYNGEAL AIRWAY (SIZE 2,3,4)"
              }
            },
            {
              "value": "nasal_cannula",
              "label": {
                "en": "NASAL CANNULA",
                "ms": "NASAL CANNULA"
              }
            },
            {
              "value": "face_mask_3ply",
              "label": {
                "en": "3PLY FACE MASK",
                "ms": "3PLY FACE MASK"
              }
            },
            {
              "value": "teeth_opener",
              "label": {
                "en": "TEETH OPENER",
                "ms": "TEETH OPENER"
              }
            },
            {
              "value": "dental_silicone_bite",
              "label": {
                "en": "DENTAL SILICONE BITE",
                "ms": "DENTAL SILICONE BITE"
              }
            },
            {
              "value": "ett_tube",
              "label": {
                "en": "ETT TUBE SZ 8.0",
                "ms": "ETT TUBE SZ 8.0"
              }
            },
            {
              "value": "portable_spo2",
              "label": {
                "en": "PORTABLE SPO2",
                "ms": "PORTABLE SPO2"
              }
            },
            {
              "value": "glucometer",
              "label": {
                "en": "GLUCOMETER",
                "ms": "GLUCOMETER"
              }
            }
          ],
          "showIf": {
            "field": "peralatan_main",
            "includes": "responder_bag"
          }
        },
        {
          "name": "peralatan_trauma_bag",
          "label": {
            "en": "TRAUMA BAG",
            "ms": "BEG TRAUMA"
          },
          "type": "multi-select-dropdown",
          "options": [
            {
              "value": "dressing_set",
              "label": {
                "en": "DRESSING SET",
                "ms": "SET PEMBALUTAN"
              }
            },
            {
              "value": "crepe_bandage",
              "label": {
                "en": "CREPE BANDAGE",
                "ms": "PEMBALUT CREPE"
              }
            },
            {
              "value": "micropore_3m",
              "label": {
                "en": "3M MICROPORE",
                "ms": "3M MICROPORE"
              }
            },
            {
              "value": "scissors",
              "label": {
                "en": "SCISSORS",
                "ms": "GUNTING"
              }
            },
            {
              "value": "burn_kit",
              "label": {
                "en": "BURN KIT",
                "ms": "KIT BAKARAN"
              }
            }
          ],
          "showIf": {
            "field": "peralatan_main",
            "includes": "trauma_bag"
          }
        },
        {
          "type": "subheading",
          "label": {
            "en": "Health & Safety Checklist Before Driving",
            "ms": "Senarai Semak Kesihatan Dan Keselamatan Sebelum Pemandu"
          },
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kesihatan"
          }
        },
        {
          "name": "nama_pemandu",
          "label": {
            "en": "Driver Name",
            "ms": "Nama Pemandu"
          },
          "type": "single-select",
          "options": [
            {
              "value": "kk_chemor_rm20",
              "label": {
                "en": "KK CHEMOR RM 20",
                "ms": "KK CHEMOR RM 20"
              }
            },
            {
              "value": "kk_jelapang_rm20",
              "label": {
                "en": "KK JELAPANG RM 20",
                "ms": "KK JELAPANG RM 20"
              }
            },
            {
              "value": "hrpb_rm30",
              "label": {
                "en": "HRPB RM 30",
                "ms": "HRPB RM 30"
              }
            },
            {
              "value": "ppn_sg_petani_rm200",
              "label": {
                "en": "PPN SG PETANI RM 200",
                "ms": "PPN SG PETANI RM 200"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kesihatan"
          }
        },
        {
          "name": "nama_pemandu_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter driver name",
            "ms": "Masukkan nama pemandu"
          },
          "showIf": {
            "field": "nama_pemandu",
            "equals": "others"
          }
        },
        {
          "name": "tahap_kesihatan_pemandu",
          "label": {
            "en": "Driver Health Status",
            "ms": "Tahap Kesihatan Pemandu"
          },
          "type": "radio",
          "options": [
            {
              "value": "sihat",
              "label": {
                "en": "Healthy",
                "ms": "Sihat"
              }
            },
            {
              "value": "tidak_sihat",
              "label": {
                "en": "Unhealthy",
                "ms": "Tidak Sihat"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kesihatan"
          }
        },
        {
          "name": "tahap_kesihatan_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter health status",
            "ms": "Masukkan status kesihatan"
          },
          "showIf": {
            "field": "tahap_kesihatan_pemandu",
            "equals": "others"
          }
        },
        {
          "name": "pengambilan_ubatan",
          "label": {
            "en": "Medication Intake",
            "ms": "Pengambilan Ubatan"
          },
          "type": "radio",
          "options": [
            {
              "value": "ada",
              "label": {
                "en": "Yes",
                "ms": "Ada"
              }
            },
            {
              "value": "tiada",
              "label": {
                "en": "No",
                "ms": "Tiada"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kesihatan"
          }
        },
        {
          "name": "pengambilan_ubatan_others",
          "label": {
            "en": "Medication Type",
            "ms": "JENIS UBAT"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter type of medication",
            "ms": "Masukkan jenis ubat"
          },
          "showIf": {
            "field": "pengambilan_ubatan",
            "equals": "others"
          }
        },
        {
          "name": "rehat_tidur_cukup",
          "label": {
            "en": "Rest & Sleep Sufficient",
            "ms": "Rehat & Tidur Cukup"
          },
          "type": "radio",
          "options": [
            {
              "value": "cukup",
              "label": {
                "en": "Enough",
                "ms": "Cukup"
              }
            },
            {
              "value": "tidak_cukup",
              "label": {
                "en": "Not Enough",
                "ms": "Tidak Cukup"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kesihatan"
          }
        },
        {
          "name": "rehat_tidur_others",
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
            "field": "rehat_tidur_cukup",
            "equals": "others"
          }
        },
        {
          "name": "lesen_memandu",
          "label": {
            "en": "Driving License",
            "ms": "Lesen Memandu"
          },
          "type": "radio",
          "options": [
            {
              "value": "ada",
              "label": {
                "en": "Yes",
                "ms": "Ada"
              }
            },
            {
              "value": "tamat_tempoh",
              "label": {
                "en": "Expired",
                "ms": "TAMAT TEMPOH"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kesihatan"
          }
        },
        {
          "name": "lesen_memandu_others",
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
            "field": "lesen_memandu",
            "equals": "others"
          }
        },
        {
          "type": "subheading",
          "label": {
            "en": "Vehicle Safety Before Driving",
            "ms": "Keselamatan Kenderaan Sebelum Memandu"
          },
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          },
          "fields": [
            {
              "name": "tarikh_kenderaan",
              "label": {
                "en": "Date",
                "ms": "Tarikh"
              },
              "type": "date"
            },
            {
              "name": "masa_kenderaan",
              "label": {
                "en": "Time",
                "ms": "Masa"
              },
              "type": "input",
              "placeholder": {
                "en": "Time",
                "ms": "Masa"
              }
            }
          ]
        },
        {
          "type": "row",
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          },
          "fields": [
            {
              "name": "no_plate_kenderaan",
              "label": {
                "en": "Number Plate",
                "ms": "No Plate"
              },
              "type": "input",
              "placeholder": {
                "en": "Number plate",
                "ms": "Nombor plat"
              }
            },
            {
              "name": "odometer_kenderaan",
              "label": {
                "en": "Odometer",
                "ms": "Odometer"
              },
              "type": "input",
              "placeholder": {
                "en": "Odometer reading",
                "ms": "Bacaan odometer"
              }
            }
          ]
        },
        {
          "name": "bahan_api",
          "label": {
            "en": "Fuel",
            "ms": "Bahan Api"
          },
          "type": "radio",
          "options": [
            {
              "value": "full",
              "label": {
                "en": "Full",
                "ms": "Full"
              }
            },
            {
              "value": "half",
              "label": {
                "en": "1/2",
                "ms": "1/2"
              }
            },
            {
              "value": "quarter",
              "label": {
                "en": "1/4",
                "ms": "1/4"
              }
            },
            {
              "value": "three_quarter",
              "label": {
                "en": "3/4",
                "ms": "3/4"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "bahan_api_others",
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
            "field": "bahan_api",
            "equals": "others"
          }
        },
        {
          "name": "keadaan_cermin_hadapan",
          "label": {
            "en": "Front Mirror Condition",
            "ms": "Keadaan Cermin Hadapan"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "keadaan_cermin_hadapan_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "keadaan_cermin_hadapan",
            "equals": "others"
          }
        },
        {
          "name": "wiper",
          "label": {
            "en": "Wiper",
            "ms": "Wiper"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "wiper_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "wiper",
            "equals": "others"
          }
        },
        {
          "name": "bonet_hadapan",
          "label": {
            "en": "Front Hood",
            "ms": "Bonet Hadapan"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "bonet_hadapan_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "bonet_hadapan",
            "equals": "others"
          }
        },
        {
          "name": "hos_getah_engine",
          "label": {
            "en": "Engine Rubber Hose",
            "ms": "Hos Getah Engine"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "hos_getah_engine_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "hos_getah_engine",
            "equals": "others"
          }
        },
        {
          "name": "bateri",
          "label": {
            "en": "Battery",
            "ms": "Bateri"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "bateri_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "bateri",
            "equals": "others"
          }
        },
        {
          "name": "lampu_hadapan",
          "label": {
            "en": "Headlights",
            "ms": "Lampu Hadapan"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "lampu_hadapan_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "lampu_hadapan",
            "equals": "others"
          }
        },
        {
          "name": "lampu_isyarat",
          "label": {
            "en": "Signal Lights",
            "ms": "Lampu Isyarat"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "lampu_isyarat_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "lampu_isyarat",
            "equals": "others"
          }
        },
        {
          "name": "tekanan_tayar",
          "label": {
            "en": "Tire Pressure",
            "ms": "Tekanan Tayar"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "tekanan_tayar_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "tekanan_tayar",
            "equals": "others"
          }
        },
        {
          "name": "keadaan_tayar",
          "label": {
            "en": "Tire Condition",
            "ms": "Keadaan Tayar"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "keadaan_tayar_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "keadaan_tayar",
            "equals": "others"
          }
        },
        {
          "name": "cermin_sisi",
          "label": {
            "en": "Side Mirrors (Left/Right)",
            "ms": "Cermin Sisi (Kiri/Kanan)"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "cermin_sisi_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "cermin_sisi",
            "equals": "others"
          }
        },
        {
          "name": "lampu_brek",
          "label": {
            "en": "Brake Lights",
            "ms": "Lampu Brek"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "lampu_brek_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "lampu_brek",
            "equals": "others"
          }
        },
        {
          "name": "lampu_reverse",
          "label": {
            "en": "Reverse Lights",
            "ms": "Lampu Reverse"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "lampu_reverse_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "lampu_reverse",
            "equals": "others"
          }
        },
        {
          "name": "no_plat_depan_belakang",
          "label": {
            "en": "Number Plate (Front/Back)",
            "ms": "No Plat (Depan/Belakang)"
          },
          "type": "radio",
          "options": [
            {
              "value": "baik",
              "label": {
                "en": "Good",
                "ms": "Baik"
              }
            },
            {
              "value": "tidak_baik",
              "label": {
                "en": "Not Good",
                "ms": "Tidak Baik"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "no_plat_depan_belakang_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "no_plat_depan_belakang",
            "equals": "others"
          }
        },
        {
          "name": "minyak_brake",
          "label": {
            "en": "Brake Fluid",
            "ms": "Minyak Brake"
          },
          "type": "radio",
          "options": [
            {
              "value": "cukup",
              "label": {
                "en": "Sufficient",
                "ms": "CUKUP"
              }
            },
            {
              "value": "tidak_cukup",
              "label": {
                "en": "Insufficient",
                "ms": "TIDAK CUKUP"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "minyak_brake_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "minyak_brake",
            "equals": "others"
          }
        },
        {
          "name": "air_kenderaan",
          "label": {
            "en": "Vehicle Water",
            "ms": "Air Kenderaan"
          },
          "type": "radio",
          "options": [
            {
              "value": "cukup",
              "label": {
                "en": "Sufficient",
                "ms": "CUKUP"
              }
            },
            {
              "value": "tidak_cukup",
              "label": {
                "en": "Insufficient",
                "ms": "TIDAK CUKUP"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "air_kenderaan_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "air_kenderaan",
            "equals": "others"
          }
        },
        {
          "name": "minyak_power_steering",
          "label": {
            "en": "Power Steering Fluid",
            "ms": "Minyak Power Steering"
          },
          "type": "radio",
          "options": [
            {
              "value": "cukup",
              "label": {
                "en": "Sufficient",
                "ms": "CUKUP"
              }
            },
            {
              "value": "tidak_cukup",
              "label": {
                "en": "Insufficient",
                "ms": "TIDAK CUKUP"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "minyak_power_steering_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "minyak_power_steering",
            "equals": "others"
          }
        },
        {
          "name": "minyak_engine",
          "label": {
            "en": "Engine Oil",
            "ms": "Minyak Engine"
          },
          "type": "radio",
          "options": [
            {
              "value": "cukup",
              "label": {
                "en": "Sufficient",
                "ms": "CUKUP"
              }
            },
            {
              "value": "tidak_cukup",
              "label": {
                "en": "Insufficient",
                "ms": "TIDAK CUKUP"
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
          "showIf": {
            "field": "fleet_checklist",
            "includes": "kenderaan"
          }
        },
        {
          "name": "minyak_engine_others",
          "label": {
            "en": "Specify Other",
            "ms": "Nyatakan Lain-Lain"
          },
          "type": "input",
          "placeholder": {
            "en": "Enter Details",
            "ms": "Masukkan Butiran"
          },
          "showIf": {
            "field": "minyak_engine",
            "equals": "others"
          }
        },
        {
          "type": "subheading",
          "label": {
            "en": "Perkeso Official Vehicle Information",
            "ms": "Makluma Kenderaan Rasmi Perkeso"
          },
          "showIf": {
            "field": "fleet_checklist",
            "includes": "perkeso"
          }
        },
        {
          "name": "perkeso_gambar_geran",
          "title": {
            "en": "Vehicle Registration Document Image",
            "ms": "Gambar Geran Kenderaan"
          },
          "type": "attach-file",
          "accept": "image/*,.pdf",
          "showIf": {
            "field": "fleet_checklist",
            "includes": "perkeso"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "fleet_checklist",
            "includes": "perkeso"
          },
          "fields": [
            {
              "name": "perkeso_tarikh_puspakom",
              "label": {
                "en": "Vehicle Puspakom Date",
                "ms": "Tarikh Puspakom Kenderaan"
              },
              "type": "date"
            },
            {
              "name": "perkeso_tarikh_servis",
              "label": {
                "en": "Vehicle Service Date",
                "ms": "Tarikh Servis Kenderaan"
              },
              "type": "date"
            }
          ]
        },
        {
          "name": "perkeso_jenis_kenderaan",
          "label": {
            "en": "Vehicle Type",
            "ms": "Jenis Kenderaan"
          },
          "type": "input",
          "placeholder": {
            "en": "Vehicle type",
            "ms": "Jenis kenderaan"
          },
          "showIf": {
            "field": "fleet_checklist",
            "includes": "perkeso"
          }
        },
        {
          "name": "perkeso_jenis_bahan_bakar",
          "label": {
            "en": "Fuel Type",
            "ms": "Jenis Bahan Bakar"
          },
          "type": "input",
          "placeholder": {
            "en": "Fuel type",
            "ms": "Jenis bahan bakar"
          },
          "showIf": {
            "field": "fleet_checklist",
            "includes": "perkeso"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "fleet_checklist",
            "includes": "perkeso"
          },
          "fields": [
            {
              "name": "perkeso_tarikh_isi_bahan_bakar",
              "label": {
                "en": "Vehicle Fuel Refill Date",
                "ms": "Tarikh Isi Bahan Bakar Kenderaan"
              },
              "type": "date"
            },
            {
              "name": "perkeso_tarikh_insuran",
              "label": {
                "en": "Vehicle Insurance Date",
                "ms": "Tarikh Insuran Kenderaan"
              },
              "type": "date"
            }
          ]
        },
        {
          "name": "perkeso_odo_sebelum_guna",
          "label": {
            "en": "Vehicle Odometer Before Use",
            "ms": "Odometer Kenderaan Sebelum Diguna"
          },
          "type": "input",
          "placeholder": {
            "en": "Odometer before use",
            "ms": "Odometer sebelum digunakan"
          },
          "showIf": {
            "field": "fleet_checklist",
            "includes": "perkeso"
          }
        },
        {
          "name": "perkeso_odo_selepas_guna",
          "label": {
            "en": "Vehicle Odometer After Use",
            "ms": "Odometer Kenderaan Selepas Diguna"
          },
          "type": "input",
          "placeholder": {
            "en": "Odometer after use",
            "ms": "Odometer selepas digunakan"
          },
          "showIf": {
            "field": "fleet_checklist",
            "includes": "perkeso"
          }
        },
        {
          "name": "perkeso_odo_sebelum_isi",
          "label": {
            "en": "Odometer Before Fuel Refill",
            "ms": "Odometer Sebelum Isi Bahan Bakar"
          },
          "type": "input",
          "placeholder": {
            "en": "Odometer before fuel refill",
            "ms": "Odometer sebelum isi bahan bakar"
          },
          "showIf": {
            "field": "fleet_checklist",
            "includes": "perkeso"
          }
        },
        {
          "name": "perkeso_baki_touch_n_go",
          "label": {
            "en": "Vehicle Touch N Go Balance",
            "ms": "Baki Touch N Go Kenderaan"
          },
          "type": "input",
          "placeholder": {
            "en": "Touch N Go balance",
            "ms": "Baki Touch N Go"
          },
          "showIf": {
            "field": "fleet_checklist",
            "includes": "perkeso"
          }
        },
        {
          "type": "row",
          "showIf": {
            "field": "fleet_checklist",
            "includes": "perkeso"
          },
          "fields": [
            {
              "name": "perkeso_tarikh_penggunaan",
              "label": {
                "en": "Vehicle And Ma Usage Date",
                "ms": "Tarikh Penggunaan Kenderaan Dan Ma"
              },
              "type": "date"
            },
            {
              "name": "perkeso_tarikh_pemulangan",
              "label": {
                "en": "Vehicle And Ma Return Date",
                "ms": "Tarikh Pemulangan Kenderaan Dan Ma"
              },
              "type": "date"
            }
          ]
        }
      ]
    }
  ]
}