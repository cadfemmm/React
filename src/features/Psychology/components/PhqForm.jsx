import React, { useEffect, useMemo, useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import { SCHEMA } from "../../../schema/psychology/phqform";

export default function PHQ9FormBuilder({ patient, onSubmit, onBack }) {
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [scoresVisible, setScoresVisible] = useState(true);

  /* ---------------- STORAGE KEY ---------------- */
  const storageKey = patient?.id
    ? `psychology::${patient.id}::PHQ9`
    : null;

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
    return Object.values(values).reduce(
      (sum, v) => (v !== undefined ? sum + v : sum),
      0
    );
  }, [values]);

  const severity = useMemo(() => {
    if (totalScore <= 4) return "Minimal / None";
    if (totalScore <= 9) return "Mild";
    if (totalScore <= 14) return "Moderate";
    if (totalScore <= 19) return "Moderately Severe";
    return "Severe";
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
        onSubmit?.({ totalScore: 0, severity: "Minimal / None" });
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
        alert("PHQ-9 draft saved successfully");
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
      scale: "PHQ-9",
      values,
      totalScore,
      severity,
      submittedAt: new Date().toISOString()
    };

    if (storageKey) {
      localStorage.setItem(storageKey, JSON.stringify({ values }));
    }
    console.log("PHQ-9 Submitted:", payload);
    alert("PHQ-9 submitted successfully");

    onSubmit?.(payload);
  };

  /* ---------------- UI ---------------- */
  return (
    <div style={mainContent}>
      <CommonFormBuilder
        schema={SCHEMA}
        layout="nested"
        values={values}
        onChange={onChange}
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
      Depression Severity: {severity}
    </div>
  </div>
</div>
        )}

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
