import { memo, useEffect, useMemo, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import AssessmentReportView from "./AssessmentReportView";
import {
  buildAssessmentReportEntries,
  formatAssessmentReportText,
} from "../utils/assessmentPreviewUtils";

if (typeof document !== "undefined" && !document.getElementById("__asp_kf__")) {
  const s = document.createElement("style");
  s.id = "__asp_kf__";
  s.textContent = `
    @keyframes asp_bg   { from{opacity:0} to{opacity:1} }
    @keyframes asp_card { from{opacity:0;transform:translateY(12px) scale(.97)} to{opacity:1;transform:translateY(0) scale(1)} }
  `;
  document.head.appendChild(s);
}

const AssessmentSectionPreviewModal = memo(function AssessmentSectionPreviewModal({
  title = "Section Preview",
  schema,
  values = {},
  assessmentRegistry = {},
  entries: providedEntries,
  valuePrefix,
  excludeSubAssessments = false,
  onClose,
}) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const reportEntries = useMemo(() => {
    if (providedEntries) return providedEntries;
    return buildAssessmentReportEntries(schema, values, assessmentRegistry, {
      valuePrefix,
      excludeSubAssessments,
    });
  }, [
    providedEntries,
    schema,
    values,
    assessmentRegistry,
    valuePrefix,
    excludeSubAssessments,
  ]);

  const hasContent = useMemo(
    () => reportEntries.some((e) => e.kind === "row" && e.value),
    [reportEntries],
  );

  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    if (!hasContent) return;
    const text = formatAssessmentReportText(reportEntries, { title });
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  }, [hasContent, reportEntries, title]);

  if (!schema && !providedEntries) return null;

  const modal = (
    <div style={S.overlay} onClick={onClose}>
      <div style={S.card} onClick={(e) => e.stopPropagation()}>
        <div style={S.header}>
          <h3 style={S.title}>{title}</h3>
          <button type="button" style={S.closeBtn} onClick={onClose} aria-label="Close preview">
            ×
          </button>
        </div>

        <div style={S.body}>
          <AssessmentReportView entries={reportEntries} />
        </div>

        <div style={S.footer}>
          <button
            type="button"
            style={{
              ...S.copyBtn,
              ...(copied ? S.copyBtnSuccess : {}),
              ...(!hasContent ? S.copyBtnDisabled : {}),
            }}
            onClick={handleCopy}
            disabled={!hasContent}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <button type="button" style={S.closeFooterBtn} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.body);
});

export default AssessmentSectionPreviewModal;

const S = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(15,23,42,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10000,
    padding: 24,
    animation: "asp_bg .18s ease",
  },
  card: {
    background: "#fff",
    borderRadius: 12,
    width: "min(800px, 100%)",
    maxHeight: "min(80vh, 800px)",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 20px 60px rgba(15,23,42,0.18)",
    animation: "asp_card .2s ease",
    overflow: "hidden",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 20px",
    borderBottom: "1px solid #e2e8f0",
  },
  title: {
    margin: 0,
    fontSize: 18,
    fontWeight: 600,
    color: "#0f172a",
  },
  closeBtn: {
    border: "none",
    background: "transparent",
    fontSize: 24,
    lineHeight: 1,
    color: "#64748b",
    cursor: "pointer",
    padding: "0 4px",
  },
  body: {
    flex: 1,
    overflowY: "auto",
    padding: "12px 20px 20px",
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 10,
    padding: "12px 20px",
    borderTop: "1px solid #e2e8f0",
    background: "#f8fafc",
  },
  copyBtn: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "8px 18px",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
  },
  copyBtnSuccess: {
    background: "#059669",
  },
  copyBtnDisabled: {
    background: "#94a3b8",
    cursor: "not-allowed",
  },
  closeFooterBtn: {
    background: "#fff",
    color: "#334155",
    border: "1px solid #cbd5e1",
    borderRadius: 6,
    padding: "8px 18px",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
  },
};
