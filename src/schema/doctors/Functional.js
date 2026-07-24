const ADL_SCHEMA = {
  "title": "Activities of Daily Living",
  "fields": [
    {
      "name": "adl_washing",
      "label": "Washing oneself",
      "type": "radio-matrix",
      "options": [
        {
          "label": "Independent",
          "value": 0
        },
        {
          "label": "Minimal dependence",
          "value": 1
        },
        {
          "label": "Moderate dependence",
          "value": 2
        },
        {
          "label": "Maximum dependence",
          "value": 3
        },
        {
          "label": "Total dependence",
          "value": 4
        }
      ]
    },
    {
      "name": "adl_body_care",
      "label": "Caring for body parts",
      "type": "radio-matrix",
      "options": [
        {
          "label": "Independent",
          "value": 0
        },
        {
          "label": "Minimal dependence",
          "value": 1
        },
        {
          "label": "Moderate dependence",
          "value": 2
        },
        {
          "label": "Maximum dependence",
          "value": 3
        },
        {
          "label": "Total dependence",
          "value": 4
        }
      ]
    },
    {
      "name": "adl_toileting",
      "label": "Toileting",
      "type": "radio-matrix",
      "options": [
        {
          "label": "Independent",
          "value": 0
        },
        {
          "label": "Minimal dependence",
          "value": 1
        },
        {
          "label": "Moderate dependence",
          "value": 2
        },
        {
          "label": "Maximum dependence",
          "value": 3
        },
        {
          "label": "Total dependence",
          "value": 4
        }
      ]
    },
    {
      "name": "adl_dressing",
      "label": "Dressing",
      "type": "radio-matrix",
      "options": [
        {
          "label": "Independent",
          "value": 0
        },
        {
          "label": "Minimal dependence",
          "value": 1
        },
        {
          "label": "Moderate dependence",
          "value": 2
        },
        {
          "label": "Maximum dependence",
          "value": 3
        },
        {
          "label": "Total dependence",
          "value": 4
        }
      ]
    },
    {
      "name": "adl_eating",
      "label": "Eating",
      "type": "radio-matrix",
      "options": [
        {
          "label": "Independent",
          "value": 0
        },
        {
          "label": "Minimal dependence",
          "value": 1
        },
        {
          "label": "Moderate dependence",
          "value": 2
        },
        {
          "label": "Maximum dependence",
          "value": 3
        },
        {
          "label": "Total dependence",
          "value": 4
        }
      ]
    },
    {
      "name": "adl_drinking",
      "label": "Drinking",
      "type": "radio-matrix",
      "options": [
        {
          "label": "Independent",
          "value": 0
        },
        {
          "label": "Minimal dependence",
          "value": 1
        },
        {
          "label": "Moderate dependence",
          "value": 2
        },
        {
          "label": "Maximum dependence",
          "value": 3
        },
        {
          "label": "Total dependence",
          "value": 4
        }
      ]
    },
    {
      "name": "adl_health_mgmt",
      "label": "Looking after one’s health",
      "type": "radio-matrix",
      "options": [
        {
          "label": "Independent",
          "value": 0
        },
        {
          "label": "Minimal dependence",
          "value": 1
        },
        {
          "label": "Moderate dependence",
          "value": 2
        },
        {
          "label": "Maximum dependence",
          "value": 3
        },
        {
          "label": "Total dependence",
          "value": 4
        }
      ]
    },
    {
      "name": "adl_other_selfcare",
      "label": "Other self-care activities",
      "type": "radio-matrix",
      "options": [
        {
          "label": "Independent",
          "value": 0
        },
        {
          "label": "Minimal dependence",
          "value": 1
        },
        {
          "label": "Moderate dependence",
          "value": 2
        },
        {
          "label": "Maximum dependence",
          "value": 3
        },
        {
          "label": "Total dependence",
          "value": 4
        }
      ]
    },
    {
      "name": "adl_overall_selfcare",
      "label": "Overall self-care",
      "type": "radio-matrix",
      "options": [
        {
          "label": "Independent",
          "value": 0
        },
        {
          "label": "Minimal dependence",
          "value": 1
        },
        {
          "label": "Moderate dependence",
          "value": 2
        },
        {
          "label": "Maximum dependence",
          "value": 3
        },
        {
          "label": "Total dependence",
          "value": 4
        }
      ]
    },
    {
      "name": "adl_other_selfcare_specify",
      "label": "Remarks",
      "type": "textarea"
    },
    {
      "type": "radio",
      "name": "adl_recent_fall_history",
      "label": "Any recent history of fall",
      "options": [
        {
          "label": "Yes",
          "value": "Yes"
        },
        {
          "label": "No",
          "value": "No"
        }
      ]
    },
    {
      "type": "dynamic-section",
      "name": "adl_fall_history_specify_entries",
      "showIf": {
        "field": "adl_recent_fall_history",
        "equals": "Yes"
      },
      "fields": [
        {
          "type": "input",
          "name": "specify",
          "label": "Specify"
        }
      ]
    },
    {
      "type": "radio",
      "name": "adl_fall_complication",
      "label": "Complication of the fall",
      "options": [
        {
          "label": "Yes",
          "value": "Yes"
        },
        {
          "label": "No",
          "value": "No"
        }
      ]
    },
    {
      "type": "textarea",
      "name": "adl_fall_complication_details",
      "label": "Complication of the fall",
      "showIf": {
        "field": "adl_fall_complication",
        "equals": "Yes"
      }
    }
  ]
}

