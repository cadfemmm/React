const SUBJECTIVE = {
   "sections":[
      {
         "fields":[
            {
               "name":"chief_complaint",
               "label":"Chief Complaint",
               "type":"input"
            },
            {
               "name":"hpi",
               "label":"History of Present Illness",
               "type":"input"
            },
            {
               "title":"Functional Status",
               "fields":[
                  {
                     "name":"functional_difficulty",
                     "label":"Functional Difficulty",
                     "type":"checkbox-group",
                     "options":[
                        {
                           "label":"Walking",
                           "value":"walking"
                        },
                        {
                           "label":"Standing",
                           "value":"standing"
                        },
                        {
                           "label":"Transfer",
                           "value":"transfer"
                        },
                        {
                           "label":"Stairs",
                           "value":"stairs"
                        },
                        {
                           "label":"ADL",
                           "value":"adl"
                        },
                        {
                           "label":"RTW",
                           "value":"rtw"
                        },
                        {
                           "label":"Balance",
                           "value":"balance"
                        },
                        {
                           "label":"Others",
                           "value":"others"
                        }
                     ]
                  },
                  {
                     "name":"pain",
                     "label":"Pain",
                     "type":"radio",
                     "options":[
                        {
                           "label":"No",
                           "value":"no"
                        },
                        {
                           "label":"Yes",
                           "value":"yes"
                        }
                     ]
                  },
                  {
                     "name":"pain_location",
                     "label":"Pain Location",
                     "type":"checkbox-group",
                     "showIf":{
                        "field":"pain",
                        "equals":"yes"
                     },
                     "options":[
                        {
                           "label":"Limb",
                           "value":"limb"
                        },
                        {
                           "label":"Joint",
                           "value":"joint"
                        },
                        {
                           "label":"Back",
                           "value":"back"
                        },
                        {
                           "label":"Stump",
                           "value":"stump"
                        },
                        {
                           "label":"General",
                           "value":"general"
                        }
                     ]
                  },
                  {
                     "name":"pain_score",
                     "label":"Pain Score",
                     "type":"scale-slider",
                     "min":0,
                     "max":10,
                     "ranges":[
                        {
                           "min":0,
                           "max":1,
                           "label":"Mild",
                           "color":"#22c55e"
                        },
                        {
                           "min":1,
                           "max":5,
                           "label":"Moderate",
                           "color":"#facc15"
                        },
                        {
                           "min":5,
                           "max":10,
                           "label":"Severe",
                           "color":"#ef4444"
                        }
                     ],
                     "showValue":true,
                     "showif":{
                        "field":"pain",
                        "equals":"yes"
                     }
                  },
                  {
                     "name":"pain_timing",
                     "label":"Pain Timing",
                     "type":"checkbox-group",
                     "showIf":{
                        "field":"pain",
                        "equals":"yes"
                     },
                     "options":[
                        {
                           "label":"Rest",
                           "value":"rest"
                        },
                        {
                           "label":"Movement",
                           "value":"movement"
                        },
                        {
                           "label":"Night",
                           "value":"night"
                        },
                        {
                           "label":"Weight-bearing",
                           "value":"weight_bearing"
                        }
                     ]
                  },
                  {
                     "name":"functional_status_remark",
                     "label":"Remark",
                     "type":"textarea"
                  }
               ]
            },
            {
               "title":"Mobility",
               "fields":[
                  {
                     "name":"mobility_status",
                     "label":"Mobility Status",
                     "type":"radio",
                     "options":[
                        {
                           "label":"Independent",
                           "value":"independent"
                        },
                        {
                           "label":"Supervision",
                           "value":"supervision"
                        },
                        {
                           "label":"Min Assist",
                           "value":"min_assist"
                        },
                        {
                           "label":"Mod Assist",
                           "value":"mod_assist"
                        },
                        {
                           "label":"Max Assist",
                           "value":"max_assist"
                        },
                        {
                           "label":"Dependent",
                           "value":"dependent"
                        }
                     ]
                  },
                  {
                     "name":"assistive_device",
                     "label":"Assistive Device",
                     "type":"checkbox-group",
                     "options":[
                        {
                           "label":"Cane",
                           "value":"cane"
                        },
                        {
                           "label":"Quadripod",
                           "value":"quadripod"
                        },
                        {
                           "label":"Walker",
                           "value":"walker"
                        },
                        {
                           "label":"Crutches",
                           "value":"crutches"
                        },
                        {
                           "label":"Wheelchair",
                           "value":"wheelchair"
                        },
                        {
                           "label":"None",
                           "value":"none"
                        }
                     ]
                  },
                  {
                     "name":"walking_distance",
                     "label":"Walking Distance",
                     "type":"radio",
                     "options":[
                        {
                           "label":"Unable",
                           "value":"unable"
                        },
                        {
                           "label":"<10m",
                           "value":"less_10m"
                        },
                        {
                           "label":"Household",
                           "value":"household"
                        },
                        {
                           "label":"Community",
                           "value":"community"
                        }
                     ]
                  },
                  {
                     "name":"balance_issue",
                     "label":"Balance Issue",
                     "type":"radio",
                     "options":[
                        {
                           "label":"No",
                           "value":"no"
                        },
                        {
                           "label":"Yes",
                           "value":"yes"
                        }
                     ]
                  },
                  {
                     "name":"fall_history",
                     "label":"Fall History",
                     "type":"radio",
                     "options":[
                        {
                           "label":"No",
                           "value":"no"
                        },
                        {
                           "label":"Yes",
                           "value":"yes"
                        }
                     ]
                  },
                  {
                     "name":"fall_frequency",
                     "label":"Fall Frequency",
                     "type":"radio",
                     "options":[
                        {
                           "label":"Once",
                           "value":"once"
                        },
                        {
                           "label":"Occasional",
                           "value":"occasional"
                        },
                        {
                           "label":"Recurrent",
                           "value":"recurrent"
                        }
                     ]
                  },
                  {
                     "name":"mobility_remark",
                     "label":"Remark",
                     "type":"textarea"
                  }
               ]
            },
            {
               "title":"General Screening",
               "fields":[
                  {
                     "name":"hearing",
                     "label":"Hearing",
                     "type":"radio",
                     "options":[
                        {
                           "label":"Normal",
                           "value":"normal"
                        },
                        {
                           "label":"Impaired",
                           "value":"impaired"
                        }
                     ]
                  },
                  {
                     "name":"vision",
                     "label":"Vision",
                     "type":"radio",
                     "options":[
                        {
                           "label":"Normal",
                           "value":"normal"
                        },
                        {
                           "label":"Impaired",
                           "value":"impaired"
                        }
                     ]
                  },
                  {
                     "name":"hand_function",
                     "label":"Hand Function",
                     "type":"radio",
                     "options":[
                        {
                           "label":"Normal",
                           "value":"normal"
                        },
                        {
                           "label":"Impaired",
                           "value":"impaired"
                        }
                     ]
                  },
                  {
                     "name":"cognitive",
                     "label":"Cognitive",
                     "type":"radio",
                     "options":[
                        {
                           "label":"Normal",
                           "value":"normal"
                        },
                        {
                           "label":"Impaired",
                           "value":"impaired"
                        }
                     ]
                  },
                  {
                     "name":"fatigue_level",
                     "label":"Fatigue Level",
                     "type":"radio",
                     "options":[
                        {
                           "label":"None",
                           "value":"none"
                        },
                        {
                           "label":"Mild",
                           "value":"mild"
                        },
                        {
                           "label":"Moderate",
                           "value":"moderate"
                        },
                        {
                           "label":"Severe",
                           "value":"severe"
                        }
                     ]
                  },
                  {
                     "name":"general_screening_remark",
                     "label":"Remark",
                     "type":"textarea"
                  }
               ]
            },
            {
               "title":"Limb Condition",
               "fields":[
                  {
                     "name":"skin_condition",
                     "label":"Skin Condition",
                     "type":"checkbox-group",
                     "options":[
                        {
                           "label":"Normal",
                           "value":"normal"
                        },
                        {
                           "label":"Redness",
                           "value":"redness"
                        },
                        {
                           "label":"Wound",
                           "value":"wound"
                        },
                        {
                           "label":"Scar",
                           "value":"scar"
                        },
                        {
                           "label":"Sensitive",
                           "value":"sensitive"
                        }
                     ]
                  },
                  {
                     "name":"sensation_issue",
                     "label":"Sensation Issue",
                     "type":"radio",
                     "options":[
                        {
                           "label":"No",
                           "value":"no"
                        },
                        {
                           "label":"Yes",
                           "value":"yes"
                        }
                     ]
                  },
                  {
                     "name":"sound_limb_condition",
                     "label":"Sound Limb Condition",
                     "type":"checkbox-group",
                     "options":[
                        {
                           "label":"Normal",
                           "value":"normal"
                        },
                        {
                           "label":"Pain",
                           "value":"pain"
                        },
                        {
                           "label":"Weakness",
                           "value":"weakness"
                        },
                        {
                           "label":"Wound",
                           "value":"wound"
                        },
                        {
                           "label":"Deformity",
                           "value":"deformity"
                        }
                     ]
                  },
                  {
                     "name":"limb_condition_remark",
                     "label":"Remark",
                     "type":"textarea"
                  }
               ]
            },
            {
               "title":"Functional & Environmental Profile",
               "fields":[
                  {
                     "name":"home_environment",
                     "label":"Home Environment",
                     "type":"checkbox-group",
                     "options":[
                        {
                           "label":"Flat",
                           "value":"flat"
                        },
                        {
                           "label":"Stairs",
                           "value":"stairs"
                        },
                        {
                           "label":"Uneven",
                           "value":"uneven"
                        },
                        {
                           "label":"Narrow space",
                           "value":"narrow_space"
                        }
                     ]
                  },
                  {
                     "name":"occupational_activity_level",
                     "label":"Occupational Activity Level",
                     "type":"radio",
                     "options":[
                        {
                           "label":"Sedentary",
                           "value":"sedentary"
                        },
                        {
                           "label":"Light",
                           "value":"light"
                        },
                        {
                           "label":"Moderate",
                           "value":"moderate"
                        },
                        {
                           "label":"Heavy",
                           "value":"heavy"
                        }
                     ]
                  },
                  {
                     "name":"compliance_to_devices",
                     "label":"Compliance To Devices",
                     "type":"radio",
                     "options":[
                        {
                           "label":"Good",
                           "value":"good"
                        },
                        {
                           "label":"Partial",
                           "value":"partial"
                        },
                        {
                           "label":"Poor",
                           "value":"poor"
                        },
                        {
                           "label":"Not Applicable",
                           "value":"na"
                        }
                     ]
                  },
                  {
                     "name":"functional_environment_remark",
                     "label":"Remark",
                     "type":"textarea"
                  }
               ]
            },
            {
               "title":"Social History",
               "fields":[
                  {
                     "name":"marital_status",
                     "label":"Marital Status",
                     "type":"input",
                     "readOnly":true
                  },
                  {
                     "name":"dependent_children_status",
                     "label":"Dependent Children Status",
                     "type":"input",
                     "readOnly":true
                  },
                  {
                     "name":"job_status",
                     "label":"Job Status",
                     "type":"input",
                     "readOnly":true
                  },
                  {
                     "name":"social_history_remark",
                     "label":"Remark",
                     "type":"textarea"
                  }
               ]
            },
            {
               "title":"Amputee Section",
               "fields":[
                  {
                     "name":"amputation_level",
                     "label":"Amputation Level",
                     "type":"checkbox-group",
                     "options":[
                        {
                           "label":"Partial Foot",
                           "value":"partial_foot"
                        },
                        {
                           "label":"Transtibial",
                           "value":"transtibial"
                        },
                        {
                           "label":"Knee Disarticulation",
                           "value":"knee_disarticulation"
                        },
                        {
                           "label":"Transfemoral",
                           "value":"transfemoral"
                        },
                        {
                           "label":"Upper Limb",
                           "value":"upper_limb"
                        }
                     ]
                  },
                  {
                     "name":"amputation_side",
                     "label":"Side",
                     "type":"checkbox-group",
                     "options":[
                        {
                           "label":"Right",
                           "value":"right"
                        },
                        {
                           "label":"Left",
                           "value":"left"
                        },
                        {
                           "label":"Bilateral",
                           "value":"bilateral"
                        }
                     ]
                  },
                  {
                     "name":"stump_condition",
                     "label":"Stump Condition",
                     "type":"checkbox-group",
                     "options":[
                        {
                           "label":"Healed",
                           "value":"healed"
                        },
                        {
                           "label":"Wound",
                           "value":"wound"
                        },
                        {
                           "label":"Swelling",
                           "value":"swelling"
                        },
                        {
                           "label":"Redness",
                           "value":"redness"
                        },
                        {
                           "label":"Sensitive",
                           "value":"sensitive"
                        },
                        {
                           "label":"Flabby",
                           "value":"flabby"
                        }
                     ]
                  },
                  {
                     "name":"stump_pain",
                     "label":"Stump Pain",
                     "type":"radio",
                     "options":[
                        {
                           "label":"No",
                           "value":"no"
                        },
                        {
                           "label":"Yes",
                           "value":"yes"
                        }
                     ]
                  },
                  {
                     "name":"phantom_pain",
                     "label":"Phantom Pain",
                     "type":"radio",
                     "options":[
                        {
                           "label":"No",
                           "value":"no"
                        },
                        {
                           "label":"Yes",
                           "value":"yes"
                        }
                     ]
                  },
                  {
                     "name":"phantom_sensation",
                     "label":"Phantom Sensation",
                     "type":"radio",
                     "options":[
                        {
                           "label":"No",
                           "value":"no"
                        },
                        {
                           "label":"Yes",
                           "value":"yes"
                        }
                     ]
                  },
                  {
                     "name":"volume_fluctuation",
                     "label":"Volume Fluctuation",
                     "type":"radio",
                     "options":[
                        {
                           "label":"No",
                           "value":"no"
                        },
                        {
                           "label":"Yes",
                           "value":"yes"
                        }
                     ]
                  },
                  {
                     "name":"sweating",
                     "label":"Sweating",
                     "type":"radio",
                     "options":[
                        {
                           "label":"No",
                           "value":"no"
                        },
                        {
                           "label":"Yes",
                           "value":"yes"
                        }
                     ]
                  },
                  {
                     "name":"amputee_other_issue",
                     "label":"Other Issue",
                     "type":"textarea"
                  }
               ]
            },
            {
               "type":"subheading",
               "label":"Prosthetic Usage",
               "showIf":{
                  "field":"using_prosthesis",
                  "equals":"yes"
               }
            },
            {
               "name":"existing_user",
               "label":"Existing User",
               "type":"radio",
               "showIf":{
                  "field":"using_prosthesis",
                  "equals":"yes"
               },
               "options":[
                  {
                     "label":"No",
                     "value":"no"
                  },
                  {
                     "label":"Yes",
                     "value":"yes"
                  }
               ]
            },
            {
               "name":"current_issue",
               "label":"Current Issue",
               "type":"checkbox-group",
               "showIf":{
                  "field":"using_prosthesis",
                  "equals":"yes"
               },
               "options":[
                  {
                     "label":"Loose",
                     "value":"loose"
                  },
                  {
                     "label":"Pain",
                     "value":"pain"
                  },
                  {
                     "label":"Heavy",
                     "value":"heavy"
                  },
                  {
                     "label":"Unstable",
                     "value":"unstable"
                  },
                  {
                     "label":"Cosmetic",
                     "value":"cosmetic"
                  },
                  {
                     "label":"Broken",
                     "value":"broken"
                  },
                  {
                     "label":"Nil",
                     "value":"nil"
                  },
                  {
                     "label":"Others",
                     "value":"others"
                  }
               ]
            },
            {
               "name":"wearing_time",
               "label":"Wearing Time",
               "type":"radio",
               "showIf":{
                  "field":"using_prosthesis",
                  "equals":"yes"
               },
               "options":[
                  {
                     "label":"Not using",
                     "value":"not_using"
                  },
                  {
                     "label":"<2h",
                     "value":"less_2h"
                  },
                  {
                     "label":"2–6h",
                     "value":"between_2_6h"
                  },
                  {
                     "label":">6h",
                     "value":"more_6h"
                  }
               ]
            },
            {
               "name":"donning_ability",
               "label":"Donning Ability",
               "type":"radio",
               "showIf":{
                  "field":"using_prosthesis",
                  "equals":"yes"
               },
               "options":[
                  {
                     "label":"Independent",
                     "value":"independent"
                  },
                  {
                     "label":"Assist",
                     "value":"assist"
                  },
                  {
                     "label":"Unable",
                     "value":"unable"
                  }
               ]
            },
            {
               "name":"suspension_issue",
               "label":"Suspension Issue",
               "type":"checkbox-group",
               "showIf":{
                  "field":"using_prosthesis",
                  "equals":"yes"
               },
               "options":[
                  {
                     "label":"Slipping",
                     "value":"slipping"
                  },
                  {
                     "label":"Difficult donning",
                     "value":"difficult_donning"
                  },
                  {
                     "label":"Pain",
                     "value":"pain"
                  },
                  {
                     "label":"Nil",
                     "value":"nil"
                  },
                  {
                     "label":"Others",
                     "value":"others"
                  }
               ]
            },
            {
               "name":"prosthetic_other_issue",
               "label":"Other Issue",
               "type":"textarea",
               "showIf":{
                  "field":"using_prosthesis",
                  "equals":"yes"
               }
            },
            {
               "type":"subheading",
               "label":"Functional Level",
               "showIf":{
                  "field":"using_prosthesis",
                  "equals":"yes"
               }
            },
            {
               "name":"mobility_level",
               "label":"Mobility Level",
               "type":"radio",
               "showIf":{
                  "field":"using_prosthesis",
                  "equals":"yes"
               },
               "options":[
                  {
                     "label":"Wheelchair",
                     "value":"wheelchair"
                  },
                  {
                     "label":"Household Ambulator",
                     "value":"household_ambulator"
                  },
                  {
                     "label":"Community Ambulator",
                     "value":"community_ambulator"
                  }
               ]
            },
            {
               "name":"functional_level_assistive_device",
               "label":"Assistive Device",
               "type":"checkbox-group",
               "showIf":{
                  "field":"using_prosthesis",
                  "equals":"yes"
               },
               "options":[
                  {
                     "label":"None",
                     "value":"none"
                  },
                  {
                     "label":"Cane",
                     "value":"cane"
                  },
                  {
                     "label":"Walker",
                     "value":"walker"
                  },
                  {
                     "label":"Crutches",
                     "value":"crutches"
                  }
               ]
            },
            {
               "name":"functional_balance_issue",
               "label":"Balance Issue",
               "type":"radio",
               "showIf":{
                  "field":"using_prosthesis",
                  "equals":"yes"
               },
               "options":[
                  {
                     "label":"No",
                     "value":"no"
                  },
                  {
                     "label":"Yes",
                     "value":"yes"
                  }
               ]
            },
            {
               "name":"functional_other_issue",
               "label":"Other Issue",
               "type":"textarea",
               "showIf":{
                  "field":"using_prosthesis",
                  "equals":"yes"
               }
            },
            {
               "title":"Non-Amputee Section",
               "fields":[
                  {
                     "name":"region",
                     "label":"Region",
                     "type":"single-select",
                     "options":[
                        {
                           "label":"Upper Limb",
                           "value":"upper_limb"
                        },
                        {
                           "label":"Lower Limb",
                           "value":"lower_limb"
                        },
                        {
                           "label":"Spine",
                           "value":"spine"
                        },
                        {
                           "label":"Footwear",
                           "value":"footwear"
                        }
                     ]
                  },
                  {
                     "name":"non_amputee_side",
                     "label":"Side",
                     "type":"checkbox-group",
                     "options":[
                        {
                           "label":"Right",
                           "value":"right"
                        },
                        {
                           "label":"Left",
                           "value":"left"
                        },
                        {
                           "label":"Bilateral",
                           "value":"bilateral"
                        },
                        {
                           "label":"None",
                           "value":"none"
                        }
                     ]
                  },
                  {
                     "name":"main_problem",
                     "label":"Main Problem",
                     "type":"checkbox-group",
                     "options":[
                        {
                           "label":"Foot Drop",
                           "value":"foot_drop"
                        },
                        {
                           "label":"Knee Instability",
                           "value":"knee_instability"
                        },
                        {
                           "label":"Pain",
                           "value":"pain"
                        },
                        {
                           "label":"Deformity",
                           "value":"deformity"
                        },
                        {
                           "label":"Weakness",
                           "value":"weakness"
                        },
                        {
                           "label":"Spasticity",
                           "value":"spasticity"
                        },
                        {
                           "label":"Post-op",
                           "value":"post_op"
                        },
                        {
                           "label":"Diabetic Foot",
                           "value":"diabetic_foot"
                        },
                        {
                           "label":"Others",
                           "value":"others"
                        }
                     ]
                  },
                  {
                     "name":"non_amputee_other_issue",
                     "label":"Other Issue",
                     "type":"textarea"
                  }
               ]
            },
            {
               "title":"Gait & Control",
               "fields":[
                  {
                     "name":"gait_issue",
                     "label":"Gait Issue",
                     "type":"checkbox-group",
                     "options":[
                        {
                           "label":"Toe Drag",
                           "value":"toe_drag"
                        },
                        {
                           "label":"Knee Buckling",
                           "value":"knee_buckling"
                        },
                        {
                           "label":"Hyperextension",
                           "value":"hyperextension"
                        },
                        {
                           "label":"Inversion",
                           "value":"inversion"
                        },
                        {
                           "label":"Circumduction",
                           "value":"circumduction"
                        },
                        {
                           "label":"Poor Balance",
                           "value":"poor_balance"
                        }
                     ]
                  },
                  {
                     "name":"spasticity",
                     "label":"Spasticity",
                     "type":"radio",
                     "options":[
                        {
                           "label":"No",
                           "value":"no"
                        },
                        {
                           "label":"Yes",
                           "value":"yes"
                        }
                     ]
                  }
               ]
            }
         ]
      }
   ]
}

