import React, { useEffect, useState } from "react";
import CommonFormBuilder from "../CommonComponenets/FormBuilder";
import PatientCard from "../../shared/cards/PatientCard";
import { ASSESSMENT_TABS, TAB_META } from "../../schema/actions";

// ===================== OPTIONS =====================

const YES_NO = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" }
];

const ATTENDANCE_OPTIONS = [
  { label: "Unaccompanied", value: "unaccompanied" },
  { label: "Accompanied by caregiver(s)", value: "accompanied" }
];

const SITTING_OPTIONS = [
  { label: "Chair", value: "chair" },
  { label: "Wheelchair", value: "wheelchair" },
  { label: "Bed", value: "bed" }
];

const CUES_OPTIONS = [
  { label: "Maximum cues", value: "maximum" },
  { label: "Moderate cues", value: "moderate" },
  { label: "Minimal cues", value: "minimal" },
  { label: "Independent performance", value: "independent" }
];

// ===================== SWALLOWING OPTIONS =====================

const SWALLOWING_OPTIONS = [
  { label: "Neuromuscular Electrical Stimulation (NMES)", value: "nmes" },
  { label: "Flexible Endoscopic Evaluation of Swallowing (FEES)", value: "fees" },
  { label: "McNeill Dysphagia Therapy (MDTP)", value: "mdtp" },
  { label: "Observation of ingestion functions", value: "observation_ingestion" },
  { label: "Assisting and leading exercises for ingestion functions", value: "exercise_ingestion" },
  { label: "Training of ingestion functions", value: "training_ingestion" },
  { label: "Education about ingestion functions", value: "education_ingestion" },
  { label: "Observation of swallowing", value: "observation_swallowing" },
  { label: "Interview in relation to swallowing", value: "interview_swallowing" },
  { label: "Assisting and leading exercise in relation to swallowing", value: "exercise_swallowing" },
  { label: "Training about swallowing", value: "training_swallowing" },
  { label: "Education about swallowing", value: "education_swallowing" },
  { label: "Advising about swallowing", value: "advising_swallowing" }
];

// ===================== BREATHING OPTIONS =====================

const BREATHING_OPTIONS = [
  { label: "Observation of respiration function", value: "observation_respiration" },
  { label: "Assisting and leading exercise for respiration function", value: "exercise_respiration" },
  { label: "Training of respiration function", value: "training_respiration" },
  { label: "Education about respiration function", value: "education_respiration" },
  { label: "Assisting and leading exercise for additional respiratory functions", value: "exercise_additional_resp" },
  { label: "Training for coughing, sneezing, expectorating and other functions related to breathing", value: "training_coughing" },
  { label: "Practical support with coughing, sneezing, expectorating and other respiratory functions related to breathing", value: "support_coughing" }
];

// ===================== VOICING OPTIONS =====================

const VOICING_OPTIONS = [
  { label: "Lee Silverman Voice Treatment (LSVT)", value: "lsvt" },
  { label: "Observation of voice functions", value: "observation_voice" },
  { label: "Assisting and leading exercise for voice functions", value: "exercise_voice" },
  { label: "Training of voice functions", value: "training_voice" },
  { label: "Education about voice functions", value: "education_voice" },
  { label: "Advising about voice functions", value: "advising_voice" },
  { label: "Practical support with voice functions", value: "support_voice" },
  { label: "Training in singing", value: "training_singing" },
  { label: "Practical support with singing", value: "support_singing" },
  { label: "Observation of alternative vocalisation functions", value: "observation_alt_vocal" },
  { label: "Assisting and leading exercise for alternative vocalisation functions", value: "exercise_alt_vocal" },
  { label: "Training of alternative vocalisation functions", value: "training_alt_vocal" },
  { label: "Education about alternative vocalisation functions", value: "education_alt_vocal" },
  { label: "Advising about alternative vocalisation functions", value: "advising_alt_vocal" }
];

