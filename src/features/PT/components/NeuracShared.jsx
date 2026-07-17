import React, { useState, useEffect } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import PatientCard from "../../../shared/cards/PatientCard";
import TUG from "./TUGForm";
import MMTForm from "./MMTForm";
import ROMForm from "./ROMForm";
import MASForm from "./MASForm";
import WSTForm from "./WSTForm";
import MFRTForm from "./MFRTForm";
import BergBalanceScale from "./BBS";
import WISCIForm from "./WISCIForm";
import SixMWTForm from "./SixMWTForm";
import SixMWPTForm from "./SixMWPTForm";
import TenMWTForm from "./TenMWTForm";
import IsometricTestForm from "./IsometricTestForm";

/* ══════════════════════════════════════════════════════════
   Shared utilities for all Neurac sub-tab assessments
══════════════════════════════════════════════════════════ */

/* ── Dropdown options ── */
export const OPTS_01 = [
  { label: "0 - Not Satisfactory", value: "0" },
  { label: "1 - Satisfactory", value: "1" },
];
export const OPTS_0123 = [{ label: "\u2014", value: "" }, { label: "0", value: "0" }, { label: "1", value: "1" }, { label: "2", value: "2" }, { label: "3", value: "3" }];
export const OPTS_PDF  = [{ label: "\u2014", value: "" }, { label: "P \u2013 Pain", value: "P" }, { label: "D \u2013 Dysfunctional Move", value: "D" }, { label: "F \u2013 Functional Move", value: "F" }];

/* ── Safe key helper ── */
export function k(str) {
  return (str || "").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
}

export const PERFORM_POS_NEG = [
  { label: "Positive", value: "Positive" },
  { label: "Negative", value: "Negative" },
];

export const YES_NO_OPTS = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
];

/** FormBuilder radio rows for Perform+ Test (merged into Outcome Measures card). */
export function buildPerformTestFields(prefix, rows) {
  return [
    { type: "subheading", label: "Perform+ Test" },
    ...rows.map((test) => ({
      type: "radio",
      name: `${prefix}_perform_${k(test)}_result`,
      label: test,
      options: PERFORM_POS_NEG,
    })),
  ];
}

export function neuracMovementRowTotal(values, prefix, test) {
  return ["rom", "mc", "pfm"].reduce(
    (sum, col) => sum + (Number(values[`${prefix}_${k(test)}_${col}`]) || 0),
    0
  );
}

export function neuracMovementColTotal(values, movements, prefix, col) {
  return movements.reduce(
    (sum, test) => sum + (Number(values[`${prefix}_${k(test)}_${col}`]) || 0),
    0
  );
}

export function neuracMovementOverallTotal(values, movements, prefix) {
  return movements.reduce(
    (sum, test) => sum + neuracMovementRowTotal(values, prefix, test),
    0
  );
}

const NEURAC_MOVEMENT_TOOLTIP = [
  "0 = Not satisfactory (Neurac treatment indicated)",
  "1 = Satisfactory",
];

const NEURAC_PROXIMAL_TOOLTIP = [
  "0 = Weak Link (Neurac treatment indicated)",
  "Decide:",
  "P = Pain",
  "D = Dysfunctional Movement",
  "F = Functional Movement",
];

const OPTS_0123_SCORE = OPTS_0123.filter((o) => o.value !== "");
const OPTS_PDF_VALUES = OPTS_PDF.filter((o) => o.value !== "");

export function neuracProximalRowTotal(values, prefix, test) {
  const bk = `${prefix}_${k(test)}`;
  return (Number(values[`${bk}_l_score`]) || 0) + (Number(values[`${bk}_r_score`]) || 0);
}

export function neuracProximalGrandTotal(values, groups, prefix) {
  return groups
    .flatMap(({ tests }) => tests.filter(Boolean))
    .reduce((sum, test) => sum + neuracProximalRowTotal(values, prefix, test), 0);
}

