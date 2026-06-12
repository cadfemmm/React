import React, { useEffect, useState, createContext, useContext } from "react";
import {
  localDateTimeString,
  calculateDuration,
} from "../../../shared/utils/dateFormatter";

import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
// Import original assessment components
import DASSFormBuilder from "./DassForm";
import PSSFormBuilder from "./PssForm";
import PHQ9FormBuilder from "./PhqForm";
import GAD7FormBuilder from "./GadForm";
import HAMDFormBuilder from "./HamdForm";
import HAM_A_FormBuilder from "./HamaForm";
import PsychologyFollowUpAssessment from "./PsychologyFollowupAssessment";
import PatientCard from "../../../shared/cards/PatientCard";
import PediatricPsychologyProgress from "./PediatricPsychologyProgress";
import PediatricPsychologyAssessment from "./PediatricPsychologyAssessment";
import PsychologyProgress from "./PsychologyProgress";

// Schema
import PSYCHO_SCHEMA from "../../../schema/psychology/index"
import { ASSESSMENT_TABS, TAB_META } from "../../../schema/actions"

// Create context to pass patient to assessment components
const PatientContext = createContext(null);

// Adapter components that bridge values/onChange to patient/onSubmit/onBack
function DASS21Adapter({ values, onChange }) {
  const patient = useContext(PatientContext);
  const handleSubmit = (payload) => {
    // Store in parent values using namespace
    if (payload && payload.values) {
      Object.keys(payload.values).forEach((key) => {
        onChange(`dass21_${key}`, payload.values[key]);
      });
    }
  };
  const handleBack = () => {
    // Close the assessment by clearing the active key
    const activeKey = "psychology_assessments_active";
    onChange(activeKey, null);
  };
  return (
    <DASSFormBuilder
      patient={patient}
      onSubmit={handleSubmit}
      onBack={handleBack}
    />
  );
}

function PSSAdapter({ values, onChange }) {
  const patient = useContext(PatientContext);
  const handleSubmit = (payload) => {
    if (payload && payload.values) {
      Object.keys(payload.values).forEach((key) => {
        onChange(`pss_${key}`, payload.values[key]);
      });
    }
  };
  const handleBack = () => {
    const activeKey = "psychology_assessments_active";
    onChange(activeKey, null);
  };
  return (
    <PSSFormBuilder
      patient={patient}
      onSubmit={handleSubmit}
      onBack={handleBack}
    />
  );
}

function PHQ9Adapter({ values, onChange }) {
  const patient = useContext(PatientContext);
  const handleSubmit = (payload) => {
    if (payload && payload.values) {
      Object.keys(payload.values).forEach((key) => {
        onChange(`phq9_${key}`, payload.values[key]);
      });
    }
  };
  const handleBack = () => {
    const activeKey = "psychology_assessments_active";
    onChange(activeKey, null);
  };
  return (
    <PHQ9FormBuilder
      patient={patient}
      onSubmit={handleSubmit}
      onBack={handleBack}
    />
  );
}

function GAD7Adapter({ values, onChange }) {
  const patient = useContext(PatientContext);
  const handleSubmit = (payload) => {
    if (payload && payload.values) {
      Object.keys(payload.values).forEach((key) => {
        onChange(`gad7_${key}`, payload.values[key]);
      });
    }
  };
  const handleBack = () => {
    const activeKey = "psychology_assessments_active";
    onChange(activeKey, null);
  };
  return (
    <GAD7FormBuilder
      patient={patient}
      onSubmit={handleSubmit}
      onBack={handleBack}
    />
  );
}

function HAMDAdapter({ values, onChange }) {
  const patient = useContext(PatientContext);
  const handleSubmit = (payload) => {
    if (payload && payload.values) {
      Object.keys(payload.values).forEach((key) => {
        onChange(`hamd_${key}`, payload.values[key]);
      });
    }
  };
  const handleBack = () => {
    const activeKey = "psychology_assessments_active";
    onChange(activeKey, null);
  };
  return (
    <HAMDFormBuilder
      patient={patient}
      onSubmit={handleSubmit}
      onBack={handleBack}
    />
  );
}

function HAMAAdapter({ values, onChange }) {
  const patient = useContext(PatientContext);
  const handleSubmit = (payload) => {
    if (payload && payload.values) {
      Object.keys(payload.values).forEach((key) => {
        onChange(`hama_${key}`, payload.values[key]);
      });
    }
  };
  const handleBack = () => {
    const activeKey = "psychology_assessments_active";
    onChange(activeKey, null);
  };
  return (
    <HAM_A_FormBuilder
      patient={patient}
      onSubmit={handleSubmit}
      onBack={handleBack}
    />
  );
}

// Assessment Registry - using original components with adapters
export const PSYCHOLOGY_ASSESSMENT_REGISTRY = {
  dass21: DASS21Adapter,
  pss: PSSAdapter,
  phq9: PHQ9Adapter,
  gad7: GAD7Adapter,
  hamd: HAMDAdapter,
  hama: HAMAAdapter,
};

/* ===================== OPTIONS ===================== */

const YES_NO = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

/* ===================== COMPONENT ===================== */

