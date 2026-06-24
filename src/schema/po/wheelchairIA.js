const SUBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "name": "history_of_present_illness",
          "label": "History of Present Illness",
          "type": "input"
        },
        {
          "name": "chief_complaint",
          "label": "Chief Complaint",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Brakes are not working / ineffective",
              "value": "brakes_not_working"
            },
            {
              "label": "Wheels are heavy / stiff",
              "value": "wheels_heavy_stiff"
            },
            {
              "label": "Difficult to push",
              "value": "difficult_to_push"
            },
            {
              "label": "Strange noises when moving",
              "value": "strange_noises"
            },
            {
              "label": "Cannot move / immobilized",
              "value": "cannot_move"
            },
            {
              "label": "Loose armrest",
              "value": "loose_armrest"
            },
            {
              "label": "Torn seat",
              "value": "torn_seat"
            },
            {
              "label": "Uncomfortable",
              "value": "uncomfortable"
            },
            {
              "label": "Loose or damaged footrest",
              "value": "damaged_footrest"
            },
            {
              "label": "Wheelchair veering to one side",
              "value": "veering_one_side"
            },
            {
              "label": "Brake not holding properly",
              "value": "brake_not_holding"
            },
            {
              "label": "Wheel wobbling",
              "value": "wheel_wobbling"
            },
            {
              "label": "Handlebar loose",
              "value": "handlebar_loose"
            }
          ]
        },
        {
          "name": "chief_complaint_remarks",
          "label": "Chief Complaint Remarks",
          "type": "input",
          "placeholder": "Enter additional remarks",
          "showIf": {
            "field": "chief_complaint",
            "hasAnyValue": true
          }
        },
        {
          "name": "issue_occur",
          "label": "Issue Occur",
          "type": "checkbox-group",
          "options": [
            {
              "label": "During use",
              "value": "during_use"
            },
            {
              "label": "While moving",
              "value": "while_moving"
            },
            {
              "label": "During operation",
              "value": "during_operation"
            },
            {
              "label": "After use",
              "value": "after_use"
            },
            {
              "label": "At rest",
              "value": "at_rest"
            },
            {
              "label": "During transfer",
              "value": "during_transfer"
            },
            {
              "label": "During braking",
              "value": "during_braking"
            },
            {
              "label": "During turning",
              "value": "during_turning"
            },
            {
              "label": "After collision / impact",
              "value": "after_collision"
            },
            {
              "label": "After maintenance / repair",
              "value": "after_maintenance"
            },
            {
              "label": "During loading / unloading",
              "value": "during_loading"
            }
          ]
        },
        {
          "name": "issue_occur_remarks",
          "label": "Issue Occur Remarks",
          "type": "input",
          "placeholder": "Enter additional remarks",
          "showIf": {
            "field": "issue_occur",
            "hasAnyValue": true
          }
        }
      ]
    }
  ]
}


const OBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "name": "current_wheelchair",
          "label": "Current Wheelchair",
          "type": "single-select",
          "options": [
            {
              "label": "Light",
              "value": "light"
            },
            {
              "label": "Recliner",
              "value": "recliner"
            },
            {
              "label": "Heavy Duty",
              "value": "heavy_duty"
            },
            {
              "label": "Standard",
              "value": "standard"
            },
            {
              "label": "Motorised",
              "value": "motorised"
            },
            {
              "label": "Tilt-in-space",
              "value": "tilt_in_space"
            }
          ]
        },
        {
          "name": "current_wheelchair_remarks",
          "label": "Remarks",
          "type": "input",
          "placeholder": "Enter remarks about current wheelchair",
          "showIf": {
            "field": "current_wheelchair",
            "hasAnyValue": true
          }
        },
        {
          "name": "wheelchair_size",
          "label": "Wheelchair Size",
          "type": "input",
          "placeholder": "Enter wheelchair size"
        },
        {
          "name": "observation",
          "label": "Observation",
          "type": "radio",
          "options": [
            {
              "label": "Repair",
              "value": "repair"
            },
            {
              "label": "Modify",
              "value": "modify"
            },
            {
              "label": "Customise",
              "value": "customise"
            }
          ]
        },
        {
          "name": "repair_issues",
          "label": "Repair",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Worn-out tires",
              "value": "worn_out_tires"
            },
            {
              "label": "Flat / punctured tire",
              "value": "flat_tire"
            },
            {
              "label": "Loose screws",
              "value": "loose_screws"
            },
            {
              "label": "Brakes are not gripping",
              "value": "brakes_not_gripping"
            },
            {
              "label": "Damaged bearings",
              "value": "damaged_bearings"
            },
            {
              "label": "Bent frame",
              "value": "bent_frame"
            },
            {
              "label": "Motor is unresponsive",
              "value": "motor_unresponsive"
            },
            {
              "label": "Defective controller",
              "value": "defective_controller"
            },
            {
              "label": "Weak battery",
              "value": "weak_battery"
            },
            {
              "label": "Thin or damaged cushion",
              "value": "damaged_cushion"
            },
            {
              "label": "Wheel misalignment",
              "value": "wheel_misalignment"
            },
            {
              "label": "Wheel wobble",
              "value": "wheel_wobble"
            },
            {
              "label": "Brake cable loose / stretched",
              "value": "brake_cable_loose"
            },
            {
              "label": "Brake pad worn out",
              "value": "brake_pad_worn"
            },
            {
              "label": "Rusted components",
              "value": "rusted_components"
            },
            {
              "label": "Broken caster wheel",
              "value": "broken_caster_wheel"
            },
            {
              "label": "Loose joystick",
              "value": "loose_joystick"
            },
            {
              "label": "Charging port faulty",
              "value": "charging_port_faulty"
            },
            {
              "label": "Electrical wiring loose / damaged",
              "value": "electrical_wiring_damaged"
            },
            {
              "label": "Unusual vibration during movement",
              "value": "unusual_vibration"
            }
          ],
          "showIf": {
            "field": "observation",
            "equals": "repair"
          }
        },
        {
          "name": "repair_remarks",
          "label": "Repair Remarks",
          "type": "input",
          "placeholder": "Enter repair remarks",
          "showIf": {
            "field": "observation",
            "equals": "repair"
          }
        },
        {
          "name": "modify_options",
          "label": "Modify",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Add stump board",
              "value": "add_stump_board"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ],
          "showIf": {
            "field": "observation",
            "equals": "modify"
          }
        },
        {
          "name": "modify_other_details",
          "label": "Other Modification Details",
          "type": "input",
          "placeholder": "Enter modification details",
          "showIf": {
            "field": "modify_options",
            "includes": "others"
          }
        },
        {
          "name": "customise_options",
          "label": "Customise",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Custom seating system",
              "value": "custom_seating_system"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ],
          "showIf": {
            "field": "observation",
            "equals": "customise"
          }
        },
        {
          "name": "customise_other_details",
          "label": "Other Customisation Details",
          "type": "input",
          "placeholder": "Enter customisation details",
          "showIf": {
            "field": "customise_options",
            "includes": "others"
          }
        },
        {
          "name": "objective_final_remarks",
          "label": "Remarks",
          "type": "input",
          "placeholder": "Enter additional remarks"
        }
      ]
    }
  ]
}

