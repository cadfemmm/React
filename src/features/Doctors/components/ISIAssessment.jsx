import React, { useEffect, useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const isiOptions = [
  { label: "0", value: 0 },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
];

export const ISI_SCHEMA = {
  title: "Insomnia Severity Index (ISI)",
  sections: [
    {
      fields: [
        {
          type: "subheading",
          label: "Please rate the current severity of your insomnia problem.",
        },
        {
          type: "radio-matrix",
          name: "q1",
          label: "Difficulty falling asleep",
          options: isiOptions,
        },
        {
          type: "radio-matrix",
          name: "q2",
          label: "Difficulty staying asleep",
          options: isiOptions,
        },
        {
          type: "radio-matrix",
          name: "q3",
          label: "Problems waking up too early",
          options: isiOptions,
        },
        {
          type: "radio-matrix",
          name: "q4",
          label: "How satisfied/dissatisfied are you with your current sleep pattern?",
          options: isiOptions,
        },
        {
          type: "radio-matrix",
          name: "q5",
          label:
            "How noticeable to others do you think your sleep problem is in terms of impairing the quality of your life?",
          options: isiOptions,
        },
        {
          type: "radio-matrix",
          name: "q6",
          label: "How worried/distressed are you about your current sleep problem?",
          options: isiOptions,
        },
        {
          type: "radio-matrix",
          name: "q7",
          label:
            "To what extent do you consider your sleep problem to interfere with your daily functioning?",
          options: isiOptions,
        },
        {
          type: "input",
          name: "isi_total",
          label: "ISI Total Score",
          readOnly: true,
        },
        {
          type: "input",
          name: "isi_severity",
          label: "Insomnia Severity",
          readOnly: true,
        },
      ],
    },
  ],
};
console.log(ISI_SCHEMA)

export const calculateISIScore = (values) => {
  return ["q1", "q2", "q3", "q4", "q5", "q6", "q7"].reduce(
    (sum, key) => sum + Number(values[key] || 0),
    0
  );
};

export const getISISeverity = (score) => {
  if (score <= 7) return "No Clinically Significant Insomnia";
  if (score <= 14) return "Subthreshold Insomnia";
  if (score <= 21) return "Clinical Insomnia (Moderate Severity)";
  return "Clinical Insomnia (Severe)";
};

export default function ISIAssessment() {
  const [values, setValues] = useState({
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
    q5: 0,
    q6: 0,
    q7: 0,
    isi_total: 0,
    isi_severity: "No Clinically Significant Insomnia",
  });

  useEffect(() => {
    const score = calculateISIScore(values);
    const severity = getISISeverity(score);

    setValues((prev) => ({
      ...prev,
      isi_total: score,
      isi_severity: severity,
    }));
  }, [values.q1, values.q2, values.q3, values.q4, values.q5, values.q6, values.q7]);

  const handleChange = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <CommonFormBuilder
      schema={ISI_SCHEMA}
      values={values}
      onChange={handleChange}
      submitted={false}
    />
  );
}