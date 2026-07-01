const SUBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "name": "chief_complaint",
          "label": "Chief Complaint",
          "type": "input",
          "placeholder": "Enter patient complaint..."
        },
        {
          "name": "hpi",
          "label": "History of Presenting Illness (HPI)",
          "type": "input"
        },
        {
          "name": "consent_type",
          "label": " Consent",
          "type": "single-select",
          "options": [
            {
              "label": "Dry Needling",
              "value": "dry_needling"
            },
            {
              "label": "ATV Form",
              "value": "atv"
            }
          ]
        },
        {
          "name": "aggravating_factors",
          "label": "Aggravating Factors",
          "type": "input",
          "placeholder": "What increases the pain?"
        },
        {
          "name": "relieving_factors",
          "label": "Relieving Factors",
          "type": "input",
          "placeholder": "What reduces the pain?"
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
          "label": "Objective — Trigger Points"
        },
        {
          "name": "trigger_points",
          "label": "Trigger Points Identified",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Cervical",
              "value": "cervical"
            },
            {
              "label": "Thoracic",
              "value": "thoracic"
            },
            {
              "label": "Lumbar",
              "value": "lumbar"
            },
            {
              "label": "Upper Limb",
              "value": "upper_limb"
            },
            {
              "label": "Lower Limb",
              "value": "lower_limb"
            }
          ]
        },
        {
          "name": "cervical_region",
          "label": "Cervical Region Details",
          "type": "input",
          "placeholder": "Enter cervical region details...",
          "showIf": {
            "field": "trigger_points",
            "includes": "cervical"
          }
        },
        {
          "name": "thoracic_region",
          "label": "Thoracic Region Details",
          "type": "input",
          "placeholder": "Enter thoracic region details...",
          "showIf": {
            "field": "trigger_points",
            "includes": "thoracic"
          }
        },
        {
          "name": "lumbar_region",
          "label": "Lumbar Region Details",
          "type": "input",
          "placeholder": "Enter lumbar region details...",
          "showIf": {
            "field": "trigger_points",
            "includes": "lumbar"
          }
        },
        {
          "name": "upper_limb_region",
          "label": "Upper Limb Region Details",
          "type": "input",
          "placeholder": "Enter upper limb details...",
          "showIf": {
            "field": "trigger_points",
            "includes": "upper_limb"
          }
        },
        {
          "name": "lower_limb_region",
          "label": "Lower Limb Region Details",
          "type": "input",
          "placeholder": "Enter lower limb details...",
          "showIf": {
            "field": "trigger_points",
            "includes": "lower_limb"
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
          "name": "clinical_impression",
          "label": "Clinical Impression",
          "type": "input"
        },
        {
          "name": "assessment_diagnosis",
          "label": "Diagnosis",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Myofascial Pain Syndrome",
              "value": "myofascial_pain"
            },
            {
              "label": "Muscle Tightness / Spasm",
              "value": "muscle_tightness"
            },
            {
              "label": "Postural Related Pain",
              "value": "postural_pain"
            },
            {
              "label": "Other",
              "value": "other"
            }
          ]
        },
        {
          "name": "assessment_other",
          "label": "Specify Other",
          "type": "input",
          "placeholder": "Enter details...",
          "showIf": {
            "field": "assessment_diagnosis",
            "includes": "other"
          }
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
          "name": "shortterm_blocks"
        },
        {
          "type": "subheading",
          "label": "Long-Term Goals (6–12 weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "longterm_blocks"
        },
        {
          "type": "dynamic-table",
          "name": "intervention_rows",
          "label": "I — Intervention (Dry Needling Details)",
          "minRows": 4,
          "columns": [
            {
              "key": "muscle",
              "label": "Muscle",
              "type": "input",
              "placeholder": "Muscle name"
            },
            {
              "key": "side",
              "label": "Side (L/R)",
              "type": "single-select",
              "options": [
                {
                  "label": "L",
                  "value": "L"
                },
                {
                  "label": "R",
                  "value": "R"
                },
                {
                  "label": "Both",
                  "value": "both"
                }
              ]
            },
            {
              "key": "no_trps",
              "label": "No. of TrPs",
              "type": "number",
              "placeholder": "—"
            },
            {
              "key": "needle_length",
              "label": "Needle Length (mm)",
              "type": "number",
              "placeholder": "—"
            },
            {
              "key": "technique",
              "label": "Technique",
              "type": "single-select",
              "options": [
                {
                  "label": "Static",
                  "value": "static"
                },
                {
                  "label": "Pistoning",
                  "value": "pistoning"
                }
              ]
            },
            {
              "key": "twitch_response",
              "label": "Twitch Response",
              "type": "single-select",
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
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Plan"
        },
        {
          "name": "treatment_plan",
          "label": "Select Treatment Plan",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Dry Needling",
              "value": "dry_needling"
            },
            {
              "label": "Stretching",
              "value": "stretching"
            },
            {
              "label": "Strengthening",
              "value": "strengthening"
            },
            {
              "label": "Postural Correction",
              "value": "postural_correction"
            },
            {
              "label": "Home Exercise Program",
              "value": "hep"
            },
            {
              "label": "Other",
              "value": "other"
            }
          ]
        },
        {
          "name": "plan_other",
          "label": "Specify Other",
          "type": "input",
          "placeholder": "Enter additional plan...",
          "showIf": {
            "field": "treatment_plan",
            "includes": "other"
          }
        },
        {
          "type": "subheading",
          "label": "Evaluation"
        },
        {
          "name": "pain_score",
          "label": "Pain Score(Visual Analog Scale)",
          "type": "scale-slider",
          "min": 0,
          "max": 10,
          "ranges": [
            {
              "min": 0,
              "max": 1,
              "label": "Mild",
              "color": "#22c55e"
            },
            {
              "min": 1,
              "max": 5,
              "label": "Moderate",
              "color": "#facc15"
            },
            {
              "min": 5,
              "max": 10,
              "label": "Severe",
              "color": "#ef4444"
            }
          ],
          "showValue": true
        },
        {
          "name": "immediate_response",
          "label": "Immediate Response",
          "type": "radio",
          "options": [
            {
              "label": "Improved",
              "value": "improved"
            },
            {
              "label": "No Change",
              "value": "no_change"
            },
            {
              "label": "Worse",
              "value": "worse"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Reassessment / Review"
        },
        {
          "name": "progress",
          "label": "Progress",
          "type": "input",
          "placeholder": "Describe patient progress..."
        },
        {
          "name": "remaining_issues",
          "label": "Remaining Issues",
          "type": "input",
          "placeholder": "Enter remaining problems or concerns..."
        },
        {
          "name": "next_session_plan",
          "label": "Plan Next Session",
          "type": "input",
          "placeholder": "Outline next session plan..."
        },
        {
          "name": "post_treatment_advice",
          "label": "Post-Treatment Advice",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Soreness 24–48 hours is normal",
              "value": "soreness"
            },
            {
              "label": "Hydrate well",
              "value": "hydrate"
            },
            {
              "label": "Gentle stretching",
              "value": "stretching"
            },
            {
              "label": "Report adverse symptoms",
              "value": "report"
            },
            {
              "label": "Others",
              "value": "other"
            }
          ]
        },
        {
          "name": "post_treatment_other",
          "label": "Others",
          "type": "input",
          "placeholder": "Enter other advice...",
          "showIf": {
            "field": "post_treatment_advice",
            "includes": "other"
          }
        }
      ]
    }
  ]
}