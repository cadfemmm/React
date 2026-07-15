import { useEffect, useState, useCallback, useRef, createContext } from "react";

// Common Form Builder
import CommonFormBuilder from "../features/CommonComponenets/FormBuilder.jsx";

// Equipment Booking
import EquipmentBookingPopup from "../features/Audiology/components/EquipmentBookingPopup.jsx";
import { BookAppointmentModal } from "../features/book-appointment-modal/BookAppointmentModal";
import { fetchBookingQueue } from "../features/book-appointment-modal/bookingQueueService";

// Utils
import { localDateTimeString } from "../shared/utils/dateFormatter";

// Patient Card
import PatientCard from "../shared/cards/PatientCard";

// UI
import Toast from "../shared/ui/Toast";
import EmptyState from "../shared/ui/EmptyState";
import { ShimmerForm } from "../shared/ui/Shimmer";
import ConfirmModal from "../shared/ui/ConfirmModal";
import ReferralModal from "../shared/ui/ReferralModal";
import AssessmentSectionPreviewModal from "../shared/ui/AssessmentSectionPreviewModal";
import {
  buildFullSoapReportEntries,
  appendOptometrySoapSupplements,
  appendAudiologySoapSupplements,
} from "../shared/utils/assessmentPreviewUtils";

// Schema Load
import actions from "../schema/actions.js";
import { OTOSCOPIC_EXTRACT_URL, TYMPANOGRAM_EXTRACT_URL } from "../platform/config/api.config";

// API calls
import forms from "./forms.js";
import session from "./session.js";

// ICD Components
import AudiologyICDSection from "../features/Audiology/components/AudiologyICDSection";
import AudiologySttFloatingMic from "../features/Audiology/components/AudiologySttFloatingMic";
import OptometryICDSection from "../features/Optometry/components/OptometryICDSection";
import MedicationAssessment from "../features/Doctors/components/MedicationAssessment";

// ── Context ────────────────────────────────────────────────────────────────
// Carries patient + the questionaire FormData ID map + save helper
const PatientContext = createContext(null);

const valueToText = (value) => (value === undefined || value === null ? "" : String(value));

const setIfPresent = (target, key, value) => {
  if (value !== undefined && value !== null && value !== "") {
    target[key] = valueToText(value);
  }
};

/** Audiology Initial Adult SOAP — fixed backend template IDs (no age routing). */
const AUDIOLOGY_INITIAL_ADULT_TEMPLATE_BY_TAB = {
  subjective: "dd34f6da-cf4f-4531-9eaf-06ec1ffd3685",
  objective: "f3947691-f5b4-4499-b926-40031157677d",
  assessment: "68725b04-4225-40fa-bc3b-172c7a56d8c9",
  plan: "7709d6f8-c3c3-4349-a2e2-54438cb6558f",
};

const getTemplateSubAssessments = (template) =>
  template?.sub_assessment ??
  template?.sub_assessments ??
  [];

const SOAP_SESSION_TABS = ["subjective", "objective", "assessment", "plan"];

const isParentSessionItem = (item) => {
  const val = item?.is_parent;
  return (
    val === true ||
    val === "True" ||
    val === "true" ||
    val === 1 ||
    val === "1"
  );
};

const resolveSessionAssessmentTab = (item) => {
  const typeKey = String(item?.type || "").trim().toLowerCase();
  if (SOAP_SESSION_TABS.includes(typeKey)) return typeKey;

  const formId = String(
    item?.form || item?.form_id || item?.template || item?.template_id || "",
  );
  const tabFromFormId = Object.entries(
    AUDIOLOGY_INITIAL_ADULT_TEMPLATE_BY_TAB,
  ).find(([, id]) => formId && id === formId)?.[0];
  if (tabFromFormId) return tabFromFormId;

  const name = String(item?.name || "").trim().toLowerCase();
  for (const tab of SOAP_SESSION_TABS) {
    if (name.includes(tab)) return tab;
  }

  const altType = String(
    item?.form_type || item?.assessment_type || "",
  )
    .trim()
    .toLowerCase();
  if (SOAP_SESSION_TABS.includes(altType)) return altType;

  return null;
};

const getSessionItemFormTemplateId = (sessionItem) =>
  sessionItem?.form ??
  sessionItem?.form_id ??
  sessionItem?.template ??
  sessionItem?.template_id ??
  null;

const buildSessionSubIdMap = (assessmentIds = []) => {
  const byFormId = {};
  const byName = {};

  assessmentIds.forEach((item) => {
    if (isParentSessionItem(item)) return;

    const dataInstanceId = item?.id;
    if (!dataInstanceId) return;

    const formTemplateId = getSessionItemFormTemplateId(item);
    if (formTemplateId) {
      byFormId[String(formTemplateId)] = dataInstanceId;
    }

    const normalizedName = normalizeLauncherText(item?.name);
    if (normalizedName) {
      byName[normalizedName] = dataInstanceId;
    }
  });

  return { byFormId, byName };
};

const resolveSubAssessmentSessionId = (subTemplate, sessionMaps) => {
  if (!subTemplate || !sessionMaps) return null;

  const formTemplateId = subTemplate?.id;
  if (formTemplateId && sessionMaps.byFormId?.[String(formTemplateId)]) {
    return sessionMaps.byFormId[String(formTemplateId)];
  }

  const normalizedName = normalizeLauncherText(subTemplate?.name);
  if (normalizedName && sessionMaps.byName?.[normalizedName]) {
    return sessionMaps.byName[normalizedName];
  }

  return null;
};

const applySessionIdsToSubRegistry = (registry = {}, sessionMaps) => {
  if (!sessionMaps) return registry;

  const next = { ...registry };
  let changed = false;

  Object.entries(registry).forEach(([key, subTemplate]) => {
    if (!subTemplate || typeof subTemplate !== "object" || subTemplate.$$typeof) {
      return;
    }

    const sessionId =
      subTemplate.session_id ||
      resolveSubAssessmentSessionId(subTemplate, sessionMaps);

    if (!sessionId || subTemplate.session_id === sessionId) return;

    next[key] = {
      ...subTemplate,
      session_id: sessionId,
    };
    changed = true;
  });

  return changed ? next : registry;
};

const subTemplateMatchesSessionItem = (subTemplate, registryKey, sessionItem) => {
  const formTemplateId = getSessionItemFormTemplateId(sessionItem);

  if (
    formTemplateId &&
    (String(subTemplate?.id) === String(formTemplateId) ||
      String(registryKey) === String(formTemplateId))
  ) {
    return true;
  }

  const sessionName = sessionItem?.name;
  if (!sessionName) return false;

  if (subTemplate?.name === sessionName || registryKey === sessionName) {
    return true;
  }

  const left = normalizeLauncherText(subTemplate?.name);
  const right = normalizeLauncherText(sessionName);
  return (
    !!left &&
    !!right &&
    (left === right || left.includes(right) || right.includes(left))
  );
};

const normalizeTemplateBody = (body) => {
  if (!body) return {};
  if (Array.isArray(body)) {
    return { sections: body };
  }
  if (typeof body === "object") {
    return body;
  }
  return {};
};

