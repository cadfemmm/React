import EmptyState from "./EmptyState";

const MEDICAL_TABLE_TH = {
  textAlign: "left",
  width: "28%",
  border: "1px solid #cbd5e1",
  padding: "8px 10px",
  background: "#f8fafc",
  color: "#334155",
  fontWeight: 600,
  fontSize: 13,
  verticalAlign: "top",
};

const MEDICAL_TABLE_TD = {
  border: "1px solid #cbd5e1",
  padding: "8px 10px",
  fontSize: 13,
  color: "#475569",
  lineHeight: 1.6,
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
  verticalAlign: "top",
};

function SectionHeader({ entry, index, soapSectionStyle }) {
  const isSoap = entry.variant === "soap";
  const useMedicalSoap = isSoap && soapSectionStyle === "medical";

  return (
    <div
      style={{
        marginTop: index === 0 ? 0 : 20,
        marginBottom: 10,
        fontSize: 14,
        fontWeight: 700,
        ...(isSoap && !useMedicalSoap
          ? {
              background: "#2563eb",
              color: "#fff",
              padding: "8px 14px",
              borderRadius: 6,
            }
          : useMedicalSoap
            ? {
                background: "#f1f5f9",
                color: "#334155",
                padding: "10px 16px",
                borderTop: "1px solid #e2e8f0",
                borderBottom: "1px solid #e2e8f0",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontSize: 12,
              }
            : {
                color: "#0F172A",
                borderBottom: "2px solid #E2E8F0",
                paddingBottom: 6,
              }),
      }}
    >
      {entry.label}
    </div>
  );
}

function MedicalReportTable({ rows }) {
  if (!rows.length) return null;

  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: 16,
      }}
    >
      <tbody>
        {rows.map((row, idx) => (
          <tr key={`${row.label}-${idx}`}>
            <th style={MEDICAL_TABLE_TH}>{row.label}</th>
            <td style={MEDICAL_TABLE_TD}>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function groupEntriesForMedicalTables(entries) {
  const sections = [];
  let currentTable = null;

  const flushTable = () => {
    if (currentTable?.rows?.length) {
      sections.push(currentTable);
    }
    currentTable = null;
  };

  entries.forEach((entry) => {
    if (entry.kind === "section") {
      flushTable();

      if (entry.variant === "soap") {
        sections.push({ kind: "soap-header", label: entry.label });
        currentTable = { kind: "table", rows: [] };
        return;
      }

      currentTable = { kind: "table", subheading: entry.label, rows: [] };
      return;
    }

    if (entry.kind === "row" && entry.value) {
      if (!currentTable) {
        currentTable = { kind: "table", rows: [] };
      }
      currentTable.rows.push(entry);
    }
  });

  flushTable();
  return sections;
}

function renderMedicalTableLayout(entries, soapSectionStyle) {
  const sections = groupEntriesForMedicalTables(entries);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {sections.map((section, index) => {
        if (section.kind === "soap-header") {
          return (
            <SectionHeader
              key={`soap-${index}`}
              entry={{ label: section.label, variant: "soap" }}
              index={index}
              soapSectionStyle={soapSectionStyle}
            />
          );
        }

        if (section.kind === "table") {
          return (
            <div key={`table-${index}`}>
              {section.subheading && (
                <div
                  style={{
                    marginBottom: 8,
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#475569",
                  }}
                >
                  {section.subheading}
                </div>
              )}
              <MedicalReportTable rows={section.rows} />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

/**
 * RAP-style assessment report (label : value rows).
 * Matches the session report popup in src/features/Rap/assessment.jsx.
 */
export default function AssessmentReportView({
  entries = [],
  soapSectionStyle = "blue",
  rowLayout = "grid",
}) {
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

  if (rowLayout === "medical-table") {
    return renderMedicalTableLayout(entries, soapSectionStyle);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {entries.map((entry, index) => {
        if (entry.kind === "section") {
          return (
            <SectionHeader
              key={`section-${index}`}
              entry={entry}
              index={index}
              soapSectionStyle={soapSectionStyle}
            />
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
