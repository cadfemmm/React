import React, { useEffect, useState } from "react";
import CommonFormBuilder from "../CommonComponenets/FormBuilder";
import PatientCard from "../../shared/cards/PatientCard";

/* =========================================================
   TABS
========================================================= */

const TAB_ORDER = [
  "subjective",
  "objective",
  "assessment",
  "plan"
];

/* =========================================================
   ACTIONS
========================================================= */

const ACTIONS = [
  { type: "back", label: "Back" },
  { type: "clear", label: "Clear" },
  { type: "save", label: "Save" }
];

/* =========================================================
   SUBJECTIVE
========================================================= */

const SUBJECTIVE_SCHEMA = {
  title: "",
  actions: ACTIONS,

  sections: [
    {
      fields: [
        {
          type: "textarea",
          name: "case_overview",
          label: "Case Overview"
        },

        {
          type: "single-select",
          name: "session_for",
          label: "Session For",
          options: [
            { label: "Prosthetic Training", value: "prosthetic_training" },
            { label: "Orthotic Training", value: "orthotic_training" },
            { label: "Gait Training", value: "gait_training" },
            { label: "Stump Care", value: "stump_care" },
            { label: "Others", value: "others" }
          ]
        },

        {
          type: "single-select",
          name: "session_type",
          label: "Session Type",
          options: [
            { label: "Centre-based", value: "centre_based" },
            { label: "Home-based", value: "home_based" },
            { label: "Tele-rehab", value: "tele_rehab" }
          ]
        },

        {
          type: "radio",
          name: "new_complaint",
          label: "New Complaint",
          options: [
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" }
          ]
        },

        {
          type: "radio",
          name: "pain_during_session",
          label: "Pain During Session",
          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        // {
        //   type: "scale-slider",
        //   name: "pain_score",
        //   label: "Pain Score",
        //   min: 0,
        //   max: 10,
        //   showIf: {
        //     field: "pain_during_session",
        //     equals: "yes"
        //   }
        // },
        {
          "name": "pain_score",
          "label": "Pain Score",
          "type": "scale-slider",
          "min": 0,
          "max": 10,
          "ranges": [
            {
              "min": 0,
              "max": 3,
              "label": "Mild",
              "color": "#22c55e"
            },
            {
              "min": 4,
              "max": 7,
              "label": "Moderate",
              "color": "#facc15"
            },
            {
              "min": 8,
              "max": 10,
              "label": "Severe",
              "color": "#ef4444"
            }
          ],
          "showValue": true,
          "showIf": {
            "field": "pain_during_session",
            "equals": "yes"
  }
          
        },

        {
          type: "radio",
          name: "adverse_reaction",
          label: "Adverse Reaction",
          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" }
          ]
        },

        {
          type: "textarea",
          name: "adverse_reaction_details",
          label: "Adverse Reaction Details",
          showIf: {
            field: "adverse_reaction",
            equals: "yes"
          }
        },

        {
          type: "input",
          name: "session_number",
          label: "Session Number",
          readOnly: true
        },

        {
          type: "textarea",
          name: "subjective_remarks",
          label: "Remarks"
        }
      ]
    }
  ]
};

/* =========================================================
   OBJECTIVE
========================================================= */

