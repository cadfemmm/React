import { useMemo, useState, useEffect } from "react";
import SOAPSession from "./session";
import api from "../../shared/api/apiClient";
import { API_URL } from "../../platform/config/api.config";

// const NAV_ITEMS = [
//   { id: "overview", label: "Overview", icon: "⊞" },
//   { id: "patients", label: "Patients", icon: "👤" },
//   { id: "departments", label: "Departments", icon: "🏢" },
//   { id: "assessments", label: "Assessments", icon: "📋" },
//   { id: "goals", label: "Goals", icon: "🎯" },
//   { id: "therapy", label: "Therapy Sessions", icon: "💊" },
//   { id: "lab", label: "Medication List", icon: "🧪" },
//   { id: "imaging", label: "Imaging", icon: "🔬" },
//   { id: "devices", label: "Equipment List", icon: "📡" },
//   { id: "timeline", label: "Timeline", icon: "📅" },
//   { id: "notes", label: "Notes", icon: "📝" },
//   { id: "documents", label: "Documents", icon: "📄" },
// ];

const TABS = ["Overview", "Therapy Sessions", "Medication List", "Equipment List", "Notes"];
// const TABS = ["Overview","Patients", "Therapy Sessions", "Assessments", "Departments", "Goals", "Medication List", "Imaging", "Equipment List", "Timeline", "Notes"];

const DEFAULT_PATIENT = {
  name: "Mr. Arvind Kumar",
  id: "RAP-2024-0007",
  age: "45 Y / Male",
  condition: "Post Stroke Rehabilitation",
  admission: "12 Mar 2024",
  physician: "Dr. Neha Sharma",
};