// ===================== RECEPTIVE LANGUAGE OPTIONS =====================

const RECEPTIVE_LANGUAGE = [
  { label: "Observation on receiving spoken messages", value: "observation_receiving" },
  { label: "Training in receiving spoken messages", value: "training_receiving" },
  { label: "Education about receiving spoken messages", value: "education_receiving" },
  { label: "Advising about receiving spoken messages", value: "advising_receiving" }
];

// ===================== EXPRESSIVE LANGUAGE OPTIONS =====================

const EXPRESSIVE_LANGUAGE = [
  { label: "Transcranial Direct Current Stimulation (tDCS) - Speech Therapy Protocol", value: "tdcs" },
  { label: "Observation of speaking", value: "observation_speaking" },
  { label: "Training in speaking", value: "training_speaking" },
  { label: "Education about speaking", value: "education_speaking" },
  { label: "Advising about speaking", value: "advising_speaking" },
  { label: "Observation of having a conversation", value: "observation_conversation" },
  { label: "Training in having a conversation", value: "training_conversation" },
  { label: "Advising about having a conversation", value: "advising_conversation" },
  { label: "Counselling about having a conversation", value: "counselling_conversation" },
  { label: "Observation of having a discussion", value: "observation_discussion" },
  { label: "Training in having a discussion", value: "training_discussion" },
  { label: "Advising about having a discussion", value: "advising_discussion" },
  { label: "Counselling about having a discussion", value: "counselling_discussion" }
];

// ===================== LITERACY OPTIONS =====================

const LITERACY_OPTIONS = [
  { label: "Observation of reading", value: "observation_read" },
  { label: "Training in reading", value: "training_read" },
  { label: "Education about reading", value: "education_read" },
  { label: "Advising about reading", value: "advising_read" },
  { label: "Practical support with reading", value: "support_read" },
  { label: "Observation of writing", value: "observation_write" },
  { label: "Training in writing", value: "training_write" },
  { label: "Education about writing", value: "education_write" },
  { label: "Practical support with writing", value: "support_write" }
];

// ===================== SPEECH OPTIONS =====================

const SPEECH_OPTIONS = [
  { label: "Prompts for Restructuring Oral Muscular Phonetic Targets (PROMPT)", value: "prompt" },
  { label: "Observation of speech functions", value: "observation_speech" },
  { label: "Assisting and leading exercise for speech functions", value: "exercise_speech" },
  { label: "Training of speech functions", value: "training_speech" },
  { label: "Education about speech functions", value: "education_speech" },
  { label: "Advising about speech functions", value: "advising_speech" },
  { label: "Observation of articulation functions", value: "observation_articulation" },
  { label: "Assisting and leading exercise for articulation functions", value: "exercise_articulation" },
  { label: "Training of articulation functions", value: "training_articulation" },
  { label: "Education about articulation functions", value: "education_articulation" },
  { label: "Advising about articulation functions", value: "advising_articulation" },
  { label: "Observation of fluency and rhythm of speech functions", value: "observation_fluency" },
  { label: "Assisting and leading exercise for fluency and rhythm of speech functions", value: "exercise_fluency" },
  { label: "Training of fluency and rhythm of speech functions", value: "training_fluency" },
  { label: "Education about fluency and rhythm of speech functions", value: "education_fluency" },
  { label: "Advising about fluency and rhythm of speech functions", value: "advising_fluency" }
];

// ===================== AAC OPTIONS =====================

