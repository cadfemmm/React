import React, { useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

/* ✅ SCALE OPTIONS */
const SCALE_OPTIONS = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" }
];

/* ✅ SCALE INFO */
const SCALE_INFO = {
  title: "Difficulty Demand Scale",
  content: [
    "1 – No Difficulty",
    "2 – Mild Difficulty",
    "3 – Moderate Difficulty",
    "4 – Severe Difficulty",
    "5 – Complete Difficulty"
  ]
};

/* ✅ FIELD BUILDER (same as MAS) */
 const Demand = (name, label) => ({
   type: "radio-matrix",
   name,
   label,
   options: SCALE_OPTIONS,
  //  info: SCALE_INFO,
   matrixHeaderLabel: "Demand",
   showInfoInRow: false

  
});



/* ✅ ALL FIELDS */
const FIELDS = [
  Demand("position", "Position"),
  Demand("stabilisation", "Stabilisation"),
  Demand("reach", "Reach"),
  Demand("bend", "Bend"),
  Demand("grip", "Grip / Pinch"),
  Demand("dexterity", "Dexterity"),
  Demand("coordination", "Coordination"),
  Demand("pushpull", "Push / Pull"),
  Demand("lifting", "Lifting"),
  Demand("walking", "Walking"),
  Demand("carrying", "Carrying"),
  Demand("manipulation", "Manipulation"),
  Demand("endurance", "Endurance"),

  Demand("attention1", "Attention (Sustained)"),
  Demand("attention2", "Attention (Selective)"),
  Demand("attention3", "Attention (Divided)"),

  Demand("memory1", "Memory (Short-Term)"),
  Demand("memory2", "Memory (Long-Term)"),

  Demand("planning", "Executive - Planning"),
  Demand("problem", "Executive - Problem Solving"),
  Demand("decision", "Executive - Decision Making"),
  Demand("judgment", "Executive - Judgment"),

  Demand("sequencing", "Sequencing"),
  Demand("initiation", "Initiation"),
  Demand("insight", "Insight & Awareness"),
  Demand("time", "Time Management"),
  Demand("visual", "Visual Function"),
];

/* ✅ SCHEMA (NO ACCORDION ✅) */
const SCHEMA = {
  title: "Difficulty Demand Scale",
  titleInfo: SCALE_INFO,

  fields: [
    ...FIELDS,   // ✅ directly render all rows (always visible)

    /* ✅ Footer */
    {
      type: "textarea",
      name: "remarks",
      label: "Trainer Remarks"
    },
    {
      type: "text",
      name: "trainer",
      label: "Trainer Name",
      value: "Auto detect from system",
      readOnly: true
    },
    {
      type: "date",
      name: "date",
      label: "Final Report Date"
    },
    {
      type: "checkbox",
      name: "generate",
      label: "Generate Report"
    }
  ]
};

/* ✅ COMPONENT */
export default function PreIntegratedFunction() {
  const [values, setValues] = useState({}); // ✅ no need difficulty_section anymore

  const handleChange = (name, value) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <CommonFormBuilder
      schema={SCHEMA}
      values={values}
      onChange={handleChange}
      layout="nested"
    />
  );
}