import React, { useState } from "react";

const DEFAULT_ROWS = 3;

function emptyRow() {
  return {
    date: "",
    time: "",
    length: "",
    width: "",
    area: 0,
    lengthScore: 0,
    exudate: "",
    exudateScore: 0,
    tissue: "",
    tissueScore: 0,
    totalScore: 0,
  };
}

function calcLengthScore(area) {
  if (!Number.isFinite(area) || area <= 0) return 0;
  if (area < 0.3) return 1;
  if (area <= 0.6) return 2;
  if (area <= 1.0) return 3;
  if (area <= 2.0) return 4;
  if (area <= 3.0) return 5;
  if (area <= 4.0) return 6;
  if (area <= 8.0) return 7;
  if (area <= 12.0) return 8;
  if (area <= 24.0) return 9;
  return 10;
}

const EXUDATE_OPTIONS = [
  { label: "None (0)", value: "none", score: 0 },
  { label: "Light (1)", value: "light", score: 1 },
  { label: "Moderate (2)", value: "moderate", score: 2 },
  { label: "Heavy (3)", value: "heavy", score: 3 },
];

const TISSUE_OPTIONS = [
  { label: "Closed (0)", value: "closed", score: 0 },
  { label: "Epithelial Tissue (1)", value: "epithelial", score: 1 },
  { label: "Granulation Tissue (2)", value: "granulation", score: 2 },
  { label: "Slough (3)", value: "slough", score: 3 },
  { label: "Necrotic Tissue (4)", value: "necrotic", score: 4 },
];