const IADL_SCHEMA = {
  "title": "Lawton - Brody Instrumental Activities of Daily Living (IADL) Scale",
  "sections": [
    {
      "title": "A. Ability to Use Telephone",
      "fields": [
        {
          "type": "radio",
          "name": "telephone",
          "options": [
            {
              "label": "Operates telephone on own initiative",
              "value": "a"
            },
            {
              "label": "Dials a few well known numbers",
              "value": "b"
            },
            {
              "label": "Answers telephone but does not dial",
              "value": "c"
            },
            {
              "label": "Does not use telephone at all",
              "value": "d"
            }
          ]
        }
      ]
    },
    {
      "title": "B. Shopping",
      "fields": [
        {
          "type": "radio",
          "name": "shopping",
          "options": [
            {
              "label": "Takes care of all shopping independently",
              "value": "a"
            },
            {
              "label": "Shops independently for small purchases",
              "value": "b"
            },
            {
              "label": "Needs to be accompanied on shopping",
              "value": "c"
            },
            {
              "label": "Unable to shop",
              "value": "d"
            }
          ]
        }
      ]
    },
    {
      "title": "C. Food Preparation",
      "fields": [
        {
          "type": "radio",
          "name": "food",
          "options": [
            {
              "label": "Plans and prepares meals independently",
              "value": "a"
            },
            {
              "label": "Prepares meals if supplied ingredients",
              "value": "b"
            },
            {
              "label": "Heats and serves prepared meals only",
              "value": "c"
            },
            {
              "label": "Needs meals prepared",
              "value": "d"
            }
          ]
        }
      ]
    },
    {
      "title": "D. Housekeeping",
      "fields": [
        {
          "type": "radio",
          "name": "housekeeping",
          "options": [
            {
              "label": "Maintains house alone with occasional assistance",
              "value": "a"
            },
            {
              "label": "Performs light daily tasks",
              "value": "b"
            },
            {
              "label": "Needs help with housekeeping",
              "value": "c"
            },
            {
              "label": "Does not participate in housekeeping",
              "value": "d"
            }
          ]
        }
      ]
    },
    {
      "title": "E. Laundry",
      "fields": [
        {
          "type": "radio",
          "name": "laundry",
          "options": [
            {
              "label": "Does personal laundry completely",
              "value": "a"
            },
            {
              "label": "Launders small items only",
              "value": "b"
            },
            {
              "label": "Laundry must be done by others",
              "value": "c"
            }
          ]
        }
      ]
    },
    {
      "title": "F. Mode of Transportation",
      "fields": [
        {
          "type": "radio",
          "name": "transport",
          "options": [
            {
              "label": "Travels independently",
              "value": "a"
            },
            {
              "label": "Arranges own travel via taxi",
              "value": "b"
            },
            {
              "label": "Travels on public transport when accompanied",
              "value": "c"
            },
            {
              "label": "Does not travel at all",
              "value": "d"
            }
          ]
        }
      ]
    },
    {
      "title": "G. Responsibility for Medication",
      "fields": [
        {
          "type": "radio",
          "name": "medication",
          "options": [
            {
              "label": "Responsible for taking medication correctly",
              "value": "a"
            },
            {
              "label": "Medication prepared in advance",
              "value": "b"
            },
            {
              "label": "Not capable of dispensing medication",
              "value": "c"
            }
          ]
        }
      ]
    },
    {
      "title": "H. Ability to Handle Finances",
      "fields": [
        {
          "type": "radio",
          "name": "finance",
          "options": [
            {
              "label": "Manages financial matters independently",
              "value": "a"
            },
            {
              "label": "Manages small purchases but needs help",
              "value": "b"
            },
            {
              "label": "Incapable of handling money",
              "value": "c"
            }
          ]
        }
      ]
    },
    {
      "title": "Results",
      "fields": [
        {
          "type": "score-box",
          "name": "iadl_total",
          "label": "Total IADL Score"
        },
        {
          "type": "textarea",
          "name": "comments",
          "label": "Comments"
        }
      ]
    }
  ]
}

