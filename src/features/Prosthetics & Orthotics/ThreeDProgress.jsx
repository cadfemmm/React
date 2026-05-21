import { useState, useEffect } from "react";
import CommonFormBuilder from "../CommonComponenets/FormBuilder";
// import PatientCard from "../../../shared/cards/PatientCard";

/* ── Shared actions ── */
const ACTIONS = [
  { type: "clear", label: "Clear" },
  { type: "save",  label: "Save"  },
];

/* ══════════════════════════════════════════════════════════
   SCHEMAS
══════════════════════════════════════════════════════════ */

const SUBJECTIVE_SCHEMA = {
  
actions: [
      { type: "back", label: "Back" },
      { type: "clear", label: "Clear" },
      { type: "save", label: "Save" }
    ],  sections: [{
    fields: [
      // { name: "complaint", label: "Cheif Complaint", type: "input", placeholder: "Therapist assessment..." },
        {  name: "complaint", label: "Cheif Complaint", type: "input", placeholder: "Therapist assessment..." },
      { name: "History of Present", label: "History of Present Illnes", type: "input" },


      {
    name: "case_overview",
    label: "Case Overview",
    type: "input",
    rows: 5,
    placeholder: "Start with objective / strategies / progress summary"
  },

  {
    name: "session_for",
    label: "Session For",
    type: "radio",
    options: [
      {
        label: "3D Scanning",
        value: "3d_scanning"
      },
      {
        label: "Modification",
        value: "modification"
      },
      {
        label: "Adjustment",
        value: "adjustment"
      },
      {
        label: "Training",
        value: "training"
      },
      {
        label: "Others",
        value: "others"
      }
    ]
  },

  {
    name: "session_type",
    label: "Session Type",
    type: "radio",
    options: [
      {
        label: "Centre-based",
        value: "centre_based"
      },
      {
        label: "Home-based",
        value: "home_based"
      },
      {
        label: "Tele-rehab",
        value: "tele_rehab"
      }
    ]
  },

  {
    name: "new_complaint",
    label: "New Complaint",
    type: "radio",
    options: [
      {
        label: "Yes",
        value: "yes"
      },
      {
        label: "No",
        value: "no"
      }
    ]
  },

  {
    name: "pain_during_session",
    label: "Pain During Session",
    type: "radio",
    options: [
      {
        label: "Yes",
        value: "yes"
      },
      {
        label: "No",
        value: "no"
      }
    ]
  },

  {
        name: "pain_score",
        label: "Pain Score",
        type: "scale-slider",

        min: 0,
        max: 10,
        ranges: [
          {
            min: 0,
            max: 3,
            label: "Mild",
            color: "#22c55e"   // green
          },
          {
            min: 4,
            max: 7,
            label: "Moderate",
            color: "#facc15"   // yellow
          },
          {
            min: 7,
            max: 10,
            label: "Severe",
            color: "#ef4444"   // red
          }
        ],
        showValue: true
      },


  {
    name: "adverse_reaction",
    label: "Adverse Reaction",
    type: "radio",
    options: [
      {
        label: "Yes",
        value: "yes"
      },
      {
        label: "No",
        value: "no"
      }
    ]
  },

  {
    name: "adverse_reaction_details",
    label: "Adverse Reaction Details",
    type: "input",
    rows: 4,
    showIf: {
      field: "adverse_reaction",
      equals: "yes"
    }
  },

  {
    name: "session_number",
    label: "Session Number",
    type: "input",
    readOnly: true
    
  },

  {
    name: "remarks",
    label: "Remarks",
    type: "input",
    rows: 4
  },
   
 



    ],
  }],
};
const OBJECTIVE_SCHEMA = {
  actions: [
    { type: "back", label: "Back" },
    { type: "clear", label: "Clear" },
    { type: "save", label: "Save" }
  ],

  sections: [
    {
      fields: [

   
  {
    name: "modalities_equipment",
    label: "Modalities / Equipment",
    type: "checkbox-group",
    options: [
      {
        label: "3D Printer",
        value: "3d_printer"
      },
      {
        label: "3D Scanner",
        value: "3d_scanner"
      },
      {
        label: "Parallel Bar",
        value: "parallel_bar"
      }
    ]
  },

  {
    name: "observation_during_treatment",
    label: "Observation During Treatment",
    type: "input",
    rows: 4
  },

  {
    name: "tolerance",
    label: "Tolerance",
    type: "radio",
    options: [
      {
        label: "Good",
        value: "good"
      },
      {
        label: "Fair",
        value: "fair"
      },
      {
        label: "Poor",
        value: "poor"
      }
    ]
  },

  {
    name: "assistance_level",
    label: "Assistance Level",
    type: "single-select",
    options: [
      {
        label: "Independent",
        value: "independent"
      },
      {
        label: "Supervision",
        value: "supervision"
      },
      {
        label: "Min Assist",
        value: "min_assist"
      },
      {
        label: "Mod Assist",
        value: "mod_assist"
      },
      {
        label: "Max Assist",
        value: "max_assist"
      },
      {
        label: "Dependent",
        value: "dependent"
      }
    ]
  },

  {
    name: "distance_repetition",
    label: "Distance / Repetition",
    type: "input"
  },

  {
    name: "skin_stump_check",
    label: "Skin / Stump Check",
    type: "input",
    rows: 3
  },

  {
    name: "remarks",
    label: "Remarks",
    type: "input",
    rows: 4
  }
      ]
    }
  ]
};


