import React, { useEffect, useState, createContext } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import SectionPreviewButton from "../../../shared/ui/SectionPreviewButton";
import { localDateTimeString } from "../../../shared/utils/dateFormatter";
import PatientCard from "../../../shared/cards/PatientCard";

import { ASSESSMENT_TABS } from "../../../schema/actions";
import PSYCHO_PEDIA_SCHEMA from "../../../schema/psychology/pediatricprogress";

/* ---------------- PATIENT CARD ---------------- */
function PatientInformationBlock({
  patient,
  patientHistory,
  setPatientHistory,
}) {
  if (!patient) return null;

  const safe = (v) => v ?? "-";
  const formatDate = (d) => (d ? new Date(d).toLocaleDateString() : "-");

  return (
    <div style={{ marginBottom: 24 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 12,
          fontSize: 14,
        }}
      >
        <div>
          <b>Name:</b> {safe(patient.name)}
        </div>
        <div>
          <b>IC:</b> {safe(patient.id)}
        </div>
        <div>
          <b>DOB:</b> {formatDate(patient.dob)}
        </div>

        <div>
          <b>Age / Gender:</b> {safe(patient.age)} / {safe(patient.sex)}
        </div>
        <div>
          <b>ICD:</b> {safe(patient.icd)}
        </div>
        <div>
          <b>Date of Assessment:</b> {new Date().toLocaleDateString()}
        </div>

        <div>
          <b>Date of Onset:</b> {formatDate(patient.date_of_onset)}
        </div>
        <div>
          <b>Duration of Diagnosis:</b> -
        </div>
        <div>
          <b>Primary Diagnosis:</b> {safe(patient.diagnosis_history)}
        </div>

        <div>
          <b>Secondary Diagnosis:</b> {safe(patient.medical_history)}
        </div>
        <div>
          <b>Dominant Side:</b> {safe(patient.dominant_side)}
        </div>
        <div>
          <b>Language Preference:</b> {safe(patient.language_preference)}
        </div>

        <div>
          <b>Education Level:</b> {safe(patient.education_background)}
        </div>
        <div>
          <b>Occupation:</b> {safe(patient.occupation)}
        </div>
        <div>
          <b>Work Status:</b> {safe(patient.employment_status)}
        </div>

        <div>
          <b>Driving Status:</b> {safe(patient.driving_status)}
        </div>
        <div>
          <b>PP/OB:</b> {safe(patient.pp_ob)}
        </div>
        <div>
          <b>Weight:</b> {patient.weight ? `${patient.weight} kg` : "-"}
        </div>

        {/* ===== HISTORY ===== */}
        <div style={{ gridColumn: "1 / -1", marginTop: 10 }}>
          <h3>Patient History</h3>

          <div>
            <b>Past Medical History</b>
            <input
              style={input}
              value={patientHistory.past_medical_history}
              onChange={(e) =>
                setPatientHistory((prev) => ({
                  ...prev,
                  past_medical_history: e.target.value,
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
                setPatientHistory((prev) => ({
                  ...prev,
                  past_family_history: e.target.value,
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
                setPatientHistory((prev) => ({
                  ...prev,
                  alerts_and_allergies: e.target.value,
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

/* ---------------- MAIN COMPONENT ---------------- */

const YES_NO = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

export default function PediatricPsychologyProgress({
  patient,
  onSubmit,
  onBack,
}) {
  const [values, setValues] = useState({});

  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("subjective");
  const PatientContext = createContext(null);
  const [patientHistory, setPatientHistory] = useState({
    past_medical_history: "",
    past_family_history: "",
    alerts_and_allergies: "",
  });

  const storageKey = patient
    ? `psychology_follow_up_assessment_draft_${patient.id}`
    : null;

  /* LOAD DRAFT */
  useEffect(() => {
    if (!storageKey) return;
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      setValues(parsed.values || {});
    }
  }, [storageKey]);

  /* AUTO POPULATE */
  useEffect(() => {
    if (!patient) return;

    setValues((v) => ({
      ...v,
      psychiatric_history_autogenerated:
        patient.psychiatric_history ||
        patient.medical_history ||
        "No data available",
      family_medical_history_autogenerated:
        patient.family_history ||
        patient.diagnosis_history ||
        "No data available",
      drug_history_autogenerated:
        patient.medications || patient.drug_history || "No data available",
    }));
  }, [patient]);

  const onChange = (name, value) => {
    setValues((prev) => {
      let updatedValue = value;

      if (Array.isArray(value)) {
        // ✅ NONE logic
        if (name === "substance_use") {
          if (value.includes("no_usage")) {
            updatedValue = ["no_usage"];
          } else {
            updatedValue = value.filter((v) => v !== "none");
          }
        }

        // ✅ N/A logic
        if (name === "cognition_orientation") {
          if (value.includes("na")) {
            updatedValue = ["na"];
          } else {
            updatedValue = value.filter((v) => v !== "na");
          }
        }

        // ✅ Risk Assessment logic
        if (name === "risk_assessment") {
          if (value.includes("no_current_risk")) {
            updatedValue = ["no_current_risk"];
          } else {
            updatedValue = value.filter((v) => v !== "no_current_risk");
          }
        }

        // ✅ Drug Review logic (THIS PAGE IMPORTANT)
        if (name === "substance_use") {
          if (value.includes("no_usage")) {
            updatedValue = ["no_usage"];
          } else {
            updatedValue = value.filter((v) => v !== "no_usage");
          }
        }
      }

      return {
        ...prev,
        [name]: updatedValue,
      };
    });
  };

  const handleAction = (type) => {
    if (type === "back") onBack?.();

    if (type === "clear") {
      setValues({});
      setSubmitted(false);
      localStorage.removeItem(storageKey);
    }

    if (type === "save") {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ values, updatedAt: new Date() }),
      );
      alert("Psychology draft saved");
    }
  };

  const handleSubmit = () => {
    const status = values.chief_complaint_status;
    const text = values.chief_complaint;
    if (!text && (status === "modified" || status === "new_complaint")) {
      alert("Chief Complaint is required");
      return;
    }
    setSubmitted(true);
    onSubmit?.(values);
    alert("Psychology assessment submitted");
  };

  const activeTabIdx = ASSESSMENT_TABS.indexOf(activeTab);

  const schemaMap = {
    subjective: PSYCHO_PEDIA_SCHEMA.SUBJECTIVE,
    objective: PSYCHO_PEDIA_SCHEMA.OBJECTIVE,
    assessment: PSYCHO_PEDIA_SCHEMA.ASSESSMENT,
    plan: PSYCHO_PEDIA_SCHEMA.PLAN,
  };

  return (
    <PatientContext.Provider value={patient}>
      <div style={mainContent}>
        {/* PATIENT INFO */}
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

          <button style={doctorsReportBtn}>Doctors Reports</button>
        </CommonFormBuilder>

        {/* ✅ SESSION DETAILS ABOVE TABS */}
        <CommonFormBuilder
          schema={PSYCHO_PEDIA_SCHEMA.SESSION}
          values={values}
          onChange={onChange}
        />

        {/* TABS */}
        <div style={tabBar}>
          {["subjective", "objective", "assessment", "plan"].map((tab) => (
            <div
              key={tab}
              style={activeTab === tab ? tabActive : tabBtn}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </div>
          ))}
        </div>

        {/* FORM */}
        <CommonFormBuilder
          schema={schemaMap[activeTab]}
          values={values}
          onChange={onChange}
          submitted={submitted}
          onAction={handleAction}
        >
          {/* SUBMIT */}

          <div style={submitRow}>
            <SectionPreviewButton
              title={`Preview: ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`}
              schema={schemaMap[activeTab]}
              values={values}
            />
            {activeTab !== "plan" ? (
              <button
                style={submitBtn}
                onClick={() => setActiveTab(ASSESSMENT_TABS[activeTabIdx + 1])}
              >
                Next
              </button>
            ) : (
              <button style={submitBtn} onClick={handleSubmit}>
                Submit Psychology Assessment
              </button>
            )}
          </div>
        </CommonFormBuilder>
      </div>
    </PatientContext.Provider>
  );
}
/* ---------------- STYLES ---------------- */

const mainContent = { width: "100%" };

const tabBar = {
  display: "flex",
  gap: 12,
  justifyContent: "center",
  borderBottom: "1px solid #ddd",
  marginBottom: 12,
};

const tabBtn = {
  padding: "10px 22px",
  fontWeight: 600,
  cursor: "pointer",
  color: "#0f172a",
};

const tabActive = {
  ...tabBtn,
  borderBottom: "3px solid #2451b3",
  color: "#2451b3",
};

const submitRow = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: 10,
  marginTop: 20,
};

const submitBtn = {
  padding: "12px 32px",
  background: "#2563EB",
  color: "#fff",
  border: "none",
  borderRadius: 10,
  fontSize: 15,
  fontWeight: 700,
};

const section = { marginBottom: 24 };

const patientGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 12,
};
const input = {
  width: "100%",
  minHeight: 90,
  marginTop: 6,
  marginBottom: 12,
  padding: "10px 12px",
  borderRadius: 6,
  border: "1px solid #d1d5db",
  fontSize: 14,
  resize: "vertical",
};
const alertBtn = {
  marginTop: 10,
  padding: "10px 20px",
  borderRadius: 6,
  border: "1.5px solid #007bff",
  background: "#007bff",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
};

const doctorsReportBtn = {
  padding: "10px 20px",
  background: "#2563EB",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  fontSize: 14,
  fontWeight: 600,
  cursor: "pointer",
  marginTop: 8,
};
