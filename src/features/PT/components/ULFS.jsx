import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

// NOTE: the doc did not provide descriptive text for the 0–4 scale (unlike
// LCI-5), so these are left as plain numeric options. Let me know if you
// want descriptor labels (e.g. "0 = Unable", "4 = No difficulty") added.
const SCALE_OPTIONS = [
  { label: "0", value: 0 },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
];

const MAX_SCORE = 80;

const UEFS_ITEMS = [
  ["item_1", "Usual work, housework, or school activities"],
  ["item_2", "Usual hobbies, recreational or sporting activities"],
  ["item_3", "Lifting groceries or shopping bags"],
  ["item_4", "Grooming hair"],
  ["item_5", "Pushing up from a chair using arms"],
  ["item_6", "Preparing food (cutting, cooking)"],
  ["item_7", "Driving or operating vehicle controls"],
  ["item_8", "Using tools or utensils"],
  ["item_9", "Opening jars or tight containers"],
  ["item_10", "Carrying objects with one hand"],
  ["item_11", "Carrying objects with two hands"],
  ["item_12", "Dressing upper body (shirt, jacket)"],
  ["item_13", "Reaching overhead"],
  ["item_14", "Reaching behind back"],
  ["item_15", "Reaching to the side"],
  ["item_16", "Throwing a ball"],
  ["item_17", "Catching a ball"],
  ["item_18", "Sleeping due to arm/shoulder discomfort"],
  ["item_19", "Performing fine hand tasks (writing, typing)"],
  ["item_20", "Performing heavy upper limb activities"],
].map(([key, label], idx) => [`uefs_${key}`, `${idx + 1}. ${label}`]);

const UEFS_FIELD_NAMES = UEFS_ITEMS.map(([name]) => name);

function buildMatrixField([name, label], idx) {
  return {
    type: "radio-matrix",
    name,
    label,
    options: SCALE_OPTIONS,
    ...(idx === 0 ? { matrixHeaderLabel: "Score" } : {}),
  };
}

// Score → Interpretation bands (per doc)
function computeInterpretation(total) {
  if (total <= 20) return "Severe upper limb limitation";
  if (total <= 40) return "Moderate limitation";
  if (total <= 60) return "Mild limitation";
  return "Normal / minimal limitation";
}

const UEFS_SCHEMA = {
  title: "Upper Extremity Functional Scale (UEFS)",

  sections: [
    {
      enableScoreToggle: true,
      actions: [
        {
          type: "toggle-show-scores",
          label: "Doctor View",
        },
      ],

      fields: [
        {
          type: "subheading",
          label: "Item Scores",
        },
        ...UEFS_ITEMS.map(buildMatrixField),

        {
          type: "score-box",
          name: "uefs_total_score",
          label: `Total Score (/${MAX_SCORE})`,
        },
        {
          type: "score-box",
          name: "uefs_percentage",
          label: "Percentage (%)",
        },
        {
          type: "score-box",
          name: "uefs_interpretation",
          label: "Interpretation",
        },
      ],
    },
  ],
};

function sumFields(values, fieldNames) {
  return fieldNames.reduce((total, name) => {
    const v = values[name];
    return total + (typeof v === "number" ? v : 0);
  }, 0);
}

export default function UEFSForm({ values, onChange, onAction, showScores }) {
  // Recomputes Total / Percentage / Interpretation any time an item score changes.
  const handleChange = (name, value) => {
    const nextValues = { ...values, [name]: value };
    onChange(name, value);

    if (UEFS_FIELD_NAMES.includes(name)) {
      const total = sumFields(nextValues, UEFS_FIELD_NAMES);
      const percentage = Math.round((total / MAX_SCORE) * 100);
      onChange("uefs_total_score", total);
      onChange("uefs_percentage", percentage);
      onChange("uefs_interpretation", computeInterpretation(total));
    }
  };
console.log(UEFS_SCHEMA)
  return (
    <CommonFormBuilder
      schema={UEFS_SCHEMA}
      values={values}
      onChange={handleChange}
      onAction={onAction}
      showScores={showScores}
      layout="root"
    />
  );
}