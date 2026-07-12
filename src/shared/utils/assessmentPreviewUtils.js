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
  if (!id) return undefined;
  // Sub-assessment values are namespaced by the active sub id (`${id}_${field}`)
  // so each launched sub-form keeps its own isolated values. The report reader
  // falls back to this prefix when a raw field name isn't present.
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

function normalizeRegistryEntries(registry) {
  if (Array.isArray(registry)) return registry.filter(Boolean);
  if (!registry || typeof registry !== "object") return [];

  return Object.entries(registry).map(([key, item]) => ({
    ...item,
    key: item?.key ?? key,
    registryKey: key,
    value: item?.value ?? key,
  }));
}

function labelsRoughlyMatch(a, b) {
  if (!a || !b) return false;
  const left = String(a).trim().toLowerCase();
  const right = String(b).trim().toLowerCase();
  return left === right || left.includes(right) || right.includes(left);
}

function findRegistryAssessment(registry, activeId, fieldOptions) {
  if (activeId === undefined || activeId === null || activeId === "") return null;

  const list = normalizeRegistryEntries(registry);

  const directMatch = list.find(
    (item) =>
      item &&
      [item.id, item.value, item.key, item.name, item.registryKey].some(
        (id) => id !== undefined && id !== null && String(id) === String(activeId),
      ),
  );
  if (directMatch) return directMatch;

  if (!fieldOptions?.length) return null;

  const option = fieldOptions.find(
    (opt) => String(opt?.value ?? opt?.id) === String(activeId),
  );
  if (!option) return null;

  const optionLabel = option.label ?? option.name;
  const optionMatch = list.find(
    (item) =>
      item &&
      [item.name, item.label, item.title, item.registryKey].some((label) =>
        labelsRoughlyMatch(label, optionLabel),
      ),
  );
  if (optionMatch) return optionMatch;

  return null;
}

function collectSchemaFieldNames(fields = [], names = []) {
  fields.forEach((field) => {
    if (!field || SKIP_FIELD_TYPES.has(field.type)) return;

    if (field.type === "scale-table" && field.name && Array.isArray(field.rows)) {
      // For scale-table, add individual row keys (e.g. "ssi_0", "ssi_1", …)
      // so subAssessmentHasFilledValues can detect filled scale-table data.
      field.rows.forEach((_, rIdx) => {
        names.push(`${field.name}_${rIdx}`);
      });
    } else if (field.name) {
      names.push(field.name);
    }

    if (field.fields?.length) {
      collectSchemaFieldNames(field.fields, names);
    }

    if (field.cols?.length) {
      field.cols.forEach((col) => {
        if (col?.name) names.push(col.name);
      });
    }
  });

  return names;
}

function subAssessmentHasFilledValues(values, sections = [], valuePrefix) {
  const fieldNames = collectSchemaFieldNames(
    sections.flatMap((section) => section.fields || []),
  );

  return fieldNames.some(
    (fieldName) =>
      hasContent(values?.[fieldName]) ||
      (valuePrefix && hasContent(values?.[`${valuePrefix}_${fieldName}`])),
  );
}

function getLauncherRegistryItems(field, assessmentRegistry) {
  const registry = field.assessmentRegistry || assessmentRegistry;
  const registryEntries = normalizeRegistryEntries(registry);

  if (!field.options?.length) {
    return registryEntries;
  }

  return field.options
    .map((opt) => {
      const optionId = opt?.value ?? opt?.id;
      if (optionId === undefined || optionId === null) return null;

      const matched =
        findRegistryAssessment(registryEntries, optionId, field.options) ||
        registryEntries.find((item) =>
          labelsRoughlyMatch(item?.name ?? item?.label, opt?.label),
        );

      return {
        ...(matched || {}),
        id: matched?.id ?? optionId,
        value: optionId,
        name: opt?.label ?? matched?.name ?? optionId,
        label: opt?.label ?? matched?.label ?? matched?.name ?? optionId,
      };
    })
    .filter(Boolean);
}

