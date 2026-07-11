import { useEffect, useMemo, useState } from "react";
import { fetchPatientDetails } from "../api/patientsList";

function displayValue(value) {
  if (value === null || value === undefined || value === "") return "—";
  return String(value);
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

const thStyle = {
  textAlign: "left",
  width: "28%",
  border: "1px solid #111827",
  padding: "8px 10px",
  background: "#fff",
  color: "#111827",
  fontWeight: 700,
  fontSize: 13,
};

const tdStyle = {
  border: "1px solid #111827",
  padding: "8px 10px",
  fontSize: 13,
  color: "#111827",
};

export default function ReportPatientMedicalTable({ patient }) {
  const [details, setDetails] = useState(null);

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

  if (!displayPatient) return null;

  const diagnosis =
    displayPatient.doctor_primary_icd_label ||
    displayPatient.doctor_primary_icd ||
    displayPatient.referral_diagnosis ||
    displayPatient.diagnosis ||
    displayPatient.diagnosis_history ||
    displayPatient.icd;

  const rows = [
    ["Name", displayPatient.name || displayPatient.patient_name],
    [
      "IC number/ Passport number",
      displayPatient.ic_number ||
        displayPatient.ic ||
        displayPatient.nric ||
        displayPatient.identification_number,
    ],
    ["Diagnosis", diagnosis],
    ["Date of admission", displayPatient.admission_date],
    ["Date of discharge", displayPatient.discharge_date],
  ];

  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: 22,
      }}
    >
      <tbody>
        {rows.map(([label, value]) => (
          <tr key={label}>
            <th style={thStyle}>{label}</th>
            <td style={tdStyle}>{displayValue(value)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
