import api from "../../shared/api/apiClient";
import React, { useState, useMemo, useEffect } from "react";
import EmptyState from "../../shared/ui/EmptyState";
import { ShimmerRow } from "../../shared/ui/Shimmer";
import { API_URL } from "../../platform/config/api.config";
import ProcedureAssessment from "../Doctors/components/ProcedureAssessment";
import MedicationAssessment from "../Doctors/components/MedicationAssessment";
import { DoctorsInitialAssessmentForm } from "../Doctors/components/DoctorsInitialAssessment";
import {
  ClinicalNotesAssessment,
  HomeVisitReportAssessment,
  WorkSiteAssessmentForm,
  WardAroundAssessment,
} from "../Doctors/components/DoctorSupplementaryAssessments";
import ShiftAssessment from "../Nursing/components/ShiftAssessment";
import NursingReAssessment from "../Nursing/components/Reassessment";
import RehabilitationDischargeChecklist from "../Nursing/components/Discharge";
import GroupIntervention from "../Nursing/components/GroupIntervention";
import Intervention from "../Nursing/components/Intervention";
import Procedures from "../Nursing/components/Procedures";
import RAPPatientAssessmentsList from "../../components/RAPPatientAssessmentsList";
import { isPatientPending } from "../../shared/utils/patientFilters";
import MedicalAssistantPatientDetails from "../MedicalAssistant/components/PatientDetails";

/* ── Assessment type cards ─────────────────────────────── */

/** Departments where the follow-up visit card reads "Re-assessment" (matches sidebar → GenericDepartmentDashboard `department` prop). */
const DEPTS_FOLLOWUP_AS_REASSESSMENT = new Set([
  "Physiotherapy",
  "Integrated Rehab",
  "Occupational Therapy",
]);

// Default cards shown to all departments
const ASSESSMENT_CARDS = [
  { id: "initial",   title: "Initial Assessment",    desc: "Comprehensive assessment for new patient visit",   icon: "📋", accent: "#1D4ED8", tag: "New Patient",    tagBg: "#dbeafe", tagColor: "#1d4ed8" },
  { id: "followup",  title: "Follow-up Visit",        desc: "Review progress and adjust treatment plan",        icon: "🔄", accent: "#059669", tag: "Returning",      tagBg: "#d1fae5", tagColor: "#065f46" },
  { id: "progress",  title: "Progress Intervention",  desc: "Document interventions and track outcomes",        icon: "📈", accent: "#7C3AED", tag: "Ongoing Care",   tagBg: "#ede9fe", tagColor: "#5b21b6" },
  { id: "group",     title: "Group Intervention",     desc: "Record group session and multi-patient notes",     icon: "👥", accent: "#DC2626", tag: "Group Session",  tagBg: "#fee2e2", tagColor: "#991b1b" },
  { id: "procedure", title: "Procedure Assessment",   desc: "BTI, FEES, rTMS, tDCS, NESA, EST and more",       icon: "🩺", accent: "#0891B2", tag: "Procedure",      tagBg: "#cffafe", tagColor: "#0e7490", depts: ["Doctor"] },
];

const DOCTOR_CARDS = [
  { id: "initial",         title: "Initial Assessment",    desc: "Comprehensive assessment for new patient visit",   icon: "📋", accent: "#1D4ED8", tag: "New Patient",    tagBg: "#dbeafe", tagColor: "#1d4ed8" },
  { id: "ward_round",      title: "Ward-Around",           desc: "Document ward round findings and patient progress", icon: "🚶", accent: "#7C3AED", tag: "Ward Round",     tagBg: "#ede9fe", tagColor: "#5b21b6" },
  { id: "followup",        title: "Re-assessment",         desc: "Reassess progress and update the treatment plan",  icon: "🔄", accent: "#059669", tag: "Returning",      tagBg: "#d1fae5", tagColor: "#065f46" },
  { id: "procedure",       title: "Procedures",            desc: "BTI, FEES, rTMS, tDCS, NESA, EST and more",        icon: "🩺", accent: "#0891B2", tag: "Procedures",     tagBg: "#cffafe", tagColor: "#0e7490" },
  { id: "clinical_notes",  title: "Clinical Notes",        desc: "Document clinical observations and notes",         icon: "📝", accent: "#6366F1", tag: "Notes",          tagBg: "#e0e7ff", tagColor: "#4338ca" },
  { id: "medication",      title: "Medication",            desc: "Record and manage patient medications",            icon: "💊", accent: "#DB2777", tag: "Medication",     tagBg: "#fce7f3", tagColor: "#9d174d" },
  { id: "home_visit",      title: "Home Visit Report",     desc: "Document home visit findings and recommendations", icon: "🏠", accent: "#D97706", tag: "Home Visit",     tagBg: "#ffedd5", tagColor: "#9a3412" },
  { id: "work_site",       title: "Work Site Assessment",  desc: "Assess workplace environment and needs",           icon: "🏗️", accent: "#0D9488", tag: "Work Site",      tagBg: "#ccfbf1", tagColor: "#0f766e" },
];