const MOBILITY_SCHEMA = {
  "title": "Mobility",
  "fields": [
    {
      "name": "mobility_present",
      "label": "Mobility",
      "type": "radio",
      "options": [
        "Ambulant",
        "Non-Ambulant"
      ]
    },
    {
      "name": "mobility_short_support_modes",
      "label": "Short Distance",
      "type": "radio",
      "options": [
        {
          "label": "Walking Aids",
          "value": "walking_aids"
        },
        {
          "label": "Wheelchair",
          "value": "wheelchair"
        },
        {
          "label": "Others",
          "value": "others"
        },
        {
          "label": "Unaided",
          "value": "unaided"
        }
      ],
      "showIf": {
        "field": "mobility_present",
        "equals": "Ambulant"
      }
    },
    {
      "name": "mobility_short_aid_type",
      "label": "",
      "type": "radio",
      "options": [
        "Walking stick/cane",
        "Elbow crutches (single/bilateral)",
        "Axillary crutches (single/bilateral)",
        "Platform crutches (single/bilateral)",
        "Quadripod",
        "Walking frame",
        "Wheeled walker",
        "Rollator/reverse rollator"
      ],
      "showIf": {
        "field": "mobility_short_support_modes",
        "equals": "walking_aids"
      }
    },
    {
      "name": "mobility_short_wheelchair_type",
      "label": "",
      "type": "radio",
      "options": [
        "Manual wheelchair",
        "Electric wheelchair"
      ],
      "showIf": {
        "field": "mobility_short_support_modes",
        "equals": "wheelchair"
      }
    },
    {
      "name": "mobility_short_others",
      "label": "Others (Specify)",
      "type": "input",
      "showIf": {
        "field": "mobility_short_support_modes",
        "equals": "others"
      }
    },
    {
      "name": "mobility_short_walking_aid_level",
      "label": "",
      "type": "radio",
      "options": [
        "Independent",
        "Minimal assistance",
        "Moderate assistance",
        "Maximum assistance",
        "Total Dependent"
      ],
      "showIf": {
        "field": "mobility_short_support_modes",
        "equals": "walking_aids",
        "and": {
          "field": "mobility_short_aid_type",
          "oneOf": [
            "Walking stick/cane",
            "Elbow crutches (single/bilateral)",
            "Axillary crutches (single/bilateral)",
            "Platform crutches (single/bilateral)",
            "Quadripod",
            "Walking frame",
            "Wheeled walker",
            "Rollator/reverse rollator"
          ]
        }
      }
    },
    {
      "name": "mobility_short_wheelchair_level",
      "label": "",
      "type": "radio",
      "options": [
        "Independent",
        "Minimal assistance",
        "Moderate assistance",
        "Maximum assistance",
        "Total Dependent"
      ],
      "showIf": {
        "field": "mobility_short_support_modes",
        "equals": "wheelchair",
        "and": {
          "field": "mobility_short_wheelchair_type",
          "oneOf": [
            "Manual wheelchair",
            "Electric wheelchair"
          ]
        }
      }
    },
    {
      "name": "mobility_long_support_modes",
      "label": "Long Distance",
      "type": "radio",
      "options": [
        {
          "label": "Walking Aids",
          "value": "walking_aids"
        },
        {
          "label": "Wheelchair",
          "value": "wheelchair"
        },
        {
          "label": "Others",
          "value": "others"
        },
        {
          "label": "Unaided",
          "value": "unaided"
        }
      ],
      "showIf": {
        "field": "mobility_present",
        "equals": "Ambulant"
      }
    },
    {
      "name": "mobility_long_aid_type",
      "label": "",
      "type": "radio",
      "options": [
        "Walking stick/cane",
        "Elbow crutches (single/bilateral)",
        "Axillary crutches (single/bilateral)",
        "Platform crutches (single/bilateral)",
        "Quadripod",
        "Walking frame",
        "Wheeled walker",
        "Rollator/reverse rollator"
      ],
      "showIf": {
        "field": "mobility_long_support_modes",
        "equals": "walking_aids"
      }
    },
    {
      "name": "mobility_long_wheelchair_type",
      "label": "",
      "type": "radio",
      "options": [
        "Manual wheelchair",
        "Electric wheelchair"
      ],
      "showIf": {
        "field": "mobility_long_support_modes",
        "equals": "wheelchair"
      }
    },
    {
      "name": "mobility_long_others",
      "label": "Others (Specify)",
      "type": "input",
      "showIf": {
        "field": "mobility_long_support_modes",
        "equals": "others"
      }
    },
    {
      "name": "mobility_long_walking_aid_level",
      "label": "",
      "type": "radio",
      "options": [
        "Independent",
        "Minimal assistance",
        "Moderate assistance",
        "Maximum assistance",
        "Total Dependent"
      ],
      "showIf": {
        "field": "mobility_long_support_modes",
        "equals": "walking_aids",
        "and": {
          "field": "mobility_long_aid_type",
          "oneOf": [
            "Walking stick/cane",
            "Elbow crutches (single/bilateral)",
            "Axillary crutches (single/bilateral)",
            "Platform crutches (single/bilateral)",
            "Quadripod",
            "Walking frame",
            "Wheeled walker",
            "Rollator/reverse rollator"
          ]
        }
      }
    },
    {
      "name": "mobility_long_wheelchair_level",
      "label": "",
      "type": "radio",
      "options": [
        "Independent",
        "Minimal assistance",
        "Moderate assistance",
        "Maximum assistance",
        "Total Dependent"
      ],
      "showIf": {
        "field": "mobility_long_support_modes",
        "equals": "wheelchair",
        "and": {
          "field": "mobility_long_wheelchair_type",
          "oneOf": [
            "Manual wheelchair",
            "Electric wheelchair"
          ]
        }
      }
    },
    {
      "name": "mobility_support_modes",
      "label": "",
      "type": "radio",
      "options": [
        {
          "label": "Walking Aids",
          "value": "walking_aids"
        },
        {
          "label": "Wheelchair",
          "value": "wheelchair"
        },
        {
          "label": "Others",
          "value": "others"
        },
        {
          "label": "Unaided",
          "value": "unaided"
        }
      ],
      "showIf": {
        "field": "mobility_present",
        "equals": "Non-Ambulant"
      }
    },
    {
      "name": "mobility_aid_type",
      "label": "",
      "type": "radio",
      "options": [
        "Walking stick/cane",
        "Elbow crutches (single/bilateral)",
        "Axillary crutches (single/bilateral)",
        "Platform crutches (single/bilateral)",
        "Quadripod",
        "Walking frame",
        "Wheeled walker",
        "Rollator/reverse rollator"
      ],
      "showIf": {
        "field": "mobility_support_modes",
        "equals": "walking_aids"
      }
    },
    {
      "name": "mobility_wheelchair_type",
      "label": "",
      "type": "radio",
      "options": [
        "Manual wheelchair",
        "Electric wheelchair"
      ],
      "showIf": {
        "field": "mobility_support_modes",
        "equals": "wheelchair"
      }
    },
    {
      "name": "mobility_others",
      "label": "Others (Specify)",
      "type": "input",
      "showIf": {
        "field": "mobility_support_modes",
        "equals": "others"
      }
    },
    {
      "name": "mobility_walking_aid_level",
      "label": "",
      "type": "radio",
      "options": [
        "Independent",
        "Minimal assistance",
        "Moderate assistance",
        "Maximum assistance",
        "Total Dependent"
      ],
      "showIf": {
        "field": "mobility_support_modes",
        "equals": "walking_aids",
        "and": {
          "field": "mobility_aid_type",
          "oneOf": [
            "Walking stick/cane",
            "Elbow crutches (single/bilateral)",
            "Axillary crutches (single/bilateral)",
            "Platform crutches (single/bilateral)",
            "Quadripod",
            "Walking frame",
            "Wheeled walker",
            "Rollator/reverse rollator"
          ]
        }
      }
    },
    {
      "name": "mobility_wheelchair_level",
      "label": "",
      "type": "radio",
      "options": [
        "Independent",
        "Minimal assistance",
        "Moderate assistance",
        "Maximum assistance",
        "Total Dependent"
      ],
      "showIf": {
        "field": "mobility_support_modes",
        "equals": "wheelchair",
        "and": {
          "field": "mobility_wheelchair_type",
          "oneOf": [
            "Manual wheelchair",
            "Electric wheelchair"
          ]
        }
      }
    },
    {
      "name": "mobility_orthosis_prosthesis",
      "label": "Orthosis / Prosthesis",
      "type": "radio",
      "options": [
        "Orthosis",
        "Prosthesis"
      ],
      "showIf": {
        "field": "mobility_present",
        "oneOf": [
          "Ambulant",
          "Non-Ambulant"
        ]
      }
    },
    {
      "name": "mobility_orthosis_type",
      "label": "Orthosis",
      "type": "radio",
      "options": [
        "AFO",
        "KAFO",
        "HKAFO",
        "Brace",
        "Others"
      ],
      "showIf": {
        "field": "mobility_orthosis_prosthesis",
        "equals": "Orthosis"
      }
    },
    {
      "name": "mobility_orthosis_brace",
      "label": "Brace (Specify)",
      "type": "input",
      "showIf": {
        "field": "mobility_orthosis_type",
        "equals": "Brace"
      }
    },
    {
      "name": "mobility_orthosis_other",
      "label": "Others (Specify)",
      "type": "input",
      "showIf": {
        "field": "mobility_orthosis_type",
        "equals": "Others"
      }
    },
    {
      "name": "mobility_prosthesis_type",
      "label": "Prosthesis",
      "type": "radio",
      "options": [
        "Below knee prosthesis",
        "Above knee prosthesis",
        "Others"
      ],
      "showIf": {
        "field": "mobility_orthosis_prosthesis",
        "equals": "Prosthesis"
      }
    },
    {
      "name": "mobility_prosthesis_other",
      "label": "Others (Specify)",
      "type": "input",
      "showIf": {
        "field": "mobility_prosthesis_type",
        "equals": "Others"
      }
    },
    {
      "name": "mobility_assistance_level_orthosis",
      "label": "Assistance Level",
      "type": "radio",
      "options": [
        "Independent",
        "Minimal assistance",
        "Moderate assistance",
        "Maximum assistance",
        "Total Dependent"
      ],
      "showIf": {
        "field": "mobility_orthosis_type",
        "oneOf": [
          "AFO",
          "KAFO",
          "HKAFO"
        ]
      }
    },
    {
      "name": "mobility_assistance_level_prosthesis",
      "label": "Assistance Level",
      "type": "radio",
      "options": [
        "Independent",
        "Minimal assistance",
        "Moderate assistance",
        "Maximum assistance",
        "Total Dependent"
      ],
      "showIf": {
        "field": "mobility_prosthesis_type",
        "oneOf": [
          "Below knee prosthesis",
          "Above knee prosthesis"
        ]
      }
    }
  ]
}