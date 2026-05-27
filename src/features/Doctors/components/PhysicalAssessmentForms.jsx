import React from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import PainAssessmentForm from "./PainAssessmentForm";
import SpinalcordInjury from "./SpinalcordInjury";
import PTROMForm from "../../PT/components/ROMForm";
import PTMASForm from "../../PT/components/MASForm";
import OswestryLowBackPainAssessment from "./OswestryLowBackPainAssessment";
import BriefPainInventoryAssessment from "./BriefPainInventoryAssessment";
import KOOSKneeSurvey from "./KOOSKneeSurvey";
import SPADIShoulderAssessment from "./SPADIShoulderAssessment";
import BCTQAssessment from "./BCTQAssessment";

export function MRCScaleForm({ values, onChange }) {
  const strengthOptions = [
    { value: "0", label: "0" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "Not applicable", label: "Not applicable" },
  ];

  const GROUPS = [
    {
      title: "Shoulder",
      rows: [
        { key: "shoulder_flexor", label: "Shoulder flexor" },
        { key: "shoulder_abductor", label: "Shoulder abductor" },
      ],
    },
    {
      title: "Elbow",
      rows: [
        { key: "elbow_flexor", label: "Elbow flexor" },
        { key: "elbow_extensor", label: "Elbow extensor" },
      ],
    },
    {
      title: "Wrist",
      rows: [
        { key: "wrist_flexor", label: "Wrist flexor" },
        { key: "wrist_extensor", label: "Wrist extensor" },
      ],
    },
    {
      title: "Finger",
      rows: [
        { key: "finger_flexor", label: "Finger flexor" },
        { key: "finger_extensor", label: "Finger extensor" },
      ],
    },
    {
      title: "Hip",
      rows: [
        { key: "hip_flexor", label: "Hip flexor" },
        { key: "hip_extensor", label: "Hip extensor" },
      ],
    },
    {
      title: "Knee",
      rows: [
        { key: "knee_flexor", label: "Knee flexor" },
        { key: "knee_extensor", label: "Knee extensor" },
      ],
    },
    {
      title: "Ankle",
      rows: [
        { key: "ankle_dorsiflexor", label: "Ankle dorsiflexor" },
        { key: "ankle_plantarflexor", label: "Ankle plantarflexor" },
      ],
    },
  ];

  const regionArr = Array.isArray(values?.region)
    ? values?.region
    : values?.region
      ? [values?.region]
      : [];

  const categoryArr = Array.isArray(values?.category)
    ? values?.category
    : values?.category
      ? [values?.category]
      : [];

  const isAmputation = categoryArr.includes("amputation");
  const normalizedAmpLowerLimbLocation =
    typeof values?.amp_lower_limb_location === "string"
      ? values?.amp_lower_limb_location.trim()
      : values?.amp_lower_limb_location;
  const normalizedAmpUpperLimbLocation =
    typeof values?.amp_upper_limb_location === "string"
      ? values?.amp_upper_limb_location.trim()
      : values?.amp_upper_limb_location;

  // Show only the MRC sections relevant to the selected region(s).
  const wantedTitles = (() => {
    const hasUpper = regionArr.includes("upper_limb");
    const hasLower = regionArr.includes("lower_limb");

    // If amputation is hip disortation, hide the entire MRC.
    if (
      isAmputation &&
      (normalizedAmpLowerLimbLocation === "hip_disortation" ||
        normalizedAmpUpperLimbLocation === "shoulder_disortation")
    )
      return [];

    // If nothing is selected in Region, show the entire MRC form.
    if (!regionArr.length) return GROUPS.map((g) => g.title);

    // Amputation-specific MRC display rules (upper + lower) based on location selections.
    if (isAmputation) {
      let wantedUpper = [];
      let wantedLower = [];

      if (hasUpper) {
        if (normalizedAmpUpperLimbLocation === "above_elbow") wantedUpper = ["Shoulder"];
        else if (normalizedAmpUpperLimbLocation === "below_elbow") wantedUpper = ["Shoulder", "Elbow"];
        else if (normalizedAmpUpperLimbLocation === "rays_amputation")
          wantedUpper = ["Shoulder", "Elbow", "Wrist"];
        else if (normalizedAmpUpperLimbLocation === "carpal_metacarpal")
          wantedUpper = ["Shoulder", "Elbow", "Wrist"];
        else wantedUpper = ["Shoulder", "Elbow", "Wrist", "Finger"];
      }

      if (hasLower) {
        if (normalizedAmpLowerLimbLocation === "above_knee") wantedLower = ["Hip"];
        else if (normalizedAmpLowerLimbLocation === "below_knee") wantedLower = ["Hip", "Knee"];
        else if (normalizedAmpLowerLimbLocation === "rays_amputation")
          wantedLower = ["Hip", "Knee", "Ankle"];
        else if (normalizedAmpLowerLimbLocation === "tarsal_metatarsal")
          wantedLower = ["Hip", "Knee", "Ankle"];
        else wantedLower = ["Hip", "Knee", "Ankle"];
      }

      // If both upper and lower are selected, return union of the relevant groups.
      return [...wantedUpper, ...wantedLower];
    }

    if (hasUpper && hasLower) return GROUPS.map((g) => g.title);
    if (hasUpper) return ["Shoulder", "Elbow", "Wrist", "Finger"];
    if (hasLower) return ["Hip", "Knee", "Ankle"];

    return GROUPS.map((g) => g.title);
  })();

  const visibleGroups = GROUPS.filter((g) => wantedTitles.includes(g.title));
  const showAnkleNote =
    isAmputation && normalizedAmpLowerLimbLocation === "tarsal_metatarsal" && wantedTitles.includes("Ankle");
  const showWristNote =
    isAmputation &&
    normalizedAmpUpperLimbLocation === "carpal_metacarpal" &&
    wantedTitles.includes("Wrist");

  if (!visibleGroups.length) return null;

  return (
    <div style={{ width: "100%" }}>
      <div style={{ fontWeight: 700, marginBottom: 10 }}>MRC</div>
      {showAnkleNote && (
        <div
          style={{
            marginBottom: 12,
            padding: "8px 10px",
            border: "1px solid #bfdbfe",
            borderRadius: 10,
            background: "#eff6ff",
            fontWeight: 700,
            color: "#1d4ed8",
          }}
        >
          Fill Ankle if Required, not mandatory
        </div>
      )}
      {showWristNote && (
        <div
          style={{
            marginBottom: 12,
            padding: "8px 10px",
            border: "1px solid #bfdbfe",
            borderRadius: 10,
            background: "#eff6ff",
            fontWeight: 700,
            color: "#1d4ed8",
          }}
        >
          Fill Wrist only if needed it is not mandatory
        </div>
      )}

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 640 }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "10px 8px", borderBottom: "1px solid #e5e7eb" }}>MRC</th>
              <th style={{ textAlign: "left", padding: "10px 8px", borderBottom: "1px solid #e5e7eb" }}>Right</th>
              <th style={{ textAlign: "left", padding: "10px 8px", borderBottom: "1px solid #e5e7eb" }}>Left</th>
              <th style={{ textAlign: "left", padding: "10px 8px", borderBottom: "1px solid #e5e7eb" }}>Specify</th>
            </tr>
          </thead>
          <tbody>
            {visibleGroups.flatMap((g) => {
              const sectionRow = (
                <tr key={`section_${g.title}`}>
                  <td
                    colSpan={4}
                    style={{
                      padding: "10px 8px",
                      borderBottom: "1px solid #e5e7eb",
                      fontWeight: 800,
                      background: "#f8fafc",
                    }}
                  >
                    {g.title}
                  </td>
                </tr>
              );

              const dataRows = g.rows.map((r) => {
                const rightName = `mrc_${r.key}_right`;
                const leftName = `mrc_${r.key}_left`;
                const specifyName = `mrc_${r.key}_specify`;
                return (
                  <tr key={r.key}>
                    <td style={{ padding: "10px 8px", borderBottom: "1px solid #f1f5f9", fontWeight: 700 }}>
                      {r.label}
                    </td>
                    <td style={{ padding: "10px 8px", borderBottom: "1px solid #f1f5f9" }}>
                      <select
                        value={values[rightName] || ""}
                        onChange={(e) => onChange(rightName, e.target.value)}
                        style={{
                          width: "100%",
                          padding: "8px 10px",
                          border: "1px solid #e5e7eb",
                          borderRadius: 8,
                          background: "#fff",
                        }}
                      >
                        <option value="">Select</option>
                        {strengthOptions.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td style={{ padding: "10px 8px", borderBottom: "1px solid #f1f5f9" }}>
                      <select
                        value={values[leftName] || ""}
                        onChange={(e) => onChange(leftName, e.target.value)}
                        style={{
                          width: "100%",
                          padding: "8px 10px",
                          border: "1px solid #e5e7eb",
                          borderRadius: 8,
                          background: "#fff",
                        }}
                      >
                        <option value="">Select</option>
                        {strengthOptions.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td style={{ padding: "10px 8px", borderBottom: "1px solid #f1f5f9" }}>
                      <input
                        type="text"
                        value={values[specifyName] || ""}
                        onChange={(e) => onChange(specifyName, e.target.value)}
                        style={{
                          width: "100%",
                          padding: "8px 10px",
                          border: "1px solid #e5e7eb",
                          borderRadius: 8,
                          background: "#fff",
                        }}
                      />
                    </td>
                  </tr>
                );
              });

              return [sectionRow, ...dataRows];
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export function MyotomeTestingForm({ values, onChange }) {
  const strengthOptions = [
    { value: "0", label: "0" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "NT", label: "NT" },
  ];

  const rows = [
    { key: "C5", label: "Elbow flexors (C5)", limb: "upper_limb" },
    { key: "C6", label: "Wrist extensors (C6)", limb: "upper_limb" },
    { key: "C7", label: "Elbow extensors (C7)", limb: "upper_limb" },
    { key: "C8", label: "Finger flexors (C8)", limb: "upper_limb" },
    { key: "T1", label: "Finger abductors (T1)", limb: "upper_limb" },

    { key: "L2", label: "Hip flexors (L2)", limb: "lower_limb" },
    { key: "L3", label: "Knee extensors (L3)", limb: "lower_limb" },
    { key: "L4", label: "Ankle dorsiflexors (L4)", limb: "lower_limb" },
    { key: "L5", label: "Long toe extensors (L5)", limb: "lower_limb" },
    { key: "S1", label: "Ankle plantar flexors (S1)", limb: "lower_limb" },
  ];

  const regionArr = Array.isArray(values?.region)
    ? values?.region
    : values?.region
      ? [values?.region]
      : [];

  const categoryArr = Array.isArray(values?.category)
    ? values?.category
    : values?.category
      ? [values?.category]
      : [];
  const isAmputation = categoryArr.includes("amputation");

  const normalizedAmpLowerLimbLocation =
    typeof values?.amp_lower_limb_location === "string"
      ? values?.amp_lower_limb_location.trim()
      : values?.amp_lower_limb_location;

  const normalizedAmpUpperLimbLocation =
    typeof values?.amp_upper_limb_location === "string"
      ? values?.amp_upper_limb_location.trim()
      : values?.amp_upper_limb_location;

  // Default: show all myotomes if Region isn't selected.
  let visibleRows = rows;
  let showS1Note = false;
  let showC8T1Note = false;

  if (!regionArr.length) {
    visibleRows = rows;
  } else {
    const hasUpper = regionArr.includes("upper_limb");
    const hasLower = regionArr.includes("lower_limb");

    // If amputation location is disarticulation -> hide entire myotome.
    if (
      isAmputation &&
      (normalizedAmpLowerLimbLocation === "hip_disortation" ||
        normalizedAmpUpperLimbLocation === "shoulder_disortation")
    ) {
      visibleRows = [];
    } else if (isAmputation) {
      let upperRows = [];
      let lowerRows = [];

      // Upper limb amputation location rules (when Upper Limb is selected).
      if (hasUpper) {
        if (normalizedAmpUpperLimbLocation === "above_elbow") {
          upperRows = rows.filter((r) => r.key === "C5");
        } else if (normalizedAmpUpperLimbLocation === "below_elbow") {
          upperRows = rows.filter((r) => r.key === "C5" || r.key === "C6" || r.key === "C7");
        } else if (normalizedAmpUpperLimbLocation === "rays_amputation") {
          upperRows = rows.filter((r) => r.key === "C5" || r.key === "C6" || r.key === "C7" || r.key === "C8" || r.key === "T1");
          showC8T1Note = true;
        } else if (normalizedAmpUpperLimbLocation === "carpal_metacarpal") {
          upperRows = rows.filter((r) => r.key === "C5" || r.key === "C6" || r.key === "C7");
        } else {
          // If location isn't selected yet, fall back to all upper-limb myotomes.
          upperRows = rows.filter((r) => r.limb === "upper_limb");
        }
      }

      // Lower limb amputation location rules (when Lower Limb is selected).
      if (hasLower) {
        if (normalizedAmpLowerLimbLocation === "above_knee") {
          lowerRows = rows.filter((r) => r.key === "L2" || r.key === "L3");
        } else if (normalizedAmpLowerLimbLocation === "below_knee") {
          lowerRows = rows.filter((r) => r.key === "L2" || r.key === "L3");
        } else if (normalizedAmpLowerLimbLocation === "rays_amputation") {
          lowerRows = rows.filter((r) => r.key === "L2" || r.key === "L3" || r.key === "L4" || r.key === "S1");
        } else if (normalizedAmpLowerLimbLocation === "tarsal_metatarsal") {
          lowerRows = rows.filter((r) => r.key === "L2" || r.key === "L3" || r.key === "L4" || r.key === "S1");
          showS1Note = true;
        } else {
          // If location isn't selected yet, fall back to all lower-limb myotomes.
          lowerRows = rows.filter((r) => r.limb === "lower_limb");
        }
      }

      visibleRows = [...upperRows, ...lowerRows];
    } else if (hasUpper && hasLower) {
      // For non-amputation cases, keep original behavior.
      visibleRows = rows;
    } else if (hasUpper) {
      visibleRows = rows.filter((r) => r.limb === "upper_limb");
    } else if (hasLower) {
      visibleRows = rows.filter((r) => r.limb === "lower_limb");
    }
  }

  return (
    <div style={{ width: "100%" }}>
      <div style={{ fontWeight: 700, marginBottom: 10 }}>Myotome</div>

      {showC8T1Note && (
        <div
          style={{
            marginBottom: 12,
            padding: "8px 10px",
            border: "1px solid #bfdbfe",
            borderRadius: 10,
            background: "#eff6ff",
            fontWeight: 700,
            color: "#1d4ed8",
          }}
        >
          fill c8,t1 only if needed it is not mandatory
        </div>
      )}

      {showS1Note && (
        <div
          style={{
            marginBottom: 12,
            padding: "8px 10px",
            border: "1px solid #bfdbfe",
            borderRadius: 10,
            background: "#eff6ff",
            fontWeight: 700,
            color: "#1d4ed8",
          }}
        >
          Fill S1 if required, not mandetory
        </div>
      )}

      {visibleRows.length === 0 ? null : (
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "10px 8px", borderBottom: "1px solid #e5e7eb" }}>Myotome</th>
              <th style={{ textAlign: "left", padding: "10px 8px", borderBottom: "1px solid #e5e7eb" }}>Right</th>
              <th style={{ textAlign: "left", padding: "10px 8px", borderBottom: "1px solid #e5e7eb" }}>Left</th>
            </tr>
          </thead>
          <tbody>
            {visibleRows.map((r) => {
              const rightName = `myotome_${r.key}_right`;
              const leftName = `myotome_${r.key}_left`;
              return (
                <tr key={r.key}>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid #f1f5f9", fontWeight: 700 }}>
                    {r.label}
                  </td>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid #f1f5f9" }}>
                    <select
                      value={values[rightName] || ""}
                      onChange={(e) => onChange(rightName, e.target.value)}
                      style={{
                        width: "100%",
                        padding: "8px 10px",
                        border: "1px solid #e5e7eb",
                        borderRadius: 8,
                        background: "#fff",
                      }}
                    >
                      <option value="">Select</option>
                      {strengthOptions.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid #f1f5f9" }}>
                    <select
                      value={values[leftName] || ""}
                      onChange={(e) => onChange(leftName, e.target.value)}
                      style={{
                        width: "100%",
                        padding: "8px 10px",
                        border: "1px solid #e5e7eb",
                        borderRadius: 8,
                        background: "#fff",
                      }}
                    >
                      <option value="">Select</option>
                      {strengthOptions.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      )}
    </div>
  );
}

export function MASNotesForm({ values, onChange }) {
  return (
    <CommonFormBuilder
      schema={{
        title: "",
        sections: [{ fields: [{ name: "mas_scale_notes", label: "Modified Ashworth Scale (MAS)", type: "textarea" }] }],
      }}
      values={values}
      onChange={onChange}
      layout="nested"
    />
  );
}
export const PHYSICAL_ASSESSMENT_REGISTRY = {
  pain_assessment: PainAssessmentForm,
  oswestry_low_back_pain: OswestryLowBackPainAssessment,
  brief_pain_inventory: BriefPainInventoryAssessment,
  koos_knee_survey: KOOSKneeSurvey,
  spadi_shoulder: SPADIShoulderAssessment,
  bctq: BCTQAssessment,
  mrc_scale: MRCScaleForm,
  myotome_testing: MyotomeTestingForm,
  mas_scale: PTMASForm,
  mas_scale_notes: MASNotesForm,
  rom: PTROMForm,
  asia_sci: SpinalcordInjury,
};
