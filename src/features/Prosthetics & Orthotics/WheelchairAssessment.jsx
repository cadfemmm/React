import { useState, useEffect } from "react";
import CommonFormBuilder from "../CommonComponenets/FormBuilder";
// import PatientCard from "../../../shared/cards/PatientCard";

/* ── Shared actions ── */
// const ACTIONS = [
//   { type: "clear", label: "Clear" },
//   { type: "save",  label: "Save"  },
// ];

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
      {
  name: "chief_complaint",
  label: "Chief Complaint",
  type: "checkbox-group",
  options: [
    { label: "Brakes are not working / ineffective", value: "brakes_not_working" },
    { label: "Wheels are heavy / stiff", value: "wheels_heavy_stiff" },
    { label: "Difficult to push", value: "difficult_to_push" },
    { label: "Strange noises when moving", value: "strange_noises" },
    { label: "Cannot move / immobilized", value: "cannot_move" },
    { label: "Loose armrest", value: "loose_armrest" },
    { label: "Torn seat", value: "torn_seat" },
    { label: "Uncomfortable", value: "uncomfortable" },
    { label: "Loose or damaged footrest", value: "damaged_footrest" },
    { label: "Wheelchair veering to one side", value: "veering_one_side" },
    { label: "Brake not holding properly", value: "brake_not_holding" },
    { label: "Wheel wobbling", value: "wheel_wobbling" },
    { label: "Handlebar loose", value: "handlebar_loose" }
  ]
},

{
  name: "chief_complaint_remarks",
  label: "Chief Complaint Remarks",
  type: "input",
  placeholder: "Enter additional remarks",
  showIf: {
    field: "chief_complaint",
    hasAnyValue: true
  }
},

      { name: "History of Present", label: "History of Present Illnes", type: "input" },


{
  name: "issue_occur",
  label: "Issue Occur",
  type: "checkbox-group",
  options: [
    { label: "During use", value: "during_use" },
    { label: "While moving", value: "while_moving" },
    { label: "During operation", value: "during_operation" },
    { label: "After use", value: "after_use" },
    { label: "At rest", value: "at_rest" },
    { label: "During transfer", value: "during_transfer" },
    { label: "During braking", value: "during_braking" },
    { label: "During turning", value: "during_turning" },
    { label: "After collision / impact", value: "after_collision" },
    { label: "After maintenance / repair", value: "after_maintenance" },
    { label: "During loading / unloading", value: "during_loading" }
  ]
},

{
  name: "issue_occur_remarks",
  label: " Issue Occur Remarks",
  type: "input",
  placeholder: "Enter additional remarks",
  showIf: {
    field: "issue_occur",
    hasAnyValue: true
  }
}
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
  name: "current_wheelchair",
  label: "Current Wheelchair",
  type: "single-select",
  options: [
    { label: "Light", value: "light" },
    { label: "Recliner", value: "recliner" },
    { label: "Heavy Duty", value: "heavy_duty" },
    { label: "Standard", value: "standard" },
    { label: "Motorised", value: "motorised" },
    { label: "Tilt-in-space", value: "tilt_in_space" }
  ]
},

{
  name: "current_wheelchair_remarks",
  label: "Remarks",
  type: "input",
  placeholder: "Enter remarks about current wheelchair",
  showIf: {
    field: "current_wheelchair",
    hasAnyValue: true
  }
},

{
  name: "wheelchair_size",
  label: "Wheelchair Size",
  type: "input",
  placeholder: "Enter wheelchair size"
},

{
  name: "observation",
  label: "Observation",
  type: "radio",
  options: [
    { label: "Repair", value: "repair" },
    { label: "Modify", value: "modify" },
    { label: "Customise", value: "customise" }
  ]
},

/* ================= REPAIR ================= */

