const schema = {
  "title": "Cardiac Focused Assessment",
  "sections": [
    {
      "title": "CLINICAL EXAMINATION",
      "fields": [
        {
          "name": "vital_recorded_at",
          "label": "Recorded at",
          "type": "input"
        },
        {
          "name": "vital_trend",
          "label": "Trend",
          "type": "radio",
          "position": "side",
          "options": [
            {
              "label": "Stable",
              "value": "stable"
            },
            {
              "label": "Improving",
              "value": "improving"
            },
            {
              "label": "Worsening",
              "value": "worsening"
            }
          ]
        },
        {
          "name": "general_appearance",
          "label": "General Appearance",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Comfortable at rest",
              "value": "comfortable"
            },
            {
              "label": "Dyspnoeic at rest",
              "value": "dyspnoeic"
            },
            {
              "label": "Diaphoretic",
              "value": "diaphoretic"
            },
            {
              "label": "Pale/ashen",
              "value": "pale"
            },
            {
              "label": "Cyanotic",
              "value": "cyanotic"
            },
            {
              "label": "Anxious",
              "value": "anxious"
            },
            {
              "label": "Altered sensorium",
              "value": "altered"
            }
          ]
        },
        {
          "name": "resp_breathing",
          "label": "Breathing",
          "type": "radio",
          "options": [
            {
              "label": "Room air",
              "value": "room_air"
            },
            {
              "label": "Assisted Breathing",
              "value": "assisted_breathing"
            }
          ]
        },
        {
          "name": "resp_o2_device",
          "label": "O₂ device",
          "type": "radio",
          "showIf": {
            "field": "resp_breathing",
            "equals": "assisted_breathing"
          },
          "options": [
            {
              "label": "Nasal cannula",
              "value": "nasal_cannula"
            },
            {
              "label": "Simple mask",
              "value": "simple_mask"
            },
            {
              "label": "HFNC",
              "value": "hfnc"
            },
            {
              "label": "CPAP/BiPAP",
              "value": "cpap_bipap"
            },
            {
              "label": "Mechanical ventilation",
              "value": "mech_vent"
            }
          ]
        },
        {
          "name": "resp_flow_rate",
          "label": "Flow rate (L/min)",
          "type": "input"
        },
        {
          "name": "oedema_exam_location",
          "label": "Oedema Location",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Ankles",
              "value": "ankles"
            },
            {
              "label": "Legs",
              "value": "legs"
            },
            {
              "label": "Sacrum",
              "value": "sacrum"
            },
            {
              "label": "Hands",
              "value": "hands"
            },
            {
              "label": "Generalised",
              "value": "generalised"
            }
          ]
        },
        {
          "name": "iv_site",
          "label": "IV site",
          "type": "radio",
          "position": "side",
          "options": [
            {
              "label": "Intact",
              "value": "intact"
            },
            {
              "label": "Redness/swelling",
              "value": "redness_swelling"
            },
            {
              "label": "Leakage",
              "value": "leakage"
            }
          ]
        },
        {
          "name": "lines_devices_present",
          "label": "Lines/devices",
          "type": "radio",
          "options": [
            {
              "label": "Yes",
              "value": "yes"
            },
            {
              "label": "No",
              "value": "no"
            }
          ]
        },
        {
          "name": "lines_devices",
          "label": "Select Lines/devices",
          "type": "checkbox-group",
          "showIf": {
            "field": "lines_devices_present",
            "equals": "yes"
          },
          "options": [
            {
              "label": "Peripheral IV",
              "value": "peripheral_iv"
            },
            {
              "label": "Central line",
              "value": "central_line"
            },
            {
              "label": "Arterial line",
              "value": "arterial_line"
            },
            {
              "label": "Chest tube",
              "value": "chest_tube"
            },
            {
              "label": "Dialysis catheter",
              "value": "dialysis_cath"
            },
            {
              "label": "Feeding tube",
              "value": "feeding_tube"
            },
            {
              "label": "Pacemaker/ICD",
              "value": "pacemaker_icd"
            }
          ]
        }
      ]
    }
  ]
}