import React, { useEffect, useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import PGSGAMetric from "../components/PGSGAMetric";
import GrowthChartAssessment from "../components/GrowthChart";
import SGAForm from "../components/SGAForm";
import { NRS_REGISTRY_ENTRY } from "../../../schema/dietetics/NRS";
import { MST_REGISTRY_ENTRY } from "./MST";
import { BIA_REGISTRY_ENTRY } from "./BIA";
import { NEWSGA_REGISTRY_ENTRY } from "./NewSGAForm";

const AssessmentComponents = {
  "PG-SGA-Metric-version": PGSGAMetric,
  "Growth Chart": GrowthChartAssessment,
  SGA: SGAForm,
};

const SchemaAssessments = {
  NRS: NRS_REGISTRY_ENTRY,
  MST: MST_REGISTRY_ENTRY,
  BIA: BIA_REGISTRY_ENTRY,
  NewSGA: NEWSGA_REGISTRY_ENTRY,
};

const isSchemaAssessment = (entry) =>
  entry &&
  typeof entry === "object" &&
  typeof entry !== "function" &&
  !entry.$$typeof &&
  (Array.isArray(entry.sections) || Array.isArray(entry.fields));

export default function AssessmentRenderer({
  selected,
  onSave,
  onBack,
  initialFormData,
}) {
  const schemaEntry = selected ? SchemaAssessments[selected] : null;
  const useSchema = isSchemaAssessment(schemaEntry);
  const [values, setValues] = useState(initialFormData || {});

  useEffect(() => {
    setValues(initialFormData || {});
  }, [selected, initialFormData]);

  if (!selected) return <p>Select an assessment</p>;

  if (useSchema) {
    const handleChange = (name, value) => {
      setValues((prev) => {
        const next = { ...prev, [name]: value };
        onSave?.(selected, next);
        return next;
      });
    };

    return (
      <CommonFormBuilder
        schema={schemaEntry}
        values={values}
        onChange={handleChange}
        layout="nested"
      />
    );
  }

  const Component = AssessmentComponents[selected];
  if (!Component) return <p>No component for {selected}</p>;

  const handleOnSubmit = (payload) => {
    if (onSave) onSave(selected, payload);
  };

  return (
    <Component
      onSave={(name, data) => onSave && onSave(name, data)}
      onSubmit={handleOnSubmit}
      assessmentName={selected}
      initialFormData={initialFormData}
      onBack={onBack}
    />
  );
}
