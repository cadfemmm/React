import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const MOBILITY_OPTIONS = [
  { label: "Normal", value: "normal" },
  { label: "Hypomobile", value: "hypomobile" },
  { label: "Hypermobile", value: "hypermobile" },
  { label: "Not Tested", value: "not_tested" },
];

const REGION_OPTIONS = [
  { label: "Cervical Spine", value: "cervical" },
  { label: "Thoracic Spine", value: "thoracic" },
  { label: "Lumbar Spine", value: "lumbar" },
  { label: "Sacroiliac Joint", value: "sacroiliac" },
  { label: "Coccyx", value: "coccyx" },
];

// Columns: Segment | Central PA | Facet L (UPA) | Facet R (UPA) | Lateral Glide L | Lateral Glide R | Pain | Notes
const SPINE_ROW_TEMPLATE = "40px 110px 110px 110px 110px 110px 60px minmax(90px, 1fr)";
// Columns: Segment | Central PA | Left | Right | Pain | Notes
const SIMPLE_ROW_TEMPLATE = "120px 140px 140px 140px 70px minmax(150px, 1fr)";

/**
 * Builds a spine-segment grid-row (cervical / thoracic / lumbar):
 * Central PA, Facet L, Facet R, Lateral Glide L, Lateral Glide R, Pain, Notes.
 */
function buildSpineSegmentRow(prefix, segmentLabel) {
  return {
    type: "grid-row",
    name: prefix,
    label: segmentLabel,
    template: SPINE_ROW_TEMPLATE,
    cols: [
      { name: `${prefix}_central_pa`, type: "single-select", options: MOBILITY_OPTIONS },
      { name: `${prefix}_facet_l`, type: "single-select", options: MOBILITY_OPTIONS },
      { name: `${prefix}_facet_r`, type: "single-select", options: MOBILITY_OPTIONS },
      { name: `${prefix}_lateral_glide_l`, type: "single-select", options: MOBILITY_OPTIONS },
      { name: `${prefix}_lateral_glide_r`, type: "single-select", options: MOBILITY_OPTIONS },
      { name: `${prefix}_pain`, type: "checkbox" },
      { name: `${prefix}_notes`, type: "text", placeholder: "Free text" },
    ],
  };
}

/**
 * Builds a simple single-segment grid-row (SIJ / Coccyx):
 * Central PA, Left, Right, Pain, Notes.
 */
function buildSimpleSegmentRow(prefix, segmentLabel) {
  return {
    type: "grid-row",
    name: prefix,
    label: segmentLabel,
    template: SIMPLE_ROW_TEMPLATE,
    cols: [
      { name: `${prefix}_central_pa`, type: "single-select", options: MOBILITY_OPTIONS },
      { name: `${prefix}_left`, type: "single-select", options: MOBILITY_OPTIONS },
      { name: `${prefix}_right`, type: "single-select", options: MOBILITY_OPTIONS },
      { name: `${prefix}_pain`, type: "checkbox" },
      { name: `${prefix}_notes`, type: "text", placeholder: "Free text" },
    ],
  };
}

const CERVICAL_SEGMENTS = ["C2", "C3", "C4", "C5", "C6", "C7"];
const THORACIC_SEGMENTS = ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"];
const LUMBAR_SEGMENTS = ["L1", "L2", "L3", "L4", "L5", "S1"];