function resolveLauncherAssessments(field, values, assessmentRegistry) {
  const registry = field.assessmentRegistry || assessmentRegistry;
  const registryIsArray = Array.isArray(registry);
  const activeKey =
    field.activeKey ||
    (registryIsArray ? "active_assessment_id" : `${field.name}_active`);
  const activeId = values[activeKey];
  const registryItems = getLauncherRegistryItems(field, registry);
  const resolved = [];
  const seen = new Set();

  const addAssessment = (item) => {
    if (!item) return;
    const dedupeKey = String(
      item.id ?? item.value ?? item.key ?? item.name ?? item.label ?? "",
    );
    if (!dedupeKey || seen.has(dedupeKey)) return;
    seen.add(dedupeKey);
    resolved.push(item);
  };

  if (activeId !== undefined && activeId !== null && activeId !== "") {
    addAssessment(findRegistryAssessment(registry, activeId, field.options));
  }

  registryItems.forEach((item) => {
    const subSchema = normalizeSubAssessmentSchema(item);
    if (!subSchema?.sections) return;
    const itemPrefix = item?.id ?? item?.value ?? item?.key;
    if (!subAssessmentHasFilledValues(values, subSchema.sections, itemPrefix))
      return;
    addAssessment(item);
  });

  return { activeId, assessments: resolved };
}

