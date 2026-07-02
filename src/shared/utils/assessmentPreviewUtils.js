/**
 * Build structured report rows from assessment schema + filled values.
 * Report layout matches RAP session assessment view (label : value rows).
 */

import { SCHEMA as DASS_SCHEMA } from "../../schema/psychology/dassform";
import { SCHEMA as PSS_SCHEMA } from "../../schema/psychology/pssform";
import { SCHEMA as PHQ_SCHEMA } from "../../schema/psychology/phqform";
import { SCHEMA as GAD_SCHEMA } from "../../schema/psychology/gadform";
import { SCHEMA as HAMD_SCHEMA } from "../../schema/psychology/hamdform";
import { SCHEMA as HAMA_SCHEMA } from "../../schema/psychology/hamaform";

export const PSYCHOLOGY_LEGACY_SUB_SCHEMAS = {
  dass21: DASS_SCHEMA,
  pss: PSS_SCHEMA,
  phq9: PHQ_SCHEMA,
  gad7: GAD_SCHEMA,
  hamd: HAMD_SCHEMA,
  hama: HAMA_SCHEMA,
};

function evaluateShowIf(showIf, values) {
  if (!showIf) return true;
  if ("and" in showIf) {
    const rest = { ...showIf };
    delete rest.and;
    return evaluateShowIf(rest, values) && evaluateShowIf(showIf.and, values);
  }
  if ("or" in showIf) {
    const conditions = Array.isArray(showIf.or) ? showIf.or : [showIf.or];
    return conditions.some((cond) => {
      const depVal = values[cond.field];
      if ("equals" in cond && depVal !== cond.equals) return false;
      if ("oneOf" in cond) {
        const allowed = Array.isArray(cond.oneOf) ? cond.oneOf : [cond.oneOf];
        if (!allowed.includes(depVal)) return false;
      }
      if ("includes" in cond) {
        if (!Array.isArray(depVal) || !depVal.includes(cond.includes)) return false;
      }
      if ("exists" in cond && !depVal) return false;
      return true;
    });
  }
  const depVal = values[showIf.field];
  if ("equals" in showIf) {
    if (Array.isArray(depVal)) return depVal.includes(showIf.equals);
    return depVal === showIf.equals;
  }
  if ("oneOf" in showIf) {
    const allowed = Array.isArray(showIf.oneOf) ? showIf.oneOf : [showIf.oneOf];
    if (Array.isArray(depVal)) return depVal.some((v) => allowed.includes(v));
    return allowed.includes(depVal);
  }
  if ("includes" in showIf) {
    return Array.isArray(depVal) && depVal.includes(showIf.includes);
  }
  if ("exists" in showIf) return !!depVal;
  if ("notEmpty" in showIf) {
    return Array.isArray(depVal) ? depVal.length > 0 : !!depVal;
  }
  return true;
}

function resolveLabel(text) {
  if (!text) return "";
  if (typeof text === "string" || typeof text === "number") return String(text);
  if (typeof text === "object" && text !== null && !Array.isArray(text)) {
    return text.en || text.ms || Object.values(text)[0] || "";
  }
  return String(text);
}

function resolveOptionLabel(options, value) {
  if (value === undefined || value === null || value === "") return "";
  if (!options?.length) return String(value);

  const match = options.find(
    (opt) => String(opt?.value ?? opt) === String(value),
  );
  if (match) return resolveLabel(match.label ?? match.name ?? value);
  return String(value);
}

function hasContent(value) {
  if (value === undefined || value === null || value === "") return false;
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "object") {
    return Object.values(value).some((v) => hasContent(v));
  }
  return true;
}

function resolveFieldValue(values, fieldName, valuePrefix) {
  if (!fieldName) return undefined;

  const direct = values[fieldName];
  if (hasContent(direct)) return direct;

  if (valuePrefix) {
    const prefixedKey = `${valuePrefix}_${fieldName}`;
    const prefixed = values[prefixedKey];
    if (hasContent(prefixed)) return prefixed;
  }

  return undefined;
}

