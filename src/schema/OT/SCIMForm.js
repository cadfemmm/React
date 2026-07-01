const SCHEMA = {
  "title": "SCIM – Spinal Cord Independence Measure",
  "fields": [
    {
      "type": "accordion",
      "name": "scim_self_care",
      "label": "Self-Care (Items 1–4)",
      "defaultOpen": true,
      "children": [
        {
          "type": "radio",
          "name": "scim_feeding",
          "label": "1. Feeding",
          "labelAbove": true,
          "options": [
            {
              "label": "0 – Needs parenteral/gastrostomy/fully assisted oral feeding",
              "value": "0"
            },
            {
              "label": "1 – Needs partial assistance for eating/drinking or adaptive devices",
              "value": "1"
            },
            {
              "label": "2 – Eats independently; needs adaptive devices or assistance only for cutting/pouring/opening",
              "value": "2"
            },
            {
              "label": "3 – Eats and drinks independently; no assistance or adaptive devices",
              "value": "3"
            }
          ]
        },
        {
          "type": "radio",
          "name": "scim_bathing_upper",
          "label": "2A. Bathing – Upper Body",
          "labelAbove": true,
          "options": [
            {
              "label": "0 – Requires total assistance",
              "value": "0"
            },
            {
              "label": "1 – Requires partial assistance",
              "value": "1"
            },
            {
              "label": "2 – Washes independently with adaptive devices or specific setting",
              "value": "2"
            },
            {
              "label": "3 – Washes independently; no adaptive devices or specific setting",
              "value": "3"
            }
          ]
        },
        {
          "type": "radio",
          "name": "scim_bathing_lower",
          "label": "2B. Bathing – Lower Body",
          "labelAbove": true,
          "options": [
            {
              "label": "0 – Requires total assistance",
              "value": "0"
            },
            {
              "label": "1 – Requires partial assistance",
              "value": "1"
            },
            {
              "label": "2 – Washes independently with adaptive devices or specific setting",
              "value": "2"
            },
            {
              "label": "3 – Washes independently; no adaptive devices or specific setting",
              "value": "3"
            }
          ]
        },
        {
          "type": "radio",
          "name": "scim_dressing_upper",
          "label": "3A. Dressing – Upper Body",
          "labelAbove": true,
          "options": [
            {
              "label": "0 – Requires total assistance",
              "value": "0"
            },
            {
              "label": "1 – Requires partial assistance with cwobzl",
              "value": "1"
            },
            {
              "label": "2 – Independent with cwobzl; requires adss",
              "value": "2"
            },
            {
              "label": "3 – Independent with cwobzl; no adss; needs assistance only for bzl",
              "value": "3"
            },
            {
              "label": "4 – Dresses any cloth independently; no adaptive devices or specific setting",
              "value": "4"
            }
          ]
        },
        {
          "type": "radio",
          "name": "scim_dressing_lower",
          "label": "3B. Dressing – Lower Body",
          "labelAbove": true,
          "options": [
            {
              "label": "0 – Requires total assistance",
              "value": "0"
            },
            {
              "label": "1 – Requires partial assistance with cwobzl",
              "value": "1"
            },
            {
              "label": "2 – Independent with cwobzl; requires adss",
              "value": "2"
            },
            {
              "label": "3 – Independent with cwobzl without adss; needs assistance only for bzl",
              "value": "3"
            },
            {
              "label": "4 – Dresses any cloth independently; no adaptive devices or specific setting",
              "value": "4"
            }
          ]
        },
        {
          "type": "radio",
          "name": "scim_grooming",
          "label": "4. Grooming",
          "labelAbove": true,
          "options": [
            {
              "label": "0 – Requires total assistance",
              "value": "0"
            },
            {
              "label": "1 – Requires partial assistance",
              "value": "1"
            },
            {
              "label": "2 – Grooms independently with adaptive devices",
              "value": "2"
            },
            {
              "label": "3 – Grooms independently without adaptive devices",
              "value": "3"
            }
          ]
        },
        {
          "name": "_sc1",
          "type": "custom"
        }
      ]
    },
    {
      "type": "accordion",
      "name": "scim_resp",
      "label": "Respiration and Sphincter Management (Items 5–8)",
      "defaultOpen": false,
      "children": [
        {
          "type": "radio",
          "name": "scim_respiration",
          "label": "5. Respiration",
          "labelAbove": true,
          "options": [
            {
              "label": "0 – Requires TT and permanent or intermittent assisted ventilation (IAV)",
              "value": "0"
            },
            {
              "label": "2 – Breathes independently with TT; requires oxygen, much assistance in coughing or TT management",
              "value": "2"
            },
            {
              "label": "4 – Breathes independently with TT; requires little assistance in coughing or TT management",
              "value": "4"
            },
            {
              "label": "6 – Breathes independently without TT; requires oxygen, much assistance in coughing, mask or IAV",
              "value": "6"
            },
            {
              "label": "8 – Breathes independently without TT; requires little assistance or stimulation for coughing",
              "value": "8"
            },
            {
              "label": "10 – Breathes independently without assistance or device",
              "value": "10"
            }
          ]
        },
        {
          "type": "radio",
          "name": "scim_bladder",
          "label": "6. Sphincter Management – Bladder",
          "labelAbove": true,
          "options": [
            {
              "label": "0 – Indwelling catheter",
              "value": "0"
            },
            {
              "label": "3 – RUV > 100cc; no regular catheterization or assisted intermittent catheterization",
              "value": "3"
            },
            {
              "label": "6 – RUV < 100cc or intermittent self-catheterization; needs assistance for applying drainage instrument",
              "value": "6"
            },
            {
              "label": "9 – Intermittent self-catheterization; uses external drainage instrument; no assistance for applying",
              "value": "9"
            },
            {
              "label": "11 – Intermittent self-catheterization; continent between catheterizations; no external drainage instrument",
              "value": "11"
            },
            {
              "label": "13 – RUV <100cc; needs only external urine drainage; no assistance required",
              "value": "13"
            },
            {
              "label": "15 – RUV <100cc; continent; does not use external drainage instrument",
              "value": "15"
            }
          ]
        },
        {
          "type": "radio",
          "name": "scim_bowel",
          "label": "7. Sphincter Management – Bowel",
          "labelAbove": true,
          "options": [
            {
              "label": "0 – Irregular timing or very low frequency (< once in 3 days) of bowel movements",
              "value": "0"
            },
            {
              "label": "5 – Regular timing, but requires assistance; rare accidents (< twice a month)",
              "value": "5"
            },
            {
              "label": "8 – Regular bowel movements, without assistance; rare accidents (< twice a month)",
              "value": "8"
            },
            {
              "label": "10 – Regular bowel movements, without assistance; no accidents",
              "value": "10"
            }
          ]
        },
        {
          "type": "radio",
          "name": "scim_toilet",
          "label": "8. Use of Toilet",
          "labelAbove": true,
          "options": [
            {
              "label": "0 – Requires total assistance",
              "value": "0"
            },
            {
              "label": "1 – Requires partial assistance; does not clean self",
              "value": "1"
            },
            {
              "label": "2 – Requires partial assistance; cleans self independently",
              "value": "2"
            },
            {
              "label": "4 – Uses toilet independently but needs adaptive devices or special setting",
              "value": "4"
            },
            {
              "label": "5 – Uses toilet independently; no adaptive devices or special setting",
              "value": "5"
            }
          ]
        },
        {
          "name": "_sc2",
          "type": "custom"
        }
      ]
    },
    {
      "type": "accordion",
      "name": "scim_mob_room",
      "label": "Mobility – Room and Toilet (Items 9–11)",
      "defaultOpen": false,
      "children": [
        {
          "type": "radio",
          "name": "scim_bed_mobility",
          "label": "9. Mobility in Bed and Action to Prevent Pressure Sores",
          "labelAbove": true,
          "options": [
            {
              "label": "0 – Needs assistance in all activities",
              "value": "0"
            },
            {
              "label": "2 – Performs one of the activities without assistance",
              "value": "2"
            },
            {
              "label": "4 – Performs two or three of the activities without assistance",
              "value": "4"
            },
            {
              "label": "6 – Performs all bed mobility and pressure release activities independently",
              "value": "6"
            }
          ]
        },
        {
          "type": "radio",
          "name": "scim_transfer_bed_wc",
          "label": "10. Transfers: Bed–Wheelchair",
          "labelAbove": true,
          "options": [
            {
              "label": "0 – Requires total assistance",
              "value": "0"
            },
            {
              "label": "1 – Needs partial assistance and/or supervision and/or adaptive devices",
              "value": "1"
            },
            {
              "label": "2 – Independent (or does not require wheelchair)",
              "value": "2"
            }
          ]
        },
        {
          "type": "radio",
          "name": "scim_transfer_wc_toilet",
          "label": "11. Transfers: Wheelchair–Toilet–Tub",
          "labelAbove": true,
          "options": [
            {
              "label": "0 – Requires total assistance",
              "value": "0"
            },
            {
              "label": "1 – Needs partial assistance and/or supervision and/or adaptive devices",
              "value": "1"
            },
            {
              "label": "2 – Independent (or does not require wheelchair)",
              "value": "2"
            }
          ]
        },
        {
          "name": "_sc3",
          "type": "custom"
        }
      ]
    },
    {
      "type": "accordion",
      "name": "scim_mob_outdoor",
      "label": "Mobility – Indoors and Outdoors (Items 12–17)",
      "defaultOpen": false,
      "children": [
        {
          "type": "radio",
          "name": "scim_mob_indoors",
          "label": "12. Mobility Indoors",
          "labelAbove": true,
          "options": [
            {
              "label": "0 – Requires total assistance",
              "value": "0"
            },
            {
              "label": "1 – Needs electric wheelchair or partial assistance to operate manual wheelchair",
              "value": "1"
            },
            {
              "label": "2 – Moves independently in manual wheelchair",
              "value": "2"
            },
            {
              "label": "3 – Requires supervision while walking (with or without devices)",
              "value": "3"
            },
            {
              "label": "4 – Walks with a walking frame or crutches (swing)",
              "value": "4"
            },
            {
              "label": "5 – Walks with crutches or two canes (reciprocal walking)",
              "value": "5"
            },
            {
              "label": "6 – Walks with one cane",
              "value": "6"
            },
            {
              "label": "7 – Needs leg orthosis only",
              "value": "7"
            },
            {
              "label": "8 – Walks without walking aids",
              "value": "8"
            }
          ]
        },
        {
          "type": "radio",
          "name": "scim_mob_moderate",
          "label": "13. Mobility for Moderate Distances (10–100 m)",
          "labelAbove": true,
          "options": [
            {
              "label": "0 – Requires total assistance",
              "value": "0"
            },
            {
              "label": "1 – Needs electric wheelchair or partial assistance to operate manual wheelchair",
              "value": "1"
            },
            {
              "label": "2 – Moves independently in manual wheelchair",
              "value": "2"
            },
            {
              "label": "3 – Requires supervision while walking (with or without devices)",
              "value": "3"
            },
            {
              "label": "4 – Walks with a walking frame or crutches (swing)",
              "value": "4"
            },
            {
              "label": "5 – Walks with crutches or two canes (reciprocal walking)",
              "value": "5"
            },
            {
              "label": "6 – Walks with one cane",
              "value": "6"
            },
            {
              "label": "7 – Needs leg orthosis only",
              "value": "7"
            },
            {
              "label": "8 – Walks without walking aids",
              "value": "8"
            }
          ]
        },
        {
          "type": "radio",
          "name": "scim_mob_outdoors",
          "label": "14. Mobility Outdoors (> 100 m)",
          "labelAbove": true,
          "options": [
            {
              "label": "0 – Requires total assistance",
              "value": "0"
            },
            {
              "label": "1 – Needs electric wheelchair or partial assistance to operate manual wheelchair",
              "value": "1"
            },
            {
              "label": "2 – Moves independently in manual wheelchair",
              "value": "2"
            },
            {
              "label": "3 – Requires supervision while walking (with or without devices)",
              "value": "3"
            },
            {
              "label": "4 – Walks with a walking frame or crutches (swing)",
              "value": "4"
            },
            {
              "label": "5 – Walks with crutches or two canes (reciprocal walking)",
              "value": "5"
            },
            {
              "label": "6 – Walks with one cane",
              "value": "6"
            },
            {
              "label": "7 – Needs leg orthosis only",
              "value": "7"
            },
            {
              "label": "8 – Walks without walking aids",
              "value": "8"
            }
          ]
        },
        {
          "type": "radio",
          "name": "scim_stairs",
          "label": "15. Stair Management",
          "labelAbove": true,
          "options": [
            {
              "label": "0 – Unable to ascend or descend stairs",
              "value": "0"
            },
            {
              "label": "1 – Ascends and descends at least 3 steps with support or supervision of another person",
              "value": "1"
            },
            {
              "label": "2 – Ascends and descends at least 3 steps with support of handrail and/or crutch or cane",
              "value": "2"
            },
            {
              "label": "3 – Ascends and descends at least 3 steps without any support or supervision",
              "value": "3"
            }
          ]
        },
        {
          "type": "radio",
          "name": "scim_transfer_wc_car",
          "label": "16. Transfers: Wheelchair–Car",
          "labelAbove": true,
          "options": [
            {
              "label": "0 – Requires total assistance",
              "value": "0"
            },
            {
              "label": "1 – Needs partial assistance and/or supervision and/or adaptive devices",
              "value": "1"
            },
            {
              "label": "2 – Transfers independent; no adaptive devices (or does not require wheelchair)",
              "value": "2"
            }
          ]
        },
        {
          "type": "radio",
          "name": "scim_transfer_ground_wc",
          "label": "17. Transfers: Ground–Wheelchair",
          "labelAbove": true,
          "options": [
            {
              "label": "0 – Requires assistance",
              "value": "0"
            },
            {
              "label": "1 – Transfers independent with or without adaptive devices (or does not require wheelchair)",
              "value": "1"
            }
          ]
        },
        {
          "name": "_sc4",
          "type": "custom"
        }
      ]
    },
    {
      "name": "_scim_total",
      "type": "custom"
    }
  ]
}