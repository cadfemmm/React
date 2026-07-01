import { useState } from "react";
import AssessmentSectionPreviewModal from "./AssessmentSectionPreviewModal";

const defaultBtnStyle = {
  background: "#fff",
  color: "#334155",
  border: "1px solid #cbd5e1",
  borderRadius: 6,
  padding: "9px 20px",
  fontSize: 13,
  fontWeight: 600,
  cursor: "pointer",
};

export default function SectionPreviewButton({
  title,
  schema,
  values = {},
  assessmentRegistry = {},
  excludeSubAssessments = true,
  style,
  className,
}) {
  const [open, setOpen] = useState(false);

  if (!schema) return null;

  return (
    <>
      <button
        type="button"
        className={className}
        style={style || defaultBtnStyle}
        onClick={() => setOpen(true)}
      >
        Preview
      </button>

      {open && (
        <AssessmentSectionPreviewModal
          title={title}
          schema={schema}
          values={values}
          assessmentRegistry={assessmentRegistry}
          excludeSubAssessments={excludeSubAssessments}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