const AAC_OPTIONS = [
  { label: "Observation of using communication devices and techniques", value: "observation_aac" },
  { label: "Interview in relation to using communication devices and techniques", value: "interview_aac" },
  { label: "Training in using communication devices and techniques", value: "training_aac" },
  { label: "Education about using communication devices and techniques", value: "education_aac" },
  { label: "Advising about using communication devices and techniques", value: "advising_aac" },
  { label: "Observation of receiving written messages", value: "observation_written" },
  { label: "Training in receiving written messages", value: "training_written" },
  { label: "Education about receiving written messages", value: "education_written" },
  { label: "Advising about receiving written messages", value: "advising_written" },
  { label: "Observation of writing messages", value: "observation_writing_msg" },
  { label: "Training in writing messages", value: "training_writing_msg" },
  { label: "Education about writing messages", value: "education_writing_msg" },
  { label: "Advising about writing messages", value: "advising_writing_msg" },
  { label: "Practical support with writing messages", value: "support_writing_msg" }
];

// ===================== PLAN OPTIONS =====================

const PLAN_OPTIONS = [
  { label: "Continue current therapy plan / goals", value: "continue_plan" },
  { label: "Modify targets", value: "modify_targets" },
  { label: "Reassess speech and language skills", value: "reassess_skills" },
  { label: "Referral for medical management", value: "referral_medical" },
  { label: "Discontinue therapy", value: "discontinue" }
];

// ===================== SUBJECTIVE SCHEMA =====================

const SUBJECTIVE_SCHEMA = {
  sections: [
    {
      fields: [
        {
          type: "radio",
          name: "attendance",
          label: "Patient was seen",
          options: ATTENDANCE_OPTIONS
        }
      ]
    }
  ]
};

// ===================== OBJECTIVE SCHEMA =====================

const OBJECTIVE_SCHEMA = {
  sections: [
    {
      title: "General Observation",
      fields: [
        {
          type: "radio",
          name: "sitting_in",
          label: "Sitting in",
          options: SITTING_OPTIONS
        }
      ]
    },
    {
      title: "Intervention Given",
      fields: [
        {
          type: "subheading",
          label: "Swallowing"
        },
        {
          type: "checkbox-group",
          name: "swallowing_interventions",
          label: "",
          options: SWALLOWING_OPTIONS
        },
        {
          type: "subheading",
          label: "Breathing"
        },
        {
          type: "checkbox-group",
          name: "breathing_interventions",
          label: "",
          options: BREATHING_OPTIONS
        },
        {
          type: "subheading",
          label: "Voicing"
        },
        {
          type: "checkbox-group",
          name: "voicing_interventions",
          label: "",
          options: VOICING_OPTIONS
        },
        {
          type: "subheading",
          label: "Receptive language"
        },
        {
          type: "checkbox-group",
          name: "receptive_language",
          label: "",
          options: RECEPTIVE_LANGUAGE
        },
        {
          type: "subheading",
          label: "Expressive language"
        },
        {
          type: "checkbox-group",
          name: "expressive_language",
          label: "",
          options: EXPRESSIVE_LANGUAGE
        },
        {
          type: "subheading",
          label: "Literacy"
        },
        {
          type: "checkbox-group",
          name: "literacy_interventions",
          label: "",
          options: LITERACY_OPTIONS
        },
        {
          type: "subheading",
          label: "Speech"
        },
        {
          type: "checkbox-group",
          name: "speech_interventions",
          label: "",
          options: SPEECH_OPTIONS
        },
        {
          type: "subheading",
          label: "AAC"
        },
        {
          type: "checkbox-group",
          name: "aac_interventions",
          label: "",
          options: AAC_OPTIONS
        },
        {
          type: "textarea",
          name: "other_interventions",
          label: "Others",
          placeholder: "Specify other interventions"
        }
      ]
    }
  ]
};

// ===================== ASSESSMENT SCHEMA =====================

const ASSESSMENT_SCHEMA = {
  sections: [
    {
      fields: [
        {
          type: "radio",
          name: "complications",
          label: "Complications",
          options: YES_NO
        },
        {
          type: "radio",
          name: "requires_cues",
          label: "Requires",
          options: CUES_OPTIONS
        },
        {
          type: "textarea",
          name: "assessment_remarks",
          label: "Remark(s) / Additional notes",
          placeholder: "Enter additional notes"
        }
      ]
    }
  ]
};

