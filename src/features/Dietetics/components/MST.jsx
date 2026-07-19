export function computeMstWeightScore(values = {}) {
  if (values.weightLostYN !== "yes") return 0;

  const band = values.weightBand;
  if (!band) {
    const pounds = parseFloat(values.customPounds);
    if (Number.isNaN(pounds)) return 0;
    if (pounds >= 34) return 4;
    if (pounds >= 24) return 3;
    if (pounds >= 14) return 2;
    if (pounds >= 2) return 1;
    return 0;
  }

  if (band === "unsure") return 2;
  if (band === "2-13") return 1;
  if (band === "14-23") return 2;
  if (band === "24-33") return 3;
  if (band === ">=34") return 4;
  return 0;
}

export function computeMstAppetiteScore(values = {}) {
  return values.appetiteStatus === "yes" ? 1 : 0;
}

export function computeMstTotalScore(values = {}) {
  return computeMstWeightScore(values) + computeMstAppetiteScore(values);
}

export function computeMstRiskCategory(values = {}) {
  return computeMstTotalScore(values) >= 2 ? "AT RISK" : "NOT AT RISK";
}

const MST_SCHEMA = {
  title: "Malnutrition Screening Tool (MST)",
  sections: [
    {
      fields: [
        {
          name: "weightLostYN",
          label: "Have you recently lost weight without trying?",
          type: "radio",
          options: [
            { label: "No", value: "no" },
            { label: "Yes", value: "yes" },
          ],
        },
        {
          name: "weightBand",
          label: "If yes — select weight lost (lbs)",
          type: "single-select",
          showIf: { field: "weightLostYN", equals: "yes" },
          options: [
            { label: "2–13 lbs / 1-5 kg — 1 point", value: "2-13" },
            { label: "14–23 lbs / 6-10 kg — 2 points", value: "14-23" },
            { label: "24–33 lbs / 11-15 kg — 3 points", value: "24-33" },
            { label: "≥ 34 lbs / > 15 kg — 4 points", value: ">=34" },
            { label: "Unsure — 2 points", value: "unsure" },
          ],
        },
        {
          name: "customPounds",
          label: "Or exact lbs (optional)",
          type: "input",
          showIf: { field: "weightLostYN", equals: "yes" },
        },
        {
          name: "mst_weight_score",
          label: "Weight Score",
          type: "score-box",
          showIf: { field: "weightLostYN", equals: "yes" },
          compute: computeMstWeightScore,
        },
        {
          name: "appetiteStatus",
          label:
            "Have you been eating poorly because of decreased appetite?",
          type: "radio",
          options: [
            { label: "No — 0 points", value: "no" },
            { label: "Yes — 1 point", value: "yes" },
          ],
        },
        {
          name: "mst_appetite_score",
          label: "Appetite Score",
          type: "score-box",
          compute: computeMstAppetiteScore,
        },
        {
          name: "mst_total_score",
          label: "Total MST Score",
          type: "score-box",
          compute: computeMstTotalScore,
        },
        {
          name: "mst_risk_category",
          label: "Risk Category",
          type: "score-box",
          compute: computeMstRiskCategory,
        },
        {
          name: "notes",
          label: "Clinical Notes",
          type: "textarea",
        },
      ],
    },
  ],
};


export const MST_REGISTRY_ENTRY = {
  id: "MST",
  name: "Malnutrition Screening Tool (MST)",
  ...MST_SCHEMA,
};

export default MST_SCHEMA;
