const SUBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "name": "chief_complaint",
          "label": "Chief Complaint",
          "type": "input"
        },
        {
          "name": "hpi",
          "label": "History of Present Illness",
          "type": "input"
        },
       {
            "name": "session_for",
            "label": "Session For",
            "type": "checkbox-group",
            "options": [
              { "label": "Auditory",    "values": "auditory"    },
              { "label": "Tinnitus",    "values": "tinnitus"    },
              { "label": "Hyperacusis", "values": "hyperacusis" },
              { "label": "Vestibular",  "values": "vestibular"  },
            ],
          },
           {
            "name": "consent",
            "label": "Consent",
            "type": "checkbox-group",
            "options": [{
              "label": "Consultation has been given based on findings. Client was in his/her best interest.",
              "values": "yes",
            }],
          },
            { "name": "new_complaints", "label": "New Complaint(s)", "type": "input" },
          
{
  "name": "audio_session",
  "label": "Session(s)",
  "type": "number",
  "props": {
    "min": 1,
    "max": 1000
  },
  "validation": {
    "required": true,
    "min": 1,
    "max": 1000
  },
  "default": 1
}

      ]
    }
  ]
}

const OBJECTIVE = {
  "sections": [
    {
      "fields": [
        { "name": "case_overview", "label": "Case Overview", "type": "input" },
          {
            "name": "modalities",
            "label": "Modalities",
            "type": "checkbox-group",
            "options": [
              { "label": "Home Exercise",       "values": "home_exercise"   },
              { "label": "In Office Training",  "values": "office_training" },
              { "label": "Both",                "values": "both"            },
              { "label": "Device-Based Therapy","values": "device_based"   },
            ],
          },
         {
            "name": "strategy_category",
            "label": "Strategies Category",
            "type": "radio",
            "options": [
                { "label": "Auditory", "values": "auditory" },
                { "label": "Tinnitus", "values": "tinnitus" },
                { "label": "Hyperacusis", "values": "hyperacusis" },
                { "label": "Vestibular", "values": "vestibular" },
            ],
            },

            {
            "name": "strategies_auditory",
            "label": "Strategies",
            "type": "checkbox-group",
            "showIf": {
                field: "strategy_category",
                "equals": "auditory",
            },
            "options": [
                { "label": "Hearing Aid Trial", "values": "hearing_aid_trial" },
                { "label": "Hearing Aid Fitting", "values": "hearing_aid_fitting" },
                { "label": "Hearing Aid Verification", "values": "hearing_aid_verification" },
                { "label": "Hearing Aid Validation", "values": "hearing_aid_validation" },
                { "label": "Auditory Training", "values": "auditory_training" },
            ],
            },

            {
            "name": "strategies_tinnitus",
            "label": "Strategies",
            "type": "checkbox-group",
            "showIf": {
                "field": "strategy_category",
                "equals": "tinnitus",
            },
            "options": [
                { "label": "Tinnitus Retraining Therapy", "values": "trt" },
                { "label": "Sound Therapy", "values": "sound_therapy" },
                {
                "label": "Hearing Aids or Assistive Devices",
                "values": "assistive_devices",
                },
                { "label": "Counselling", "values": "counselling" },
            ],
            },

            {
            "name": "strategies_hyperacusis",
            "label": "Strategies",
            "type": "checkbox-group",
            "showIf": {
                "field": "strategy_category",
                "equals": "hyperacusis",
            },
            "options": [
                {
                "label": "Sound Desensitisation or Sound Tolerance Training",
                "values": "sound_desensitisation",
                },
                {
                "label": "Hearing Aids or Assistive Devices",
                "values": "assistive_devices",
                },
                {
                "label": "Environmental Modification",
                "values": "environmental_modification",
                },
                { "label": "Counselling", "values": "counselling" },
            ],
            },

            {
            "name": "strategies_vestibular",
            "label": "Strategies",
            "type": "checkbox-group",
            "showIf": {
                "field": "strategy_category",
                "equals": "vestibular",
            },
            "options": [
                {
                "label": "Vestibular Rehabilitation Exercises",
                "values": "vestibular_rehab",
                },
                {
                "label": "Canalith Repositioning Maneuver",
                "values": "crm",
                },
                {
                "label": "Gaze Stability Training",
                "values": "gaze_stability",
                },
                {
                "label": "Fall Prevention Education",
                "values": "fall_prevention",
                },
                {
                "label": "Psychosocial Counseling",
                "values": "psychosocial_counselling",
                },
            ],
            },
          {
            "name": "objectives",
            "label": "Objective(s)",
            "type": "dynamic-section",
            "fields": [{ 
                "name": "objective", "label": "Objective", "type": "input" 
            }],
          },
      ]
    }
  ]
};

const ASSESSMENT = {
  "sections": [
    {
      "fields": [
        {
          "type": "input",
          "name": "clinical_impression",
          "label": "Clinical Impression"
        },
          {
            "name": "tasks",
            "type": "dynamic-section",
            fields: [
              { "name": "task",        "label": "Task",             "type": "input"    },
              {
                "name": "achievement",
                "label": "Achievement",
                "type": "radio",
                "labelAbove": true,
                "options": [
                  { "label": "Excellent", "values": "excellent" },
                  { "label": "Good",      "values": "good"      },
                  { "label": "Fair",      "values": "fair"      },
                  { "label": "Poor",      "values": "poor"      },
                ],
              },
              { "name": "comment", "label": "Comment / Remark", "type": "input" },
            ],
          },
      ]
    }
  ]
};

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
        { "name": "plan",    "label": "Plan",    "type": "input" },
          { "name": "comment", "label": "Comment", "type": "input" },
          { "name": "remark",  "label": "Remark",  "type": "input" },
      ]
    }
  ]
};

export default {
  PLAN,
  OBJECTIVE,
  SUBJECTIVE,
  ASSESSMENT,
};
