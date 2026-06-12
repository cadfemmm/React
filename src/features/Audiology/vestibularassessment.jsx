import React, { useState, useMemo } from "react";
import CommonFormBuilder from "../CommonComponenets/FormBuilder";
import { mainSchema, schema } from "../../schema/audiology/vestibular_profile.js";

export function VestibularAdvancedForm({ onBack, mode }) {
  const [values, setValues] = useState({});
  const [dhiScoresVisible, setDhiScoresVisible] = useState(true);
  const [vvasScoresVisible, setVvasScoresVisible] = useState(true);
  const [vhqScoresVisible, setVhqScoresVisible] = useState(true);
  const [mvvssScoresVisible, setMvvssScoresVisible] = useState(true);

  const computeDHI = (v) => {
    let physical = 0, emotional = 0, functional = 0;
    const get = (x) => Number(x || 0);

    const P = [1,4,11,13,17,25];
    const E = [2,9,10,15,18,20,21,22,23];
    const F = [3,5,6,7,8,12,14,16,19,24];

    P.forEach(i => physical += get(v[`dhi_${i}`]));
    E.forEach(i => emotional += get(v[`dhi_${i}`]));
    F.forEach(i => functional += get(v[`dhi_${i}`]));

    const total = physical + emotional + functional;

    let interpretation = "";
    if (total <= 16) interpretation = "No handicap";
    else if (total <= 34) interpretation = "Mild";
    else if (total <= 52) interpretation = "Moderate";
    else interpretation = "Severe";

    return { physical, emotional, functional, total, interpretation };
  };

  const computeVVAS = (v) => {
    const vals = Array.from({ length: 9 }).map((_, i) =>
      Number(v[`vvas_${i + 1}`] || 0)
    );

    const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
    const score = avg * 10;

    let interpretation = "";
    if (score === 0) interpretation = "None";
    else if (score <= 40) interpretation = "Mild";
    else if (score <= 70) interpretation = "Moderate";
    else interpretation = "Severe";

    return { score: score.toFixed(1), interpretation };
  };

  const computeVHQ = (v) => {
    let total = 0;
    for (let i = 1; i <= 25; i++) {
      total += Number(v[`vhq_${i}`] || 0);
    }
    return { total };
  };

  const computeMVVSS = (v) => {
    let total = 0;
    for (let i = 1; i <= 14; i++) {
      total += Number(v[`mvvss_${i}`] || 0);
    }
    return { total };
  };

  // =========================
  // âœ… HANDLE CHANGE
  // =========================
  const handleChange = (name, value) => {
    setValues((prev) => {
      const updated = { ...prev, [name]: value };

      const dhi = computeDHI(updated);
      const vvas = computeVVAS(updated);
      const vhq = computeVHQ(updated);
      const mvvss = computeMVVSS(updated);

      return {
        ...updated,

        // DHI
        dhi_physical: dhi.physical,
        dhi_emotional: dhi.emotional,
        dhi_functional: dhi.functional,
        dhi_total: dhi.total,
        dhi_interpretation: dhi.interpretation,

        // VVAS
        vvas_score: vvas.score,
        vvas_interpretation: vvas.interpretation,

        // VHQ
        vhq_total: vhq.total,

        // MVVSS
        mvvss_total: mvvss.total
      };
    });
  };


  const allValues = { ...values, mode };

  return (
    <div>
      {/* Main form: title + Back + case history + scale selectors */}
      <CommonFormBuilder
        schema={mainSchema}
        values={allValues}
        onChange={handleChange}
        layout="nested"
        onAction={(type) => { if (type === "back") onBack(); }}
      />
    </div>
  );
}

