import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

// Columns: label | Left | Right
const LR_TEMPLATE = "240px 170px 170px 170px";// Columns: label | Value | Risk
const SUMMARY_TEMPLATE = "240px 180px 260px";

function toNumber(v) {
  const n = Number(v);
  return Number.isFinite(n) && v !== "" && v !== null ? n : null;
}

const BALANCE_TEST_SCHEMA = {
  title: "Balance Test",

  sections: [
    {
      title: null,

      fields: [
        {
          type: "subheading",
          label: "Single Leg Standing",
        },

        // ---------- Single Leg Standing ----------
        {
          type: "grid-header",
          cols: ["Left", "Right"],
          template: LR_TEMPLATE,
        },
        {
          type: "grid-row",
          name: "single_leg_standing",
          label: "Leg Standing",
          template: LR_TEMPLATE,
          cols: [
            { name: "sls_left_sec", type: "number", suffix: "s", min: 0 },
            { name: "sls_right_sec", type: "number", suffix: "s", min: 0 },
          ],
        },
        {
          type: "grid-row",
          name: "single_leg_standing_interpretation",
          label: "Interpretation (Norm: 29s)",
          template: LR_TEMPLATE,
          cols: [
            {
              type: "computed",
              compute: (values) => {
                const v = toNumber(values.sls_left_sec);
                if (v === null) return "—";
                return v >= 29 ? "Good" : "Poor";
              },
            },
            {
              type: "computed",
              compute: (values) => {
                const v = toNumber(values.sls_right_sec);
                if (v === null) return "—";
                return v >= 29 ? "Good" : "Poor";
              },
            },
          ],
        },

// ---------- Y Balance Test ----------
{
  type: "subheading",
  label: "Y Balance Test",
},
{
  type: "grid-header",
  cols: ["Left", "Right", "Difference"],
  template: LR_TEMPLATE,
},

// ---------------- Reached Distance ----------------

{
  type: "grid-row",
  name: "ybt_anterior",
  label: "Anterior Reach",
  template: LR_TEMPLATE,
    cols: [
    { name: "ybt_left_anterior", type: "number", suffix: "cm" },
    { name: "ybt_right_anterior", type: "number", suffix: "cm" },
    {
        type: "computed",
        compute: (values) => {
        const l = toNumber(values.ybt_left_anterior);
        const r = toNumber(values.ybt_right_anterior);
        if (l === null || r === null) return "—";
        return `${Math.abs(l - r).toFixed(1)} cm`;
        },
    },
    ]
},
{
  type: "grid-row",
  name: "ybt_pm",
  label: "Posteromedial Reach",
  template: LR_TEMPLATE,
  cols: [
    { name: "ybt_left_pm", type: "number", suffix: "cm", min: 0 },
    { name: "ybt_right_pm", type: "number", suffix: "cm", min: 0 },
    {
        type: "computed",
        compute: (values) => {
        const l = toNumber(values.ybt_left_pm);
        const r = toNumber(values.ybt_right_pm);
        if (l === null || r === null) return "—";
        return `${Math.abs(l - r).toFixed(1)} cm`;
        },
    },
  ],
},
{
  type: "grid-row",
  name: "ybt_pl",
  label: "Posterolateral Reach",
  template: LR_TEMPLATE,
  cols: [
    { name: "ybt_left_pl", type: "number", suffix: "cm", min: 0 },
    { name: "ybt_right_pl", type: "number", suffix: "cm", min: 0 },
    {
        type: "computed",
        compute: (values) => {
        const l = toNumber(values.ybt_left_pl);
        const r = toNumber(values.ybt_right_pl);
        if (l === null || r === null) return "—";
        return `${Math.abs(l - r).toFixed(1)} cm`;
        },
    },
  ],
},

// ---------------- Sum ----------------

{
  type: "grid-row",
  name: "ybt_total",
  label: "Total Reach Distance",
  template: LR_TEMPLATE,
  cols: [
    {
      type: "computed",
      compute: (values) => {
        const a = toNumber(values.ybt_left_anterior) ?? 0;
        const pm = toNumber(values.ybt_left_pm) ?? 0;
        const pl = toNumber(values.ybt_left_pl) ?? 0;

        if (
          values.ybt_left_anterior === undefined &&
          values.ybt_left_pm === undefined &&
          values.ybt_left_pl === undefined
        )
          return "—";

        return `${(a + pm + pl).toFixed(1)} cm`;
      },
    },
    {
      type: "computed",
      compute: (values) => {
        const a = toNumber(values.ybt_right_anterior) ?? 0;
        const pm = toNumber(values.ybt_right_pm) ?? 0;
        const pl = toNumber(values.ybt_right_pl) ?? 0;

        if (
          values.ybt_right_anterior === undefined &&
          values.ybt_right_pm === undefined &&
          values.ybt_right_pl === undefined
        )
          return "—";

        return `${(a + pm + pl).toFixed(1)} cm`;
      },
    },
  ],
},

// ---------------- Limb Length ----------------

{
  type: "grid-row",
  name: "ybt_limb_length",
  label: "Limb Length",
  template: LR_TEMPLATE,
  cols: [
    { name: "ybt_left_limb_length", type: "number", suffix: "cm", min: 0 },
    { name: "ybt_right_limb_length", type: "number", suffix: "cm", min: 0 },
  ],
},

// ---------------- Composite Score ----------------

{
  type: "grid-row",
  name: "ybt_composite_score",
  label: "Composite Score",
  template: LR_TEMPLATE,
  cols: [
    {
      type: "computed",
      compute: (values) => {
        const total =
          (toNumber(values.ybt_left_anterior) ?? 0) +
          (toNumber(values.ybt_left_pm) ?? 0) +
          (toNumber(values.ybt_left_pl) ?? 0);

        const limb = toNumber(values.ybt_left_limb_length);

        if (limb === null || limb === 0) return "—";

        return `${((total / (3 * limb)) * 100).toFixed(1)}%`;
      },
    },
    {
      type: "computed",
      compute: (values) => {
        const total =
          (toNumber(values.ybt_right_anterior) ?? 0) +
          (toNumber(values.ybt_right_pm) ?? 0) +
          (toNumber(values.ybt_right_pl) ?? 0);

        const limb = toNumber(values.ybt_right_limb_length);

        if (limb === null || limb === 0) return "—";

        return `${((total / (3 * limb)) * 100).toFixed(1)}%`;
      },
    },
  ],
},

// ---------------- Interpretation ----------------

{
  type: "grid-row",
  name: "ybt_interpretation",
  label: "Interpretation",
  template: LR_TEMPLATE,
  cols: [
    {
      type: "computed",
      compute: (values) => {
        const total =
          (toNumber(values.ybt_left_anterior) ?? 0) +
          (toNumber(values.ybt_left_pm) ?? 0) +
          (toNumber(values.ybt_left_pl) ?? 0);

        const limb = toNumber(values.ybt_left_limb_length);

        if (limb === null || limb === 0) return "—";

        const score = (total / (3 * limb)) * 100;

        return score > 90
          ? "Low risk of injury"
          : "High risk of injury";
      },
    },
    {
      type: "computed",
      compute: (values) => {
        const total =
          (toNumber(values.ybt_right_anterior) ?? 0) +
          (toNumber(values.ybt_right_pm) ?? 0) +
          (toNumber(values.ybt_right_pl) ?? 0);

        const limb = toNumber(values.ybt_right_limb_length);

        if (limb === null || limb === 0) return "—";

        const score = (total / (3 * limb)) * 100;

        return score > 90
          ? "Low risk of injury"
          : "High risk of injury";
      },
    },
  ],
},

// ---------------- Asymmetry ----------------

{
  type: "grid-header",
  cols: ["Value", "Risk (RTS)"],
  template: SUMMARY_TEMPLATE,
},
{
  type: "grid-row",
  name: "ybt_asymmetry",
  label: "Asymmetry (Reach Difference)",
  template: SUMMARY_TEMPLATE,
  cols: [
    {
      type: "computed",
      compute: (values) => {
        const left =
          (toNumber(values.ybt_left_anterior) ?? 0) +
          (toNumber(values.ybt_left_pm) ?? 0) +
          (toNumber(values.ybt_left_pl) ?? 0);

        const right =
          (toNumber(values.ybt_right_anterior) ?? 0) +
          (toNumber(values.ybt_right_pm) ?? 0) +
          (toNumber(values.ybt_right_pl) ?? 0);

        return `${Math.abs(left - right).toFixed(1)} cm`;
      },
    },
    {
      type: "computed",
      compute: (values) => {
        const left =
          (toNumber(values.ybt_left_anterior) ?? 0) +
          (toNumber(values.ybt_left_pm) ?? 0) +
          (toNumber(values.ybt_left_pl) ?? 0);

        const right =
          (toNumber(values.ybt_right_anterior) ?? 0) +
          (toNumber(values.ybt_right_pm) ?? 0) +
          (toNumber(values.ybt_right_pl) ?? 0);

        const diff = Math.abs(left - right);

        return diff < 4
          ? "Low risk of injury (<4 cm)"
          : "High risk of injury (>4 cm)";
      },
    },
  ],
},
      ],
    },
  ],
};
export default function BalanceTestForm({ values, onChange, onAction, showScores }) {
  return (
    <CommonFormBuilder
      schema={BALANCE_TEST_SCHEMA}
      values={values}
      onChange={onChange}
      onAction={onAction}
      showScores={showScores}
      layout="root"
    />
  );
}