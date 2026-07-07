export const FIELD_CATEGORIES = [
  {
    id: "assessment-info",
    label: "Assessment INFO",
    fields: [
      { type: "text", label: "Text Input", icon: "T" },
      { type: "textarea", label: "Text Area", icon: "¶" },
      { type: "number", label: "Number", icon: "#" },
      { type: "date", label: "Date Picker", icon: "📅" },
    ],
  },
  {
    id: "choice-fields",
    label: "CHOICE FIELDS",
    fields: [
      { type: "dropdown", label: "Dropdown", icon: "▾" },
      { type: "radio", label: "Radio Group", icon: "◉" },
      { type: "checkbox", label: "Checkbox Group", icon: "☑" },
    ],
  },
  {
    id: "other",
    label: "OTHER",
    fields: [
      { type: "file", label: "File Upload", icon: "📎" },
      { type: "section", label: "Section Header", icon: "H" },
      { type: "instructions", label: "Instructions", icon: "i" },
    ],
  },
];

export const FIELD_TYPE_LABELS = FIELD_CATEGORIES.reduce((acc, cat) => {
  cat.fields.forEach((f) => {
    acc[f.type] = f.label;
  });
  return acc;
}, {});

export const DEFAULT_OPTIONS = ["Option 1", "Option 2", "Option 3"];

export function createField(type) {
  const label = FIELD_TYPE_LABELS[type] || type;
  const base = {
    id: `field_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    type,
    label,
    placeholder: type === "instructions" ? "" : "Enter text...",
    validation: {
      required: false,
      min: "",
      max: "",
      minLength: "",
      maxLength: "",
      pattern: "",
      errorMessage: "",
    },
  };

  if (["dropdown", "radio", "checkbox"].includes(type)) {
    base.options = [...DEFAULT_OPTIONS];
  }

  if (type === "instructions") {
    base.content = "Enter instructions here...";
  }

  if (type === "section") {
    base.placeholder = "";
  }

  return base;
}