const ASSESSMENT_SCHEMA = {
 
actions: [
      { type: "back", label: "Back" },
      { type: "clear", label: "Clear" },
      { type: "save", label: "Save" }
    ],  sections: [{
    fields: [
    
      { name: "assessment_notes", label: "Clinical Impression / Notes", type: "input", placeholder: "Therapist assessment..." },


     {
    name: "response_to_intervention",
    label: "Response to Intervention",
    type: "input",
    rows: 4
  },

  {
    name: "progression_status",
    label: "Progression Status",
    type: "radio",
    options: [
      {
        label: "Improved",
        value: "improved"
      },
      {
        label: "Static",
        value: "static"
      },
      {
        label: "Reduced",
        value: "reduced"
      }
    ]
  },
 {
    name: "remarks",
    label: "Remarks",
    type: "input",
    rows: 4
  }

      
    ],
  }],
};

const PLAN_SCHEMA = {
 
actions: [
      { type: "back", label: "Back" },
      { type: "clear", label: "Clear" },
      { type: "save", label: "Save" }
    ],  sections: [{
    fields: [
        { type: "subheading", label: "Short-Term Goals (2–4 weeks)" },
        {
            type: "dynamic-goals",
            name: "short_term_goals"
          },
          { type: "subheading", label: "Long-Term Goals (6–12 weeks)" },
          {
            type: "dynamic-goals",
            name: "long_term_goals"
          }, 
{type:'input',label:"Plan",name:'plan'},

  {
    name: "modalities",
    label: "Modalities",
    type: "checkbox-group",
    options: [
      { label: "3D Printer", value: "3d_printer" },
      { label: "3D Scanner", value: "3d_scanner" },
      { label: "Parallel Bar", value: "parallel_bar" }
    ]
  },

  // {
  //   type: "subheading",
  //   label: "Next Appointment"
  // },
  {
    name: "next_appointment",
    label: "Date & Time",
    type: "date"
  },


  {
    name: "inventory_item",
    label: "Item",
    type: "single-select",
    options: [
      {
        label: "3D Printed Nail Clipper",
        value: "3d_printed_nail_clipper"
      },
      {
        label: "3D Printed Hand Brace",
        value: "3d_printed_hand_brace"
      },
      {
        label: "3D Printed Knee Brace",
        value: "3d_printed_knee_brace"
      },
      {
        label: "3D Printed AFO",
        value: "3d_printed_afo"
      },
      {
        label: "3D Printed Prosthetic Socket",
        value: "3d_printed_prosthetic_socket"
      },
      {
        label: "3D Printed Assistive Device",
        value: "3d_printed_assistive_device"
      }
    ]
  },

  {
    name: "quantity",
    label: "Quantity (pcs)",
    type: "input"
  },

  {
    name: "others",
    label: "Others",
    type: "input",
    rows: 3
  },

  {
    name: "comment",
    label: "Comment",
    type: "input",
    rows: 4
  }
/* ================= TYPE OF SERVICE ================= */

      
    ],
  }],
};

