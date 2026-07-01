const SUBJECTIVE = {
   "sections":[
      {
         "fields":[
            {
               "type":"input",
               "name":"chief_complaints",
               "label":"Chief Complaints"
            },
            {
               "type":"input",
               "name":"hpi",
               "label":"History of Present Illness (HPI)"
            }
         ]
      },
      {
         "title":"A. Prenatal and Delivery History",
         "fields":[
            {
               "type":"radio",
               "name":"length_of_pregnancy",
               "label":"Length of pregnancy",
               "options":[
                  {
                     "label":"Full term",
                     "value":"0"
                  },
                  {
                     "label":"Pre-term",
                     "value":"1"
                  }
               ]
            },
            {
               "type":"input",
               "name":"length_of_pregnancy_notes",
               "label":"",
               "showIf":{
                  "field":"length_of_pregnancy",
                  "equals":"1"
               }
            },
            {
               "type":"input",
               "name":"birth_weight",
               "label":"Birth Weight"
            },
            {
               "type":"radio",
               "name":"pregnancy_complications",
               "label":"Complication during pregnancy",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "type":"input",
               "name":"pregnancy_complications_notes",
               "label":"",
               "showIf":{
                  "field":"pregnancy_complications",
                  "equals":"1"
               }
            },
            {
               "type":"radio",
               "name":"nicu_history",
               "label":"Did the child spend any time in NICU?",
               "options":[
                  {
                     "label":"Full term",
                     "value":"0"
                  },
                  {
                     "label":"Pre-term",
                     "value":"1"
                  }
               ]
            },
            {
               "type":"input",
               "name":"nicu_notes",
               "label":"",
               "showIf":{
                  "field":"nicu_history",
                  "equals":"1"
               }
            },
            {
               "type":"input",
               "name":"apgar_score",
               "label":"APGAR Score"
            },
            {
               "type":"radio",
               "name":"prenatal_risk_factors",
               "label":"Did any of the following occur during pregnancy?",
               "labelAbove":"true",
               "options":[
                  {
                     "label":"No",
                     "value":"0"
                  },
                  {
                     "label":"Alcohol abuse",
                     "value":"1"
                  },
                  {
                     "label":"Measles / Rubella",
                     "value":"2"
                  },
                  {
                     "label":"Infections",
                     "value":"3"
                  },
                  {
                     "label":"Substance abuse",
                     "value":"4"
                  },
                  {
                     "label":"Sexually transmitted disease",
                     "value":"5"
                  },
                  {
                     "label":"Communicable diseases",
                     "value":"6"
                  },
                  {
                     "label":"Maternal illness",
                     "value":"7"
                  },
                  {
                     "label":"Rh incompatibility",
                     "value":"8"
                  },
                  {
                     "label":"Toxemia",
                     "value":"9"
                  },
                  {
                     "label":"Zika virus",
                     "value":"10"
                  },
                  {
                     "label":"Cytomegalovirus (CMV)",
                     "value":"11"
                  },
                  {
                     "label":"Maternal X-rays",
                     "value":"12"
                  },
                  {
                     "label":"Smoking",
                     "value":"13"
                  },
                  {
                     "label":"Toxoplasmosis",
                     "value":"14"
                  }
               ]
            },
            {
               "type":"input",
               "name":"prenatal_risk_notes",
               "label":"",
               "showIf":{
                  "field":"prenatal_risk_factors",
                  "exists":true
               }
            }
         ]
      },
      {
         "title":"B. Health History",
         "fields":[
            {
               "type":"checkbox-group",
               "name":"ototoxic_medications",
               "label":"Has your child taken any of the following medications?",
               "options":[
                  {
                     "label":"No",
                     "value":"0"
                  },
                  {
                     "label":"Vancomycin",
                     "value":"1"
                  },
                  {
                     "label":"Chemotherapy",
                     "value":"2"
                  },
                  {
                     "label":"Gentamycin",
                     "value":"3"
                  },
                  {
                     "label":"Streptomycin",
                     "value":"4"
                  }
               ]
            },
            {
               "type":"input",
               "name":"ototoxic_notes",
               "label":"",
               "showIf":{
                  "field":"ototoxic_medications",
                  "oneOf":[
                     "1",
                     "2",
                     "3",
                     "4"
                  ]
               }
            },
            {
               "type":"radio",
               "name":"high_fever_history",
               "label":"Has your child had a fever greater than 38 degree celcius?",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "type":"input",
               "name":"high_fever_notes",
               "label":"",
               "showIf":{
                  "field":"high_fever_history",
                  "equals":"1"
               }
            },
            {
               "type":"radio",
               "name":"hospitalisation_history",
               "label":"Has your child ever been hospitalised?",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "type":"input",
               "name":"hospitalisation_notes",
               "label":"",
               "showIf":{
                  "field":"hospitalisation_history",
                  "equals":"1"
               }
            },
            {
               "type":"radio",
               "name":"specialist_history",
               "label":"Has your child ever seen by a specialist?",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "type":"input",
               "name":"specialist_notes",
               "label":"",
               "showIf":{
                  "field":"specialist_history",
                  "equals":"1"
               }
            },
            {
               "type":"radio",
               "name":"ear_conditions",
               "label":"Has your child had any of the following?",
               "labelAbove":"true",
               "options":[
                  {
                     "label":"No",
                     "value":"0"
                  },
                  {
                     "label":"Allergies / Sinus problems",
                     "value":"1"
                  },
                  {
                     "label":"Ear infections",
                     "value":"2"
                  },
                  {
                     "label":"Draining ears",
                     "value":"3"
                  },
                  {
                     "label":"Chicken pox",
                     "value":"4"
                  },
                  {
                     "label":"Frequent colds",
                     "value":"5"
                  },
                  {
                     "label":"Head injury",
                     "value":"6"
                  },
                  {
                     "label":"Measles",
                     "value":"7"
                  },
                  {
                     "label":"Mumps",
                     "value":"8"
                  },
                  {
                     "label":"Tonsillitis",
                     "value":"9"
                  },
                  {
                     "label":"Seizures",
                     "value":"10"
                  },
                  {
                     "label":"Breathing difficulties",
                     "value":"11"
                  },
                  {
                     "label":"Flu",
                     "value":"12"
                  },
                  {
                     "label":"High fever",
                     "value":"13"
                  },
                  {
                     "label":"Meningitis",
                     "value":"14"
                  },
                  {
                     "label":"Blood transfusion",
                     "value":"15"
                  },
                  {
                     "label":"CMV",
                     "value":"16"
                  },
                  {
                     "label":"Encephalitis",
                     "value":"17"
                  },
                  {
                     "label":"Meconium aspiration",
                     "value":"18"
                  },
                  {
                     "label":"Rubella",
                     "value":"19"
                  }
               ]
            },
            {
               "type":"input",
               "name":"ear_conditions_notes",
               "label":"",
               "showIf":{
                  "field":"ear_conditions",
                  "exists":true
               }
            },
            {
               "type":"radio",
               "name":"surgical_history",
               "label":"Has your child had medical or surgical treatment of their ears? (grommet/ PE tubes)",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "type":"input",
               "name":"surgical_notes",
               "label":"",
               "showIf":{
                  "field":"surgical_history",
                  "equals":"1"
               }
            },
            {
               "type":"radio",
               "name":"pain_history",
               "label":"Does your child ever complain of pain or fullness of their ears?",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "type":"input",
               "name":"pain_notes",
               "label":"",
               "showIf":{
                  "field":"pain_history",
                  "equals":"1"
               }
            },
            {
               "type":"radio",
               "name":"noise_history",
               "label":"Has your child ever been exposed to loud noise or an explosion?",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "type":"input",
               "name":"noise_notes",
               "label":"",
               "showIf":{
                  "field":"noise_history",
                  "equals":"1"
               }
            },
            {
               "name":"noise_in_ear_history",
               "label":"Has your child ever described noises on their ears?",
               "type":"radio",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "type":"radio",
               "name":"noise_in_ear",
               "label":"In which ear you feel noise",
               "options":[
                  {
                     "label":"Rigt",
                     "value":"Right"
                  },
                  {
                     "label":"Left",
                     "value":"Left"
                  },
                  {
                     "label":"bilateral",
                     "value":"bilateral"
                  }
               ],
               "showIf":{
                  "field":"noise_in_ear_history",
                  "equals":"1"
               }
            },
            {
               "type":"radio",
               "name":"condition_history",
               "label":"Has your child been diagnoses with any specific condition?",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "type":"input",
               "name":"condition_notes",
               "label":"",
               "showIf":{
                  "field":"condition_history",
                  "equals":"1"
               }
            },
            {
               "type":"input",
               "name":"current_medications",
               "label":"List any medication your child is taking"
            }
         ]
      },
      {
         "title":"C. Developmental Milestones",
         "fields":[
            {
               "type":"subheading",
               "label":"At what age did your child:"
            },
            {
               "type":"paired-text",
               "'pairs":[
                  {
                     "name":"first_word_age",
                     "title":"a) Say their first word?"
                  },
                  {
                     "name":"three_word_sentence_age",
                     "title":"b) Speak in three word sentences?"
                  }
               ]
            },
            {
               "type":"paired-text",
               "'pairs":[
                  {
                     "name":"head_control_age",
                     "title":"c) Hold their head erect?"
                  },
                  {
                     "name":"sit_unsupported_age",
                     "title":"d) Sit unsupported?"
                  }
               ]
            },
            {
               "name":"walk_alone_age",
               "label":"e) Walk alone?",
               "type":"input"
            },
            {
               "name":"communicate_with_others",
               "label":"How does your child communicate with others?",
               "type":"input"
            },
            {
               "type":"subheading",
               "label":"How much of your child's speech can be understood?"
            },
            {
               "name":"speech_understood_family",
               "label":"Speech understood by family",
               "type":"radio",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "type":"input",
               "name":"speech_understood_family_notes",
               "label":"",
               "showIf":{
                  "field":"speech_understood_family",
                  "equals":"1"
               }
            },
            {
               "name":"speech_understood_others",
               "label":"Speech understood by others",
               "type":"radio",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "name":"speech_understood_others_notes",
               "label":"",
               "type":"input",
               "showIf":{
                  "field":"speech_understood_others",
                  "equals":"1"
               }
            },
            {
               "name":"speech_concerns",
               "label":"Do you have any concerns regarding your childs's speech?",
               "type":"radio",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "type":"input",
               "name":"speech_concerns_notes",
               "label":"",
               "showIf":{
                  "field":"speech_concerns",
                  "equals":"1"
               }
            }
         ]
      },
      {
         "title":"D. Hearing History",
         "fields":[
            {
               "type":"radio",
               "name":"hearing_loss_risk_factors",
               "label":"Factors associated with hearing loss",
               "labelAbove":"true",
               "options":[
                  {
                     "label":"None",
                     "value":"0"
                  },
                  {
                     "label":"Family history of hearing loss",
                     "value":"1"
                  },
                  {
                     "label":"Jaundice (required transfusion)",
                     "value":"2"
                  },
                  {
                     "label":"Bacterial meningitis",
                     "value":"3"
                  },
                  {
                     "label":"Pulmonary hypertension",
                     "value":"4"
                  },
                  {
                     "label":"Head trauma (hospitalisation required)",
                     "value":"5"
                  },
                  {
                     "label":"CHARGE syndrome",
                     "value":"6"
                  },
                  {
                     "label":"Down syndrome (trisomy 21)",
                     "value":"7"
                  },
                  {
                     "label":"Cleft lip and palate",
                     "value":"8"
                  },
                  {
                     "label":"Small and absent pinna/ears",
                     "value":"9"
                  },
                  {
                     "label":"Skin tag or pits around ears",
                     "value":"10"
                  },
                  {
                     "label":"Rh incompatibility",
                     "value":"11"
                  }
               ]
            },
            {
               "type":"input",
               "name":"hearing_loss_risk_notes",
               "label":"",
               "showIf":{
                  "field":"hearing_loss_risk_factors",
                  "exists":true
               }
            },
            {
               "type":"radio",
               "name":"family_member_hearing_loss",
               "label":"Do any of your other childs/ siblings or other family member have hearing loss?",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "type":"input",
               "name":"family_member_hearing_loss_notes",
               "label":"",
               "showIf":{
                  "field":"family_member_hearing_loss",
                  "equals":"1"
               }
            },
            {
               "name":"previous_hearing_test",
               "label":"Has your child had a hearing test?",
               "type":"radio",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "type":"input",
               "name":"previous_hearing_test_notes",
               "label":"",
               "showIf":{
                  "field":"previous_hearing_test",
                  "equals":"1"
               }
            },
            {
               "type":"radio",
               "name":"ear_infections",
               "label":"How many ear infections has your child had and how often?",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "type":"input",
               "name":"ear_infections_notes",
               "label":"",
               "showIf":{
                  "field":"ear_infections",
                  "equals":"1"
               }
            },
            {
               "type":"subheading",
               "label":"Does your child"
            },
            {
               "name":"responds_to_sound",
               "label":"a) Responds consistently to sound",
               "type":"radio",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "type":"input",
               "name":"responds_to_sound_notes",
               "label":"",
               "showIf":{
                  "field":"responds_to_sound",
                  "equals":"1"
               }
            },
            {
               "type":"radio",
               "name":"turns_to_sound",
               "label":"b) Turn to find sound source",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "type":"input",
               "name":"turns_to_sound_notes",
               "label":"",
               "showIf":{
                  "field":"turns_to_sound",
                  "equals":"1"
               }
            },
            {
               "type":"radio",
               "name":"enjoys_music",
               "label":"c) Enjoys listening to music",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "type":"input",
               "name":"enjoys_music_notes",
               "label":"",
               "showIf":{
                  "field":"enjoys_music",
                  "equals":"1"
               }
            },
            {
               "type":"radio",
               "name":"responds_to_name",
               "label":"d) Respond to their name",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "type":"input",
               "name":"responds_to_name_notes",
               "label":"",
               "showIf":{
                  "field":"responds_to_name",
                  "equals":"1"
               }
            },
            {
               "type":"radio",
               "name":"startle_to_loud_sound",
               "label":"e) Startle to loud sound",
               "type":"radio",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "type":"input",
               "name":"startle_to_loud_sound_notes",
               "label":"",
               "showIf":{
                  "field":"startle_to_loud_sound",
                  "equals":"1"
               }
            },
            {
               "type":"radio",
               "name":"amplification_use",
               "label":"Does your child use any amplification devices?"
            },
            {
               "type":"assessment-launcher",
               "name":"hearing_assessments_launcher",
               "label":"",
               "type":"assessment-launcher",
               "options":[
                  {
                     "label":"Additional Tinnitus Profile",
                     "value":"tinnitus_form"
                  },
                  {
                     "label":"Additional Hyperacusis Profile",
                     "value":"loudness_form"
                  },
                  {
                     "label":"Additional Auditory Profile ",
                     "value":"hearing_form"
                  }
               ]
            }
         ]
      },
      {
         "title":"E. Vestibular History",
         "fields":[
            {
               "type":"radio",
               "name":"balance_issues",
               "label":"Does your child fall or lose balance easily?",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "type":"input",
               "name":"balance_issues_notes",
               "label":"",
               "showIf":{
                  "field":"balance_issues",
                  "equals":"1"
               }
            },
            {
               "type":"radio",
               "name":"dizziness_history",
               "label":"Does your child has history of dizziness?",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "type":"input",
               "name":"vestibular_notes",
               "label":"",
               "showIf":{
                  "field":"dizziness_history",
                  "equals":"1"
               }
            },
            {
               "type":"assessment-launcher",
               "name":"vestibular_assessments_launcher",
               "label":"",
               "options":[
                  {
                     "label":"Additional Vestibular Profile",
                     "value":"vestibular_form"
                  }
               ]
            }
         ]
      }
   ]
}

