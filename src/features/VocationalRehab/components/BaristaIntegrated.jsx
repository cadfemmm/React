import React, { useState,useEffect } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

/* =========================================================
   ✅ SCALE OPTIONS
========================================================= */

const SCALE_OPTIONS = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 }
];

/* =========================================================
   ✅ SCALE INFO
========================================================= */

const SCALE_INFO = {
  title: "Difficulty Rating Scale",
  content: [
    "1 – No Difficulty",
    "2 – Mild Difficulty",
    "3 – Moderate Difficulty",
    "4 – Severe Difficulty",
    "5 – Complete Difficulty"
  ]
};

/* =========================================================
   ✅ FIELD BUILDER
========================================================= */

const ratingField = (
  name,
  label,
  description
) => ({
  type: "radio-matrix",
  name,
  label,
  description,
  options: SCALE_OPTIONS,
  matrixHeaderLabel: "Demand",
  showInfoInRow: false
});

/* =========================================================
   ✅ FIELDS
========================================================= */

const FIELDS = [

 
    ratingField("reaching", "Reaching"),

  ratingField("bend", "Bend"),

  ratingField("gripping", "Gripping"),

  ratingField("manipulating", "Manipulating"),

  ratingField(
    "coordination_eyehand",
    "Coordination (Eye-Hand)"
  ),

  ratingField(
    "coordination_bilateral",
    "Coordination (Bilateral)"
  ),

  ratingField("moves", "Moves"),

  ratingField("lifting", "Lifting"),

  ratingField("standing", "Standing"),

  ratingField("walking", "Walking"),

  ratingField("transport", "Transport"),

  ratingField(
    "hlcf_judgment",
    "Higher Level Cognitive Function (Judgment)"
  ),

  ratingField(
    "hlcf_conceptformation",
    "Higher Level Cognitive Function (Concept Formation)"
  ),

  ratingField(
    "hlcf_cognitiveflexibility",
    "Higher Level Cognitive Function (Cognitive Flexibility)"
  ),

  ratingField(
    "hlcf_praxis",
    "Higher Level Cognitive Function (Praxis)"
  ),

  ratingField(
    "attention_sustained",
    "Attention (Sustained)"
  ),

  ratingField(
    "attention_selective",
    "Attention (Selective)"
  ),

  ratingField(
    "memory_short",
    "Memory (Short-Term)"
  ),

  ratingField(
    "memory_long",
    "Memory (Long-Term)"
  ),

  ratingField(
    "perception_visual",
    "Perception (Visual)"
  ),

  ratingField(
    "perception_tactile",
    "Perception (Tactile)"
  ),

  ratingField("thought", "Thought"),

  ratingField("consciousness", "Consciousness"),

  ratingField(
    "visual_ingredients",
    "Visual (Ingredients)"
  ),

  ratingField(
    "visual_monitoring",
    "Visual (Monitoring)"
  ),

  ratingField(
    "vestibular_balance",
    "Vestibular (Balance)"
  ),

  ratingField(
    "vestibular_posture",
    "Vestibular (Posture)"
  ),

  ratingField(
    "proprioceptive_force",
    "Proprioceptive (Force)"
  ),

  ratingField(
    "proprioceptive_navigation",
    "Proprioceptive (Navigation)"
  ),

  ratingField(
    "tactile_temperature",
    "Tactile (Temperature)"
  ),

  ratingField(
    "tactile_grasping",
    "Tactile (Grasping)"
  ),

  ratingField("pain", "Pain"),

  ratingField(
    "temperature_hot",
    "Sensitivity to Temperature & Pressure"
  ),

  ratingField(
    "temperature_pressure",
    "Sensitivity to Temperature & Pressure (Pressure)"
  ),

  ratingField("taste", "Taste"),

  ratingField("smell", "Smell"),

  ratingField(
    "auditory_equipment",
    "Auditory (Equipment)"
  ),

  ratingField(
    "auditory_instructions",
    "Auditory (Instructions)" 
  )
];

/* =========================================================
   ✅ COMPONENT
========================================================= */

