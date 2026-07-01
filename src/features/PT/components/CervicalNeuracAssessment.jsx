import React from "react";
import { SaveRow } from "./NeuracShared";

export const CERVICAL_MOVEMENTS = ["Retraction","Rotation Right","Rotation Left","Lat Flex Right","Lat Flex Left","Extension"];
export const CERVICAL_SETTINGS = [
  "Supine Cervical Setting",
  "Prone Cervical Setting",
  "Inclined Sitting Cervical Setting",
  "Left Side-lying Cervical Setting",
  "Right Side-lying Cervical Setting",
];
export const CERVICAL_PROXIMAL_GROUPS = [
  { group: "Lumbo-Pelvic-Hip", tests: ["Supine Pelvic Lift", "Supine Bridge", "Side-lying Hip Adduction", "Side-lying Hip Abduction"] },
  { group: "Shoulder Complex", tests: ["Scapular Protraction", "Scapular Retraction", "Shoulder Abd/ER", "Shoulder Abd/IR"] },
];

export default function CervicalNeuracAssessment({ onSave, onClear }) {
  return (
    <div style={{ padding: "16px 20px", background: "#fff" }}>
      <SaveRow onSave={onSave} onClear={onClear} />
    </div>
  );
}
