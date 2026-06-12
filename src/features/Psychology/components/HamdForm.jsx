import React, { useMemo, useState, useEffect } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import { SCHEMA } from "../../../schema/psychology/hamdform";

export default function HAMDFormBuilder({ patient, onSubmit, onBack }) {
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const totalScore = useMemo(() => {
    const scoreKeys = [
      "q1",
      "q2",
      "q3",
      "q4",
      "q5",
      "q6",
      "q7",
      "q8",
      "q9",
      "q10",
      "q11",
      "q12",
      "q13",
      "q14",
      "q15",
      "q17",
    ];
    let sum = scoreKeys.reduce(
      (s, k) => s + (values[k] !== undefined ? Number(values[k]) : 0),
      0,
    );
    const method = values.loss_of_weight_method;
    const q16Val =
      method === "a" ? values.q16_a : method === "b" ? values.q16_b : undefined;
    sum += q16Val !== undefined ? Number(q16Val) : 0;
    return sum;
  }, [values]);
  const storageKey = patient ? `psychology_hamd_draft_${patient.name}` : null;

  useEffect(() => {
    if (!storageKey) return;

    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      setValues(parsed.values || {});
      setSubmitted(false);
    }
  }, [storageKey]);
  const getSeverity = (score) => {
    if (score <= 7) return "Normal / In Remission";
    if (score <= 17) return "Mild Depression";
    if (score <= 24) return "Moderate Depression";
    return "Severe Depression";
  };

  const severity = getSeverity(totalScore);

  const onChange = (name, value) => {
    if (name === "loss_of_weight_method") {
      setValues((v) => ({ ...v, [name]: value }));
    } else {
      setValues((v) => ({ ...v, [name]: Number(value) }));
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    onSubmit?.({ totalScore, severity, responses: values });
  };

  const handleAction = (type) => {
    switch (type) {
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
            updatedAt: new Date().toISOString(),
          }),
        );
        alert("GAD-7 draft saved successfully");
        break;

      default:
        break;
    }
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
      >
        <div style={summaryWrap}>
          <div style={scoreRow}>
            <div style={scorePill}>TOTAL SCORE : {totalScore}</div>

            <div style={severityPill}>Depression Severity: {severity}</div>
          </div>

          <div style={submitRow}>
            <button style={submitBtn} onClick={handleSubmit}>
              Submit
            </button>
          </div>
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
  padding: 20,
};

const scoreRow = {
  display: "flex",
  gap: 16,
  flexWrap: "wrap",
};
const severityPill = {
  flex: 1,
  background: "#FFF7ED", // light orange
  border: "1px solid #FED7AA", // orange border
  borderRadius: 10,
  padding: "14px 18px",
  fontSize: 16,
  fontWeight: 700,
  color: "#1f2937", // dark orange text
  minWidth: 260,
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
  minWidth: 260,
};

const submitRow = {
  display: "flex",
  justifyContent: "flex-end",
  marginTop: 24,
};

const submitBtn = {
  padding: "12px 34px",
  background: "#2563EB",
  color: "#fff",
  border: "none",
  borderRadius: 10,
  fontSize: 15,
  fontWeight: 700,
};
