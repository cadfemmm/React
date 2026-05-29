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
    "carrying",
    "Carrying",
    "Transporting tools, equipment and material safely from one location to another."
  ),

  ratingField(
    "lifting",
    "Lifting",
    "Lifting tools, equipment and material from lower storage area onto work table."
  ),

  ratingField(
    "standing",
    "Standing",
    "Sustained standing while retrieving tools, equipment and material."
  ),

  ratingField(
    "gripping",
    "Gripping",
    "Grasping tools, equipment and material from storage to work table."
  ),

  ratingField(
    "walking",
    "Walking",
    "Walking from storage area to work table and around workshop area."
  ),

  ratingField(
    "dexterity",
    "Dexterity",
    "Manipulate small items such as buttons, needles and pins."
  ),

  ratingField(
    "reaching_forward",
    "Reaching Forward",
    "Drawing on table and taking material/tool from middle of table."
  ),

  ratingField(
    "reach_down_bend",
    "Reach Down / Bend",
    "Bends trunk when measuring body length."
  ),

  ratingField(
    "coordination",
    "Coordination",
    "Bilateral use of hand while sketching."
  ),

  ratingField(
    "sitting",
    "Sitting",
    "Seated for prolonged time at working table."
  ),

  ratingField(
    "kneeling_squatting",
    "Kneeling / Squatting",
    "Kneel or squat when measuring lower limb of client."
  ),

  ratingField(
    "memory_short",
    "Memory (Short-Term)",
    "Remembering list of tools and equipment needed."
  ),

  ratingField(
    "memory_long",
    "Memory (Long-Term)",
    "Recalling items to be taken."
  ),

  ratingField(
    "planning_ease",
    "Planning & Organization",
    "Finding ways to ease material handling."
  ),

  ratingField(
    "planning_priority",
    "Planning & Organization (Priority)",
    "Choosing tools based on usage and task sequence."
  ),

  ratingField(
    "planning_workspace",
    "Planning & Organization (Workspace)",
    "Organizing workspace, tools and materials."
  ),

  ratingField(
    "attention_sustained",
    "Attention",
    "Spending time to complete sketch before next step."
  ),

  ratingField(
    "numerical_extrainch",
    "Numerical / Calculation Ability",
    "Adding necessary extra inch while measuring."
  ),

  ratingField(
    "numerical_units",
    "Numerical / Calculation Ability (Units)",
    "Reading and interpreting units."
  ),

  ratingField(
    "touch_tactile",
    "Touch / Tactile",
    "Recognizing thickness and texture of fabric."
  ),

  ratingField(
    "visual",
    "Visual",
    "Recognizing material, tool and equipment."
  ),

  ratingField(
    "vestibular",
    "Vestibular",
    "Maintaining balance when moving or bending."
  ),

  ratingField(
    "auditory",
    "Auditory",
    "Listening to verbal or sewing class instructions."
  )





];

/* =========================================================
   ✅ COMPONENT
========================================================= */

export default function SewingIntegrated({ patient, onBack, onSubmit }) {

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

    title: "Sewing Integrated Functional Training",

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