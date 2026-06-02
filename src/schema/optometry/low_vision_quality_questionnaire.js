 const SCHEMA = {
  "enableLanguageToggle": true,
  "title": {
    "en": "Low Vision Quality of Life Questionnaire (LVQoL)",
    "ms": "Soal Selidik Kualiti Hidup Penglihatan Rendah (LVQoL)"
  },
  "actions": [
    {
      "type": "toggle-language",
      "label": "Malay"
    }
  ],
  "sections": [
    {
      "title": {
        "en": "Distance, Mobility & Lighting",
        "ms": "Jarak, Pergerakan & Pencahayaan"
      },
      "fields": [
        {
          "type": "scale-table",
          "name": "dml",
          "columns": [
            {
              "label": {
                "en": "None",
                "ms": "Tiada"
              },
              "value": 5
            },
            {
              "label": {
                "en": "Little",
                "ms": "Sedikit"
              },
              "value": 4
            },
            {
              "label": {
                "en": "Moderate",
                "ms": "Sederhana"
              },
              "value": 3
            },
            {
              "label": {
                "en": "Great",
                "ms": "Sangat"
              },
              "value": 2
            },
            {
              "label": {
                "en": "Very great",
                "ms": "Amat sangat"
              },
              "value": 1
            },
            {
              "label": {
                "en": "Not related",
                "ms": "Tidak berkaitan"
              },
              "value": "not_related",
              "required": true
            },
            {
              "label": {
                "en": "Not available",
                "ms": "Tidak tersedia"
              },
              "value": "na",
              "required": true
            }
          ],
          "rows": [
            {
              "en": "With your vision in general",
              "ms": "Dengan penglihatan anda secara am"
            },
            {
              "en": "Doing tasks for a short period (e.g., reading)",
              "ms": "Melakukan tugasan dalam tempoh singkat (contoh: membaca)"
            },
            {
              "en": "Vision in low light at home",
              "ms": "Penglihatan dalam cahaya malap di rumah"
            },
            {
              "en": "Getting the right amount of light to be able to see",
              "ms": "Mendapatkan jumlah pencahayaan yang sesuai untuk melihat"
            },
            {
              "en": "With glare (e.g., dazzled by car light or the sun)",
              "ms": "Dengan silau (contoh: silau cahaya lampu atau matahari)"
            },
            {
              "en": "Seeing street signs",
              "ms": "Melihat tanda jalan"
            },
            {
              "en": "Seeing the television (appreciating the pictures)",
              "ms": "Menonton televisyen (menikmati gambar)"
            },
            {
              "en": "Seeing moving objects (e.g., cars on the road)",
              "ms": "Melihat objek bergerak (contoh: kereta di jalan)"
            },
            {
              "en": "Judging the depth or distance of items",
              "ms": "Menilai kedalaman atau jarak objek"
            },
            {
              "en": "Recognizing faces",
              "ms": "Mengenali wajah"
            },
            {
              "en": "Getting around outdoors because of your vision",
              "ms": "Bergerak di luar rumah disebabkan oleh penglihatan"
            },
            {
              "en": "Crossing a road with traffic because of your vision",
              "ms": "Melintas jalan yang sibuk disebabkan oleh penglihatan"
            }
          ]
        }
      ]
    },
    {
      "title": {
        "en": "Adjustment",
        "ms": "Penyesuaian"
      },
      "fields": [
        {
          "type": "scale-table",
          "name": "adjustment",
          "columns": [
            {
              "label": {
                "en": "None",
                "ms": "Tiada"
              },
              "value": 5
            },
            {
              "label": {
                "en": "Little",
                "ms": "Sedikit"
              },
              "value": 4
            },
            {
              "label": {
                "en": "Moderate",
                "ms": "Sederhana"
              },
              "value": 3
            },
            {
              "label": {
                "en": "Great",
                "ms": "Sangat"
              },
              "value": 2
            },
            {
              "label": {
                "en": "Very great",
                "ms": "Amat sangat"
              },
              "value": 1
            },
            {
              "label": {
                "en": "Not related",
                "ms": "Tidak berkaitan"
              },
              "value": "not_related",
              "required": true
            },
            {
              "label": {
                "en": "Not available",
                "ms": "Tidak tersedia"
              },
              "value": "na",
              "required": true
            }
          ],
          "rows": [
            {
              "en": "Unhappy with your situation in life",
              "ms": "Tidak gembira dengan keadaan hidup anda"
            },
            {
              "en": "Frustrated at not being able to do certain tasks",
              "ms": "Kecewa kerana tidak dapat melakukan tugasan tertentu"
            },
            {
              "en": "Restricted in visiting friends or family",
              "ms": "Terhad dalam melawat rakan atau keluarga"
            },
            {
              "en": "How well has your eye condition been explained to you",
              "ms": "Sejauh mana keadaan mata anda telah diterangkan kepada anda"
            }
          ]
        }
      ]
    },
    {
      "title": {
        "en": "Reading & Fine Work",
        "ms": "Membaca & Kerja Halus"
      },
      "fields": [
        {
          "type": "scale-table",
          "name": "reading_fine_work",
          "columns": [
            {
              "label": {
                "en": "None",
                "ms": "Tiada"
              },
              "value": 5
            },
            {
              "label": {
                "en": "Little",
                "ms": "Sedikit"
              },
              "value": 4
            },
            {
              "label": {
                "en": "Moderate",
                "ms": "Sederhana"
              },
              "value": 3
            },
            {
              "label": {
                "en": "Great",
                "ms": "Sangat"
              },
              "value": 2
            },
            {
              "label": {
                "en": "Very great",
                "ms": "Amat sangat"
              },
              "value": 1
            },
            {
              "label": {
                "en": "Not related",
                "ms": "Tidak berkaitan"
              },
              "value": "not_related",
              "required": true
            },
            {
              "label": {
                "en": "Not available",
                "ms": "Tidak tersedia"
              },
              "value": "na",
              "required": true
            }
          ],
          "rows": [
            {
              "en": "Reading large print (e.g., newspaper headlines)",
              "ms": "Membaca cetakan besar (contoh: tajuk akhbar)"
            },
            {
              "en": "Reading newspapers and books",
              "ms": "Membaca surat khabar dan buku"
            },
            {
              "en": "Reading labels (e.g., on medicine bottles)",
              "ms": "Membaca label (contoh: pada botol ubat)"
            },
            {
              "en": "Reading your letters and mail",
              "ms": "Membaca surat dan mel anda"
            },
            {
              "en": "Having problems using tools (e.g., threading a needle or cutting)",
              "ms": "Mengalami masalah menggunakan alat (contoh: memasukkan benang atau memotong)"
            }
          ]
        }
      ]
    },
    {
      "title": {
        "en": "Daily Activities",
        "ms": "Aktiviti Harian"
      },
      "fields": [
        {
          "type": "scale-table",
          "name": "daily_activities",
          "columns": [
            {
              "label": {
                "en": "None",
                "ms": "Tiada"
              },
              "value": 5
            },
            {
              "label": {
                "en": "Little",
                "ms": "Sedikit"
              },
              "value": 4
            },
            {
              "label": {
                "en": "Moderate",
                "ms": "Sederhana"
              },
              "value": 3
            },
            {
              "label": {
                "en": "Great",
                "ms": "Sangat"
              },
              "value": 2
            },
            {
              "label": {
                "en": "Very great",
                "ms": "Amat sangat"
              },
              "value": 1
            },
            {
              "label": {
                "en": "Not related",
                "ms": "Tidak berkaitan"
              },
              "value": "not_related",
              "required": true
            },
            {
              "label": {
                "en": "Not available",
                "ms": "Tidak tersedia"
              },
              "value": "na",
              "required": true
            }
          ],
          "rows": [
            {
              "en": "Finding the time for yourself",
              "ms": "Mencari masa untuk diri sendiri"
            },
            {
              "en": "Writing (e.g., cheques or cards)",
              "ms": "Menulis (contoh: cek atau kad)"
            },
            {
              "en": "Reading your own handwriting",
              "ms": "Membaca tulisan tangan sendiri"
            },
            {
              "en": "With your everyday activities (e.g., household chores)",
              "ms": "Dengan aktiviti harian anda (contoh: kerja rumah)"
            }
          ]
        }
      ]
    },
    {
      "fields": [
        {
          "type": "button",
          "name": "save",
          "label": "Save",
          "action": "save"
        }
      ]
    }
  ]
}