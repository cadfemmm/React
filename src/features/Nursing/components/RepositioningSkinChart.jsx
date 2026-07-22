import React, { useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

// Original Styling Guidelines Mapped to CSS variables / Design systems
const CHART_STYLES = {
  primary: "#1a6b8a",
  primaryDark: "#0d3d52",
  primaryLight: "#e8f4f8",
  border: "#b2c8d8",
  text: "#0f172a",
  muted: "#475569",
  white: "#fff",
};

const CHART_SCHEMA = {
  title: "Daily Repositioning & Skin Inspection Chart",
  fields: [
    
    {
      name: "chartDate",
      label: "Date",
      type: "custom",
      render: ({ values, onChange }) => (
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: CHART_STYLES.primaryDark }}>Date:</label>
          <input
            type="date"
            value={values.chartDate || ""}
            onChange={e => onChange("chartDate", e.target.value)}
            style={{ padding: "6px 12px", border: `1.5px solid ${CHART_STYLES.border}`, borderRadius: 6, fontSize: 13, color: CHART_STYLES.text }}
          />
        </div>
      )
    },
    {
      name: "codes_legend",
      type: "custom",
      render: () => (
        <div style={{ border: `1.5px solid ${CHART_STYLES.border}`, borderRadius: 8, padding: "10px 18px", background: CHART_STYLES.white, marginBottom: 16, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <span style={{ fontWeight: 700, fontSize: 13, color: CHART_STYLES.primaryDark, marginRight: 4 }}>Codes:</span>
          {[
            { code: "L", desc: "left" },
            { code: "R", desc: "right" },
            { code: "B", desc: "back" },
            { code: "P", desc: "prone (front)" },
            { code: "M", desc: "mobilised" },
            { code: "S", desc: "seated" },
          ].map(({ code, desc }) => (
            <span key={code} style={{ fontSize: 13, color: CHART_STYLES.text }}>
              <strong>{code}</strong> = {desc}
              <span style={{ color: CHART_STYLES.border, marginLeft: 8 }}>|</span>
            </span>
          ))}
        </div>
      )
    },
    {
      name: "repositioning_table",
      type: "dynamic-table",
      minRows: 16,
      columns: [
        { key: "time", placeholder: "Time (e.g. 08:00)", type: "text" },
        { 
          key: "from_position", 
          placeholder: "From", 
          type: "single-select", 
          options: ["L-left", "R-Right", "B - Back", "P - Prone", "M", "S"] 
        },
        { 
          key: "to_position", 
          placeholder: "To", 
          type: "single-select", 
          options: ["L - Left", "R - Right", "B", "P", "M", "S"] 
        },
        { key: "skin_comments", placeholder: "e.g. Left Hip Non Blanching", type: "text" },
        { key: "action_taken", placeholder: "e.g. Reassess at next level change", type: "text" },
        { key: "initials", placeholder: "Initials", type: "text" }
      ]
    }
  ],
  
};

export default function RepositioningSkinChartSchemaDriven({ patient, onBack }) {
  const [formData, setFormData] = useState({
    chartDate: "",
    repositioning_table: Array.from({ length: 16 }, () => ({
      time: "", from_position: "", to_position: "", skin_comments: "", action_taken: "", initials: ""
    }))
  });

  const handleFieldChange = (fieldName, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleAction = (actionType) => {
    if (actionType === "back" && onBack) {
      onBack();
    } else if (actionType === "save") {
      alert("Chart saved successfully via Schema Builder Context.");
      console.log("Saving form package output: ", formData);
    }
  };

  return (
    <div style={{ maxWidth: 1400, margin: "0 auto", padding: "20px 40px", fontFamily: "Segoe UI, sans-serif" }}>
      
      {/* Patient demographics container */}
      <div style={{ marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: CHART_STYLES.primary }}>
          Daily Repositioning & Skin Inspection Chart
        </div>
        {patient?.name && (
          <div style={{ fontSize: 13, color: CHART_STYLES.muted }}>
            {patient.name}
            {patient.id && <span style={{ marginLeft: 10 }}>| MRN: {patient.id}</span>}
          </div>
        )}
      </div>

      <CommonFormBuilder
        schema={CHART_SCHEMA}
        values={formData}
        onChange={handleFieldChange}
        onAction={handleAction}
        layout="root"
      />
    </div>
  );
}