import React, { useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const frequencyOptions = [
  { label: "0 - Not during the past month", value: 0 },
  { label: "1 - Less than once a week", value: 1 },
  { label: "2 - Once or twice a week", value: 2 },
  { label: "3 - Three or more times a week", value: 3 }
];

const PSQI_SCHEMA = {
  title: "Pittsburgh Sleep Quality Index (PSQI)",

  fields: [
    {
      type: "subheading",
      label: "Pittsburgh Sleep Quality Index (PSQI)"
    },

    {
      name: "bed_time",
      label: "1. What time have you usually gone to bed?",
      type: "input"
    },

    {
      name: "sleep_latency",
      label: "2. How long has it taken to fall asleep?",
      type: "single-select",
      options: [
        { label: "0-15 minutes", value: 0 },
        { label: "16-30 minutes", value: 1 },
        { label: "31-60 minutes", value: 2 },
        { label: "More than 60 minutes", value: 3 }
      ]
    },

    {
      name: "wake_time",
      label: "3. What time have you usually gotten up?",
      type: "input"
    },

    {
      name: "actual_sleep_hours",
      label: "4. How many hours of actual sleep did you get?",
      type: "input"
    },

    ...[
      ["cannot_sleep", "Cannot get to sleep within 30 minutes"],
      ["wake_middle", "Wake up in the middle of the night or early morning"],
      ["bathroom", "Have to get up to use the bathroom"],
      ["breathing", "Cannot breathe comfortably"],
      ["snoring", "Cough or snore loudly"],
      ["cold", "Feel too cold"],
      ["hot", "Feel too hot"],
      ["bad_dreams", "Have bad dreams"],
      ["pain", "Have pain"],
      ["other_reason", "Other reason(s)"]
    ].map(([name, label]) => ({
      name,
      label,
      type: "radio-matrix",
      matrixHeaderLabel: "5. During the past month, how often have you had trouble sleeping because you...",
      options: frequencyOptions
    })),

    {
      name: "other_reason_description",
      label: "Other reason(s), please describe",
      type: "input"
    },

    {
      name: "sleep_medication",
      label:
        "6. During the past month, how often have you taken medicine to help you sleep?",
      type: "single-select",
      matrixHeaderLabel: "Sleep Medication",
      options: frequencyOptions
    },

    {
      name: "daytime_sleepiness",
      label:
        "7. During the past month, how often have you had trouble staying awake while driving, eating meals, or engaging in social activity?",
      type: "single-select",
      matrixHeaderLabel: "Daytime Sleepiness",
      options: frequencyOptions
    },

    {
      name: "enthusiasm",
      label:
        "8. During the past month, how much of a problem has it been to keep up enough enthusiasm to get things done?",
      type: "single-select",
      matrixHeaderLabel: "Enthusiasm",
      options: frequencyOptions
    },

    {
      name: "sleep_quality",
      label:
        "9. During the past month, how would you rate your sleep quality overall?",
      type: "single-select",
      options: [
        { label: "Very Good", value: 0 },
        { label: "Fairly Good", value: 1 },
        { label: "Fairly Bad", value: 2 },
        { label: "Very Bad", value: 3 }
      ]
    },

    ...[
      ["partner_snoring", "Loud snoring"],
      ["partner_breathing_pause", "Long pauses between breaths while asleep"],
      ["partner_leg_twitching", "Legs twitching or jerking while you sleep"],
      ["partner_confusion", "Episodes of disorientation or confusion during sleep"],
      ["partner_restlessness", "Other restlessness while you sleep"]
    ].map(([name, label]) => ({
      name,
      label,
      type: "radio-matrix",
      matrixHeaderLabel: "10. Do you have a bed partner or room mate?",
      options: frequencyOptions
    })),

    {
      name: "partner_restlessness_description",
      label: "Other restlessness description",
      type: "input"
    },

    {
      name: "psqi_total_score",
      label: "Total PSQI Score",
      type: "input",
      readOnly: true
    },

    {
      name: "sleep_interpretation",
      label: "Sleep Quality",
      type: "input",
      readOnly: true
    }
  ]
};
console.log(PSQI_SCHEMA)
export default function PSQIAssessment() {
  const [formData, setFormData] = useState({});

  const scoreFields = [
    "sleep_latency",
    "cannot_sleep",
    "wake_middle",
    "bathroom",
    "breathing",
    "snoring",
    "cold",
    "hot",
    "bad_dreams",
    "pain",
    "other_reason",
    "sleep_medication",
    "daytime_sleepiness",
    "enthusiasm",
    "sleep_quality",
    "partner_snoring",
    "partner_breathing_pause",
    "partner_leg_twitching",
    "partner_confusion",
    "partner_restlessness"
  ];

  const calculatePSQI = (data) => {
    return scoreFields.reduce((total, key) => {
      const value = data[key];
      return total + (Number(value) || 0);
    }, 0);
  };

  const handleChange = (name, value) => {
    const updated = {
      ...formData,
      [name]: value
    };

    const total = calculatePSQI(updated);

    updated.psqi_total_score = total;
    updated.sleep_interpretation =
      total <= 5 ? "Good sleep quality" : "Poor sleep quality";

    setFormData(updated);
  };

  return (
    <CommonFormBuilder
      schema={PSQI_SCHEMA}
      values={formData}
      onChange={handleChange}
      layout="nested"
      submitted={false}
    />
  );
}