import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const RESULT_OPTIONS = [
  { label: "Positive", value: "positive" },
  { label: "Negative", value: "negative" },
  { label: "Limited", value: "limited" },
  { label: "Not Tested", value: "not_tested" },
];

// Columns: Test | L Side Result | R Side Result
const ROW_TEMPLATE = "minmax(300px, 1fr) 190px 190px";

function buildTestRow(key, label) {
  return {
    type: "grid-row",
    name: key,
    label,
    template: ROW_TEMPLATE,
    cols: [
      { name: `${key}_l_result`, type: "single-select", options: RESULT_OPTIONS },
      { name: `${key}_r_result`, type: "single-select", options: RESULT_OPTIONS },
    ],
  };
}

const CERVICAL_TESTS = [
  ["spurling_test", "Spurling Test"],
  ["cervical_distraction_test", "Cervical Distraction Test"],
  ["cervical_compression_test", "Cervical Compression Test"],
  ["valsalva_maneuver", "Valsalva Maneuver"],
  ["shoulder_abduction_relief_bakody", "Shoulder Abduction Relief Test (Bakody Sign)"],
  ["lhermitte_sign", "Lhermitte Sign"],
  ["sharp_purser_test", "Sharp-Purser Test"],
  ["alar_ligament_stress_test", "Alar Ligament Stress Test"],
  ["vertebral_artery_test", "Vertebral Artery Test"],
];

const CERVICAL_SPECIAL_TESTS_SCHEMA = {
  title: "Cervical – Special Tests",

  sections: [
    {
      title: null,

      fields: [
        { type: "grid-header", cols: ["L Side Result", "R Side Result"], template: ROW_TEMPLATE },
        ...CERVICAL_TESTS.map(([key, label]) => buildTestRow(key, label)),

        {
          type: "textarea",
          name: "cervical_special_tests_notes",
          label: "Notes",
          placeholder: "Free text",
        },
        {
          type: "textarea",
          name: "cervical_special_tests_interpretation",
          label: "Interpretation",
          placeholder: "Auto-inserted, editable",
        },
      ],
    },
  ],
};

export default function CervicalSpecialTestsForm({ values, onChange, onAction, showScores }) {
  return (
    <CommonFormBuilder
      schema={CERVICAL_SPECIAL_TESTS_SCHEMA}
      values={values}
      onChange={onChange}
      onAction={onAction}
      showScores={showScores}
      layout="root"
    />
  );
}