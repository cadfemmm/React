import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const RESULT_OPTIONS = [
  { label: "Negative", value: "negative" },
  { label: "Positive – Pain", value: "positive_pain" },
  { label: "Positive – Paraesthesia", value: "positive_paraesthesia" },
  { label: "Positive – Neural Stretch", value: "positive_neural_stretch" },
  { label: "Inconclusive", value: "inconclusive" },
  { label: "Not Tested", value: "not_tested" },
];

// Columns: Test label | Left Result | Right Result | Onset Angle L | Onset Angle R
const ROW_TEMPLATE = "minmax(250px, 1fr) 140px 140px 100px 100px";

/**
 * Builds a grid-row: Left Result / Right Result dropdowns + L/R symptom onset angle number inputs.
 */
function buildTensionTestRow(key, label) {
  return {
    type: "grid-row",
    name: key,
    label,
    template: ROW_TEMPLATE,
    cols: [
      { name: `${key}_left_result`, type: "single-select", options: RESULT_OPTIONS },
      { name: `${key}_right_result`, type: "single-select", options: RESULT_OPTIONS },
      { name: `${key}_onset_angle_left`, type: "number", suffix: "°" },
      { name: `${key}_onset_angle_right`, type: "number", suffix: "°" },
    ],
  };
}

const CERVICAL_UPPER_LIMB_TESTS = [
  ["ultt1_median", "ULTT1 – Median Nerve"],
  ["ultt2a_median_musculocutaneous_axillary", "ULTT2a – Median / Musculocutaneous / Axillary"],
  ["ultt2b_radial", "ULTT2b – Radial Nerve"],
  ["ultt3_ulnar", "ULTT3 – Ulnar Nerve"],
];

const LUMBAR_LOWER_LIMB_TESTS = [
  ["slr_sciatic", "Straight Leg Raise (SLR – Sciatic Nerve)"],
  ["slump_test", "Slump Test"],
  ["femoral_nerve_stretch", "Femoral Nerve Stretch Test"],
  ["lumbar_flexion_extension_neurodynamic", "Lumbar Flexion / Extension Neurodynamic Response"],
];

const NEURODYNAMIC_SCHEMA = {
  title: "Neurodynamic Tests",

  sections: [
    {
      title: null,

      fields: [
        {
          type: "accordion",
          name: "cervical_upper_limb_section",
          label: "Neurodynamic Test (Cervical / Upper Limb Tension Tests)",
          defaultOpen: false,

          children: [
            {
              type: "grid-header",
              cols: ["Left Result", "Right Result", "Onset Angle L (°)", "Onset Angle R (°)"],
              template: ROW_TEMPLATE,
            },
            ...CERVICAL_UPPER_LIMB_TESTS.map(([key, label]) => buildTensionTestRow(key, label)),
            {
              type: "textarea",
              name: "cervical_upper_limb_notes",
              label: "Notes",
              placeholder: "Clinician observations (e.g. pain reproduction, tingling, functional limitation)",
            },
            {
              type: "textarea",
              name: "cervical_upper_limb_interpretation",
              label: "Interpretation",
              placeholder: "e.g. Neurodynamic irritability: Mild / Moderate / Severe / None",
            },
          ],
        },

        {
          type: "accordion",
          name: "lumbar_lower_limb_section",
          label: "Neurodynamic Test (Lumbar / Lower Limb Tension Tests)",
          defaultOpen: false,

          children: [
            {
              type: "grid-header",
              cols: ["Left Result", "Right Result", "Onset Angle L (°)", "Onset Angle R (°)"],
              template: ROW_TEMPLATE,
            },
            ...LUMBAR_LOWER_LIMB_TESTS.map(([key, label]) => buildTensionTestRow(key, label)),
            {
              type: "textarea",
              name: "lumbar_lower_limb_notes",
              label: "Notes",
              placeholder: "Clinician observations (e.g. pain reproduction, tingling, functional limitation)",
            },
            {
              type: "textarea",
              name: "lumbar_lower_limb_interpretation",
              label: "Interpretation",
              placeholder: "e.g. Neurodynamic irritability: Mild / Moderate / Severe / None",
            },
          ],
        },
      ],
    },
  ],
};

export default function NeurodynamicTestsForm({ values, onChange }) {
  return (
    <CommonFormBuilder
      schema={NEURODYNAMIC_SCHEMA}
      values={values}
      onChange={onChange}
      layout="nested"
    />
  );
}