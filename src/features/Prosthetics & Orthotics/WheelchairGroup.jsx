import React, { useEffect, useState } from "react";
import CommonFormBuilder from "../CommonComponenets/FormBuilder";


const CONTAINER_SCHEMA = { title: "Patient Information", sections: [] };


// const CONSENT_AND_REFERRAL_SCHEMA = {
//   title: "",
//   sections: [{
//     fields: [
//       {
//         name: "consent_obtained",
//         label: "Consent",
//         type: "single-select",
//         options: [
//           { label: "Dry Needling", value: "dry_needling" },
//           { label: "Wall Climbing", value: "wall_climbing" }
//         ]
//       },
//       {
//         type: "custom",
//         name: "_open_saved_consent",
//         render: ({ values, onChange: _onChange }) => {
//           const hasDry = !!values.dry_needling_consent;
//           const hasWall = !!values.wall_climbing_consent;
//           if (!hasDry && !hasWall) return null;
//           return (
//             <div style={{ marginBottom: 8 }}>
//               <div style={{ fontWeight: 700, fontSize: 14, color: "#0F172A", marginBottom: 8 }}>
//                 Open Saved Consent
//               </div>
//               <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
//                 {hasDry && (
//                   <button
//                     type="button"
//                     style={savedBtn}
//                     onClick={() => _onChange("_open_consent_trigger", "dry_needling")}
//                   >
//                     Open Dry Needling Consent
//                   </button>
//                 )}
//                 {hasWall && (
//                   <button
//                     type="button"
//                     style={savedBtn}
//                     onClick={() => _onChange("_open_consent_trigger", "wall_climbing")}
//                   >
//                     Open Wall Climbing Consent
//                   </button>
//                 )}
//               </div>
//             </div>
//           );
//         }
//       },
//       {
//         name: "dr_hep_reviewed",
//         type: "checkbox-group",
//         options: [{ label: "Home Exercise Program (HEP) reviewed and demonstrated", value: "yes" }]
//       },
//       { type: "subheading", label: "Referral Information" },
//       { name: "referred_by", label: "Referred by", type: "input", readOnly: true },
//       { name: "referral_reasons", label: "Referral Reasons", type: "input", readOnly: true }
//     ]
//   }]
// };

const FUNCTIONAL_STATUS_OPTIONS = [
  { label: "Independent", value: "independent" },
  { label: "Supervision", value: "supervision" },
  { label: "Assist", value: "assist" },
  { label: "Dependent", value: "dependent" }
];