function appendFieldEntries(entries, field, values, assessmentRegistry, options = {}) {
  const { valuePrefix, excludeSubAssessments } = options;
  if (!field || SKIP_FIELD_TYPES.has(field.type)) return;

  if (excludeSubAssessments && field.type === "assessment-launcher") return;

  if (field.showIf && !evaluateShowIf(field.showIf, values)) return;

  if (field.type === "scale-table") {
    if (!field.name || !Array.isArray(field.rows)) return;
    field.rows.forEach((rowLabel, rIdx) => {
      const rawKey = `${field.name}_${rIdx}`;
      // Try direct, then prefixed
      let cellValue = values[rawKey];
      if (!hasContent(cellValue) && valuePrefix) {
        cellValue = values[`${valuePrefix}_${rawKey}`];
      }
      if (!hasContent(cellValue)) return;
      const resolvedLabel = typeof rowLabel === "object" && !Array.isArray(rowLabel)
        ? (rowLabel.en || rowLabel.ms || Object.values(rowLabel)[0] || "")
        : String(rowLabel ?? "");
      if (!resolvedLabel) return;
      const resolvedValue = resolveOptionLabel(field.columns || [], cellValue) || String(cellValue);
      entries.push({ kind: "row", label: resolvedLabel, value: resolvedValue });
    });
    return;
  }

  if (field.type === "subheading") {
    entries.push({
      kind: "section",
      label: resolveLabel(field.label || field.heading),
    });
    return;
  }

  if (field.type === "assessment-launcher") {
    const { activeId, assessments } = resolveLauncherAssessments(
      field,
      values,
      assessmentRegistry,
    );

    assessments.forEach((selected) => {
      const subSchema = normalizeSubAssessmentSchema(selected);
      if (!subSchema?.sections) return;

      entries.push({
        kind: "section",
        label: resolveLabel(
          selected.name || selected.label || selected.title || "Sub Assessment",
        ),
      });
      appendSections(entries, subSchema.sections, values, assessmentRegistry, {
        ...options,
        valuePrefix:
          shouldUseValuePrefix(selected.id ?? selected.value ?? activeId) ||
          valuePrefix,
      });

      const remarksKeys = [
        selected.value ? `${selected.value}_remarks` : null,
        selected.id ? `${selected.id}_remarks` : null,
      ].filter(Boolean);

      const remarks = remarksKeys
        .map((remarksKey) => values[remarksKey])
        .find((value) => hasContent(value));

      if (remarks) {
        entries.push({
          kind: "row",
          label: "Remarks",
          value: String(remarks),
        });
      }
    });

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
    // If the row has no name, treat each child as its own independent row entry
    if (!field.name) {
      field.fields.forEach((child) => {
        const childValue = resolveFieldValue(values, child.name, valuePrefix);
        if (!hasContent(childValue)) return;
        const childFormatted = formatReportValue(childValue, child);
        if (!childFormatted) return;
        entries.push({
          kind: "row",
          label: resolveLabel(child.label || child.name),
          value: childFormatted,
        });
      });
      return;
    }

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

const SOAP_TAB_LABELS = {
  subjective: "Subjective",
  objective: "Objective",
  assessment: "Assessment",
  plan: "Plan",
};

const SOAP_TAB_ORDER = ["subjective", "objective", "assessment", "plan"];

const SOAP_FORM_TEMPLATE_TAB_BY_ID = {
  "dd34f6da-cf4f-4531-9eaf-06ec1ffd3685": "subjective",
  "f3947691-f5b4-4499-b926-40031157677d": "objective",
  "68725b04-4225-40fa-bc3b-172c7a56d8c9": "assessment",
  "7709d6f8-c3c3-4349-a2e2-54438cb6558f": "plan",
};

function isParentAssessment(item) {
  const val = item?.is_parent;
  return (
    val === true ||
    val === "True" ||
    val === "true" ||
    val === 1 ||
    val === "1"
  );
}

function normalizeTabKey(value) {
  return String(value || "").trim().toLowerCase();
}

function resolveAssessmentTabKey(item) {
  if (!item) return null;

  const formId = String(
    item.form || item.form_id || item.template || item.template_id || "",
  );
  if (SOAP_FORM_TEMPLATE_TAB_BY_ID[formId]) {
    return SOAP_FORM_TEMPLATE_TAB_BY_ID[formId];
  }

  const directCandidates = [item.type, item.form_type].map(normalizeTabKey);
  for (const key of directCandidates) {
    if (SOAP_TAB_ORDER.includes(key)) return key;
  }

  const name = normalizeTabKey(item.name);
  if (SOAP_TAB_ORDER.includes(name)) return name;

  for (const tab of SOAP_TAB_ORDER) {
    if (name.includes(tab)) return tab;
  }

  return null;
}

function groupAssessmentsByTab(assessmentItems = []) {
  const grouped = {};

  assessmentItems.forEach((item) => {
    const tab = resolveAssessmentTabKey(item);
    if (!tab) return;
    if (!grouped[tab]) grouped[tab] = [];
    grouped[tab].push(item);
  });

  return grouped;
}

function extractAssessmentValues(raw) {
  if (!raw || typeof raw !== "object") return {};
  if (raw.data && typeof raw.data === "object" && !Array.isArray(raw.data)) {
    return raw.data;
  }
  return raw.form_data ?? raw.values ?? {};
}

function normalizeFetchedSchema(body) {
  if (!body) return null;

  let parsed = body;
  if (typeof body === "string") {
    try {
      parsed = JSON.parse(body);
    } catch {
      return null;
    }
  }

  if (Array.isArray(parsed)) {
    return normalizeReportSchema({ sections: parsed });
  }

  return normalizeReportSchema(parsed);
}

function resolveFormId(item, rawPayload) {
  return (
    rawPayload?.form ||
    item?.form ||
    item?.form_id ||
    item?.template ||
    item?.template_id ||
    null
  );
}

function valuesHaveContent(values = {}) {
  return Object.values(values).some((value) => hasContent(value));
}

function buildFallbackReportEntries(values = {}) {
  const entries = [];

  Object.entries(values).forEach(([key, value]) => {
    if (!hasContent(value)) return;
    if (key.endsWith("_remarks")) return;

    const rendered =
      formatReportValue(value, {}) ||
      (Array.isArray(value)
        ? value.join(", ")
        : typeof value === "object"
          ? JSON.stringify(value)
          : String(value));

    entries.push({
      kind: "row",
      label: String(key).replaceAll("_", " "),
      value: rendered,
    });
  });

  return entries;
}

function buildTabReportEntries(schema, values, registry, options = {}) {
  if (schema) {
    const structured = buildAssessmentReportEntries(
      schema,
      values,
      registry,
      options,
    );
    if (structured.some((entry) => entry.kind === "row" && entry.value)) {
      return structured;
    }
  }

  return buildFallbackReportEntries(values);
}

function resolveSupplementaryAppender(departmentName = "") {
  const department = String(departmentName).toLowerCase();
  if (department.includes("audiology")) return appendAudiologySoapSupplements;
  if (department.includes("optometry")) return appendOptometrySoapSupplements;
  return null;
}

export function appendOptometrySoapSupplements(entries, tab, values = {}) {
  if (tab === "assessment") {
    if (values.selected_icds?.length) {
      entries.push({
        kind: "row",
        label: "Selected ICDs",
        value: values.selected_icds.join(", "),
      });
    }
    if (values.selected_icfs?.length) {
      entries.push({
        kind: "row",
        label: "Selected ICFs",
        value: values.selected_icfs.join(", "),
      });
    }
  }

  if (tab === "plan") {
    const ichiItems = Object.values(values.ichi_data || {}).flat();
    if (ichiItems.length) {
      entries.push({
        kind: "row",
        label: "ICHI Interventions",
        value: ichiItems
          .map((item) => `${item.code || ""}: ${item.name || ""}`.trim())
          .filter(Boolean)
          .join("\n"),
      });
    }
    if (values.selected_additional_ichi?.length) {
      entries.push({
        kind: "row",
        label: "Additional ICHI",
        value: values.selected_additional_ichi.join(", "),
      });
    }
    if (Array.isArray(values.medications) && values.medications.length) {
      entries.push({
        kind: "row",
        label: "Medications",
        value: values.medications
          .map((med) => {
            const parts = [
              med.medication_name,
              med.dose && med.unit ? `${med.dose} ${med.unit}` : null,
              med.frequency,
              med.type,
            ].filter(Boolean);
            return parts.join(" · ");
          })
          .join("\n"),
      });
    }
  }
}

export function appendAudiologySoapSupplements(entries, tab, values = {}) {
  if (tab === "assessment") {
    if (values.selected_icds?.length) {
      entries.push({
        kind: "row",
        label: "Selected ICDs",
        value: values.selected_icds.join(", "),
      });
    }

    const icfItems = Object.values(values.icf_data || {}).flat();
    if (icfItems.length) {
      entries.push({
        kind: "row",
        label: "ICF Items",
        value: icfItems
          .map((item) => `${item.code || ""}: ${item.name || item.label || ""}`.trim())
          .filter(Boolean)
          .join("\n"),
      });
    }
  }

  if (tab === "plan") {
    const ichiItems = Object.values(values.ichi_data || {}).flat();
    if (ichiItems.length) {
      entries.push({
        kind: "row",
        label: "ICHI Interventions",
        value: ichiItems
          .map((item) => `${item.code || ""}: ${item.name || ""}`.trim())
          .filter(Boolean)
          .join("\n"),
      });
    }

    if (values.selected_additional_ichi?.length) {
      entries.push({
        kind: "row",
        label: "Additional ICHI",
        value: values.selected_additional_ichi.join(", "),
      });
    }
  }
}

export function buildFullSoapReportEntries({
  tabs = [],
  templates = {},
  assessmentsValues = {},
  subAssessmentTemplate = {},
  supplementaryAppender,
}) {
  const entries = [];

  tabs.forEach((tab) => {
    const schema = templates[tab];
    if (!schema) return;

    entries.push({
      kind: "section",
      label: SOAP_TAB_LABELS[tab] || tab.charAt(0).toUpperCase() + tab.slice(1),
      variant: "soap",
    });

    const tabEntries = buildAssessmentReportEntries(
      schema,
      assessmentsValues[tab] || {},
      subAssessmentTemplate[tab] || {},
      { excludeSubAssessments: false },
    );

    tabEntries.forEach((entry) => entries.push(entry));

    if (supplementaryAppender) {
      supplementaryAppender(entries, tab, assessmentsValues[tab] || {});
    }
  });

  return entries;
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

/**
 * Load structured SOAP report entries for a saved session (RAP session report).
 */
export async function loadSessionSoapReportEntries({
  session,
  fetchFormData,
  fetchFormTemplate,
}) {
  const assessmentItems = Array.isArray(session?.assessment_ids)
    ? session.assessment_ids
    : [];

  if (!assessmentItems.length) return [];

  const groupedByTab = groupAssessmentsByTab(assessmentItems);
  const supplementaryAppender = resolveSupplementaryAppender(session?.department_name);
  const entries = [];
  const bundleCache = new Map();
  const matchedIds = new Set();

  const loadAssessmentBundle = async (item) => {
    if (!item?.id) return null;
    if (bundleCache.has(item.id)) return bundleCache.get(item.id);

    const promise = (async () => {
      const dataRes = await fetchFormData(item.id);
      const raw = dataRes?.data ?? dataRes ?? {};
      const values = extractAssessmentValues(raw);
      const formId = resolveFormId(item, raw);

      if (!formId) return { values, schema: null, formId: null };

      const templateRes = await fetchFormTemplate(formId);
      const schema = normalizeFetchedSchema(
        templateRes?.data?.body ?? templateRes?.data,
      );

      return { values, schema, formId };
    })();

    bundleCache.set(item.id, promise);
    return promise;
  };

  const buildRegistryForTab = async (tabChildren) => {
    const registry = {};

    await Promise.all(
      tabChildren.map(async (child) => {
        const bundle = await loadAssessmentBundle(child);
        if (!bundle?.schema) return;

        const registryKey = child.name || child.id;
        const templateId = child.form || bundle.formId;

        registry[registryKey] = {
          ...bundle.schema,
          id: templateId,
          value: templateId || child.id,
          name: child.name || registryKey,
          session_id: child.id,
          title: bundle.schema.title || child.name,
        };
      }),
    );

    return registry;
  };

  const mergeTabValues = async (primaryValues, tabItems) => {
    const merged = { ...(primaryValues || {}) };

    await Promise.all(
      tabItems.map(async (item) => {
        const bundle = await loadAssessmentBundle(item);
        if (!bundle?.values) return;
        Object.assign(merged, bundle.values);
      }),
    );

    return merged;
  };

  const appendTabSection = async (tab, tabItems) => {
    if (!tabItems?.length) return;

    tabItems.forEach((item) => {
      if (item?.id) matchedIds.add(item.id);
    });

    const primaryItem = tabItems.find(isParentAssessment) ?? tabItems[0];
    const tabChildren = tabItems.filter((item) => item.id !== primaryItem.id);
    const primaryBundle = await loadAssessmentBundle(primaryItem);

    if (!primaryBundle) return;

    const registry = await buildRegistryForTab(tabChildren);
    const mergedValues = await mergeTabValues(primaryBundle.values, tabItems);
    const tabEntries = buildTabReportEntries(
      primaryBundle.schema,
      mergedValues,
      registry,
      { excludeSubAssessments: false },
    );

    const hasRows = tabEntries.some((entry) => entry.kind === "row" && entry.value);
    if (!hasRows && !valuesHaveContent(mergedValues) && !supplementaryAppender) {
      return;
    }

    entries.push({
      kind: "section",
      label: SOAP_TAB_LABELS[tab],
      variant: "soap",
    });

    if (hasRows) {
      tabEntries.forEach((entry) => entries.push(entry));
    } else {
      buildFallbackReportEntries(mergedValues).forEach((entry) => entries.push(entry));
    }

    if (supplementaryAppender) {
      supplementaryAppender(entries, tab, mergedValues);
    }
  };

  for (const tab of SOAP_TAB_ORDER) {
    await appendTabSection(tab, groupedByTab[tab]);
  }

  const unmatchedItems = assessmentItems.filter((item) => !matchedIds.has(item.id));
  for (const item of unmatchedItems) {
    const bundle = await loadAssessmentBundle(item);
    if (!bundle) continue;

    const tabEntries = buildTabReportEntries(
      bundle.schema,
      bundle.values || {},
      {},
      { excludeSubAssessments: false },
    );

    const hasRows = tabEntries.some((entry) => entry.kind === "row" && entry.value);
    if (!hasRows && !valuesHaveContent(bundle.values)) continue;

    entries.push({
      kind: "section",
      label: item.name || item.type || item.form_type || "Assessment",
      variant: "soap",
    });

    if (hasRows) {
      tabEntries.forEach((entry) => entries.push(entry));
    } else {
      buildFallbackReportEntries(bundle.values).forEach((entry) => entries.push(entry));
    }
  }

  return entries;
}

export { shouldUseValuePrefix, normalizeSubAssessmentSchema };
