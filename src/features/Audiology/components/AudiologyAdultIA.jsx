import React, { useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const yesNoOptions = [
  { label: "0", value: 0 },
  { label: "1", value: 1 }
];

const scoreFields = ["pentagon_score"];

const calculateMMSEScore = (values) =>
  scoreFields.reduce(
    (sum, key) => sum + Number(values[key] || 0),
    0
  );

const getInterpretation = (score) => {
  if (score >= 26) return "Normal";
  if (score >= 20) return "Mild Cognitive Impairment";
  if (score >= 10) return "Moderate Cognitive Impairment";
  return "Severe Cognitive Impairment";
};

const schema = {
  title: "Mini-Mental State Examination (MMSE)",
  fields: [
    {
      type: "subheading",
      label: "12. Copy the Design (Pentagons)"
    },

    {
      name: "pentagon_reference",
      type: "custom-image",
      label: "Pentagon Reference"
    },

    {
      type: "attach-file",
      name: "pentagon_upload",
      title: "Upload Patient Pentagon Drawing"
    },

    {
      name: "pentagon_score",
      label: "Pentagon Drawing Correct",
      type: "radio-matrix",
      options: yesNoOptions
    },

    {
      name: "mmse_total",
      label: "MMSE Total Score",
      type: "input",
      readOnly: true
    },

    {
      name: "mmse_interpretation",
      label: "Interpretation",
      type: "input",
      readOnly: true
    }
  ]
};

export default function MMSEAssessment() {
  const [formData, setFormData] = useState({
    pentagon_reference: "/mmse-pentagon.png"
  });

  const handleChange = (name, value) => {
    const updated = {
      ...formData,
      value
    };

    const total = calculateMMSEScore(updated);

    updated.mmse_total = total;
    updated.mmse_interpretation = getInterpretation(total);

    setFormData(updated);
  };

  return (
    <CommonFormBuilder
      schema={schema}
      values={formData}
      onChange={handleChange}
      layout="nested"
      submitted={false}
    />
  );
}