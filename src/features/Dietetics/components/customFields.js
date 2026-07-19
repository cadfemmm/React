/**
 * Dietetics custom fields — key = schema field `name` (exact).
 * Components stay as existing files; only mapped here for FormBuilder lookup.
 *
 * Backend examples:
 *   { "type": "custom", "name": "growth_chart" }
 *   { "type": "custom", "name": "sga" }
 *   { "type": "custom", "name": "pg_sga" }
 *   { "type": "custom", "name": "nutritional_diagnosis" }
 */
import React from "react";
import GrowthChartAssessment from "./GrowthChart";
import SGAForm from "./SGAForm";
import PGSGAMetric from "./PGSGAMetric";
import NutritionalDiagnosis from "./NutritionalDiagnosis";

function SgaCustomField({ values = {}, onChange }) {
  return (
    <SGAForm
      initialFormData={values}
      assessmentName="SGA"
      onSave={(_name, data) => onChange?.(data)}
    />
  );
}

function PgSgaCustomField({ onChange, patient }) {
  return (
    <PGSGAMetric
      patientInfo={patient || {}}
      onSave={(data) => onChange?.(data)}
    />
  );
}

const SGA = SgaCustomField;
const PG_SGA = PgSgaCustomField;
const NUTRITIONAL_DIAGNOSIS = NutritionalDiagnosis;

export default {
  growth_chart: GrowthChartAssessment,
  // lowercase / snake (preferred schema names)
  sga: SGA,
  pg_sga: PG_SGA,
  nutritional_diagnosis: NUTRITIONAL_DIAGNOSIS,
  nutrition_diagnosis: NUTRITIONAL_DIAGNOSIS,
  // aliases if backend uses these field names
  SGA,
  "PG-SGA": PG_SGA,
  pg_sga_metric: PG_SGA,
  "pg-sga": PG_SGA,
  "Nutritional Diagnosis": NUTRITIONAL_DIAGNOSIS,
  "Nutrition Diagnosis": NUTRITIONAL_DIAGNOSIS,
  NutritionalDiagnosis: NUTRITIONAL_DIAGNOSIS,
  NutritionDiagnosis: NUTRITIONAL_DIAGNOSIS,
};
