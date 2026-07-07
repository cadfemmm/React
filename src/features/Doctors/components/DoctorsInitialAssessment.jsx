import React, { useState, useRef, useEffect, useCallback } from "react";
import Select, { components } from "react-select";
import  VisualAssessment from "../components/Visual";
import SocialHistory from "./SocialHistory";
import WorkHistory from "./WorkHistory";
import SwallowingAssessment from "./SwallowingAssessment";
import CognitiveAssessmentForm from "./CognitiveAssessment";
import Physical from "./Physical";
import SpasmSpasticity from "./SpasmSpasticity";
import HearingAssessment from "./HearingAssessment";
import CardiovascularRespiratoryAssessment from "./CardiovascularRespiratoryAssessment";
import BowelAssessment from "./BowelAssessment";
import BladderAssessment from "./BladderAssessment";
import SexualAssessment from "./SexualAssessment";
import FunctionalAssessment from "./Functional";
import SkinAssessment from "./SkinAssessment";
import ProcedureAssessment from "./ProcedureAssessment";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import PatientCard from "../../../shared/cards/PatientCard";
import { fetchIcdCodesPage } from "../../../shared/api/icdCodes";

const ICD_SELECT_STYLES = {
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
};

function IcdSelectMenuList(props) {
  const { children, innerProps, selectProps } = props;
  const { onLoadMore, isLoadingMore } = selectProps;

  const handleScroll = (event) => {
    innerProps?.onScroll?.(event);
    const target = event.currentTarget;
    if (!target || !onLoadMore) return;

    const nearBottom =
      target.scrollHeight - target.scrollTop <= target.clientHeight + 48;
    if (nearBottom) {
      onLoadMore();
    }
  };

  return (
    <components.MenuList
      {...props}
      innerProps={{
        ...innerProps,
        onScroll: handleScroll,
      }}
    >
      {children}
      {isLoadingMore ? (
        <div style={{ padding: "8px 12px", textAlign: "center", color: "#64748b", fontSize: 13 }}>
          Loading more diagnoses...
        </div>
      ) : null}
    </components.MenuList>
  );
}

function mergeIcdSelectOptions(prev, items, replace) {
  const base = replace ? [] : [...prev];
  const seen = new Set(base.map((option) => option.value));

  items.forEach((item) => {
    if (!seen.has(item.value)) {
      seen.add(item.value);
      base.push({ value: item.value, label: item.label, code: item.code, name: item.name });
    }
  });

  // Sorting on every "append" becomes very expensive for large ICD lists.
  // Keep append order stable; only sort on full replace (initial load).
  if (!replace) return base;
  return base.sort((a, b) => String(a.value).localeCompare(String(b.value)));
}

function filterIcdOption(option, inputValue) {
  if (!inputValue) return true;
  const q = inputValue.toLowerCase().trim();
  const label = (option.label || "").toLowerCase();
  const value = (option.value || "").toLowerCase();
  const code = (option.data?.code || option.code || value).toLowerCase();
  const name = (option.data?.name || option.name || "").toLowerCase();
  return (
    label.includes(q) ||
    value.includes(q) ||
    code.includes(q) ||
    name.includes(q)
  );
}

