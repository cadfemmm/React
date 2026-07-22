import React, { useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const C = {
  headerBg: "#1e6fa5",
  headerText: "#fff",
  subHeaderBg: "#d0e9f7",
  subHeaderText: "#0c3d5e",
  border: "#b2c8d8",
  danger: "#dc2626",
  dangerBg: "#fef2f2",
  dangerBorder: "#fca5a5",
  warning: "#d97706",
  warningBg: "#fffbeb",
  success: "#16a34a",
  successBg: "#f0fdf4",
  successBorder: "#86efac",
  text: "#0f172a",
  muted: "#475569",
  white: "#fff",
  stepBg: "#e8f4f8",
  stepBorder: "#2589c7",
};

const PRE_CRITERIA = [
  "The patient is drowsy and unable to sit upright.",
  "The patient is having chest infection or chesty cough.",
  "The patient's mouth is not clean and has oral thrush.",
];

const OBSERVED_PROBLEMS = [
  "Absent swallow",
  "Water leaks out of mouth",
  "Coughing",
  "Choking",
  "Breathlessness",
  "Wet/gurgly voice",
  "Delayed swallow",
];

const STEPS = [
  { id: 1, label: "Give 1st tsp of water.", bold: "Any problems?" },
  { id: 2, label: "Give 2nd tsp of water.", bold: "Any problems?" },
  { id: 3, label: "Give 3rd tsp of water.", bold: "Any problems?" },
  {
    id: 4,
    label: "Give 90ml of water. No straw. Observe the patient drink ½ glass of water continuously.",
    bold: "Any problems?",
  },
];

const PASS_ACTIONS = [
  "Commence oral diet",
  "Supervise first mealtime and note any swallowing issues",
  "Refer to SLT if any concerns",
  "Repeat screening test if any deterioration in condition",
  "Record oral diet intake",
];

const FAIL_ACTIONS = [
  "Keep patient NBM.",
  "Inform the medical officer (if available)",
  "Refer to SLT.",
  "Continue regular oral care.",
];

const LEGEND = [
  { abbr: "NBM", full: "Nil-by-mouth" },
  { abbr: "SLT", full: "Speech-Language Therapist" },
  { abbr: "tsp", full: "teaspoon" },
];

function YNToggle({ value, onChange, disabled }) {
  return (
    <div style={{ display: "flex", gap: 6 }}>
      {["Y", "N"].map((opt) => (
        <button
          key={opt}
          type="button"
          disabled={disabled}
          onClick={() => !disabled && onChange(opt)}
          style={{
            width: 40,
            height: 32,
            borderRadius: 6,
            border: `2px solid ${
              value === opt
                ? opt === "Y"
                  ? C.danger
                  : C.success
                : C.border
            }`,
            background:
              value === opt
                ? opt === "Y"
                  ? C.dangerBg
                  : C.successBg
                : C.white,
            color:
              value === opt
                ? opt === "Y"
                  ? C.danger
                  : C.success
                : C.muted,
            fontWeight: 700,
            fontSize: 13,
            cursor: disabled ? "default" : "pointer",
            transition: "all 0.15s",
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function AlertBox({ type, children }) {
  const styles = {
    danger: { bg: C.dangerBg, border: C.dangerBorder, color: C.danger },
    success: { bg: C.successBg, border: C.successBorder, color: C.success },
    warning: { bg: C.warningBg, border: "#fcd34d", color: C.warning },
  };
  const s = styles[type] || styles.warning;
  return (
    <div
      style={{
        marginTop: 10,
        padding: "10px 14px",
        borderRadius: 8,
        border: `1.5px solid ${s.border}`,
        background: s.bg,
        color: s.color,
        fontSize: 13,
      }}
    >
      {children}
    </div>
  );
}

function OutcomeBox({ label, active, color, activeBg }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 20px",
        border: `2px solid ${active ? color : C.border}`,
        borderRadius: 10,
        background: active ? activeBg : C.white,
        minWidth: 200,
      }}
    >
      <div
        style={{
          width: 22,
          height: 22,
          border: `2px solid ${active ? color : C.border}`,
          borderRadius: 4,
          background: active ? color : C.white,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {active && <span style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>✓</span>}
      </div>
      <span style={{ fontWeight: 700, fontSize: 14, color: active ? color : C.muted }}>{label}</span>
    </div>
  );
}

/* Custom Field Renderer 1: Pre-Assessment Criteria */
function PreAssessmentCriteriaField({ values, onChange, readOnly }) {
  const pre = values.pre || {};

  const handlePreChange = (index, val) => {
    const updated = { ...pre, [index]: val };
    const preAnswered = PRE_CRITERIA.every((_, i) => updated[i] !== undefined);
    const anyPreYes = PRE_CRITERIA.some((_, i) => updated[i] === "Y");
    const canScreen = preAnswered && !anyPreYes;

    onChange("pre", updated);
    onChange("pre_criteria_passed", canScreen);
  };

  const preAnswered = PRE_CRITERIA.every((_, i) => pre[i] !== undefined);
  const anyPreYes = PRE_CRITERIA.some((_, i) => pre[i] === "Y");

  return (
    <div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ background: C.subHeaderBg, color: C.subHeaderText, fontWeight: 700, fontSize: 12, padding: "8px 12px", border: `1px solid ${C.border}`, textAlign: "left", width: "70%" }}>
              Criteria
            </th>
            <th style={{ background: C.subHeaderBg, color: C.subHeaderText, fontWeight: 700, fontSize: 12, padding: "8px 12px", border: `1px solid ${C.border}`, textAlign: "center", width: "30%" }}>
              Response
            </th>
          </tr>
        </thead>
        <tbody>
          {PRE_CRITERIA.map((crit, i) => (
            <tr key={i} style={{ background: pre[i] === "Y" ? C.dangerBg : pre[i] === "N" ? C.white : C.white }}>
              <td style={{ padding: "8px 12px", border: `1px solid ${C.border}`, fontSize: 13, textAlign: "left" }}>{crit}</td>
              <td style={{ padding: "8px 12px", border: `1px solid ${C.border}`, fontSize: 13, textAlign: "center" }}>
                <YNToggle value={pre[i]} onChange={(v) => handlePreChange(i, v)} disabled={readOnly} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {preAnswered && anyPreYes && (
        <AlertBox type="danger">
          <strong>NOT SAFE to proceed.</strong> If you answer YES to any statement, keep the patient NBM, refer to SLT, and continue with regular oral care.
        </AlertBox>
      )}
      {preAnswered && !anyPreYes && (
        <AlertBox type="success">
          All criteria answered NO — you may proceed with the water swallow screening.
        </AlertBox>
      )}
    </div>
  );
}

/* Custom Field Renderer 2: Water Swallow Steps & Problems */
function WaterSwallowScreeningField({ values, onChange, readOnly }) {
  const steps = values.steps || {};
  const problems = values.problems || {};
  const anyStepYes = STEPS.some((s) => steps[s.id] === "Y");
  const allStepsAnswered = STEPS.every((s) => steps[s.id] !== undefined);

  const handleStepChange = (stepId, val) => {
    const updatedSteps = { ...steps, [stepId]: val };
    const stepYes = STEPS.some((s) => updatedSteps[s.id] === "Y");
    const allAnswered = STEPS.every((s) => updatedSteps[s.id] !== undefined);

    onChange("steps", updatedSteps);

    if (stepYes) {
      onChange("outcome", "refer");
      onChange("screening_complete", true);
    } else if (allAnswered) {
      onChange("outcome", "pass");
      onChange("screening_complete", true);
    } else {
      onChange("outcome", null);
      onChange("screening_complete", false);
    }
  };

  return (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      {/* Steps List */}
      <div style={{ flex: "1 1 580px" }}>
        {STEPS.map((step, idx) => {
          const prevBlocked = idx > 0 && steps[STEPS[idx - 1].id] === "Y";
          const isBlocked = prevBlocked || (idx > 0 && steps[STEPS[idx - 1].id] === undefined);
          const isActive = !isBlocked;
          const answered = steps[step.id] !== undefined;

          return (
            <div key={step.id} style={{ marginBottom: 10 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: `2px solid ${answered ? (steps[step.id] === "Y" ? C.danger : C.stepBorder) : C.border}`,
                  background: answered ? (steps[step.id] === "Y" ? C.dangerBg : C.stepBg) : isActive ? C.white : "#f8fafc",
                  opacity: isActive ? 1 : 0.45,
                }}
              >
                <input
                  type="checkbox"
                  checked={answered}
                  readOnly
                  style={{ width: 16, height: 16, accentColor: C.headerBg }}
                />
                <div style={{ flex: 1, fontSize: 13 }}>
                  {step.label} <strong>{step.bold}</strong>
                </div>
                <YNToggle
                  value={steps[step.id]}
                  onChange={(v) => isActive && handleStepChange(step.id, v)}
                  disabled={readOnly || !isActive}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Observed Problems & Failure Actions Side Panel */}
      <div style={{ flex: "1 1 380px", display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ border: `1.5px solid ${C.border}`, borderRadius: 8, padding: "10px 14px", background: C.white }}>
          <div style={{ fontWeight: 700, fontSize: 12, color: C.headerBg, marginBottom: 8 }}>
            Observed Problem(s):
          </div>
          {OBSERVED_PROBLEMS.map((p) => (
            <label key={p} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5, fontSize: 12, cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={!!problems[p]}
                disabled={readOnly || !anyStepYes}
                onChange={(e) => onChange("problems", { ...problems, [p]: e.target.checked })}
                style={{ width: 13, height: 13, accentColor: C.danger }}
              />
              {p}
            </label>
          ))}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
            <input
              type="checkbox"
              checked={!!problems["other"]}
              disabled={readOnly || !anyStepYes}
              onChange={(e) => onChange("problems", { ...problems, other: e.target.checked })}
              style={{ width: 13, height: 13, accentColor: C.danger }}
            />
            <span style={{ fontSize: 12 }}>Other:</span>
            <input
              type="text"
              value={values.otherProblem || ""}
              disabled={readOnly || !anyStepYes}
              onChange={(e) => onChange("otherProblem", e.target.value)}
              placeholder="Please indicate"
              style={{ flex: 1, fontSize: 11, border: `1px solid ${C.border}`, borderRadius: 4, padding: "2px 6px" }}
            />
          </div>
        </div>

        <div style={{ border: `1.5px solid ${C.dangerBorder}`, borderRadius: 8, padding: "10px 14px", background: C.dangerBg }}>
          <div style={{ fontWeight: 700, fontSize: 12, color: C.danger, marginBottom: 6 }}>If YES to any step:</div>
          {FAIL_ACTIONS.map((a, i) => (
            <div key={i} style={{ fontSize: 12, color: C.text, marginBottom: 3 }}>• {a}</div>
          ))}
        </div>

        <div style={{ border: `1.5px dashed ${C.border}`, borderRadius: 8, padding: "8px 12px", background: "#fafcfe" }}>
          <div style={{ fontWeight: 700, fontSize: 11, color: C.muted, marginBottom: 4 }}>LEGEND:</div>
          {LEGEND.map((l, i) => (
            <div key={i} style={{ fontSize: 11, color: C.muted }}>{i + 1}. <strong>{l.abbr}</strong>: {l.full}</div>
          ))}
        </div>
      </div>

      {/* Success/Pass Block */}
      {allStepsAnswered && !anyStepYes && (
        <div style={{ width: "100%", marginTop: 12, border: `1.5px solid ${C.successBorder}`, borderRadius: 8, padding: "12px 16px", background: C.successBg }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: C.success, marginBottom: 8 }}>
            ✓ All steps passed — NO problems observed:
          </div>
          {PASS_ACTIONS.map((a, i) => (
            <div key={i} style={{ fontSize: 13, color: C.text, marginBottom: 4 }}>• {a}</div>
          ))}
        </div>
      )}
    </div>
  );
}

/* Custom Field Renderer 3: Outcome Display */
function ScreeningOutcomeField({ values }) {
  const outcome = values.outcome;
  if (!values.submitted || !outcome) return null;

  return (
    <div>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>
        <OutcomeBox label="PASS screening" active={outcome === "pass"} color={C.success} activeBg={C.successBg} />
        <OutcomeBox label="REFER to SLT" active={outcome === "refer"} color={C.danger} activeBg={C.dangerBg} />
      </div>
      {outcome === "pass" && (
        <AlertBox type="success">
          Patient <strong>PASSED</strong> the swallow screening. Commence oral diet and supervise first mealtime.
        </AlertBox>
      )}
      {outcome === "refer" && (
        <AlertBox type="danger">
          Patient <strong>FAILED</strong> swallow screening. Keep NBM, notify MO, and refer to SLT immediately.
        </AlertBox>
      )}
    </div>
  );
}

export default function NursingSwallowScreenerContainer({ patient, onBack }) {
  const [values, setValues] = useState({
    pre: {},
    steps: {},
    problems: {},
    otherProblem: "",
    outcome: null,
    submitted: false,
    pre_criteria_passed: false,
    screening_complete: false,
  });

  const schema = {
    title: "Nursing Swallow Screener",
    titleInfo: patient?.name ? `Patient: ${patient.name} | MRN: ${patient.id}` : null,
    actions: [{ type: "reset", label: "Reset" }],
    sections: [
      {
        key: "pre_assessment",
        title: "PRE-ASSESSMENT CRITERIA",
        fields: [
          {
            name: "pre_criteria",
            type: "custom",
            render: (props) => <PreAssessmentCriteriaField {...props} />,
          },
        ],
      },
      {
        key: "water_swallow",
        title: "WATER SWALLOW SCREENING",
        subtitle: "Please tick [✓] the boxes accordingly.",
        showIf: { field: "pre_criteria_passed", equals: true },
        fields: [
          {
            name: "swallow_screening",
            type: "custom",
            render: (props) => <WaterSwallowScreeningField {...props} />,
          },
        ],
      },
      {
        key: "outcome_section",
        title: "Screening Outcome",
        showIf: { field: "submitted", equals: true },
        fields: [
          {
            name: "outcome_view",
            type: "custom",
            render: (props) => <ScreeningOutcomeField {...props} />,
          },
        ],
      },
    ],
  };

  const handleChange = (name, val) => {
    setValues((prev) => ({ ...prev, [name]: val }));
  };

  const handleAction = (actionType) => {
    if (actionType === "reset") {
      setValues({
        pre: {},
        steps: {},
        problems: {},
        otherProblem: "",
        outcome: null,
        submitted: false,
        pre_criteria_passed: false,
        screening_complete: false,
      });
    }
  };

  const handleSubmit = () => {
    if (!values.pre_criteria_passed && !PRE_CRITERIA.every((_, i) => values.pre[i] !== undefined)) {
      alert("Please complete all pre-assessment criteria.");
      return;
    }
    if (!values.pre_criteria_passed) {
      alert("Patient does not meet criteria. Keep NBM and refer to SLT.");
      return;
    }
    if (!values.screening_complete) {
      alert("Please complete all water swallow steps.");
      return;
    }
    handleChange("submitted", true);
  };

  return (
    <div>
      <CommonFormBuilder
        schema={schema}
        values={values}
        onChange={handleChange}
        onAction={handleAction}
        patient={patient}
      >
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 16 }}>
          {!values.submitted && values.pre_criteria_passed && (
            <button
              type="button"
              onClick={handleSubmit}
              style={{
                background: C.headerBg,
                color: "#fff",
                border: "none",
                borderRadius: 7,
                padding: "9px 22px",
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              Submit Screening
            </button>
          )}
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              style={{
                background: C.white,
                color: C.headerBg,
                border: `2px solid ${C.headerBg}`,
                borderRadius: 7,
                padding: "9px 22px",
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              Back
            </button>
          )}
        </div>
      </CommonFormBuilder>
    </div>
  );
}