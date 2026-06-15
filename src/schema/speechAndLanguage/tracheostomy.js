const SCHEMA_TRACHEOSTOMY = {
  "sections": [
    {
      "title": "Thacheostomy",
      "fields": [
        {
          "type": "row",
          "fields": [
            {
              "type": "subheading",
              "label": "Suction needs frequency (airway clearance function)"
            }
          ]
        },
        {
          "name": "suction_required",
          "label": "Suction Need",
          "type": "radio",
          "options": [
            {
              "label": "Yes",
              "value": "yes"
            },
            {
              "label": "No",
              "value": "no"
            }
          ],
          "direction": "row"
        },
        {
          "name": "suction_frequency",
          "label": "Frequency (every ___ hours)",
          "type": "textarea",
          "showIf": {
            "field": "suction_required",
            "equals": "yes"
          }
        },
        {
          "name": "secretion_amount",
          "label": "Secretion amount",
          "type": "radio",
          "options": [
            {
              "label": "Small",
              "value": "small"
            },
            {
              "label": "Moderate",
              "value": "moderate"
            },
            {
              "label": "Large",
              "value": "large"
            }
          ],
          "showIf": {
            "field": "suction_required",
            "equals": "yes"
          }
        },
        {
          "name": "secretion_colour",
          "label": "Colour",
          "type": "radio",
          "options": [
            {
              "label": "Whitish",
              "value": "whitish"
            },
            {
              "label": "Yellowish",
              "value": "yellowish"
            },
            {
              "label": "Greenish",
              "value": "greenish"
            },
            {
              "label": "Blood-tinged",
              "value": "blood-tinged"
            }
          ],
          "showIf": {
            "field": "suction_required",
            "equals": "yes"
          }
        },
        {
          "name": "secretion_consistency",
          "label": "Consistency",
          "type": "radio",
          "options": [
            {
              "label": "Thick",
              "value": "thick"
            },
            {
              "label": "Loose",
              "value": "loose"
            }
          ],
          "showIf": {
            "field": "suction_required",
            "equals": "yes"
          }
        },
        {
          "type": "subheading",
          "label": "Tracheostomy Status"
        },
        {
          "name": "trach_date",
          "label": "Date of tracheostomy insertion",
          "type": "date"
        },
        {
          "name": "trach_change_date",
          "label": "Last tracheostomy change",
          "type": "date"
        },
        {
          "name": "trach_size",
          "label": "Size (mm)",
          "type": "radio",
          "options": [
            {
              "label": "5.0",
              "value": "5.0"
            },
            {
              "label": "6.0",
              "value": "6.0"
            },
            {
              "label": "6.5",
              "value": "6.5"
            },
            {
              "label": "7.0",
              "value": "7.0"
            },
            {
              "label": "7.5",
              "value": "7.5"
            },
            {
              "label": "8.0",
              "value": "8.0"
            },
            {
              "label": "8.5",
              "value": "8.5"
            },
            {
              "label": "9.0",
              "value": "9.0"
            }
          ]
        },
        {
          "name": "trach_type",
          "label": "Type",
          "type": "radio",
          "options": [
            {
              "label": "Fenestrated",
              "value": "fenestrated"
            },
            {
              "label": "Non-fenestrated",
              "value": "non-fenestrated"
            }
          ]
        },
        {
          "name": "trach_lumen",
          "label": "Lumen",
          "type": "radio",
          "options": [
            {
              "label": "Single-lumen",
              "value": "single-lumen"
            },
            {
              "label": "Double-lumen",
              "value": "double-lumen"
            }
          ]
        },
        {
          "name": "trach_brand",
          "label": "Brand",
          "type": "radio",
          "options": [
            {
              "label": "Portex",
              "value": "portex"
            },
            {
              "label": "Rusch",
              "value": "rusch"
            },
            {
              "label": "Shiley",
              "value": "shiley"
            },
            {
              "label": "Other",
              "value": "other"
            }
          ]
        },
        {
          "name": "trach_brand_other",
          "label": "Other (specify)",
          "type": "input",
          "showIf": {
            "field": "trach_brand",
            "equals": "Other"
          }
        },
        {
          "name": "cuff_status",
          "label": "Cuff status",
          "type": "radio",
          "options": [
            {
              "label": "Inflated",
              "value": "inflated"
            },
            {
              "label": "Deflated",
              "value": "deflated"
            },
            {
              "label": "Cuffless",
              "value": "cuffless"
            }
          ]
        },
        {
          "name": "inner_cannula",
          "label": "Inner cannula",
          "type": "radio",
          "options": [
            {
              "label": "Present",
              "value": "present"
            },
            {
              "label": "Absent",
              "value": "absent"
            }
          ]
        },
        {
          "name": "inner_cannula_type",
          "label": "If present",
          "type": "radio",
          "options": [
            {
              "label": "Fenestrated",
              "value": "fenestrated"
            },
            {
              "label": "Non-fenestrated",
              "value": "non-fenestrated"
            }
          ],
          "showIf": {
            "field": "inner_cannula",
            "equals": "present"
          }
        },
        {
          "name": "ventilation",
          "label": "Ventilation",
          "type": "radio",
          "options": [
            {
              "label": "Room Air",
              "value": "room_air"
            },
            {
              "label": "O2 via Trache Mask",
              "value": "trache_mask"
            },
            {
              "label": "O2 via Swedish Nose",
              "value": "swedish_nose"
            },
            {
              "label": "N/A",
              "value": "n/a"
            }
          ]
        },
        {
          "name": "flow_rate",
          "label": "Flow rate (L of O2)",
          "type": "input"
        },
        {
          "name": "humidification",
          "label": "Humidification method",
          "type": "radio",
          "options": [
            {
              "label": "HME",
              "value": "hME"
            },
            {
              "label": "Nebuliser",
              "value": "nebuliser"
            },
            {
              "label": "Heated Humidifier",
              "value": "heated_humidifier"
            },
            {
              "label": "None",
              "value": "none"
            }
          ]
        }
      ]
    }
  ]
}

