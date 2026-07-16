import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const RESULT_OPTIONS = [
  { label: "Normal", value: "normal" },
  { label: "Mild Tightness", value: "mild_tightness" },
  { label: "Moderate Tightness", value: "moderate_tightness" },
  { label: "Severe Tightness", value: "severe_tightness" },
];

// Column widths: label | Result select | Pain checkbox
const SINGLE_SIDE_TEMPLATE = "minmax(260px, 1fr) 180px 90px";
// Column widths: label | Left Result | Left Pain | Right Result | Right Pain
const LEFT_RIGHT_TEMPLATE = "minmax(220px, 1fr) 160px 80px 160px 80px";

/**
 * Builds a single-side (no left/right) grid-row: Result dropdown + Pain checkbox.
 */
function buildSingleSideRow(key, label) {
  return {
    type: "grid-row",
    name: key,
    label,
    template: SINGLE_SIDE_TEMPLATE,
    cols: [
      { name: `${key}_result`, type: "single-select", options: RESULT_OPTIONS },
      { name: `${key}_pain`, type: "checkbox" },
    ],
  };
}

/**
 * Builds a left/right grid-row: Left Result, Left Pain, Right Result, Right Pain.
 */
function buildLeftRightRow(key, label) {
  return {
    type: "grid-row",
    name: key,
    label,
    template: LEFT_RIGHT_TEMPLATE,
    cols: [
      { name: `${key}_left_result`, type: "single-select", options: RESULT_OPTIONS },
      { name: `${key}_left_pain`, type: "checkbox" },
      { name: `${key}_right_result`, type: "single-select", options: RESULT_OPTIONS },
      { name: `${key}_right_pain`, type: "checkbox" },
    ],
  };
}

const CERVICAL_TESTS = [
  ["scm", "Sternocleidomastoid (SCM) – Head Tilt / Rotation Test"],
  ["upper_trapezius", "Upper Trapezius – Lateral Flexion Test"],
  ["levator_scapula", "Levator Scapula – Neck Flexion & Rotation Test"],
  ["cervical_flexors", "Cervical Flexors (Deep Neck Flexor Stretch)"],
  ["cervical_extensors", "Cervical Extensors (Upper Cervical Extension Stretch)"],
  ["cervical_rotation_left", "Cervical Rotation (Left Rotation Stretch)"],
  ["cervical_rotation_right", "Cervical Rotation (Right Rotation Stretch)"],
  ["cervical_side_flexors_left", "Cervical Side Flexors – Left Side Stretch"],
  ["cervical_side_flexors_right", "Cervical Side Flexors – Right Side Stretch"],
];

const UPPER_LIMB_TESTS = [
  ["pec_major", "Pectoralis Major – Horizontal Abduction Test"],
  ["pec_minor", "Pectoralis Minor – Scapular Posterior Tilt Stretch"],
  ["biceps_brachii", "Biceps Brachii – Elbow Extension & Shoulder Extension Test"],
  ["forearm_flexors", "Forearm Flexors – Wrist/Finger Extension Stretch"],
  ["forearm_extensors", "Forearm Extensors – Wrist/Finger Flexion Stretch"],
  ["deltoid_posterior", "Deltoid Posterior Fibers – Horizontal Adduction Stretch"],
];

const LUMBAR_TRUNK_TESTS = [
  ["lumbar_hamstrings_slr", "Hamstrings – Supine Straight Leg Raise"],
  ["hip_flexors_thomas", "Hip Flexors – Thomas Test (Iliopsoas)"],
  ["quadratus_lumborum", "Quadratus Lumborum – Side Bending Stretch"],
  ["glute_max_piriformis", "Gluteus Maximus / Piriformis – Hip Flexion/Internal Rotation Test"],
  ["erector_spinae", "Erector Spinae – Prone Lumbar Extension Stretch"],
];

const LOWER_LIMB_TESTS = [
  ["quadriceps", "Quadriceps – Prone Knee Flexion Stretch"],
  ["calf_gastrocnemius", "Calf – Gastrocnemius Stretch (Knee Extended)"],
  ["soleus", "Soleus – Calf Stretch (Knee Flexed)"],
  ["it_band_ober", "IT Band – Ober's Test"],
  ["hip_adductors", "Hip Adductors – Supine Abduction Stretch"],
  ["hip_abductors", "Hip Abductors – Adduction Stretch"],
  ["hamstrings_seated_supine", "Hamstrings – Seated / Supine Stretch"],
];

const MUSCLE_LENGTH_SCHEMA = {
  title: "Muscle Length Tests",

  sections: [
    {
      title: null,

      fields: [
        {
          type: "accordion",
          name: "cervical_section",
          label: "Cervical Muscle Length Tests",
          defaultOpen: false,

          children: [
            { type: "grid-header", cols: ["Result", "Pain"], template: SINGLE_SIDE_TEMPLATE },
            ...CERVICAL_TESTS.map(([key, label]) => buildSingleSideRow(key, label)),
          ],
        },

        {
          type: "accordion",
          name: "upper_limb_section",
          label: "Upper Limb Muscle Length Tests",
          defaultOpen: false,

          children: [
            {
              type: "grid-header",
              cols: ["Left Result", "Left Pain", "Right Result", "Right Pain"],
              template: LEFT_RIGHT_TEMPLATE,
            },
            ...UPPER_LIMB_TESTS.map(([key, label]) => buildLeftRightRow(key, label)),
          ],
        },

        {
          type: "accordion",
          name: "lumbar_section",
          label: "Lumbar / Trunk Muscle Length Tests",
          defaultOpen: false,

          children: [
            {
              type: "grid-header",
              cols: ["Left Result", "Left Pain", "Right Result", "Right Pain"],
              template: LEFT_RIGHT_TEMPLATE,
            },
            ...LUMBAR_TRUNK_TESTS.map(([key, label]) => buildLeftRightRow(key, label)),
          ],
        },

        {
          type: "accordion",
          name: "lower_limb_section",
          label: "Lower Limb Muscle Length Tests",
          defaultOpen: false,

          children: [
            {
              type: "grid-header",
              cols: ["Left Result", "Left Pain", "Right Result", "Right Pain"],
              template: LEFT_RIGHT_TEMPLATE,
            },
            ...LOWER_LIMB_TESTS.map(([key, label]) => buildLeftRightRow(key, label)),
          ],
        },

        {
          type: "accordion",
          name: "interpretation_section",
          label: "Interpretation",
          defaultOpen: true,

          children: [
            {
              type: "textarea",
              name: "muscle_length_interpretation",
              label: "Interpretation",
            },
          ],
        },
      ],
    },
  ],
};

export default function MLTForm({ values, onChange }) {
  return (
    <CommonFormBuilder
      schema={MUSCLE_LENGTH_SCHEMA}
      values={values}
      onChange={onChange}
      layout="nested"
    />
  );
}