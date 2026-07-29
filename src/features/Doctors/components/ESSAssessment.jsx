// ESSAssessment.jsx

import React, { useEffect, useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const essOptions = [
  { label: "Would never doze", value: 0 },
  { label: "Slight chance of dozing", value: 1 },
  { label: "Moderate chance of dozing", value: 2 },
  { label: "High chance of dozing", value: 3 }
];

export const ESS_SCHEMA = {
  title: "Epworth Sleepiness Scale (ESS)",
  fields: [
    {
      type: "subheading",
      label:
        "How likely are you to doze off or fall asleep in the following situations, in contrast to feeling just tired?"
    },

    {
      type: "radio-matrix",
      name: "q1",
      label: "Sitting and reading",
      options: essOptions
    },

    {
      type: "radio-matrix",
      name: "q2",
      label: "Watching TV",
      options: essOptions
    },

    {
      type: "radio-matrix",
      name: "q3",
      label: "Sitting inactive in a public place (e.g. theatre or meeting)",
      options: essOptions
    },

    {
      type: "radio-matrix",
      name: "q4",
      label: "As a passenger in a car for an hour without a break",
      options: essOptions
    },

    {
      type: "radio-matrix",
      name: "q5",
      label: "Lying down to rest in the afternoon when circumstances permit",
      options: essOptions
    },

    {
      type: "radio-matrix",
      name: "q6",
      label: "Sitting and talking to someone",
      options: essOptions
    },

    {
      type: "radio-matrix",
      name: "q7",
      label: "Sitting quietly after a lunch without alcohol",
      options: essOptions
    },

    {
      type: "radio-matrix",
      name: "q8",
      label: "In a car, while stopped for a few minutes in traffic",
      options: essOptions
    },

    {
      type: "input",
      name: "ess_total",
      label: "ESS Total Score",
      readOnly: true
    },

    {
      type: "input",
      name: "ess_interpretation",
      label: "Interpretation",
      readOnly: true
    }
  ]
};
console.log(ESS_SCHEMA)


export const calculateESSScore = (values) => {
  return [
    "q1",
    "q2",
    "q3",
    "q4",
    "q5",
    "q6",
    "q7",
    "q8"
  ].reduce((sum, key) => sum + Number(values[key] || 0), 0);
};

export const getESSInterpretation = (score) => {
  if (score <= 5) {
    return "Lower Normal Daytime Sleepiness";
  }

  if (score <= 10) {
    return "Higher Normal Daytime Sleepiness";
  }

  if (score <= 12) {
    return "Mild Excessive Daytime Sleepiness";
  }

  if (score <= 15) {
    return "Moderate Excessive Daytime Sleepiness";
  }

  return "Severe Excessive Daytime Sleepiness";
};

export default function ESSAssessment() {

  const [values, setValues] = useState({});


  const handleChange = (name, value) => {

    setValues((prev) => ({
      ...prev,
      [name]: value
    }));

  };


  useEffect(() => {

    const score = calculateESSScore(values);


    setValues((prev) => ({
      ...prev,

      ess_total: score,

      ess_interpretation: getESSInterpretation(score)

    }));


  }, [
    values.q1,
    values.q2,
    values.q3,
    values.q4,
    values.q5,
    values.q6,
    values.q7,
    values.q8
  ]);



  return (

    <CommonFormBuilder

      schema={ESS_SCHEMA}

      values={values}

      onChange={handleChange}

      submitted={false}

    />

  );

}