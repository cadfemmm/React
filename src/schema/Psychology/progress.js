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
          "label": "Accompanied By",
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

const SUBJECTIVE = {
  "sections": [
    {
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
          "name": "progress_since_last_session",
          "label": "Progress since last session",
          "type": "input",
          "placeholder": "Enter progress details..."
        },
        {
          "name": "new_symptoms",
          "label": "New Symptoms / Issues",
          "type": "radio",
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "Present",
              "value": "present"
            }
          ]
        },
        {
          "name": "symptoms_category",
          "label": "Symptoms Category",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Mood",
              "value": "mood"
            },
            {
              "label": "Sleep",
              "value": "sleep"
            },
            {
              "label": "Appetite",
              "value": "appetite"
            },
            {
              "label": "Anxiety",
              "value": "anxiety"
            },
            {
              "label": "Psychosis",
              "value": "psychosis"
            },
            {
              "label": "Pain",
              "value": "pain"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ],
          "showIf": {
            "field": "new_symptoms",
            "equals": "present"
          }
        },
        {
          "name": "mood_description",
          "label": "Mood - Description",
          "type": "input",
          "showIf": {
            "field": "symptoms_category",
            "includes": "mood"
          }
        },
        {
          "name": "mood_onset",
          "label": "Mood - Onset",
          "type": "date",
          "showIf": {
            "field": "symptoms_category",
            "includes": "mood"
          }
        },
        {
          "name": "mood_severity",
          "label": "Mood - Severity",
          "type": "radio",
          "options": [
            {
              "label": "Mild",
              "value": "mild"
            },
            {
              "label": "Moderate",
              "value": "moderate"
            },
            {
              "label": "Severe",
              "value": "severe"
            }
          ],
          "showIf": {
            "field": "symptoms_category",
            "includes": "mood"
          }
        },
        {
          "name": "sleep_description",
          "label": "Sleep - Description",
          "type": "input",
          "showIf": {
            "field": "symptoms_category",
            "includes": "sleep"
          }
        },
        {
          "name": "sleep_onset",
          "label": "Sleep - Onset",
          "type": "date",
          "showIf": {
            "field": "symptoms_category",
            "includes": "sleep"
          }
        },
        {
          "name": "sleep_severity",
          "label": "Sleep - Severity",
          "type": "radio",
          "options": [
            {
              "label": "Mild",
              "value": "mild"
            },
            {
              "label": "Moderate",
              "value": "moderate"
            },
            {
              "label": "Severe",
              "value": "severe"
            }
          ],
          "showIf": {
            "field": "symptoms_category",
            "includes": "sleep"
          }
        },
        {
          "name": "other_symptom_name",
          "label": "Other Symptom",
          "type": "input",
          "placeholder": "Enter symptom name",
          "showIf": {
            "field": "symptoms_category",
            "includes": "others"
          }
        },
        {
          "name": "others_description",
          "label": "Others - Description",
          "type": "input",
          "showIf": {
            "field": "symptoms_category",
            "includes": "others"
          }
        },
        {
          "name": "others_onset",
          "label": "Others - Onset",
          "type": "date",
          "showIf": {
            "field": "symptoms_category",
            "includes": "others"
          }
        },
        {
          "name": "others_severity",
          "label": "Others - Severity",
          "type": "radio",
          "options": [
            {
              "label": "Mild",
              "value": "mild"
            },
            {
              "label": "Moderate",
              "value": "moderate"
            },
            {
              "label": "Severe",
              "value": "severe"
            }
          ],
          "showIf": {
            "field": "symptoms_category",
            "includes": "others"
          }
        },
        {
          "name": "description",
          "label": "Description",
          "type": "input",
          "showIf": {
            "field": "symptoms_category",
            "equals": "others"
          }
        },
        {
          "name": "onset",
          "label": "Onset",
          "type": "date",
          "showIf": {
            "field": "new_symptoms",
            "equals": "present"
          }
        },
        {
          "name": "severity",
          "label": "Severity",
          "type": "radio",
          "options": [
            {
              "label": "Mild",
              "value": "mild"
            },
            {
              "label": "Moderate",
              "value": "moderate"
            },
            {
              "label": "Severe",
              "value": "severe"
            }
          ],
          "showIf": {
            "field": "new_symptoms",
            "equals": "present"
          }
        },
        {
          "name": "medication_adherence",
          "label": "Medication Adherence",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Fully Adherent",
              "value": "fully_adherent"
            },
            {
              "label": "Partially Adherent",
              "value": "partially_adherent"
            },
            {
              "label": "Non-Adherent",
              "value": "non_adherent"
            },
            {
              "label": "Not Applicable",
              "value": "not_applicable"
            }
          ]
        },
        {
          "name": "fully_adherent_input",
          "label": "Details",
          "type": "input",
          "showIf": {
            "field": "medication_adherence",
            "equals": "fully_adherent"
          }
        },
        {
          "name": "partial_reason",
          "label": "Partially Adherent Type",
          "type": "radio",
          "options": [
            {
              "label": "Irregular",
              "value": "irregular"
            },
            {
              "label": "Missed Doses",
              "value": "missed_doses"
            }
          ],
          "showIf": {
            "field": "medication_adherence",
            "equals": "partially_adherent"
          }
        },
        {
          "name": "non_adherent_reason",
          "label": "Reason",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Forgot",
              "value": "forgot"
            },
            {
              "label": "Side effects",
              "value": "side_effects"
            },
            {
              "label": "Cost issues",
              "value": "cost_issues"
            },
            {
              "label": "Lack of insight",
              "value": "lack_of_insight"
            },
            {
              "label": "Intentional discontinuation",
              "value": "intentional_discontinuation"
            },
            {
              "label": "Access issues",
              "value": "access_issues"
            },
            {
              "label": "Other",
              "value": "other"
            }
          ],
          "showIf": {
            "field": "medication_adherence",
            "equals": "non_adherent"
          }
        },
        {
          "name": "non_adherent_other",
          "label": "Please specify",
          "type": "input",
          "placeholder": "Enter reason...",
          "showIf": {
            "field": "non_adherent_reason",
            "equals": "other"
          }
        },
        {
          "name": "description",
          "label": "Description",
          "type": "input",
          "showIf": {
            "field": "reason",
            "equals": "other"
          }
        },
        {
          "name": "substance_use",
          "label": "Drug Review",
          "type": "checkbox-group",
          "options": [
            {
              "label": "No Usage",
              "value": "no_usage"
            },
            {
              "label": "No Change",
              "value": "no_change"
            },
            {
              "label": "Increased",
              "value": "increased"
            },
            {
              "label": "Reduced",
              "value": "reduced"
            },
            {
              "label": "Relapsed",
              "value": "relapsed"
            },
            {
              "label": "Abstinent",
              "value": "abstinent"
            }
          ]
        },
        {
          "name": "substance_type",
          "label": "Substance Type",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Alcohol",
              "value": "alcohol"
            },
            {
              "label": "Tobacco",
              "value": "tobacco"
            },
            {
              "label": "Cannabis",
              "value": "cannabis"
            },
            {
              "label": "Opioids",
              "value": "opioids"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ],
          "showIf": {
            "field": "substance_use",
            "oneOf": [
              "increased",
              "relapsed"
            ]
          }
        },
        {
          "name": "alcohol_frequency",
          "label": "Alcohol - Frequency",
          "type": "radio",
          "options": [
            {
              "label": "Daily",
              "value": "daily"
            },
            {
              "label": "Weekly",
              "value": "weekly"
            },
            {
              "label": "Occasional",
              "value": "occasional"
            }
          ],
          "showIf": {
            "field": "substance_type",
            "includes": "alcohol"
          }
        },
        {
          "name": "alcohol_quantity",
          "label": "Alcohol - Quantity",
          "type": "input",
          "placeholder": "e.g. 2 drinks/day",
          "showIf": {
            "field": "substance_type",
            "includes": "alcohol"
          }
        },
        {
          "name": "alcohol_last_use",
          "label": "Alcohol - Last Use",
          "type": "date",
          "showIf": {
            "field": "substance_type",
            "includes": "alcohol"
          }
        },
        {
          "name": "tobacco_frequency",
          "label": "Tobacco - Frequency",
          "type": "radio",
          "options": [
            {
              "label": "Daily",
              "value": "daily"
            },
            {
              "label": "Weekly",
              "value": "weekly"
            },
            {
              "label": "Occasional",
              "value": "occasional"
            }
          ],
          "showIf": {
            "field": "substance_type",
            "includes": "tobacco"
          }
        },
        {
          "name": "tobacco_quantity",
          "label": "Tobacco - Quantity",
          "type": "input",
          "placeholder": "e.g. 5 cigarettes/day",
          "showIf": {
            "field": "substance_type",
            "includes": "tobacco"
          }
        },
        {
          "name": "tobacco_last_use",
          "label": "Tobacco - Last Use",
          "type": "date",
          "showIf": {
            "field": "substance_type",
            "includes": "tobacco"
          }
        },
        {
          "name": "cannabis_frequency",
          "label": "Cannabis - Frequency",
          "type": "radio",
          "options": [
            {
              "label": "Daily",
              "value": "daily"
            },
            {
              "label": "Weekly",
              "value": "weekly"
            },
            {
              "label": "Occasional",
              "value": "occasional"
            }
          ],
          "showIf": {
            "field": "substance_type",
            "includes": "cannabis"
          }
        },
        {
          "name": "cannabis_quantity",
          "label": "Cannabis - Quantity",
          "type": "input",
          "placeholder": "e.g. 5 cigarettes/day",
          "showIf": {
            "field": "substance_type",
            "includes": "cannabis"
          }
        },
        {
          "name": "cannabis_last_use",
          "label": "Cannabis - Last Use",
          "type": "date",
          "showIf": {
            "field": "substance_type",
            "includes": "cannabis"
          }
        },
        {
          "name": "opioids_frequency",
          "label": "Opioids - Frequency",
          "type": "radio",
          "options": [
            {
              "label": "Daily",
              "value": "daily"
            },
            {
              "label": "Weekly",
              "value": "weekly"
            },
            {
              "label": "Occasional",
              "value": "occasional"
            }
          ],
          "showIf": {
            "field": "substance_type",
            "includes": "opioids"
          }
        },
        {
          "name": "opioids_quantity",
          "label": "Opioids - Quantity",
          "type": "input",
          "placeholder": "e.g. 5 cigarettes/day",
          "showIf": {
            "field": "substance_type",
            "includes": "opioids"
          }
        },
        {
          "name": "opioids_last_use",
          "label": "Opioids - Last Use",
          "type": "date",
          "showIf": {
            "field": "substance_type",
            "includes": "opioids"
          }
        },
        {
          "name": "others_frequency",
          "label": "Others - Frequency",
          "type": "radio",
          "layout": "vertical",
          "options": [
            {
              "label": "Daily",
              "value": "daily"
            },
            {
              "label": "Weekly",
              "value": "weekly"
            },
            {
              "label": "Occasional",
              "value": "occasional"
            },
            {
              "label": "Other",
              "value": "other"
            }
          ],
          "showIf": {
            "field": "substance_type",
            "includes": "others"
          }
        },
        {
          "name": "others_frequency_other",
          "label": "Please specify",
          "type": "input",
          "placeholder": "Enter frequency",
          "showIf": {
            "field": "others_frequency",
            "equals": "other"
          }
        },
        {
          "name": "others_quantity",
          "label": "Others - Quantity",
          "type": "input",
          "placeholder": "e.g. amount/day",
          "showIf": {
            "field": "substance_type",
            "includes": "others"
          }
        },
        {
          "name": "others_last_use",
          "label": "Others - Last Use",
          "type": "date",
          "showIf": {
            "field": "substance_type",
            "includes": "others"
          }
        }
      ]
    }
  ]
}

const OBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Client’s Condition"
        },
        {
          "name": "mood_affect",
          "label": "Mood & Affect",
          "type": "radio",
          "options": [
            {
              "label": "No Change",
              "value": "no_change"
            },
            {
              "label": "Notable Change",
              "value": "Notable_Change"
            }
          ]
        },
        {
          "name": "mood_affect_details",
          "label": "Specify Details",
          "type": "input",
          "placeholder": "Enter details",
          "showIf": {
            "field": "mood_affect",
            "equals": "Notable_Change"
          }
        },
        {
          "name": "thought_process",
          "label": "Thought Process",
          "type": "radio",
          "options": [
            {
              "label": "No Change",
              "value": "no_change"
            },
            {
              "label": "Notable Change",
              "value": "Notable_Change"
            }
          ]
        },
        {
          "name": "thought_process_details",
          "label": "Specify Details",
          "type": "input",
          "showIf": {
            "field": "thought_process",
            "equals": "Notable_Change"
          }
        },
        {
          "name": "behavior_functioning",
          "label": "Behavior / Functioning",
          "type": "radio",
          "options": [
            {
              "label": "No Change",
              "value": "no_change"
            },
            {
              "label": "Notable Change",
              "value": "Notable_Change"
            }
          ]
        },
        {
          "name": "behavior_functioning_details",
          "label": "Specify Details",
          "type": "input",
          "showIf": {
            "field": "behavior_functioning",
            "equals": "Notable_Change"
          }
        },
        {
          "name": "medical_condition",
          "label": "Medical Condition",
          "type": "radio",
          "options": [
            {
              "label": "No Change",
              "value": "no_change"
            },
            {
              "label": "Notable Change",
              "value": "Notable_Change"
            }
          ]
        },
        {
          "name": "medical_condition_details",
          "label": "Specify Details",
          "type": "input",
          "showIf": {
            "field": "medical_condition",
            "equals": "Notable_Change"
          }
        },
        {
          "name": "substance_use",
          "label": "Substance Use",
          "type": "radio",
          "options": [
            {
              "label": "No Change",
              "value": "no_change"
            },
            {
              "label": "Notable Change",
              "value": "Notable_Change"
            }
          ]
        },
        {
          "name": "substance_use_details",
          "label": "Specify Details",
          "type": "input",
          "showIf": {
            "field": "substance_use",
            "equals": "Notable_Change"
          }
        },
        {
          "type": "subheading",
          "label": "Risk Assessment"
        },
        {
          "name": "risk_assessment",
          "label": "Risk Status",
          "type": "radio",
          "options": [
            {
              "label": "No risk",
              "value": "no_risk"
            },
            {
              "label": "Suicidal Ideation",
              "value": "Suicidal Ideation"
            },
            {
              "label": "Homicidal ideation",
              "value": "homicidal_ideation"
            },
            {
              "label": "Self-harm risk",
              "value": "self_harm_risk"
            },
            {
              "label": "Risk to others",
              "value": "risk_to_others"
            }
          ]
        },
        {
          "name": "risk_checkbox",
          "label": "",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Ideation",
              "value": "ideation"
            },
            {
              "label": "Plan",
              "value": "plan"
            },
            {
              "label": "Intent",
              "value": "Intent"
            },
            {
              "label": "Attempt",
              "value": "attempt"
            }
          ],
          "showIf": {
            "field": "risk_assessment",
            "oneOf": [
              "Suicidal Ideation",
              "self_harm_risk",
              "risk_to_others"
            ]
          }
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
          "name": "clinicalImpression",
          "label": "Clinical Impression",
          "type": "input"
        },
        {
          "name": "clinical_progress_summary",
          "label": "Clinical Progress Summary",
          "type": "input"
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
          "type": "subheading",
          "label": "Therapeutic Interventions"
        },
        {
          "name": "continue_same_plan",
          "label": "Continue Same Plan",
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
          "name": "plan_changes",
          "label": "Specify changes",
          "type": "input",
          "showIf": {
            "field": "continue_same_plan",
            "equals": "no"
          }
        },
        {
          "name": "interventions_delivered",
          "label": "Therapeutic Interventions Delivered in Session",
          "type": "input"
        },
        {
          "name": "client_response",
          "label": "Client’s Response / Progress Toward Goals",
          "type": "input"
        },
        {
          "name": "plan_additional_info",
          "label": "Plan / Additional Information (Between sessions)",
          "type": "input"
        },
        {
          "type": "subheading",
          "label": "Risk Management Plan"
        },
        {
          "name": "safety_plan_initiated",
          "label": "Safety Plan Initiated",
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
          "name": "family_involvement",
          "label": "Family Involvement",
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
          "name": "psychiatric_referral",
          "label": "Psychiatric Referral",
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
          "name": "psychiatric_referral_specify",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "psychiatric_referral",
            "equals": "yes"
          }
        },
        {
          "type": "subheading",
          "label": "Follow-up"
        },
        {
          "name": "follow_up_visit_scheduled",
          "label": "Follow-up Visit Scheduled",
          "type": "date"
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
  SESSION
};