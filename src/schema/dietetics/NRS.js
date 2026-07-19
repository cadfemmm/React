const TABLE1_YES_SHOW_IF = {
  or: [
    { field: "bmiBelow20_5", equals: "yes" },
    { field: "weightLoss3Months", equals: "yes" },
    { field: "reducedIntake", equals: "yes" },
    { field: "severeIllness", equals: "yes" },
  ],
};

const TABLE1_ALL_NO_SHOW_IF = {
  and: [
    { field: "bmiBelow20_5", equals: "no" },
    { field: "weightLoss3Months", equals: "no" },
    { field: "reducedIntake", equals: "no" },
    { field: "severeIllness", equals: "no" },
  ],
};

export function anyNrsTable1Yes(values = {}) {
  return (
    values.bmiBelow20_5 === "yes" ||
    values.weightLoss3Months === "yes" ||
    values.reducedIntake === "yes" ||
    values.severeIllness === "yes"
  );
}

export function computeNrsFinalScore(values = {}) {
  if (!anyNrsTable1Yes(values)) return 0;

  const nutScore = Number(values.nutStatus || 0);
  const diseaseScore = Number(values.diseaseSeverity || 0);
  const ageScore = Number(values.age) >= 70 ? 1 : 0;

  return nutScore + diseaseScore + ageScore;
}

export function computeNrsRiskStatus(values = {}) {
  const finalScore = computeNrsFinalScore(values);
  return finalScore >= 3
    ? "Nutritionally At-Risk — Care Plan Required"
    : "Not At-Risk — Weekly Re-Screening";
}

const NRS_SCHEMA = {
  title: "NRS-2002 Screening Tool",
  sections: [
    {
      title: "Table 1 — Initial Screening",
      fields: [
        {
          name: "bmiBelow20_5",
          label: "Is BMI < 20.5?",
          type: "radio",
          options: [
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ],
        },
        {
          name: "weightLoss3Months",
          label: "Has the patient lost weight in last 3 months?",
          type: "radio",
          options: [
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ],
        },
        {
          name: "reducedIntake",
          label: "Reduced dietary intake in last week?",
          type: "radio",
          options: [
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ],
        },
        {
          name: "severeIllness",
          label: "Is patient severely ill (e.g., ICU)?",
          type: "radio",
          options: [
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ],
        },
        {
          type: "subheading",
          label: "All answers are “No” → Re-screen weekly.",
          showIf: TABLE1_ALL_NO_SHOW_IF,
        },
      ],
    },
    {
      title: "Table 2 — Final Screening",
      showIf: TABLE1_YES_SHOW_IF,
      fields: [
        {
          name: "nutStatus",
          label: "Impaired Nutritional Status",
          type: "single-select",
          options: [
            { label: "Score 0 — Normal", value: "0" },
            {
              label:
                "Score 1 — Mild (weight loss >5% in 3 months OR food intake 50–75% of normal requirement in preceding week)",
              value: "1",
            },
            {
              label:
                "Score 2 — Moderate (weight loss >5% in 2 months OR BMI 18.5–20.5 with impaired general condition OR food intake 25–60% of normal requirement in preceding week)",
              value: "2",
            },
            {
              label:
                "Score 3 — Severe (weight loss >5% in 1 month (>15% in 3 months) OR BMI <18.5 with impaired general condition OR food intake 0–25% of normal requirement in preceding week)",
              value: "3",
            },
          ],
        },
        {
          name: "diseaseSeverity",
          label: "Severity of Disease (↑ nutritional requirements)",
          type: "single-select",
          options: [
            { label: "Score 0 — Normal nutritional requirements", value: "0" },
            {
              label:
                "Score 1 — Mild (hip fracture, chronic patients with acute complications, chronic hemodialysis, diabetes, oncology)",
              value: "1",
            },
            {
              label:
                "Score 2 — Moderate (major abdominal surgery, stroke, severe pneumonia, hematologic malignancy)",
              value: "2",
            },
            {
              label:
                "Score 3 — Severe (head injury, bone marrow transplantation, intensive care patients APACHE >10)",
              value: "3",
            },
          ],
        },
        {
          name: "age",
          label: "Patient Age",
          type: "input",
        },
        {
          name: "nrs_total_score",
          label: "Total Score",
          type: "score-box",
          compute: computeNrsFinalScore,
        },
        {
          name: "nrs_risk_status",
          label: "Status",
          type: "score-box",
          compute: computeNrsRiskStatus,
        },
      ],
    },
  ],
};

export const NRS_REGISTRY_ENTRY = {
  id: "NRS",
  name: "NRS-2002 Screening Tool",
  ...NRS_SCHEMA,
};

