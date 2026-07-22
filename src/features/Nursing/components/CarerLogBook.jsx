import React, { useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

/* ── Clean hospital palette — light blue headers ─────────── */
const C = {
  primary:     "#5B9BD5",
  primaryDk:   "#5B9BD5",
  thBg:        "#5B9BD5",
  thText:      "#FFFFFF",
  thGroupBg:   "#5B9BD5",
  catBg:       "#E3F2FD",
  catText:     "#0D47A1",
  catBorder:   "#BBDEFB",
  rowBase:     "#FFFFFF",
  rowAlt:      "#F8FBFF",
  border:      "#E0E0E0",
  borderMd:    "#BDBDBD",
  text:        "#212121",
  textMid:     "#424242",
  muted:       "#757575",
  white:       "#FFFFFF",
  cellDone:    "#E8F5E9",
  done:        "#2E7D32",
  doneBg:      "#E8F5E9",
  doneBorder:  "#A5D6A7",
};

const COLS = [
  { key: "teach",   label: "Teaching / Demonstrate",   group: "Nurse / Therapist" },
  { key: "observe", label: "Observe",                  group: "Carer" },
  { key: "perform", label: "Perform Under Supervision",  group: "Carer" },
];

const NURSING_SECTIONS = [
  { cat: "EDUCATION", items: [
    "Skin Integrity & Pressure Ulcer Preventive Management",
    "Safety & Fall Preventive Management","Emergency Condition",
    "Seizure","Wound / Diabetic / Hypertensive / Etc","1st Aid / Etc",
  ]},
  { cat: "HEALTH & PERSONAL HYGIENE CARE", items: [
    "Hand Hygiene","Bed Bath","Hair Shampoo","Oral / Dental Hygiene","Other",
  ]},
  { cat: "BOWEL & BLADDER MANAGEMENT", items: [
    "Cleaning & Changing Diapers","Digital Rectum Stimulation",
    "Manual Evacuation Removal","Insert Suppositories",
    "Continuous Bladder Drainage","Emptying Urine Bag",
    "Suprapubic Catheterization","Clean Intermittent Catheterization",
    "Clean Intermittent Self Catheterization",
  ]},
  { cat: "NUTRITION & HYDRATION", items: [
    "Ryle's Tube / PEG Feeding – 1. Preparation",
    "Ryle's Tube / PEG Feeding – 2. Aspirate",
    "Ryle's Tube / PEG Feeding – 3. Administer Feeding",
  ]},
  { cat: "MANAGING SECRETION", items: ["Oral Suction","Tracheostomy Suction"] },
  { cat: "SKIN INTEGRITY",     items: ["Wound Dressing","Positioning"] },
  { cat: "MEDICATION TRAINING",items: ["Medication Taken by Oral","Applying Topical"] },
  { cat: "SAFETY",             items: ["Fall Prevention","Transferring","Hoist","Manual Transferring"] },
  { cat: "MOBILITY",           items: ["Tilt Table (TDS)"] },
];

const THERAPIST_SECTIONS = [
  { cat: "MEDICAL DOCTORS", naColumns: ["observe","perform"], items: [
    "Medication Review","Screen Underlying Depression","Referral","Others","Others",
  ]},
  { cat: "PHYSIOTHERAPY", items: [
    "Range of Motion","Transfer Technique / Positioning","Strengthening Exercise","Others","Others",
  ]},
  { cat: "OCCUPATIONAL THERAPY – MOBILITY", items: [
    "Bed Mobility + Positioning",
    "Transfer – Bed to Chair / Wheelchair / Bed to Tilt Table",
    "Tilt Table – Standing, Various Angle – Monitoring",
    "Stretching Exercise, Passive Range of Motion",
  ]},
  { cat: "OCCUPATIONAL THERAPY – ASSISTIVE DEVICE", items: [
    "Splinting / AFO / Braces – Regime","ROHO Cushion / Hard, Soft Collar","Other",
  ]},
  { cat: "OCCUPATIONAL THERAPY – PERSONAL CARE", items: [
    "Upper / Lower Dressing","Other","Other","Other",
  ]},
  { cat: "OCCUPATIONAL THERAPY – COGNITIVE", items: [
    "Stimulation Program, Orientation","Orientation","Other",
  ]},
  { cat: "CLINICAL PSYCHOLOGY", items: ["Carer Stress Management","Carer Support Management"] },
  { cat: "DIETETICS",           items: ["Diet Counselling / Education","Modification"] },
  { cat: "SPEECH THERAPY",      items: ["Swallowing Test","Nasometer / VISI Pitch"] },
  { cat: "OTHER",               items: ["Other"] },
];

const makeKey = (cat, item, idx, col) =>
  `${cat}|${item}|${idx}|${col}`.replace(/\s+/g,"_").toLowerCase();

function EntryCell({ val = {}, onChange, isNA }) {
  const filled = !!(val.datetime || val.sign || val.date);
  if (isNA) return (
    <td style={{ ...S.td, background: "#F7FAFC", textAlign: "center" }}>
      <span style={{ fontSize: 10, color: C.muted, fontStyle: "italic" }}>N/A</span>
    </td>
  );
  return (
    <td style={{ ...S.td, background: filled ? C.cellDone : C.rowBase, padding: "5px 8px", position: "relative" }}>
      <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
        <input
          type="date"
          value={val.date || ""}
          onChange={e => onChange({ ...val, date: e.target.value })}
          style={S.dateIn}
          title="Date"
        />
        <input
          type="time"
          value={val.time || ""}
          onChange={e => onChange({ ...val, time: e.target.value })}
          style={{ ...S.dateIn, width: 68 }}
          title="Time"
        />
      </div>
      <input
        type="text"
        placeholder="Signature / Initial"
        value={val.sign || ""}
        onChange={e => onChange({ ...val, sign: e.target.value })}
        style={S.signIn}
      />
      {filled && <div style={S.doneBadge}>✓</div>}
    </td>
  );
}

function TrainingTable({ sections, values, onChange }) {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (cat) => {
    setOpenSections((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  return (
    <div style={{ overflowX: "auto" }}>
      <table style={S.table}>
        <thead>
          <tr>
            <th rowSpan={2} style={{ ...S.th, width: 280, background: "#1e6fa5", color: "#fff", textAlign: "left", paddingLeft: 14, fontSize: 12 }}>
              Training Item
            </th>
            <th colSpan={1} style={{ ...S.th, background: "#2589c7", fontSize: 11, color: "#fff" }}>
              Nurse / Therapist
            </th>
            <th colSpan={2} style={{ ...S.th, background: "#2589c7", fontSize: 11, color: "#fff" }}>
              Carer
            </th>
          </tr>
          <tr>
            {COLS.map((col) => (
              <th key={col.key} style={{ ...S.th, background: "#d0e9f7", color: "#0c3d5e", width: 200, fontSize: 11, fontWeight: 700 }}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sections.map((sec, si) => {
            const isOpen = openSections[sec.cat];
            return (
              <React.Fragment key={si}>
                <tr onClick={() => toggleSection(sec.cat)} style={{ cursor: "pointer" }}>
                  <td colSpan={4} style={S.catRow}>
                    <span style={S.catDot} />
                    {isOpen ? "▼" : "▶"} {sec.cat}
                  </td>
                </tr>
                {isOpen &&
                  sec.items.map((item, ii) => {
                    const even = ii % 2 === 0;
                    return (
                      <tr key={ii} style={{ background: even ? C.rowBase : C.rowAlt }}>
                        <td style={{ ...S.td, paddingLeft: 20, fontSize: 12.5, color: C.text, fontWeight: 500 }}>
                          {item}
                        </td>
                        {COLS.map((col) => (
                          <EntryCell
                            key={col.key}
                            isNA={sec.naColumns?.includes(col.key)}
                            val={values[makeKey(sec.cat, item, ii, col.key)] || {}}
                            onChange={(v) => onChange(makeKey(sec.cat, item, ii, col.key), v)}
                          />
                        ))}
                      </tr>
                    );
                  })}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function CarerLogBookLauncher({ patient }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button type="button" style={LAUNCHER_BTN} onClick={() => setOpen((o) => !o)}>
        {open ? "Hide Carer Log Book" : "Open Carer Log Book"}
      </button>
      {open && (
        <div style={{ marginTop: 16, border: "1px solid #e5e7eb", borderRadius: 8, overflow: "hidden" }}>
          <CarerLogBook patient={patient} embedded />
        </div>
      )}
    </div>
  );
}

export default function CarerLogBook({ patient, onBack, embedded = false }) {
  const [formData, setFormData] = useState({
    topic: "",
    name: patient?.name || "",
    carer: "",
    duration: "",
  });
  const [tab, setTab] = useState("nursing");
  const [saved, setSaved] = useState(false);

  const handleFieldChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const save = () => {
    const key = patient?.id ? `carer_log_${patient.id}` : "carer_log_draft";
    localStorage.setItem(key, JSON.stringify({ formData, savedAt: new Date().toISOString() }));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const schema = {
    title: "Carer Log Book",
    sections: [
      {
        fields: [
          {
            type: "custom",
            render: ({ values, onChange }) => (
              <div style={S.metaCard}>
                <div style={S.metaGrid}>
                  {[
                    { k: "topic", label: "Topic / Session", placeholder: "e.g. Wound Care Training" },
                    { k: "name", label: "Patient Name", placeholder: "Full name" },
                    { k: "carer", label: "Carer Name", placeholder: "Carer / Family member" },
                    { k: "duration", label: "Duration", placeholder: "e.g. 45 mins" },
                  ].map((f) => (
                    <div key={f.k}>
                      <label style={S.metaLabel}>{f.label}</label>
                      <input
                        value={values[f.k] || ""}
                        onChange={(e) => onChange(f.k, e.target.value)}
                        placeholder={f.placeholder}
                        style={S.metaInput}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ),
          },
          {
            type: "custom",
            render: ({ values, onChange }) => (
              <>
                <div style={S.tabBar}>
                  {[
                    { k: "nursing", label: "Nursing Training" },
                    { k: "therapist", label: "Therapist Training" },
                  ].map((t) => (
                    <button
                      key={t.k}
                      type="button"
                      onClick={() => setTab(t.k)}
                      style={tab === t.k ? S.tabActive : S.tabBtn}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
                <TrainingTable
                  sections={tab === "nursing" ? NURSING_SECTIONS : THERAPIST_SECTIONS}
                  values={values}
                  onChange={onChange}
                />
              </>
            ),
          },
        ],
      },
    ],
  };

  return (
    <div style={embedded ? S.embedded : S.page}>
      <CommonFormBuilder
        schema={schema}
        values={formData}
        onChange={handleFieldChange}
      />
      <div style={S.footer}>
        <span style={{ fontSize: 12, color: C.muted }}>
          {patient?.name ? `Patient: ${patient.name}` : ""}
        </span>
        <button type="button" onClick={save} style={{ ...S.btnPrimary, padding: "10px 32px" }}>
          {saved ? "✓ Saved" : "Save Carer Log"}
        </button>
      </div>
    </div>
  );
}

/* ── Styles ──────────────────────────────────────────────── */
const S = {
  page: { fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif", background: "#f8fafc", minHeight: "100vh", padding: "24px 0 48px" },
  embedded: { fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif", background: C.white, padding: "12px 0 16px" },
  btnPrimary: { background: C.primary, color: C.white, border: "none", borderRadius: 5, padding: "8px 20px", fontWeight: 600, fontSize: 13, cursor: "pointer" },
  metaCard: { background: C.white, margin: "0 auto 14px", width: "90%", border: `1px solid ${C.border}`, borderRadius: 6, padding: "14px 18px" },
  metaGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 },
  metaLabel: { display: "block", fontSize: 10, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: 0.4, marginBottom: 3 },
  metaInput: { width: "100%", border: `1px solid ${C.borderMd}`, borderRadius: 4, padding: "7px 10px", fontSize: 13, color: C.text, boxSizing: "border-box", outline: "none", background: C.white },
  tabBar: { display: "flex", width: "90%", margin: "0 auto 16px", borderBottom: `1px solid ${C.borderMd}` },
  tabBtn: { padding: "9px 20px", fontWeight: 500, fontSize: 13, cursor: "pointer", border: "none", background: "transparent", color: C.muted, borderBottom: "2px solid transparent", marginBottom: -1 },
  tabActive: { padding: "9px 20px", fontWeight: 700, fontSize: 13, cursor: "pointer", border: "none", background: "transparent", color: C.primary, borderBottom: `2px solid ${C.primary}`, marginBottom: -1 },
  table: { width: "90%", borderCollapse: "collapse", background: C.white, fontSize: 12.5, margin: "0 auto", border: `1px solid ${C.borderMd}` },
  th: { padding: "9px 10px", textAlign: "center", background: C.thBg, color: C.thText, border: `1px solid rgba(255,255,255,0.2)`, fontWeight: 600, fontSize: 11 },
  td: { padding: "6px 10px", border: `1px solid ${C.border}`, verticalAlign: "middle" },
  catRow: { background: C.catBg, color: C.catText, fontWeight: 700, fontSize: 11, padding: "6px 14px", letterSpacing: 0.5, textTransform: "uppercase", borderTop: `1px solid ${C.catBorder}`, borderBottom: `1px solid ${C.catBorder}` },
  catDot: { display: "inline-block", width: 5, height: 5, borderRadius: "50%", background: C.primary, marginRight: 8, verticalAlign: "middle" },
  dateIn: { flex: 1, border: `1px solid ${C.border}`, borderRadius: 3, padding: "3px 5px", fontSize: 11, color: C.text, background: C.white, outline: "none", minWidth: 0 },
  signIn: { width: "100%", border: `1px solid ${C.border}`, borderRadius: 3, padding: "3px 7px", fontSize: 11, color: C.text, marginTop: 4, boxSizing: "border-box", outline: "none", background: C.white },
  doneBadge: { position: "absolute", top: 3, right: 4, background: C.doneBg, color: C.done, fontSize: 9, fontWeight: 800, borderRadius: 3, padding: "1px 4px", border: `1px solid ${C.doneBorder}` },
  footer: { display: "flex", justifyContent: "space-between", alignItems: "center", width: "90%", margin: "18px auto 0", paddingTop: 14, borderTop: `1px solid ${C.border}` },
};

const LAUNCHER_BTN = {
  marginTop: 12,
  padding: "10px 18px",
  borderRadius: 6,
  border: "none",
  background: "#1d4ed8",
  color: "#fff",
  fontWeight: 600,
  fontSize: 13,
  cursor: "pointer",
};