const OBJECTIVE = {
  "sections": [
    {
      "title": "General Audiology Assessment",
      "fields": [
        {
          "type": "accordion",
          "name": "otoscopy_section",
          "label": "Otoscopic Examination",
          "defaultOpen": false,
          "children": [
            {
              "type": "row",
              "columns": 2,
              "fields": [
                {
                  "type": "attach-file",
                  "name": "otoscopic_examination_right",
                  "accept": "application/pdf,image/*",
                  "title": "Otoscopic Examination - Right",
                  "multiple": false,
                  "previewSize": {
                    "width": 400,
                    "height": 400
                  },
                  "hideInputAfterSelect": true
                },
                {
                  "type": "attach-file",
                  "name": "otoscopic_examination_left",
                  "accept": "application/pdf,image/*",
                  "title": "Otoscopic Examination - Left",
                  "multiple": false,
                  "previewSize": {
                    "width": 400,
                    "height": 400
                  },
                  "hideInputAfterSelect": true
                }
              ]
            },
            {
              "type": "paired-select",
              "right": {
                "name": "external_canal_r",
                "title": "External Ear Canal – Right"
              },
              "left": {
                "name": "external_canal_l",
                "title": "External Ear Canal – Left"
              },
              "options": [
                {
                  "label": "Clear",
                  "value": "clear"
                },
                {
                  "label": "Inflamed",
                  "value": "inflamed"
                },
                {
                  "label": "Minimal cerumen",
                  "value": "minimal_cerumen"
                },
                {
                  "label": "Impacted cerumen",
                  "value": "impacted_cerumen"
                },
                {
                  "label": "Discharge present",
                  "value": "discharge"
                },
                {
                  "label": "Swelling",
                  "value": "swelling"
                }
              ]
            },
            {
              "type": "paired-select",
              "right": {
                "name": "tm_appearance_r",
                "title": "Tympanic Membrane (TM) Appearance – Right"
              },
              "left": {
                "name": "tm_appearance_l",
                "title": "Tympanic Membrane (TM) Appearance – Left"
              },
              "options": [
                {
                  "label": "Intact",
                  "value": "intact"
                },
                {
                  "label": "Perforated",
                  "value": "perforated"
                },
                {
                  "label": "Dull",
                  "value": "dull"
                },
                {
                  "label": "Retracted",
                  "value": "retracted"
                },
                {
                  "label": "Bulging",
                  "value": "bulging"
                },
                {
                  "label": "Opaque",
                  "value": "opaque"
                }
              ]
            },
            {
              "type": "paired-select",
              "right": {
                "name": "tm_colour_r",
                "title": "TM Colour – Right"
              },
              "left": {
                "name": "tm_colour_l",
                "title": "TM Colour – Left"
              },
              "options": [
                {
                  "label": "Pearly grey",
                  "value": "pearly_grey"
                },
                {
                  "label": "Reddened",
                  "value": "red"
                },
                {
                  "label": "Yellowish",
                  "value": "yellow"
                },
                {
                  "label": "Bluish",
                  "value": "blue"
                },
                {
                  "label": "White patches",
                  "value": "white_patches"
                }
              ]
            },
            {
              "type": "paired-text",
              "pairs": [
                {
                  "name": "otoscopy_other_r",
                  "title": "Other Findings – Right"
                },
                {
                  "name": "otoscopy_other_l",
                  "title": "Other Findings – Left"
                }
              ]
            }
          ]
        },
        {
          "type": "accordion",
          "name": "audiometry_section",
          "label": "Audiometry",
          "defaultOpen": false,
          "children": [
            {
              "name": "audifile_pd",
              "type": "attach-file",
              "accept": "application/pdf,image/*",
              "title": "Upload Audiometry File",
              "multiple": false,
              "previewSize": {
                "width": 400,
                "height": 400
              },
              "hideInputAfterSelect": true
            },
            {
              "type": "audiogram-graph",
              "name": "audiogram_graph"
            },
            {
              "type": "row",
              "fields": [
                {
                  "name": "impression_r",
                  "label": "Impression – Right Ear",
                  "type": "input"
                },
                {
                  "name": "impression_l",
                  "label": "Impression – Left Ear",
                  "type": "input"
                }
              ]
            },
            {
              "type": "radio",
              "name": "audiometry_type",
              "label": "Type of Audiometry",
              "options": [
                {
                  "label": "Screening",
                  "value": "screening"
                },
                {
                  "label": "Diagnostic Pure Tone",
                  "value": "pta"
                },
                {
                  "label": "Play",
                  "value": "play"
                },
                {
                  "label": "Visual Reinforcement (VR)",
                  "value": "vra"
                },
                {
                  "label": "Free field Audiometry",
                  "value": "free_field"
                },
                {
                  "label": "Aided Response",
                  "value": "aided"
                }
              ]
            },
            {
              "type": "radio",
              "name": "masking",
              "label": "Masking",
              "options": [
                {
                  "label": "Unmasked",
                  "value": "unmasked"
                },
                {
                  "label": "Masking",
                  "value": "masked"
                }
              ]
            },
            {
              "type": "radio",
              "name": "reliability",
              "label": "Reliability",
              "options": [
                {
                  "label": "Good",
                  "value": "Good"
                },
                {
                  "label": "Fair",
                  "value": "Fair"
                },
                {
                  "label": "Poor",
                  "value": "Poor"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": "",
      "fields": [
        {
          "type": "assessment-launcher",
          "name": "hearing_assessments_launcher_obj",
          "label": "",
          "options": [
            {
              "label": "Auditory Profile",
              "value": "hearing_form_obj"
            },
            {
              "label": "Tinnitus Profile",
              "value": "tinnitus_form_obj"
            },
            {
              "label": "Hyperacusis Profile",
              "value": "loudness_form_obj"
            },
            {
              "label": "Vestibular Profile",
              "value": "vestibular_form_obj"
            }
          ]
        }
      ]
    }
  ]
}

const ASSESSMENT = {
  "'sections'": [
    {
      "fields": [
        {
          "type": "input",
          "name": "clinical_impression",
          "label": "Clinical Impression"
        },
        {
          "type": "input",
          "name": "problem_list",
          "label": "Problem Listing"
        }
      ]
    }
  ]
}


const PLAN = {
   "'sections'":[
      {
         "fields":[
            {
               "type":"subheading",
               "label":"Short Term Goals (2–4 Weeks)"
            },
            {
               "type":"dynamic-goals",
               "name":"short_term_goals"
            },
            {
               "type":"subheading",
               "label":"Long Term Goals (6–12 Weeks)"
            },
            {
               "type":"dynamic-goals",
               "name":"long_term_goals"
            },
            {
               "type":"checkbox-group",
               "name":"intervention_plan",
               "label":"Intervention Plan",
               "options":[
                  {
                     "label":"Monitoring",
                     "value":"monitoring"
                  },
                  {
                     "label":"Amplification",
                     "value":"amplification"
                  },
                  {
                     "label":"Medical referral",
                     "value":"medical_referral"
                  },
                  {
                     "label":"Further assessment",
                     "value":"further_assessment"
                  },
                  {
                     "label":"Auditory training",
                     "value":"auditory_training"
                  },
                  {
                     "label":"Tinnitus management",
                     "value":"tinnitus_management"
                  },
                  {
                     "label":"Hyperacusis management",
                     "value":"hyperacusis_management"
                  },
                  {
                     "label":"Vestibular management",
                     "value":"vestibular_management"
                  },
                  {
                     "label":"Prevention program",
                     "value":"prevention_program"
                  },
                  {
                     "label":"Others",
                     "value":"other"
                  }
               ]
            },
            {
               "type":"input",
               "name":"intervention_plan_details",
               "label":"Specify",
               "showIf":{
                  "field":"intervention_plan",
                  "includes":"other"
               }
            },
            {
               "type":"multi-select-dropdown",
               "name":"plan_options",
               "label":"Required further assessment",
               "options":[
                  {
                     "label":"Otoscopic Examination",
                     "value":"otoscopic"
                  },
                  {
                     "label":"Tympanometry",
                     "value":"tympanometry"
                  },
                  {
                     "label":"Audiometry",
                     "value":"audiometry"
                  },
                  {
                     "label":"Acoustic Reflex",
                     "value":"acoustic_reflex"
                  },
                  {
                     "label":"OAE Screening",
                     "value":"oae_screening"
                  },
                  {
                     "label":"Eustachian tube Function",
                     "value":"eustachian_tube"
                  },
                  {
                     "label":"Auditory steady-state response",
                     "value":"assr"
                  },
                  {
                     "label":"Auditory brainstem response",
                     "value":"abr"
                  },
                  {
                     "label":"Electrophysiology for hearing",
                     "value":"electrophysiology"
                  },
                  {
                     "label":"Special test",
                     "value":"special_test"
                  },
                  {
                     "label":"Hearing Handicap Inventory for Adults (HHIA)",
                     "value":"hhia"
                  },
                  {
                     "label":"Client oriented scale of improvement (COSI)",
                     "value":"cosi"
                  },
                  {
                     "label":"Tinnitus",
                     "value":"tinnitus"
                  },
                  {
                     "label":"Hyperacusis",
                     "value":"hyperacusis"
                  },
                  {
                     "label":"Vestibular",
                     "value":"vestibular"
                  },
                  {
                     "label":"Speech Test",
                     "value":"speech_test"
                  },
                  {
                     "label":"Videonystagmography",
                     "value":"vng"
                  },
                  {
                     "label":"Optokinetic Test",
                     "value":"optokinetic"
                  },
                  {
                     "label":"Spontaneous Nystagmus",
                     "value":"spontaneous_nystagmus"
                  },
                  {
                     "label":"High Frequency Head Shake",
                     "value":"head_shake"
                  },
                  {
                     "label":"Gaze Test",
                     "value":"gaze_test"
                  },
                  {
                     "label":"Subjective Visual Vertical",
                     "value":"svv"
                  },
                  {
                     "label":"Positional Test",
                     "value":"positional_test"
                  },
                  {
                     "label":"Dynamic Visual Acuity (DVA)",
                     "value":"dva"
                  },
                  {
                     "label":"Gaze Stabilization",
                     "value":"gaze_stabilization"
                  },
                  {
                     "label":"Video Head Impulse Test (vHIT)",
                     "value":"vhit"
                  },
                  {
                     "label":"Posturography",
                     "value":"posturography"
                  },
                  {
                     "label":"Functional Gait Assessment",
                     "value":"fga"
                  },
                  {
                     "label":"Sensory Organization Performance",
                     "value":"sop"
                  },
                  {
                     "label":"VEMP",
                     "value":"vemp"
                  },
                  {
                     "label":"Hearing Device Orientation",
                     "value":"hearing_device_orientation"
                  },
                  {
                     "label":"Hearing Device Trial",
                     "value":"hearing_device_trial"
                  },
                  {
                     "label":"Hearing Device Fitting",
                     "value":"hearing_device_fitting"
                  },
                  {
                     "label":"Hearing Device Verification",
                     "value":"hearing_device_verification"
                  },
                  {
                     "label":"Hearing Device Validation",
                     "value":"hearing_device_validation"
                  },
                  {
                     "label":"Fine Tuning of Hearing Device",
                     "value":"hearing_device_finetuning"
                  },
                  {
                     "label":"Others",
                     "value":"other"
                  }
               ]
            },
            {
               "type":"input",
               "name":"plan_options_details",
               "label":"Specify",
               "showIf":{
                  "field":"plan_options",
                  "includes":"other"
               }
            },
            {
               "type":"multi-select-dropdown",
               "name":"plan_tinnitus_options",
               "label":"Tinnitus Options",
               "showIf":{
                  "field":"plan_options",
                  "includes":"tinnitus"
               },
               "options":[
                  {
                     "label":"Tinnitus Handicap Inventory (THI)",
                     "value":"thi"
                  },
                  {
                     "label":"Tinnitus Functional Index (TFI)",
                     "value":"tfi"
                  },
                  {
                     "label":"Tinnitus Visual Analog Scale (VAS)",
                     "value":"tinnitus_vas"
                  },
                  {
                     "label":"Tinnitus Annoyance",
                     "value":"tinnitus_annoyance"
                  },
                  {
                     "label":"Tinnitus Awareness",
                     "value":"tinnitus_awareness"
                  }
               ]
            },
            {
               "type":"multi-select-dropdown",
               "name":"plan_hyperacusis_options",
               "label":"Hyperacusis Options",
               "showIf":{
                  "field":"plan_options",
                  "includes":"hyperacusis"
               },
               "options":[
                  {
                     "label":"Modified Khalfa Hyperacusis Questionnaire",
                     "value":"khalfa"
                  },
                  {
                     "label":"Hyperacusis Questionnaire (HQ)",
                     "value":"hq"
                  },
                  {
                     "label":"Visual Analog Scale (VAS) – Loudness Discomfort",
                     "value":"vas_loudness"
                  },
                  {
                     "label":"Visual Analog Scale (VAS) – Annoyance",
                     "value":"vas_annoyance"
                  }
               ]
            },
            {
               "type":"multi-select-dropdown",
               "name":"plan_vestibular_options",
               "label":"Vestibular Options",
               "showIf":{
                  "field":"plan_options",
                  "includes":"vestibular"
               },
               "options":[
                  {
                     "label":"Dizziness Handicap Inventory (DHI)",
                     "value":"dhi"
                  },
                  {
                     "label":"Visual Vertigo Analogue Score (VVAS)",
                     "value":"vvas"
                  },
                  {
                     "label":"Vertigo Handicap Questionnaire (VHQ)",
                     "value":"vhq"
                  },
                  {
                     "label":"Malay Version Vertigo Symptom Scale (MVVSS)",
                     "value":"mvvss"
                  },
                  {
                     "label":"Vestibular Evaluation",
                     "value":"vestibular_eval"
                  },
                  {
                     "label":"Dynamic Visual Acuity (DVA)",
                     "value":"dva"
                  },
                  {
                     "label":"Video Head Impulse Test (vHIT)",
                     "value":"vhit"
                  },
                  {
                     "label":"Posturography",
                     "value":"posturography"
                  },
                  {
                     "label":"Functional Gait Assessment",
                     "value":"fga"
                  },
                  {
                     "label":"cVEMP",
                     "value":"cvemp"
                  },
                  {
                     "label":"oVEMP",
                     "value":"ovemp"
                  },
                  {
                     "label":"Videonystagmography",
                     "value":"videonystagmography"
                  }
               ]
            },
            {
               "type":"input",
               "name":"plan_special_test_details",
               "label":"Special Test Details",
               "placeholder":"Enter special test details...",
               "showIf":{
                  "field":"plan_options",
                  "includes":"special_test"
               }
            },
            {
               "type":"date",
               "name":"plan_next_follow_up",
               "label":"Next Follow-Up"
            },
            {
               "type":"radio",
               "name":"plan_required_referral",
               "label":"Required Referral",
               "options":[
                  {
                     "label":"Yes",
                     "value":"yes"
                  },
                  {
                     "label":"No",
                     "value":"no"
                  }
               ]
            },
            {
               "type":"input",
               "name":"plan_required_referral_details",
               "label":"",
               "placeholder":"Specify referral details...",
               "showIf":{
                  "field":"plan_required_referral",
                  "equals":"yes"
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