const SOAP_TABS = [
  { key: "subjective",     label: "Subjective"     },
  { key: "objective", label: "Objective" },
  { key: "assessment",   label: "Assessment"   },
  { key: "plan",         label: "Plan"         },
];

const SCHEMA_MAP = {
  subjective:     SUBJECTIVE_SCHEMA,
  objective: OBJECTIVE_SCHEMA,
  assessment:   ASSESSMENT_SCHEMA,
  plan:         PLAN_SCHEMA,
};

/* ══════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════ */
export default function ThreeDProgress({ patient, onBack }) {
  const [values, setValues]       = useState({});
  const [activeTab, setActiveTab] = useState("subjective");
  const [submitted, setSubmitted] = useState(false);
  const [patientHistory, setPatientHistory] = useState({
      past_medical_history: "",
      past_family_history: "",
      alerts_and_allergies: ""
    });
    useEffect(() => {
          if (!patient) return;
          setPatientHistory({
            past_medical_history: patient.medical_history || "",
            past_family_history: patient.family_medical_history || "",
            alerts_and_allergies: patient.alerts_and_allergies_history || ""
          });
        }, [patient]);

  const storageKey = patient ? `amputee_progress_${patient.id}` : null;

  useEffect(() => {
    if (!storageKey) return;
    const saved = localStorage.getItem(storageKey);
    if (saved) setValues(JSON.parse(saved).values || {});
  }, [storageKey]);
   useEffect(() => {
          if (!storageKey) return;
          const saved = localStorage.getItem(storageKey);
          if (saved) {
            try {
              setValues(JSON.parse(saved).values || {});
            } catch {}
          }
        }, [storageKey]);

  useEffect(() => {
    if (!patient) return;
    setValues(v => ({
      ...v,
      session_date: v.session_date || new Date().toISOString().split("T")[0],
    }));
  }, [patient]);

  const onChange = (name, value) => setValues(v => ({ ...v, [name]: value }));
const tabOrder = ["subjective", "objective", "assessment", "plan"];
  const activeTabIdx = tabOrder.indexOf(activeTab);
 
 const handleSubmit = () => {
    setSubmitted(true);
    console.log("Submitted:", values);
    alert("Assessment submitted");
  };
    const handleAction = (type) => {
    if (type === "back") onBack?.();
    if (type === "clear") {
      setValues({});
      setSubmitted(false);
      localStorage.removeItem(storageKey);
    }
    if (type === "save") {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ values, updatedAt: new Date() })
      );
      alert("Spinal draft saved");
    }
  };
  // const handleAction = (type) => {
  //   if (type === "clear") setValues({});
  //   if (type === "save") {
  //     if (storageKey) localStorage.setItem(storageKey, JSON.stringify({ values, updatedAt: new Date() }));
  //     alert("Progress & Intervention saved.");
  //   }
  // };