const withPrimarySection = (schema) => {
  if (Array.isArray(schema.sections) && schema.sections.length > 0) {
    return schema;
  }
  if (Array.isArray(schema.fields) && schema.fields.length > 0) {
    return {
      ...schema,
      sections: [{ title: null, fields: schema.fields }],
    };
  }
  return schema;
};

const buildSubAssessmentEntry = (sub) => ({
  ...sub,
  ...withPrimarySection(normalizeTemplateBody(sub?.body)),
  id: sub.id,
  name: sub.name,
  type: sub.type,
  score: sub.score ?? null,
  actions: actions.ACTIONS_BUTTON,
  session_id: null,
});

const subAssessmentHasSchema = (template) =>
  (Array.isArray(template?.sections) && template.sections.length > 0) ||
  (Array.isArray(template?.fields) && template.fields.length > 0) ||
  (Array.isArray(template?.body) && template.body.length > 0);

const getUniqueSubAssessments = (registry = {}) => {
  const seen = new Set();
  return Object.values(registry).filter((sub) => {
    const id = sub?.id;
    if (!id || seen.has(String(id))) return false;
    seen.add(String(id));
    return true;
  });
};

const normalizeLauncherText = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();

/** Legacy launcher option tokens -> sub_assessment.name patterns */
const LAUNCHER_LEGACY_OPTION_PATTERNS = {
  tinnitus_form: /tinnitus/,
  tinnitus_form_obj: /tinnitus/,
  loudness_form: /hyperacusis|loudness/,
  loudness_form_obj: /hyperacusis|loudness/,
  hearing_form: /auditory|hearing(?!\s*aid|\s*device|\s*trial)/,
  hearing_form_obj: /auditory|hearing(?!\s*aid|\s*device|\s*trial)/,
  vestibular_form: /vestibular/,
  vestibular_form_obj: /vestibular/,
  industrial_form_obj: /industrial/,
  hearingaidtrial_form_obj: /hearing\s*aid|device\s*trial/,
  VISUAL_FUNCTION: /visual function/,
  LVQOL: /lvqol|low vision quality/,
  BRAIN_VISION: /brain injury|bivss/,
  BVDQ: /binocular vision dysfunction|bvdq/,
  BV_QUESTIONNAIRE: /binocular vision questionnaire/,
  BINOCULAR_VISION: /binocular vision/,
  REFRACTION: /refraction/,
  VISION_DRIVING: /vision for driving|driving/,
  OCULAR_HEALTH: /ocular health/,
  SPECIAL_DIAGNOSTIC: /special diagnostic/,
  LOW_VISION_ASSESSMENT: /low vision/,
};

const matchSubToLauncherOption = (sub, opt) => {
  const subId = String(sub?.id ?? "");
  const optValue = String(opt?.value ?? opt?.id ?? "");
  const optLabel = normalizeLauncherText(opt?.label);
  const subName = normalizeLauncherText(sub?.name);

  if (subId && optValue && subId === optValue) return true;

  if (optLabel && subName) {
    if (subName === optLabel) return true;
    const strippedLabel = optLabel
      .replace(/^additional\s+/, "")
      .replace(/\s+profile$/, "")
      .trim();
    if (strippedLabel && subName.includes(strippedLabel)) return true;
    if (strippedLabel && strippedLabel.includes(subName)) return true;
  }

  const legacyPattern = LAUNCHER_LEGACY_OPTION_PATTERNS[optValue];
  return legacyPattern ? legacyPattern.test(subName) : false;
};

const resolveSubForLauncherOption = (subAssessments, opt) => {
  if (!Array.isArray(subAssessments) || !opt) return null;
  return subAssessments.find((sub) => matchSubToLauncherOption(sub, opt)) ?? null;
};

const walkLauncherFields = (fields, subAssessments) => {
  if (!Array.isArray(fields)) return fields;

  return fields.map((field) => {
    if (!field || typeof field !== "object") return field;

    let next = { ...field };

    if (next.type === "assessment-launcher" && Array.isArray(next.options)) {
      next = {
        ...next,
        options: next.options
          .map((opt) => {
            const sub = resolveSubForLauncherOption(subAssessments, opt);
            if (!sub?.id) return opt;
            return {
              ...opt,
              value: sub.id,
              id: sub.id,
              label: opt.label ?? sub.name,
            };
          })
          .filter(Boolean),
      };
    }

    if (Array.isArray(next.children)) {
      next.children = walkLauncherFields(next.children, subAssessments);
    }
    if (Array.isArray(next.fields)) {
      next.fields = walkLauncherFields(next.fields, subAssessments);
    }

    return next;
  });
};

/** Rewrite launcher option values to backend sub_assessment UUIDs (Optometry-style). */
const injectLauncherSubAssessmentIds = (schema, subAssessments) => {
  if (!schema || !subAssessments?.length) return schema;

  if (Array.isArray(schema.sections)) {
    return {
      ...schema,
      sections: schema.sections.map((section) => ({
        ...section,
        fields: walkLauncherFields(section.fields, subAssessments),
      })),
    };
  }

  if (Array.isArray(schema.fields)) {
    return {
      ...schema,
      fields: walkLauncherFields(schema.fields, subAssessments),
    };
  }

  return schema;
};

/**
 * This component is responsible for fetching the assessment forms
 * for the given department and rendering the appropriate tab
 * content based on the active tab. It also manages the state of the
 * assessment values, loading state, any errors, retry logic, toast notifications,
 * starting the assessment session, end session, submission of the assessment
 * and also for the referral management, equipments booking, and mapping codes to the session.
 * @param {Object} patient - The patient object containing patient details
 * @param {String} department - The department for which the assessment forms are to be fetched
 */

export default function AssessmentLoader({ patient, department }) {
  // Extract Tab
  const TABS = actions.ASSESSMENT_TABS;
  // Set up state to track which assessment is active and its values
  const [toast, setToast] = useState(null);
  const [error, setError] = useState(false); //formsError, setFormsError
  const [templates, setTemplates] = useState([]); //[forms, setForms]
  const [isLoading, setIsLoading] = useState(true); // formsLoading,  setFormsLoading
  const [sessionId, setSessionId] = useState(null);
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isConfirmModal, setIsConfirmModal] = useState(false);
  const [isReferralModal, setIsReferralModal] = useState(false);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [sessionSubAssessmentIds, setSessionSubAssessmentIds] = useState({
    byFormId: {},
    byName: {},
  });
  const [assessmentsValues, setAssessmentsValues] = useState(() => {
    return { subjective: {}, objective: {}, assessment: {}, plan: {} };
  });
  const [subAssessmentTemplate, setSubAssessmentTemplate] = useState({
    subjective: {},
    objective: {},
    assessment: {},
    plan: {},
  });

  // Ref to store pending ICF data from form fetch — populated on save, not on select
  const pendingFormIcfRef = useRef({});

  // OCR & Otoscopic processing state
  const [processingOCR, setProcessingOCR] = useState(false);
  const [isOtoscopicLoading, setIsOtoscopicLoading] = useState(false);

  // Equipment booking state
  const [equipmentBookingOpen, setEquipmentBookingOpen] = useState(false);
  const [selectedEquipment, setSelectedEquipment]       = useState(null);
  const [bookedEquipmentIds, setBookedEquipmentIds]     = useState([]);
  const [equipmentOptions, setEquipmentOptions]         = useState([]);

  const equipmentStorageKey = patient?.id ? `patient_${patient.id}_equipment` : null;

  const getStoredEquipmentItems = () => {
    if (!equipmentStorageKey) return [];
    try {
      const raw = localStorage.getItem(equipmentStorageKey);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error("Failed to parse stored equipment", e);
      return [];
    }
  };

  useEffect(() => {
    if (!equipmentStorageKey) return;
    const storedItems = getStoredEquipmentItems();
    setBookedEquipmentIds(
      storedItems
        .map((item) => item.id || item.value)
        .filter((id) => !!id),
    );
  }, [equipmentStorageKey]);

  // Appointment booking state
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [bookingQueueRow, setBookingQueueRow]           = useState(null);
  const [sectionPreview, setSectionPreview] = useState(null);
  const isPsychology = department === "Psychology";
  const isOptometry = department === "Optometry";
  const isAudiology = department === "Audiology";

