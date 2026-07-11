import React, { useState } from "react";
import CommonFormBuilder from "../CommonComponenets/FormBuilder";

/* ── Option sets ── */
const AID_TYPES_W  = ["0-BTE","1-RIC","2-Custom","3-CROS","4-BCHA"];
const AID_TYPES    = ["BTE","RIC","Custom","CROS","BCHA"];
const FORMULAS_W   = ["0-NAL-NL2","1-DSL","2-Manufacturer"];
const FORMULAS     = ["NAL-NL2","DSL","Manufacturer"];

const SOUND_W  = ["0-Clear","1-Muffled","2-Sharp","3-Natural"];
const SOUND    = ["Clear","Muffled","Sharp","Natural"];
const SPEECH_W = ["0-Improved","1-No change","2-Reduced"];
const SPEECH   = ["Improved","No change","Reduced"];
const COMFORT_W= ["0-Comfortable","1-Too loud","2-Too soft"];
const COMFORT  = ["Comfortable","Too loud","Too soft"];
const LOCAL_W  = ["0-Good","1-Fair","2-Poor"];
const LOCAL    = ["Good","Fair","Poor"];
const FBWH_W   = ["0-None","1-Occasional","2-Frequent"];
const FBWH     = ["None","Occasional","Frequent"];

const HL_TYPE_W  = ["0-Conductive","1-Sensorineural","2-Mixed"];
const HL_TYPE    = ["Conductive","Sensorineural","Mixed"];
const VERIF_W    = ["0-Achieved","1-Partial","2-Not achieved"];
const VERIF      = ["Achieved","Partial","Not achieved"];
const ADAPT_W    = ["0-First-fit","1-Adjusted","2-Full target"];
const ADAPT      = ["First-fit","Adjusted","Full target"];
const TARGET_W   = ["0-Within target","1-Below target","2-Above target"];
const TARGET     = ["Within target","Below target","Above target"];
const MPO_W      = ["0-Appropriate","1-Too high","2-Too low"];
const MPO        = ["Appropriate","Too high","Too low"];
const FB_TEST_W  = ["0-Passed","1-Not passed"];
const FB_TEST    = ["Passed","Not passed"];
const SATISF_W   = ["0-Excellent","1-Good","2-Fair","3-Poor"];
const SATISF     = ["Excellent","Good","Fair","Poor"];
const OUTCOME_W  = ["0-Improved","1-Stable"];
const OUTCOME    = ["Improved","Stable"];

const PROGRAMS = [
  { label: "General",   value: "general"   },
  { label: "Noise",     value: "noise"     },
  { label: "Music",     value: "music"     },
  { label: "TV",        value: "tv"        },
  { label: "Telephone", value: "telephone" },
  { label: "Custom",    value: "custom"    },
];
const FEATURES = [
  { label: "Feedback Manager", value: "feedback_manager" },
  { label: "Noise Reduction",  value: "noise_reduction"  },
  { label: "Directionality",   value: "directionality"   },
  { label: "Speech Enhancer",  value: "speech_enhancer"  },
  { label: "Sound therapy",    value: "sound_therapy"    },
];

