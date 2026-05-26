import React, { useState, useEffect, useMemo } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import PatientCard from "../../../shared/cards/PatientCard";

const mainContent = { padding: 15 };

function buildFormValuesFromPatient(patient, draft = {}) {
  return {
    clinical_note_type: draft.clinical_note_type ?? patient?.clinical_note_type ?? "",
    aduan: draft.aduan ?? patient?.complaint ?? patient?.medical_history ?? patient?.diagnosis_history ?? "-",
    bp: draft.bp ?? patient?.vitals?.bp ?? patient?.bp ?? "",
    rr: draft.rr ?? patient?.vitals?.rr ?? patient?.rr ?? "",
    spo2: draft.spo2 ?? patient?.vitals?.spo2 ?? patient?.spo2 ?? "",
    hr: draft.hr ?? patient?.vitals?.hr ?? patient?.pulse ?? patient?.hr ?? "",
    temp: draft.temp ?? patient?.vitals?.temp ?? patient?.temp ?? "",
    ps: draft.ps ?? patient?.vitals?.ps ?? patient?.ps ?? "",
    xray_status: draft.xray_status ?? patient?.xray_status ?? "non_indicator",
    xray_result: draft.xray_result ?? patient?.xray_result ?? "",
    lab_status: draft.lab_status ?? patient?.lab_status ?? "non_indicator",
    lab_result: draft.lab_result ?? patient?.lab_result ?? "",
    doctor_plan: draft.doctor_plan ?? patient?.doctor_plan ?? patient?.report_from_doctor ?? "",
    diagnosis: draft.diagnosis ?? patient?.diagnosis ?? patient?.diagnosis_history ?? "",
    dirawat_oleh_doktor:
      draft.dirawat_oleh_doktor ?? patient?.treated_by_doctor ?? patient?.doctor_name ?? "",
    status_ob_pp: draft.status_ob_pp ?? patient?.status_ob_pp ?? "",
    others: draft.others ?? patient?.resus_others ?? "",
  };
}

const CLINICAL_NOTES_SCHEMA = {
  enableLanguageToggle: true,
  title: { en: "Clinical Notes", ms: "Nota Klinikal" },
  actions: [
    { type: "toggle-language" },
    { type: "back", label: { en: "Back", ms: "Kembali" } },
    { type: "save", label: { en: "Save", ms: "Simpan" } },
  ],
  sections: [
    {
      fields: [
        {
          name: "clinical_note_type",
          label: { en: "Type", ms: "Jenis" },
          type: "radio",
          options: [
            { label: { en: "Emergency", ms: "Kecemasan" }, value: "emergency" },
            { label: { en: "Non-Emergency", ms: "Bukan Kecemasan" }, value: "non_emergency" },
          ],
        },
        {
          name: "aduan",
          label: { en: "Complaint", ms: "Aduan" },
          type: "textarea",
          readOnly: true,
        },
        {
          type: "subheading",
          label: { en: "Vital Signs & Measurements", ms: "Tanda Vital" },
        },
        {
          type: "row",
          fields: [
            { name: "bp", label: { en: "BP", ms: "BP" }, type: "input" },
            { name: "rr", label: { en: "RR", ms: "RR" }, type: "input" },
            { name: "spo2", label: { en: "SPO2", ms: "SPO2" }, type: "input" },
            { name: "hr", label: { en: "HR", ms: "HR" }, type: "input" },
            { name: "temp", label: { en: "T", ms: "T" }, type: "input" },
            { name: "ps", label: { en: "P/S", ms: "P/S" }, type: "input" },
          ],
        },
        {
          type: "subheading",
          label: { en: "Reports", ms: "Laporan" },
        },
        {
          name: "xray_status",
          label: { en: "X-Ray", ms: "X-Ray" },
          type: "radio",
          readOnly: true,
          options: [
            { value: "non_indicator", label: { en: "Non Indicator", ms: "Tiada Petunjuk" } },
            { value: "done", label: { en: "Done", ms: "Selesai" } },
          ],
        },
        {
          name: "xray_result",
          label: { en: "X-Ray Result", ms: "Keputusan X-Ray" },
          type: "textarea",
          placeholder: { en: "X-Ray result", ms: "Keputusan X-Ray" },
          readOnly: true,
          showIf: { field: "xray_status", equals: "done" },
        },
        {
          name: "lab_status",
          label: { en: "Lab Result", ms: "Keputusan Makmal" },
          type: "radio",
          readOnly: true,
          options: [
            { value: "non_indicator", label: { en: "Non Indicator", ms: "Tiada Petunjuk" } },
            { value: "done", label: { en: "Done", ms: "Selesai" } },
          ],
        },
        {
          name: "lab_result",
          label: { en: "Lab Result", ms: "KEPUTUSAN MAKMAL" },
          type: "textarea",
          placeholder: { en: "Lab result", ms: "Keputusan makmal" },
          readOnly: true,
          showIf: { field: "lab_status", equals: "done" },
        },
        {
          type: "subheading",
          label: { en: "Diagnosis & Status", ms: "Diagnosis & Status" },
        },
        {
          name: "diagnosis",
          label: { en: "Diagnosis", ms: "Diagnosis" },
          type: "input",
          readOnly: true,
        },
        {
          name: "dirawat_oleh_doktor",
          label: { en: "Treated by Doctor", ms: "Dirawat Oleh Doktor" },
          type: "input",
          readOnly: true,
        },
        {
          name: "doctor_plan",
          label: { en: "Plan / Management", ms: "Pelan / Pengurusan" },
          type: "textarea",
          readOnly: true,
        },
        {
          name: "others",
          label: { en: "Others", ms: "Lain-Lain" },
          type: "textarea",
          readOnly: true,
        },
      ],
    },
  ],
};