{
  name: "repair_issues",
  label: "Repair",
  type: "checkbox-group",
  options: [
    { label: "Worn-out tires", value: "worn_out_tires" },
    { label: "Flat / punctured tire", value: "flat_tire" },
    { label: "Loose screws", value: "loose_screws" },
    { label: "Brakes are not gripping", value: "brakes_not_gripping" },
    { label: "Damaged bearings", value: "damaged_bearings" },
    { label: "Bent frame", value: "bent_frame" },
    { label: "Motor is unresponsive", value: "motor_unresponsive" },
    { label: "Defective controller", value: "defective_controller" },
    { label: "Weak battery", value: "weak_battery" },
    { label: "Thin or damaged cushion", value: "damaged_cushion" },
    { label: "Wheel misalignment", value: "wheel_misalignment" },
    { label: "Wheel wobble", value: "wheel_wobble" },
    { label: "Brake cable loose / stretched", value: "brake_cable_loose" },
    { label: "Brake pad worn out", value: "brake_pad_worn" },
    { label: "Rusted components", value: "rusted_components" },
    { label: "Broken caster wheel", value: "broken_caster_wheel" },
    { label: "Loose joystick", value: "loose_joystick" },
    { label: "Charging port faulty", value: "charging_port_faulty" },
    { label: "Electrical wiring loose / damaged", value: "electrical_wiring_damaged" },
    { label: "Unusual vibration during movement", value: "unusual_vibration" }
  ],
  showIf: {
    field: "observation",
    equals: "repair"
  }
},

{
  name: "repair_remarks",
  label: "Repair Remarks",
  type: "input",
  placeholder: "Enter repair remarks",
  showIf: {
    field: "observation",
    equals: "repair"
  }
},

/* ================= MODIFY ================= */

{
  name: "modify_options",
  label: "Modify",
  type: "checkbox-group",
  options: [
    { label: "Add stump board", value: "add_stump_board" },
    { label: "Others", value: "others" }
  ],
  showIf: {
    field: "observation",
    equals: "modify"
  }
},

{
  name: "modify_other_details",
  label: "Other Modification Details",
  type: "input",
  placeholder: "Enter modification details",
  showIf: {
    field: "modify_options",
    includes: "others"
  }
},

/* ================= CUSTOMISE ================= */

{
  name: "customise_options",
  label: "Customise",
  type: "checkbox-group",
  options: [
    { label: "Custom seating system", value: "custom_seating_system" },
    { label: "Others", value: "others" }
  ],
  showIf: {
    field: "observation",
    equals: "customise"
  }
},

{
  name: "customise_other_details",
  label: "Other Customisation Details",
  type: "input",
  placeholder: "Enter customisation details",
  showIf: {
    field: "customise_options",
    includes: "others"
  }
},

/* ================= FINAL REMARKS ================= */

{
  name: "objective_final_remarks",
  label: "Remarks",
  type: "input",
  placeholder: "Enter additional remarks"
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
  name: "problem_diagnostic",
  label: "Problem Diagnostic",
  type: "multi-select-dropdown",
  options: [
    { label: "Broken / faulty brakes", value: "faulty_brakes" },
    { label: "Tires need replacement", value: "tires_replacement" },
    { label: "Jammed / worn-out bearings", value: "worn_bearings" },
    { label: "Defective / broken motor", value: "broken_motor" },
    { label: "Dead / weak battery", value: "weak_battery" },
    { label: "Faulty controller", value: "faulty_controller" },
    { label: "Unstable frame", value: "unstable_frame" },
    { label: "Maintenance required", value: "maintenance_required" },
    { label: "Incorrect alignment", value: "incorrect_alignment" },
    { label: "Loose components", value: "loose_components" },
    { label: "Brake system failure", value: "brake_system_failure" },
    { label: "Wheel misalignment", value: "wheel_misalignment" },
    { label: "Wheel assembly damage", value: "wheel_assembly_damage" },
    { label: "Axle damage / bent axle", value: "axle_damage" },
    { label: "Caster wheel failure", value: "caster_failure" },
    { label: "Wiring fault / short circuit", value: "wiring_fault" },
    { label: "Charging system failure", value: "charging_failure" },
    { label: "Power supply interruption", value: "power_supply_issue" },
    { label: "Intermittent motor failure", value: "motor_failure" },
    { label: "Joystick malfunction", value: "joystick_malfunction" },
    { label: "Frame crack / fracture", value: "frame_crack" },
    { label: "Weld failure", value: "weld_failure" },
    { label: "Armrest mechanism failure", value: "armrest_failure" },
    { label: "Footrest mechanism failure", value: "footrest_failure" }
  ]
},