function shouldUseValuePrefix(activeId) {
  if (activeId === undefined || activeId === null) return undefined;
  const id = String(activeId);
  if (!id || id.includes("-")) return undefined;
  if (/^\d+$/.test(id)) return undefined;
  return id;
}

function formatReportValue(value, field) {
  if (!hasContent(value)) return null;

  const type = field?.type;

  if (type === "checkbox") {
    if (Array.isArray(value)) {
      return value
        .map((v) => resolveOptionLabel(field?.options, v))
        .filter(Boolean)
        .join(", ");
    }
    return value ? "Yes" : "No";
  }

  if (type === "checkbox-group" || type === "radio" || type === "select" || type === "single-select") {
    if (Array.isArray(value)) {
      return value
        .map((v) => resolveOptionLabel(field?.options, v))
        .filter(Boolean)
        .join(", ");
    }
    return resolveOptionLabel(field?.options, value);
  }

  if (type === "radio-matrix") {
    return resolveOptionLabel(field?.options, value) || String(value);
  }

  if (type === "grid-row" && field?.cols?.length) {
    const parts = field.cols
      .map((col) => {
        const key = col.name || col.key;
        const colValue = value?.[key];
        if (!hasContent(colValue)) return null;
        const colLabel = resolveLabel(col.label || col.title || key);
        const formatted = formatReportValue(colValue, col);
        return formatted ? `${colLabel}: ${formatted}` : null;
      })
      .filter(Boolean);
    return parts.length ? parts.join(" | ") : null;
  }

  if (type === "row" && field?.fields?.length) {
    const parts = field.fields
      .map((child) => {
        const childValue = value?.[child.name];
        if (!hasContent(childValue)) return null;
        const childLabel = resolveLabel(child.label || child.name);
        const formatted = formatReportValue(childValue, child);
        return formatted ? `${childLabel}: ${formatted}` : null;
      })
      .filter(Boolean);
    return parts.length ? parts.join(" | ") : null;
  }

  if (Array.isArray(value)) {
    return value
      .map((v) =>
        typeof v === "object" && v !== null ? JSON.stringify(v) : String(v),
      )
      .join(", ");
  }

  if (typeof value === "object" && value !== null) {
    const parts = Object.entries(value)
      .filter(([, v]) => hasContent(v))
      .map(([k, v]) => {
        if (typeof v === "object" && v !== null) {
          return `${k}: ${JSON.stringify(v)}`;
        }
        return `${k}: ${v}`;
      });
    return parts.length ? parts.join(", ") : null;
  }

  return String(value);
}

const SKIP_FIELD_TYPES = new Set([
  "button",
  "grid-header",
  "optional-section-toggle",
  "custom",
  "draw-canvas",
  "anatomy-overlay",
]);

export function normalizeReportSchema(schema) {
  if (!schema) return null;

  if (schema.sections?.length) {
    return schema;
  }

  if (Array.isArray(schema.fields) && schema.fields.length) {
    return {
      ...schema,
      sections: [{ title: null, fields: schema.fields }],
    };
  }

  return schema;
}

function normalizeSubAssessmentSchema(assessment) {
  if (!assessment) return null;

  const source =
    assessment.sections || assessment.fields
      ? assessment
      : assessment.body && typeof assessment.body === "object"
        ? assessment.body
        : assessment;

  const sections =
    source.sections ||
    (Array.isArray(source.fields) && source.fields.length
      ? [{ title: null, fields: source.fields }]
      : null);

  if (!sections) return null;

  return {
    ...assessment,
    ...source,
    title: source.title || assessment.title || assessment.name,
    sections,
  };
}

function findRegistryAssessment(registry, activeId) {
  if (!activeId && activeId !== 0) return null;

  const list = Array.isArray(registry)
    ? registry
    : Object.values(registry || {});

  return list.find(
    (item) =>
      item &&
      [item.id, item.value, item.key].some(
        (id) => id !== undefined && id !== null && String(id) === String(activeId),
      ),
  );
}

