import React, { useEffect, useMemo, useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import { SCHEMA } from "../../../schema/psychology/hamaform";

export default function HAM_A_FormBuilder({ patient, onSubmit, onBack }) {
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [scoresVisible, setScoresVisible] = useState(true);

  /* ---------------- STORAGE KEY ---------------- */
  const storageKey = patient?.id
    ? `psychology::${patient.id}::HAMA`
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
  }, [values, SCHEMA]);

  /* ---------------- SCORE ---------------- */
  const totalScore = useMemo(
    () =>
      Object.values(values).reduce(
        (sum, v) => sum + (v ?? 0),
        0
      ),
    [values]
  );

  const severity = useMemo(() => {
    if (totalScore < 17) return "Mild";
    if (totalScore <= 24) return "Mild to Moderate";
    if (totalScore <= 30) return "Moderate to Severe";
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
        onSubmit?.({ totalScore: 0, severity: "Mild" });
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
        alert("HAM-A draft saved successfully");
        break;

      default:
        break;
    }
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = () => {
    setSubmitted(true);

    const result = { totalScore, severity };

    onSubmit?.(result);

    alert(
      `HAM-A Submitted\n\nScore: ${totalScore}\nSeverity: ${severity}`
    );
  };

  /* ---------------- UI ---------------- */
  return (
    <div style={mainContent}>
      <CommonFormBuilder
        schema={SCHEMA}
        values={values}
        layout="nested"
        onChange={onChange}
        submitted={submitted}
        onAction={handleAction}
        showScores={scoresVisible}
      >
      {scoresVisible && (
      <div style={summaryWrap}>
  <div style={scoreRow}>
    <div style={scorePill}>
      TOTAL SCORE : {totalScore}
    </div>

    <div style={severityPill}>
      ANXIETY SEVERITY : {severity}
    </div>
  </div>
</div>
      )}

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