const OBJECTIVE = {
   "sections":[
      {
         "fields":[
            {
               "type":"subheading",
               "label":"Muscle Strength"
            },
            {
               "name":"mmt_upper_limb",
               "label":"MMT Upper Limb (R/L)",
               "type":"input"
            },
            {
               "name":"mmt_lower_limb",
               "label":"MMT Lower Limb (R/L)",
               "type":"input"
            },
            {
               "name":"affected_area_weakness",
               "label":"Affected Area (Weakness)",
               "type":"checkbox-group",
               "options":[
                  {
                     "label":"Shoulder",
                     "value":"shoulder"
                  },
                  {
                     "label":"Elbow",
                     "value":"elbow"
                  },
                  {
                     "label":"Wrist",
                     "value":"wrist"
                  },
                  {
                     "label":"Hip",
                     "value":"hip"
                  },
                  {
                     "label":"Knee",
                     "value":"knee"
                  },
                  {
                     "label":"Ankle",
                     "value":"ankle"
                  },
                  {
                     "label":"Others",
                     "value":"others"
                  }
               ]
            },
            {
               "name":"grip_strength_right",
               "label":"Grip Strength (Right)",
               "type":"input"
            },
            {
               "name":"grip_strength_left",
               "label":"Grip Strength (Left)",
               "type":"input"
            },
            {
               "name":"muscle_strength_remarks",
               "label":"Remarks",
               "type":"textarea"
            },
            {
               "type":"subheading",
               "label":"Tone & Tightness"
            },
            {
               "type":"row",
               "compact":true,
               "fields":[
                  {
                     "name":"pe_muscle_tone_side",
                     "label":"Muscle Tone",
                     "type":"checkbox-group",
                     "position":"side",
                     "options":[
                        {
                           "label":"Right",
                           "value":"right"
                        },
                        {
                           "label":"Left",
                           "value":"left"
                        }
                     ]
                  }
               ]
            },
            {
               "type":"row",
               "compact":true,
               "fields":[
                  {
                     "name":"pe_muscle_tone_right",
                     "label":"Right",
                     "type":"radio",
                     "showIf":{
                        "field":"pe_muscle_tone_side",
                        "includes":"right"
                     },
                     "options":[
                        {
                           "label":"Normal",
                           "value":"normal"
                        },
                        {
                           "label":"Hypotonia",
                           "value":"hypotonia"
                        },
                        {
                           "label":"Hypertonia",
                           "value":"hypertonia"
                        }
                     ]
                  },
                  {
                     "name":"pe_muscle_tone_left",
                     "label":"Left",
                     "type":"radio",
                     "showIf":{
                        "field":"pe_muscle_tone_side",
                        "includes":"left"
                     },
                     "options":[
                        {
                           "label":"Normal",
                           "value":"normal"
                        },
                        {
                           "label":"Hypotonia",
                           "value":"hypotonia"
                        },
                        {
                           "label":"Hypertonia",
                           "value":"hypertonia"
                        }
                     ]
                  }
               ]
            },
            {
               "type":"row",
               "compact":true,
               "fields":[
                  {
                     "name":"pe_muscle_tone_comment_right",
                     "label":"Muscle Tone Comment – Right",
                     "type":"input",
                     "showIf":{
                        "field":"pe_muscle_tone_right",
                        "oneOf":[
                           "hypotonia",
                           "hypertonia"
                        ],
                        "and":{
                           "field":"pe_muscle_tone_side",
                           "includes":"right"
                        }
                     }
                  },
                  {
                     "name":"pe_muscle_tone_comment_left",
                     "label":"Muscle Tone Comment – Left",
                     "type":"input",
                     "showIf":{
                        "field":"pe_muscle_tone_left",
                        "oneOf":[
                           "hypotonia",
                           "hypertonia"
                        ],
                        "and":{
                           "field":"pe_muscle_tone_side",
                           "includes":"left"
                        }
                     }
                  }
               ]
            },
            {
               "name":"pe_mas_launcher",
               "label":"",
               "type":"assessment-launcher",
               "options":[
                  {
                     "label":"Modified Ashworth Scale (MAS)",
                     "value":"mas_scale"
                  }
               ]
            },
            {
               "name":"tightness",
               "label":"Tightness",
               "type":"radio",
               "options":[
                  {
                     "label":"No",
                     "value":"no"
                  },
                  {
                     "label":"Yes",
                     "value":"yes"
                  }
               ]
            },
            {
               "name":"tone_tightness_remarks",
               "label":"Remarks",
               "type":"textarea"
            },
            {
               "type":"subheading",
               "label":"Range Of Motion"
            },
            {
               "name":"rom_launcher",
               "label":"",
               "type":"assessment-launcher",
               "options":[
                  {
                     "label":"Range Of Motion (ROM)",
                     "value":"rom"
                  }
               ]
            },
            {
               "name":"contracture",
               "label":"Contracture",
               "type":"checkbox-group",
               "options":[
                  {
                     "label":"Shoulder",
                     "value":"shoulder"
                  },
                  {
                     "label":"Elbow",
                     "value":"elbow"
                  },
                  {
                     "label":"Wrist",
                     "value":"wrist"
                  },
                  {
                     "label":"Hip",
                     "value":"hip"
                  },
                  {
                     "label":"Knee",
                     "value":"knee"
                  },
                  {
                     "label":"Ankle",
                     "value":"ankle"
                  }
               ]
            },
            {
               "name":"contracture_angle",
               "label":"Contracture Angle",
               "type":"input",
               "showIf":{
                  "field":"contracture",
                  "hasValue":true
               }
            },
            {
               "name":"rom_remarks",
               "label":"Remarks",
               "type":"textarea"
            },
            {
               "type":"subheading",
               "label":"Sensory"
            },
            {
               "name":"sensation",
               "label":"Sensation",
               "type":"radio",
               "options":[
                  {
                     "label":"Intact",
                     "value":"intact"
                  },
                  {
                     "label":"Reduced",
                     "value":"reduced"
                  },
                  {
                     "label":"Altered",
                     "value":"altered"
                  }
               ]
            },
            {
               "name":"proprioception",
               "label":"Proprioception",
               "type":"radio",
               "options":[
                  {
                     "label":"Intact",
                     "value":"intact"
                  },
                  {
                     "label":"Impaired",
                     "value":"impaired"
                  }
               ]
            },
            {
               "name":"sensory_remarks",
               "label":"Remarks",
               "type":"textarea"
            },
            {
               "type":"subheading",
               "label":"Gait Observation"
            },
            {
               "name":"mobility_status",
               "label":"Mobility Status",
               "type":"radio",
               "options":[
                  {
                     "label":"Independent",
                     "value":"independent"
                  },
                  {
                     "label":"With Aid",
                     "value":"with_aid"
                  },
                  {
                     "label":"Wheelchair",
                     "value":"wheelchair"
                  },
                  {
                     "label":"Unable",
                     "value":"unable"
                  }
               ]
            },
            {
               "name":"weight_bearing",
               "label":"Weight Bearing",
               "type":"radio",
               "options":[
                  {
                     "label":"Full",
                     "value":"full"
                  },
                  {
                     "label":"Partial",
                     "value":"partial"
                  },
                  {
                     "label":"Non-weight Bearing",
                     "value":"non_weight_bearing"
                  }
               ]
            },
            {
               "name":"gait_pattern",
               "label":"Gait Pattern",
               "type":"checkbox-group",
               "options":[
                  {
                     "label":"Normal",
                     "value":"normal"
                  },
                  {
                     "label":"Antalgic",
                     "value":"antalgic"
                  },
                  {
                     "label":"Hemiplegic",
                     "value":"hemiplegic"
                  },
                  {
                     "label":"Ataxic",
                     "value":"ataxic"
                  },
                  {
                     "label":"Others",
                     "value":"others"
                  }
               ]
            },
            {
               "name":"gait_deviation",
               "label":"Gait Deviation",
               "type":"checkbox-group",
               "options":[
                  {
                     "label":"Foot Drop",
                     "value":"foot_drop"
                  },
                  {
                     "label":"Circumduction",
                     "value":"circumduction"
                  },
                  {
                     "label":"Hip Hiking",
                     "value":"hip_hiking"
                  },
                  {
                     "label":"Knee Hyperextension",
                     "value":"knee_hyperextension"
                  },
                  {
                     "label":"Toe Drag",
                     "value":"toe_drag"
                  },
                  {
                     "label":"Others",
                     "value":"others"
                  }
               ]
            },
            {
               "name":"step_length",
               "label":"Step Length",
               "type":"radio",
               "options":[
                  {
                     "label":"Symmetrical",
                     "value":"symmetrical"
                  },
                  {
                     "label":"Reduced",
                     "value":"reduced"
                  }
               ]
            },
            {
               "name":"trunk_control",
               "label":"Trunk Control",
               "type":"radio",
               "options":[
                  {
                     "label":"Good",
                     "value":"good"
                  },
                  {
                     "label":"Fair",
                     "value":"fair"
                  },
                  {
                     "label":"Poor",
                     "value":"poor"
                  }
               ]
            },
            {
               "name":"postural",
               "label":"Postural",
               "type":"textarea"
            },
            {
               "name":"vicon_report",
               "label":"Vicon Report",
               "type":"textarea",
               "readOnly":true
            },
            {
               "name":"gait_remarks",
               "label":"Gait Remarks",
               "type":"textarea"
            },
            {
               "type":"subheading",
               "label":"Joint Assessment"
            },
            {
               "name":"joint",
               "label":"Joint",
               "type":"single-select",
               "options":[
                  {
                     "label":"Shoulder Right",
                     "value":"shoulder_right"
                  },
                  {
                     "label":"Shoulder Left",
                     "value":"shoulder_left"
                  },
                  {
                     "label":"Elbow Right",
                     "value":"elbow_right"
                  },
                  {
                     "label":"Elbow Left",
                     "value":"elbow_left"
                  },
                  {
                     "label":"Wrist Right",
                     "value":"wrist_right"
                  },
                  {
                     "label":"Wrist Left",
                     "value":"wrist_left"
                  },
                  {
                     "label":"Hip Right",
                     "value":"hip_right"
                  },
                  {
                     "label":"Hip Left",
                     "value":"hip_left"
                  },
                  {
                     "label":"Knee Right",
                     "value":"knee_right"
                  },
                  {
                     "label":"Knee Left",
                     "value":"knee_left"
                  },
                  {
                     "label":"Ankle Right",
                     "value":"ankle_right"
                  },
                  {
                     "label":"Ankle Left",
                     "value":"ankle_left"
                  }
               ]
            },
            {
               "name":"stability",
               "label":"Stability",
               "type":"radio",
               "options":[
                  {
                     "label":"Stable",
                     "value":"stable"
                  },
                  {
                     "label":"Mild Instability",
                     "value":"mild_instability"
                  },
                  {
                     "label":"Severe Instability",
                     "value":"severe_instability"
                  }
               ]
            },
            {
               "name":"deformity",
               "label":"Deformity",
               "type":"checkbox-group",
               "options":[
                  {
                     "label":"None",
                     "value":"none"
                  },
                  {
                     "label":"Varus",
                     "value":"varus"
                  },
                  {
                     "label":"Valgus",
                     "value":"valgus"
                  },
                  {
                     "label":"Equinus",
                     "value":"equinus"
                  },
                  {
                     "label":"Flexion",
                     "value":"flexion"
                  }
               ]
            },
            {
               "name":"swelling",
               "label":"Swelling",
               "type":"radio",
               "options":[
                  {
                     "label":"No",
                     "value":"no"
                  },
                  {
                     "label":"Yes",
                     "value":"yes"
                  }
               ]
            },
            {
               "name":"tenderness",
               "label":"Tenderness",
               "type":"radio",
               "options":[
                  {
                     "label":"No",
                     "value":"no"
                  },
                  {
                     "label":"Yes",
                     "value":"yes"
                  }
               ]
            },
            {
               "name":"joint_assessment_remarks",
               "label":"Remarks",
               "type":"textarea"
            },
            {
               "name":"case_type",
               "label":"Case Type",
               "type":"radio",
               "options":[
                  {
                     "label":"Amputee",
                     "value":"amputee"
                  },
                  {
                     "label":"Non-Amputee",
                     "value":"non_amputee"
                  }
               ]
            },
            {
               "type":"subheading",
               "label":"Stump Assessment",
               "showIf":{
                  "field":"case_type",
                  "equals":"amputee"
               }
            },
            {
               "name":"stump_length",
               "label":"Stump Length",
               "type":"single-select",
               "showIf":{
                  "field":"case_type",
                  "equals":"amputee"
               },
               "options":[
                  {
                     "label":"Short",
                     "value":"short"
                  },
                  {
                     "label":"Medium",
                     "value":"medium"
                  },
                  {
                     "label":"Long",
                     "value":"long"
                  }
               ]
            },
            {
               "name":"stump_length_value",
               "label":"Stump Length Value",
               "type":"input",
               "showIf":{
                  "field":"case_type",
                  "equals":"amputee"
               }
            },
            {
               "name":"stump_shape",
               "label":"Stump Shape",
               "type":"radio",
               "showIf":{
                  "field":"case_type",
                  "equals":"amputee"
               },
               "options":[
                  {
                     "label":"Conical",
                     "value":"conical"
                  },
                  {
                     "label":"Cylindrical",
                     "value":"cylindrical"
                  },
                  {
                     "label":"Bulbous",
                     "value":"bulbous"
                  }
               ]
            },
            {
               "name":"stump_skin",
               "label":"Stump Skin",
               "type":"checkbox-group",
               "showIf":{
                  "field":"case_type",
                  "equals":"amputee"
               },
               "options":[
                  {
                     "label":"Normal",
                     "value":"normal"
                  },
                  {
                     "label":"Redness",
                     "value":"redness"
                  },
                  {
                     "label":"Wound",
                     "value":"wound"
                  },
                  {
                     "label":"Scar",
                     "value":"scar"
                  },
                  {
                     "label":"Adherent",
                     "value":"adherent"
                  }
               ]
            },
            {
               "name":"stump_maturity",
               "label":"Stump Maturity",
               "type":"radio",
               "showIf":{
                  "field":"case_type",
                  "equals":"amputee"
               },
               "options":[
                  {
                     "label":"Immature",
                     "value":"immature"
                  },
                  {
                     "label":"Mature",
                     "value":"mature"
                  }
               ]
            },
            {
               "name":"tenderness",
               "label":"Tenderness",
               "type":"radio",
               "showIf":{
                  "field":"case_type",
                  "equals":"amputee"
               },
               "options":[
                  {
                     "label":"No",
                     "value":"no"
                  },
                  {
                     "label":"Yes",
                     "value":"yes"
                  }
               ]
            },
            {
               "name":"edema",
               "label":"Edema",
               "type":"radio",
               "showIf":{
                  "field":"case_type",
                  "equals":"amputee"
               },
               "options":[
                  {
                     "label":"No",
                     "value":"no"
                  },
                  {
                     "label":"Yes",
                     "value":"yes"
                  }
               ]
            },
            {
               "name":"active_wound",
               "label":"Active Wound",
               "type":"radio",
               "showIf":{
                  "field":"case_type",
                  "equals":"amputee"
               },
               "options":[
                  {
                     "label":"No",
                     "value":"no"
                  },
                  {
                     "label":"Yes",
                     "value":"yes"
                  }
               ]
            },
            {
               "name":"latest_wound_picture",
               "label":"Latest Wound Picture",
               "type":"attach-file",
               "accept":"image/*",
               "showIf":{
                  "field":"active_wound",
                  "equals":"yes"
               }
            },
            {
               "name":"redundant_tissue",
               "label":"Redundant Tissue",
               "type":"radio",
               "showIf":{
                  "field":"case_type",
                  "equals":"amputee"
               },
               "options":[
                  {
                     "label":"No",
                     "value":"no"
                  },
                  {
                     "label":"Yes",
                     "value":"yes"
                  }
               ]
            },
            {
               "name":"bony_prominence",
               "label":"Bony Prominence",
               "type":"radio",
               "showIf":{
                  "field":"case_type",
                  "equals":"amputee"
               },
               "options":[
                  {
                     "label":"No",
                     "value":"no"
                  },
                  {
                     "label":"Yes",
                     "value":"yes"
                  }
               ]
            },
            {
               "name":"stump_assessment_others",
               "label":"Others",
               "type":"textarea",
               "showIf":{
                  "field":"case_type",
                  "equals":"amputee"
               }
            },
            {
               "type":"subheading",
               "label":"Stump Control",
               "showIf":{
                  "field":"case_type",
                  "equals":"amputee"
               }
            },
            {
               "name":"residual_limb_control",
               "label":"Residual Limb Control",
               "type":"radio",
               "showIf":{
                  "field":"case_type",
                  "equals":"amputee"
               },
               "options":[
                  {
                     "label":"Good",
                     "value":"good"
                  },
                  {
                     "label":"Fair",
                     "value":"fair"
                  },
                  {
                     "label":"Poor",
                     "value":"poor"
                  }
               ]
            },
            {
               "name":"residual_limb_strength",
               "label":"Residual Limb Strength",
               "type":"radio",
               "showIf":{
                  "field":"case_type",
                  "equals":"amputee"
               },
               "options":[
                  {
                     "label":"Good",
                     "value":"good"
                  },
                  {
                     "label":"Fair",
                     "value":"fair"
                  },
                  {
                     "label":"Poor",
                     "value":"poor"
                  }
               ]
            },
            {
               "name":"contracture",
               "label":"Contracture",
               "type":"single-select",
               "showIf":{
                  "field":"case_type",
                  "equals":"amputee"
               },
               "options":[
                  {
                     "label":"None",
                     "value":"none"
                  },
                  {
                     "label":"Hip",
                     "value":"hip"
                  },
                  {
                     "label":"Knee",
                     "value":"knee"
                  }
               ]
            },
            {
               "name":"weight_bearing",
               "label":"Weight Bearing",
               "type":"radio",
               "showIf":{
                  "field":"case_type",
                  "equals":"amputee"
               },
               "options":[
                  {
                     "label":"No",
                     "value":"no"
                  },
                  {
                     "label":"Yes",
                     "value":"yes"
                  }
               ]
            },
            {
               "name":"stump_control_remarks",
               "label":"Remarks",
               "type":"textarea",
               "showIf":{
                  "field":"case_type",
                  "equals":"amputee"
               }
            },
            {
               "name":"using_prosthesis",
               "label":"Using Prosthesis",
               "type":"radio",
               "options":[
                  {
                     "label":"No",
                     "value":"no"
                  },
                  {
                     "label":"Yes",
                     "value":"yes"
                  }
               ]
            },
            {
               "type":"subheading",
               "label":"Alignment / Prosthetic Check",
               "showIf":{
                  "field":"using_prosthesis",
                  "equals":"yes"
               }
            },
            {
               "name":"prosthesis_fit",
               "label":"Prosthesis Fit",
               "type":"radio",
               "showIf":{
                  "field":"using_prosthesis",
                  "equals":"yes"
               },
               "options":[
                  {
                     "label":"Good",
                     "value":"good"
                  },
                  {
                     "label":"Loose",
                     "value":"loose"
                  },
                  {
                     "label":"Tight",
                     "value":"tight"
                  }
               ]
            },
            {
               "name":"suspension",
               "label":"Suspension",
               "type":"radio",
               "showIf":{
                  "field":"using_prosthesis",
                  "equals":"yes"
               },
               "options":[
                  {
                     "label":"Secure",
                     "value":"secure"
                  },
                  {
                     "label":"Loose",
                     "value":"loose"
                  }
               ]
            },
            {
               "name":"alignment",
               "label":"Alignment",
               "type":"radio",
               "showIf":{
                  "field":"using_prosthesis",
                  "equals":"yes"
               },
               "options":[
                  {
                     "label":"Good",
                     "value":"good"
                  },
                  {
                     "label":"Needs Adjustment",
                     "value":"needs_adjustment"
                  }
               ]
            },
            {
               "name":"issue_with_prosthetic",
               "label":"Issue With Prosthetic",
               "type":"textarea",
               "showIf":{
                  "field":"using_prosthesis",
                  "equals":"yes"
               }
            },
            {
               "name":"height_with_prosthesis",
               "label":"Height With Prosthesis",
               "type":"radio",
               "showIf":{
                  "field":"using_prosthesis",
                  "equals":"yes"
               },
               "options":[
                  {
                     "label":"Equal",
                     "value":"equal"
                  },
                  {
                     "label":"Short",
                     "value":"short"
                  },
                  {
                     "label":"Long",
                     "value":"long"
                  }
               ]
            },
            {
               "name":"gait_with_prosthesis",
               "label":"Gait With Prosthesis",
               "type":"radio",
               "showIf":{
                  "field":"using_prosthesis",
                  "equals":"yes"
               },
               "options":[
                  {
                     "label":"Stable",
                     "value":"stable"
                  },
                  {
                     "label":"Unstable",
                     "value":"unstable"
                  }
               ]
            },
            {
               "name":"k_level",
               "label":"K-Level",
               "type":"single-select",
               "readOnly":false,
               "showIf":{
                  "field":"using_prosthesis",
                  "equals":"yes"
               },
               "options":[
                  {
                     "label":"K0",
                     "value":"k0"
                  },
                  {
                     "label":"K1",
                     "value":"k1"
                  },
                  {
                     "label":"K2",
                     "value":"k2"
                  },
                  {
                     "label":"K3",
                     "value":"k3"
                  },
                  {
                     "label":"K4",
                     "value":"k4"
                  }
               ]
            },
            {
               "name":"stump_picture",
               "label":"Stump Picture",
               "type":"attach-file",
               "accept":"image/*",
               "showIf":{
                  "field":"using_prosthesis",
                  "equals":"yes"
               }
            },
            {
               "name":"measurement_date",
               "label":"Measurement Date",
               "type":"date",
               "showIf":{
                  "field":"using_prosthesis",
                  "equals":"yes"
               }
            }
         ]
      }
   ]
}

