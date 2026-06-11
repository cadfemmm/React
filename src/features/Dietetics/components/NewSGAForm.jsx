import React, { useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

/* ══════════════════════════════════════════════════════════
   NEW SGA — Subjective Global Assessment
   Scoring:
     Section A (Medical History):
       Weight Change + Dietary Intake + GI Symptoms + Functional Status
     Section B (Physical Exam):
       Subcutaneous Fat + Muscle Wasting + Edema + Ascites
     Total = A + B
     Rating: A (≤5) = Well Nourished
             B (6–18) = Mildly-Moderately Malnourished
             C (>18) = Severely Malnourished
══════════════════════════════════════════════════════════ */

export const newsgaSchema = {
  title: "Subjective Global Assessment (SGA)",
  
  sections: [
    /* ── Section A: Medical History ── */
    {
      title: "Section A — Medical History",
      fields: [
        { type: "subheading", label: "1. Weight Changes" },
        {
          type:  "input",
          name:  "overall_weight_loss_6months",
          label: "Overall loss in past 6 months (kg)",
          placeholder: "e.g. 3 kg",
        },
        {
          type:  "radio",
          name:  "weight_loss_percent",
          label: "Percent change (%)",
          options: [
            { label: "< 5%",   value: "1" },
            { label: "5–10%",  value: "2" },
            { label: "10–20%", value: "3" },
            { label: "> 20%",  value: "4" },
          ],
        },
        {
          type:  "radio",
          name:  "weight_change_2_weeks",
          label: "Change in last 2 weeks",
          options: [
            { label: "Increase",  value: "0" },
            { label: "No Change", value: "0" },
            { label: "Decrease",  value: "1" },
          ],
        },

        { type: "subheading", label: "2. Dietary Intake" },
        {
          type:  "radio",
          name:  "dietary_intake_overall_changes",
          label: "Overall changes",
          options: [
            { label: "No change", value: "0" },
            { label: "Change",    value: "1" },
          ],
        },
        {
          type:        "input",
          name:        "dietary_intake_duration",
          label:       "Duration of change",
          placeholder: "e.g. 2 weeks",
          showIf: { field: "dietary_intake_overall_changes", equals: "1" },
        },
        {
          type:  "radio",
          name:  "dietary_intake_changes",
          label: "Type of change",
          showIf: { field: "dietary_intake_overall_changes", equals: "1" },
          options: [
            { label: "Soft diet / adequate intake",         value: "1" },
            { label: "Full liquid diet",                    value: "2" },
            { label: "Hypocaloric liquid / inadequate",     value: "3" },
            { label: "Minimal intake / starvation",         value: "4" },
          ],
        },

        { type: "subheading", label: "3. Gastrointestinal Symptoms (> 2 weeks)" },
        {
          type:  "checkbox-group",
          name:  "gi_symptoms",
          label: "GI Symptoms",
          options: [
            { label: "None",          value: "0" },
            { label: "Nausea",        value: "1" },
            { label: "Vomiting",      value: "3" },
            { label: "Diarrhoea >5/day", value: "3" },
            { label: "Anorexia",      value: "3" },
          ],
        },

        { type: "subheading", label: "4. Functional Impairment" },
        {
          type:  "radio",
          name:  "functional_status_overall_impainment",
          label: "Overall impairment",
          options: [
            { label: "None (no dysfunction)",    value: "0" },
            { label: "Working but reduced",      value: "1" },
            { label: "Ambulatory",               value: "2" },
            { label: "Bedridden",                value: "3" },
          ],
        },
        {
          type:  "radio",
          name:  "functional_status_past_2weeks",
          label: "Change in past 2 weeks",
          options: [
            { label: "Improved",   value: "0" },
            { label: "No change",  value: "1" },
            { label: "Regressed",  value: "2" },
          ],
        },

        /* Auto-calculated section A score (read-only) */
        {
          type:     "input",
          name:     "medicalHistoryScore",
          label:    "Section A Score (auto-calculated)",
          readOnly: true,
        },
      ],
    },

    /* ── Section B: Physical Examination ── */
    {
      title: "Section B — Physical Examination",
      fields: [
        {
          type:  "radio",
          name:  "subcutaneous_fat",
          label: "Loss of Subcutaneous Fat",
          options: [
            { label: "Normal (0)", value: "0" },
            { label: "Mild (1)",   value: "1" },
            { label: "Moderate (1)", value: "1" },
            { label: "Severe (2)", value: "2" },
          ],
        },
        {
          type:  "radio",
          name:  "muscle_wasting",
          label: "Muscle Wasting",
          options: [
            { label: "Normal (0)",   value: "0" },
            { label: "Mild (1)",     value: "1" },
            { label: "Moderate (1)", value: "1" },
            { label: "Severe (2)",   value: "2" },
          ],
        },
        {
          type:  "radio",
          name:  "edema",
          label: "Oedema",
          options: [
            { label: "None (0)",     value: "0" },
            { label: "Moderate (1)", value: "1" },
            { label: "Severe (2)",   value: "2" },
          ],
        },
        {
          type:  "radio",
          name:  "ascites",
          label: "Ascites",
          options: [
            { label: "None (0)",     value: "0" },
            { label: "Moderate (1)", value: "1" },
            { label: "Severe (2)",   value: "2" },
          ],
        },

        /* Auto-calculated totals (read-only) */
        {
          type:     "input",
          name:     "total_sga_score",
          label:    "Total SGA Score (auto-calculated)",
          readOnly: true,
        },
        {
          type:     "input",
          name:     "interpretation",
          label:    "SGA Rating",
          readOnly: true,
        },
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════════
   Component
══════════════════════════════════════════════════════════ */
export default function NewSGAForm({ onSave, onSubmit, initialFormData, onBack }) {
  const [values, setValues] = useState(() => ({
    overall_weight_loss_6months:       "",
    weight_loss_percent:               "",
    weight_change_2_weeks:             "",
    dietary_intake_overall_changes:    "",
    dietary_intake_duration:           "",
    dietary_intake_changes:            "",
    gi_symptoms:                       [],
    functional_status_overall_impainment: "",
    functional_status_past_2weeks:     "",
    subcutaneous_fat:                  "",
    muscle_wasting:                    "",
    edema:                             "",
    ascites:                           "",
    ...(initialFormData || {}),
  }));

  const [submitted, setSubmitted] = useState(false);

  /* ── Auto-scoring ── */
  const weightChangesScore =
    Number(values.weight_loss_percent  || 0) +
    Number(values.weight_change_2_weeks || 0);

  const dietaryIntakeScore =
    values.dietary_intake_overall_changes === "1"
      ? Number(values.dietary_intake_changes || 0)
      : 0;

  const giSymptomsScore =
    Array.isArray(values.gi_symptoms) && values.gi_symptoms.includes("0")
      ? 0
      : (values.gi_symptoms || []).reduce((sum, v) => sum + Number(v || 0), 0);

  const functionalImpairmentScore =
    Number(values.functional_status_overall_impainment || 0) +
    Number(values.functional_status_past_2weeks          || 0);

  const medicalHistoryScore =
    weightChangesScore + dietaryIntakeScore + giSymptomsScore + functionalImpairmentScore;

  const physicalExamScore =
    Number(values.subcutaneous_fat || 0) +
    Number(values.muscle_wasting   || 0) +
    Number(values.edema            || 0) +
    Number(values.ascites          || 0);

  const totalSGAScore = medicalHistoryScore + physicalExamScore;

  const interpretation =
    totalSGAScore <= 5  ? "A — Well Nourished" :
    totalSGAScore <= 18 ? "B — Mildly / Moderately Malnourished" :
                          "C — Severely Malnourished";

  

  /* Inject computed values for display */
  const formValues = {
    ...values,
    medicalHistoryScore: String(medicalHistoryScore),
    total_sga_score:     String(totalSGAScore),
    interpretation,
  };

  const handleChange = (name, value) =>
    setValues(prev => ({ ...prev, [name]: value }));

  const handleAction = (type) => {
    if (type === "back")  { onBack?.(); }
    if (type === "clear") { setValues({}); setSubmitted(false); }
    if (type === "save")  { handleSubmit(); }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const payload = {
      ...values,
      medical_history_score: medicalHistoryScore,
      total_sga_score:       totalSGAScore,
      interpretation,
    };
    if (onSave)   onSave("NewSGA", payload);
    if (onSubmit) onSubmit(payload);
  };

  return (
    <div>
      {/* Score banner */}
      

      {/* Form */}
      <CommonFormBuilder
        schema={newsgaSchema}
        values={formValues}
        onChange={handleChange}
        onAction={handleAction}
        submitted={submitted}
      />

      {/* Submit */}
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "12px 0" }}>
        <button
          type="button"
          onClick={handleSubmit}
          style={{
            padding: "12px 32px", background: "#2563EB",
            color: "#fff", border: "none", borderRadius: 8,
            fontWeight: 700, fontSize: 15, cursor: "pointer",
          }}
        >
          Submit SGA Assessment
        </button>
      </div>
    </div>
  );
}
