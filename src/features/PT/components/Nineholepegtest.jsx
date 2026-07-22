import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const HAND_OPTIONS = [
  { label: "Right", value: "right" },
  { label: "Left", value: "left" },
];

const NHPT_SCHEMA = {
  title: "Nine Hole Peg Test",

  sections: [
    {
      title: null,

      fields: [
        {
          type: "radio",
          name: "nhpt_dominant_hand",
          label: "Dominant Hand",
          options: HAND_OPTIONS,
        },
        {
          type: "radio",
          name: "nhpt_affected_hand",
          label: "Affected Hand",
          options: HAND_OPTIONS,
        },

        {
          type: "subheading",
          label: "Test Results",
        },
        {
          type: "grid-header",
          cols: [ "Time (seconds) – Dominant", "Time (seconds) – Non-Dominant"],
          template: "0px 180px 220px 240px",
        },
        {
          type: "grid-row",
          name: "nhpt_result",
          label: "",
          template: "0px 180px 220px 240px",
          cols: [
          
            { name: "nhpt_dominant_time_sec", type: "number", suffix: "sec", min: 0 },
            { name: "nhpt_non_dominant_time_sec", type: "number", suffix: "sec", min: 0 },
          ],
        },
      ],
    },
  ],
};

export default function NineHolePegTestForm({ values, onChange, onAction, showScores }) {
  return (
    <CommonFormBuilder
      schema={NHPT_SCHEMA}
      values={values}
      onChange={onChange}
      onAction={onAction}
      showScores={showScores}
      layout="root"
    />
  );
}