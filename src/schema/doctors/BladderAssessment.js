const SCHEMA = {
  "title": "Bladder Issue",
  "sections": [
    {
      "title": null,
      "fields": [
        {
          "type": "heading",
          "label": "History Taking / Assessment"
        },
        {
          "type": "radio",
          "name": "premorbid_condition",
          "label": "Premorbid condition",
          "options": [
            {
              "label": "No urinary problem",
              "value": "no_urinary_problem"
            },
            {
              "label": "Has urinary problem",
              "value": "has_urinary_problem"
            }
          ]
        },
        {
          "type": "input",
          "name": "premorbid_condition_specify",
          "label": "Premorbid condition (Specify)",
          "showIf": {
            "field": "premorbid_condition",
            "equals": "has_urinary_problem"
          }
        },
        {
          "type": "radio",
          "name": "urinaryProblem",
          "label": "Urinary problem",
          "options": [
            {
              "label": "No Urinary Problem",
              "value": "CONTINENT"
            },
            {
              "label": "Has Urinary Problem",
              "value": "INCONTINENT"
            }
          ]
        },
        {
          "type": "radio",
          "name": "current_voiding_method",
          "label": "Current voiding method",
          "labelAbove": true,
          "options": [
            {
              "label": "Spontaneous voiding",
              "value": "spontaneous_voiding"
            },
            {
              "label": "Continous Bladder Drainage (CBD)",
              "value": "cbd"
            },
            {
              "label": "Suprapubic Cathetherization (SPC)",
              "value": "spc"
            },
            {
              "label": "Condom catheter",
              "value": "condom_catheter"
            },
            {
              "label": "Clean Intermittent Self-Catheterization (CISC)",
              "value": "cisc"
            },
            {
              "label": "Clean Intermittent Catheterization (CIC)",
              "value": "cic"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "input",
          "name": "current_voiding_method_other",
          "label": "Current voiding method (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "current_voiding_method",
              "equals": "others"
            }
          }
        },
        {
          "type": "radio",
          "name": "voiding_frequency",
          "label": "Frequency of voiding",
          "labelAbove": true,
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "current_voiding_method",
              "oneOf": [
                "spontaneous_voiding",
                "cic",
                "cisc"
              ]
            }
          },
          "options": [
            {
              "label": "Hourly",
              "value": "hourly"
            },
            {
              "label": "2 hourly",
              "value": "2_hourly"
            },
            {
              "label": "3 hourly",
              "value": "3_hourly"
            },
            {
              "label": "4 hourly",
              "value": "4_hourly"
            },
            {
              "label": "5 hourly",
              "value": "5_hourly"
            },
            {
              "label": "6 hourly",
              "value": "6_hourly"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "type": "input",
          "name": "voiding_frequency_other",
          "label": "Frequency of voiding (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "voiding_frequency",
              "equals": "others"
            }
          }
        },
        {
          "type": "radio",
          "name": "voided_urine_volume",
          "label": "Voided urine volume (ml)",
          "labelAbove": true,
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "current_voiding_method",
              "oneOf": [
                "spontaneous_voiding",
                "cic",
                "cisc"
              ]
            }
          },
          "options": [
            {
              "label": "<50ml",
              "value": "lt_50"
            },
            {
              "label": "50-100ml",
              "value": "50_100"
            },
            {
              "label": "100-200ml",
              "value": "100_200"
            },
            {
              "label": "200-300ml",
              "value": "200_300"
            },
            {
              "label": "400-500ml",
              "value": "400_500"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ]
        },
        {
          "type": "input",
          "name": "voided_urine_volume_other",
          "label": "Voided urine volume (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "voided_urine_volume",
              "equals": "others"
            }
          }
        },
        {
          "type": "radio",
          "name": "sensate",
          "label": "Able to sensate",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "radio",
          "name": "control",
          "label": "Able to control",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "heading",
          "label": "Symptoms",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "subheading",
          "label": "Storage",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "radio",
          "name": "storage_urinary_frequency",
          "label": "Urinary frequency",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "radio",
          "name": "storage_nocturia",
          "label": "Nocturia",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "radio",
          "name": "storage_urgency",
          "label": "Urgency",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "radio",
          "name": "storage_incontinence",
          "label": "Urinary incontinence",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "input",
          "name": "storage_others_specify",
          "label": "Others/Specify",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "or": [
                {
                  "field": "storage_urinary_frequency",
                  "equals": "Yes"
                },
                {
                  "field": "storage_nocturia",
                  "equals": "Yes"
                },
                {
                  "field": "storage_urgency",
                  "equals": "Yes"
                },
                {
                  "field": "storage_incontinence",
                  "equals": "Yes"
                }
              ]
            }
          }
        },
        {
          "type": "subheading",
          "label": "Voiding",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "radio",
          "name": "voiding_slow_stream",
          "label": "Slow stream",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "radio",
          "name": "voiding_spraying_stream",
          "label": "Spraying (splitting) of urinary stream",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "radio",
          "name": "voiding_intermittent_stream",
          "label": "Intermittent stream",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "radio",
          "name": "voiding_hesitancy",
          "label": "Hesitancy",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "radio",
          "name": "voiding_straining",
          "label": "Straining to void",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "radio",
          "name": "voiding_terminal_dribbling",
          "label": "Terminal dribbling",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "input",
          "name": "voiding_others_specify",
          "label": "Others/Specify",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "or": [
                {
                  "field": "voiding_slow_stream",
                  "equals": "Yes"
                },
                {
                  "field": "voiding_spraying_stream",
                  "equals": "Yes"
                },
                {
                  "field": "voiding_intermittent_stream",
                  "equals": "Yes"
                },
                {
                  "field": "voiding_hesitancy",
                  "equals": "Yes"
                },
                {
                  "field": "voiding_straining",
                  "equals": "Yes"
                },
                {
                  "field": "voiding_terminal_dribbling",
                  "equals": "Yes"
                }
              ]
            }
          }
        },
        {
          "type": "subheading",
          "label": "Post micturition",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "radio",
          "name": "post_incomplete_emptying",
          "label": "Incomplete emptying",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "input",
          "name": "post_incomplete_emptying_specify",
          "label": "Incomplete emptying (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "post_incomplete_emptying",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "post_leakage",
          "label": "Post micturitional leakage",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "input",
          "name": "post_leakage_specify",
          "label": "Post micturitional leakage (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "post_leakage",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "input",
          "name": "post_others",
          "label": "Others",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "subheading",
          "label": "Complication",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "radio",
          "name": "comp_uti",
          "label": "Urinary tract infection",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "input",
          "name": "comp_uti_specify",
          "label": "Urinary tract infection (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "comp_uti",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "comp_renal_stone",
          "label": "Renal stone",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "input",
          "name": "comp_renal_stone_specify",
          "label": "Renal stone (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "comp_renal_stone",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "comp_ureteric_stone",
          "label": "Ureteric stone",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "input",
          "name": "comp_ureteric_stone_specify",
          "label": "Ureteric stone (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "comp_ureteric_stone",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "comp_bladder_stone",
          "label": "Bladder stone",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "input",
          "name": "comp_bladder_stone_specify",
          "label": "Bladder stone (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "comp_bladder_stone",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "comp_pyelonephritis",
          "label": "Pyelonephritis",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "input",
          "name": "comp_pyelonephritis_specify",
          "label": "Pyelonephritis (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "comp_pyelonephritis",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "comp_hydronephrosis",
          "label": "Hydronephrosis",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "input",
          "name": "comp_hydronephrosis_specify",
          "label": "Hydronephrosis (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "comp_hydronephrosis",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "comp_autonomic_dysreflexia",
          "label": "Autonomic dysreflexia",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "input",
          "name": "comp_autonomic_dysreflexia_specify",
          "label": "Autonomic dysreflexia (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "comp_autonomic_dysreflexia",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "input",
          "name": "comp_others",
          "label": "Others",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "radio",
          "name": "investigation_done",
          "label": "Investigation (blood/ urine/ imaging) done previously",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "subheading",
          "label": "Blood test",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "investigation_done",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "blood_renal_profile",
          "label": "Renal profile",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "investigation_done",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "input",
          "name": "blood_renal_profile_specify",
          "label": "Renal profile (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "blood_renal_profile",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "subheading",
          "label": "Urine test",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "investigation_done",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "urine_ufeme",
          "label": "Ufeme",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "investigation_done",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "input",
          "name": "urine_ufeme_specify",
          "label": "Ufeme (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "urine_ufeme",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "urine_cns",
          "label": "Urine C & S",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "investigation_done",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "input",
          "name": "urine_cns_specify",
          "label": "Urine C & S (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "urine_cns",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "subheading",
          "label": "Imaging Option",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "investigation_done",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "img_xray_kub",
          "label": "X RAY KUB",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "investigation_done",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "input",
          "name": "img_xray_kub_specify",
          "label": "X RAY KUB (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "img_xray_kub",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "img_usg_kub_prostate",
          "label": "USG KUB +/- prostate",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "investigation_done",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "input",
          "name": "img_usg_kub_prostate_specify",
          "label": "USG KUB +/- prostate (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "img_usg_kub_prostate",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "img_ctu",
          "label": "CT Urogram (CTU)",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "investigation_done",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "input",
          "name": "img_ctu_specify",
          "label": "CT Urogram (CTU) (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "img_ctu",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "img_cystogram",
          "label": "Cystogram",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "investigation_done",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "input",
          "name": "img_cystogram_specify",
          "label": "Cystogram (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "img_cystogram",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "procedures_done",
          "label": "Procedures done previously",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "radio",
          "name": "proc_scc",
          "label": "Single channel cystometry (SCC)",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "procedures_done",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "input",
          "name": "proc_scc_specify",
          "label": "SCC (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "proc_scc",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "proc_uds",
          "label": "Urodynamic study (UDS)",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "procedures_done",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "input",
          "name": "proc_uds_specify",
          "label": "UDS (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "proc_uds",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "heading",
          "label": "Treatment",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "radio",
          "name": "tx_medication_side_effects",
          "label": "On medication & any side effects",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "input",
          "name": "tx_medication_side_effects_specify",
          "label": "On medication & side effects (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "tx_medication_side_effects",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "tx_botox_detrusor",
          "label": "History of botulinum toxin injection to detrusor muscle",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "input",
          "name": "tx_botox_detrusor_specify",
          "label": "Botulinum toxin to detrusor (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "tx_botox_detrusor",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "tx_botox_sphincter",
          "label": "History of botulinum toxin injection to external urinary sphincter",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "input",
          "name": "tx_botox_sphincter_specify",
          "label": "Botulinum toxin to external sphincter (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "tx_botox_sphincter",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "radio",
          "name": "tx_surgery",
          "label": "Surgery",
          "options": [
            {
              "label": "Yes",
              "value": "Yes"
            },
            {
              "label": "No",
              "value": "No"
            }
          ],
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "input",
          "name": "tx_surgery_specify",
          "label": "Surgery (Specify)",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "tx_surgery",
              "equals": "Yes"
            }
          }
        },
        {
          "type": "input",
          "name": "tx_others",
          "label": "Others",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "subheading",
          "label": "Goals",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "name": "bladder_goals",
          "type": "textarea",
          "placeholder": "Enter goals",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT"
          }
        },
        {
          "type": "subheading",
          "label": "Plan",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "__department",
              "equals": "doctors"
            }
          }
        },
        {
          "type": "checkbox-group",
          "name": "bladder_plan",
          "showIf": {
            "field": "urinaryProblem",
            "equals": "INCONTINENT",
            "and": {
              "field": "__department",
              "equals": "doctors"
            }
          },
          "label": "",
          "options": [
            {
              "label": "Investigation: Ufeme/ Urine C & S/ X RAY KUB/ SCC",
              "value": "investigation_bundle"
            },
            {
              "label": "Bladder diary & Input-Output chart",
              "value": "bladder_diary_io_chart"
            },
            {
              "label": "Education on CIC / CISC to patient/ carer",
              "value": "education_cic_cisc"
            },
            {
              "label": "CBD change",
              "value": "cbd_change"
            },
            {
              "label": "Perform post void residual urine volume x3 readings and inform doctor",
              "value": "post_void_residual_x3_inform_doctor"
            }
          ]
        }
      ]
    }
  ]
}