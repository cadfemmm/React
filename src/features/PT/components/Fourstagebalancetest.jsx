import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const RESULT_OPTIONS = [
  { label: "Completed", value: "completed" },
  { label: "Unable", value: "unable" },
];

const STAGE_SCORE_OPTIONS = [
  { label: "0 – Unable to Hold Position", value: "0" },
  { label: "1 – Successfully Completed", value: "1" },
];

// Fall Risk bands, per doc's separate interpretation table.
const FALL_RISK_BANDS = [
  {
    max: 1,
    level: "High",
    meaning:
      "Patient is at high risk of falls, poor static balance. Consider supervision, balance training, and fall prevention strategies.",
  },
  {
    max: 3,
    level: "Moderate",
    meaning:
      "Patient has moderate fall risk. Balance exercises recommended, monitor activities that challenge stability.",
  },
  {
    max: 4,
    level: "Low",
    meaning: "Patient has good balance, low fall risk. Normal functional ability for standing balance.",
  },
];

function getFallRiskBand(total) {
  return FALL_RISK_BANDS.find((band) => total <= band.max) || FALL_RISK_BANDS[FALL_RISK_BANDS.length - 1];
}

// Columns: Position (label) | Result | Time Held (sec) | Score | Notes
const ROW_TEMPLATE = "220px 120px 110px 180px minmax(120px, 1fr)";

function buildStageRow(key, label) {
  return {
    type: "grid-row",
    name: key,
    label,
    template: ROW_TEMPLATE,
    cols: [
      { name: `${key}_result`, type: "single-select", options: RESULT_OPTIONS },
      { name: `${key}_time_sec`, type: "number", suffix: "sec", min: 0 },
      { name: `${key}_score`, type: "single-select", options: STAGE_SCORE_OPTIONS },
      { name: `${key}_notes`, type: "text" },
    ],
  };
}

const STAGES = [
  ["fsbt_stage1", "Stage 1 – Feet Side-by-Side"],
  ["fsbt_stage2", "Stage 2 – Semi-Tandem"],
  ["fsbt_stage3", "Stage 3 – Tandem"],
  ["fsbt_stage4", "Stage 4 – Single Leg Stance"],
];

const STAGE_SCORE_FIELDS = STAGES.map(([key]) => `${key}_score`);

const FOUR_STAGE_BALANCE_TEST_SCHEMA = {
  title: "Four-Stage Balance Test",

  sections: [
    {
      title: null,

      fields: [
        {
          type: "grid-header",
          cols: ["Result", "Time Held (sec)", "Score", "Notes"],
          template: ROW_TEMPLATE,
        },
        ...STAGES.map(([key, label]) => buildStageRow(key, label)),

        // EMR note: Total Score / Fall Risk / Clinical Meaning are shown as
        // separate fields, not inside the table row.
        { type: "score-box", name: "fsbt_total_score", label: "Total Score (/4)" },
        { type: "score-box", name: "fsbt_fall_risk_level", label: "Fall Risk Level" },
        {
          type: "textarea",
          name: "fsbt_clinical_meaning",
          label: "Interpretation / Clinical Meaning",
          placeholder: "Auto-generated from Total Score, editable",
        },
      ],
    },
  ],
};

export default function FourStageBalanceTestForm({ values, onChange, onAction, showScores }) {
  // Recomputes Total Score / Fall Risk Level / Clinical Meaning any time a stage score changes.
  const handleChange = (name, value) => {
    onChange(name, value);

    if (STAGE_SCORE_FIELDS.includes(name)) {
      const nextValues = { ...values, [name]: value };
      const total = STAGE_SCORE_FIELDS.reduce((sum, fieldName) => {
        const v = Number(nextValues[fieldName]);
        return sum + (Number.isFinite(v) ? v : 0);
      }, 0);
      const band = getFallRiskBand(total);

      onChange("fsbt_total_score", total);
      onChange("fsbt_fall_risk_level", band.level);
      onChange("fsbt_clinical_meaning", `${band.level} Fall Risk. ${band.meaning}`);
    }
  };

  return (
    <CommonFormBuilder
      schema={FOUR_STAGE_BALANCE_TEST_SCHEMA}
      values={values}
      onChange={handleChange}
      onAction={onAction}
      showScores={showScores}
      layout="root"
    />
  );
}