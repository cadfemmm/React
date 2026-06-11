import React from "react";
import { SaveRow } from "./NeuracShared";

export const SHOULDER_PROXIMAL_GROUPS = [
  {
    group: null,
    tests: [
      "Supine Pelvic Lift",
      "Scapular Protraction",
      "Scapular Retraction",
      "Shoulder Abd/ER",
      "Shoulder Abd/IR",
    ],
  },
  {
    group: "Additional Tests*",
    tests: [
      "Side-lying Hip Adduction",
      "Side-lying Hip Abduction",
    ],
  },
];

export default function ShoulderNeuracAssessment({ onSave, onClear }) {
  return (
    <div style={{ padding: "16px 20px", background: "#fff" }}>
      <SaveRow onSave={onSave} onClear={onClear} />
    </div>
  );
}