import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const REFLEX_OPTIONS = [
  { label: "Normal (2+)", value: "normal_2plus" },
  { label: "Hyporeflexia (1+)", value: "hyporeflexia_1plus" },
  { label: "Areflexia (0)", value: "areflexia_0" },
  { label: "Hyperreflexia (3+)", value: "hyperreflexia_3plus" },
  { label: "Clonus (4+)", value: "clonus_4plus" },
];

// Columns: Reflex | Spinal Level (static) | Left | Right
const ROW_TEMPLATE = "minmax(200px, 1fr) 130px 180px 180px";

function buildReflexRow(key, label, spinalLevel) {
  return {
    type: "grid-row",
    name: key,
    label,
    template: ROW_TEMPLATE,
    cols: [
      { type: "static", text: spinalLevel, textAlign: "center" },
      { name: `${key}_left`, type: "single-select", options: REFLEX_OPTIONS },
      { name: `${key}_right`, type: "single-select", options: REFLEX_OPTIONS },
    ],
  };
}

const UPPER_LIMB_REFLEXES = [
  ["biceps", "Biceps", "C5 – C6"],
  ["brachioradialis", "Brachioradialis", "C6"],
  ["triceps", "Triceps", "C7"],
];

const LOWER_LIMB_REFLEXES = [
  ["patellar", "Patellar Reflex", "L4"],
  ["achilles", "Achilles Reflex", "S1"],
];

const DTR_SCHEMA = {
  title: "Deep Tendon Reflexes",

  sections: [
    {
      title: null,

      fields: [
        {
          type: "accordion",
          name: "dtr_upper_limb_section",
          label: "Deep Tendon Reflexes (Upper Limb)",
          defaultOpen: true,

          children: [
            {
              type: "grid-header",
              cols: ["Spinal Level", "Left", "Right"],
              template: ROW_TEMPLATE,
            },
            ...UPPER_LIMB_REFLEXES.map(([key, label, level]) => buildReflexRow(key, label, level)),
            {
              type: "textarea",
              name: "dtr_upper_limb_notes",
              label: "Notes",
              placeholder: "Free text for clinician observations",
            },
            {
              type: "textarea",
              name: "dtr_upper_limb_interpretation",
              label: "Interpretation",
              placeholder: "Auto-generated, editable — e.g. Reflex asymmetry / Normal",
            },
          ],
        },

        {
          type: "accordion",
          name: "dtr_lower_limb_section",
          label: "Deep Tendon Reflexes (Lower Limb)",
          defaultOpen: false,

          children: [
            {
              type: "grid-header",
              cols: ["Spinal Level", "Left", "Right"],
              template: ROW_TEMPLATE,
            },
            ...LOWER_LIMB_REFLEXES.map(([key, label, level]) => buildReflexRow(key, label, level)),
            {
              type: "textarea",
              name: "dtr_lower_limb_notes",
              label: "Notes",
              placeholder: "Free text for clinician observations",
            },
            {
              type: "textarea",
              name: "dtr_lower_limb_interpretation",
              label: "Interpretation",
              placeholder: "Auto-generated, editable — e.g. Reflex asymmetry / Normal",
            },
          ],
        },
      ],
    },
  ],
};

export default function DeepTendonReflexesForm({ values, onChange, onAction, showScores }) {
  return (
    <CommonFormBuilder
      schema={DTR_SCHEMA}
      values={values}
      onChange={onChange}
      onAction={onAction}
      showScores={showScores}
      layout="nested"
    />
  );
}