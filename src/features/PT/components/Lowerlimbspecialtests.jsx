import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const RESULT_OPTIONS = [
  { label: "Positive", value: "positive" },
  { label: "Negative", value: "negative" },
  { label: "Limited", value: "limited" },
  { label: "Not Tested", value: "not_tested" },
];

// Columns: Test | L Side Result | R Side Result
const ROW_TEMPLATE = "minmax(260px, 1fr) 190px 190px";

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

const HIP_TESTS = [
  ["trendelenburg", "Trendelenburg Test"],
  ["fadir", "FADIR Test"],
  ["scour", "Scour Test"],
];

const KNEE_TESTS = [
  ["lachman", "Lachman Test"],
  ["anterior_drawer_knee", "Anterior Drawer Test"],
  ["posterior_drawer_knee", "Posterior Drawer Test"],
  ["mcmurray", "McMurray Test"],
  ["apley_compression", "Apley Compression Test"],
  ["valgus_stress", "Valgus Stress Test"],
  ["varus_stress", "Varus Stress Test"],
];

const ANKLE_TESTS = [
  ["anterior_drawer_ankle", "Anterior Drawer Test (Ankle)"],
  ["talar_tilt", "Talar Tilt Test"],
  ["thompson", "Thompson Test (Achilles)"],
  ["kleiger", "Kleiger External Rotation Test"],
];

const FOOT_TESTS = [
  ["windlass", "Windlass Test (Plantar Fascia)"],
];

function buildRegionAccordion(name, label, tests, defaultOpen = false) {
  return {
    type: "accordion",
    name,
    label,
    defaultOpen,
    children: [
      { type: "grid-header", cols: ["L Side Result", "R Side Result"], template: ROW_TEMPLATE },
      ...tests.map(([key, testLabel]) => buildTestRow(key, testLabel)),
    ],
  };
}

const LOWER_LIMB_SPECIAL_TESTS_SCHEMA = {
  title: "Lower Limb – Special Tests (Hip, Knee, Ankle)",

  sections: [
    {
      title: null,

      fields: [
        buildRegionAccordion("hip_section", "Hip", HIP_TESTS, true),
        buildRegionAccordion("knee_section", "Knee", KNEE_TESTS),
        buildRegionAccordion("ankle_section", "Ankle", ANKLE_TESTS),
        buildRegionAccordion("foot_section", "Foot", FOOT_TESTS),

        {
          type: "textarea",
          name: "lower_limb_special_tests_notes",
          label: "Notes",
          placeholder: "Free text",
        },
        {
          type: "textarea",
          name: "lower_limb_special_tests_interpretation",
          label: "Interpretation",
          placeholder: "Auto-generated, editable",
        },
      ],
    },
  ],
};

export default function LowerLimbSpecialTestsForm({ values, onChange, onAction, showScores }) {
  return (
    <CommonFormBuilder
      schema={LOWER_LIMB_SPECIAL_TESTS_SCHEMA}
      values={values}
      onChange={onChange}
      onAction={onAction}
      showScores={showScores}
      layout="nested"
    />
  );
}