// Nursing-specific cards (replace the default set entirely)
const NURSING_CARDS = [
  { id: "initial",   title: "Initial Assessment",    desc: "Comprehensive assessment for new patient visit",   icon: "📋", accent: "#1D4ED8", tag: "1",              tagBg: "#dbeafe", tagColor: "#1d4ed8" },
  { id: "nursingprocedure", title: "Procedures",             desc: "Document nursing procedures performed",            icon: "🩺", accent: "#0891B2", tag: "2",              tagBg: "#cffafe", tagColor: "#0e7490" },
  { id: "reassess",  title: "Re-Assessment",          desc: "Reassess patient condition and progress",          icon: "🔁", accent: "#059669", tag: "3",              tagBg: "#d1fae5", tagColor: "#065f46" },
  { id: "interv",    title: "Intervention",           desc: "Record nursing interventions and care",            icon: "💉", accent: "#7C3AED", tag: "4",              tagBg: "#ede9fe", tagColor: "#5b21b6" },
  { id: "shift",     title: "Shift Assessment",       desc: "Shift handover and patient status update",         icon: "🕐", accent: "#F59E0B", tag: "5",              tagBg: "#fef3c7", tagColor: "#92400e" },
  { id: "group",     title: "Group Intervention",     desc: "Record group session and multi-patient notes",     icon: "👥", accent: "#DC2626", tag: "6",              tagBg: "#fee2e2", tagColor: "#991b1b" },
  { id: "discharge", title: "Discharge",              desc: "Complete discharge summary and planning",          icon: "🏠", accent: "#6B7280", tag: "7",              tagBg: "#f3f4f6", tagColor: "#374151" },
  { id: "urgent",    title: "Urgent Care",           desc: "Clinical entry, fleet, lab, X-ray and day care",   icon: "🚨", accent: "#DC2626", tag: "Urgent",         tagBg: "#fee2e2", tagColor: "#991b1b" },
  { id: "neuro",     title: "Neuro & Cardio",        desc: "EEG, PSG, NCS/EMG, evoke potential, EST and Holter", icon: "🧠", accent: "#6366F1", tag: "Neuro / Cardio", tagBg: "#e0e7ff", tagColor: "#4338ca" },
];

// Returns the correct card set for a given department
function getCardsForDept(department) {
  if (department === "Nursing") return NURSING_CARDS;
  if (department === "Doctor") return DOCTOR_CARDS;
  const cards = ASSESSMENT_CARDS.filter(c => !c.depts || c.depts.includes(department));
  if (!DEPTS_FOLLOWUP_AS_REASSESSMENT.has(department)) return cards;
  return cards.map(c =>
    c.id === "followup"
      ? {
          ...c,
          title: "Re-assessment",
          desc: "Reassess progress and update the treatment plan",
        }
      : c
  );
}

function assessmentViewTitle(assessmentView, department) {
  if (assessmentView === "initial") return "Initial Assessment";
  if (assessmentView === "ward_round") return "Ward-Around";
  if (assessmentView === "followup") {
    return department === "Doctor" || DEPTS_FOLLOWUP_AS_REASSESSMENT.has(department)
      ? "Re-assessment"
      : "Follow-up Visit";
  }
  if (assessmentView === "procedure") return department === "Doctor" ? "Procedures" : "Procedure Assessment";
  if (assessmentView === "clinical_notes") return "Clinical Notes";
  if (assessmentView === "medication") return "Medication";
  if (assessmentView === "home_visit") return "Home Visit Report";
  if (assessmentView === "work_site") return "Work Site Assessment";
  if (assessmentView === "urgent") return "Urgent Care";
  if (assessmentView === "neuro") return "Neuro & Cardio";
  return "Intervention";
}

