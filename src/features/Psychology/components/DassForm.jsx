import React, { useState, useEffect, useMemo } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import { SCHEMA } from "../../../schema/psychology/dassform"

export default function DASSFormBuilder({ patient, onSubmit, onBack, layout }) {
  const DEPRESSION = ["q3", "q5", "q10", "q13", "q16", "q17", "q21"];
  const ANXIETY = ["q2", "q4", "q7", "q9", "q15", "q19", "q20"];
  const STRESS = ["q1", "q6", "q8", "q11", "q12", "q14", "q18"];

  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [scoresVisible, setScoresVisible] = useState(true);

  /* ================= STORAGE KEY ================= */
  const storageKey = patient?.id
    ? `psychology::${patient.id}::DASS`
    : null;

  /* ================= AUTO REFILL ================= */
  useEffect(() => {
    if (!storageKey) return;

    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      setValues(parsed.values || {});
      setSubmitted(false);
    }
  }, [storageKey]);

  /* ================= HANDLERS ================= */
  const onChange = (name, value) => {
    setValues(v => ({ ...v, [name]: Number(value) }));
  };

  const calc = keys =>
    keys.reduce((sum, k) => sum + (values[k] ?? 0), 0);

  const scores = useMemo(() => ({
    depression: calc(DEPRESSION),
    anxiety: calc(ANXIETY),
    stress: calc(STRESS)
  }), [values]);

  const severity = (score, type) => {
    const ranges = {
      depression: [[9, "Normal"], [13, "Mild"], [20, "Moderate"], [27, "Severe"], [Infinity, "Extremely Severe"]],
      anxiety: [[7, "Normal"], [9, "Mild"], [14, "Moderate"], [19, "Severe"], [Infinity, "Extremely Severe"]],
      stress: [[14, "Normal"], [18, "Mild"], [25, "Moderate"], [33, "Severe"], [Infinity, "Extremely Severe"]]
    };
    return ranges[type].find(r => score <= r[0])[1];
  };

  const allRequiredFilled = () =>
    SCHEMA.sections[0].fields.every(f => values[f.name] !== undefined);

  /* ================= ACTIONS ================= */
  const handleAction = (type) => {
    switch (type) {
      case "toggle-show-scores":
        setScoresVisible(v => !v);
        break;

      case "back":
        onBack?.();
        break;

      case "clear":
        setValues({});
        setSubmitted(false);
        if (storageKey) localStorage.removeItem(storageKey);
        break;

      case "save":
        if (!storageKey) return;
        localStorage.setItem(
          storageKey,
          JSON.stringify({ values, updatedAt: new Date().toISOString() })
        );
        alert("Draft saved successfully");
        break;

      case "print":
        window.print();
        break;

      default:
        break;
    }
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = () => {
    setSubmitted(true);

    if (!allRequiredFilled()) {
      alert("Please answer all required questions");
      return;
    }

    const payload = {
      patientId: patient.id,
      scale: "DASS-21",
      values,
      scores,
      submittedAt: new Date().toISOString()
    };

    localStorage.setItem(storageKey, JSON.stringify({ values }));
    console.log("DASS Submitted:", payload);
    alert("DASS-21 submitted successfully");

    onSubmit?.(payload);
  };

  return (
    <div style={mainContent}>
      <CommonFormBuilder
        schema={SCHEMA}
        values={values}
        onChange={onChange}
        layout="nested"
        submitted={submitted}
        onAction={handleAction}
        showScores={scoresVisible}
      >
        {scoresVisible && (
        <div style={scoreRow}>
          {["depression", "anxiety", "stress"].map((type) => (
            <div key={type} style={scoreBox}>
              {type.toUpperCase()} SCORE : {scores[type]} (
              {severity(scores[type], type)})
            </div>
          ))}
        </div>
        )}

        <div style={submitRow}>
          <button
            style={{
              ...submitBtn,
            }}
            disabled={!allRequiredFilled()}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </CommonFormBuilder>
    </div>
  );
}

/* ================= STYLES ================= */

const mainContent = { margin: "0 auto" };

const scoreRow = {
  display: "flex",
  gap: 16,
  marginTop: 20,
  flexWrap: "wrap",        // responsive on small screens
};

const scoreBox = {
  flex: 1,
  minWidth: 150,
  background: "#f1f5ff",
  border: "1px solid #d6e2ff",
  borderRadius: 10,
  padding: "8px 12px",
  fontSize: 15,
  fontWeight: 600,
  color: "#1f2937",
  display: "flex",
  alignItems: "center",
};


const submitRow = {
  display: "flex",
  justifyContent: "flex-end",
  marginTop: 24
};

const submitBtn = {
  padding: "12px 34px",
  background: "#2563EB",
  color: "#fff",
  border: "none",
  borderRadius: 10,
  fontSize: 15,
  fontWeight: 700
};
