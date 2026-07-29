import React, { useState, useEffect } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";


export const PHQ9_SCHEMA = {
  title: "Patient Health Questionnaire (PHQ-9)",
    titleInfo: {
    title: "PHQ-9 Severity Interpretation",
    content: [
      "0–4 : Minimal or None",
      "5–9 : Mild",
      "10–14 : Moderate",
      "15–19 : Moderately Severe",
      "20–27 : Severe"
    ]
  },

  fields: [

    {
      type: "subheading",
      label:
        "Over the last 2 weeks, how often have you been bothered by any of the following problems?"
    },

    {
      type: "radio-matrix",
      name: "q1",
      label: "1. Little interest or pleasure in doing things",
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
      label: "2. Feeling down, depressed, or hopeless",
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
      label: "3. Trouble falling or staying asleep, or sleeping too much",
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
      label: "4. Feeling tired or having little energy",
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
      label: "5. Poor appetite or overeating",
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
      label:
        "6. Feeling bad about yourself, or that you are a failure or have let yourself or your family down",
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
      label:
        "7. Trouble concentrating on things, such as reading the newspaper or watching television",
      options: [
        { label: "Not at all (0)", value: 0 },
        { label: "Several days (1)", value: 1 },
        { label: "More than half the days (2)", value: 2 },
        { label: "Nearly every day (3)", value: 3 }
      ]
    },

    {
      type: "radio-matrix",
      name: "q8",
      label:
        "8. Moving or speaking so slowly that other people could have noticed, or being so fidgety or restless",
      options: [
        { label: "Not at all (0)", value: 0 },
        { label: "Several days (1)", value: 1 },
        { label: "More than half the days (2)", value: 2 },
        { label: "Nearly every day (3)", value: 3 }
      ]
    },

    {
      type: "radio-matrix",
      name: "q9",
      label:
        "9. Thoughts that you would be better off dead or of hurting yourself in some way",
      options: [
        { label: "Not at all (0)", value: 0 },
        { label: "Several days (1)", value: 1 },
        { label: "More than half the days (2)", value: 2 },
        { label: "Nearly every day (3)", value: 3 }
      ]
    },


    {
      type: "score-box",
      name: "phq9_total",
      label: "Total PHQ-9 Score",
      readOnly: true
    },


    {
      type: "text",
      name: "phq9_interpretation",
      label: "Severity",
      readOnly: true
    }

  ]
};



export default function PHQ9Assessment() {


  const [values, setValues] = useState({});


  const handleChange = (name, value) => {

    setValues(prev => ({
      ...prev,
      [name]: value
    }));

  };


  const calculateScore = () => {

    const questions = [
      "q1",
      "q2",
      "q3",
      "q4",
      "q5",
      "q6",
      "q7",
      "q8",
      "q9"
    ];


    return questions.reduce(
      (total, key) =>
        total + Number(values[key] || 0),
      0
    );

  };


  const totalScore = calculateScore();


  const getSeverity = () => {

    if (totalScore <= 4)
      return "Minimal depression";

    if (totalScore <= 9)
      return "Mild depression";

    if (totalScore <= 14)
      return "Moderate depression";

    if (totalScore <= 19)
      return "Moderately severe depression";

    return "Severe depression";

  };



  useEffect(() => {

    setValues(prev => ({
      ...prev,
      phq9_total: totalScore,
      phq9_interpretation: getSeverity()
    }));

  }, [totalScore]);



  return (

    <CommonFormBuilder

      schema={PHQ9_SCHEMA}

      values={values}

      onChange={handleChange}

      submitted={false}

    />

  );

}