const ASSESSMENT = {
  "sections": [
    {
      "fields": [
        {
          "type": "input",
          "name": "clinical_impression",
          "label": "Clinical Impression"
        },
        {
          "name": "problem_diagnostic",
          "label": "Problem Diagnostic",
          "type": "multi-select-dropdown",
          "options": [
            {
              "label": "Broken / faulty brakes",
              "value": "faulty_brakes"
            },
            {
              "label": "Tires need replacement",
              "value": "tires_replacement"
            },
            {
              "label": "Jammed / worn-out bearings",
              "value": "worn_bearings"
            },
            {
              "label": "Defective / broken motor",
              "value": "broken_motor"
            },
            {
              "label": "Dead / weak battery",
              "value": "weak_battery"
            },
            {
              "label": "Faulty controller",
              "value": "faulty_controller"
            },
            {
              "label": "Unstable frame",
              "value": "unstable_frame"
            },
            {
              "label": "Maintenance required",
              "value": "maintenance_required"
            },
            {
              "label": "Incorrect alignment",
              "value": "incorrect_alignment"
            },
            {
              "label": "Loose components",
              "value": "loose_components"
            },
            {
              "label": "Brake system failure",
              "value": "brake_system_failure"
            },
            {
              "label": "Wheel misalignment",
              "value": "wheel_misalignment"
            },
            {
              "label": "Wheel assembly damage",
              "value": "wheel_assembly_damage"
            },
            {
              "label": "Axle damage / bent axle",
              "value": "axle_damage"
            },
            {
              "label": "Caster wheel failure",
              "value": "caster_failure"
            },
            {
              "label": "Wiring fault / short circuit",
              "value": "wiring_fault"
            },
            {
              "label": "Charging system failure",
              "value": "charging_failure"
            },
            {
              "label": "Power supply interruption",
              "value": "power_supply_issue"
            },
            {
              "label": "Intermittent motor failure",
              "value": "motor_failure"
            },
            {
              "label": "Joystick malfunction",
              "value": "joystick_malfunction"
            },
            {
              "label": "Frame crack / fracture",
              "value": "frame_crack"
            },
            {
              "label": "Weld failure",
              "value": "weld_failure"
            },
            {
              "label": "Armrest mechanism failure",
              "value": "armrest_failure"
            },
            {
              "label": "Footrest mechanism failure",
              "value": "footrest_failure"
            }
          ]
        },
        {
          "name": "performance_condition",
          "label": "Performance / Condition",
          "type": "single-select",
          "options": [
            {
              "label": "Excessive wear and tear",
              "value": "wear_and_tear"
            },
            {
              "label": "Reduced mobility performance",
              "value": "reduced_mobility"
            },
            {
              "label": "Safety risk identified",
              "value": "safety_risk"
            },
            {
              "label": "Requires urgent repair / replacement",
              "value": "urgent_repair"
            }
          ]
        },
        {
          "name": "safety_risk",
          "label": "Safety Risk",
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
          "name": "recommended_action",
          "label": "Recommended Action",
          "type": "radio",
          "options": [
            {
              "label": "Replace",
              "value": "replace"
            },
            {
              "label": "Service",
              "value": "service"
            },
            {
              "label": "Reject use",
              "value": "reject_use"
            }
          ]
        }
      ]
    }
  ]
}