const ASSESSMENT = {
   "sections":[
      {
         "fields":[
            {
               "type":"input",
               "name":"clinical_impression",
               "label":"Clinical Impression"
            },
            {
               "name":"problem_listing",
               "label":"Problem Listing",
               "type":"textarea",
               "readOnly":true
            },
            {
               "name":"rehab_potential",
               "label":"Rehab Potential",
               "type":"single-select",
               "options":[
                  {
                     "label":"UL",
                     "value":"ul"
                  },
                  {
                     "label":"LL",
                     "value":"ll"
                  },
                  {
                     "label":"Others",
                     "value":"others"
                  }
               ]
            },
            {
               "name":"assessment_remarks",
               "label":"Remarks",
               "type":"textarea"
            },
            {
               "type":"subheading",
               "label":"Stump & Functional Assessment"
            },
            {
               "name":"stump_concern",
               "label":"Stump Concern",
               "type":"textarea"
            },
            {
               "name":"suitable_for_restoration",
               "label":"Suitable For Restoration",
               "type":"radio",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  },
                  {
                     "label":"Defer",
                     "value":"defer"
                  }
               ]
            },
            {
               "name":"donning_ability",
               "label":"Donning Ability",
               "type":"radio",
               "options":[
                  {
                     "label":"Independent",
                     "value":"independent"
                  },
                  {
                     "label":"Assist",
                     "value":"assist"
                  },
                  {
                     "label":"Unable",
                     "value":"unable"
                  }
               ]
            },
            {
               "name":"existing_prosthesis_issue",
               "label":"Existing Prosthesis Issue",
               "type":"checkbox-group",
               "options":[
                  {
                     "label":"None",
                     "value":"none"
                  },
                  {
                     "label":"Poor Fit",
                     "value":"poor_fit"
                  },
                  {
                     "label":"Pain",
                     "value":"pain"
                  },
                  {
                     "label":"Alignment Issue",
                     "value":"alignment_issue"
                  },
                  {
                     "label":"Broken",
                     "value":"broken"
                  }
               ]
            },
            {
               "name":"prosthetics_assessment_remark",
               "label":"Remarks",
               "type":"textarea"
            }
         ]
      }
   ]
}

