import {
  lazy, Suspense,
  useEffect, useState, useCallback, useMemo, 
  createContext, useContext, memo
} from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import { localDateTimeString } from "../../../shared/utils/dateFormatter";
import { ShimmerForm } from "../../../shared/ui/Shimmer";
import EmptyState from "../../../shared/ui/EmptyState";
import ConfirmModal from "../../../shared/ui/ConfirmModal";
import Toast from "../../../shared/ui/Toast";
import ReferralModal from "../../../shared/ui/ReferralModal";
import PatientCard from "../../../shared/cards/PatientCard";

// Schema
import OPTO_FLWP_SCHEMA from "../../../schema/optometry/followup"
import { SCHEMA } from "../../../schema/optometry/binocular_vision_questionnaire";
import { ASSESSMENT_TABS, TAB_META } from "../../../schema/actions"


// ── Lazy-loaded assessment components ──────────────────────────────────────
const BinocularVisionAssessment   = lazy(() => import("../BinocularVisionAssessment"));
const RefractionAssessment        = lazy(() => import("../RefractionAssessment"));
const VisionAssessment            = lazy(() => import("../VisionAssessment"));
const OcularHealthAssessment      = lazy(() => import("../OcularHealthAssessment"));
const SpecialDiagnosticAssessment = lazy(() => import("../SpecialDiagnostic"));
const LVQoLForm                   = lazy(() => import("../LowVisionQualityAssessment"));
const BrainVisionInjury           = lazy(() => import("../BrainVisionInjury"));
const VisualFunctionForm          = lazy(() => import("../VisionFunctionalAssessment"));
const BVDAssessment               = lazy(() => import("../BvdqAssessment"));
const LowVisionAssessment         = lazy(() => import("../LowVisionAssessment"));

const AssessmentFallback = <ShimmerForm rows={6} />;

// ── Context ────────────────────────────────────────────────────────────────
// Carries patient + the questionaire FormData ID map + save helper
const PatientContext = createContext(null);

// Registry key → exact name as returned in assessment_ids from the backend
const REGISTRY_KEY_TO_NAME = {
  BINOCULAR_VISION:      "Binocular Vision",
  REFRACTION:            "Refraction Assessment",
  VISION_DRIVING:        "Vision for Driving",
  OCULAR_HEALTH:         "Ocular Health / Structure",
  SPECIAL_DIAGNOSTIC:    "Special Diagnostic",
  LOW_VISION_ASSESSMENT: "Low Vision Assessment",
  VISUAL_FUNCTION:       "Visual Function Questionnaire",
  LVQOL:                 "Low Vision Quality of Life Questionnaire (LVQoL)",
  BRAIN_VISION:          "Brain Injury Vision Symptoms Survey (BIVSS)",
  BVDQ:                  "Binocular Vision Dysfunction Questionnaire (BVDQ)",
  BV_QUESTIONNAIRE: "Binocular Vision Questionnaire",
};

const BVQuestionnaire = memo(function BVQuestionnaire({
  values,
  onChange,
  onBack,
  layout = "root"
}) {
  const [submitted, setSubmitted] = useState(false);

  const onAction = useCallback((type) => {
    if (type === "submit") setSubmitted(true);
    if (type === "back") onBack?.();
  }, [onBack]);

  return (
    <CommonFormBuilder
      schema={SCHEMA}
      values={values}
      onChange={onChange}
      submitted={submitted}
      onAction={onAction}
      layout={layout}
    />
  );
});
// ── Adapter factory ────────────────────────────────────────────────────────
// Each adapter: reads its FormData ID from context, loads existing data,
// auto-saves on every field change (1 s debounce).
function makeAdapter(Component, activeKey, registryKey) {
  const Adapter = memo(function Adapter({ onChange: outerOnChange, layout }) {
    const ctx = useContext(PatientContext);
    const patient          = ctx?.patient   ?? ctx;   // backward-compat
    const [values,  setValues]  = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = useCallback((name, value) => {
      setValues(v => {
        const next = { ...v, [name]: value };
        return next;
      });
    }, []);

    const handleBack = useCallback(() => {
      outerOnChange(activeKey, null);
    }, [outerOnChange]);

    if (loading) return <ShimmerForm rows={5} />;

    return (
      <Suspense fallback={AssessmentFallback}>
        <Component
          patient={patient}
          values={values}
          onChange={handleChange}
          onBack={handleBack}
          layout={layout}
        />
      </Suspense>
    );
  });
  return Adapter;
}

