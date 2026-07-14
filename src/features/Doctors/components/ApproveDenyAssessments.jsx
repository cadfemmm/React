import React, { useEffect, useState } from "react";
import axios from "axios";
import { ShimmerRow } from "../../../shared/ui/Shimmer";
import EmptyState from "../../../shared/ui/EmptyState";
import { Eye } from "lucide-react";
import { updatePatientApprovalStatus } from "../../../shared/api/patientsList";
import { getCookie } from "../../../shared/api/apiClient";

const externalApi = axios.create();
externalApi.interceptors.request.use((config) => {
  const token = getCookie("access_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const AVATAR_COLORS = ["#DBEAFE", "#D1FAE5", "#FEF3C7", "#FCE7F3", "#EDE9FE", "#FFEDD5"];

/**
 * Shows all form-response assessments for a patient and lets the doctor
 * Approve or Deny each one.
 *
 * Props:
 *   patient  – patient object (id / patient_id / mrn, name, etc.)
 *   onBack   – fn to go back to the patient list
 */
export default function ApproveDenyAssessments({ patient, onBack, onPatientUpdated }) {
  const [assessments, setAssessments] = useState([]);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState(null);
  const [decisionLoading, setDecisionLoading] = useState(false);
  const [patientDecision, setPatientDecision] = useState(null);
  const [selectedAssessment, setSelectedAssessment] = useState(null);
  const [showDenyModal, setShowDenyModal] = useState(false);
  const [denyReason, setDenyReason] = useState("");
  const [showViewer, setShowViewer] = useState(false);
  const patientId = patient?.id || patient?.patient_id || patient?.mrn;
  const displayName = patient?.name || patient?.patient_name || patient?.email || "Patient";
  const initial = (displayName[0] || "P").toUpperCase();
  const avatarBg = AVATAR_COLORS[initial.charCodeAt(0) % AVATAR_COLORS.length];

  /* ── Fetch assessments ── */
  useEffect(() => {
    if (!patientId) return;
    setLoading(true);
    setError(null);

    externalApi
      .get(`https://api.dev.rehab-software.com/api/v1/dynamic-form/form-response/with-data/${patientId ? `?patient_id=${encodeURIComponent(patientId)}` : ""}`)
      .then((res) => {
        // Normalise: plain array, { results }, { data }, { data: { results } }
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
        setAssessments(list);
      })
      .catch((err) => {
        console.error("Failed to load assessments:", err);
        setError(err?.response?.status === 401
          ? "Unauthorised — your session may have expired. Please log in again."
          : "Failed to load assessments. Please try again.");
      })
      .finally(() => setLoading(false));
  }, [patientId]);

  /* ── Approve / Deny patient (updates approval_status via partial-update) ── */
  const handlePatientDecision = async (action, reason = "") => {
    if (!patientId || decisionLoading) return;

    if (action === "deny" && !reason.trim()) {
      alert("Please enter denial reason");
      return;
    }

    setDecisionLoading(true);
    setError(null);

    try {
      const approvalStatus = action === "approve" ? "APPROVED" : "DENIED";
      const extra =
        action === "deny" && reason.trim()
          ? { denial_reason: reason.trim() }
          : {};

      await updatePatientApprovalStatus(patientId, approvalStatus, extra);

      setPatientDecision(action === "approve" ? "approved" : "denied");
      onPatientUpdated?.({ patientId, approval_status: approvalStatus });
      onBack?.();
    } catch (err) {
      console.error(`Failed to ${action} patient:`, err?.response?.data || err);
      setError(
        err?.response?.data?.message ||
          err?.response?.data?.detail ||
          `Failed to ${action} patient. Please try again.`,
      );
    } finally {
      setDecisionLoading(false);
    }
  };
  return (
    <div style={{ padding: "28px 28px 40px", minHeight: "100vh", fontFamily: "Inter, Roboto, sans-serif", background: "#F8FAFC" }}>

      {/* ── Header ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
        <button
          onClick={onBack}
          className="dash-btn-outline"
          style={{ padding: "8px 14px", borderRadius: 999, fontSize: 13, fontWeight: 600, cursor: "pointer", boxShadow: "0 8px 20px rgba(15,23,42,0.08)" }}
        >
          ← Back
        </button>

        {/* Patient badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: avatarBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800, color: "#1E40AF", flexShrink: 0 }}>
            {initial}
          </div>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#0F172A" }}>{displayName}</div>
            <div style={{ fontSize: 13, color: "#64748B", marginTop: 2 }}>
              {[
                patient?.mrn && `MRN: ${patient.mrn}`,
                patient?.age  && `${patient.age} yrs`,
                patient?.gender,
              ].filter(Boolean).join("  ·  ") || "Assessment review"}
            </div>
          </div>
        </div>
      </div>

      {/* ── Section title ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 18,
        }}
      >
        {/* Left title */}
        <div
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: "#374151",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Assessments ({loading ? "…" : assessments.length})
        </div>

        {/* Right actions */}
        <div style={{ display: "flex", gap: 10 }}>
          
          {/* Approve All */}
          <button
            disabled={decisionLoading || patientDecision === "approved"}
            onClick={() => handlePatientDecision("approve")}
            style={{
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px solid #16A34A",
              background: decisionLoading ? "#86EFAC" : "#16A34A",
              color: "#fff",
              fontWeight: 700,
              fontSize: 13,
              cursor: decisionLoading ? "wait" : "pointer",
              boxShadow: "0 8px 18px rgba(22,163,74,0.18)",
            }}
          >
            {decisionLoading ? "Updating…" : "✓ Approve"}
          </button>

          {/* Deny */}
          <button
            disabled={decisionLoading || patientDecision === "denied"}
            onClick={() => setShowDenyModal(true)}
            style={{
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px solid #DC2626",
              background: "#fff",
              color: "#DC2626",
              fontWeight: 700,
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            ✕ Deny
          </button>
        </div>
      </div>

      {/* ── Error ── */}
      {error && (
        <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 12, padding: "14px 18px", color: "#B91C1C", fontSize: 14, marginBottom: 20 }}>
          {error}
        </div>
      )}

      {/* ── Table ── */}
      <div style={{ background: "#fff", borderRadius: 20, border: "1px solid #E5E7EB", overflow: "hidden", boxShadow: "0 12px 40px rgba(15,23,42,0.07)" }}>

        {/* Table header */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 2.2fr 1.2fr 1fr 2fr", padding: "16px 22px", background: "#F8FAFC", borderBottom: "1px solid #E6E8F0" }}>
          {["Assessment / Form", "Submission Status", "Date", "Status", "Action"].map((h) => (
            <div key={h} style={{ fontSize: 11, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.18em" }}>{h}</div>
          ))}
        </div>

        {/* Rows */}
        {loading
          ? Array.from({ length: 4 }, (_, i) => <ShimmerRow key={i} />)
          : assessments.length === 0 && !error
          ? <EmptyState icon="📋" title="No assessments found" message="No form responses have been submitted for this patient yet." />
          : assessments.map((a, idx) => {
              const id       = a.id || a.form_response_id;
              const formName = a.form_template_name || a.form_name || a.form?.name || a.title || `Assessment #${idx + 1}`;
              const submitter = a.submission_status || a.submitted_by || a.created_by?.name || a.created_by || "—";
              const dateRaw  = a.submitted_at || a.created_at || a.date;
              const date     = dateRaw ? new Date(dateRaw).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : "—";
              const status   = (a.status || "pending").toLowerCase();

              const statusStyle = {
                approved: { bg: "#ECFDF5", color: "#166534", border: "#A7F3D0", dot: "#22C55E", label: "Approved" },
                denied:   { bg: "#FEF2F2", color: "#991B1B", border: "#FECACA", dot: "#EF4444", label: "Denied"   },
                pending:  { bg: "#FFFBEB", color: "#92400E", border: "#FDE68A", dot: "#F59E0B", label: "Pending"  },
              }[status] || { bg: "#F8FAFC", color: "#64748B", border: "#E2E8F0", dot: "#94A3B8", label: status };

              return (
                <div
                  key={id || idx}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1.2fr 1.2fr 1fr 2fr",
                    padding: "16px 24px",
                    alignItems: "center",
                    borderBottom: "1px solid #F1F5F9",
                    background: idx % 2 === 0 ? "#fff" : "#FAFBFC",
                  }}
                >
                  {/* Form name */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#0F172A",
                      lineHeight: 1.3,
                    }}
                  >
                    {formName}
                  </div>

                  <div
                    style={{
                      fontSize: 12,
                      color: "#64748B",
                      fontWeight: 500,
                    }}
                  >
                    ID: {id?.slice?.(0, 8) || idx + 1}
                  </div>
                </div>

                  {/* Submitted by */}
                  <div style={{ fontSize: 13, color: "#6B7280" }}>{submitter}</div>

                  {/* Date */}
                  <div style={{ fontSize: 13, color: "#6B7280" }}>{date}</div>

                  {/* Status pill */}
                  <div>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 10px", borderRadius: 999, fontSize: 12, fontWeight: 700, background: statusStyle.bg, color: statusStyle.color, border: `1px solid ${statusStyle.border}` }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: statusStyle.dot }} />
                      {statusStyle.label}
                    </span>
                  </div>

                  {/* Approve / Deny buttons */}
                 <div style={{ display: "flex", gap: 8, alignItems: "center" }}>

                {/* Eye button */}
                <button
                  onClick={() => {
                    setSelectedAssessment(a);
                    setShowViewer(true);
                  }}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 999,
                    border: "1px solid #CBD5E1",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all .18s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#EEF2FF";
                    e.currentTarget.style.borderColor = "#6366F1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.borderColor = "#CBD5E1";
                  }}
                >
                  <Eye size={18} color="#4F46E5" />
                </button>

                {patientDecision === "approved" ? (
                  <span style={{ fontSize: 13, color: "#16A34A", fontWeight: 600 }}>
                    ✓ Approved
                  </span>
                ) : patientDecision === "denied" ? (
                  <span style={{ fontSize: 13, color: "#DC2626", fontWeight: 600 }}>
                    ✕ Denied
                  </span>
                ) : null}
              </div>
                </div>
              );
            })
        }
      </div>

      {!loading && assessments.length > 0 && (
        <div style={{ marginTop: 12, fontSize: 12, color: "#94A3B8", textAlign: "right" }}>
          {assessments.length} assessment{assessments.length !== 1 ? "s" : ""} found
        </div>
      )}
                    {showDenyModal && (
                <div
                  style={{
                    position: "fixed",
                    inset: 0,
                    background: "rgba(15,23,42,0.55)",
                    zIndex: 9999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxWidth: 520,
                      background: "#fff",
                      borderRadius: 24,
                      padding: 28,
                      boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 22,
                        fontWeight: 800,
                        marginBottom: 10,
                        color: "#0F172A",
                      }}
                    >
                      Deny Assessment
                    </div>

                    <div
                      style={{
                        fontSize: 14,
                        color: "#64748B",
                        marginBottom: 20,
                      }}
                    >
                      Please specify the reason for denial.
                    </div>

                    <textarea
                      value={denyReason}
                      onChange={(e) => setDenyReason(e.target.value)}
                      placeholder="Enter denial reason..."
                      rows={5}
                      style={{
                        width: "100%",
                        borderRadius: 14,
                        border: "1px solid #CBD5E1",
                        padding: 14,
                        fontSize: 14,
                        resize: "vertical",
                        outline: "none",
                      }}
                    />

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: 10,
                        marginTop: 22,
                      }}
                    >
                      <button
                        onClick={() => {
                          setShowDenyModal(false);
                          setDenyReason("");
                        }}
                        style={{
                          padding: "10px 18px",
                          borderRadius: 999,
                          border: "1px solid #CBD5E1",
                          background: "#fff",
                          cursor: "pointer",
                          fontWeight: 600,
                        }}
                      >
                        Cancel
                      </button>

                      <button
                        disabled={decisionLoading}
                        onClick={() => handlePatientDecision("deny", denyReason)}
                        style={{
                          padding: "10px 20px",
                          borderRadius: 999,
                          border: "none",
                          background: "#DC2626",
                          color: "#fff",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        Submit Denial
                      </button>
                    </div>
                  </div>
                </div>
              )}
      {showViewer && selectedAssessment && (
  <div
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(15,23,42,0.55)",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
    }}
  >
    <div
      style={{
        width: "90%",
        maxWidth: 900,
        maxHeight: "85vh",
        overflowY: "auto",
        background: "#fff",
        borderRadius: 24,
        padding: 28,
        boxShadow: "0 25px 80px rgba(0,0,0,0.25)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "#0F172A",
            }}
          >
            Assessment Details
          </div>

          <div
            style={{
              marginTop: 6,
              color: "#64748B",
              fontSize: 14,
            }}
          >
            {selectedAssessment.form_name ||
              selectedAssessment.form?.name ||
              "Assessment"}
          </div>
        </div>

        <button
          onClick={() => setShowViewer(false)}
          style={{
            width: 40,
            height: 40,
            borderRadius: 999,
            border: "1px solid #E2E8F0",
            background: "#fff",
            cursor: "pointer",
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          ×
        </button>
      </div>

      {/* JSON/Form Data */}
      <div
        style={{
          background: "#0F172A",
          borderRadius: 18,
          padding: 20,
          overflowX: "auto",
        }}
      >
{/* Assessment Data Table */}
<div
  style={{
    border: "1px solid #E2E8F0",
    borderRadius: 18,
    overflow: "hidden",
    background: "#fff",
  }}
>
  {/* Header */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "280px 1fr",
      background: "#F8FAFC",
      borderBottom: "1px solid #E2E8F0",
      padding: "14px 18px",
    }}
  >
    <div
      style={{
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: "0.08em",
        color: "#64748B",
        textTransform: "uppercase",
      }}
    >
      Field
    </div>

    <div
      style={{
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: "0.08em",
        color: "#64748B",
        textTransform: "uppercase",
      }}
    >
      Response
    </div>
  </div>

  {/* Rows */}
  {Object.entries(selectedAssessment?.data_json || {}).map(
    ([key, value], index) => {
      const formattedValue = Array.isArray(value)
        ? value.join(", ")
        : typeof value === "object" && value !== null
        ? JSON.stringify(value)
        : String(value);

      return (
        <div
          key={key}
          style={{
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            padding: "16px 18px",
            borderBottom:
              index !==
              Object.entries(selectedAssessment?.data_json || {}).length - 1
                ? "1px solid #F1F5F9"
                : "none",
            background: index % 2 === 0 ? "#fff" : "#FAFBFC",
            alignItems: "start",
            gap: 16,
          }}
        >
          {/* Field Name */}
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#0F172A",
              lineHeight: 1.5,
            }}
          >
            {key}
          </div>

          {/* Value */}
          <div
            style={{
              fontSize: 14,
              color: "#475569",
              lineHeight: 1.7,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {formattedValue || "—"}
          </div>
        </div>
      );
    }
  )}
</div>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
