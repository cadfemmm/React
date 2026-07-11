// const mainSchema = {
//   "title": "Additional Tinnitus Profile",
//   "enableScoreToggle": true,
//   "actions": [
//     {
//       "type": "toggle-show-scores"
//     }
//   ],
//   "sections": [
//     {
//       "title": null,
//       "fields": [
//         {
//           "type": "subheading",
//           "label": "Case History (Tinnitus)"
//         },
//         {
//           "name": "onset",
//           "label": "Onset of Tinnitus",
//           "type": "input"
//         },
//         {
//           "name": "duration",
//           "label": "Duration",
//           "type": "input"
//         },
//         {
//           "name": "tinnitus_type",
//           "label": "Type",
//           "type": "checkbox-group",
//           "options": [
//             {
//               "label": "Constant",
//               "value": "constant"
//             },
//             {
//               "label": "Intermittent",
//               "value": "intermittent"
//             },
//             {
//               "label": "Pulsatile",
//               "value": "pulsatile"
//             },
//             {
//               "label": "Noise-like",
//               "value": "noise"
//             },
//             {
//               "label": "Tonal",
//               "value": "tonal"
//             }
//           ]
//         },
//         {
//           "name": "tinnitus_type_details",
//           "label": "Specify",
//           "type": "input",
//           "showIf": {
//             "field": "tinnitus_type",
//             "notEmpty": true
//           }
//         },
//         {
//           "name": "ears",
//           "label": "Ears affected",
//           "type": "radio",
//           "options": [
//             {
//               "label": "Right",
//               "value": "right"
//             },
//             {
//               "label": "Left",
//               "value": "left"
//             },
//             {
//               "label": "Bilateral",
//               "value": "bilateral"
//             },
//             {
//               "label": "In head",
//               "value": "in_head"
//             }
//           ],
//           "showIf": {
//             "field": "mode",
//             "equals": "followup"
//           }
//         },
//         {
//           "name": "perceived_pitch",
//           "label": "Perceived pitch",
//           "type": "radio",
//           "options": [
//             {
//               "label": "Low",
//               "value": "low"
//             },
//             {
//               "label": "Mid",
//               "value": "mid"
//             },
//             {
//               "label": "High",
//               "value": "high"
//             }
//           ]
//         },
//         {
//           "name": "triggering_factors",
//           "label": "Triggering factors",
//           "type": "input"
//         },
//         {
//           "name": "associated_symptoms",
//           "label": "Associated symptoms",
//           "type": "checkbox-group",
//           "options": [
//             {
//               "label": "None",
//               "value": "associated_none"
//             },
//             {
//               "label": "Hearing loss",
//               "value": "hearing_loss"
//             },
//             {
//               "label": "Vertigo",
//               "value": "vertigo"
//             },
//             {
//               "label": "Ear fullness",
//               "value": "ear_fullness"
//             },
//             {
//               "label": "Otalgia",
//               "value": "otalgia"
//             },
//             {
//               "label": "Hyperacusis",
//               "value": "hyperacusis"
//             },
//             {
//               "label": "Other",
//               "value": "other"
//             }
//           ]
//         },
//         {
//           "name": "associated_symptoms_details",
//           "label": "Specify",
//           "type": "input",
//           "showIf": {
//             "field": "associated_symptoms",
//             "notEmpty": true
//           }
//         },
//         {
//           "name": "previous_treatment",
//           "label": "Previous Treatment / Intervention",
//           "type": "radio",
//           "options": [
//             {
//               "label": "No",
//               "value": "no"
//             },
//             {
//               "label": "Yes",
//               "value": "yes"
//             }
//           ]
//         },
//         {
//           "type": "input",
//           "name": "previous_treatment_remarks",
//           "label": "Intervention Remarks",
//           "showIf": {
//             "field": "previous_treatment",
//             "equals": "yes"
//           },
//           "placeholder": "Enter treatment",
//           "addButtonLabel": "+ Add Treatment"
//         },
//         {
//           "name": "noise_exposure",
//           "label": "Noise exposure history",
//           "type": "checkbox-group",
//           "options": [
//             {
//               "label": "None",
//               "value": "none"
//             },
//             {
//               "label": "Recreational",
//               "value": "recreational"
//             },
//             {
//               "label": "Occupational",
//               "value": "occupational"
//             }
//           ]
//         },
//         {
//           "name": "noise_exposure_details",
//           "label": "Specify",
//           "type": "input",
//           "showIf": {
//             "field": "noise_exposure",
//             "notEmpty": true
//           }
//         },
//         {
//           "name": "ototoxic_drugs",
//           "label": "Ototoxic drug use",
//           "type": "input"
//         },
//         {
//           "type": "subheading",
//           "label": "Subjective Rating Scales For Tinnitus"
//         },
//         {
//           "name": "enable_vas",
//           "label": "Tinnitus Visual Analog Scale (VAS)",
//           "type": "radio",
//           "options": [
//             {
//               "label": "No",
//               "value": "no"
//             },
//             {
//               "label": "Yes",
//               "value": "yes"
//             }
//           ]
//         },
//         {
//           "name": "enable_thi",
//           "label": "Tinnitus Handicap Inventory (THI)",
//           "type": "radio",
//           "options": [
//             {
//               "label": "No",
//               "value": "no"
//             },
//             {
//               "label": "Yes",
//               "value": "yes"
//             }
//           ]
//         },
//         {
//           "name": "enable_tfi",
//           "label": "Tinnitus Functional Index (TFI)",
//           "type": "radio",
//           "options": [
//             {
//               "label": "No",
//               "value": "no"
//             },
//             {
//               "label": "Yes",
//               "value": "yes"
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "title": "Tinnitus Visual Analog Scale (VAS)",
//       "enableScoreToggle": true,
//       "showIf": {
//         "field": "enable_vas",
//         "equals": "yes"
//       },
//       "fields": [
//         {
//           "type": "info-text",
//           "text": "0 = none, 10 = worst possible"
//         },
//         {
//           "name": "vas_loudness",
//           "label": "Tinnitus Loudness - How loud is your tinnitus most of the time?",
//           "type": "scale-slider",
//           "min": 0,
//           "max": 10
//         },
//         {
//           "name": "vas_loudness_severity",
//           "label": "Loudness Severity",
//           "type": "score-box"
//         },
//         {
//           "name": "vas_annoyance",
//           "label": "Annoyance - How annoying or bothersome is your tinnitus?",
//           "type": "scale-slider",
//           "min": 0,
//           "max": 10
//         },
//         {
//           "name": "vas_annoyance_severity",
//           "label": "Annoyance Severity",
//           "type": "score-box"
//         },
//         {
//           "name": "vas_awareness",
//           "label": "Tinnitus Awareness - How much of the time are you aware of your tinnitus?",
//           "type": "scale-slider",
//           "min": 0,
//           "max": 10
//         },
//         {
//           "name": "vas_awareness_severity",
//           "label": "Awareness Severity",
//           "type": "score-box"
//         }
//       ]
//     },
//     {
//       "title": "Tinnitus Handicap Inventory (THI)",
//       "actions": [
//         {
//           "type": "toggle-show-scores"
//         }
//       ],
//       "showIf": {
//         "field": "enable_thi",
//         "equals": "yes"
//       },
//       "fields": [
//         {
//           "name": "thi_1",
//           "label": "1. Because of your tinnitus, is it difficult for you to concentrate?",
//           "type": "radio-matrix",
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "name": "thi_2",
//           "label": "2. Does the loudness of your tinnitus make it difficult for you to hear people?",
//           "type": "radio-matrix",
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "name": "thi_3",
//           "label": "3. Does your tinnitus make you angry?",
//           "type": "radio-matrix",
//           "showIf": {
//             "field": "enable_thi",
//             "equals": "es"
//           },
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "name": "thi_4",
//           "label": "4. Does your tinnitus make you confused?",
//           "type": "radio-matrix",
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "name": "thi_5",
//           "label": "5. Because of your tinnitus, do you feel desperate?",
//           "type": "radio-matrix",
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "name": "thi_6",
//           "label": "6. Do you complain a great deal about your tinnitus?",
//           "type": "radio-matrix",
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "name": "thi_7",
//           "label": "7. Because of your tinnitus, do you have trouble falling asleep at night?",
//           "type": "radio-matrix",
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "name": "thi_8",
//           "label": "8. Do you feel as though you cannot escape your tinnitus?",
//           "type": "radio-matrix",
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "name": "thi_9",
//           "label": "9. Does your tinnitus interfere with your ability to enjoy social activities?",
//           "type": "radio-matrix",
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "name": "thi_10",
//           "label": "10. Because of your tinnitus, do you feel frustrated?",
//           "type": "radio-matrix",
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "name": "thi_11",
//           "label": "11. Because of your tinnitus, do you feel that you have a terrible disease?",
//           "type": "radio-matrix",
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "name": "thi_12",
//           "label": "12. Does your tinnitus make it difficult to enjoy life?",
//           "type": "radio-matrix",
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "name": "thi_13",
//           "label": "13. Does your tinnitus interfere with your job or household responsibilities?",
//           "type": "radio-matrix",
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "name": "thi_14",
//           "label": "14. Because of your tinnitus, do you find that you are often irritable?",
//           "type": "radio-matrix",
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "name": "thi_15",
//           "label": "15. Because of your tinnitus, is it difficult for you to read?",
//           "type": "radio-matrix",
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "name": "thi_16",
//           "label": "16. Does your tinnitus make you upset?",
//           "type": "radio-matrix",
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "name": "thi_17",
//           "label": "17. Do you feel that your tinnitus has placed stress on your relationships with family and friends?",
//           "type": "radio-matrix",
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "name": "thi_18",
//           "label": "18. Do you find it difficult to focus your attention away from your tinnitus and on other things?",
//           "type": "radio-matrix",
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "name": "thi_19",
//           "label": "19. Do you feel that you have no control over your tinnitus?",
//           "type": "radio-matrix",
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "name": "thi_20",
//           "label": "20. Because of your tinnitus, do you often feel tired?",
//           "type": "radio-matrix",
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "name": "thi_21",
//           "label": "21. Because of your tinnitus, do you feel depressed?",
//           "type": "radio-matrix",
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "name": "thi_22",
//           "label": "22. Does your tinnitus make you feel anxious?",
//           "type": "radio-matrix",
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "name": "thi_23",
//           "label": "23. Do you feel that you can no longer cope with your tinnitus?",
//           "type": "radio-matrix",
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "name": "thi_24",
//           "label": "24. Does your tinnitus get worse when you are under stress?",
//           "type": "radio-matrix",
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "name": "thi_25",
//           "label": "25. Does your tinnitus make you feel insecure?",
//           "type": "radio-matrix",
//           "options": [
//             {
//               "label": "No (0)",
//               "value": 0
//             },
//             {
//               "label": "Sometimes (2)",
//               "value": 2
//             },
//             {
//               "label": "Yes (4)",
//               "value": 4
//             }
//           ]
//         },
//         {
//           "type": "info-text",
//           "text": "Scoring: No = 0, Sometimes = 2, Yes = 4"
//         },
//         {
//           "name": "thi_score",
//           "label": "THI Score",
//           "type": "score-box",
//           "showIf": {
//             "field": "enable_thi",
//             "equals": "yes"
//           }
//         },
//         {
//           "name": "thi_interpretation",
//           "label": "Interpretation",
//           "type": "score-box"
//         }
//       ]
//     },
//     {
//       "title": "Tinnitus Functional Index (TFI)",
//       "showIf": {
//         "field": "enable_tfi",
//         "equals": "yes"
//       },
//       "fields": [
//         {
//           "type": "info-text",
//           "text": "0 = none, 10 = worst possible"
//         },
//         {
//           "name": "tfi_1",
//           "label": "1. What percentage of your time awake were you consciously aware of your tinnitus?",
//           "type": "scale-slider",
//           "min": 0,
//           "max": 10
//         },
//         {
//           "name": "tfi_2",
//           "label": "2. How strong or loud was your tinnitus on average?",
//           "type": "scale-slider",
//           "min": 0,
//           "max": 10
//         },
//         {
//           "name": "tfi_3",
//           "label": "3. What percentage of your time awake were you annoyed by your tinnitus?",
//           "type": "scale-slider",
//           "min": 0,
//           "max": 10
//         },
//         {
//           "name": "tfi_4",
//           "label": "4. How easy was it for you to ignore your tinnitus?",
//           "type": "scale-slider",
//           "min": 0,
//           "max": 10
//         },
//         {
//           "name": "tfi_5",
//           "label": "5. How much control do you feel you have over your tinnitus?",
//           "type": "scale-slider",
//           "min": 0,
//           "max": 10
//         },
//         {
//           "name": "tfi_6",
//           "label": "6. How often did your tinnitus make it difficult to concentrate?",
//           "type": "scale-slider",
//           "min": 0,
//           "max": 10
//         },
//         {
//           "name": "tfi_7",
//           "label": "7. How often did your tinnitus make it difficult to think clearly?",
//           "type": "scale-slider",
//           "min": 0,
//           "max": 10
//         },
//         {
//           "name": "tfi_8",
//           "label": "8. How often did your tinnitus disturb your sleep?",
//           "type": "scale-slider",
//           "min": 0,
//           "max": 10
//         },
//         {
//           "name": "tfi_9",
//           "label": "9. How often did your tinnitus make it difficult to fall asleep?",
//           "type": "scale-slider",
//           "min": 0,
//           "max": 10
//         },
//         {
//           "name": "tfi_10",
//           "label": "10. How often did your tinnitus make it difficult to stay asleep?",
//           "type": "scale-slider",
//           "min": 0,
//           "max": 10
//         },
//         {
//           "name": "tfi_11",
//           "label": "11. How much did your tinnitus interfere with your ability to hear clearly?",
//           "type": "scale-slider",
//           "min": 0,
//           "max": 10
//         },
//         {
//           "name": "tfi_12",
//           "label": "12. How much did your tinnitus interfere with understanding people's voices?",
//           "type": "scale-slider",
//           "min": 0,
//           "max": 10
//         },
//         {
//           "name": "tfi_13",
//           "label": "13. How much did your tinnitus interfere with enjoyment of music or TV?",
//           "type": "scale-slider",
//           "min": 0,
//           "max": 10
//         },
//         {
//           "name": "tfi_14",
//           "label": "14. How much did your tinnitus interfere with your ability to relax?",
//           "type": "scale-slider",
//           "min": 0,
//           "max": 10
//         },
//         {
//           "name": "tfi_15",
//           "label": "15. How much did your tinnitus stress you out?",
//           "type": "scale-slider",
//           "min": 0,
//           "max": 10
//         },
//         {
//           "name": "tfi_16",
//           "label": "16. How much did your tinnitus interfere with social activities?",
//           "type": "scale-slider",
//           "min": 0,
//           "max": 10
//         },
//         {
//           "name": "tfi_17",
//           "label": "17. How often did your tinnitus make you feel irritable?",
//           "type": "scale-slider",
//           "min": 0,
//           "max": 10
//         },
//         {
//           "name": "tfi_18",
//           "label": "18. How much did your tinnitus interfere with enjoyment of life?",
//           "type": "scale-slider",
//           "min": 0,
//           "max": 10
//         },
//         {
//           "name": "tfi_19",
//           "label": "19. How anxious did you feel because of your tinnitus?",
//           "type": "scale-slider",
//           "min": 0,
//           "max": 10
//         },
//         {
//           "name": "tfi_20",
//           "label": "20. How depressed did you feel because of your tinnitus?",
//           "type": "scale-slider",
//           "min": 0,
//           "max": 10
//         },
//         {
//           "name": "tfi_21",
//           "label": "21. How hopeless did you feel because of your tinnitus?",
//           "type": "scale-slider",
//           "min": 0,
//           "max": 10
//         },
//         {
//           "name": "tfi_score",
//           "label": "TFI Score",
//           "type": "score-box"
//         },
//         {
//           "name": "tfi_severity_level",
//           "label": "Severity Level",
//           "type": "score-box"
//         },
//         {
//           "name": "tfi_interpretation",
//           "label": "Interpretation",
//           "type": "score-box"
//         },
//         {
//           "sections": [
//             {
//               "title": null,
//               "fields": [
//                 {
//                   "type": "subheading",
//                   "label": "Lifestyle & Functional Impact (Tinnitus)"
//                 },
//                 {
//                   "name": "sleep",
//                   "label": "Sleep Quality",
//                   "type": "input"
//                 },
//                 {
//                   "name": "concentration",
//                   "label": "Concentration / Attention",
//                   "type": "input"
//                 },
//                 {
//                   "name": "stress",
//                   "label": "Stress Level",
//                   "type": "input"
//                 },
//                 {
//                   "name": "functioning",
//                   "label": "Daily Functioning",
//                   "type": "input"
//                 },
//                 {
//                   "name": "sound",
//                   "label": "Use of Hearing Aids / Sound Therapy",
//                   "type": "input"
//                 },
//                 {
//                   "type": "subheading",
//                   "label": "Counseling Summary",
//                   "showIf": {
//                     "field": "mode",
//                     "equals": "followup"
//                   }
//                 },
//                 {
//                   "name": "understanding",
//                   "label": "Client's Understanding Of Tinnitus",
//                   "type": "input",
//                   "showIf": {
//                     "field": "mode",
//                     "equals": "followup"
//                   }
//                 },
//                 {
//                   "name": "recommendations",
//                   "label": "Recommendations",
//                   "type": "input",
//                   "showIf": {
//                     "field": "mode",
//                     "equals": "followup"
//                   }
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "title": "Counseling Summary",
//       "showIf": {
//         "field": "mode",
//         "equals": "followup"
//       },
//       "fields": [
//         {
//           "name": "understanding",
//           "label": "Client's Understanding Of Tinnitus",
//           "type": "input"
//         },
//         {
//           "name": "recommendations",
//           "label": "Recommendations",
//           "type": "input"
//         }
//       ]
//     }
//   ]
// }

