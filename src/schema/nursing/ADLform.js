const ADL_schema = {
  "title": "Activities of Daily Living (ADL)",
  "sections": [
    {
      "title": "FEEDING",
      "fields": [
        {
          "name": "feeding",
          "label": "",
          "type": "radio",
          "options": [
            {
              "label": "Taking Orally",
              "value": "taking_orally"
            },
            {
              "label": "Nasogastric Tube",
              "value": "nasogastric_tube"
            },
            {
              "label": "PEG Tube",
              "value": "peg_tube"
            }
          ]
        },
        {
          "name": "feeding_taking_orally",
          "label": "Taking Orally:",
          "type": "radio",
          "showIf": {
            "field": "feeding",
            "equals": "taking_orally"
          },
          "options": [
            {
              "label": "Able to Feed Oneself",
              "value": "able_to_feed_oneself"
            },
            {
              "label": "Need Assistance",
              "value": "need_assistance"
            },
            {
              "label": "Need Assistive Device",
              "value": "need_assistive_device"
            }
          ]
        }
      ]
    },
    {
      "title": "TOILETING",
      "fields": [
        {
          "name": "toileting",
          "label": "",
          "type": "checkbox-group",
          "inlineWithLabel": true,
          "options": [
            {
              "label": "Pass Motion",
              "value": "pass_motion"
            },
            {
              "label": "Bowel Continence",
              "value": "bowel_continence"
            },
            {
              "label": "Pass Urine",
              "value": "pass_urine"
            },
            {
              "label": "Bladder Continence",
              "value": "bladder_continence"
            }
          ]
        },
        {
          "name": "pass_motion_method",
          "label": "Pass Motion:",
          "type": "radio",
          "showIf": {
            "field": "toileting",
            "includes": "pass_motion"
          },
          "options": [
            {
              "label": "Toilet",
              "value": "toilet"
            },
            {
              "label": "Diapers",
              "value": "diapers"
            }
          ]
        },
        {
          "name": "pass_motion_toilet_type",
          "label": "Toilet:",
          "type": "radio",
          "showIf": {
            "field": "pass_motion_method",
            "equals": "toilet"
          },
          "options": [
            {
              "label": "Toilet Bowl",
              "value": "toilet_bowl"
            },
            {
              "label": "Commode",
              "value": "commode"
            }
          ]
        },
        {
          "name": "pass_motion_toilet_bowl_clean",
          "label": "Toilet Bowl:",
          "type": "radio",
          "showIf": {
            "field": "pass_motion_toilet_type",
            "equals": "toilet_bowl"
          },
          "options": [
            {
              "label": "Self-Cleaning",
              "value": "self_cleaning"
            },
            {
              "label": "Need Help to Clean",
              "value": "need_help_to_clean"
            }
          ]
        },
        {
          "name": "pass_motion_commode_clean",
          "label": "Commode:",
          "type": "radio",
          "showIf": {
            "field": "pass_motion_toilet_type",
            "equals": "commode"
          },
          "options": [
            {
              "label": "Self-Cleaning",
              "value": "self_cleaning"
            },
            {
              "label": "Need Help to Clean",
              "value": "need_help_to_clean"
            }
          ]
        },
        {
          "name": "pass_motion_diapers",
          "label": "Diapers:",
          "type": "radio",
          "showIf": {
            "field": "pass_motion_method",
            "equals": "diapers"
          },
          "options": [
            {
              "label": "Self Change/Clean",
              "value": "self_change_clean"
            },
            {
              "label": "Need Assist to Change/Clean",
              "value": "need_assist_to_change_clean"
            }
          ]
        },
        {
          "name": "bowel_continence_method",
          "label": "Bowel Continence:",
          "type": "radio",
          "showIf": {
            "field": "toileting",
            "includes": "bowel_continence"
          },
          "options": [
            {
              "label": "Spontaneous Controllable",
              "value": "spontaneous_controllable"
            },
            {
              "label": "Suppository",
              "value": "suppository"
            },
            {
              "label": "Enemas",
              "value": "enemas"
            },
            {
              "label": "Manual Evacuation",
              "value": "manual_evacuation"
            },
            {
              "label": "Stoma Bag",
              "value": "stoma_bag"
            }
          ]
        },
        {
          "name": "bladder_continence_method",
          "label": "Bladder Continence:",
          "type": "radio",
          "showIf": {
            "field": "toileting",
            "includes": "bladder_continence"
          },
          "options": [
            {
              "label": "Spontaneous Controllable",
              "value": "spontaneous_controllable"
            },
            {
              "label": "CISC/CIC",
              "value": "cisc_cic"
            },
            {
              "label": "CBD",
              "value": "cbd"
            }
          ]
        },
        {
          "name": "pass_urine_method",
          "label": "Pass Urine:",
          "type": "radio",
          "showIf": {
            "field": "toileting",
            "includes": "pass_urine"
          },
          "options": [
            {
              "label": "Toilet",
              "value": "toilet"
            },
            {
              "label": "Urinal",
              "value": "urinal"
            },
            {
              "label": "Diapers",
              "value": "diapers"
            },
            {
              "label": "CISC",
              "value": "cisc"
            },
            {
              "label": "CBD/SPC",
              "value": "cbd_spc"
            }
          ]
        },
        {
          "name": "pass_urine_toilet_type",
          "label": "Toilet:",
          "type": "radio",
          "showIf": {
            "field": "pass_urine_method",
            "equals": "toilet"
          },
          "options": [
            {
              "label": "Toilet Bowl",
              "value": "toilet_bowl"
            },
            {
              "label": "Commode",
              "value": "commode"
            }
          ]
        },
        {
          "name": "pass_urine_toilet_bowl_clean",
          "label": "Toilet Bowl:",
          "type": "radio",
          "showIf": {
            "field": "pass_urine_toilet_type",
            "equals": "toilet_bowl"
          },
          "options": [
            {
              "label": "Self-Cleaning",
              "value": "self_cleaning"
            },
            {
              "label": "Need Help to Clean",
              "value": "need_help_to_clean"
            }
          ]
        },
        {
          "name": "pass_urine_commode_clean",
          "label": "Commode:",
          "type": "radio",
          "showIf": {
            "field": "pass_urine_toilet_type",
            "equals": "commode"
          },
          "options": [
            {
              "label": "Self-Cleaning",
              "value": "self_cleaning"
            },
            {
              "label": "Need Help to Clean",
              "value": "need_help_to_clean"
            }
          ]
        },
        {
          "name": "pass_urine_urinal",
          "label": "Urinal:",
          "type": "radio",
          "showIf": {
            "field": "pass_urine_method",
            "equals": "urinal"
          },
          "options": [
            {
              "label": "Self Done",
              "value": "self_done"
            },
            {
              "label": "Need Assist",
              "value": "need_assist"
            }
          ]
        },
        {
          "name": "pass_urine_diapers",
          "label": "Diapers:",
          "type": "radio",
          "showIf": {
            "field": "pass_urine_method",
            "equals": "diapers"
          },
          "options": [
            {
              "label": "Self Change/Clean",
              "value": "self_change_clean"
            },
            {
              "label": "Need Assist to Change/Clean",
              "value": "need_assist_to_change_clean"
            }
          ]
        },
        {
          "name": "pass_urine_cisc",
          "label": "CISC:",
          "type": "radio",
          "showIf": {
            "field": "pass_urine_method",
            "equals": "cisc"
          },
          "options": [
            {
              "label": "Self Perform",
              "value": "self_perform"
            },
            {
              "label": "Need Assist",
              "value": "need_assist"
            }
          ]
        },
        {
          "name": "pass_urine_cbd_spc",
          "label": "CBD/SPC:",
          "type": "radio",
          "showIf": {
            "field": "pass_urine_method",
            "equals": "cbd_spc"
          },
          "options": [
            {
              "label": "Self Perform",
              "value": "self_perform"
            },
            {
              "label": "Need Assist",
              "value": "need_assist"
            }
          ]
        }
      ]
    },
    {
      "title": "BATHING",
      "fields": [
        {
          "name": "bathing",
          "label": "",
          "type": "checkbox-group",
          "inlineWithLabel": true,
          "options": [
            {
              "label": "Take Off Clothes",
              "value": "take_off_clothes"
            },
            {
              "label": "Shower",
              "value": "shower"
            },
            {
              "label": "Bed Bath",
              "value": "bed_bath"
            }
          ]
        },
        {
          "name": "bathing_take_off_clothes",
          "label": "Take Off Clothes:",
          "type": "radio",
          "showIf": {
            "field": "bathing",
            "includes": "take_off_clothes"
          },
          "options": [
            {
              "label": "Able to Take Off All Garments Including Diapers",
              "value": "able_all_garments"
            },
            {
              "label": "Garment",
              "value": "garment"
            }
          ]
        },
        {
          "name": "bathing_garment_type",
          "label": "Garment:",
          "type": "checkbox-group",
          "inlineWithLabel": true,
          "showIf": {
            "field": "bathing_take_off_clothes",
            "equals": "garment"
          },
          "options": [
            {
              "label": "Upper Garment",
              "value": "upper_garment"
            },
            {
              "label": "Lower Garment",
              "value": "lower_garment"
            },
            {
              "label": "Diapers",
              "value": "diapers"
            }
          ]
        },
        {
          "name": "bathing_upper_garment_assist",
          "label": "Upper Garment:",
          "type": "radio",
          "showIf": {
            "field": "bathing_garment_type",
            "includes": "upper_garment"
          },
          "options": [
            {
              "label": "Need Minor Assist",
              "value": "need_minor_assist"
            },
            {
              "label": "Total Assist",
              "value": "total_assist"
            }
          ]
        },
        {
          "name": "bathing_lower_garment_assist",
          "label": "Lower Garment:",
          "type": "radio",
          "showIf": {
            "field": "bathing_garment_type",
            "includes": "lower_garment"
          },
          "options": [
            {
              "label": "Need Minor Assist",
              "value": "need_minor_assist"
            },
            {
              "label": "Total Assist",
              "value": "total_assist"
            }
          ]
        },
        {
          "name": "bathing_garment_diapers_assist",
          "label": "Diapers:",
          "type": "radio",
          "showIf": {
            "field": "bathing_garment_type",
            "includes": "diapers"
          },
          "options": [
            {
              "label": "Need Minor Assist",
              "value": "need_minor_assist"
            },
            {
              "label": "Total Assist",
              "value": "total_assist"
            }
          ]
        },
        {
          "name": "bathing_shower",
          "label": "Shower:",
          "type": "radio",
          "showIf": {
            "field": "bathing",
            "includes": "shower"
          },
          "options": [
            {
              "label": "Self Bath",
              "value": "self_bath"
            },
            {
              "label": "Need Assistance to Bath",
              "value": "need_assistance_to_bath"
            }
          ]
        },
        {
          "name": "bathing_self_bath",
          "label": "Self Bath:",
          "type": "radio",
          "showIf": {
            "field": "bathing_shower",
            "equals": "self_bath"
          },
          "options": [
            {
              "label": "Standing",
              "value": "standing"
            },
            {
              "label": "Sitting on Bath Chair",
              "value": "sitting_on_bath_chair"
            }
          ]
        },
        {
          "name": "bathing_need_assistance",
          "label": "Need Assistance to Bath:",
          "type": "radio",
          "showIf": {
            "field": "bathing_shower",
            "equals": "need_assistance_to_bath"
          },
          "options": [
            {
              "label": "Able to Bath with Minor Assist",
              "value": "able_minor_assist"
            },
            {
              "label": "Requires Total Bathing",
              "value": "requires_total_bathing"
            }
          ]
        },
        {
          "name": "bathing_bed_bath",
          "label": "Bed Bath:",
          "type": "radio",
          "showIf": {
            "field": "bathing",
            "includes": "bed_bath"
          },
          "options": [
            {
              "label": "On Bed Sponging",
              "value": "on_bed_sponging"
            },
            {
              "label": "Assisted Bath Trolley",
              "value": "assisted_bath_trolley"
            }
          ]
        }
      ]
    },
    {
      "title": "DRESSING/GROOMING",
      "fields": [
        {
          "name": "dressing_grooming",
          "label": "",
          "type": "checkbox-group",
          "inlineWithLabel": true,
          "options": [
            {
              "label": "Upper Garment",
              "value": "upper_garment"
            },
            {
              "label": "Lower Garment",
              "value": "lower_garment"
            },
            {
              "label": "Diapers",
              "value": "diapers"
            }
          ]
        },
        {
          "name": "dressing_upper_garment",
          "label": "Upper Garment:",
          "type": "checkbox-group",
          "inlineWithLabel": true,
          "showIf": {
            "field": "dressing_grooming",
            "includes": "upper_garment"
          },
          "options": [
            {
              "label": "Shirts",
              "value": "shirts"
            },
            {
              "label": "Inner Garments/Bra/Sports Bra",
              "value": "inner_garments_bra"
            },
            {
              "label": "Shoulder Support/Hand Splint",
              "value": "shoulder_support_hand_splint"
            }
          ]
        },
        {
          "name": "dressing_shirts",
          "label": "Shirts:",
          "type": "radio",
          "showIf": {
            "field": "dressing_upper_garment",
            "includes": "shirts"
          },
          "options": [
            {
              "label": "Self-Put On",
              "value": "self_put_on"
            },
            {
              "label": "Need Assist",
              "value": "need_assist"
            },
            {
              "label": "Total Assist",
              "value": "total_assist"
            }
          ]
        },
        {
          "name": "dressing_shirts_self_put_on",
          "label": "Self-Put On:",
          "type": "radio",
          "showIf": {
            "field": "dressing_shirts",
            "equals": "self_put_on"
          },
          "options": [
            {
              "label": "Able to Do Buttoning",
              "value": "able_to_do_buttoning"
            },
            {
              "label": "Unable to Do Buttoning",
              "value": "unable_to_do_buttoning"
            }
          ]
        },
        {
          "name": "dressing_inner_garments",
          "label": "Inner Garments/Bra/Sports Bra:",
          "type": "radio",
          "showIf": {
            "field": "dressing_upper_garment",
            "includes": "inner_garments_bra"
          },
          "options": [
            {
              "label": "Self-Put On",
              "value": "self_put_on"
            },
            {
              "label": "Need Assist",
              "value": "need_assist"
            },
            {
              "label": "Total Assist",
              "value": "total_assist"
            }
          ]
        },
        {
          "name": "dressing_shoulder_support",
          "label": "Shoulder Support/Hand Splint:",
          "type": "radio",
          "showIf": {
            "field": "dressing_upper_garment",
            "includes": "shoulder_support_hand_splint"
          },
          "options": [
            {
              "label": "Self-Put On",
              "value": "self_put_on"
            },
            {
              "label": "Need Assist",
              "value": "need_assist"
            },
            {
              "label": "Total Assist",
              "value": "total_assist"
            }
          ]
        },
        {
          "name": "dressing_lower_garment",
          "label": "Lower Garment:",
          "type": "checkbox-group",
          "inlineWithLabel": true,
          "showIf": {
            "field": "dressing_grooming",
            "includes": "lower_garment"
          },
          "options": [
            {
              "label": "Pants",
              "value": "pants"
            },
            {
              "label": "AFO",
              "value": "afo"
            },
            {
              "label": "Stump Shrinker",
              "value": "stump_shrinker"
            }
          ]
        },
        {
          "name": "dressing_pants",
          "label": "Pants:",
          "type": "radio",
          "showIf": {
            "field": "dressing_lower_garment",
            "includes": "pants"
          },
          "options": [
            {
              "label": "Self Put On",
              "value": "self_put_on"
            },
            {
              "label": "Need Minor Assist",
              "value": "need_minor_assist"
            },
            {
              "label": "Total Assist",
              "value": "total_assist"
            }
          ]
        },
        {
          "name": "dressing_afo",
          "label": "AFO:",
          "type": "radio",
          "showIf": {
            "field": "dressing_lower_garment",
            "includes": "afo"
          },
          "options": [
            {
              "label": "Self Put On",
              "value": "self_put_on"
            },
            {
              "label": "Need Minor Assist",
              "value": "need_minor_assist"
            },
            {
              "label": "Total Assist",
              "value": "total_assist"
            }
          ]
        },
        {
          "name": "dressing_stump_shrinker",
          "label": "Stump Shrinker:",
          "type": "radio",
          "showIf": {
            "field": "dressing_lower_garment",
            "includes": "stump_shrinker"
          },
          "options": [
            {
              "label": "Need Minor Assist",
              "value": "need_minor_assist"
            },
            {
              "label": "Total Assist",
              "value": "total_assist"
            }
          ]
        },
        {
          "name": "dressing_diapers",
          "label": "Diapers:",
          "type": "radio",
          "showIf": {
            "field": "dressing_grooming",
            "includes": "diapers"
          },
          "options": [
            {
              "label": "Self Put On",
              "value": "self_put_on"
            },
            {
              "label": "Need Minor Assist",
              "value": "need_minor_assist"
            },
            {
              "label": "Total Assist",
              "value": "total_assist"
            }
          ]
        }
      ]
    },
    {
      "title": "Remarks",
      "fields": [
        {
          "name": "remarks",
          "label": "",
          "type": "textarea",
          "placeholder": "Enter remarks..."
        }
      ]
    }
  ]
}