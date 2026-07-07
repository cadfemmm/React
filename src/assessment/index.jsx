import { useEffect, useState, useCallback, createContext } from "react";
import { createWorker } from "tesseract.js";

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

// Schema Load
import actions from "../schema/actions.js";
import { OTOSCOPIC_EXTRACT_URL } from "../platform/config/api.config";

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
  const [assessmentsValues, setAssessmentsValues] = useState(() => {
    return { subjective: {}, objective: {}, assessment: {}, plan: {} };
  });
  const [subAssessmentTemplate, setSubAssessmentTemplate] = useState({
    subjective: {},
    objective: {},
    assessment: {},
    plan: {},
  });

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
      data.forEach((template) => {
        const key = template.assessment_type?.toLowerCase();        
        // MAIN ASSESSMENT
        if (TABS.includes(key)) {
          let processedTemplate = {
            ...template.body,
            id: template.id,
            name: template.name,
            actions: actions.ACTIONS_BUTTON,
          };
          
          // ✨ ADD ICD COMPONENTS FOR SPECIFIC DEPARTMENTS AND TABS
          if ((department === "Audiology" || department === "Optometry") && (key === "assessment" || key === "plan")) {
            
            // Choose the right component based on department
            const ICDComponent = department === "Optometry" ? OptometryICDSection : AudiologyICDSection;
            
            if (processedTemplate.sections && processedTemplate.sections[0] && processedTemplate.sections[0].fields) {
              if (key === "assessment") {
                // Add ICD selection + ICF display to Assessment tab
                processedTemplate.sections[0].fields.push({
                  type: "custom",
                  name: "icd_icf_ichi_section",
                  render: ({ values, onChange }) => {
                    return (
                      <ICDComponent 
                        values={values} 
                        onChange={onChange} 
                        mode="icd-icf" 
                      />
                    );
                  }
                });
              } else if (key === "plan") {
                // Add ICHI display to Plan tab (insert after intervention_plan if it exists)
                const fields = processedTemplate.sections[0].fields;
                
                const interventionIndex = fields.findIndex(f => f.name === "intervention_plan");
                
                const ichiComponent = {
                  type: "custom",
                  name: "ichi_section", 
                  render: ({ values, onChange }) => {
                    return (
                      <ICDComponent 
                        values={values} 
                        onChange={onChange} 
                        mode="plan" 
                      />
                    );
                  }
                };
                
                if (interventionIndex !== -1) {
                  // Insert after intervention_plan
                  fields.splice(interventionIndex + 1, 0, ichiComponent);
                } else {
                  // If no intervention_plan field, add at the end
                  fields.push(ichiComponent);
                }

                if (department === "Optometry") {
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
          
          map[key] = processedTemplate;
        }
        // SUB ASSESSMENTS
        if (template?.sub_assessment?.length) {
          subAssessment[key] = template.sub_assessment.reduce((acc, sub) => {
            const body =
              sub.body && typeof sub.body === "object" ? sub.body : {};
            acc[sub.name] = {
              ...sub,
              ...body,
              id: sub.id,
              name: sub.name,
              type: sub.type,
              score: sub.score ?? null,
              actions: actions.ACTIONS_BUTTON,
              session_id: null,
            };
            return acc;
          }, {});
        }
      });
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
      response?.data?.assessment_ids.forEach((template) => {
        const tab = template.type.toLowerCase();

        // MAIN ASSESSMENT
        if (template.is_parent === "True") {
          setTemplates((prev) => ({
            ...prev,

            [tab]: {
              ...prev[tab],
              id: template.id,
            },
          }));
        }
        // SUB ASSESSMENT
        else {
          const SOAP_TABS = ["subjective", "objective", "assessment", "plan"];

          // Helper to update session_id for a matching sub-template in a given tab
          const updateSessionId = (prev, targetTab) => {
            let matched = false;
            const newEntries = Object.entries(prev[targetTab] || {}).map(
              ([key, subTemplate]) => {
                if (
                  subTemplate.name === template.name ||
                  key === template.name
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
                [targetTab]: Object.fromEntries(newEntries),
              };
            }
            return null;
          };

          setSubAssessmentTemplate((prev) => {
            // First try the derived tab (original logic)
            const result = updateSessionId(prev, tab);
            if (result) return result;

            // Fallback: search ALL soap tabs for a matching sub-template name
            for (const soapTab of SOAP_TABS) {
              if (soapTab === tab) continue; // already tried above
              const fallbackResult = updateSessionId(prev, soapTab);
              if (fallbackResult) {
                console.log(
                  `[Start] Matched sub-template "${template.name}" in soap tab "${soapTab}" (fallback from "${tab}")`,
                );
                return fallbackResult;
              }
            }

            console.warn(
              `[Start] Could not match sub-template "${template.name}" in any tab`,
            );
            return prev;
          });
        }
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
          const subAssessmentFieldNames = Object.values(
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
      if (name === "active_assessment_id") {
        // CLOSE ACTIVE SUB ASSESSMENT
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
          const tm = await forms.fetchById(value);
          setSubAssessmentTemplate((prev) => {
            const currentTab = prev[activeTab] || {};
            const updated = Object.fromEntries(
              Object.entries(currentTab).map(([key, template]) => {
                // MATCH SELECTED ASSESSMENT
                if (
                  String(template.id) === String(value) ||
                  template.name === tm?.data?.name ||
                  key === tm?.data?.name
                ) {
                  return [
                    key,
                    {
                      ...template,
                      // IMPORTANT
                      ...tm.data.body,
                      // KEEP ACTIONS
                      actions: actions.ACTIONS_BUTTON,
                      // KEEP SESSION INSTANCE ID
                      session_id: template.session_id,
                      // KEEP ORIGINAL FORM TEMPLATE ID
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
        } catch (e) {
          setToast({
            message: "Sub Assessment form loading failed",
            variant: "error",
          });
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
      // TYMPANOGRAM OCR INTERCEPT
      // =========================
      const isRightTympanometry = name === 'tympanometry_report_right';
      const isLeftTympanometry = name === 'tympanometry_report_left';
      if ((isRightTympanometry || isLeftTympanometry) && value) {
        const isFile = value instanceof File || (value && typeof value === 'object' && value.constructor?.name === 'File');
        const isImage = isFile && (value.type?.startsWith('image/') || value.name?.match(/\.(jpg|jpeg|png|gif|bmp|webp)$/i));

        const patchActiveTab = (nextFieldValues) => {
          setAssessmentsValues((v) => ({
            ...v,
            [activeTab]: {
              ...(v[activeTab] || {}),
              ...nextFieldValues
            }
          }));
        };

        if (isFile && isImage) {
          const earSide = isRightTympanometry ? 'right' : 'left';
          patchActiveTab({ [name]: value });
          await processTympanometryImage(value, earSide);
        } else {
          patchActiveTab({ [name]: value });
        }
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
    [activeTab, sessionId],
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

  // ── Tympanogram OCR Handlers ───────────────────────────────────────────────
  const extractTympanometryValues = (text) => {
    const vals = {};
    const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);

    const volumePatterns = [
      /Volume[:\s]*([\d]+\.[\d]+|[\d]+)\s*ml/i, /Volume[:\s]*([\d]+\.[\d]+|[\d]+)ml/i,
      /Vol[:\s]*([\d]+\.[\d]+|[\d]+)\s*ml/i, /Vol[:\s]*([\d]+\.[\d]+|[\d]+)ml/i
    ];
    for (const p of volumePatterns) { const m = text.match(p); if (m) { vals.volume = m[1]; break; } }

    const mlMatches = text.match(/([\d]+\.[\d]+|[\d]+)\s*ml/gi);
    let mlNumbers = [];
    if (mlMatches) {
      mlNumbers = mlMatches.map(m => { const n = m.match(/([\d]+\.[\d]+|[\d]+)/); return n ? { str: n[1], num: parseFloat(n[1]) } : null; }).filter(n => n !== null && n.num > 0 && n.num < 10);
      mlNumbers.sort((a, b) => b.num - a.num);
    }

    if (!vals.volume && mlMatches?.length) {
      const vi = text.toLowerCase().indexOf('volume');
      if (vi !== -1) { const vm = text.substring(vi).match(/([\d]+\.[\d]+|[\d]+)\s*ml/i); if (vm) vals.volume = vm[1]; }
      else if (mlNumbers.length && mlNumbers[0].num >= 0.5 && mlNumbers[0].num <= 2.0) vals.volume = mlNumbers[0].str;
    }

    const pressurePatterns = [
      /Pressure[:\s]*([\d.-]+)\s*daPa/i, /Pressure[:\s]*([\d.-]+)daPa/i,
      /Press[:\s]*([\d.-]+)\s*daPa/i, /Press[:\s]*([\d.-]+)daPa/i
    ];
    for (const p of pressurePatterns) { const m = text.match(p); if (m) { vals.pressure = m[1]; break; } }
    if (!vals.pressure) {
      const dm = text.match(/([\d.-]+)\s*daPa/gi);
      if (dm) {
        const pi = text.toLowerCase().indexOf('pressure');
        if (pi !== -1) { const pm = text.substring(pi).match(/([\d.-]+)\s*daPa/i); if (pm) vals.pressure = pm[1]; }
        else { for (const d of dm) { const n = d.match(/([\d.-]+)/); if (n) { const num = parseFloat(n[1]); if (Math.abs(num) <= 200 && num !== 77 && num !== 81 && (Math.abs(num) < 50 || num === 0)) { vals.pressure = n[1]; break; } } } }
      }
    }

    const compliancePatterns = [
      /Compliance[:\s]*([\d]+\.[\d]+|[\d]+)\s*ml/i, /Compliance[:\s]*([\d]+\.[\d]+|[\d]+)ml/i,
      /Comp[:\s]*([\d]+\.[\d]+|[\d]+)\s*ml/i, /Comp[:\s]*([\d]+\.[\d]+|[\d]+)ml/i
    ];
    for (const p of compliancePatterns) { const m = text.match(p); if (m) { vals.compliance = m[1]; break; } }

    if (!vals.compliance && mlNumbers.length) {
      const sa = [...mlNumbers].sort((a, b) => a.num - b.num);
      const vn = vals.volume ? parseFloat(vals.volume) : null;
      for (const mv of sa) { if (mv.num >= 0.1 && mv.num <= 1.0 && (!vn || Math.abs(vn - mv.num) > 0.1)) { vals.compliance = mv.str; break; } }
      if (!vals.compliance && mlNumbers.length >= 2) { for (const mv of sa) { if (mv.num >= 0.1 && mv.num < 1.0 && (!vn || Math.abs(vn - mv.num) > 0.05)) { vals.compliance = mv.str; break; } } }
    }

    return vals;
  };

  const processTympanometryImage = async (file, earSide) => {
    setProcessingOCR(true);
    try {
      const worker = await createWorker('eng');
      await worker.setParameters({
        tessedit_char_whitelist: '0123456789.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz:mlPaGradientVolumePressureCompliance ',
        tessedit_pageseg_mode: '6',
      });
      let { data: { text } } = await worker.recognize(file);
      if (!text.match(/Volume|Pressure|Compliance|[\d]+\.[\d]+\s*ml|[\d.-]+\s*daPa/i)) {
        await worker.setParameters({ tessedit_pageseg_mode: '11' });
        const r2 = await worker.recognize(file);
        if (r2.data.text.length > text.length) text = r2.data.text;
      }
      await worker.terminate();

      const extracted = extractTympanometryValues(text);
      if (extracted.volume || extracted.pressure || extracted.compliance) {
        setAssessmentsValues((v) => {
          const updates = {};
          if (extracted.volume) updates.ecv = { ...(v.ecv || {}), [`ecv_${earSide === 'right' ? 'r' : 'l'}`]: String(extracted.volume) };
          if (extracted.pressure) updates.peak_pressure = { ...(v.peak_pressure || {}), [`peak_pressure_${earSide === 'right' ? 'r' : 'l'}`]: String(extracted.pressure) };
          if (extracted.compliance) updates.static_compliance = { ...(v.static_compliance || {}), [`static_compliance_${earSide === 'right' ? 'r' : 'l'}`]: String(extracted.compliance) };
          if (Object.keys(updates).length > 0) {
            const cnt = Object.keys(extracted).filter(k => extracted[k]).length;
            setTimeout(() => alert(`Extracted ${cnt} value(s) from ${earSide} ear tympanometry image:\n${extracted.volume ? `Volume: ${extracted.volume} ml\n` : ''}${extracted.pressure ? `Pressure: ${extracted.pressure} daPa\n` : ''}${extracted.compliance ? `Compliance: ${extracted.compliance} ml` : ''}`), 100);
            return { ...v, [activeTab]: { ...(v[activeTab] || {}), ...updates } };
          }
          return v;
        });
      } else {
        alert('Could not extract values from the image. Please enter values manually.');
      }
    } catch (error) {
      console.error('OCR processing error:', error);
      alert(`OCR error: ${error.message}`);
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
          excludeSubAssessments
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
                      🔄 Processing image with OCR... Please wait
                    </div>
                  )}
                  <CommonFormBuilder
                    readOnly={false}
                    onChange={onChange}
                    submitted={isSubmitted}
                    onAction={handleAction}
                    schema={activeSchema}
                    values={assessmentsValues[activeTab] || {}}
                    assessmentRegistry={Object.values(
                      subAssessmentTemplate[activeTab] || {},
                    )}
                    parentSections={templates?.[activeTab]?.sections || []}
                    enableSectionPreview={isPsychology}
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
                      {isPsychology && (
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
                              title: `Preview: ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`,
                              schema: activeSchema,
                              values: assessmentsValues[activeTab] || {},
                              assessmentRegistry: Object.values(
                                subAssessmentTemplate[activeTab] || {},
                              ),
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
