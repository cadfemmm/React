/**
 * Custom field registry — keyed by schema field `name`.
 *
 * Backend:
 *   { "type": "custom", "name": "growth_chart", "component": "growth-chart" }
 *
 * FormBuilder: if type === "custom", look up field.name here and render that component.
 *
 * Cross-tab custom panels (e.g. nursing diagnosis / plan) set `"globalValues": true`
 * on the field so FormBuilder passes the TOP-LEVEL form values instead of a value
 * scoped under `field.name` — required for panels that share state (nd_* keys).
 */
import dieteticsCustomFields from "../Dietetics/components/customFields";
import {
  NursingDiagnosisPanel,
  NursingPlanPanel,
} from "../Nursing/components/NursingDiagnosisPanels";

export const CUSTOM_FIELD_REGISTRY = {
  ...dieteticsCustomFields,
  // Nursing Assessment / Plan panels (cross-tab shared nd_* state)
  nursing_diagnosis_panel: NursingDiagnosisPanel,
  nursing_plan_panel: NursingPlanPanel,
  // alias variants
  "nursing-diagnosis-panel": NursingDiagnosisPanel,
  "nursing-plan-panel": NursingPlanPanel,
  NursingDiagnosisPanel,
  NursingPlanPanel,
};

export function resolveCustomFieldComponent(field) {
  if (!field || String(field.type) !== "custom") return null;

  const key = String(field.name || "").trim();
  if (!key) return null;

  if (CUSTOM_FIELD_REGISTRY[key]) return CUSTOM_FIELD_REGISTRY[key];

  // Normalize common variants: "PG-SGA" → "pg_sga", "SGA" → "sga"
  const normalized = key.toLowerCase().replace(/[\s-]+/g, "_");
  return CUSTOM_FIELD_REGISTRY[normalized] || null;
}

export function registerCustomField(name, Component) {
  if (!name || !Component) return;
  CUSTOM_FIELD_REGISTRY[name] = Component;
}
