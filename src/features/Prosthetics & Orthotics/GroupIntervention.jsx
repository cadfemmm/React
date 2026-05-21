import React, { useEffect, useMemo, useState } from "react";
import api from "../../shared/api/apiClient";
import { API_URL } from "../../platform/config/api.config";
import CommonFormBuilder from "../CommonComponenets/FormBuilder";

/* =========================================================
   ACTIONS
========================================================= */

const ACTIONS = [
  { type: "back", label: "Back" },
  { type: "clear", label: "Clear" },
  { type: "save", label: "Save" }
];

/* =========================================================
   BASE SCHEMA
========================================================= */

const BASE_SCHEMA = {
  title: "",

  actions: ACTIONS,

  sections: [

    /* =====================================================
       BOOKING
    ===================================================== */

    {
      title: "Booking",

      fields: [

        {
          name: "visit_type",
          label: "Visit Type",
          type: "single-select",

          options: [
            {
              label: "Group Intervention",
              value: "group_intervention"
            }
          ]
        },

        {
          name: "session_type",
          label: "Session Type",
          type: "single-select",

          options: [
            {
              label: "Stump Bandaging",
              value: "stump_bandaging"
            },
            {
              label: "Prosthesis Care",
              value: "prosthesis_care"
            },
            {
              label: "Orthosis Use",
              value: "orthosis_use"
            },
            {
              label: "Others",
              value: "others"
            }
          ]
        },

        {
          name: "session_type_other",
          label: "Specify Other Session Type",
          type: "textarea",

          showIf: {
            field: "session_type",
            equals: "others"
          }
        },

        {
          name: "date",
          label: "Date",
          type: "date"
        },

        {
          name: "time",
          label: "Time",
          type: "time"
        },

        {
          name: "cpo",
          label: "CPO",
          type: "single-select",

          options: [
            /* populate dynamically */
          ]
        },

        {
          name: "patient_list",
          label: "Patient List",
          type: "multi-select-dropdown",

          options: []
        }

      ]
    },

    /* =====================================================
       SESSION
    ===================================================== */

    {
      title: "Session",

      fields: [

        {
          name: "attendance",
          label: "Attendance",
          type: "single-select",

          options: [
            {
              label: "Present",
              value: "present"
            },
            {
              label: "Absent",
              value: "absent"
            }
          ]
        },

        {
          name: "participation",
          label: "Participation",
          type: "single-select",

          options: [
            {
              label: "Active",
              value: "active"
            },
            {
              label: "Passive",
              value: "passive"
            },
            {
              label: "Unable",
              value: "unable"
            }
          ]
        },

        {
          name: "response",
          label: "Response",
          type: "single-select",

          options: [
            {
              label: "Improved",
              value: "improved"
            },
            {
              label: "Same",
              value: "same"
            },
            {
              label: "Reduced",
              value: "reduced"
            }
          ]
        }

      ]
    }

  ]
};

/* =========================================================
   COMPONENT
========================================================= */

export default function GroupIntervention({
  patient,
  patients = [],
  onSubmit,
  onBack
}) {

  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [allPatients, setAllPatients] = useState([]);

  useEffect(() => {

  const fetchPatients = async () => {

    try {

      const res = await api.get(
        `${API_URL.PATIENT}?department=Prosthetics%20%26%20Orthotics`
      );

      const data =
        res?.data?.results ||
        res?.data?.data ||
        res?.data ||
        [];

      setAllPatients(Array.isArray(data) ? data : []);

    } catch (err) {

      console.error("Failed to load P&O patients", err);

      setAllPatients([]);
    }
  };

  if (!patients || patients.length === 0) {
    fetchPatients();
  }

}, [patients]);
  /* =====================================================
     DYNAMIC SCHEMA
  ===================================================== */

  const schema = useMemo(() => {

const sourcePatients =
  patients && patients.length > 0
    ? patients
    : allPatients;

const poPatients = (sourcePatients || [])
  .map((patient, index) => ({

    label:

      [
        patient.first_name,
        patient.last_name
      ]
        .filter(Boolean)
        .join(" ")

      ||

      patient.name

      ||

      patient.patient_name

      ||

      patient.email

      ||

      `Patient ${index + 1}`,

    value:

      patient.id

      ||

      patient.patient_id

      ||

      String(index)

  }));

// console.log("poPatients", poPatients);

    return {
      ...BASE_SCHEMA,

      sections: BASE_SCHEMA.sections.map(section => ({
        ...section,

        fields: section.fields.map(field => {

          if (field.name === "patient_list") {
            return {
              ...field,
              options: poPatients
            };
          }

          return field;
        })
      }))
    };

  }, [patients]);

  /* =====================================================
     CHANGE HANDLER
  ===================================================== */

  const onChange = (name, value) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /* =====================================================
     ACTION HANDLER
  ===================================================== */

  const handleAction = (type) => {

    if (type === "back") {
      onBack?.();
    }

    if (type === "clear") {
      setValues({});
      setSubmitted(false);
    }

    if (type === "save") {

      localStorage.setItem(
        `group_intervention_${patient?.id || "new"}`,
        JSON.stringify(values)
      );

      alert("Group intervention saved");
    }
  };

  /* =====================================================
     SUBMIT
  ===================================================== */

  const handleSubmit = () => {

    setSubmitted(true);

    onSubmit?.(values);

    alert("Group intervention submitted");
  };

  /* =====================================================
     UI
  ===================================================== */

  return (
    <div>

      <CommonFormBuilder
        schema={schema}
        values={values}
        onChange={onChange}
        submitted={submitted}
        onAction={handleAction}
      >

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 24
          }}
        >
          <button
            onClick={handleSubmit}
            style={{
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 28px",
              fontWeight: 600,
              cursor: "pointer"
            }}
          >
            Submit Group Intervention
          </button>
        </div>

      </CommonFormBuilder>

    </div>
  );
}