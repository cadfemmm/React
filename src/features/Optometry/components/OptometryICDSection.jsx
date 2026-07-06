import React, { useState, useEffect } from "react";
import api from "../../../shared/api/apiClient";
import { API_URL } from "../../../platform/config/api.config";

/**
 * Clean ICD-ICF-ICHI Section for Optometry with Accordion UI
 */

const ADDITIONAL_ICHI_OPTIONS = [
  { code: "OPTO-ICHI-001", name: "Comprehensive refraction and spectacle dispensing" },
  { code: "OPTO-ICHI-002", name: "Low vision assessment and optical aids training" },
  { code: "OPTO-ICHI-003", name: "Binocular vision and orthoptic exercises" },
  { code: "OPTO-ICHI-004", name: "Contact lens fitting and care education" },
  { code: "OPTO-ICHI-005", name: "Visual field screening and rehabilitation" },
  { code: "OPTO-ICHI-006", name: "Eccentric viewing and scanning training" },
  { code: "OPTO-ICHI-007", name: "Paediatric vision therapy session" },
  { code: "OPTO-ICHI-008", name: "Ocular health education and hygiene counselling" },
  { code: "OPTO-ICHI-009", name: "Computer-based visual perceptual training" },
  { code: "OPTO-ICHI-010", name: "Driving vision assessment and advice" },
];

