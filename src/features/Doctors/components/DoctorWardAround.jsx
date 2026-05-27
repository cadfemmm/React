import React, { useEffect, useMemo, useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import PatientCard from "../../../shared/cards/PatientCard";

const mainContent = { padding: 15 };

const BP_POSITION_OPTIONS = [
  { label: "Lying", value: "lying" },
  { label: "Sitting", value: "sitting" },
  { label: "Standing", value: "standing" },
];

function buildVitalsAccordionChildren({ prefix = "", readOnly = false } = {}) {
  const n = (key) => (prefix ? `${prefix}_${key}` : key);
  const vitalInput = (key, label) => ({
    type: "input",
    name: n(key),
    label,
    ...(readOnly ? { readOnly: true, placeholder: "Auto-populated" } : {}),
  });
  return [
    vitalInput("heart_rate", "Heart Rate (bpm)"),
    {
      type: "row",
      fields: [
        vitalInput("blood_pressure", "Blood Pressure"),
        {
          type: "radio",
          name: n("bp_position"),
          label: "Position",
          options: BP_POSITION_OPTIONS,
          ...(readOnly ? { readOnly: true } : {}),
        },
      ],
    },
    {
      type: "row",
      fields: [
        vitalInput("respiratory_rate", "Respiratory Rate"),
        vitalInput("spo2", "SpO2 (%)"),
        vitalInput("temperature", "Temperature (°C)"),
      ],
    },
  ];
}

const VITAL_KEYS = [
  "heart_rate",
  "blood_pressure",
  "bp_position",
  "respiratory_rate",
  "spo2",
  "temperature",
];

/** Latest vitals — same fields as Cardiovascular & Respiratory (Latest Vitals). */
function loadLatestVitals(patient) {
  const p = patient || {};
  const v = p.vitals || {};
  const out = {
    heart_rate: "",
    blood_pressure: "",
    bp_position: "lying",
    respiratory_rate: "",
    spo2: "",
    temperature: "",
  };

  out.heart_rate = v.hr ?? p.hr ?? p.pulse ?? p.heart_rate ?? "";
  out.blood_pressure = v.bp ?? p.bp ?? p.blood_pressure ?? "";
  out.respiratory_rate = v.rr ?? p.rr ?? p.respiratory_rate ?? "";
  out.spo2 = v.spo2 ?? p.spo2 ?? "";
  out.temperature = v.temp ?? p.temp ?? p.temperature ?? "";
  out.bp_position = p.bp_position ?? v.bp_position ?? "lying";

  if (patient?.id) {
    try {
      const nursingRaw = localStorage.getItem(`nursing_assessment_draft_${patient.id}`);
      if (nursingRaw) {
        const nursing = JSON.parse(nursingRaw);
        const nv = nursing.values || nursing;
        out.heart_rate = out.heart_rate || nv.obj_heart_rate || "";
        out.blood_pressure = out.blood_pressure || nv.obj_bp || "";
        out.respiratory_rate = out.respiratory_rate || nv.obj_resp_rate || "";
        out.spo2 = out.spo2 || nv.obj_spo2 || "";
        out.temperature = out.temperature || nv.obj_body_temp || "";
      }
    } catch {
      /* ignore */
    }
  }

  return out;
}

const WARD_AROUND_SCHEMA = {
  title: "Ward-Around",
  actions: [
    { type: "back", label: "Back" },
    { type: "save", label: "Save" },
  ],
  sections: [
    {
      fields: [
        {
          type: "accordion",
          label: "Reports",
          defaultOpen: false,
          children: [],
        },
        {
          name: "ward_new_issue",
          label: "New Issue",
          type: "radio",
          options: [
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ],
        },
        {
          name: "ward_new_issue_domains",
          label: "Select",
          type: "checkbox-group",
          options: [
            { label: "Cognitive", value: "cognitive" },
            { label: "Swallowing,Speech & Language", value: "swallowing_speech_language" },
            { label: "Visual", value: "visual" },
            { label: "Hearing", value: "hearing" },
            { label: "Cardiovascular & Respiratory System", value: "cardiovascular_respiratory" },
            { label: "Physical", value: "physical" },
            { label: "Bowel Issue", value: "bowel_issue" },
            { label: "Bladder Issue", value: "bladder_issue" },
            { label: "Sexual", value: "sexual" },
            { label: "Spasm & Spasticity", value: "spasm_spasticity" },
            { label: "Skin", value: "skin" },
            { label: "Functional", value: "functional" },
          ],
          showIf: { field: "ward_new_issue", equals: "yes" },
        },
        {
          name: "current_complaints",
          label: "Current Complaints with description",
          type: "input",
          placeholder: "Enter current complaints...",
        },
        {
          type: "accordion",
          label: "Vital Sign",
          defaultOpen: true,
          children: buildVitalsAccordionChildren({ readOnly: true }),
        },
        {
          name: "physical_examination",
          label: "Physical Examination",
          type: "input",
          placeholder: "Enter physical examination details...",
        },
        {
          name: "plan",
          label: "Plan",
          type: "textarea",
          placeholder: "Enter plan...",
        },
      ],
    },
  ],
};

function normalizeDraft(saved) {
  const values = saved?.values && typeof saved.values === "object" ? saved.values : {};
  return {
    ward_new_issue: values.ward_new_issue ?? "no",
    ward_new_issue_domains: Array.isArray(values.ward_new_issue_domains) ? values.ward_new_issue_domains : [],
    current_complaints: values.current_complaints ?? "",
    physical_examination: values.physical_examination ?? "",
    plan: values.plan ?? "",
  };
}

export default function DoctorWardAround({ patient, onBack, onSubmit, onUpdatePatient }) {
  const storageKey = patient?.id ? `doctor_ward_around_draft_${patient.id}` : null;

  const [patientHistory, setPatientHistory] = useState({
    past_medical_history: patient?.medical_history || "",
    past_family_history: patient?.family_medical_history || "",
    alerts_and_allergies: patient?.alerts_and_allergies_history || "",
  });

  const [draft, setDraft] = useState(() => normalizeDraft({}));

  useEffect(() => {
    setPatientHistory({
      past_medical_history: patient?.medical_history || "",
      past_family_history: patient?.family_medical_history || "",
      alerts_and_allergies: patient?.alerts_and_allergies_history || "",
    });
  }, [patient?.id]);

  useEffect(() => {
    if (!patient?.id) return;
    const updated = {
      ...patient,
      medical_history: patientHistory.past_medical_history,
      family_medical_history: patientHistory.past_family_history,
      alerts_and_allergies_history: patientHistory.alerts_and_allergies,
    };
    localStorage.setItem("patient_" + patient.id, JSON.stringify(updated));
    onUpdatePatient?.(updated);
  }, [
    patient?.id,
    patientHistory.past_medical_history,
    patientHistory.past_family_history,
    patientHistory.alerts_and_allergies,
  ]);

  useEffect(() => {
    if (!storageKey) return;
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
      setDraft(normalizeDraft(saved));
      if (saved?.patientHistory) setPatientHistory(saved.patientHistory);
    } catch {
      setDraft(normalizeDraft({}));
    }
  }, [storageKey]);

  const latestVitals = useMemo(() => loadLatestVitals(patient), [patient]);

  const formValues = useMemo(
    () => ({
      ...latestVitals,
      ...draft,
      ...latestVitals,
    }),
    [draft, latestVitals]
  );

  const persist = (nextDraft, nextHistory = patientHistory) => {
    if (!storageKey) return;
    const toSave = { ...nextDraft };
    VITAL_KEYS.forEach((k) => delete toSave[k]);
    localStorage.setItem(storageKey, JSON.stringify({ values: toSave, patientHistory: nextHistory }));
  };

  const handleChange = (name, value) => {
    if (VITAL_KEYS.includes(name)) return;
    setDraft((prev) => {
      const next = { ...prev, [name]: value };
      if (name === "ward_new_issue" && value !== "yes") {
        next.ward_new_issue_domains = [];
      }
      persist(next);
      return next;
    });
  };

  const handleAction = (type) => {
    if (type === "back") onBack?.();
    if (type === "save") {
      persist(draft, patientHistory);
      alert("Ward-Around saved");
      onSubmit?.(draft);
    }
  };

  return (
    <div style={mainContent}>
      <PatientCard
        patient={patient}
        patientHistory={patientHistory}
        setPatientHistory={(next) => {
          setPatientHistory(next);
          persist(draft, next);
        }}
        showDoctorsReport={true}
        department="Doctor"
      />

      <CommonFormBuilder
        schema={WARD_AROUND_SCHEMA}
        values={formValues}
        onChange={handleChange}
        onAction={handleAction}
      />
    </div>
  );
}
