import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const SCORE_OPTIONS = [
  { label: "< 12 sec", value: "0" },
  { label: "12–15 sec", value: "1" },
  { label: "16–20 sec", value: "2" },
  { label: "20 sec", value: "3" },
];

const SCORE_MAPPING_INFO = {
  title: "Score Mapping",
  content: [
    "0 = < 12 sec",
    "1 = 12–15 sec",
    "2 = 16–20 sec",
    "3 = > 20 sec",
  ],
};

// Columns: Test label | Result (seconds) | Score
const ROW_TEMPLATE = "minmax(220px, 1fr) 180px 220px";

const FIVE_TIMES_STS_SCHEMA = {
  title: "Five Times Sit-to-Stand Test (5xSTS)",

  sections: [
    {
      title: null,
      fields: [
        {
          type: "grid-header",
          cols: ["Result (seconds)", "Score"],
          template: ROW_TEMPLATE,
        },
        {
          type: "grid-row",
          name: "sts5x",
          label: "5x STS",
          template: ROW_TEMPLATE,
          info: SCORE_MAPPING_INFO,
          cols: [
            { name: "sts5x_result_seconds", type: "number", suffix: "sec", min: 0 },
            { name: "sts5x_score", type: "single-select", options: SCORE_OPTIONS },
          ],
        },
        {
          type: "textarea",
          name: "sts5x_interpretation",
          label: "Interpretation",
          placeholder: "Auto-filled from Score — editable",
        },
      ],
    },
  ],
};

// Score → Interpretation mapping (per doc):
// 0 (<12 sec) → Normal
// 1–2 (12–20 sec) → Moderate weakness
// 3 (>20 sec) → Severe weakness / fall risk
function computeInterpretation(score) {
  switch (String(score)) {
    case "0":
      return "Normal";
    case "1":
    case "2":
      return "Moderate weakness";
    case "3":
      return "Severe weakness / fall risk";
    default:
      return "";
  }
}

export default function FiveTimesSTSForm({ values, onChange, onAction, showScores }) {
  // Auto-fills Interpretation whenever Score changes. The clinician can still
  // edit the text afterward — it just gets recalculated the next time Score changes.
  const handleChange = (name, value) => {
    onChange(name, value);
    if (name === "sts5x_score") {
      onChange("sts5x_interpretation", computeInterpretation(value));
    }
  };

  return (
    <CommonFormBuilder
      schema={FIVE_TIMES_STS_SCHEMA}
      values={values}
      onChange={handleChange}
      onAction={onAction}
      showScores={showScores}
      layout="nested"
    />
  );
}