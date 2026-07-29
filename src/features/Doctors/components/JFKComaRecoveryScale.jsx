import React, { useState, useEffect } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";


/* =========================================================
   CRS-R OPTIONS
========================================================= */




/* =========================================================
   CRS-R SCHEMA
========================================================= */

const CRS_R_SCHEMA = {

  title: "JFK Coma Recovery Scale – Revised (CRS-R)",
    titleInfo: {
    title: "CRS-R Outcome Classification",
    content: [
      "• Minimally Conscious State Minus (MCS-)",
      "• Minimally Conscious State Plus (MCS+)",
      "• Emergence from Minimally Conscious State (eMCS)"
    ]
  },


  fields: [

    {
      type: "single-select",
      name: "auditory_function",
      label: "Auditory Function Scale",
      options: [
  { label: "4 - Consistent Movement to Command", value: "4" },
  { label: "3 - Localization to Sound", value: "3" },
  { label: "2 - Reproducible Movement to Sound", value: "2" },
  { label: "1 - Auditory Startle", value: "1" },
  { label: "0 - None", value: "0" },
],
    },


    {
      type: "single-select",
      name: "visual_function",
      label: "Visual Function Scale",
      options: [
  { label: "5 - Object Localization: Reaching", value: "5" },
  { label: "4 - Object Localization: Grasping", value: "4" },
  { label: "3 - Visual Pursuit", value: "3" },
  { label: "2 - Fixation", value: "2" },
  { label: "1 - Visual Startle", value: "1" },
  { label: "0 - None", value: "0" },
],
    },


    {
      type: "single-select",
      name: "motor_function",
      label: "Motor Function Scale",
      options: [
  { label: "6 - Functional Object Use", value: "6" },
  { label: "5 - Automatic Motor Response", value: "5" },
  { label: "4 - Object Manipulation", value: "4" },
  { label: "3 - Localization to Pain", value: "3" },
  { label: "2 - Flexion Withdrawal", value: "2" },
  { label: "1 - Abnormal Posturing", value: "1" },
  { label: "0 - None", value: "0" },
],
    },


    {
      type: "single-select",
      name: "oromotor_verbal_function",
      label: "Oromotor/Verbal Function Scale",
      options: [
  { label: "3 - Intelligible Verbalization", value: "3" },
  { label: "2 - Vocalization / Oral Movement", value: "2" },
  { label: "1 - Oral Reflex Movement", value: "1" },
  { label: "0 - None", value: "0" },
],
    },


    {
      type: "single-select",
      name: "communication",
      label: "Communication Scale",
      options: [
  { label: "2 - Functional Communication", value: "2" },
  { label: "1 - Non-functional Communication", value: "1" },
  { label: "0 - None", value: "0" },
],
    },


    {
      type: "single-select",
      name: "arousal",
      label: "Arousal Scale",
      options: [
  { label: "3 - Attention Maintained", value: "3" },
  { label: "2 - Attention Fluctuates", value: "2" },
  { label: "1 - Eye Opening Without Stimulation", value: "1" },
  { label: "0 - None", value: "0" },
],
    },


    {
      type: "input",
      name: "crs_r_total_score",
      label: "Total CRS-R Score",
      readOnly: true,
    },


  ],


  actions:[
    {
      label:"Cancel",
      type:"cancel"
    },
    {
      label:"Save",
      type:"submit"
    }
  ]

};
console.log(CRS_R_SCHEMA)



/* =========================================================
   COMPONENT
========================================================= */

const JFKComaRecoveryScale = ({patientId}) => {


const [values,setValues] = useState({

  auditory_function:"",
  visual_function:"",
  motor_function:"",
  oromotor_verbal_function:"",
  communication:"",
  arousal:"",
  crs_r_total_score:0

});



/* ============================
   Calculate CRS-R Total
============================ */

useEffect(()=>{


const total =

Number(values.auditory_function || 0)+
Number(values.visual_function || 0)+
Number(values.motor_function || 0)+
Number(values.oromotor_verbal_function || 0)+
Number(values.communication || 0)+
Number(values.arousal || 0);



setValues(prev=>({

 ...prev,

 crs_r_total_score:total

}));


},[
values.auditory_function,
values.visual_function,
values.motor_function,
values.oromotor_verbal_function,
values.communication,
values.arousal
]);




const handleChange=(field,value)=>{


setValues(prev=>({

...prev,

[field]:value

}));

};



const handleSave=()=>{


console.log("CRS-R DATA",values);


localStorage.setItem(
`crs_r_${patientId}`,
JSON.stringify(values)
);


};



return (

<CommonFormBuilder

schema={CRS_R_SCHEMA}

values={values}

onChange={handleChange}

onSubmit={handleSave}

onCancel={()=>{

setValues({

auditory_function:"",
visual_function:"",
motor_function:"",
oromotor_verbal_function:"",
communication:"",
arousal:"",
crs_r_total_score:0

});

}}

/>

);


};


export default JFKComaRecoveryScale;