const DEFAULT_DASHBOARD_DATA = {
  overviewStats: [
    { icon: "🏢", value: "5", label: "Departments", color: "#2563eb" },
    { icon: "🎯", value: "12", label: "Goals", color: "#7c3aed" },
    { icon: "📋", value: "18", label: "Assessments", color: "#0891b2" },
    { icon: "💊", value: "24", label: "Therapy Sessions", color: "#059669" },
    { icon: "🧪", value: "7", label: "Medication List", color: "#dc2626" },
  ],
  departmentInvolvement: [
    { name: "Physiotherapy", lead: "Dr. Sneha Kapoor", color: "#dbeafe", dot: "#2563eb" },
    { name: "Occupational Therapy", lead: "Dr. Pooja Singh", color: "#d1fae5", dot: "#059669" },
    { name: "Neurology", lead: "Dr. Rajiv Mehta", color: "#ede9fe", dot: "#7c3aed" },
    { name: "Speech Therapy", lead: "Dr. Meenal Joshi", color: "#fce7f3", dot: "#db2777" },
    { name: "Orthopedics", lead: "Dr. Amit Sharma", color: "#fef3c7", dot: "#d97706" },
  ],
  goalProgress: [
    { goal: "Improve upper limb motor function", prog: 70 },
    { goal: "Increase independence in daily activities", prog: 60 },
    { goal: "Improve speech clarity and communication", prog: 60 },
    { goal: "Improve balance and reduce fall risk", prog: 80 },
    { goal: "Enhance cognitive function", prog: 30 },
    { goal: "Improve walking endurance", prog: 40 },
  ],
  departments: [
    { dept: "Physiotherapy", head: "Dr. Sneha Kapoor", role: "In-Charge", first: "12 Mar 2024", last: "Today, 10:30 AM", status: "Active" },
    { dept: "Occupational Therapy", head: "Dr. Pooja Singh", role: "Advisor", first: "15 Mar 2024", last: "Yesterday, 03:15 PM", status: "Active" },
    { dept: "Neurology", head: "Dr. Rajiv Mehta", role: "Primary", first: "12 Mar 2024", last: "Yesterday, 04:45 PM", status: "Active" },
    { dept: "Speech Therapy", head: "Dr. Meenal Joshi", role: "Involved", first: "13 Mar 2024", last: "Yesterday, 11:00 AM", status: "Active" },
    { dept: "Orthopedics", head: "Dr. Amit Sharma", role: "Consultant", first: "14 Mar 2024", last: "20 May 2024", status: "Active" },
  ],
  departmentStats: {
    total: 5,
    active: 5,
    discontinued: 0,
  },
  collaborationNote: "Cross-disciplinary rehabilitation continues according to the current care plan; frequent updates are shared among physiotherapy, neurology, and speech therapy teams.",
  assessments: [
    { name: "Fugl-Meyer Assessment (UE)", dept: "Physiotherapy", date: "25 May 24", score: "46 / 66", ref: "0 - 66", trend: "up" },
    { name: "MoCA", dept: "Occupational Therapy", date: "22 May 24", score: "24 / 30", ref: "26 - 30", trend: "up" },
    { name: "Modified Ashworth Scale", dept: "Physiotherapy", date: "18 May 24", score: "1+ / 4", ref: "0 - 4", trend: "down" },
    { name: "Speech Intelligibility Test", dept: "Speech Therapy", date: "15 May 24", score: "68 %", ref: "0 - 100%", trend: "up" },
    { name: "Berg Balance Scale", dept: "Physiotherapy", date: "10 May 24", score: "42 / 56", ref: "41 - 56", trend: "up" },
    { name: "Grip Strength (Left Hand)", dept: "Occupational Therapy", date: "05 May 24", score: "18 kg", ref: "20 - 50 kg", trend: "up" },
    { name: "6 Minute Walk Test", dept: "Physiotherapy", date: "01 May 24", score: "320 m", ref: "> 500 m", trend: "up" },
  ],
  assessmentStats: [
    { icon: "📋", value: "18", label: "Total Assessments", color: "#2563eb" },
    { icon: "✅", value: "12", label: "Completed", color: "#059669" },
    { icon: "⏳", value: "4", label: "Pending", color: "#d97706" },
    { icon: "🔄", value: "2", label: "Follow-Up", color: "#7c3aed" },
  ],
  goals: [
    { goal: "Improve upper limb motor function", dept: "Physiotherapy", target: "30 Jun 2024", prog: 70, status: "In Progress", priority: "High" },
    { goal: "Increase independence in daily activities", dept: "Occupational Therapy", target: "30 Jun 2024", prog: 60, status: "In Progress", priority: "High" },
    { goal: "Improve speech clarity and communication", dept: "Speech Therapy", target: "10 Jul 2024", prog: 60, status: "In Progress", priority: "High" },
    { goal: "Improve balance and reduce fall risk", dept: "Physiotherapy", target: "20 Jun 2024", prog: 80, status: "In Progress", priority: "High" },
    { goal: "Enhance cognitive function", dept: "Neurology", target: "25 Jun 2024", prog: 30, status: "On Track", priority: "Medium" },
    { goal: "Improve walking endurance", dept: "Physiotherapy", target: "25 Jul 2024", prog: 40, status: "In Progress", priority: "Medium" },
  ],
  goalSummary: [
    { label: "On Track", count: 4, color: "#059669" },
    { label: "In Progress", count: 6, color: "#2563eb" },
    { label: "Not Started", count: 2, color: "#9ca3af" },
  ],
  therapySessions: [
    { date: "27 May 2024, 09:00 AM", dept: "Physiotherapy", type: "Gait Training", therapist: "Dr. Sneha Kapoor", duration: "45 min", status: "Completed" },
    { date: "24 May 2024, 11:00 AM", dept: "Occupational Therapy", type: "Upper Limb Function Training", therapist: "Dr. Pooja Singh", duration: "60 min", status: "Completed" },
    { date: "22 May 2024, 09:30 AM", dept: "Speech Therapy", type: "Speech & Language", therapist: "Dr. Meenal Joshi", duration: "50 min", status: "Completed" },
    { date: "20 May 2024, 03:00 PM", dept: "Physiotherapy", type: "Balance Training", therapist: "Dr. Sneha Kapoor", duration: "45 min", status: "Completed" },
    { date: "17 May 2024, 10:30 AM", dept: "Physiotherapy", type: "Endurance Training", therapist: "Dr. Amit Mehta", duration: "30 min", status: "Completed" },
  ],
  therapyStats: [
    { icon: "💊", value: "18", label: "Total Sessions", color: "#2563eb" },
    { icon: "✅", value: "15", label: "Completed Sessions", color: "#059669" },
    { icon: "📅", value: "3", label: "Scheduled Sessions", color: "#7c3aed" },
    { icon: "❌", value: "0", label: "Cancelled Sessions", color: "#dc2626" },
  ],
//   labReports: [
//     { test: "Complete Blood Count (CBC)", date: "01 May 2024", result: "Normal", ref: "—", status: "Normal" },
//     { test: "Blood Sugar Fasting", date: "01 May 2024", result: "98 mg/dL", ref: "70 – 100 mg/dL", status: "Normal" },
//     { test: "Vitamin D", date: "02 May 2024", result: "32 ng/mL", ref: "30 – 100 ng/mL", status: "Normal" },
//     { test: "Lipid Profile", date: "01 May 2024", result: "Normal", ref: "—", status: "Normal" },
//     { test: "Liver Function Test", date: "25 Apr 2024", result: "Normal", ref: "—", status: "Normal" },
//     { test: "Serum Electrolytes", date: "20 Apr 2024", result: "Normal", ref: "—", status: "Abnormal" },
//   ],
  medications: [],
  labStats: [
    { icon: "🧪", value: "7", label: "Total Reports", color: "#2563eb" },
    { icon: "✅", value: "5", label: "Normal", color: "#059669" },
    { icon: "⚠️", value: "2", label: "Abnormal", color: "#dc2626" },
  ],
  imagingStudies: [
    { study: "MRI Brain", date: "10 May 2024", desc: "Right MCA infarct", findings: "Subacute infarct in right MCA territory", status: "Active" },
    { study: "CT Scan Brain", date: "20 Apr 2024", desc: "No haemorrhage", findings: "No acute intracranial bleed", status: "Active" },
    { study: "X-Ray Chest", date: "01 Apr 2024", desc: "Clear Lungs", findings: "No active lung disease", status: "Active" },
    { study: "X-Ray Left Shoulder", date: "05 Apr 2024", desc: "—", findings: "Normal study", status: "Active" },
  ],
  imagingStats: [
    { icon: "🔬", value: "4", label: "Total Studies", color: "#2563eb" },
    { icon: "⚠️", value: "1", label: "With Abnormality", color: "#dc2626" },
  ],
  devices: [
    { device: "Lunar EMG System", type: "Device", sync: "26 May 2024", points: "1,256", status: "Active" },
    { device: "YAFROS System", type: "Robots", sync: "25 May 2024", points: "900", status: "Active" },
    { device: "Fitbit Inspire", type: "Wearable", sync: "25 May 2024", points: "1,600", status: "Active" },
    { device: "Biodon Balance System", type: "Assessment", sync: "03 May 2024", points: "980", status: "Active" },
    { device: "FES Cycle", type: "Therapeutic", sync: "20 May 2024", points: "420", status: "Inactive" },
  ],
  equipmentList: [
    // { name: "Audera Auditory Steady State Response", status: "Active" },
    // { name: "Audiometer Audiostar Pro", status: "Active" },
    // { name: "Corti Otoacoustic Emission", status: "Active" },
    // { name: "Dynamic Visual Acuity", status: "Active" },
  ],
  deviceStats: [
    { icon: "📡", value: "5", label: "Total Devices", color: "#2563eb" },
    { icon: "✅", value: "5", label: "Active", color: "#059669" },
    { icon: "💤", value: "0", label: "Inactive", color: "#6b7280" },
  ],
  timeline: [
    { date: "01 May 2024", title: "Patient Intake", desc: "Patient registered in the system." },
    { date: "05 May 2024", title: "Assessment", desc: "Initial assessment completed." },
    { date: "10 May 2024", title: "Lab Report", desc: "Labs tests conducted and reviewed." },
    { date: "15 May 2024", title: "Imaging", desc: "Imaging studies completed." },
    { date: "20 May 2024", title: "Therapy Session", desc: "Therapy sessions in progress." },
    { date: "25 May 2024", title: "Care Plan Update", desc: "Care plan updated by physician." },
  ],
  notes: [
    { type: "Clinical Note", typeColor: "#dbeafe", typeText: "#1d4ed8", date: "26 May 2024, 10:15 AM", author: "Dr. Neha Sharma", dept: "Physiotherapy", note: "Patient showing gradual improvement in gait balance. Continue current plan." },
    { type: "Care Plan Update", typeColor: "#d1fae5", typeText: "#059669", date: "24 May 2024, 02:30 PM", author: "Dr. Rajesh Verma", dept: "Occupational Therapy", note: "Left hand coordination improving. Adjusted new hand exercises." },
    { type: "Progress Note", typeColor: "#fef3c7", typeText: "#b45309", date: "22 May 2024, 09:45 AM", author: "Dr. Meenal Joshi", dept: "Speech Therapy", note: "Speech clarity moderate. Added communication exercises." },
  ],
};

