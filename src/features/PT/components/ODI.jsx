import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const ODI_OPTIONS = [
  { label: "0", value: 0 },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
];

const getODITotal = (values) =>
  [
    values.odi_pain_intensity,
    values.odi_personal_care,
    values.odi_lifting,
    values.odi_walking,
    values.odi_sitting,
    values.odi_standing,
    values.odi_sleeping,
    values.odi_social_life,
    values.odi_travelling,
    values.odi_degree_of_pain,
  ].reduce((sum, value) => sum + Number(value ?? 0), 0);

const ODI_SCHEMA = {
  title: "Oswestry Disability Index (ODI)",

  sections: [
    {
      title: "ODI",
          enableScoreToggle: true,

    actions: [
      {
        type: "toggle-show-scores",
        label: "Doctor View",
      },
    ],

      fields: [
        {
          type: "grid-header",
          cols: ["0", "1", "2", "3", "4", "5"],
        },

        {
          type: "radio-matrix",
          name: "odi_pain_intensity",
          label: "Pain Intensity",
          options: ODI_OPTIONS,
        },
        {
          type: "radio-matrix",
          name: "odi_personal_care",
          label: "Personal Care",
          options: ODI_OPTIONS,
        },
        {
          type: "radio-matrix",
          name: "odi_lifting",
          label: "Lifting",
          options: ODI_OPTIONS,
        },
        {
          type: "radio-matrix",
          name: "odi_walking",
          label: "Walking",
          options: ODI_OPTIONS,
        },
        {
          type: "radio-matrix",
          name: "odi_sitting",
          label: "Sitting",
          options: ODI_OPTIONS,
        },
        {
          type: "radio-matrix",
          name: "odi_standing",
          label: "Standing",
          options: ODI_OPTIONS,
        },
        {
          type: "radio-matrix",
          name: "odi_sleeping",
          label: "Sleeping",
          options: ODI_OPTIONS,
        },
        {
          type: "radio-matrix",
          name: "odi_social_life",
          label: "Social Life",
          options: ODI_OPTIONS,
        },
        {
          type: "radio-matrix",
          name: "odi_travelling",
          label: "Travelling",
          options: ODI_OPTIONS,
        },
        {
          type: "radio-matrix",
          name: "odi_degree_of_pain",
          label: "Degree of Pain",
          options: ODI_OPTIONS,
        },

        {
          type: "subheading",
          label: "Auto Calculation",
        },

        {
          type: "score-box",
          name: "odi_total",
          label: "ODI Total",
          compute: (values) => getODITotal(values),
        },

        {
          type: "score-box",
          name: "odi_percentage",
          label: "ODI Percentage",
          compute: (values) =>
            `${Math.round((getODITotal(values) / 50) * 100)}%`,
        },

        {
          type: "score-box",
          name: "odi_interpretation",
          label: "Interpretation",
          compute: (values) => {
            const percentage = (getODITotal(values) / 50) * 100;

            if (percentage <= 20) return "Minimal disability";
            if (percentage <= 40) return "Moderate disability";
            if (percentage <= 60) return "Severe disability";
            if (percentage <= 80) return "Crippled";
            return "Bedbound / Exaggeration";
          },
        },

        {
          type: "info-text",
          text: [
            "Interpretation",
            "",
            "0–20% : Minimal disability",
            "21–40% : Moderate disability",
            "41–60% : Severe disability",
            "61–80% : Crippled",
            "81–100% : Bedbound / Exaggeration",
          ],
        },
      ],
    },
  ],
};
export default function ODIForm({ values, onChange }) {
  return (
    <CommonFormBuilder
      schema={ODI_SCHEMA}
      values={values}
      onChange={onChange}
      layout="nested"
    />
  );
}