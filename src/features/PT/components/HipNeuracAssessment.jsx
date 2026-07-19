import React from "react";
import { SaveRow } from "./NeuracShared";

export default function HipNeuracAssessment({ onSave, onClear }) {
  return (
    <div style={{ padding: "16px 20px", background: "#fff" }}>
      <SaveRow onSave={onSave} onClear={onClear} />
    </div>
  );
}
