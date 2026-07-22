const schema = {
  "title": "Seizure Monitoring Chart",
  "subtitle": "Nursing · Neurological Observation Record",
  "styles": {
    "primary": "#3b5fa0",
    "primaryDark": "#1e3a8a",
    "primaryLight": "#eff6ff",
    "border": "#e2e8f0",
    "text": "#1e293b",
    "muted": "#64748b",
    "background": "#f8fafc"
  },
  "sections": [
    {
      "title": "Observation Log",
      "fields": [
        {
          "type": "subheading",
          "label": "Key: LOC = Loss of Consciousness | GI = Gastrointestinal Symptoms | BG = Blood Glucose | Post-ictal = Post-seizure State"
        },
        {
          "name": "observation_log",
          "type": "dynamic-table",
          "minRows": 5,
          "stickyColumns": 3,
          "columns": [
            {
              "key": "timestamp",
              "label": "Timestamp\n(Entry)",
              "width": 90,
              "type": "datetime-local"
            },
            {
              "key": "event_no",
              "label": "Event #",
              "width": 56,
              "type": "text"
            },
            {
              "key": "date",
              "label": "Date",
              "width": 100,
              "type": "date"
            },
            {
              "key": "start_time",
              "label": "Start Time\n(hh:mm:ss)",
              "width": 90,
              "type": "time"
            },
            {
              "key": "stop_time",
              "label": "Stop Time\n(hh:mm:ss)",
              "width": 90,
              "type": "time"
            },
            {
              "key": "duration",
              "label": "Duration\n(hh:mm:ss)",
              "width": 80,
              "type": "text"
            },
            {
              "key": "seizure_type",
              "label": "Seizure Type",
              "width": 140,
              "type": "single-select",
              "options": [
                "Generalised Tonic-Clonic",
                "Focal with Impaired Awareness",
                "Focal Aware",
                "Absence",
                "Myoclonic",
                "Status Epilepticus",
                "Other"
              ]
            },
            {
              "key": "aura",
              "label": "Aura\n(Y/N)",
              "width": 60,
              "type": "single-select",
              "options": [
                "Yes",
                "No"
              ]
            },
            {
              "key": "loc",
              "label": "LOC\n(Y/N)",
              "width": 60,
              "type": "single-select",
              "options": [
                "Yes",
                "No"
              ]
            },
            {
              "key": "motor_features",
              "label": "Motor Features",
              "width": 130,
              "type": "text"
            },
            {
              "key": "eyes",
              "label": "Eyes",
              "width": 80,
              "type": "text"
            },
            {
              "key": "respiratory",
              "label": "Respiratory",
              "width": 90,
              "type": "text"
            },
            {
              "key": "spo2",
              "label": "SpO2 (%)",
              "width": 70,
              "type": "text"
            },
            {
              "key": "hr",
              "label": "HR (bpm)",
              "width": 70,
              "type": "text"
            },
            {
              "key": "bp",
              "label": "BP (mmHg)",
              "width": 80,
              "type": "text"
            },
            {
              "key": "bg",
              "label": "BG (mg/dL\nor mmol/L)",
              "width": 80,
              "type": "text"
            },
            {
              "key": "gi_or_meds",
              "label": "GI/Stool or\nMeds(Y/N)",
              "width": 80,
              "type": "single-select",
              "options": [
                "Yes",
                "No"
              ]
            },
            {
              "key": "injuries",
              "label": "Injuries\n(Y/N)",
              "width": 70,
              "type": "single-select",
              "options": [
                "Yes",
                "No"
              ]
            },
            {
              "key": "injury_details",
              "label": "Injury Details",
              "width": 120,
              "type": "text"
            },
            {
              "key": "tongue_bite",
              "label": "Tongue Bite/\nIncontinence (Y/N)",
              "width": 100,
              "type": "single-select",
              "options": [
                "Yes",
                "No"
              ]
            },
            {
              "key": "interventions",
              "label": "Interventions\n(Time – Action – Details)",
              "width": 160,
              "type": "text"
            },
            {
              "key": "medications",
              "label": "Medications Given\n(Time – Drug – Dose – Route)",
              "width": 170,
              "type": "text"
            },
            {
              "key": "response",
              "label": "Response to\nIntervention",
              "width": 110,
              "type": "text"
            },
            {
              "key": "postictal",
              "label": "Post-ictal\nGCS/Alertness",
              "width": 100,
              "type": "text"
            },
            {
              "key": "returned_baseline",
              "label": "Returned to\nBaseline (Time)",
              "width": 100,
              "type": "time"
            },
            {
              "key": "witness",
              "label": "Witness\n(Name/Role)",
              "width": 110,
              "type": "text"
            },
            {
              "key": "nurse_initials",
              "label": "Nurse\nInitials",
              "width": 70,
              "type": "text"
            }
          ]
        }
      ]
    },
    {
      "title": "Clinical Notes & Summary",
      "fields": [
        {
          "name": "clinicalNotes",
          "label": "Clinical Notes / Additional Observations",
          "type": "input",
          "placeholder": "Record any additional clinical observations, escalation actions, or physician notifications..."
        }
      ]
    }
  ]
}