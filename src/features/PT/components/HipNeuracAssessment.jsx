import React from "react";
import { SaveRow } from "./NeuracShared";

export const HIP_PROXIMAL_GROUPS = [
  {
    group: null,
    tests: [
      "Supine Pelvic Lift",
      "Supine Bridge",
      "Side-lying Hip Adduction",
      "Side-lying Hip Abduction",
      "Prone Hip Extension",
    ],
  },
  {
    group: "Additional Tests*",
    tests: [
      "Scapular Protraction",
      "Scapular Retraction",
    ],
  },
];

export default function HipNeuracAssessment({ onSave, onClear }) {
  return (
    <div style={{ padding: "16px 20px", background: "#fff" }}>
      <SaveRow onSave={onSave} onClear={onClear} />
    </div>
  );
}
