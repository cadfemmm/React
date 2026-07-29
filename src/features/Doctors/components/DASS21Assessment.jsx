// DASS21Assessment.jsx

import React, { useEffect, useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const dassOptions = [
  { label: "Did not apply to me at all", value: 0 },
  { label: "Applied to me to some degree", value: 1 },
  { label: "Applied to me to a considerable degree", value: 2 },
  { label: "Applied to me very much or most of the time", value: 3 }
];

export const DASS21_SCHEMA = {
  title: "Depression Anxiety Stress Scale (DASS-21)",
  titleInfo: {
  
  content: [
    "Depression: 0–9 Normal · 10–13 Mild · 14–20 Moderate · 21–27 Severe · 28+ Extreme",
    "Anxiety: 0–7 Normal · 8–9 Mild · 10–14 Moderate · 15–19 Severe · 20+ Extreme",
    "Stress: 0–14 Normal · 15–18 Mild · 19–25 Moderate · 26–33 Severe · 34+ Extreme"
  ]
},
  fields: [
    {
      type: "subheading",
      label:
        "Please read each statement and select how much the statement applied to you over the past week."
    },

    // Depression
    {
      type: "radio-",
      name: "d1",
      label: "I couldn't seem to experience any positive feeling at all",
      options: [
  { label: "Did not apply to me at all", value: 0 },
  { label: "Applied to me to some degree", value: 1 },
  { label: "Applied to me to a considerable degree", value: 2 },
  { label: "Applied to me very much or most of the time", value: 3 }
]
    },
    {
      type: "radio-matrix",
      name: "d2",
      label: "I found it difficult to work up the initiative to do things",
      options: [
  { label: "Did not apply to me at all", value: 0 },
  { label: "Applied to me to some degree", value: 1 },
  { label: "Applied to me to a considerable degree", value: 2 },
  { label: "Applied to me very much or most of the time", value: 3 }
]
    },
    {
      type: "radio-matrix",
      name: "d3",
      label: "I felt that I had nothing to look forward to",
      options: [
  { label: "Did not apply to me at all", value: 0 },
  { label: "Applied to me to some degree", value: 1 },
  { label: "Applied to me to a considerable degree", value: 2 },
  { label: "Applied to me very much or most of the time", value: 3 }
]
    },
    {
      type: "radio-matrix",
      name: "d4",
      label: "I felt down-hearted and blue",
      options: [
  { label: "Did not apply to me at all", value: 0 },
  { label: "Applied to me to some degree", value: 1 },
  { label: "Applied to me to a considerable degree", value: 2 },
  { label: "Applied to me very much or most of the time", value: 3 }
]
    },
    {
      type: "radio-matrix",
      name: "d5",
      label: "I was unable to become enthusiastic about anything",
      options: [
  { label: "Did not apply to me at all", value: 0 },
  { label: "Applied to me to some degree", value: 1 },
  { label: "Applied to me to a considerable degree", value: 2 },
  { label: "Applied to me very much or most of the time", value: 3 }
]
    },
    {
      type: "radio-matrix",
      name: "d6",
      label: "I felt I wasn't worth much as a person",
      options: [
  { label: "Did not apply to me at all", value: 0 },
  { label: "Applied to me to some degree", value: 1 },
  { label: "Applied to me to a considerable degree", value: 2 },
  { label: "Applied to me very much or most of the time", value: 3 }
]
    },
    {
      type: "radio-matrix",
      name: "d7",
      label: "I felt that life was meaningless",
      options: [
  { label: "Did not apply to me at all", value: 0 },
  { label: "Applied to me to some degree", value: 1 },
  { label: "Applied to me to a considerable degree", value: 2 },
  { label: "Applied to me very much or most of the time", value: 3 }
]
    },

    // Anxiety
    {
      type: "radio-matrix",
      name: "a1",
      label: "I was aware of dryness of my mouth",
      options: [
  { label: "Did not apply to me at all", value: 0 },
  { label: "Applied to me to some degree", value: 1 },
  { label: "Applied to me to a considerable degree", value: 2 },
  { label: "Applied to me very much or most of the time", value: 3 }
]
    },
    {
      type: "radio-matrix",
      name: "a2",
      label: "I experienced breathing difficulty",
      options: [
  { label: "Did not apply to me at all", value: 0 },
  { label: "Applied to me to some degree", value: 1 },
  { label: "Applied to me to a considerable degree", value: 2 },
  { label: "Applied to me very much or most of the time", value: 3 }
]
    },
    {
      type: "radio-matrix",
      name: "a3",
      label: "I experienced trembling",
      options: [
  { label: "Did not apply to me at all", value: 0 },
  { label: "Applied to me to some degree", value: 1 },
  { label: "Applied to me to a considerable degree", value: 2 },
  { label: "Applied to me very much or most of the time", value: 3 }
]
    },
    {
      type: "radio-matrix",
      name: "a4",
      label: "I was worried about situations in which I might panic",
      options: [
  { label: "Did not apply to me at all", value: 0 },
  { label: "Applied to me to some degree", value: 1 },
  { label: "Applied to me to a considerable degree", value: 2 },
  { label: "Applied to me very much or most of the time", value: 3 }
]
    },
    {
      type: "radio-matrix",
      name: "a5",
      label: "I felt I was close to panic",
      options: [
  { label: "Did not apply to me at all", value: 0 },
  { label: "Applied to me to some degree", value: 1 },
  { label: "Applied to me to a considerable degree", value: 2 },
  { label: "Applied to me very much or most of the time", value: 3 }
]
    },
    {
      type: "radio-matrix",
      name: "a6",
      label: "I was aware of the action of my heart in the absence of physical exertion",
      options: [
  { label: "Did not apply to me at all", value: 0 },
  { label: "Applied to me to some degree", value: 1 },
  { label: "Applied to me to a considerable degree", value: 2 },
  { label: "Applied to me very much or most of the time", value: 3 }
]
    },
    {
      type: "radio-matrix",
      name: "a7",
      label: "I felt scared without any good reason",
      options: [
  { label: "Did not apply to me at all", value: 0 },
  { label: "Applied to me to some degree", value: 1 },
  { label: "Applied to me to a considerable degree", value: 2 },
  { label: "Applied to me very much or most of the time", value: 3 }
]
    },

    // Stress
    {
      type: "radio-matrix",
      name: "s1",
      label: "I found it hard to wind down",
      options: [
  { label: "Did not apply to me at all", value: 0 },
  { label: "Applied to me to some degree", value: 1 },
  { label: "Applied to me to a considerable degree", value: 2 },
  { label: "Applied to me very much or most of the time", value: 3 }
]
    },
    {
      type: "radio-matrix",
      name: "s2",
      label: "I tended to over-react to situations",
      options: [
  { label: "Did not apply to me at all", value: 0 },
  { label: "Applied to me to some degree", value: 1 },
  { label: "Applied to me to a considerable degree", value: 2 },
  { label: "Applied to me very much or most of the time", value: 3 }
]
    },
    {
      type: "radio-matrix",
      name: "s3",
      label: "I felt that I was using a lot of nervous energy",
      options: [
  { label: "Did not apply to me at all", value: 0 },
  { label: "Applied to me to some degree", value: 1 },
  { label: "Applied to me to a considerable degree", value: 2 },
  { label: "Applied to me very much or most of the time", value: 3 }
]
    },
    {
      type: "radio-matrix",
      name: "s4",
      label: "I found myself getting agitated",
      options: [
  { label: "Did not apply to me at all", value: 0 },
  { label: "Applied to me to some degree", value: 1 },
  { label: "Applied to me to a considerable degree", value: 2 },
  { label: "Applied to me very much or most of the time", value: 3 }
]
    },
    {
      type: "radio-matrix",
      name: "s5",
      label: "I found it difficult to relax",
      options: [
  { label: "Did not apply to me at all", value: 0 },
  { label: "Applied to me to some degree", value: 1 },
  { label: "Applied to me to a considerable degree", value: 2 },
  { label: "Applied to me very much or most of the time", value: 3 }
]
    },
    {
      type: "radio-matrix",
      name: "s6",
      label: "I was intolerant of anything that kept me from getting on with what I was doing",
      options: [
  { label: "Did not apply to me at all", value: 0 },
  { label: "Applied to me to some degree", value: 1 },
  { label: "Applied to me to a considerable degree", value: 2 },
  { label: "Applied to me very much or most of the time", value: 3 }
]
    },
    {
      type: "radio-matrix",
      name: "s7",
      label: "I felt that I was rather touchy",
      options: [
  { label: "Did not apply to me at all", value: 0 },
  { label: "Applied to me to some degree", value: 1 },
  { label: "Applied to me to a considerable degree", value: 2 },
  { label: "Applied to me very much or most of the time", value: 3 }
]
    },

    {
      type: "input",
      name: "depression_score",
      label: "Depression Score",
      readOnly: true
    },
    {
      type: "input",
      name: "depression_level",
      label: "Depression Severity",
      readOnly: true
    },
    {
      type: "input",
      name: "anxiety_score",
      label: "Anxiety Score",
      readOnly: true
    },
    {
      type: "input",
      name: "anxiety_level",
      label: "Anxiety Severity",
      readOnly: true
    },
    {
      type: "input",
      name: "stress_score",
      label: "Stress Score",
      readOnly: true
    },
    {
      type: "input",
      name: "stress_level",
      label: "Stress Severity",
      readOnly: true
    }
  ]
};

const getDepressionSeverity = (score) => {
  if (score <= 9) return "Normal";
  if (score <= 13) return "Mild";
  if (score <= 20) return "Moderate";
  if (score <= 27) return "Severe";
  return "Extremely Severe";
};

const getAnxietySeverity = (score) => {
  if (score <= 7) return "Normal";
  if (score <= 9) return "Mild";
  if (score <= 14) return "Moderate";
  if (score <= 19) return "Severe";
  return "Extremely Severe";
};

const getStressSeverity = (score) => {
  if (score <= 14) return "Normal";
  if (score <= 18) return "Mild";
  if (score <= 25) return "Moderate";
  if (score <= 33) return "Severe";
  return "Extremely Severe";
};

export default function DASS21Assessment() {

  const [values, setValues] = useState({});


  useEffect(() => {

    const depressionScore =
      (
        Number(values.d1 || 0) +
        Number(values.d2 || 0) +
        Number(values.d3 || 0) +
        Number(values.d4 || 0) +
        Number(values.d5 || 0) +
        Number(values.d6 || 0) +
        Number(values.d7 || 0)
      ) * 2;


    const anxietyScore =
      (
        Number(values.a1 || 0) +
        Number(values.a2 || 0) +
        Number(values.a3 || 0) +
        Number(values.a4 || 0) +
        Number(values.a5 || 0) +
        Number(values.a6 || 0) +
        Number(values.a7 || 0)
      ) * 2;


    const stressScore =
      (
        Number(values.s1 || 0) +
        Number(values.s2 || 0) +
        Number(values.s3 || 0) +
        Number(values.s4 || 0) +
        Number(values.s5 || 0) +
        Number(values.s6 || 0) +
        Number(values.s7 || 0)
      ) * 2;



    setValues((prev)=>({

      ...prev,

      depression_score: depressionScore,
      depression_level: getDepressionSeverity(depressionScore),

      anxiety_score: anxietyScore,
      anxiety_level: getAnxietySeverity(anxietyScore),

      stress_score: stressScore,
      stress_level: getStressSeverity(stressScore)

    }));


  },[
    values.d1,
    values.d2,
    values.d3,
    values.d4,
    values.d5,
    values.d6,
    values.d7,

    values.a1,
    values.a2,
    values.a3,
    values.a4,
    values.a5,
    values.a6,
    values.a7,

    values.s1,
    values.s2,
    values.s3,
    values.s4,
    values.s5,
    values.s6,
    values.s7
  ]);



  const handleChange = (name,value)=>{

    setValues((prev)=>({

      ...prev,

      [name]:value

    }));

  };



  return (

    <CommonFormBuilder

      schema={DASS21_SCHEMA}

      values={values}

      onChange={handleChange}

      submitted={false}

    />

  );

}