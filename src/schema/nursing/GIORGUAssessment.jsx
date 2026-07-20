  const GI_GU_SCHEMA = {
  "title": "Focussed Assessment for GI and GU",
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Bowel Pattern"
        },
        {
          "name": "gigu_last_bm",
          "label": "Last bowel movement",
          "type": "radio",
          "options": [
            {
              "label": "Today",
              "value": "today"
            },
            {
              "label": "Yesterday",
              "value": "yesterday"
            },
            {
              "label": ">48 hours ago",
              "value": "over_48h"
            },
            {
              "label": "Unknown",
              "value": "unknown"
            }
          ]
        },
        {
          "name": "gigu_usual_frequency",
          "label": "Usual frequency",
          "type": "radio",
          "options": [
            {
              "label": "Daily",
              "value": "daily"
            },
            {
              "label": "Every 2–3 days",
              "value": "2_3_days"
            },
            {
              "label": "<3/week",
              "value": "less_3_week"
            },
            {
              "label": "Variable",
              "value": "variable"
            }
          ]
        },
        {
          "name": "gigu_stool_consistency",
          "label": "Stool consistency",
          "type": "radio",
          "options": [
            {
              "label": "Formed",
              "value": "formed"
            },
            {
              "label": "Hard",
              "value": "hard"
            },
            {
              "label": "Loose",
              "value": "loose"
            },
            {
              "label": "Watery",
              "value": "watery"
            },
            {
              "label": "Pellets",
              "value": "pellets"
            },
            {
              "label": "Unknown",
              "value": "unknown"
            }
          ]
        },
        {
          "name": "gigu_stool_color",
          "label": "Stool color",
          "type": "radio",
          "options": [
            {
              "label": "Brown",
              "value": "brown"
            },
            {
              "label": "Black/tarry",
              "value": "black_tarry"
            },
            {
              "label": "Red/bloody",
              "value": "red_bloody"
            },
            {
              "label": "Pale/clay",
              "value": "pale_clay"
            },
            {
              "label": "Green",
              "value": "green"
            }
          ]
        },
        {
          "name": "gigu_flatus",
          "label": "Flatus",
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
        }
      ]
    },
    {
      "title": "OBJECTIVE (Clinician Observed)",
      "fields": [
        {
          "name": "gigu_general_appearance",
          "label": "General Appearance",
          "type": "radio",
          "options": [
            {
              "label": "Comfortable",
              "value": "comfortable"
            },
            {
              "label": "Distressed",
              "value": "distressed"
            },
            {
              "label": "Guarding abdomen",
              "value": "guarding"
            },
            {
              "label": "Diaphoretic",
              "value": "diaphoretic"
            },
            {
              "label": "Dehydrated appearance",
              "value": "dehydrated"
            },
            {
              "label": "None",
              "value": "none"
            }
          ]
        },
        {
          "name": "gigu_hydration",
          "label": "Hydration Indicators",
          "type": "radio",
          "labelAbove": true,
          "options": [
            {
              "label": "Moist mucous membranes",
              "value": "moist_mucous"
            },
            {
              "label": "Dry mucous membranes",
              "value": "dry_mucous"
            },
            {
              "label": "Normal skin turgor",
              "value": "normal_turgor"
            },
            {
              "label": "Poor skin turgor",
              "value": "poor_turgor"
            },
            {
              "label": "Sunken eyes",
              "value": "sunken_eyes"
            },
            {
              "label": "None",
              "value": "none"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Abdominal Inspection"
        },
        {
          "name": "gigu_contour",
          "label": "Contour",
          "type": "radio",
          "options": [
            {
              "label": "Flat",
              "value": "flat"
            },
            {
              "label": "Rounded",
              "value": "rounded"
            },
            {
              "label": "Protuberant",
              "value": "protuberant"
            },
            {
              "label": "Scaphoid",
              "value": "scaphoid"
            }
          ]
        },
        {
          "name": "gigu_symmetry",
          "label": "Symmetry",
          "type": "radio",
          "options": [
            {
              "label": "Symmetric",
              "value": "symmetric"
            },
            {
              "label": "Asymmetric",
              "value": "asymmetric"
            }
          ]
        },
        {
          "name": "gigu_skin",
          "label": "Skin",
          "type": "radio",
          "options": [
            {
              "label": "Intact",
              "value": "intact"
            },
            {
              "label": "Scars",
              "value": "scars"
            },
            {
              "label": "Striae",
              "value": "striae"
            },
            {
              "label": "Lesions",
              "value": "lesions"
            },
            {
              "label": "Bruising",
              "value": "bruising"
            }
          ]
        },
        {
          "name": "gigu_umbilicus",
          "label": "Umbilicus",
          "type": "radio",
          "options": [
            {
              "label": "Midline/inverted",
              "value": "midline"
            },
            {
              "label": "Everted",
              "value": "everted"
            },
            {
              "label": "Deviated",
              "value": "deviated"
            }
          ]
        },
        {
          "name": "gigu_visible_movement",
          "label": "Visible movement",
          "type": "radio",
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "Pulsations",
              "value": "pulsations"
            },
            {
              "label": "Visible peristalsis",
              "value": "peristalsis"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Auscultation"
        },
        {
          "name": "gigu_bowel_sounds",
          "label": "Bowel sounds",
          "type": "radio",
          "options": [
            {
              "label": "Normoactive",
              "value": "normoactive"
            },
            {
              "label": "Hypoactive",
              "value": "hypoactive"
            },
            {
              "label": "Hyperactive",
              "value": "hyperactive"
            },
            {
              "label": "Absent",
              "value": "absent"
            }
          ]
        },
        {
          "name": "gigu_vascular_sounds",
          "label": "Vascular sounds",
          "type": "radio",
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "Bruit present",
              "value": "bruit"
            }
          ]
        },
        {
          "name": "gigu_vascular_location",
          "label": "Bruit location",
          "type": "input",
          "showIf": {
            "field": "gigu_vascular_sounds",
            "equals": "bruit"
          }
        },
        {
          "type": "subheading",
          "label": "Palpation"
        },
        {
          "name": "gigu_tenderness",
          "label": "Tenderness",
          "type": "radio",
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "Localized",
              "value": "localized"
            },
            {
              "label": "Generalized",
              "value": "generalized"
            }
          ]
        },
        {
          "name": "gigu_tenderness_location",
          "label": "Location",
          "type": "input",
          "showIf": {
            "field": "gigu_tenderness",
            "equals": "localized"
          }
        },
        {
          "name": "gigu_guarding",
          "label": "Guarding",
          "type": "radio",
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "Voluntary",
              "value": "voluntary"
            },
            {
              "label": "Involuntary",
              "value": "involuntary"
            }
          ]
        },
        {
          "name": "gigu_rigidity",
          "label": "Rigidity",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        },
        {
          "name": "gigu_rebound",
          "label": "Rebound tenderness",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        },
        {
          "name": "gigu_masses",
          "label": "Masses",
          "type": "radio",
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "Present",
              "value": "present"
            }
          ]
        },
        {
          "name": "gigu_masses_location",
          "label": "Location/size",
          "type": "input",
          "showIf": {
            "field": "gigu_masses",
            "equals": "present"
          }
        },
        {
          "name": "gigu_bladder_distention",
          "label": "Bladder distention",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Percussion (If performed)"
        },
        {
          "name": "gigu_percussion",
          "label": "Percussion",
          "type": "radio",
          "options": [
            {
              "label": "Tympany",
              "value": "tympany"
            },
            {
              "label": "Dullness",
              "value": "dullness"
            },
            {
              "label": "CVA tenderness absent",
              "value": "cva_absent"
            },
            {
              "label": "CVA tenderness present",
              "value": "cva_present"
            }
          ]
        },
        {
          "name": "gigu_cva_side",
          "label": "CVA tenderness side",
          "type": "checkbox-group",
          "showIf": {
            "field": "gigu_percussion",
            "equals": "cva_present"
          },
          "options": [
            {
              "label": "Right",
              "value": "right"
            },
            {
              "label": "Left",
              "value": "left"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Urinary Output / Urine Characteristics"
        },
        {
          "name": "gigu_voiding_method",
          "label": "Voiding method",
          "type": "radio",
          "labelAbove": true,
          "options": [
            {
              "label": "Spontaneous",
              "value": "spontaneous"
            },
            {
              "label": "External catheter",
              "value": "external_cath"
            },
            {
              "label": "Indwelling catheter",
              "value": "indwelling"
            },
            {
              "label": "Intermittent catheter",
              "value": "intermittent"
            },
            {
              "label": "Urostomy",
              "value": "urostomy"
            }
          ]
        },
        {
          "name": "gigu_urine_color",
          "label": "Urine color",
          "type": "radio",
          "options": [
            {
              "label": "Clear/pale yellow",
              "value": "clear"
            },
            {
              "label": "Dark amber",
              "value": "dark_amber"
            },
            {
              "label": "Cloudy",
              "value": "cloudy"
            },
            {
              "label": "Bloody",
              "value": "bloody"
            },
            {
              "label": "Tea-colored",
              "value": "tea_colored"
            }
          ]
        },
        {
          "name": "gigu_urine_odor",
          "label": "Urine odor",
          "type": "radio",
          "options": [
            {
              "label": "Normal",
              "value": "normal"
            },
            {
              "label": "Foul",
              "value": "foul"
            }
          ]
        },
        {
          "name": "gigu_urine_amount",
          "label": "Urine amount",
          "type": "radio",
          "options": [
            {
              "label": "Adequate",
              "value": "adequate"
            },
            {
              "label": "Oliguria",
              "value": "oliguria"
            },
            {
              "label": "Anuria",
              "value": "anuria"
            },
            {
              "label": "Polyuria",
              "value": "polyuria"
            }
          ]
        },
        {
          "name": "gigu_output_last_shift",
          "label": "Output (last shift) (mL)",
          "type": "input",
          "placeholder": "mL"
        }
      ]
    }
  ]
}