{
  name: "performance_condition",
  label: "Performance / Condition",
  type: "single-select",
  options: [
    { label: "Excessive wear and tear", value: "wear_and_tear" },
    { label: "Reduced mobility performance", value: "reduced_mobility" },
    { label: "Safety risk identified", value: "safety_risk" },
    { label: "Requires urgent repair / replacement", value: "urgent_repair" }
  ]
},



{
  name: "safety_risk",
  label: "Safety Risk",
  type: "radio",
  options: [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" }
  ]
},



{
  name: "recommended_action",
  label: "Recommended Action",
  type: "radio",
  options: [
    { label: "Replace", value: "replace" },
    { label: "Service", value: "service" },
    { label: "Reject use", value: "reject_use" }
  ]
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


/* ================= TYPE OF SERVICE ================= */

{
  name: "type_of_service",
  label: "Type of Service",
  type: "radio",
  options: [
    { label: "Repair", value: "repair" },
    { label: "Modify", value: "modify" },
    { label: "Custom", value: "custom" }
  ]
},

/* ================= REPAIR TYPE ================= */

{
  name: "repair_type",
  label: "Repair Type",
  type: "radio",
  options: [
    { label: "Minor", value: "minor" },
    { label: "Major", value: "major" }
  ],
  showIf: {
    field: "type_of_service",
    equals: "repair"
  }
},

/* ================= MINOR REPAIR ================= */

{
  name: "minor_repair_services",
  label: "Minor Repair",
  type: "checkbox-group",
  options: [
    { label: "Inspection / check-up", value: "inspection" },
    { label: "Tighten screws", value: "tighten_screws" },
    { label: "Lubrication (grease moving parts)", value: "lubrication" },
    { label: "Adjust alignment", value: "adjust_alignment" }
  ],
  showIf: {
    field: "repair_type",
    equals: "minor"
  }
},

{
  name: "minor_repair_remarks",
  label: "Minor Repair Remarks",
  type: "input",
  placeholder: "Enter remarks",
  showIf: {
    field: "repair_type",
    equals: "minor"
  }
},

/* ================= MAJOR REPAIR ================= */

{
  name: "major_repair_services",
  label: "Major Repair",
  type: "checkbox-group",
  options: [
    { label: "Repair motor", value: "repair_motor" },
    { label: "Replace battery", value: "replace_battery" },
    { label: "Replace controller", value: "replace_controller" },
    { label: "Full wheelchair service", value: "full_service" },
    { label: "Weld repair (frame / joint welding)", value: "weld_repair" },
    { label: "Cable replacement (brake / electrical)", value: "cable_replacement" },
    { label: "Replace tires", value: "replace_tires" },
    { label: "Replace brakes", value: "replace_brakes" },
    { label: "Replace bearings", value: "replace_bearings" },
    { label: "Charger replacement / repair", value: "charger_repair" },
    { label: "Calibration (joystick / controller setting)", value: "calibration" }
  ],
  showIf: {
    field: "repair_type",
    equals: "major"
  }
},

/* ================= MODIFY ================= */

{
  name: "modify_services",
  label: "Modify",
  type: "checkbox-group",
  options: [
    { label: "Add stump board", value: "add_stump_board" },
    { label: "Others", value: "others" }
  ],
  showIf: {
    field: "type_of_service",
    equals: "modify"
  }
},

{
  name: "modify_other_service",
  label: "Other Modification",
  type: "input",
  placeholder: "Enter modification details",
  showIf: {
    field: "modify_services",
    includes: "others"
  }
},

/* ================= CUSTOM ================= */

{
  name: "custom_services",
  label: "Customise",
  type: "checkbox-group",
  options: [
    { label: "Custom seating system", value: "custom_seating_system" },
    { label: "Others", value: "others" }
  ],
  showIf: {
    field: "type_of_service",
    equals: "custom"
  }
},

{
  name: "custom_other_service",
  label: "Other Customisation",
  type: "input",
  placeholder: "Enter customisation details",
  showIf: {
    field: "custom_services",
    includes: "others"
  }
},

/* ================= DATE & TIME ================= */

{
  name: "service_datetime",
  label: "Date and Time",
  type: "date"
},

{
  name: "completion_date",
  label: "Completion Date",
  type: "date"
},

{
  name: "estimated_time",
  label: "Estimated Time",
  type: "radio",
  options: [
    { label: "Hour", value: "hour" },
    { label: "Day", value: "day" }
  ]
},

/* ================= INVENTORY ITEMS ================= */

{
  name: "wheelchair_items",
  label: "Item",
  type: "single-select",
  options: [
    // { label: "Battery", value: "battery" },
    // { label: "Brake", value: "brake" },
    // { label: "Motor", value: "motor" },
    // { label: "Controller", value: "controller" },
    // { label: "Wheel", value: "wheel" },
    // { label: "Caster Wheel", value: "caster_wheel" },
    // { label: "Joystick", value: "joystick" },
    // { label: "Seat Cushion", value: "seat_cushion" },
    // { label: "Tire", value: "tire" },
    // { label: "Bearing", value: "bearing" }
  ]
},

{
  name: "item_quantity",
  label: "Quantity",
  type: "input",
  min: 1
},

{
  name: "unit_type",
  label: "Unit Type",
  type: "radio",
  options: [
    { label: "PCS", value: "pcs" },
    { label: "Set", value: "set" },
    { label: "Pair", value: "pair" }
  ]
},

{
  name: "add_inventory_item",
  label: "Add Item",
  type: "button",
  buttonText: "Add Item & Quantity"
},

{
  name: "inventory_remark",
  label: "Remark",
  type: "input",
  placeholder: "Enter inventory remarks"
},

/* ================= INVENTORY UPDATE ================= */

{
  name: "charging_inventory_update",
  label: "Charging & Auto Inventory Update",
  type: "button",
  buttonText: "Update Inventory"
},

/* ================= JOB STATUS ================= */

{
  name: "job_status",
  label: "Status Job",
  type: "radio",
  options: [
    { label: "Pending", value: "pending" },
    { label: "In Progress", value: "in_progress" },
    { label: "Completed", value: "completed" },
    { label: "On Hold", value: "on_hold" }
  ]
},

/* ================= REFERRAL ================= */

{
  type: "input",
  label: "Referral",
  name:'referral',
},

{
  name: "referral_department",
  label: "Department",
  type: "single-select",
  options: [
    // { label: "Physiotherapy", value: "physiotherapy" },
    // { label: "Occupational Therapy", value: "occupational_therapy" },
    // { label: "Orthotics & Prosthetics", value: "orthotics_prosthetics" },
    // { label: "Rehabilitation", value: "rehabilitation" },
    // { label: "Neurology", value: "neurology" }
  ]
},

{
  name: "assistive_device_prescribed",
  label: "Assistive Device Prescribed",
  type: "radio",
  options: [
    { label: "Wheelchair", value: "wheelchair" },
    { label: "Other", value: "other" }
  ]
},

{
  name: "assistive_device_other",
  label: "Other Assistive Device",
  type: "input",
  placeholder: "Enter assistive device",
  showIf: {
    field: "assistive_device_prescribed",
    equals: "other"
  }
},

{
  name: "referral_remark",
  label: "Remark",
  type: "input",
  placeholder: "Enter referral remarks"
}      
        
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
export default function WheelchairAssessment({ patient, onBack }) {
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