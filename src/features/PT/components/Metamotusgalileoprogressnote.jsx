import { useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import PatientCard from "../../../shared/cards/PatientCard";

const ACTIONS = [
  { type: "back", label: "Back" },
  { type: "clear", label: "Clear" },
  { type: "save", label: "Save" },
];

const DIFFICULTY = [
  { label: "Easy", value: "easy" },
  { label: "Medium", value: "medium" },
  { label: "Hard", value: "hard" },
];

const WEATHER = [
  { label: "Sunny", value: "sunny" },
  { label: "Overcast", value: "overcast" },
  { label: "Foggy", value: "foggy" },
  { label: "Rain", value: "rain" },
  { label: "Thunderstorm", value: "thunderstorm" },
  { label: "Snow", value: "snow" },
  { label: "Blizzard", value: "blizzard" },
  { label: "Sanddust", value: "sanddust" },
];

/* ── helper: scenario sub-fields (duration + difficulty + optional extras + remarks) ── */
function sf(prefix, { weather = false, coins = false } = {}) {
  const fields = [
    {
      type: "row",
      cols: 2,
      fields: [
        {
          name: `${prefix}_duration`,
          label: "Duration (min)",
          type: "input",
          placeholder: "e.g. 10",
        },
        {
          name: `${prefix}_difficulty`,
          label: "Difficulty Level",
          type: "single-select",
          options: DIFFICULTY,
        },
      ],
    },
  ];

  if (coins || weather) {
    const rowFields = [];

    if (coins) {
      rowFields.push({
        name: `${prefix}_coins`,
        label: "Coins Collected",
        type: "input",
        placeholder: "e.g. 5",
      });
    }

    if (weather) {
      rowFields.push({
        name: `${prefix}_weather`,
        label: "Weather Selected",
        type: "single-select",
        options: WEATHER,
      });
    }

    fields.push({
      type: "row",
      cols: 2,
      fields: rowFields,
    });
  }

  fields.push({
    name: `${prefix}_remarks`,
    label: "Remarks",
    type: "input",
    placeholder: "Free text...",
  });

  return fields;
}

/* ══════════════════════════════════════════════════════════
   SCHEMAS
══════════════════════════════════════════════════════════ */

const SUBJECTIVE_SCHEMA = {
  actions: ACTIONS,
  sections: [
    {
      fields: [
        { type: "subheading", label: "Chief Complaint" },
        { name: "chief_complaint", label: "", type: "input", placeholder: "Free text..." },
      ],
    },
  ],
};

const OBJECTIVE_SCHEMA = {
  actions: ACTIONS,
  sections: [
    {
      fields: [
        /* Scenario Training */
        { type: "subheading", label: "Scenario Training" },
        {
          name: "scenario_types",
          label: "",
          type: "checkbox-group",
          options: [
            { label: "Static standing (Transportation scenario)", value: "static" },
            { label: "Dynamic standing (Transportation scenario)", value: "dynamic" },
            { label: "Walking", value: "walking" },
            { label: "Slope / Stairs", value: "slope" },
            { label: "Cognitive", value: "cognitive" },
            { label: "Psychological", value: "psychological" },
          ],
        },

        /* ── Static standing ── */
        { type: "subheading", label: "Static — a. Bus", showIf: { field: "scenario_types", includes: "static" } },
        ...sf("bus").map((f) => ({ ...f, showIf: { field: "scenario_types", includes: "static" } })),
        { type: "subheading", label: "Static — b. Train", showIf: { field: "scenario_types", includes: "static" } },
        ...sf("train").map((f) => ({ ...f, showIf: { field: "scenario_types", includes: "static" } })),
        { type: "subheading", label: "Static — c. Others", showIf: { field: "scenario_types", includes: "static" } },
        ...sf("static_others").map((f) => ({ ...f, showIf: { field: "scenario_types", includes: "static" } })),

        /* ── Dynamic standing ── */
        { type: "subheading", label: "Dynamic — a. Rowboat", showIf: { field: "scenario_types", includes: "dynamic" } },
        ...sf("rowboat").map((f) => ({ ...f, showIf: { field: "scenario_types", includes: "dynamic" } })),
        { type: "subheading", label: "Dynamic — b. Balance Boat", showIf: { field: "scenario_types", includes: "dynamic" } },
        ...sf("balance_boat", { weather: true, coins: true }).map((f) => ({ ...f, showIf: { field: "scenario_types", includes: "dynamic" } })),
        { type: "subheading", label: "Dynamic — c. Others", showIf: { field: "scenario_types", includes: "dynamic" } },
        ...sf("dynamic_others").map((f) => ({ ...f, showIf: { field: "scenario_types", includes: "dynamic" } })),

        /* ── Walking ── */
        { type: "subheading", label: "Walking — a. Chinatown", showIf: { field: "scenario_types", includes: "walking" } },
        ...sf("chinatown").map((f) => ({ ...f, showIf: { field: "scenario_types", includes: "walking" } })),
        { type: "subheading", label: "Walking — b. Park 1", showIf: { field: "scenario_types", includes: "walking" } },
        ...sf("park1").map((f) => ({ ...f, showIf: { field: "scenario_types", includes: "walking" } })),
        { type: "subheading", label: "Walking — c. KLCC Park 1", showIf: { field: "scenario_types", includes: "walking" } },
        ...sf("klcc_park1").map((f) => ({ ...f, showIf: { field: "scenario_types", includes: "walking" } })),
        { type: "subheading", label: "Walking — d. Century Park", showIf: { field: "scenario_types", includes: "walking" } },
        ...sf("century_park").map((f) => ({ ...f, showIf: { field: "scenario_types", includes: "walking" } })),
        { type: "subheading", label: "Walking — e. Lian Temple", showIf: { field: "scenario_types", includes: "walking" } },
        ...sf("lian_temple", { weather: true, coins: true }).map((f) => ({ ...f, showIf: { field: "scenario_types", includes: "walking" } })),
        { type: "subheading", label: "Walking — f. Others", showIf: { field: "scenario_types", includes: "walking" } },
        ...sf("walking_others").map((f) => ({ ...f, showIf: { field: "scenario_types", includes: "walking" } })),

        /* ── Slope / Stairs ── */
        { type: "subheading", label: "Slope / Stairs — a. Fountain", showIf: { field: "scenario_types", includes: "slope" } },
        ...sf("fountain").map((f) => ({ ...f, showIf: { field: "scenario_types", includes: "slope" } })),
        { type: "subheading", label: "Slope / Stairs — b. Food Market", showIf: { field: "scenario_types", includes: "slope" } },
        ...sf("food_market").map((f) => ({ ...f, showIf: { field: "scenario_types", includes: "slope" } })),
        { type: "subheading", label: "Slope / Stairs — c. Wild Adventure", showIf: { field: "scenario_types", includes: "slope" } },
        ...sf("wild_adventure").map((f) => ({ ...f, showIf: { field: "scenario_types", includes: "slope" } })),
        { type: "subheading", label: "Slope / Stairs — d. Outdoor Track", showIf: { field: "scenario_types", includes: "slope" } },
        ...sf("outdoor_track").map((f) => ({ ...f, showIf: { field: "scenario_types", includes: "slope" } })),
        { type: "subheading", label: "Slope / Stairs — e. Lian Temple Climb", showIf: { field: "scenario_types", includes: "slope" } },
        ...sf("lian_temple_climb", { weather: true }).map((f) => ({ ...f, showIf: { field: "scenario_types", includes: "slope" } })),
        { type: "subheading", label: "Slope / Stairs — f. Others", showIf: { field: "scenario_types", includes: "slope" } },
        ...sf("slope_others").map((f) => ({ ...f, showIf: { field: "scenario_types", includes: "slope" } })),

        /* ── Cognitive ── */
        { type: "subheading", label: "Cognitive — a. Grocery", showIf: { field: "scenario_types", includes: "cognitive" } },
        { name: "cognitive_grocery", label: "Remarks", type: "input", placeholder: "Free text...", showIf: { field: "scenario_types", includes: "cognitive" } },
        { type: "subheading", label: "Cognitive — b. Food Market", showIf: { field: "scenario_types", includes: "cognitive" } },
        { name: "cognitive_food_market", label: "Remarks", type: "input", placeholder: "Free text...", showIf: { field: "scenario_types", includes: "cognitive" } },

        /* ── Psychological ── */
        { type: "subheading", label: "Psychological — a. Glass Trestle", showIf: { field: "scenario_types", includes: "psychological" } },
        { name: "psych_glass_trestle", label: "Remarks", type: "input", placeholder: "Free text...", showIf: { field: "scenario_types", includes: "psychological" } },
        { type: "subheading", label: "Psychological — b. Earthquake", showIf: { field: "scenario_types", includes: "psychological" } },
        { name: "psych_earthquake", label: "Remarks", type: "input", placeholder: "Free text...", showIf: { field: "scenario_types", includes: "psychological" } },
      ],
    },
  ],
};

const ASSESSMENT_SCHEMA = {
  actions: ACTIONS,
  sections: [
    {
      fields: [
        {
          name: "session_response",
          label: "",
          type: "checkbox-group",
          options: [
            { label: "Tolerated Well", value: "tolerated_well" },
            { label: "Fatigued During Session", value: "fatigued" },
            { label: "Demonstrated Improved Performance", value: "improved_performance" },
            { label: "Demonstrated Reduced Performance", value: "reduced_performance" },
            { label: "Adverse Effect During Training", value: "adverse_effect" },
          ],
        },
        { type: "subheading", label: "Therapist Notes" },
        { name: "assessment_therapist_notes", label: "", type: "input", placeholder: "Free text..." },
      ],
    },
  ],
};

const PLAN_SCHEMA = {
  actions: ACTIONS,
  sections: [
    {
      fields: [
        {
          name: "plan_actions",
          label: "",
          type: "checkbox-group",
          options: [
            { label: "Increase Duration", value: "increase_duration" },
            { label: "Increase Difficulty Level", value: "increase_difficulty" },
            { label: "Progress to New Scenario", value: "progress_new_scenario" },
            { label: "Maintain Current Programme", value: "maintain_current" },
          ],
        },
        { type: "subheading", label: "Therapist Notes" },
        { name: "plan_therapist_notes", label: "", type: "input", placeholder: "Free text..." },
      ],
    },
  ],
};

const SOAP_TABS = [
  { key: "subjective", label: "Subjective" },
  { key: "objective", label: "Objective" },
  { key: "assessment", label: "Assessment" },
  { key: "plan", label: "Plan" },
];

const SCHEMA_MAP = {
  subjective: SUBJECTIVE_SCHEMA,
  objective: OBJECTIVE_SCHEMA,
  assessment: ASSESSMENT_SCHEMA,
  plan: PLAN_SCHEMA,
};

/* ══════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════ */
export default function MetaMotusGalileoProgressNote({ patient, onBack }) {
  const [values, setValues] = useState({});
  const [activeTab, setActiveTab] = useState("subjective");
  const [submitted, setSubmitted] = useState(false);

  const storageKey = patient ? `Metamotus_progress_draft_${patient.id}` : null;

  const handleAction = (type) => {
    if (type === "back") onBack?.();
    if (type === "clear") {
      setValues({});
      setSubmitted(false);
      localStorage.removeItem(storageKey);
    }
    if (type === "save") {
      localStorage.setItem(storageKey, JSON.stringify({ values, updatedAt: new Date() }));
      alert("MetaMotus Galileo progress note draft saved.");
    }
  };

  const onChange = (name, value) => setValues((prev) => ({ ...prev, [name]: value }));

  return (
    <div>
      {/* Patient Information */}
      <PatientCard patient={patient} />

      {/* SOAP Tabs */}
      <div style={tabBar}>
        {SOAP_TABS.map((tab) => (
          <div
            key={tab.key}
            style={activeTab === tab.key ? tabActive : tabBtn}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Tab content */}
      <CommonFormBuilder
        schema={SCHEMA_MAP[activeTab]}
        values={values}
        onChange={onChange}
        onAction={handleAction}
      />
    </div>
  );
}

/* ── Styles ── */
const tabBar = {
  display: "flex",
  gap: 12,
  justifyContent: "center",
  borderBottom: "1px solid #ddd",
  marginBottom: 12,
};
const tabBtn = {
  padding: "10px 22px",
  fontWeight: 600,
  cursor: "pointer",
  color: "#0f172a",
};
const tabActive = {
  ...tabBtn,
  borderBottom: "3px solid #2451b3",
  color: "#2451b3",
};