/** FormBuilder grid for Neurac movement protocol tables (ROM / MC / PFM). */
export function buildNeuracMovementProtocolFields({
  title,
  movements,
  prefix = "cm",
  tooltipLines = NEURAC_MOVEMENT_TOOLTIP,
}) {
  const template =
    "minmax(150px, 1.3fr) repeat(3, minmax(100px, 1fr)) minmax(120px, 1.2fr) 64px";

  return [
    { type: "subheading", label: title },
    {
      type: "grid-header",
      label: "Tests",
      template,
      cols: ["ROM", "Movement Control", "Pain Free Movement", "Comments", "Total"],
      info: { title, content: tooltipLines },
    },
    ...movements.map((test) => ({
      type: "grid-row",
      name: `${prefix}_${k(test)}`,
      label: test,
      template,
      cols: [
        { type: "single-select", name: `${prefix}_${k(test)}_rom`, options: OPTS_01 },
        { type: "single-select", name: `${prefix}_${k(test)}_mc`, options: OPTS_01 },
        { type: "single-select", name: `${prefix}_${k(test)}_pfm`, options: OPTS_01 },
        { type: "input", name: `${prefix}_${k(test)}_comment`, placeholder: "" },
        {
          type: "computed",
          name: `${prefix}_${k(test)}_total`,
          prefix: "/",
          compute: (values) => neuracMovementRowTotal(values, prefix, test),
        },
      ],
    })),
    {
      type: "grid-row",
      name: `${prefix}_totals`,
      label: "Total Scores",
      template,
      cols: [
        {
          type: "computed",
          name: `${prefix}_total_rom`,
          prefix: "/",
          compute: (values) => neuracMovementColTotal(values, movements, prefix, "rom"),
        },
        {
          type: "computed",
          name: `${prefix}_total_mc`,
          prefix: "/",
          compute: (values) => neuracMovementColTotal(values, movements, prefix, "mc"),
        },
        {
          type: "computed",
          name: `${prefix}_total_pfm`,
          prefix: "/",
          compute: (values) => neuracMovementColTotal(values, movements, prefix, "pfm"),
        },
        { type: "static", name: `${prefix}_overall_label`, text: "Overall Score", textAlign: "left" },
        {
          type: "computed",
          name: `${prefix}_overall_total`,
          prefix: "/",
          compute: (values) => neuracMovementOverallTotal(values, movements, prefix),
        },
      ],
    },
    {
      type: "custom",
      name: `${prefix}_movements_legend`,
      render: () => <Legend text={legend01} />,
    },
  ];
}

/** FormBuilder grid for Neurac settings tables (Global Comp / Position / etc.). */
export function buildNeuracSettingsProtocolFields({
  title,
  rows,
  prefix = "cs",
  tooltipLines = NEURAC_MOVEMENT_TOOLTIP,
}) {
  const template =
    "minmax(150px, 1.3fr) repeat(4, minmax(95px, 1fr)) minmax(95px, 1fr) minmax(95px, 1fr) minmax(120px, 1.2fr)";

  return [
    { type: "subheading", label: title },
    {
      type: "grid-header",
      label: "Tests",
      template,
      cols: [
        "Global Comp.",
        "Position",
        "Pain Free",
        "Abdominal Respiration",
        "Fatigue Occurs",
        "Total Hold Time",
        "Comments",
      ],
      info: { title, content: tooltipLines },
    },
    ...rows.map((test) => ({
      type: "grid-row",
      name: `${prefix}_${k(test)}`,
      label: test,
      template,
      cols: [
        { type: "single-select", name: `${prefix}_${k(test)}_gc`, options: OPTS_01 },
        { type: "single-select", name: `${prefix}_${k(test)}_pos`, options: OPTS_01 },
        { type: "single-select", name: `${prefix}_${k(test)}_pf`, options: OPTS_01 },
        { type: "single-select", name: `${prefix}_${k(test)}_ar`, options: OPTS_01 },
        { type: "single-select", name: `${prefix}_${k(test)}_fatigue`, options: YES_NO_OPTS },
        { type: "input", name: `${prefix}_${k(test)}_hold`, placeholder: "sec" },
        { type: "input", name: `${prefix}_${k(test)}_comment`, placeholder: "" },
      ],
    })),
    {
      type: "custom",
      name: `${prefix}_settings_legend`,
      render: () => <Legend text={legend01} />,
    },
  ];
}

/** FormBuilder grid for myofascial chain / proximal tests (L/R score + P/D/F). */
export function buildNeuracProximalProtocolFields({
  title,
  groups,
  prefix = "cx_px",
  tooltipLines = NEURAC_PROXIMAL_TOOLTIP,
}) {
  const template =
    "minmax(150px, 1.3fr) repeat(2, minmax(90px, 1fr)) repeat(2, minmax(100px, 1fr)) minmax(120px, 1.2fr) 64px";

  const fields = [
    { type: "subheading", label: title },
    {
      type: "grid-header",
      label: "Tests",
      template,
      cols: [
        "L Score (0\u20133)",
        "L P / D / F",
        "R Score (0\u20133)",
        "R P / D / F",
        "Comments",
        "Total",
      ],
      info: { title, content: tooltipLines },
    },
  ];

  groups.forEach(({ group, tests }) => {
    if (group) {
      fields.push({ type: "subheading", label: group });
    }
    tests.filter(Boolean).forEach((test) => {
      const bk = `${prefix}_${k(test)}`;
      fields.push({
        type: "grid-row",
        name: bk,
        label: test,
        template,
        cols: [
          { type: "single-select", name: `${bk}_l_score`, options: OPTS_0123_SCORE },
          { type: "single-select", name: `${bk}_l_pdf`, options: OPTS_PDF_VALUES },
          { type: "single-select", name: `${bk}_r_score`, options: OPTS_0123_SCORE },
          { type: "single-select", name: `${bk}_r_pdf`, options: OPTS_PDF_VALUES },
          { type: "input", name: `${bk}_comment`, placeholder: "" },
          {
            type: "computed",
            name: `${bk}_total`,
            compute: (values) => neuracProximalRowTotal(values, prefix, test),
          },
        ],
      });
    });
  });

  fields.push(
    {
      type: "score-box",
      name: `${prefix}_overall_total`,
      label: "Total Score",
      compute: (values) => neuracProximalGrandTotal(values, groups, prefix),
    },
    {
      type: "custom",
      name: `${prefix}_proximal_legend`,
      render: () => <Legend text={legendPDF} />,
    }
  );

  return fields;
}

