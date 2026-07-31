import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

// Columns: Test (label) | Findings
const TEST_TEMPLATE = "minmax(320px, 1fr) 420px";

function buildTestInfo(purpose, procedure) {
  return {
    title: "Purpose & Procedure",
    content: [`Purpose: ${purpose}`, `Procedure: ${procedure}`],
  };
}

function buildTestRow(key, label, purpose, procedure) {
  return {
    type: "grid-row",
    name: key,
    label,
    template: TEST_TEMPLATE,
    info: buildTestInfo(purpose, procedure),
    cols: [
      {
        name: `${key}_finding`,
        type: "input",
        placeholder: "Enter findings",
      },
    ],
  };
}

const COORDINATION_TESTS_SCHEMA = {
  title: "Coordination Tests for Neurological Patients",
  sections: [
    {
      title: null,
      fields: [
        {
          type: "accordion",
          name: "upper_limb_coordination_section",
          label: "Upper Limb Coordination Tests",
          defaultOpen: true,

          children: [
            {
              type: "grid-header",
              cols: ["Findings"],
              template: TEST_TEMPLATE,
            },

            buildTestRow(
              "fnt",
              "Finger-to-Nose Test (FNT)",
              "Assess cerebellar coordination and accuracy.",
              "Ask the patient to alternately touch their nose and the examiner's finger as accurately as possible."
            ),

            buildTestRow(
              "finger_to_finger",
              "Finger-to-Finger Test",
              "Assess reaching accuracy and upper limb coordination.",
              "Ask the patient to touch the examiner's moving finger repeatedly."
            ),

            buildTestRow(
              "ram",
              "Rapid Alternating Movements (RAM)",
              "Evaluate rapid alternating movements and cerebellar function.",
              "Ask the patient to perform rapid pronation and supination of the hands."
            ),

            {
              type: "textarea",
              name: "upper_limb_coordination_notes",
              label: "Notes",
              placeholder: "Free text...",
            },
          ],
        },

        {
          type: "accordion",
          name: "lower_limb_coordination_section",
          label: "Lower Limb Coordination Tests",
          defaultOpen: false,

          children: [
            {
              type: "grid-header",
              cols: ["Findings"],
              template: TEST_TEMPLATE,
            },

            buildTestRow(
              "heel_to_shin",
              "Heel-to-Shin Test",
              "Assess lower limb cerebellar coordination.",
              "Ask the patient to slide the heel of one foot down the shin of the opposite leg."
            ),

            buildTestRow(
              "fsst",
              "Four Square Step Test (FSST)",
              "Assess dynamic balance, multidirectional stepping, and coordination.",
              "Ask the patient to step rapidly in four directions over canes arranged in a cross pattern."
            ),

            {
              type: "textarea",
              name: "lower_limb_coordination_notes",
              label: "Notes",
              placeholder: "Free text...",
            },
          ],
        },
      ],
    },
  ],
};

export default function CoordinationTestsForm({
  values,
  onChange,
  onAction,
  showScores,
}) {
  return (
    <CommonFormBuilder
      schema={COORDINATION_TESTS_SCHEMA}
      values={values}
      onChange={onChange}
      onAction={onAction}
      showScores={showScores}
      layout="nested"
    />
  );
}