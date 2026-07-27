import React, { useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const BTE_SCHEMA = {
  title: "BTE Primus RS",
  fields: [
    {
      type: "attach-file",
      name: "bte_primus_rs",
      label: "BTE Primus RS",
      required: false,
    },
  ],
};

const BTEAssessment = ({ patient }) => {
  const [values, setValues] = useState({});

  const onChange = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <CommonFormBuilder
      schema={BTE_SCHEMA}
      values={values}
      onChange={onChange}
      patient={patient}
    />
  );
};

export default BTEAssessment;