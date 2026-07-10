import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import Select, { components } from "react-select";
import api from "../../../shared/api/apiClient";
import { API_URL } from "../../../platform/config/api.config";
import { fetchIcdCodesPage } from "../../../shared/api/icdCodes";

/**
 * Clean ICD-ICF-ICHI Section for Optometry with Accordion UI
 *
 * Sources ICF/ICHI data from `values.assessment_form_icf` (set by
 * AssessmentLoader when a sub-assessment form is saved).
 * ICF & ICHI items come directly from the form response with code & name.
 * ICD selection uses a single-select dropdown like Doctors' primaryICD.
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

/* ── Paginated multi ICD select (same as Doctors' primaryICD) ──────────── */
const ICD_SELECT_STYLES = {
  menu: (base) => ({ ...base, zIndex: 9999 }),
  multiValue: (base) => ({ ...base, background: "#dbeafe" }),
  multiValueLabel: (base) => ({ ...base, color: "#1e40af", fontWeight: 600 }),
};

function IcdMenuList(props) {
  const { children, innerProps, selectProps } = props;
  const { onLoadMore, isLoadingMore } = selectProps;

  const handleScroll = (event) => {
    innerProps?.onScroll?.(event);
    const target = event.currentTarget;
    if (!target || !onLoadMore) return;
    const nearBottom =
      target.scrollHeight - target.scrollTop <= target.clientHeight + 48;
    if (nearBottom) onLoadMore();
  };

  return (
    <components.MenuList
      {...props}
      innerProps={{ ...innerProps, onScroll: handleScroll }}
    >
      {children}
      {isLoadingMore ? (
        <div style={{ padding: "8px 12px", textAlign: "center", color: "#64748b", fontSize: 13 }}>
          Loading more diagnoses...
        </div>
      ) : null}
    </components.MenuList>
  );
}

function IcdDiagnosisSelect({ value, onChange, placeholder }) {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const requestIdRef = useRef(0);
  const pageRef = useRef(1);
  const hasMoreRef = useRef(true);
  const loadingMoreRef = useRef(false);

  const loadPage = useCallback(async ({ pageNum = 1, append = false }) => {
    if (append && (loadingMoreRef.current || !hasMoreRef.current)) return;
    const requestId = ++requestIdRef.current;
    if (append) {
      loadingMoreRef.current = true;
      setLoadingMore(true);
    } else {
      setLoading(true);
      setOptions([]);
      hasMoreRef.current = true;
      setHasMore(true);
      pageRef.current = 1;
    }
    try {
      const { items, meta } = await fetchIcdCodesPage({ page: pageNum, limit: 100 });
      if (requestId !== requestIdRef.current) return;
      setOptions((prev) => append ? [...prev, ...items] : items);
      hasMoreRef.current = Boolean(meta.hasNext);
      setHasMore(Boolean(meta.hasNext));
      pageRef.current = pageNum;
    } catch (error) {
      console.error("Failed to load ICD codes:", error);
      if (requestId !== requestIdRef.current) return;
      if (!append) setOptions([]);
      hasMoreRef.current = false;
      setHasMore(false);
    } finally {
      if (requestId === requestIdRef.current) {
        setLoading(false);
        loadingMoreRef.current = false;
        setLoadingMore(false);
      }
    }
  }, []);

  useEffect(() => {
    return () => { requestIdRef.current += 1; };
  }, []);

  useEffect(() => {
    loadPage({ pageNum: 1, append: false });
  }, [loadPage]);

  const handleLoadMore = useCallback(() => {
    if (loading || loadingMore || !hasMore) return;
    loadPage({ pageNum: pageRef.current + 1, append: true });
  }, [hasMore, loadPage, loading, loadingMore]);

  const selectedOption =
      options.find(opt => opt.value === value) ||
      (value ? { value, label: value } : null);

  return (
    <Select
      placeholder={loading ? "Loading diagnoses..." : placeholder || "Search and select diagnoses..."}
      options={options}
      value={selectedOption}
      onChange={(selected) =>
          onChange(selected?.value || "")
      }
      onMenuScrollToBottom={handleLoadMore}
      onLoadMore={handleLoadMore}
      isLoadingMore={loadingMore}
      isLoading={loading}
      isClearable
      isSearchable
      menuPosition="fixed"
      menuPlacement="auto"
      closeMenuOnSelect={false}
      blurInputOnSelect={false}
      menuShouldScrollIntoView={false}
      menuShouldBlockScroll={false}
      captureMenuScroll={false}
      maxMenuHeight={300}
      components={{ MenuList: IcdMenuList }}
      styles={ICD_SELECT_STYLES}
      noOptionsMessage={() => loading ? "Loading..." : "No diagnoses found"}
      loadingMessage={() => "Loading diagnoses..."}
    />
  );
}

