import React, { useState, useCallback, useMemo } from "react";
import OptometryFollowUpAssessment from "./components/OptometryFollowUpAssessment";
import { ShimmerRow } from "../../shared/ui/Shimmer";
import EmptyState from "../../shared/ui/EmptyState";
import AssessmentLoader from "../../assessment";
import { formatAppointmentDateTime } from "../../shared/api/patientsList";
import SOAPSession from "../Rap/session";

/* ── Option cards ───────────────────────────────────────────────────────── */
const OPTION_CARDS = [
  {
    id: "initial",  title: "Initial Assessment",
    desc: "Comprehensive SOAP assessment for new patient visit",
    icon: "📋", accent: "#1D4ED8",
    tag: "New Patient", tagColor: "#dbeafe", tagText: "#1d4ed8",
  },
  {
    id: "followup", title: "Follow-up Visit",
    desc: "Review progress, update findings and adjust treatment plan",
    icon: "🔄", accent: "#059669",
    tag: "Returning", tagColor: "#d1fae5", tagText: "#065f46",
  },
  {
    id: "progress", title: "Progress Intervention",
    desc: "Document clinical interventions and track patient outcomes",
    icon: "📈", accent: "#7C3AED",
    tag: "Ongoing Care", tagColor: "#ede9fe", tagText: "#5b21b6",
  },
];

