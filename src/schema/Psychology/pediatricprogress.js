const SUBJECTIVE = {
  "fields": [
    {
      "name": "chief_complaint_status",
      "label": "Chief Complaint Status",
      "type": "radio",
      "options": [
        {
          "label": "No Change",
          "value": "no_change"
        },
        {
          "label": "Modified",
          "value": "modified"
        }
      ]
    },
    {
      "name": "chief_complaint_readonly",
      "label": "Chief Complaint",
      "type": "input",
      "placeholder": "No previous complaint available",
      "disabled": true,
      "showIf": {
        "field": "chief_complaint_status",
        "equals": "no_change"
      }
    },
    {
      "name": "chief_complaint",
      "label": "Chief Complaint",
      "required": true,
      "type": "input",
      "showIf": {
        "field": "chief_complaint_status",
        "oneOf": [
          "modified",
          "new_complaint"
        ]
      }
    },
    {
      "name": "hpi",
      "label": "History of Presenting Illness (HPI)",
      "type": "input"
    },
    {
      "name": "interventions_provided",
      "label": "Interventions Provided",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Cognitive-behavioral therapy",
          "value": "cbt"
        },
        {
          "label": "Behavioral therapy",
          "value": "behavioral_therapy"
        },
        {
          "label": "Social skills training",
          "value": "social_skills_training"
        },
        {
          "label": "Interpersonal therapy",
          "value": "interpersonal_therapy"
        },
        {
          "label": "Play therapy",
          "value": "play_therapy"
        },
        {
          "label": "Family-based intervention",
          "value": "family_based_intervention"
        },
        {
          "label": "Expressive art therapy",
          "value": "expressive_art_therapy"
        },
        {
          "label": "Psychoeducation",
          "value": "psychoeducation"
        },
        {
          "label": "Parent management training",
          "value": "parent_management_training"
        },
        {
          "label": "Parent-child interaction therapy",
          "value": "parent_child_interaction_therapy"
        },
        {
          "label": "Others",
          "value": "others"
        }
      ]
    },
    {
      "name": "interventions_other",
      "label": "Others (Specify)",
      "type": "input",
      "placeholder": "Enter other interventions...",
      "showIf": {
        "field": "interventions_provided",
        "includes": "others"
      }
    },
    {
      "name": "session_summary",
      "label": "Session Summary",
      "type": "input",
      "placeholder": "Enter summary of the session..."
    }
  ]
}

