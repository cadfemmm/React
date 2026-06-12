export const SCHEMA = {
  "title": "Binocular Vision Questionnaire",
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Binocular Vision"
        },
        {
          "type": "radio",
          "name": "bv_onset",
          "label": "Onset",
          "options": [
            {
              "label": "Sudden",
              "value": "sudden"
            },
            {
              "label": "Gradual",
              "value": "gradual"
            }
          ]
        },
        {
          "type": "radio",
          "name": "bv_frequency",
          "label": "Frequency",
          "options": [
            {
              "label": "Constant",
              "value": "constant"
            },
            {
              "label": "Intermittent",
              "value": "intermittent"
            },
            {
              "label": "Alternating",
              "value": "alternating"
            }
          ]
        },
        {
          "type": "radio",
          "name": "bv_was_he_been",
          "label": "Neurological disease",
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
          "type": "input",
          "name": "bv_was_he_been_specify",
          "label": "Neurological – specify",
          "showIf": {
            "field": "bv_was_he_been",
            "equals": "yes"
          }
        },
        {
          "type": "row",
          "fields": [
            {
              "type": "input",
              "name": "bv_type_of_birth",
              "label": "Type of Birth"
            },
            {
              "type": "input",
              "name": "bv_birth_term",
              "label": "Birth Term"
            }
          ]
        },
        {
          "type": "input",
          "name": "bv_previous_treatment",
          "label": "Previous Treatment"
        },
        {
          "type": "input",
          "name": "bv_subjective_Remarks",
          "label": "Remarks"
        },
        {
          "type": "multi-select-dropdown",
          "name": "bv_ocular_signs",
          "label": "Ocular Signs",
          "options": [
            {
              "label": "Squint / turn of eyes",
              "value": "Squint"
            },
            {
              "label": "Defective eye movement",
              "value": "Defective eye movement"
            },
            {
              "label": "Nystagmus (wobbling eyes)",
              "value": "Nystagmus"
            },
            {
              "label": "Visual inattention / neglect",
              "value": "Visual inattention"
            },
            {
              "label": "Closing one eye",
              "value": "Closing one eye"
            },
            {
              "label": "Suspected visual problem",
              "value": "Suspected visual problem"
            },
            {
              "label": "Ptosis (lid drop)",
              "value": "Ptosis"
            },
            {
              "label": "Abnormal pupils",
              "value": "Abnormal pupils"
            },
            {
              "label": "Head turn",
              "value": "Head turn"
            },
            {
              "label": "Family concern",
              "value": "Family concern"
            },
            {
              "label": "Misjudging distance",
              "value": "Misjudging distance"
            },
            {
              "label": "Other (Specify)",
              "value": "Other"
            }
          ]
        },
        {
          "type": "input",
          "name": "bv_ocular_signs_other",
          "label": "Other – Specify",
          "showIf": {
            "field": "Other"
          }
        }
      ]
    }
  ]
}