// const schema = {
//   "title": "Tinnitus Assessment",
//   "actions": [
//     {
//       "type": "back",
//       "label": "Back"
//     }
//   ],
//   "sections": [
//     {
//       "title": null,
//       "fields": [
//         {
//           "type": "accordion",
//           "name": "tinnitus_section",
//           "label": "Tinnitus Psychoacoustic Measurements",
//           "defaultOpen": false,
//           "children": [
//             {
//               "name": "psychoacoustic_fields",
//               "label": "Select Measurements",
//               "type": "checkbox-group",
//               "options": [
//                 {
//                   "label": "Pitch Matching",
//                   "value": "pitch"
//                 },
//                 {
//                   "label": "Loudness Matching",
//                   "value": "loudness"
//                 },
//                 {
//                   "label": "Minimum Masking Level (MML)",
//                   "value": "mml"
//                 },
//                 {
//                   "label": "Residual Inhibition",
//                   "value": "ri"
//                 },
//                 {
//                   "label": "Loudness Discomfort Level (LDL)",
//                   "value": "ldl"
//                 }
//               ]
//             },
//             {
//               "type": "refraction-12col",
//               "name": "tinnitus_matrix",
//               "cornerLabel": "",
//               "cornerLikeGroupHeader": false,
//               "showColumnHeaders": true,
//               "groups": [
//                 {
//                   "label": "",
//                   "columns": [
//                     {
//                       "key": "Right Ear"
//                     },
//                     {
//                       "key": "Left Ear"
//                     }
//                   ]
//                 }
//               ],
//               "rows": [
//                 {
//                   "value": "pitch",
//                   "label": "Pitch Matching (Hz)",
//                   "showIf": {
//                     "field": "psychoacoustic_fields",
//                     "includes": "pitch"
//                   },
//                   "columns": [
//                     {
//                       "type": "input"
//                     },
//                     {
//                       "type": "input"
//                     }
//                   ]
//                 },
//                 {
//                   "value": "loudness",
//                   "label": "Loudness Matching (dB HL)",
//                   "showIf": {
//                     "field": "psychoacoustic_fields",
//                     "includes": "loudness"
//                   },
//                   "columns": [
//                     {
//                       "type": "input"
//                     },
//                     {
//                       "type": "input"
//                     }
//                   ]
//                 },
//                 {
//                   "value": "mml",
//                   "label": "Minimum Masking Level (MML) (dB HL)",
//                   "showIf": {
//                     "field": "psychoacoustic_fields",
//                     "includes": "mml"
//                   },
//                   "columns": [
//                     {
//                       "type": "input"
//                     },
//                     {
//                       "type": "input"
//                     }
//                   ]
//                 },
//                 {
//                   "value": "ri",
//                   "label": "Residual Inhibition",
//                   "showIf": {
//                     "field": "psychoacoustic_fields",
//                     "includes": "ri"
//                   },
//                   "columns": [
//                     {
//                       "type": "input"
//                     },
//                     {
//                       "type": "input"
//                     }
//                   ]
//                 },
//                 {
//                   "value": "ldl",
//                   "label": "Loudness Discomfort Level (LDL)",
//                   "showIf": {
//                     "field": "psychoacoustic_fields",
//                     "includes": "ldl"
//                   },
//                   "columns": [
//                     {
//                       "type": "input"
//                     },
//                     {
//                       "type": "input"
//                     }
//                   ]
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "type": "subheading",
//           "label": "Special Test"
//         },
//         {
//           "name": "special_test",
//           "label": "Details",
//           "type": "input"
//         },
//         {
//           "type": "accordion",
//           "name": "intervention_section",
//           "label": "Interventions",
//           "defaultOpen": false,
//           "children": [
//             {
//               "type": "refraction-12col",
//               "name": "intervention_matrix",
//               "cornerLabel": "",
//               "cornerLikeGroupHeader": false,
//               "showColumnHeaders": true,
//               "groups": [
//                 {
//                   "label": "",
//                   "columns": [
//                     {
//                       "key": "Yes / No"
//                     },
//                     {
//                       "key": "Remarks"
//                     }
//                   ]
//                 }
//               ],
//               "rows": [
//                 {
//                   "value": "trt",
//                   "label": "Tinnitus Retraining Therapy",
//                   "columns": [
//                     {
//                       "type": "select",
//                       "options": [
//                         {
//                           "label": "No",
//                           "value": 0
//                         },
//                         {
//                           "label": "Yes",
//                           "value": 1
//                         }
//                       ]
//                     },
//                     {
//                       "type": "input"
//                     }
//                   ]
//                 },
//                 {
//                   "value": "sound",
//                   "label": "Sound Therapy",
//                   "columns": [
//                     {
//                       "type": "select",
//                       "options": [
//                         {
//                           "label": "No",
//                           "value": 0
//                         },
//                         {
//                           "label": "Yes",
//                           "value": 1
//                         }
//                       ]
//                     },
//                     {
//                       "type": "input"
//                     }
//                   ]
//                 },
//                 {
//                   "value": "hearing_aid",
//                   "label": "Hearing Aids / Assistive Devices",
//                   "columns": [
//                     {
//                       "type": "select",
//                       "options": [
//                         {
//                           "label": "No",
//                           "value": 0
//                         },
//                         {
//                           "label": "Yes",
//                           "value": 1
//                         }
//                       ]
//                     },
//                     {
//                       "type": "input"
//                     }
//                   ]
//                 },
//                 {
//                   "value": "counselling",
//                   "label": "Counselling",
//                   "columns": [
//                     {
//                       "type": "select",
//                       "options": [
//                         {
//                           "label": "No",
//                           "value": 0
//                         },
//                         {
//                           "label": "Yes",
//                           "value": 1
//                         }
//                       ]
//                     },
//                     {
//                       "type": "input"
//                     }
//                   ]
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }