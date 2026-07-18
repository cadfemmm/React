import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const SCALE_OPTIONS = [
  { label: "0", value: 0 },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
];

// NOTE: the shared FormBuilder's radio-matrix grouping logic expects each
// question to be its OWN top-level field (type: "radio-matrix", name, label,
// options) — not a single field with a nested `rows` array. When several
// radio-matrix fields in a row share the same `options`, the builder
// automatically renders one shared header above them (using the first
// field's `matrixHeaderLabel`), so we only need to set that once per group.

const BASIC_ACTIVITIES = [
  ["get_up_from_chair", "Get up from a chair"],
  ["walk_house", "Walk in the house"],
  ["walk_even_ground", "Walk outside on even ground"],
  ["stairs_up_handrail", "Go up the stairs with a handrail"],
  ["stairs_down_handrail", "Go down the stairs with a handrail"],
  ["step_up_curb", "Step up a sidewalk curb"],
  ["step_down_curb", "Step down a sidewalk curb"],
];

const ADVANCED_ACTIVITIES = [
  ["pick_object_floor", "Pick up an object from the floor (when standing with your prosthesis)"],
  ["get_up_floor", "Get up from the floor (e.g. if you fell)"],
  ["walk_uneven_ground", "Walk outside on uneven ground (grass, gravel, slope)"],
  ["walk_bad_weather", "Walk outside in inclement weather (snow, rain, ice)"],
  ["stairs_up_no_handrail", "Go up a few steps (stairs) without a handrail"],
  ["stairs_down_no_handrail", "Go down a few steps (stairs) without a handrail"],
  ["walk_carry_object", "Walk while carrying an object"],
];

const BASIC_FIELD_NAMES = BASIC_ACTIVITIES.map(([name]) => name);
const ADVANCED_FIELD_NAMES = ADVANCED_ACTIVITIES.map(([name]) => name);

function buildMatrixField([name, label], idx) {
  return {
    type: "radio-matrix",
    name,
    label,
    options: SCALE_OPTIONS,
    ...(idx === 0 ? { matrixHeaderLabel: "Score" } : {}),
  };
}

const LCI_SCHEMA = {
  title: "Locomotor Capabilities Index-5 (LCI-5)",

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
          label: "Scale Description",
        },
        {
          type: "info-text",
          text: [
            "0 = No",
            "1 = Yes with help",
            "2 = Yes with supervision",
            "3 = Yes alone with aid(s)",
            "4 = Yes alone, no aids",
          ],
        },

        {
          type: "subheading",
          label: "Basic Activities",
        },
        ...BASIC_ACTIVITIES.map(buildMatrixField),
        {
          type: "score-box",
          name: "basic_activities_score",
          label: "Basic Activities Score (/28)",
        },

        {
          type: "subheading",
          label: "Advanced Activities",
        },
        ...ADVANCED_ACTIVITIES.map(buildMatrixField),
        {
          type: "score-box",
          name: "advanced_activities_score",
          label: "Advanced Activities Score (/28)",
        },

        {
          type: "score-box",
          name: "total_score",
          label: "Total Score (/56)",
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

export default function LCIForm({ values, onChange, onAction, showScores }) {
  // Recomputes Basic / Advanced / Total scores any time a matrix answer changes.
  const handleChange = (name, value) => {
    const nextValues = { ...values, [name]: value };
    onChange(name, value);

    if (BASIC_FIELD_NAMES.includes(name) || ADVANCED_FIELD_NAMES.includes(name)) {
      const basicScore = sumFields(nextValues, BASIC_FIELD_NAMES);
      const advancedScore = sumFields(nextValues, ADVANCED_FIELD_NAMES);
      onChange("basic_activities_score", basicScore);
      onChange("advanced_activities_score", advancedScore);
      onChange("total_score", basicScore + advancedScore);
    }
  };

  return (
    <CommonFormBuilder
      schema={LCI_SCHEMA}
      values={values}
      onChange={handleChange}
      onAction={onAction}
      showScores={showScores}
      layout="root"
    />
  );
}