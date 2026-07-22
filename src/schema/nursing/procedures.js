const Procedures_Schema = {
  "title": "Procedures",
  "actions": [
    {
      "type": "back",
      "label": "Back"
    }
  ],
  "sections": [
    {
      "fields": [
        {
          "type": "checkbox-group",
          "name": "simple_procedures",
          "label": "Simple Procedures",
          "options": [
            {
              "label": "Eye irrigation",
              "value": "eye_irrigation"
            },
            {
              "label": "Ear irrigation",
              "value": "ear_irrigation"
            },
            {
              "label": "Vital Sign",
              "value": "vital_sign"
            },
            {
              "label": "Glucose Monitoring",
              "value": "glucose_monitoring"
            },
            {
              "label": "Ryle’s Tube Insertion",
              "value": "ryles_tube_insertion"
            },
            {
              "label": "Ryle’s tube feeding",
              "value": "ryles_tube_feeding"
            },
            {
              "label": "Suture Removing",
              "value": "suture_removing"
            },
            {
              "label": "Tracheostomy dressing",
              "value": "tracheostomy_dressing"
            },
            {
              "label": "Tracheostomy suctioning",
              "value": "tracheostomy_suctioning"
            },
            {
              "label": "Electrocardiogram (ECG)",
              "value": "ecg"
            },
            {
              "label": "PEG cleaning",
              "value": "peg_cleaning"
            },
            {
              "label": "PEG Feeding",
              "value": "peg_feeding"
            },
            {
              "label": "IV Cannulation Insertion",
              "value": "iv_cannulation"
            },
            {
              "label": "Blood taking",
              "value": "blood_taking"
            },
            {
              "label": "Wound dressing",
              "value": "wound_dressing"
            },
            {
              "label": "Suprapubic dressing",
              "value": "suprapubic_dressing"
            },
            {
              "label": "Bladder Scan",
              "value": "bladder_scan"
            },
            {
              "label": "Continuous Bladder Drainage (CBD) Insertion",
              "value": "cbd_insertion"
            },
            {
              "label": "Clean Intermittent Cathetherization (CIC) Insertion",
              "value": "cic_insertion"
            },
            {
              "label": "Digital Rectal Stimulation",
              "value": "digital_rectal_stimulation"
            },
            {
              "label": "Manual evacuation",
              "value": "manual_evacuation"
            },
            {
              "label": "Serial Casting",
              "value": "serial_casting"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "type": "textarea",
          "name": "simple_procedure_others",
          "label": "Others",
          "showIf": {
            "field": "simple_procedures",
            "includes": "others"
          }
        },
        {
          "type": "textarea",
          "name": "simple_observation",
          "label": "Observation During Procedure"
        },
        {
          "type": "radio",
          "name": "simple_adverse_reaction",
          "label": "Adverse Reaction",
          "options": [
            {
              "label": "Yes",
              "value": "yes"
            },
            {
              "label": "No",
              "value": "no"
            }
          ]
        },
        {
          "type": "textarea",
          "name": "simple_adverse_reaction_details",
          "label": "Specify",
          "showIf": {
            "field": "simple_adverse_reaction",
            "equals": "yes"
          }
        },
        {
          "type": "textarea",
          "name": "simple_plan",
          "label": "Plan"
        }
      ]
    }
  ]
}

const Advance_common_Schema = {
  "title": "",
  "sections": [
    {
      "fields": [
        {
          "type": "textarea",
          "name": "advance_observation",
          "label": "Observation During Procedure"
        },
        {
          "type": "radio",
          "name": "advance_adverse_reaction",
          "label": "Adverse Reaction",
          "options": [
            {
              "label": "Yes",
              "value": "yes"
            },
            {
              "label": "No",
              "value": "no"
            }
          ]
        },
        {
          "type": "textarea",
          "name": "advance_adverse_reaction_details",
          "label": "Specify",
          "showIf": {
            "field": "advance_adverse_reaction",
            "equals": "yes"
          }
        },
        {
          "type": "textarea",
          "name": "advance_plan",
          "label": "Plan"
        }
      ]
    }
  ]
}
