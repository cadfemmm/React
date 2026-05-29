import React, { useState,useEffect } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import PatientCard from "../../../shared/cards/PatientCard";
/* =========================================================
   ✅ SCALE OPTIONS
========================================================= */

const SCALE_OPTIONS = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 }
];

/* =========================================================
   ✅ SCALE INFO
========================================================= */

const SCALE_INFO = {
  title: "Difficulty Rating Scale",
  content: [
    "1 – No Difficulty",
    "2 – Mild Difficulty",
    "3 – Moderate Difficulty",
    "4 – Severe Difficulty",
    "5 – Complete Difficulty"
  ]
};

/* =========================================================
   ✅ FIELD BUILDER
========================================================= */

const ratingField = (
  name,
  label,
  description
) => ({
  type: "radio-matrix",
  name,
  label,
  description,
  options: SCALE_OPTIONS,
  matrixHeaderLabel: "Demand",
  showInfoInRow: false
});

/* =========================================================
   ✅ FIELDS
========================================================= */

const FIELDS = [

  ratingField(
    "reaching_high",
    "Reaching",
    "Extends arms to access ingredients, utensils, or tools."
  ),

  ratingField(
    "reaching_low",
    "Reaching (Lower Level)",
    "Reach down with trunk bend to retrieve ingredients from lower cabinets or shelves."
  ),

  ratingField(
    "bending",
    "Bending",
    "Squat when retrieving items at lower-level cabinets, drawers, or fridge rack."
  ),

  ratingField(
    "gripping",
    "Gripping",
    "Uses fingers and hands to securely grasp and hold utensils, containers, and ingredients."
  ),

  ratingField(
    "manipulation",
    "Manipulation",
    "Handles baking tools and ingredient containers."
  ),

  ratingField(
    "coordination",
    "Coordination",
    "Uses two hands together in an efficient and coordinated manner."
  ),

  ratingField(
    "lifting",
    "Lifting",
    "Picks up items such as weighing scales and mixing bowls."
  ),

  ratingField(
    "carrying",
    "Carrying",
    "Carries ingredients and equipment from one place to another."
  ),

  ratingField(
    "walking",
    "Walking",
    "Ambulates between work areas from cabinet to counter to oven."
  ),

  ratingField(
    "attention_sustained",
    "Attention (Sustained)",
    "Stay focused when preparing ingredients."
  ),

  ratingField(
    "attention_selective",
    "Attention (Selective)",
    "Filter out distractions in a busy baking kitchen."
  ),

  ratingField(
    "attention_divided",
    "Attention (Divided)",
    "Preparing ingredients while listening to instructions."
  ),

  ratingField(
    "memory_short",
    "Memory (Short-Term)",
    "Remembering ingredient measurements according to recipe."
  ),

  ratingField(
    "memory_long",
    "Memory (Long-Term)",
    "Remembering familiar ingredient locations."
  ),

  ratingField(
    "perception_visual",
    "Perception",
    "Identifying ingredients, reading labels, and recognizing ingredient status."
  ),

  ratingField(
    "thought_logical",
    "Thought",
    "Following logical workflow during preparation."
  ),

  ratingField(
    "consciousness",
    "Consciousness",
    "Being alert and awake to engage safely."
  ),

  ratingField(
    "orientation",
    "Orientation",
    "Awareness of time to monitor baking duration."
  ),

  ratingField(
    "visual_design",
    "Visual",
    "Observes colors, textures, and patterns."
  ),

  ratingField(
    "visual_monitoring",
    "Visual (Monitoring)",
    "Monitors frosting layers and decoration placement."
  ),

  ratingField(
    "vestibular",
    "Vestibular",
    "Stay balanced while decorating and moving around."
  ),

  ratingField(
    "smell_burning",
    "Smell",
    "Smells baked goods to ensure no burning occurred."
  ),

  ratingField(
    "smell_frosting",
    "Smell (Frosting)",
    "Recognizes frosting or filling smells."
  ),

  ratingField(
    "smell_spoilage",
    "Smell (Spoilage)",
    "Differentiate pleasant and unpleasant smells."
  ),

  ratingField(
    "taste_spoilage",
    "Taste",
    "Tasting decorating ingredients to ensure not spoiled."
  ),

  ratingField(
    "taste_flavor",
    "Taste (Flavor)",
    "Tasting flavor prior to decorating."
  ),

  ratingField(
    "proprioception_hand",
    "Proprioception",
    "Awareness of hand and finger placement."
  ),

  ratingField(
    "proprioception_distribution",
    "Proprioception (Distribution)",
    "Judge how to distribute decorations evenly."
  ),

  ratingField(
    "touch_texture",
    "Touch",
    "Assesses texture of frosting or fondant."
  ),

  ratingField(
    "touch_delicate",
    "Touch (Delicate Handling)",
    "Handles delicate decorations carefully."
  ),

  ratingField(
    "pain",
    "Pain",
    "Recognizes fatigue or muscle strain."
  ),

  ratingField(
    "temperature_products",
    "Temperature & Pressure",
    "Identifies temperature of products before decoration."
  ),

  ratingField(
    "temperature_equipment",
    "Temperature Equipment",
    "Recognizes if equipment is too hot or cold."
  ),

  ratingField(
    "pressure_control",
    "Pressure Control",
    "Judges pressure while adding decorations."
  )
    
];

