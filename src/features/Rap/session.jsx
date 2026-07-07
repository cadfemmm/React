import Assessment from "./assessment";
import api from "../../shared/api/apiClient";
import EmptyState from "../../shared/ui/EmptyState";
import { ShimmerRow } from "../../shared/ui/Shimmer";
import { API_URL } from "../../platform/config/api.config";
import React, { useEffect, useMemo, useState } from "react";
import pdfLogo from "../../assets/pdf logo.webp";


const ASSESSMENT_GRID_COLUMNS = "1.8fr 1.1fr 1.1fr 1fr 1fr 1fr 1.2fr";


function formatDate(value, { includeTime = false } = {}) {
    if (value == null || value === "") {
        return "—";
    }
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) {
        return String(value);
    }
    if (includeTime) {
        return d.toLocaleString('en-IN', {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
        });
    }

    return d.toLocaleDateString('en-IN', {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

function SessionRow({ sessionData, idx, onViewReport, onOpenAssessment }) {
    const [hovered, setHovered] = useState(false);
    const dateCellStyle = {
        fontSize: 12,
        fontWeight: 600,
        overflow: "hidden",
        color: "#6B7280",
        lineHeight: 1.4,
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    };

    return (
        <div
            style={{
                padding: "18px 24px",
                display: "grid",
                gridTemplateColumns:
                    ASSESSMENT_GRID_COLUMNS,
                alignItems: "center",
                borderBottom: "1px solid #F1F5F9",
                background: hovered
                    ? "#F8FAFF"
                    : idx % 2 === 0
                        ? "#fff"
                        : "#FAFBFC",
                transition: "background .15s",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.18em",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    minWidth: 0,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        minWidth: 0,
                    }}
                >
                    {/* Copy Icon */}
                    <button
                        type="button"
                        title="Copy Session ID"
                        onClick={(e) => {
                            e.stopPropagation();

                            navigator.clipboard.writeText(
                                String(sessionData.id || "")
                            );
                        }}
                        style={{
                            border: "none",
                            background: "transparent",
                            padding: 0,
                            margin: 0,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                        }}
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M8 8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V14C21 15.1046 20.1046 16 19 16H16"
                                stroke="#64748B"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <rect
                                x="3"
                                y="8"
                                width="13"
                                height="13"
                                rx="2"
                                stroke="#64748B"
                                strokeWidth="2"
                            />
                        </svg>
                    </button>

                    {/* Short UUID */}
                    <div
                        title={sessionData.id}
                        onClick={(e) => {
                            e.stopPropagation();
                            onOpenAssessment?.(sessionData);
                        }}
                        style={{
                            fontSize: 12,
                            fontWeight: 700,
                            color: hovered
                            ? "#1D4ED8"
                            : "#2563EB",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            minWidth: 0,
                            textDecoration: hovered
                            ? "underline"
                            : "none",
                            cursor: 'pointer'
                        }}
                    >
                        {sessionData.id
                            ? `${String(sessionData.id).slice(0, 8)}...`
                            : "—"}
                    </div>
                </div>
                <div
                    style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#6B7280",
                        marginTop: 4,
                        lineHeight: 1.3,
                    }}
                >
                    {formatDate(sessionData.updated_at, {
                        includeTime: true,
                    })}
                </div>
            </div>
            <div style={dateCellStyle}>
                            {sessionData.department_name}
                        </div>
            <div style={dateCellStyle}>
                {sessionData.visit_type}
            </div>
            <div style={dateCellStyle}>
                {sessionData.is_completed ? 'Yes' : 'No'}
            </div>
            <div style={dateCellStyle}>
                {sessionData?.duration || '-'}
            </div>
            <div style={dateCellStyle}>
                {sessionData?.total_score || 0}
            </div>
            <div style={{ ...dateCellStyle, display: "flex", alignItems: "center", gap: 8 }}>
                <span>{sessionData?.progress_percentage || 0}</span>
                <button
                    type="button"
                    title="View session report"
                    onClick={(e) => {
                        e.stopPropagation();
                        onViewReport?.(sessionData);
                    }}
                    style={{
                        border: "1px solid #cbd5e1",
                        background: "#fff",
                        borderRadius: 6,
                        width: 26,
                        height: 26,
                        cursor: "pointer",
                        color: "#1d4ed8",
                        fontSize: 14,
                        lineHeight: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    👁
                </button>
            </div>
        </div>
    );
}

export default function SOAPSession({
    patient,
    onBack,
}) {
    const [search, setSearch] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [sessionData, setSessionData] = useState([]);
    const [selectedSession, setSelectedSession] = useState(null);
    const [selectedAssessmentSession, setSelectedAssessmentSession] = useState(null);
    const [combinedSessionContent, setCombinedSessionContent] = useState([]);
    const [reportLoading, setReportLoading] = useState(false);

    useEffect(() => {
        if (!patient?.id) {
            setLoading(false);
            setSessionData([]);
            setError("Patient data is missing.");
            return;
        }

        const fetchSessions = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await api.get(
                    API_URL.patientAssessments(patient.id)
                );

                setSessionData(
                    response?.data?.results || []
                );
            } catch (e) {
                setSessionData([]);
                setError(
                    "Failed to load SOAP sessions for this patient."
                );
            } finally {
                setLoading(false);
            }
        };

        fetchSessions();
    }, [patient]);

    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) {
            return sessionData;
        }

        return sessionData.filter((a) => {
            return (
                String(a.id || '-').includes(q) ||
                String(a.visit_type || '-').includes(q) ||
                String(a.is_completed || '').includes(q) ||
                String(a.duration || '-').includes(q) ||
                String(a.total_score || 0).includes(q) ||
                String(a.progress_percentage || 0).includes(q) ||
                String(formatDate(
                    a.updated_at, { includeTime: true }).toLowerCase()|| '-'
                ).includes(q) 
            );
        });
    }, [sessionData, search]);

    const loadCombinedSessionContent = async (session) => {
        const assessmentItems = Array.isArray(session?.assessment_ids)
            ? session.assessment_ids
            : [];

        if (assessmentItems.length === 0) {
            setCombinedSessionContent([]);
            return;
        }

        setReportLoading(true);
        try {
            const responses = await Promise.all(
                assessmentItems
                    .map((item) => item?.id)
                    .filter(Boolean)
                    .map((assessmentId) =>
                        api.get(API_URL.assessmentFormData(assessmentId)).catch(() => null),
                    ),
            );

            const merged = [];
            responses.forEach((res, idx) => {
                const payload = res?.data?.data;
                if (!payload || typeof payload !== "object") return;

                const source =
                    assessmentItems[idx]?.name ||
                    assessmentItems[idx]?.type ||
                    `Assessment ${idx + 1}`;

                Object.entries(payload).forEach(([key, value]) => {
                    if (value === null || value === undefined || value === "") return;
                    const renderedValue = Array.isArray(value)
                        ? value.join(", ")
                        : typeof value === "object"
                            ? JSON.stringify(value)
                            : String(value);
                    merged.push({
                        source,
                        key: String(key).replaceAll("_", " "),
                        value: renderedValue,
                    });
                });
            });

            setCombinedSessionContent(merged);
        } finally {
            setReportLoading(false);
        }
    };

    const handleViewSessionReport = async (session) => {
        setSelectedSession(session);
        await loadCombinedSessionContent(session);
    };

    if (selectedAssessmentSession) {
        return (
            <Assessment
                patient={patient}
                session={selectedAssessmentSession}
                onBack={() => setSelectedAssessmentSession(null)}
            />
        );
    }

    return (
        <div
            style={{
                padding: "2px 28px 32px",
                minHeight: "100vh",
                fontFamily:
                    "Inter, Roboto, sans-serif",
            }}
        >
            {/* Header */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 20,
                    marginBottom: 20,
                    flexWrap: "wrap",
                }}
            >
                {/* <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                    }}
                >
                    <button
                        type="button"
                        onClick={onBack}
                        className="dash-btn-outline"
                        style={{
                            padding: "8px 14px",
                            borderRadius: 999,
                            fontSize: 13,
                            fontWeight: 600,
                            cursor: "pointer",
                            boxShadow:
                                "0 8px 20px rgba(15,23,42,0.08)",
                        }}
                    >
                        ← Back
                    </button>

                    <div>
                        <h1
                            style={{
                                fontSize: 24,
                                fontWeight: 800,
                                color: "#0F172A",
                                margin: "0 0 4px 0",
                            }}
                        >
                            {patient?.name ||
                                patient?.email ||
                                "Patient"}
                        </h1>

                        <p
                            style={{
                                fontSize: 13,
                                color: "#475569",
                                margin: 0,
                            }}
                        >
                            SOAP Session
                            {patient?.id
                                ? ` · ID ${patient.id}`
                                : ""}
                        </p>
                    </div>
                </div> */}

                {/* Search */}
                <div
                    // style={{
                    //     width: "100%",
                    //     maxWidth: 520,
                    //     position: "relative",
                    //     display: "flex",
                    //     alignItems: "center",
                    //     background: "#fff",
                    //     border: "1px solid #D1D5DB",
                    //     borderRadius: 16,
                    //     boxShadow:
                    //         "0 10px 30px rgba(15,23,42,0.08)",
                    // }}
                >
                    {/* <svg
                        style={{
                            position: "absolute",
                            left: 16,
                            pointerEvents: "none",
                        }}
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                    >
                        <circle
                            cx="8"
                            cy="8"
                            r="6"
                            stroke="#64748B"
                            strokeWidth="1.8"
                        />
                        <path
                            d="M12.5 12.5l3 3"
                            stroke="#64748B"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                        />
                    </svg> */}

                    {/* <input
                        style={{
                            width: "100%",
                            padding: "12px 44px",
                            border: "none",
                            borderRadius: 16,
                            fontSize: 13,
                            fontWeight: 500,
                            color: "#111827",
                            background: "transparent",
                            outline: "none",
                        }}
                        placeholder="Search name, form type, or date"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    /> */}

                    {search && (
                        <button
                            type="button"
                            style={{
                                position: "absolute",
                                right: 10,
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                color: "#64748B",
                                fontSize: 13,
                            }}
                            onClick={() => setSearch("")}
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>

            {/* Table */}
            <div
                style={{
                    background: "#fff",
                    borderRadius: 28,
                    border: "1px solid #E5E7EB",
                    overflow: "hidden",
                    boxShadow:
                        "0 24px 80px rgba(15,23,42,0.08)",
                }}
            >
                {/* Header */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            ASSESSMENT_GRID_COLUMNS,
                        padding: "18px 24px",
                        background: "#F8FAFC",
                        borderBottom:
                            "1px solid #E6E8F0",
                    }}
                >
                    {[
                        "Session ID\nLast Updated",
                        "Department",
                        "Visit Type",
                        "Completed",
                        "Duration",
                        "Score",
                        "Progress (%)",
                    ].map((h) => (
                        <div
                            key={h}
                            style={{
                                fontSize: 10,
                                fontWeight: 500,
                                color: "#64748B",
                                textTransform:
                                    "uppercase",
                                letterSpacing: "0.18em",
                            }}
                        >
                            {h}
                        </div>
                    ))}
                </div>

                {/* Body */}
                {loading ? (
                    Array.from(
                        { length: 5 },
                        (_, i) => (
                            <ShimmerRow key={i} />
                        )
                    )
                ) : error ? (
                    <EmptyState
                        icon="⚠️"
                        title="Unable to load SOAP sessions"
                        message={error}
                    />
                ) : filtered.length === 0 ? (
                    <EmptyState
                        icon="📋"
                        title={
                            search
                                ? "No SOAP sessions match your search"
                                : "No SOAP sessions found"
                        }
                        message={
                            search
                                ? "Try a different SOAP session id or form type."
                                : "This patient has no SOAP sessions recorded yet."
                        }
                    />
                ) : (
                    filtered.map((a, idx) => (
                        <SessionRow
                            key={
                                a.id ??
                                a.form_data_id ??
                                a.assessment_id ??
                                `row-${idx}`
                            }
                            sessionData={a}
                            idx={idx}
                            onViewReport={handleViewSessionReport}
                            onOpenAssessment={setSelectedAssessmentSession}
                        />
                    ))
                )}
            </div>

            {!loading &&
                !error &&
                filtered.length > 0 && (
                    <div
                        style={{
                            marginTop: 12,
                            fontSize: 12,
                            color: "#94A3B8",
                            textAlign: "right",
                        }}
                    >
                        Showing{" "}
                        <strong>
                            {filtered.length}
                        </strong>{" "}
                        of{" "}
                        <strong>
                            {sessionData.length}
                        </strong>{" "}
                        SOAP Session
                        {sessionData.length !== 1
                            ? "s"
                            : ""}
                    </div>
                )}

            {selectedSession && (
                <div
                    className="rap-pdf-overlay"
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(15, 23, 42, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 9999,
                        padding: 16,
                    }}
                >
                    <div
                        className="rap-pdf-shell"
                        style={{
                            width: "min(920px, 96vw)",
                            maxHeight: "92vh",
                            overflowY: "auto",
                            borderRadius: 12,
                            background: "#fff",
                            border: "1px solid #e2e8f0",
                            boxShadow: "0 14px 30px rgba(0,0,0,0.2)",
                        }}
                    >
                        <div
                            className="rap-pdf-toolbar"
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "12px 16px",
                                borderBottom: "1px solid #e2e8f0",
                            }}
                        >
                            <strong style={{ color: "#0f172a" }}>Session Report (PDF View)</strong>
                            <div style={{ display: "flex", gap: 8 }}>
                                <button
                                    type="button"
                                    onClick={() => window.print()}
                                    style={{
                                        border: "1px solid #cbd5e1",
                                        borderRadius: 8,
                                        background: "#fff",
                                        padding: "6px 10px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Print / Save PDF
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setSelectedSession(null)}
                                    style={{
                                        border: "1px solid #cbd5e1",
                                        borderRadius: 8,
                                        background: "#fff",
                                        padding: "6px 10px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Close
                                </button>
                            </div>
                        </div>

                        <div className="rap-pdf-page-wrap" style={{ padding: 24, background: "#f8fafc" }}>
                            <div
                                className="rap-pdf-page"
                                style={{
                                    width: "100%",
                                    maxWidth: 800,
                                    margin: "0 auto",
                                    background: "#fff",
                                    border: "1px solid #dbe5f0",
                                    
                                    padding: 24,
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginBottom: 16,
                                        borderBottom: "1px solid #111827",
                                        paddingBottom: 12,
                                    }}
                                >
                                    <img
                                        src={pdfLogo}
                                        alt="PDF Logo"
                                        style={{ height: 110, objectFit: "contain", marginBottom: 6 }}
                                    />
                                    <div style={{ textAlign: "center", fontSize: 18, fontWeight: 800, color: "#111827" }}>
                                       SESSION REPORT
                                    </div>
                                </div>
                                <div style={{ textAlign: "right", fontSize: 14, fontWeight: 700, marginBottom: 18 }}>
                                    {new Date().toLocaleDateString("en-GB", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </div>

                                <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 22 }}>
                                    <tbody>
                                        {[
                                            ["Name", patient?.name || patient?.patient_name || "—"],
                                            ["IC number/ Passport number", patient?.ic_number || patient?.ic || "—"],
                                            ["Diagnosis", patient?.diagnosis || patient?.diagnosis_history || patient?.icd || "—"],
                                            ["Date of admission", patient?.admission_date || "—"],
                                            ["Date of discharge", patient?.discharge_date || "—"],
                                        ].map(([label, value]) => (
                                            <tr key={label}>
                                                <th
                                                    style={{
                                                        textAlign: "left",
                                                        width: "28%",
                                                        border: "1px solid #111827",
                                                        padding: "8px 10px",
                                                        background: "#fff",
                                                        color: "#111827",
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    {label}
                                                </th>
                                                <td style={{ border: "1px solid #111827", padding: "8px 10px" }}>{value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div style={{ fontWeight: 800, textDecoration: "underline", marginBottom: 8 }}>
                                    SESSION COMBINED CONTENT
                                </div>
                                {reportLoading ? (
                                    <div style={{ fontSize: 13, color: "#475569", marginBottom: 12 }}>
                                        Loading combined session content...
                                    </div>
                                ) : combinedSessionContent.length === 0 ? (
                                    <div style={{ fontSize: 13, color: "#475569", marginBottom: 12 }}>
                                        No report content found inside this session.
                                    </div>
                                ) : (
                                    <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 18 }}>
                                        <thead>
                                            <tr>
                                                <th style={{ textAlign: "left", border: "1px solid #111827", padding: "8px 10px", width: "24%" }}>Report</th>
                                                <th style={{ textAlign: "left", border: "1px solid #111827", padding: "8px 10px", width: "24%" }}>Field</th>
                                                <th style={{ textAlign: "left", border: "1px solid #111827", padding: "8px 10px" }}>Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {combinedSessionContent.map((row, idx) => (
                                                <tr key={`${row.source}-${row.key}-${idx}`}>
                                                    <td style={{ border: "1px solid #111827", padding: "8px 10px", fontWeight: 600 }}>{row.source}</td>
                                                    <td style={{ border: "1px solid #111827", padding: "8px 10px" }}>{row.key}</td>
                                                    <td style={{ border: "1px solid #111827", padding: "8px 10px", whiteSpace: "pre-wrap" }}>{row.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>

                        <style>{`
                          @media print {
                            body * {
                              visibility: hidden !important;
                            }
                            .rap-pdf-overlay, .rap-pdf-overlay * {
                              visibility: visible !important;
                            }
                            .rap-pdf-overlay {
                              position: static !important;
                              background: #fff !important;
                              padding: 0 !important;
                            }
                            .rap-pdf-shell {
                              width: 100% !important;
                              max-height: none !important;
                              border: none !important;
                              box-shadow: none !important;
                              overflow: visible !important;
                            }
                            .rap-pdf-toolbar {
                              display: none !important;
                            }
                            .rap-pdf-page-wrap {
                              background: #fff !important;
                              padding: 0 !important;
                            }
                            .rap-pdf-page {
                              max-width: 100% !important;
                              border: none !important;
                              border-radius: 0 !important;
                              padding: 8mm !important;
                            }
                          }
                        `}</style>
                    </div>
                </div>
            )}
        </div>
    );
}