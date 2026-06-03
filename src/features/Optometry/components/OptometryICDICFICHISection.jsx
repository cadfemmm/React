import React, { useState, useEffect } from "react";
import api from "../../../shared/api/apiClient";
import { API_URL } from "../../../platform/config/api.config";

/**
 * ICD-ICF-ICHI Section for Optometry Assessment Plan
 * 
 * API:
 * GET /api/codes/icd/Optometry/
 * Response: { count, next, previous, results: [{ code, name, icf: [...], ichi: [...] }] }
 * 
 * Shows ICF and ICHI items based on selected ICDs for Plan section
 */

function OptometryICDICFICHISection({ values = {}, onChange, mode = "plan" }) {
  const DEPARTMENT = "Optometry";
  const showICF = mode === "icd-icf" || mode === "assessment";
  const showICHI = mode === "plan";
  
  // Initialize state from props or from stored data
  const [icdList, setIcdList] = useState([]);
  const [selectedICDs, setSelectedICDs] = useState(() => {
    if (values.selected_icds) return values.selected_icds;
    return [];
  });
  const [icdBusy, setIcdBusy] = useState(false);
  const [icdMsg, setIcdMsg] = useState("");
  
  // ICF + ICHI Data (shared across tabs)
  const [icfData, setIcfData] = useState(() => values.icf_data || {});
  const [ichiData, setIchiData] = useState(() => values.ichi_data || {});

  // Load ICDs on mount
  useEffect(() => {
    loadICDs();
  }, []);

  // Sync external data changes
  useEffect(() => {
    if (values.selected_icds && !arrayEquals(selectedICDs, values.selected_icds)) {
      setSelectedICDs(values.selected_icds);
    }
    if (values.icf_data && !objectEquals(icfData, values.icf_data)) {
      setIcfData(values.icf_data);
    }
    if (values.ichi_data && !objectEquals(ichiData, values.ichi_data)) {
      setIchiData(values.ichi_data);
    }
  }, [values]);

  const loadICDs = async () => {
    try {
      setIcdBusy(true);
      setIcdMsg("");
      
      const endpoint = API_URL.icdByDepartment(DEPARTMENT);
      const res = await api.get(endpoint);
      
      const icds = res.data?.results || [];
      setIcdList(icds);
      
    } catch (e) {
      setIcdMsg(`Failed to load ICDs: ${e.message}`);
    } finally {
      setIcdBusy(false);
    }
  };

  // Handle ICD selection - extract ICF + ICHI data
  const toggleICD = (icdCode) => {
    setSelectedICDs((prev) => {
      const newSelected = prev.includes(icdCode)
        ? prev.filter((x) => x !== icdCode)
        : [...prev, icdCode];

      // Find the ICD object and extract ICF + ICHI
      const selectedICD = icdList.find((icd) => icd.code === icdCode);
      
      if (selectedICD) {
        setIcfData((prevIcf) => {
          const newIcf = { ...prevIcf };
          if (newSelected.includes(icdCode)) {
            newIcf[icdCode] = selectedICD.icf || [];
          } else {
            delete newIcf[icdCode];
          }
          onChange?.("icf_data", newIcf);
          return newIcf;
        });

        setIchiData((prevIchi) => {
          const newIchi = { ...prevIchi };
          if (newSelected.includes(icdCode)) {
            newIchi[icdCode] = selectedICD.ichi || [];
          } else {
            delete newIchi[icdCode];
          }
          onChange?.("ichi_data", newIchi);
          return newIchi;
        });
      }

      onChange?.("selected_icds", newSelected);
      return newSelected;
    });
  };

  const allICFItems = Object.entries(icfData).flatMap(([icdCode, items]) =>
    (items || []).map((item) => ({ ...item, source_icd: icdCode }))
  );

  const allICHIItems = Object.entries(ichiData).flatMap(([icdCode, items]) =>
    (items || []).map((item) => ({ ...item, source_icd: icdCode }))
  );

  // Hospital/Healthcare brand colors
  const COLOR_PRIMARY = "#1F2937";      // Dark gray for code/name
  const COLOR_SECONDARY = "#0EA5E9";    // Hospital blue for description
  const COLOR_ACCENT = "#06B6D4";       // Cyan accent

  return (
    <div style={S.section}>
      {/* ICD Selection - show in assessment or when mode allows */}
      {showICF && (
        <>
          <div style={S.heading}>ICD</div>
          <p style={S.desc}>
            Select ICDs to populate ICF and ICHI items for this assessment
          </p>

          <div style={S.subsection}>
            <div style={S.subheading}>1. Select ICD(s)</div>
            {icdMsg && <div style={S.errorMsg}>{icdMsg}</div>}

            {icdBusy ? (
              <p>Loading ICDs...</p>
            ) : icdList.length === 0 ? (
              <p style={{ color: "#999" }}>No ICDs available</p>
            ) : (
              <div style={S.icdList}>
                {icdList.map((icd) => (
                  <label
                    key={icd.code}
                    style={{
                      ...S.icdRow,
                      background: selectedICDs.includes(icd.code)
                        ? "#EFF6FF"
                        : "#FFFFFF",
                      borderLeft: selectedICDs.includes(icd.code)
                        ? `4px solid ${COLOR_ACCENT}`
                        : "4px solid #E5E7EB",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedICDs.includes(icd.code)}
                      onChange={() => toggleICD(icd.code)}
                      style={S.checkbox}
                    />
                    <div style={S.icdContent}>
                      <div style={S.icdHeader}>
                        <span style={{ ...S.icdCode, color: COLOR_PRIMARY }}>
                          {icd.code}
                        </span>
                        <span style={{ ...S.icdName, color: COLOR_PRIMARY }}>
                          {icd.name}
                        </span>
                      </div>
                      {icd.description && (
                        <div style={{ ...S.icdDescription, color: COLOR_SECONDARY }}>
                          {icd.description}
                        </div>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            )}

            {selectedICDs.length > 0 && (
              <div style={S.summary}>
                <strong>Selected ICDs:</strong> {selectedICDs.join(", ")}
                <br />
                <strong>ICF Items:</strong> {allICFItems.length}
                <br />
                <strong>ICHI Items:</strong> {allICHIItems.length}
              </div>
            )}
          </div>
        </>
      )}

      {/* ICF Items - show when mode allows */}
      {showICF && allICFItems.length > 0 && (
        <div style={S.subsection}>
          <div style={S.subheading}>2. ICF Items</div>
          {allICFItems.map((item) => (
            <div key={item.code} style={S.itemCard}>
              <div style={S.itemHeader}>
                <span style={{ color: COLOR_PRIMARY, fontWeight: 700, fontSize: 13 }}>
                  {item.code}
                </span>
                <span style={{ margin: "0 8px", color: COLOR_PRIMARY }}>—</span>
                <span style={{ color: COLOR_PRIMARY, fontWeight: 600, fontSize: 13 }}>
                  {item.name}
                </span>
                {item.notes && (
                  <>
                    <br />
                    <span style={{ color: COLOR_SECONDARY, fontSize: 12, fontStyle: "italic" }}>
                      {item.notes}
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ICHI Items - show in Plan tab */}
      {showICHI && allICHIItems.length > 0 && (
        <div style={S.subsection}>
          <div style={S.subheading}>ICHI Items (Intervention Recommendations)</div>
          {allICHIItems.map((item) => (
            <div key={item.code} style={S.itemCard}>
              <div style={S.itemHeader}>
                <span style={{ color: COLOR_PRIMARY, fontWeight: 700, fontSize: 13 }}>
                  {item.code}
                </span>
                <span style={{ margin: "0 8px", color: COLOR_PRIMARY }}>—</span>
                <span style={{ color: COLOR_PRIMARY, fontWeight: 600, fontSize: 13 }}>
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Show message if in plan mode but no ICD selected yet */}
      {mode === "plan" && selectedICDs.length === 0 && (
        <div style={S.emptyState}>
          <div style={S.emptyIcon}>📋</div>
          <div style={S.emptyTitle}>No ICDs Selected</div>
          <div style={S.emptyDesc}>
            Select ICDs in the Assessment tab to automatically populate ICF and ICHI items here.
          </div>
        </div>
      )}
    </div>
  );
}

// Helper functions for comparison
const arrayEquals = (a, b) => {
  if (!Array.isArray(a) || !Array.isArray(b)) return a === b;
  if (a.length !== b.length) return false;
  return a.every((v, i) => v === b[i]);
};

const objectEquals = (a, b) => {
  if (typeof a !== "object" || typeof b !== "object") return a === b;
  if (a === null || b === null) return a === b;
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  return keysA.every(k => JSON.stringify(a[k]) === JSON.stringify(b[k]));
};

const S = {
  section: {
    marginBottom: 24,
    padding: 16,
    background: "#fff",
    borderRadius: 8,
    border: "1px solid #E5E7EB",
  },
  heading: {
    fontSize: 16,
    fontWeight: 700,
    color: "#0F172A",
    marginBottom: 8,
  },
  desc: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 16,
  },
  subsection: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottom: "1px solid #F3F4F6",
  },
  subheading: {
    fontSize: 14,
    fontWeight: 600,
    color: "#1F2937",
    marginBottom: 12,
  },
  icdList: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginBottom: 16,
  },
  icdRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    padding: "12px 14px",
    border: "1px solid #D1D5DB",
    borderRadius: 6,
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  checkbox: {
    marginTop: 4,
    cursor: "pointer",
    accentColor: "#2563EB",
  },
  icdContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  icdHeader: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  icdCode: {
    fontSize: 13,
    fontWeight: 700,
    color: "#1F2937",
  },
  icdName: {
    fontSize: 13,
    fontWeight: 600,
    color: "#374151",
  },
  icdDescription: {
    fontSize: 12,
    color: "#6B7280",
    fontStyle: "italic",
    marginTop: 2,
  },
  itemCard: {
    marginBottom: 12,
    padding: 10,
    border: "1px solid #E5E7EB",
    borderRadius: 6,
    background: "#FAFBFC",
  },
  itemHeader: {
    marginBottom: 10,
    fontSize: 12,
  },
  summary: {
    marginTop: 12,
    padding: 10,
    background: "#f5f5f5",
    borderRadius: 6,
    fontSize: 12,
  },
  errorMsg: {
    padding: 10,
    background: "#FEE2E2",
    color: "#991B1B",
    borderRadius: 6,
    marginBottom: 12,
    fontSize: 12,
  },
  emptyState: {
    textAlign: "center",
    padding: "40px 20px",
    color: "#6B7280",
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: "#374151",
    marginBottom: 8,
  },
  emptyDesc: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 1.5,
  },
};

export default OptometryICDICFICHISection;