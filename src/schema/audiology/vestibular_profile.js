const GAZE_DIRECTION_ROWS = [
  { value: "spv", label: "Slow Phase Velocity", columns: [{ type: "input" }, { type: "input" }] },
  { value: "amp", label: "Amplitude", columns: [{ type: "input" }, { type: "input" }] }
];

const buildGazeDirectionMatrix = (name, cornerLabel) => ({
  type: "refraction-12col",
  name,
  cornerLabel,
  cornerLikeGroupHeader: true,
  showColumnHeaders: true,
  showGroupHeaders: false,
  groups: [{ label: null, columns: [{ key: "Right eye" }, { key: "Left eye" }] }],
  rows: GAZE_DIRECTION_ROWS
});

const buildGazeDirectionSubAccordion = (prefix, label) => ({
  type: "accordion",
  name: `${prefix}_section`,
  label,
  defaultOpen: false,
  children: [
    buildGazeDirectionMatrix(`${prefix}_horizontal_matrix`, "Horizontal"),
    buildGazeDirectionMatrix(`${prefix}_vertical_matrix`, "Vertical"),
    { name: `${prefix}_impression`, label: "Impression", type: "input" }
  ]
});

const gazeWithFixationSection = {
  title: null,
  fields: [
    {
      type: "accordion",
      name: "gaze_with_fixation_section",
      label: "Gaze Test - With visual fixation",
      defaultOpen: false,
      children: [
        {
          name: "gaze_with_fixation_upload",
          type: "attach-file",
          accept: "application/pdf,image/*",
          title: "Upload Gaze Test File",
          multiple: false,
          previewSize: { width: 400, height: 400 },
          hideInputAfterSelect: true
        },
        buildGazeDirectionSubAccordion("gaze_center", "Gaze Test: Centre - With visual fixation"),
        buildGazeDirectionSubAccordion("gaze_left", "Gaze Test: Left - With visual fixation"),
        buildGazeDirectionSubAccordion("gaze_up", "Gaze Test: Up - With visual fixation"),
        buildGazeDirectionSubAccordion("gaze_right", "Gaze Test: Right - With visual fixation"),
        buildGazeDirectionSubAccordion("gaze_down", "Gaze Test: Down - With visual fixation")
      ]
    }
  ]
};

const gazeWithoutFixationSection = {
  title: null,
  fields: [
    {
      type: "accordion",
      name: "gaze_without_fixation_section",
      label: "Gaze Test - Without visual fixation",
      defaultOpen: false,
      children: [
        {
          name: "gaze_without_fixation_upload",
          type: "attach-file",
          accept: "application/pdf,image/*",
          title: "Upload Gaze Test File",
          multiple: false,
          previewSize: { width: 400, height: 400 },
          hideInputAfterSelect: true
        },
        buildGazeDirectionSubAccordion("gaze_center_without", "Gaze Test: Centre - Without visual fixation"),
        buildGazeDirectionSubAccordion("gaze_left_without", "Gaze Test: Left - Without visual fixation"),
        buildGazeDirectionSubAccordion("gaze_up_without", "Gaze Test: Up - Without visual fixation"),
        buildGazeDirectionSubAccordion("gaze_right_without", "Gaze Test: Right - Without visual fixation"),
        buildGazeDirectionSubAccordion("gaze_down_without", "Gaze Test: Down - Without visual fixation")
      ]
    }
  ]
};