export default function BaristaIntegrated({ patient, onBack,onSubmit }) {

  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [patientHistory, setPatientHistory] = useState({
          past_medical_history: "",
          past_family_history: "",
          alerts_and_allergies: ""
        });
        useEffect(() => {
              if (!patient) return;
              setPatientHistory({
                past_medical_history: patient.medical_history || "",
                past_family_history: patient.family_medical_history || "",
                alerts_and_allergies: patient.alerts_and_allergies_history || ""
              });
            }, [patient]);
    
   const storageKey = patient ? `BakeryIntegrated_${patient.id}` : null;

  /* ======================================================
     ✅ HANDLE CHANGE
  ====================================================== */

  const handleChange = (name, value) => {

    setValues((prev) => ({
      ...prev,
      [name]: value
    }));

  };

  /* ======================================================
     ✅ TOTAL SCORE
  ====================================================== */

  const calculateTotal = () => {

    let total = 0;

    Object.keys(values).forEach((key) => {

      const value = values[key];

      if (
        typeof value === "number" &&
        value >= 1 &&
        value <= 5
      ) {
        total += value;
      }

    });

    return total;

  };
  function PatientInformationBlock({ patient, patientHistory, setPatientHistory }) {
  if (!patient) return null;

  const safe = (v) => v ?? "-";
  const formatDate = (d) => d ? new Date(d).toLocaleDateString() : "-";

  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 12,
        fontSize: 14
      }}>
        <div><b>Name:</b> {safe(patient.name)}</div>
        <div><b>IC:</b> {safe(patient.id)}</div>
        <div><b>DOB:</b> {formatDate(patient.dob)}</div>

        <div><b>Age / Gender:</b> {safe(patient.age)} / {safe(patient.sex)}</div>
        <div><b>ICD:</b> {safe(patient.icd)}</div>
        <div><b>Date of Assessment:</b> {new Date().toLocaleDateString()}</div>

        <div><b>Date of Onset:</b> {formatDate(patient.date_of_onset)}</div>
        <div><b>Duration of Diagnosis:</b> -</div>
        <div><b>Primary Diagnosis:</b> {safe(patient.diagnosis_history)}</div>

        <div><b>Secondary Diagnosis:</b> {safe(patient.medical_history)}</div>
        <div><b>Dominant Side:</b> {safe(patient.dominant_side)}</div>
        <div><b>Language Preference:</b> {safe(patient.language_preference)}</div>

        <div><b>Education Level:</b> {safe(patient.education_background)}</div>
        <div><b>Occupation:</b> {safe(patient.occupation)}</div>
        <div><b>Work Status:</b> {safe(patient.employment_status)}</div>

        <div><b>Driving Status:</b> {safe(patient.driving_status)}</div>
        <div><b>PP/OB:</b> {safe(patient.pp_ob)}</div>
        <div><b>Weight:</b> {patient.weight ? `${patient.weight} kg` : "-"}</div>

        {/* ===== HISTORY ===== */}
        <div style={{ gridColumn: "1 / -1", marginTop: 10 }}>
        
           <h3>Patient History</h3>
        
                  <div>
                    <b>Past Medical History</b>
                    <input
                      style={input}
                      value={patientHistory.past_medical_history}
                      onChange={(e) =>
                        setPatientHistory(prev => ({
                          ...prev,
                          past_medical_history: e.target.value
                        }))
                      }
                    />
                  </div>

          
          <div>
                    <b>Family History</b>
                    <input
                      style={input}
                      value={patientHistory.past_family_history}
                      onChange={(e) =>
                        setPatientHistory(prev => ({
                          ...prev,
                          past_family_history: e.target.value
                        }))
                      }
                    />
                  </div>

        
           <div>
                    <b>Allergies</b>
                    <input
                      style={input}
                      value={patientHistory.alerts_and_allergies}
                      onChange={(e) =>
                        setPatientHistory(prev => ({
                          ...prev,
                          alerts_and_allergies: e.target.value
                        }))
                      }
                    />
                  </div>

          <button style={alertBtn}>🚨 Alerts</button>
        </div>
      </div>
    </div>
  );
}

  /* ======================================================
     ✅ SCHEMA
  ====================================================== */

  const schema = {
    actions: [
      { type: "back", label: "Back" },
      { type: "clear", label: "Clear" },
      { type: "save", label: "Save" }
    ],

    title: "Barista Integrated Functional Training",

    titleInfo: SCALE_INFO,

    fields: [

      ...FIELDS,

      {
        type: "textarea",
        name: "trainer_remarks",
        label: "Trainer Remarks"
      },

      {
        type: "text",
        name: "trainer_name",
        label: "Trainer Name",
        value: "Auto detect from system",
        readOnly: true
      },

      {
        type: "date",
        name: "date",
        label: "Date"
      },

      {
        type: "checkbox",
        name: "generate_report",
        label: "Generate Report"
      }
    ]
  };

  return (

    <div>
      <CommonFormBuilder
                            schema={{ title: "Patient Information", sections: [] }}
                            values={{}}
                            onChange={() => {}}
                          >
                            <PatientInformationBlock
                              patient={patient}
                              patientHistory={patientHistory}
                              setPatientHistory={setPatientHistory}
                            />
                          
                            <button style={doctorsReportBtn}>
                              Doctors Reports
                            </button>
                          </CommonFormBuilder>

      <CommonFormBuilder
        schema={schema}
        values={values}
        onChange={handleChange}
        layout="nested"
      />

      {/* ===================================================
          ✅ TOTAL SCORE
      =================================================== */}

      <div
        style={{
          marginTop: 20,
          padding: "14px 18px",
          border: "1px solid #CBD5E1",
          borderRadius: 10,
          background: "#F8FAFC",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: 700,
          fontSize: 18
        }}
      >
        <span>Total Score</span>

        <span>{calculateTotal()}</span>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
          <button
            type="button"
            style={submitBtn}
            onClick={() => {
              setSubmitted(true);
              onSubmit?.(values);
              alert("Home assessment submitted");
            }}
          >
            Submit
          </button>
        </div>

    </div>

  );

}
const input = {
          width: "100%",
          minHeight: 90,
          marginTop: 6,
          marginBottom: 12,
          padding: "10px 12px",
          borderRadius: 6,
          border: "1px solid #d1d5db",
          fontSize: 14,
          resize: "vertical"
};
const alertBtn = {
  marginTop: 10,
          padding: "10px 20px",
          borderRadius: 6,
          border: "1.5px solid #007bff",
          background: "#007bff",
          color: "#fff",
          fontWeight: 600,
          cursor: "pointer"
};
const doctorsReportBtn = {
  padding: "10px 20px", background: "#2563EB", color: "#fff",
  border: "none", borderRadius: 6, fontSize: 14,
  fontWeight: 600, cursor: "pointer", marginTop: 8
};
const submitRow = {
  display: "flex",
  justifyContent: "flex-end",
  marginTop: 16
};

const submitBtn = {
  padding: "12px 32px",
  background: "#2563EB",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  fontWeight: 600,
  fontSize: 15,
  cursor: "pointer"
};