/* ── Reusable select ── */
export function Sel({ options, value, onChange, width = 110 }) {
  const hasPlaceholder = options.some((o) => o.value === "");
  const opts = hasPlaceholder
    ? options
    : [{ label: "Select", value: "" }, ...options];

  return (
    <select
      value={value || ""}
      onChange={e => onChange(e.target.value)}
      style={{
        width, padding: "5px 6px",
        border: "1px solid #d1d5db", borderRadius: 5,
        fontSize: 12, background: "#fff", color: "#111827", cursor: "pointer",
      }}
    >
      {opts.map(o => <option key={o.value || "select"} value={o.value}>{o.label}</option>)}
    </select>
  );
}

/* ── Text input ── */
export function CellInput({ value, onChange, placeholder = "" }) {
  return (
    <input
      type="text"
      value={value || ""}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        width: "100%", padding: "5px 7px",
        border: "1px solid #d1d5db", borderRadius: 5,
        fontSize: 12, background: "#fff",
      }}
    />
  );
}

/* ── Save button row ── */
export function SaveRow({ onSave, onClear }) {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 16, paddingTop: 12, borderTop: "1px solid #e5e7eb" }}>
      {onClear && (
        <button type="button" onClick={onClear}
          style={{
            padding: "8px 20px", borderRadius: 6,
            border: "1px solid #d1d5db", background: "#fff",
            color: "#374151", fontWeight: 600, fontSize: 13, cursor: "pointer",
          }}
        >
          Clear
        </button>
      )}
      <button type="button" onClick={onSave}
        style={{
          padding: "8px 24px", borderRadius: 6,
          border: "none", background: "#2563eb",
          color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer",
        }}
      >
        Save
      </button>
    </div>
  );
}

/* ── Section label ── */
export const sectionLabel = { fontWeight: 700, fontSize: 14, color: "#111827", marginBottom: 8, marginTop: 4 };

/* ── Table title (centered, with top border) ── */
export const tableTitle = {
  fontWeight: 800, fontSize: 15, color: "#111827",
  textAlign: "center", marginBottom: 8,
  padding: "8px 0", borderTop: "2px solid #e5e7eb",
};

/* ── Table styles ── */
export const tbl  = { width: "100%", borderCollapse: "collapse", fontSize: 13 };
export const th   = { background: "#f1f5f9", fontWeight: 700, padding: "8px 10px", border: "1px solid #d1d5db", color: "#111827", textAlign: "center" };
export const thN  = { background: "#f1f5f9", fontWeight: 700, padding: "8px 10px", border: "1px solid #d1d5db", color: "#111827", textAlign: "center", width: 40 };
export const td   = { padding: "7px 10px", border: "1px solid #e5e7eb", verticalAlign: "middle", fontSize: 13 };
export const tdC  = { padding: "7px 10px", border: "1px solid #e5e7eb", verticalAlign: "middle", fontSize: 13, textAlign: "center" };
export const tdN  = { padding: "7px 10px", border: "1px solid #e5e7eb", verticalAlign: "middle", fontSize: 13, textAlign: "center", color: "#6b7280", fontSize: 12 };
export const groupHeader = { padding: "7px 10px", border: "1px solid #e5e7eb", fontWeight: 800, fontSize: 13, color: "#111827", background: "#f9fafb" };

/* ── Legend ── */
export const legend01  = "0 = Not Satisfactory (Neurac treatment indicated)     1 = Satisfactory";
export const legendPDF = "0 = Weak Link (Neurac treatment indicated)\nDecide: P = Pain, D = Dysfunctional Movement, F = Functional Movement";

export function Legend({ text }) {
  return (
    <div style={{ fontSize: 11, color: "#6b7280", marginTop: 4, marginBottom: 4, whiteSpace: "pre-line" }}>
      {text}
    </div>
  );
}

