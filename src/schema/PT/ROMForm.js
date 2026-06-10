const SCHEMA = {
  "title": "RANGE OF MOTION MEASUREMENTS (Degrees)",
  "fields": [
    {
      "type": "accordion",
      "name": "rom_section_Cervical Spine",
      "label": "Cervical Spine",
      "defaultOpen": true,
      "children": [
        {
          "type": "refraction-12col",
          "name": "rom_cervical",
          "cornerLabel": "Movement",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Active Range Of Motion (AROM)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Passive Range Of Motion (PROM)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Assisted Range Of Motion (AROM)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Normal",
              "columns": [
                {
                  "key": ""
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "flexion",
              "label": "Flexion",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 45°"
                }
              ]
            },
            {
              "value": "extension",
              "label": "Extension",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 45°"
                }
              ]
            },
            {
              "value": "rotation",
              "label": "Rotation",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 60°"
                }
              ]
            },
            {
              "value": "lateral_flexion",
              "label": "Lateral Flexion",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 45°"
                }
              ]
            }
          ]
        },
        {
          "type": "input",
          "name": "rom_cervical_joint_region",
          "label": "Joint/Region"
        },
        {
          "type": "input",
          "name": "rom_cervical_reps",
          "label": "Reps"
        },
        {
          "type": "input",
          "name": "rom_cervical_set",
          "label": "Set"
        }
      ]
    },
    {
      "type": "accordion",
      "name": "rom_section_Shoulder",
      "label": "Shoulder",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "rom_shoulder",
          "cornerLabel": "Movement",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Active Range Of Motion (AROM)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Passive Range Of Motion (PROM)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Assisted Range Of Motion (AROM)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Normal",
              "columns": [
                {
                  "key": ""
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "flexion",
              "label": "Flexion",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 135°"
                }
              ]
            },
            {
              "value": "extension",
              "label": "Extension",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0°"
                }
              ]
            },
            {
              "value": "abduction",
              "label": "Abduction",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 180°"
                }
              ]
            },
            {
              "value": "adduction",
              "label": "Adduction",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 30°"
                }
              ]
            },
            {
              "value": "internal_rotation",
              "label": "Internal Rotation",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 70°"
                }
              ]
            },
            {
              "value": "external_rotation",
              "label": "External Rotation",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 90°"
                }
              ]
            }
          ]
        },
        {
          "type": "input",
          "name": "rom_shoulder_joint_region",
          "label": "Joint/Region"
        },
        {
          "type": "input",
          "name": "rom_shoulder_reps",
          "label": "Reps"
        },
        {
          "type": "input",
          "name": "rom_shoulder_set",
          "label": "Set"
        }
      ]
    },
    {
      "type": "accordion",
      "name": "rom_section_Elbow / Forearm",
      "label": "Elbow / Forearm",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "rom_elbow_forearm",
          "cornerLabel": "Movement",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Active Range Of Motion (AROM)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Passive Range Of Motion (PROM)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Assisted Range Of Motion (AROM)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Normal",
              "columns": [
                {
                  "key": ""
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "flexion",
              "label": "Flexion",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 150°"
                }
              ]
            },
            {
              "value": "extension",
              "label": "Extension",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0°"
                }
              ]
            },
            {
              "value": "pronation",
              "label": "Pronation",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 80°"
                }
              ]
            },
            {
              "value": "supination",
              "label": "Supination",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 80°"
                }
              ]
            }
          ]
        },
        {
          "type": "input",
          "name": "rom_elbow_forearm_joint_region",
          "label": "Joint/Region"
        },
        {
          "type": "input",
          "name": "rom_elbow_forearm_reps",
          "label": "Reps"
        },
        {
          "type": "input",
          "name": "rom_elbow_forearm_set",
          "label": "Set"
        }
      ]
    },
    {
      "type": "accordion",
      "name": "rom_section_Wrist / Hand",
      "label": "Wrist / Hand",
      "defaultOpen": false,
      "children": [
        {
          "type": "info-text",
          "text": "Fill Wrist only if needed it is not mandatory",
          "showIf": {
            "field": "amp_upper_limb_location",
            "equals": "carpal_metacarpal"
          }
        },
        {
          "type": "refraction-12col",
          "name": "rom_wrist_hand",
          "cornerLabel": "Movement",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Active Range Of Motion (AROM)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Passive Range Of Motion (PROM)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Assisted Range Of Motion (AROM)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Normal",
              "columns": [
                {
                  "key": ""
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "flexion",
              "label": "Flexion",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 80°"
                }
              ]
            },
            {
              "value": "extension",
              "label": "Extension",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 70°"
                }
              ]
            },
            {
              "value": "radial_deviation",
              "label": "Radial Deviation",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 20°"
                }
              ]
            },
            {
              "value": "ulnar_deviation",
              "label": "Ulnar Deviation",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 30°"
                }
              ]
            }
          ]
        },
        {
          "type": "input",
          "name": "rom_wrist_hand_joint_region",
          "label": "Joint/Region"
        },
        {
          "type": "input",
          "name": "rom_wrist_hand_reps",
          "label": "Reps"
        },
        {
          "type": "input",
          "name": "rom_wrist_hand_set",
          "label": "Set"
        }
      ]
    },
    {
      "type": "accordion",
      "name": "rom_section_Thoracolumbar Spine",
      "label": "Thoracolumbar Spine",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "rom_thoracolumbar",
          "cornerLabel": "Movement",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Active Range Of Motion (AROM)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Passive Range Of Motion (PROM)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Assisted Range Of Motion (AROM)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Normal",
              "columns": [
                {
                  "key": ""
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "flexion",
              "label": "Flexion",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 60°"
                }
              ]
            },
            {
              "value": "extension",
              "label": "Extension",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 25°"
                }
              ]
            },
            {
              "value": "rotation",
              "label": "Rotation",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 30°"
                }
              ]
            },
            {
              "value": "side_bending",
              "label": "Side Bending",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 25°"
                }
              ]
            }
          ]
        },
        {
          "type": "input",
          "name": "rom_thoracolumbar_joint_region",
          "label": "Joint/Region"
        },
        {
          "type": "input",
          "name": "rom_thoracolumbar_reps",
          "label": "Reps"
        },
        {
          "type": "input",
          "name": "rom_thoracolumbar_set",
          "label": "Set"
        }
      ]
    },
    {
      "type": "accordion",
      "name": "rom_section_Hip",
      "label": "Hip",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "rom_hip",
          "cornerLabel": "Movement",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Active Range Of Motion (AROM)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Passive Range Of Motion (PROM)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Assisted Range Of Motion (AROM)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Normal",
              "columns": [
                {
                  "key": ""
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "flexion",
              "label": "Flexion",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 120°"
                }
              ]
            },
            {
              "value": "extension",
              "label": "Extension",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 30°"
                }
              ]
            },
            {
              "value": "abduction",
              "label": "Abduction",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 45°"
                }
              ]
            },
            {
              "value": "adduction",
              "label": "Adduction",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 30°"
                }
              ]
            },
            {
              "value": "internal_rotation",
              "label": "Internal Rotation",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 45°"
                }
              ]
            },
            {
              "value": "external_rotation",
              "label": "External Rotation",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 45°"
                }
              ]
            }
          ]
        },
        {
          "type": "input",
          "name": "rom_hip_joint_region",
          "label": "Joint/Region"
        },
        {
          "type": "input",
          "name": "rom_hip_reps",
          "label": "Reps"
        },
        {
          "type": "input",
          "name": "rom_hip_set",
          "label": "Set"
        }
      ]
    },
    {
      "type": "accordion",
      "name": "rom_section_Knee",
      "label": "Knee",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "rom_knee",
          "cornerLabel": "Movement",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Active Range Of Motion (AROM)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Passive Range Of Motion (PROM)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Assisted Range Of Motion (AROM)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Normal",
              "columns": [
                {
                  "key": ""
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "flexion",
              "label": "Flexion",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 135°"
                }
              ]
            },
            {
              "value": "extension",
              "label": "Extension",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0°"
                }
              ]
            }
          ]
        },
        {
          "type": "input",
          "name": "rom_knee_joint_region",
          "label": "Joint/Region"
        },
        {
          "type": "input",
          "name": "rom_knee_reps",
          "label": "Reps"
        },
        {
          "type": "input",
          "name": "rom_knee_set",
          "label": "Set"
        }
      ]
    },
    {
      "type": "accordion",
      "name": "rom_section_Ankle / Foot",
      "label": "Ankle / Foot",
      "defaultOpen": false,
      "children": [
        {
          "type": "info-text",
          "text": "If required, not Mandatory.",
          "showIf": {
            "field": "amp_lower_limb_location",
            "equals": "tarsal_metatarsal"
          }
        },
        {
          "type": "refraction-12col",
          "name": "rom_ankle_foot",
          "cornerLabel": "Movement",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Active Range Of Motion (AROM)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Passive Range Of Motion (PROM)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Assisted Range Of Motion (AROM)",
              "columns": [
                {
                  "key": "Right"
                },
                {
                  "key": "Left"
                }
              ]
            },
            {
              "label": "Normal",
              "columns": [
                {
                  "key": ""
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "dorsiflexion",
              "label": "Dorsiflexion",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 20°"
                }
              ]
            },
            {
              "value": "plantarflexion",
              "label": "Plantarflexion",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 50°"
                }
              ]
            },
            {
              "value": "inversion",
              "label": "Inversion",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 35°"
                }
              ]
            },
            {
              "value": "eversion",
              "label": "Eversion",
              "columns": [
                {},
                {},
                {},
                {},
                {},
                {},
                {
                  "type": "static",
                  "value": "0 - 15°"
                }
              ]
            }
          ]
        },
        {
          "type": "input",
          "name": "rom_ankle_foot_joint_region",
          "label": "Joint/Region"
        },
        {
          "type": "input",
          "name": "rom_ankle_foot_reps",
          "label": "Reps"
        },
        {
          "type": "input",
          "name": "rom_ankle_foot_set",
          "label": "Set"
        }
      ]
    }
  ]
}