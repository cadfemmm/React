const subjective = {
   
    "sections": [
        {
            "fields": [
                {
                    "name": "complaint",
                    "label": "Cheif' Self-Reported Golas/Preferes",
                    "type": "input",
                    "placeholder": "Therapist assessment..."
                }
            ]
        }
    ]
}

const Objective = {
  "titleInfo": {
    "title": "Activities and participations",
    "content": [
      "0 – No difficulty",
      "1 – Mild difficulty",
      "2 – Moderate difficulty",
      "3 – Severe difficulty",
      "4 – Complete difficulty ",
      "5 - Not applicable"
    ]
  },
  "sections": [
    {
      "fields": [
        {
          "type": "scale-table",
          "name": "activities ",
          "label": "Activities and participations",
          "columns": [
            {
              "label": "0",
              "value": "0",
              "required": true
            },
            {
              "label": "1",
              "value": "1",
              "required": true
            },
            {
              "label": "2",
              "value": "2",
              "required": true
            },
            {
              "label": "3",
              "value": "3",
              "required": true
            },
            {
              "label": "4",
              "value": "4",
              "required": true
            },
            {
              "label": "8",
              "value": "8",
              "required": true
            }
          ],
          "rows": [
            "Acquiring Skills",
            "Focusing Attention",
            "Thinking",
            "Writing (pattern marking)",
            "Calculating",
            "Solving problems",
            "Making decisions",
            "Undertaking a single task",
            "Undertaking multiple tasks",
            "Carrying out daily routine",
            "Handling stress",
            "Conversation",
            "Using communication devices",
            "Changing body position",
            "Maintaining body position",
            "Lifting and carrying objects",
            "Fine hand use",
            "Hand and arm use",
            "Walking",
            "Basic interpersonal interactions",
            "Complex interpersonal interactions",
            "Formal relationships",
            "Vocational training",
            "Apprenticeship / Work preparation",
            "Acquiring, keeping and terminating a job"
          ]
        }
      ]
    }
  ]
}


const Assessmnet = {
  "fields": [
    {
      "name": "strengths",
      "label": "Strengths",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Motivated to participate",
          "value": "motivated_to_participate"
        },
        {
          "label": "Cooperative",
          "value": "cooperative"
        },
        {
          "label": "Positive attitude",
          "value": "positive_attitude"
        },
        {
          "label": "Good communication",
          "value": "good_communication"
        },
        {
          "label": "Follows simple instructions",
          "value": "follows_simple_instructions"
        },
        {
          "label": "Good attention during assessment",
          "value": "good_attention_during_assessment"
        },
        {
          "label": "Good interpersonal skills",
          "value": "good_interpersonal_skills"
        },
        {
          "label": "Good physical endurance",
          "value": "good_physical_endurance"
        },
        {
          "label": "Good upper limb function",
          "value": "good_upper_limb_function"
        },
        {
          "label": "Good hand coordination",
          "value": "good_hand_coordination"
        },
        {
          "label": "Good balance and mobility",
          "value": "good_balance_and_mobility"
        },
        {
          "label": "Demonstrates interest in vocational training",
          "value": "interest_vocational_training"
        }
      ]
    },
    {
      "name": "limitations",
      "label": "Limitations",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Requires encouragement",
          "value": "requires_encouragement"
        },
        {
          "label": "Limited motivation",
          "value": "limited_motivation"
        },
        {
          "label": "Difficulty following instructions",
          "value": "difficulty_following_instructions"
        },
        {
          "label": "Reduced attention/concentration",
          "value": "reduced_attention_concentration"
        },
        {
          "label": "Poor communication skills",
          "value": "poor_communication_skills"
        },
        {
          "label": "Low self-confidence",
          "value": "low_self_confidence"
        },
        {
          "label": "Difficulty interacting with others",
          "value": "difficulty_interacting_with_others"
        },
        {
          "label": "Requires supervision",
          "value": "requires_supervision"
        },
        {
          "label": "Reduced hand function",
          "value": "reduced_hand_function"
        },
        {
          "label": "Reduced physical endurance",
          "value": "reduced_physical_endurance"
        },
        {
          "label": "Limited standing tolerance",
          "value": "limited_standing_tolerance"
        },
        {
          "label": "Limited mobility",
          "value": "limited_mobility"
        }
      ]
    },
    {
      "name": "initial_impression",
      "label": "Initial Impression",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Suitable for vocational training",
          "value": "suitable_for_vocational_training"
        },
        {
          "label": "Suitable with minimal support",
          "value": "suitable_with_minimal_support"
        },
        {
          "label": "Suitable with close supervision",
          "value": "suitable_with_close_supervision"
        },
        {
          "label": "Requires further functional rehabilitation",
          "value": "requires_further_functional_rehabilitation"
        },
        {
          "label": "Requires comprehensive vocational assessment",
          "value": "requires_comprehensive_vocational_assessment"
        },
        {
          "label": "Requires multidisciplinary intervention before vocational training",
          "value": "requires_multidisciplinary_intervention"
        }
      ]
    },
    {
      "name": "overall_remarks",
      "label": "Overall / Remarks",
      "type": "input"
    }
  ]
}
const Plan = {

    "sections": [
        {
            "fields": [
                {
                    "type": "subheading",
                    "label": "Short-Term Goals (2–4 weeks)"
                },
                {
                    "type": "dynamic-goals",
                    "name": "short_term_goals"
                },
                {
                    "type": "subheading",
                    "label": "Long-Term Goals (6–12 weeks)"
                },
                {
                    "type": "dynamic-goals",
                    "name": "long_term_goals"
                }
            ]
        }
    ]
}