function PatientHeader({ patient, activeTab, onTabChange }) {
  const initials = (patient.name || patient.email || "P")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "12px 20px 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 10 }}>
        <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 700, color: "#1d4ed8", flexShrink: 0 }}>{initials}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 16, color: "#0f172a" }}>{patient.name}</div>
          <div style={{ display: "flex", gap: 16, fontSize: 12, color: "#64748b", marginTop: 2, flexWrap: "wrap" }}>
            <span>Patient ID: {patient.id}</span>
            <span>{patient.age || "Age not available"}</span>
            <span>{patient.condition || "Condition not available"}</span>
            <span>Admission Date: {patient.admission || "—"}</span>
            <span>Physician: {patient.physician || "—"}</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" }}>
          {[
            { label: "Book New Appointment", color: "#2563eb", icon: "📅" },
            { label: "Connect Device", color: "#059669", icon: "📡" },
            { label: "New Note", color: "#7c3aed", icon: "📝" },
            { label: "Schedule Therapy", color: "#dc2626", icon: "💊" },
          ].map(btn => (
            <button key={btn.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: "4px 8px", border: "1px solid #e5e7eb", borderRadius: 8, background: "#f8fafc", cursor: "pointer", fontSize: 10, color: btn.color, minWidth: 60 }}>
              <span style={{ fontSize: 16 }}>{btn.icon}</span>
              <span style={{ lineHeight: 1.2, textAlign: "center" }}>{btn.label}</span>
            </button>
          ))}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: 11, color: "#64748b" }}>
            <span style={{ fontWeight: 600, color: "#0f172a", fontSize: 12 }}>Primary Physician</span>
            <span>{patient.physician || "—"}</span>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 0, borderBottom: "2px solid #e5e7eb", overflowX: "auto" }}>
        {TABS.map(tab => (
          <button key={tab} onClick={() => onTabChange(tab)}
            style={{ padding: "8px 14px", border: "none", background: "none", cursor: "pointer", fontSize: 12, fontWeight: activeTab === tab ? 700 : 500, color: activeTab === tab ? "#2563eb" : "#64748b", borderBottom: activeTab === tab ? "2px solid #2563eb" : "2px solid transparent", marginBottom: -2, whiteSpace: "nowrap" }}>
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

function StatCard({ icon, value, label, color = "#2563eb" }) {
  return (
    <div style={{ background: "#f8fafc", borderRadius: 10, padding: "12px 14px", textAlign: "center", border: "1px solid #e5e7eb" }}>
      <div style={{ fontSize: 22, marginBottom: 2 }}>{icon}</div>
      <div style={{ fontSize: 22, fontWeight: 700, color }}>{value}</div>
      <div style={{ fontSize: 11, color: "#64748b" }}>{label}</div>
    </div>
  );
}

function StatusBadge({ status }) {
  const colors = {
    "In Progress": { bg: "#dbeafe", text: "#1d4ed8" },
    "Active": { bg: "#d1fae5", text: "#059669" },
    "Completed": { bg: "#d1fae5", text: "#059669" },
    "Normal": { bg: "#d1fae5", text: "#059669" },
    "Low": { bg: "#fef3c7", text: "#b45309" },
    "Abnormal": { bg: "#fee2e2", text: "#dc2626" },
    "On Track": { bg: "#d1fae5", text: "#059669" },
    "Not Started": { bg: "#f3f4f6", text: "#6b7280" },
    "Discontinued": { bg: "#f3f4f6", text: "#6b7280" },
  };
  const c = colors[status] || { bg: "#f3f4f6", text: "#6b7280" };
  return <span style={{ background: c.bg, color: c.text, borderRadius: 20, padding: "2px 10px", fontSize: 11, fontWeight: 600 }}>{status}</span>;
}

function PriorityBadge({ priority }) {
  const colors = { High: "#dc2626", Medium: "#d97706", Low: "#059669" };
  return <span style={{ color: colors[priority] || "#64748b", fontSize: 12, fontWeight: 600 }}>{priority}</span>;
}

function ProgressBar({ value, color = "#2563eb" }) {
  return (
    <div style={{ background: "#e5e7eb", borderRadius: 4, height: 6, width: "100%", overflow: "hidden" }}>
      <div style={{ width: `${value}%`, height: "100%", background: color, borderRadius: 4 }} />
    </div>
  );
}

function TrendArrow({ direction }) {
  if (direction === "up") return <span style={{ color: "#059669" }}>↑</span>;
  if (direction === "down") return <span style={{ color: "#dc2626" }}>↓</span>;
  return <span style={{ color: "#6b7280" }}>→</span>;
}

function PatientsTab({ onPatientSelect, currentPatient }) {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPatients = async () => {
      setLoading(true);
      try {
        const response = await api.get(API_URL.PATIENT + "all");
        setPatients(response?.data?.results || []);
      } catch (e) {
        setPatients([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPatients();
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    if (!q) return patients;
    return patients.filter((p) => {
      return (
        (p.name || p.patient_name || "").toLowerCase().includes(q) ||
        (p.email || "").toLowerCase().includes(q) ||
        (p.mrn || "").toLowerCase().includes(q) ||
        String(p.patient_id || "").toLowerCase().includes(q)
      );
    });
  }, [patients, search]);

  const AVATAR_COLORS = ["#DBEAFE", "#D1FAE5", "#FEF3C7", "#FCE7F3", "#EDE9FE", "#FFEDD5"];

  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: "flex", gap: 12, marginBottom: 16, alignItems: "center" }}>
        <div style={{ position: "relative", flex: 1, maxWidth: 400 }}>
          <svg style={{ position: "absolute", left: 12, top: 10, pointerEvents: "none" }} width="16" height="16" viewBox="0 0 18 18" fill="none">
            <circle cx="8" cy="8" r="6" stroke="#64748B" strokeWidth="1.8" />
            <path d="M12.5 12.5l3 3" stroke="#64748B" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <input
            style={{ width: "100%", padding: "10px 12px 10px 36px", border: "1px solid #e5e7eb", borderRadius: 8, fontSize: 12, color: "#374151", background: "#fff" }}
            placeholder="Search patient name, MRN or ID"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden" }}>
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "2.5fr 1.8fr 1.2fr 1fr", padding: "14px 16px", background: "#f8fafc", borderBottom: "1px solid #e5e7eb", fontSize: 11, fontWeight: 600, color: "#64748b", textTransform: "uppercase" }}>
          <div>Patient</div>
          <div>MRN / ID</div>
          <div>Status</div>
          <div>Department</div>
        </div>

        {/* Rows */}
        <div style={{ maxHeight: 500, overflowY: "auto" }}>
          {loading ? (
            <div style={{ padding: 20, textAlign: "center", color: "#64748b" }}>Loading...</div>
          ) : filtered.length === 0 ? (
            <div style={{ padding: 20, textAlign: "center", color: "#64748b" }}>
              {search ? "No patients match your search" : "No patients found"}
            </div>
          ) : (
            filtered.map((p, i) => {
              const displayName = p.name || p.patient_name || p.email || "—";
              const initial = (displayName[0] || "P").toUpperCase();
              const isSelected = currentPatient?.id === p.id || currentPatient?.patient_id === p.patient_id;

              return (
                <div
                  key={p.id || p.patient_id || i}
                  onClick={() => onPatientSelect?.(p)}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2.5fr 1.8fr 1.2fr 1fr",
                    padding: "12px 16px",
                    alignItems: "center",
                    borderBottom: "1px solid #f1f5f9",
                    background: isSelected ? "#eff6ff" : i % 2 === 0 ? "#fff" : "#fafafa",
                    cursor: "pointer",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) e.currentTarget.style.background = "#f8faff";
                  }}
                  onMouseLeave={(e) => {
                    if (isSelected) e.currentTarget.style.background = "#eff6ff";
                    else e.currentTarget.style.background = i % 2 === 0 ? "#fff" : "#fafafa";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: AVATAR_COLORS[initial.charCodeAt(0) % AVATAR_COLORS.length], display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 600, color: "#1d4ed8", flexShrink: 0 }}>{initial}</div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#0f172a" }}>{displayName}</div>
                      <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>{p.age ? `${p.age} yrs` : ""}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 12, color: "#6b7280", fontFamily: "monospace" }}>{p.mrn || p.patient_id || "—"}</div>
                  <div><StatusBadge status={p.status || "Active"} /></div>
                  <div style={{ fontSize: 12, color: "#374151" }}>{p.department || "—"}</div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

// =================== TAB VIEWS ===================

function OverviewTab({ data }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, padding: 16 }}>
      {/* Stats Row */}
      <div style={{ gridColumn: "1/-1", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
        {data.overviewStats.map((stat) => (
          <StatCard key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} color={stat.color} />
        ))}
      </div>

      {/* Department Involvement */}
      <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
        <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12, color: "#0f172a" }}>Department Involvement</div>
        {data.departmentInvolvement.map((d) => (
          <div key={d.name} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: d.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: d.dot }} />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#0f172a" }}>{d.name}</div>
              <div style={{ fontSize: 11, color: "#64748b" }}>{d.lead}</div>
            </div>
          </div>
        ))}
        <button style={{ marginTop: 8, fontSize: 12, color: "#2563eb", background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}>View All</button>
      </div>

      {/* Progress Overview */}
      <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
        <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12, color: "#0f172a" }}>Progress Overview</div>
        <div style={{ position: "relative", height: 120 }}>
          <svg viewBox="0 0 300 100" style={{ width: "100%", height: "100%" }}>
            <polyline points="0,80 40,70 80,55 120,50 160,45 200,35 240,28 280,20" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinejoin="round" />
            <polyline points="0,85 40,80 80,75 120,68 160,60 200,55 240,50 280,45" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinejoin="round" strokeDasharray="4,3" />
            <circle cx="280" cy="20" r="4" fill="#2563eb" />
          </svg>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 11, justifyContent: "center" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}><span style={{ display: "inline-block", width: 12, height: 3, background: "#2563eb", borderRadius: 2 }} />Improving</span>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}><span style={{ display: "inline-block", width: 12, height: 3, background: "#94a3b8", borderRadius: 2 }} />Baseline</span>
        </div>
      </div>

      {/* Goals Overview */}
      <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
        <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12, color: "#0f172a" }}>Goals (Department Wise)</div>
        {data.goalProgress.map((goal, i) => (
          <div key={i} style={{ marginBottom: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, marginBottom: 3 }}>
              <span style={{ color: "#374151", fontWeight: 500 }}>{goal.goal}</span>
              <span style={{ color: "#2563eb", fontWeight: 700 }}>{goal.prog}%</span>
            </div>
            <ProgressBar value={goal.prog} color="#2563eb" />
          </div>
        ))}
      </div>
    </div>
  );
}

