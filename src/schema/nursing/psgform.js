const PSG_SCHEMA = {
    enableLanguageToggle: true,
    title: { en: "PSG (Polysomnogram)" },

    actions: [
      { type: "toggle-language" },
      { type: "back", label: { en: "Back" } }
    ],

    sections: [
      {
        fields: [
{
            name: "date_of_appointment",
            label: { en: "Date of Appointment", ms: "Tarikh Temujanji" },
            type: "date",
            placeholder: { en: "Select date", ms: "Pilih tarikh" }
          },

          {
            type: "row",
            fields: [
              { name: "neck_circumference", label: { en: "Neck Circumference (Cm)", ms: "Lilitan Leher (Cm)" }, type: "input" },
              { name: "bmi_conclusion", label: { en: "BMI Conclusion", ms: "Kesimpulan BMI" }, type: "input", readOnly: true }
            ]
          },

          { type: "subheading", label: { en: "Sleep Assessment", ms: "Penilaian Tidur" } },
          {
            name: "stop_bang",
            label: { en: "Stop Bang Sleep Score", ms: "Skor Tidur Stop Bang" },
            type: "radio",
            options: [
  { value: "1_3", label: { en: "1-3 Items", ms: "1-3 Item" } },
  { value: "3_8", label: { en: "3-8 Items", ms: "3-8 Item" } }
]
          },
          {
            type: "row",
            fields: [
              {
                name: "high_risk_osa",
                label: { en: "High Risk Of OSA", ms: "Risiko Tinggi OSA" },
                type: "radio",
                options: [
  { value: "yes", label: { en: "Yes", ms: "Ya" } },
  { value: "no", label: { en: "No", ms: "Tidak" } }
]
              },
              {
                name: "low_risk_osa",
                label: { en: "Low Risk Of OSA", ms: "Risiko Rendah OSA" },
                type: "radio",
                options: [
  { value: "yes", label: { en: "Yes", ms: "Ya" } },
  { value: "no", label: { en: "No", ms: "Tidak" } }
]
              }
            ]
          },
          {
            name: "night_procedure",
            label: { en: "Night / Procedure", ms: "Malam / Prosedur" },
            type: "radio",
            options: [
  { value: "1", label: { en: "1 Night", ms: "1 Malam" } },
  { value: "2", label: { en: "2 Night", ms: "2 Malam" } },
  { value: "3", label: { en: "3 Night", ms: "3 Malam" } }
]
          },


       
{
  "type": "button",
  "action": "start-stop-bang",
  "label": {
    "en": "STOP-BANG Questionnaire"
  }
},
{
  "type": "subheading",
  "label": {
    "en": "STOP-BANG Questionnaire"
  },
  "showIf": {
    "field": "show_stop_bang",
    "equals": true
  }
},
{
  "type": "subheading",
  "label": {
    "en": "1. Snoring"
  },
  "showIf": {
    "field": "show_stop_bang",
    "equals": true
  }
},
{
  "name": "sb_snoring",
  "label": {
    "en": "Do you snore loudly (louder than talking or loud enough to be heard through closed doors)?"
  },
  "type": "radio",
  "options":[
  { value: "yes", label: { en: "Yes", ms: "Ya" } },
  { value: "no", label: { en: "No", ms: "Tidak" } }
],
  "showIf": {
    "field": "show_stop_bang",
    "equals": true
  }
},
{
  "type": "subheading",
  "label": {
    "en": "2. Tired"
  },
  "showIf": {
    "field": "show_stop_bang",
    "equals": true
  }
},
{
  "name": "sb_tired",
  "label": {
    "en": "Do you often feel tired, fatigued, or sleepy during daytime?"
  },
  "type": "radio",
  "options": [
  { value: "yes", label: { en: "Yes", ms: "Ya" } },
  { value: "no", label: { en: "No", ms: "Tidak" } }
],
  "showIf": {
    "field": "show_stop_bang",
    "equals": true
  }
},
{
  "type": "subheading",
  "label": {
    "en": "3. Observed"
  },
  "showIf": {
    "field": "show_stop_bang",
    "equals": true
  }
},
{
  "name": "sb_observed",
  "label": {
    "en": "Has anyone observed you stop breathing during your sleep?"
  },
  "type": "radio",
  "options": [
  { value: "yes", label: { en: "Yes", ms: "Ya" } },
  { value: "no", label: { en: "No", ms: "Tidak" } }
],
  "showIf": {
    "field": "show_stop_bang",
    "equals": true
  }
},
{
  "type": "subheading",
  "label": {
    "en": "4. Blood Pressure"
  },
  "showIf": {
    "field": "show_stop_bang",
    "equals": true
  }
},
{
  "name": "sb_bp",
  "label": {
    "en": "Do you have or are you being treated for high blood pressure?"
  },
  "type": "radio",
  "options": [
  { value: "yes", label: { en: "Yes", ms: "Ya" } },
  { value: "no", label: { en: "No", ms: "Tidak" } }
],
  "showIf": {
    "field": "show_stop_bang",
    "equals": true
  }
},
{
  "type": "subheading",
  "label": {
    "en": "5. BMI"
  },
  "showIf": {
    "field": "show_stop_bang",
    "equals": true
  }
},
{
  "name": "sb_bmi",
  "label": {
    "en": "BMI more than 35 kg/m²?"
  },
  "type": "radio",
  "options": [
  { value: "yes", label: { en: "Yes", ms: "Ya" } },
  { value: "no", label: { en: "No", ms: "Tidak" } }
],
  "showIf": {
    "field": "show_stop_bang",
    "equals": true
  }
},
{
  "type": "subheading",
  "label": {
    "en": "6. Age"
  },
  "showIf": {
    "field": "show_stop_bang",
    "equals": true
  }
},
{
  "name": "sb_age",
  "label": {
    "en": "Age over 50 years old?"
  },
  "type": "radio",
  "options": [
  { value: "yes", label: { en: "Yes", ms: "Ya" } },
  { value: "no", label: { en: "No", ms: "Tidak" } }
],
  "showIf": {
    "field": "show_stop_bang",
    "equals": true
  }
},
{
  "type": "subheading",
  "label": {
    "en": "7. Neck Circumference"
  },
  "showIf": {
    "field": "show_stop_bang",
    "equals": true
  }
},
{
  "name": "sb_neck",
  "label": {
    "en": "Neck circumference greater than 40 cm?"
  },
  "type": "radio",
  "options": [
  { value: "yes", label: { en: "Yes", ms: "Ya" } },
  { value: "no", label: { en: "No", ms: "Tidak" } }
],
  "showIf": {
    "field": "show_stop_bang",
    "equals": true
  }
},
{
  "type": "subheading",
  "label": {
    "en": "8. Gender"
  },
  "showIf": {
    "field": "show_stop_bang",
    "equals": true
  }
},
{
  "name": "sb_gender",
  "label": {
    "en": "Gender male?"
  },
  "type": "radio",
  "options": [
  { value: "yes", label: { en: "Yes", ms: "Ya" } },
  { value: "no", label: { en: "No", ms: "Tidak" } }
],
  "showIf": {
    "field": "show_stop_bang",
    "equals": true
  }
},
{
  "type": "note",
  "label": {
    "en": "* Neck circumference is measured by staff"
  },
  "showIf": {
    "field": "show_stop_bang",
    "equals": true
  }
},
{
  "name": "osa_result",
  "label": {
    "en": "OSA Risk Result"
  },
  "type": "input",
  "readOnly": true,
  "showIf": {
    "field": "show_stop_bang",
    "equals": true
  }
},


          { type: "subheading", label: { en: "Technical Airflow", ms: "Aliran Udara Teknikal" } },
          {
            name: "technical_airflow",
            label: { en: "Technical Airflow", ms: "Aliran Udara Teknikal" },
            type: "checkbox-group",
            options: [
  { value: "rip_belts", label: { en: "Respiratory Effort: Thoracic and abdominal RIP belts", ms: "Usaha Pernafasan: Tali RIP toraks dan abdomen" } },
  { value: "spo2_pr", label: { en: "Oxygen saturation and Pulse Rate", ms: "Ketepuan oksigen dan Kadar Nadi" } },
  { value: "snoring", label: { en: "Snoring", ms: "Dengkuran" } }
]
          },
          {
            type: "row",
            fields: [
              { name: "cpap", label: { en: "CPAP", ms: "CPAP" }, type: "radio", options: YES_NO_OPTIONS },
              { name: "bpap", label: { en: "BPAP", ms: "BPAP" }, type: "radio", options: YES_NO_OPTIONS },
              { name: "snoring", label: { en: "Snoring", ms: "Dengkuran" }, type: "radio", options: YES_NO_OPTIONS }
            ]
          },
          {
            name: "scoring_table",
            label: { en: "Scoring Table", ms: "Jadual Skor" },
            type: "radio",
            options: [
  { value: "normal", label: { en: "0-5 Apnoea + hypopnoea events per hour / Normal", ms: "0-5 kejadian apnoea + hipopnoea sejam / Normal" } },
  { value: "mild", label: { en: "6-15 Apnoea + hypopnoea events per hour / Mild sleep apnoea", ms: "6-15 kejadian apnoea + hipopnoea sejam / Apnoea tidur ringan" } },
  { value: "moderate", label: { en: "16-29 Apnoea + hypopnoea events per hour / Moderate sleep apnoea", ms: "16-29 kejadian apnoea + hipopnoea sejam / Apnoea tidur sederhana" } },
  { value: "severe", label: { en: "30 Or greater apnoea + hypopnoea events per hour / Severe sleep apnoea", ms: "30 atau lebih kejadian apnoea + hipopnoea sejam / Apnoea tidur teruk" } }
],
            labelAbove: true
          },
          {
            name: "previous_psg",
            label: { en: "Previous PSG", ms: "PSG Sebelumnya" },
            type: "radio",
            options: [
  { value: "yes", label: { en: "Yes", ms: "Ya" } },
  { value: "no", label: { en: "No", ms: "Tidak" } }
]
          },
                 
          {
  name: "previous_study_upload",
  label: { en: "Upload Previous PSG", ms: "Muat naik PSG Sebelumnya" },
  type: "attach-file",
  accept: "image/*,.pdf",
  showIf: { field: "previous_study", equals: "yes" }
},
          {
            name: "previous_psg_image",
            label: "Upload Report",
            type: "attach-file",
            showIf: {
              field: "previous_psg",
              equals: "yes"
            }
          },
          { type: "subheading", label: { en: "Report", ms: "Laporan" } },
          {
            name: "graf",
            title: { en: "Graph", ms: "Graph" },
            type: "attach-file",
            accept: "image/*,.pdf,video/*"
          },
       
          {
            name: "final_report",
            label: { en: "Final Report", ms: "Laporan Akhir" },
            type: "radio",
            options: [
  { value: "normal", label: { en: "Normal", ms: "Normal" } },
  { value: "abnormal", label: { en: "Abnormal", ms: "Tidak Normal" } },
  { value: "others", label: { en: "Others", ms: "Lain-Lain" } }
]
          },
          {
            name: "final_report_others",
            label: { en: "Specify Other", ms: "Nyatakan Lain-lain" },
            type: "input",
            placeholder: { en: "Free text", ms: "Teks bebas" },
            showIf: { field: "final_report", equals: "others" }
          },

        ]
      }
    ]
  }