useEffect(() => {
  if (!patient || !department) return;

  fetchBookingQueue({ limit: 100 })
    .then((data) => {
      const patientName = (
        patient?.full_name ||
        patient?.name ||
        ""
      )
        .trim()
        .toLowerCase();

      const departmentName = department
        .trim()
        .toLowerCase();

      const row = data.rows?.find(
        (r) =>
          (r.patient_name || "")
            .trim()
            .toLowerCase() === patientName &&
          (r.department || "")
            .trim()
            .toLowerCase() === departmentName
      );

      // console.log("department:", department);
      // console.log("patient:", patientName);
      // console.log("matched booking row:", row);

      setBookingQueueRow(row || null);
    })
    .catch(console.error);
}, [patient, department]);

  // Mapping template to the schema registry
  const loadTemplates = async () => {
    setIsLoading(true);
    setError(false);

    try {
      const map = {};
      const subAssessment = {};
      const data = await forms.fetch(department);
      if (!data || data.length === 0) {
        setError(true);
        return;
      }

      // Capture the assessment form ID separately — the icf data lives on the
      // assessment form, and we need to pass it to both assessment & plan tabs.
      let assessmentFormId = null;

      const resolveFullTemplate = async (template) => {
        if (!template?.id) return template;

        try {
          const res = await forms.fetchById(template.id);
          const detail = res?.data;
          if (!detail) return template;

          return {
            ...template,
            ...detail,
            body: detail.body ?? template.body,
            sub_assessment: getTemplateSubAssessments(detail).length
              ? getTemplateSubAssessments(detail)
              : getTemplateSubAssessments(template),
          };
        } catch {
          return template;
        }
      };

      const registerSubAssessments = async (template, tabKey) => {
        const subs = getTemplateSubAssessments(template);
        if (!subs.length) return;

        const registry = { ...(subAssessment[tabKey] || {}) };

        await Promise.all(
          subs.map(async (sub) => {
            if (!sub?.id) return;

            let entry = buildSubAssessmentEntry(sub);
            if (!subAssessmentHasSchema(entry)) {
              try {
                const res = await forms.fetchById(sub.id);
                entry = buildSubAssessmentEntry({ ...sub, ...res?.data });
              } catch {
                /* keep list payload */
              }
            }

            registry[sub.id] = entry;
            if (sub.name) registry[sub.name] = entry;
          }),
        );

        const linkLauncherOptions = (fields) => {
          (fields || []).forEach((field) => {
            if (field?.type === "assessment-launcher" && field.options) {
              field.options.forEach((opt) => {
                const sub = resolveSubForLauncherOption(subs, opt);
                if (!sub?.id) return;
                const entry = registry[sub.id] || buildSubAssessmentEntry(sub);
                registry[sub.id] = entry;
                if (sub.name) registry[sub.name] = entry;

                const legacyKey = opt?.value ?? opt?.id;
                if (legacyKey) registry[legacyKey] = entry;
              });
            }
            linkLauncherOptions(field.fields);
            linkLauncherOptions(field.children);
          });
        };

        const sourceBody = normalizeTemplateBody(template.body);
        (sourceBody.sections || []).forEach((section) =>
          linkLauncherOptions(section.fields),
        );
        linkLauncherOptions(sourceBody.fields);

        subAssessment[tabKey] = registry;
      };

      const buildProcessedTemplate = (template, tabKey) => {
        let processedTemplate = {
          ...withPrimarySection(normalizeTemplateBody(template.body)),
          id: template.id,
          name: template.name,
          actions: actions.ACTIONS_BUTTON,
        };

        if (tabKey === "assessment") {
          assessmentFormId = template.id;
        }

        if (
          (department === "Audiology" || department === "Optometry") &&
          (tabKey === "assessment" || tabKey === "plan")
        ) {
          const ICDComponent =
            department === "Optometry" ? OptometryICDSection : AudiologyICDSection;

          if (
            processedTemplate.sections?.[0]?.fields
          ) {
            if (tabKey === "assessment") {
              processedTemplate.sections[0].fields.push({
                type: "custom",
                name: "icd_icf_ichi_section",
                render: ({ values, onChange }) => (
                  <ICDComponent
                    values={values}
                    onChange={onChange}
                    mode="icd-icf"
                  />
                ),
              });
            } else if (tabKey === "plan") {
              const fields = processedTemplate.sections[0].fields;
              const interventionIndex = fields.findIndex(
                (f) => f.name === "intervention_plan",
              );

              const ichiComponent = {
                type: "custom",
                name: "ichi_section",
                render: ({ values, onChange }) => (
                  <ICDComponent
                    values={values}
                    onChange={onChange}
                    mode="plan"
                  />
                ),
              };

              if (interventionIndex !== -1) {
                fields.splice(interventionIndex + 1, 0, ichiComponent);
              } else {
                fields.push(ichiComponent);
              }

              if (department === "Optometry") {
                const hasMedications = fields.some(
                  (field) =>
                    field?.name === "medications" &&
                    typeof field.render === "function",
                );
                if (!hasMedications) {
                  fields.push({
                    type: "subheading",
                    label: "Medication",
                  });
                  fields.push({
                    type: "custom",
                    name: "medications",
                    render: ({ values, onChange: fieldOnChange }) => (
                      <MedicationAssessment
                        patient={patient}
                        embedded
                        values={values}
                        onChange={fieldOnChange}
                      />
                    ),
                  });
                }
              }
            }
          }
        }

        if (getTemplateSubAssessments(template).length) {
          processedTemplate = injectLauncherSubAssessmentIds(
            processedTemplate,
            getTemplateSubAssessments(template),
          );
        }

        return processedTemplate;
      };

      if (department === "Audiology") {
        for (const tab of TABS) {
          const templateId = AUDIOLOGY_INITIAL_ADULT_TEMPLATE_BY_TAB[tab];
          const template = data.find((item) => String(item.id) === templateId);
          if (!template) continue;
          const fullTemplate = await resolveFullTemplate(template);
          map[tab] = buildProcessedTemplate(fullTemplate, tab);
          await registerSubAssessments(fullTemplate, tab);
        }
      } else {
        for (const template of data) {
          const key = template.assessment_type?.toLowerCase();
          if (!TABS.includes(key)) continue;
          const fullTemplate = await resolveFullTemplate(template);
          map[key] = buildProcessedTemplate(fullTemplate, key);
          await registerSubAssessments(fullTemplate, key);
        }
      }

      setTemplates(map);
      setSubAssessmentTemplate(subAssessment);
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Load template on department
  useEffect(() => {
    if (!sessionId) {
      loadTemplates();
    }
  }, [department, sessionId]);

  // Start session handler
  const handleStartSession = useCallback(async () => {
    if (!patient) return;
    // Extract login doctor id
    const doctorId = localStorage.getItem("user_id");
    if (!doctorId) {
      setToast({
        message: "Could not identify logged on doctor. Please re-login.",
        variant: "error",
      });
      return;
    }
    try {
      const response = await session.start(
        doctorId,
        patient.id,
        department,
        "INITIAL",
        0,
        false,
      );
      setSessionId(response.data.id);
      const sessionMaps = buildSessionSubIdMap(
        response?.data?.assessment_ids || [],
      );
      setSessionSubAssessmentIds(sessionMaps);

      response?.data?.assessment_ids.forEach((template) => {
        if (isParentSessionItem(template)) {
          const tab = resolveSessionAssessmentTab(template);
          if (!tab || !TABS.includes(tab)) return;

          setTemplates((prev) => ({
            ...prev,
            [tab]: {
              ...prev[tab],
              id: template.id,
            },
          }));
          return;
        }

        setSubAssessmentTemplate((prev) => {
          const targetTabHint = resolveSessionAssessmentTab(template);
          const tabsToSearch = targetTabHint
            ? [
                targetTabHint,
                ...SOAP_SESSION_TABS.filter((t) => t !== targetTabHint),
              ]
            : SOAP_SESSION_TABS;

          for (const soapTab of tabsToSearch) {
            let matched = false;
            const newEntries = Object.entries(prev[soapTab] || {}).map(
              ([key, subTemplate]) => {
                if (
                  subTemplateMatchesSessionItem(subTemplate, key, template)
                ) {
                  matched = true;
                  return [
                    key,
                    {
                      ...subTemplate,
                      id: subTemplate.id,
                      session_id: template.id,
                      type: template.type,
                    },
                  ];
                }
                return [key, subTemplate];
              },
            );

            if (matched) {
              return {
                ...prev,
                [soapTab]: Object.fromEntries(newEntries),
              };
            }
          }

          console.warn(
            `[Start] Could not match sub-template "${template.name}" in any tab`,
          );
          return prev;
        });
      });

      setSubAssessmentTemplate((prev) => {
        const next = { ...prev };
        let changed = false;

        SOAP_SESSION_TABS.forEach((tab) => {
          const updatedRegistry = applySessionIdsToSubRegistry(
            next[tab] || {},
            sessionMaps,
          );
          if (updatedRegistry !== next[tab]) {
            next[tab] = updatedRegistry;
            changed = true;
          }
        });

        return changed ? next : prev;
      });

      setIsSessionActive(true);
      setIsSubmitted(false);
      setToast({ message: "Assessment session started", variant: "success" });
    } catch (e) {
      const detail = e?.response?.data;
      const msg =
        typeof detail === "object"
          ? Object.values(detail).flat().join(" ")
          : "Failed to start assessment. Please try again";
      setToast({ message: msg, variant: "error" });
      setIsSessionActive(false);
    }
  }, [patient, templates]);

  // End session handler
  const handleEndSession = useCallback(async () => {
    if (sessionId) {
      const billingResponse = await forms.fetchSessionCharge(department);
      const billingItem = billingResponse?.data?.data?.[0];
      try {
        await session.end(
          sessionId, 
          { 
            price:billingItem?.cost, 
            charge_id:billingItem?.id
          }
        );
        setSessionId(null);
        setIsSubmitted(true);
        setIsSessionActive(false);
        setSessionSubAssessmentIds({ byFormId: {}, byName: {} });
        setToast({
          message: "Assessment submitted and session ended",
          variant: "success",
        });
      } catch (e) {
        setIsSubmitted(false);
        setToast({
          message: "Submission failed. Please try again.",
          variant: "error",
        });
      }
      setIsConfirmModal(false);
      return;
    }
  }, [sessionId]);

  // Action handler
  const handleAction = useCallback(
    async (type) => {
      // =========================
      // NEXT
      // =========================
      if (type === "next") {
        const templateDataId = templates?.[activeTab]?.id;

        // SAVE CURRENT TAB
        if (isSessionActive && templateDataId) {
          try {
            // ALL SUB ASSESSMENT FIELD NAMES
            const parentFieldNames = [];

            // ONLY MAIN SOAP TEMPLATE FIELDS
            (templates?.[activeTab]?.sections || []).forEach((section) => {
              (section.fields || []).forEach((field) => {
                // direct field
                if (field.name) {
                  parentFieldNames.push(field.name);
                }

                // cols fields
                if (field.cols?.length) {
                  field.cols.forEach((col) => {
                    if (col.name) {
                      parentFieldNames.push(col.name);
                    }
                  });
                }
              });
            });

            // SAVE ONLY PARENT ASSESSMENT DATA
            const parentAssessmentData = Object.fromEntries(
              Object.entries(assessmentsValues[activeTab] || {}).filter(
                ([key]) => parentFieldNames.includes(key),
              ),
            );

            // SAVE ONLY PARENT SOAP DATA
            await forms.save(templateDataId, parentAssessmentData);

            setToast({
              message: "Saved",
              variant: "success",
            });
          } catch (e) {
            setToast({
              message: "Failed to save",
              variant: "error",
            });

            return;
          }
        }

        // MOVE TO NEXT TAB
        const pos = TABS.indexOf(activeTab);
        if (pos < TABS.length - 1) {
          setActiveTab(TABS[pos + 1]);
        }
        return;
      }
      // =========================
      // CLEAR
      // =========================
      if (type === "clear") {
        setIsSubmitted(false);
        setAssessmentsValues({
          subjective: {},
          objective: {},
          assessment: {},
          plan: {},
        });
        return;
      }

      // =========================
      // SAVE ONLY
      // =========================
      if (type === "save") {
        const templateDataId = templates?.[activeTab]?.id;
        if (!templateDataId) return;
        try {
          // ALL SUB ASSESSMENT FIELD NAMES
          const subAssessmentFieldNames = getUniqueSubAssessments(
            subAssessmentTemplate?.[activeTab] || {},
          ).flatMap((sub) => {
            const names = [];
            (sub.sections || []).forEach((section) => {
              (section.fields || []).forEach((field) => {
                if (field.name) {
                  names.push(field.name);
                }
                if (field.cols?.length) {
                  field.cols.forEach((col) => {
                    if (col.name) {
                      names.push(col.name);
                    }
                  });
                }
              });
            });
            return names;
          });

          // REMOVE SUB ASSESSMENT DATA
          const parentAssessmentData = Object.fromEntries(
            Object.entries(assessmentsValues[activeTab] || {}).filter(
              ([key]) => !subAssessmentFieldNames.includes(key),
            ),
          );
          await forms.save(templateDataId, parentAssessmentData);
          setToast({
            message: "Saved",
            variant: "success",
          });
        } catch (e) {
          setToast({
            message: "Failed to save",
            variant: "error",
          });
        }
      }
    },
    [
      activeTab,
      sessionId,
      templates,
      assessmentsValues,
      isSessionActive,
      subAssessmentTemplate,
    ],
  );

  // OnChange handler
  const onChange = useCallback(
    async (name, value) => {      
      // =========================
      // EQUIPMENT OPTIONS CAPTURE
      // =========================
      // When FormBuilder lazily loads equipment into `*_options`, capture it
      // so the booking popup has the full list available.
      if (name.endsWith("_options") && Array.isArray(value) && value.length > 0) {
        setEquipmentOptions(value);
      }

      // =========================
      // SUB ASSESSMENT HANDLING
      // =========================
      const loadSubAssessmentTemplate = async (templateId) => {
        const tm = await forms.fetchById(templateId);
        setSubAssessmentTemplate((prev) => {
          const currentTab = prev[activeTab] || {};
          const updated = { ...currentTab };
          Object.entries(updated).forEach(([key, item]) => {
            const matches =
              String(item?.id) === String(templateId) ||
              String(key) === String(templateId) ||
              item?.name === tm?.data?.name ||
              key === tm?.data?.name;
            if (!matches) return;

            updated[key] = {
              ...item,
              ...withPrimarySection(normalizeTemplateBody(tm?.data?.body)),
              actions: actions.ACTIONS_BUTTON,
              session_id:
                item.session_id ||
                resolveSubAssessmentSessionId(item, sessionSubAssessmentIds),
              id: item.id ?? templateId,
              name: tm.data.name,
              type: tm.data.type,
              score: tm.data.score,
              loaded: true,
            };
          });
          return {
            ...prev,
            [activeTab]: updated,
          };
        });
      };

      if (name.endsWith("_active")) {
        if (!value) {
          setAssessmentsValues((v) => ({
            ...v,
            [activeTab]: {
              ...v[activeTab],
              [name]: null,
            },
          }));
          return;
        }

        try {
          const registry = subAssessmentTemplate[activeTab] || {};
          const registryEntry = registry[value];
          const templateIdToFetch = registryEntry?.id ?? value;
          const tm = await forms.fetchById(templateIdToFetch);
          setSubAssessmentTemplate((prev) => {
            const currentTab = prev[activeTab] || {};
            const updated = Object.fromEntries(
              Object.entries(currentTab).map(([key, template]) => {
                // MATCH SELECTED ASSESSMENT
                if (
                  String(template.id) === String(value) ||
                  String(key) === String(value) ||
                  template.name === tm?.data?.name ||
                  key === tm?.data?.name
                ) {
                  return [
                    key,
                    {
                      ...template,
                      ...withPrimarySection(normalizeTemplateBody(tm?.data?.body)),
                      actions: actions.ACTIONS_BUTTON,
                      session_id:
                        template.session_id ||
                        resolveSubAssessmentSessionId(
                          template,
                          sessionSubAssessmentIds,
                        ),
                      id: template.id,
                      name: tm.data.name,
                      type: tm.data.type,
                      score: tm.data.score,
                      loaded: true,
                    },
                  ];
                }
                return [key, template];
              }),
            );
            return {
              ...prev,
              [activeTab]: updated,
            };
          });

          // Store ICF data in ref — only populate assessment_form_icf on save
          if (tm?.data?.icf && Array.isArray(tm.data.icf)) {
            const formName = tm.data.name || tm.data.id;
            pendingFormIcfRef.current = {
              ...pendingFormIcfRef.current,
              [formName]: tm.data.icf,
            };
          }
        } catch (e) {
          setToast({
            message: "Sub Assessment form loading failed",
            variant: "error",
          });
          return;
        }
      }
      
      // =========================
      // ICD/ICF/ICHI DATA PERSISTENCE
      // =========================
      // When ICD data is updated, we need to persist it across ALL tabs
      // so it's available in the Plan tab
      if (
        name === "selected_icds" ||
        name === "selected_icfs" ||
        name === "selected_additional_ichi" ||
        name === "icf_data" ||
        name === "ichi_data"
      ) {
        setAssessmentsValues((v) => {
          const newValues = { ...v };
          // Update ALL tabs with the ICD-related data to ensure persistence
          ["subjective", "objective", "assessment", "plan"].forEach(tab => {
            newValues[tab] = {
              ...newValues[tab],
              [name]: value
            };
          });
          return newValues;
        });
        return;
      }
      
      // =========================
      // OTOSCOPIC EXTRACT INTERCEPT
      // =========================
      if (name === "otoscopic_report" && value?.data) {
        await handleOtoscopicUpload(value);
        return;
      }

      // =========================
      // TYMPANOGRAM EXTRACT INTERCEPT
      // =========================
      if (
        (name === "tympanometry_report" ||
          name === "tympanometry_report_right" ||
          name === "tympanometry_report_left") &&
        value
      ) {
        setAssessmentsValues((v) => ({
          ...v,
          [activeTab]: {
            ...(v[activeTab] || {}),
            [name]: value,
          },
        }));

        await extractTympanogramValues(value).catch((error) => {
          console.error("Tympanogram extraction failed", error);
        });
        return;
      }

      // =========================
      // SUB ASSESSMENT SAVED — populate ICF data only after save
      // =========================
      if (name === "__sub_assessment_saved__" && typeof value === "object" && value?.name) {
        const formName = value.name;
        const icfData = pendingFormIcfRef.current?.[formName];
        if (icfData && Array.isArray(icfData)) {
          setAssessmentsValues((v) => {
            const newValues = { ...v };
            ["subjective", "objective", "assessment", "plan"].forEach(tab => {
              const existing = newValues[tab]?.assessment_form_icf || {};
              newValues[tab] = {
                ...newValues[tab],
                assessment_form_icf: {
                  ...existing,
                  [formName]: icfData,
                },
              };
            });
            return newValues;
          });
        }
        // Don't persist this to main assessment values
        return;
      }

      // =========================
      // MAIN ASSESSMENT VALUES
      // =========================
      setAssessmentsValues((v) => ({
        ...v,
        [activeTab]: {
          ...v[activeTab],
          [name]: value,
        },
      }));
    },
    [activeTab, sessionId, subAssessmentTemplate, sessionSubAssessmentIds],
  );

  // ── Otoscopic Extract Handler ──────────────────────────────────────────────
  const handleOtoscopicUpload = async (file) => {
    try {
      setIsOtoscopicLoading(true);
      const base64Data = file.data.split(",")[1];
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const pdfBlob = new Blob([byteArray], { type: file.type });
      const pdfFile = new File([pdfBlob], file.filename, { type: file.type });
      const formData = new FormData();
      formData.append("file", pdfFile);
      const token = localStorage.getItem("access_token");
      const response = await fetch(OTOSCOPIC_EXTRACT_URL, {
        method: "POST",
        headers: token ? { "Authorization": `Bearer ${token}` } : {},
        body: formData
      });
      const result = await response.json();
      const rightImage = result?.data?.canals?.right?.image?.data;
      const leftImage = result?.data?.canals?.left?.image?.data;
      setAssessmentsValues((v) => ({
        ...v,
        objective: {
          ...(v.objective || {}),
          otoscopic_right_image: rightImage ? `data:image/jpeg;base64,${rightImage}` : "",
          otoscopic_left_image: leftImage ? `data:image/jpeg;base64,${leftImage}` : ""
        }
      }));
    } catch (error) {
      console.error("Otoscopic extraction failed", error);
    } finally {
      setIsOtoscopicLoading(false);
    }
  };

  // ── Tympanogram Extract Handlers ─────────────────────────────────────────
  const unwrapTympanogramPayload = (payload) => {
    let current = payload;

    while (current && typeof current === "object") {
      if (
        current.right_ear ||
        current.left_ear ||
        current.rightEar ||
        current.leftEar ||
        current.volume ||
        current.pressure ||
        current.compliance ||
        current.ecv ||
        current.peak_pressure ||
        current.static_compliance
      ) {
        return current;
      }

      if (current.data) {
        current = current.data;
        continue;
      }

      if (current.result) {
        current = current.result;
        continue;
      }

      if (current.payload) {
        current = current.payload;
        continue;
      }

      if (current.response) {
        current = current.response;
        continue;
      }

      break;
    }

    return current || {};
  };

  const getEarValues = (payload, ear) => {
    const normalized = unwrapTympanogramPayload(payload);
    const earData =
      normalized[`${ear}_ear`] ||
      normalized[`${ear}Ear`] ||
      normalized[ear] ||
      {};

    return {
      volume:
        earData.volume ??
        earData.ecv ??
        normalized[`${ear}_volume`] ??
        normalized[`${ear}Volume`] ??
        normalized[`ecv_${ear === "right" ? "r" : "l"}`] ??
        normalized.volume,
      pressure:
        earData.pressure ??
        earData.peak_pressure ??
        normalized[`${ear}_pressure`] ??
        normalized[`${ear}Pressure`] ??
        normalized[`peak_pressure_${ear === "right" ? "r" : "l"}`] ??
        normalized.pressure,
      compliance:
        earData.compliance ??
        earData.static_compliance ??
        normalized[`${ear}_compliance`] ??
        normalized[`${ear}Compliance`] ??
        normalized[`static_compliance_${ear === "right" ? "r" : "l"}`] ??
        normalized.compliance,
    };
  };

  const applyTympanogramResult = (payload) => {
    const right = getEarValues(payload, "right");
    const left = getEarValues(payload, "left");

    const extractedFields = {
      peak_pressure: {
        ...(right.pressure !== undefined && right.pressure !== null && right.pressure !== ""
          ? { peak_pressure_r: valueToText(right.pressure) }
          : {}),
        ...(left.pressure !== undefined && left.pressure !== null && left.pressure !== ""
          ? { peak_pressure_l: valueToText(left.pressure) }
          : {}),
      },
      static_compliance: {
        ...(right.compliance !== undefined && right.compliance !== null && right.compliance !== ""
          ? { static_compliance_r: valueToText(right.compliance) }
          : {}),
        ...(left.compliance !== undefined && left.compliance !== null && left.compliance !== ""
          ? { static_compliance_l: valueToText(left.compliance) }
          : {}),
      },
      ecv: {
        ...(right.volume !== undefined && right.volume !== null && right.volume !== ""
          ? { ecv_r: valueToText(right.volume) }
          : {}),
        ...(left.volume !== undefined && left.volume !== null && left.volume !== ""
          ? { ecv_l: valueToText(left.volume) }
          : {}),
      },
      ...(right.pressure !== undefined && right.pressure !== null && right.pressure !== ""
        ? { peak_pressure_r: valueToText(right.pressure) }
        : {}),
      ...(left.pressure !== undefined && left.pressure !== null && left.pressure !== ""
        ? { peak_pressure_l: valueToText(left.pressure) }
        : {}),
      ...(right.compliance !== undefined && right.compliance !== null && right.compliance !== ""
        ? { static_compliance_r: valueToText(right.compliance) }
        : {}),
      ...(left.compliance !== undefined && left.compliance !== null && left.compliance !== ""
        ? { static_compliance_l: valueToText(left.compliance) }
        : {}),
      ...(right.volume !== undefined && right.volume !== null && right.volume !== ""
        ? { ecv_r: valueToText(right.volume) }
        : {}),
      ...(left.volume !== undefined && left.volume !== null && left.volume !== ""
        ? { ecv_l: valueToText(left.volume) }
        : {}),
    };

    setAssessmentsValues((prev) => {
      const next = { ...prev };

      ["subjective", "objective", "assessment", "plan"].forEach((tab) => {
        next[tab] = {
          ...(next[tab] || {}),
          ...extractedFields,
        };
      });

      return {
        ...next,
        [activeTab]: {
          ...(next[activeTab] || {}),
          ...extractedFields,
        },
      };
    });
  };

  const buildTympanogramUploadFile = (value) => {
    if (value instanceof File || value instanceof Blob) {
      return value;
    }

    if (value && typeof value === "object" && typeof value.data === "string") {
      const base64Data = value.data.includes(",") ? value.data.split(",")[1] : value.data;
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i += 1) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: value.type || "application/octet-stream" });
      return new File([blob], value.filename || value.name || "tympanogram-report", {
        type: value.type || "application/octet-stream",
      });
    }

    return null;
  };

  const extractTympanogramValues = async (value) => {
    const file = buildTympanogramUploadFile(value);
    if (!file) return;

    setProcessingOCR(true);
    try {
      const fetchingFields = {
        peak_pressure: {
          peak_pressure_r: "Fetching...",
          peak_pressure_l: "Fetching...",
        },
        static_compliance: {
          static_compliance_r: "Fetching...",
          static_compliance_l: "Fetching...",
        },
        ecv: {
          ecv_r: "Fetching...",
          ecv_l: "Fetching...",
        },
      };

      setAssessmentsValues((prev) => {
        const next = { ...prev };
        ["subjective", "objective", "assessment", "plan"].forEach((tab) => {
          next[tab] = {
            ...(next[tab] || {}),
            ...fetchingFields,
          };
        });

        return {
          ...next,
          [activeTab]: {
            ...(next[activeTab] || {}),
            ...fetchingFields,
          },
        };
      });

      const formData = new FormData();
      formData.append("file", file);
      const token = localStorage.getItem("access_token");

      const response = await fetch(TYMPANOGRAM_EXTRACT_URL, {
        method: "POST",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Tympanogram extraction failed");
      }

      const result = await response.json();
      applyTympanogramResult(result);
    } finally {
      setProcessingOCR(false);
    }
  };

  // UI Components for rendering the assessment forms and sub assessments tab-wise will go here
  return (
    <PatientContext.Provider value={{ patient }}>
      {/* Referral Modal */}
      {isReferralModal && (
        <ReferralModal
          patient={patient}
          activeDepartment={department}
          onClose={() => setIsReferralModal(false)}
        />
      )}
      {/* Toast Notifications */}
      {toast && (
        <Toast
          message={toast.message}
          variant={toast.variant}
          onClose={() => setToast(null)}
        />
      )}
      {/* Confirmation Modal  */}
      {isConfirmModal && (
        <ConfirmModal
          variant="submit"
          title="Submit Assessment?"
          confirmLabel="Submit Assessment"
          onConfirm={async () => {
            // save final plan data first
            await handleAction("next");
            // then end session
            await handleEndSession();
          }}
          onCancel={() => setIsConfirmModal(false)}
          message="You are about to finalise and submit this assessment."
          meta={
            patient
              ? [
                  {
                    label: "Patient",
                    value: patient.email || patient.name || "—",
                  },
                  {
                    label: "Visit Type",
                    value: "INITIAL",
                  },
                  {
                    label: "Date",
                    value: localDateTimeString(new Date()),
                  },
                ]
              : []
          }
          checklist={[
            "All SOAP sections have been reviewed",
            "Assessment data is accurate and complete",
            "Submission cannot be edited after confirmation",
          ]}
        />
      )}
      {sectionPreview && (
        <AssessmentSectionPreviewModal
          title={sectionPreview.title}
          schema={sectionPreview.schema}
          values={sectionPreview.values}
          assessmentRegistry={sectionPreview.assessmentRegistry}
          entries={sectionPreview.entries}
          patient={patient}
          excludeSubAssessments={!sectionPreview.entries}
          onClose={() => setSectionPreview(null)}
        />
      )}
      <div style={S.page}>
        {/* Referral and Start Assessment Button UI */}
        <div style={S.actionBar}>
          {/* Session Start / Ended Button UI */}
          <button
            style={{
              opacity: isSessionActive ? 0.7 : 1,
              transition: "background .15s, opacity .15s",
              color: isSubmitted ? "#6b7280" : sessionId ? "#0369a1" : "#fff",
              cursor:
                isSessionActive || isSubmitted || sessionId
                  ? "not-allowed"
                  : "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              background: isSubmitted
                ? "#e5e7eb"
                : sessionId
                  ? "#e0f2fe"
                  : "#0284c7",
              border:
                sessionId && !isSubmitted ? "1.5px solid #bae6fd" : "none",
              borderRadius: 6,
              padding: "6px 16px",
              fontSize: 12,
              fontWeight: 700,
            }}
            disabled={isSessionActive || !!sessionId || isSubmitted}
            onClick={
              !sessionId && !isSessionActive ? handleStartSession : undefined
            }
            onMouseEnter={(e) => {
              if (!sessionId && !isSubmitted)
                e.currentTarget.style.background = "#0369a1";
            }}
            onMouseLeave={(e) => {
              if (!sessionId && !isSubmitted)
                e.currentTarget.style.background = "#0284c7";
            }}
            title={
              isSubmitted
                ? "Session ended"
                : sessionId
                  ? `Session active: ${sessionId}`
                  : "Start a new assessment session"
            }
          >
            {sessionId
              ? "✓ Started"
              : isSessionActive
                ? "Starting..."
                : "Start"}
          </button>
          {/* Referral Button UI */}
          <button
            style={{
              border: "none",
              display: "inline-flex",
              alignItems: "center",
              borderRadius: 6,
              padding: "6px 14px",
              fontSize: 12,
              background: sessionId || isSubmitted ? "#0284c7" : "#d1d5db",
              fontWeight: 600,
              color: sessionId || isSubmitted ? "#fff" : "#6b7280",
              cursor: sessionId || isSubmitted ? "pointer" : "not-allowed",
              transition: "background .15s",
            }}
            disabled={!(sessionId || isSubmitted)}
            onClick={
              sessionId || isSubmitted
                ? () => setIsReferralModal(true)
                : undefined
            }
            onMouseLeave={(e) => {
              if (sessionId || isSubmitted) {
                e.currentTarget.style.background = "#0284c7";
              }
            }}
            onMouseEnter={(e) => {
              if (sessionId || isSubmitted) {
                e.currentTarget.style.background = "#0369a1";
              }
            }}
          >
            Referral
          </button>
        </div>
        {/* Patient Details in top of the page */}
        <div style={S.patientCardWrap}>
          <PatientCard patient={patient} />
        </div>
        {/* Assessment Tabs */}
        <div style={S.soapShell}>
          {/* Tab Buttons UI */}
          <div style={S.tabBar}>
            {TABS.map((tab) => {
              const isActive = activeTab === tab;
              const hasData = ""; // ----= !!formDataIds[tab];
              // Tab Button
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    ...S.tab,
                    ...(isActive ? S.tabActive : {}),
                  }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  {hasData && (
                    <span
                      title="Template data linked"
                      style={{
                        display: "inline-block",
                        flexShrink: 0,
                        background: isActive ? "#2563eb" : "#10b981",
                        marginLeft: 6,
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
          {/* Tab Content UI */}
          <div style={S.tabContent}>
            {isLoading ? (
              <div style={S.contentPad}>
                <ShimmerForm rows={6} />
              </div>
            ) : error ? (
              <div style={S.contentPad}>
                <EmptyState
                  icon="⚠️"
                  title="Failed to load form"
                  message="Could not fetch the assessment form. Please check your connection and try again."
                  action={{ label: "Retry", onClick: loadTemplates }}
                />
              </div>
            ) : !templates[activeTab] ? (
              <div style={S.contentPad}>
                <EmptyState
                  icon="📋"
                  title="No form available"
                  message={`The ${activeTab} section hasn't been configured yet.`}
                />
              </div>
            ) : (
              (() => {
                // Patch equipment-list fields in the plan tab with onBook handler
                const handleEquipmentBook = (equipment) => {
                  setSelectedEquipment(equipment);
                  setEquipmentBookingOpen(true);
                };

                let activeSchema = templates[activeTab];
                if (activeTab === "plan" && activeSchema) {
                  const patchFields = (fields) =>
                    fields.map((f) => {
                      if (f.type === "equipment-list") {
                        return {
                          ...f,
                          onBook: handleEquipmentBook,
                          bookedEquipmentIds,
                        };
                      }
                      return f;
                    });

                  activeSchema = {
                    ...activeSchema,
                    sections: (activeSchema.sections || []).map((sec) => ({
                      ...sec,
                      fields: patchFields(sec.fields || []),
                    })),
                    // also patch top-level fields if the schema uses that shape
                    ...(activeSchema.fields
                      ? { fields: patchFields(activeSchema.fields) }
                      : {}),
                  };
                }

                return (
                  <>
                  {processingOCR && (
                    <div style={{
                      padding: "12px 16px",
                      marginBottom: "16px",
                      background: "#e0f2fe",
                      border: "1px solid #0ea5e9",
                      borderRadius: "8px",
                      color: "#0c4a6e",
                      fontWeight: 600,
                      textAlign: "center"
                    }}>
                      Fetching tympanogram values... Please wait
                    </div>
                  )}
                  <CommonFormBuilder
                    readOnly={false}
                    onChange={onChange}
                    submitted={isSubmitted}
                    onAction={handleAction}
                    schema={activeSchema}
                    values={assessmentsValues[activeTab] || {}}
                    assessmentRegistry={
                      subAssessmentTemplate[activeTab] || {}
                    }
                    sessionSubAssessmentIds={sessionSubAssessmentIds}
                    parentSections={templates?.[activeTab]?.sections || []}
                    enableSectionPreview={false}
                  >
                    <div style={S.actionRow}>
                      {activeTab === "plan" && (
                        <button
                          type="button"
                          style={S.bookAppointmentBtn}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "#0b4fd4")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "#0d6efd")}
                          onClick={() => setAppointmentModalOpen(true)}
                        >
                          Book Appointment
                        </button>
                      )}
                      {(isOptometry || isAudiology || isPsychology) &&
                        activeTab === "plan" && (
                          <button
                            type="button"
                            style={S.previewBtn}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = "#f1f5f9";
                              e.currentTarget.style.borderColor = "#94a3b8";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "#fff";
                              e.currentTarget.style.borderColor = "#cbd5e1";
                            }}
                            onClick={() =>
                              setSectionPreview({
                                title: "Full Assessment Preview",
                                entries: buildFullSoapReportEntries({
                                  tabs: TABS,
                                  templates,
                                  assessmentsValues,
                                  subAssessmentTemplate,
                                  supplementaryAppender: isOptometry
                                    ? appendOptometrySoapSupplements
                                    : isAudiology
                                      ? appendAudiologySoapSupplements
                                      : undefined,
                                }),
                              })
                            }
                          >
                            Preview
                          </button>
                        )}
                      <button
                        style={activeTab === "plan" ? S.submitBtn : S.nextBtn}
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "#2563eb")
                        }
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background =
                            activeTab === "plan" ? "#1d4ed8" : "#1a6fc4")
                        }
                        onClick={() => {
                          // FINAL STEP
                          if (activeTab === "plan") {
                            setIsConfirmModal(true);

                            return;
                          }

                          // NORMAL NEXT
                          handleAction("next");
                        }}
                      >
                        {activeTab === "plan"
                          ? "Submit Assessment"
                          : (() => {
                              const currentIndex = TABS.indexOf(activeTab);

                              const nextTab =
                                currentIndex < TABS.length - 1
                                  ? TABS[currentIndex + 1]
                                  : null;

                              return nextTab
                                ? `Next :${nextTab.charAt(0).toUpperCase() + nextTab.slice(1)} →`
                                : "Submit";
                            })()}
                      </button>
                    </div>
                  </CommonFormBuilder>
                  </>
                );
              })()
            )}
          </div>
        </div>
      </div>
      <EquipmentBookingPopup
        open={equipmentBookingOpen}
        equipmentOptions={equipmentOptions}
        selectedEquipment={selectedEquipment}
        onClose={() => setEquipmentBookingOpen(false)}
        onBooked={(equipment) => {
          const entry = (() => {
            if (!equipment) return null;
            if (typeof equipment === "object") {
              return {
                id: equipment.id || equipment.value || String(equipment),
                name: equipment.name || equipment.label || String(equipment),
                status: equipment.status || "Booked",
              };
            }
            const option = equipmentOptions.find(
              (item) => item.value === equipment || item.id === equipment,
            );
            return {
              id: equipment,
              name: option?.label || option?.name || String(equipment),
              status: "Booked",
            };
          })();

          if (!entry?.id) {
            setEquipmentBookingOpen(false);
            return;
          }

          setBookedEquipmentIds((prev) =>
            prev.includes(entry.id) ? prev : [...prev, entry.id],
          );

          if (equipmentStorageKey) {
            try {
              const stored = getStoredEquipmentItems();
              const exists = stored.some((item) => item.id === entry.id);
              const updated = exists ? stored : [entry, ...stored];
              localStorage.setItem(equipmentStorageKey, JSON.stringify(updated));
            } catch (e) {
              console.error("Failed to save booked equipment", e);
            }
          }

          setEquipmentBookingOpen(false);
        }}
      />
      {department === "Audiology" && (
        <AudiologySttFloatingMic onToast={setToast} />
      )}
      <BookAppointmentModal
        open={appointmentModalOpen}
        row={{
          id: bookingQueueRow?.booking_id,
          patient: patient?.full_name || patient?.name || "",
          refId: patient?.referral_id || "",
          department,
          priority: "Medium",
        }}
        initialMode="doctor"
        onClose={() => setAppointmentModalOpen(false)}
        onConfirm={(data) => {
          console.log("Booking confirmed", data);
          setAppointmentModalOpen(false);
        }}
        onRequestOverride={() => {}}
        onAddWaitlist={() => {}}
        onConflict={() => {}}
        onCancel={() => setAppointmentModalOpen(false)}
      />
    </PatientContext.Provider>
  );
}