const OBJECTIVE = {
  "fields": [
    {
      "type": "subheading",
      "label": "Pediatric MSE Checklist "
    },
    {
      "type": "subheading",
      "label": "1. General Appearance & Behaviour on Entry"
    },
    {
      "name": "appearance",
      "type": "checkbox-group",
      "label": "1.1 Appearance",
      "options": [
        {
          "label": "Well-groomed / clean",
          "value": "well_groomed"
        },
        {
          "label": "Unkempt / dishevelled",
          "value": "unkempt"
        },
        {
          "label": "Bruised / scarred",
          "value": "bruised_scarred"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "appearance_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "appearance",
        "includes": "na"
      }
    },
    {
      "name": "separation_behavior",
      "type": "checkbox-group",
      "label": "1.2 Separation behaviour on entry",
      "options": [
        {
          "label": "Age-appropriate",
          "value": "age_appropriate"
        },
        {
          "label": "Mild distress",
          "value": "mild_distress"
        },
        {
          "label": "Significant distress",
          "value": "significant_distress"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "separation_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "separation_behavior",
        "includes": "na"
      }
    },
    {
      "name": "interaction_clinician",
      "type": "checkbox-group",
      "label": "1.3 Interaction with clinician",
      "options": [
        {
          "label": "Approached readily",
          "value": "approached"
        },
        {
          "label": "Avoidant",
          "value": "avoidant"
        },
        {
          "label": "Disinhibited",
          "value": "disinhibited"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "interaction_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "interaction_clinician",
        "includes": "na"
      }
    },
    {
      "type": "subheading",
      "label": "2. Play Behaviour"
    },
    {
      "name": "play_quality",
      "label": "2.1 Quality of play",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Functional / relational (uses toys as intended)",
          "value": "functional"
        },
        {
          "label": "Symbolic / pretend play present",
          "value": "symbolic"
        },
        {
          "label": "Imaginative / narrative play",
          "value": "imaginative"
        },
        {
          "label": "Repetitive / stereotyped play",
          "value": "repetitive"
        },
        {
          "label": "Play absent / no engagement with materials",
          "value": "absent"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "play_quality_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "play_quality",
        "includes": "na"
      }
    },
    {
      "name": "play_social",
      "label": "2.2 Social dimension of play",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Solitary play only",
          "value": "solitary"
        },
        {
          "label": "Parallel play (alongside but not with)",
          "value": "parallel"
        },
        {
          "label": "Joint / cooperative play",
          "value": "joint"
        },
        {
          "label": "Directed the clinician in play",
          "value": "directed_clinician"
        },
        {
          "label": "Followed clinician's lead in play",
          "value": "followed_clinician"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "play_social_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "play_social",
        "includes": "na"
      }
    },
    {
      "name": "play_initiation",
      "label": "2.3 Initiation",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Spontaneous — initiated without prompting",
          "value": "spontaneous"
        },
        {
          "label": "Required prompting / modelling",
          "value": "prompted"
        },
        {
          "label": "Did not initiate even with prompting",
          "value": "no_initiation"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "play_initiation_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "play_initiation",
        "includes": "na"
      }
    },
    {
      "name": "play_imitation",
      "label": "2.4 Imitation skills",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Imitated gestures / actions readily",
          "value": "readily"
        },
        {
          "label": "Imitation present with delay",
          "value": "delayed"
        },
        {
          "label": "Imitation absent",
          "value": "absent"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "play_imitation_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "play_imitation",
        "equals": "na"
      }
    },
    {
      "type": "subheading",
      "label": "3. Behavioural Observation"
    },
    {
      "name": "activity_level",
      "label": "3.1 Activity level",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Age-appropriate",
          "value": "age_appropriate"
        },
        {
          "label": "Hyperactive / restless / fidgety",
          "value": "hyperactive"
        },
        {
          "label": "Hypoactive / slowed",
          "value": "hypoactive"
        },
        {
          "label": "Psychomotor agitation",
          "value": "agitation"
        },
        {
          "label": "Psychomotor retardation",
          "value": "retardation"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "activity_level_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "activity_level",
        "includes": "na"
      }
    },
    {
      "name": "compliance",
      "label": "3.2 Compliance & engagement",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Cooperative",
          "value": "cooperative"
        },
        {
          "label": "Uncooperative",
          "value": "uncooperative"
        },
        {
          "label": "Oppositional / defiant",
          "value": "oppositional"
        },
        {
          "label": "Passive / apathetic",
          "value": "passive"
        },
        {
          "label": "Demanding / controlling",
          "value": "demanding"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "compliance_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "compliance",
        "includes": "na"
      }
    },
    {
      "name": "attention_span",
      "label": "3.3 Attention span",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Sustained during preferred / play activity",
          "value": "sustained_play"
        },
        {
          "label": "Inconsistent — distractible during tasks",
          "value": "inconsistent"
        },
        {
          "label": "Poor — unable to sustain even briefly",
          "value": "poor"
        },
        {
          "label": "Appropriate for age",
          "value": "age_appropriate"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "attention_context",
      "label": "Document context (e.g., sustained 10 min in play, 2 min task)",
      "type": "input"
    },
    {
      "name": "attention_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "attention_span",
        "includes": "na"
      }
    },
    {
      "name": "eye_contact",
      "label": "3.4 Eye contact",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Good / socially appropriate",
          "value": "good"
        },
        {
          "label": "Poor / avoidant",
          "value": "poor"
        },
        {
          "label": "Intense / prolonged",
          "value": "intense"
        },
        {
          "label": "Inconsistent",
          "value": "inconsistent"
        },
        {
          "label": "Excessive scanning",
          "value": "scanning"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "eye_contact_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "eye_contact",
        "includes": "na"
      }
    },
    {
      "name": "motor_observations",
      "label": "3.5 Motor observations",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Motor tics observed",
          "value": "tics"
        },
        {
          "label": "Tremor",
          "value": "tremor"
        },
        {
          "label": "Repetitive / stereotyped gestures",
          "value": "stereotypy"
        },
        {
          "label": "Steady gait",
          "value": "steady_gait"
        },
        {
          "label": "Unsteady gait",
          "value": "unsteady_gait"
        },
        {
          "label": "Limping",
          "value": "limping"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "motor_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "motor_observations",
        "includes": "na"
      }
    },
    {
      "type": "subheading",
      "label": "4. Speech & Language"
    },
    {
      "name": "language_level",
      "label": "4.1 Language level",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Age-appropriate",
          "value": "age_appropriate"
        },
        {
          "label": "Delayed for chronological age",
          "value": "delayed"
        },
        {
          "label": "Could not assess (non-verbal / selective mutism)",
          "value": "not_assessed"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "language_level_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "language_level",
        "includes": "na"
      }
    },
    {
      "name": "speech_rate_flow",
      "label": "4.2 Rate and flow",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Normal",
          "value": "normal"
        },
        {
          "label": "Rapid / pressured",
          "value": "rapid"
        },
        {
          "label": "Slow",
          "value": "slow"
        },
        {
          "label": "Mute / non-verbal",
          "value": "mute"
        },
        {
          "label": "Echolalia — immediate",
          "value": "echolalia_immediate"
        },
        {
          "label": "Echolalia — delayed",
          "value": "echolalia_delayed"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "speech_rate_flow_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "speech_rate_flow",
        "includes": "na"
      }
    },
    {
      "name": "speech_quantity",
      "label": "4.3 Quantity",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Talkative / spontaneous",
          "value": "talkative"
        },
        {
          "label": "Impoverished / minimal",
          "value": "minimal"
        },
        {
          "label": "Expansive",
          "value": "expansive"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "speech_quantity_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "speech_quantity",
        "equals": "na"
      }
    },
    {
      "name": "speech_prosody",
      "label": "4.4 Prosody / tone",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Normal",
          "value": "normal"
        },
        {
          "label": "Monotonous / flat",
          "value": "flat"
        },
        {
          "label": "Exaggerated / dramatic",
          "value": "exaggerated"
        },
        {
          "label": "Loud / raised",
          "value": "loud"
        },
        {
          "label": "Soft / low",
          "value": "soft"
        },
        {
          "label": "Anxious tone",
          "value": "anxious"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "speech_prosody_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "speech_prosody",
        "includes": "na"
      }
    },
    {
      "name": "speech_fluency",
      "label": "4.5 Fluency",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Fluent / clear",
          "value": "fluent"
        },
        {
          "label": "Stammering / hesitant",
          "value": "stammering"
        },
        {
          "label": "Dysarthric / articulation errors",
          "value": "dysarthric"
        },
        {
          "label": "Aphasic",
          "value": "aphasic"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "speech_fluency_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "speech_fluency",
        "includes": "na"
      }
    },
    {
      "type": "subheading",
      "label": "5. Mood & Affect"
    },
    {
      "name": "observed_mood",
      "label": "5.1 Observed mood",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Euthymic / content",
          "value": "euthymic"
        },
        {
          "label": "Anxious / tense",
          "value": "anxious"
        },
        {
          "label": "Depressed / sad",
          "value": "depressed"
        },
        {
          "label": "Irritable",
          "value": "irritable"
        },
        {
          "label": "Euphoric / elated",
          "value": "euphoric"
        },
        {
          "label": "Apathetic / flat",
          "value": "apathetic"
        },
        {
          "label": "Angry / dysphoric",
          "value": "angry"
        },
        {
          "label": "Labile / unstable",
          "value": "labile"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "observed_mood_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "observed_mood",
        "includes": "na"
      }
    },
    {
      "name": "child_mood_observation",
      "label": "5.2 Observable child equivalents",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Cried during session",
          "value": "cried"
        },
        {
          "label": "Smiled / laughed appropriately",
          "value": "smiled"
        },
        {
          "label": "Showed frustration when task too hard",
          "value": "frustration"
        },
        {
          "label": "Responded to praise with positive affect",
          "value": "positive_response"
        },
        {
          "label": "Flat response to social overtures",
          "value": "flat_response"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "child_mood_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "child_mood_observation",
        "includes": "na"
      }
    },
    {
      "name": "affect",
      "label": "5.3 Affect",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Congruent with expressed mood",
          "value": "congruent"
        },
        {
          "label": "Incongruent",
          "value": "incongruent"
        },
        {
          "label": "Full range",
          "value": "full_range"
        },
        {
          "label": "Restricted / constricted",
          "value": "restricted"
        },
        {
          "label": "Blunted / flat",
          "value": "blunted"
        },
        {
          "label": "Broad / expansive",
          "value": "broad"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "affect_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "affect",
        "includes": "na"
      }
    },
    {
      "type": "subheading",
      "label": "6. Thought"
    },
    {
      "name": "thought_form",
      "label": "6.1 Form / process (inferred from speech and play)",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Age-appropriate coherence",
          "value": "coherent"
        },
        {
          "label": "Loose associations",
          "value": "loose_associations"
        },
        {
          "label": "Tangential",
          "value": "tangential"
        },
        {
          "label": "Circumstantial",
          "value": "circumstantial"
        },
        {
          "label": "Flight of ideas",
          "value": "flight_of_ideas"
        },
        {
          "label": "Poverty of thought",
          "value": "poverty"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "thought_form_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "thought_form",
        "includes": "na"
      }
    },
    {
      "name": "thought_content",
      "label": "6.2 Content",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Age-appropriate fantasy / imagination",
          "value": "fantasy"
        },
        {
          "label": "Abnormal thought content (describe)",
          "value": "abnormal"
        },
        {
          "label": "Persecutory / fearful themes in play or speech",
          "value": "persecutory"
        },
        {
          "label": "Obsessional themes",
          "value": "obsessional"
        },
        {
          "label": "Suicidal ideation (assess carefully)",
          "value": "suicidal"
        },
        {
          "label": "Self-harm ideation",
          "value": "self_harm"
        },
        {
          "label": "Violent themes",
          "value": "violent"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "thought_content_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "thought_content",
        "includes": "na"
      }
    },
    {
      "name": "thought_content_description",
      "label": "Describe abnormal thought content",
      "type": "input",
      "showIf": {
        "field": "thought_content",
        "includes": "abnormal"
      }
    },
    {
      "type": "subheading",
      "label": "7. Perception"
    },
    {
      "name": "perception",
      "label": "Perception",
      "type": "checkbox-group",
      "options": [
        {
          "label": "No perceptual disturbance noted",
          "value": "none"
        },
        {
          "label": "Auditory hallucinations (assess carefully — distinguish from imagination/play)",
          "value": "auditory"
        },
        {
          "label": "Visual hallucinations",
          "value": "visual"
        },
        {
          "label": "Illusions",
          "value": "illusions"
        },
        {
          "label": "Derealization / depersonalization (age ≥ 8)",
          "value": "derealization"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "perception_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "perception",
        "includes": "na"
      }
    },
    {
      "type": "subheading",
      "label": "8. Sensorium"
    },
    {
      "name": "consciousness",
      "label": "8.1 Consciousness",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Alert",
          "value": "alert"
        },
        {
          "label": "Lethargic / drowsy",
          "value": "drowsy"
        },
        {
          "label": "Confused",
          "value": "confused"
        },
        {
          "label": "Clouded",
          "value": "clouded"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "consciousness_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "consciousness",
        "equals": "na"
      }
    },
    {
      "name": "orientation",
      "label": "8.2 Orientation ⚠ AGE-GATED — apply only if ≥ 7 years",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Oriented to person",
          "value": "person"
        },
        {
          "label": "Oriented to place",
          "value": "place"
        },
        {
          "label": "Oriented to time",
          "value": "time"
        },
        {
          "label": "Not assessable — age",
          "value": "age_na"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "orientation_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "orientation",
        "includes": "na"
      }
    },
    {
      "name": "orientation_age_note",
      "type": "note",
      "label": "Orientation testing is typically valid for children ≥ 7 years",
      "showIf": {
        "field": "patient_age",
        "lessThan": 7
      }
    },
    {
      "name": "memory",
      "label": "8.3 Memory (observe in context)",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Intact for age",
          "value": "intact"
        },
        {
          "label": "Mildly impaired",
          "value": "mild"
        },
        {
          "label": "Moderately impaired",
          "value": "moderate"
        },
        {
          "label": "Not formally assessed",
          "value": "not_assessed"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "memory_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "memory",
        "equals": "na"
      }
    },
    {
      "type": "subheading",
      "label": "9. Insight & Judgment"
    },
    {
      "name": "insight",
      "label": "9.1 Insight",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Age-appropriate understanding of difficulties",
          "value": "age_appropriate"
        },
        {
          "label": "Limited — acknowledges problems only when prompted",
          "value": "limited"
        },
        {
          "label": "Impaired for developmental level — minimises or denies",
          "value": "impaired"
        },
        {
          "label": "Not assessable — age / developmental level",
          "value": "not_assessable"
        },
        {
          "label": "Child able to name what they find difficult",
          "value": "can_describe"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "insight_description",
      "label": "Document what the child reports as difficult",
      "type": "input",
      "showIf": {
        "field": "insight",
        "includes": "can_describe"
      }
    },
    {
      "name": "insight_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "insight",
        "includes": "na"
      }
    },
    {
      "name": "judgment",
      "label": "9.2 Judgment",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Age-appropriate — makes reasonable choices in play / tasks",
          "value": "age_appropriate"
        },
        {
          "label": "Limited — impulsive decisions without considering consequences",
          "value": "limited"
        },
        {
          "label": "Significantly impaired — no awareness of social consequences",
          "value": "impaired"
        },
        {
          "label": "Not assessable — age",
          "value": "not_assessable"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "judgment_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "judgment",
        "equals": "na"
      }
    },
    {
      "type": "subheading",
      "label": "10. Caregiver-Observed Behaviour During Session"
    },
    {
      "name": "caregiver_observation",
      "label": "10. Caregiver-Observed Behaviour During Session",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Caregiver's description of child's current state matches clinician observation",
          "value": "matches"
        },
        {
          "label": "Caregiver notes child is 'not themselves today'",
          "value": "not_themselves"
        },
        {
          "label": "Significant discrepancy between caregiver report and observed behaviour (document)",
          "value": "discrepancy"
        },
        {
          "label": "Caregiver interaction style noted",
          "value": "interaction_style"
        },
        {
          "label": "Not Applicable (N/A)",
          "value": "na"
        }
      ]
    },
    {
      "name": "caregiver_discrepancy_details",
      "label": "Describe discrepancy between caregiver report and observed behaviour",
      "type": "input",
      "showIf": {
        "field": "caregiver_observation",
        "includes": "discrepancy"
      }
    },
    {
      "name": "caregiver_interaction_style",
      "label": "Caregiver interaction style",
      "type": "checkbox-group",
      "options": [
        {
          "label": "Warm",
          "value": "warm"
        },
        {
          "label": "Dismissive",
          "value": "dismissive"
        },
        {
          "label": "Anxious",
          "value": "anxious"
        },
        {
          "label": "Enmeshed",
          "value": "enmeshed"
        },
        {
          "label": "Disengaged",
          "value": "disengaged"
        }
      ],
      "showIf": {
        "field": "caregiver_observation",
        "includes": "interaction_style"
      }
    },
    {
      "name": "caregiver_na_reason",
      "label": "Specify why Not Applicable",
      "type": "input",
      "showIf": {
        "field": "caregiver_observation",
        "includes": "na"
      }
    },
    {
      "name": "additional_comments",
      "label": "Additional comments",
      "type": "input",
      "placeholder": "Enter any overall observations, notes, or summary..."
    }
  ]
}

const ASSESSMENT = {
  "fields": [
    {
      "name": "clinicalImpression",
      "label": "Clinical Impression",
      "type": "input"
    }
  ]
}

const PLAN = {
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
    },
    {
      "type": "input",
      "label": "Intervention",
      "name": "intervention"
    }
  ]
}


const SESSION = {
  "sections": [
    {
      "fields": [
        {
          "name": "session_type",
          "label": "Session Type",
          "type": "radio",
          "options": [
            {
              "label": "Individual",
              "value": "individual"
            },
            {
              "label": "Family",
              "value": "family"
            },
            {
              "label": "Couple",
              "value": "couple"
            }
          ]
        },
        {
          "name": "attender_present",
          "label": "Carer present",
          "type": "radio",
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
          "name": "attender_name",
          "label": "Specific Name",
          "type": "input",
          "showIf": {
            "field": "attender_present",
            "equals": "yes"
          }
        },
        {
          "name": "attender_relationship",
          "label": "Relationship",
          "type": "input",
          "showIf": {
            "field": "attender_present",
            "equals": "yes"
          }
        }
      ]
    }
  ]
}

export default {
  PLAN,
  SESSION,
  OBJECTIVE,
  SUBJECTIVE,
  ASSESSMENT,
};