function OptometryICDSection({ values = {}, onChange, mode = "plan" }) {
  const showICF = mode === "icd-icf" || mode === "assessment";
  const showICHI = mode === "plan";

  // Patch ResizeObserver to suppress the harmless "loop completed" error
  // that occurs when react-select's portal triggers rapid observations.
  useEffect(() => {
    const OrigResizeObserver = window.ResizeObserver;
    if (!OrigResizeObserver) return;

    window.ResizeObserver = class extends OrigResizeObserver {
      constructor(callback) {
        super((entries, observer) => {
          try {
            callback(entries, observer);
          } catch (e) {
            if (!e?.message?.includes?.("ResizeObserver loop")) {
              throw e;
            }
          }
        });
      }
    };

    return () => {
      window.ResizeObserver = OrigResizeObserver;
    };
  }, []);

  // State
  const [selectedICDs, setSelectedICDs] = useState(() => values.selected_icds || []);
  const [selectedICFs, setSelectedICFs] = useState(() => values.selected_icfs || []);
  const [icfData, setIcfData] = useState(() => values.icf_data || {});
  const [ichiData, setIchiData] = useState(() => values.ichi_data || {});
  const [selectedAdditionalIchi, setSelectedAdditionalIchi] = useState(
    () => values.selected_additional_ichi || [],
  );

  // Accordion states
  const [expandedSections, setExpandedSections] = useState({
    icd: true,
    icf: false,
    ichi: false,
    additional_ichi: false,
  });

  // ── When values.assessment_form_icf changes, populate ICF & ICHI ──
  // assessment_form_icf is now an object: { formName: [...icfItems], ... }
  // accumulated across multiple selected questionnaires
  useEffect(() => {
    const formIcfMap = values.assessment_form_icf;
    if (!formIcfMap || typeof formIcfMap !== "object" || Object.keys(formIcfMap).length === 0) return;

    const FORM_KEY = "__assessment_form__";

    // Flatten all ICF items from all forms, deduplicating by code
    const seenCodes = new Set();
    const allFlatIcf = [];
    const allIchiItems = [];

    Object.values(formIcfMap).forEach((icfArray) => {
      (icfArray || []).forEach((icf) => {
        if (!icf.code || seenCodes.has(icf.code)) return;
        seenCodes.add(icf.code);
        allFlatIcf.push({
          id: icf.id,
          code: icf.code,
          name: icf.name,
          notes: icf.notes || null,
          source_icd: FORM_KEY,
        });

        // ICHI now comes with name & code directly in the response
        (icf.ichi || []).forEach((ichiEntry) => {
          if (!ichiEntry) return;
          allIchiItems.push({
            id: ichiEntry.id || "",
            code: ichiEntry.code || "",
            name: ichiEntry.name || "",
            source_icd: FORM_KEY,
            icf_code: icf.code,
          });
        });
      });
    });

    setIcfData((prev) => ({ ...prev, [FORM_KEY]: allFlatIcf }));
    setIchiData((prev) => ({ ...prev, [FORM_KEY]: allIchiItems }));
    onChange?.("icf_data", { ...icfData, [FORM_KEY]: allFlatIcf });
    onChange?.("ichi_data", { ...ichiData, [FORM_KEY]: allIchiItems });
  }, [values.assessment_form_icf]);

  // ── Sync with external values changes ────────────────────────────────────
  useEffect(() => {
    if (values.selected_icds) setSelectedICDs(values.selected_icds);
    if (values.selected_icfs) setSelectedICFs(values.selected_icfs);
    if (values.icf_data) setIcfData(values.icf_data);
    if (values.ichi_data) setIchiData(values.ichi_data);
    if (values.selected_additional_ichi) setSelectedAdditionalIchi(values.selected_additional_ichi);
  }, [values]);

  const getIcfKey = (item) => `${item.source_icd}::${item.code}`;

  const handleIcdChange = (codes) => {
    setSelectedICDs(codes);
    onChange?.("selected_icds", codes);
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

  const allICFItems = useMemo(() => {
    return Object.entries(icfData).flatMap(([icdCode, items]) =>
      (items || []).map((item) => ({ ...item, source_icd: icdCode }))
    );
  }, [icfData]);

  const allICHIItems = useMemo(() => {
    return Object.entries(ichiData).flatMap(([icdCode, items]) =>
      (items || []).map((item) => ({ ...item, source_icd: icdCode }))
    );
  }, [ichiData]);

  // Group ICHI items by ICF code for better display
  const ichiByIcf = useMemo(() => {
    const groups = {};
    allICHIItems.forEach((item) => {
      const icfCode = item.icf_code || "Other";
      if (!groups[icfCode]) groups[icfCode] = [];
      groups[icfCode].push(item);
    });
    return groups;
  }, [allICHIItems]);

  // assessment_form_icf is now an object: { formName: [icfItems, ...] }
  const formIcfMap = values.assessment_form_icf;
  const hasFormIcf = formIcfMap && typeof formIcfMap === "object" && Object.keys(formIcfMap).length > 0;

  return (
    <div style={S.container}>
      {/* Debug info */}
      {hasFormIcf && (
        <div style={{ fontSize: 10, color: "#9ca3af", padding: "0 0 8px 0", textAlign: "right" }}>
          Forms: {Object.keys(formIcfMap).join(", ")} |
          ICF: {allICFItems.length} |
          ICHI: {allICHIItems.length}
        </div>
      )}

      {/* ICD Selection Section — searchable multi-select (same as Doctors' primaryICD) */}
      {showICF && (
        <div style={S.section}>
          <div
            style={S.header}
            onClick={() => toggleSection('icd')}
          >
            <span style={S.headerText}>
              🏥 ICD Selection ({selectedICDs ? 1 : 0} selected)
            </span>
            <span style={S.chevron}>
              {expandedSections.icd ? '▼' : '▶'}
            </span>
          </div>
          
          {expandedSections.icd && (
            <div style={S.content}>
              <IcdDiagnosisSelect
                value={selectedICDs}
                onChange={handleIcdChange}
                placeholder="Search and select primary diagnoses..."
              />
            </div>
          )}
        </div>
      )}

      {/* ICF Selection Section — from sub-assessment form icf array */}
      {showICF && (
        <div style={S.section}>
          <div 
            style={S.header} 
            onClick={() => toggleSection('icf')}
          >
            <span style={S.headerText}>
              🔍 ICF Codes — Assessment Form ({allICFItems.length} available)
            </span>
            <span style={S.chevron}>
              {expandedSections.icf ? '▼' : '▶'}
            </span>
          </div>
          
          {expandedSections.icf && (
            <div style={S.content}>
              {!hasFormIcf ? (
                <div style={S.emptyHint}>
                  No ICF items linked yet. Select a questionnaire from the Subjective tab first.
                </div>
              ) : allICFItems.length === 0 ? (
                <div style={S.emptyHint}>No ICF items linked to this assessment form.</div>
              ) : (
                <div style={S.icdGrid}>
                  {allICFItems.map((item) => {
                    const key = getIcfKey(item);
                    return (
                      <div
                        key={key}
                        style={S.icfViewCard}
                      >
                        <div>
                          <div style={S.icdCode}>{item.code}</div>
                          <div style={S.icdName}>{item.name}</div>
                          {item.notes && <div style={S.itemNotes}>{item.notes}</div>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ICHI Items Section — grouped by ICF */}
      {showICHI && (
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
              {!hasFormIcf ? (
                <div style={S.emptyHint}>
                  No ICHI interventions available. Save a questionnaire from the Subjective tab first.
                </div>
              ) : Object.keys(ichiByIcf).length === 0 ? (
                <div style={S.emptyHint}>No ICHI items linked to the selected assessment form.</div>
              ) : (
                Object.entries(ichiByIcf).map(([icfCode, items]) => (
                  <div key={icfCode} style={S.ichiGroup}>
                    <div style={S.ichiGroupLabel}>{icfCode}</div>
                    {items.map((item, idx) => (
                      <div key={`${item.source_icd}-${item.id || item.code}-${idx}`} style={S.itemCard}>
                        <div style={S.itemCode}>{item.code}</div>
                        <div style={S.itemName}>{item.name}</div>
                      </div>
                    ))}
                  </div>
                ))
              )}
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
      {mode === "plan" && allICHIItems.length === 0 && selectedAdditionalIchi.length === 0 && !hasFormIcf && (
        <div style={S.emptyState}>
          <div style={S.emptyIcon}>📋</div>
          <div style={S.emptyTitle}>No Interventions Available</div>
          <div style={S.emptyDesc}>
            ICHI interventions from the assessment form will appear here once you select a questionnaire in the Subjective tab. You can also add additional ICHI from the catalogue below.
          </div>
        </div>
      )}
    </div>
  );
}

const S = {
  container: { marginBottom: 20 },
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
  headerText: { fontSize: 14, fontWeight: 600, color: "#1f2937" },
  chevron: { color: "#6b7280", fontSize: 12, transition: "transform 0.2s" },
  content: { padding: 16, background: "#fff" },
  loading: { padding: 20, textAlign: "center", color: "#6b7280" },
  error: { padding: 12, background: "#fee2e2", color: "#991b1b", borderRadius: 6, fontSize: 12 },
  icdGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 12 },
  icdCard: {
    display: "flex", alignItems: "flex-start", gap: 12, padding: 12,
    border: "1px solid #d1d5db", borderRadius: 6, cursor: "pointer", transition: "all 0.2s",
  },
  icfViewCard: {
    display: "flex", alignItems: "flex-start", gap: 12, padding: 12,
    border: "1px solid #e5e7eb", borderRadius: 6, background: "#f9fafb",
  },
  checkbox: { marginTop: 2, accentColor: "#2563eb" },
  icdCode: { fontSize: 13, fontWeight: 700, color: "#1f2937", marginBottom: 4 },
  icdName: { fontSize: 12, color: "#374151", lineHeight: 1.4 },
  itemCard: {
    marginBottom: 8, padding: "10px 12px", border: "1px solid #e5e7eb",
    borderRadius: 6, background: "#fafbfc",
  },
  itemCode: { fontSize: 12, fontWeight: 700, color: "#1f2937", marginBottom: 4 },
  itemName: { fontSize: 12, color: "#374151", marginBottom: 4 },
  itemNotes: { fontSize: 11, color: "#6b7280", fontStyle: "italic" },
  itemSource: { fontSize: 11, color: "#6b7280", marginTop: 4 },
  ichiGroup: { marginBottom: 16 },
  ichiGroupLabel: {
    fontSize: 12, fontWeight: 700, color: "#4b5563",
    padding: "4px 0 8px", borderBottom: "1px solid #e5e7eb",
    marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em",
  },
  emptyHint: { fontSize: 13, color: "#6b7280", padding: "8px 0" },
  emptyState: { textAlign: "center", padding: "40px 20px", color: "#6b7280" },
  emptyIcon: { fontSize: 48, marginBottom: 16 },
  emptyTitle: { fontSize: 16, fontWeight: 600, color: "#374151", marginBottom: 8 },
  emptyDesc: { fontSize: 14, lineHeight: 1.5 },
};

export default OptometryICDSection;