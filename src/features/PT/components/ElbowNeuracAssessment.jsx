import React from "react";
import { SaveRow } from "./NeuracShared";

export const ELBOW_PROXIMAL_GROUPS = [
  {
    group: null,
    tests: [
      "Supine Pelvic Lift",
      "Shoulder Abd/IR",
      "Shoulder Abd/ER",
      "Elbow Flexion",
      "Elbow Extension",
    ],
  },
  {
    group: "Additional Tests*",
    tests: [
      "Side-lying Hip Adduction",
      "Side-lying Hip Abduction",
      "Scapular Protraction",
      "Scapular Retraction",
    ],
  },
];

export default function ElbowNeuracAssessment({ onSave, onClear }) {
  return (
    <div style={{ padding: "16px 20px", background: "#fff" }}>
      <SaveRow onSave={onSave} onClear={onClear} />
    </div>
  );
}