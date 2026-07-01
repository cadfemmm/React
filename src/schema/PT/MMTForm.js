const SCHEMA = {
  "title": "Manual Muscle Testing (MMT)",
  "fields": [
    {
      "type": "accordion",
      "name": "mmt_section_shoulder",
      "label": "Shoulder",
      "defaultOpen": true,
      "children": [
        {
          "type": "refraction-12col",
          "name": "mmt_shoulder",
          "cornerLabel": "Movement",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Right",
              "columns": [
                {
                  "key": "",
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "label": "Left",
              "columns": [
                {
                  "key": "",
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "sh_flex",
              "label": "Flexion",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "value": "sh_ext",
              "label": "Extension",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "value": "sh_abd",
              "label": "Abduction",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "value": "sh_add",
              "label": "Adduction",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "value": "sh_ir",
              "label": "Internal Rotation",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "value": "sh_er",
              "label": "External Rotation",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "accordion",
      "name": "mmt_section_elbow",
      "label": "Elbow",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "mmt_elbow",
          "cornerLabel": "Movement",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Right",
              "columns": [
                {
                  "key": "",
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "label": "Left",
              "columns": [
                {
                  "key": "",
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "el_flex",
              "label": "Flexion",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "value": "el_ext",
              "label": "Extension",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "value": "el_pro",
              "label": "Pronation",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "value": "el_sup",
              "label": "Supination",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "accordion",
      "name": "mmt_section_wrist",
      "label": "Wrist",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "mmt_wrist",
          "cornerLabel": "Movement",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Right",
              "columns": [
                {
                  "key": "",
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "label": "Left",
              "columns": [
                {
                  "key": "",
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "wr_flex",
              "label": "Flexion",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "value": "wr_ext",
              "label": "Extension",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "value": "wr_rad",
              "label": "Radial Deviation",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "value": "wr_uln",
              "label": "Ulnar Deviation",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "accordion",
      "name": "mmt_section_hip",
      "label": "Hip",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "mmt_hip",
          "cornerLabel": "Movement",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Right",
              "columns": [
                {
                  "key": "",
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "label": "Left",
              "columns": [
                {
                  "key": "",
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "hip_flex",
              "label": "Flexion",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "value": "hip_ext",
              "label": "Extension",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "value": "hip_abd",
              "label": "Abduction",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "value": "hip_add",
              "label": "Adduction",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "value": "hip_ir",
              "label": "Internal Rotation",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "value": "hip_er",
              "label": "External Rotation",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "accordion",
      "name": "mmt_section_knee",
      "label": "Knee",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "mmt_knee",
          "cornerLabel": "Movement",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Right",
              "columns": [
                {
                  "key": "",
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "label": "Left",
              "columns": [
                {
                  "key": "",
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "kn_flex",
              "label": "Flexion",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "value": "kn_ext",
              "label": "Extension",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "accordion",
      "name": "mmt_section_ankle",
      "label": "Ankle",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "mmt_ankle",
          "cornerLabel": "Movement",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Right",
              "columns": [
                {
                  "key": "",
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "label": "Left",
              "columns": [
                {
                  "key": "",
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "ank_df",
              "label": "Dorsiflexion",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "value": "ank_pf",
              "label": "Plantarflexion",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "value": "ank_inv",
              "label": "Inversion",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            },
            {
              "value": "ank_evr",
              "label": "Eversion",
              "columns": [
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                },
                {
                  "type": "select",
                  "options": [
                    {
                      "label": "0 – No Movement",
                      "value": "0"
                    },
                    {
                      "label": "1 – Flickering of contraction",
                      "value": "1"
                    },
                    {
                      "label": "2 – Full ROM with eliminating gravity",
                      "value": "2"
                    },
                    {
                      "label": "3 – Full ROM against gravity",
                      "value": "3"
                    },
                    {
                      "label": "4 – Full ROM against gravity with min resistance",
                      "value": "4"
                    },
                    {
                      "label": "5 – Full ROM against gravity with max resistance",
                      "value": "5"
                    }
                  ],
                  "disabled": false
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}