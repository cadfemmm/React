import React, { useEffect, useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";


export const GAD7_SCHEMA = {

 title: "Generalized Anxiety Disorder (GAD-7)",

titleInfo: {
  title: "GAD-7 Severity Interpretation",
  content: [
    "0–4 : Minimal / None",
    "5–9 : Mild",
    "10–14 : Moderate",
    "15–21 : Severe"
  ]
},
  fields: [

    {
      type: "subheading",
      label:
        "Over the last 2 weeks, how often have you been bothered by the following problems?"
    },


    {
      type: "radio-matrix",
      name: "q1",
      label: "Feeling nervous, anxious, or on edge",
      options: [
        { label: "Not at all (0)", value: 0 },
        { label: "Several days (1)", value: 1 },
        { label: "More than half the days (2)", value: 2 },
        { label: "Nearly every day (3)", value: 3 }
      ]
    },


    {
      type: "radio-matrix",
      name: "q2",
      label: "Not being able to stop or control worrying",
      options: [
        { label: "Not at all (0)", value: 0 },
        { label: "Several days (1)", value: 1 },
        { label: "More than half the days (2)", value: 2 },
        { label: "Nearly every day (3)", value: 3 }
      ]
    },


    {
      type: "radio-matrix",
      name: "q3",
      label: "Worrying too much about different things",
      options: [
        { label: "Not at all (0)", value: 0 },
        { label: "Several days (1)", value: 1 },
        { label: "More than half the days (2)", value: 2 },
        { label: "Nearly every day (3)", value: 3 }
      ]
    },


    {
      type: "radio-matrix",
      name: "q4",
      label: "Trouble relaxing",
      options: [
        { label: "Not at all (0)", value: 0 },
        { label: "Several days (1)", value: 1 },
        { label: "More than half the days (2)", value: 2 },
        { label: "Nearly every day (3)", value: 3 }
      ]
    },


    {
      type: "radio-matrix",
      name: "q5",
      label: "Being so restless that it is hard to sit still",
      options: [
        { label: "Not at all (0)", value: 0 },
        { label: "Several days (1)", value: 1 },
        { label: "More than half the days (2)", value: 2 },
        { label: "Nearly every day (3)", value: 3 }
      ]
    },


    {
      type: "radio-matrix",
      name: "q6",
      label: "Becoming easily annoyed or irritable",
      options: [
        { label: "Not at all (0)", value: 0 },
        { label: "Several days (1)", value: 1 },
        { label: "More than half the days (2)", value: 2 },
        { label: "Nearly every day (3)", value: 3 }
      ]
    },


    {
      type: "radio-matrix",
      name: "q7",
      label: "Feeling afraid as if something awful might happen",
      options: [
        { label: "Not at all (0)", value: 0 },
        { label: "Several days (1)", value: 1 },
        { label: "More than half the days (2)", value: 2 },
        { label: "Nearly every day (3)", value: 3 }
      ]
    },


    {
      type: "input",
      name: "gad7_total",
      label: "GAD-7 Total Score",
      readOnly: true
    },


    {
      type: "input",
      name: "gad7_severity",
      label: "Severity",
      readOnly: true
    }

  ]

};



export const calculateGAD7Score = (values) => {

  return [
    "q1",
    "q2",
    "q3",
    "q4",
    "q5",
    "q6",
    "q7"

  ].reduce(
    (sum, key) => sum + Number(values[key] || 0),
    0
  );

};



export const getGAD7Severity = (score) => {

  if (score <= 4)
    return "Minimal Anxiety";

  if (score <= 9)
    return "Mild Anxiety";

  if (score <= 14)
    return "Moderate Anxiety";

  return "Severe Anxiety";

};



export default function GAD7Assessment() {


  const [values, setValues] = useState({});


  const handleChange = (name, value) => {

    setValues((prev) => ({
      ...prev,
      [name]: value
    }));

  };



  useEffect(() => {

    const score = calculateGAD7Score(values);


    setValues((prev) => ({
      ...prev,
      gad7_total: score,
      gad7_severity: getGAD7Severity(score)
    }));

  }, [
    values.q1,
    values.q2,
    values.q3,
    values.q4,
    values.q5,
    values.q6,
    values.q7
  ]);



  return (

    <CommonFormBuilder
      schema={GAD7_SCHEMA}
      values={values}
      onChange={handleChange}
      submitted={false}
    />

  );

}