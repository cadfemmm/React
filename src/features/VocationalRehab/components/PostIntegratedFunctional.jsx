import React, { useState } from "react";

/* Components */
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

/* =========================================================
   ✅ COMMON SCALE OPTIONS
========================================================= */

const SCALE_OPTIONS = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" }
];

/* =========================================================
   ✅ PRE SCALE INFO
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

/* =========================================================
   ✅ POST SCALE INFO
========================================================= */

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
   ✅ PRE FIELD BUILDER
========================================================= */

const preDemand = (name, label) => ({
  type: "radio-matrix",
  name,
  label,
  options: SCALE_OPTIONS,
  matrixHeaderLabel: "Demand",
  showInfoInRow: false
});

/* =========================================================
   ✅ POST FIELD BUILDER
========================================================= */

const postRatingField = (name, label, description) => ({
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
  preDemand("position", "Position"),
  preDemand("stabilisation", "Stabilisation"),
  preDemand("reach", "Reach"),
  preDemand("bend", "Bend"),
  preDemand("grip", "Grip / Pinch"),
  preDemand("dexterity", "Dexterity"),
  preDemand("coordination", "Coordination"),
  preDemand("pushpull", "Push / Pull"),
  preDemand("lifting", "Lifting"),
  preDemand("walking", "Walking"),
  preDemand("carrying", "Carrying"),
  preDemand("manipulation", "Manipulation"),
  preDemand("endurance", "Endurance"),

  preDemand("attention1", "Attention (Sustained)"),
  preDemand("attention2", "Attention (Selective)"),
  preDemand("attention3", "Attention (Divided)"),

  preDemand("memory1", "Memory (Short-Term)"),
  preDemand("memory2", "Memory (Long-Term)"),

  preDemand("planning", "Executive - Planning"),
  preDemand("problem", "Executive - Problem Solving"),
  preDemand("decision", "Executive - Decision Making"),
  preDemand("judgment", "Executive - Judgment"),

  preDemand("sequencing", "Sequencing"),
  preDemand("initiation", "Initiation"),
  preDemand("insight", "Insight & Awareness"),
  preDemand("time", "Time Management"),
  preDemand("visual", "Visual Function")
];

/* =========================================================
   ✅ POST FIELDS
========================================================= */

const POST_FIELDS = [
  postRatingField(
    "position",
    "Position",
    "Positions the body appropriately to task objects."
  ),

  postRatingField(
    "stabilisation",
    "Stabilisation",
    "Maintains posture without loss of balance."
  ),

  postRatingField(
    "reach",
    "Reach",
    "Extends arm to grab objects."
  ),

  postRatingField(
    "bend",
    "Bend",
    "Flexes trunk to grasp or place materials."
  ),

  postRatingField(
    "grip_pinch",
    "Grip / Pinch",
    "Holds tools and materials."
  ),

  postRatingField(
    "dexterity",
    "Dexterity",
    "Finger movement."
  ),

  postRatingField(
    "coordination",
    "Coordination",
    "Uses two body parts together."
  ),

  postRatingField(
    "push_pull",
    "Push / Pull",
    "Pushes or pulls objects."
  ),

  postRatingField(
    "lifting",
    "Lifting",
    "Lifts objects."
  ),

  postRatingField(
    "walking",
    "Walking",
    "Moves safely in environment."
  ),

  postRatingField(
    "carrying",
    "Carrying",
    "Carries objects while moving."
  ),

  postRatingField(
    "manipulation",
    "Manipulation",
    "Controls force/precision."
  ),

  postRatingField(
    "endurance",
    "Endurance",
    "Sustains performance."
  ),

  postRatingField(
    "attention",
    "Attention",
    "Sustained focus."
  ),

  postRatingField(
    "attention_selective",
    "Attention-Selective",
    "Focus on relevant stimuli."
  ),

  postRatingField(
    "attention_divided",
    "Attention-Divided",
    "Multitasking attention."
  ),

  postRatingField(
    "memory_short",
    "Memory (Short-term)",
    "Recall steps in task."
  ),

  postRatingField(
    "memory_long",
    "Memory (Long-term)",
    "Recall familiar tasks."
  ),

  postRatingField(
    "executive_planning",
    "Executive - Planning",
    "Organizing steps."
  ),

  postRatingField(
    "executive_problem_solving",
    "Executive - Problem Solving",
    "Adaptation skills."
  ),

  postRatingField(
    "executive_decision_making",
    "Executive - Decision Making",
    "Choosing actions."
  ),

  postRatingField(
    "executive_judgment",
    "Executive - Judgment",
    "Assessing situations."
  ),

  postRatingField(
    "sequencing",
    "Sequencing",
    "Logical order of steps."
  ),

  postRatingField(
    "initiation",
    "Initiation",
    "Starting task independently."
  ),

  postRatingField(
    "insight_awareness",
    "Insight & Awareness",
    "Understanding limitations."
  ),

  postRatingField(
    "time_management",
    "Time Management",
    "Managing time effectively."
  ),

  postRatingField(
    "visual_function",
    "Visual Function",
    "Reading and observing safety."
  )
];

/* =========================================================
   ✅ COMPONENT
========================================================= */

export default function IntegratedFunctionalAssessment() {
  const [values, setValues] = useState({});

  const handleChange = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  /* ======================================================
     ✅ PRE / POST SELECT
  ====================================================== */

  const assessmentType = values.assessment_type || "pre";

  /* ======================================================
     ✅ DYNAMIC SCHEMA
  ====================================================== */

  const schema = {
    title:
      assessmentType === "pre"
        ? "Pre Integrated Functional Training"
        : "Post Integrated Functional Training",

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