// ===================== PLAN SCHEMA =====================

const PLAN_SCHEMA = {
  sections: [
    {
      fields: [
        {
          type: "checkbox-group",
          name: "plan_options",
          options: PLAN_OPTIONS
        },
        {
          type: "input",
          name: "discontinue_reason",
          label: "Reason for discontinuation",
          placeholder: "Enter reason",
          showIf: {
            field: "plan_options",
            includes: "discontinue"
          }
        },
        {
          type: "textarea",
          name: "approaches_exercises",
          label: "Approaches / Exercises",
          placeholder: "Describe approaches and exercises"
        }
      ]
    }
  ]
};

// ===================== MAIN COMPONENT =====================

export default function SpeechTherapyAdultSOAP({ patient, onUpdatePatient, onSubmit, onBack }) {
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState(ASSESSMENT_TABS[0]);
  const today = new Date();

  const storageKey = patient ? `speech_therapy_adult_draft_${patient.id}` : null;

  // Load draft from localStorage
  useEffect(() => {
    if (!storageKey) return;
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setValues(JSON.parse(saved).values || {});
    }
  }, [storageKey]);

  // Populate patient data
  useEffect(() => {
    if (!patient) return;
    setValues(v => ({
      ...v,
      patient_name: patient.name,
      patient_id: patient.id,
      patient_dob: patient.dob,
      patient_age: patient.age,
      patient_sex: patient.sex
    }));
  }, [patient]);

  const onChange = (name, value) => {
    setValues(v => ({ ...v, [name]: value }));
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
      alert("Draft saved successfully!");
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    onSubmit?.(values);
    alert("Assessment submitted successfully!");
  };

  const activeTabIdx = ASSESSMENT_TABS.indexOf(activeTab);

  const schemaMap = {
    subjective: SUBJECTIVE_SCHEMA,
    objective: OBJECTIVE_SCHEMA,
    assessment: ASSESSMENT_SCHEMA,
    plan: PLAN_SCHEMA
  };

  return (
    <div>
      {/* Patient Card */}
      <PatientCard patient={patient} />
      {/* Tabs */}
      <div style={tabBar}>
        {ASSESSMENT_TABS.map(tab => (
          <div
            key={tab}
            style={activeTab === tab ? tabActive : tabBtn}
            onClick={() => setActiveTab(tab)}
          >
            {(TAB_META[tab]?.label || tab).toUpperCase()}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <CommonFormBuilder
        schema={schemaMap[activeTab]}
        values={values}
        onChange={onChange}
        submitted={submitted}
        onAction={handleAction}
      >
        <div style={submitRow}>
          {activeTab !== "plan" ? (
            <button
              style={submitBtn}
              onClick={() => {
                const next = ASSESSMENT_TABS[Math.min(ASSESSMENT_TABS.length - 1, activeTabIdx + 1)];
                setActiveTab(next);
              }}
            >
              Next
            </button>
          ) : (
            <button style={submitBtn} onClick={handleSubmit}>
              Submit Assessment
            </button>
          )}
        </div>
      </CommonFormBuilder>
    </div>
  );
}

// ===================== STYLES =====================

const tabBar = {
  display: "flex",
  gap: 12,
  justifyContent: "center",
  borderBottom: "1px solid #ddd",
  marginBottom: 12
};

const tabBtn = {
  padding: "10px 22px",
  fontWeight: 600,
  cursor: "pointer",
  color: "#0f172a"
};

const tabActive = {
  ...tabBtn,
  borderBottom: "3px solid #2451b3",
  color: "#2451b3"
};

const submitRow = {
  display: "flex",
  justifyContent: "flex-end",
  marginTop: 20
};

const submitBtn = {
  padding: "12px 32px",
  background: "#2563EB",
  color: "#fff",
  border: "none",
  borderRadius: 10,
  fontSize: 15,
  fontWeight: 700,
  cursor: "pointer"
};