export default function OptometryPatients({
  onBack,
  patients: patientsProp = [],
  totalPatients: totalPatientsProp,
  loading: loadingProp = false,
}) {
  const [selectedPatient,      setSelectedPatient]      = useState(null);
  const [reportsPatient,       setReportsPatient]       = useState(null);
  const [assessmentView,       setAssessmentView]       = useState(null);
  const [submittedAssessments, setSubmittedAssessments] = useState({});
  const [submittedFollowups,   setSubmittedFollowups]   = useState({});
  const [search,               setSearch]               = useState("");
  const patients = patientsProp;
  const totalPatients = totalPatientsProp ?? patients.length;
  const loading = loadingProp;

  const handleBackToPatients = useCallback(() => { setSelectedPatient(null); setAssessmentView(null); }, []);
  const handleBackToCards    = useCallback(() => { setAssessmentView(null); }, []);
  const handleBackFromReports = useCallback(() => { setReportsPatient(null); }, []);
  const handleInitialSubmit  = useCallback((v) => setSubmittedAssessments(p => ({ ...p, [selectedPatient.id]: v })), [selectedPatient]);
  const handleFollowupSubmit = useCallback((v) => setSubmittedFollowups(p => ({ ...p, [selectedPatient.id]: v })), [selectedPatient]);

  const openPatientReports = useCallback((p) => {
    setReportsPatient({
      ...p,
      id: p.id ?? p.patient_id,
      name: p.name || p.patient_name || p.email,
    });
  }, []);

  /* Deep-link: auto-select patient once list is loaded */
  React.useEffect(() => {
    if (!patients.length) return;                          // wait for list
    if (selectedPatient) return;                           // already selected

    const params     = new URLSearchParams(window.location.search);
    const patientId  = params.get("patient_id");
    const assessment = params.get("assessment") || "initial";

    if (!patientId) return;

    const found = patients.find(
      (p) => String(p.id ?? p.patient_id) === String(patientId),
    );
    if (found) {
      setSelectedPatient(found);
      setAssessmentView(assessment);
    }
  }, [patients]);                                          // runs whenever patients loads

  /* hooks must be before early returns */
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    const base = patients;
    return !q
      ? base
      : base.filter(p =>
          (p.name || p.patient_name || "").toLowerCase().includes(q) ||
          (p.email || "").toLowerCase().includes(q) ||
          (p.mrn || p.ic || "").toLowerCase().includes(q) ||
          (p.icd || "").toLowerCase().includes(q)
        );
  }, [patients, search]);

  /* ── Patient reports (same RAP session reports, by patient id) ── */
  if (reportsPatient) {
    return (
      <div style={S.page}>
        <div style={S.headerRow}>
          <div style={S.headerTitleRow}>
            <button type="button" style={S.headerBackBtn} onClick={handleBackFromReports}>←</button>
            <div>
              <h1 style={S.pageTitle}>Reports</h1>
              <p style={S.pageSub}>
                {reportsPatient.name || reportsPatient.email || "Patient"}
                {reportsPatient.id ? ` · ID ${reportsPatient.id}` : ""}
              </p>
            </div>
          </div>
        </div>
        <SOAPSession
          patient={reportsPatient}
          onBack={handleBackFromReports}
          department="Optometry"
        />
      </div>
    );
  }

  /* ── Assessment views ── */
  if (selectedPatient && assessmentView === "initial") {
    return (
      <AssessmentLoader
        department="Optometry"
        patient={selectedPatient}
        visitType="INITIAL"
      />
    );
  }
  if (selectedPatient && assessmentView === "followup") {
    const saved = submittedFollowups[selectedPatient.id] ?? null;
    return (
      <OptometryFollowUpAssessment
        patient={selectedPatient}
        savedValues={saved}
        readOnly={!!saved}
        onSubmit={handleFollowupSubmit}
        onBack={handleBackToCards}
      />
    );
  }
  if (selectedPatient && assessmentView === "progress") {
    return (
      <AssessmentLoader
        department="Optometry"
        patient={selectedPatient}
        visitType="PROGRESS"
      />
    );
  }

  /* ── Assessment type selection ── */
  if (selectedPatient) {
    const initials = ((selectedPatient.name || selectedPatient.email || "P")
      .split(" ").map(w => w[0]).join("").slice(0, 2)).toUpperCase();
    return (
      <div style={S.selectionPage}>

        {/* ── Top bar ── */}
        <div style={S.patientBanner}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <button style={S.headerBackBtn} onClick={handleBackToPatients}>← Back</button>
            <div style={S.patientAvatar}>{initials}</div>
            <div>
              <div style={S.patientName}>{selectedPatient.name || selectedPatient.email || "—"}</div>
              <div style={S.patientMeta}>
                {[
                  selectedPatient.mrn && `MRN: ${selectedPatient.mrn}`,
                  selectedPatient.age && `${selectedPatient.age} yrs`,
                  selectedPatient.gender,
                ].filter(Boolean).join("  ·  ")}
              </div>
            </div>
          </div>
          <div style={S.patientBannerRight}>
            <div style={S.bannerStat}>
              <div style={S.bannerStatVal}>3</div>
              <div style={S.bannerStatLabel}>Previous Visits</div>
            </div>
            <div style={S.bannerDivider} />
            <div style={S.bannerStat}>
              <div style={S.bannerStatVal}>Apr 2026</div>
              <div style={S.bannerStatLabel}>Last Visit</div>
            </div>
            <div style={S.bannerDivider} />
            <div style={S.bannerStat}>
              <div style={{ ...S.bannerStatVal, color: "#10b981" }}>Active</div>
              <div style={S.bannerStatLabel}>Status</div>
            </div>

          </div>
        </div>

        {/* ── Body ── */}
        <div style={S.selectionBody}>


          <div style={S.cardsGrid}>
            {OPTION_CARDS.map(card => (
              <AssessmentCard key={card.id} card={card} onClick={() => setAssessmentView(card.id)} />
            ))}
          </div>
        </div>

      </div>
    );
  }

  /* ── Patient list ── */
  return (
    <div style={S.page}>
      <div style={S.headerRow}>
        <div style={S.headerTitleRow}>
          <button style={S.headerBackBtn} onClick={onBack}>&lt;</button>
          <div>
            <h1 style={S.pageTitle}>Patients</h1>
            <p style={S.pageSub}>Today&apos;s optometry appointment queue</p>
          </div>
        </div>

        <div style={S.headerActions}>
          <div style={S.searchBox}>
            <svg style={S.searchIcon} width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="8" cy="8" r="6" stroke="#64748B" strokeWidth="1.8"/>
              <path d="M12.5 12.5l3 3" stroke="#64748B" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            <input
              style={S.searchInput}
              placeholder="Search patient name, MRN or ICD"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && (
              <button style={S.clearBtn} onClick={() => setSearch("")}>✕</button>
            )}
          </div>
        </div>
      </div>

      {/* ── Table ── */}
      <div style={S.tableCard}>
        {/* Header */}
        <div style={S.thead}>
          <div style={S.th}>Patient</div>
          <div style={S.th}>Date &amp; Time</div>
          <div style={S.th}>Reports</div>
          <div style={{ ...S.th, textAlign: "right" }}>Action</div>
        </div>

        {/* Body */}
        {loading ? (
          Array.from({ length: 5 }, (_, i) => <ShimmerRow key={i} />)
        ) : filtered.length === 0 ? (
          <EmptyState
            icon="🧑‍⚕️"
            title={search ? "No patients match your search" : "No patients assigned"}
            message={search ? "Try a different name or MRN." : "Patients assigned to you will appear here once registered."}
          />
        ) : (
          filtered.map((p, idx) => (
            <PatientRow
              key={p.id ?? p.patient_id ?? p.mrn ?? idx}
              patient={p}
              idx={idx}
              onStart={() => setSelectedPatient(p)}
              onViewReports={() => openPatientReports(p)}
            />
          ))
        )}
      </div>

      {/* Footer count */}
      {!loading && filtered.length > 0 && (
        <div style={S.footerCount}>
          Showing <strong>{filtered.length}</strong> of <strong>{totalPatients || patients.length}</strong> patient{(totalPatients || patients.length) !== 1 ? "s" : ""}
        </div>
      )}
    </div>
  );
}

