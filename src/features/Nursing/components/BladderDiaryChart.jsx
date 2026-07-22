import React, { useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const DEFAULT_ROWS = 5;
const URGENCY_OPTIONS = ["None", "Mild", "Moderate", "Severe"];

function emptyRow() {
  return { time: "", date: "", fluidType: "", fluidVolume: "", urineVolume: "", urgency: "", leakVolume: "", leakActivity: "", remarks: "" };
}

function buildRows(n) {
  return Array.from({ length: n }, emptyRow);
}

export default function BladderDiaryChart({ patient, values, onChange }) {
  const [localRows, setLocalRows] = useState(buildRows(DEFAULT_ROWS));
  
  const rows = values?.bladder_diary_rows || localRows;

  const updateState = (newRows) => {
    if (onChange) {
      onChange({
        ...values,
        bladder_diary_rows: newRows
      });
    } else {
      setLocalRows(newRows);
    }
  };

  const updateCell = (rowIdx, field, val) => {
    const nextRows = rows.map((r, i) => (i === rowIdx ? { ...r, [field]: val } : r));
    updateState(nextRows);
  };

  const addRow    = () => updateState([...rows, emptyRow()]);
  const removeRow = (idx) => updateState(rows.filter((_, i) => i !== idx));

  const totalFluid  = rows.reduce((s, r) => s + (parseFloat(r.fluidVolume)  || 0), 0);
  const totalUrine  = rows.reduce((s, r) => s + (parseFloat(r.urineVolume)  || 0), 0);
  const totalLeak   = rows.reduce((s, r) => s + (parseFloat(r.leakVolume)   || 0), 0);

  const schema = {
    title: "Bladder Diary",
    sections: [
      {
        fields: [
          { name: "bladder_diary_rows", type: "hidden" }
        ]
      }
    ]
  };

  return (
    <div style={page}>
      <div style={{ display: "none" }}>
        <CommonFormBuilder 
          schema={schema} 
          values={{ bladder_diary_rows: rows }} 
          onChange={(val) => val?.bladder_diary_rows && updateState(val.bladder_diary_rows)} 
        />
      </div>

      <div style={pageHeader}>
        <div>
          <div style={pageTitle}>Bladder Diary</div>
        </div>
        {patient && (
          <div style={patientBadge}>
            <div style={badgeName}>{patient.name}</div>
            {patient.id && <div style={badgeId}>MRN: {patient.id}</div>}
          </div>
        )}
      </div>

      <div style={tableCard}>
        <div style={tableWrap}>
          <table style={table}>
            <thead>
              <tr>
                <th rowSpan={2} style={{ ...th, ...thSticky, width: 110 }}>Time / Date</th>
                <th colSpan={2} style={{ ...th, ...thGroup, background: "#e0f2fe", color: "#0369a1" }}>Fluid Intake (drinks, soups)</th>
                <th colSpan={2} style={{ ...th, ...thGroup, background: "#dbeafe", color: "#1d4ed8" }}>Urine</th>
                <th colSpan={2} style={{ ...th, ...thGroup, background: "#eff6ff", color: "#2563eb" }}>Leaking</th>
                <th rowSpan={2} style={{ ...th, width: 160 }}>Remarks</th>
                <th rowSpan={2} style={{ ...th, width: 45 }}></th>
              </tr>
              <tr>
                <th style={{ ...th, background: "#f0f9ff", color: "#0369a1", fontSize: 11 }}>Type</th>
                <th style={{ ...th, background: "#f0f9ff", color: "#0369a1", fontSize: 11 }}>Vol (ml)</th>
                <th style={{ ...th, background: "#f5f3ff", color: "#1d4ed8", fontSize: 11 }}>Vol (ml)</th>
                <th style={{ ...th, background: "#f5f3ff", color: "#1d4ed8", fontSize: 11 }}>Urgency</th>
                <th style={{ ...th, background: "#faf5ff", color: "#2563eb", fontSize: 11 }}>Vol (ml)</th>
                <th style={{ ...th, background: "#faf5ff", color: "#2563eb", fontSize: 11 }}>Activity when leaking</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, i) => (
                <tr key={i} style={i % 2 === 0 ? trEven : trOdd}>
                  <td style={{ ...td, ...tdSticky, background: i % 2 === 0 ? "#f8fafc" : "#fff" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <input type="time" style={cellInput} value={row.time} onChange={(e) => updateCell(i, "time", e.target.value)} />
                      <input type="date" style={{ ...cellInput, fontSize: 10, color: "#64748b" }} value={row.date} onChange={(e) => updateCell(i, "date", e.target.value)} />
                    </div>
                  </td>
                  <td style={td}>
                    <input style={cellInput} value={row.fluidType} onChange={(e) => updateCell(i, "fluidType", e.target.value)} placeholder="e.g. water" />
                  </td>
                  <td style={td}>
                    <input type="number" style={{ ...cellInput, textAlign: "right" }} value={row.fluidVolume} onChange={(e) => updateCell(i, "fluidVolume", e.target.value)} placeholder="0" min="0" />
                  </td>
                  <td style={td}>
                    <input type="number" style={{ ...cellInput, textAlign: "right" }} value={row.urineVolume} onChange={(e) => updateCell(i, "urineVolume", e.target.value)} placeholder="0" min="0" />
                  </td>
                  <td style={td}>
                    <select style={cellSelect} value={row.urgency} onChange={(e) => updateCell(i, "urgency", e.target.value)}>
                      <option value="">—</option>
                      {URGENCY_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </td>
                  <td style={td}>
                    <input type="number" style={{ ...cellInput, textAlign: "right" }} value={row.leakVolume} onChange={(e) => updateCell(i, "leakVolume", e.target.value)} placeholder="0" min="0" />
                  </td>
                  <td style={td}>
                    <input style={cellInput} value={row.leakActivity} onChange={(e) => updateCell(i, "leakActivity", e.target.value)} placeholder="e.g. coughing" />
                  </td>
                  <td style={td}>
                    <input style={cellInput} value={row.remarks} onChange={(e) => updateCell(i, "remarks", e.target.value)} />
                  </td>
                  <td style={{ ...td, textAlign: "center" }}>
                    {rows.length > 1 && (
                      <button style={removeBtn} onClick={() => removeRow(i)} title="Remove row">✕</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr>
                <td style={{ ...tfootTd, fontWeight: 600, paddingLeft: 12 }} colSpan={2}>Totals</td>
                <td style={{ ...tfootTd, color: "#0369a1", fontWeight: 700, textAlign: "right" }}>{totalFluid > 0 ? `${totalFluid}` : "—"}</td>
                <td style={{ ...tfootTd, color: "#166534", fontWeight: 700, textAlign: "right" }}>{totalUrine > 0 ? `${totalUrine}` : "—"}</td>
                <td style={tfootTd}></td>
                <td style={{ ...tfootTd, color: "#c2410c", fontWeight: 700, textAlign: "right" }}>{totalLeak > 0 ? `${totalLeak}` : "—"}</td>
                <td style={tfootTd} colSpan={3}></td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div style={tableFooter}>
          <button style={addBtn} onClick={addRow}>＋ Add Row</button>
          <div style={totalsBar}>
            <span style={totalChip}>💧 Fluid in: <b>{totalFluid} ml</b></span>
            <span style={totalChip}>🚽 Urine out: <b>{totalUrine} ml</b></span>
            <span style={totalChip}>💦 Leakage: <b>{totalLeak} ml</b></span>
          </div>
        </div>
      </div>

      <div style={legend}>
        <span style={legendTitle}>Urgency Scale</span>
        {[
          ["None", "No urgency", "#f3f4f6", "#1f2937"], 
          ["Mild", "Slight urge, easily deferred", "#fef08a", "#854d0e"], 
          ["Moderate", "Strong urge, manageable", "#fed7aa", "#c2410c"], 
          ["Severe", "Overwhelming urge, unable to defer", "#fecaca", "#991b1b"]
        ].map(([k, v, bg, fg]) => (
          <div key={k} style={legendItem}>
            <span style={{ ...legendKey, background: bg, color: fg }}>{k}</span>
            <span style={legendVal}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const page         = { width: "100%", boxSizing: "border-box", padding: "20px", fontFamily: "system-ui, -apple-system, sans-serif", background: "#f8fafc" };
const pageHeader   = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 };
const pageTitle    = { fontSize: 22, fontWeight: 700, color: "#1e293b" };
const patientBadge = { background: "#1e40af", color: "#fff", borderRadius: 8, padding: "6px 14px", textAlign: "right" };
const badgeName    = { fontWeight: 600, fontSize: 13 };
const badgeId      = { fontSize: 11, opacity: 0.85, marginTop: 1 };

const tableCard   = { background: "#fff", borderRadius: 10, border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", overflow: "hidden", marginBottom: 16 };
const tableWrap   = { overflowX: "auto" };
const table       = { borderCollapse: "collapse", width: "100%", fontSize: 13 };

const th       = { border: "1px solid #e2e8f0", padding: "10px 8px", fontWeight: 600, textAlign: "center", background: "#f8fafc", color: "#475569", whiteSpace: "nowrap" };
const thGroup  = { border: "1px solid #e2e8f0", padding: "8px", fontWeight: 600, textAlign: "center" };
const thSticky = { position: "sticky", left: 0, zIndex: 3 };

const td       = { border: "1px solid #e2e8f0", padding: "6px 8px", verticalAlign: "middle" };
const tdSticky = { position: "sticky", left: 0, zIndex: 2, borderRight: "2px solid #e2e8f0" };
const trEven   = { background: "#f8fafc" };
const trOdd    = { background: "#fff" };

const cellInput  = { width: "100%", border: "none", outline: "none", fontSize: 13, background: "transparent", padding: "4px 0", color: "#334155", boxSizing: "border-box" };
const cellSelect = { width: "100%", border: "none", outline: "none", fontSize: 13, background: "transparent", padding: "4px 0", color: "#334155", cursor: "pointer" };

const tfootTd  = { border: "1px solid #e2e8f0", padding: "10px 8px", background: "#f8fafc", fontSize: 13, color: "#475569" };

const tableFooter = { display: "flex", alignItems: "center", gap: 16, padding: "12px 16px", borderTop: "1px solid #e2e8f0", flexWrap: "wrap", background: "#fff" };
const addBtn      = { padding: "8px 16px", background: "#2563eb", color: "#fff", border: "none", borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: "pointer" };
const totalsBar   = { display: "flex", gap: 12, flexWrap: "wrap" };
const totalChip   = { background: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: 20, padding: "6px 14px", fontSize: 13, color: "#334155", display: "inline-flex", alignItems: "center" };

const removeBtn = { background: "none", border: "none", cursor: "pointer", color: "#ef4444", fontSize: 16, fontWeight: 600, padding: "2px" };

const legend      = { display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 8, padding: "12px 16px" };
const legendTitle = { fontWeight: 600, fontSize: 13, color: "#334155" };
const legendItem  = { display: "flex", gap: 8, alignItems: "center" };
const legendKey   = { fontWeight: 600, fontSize: 12, borderRadius: 4, padding: "2px 8px" };
const legendVal   = { fontSize: 13, color: "#64748b" };