const PLAN = {
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Short Term Goals (2–4 Weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "short_term_goals"
        },
        {
          "type": "subheading",
          "label": "Long Term Goals (6–12 Weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "long_term_goals"
        },
        {
          "name": "intervention_required",
          "label": "Intervention Required",
          "type": "single-select",
          "options": [
            {
              "label": "Prescription",
              "value": "prescription"
            },
            {
              "label": "Repair",
              "value": "repair"
            },
            {
              "label": "No Intervention",
              "value": "no_intervention"
            }
          ]
        },
        {
          "name": "request_quotation",
          "label": "Request for Quotation",
          "type": "button",
          "showIf": {
            "field": "intervention_required",
            "equals": "prescription"
          }
        },
        {
          "name": "prescription_type",
          "label": "Prescription Type",
          "type": "single-select",
          "showIf": {
            "field": "intervention_required",
            "equals": "prescription"
          },
          "options": [
            {
              "label": "Prosthetic",
              "value": "prosthetic"
            },
            {
              "label": "Orthotic",
              "value": "orthotic"
            }
          ]
        },
        {
          "name": "readiness_for_measurement",
          "label": "Readiness for Measurement",
          "type": "single-select",
          "options": [
            {
              "label": "Suitable for Immediate Measurement",
              "value": "immediate_measurement"
            },
            {
              "label": "Requires Training Before Measurement",
              "value": "requires_training"
            },
            {
              "label": "Defer Prescription",
              "value": "defer_prescription"
            }
          ]
        },
        {
          "name": "reason_training_required",
          "label": "Reason if Training Required",
          "type": "input",
          "showIf": {
            "field": "readiness_for_measurement",
            "equals": "requires_training"
          },
          "placeholder": "Strengthening / Balance training / Stump shaping / ROM improvement / Prosthetic training / Others"
        },
        {
          "name": "training",
          "label": "Training",
          "type": "input",
          "placeholder": "Stump bandaging / Prosthetic donning & doffing / Gait training / Strengthening / Others"
        },
        {
          "name": "education",
          "label": "Education",
          "type": "input",
          "placeholder": "Stump care / Skin care / Prosthetic education / Orthotic education / Others"
        },
        {
          "name": "plan_remarks",
          "label": "Remarks",
          "type": "textarea"
        },
        {
          "name": "case_type",
          "label": "Case Type",
          "type": "radio",
          "options": [
            {
              "label": "Amputee",
              "value": "amputee"
            },
            {
              "label": "Non-Amputee",
              "value": "non_amputee"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Prosthetic Prescription",
          "showIf": {
            "field": "prescription_type",
            "equals": "prosthetic"
          }
        },
        {
          "name": "suspension",
          "label": "Suspension",
          "type": "single-select",
          "showIf": {
            "field": "prescription_type",
            "equals": "prosthetic"
          },
          "options": []
        },
        {
          "name": "socket_design",
          "label": "Socket Design",
          "type": "single-select",
          "showIf": {
            "field": "prescription_type",
            "equals": "prosthetic"
          },
          "options": [
            {
              "label": "Transtibial pp socket (ptb/pts/tsb)",
              "value": "tt_pp_socket_ptb_pts_tsb"
            },
            {
              "label": "Transtibial pp/pe double socket (ptb/pts/tsb)",
              "value": "tt_pp_pe_double_socket_ptb_pts_tsb"
            },
            {
              "label": "Transtibial laminated socket (ptb/pts/tsb)",
              "value": "tt_laminated_socket_ptb_pts_tsb"
            },
            {
              "label": "Transtibial laminated double socket",
              "value": "tt_laminated_double_socket"
            },
            {
              "label": "Knee disarticulation pp socket with pelite liner",
              "value": "kd_pp_socket_pelite"
            },
            {
              "label": "Knee disarticulation pp/pe double socket",
              "value": "kd_pp_pe_double_socket"
            },
            {
              "label": "Knee disarticulation laminated socket",
              "value": "kd_laminated_socket"
            },
            {
              "label": "Transfemoral pp socket (quadrilateral/ischial)",
              "value": "tf_pp_socket_quad_ischial"
            },
            {
              "label": "Transfemoral pp/pe double socket (quadrilateral/ischial)",
              "value": "tf_pp_pe_double_socket_quad_ischial"
            },
            {
              "label": "Transfemoral laminated socket (quadrilateral/ischial)",
              "value": "tf_laminated_socket_quad_ischial"
            },
            {
              "label": "Transfemoral laminated double socket +pp/pe (quadrilateral/ischial)",
              "value": "tf_laminated_double_socket_pp_pe_quad_ischial"
            },
            {
              "label": "Hip disarticulation pp socket",
              "value": "hip_disarticulation_pp_socket"
            },
            {
              "label": "Hip polypropylene double socket",
              "value": "hip_polypropylene_double_socket"
            },
            {
              "label": "Hip disarticulation laminated socket",
              "value": "hip_disarticulation_laminated_socket"
            },
            {
              "label": "Symes pp socket",
              "value": "symes_pp_socket"
            },
            {
              "label": "Symes laminated socket with pelite",
              "value": "symes_laminated_socket_pelite"
            },
            {
              "label": "Chopart socket",
              "value": "chopart_socket"
            },
            {
              "label": "Syme 3d socket",
              "value": "syme_3d_socket"
            },
            {
              "label": "Syme transparent check socket",
              "value": "syme_transparent_check_socket"
            },
            {
              "label": "Below knee carbon laminate socket",
              "value": "bk_carbon_laminate_socket"
            },
            {
              "label": "Below knee adjustable carbon laminate socket",
              "value": "bk_adjustable_carbon_laminate_socket"
            },
            {
              "label": "Below knee transparent check socket",
              "value": "bk_transparent_check_socket"
            },
            {
              "label": "Below knee 3d socket",
              "value": "bk_3d_socket"
            },
            {
              "label": "Above knee adjustable carbon laminate socket",
              "value": "ak_adjustable_carbon_laminate_socket"
            },
            {
              "label": "Above knee transparent check socket",
              "value": "ak_transparent_check_socket"
            },
            {
              "label": "Above knee 3d socket",
              "value": "ak_3d_socket"
            },
            {
              "label": "Through knee transparent check socket",
              "value": "through_knee_transparent_check_socket"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "suspension_other",
          "label": "Specify Other Socket",
          "type": "textarea",
          "showIf": {
            "field": "socket_design",
            "equals": "others"
          }
        },
        {
          "name": "knee_joint",
          "label": "Knee Joint",
          "type": "single-select",
          "showIf": {
            "field": "prescription_type",
            "equals": "prosthetic"
          },
          "options": [
            {
              "label": "V one microprocessor-controlled knee",
              "value": "v_one_microprocessor_knee"
            },
            {
              "label": "Orion 2 knee joint",
              "value": "orion_2_knee_joint"
            },
            {
              "label": "Plié® 3 mpc electronic knee",
              "value": "plie_3_mpc_electronic_knee"
            },
            {
              "label": "Total knee 1900 polycentric knee with geometric locking system",
              "value": "total_knee_1900_polycentric"
            },
            {
              "label": "Total knee® 2100",
              "value": "total_knee_2100"
            },
            {
              "label": "3r78 polycentric knee joint with pneumatic swing phase control",
              "value": "3r78_polycentric_pneumatic"
            },
            {
              "label": "Endolite esk+ with pspc",
              "value": "endolite_esk_pspc"
            },
            {
              "label": "4 bar knee joint system (3r20)",
              "value": "4bar_knee_3r20"
            },
            {
              "label": "Four bar knee joint with integrated extension assist (3r20)",
              "value": "4bar_extension_assist_3r20"
            },
            {
              "label": "Mauch knee",
              "value": "mauch_knee"
            },
            {
              "label": "Modular polycentric ebs knee joint with hydraulic swing phase control (3r60)",
              "value": "3r60_hydraulic_polycentric"
            },
            {
              "label": "Compact semi-automatic knee lock (sakl)",
              "value": "sakl"
            },
            {
              "label": "Ofm1 se balance knee",
              "value": "ofm1_se_balance"
            },
            {
              "label": "Modular single axis knee joints with pneumatic swing phase control (3r92)",
              "value": "3r92_single_axis_pneumatic"
            },
            {
              "label": "Hy-stan 4 bar knee",
              "value": "hy_stan_4bar"
            },
            {
              "label": "Hy-stan 4 bar pneumatic knee",
              "value": "hy_stan_4bar_pneumatic"
            },
            {
              "label": "Graph-lite 4 bar knee with manual lock",
              "value": "graph_lite_4bar_manual_lock"
            },
            {
              "label": "Graph-lite 5 bar pneumatic knee high activity",
              "value": "graph_lite_5bar_pneumatic"
            },
            {
              "label": "Knee joint with extension assist",
              "value": "knee_extension_assist"
            },
            {
              "label": "Monocentric brake knee joint with stance flexion and manual",
              "value": "monocentric_brake_knee"
            },
            {
              "label": "Waterproof knee joint with lock",
              "value": "waterproof_knee_lock"
            },
            {
              "label": "Stand auto lock pneumatic knee",
              "value": "stand_auto_lock_pneumatic"
            },
            {
              "label": "4 bar mechanical knee joint (flat top)",
              "value": "4bar_mechanical_flat_top"
            },
            {
              "label": "Hydraulic polycentric knee joint with extension assist",
              "value": "hydraulic_polycentric_extension_assist"
            },
            {
              "label": "Polycentric knee joint",
              "value": "polycentric_knee_joint"
            },
            {
              "label": "Pneumatic polycentric knee joint",
              "value": "pneumatic_polycentric_knee_joint"
            },
            {
              "label": "Phoenix graph-lite 4 bar pneumatic knee",
              "value": "phoenix_graph_lite_4bar"
            },
            {
              "label": "Matik",
              "value": "matik"
            },
            {
              "label": "Hy-stan 4 bar knee disarticulation knee",
              "value": "hy_stan_disarticulation"
            },
            {
              "label": "4-bar knee (economy)",
              "value": "4bar_knee_economy"
            },
            {
              "label": "4 bar geometric straight lock pneumatic knee",
              "value": "4bar_geometric_straight_lock"
            },
            {
              "label": "Graph lite 4-bar pneumatic knee – disarticulation knee",
              "value": "graph_lite_disarticulation"
            },
            {
              "label": "Graph lite 4 bar pneumatic knee(mini)",
              "value": "graph_lite_4bar_mini"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "knee_joint_other",
          "label": "Specify Other Knee Joint",
          "type": "textarea",
          "showIf": {
            "field": "knee_joint",
            "equals": "others"
          }
        },
        {
          "name": "foot",
          "label": "Foot",
          "type": "single-select",
          "showIf": {
            "field": "prescription_type",
            "equals": "prosthetic"
          },
          "options": [
            {
              "label": "1s101 sach+ foot",
              "value": "1s101_sach_plus_foot"
            },
            {
              "label": "2r8=m10 sach foot adapter",
              "value": "2r8_m10_sach_adapter"
            },
            {
              "label": "1h38 single axis foot",
              "value": "1h38_single_axis_foot"
            },
            {
              "label": "2r10 single axis foot adapter",
              "value": "2r10_single_axis_adapter"
            },
            {
              "label": "2r33 single axis foot adapter with screw",
              "value": "2r33_single_axis_adapter_screw"
            },
            {
              "label": "1d10 dynamic foot with adapter",
              "value": "1d10_dynamic_foot_adapter"
            },
            {
              "label": "1d35 dynamic motion foot",
              "value": "1d35_dynamic_motion_foot"
            },
            {
              "label": "Endolite multiflex foot",
              "value": "endolite_multiflex_foot"
            },
            {
              "label": "1wr95 water resistance foot",
              "value": "1wr95_water_resistance_foot"
            },
            {
              "label": "Sach foot",
              "value": "sach_foot"
            },
            {
              "label": "Single axis flat foot with toes",
              "value": "single_axis_flat_foot_toes"
            },
            {
              "label": "Quantum syme foot spring module",
              "value": "quantum_syme_foot_spring"
            },
            {
              "label": "1c63 triton low profile",
              "value": "1c63_triton_low_profile"
            },
            {
              "label": "Foot shell for triton low profile foot",
              "value": "triton_low_profile_shell"
            },
            {
              "label": "Senator prosthetic foot",
              "value": "senator_prosthetic_foot"
            },
            {
              "label": "Endurance foot",
              "value": "endurance_foot"
            },
            {
              "label": "Feather carbon foot",
              "value": "feather_carbon_foot"
            },
            {
              "label": "Trias energy storing foot (1c30)",
              "value": "trias_energy_storing_1c30"
            },
            {
              "label": "Adjustable single axis ankle",
              "value": "adjustable_single_axis_ankle"
            },
            {
              "label": "Foot adapter with screw connection",
              "value": "foot_adapter_screw_connection"
            },
            {
              "label": "Multiflex ankle standard",
              "value": "multiflex_ankle_standard"
            },
            {
              "label": "Multiflex snubber",
              "value": "multiflex_snubber"
            },
            {
              "label": "Hy –stan single axis ankle",
              "value": "hy_stan_single_axis_ankle"
            },
            {
              "label": "Hy –stan ultra-short ankle",
              "value": "hy_stan_ultra_short_ankle"
            },
            {
              "label": "Adjustable multi-axis ankle joint",
              "value": "adjustable_multi_axis_ankle"
            },
            {
              "label": "Mono-axis ankle joint",
              "value": "mono_axis_ankle_joint"
            },
            {
              "label": "Single axis with pyramid",
              "value": "single_axis_with_pyramid"
            },
            {
              "label": "Single axis ankle joint with pyramid",
              "value": "single_axis_ankle_pyramid"
            },
            {
              "label": "Graph-lite multi-axis ankle",
              "value": "graph_lite_multi_axis_ankle"
            },
            {
              "label": "Vacuum ankle adaptor",
              "value": "vacuum_ankle_adaptor"
            },
            {
              "label": "Hydraulic vacuum ankle",
              "value": "hydraulic_vacuum_ankle"
            },
            {
              "label": "Stainless steel pyramid base (max 125kg)",
              "value": "stainless_steel_pyramid_base"
            },
            {
              "label": "Proteor s.a.c.h foot",
              "value": "proteor_sach_foot"
            },
            {
              "label": "Sierra (fs1)",
              "value": "sierra_fs1"
            },
            {
              "label": "Highlander (fs3)",
              "value": "highlander_fs3"
            },
            {
              "label": "Freedom agilix (f15)",
              "value": "freedom_agilix_f15"
            },
            {
              "label": "Dynastar",
              "value": "dynastar"
            },
            {
              "label": "Dynastep",
              "value": "dynastep"
            },
            {
              "label": "Freedom dynadapt (f10)",
              "value": "freedom_dynadapt_f10"
            },
            {
              "label": "Rush hipro",
              "value": "rush_hipro"
            },
            {
              "label": "Rush rampage lp",
              "value": "rush_rampage_lp"
            },
            {
              "label": "Kinterra foot/ankle (rom)",
              "value": "kinterra_rom"
            },
            {
              "label": "Super sach foot",
              "value": "super_sach_foot"
            },
            {
              "label": "Motion control foot",
              "value": "motion_control_foot"
            },
            {
              "label": "Kare dynamic foot with ankle",
              "value": "kare_dynamic_foot_ankle"
            },
            {
              "label": "Carbon foot cover (for endurance foot)",
              "value": "carbon_foot_cover_endurance"
            },
            {
              "label": "Footshell for trias",
              "value": "footshell_trias"
            },
            {
              "label": "Footshell (proteor foot)",
              "value": "footshell_proteor"
            },
            {
              "label": "Rush foot cover",
              "value": "rush_foot_cover"
            },
            {
              "label": "Feather carbon foot cover",
              "value": "feather_carbon_foot_cover"
            },
            {
              "label": "Kare dynamic foot cover",
              "value": "kare_dynamic_foot_cover"
            },
            {
              "label": "Foot cover (tehsen)",
              "value": "foot_cover_tehsen"
            },
            {
              "label": "Foot shell (gen 3, gen 2, shockwave, kinnex)",
              "value": "foot_shell_gen_series"
            },
            {
              "label": "Foot cover",
              "value": "foot_cover"
            },
            {
              "label": "Foot shell (ossur foot shell)",
              "value": "ossur_foot_shell"
            },
            {
              "label": "Foot cover for cpi",
              "value": "foot_cover_cpi"
            },
            {
              "label": "High definition silicone foot cover for partial foot",
              "value": "hdsf_partial_foot"
            },
            {
              "label": "Hdsf (with carbon fibre foot plate)",
              "value": "hdsf_carbon_plate"
            },
            {
              "label": "High definition silicone foot cover for partial foot - high top ankle",
              "value": "hdsf_partial_high_top"
            },
            {
              "label": "Hdsf (with carbon fibre foot plate) - high top ankle",
              "value": "hdsf_carbon_plate_high_top"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "name": "foot_other",
          "label": "Specify Other Foot",
          "type": "textarea",
          "showIf": {
            "field": "foot",
            "equals": "others"
          }
        },
        {
          "name": "additional_components",
          "label": "Additional Components",
          "type": "textarea",
          "showIf": {
            "field": "prescription_type",
            "equals": "prosthetic"
          }
        },
        {
          "name": "casting_date",
          "label": "Casting Date",
          "type": "date",
          "showIf": {
            "field": "prescription_type",
            "equals": "prosthetic"
          }
        },
        {
          "name": "fitting_date",
          "label": "Fitting Date",
          "type": "date",
          "readOnly": true,
          "showIf": {
            "field": "prescription_type",
            "equals": "prosthetic"
          }
        },
        {
          "name": "follow_up_date",
          "label": "Follow-up Date",
          "type": "date",
          "showIf": {
            "field": "prescription_type",
            "equals": "prosthetic"
          }
        },
        {
          "name": "upload_measurement_form",
          "label": "Upload Measurement Form",
          "type": "attach-file",
          "showIf": {
            "field": "prescription_type",
            "equals": "prosthetic"
          },
          "accept": "application/pdf,image/*"
        },
        {
          "name": "training_in_prosthesis_use",
          "label": "Training in Prosthesis Use",
          "type": "radio",
          "showIf": {
            "field": "prescription_type",
            "equals": "prosthetic"
          },
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
          "name": "prosthetic_prescription_remarks",
          "label": "Remarks",
          "type": "textarea",
          "showIf": {
            "field": "prescription_type",
            "equals": "prosthetic"
          }
        }
      ]
    }
  ]
}

export default {
  PLAN,
  OBJECTIVE,
  SUBJECTIVE,
  ASSESSMENT,
};