export default function PUSHTool({ patient }) {
  const [rows, setRows] = useState(Array.from({ length: DEFAULT_ROWS }, emptyRow));

  const updateRow = (idx, patch) => {
    setRows((prev) =>
      prev.map((r, i) => {
        if (i !== idx) return r;
        const next = { ...r, ...patch };
        const lengthNum = parseFloat(next.length) || 0;
        const widthNum = parseFloat(next.width) || 0;
        const area = lengthNum * widthNum;
        const lengthScore = calcLengthScore(area);
        const exOpt = EXUDATE_OPTIONS.find((o) => o.value === next.exudate);
        const tissueOpt = TISSUE_OPTIONS.find((o) => o.value === next.tissue);
        const exudateScore = exOpt ? exOpt.score : 0;
        const tissueScore = tissueOpt ? tissueOpt.score : 0;
        const totalScore = lengthScore + exudateScore + tissueScore;
        return {
          ...next,
          area,
          lengthScore,
          exudateScore,
          tissueScore,
          totalScore,
        };
      })
    );
  };

  const addRow = () => setRows((prev) => [...prev, emptyRow()]);
  const removeRow = (idx) => setRows((prev) => prev.filter((_, i) => i !== idx));

  const overallTotal = rows.reduce((sum, r) => sum + (Number.isFinite(r.totalScore) ? r.totalScore : 0), 0);

  return (
    <div style={page}>
      <style>{`
        .push-tool-table thead th {
          background-color: #eff6ff !important;
          color: #1e40af !important;
          border: 1px solid #bfdbfe !important;
        }
      `}</style>
      <div style={header}>
        <div>
          <div style={title}>PUSH Tool – Pressure Ulcer Scale for Healing</div>
          {patient && <div style={subtitle}>{patient.name ? `Patient: ${patient.name}` : ""}</div>}
        </div>
      </div>

      <div style={tableCard}>
        <div style={tableWrap}>
          <table className="push-tool-table" style={table}>
            <thead>
              <tr>
                <th style={thBlue}>Date</th>
                <th style={thBlue}>Time</th>
                <th style={thBlue}>Length (cm)</th>
                <th style={thBlue}>Width (cm)</th>
                <th style={thBlue}>Length × Width (cm²)</th>
                <th style={thBlue}>Exudate Amount</th>
                <th style={thBlue}>Tissue Type</th>
                <th style={thBlue}>PUSH Total Score</th>
                <th style={thBlue}></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx}>
                  <td style={td}>
                    <input
                      type="date"
                      style={input}
                      value={row.date}
                      onChange={(e) => updateRow(idx, { date: e.target.value })}
                    />
                  </td>
                  <td style={td}>
                    <input
                      type="time"
                      style={input}
                      value={row.time}
                      onChange={(e) => updateRow(idx, { time: e.target.value })}
                    />
                  </td>
                  <td style={td}>
                    <input
                      type="number"
                      min="0"
                      step="0.1"
                      style={input}
                      value={row.length}
                      onChange={(e) => updateRow(idx, { length: e.target.value })}
                    />
                  </td>
                  <td style={td}>
                    <input
                      type="number"
                      min="0"
                      step="0.1"
                      style={input}
                      value={row.width}
                      onChange={(e) => updateRow(idx, { width: e.target.value })}
                    />
                  </td>
                  <td style={{ ...td, background: "#f9fafb", fontWeight: 600 }}>
                    {row.area > 0 ? row.area.toFixed(1) : "—"}
                  </td>
                  <td style={td}>
                    <select
                      style={select}
                      value={row.exudate}
                      onChange={(e) => updateRow(idx, { exudate: e.target.value })}
                    >
                      <option value="">Select…</option>
                      {EXUDATE_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td style={td}>
                    <select
                      style={select}
                      value={row.tissue}
                      onChange={(e) => updateRow(idx, { tissue: e.target.value })}
                    >
                      <option value="">Select…</option>
                      {TISSUE_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td style={{ ...td, fontWeight: 700 }}>
                    {row.totalScore > 0 ? row.totalScore : row.length || row.width || row.exudate || row.tissue ? 0 : "—"}
                  </td>
                  <td style={td}>
                    {rows.length > 1 && (
                      <button type="button" style={removeBtn} onClick={() => removeRow(idx)}>
                        ✕
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td style={tfoot} colSpan={7}>
                  Total PUSH Score (all entries)
                </td>
                <td style={{ ...tfoot, fontWeight: 800 }}>{overallTotal}</td>
                <td style={tfoot}></td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div style={footerRow}>
          <button type="button" style={addBtn} onClick={addRow}>
            ＋ Add Row
          </button>
        </div>
      </div>
    </div>
  );
}

const page = {
  width: "100%",
  boxSizing: "border-box",
  padding: "20px 24px",
  fontFamily: "'Inter', system-ui, sans-serif",
  background: "#f8fafc",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: 16,
};

const title = { fontSize: 20, fontWeight: 700, color: "#0f172a" };
const subtitle = { fontSize: 12, color: "#64748b", marginTop: 4 };

const tableCard = {
  background: "#fff",
  borderRadius: 12,
  border: "1px solid #e2e8f0",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const tableWrap = { overflowX: "auto" };
const table = { borderCollapse: "collapse", width: "100%", fontSize: 11 };

const thBlue = {
  border: "1px solid #bfdbfe",
  padding: "7px 8px",
  fontWeight: 700,
  fontSize: 11,
  textAlign: "center",
  backgroundColor: "#eff6ff",
  color: "#1e40af",
  whiteSpace: "nowrap",
};

const td = {
  border: "1px solid #e2e8f0",
  padding: "4px 6px",
  verticalAlign: "middle",
};

const input = {
  width: "100%",
  border: "none",
  outline: "none",
  fontSize: 11,
  background: "transparent",
  padding: "2px 3px",
  boxSizing: "border-box",
};

const select = {
  width: "100%",
  border: "none",
  outline: "none",
  fontSize: 11,
  background: "transparent",
  padding: "2px 3px",
  boxSizing: "border-box",
};

const tfoot = {
  border: "1px solid #e2e8f0",
  padding: "6px 8px",
  background: "#f1f5f9",
  fontSize: 11,
  textAlign: "center",
  color: "#475569",
};

const footerRow = {
  display: "flex",
  justifyContent: "flex-start",
  padding: "10px 12px",
  borderTop: "1px solid #e2e8f0",
};

const addBtn = {
  padding: "8px 18px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: 7,
  fontSize: 12,
  fontWeight: 700,
  cursor: "pointer",
};

const removeBtn = {
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "#ef4444",
  fontSize: 13,
  fontWeight: 700,
};