const WheelchairGroup_SCHEMA = {
    actions: [
      { type: "back", label: "Back" },
      { type: "clear", label: "Clear" },
      { type: "save", label: "Save" }
    ], 
  sections: [{
    
    fields: [
       {
    type: "subheading",
    label: "Booking Details"
  },

  {
    name: "visit_type",
    label: "Visit Type",
    type: "single-select",
    options: [
    //   {
    //     label: "Ping Pong Training with Wheelchair",
    //     value: "ping_pong_training_with_wheelchair"
    //   },
    //   {
    //     label: "Repair Wheelchair Class",
    //     value: "repair_wheelchair_class"
    //   },
    //   {
    //     label: "Wheelchair Care Class",
    //     value: "wheelchair_care_class"
    //   },
    //   {
    //     label: "How to Clean Wheelchair",
    //     value: "how_to_clean_wheelchair"
    //   },
    //   {
    //     label: "Others",
    //     value: "others"
    //   }
    ]
  },

  {
    name: "visit_type_others",
    label: "Others",
    type: "input",
    showIf: {
      field: "visit_type",
      equals: "others"
    }
  },

  {
    name: "wheelchair_type",
    label: "Wheelchair Type",
    type: "single-select",
    options: [
    //   {
    //     label: "Standard Wheelchair",
    //     value: "standard_wheelchair"
    //   },
    //   {
    //     label: "Recliner Wheelchair",
    //     value: "recliner_wheelchair"
    //   },
    //   {
    //     label: "Heavy Duty Wheelchair",
    //     value: "heavy_duty_wheelchair"
    //   },
    //   {
    //     label: "Light Wheelchair",
    //     value: "light_wheelchair"
    //   }
    ]
  },

  {
    name: "class_topic",
    label: "Class Topic",
    type: "single-select",
    options: [
    //   {
    //     label: "Wheelchair Maintenance",
    //     value: "wheelchair_maintenance"
    //   },
    //   {
    //     label: "Wheelchair Safety",
    //     value: "wheelchair_safety"
    //   },
    //   {
    //     label: "Basic Wheelchair Repair",
    //     value: "basic_wheelchair_repair"
    //   },
    //   {
    //     label: "Wheelchair Cleaning",
    //     value: "wheelchair_cleaning"
    //   },
    //   {
    //     label: "Sports Training",
    //     value: "sports_training"
    //   },
    //   {
    //     label: "Others",
    //     value: "others"
    //   }
    ]
  },

  {
    name: "class_topic_others",
    label: "Others",
    type: "input",
    showIf: {
      field: "class_topic",
      equals: "others"
    }
  },

  {
    name: "booking_date",
    label: "Date",
    type: "date"
  },

  {
    name: "booking_time",
    label: "Time",
    type: "input"
  },

  {
    name: "trainer",
    label: "Trainer",
    type: "single-select",
    options: [
      {
        label: "Staff Name",
        value: "staff_name"
      }
    ]
  },

  {
    name: "participant_list",
    label: "Participant List",
    type: "multi-select-dropdown",
    options: [
      {
        label: "Select Participant / Patient Name",
        value: "participant_name"
      }
    ]
  },
  {type:'subheading',label:'Session'},
    {
    name: "attendance",
    label: "Attendance",
    type: "single-select",
    options: [
    //   {
    //     label: "Present",
    //     value: "present"
    //   },
    //   {
    //     label: "Absent",
    //     value: "absent"
    //   },
    //   {
    //     label: "Late",
    //     value: "late"
    //   }
    ]
  },

  {
    name: "participation",
    label: "Participation",
    type: "single-select",
    options: [
    //   {
    //     label: "Active",
    //     value: "active"
    //   },
    //   {
    //     label: "Moderate",
    //     value: "moderate"
    //   },
    //   {
    //     label: "Minimal",
    //     value: "minimal"
    //   }
    ]
  },

  {
    name: "understanding_level",
    label: "Understanding Level",
    type: "single-select",
    options: [
    //   {
    //     label: "Good",
    //     value: "good"
    //   },
    //   {
    //     label: "Fair",
    //     value: "fair"
    //   },
    //   {
    //     label: "Poor",
    //     value: "poor"
    //   }
    ]
  },

  {
    name: "session_response",
    label: "Session Response",
    type: "single-select",
    options: [
    //   {
    //     label: "Positive",
    //     value: "positive"
    //   },
    //   {
    //     label: "Neutral",
    //     value: "neutral"
    //   },
    //   {
    //     label: "Negative",
    //     value: "negative"
    //   }
    ]
  },

  {
    name: "activity_done",
    label: "Activity Done",
    type: "multi-select-dropdown",
    options: [
    //   {
    //     label: "Wheelchair Maintenance",
    //     value: "wheelchair_maintenance"
    //   },
    //   {
    //     label: "Wheelchair Safety",
    //     value: "wheelchair_safety"
    //   },
    //   {
    //     label: "Basic Wheelchair Repair",
    //     value: "basic_wheelchair_repair"
    //   },
    //   {
    //     label: "Wheelchair Cleaning",
    //     value: "wheelchair_cleaning"
    //   },
    //   {
    //     label: "Sports Training",
    //     value: "sports_training"
    //   }
    ]
  },

  {
    name: "notes",
    label: "Notes",
    type: "input",
    rows: 4
  }
      
    ]
  }]
};

