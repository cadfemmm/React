import { useState } from "react";
import {
  NeuracSoapWrapper,
  SUB_TABS,
  subTabRow,
  subTabItem,
  subTabActive,
} from "./NeuracShared";

/* ══════════════════════════════════════════════════════════
   MAIN — sub-tabs always visible at top
   Renders NeuracSoapWrapper from NeuracShared.jsx so all
   SOAP (Subjective / Objective / Assessment / Plan) comes
   from a single file.
══════════════════════════════════════════════════════════ */
export default function NeuracTherapyAssessment({ patient, onSubmit, onBack }) {
  const [activeSub, setActiveSub] = useState("cervical");

  return (
    <div>
      {/* Sub-tabs always visible */}
      <div style={subTabRow}>
        {SUB_TABS.map(tab => (
          <div
            key={tab.key}
            onClick={() => setActiveSub(tab.key)}
            style={{ ...subTabItem, ...(activeSub === tab.key ? subTabActive : {}) }}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Selected sub-tab content — all SOAP rendering lives in NeuracShared */}
      <div style={{ background: "#fff" }}>
        {SUB_TABS.map(tab => (
          activeSub === tab.key && (
            <NeuracSoapWrapper
              key={tab.key}
              patient={patient}
              region={tab.key}
              onSubmit={onSubmit}
              onBack={onBack}
            />
          )
        ))}
      </div>
    </div>
  );
}