/* ── Status palette ────────────────────────────────────── */
const STATUS = {
  approved: { bg: "#ECFDF5", color: "#166534", border: "#A7F3D0", dot: "#22C55E" },
  pending:  { bg: "#FFFBEB", color: "#92400E", border: "#FDE68A", dot: "#F59E0B" },
  denied:   { bg: "#FEF2F2", color: "#991B1B", border: "#FECACA", dot: "#EF4444" },
  new:      { bg: "#ECFDF5", color: "#166534", border: "#A7F3D0", dot: "#22C55E" },
  ongoing:  { bg: "#EFF6FF", color: "#1D4ED8", border: "#BFDBFE", dot: "#3B82F6" },
  done:     { bg: "#F0FDF4", color: "#15803D", border: "#BBF7D0", dot: "#22C55E" },
  inactive: { bg: "#F8FAFC", color: "#64748B", border: "#E2E8F0", dot: "#94A3B8" },
};

function StatusPill({ status }) {
  const n = (status || "New").trim().toLowerCase();
  const s = STATUS[n] || STATUS.inactive;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700, background: s.bg, color: s.color, border: `1px solid ${s.border}` }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: s.dot }} />
      {n === "new" ? "New" : n === "approved" ? "Approved" : n === "pending" ? "Pending" : status}
    </span>
  );
}

function getAssessmentCount(patient, mappedCount) {
  if (Number.isFinite(mappedCount)) return mappedCount;
  const raw =
    patient?.assessments_count ??
    patient?.assessment_count ??
    patient?.total_assessments ??
    patient?.form_response_count ??
    patient?.responses_count;
  const count = Number(raw);
  return Number.isFinite(count) ? count : null;
}

function AssessmentCard({ card, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ background: "#fff", borderRadius: 14, border: "1px solid #e9ecef", borderTop: `3px solid ${card.accent}`, padding: "22px 22px 18px", cursor: "pointer", transition: "box-shadow .2s, transform .2s", display: "flex", flexDirection: "column", minHeight: 190, boxShadow: hovered ? `0 12px 32px ${card.accent}22` : "0 2px 8px rgba(0,0,0,0.06)", transform: hovered ? "translateY(-3px)" : "none" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <div style={{ width: 44, height: 44, borderRadius: 10, background: card.accent + "12", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{card.icon}</div>
        <span style={{ background: card.tagBg, color: card.tagColor, borderRadius: 999, padding: "3px 10px", fontSize: 11, fontWeight: 700 }}>{card.tag}</span>
      </div>
      <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{card.title}</div>
      <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, flex: 1 }}>{card.desc}</div>
      <div style={{ marginTop: 18, paddingTop: 14, borderTop: "1px solid #f3f4f6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: card.accent }}>Open Assessment</span>
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: card.accent, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 16, fontWeight: 700 }}>›</div>
      </div>
    </div>
  );
}

const AVATAR_COLORS = ["#DBEAFE", "#D1FAE5", "#FEF3C7", "#FCE7F3", "#EDE9FE", "#FFEDD5"];

