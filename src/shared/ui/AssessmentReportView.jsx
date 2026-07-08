import EmptyState from "./EmptyState";

/**
 * RAP-style assessment report (label : value rows).
 * Matches the session report popup in src/features/Rap/assessment.jsx.
 */
export default function AssessmentReportView({ entries = [] }) {
  const rows = entries.filter((e) => e.kind === "row" && e.value);

  if (rows.length === 0) {
    return (
      <EmptyState
        icon="📋"
        title="No assessment data filled."
        message="Complete fields in this section to see them in the preview report."
      />
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {entries.map((entry, index) => {
        if (entry.kind === "section") {
          return (
            <div
              key={`section-${index}`}
              style={{
                marginTop: index === 0 ? 0 : 20,
                marginBottom: 10,
                fontSize: 14,
                fontWeight: 700,
                color: "#0F172A",
                borderBottom: "2px solid #E2E8F0",
                paddingBottom: 6,
              }}
            >
              {entry.label}
            </div>
          );
        }

        if (!entry.value) return null;

        return (
          <div
            key={`row-${index}`}
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(140px, 1fr) minmax(160px, 1.4fr)",
              gap: 16,
              borderBottom: "1px solid #F1F5F9",
              padding: "10px 0",
              alignItems: "start",
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#374151",
                lineHeight: 1.5,
              }}
            >
              {entry.label}
            </div>
            <div
              style={{
                fontSize: 13,
                color: "#4B5563",
                lineHeight: 1.6,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {entry.value}
            </div>
          </div>
        );
      })}
    </div>
  );
}