const OBJECTIVE_SCHEMA = {
  title: "",
  actions: ACTIONS,

  sections: [
    {
      fields: [
        {
          type: "multi-select-dropdown",
          name: "therapeutic_exercise",
          label: "Therapeutic Exercise / Intervention",
          options: [
            { label: "Gait training", value: "gait_training" },
            { label: "Balance training", value: "balance_training" },
            { label: "Strengthening", value: "strengthening" },
            { label: "ROM exercise", value: "rom_exercise" },
            { label: "Transfer training", value: "transfer_training" },
            { label: "Prosthetic gait training", value: "prosthetic_gait_training" },
            { label: "Donning & doffing", value: "donning_doffing" },
            { label: "Stump bandaging", value: "stump_bandaging" },
            { label: "Stair training", value: "stair_training" },
            { label: "Weight shifting", value: "weight_shifting" },
            { label: "Others", value: "others" }
          ]
        },

        {
          type: "multi-select-dropdown",
          name: "modalities_equipment",
          label: "Modalities / Equipment",
          options: [
            { label: "Parallel bar", value: "parallel_bar" },
            { label: "Walker", value: "walker" },
            { label: "Quadripod", value: "quadripod" },
            { label: "Prosthesis", value: "prosthesis" },
            { label: "Orthosis", value: "orthosis" },
            { label: "Resistance band", value: "resistance_band" },
            { label: "Mirror therapy", value: "mirror_therapy" },
            { label: "TENS", value: "tens" },
            { label: "Ultrasound", value: "ultrasound" },
            { label: "Others", value: "others" }
          ]
        },

        {
          type: "textarea",
          name: "observation_during_treatment",
          label: "Observation During Treatment"
        },

        {
          type: "single-select",
          name: "tolerance",
          label: "Tolerance",
          options: [
            { label: "Good", value: "good" },
            { label: "Fair", value: "fair" },
            { label: "Poor", value: "poor" }
          ]
        },

        {
          type: "single-select",
          name: "assistance_level",
          label: "Assistance Level",
          options: [
            { label: "Independent", value: "independent" },
            { label: "Supervision", value: "supervision" },
            { label: "Min Assist", value: "min_assist" },
            { label: "Mod Assist", value: "mod_assist" },
            { label: "Max Assist", value: "max_assist" },
            { label: "Dependent", value: "dependent" }
          ]
        },

        {
          type: "input",
          name: "distance_repetition",
          label: "Distance / Repetition"
        },

        {
          type: "input",
          name: "skin_stump_check",
          label: "Skin / Stump Check"
        },

        {
          type: "textarea",
          name: "objective_remarks",
          label: "Remarks"
        }
      ]
    }
  ]
};

/* =========================================================
   ASSESSMENT
========================================================= */

const ASSESSMENT_SCHEMA = {
  title: "",
  actions: ACTIONS,

  sections: [
    {
      fields: [
        {
          type: "textarea",
          name: "response_to_intervention",
          label: "Response to Intervention"
        },

        {
          type: "single-select",
          name: "progression_status",
          label: "Progression Status",
          options: [
            { label: "Improved", value: "improved" },
            { label: "Static", value: "static" },
            { label: "Reduced", value: "reduced" }
          ]
        },

        {
          type: "textarea",
          name: "clinical_impression",
          label: "Clinical Impression"
        },

        {
          type: "multi-select-dropdown",
          name: "problem_identified",
          label: "Problem Identified",
          options: [
            { label: "Poor balance", value: "poor_balance" },
            { label: "Pain", value: "pain" },
            { label: "Poor endurance", value: "poor_endurance" },
            { label: "Poor compliance", value: "poor_compliance" },
            { label: "Skin issue", value: "skin_issue" },
            { label: "Poor fit", value: "poor_fit" },
            { label: "Weakness", value: "weakness" },
            { label: "Others", value: "others" }
          ]
        },

        {
          type: "textarea",
          name: "assessment_remarks",
          label: "Remarks"
        }
      ]
    }
  ]
};

/* =========================================================
   PLAN
========================================================= */

const PLAN_SCHEMA = {
  title: "",
  actions: ACTIONS,

  sections: [
    {
      fields: [
        {
          type: "single-select",
          name: "plan",
          label: "Plan",
          options: [
            { label: "Modify", value: "modify" },
            { label: "Continue", value: "continue" },
            { label: "Progress", value: "progress" },
            { label: "Hold", value: "hold" },
            { label: "Discharge", value: "discharge" }
          ]
        },

        {
          type: "textarea",
          name: "updated_intervention_plan",
          label: "Updated Intervention Plan",
          showIf: {
            or: [
              { field: "plan", equals: "modify" },
              { field: "plan", equals: "progress" }
            ]
          }
        },

        {
        type: "multi-select-dropdown",
        name: "plan_therapeutic_exercise",
        label: "Therapeutic Exercise / Intervention",
        options: [
            { label: "Gait training", value: "gait_training" },
            { label: "Balance training", value: "balance_training" },
            { label: "Strengthening", value: "strengthening" },
            { label: "ROM exercise", value: "rom_exercise" },
            { label: "Transfer training", value: "transfer_training" },
            { label: "Prosthetic gait training", value: "prosthetic_gait_training" },
            { label: "Donning & doffing", value: "donning_doffing" },
            { label: "Stump bandaging", value: "stump_bandaging" },
            { label: "Stair training", value: "stair_training" },
            { label: "Weight shifting", value: "weight_shifting" },
            { label: "Others", value: "others" }
        ]
        },
        {
        type: "multi-select-dropdown",
        name: "plan_modalities",
        label: "Modalities",
        options: [
            { label: "Parallel bar", value: "parallel_bar" },
            { label: "Walker", value: "walker" },
            { label: "Quadripod", value: "quadripod" },
            { label: "Prosthesis", value: "prosthesis" },
            { label: "Orthosis", value: "orthosis" },
            { label: "Resistance band", value: "resistance_band" },
            { label: "Mirror therapy", value: "mirror_therapy" },
            { label: "TENS", value: "tens" },
            { label: "Ultrasound", value: "ultrasound" },
            { label: "Others", value: "others" }
        ]
        },

        {
          type: "textarea",
          name: "home_program",
          label: "Home Program / Education"
        },

        {
          type: "date",
          name: "next_appointment",
          label: "Next Appointment"
        },

        {
          type: "textarea",
          name: "others",
          label: "Others"
        },

        {
          type: "textarea",
          name: "comment",
          label: "Comment"
        }
      ]
    }
  ]
};

