import React, { useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import DoctorClinicalNotes from "./DoctorClinicalNotes";
import DoctorWardAround from "./DoctorWardAround";

const ACTIONS = [
  { type: "back", label: "Back" },
  { type: "save", label: "Save" },
];

function DoctorSimpleForm({ title, fieldName, fieldLabel, patient, onBack, onSubmit }) {
  const storageKey = patient?.id ? `doctor_${fieldName}_${patient.id}` : null;
  const [values, setValues] = useState(() => {
    if (!storageKey) return { [fieldName]: "" };
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
      return { [fieldName]: saved[fieldName] ?? "" };
    } catch {
      return { [fieldName]: "" };
    }
  });

  const handleAction = (type) => {
    if (type === "back") onBack?.();
    if (type === "save" && storageKey) {
      localStorage.setItem(storageKey, JSON.stringify(values));
      alert(`${title} saved`);
    }
  };

  const schema = {
    title,
    actions: ACTIONS,
    fields: [
      {
        name: fieldName,
        label: fieldLabel,
        type: "textarea",
        placeholder: `Enter ${fieldLabel.toLowerCase()}…`,
      },
    ],
  };

  return (
    <div style={{ padding: 20 }}>
      <CommonFormBuilder
        schema={schema}
        values={values}
        onChange={(name, value) => setValues((v) => ({ ...v, [name]: value }))}
        onAction={handleAction}
      />
      <div style={{ marginTop: 16 }}>
        <button
          type="button"
          onClick={() => {
            if (storageKey) localStorage.setItem(storageKey, JSON.stringify(values));
            onSubmit?.(values);
            alert(`${title} submitted`);
            onBack?.();
          }}
          style={{
            padding: "10px 20px",
            borderRadius: 8,
            border: "none",
            background: "#2563eb",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export function ClinicalNotesAssessment(props) {
  return <DoctorClinicalNotes {...props} />;
}

export function HomeVisitReportAssessment(props) {
  return (
    <DoctorSimpleForm
      {...props}
      title="Home Visit Report"
      fieldName="home_visit_report"
      fieldLabel="Home Visit Report"
    />
  );
}

export function WorkSiteAssessmentForm(props) {
  return (
    <DoctorSimpleForm
      {...props}
      title="Work Site Assessment"
      fieldName="work_site_assessment"
      fieldLabel="Work Site Assessment"
    />
  );
}

export function WardAroundAssessment(props) {
  return <DoctorWardAround {...props} />;
}