function appendFieldEntries(entries, field, values, assessmentRegistry, options = {}) {
  const { valuePrefix, excludeSubAssessments } = options;
  if (!field || SKIP_FIELD_TYPES.has(field.type)) return;

  if (excludeSubAssessments && field.type === "assessment-launcher") return;

  if (field.showIf && !evaluateShowIf(field.showIf, values)) return;

  if (field.type === "subheading") {
    entries.push({
      kind: "section",
      label: resolveLabel(field.label || field.heading),
    });
    return;
  }

  if (field.type === "assessment-launcher") {
    const registry = field.assessmentRegistry || assessmentRegistry;
    const registryIsArray = Array.isArray(registry);
    const activeKey =
      field.activeKey ||
      (registryIsArray ? "active_assessment_id" : `${field.name}_active`);
    const activeId = values[activeKey];
    const selected = findRegistryAssessment(registry, activeId);

    if (selected) {
      const subSchema = normalizeSubAssessmentSchema(selected);
      if (subSchema?.sections) {
        entries.push({
          kind: "section",
          label: resolveLabel(
            selected.name || selected.label || selected.title || "Sub Assessment",
          ),
        });
        appendSections(entries, subSchema.sections, values, assessmentRegistry, {
          ...options,
          valuePrefix: shouldUseValuePrefix(activeId) || valuePrefix,
        });
      }
    }

    const remarksKey = activeId ? `${activeId}_remarks` : null;
    const remarks = remarksKey ? values[remarksKey] : null;
    if (remarks) {
      entries.push({
        kind: "row",
        label: "Remarks",
        value: String(remarks),
      });
    }
    return;
  }

  if (field.type === "score-box" || field.type === "computed") {
    let val = resolveFieldValue(values, field.name, valuePrefix);
    if (!hasContent(val) && typeof field.compute === "function") {
      try {
        val = field.compute(values);
      } catch {
        val = null;
      }
    }
    if (hasContent(val)) {
      entries.push({
        kind: "row",
        label: resolveLabel(field.label || field.name),
        value: String(val),
      });
    }
    return;
  }

  if (field.type === "row" && field.fields?.length) {
    const rowValue = resolveFieldValue(values, field.name, valuePrefix);
    let formatted = rowValue && typeof rowValue === "object"
      ? formatReportValue(rowValue, field)
      : null;

    if (!formatted) {
      const parts = field.fields
        .map((child) => {
          const childValue = resolveFieldValue(values, child.name, valuePrefix);
          if (!hasContent(childValue)) return null;
          const childLabel = resolveLabel(child.label || child.name);
          const childFormatted = formatReportValue(childValue, child);
          return childFormatted ? `${childLabel}: ${childFormatted}` : null;
        })
        .filter(Boolean);
      formatted = parts.length ? parts.join(" | ") : null;
    }

    if (formatted) {
      entries.push({
        kind: "row",
        label: resolveLabel(field.label || field.name),
        value: formatted,
      });
    }
    return;
  }

  if (field.type === "grid-row" && field.cols?.length) {
    const parts = field.cols
      .map((col, idx) => {
        const key =
          typeof col === "object" && col.name
            ? col.name
            : field.name
              ? `${field.name}_${idx}`
              : null;
        if (!key) return null;

        const colValue = resolveFieldValue(values, key, valuePrefix);
        if (!hasContent(colValue)) return null;

        const colField = typeof col === "object" ? col : { type: "input" };
        const colLabel = resolveLabel(
          typeof col === "object" ? col.label || col.title || key : key,
        );
        const formatted = formatReportValue(colValue, colField);
        return formatted ? `${colLabel}: ${formatted}` : null;
      })
      .filter(Boolean);

    if (parts.length) {
      entries.push({
        kind: "row",
        label: resolveLabel(field.label || field.name),
        value: parts.join(" | "),
      });
    }
    return;
  }

  if (!field.name) return;

  const fieldValue = resolveFieldValue(values, field.name, valuePrefix);
  const formatted = formatReportValue(fieldValue, field);
  if (!formatted) return;

  entries.push({
    kind: "row",
    label: resolveLabel(field.label || field.name),
    value: formatted,
  });
}