export default function WheelchairGroup({ patient,onSubmit,onBack }) {
  const [values, setValues] = useState({});
    const [submitted, setSubmitted] = useState(false);
  const [showConsentModal, setShowConsentModal] = useState(false);
  const dryNeedlingRef = React.useRef({});
  const wallClimbingRef = React.useRef({});
  const storageKey = patient ? `amputee_progress_${patient.id}` : null;

  useEffect(() => {
    if (!patient) return;
    setValues(v => ({
      ...v,
      referred_by: patient.case_manager || "",
      referral_reasons: patient.diagnosis_history || patient.icd || ""
    }));
  }, [patient]);

  const onChange = (name, value) => {
    setValues(v => ({ ...v, [name]: value }));
    if (name === "consent_obtained" && value && value !== values.consent_obtained) {
      setShowConsentModal(true);
    }
    if (name === "_open_consent_trigger" && value) {
      setValues(v => ({ ...v, consent_obtained: value }));
      setShowConsentModal(true);
    }
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
  const [patientHistory, setPatientHistory] = useState({
    past_medical_history: patient?.medical_history || "",
    past_family_history: patient?.family_medical_history || "",
    alerts_and_allergies: patient?.alerts_and_allergies_history || ""
  });

  function PatientInformationBlock({ patient: currentPatient, history, setHistory }) {
    if (!currentPatient) return null;
    const formatDate = (dateStr) => {
      if (!dateStr) return "-";
      try {
        return new Date(dateStr).toLocaleDateString();
      } catch {
        return "-";
      }
    };

    return (
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, fontSize: 14 }}>
          <div><b>Name:</b> {currentPatient.name}</div>
          <div><b>IC:</b> {currentPatient.id}</div>
          <div><b>DOB:</b> {formatDate(currentPatient.dob)}</div>
          <div><b>Age / Gender:</b> {currentPatient.age} / {currentPatient.sex}</div>
          <div><b>ICD:</b> {currentPatient.icd}</div>
          <div><b>Date of Assessment:</b> {new Date().toLocaleDateString()}</div>
          <div><b>Date of Onset:</b> {formatDate(currentPatient.date_of_onset)}</div>
          <div><b>Duration of Diagnosis:</b> -</div>
          <div><b>Primary Diagnosis:</b> {currentPatient.diagnosis_history || "-"}</div>
          <div><b>Secondary Diagnosis:</b> {currentPatient.medical_history || "-"}</div>
          <div><b>Dominant Side:</b> {currentPatient.dominant_side || "-"}</div>
          <div><b>Language Preference:</b> {currentPatient.language_preference || "-"}</div>
          <div><b>Education Level:</b> {currentPatient.education_background || "-"}</div>
          <div><b>Occupation:</b> {currentPatient.occupation || "-"}</div>
          <div><b>Work Status:</b> {currentPatient.employment_status || "-"}</div>
          <div><b>Driving Status:</b> {currentPatient.driving_status || "-"}</div>
          <div><b>Marital Status:</b> {currentPatient.marital_status || "-"}</div>
          <div><b>PP/OB:</b> {currentPatient.pp_ob || "-"}</div>
          <div style={{ gridColumn: "1 / -1", marginTop: 10 }}>
            <h3>Patient History</h3>
            <div>
              <b>Past Medical History</b>
              <input
                style={taStyle}
                value={history.past_medical_history}
                onChange={e => setHistory(p => ({ ...p, past_medical_history: e.target.value }))}
              />
            </div>
            <div>
              <b>Family History</b>
              <input
                style={taStyle}
                value={history.past_family_history}
                onChange={e => setHistory(p => ({ ...p, past_family_history: e.target.value }))}
              />
            </div>
            <div>
              <b>Allergies</b>
              <input
                style={taStyle}
                value={history.alerts_and_allergies}
                onChange={e => setHistory(p => ({ ...p, alerts_and_allergies: e.target.value }))}
              />
            </div>
            <button style={alertBtn}>🚨 Alerts</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: "100%" }}>
      <CommonFormBuilder schema={CONTAINER_SCHEMA} values={{}} onChange={() => {}}>
        <PatientInformationBlock
          patient={patient}
          history={patientHistory}
          setHistory={setPatientHistory}
          
        />
      </CommonFormBuilder>
      

      {/* <CommonFormBuilder schema={CONSENT_AND_REFERRAL_SCHEMA} values={values} onChange={onChange} /> */}
      <CommonFormBuilder schema={WheelchairGroup_SCHEMA} values={values} onChange={onChange} 
  onAction={handleAction}

      />
       <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
          <button
            type="button"
            style={submitBtn}
            onClick={() => {
              setSubmitted(true);
              onSubmit?.(values);
              alert("Home assessment submitted");
            }}
          >
            Submit
          </button>
        </div>

      
    </div>
  );
}

const taStyle = {
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
const modalOverlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.55)",
  zIndex: 9999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 20
};
const modalBox = {
  background: "#fff",
  width: "95%",
  maxWidth: 1100,
  maxHeight: "92vh",
  borderRadius: 14,
  padding: 24,
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 20px 50px rgba(0,0,0,0.25)"
};
const modalClose = {
  position: "absolute",
  top: 1,
  right: 4,
  border: "none",
  background: "#ef4444",
  color: "#fff",
  width: 29,
  height: 30,
  borderRadius: "50%",
  cursor: "pointer",
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0
};
const saveCloseBtn = {
  padding: "10px 18px",
  border: "none",
  borderRadius: 8,
  background: "#2563eb",
  color: "#fff",
  fontWeight: 700,
  cursor: "pointer"
};
const savedBtn = {
  padding: "10px 14px",
  borderRadius: 8,
  border: "1px solid #2563eb",
  background: "#eff6ff",
  color: "#2563eb",
  fontWeight: 700,
  fontSize: 14,
  cursor: "pointer",
  whiteSpace: "nowrap"
};
const submitBtn = { padding: "12px 32px", background: "#2563EB", color: "#fff", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: "pointer" };