function OptometryICDSection({ values = {}, onChange, mode = "plan" }) {
  const DEPARTMENT = "Optometry";
  const showICF = mode === "icd-icf" || mode === "assessment";
  const showICHI = mode === "plan";
  
  // State
  const [icdList, setIcdList] = useState([]);
  const [selectedICDs, setSelectedICDs] = useState(() => values.selected_icds || []);
  const [selectedICFs, setSelectedICFs] = useState(() => values.selected_icfs || []);
  const [icfData, setIcfData] = useState(() => values.icf_data || {});
  const [ichiData, setIchiData] = useState(() => values.ichi_data || {});
  const [selectedAdditionalIchi, setSelectedAdditionalIchi] = useState(
    () => values.selected_additional_ichi || [],
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  // Accordion states
  const [expandedSections, setExpandedSections] = useState({
    icd: true,
    icf: false,
    ichi: false,
    additional_ichi: false,
  });

  // Load ICDs on mount
  useEffect(() => {
    loadICDs();
  }, []);

  // Sync with external changes
  useEffect(() => {
    if (values.selected_icds) setSelectedICDs(values.selected_icds);
    if (values.selected_icfs) setSelectedICFs(values.selected_icfs);
    if (values.icf_data) setIcfData(values.icf_data);
    if (values.ichi_data) setIchiData(values.ichi_data);
    if (values.selected_additional_ichi) setSelectedAdditionalIchi(values.selected_additional_ichi);
  }, [values]);

  const loadICDs = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await api.get(API_URL.icdByDepartment(DEPARTMENT));
      setIcdList(res.data?.results || []);
    } catch (e) {
      setError("Failed to load ICDs");
    } finally {
      setLoading(false);
    }
  };

  const getIcfKey = (item) => `${item.source_icd}::${item.code}`;

  const toggleICD = (icdCode) => {
    const newSelected = selectedICDs.includes(icdCode)
      ? selectedICDs.filter(x => x !== icdCode)
      : [...selectedICDs, icdCode];

    const selectedICD = icdList.find(icd => icd.code === icdCode);
    
    if (selectedICD) {
      const newIcfData = { ...icfData };
      const newIchiData = { ...ichiData };
      let newSelectedICFs = [...selectedICFs];
      
      if (newSelected.includes(icdCode)) {
        newIcfData[icdCode] = selectedICD.icf || [];
        newIchiData[icdCode] = selectedICD.ichi || [];
      } else {
        delete newIcfData[icdCode];
        delete newIchiData[icdCode];
        newSelectedICFs = newSelectedICFs.filter((key) => !key.startsWith(`${icdCode}::`));
      }
      
      setIcfData(newIcfData);
      setIchiData(newIchiData);
      setSelectedICFs(newSelectedICFs);
      onChange?.("icf_data", newIcfData);
      onChange?.("ichi_data", newIchiData);
      onChange?.("selected_icfs", newSelectedICFs);
    }

    setSelectedICDs(newSelected);
    onChange?.("selected_icds", newSelected);
  };

  const toggleICF = (item) => {
    const key = getIcfKey(item);
    const newSelected = selectedICFs.includes(key)
      ? selectedICFs.filter((x) => x !== key)
      : [...selectedICFs, key];

    setSelectedICFs(newSelected);
    onChange?.("selected_icfs", newSelected);
  };

  const toggleAdditionalIchi = (code) => {
    const newSelected = selectedAdditionalIchi.includes(code)
      ? selectedAdditionalIchi.filter((x) => x !== code)
      : [...selectedAdditionalIchi, code];

    setSelectedAdditionalIchi(newSelected);
    onChange?.("selected_additional_ichi", newSelected);
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const allICFItems = Object.entries(icfData).flatMap(([icdCode, items]) =>
    (items || []).map((item) => ({ ...item, source_icd: icdCode }))
  );

  const allICHIItems = Object.entries(ichiData).flatMap(([icdCode, items]) =>
    (items || []).map((item) => ({ ...item, source_icd: icdCode }))
  );

  return (
    <div style={S.container}>
      {/* ICD Selection Section */}
      {showICF && (
        <div style={S.section}>
          <div 
            style={S.header} 
            onClick={() => toggleSection('icd')}
          >
            <span style={S.headerText}>
              🏥 ICD Selection ({selectedICDs.length} selected)
            </span>
            <span style={S.chevron}>
              {expandedSections.icd ? '▼' : '▶'}
            </span>
          </div>
          
          {expandedSections.icd && (
            <div style={S.content}>
              {loading && <div style={S.loading}>Loading ICDs...</div>}
              {error && <div style={S.error}>{error}</div>}
              
              {!loading && !error && (
                <div style={S.icdGrid}>
                  {icdList.map((icd) => (
                    <label key={icd.code} style={{
                      ...S.icdCard,
                      background: selectedICDs.includes(icd.code) ? "#f0f9ff" : "#fff"
                    }}>
                      <input
                        type="checkbox"
                        checked={selectedICDs.includes(icd.code)}
                        onChange={() => toggleICD(icd.code)}
                        style={S.checkbox}
                      />
                      <div>
                        <div style={S.icdCode}>{icd.code}</div>
                        <div style={S.icdName}>{icd.name}</div>
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ICF Selection Section */}
      {showICF && selectedICDs.length > 0 && (
        <div style={S.section}>
          <div 
            style={S.header} 
            onClick={() => toggleSection('icf')}
          >
            <span style={S.headerText}>
              🔍 ICF Selection ({selectedICFs.length} selected)
            </span>
            <span style={S.chevron}>
              {expandedSections.icf ? '▼' : '▶'}
            </span>
          </div>
          
          {expandedSections.icf && (
            <div style={S.content}>
              {allICFItems.length === 0 ? (
                <div style={S.emptyHint}>No ICF items linked to the selected ICD(s).</div>
              ) : (
                <div style={S.icdGrid}>
                  {allICFItems.map((item) => {
                    const key = getIcfKey(item);
                    const isSelected = selectedICFs.includes(key);
                    return (
                      <label
                        key={key}
                        style={{
                          ...S.icdCard,
                          background: isSelected ? "#f0fdf4" : "#fff",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleICF(item)}
                          style={S.checkbox}
                        />
                        <div>
                          <div style={S.icdCode}>{item.code}</div>
                          <div style={S.icdName}>{item.name}</div>
                          {item.source_icd && (
                            <div style={S.itemSource}>ICD: {item.source_icd}</div>
                          )}
                          {item.notes && <div style={S.itemNotes}>{item.notes}</div>}
                        </div>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ICHI Items Section */}
      {showICHI && allICHIItems.length > 0 && (
        <div style={S.section}>
          <div 
            style={S.header} 
            onClick={() => toggleSection('ichi')}
          >
            <span style={S.headerText}>
              ⚡ ICHI Interventions ({allICHIItems.length} items)
            </span>
            <span style={S.chevron}>
              {expandedSections.ichi ? '▼' : '▶'}
            </span>
          </div>
          
          {expandedSections.ichi && (
            <div style={S.content}>
              {allICHIItems.map((item) => (
                <div key={`${item.source_icd}-${item.code}`} style={S.itemCard}>
                  <div style={S.itemCode}>{item.code}</div>
                  <div style={S.itemName}>{item.name}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Additional ICHI — optometry catalogue (multi-select) */}
      {showICHI && (
        <div style={S.section}>
          <div
            style={S.header}
            onClick={() => toggleSection("additional_ichi")}
          >
            <span style={S.headerText}>
              ➕ Additional ICHI ({selectedAdditionalIchi.length} selected)
            </span>
            <span style={S.chevron}>
              {expandedSections.additional_ichi ? "▼" : "▶"}
            </span>
          </div>

          {expandedSections.additional_ichi && (
            <div style={S.content}>
              <div style={S.icdGrid}>
                {ADDITIONAL_ICHI_OPTIONS.map((item) => {
                  const isSelected = selectedAdditionalIchi.includes(item.code);
                  return (
                    <label
                      key={item.code}
                      style={{
                        ...S.icdCard,
                        background: isSelected ? "#fef3c7" : "#fff",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleAdditionalIchi(item.code)}
                        style={{ ...S.checkbox, accentColor: "#d97706" }}
                      />
                      <div>
                        <div style={S.icdCode}>{item.code}</div>
                        <div style={S.icdName}>{item.name}</div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Empty state for Plan mode */}
      {mode === "plan" && selectedICDs.length === 0 && (
        <div style={S.emptyState}>
          <div style={S.emptyIcon}>📋</div>
          <div style={S.emptyTitle}>No ICDs Selected</div>
          <div style={S.emptyDesc}>
            Select ICDs in the Assessment tab to see intervention recommendations here.
          </div>
        </div>
      )}
    </div>
  );
}

const S = {
  container: {
    marginBottom: 20,
  },
  section: {
    marginBottom: 16,
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    overflow: "hidden",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 16px",
    background: "#f8fafc",
    cursor: "pointer",
    borderBottom: "1px solid #e5e7eb",
    transition: "background 0.2s",
  },
  headerText: {
    fontSize: 14,
    fontWeight: 600,
    color: "#1f2937",
  },
  chevron: {
    color: "#6b7280",
    fontSize: 12,
    transition: "transform 0.2s",
  },
  content: {
    padding: 16,
    background: "#fff",
  },
  loading: {
    padding: 20,
    textAlign: "center",
    color: "#6b7280",
  },
  error: {
    padding: 12,
    background: "#fee2e2",
    color: "#991b1b",
    borderRadius: 6,
    fontSize: 12,
  },
  icdGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 12,
  },
  icdCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    padding: 12,
    border: "1px solid #d1d5db",
    borderRadius: 6,
    cursor: "pointer",
    transition: "all 0.2s",
  },
  checkbox: {
    marginTop: 2,
    accentColor: "#2563eb",
  },
  icdCode: {
    fontSize: 13,
    fontWeight: 700,
    color: "#1f2937",
    marginBottom: 4,
  },
  icdName: {
    fontSize: 12,
    color: "#374151",
    lineHeight: 1.4,
  },
  itemCard: {
    marginBottom: 12,
    padding: 12,
    border: "1px solid #e5e7eb",
    borderRadius: 6,
    background: "#fafbfc",
  },
  itemCode: {
    fontSize: 12,
    fontWeight: 700,
    color: "#1f2937",
    marginBottom: 4,
  },
  itemName: {
    fontSize: 12,
    color: "#374151",
    marginBottom: 4,
  },
  itemNotes: {
    fontSize: 11,
    color: "#6b7280",
    fontStyle: "italic",
  },
  itemSource: {
    fontSize: 11,
    color: "#6b7280",
    marginTop: 4,
  },
  emptyHint: {
    fontSize: 13,
    color: "#6b7280",
    padding: "8px 0",
  },
  emptyState: {
    textAlign: "center",
    padding: "40px 20px",
    color: "#6b7280",
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
    lineHeight: 1.5,
  },
};

export default OptometryICDSection;