/* ── Sub-components ─────────────────────────────────────────────────────── */

function PageHeader({ title, sub, onBack, backLabel }) {
  return (
    <div style={S.pageHeader}>
      <div>
        <h1 style={S.pageTitle}>{title}</h1>
        {sub && <p style={S.pageSub}>{sub}</p>}
      </div>
      <button
        style={S.backBtn}
        onMouseEnter={e => e.currentTarget.style.background = "#F1F5F9"}
        onMouseLeave={e => e.currentTarget.style.background = "#fff"}
        onClick={onBack}
      >
        {backLabel}
      </button>
    </div>
  );
}

function PatientRow({ patient: p, idx, onStart, onViewReports }) {
  const [hovered, setHovered] = useState(false);
  const initial = ((p.name || p.email || "P")[0] || "P").toUpperCase();
  return (
    <div
      style={{
        ...S.tr,
        background: hovered ? "#F8FAFF" : idx % 2 === 0 ? "#fff" : "#FAFBFC",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Patient */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ ...S.avatar, background: AVATAR_COLORS[initial.charCodeAt(0) % AVATAR_COLORS.length] }}>
          {initial}
        </div>
        <div>
          <div style={S.tdName}>{p.name || p.email || "—"}</div>
          {(p.age || p.gender) && (
            <div style={S.tdSub}>{[p.age && `${p.age} yrs`, p.gender].filter(Boolean).join(" · ")}</div>
          )}
        </div>
      </div>

      {/* Appointment date & time */}
      <div style={S.tdSchedule}>{formatAppointmentDateTime(p)}</div>

      {/* Reports — same RAP session reports for this patient id */}
      <div>
        <button type="button" style={S.actionLink} onClick={onViewReports}>
          View Reports
        </button>
      </div>

      {/* Action */}
      <div style={{ textAlign: "right" }}>
        <button type="button" style={S.actionLink} onClick={onStart}>
          Begin Assessment
        </button>
      </div>
    </div>
  );
}