/* =========================================================
   SCHEMA MAP
========================================================= */

const schemaMap = {
  subjective: SUBJECTIVE_SCHEMA,
  objective: OBJECTIVE_SCHEMA,
  assessment: ASSESSMENT_SCHEMA,
  plan: PLAN_SCHEMA
};

/* =========================================================
   COMPONENT
========================================================= */

export default function ProgressIntervention({
  patient,
  onSubmit,
  onBack
}) {
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("subjective");

  const storageKey = patient
    ? `progress_intervention_${patient.id}`
    : null;

  useEffect(() => {
    if (!storageKey) return;

    const saved = localStorage.getItem(storageKey);

    if (saved) {
      setValues(JSON.parse(saved).values || {});
    }
  }, [storageKey]);

  const onChange = (name, value) => {
    setValues(v => ({
      ...v,
      [name]: value
    }));
  };

  const handleAction = (type) => {
    if (type === "back") {
      onBack?.();
    }

    if (type === "clear") {
      setValues({});
      setSubmitted(false);

      if (storageKey) {
        localStorage.removeItem(storageKey);
      }
    }

    if (type === "save") {
      localStorage.setItem(
        storageKey,
        JSON.stringify({
          values,
          updatedAt: new Date()
        })
      );

      alert("Draft saved");
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);

    onSubmit?.(values);

    alert("Progress intervention submitted");
  };

  return (
    <div>

      {/* PATIENT CARD */}

      <PatientCard
        patient={patient}
        department="Progress Intervention"
      />

      {/* SOAP TABS */}

      <div
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "center",
          borderBottom: "1px solid #ddd",
          marginBottom: 12
        }}
      >
        {TAB_ORDER.map(tab => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "10px 22px",
              fontWeight: 600,
              cursor: "pointer",
              color:
                activeTab === tab
                  ? "#2451b3"
                  : "#0f172a",
              borderBottom:
                activeTab === tab
                  ? "3px solid #2451b3"
                  : "none"
            }}
          >
            {tab.toUpperCase()}
          </div>
        ))}
      </div>

      {/* FORM */}

      <CommonFormBuilder
        schema={schemaMap[activeTab]}
        values={values}
        onChange={onChange}
        submitted={submitted}
        onAction={handleAction}
      >
        <div
        style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 10,
            padding: "16px 24px",
            borderTop: "1px solid #e2e8f0",
            background: "#f8fafc",
            marginTop: 20
        }}
        >
        {activeTab !== "plan" ? (
            <button
            onClick={() => {
                const currentIndex = TAB_ORDER.indexOf(activeTab);
                setActiveTab(TAB_ORDER[currentIndex + 1]);
            }}
            style={{
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "9px 24px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                transition: "background .15s",
                boxShadow: "0 1px 4px rgba(37,99,235,0.2)"
            }}
            onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#1a6fc4")
            }
            onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#2563eb")
            }
            >
            Next: {TAB_ORDER[TAB_ORDER.indexOf(activeTab) + 1]
                ?.charAt(0)
                .toUpperCase() +
                TAB_ORDER[TAB_ORDER.indexOf(activeTab) + 1]?.slice(1)} →
            </button>
        ) : (
            <button
            onClick={handleSubmit}
            style={{
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "9px 24px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                transition: "background .15s",
                boxShadow: "0 1px 4px rgba(37,99,235,0.2)"
            }}
            onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#1d4ed8")
            }
            onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#2563eb")
            }
            >
            Submit Assessment
            </button>
        )}
        </div>
      </CommonFormBuilder>
    </div>
  );
}