import React, { useMemo, useState } from "react";
import "../styles/RAPSessions.css";

export default function RAPSessions() {
  const [openReport, setOpenReport] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);

  const patientInfo = useMemo(
    () => ({
      name: "John Lee",
      patientId: "RAP-2025-1022",
      icNo: "901201-10-2244",
      ageGender: "35 / Male",
      diagnosis: "Post-stroke gait and balance deficit",
      episode: "Follow-up",
      primaryDoctor: "Dr. Rajiv Mehta",
      caseManager: "Case Manager",
      rehabStartDate: "2025-10-01",
    }),
    [],
  );

  const sessions = useMemo(
    () => [
      {
        date: "2025-10-22",
        time: "10:00",
        intervention: "VR Gait",
        resource: "VR-01 / R1",
        status: "Completed",
        progress: "72%",
        vitals: "BP 126/82, HR 84, SpO2 98%",
        therapist: "Ms. Aina",
        notes:
          "Improved stride symmetry with verbal cueing. Mild fatigue after 25 mins.",
        plan:
          "Increase treadmill pace by 0.2 km/h next session; continue balance transitions.",
      },
      {
        date: "2025-10-24",
        time: "11:00",
        intervention: "Balance Training",
        resource: "Gym-B / B3",
        status: "In Progress",
        progress: "58%",
        vitals: "BP 122/80, HR 86, SpO2 98%",
        therapist: "Mr. Haris",
        notes: "Single-leg stance tolerance increased to 9 seconds with support.",
        plan:
          "Add dual-task standing drill and close guarding during transfers.",
      },
    ],
    [],
  );

  const criteriaRows = useMemo(
    () => [
      {
        phase: "Phase 1",
        entry: "Berg +5.00 in 2.00 weeks",
        exit: "Walk 20.00 m unaided",
      },
    ],
    [],
  );

  const handleOpenReport = (session) => {
    setSelectedSession(session);
    setOpenReport(true);
  };

  return (
    <div className="schedule-container">
      {/* Header */}
      <div className="patient-header-light">
        <h2>Scheduling & Phases</h2>
        <div className="schedule-tags">
          <span className="tag">RAP State: Active</span>
          <span className="tag">Version: v3</span>
          <span className="tag">
            Managed by: <strong>Case Manager</strong>
          </span>
          <span className="tag">
            Approver: <strong>HOD (CMO oversight)</strong>
          </span>
          <span className="tag">Standards: ICD · ICF · ICHI · CARF</span>
          <div className="currency">
            Currency
            <select>
              <option>RM</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
        </div>
      </div>

      <h4 className="subheader">Criteria-based progression</h4>

      {/* Action Buttons */}
      <div className="schedule-actions">
        <div>
          <button className="primary-btn">Phases & Criteria</button>
          <button className="secondary-btn">Add Criteria</button>
        </div>
        <button className="secondary-btn right-btn">
          Auto alerts when criteria met
        </button>
      </div>

      {/* Criteria Table */}
      <div className="schedule-table-wrapper">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Phase</th>
              <th>Entry Criteria</th>
              <th>Exit Criteria</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Phase 1</td>
              <td>Berg +5.00 in 2.00 weeks</td>
              <td>Walk 20.00 m unaided</td>
            </tr>
          </tbody>
        </table>

        {/* Sub-actions */}
        <div className="sub-actions">
          <button className="secondary-btn">Scheduling</button>
          <button className="secondary-btn">Check Conflicts</button>
          <button className="secondary-btn">Notify Patient</button>
        </div>

        {/* Session Table */}
        <table className="schedule-table mt-2">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Intervention</th>
              <th>Resource</th>
              <th>Status</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((s) => (
              <tr key={`${s.date}-${s.time}-${s.intervention}`}>
                <td>{s.date}</td>
                <td>{s.time}</td>
                <td>{s.intervention}</td>
                <td>{s.resource}</td>
                <td>{s.status}</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span>{s.progress}</span>
                    <button
                      type="button"
                      onClick={() => handleOpenReport(s)}
                      title="View session PDF report"
                      style={{
                        border: "1px solid #cbd5e1",
                        background: "#fff",
                        borderRadius: 8,
                        width: 30,
                        height: 30,
                        cursor: "pointer",
                        color: "#1d4ed8",
                        fontSize: 15,
                        lineHeight: 1,
                      }}
                    >
                      👁
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {openReport && selectedSession && (
        <div
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
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 16px",
                borderBottom: "1px solid #e2e8f0",
              }}
            >
              <strong style={{ color: "#0f172a" }}>Session Report (PDF View)</strong>
              <button
                type="button"
                onClick={() => setOpenReport(false)}
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

            <div style={{ padding: 24, background: "#f8fafc" }}>
              <div
                style={{
                  width: "100%",
                  maxWidth: 800,
                  margin: "0 auto",
                  background: "#fff",
                  border: "1px solid #dbe5f0",
                  borderRadius: 10,
                  padding: 24,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 16,
                    borderBottom: "2px solid #e2e8f0",
                    paddingBottom: 12,
                  }}
                >
                  <img
                    src="/pdf%20logo.webp"
                    alt="PDF Logo"
                    style={{ height: 52, objectFit: "contain" }}
                  />
                  <div style={{ textAlign: "right", fontSize: 12, color: "#475569" }}>
                    <div>RAP Session Clinical Report</div>
                    <div>Generated on: {new Date().toLocaleString()}</div>
                  </div>
                </div>

                <h3 style={{ margin: "4px 0 12px", color: "#0f172a" }}>Patient Information</h3>
                <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 18 }}>
                  <tbody>
                    {[
                      ["Patient Name", patientInfo.name],
                      ["Patient ID", patientInfo.patientId],
                      ["IC No", patientInfo.icNo],
                      ["Age / Gender", patientInfo.ageGender],
                      ["Diagnosis", patientInfo.diagnosis],
                      ["Episode", patientInfo.episode],
                      ["Primary Doctor", patientInfo.primaryDoctor],
                      ["Case Manager", patientInfo.caseManager],
                      ["Rehab Start Date", patientInfo.rehabStartDate],
                    ].map(([label, value]) => (
                      <tr key={label}>
                        <th
                          style={{
                            textAlign: "left",
                            width: "32%",
                            border: "1px solid #e2e8f0",
                            padding: "8px 10px",
                            background: "#f8fafc",
                            color: "#334155",
                          }}
                        >
                          {label}
                        </th>
                        <td style={{ border: "1px solid #e2e8f0", padding: "8px 10px" }}>
                          {value || "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <h3 style={{ margin: "4px 0 12px", color: "#0f172a" }}>Session Content</h3>
                <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 18 }}>
                  <tbody>
                    {[
                      ["Session Date", selectedSession.date],
                      ["Session Time", selectedSession.time],
                      ["Intervention", selectedSession.intervention],
                      ["Resource", selectedSession.resource],
                      ["Status", selectedSession.status],
                      ["Progress", selectedSession.progress],
                      ["Therapist", selectedSession.therapist],
                      ["Vitals", selectedSession.vitals],
                      ["Clinical Notes", selectedSession.notes],
                      ["Next Plan", selectedSession.plan],
                    ].map(([label, value]) => (
                      <tr key={label}>
                        <th
                          style={{
                            textAlign: "left",
                            width: "32%",
                            border: "1px solid #e2e8f0",
                            padding: "8px 10px",
                            background: "#f8fafc",
                            color: "#334155",
                            verticalAlign: "top",
                          }}
                        >
                          {label}
                        </th>
                        <td
                          style={{
                            border: "1px solid #e2e8f0",
                            padding: "8px 10px",
                            whiteSpace: "pre-wrap",
                          }}
                        >
                          {value || "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <h3 style={{ margin: "4px 0 12px", color: "#0f172a" }}>Phase Criteria Snapshot</h3>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      {["Phase", "Entry Criteria", "Exit Criteria"].map((h) => (
                        <th
                          key={h}
                          style={{
                            textAlign: "left",
                            border: "1px solid #e2e8f0",
                            padding: "8px 10px",
                            background: "#f1f5f9",
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {criteriaRows.map((c) => (
                      <tr key={c.phase}>
                        <td style={{ border: "1px solid #e2e8f0", padding: "8px 10px" }}>{c.phase}</td>
                        <td style={{ border: "1px solid #e2e8f0", padding: "8px 10px" }}>{c.entry}</td>
                        <td style={{ border: "1px solid #e2e8f0", padding: "8px 10px" }}>{c.exit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
