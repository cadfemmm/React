import React, { useState } from "react";
import CommonFormBuilder from "../CommonComponenets/FormBuilder";

const SPEECHANDLANGUAGEGROUP_SCHEMA = {
  title: "Group Intervention",
    actions: [
    {
      type: "back",
      label: "Back"
    }
  ],
  sections: [
    {
      title: "SESSION",
      fields: [
        {
          type: "checkbox-group",
          name: "session_type",
          label: "Select Session Type",
          options: [
            { label: "Swallowing", value: "swallowing" },
            { label: "Breathing", value: "breathing" },
            { label: "Voicing", value: "voicing" },
            { label: "Receptive Language", value: "receptive" },
            { label: "Expressive Language", value: "expressive" },
            { label: "Speech", value: "speech" },
            { label: "Others", value: "others" },
          ],
        },
      ],
    },

    {
      title: "SWALLOWING",
      showIf: {
    field: "session_type",
    includes: "swallowing",
  },
      fields: [
        {
          type: "checkbox-group",
          name: "swallowing_interventions",
          label: "Interventions",
          options: [
            {
              label:
                "Education about ingestion functions [KTB.PM.ZZ]",
              value: "ktb_pm",
            },
            {
              label:
                "Interview in relation to swallowing [KTC.AN.ZZ]",
              value: "ktc_an",
            },
            {
              label:
                "Assisting and leading exercise in relation to swallowing [KTC.PG.ZZ]",
              value: "ktc_pg",
            },
            {
              label:
                "Education about swallowing [KTC.PM.ZZ]",
              value: "ktc_pm",
            },
            {
              label:
                "Advising about swallowing [KTC.PN.ZZ]",
              value: "ktc_pn",
            },
          ],
        },
      ],
    },

    {
      title: "BREATHING",
      showIf: {
  field: "session_type",
  includes: "breathing",
},
      fields: [
        {
          type: "checkbox-group",
          name: "breathing_interventions",
          label: "Interventions",
          options: [
            {
              label:
                "Assisting and leading exercise for respiration function [JTB.PG.ZZ]",
              value: "jtb_pg",
            },
            {
              label:
                "Education about respiration function [JTB.PM.ZZ]",
              value: "jtb_pm",
            },
          ],
        },
      ],
    },

    {
      title: "VOICING",
      showIf: {
  field: "session_type",
  includes: "voicing",
},
      fields: [
        {
          type: "checkbox-group",
          name: "voicing_interventions",
          label: "Interventions",
          options: [
            {
              label:
                "Assisting and leading exercise for voice functions [JUB.PG.ZZ]",
              value: "jub_pg",
            },
            {
              label:
                "Education about voice functions [JUB.PM.ZZ]",
              value: "jub_pm",
            },
          ],
        },
      ],
    },

    {
      title: "RECEPTIVE LANGUAGE",
      showIf: {
  field: "session_type",
  includes: "receptive",
},
      fields: [
        {
          type: "checkbox-group",
          name: "receptive_interventions",
          label: "Interventions",
          options: [
            {
              label:
                "Training in receiving spoken messages [SEA.PH.ZZ]",
              value: "sea_ph",
            },
            {
              label:
                "Education about receiving spoken messages [SEA.PM.ZZ]",
              value: "sea_pm",
            },
            {
              label:
                "Advising about receiving spoken messages [SEA.PN.ZZ]",
              value: "sea_pn",
            },
          ],
        },
      ],
    },

    {
      title: "EXPRESSIVE LANGUAGE",
      showIf: {
  field: "session_type",
  includes: "expressive",
},
      fields: [
        {
          type: "checkbox-group",
          name: "expressive_interventions",
          label: "Interventions",
          options: [
            {
              label: "Observation of speaking [SFA.AM.ZZ]",
              value: "sfa_am",
            },
            {
              label: "Training in speaking [SFA.PH.ZZ]",
              value: "sfa_ph",
            },
            {
              label: "Education about speaking [SFA.PM.ZZ]",
              value: "sfa_pm",
            },
            {
              label: "Advising about speaking [SFA.PN.ZZ]",
              value: "sfa_pn",
            },
            {
              label: "Observation of having a conversation [SGA.AM.ZZ]",
              value: "sga_am",
            },
            {
              label: "Training in having a conversation [SGA.PH.ZZ]",
              value: "sga_ph",
            },
            {
              label: "Advising about having a conversation [SGA.PN.ZZ]",
              value: "sga_pn",
            },
            {
              label: "Counselling about having a conversation [SGA.PP.ZZ]",
              value: "sga_pp",
            },
          ],
        },
      ],
    },

    {
      title: "SPEECH",
      showIf: {
  field: "session_type",
  includes: "speech",
},
      fields: [
        {
          type: "checkbox-group",
          name: "speech_interventions",
          label: "Interventions",
          options: [
            {
              label:
                "Observation of articulation functions [JUD.AM.ZZ]",
              value: "jud_am",
            },
            {
              label:
                "Assisting and leading exercise for articulation functions [JUD.PG.ZZ]",
              value: "jud_pg",
            },
            {
              label:
                "Training of articulation functions [JUD.PH.ZZ]",
              value: "jud_ph",
            },
            {
              label:
                "Education about articulation functions [JUD.PM.ZZ]",
              value: "jud_pm",
            },
            {
              label:
                "Observation of fluency and rhythm of speech functions [JUF.AM.ZZ]",
              value: "juf_am",
            },
            {
              label:
                "Assisting and leading exercise for fluency and rhythm of speech functions [JUF.PG.ZZ]",
              value: "juf_pg",
            },
            {
              label:
                "Training of fluency and rhythm of speech functions [JUF.PH.ZZ]",
              value: "juf_ph",
            },
            {
              label:
                "Education about fluency and rhythm of speech functions [JUF.PM.ZZ]",
              value: "juf_pm",
            },
          ],
        },
      ],
    },
{
  title: "OTHERS",
  showIf: {
    field: "session_type",
    includes: "others",
  },
  fields: [
    {
      type: "textarea",
      name: "others",
      label: "Others",
      placeholder: "Enter intervention details...",
    },
  ],
},
    {
      title: "",
      fields: [
      
        {
      type: "radio",
      name: "complications",
      label: "Complications",
      options: [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
      ],
    },
    {
      type: "input",
      name: "complication_details",
      label: "Complication Details",
      showIf: {
        field: "complications",
        equals: "Yes",
      },
    },
        
        {
  type: "checkbox-group",
  name: "requires_option",
  label: "Requires",
  options: [
    { label: "Maximum cues", value: "maximum" },
    { label: "Moderate cues", value: "moderate" },
    { label: "Minimal cues", value: "minimal" },
    { label: "Independent performance", value: "independent" },
  ],
},
        {
          type: "textarea",
          name: "remarks",
          label: "Remarks / Additional Notes",
        },
      ],
    },
  ],
};
console.log(SPEECHANDLANGUAGEGROUP_SCHEMA)
export default function SpeechandlanguagegroupForm({ patient, onBack, selectedPatients = [] }) {
  const [values, setValues] = useState({});

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  // Support both single patient (from SpeechandlanguagePatients) and multiple selectedPatients (from GenericDepartmentDashboard)
  const displayPatient = patient || selectedPatients?.[0] || null;
  const patientName = displayPatient?.name || displayPatient?.patient_name || "";
  const handleAction = (type) => {
    if (type === "back") {
      onBack?.();
    }
  };
  
  return (
  <div>
    {selectedPatients.length > 0 && (
      <div
        style={{
          marginBottom: 20,
          padding: "14px 18px",
          borderRadius: 12,
          background: "#fef2f2",
          border: "1px solid #fecaca",
        }}
      >
        <div style={{ fontSize: 13, fontWeight: 700, color: "#991b1b", marginBottom: 8 }}>
          Selected participants ({selectedPatients.length})
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {selectedPatients.map((p) => (
            <span
              key={p.id ?? p.patient_id ?? p.mrn}
              style={{
                fontSize: 12,
                fontWeight: 600,
                padding: "4px 10px",
                borderRadius: 999,
                background: "#fff",
                color: "#7f1d1d",
                border: "1px solid #fecaca",
              }}
            >
              {p.name || p.patient_name || p.mrn || "Patient"}
            </span>
          ))}
        </div>
      </div>
    )}
    <CommonFormBuilder
      schema={SPEECHANDLANGUAGEGROUP_SCHEMA}
      values={values}
      onChange={handleChange}
      onAction={handleAction}
      layout="nested"
    />
  </div>
  );
}