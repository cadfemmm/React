const SCHEMA = {
  "title": "Cognitive Assessment for Stroke Patients (CASP)",
  "sections": [
    {
      "title": "Education Level",
      "fields": [
        {
          "type": "button",
          "label": "Reference Images",
          "action": "education_reference"
        },
        {
          "type": "radio",
          "name": "education_level_naming",
          "label": "Naming",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            }
          ]
        },
        {
          "type": "radio",
          "name": "comprehension",
          "label": "Comprehension",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            }
          ]
        },
        {
          "type": "radio",
          "name": "reproducing_copy_cube",
          "label": "Reproducing a Copy of a Cube",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            }
          ]
        },
        {
          "type": "radio",
          "name": "graphic_series",
          "label": "Graphic Series",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            }
          ]
        },
        {
          "type": "radio",
          "name": "inhibition_flexibility",
          "label": "Inhibition/Flexibility",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            }
          ]
        },
        {
          "type": "radio",
          "name": "bisection_horizontal_line",
          "label": "Bisection of a Horizontal Line",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            }
          ]
        },
        {
          "type": "radio",
          "name": "image_recall",
          "label": "Image Recall",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            },
            {
              "label": "5",
              "value": 5
            },
            {
              "label": "6",
              "value": 6
            }
          ]
        },
        {
          "type": "radio",
          "name": "calendar",
          "label": "Calendar",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            },
            {
              "label": "5",
              "value": 5
            },
            {
              "label": "6",
              "value": 6
            }
          ]
        },
        {
          "type": "radio",
          "name": "praxis",
          "label": "Praxis",
          "options": [
            {
              "label": "0",
              "value": 0
            },
            {
              "label": "1",
              "value": 1
            },
            {
              "label": "2",
              "value": 2
            },
            {
              "label": "3",
              "value": 3
            },
            {
              "label": "4",
              "value": 4
            },
            {
              "label": "5",
              "value": 5
            },
            {
              "label": "6",
              "value": 6
            }
          ]
        },
        {
          "name": "total_casp_score",
          "label": "Total CASP Score",
          "type": "score-box"
        },
        {
          "name": "classification_score",
          "label": "Classification of Score",
          "type": "radio",
          "options": [
            {
              "label": "Normal",
              "value": "normal"
            },
            {
              "label": "Impaired",
              "value": "impaired"
            }
          ]
        },
        {
          "type": "textarea",
          "name": "comments",
          "label": "Comments"
        },
        {
          "type": "file-upload-modal",
          "name": "additional_document",
          "label": "Additional Document"
        }
      ]
    }
  ]
}

const REFERENCE_IMAGES = [
  {
    "title": "Naming",
    "src": "/naming.png"
  },
  {
    "title": "Reproducing a Copy of a Cube",
    "src": "/cube.png"
  },
  {
    "title": "Graphic Series",
    "src": "/graphic.png"
  },
  {
    "title": "Image Recall",
    "src": "/imagerecall.png"
  },
  {
    "title": "Praxis",
    "src": "/praxis.png"
  },
  {
    "title": "Calendar",
    "src": "/calendar.png"
  }
]