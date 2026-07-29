import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

function toNumber(v) {
  const n = Number(v);
  return Number.isFinite(n) && v !== "" && v !== null ? n : null;
}

// Columns: Measurement (label) | R Value (cm) | L Value (cm) | Difference
const ROW_TEMPLATE = "220px 170px 170px 170px";

function buildMeasurementRow(key, label) {
  return {
    type: "grid-row",
    name: key,
    label,
    template: ROW_TEMPLATE,
    cols: [
      { name: `${key}_r_value`, type: "number", suffix: "cm" },
      { name: `${key}_l_value`, type: "number", suffix: "cm" },
      {
        type: "computed",
        plain: true,
        compute: (values) => {
          const r = toNumber(values[`${key}_r_value`]);
          const l = toNumber(values[`${key}_l_value`]);
          if (r === null || l === null) return "—";
          return `${Math.abs(r - l).toFixed(1)} cm`;
        },
      },
    ],
  };
}

const LIMB_LENGTH_ALIGNMENT_SCHEMA = {
  title: "Limb Length Alignment",

  sections: [
    {
      title: null,

      fields: [
        {
          type: "grid-header",
          cols: ["R Value (cm)", "L Value (cm)", "Difference"],
          template: ROW_TEMPLATE,
        },
        buildMeasurementRow("true_leg_length", "True Leg Length"),
        buildMeasurementRow("apparent_leg_length", "Apparent Leg Length"),

        {
          type: "textarea",
          name: "limb_length_interpretation",
          label: "Interpretation",
          placeholder: "Auto-generated, editable",
        },
        {
          type: "textarea",
          name: "limb_length_other_test",
          label: "Other Test",
          placeholder: "Free text",
        },
      ],
    },
  ],
};

export default function LimbLengthAlignmentForm({ values, onChange, onAction, showScores }) {
  return (
    <CommonFormBuilder
      schema={LIMB_LENGTH_ALIGNMENT_SCHEMA}
      values={values}
      onChange={onChange}
      onAction={onAction}
      showScores={showScores}
      layout="root"
    />
  );
}