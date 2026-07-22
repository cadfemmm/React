import React, { useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

// Helper for Area-to-Length Score conversion
function calcLengthScore(area) {
  if (!Number.isFinite(area) || area <= 0) return 0;
  if (area < 0.3) return 1;
  if (area <= 0.6) return 2;
  if (area <= 1.0) return 3;
  if (area <= 2.0) return 4;
  if (area <= 3.0) return 5;
  if (area <= 4.0) return 6;
  if (area <= 8.0) return 7;
  if (area <= 12.0) return 8;
  if (area <= 24.0) return 9;
  return 10;
}

const EXUDATE_OPTIONS = [
  { label: "None (0)", value: "none", score: 0 },
  { label: "Light (1)", value: "light", score: 1 },
  { label: "Moderate (2)", value: "moderate", score: 2 },
  { label: "Heavy (3)", value: "heavy", score: 3 },
];

const TISSUE_OPTIONS = [
  { label: "Closed (0)", value: "closed", score: 0 },
  { label: "Epithelial Tissue (1)", value: "epithelial", score: 1 },
  { label: "Granulation Tissue (2)", value: "granulation", score: 2 },
  { label: "Slough (3)", value: "slough", score: 3 },
  { label: "Necrotic Tissue (4)", value: "necrotic", score: 4 },
];

// 1. FORM BUILDER SCHEMA DEFINITION
const PUSH_TOOL_SCHEMA = {
  title: "PUSH Tool – Pressure Ulcer Scale for Healing",
  fields: [
    {
      name: "push_records",
      type: "dynamic-table",
      minRows: 3,
      columns: [
        { key: "date", label: "Date", type: "date" },
        { key: "time", label: "Time", type: "time" },
        { key: "length", label: "Length (cm)", type: "number", min: 0, step: 0.1 },
        { key: "width", label: "Width (cm)", type: "number", min: 0, step: 0.1 },
        {
          key: "area",
          label: "Length × Width (cm²)",
          type: "computed",
          compute: (row) => {
            const l = parseFloat(row.length) || 0;
            const w = parseFloat(row.width) || 0;
            const area = l * w;
            return area > 0 ? area.toFixed(1) : "—";
          },
        },
        {
          key: "exudate",
          label: "Exudate Amount",
          type: "single-select",
          options: EXUDATE_OPTIONS,
        },
        {
          key: "tissue",
          label: "Tissue Type",
          type: "single-select",
          options: TISSUE_OPTIONS,
        },
        {
          key: "totalScore",
          label: "PUSH Total Score",
          type: "computed",
          compute: (row) => {
            const l = parseFloat(row.length) || 0;
            const w = parseFloat(row.width) || 0;
            const area = l * w;
            const lengthScore = calcLengthScore(area);

            const exOpt = EXUDATE_OPTIONS.find((o) => o.value === row.exudate);
            const tissueOpt = TISSUE_OPTIONS.find((o) => o.value === row.tissue);

            const exudateScore = exOpt ? exOpt.score : 0;
            const tissueScore = tissueOpt ? tissueOpt.score : 0;

            const total = lengthScore + exudateScore + tissueScore;
            return total > 0 ? total : l || w || row.exudate || row.tissue ? 0 : "—";
          },
        },
      ],
    },
  ],
};

// 2. SCHEMA-DRIVEN COMPONENT
export default function PUSHTool({ patient, onBack }) {
  const [formData, setFormData] = useState({
    push_records: Array.from({ length: 3 }, () => ({
      date: "",
      time: "",
      length: "",
      width: "",
      exudate: "",
      tissue: "",
    })),
  });

  const handleFieldChange = (fieldName, newValue) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: newValue,
    }));
  };

  const handleAction = (actionType) => {
    if (actionType === "back" && onBack) {
      onBack();
    } else if (actionType === "save") {
      console.log("Saving PUSH Tool state output: ", formData);
      alert("PUSH Tool scores saved successfully.");
    }
  };

  return (
    <div style={pageStyle}>
      {/* Header with Patient context */}
      <div style={headerStyle}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#0f172a" }}>
            {PUSH_TOOL_SCHEMA.title}
          </div>
          {patient?.name && (
            <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>
              Patient: {patient.name} {patient.id ? `| MRN: ${patient.id}` : ""}
            </div>
          )}
        </div>
      </div>

      {/* Schema Engine Form Instance */}
      <CommonFormBuilder
        schema={PUSH_TOOL_SCHEMA}
        values={formData}
        onChange={handleFieldChange}
        onAction={handleAction}
        layout="root"
      />
    </div>
  );
}

const pageStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "20px 24px",
  fontFamily: "'Inter', system-ui, sans-serif",
  background: "#f8fafc",
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: 16,
};