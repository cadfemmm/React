import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const STABILITY_OPTIONS = [
  { label: "Stable", value: "stable" },
  { label: "Unstable", value: "unstable" },
];

const SCORE_OPTIONS = [
  { label: "Unable to Stand", value: "0" },
  { label: "< 5 sec", value: "1" },
  { label: "5–10 sec", value: "2" },
  { label: "11–19 sec", value: "3" },
  { label: "≥ 20 sec", value: "4" },
];

const SCORE_MAPPING_INFO = {
  title: "Score Mapping",
  content: [
    "Unable to stand",
    "< 5 sec",
    "5–10 sec",
    "11–19 sec",
    "≥ 20 sec",
  ],
};

function toNumber(v) {
  const n = Number(v);
  return Number.isFinite(n) && v !== "" && v !== null ? n : null;
}

// Interpretation per doc, based on Time Held (seconds):
// <10 sec -> High fall risk, 10-20 sec -> Mild impairment, >20 sec -> Normal
function computeInterpretation(seconds) {
  if (seconds === null) return "—";
  if (seconds < 10) return "High fall risk";
  if (seconds <= 20) return "Mild impairment";
  return "Normal";
}

// Columns: Side (label) | Time Held (sec) | Stability | Score | Interpretation
const ROW_TEMPLATE = "100px 120px 130px 180px 200px";

function buildSideRow(key, label) {
  return {
    type: "grid-row",
    name: key,
    label,
    template: ROW_TEMPLATE,
    info: SCORE_MAPPING_INFO,
    cols: [
      { name: `${key}_time_sec`, type: "number", suffix: "sec", min: 0 },
      { name: `${key}_stability`, type: "single-select", options: STABILITY_OPTIONS },
      { name: `${key}_score`, type: "single-select", options: SCORE_OPTIONS },
      {
        type: "computed",
        plain: true,
        compute: (values) => computeInterpretation(toNumber(values[`${key}_time_sec`])),
      },
    ],
  };
}

const SINGLE_LEG_STANCE_SCHEMA = {
  title: "Single Leg Stance Test",
  sections: [
    {
      title: null,

      fields: [
        {
          type: "grid-header",
          cols: ["Time Held (sec)", "Stability", "Score", "Interpretation"],
          template: ROW_TEMPLATE,
        },
        buildSideRow("sls_left", "Left"),
        buildSideRow("sls_right", "Right"),
      ],
    },
  ],
};

export default function SingleLegStanceTestForm({ values, onChange, onAction, showScores }) {
  return (
    <CommonFormBuilder
      schema={SINGLE_LEG_STANCE_SCHEMA}
      values={values}
      onChange={onChange}
      onAction={onAction}
      showScores={showScores}
      layout="root"
    />
  );
}