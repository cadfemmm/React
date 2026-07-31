const SCHEMA = {
  "title": "Coordination Tests for Neurological Patients",
  "sections": [
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "upper_limb_coordination_section",
          "label": "Upper Limb Coordination Tests",
          "defaultOpen": true,
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "Findings"
              ],
              "template": "minmax(320px, 1fr) 420px"
            },
            {
              "type": "grid-row",
              "name": "fnt",
              "label": "Finger-to-Nose Test (FNT)",
              "template": "minmax(320px, 1fr) 420px",
              "info": {
                "title": "Purpose & Procedure",
                "content": [
                  "Purpose: Assess cerebellar coordination and accuracy.",
                  "Procedure: Ask the patient to alternately touch their nose and the examiner's finger as accurately as possible."
                ]
              },
              "cols": [
                {
                  "name": "fnt_finding",
                  "type": "input",
                  "placeholder": "Enter findings"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "finger_to_finger",
              "label": "Finger-to-Finger Test",
              "template": "minmax(320px, 1fr) 420px",
              "info": {
                "title": "Purpose & Procedure",
                "content": [
                  "Purpose: Assess reaching accuracy and upper limb coordination.",
                  "Procedure: Ask the patient to touch the examiner's moving finger repeatedly."
                ]
              },
              "cols": [
                {
                  "name": "finger_to_finger_finding",
                  "type": "input",
                  "placeholder": "Enter findings"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "ram",
              "label": "Rapid Alternating Movements (RAM)",
              "template": "minmax(320px, 1fr) 420px",
              "info": {
                "title": "Purpose & Procedure",
                "content": [
                  "Purpose: Evaluate rapid alternating movements and cerebellar function.",
                  "Procedure: Ask the patient to perform rapid pronation and supination of the hands."
                ]
              },
              "cols": [
                {
                  "name": "ram_finding",
                  "type": "input",
                  "placeholder": "Enter findings"
                }
              ]
            },
            {
              "type": "textarea",
              "name": "upper_limb_coordination_notes",
              "label": "Notes",
              "placeholder": "Free text..."
            }
          ]
        },
        {
          "type": "accordion",
          "name": "lower_limb_coordination_section",
          "label": "Lower Limb Coordination Tests",
          "defaultOpen": false,
          "children": [
            {
              "type": "grid-header",
              "cols": [
                "Findings"
              ],
              "template": "minmax(320px, 1fr) 420px"
            },
            {
              "type": "grid-row",
              "name": "heel_to_shin",
              "label": "Heel-to-Shin Test",
              "template": "minmax(320px, 1fr) 420px",
              "info": {
                "title": "Purpose & Procedure",
                "content": [
                  "Purpose: Assess lower limb cerebellar coordination.",
                  "Procedure: Ask the patient to slide the heel of one foot down the shin of the opposite leg."
                ]
              },
              "cols": [
                {
                  "name": "heel_to_shin_finding",
                  "type": "input",
                  "placeholder": "Enter findings"
                }
              ]
            },
            {
              "type": "grid-row",
              "name": "fsst",
              "label": "Four Square Step Test (FSST)",
              "template": "minmax(320px, 1fr) 420px",
              "info": {
                "title": "Purpose & Procedure",
                "content": [
                  "Purpose: Assess dynamic balance, multidirectional stepping, and coordination.",
                  "Procedure: Ask the patient to step rapidly in four directions over canes arranged in a cross pattern."
                ]
              },
              "cols": [
                {
                  "name": "fsst_finding",
                  "type": "input",
                  "placeholder": "Enter findings"
                }
              ]
            },
            {
              "type": "textarea",
              "name": "lower_limb_coordination_notes",
              "label": "Notes",
              "placeholder": "Free text..."
            }
          ]
        }
      ]
    }
  ]
}