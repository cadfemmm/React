import React from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

/* ===================== MAS OPTIONS (Modified Ashworth Scale) ===================== */

const MAS_SELECT_OPTIONS = [
  { label: "0", value: "0" },
  { label: "1", value: "1" },
  { label: "1+", value: "1+" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
];

const MAS_INFO = {
  title: "Modified Ashworth Scale (MAS)",
  content: [
    "0 – No increase in tone",
    "1 – Slight increase in tone, catch/release at end ROM",
    "1+ – Slight increase in tone, catch/release and resistance through rest ROM (½ ROM)",
    "2 – More marked increase in tone through ROM, but affected part moved easily",
    "3 – Considerable increase in tone, passive movement difficult",
    "4 – Affected part in rigid flexion and extension",
  ],
};

const masRow = (value, label) => ({
  value,
  label,
  columns: [
    { type: "select", options: MAS_SELECT_OPTIONS },
    { type: "select", options: MAS_SELECT_OPTIONS },
  ],
});

const buildMasTable = (name, rows) => ({
  type: "refraction-12col",
  name,
  cornerLabel: "Muscle",
  cornerLikeGroupHeader: true,
  showColumnHeaders: true,
  groups: [
    {
      label: "Modified Ashworth Scale (MAS)",
      columns: [{ key: "Right" }, { key: "Left" }],
    },
  ],
  rows: rows.map(([value, label]) => masRow(value, label)),
});

/** Muscle names and regions aligned with Botulinum Toxin (BTI) procedure */
const MAS_REGIONS = [
  {
    label: "Shoulder and Elbow region",
    name: "shoulder_region",
    rows: [
      ["pectoralis_major", "Pectoralis Major"],
      ["triceps", "Triceps"],
      ["biceps_brachii", "Biceps Brachii"],
      ["brachialis", "Brachialis"],
      ["brachioradialis", "Brachioradialis"],
    ],
  },
  {
    label: "Wrist Region",
    name: "wrist_region",
    rows: [
      ["pronator_teres", "Pronator Teres"],
      ["flexor_carpi_ulnaris", "Flexor Carpi Ulnaris (FCU)"],
      ["flexor_carpi_radialis", "Flexor Carpi Radialis (FCR)"],
    ],
  },
  {
    label: "Finger Region",
    name: "finger_region",
    rows: [
      ["flexor_digitorum_profundus", "Flexor Digitorum Profundus (FDP)"],
      ["flexor_digitorum_superficialis", "Flexor Digitorum Superficialis (FDS)"],
      ["flexor_pollicis_longus", "Flexor Pollicis Longus (FPL)"],
    ],
  },
  {
    label: "Hamstring",
    name: "hamstring",
    rows: [
      ["bicep_femoris", "Bicep Femoris"],
      ["semitendinosus", "Semitendinosus"],
      ["semimembranosus", "Semimembranosus"],
      ["adductors", "Adductors"],
    ],
  },
  {
    label: "Ankle Region",
    name: "ankle_region",
    rows: [
      ["gastrocnemius", "Gastrocnemius"],
      ["medical_head", "Medical Head"],
      ["lateral_head", "Lateral Head"],
      ["soleus", "Soleus"],
      ["posterior_tibialis", "Posterior Tibialis"],
      ["flexor_digitorum_longus", "Flexor Digitorum Longus (FDL)"],
      ["flexor_hallucis_longus", "Flexor Hallucis Longus (FHL)"],
    ],
  },
];

const MAS_SCHEMA = {
  title: "Modified Ashworth Scale (MAS)",
  titleInfo: MAS_INFO,
  fields: MAS_REGIONS.map((region, idx) => ({
    type: "accordion",
    name: region.name,
    label: region.label,
    defaultOpen: idx === 0,
    children: [buildMasTable(region.name, region.rows)],
  })),
};

/* ===================== COMPONENT ===================== */

export default function MASForm({ values, onChange }) {
  return (
    <CommonFormBuilder
      schema={MAS_SCHEMA}
      values={values}
      onChange={onChange}
      layout="nested"
    />
  );
}