function IcdDiagnosisSelect({ label, value, onChange, placeholder }) {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const requestIdRef = useRef(0);
  const pageRef = useRef(1);
  const hasMoreRef = useRef(true);
  const loadingMoreRef = useRef(false);

  const loadPage = useCallback(async ({ pageNum = 1, append = false }) => {
    if (append && (loadingMoreRef.current || !hasMoreRef.current)) return;

    const requestId = ++requestIdRef.current;

    if (append) {
      loadingMoreRef.current = true;
      setLoadingMore(true);
    } else {
      setLoading(true);
      setOptions([]);
      hasMoreRef.current = true;
      setHasMore(true);
      pageRef.current = 1;
    }

    try {
      const { items, meta } = await fetchIcdCodesPage({
        page: pageNum,
        limit: 100,
      });

      if (requestId !== requestIdRef.current) return;

      setOptions((prev) =>
        append ? mergeIcdSelectOptions(prev, items, false) : mergeIcdSelectOptions([], items, true)
      );
      hasMoreRef.current = Boolean(meta.hasNext);
      setHasMore(Boolean(meta.hasNext));
      pageRef.current = pageNum;
    } catch (error) {
      console.error("Failed to load ICD codes:", error);
      if (requestId !== requestIdRef.current) return;
      if (!append) setOptions([]);
      hasMoreRef.current = false;
      setHasMore(false);
    } finally {
      if (requestId === requestIdRef.current) {
        setLoading(false);
        loadingMoreRef.current = false;
        setLoadingMore(false);
      }
    }
  }, []);

  useEffect(() => {
    return () => {
      requestIdRef.current += 1;
    };
  }, []);

  useEffect(() => {
    loadPage({ pageNum: 1, append: false });
  }, [loadPage]);

  const handleLoadMore = useCallback(() => {
    if (loading || loadingMore || !hasMore) return;
    loadPage({
      pageNum: pageRef.current + 1,
      append: true,
    });
  }, [hasMore, loadPage, loading, loadingMore]);

  const selectedOption =
    options.find((option) => option.value === value) ||
    (value ? { value, label: value } : null);

  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{ fontWeight: 600 }}>{label}</label>
      <div style={{ marginTop: 6 }}>
        <Select
          placeholder={loading ? "Loading diagnoses..." : placeholder}
          options={options}
          value={selectedOption}
          onChange={(selected) => onChange(selected?.value || "")}
          onMenuScrollToBottom={handleLoadMore}
          onLoadMore={handleLoadMore}
          isLoadingMore={loadingMore}
          isLoading={loading}
          isClearable
          isSearchable
          filterOption={filterIcdOption}
          menuPortalTarget={document.body}
          menuPosition="fixed"
          menuPlacement="auto"
          components={{ MenuList: IcdSelectMenuList }}
          styles={ICD_SELECT_STYLES}
          noOptionsMessage={() =>
            loading ? "Loading..." : "No diagnoses found"
          }
          loadingMessage={() => "Loading diagnoses..."}
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------
   MULTISELECT CHECKBOX DROPDOWN  (UI ONLY - NO BUSINESS LOGIC)
