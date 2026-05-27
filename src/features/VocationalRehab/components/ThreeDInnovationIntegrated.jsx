/* =========================================================
   ✅ 3D PRINTING ASSESSMENT
========================================================= */

import React, { useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

/* =========================================================
   ✅ SCALE OPTIONS
========================================================= */

const SCALE_OPTIONS = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" }
];

/* =========================================================
   ✅ SCALE INFO
========================================================= */

const PRE_SCALE_INFO = {
  title: "Difficulty Demand Scale",
  content: [
    "1 – No Difficulty",
    "2 – Mild Difficulty",
    "3 – Moderate Difficulty",
    "4 – Severe Difficulty",
    "5 – Complete Difficulty"
  ]
};

const POST_SCALE_INFO = {
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
   ✅ FIELD BUILDERS
========================================================= */

const preField = (name, label) => ({
  type: "radio-matrix",
  name,
  label,
  options: SCALE_OPTIONS,
  matrixHeaderLabel: "Demand",
  showInfoInRow: false
});

const postField = (name, label, description) => ({
  type: "radio-matrix",
  name,
  label,
  description,
  options: SCALE_OPTIONS,
  matrixHeaderLabel: "Demand",
  showInfoInRow: false
});

/* =========================================================
   ✅ PRE FIELDS
========================================================= */

const PRE_FIELDS = [

  preField(
    "fine_motor_skills",
    "Fine Motor Skills"
  ),

  preField(
    "hand_eye_coordination",
    "Hand-Eye Coordination"
  ),

  preField(
    "tool_handling",
    "Tool Handling"
  ),

  preField(
    "physical_setup_maintenance",
    "Physical Setup & Maintenance"
  ),

  preField(
    "posture",
    "Posture"
  ),

  preField(
    "spatial_reasoning",
    "Spatial Reasoning"
  ),

  preField(
    "digital_literacy_design",
    "Digital Literacy & Design (CAD)"
  ),

  preField(
    "troubleshooting_problem_solving",
    "Troubleshooting & Problem-Solving"
  ),

  preField(
    "technical_planning",
    "Technical Planning"
  ),

  preField(
    "visual",
    "Visual"
  ),

  preField(
    "tactile",
    "Tactile"
  ),

  preField(
    "olfactory",
    "Olfactory"
  ),

  preField(
    "auditory",
    "Auditory"
  )

];

/* =========================================================
   ✅ POST FIELDS
========================================================= */

const POST_FIELDS = [

  postField(
    "fine_motor_skills",
    "Fine Motor Skills",
    "Students must handle delicate, thin, or small printed parts, sometimes requiring precise manipulation."
  ),

  postField(
    "hand_eye_coordination",
    "Hand-Eye Coordination",
    "Activities include loading filament into a small nozzle, assembling printed parts, and removing supports from models."
  ),

  postField(
    "tool_handling",
    "Tool Handling",
    "Using tools like plastic putty knives or scrapers to remove prints from the bed requires firm grip and controlled movement."
  ),

  postField(
    "physical_setup_maintenance",
    "Physical Setup & Maintenance",
    "Handling spools of filament, cleaning the print bed, and occasionally performing basic maintenance (cleaning nozzles) on the machine."
  ),

  postField(
    "posture",
    "Posture",
    "Sustained attention to desktop machines usually requires sitting or standing for periods of time."
  ),

  postField(
    "spatial_reasoning",
    "Spatial Reasoning",
    "Understanding how to orient a 3D object in a 3D space (on a 'slicer' platform) so that it prints successfully without excessive supports."
  ),

  postField(
    "digital_literacy_design",
    "Digital Literacy & Design (CAD)",
    "Using software to create or modify 3D objects, which involves understanding geometric shapes and dimensions."
  ),

  postField(
    "troubleshooting_problem_solving",
    "Troubleshooting & Problem-Solving",
    "Identifying why a print failed (e.g., thermal stress, warping, poor bed adhesion) and adjusting software settings to fix it."
  ),

  postField(
    "technical_planning",
    "Technical Planning",
    "Learning to 'slice' a 3D model, which means translating a design into G-code (machine-specific instructions)."
  ),

  postField(
    "visual",
    "Visual",
    "Monitoring the printing process in real-time, observing layer-by-layer creation, and checking for print quality issues."
  ),

  postField(
    "tactile",
    "Tactile",
    "Handling printed objects to assess strength, texture, and smoothness."
  ),

  postField(
    "olfactory",
    "Olfactory",
    "Being aware of the distinct smell of heated plastic (especially ABS, though PLA is common and less odor-intensive)."
  ),

  postField(
    "auditory",
    "Auditory",
    "Monitoring the sound of stepper motors and fans to detect normal operation versus issues like nozzle clogs."
  )

];

/* =========================================================
   ✅ COMPONENT
========================================================= */

export default function ThreeDInnovationIntegrated() {

  const [values, setValues] = useState({});

  const handleChange = (name, value) => {

    setValues((prev) => ({
      ...prev,
      [name]: value
    }));

  };

  const assessmentType =
    values.assessment_type || "pre";

  const schema = {

    title:
      assessmentType === "pre"
        ? "Pre 3D Printing Assessment"
        : "Post 3D Printing Assessment",

    titleInfo:
      assessmentType === "pre"
        ? PRE_SCALE_INFO
        : POST_SCALE_INFO,

    fields: [

      {
        type: "radio",
        name: "assessment_type",
        label: "Assessment Type",

        options: [
          { label: "Pre", value: "pre" },
          { label: "Post", value: "post" }
        ]
      },

      ...(assessmentType === "pre"
        ? PRE_FIELDS
        : POST_FIELDS),

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

    <CommonFormBuilder
      schema={schema}
      values={values}
      onChange={handleChange}
      layout="nested"
    />

  );

}