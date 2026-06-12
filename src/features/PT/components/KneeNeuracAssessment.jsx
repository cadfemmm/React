import React from "react";
import { SaveRow } from "./NeuracShared";

export const KNEE_PROXIMAL_GROUPS = [
  {
    group: null,
    tests: [
      "Supine Pelvic Lift",
      "Side-lying Hip Adduction",
      "Side-lying Hip Abduction",
      "Supine Knee Flexion",
      "Prone Knee Extension",
    ],
  },
];

export default function KneeNeuracAssessment({ onSave, onClear }) {
  return (
    <div style={{ padding: "16px 20px", background: "#fff" }}>
      <SaveRow onSave={onSave} onClear={onClear} />
    </div>
  );
}