/**
 * Doctor Clinical Notes — PatientCard (same as initial assessment) + clinical entry fields.
 */
export default function DoctorClinicalNotes({ patient, onBack, onSubmit, onUpdatePatient }) {
  const [language, setLanguage] = useState("en");
  const storageKey = patient?.id ? `doctor_clinical_notes_draft_${patient.id}` : null;
  const [draft, setDraft] = useState({});

  const [patientHistory, setPatientHistory] = useState({
    past_medical_history: patient?.medical_history || "",
    past_family_history: patient?.family_medical_history || "",
    alerts_and_allergies: patient?.alerts_and_allergies_history || "",
  });

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
      if (saved.values) setDraft(saved.values);
      if (saved.patientHistory) setPatientHistory(saved.patientHistory);
    } catch {
      /* ignore */
    }
  }, [storageKey]);

  const formValues = useMemo(
    () => buildFormValuesFromPatient(patient, draft),
    [patient, draft]
  );

  const persist = (nextDraft, nextHistory = patientHistory) => {
    if (!storageKey) return;
    localStorage.setItem(
      storageKey,
      JSON.stringify({ values: nextDraft, patientHistory: nextHistory })
    );
  };

  const handleChange = (name, value) => {
    setDraft((prev) => {
      const next = { ...prev, [name]: value };
      persist(next);
      return next;
    });
  };

  const handleAction = (type) => {
    if (type === "toggle-language") setLanguage((l) => (l === "en" ? "ms" : "en"));
    if (type === "back") onBack?.();
    if (type === "save") {
      persist(draft, patientHistory);
      alert("Clinical notes saved");
    }
  };

  const handleSubmit = () => {
    persist(draft, patientHistory);
    onSubmit?.({ values: formValues, patientHistory });
    alert("Clinical notes submitted");
    onBack?.();
  };

  return (
    <div style={mainContent}>
      <PatientCard
        patient={patient}
        patientHistory={patientHistory}
        setPatientHistory={setPatientHistory}
        showDoctorsReport={false}
      />

      <CommonFormBuilder
        schema={CLINICAL_NOTES_SCHEMA}
        values={formValues}
        onChange={handleChange}
        onAction={handleAction}
        language={language}
      >
        <div style={{ textAlign: "right", marginTop: -40, marginBottom: 20 }}>
          <span
            style={{ color: "#0050ff", fontSize: 13, cursor: "pointer", fontWeight: 600 }}
            onClick={() => typeof window?.openVitals === "function" && window.openVitals(patient)}
          >
            Know more →
          </span>
        </div>
      </CommonFormBuilder>

      <div style={{ marginTop: 16 }}>
        <button type="button" onClick={handleSubmit} style={submitBtn}>
          Submit
        </button>
      </div>
    </div>
  );
}

const submitBtn = {
  padding: "10px 20px",
  borderRadius: 8,
  border: "none",
  background: "#2563eb",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
};
