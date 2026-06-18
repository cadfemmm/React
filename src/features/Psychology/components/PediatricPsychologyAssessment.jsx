import React, { useEffect, useState, createContext, useContext } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import PatientCard from "../../../shared/cards/PatientCard";
// Import original assessment components
import DASSFormBuilder from "./DassForm";
import PSSFormBuilder from "./PssForm";
import PHQ9FormBuilder from "./PhqForm";
import GAD7FormBuilder from "./GadForm";
import HAMDFormBuilder from "./HamdForm";
import HAM_A_FormBuilder from "./HamaForm";

import { ASSESSMENT_TABS } from "../../../schema/actions";
import PSYCHO_PEDIA_IA_SCHEMA from "../../../schema/psychology/pediatricinitial";
/* ===================== HELPERS (module-level so they're always available) ===================== */

const today = new Date();

const formatDate = (d) => (d ? new Date(d).toLocaleDateString() : "-");

// Create context to pass patient to assessment components
const PatientContext = createContext(null);

// Adapter components that bridge values/onChange to patient/onSubmit/onBack
function DASS21Adapter({ values, onChange }) {
  const patient = useContext(PatientContext);
  const handleSubmit = (payload) => {
    // Store in parent values using namespace
    if (payload && payload.values) {
      Object.keys(payload.values).forEach((key) => {
        onChange(`dass21_${key}`, payload.values[key]);
      });
    }
  };
  const handleBack = () => {
    // Close the assessment by clearing the active key
    const activeKey = "psychology_assessments_active";
    onChange(activeKey, null);
  };
  return (
    <DASSFormBuilder
      patient={patient}
      onSubmit={handleSubmit}
      onBack={handleBack}
    />
  );
}

function PSSAdapter({ values, onChange }) {
  const patient = useContext(PatientContext);
  const handleSubmit = (payload) => {
    if (payload && payload.values) {
      Object.keys(payload.values).forEach((key) => {
        onChange(`pss_${key}`, payload.values[key]);
      });
    }
  };
  const handleBack = () => {
    const activeKey = "psychology_assessments_active";
    onChange(activeKey, null);
  };
  return (
    <PSSFormBuilder
      patient={patient}
      onSubmit={handleSubmit}
      onBack={handleBack}
    />
  );
}

function PHQ9Adapter({ values, onChange }) {
  const patient = useContext(PatientContext);
  const handleSubmit = (payload) => {
    if (payload && payload.values) {
      Object.keys(payload.values).forEach((key) => {
        onChange(`phq9_${key}`, payload.values[key]);
      });
    }
  };
  const handleBack = () => {
    const activeKey = "psychology_assessments_active";
    onChange(activeKey, null);
  };
  return (
    <PHQ9FormBuilder
      patient={patient}
      onSubmit={handleSubmit}
      onBack={handleBack}
    />
  );
}

function GAD7Adapter({ values, onChange }) {
  const patient = useContext(PatientContext);
  const handleSubmit = (payload) => {
    if (payload && payload.values) {
      Object.keys(payload.values).forEach((key) => {
        onChange(`gad7_${key}`, payload.values[key]);
      });
    }
  };
  const handleBack = () => {
    const activeKey = "psychology_assessments_active";
    onChange(activeKey, null);
  };
  return (
    <GAD7FormBuilder
      patient={patient}
      onSubmit={handleSubmit}
      onBack={handleBack}
    />
  );
}

function HAMDAdapter({ values, onChange }) {
  const patient = useContext(PatientContext);
  const handleSubmit = (payload) => {
    if (payload && payload.values) {
      Object.keys(payload.values).forEach((key) => {
        onChange(`hamd_${key}`, payload.values[key]);
      });
    }
  };
  const handleBack = () => {
    const activeKey = "psychology_assessments_active";
    onChange(activeKey, null);
  };
  return (
    <HAMDFormBuilder
      patient={patient}
      onSubmit={handleSubmit}
      onBack={handleBack}
    />
  );
}