function PatientRow({ patient: p, idx, onStart, listOnly, onPatientClick, selectable, actionLabel, onActionClick, showAssessmentCount = false, assessmentCount }) {
  const [hovered, setHovered] = useState(false);
  const displayName = p.name || p.patient_name || p.email || "—";
  const initial = (displayName[0] || "P").toUpperCase();
  const deptLabel = Array.isArray(p.departments)
    ? p.departments.join(", ")
    : p.departments || "—";

  const handleRowClick = () => {
    if (selectable && onPatientClick) onPatientClick(p);
  };

  return (
    <div
      role={selectable ? "button" : undefined}
      tabIndex={selectable ? 0 : undefined}
      onClick={selectable ? handleRowClick : undefined}
      onKeyDown={
        selectable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleRowClick();
              }
            }
          : undefined
      }
      style={{
        display: "grid",
        gridTemplateColumns: listOnly
          ? "2.5fr 1.8fr 1.2fr 2fr"
          : showAssessmentCount
          ? "2.2fr 1.6fr 1fr 1.1fr 1fr"
          : "2.5fr 1.8fr 1.2fr 1fr",
        padding: "14px 20px",
        alignItems: "center",
        borderBottom: "1px solid #F1F5F9",
        background: hovered ? "#F8FAFF" : idx % 2 === 0 ? "#fff" : "#FAFBFC",
        transition: "background .15s",
        cursor: selectable ? "pointer" : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: AVATAR_COLORS[initial.charCodeAt(0) % AVATAR_COLORS.length], display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#1E40AF", flexShrink: 0 }}>{initial}</div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#111827" }}>{displayName}</div>
          {(p.age || p.gender) && <div style={{ fontSize: 12, color: "#6B7280", marginTop: 2 }}>{[p.age && `${p.age} yrs`, p.gender].filter(Boolean).join(" · ")}</div>}
        </div>
      </div>
      <div style={{ fontSize: 13, color: "#6B7280", fontFamily: "monospace" }}>{p.mrn || p.icd || p.patient_id || "—"}</div>
      {!listOnly && showAssessmentCount && (
        <div style={{ fontSize: 13, color: "#475569", fontWeight: 600 }}>
          {getAssessmentCount(p, assessmentCount) ?? "—"}
        </div>
      )}
      <div><StatusPill status={p.status} /></div>
      {listOnly ? (
        <div style={{ fontSize: 13, color: "#475569", lineHeight: 1.4 }}>
          {selectable ? (
            <span style={{ color: "#2563EB", fontWeight: 600 }}>View assessments →</span>
          ) : (
            deptLabel
          )}
        </div>
      ) : (
        <div style={{ textAlign: "right" }}>
          <button type="button" onClick={(e) => { e.stopPropagation(); onActionClick ? onActionClick(p) : onStart?.(); }}
            onMouseEnter={e => { e.currentTarget.style.background = "#0058FF"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#0058FF"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#0058FF"; e.currentTarget.style.borderColor = "#BFDBFE"; }}
            style={{ background: "#fff", border: "1px solid #2563EB", color: "#2563EB", borderRadius: 999, padding: "8px 18px", fontSize: 13, fontWeight: 700, cursor: "pointer", transition: "all .18s" }}>
            {actionLabel || "Begin assessment"}
          </button>
        </div>
      )}
    </div>
  );
}

/**
 * Common patients page for all departments.
 *
 * Props:
 *   patients        - array of all patients
 *   department      - string department name (used to filter)
 *   onBack          - fn to go back to dashboard
 *   AssessmentComponent - the department's assessment component (receives { patient, mode, onBack })
 *   loading         - optional bool
 */
function normalizePatientList(data) {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.results)) return data.results;
  if (Array.isArray(data?.data)) return data.data;
  if (Array.isArray(data?.data?.results)) return data.data.results;
  return [];
}

/** Same departments as sidebar — used to load full registry for Admin/Staff */
function patientBelongsToDepartment(p, department) {
  if (!Array.isArray(p.departments)) return true;
  if (department === "Nursing") {
    return p.departments.includes("Nursing") || p.departments.includes("Medical Assistant");
  }
  return p.departments.includes(department);
}

async function fetchAllPatientsRegistry(userRole) {
  const isScopedUser = ["Admin", "Staff"].includes(userRole);

  if (!isScopedUser) {
    const res = await api.get(API_URL.PATIENT);
    return normalizePatientList(res.data);
  }

  const allClinicalDepartments = [
    "Nursing",
    "Doctor",
    "Physiotherapy",
    "Integrated Rehab",
    "Work & Vocational Rehab",
    "Occupational Therapy",
    "Optometry",
    "Prosthetics & Orthotics",
    "Audiology",
    "Dietetics",
    "Speech & Language Therapy",
    "Psychology",
  ];

  const batches = await Promise.all(
    allClinicalDepartments.map((dept) =>
      api
        .get(`${API_URL.PATIENT}?department=${encodeURIComponent(dept)}`)
        .then((res) => normalizePatientList(res.data))
        .catch(() => [])
    )
  );

  const byKey = new Map();
  for (const p of batches.flat()) {
    const key = p?.id ?? p?.patient_id ?? p?.mrn;
    if (key != null) byKey.set(String(key), p);
    else if (p) byKey.set(`${p.name || p.patient_name}-${p.email}`, p);
  }
  return Array.from(byKey.values());
}