const BinocularVisionAdapter    = makeAdapter(BinocularVisionAssessment,  "optometry_assessments_active", "BINOCULAR_VISION");
const RefractionAdapter         = makeAdapter(RefractionAssessment,        "optometry_assessments_active", "REFRACTION");
const VisionAdapter             = makeAdapter(VisionAssessment,            "optometry_assessments_active", "VISION_DRIVING");
const OcularHealthAdapter       = makeAdapter(OcularHealthAssessment,      "optometry_assessments_active", "OCULAR_HEALTH");
const SpecialDiagnosticAdapter  = makeAdapter(SpecialDiagnosticAssessment, "optometry_assessments_active", "SPECIAL_DIAGNOSTIC");
const LVQoLAdapter              = makeAdapter(LVQoLForm,                   "optometry_assessments_active", "LVQOL");
const BrainVisionAdapter        = makeAdapter(BrainVisionInjury,           "optometry_assessments_active", "BRAIN_VISION");
const VisualFunctionAdapter     = makeAdapter(VisualFunctionForm,          "optometry_assessments_active", "VISUAL_FUNCTION");
const BVDQAdapter               = makeAdapter(BVDAssessment,               "optometry_assessments_active", "BVDQ");
const LowVisionAdapter          = makeAdapter(LowVisionAssessment,         "low_vision_assessment_active", "LOW_VISION_ASSESSMENT");
const BVQuestionnaireAdapter =
  makeAdapter(
    BVQuestionnaire,
    "optometry_assessments_active",
    "BV_QUESTIONNAIRE"
  );

export const OPTOMETRY_ASSESSMENT_REGISTRY = {
  BINOCULAR_VISION:      BinocularVisionAdapter,
  REFRACTION:            RefractionAdapter,
  VISION_DRIVING:        VisionAdapter,
  OCULAR_HEALTH:         OcularHealthAdapter,
  SPECIAL_DIAGNOSTIC:    SpecialDiagnosticAdapter,
  LVQOL:                 LVQoLAdapter,
  BRAIN_VISION:          BrainVisionAdapter,
  VISUAL_FUNCTION:       VisualFunctionAdapter,
  BVDQ:                  BVDQAdapter,
  LOW_VISION_ASSESSMENT: LowVisionAdapter,
  BV_QUESTIONNAIRE: BVQuestionnaireAdapter,
};

