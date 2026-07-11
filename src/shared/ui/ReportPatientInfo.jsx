import { useEffect, useMemo, useState } from "react";
import { fetchPatientDetails } from "../api/patientsList";
import { fetchIcdCodesPage } from "../api/icdCodes";
import { localDateTimeString } from "../utils/dateFormatter";

function displayValue(value) {
  if (value === null || value === undefined || value === "") return "—";
  return String(value);
}

function getIcNumber(patient) {
  return (
    patient.ic ||
    patient.ic_number ||
    patient.nric ||
    patient.identification_number ||
    null
  );
}

function mergeLocalPatientExtras(patient) {
  if (!patient?.id) return patient;

  try {
    const stored = localStorage.getItem("patient_" + patient.id);
    if (!stored) return patient;
    const parsed = JSON.parse(stored);
    if (!parsed || typeof parsed !== "object") return patient;
    return { ...patient, ...parsed };
  } catch {
    return patient;
  }
}

async function resolveIcdLabelFromCode(code) {
  if (!code) return null;
  if (String(code).includes(" - ")) return code;

  try {
    const { items } = await fetchIcdCodesPage({ search: code, limit: 20 });
    const match = items.find(
      (item) => item.code === code || item.value === code,
    );
    return match?.label || code;
  } catch {
    return code;
  }
}

function buildReportFields(patient, resolvedPrimaryIcdLabel) {
  const livingEnv =
    patient.living_environment === "Other" && patient.living_environment_other
      ? patient.living_environment_other
      : patient.living_environment;

  const education =
    patient.education_background === "Other" && patient.education_background_other
      ? patient.education_background_other
      : patient.education_background;

  return [
    { label: "Date of birth", value: localDateTimeString(patient.dob || patient.date_of_birth) },
    {
      label: "Age / gender",
      value: [patient.age ? `${patient.age} yrs` : null, patient.sex || patient.gender]
        .filter(Boolean)
        .join(" · ") || null,
    },
    {
      label: "Referral diagnosis",
      value: patient.referral_diagnosis || patient.diagnosis_history || patient.icd,
    },
    {
      label: "Primary diagnosis",
      value:
        patient.doctor_primary_icd_label ||
        resolvedPrimaryIcdLabel ||
        patient.doctor_primary_icd,
    },
    { label: "Marital status", value: patient.marital_status },
    {
      label: "Secondary diagnosis",
      value: patient.medical_history || patient.secondary_diagnosis,
    },
    { label: "Living environment", value: livingEnv },
    { label: "Main caregiver", value: patient.main_caregiver },
    { label: "Next of kin", value: patient.next_of_kin },
    { label: "Employment status", value: patient.employment_status },
    { label: "MC date", value: patient.mc_date },
    { label: "Scheme", value: patient.scheme },
    { label: "GL duration", value: patient.gl_date },
    { label: "Dominant side", value: patient.dominant_side },
    { label: "Language preference", value: patient.language_preference },
    { label: "Education level", value: education },
    { label: "Driving status", value: patient.driving_status },
  ];
}

export default function ReportPatientInfo({ patient }) {
  const [details, setDetails] = useState(null);
  const [resolvedPrimaryIcdLabel, setResolvedPrimaryIcdLabel] = useState(null);

  useEffect(() => {
    if (!patient?.id && !patient?.patient_id) {
      setDetails(null);
      return;
    }

    let cancelled = false;
    fetchPatientDetails(patient)
      .then((data) => {
        if (!cancelled) setDetails(data);
      })
      .catch(() => {
        if (!cancelled) setDetails(null);
      });

    return () => {
      cancelled = true;
    };
  }, [patient]);

  const displayPatient = useMemo(() => {
    if (!patient) return null;
    return mergeLocalPatientExtras({ ...patient, ...(details || {}) });
  }, [patient, details]);

  useEffect(() => {
    const storedLabel = displayPatient?.doctor_primary_icd_label;
    const code = displayPatient?.doctor_primary_icd;

    if (storedLabel) {
      setResolvedPrimaryIcdLabel(storedLabel);
      return;
    }

    if (!code) {
      setResolvedPrimaryIcdLabel(null);
      return;
    }

    let cancelled = false;
    resolveIcdLabelFromCode(code).then((label) => {
      if (!cancelled) setResolvedPrimaryIcdLabel(label);
    });

    return () => {
      cancelled = true;
    };
  }, [displayPatient?.doctor_primary_icd, displayPatient?.doctor_primary_icd_label]);

  const fields = useMemo(
    () =>
      displayPatient
        ? buildReportFields(displayPatient, resolvedPrimaryIcdLabel)
        : [],
    [displayPatient, resolvedPrimaryIcdLabel],
  );

  if (!displayPatient) return null;

  const initials = (displayPatient.name || displayPatient.email || "?")
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div style={S.wrap}>
      <div style={S.header}>
        <div style={S.avatar}>{initials}</div>
        <div>
          <div style={S.name}>{displayValue(displayPatient.name)}</div>
          <div style={S.icRow}>
            <span style={S.icLabel}>IC</span>
            <span>{displayValue(getIcNumber(displayPatient))}</span>
          </div>
        </div>
      </div>

      <div style={S.grid}>
        {fields.map((field) => (
          <div key={field.label} style={S.cell}>
            <div style={S.label}>{field.label}</div>
            <div style={S.value}>{displayValue(field.value)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const S = {
  wrap: {
    border: "1px solid #e2e8f0",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    background: "#f8fafc",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
    paddingBottom: 12,
    borderBottom: "1px solid #e2e8f0",
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    background: "#dbeafe",
    color: "#1d4ed8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: 14,
    flexShrink: 0,
  },
  name: {
    fontSize: 16,
    fontWeight: 700,
    color: "#0f172a",
  },
  icRow: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 2,
    display: "flex",
    gap: 6,
    alignItems: "center",
  },
  icLabel: {
    fontWeight: 700,
    letterSpacing: "0.08em",
    fontSize: 10,
    color: "#94a3b8",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "14px 20px",
  },
  cell: {
    minWidth: 0,
  },
  label: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#94a3b8",
    marginBottom: 4,
  },
  value: {
    fontSize: 13,
    color: "#1e293b",
    lineHeight: 1.4,
    wordBreak: "break-word",
  },
};