const PAIVM_SCHEMA = {
  title: "PAIVM / Spinal Segmental Mobility",

  sections: [
    {
      title: null,

      fields: [
        // Optional multi-select — only checked regions will appear on the EMR / render below.
        {
          type: "checkbox-group",
          name: "paivm_regions_assessed",
          label: "Select Region(s) Assessed",
          options: REGION_OPTIONS,
        },

        {
          type: "accordion",
          name: "paivm_cervical_section",
          label: "PAIVM (Cervical Spine)",
          defaultOpen: false,
          showIf: { field: "paivm_regions_assessed", includes: "cervical" },

          children: [
            {
              type: "grid-header",
              cols: ["Central PA", "Facet Joint L (UPA)", "Facet Joint R (UPA)", "Lateral Glide L", "Lateral Glide R", "Pain", "Notes"],
              template: SPINE_ROW_TEMPLATE,
            },
            ...CERVICAL_SEGMENTS.map((seg) => buildSpineSegmentRow(`paivm_${seg.toLowerCase()}`, seg)),
            {
              type: "textarea",
              name: "paivm_cervical_interpretation",
              label: "Interpretation",
              placeholder: "Auto-generated, editable",
            },
          ],
        },

        {
          type: "accordion",
          name: "paivm_thoracic_section",
          label: "PAIVM (Thoracic Spine)",
          defaultOpen: false,
          showIf: { field: "paivm_regions_assessed", includes: "thoracic" },

          children: [
            {
              type: "grid-header",
              cols: ["Central PA", "Facet Joint L (UPA)", "Facet Joint R (UPA)", "Lateral Glide L", "Lateral Glide R", "Pain", "Notes"],
              template: SPINE_ROW_TEMPLATE,
            },
            ...THORACIC_SEGMENTS.map((seg) => buildSpineSegmentRow(`paivm_${seg.toLowerCase()}`, seg)),
            {
              type: "textarea",
              name: "paivm_thoracic_interpretation",
              label: "Interpretation",
              placeholder: "Auto-generated, editable",
            },
          ],
        },

        {
          type: "accordion",
          name: "paivm_lumbar_section",
          label: "PAIVM (Lumbar Spine)",
          defaultOpen: false,
          showIf: { field: "paivm_regions_assessed", includes: "lumbar" },

          children: [
            {
              type: "grid-header",
              cols: ["Central PA", "Facet Joint L (UPA)", "Facet Joint R (UPA)", "Lateral Glide L", "Lateral Glide R", "Pain", "Notes"],
              template: SPINE_ROW_TEMPLATE,
            },
            ...LUMBAR_SEGMENTS.map((seg) => buildSpineSegmentRow(`paivm_${seg.toLowerCase()}`, seg)),
            {
              type: "textarea",
              name: "paivm_lumbar_interpretation",
              label: "Interpretation",
              placeholder: "Auto-generated, editable",
            },
          ],
        },

        {
          type: "accordion",
          name: "paivm_sacroiliac_section",
          label: "PAIVM (Sacroiliac Joint)",
          defaultOpen: false,
          showIf: { field: "paivm_regions_assessed", includes: "sacroiliac" },

          children: [
            {
              type: "grid-header",
              cols: ["Central PA", "SIJ L", "SIJ R", "Pain", "Notes"],
              template: SIMPLE_ROW_TEMPLATE,
            },
            buildSimpleSegmentRow("paivm_sij", "Sacroiliac Joint"),
            {
              type: "textarea",
              name: "paivm_sacroiliac_interpretation",
              label: "Interpretation",
              placeholder: "Auto-generated, editable",
            },
          ],
        },

        {
          type: "accordion",
          name: "paivm_coccyx_section",
          label: "PAIVM (Coccyx)",
          defaultOpen: false,
          showIf: { field: "paivm_regions_assessed", includes: "coccyx" },

          children: [
            {
              type: "grid-header",
              cols: ["Central PA", "Left Response", "Right Response", "Pain", "Notes"],
              template: SIMPLE_ROW_TEMPLATE,
            },
            buildSimpleSegmentRow("paivm_coccyx", "Coccyx"),
            {
              type: "textarea",
              name: "paivm_coccyx_interpretation",
              label: "Interpretation",
              placeholder: "Auto-generated, editable",
            },
          ],
        },
      ],
    },
  ],
};

export default function PAIVMForm({ values, onChange, onAction, showScores }) {
  return (
    <CommonFormBuilder
      schema={PAIVM_SCHEMA}
      values={values}
      onChange={onChange}
      onAction={onAction}
      showScores={showScores}
      layout="nested"
    />
  );
}