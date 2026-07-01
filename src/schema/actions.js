export const ACTIONS_BUTTON = [
  { type: "save", label: "Save" },
  { type: "back", label: "Back" },
  { type: "clear", label: "Clear" },
];

export const ASSESSMENT_TABS = ["subjective", "objective", "assessment", "plan"];

export const TAB_META = {
  subjective:  { label: "Subjective"  },
  objective:   { label: "Objective"   },
  assessment:  { label: "Assessment"  },
  plan:        { label: "Plan"        },
};

export default {
  TAB_META,
  ACTIONS_BUTTON,
  ASSESSMENT_TABS,
};
