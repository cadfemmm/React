/* =========================================================
   ✅ DIGITAL MEDIA / GRAPHIC DESIGN ASSESSMENT
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
    "ergonomic_stamina",
    "Ergonomic Stamina"
  ),

  preField(
    "hardware_operation",
    "Hardware Operation"
  ),

  preField(
    "cognitive_load_management",
    "Cognitive Load Management"
  ),

  preField(
    "software_proficiency",
    "Software Proficiency"
  ),

  preField(
    "multitasking_focus",
    "Multitasking & Focus"
  ),

  preField(
    "active_processing",
    "Active Processing"
  ),

  preField(
    "visual_dominance",
    "Visual Dominance"
  ),

  preField(
    "auditory_processing",
    "Auditory Processing"
  ),

  preField(
    "tactile_feedback",
    "Tactile Feedback"
  )

];

/* =========================================================
   ✅ POST FIELDS
========================================================= */

const POST_FIELDS = [

  postField(
    "fine_motor_skills",
    "Fine Motor Skills",
    "High reliance on precise hand-eye coordination for using input devices like mice, drawing tablets, and keyboards, particularly in digital painting and photo editing."
  ),

  postField(
    "ergonomic_stamina",
    "Ergonomic Stamina",
    "Sustained periods of sitting, requiring consistent attention to posture while working on computers to avoid fatigue and injury."
  ),

  postField(
    "hardware_operation",
    "Hardware Operation",
    "Handling equipment such as digital cameras, lighting setups, or scanning devices."
  ),

  postField(
    "cognitive_load_management",
    "Cognitive Load Management",
    "The need to process text, images, and audio simultaneously can easily lead to cognitive overload (too much information)."
  ),

  postField(
    "software_proficiency",
    "Software Proficiency",
    "Learning new, complex, industry-standard software (e.g., Photoshop, Premiere Pro) is demanding."
  ),

  postField(
    "multitasking_focus",
    "Multitasking & Focus",
    "Balancing technical, creative, and organizational tasks while managing attention span to avoid distractions."
  ),

  postField(
    "active_processing",
    "Active Processing",
    "Engaging in high-level thinking to choose, organize, and integrate digital elements, rather than passively viewing content."
  ),

  postField(
    "visual_dominance",
    "Visual Dominance",
    "Intense screen time analyzing and creating visual content (color, layout, composition) can lead to sensory fatigue."
  ),

  postField(
    "auditory_processing",
    "Auditory Processing",
    "Listening to instructions, audio tutorials, or managing audio tracks, requiring the filtering of auditory noise."
  ),

  postField(
    "tactile_feedback",
    "Tactile Feedback",
    "Use of tablets or haptic devices, translating the 'feel' of a digital brush or tool through touch."
  )

];

/* =========================================================
   ✅ COMPONENT
========================================================= */

export default function CreativeMultimediaIntegrated() {

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
        ? "Pre Digital Media Assessment"
        : "Post Digital Media Assessment",

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