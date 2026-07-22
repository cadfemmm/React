import React, { useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
export default function App() {
  // 1. Define your form schema mapping field configurations
  const schema = {
    fields: [
      {
        key: "patientName",
        type: "text",
        label: "Patient Full Name",
        readOnly: false
      },
      {
        key: "woundAssessmentMap",
        type: "woundLocationMarker",
        label: "Anatomical Wound Mapping Diagram",
        pinLabelPrefix: "W", // Sets initial prefix for pins (e.g., W1, W2)
        markerLegendTitle: "Active Pressure Injuries / Lesions",
        markerHelperText: "Click precise coordinates on the target region to drop a pin. Click a pin to edit label or remove.",
        markerTotalLabel: "Total tracked pressure areas",
        // Optional override: if omitted, it falls back to DEFAULT_BODY_VIEWS inside the component
        views: [
          { key: "body", label: "Full Body View", src: "/body_high.png" },
          { key: "hands", label: "Palmar View", src: "/palm.png" },
          { key: "feet", label: "Plantar View", src: "/feet_high.png" }
        ]
      }
    ]
  };

  // 2. Set up initial form data structure
  const [formData, setFormData] = useState({
    patientName: "John Doe",
    woundAssessmentMap: {
      body: [
        { id: 1710920000000, x: 45.5, y: 32.2, label: "W1" } // Pre-populate Example pin if needed
      ],
      hands: [],
      feet: []
    }
  });

  // Mock patient metadata that resolveBodyDiagramViews can consume to switch view variants if necessary
  const currentPatient = {
    id: "pat_9921",
    biologicalSex: "male"
  };

  const handleFormChange = (updatedFormData) => {
    setFormData(updatedFormData);
    console.log("Updated Form State: ", updatedFormData);
  };

  return (
    <div style={{ padding: "24px", maxWidth: "900px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h2 style={{ borderBottom: "2px solid #e5e7eb", paddingBottom: "8px" }}>
        Clinical Assessment Engine
      </h2>
      
      <form onSubmit={(e) => e.preventDefault()}>
        <CommonFormBuilder
          schema={schema}
          formData={formData}
          onChange={handleFormChange}
          readOnly={false}
          patient={currentPatient}
        />
        
        <div style={{ marginTop: 24, padding: 12, background: "#f1f5f9", borderRadius: 6 }}>
          <h4 style={{ margin: "0 0 8px 0" }}>Form Payload Output (JSON):</h4>
          <pre style={{ fontSize: 11, overflowX: "auto" }}>
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </form>
    </div>
  );
}