------------------------------------------------------------- */
function MultiSelectDropdown({ options, selected, setSelected }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  return (
    <div
      ref={dropdownRef}
      style={{ width: "100%", marginBottom: 20, position: "relative" }}
    >
      <label style={{ fontWeight: 600 }}>Refer to Departments</label>

      <div
        onClick={() => setOpen(!open)}
        style={{
          border: "1px solid #ccc",
          padding: 10,
          borderRadius: 6,
          background: "#fff",
          cursor: "pointer",
        }}
      >
        {selected.length ? selected.join(", ") : "Select departments"}
      </div>

      {open && (
        <div
          style={{
            position: "absolute",
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: 6,
            width: "100%",
            marginTop: 4,
            zIndex: 999,
            maxHeight: 200,
            overflowY: "auto",
          }}
        >
          {options.map((opt) => (
            <label
              key={opt}
              style={{ display: "flex", alignItems: "center", padding: 8 }}
            >
              <input
                type="checkbox"
                checked={selected.includes(opt)}
                onChange={() =>
                  setSelected(
                    selected.includes(opt)
                      ? selected.filter((o) => o !== opt)
                      : [...selected, opt]
                  )
                }
                style={{ marginRight: 10 }}
              />
              {opt}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

function IcdDiagnosisFields({
  primaryICD,
  onPrimaryICDChange,
  secondaryICD,
  onSecondaryICDChange,
}) {
  const [showSecondary, setShowSecondary] = useState(false);

  useEffect(() => {
    if (!secondaryICD) {
      setShowSecondary(false);
    }
  }, [secondaryICD]);

  return (
    <div>
      <IcdDiagnosisSelect
        label="Primary diagnosis"
        value={primaryICD}
        onChange={onPrimaryICDChange}
        placeholder="Search primary diagnosis"
      />

      {!showSecondary && (
        <button
          type="button"
          onClick={() => setShowSecondary(true)}
          style={{
            marginTop: -8,
            marginBottom: 20,
            padding: "6px 10px",
            borderRadius: 6,
            background: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          + Add Secondary diagnosis
        </button>
      )}

      {showSecondary && (
        <IcdDiagnosisSelect
          label="Secondary diagnosis"
          value={secondaryICD}
          onChange={onSecondaryICDChange}
          placeholder="Search secondary diagnosis"
        />
      )}
    </div>
  );
}

/* -------------------------------------------------------------
   HELPERS: SAME SUMMARY TEXT FOR UI + REPORT
------------------------------------------------------------- */

function buildSwallowingSummaryText(data) {
  if (!data) return "No swallowing assessment recorded.";

  const parts = [];

  if (data.hasDifficulty === "yes") {
    parts.push("Swallowing difficulty: Yes.");
  } else if (data.hasDifficulty === "no") {
    parts.push("Swallowing difficulty: No.");
  } else {
    parts.push("Swallowing difficulty: Not recorded.");
  }

  if (data.hasDifficulty === "yes") {
    parts.push(
      `Onset & progression: ${
        data.onset && data.onset.trim() ? data.onset : "Not recorded"
      }.`
    );
    parts.push(
      `Food / liquid difficulties: ${
        data.foodDifficulty && data.foodDifficulty.trim()
          ? data.foodDifficulty
          : "Not recorded"
      }.`
    );
    parts.push(
      `Diet modification: ${
        data.dietModification && data.dietModification.trim()
          ? data.dietModification
          : "Not recorded"
      }.`
    );
    parts.push(
      `Symptoms during meals: ${
        data.symptoms && data.symptoms.trim()
          ? data.symptoms
          : "Not recorded"
      }.`
    );
  }

  return parts.join(" ");
}

function buildVisualSummaryText(data) {
  if (!data) return "No visual assessment recorded.";

  const parts = [];

  parts.push(
    `Visual acuity: ${
      data.acuity && data.acuity.trim() ? data.acuity : "Not recorded"
    }.`
  );
  parts.push(
    `Field defect: ${
      data.fieldDefect && data.fieldDefect.trim()
        ? data.fieldDefect
        : "Not recorded"
    }.`
  );
  parts.push(
    `Notes: ${
      data.notes && data.notes.trim() ? data.notes : "None"
    }.`
  );

  return parts.join(" ");
}

/* -------------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------------- */
export function DoctorsInitialAssessmentForm({ patient, onUpdatePatient }) {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef(null);
  const [primaryICD, setPrimaryICD] = useState(() => patient?.doctor_primary_icd || "");
  const [secondaryICD, setSecondaryICD] = useState(() => patient?.doctor_secondary_icd || "");

  /* --------- Store Assessment Data for Report --------- */
  const [swallowingData, setSwallowingData] = useState(null);
  const [visualData, setVisualData] = useState(null);
  const [CognitiveData, setCognitiveData] = useState(null);
  const [PhysicalData, setPhysicalData] = useState(null);
const [CardiovascularRespiratoryAssessmentData, setCardiovascularRespiratoryAssessmentData] = useState(null);
const [HearingAssessmentData, setHearingAssessmentData] = useState(null);
const [BowelAssessmentData, setBowelAssessmentData] = useState(null);
const [BladderAssessmentData, setBladderAssessmentData] = useState(null);
const [FunctionalAssessmentData,setFunctionalAssessmentData] = useState(null);
const [SkinAssessmentData, setSkinAssessmentData] = useState(null);

  // Patient history fields (stored back on the patient record).
  const [patientHistory, setPatientHistory] = useState({
    past_medical_history: patient?.medical_history || "",
    past_family_history: patient?.family_medical_history || "",
    alerts_and_allergies: patient?.alerts_and_allergies_history || "",
  });

  const HISTORY_SCHEMA = {
    title: "",
    sections: [
      {
        fields: [
          {
            type: "input",
            name: "past_medical_history",
            label: "Medical History",
            placeholder: "Enter medical history",
          },
          {
            type: "input",
            name: "past_family_history",
            label: "Family History",
            placeholder: "Enter family history",
          },
        ],
      },
    ],
  };

  // Keep in sync when the selected patient changes.
  useEffect(() => {
    setPatientHistory({
      past_medical_history: patient?.medical_history || "",
      past_family_history: patient?.family_medical_history || "",
      alerts_and_allergies: patient?.alerts_and_allergies_history || "",
    });
  }, [patient?.id]);

  // Persist changes so other department forms can see them.
  useEffect(() => {
    if (!patient?.id) return;
    const patientKey = "patient_" + patient.id;
    let existing = {};
    try {
      existing = JSON.parse(localStorage.getItem(patientKey) || "{}");
    } catch {
      existing = {};
    }

    const updated = {
      ...existing,
      medical_history: patientHistory.past_medical_history,
      family_medical_history: patientHistory.past_family_history,
      alerts_and_allergies_history: patientHistory.alerts_and_allergies,
    };

    localStorage.setItem(patientKey, JSON.stringify(updated));
    onUpdatePatient?.(updated);
  }, [patient?.id, patientHistory.past_medical_history, patientHistory.past_family_history, patientHistory.alerts_and_allergies]);

  // Doctor Goals / Plan (below tabs).
  const [doctorGoals, setDoctorGoals] = useState(patient?.doctor_goals || "");
  const [doctorPlan, setDoctorPlan] = useState(patient?.doctor_plan || "");

  useEffect(() => {
    setDoctorGoals(patient?.doctor_goals || "");
    setDoctorPlan(patient?.doctor_plan || "");
    setPrimaryICD(patient?.doctor_primary_icd || "");
    setSecondaryICD(patient?.doctor_secondary_icd || "");
  }, [patient?.id]);

  useEffect(() => {
    if (!patient?.id) return;
    const patientKey = "patient_" + patient.id;
    let existing = {};
    try {
      existing = JSON.parse(localStorage.getItem(patientKey) || "{}");
    } catch {
      existing = {};
    }

    const updated = {
      ...existing,
      doctor_goals: doctorGoals,
      doctor_plan: doctorPlan,
    };

    localStorage.setItem(patientKey, JSON.stringify(updated));
    onUpdatePatient?.(updated);
  }, [patient?.id, doctorGoals, doctorPlan]);

  useEffect(() => {
    if (!patient?.id) return;
    const patientKey = "patient_" + patient.id;
    let existing = {};
    try {
      existing = JSON.parse(localStorage.getItem(patientKey) || "{}");
    } catch {
      existing = {};
    }

    const updated = {
      ...existing,
      doctor_primary_icd: primaryICD || "",
      doctor_secondary_icd: secondaryICD || "",
    };

    localStorage.setItem(patientKey, JSON.stringify(updated));
    onUpdatePatient?.(updated);
  }, [patient?.id, primaryICD, secondaryICD]);
  /* --------- Tabs --------- */
  const tabs = [
    "Cognitive",
    "Swallowing , Speech & Language",
    "Visual",
    "Hearing",
    "Cardiovascular & Respiratory System",
    "Physical",
    "Bowel Issue",
    "Bladder Issue",
    "Sexual",
    "Spasm & Spasticity",
    "Skin",
    "Functional",
    "Social History",
    "Work History",
  ];

  const today = new Date();
  const formatDate = (dateStr) => {
    if (!dateStr) return "-";
    try {
      return new Date(dateStr).toLocaleDateString();
    } catch {
      return "-";
    }
  };
  const calculateDuration = (onset) => {
    if (!onset) return "-";
    const onsetDate = new Date(onset);
    const diffMs = today - onsetDate;
    if (Number.isNaN(diffMs) || diffMs < 0) return "-";
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    if (years > 0) return `${years} yr ${months % 12} mo`;
    if (months > 0) return `${months} mo`;
    return `${days} days`;
  };

  const section = {
    marginBottom: 24
  };

  /* --------- Referral Department Options --------- */
  const departmentOptions = [
    "Dietetics",
    "Physiotherapy",
    "Occupational Therapy",
    "Speech Therapy",
    "Psychology",
    "Medical",
    "Nursing",
    "Medical Assistant",
    "Orthotics & Prosthetics",
    "Social Work",
  ];

  const [selectedDepartments, setSelectedDepartments] = useState([]);

  /* --------- Persist bladder_control and bowel_control when doctor fills assessments --------- */
  useEffect(() => {
    if (!patient) return;
    const bladderControl = BladderAssessmentData?.urinaryProblem || "";
    const bowelControl = BowelAssessmentData?.control === "Yes" ? "CONTINENT" : BowelAssessmentData?.control === "No" ? "INCONTINENT" : "";
    if (bladderControl || bowelControl) {
      const key = "patient_" + patient.id;
      let existing = {};
      try {
        existing = JSON.parse(localStorage.getItem(key) || "{}");
      } catch {
        existing = {};
      }

      const updated = {
        ...existing,
        bladder_control: bladderControl || existing.bladder_control || patient.bladder_control,
        bowel_control: bowelControl || existing.bowel_control || patient.bowel_control,
      };

      localStorage.setItem(key, JSON.stringify(updated));
      onUpdatePatient?.(updated);
    }
  }, [patient?.id, BladderAssessmentData?.urinaryProblem, BowelAssessmentData?.control]);

  /* --------- Scroll tab into view --------- */
  const handleTabClick = (index) => {
    setActiveTab(index);
    if (scrollRef.current && scrollRef.current.children[index]) {
      scrollRef.current.children[index].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };
const markDoctorExisting = (patientId) => {
  const key = `patient_${patientId}_doctor_existing`;
  const info = {
    existing: true,
    at: new Date().toISOString(),
  };
  localStorage.setItem(key, JSON.stringify(info));
};

/* --------- SUBMIT REFERRAL --------- */
const handleSubmitReferral = () => {
  if (!patient) return;

  const bladderControl = BladderAssessmentData?.urinaryProblem || patient.bladder_control || "";
  const bowelControl = BowelAssessmentData?.control === "Yes" ? "CONTINENT" : BowelAssessmentData?.control === "No" ? "INCONTINENT" : patient.bowel_control || "";
  const key = "patient_" + patient.id;
  let existing = {};
  try {
    existing = JSON.parse(localStorage.getItem(key) || "{}");
  } catch {
    existing = {};
  }

  const updated = {
    ...existing,
    bladder_control: bladderControl,
    bowel_control: bowelControl,
    // keep existing departments, always include "Doctor", plus newly selected ones
    departments: Array.from(
      new Set([
        ...(existing.departments || patient.departments || []),
        "Doctor",
        ...selectedDepartments,
      ])
    ),
  };

  localStorage.setItem(key, JSON.stringify(updated));

  // 🔹 Mark this patient as an “existing” patient for Doctor
  markDoctorExisting(patient.id);

  if (onUpdatePatient) {
    onUpdatePatient(updated);
  }

  alert("Referral submitted successfully!");
};





  /* ----------------------------------------------------
     GENERATE REPORT  → saved to localStorage
     (NOW WITH SAME SUMMARY TEXT)
  ---------------------------------------------------- */
  const handleGenerateReport = () => {
    if (!patient) return alert("No patient found!");

    const key = `patient_${patient.id}_reports`;
    const existingReports = JSON.parse(localStorage.getItem(key) || "[]");

    const report = {
      reportId: "doctor_assessment_" + Date.now(),
      patientId: patient.id,
      createdBy: "Doctor",
      allowedDepartments: selectedDepartments.length
        ? selectedDepartments
        : ["Doctor"],
      timestamp: Date.now(),
      // raw data (so other modules can still use it)
      summary: {
        swallowing: swallowingData,
        visual: visualData,
        bladder: BladderAssessmentData,
        bowel: BowelAssessmentData,
      },
      // human-readable summary text (same as bottom UI)
      summaryText: {
        swallowing: buildSwallowingSummaryText(swallowingData),
        visual: buildVisualSummaryText(visualData),
      },
      patientHistory: {
        medical_history: patientHistory.past_medical_history || "",
        family_history: patientHistory.past_family_history || "",
      },
      diagnoses: {
        primary_icd: primaryICD || "",
        secondary_icd: secondaryICD || "",
      },
    };

    localStorage.setItem(key, JSON.stringify([...existingReports, report]));

    // Persist bladder_control and bowel_control to patient so Diet can display (read-only)
    const bladderControl = BladderAssessmentData?.urinaryProblem || "";
    const bowelControl =
      BowelAssessmentData?.control === "Yes"
        ? "CONTINENT"
        : BowelAssessmentData?.control === "No"
          ? "INCONTINENT"
          : "";
    const patientKey = "patient_" + patient.id;
    let existing = {};
    try {
      existing = JSON.parse(localStorage.getItem(patientKey) || "{}");
    } catch {
      existing = {};
    }

    const updatedPatient = {
      ...existing,
      bladder_control: bladderControl,
      bowel_control: bowelControl,
    };
    localStorage.setItem(patientKey, JSON.stringify(updatedPatient));
    if (onUpdatePatient) onUpdatePatient(updatedPatient);

    alert("Report generated and shared with referred departments!");
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100%",
        padding: 15,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ===== PATIENT INFORMATION CARD (above all Doctors tabs) ===== */}
      <PatientCard
        patient={patient}
        patientHistory={patientHistory}
        setPatientHistory={setPatientHistory}
        showDoctorsReport={false}
      />

      {/* ===== QUICK HISTORY (always visible) ===== */}
      <div style={{ marginTop: 6, marginBottom: 18 }}>
        <CommonFormBuilder
          schema={HISTORY_SCHEMA}
          values={patientHistory}
          onChange={(name, val) =>
            setPatientHistory((prev) => ({
              ...prev,
              [name]: val,
            }))
          }
          layout="nested"
        />
      </div>

      {/* ------------------ TABS ------------------ */}
      <div style={{ flexShrink: 0, width: "100%", marginBottom: 20 }}>
        <div
          ref={scrollRef}
          className="custom-scrollbar"
          style={{
            display: "flex",
            overflowX: "auto",
            whiteSpace: "nowrap",
            gap: 12,
            paddingBottom: 12,
            borderBottom: "2px solid #ccc",
          }}
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              style={{
                flexShrink: 0,
                padding: "10px 16px",
                borderRadius: 6,
                border:
                  activeTab === index
                    ? "2px solid #007bff"
                    : "1px solid rgba(255,255,255,0)",
                background: activeTab === index ? "#007bff" : "transparent",
                color: activeTab === index ? "#fff" : "#000",
                fontWeight: activeTab === index ? 700 : 500,
                cursor: "pointer",
                fontSize: 14,
                whiteSpace: "nowrap",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ------------------ CONTENT ------------------ */}
      <div
        className="content-scrollbar"
        style={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          width: "100%",
          minHeight: 0,
       
        }}
      >
{/* <h2>Objective</h2> */}

        {/* TAB CONTENT (only once now) */}
        {tabs[activeTab] === "Visual" ? (
          <VisualAssessment onChange={setVisualData} />
        ) : tabs[activeTab] === "Swallowing , Speech & Language" ? (
          <SwallowingAssessment onChange={setSwallowingData} />
        ) : tabs[activeTab] === "Cognitive" ? (
          <CognitiveAssessmentForm onChange={setCognitiveData} />
        ) :
        tabs[activeTab] === "Physical" ? (
          <Physical onChange={setPhysicalData} patient={patient} />
        ) :
         tabs[activeTab] === "Cardiovascular & Respiratory System" ? (
          <CardiovascularRespiratoryAssessment onChange={setCardiovascularRespiratoryAssessmentData} />
        ) :
        tabs[activeTab] === "Hearing" ? (
          <HearingAssessment onChange={setHearingAssessmentData} />
        ) :
                tabs[activeTab] === "Functional" ? (
          <FunctionalAssessment onChange={setFunctionalAssessmentData} />
        ) :
        tabs[activeTab] === "Bowel Issue" ? (
          <BowelAssessment
            onChange={setBowelAssessmentData}
            department="doctors"
          />
        ) :
         tabs[activeTab] === "Bladder Issue" ? (
          <BladderAssessment
          onChange={setBladderAssessmentData}
          department="doctors"
        />
        ) :
         tabs[activeTab] === "Sexual" ? (
          <SexualAssessment patient={patient} />
        ) :
        tabs[activeTab] === "Spasm & Spasticity" ? (
          <SpasmSpasticity />
        ) :
        tabs[activeTab] === "Skin" ? (
          <SkinAssessment onChange={setSkinAssessmentData} />
        ) :
         tabs[activeTab] === "Social History" ? (
          <SocialHistory />
        ) :
         tabs[activeTab] === "Work History" ? (
          <WorkHistory />
        ) :
        tabs[activeTab] === "Procedure" ? (
          <ProcedureAssessment patient={patient}/>
        ) :
         (
          <div style={{ padding: "20px 0" }}>
            <h3 style={{ textAlign: "center" }}>{tabs[activeTab]} Module</h3>
            <p>
              Content for <strong>{tabs[activeTab]}</strong> tab goes here.
            </p>
          </div>
        )}
       
        {/* ===== Doctor Goals & Plan (below tabs) ===== */}
        {/* <div
          style={{
            width: "90%",
            margin: "0 auto",
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: 12,
            padding: 24,
            boxShadow: "0 4px 14px rgba(15,23,42,0.04)",
            marginBottom: 20,
          }}
        > */}
          {/* <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 10 }}>Goals</div> */}
          {/* <textarea
            value={doctorGoals}
            onChange={(e) => setDoctorGoals(e.target.value)}
            style={{
              width: "100%",
              minHeight: 90,
              padding: "10px 12px",
              borderRadius: 6,
              border: "1px solid #d1d5db",
              fontSize: 14,
              fontFamily: "inherit",
              resize: "vertical",
              marginBottom: 18,
            }}
          /> */}

          {/* <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 10 }}>Plan</div> */}
          {/* <textarea
            value={doctorPlan}
            onChange={(e) => setDoctorPlan(e.target.value)}
            style={{
              width: "100%",
              minHeight: 90,
              padding: "10px 12px",
              borderRadius: 6,
              border: "1px solid #d1d5db",
              fontSize: 14,
              fontFamily: "inherit",
              resize: "vertical",
            }}
          /> */}
        {/* </div> */}
        <IcdDiagnosisFields
          primaryICD={primaryICD}
          onPrimaryICDChange={setPrimaryICD}
          secondaryICD={secondaryICD}
          onSecondaryICDChange={setSecondaryICD}
        />
        {/* REFER TO DEPARTMENTS DROPDOWN */}
        <MultiSelectDropdown
          options={departmentOptions}
          selected={selectedDepartments}
          setSelected={setSelectedDepartments}
        />

        {/* SUBMIT REFERRAL */}
        <button
          onClick={handleSubmitReferral}
          style={{
            padding: "10px 12px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          
            fontSize: 14,
            fontWeight: 600,
            marginRight: 20,
          }}
        >
          Submit Referral
        </button>

        {/* GENERATE REPORT BUTTON */}
        <button
          onClick={handleGenerateReport}
          style={{
            padding: "10px 12px",
            background: "#28a745",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
     
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 20,
          }}
        >
          Generate Report
        </button>


        {/* ===================== LIVE SUMMARY AT BOTTOM ===================== */}
        {/* <div
          style={{
            marginTop: 24,
            padding: 16,
            borderRadius: 8,
            background: "#f8f9fa",
            border: "1px solid #e2e6ea",
          }}
        > */}
          {/* <h3 style={{ marginTop: 0, marginBottom: 12 }}>
            Summary of Assessments
          </h3>

          {!swallowingData && !visualData ? (
            <p style={{ fontSize: 14, color: "#666" }}>
              No assessment data entered yet. Start filling Swallowing or Visual
              tabs to see a summary here.
            </p>
          ) : (
            <> */}
              {/* Swallowing summary */}
              {/* {swallowingData && (
                <div style={{ marginBottom: 12 }}>
                  <h4 style={{ margin: "0 0 6px" }}>Swallowing</h4>
                  <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14 }}>
                    <li>
                      Swallowing difficulty:{" "}
                      <strong>
                        {swallowingData.hasDifficulty === "yes"
                          ? "Yes"
                          : swallowingData.hasDifficulty === "no"
                          ? "No"
                          : "Not recorded"}
                      </strong>
                    </li>
                    {swallowingData.hasDifficulty === "yes" && (
                      <> */}
                        {/* <li>
                          Onset &amp; progression:{" "}
                          <strong>
                            {swallowingData.onset || "Not recorded"}
                          </strong>
                        </li>
                        <li>
                          Food / liquid difficulties:{" "}
                          <strong>
                            {swallowingData.foodDifficulty || "Not recorded"}
                          </strong>
                        </li>
                        <li>
                          Diet modification:{" "}
                          <strong>
                            {swallowingData.dietModification ||
                              "Not recorded"}
                          </strong>
                        </li> */}
                        {/* <li>
                          Symptoms during meals:{" "}
                          <strong>
                            {swallowingData.symptoms || "Not recorded"}
                          </strong>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              )} */}

              {/* Visual summary */}
              {/* {visualData && (
                <div style={{ marginBottom: 4 }}>
                  <h4 style={{ margin: "0 0 6px" }}>Visual</h4>
                  <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14 }}>
                    <li>
                      Visual acuity:{" "}
                      <strong>{visualData.acuity || "Not recorded"}</strong>
                    </li>
                    <li>
                      Field defect:{" "}
                      <strong>
                        {visualData.fieldDefect || "Not recorded"}
                      </strong>
                    </li>
                    <li>
                      Notes:{" "}
                      <strong>
                        {visualData.notes && visualData.notes.trim()
                          ? visualData.notes */}
                          {/* : "None"}
                      </strong>
                    </li>
                  </ul>
                </div>
              )} */}

              {/* <p style={{ marginTop: 10, fontSize: 12, color: "#777" }}>
                This summary is what will be stored when you click{" "}
                <strong>Generate Report</strong>.
              </p>
            </>
          )}
        </div> */}
        {/* =================== END LIVE SUMMARY =================== */}
      </div>

      {/* Hide scrollbars */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar,
        .content-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar,
        .content-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </div>
  );
}