const PLAN = {
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Short Term Goals (2–4 Weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "short_term_goals"
        },
        {
          "type": "subheading",
          "label": "Long Term Goals (6–12 Weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "long_term_goals"
        },
        {
          "type": "input",
          "label": "Plan",
          "name": "plan"
        },
        {
          "name": "type_of_service",
          "label": "Type of Service",
          "type": "radio",
          "options": [
            {
              "label": "Repair",
              "value": "repair"
            },
            {
              "label": "Modify",
              "value": "modify"
            },
            {
              "label": "Custom",
              "value": "custom"
            }
          ]
        },
        {
          "name": "repair_type",
          "label": "Repair Type",
          "type": "radio",
          "options": [
            {
              "label": "Minor",
              "value": "minor"
            },
            {
              "label": "Major",
              "value": "major"
            }
          ],
          "showIf": {
            "field": "type_of_service",
            "equals": "repair"
          }
        },
        {
          "name": "minor_repair_services",
          "label": "Minor Repair",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Inspection / check-up",
              "value": "inspection"
            },
            {
              "label": "Tighten screws",
              "value": "tighten_screws"
            },
            {
              "label": "Lubrication (grease moving parts)",
              "value": "lubrication"
            },
            {
              "label": "Adjust alignment",
              "value": "adjust_alignment"
            }
          ],
          "showIf": {
            "field": "repair_type",
            "equals": "minor"
          }
        },
        {
          "name": "minor_repair_remarks",
          "label": "Minor Repair Remarks",
          "type": "input",
          "placeholder": "Enter remarks",
          "showIf": {
            "field": "repair_type",
            "equals": "minor"
          }
        },
        {
          "name": "major_repair_services",
          "label": "Major Repair",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Repair motor",
              "value": "repair_motor"
            },
            {
              "label": "Replace battery",
              "value": "replace_battery"
            },
            {
              "label": "Replace controller",
              "value": "replace_controller"
            },
            {
              "label": "Full wheelchair service",
              "value": "full_service"
            },
            {
              "label": "Weld repair (frame / joint welding)",
              "value": "weld_repair"
            },
            {
              "label": "Cable replacement (brake / electrical)",
              "value": "cable_replacement"
            },
            {
              "label": "Replace tires",
              "value": "replace_tires"
            },
            {
              "label": "Replace brakes",
              "value": "replace_brakes"
            },
            {
              "label": "Replace bearings",
              "value": "replace_bearings"
            },
            {
              "label": "Charger replacement / repair",
              "value": "charger_repair"
            },
            {
              "label": "Calibration (joystick / controller setting)",
              "value": "calibration"
            }
          ],
          "showIf": {
            "field": "repair_type",
            "equals": "major"
          }
        },
        {
          "name": "modify_services",
          "label": "Modify",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Add stump board",
              "value": "add_stump_board"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ],
          "showIf": {
            "field": "type_of_service",
            "equals": "modify"
          }
        },
        {
          "name": "modify_other_service",
          "label": "Other Modification",
          "type": "input",
          "placeholder": "Enter modification details",
          "showIf": {
            "field": "modify_services",
            "includes": "others"
          }
        },
        {
          "name": "custom_services",
          "label": "Customise",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Custom seating system",
              "value": "custom_seating_system"
            },
            {
              "label": "Others",
              "value": "others"
            }
          ],
          "showIf": {
            "field": "type_of_service",
            "equals": "custom"
          }
        },
        {
          "name": "custom_other_service",
          "label": "Other Customisation",
          "type": "input",
          "placeholder": "Enter customisation details",
          "showIf": {
            "field": "custom_services",
            "includes": "others"
          }
        },
        {
          "name": "service_datetime",
          "label": "Date and Time",
          "type": "date"
        },
        {
          "name": "completion_date",
          "label": "Completion Date",
          "type": "date"
        },
        {
          "name": "estimated_time",
          "label": "Estimated Time",
          "type": "radio",
          "options": [
            {
              "label": "Hour",
              "value": "hour"
            },
            {
              "label": "Day",
              "value": "day"
            }
          ]
        },
        {
          "name": "wheelchair_items",
          "label": "Item",
          "type": "single-select",
          "options": []
        },
        {
          "name": "item_quantity",
          "label": "Quantity",
          "type": "input",
          "min": 1
        },
        {
          "name": "unit_type",
          "label": "Unit Type",
          "type": "radio",
          "options": [
            {
              "label": "PCS",
              "value": "pcs"
            },
            {
              "label": "Set",
              "value": "set"
            },
            {
              "label": "Pair",
              "value": "pair"
            }
          ]
        },
        {
          "name": "add_inventory_item",
          "label": "Add Item",
          "type": "button",
          "buttonText": "Add Item & Quantity"
        },
        {
          "name": "inventory_remark",
          "label": "Remark",
          "type": "input",
          "placeholder": "Enter inventory remarks"
        },
        {
          "name": "charging_inventory_update",
          "label": "Charging & Auto Inventory Update",
          "type": "button",
          "buttonText": "Update Inventory"
        },
        {
          "name": "job_status",
          "label": "Status Job",
          "type": "radio",
          "options": [
            {
              "label": "Pending",
              "value": "pending"
            },
            {
              "label": "In Progress",
              "value": "in_progress"
            },
            {
              "label": "Completed",
              "value": "completed"
            },
            {
              "label": "On Hold",
              "value": "on_hold"
            }
          ]
        },
        {
          "type": "input",
          "label": "Referral",
          "name": "referral"
        },
        {
          "name": "referral_department",
          "label": "Department",
          "type": "single-select",
          "options": []
        },
        {
          "name": "assistive_device_prescribed",
          "label": "Assistive Device Prescribed",
          "type": "radio",
          "options": [
            {
              "label": "Wheelchair",
              "value": "wheelchair"
            },
            {
              "label": "Other",
              "value": "other"
            }
          ]
        },
        {
          "name": "assistive_device_other",
          "label": "Other Assistive Device",
          "type": "input",
          "placeholder": "Enter assistive device",
          "showIf": {
            "field": "assistive_device_prescribed",
            "equals": "other"
          }
        },
        {
          "name": "referral_remark",
          "label": "Remark",
          "type": "input",
          "placeholder": "Enter referral remarks"
        }
      ]
    }
  ]
}
export default {
  PLAN,
  OBJECTIVE,
  SUBJECTIVE,
  ASSESSMENT,
};
