const SUBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "type": "radio",
          "name": "attendance",
          "label": "Patient was seen",
          "options": [
            {
              "label": "Unaccompanied",
              "value": "unaccompanied"
            },
            {
              "label": "Accompanied by caregiver(s)",
              "value": "accompanied"
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
      "title": "General Observation",
      "fields": [
        {
          "type": "radio",
          "name": "sitting_in",
          "label": "Sitting in",
          "options": [
            {
              "label": "Chair",
              "value": "chair"
            },
            {
              "label": "Wheelchair",
              "value": "wheelchair"
            },
            {
              "label": "Bed",
              "value": "bed"
            }
          ]
        }
      ]
    },
    {
      "title": "Intervention Given",
      "fields": [
        {
          "type": "subheading",
          "label": "Swallowing"
        },
        {
          "type": "checkbox-group",
          "name": "swallowing_interventions",
          "label": "",
          "options": [
            {
              "label": "Neuromuscular Electrical Stimulation (NMES)",
              "value": "nmes"
            },
            {
              "label": "Flexible Endoscopic Evaluation of Swallowing (FEES)",
              "value": "fees"
            },
            {
              "label": "McNeill Dysphagia Therapy (MDTP)",
              "value": "mdtp"
            },
            {
              "label": "Observation of ingestion functions",
              "value": "observation_ingestion"
            },
            {
              "label": "Assisting and leading exercises for ingestion functions",
              "value": "exercise_ingestion"
            },
            {
              "label": "Training of ingestion functions",
              "value": "training_ingestion"
            },
            {
              "label": "Education about ingestion functions",
              "value": "education_ingestion"
            },
            {
              "label": "Observation of swallowing",
              "value": "observation_swallowing"
            },
            {
              "label": "Interview in relation to swallowing",
              "value": "interview_swallowing"
            },
            {
              "label": "Assisting and leading exercise in relation to swallowing",
              "value": "exercise_swallowing"
            },
            {
              "label": "Training about swallowing",
              "value": "training_swallowing"
            },
            {
              "label": "Education about swallowing",
              "value": "education_swallowing"
            },
            {
              "label": "Advising about swallowing",
              "value": "advising_swallowing"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Breathing"
        },
        {
          "type": "checkbox-group",
          "name": "breathing_interventions",
          "label": "",
          "options": [
            {
              "label": "Observation of respiration function",
              "value": "observation_respiration"
            },
            {
              "label": "Assisting and leading exercise for respiration function",
              "value": "exercise_respiration"
            },
            {
              "label": "Training of respiration function",
              "value": "training_respiration"
            },
            {
              "label": "Education about respiration function",
              "value": "education_respiration"
            },
            {
              "label": "Assisting and leading exercise for additional respiratory functions",
              "value": "exercise_additional_resp"
            },
            {
              "label": "Training for coughing, sneezing, expectorating and other functions related to breathing",
              "value": "training_coughing"
            },
            {
              "label": "Practical support with coughing, sneezing, expectorating and other respiratory functions related to breathing",
              "value": "support_coughing"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Voicing"
        },
        {
          "type": "checkbox-group",
          "name": "voicing_interventions",
          "label": "",
          "options": [
            {
              "label": "Lee Silverman Voice Treatment (LSVT)",
              "value": "lsvt"
            },
            {
              "label": "Observation of voice functions",
              "value": "observation_voice"
            },
            {
              "label": "Assisting and leading exercise for voice functions",
              "value": "exercise_voice"
            },
            {
              "label": "Training of voice functions",
              "value": "training_voice"
            },
            {
              "label": "Education about voice functions",
              "value": "education_voice"
            },
            {
              "label": "Advising about voice functions",
              "value": "advising_voice"
            },
            {
              "label": "Practical support with voice functions",
              "value": "support_voice"
            },
            {
              "label": "Training in singing",
              "value": "training_singing"
            },
            {
              "label": "Practical support with singing",
              "value": "support_singing"
            },
            {
              "label": "Observation of alternative vocalisation functions",
              "value": "observation_alt_vocal"
            },
            {
              "label": "Assisting and leading exercise for alternative vocalisation functions",
              "value": "exercise_alt_vocal"
            },
            {
              "label": "Training of alternative vocalisation functions",
              "value": "training_alt_vocal"
            },
            {
              "label": "Education about alternative vocalisation functions",
              "value": "education_alt_vocal"
            },
            {
              "label": "Advising about alternative vocalisation functions",
              "value": "advising_alt_vocal"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Receptive language"
        },
        {
          "type": "checkbox-group",
          "name": "receptive_language",
          "label": "",
          "options": [
            {
              "label": "Observation on receiving spoken messages",
              "value": "observation_receiving"
            },
            {
              "label": "Training in receiving spoken messages",
              "value": "training_receiving"
            },
            {
              "label": "Education about receiving spoken messages",
              "value": "education_receiving"
            },
            {
              "label": "Advising about receiving spoken messages",
              "value": "advising_receiving"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Expressive language"
        },
        {
          "type": "checkbox-group",
          "name": "expressive_language",
          "label": "",
          "options": [
            {
              "label": "Transcranial Direct Current Stimulation (tDCS) - Speech Therapy Protocol",
              "value": "tdcs"
            },
            {
              "label": "Observation of speaking",
              "value": "observation_speaking"
            },
            {
              "label": "Training in speaking",
              "value": "training_speaking"
            },
            {
              "label": "Education about speaking",
              "value": "education_speaking"
            },
            {
              "label": "Advising about speaking",
              "value": "advising_speaking"
            },
            {
              "label": "Observation of having a conversation",
              "value": "observation_conversation"
            },
            {
              "label": "Training in having a conversation",
              "value": "training_conversation"
            },
            {
              "label": "Advising about having a conversation",
              "value": "advising_conversation"
            },
            {
              "label": "Counselling about having a conversation",
              "value": "counselling_conversation"
            },
            {
              "label": "Observation of having a discussion",
              "value": "observation_discussion"
            },
            {
              "label": "Training in having a discussion",
              "value": "training_discussion"
            },
            {
              "label": "Advising about having a discussion",
              "value": "advising_discussion"
            },
            {
              "label": "Counselling about having a discussion",
              "value": "counselling_discussion"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Literacy"
        },
        {
          "type": "checkbox-group",
          "name": "literacy_interventions",
          "label": "",
          "options": [
            {
              "label": "Observation of reading",
              "value": "observation_read"
            },
            {
              "label": "Training in reading",
              "value": "training_read"
            },
            {
              "label": "Education about reading",
              "value": "education_read"
            },
            {
              "label": "Advising about reading",
              "value": "advising_read"
            },
            {
              "label": "Practical support with reading",
              "value": "support_read"
            },
            {
              "label": "Observation of writing",
              "value": "observation_write"
            },
            {
              "label": "Training in writing",
              "value": "training_write"
            },
            {
              "label": "Education about writing",
              "value": "education_write"
            },
            {
              "label": "Practical support with writing",
              "value": "support_write"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Speech"
        },
        {
          "type": "checkbox-group",
          "name": "speech_interventions",
          "label": "",
          "options": [
            {
              "label": "Prompts for Restructuring Oral Muscular Phonetic Targets (PROMPT)",
              "value": "prompt"
            },
            {
              "label": "Observation of speech functions",
              "value": "observation_speech"
            },
            {
              "label": "Assisting and leading exercise for speech functions",
              "value": "exercise_speech"
            },
            {
              "label": "Training of speech functions",
              "value": "training_speech"
            },
            {
              "label": "Education about speech functions",
              "value": "education_speech"
            },
            {
              "label": "Advising about speech functions",
              "value": "advising_speech"
            },
            {
              "label": "Observation of articulation functions",
              "value": "observation_articulation"
            },
            {
              "label": "Assisting and leading exercise for articulation functions",
              "value": "exercise_articulation"
            },
            {
              "label": "Training of articulation functions",
              "value": "training_articulation"
            },
            {
              "label": "Education about articulation functions",
              "value": "education_articulation"
            },
            {
              "label": "Advising about articulation functions",
              "value": "advising_articulation"
            },
            {
              "label": "Observation of fluency and rhythm of speech functions",
              "value": "observation_fluency"
            },
            {
              "label": "Assisting and leading exercise for fluency and rhythm of speech functions",
              "value": "exercise_fluency"
            },
            {
              "label": "Training of fluency and rhythm of speech functions",
              "value": "training_fluency"
            },
            {
              "label": "Education about fluency and rhythm of speech functions",
              "value": "education_fluency"
            },
            {
              "label": "Advising about fluency and rhythm of speech functions",
              "value": "advising_fluency"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "AAC"
        },
        {
          "type": "checkbox-group",
          "name": "aac_interventions",
          "label": "",
          "options": [
            {
              "label": "Observation of using communication devices and techniques",
              "value": "observation_aac"
            },
            {
              "label": "Interview in relation to using communication devices and techniques",
              "value": "interview_aac"
            },
            {
              "label": "Training in using communication devices and techniques",
              "value": "training_aac"
            },
            {
              "label": "Education about using communication devices and techniques",
              "value": "education_aac"
            },
            {
              "label": "Advising about using communication devices and techniques",
              "value": "advising_aac"
            },
            {
              "label": "Observation of receiving written messages",
              "value": "observation_written"
            },
            {
              "label": "Training in receiving written messages",
              "value": "training_written"
            },
            {
              "label": "Education about receiving written messages",
              "value": "education_written"
            },
            {
              "label": "Advising about receiving written messages",
              "value": "advising_written"
            },
            {
              "label": "Observation of writing messages",
              "value": "observation_writing_msg"
            },
            {
              "label": "Training in writing messages",
              "value": "training_writing_msg"
            },
            {
              "label": "Education about writing messages",
              "value": "education_writing_msg"
            },
            {
              "label": "Advising about writing messages",
              "value": "advising_writing_msg"
            },
            {
              "label": "Practical support with writing messages",
              "value": "support_writing_msg"
            }
          ]
        },
        {
          "type": "textarea",
          "name": "other_interventions",
          "label": "Others",
          "placeholder": "Specify other interventions"
        }
      ]
    }
  ]
}

const ASSESSMENT = {
  "sections": [
    {
      "fields": [
        {
          "type": "radio",
          "name": "complications",
          "label": "Complications",
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
          "type": "radio",
          "name": "requires_cues",
          "label": "Requires",
          "options": [
            {
              "label": "Maximum cues",
              "value": "maximum"
            },
            {
              "label": "Moderate cues",
              "value": "moderate"
            },
            {
              "label": "Minimal cues",
              "value": "minimal"
            },
            {
              "label": "Independent performance",
              "value": "independent"
            }
          ]
        },
        {
          "type": "textarea",
          "name": "assessment_remarks",
          "label": "Remark(s) / Additional notes",
          "placeholder": "Enter additional notes"
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
          "type": "checkbox-group",
          "name": "plan_options",
          "options": [
            {
              "label": "Continue current therapy plan / goals",
              "value": "continue_plan"
            },
            {
              "label": "Modify targets",
              "value": "modify_targets"
            },
            {
              "label": "Reassess speech and language skills",
              "value": "reassess_skills"
            },
            {
              "label": "Referral for medical management",
              "value": "referral_medical"
            },
            {
              "label": "Discontinue therapy",
              "value": "discontinue"
            }
          ]
        },
        {
          "type": "input",
          "name": "discontinue_reason",
          "label": "Reason for discontinuation",
          "placeholder": "Enter reason",
          "showIf": {
            "field": "plan_options",
            "includes": "discontinue"
          }
        },
        {
          "type": "textarea",
          "name": "approaches_exercises",
          "label": "Approaches / Exercises",
          "placeholder": "Describe approaches and exercises"
        }
      ]
    }
  ]
}