export function Hearingaidtrial({ onBack }) {
  const [values,        setValues]        = useState({});
  const [scoresVisible, setScoresVisible] = useState(false); // Doctor View off by default

  const handleChange = (name, value) =>
    setValues(prev => ({ ...prev, [name]: value }));

  const feedbackValue = (metric, trialNo) =>
    values[`t${trialNo}_${metric}`] ??
    values[`patient_feedback_matrix_${metric}_${trialNo - 1}`] ??
    "";

  /* ── Score calculation (Part B) ── */
  const trialScore = (n) => {
    let s = 0;
    if (["clear","natural"].includes(String(feedbackValue("sound", n)).toLowerCase())) s += 2;
    if (String(feedbackValue("speech", n)).toLowerCase() === "improved")               s += 2;
    if (String(feedbackValue("comfort", n)).toLowerCase() === "comfortable")           s += 2;
    if (String(feedbackValue("local", n)).toLowerCase() === "good")                    s += 2;
    if (String(feedbackValue("fbwh", n)).toLowerCase() === "none")                     s += 2;
    return s;
  };

  const s1 = trialScore(1), s2 = trialScore(2), s3 = trialScore(3);
  const best = Math.max(s1, s2, s3);
  const bestTrial = best === 0 ? "—"
    : s1 === best ? "Trial 1"
    : s2 === best ? "Trial 2"
    : "Trial 3";
  const recommendation =
    best >= 8 ? `${bestTrial} — strongly recommended`
    : best >= 6 ? `${bestTrial} — recommended with fine tuning`
    : "Further hearing aid adjustment required";

  /* ── Helpers ── */
  const opts  = (w, n) => scoresVisible ? w : n;  // with/without score labels
  const score = (name, label) =>                   // score-box only in doctor view
    scoresVisible ? [{ name, label, type: "score-box" }] : [];

  /* ── Trial block (B) — Right / Left ear side by side ── */
  const earColumn = (n, ear, label) => ({
    type: "row",
    cols: 1,
    fields: [
      { type: "subheading", label },
      { name: `t${n}_${ear}_model`,   label: "Make / Model",         type: "input" },
      { name: `t${n}_${ear}_type`,    label: "Type",                 type: "radio", labelAbove: true, options: opts(AID_TYPES_W, AID_TYPES) },
      { name: `t${n}_${ear}_formula`, label: "Prescriptive Formula", type: "radio", labelAbove: true, options: opts(FORMULAS_W, FORMULAS) },
      { name: `t${n}_${ear}_outcome`, label: "Trial Outcome",        type: "input" },
    ],
  });

  const trialBlock = (n) => [
    {
      type: "accordion",
      name: `trial_${n}_section`,
      label: `Trial ${n}`,
      defaultOpen: n === 1,
      children: [
        {
          type: "row",
          cols: 2,
          fields: [
            earColumn(n, "r", "Right ear"),
            earColumn(n, "l", "Left ear"),
          ],
        },
      ],
    },
  ];

  /* ── Patient feedback (B) — one row per category, 3 trial columns ── */
  const feedbackBlock = () => [
    {
      type: "accordion",
      name: "patient_feedback_section",
      label: "Patient Feedback",
      defaultOpen: false,
      children: [
        {
          type: "refraction-12col",
          name: "patient_feedback_matrix",
          cornerLabel: "",
          cornerLikeGroupHeader: false,
          showGroupHeaders: false,
          showColumnHeaders: true,
          groups: [{
            label: "",
            columns: [{ key: "Trial 1" }, { key: "Trial 2" }, { key: "Trial 3" }],
          }],
          rows: [
            {
              value: "sound",
              label: "Sound quality",
              columns: [
                { type: "select", options: opts(SOUND_W, SOUND) },
                { type: "select", options: opts(SOUND_W, SOUND) },
                { type: "select", options: opts(SOUND_W, SOUND) },
              ],
            },
            {
              value: "speech",
              label: "Speech understanding",
              columns: [
                { type: "select", options: opts(SPEECH_W, SPEECH) },
                { type: "select", options: opts(SPEECH_W, SPEECH) },
                { type: "select", options: opts(SPEECH_W, SPEECH) },
              ],
            },
            {
              value: "comfort",
              label: "Loudness comfort",
              columns: [
                { type: "select", options: opts(COMFORT_W, COMFORT) },
                { type: "select", options: opts(COMFORT_W, COMFORT) },
                { type: "select", options: opts(COMFORT_W, COMFORT) },
              ],
            },
            {
              value: "local",
              label: "Localization",
              columns: [
                { type: "select", options: opts(LOCAL_W, LOCAL) },
                { type: "select", options: opts(LOCAL_W, LOCAL) },
                { type: "select", options: opts(LOCAL_W, LOCAL) },
              ],
            },
            {
              value: "fbwh",
              label: "Feedback / whistling",
              columns: [
                { type: "select", options: opts(FBWH_W, FBWH) },
                { type: "select", options: opts(FBWH_W, FBWH) },
                { type: "select", options: opts(FBWH_W, FBWH) },
              ],
            },
          ],
        },
    { name: "trial_result", label: "Trial Result", type: "input" },
      ],
    },

    /* Score boxes — doctor view only */
    ...score("t1_score", "Trial 1 Score /10"),
    ...score("t2_score", "Trial 2 Score /10"),
    ...score("t3_score", "Trial 3 Score /10"),
  ];

  const schema = {
    title: "Hearing Aid Trial & Fitting",
    enableScoreToggle: true,
    actions: [{ type: "toggle-show-scores" }, { type: "back", label: "Back" }],
    sections: [

      /* ══ Part B ══ */
      {
      
        fields: [
          ...trialBlock(1),
          ...trialBlock(2),
          ...trialBlock(3),
          ...feedbackBlock(),
        ]
      },

      /* ══ Part C ══ */
      {
        
        fields: [
          {
            type: "accordion",
            name: "part_c_summary_section",
            label: "Part C: Summary of Hearing Aid Model",
            defaultOpen: false,
            children: [
              {
                type: "accordion",
                name: "part_c_type_of_hearing_loss_section",
                label: "a) Type of Hearing Loss",
                defaultOpen: false,
                children: [
          { name: "hl_type_r", label: "Right ear", type: "radio", labelAbove: true, options: opts(HL_TYPE_W, HL_TYPE) },
          { name: "hl_type_l", label: "Left ear",  type: "radio", labelAbove: true, options: opts(HL_TYPE_W, HL_TYPE) },
                ],
              },
              {
                type: "accordion",
                name: "part_c_degree_section",
                label: "b) Degree",
                defaultOpen: false,
                children: [
          { name: "degree_r", label: "Right ear", type: "input" },
          { name: "degree_l", label: "Left ear",  type: "input" },
                ],
              },
              {
                type: "accordion",
                name: "part_c_model_of_hearing_aid_section",
                label: "c) Model of Hearing Aid",
                defaultOpen: false,
                children: [
          { name: "ha_model_r", label: "Right ear", type: "input" },
          { name: "ha_model_l", label: "Left ear",  type: "input" },
                ],
              },
            ],
          },
        ]
      },

      /* ══ Part D ══ */
      {
   
        fields: [
          {
            type: "accordion",
            name: "part_d_hearing_aid_fitting_section",
            label: "Part D: Hearing Aid Fitting",
            defaultOpen: false,
            children: [
              { name: "prog_software",    label: "Programming Software",        type: "input" },
              { name: "fit_formula",      label: "Prescription Formula",        type: "radio", labelAbove: true, options: opts(FORMULAS_W, FORMULAS) },
              { name: "verif_target",     label: "Verification Target",         type: "radio", labelAbove: true, options: opts(VERIF_W, VERIF) },
              { name: "adapt_level",      label: "Adaptation Level",            type: "radio", labelAbove: true, options: opts(ADAPT_W, ADAPT) },
              { name: "programs",         label: "Programs Configured",         type: "checkbox-group", options: PROGRAMS },
              { name: "features",         label: "Features Activated",          type: "checkbox-group", options: FEATURES },
              { name: "assistive_device", label: "Additional Assistive Device", type: "input" },
            ],
          },
        ]
      },

      /* ══ Part E ══ */
      {
      
        fields: [
          {
            type: "accordion",
            name: "part_e_verification_section",
            label: "Part E: Verification (Objective Assessment)",
            defaultOpen: false,
            children: [
          { name: "verif_pdf", label: "Attach Verification PDF", type: "file-upload-modal" },
              {
                type: "accordion",
                name: "part_e_rem_section",
                label: "Real Ear Measurement (REM)",
                defaultOpen: false,
                children: [
          { name: "rem",  label: "Real Ear Measurement (REM) upload", type: "attach-file" },
          { name: "rem_target",  label: "Target Achieved", type: "radio", labelAbove: true, options: opts(TARGET_W, TARGET) },
          { name: "rem_remarks", label: "Remarks",         type: "input" },
                ],
              },
              {
                type: "accordion",
                name: "part_e_vsm_section",
                label: "Visible Speech Mapping",
                defaultOpen: false,
                children: [
                  { name: "Visible", label: "Visible Speech Mapping upload", type: "attach-file" },
          { name: "vsm_target",  label: "Target Achieved", type: "radio", labelAbove: true, options: opts(TARGET_W, TARGET) },
          { name: "vsm_remarks", label: "Remarks",         type: "input" },
                ],
              },
              {
                type: "accordion",
                name: "part_e_mpo_section",
                label: "Maximum Power Output (MPO)",
                defaultOpen: false,
                children: [
                  { name: "mpo", label: "Maximum Power Output upload", type: "attach-file" },
          { name: "mpo_target",  label: "Target Achieved", type: "radio", labelAbove: true, options: opts(MPO_W, MPO) },
          { name: "mpo_remarks", label: "Remarks",         type: "input" },
                ],
              },
              {
                type: "accordion",
                name: "part_e_feedback_test_section",
                label: "Feedback Test",
                defaultOpen: false,
                children: [
                  { name: "fb", label: "Feedback Test upload", type: "attach-file" },
          { name: "fb_test",     label: "Result",  type: "radio", labelAbove: true, options: opts(FB_TEST_W, FB_TEST) },
          { name: "fb_remarks",  label: "Remarks", type: "input" },
                ],
              },
              {
                type: "accordion",
                name: "part_e_aided_response_section",
                label: "Aided Response",
                defaultOpen: false,
                children: [
          { name: "aided_target",  label: "Target Achieved", type: "radio", labelAbove: true, options: opts(TARGET_W, TARGET) },
          { name: "aided_remarks", label: "Remarks",         type: "input" },
                ],
              },
            ],
          },
        ]
      },

      /* ══ Part F ══ */
      {
      
        fields: [
          {
            type: "accordion",
            name: "part_f_validation_section",
            label: "Part F: Validation (Subjective Outcome)",
            defaultOpen: false,
            children: [
              {
                type: "accordion",
                name: "part_f_cosi_section",
                label: "COSI (Client Oriented Scale of Improvement)",
                defaultOpen: false,
                children: [
          { name: "cosi_result",         label: "Result",         type: "input", readOnly:true },
          { name: "cosi_interpretation", label: "Interpretation", type: "input" },
                ],
              },
              {
                type: "accordion",
                name: "part_f_hhia_hhie_section",
                label: "HHIA / HHIE (Hearing Handicap Inventory)",
                defaultOpen: false,
                children: [
          { name: "hhia_result",         label: "Result",         type: "input" },
          { name: "hhia_interpretation", label: "Interpretation", type: "input" },
                ],
              },
              {
                type: "accordion",
                name: "part_f_speech_quiet_section",
                label: "Speech Perception (Quiet)",
                defaultOpen: false,
                children: [
          { name: "sp_quiet_unaided", label: "Unaided (%)", type: "input" },
          { name: "sp_quiet_aided",   label: "Aided (%)",   type: "input" },
          { name: "sp_quiet_outcome", label: "Outcome",     type: "radio", labelAbove: true, options: opts(OUTCOME_W, OUTCOME) },
                ],
              },
              {
                type: "accordion",
                name: "part_f_speech_noise_section",
                label: "Speech Perception (Noise)",
                defaultOpen: false,
                children: [
          { name: "sp_noise_unaided", label: "Unaided (%)", type: "input" },
          { name: "sp_noise_aided",   label: "Aided (%)",   type: "input" },
          { name: "sp_noise_outcome", label: "Outcome",     type: "radio", labelAbove: true, options: opts(OUTCOME_W, OUTCOME) },
                ],
              },
              {
                type: "accordion",
                name: "part_f_overall_satisfaction_section",
                label: "Overall Satisfaction",
                defaultOpen: false,
                children: [
          { name: "satisfaction",       label: "Rating",   type: "radio", labelAbove: true, options: opts(SATISF_W, SATISF) },
          { name: "satisfaction_notes", label: "Comments", type: "input" },
                ],
              },
              {
                type: "accordion",
                name: "part_f_subjective_rating_scales_section",
                label: "Subjective Rating Scales (Hearing Loss)",
                defaultOpen: false,
                children: [
          { name: "vas_emotional", label: "Analogue Scale: Emotional (0–10)",           type: "scale-slider", min: 0, max: 10 },
          { name: "vas_social",    label: "Analogue Scale: Social / Situational (0–10)", type: "scale-slider", min: 0, max: 10 },
          { name: "hhia_score",    label: "Hearing Handicap Inventory for Adults (HHIA)", type: "input" },
          { name: "cosi_score",    label: "Client Oriented Scale of Improvement (COSI)",  type: "input" },
                ],
              },

          /* Doctor-view scores for Part F */
          ...score("f_satisfaction_score", "Satisfaction Score"),
          ...score("f_speech_quiet_score", "Speech Perception (Quiet) Score"),
          ...score("f_speech_noise_score", "Speech Perception (Noise) Score"),
            ],
          },
        ]
      },

      /* ══ Scoring Summary — doctor view only ══ */
      ...(scoresVisible ? [{
        title: "Scoring Summary",
        fields: [
          { name: "t1_score",       label: "Trial 1 Score /10",      type: "score-box" },
          { name: "t2_score",       label: "Trial 2 Score /10",      type: "score-box" },
          { name: "t3_score",       label: "Trial 3 Score /10",      type: "score-box" },
          { name: "best_score",     label: "Best Score /10",         type: "score-box" },
          { name: "best_trial",     label: "Best Performing Trial",  type: "score-box" },
          { name: "recommendation", label: "Recommendation",         type: "score-box" },
        ]
      }] : []),
       {
      
      fields: [
        {
          type: "accordion",
          name: "hearing_aid_orientation_section",
          label: "Hearing Aid Orientation",
          defaultOpen: false,
          children: [
        {
          name: "topics_discussed",
          label: "Topics discussed",
          type: "checkbox-group",
          options: [
            { label: "None", value: 0 },
            { label: "Nature of hearing loss and expected benefit", value: 1 },
            { label: "Realistic communication goals", value: 2 },
            { label: "Care, cleaning, and maintenance", value: 3 },
            { label: "Battery / charger handling", value: 4 },
            { label: "Wearing schedule and adaptation timeline", value: 5 },
            { label: "Communication strategies", value: 6 },
            { label: "Family education and support", value: 7 },
            { label: "Maintain stable hearing thresholds", value: 8 }
          ]
        },
        {
          name: "client_understanding",
          label: "Client’s understanding",
          type: "radio",
          options: [
            { label: "Good", value: 0 },
            { label: "Partial", value: 1 },
            { label: "Poor", value: 2 }
          ]
        },
        {
          name: "motivation",
          label: "Motivation to use device",
          type: "radio",
          options: [
            { label: "High", value: 0 },
            { label: "Moderate", value: 1 },
            { label: "Low", value: 2 }
          ]
            }
          ],
        }
      ]
    },

   {
 
  fields: [
    {
      type: "accordion",
      name: "auditory_training_section",
      label: "Auditory Training",
      defaultOpen: false,
      children: [
    {
      type: "row",
      cols: 2,
      fields: [
        { name: "detection", label: "Detection", type: "input" },
        { name: "discrimination", label: "Discrimination", type: "input" }
      ]
    },
    {
      type: "row",
      cols: 2,
      fields: [
        { name: "identification", label: "Identification", type: "input" },
        { name: "comprehension", label: "Comprehension", type: "input" }
      ]
    },
    {
      type: "row",
      cols: 1,
      fields: [
        { name: "speech_tracking", label: "Speech Tracking", type: "input" }
      ]
        }
      ],
    }
  ]
},

  {
   
    fields: [
      {
        type: "accordion",
        name: "worksite_assessment_section",
        label: "Worksite Assessment",
        defaultOpen: false,
        children: [
          {
            type: "accordion",
            name: "worksite_environmental_parameters_section",
            label: "Environmental Parameters",
            defaultOpen: false,
            children: [
              { type: "row", cols: 2, fields: [{ name: "ambient_noise", label: "Ambient noise level", type: "input" }, { name: "reverb_echo", label: "Reverberation & echo", type: "input" }] },
              { type: "row", cols: 2, fields: [{ name: "distance_source", label: "Distance to sound source", type: "input" }, { name: "snr", label: "Signal-to-noise ratio (SNR)", type: "input" }] },
              { type: "row", cols: 2, fields: [{ name: "equipment_noise", label: "Equipment noise", type: "input" }, { name: "lighting_visibility", label: "Lighting & visibility", type: "input" }] },
              { type: "row", cols: 1, fields: [{ name: "acoustic_treatment", label: "Acoustic treatment", type: "input" }] },
            ],
          },
          {
            type: "accordion",
            name: "worksite_communication_demand_section",
            label: "Communication Demand",
            defaultOpen: false,
            children: [
              { type: "row", cols: 2, fields: [{ name: "verbal_frequency", label: "Verbal communication frequency", type: "input" }, { name: "noise_during_comm", label: "Noise during communication", type: "input" }] },
              { type: "row", cols: 2, fields: [{ name: "communication_partners", label: "Communication partners", type: "input" }, { name: "telephone_use", label: "Telephone use", type: "input" }] },
              { type: "row", cols: 1, fields: [{ name: "ha_accessories", label: "Use of hearing aid accessories", type: "input" }] },
            ],
          },
          {
            type: "accordion",
            name: "worksite_hearing_aid_function_section",
            label: "Hearing Aid Function in Workplace",
            defaultOpen: false,
            children: [
              { type: "row", cols: 2, fields: [{ name: "performance_quiet", label: "Performance in quiet", type: "input" }, { name: "performance_noise", label: "Performance in noise", type: "input" }] },
              { type: "row", cols: 2, fields: [{ name: "feedback_distortion", label: "Feedback or distortion", type: "input" }, { name: "comfort_fit", label: "Comfort and physical fit", type: "input" }] },
              { type: "row", cols: 2, fields: [{ name: "safety_gear", label: "Compatibility with safety gear", type: "input" }, { name: "connectivity_issues", label: "Connectivity issues", type: "input" }] },
              { type: "row", cols: 1, fields: [{ name: "battery_access", label: "Battery/recharging accessibility", type: "input" }] },
            ],
          },
          {
            type: "accordion",
            name: "worksite_safety_considerations_section",
            label: "Safety Considerations",
            defaultOpen: false,
            children: [
              { type: "row", cols: 2, fields: [{ name: "warning_awareness", label: "Awareness of warning signals", type: "input" }, { name: "dual_protection", label: "Use of dual protection", type: "input" }] },
              { type: "row", cols: 2, fields: [{ name: "emergency_comm", label: "Communication in emergency situations", type: "input" }, { name: "hearing_compliance", label: "Hearing protection compliance", type: "input" }] },
            ],
          },
          {
            type: "accordion",
            name: "worksite_self_report_feedback_section",
            label: "Worker’s Self-Report / Feedback",
            defaultOpen: false,
            children: [
              { type: "row", cols: 2, fields: [{ name: "hearing_difficulty", label: "Perceived hearing difficulty at work", type: "input" }, { name: "communication_satisfaction", label: "Communication satisfaction", type: "input" }] },
              { type: "row", cols: 1, fields: [{ name: "fatigue_effort", label: "Fatigue or listening effort", type: "input" }] },
              { name: "recommendations", label: "Recommendations", type: "input" },
            ],
          },
        ],
      }
    ]
  }
    ]
  };

  /* ── Satisfaction score helper ── */
  const satisfScore = () => {
    const m = { excellent: 4, good: 3, fair: 2, poor: 1 };
    return m[(values.satisfaction || "").toLowerCase()] ?? 0;
  };
  const speechScore = (aided, unaided) => {
    const a = parseFloat(values[aided]  || 0);
    const u = parseFloat(values[unaided]|| 0);
    return a > u ? `+${(a - u).toFixed(1)}%` : `${(a - u).toFixed(1)}%`;
  };

  return (
    <CommonFormBuilder
      schema={schema}
      layout="nested"
      values={{
        ...values,
        t1_score: s1,
        t2_score: s2,
        t3_score: s3,
        best_score: best,
        best_trial: bestTrial,
        recommendation,
        f_satisfaction_score: satisfScore(),
        f_speech_quiet_score: speechScore("sp_quiet_aided", "sp_quiet_unaided"),
        f_speech_noise_score: speechScore("sp_noise_aided", "sp_noise_unaided"),
      }}
      onChange={handleChange}
      showScores={scoresVisible}
      onAction={(type) => {
        if (type === "toggle-show-scores") setScoresVisible(v => !v);
        if (type === "back") onBack?.();
      }}
    />
  );
}
