import React, { useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const schema = {
  title: "Group Intervention",

  actions: [
    {
      type: "back",
      label: "Back"
    }
  ],

  sections: [
    {
      title: "SESSION",

      fields: [
        {
          type: "checkbox-group",
          name: "session_types",
          label: "Select Session Type",
          options: [
            {
              label: "Health Education",
              value: "health_education"
            },
            {
              label: "Social Integration Activities",
              value: "social_integration"
            }
          ]
        },

        /* ================= HEALTH EDUCATION ================= */

        {
          type: "subheading",
          label: "HEALTH EDUCATION",
          showIf: {
            field: "session_types",
            includes: "health_education"
          }
        },

        {
          type: "textarea",
          name: "health_topic_programme",
          label: "Topic & Programme",
          showIf: {
            field: "session_types",
            includes: "health_education"
          }
        },

        {
          type: "radio",
          name: "health_objective_achieved",
          label: "Objective Achieved",
          options: [
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" }
          ],
          showIf: {
            field: "session_types",
            includes: "health_education"
          }
        },

        {
          type: "radio",
          name: "health_tolerance",
          label: "Tolerance",
          options: [
            { label: "Good", value: "good" },
            { label: "Fair", value: "fair" },
            { label: "Poor", value: "poor" }
          ],
          showIf: {
            field: "session_types",
            includes: "health_education"
          }
        },

        {
          type: "textarea",
          name: "health_nursing_notes",
          label: "Nursing Notes",
          showIf: {
            field: "session_types",
            includes: "health_education"
          }
        },

        /* ================= SOCIAL INTEGRATION ================= */

        {
          type: "subheading",
          label: "SOCIAL INTEGRATION ACTIVITIES",
          showIf: {
            field: "session_types",
            includes: "social_integration"
          }
        },

        {
          type: "textarea",
          name: "social_topic_programme",
          label: "Topic & Programme",
          showIf: {
            field: "session_types",
            includes: "social_integration"
          }
        },

        {
          type: "radio",
          name: "social_objective_achieved",
          label: "Objective Achieved",
          options: [
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" }
          ],
          showIf: {
            field: "session_types",
            includes: "social_integration"
          }
        },

        {
          type: "radio",
          name: "social_tolerance",
          label: "Tolerance",
          options: [
            { label: "Good", value: "good" },
            { label: "Fair", value: "fair" },
            { label: "Poor", value: "poor" }
          ],
          showIf: {
            field: "session_types",
            includes: "social_integration"
          }
        },

        {
          type: "textarea",
          name: "social_nursing_notes",
          label: "Nursing Notes",
          showIf: {
            field: "session_types",
            includes: "social_integration"
          }
        }
      ]
    }
  ]
};

export default function GroupIntervention({
  onBack,
  selectedPatients = [],
}) {

  const [values, setValues] = useState({});

  const onChange = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAction = (type) => {
    if (type === "back") {
      onBack?.();
    }
  };

  return (
  <div>
    {selectedPatients.length > 0 && (
      <div
        style={{
          marginBottom: 20,
          padding: "14px 18px",
          borderRadius: 12,
          background: "#fef2f2",
          border: "1px solid #fecaca",
        }}
      >
        <div style={{ fontSize: 13, fontWeight: 700, color: "#991b1b", marginBottom: 8 }}>
          Selected participants ({selectedPatients.length})
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {selectedPatients.map((p) => (
            <span
              key={p.id ?? p.patient_id ?? p.mrn}
              style={{
                fontSize: 12,
                fontWeight: 600,
                padding: "4px 10px",
                borderRadius: 999,
                background: "#fff",
                color: "#7f1d1d",
                border: "1px solid #fecaca",
              }}
            >
              {p.name || p.patient_name || p.mrn || "Patient"}
            </span>
          ))}
        </div>
      </div>
    )}
    <CommonFormBuilder
      schema={schema}
      values={values}
      onChange={onChange}
      onAction={handleAction}
      layout="nested"
    />
  </div>
  );
}