function HAMAAdapter({ values, onChange }) {
  const patient = useContext(PatientContext);
  const handleSubmit = (payload) => {
    if (payload && payload.values) {
      Object.keys(payload.values).forEach((key) => {
        onChange(`hama_${key}`, payload.values[key]);
      });
    }
  };
  const handleBack = () => {
    const activeKey = "psychology_assessments_active";
    onChange(activeKey, null);
  };
  return (
    <HAM_A_FormBuilder
      patient={patient}
      onSubmit={handleSubmit}
      onBack={handleBack}
    />
  );
}

// Assessment Registry - using original components with adapters
export const PSYCHOLOGY_ASSESSMENT_REGISTRY = {
  dass21: DASS21Adapter,
  pss: PSSAdapter,
  phq9: PHQ9Adapter,
  gad7: GAD7Adapter,
  hamd: HAMDAdapter,
  hama: HAMAAdapter,
};

/* ===================== OPTIONS ===================== */

const YES_NO = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

/* ===================== DEVELOPMENT DATA (module-level) ===================== */

const DEVELOPMENT_DATA = {
  "2-5_months": {
    sections: [
      {
        fields: [
          {
            name: "milestone_2_5m_gross_motor",
            label: "Gross Motor",
            type: "radio-group",
            options: [
              { label: "Head when held", value: "head_when_held" },
              { label: "Sit with support", value: "sit_with_support" },
              { label: "Arms out", value: "arms_out" },
            ],
          },
          {
            name: "milestone_2_5m_fine_motor",
            label: "Fine Motor",
            type: "radio-group",
            options: [
              { label: "Ability to open hand", value: "open_hand" },
              { label: "Batting objects", value: "batting_objects" },
              { label: "Palmar grasp", value: "palmar_grasp" },
              {
                label: "Reaching and obtaining objects",
                value: "reaching_objects",
              },
            ],
          },
          {
            name: "milestone_2_5m_speech",
            label: "Speech & Language",
            type: "radio-group",
            options: [
              { label: "Turns to voice / sound", value: "turns_to_voice" },
              { label: "Cooing", value: "cooing" },
              { label: "Laughing", value: "laughing" },
              { label: "Squealing", value: "squealing" },
            ],
          },
          {
            name: "milestone_2_5m_cognitive",
            label: "Cognitive / Problem Solving",
            type: "radio-group",
            options: [
              { label: "Prefers usual caregiver", value: "prefers_caregiver" },
              {
                label: "Responds to new objects / situation",
                value: "responds_new_objects",
              },
              { label: "Eyes can follow object", value: "eyes_follow" },
              { label: "Anticipating routine", value: "anticipating_routine" },
              {
                label: "Explores object with senses (eyes, hands, mouth)",
                value: "explores_senses",
              },
            ],
          },
          {
            name: "milestone_2_5m_social",
            label: "Social / Emotional",
            type: "radio-group",
            options: [
              {
                label: "Develop child-parent attachment",
                value: "parent_attachment",
              },
              { label: "Social smile", value: "social_smile" },
              { label: "Taking turns in conversations", value: "turn_taking" },
              { label: "Exploring parent's face", value: "exploring_face" },
            ],
          },
        ],
      },
    ],
  },
  "6-9_months": {
    sections: [
      {
        fields: [
          {
            name: "milestone_6_9m_gross_motor",
            label: "Gross Motor",
            type: "radio-group",
            options: [
              { label: "Sits tripod", value: "sits_tripod" },
              { label: "Creeps", value: "creeps" },
              { label: "Pulls to stand", value: "pulls_to_stand" },
              { label: "Sits well", value: "sits_well" },
              { label: "Postural reflex", value: "postural_reflex" },
            ],
          },
          {
            name: "milestone_6_9m_fine_motor",
            label: "Fine Motor",
            type: "radio-group",
            options: [
              {
                label: "Raking and / or inferior pincer grasp",
                value: "raking_grasp",
              },
              { label: "Pokes at objects", value: "pokes_objects" },
              {
                label: "Transferring items from hand to hand",
                value: "transfers_hand",
              },
            ],
          },
          {
            name: "milestone_6_9m_speech",
            label: "Speech & Language",
            type: "radio-group",
            options: [
              {
                label: "Specific babbling (mama, dada)",
                value: "specific_babbling",
              },
              { label: "Gestures (bye-bye)", value: "gestures" },
              { label: "Nonspecific babbling", value: "nonspecific_babbling" },
            ],
          },
          {
            name: "milestone_6_9m_cognitive",
            label: "Cognitive / Problem Solving",
            type: "radio-group",
            options: [
              { label: "Object permanence", value: "object_permanence" },
              {
                label: "Searches for dropped / partially hidden object",
                value: "searches_hidden",
              },
              { label: "Worry to stranger", value: "stranger_anxiety" },
            ],
          },
          {
            name: "milestone_6_9m_social",
            label: "Social / Emotional",
            type: "radio-group",
            options: [
              {
                label: "Showing separation anxiety",
                value: "separation_anxiety",
              },
              { label: "Expressing basic emotions", value: "basic_emotions" },
            ],
          },
        ],
      },
    ],
  },
  "12-18_months": {
    sections: [
      {
        fields: [
          {
            name: "milestone_12_18m_gross_motor",
            label: "Gross Motor",
            type: "radio-group",
            options: [
              { label: "Starts to walk", value: "starts_walk" },
              { label: "Starts to run", value: "starts_run" },
              { label: "Stops and stands up", value: "stops_stands" },
              { label: "Run", value: "run" },
            ],
          },
          {
            name: "milestone_12_18m_fine_motor",
            label: "Fine Motor",
            type: "radio-group",
            options: [
              { label: "Fine pincer", value: "fine_pincer" },
              {
                label: "Releasing object voluntarily",
                value: "releasing_object",
              },
              { label: "Scribbles", value: "scribbles" },
              { label: "Throwing object", value: "throwing" },
              {
                label: "Starts to feed self (finger, spoon)",
                value: "self_feed",
              },
              { label: "Drink from open-top cup", value: "open_cup" },
              { label: "Carrying toys while walking", value: "carry_toys" },
              { label: "Removing clothes", value: "removing_clothes" },
            ],
          },
          {
            name: "milestone_12_18m_speech",
            label: "Speech & Language",
            type: "radio-group",
            options: [
              { label: "Additional new meaning words", value: "new_words" },
              { label: "Points to body parts", value: "points_body" },
              { label: "Labelling common objects", value: "labelling_objects" },
            ],
          },
          {
            name: "milestone_12_18m_cognitive",
            label: "Cognitive / Problem Solving",
            type: "radio-group",
            options: [
              {
                label: "Able to try or experiment things",
                value: "experimenting",
              },
              { label: "Imitating", value: "imitating" },
            ],
          },
          {
            name: "milestone_12_18m_social",
            label: "Social / Emotional",
            type: "radio-group",
            options: [
              { label: "Parallel play", value: "parallel_play" },
              { label: "Points at desired object", value: "points_desired" },
              { label: "Explore from secure base", value: "secure_base" },
              { label: "Shared attention", value: "shared_attention" },
              { label: "Brings toys to parent", value: "brings_toys" },
              { label: "Increased independence", value: "independence" },
            ],
          },
        ],
      },
    ],
  },
  "2_years": {
    sections: [
      {
        fields: [
          {
            name: "milestone_2y_gross_motor",
            label: "Gross Motor",
            type: "radio-group",
            options: [
              { label: "Jumps on two feet", value: "jumps_two_feet" },
              {
                label: "Starts to climb stairs up and down",
                value: "climbs_stairs",
              },
            ],
          },
          {
            name: "milestone_2y_fine_motor",
            label: "Fine Motor",
            type: "radio-group",
            options: [
              {
                label: "Establishment of apparent handedness",
                value: "handedness",
              },
            ],
          },
          {
            name: "milestone_2y_speech",
            label: "Speech & Language",
            type: "radio-group",
            options: [
              { label: "2-word phrases", value: "two_word_phrases" },
              { label: "Following 2-step command", value: "two_step_command" },
              {
                label: "Vocabulary 50+ words / 50% comprehensible",
                value: "vocab_50",
              },
            ],
          },
          {
            name: "milestone_2y_cognitive",
            label: "Cognitive / Problem Solving",
            type: "radio-group",
            options: [
              {
                label: "Trying new problem solving approach without rehearsing",
                value: "new_problem_solving",
              },
              {
                label:
                  "Searching for hidden object after numerous displacements",
                value: "hidden_object_search",
              },
            ],
          },
          {
            name: "milestone_2y_social",
            label: "Social / Emotional",
            type: "radio-group",
            options: [
              { label: "Starts to throw tantrums", value: "tantrums" },
              { label: 'Resisting by saying "No"', value: "resisting_no" },
              {
                label: 'Being possessive by saying "Mine!"',
                value: "possessive_mine",
              },
            ],
          },
        ],
      },
    ],
  },
  "3_years": {
    sections: [
      {
        fields: [
          {
            name: "milestone_3y_gross_motor",
            label: "Gross Motor",
            type: "radio-group",
            options: [
              { label: "Pedals tricycle", value: "pedals_tricycle" },
              {
                label: "Starts to climb up stairs with alternating feet",
                value: "alternating_feet_up",
              },
            ],
          },
          {
            name: "milestone_3y_fine_motor",
            label: "Fine Motor",
            type: "radio-group",
            options: [
              { label: "Draws simple shapes", value: "draws_shapes" },
              { label: "Flipping pages", value: "flipping_pages" },
              { label: "Toilet-trained", value: "toilet_trained" },
              { label: "Undress self", value: "undress_self" },
            ],
          },
          {
            name: "milestone_3y_speech",
            label: "Speech & Language",
            type: "radio-group",
            options: [
              { label: "3-4 word phrases", value: "three_four_word_phrases" },
              {
                label: "Following 3-step command",
                value: "three_step_command",
              },
              {
                label: "Vocabulary 200+ words; 75% comprehensible",
                value: "vocab_200",
              },
              { label: "Says their name and gender", value: "name_gender" },
            ],
          },
          {
            name: "milestone_3y_cognitive",
            label: "Cognitive / Problem Solving",
            type: "radio-group",
            options: [
              { label: "Able to identify shapes", value: "identify_shapes" },
              {
                label: "Understanding simple time concept",
                value: "time_concept",
              },
              { label: "Comparing 2 items (size)", value: "comparing_size" },
              { label: "Starts to count", value: "starts_count" },
            ],
          },
          {
            name: "milestone_3y_social",
            label: "Social / Emotional",
            type: "radio-group",
            options: [
              { label: "Play cooperatively", value: "cooperative_play" },
              { label: "Pretend play", value: "pretend_play" },
              { label: "Easy to separate", value: "easy_separate" },
              {
                label: "Able to share and empathize",
                value: "share_empathize",
              },
            ],
          },
        ],
      },
    ],
  },
  "4_years": {
    sections: [
      {
        fields: [
          {
            name: "milestone_4y_gross_motor",
            label: "Gross Motor",
            type: "radio-group",
            options: [
              { label: "Hops on one foot", value: "hops_one_foot" },
              {
                label: "Starts to climb down stairs with alternating feet",
                value: "alternating_feet_down",
              },
            ],
          },
          {
            name: "milestone_4y_fine_motor",
            label: "Fine Motor",
            type: "radio-group",
            options: [
              { label: "Uses scissors", value: "uses_scissors" },
              { label: "Button self", value: "button_self" },
              {
                label: "Draws cross, square, diagonal shape",
                value: "draws_cross_square",
              },
            ],
          },
          {
            name: "milestone_4y_speech",
            label: "Speech & Language",
            type: "radio-group",
            options: [
              { label: "Tells a simple story", value: "tells_story" },
              {
                label: "Talks about things they have done",
                value: "talks_past",
              },
              {
                label: "Forming sentences — 100% intelligible",
                value: "sentences_intelligible",
              },
            ],
          },
          {
            name: "milestone_4y_cognitive",
            label: "Cognitive / Problem Solving",
            type: "radio-group",
            options: [
              { label: "Counting", value: "counting" },
              {
                label: "Identify differences (big vs small; boys vs girls)",
                value: "identify_differences",
              },
              { label: "Identify colours", value: "identify_colours" },
            ],
          },
          {
            name: "milestone_4y_social",
            label: "Social / Emotional",
            type: "radio-group",
            options: [
              { label: "Has best friend", value: "best_friend" },
              { label: "Elaborating fantasy play", value: "fantasy_play" },
            ],
          },
        ],
      },
    ],
  },
  "5_years": {
    sections: [
      {
        fields: [
          {
            name: "milestone_5y_gross_motor",
            label: "Gross Motor",
            type: "radio-group",
            options: [
              {
                label: "Able to balance on one foot",
                value: "balance_one_foot",
              },
              {
                label: "Starts learning to ride bicycle",
                value: "ride_bicycle",
              },
            ],
          },
          {
            name: "milestone_5y_fine_motor",
            label: "Fine Motor",
            type: "radio-group",
            options: [
              { label: "Writes name", value: "writes_name" },
              {
                label: "Draws person with 10 basic body parts",
                value: "draws_person",
              },
              { label: "Tripod pencil grip", value: "tripod_grip" },
              { label: "Copies letters and numbers", value: "copies_letters" },
              { label: "Starts independent ADL", value: "independent_adl" },
            ],
          },
          {
            name: "milestone_5y_speech",
            label: "Speech & Language",
            type: "radio-group",
            options: [
              { label: "Vocabulary 4000-5000 words", value: "vocab_5000" },
              {
                label: "Talks about things they want to do",
                value: "talks_future",
              },
              {
                label: "Understands or makes jokes",
                value: "understands_jokes",
              },
            ],
          },
          {
            name: "milestone_5y_cognitive",
            label: "Cognitive / Problem Solving",
            type: "radio-group",
            options: [
              { label: "Counts accurately 1-10", value: "counts_1_10" },
              { label: "Recites the alphabet", value: "recites_alphabet" },
              {
                label: "Recognizes some alphabet",
                value: "recognizes_alphabet",
              },
            ],
          },
          {
            name: "milestone_5y_social",
            label: "Social / Emotional",
            type: "radio-group",
            options: [
              { label: "Has a group of friends", value: "group_friends" },
              {
                label: "Able to follow group rules",
                value: "follow_group_rules",
              },
              {
                label: "Able to follow rules in games",
                value: "follow_game_rules",
              },
            ],
          },
        ],
      },
    ],
  },
};

