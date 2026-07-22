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
      

      // {type:'subheading',label:'Chief Complaint Mouse Over', tooltip: "What is the primary functional goal the patient wants to achieve?"},
    {
  name: "chief_complaint",
  label: "Chief Complaint",
  type: "checkbox-group",
  tooltip: "What is the primary functional goal the patient wants to achieve?",
  options: [
    { label: "Pain Reduction / Support", value: "pain_reduction_support" },
    { label: "Joint Immobilization (Splinting)", value: "joint_immobilization" },
    { label: "Mobility Assistance", value: "mobility_assistance" },
    { label: "Grip / Fine Motor Assistance", value: "grip_fine_motor_assistance" },
    { label: "Cosmetic / Anatomical Restoration", value: "cosmetic_restoration" },
    { label: "Protection of Sensitive Area", value: "protection_sensitive_area" },
    { label: "Other", value: "other" }
  ]
},
    {
      name: "chief_complaint_other",
      label: "Other Chief Complaint",
      type: "input",
      showIf: {
        field: "chief_complaint",
        includes: "other"
      }
    },
    // { name: "History of Present", label: "History of Present Illnes", type: "input", }
    // ,

    // {
    //   type: "subheading",
    //   label: "Current Challenges & Symptoms Mouse Over",
    //   tooltip:
    //     "What are the patient's main complaints regarding the affected area?",
    // },
    {
      name: "current_challenges_symptoms",
      label: "Current Challenges & Symptoms",
      type: "checkbox-group",
      tooltip:
        "What are the patient's main complaints regarding the affected area?",
      options: [
        { label: "Constant Pain", value: "constant_pain" },
        { label: "Pain only during activity", value: "pain_activity" },
        { label: "Muscle Weakness / Fatigue", value: "muscle_weakness" },
        { label: "Limited Range of Motion (Stiffness)", value: "limited_rom" },
        { label: "Numbness / Tingling", value: "numbness_tingling" },
        { label: "Sensitivity to Pressure/Touch", value: "sensitivity_pressure" },
        { label: "Swelling (Edema)", value: "swelling_edema" },
        { label: "Other", value: "other" }
      ]
    },
    {
      name: "current_challenges_other",
      label: "Other Symptoms",
      type: "input",
      showIf: {
        field: "current_challenges_symptoms",
        includes: "other"
      }
    },

    // {
    //   type: "subheading",
    //   label: "Occupational Environment Mouse Over",
    //   tooltip:
    //     "What is the primary environment where the device will be used?",
    // },
    {
      name: "occupational_environment",
      label: "Occupational Environment",
      type: "checkbox-group",
      tooltip:
        "What is the primary environment where the device will be used?",
      options: [
        { label: "Office / Indoor", value: "office_indoor" },
        { label: "Daily use / Indoor", value: "daily_indoor" },
        { label: "Industrial / Workshop", value: "industrial_workshop" },
        { label: "Outdoor / Construction", value: "outdoor_construction" },
        { label: "Kitchen / Food Prep", value: "kitchen_food_prep" },
        { label: "Heavy Manual Labor", value: "heavy_manual_labor" },
        { label: "Other", value: "other" }
      ]
    },
    {
      name: "occupational_environment_other",
      label: "Other Environment",
      type: "input",
      showIf: {
        field: "occupational_environment",
        includes: "other"
      }
    },

    // {
    //   type: "subheading",
    //   label: "Experience with Previous Devices Mouse Over",
    //   tooltip:
    //     "If the patient has used a similar device before, what were the issues?",
    // },
     {
      name: "previous_device_experience",
      label: "Experience with Previous Devices",
      type: "checkbox-group",
      tooltip:
        "If the patient has used a similar device before, what were the issues?",
      options: [
        { label: "N/A (First-time user)", value: "na_first_time_user" },
        { label: "Poor Fit", value: "poor_fit" },
        { label: "Heavy / Bulky", value: "heavy_bulky" },
        { label: "Caused Skin Irritation / Chafing", value: "skin_irritation" },
        { label: "Not Durable", value: "not_durable" },
        { label: "Difficult to put on/take off", value: "difficult_donning" },
        { label: "Poor Aesthetics", value: "poor_aesthetics" },
        { label: "Other", value: "other" }
      ]
    },
    {
      name: "previous_device_experience_other",
      label: "Other Device Issues",
      type: "input",
      showIf: {
        field: "previous_device_experience",
        includes: "other"
      }
    },

    // {
    //   type: "subheading",
    //   label: "Patient Preferences",
    //    tooltip:
    //     "Does the patient have specific preferences for the 3D-printed design?",
    // },
    {
      name: "patient_preferences",
      label: "Patient Preferences",
      type: "checkbox-group",
      tooltip:
        "Does the patient have specific preferences for the 3D-printed design?",
      options: [
        { label: "Weight (Prioritize lightness)", value: "lightweight" },
        { label: "Breathability", value: "breathability" },
        { label: "Texture (Smooth vs Grip-enhanced)", value: "texture" },
        { label: "Low Profile", value: "low_profile" },
        { label: "Color Preference", value: "color_preference" },
        { label: "Material Allergies", value: "material_allergies" }
      ]
    },

    {
      name: "preferred_color",
      label: "Preferred Color",
      type: "input",
      showIf: {
        field: "patient_preferences",
        includes: "color_preference"
      }
    },

    {
      name: "material_allergies",
      label: "Material Allergies",
      type: "input",
      placeholder: "e.g., Latex, specific plastics",
      showIf: {
        field: "patient_preferences",
        includes: "material_allergies"
      }
    },

    // {
    //   type: "subheading",
    //   label: "6. Pain Scale"
    // },
    // {
    //   name: "pain_scale",
    //   label: "Pain Scale",
    //   type: "radio",
    //   tooltip:
    //     "How does the patient rate their discomfort during functional tasks (0-10)?",
    //   options: [
    //     { label: "0-3 (Mild)", value: "mild" },
    //     { label: "4-6 (Moderate)", value: "moderate" },
    //     { label: "7-10 (Severe)", value: "severe" }
    //   ]
    // }
{
  name: "pain_score",
  label: "Pain Scale",
  type: "scale-slider",
  info: "How does the patient rate their discomfort during functional tasks (0-10)?",
  min: 0,
  max: 10,
  ranges: [
    {
      min: 0,
      max: 3,
      label: "Mild",
      color: "#22c55e"
    },
    {
      min: 4,
      max: 6,
      label: "Moderate",
      color: "#facc15"
    },
    {
      min: 7,
      max: 10,
      label: "Severe",
      color: "#ef4444"
    }
  ],
  showValue: true
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
      type: "subheading",
      label: "Visual Documentation (Photos) Make Over",
       tooltip:
        "Capture skin condition, posture, and current device wear for visual reference during the CAD process"
    
    },

  
    {
      name: "visual_documentation_photos",
      label: "Upload Picture",
      type: "attach-file",
      accept: "image/*",
      multiple: true
    },

    {
      type: "subheading",
      label: "Physical Measurements Mouse Over",
      tooltip:
        "Reference dimensions for scaling and CAD verification"
    },

    // {
    //   type: "note",
    //   label:
    //     "Reference dimensions for scaling and CAD verification"
    // },
{
  type: "subheading",
  label: "Linear Measurements (mm)"
},
   

        {
          name: "linear_length",
          label: "Length (mm)",
          type: "input"
        },

        {
          name: "linear_width",
          label: "Width (mm)",
          type: "input"
        },

        {
          name: "linear_depth_thickness",
          label: "Depth / Thickness (mm)",
          type: "input"
        },

      

