import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const RESULT_OPTIONS = [
  { label: "Positive", value: "positive" },
  { label: "Negative", value: "negative" },
  { label: "Limited", value: "limited" },
  { label: "Not Tested", value: "not_tested" },
];

// Columns: Test | L Side Result | R Side Result
const ROW_TEMPLATE = "minmax(280px, 1fr) 190px 190px";

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

const LUMBAR_TESTS = [
  ["crossed_slr", "Crossed Straight Leg Raise"],
  ["femoral_nerve_stretch", "Femoral Nerve Stretch Test"],
  ["lumbar_quadrant_kemp", "Lumbar Quadrant Test (Kemp Test)"],
  ["prone_instability", "Prone Instability Test"],
  ["passive_lumbar_extension", "Passive Lumbar Extension Test"],
];

const SACROILIAC_TESTS = [
  ["gaenslen_test", "Gaenslen Test"],
  ["sacral_thrust_test", "Sacral Thrust Test"],
  ["compression_test_sij", "Compression Test (SIJ)"],
  ["distraction_test_sij", "Distraction Test (SIJ)"],
  ["thigh_thrust_test", "Thigh Thrust Test"],
  ["gillet_test", "Gillet Test"],
];

const LUMBAR_PELVIC_STABILITY_TESTS = [
  ["aslr_test", "Active Straight Leg Raise (ASLR)"],
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

const LUMBAR_SPINE_SPECIAL_TESTS_SCHEMA = {
  title: "Lumbar Spine – Special Tests",

  sections: [
    {
      title: null,

      fields: [
        buildRegionAccordion("lumbar_section", "Lumbar", LUMBAR_TESTS, true),
        buildRegionAccordion("sacroiliac_section", "Sacroiliac", SACROILIAC_TESTS),
        buildRegionAccordion("lumbar_pelvic_stability_section", "Lumbar / Pelvic Stability", LUMBAR_PELVIC_STABILITY_TESTS),

        {
          type: "textarea",
          name: "lumbar_spine_special_tests_notes",
          label: "Notes",
          placeholder: "Free text",
        },
        {
          type: "textarea",
          name: "lumbar_spine_special_tests_interpretation",
          label: "Interpretation",
          placeholder: "Auto-generated, editable",
        },
      ],
    },
  ],
};

export default function LumbarSpineSpecialTestsForm({ values, onChange, onAction, showScores }) {
  return (
    <CommonFormBuilder
      schema={LUMBAR_SPINE_SPECIAL_TESTS_SCHEMA}
      values={values}
      onChange={onChange}
      onAction={onAction}
      showScores={showScores}
      layout="nested"
    />
  );
}