/* ===================== AGE → DEV KEY HELPER ===================== */

/**
 * Derives the DEVELOPMENT_DATA key from a patient age string/number.
 * Accepts ages like "2", "2.5", "0.5", "14 months", "1 year 3 months", etc.
 * Returns null if age cannot be parsed or is outside the pediatric range.
 */
function getDevelopmentKeyFromAge(rawAge) {
  if (!rawAge && rawAge !== 0) return null;

  let ageInYears = null;

  const str = String(rawAge).trim().toLowerCase();

  // Pure number — treat as years
  if (/^\d+(\.\d+)?$/.test(str)) {
    ageInYears = parseFloat(str);
  }
  // "X months" or "X month"
  else if (/^(\d+(\.\d+)?)\s*months?$/.test(str)) {
    const m = str.match(/^(\d+(\.\d+)?)\s*months?$/);
    ageInYears = parseFloat(m[1]) / 12;
  }
  // "X years" or "X year"
  else if (/^(\d+(\.\d+)?)\s*years?$/.test(str)) {
    const m = str.match(/^(\d+(\.\d+)?)\s*years?$/);
    ageInYears = parseFloat(m[1]);
  }
  // "X years Y months" or "X yr Y mo"
  else if (/^(\d+)\s*(years?|yr)\s*(\d+)\s*(months?|mo)/.test(str)) {
    const m = str.match(/^(\d+)\s*(years?|yr)\s*(\d+)\s*(months?|mo)/);
    ageInYears = parseInt(m[1]) + parseInt(m[3]) / 12;
  }

  if (ageInYears === null || isNaN(ageInYears)) return null;

  // Map to DEVELOPMENT_DATA keys
  if (ageInYears < 0.5) return "2-5_months"; // 0–5 months
  if (ageInYears < 1) return "6-9_months"; // 6–11 months
  if (ageInYears >= 1 && ageInYears < 2) return "12-18_months"; // 12–23 months
  if (ageInYears >= 2 && ageInYears < 3) return "2_years";
  if (ageInYears >= 3 && ageInYears < 4) return "3_years";
  if (ageInYears >= 4 && ageInYears < 5) return "4_years";
  if (ageInYears >= 5 && ageInYears <= 12) return "5_years";

  return null; // outside pediatric milestone range
}

