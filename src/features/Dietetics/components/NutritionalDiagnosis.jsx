import React, { useMemo, useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import {
  ET_OPTIONS,
  IDNT_PROBLEM_CHART,
  problemKeyFromLabel,
} from "./nutritionDiagnosisData";

/**
 * Nutrition Diagnosis — FormBuilder custom field (same pattern as SGA / growth_chart).
 *
 * Backend:
 *   { "type": "custom", "name": "nutritional_diagnosis" }
 *
 * Stored value shape:
 *   { diagnosis_problems: [{ problem, etiology: [], signs: "" }] }
 */
export default function NutritionalDiagnosis({
  values = {},
  onChange,
  readOnly = false,
}) {
  const [showProblemChart, setShowProblemChart] = useState(false);

  const problems = Array.isArray(values.diagnosis_problems)
    ? values.diagnosis_problems
    : [];

  const setProblems = (next) => {
    if (readOnly) return;
    if (typeof onChange === "function") {
      onChange("diagnosis_problems", next);
    }
  };

  const diagnosisValues = useMemo(() => {
    const data = {};
    problems.forEach((item, index) => {
      const etiologyOptions = ET_OPTIONS[problemKeyFromLabel(item.problem)] || [];
      const selectedEtiologyValues = Array.isArray(item.etiology)
        ? item.etiology
        : [];
      const selectedEtiologyLabels = etiologyOptions
        .filter((opt) => selectedEtiologyValues.includes(opt.value))
        .map((opt) => opt.label);

      data[`diagnosis_signs_${index}`] = item.signs || "";
      data[`diagnosis_problem_${index}`] = item.problem || "";
      data[`diagnosis_etiology_${index}`] = selectedEtiologyValues;
      data[`nutrition_diagnosis_${index}`] =
        item.problem && selectedEtiologyLabels.length > 0 && item.signs
          ? `${item.problem} related to ${selectedEtiologyLabels.join(", ")} as evidenced by ${item.signs}`
          : "";
    });
    return data;
  }, [problems]);

  return (
    <div style={{ marginTop: 8, marginBottom: 16 }}>
      <div style={{ textAlign: "center", padding: 10 }}>
        <button
          type="button"
          style={btnBlue}
          disabled={readOnly}
          onClick={() => setShowProblemChart(true)}
        >
          📋 Nutrition Diagnosis
        </button>
      </div>

      {problems.length > 0 ? (
        problems.map((diagnosis, index) => (
          <div key={`${diagnosis.problem}-${index}`} style={{ marginBottom: 24 }}>
            <CommonFormBuilder
              schema={{
                title: `Nutrition Diagnosis ${index + 1}`,
                sections: [
                  {
                    fields: [
                      {
                        name: `diagnosis_problem_${index}`,
                        label: "Problem",
                        type: "input",
                        readOnly: true,
                      },
                      {
                        name: `diagnosis_etiology_${index}`,
                        label: "Etiology",
                        type: "multi-select-dropdown",
                        options:
                          ET_OPTIONS[problemKeyFromLabel(diagnosis.problem)] ||
                          [],
                        readOnly,
                      },
                      {
                        name: `diagnosis_signs_${index}`,
                        label: "Signs & Symptoms",
                        type: "input",
                        readOnly,
                      },
                      {
                        name: `nutrition_diagnosis_${index}`,
                        label: "Nutrition Diagnosis",
                        type: "input",
                        readOnly: true,
                      },
                    ],
                  },
                ],
              }}
              values={diagnosisValues}
              onChange={(name, value) => {
                if (readOnly) return;
                const updated = [...problems];
                if (!updated[index]) return;
                if (name.startsWith("diagnosis_signs_")) {
                  updated[index] = { ...updated[index], signs: value };
                  setProblems(updated);
                } else if (name.startsWith("diagnosis_etiology_")) {
                  updated[index] = {
                    ...updated[index],
                    etiology: Array.isArray(value) ? value : [],
                  };
                  setProblems(updated);
                }
              }}
            />
            {!readOnly && (
              <button
                type="button"
                onClick={() =>
                  setProblems(problems.filter((_, i) => i !== index))
                }
                style={btnRemove}
              >
                Remove
              </button>
            )}
          </div>
        ))
      ) : (
        <div style={{ padding: 20, textAlign: "center", color: "#6b7280" }}>
          No nutrition diagnosis selected. Click &quot;Nutrition Diagnosis&quot; to
          add one.
        </div>
      )}

      {showProblemChart && (
        <div style={modalOverlay} onClick={() => setShowProblemChart(false)}>
          <div
            style={modalBoxLarge}
            onClick={(e) => e.stopPropagation()}
          >
            <h4 style={{ marginTop: 0 }}>Nutrition Diagnostic Terminology</h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
              }}
            >
              {Object.entries(IDNT_PROBLEM_CHART).map(
                ([sectionTitle, sectionProblems]) => (
                  <div
                    key={sectionTitle}
                    style={{
                      border: "1px solid #e5e7eb",
                      borderRadius: 6,
                      padding: 12,
                    }}
                  >
                    <h5 style={{ marginBottom: 8 }}>{sectionTitle}</h5>
                    {sectionProblems.map((item) => (
                      <label
                        key={item.label}
                        style={{
                          display: "flex",
                          gap: 8,
                          alignItems: "flex-start",
                          marginBottom: 6,
                          cursor: readOnly ? "default" : "pointer",
                          fontSize: 14,
                        }}
                      >
                        <input
                          type="checkbox"
                          disabled={readOnly}
                          checked={problems.some(
                            (p) => p.problem === item.label,
                          )}
                          onChange={(e) => {
                            if (readOnly) return;
                            if (e.target.checked) {
                              setProblems([
                                ...problems,
                                { problem: item.label, etiology: [], signs: "" },
                              ]);
                            } else {
                              setProblems(
                                problems.filter(
                                  (p) => p.problem !== item.label,
                                ),
                              );
                            }
                          }}
                        />
                        <span>{item.label}</span>
                      </label>
                    ))}
                  </div>
                ),
              )}
            </div>
            <button
              type="button"
              style={{ ...btnBlue, marginTop: 16 }}
              onClick={() => setShowProblemChart(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const btnBlue = {
  padding: "6px 12px",
  background: "#047bff",
  color: "white",
  borderRadius: 6,
  border: "none",
  cursor: "pointer",
  fontWeight: 600,
  fontSize: 13,
};

const btnRemove = {
  marginTop: 10,
  padding: "6px 12px",
  backgroundColor: "#ef4444",
  color: "white",
  border: "none",
  borderRadius: 4,
  cursor: "pointer",
};

const modalBoxLarge = {
  background: "#fff",
  padding: 20,
  borderRadius: 8,
  width: "70vw",
  maxHeight: "85vh",
  overflowY: "auto",
};

const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999,
};