export default function DepartmentPatients({
  department,
  onBack,
  AssessmentComponent,
  loading: loadingProp = false,
  showAllPatients = false,
  hideBack = false,
  listOnly = false,
  title,
  patientsFromApp,
  actionLabel,    // optional: overrides "Begin assessment" button text
  onRowAction,    // optional: overrides button click — receives the patient object
  updatePatientInMainList,
  showAssessmentCount = false,
  requireAssessments = false,
  patientStatusFilter = null, // optional: "pending"
}) {
  const userRole = localStorage.getItem("userRole") || "";
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [assessmentView, setAssessmentView] = useState(null);
  const [search, setSearch] = useState("");
  const [patients, setPatients] = useState(() =>
    showAllPatients ? normalizePatientList(patientsFromApp) : []
  );
  const [fetchLoading, setFetchLoading] = useState(false);
  const [assessmentCounts, setAssessmentCounts] = useState({});
  const [assessmentCountsLoading, setAssessmentCountsLoading] = useState(false);
  const needsAssessmentCounts = showAssessmentCount || requireAssessments;
  const loading = loadingProp || fetchLoading || (needsAssessmentCounts && assessmentCountsLoading);

  /* RAP / all-patients: no department filter — entire registry */
  const deptPatients = useMemo(() => {
    let list = showAllPatients
      ? patients
      : patients.filter(
          (p) => !department || patientBelongsToDepartment(p, department)
        );
    if (patientStatusFilter === "pending") {
      list = list.filter(isPatientPending);
    }
    return list;
  }, [patients, department, showAllPatients, patientStatusFilter]);

  const departmentLabel = department === "Nursing" ? "Nursing & MA" : department;
  const pageTitle = title || (showAllPatients ? "RAP" : `${departmentLabel} Patients`);
  const pageSubtitle = showAllPatients
    ? "All patients across every department"
    : `Patient queue for ${departmentLabel}`;

  React.useEffect(() => {
    if (!showAllPatients) return;
    const fromApp = normalizePatientList(patientsFromApp);
    if (fromApp.length > 0) setPatients(fromApp);
  }, [showAllPatients, patientsFromApp]);

  /* Fetch patients */
  React.useEffect(() => {
    let cancelled = false;

    const fetchPatients = async () => {
      setFetchLoading(true);
      try {
        if (patientStatusFilter === "pending") {
          const res = await api.get(`${API_URL.PATIENT_ALL}?status=PENDING`);
          if (!cancelled) setPatients(normalizePatientList(res.data));
          return;
        }
        if (showAllPatients) {
          const list = await fetchAllPatientsRegistry(userRole);
          if (cancelled) return;
          const fallback = normalizePatientList(patientsFromApp);
          setPatients(list.length > 0 ? list : fallback);
          return;
        }
        const url = ["Admin", "Staff"].includes(userRole)
          ? API_URL.PATIENT + `?department=${encodeURIComponent(department)}`
          : API_URL.PATIENT;
        const res = await api.get(url);
        if (!cancelled) setPatients(normalizePatientList(res.data));
      } catch (e) {
        if (!cancelled) {
          setPatients(
            showAllPatients ? normalizePatientList(patientsFromApp) : []
          );
        }
      } finally {
        if (!cancelled) setFetchLoading(false);
      }
    };

    fetchPatients();
    return () => {
      cancelled = true;
    };
  }, [department, showAllPatients, userRole, patientsFromApp, patientStatusFilter]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return !q ? deptPatients : deptPatients.filter(p =>
      (p.name || p.patient_name || "").toLowerCase().includes(q) ||
      (p.email || "").toLowerCase().includes(q) ||
      (p.mrn || "").toLowerCase().includes(q) ||
      String(p.patient_id || "").toLowerCase().includes(q)
    );
  }, [deptPatients, search]);

  const filteredWithAssessments = useMemo(() => {
    if (!needsAssessmentCounts || listOnly) return filtered;
    return filtered.filter((p) => {
      const id = p?.id || p?.patient_id || p?.mrn;
      const count = getAssessmentCount(p, id ? assessmentCounts[id] : undefined);
      return Number.isFinite(count) && count > 0;
    });
  }, [filtered, needsAssessmentCounts, listOnly, assessmentCounts]);

  useEffect(() => {
    if (!needsAssessmentCounts || listOnly) return;
    let cancelled = false;
    const targets = deptPatients
      .map((p) => p?.id || p?.patient_id || p?.mrn)
      .filter(Boolean)
      .filter((id) => !Number.isFinite(assessmentCounts[id]));
    if (targets.length === 0) {
      setAssessmentCountsLoading(false);
      return;
    }

    const fetchCounts = async () => {
      setAssessmentCountsLoading(true);
      const results = await Promise.all(
        targets.map(async (id) => {
          try {
            const res = await api.get(API_URL.DYNAMIC_FORM_RESPONSE(id));
            const raw = res.data;
            const list = Array.isArray(raw)
              ? raw
              : Array.isArray(raw?.results)
              ? raw.results
              : Array.isArray(raw?.data)
              ? raw.data
              : Array.isArray(raw?.data?.results)
              ? raw.data.results
              : [];
            return [id, list.length];
          } catch {
            return [id, 0];
          }
        })
      );
      if (cancelled) return;
      setAssessmentCounts((prev) => {
        const next = { ...prev };
        results.forEach(([id, count]) => {
          next[id] = count;
        });
        return next;
      });
      setAssessmentCountsLoading(false);
    };

    fetchCounts();
    return () => {
      cancelled = true;
    };
  }, [needsAssessmentCounts, listOnly, deptPatients, assessmentCounts]);

  const handleBack = () => { setAssessmentView(null); setSelectedPatient(null); };
  const handleBackToCards = () => setAssessmentView(null);
  const rapPatientPicker = showAllPatients && listOnly;

  /* ── RAP: patient assessments from API ── */
  if (rapPatientPicker && selectedPatient) {
    return (
      <RAPPatientAssessmentsList
        patient={selectedPatient}
        onBack={() => setSelectedPatient(null)}
      />
    );
  }

  const assessmentBackBar = (title) => (
    <div style={{ padding: "12px 20px", borderBottom: "1px solid #e5e7eb", background: "#fff" }}>
      <button
        type="button"
        onClick={handleBackToCards}
        style={{
          padding: "7px 16px",
          borderRadius: 8,
          border: "1px solid #d1d5db",
          background: "#fff",
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        ← Back to {title || "assessments"}
      </button>
    </div>
  );

  /* ── Assessment view ── */
  if (!listOnly && selectedPatient && assessmentView) {
    // Procedures — Doctor department
    if (assessmentView === "procedure") {
      return (
        <ProcedureAssessment
          patient={selectedPatient}
          onBack={handleBackToCards}
          onSubmit={handleBackToCards}
        />
      );
    }
    if (department === "Doctor" && assessmentView === "ward_round") {
      return (
        <WardAroundAssessment
          patient={selectedPatient}
          onBack={handleBackToCards}
          onSubmit={handleBackToCards}
        />
      );
    }
    if (department === "Doctor" && assessmentView === "followup") {
      return (
        <div>
          {assessmentBackBar("assessments")}
          <DoctorsInitialAssessmentForm
            patient={selectedPatient}
            onUpdatePatient={updatePatientInMainList}
          />
        </div>
      );
    }
    if (department === "Doctor" && assessmentView === "medication") {
      return (
        <div>
          {assessmentBackBar("Medication")}
          <MedicationAssessment
            patient={selectedPatient}
            onBack={handleBackToCards}
            onSubmit={handleBackToCards}
          />
        </div>
      );
    }
    if (department === "Doctor" && assessmentView === "clinical_notes") {
      return (
        <ClinicalNotesAssessment
          patient={selectedPatient}
          onBack={handleBackToCards}
          onSubmit={handleBackToCards}
          onUpdatePatient={updatePatientInMainList}
        />
      );
    }
    if (department === "Doctor" && assessmentView === "home_visit") {
      return (
        <HomeVisitReportAssessment
          patient={selectedPatient}
          onBack={handleBackToCards}
          onSubmit={handleBackToCards}
        />
      );
    }
    if (department === "Doctor" && assessmentView === "work_site") {
      return (
        <WorkSiteAssessmentForm
          patient={selectedPatient}
          onBack={handleBackToCards}
          onSubmit={handleBackToCards}
        />
      );
    }
    // Shift Assessment — Nursing department
    if (assessmentView === "shift") {
      return (
        <ShiftAssessment
          patient={selectedPatient}
          onBack={handleBackToCards}
          onSubmit={handleBackToCards}
        />
      );
    }
    // RE - Assessment — Nursing department
    if (assessmentView === "reassess") {
      return (
        <NursingReAssessment
          patient={selectedPatient}
          onBack={handleBackToCards}
          onSubmit={handleBackToCards}
        />
      );
    }   
    // Discharge — Nursing department
    if (assessmentView === "discharge") {
      return (
        <RehabilitationDischargeChecklist
          patient={selectedPatient}
          onBack={handleBackToCards}
          onSubmit={handleBackToCards}
        />
      );
    }
    // Intervention — Nursing department
    if (assessmentView === "interv") {
      return (
        <Intervention
          patient={selectedPatient}
          onBack={handleBackToCards}
          onSubmit={handleBackToCards}
        />
      );
    }     
    // Group intervention — Nursing department
    if (assessmentView === "group") {
      return (
        <GroupIntervention
          patient={selectedPatient}
          onBack={handleBackToCards}
          onSubmit={handleBackToCards}
        />
      );
    }
    // Group intervention — Nursing department
    if (assessmentView === "nursingprocedure") {
      return (
        <Procedures
          patient={selectedPatient}
          onBack={handleBackToCards}
          onSubmit={handleBackToCards}
        />
      );
    }
    if (department === "Nursing" && (assessmentView === "urgent" || assessmentView === "neuro")) {
      return (
        <MedicalAssistantPatientDetails
          patient={selectedPatient}
          mode={assessmentView}
          onBack={handleBackToCards}
        />
      );
    }
    if (AssessmentComponent) {
      return (
        <AssessmentComponent
          patient={selectedPatient}
          mode={assessmentView}
          onBack={handleBackToCards}
          onSubmit={handleBackToCards}
        />
      );
    }
    return (
      <div style={{ padding: 40, textAlign: "center", color: "#6b7280" }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>🚧</div>
        <div style={{ fontSize: 16, fontWeight: 600, color: "#374151" }}>{assessmentViewTitle(assessmentView, department)} — Coming Soon</div>
        <div style={{ fontSize: 13, marginTop: 6 }}>This module is under development for {department}.</div>
        <button onClick={handleBackToCards} style={{ marginTop: 20, padding: "9px 20px", borderRadius: 8, border: "1px solid #2563eb", background: "#fff", color: "#2563eb", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>← Back</button>
      </div>
    );
  }

  /* ── Assessment type selection ── */
  if (!listOnly && selectedPatient) {
    const initials = ((selectedPatient.name || selectedPatient.email || "P").split(" ").map(w => w[0]).join("").slice(0, 2)).toUpperCase();
    return (
      <div style={{ minHeight: "100%" }}>
        {/* Patient banner */}
        <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "16px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <button onClick={() => setSelectedPatient(null)} className="dash-btn-outline" style={{ padding: "7px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>← Back</button>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: "linear-gradient(135deg,#1d4ed8,#3b82f6)", color: "#fff", fontSize: 15, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{initials}</div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#0f172a" }}>{selectedPatient.name || selectedPatient.email}</div>
              <div style={{ fontSize: 12, color: "#6b7280", marginTop: 3 }}>
                {[selectedPatient.mrn && `MRN: ${selectedPatient.mrn}`, selectedPatient.age && `${selectedPatient.age} yrs`, selectedPatient.gender, selectedPatient.icd && `ICD: ${selectedPatient.icd}`].filter(Boolean).join("  ·  ")}
              </div>
            </div>
          </div>
          <div style={{ fontSize: 13, color: "#6b7280" }}>{department}</div>
        </div>
        {/* Cards */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 28px" }}>
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                department === "Doctor" || department === "Nursing"
                  ? "repeat(3, 1fr)"
                  : "repeat(2, 1fr)",
              gap: 18,
              width: "100%",
              maxWidth: department === "Doctor" || department === "Nursing" ? 1100 : 860,
            }}
          >
            {getCardsForDept(department).map(card => (
              <AssessmentCard key={card.id} card={card} onClick={() => setAssessmentView(card.id)} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── Patient list ── */
  return (
    <div style={{ padding: "28px 28px 32px", minHeight: "100vh", fontFamily: "Inter, Roboto, sans-serif" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {!hideBack && onBack && (
            <button onClick={onBack} className="dash-btn-outline" style={{ padding: "8px 14px", borderRadius: 999, fontSize: 13, fontWeight: 600, cursor: "pointer", boxShadow: "0 8px 20px rgba(15,23,42,0.08)" }}>← Back</button>
          )}
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 800, color: "#0F172A", margin: "0 0 4px 0" }}>{pageTitle}</h1>
            <p style={{ fontSize: 13, color: "#475569", margin: 0 }}>{pageSubtitle}</p>
          </div>
        </div>
        <div style={{ width: "100%", maxWidth: 520, position: "relative", display: "flex", alignItems: "center", background: "#fff", border: "1px solid #D1D5DB", borderRadius: 16, boxShadow: "0 10px 30px rgba(15,23,42,0.08)" }}>
          <svg style={{ position: "absolute", left: 16, pointerEvents: "none" }} width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="8" cy="8" r="6" stroke="#64748B" strokeWidth="1.8"/>
            <path d="M12.5 12.5l3 3" stroke="#64748B" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
          <input style={{ width: "100%", padding: "12px 44px", border: "none", borderRadius: 16, fontSize: 13, fontWeight: 500, color: "#111827", background: "transparent", outline: "none" }}
            placeholder="Search patient name, MRN or ICD" value={search} onChange={e => setSearch(e.target.value)} />
          {search && <button style={{ position: "absolute", right: 10, background: "none", border: "none", cursor: "pointer", color: "#64748B", fontSize: 13 }} onClick={() => setSearch("")}>✕</button>}
        </div>
      </div>

      {/* Table */}
      <div style={{ background: "#fff", borderRadius: 28, border: "1px solid #E5E7EB", overflow: "hidden", boxShadow: "0 24px 80px rgba(15,23,42,0.08)" }}>
        <div style={{ display: "grid", gridTemplateColumns: listOnly ? "2.5fr 1.8fr 1.2fr 2fr" : showAssessmentCount ? "2.2fr 1.6fr 1fr 1.1fr 1fr" : "2.5fr 2fr 1.2fr 1fr", padding: "18px 24px", background: "#F8FAFC", borderBottom: "1px solid #E6E8F0" }}>
          {(listOnly
            ? ["Patient", "MRN / ID", "Status", rapPatientPicker ? "Action" : "Departments"]
            : showAssessmentCount
            ? ["Patient", "MRN / ICD", "Assessments", "Status", "Action"]
            : ["Patient", "MRN / ICD", "Status", "Action"]
          ).map(h => (
            <div key={h} style={{ fontSize: 11, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.18em" }}>{h}</div>
          ))}
        </div>
        {loading ? Array.from({ length: 5 }, (_, i) => <ShimmerRow key={i} />) :
          filteredWithAssessments.length === 0 ? (
            <EmptyState icon="🧑‍⚕️" title={search ? "No patients match your search" : "No patients found"} message={search ? "Try a different name or MRN." : showAllPatients ? "All registered patients from every department will appear here." : `Approved patients assigned to ${department} will appear here. Pending patients are not shown in this list.`} />
          ) : (
            filteredWithAssessments.map((p, idx) => (
              <PatientRow
                key={p.id || p.patient_id || idx}
                patient={p}
                idx={idx}
                listOnly={listOnly}
                selectable={rapPatientPicker}
                onPatientClick={rapPatientPicker ? setSelectedPatient : undefined}
                onStart={listOnly ? undefined : () => setSelectedPatient(p)}
                actionLabel={actionLabel}
                onActionClick={onRowAction}
                showAssessmentCount={showAssessmentCount}
                assessmentCount={assessmentCounts[p.id || p.patient_id || p.mrn]}
              />
            ))
          )
        }
      </div>
      {!loading && filteredWithAssessments.length > 0 && (
        <div style={{ marginTop: 12, fontSize: 12, color: "#94A3B8", textAlign: "right" }}>
          Showing <strong>{filteredWithAssessments.length}</strong> of <strong>{deptPatients.length}</strong> patient{deptPatients.length !== 1 ? "s" : ""}
        </div>
      )}
    </div>
  );
}

