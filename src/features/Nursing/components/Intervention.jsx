import React, { useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const SIMPLE_INTERVENTION_SCHEMA = {
  title: "Intervention",

//   actions: [
//     { type: "back", label: "Back" },
//     { type: "clear", label: "Clear" },
//     { type: "save", label: "Save" }
//   ],

  sections: [
    {
   
      fields: [
        {
          name: "simple_interventions",
          label: "Select Intervention",
          type: "checkbox-group",

          options: [
            {
              label: "Chattanooga",
              value: "chattanooga"
            },
            {
              label: "Fitmi Music",
              value: "fitmi_music"
            },
            {
              label: "Hand Cycling",
              value: "hand_cycling"
            },
            {
              label: "LEGA (Chest Percussion)",
              value: "lega_chest_percussion"
            },
            {
              label: "Magnethoterapy",
              value: "magnethoterapy"
            },
            {
              label: "Motomed",
              value: "motomed"
            },
            {
              label: "Saebo Stim",
              value: "saebo_stim"
            },
            {
              label: "Tilt Table",
              value: "tilt_table"
            },
            {
              label: "High Frequency Chest Wall Oscillation",
              value: "high_frequency_chest_wall_oscillation"
            },
            {
              label: "Others",
              value: "others"
            }
          ]
        },

        {
          name: "simple_intervention_others",
          label: "Specify",
          type: "textarea",

          showIf: {
            field: "simple_interventions",
            includes: "others"
          }
        },
        {
            name: "observation_during_procedure",
            label: "Observation During Procedure",
            type: "textarea",
            },

            {
            name: "adverse_reaction",
            label: "Adverse Reaction",
            type: "radio",
            options: [
                { label: "Yes", value: "yes" },
                { label: "No", value: "no" }
            ]
            },

            {
            name: "adverse_reaction_details",
            label: "Specify",
            type: "textarea",
            showIf: {
                field: "adverse_reaction",
                equals: "yes"
            }
            },
            {
            name: "plan",
            label: "Plan",
            type: "textarea",
            },
      ]
    }
  ]
}

export default function Intervention({
  onBack
}) {

  const [values, setValues] = useState({});

  const onChange = (name, value) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAction = (type) => {
    switch (type) {
      case "back":
        onBack?.();
        break;

      case "clear":
        setValues({});
        break;

      case "save":
        alert("Intervention draft saved");
        break;

      default:
        break;
    }
  };

return (
  <div style={mainContent}>

    {/* SIMPLE INTERVENTION */}
    <CommonFormBuilder
      schema={SIMPLE_INTERVENTION_SCHEMA}
      values={values}
      onChange={onChange}
      onAction={handleAction}
    />

  </div>
);
}

const mainContent = {
  width: "100%",
  padding: 15,
  boxSizing: "border-box"
};
