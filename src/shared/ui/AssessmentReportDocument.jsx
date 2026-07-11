import pdfLogo from "../../assets/pdf logo.webp";
import AssessmentReportView from "./AssessmentReportView";
import ReportPatientInfo from "./ReportPatientInfo";
import ReportPatientMedicalTable from "./ReportPatientMedicalTable";

export default function AssessmentReportDocument({
  title = "Assessment Report",
  patient,
  patientDisplay = "card",
  soapSectionStyle = "blue",
  rowLayout = "grid",
  entries = [],
  loading = false,
  reportDate,
}) {
  const dateLabel =
    reportDate ||
    new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <div style={S.page} className="rap-pdf-page">
      <div style={S.logoWrap}>
        <img src={pdfLogo} alt="Report logo" style={S.logo} />
        <div style={S.docTitle}>{title}</div>
      </div>

      <div style={S.dateRow}>{dateLabel}</div>

      {patient &&
        (patientDisplay === "medical-table" ? (
          <ReportPatientMedicalTable patient={patient} />
        ) : (
          <ReportPatientInfo patient={patient} />
        ))}

      {loading ? (
        <div style={S.loading}>Loading report content...</div>
      ) : (
        <AssessmentReportView
          entries={entries}
          soapSectionStyle={soapSectionStyle}
          rowLayout={rowLayout}
        />
      )}
    </div>
  );
}

const S = {
  page: {
    width: "100%",
    maxWidth: 800,
    margin: "0 auto",
    background: "#fff",
    padding: 24,
  },
  logoWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 12,
    borderBottom: "1px solid #e2e8f0",
    paddingBottom: 14,
  },
  logo: {
    height: 90,
    objectFit: "contain",
    marginBottom: 8,
  },
  docTitle: {
    fontSize: 17,
    fontWeight: 800,
    color: "#0f172a",
    textAlign: "center",
  },
  dateRow: {
    textAlign: "right",
    fontSize: 13,
    fontWeight: 600,
    color: "#475569",
    marginBottom: 16,
  },
  loading: {
    fontSize: 13,
    color: "#475569",
    padding: "12px 0",
  },
};