/* ── Proximal table with Left/Right merged headers ── */
export function ProximalTable({ title, prefix, groups, values, onChange }) {
  const get = (key) => values[key] || "";
  const set = (key, val) => onChange(key, val);

  const grandTotal = () =>
    groups.flatMap(({ tests }) =>
      tests.map(test => {
        const bk = `${prefix}_${k(test)}`;
        return (Number(values[`${bk}_l_score`]) || 0) + (Number(values[`${bk}_r_score`]) || 0);
      })
    ).reduce((a, b) => a + b, 0);

  return (
    <>
      <div style={tableTitle}>{title}</div>
      <div style={{ overflowX: "auto", marginBottom: 4 }}>
        <table style={tbl}>
          <thead>
            {/* Row 1: merged Left side / Right side */}
            <tr>
              <th style={{ ...th, width: 180 }} rowSpan={2}>Tests</th>
              <th style={{ ...th }} colSpan={2}>Left Side</th>
              <th style={{ ...th }} colSpan={2}>Right Side</th>
              <th style={{ ...th, minWidth: 120 }} rowSpan={2}>Comments</th>
              <th style={{ ...th, width: 60 }} rowSpan={2}>Total</th>
            </tr>
            {/* Row 2: sub-headers */}
            <tr>
              <th style={{ ...th, fontSize: 11, fontWeight: 600, background: "#f8fafc" }}>Score (0\u20133)</th>
              <th style={{ ...th, fontSize: 11, fontWeight: 600, background: "#f8fafc" }}>P / D / F</th>
              <th style={{ ...th, fontSize: 11, fontWeight: 600, background: "#f8fafc" }}>Score (0\u20133)</th>
              <th style={{ ...th, fontSize: 11, fontWeight: 600, background: "#f8fafc" }}>P / D / F</th>
            </tr>
          </thead>
          <tbody>
            {groups.map(({ group, tests }) => (
              <React.Fragment key={group || "main"}>
                {group && <tr><td colSpan={7} style={groupHeader}>{group}</td></tr>}
                {tests.map(test => {
                  const bk = `${prefix}_${k(test)}`;
                  const ls = Number(get(`${bk}_l_score`)) || 0;
                  const rs = Number(get(`${bk}_r_score`)) || 0;
                  return (
                    <tr key={test}>
                      <td style={{ ...td, color: test ? "#dc2626" : "#9ca3af", fontWeight: 600, fontSize: 12 }}>
                        {test || "\u2014"}
                      </td>
                      <td style={tdC}><Sel options={OPTS_0123} value={get(`${bk}_l_score`)} onChange={v => set(`${bk}_l_score`, v)} width={90} /></td>
                      <td style={tdC}><Sel options={OPTS_PDF}  value={get(`${bk}_l_pdf`)}   onChange={v => set(`${bk}_l_pdf`,   v)} width={110} /></td>
                      <td style={tdC}><Sel options={OPTS_0123} value={get(`${bk}_r_score`)} onChange={v => set(`${bk}_r_score`, v)} width={90} /></td>
                      <td style={tdC}><Sel options={OPTS_PDF}  value={get(`${bk}_r_pdf`)}   onChange={v => set(`${bk}_r_pdf`,   v)} width={110} /></td>
                      <td style={td}><CellInput value={get(`${bk}_comment`)} onChange={v => set(`${bk}_comment`, v)} /></td>
                      <td style={{ ...tdC, fontWeight: 700, color: "#2563eb" }}>{ls + rs}</td>
                    </tr>
                  );
                })}
              </React.Fragment>
            ))}
            <tr style={{ background: "#f1f5f9" }}>
              <td style={{ ...td, fontWeight: 700 }}>Total Scores</td>
              <td colSpan={4} style={td}></td>
              <td style={{ ...td, fontWeight: 700, color: "#6b7280" }}>Overall Score</td>
              <td style={{ ...tdC, fontWeight: 800, color: "#2563eb" }}>{grandTotal()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Legend text={legendPDF} />
    </>
  );
}

/* ── Settings table (Global Comp / Position / Pain Free / Abdominal Resp) ── */
export function SettingsTable({ title, prefix, rows, values, onChange }) {
  const get = (key) => values[key] || "";
  const set = (key, val) => onChange(key, val);

  return (
    <>
      <div style={{ ...tableTitle, marginTop: 24 }}>{title}</div>
      <div style={{ overflowX: "auto", marginBottom: 4 }}>
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: 180 }}>Tests</th>
              <th style={{ ...th, width: 110 }}>Global Comp.</th>
              <th style={{ ...th, width: 110 }}>Position</th>
              <th style={{ ...th, width: 110 }}>Pain Free</th>
              <th style={{ ...th, width: 140 }}>Abdominal Respiration</th>
              <th style={{ ...th, width: 110 }}>Fatigue Occurs</th>
              <th style={{ ...th, width: 110 }}>Total Hold Time</th>
              <th style={{ ...th, minWidth: 120 }}>Comments</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(test => (
              <tr key={test}>
                <td style={{ ...td, color: "#dc2626", fontWeight: 600, fontSize: 12 }}>{test}</td>
                <td style={tdC}><Sel options={OPTS_01} value={get(`${prefix}_${k(test)}_gc`)}  onChange={v => set(`${prefix}_${k(test)}_gc`,  v)} width={100} /></td>
                <td style={tdC}><Sel options={OPTS_01} value={get(`${prefix}_${k(test)}_pos`)} onChange={v => set(`${prefix}_${k(test)}_pos`, v)} width={100} /></td>
                <td style={tdC}><Sel options={OPTS_01} value={get(`${prefix}_${k(test)}_pf`)}  onChange={v => set(`${prefix}_${k(test)}_pf`,  v)} width={100} /></td>
                <td style={tdC}><Sel options={OPTS_01} value={get(`${prefix}_${k(test)}_ar`)}  onChange={v => set(`${prefix}_${k(test)}_ar`,  v)} width={100} /></td>
                <td style={tdC}><CellInput value={get(`${prefix}_${k(test)}_fatigue`)} onChange={v => set(`${prefix}_${k(test)}_fatigue`, v)} placeholder="Yes / No" /></td>
                <td style={tdC}><CellInput value={get(`${prefix}_${k(test)}_hold`)}    onChange={v => set(`${prefix}_${k(test)}_hold`,    v)} placeholder="sec" /></td>
                <td style={td}> <CellInput value={get(`${prefix}_${k(test)}_comment`)} onChange={v => set(`${prefix}_${k(test)}_comment`, v)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Legend text={legend01} />
    </>
  );
}

/* ── ROM / Isometric table ── */
export function PhaseTable({ sectionNum, title, prefix, rows, colLabel, values, onChange }) {
  const get = (key) => values[key] || "";
  const set = (key, val) => onChange(key, val);

  return (
    <>
      <div style={sectionLabel}>{sectionNum}) {title}</div>
      <div style={{ overflowX: "auto", marginBottom: 20 }}>
        <table style={tbl}>
          <thead>
            <tr>
              <th style={thN}>No</th>
              <th style={{ ...th, width: 180 }}>Movement</th>
              <th style={{ ...th, minWidth: 140 }}>{colLabel} (Initial)</th>
              <th style={{ ...th, minWidth: 140 }}>{colLabel} (Mid)</th>
              <th style={{ ...th, minWidth: 140 }}>{colLabel} (Final)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((mv, i) => (
              <tr key={mv}>
                <td style={tdN}>{i + 1}</td>
                <td style={td}>{mv}</td>
                {["initial","mid","final"].map(phase => (
                  <td key={phase} style={td}>
                    <CellInput
                      value={get(`${prefix}_${k(mv)}_${phase}`)}
                      onChange={v => set(`${prefix}_${k(mv)}_${phase}`, v)}
                      placeholder={colLabel}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

/* ── Perform+ table with Positive / Negative radio ── */
export function PerformTable({ prefix, rows, values, onChange }) {
  const get = (key) => values[key] || "";
  const set = (key, val) => onChange(key, val);

  return (
    <>
      <div style={{ fontWeight: 700, fontSize: 15, color: "#111827", marginBottom: 12, marginTop: 4 }}>
        Perform+ Test
      </div>
      <div style={{
        border: "1px solid #e5e7eb", borderRadius: 10,
        background: "#fff", marginBottom: 24, overflow: "hidden",
      }}>
        {rows.map((test, i) => {
          const resultKey = `${prefix}_perform_${k(test)}_result`;
          const result    = get(resultKey);
          return (
            <div
              key={test}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "14px 20px",
                borderBottom: i < rows.length - 1 ? "1px solid #f1f5f9" : "none",
                background: "#fff",
              }}
            >
              {/* Test name */}
              <span style={{ fontWeight: 600, fontSize: 14, color: "#111827" }}>{test}</span>

              {/* Positive / Negative radios */}
              <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                {["Positive", "Negative"].map(opt => (
                  <label
                    key={opt}
                    style={{
                      display: "flex", alignItems: "center", gap: 6,
                      fontSize: 14, cursor: "pointer",
                      color: result === opt
                        ? (opt === "Positive" ? "#dc2626" : "#16a34a")
                        : "#374151",
                      fontWeight: result === opt ? 600 : 400,
                    }}
                  >
                    <input
                      type="radio"
                      name={resultKey}
                      value={opt}
                      checked={result === opt}
                      onChange={() => set(resultKey, opt)}
                      style={{ accentColor: opt === "Positive" ? "#dc2626" : "#16a34a", width: 16, height: 16 }}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export const otherTextarea = {
  width: "100%", minHeight: 80, padding: "8px 10px",
  border: "1px solid #d1d5db", borderRadius: 6,
  fontSize: 13, resize: "vertical", marginBottom: 20,
};

/* ── Info Tooltip (blue circle \u2138 icon with hover popup) ── */
export function InfoTooltip({ text }) {
  const [visible, setVisible] = React.useState(false);
  return (
    <div
      style={{ display: "inline-flex", position: "relative", marginLeft: 8, cursor: "pointer", verticalAlign: "middle" }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {/* Blue circle info icon */}
      <div style={{
        width: 22, height: 22, borderRadius: "50%",
        background: "#2563eb",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        <span style={{
          color: "#fff", fontWeight: 800, fontSize: 13,
          fontFamily: "Georgia, serif", lineHeight: 1,
          userSelect: "none",
        }}>i</span>
      </div>

      {/* Tooltip popup */}
      {visible && (
        <div style={{
          position: "absolute", zIndex: 20,
          top: "130%", left: "50%", transform: "translateX(-50%)",
          width: 280, background: "#1e293b", color: "#fff",
          borderRadius: 8, padding: "10px 14px",
          fontSize: 12, lineHeight: "20px",
          whiteSpace: "pre-line", pointerEvents: "none",
          boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
        }}>
          {/* Arrow */}
          <div style={{
            position: "absolute", top: -6, left: "50%", transform: "translateX(-50%)",
            width: 0, height: 0,
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderBottom: "6px solid #1e293b",
          }} />
          {Array.isArray(text) ? text.map((line, i) => <div key={i}>{line}</div>) : text}
        </div>
      )}
    </div>
  );
}

/* ── Table title with optional tooltip ── */
export function TableHeading({ title, tooltip }) {
  return (
    <div style={{ ...tableTitle, display: "flex", alignItems: "center", justifyContent: "center" }}>
      {title}
      {tooltip && <InfoTooltip text={tooltip} />}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   NEURAC REGION-SPECIFIC DATA CONSTANTS
   (moved here so ALL SOAP rendering comes from one file)
══════════════════════════════════════════════════════════ */

/* ── Cervical ── */
export const CERVICAL_MOVEMENTS = ["Retraction","Rotation Right","Rotation Left","Lat Flex Right","Lat Flex Left","Extension"];
export const CERVICAL_SETTINGS = [
  "Supine Cervical Setting",
  "Prone Cervical Setting",
  "Inclined Sitting Cervical Setting",
  "Left Side-lying Cervical Setting",
  "Right Side-lying Cervical Setting",
];
export const CERVICAL_PROXIMAL_GROUPS = [
  { group: "Lumbo-Pelvic-Hip", tests: ["Supine Pelvic Lift", "Supine Bridge", "Side-lying Hip Adduction", "Side-lying Hip Abduction"] },
  { group: "Shoulder Complex", tests: ["Scapular Protraction", "Scapular Retraction", "Shoulder Abd/ER", "Shoulder Abd/IR"] },
];

/* ── Shoulder ── */
export const SHOULDER_PROXIMAL_GROUPS = [
  {
    group: null,
    tests: [
      "Supine Pelvic Lift",
      "Scapular Protraction",
      "Scapular Retraction",
      "Shoulder Abd/ER",
      "Shoulder Abd/IR",
    ],
  },
  {
    group: "Additional Tests*",
    tests: [
      "Side-lying Hip Adduction",
      "Side-lying Hip Abduction",
    ],
  },
];

/* ── Elbow ── */
export const ELBOW_PROXIMAL_GROUPS = [
  {
    group: null,
    tests: [
      "Supine Pelvic Lift",
      "Shoulder Abd/IR",
      "Shoulder Abd/ER",
      "Elbow Flexion",
      "Elbow Extension",
    ],
  },
  {
    group: "Additional Tests*",
    tests: [
      "Side-lying Hip Adduction",
      "Side-lying Hip Abduction",
      "Scapular Protraction",
      "Scapular Retraction",
    ],
  },
];

/* ── Lumbar ── */
export const LUMBAR_SETTINGS = [
  "Supine Lumbar Setting",
  "Prone Lumbar Setting",
  "Left Side-lying Lumbar Setting",
  "Right Side-lying Lumbar Setting",
];
export const LUMBAR_PROXIMAL_GROUPS = [
  {
    group: null,
    tests: [
      "Supine Pelvic Lift",
      "Supine Bridging",
      "Prone Bridging",
      "Side-lying Hip Adduction",
      "Side-lying Hip Abduction",
    ],
  },
];

/* ── Knee ── */
export const KNEE_PROXIMAL_GROUPS = [
  {
    group: null,
    tests: [
      "Supine Pelvic Lift",
      "Side-lying Hip Adduction",
      "Side-lying Hip Abduction",
      "Supine Knee Flexion",
      "Prone Knee Extension",
    ],
  },
];

/* ── Hip ── */
export const HIP_PROXIMAL_GROUPS = [
  {
    group: null,
    tests: [
      "Supine Pelvic Lift",
      "Supine Bridge",
      "Side-lying Hip Adduction",
      "Side-lying Hip Abduction",
      "Prone Hip Extension",
    ],
  },
  {
    group: "Additional Tests*",
    tests: [
      "Scapular Protraction",
      "Scapular Retraction",
    ],
  },
];

/* ══════════════════════════════════════════════════════════
   SOAP SCHEMAS — all defined here so SOAP renders from one file
══════════════════════════════════════════════════════════ */

const ACTIONS = [
  { type: "back",  label: "Back"  },
  { type: "clear", label: "Clear" },
  { type: "save",  label: "Save"  },
];

const SUBJECTIVE_SCHEMA = {
  actions: ACTIONS,
  sections: [{
    fields: [
      { name: "chief_complaint",  label: "Chief Complaint",                 type: "input" },
      { name: "hopi",             label: "History of Presenting Illness",    type: "input" },
      {
        type: "subheading",
        label: "Patient Goals"
      },
      { name: "short_term_goals", label: "Short Term Goals",                 type: "input" },
      { name: "long_term_goals",  label: "Long Term Goals",                  type: "input" },
    ],
  }],
};

const OBJECTIVE_SCHEMA = {
  actions: ACTIONS,
  sections: [{
    fields: [
      { type: "subheading", label: "Outcome Measures" },
      {
        name: "neuro_scales",
        type: "assessment-launcher",
        options: [
          { label: "Range of Motion (ROM)", value: "rom" },
          { label: "Isometric Test",        value: "isometric" },
        ],
      },
      {
        name: "others",
        label: "Others",
        type: "input",
      },
    ],
  }],
};

const ASSESSMENT_SCHEMA = {
  actions: ACTIONS,
  sections: [{
    fields: [{
      name: "clinical_impression",
      label: "Clinical Impression",
      type: "input",
      placeholder: "Enter clinical findings and summary...",
    }],
  }],
};

const PLAN_SCHEMA = {
  actions: ACTIONS,
  sections: [{
    fields: [
      { type: "subheading",    label: "Short-Term Goals (2\u20134 weeks)" },
      { type: "dynamic-goals", name: "short_term_goals"              },
      { type: "subheading",    label: "Long-Term Goals (6\u201312 weeks)" },
      { type: "dynamic-goals", name: "long_term_goals"               },
      { name: "Interventions", label: "Interventions", type: "input"   },
      { name: "plan",          label: "Plan",          type: "input" },
    ],
  }],
};

const SCHEMA_MAP = {
  subjective: SUBJECTIVE_SCHEMA,
  objective:  OBJECTIVE_SCHEMA,
  assessment: ASSESSMENT_SCHEMA,
  plan:       PLAN_SCHEMA,
};

const NEURAC_PERFORM_ROWS = {
  cervical: [
    "Core Brace", "Abduction", "Heel Raise", "Adduction",
    "Scapula Assist", "Scapula Retraction", "Scapula Stabilization",
  ],
  shoulder: [
    "Core Brace", "Abduction", "Heel Raise", "Adduction",
    "Scapula Assist", "Scapula Retraction", "Scapula Stabilization",
  ],
  elbow: [
    "Core Brace", "Abduction", "Heel Raise", "Adduction",
    "Scapula Assist", "Scapula Retraction", "Scapula Stabilization",
  ],
  lumbar: ["Core Brace", "Abduction", "Heel Raise", "Scapula Assist"],
  knee:   ["Core Brace", "Abduction", "Heel Raise", "Scapula Assist"],
  hip:    ["Core Brace", "Abduction", "Heel Raise", "Scapula Assist"],
};

const SPINAL_ASSESSMENT_REGISTRY = {
  tug:        TUG,
  rom:        ROMForm,
  mmt:        MMTForm,
  mas:        MASForm,
  wst:        WSTForm,
  mfrt:       MFRTForm,
  wisci:      WISCIForm,
  tenmwt:     TenMWTForm,
  sixmwt:     SixMWTForm,
  sixmwpt:    SixMWPTForm,
  bbs:        BergBalanceScale,
  isometric:  IsometricTestForm,
};

function getObjectiveSchema(region) {
  const baseFields = OBJECTIVE_SCHEMA.sections[0].fields;
  const performRows = NEURAC_PERFORM_ROWS[region];
  if (!performRows) return OBJECTIVE_SCHEMA;

  const fields = [...baseFields, ...buildPerformTestFields(region, performRows)];

  if (region === "cervical") {
    fields.push(
      ...buildNeuracMovementProtocolFields({
        title: "Neurac Test Protocol \u2014 Cervical Movements",
        movements: CERVICAL_MOVEMENTS,
        prefix: "cm",
      }),
      ...buildNeuracSettingsProtocolFields({
        title: "Cervical Settings",
        rows: CERVICAL_SETTINGS,
        prefix: "cs",
      }),
      ...buildNeuracProximalProtocolFields({
        title: "Additional Myofascial Chain Tests for Neck Examination",
        groups: CERVICAL_PROXIMAL_GROUPS,
        prefix: "cx_px",
      })
    );
  }

  if (region === "shoulder") {
    fields.push(
      ...buildNeuracProximalProtocolFields({
        title: "Myofascial Chain Tests for Shoulder Examination",
        groups: SHOULDER_PROXIMAL_GROUPS,
        prefix: "shoulder_px",
      })
    );
  }

  if (region === "elbow") {
    fields.push(
      ...buildNeuracProximalProtocolFields({
        title: "Myofascial Chain Tests for Elbow Examination",
        groups: ELBOW_PROXIMAL_GROUPS,
        prefix: "elbow_px",
      })
    );
  }

  if (region === "lumbar") {
    fields.push(
      ...buildNeuracSettingsProtocolFields({
        title: "Lumbar Settings",
        rows: LUMBAR_SETTINGS,
        prefix: "ls",
      }),
      ...buildNeuracProximalProtocolFields({
        title: "Myofascial Chain Tests",
        groups: LUMBAR_PROXIMAL_GROUPS,
        prefix: "lumbar_px",
      })
    );
  }

  if (region === "knee") {
    fields.push(
      ...buildNeuracProximalProtocolFields({
        title: "Myofascial Chain Tests for Knee Examination",
        groups: KNEE_PROXIMAL_GROUPS,
        prefix: "knee_px",
      })
    );
  }

  if (region === "hip") {
    fields.push(
      ...buildNeuracProximalProtocolFields({
        title: "Myofascial Chain Tests for Hip Examination",
        groups: HIP_PROXIMAL_GROUPS,
        prefix: "hip_px",
      })
    );
  }

  return {
    ...OBJECTIVE_SCHEMA,
    sections: [{ fields }],
  };
}

export const SUB_TABS = [
  { key: "cervical", label: "Cervical" },
  { key: "shoulder", label: "Shoulder" },
  { key: "elbow",    label: "Elbow"    },
  { key: "lumbar",   label: "Lumbar"   },
  { key: "knee",     label: "Knee"     },
  { key: "hip",      label: "Hip"      },
];

/* ══════════════════════════════════════════════════════════
   NeuracSoapWrapper — Patient Info + SOAP tabs per sub-tab
   ALL SOAP rendering lives here (subjective / objective /
   assessment / plan) so no separate file is needed.
══════════════════════════════════════════════════════════ */
export function NeuracSoapWrapper({ patient, region, onSubmit, onBack }) {
  const [values, setValues]       = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("subjective");

  const storageKey = patient ? `neurac_${region}_draft_${patient.id}` : null;

  useEffect(() => {
    if (!storageKey) return;
    const saved = localStorage.getItem(storageKey);
    if (saved) setValues(JSON.parse(saved).values || {});
  }, [storageKey]);

  useEffect(() => {
    if (!patient) return;
    setValues(v => ({
      ...v,
      referred_by:      patient.case_manager      || "",
      referral_reasons: patient.diagnosis_history || patient.icd || "",
    }));
  }, [patient]);

  const onChange = (name, value) => setValues(v => ({ ...v, [name]: value }));

  const handleAction = (type) => {
    if (type === "back")  onBack?.();
    if (type === "clear") { setValues({}); setSubmitted(false); localStorage.removeItem(storageKey); }
    if (type === "save")  {
      localStorage.setItem(storageKey, JSON.stringify({ values, updatedAt: new Date() }));
      alert(`${region.charAt(0).toUpperCase() + region.slice(1)} draft saved`);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    onSubmit?.(values);
    alert("Neurac Therapy assessment submitted");
  };

  const TABS = ["subjective", "objective", "assessment", "plan"];

  return (
    <div style={{ padding: "0 0 16px" }}>
      {/* Patient Information */}
      <PatientCard patient={patient} />

      {/* SOAP Tabs */}
      <div style={tabBar}>
        {TABS.map(tab => (
          <div
            key={tab}
            style={activeTab === tab ? tabActive : tabBtn}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </div>
        ))}
      </div>

      {/* OBJECTIVE — Outcome Measures + region Neurac tables */}
      {activeTab === "objective" && (
        <>
          {/* Outcome Measures assessment-launcher */}
          <CommonFormBuilder
            schema={getObjectiveSchema(region)}
            values={values}
            onChange={onChange}
            onAction={handleAction}
            assessmentRegistry={SPINAL_ASSESSMENT_REGISTRY}
          />

          <div style={{ ...submitRow, padding: "0 16px 8px" }}>
            <button type="button" style={submitBtn} onClick={() => setActiveTab("assessment")}>
              Next
            </button>
          </div>
        </>
      )}

      {/* SUBJECTIVE / ASSESSMENT / PLAN */}
      {activeTab !== "objective" && (
        <CommonFormBuilder
          schema={SCHEMA_MAP[activeTab]}
          values={values}
          onChange={onChange}
          submitted={submitted}
          onAction={handleAction}
          assessmentRegistry={SPINAL_ASSESSMENT_REGISTRY}
        >
          <div style={submitRow}>
            {activeTab !== "plan" ? (
              <button
                type="button"
                style={submitBtn}
                onClick={() => {
                  if (activeTab === "subjective") setActiveTab("objective");
                  else if (activeTab === "assessment") setActiveTab("plan");
                }}
              >
                Next
              </button>
            ) : (
              <button type="button" style={submitBtn} onClick={handleSubmit}>
                Submit
              </button>
            )}
          </div>
        </CommonFormBuilder>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   Styles exported for consistency across SOAP rendering
══════════════════════════════════════════════════════════ */

export const subTabRow    = { display: "flex", gap: 0, borderBottom: "2px solid #e5e7eb", background: "#f1f5f9", padding: "0 16px" };
export const subTabItem   = { padding: "10px 24px", fontWeight: 600, fontSize: 14, cursor: "pointer", color: "#475569", borderBottom: "3px solid transparent", marginBottom: -2 };
export const subTabActive = { color: "#2563eb", borderBottom: "3px solid #2563eb", background: "#fff" };
export const tabBar       = { display: "flex", gap: 12, justifyContent: "center", borderBottom: "1px solid #ddd", marginBottom: 12 };
export const tabBtn       = { padding: "10px 22px", fontWeight: 600, cursor: "pointer", color: "#0f172a" };
export const tabActive    = { ...tabBtn, borderBottom: "3px solid #2451b3", color: "#2451b3" };
export const submitRow    = { display: "flex", justifyContent: "flex-end", marginTop: 20 };
export const submitBtn    = { padding: "12px 32px", background: "#2563EB", color: "#fff", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 700 };
export const inputStyle   = { width: "100%", minHeight: 90, marginTop: 6, marginBottom: 12, padding: "10px 12px", borderRadius: 6, border: "1px solid #d1d5db", fontSize: 14, resize: "vertical" };
export const alertBtn     = { marginTop: 10, padding: "10px 20px", borderRadius: 6, border: "1.5px solid #007bff", background: "#007bff", color: "#fff", fontWeight: 600, cursor: "pointer" };
export const doctorsReportBtn = { padding: "10px 20px", background: "#2563EB", color: "#fff", border: "none", borderRadius: 6, fontSize: 14, fontWeight: 600, cursor: "pointer", marginTop: 8 };
