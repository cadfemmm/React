import React, { useState, useEffect, useMemo } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import PatientCard from "../../../shared/cards/PatientCard";
import AudiologySttFloatingMic from "../../Audiology/components/AudiologySttFloatingMic";
import Toast from "../../../shared/ui/Toast";

const mainContent = { padding: 15 };

function hashSeed(str) {
  let h = 0;
  for (let i = 0; i < str.length; i += 1) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h) || 1;
}

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function generateRandomVitals(patientKey) {
  const rand = seededRandom(hashSeed(String(patientKey || "guest")));
  const r = (min, max) => Math.floor(rand() * (max - min + 1)) + min;
  const systolic = r(108, 142);
  const diastolic = r(68, 92);
  return {
    bp: `${systolic}/${diastolic} mmHg`,
    rr: `${r(12, 20)} /min`,
    spo2: `${r(95, 99)}%`,
    hr: `${r(62, 98)} bpm`,
    temp: `${(36 + rand() * 1.4).toFixed(1)}°C`,
    ps: `${r(70, 88)}`,
  };
}

function normalizeYesNo(status) {
  if (status === "done" || status === "yes") return "yes";
  if (status === "non_indicator" || status === "no" || !status) return "no";
  return status;
}

function buildFormValuesFromPatient(patient, draft = {}, generatedVitals = {}) {
  return {
    clinical_note_type: draft.clinical_note_type ?? patient?.clinical_note_type ?? "",
    aduan: draft.aduan ?? patient?.complaint ?? patient?.chief_complaint ?? "",
    bp: generatedVitals.bp ?? draft.bp ?? patient?.vitals?.bp ?? patient?.bp ?? "",
    rr: generatedVitals.rr ?? draft.rr ?? patient?.vitals?.rr ?? patient?.rr ?? "",
    spo2: generatedVitals.spo2 ?? draft.spo2 ?? patient?.vitals?.spo2 ?? patient?.spo2 ?? "",
    hr: generatedVitals.hr ?? draft.hr ?? patient?.vitals?.hr ?? patient?.pulse ?? patient?.hr ?? "",
    temp: generatedVitals.temp ?? draft.temp ?? patient?.vitals?.temp ?? patient?.temp ?? "",
    ps: generatedVitals.ps ?? draft.ps ?? patient?.vitals?.ps ?? patient?.ps ?? "",
    xray_status: normalizeYesNo(draft.xray_status ?? patient?.xray_status),
    xray_upload: draft.xray_upload ?? patient?.xray_upload ?? null,
    lab_status: normalizeYesNo(draft.lab_status ?? patient?.lab_status),
    lab_upload: draft.lab_upload ?? patient?.lab_upload ?? null,
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
          label: { en: "Chief Complaint", ms: "Aduan Utama" },
          type: "textarea",
          placeholder: {
            en: "Enter chief complaint",
            ms: "Masukkan aduan utama",
          },
        },
        {
          type: "accordion",
          name: "vitals_section",
          label: { en: "Vital Signs & Measurements", ms: "Tanda Vital" },
          defaultOpen: false,
          children: [
            {
              type: "row",
              fields: [
                { name: "bp", label: { en: "BP", ms: "BP" }, type: "input", readOnly: true },
                { name: "rr", label: { en: "RR", ms: "RR" }, type: "input", readOnly: true },
                { name: "spo2", label: { en: "SPO2", ms: "SPO2" }, type: "input", readOnly: true },
                { name: "hr", label: { en: "HR", ms: "HR" }, type: "input", readOnly: true },
                { name: "temp", label: { en: "T", ms: "T" }, type: "input", readOnly: true },
                { name: "ps", label: { en: "P/S", ms: "P/S" }, type: "input", readOnly: true },
              ],
            },
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
          options: [
            { value: "yes", label: { en: "Yes", ms: "Ya" } },
            { value: "no", label: { en: "No", ms: "Tidak" } },
          ],
        },
        {
          name: "xray_upload",
          title: { en: "Upload X-Ray Report", ms: "Muat Naik Laporan X-Ray" },
          type: "attach-file",
          accept: "application/pdf,image/*",
          multiple: false,
          showIf: { field: "xray_status", equals: "yes" },
        },
        {
          name: "lab_status",
          label: { en: "Lab Report", ms: "Laporan Makmal" },
          type: "radio",
          options: [
            { value: "yes", label: { en: "Yes", ms: "Ya" } },
            { value: "no", label: { en: "No", ms: "Tidak" } },
          ],
        },
        {
          name: "lab_upload",
          title: { en: "Upload Lab Report", ms: "Muat Naik Laporan Makmal" },
          type: "attach-file",
          accept: "application/pdf,image/*",
          multiple: false,
          showIf: { field: "lab_status", equals: "yes" },
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
  const [toast, setToast] = useState(null);
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

  const patientKey = patient?.id ?? patient?.patient_id ?? patient?.mrn ?? "guest";
  const generatedVitals = useMemo(
    () => generateRandomVitals(patientKey),
    [patientKey]
  );

  const formValues = useMemo(
    () => buildFormValuesFromPatient(patient, draft, generatedVitals),
    [patient, draft, generatedVitals]
  );

  const persist = (nextDraft, nextHistory = patientHistory) => {
    if (!storageKey) return;
    localStorage.setItem(
      storageKey,
      JSON.stringify({ values: nextDraft, patientHistory: nextHistory })
    );
  };

  const handleChange = (name, value) => {
    if (["bp", "rr", "spo2", "hr", "temp", "ps"].includes(name)) return;
    setDraft((prev) => {
      const next = { ...prev, [name]: value };
      if (name === "xray_status" && value === "no") next.xray_upload = null;
      if (name === "lab_status" && value === "no") next.lab_upload = null;
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

      {toast && (
        <Toast
          message={toast.message}
          variant={toast.variant}
          onClose={() => setToast(null)}
        />
      )}
      <AudiologySttFloatingMic
        onToast={setToast}
        historyKey="doctor_clinical_notes_stt_history"
        useTransportControls
      />
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