/* =========================================================
   ✅ COMPONENT
========================================================= */

export default function BaristaIntegrated({ patient, onBack, onSubmit }) {

  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
    
   const storageKey = patient ? `BakeryIntegrated_${patient.id}` : null;

  /* ======================================================
     ✅ HANDLE CHANGE
  ====================================================== */

  const handleChange = (name, value) => {

    setValues((prev) => ({
      ...prev,
      [name]: value
    }));

  };

  /* ======================================================
     ✅ TOTAL SCORE
  ====================================================== */

  const calculateTotal = () => {

    let total = 0;

    Object.keys(values).forEach((key) => {

      const value = values[key];

      if (
        typeof value === "number" &&
        value >= 1 &&
        value <= 5
      ) {
        total += value;
      }

    });

    return total;

  };


  /* ======================================================
     ✅ SCHEMA
  ====================================================== */

  const schema = {
    actions: [
      { type: "back", label: "Back" },
      { type: "clear", label: "Clear" },
      { type: "save", label: "Save" }
    ],

    title: "Bakery Integrated Functional Training",

    titleInfo: SCALE_INFO,

    fields: [

      ...FIELDS,

      {
        type: "textarea",
        name: "trainer_remarks",
        label: "Trainer Remarks"
      },

      {
        type: "text",
        name: "trainer_name",
        label: "Trainer Name",
        value: "Auto detect from system",
        readOnly: true
      },

      {
        type: "date",
        name: "date",
        label: "Date"
      },

      {
        type: "checkbox",
        name: "generate_report",
        label: "Generate Report"
      }
    ]
  };

  return (

    <div>
     
                            <PatientCard
                              patient={patient}
                              
                            />
                          


      <CommonFormBuilder
        schema={schema}
        values={values}
        onChange={handleChange}
        layout="nested"
      />

      {/* ===================================================
          ✅ TOTAL SCORE
      =================================================== */}

      <div
        style={{
          marginTop: 20,
          padding: "14px 18px",
          border: "1px solid #CBD5E1",
          borderRadius: 10,
          background: "#F8FAFC",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: 700,
          fontSize: 18
        }}
      >
        <span>Total Score</span>

        <span>{calculateTotal()}</span>
      </div>
<div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
          <button
            type="button"
            style={submitBtn}
            onClick={() => {
              setSubmitted(true);
              onSubmit?.(values);
              alert("Home assessment submitted");
            }}
          >
            Submit
          </button>
        </div>
    </div>

  );

}
const input = {
          width: "100%",
          minHeight: 90,
          marginTop: 6,
          marginBottom: 12,
          padding: "10px 12px",
          borderRadius: 6,
          border: "1px solid #d1d5db",
          fontSize: 14,
          resize: "vertical"
};
const alertBtn = {
  marginTop: 10,
          padding: "10px 20px",
          borderRadius: 6,
          border: "1.5px solid #007bff",
          background: "#007bff",
          color: "#fff",
          fontWeight: 600,
          cursor: "pointer"
};
const doctorsReportBtn = {
  padding: "10px 20px", background: "#2563EB", color: "#fff",
  border: "none", borderRadius: 6, fontSize: 14,
  fontWeight: 600, cursor: "pointer", marginTop: 8
};
const submitRow = {
  display: "flex",
  justifyContent: "flex-end",
  marginTop: 16
};

const submitBtn = {
  padding: "12px 32px",
  background: "#2563EB",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  fontWeight: 600,
  fontSize: 15,
  cursor: "pointer"
};