/** Follow-up optometry SOAP assessment (conditional sections vs initial). */
export default function OptometryFollowUpAssessment({
  patient,
  onSubmit,
  onBack,
  savedValues          = null,
  readOnly             = false,
  initialSessionId     = null,   // pre-seeded when opened via direct link
  initialAssessmentIds = [],     // pre-seeded assessment_ids array
}) {
  const [values,        setValues]        = useState(readOnly && savedValues ? savedValues : {});
  const [submitted,     setSubmitted]     = useState(readOnly);
  const [activeTab,     setActiveTab]     = useState("subjective");
  const [forms,         setForms]         = useState([]);  // kept for future API integration
  const [showConfirm,   setShowConfirm]   = useState(false);
  const [isDirty,       setIsDirty]       = useState(false);
  const [toast,         setToast]         = useState(null);
  const [showReferral,  setShowReferral]  = useState(false);
  const [starting,      setStarting]      = useState(false);
  const [tabLoading,    setTabLoading]    = useState(false);

  const isFollowup = true;

  const storageKey = useMemo(() => {
    if (!patient || readOnly) return null;
    return `optometry_followup_draft_${patient.id}`;
  }, [patient, readOnly]);

  useEffect(() => {
    if (readOnly && savedValues) { setValues(savedValues); setSubmitted(true); return; }
    if (!storageKey) return;
    const saved = localStorage.getItem(storageKey);
    if (saved) setValues(JSON.parse(saved).values || {});
  }, [storageKey, readOnly, savedValues]);

  useEffect(() => {
    if (!patient || readOnly) return;
    setValues(v => ({
      ...v,
      pmh_from_registration:           patient.medical_history   || "No data available",
      family_history_from_registration: patient.diagnosis_history || "No data available",
      allergies_from_registration:      patient.allergies         || "No data available",
    }));
  }, [patient, readOnly]);

  const sectionShowIf = (key) => (isFollowup ? { field: "general_questions", includes: key } : undefined);
  const sectionShowIfAnd = (key, andCond) =>
  isFollowup ? { field: "general_questions", includes: key, and: andCond } : (andCond || undefined);

  const schemaMap = {
    subjective: OPTO_FLWP_SCHEMA.SUBJECTIVE,
    objective: OPTO_FLWP_SCHEMA.OBJECTIVE,
    assessment: OPTO_FLWP_SCHEMA.ASSESSMENT,
    plan: OPTO_FLWP_SCHEMA.PLAN
  };

  useEffect(() => {
    if (!isDirty || readOnly) return;
    const fn = (e) => { e.preventDefault(); e.returnValue = ""; };
    window.addEventListener("beforeunload", fn);
    return () => window.removeEventListener("beforeunload", fn);
  }, [isDirty, readOnly]);

  const onChange = useCallback((name, value) => {
    if (readOnly) return;
    setIsDirty(true);
    setValues(v => {
      const next = { ...v, [name]: value };
      return next;
    });
  }, [readOnly, activeTab, storageKey]);

  const handleAction = useCallback((type) => {
    if (type === "back") { onBack?.(); return; }
    if (readOnly) return;
    if (type === "next") {
      const idx = ASSESSMENT_TABS.indexOf(activeTab);
      if (idx < ASSESSMENT_TABS.length - 1) setActiveTab(ASSESSMENT_TABS[idx + 1]);
      return;
    }
    if (type === "clear") { setValues({}); setSubmitted(false); localStorage.removeItem(storageKey); }
    if (type === "save") {
      // Persist draft locally
      localStorage.setItem(storageKey, JSON.stringify({ values, updatedAt: new Date() }));
      setToast({ message: 'Draft saved locally (start a session to sync)', variant: 'success' });
    }
  }, [readOnly, activeTab, storageKey, values, onBack]);

  const activeTabIdx = ASSESSMENT_TABS.indexOf(activeTab);

  /* ===================== RENDER ===================== */
  return (
    <PatientContext.Provider value={{ patient }}>
      {showReferral && (
        <ReferralModal patient={patient} onClose={() => setShowReferral(false)} />
      )}
      {toast && (
        <Toast message={toast.message} variant={toast.variant} onClose={() => setToast(null)} />
      )}
      {showConfirm && (
        <ConfirmModal
          variant="submit"
          title={isFollowup ? "Submit Follow-up Visit?" : "Submit Assessment?"}
          message={isFollowup ? "You are about to submit this follow-up visit record." : "You are about to finalise and submit this optometry assessment."}
          meta={patient ? [
            { label: "Patient",    value: patient.email || patient.name || "—" },
            { label: "Visit Type", value: isFollowup ? "Follow-up" : "Initial Assessment" },
            { label: "Date",       value: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) },
          ] : []}
          checklist={[
            "All SOAP sections have been reviewed",
            "Assessment data is accurate and complete",
            "Submission cannot be edited after confirmation",
          ]}
          confirmLabel={isFollowup ? "Submit Follow-up" : "Submit Assessment"}
          onCancel={() => setShowConfirm(false)}
        />
      )}

      <div style={S.page}>
        {/* ── Start / Referral action bar (above patient card) ── */}
        <div style={S.actionBar}>
          <button
            style={{
              display: "inline-flex", alignItems: "center", gap: 5,
              borderRadius: 6, padding: "6px 16px", fontSize: 12, fontWeight: 700,
              transition: "background .15s, opacity .15s",
              opacity: starting ? 0.7 : 1,
              cursor: starting ? "not-allowed" : "pointer",
              background: "#0284c7",
              color: "#fff",
              border:"none",
            }}
          >
            {starting ? "Starting…" : "Start"}
          </button>
          <button
            style={{
              display: "inline-flex", alignItems: "center",
              background: "#0284c7", border: "none", color: "#fff",
              borderRadius: 6, padding: "6px 14px", fontSize: 12,
              fontWeight: 600, cursor: "pointer", transition: "background .15s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#0369a1"}
            onMouseLeave={e => e.currentTarget.style.background = "#0284c7"}
            onClick={() => setShowReferral(true)}
          >
            Referral
          </button>
        </div>

        {/* Patient header */}
        <div style={S.patientCardWrap}>
          <PatientCard patient={patient} />
        </div>

        {/* SOAP tab shell */}
        <div style={S.soapShell}>
          {/* Tab bar — full width equal columns */}
          <div style={S.tabBar}>
            {ASSESSMENT_TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  style={{ ...S.tab, ...(isActive ? S.tabActive : {}) }}
                  onClick={() => setActiveTab(tab)}
                >
                  {TAB_META[tab].label}
                </button>
              );
            })}
          </div>

          {/* Tab content — full width */}
          <div style={S.tabContent}>
            {tabLoading ? (
              <div style={S.contentPad}><ShimmerForm rows={6} /></div>
            ) : !schemaMap[activeTab] ? (
              <div style={S.contentPad}>
                <EmptyState
                  icon="📋"
                  title="No form available"
                  message={`The ${activeTab} section hasn't been configured yet.`}
                />
              </div>
            ) : (
              <CommonFormBuilder
                schema={schemaMap[activeTab]}
                values={values}
                onChange={onChange}
                submitted={submitted}
                onAction={handleAction}
                assessmentRegistry={OPTOMETRY_ASSESSMENT_REGISTRY}
                readOnly={readOnly}
              >
                {!readOnly && activeTab !== "plan" && (
                  <div style={S.actionRow}>
                    <button
                      style={S.nextBtn}
                      onMouseEnter={e => e.currentTarget.style.background = "#1a6fc4"}
                      onMouseLeave={e => e.currentTarget.style.background = "#2563eb"}
                      onClick={() => handleAction("next")}
                    >
                      Next: {TAB_META[ASSESSMENT_TABS[activeTabIdx + 1]]?.label} →
                    </button>
                  </div>
                )}
                {!readOnly && activeTab === "plan" && (
                  <div style={S.actionRow}>
                    <button
                      style={S.submitBtn}
                      onMouseEnter={e => e.currentTarget.style.background = "#1d4ed8"}
                      onMouseLeave={e => e.currentTarget.style.background = "#2563eb"}
                      onClick={() => setShowConfirm(true)}
                    >
                      {isFollowup ? "Submit Follow-up Visit" : "Submit Assessment"}
                    </button>
                  </div>
                )}
              </CommonFormBuilder>
            )}
          </div>
        </div>
      </div>
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

/* ── Patient header card styles ─────────────────────────────────────────── */
// end of file
