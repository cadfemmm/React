import React, { useEffect, useMemo, useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import { SCHEMA } from "../../../schema/psychology/pssform";

export default function PSSFormBuilder({ patient, onSubmit, onBack, layout }) {
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [scoresVisible, setScoresVisible] = useState(true);

  /* ---------------- STORAGE KEY ---------------- */
  const storageKey = patient?.id
    ? `psychology::${patient.id}::PSS`
    : null;

  /* Reverse scored questions */
  const REVERSED = ["q4", "q5", "q7", "q8"];

  /* ---------------- AUTO REFILL ---------------- */
  useEffect(() => {
    if (!storageKey) return;

    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      setValues(parsed.values || {});
      setSubmitted(false);
    }
  }, [storageKey]);

  /* ---------------- HANDLERS ---------------- */
  const onChange = (name, value) => {
    setValues(v => ({ ...v, [name]: Number(value) }));
  };

  const allRequiredFilled = useMemo(() => {
    return SCHEMA.sections[0].fields.every(f => values[f.name] !== undefined);
  }, [values]);

  /* ---------------- SCORE ---------------- */
  const totalScore = useMemo(() => {
    return Object.entries(values).reduce((sum, [key, value]) => {
      if (value === undefined) return sum;
      return sum + (REVERSED.includes(key) ? 4 - value : value);
    }, 0);
  }, [values]);

  const severity = useMemo(() => {
    if (totalScore <= 13) return "Low Stress";
    if (totalScore <= 26) return "Moderate Stress";
    return "High Stress";
  }, [totalScore]);

  /* ---------------- ACTION HANDLER ---------------- */
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
        onSubmit?.({ totalScore: 0, severity: "Low Stress" });
        break;

      case "print":
        window.print();
        break;

      case "save":
        if (!storageKey) return;

        localStorage.setItem(
          storageKey,
          JSON.stringify({
            values,
            updatedAt: new Date().toISOString()
          })
        );
        alert("PSS draft saved successfully");
        break;

      default:
        break;
    }
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = () => {
    setSubmitted(true);

    if (!allRequiredFilled) {
      alert("Please answer all required questions");
      return;
    }

    const payload = {
      patientId: patient?.id,
      scale: "PSS",
      values,
      totalScore,
      severity,
      submittedAt: new Date().toISOString()
    };

    if (storageKey) {
      localStorage.setItem(storageKey, JSON.stringify({ values }));
    }
    console.log("PSS Submitted:", payload);
    alert("PSS submitted successfully");

    onSubmit?.(payload);
  };

  /* ---------------- UI ---------------- */
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
        {/* ---------- SUMMARY ---------- */}
      {scoresVisible && (
      <div style={summaryWrap}>
  {/* Row 1: Score + Severity */}
  <div style={scoreRow}>
    <div style={scorePill}>
      Total Score: {totalScore}
    </div>

    <div style={severityPill}>
      Stress Severity: {severity}
    </div>
  </div>

  {/* Row 2: Submit button */}
  <div style={submitRow}>
    <button
      style={{
        ...submitBtn,
      }}
      disabled={!allRequiredFilled}
      onClick={handleSubmit}
    >
      Submit
    </button>
  </div>
</div>
      )}

      </CommonFormBuilder>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const mainContent = {
  margin: "0 auto",
};

const summaryWrap = {
  width: "90%",
  margin: "24px auto 0",
  padding: 20
};

const scoreRow = {
  display: "flex",
  gap: 16,
  flexWrap: "wrap"
};
const severityPill = {
  flex: 1,
  background: "#FFF7ED",        // light orange
  border: "1px solid #FED7AA",  // orange border
  borderRadius: 10,
  padding: "14px 18px",
  fontSize: 16,
  fontWeight: 700,
   color: "#1f2937",         // dark orange text
  minWidth: 260
};


const scorePill = {
  flex: 1,
  background: "#f1f5ff",
  border: "1px solid #d6e2ff",
  borderRadius: 10,
  padding: "14px 18px",
  fontSize: 16,
  fontWeight: 700,
  color: "#1f2937",
  minWidth: 260
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

