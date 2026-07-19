export function computeNewSgaWeightScore(values = {}) {
  return (
    Number(values.weight_loss_percent || 0) +
    Number(values.weight_change_2_weeks || 0)
  );
}

export function computeNewSgaDietaryScore(values = {}) {
  if (values.dietary_intake_overall_changes !== "1") return 0;
  return Number(values.dietary_intake_changes || 0);
}

const GI_SYMPTOM_SCORES = {
  0: 0,
  none: 0,
  1: 1,
  nausea: 1,
  3: 3,
  vomiting: 3,
  diarrhoea: 3,
  anorexia: 3,
};

export function computeNewSgaGiScore(values = {}) {
  const symptoms = Array.isArray(values.gi_symptoms) ? values.gi_symptoms : [];
  if (symptoms.includes("0") || symptoms.includes("none")) return 0;
  return symptoms.reduce(
    (sum, v) => sum + Number(GI_SYMPTOM_SCORES[v] ?? 0),
    0,
  );
}

export function computeNewSgaFunctionalScore(values = {}) {
  return (
    Number(values.functional_status_overall_impainment || 0) +
    Number(values.functional_status_past_2weeks || 0)
  );
}

export function computeNewSgaMedicalHistoryScore(values = {}) {
  return (
    computeNewSgaWeightScore(values) +
    computeNewSgaDietaryScore(values) +
    computeNewSgaGiScore(values) +
    computeNewSgaFunctionalScore(values)
  );
}

export function computeNewSgaPhysicalExamScore(values = {}) {
  return (
    Number(values.subcutaneous_fat || 0) +
    Number(values.muscle_wasting || 0) +
    Number(values.edema || 0) +
    Number(values.ascites || 0)
  );
}

export function computeNewSgaTotalScore(values = {}) {
  return (
    computeNewSgaMedicalHistoryScore(values) +
    computeNewSgaPhysicalExamScore(values)
  );
}

export function computeNewSgaRating(values = {}) {
  const total = computeNewSgaTotalScore(values);
  if (total <= 5) return "A — Well Nourished";
  if (total <= 18) return "B — Mildly / Moderately Malnourished";
  return "C — Severely Malnourished";
}

const NEWSGA_SCHEMA = {
  title: "Subjective Global Assessment (SGA)",
  sections: [
    {
      title: "Section A — Medical History",
      fields: [
        { type: "subheading", label: "1. Weight Changes" },
        {
          type: "input",
          name: "overall_weight_loss_6months",
          label: "Overall loss in past 6 months (kg)",
          placeholder: "e.g. 3 kg",
        },
        {
          type: "radio",
          name: "weight_loss_percent",
          label: "Percent change (%)",
          options: [
            { label: "< 5%", value: "1" },
            { label: "5–10%", value: "2" },
            { label: "10–20%", value: "3" },
            { label: "> 20%", value: "4" },
          ],
        },
        {
          type: "radio",
          name: "weight_change_2_weeks",
          label: "Change in last 2 weeks",
          options: [
            { label: "Increase", value: "0" },
            { label: "No Change", value: "0" },
            { label: "Decrease", value: "1" },
          ],
        },

        { type: "subheading", label: "2. Dietary Intake" },
        {
          type: "radio",
          name: "dietary_intake_overall_changes",
          label: "Overall changes",
          options: [
            { label: "No change", value: "0" },
            { label: "Change", value: "1" },
          ],
        },
        {
          type: "input",
          name: "dietary_intake_duration",
          label: "Duration of change",
          placeholder: "e.g. 2 weeks",
          showIf: { field: "dietary_intake_overall_changes", equals: "1" },
        },
        {
          type: "radio",
          name: "dietary_intake_changes",
          label: "Type of change",
          showIf: { field: "dietary_intake_overall_changes", equals: "1" },
          options: [
            { label: "Soft diet / adequate intake", value: "1" },
            { label: "Full liquid diet", value: "2" },
            { label: "Hypocaloric liquid / inadequate", value: "3" },
            { label: "Minimal intake / starvation", value: "4" },
          ],
        },

        {
          type: "subheading",
          label: "3. Gastrointestinal Symptoms (> 2 weeks)",
        },
        {
          type: "checkbox-group",
          name: "gi_symptoms",
          label: "GI Symptoms",
          options: [
            { label: "None", value: "none" },
            { label: "Nausea", value: "nausea" },
            { label: "Vomiting", value: "vomiting" },
            { label: "Diarrhoea >5/day", value: "diarrhoea" },
            { label: "Anorexia", value: "anorexia" },
          ],
        },

        { type: "subheading", label: "4. Functional Impairment" },
        {
          type: "radio",
          name: "functional_status_overall_impainment",
          label: "Overall impairment",
          options: [
            { label: "None (no dysfunction)", value: "0" },
            { label: "Working but reduced", value: "1" },
            { label: "Ambulatory", value: "2" },
            { label: "Bedridden", value: "3" },
          ],
        },
        {
          type: "radio",
          name: "functional_status_past_2weeks",
          label: "Change in past 2 weeks",
          options: [
            { label: "Improved", value: "0" },
            { label: "No change", value: "1" },
            { label: "Regressed", value: "2" },
          ],
        },
        {
          type: "score-box",
          name: "medicalHistoryScore",
          label: "Section A Score",
          compute: computeNewSgaMedicalHistoryScore,
        },
      ],
    },
    {
      title: "Section B — Physical Examination",
      fields: [
        {
          type: "radio",
          name: "subcutaneous_fat",
          label: "Loss of Subcutaneous Fat",
          options: [
            { label: "Normal (0)", value: "0" },
            { label: "Mild (1)", value: "1" },
            { label: "Moderate (1)", value: "1" },
            { label: "Severe (2)", value: "2" },
          ],
        },
        {
          type: "radio",
          name: "muscle_wasting",
          label: "Muscle Wasting",
          options: [
            { label: "Normal (0)", value: "0" },
            { label: "Mild (1)", value: "1" },
            { label: "Moderate (1)", value: "1" },
            { label: "Severe (2)", value: "2" },
          ],
        },
        {
          type: "radio",
          name: "edema",
          label: "Oedema",
          options: [
            { label: "None (0)", value: "0" },
            { label: "Moderate (1)", value: "1" },
            { label: "Severe (2)", value: "2" },
          ],
        },
        {
          type: "radio",
          name: "ascites",
          label: "Ascites",
          options: [
            { label: "None (0)", value: "0" },
            { label: "Moderate (1)", value: "1" },
            { label: "Severe (2)", value: "2" },
          ],
        },
        {
          type: "score-box",
          name: "total_sga_score",
          label: "Total SGA Score",
          compute: computeNewSgaTotalScore,
        },
        {
          type: "score-box",
          name: "interpretation",
          label: "SGA Rating",
          compute: computeNewSgaRating,
        },
      ],
    },
  ],
};
export const NEWSGA_REGISTRY_ENTRY = {
  id: "NewSGA",
  name: "New Subjective Global Assessment (SGA)",
  ...NEWSGA_SCHEMA,
};

export default NEWSGA_SCHEMA;