function PatientInformationBlock({ patient, patientHistory, setPatientHistory }) {
  if (!patient) return null;

  const safe = (v) => v ?? "-";
  const formatDate = (d) => d ? new Date(d).toLocaleDateString() : "-";

  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 12,
        fontSize: 14
      }}>
        <div><b>Name:</b> {safe(patient.name)}</div>
        <div><b>IC:</b> {safe(patient.id)}</div>
        <div><b>DOB:</b> {formatDate(patient.dob)}</div>

        <div><b>Age / Gender:</b> {safe(patient.age)} / {safe(patient.sex)}</div>
        <div><b>ICD:</b> {safe(patient.icd)}</div>
        <div><b>Date of Assessment:</b> {new Date().toLocaleDateString()}</div>

        <div><b>Date of Onset:</b> {formatDate(patient.date_of_onset)}</div>
        <div><b>Duration of Diagnosis:</b> -</div>
        <div><b>Primary Diagnosis:</b> {safe(patient.diagnosis_history)}</div>

        <div><b>Secondary Diagnosis:</b> {safe(patient.medical_history)}</div>
        <div><b>Dominant Side:</b> {safe(patient.dominant_side)}</div>
        <div><b>Language Preference:</b> {safe(patient.language_preference)}</div>

        <div><b>Education Level:</b> {safe(patient.education_background)}</div>
        <div><b>Occupation:</b> {safe(patient.occupation)}</div>
        <div><b>Work Status:</b> {safe(patient.employment_status)}</div>

        <div><b>Driving Status:</b> {safe(patient.driving_status)}</div>
        <div><b>PP/OB:</b> {safe(patient.pp_ob)}</div>
        <div><b>Weight:</b> {patient.weight ? `${patient.weight} kg` : "-"}</div>

        {/* ===== HISTORY ===== */}
        <div style={{ gridColumn: "1 / -1", marginTop: 10 }}>
        
           <h3>Patient History</h3>
        
                  <div>
                    <b>Past Medical History</b>
                    <input
                      style={input}
                      value={patientHistory.past_medical_history}
                      onChange={(e) =>
                        setPatientHistory(prev => ({
                          ...prev,
                          past_medical_history: e.target.value
                        }))
                      }
                    />
                  </div>

          
          <div>
                    <b>Family History</b>
                    <input
                      style={input}
                      value={patientHistory.past_family_history}
                      onChange={(e) =>
                        setPatientHistory(prev => ({
                          ...prev,
                          past_family_history: e.target.value
                        }))
                      }
                    />
                  </div>

        
           <div>
                    <b>Allergies</b>
                    <input
                      style={input}
                      value={patientHistory.alerts_and_allergies}
                      onChange={(e) =>
                        setPatientHistory(prev => ({
                          ...prev,
                          alerts_and_allergies: e.target.value
                        }))
                      }
                    />
                  </div>

          <button style={alertBtn}>🚨 Alerts</button>
        </div>
      </div>
    </div>
  );
}
  return (
    <div>
      {/* Patient Information */}
         <CommonFormBuilder
                schema={{ title: "Patient Information", sections: [] }}
                values={{}}
                onChange={() => {}}
              >
                <PatientInformationBlock
                  patient={patient}
                  patientHistory={patientHistory}
                  setPatientHistory={setPatientHistory}
                />
              
                <button style={doctorsReportBtn}>
                  Doctors Reports
                </button>
              </CommonFormBuilder>
      

      {/* SOAP-style Tabs */}
      <div style={tabBar}>
        {SOAP_TABS.map(tab => (
          <div
            key={tab.key}
            style={activeTab === tab.key ? tabActive : tabBtn}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <CommonFormBuilder
        schema={SCHEMA_MAP[activeTab]}
        values={values}
        onChange={onChange}
        onAction={handleAction}
      />
       <div style={submitRow}>
          {activeTab !== "plan" ? (
            <button style={submitBtn} onClick={() => setActiveTab(tabOrder[activeTabIdx + 1])}>
              Next
            </button>
          ) : (
            <button style={submitBtn} onClick={handleSubmit}>
              Submit Assessment
            </button>
          )}
        </div>

    </div>
  );
}

/* ── Styles ── */
const tabBar    = { display: "flex", gap: 12, justifyContent: "center", borderBottom: "1px solid #ddd", marginBottom: 12 };
const tabBtn    = { padding: "10px 22px", fontWeight: 600, cursor: "pointer", color: "#0f172a" };
const tabActive = { ...tabBtn, borderBottom: "3px solid #2451b3", color: "#2451b3" };
const backBtn   = { marginTop: 10, padding: "8px 18px", borderRadius: 6, border: "1px solid #d1d5db", background: "#fff", color: "#374151", fontWeight: 600, cursor: "pointer" };
const input = {
          width: "100%",
          minHeight: 90,
          marginTop: 6,
          marginBottom: 12,
          padding: "10px 12px",
          borderRadius: 6,
          border: "1px solid #d1d5db",
          fontSize: 14,
          resize: "vertical"
};
const alertBtn = {
  marginTop: 10,
          padding: "10px 20px",
          borderRadius: 6,
          border: "1.5px solid #007bff",
          background: "#007bff",
          color: "#fff",
          fontWeight: 600,
          cursor: "pointer"
};
const doctorsReportBtn = {
  padding: "10px 20px", background: "#2563EB", color: "#fff",
  border: "none", borderRadius: 6, fontSize: 14,
  fontWeight: 600, cursor: "pointer", marginTop: 8
};
const submitRow = {
  display: "flex",
  justifyContent: "flex-end",
  marginTop: 16
};

const submitBtn = {
  padding: "12px 32px",
  background: "#2563EB",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  fontWeight: 600,
  fontSize: 15,
  cursor: "pointer"
};