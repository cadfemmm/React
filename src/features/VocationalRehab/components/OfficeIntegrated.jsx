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

  ratingField("positioning", "Positioning"),

  ratingField("reaching", "Reaching"),

  ratingField("bending", "Bending"),

  ratingField("gripping", "Gripping"),

  ratingField(
    "manipulation_coordination",
    "Manipulation / Coordination"
  ),

  ratingField(
    "lifting_carrying",
    "Lifting / Carrying"
  ),

  ratingField(
    "walking_ambulation",
    "Walking / Ambulation"
  ),

  ratingField(
    "pressure_strength",
    "Pressure / Strength"
  ),

  ratingField(
    "endurance",
    "Endurance"
  ),

  ratingField(
    "attention",
    "Attention"
  ),

  ratingField(
    "memory",
    "Memory"
  ),

  ratingField(
    "thought",
    "Thought"
  ),

  ratingField(
    "executive_function_planning",
    "Executive Function(Planning"
  ),

  ratingField(
    "executive_function_flexibility",
    "Executive Function(Cognitive flexibility)"
  ),

  ratingField(
    "executive_function_problem_solving",
    "Executive Function(Inhibition)"
  ),

  ratingField(
    "visual_acuity",
    "Visual(Visual acuity)"
  ),

  ratingField(
    "visual_stability",
    "Visual( Visual stability)"
  ),

  ratingField(
    "visual_field",
    "Visual(Visual field function)"
  ),

  ratingField(
    "visual_perception",
    "Visual(Visual perception)"
  ),

  ratingField(
    "touch_tactile",
    "Touch / Tactile"
  ),

  ratingField(
    "auditory",
    "Auditory"
  ),

  ratingField(
    "proprioception",
    "Proprioception"
  ),

  ratingField(
    "vestibular",
    "Vestibular"
  ),

  ratingField(
    "pain_sensory_tolerance",
    "Pain & Sensory Tolerance"
  ),

  ratingField(
    "higher_cognitive_function",
    "Higher Cognitive Function"
  ),

  ratingField(
    "problem_solving_logic",
    "Problem-Solving & Logic"
  )




];

/* =========================================================
   ✅ COMPONENT
========================================================= */

export default function OfficeIntegrated({ patient, onBack,onSubmit }) {

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

    title: "Office Integrated Functional Training",

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