export const mainSchema = {
  "title": "Additional Vestibular Profile",
  "actions": [
    {
      "type": "back",
      "label": "Back"
    }
  ],
  "sections": [
    {
      "title": null,
      "fields": [
        {
          "type": "subheading",
          "label": "Case History (Vestibular)"
        },
        {
          "type": "info-text",
          "label": "1. Symptoms"
        },
        {
          "name": "vertigo",
          "label": "Vertigo / Spinning",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        },
        {
          "name": "vertigo_details",
          "label": "Please specify",
          "type": "input",
          "showIf": {
            "field": "vertigo",
            "equals": "yes"
          }
        },
        {
          "name": "dizziness",
          "label": "Dizziness / Spatial disorientation",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        },
        {
          "name": "dizziness_details",
          "label": "Please specify",
          "type": "input",
          "showIf": {
            "field": "dizziness",
            "equals": "yes"
          }
        },
        {
          "name": "postural",
          "label": "Postural symptoms",
          "type": "checkbox-group",
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "Postural instability / unsteadiness",
              "value": "Postural instability / unsteadiness"
            },
            {
              "label": "Falls",
              "value": "Falls"
            },
            {
              "label": "Near falls",
              "value": "Near falls"
            },
            {
              "label": "Directional pulsion",
              "value": "Directional pulsion"
            }
          ]
        },
        {
          "name": "postural_details",
          "label": "Please specify",
          "type": "input",
          "showIf": {
            "field": "postural",
            "includes": "none"
          }
        },
        {
          "name": "visual",
          "label": "Visuo-vestibular symptoms",
          "type": "checkbox-group",
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "Visual tilt",
              "value": "Visual tilt"
            },
            {
              "label": "Visual lag",
              "value": "Visual lag"
            },
            {
              "label": "Oscillopsia",
              "value": "Oscillopsia"
            },
            {
              "label": "Movement induced blur",
              "value": "Movement induced blur"
            }
          ]
        },
        {
          "name": "visual_details",
          "label": "Please specify",
          "type": "input",
          "showIf": {
            "field": "visual",
            "includes": "none"
          }
        },
        {
          "type": "info-text",
          "label": "2. Triggers"
        },
        {
          "name": "situational",
          "label": "Situational",
          "type": "checkbox-group",
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "Stress",
              "value": "Stress"
            },
            {
              "label": "Missed sleep",
              "value": "Missed sleep"
            },
            {
              "label": "Smells",
              "value": "Smells"
            },
            {
              "label": "Sunlight",
              "value": "Sunlight"
            },
            {
              "label": "Hunger",
              "value": "Hunger"
            },
            {
              "label": "Foods",
              "value": "Foods"
            },
            {
              "label": "Fatigue",
              "value": "Fatigue"
            },
            {
              "label": "Travel",
              "value": "Travel"
            },
            {
              "label": "Others",
              "value": "Others"
            }
          ]
        },
        {
          "name": "situational_details",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "situational",
            "includes": "Others"
          }
        },
        {
          "name": "situational_details",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "situational",
            "notEmpty": true
          }
        },
        {
          "name": "third_window",
          "label": "Third window",
          "type": "checkbox-group",
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "Loud sounds",
              "value": "Loud sounds"
            },
            {
              "label": "Laughing",
              "value": "Laughing"
            },
            {
              "label": "Lifting weight",
              "value": "Lifting weight"
            },
            {
              "label": "Coughing",
              "value": "Coughing"
            },
            {
              "label": "Blowing nose",
              "value": "Blowing nose"
            },
            {
              "label": "Straining",
              "value": "Straining"
            },
            {
              "label": "Others",
              "value": "Others"
            }
          ]
        },
        {
          "name": "third_window_details",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "third_window",
            "notEmpty": true
          }
        },
        {
          "name": "third_window_details",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "third_window",
            "includes": "Others"
          }
        },
        {
          "name": "movement",
          "label": "Movement",
          "type": "checkbox-group",
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "Bending over",
              "value": "Bending over"
            },
            {
              "label": "Lying down",
              "value": "Lying down"
            },
            {
              "label": "Getting up from bed",
              "value": "Getting up from bed"
            },
            {
              "label": "Fast movement R/L",
              "value": "Fast movement R/L"
            },
            {
              "label": "Looking up",
              "value": "Looking up"
            },
            {
              "label": "Rolling in bed",
              "value": "Rolling in bed"
            },
            {
              "label": "Getting up from sitting",
              "value": "Getting up from sitting"
            },
            {
              "label": "Turning head R/L",
              "value": "Turning head R/L"
            },
            {
              "label": "Others",
              "value": "Others"
            }
          ]
        },
        {
          "name": "movement_details",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "movement",
            "notEmpty": true
          }
        },
        {
          "name": "movement_details",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "movement",
            "includes": "Others"
          }
        },
        {
          "name": "environmental",
          "label": "Environmental",
          "type": "checkbox-group",
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "Open spaces",
              "value": "Open spaces"
            },
            {
              "label": "Heights",
              "value": "Heights"
            },
            {
              "label": "Darkness",
              "value": "Darkness"
            },
            {
              "label": "Crowded places",
              "value": "Crowded places"
            },
            {
              "label": "Shopping malls",
              "value": "Shopping malls"
            },
            {
              "label": "Uneven ground",
              "value": "Uneven ground"
            },
            {
              "label": "Others",
              "value": "Others"
            }
          ]
        },
        {
          "name": "environmental_details",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "environmental",
            "notEmpty": true
          }
        },
        {
          "type": "info-text",
          "label": "3. Duration"
        },
        {
          "name": "duration",
          "label": "Episode duration",
          "type": "checkbox-group",
          "options": [
            {
              "label": "<10s",
              "value": "<10s"
            },
            {
              "label": "10s-1min",
              "value": "10s-1min"
            },
            {
              "label": "1-5min",
              "value": "1-5min"
            },
            {
              "label": "30min-12h",
              "value": "30min-12h"
            },
            {
              "label": "12-72h",
              "value": "12-72h"
            },
            {
              "label": "Weeks",
              "value": "weeks"
            },
            {
              "label": ">3 days-<1 week",
              "value": "3d_1w"
            },
            {
              "label": "Months",
              "value": "months"
            }
          ]
        },
        {
          "type": "info-text",
          "label": "4. Onset"
        },
        {
          "name": "onset_date",
          "label": "  Duration",
          "type": "input"
        },
        {
          "name": "onset_after",
          "label": "Prior condition",
          "type": "checkbox-group",
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "Severe vertigo",
              "value": "severe_vertigo"
            },
            {
              "label": "Trauma",
              "value": "trauma"
            },
            {
              "label": "Immobilization",
              "value": "immobilization"
            },
            {
              "label": "Surgery",
              "value": "surgery"
            },
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "Medication",
              "value": "medication"
            },
            {
              "label": "New diagnosis",
              "value": "new_diagnosis"
            },
            {
              "label": "Fever",
              "value": "fever"
            },
            {
              "label": "Others",
              "value": "other"
            }
          ]
        },
        {
          "name": "onset_after_details",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "onset_after",
            "notEmpty": true
          }
        },
        {
          "type": "info-text",
          "label": "5. Frequency"
        },
        {
          "name": "frequency",
          "label": "Symptom frequency",
          "type": "checkbox-group",
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "Only once",
              "value": "once"
            },
            {
              "label": "Several times/day",
              "value": "several_per_day"
            },
            {
              "label": "Daily (intermittent)",
              "value": "daily_intermittent"
            },
            {
              "label": "Continuous",
              "value": "continuous"
            },
            {
              "label": "Variable symptom-free period",
              "value": "variable_free"
            },
            {
              "label": "Only with trigger",
              "value": "trigger_only"
            },
            {
              "label": "Daily",
              "value": "daily"
            },
            {
              "label": "Weekly",
              "value": "weekly"
            },
            {
              "label": "Several years",
              "value": "years"
            },
            {
              "label": "Continuous with worsening",
              "value": "worsening"
            },
            {
              "label": "Others",
              "value": "other"
            }
          ]
        },
        {
          "name": "frequency_details",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "frequency",
            "notEmpty": true
          }
        },
        {
          "type": "info-text",
          "label": "6. Evolution"
        },
        {
          "name": "evolution",
          "label": "Symptom evolution",
          "type": "checkbox-group",
          "options": [
            {
              "label": "None",
              "value": "none"
            },
            {
              "label": "Worst initially then improving",
              "value": "initial_worst_improving"
            },
            {
              "label": "Worsening day by day",
              "value": "worsening_daily"
            },
            {
              "label": "Severe during attacks only",
              "value": "attack_only"
            },
            {
              "label": "Stable with little fluctuation",
              "value": "stable"
            },
            {
              "label": "Others",
              "value": "other"
            }
          ]
        },
        {
          "name": "evolution_details",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "evolution",
            "notEmpty": true
          }
        },
        {
          "type": "info-text",
          "label": "7. Otological"
        },
        {
          "name": "hearing",
          "label": "Hearing loss",
          "type": "input"
        },
        {
          "name": "ear_pressure",
          "label": "Ear pressure / fullness",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Right",
              "value": "right"
            },
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Bilateral",
              "value": "bilateral"
            }
          ]
        },
        {
          "name": "vesicles",
          "label": "Vesicles in or around ear",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Right",
              "value": "right"
            },
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Bilateral",
              "value": "bilateral"
            }
          ]
        },
        {
          "name": "paresthesia",
          "label": "Paresthesia",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Right",
              "value": "right"
            },
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Bilateral",
              "value": "bilateral"
            }
          ]
        },
        {
          "name": "tinnitus",
          "label": "Tinnitus",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Right",
              "value": "right"
            },
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Bilateral",
              "value": "bilateral"
            }
          ]
        },
        {
          "name": "ear_pain",
          "label": "Pain in or around ear",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Right",
              "value": "right"
            },
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Bilateral",
              "value": "bilateral"
            }
          ]
        },
        {
          "name": "ear_discharge",
          "label": "Ear discharge",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Right",
              "value": "right"
            },
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Bilateral",
              "value": "bilateral"
            }
          ]
        },
        {
          "name": "autophony",
          "label": "Autophony",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Right",
              "value": "right"
            },
            {
              "label": "Left",
              "value": "left"
            },
            {
              "label": "Bilateral",
              "value": "bilateral"
            }
          ]
        },
        {
          "type": "info-text",
          "label": "8. Neurological"
        },
        {
          "name": "headache",
          "label": "Headache",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        },
        {
          "name": "facial_weakness",
          "label": "Facial weakness",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        },
        {
          "name": "photophobia",
          "label": "Photophobia",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        },
        {
          "name": "facial_numbness",
          "label": "Facial numbness",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        },
        {
          "name": "diplopia",
          "label": "Diplopia",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        },
        {
          "name": "neuro_other",
          "label": "Others",
          "type": "input"
        },
        {
          "type": "info-text",
          "label": "9. Others"
        },
        {
          "name": "meds",
          "label": "Current medications",
          "type": "input"
        },
        {
          "name": "conditions",
          "label": "Concurrent medical conditions",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Diabetes",
              "value": "Diabetes"
            },
            {
              "label": "Hypertension",
              "value": "Hypertension"
            },
            {
              "label": "Dyslipidemia",
              "value": "Dyslipidemia"
            },
            {
              "label": "Others",
              "value": "Others"
            }
          ]
        },
        {
          "name": "conditions_details",
          "label": "Specify",
          "type": "input",
          "showIf": {
            "field": "conditions",
            "includes": "Others"
          }
        },
        {
          "name": "improved_meds",
          "label": "Which medicine improved symptoms?",
          "type": "input"
        },
        {
          "type": "subheading",
          "label": "Scales"
        },
        {
          "name": "enable_vvas",
          "label": "Visual Vertigo Analogue Score (VVAS)",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        },
        {
          "name": "enable_dhi",
          "label": "Dizziness Handicap Inventory (DHI)",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        },
        {
          "name": "enable_vhq",
          "label": "Vertigo Handicap Questionnaire (VHQ)",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        },
        {
          "name": "enable_mvvss",
          "label": "Malay Version Vertigo Symptom Scale (MVVSS)",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": "no"
            },
            {
              "label": "Yes",
              "value": "yes"
            }
          ]
        }
      ]
    },
    {
      "title": "Visual Vertigo Analogue Score (VVAS)",
      "enableScoreToggle": true,
      "showIf": {
        "field": "enable_vvas",
        "equals": "yes"
      },
      "fields": [
        {
          "type": "info-text",
          "text": "0 = no dizziness, 10 = extreme dizziness"
        },
        {
          "name": "vvas_1",
          "label": "1. Walking through a supermarket aisle",
          "type": "scale-slider",
          "min": 0,
          "max": 10
        },
        {
          "name": "vvas_2",
          "label": "2. Being a passenger in a car",
          "type": "scale-slider",
          "min": 0,
          "max": 10
        },
        {
          "name": "vvas_3",
          "label": "3. Being under fluorescent lights",
          "type": "scale-slider",
          "min": 0,
          "max": 10
        },
        {
          "name": "vvas_4",
          "label": "4. Watching traffic at a busy intersection",
          "type": "scale-slider",
          "min": 0,
          "max": 10
        },
        {
          "name": "vvas_5",
          "label": "5. Walking through a shopping mall",
          "type": "scale-slider",
          "min": 0,
          "max": 10
        },
        {
          "name": "vvas_6",
          "label": "6. Going down an escalator",
          "type": "scale-slider",
          "min": 0,
          "max": 10
        },
        {
          "name": "vvas_7",
          "label": "7. Watching a movie at the movie theatre",
          "type": "scale-slider",
          "min": 0,
          "max": 10
        },
        {
          "name": "vvas_8",
          "label": "8. Walking over a patterned floor",
          "type": "scale-slider",
          "min": 0,
          "max": 10
        },
        {
          "name": "vvas_9",
          "label": "9. Watching action television",
          "type": "scale-slider",
          "min": 0,
          "max": 10
        },
        {
          "name": "vvas_score",
          "label": "VVAS Score",
          "type": "score-box"
        },
        {
          "name": "vvas_interpretation",
          "label": "Interpretation",
          "type": "score-box"
        }
      ]
    },
    {
      "title": "Dizziness Handicap Inventory (DHI)",
      "actions": [
        {
          "type": "toggle-show-scores"
        }
      ],
      "showIf": {
        "field": "enable_dhi",
        "equals": "yes"
      },
      "fields": [
        {
          "name": "dhi_1",
          "label": "1. Does looking up increase your problem?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "dhi_2",
          "label": "2. Because of your problem, do you feel frustrated?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "dhi_3",
          "label": "3. Because of your problem, do you restrict your travel for business or pleasure?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "dhi_4",
          "label": "4. Does walking down the aisle of a supermarket increase your problem?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "dhi_5",
          "label": "5. Because of your problem, do you have difficulty getting into or out of bed?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "dhi_6",
          "label": "6. Does your problem significantly restrict your participation in social activities (dinner, movies, parties)?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "dhi_7",
          "label": "7. Because of your problem, do you have difficulty reading?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "dhi_8",
          "label": "8. Does performing activities like sports or household chores increase your problem?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "dhi_9",
          "label": "9. Because of your problem, are you afraid to leave your home without someone accompanying you?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "dhi_10",
          "label": "10. Because of your problem, have you been embarrassed in front of others?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "dhi_11",
          "label": "11. Do quick movements of your head increase your problem?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "dhi_12",
          "label": "12. Because of your problem, do you avoid heights?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "dhi_13",
          "label": "13. Does turning over in bed increase your problem?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "dhi_14",
          "label": "14. Because of your problem, is it difficult to do strenuous housework or yard work?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "dhi_15",
          "label": "15. Because of your problem, are you afraid people may think you are intoxicated?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "dhi_16",
          "label": "16. Because of your problem, is it difficult to go for a walk by yourself?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "dhi_17",
          "label": "17. Does walking down a sidewalk increase your problem?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "dhi_18",
          "label": "18. Because of your problem, is it difficult for you to concentrate?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "dhi_19",
          "label": "19. Because of your problem, is it difficult to walk around your house in the dark?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "dhi_20",
          "label": "20. Because of your problem, are you afraid to stay home alone?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "dhi_21",
          "label": "21. Because of your problem, do you feel handicapped?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "dhi_22",
          "label": "22. Has your problem placed stress on your relationships with family or friends?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "dhi_23",
          "label": "23. Because of your problem, are you depressed?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "dhi_24",
          "label": "24. Does your problem interfere with your job or household responsibilities?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "dhi_25",
          "label": "25. Does bending over increase your problem?",
          "type": "radio-matrix",
          "options": [
            {
              "label": "No (0)",
              "value": "0"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Yes (4)",
              "value": "4"
            }
          ]
        },
        {
          "type": "info-text",
          "text": "Scoring: No = 0, Sometimes = 2, Yes = 4"
        },
        {
          "name": "dhi_physical",
          "label": "Physical Score",
          "type": "score-box"
        },
        {
          "name": "dhi_emotional",
          "label": "Emotional Score",
          "type": "score-box"
        },
        {
          "name": "dhi_functional",
          "label": "Functional Score",
          "type": "score-box"
        },
        {
          "name": "dhi_total",
          "label": "Total",
          "type": "score-box"
        },
        {
          "name": "dhi_interpretation",
          "label": "Interpretation",
          "type": "score-box"
        }
      ]
    },
    {
      "title": "Vertigo Handicap Questionnaire (VHQ)",
      "showIf": {
        "field": "enable_vhq",
        "equals": "yes"
      },
      "fields": [
        {
          "name": "vhq_1",
          "label": "1. I find that the vertigo does restrict me socially",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_2",
          "label": "2. I can still take part in active leisure pursuits (e.g. swimming, dancing, sports)",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_3",
          "label": "3. Some of my friends or relations get impatient because of the vertigo",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_4",
          "label": "4. I can move around quickly and freely",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_5",
          "label": "5. I feel less confident than I used to",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_6",
          "label": "6. I am happy to go out alone",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_7",
          "label": "7. My vertigo means that my family life is restricted",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_8",
          "label": "8. I find some of my less active hobbies difficult (e.g. sewing, reading)",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_9",
          "label": "9. I am still able to travel despite the vertigo",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_10",
          "label": "10. I try to avoid bending over",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_11",
          "label": "11. My family takes the vertigo in its stride",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_12",
          "label": "12. My friends are unsure how to react and do not really understand",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_13",
          "label": "13. I think that there may be something seriously wrong with me",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_14",
          "label": "14. People are understanding about the problems that the vertigo causes",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_15",
          "label": "15. I get anxious in case I have an unexpected attack of vertigo",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_16",
          "label": "16. During an attack of vertigo I can carry on with whatever I am doing",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_17",
          "label": "17. I find the attacks frightening",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_18",
          "label": "18. I am able to walk long distances",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_19",
          "label": "19. The vertigo worries me",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_20",
          "label": "20. I avoid making plans in advance in case I cannot get there on the day",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_21",
          "label": "21. I find I can carry out everyday activities without difficulty (e.g. shopping, gardening, jobs around the house)",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_22",
          "label": "22. I am afraid of spoiling things for others",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_23",
          "label": "23. I get rather depressed because of the vertigo",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_24",
          "label": "24. During an attack of vertigo, if I just sit down I am fine",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_25",
          "label": "25. If I have an attack of vertigo in public I get embarrassed",
          "type": "radio-matrix",
          "options": [
            {
              "label": "Never (0)",
              "value": "0"
            },
            {
              "label": "Occasionally (1)",
              "value": "1"
            },
            {
              "label": "Sometimes (2)",
              "value": "2"
            },
            {
              "label": "Often (3)",
              "value": "3"
            },
            {
              "label": "Always (4)",
              "value": "4"
            }
          ]
        },
        {
          "name": "vhq_total",
          "label": "Total Score",
          "type": "score-box"
        },
        {
          "name": "vhq_work",
          "label": "26. Are you currently employed?",
          "type": "radio",
          "options": [
            {
              "label": "No",
              "value": 0
            },
            {
              "label": "Yes",
              "value": 1
            }
          ]
        },
        {
          "name": "vhq_26a",
          "label": "26.a Did you give up work because of vertigo?",
          "type": "radio",
          "options": [
            "No",
            "Yes"
          ],
          "showIf": {
            "field": "vhq_work",
            "equals": 0
          }
        },
        {
          "name": "vhq_26b",
          "label": "26.b Have you changed your work because of vertigo?",
          "type": "radio",
          "options": [
            {
              "label": "Yes",
              "value": "YES"
            },
            {
              "label": "No",
              "value": "NO"
            }
          ],
          "showIf": {
            "field": "vhq_work",
            "equals": 1
          }
        },
        {
          "name": "vhq_26c",
          "label": "26.c Does vertigo cause difficulty at work?",
          "type": "radio",
          "options": [
            {
              "label": "Yes",
              "value": "YES"
            },
            {
              "label": "No",
              "value": "NO"
            }
          ],
          "showIf": {
            "field": "vhq_work",
            "equals": 1
          }
        }
      ]
    },
    // {
    //   "title": "Malay Version Vertigo Symptom Scale (MVVSS)",
    //   "showIf": {
    //     "field": "enable_mvvss",
    //     "equals": "yes"
    //   },
    //   "fields": [
    //     {
    //       "name": "mvvss_1",
    //       "label": "1. Perasaan seolah-olah benda atau keadaan sekeliling berpusing atau bergerak, selama kurang dari dua minit",
    //       "type": "radio-matrix",
    //       "options": [
    //         {
    //           "label": "Tidak pernah (0)",
    //           "value": 0
    //         },
    //         {
    //           "label": "Beberapa kali (1–3 kali setahun) (1)",
    //           "value": 1
    //         },
    //         {
    //           "label": "Banyak kali (4–12 kali setahun) (2)",
    //           "value": 2
    //         },
    //         {
    //           "label": "Agak kerap (lebih dari sekali sebulan) (3)",
    //           "value": 3
    //         },
    //         {
    //           "label": "Sangat kerap (lebih dari sekali seminggu) (4)",
    //           "value": 4
    //         }
    //       ]
    //     },
    //     {
    //       "name": "mvvss_2",
    //       "label": "2. Berasa telinga tersumbat",
    //       "type": "radio-matrix",
    //       "options": [
    //         {
    //           "label": "Tidak pernah (0)",
    //           "value": 0
    //         },
    //         {
    //           "label": "Beberapa kali (1–3 kali setahun) (1)",
    //           "value": 1
    //         },
    //         {
    //           "label": "Banyak kali (4–12 kali setahun) (2)",
    //           "value": 2
    //         },
    //         {
    //           "label": "Agak kerap (lebih dari sekali sebulan) (3)",
    //           "value": 3
    //         },
    //         {
    //           "label": "Sangat kerap (lebih dari sekali seminggu) (4)",
    //           "value": 4
    //         }
    //       ]
    //     },
    //     {
    //       "name": "mvvss_3",
    //       "label": "3. Menggigil, menggeletar",
    //       "type": "radio-matrix",
    //       "options": [
    //         {
    //           "label": "Tidak pernah (0)",
    //           "value": 0
    //         },
    //         {
    //           "label": "Beberapa kali (1–3 kali setahun) (1)",
    //           "value": 1
    //         },
    //         {
    //           "label": "Banyak kali (4–12 kali setahun) (2)",
    //           "value": 2
    //         },
    //         {
    //           "label": "Agak kerap (lebih dari sekali sebulan) (3)",
    //           "value": 3
    //         },
    //         {
    //           "label": "Sangat kerap (lebih dari sekali seminggu) (4)",
    //           "value": 4
    //         }
    //       ]
    //     },
    //     {
    //       "name": "mvvss_4",
    //       "label": "4. Perasaan berasa pening-pening lalat, terapung-apung atau 'giddy', selama lebih dari 12 jam",
    //       "type": "radio-matrix",
    //       "options": [
    //         {
    //           "label": "Tidak pernah (0)",
    //           "value": 0
    //         },
    //         {
    //           "label": "Beberapa kali (1–3 kali setahun) (1)",
    //           "value": 1
    //         },
    //         {
    //           "label": "Banyak kali (4–12 kali setahun) (2)",
    //           "value": 2
    //         },
    //         {
    //           "label": "Agak kerap (lebih dari sekali sebulan) (3)",
    //           "value": 3
    //         },
    //         {
    //           "label": "Sangat kerap (lebih dari sekali seminggu) (4)",
    //           "value": 4
    //         }
    //       ]
    //     },
    //     {
    //       "name": "mvvss_5",
    //       "label": "5. Kesukaran untuk bernafas, bernafas dengan tercungap-cungap",
    //       "type": "radio-matrix",
    //       "options": [
    //         {
    //           "label": "Tidak pernah (0)",
    //           "value": 0
    //         },
    //         {
    //           "label": "Beberapa kali (1–3 kali setahun) (1)",
    //           "value": 1
    //         },
    //         {
    //           "label": "Banyak kali (4–12 kali setahun) (2)",
    //           "value": 2
    //         },
    //         {
    //           "label": "Agak kerap (lebih dari sekali sebulan) (3)",
    //           "value": 3
    //         },
    //         {
    //           "label": "Sangat kerap (lebih dari sekali seminggu) (4)",
    //           "value": 4
    //         }
    //       ]
    //     },
    //     {
    //       "name": "mvvss_6",
    //       "label": "6. Berpeluh berlebihan",
    //       "type": "radio-matrix",
    //       "options": [
    //         {
    //           "label": "Tidak pernah (0)",
    //           "value": 0
    //         },
    //         {
    //           "label": "Beberapa kali (1–3 kali setahun) (1)",
    //           "value": 1
    //         },
    //         {
    //           "label": "Banyak kali (4–12 kali setahun) (2)",
    //           "value": 2
    //         },
    //         {
    //           "label": "Agak kerap (lebih dari sekali sebulan) (3)",
    //           "value": 3
    //         },
    //         {
    //           "label": "Sangat kerap (lebih dari sekali seminggu) (4)",
    //           "value": 4
    //         }
    //       ]
    //     },
    //     {
    //       "name": "mvvss_7",
    //       "label": "7. Perasaan seolah-olah benda atau sekeliling berpusing atau bergerak, selama 20 minit hingga satu jam",
    //       "type": "radio-matrix",
    //       "options": [
    //         {
    //           "label": "Tidak pernah (0)",
    //           "value": 0
    //         },
    //         {
    //           "label": "Beberapa kali (1–3 kali setahun) (1)",
    //           "value": 1
    //         },
    //         {
    //           "label": "Banyak kali (4–12 kali setahun) (2)",
    //           "value": 2
    //         },
    //         {
    //           "label": "Agak kerap (lebih dari sekali sebulan) (3)",
    //           "value": 3
    //         },
    //         {
    //           "label": "Sangat kerap (lebih dari sekali seminggu) (4)",
    //           "value": 4
    //         }
    //       ]
    //     },
    //     {
    //       "name": "mvvss_8",
    //       "label": "8. Muntah",
    //       "type": "radio-matrix",
    //       "options": [
    //         {
    //           "label": "Tidak pernah (0)",
    //           "value": 0
    //         },
    //         {
    //           "label": "Beberapa kali (1–3 kali setahun) (1)",
    //           "value": 1
    //         },
    //         {
    //           "label": "Banyak kali (4–12 kali setahun) (2)",
    //           "value": 2
    //         },
    //         {
    //           "label": "Agak kerap (lebih dari sekali sebulan) (3)",
    //           "value": 3
    //         },
    //         {
    //           "label": "Sangat kerap (lebih dari sekali seminggu) (4)",
    //           "value": 4
    //         }
    //       ]
    //     },
    //     {
    //       "name": "mvvss_9",
    //       "label": "9. Sakit kepala atau berasa berat dalam kepala",
    //       "type": "radio-matrix",
    //       "options": [
    //         {
    //           "label": "Tidak pernah (0)",
    //           "value": 0
    //         },
    //         {
    //           "label": "Beberapa kali (1–3 kali setahun) (1)",
    //           "value": 1
    //         },
    //         {
    //           "label": "Banyak kali (4–12 kali setahun) (2)",
    //           "value": 2
    //         },
    //         {
    //           "label": "Agak kerap (lebih dari sekali sebulan) (3)",
    //           "value": 3
    //         },
    //         {
    //           "label": "Sangat kerap (lebih dari sekali seminggu) (4)",
    //           "value": 4
    //         }
    //       ]
    //     },
    //     {
    //       "name": "mvvss_10",
    //       "label": "10. Berasa hilang keseimbangan badan sehingga ingin terjatuh, berpanjangan lebih dari 12 jam",
    //       "type": "radio-matrix",
    //       "options": [
    //         {
    //           "label": "Tidak pernah (0)",
    //           "value": 0
    //         },
    //         {
    //           "label": "Beberapa kali (1–3 kali setahun) (1)",
    //           "value": 1
    //         },
    //         {
    //           "label": "Banyak kali (4–12 kali setahun) (2)",
    //           "value": 2
    //         },
    //         {
    //           "label": "Agak kerap (lebih dari sekali sebulan) (3)",
    //           "value": 3
    //         },
    //         {
    //           "label": "Sangat kerap (lebih dari sekali seminggu) (4)",
    //           "value": 4
    //         }
    //       ]
    //     },
    //     {
    //       "name": "mvvss_11",
    //       "label": "11. Berdenyut-denyut, mencucuk-cucuk atau kebas di bahagian badan tertentu",
    //       "type": "radio-matrix",
    //       "options": [
    //         {
    //           "label": "Tidak pernah (0)",
    //           "value": 0
    //         },
    //         {
    //           "label": "Beberapa kali (1–3 kali setahun) (1)",
    //           "value": 1
    //         },
    //         {
    //           "label": "Banyak kali (4–12 kali setahun) (2)",
    //           "value": 2
    //         },
    //         {
    //           "label": "Agak kerap (lebih dari sekali sebulan) (3)",
    //           "value": 3
    //         },
    //         {
    //           "label": "Sangat kerap (lebih dari sekali seminggu) (4)",
    //           "value": 4
    //         }
    //       ]
    //     },
    //     {
    //       "name": "mvvss_12",
    //       "label": "12. Berasa hilang keseimbangan badan sehingga ingin terjatuh, berpanjanjangan kurang dari dua minit",
    //       "type": "radio-matrix",
    //       "options": [
    //         {
    //           "label": "Tidak pernah (0)",
    //           "value": 0
    //         },
    //         {
    //           "label": "Beberapa kali (1–3 kali setahun) (1)",
    //           "value": 1
    //         },
    //         {
    //           "label": "Banyak kali (4–12 kali setahun) (2)",
    //           "value": 2
    //         },
    //         {
    //           "label": "Agak kerap (lebih dari sekali sebulan) (3)",
    //           "value": 3
    //         },
    //         {
    //           "label": "Sangat kerap (lebih dari sekali seminggu) (4)",
    //           "value": 4
    //         }
    //       ]
    //     },
    //     {
    //       "name": "mvvss_13",
    //       "label": "13. Sakit di bahagian jantung atau dada",
    //       "type": "radio-matrix",
    //       "options": [
    //         {
    //           "label": "Tidak pernah (0)",
    //           "value": 0
    //         },
    //         {
    //           "label": "Beberapa kali (1–3 kali setahun) (1)",
    //           "value": 1
    //         },
    //         {
    //           "label": "Banyak kali (4–12 kali setahun) (2)",
    //           "value": 2
    //         },
    //         {
    //           "label": "Agak kerap (lebih dari sekali sebulan) (3)",
    //           "value": 3
    //         },
    //         {
    //           "label": "Sangat kerap (lebih dari sekali seminggu) (4)",
    //           "value": 4
    //         }
    //       ]
    //     },
    //     {
    //       "name": "mvvss_14",
    //       "label": "14. Perasaan berasa pening-pening lalat, terapung-apung atau 'giddy', selama kurang 20 minit hingga satu jam",
    //       "type": "radio-matrix",
    //       "options": [
    //         {
    //           "label": "Tidak pernah (0)",
    //           "value": 0
    //         },
    //         {
    //           "label": "Beberapa kali (1–3 kali setahun) (1)",
    //           "value": 1
    //         },
    //         {
    //           "label": "Banyak kali (4–12 kali setahun) (2)",
    //           "value": 2
    //         },
    //         {
    //           "label": "Agak kerap (lebih dari sekali sebulan) (3)",
    //           "value": 3
    //         },
    //         {
    //           "label": "Sangat kerap (lebih dari sekali seminggu) (4)",
    //           "value": 4
    //         }
    //       ]
    //     },
    //     {
    //       "name": "mvvss_total",
    //       "label": "MVVSS Total Score",
    //       "type": "score-box"
    //     }
    //   ]
    // },
    {
      "title": "Counseling Summary",
      "showIf": {
        "field": "mode",
        "equals": "followup"
      },
      "fields": [
        {
          "name": "understanding",
          "label": "Client's Understanding Of Tinnitus",
          "type": "input"
        },
        {
          "name": "recommendations",
          "label": "Recommendations",
          "type": "input"
        },
        {
          "title": null,
          "fields": [
            {
              "type": "subheading",
              "label": "Functional and Daily Life Impact for vestibular"
            },
            {
              "name": "work",
              "label": "Work / Study",
              "type": "input"
            },
            {
              "name": "communication",
              "label": "Communication",
              "type": "input"
            },
            {
              "name": "social",
              "label": "Family / Social",
              "type": "input"
            },
            {
              "name": "rest",
              "label": "Relaxation / Rest",
              "type": "input"
            },
            {
              "name": "outdoor",
              "label": "Outdoor / Public noise tolerance",
              "type": "input"
            },
            {
              "type": "subheading",
              "label": "Counseling Summary",
              "showIf": {
                "field": "mode",
                "equals": "followup"
              }
            },
            {
              "name": "understanding",
              "label": "Patient's understanding of vestibular disorder",
              "type": "input",
              "showIf": {
                "field": "mode",
                "equals": "followup"
              }
            },
            {
              "name": "goals",
              "label": "Expectations / goals",
              "type": "input",
              "showIf": {
                "field": "mode",
                "equals": "followup"
              }
            },
            {
              "name": "motivation",
              "label": "Motivation for therapy",
              "type": "input",
              "showIf": {
                "field": "mode",
                "equals": "followup"
              }
            },
            {
              "name": "education",
              "label": "Education & counseling provided",
              "type": "input",
              "showIf": {
                "field": "mode",
                "equals": "followup"
              }
            },
            {
              "name": "next_steps",
              "label": "Recommended next steps",
              "type": "input",
              "showIf": {
                "field": "mode",
                "equals": "followup"
              }
            }
          ]
        }
      ]
    }
  ]
}
 export const schema = {
  "title": "Vestibular Assessment",
  "actions": [
    {
      "type": "back",
      "label": "Back"
    }
  ],
  "sections": [
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "saccade_section",
          "label": "Videonystagmography Saccade",
          "defaultOpen": false,
          "children": [
            {
              "name": "saccade_upload",
              "type": "attach-file",
              "accept": "application/pdf,image/*",
              "title": "Upload Saccade File",
              "multiple": false,
              "previewSize": { "width": 400, "height": 400 },
              "hideInputAfterSelect": true
            },
            {
              "type": "refraction-12col",
              "name": "saccade_horizontal_matrix",
              "cornerLabel": "Horizontal",
              "cornerLikeGroupHeader": true,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    { "key": "Right eye" },
                    { "key": "Left eye" }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "velocity",
                  "label": "Velocity",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                },
                {
                  "value": "precision",
                  "label": "Precision",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                },
                {
                  "value": "latency",
                  "label": "Latency",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                }
              ]
            },
            {
              "type": "refraction-12col",
              "name": "saccade_vertical_matrix",
              "cornerLabel": "Vertical",
              "cornerLikeGroupHeader": true,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    { "key": "Right eye" },
                    { "key": "Left eye" }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "velocity",
                  "label": "Velocity",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                },
                {
                  "value": "precision",
                  "label": "Precision",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                },
                {
                  "value": "latency",
                  "label": "Latency",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                }
              ]
            },
            {
              "name": "saccade_impression",
              "label": "Impression",
              "type": "input"
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "smooth_section",
          "label": "Videonystagmography Smooth Pursuit",
          "defaultOpen": false,
          "children": [
            {
              "name": "smooth_upload",
              "type": "attach-file",
              "accept": "application/pdf,image/*",
              "title": "Upload Smooth Pursuit File",
              "multiple": false,
              "previewSize": { "width": 400, "height": 400 },
              "hideInputAfterSelect": true
            },
            {
              "type": "refraction-12col",
              "name": "smooth_horizontal_matrix",
              "cornerLabel": "Horizontal",
              "cornerLikeGroupHeader": true,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    { "key": "Right eye" },
                    { "key": "Left eye" }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "rightward_gain",
                  "label": "Rightward gain",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                },
                {
                  "value": "leftward_gain",
                  "label": "Leftward gain",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                }
              ]
            },
            {
              "type": "refraction-12col",
              "name": "smooth_vertical_matrix",
              "cornerLabel": "Vertical",
              "cornerLikeGroupHeader": true,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    { "key": "Right eye" },
                    { "key": "Left eye" }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "upward_gain",
                  "label": "Upward gain",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                },
                {
                  "value": "downward_gain",
                  "label": "Downward gain",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                }
              ]
            },
            {
              "name": "smooth_impression",
              "label": "Impression",
              "type": "input"
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "opto_section",
          "label": "Optokinetic Test",
          "defaultOpen": false,
          "children": [
            {
              "name": "opto_upload",
              "type": "attach-file",
              "accept": "application/pdf,image/*",
              "title": "Upload Optokinetic Test File",
              "multiple": false,
              "previewSize": { "width": 400, "height": 400 },
              "hideInputAfterSelect": true
            },
            {
              "type": "refraction-12col",
              "name": "opto_lr_matrix",
              "cornerLabel": "Horizontal - Left to Right",
              "cornerLikeGroupHeader": true,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    { "key": "Right eye" },
                    { "key": "Left eye" }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "gain",
                  "label": "Gain",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                },
                {
                  "value": "fast_phase",
                  "label": "Fast phase direction",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                }
              ]
            },
            {
              "type": "refraction-12col",
              "name": "opto_vertical_rl_matrix",
              "cornerLabel": "Vertical - Right to Left",
              "cornerLikeGroupHeader": true,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    { "key": "Right eye" },
                    { "key": "Left eye" }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "gain",
                  "label": "Gain",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                },
                {
                  "value": "fast_phase",
                  "label": "Fast phase direction",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                }
              ]
            },
            {
              "type": "refraction-12col",
              "name": "opto_horizontal_tb_matrix",
              "cornerLabel": "Horizontal - Top to Bottom",
              "cornerLikeGroupHeader": true,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    { "key": "Right eye" },
                    { "key": "Left eye" }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "gain",
                  "label": "Gain",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                },
                {
                  "value": "fast_phase",
                  "label": "Fast phase direction",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                }
              ]
            },
            {
              "type": "refraction-12col",
              "name": "opto_vertical_bt_matrix",
              "cornerLabel": "Vertical - Bottom to Top",
              "cornerLikeGroupHeader": true,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    { "key": "Right eye" },
                    { "key": "Left eye" }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "gain",
                  "label": "Gain",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                },
                {
                  "value": "fast_phase",
                  "label": "Fast phase direction",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                }
              ]
            },
            {
              "name": "opto_impression",
              "label": "Impression",
              "type": "input"
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "nystagmus_section",
          "label": "Spontaneous Nystagmus",
          "defaultOpen": false,
          "children": [
            {
              "name": "nystagmus_upload",
              "type": "attach-file",
              "accept": "application/pdf,image/*",
              "title": "Upload Spontaneous Nystagmus File",
              "multiple": false,
              "previewSize": { "width": 400, "height": 400 },
              "hideInputAfterSelect": true
            },
            {
              "type": "subheading",
              "label": "a) Spontaneous in Light"
            },
            {
              "type": "refraction-12col",
              "name": "nystagmus_light_horizontal_matrix",
              "cornerLabel": "Horizontal",
              "cornerLikeGroupHeader": true,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    { "key": "Right eye" },
                    { "key": "Left eye" }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "spv",
                  "label": "Slow Phase Velocity",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                },
                {
                  "value": "amp",
                  "label": "Amplitude",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                }
              ]
            },
            {
              "type": "refraction-12col",
              "name": "nystagmus_light_vertical_matrix",
              "cornerLabel": "Vertical",
              "cornerLikeGroupHeader": true,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    { "key": "Right eye" },
                    { "key": "Left eye" }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "spv",
                  "label": "Slow Phase Velocity",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                },
                {
                  "value": "amp",
                  "label": "Amplitude",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                }
              ]
            },
            {
              "type": "subheading",
              "label": "b) Spontaneous in Dark"
            },
            {
              "type": "refraction-12col",
              "name": "nystagmus_dark_horizontal_matrix",
              "cornerLabel": "Horizontal",
              "cornerLikeGroupHeader": true,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    { "key": "Right eye" },
                    { "key": "Left eye" }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "spv",
                  "label": "Slow Phase Velocity",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                },
                {
                  "value": "amp",
                  "label": "Amplitude",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                }
              ]
            },
            {
              "type": "refraction-12col",
              "name": "nystagmus_dark_vertical_matrix",
              "cornerLabel": "Vertical",
              "cornerLikeGroupHeader": true,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    { "key": "Right eye" },
                    { "key": "Left eye" }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "spv",
                  "label": "Slow Phase Velocity",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                },
                {
                  "value": "amp",
                  "label": "Amplitude",
                  "columns": [{ "type": "input" }, { "type": "input" }]
                }
              ]
            },
            {
              "name": "nystagmus_impression",
              "label": "Impression",
              "type": "input"
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "headshake_section",
          "label": "High Frequency Head Shake",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "headshake_matrix",
              "cornerLabel": "",
              "cornerLikeGroupHeader": false,
              "showColumnHeaders": true,
              "showGroupHeaders": true,
              "groups": [
                {
                  "label": "Horizontal",
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    }
                  ]
                },
                {
                  "label": "Vertical",
                  "columns": [
                    {
                      "key": "Right Eye"
                    },
                    {
                      "key": "Left Eye"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "spv",
                  "label": "Slow Phase Velocity",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "amp",
                  "label": "Amplitude",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                }
              ]
            },
            {
              "name": "headshake_impression",
              "label": "Impression",
              "type": "input"
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "nystagmus_other_section",
          "label": "Nystagmus - Others",
          "defaultOpen": false,
          "children": [
            {
              "name": "nystagmus_other_upload",
              "type": "attach-file",
              "accept": "application/pdf,image/*",
              "title": "Upload Nystagmus Others File",
              "multiple": false,
              "previewSize": { "width": 400, "height": 400 },
              "hideInputAfterSelect": true
            },
            {
              "type": "row",
              "cols": 2,
              "fields": [
                {
                  "name": "nystagmus_other_test",
                  "label": "Test",
                  "type": "input"
                },
                {
                  "name": "nystagmus_other_impression",
                  "label": "Impression",
                  "type": "input"
                }
              ]
            }
          ]
        }
      ]
    },
    gazeWithFixationSection,
    gazeWithoutFixationSection,
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "svv_section",
          "label": "Subjective Visual Vertical",
          "defaultOpen": false,
          "children": [
            {
              "name": "svv_upload",
              "type": "attach-file",
              "accept": "application/pdf,image/*",
              "title": "Upload Subjective Visual Vertical File",
              "multiple": false,
              "previewSize": { "width": 400, "height": 400 },
              "hideInputAfterSelect": true
            },
            {
              "type": "refraction-12col",
              "name": "svv_matrix",
              "cornerLabel": "",
              "cornerLikeGroupHeader": false,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    {
                      "key": "Result"
                    },
                    {
                      "key": "Impression"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "clockwise",
                  "label": "Clockwise",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "anticlockwise",
                  "label": "Anticlockwise",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "blank",
                  "label": "Blank",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "positional_section",
          "label": "Positional Test",
          "defaultOpen": false,
          "children": [
            {
              "name": "positional_fields",
              "label": "Select Tests",
              "type": "checkbox-group",
              "options": [
                {
                  "label": "Dix Hallpike",
                  "value": "dixhallpike"
                },
                {
                  "label": "Epley Maneuver",
                  "value": "epley"
                },
                {
                  "label": "Roll Test",
                  "value": "rolltest"
                },
                {
                  "label": "Barbecue Roll Test",
                  "value": "barbecue"
                },
                {
                  "label": "Supine Straight Head Extension",
                  "value": "supine"
                },
                {
                  "label": "Semont",
                  "value": "semont"
                },
                {
                  "label": "Gufoni",
                  "value": "gufoni"
                },
                {
                  "label": "Appiani",
                  "value": "appiani"
                },
                {
                  "label": "Others",
                  "value": "others"
                }
              ]
            },
            {
              "type": "refraction-12col",
              "name": "positional_matrix",
              "cornerLabel": "",
              "cornerLikeGroupHeader": false,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    {
                      "key": "Right Side"
                    },
                    {
                      "key": "Left Side"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "dixhallpike",
                  "label": "Dix Hallpike",
                  "showIf": {
                    "field": "positional_fields",
                    "includes": "dixhallpike"
                  },
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "epley",
                  "label": "Epley Maneuver",
                  "showIf": {
                    "field": "positional_fields",
                    "includes": "epley"
                  },
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "rolltest",
                  "label": "Roll Test",
                  "showIf": {
                    "field": "positional_fields",
                    "includes": "rolltest"
                  },
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "barbecue",
                  "label": "Barbecue Roll Test",
                  "showIf": {
                    "field": "positional_fields",
                    "includes": "barbecue"
                  },
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "supine",
                  "label": "Supine Straight Head Extension",
                  "showIf": {
                    "field": "positional_fields",
                    "includes": "supine"
                  },
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "semont",
                  "label": "Semont",
                  "showIf": {
                    "field": "positional_fields",
                    "includes": "semont"
                  },
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "gufoni",
                  "label": "Gufoni",
                  "showIf": {
                    "field": "positional_fields",
                    "includes": "gufoni"
                  },
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "appiani",
                  "label": "Appiani",
                  "showIf": {
                    "field": "positional_fields",
                    "includes": "appiani"
                  },
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "others",
                  "label": "Others",
                  "showIf": {
                    "field": "positional_fields",
                    "includes": "others"
                  },
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "dva_section",
          "label": "Dynamic Visual Acuity (DVA)",
          "defaultOpen": false,
          "children": [
            {
              "name": "dva_upload",
              "type": "attach-file",
              "accept": "application/pdf,image/*",
              "title": "Upload Dynamic Visual Acuity File",
              "multiple": false,
              "previewSize": { "width": 400, "height": 400 },
              "hideInputAfterSelect": true
            },
            {
              "name": "dva_fields",
              "label": "Select Tests",
              "type": "checkbox-group",
              "options": [
                {
                  "label": "Horizontal Left Passive",
                  "value": "horizontal_left_passive"
                },
                {
                  "label": "Horizontal Right Passive",
                  "value": "horizontal_right_passive"
                },
                {
                  "label": "Vertical Up Passive",
                  "value": "vertical_up_passive"
                },
                {
                  "label": "Vertical Down Passive",
                  "value": "vertical_down_passive"
                },
                {
                  "label": "Left Anterior Passive",
                  "value": "left_anterior_passive"
                },
                {
                  "label": "Right Anterior Passive",
                  "value": "right_anterior_passive"
                },
                {
                  "label": "Left Posterior Passive",
                  "value": "left_posterior_passive"
                },
                {
                  "label": "Right Posterior Passive",
                  "value": "right_posterior_passive"
                },
                {
                  "label": "Horizontal Left Active",
                  "value": "horizontal_left_active"
                },
                {
                  "label": "Horizontal Right Active",
                  "value": "horizontal_right_active"
                },
                {
                  "label": "Vertical Up Active",
                  "value": "vertical_up_active"
                },
                {
                  "label": "Vertical Down Active",
                  "value": "vertical_down_active"
                },
                {
                  "label": "Left Anterior Active",
                  "value": "left_anterior_active"
                },
                {
                  "label": "Right Anterior Active",
                  "value": "right_anterior_active"
                },
                {
                  "label": "Left Posterior Active",
                  "value": "left_posterior_active"
                },
                {
                  "label": "Right Posterior Active",
                  "value": "right_posterior_active"
                }
              ]
            },
            {
              "type": "subheading",
              "label": ""
            },
            {
              "type": "subheading",
              "label": "Dynamic Visual Acuity (Passive)"
            },
            {
              "name": "dva_horizontal_left_passive",
              "label": "Horizontal Left Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "horizontal_left_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_horizontal_right_passive",
              "label": "Horizontal Right Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "horizontal_right_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_vertical_up_passive",
              "label": "Vertical Up Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "vertical_up_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_vertical_down_passive",
              "label": "Vertical Down Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "vertical_down_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_left_anterior_passive",
              "label": "Left Anterior Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "left_anterior_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_right_anterior_passive",
              "label": "Right Anterior Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "right_anterior_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_left_posterior_passive",
              "label": "Left Posterior Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "left_posterior_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_right_posterior_passive",
              "label": "Right Posterior Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "right_posterior_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "type": "subheading",
              "label": "Dynamic Visual Acuity (Active)"
            },
            {
              "name": "dva_horizontal_left_active",
              "label": "Horizontal Left Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "horizontal_left_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_horizontal_right_active",
              "label": "Horizontal Right Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "horizontal_right_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_vertical_up_active",
              "label": "Vertical Up Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "vertical_up_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_vertical_down_active",
              "label": "Vertical Down Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "vertical_down_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_left_anterior_active",
              "label": "Left Anterior Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "left_anterior_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_right_posterior_active",
              "label": "Right Posterior Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "right_posterior_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_right_anterior_active",
              "label": "Right Anterior Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "right_anterior_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "dva_left_posterior_active",
              "label": "Left Posterior Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "dva_fields",
                "includes": "left_posterior_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "type": "accordion",
          "name": "gaze_section",
          "label": "Gaze Stabilization",
          "defaultOpen": false,
          "children": [
            {
              "name": "gaze_upload",
              "type": "attach-file",
              "accept": "application/pdf,image/*",
              "title": "Upload Gaze Stabilization File",
              "multiple": false,
              "previewSize": { "width": 400, "height": 400 },
              "hideInputAfterSelect": true
            },
            {
              "name": "gaze_fields",
              "label": "Select Tests",
              "type": "checkbox-group",
              "options": [
                {
                  "label": "Horizontal Left Passive",
                  "value": "horizontal_left_passive"
                },
                {
                  "label": "Horizontal Right Passive",
                  "value": "horizontal_right_passive"
                },
                {
                  "label": "Vertical Up Passive",
                  "value": "vertical_up_passive"
                },
                {
                  "label": "Vertical Down Passive",
                  "value": "vertical_down_passive"
                },
                {
                  "label": "Left Anterior Passive",
                  "value": "left_anterior_passive"
                },
                {
                  "label": "Right Anterior Passive",
                  "value": "right_anterior_passive"
                },
                {
                  "label": "Left Posterior Passive",
                  "value": "left_posterior_passive"
                },
                {
                  "label": "Right Posterior Passive",
                  "value": "right_posterior_passive"
                },
                {
                  "label": "Horizontal Left Active",
                  "value": "horizontal_left_active"
                },
                {
                  "label": "Horizontal Right Active",
                  "value": "horizontal_right_active"
                },
                {
                  "label": "Vertical Up Active",
                  "value": "vertical_up_active"
                },
                {
                  "label": "Vertical Down Active",
                  "value": "vertical_down_active"
                },
                {
                  "label": "Left Anterior Active",
                  "value": "left_anterior_active"
                },
                {
                  "label": "Right Anterior Active",
                  "value": "right_anterior_active"
                },
                {
                  "label": "Left Posterior Active",
                  "value": "left_posterior_active"
                },
                {
                  "label": "Right Posterior Active",
                  "value": "right_posterior_active"
                }
              ]
            },
            {
              "type": "subheading",
              "label": ""
            },
            {
              "type": "subheading",
              "label": "Gaze Stabilization (Passive)"
            },
            {
              "name": "gaze_stab_horizontal_left_passive",
              "label": "Horizontal Left Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "horizontal_left_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_horizontal_right_passive",
              "label": "Horizontal Right Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "horizontal_right_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_vertical_up_passive",
              "label": "Vertical Up Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "vertical_up_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_vertical_down_passive",
              "label": "Vertical Down Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "vertical_down_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_left_anterior_passive",
              "label": "Left Anterior Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "left_anterior_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_right_anterior_passive",
              "label": "Right Anterior Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "right_anterior_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_left_posterior_passive",
              "label": "Left Posterior Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "left_posterior_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_right_posterior_passive",
              "label": "Right Posterior Passive",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "right_posterior_passive"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "type": "subheading",
              "label": "Gaze Stabilization (Active)"
            },
            {
              "name": "gaze_stab_horizontal_left_active",
              "label": "Horizontal Left Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "horizontal_left_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_horizontal_right_active",
              "label": "Horizontal Right Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "horizontal_right_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_vertical_up_active",
              "label": "Vertical Up Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "vertical_up_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_vertical_down_active",
              "label": "Vertical Down Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "vertical_down_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_left_anterior_active",
              "label": "Left Anterior Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "left_anterior_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_right_posterior_active",
              "label": "Right Posterior Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "right_posterior_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_left_posterior_active",
              "label": "Left Posterior Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "left_posterior_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            },
            {
              "name": "gaze_stab_right_anterior_active",
              "label": "Right Anterior Active",
              "type": "radio-matrix",
              "showIf": {
                "field": "gaze_fields",
                "includes": "right_anterior_active"
              },
              "options": [
                {
                  "label": "Within normal range",
                  "value": 0
                },
                {
                  "label": "Deviated",
                  "value": 1
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "vhit_section",
          "label": "Video Head Impulse Test (vHIT)",
          "defaultOpen": false,
          "children": [
            {
              "name": "vhit_upload",
              "type": "attach-file",
              "accept": "application/pdf,image/*",
              "title": "Upload vHIT File",
              "multiple": false,
              "previewSize": { "width": 400, "height": 400 },
              "hideInputAfterSelect": true
            },
            {
              "type": "refraction-12col",
              "name": "vhit_matrix",
              "cornerLabel": "Canal",
              "cornerLikeGroupHeader": true,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    {
                      "key": "n"
                    },
                    {
                      "key": "Mean Gain"
                    },
                    {
                      "key": "Standard Deviation"
                    },
                    {
                      "key": "Asymmetry (%)"
                    },
                    {
                      "key": "Impression"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "anterior_r",
                  "label": "Anterior Right",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "anterior_l",
                  "label": "Anterior Left",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "lateral_r",
                  "label": "Lateral Right",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "lateral_l",
                  "label": "Lateral Left",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "posterior_r",
                  "label": "Posterior Right",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                },
                {
                  "value": "posterior_l",
                  "label": "Posterior Left",
                  "columns": [
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    },
                    {
                      "type": "input"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "posturography_section",
          "label": "Posturography",
          "defaultOpen": false,
          "children": [
            {
              "name": "posturography_upload",
              "type": "attach-file",
              "accept": "application/pdf,image/*",
              "title": "Upload Posturography File",
              "multiple": false,
              "previewSize": { "width": 400, "height": 400 },
              "hideInputAfterSelect": true
            },
            {
              "name": "posturography_risk",
              "label": "Risk of Falling",
              "type": "radio",
              "options": [
                {
                  "label": "Green (0% to 40%)",
                  "value": 0
                },
                {
                  "label": "Yellow (41% to 60%)",
                  "value": 1
                },
                {
                  "label": "Red (60% and above)",
                  "value": 2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "fga_section",
          "label": "Functional Gait Assessment",
          "defaultOpen": false,
          "children": [
            {
              "name": "fga_gait_level_surface",
              "label": "Gait Level Surface",
              "type": "radio-matrix",
              "options": [
                {
                  "label": "Normal (3)",
                  "value": 3
                },
                {
                  "label": "Mild impairment (2)",
                  "value": 2
                },
                {
                  "label": "Moderate impairment (1)",
                  "value": 1
                },
                {
                  "label": "Severe impairment (0)",
                  "value": 0
                }
              ]
            },
            {
              "name": "fga_change_in_gait_speed",
              "label": "Change in Gait Speed",
              "type": "radio-matrix",
              "options": [
                {
                  "label": "Normal (3)",
                  "value": 3
                },
                {
                  "label": "Mild impairment (2)",
                  "value": 2
                },
                {
                  "label": "Moderate impairment (1)",
                  "value": 1
                },
                {
                  "label": "Severe impairment (0)",
                  "value": 0
                }
              ]
            },
            {
              "name": "fga_gait_with_horizontal_head_turns",
              "label": "Gait with Horizontal Head Turns",
              "type": "radio-matrix",
              "options": [
                {
                  "label": "Normal (3)",
                  "value": 3
                },
                {
                  "label": "Mild impairment (2)",
                  "value": 2
                },
                {
                  "label": "Moderate impairment (1)",
                  "value": 1
                },
                {
                  "label": "Severe impairment (0)",
                  "value": 0
                }
              ]
            },
            {
              "name": "fga_gait_with_vertical_head_turns",
              "label": "Gait with Vertical Head Turns",
              "type": "radio-matrix",
              "options": [
                {
                  "label": "Normal (3)",
                  "value": 3
                },
                {
                  "label": "Mild impairment (2)",
                  "value": 2
                },
                {
                  "label": "Moderate impairment (1)",
                  "value": 1
                },
                {
                  "label": "Severe impairment (0)",
                  "value": 0
                }
              ]
            },
            {
              "name": "fga_gait_and_pivot_turn",
              "label": "Gait and Pivot Turn",
              "type": "radio-matrix",
              "options": [
                {
                  "label": "Normal (3)",
                  "value": 3
                },
                {
                  "label": "Mild impairment (2)",
                  "value": 2
                },
                {
                  "label": "Moderate impairment (1)",
                  "value": 1
                },
                {
                  "label": "Severe impairment (0)",
                  "value": 0
                }
              ]
            },
            {
              "name": "fga_step_over_obstacle",
              "label": "Step Over Obstacle",
              "type": "radio-matrix",
              "options": [
                {
                  "label": "Normal (3)",
                  "value": 3
                },
                {
                  "label": "Mild impairment (2)",
                  "value": 2
                },
                {
                  "label": "Moderate impairment (1)",
                  "value": 1
                },
                {
                  "label": "Severe impairment (0)",
                  "value": 0
                }
              ]
            },
            {
              "name": "fga_gait_with_narrow_base_of_support",
              "label": "Gait with Narrow Base of Support",
              "type": "radio-matrix",
              "options": [
                {
                  "label": "Normal (3)",
                  "value": 3
                },
                {
                  "label": "Mild impairment (2)",
                  "value": 2
                },
                {
                  "label": "Moderate impairment (1)",
                  "value": 1
                },
                {
                  "label": "Severe impairment (0)",
                  "value": 0
                }
              ]
            },
            {
              "name": "fga_gait_with_eyes_closed",
              "label": "Gait with Eyes Closed",
              "type": "radio-matrix",
              "options": [
                {
                  "label": "Normal (3)",
                  "value": 3
                },
                {
                  "label": "Mild impairment (2)",
                  "value": 2
                },
                {
                  "label": "Moderate impairment (1)",
                  "value": 1
                },
                {
                  "label": "Severe impairment (0)",
                  "value": 0
                }
              ]
            },
            {
              "name": "fga_ambulating_backward",
              "label": "Ambulating Backward",
              "type": "radio-matrix",
              "options": [
                {
                  "label": "Normal (3)",
                  "value": 3
                },
                {
                  "label": "Mild impairment (2)",
                  "value": 2
                },
                {
                  "label": "Moderate impairment (1)",
                  "value": 1
                },
                {
                  "label": "Severe impairment (0)",
                  "value": 0
                }
              ]
            },
            {
              "name": "fga_steps",
              "label": "Steps",
              "type": "radio-matrix",
              "options": [
                {
                  "label": "Normal (3)",
                  "value": 3
                },
                {
                  "label": "Mild impairment (2)",
                  "value": 2
                },
                {
                  "label": "Moderate impairment (1)",
                  "value": 1
                },
                {
                  "label": "Severe impairment (0)",
                  "value": 0
                }
              ]
            },
            {
              "name": "fga_total_display",
              "label": "**Total Score (0/30)**",
              "type": "display",
              "style": {
                "marginTop": "1rem",
                "fontWeight": "bold",
                "fontSize": "1.1em"
              }
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "cvemp_section",
          "label": "cVEMP",
          "defaultOpen": false,
          "children": [
            {
              "name": "cvemp_upload",
              "type": "attach-file",
              "accept": "application/pdf,image/*",
              "title": "Upload cVEMP File",
              "multiple": false,
              "previewSize": { "width": 400, "height": 400 },
              "hideInputAfterSelect": true
            },
            {
              "type": "refraction-12col",
              "name": "cvemp_matrix",
              "cornerLabel": "Side",
              "cornerLikeGroupHeader": true,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    {
                      "key": "N"
                    },
                    {
                      "key": "P1"
                    },
                    {
                      "key": "N1"
                    },
                    {
                      "key": "P1-N1 (%)"
                    },
                    {
                      "key": "Impression"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "right",
                  "label": "Right Ear",
                  "columns": [
                    {
                      "type": "input",
                      "name": "cvemp_right_n"
                    },
                    {
                      "type": "input",
                      "name": "cvemp_right_p1"
                    },
                    {
                      "type": "input",
                      "name": "cvemp_right_n1"
                    },
                    {
                      "type": "input",
                      "name": "cvemp_right_asym"
                    },
                    {
                      "type": "input",
                      "name": "cvemp_right_impression"
                    }
                  ]
                },
                {
                  "value": "left",
                  "label": "Left Ear",
                  "columns": [
                    {
                      "type": "input",
                      "name": "cvemp_left_n"
                    },
                    {
                      "type": "input",
                      "name": "cvemp_left_p1"
                    },
                    {
                      "type": "input",
                      "name": "cvemp_left_n1"
                    },
                    {
                      "type": "input",
                      "name": "cvemp_left_asym"
                    },
                    {
                      "type": "input",
                      "name": "cvemp_left_impression"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "ovemp_section",
          "label": "oVEMP",
          "defaultOpen": false,
          "children": [
            {
              "name": "ovemp_upload",
              "type": "attach-file",
              "accept": "application/pdf,image/*",
              "title": "Upload oVEMP File",
              "multiple": false,
              "previewSize": { "width": 400, "height": 400 },
              "hideInputAfterSelect": true
            },
            {
              "type": "refraction-12col",
              "name": "ovemp_matrix",
              "cornerLabel": "Side",
              "cornerLikeGroupHeader": true,
              "showColumnHeaders": true,
              "showGroupHeaders": false,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    {
                      "key": "N"
                    },
                    {
                      "key": "N1"
                    },
                    {
                      "key": "P1"
                    },
                    {
                      "key": "N1-P1 (%)"
                    },
                    {
                      "key": "Impression"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "right",
                  "label": "Right Ear",
                  "columns": [
                    {
                      "type": "input",
                      "name": "ovemp_right_n"
                    },
                    {
                      "type": "input",
                      "name": "ovemp_right_n1"
                    },
                    {
                      "type": "input",
                      "name": "ovemp_right_p1"
                    },
                    {
                      "type": "input",
                      "name": "ovemp_right_asym"
                    },
                    {
                      "type": "input",
                      "name": "ovemp_right_impression"
                    }
                  ]
                },
                {
                  "value": "left",
                  "label": "Left Ear",
                  "columns": [
                    {
                      "type": "input",
                      "name": "ovemp_left_n"
                    },
                    {
                      "type": "input",
                      "name": "ovemp_left_n1"
                    },
                    {
                      "type": "input",
                      "name": "ovemp_left_p1"
                    },
                    {
                      "type": "input",
                      "name": "ovemp_left_asym"
                    },
                    {
                      "type": "input",
                      "name": "ovemp_left_impression"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": null,
      "fields": [
        {
          "type": "accordion",
          "name": "special_test_section",
          "label": "Special Test",
          "defaultOpen": false,
          "children": [
            {
              "name": "special_test",
              "label": "Details",
              "type": "input"
            }
          ]
        },
        {
          "type": "accordion",
          "name": "intervention_section",
          "label": "Interventions",
          "defaultOpen": false,
          "children": [
            {
              "type": "refraction-12col",
              "name": "intervention_matrix",
              "cornerLabel": "Intervention",
              "cornerLikeGroupHeader": true,
              "showColumnHeaders": true,
              "groups": [
                {
                  "label": null,
                  "columns": [
                    {
                      "key": "Yes / No"
                    },
                    {
                      "key": "Remarks"
                    }
                  ]
                }
              ],
              "rows": [
                {
                  "value": "vre",
                  "label": "Vestibular Rehabilitation Exercises",
                  "columns": [
                    {
                      "type": "select",
                      "name": "vre_option",
                      "options": [
                        {
                          "label": "No",
                          "value": 0
                        },
                        {
                          "label": "Yes",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "type": "input",
                      "name": "vre_notes"
                    }
                  ]
                },
                {
                  "value": "crm",
                  "label": "Canalith Repositioning Maneuver",
                  "columns": [
                    {
                      "type": "select",
                      "name": "crm_option",
                      "options": [
                        {
                          "label": "No",
                          "value": 0
                        },
                        {
                          "label": "Yes",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "type": "input",
                      "name": "crm_notes"
                    }
                  ]
                },
                {
                  "value": "gst",
                  "label": "Gaze Stability Training",
                  "columns": [
                    {
                      "type": "select",
                      "name": "gst_option",
                      "options": [
                        {
                          "label": "No",
                          "value": 0
                        },
                        {
                          "label": "Yes",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "type": "input",
                      "name": "gst_notes"
                    }
                  ]
                },
                {
                  "value": "fall",
                  "label": "Fall Prevention Education",
                  "columns": [
                    {
                      "type": "select",
                      "name": "fall_option",
                      "options": [
                        {
                          "label": "No",
                          "value": 0
                        },
                        {
                          "label": "Yes",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "type": "input",
                      "name": "fall_notes"
                    }
                  ]
                },
                {
                  "value": "psycho",
                  "label": "Psychosocial Counseling",
                  "columns": [
                    {
                      "type": "select",
                      "name": "psycho_option",
                      "options": [
                        {
                          "label": "No",
                          "value": 0
                        },
                        {
                          "label": "Yes",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "type": "input",
                      "name": "psycho_notes"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}


export const MVVSS = {
  "title": "Malay Version Vertigo Symptom Scale (MVVSS)",
  "enableScoreToggle": true,
  "showIf": {
    "field": "enable_mvvss",
    "equals": "yes"
  },
  "fields": [
    {
      "type": "info-text",
      "text": "0 = Never, 1 = A few times (1-3 times a year), 2 = Several times (4-12 times a year), 3 = Quite often (>1 time a month), 4 = Very often (>1 time a week)"
    },
    {
      "name": "mvvss_1",
      "label": "1. A feeling that things are spinning or moving around, lasting less than two minutes",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_2",
      "label": "2. A feeling that things are spinning or moving around, lasting up to 20 minutes",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_3",
      "label": "3. A feeling that things are spinning or moving around, lasting 20 minutes to 1 hour",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_4",
      "label": "4. A feeling that things are spinning or moving around, lasting several hours",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_5",
      "label": "5. A feeling that things are spinning or moving around, lasting more than 12 hours",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_6",
      "label": "6. Pains in the heart or chest region",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_7",
      "label": "7. Hot or cold spells",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_8",
      "label": "8. Unsteadiness so severe that you actually fall",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_9",
      "label": "9. Nausea (feeling sick), stomach churning",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_10",
      "label": "10. Tension/soreness in your muscles",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_11",
      "label": "11. A feeling of being light-headed, 'swimmy' or giddy, lasting less than two minutes",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_12",
      "label": "12. A feeling of being light-headed, 'swimmy' or giddy, lasting up to 20 minutes",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_13",
      "label": "13. A feeling of being light-headed, 'swimmy' or giddy, lasting 20 minutes to 1 hour",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_14",
      "label": "14. A feeling of being light-headed, 'swimmy' or giddy, lasting several hours",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_15",
      "label": "15. A feeling of being light-headed, 'swimmy' or giddy, lasting more than 12 hours",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_16",
      "label": "16. Trembling, shivering",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_17",
      "label": "17. Feeling of pressure in the ear(s)",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_18",
      "label": "18. Heart pounding or fluttering",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_19",
      "label": "19. Vomiting",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_20",
      "label": "20. Heavy feeling in arms or legs",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_21",
      "label": "21. Visual disturbances (e.g., blurring, spots before the eyes)",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_22",
      "label": "22. Headache or feeling of pressure in the head",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_23",
      "label": "23. Unable to walk or stand properly without support",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_24",
      "label": "24. Difficulty breathing, short of breath",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_25",
      "label": "25. Loss of concentration or memory",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_26",
      "label": "26. Feeling unsteady, about to lose balance, lasting less than two minutes",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_27",
      "label": "27. Feeling unsteady, about to lose balance, lasting up to 20 minutes",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_28",
      "label": "28. Feeling unsteady, about to lose balance, lasting 20 minutes to 1 hour",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_29",
      "label": "29. Feeling unsteady, about to lose balance, lasting several hours",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_30",
      "label": "30. Feeling unsteady, about to lose balance, lasting more than 12 hours",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_31",
      "label": "31. Tingling, prickling or numbness in parts of the body",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_32",
      "label": "32. Pains in the lower part of your back",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_33",
      "label": "33. Excessive sweating",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_34",
      "label": "34. Feeling faint, about to black out",
      "type": "scale-slider",
      "min": 0,
      "max": 4
    },
    {
      "name": "mvvss_score",
      "label": "MVVSS Score",
      "type": "score-box"
    },
    {
      "name": "mvvss_interpretation",
      "label": "Interpretation",
      "type": "score-box"
    }
  ]
}
