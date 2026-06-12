import React from "react";
import { SaveRow } from "./NeuracShared";

export const LUMBAR_SETTINGS = [
  "Supine Lumbar Setting",
  "Prone Lumbar Setting",
  "Left Side-lying Lumbar Setting",
  "Right Side-lying Lumbar Setting",
];

export const LUMBAR_PROXIMAL_GROUPS = [
  {
    group: null,
    tests: [
      "Supine Pelvic Lift",
      "Supine Bridging",
      "Prone Bridging",
      "Side-lying Hip Adduction",
      "Side-lying Hip Abduction",
    ],
  },
];

export default function LumbarNeuracAssessment({ onSave, onClear }) {
  return (
    <div style={{ padding: "16px 20px", background: "#fff" }}>
      <SaveRow onSave={onSave} onClear={onClear} />
    </div>
  );
}