function filterSoapPreviewFields(fields = []) {
  return fields.filter((field, index) => {
    if (field.type === "assessment-launcher") return false;

    if (field.type === "subheading") {
      const nextMeaningful = fields
        .slice(index + 1)
        .find((f) => f.type !== "subheading");
      if (nextMeaningful?.type === "assessment-launcher") return false;
    }

    return true;
  });
}

function appendSections(entries, sections, values, assessmentRegistry, options = {}) {
  (sections || []).forEach((section) => {
    if (section.showIf && !evaluateShowIf(section.showIf, values)) return;

    if (section.title) {
      entries.push({ kind: "section", label: resolveLabel(section.title) });
    }

    const fields = options.excludeSubAssessments
      ? filterSoapPreviewFields(section.fields || [])
      : section.fields || [];

    fields.forEach((field) =>
      appendFieldEntries(entries, field, values, assessmentRegistry, options),
    );
  });
}

/**
 * @returns {Array<{ kind: 'section'|'row', label: string, value?: string }>}
 */
export function buildAssessmentReportEntries(
  schema,
  values = {},
  assessmentRegistry = {},
  options = {},
) {
  const normalized = normalizeReportSchema(schema);
  if (!normalized) return [];

  const entries = [];

  if (normalized.title) {
    entries.push({ kind: "section", label: resolveLabel(normalized.title) });
  }

  appendSections(entries, normalized.sections, values, assessmentRegistry, options);

  // Deduplicate consecutive identical section headers and drop empty section headers
  const deduped = entries.filter((entry, idx, arr) => {
    if (entry.kind !== "section") return true;
    const prev = arr[idx - 1];
    if (prev?.kind === "section" && prev.label === entry.label) return false;

    const next = arr[idx + 1];
    if (next?.kind === "section" || next === undefined) return false;

    return true;
  });

  return deduped;
}

/**
 * Extract field values that belong to a sub-assessment schema (by field name prefix).
 */
export function getSubAssessmentPreviewValues(values, sections, remarksKey) {
  const subPrefixes = [];

  (sections || []).forEach((section) => {
    (section.fields || []).forEach((field) => {
      const fieldName = field.name || field.key;
      if (!fieldName) return;

      const prefix = fieldName.split("_")[0];
      if (prefix) subPrefixes.push(`${prefix}_`);
    });
  });

  const uniquePrefixes = [...new Set(subPrefixes)];

  const filtered = Object.fromEntries(
    Object.entries(values || {}).filter(
      ([key]) =>
        uniquePrefixes.some((prefix) => key.startsWith(prefix)) &&
        !key.endsWith("_remarks"),
    ),
  );

  if (remarksKey && values?.[remarksKey]) {
    filtered[remarksKey] = values[remarksKey];
  }

  return filtered;
}

export function resolveSubFormPreviewSchema(selectedAssessment, normalizedSchema) {
  if (normalizedSchema?.sections?.length || normalizedSchema?.fields?.length) {
    return normalizeReportSchema(normalizedSchema);
  }

  const key = String(
    selectedAssessment?.id ??
      selectedAssessment?.value ??
      selectedAssessment?.key ??
      "",
  ).toLowerCase();

  return PSYCHOLOGY_LEGACY_SUB_SCHEMAS[key] || null;
}

/** Plain-text report for clipboard (label : value rows, section headings). */
export function formatAssessmentReportText(entries, { title } = {}) {
  const lines = [];

  if (title) {
    lines.push(title);
    lines.push("");
  }

  (entries || []).forEach((entry) => {
    if (entry.kind === "section" && entry.label) {
      if (lines.length > 0 && lines[lines.length - 1] !== "") lines.push("");
      lines.push(entry.label);
      return;
    }
    if (entry.kind === "row" && entry.value) {
      lines.push(`${entry.label} : ${entry.value}`);
    }
  });

  return lines.join("\n").trim();
}

export { shouldUseValuePrefix, normalizeSubAssessmentSchema };
