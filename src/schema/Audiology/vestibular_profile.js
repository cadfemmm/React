const mainSchema = {
   "title":"Additional Vestibular Profile",
   "actions":[
      {
         "type":"back",
         "label":"Back"
      }
   ],
   "sections":[
      {
         "title":null,
         "fields":[
            {
               "type":"subheading",
               "label":"Case History (Vestibular)"
            },
            {
               "type":"info-text",
               "label":"1. Symptoms"
            },
            {
               "name":"vertigo",
               "label":"Vertigo / Spinning",
               "type":"radio",
               "options":[
                  "No",
                  "Yes"
               ]
            },
            {
               "name":"vertigo_details",
               "label":"Please specify",
               "type":"input",
               "showIf":{
                  "field":"vertigo",
                  "equals":"Yes"
               }
            },
            {
               "name":"dizziness",
               "label":"Dizziness / Spatial disorientation",
               "type":"radio",
               "options":[
                  "No",
                  "Yes"
               ]
            },
            {
               "name":"dizziness_details",
               "label":"Please specify",
               "type":"input",
               "showIf":{
                  "field":"dizziness",
                  "equals":"Yes"
               }
            },
            {
               "name":"postural",
               "label":"Postural symptoms",
               "type":"checkbox-group",
               "options":[
                  {
                     "label":"None",
                     "value":"none"
                  },
                  {
                     "label":"Postural instability / unsteadiness",
                     "value":"Postural instability / unsteadiness"
                  },
                  {
                     "label":"Falls",
                     "value":"Falls"
                  },
                  {
                     "label":"Near falls",
                     "value":"Near falls"
                  },
                  {
                     "label":"Directional pulsion",
                     "value":"Directional pulsion"
                  }
               ]
            },
            {
               "name":"postural_details",
               "label":"Please specify",
               "type":"input",
               "showIf":{
                  "field":"postural",
                  "includes":"none"
               }
            },
            {
               "name":"visual",
               "label":"Visuo-vestibular symptoms",
               "type":"checkbox-group",
               "options":[
                  {
                     "label":"None",
                     "value":"none"
                  },
                  {
                     "label":"Visual tilt",
                     "value":"Visual tilt"
                  },
                  {
                     "label":"Visual lag",
                     "value":"Visual lag"
                  },
                  {
                     "label":"Oscillopsia",
                     "value":"Oscillopsia"
                  },
                  {
                     "label":"Movement induced blur",
                     "value":"Movement induced blur"
                  }
               ]
            },
            {
               "name":"visual_details",
               "label":"Please specify",
               "type":"input",
               "showIf":{
                  "field":"visual",
                  "includes":"none"
               }
            },
            {
               "type":"info-text",
               "label":"2. Triggers"
            },
            {
               "name":"situational",
               "label":"Situational",
               "type":"checkbox-group",
               "options":[
                  {
                     "label":"None",
                     "value":"none"
                  },
                  {
                     "label":"Stress",
                     "value":"Stress"
                  },
                  {
                     "label":"Missed sleep",
                     "value":"Missed sleep"
                  },
                  {
                     "label":"Smells",
                     "value":"Smells"
                  },
                  {
                     "label":"Sunlight",
                     "value":"Sunlight"
                  },
                  {
                     "label":"Hunger",
                     "value":"Hunger"
                  },
                  {
                     "label":"Foods",
                     "value":"Foods"
                  },
                  {
                     "label":"Fatigue",
                     "value":"Fatigue"
                  },
                  {
                     "label":"Travel",
                     "value":"Travel"
                  },
                  {
                     "label":"Others",
                     "value":"Others"
                  }
               ]
            },
            {
               "name":"situational_details",
               "label":"Specify",
               "type":"input",
               "showIf":{
                  "field":"situational",
                  "includes":"Others"
               }
            },
            {
               "name":"situational_details",
               "label":"Specify",
               "type":"input",
               "showIf":{
                  "field":"situational",
                  "notEmpty":true
               }
            },
            {
               "name":"third_window",
               "label":"Third window",
               "type":"checkbox-group",
               "options":[
                  {
                     "label":"None",
                     "value":"none"
                  },
                  {
                     "label":"Loud sounds",
                     "value":"Loud sounds"
                  },
                  {
                     "label":"Laughing",
                     "value":"Laughing"
                  },
                  {
                     "label":"Lifting weight",
                     "value":"Lifting weight"
                  },
                  {
                     "label":"Coughing",
                     "value":"Coughing"
                  },
                  {
                     "label":"Blowing nose",
                     "value":"Blowing nose"
                  },
                  {
                     "label":"Straining",
                     "value":"Straining"
                  },
                  {
                     "label":"Others",
                     "value":"Others"
                  }
               ]
            },
            {
               "name":"third_window_details",
               "label":"Specify",
               "type":"input",
               "showIf":{
                  "field":"third_window",
                  "notEmpty":true
               }
            },
            {
               "name":"third_window_details",
               "label":"Specify",
               "type":"input",
               "showIf":{
                  "field":"third_window",
                  "includes":"Others"
               }
            },
            {
               "name":"movement",
               "label":"Movement",
               "type":"checkbox-group",
               "options":[
                  {
                     "label":"None",
                     "value":"none"
                  },
                  {
                     "label":"Bending over",
                     "value":"Bending over"
                  },
                  {
                     "label":"Lying down",
                     "value":"Lying down"
                  },
                  {
                     "label":"Getting up from bed",
                     "value":"Getting up from bed"
                  },
                  {
                     "label":"Fast movement R/L",
                     "value":"Fast movement R/L"
                  },
                  {
                     "label":"Looking up",
                     "value":"Looking up"
                  },
                  {
                     "label":"Rolling in bed",
                     "value":"Rolling in bed"
                  },
                  {
                     "label":"Getting up from sitting",
                     "value":"Getting up from sitting"
                  },
                  {
                     "label":"Turning head R/L",
                     "value":"Turning head R/L"
                  },
                  {
                     "label":"Others",
                     "value":"Others"
                  }
               ]
            },
            {
               "name":"movement_details",
               "label":"Specify",
               "type":"input",
               "showIf":{
                  "field":"movement",
                  "notEmpty":true
               }
            },
            {
               "name":"movement_details",
               "label":"Specify",
               "type":"input",
               "showIf":{
                  "field":"movement",
                  "includes":"Others"
               }
            },
            {
               "name":"environmental",
               "label":"Environmental",
               "type":"checkbox-group",
               "options":[
                  {
                     "label":"None",
                     "value":"none"
                  },
                  {
                     "label":"Open spaces",
                     "value":"Open spaces"
                  },
                  {
                     "label":"Heights",
                     "value":"Heights"
                  },
                  {
                     "label":"Darkness",
                     "value":"Darkness"
                  },
                  {
                     "label":"Crowded places",
                     "value":"Crowded places"
                  },
                  {
                     "label":"Shopping malls",
                     "value":"Shopping malls"
                  },
                  {
                     "label":"Uneven ground",
                     "value":"Uneven ground"
                  },
                  {
                     "label":"Others",
                     "value":"Others"
                  }
               ]
            },
            {
               "name":"environmental_details",
               "label":"Specify",
               "type":"input",
               "showIf":{
                  "field":"environmental",
                  "notEmpty":true
               }
            },
            {
               "type":"info-text",
               "label":"3. Duration"
            },
            {
               "name":"duration",
               "label":"Episode duration",
               "type":"checkbox-group",
               "options":[
                  {
                     "label":"<10s",
                     "value":"<10s"
                  },
                  {
                     "label":"10s-1min",
                     "value":"10s-1min"
                  },
                  {
                     "label":"1-5min",
                     "value":"1-5min"
                  },
                  {
                     "label":"30min-12h",
                     "value":"30min-12h"
                  },
                  {
                     "label":"12-72h",
                     "value":"12-72h"
                  },
                  {
                     "label":"Weeks",
                     "value":"weeks"
                  },
                  {
                     "label":">3 days-<1 week",
                     "value":"3d_1w"
                  },
                  {
                     "label":"Months",
                     "value":"months"
                  }
               ]
            },
            {
               "type":"info-text",
               "label":"4. Onset"
            },
            {
               "name":"onset_date",
               "label":"  Duration",
               "type":"input"
            },
            {
               "name":"onset_after",
               "label":"Prior condition",
               "type":"checkbox-group",
               "options":[
                  {
                     "label":"None",
                     "value":"none"
                  },
                  {
                     "label":"Severe vertigo",
                     "value":"severe_vertigo"
                  },
                  {
                     "label":"Trauma",
                     "value":"trauma"
                  },
                  {
                     "label":"Immobilization",
                     "value":"immobilization"
                  },
                  {
                     "label":"Surgery",
                     "value":"surgery"
                  },
                  {
                     "label":"None",
                     "value":"none"
                  },
                  {
                     "label":"Medication",
                     "value":"medication"
                  },
                  {
                     "label":"New diagnosis",
                     "value":"new_diagnosis"
                  },
                  {
                     "label":"Fever",
                     "value":"fever"
                  },
                  {
                     "label":"Others",
                     "value":"other"
                  }
               ]
            },
            {
               "name":"onset_after_details",
               "label":"Specify",
               "type":"input",
               "showIf":{
                  "field":"onset_after",
                  "notEmpty":true
               }
            },
            {
               "type":"info-text",
               "label":"5. Frequency"
            },
            {
               "name":"frequency",
               "label":"Symptom frequency",
               "type":"checkbox-group",
               "options":[
                  {
                     "label":"None",
                     "value":"none"
                  },
                  {
                     "label":"Only once",
                     "value":"once"
                  },
                  {
                     "label":"Several times/day",
                     "value":"several_per_day"
                  },
                  {
                     "label":"Daily (intermittent)",
                     "value":"daily_intermittent"
                  },
                  {
                     "label":"Continuous",
                     "value":"continuous"
                  },
                  {
                     "label":"Variable symptom-free period",
                     "value":"variable_free"
                  },
                  {
                     "label":"Only with trigger",
                     "value":"trigger_only"
                  },
                  {
                     "label":"Daily",
                     "value":"daily"
                  },
                  {
                     "label":"Weekly",
                     "value":"weekly"
                  },
                  {
                     "label":"Several years",
                     "value":"years"
                  },
                  {
                     "label":"Continuous with worsening",
                     "value":"worsening"
                  },
                  {
                     "label":"Others",
                     "value":"other"
                  }
               ]
            },
            {
               "name":"frequency_details",
               "label":"Specify",
               "type":"input",
               "showIf":{
                  "field":"frequency",
                  "notEmpty":true
               }
            },
            {
               "type":"info-text",
               "label":"6. Evolution"
            },
            {
               "name":"evolution",
               "label":"Symptom evolution",
               "type":"checkbox-group",
               "options":[
                  {
                     "label":"None",
                     "value":"none"
                  },
                  {
                     "label":"Worst initially then improving",
                     "value":"initial_worst_improving"
                  },
                  {
                     "label":"Worsening day by day",
                     "value":"worsening_daily"
                  },
                  {
                     "label":"Severe during attacks only",
                     "value":"attack_only"
                  },
                  {
                     "label":"Stable with little fluctuation",
                     "value":"stable"
                  },
                  {
                     "label":"Others",
                     "value":"other"
                  }
               ]
            },
            {
               "name":"evolution_details",
               "label":"Specify",
               "type":"input",
               "showIf":{
                  "field":"evolution",
                  "notEmpty":true
               }
            },
            {
               "type":"info-text",
               "label":"7. Otological"
            },
            {
               "name":"hearing",
               "label":"Hearing loss",
               "type":"input"
            },
            {
               "name":"ear_pressure",
               "label":"Ear pressure / fullness",
               "type":"radio",
               "options":[
                  "No",
                  "Right",
                  "Left",
                  "Bilateral"
               ]
            },
            {
               "name":"vesicles",
               "label":"Vesicles in or around ear",
               "type":"radio",
               "options":[
                  "No",
                  "Right",
                  "Left",
                  "Bilateral"
               ]
            },
            {
               "name":"paresthesia",
               "label":"Paresthesia",
               "type":"radio",
               "options":[
                  "No",
                  "Right",
                  "Left",
                  "Bilateral"
               ]
            },
            {
               "name":"tinnitus",
               "label":"Tinnitus",
               "type":"radio",
               "options":[
                  "No",
                  "Right",
                  "Left",
                  "Bilateral"
               ]
            },
            {
               "name":"ear_pain",
               "label":"Pain in or around ear",
               "type":"radio",
               "options":[
                  "No",
                  "Right",
                  "Left",
                  "Bilateral"
               ]
            },
            {
               "name":"ear_discharge",
               "label":"Ear discharge",
               "type":"radio",
               "options":[
                  "No",
                  "Right",
                  "Left",
                  "Bilateral"
               ]
            },
            {
               "name":"autophony",
               "label":"Autophony",
               "type":"radio",
               "options":[
                  "No",
                  "Right",
                  "Left",
                  "Bilateral"
               ]
            },
            {
               "type":"info-text",
               "label":"8. Neurological"
            },
            {
               "name":"headache",
               "label":"Headache",
               "type":"radio",
               "options":[
                  "No",
                  "Yes"
               ]
            },
            {
               "name":"facial_weakness",
               "label":"Facial weakness",
               "type":"radio",
               "options":[
                  "No",
                  "Yes"
               ]
            },
            {
               "name":"photophobia",
               "label":"Photophobia",
               "type":"radio",
               "options":[
                  "No",
                  "Yes"
               ]
            },
            {
               "name":"facial_numbness",
               "label":"Facial numbness",
               "type":"radio",
               "options":[
                  "No",
                  "Yes"
               ]
            },
            {
               "name":"diplopia",
               "label":"Diplopia",
               "type":"radio",
               "options":[
                  "No",
                  "Yes"
               ]
            },
            {
               "name":"neuro_other",
               "label":"Others",
               "type":"input"
            },
            {
               "type":"info-text",
               "label":"9. Others"
            },
            {
               "name":"meds",
               "label":"Current medications",
               "type":"input"
            },
            {
               "name":"conditions",
               "label":"Concurrent medical conditions",
               "type":"checkbox-group",
               "options":[
                  {
                     "label":"Diabetes",
                     "value":"Diabetes"
                  },
                  {
                     "label":"Hypertension",
                     "value":"Hypertension"
                  },
                  {
                     "label":"Dyslipidemia",
                     "value":"Dyslipidemia"
                  },
                  {
                     "label":"Others",
                     "value":"Others"
                  }
               ]
            },
            {
               "name":"conditions_details",
               "label":"Specify",
               "type":"input",
               "showIf":{
                  "field":"conditions",
                  "includes":"Others"
               }
            },
            {
               "name":"improved_meds",
               "label":"Which medicine improved symptoms?",
               "type":"input"
            },
            {
               "type":"subheading",
               "label":"Scales"
            },
            {
               "name":"enable_dhi",
               "label":"Dizziness Handicap Inventory (DHI)",
               "type":"radio",
               "options":[
                  "Yes",
                  "No"
               ]
            },
            {
               "name":"enable_vvas",
               "label":"Visual Vertigo Analogue Score (VVAS)",
               "type":"radio",
               "options":[
                  "Yes",
                  "No"
               ]
            },
            {
               "name":"enable_vhq",
               "label":"Vertigo Handicap Questionnaire (VHQ)",
               "type":"radio",
               "options":[
                  "Yes",
                  "No"
               ]
            },
            {
               "name":"enable_mvvss",
               "label":"Malay Version Vertigo Symptom Scale (MVVSS)",
               "type":"radio",
               "options":[
                  "Yes",
                  "No"
               ]
            }
         ]
      }
   ]
}
const schema = {
  "title": "Vestibular Assessment",
  "actions": [
    {
      "type": "back",
      "label": "Back"
    }
  ],
  "sections": [
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "saccade_section",
          "label": "Videonystagmography Saccade",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "saccade_matrix",
              "cornerLabel": "",
              "cornerLikeGroupHeader": false,
              "showColumnHeaders": true,
              "showGroupHeaders": true,
              "groups": [
                {
                  "label": "Horizontal",
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    }
                  ]
                },
                {
                  "label": "Vertical",
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "velocity",
                  "label": "Velocity",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "precision",
                  "label": "Precision",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "latency",
                  "label": "Latency",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                }
              ]
            },
            {
              "name": "saccade_impression",
              "label": "Impression",
              "type": "input"
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "smooth_section",
          "label": "Videonystagmography Smooth Pursuit",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "smooth_matrix",
              "cornerLabel": "",
              "cornerLikeGroupHeader": false,
              "showColumnHeaders": true,
              "showGroupHeaders": true,
              "groups": [
                {
                  "label": "Horizontal",
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    }
                  ]
                },
                {
                  "label": "Vertical",
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "velocity",
                  "label": "Velocity",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "precision",
                  "label": "Precision",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                }
              ]
            },
            {
              "name": "smooth_impression",
              "label": "Impression",
              "type": "input"
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "opto_lr_section",
          "label": "Optokinetic Test - Left to Right",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "opto_lr_matrix",
              "cornerLabel": "",
              "cornerLikeGroupHeader": false,
              "showColumnHeaders": true,
              "groups": [
                {
                  "label": "",
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    },
                    {
                      "key": "Impression"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "gain",
                  "label": "Gain",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "fast_phase",
                  "label": "Fast Phase Direction",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "opto_rl_section",
          "label": "Optokinetic Test - Right to Left",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "opto_rl_matrix",
              "cornerLabel": "",
              "cornerLikeGroupHeader": false,
              "showColumnHeaders": true,
              "groups": [
                {
                  "label": "",
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    },
                    {
                      "key": "Impression"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "velocity",
                  "label": "Velocity",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "precision",
                  "label": "Precision",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "opto_vertical_section",
          "label": "Optokinetic Test - Vertical",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "opto_vertical_matrix",
              "cornerLabel": "",
              "cornerLikeGroupHeader": false,
              "showColumnHeaders": true,
              "showGroupHeaders": true,
              "groups": [
                {
                  "label": "Top to Bottom",
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    }
                  ]
                },
                {
                  "label": "Bottom to Top",
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "velocity",
                  "label": "Velocity",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "precision",
                  "label": "Precision",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                }
              ]
            },
            {
              "name": "opto_vertical_impression",
              "label": "Impression",
              "type": "input"
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "nystagmus_light_section",
          "label": "Nystagmus: Spontaneous in Light",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "nystagmus_light_matrix",
              "cornerLabel": "",
              "cornerLikeGroupHeader": false,
              "showColumnHeaders": true,
              "showGroupHeaders": true,
              "groups": [
                {
                  "label": "Horizontal",
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    }
                  ]
                },
                {
                  "label": "Vertical",
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "spv",
                  "label": "Slow Phase Velocity",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "amp",
                  "label": "Amplitude",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                }
              ]
            },
            {
              "name": "nystagmus_light_impression",
              "label": "Impression",
              "type": "input"
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "nystagmus_dark_section",
          "label": "Nystagmus: Spontaneous in Dark",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "nystagmus_dark_matrix",
              "cornerLabel": "",
              "cornerLikeGroupHeader": false,
              "showColumnHeaders": true,
              "showGroupHeaders": true,
              "groups": [
                {
                  "label": "Horizontal",
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    }
                  ]
                },
                {
                  "label": "Vertical",
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "spv",
                  "label": "Slow Phase Velocity",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "amp",
                  "label": "Amplitude",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                }
              ]
            },
            {
              "name": "nystagmus_dark_impression",
              "label": "Impression",
              "type": "input"
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "headshake_section",
          "label": "High Frequency Head Shake",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "headshake_matrix",
              "cornerLabel": "",
              "cornerLikeGroupHeader": false,
              "showColumnHeaders": true,
              "showGroupHeaders": true,
              "groups": [
                {
                  "label": "Horizontal",
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    }
                  ]
                },
                {
                  "label": "Vertical",
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "spv",
                  "label": "Slow Phase Velocity",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "amp",
                  "label": "Amplitude",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                }
              ]
            },
            {
              "name": "headshake_impression",
              "label": "Impression",
              "type": "input"
            }
          ]
        }
      ]
    },
    {
      "title": "Nystagmus - Others",
      "fields": [
        {
          "type": "row",
          "cols": 2,
          "fields": [
            {
              "name": "nystagmus_other_test",
              "label": "Test",
              "type": "input"
            },
            {
              "name": "nystagmus_other_impression",
              "label": "Impression",
              "type": "input"
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "gaze_center_section",
          "label": "Gaze Test: Centre With Fixation",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "gaze_center_matrix",
              "cornerLabel": "",
              "cornerLikeGroupHeader": false,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    },
                    {
                      "key": "Impression"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "h_spv",
                  "label": "Horizontal - Slow Phase Velocity",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "h_amp",
                  "label": "Horizontal - Amplitude",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "v_spv",
                  "label": "Vertical - Slow Phase Velocity",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "v_amp",
                  "label": "Vertical - Amplitude",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "gaze_left_right_section",
          "label": "Gaze Test: Left / Right With Fixation",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "gaze_left_right_matrix",
              "cornerLabel": "",
              "cornerLikeGroupHeader": false,
              "showColumnHeaders": true,
              "showGroupHeaders": true,
              "groups": [
                {
                  "label": "Horizontal",
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    }
                  ]
                },
                {
                  "label": "Vertical",
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "spv",
                  "label": "Slow Phase Velocity",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "amp",
                  "label": "Amplitude",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                }
              ]
            },
            {
              "name": "gaze_left_right_impression",
              "label": "Impression",
              "type": "input"
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "gaze_up_down_section",
          "label": "Gaze Test: Up / Down With Fixation",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "gaze_up_down_matrix",
              "cornerLabel": "",
              "cornerLikeGroupHeader": false,
              "showColumnHeaders": true,
              "showGroupHeaders": true,
              "groups": [
                {
                  "label": "Horizontal",
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    }
                  ]
                },
                {
                  "label": "Vertical",
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "spv",
                  "label": "Slow Phase Velocity",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "amp",
                  "label": "Amplitude",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                }
              ]
            },
            {
              "name": "gaze_up_down_impression",
              "label": "Impression",
              "type": "input"
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "gaze_center_without_section",
          "label": "Gaze Test: Centre Without Fixation",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "gaze_center_without_matrix",
              "cornerLabel": "",
              "cornerLikeGroupHeader": false,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    },
                    {
                      "key": "Impression"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "h_spv",
                  "label": "Horizontal - Slow Phase Velocity",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "h_amp",
                  "label": "Horizontal - Amplitude",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "v_spv",
                  "label": "Vertical - Slow Phase Velocity",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "v_amp",
                  "label": "Vertical - Amplitude",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "gaze_left_right_without_section",
          "label": "Gaze Test: Left / Right Without Fixation",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "gaze_left_right_without_matrix",
              "cornerLabel": "",
              "cornerLikeGroupHeader": false,
              "showColumnHeaders": true,
              "showGroupHeaders": true,
              "groups": [
                {
                  "label": "Horizontal",
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    }
                  ]
                },
                {
                  "label": "Vertical",
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "spv",
                  "label": "Slow Phase Velocity",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "amp",
                  "label": "Amplitude",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                }
              ]
            },
            {
              "name": "gaze_left_right_without_impression",
              "label": "Impression",
              "type": "input"
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "gaze_up_down_without_section",
          "label": "Gaze Test: Up / Down Without Fixation",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "gaze_up_down_without_matrix",
              "cornerLabel": "",
              "cornerLikeGroupHeader": false,
              "showColumnHeaders": true,
              "showGroupHeaders": true,
              "groups": [
                {
                  "label": "Horizontal",
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    }
                  ]
                },
                {
                  "label": "Vertical",
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "spv",
                  "label": "Slow Phase Velocity",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "amp",
                  "label": "Amplitude",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                }
              ]
            },
            {
              "name": "gaze_up_down_without_impression",
              "label": "Impression",
              "type": "input"
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "svv_section",
          "label": "Subjective Visual Vertical",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "svv_matrix",
              "cornerLabel": "",
              "cornerLikeGroupHeader": false,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    {
                      "key": "Result"
                    },
                    {
                      "key": "Impression"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "clockwise",
                  "label": "Clockwise",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "anticlockwise",
                  "label": "Anticlockwise",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "blank",
                  "label": "Blank",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "positional_section",
          "label": "Positional Test",
          "defaultOpen": false,
          "children": [
            {
              "name": "positional_fields",
              "label": "Select Tests",
              "type": "checkbox-group",
              "options": [
                {
                  "label": "Dix Hallpike",
                  "value": "dixhallpike"
                },
                {
                  "label": "Epley Maneuver",
                  "value": "epley"
                },
                {
                  "label": "Roll Test",
                  "value": "rolltest"
                },
                {
                  "label": "Barbecue Roll Test",
                  "value": "barbecue"
                },
                {
                  "label": "Supine Straight Head Extension",
                  "value": "supine"
                },
                {
                  "label": "Semont",
                  "value": "semont"
                },
                {
                  "label": "Gufoni",
                  "value": "gufoni"
                },
                {
                  "label": "Appiani",
                  "value": "appiani"
                },
                {
                  "label": "Others",
                  "value": "others"
                }
              ]
            },
            {
              "type": "refraction-12col",
              "name": "positional_matrix",
              "cornerLabel": "",
              "cornerLikeGroupHeader": false,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    {
                      "key": "Right Side"
                    },
                    {
                      "key": "Left Side"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "dixhallpike",
                  "label": "Dix Hallpike",
                  "showIf": {
                    "field": "positional_fields",
                    "includes": "dixhallpike"
                  },
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "epley",
                  "label": "Epley Maneuver",
                  "showIf": {
                    "field": "positional_fields",
                    "includes": "epley"
                  },
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "rolltest",
                  "label": "Roll Test",
                  "showIf": {
                    "field": "positional_fields",
                    "includes": "rolltest"
                  },
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "barbecue",
                  "label": "Barbecue Roll Test",
                  "showIf": {
                    "field": "positional_fields",
                    "includes": "barbecue"
                  },
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "supine",
                  "label": "Supine Straight Head Extension",
                  "showIf": {
                    "field": "positional_fields",
                    "includes": "supine"
                  },
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "semont",
                  "label": "Semont",
                  "showIf": {
                    "field": "positional_fields",
                    "includes": "semont"
                  },
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "gufoni",
                  "label": "Gufoni",
                  "showIf": {
                    "field": "positional_fields",
                    "includes": "gufoni"
                  },
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "appiani",
                  "label": "Appiani",
                  "showIf": {
                    "field": "positional_fields",
                    "includes": "appiani"
                  },
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "others",
                  "label": "Others",
                  "showIf": {
                    "field": "positional_fields",
                    "includes": "others"
                  },
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "dva_section",
          "label": "Dynamic Visual Acuity (DVA)",
          "defaultOpen": false,
          "children": [
            {
              "name": "dva_fields",
              "label": "Select Tests",
              "type": "checkbox-group",
              "options": [
                {
                  "label": "Horizontal Left Passive",
                  "value": "horizontal_left_passive"
                },
                {
                  "label": "Horizontal Right Passive",
                  "value": "horizontal_right_passive"
                },
                {
                  "label": "Vertical Up Passive",
                  "value": "vertical_up_passive"
                },
                {
                  "label": "Vertical Down Passive",
                  "value": "vertical_down_passive"
                },
                {
                  "label": "Left Anterior Passive",
                  "value": "left_anterior_passive"
                },
                {
                  "label": "Right Anterior Passive",
                  "value": "right_anterior_passive"
                },
                {
                  "label": "Left Posterior Passive",
                  "value": "left_posterior_passive"
                },
                {
                  "label": "Right Posterior Passive",
                  "value": "right_posterior_passive"
                },
                {
                  "label": "Horizontal Left Active",
                  "value": "horizontal_left_active"
                },
                {
                  "label": "Horizontal Right Active",
                  "value": "horizontal_right_active"
                },
                {
                  "label": "Vertical Up Active",
                  "value": "vertical_up_active"
                },
                {
                  "label": "Vertical Down Active",
                  "value": "vertical_down_active"
                },
                {
                  "label": "Left Anterior Active",
                  "value": "left_anterior_active"
                },
                {
                  "label": "Right Anterior Active",
                  "value": "right_anterior_active"
                },
                {
                  "label": "Left Posterior Active",
                  "value": "left_posterior_active"
                },
                {
                  "label": "Right Posterior Active",
                  "value": "right_posterior_active"
                }
              ]
            },
            {
              "type": "subheading",
              "label": ""
            },
            {
              "type": "subheading",
              "label": "Dynamic Visual Acuity (Passive)"
            },
            {
              "name": "dva_horizontal_left_passive",
              "label": "Horizontal Left Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "horizontal_left_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_horizontal_right_passive",
              "label": "Horizontal Right Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "horizontal_right_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_vertical_up_passive",
              "label": "Vertical Up Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "vertical_up_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_vertical_down_passive",
              "label": "Vertical Down Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "vertical_down_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_left_anterior_passive",
              "label": "Left Anterior Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "left_anterior_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_right_anterior_passive",
              "label": "Right Anterior Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "right_anterior_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_left_posterior_passive",
              "label": "Left Posterior Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "left_posterior_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_right_posterior_passive",
              "label": "Right Posterior Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "right_posterior_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "type": "subheading",
              "label": "Dynamic Visual Acuity (Active)"
            },
            {
              "name": "dva_horizontal_left_active",
              "label": "Horizontal Left Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "horizontal_left_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_horizontal_right_active",
              "label": "Horizontal Right Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "horizontal_right_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_vertical_up_active",
              "label": "Vertical Up Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "vertical_up_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_vertical_down_active",
              "label": "Vertical Down Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "vertical_down_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_left_anterior_active",
              "label": "Left Anterior Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "left_anterior_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_right_posterior_active",
              "label": "Right Posterior Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "right_posterior_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_right_anterior_active",
              "label": "Right Anterior Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "right_anterior_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_left_posterior_active",
              "label": "Left Posterior Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "left_posterior_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "type": "accordion",
          "name": "gaze_section",
          "label": "Gaze Stabilization",
          "defaultOpen": false,
          "children": [
            {
              "name": "gaze_fields",
              "label": "Select Tests",
              "type": "checkbox-group",
              "options": [
                {
                  "label": "Horizontal Left Passive",
                  "value": "horizontal_left_passive"
                },
                {
                  "label": "Horizontal Right Passive",
                  "value": "horizontal_right_passive"
                },
                {
                  "label": "Vertical Up Passive",
                  "value": "vertical_up_passive"
                },
                {
                  "label": "Vertical Down Passive",
                  "value": "vertical_down_passive"
                },
                {
                  "label": "Left Anterior Passive",
                  "value": "left_anterior_passive"
                },
                {
                  "label": "Right Anterior Passive",
                  "value": "right_anterior_passive"
                },
                {
                  "label": "Left Posterior Passive",
                  "value": "left_posterior_passive"
                },
                {
                  "label": "Right Posterior Passive",
                  "value": "right_posterior_passive"
                },
                {
                  "label": "Horizontal Left Active",
                  "value": "horizontal_left_active"
                },
                {
                  "label": "Horizontal Right Active",
                  "value": "horizontal_right_active"
                },
                {
                  "label": "Vertical Up Active",
                  "value": "vertical_up_active"
                },
                {
                  "label": "Vertical Down Active",
                  "value": "vertical_down_active"
                },
                {
                  "label": "Left Anterior Active",
                  "value": "left_anterior_active"
                },
                {
                  "label": "Right Anterior Active",
                  "value": "right_anterior_active"
                },
                {
                  "label": "Left Posterior Active",
                  "value": "left_posterior_active"
                },
                {
                  "label": "Right Posterior Active",
                  "value": "right_posterior_active"
                }
              ]
            },
            {
              "type": "subheading",
              "label": ""
            },
            {
              "type": "subheading",
              "label": "Gaze Stabilization (Passive)"
            },
            {
              "name": "gaze_stab_horizontal_left_passive",
              "label": "Horizontal Left Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "horizontal_left_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_horizontal_right_passive",
              "label": "Horizontal Right Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "horizontal_right_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_vertical_up_passive",
              "label": "Vertical Up Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "vertical_up_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_vertical_down_passive",
              "label": "Vertical Down Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "vertical_down_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_left_anterior_passive",
              "label": "Left Anterior Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "left_anterior_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_right_anterior_passive",
              "label": "Right Anterior Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "right_anterior_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_left_posterior_passive",
              "label": "Left Posterior Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "left_posterior_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_right_posterior_passive",
              "label": "Right Posterior Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "right_posterior_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "type": "subheading",
              "label": "Gaze Stabilization (Active)"
            },
            {
              "name": "gaze_stab_horizontal_left_active",
              "label": "Horizontal Left Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "horizontal_left_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_horizontal_right_active",
              "label": "Horizontal Right Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "horizontal_right_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_vertical_up_active",
              "label": "Vertical Up Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "vertical_up_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_vertical_down_active",
              "label": "Vertical Down Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "vertical_down_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_left_anterior_active",
              "label": "Left Anterior Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "left_anterior_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_right_posterior_active",
              "label": "Right Posterior Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "right_posterior_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_left_posterior_active",
              "label": "Left Posterior Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "left_posterior_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_right_anterior_active",
              "label": "Right Anterior Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "right_anterior_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "vhit_section",
          "label": "Video Head Impulse Test (vHIT)",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "vhit_matrix",
              "cornerLabel": "Canal",
              "cornerLikeGroupHeader": true,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    {
                      "key": "n"
                    },
                    {
                      "key": "Mean Gain"
                    },
                    {
                      "key": "Standard Deviation"
                    },
                    {
                      "key": "Asymmetry (%)"
                    },
                    {
                      "key": "Impression"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "anterior_r",
                  "label": "Anterior Right",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "anterior_l",
                  "label": "Anterior Left",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "lateral_r",
                  "label": "Lateral Right",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "lateral_l",
                  "label": "Lateral Left",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "posterior_r",
                  "label": "Posterior Right",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "posterior_l",
                  "label": "Posterior Left",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": "Posturography",
      "fields": [
        {
          "name": "posturography_risk",
          "label": "Risk of Falling",
          "type": "radio",
          "options": [
            {
              "label": "Green (0% to 40%)",
              "value": 0
            },
            {
              "label": "Yellow (41% to 60%)",
              "value": 1
            },
            {
              "label": "Red (60% and above)",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "fga_section",
          "label": "Functional Gait Assessment",
          "defaultOpen": false,
          "children": [
            {
              "name": "fga_gait_level_surface",
              "label": "Gait Level Surface",
              "type": "radio-matrix",
              "options": [
                {
                  "label": "Normal (3)",
                  "value": 3
                },
                {
                  "label": "Mild impairment (2)",
                  "value": 2
                },
                {
                  "label": "Moderate impairment (1)",
                  "value": 1
                },
                {
                  "label": "Severe impairment (0)",
                  "value": 0
                }
              ]
            },
            {
              "name": "fga_change_in_gait_speed",
              "label": "Change in Gait Speed",
              "type": "radio-matrix",
              "options": [
                {
                  "label": "Normal (3)",
                  "value": 3
                },
                {
                  "label": "Mild impairment (2)",
                  "value": 2
                },
                {
                  "label": "Moderate impairment (1)",
                  "value": 1
                },
                {
                  "label": "Severe impairment (0)",
                  "value": 0
                }
              ]
            },
            {
              "name": "fga_gait_with_horizontal_head_turns",
              "label": "Gait with Horizontal Head Turns",
              "type": "radio-matrix",
              "options": [
                {
                  "label": "Normal (3)",
                  "value": 3
                },
                {
                  "label": "Mild impairment (2)",
                  "value": 2
                },
                {
                  "label": "Moderate impairment (1)",
                  "value": 1
                },
                {
                  "label": "Severe impairment (0)",
                  "value": 0
                }
              ]
            },
            {
              "name": "fga_gait_with_vertical_head_turns",
              "label": "Gait with Vertical Head Turns",
              "type": "radio-matrix",
              "options": [
                {
                  "label": "Normal (3)",
                  "value": 3
                },
                {
                  "label": "Mild impairment (2)",
                  "value": 2
                },
                {
                  "label": "Moderate impairment (1)",
                  "value": 1
                },
                {
                  "label": "Severe impairment (0)",
                  "value": 0
                }
              ]
            },
            {
              "name": "fga_gait_and_pivot_turn",
              "label": "Gait and Pivot Turn",
              "type": "radio-matrix",
              "options": [
                {
                  "label": "Normal (3)",
                  "value": 3
                },
                {
                  "label": "Mild impairment (2)",
                  "value": 2
                },
                {
                  "label": "Moderate impairment (1)",
                  "value": 1
                },
                {
                  "label": "Severe impairment (0)",
                  "value": 0
                }
              ]
            },
            {
              "name": "fga_step_over_obstacle",
              "label": "Step Over Obstacle",
              "type": "radio-matrix",
              "options": [
                {
                  "label": "Normal (3)",
                  "value": 3
                },
                {
                  "label": "Mild impairment (2)",
                  "value": 2
                },
                {
                  "label": "Moderate impairment (1)",
                  "value": 1
                },
                {
                  "label": "Severe impairment (0)",
                  "value": 0
                }
              ]
            },
            {
              "name": "fga_gait_with_narrow_base_of_support",
              "label": "Gait with Narrow Base of Support",
              "type": "radio-matrix",
              "options": [
                {
                  "label": "Normal (3)",
                  "value": 3
                },
                {
                  "label": "Mild impairment (2)",
                  "value": 2
                },
                {
                  "label": "Moderate impairment (1)",
                  "value": 1
                },
                {
                  "label": "Severe impairment (0)",
                  "value": 0
                }
              ]
            },
            {
              "name": "fga_gait_with_eyes_closed",
              "label": "Gait with Eyes Closed",
              "type": "radio-matrix",
              "options": [
                {
                  "label": "Normal (3)",
                  "value": 3
                },
                {
                  "label": "Mild impairment (2)",
                  "value": 2
                },
                {
                  "label": "Moderate impairment (1)",
                  "value": 1
                },
                {
                  "label": "Severe impairment (0)",
                  "value": 0
                }
              ]
            },
            {
              "name": "fga_ambulating_backward",
              "label": "Ambulating Backward",
              "type": "radio-matrix",
              "options": [
                {
                  "label": "Normal (3)",
                  "value": 3
                },
                {
                  "label": "Mild impairment (2)",
                  "value": 2
                },
                {
                  "label": "Moderate impairment (1)",
                  "value": 1
                },
                {
                  "label": "Severe impairment (0)",
                  "value": 0
                }
              ]
            },
            {
              "name": "fga_steps",
              "label": "Steps",
              "type": "radio-matrix",
              "options": [
                {
                  "label": "Normal (3)",
                  "value": 3
                },
                {
                  "label": "Mild impairment (2)",
                  "value": 2
                },
                {
                  "label": "Moderate impairment (1)",
                  "value": 1
                },
                {
                  "label": "Severe impairment (0)",
                  "value": 0
                }
              ]
            },
            {
              "name": "fga_total_display",
              "label": "**Total Score (0/30)**",
              "type": "display",
              "style": {
                "marginTop": "1rem",
                "fontWeight": "bold",
                "fontSize": "1.1em"
              }
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "cvemp_section",
          "label": "cVEMP",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "cvemp_matrix",
              "cornerLabel": "Side",
              "cornerLikeGroupHeader": true,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    {
                      "key": "N"
                    },
                    {
                      "key": "P1"
                    },
                    {
                      "key": "N1"
                    },
                    {
                      "key": "P1-N1 (%)"
                    },
                    {
                      "key": "Impression"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "right",
                  "label": "Right Ear",
                  "columns": [
                    {
                      "type": "input",
                      "name": "cvemp_right_n"
                    },
                    {
                      "type": "input",
                      "name": "cvemp_right_p1"
                    },
                    {
                      "type": "input",
                      "name": "cvemp_right_n1"
                    },
                    {
                      "type": "input",
                      "name": "cvemp_right_asym"
                    },
                    {
                      "type": "input",
                      "name": "cvemp_right_impression"
                    }
                  ]
                },
                {
                  "value": "left",
                  "label": "Left Ear",
                  "columns": [
                    {
                      "type": "input",
                      "name": "cvemp_left_n"
                    },
                    {
                      "type": "input",
                      "name": "cvemp_left_p1"
                    },
                    {
                      "type": "input",
                      "name": "cvemp_left_n1"
                    },
                    {
                      "type": "input",
                      "name": "cvemp_left_asym"
                    },
                    {
                      "type": "input",
                      "name": "cvemp_left_impression"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "ovemp_section",
          "label": "oVEMP",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "ovemp_matrix",
              "cornerLabel": "Side",
              "cornerLikeGroupHeader": true,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    {
                      "key": "N"
                    },
                    {
                      "key": "N1"
                    },
                    {
                      "key": "P1"
                    },
                    {
                      "key": "N1-P1 (%)"
                    },
                    {
                      "key": "Impression"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "right",
                  "label": "Right Ear",
                  "columns": [
                    {
                      "type": "input",
                      "name": "ovemp_right_n"
                    },
                    {
                      "type": "input",
                      "name": "ovemp_right_n1"
                    },
                    {
                      "type": "input",
                      "name": "ovemp_right_p1"
                    },
                    {
                      "type": "input",
                      "name": "ovemp_right_asym"
                    },
                    {
                      "type": "input",
                      "name": "ovemp_right_impression"
                    }
                  ]
                },
                {
                  "value": "left",
                  "label": "Left Ear",
                  "columns": [
                    {
                      "type": "input",
                      "name": "ovemp_left_n"
                    },
                    {
                      "type": "input",
                      "name": "ovemp_left_n1"
                    },
                    {
                      "type": "input",
                      "name": "ovemp_left_p1"
                    },
                    {
                      "type": "input",
                      "name": "ovemp_left_asym"
                    },
                    {
                      "type": "input",
                      "name": "ovemp_left_impression"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "subheading",
          "label": "Special Test"
        },
        {
          "name": "special_test",
          "label": "Details",
          "type": "input"
        },
        {
          "type": "accordion",
          "name": "intervention_section",
          "label": "Interventions",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "intervention_matrix",
              "cornerLabel": "Intervention",
              "cornerLikeGroupHeader": true,
              "showColumnHeaders": true,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    {
                      "key": "Yes / No"
                    },
                    {
                      "key": "Remarks"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "vre",
                  "label": "Vestibular Rehabilitation Exercises",
                  "columns": [
                    {
                      "type": "select",
                      "name": "vre_option",
                      "options": [
                        {
                          "label": "No",
                          "value": 0
                        },
                        {
                          "label": "Yes",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "type": "input",
                      "name": "vre_notes"
                    }
                  ]
                },
                {
                  "value": "crm",
                  "label": "Canalith Repositioning Maneuver",
                  "columns": [
                    {
                      "type": "select",
                      "name": "crm_option",
                      "options": [
                        {
                          "label": "No",
                          "value": 0
                        },
                        {
                          "label": "Yes",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "type": "input",
                      "name": "crm_notes"
                    }
                  ]
                },
                {
                  "value": "gst",
                  "label": "Gaze Stability Training",
                  "columns": [
                    {
                      "type": "select",
                      "name": "gst_option",
                      "options": [
                        {
                          "label": "No",
                          "value": 0
                        },
                        {
                          "label": "Yes",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "type": "input",
                      "name": "gst_notes"
                    }
                  ]
                },
                {
                  "value": "fall",
                  "label": "Fall Prevention Education",
                  "columns": [
                    {
                      "type": "select",
                      "name": "fall_option",
                      "options": [
                        {
                          "label": "No",
                          "value": 0
                        },
                        {
                          "label": "Yes",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "type": "input",
                      "name": "fall_notes"
                    }
                  ]
                },
                {
                  "value": "psycho",
                  "label": "Psychosocial Counseling",
                  "columns": [
                    {
                      "type": "select",
                      "name": "psycho_option",
                      "options": [
                        {
                          "label": "No",
                          "value": 0
                        },
                        {
                          "label": "Yes",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "type": "input",
                      "name": "psycho_notes"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default SCHEMA;