function DepartmentsTab({ data }) {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 14, color: "#0f172a" }}>Departments Involved in Patient Care</div>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr style={{ background: "#f8fafc" }}>
            {["Department", "Head / In-Charge", "Role", "First Involved", "Last Activity", "Status", "Department Summary"].map(h => (
              <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700, color: "#0f172a", borderBottom: "1px solid #e5e7eb", fontSize: 12 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.departments.map((row, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #f1f5f9", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
              <td style={{ padding: "10px 12px", fontWeight: 600, color: "#0f172a" }}>{row.dept}</td>
              <td style={{ padding: "10px 12px", color: "#374151" }}>{row.head}</td>
              <td style={{ padding: "10px 12px", color: "#374151" }}>{row.role}</td>
              <td style={{ padding: "10px 12px", color: "#64748b" }}>{row.first}</td>
              <td style={{ padding: "10px 12px", color: "#64748b" }}>{row.last}</td>
              <td style={{ padding: "10px 12px" }}><StatusBadge status={row.status} /></td>
              <td style={{ padding: "10px 12px" }}><button style={{ fontSize: 11, color: "#2563eb", background: "#eff6ff", border: "none", borderRadius: 6, padding: "3px 10px", cursor: "pointer" }}>View Summary</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>Department Stats</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            <StatCard icon="🏢" value={data.departmentStats.total} label="Total" color="#2563eb" />
            <StatCard icon="✅" value={data.departmentStats.active} label="Active" color="#059669" />
            <StatCard icon="🚫" value={data.departmentStats.discontinued} label="Discontinued" color="#dc2626" />
          </div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>Collaboration Note</div>
          <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.6 }}>{data.collaborationNote}</p>
        </div>
      </div>
    </div>
  );
}

function AssessmentsTab({ data }) {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div style={{ fontWeight: 700, fontSize: 16, color: "#0f172a" }}>All Assessments</div>
        <button style={{ fontSize: 12, color: "#2563eb", background: "#eff6ff", border: "1px solid #dbeafe", borderRadius: 6, padding: "5px 12px", cursor: "pointer" }}>View All</button>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
        <thead>
          <tr style={{ background: "#f8fafc" }}>
            {["Assessment", "Department", "Date", "Score / Result", "Reference Range", "Trend", "Action"].map(h => (
              <th key={h} style={{ padding: "9px 10px", textAlign: "left", fontWeight: 700, color: "#0f172a", borderBottom: "1px solid #e5e7eb", fontSize: 11 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.assessments.map((row, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #f1f5f9", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
              <td style={{ padding: "9px 10px", fontWeight: 600, color: "#0f172a" }}>{row.name}</td>
              <td style={{ padding: "9px 10px", color: "#374151" }}>{row.dept}</td>
              <td style={{ padding: "9px 10px", color: "#64748b" }}>{row.date}</td>
              <td style={{ padding: "9px 10px", fontWeight: 700, color: "#0f172a" }}>{row.score}</td>
              <td style={{ padding: "9px 10px", color: "#64748b" }}>{row.ref}</td>
              <td style={{ padding: "9px 10px" }}><TrendArrow direction={row.trend} /></td>
              <td style={{ padding: "9px 10px" }}><button style={{ fontSize: 10, color: "#2563eb", background: "none", border: "1px solid #2563eb", borderRadius: 4, padding: "2px 8px", cursor: "pointer" }}>View</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginTop: 16 }}>
        {data.assessmentStats.map((stat) => (
          <StatCard key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} color={stat.color} />
        ))}
      </div>
    </div>
  );
}

function GoalsTab({ data }) {
  const totalGoals = data.goals.length;

  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: "#0f172a" }}>Goals (Department Wise)</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ background: "#f8fafc" }}>
                {["Goal", "Department", "Target Date", "Progress", "Status", "Priority"].map(h => (
                  <th key={h} style={{ padding: "9px 10px", textAlign: "left", fontWeight: 700, color: "#0f172a", borderBottom: "1px solid #e5e7eb", fontSize: 11 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.goals.map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #f1f5f9", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <td style={{ padding: "9px 10px", fontWeight: 600, color: "#0f172a" }}>{row.goal}</td>
                  <td style={{ padding: "9px 10px", color: "#374151", fontSize: 11 }}>{row.dept}</td>
                  <td style={{ padding: "9px 10px", color: "#64748b", fontSize: 11 }}>{row.target}</td>
                  <td style={{ padding: "9px 10px", minWidth: 80 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <ProgressBar value={row.prog} color="#2563eb" />
                      <span style={{ fontSize: 11, color: "#2563eb", fontWeight: 700, minWidth: 30 }}>{row.prog}%</span>
                    </div>
                  </td>
                  <td style={{ padding: "9px 10px" }}><StatusBadge status={row.status} /></td>
                  <td style={{ padding: "9px 10px" }}><PriorityBadge priority={row.priority} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>Goal Summary</div>
            <div style={{ display: "flex", justifyContent: "center", margin: "12px 0" }}>
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="#059669" strokeWidth="12" strokeDasharray="80 234" strokeLinecap="round" transform="rotate(-90 60 60)" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="#2563eb" strokeWidth="12" strokeDasharray="125 234" strokeLinecap="round" transform="rotate(-90 60 60)" strokeDashoffset="-80" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="#f3f4f6" strokeWidth="12" strokeDasharray="29 234" strokeLinecap="round" transform="rotate(-90 60 60)" strokeDashoffset="-205" />
                <text x="60" y="55" textAnchor="middle" fontSize="22" fontWeight="700" fill="#0f172a">{totalGoals}</text>
                <text x="60" y="70" textAnchor="middle" fontSize="11" fill="#64748b">Total Goals</text>
              </svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {data.goalSummary.map((s) => (
                <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: s.color }} />
                  <span style={{ flex: 1, color: "#374151" }}>{s.label}</span>
                  <span style={{ fontWeight: 700, color: "#0f172a" }}>{s.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TherapyTab({ patient, onBackToDashboard }) {
  return (
    <div style={{ minHeight: "100%" }}>
      <SOAPSession patient={patient} onBack={onBackToDashboard} />
    </div>
  );
}

function LabReportsTab({ data, patient }) {
  const storageKey = `patient_${patient?.id}_medications`;
  const [meds, setMeds] = useState(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return data.medications || [];
  });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        setMeds(JSON.parse(raw));
        return;
      }
    } catch (e) {}
    setMeds(data.medications || []);
  }, [storageKey, data.medications]);

  const [form, setForm] = useState({ name: "", dose: "", frequency: "", prescribed: "", duration: "", remark: "", type: "" });

  useEffect(() => {
    try { localStorage.setItem(storageKey, JSON.stringify(meds)); } catch (e) {}
  }, [meds, storageKey]);

  const addMed = () => {
    if (!form.name) return;
    setMeds(prev => [form, ...prev]);
    setForm({ name: "", dose: "", frequency: "", prescribed: "", duration: "", remark: "", type: "" });
  };

  const removeMed = (i) => setMeds(prev => prev.filter((_, idx) => idx !== i));

  return (
    <div style={{ padding: 16 }}>
      {/* <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: "#0f172a" }}>Medication List</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ background: "#f8fafc" }}>
                {["Test Name", "Date", "Result", "Reference Range", "Status"].map(h => (
                  <th key={h} style={{ padding: "9px 10px", textAlign: "left", fontWeight: 700, color: "#0f172a", borderBottom: "1px solid #e5e7eb", fontSize: 11 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.labReports.map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #f1f5f9", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <td style={{ padding: "9px 10px", fontWeight: 600, color: "#0f172a" }}>{row.test}</td>
                  <td style={{ padding: "9px 10px", color: "#64748b" }}>{row.date}</td>
                  <td style={{ padding: "9px 10px", color: "#374151", fontWeight: 500 }}>{row.result}</td>
                  <td style={{ padding: "9px 10px", color: "#64748b" }}>{row.ref}</td>
                  <td style={{ padding: "9px 10px" }}><StatusBadge status={row.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>Lab Summary</div>
            {data.labStats.map((stat) => (
              <StatCard key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} color={stat.color} />
            ))}
          </div>
        </div>
      </div> */}

      {/* Medications for this patient */}
      <div style={{ marginTop: 20 }}>
        <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: "#0f172a" }}>Medications List</div>
        {/* <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <input placeholder="Medication name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={{ flex: 2, padding: 8, borderRadius: 6, border: "1px solid #e5e7eb" }} />
          <input placeholder="Dose" value={form.dose} onChange={e => setForm({ ...form, dose: e.target.value })} style={{ flex: 1, padding: 8, borderRadius: 6, border: "1px solid #e5e7eb" }} />
          <input placeholder="Frequency" value={form.frequency} onChange={e => setForm({ ...form, frequency: e.target.value })} style={{ flex: 1, padding: 8, borderRadius: 6, border: "1px solid #e5e7eb" }} />
          <button onClick={addMed} style={{ padding: "8px 12px", background: "#2563eb", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer" }}>Add</button>
        </div> */}

        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <thead>
            <tr style={{ background: "#f8fafc" }}>
              {["Medication Name", "Dose", "Frequency", "Prescribed Date", "Duration", "Remark", "Type", "Action"].map(h => (
                <th key={h} style={{ padding: "9px 10px", textAlign: "left", fontWeight: 700, color: "#0f172a", borderBottom: "1px solid #e5e7eb", fontSize: 11 , background:"#dbeafe"}}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {meds.map((m, i) => {
              // Handle both formats: medication from MedicationAssessment and manual entry
              const medName = m.medication_name || m.name;
              const medDose = m.dose ? `${m.dose}${m.unit ? " " + m.unit : ""}` : m.dose;
              const medDate = m.prescribed_date || m.prescribed;
              const medType = m.type === "HOME" ? "Home Medication" : m.type === "PRESCRIBED" ? "Prescribed Medication" : m.type;
              
              return (
                <tr key={i} style={{ borderBottom: "1px solid #f1f5f9", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <td style={{ padding: "9px 10px", fontWeight: 600, color: "#0f172a" }}>{medName}</td>
                  <td style={{ padding: "9px 10px", color: "#374151" }}>{medDose}</td>
                  <td style={{ padding: "9px 10px", color: "#374151" }}>{m.frequency}</td>
                  <td style={{ padding: "9px 10px", color: "#64748b" }}>{medDate}</td>
                  <td style={{ padding: "9px 10px", color: "#64748b" }}>{m.duration}</td>
                  <td style={{ padding: "9px 10px", color: "#374151" }}>{m.remark || "—"}</td>
                  <td style={{ padding: "9px 10px" }}>{medType}</td>
                  <td style={{ padding: "9px 10px" }}><button onClick={() => removeMed(i)} style={{ fontSize: 10, color: "#fff", background: "#dc2626", border: "none", borderRadius: 4, padding: "4px 8px", cursor: "pointer" }}>Remove</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ImagingTab({ data }) {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: "#0f172a" }}>Imaging Studies</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ background: "#f8fafc" }}>
                {["Study", "Date", "Description", "Findings", "Status"].map(h => (
                  <th key={h} style={{ padding: "9px 10px", textAlign: "left", fontWeight: 700, color: "#0f172a", borderBottom: "1px solid #e5e7eb", fontSize: 11 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.imagingStudies.map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #f1f5f9", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <td style={{ padding: "9px 10px", fontWeight: 600, color: "#0f172a" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ width: 28, height: 28, background: "#1e293b", borderRadius: 6, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>🖼️</span>
                      {row.study}
                    </span>
                  </td>
                  <td style={{ padding: "9px 10px", color: "#64748b" }}>{row.date}</td>
                  <td style={{ padding: "9px 10px", color: "#374151" }}>{row.desc}</td>
                  <td style={{ padding: "9px 10px", color: "#374151" }}>{row.findings}</td>
                  <td style={{ padding: "9px 10px" }}><button style={{ fontSize: 10, color: "#2563eb", background: "#eff6ff", border: "none", borderRadius: 4, padding: "2px 8px", cursor: "pointer" }}>View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>Imaging Summary</div>
            {data.imagingStats.map((stat) => (
              <StatCard key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} color={stat.color} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DevicesTab({ data, patient }) {
  const storageKey = `patient_${patient?.id}_equipment`;
  const [equipment, setEquipment] = useState(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return data.equipmentList || data.devices || [];
  });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        setEquipment(JSON.parse(raw));
        return;
      }
    } catch (e) {}
    setEquipment(data.equipmentList || data.devices || []);
  }, [storageKey, data.equipmentList, data.devices]);

  const [eqForm, setEqForm] = useState({ name: "", status: "Active" });

  useEffect(() => {
    try { localStorage.setItem(storageKey, JSON.stringify(equipment)); } catch (e) {}
  }, [equipment, storageKey]);

  const addEquipment = () => {
    if (!eqForm.name) return;
    setEquipment(prev => [eqForm, ...prev]);
    setEqForm({ name: "", status: "Active" });
  };

  const removeEquipment = (i) => setEquipment(prev => prev.filter((_, idx) => idx !== i));

  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
        <div>
          {/* <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: "#0f172a" }}>Equipment List Overview</div> */}
          {/* <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ background: "#f8fafc" }}>
                {["Device", "Type", "Last Sync", "Data Points", "Status", "Action"].map(h => (
                  <th key={h} style={{ padding: "9px 10px", textAlign: "left", fontWeight: 700, color: "#0f172a", borderBottom: "1px solid #e5e7eb", fontSize: 11 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.devices.map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #f1f5f9", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <td style={{ padding: "9px 10px", fontWeight: 600, color: "#0f172a" }}>{row.device}</td>
                  <td style={{ padding: "9px 10px", color: "#374151" }}>{row.type}</td>
                  <td style={{ padding: "9px 10px", color: "#64748b" }}>{row.sync}</td>
                  <td style={{ padding: "9px 10px", color: "#374151", fontWeight: 500 }}>{row.points}</td>
                  <td style={{ padding: "9px 10px" }}><StatusBadge status={row.status} /></td>
                  <td style={{ padding: "9px 10px" }}><button style={{ fontSize: 10, color: "#2563eb", background: "#eff6ff", border: "none", borderRadius: 4, padding: "2px 8px", cursor: "pointer" }}>View Data</button></td>
                </tr>
              ))}
            </tbody>
          </table> */}
          {/* Equipment List stored per patient */}
          <div style={{ marginTop: 18 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <div style={{ fontWeight: 700 }}>Equipment List</div>
              {/* <div style={{ display: "flex", gap: 8 }}>
                <input placeholder="Equipment name" value={eqForm.name} onChange={e => setEqForm({ ...eqForm, name: e.target.value })} style={{ padding: 8, borderRadius: 6, border: "1px solid #e5e7eb" }} />
                <button onClick={addEquipment} style={{ padding: "8px 12px", background: "#059669", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer" }}>Add</button>
              </div> */}
            </div>

            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  {["Equipment", "Status", "Action"].map(h => (
                    <th key={h} style={{ padding: "9px 10px", textAlign: "left", fontWeight: 700, color: "#0f172a", borderBottom: "1px solid #e5e7eb", fontSize: 11,background:"#dbeafe" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {equipment.map((e, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #f1f5f9", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "9px 10px", fontWeight: 600, color: "#0f172a" }}>{e.name}</td>
                    <td style={{ padding: "9px 10px" }}><StatusBadge status={e.status || "Active"} /></td>
                    <td style={{ padding: "9px 10px" }}><button onClick={() => removeEquipment(i)} style={{ fontSize: 10, color: "#fff", background: "#dc2626", border: "none", borderRadius: 4, padding: "4px 8px", cursor: "pointer" }}>Remove</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          {/* <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>Data Summary</div>
            {data.deviceStats.map((stat) => (
              <StatCard key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} color={stat.color} />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}

function TimelineTab({ data }) {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 16, color: "#0f172a" }}>Patient Timeline</div>
      <div style={{ display: "flex", gap: 0, overflowX: "auto", paddingBottom: 8 }}>
        {data.timeline.map((e, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, minWidth: 120 }}>
            <div style={{ fontSize: 11, color: "#64748b", marginBottom: 6 }}>{e.date}</div>
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#2563eb", border: "2px solid #fff", boxShadow: "0 0 0 2px #2563eb", zIndex: 1 }} />
            {i < data.timeline.length - 1 && <div style={{ position: "absolute", height: 2, background: "#dbeafe", left: 0, right: 0, top: 28 }} />}
            <div style={{ marginTop: 10, background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, padding: "10px 12px", textAlign: "center", width: "90%" }}>
              <div style={{ fontWeight: 700, fontSize: 12, color: "#0f172a", marginBottom: 4 }}>{e.title}</div>
              <div style={{ fontSize: 11, color: "#64748b", lineHeight: 1.4 }}>{e.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NotesTab({ data }) {
  const [noteType, setNoteType] = useState("");
  const [noteText, setNoteText] = useState("");

  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: "#0f172a" }}>Clinical Notes & Communication</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ background: "#f8fafc" }}>
                {["Type", "Date & Time", "Author", "Department", "Note"].map(h => (
                  <th key={h} style={{ padding: "9px 10px", textAlign: "left", fontWeight: 700, color: "#0f172a", borderBottom: "1px solid #e5e7eb", fontSize: 11,background:"#dbeafe" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.notes.map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #f1f5f9", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <td style={{ padding: "9px 10px" }}><span style={{ background: row.typeColor, color: row.typeText, borderRadius: 20, padding: "2px 8px", fontSize: 10, fontWeight: 600 }}>{row.type}</span></td>
                  <td style={{ padding: "9px 10px", color: "#64748b", fontSize: 11 }}>{row.date}</td>
                  <td style={{ padding: "9px 10px", color: "#374151" }}>{row.author}</td>
                  <td style={{ padding: "9px 10px", color: "#374151" }}>{row.dept}</td>
                  <td style={{ padding: "9px 10px", color: "#374151", maxWidth: 200 }}>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Note Panel */}
        <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14, color: "#0f172a" }}>Add New Note</div>
          <div style={{ marginBottom: 12 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 4 }}>Note Type</label>
            <select value={noteType} onChange={e => setNoteType(e.target.value)} style={{ width: "100%", padding: "8px 10px", border: "1px solid #e5e7eb", borderRadius: 8, fontSize: 12, color: "#374151", background: "#fff" }}>
              <option value="">Select Type</option>
              <option>Clinical Note</option>
              <option>Care Plan Update</option>
              <option>Progress Note</option>
              <option>Doctor Note</option>
            </select>
          </div>
          <div style={{ marginBottom: 12 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 4 }}>Note</label>
            <textarea value={noteText} onChange={e => setNoteText(e.target.value)} placeholder="Enter your note here..." style={{ width: "100%", height: 100, padding: "8px 10px", border: "1px solid #e5e7eb", borderRadius: 8, fontSize: 12, color: "#374151", resize: "vertical", boxSizing: "border-box" }} />
          </div>
          <button style={{ width: "100%", padding: "10px", background: "#2563eb", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontWeight: 700, fontSize: 13 }}>Add Note</button>
        </div>
      </div>
    </div>
  );
}

const TAB_COMPONENTS = {
  Overview: OverviewTab,
  Patients: PatientsTab,
  Departments: DepartmentsTab,
  Assessments: AssessmentsTab,
  Goals: GoalsTab,
  "Therapy Sessions": TherapyTab,
  "Medication List": LabReportsTab,
  Imaging: ImagingTab,
  "Equipment List": DevicesTab,
  Timeline: TimelineTab,
  Notes: NotesTab,
};

export default function RAPDashboard({ patient, onBack }) {
  const [activeNav, setActiveNav] = useState("overview");
  const [activeTab, setActiveTab] = useState("Overview");
  const [displayedPatient, setDisplayedPatient] = useState(patient);
  const patientData = useMemo(() => ({ ...DEFAULT_PATIENT, ...displayedPatient }), [displayedPatient]);
  const dashboardData = useMemo(() => ({ ...DEFAULT_DASHBOARD_DATA }), []);
  const initials = (patient.name || patient.email || "P")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const handleNavClick = (id) => {
    if (id === "patients") {
      onBack?.();
      return;
    }

    setActiveNav(id);
    const tabMap = {
      overview: "Overview",
      departments: "Departments",
      assessments: "Assessments",
      goals: "Goals",
      therapy: "Therapy Sessions",
      lab: "Medication List",
      imaging: "Imaging",
      devices: "Equipment List",
      timeline: "Timeline",
      notes: "Notes",
    };
    if (tabMap[id]) setActiveTab(tabMap[id]);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    const navMap = {
      Overview: "overview",
      Patients: "patients",
      Departments: "departments",
      Assessments: "assessments",
      Goals: "goals",
      "Therapy Sessions": "therapy",
      "Medication List": "lab",
      Imaging: "imaging",
      "Equipment List": "devices",
      Timeline: "timeline",
      Notes: "notes",
    };
    if (navMap[tab]) setActiveNav(navMap[tab]);
  };

  const handlePatientSelect = (selectedPatient) => {
    const updatedPatient = { ...selectedPatient, name: selectedPatient.patient_name || selectedPatient.name, id: selectedPatient.id || selectedPatient.patient_id };
    setDisplayedPatient(updatedPatient);
    setActiveTab("Overview");
  };

  const TabComponent = TAB_COMPONENTS[activeTab] || OverviewTab;

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "'Segoe UI', sans-serif", background: "#f1f5f9", overflow: "hidden" }}>
      {/* Sidebar */}
      {/* <div style={{ width: 200, background: "#0f172a", display: "flex", flexDirection: "column", flexShrink: 0, overflowY: "auto" }}> */}
        {/* Logo */}
        {/* <div style={{ padding: "16px 14px", borderBottom: "1px solid #1e293b" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#fff", fontSize: 14 }}>R</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 13, color: "#fff", lineHeight: 1.1 }}>RAP</div>
              <div style={{ fontSize: 9, color: "#94a3b8", lineHeight: 1.2 }}>Rehabilitation<br />Assessment Platform</div>
            </div>
          </div>
        </div> */}

        {/* Nav Items */}
        {/* <nav style={{ flex: 1, padding: "8px 0" }}>
          {NAV_ITEMS.map(item => (
            <button key={item.id} onClick={() => handleNavClick(item.id)}
              style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "9px 14px", border: "none", background: activeNav === item.id ? "#1e40af" : "none", cursor: "pointer", color: activeNav === item.id ? "#fff" : "#94a3b8", fontSize: 12, fontWeight: activeNav === item.id ? 700 : 400, borderLeft: activeNav === item.id ? "3px solid #60a5fa" : "3px solid transparent", transition: "all 0.15s" }}>
              <span style={{ fontSize: 14 }}>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div> */}

      {/* Main content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Top bar */}
        <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
          <div style={{ fontWeight: 700, fontSize: 15, color: "#0f172a" }}>
            {activeTab.toUpperCase()}
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <button onClick={onBack} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 80, height: 30, borderRadius: 8, border: "1px solid #e5e7eb", background: "#f8fafc", cursor: "pointer", fontSize: 16, color: "#64748b", transition: "all 0.2s" }} title="Back to patient list">← Back</button>
            {/* <button style={{ background: "none", border: "1px solid #e5e7eb", borderRadius: 8, padding: "6px 10px", cursor: "pointer", fontSize: 16 }}>🔔</button> */}
        <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 500, color: "#1d4ed8", flexShrink: 0 }}>{initials}</div>
          </div>
        </div>

        {/* Patient header + tabs */}
        <div style={{ flexShrink: 0 }}>
          <PatientHeader patient={patientData} activeTab={activeTab} onTabChange={handleTabChange} />
        </div>

        {/* Tab content */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          {activeTab === "Patients" ? (
            <PatientsTab onPatientSelect={handlePatientSelect} currentPatient={displayedPatient} />
          ) : (
            <TabComponent data={dashboardData} patient={patientData} onBackToDashboard={() => setActiveTab("Departments")} />
          )}
        </div>
      </div>
    </div>
  );
}