/* ===================== COMPONENT ===================== */

export default function PediatricPsychologyAssessment({
  patient,
  onSubmit,
  onBack,
  Mode,
}) {
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("subjective");

  /* ---------------- Patient History State ---------------- */
  const [patientHistory, setPatientHistory] = useState({
    past_medical_history: "",
    past_family_history: "",
    alerts_and_allergies: "",
  });

  /* ---------------- STORAGE ---------------- */
  const storageKey = patient
    ? `psychology_assessment_draft_${patient.id}`
    : null;

  useEffect(() => {
    if (!patient) return;
    setPatientHistory({
      past_medical_history: patient.medical_history || "",
      past_family_history: patient.family_medical_history || "",
      alerts_and_allergies: patient.alerts_and_allergies_history || "",
    });
  }, [patient]);

  useEffect(() => {
    if (!patient) return;
    setValues((v) => ({
      ...v,
      psychiatric_history_autogenerated:
        patient.psychiatric_history ||
        patient.medical_history ||
        "No data available",
      medical_history_autogenerated:
        patient.medical_history || "No data available",
      family_history_autogenerated:
        patient.family_history ||
        patient.family_medical_history ||
        "No data available",
      drug_history_autogenerated:
        patient.medications?.join(", ") ||
        patient.drug_history ||
        "No data available",
    }));
  }, [patient]);

  useEffect(() => {
    if (!storageKey) return;
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        setValues(JSON.parse(saved).values || {});
      } catch {}
    }
  }, [storageKey]);

  const problemList = (values) => {
    var text = "";
    if (values.perceptual_disturbance) {
      values.perceptual_disturbance.forEach((v) => {
        text +=
          v.charAt(0).toUpperCase() + v.slice(1).replaceAll("_", " ") + "\n";
      });
    }
    if (values.thought_content_patient_reported) {
      values.thought_content_patient_reported.forEach((v) => {
        text +=
          v.charAt(0).toUpperCase() + v.slice(1).replaceAll("_", " ") + "\n";
      });
    }
    return text;
  };

  useEffect(() => {
    if (!patient) return;

    // Auto-derive developmental age group from patient age
    const autoDevKey = getDevelopmentKeyFromAge(patient.age);

    setValues((v) => ({
      ...v,

      psychiatric_history_autogenerated:
        patient.psychiatric_history ||
        patient.medical_history ||
        "No data available",
      family_medical_history_autogenerated:
        patient.family_history ||
        patient.diagnosis_history ||
        "No data available",
      drug_history_autogenerated:
        patient.medications || patient.drug_history || "No data available",

      // Pre-select the age group matching the patient's age (only if not already set)
      ...(autoDevKey && !v.dev_age_group
        ? { dev_age_group: [autoDevKey] }
        : {}),
    }));
  }, [patient]);

  const onChange = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }));
  };

  const computedValues = {
    ...values,
    problem_listings: problemList(values) || "",
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
        JSON.stringify({ values, updatedAt: new Date() }),
      );
      alert("Psychology draft saved");
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    onSubmit?.(values);
    alert("Psychology assessment submitted");
  };

  function PatientInformationBlock({
    patient,
    patientHistory,
    setPatientHistory,
  }) {
    if (!patient) return null;

    const safe = (v) => v ?? "-";
    const formatDate = (d) => (d ? new Date(d).toLocaleDateString() : "-");

    return (
      <div style={{ marginBottom: 24 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 12,
            fontSize: 14,
          }}
        >
          <div>
            <b>Name:</b> {safe(patient.name)}
          </div>
          <div>
            <b>IC:</b> {safe(patient.id)}
          </div>
          <div>
            <b>DOB:</b> {formatDate(patient.dob)}
          </div>

          <div>
            <b>Age / Gender:</b> {safe(patient.age)} / {safe(patient.sex)}
          </div>
          <div>
            <b>ICD:</b> {safe(patient.icd)}
          </div>
          <div>
            <b>Date of Assessment:</b> {new Date().toLocaleDateString()}
          </div>

          <div>
            <b>Date of Onset:</b> {formatDate(patient.date_of_onset)}
          </div>
          <div>
            <b>Duration of Diagnosis:</b> -
          </div>
          <div>
            <b>Primary Diagnosis:</b> {safe(patient.diagnosis_history)}
          </div>

          <div>
            <b>Secondary Diagnosis:</b> {safe(patient.medical_history)}
          </div>
          <div>
            <b>Dominant Side:</b> {safe(patient.dominant_side)}
          </div>
          <div>
            <b>Language Preference:</b> {safe(patient.language_preference)}
          </div>

          <div>
            <b>Education Level:</b> {safe(patient.education_background)}
          </div>
          <div>
            <b>Occupation:</b> {safe(patient.occupation)}
          </div>
          <div>
            <b>Work Status:</b> {safe(patient.employment_status)}
          </div>

          <div>
            <b>Driving Status:</b> {safe(patient.driving_status)}
          </div>
          <div>
            <b>PP/OB:</b> {safe(patient.pp_ob)}
          </div>
          <div>
            <b>Weight:</b> {patient.weight ? `${patient.weight} kg` : "-"}
          </div>

          {/* ===== HISTORY ===== */}
          <div style={{ gridColumn: "1 / -1", marginTop: 10 }}>
            <h3>Patient History</h3>

            <div>
              <b>Past Medical History</b>
              <input
                style={input}
                value={patientHistory.past_medical_history}
                onChange={(e) =>
                  setPatientHistory((prev) => ({
                    ...prev,
                    past_medical_history: e.target.value,
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
                  setPatientHistory((prev) => ({
                    ...prev,
                    past_family_history: e.target.value,
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
                  setPatientHistory((prev) => ({
                    ...prev,
                    alerts_and_allergies: e.target.value,
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
  const activeTabIdx = ASSESSMENT_TABS.indexOf(activeTab);

  const schemaMap = {
    subjective: PSYCHO_PEDIA_IA_SCHEMA.SUBJECTIVE,
    objective: PSYCHO_PEDIA_IA_SCHEMA.OBJECTIVE,
    assessment: PSYCHO_PEDIA_IA_SCHEMA.ASSESSMENT,
    plan: PSYCHO_PEDIA_IA_SCHEMA.PLAN,
  };

  /* ===================== RENDER ===================== */

  return (
    <PatientContext.Provider value={patient}>
      <div style={mainContent}>
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

          <button style={doctorsReportBtn}>Doctors Reports</button>
        </CommonFormBuilder>
        {/* ===== INFORMANT / RELIABILITY ===== */}
        {/* <CommonFormBuilder
          schema={INFORMANT_SCHEMA}
          values={values}
          onChange={onChange}
        /> */}

        {/* ===== DISCREPANCY ALERT ===== */}
        {values.discrepancy && values.discrepancy.trim() !== "" && (
          <div
            style={{
              margin: "8px 0 12px 0",
              padding: "12px 16px",
              backgroundColor: "#fff3cd",
              border: "1px solid #ffc107",
              borderLeft: "5px solid #ff9800",
              borderRadius: "6px",
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <span style={{ fontSize: "20px", lineHeight: "1.2" }}>⚠️</span>
            <div>
              <strong style={{ color: "#856404", fontSize: "14px" }}>
                Discrepancy Noted
              </strong>
              <p
                style={{
                  margin: "4px 0 0 0",
                  color: "#533f03",
                  fontSize: "13px",
                }}
              >
                {values.discrepancy}
              </p>
            </div>
          </div>
        )}

        {/* ===== TABS ===== */}
        <div style={tabBar}>
          {["subjective", "objective", "assessment", "plan"].map((tab) => (
            <div
              key={tab}
              style={activeTab === tab ? tabActive : tabBtn}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </div>
          ))}
        </div>

        {/* ===== TAB CONTENT ===== */}
        <CommonFormBuilder
          schema={schemaMap[activeTab]}
          values={computedValues}
          onChange={onChange}
          submitted={submitted}
          onAction={handleAction}
          assessmentRegistry={PSYCHOLOGY_ASSESSMENT_REGISTRY}
        >
          <div style={submitRow}>
            {activeTab !== "plan" ? (
              <button
                style={submitBtn}
                onClick={() => setActiveTab(ASSESSMENT_TABS[activeTabIdx + 1])}
              >
                Next
              </button>
            ) : (
              <button style={submitBtn} onClick={handleSubmit}>
                Submit Psychology Assessment
              </button>
            )}
          </div>
        </CommonFormBuilder>
      </div>
    </PatientContext.Provider>
  );
}

/* ===================== STYLES ===================== */

const mainContent = { margin: "0 auto", width: "100%" };

const tabBar = {
  display: "flex",
  gap: 12,
  justifyContent: "center",
  borderBottom: "1px solid #ddd",
  marginBottom: 12,
};

const tabBtn = {
  padding: "10px 22px",
  fontWeight: 600,
  cursor: "pointer",
  color: "#0f172a",
};

const tabActive = {
  ...tabBtn,
  borderBottom: "3px solid #2451b3",
  color: "#2451b3",
};

const submitRow = {
  display: "flex",
  justifyContent: "flex-end",
  marginTop: 20,
};

const submitBtn = {
  padding: "12px 32px",
  background: "#2563EB",
  color: "#fff",
  border: "none",
  borderRadius: 10,
  fontSize: 15,
  fontWeight: 700,
};

const section = {
  marginBottom: 24,
};

const patientGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 12,
  fontSize: 14,
};

const patientInfoGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 12,
  fontSize: 14,
};
const doctorsReportBtn = {
  padding: "10px 20px",
  background: "#2563EB",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  fontSize: 14,
  fontWeight: 600,
  cursor: "pointer",
  marginTop: 8,
};

const input = {
  width: "100%",
  minHeight: 90,
  marginTop: 6,
  marginBottom: 12,
  padding: "10px 12px",
  borderRadius: 6,
  border: "1px solid #d1d5db",
  fontSize: 14,
  resize: "vertical",
};
const alertBtn = {
  marginTop: 10,
  padding: "10px 20px",
  borderRadius: 6,
  border: "1.5px solid #007bff",
  background: "#007bff",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
};
