/**
 * Custom field registry — keyed by schema field `name`.
 *
 * Backend:
 *   { "type": "custom", "name": "growth_chart", "component": "growth-chart" }
 *
 * FormBuilder: if type === "custom", look up field.name here and render that component.
 */
import dieteticsCustomFields from "../Dietetics/components/customFields";

export const CUSTOM_FIELD_REGISTRY = {
  ...dieteticsCustomFields,
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