function AssessmentCard({ card, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        ...S.card,
        boxShadow: hovered ? `0 16px 40px ${card.accent}25` : "0 2px 8px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-4px)" : "none",
        borderTop: `3px solid ${card.accent}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
        <div style={{ ...S.cardIconWrap, background: card.accent + "12", color: card.accent }}>
          <span style={{ fontSize: 22 }}>{card.icon}</span>
        </div>
        <span style={{ ...S.cardTag, background: card.tagColor, color: card.tagText }}>
          {card.tag}
        </span>
      </div>

      {/* Title */}
      <div style={{ fontSize: 17, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{card.title}</div>

      {/* Description */}
      <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65, flex: 1 }}>{card.desc}</div>

      {/* Footer */}
      <div style={{
        marginTop: 20, paddingTop: 14,
        borderTop: "1px solid #f3f4f6",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: card.accent }}>Open Assessment</span>
        <div style={{
          width: 30, height: 30, borderRadius: "50%",
          background: card.accent, display: "flex",
          alignItems: "center", justifyContent: "center",
          color: "#fff", fontSize: 16, fontWeight: 700,
          transition: "transform .2s",
          transform: hovered ? "scale(1.1)" : "scale(1)",
        }}>›</div>
      </div>
    </div>
  );
}

/* ── Avatar color palette ───────────────────────────────────────────────── */
const AVATAR_COLORS = ["#DBEAFE", "#D1FAE5", "#FEF3C7", "#FCE7F3", "#EDE9FE", "#FFEDD5"];

/* ── Styles ─────────────────────────────────────────────────────────────── */
const S = {
  page:       { padding: "28px 28px 32px", minHeight: "100vh", fontFamily: "Inter, Roboto, sans-serif" },

  pageHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 22 },
  pageTitle:  { fontSize: 24, fontWeight: 800, color: "#0F172A", margin: "0 0 4px 0", lineHeight: 1.12 },
  pageSub:    { fontSize: 13, color: "#475569", margin: 0, opacity: 0.92 },
  headerBackBtn: {
    background: "#fff",
    border: "1px solid #D1D5DB",
    color: "#0F172A",
    borderRadius: 999,
    padding: "8px 14px",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(15,23,42,0.08)",
    transition: "background .15s, transform .15s",
  },
  backBtn:    {
    display: "inline-flex", alignItems: "center", gap: 6,
    background: "#fff", border: "1px solid #E2E8F0",
    color: "#475569", borderRadius: 8,
    padding: "8px 16px", fontSize: 13, fontWeight: 500,
    cursor: "pointer", whiteSpace: "nowrap",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
    transition: "background .15s",
  },

  /* toolbar */
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    marginBottom: 20,
  },
  headerTitleRow: {
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  headerActions: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    maxWidth: 520,
  },
  controls: { display: "flex", gap: 12, marginBottom: 18, alignItems: "flex-end", flexWrap: "wrap" },
  searchBox:    {
    width: "100%",
    maxWidth: 520,
    minWidth: 260,
    position: "relative",
    display: "flex", alignItems: "center",
    background: "#fff", border: "1px solid #D1D5DB",
    borderRadius: 16, boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
  },
  searchIcon:   { position: "absolute", left: 16, pointerEvents: "none", flexShrink: 0, color: "#94A3B8" },
  searchInput:  {
    width: "100%", padding: "12px 44px 12px 44px",
    border: "none", borderRadius: 16,
    fontSize: 13, fontWeight: 500, color: "#111827", background: "transparent",
    outline: "none", boxSizing: "border-box",
  },
  clearBtn:     { position: "absolute", right: 10, background: "none", border: "none", cursor: "pointer", color: "#64748B", fontSize: 13, padding: 2 },

  /* table */
  tableCard:  {
    background: "#fff", borderRadius: 28,
    border: "1px solid #E5E7EB", overflow: "hidden",
    boxShadow: "0 24px 80px rgba(15,23,42,0.08)",
  },
  thead:      {
    display: "grid", gridTemplateColumns: "2.2fr 1.5fr 1fr 1fr",
    padding: "18px 24px", background: "#F8FAFC",
    borderBottom: "1px solid #E6E8F0",
  },
  th:         { fontSize: 11, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.18em" },
  tr:         {
    display: "grid", gridTemplateColumns: "2.2fr 1.5fr 1fr 1fr",
    padding: "14px 20px", alignItems: "center",
    borderBottom: "1px solid #F1F5F9",
    transition: "background .15s, transform .15s",
  },

  avatar:     {
    width: 32, height: 32, borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 13, fontWeight: 700, color: "#1E40AF", flexShrink: 0,
  },
  tdName:     { fontSize: 15, fontWeight: 700, color: "#111827" },
  tdSub:      { fontSize: 12, color: "#6B7280", marginTop: 4, lineHeight: 1.4 },
  tdSchedule: { fontSize: 13, color: "#374151", lineHeight: 1.45, fontWeight: 500 },

  actionLink: {
    fontSize: 12,
    color: "#2563eb",
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    fontWeight: 600,
  },

  footerCount: { marginTop: 12, fontSize: 12, color: "#94A3B8", textAlign: "right" },

  /* cards */
  selectionPage: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: "calc(100vh - 56px)",
  
  },
  patientBanner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fff",
    borderBottom: "1px solid #e5e7eb",
    padding: "16px 28px",
    flexWrap: "wrap",
    gap: 16,
    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
  },
  patientAvatar: {
    width: 44, height: 44, borderRadius: 10,
    background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
    color: "#fff", fontSize: 15, fontWeight: 800,
    display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0, letterSpacing: "0.5px",
  },
  patientName: { fontSize: 17, fontWeight: 700, color: "#0f172a" },
  patientMeta: { fontSize: 12, color: "#6b7280", marginTop: 3 },
  patientBannerRight: { display: "flex", alignItems: "center", gap: 24 },
  bannerStat: { textAlign: "center" },
  bannerStatVal: { fontSize: 15, fontWeight: 700, color: "#111827" },
  bannerStatLabel: { fontSize: 11, color: "#9ca3af", marginTop: 2 },
  bannerDivider: { width: 1, height: 30, background: "#e5e7eb" },
  selectionBody: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 28px",
  },
  selectionHeading: {
    fontSize: 22, fontWeight: 700, color: "#0f172a",
    marginBottom: 6, textAlign: "center",
  },
  selectionSubheading: {
    fontSize: 14, color: "#6b7280",
    marginBottom: 32, textAlign: "center",
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 18,
    width: "100%",
    maxWidth: 860,
  },
  card: {
    background: "#fff",
    border: "1px solid #e9ecef",
    borderRadius: 14,
    padding: "22px 22px 18px",
    cursor: "pointer",
    transition: "box-shadow .2s, transform .2s",
    display: "flex", flexDirection: "column",
    minHeight: 200,
  },
  cardTag: {
    display: "inline-block",
    padding: "3px 10px",
    borderRadius: 20,
    fontSize: 11,
    fontWeight: 600,
  },
  cardIconWrap: {
    width: 46, height: 46, borderRadius: 12,
    display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0,
  },
};
