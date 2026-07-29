import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const DERMATOME_OPTIONS = [
  { label: "Normal", value: "normal" },
  { label: "Reduced Sensation", value: "reduced_sensation" },
  { label: "Hypersensitive", value: "hypersensitive" },
  { label: "Paraesthesia", value: "paraesthesia" },
  { label: "Absent", value: "absent" },
];

const MYOTOME_OPTIONS = [
  { label: "Normal (5/5)", value: "normal_5" },
  { label: "Mild Weakness (4/5)", value: "mild_4" },
  { label: "Moderate Weakness (3/5)", value: "moderate_3" },
  { label: "Severe Weakness (2/5)", value: "severe_2" },
  { label: "Trace (1/5)", value: "trace_1" },
  { label: "No Contraction (0/5)", value: "none_0" },
];

const REGION_OPTIONS = [
  { label: "Cervical", value: "cervical" },
  { label: "Upper Limb", value: "upper_limb" },
  { label: "Lumbar, Trunk", value: "lumbar_trunk" },
  { label: "Lower Limb", value: "lower_limb" },
];

// Dermatome rows: Level (label) | Left | Right
const DERMATOME_TEMPLATE = "minmax(300px, 1fr) 190px 190px";
// Myotome rows: Level (label) | Key Movement (static) | Left | Right
const MYOTOME_TEMPLATE = "80px minmax(220px, 1fr) 190px 190px";

function buildDermatomeRow(key, levelDescription) {
  return {
    type: "grid-row",
    name: key,
    label: levelDescription,
    template: DERMATOME_TEMPLATE,
    cols: [
      { name: `${key}_left`, type: "single-select", options: DERMATOME_OPTIONS },
      { name: `${key}_right`, type: "single-select", options: DERMATOME_OPTIONS },
    ],
  };
}

function buildMyotomeRow(key, level, keyMovement) {
  return {
    type: "grid-row",
    name: key,
    label: level,
    template: MYOTOME_TEMPLATE,
    cols: [
      { type: "static", text: keyMovement },
      { name: `${key}_left`, type: "single-select", options: MYOTOME_OPTIONS },
      { name: `${key}_right`, type: "single-select", options: MYOTOME_OPTIONS },
    ],
  };
}

const CERVICAL_DERMATOMES = [
  ["c4_dermatome", "C4 – Upper Shoulder / Clavicular Area"],
  ["c5_dermatome", "C5 – Lateral Shoulder / Upper Arm"],
  ["c6_dermatome", "C6 – Lateral Forearm / Thumb"],
  ["c7_dermatome", "C7 – Middle Finger"],
  ["c8_dermatome", "C8 – Medial Forearm / Little Finger"],
  ["t1_dermatome", "T1 – Medial Upper Arm"],
];

const LUMBAR_DERMATOMES = [
  ["l1_dermatome", "L1 – Groin / Upper Hip Region"],
  ["l2_dermatome", "L2 – Anterior Proximal Thigh"],
  ["l3_dermatome", "L3 – Anterior Mid-Thigh / Medial Knee"],
  ["l4_dermatome", "L4 – Medial Leg / Medial Malleolus"],
  ["l5_dermatome", "L5 – Lateral Leg / Dorsum of Foot / Great Toe"],
  ["s1_dermatome", "S1 – Lateral Foot / Heel"],
  ["s2_dermatome", "S2 – Posterior Thigh / Calf"],
];

const CERVICAL_MYOTOMES = [
  ["c4_myotome", "C4", "Shoulder Elevation"],
  ["c5_myotome", "C5", "Shoulder Abduction"],
  ["c6_myotome", "C6", "Elbow Flexion / Wrist Extension"],
  ["c7_myotome", "C7", "Elbow Extension / Wrist Flexion"],
  ["c8_myotome", "C8", "Thumb Extension / Finger Flexion"],
  ["t1_myotome", "T1", "Finger Abduction / Adduction"],
];

const LUMBAR_MYOTOMES = [
  ["l2_myotome", "L2", "Hip Flexion"],
  ["l3_myotome", "L3", "Knee Extension"],
  ["l4_myotome", "L4", "Ankle Dorsiflexion"],
  ["l5_myotome", "L5", "Great Toe Extension"],
  ["s1_myotome", "S1", "Ankle Plantarflexion"],
];