export default function PsychologyAssessment({
  patient,
  onSubmit,
  onBack,
  mode,
}) {
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("subjective");
  const [formData, setFormData] = React.useState({
    doctor_note: "",
    medical_drug_history: "",
  });
  const [patientHistory, setPatientHistory] = useState({
    past_medical_history: "",
    past_family_history: "",
    alerts_and_allergies: "",
  });

  const storageKey = patient
    ? `psychology_assessment_draft_${patient.id}`
    : null;

  useEffect(() => {
    if (!storageKey) return;
    const saved = localStorage.getItem(storageKey);
    if (saved) setValues(JSON.parse(saved).values || {});
  }, [storageKey]);

  useEffect(() => {
    if (!patient) return;
    setPatientHistory({
      past_medical_history: patient.medical_history || "",
      past_family_history: patient.family_medical_history || "",
      alerts_and_allergies: patient.alerts_and_allergies_history || "",
    });
  }, [patient]);
  useEffect(() => {
    if (!patient) return;
    setValues((v) => ({
      ...v,
      psychiatric_history_autogenerated:
        patient.psychiatric_history ||
        patient.medical_history ||
        "No data available",
      medical_history_autogenerated:
        patient.medical_history || "No data available",
      family_history_autogenerated:
        patient.family_history ||
        patient.family_medical_history ||
        "No data available",
      drug_history_autogenerated:
        patient.medications?.join(", ") ||
        patient.drug_history ||
        "No data available",
    }));
  }, [patient]);

  useEffect(() => {
    if (!storageKey) return;
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        setValues(JSON.parse(saved).values || {});
      } catch {}
    }
  }, [storageKey]);

  if (mode === "followup") {
    const age = Number(patient?.age || 0);

    // Age below 20 → Pediatric Progress
    if (age < 20) {
      return (
        <PediatricPsychologyAssessment
          patient={patient}
          onSubmit={onSubmit}
          onBack={onBack}
        />
      );
    }

    // Age 20 and above → Adult Progress
    return (
      <PsychologyFollowUpAssessment
        patient={patient}
        onSubmit={onSubmit}
        onBack={onBack}
      />
    );
  }

  if (mode === "progress") {
    const age = Number(patient?.age || 0);

    // Age below 20 → Pediatric Progress
    if (age < 20) {
      return (
        <PediatricPsychologyProgress
          patient={patient}
          onSubmit={onSubmit}
          onBack={onBack}
        />
      );
    }

    // Age 20 and above → Adult Progress
    return (
      <PsychologyProgress
        patient={patient}
        onSubmit={onSubmit}
        onBack={onBack}
      />
    );
  }

  const onChange = (name, value) => {
    setValues((prev) => {
      let updatedValue = value;

      if (Array.isArray(value)) {
        // ---- CASE 1: "None" logic ----
        if (
          name === "perceptual_disturbance" ||
          name === "thought_content_patient_reported"
        ) {
          if (value.includes("none")) {
            updatedValue = ["none"];
          } else {
            updatedValue = value.filter((v) => v !== "none");
          }
        }

        // ---- CASE 2: "N/A" logic ----
        if (name === "cognition_orientation") {
          if (value.includes("na")) {
            updatedValue = ["na"];
          } else {
            updatedValue = value.filter((v) => v !== "na");
          }
        }

        // ---- CASE 3: "No Risk" logic ----
        if (name === "risk_assessment") {
          if (value.includes("no_current_risk")) {
            updatedValue = ["no_current_risk"];
          } else {
            updatedValue = value.filter((v) => v !== "no_current_risk");
          }
        }
      }

      return {
        ...prev,
        [name]: updatedValue,
      };
    });
  };

  const problemList = (values) => {
    var text = "";
    if (values.perceptual_disturbance) {
      values.perceptual_disturbance.forEach((v) => {
        text +=
          v.charAt(0).toUpperCase() + v.slice(1).replaceAll("_", " ") + "\n";
      });
    }
    if (values.thought_content_patient_reported) {
      values.thought_content_patient_reported.forEach((v) => {
        text +=
          v.charAt(0).toUpperCase() + v.slice(1).replaceAll("_", " ") + "\n";
      });
    }
    return text;
  };

  const computedValues = {
    ...values,
    problem_listings: problemList(values) || "",
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
    setSubmitted(true);
    onSubmit?.(values);
    alert("Psychology assessment submitted");
  };

  const activeTabIdx = ASSESSMENT_TABS.indexOf(activeTab);

  const schemaMap = {
    subjective: PSYCHO_SCHEMA.SUBJECTIVE,
    objective: PSYCHO_SCHEMA.OBJECTIVE,
    assessment: PSYCHO_SCHEMA.ASSESSMENT,
    plan: PSYCHO_SCHEMA.PLAN,
  };

  const numAge = Number(patient?.age || 0);

  const today = new Date();

  const formatDate = (d) => (d ? new Date(d).toLocaleDateString() : "-");

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
  if (numAge < 20) {
    return (
      <PediatricPsychologyAssessment
        patient={patient}
        onSubmit={onSubmit}
        onBack={onBack}
      />
    );
  }

  /* ===================== RENDER ===================== */

  return (
    <PatientContext.Provider value={patient}>
      <div style={mainContent}>
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
        {/* ===== TABS ===== */}
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

        {/* ===== TAB CONTENT ===== */}
        <CommonFormBuilder
          schema={schemaMap[activeTab]}
          values={computedValues}
          onChange={onChange}
          submitted={submitted}
          onAction={handleAction}
          assessmentRegistry={PSYCHOLOGY_ASSESSMENT_REGISTRY}
        >
          <div style={submitRow}>
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

/* ===================== STYLES ===================== */

const mainContent = { margin: "0 auto", width: "100%" };

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

const section = {
  marginBottom: 24,
};

const patientGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 12,
  fontSize: 14,
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