const SCHEMA_OBJECTIVE_TRACHEOSTOMY = {
  "sections": [
    {
      "title": "Thacheostomy",
      "fields": [
        {
          "type": "row",
          "fields": [
            {
              "type": "subheading",
              "label": "Suction needs frequency (airway clearance function)"
            }
          ]
        },
        {
          "name": "suction_required",
          "label": "Suction Need",
          "type": "radio",
          "options": [
            {
              "label": "Yes",
              "value": "yes"
            },
            {
              "label": "No",
              "value": "no"
            }
          ],
          "direction": "row"
        },
        {
          "name": "suction_frequency",
          "label": "Frequency (every ___ hours)",
          "type": "textarea",
          "showIf": {
            "field": "suction_required",
            "equals": "yes"
          }
        },
        {
          "name": "secretion_amount",
          "label": "Secretion amount",
          "type": "radio",
          "options": [
            {
              "label": "Small",
              "value": "small"
            },
            {
              "label": "Moderate",
              "value": "moderate"
            },
            {
              "label": "Large",
              "value": "large"
            }
          ],
          "showIf": {
            "field": "suction_required",
            "equals": "yes"
          }
        },
        {
          "name": "secretion_colour",
          "label": "Colour",
          "type": "radio",
          "options": [
            {
              "label": "Whitish",
              "value": "whitish"
            },
            {
              "label": "Yellowish",
              "value": "yellowish"
            },
            {
              "label": "Greenish",
              "value": "greenish"
            },
            {
              "label": "Blood-tinged",
              "value": "blood-tinged"
            }
          ],
          "showIf": {
            "field": "suction_required",
            "equals": "yes"
          }
        },
        {
          "name": "secretion_consistency",
          "label": "Consistency",
          "type": "radio",
          "options": [
            {
              "label": "Thick",
              "value": "thick"
            },
            {
              "label": "Loose",
              "value": "loose"
            }
          ],
          "showIf": {
            "field": "suction_required",
            "equals": "yes"
          }
        },
        {
          "type": "subheading",
          "label": "Tracheostomy Status"
        },
        {
          "name": "trach_date",
          "label": "Date of tracheostomy insertion",
          "type": "date"
        },
        {
          "name": "trach_change_date",
          "label": "Last tracheostomy change",
          "type": "date"
        },
        {
          "name": "trach_size",
          "label": "Size (mm)",
          "type": "radio",
          "options": [
            {
              "label": "5.0",
              "value": "5.0"
            },
            {
              "label": "6.0",
              "value": "6.0"
            },
            {
              "label": "6.5",
              "value": "6.5"
            },
            {
              "label": "7.0",
              "value": "7.0"
            },
            {
              "label": "7.5",
              "value": "7.5"
            },
            {
              "label": "8.0",
              "value": "8.0"
            },
            {
              "label": "8.5",
              "value": "8.5"
            },
            {
              "label": "9.0",
              "value": "9.0"
            }
          ]
        },
        {
          "name": "trach_type",
          "label": "Type",
          "type": "radio",
          "options": [
            {
              "label": "Fenestrated",
              "value": "fenestrated"
            },
            {
              "label": "Non-fenestrated",
              "value": "non-fenestrated"
            }
          ]
        },
        {
          "name": "trach_lumen",
          "label": "Lumen",
          "type": "radio",
          "options": [
            {
              "label": "Single-lumen",
              "value": "single-lumen"
            },
            {
              "label": "Double-lumen",
              "value": "double-lumen"
            }
          ]
        },
        {
          "name": "trach_brand",
          "label": "Brand",
          "type": "radio",
          "options": [
            {
              "label": "Portex",
              "value": "portex"
            },
            {
              "label": "Rusch",
              "value": "rusch"
            },
            {
              "label": "Shiley",
              "value": "shiley"
            },
            {
              "label": "Other",
              "value": "other"
            }
          ]
        },
        {
          "name": "trach_brand_other",
          "label": "Other (specify)",
          "type": "input",
          "showIf": {
            "field": "trach_brand",
            "equals": "other"
          }
        },
        {
          "name": "cuff_status",
          "label": "Cuff status",
          "type": "radio",
          "options": [
            {
              "label": "Inflated",
              "value": "inflated"
            },
            {
              "label": "Deflated",
              "value": "deflated"
            },
            {
              "label": "Cuffless",
              "value": "cuffless"
            }
          ]
        },
        {
          "name": "inner_cannula",
          "label": "Inner cannula",
          "type": "radio",
          "options": [
            {
              "label": "Present",
              "value": "present"
            },
            {
              "label": "Absent",
              "value": "absent"
            }
          ]
        },
        {
          "name": "inner_cannula_type",
          "label": "If present",
          "type": "radio",
          "options": [
            {
              "label": "Fenestrated",
              "value": "fenestrated"
            },
            {
              "label": "Non-fenestrated",
              "value": "non-fenestrated"
            }
          ],
          "showIf": {
            "field": "inner_cannula",
            "equals": "present"
          }
        },
        {
          "name": "ventilation",
          "label": "Ventilation",
          "type": "radio",
          "options": [
            {
              "label": "Room Air",
              "value": "room_air"
            },
            {
              "label": "O2 via Trache Mask",
              "value": "trache_mask"
            },
            {
              "label": "O2 via Swedish Nose",
              "value": "swedish_nose"
            },
            {
              "label": "N/A",
              "value": "n/a"
            }
          ]
        },
        {
          "name": "flow_rate",
          "label": "Flow rate (L of O2)",
          "type": "input"
        },
        {
          "name": "humidification",
          "label": "Humidification method",
          "type": "radio",
          "options": [
            "HME",
            "Nebuliser",
            "Heated humidifier",
            "None"
          ]
        }
      ]
    }
  ]
}
const SCHEMA_ASSESSMENT_TRACHEOSTOMY = {
  "form_name": "Tracheostomy Management",
  "sections": [
    {
      "section_name": "Tracheostomy",
      "fields": [
        {
          "type": "subheading",
          "label": "Clinical Impression"
        },
        {
          "name": "weaning_status",
          "label": "",
          "type": "radio",
          "labelAbove": true,
          "options": [
            {
              "label": "No difficulties observed during tracheostomy weaning. The patient is a suitable candidate to proceed with the tracheostomy weaning programme.",
              "value": "no_difficulty"
            },
            {
              "label": "The patient presents with poor tolerance to tracheostomy capping and currently requires full tracheostomy dependence.",
              "value": "poor_tolerance"
            }
          ]
        },
        {
          "name": "symptoms",
          "label": "Patient also exhibits",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Dysphonia",
              "value": "dysphonia"
            },
            {
              "label": "Dysphagia ",
              "value": "dysphagia"
            }
          ]
        },
        {
          "name": "remarks",
          "type": "textarea",
          "label": "Remarks",
          "placeholder": "Enter remarks..."
        },
        {
          "name": "clinical_interpretation",
          "label": "Clinical Interpretation",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Reduced physiological tolerance (desaturation, respiratory distress, ↑ work of breathing)",
              "value": "physio_reduced"
            },
            {
              "label": "Reduced tolerance to upper airway airflow (stridor, backpressure, noisy breathing)",
              "value": "airway_reduced"
            },
            {
              "label": "Inadequate secretion management / airway clearance",
              "value": "secretion_issue"
            },
            {
              "label": "Reduced phonation or voice quality during occlusion",
              "value": "phonation_issue"
            },
            {
              "label": "Behavioural / psychological factors limiting trial",
              "value": "behavioral"
            },
            {
              "label": "Other",
              "value": "other",
              "hasTextInput": true
            }
          ]
        },
        {
          "name": "clinical_interpretation_other",
          "label": "Other (specify)",
          "type": "textarea",
          "placeholder": "Enter details",
          "showIf": {
            "field": "clinical_interpretation",
            "includes": "other"
          }
        },
        {
          "name": "weaning_candidate",
          "label": "Candidate for tracheostomy weaning",
          "type": "radio",
          "options": [
            {
              "label": "Yes",
              "value": "yes"
            },
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Requires further evaluation (FEES / VFSS)",
              "value": "further_eval"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Tolerance level [based on monitoring]:"
        },
        {
          "name": "cuff_deflation",
          "label": "Cuff deflation",
          "type": "radio",
          "options": [
            {
              "label": "Tolerated",
              "value": "tolerated"
            },
            {
              "label": "Not tolerated",
              "value": "not_tolerated"
            },
            {
              "label": "N/A",
              "value": "na"
            }
          ]
        },
        {
          "name": "digital_occlusion",
          "label": "Digital occlusion",
          "type": "radio",
          "options": [
            {
              "label": "Tolerated",
              "value": "tolerated"
            },
            {
              "label": "Not tolerated",
              "value": "not_tolerated"
            },
            {
              "label": "N/A",
              "value": "na"
            }
          ]
        },
        {
          "name": "speaking_valve",
          "label": "Speaking valve",
          "type": "radio",
          "options": [
            {
              "label": "Tolerated",
              "value": "tolerated"
            },
            {
              "label": "Not tolerated",
              "value": "not_tolerated"
            },
            {
              "label": "N/A",
              "value": "na"
            }
          ]
        },
        {
          "name": "tolerance_capping",
          "label": "Capping trial",
          "type": "radio",
          "options": [
            {
              "label": "Tolerated",
              "value": "tolerated"
            },
            {
              "label": "Not tolerated",
              "value": "not_tolerated"
            },
            {
              "label": "N/A",
              "value": "na"
            }
          ]
        }
      ]
    }
  ]
}
const SCHEMA_PLAN_TRACHEOSTOMY = {
  "form_name": "Tracheostomy Weaning Recommendations",
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Tracheostomy Weaning Recommendations"
        },
        {
          "name": "capping_duration",
          "label": "Suggested capping duration (hours)",
          "type": "input"
        },
        {
          "name": "frequency",
          "label": "Frequency (times/day)",
          "type": "input"
        },
        {
          "name": "monitoring",
          "label": "Monitoring parameters",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Monitor SpO₂",
              "value": "spo2"
            },
            {
              "label": "Respiratory Rate",
              "value": "rr"
            },
            {
              "label": "Work of Breathing",
              "value": "wob"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Oral Care"
        },
        {
          "name": "oral_care_method",
          "label": "Method",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Brush teeth",
              "value": "brush_teeth"
            },
            {
              "label": "Gauze stick",
              "value": "gauze_stick"
            },
            {
              "label": "Gargle",
              "value": "gargle"
            }
          ]
        },
        {
          "name": "oral_care_frequency",
          "label": "Frequency",
          "type": "checkbox-group",
          "options": [
            {
              "label": "3–4x/day",
              "value": "3_4_day"
            },
            {
              "label": "Before meals",
              "value": "before_meals"
            },
            {
              "label": "After meals",
              "value": "after_meals"
            },
            {
              "label": "Before oral trials",
              "value": "before_trials"
            },
            {
              "label": "After oral trials",
              "value": "after_trials"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Therapy"
        },
        {
          "name": "therapy",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Observation of breathing functions",
              "value": "breathing_observation"
            },
            {
              "label": "Voice facilitation intervention",
              "value": "voice_facilitation"
            },
            {
              "label": "Assessment of swallowing",
              "value": "swallowing_assessment"
            },
            {
              "label": "Training about swallowing / airway clearance",
              "value": "swallowing_training"
            },
            {
              "label": "Advising about swallowing / airway management",
              "value": "airway_advising"
            }
          ]
        },
        {
          "name": "exercises",
          "label": "Exercises",
          "type": "textarea"
        },
        {
          "type": "subheading",
          "label": "Other Management"
        },
        {
          "name": "other_management",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Referral for medical management",
              "value": "referral"
            },
            {
              "label": "Further Assessment",
              "value": "further"
            }
          ]
        },
        {
          "name": "further_assessment",
          "label": "Further Assessment",
          "type": "checkbox-group",
          "showIf": {
            "field": "other_management",
            "includes": "further"
          },
          "options": [
            {
              "label": "Video endoscopic evaluation of swallowing",
              "value": "fees"
            },
            {
              "label": "Voice facilitation intervention",
              "value": "advanced_voice"
            }
          ]
        }
      ]
    }
  ]
}