const MYOTOME_DERMATOME_SCHEMA = {
  title: "Neurological / Neurodynamic Assessment – Left vs Right",

  sections: [
    {
      title: null,

      fields: [
        // Optional multi-select — only checked regions' sections appear on the EMR / render below.
        {
          type: "checkbox-group",
          name: "myotome_dermatome_regions_assessed",
          label: "Select Region(s) Assessed",
          options: REGION_OPTIONS,
        },

        {
          type: "accordion",
          name: "dermatome_cervical_section",
          label: "Dermatome Assessment (Cervical/Upper Limb Sensory)",
          defaultOpen: false,
          showIf: { field: "myotome_dermatome_regions_assessed", oneOf: ["cervical", "upper_limb"] },

          children: [
            { type: "grid-header", cols: ["Left Result", "Right Result"], template: DERMATOME_TEMPLATE },
            ...CERVICAL_DERMATOMES.map(([key, label]) => buildDermatomeRow(key, label)),
            {
              type: "textarea",
              name: "dermatome_cervical_notes",
              label: "Notes",
              placeholder: "Free text for clinician observations (pain reproduction, tingling, functional limitation)",
            },
            {
              type: "textarea",
              name: "dermatome_cervical_interpretation",
              label: "Interpretation",
              placeholder: "Auto-generated, editable — e.g. Dermatome deficits / Normal",
            },
          ],
        },

        {
          type: "accordion",
          name: "dermatome_lumbar_section",
          label: "Dermatome Assessment (Lumbar/Lower Limb Sensory)",
          defaultOpen: false,
          showIf: { field: "myotome_dermatome_regions_assessed", oneOf: ["lumbar_trunk", "lower_limb"] },

          children: [
            { type: "grid-header", cols: ["Left Result", "Right Result"], template: DERMATOME_TEMPLATE },
            ...LUMBAR_DERMATOMES.map(([key, label]) => buildDermatomeRow(key, label)),
            {
              type: "textarea",
              name: "dermatome_lumbar_notes",
              label: "Notes",
              placeholder: "Free text for clinician observations (pain reproduction, tingling, functional limitation)",
            },
            {
              type: "textarea",
              name: "dermatome_lumbar_interpretation",
              label: "Interpretation",
              placeholder: "Auto-generated, editable — e.g. Dermatome deficits / Normal",
            },
          ],
        },

        {
          type: "accordion",
          name: "myotome_cervical_section",
          label: "Myotome Assessment (Cervical/Upper Limb)",
          defaultOpen: false,
          showIf: { field: "myotome_dermatome_regions_assessed", oneOf: ["cervical", "upper_limb"] },

          children: [
            { type: "grid-header", cols: ["Key Movement", "Left Result", "Right Result"], template: MYOTOME_TEMPLATE },
            ...CERVICAL_MYOTOMES.map(([key, level, movement]) => buildMyotomeRow(key, level, movement)),
            {
              type: "textarea",
              name: "myotome_cervical_notes",
              label: "Notes",
              placeholder: "Free text for clinician observations (pain reproduction, tingling, functional limitation)",
            },
            {
              type: "textarea",
              name: "myotome_cervical_interpretation",
              label: "Interpretation",
              placeholder: "Auto-generated, editable — e.g. Myotome weakness / Normal",
            },
          ],
        },

        {
          type: "accordion",
          name: "myotome_lumbar_section",
          label: "Myotome Assessment (Lumbar/Lower Limb)",
          defaultOpen: false,
          showIf: { field: "myotome_dermatome_regions_assessed", oneOf: ["lumbar_trunk", "lower_limb"] },

          children: [
            { type: "grid-header", cols: ["Key Movement", "Left Result", "Right Result"], template: MYOTOME_TEMPLATE },
            ...LUMBAR_MYOTOMES.map(([key, level, movement]) => buildMyotomeRow(key, level, movement)),
            {
              type: "textarea",
              name: "myotome_lumbar_notes",
              label: "Notes",
              placeholder: "Free text for clinician observations (pain reproduction, tingling, functional limitation)",
            },
            {
              type: "textarea",
              name: "myotome_lumbar_interpretation",
              label: "Interpretation",
              placeholder: "Auto-generated, editable — e.g. Myotome weakness / Normal",
            },
          ],
        },
      ],
    },
  ],
};

export default function MyotomeDermatomeForm({ values, onChange, onAction, showScores }) {
  return (
    <CommonFormBuilder
      schema={MYOTOME_DERMATOME_SCHEMA}
      values={values}
      onChange={onChange}
      onAction={onAction}
      showScores={showScores}
      layout="nested"
    />
  );
}