/* ===================== STYLES ===================== */
const S = {
  page: {
    background: "#f0f4f8",
    minHeight: "100vh",
    fontFamily: "'Inter', 'Segoe UI', Roboto, sans-serif",
    padding: "16px",
  },

  actionBar: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 8,
    marginBottom: 10,
  },

  patientCardWrap: {
    borderRadius: 10,
    overflow: "hidden",
    boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
    marginBottom: 14,
    border: "1px solid #e0f2fe",
  },

  soapShell: {
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    border: "1px solid #e2e8f0",
  },

  /* Tab bar — full width, equal columns */
  tabBar: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    background: "#fff",
  },
  tab: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px 8px",
    background: "none",
    border: "none",
    borderBottom: "3px solid transparent",
    marginBottom: -1,
    fontSize: 13,
    fontWeight: 500,
    color: "#64748b",
    cursor: "pointer",
    transition: "color .15s",
    whiteSpace: "nowrap",
    letterSpacing: "0.01em",
  },
  tabActive: {
    color: "#2563eb",
    fontWeight: 700,
    borderBottomColor: "#2563eb",
    background: "none",
  },

  /* Tab content — full width */
  tabContent: {
    width: "100%",
  },
  contentPad: {
    padding: "24px",
  },

  /* Action row */
  actionRow: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
    padding: "16px 24px",
    borderTop: "1px solid #e2e8f0",
    background: "#f8fafc",
  },
  previewBtn: {
    background: "#fff",
    color: "#334155",
    border: "1px solid #cbd5e1",
    borderRadius: 6,
    padding: "9px 20px",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    transition: "background .15s, border-color .15s",
  },
  nextBtn: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "9px 24px",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    transition: "background .15s",
    boxShadow: "0 1px 4px rgba(37,99,235,0.2)",
  },
  bookAppointmentBtn: {
    background: "#0d6efd",
    color: "#fff",
    border: "1px solid #0d6efd",
    borderRadius: 6,
    padding: "9px 20px",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    transition: "background .15s",
  },
  submitBtn: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "9px 24px",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    transition: "background .15s",
    boxShadow: "0 1px 4px rgba(37,99,235,0.2)",
  },
};
