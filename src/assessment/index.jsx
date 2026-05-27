import { useEffect, useState, useCallback, createContext } from "react";

// Common Form Builder
import CommonFormBuilder from "../features/CommonComponenets/FormBuilder.jsx";

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

// Schema Load
import actions from "../schema/actions.js";

// API calls
import forms from "./forms.js";
import session from "./session.js";

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
          map[key] = {
            ...template.body,
            id: template.id,
            name: template.name,
            actions: actions.ACTIONS_BUTTON,
          };
        }
        // SUB ASSESSMENTS
        if (template?.sub_assessment?.length) {
          subAssessment[key] = template.sub_assessment.reduce((acc, sub) => {
            acc[sub.name] = {
              ...sub,
              id: sub.id,
              name: sub.name,
              type: sub.type,
              score: sub.score ?? null,
              body: sub.body ?? {},
              actions: actions.ACTIONS_BUTTON,
              // session will override later
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
          setSubAssessmentTemplate((prev) => ({
            ...prev,
            [tab]: Object.fromEntries(
              Object.entries(prev[tab] || {}).map(([key, subTemplate]) => {
                if (
                  subTemplate.name === template.name ||
                  key === template.name
                ) {
                  return [
                    key,
                    {
                      ...subTemplate,
                      // KEEP ORIGINAL FORM ID
                      id: subTemplate.id,
                      // STORE SESSION INSTANCE SEPARATELY
                      session_id: template.id,
                      type: template.type,
                    },
                  ];
                }
                return [key, subTemplate];
              }),
            ),
          }));
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
      try {
        await session.end(sessionId);
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

        const templateDataId =
          templates?.[activeTab]?.id;

        // SAVE CURRENT TAB
        if (
          isSessionActive &&
          templateDataId
        ) {

          try {

            // ALL SUB ASSESSMENT FIELD NAMES
            const subAssessmentFieldNames =
              Object.values(
                subAssessmentTemplate?.[activeTab] || {}
              ).flatMap(sub => {

                const names = [];

                (sub.sections || []).forEach(section => {

                  (section.fields || []).forEach(field => {

                    // normal field
                    if (field.name) {
                      names.push(field.name);
                    }

                    // grouped columns
                    if (field.cols?.length) {

                      field.cols.forEach(col => {

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
            const parentAssessmentData =
              Object.fromEntries(

                Object.entries(
                  assessmentsValues[activeTab] || {}
                ).filter(
                  ([key]) =>
                    !subAssessmentFieldNames.includes(key)
                )

              );

            // SAVE ONLY PARENT SOAP DATA
            await forms.save(
              templateDataId,
              parentAssessmentData
            );

            setToast({
              message: "Saved",
              variant: "success",
            });

          } catch (e) {

            console.log(e);

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

        const templateDataId =
          templates?.[activeTab]?.id;

        if (!templateDataId) return;

        try {

          // ALL SUB ASSESSMENT FIELD NAMES
          const subAssessmentFieldNames =
            Object.values(
              subAssessmentTemplate?.[activeTab] || {}
            ).flatMap(sub => {

              const names = [];

              (sub.sections || []).forEach(section => {

                (section.fields || []).forEach(field => {

                  if (field.name) {
                    names.push(field.name);
                  }

                  if (field.cols?.length) {

                    field.cols.forEach(col => {

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
          const parentAssessmentData =
            Object.fromEntries(

              Object.entries(
                assessmentsValues[activeTab] || {}
              ).filter(
                ([key]) =>
                  !subAssessmentFieldNames.includes(key)
              )

            );

          await forms.save(
            templateDataId,
            parentAssessmentData
          );

          setToast({
            message: "Saved",
            variant: "success",
          });

        } catch (e) {

          console.log(e);

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
      subAssessmentTemplate
    ],
  );

  // OnChange handler
  const onChange = useCallback(
    async (name, value) => {
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
                  template.id === value ||
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
                  { label: "Visit Type", value: "INITIAL" },
                  { label: "Date", value: localDateTimeString(new Date()) },
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
            {TABS.map((tab, idx) => {
              const isActive = activeTab === tab;
              const isDone = idx < TABS.indexOf(activeTab);
              const hasData = ""; // ----= !!formDataIds[tab];
              // Tab Button
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    ...S.tab,
                    ...(isActive ? S.tabActive : isDone ? S.tabDone : {}),
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
              <CommonFormBuilder
                readOnly={false}
                onChange={onChange}
                submitted={isSubmitted}
                onAction={handleAction}
                schema={templates[activeTab]}
                values={assessmentsValues[activeTab] || {}}
                assessmentRegistry={Object.values(
                  subAssessmentTemplate[activeTab] || {},
                )}
              >
                <div style={S.actionRow}>
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
    borderBottom: "1px solid #f1f5f9",
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
    borderBottomColor: "transparent",
    background: "none",
  },
  tabDone: {
    color: "#16a34a",
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
