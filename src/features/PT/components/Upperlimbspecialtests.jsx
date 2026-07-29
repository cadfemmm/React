import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const RESULT_OPTIONS = [
  { label: "Positive", value: "positive" },
  { label: "Negative", value: "negative" },
  { label: "Limited", value: "limited" },
  { label: "Not Tested", value: "not_tested" },
];

// Columns: Test | L Side Result | R Side Result
const ROW_TEMPLATE = "minmax(280px, 1fr) 190px 190px";

function buildTestRow(key, label) {
  return {
    type: "grid-row",
    name: key,
    label,
    template: ROW_TEMPLATE,
    cols: [
      { name: `${key}_l_result`, type: "single-select", options: RESULT_OPTIONS },
      { name: `${key}_r_result`, type: "single-select", options: RESULT_OPTIONS },
    ],
  };
}

const SHOULDER_TESTS = [
  ["hawkins_kennedy", "Hawkins-Kennedy Test (Sh Impingement)"],
  ["neer_impingement", "Neer Impingement Test (Sh Impingement)"],
  ["empty_can_jobe", "Empty Can / Jobe Test (Sh Impingement)"],
  ["hornblowers_sign", "Hornblower's Sign (Teres Minor Integrity)"],
  ["speed_test", "Speed Test (Biceps Long Head)"],
  ["yergason_test", "Yergason Test (Biceps)"],
  ["drop_arm_test", "Drop Arm Test"],
  ["anterior_drawer_shoulder", "Anterior Drawer Test (Anterior Shoulder Stability)"],
  ["apprehension_test", "Apprehension Test (Anterior Instability)"],
  ["relocation_test", "Relocation Test"],
  ["ac_compression", "AC Compression Test / Cross-Body Adduction"],
  ["obrien_test", "O'Brien Test (Active Compression / SLAP)"],
  ["clunk_test", "Clunk Test (Tear of Glenoid Labrum)"],
  ["lift_off_test", "Lift-Off Test (Subscapularis)"],
  ["belly_press_test", "Belly-Press Test (Subscapularis)"],
  ["posterior_apprehension_jerk", "Posterior Apprehension / Jerk Test"],
  ["sulcus_sign", "Sulcus Sign (Inferior Instability)"],
];

const ELBOW_TESTS = [
  ["valgus_stress_elbow", "Valgus Stress Test (UCL)"],
  ["varus_stress_elbow", "Varus Stress Test (RCL)"],
  ["cozens_test", "Cozen's Test (Lateral Epicondylitis)"],
  ["mills_test", "Mill's Test (Lateral Epicondylitis)"],
  ["medial_epicondylitis_test", "Medial Epicondylitis Test"],
  ["tinel_elbow", "Tinel Sign at Elbow (Ulnar Nerve)"],
  ["pronator_teres_syndrome", "Pronator Teres Syndrome Test"],
  ["lateral_pivot_shift", "Lateral Pivot Shift Test"],
];

const WRIST_HAND_TESTS = [
  ["phalen_test", "Phalen Test (CTS)"],
  ["reverse_phalen_test", "Reverse Phalen Test"],
  ["tinel_wrist", "Tinel Sign at Wrist (Median Nerve)"],
  ["finkelstein_test", "Finkelstein Test (De Quervain's Tenosynovitis)"],
  ["bunnel_littler_test", "Bunnel-Littler Test (Intrinsic Tightness)"],
  ["froments_sign", "Froment's Sign"],
  ["watson_test", "Watson Test (Scaphoid Instability)"],
];

function buildRegionAccordion(name, label, tests, defaultOpen = false) {
  return {
    type: "accordion",
    name,
    label,
    defaultOpen,
    children: [
      { type: "grid-header", cols: ["L Side Result", "R Side Result"], template: ROW_TEMPLATE },
      ...tests.map(([key, testLabel]) => buildTestRow(key, testLabel)),
    ],
  };
}

const UPPER_LIMB_SPECIAL_TESTS_SCHEMA = {
  title: "Upper Limb – Special Tests (Shoulder, Elbow, Wrist)",

  sections: [
    {
      title: null,

      fields: [
        buildRegionAccordion("shoulder_section", "Shoulder", SHOULDER_TESTS, true),
        buildRegionAccordion("elbow_section", "Elbow", ELBOW_TESTS),
        buildRegionAccordion("wrist_hand_section", "Wrist / Hand", WRIST_HAND_TESTS),

        {
          type: "textarea",
          name: "upper_limb_special_tests_notes",
          label: "Notes",
          placeholder: "Free text",
        },
        {
          type: "textarea",
          name: "upper_limb_special_tests_interpretation",
          label: "Interpretation",
          placeholder: "Auto-generated, editable",
        },
      ],
    },
  ],
};

export default function UpperLimbSpecialTestsForm({ values, onChange, onAction, showScores }) {
  return (
    <CommonFormBuilder
      schema={UPPER_LIMB_SPECIAL_TESTS_SCHEMA}
      values={values}
      onChange={onChange}
      onAction={onAction}
      showScores={showScores}
      layout="nested"
    />
  );
}