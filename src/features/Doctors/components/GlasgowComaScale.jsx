import React, { useState, useEffect } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";


/* =========================================================
   GCS OPTIONS
========================================================= */



/* =========================================================
   GCS SCHEMA
========================================================= */

const GCS_SCHEMA = {
  title: "Glasgow Coma Scale (GCS)",

  fields: [

    {
      type: "single-select",
      name: "eye_opening",
      label: "Eye Opening",
      options: [
  { label: "4 - Spontaneous", value: "4" },
  { label: "3 - To Speech", value: "3" },
  { label: "2 - To Pain", value: "2" },
  { label: "1 - No Eye Opening", value: "1" },
],
      required: true,
    },

    {
      type: "single-select",
      name: "verbal_response",
      label: "Verbal Response",
      options: [
  { label: "5 - Oriented", value: "5" },
  { label: "4 - Confused Conversation", value: "4" },
  { label: "3 - Inappropriate Words", value: "3" },
  { label: "2 - Incomprehensible Sounds", value: "2" },
  { label: "1 - No Verbal Response", value: "1" },
],
      required: true,
    },

    {
      type: "single-select",
      name: "motor_response",
      label: "Motor Response",
      options: [
  { label: "6 - Obeys Commands", value: "6" },
  { label: "5 - Localizes Pain", value: "5" },
  { label: "4 - Withdraws From Pain", value: "4" },
  { label: "3 - Abnormal Flexion", value: "3" },
  { label: "2 - Abnormal Extension", value: "2" },
  { label: "1 - No Motor Response", value: "1" },
],
      required: true,
    },


    {
      type: "input",
      name: "gcs_total_score",
      label: "Total GCS Score",
      readOnly: true,
    },

  ],


  actions: [
    {
      label: "Cancel",
      type: "cancel",
    },
    {
      label: "Save",
      type: "submit",
    },
  ],
};
console.log(GCS_SCHEMA)


/* =========================================================
   COMPONENT
========================================================= */

const GlasgowComaScale = ({ patientId }) => {

  const [values, setValues] = useState({
    eye_opening: "",
    verbal_response: "",
    motor_response: "",
    gcs_total_score: 0,
  });



  /* Calculate Total Score */

  useEffect(() => {

    const eye = Number(values.eye_opening || 0);
    const verbal = Number(values.verbal_response || 0);
    const motor = Number(values.motor_response || 0);

    const total = eye + verbal + motor;


    setValues((prev)=>({
      ...prev,
      gcs_total_score: total
    }));


  }, [
    values.eye_opening,
    values.verbal_response,
    values.motor_response
  ]);




  const handleChange = (field, value) => {

    setValues((prev)=>({
      ...prev,
      [field]: value
    }));

  };



  const handleSave = () => {

    console.log("GCS DATA:", values);

    localStorage.setItem(
      `gcs_${patientId}`,
      JSON.stringify(values)
    );

  };



  return (

    <CommonFormBuilder

      schema={GCS_SCHEMA}

      values={values}

      onChange={handleChange}

      onSubmit={handleSave}

      onCancel={()=>{
        setValues({
          eye_opening:"",
          verbal_response:"",
          motor_response:"",
          gcs_total_score:0
        });
      }}

    />

  );
};


export default GlasgowComaScale;