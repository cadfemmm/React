import React from "react";
import AssessmentRenderer from "./AssessmentRenderer";
import { NRS_REGISTRY_ENTRY } from "../../../schema/dietetics/NRS";
import { MST_REGISTRY_ENTRY } from "./MST";
import { BIA_REGISTRY_ENTRY } from "./BIA";
import { NEWSGA_REGISTRY_ENTRY } from "./NewSGAForm";

/**
 * Creates a wrapper component for Diet assessments that adapts them to the
 * assessment-launcher interface (values, onChange) used by Physiotherapy.
 * Stores data in values.diet_assessment_data[key].
 */
function createDietAssessmentWrapper(assessmentKey) {
  return function DietAssessmentWrapper({ values = {}, onChange }) {
    const assessmentData = values.diet_assessment_data || {};
    const initialFormData = assessmentData[assessmentKey] || {};

    const handleSave = (name, data) => {
      const next = {
        ...assessmentData,
        [assessmentKey]: data
      };
      onChange?.("diet_assessment_data", next);
    };

    return (
      <AssessmentRenderer
        selected={assessmentKey}
        initialFormData={initialFormData}
        onSave={handleSave}
        onBack={undefined}
      />
    );
  };
}

export const DIET_ASSESSMENT_REGISTRY = {
  NRS: NRS_REGISTRY_ENTRY,
  MST: MST_REGISTRY_ENTRY,
  BIA: BIA_REGISTRY_ENTRY,
  NewSGA: NEWSGA_REGISTRY_ENTRY,
  "Growth Chart": createDietAssessmentWrapper("Growth Chart"),
  "PG-SGA-Metric-version": createDietAssessmentWrapper("PG-SGA-Metric-version"),
  SGA: createDietAssessmentWrapper("SGA"),
};
