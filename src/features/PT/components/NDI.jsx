import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const NDI_OPTIONS = [
  { label: "0", value: 0 },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
];

const getNDITotal = (values) =>
  [
    values.ndi_pain_intensity,
    values.ndi_personal_care,
    values.ndi_lifting,
    values.ndi_reading,
    values.ndi_headache,
    values.ndi_concentration,
    values.ndi_work,
    values.ndi_driving,
    values.ndi_sleeping,
    values.ndi_recreation,
  ].reduce((sum, value) => sum + Number(value ?? 0), 0);

const NDI_SCHEMA = {
  title: "Neck Disability Index (NDI)",
  sections: [
    {
      title: "NDI",
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
          name: "ndi_pain_intensity",
          label: "Pain Intensity",
          options: NDI_OPTIONS,
        },
        {
          type: "radio-matrix",
          name: "ndi_personal_care",
          label: "Personal Care",
          options: NDI_OPTIONS,
        },
        {
          type: "radio-matrix",
          name: "ndi_lifting",
          label: "Lifting",
          options: NDI_OPTIONS,
        },
        {
          type: "radio-matrix",
          name: "ndi_reading",
          label: "Reading",
          options: NDI_OPTIONS,
        },
        {
          type: "radio-matrix",
          name: "ndi_headache",
          label: "Headache",
          options: NDI_OPTIONS,
        },
        {
          type: "radio-matrix",
          name: "ndi_concentration",
          label: "Concentration",
          options: NDI_OPTIONS,
        },
        {
          type: "radio-matrix",
          name: "ndi_work",
          label: "Work",
          options: NDI_OPTIONS,
        },
        {
          type: "radio-matrix",
          name: "ndi_driving",
          label: "Driving",
          options: NDI_OPTIONS,
        },
        {
          type: "radio-matrix",
          name: "ndi_sleeping",
          label: "Sleeping",
          options: NDI_OPTIONS,
        },
        {
          type: "radio-matrix",
          name: "ndi_recreation",
          label: "Recreation",
          options: NDI_OPTIONS,
        },

        {
          type: "subheading",
          label: "Auto Calculation",
        },

        {
          type: "score-box",
          name: "ndi_total",
          label: "NDI Total",
          compute: (values) => getNDITotal(values),
        },

        {
          type: "score-box",
          name: "ndi_percentage",
          label: "NDI Percentage",
          compute: (values) =>
            `${Math.round((getNDITotal(values) / 50) * 100)}%`,
        },

        {
          type: "score-box",
          name: "ndi_interpretation",
          label: "Interpretation",
          compute: (values) => {
            const percentage = (getNDITotal(values) / 50) * 100;

            if (percentage <= 4) return "No disability";
            if (percentage <= 14) return "Mild disability";
            if (percentage <= 24) return "Moderate disability";
            if (percentage <= 34) return "Severe disability";
            return "Complete disability";
          },
        },

        {
          type: "info-text",
          text: [
            "Interpretation",
            "",
            "0–4% : No disability",
            "5–14% : Mild disability",
            "15–24% : Moderate disability",
            "25–34% : Severe disability",
            ">35% : Complete disability",
          ],
        },
      ],
    },
  ],
};

export default function NDIForm({ values, onChange }) {
  return (
    <CommonFormBuilder
      schema={NDI_SCHEMA}
      values={values}
      onChange={onChange}
      layout="nested"
    />
  );
}