export function VestibularAdvancedFormObj({ onBack }) {
  const [values, setValues] = useState({});

  const buildGazeMatrix = (name, label) => ({
  title: null,
  fields: [
    {
      type: "accordion",
      name: `${name}_section`,
      label,
      defaultOpen: false,

      children: [
        {
          type: "refraction-12col",
          name: `${name}_matrix`,

          cornerLabel: "",
          cornerLikeGroupHeader: false,
          showColumnHeaders: true,
          showGroupHeaders: false,

          groups: [
            {
              label: null,
              columns: [
                { key: "Right Eye" },
                { key: "Left Eye" },
                { key: "Impression" }
              ]
            }
          ],

          rows: [
            {
              value: "h_spv",
              label: "Horizontal - Slow Phase Velocity",
              columns: [{ type: "input" }, { type: "input" }, { type: "input" }]
            },
            {
              value: "h_amp",
              label: "Horizontal - Amplitude",
              columns: [{ type: "input" }, { type: "input" }, { type: "input" }]
            },
            {
              value: "v_spv",
              label: "Vertical - Slow Phase Velocity",
              columns: [{ type: "input" }, { type: "input" }, { type: "input" }]
            },
            {
              value: "v_amp",
              label: "Vertical - Amplitude",
              columns: [{ type: "input" }, { type: "input" }, { type: "input" }]
            }
          ]
        }
      ]
    }
  ]
});
const buildGazePairMatrix = (name, label) => ({
  title: null,
  fields: [
    {
      type: "accordion",
      name: `${name}_section`,
      label,
      defaultOpen: false,
      children: [
        {
          type: "refraction-12col",
          name: `${name}_matrix`,
          cornerLabel: "",
          cornerLikeGroupHeader: false,
          showColumnHeaders: true,
          showGroupHeaders: true,
          groups: [
            {
              label: "Horizontal",
              columns: [{ key: "Right Eye" }, { key: "Left Eye" }]
            },
            {
              label: "Vertical",
              columns: [{ key: "Right Eye" }, { key: "Left Eye" }]
            }
          ],
          rows: [
            {
              value: "spv",
              label: "Slow Phase Velocity",
              columns: [{ type: "input" }, { type: "input" }, { type: "input" }, { type: "input" }]
            },
            {
              value: "amp",
              label: "Amplitude",
              columns: [{ type: "input" }, { type: "input" }, { type: "input" }, { type: "input" }]
            }
          ]
        },
        {
          name: `${name}_impression`,
          label: "Impression",
          type: "input"
        }
      ]
    }
  ]
});
const buildBinaryOptions = (prefix, title) => ([
  {
    type: "subheading",
    label: title
  },

  {
    type: "subheading",
    label: "Dynamic Visual Acuity (Passive)"
  },

  ...[
    "Horizontal Left Passive",
    "Horizontal Right Passive",
    "Vertical Up Passive",
    "Vertical Down Passive",
    "Left Anterior Passive",
    "Right Anterior Passive",
    "Left Posterior Passive",
    "Right Posterior Passive",
  ].map(item => {
    const key = item.toLowerCase().replace(/\s+/g, "_");

    return {
      name: `${prefix}_${key}`,
      label: item,
      type: "radio-matrix",
      showIf: { field: "dva_fields", includes: key },
      options: [
        { label: "Within normal range", value: 0 },
        { label: "Deviated", value: 1 }
      ]
    };
  }),

  {
    type: "subheading",
    label: "Dynamic Visual Acuity (Active)"
  },

  ...[
    "Horizontal Left Active",
    "Horizontal Right Active",
    "Vertical Up Active",
    "Vertical Down Active",
    "Left Anterior Active",
    "Right Posterior Active",
    "Right Anterior Active",
    "Left Posterior Active"
  ].map(item => {
    const key = item.toLowerCase().replace(/\s+/g, "_");

    return {
      name: `${prefix}_${key}`,
      label: item,
      type: "radio-matrix",
      showIf: { field: "dva_fields", includes: key },
      options: [
        { label: "Within normal range", value: 0 },
        { label: "Deviated", value: 1 }
      ]
    };
  })
]);
const buildBinaryOptionsgaze = (prefix, title) => ([
  {
    type: "subheading",
    label: title
  },

  {
    type: "subheading",
    label: "Gaze Stabilization (Passive)"
  },

  ...[
    "Horizontal Left Passive",
    "Horizontal Right Passive",
    "Vertical Up Passive",
    "Vertical Down Passive",
    "Left Anterior Passive",
    "Right Anterior Passive",
    "Left Posterior Passive",
    "Right Posterior Passive"
  ].map(item => {
    const key = item.toLowerCase().replace(/\s+/g, "_");

    return {
      name: `${prefix}_${key}`,
      label: item,
      type: "radio-matrix",

      showIf: { field: "gaze_fields", includes: key },

      options: [
        { label: "Within normal range", value: 0 },
        { label: "Deviated", value: 1 }
      ]
    };
  }),

  {
    type: "subheading",
    label: "Gaze Stabilization (Active)"
  },

  ...[
    "Horizontal Left Active",
    "Horizontal Right Active",
    "Vertical Up Active",
    "Vertical Down Active",
    "Left Anterior Active",
    "Right Posterior Active",
    "Left Posterior Active",
    "Right Anterior Active",
  ].map(item => {
    const key = item.toLowerCase().replace(/\s+/g, "_");

    return {
      name: `${prefix}_${key}`,
      label: item,
      type: "radio-matrix",

      showIf: { field: "gaze_fields", includes: key },

      options: [
        { label: "Within normal range", value: 0 },
        { label: "Deviated", value: 1 }
      ]
    };
  })
]);
  // =========================
  // FGA AUTO SCORE
  // =========================
  const fgaScore = useMemo(() => {
    // Updated filter to catch keys inside the matrix structure if needed, 
    // but primarily looks for keys starting with fga_
    return Object.keys(values)
      .filter((k) => k.startsWith("fga_"))
      .reduce((sum, k) => sum + (Number(values[k]) || 0), 0);
  }, [values]);

  // =========================
  // SCHEMA
  // =========================

  const schema = {
    title: "Vestibular Assessment",
    actions: [{ type: "back", label: "Back" }],

    sections: [
      {
        title: null,
        fields: [
          {
            type: "accordion",
            name: "saccade_section",
            label: "Videonystagmography Saccade",
            defaultOpen: false,

            children: [
              {
                type: "refraction-12col",
                name: "saccade_matrix",

                cornerLabel: "",
                cornerLikeGroupHeader: false,
                showColumnHeaders: true,
                showGroupHeaders: true,

                groups: [
                  {
                    label: "Horizontal",
                    columns: [
                      { key: "Right Eye" },
                      { key: "Left Eye" }
                    ]
                  },
                  {
                    label: "Vertical",
                    columns: [
                      { key: "Right Eye" },
                      { key: "Left Eye" }
                    ]
                  }
                ],

                rows: [
                  {
                    value: "velocity",
                    label: "Velocity",
                    columns: [
                      { type: "input" },
                      { type: "input" },
                      { type: "input" },
                      { type: "input" }
                    ]
                  },
                  {
                    value: "precision",
                    label: "Precision",
                    columns: [
                      { type: "input" },
                      { type: "input" },
                      { type: "input" },
                      { type: "input" }
                    ]
                  },
                  {
                    value: "latency",
                    label: "Latency",
                    columns: [
                      { type: "input" },
                      { type: "input" },
                      { type: "input" },
                      { type: "input" }
                    ]
                  }
                ]
              },
              {
                name: "saccade_impression",
                label: "Impression",
                type: "input"
              }
            ]
          }
        ]
      },
      // =========================
      // SMOOTH PURSUIT
      // =========================
      {
      title: null,
      fields: [
        {
          type: "accordion",
          name: "smooth_section",
          label: "Videonystagmography Smooth Pursuit",
          defaultOpen: false,

          children: [
            {
              type: "refraction-12col",
              name: "smooth_matrix",

              cornerLabel: "",
              cornerLikeGroupHeader: false,
              showColumnHeaders: true,
              showGroupHeaders: true,

              groups: [
                {
                  label: "Horizontal",
                  columns: [
                    { key: "Right Eye" },
                    { key: "Left Eye" }
                  ]
                },
                {
                  label: "Vertical",
                  columns: [
                    { key: "Right Eye" },
                    { key: "Left Eye" }
                  ]
                }
              ],

              rows: [
                {
                  value: "velocity",
                  label: "Velocity",
                  columns: [
                    { type: "input" },
                    { type: "input" },
                    { type: "input" },
                    { type: "input" }
                  ]
                },
                {
                  value: "precision",
                  label: "Precision",
                  columns: [
                    { type: "input" },
                    { type: "input" },
                    { type: "input" },
                    { type: "input" }
                  ]
                }
              ]
            },
            {
              name: "smooth_impression",
              label: "Impression",
              type: "input"
            }
          ]
        }
      ]
    },

      // =========================
      // OPTOKINETIC
      // =========================
      {
        title: null,
        fields: [
          {
            type: "accordion",
            name: "opto_lr_section",
            label: "Optokinetic Test - Left to Right",
            defaultOpen: false,

            children: [
              {
                type: "refraction-12col",
                name: "opto_lr_matrix",

                cornerLabel: "",
                cornerLikeGroupHeader: false,
                showColumnHeaders: true,

                groups: [
                  {
                    label: "",
                    columns: [
                      { key: "Right Eye" },
                      { key: "Left Eye" },
                      { key: "Impression" }
                    ]
                  }
                ],

                rows: [
                  {
                    value: "gain",
                    label: "Gain",
                    columns: [{ type: "input" }, { type: "input" }, { type: "input" }]
                  },
                  {
                    value: "fast_phase",
                    label: "Fast Phase Direction",
                    columns: [{ type: "input" }, { type: "input" }, { type: "input" }]
                  }
                ]
              }
            ]
          }
        ]
      },
            {
        title: null,
        fields: [
          {
            type: "accordion",
            name: "opto_rl_section",
            label: "Optokinetic Test - Right to Left",
            defaultOpen: false,

            children: [
              {
                type: "refraction-12col",
                name: "opto_rl_matrix",

                cornerLabel: "",
                cornerLikeGroupHeader: false,
                showColumnHeaders: true,

                groups: [
                  {
                    label: "",
                    columns: [
                      { key: "Right Eye" },
                      { key: "Left Eye" },
                      { key: "Impression" }
                    ]
                  }
                ],

                rows: [
                  {
                    value: "velocity",
                    label: "Velocity",
                    columns: [{ type: "input" }, { type: "input" }, { type: "input" }]
                  },
                  {
                    value: "precision",
                    label: "Precision",
                    columns: [{ type: "input" }, { type: "input" }, { type: "input" }]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        title: null,
        fields: [
          {
            type: "accordion",
            name: "opto_vertical_section",
            label: "Optokinetic Test - Vertical",
            defaultOpen: false,
            children: [
              {
                type: "refraction-12col",
                name: "opto_vertical_matrix",
                cornerLabel: "",
                cornerLikeGroupHeader: false,
                showColumnHeaders: true,
                showGroupHeaders: true,
                groups: [
                  {
                    label: "Top to Bottom",
                    columns: [{ key: "Right Eye" }, { key: "Left Eye" }]
                  },
                  {
                    label: "Bottom to Top",
                    columns: [{ key: "Right Eye" }, { key: "Left Eye" }]
                  }
                ],
                rows: [
                  {
                    value: "velocity",
                    label: "Velocity",
                    columns: [{ type: "input" }, { type: "input" }, { type: "input" }, { type: "input" }]
                  },
                  {
                    value: "precision",
                    label: "Precision",
                    columns: [{ type: "input" }, { type: "input" }, { type: "input" }, { type: "input" }]
                  }
                ]
              },
              {
                name: "opto_vertical_impression",
                label: "Impression",
                type: "input"
              }
            ]
          }
        ]
      },

      // =========================
      // NYSTAGMUS
      // =========================
      // Nystagmus - Light (Horizontal)
    // ======================
    {
      title: null,
      fields: [
        {
          type: "accordion",
          name: "nystagmus_light_section",
          label: "Nystagmus: Spontaneous in Light",
          defaultOpen: false,
          children: [
            {
              type: "refraction-12col",
              name: "nystagmus_light_matrix",
              cornerLabel: "",
              cornerLikeGroupHeader: false,
              showColumnHeaders: true,
              showGroupHeaders: true,
              groups: [
                {
                  label: "Horizontal",
                  columns: [{ key: "Right Eye" }, { key: "Left Eye" }]
                },
                {
                  label: "Vertical",
                  columns: [{ key: "Right Eye" }, { key: "Left Eye" }]
                }
              ],
              rows: [
                {
                  value: "spv",
                  label: "Slow Phase Velocity",
                  columns: [{ type: "input" }, { type: "input" }, { type: "input" }, { type: "input" }]
                },
                {
                  value: "amp",
                  label: "Amplitude",
                  columns: [{ type: "input" }, { type: "input" }, { type: "input" }, { type: "input" }]
                }
              ]
            },
            {
              name: "nystagmus_light_impression",
              label: "Impression",
              type: "input"
            }
          ]
        }
      ]
    },

    // ======================
    // Nystagmus - Dark (Horizontal)
    // ======================
    {
      title: null,
      fields: [
        {
          type: "accordion",
          name: "nystagmus_dark_section",
          label: "Nystagmus: Spontaneous in Dark",
          defaultOpen: false,
          children: [
            {
              type: "refraction-12col",
              name: "nystagmus_dark_matrix",
              cornerLabel: "",
              cornerLikeGroupHeader: false,
              showColumnHeaders: true,
              showGroupHeaders: true,
              groups: [
                {
                  label: "Horizontal",
                  columns: [{ key: "Right Eye" }, { key: "Left Eye" }]
                },
                {
                  label: "Vertical",
                  columns: [{ key: "Right Eye" }, { key: "Left Eye" }]
                }
              ],
              rows: [
                {
                  value: "spv",
                  label: "Slow Phase Velocity",
                  columns: [{ type: "input" }, { type: "input" }, { type: "input" }, { type: "input" }]
                },
                {
                  value: "amp",
                  label: "Amplitude",
                  columns: [{ type: "input" }, { type: "input" }, { type: "input" }, { type: "input" }]
                }
              ]
            },
            {
              name: "nystagmus_dark_impression",
              label: "Impression",
              type: "input"
            }
          ]
        }
      ]
    },

    // ======================
    // Head Shake - Horizontal
    // ======================
    {
      title: null,
      fields: [
        {
          type: "accordion",
          name: "headshake_section",
          label: "High Frequency Head Shake",
          defaultOpen: false,
          children: [
            {
              type: "refraction-12col",
              name: "headshake_matrix",
              cornerLabel: "",
              cornerLikeGroupHeader: false,
              showColumnHeaders: true,
              showGroupHeaders: true,
              groups: [
                {
                  label: "Horizontal",
                  columns: [{ key: "Right Eye" }, { key: "Left Eye" }]
                },
                {
                  label: "Vertical",
                  columns: [{ key: "Right Eye" }, { key: "Left Eye" }]
                }
              ],
              rows: [
                {
                  value: "spv",
                  label: "Slow Phase Velocity",
                  columns: [{ type: "input" }, { type: "input" }, { type: "input" }, { type: "input" }]
                },
                {
                  value: "amp",
                  label: "Amplitude",
                  columns: [{ type: "input" }, { type: "input" }, { type: "input" }, { type: "input" }]
                }
              ]
            },
            {
              name: "headshake_impression",
              label: "Impression",
              type: "input"
            }
          ]
        }
      ]
    },

    // ======================
    // Others (keep as is)
    // ======================
    {
      title: "Nystagmus - Others",
      fields: [
        {
          type: "row",
          cols: 2,
          fields: [
            {
              name: "nystagmus_other_test",
              label: "Test",
              type: "input"
            },
            {
              name: "nystagmus_other_impression",
              label: "Impression",
              type: "input"
            }
          ]
        }
      ]
    },

      // =========================
      // GAZE (ALL DIRECTIONS)
      // =========================
      buildGazeMatrix("gaze_center", "Gaze Test: Centre With Fixation"),
      buildGazePairMatrix("gaze_left_right", "Gaze Test: Left / Right With Fixation"),
      buildGazePairMatrix("gaze_up_down", "Gaze Test: Up / Down With Fixation"),
      buildGazeMatrix("gaze_center_without", "Gaze Test: Centre Without Fixation"),
      buildGazePairMatrix("gaze_left_right_without", "Gaze Test: Left / Right Without Fixation"),
      buildGazePairMatrix("gaze_up_down_without", "Gaze Test: Up / Down Without Fixation"),
      // =========================
      // SVV
      // =========================
      {
        title: null,
        fields: [
          {
            type: "accordion",
            name: "svv_section",
            label: "Subjective Visual Vertical",
            defaultOpen: false,

            children: [
              {
                type: "refraction-12col",
                name: "svv_matrix",

                cornerLabel: "",
                cornerLikeGroupHeader: false,
                showColumnHeaders: true,
                showGroupHeaders: false,

                groups: [
                  {
                    label: null,
                    columns: [
                      { key: "Result" },
                      { key: "Impression" }
                    ]
                  }
                ],

                rows: [
                  {
                    value: "clockwise",
                    label: "Clockwise",
                    columns: [
                      { type: "input" },
                      { type: "input" }
                    ]
                  },
                  {
                    value: "anticlockwise",
                    label: "Anticlockwise",
                    columns: [
                      { type: "input" },
                      { type: "input" }
                    ]
                  },
                  {
                    value: "blank",
                    label: "Blank",
                    columns: [
                      { type: "input" },
                      { type: "input" }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        title: null,
        fields: [
          {
            type: "accordion",
            name: "positional_section",
            label: "Positional Test",
            defaultOpen: false,

            children: [
              // ✅ SELECTOR
              {
                name: "positional_fields",
                label: "Select Tests",
                type: "checkbox-group",
                options: [
                  { label: "Dix Hallpike", value: "dixhallpike" },
                  { label: "Epley Maneuver", value: "epley" },
                  { label: "Roll Test", value: "rolltest" },
                  { label: "Barbecue Roll Test", value: "barbecue" },
                  { label: "Supine Straight Head Extension", value: "supine" },
                  { label: "Semont", value: "semont" },
                  { label: "Gufoni", value: "gufoni" },
                  { label: "Appiani", value: "appiani" },
                  { label: "Others", value: "others" }
                ]
              },

              {
                type: "refraction-12col",
                name: "positional_matrix",

                cornerLabel: "",
                cornerLikeGroupHeader: false,
                showColumnHeaders: true,
                showGroupHeaders: false,

                groups: [
                  {
                    label: null,
                    columns: [
                      { key: "Right Side" },
                      { key: "Left Side" }
                    ]
                  }
                ],

                // ✅ FILTERED ROWS
                rows: (values) => {
                  const selected = values.positional_fields || [];

                  const allRows = [
                    {
                      value: "dixhallpike",
                      label: "Dix Hallpike",
                      columns: [{ type: "input" }, { type: "input" }]
                    },
                    {
                      value: "epley",
                      label: "Epley Maneuver",
                      columns: [{ type: "input" }, { type: "input" }]
                    },
                    {
                      value: "rolltest",
                      label: "Roll Test",
                      columns: [{ type: "input" }, { type: "input" }]
                    },
                    {
                      value: "barbecue",
                      label: "Barbecue Roll Test",
                      columns: [{ type: "input" }, { type: "input" }]
                    },
                    {
                      value: "supine",
                      label: "Supine Straight Head Extension",
                      columns: [{ type: "input" }, { type: "input" }]
                    },
                    {
                      value: "semont",
                      label: "Semont",
                      columns: [{ type: "input" }, { type: "input" }]
                    },
                    {
                      value: "gufoni",
                      label: "Gufoni",
                      columns: [{ type: "input" }, { type: "input" }]
                    },
                    {
                      value: "appiani",
                      label: "Appiani",
                      columns: [{ type: "input" }, { type: "input" }]
                    },
                    {
                      value: "others",
                      label: "Others",
                      columns: [{ type: "input" }, { type: "input" }]
                    }
                  ];

                  return allRows.filter(row => selected.includes(row.value));
                }
              }
            ]
          }
        ]
      },
      // =========================
      // DVA + GAZE STABILIZATION
      // =========================
      {
        title: null,
        fields: [
          {
            type: "accordion",
            name: "dva_section",
            label: "Dynamic Visual Acuity (DVA)",
            defaultOpen: false,

            children: [
              {
                name: "dva_fields",
                label: "Select Tests",
                type: "checkbox-group",
                options: [
                  { label: "Horizontal Left Passive", value: "horizontal_left_passive" },
                  { label: "Horizontal Right Passive", value: "horizontal_right_passive" },
                  { label: "Vertical Up Passive", value: "vertical_up_passive" },
                  { label: "Vertical Down Passive", value: "vertical_down_passive" },
                  { label: "Left Anterior Passive", value: "left_anterior_passive" },
                  { label: "Right Anterior Passive", value: "right_anterior_passive" },
                  { label: "Left Posterior Passive", value: "left_posterior_passive" },
                  { label: "Right Posterior Passive", value: "right_posterior_passive" },
                  
                  { label: "Horizontal Left Active", value: "horizontal_left_active" },
                  { label: "Horizontal Right Active", value: "horizontal_right_active" },
                  { label: "Vertical Up Active", value: "vertical_up_active" },
                  { label: "Vertical Down Active", value: "vertical_down_active" },
                  { label: "Left Anterior Active", value: "left_anterior_active" },
                  { label: "Right Anterior Active", value: "right_anterior_active" },
                  { label: "Left Posterior Active", value: "left_posterior_active" },
                  { label: "Right Posterior Active", value: "right_posterior_active" },
                ]
              },

              ...buildBinaryOptions("dva", "")
            ]
          },

          {
            type: "accordion",
            name: "gaze_section",
            label: "Gaze Stabilization",
            defaultOpen: false,

            children: [
              {
                name: "gaze_fields",
                label: "Select Tests",
                type: "checkbox-group",
                options: [
                  // Passive
                  { label: "Horizontal Left Passive", value: "horizontal_left_passive" },
                  { label: "Horizontal Right Passive", value: "horizontal_right_passive" },
                  { label: "Vertical Up Passive", value: "vertical_up_passive" },
                  { label: "Vertical Down Passive", value: "vertical_down_passive" },
                  { label: "Left Anterior Passive", value: "left_anterior_passive" },
                  { label: "Right Anterior Passive", value: "right_anterior_passive" },
                  { label: "Left Posterior Passive", value: "left_posterior_passive" },
                  { label: "Right Posterior Passive", value: "right_posterior_passive" },

                  // Active
                  { label: "Horizontal Left Active", value: "horizontal_left_active" },
                  { label: "Horizontal Right Active", value: "horizontal_right_active" },
                  { label: "Vertical Up Active", value: "vertical_up_active" },
                  { label: "Vertical Down Active", value: "vertical_down_active" },
                  { label: "Left Anterior Active", value: "left_anterior_active" },
                  { label: "Right Anterior Active", value: "right_anterior_active" },
                  { label: "Left Posterior Active", value: "left_posterior_active" },
                  { label: "Right Posterior Active", value: "right_posterior_active" },
                ]
              },

              ...buildBinaryOptionsgaze("gaze_stab", "")
            ]
          }
        ]
      },

      // =========================
      // vHIT
      // =========================
      {
      title: null,
      fields: [
        {
          type: "accordion",
          name: "vhit_section",
          label: "Video Head Impulse Test (vHIT)",
          defaultOpen: false,

          children: [
            {
              type: "refraction-12col",
              name: "vhit_matrix",

              cornerLabel: "Canal",
              cornerLikeGroupHeader: true,
              showColumnHeaders: true,
              showGroupHeaders: false,

              groups: [
                {
                  label: null,
                  columns: [
                    { key: "n" },
                    { key: "Mean Gain" },
                    { key: "Standard Deviation" },
                    { key: "Asymmetry (%)" },
                    { key: "Impression" }
                  ]
                }
              ],

              rows: [
                { value: "anterior_r", label: "Anterior Right", columns: [{type:"input"},{type:"input"},{type:"input"},{type:"input"},{type:"input"}] },
                { value: "anterior_l", label: "Anterior Left",  columns: [{type:"input"},{type:"input"},{type:"input"},{type:"input"},{type:"input"}] },

                { value: "lateral_r", label: "Lateral Right",   columns: [{type:"input"},{type:"input"},{type:"input"},{type:"input"},{type:"input"}] },
                { value: "lateral_l", label: "Lateral Left",    columns: [{type:"input"},{type:"input"},{type:"input"},{type:"input"},{type:"input"}] },

                { value: "posterior_r", label: "Posterior Right", columns: [{type:"input"},{type:"input"},{type:"input"},{type:"input"},{type:"input"}] },
                { value: "posterior_l", label: "Posterior Left",  columns: [{type:"input"},{type:"input"},{type:"input"},{type:"input"},{type:"input"}] }
              ]
            }
          ]
        }
      ]
    },

      // =========================
      // POSTUROGRAPHY
      // =========================
      {
        title: "Posturography",
        fields: [
          {
            name: "posturography_risk",
            label: "Risk of Falling",
            type: "radio",
            options: [
              { label: "Green (0% to 40%)", value: 0 },
              { label: "Yellow (41% to 60%)", value: 1 },
              { label: "Red (60% and above)", value: 2 },
            ],
          },
        ],
      },

      // =========================
      // FGA (Refactored to Accordion/Matrix)
      // =========================
      {
        title: null,
        fields: [
          {
            type: "accordion",
            name: "fga_section",
            label: "Functional Gait Assessment",
            defaultOpen: false,
            children: [
              ...[
                { key: "gait_level_surface", label: "Gait Level Surface" },
                { key: "change_in_gait_speed", label: "Change in Gait Speed" },
                { key: "gait_with_horizontal_head_turns", label: "Gait with Horizontal Head Turns" },
                { key: "gait_with_vertical_head_turns", label: "Gait with Vertical Head Turns" },
                { key: "gait_and_pivot_turn", label: "Gait and Pivot Turn" },
                { key: "step_over_obstacle", label: "Step Over Obstacle" },
                { key: "gait_with_narrow_base_of_support", label: "Gait with Narrow Base of Support" },
                { key: "gait_with_eyes_closed", label: "Gait with Eyes Closed" },
                { key: "ambulating_backward", label: "Ambulating Backward" },
                { key: "steps", label: "Steps" }
              ].map((item) => ({
                name: `fga_${item.key}`,
                label: item.label,
                type: "radio-matrix",
                options: [
                  { label: "Normal (3)", value: 3 },
                  { label: "Mild impairment (2)", value: 2 },
                  { label: "Moderate impairment (1)", value: 1 },
                  { label: "Severe impairment (0)", value: 0 }
                ]
              })),
              {
                name: "fga_total_display",
                label: `**Total Score (${fgaScore}/30)**`,
                type: "display",
                style: { marginTop: "1rem", fontWeight: "bold", fontSize: "1.1em" }
              }
            ]
          }
        ]
      },

      // =========================
      // cVEMP
      // =========================
       {
        title: null,
        fields: [
          {
            type: "accordion",
            name: "cvemp_section",
            label: "cVEMP",
            defaultOpen: false,

            children: [
              {
                type: "refraction-12col",
                name: "cvemp_matrix",

                cornerLabel: "Side",
                cornerLikeGroupHeader: true,

                showColumnHeaders: true,
                showGroupHeaders: false,

                groups: [
                  {
                    label: null,
                    columns: [
                      { key: "N" },
                      { key: "P1" },
                      { key: "N1" },
                      { key: "P1-N1 (%)" },
                      { key: "Impression" }
                    ]
                  }
                ],

                rows: [
                  {
                    value: "right",
                    label: "Right Ear",
                    columns: [
                      { type: "input", name: "cvemp_right_n" },
                      { type: "input", name: "cvemp_right_p1" },
                      { type: "input", name: "cvemp_right_n1" },
                      { type: "input", name: "cvemp_right_asym" },
                      { type: "input", name: "cvemp_right_impression" }
                    ]
                  },
                  {
                    value: "left",
                    label: "Left Ear",
                    columns: [
                      { type: "input", name: "cvemp_left_n" },
                      { type: "input", name: "cvemp_left_p1" },
                      { type: "input", name: "cvemp_left_n1" },
                      { type: "input", name: "cvemp_left_asym" },
                      { type: "input", name: "cvemp_left_impression" }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },

       {
        title: null,
        fields: [
          {
            type: "accordion",
            name: "ovemp_section",
            label: "oVEMP",
            defaultOpen: false,

            children: [
              {
                type: "refraction-12col",
                name: "ovemp_matrix",

                cornerLabel: "Side",
                cornerLikeGroupHeader: true,

                showColumnHeaders: true,
                showGroupHeaders: false,

                groups: [
                  {
                    label: null,
                    columns: [
                      { key: "N" },
                      { key: "N1" },
                      { key: "P1" },
                      { key: "N1-P1 (%)" },
                      { key: "Impression" }
                    ]
                  }
                ],

                rows: [
                  {
                    value: "right",
                    label: "Right Ear",
                    columns: [
                      { type: "input", name: "ovemp_right_n" },
                      { type: "input", name: "ovemp_right_n1" },
                      { type: "input", name: "ovemp_right_p1" },
                      { type: "input", name: "ovemp_right_asym" },
                      { type: "input", name: "ovemp_right_impression" }
                    ]
                  },
                  {
                    value: "left",
                    label: "Left Ear",
                    columns: [
                      { type: "input", name: "ovemp_left_n" },
                      { type: "input", name: "ovemp_left_n1" },
                      { type: "input", name: "ovemp_left_p1" },
                      { type: "input", name: "ovemp_left_asym" },
                      { type: "input", name: "ovemp_left_impression" }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
       
    {
      title: null,
      fields: [
        {
          type: "subheading",
          label: "Special Test"
        },
        {
          name: "special_test",
          label: "Details",
          type: "input"
        },

        {
          type: "accordion",
          name: "intervention_section",
          label: "Interventions",
          defaultOpen: false,

          children: [
            {
              type: "refraction-12col",
              name: "intervention_matrix",

              cornerLabel: "Intervention",
              cornerLikeGroupHeader: true,
              showColumnHeaders: true,

              groups: [
                {
                  label: null,
                  columns: [
                    { key: "Yes / No" },
                    { key: "Remarks" }
                  ]
                }
              ],

              rows: [
                {
                  value: "vre",
                  label: "Vestibular Rehabilitation Exercises",
                  columns: [
                    {
                      type: "select",
                      name: "vre_option",
                      options: [
                        { label: "No", value: 0 },
                        { label: "Yes", value: 1 }
                      ]
                    },
                    { type: "input", name: "vre_notes" }
                  ]
                },
                {
                  value: "crm",
                  label: "Canalith Repositioning Maneuver",
                  columns: [
                    {
                      type: "select",
                      name: "crm_option",
                      options: [
                        { label: "No", value: 0 },
                        { label: "Yes", value: 1 }
                      ]
                    },
                    { type: "input", name: "crm_notes" }
                  ]
                },
                {
                  value: "gst",
                  label: "Gaze Stability Training",
                  columns: [
                    {
                      type: "select",
                      name: "gst_option",
                      options: [
                        { label: "No", value: 0 },
                        { label: "Yes", value: 1 }
                      ]
                    },
                    { type: "input", name: "gst_notes" }
                  ]
                },
                {
                  value: "fall",
                  label: "Fall Prevention Education",
                  columns: [
                    {
                      type: "select",
                      name: "fall_option",
                      options: [
                        { label: "No", value: 0 },
                        { label: "Yes", value: 1 }
                      ]
                    },
                    { type: "input", name: "fall_notes" }
                  ]
                },
                {
                  value: "psycho",
                  label: "Psychosocial Counseling",
                  columns: [
                    {
                      type: "select",
                      name: "psycho_option",
                      options: [
                        { label: "No", value: 0 },
                        { label: "Yes", value: 1 }
                      ]
                    },
                    { type: "input", name: "psycho_notes" }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
    ],
  };

  return (
    <CommonFormBuilder
      schema={schema}
      values={values}
      layout="nested"
      onChange={(n, v) => setValues((prev) => ({ ...prev, [n]: v }))}
      onAction={(type) => type === "back" && onBack?.()}
    />
  );
}