{
  type: "subheading",
  label: "Circumference Proximal(mm)"
},
        {
          name: "circumference_proximal",
          label: "Proximal / Top (mm)",
          type: "input"
        },

        {
          name: "circumference_distal",
          label: "Distal / Bottom (mm)",
          type: "input"
        },

        {
          name: "circumference_joint_midpoint",
          label: "Joint / Mid-point (mm)",
          type: "input"
        },
{
          name: "joint_flexion",
          label: "Flexion (°)",
          type: "input"
        },

        {
          name: "joint_extension",
          label: "Extension (°)",
          type: "input"
        },

    {
      type: "subheading",
      label: "3. 3D Scan File (STL)"
    },

    {
      name: "stl_scan_file",
      label: "Upload STL File",
      type: "attach-file",
      accept: ".stl"
    },

    {
      name: "objective_remarks",
      label: "Remarks",
      type: "input",
      rows: 4,
      placeholder: "Enter remarks"
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


   

    // {
    //   type: "note",
    //   label:
    //     "What is the core problem the device must solve?"
    // },

    {
      name: "clinical_engineering_impression",
      label: "Clinical & Engineering Impression",
      tooltip:'What is the core problem the device must solve?',
      type: "checkbox-group",
      options: [
        {
          label: "Structural Instability (Needs rigid support)",
          value: "structural_instability"
        },
        {
          label: "Functional Deficit (Needs tool-holding capability)",
          value: "functional_deficit"
        },
        {
          label: "Pressure Management (Needs relief zones for scars/bony parts)",
          value: "pressure_management"
        },
        {
          label: "Joint Correction (Needs specific alignment)",
          value: "joint_correction"
        },
        {
          label: "Replacement (Missing limb/part)",
          value: "replacement"
        }
      ]
    },

    {
      type: "subheading",
      label: "Design Strategy Mouse Over",
      tooltip:"What is the logic behind the proposed 3D model?"
    },

    // {
    //   type: "note",
    //   label:
    //     "What is the logic behind the proposed 3D model?"
    // },

    
        {
          name: "design_form",
          label: "Form",
          type: "radio",
          options: [
            {
              label: "Minimalist / Skeletal",
              value: "minimalist_skeletal"
            },
            {
              label: "Full Coverage",
              value: "full_coverage"
            },
            {
              label: "Modular (Replaceable parts)",
              value: "modular"
            }
          ]
        },
    

   
        {
          name: "design_mechanics",
          label: "Mechanics",
          type: "radio",
          options: [
            {
              label: "Static (No movement)",
              value: "static"
            },
            {
              label: "Dynamic (Flexible/Hinged)",
              value: "dynamic"
            }
          ]
        },
   

 
        {
          name: "wall_thickness",
          label: "Wall Thickness",
          type: "radio",
          options: [
            {
              label: "Ultra-light (1-2mm)",
              value: "ultra_light"
            },
            {
              label: "Standard (3-4mm)",
              value: "standard"
            },
            {
              label: "Heavy Duty (5mm+)",
              value: "heavy_duty"
            }
          ]
        },
  

   
        {
          name: "ventilation_strategy",
          label: "Ventilation",
          type: "radio",
          options: [
            {
              label: "Solid (Max strength)",
              value: "solid"
            },
            {
              label: "Perforated / Mesh (Breathability)",
              value: "perforated_mesh"
            },
            {
              label: "Lattice structure",
              value: "lattice_structure"
            }
          ]
        },
  {
  type: "subheading",
  label: "Material Selection Mouse Over",
  tooltip:"Why choose this specific filament?"
},

// {
//   type: "note",
//   label: "Why choose this specific filament?"
// },

// {
//   name: "material_selection",
//   label: "Material Selection",
//   type: "checkbox-group",
//   options: [
//     {
//       label: "PLA / PLA+ : Rapid prototyping / Low-load use",
//       value: "pla_pla_plus"
//     },
//     {
//       label: "PETG : Chemical resistance / Balance of strength and flex",
//       value: "petg"
//     },
//     {
//       label: "TPU (Flexible) : Skin comfort / Shock absorption / Hinges",
//       value: "tpu_flexible"
//     },
//     {
//       label: "Nylon (PA) : High durability / Low friction for moving parts",
//       value: "nylon_pa"
//     },
//     {
//       label: "Carbon Fiber Reinforced (PA-CF / PET-CF) : Maximum stiffness for industrial work",
//       value: "carbon_fiber_reinforced"
//     }
//   ]
// },
{
    name: "pla_reason",
    label: "PLA / PLA+",
    type: "radio",
    options: [
      {
        label: "Rapid prototyping",
        value: "rapid_prototyping"
      },
      {
        label: "Low-load use",
        value: "low_load_use"
      }
    ]
  },

  {
    name: "petg_reason",
    label: "PETG",
    type: "radio",
    options: [
      {
        label: "Chemical resistance",
        value: "chemical_resistance"
      },
      {
        label: "Balance of strength and flex",
        value: "strength_and_flex"
      }
    ]
  },

  {
    name: "tpu_reason",
    label: "TPU (Flexible)",
    type: "radio",
    options: [
      {
        label: "Skin comfort",
        value: "skin_comfort"
      },
      {
        label: "Shock absorption",
        value: "shock_absorption"
      },
      {
        label: "Hinges",
        value: "hinges"
      }
    ]
  },

  {
    name: "nylon_reason",
    label: "Nylon (PA)",
    type: "radio",
    options: [
      {
        label: "High durability",
        value: "high_durability"
      },
      {
        label: "Low friction for moving parts",
        value: "low_friction"
      }
    ]
  },

  {
    name: "carbon_fiber_reason",
    label: "Carbon Fiber Reinforced (PA-CF / PET-CF)",
    type: "radio",
    options: [
      {
        label: "Maximum stiffness for industrial work",
        value: "maximum_stiffness"
      }
    ]
  },
{
  type: "subheading",
  label: "Risk Assessment Mouse Over",
  tooltip:"What could go wrong with this design?"
},

// {
//   type: "note",
//   label: "What could go wrong with this design?"
// },

{
  name: "risk_assessment",
  // label: "Risk Assessment",
  type: "checkbox-group",
  options: [
    {
      label: "High Breakage Risk: Due to high-impact work environment",
      value: "high_breakage_risk"
    },
    {
      label: "Skin Breakdown: Potential friction at the edges",
      value: "skin_breakdown"
    },
    {
      label: "Fit Issues: High volume fluctuation (swelling) in patient's limb",
      value: "fit_issues"
    },
    {
      label: "Complexity: Patient may struggle with cleaning or assembly",
      value: "complexity"
    }
  ]
},
{type:'input',label:'Design Summery',name:'design_summery'}

      
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
      type: "subheading",
      label: "Design & Modeling (CAD) Mouse Over",
      tooltip:"What steps will be taken to create the digital model?"
    },

    // {
    //   type: "note",
    //   label:
    //     "What steps will be taken to create the digital model?"
    // },

    {
      name: "design_modeling_cad",
     
      type: "checkbox-group",
     
      options: [
        {
          label: "Sculpting / Smoothing (Clean scan data)",
          value: "sculpting_smoothing"
        },
        {
          label: "Solid / Surface Design (Create mechanical model)",
          value: "solid_surface_design"
        },
        {
          label: "Feature Addition (Add straps, mounts, or tool holders)",
          value: "feature_addition"
        },
        {
          label: "Ventilation / Perforation (Add air holes for comfort)",
          value: "ventilation_perforation"
        },
        {
          label: "Multi-part Assembly (Design joints or hinges)",
          value: "multi_part_assembly"
        }
      ]
    },
  {
      type: "subheading",
      label: "Manufacturing Specs (3D Printing) Mouse Over",
      tooltip:"What are the technical requirements for the build?"
    },

    // {
    //   type: "note",
    //   label:
    //     "What are the technical requirements for the build?"
    // },

    {
          name: "manufacturing_material",
          label: "Material",
          type: "radio",
          options: [
            {
              label: "PLA (Prototype)",
              value: "pla_prototype"
            },
            {
              label: "PETG (Standard)",
              value: "petg_standard"
            },
            {
              label: "TPU (Flexible)",
              value: "tpu_flexible"
            },
            {
              label: "PA-CF (Heavy Duty)",
              value: "pa_cf_heavy_duty"
            },
            {
              label: "Resin (High Detail)",
              value: "resin_high_detail"
            }
          ]
        },
        {
          name: "infill_pattern",
          label: "Infill Pattern",
          type: "radio",
          options: [
            {
              label: "Gyroid",
              value: "gyroid"
            },
            {
              label: "Honeycomb",
              value: "honeycomb"
            },
            {
              label: "Solid (100%)",
              value: "solid_100"
            }
          ]
        },
         {
          name: "infill_density",
          label: "Infill Density",
          type: "radio",
          options: [
            {
              label: "Low (<20%)",
              value: "low"
            },
            {
              label: "Med (20-50%)",
              value: "medium"
            },
            {
              label: "High (>50%)",
              value: "high"
            }
          ]
        },
         {
          name: "special_instructions",
          label: "Special Instructions",
          type: "radio",
          options: [
            {
              label: "Support structures needed",
              value: "support_structures_needed"
            },
            {
              label: "Multi-material print",
              value: "multi_material_print"
            }
          ]
        },
    //     {
    //   type: "subheading",
    //   label: "Post-Processing & Assembly Mouse Over",
    //   tooltip:"What happens after the print is finished?"
    // },

    // {
    //   type: "note",
    //   label:
    //     "What happens after the print is finished?"
    // },

    {
      name: "post_processing_assembly",
      label: "Post-Processing & Assembly",
      tooltip:"What happens after the print is finished?",
      type: "checkbox-group",
      options: [
        {
          label: "Support removal & Sanding",
          value: "support_removal_sanding"
        },
        {
          label: "Annealing (Heat treatment for strength)",
          value: "annealing"
        },
        {
          label: "Padding / Lining (Add EVA foam or silicone)",
          value: "padding_lining"
        },
        {
          label: "Hardware Assembly (Bolts, Velcro straps, buckles)",
          value: "hardware_assembly"
        },
        {
          label: "Coating (Chemical resistance / Waterproofing)",
          value: "coating"
        }
      ]
    },
 {
      type: "subheading",
      label: "Inventory Details"
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
      name: "inventory_quantity",
      label: "Quantity",
      type: "input"
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
export default function ThreeDAssessment({ patient, onBack }) {
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