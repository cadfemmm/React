const SUBJECTIVE = {
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Chief Complaint Mouse Over"
        },
        {
          "name": "chief_complaint",
          "type": "checkbox-group",
          "tooltip": "What is the primary functional goal the patient wants to achieve?",
          "options": [
            {
              "label": "Pain Reduction / Support",
              "value": "pain_reduction_support"
            },
            {
              "label": "Joint Immobilization (Splinting)",
              "value": "joint_immobilization"
            },
            {
              "label": "Mobility Assistance",
              "value": "mobility_assistance"
            },
            {
              "label": "Grip / Fine Motor Assistance",
              "value": "grip_fine_motor_assistance"
            },
            {
              "label": "Cosmetic / Anatomical Restoration",
              "value": "cosmetic_restoration"
            },
            {
              "label": "Protection of Sensitive Area",
              "value": "protection_sensitive_area"
            },
            {
              "label": "Other",
              "value": "other"
            }
          ]
        },
        {
          "name": "chief_complaint_other",
          "label": "Other Chief Complaint",
          "type": "input",
          "showIf": {
            "field": "chief_complaint",
            "includes": "other"
          }
        },
        {
          "name": "hpi",
          "label": "History of Present Illness",
          "type": "input"
        },
        {
          "type": "subheading",
          "label": "Current Challenges & Symptoms Mouse Over"
        },
        {
          "name": "current_challenges_symptoms",
          "type": "checkbox-group",
          "tooltip": "What are the patient's main complaints regarding the affected area?",
          "options": [
            {
              "label": "Constant Pain",
              "value": "constant_pain"
            },
            {
              "label": "Pain only during activity",
              "value": "pain_activity"
            },
            {
              "label": "Muscle Weakness / Fatigue",
              "value": "muscle_weakness"
            },
            {
              "label": "Limited Range of Motion (Stiffness)",
              "value": "limited_rom"
            },
            {
              "label": "Numbness / Tingling",
              "value": "numbness_tingling"
            },
            {
              "label": "Sensitivity to Pressure/Touch",
              "value": "sensitivity_pressure"
            },
            {
              "label": "Swelling (Edema)",
              "value": "swelling_edema"
            },
            {
              "label": "Other",
              "value": "other"
            }
          ]
        },
        {
          "name": "current_challenges_other",
          "label": "Other Symptoms",
          "type": "input",
          "showIf": {
            "field": "current_challenges_symptoms",
            "includes": "other"
          }
        },
        {
          "type": "subheading",
          "label": "Occupational Environment Mouse Over"
        },
        {
          "name": "occupational_environment",
          "type": "checkbox-group",
          "tooltip": "What is the primary environment where the device will be used?",
          "options": [
            {
              "label": "Office / Indoor",
              "value": "office_indoor"
            },
            {
              "label": "Daily use / Indoor",
              "value": "daily_indoor"
            },
            {
              "label": "Industrial / Workshop",
              "value": "industrial_workshop"
            },
            {
              "label": "Outdoor / Construction",
              "value": "outdoor_construction"
            },
            {
              "label": "Kitchen / Food Prep",
              "value": "kitchen_food_prep"
            },
            {
              "label": "Heavy Manual Labor",
              "value": "heavy_manual_labor"
            },
            {
              "label": "Other",
              "value": "other"
            }
          ]
        },
        {
          "name": "occupational_environment_other",
          "label": "Other Environment",
          "type": "input",
          "showIf": {
            "field": "occupational_environment",
            "includes": "other"
          }
        },
        {
          "type": "subheading",
          "label": "Experience with Previous Devices Mouse Over"
        },
        {
          "name": "previous_device_experience",
          "type": "checkbox-group",
          "tooltip": "If the patient has used a similar device before, what were the issues?",
          "options": [
            {
              "label": "N/A (First-time user)",
              "value": "na_first_time_user"
            },
            {
              "label": "Poor Fit",
              "value": "poor_fit"
            },
            {
              "label": "Heavy / Bulky",
              "value": "heavy_bulky"
            },
            {
              "label": "Caused Skin Irritation / Chafing",
              "value": "skin_irritation"
            },
            {
              "label": "Not Durable",
              "value": "not_durable"
            },
            {
              "label": "Difficult to put on/take off",
              "value": "difficult_donning"
            },
            {
              "label": "Poor Aesthetics",
              "value": "poor_aesthetics"
            },
            {
              "label": "Other",
              "value": "other"
            }
          ]
        },
        {
          "name": "previous_device_experience_other",
          "label": "Other Device Issues",
          "type": "input",
          "showIf": {
            "field": "previous_device_experience",
            "includes": "other"
          }
        },
        {
          "type": "subheading",
          "label": "Patient Preferences"
        },
        {
          "name": "patient_preferences",
          "type": "checkbox-group",
          "tooltip": "Does the patient have specific preferences for the 3D-printed design?",
          "options": [
            {
              "label": "Weight (Prioritize lightness)",
              "value": "lightweight"
            },
            {
              "label": "Breathability",
              "value": "breathability"
            },
            {
              "label": "Texture (Smooth vs Grip-enhanced)",
              "value": "texture"
            },
            {
              "label": "Low Profile",
              "value": "low_profile"
            },
            {
              "label": "Color Preference",
              "value": "color_preference"
            },
            {
              "label": "Material Allergies",
              "value": "material_allergies"
            }
          ]
        },
        {
          "name": "preferred_color",
          "label": "Preferred Color",
          "type": "input",
          "showIf": {
            "field": "patient_preferences",
            "includes": "color_preference"
          }
        },
        {
          "name": "material_allergies",
          "label": "Material Allergies",
          "type": "input",
          "placeholder": "e.g., Latex, specific plastics",
          "showIf": {
            "field": "patient_preferences",
            "includes": "material_allergies"
          }
        },
        {
          "name": "pain_score",
          "label": "Pain Scale",
          "type": "scale-slider",
          "min": 0,
          "max": 10,
          "ranges": [
            {
              "min": 0,
              "max": 3,
              "label": "Mild",
              "color": "#22c55e"
            },
            {
              "min": 4,
              "max": 7,
              "label": "Moderate",
              "color": "#facc15"
            },
            {
              "min": 8,
              "max": 10,
              "label": "Severe",
              "color": "#ef4444"
            }
          ],
          "showValue": true
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
          "type": "subheading",
          "label": "Visual Documentation (Photos) Make Over"
        },
        {
          "name": "visual_documentation_photos",
          "label": "Upload Picture",
          "type": "attach-file",
          "accept": "image/*",
          "multiple": true
        },
        {
          "type": "subheading",
          "label": "Physical Measurements Mouse Over"
        },
        {
          "type": "subheading",
          "label": "Linear Measurements (mm)"
        },
        {
          "name": "linear_length",
          "label": "Length (mm)",
          "type": "input"
        },
        {
          "name": "linear_width",
          "label": "Width (mm)",
          "type": "input"
        },
        {
          "name": "linear_depth_thickness",
          "label": "Depth / Thickness (mm)",
          "type": "input"
        },
        {
          "type": "subheading",
          "label": "Circumference Proximal (mm)"
        },
        {
          "name": "circumference_proximal",
          "label": "Proximal / Top (mm)",
          "type": "input"
        },
        {
          "name": "circumference_distal",
          "label": "Distal / Bottom (mm)",
          "type": "input"
        },
        {
          "name": "circumference_joint_midpoint",
          "label": "Joint / Mid-point (mm)",
          "type": "input"
        },
        {
          "name": "joint_flexion",
          "label": "Flexion (°)",
          "type": "input"
        },
        {
          "name": "joint_extension",
          "label": "Extension (°)",
          "type": "input"
        },
        {
          "type": "subheading",
          "label": "3D Scan File (STL)"
        },
        {
          "name": "stl_scan_file",
          "label": "Upload STL File",
          "type": "attach-file",
          "accept": ".stl"
        },
        {
          "name": "objective_remarks",
          "label": "Remarks",
          "type": "input",
          "rows": 4,
          "placeholder": "Enter remarks"
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
          "name": "assessment_notes",
          "label": "Clinical Impression / Notes",
          "type": "input",
          "placeholder": "Therapist assessment..."
        },
        {
          "type": "subheading",
          "label": "Clinical & Engineering Impression Mouse Over"
        },
        {
          "name": "clinical_engineering_impression",
          "label": "Clinical & Engineering Impression",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Structural Instability (Needs rigid support)",
              "value": "structural_instability"
            },
            {
              "label": "Functional Deficit (Needs tool-holding capability)",
              "value": "functional_deficit"
            },
            {
              "label": "Pressure Management (Needs relief zones for scars/bony parts)",
              "value": "pressure_management"
            },
            {
              "label": "Joint Correction (Needs specific alignment)",
              "value": "joint_correction"
            },
            {
              "label": "Replacement (Missing limb/part)",
              "value": "replacement"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Design Strategy Mouse Over"
        },
        {
          "name": "design_form",
          "label": "Form",
          "type": "radio",
          "options": [
            {
              "label": "Minimalist / Skeletal",
              "value": "minimalist_skeletal"
            },
            {
              "label": "Full Coverage",
              "value": "full_coverage"
            },
            {
              "label": "Modular (Replaceable parts)",
              "value": "modular"
            }
          ]
        },
        {
          "name": "design_mechanics",
          "label": "Mechanics",
          "type": "radio",
          "options": [
            {
              "label": "Static (No movement)",
              "value": "static"
            },
            {
              "label": "Dynamic (Flexible/Hinged)",
              "value": "dynamic"
            }
          ]
        },
        {
          "name": "wall_thickness",
          "label": "Wall Thickness",
          "type": "radio",
          "options": [
            {
              "label": "Ultra-light (1-2mm)",
              "value": "ultra_light"
            },
            {
              "label": "Standard (3-4mm)",
              "value": "standard"
            },
            {
              "label": "Heavy Duty (5mm+)",
              "value": "heavy_duty"
            }
          ]
        },
        {
          "name": "ventilation_strategy",
          "label": "Ventilation",
          "type": "radio",
          "options": [
            {
              "label": "Solid (Max strength)",
              "value": "solid"
            },
            {
              "label": "Perforated / Mesh (Breathability)",
              "value": "perforated_mesh"
            },
            {
              "label": "Lattice structure",
              "value": "lattice_structure"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Material Selection Mouse Over"
        },
        {
          "name": "pla_reason",
          "label": "PLA / PLA+",
          "type": "radio",
          "options": [
            {
              "label": "Rapid prototyping",
              "value": "rapid_prototyping"
            },
            {
              "label": "Low-load use",
              "value": "low_load_use"
            }
          ]
        },
        {
          "name": "petg_reason",
          "label": "PETG",
          "type": "radio",
          "options": [
            {
              "label": "Chemical resistance",
              "value": "chemical_resistance"
            },
            {
              "label": "Balance of strength and flex",
              "value": "strength_and_flex"
            }
          ]
        },
        {
          "name": "tpu_reason",
          "label": "TPU (Flexible)",
          "type": "radio",
          "options": [
            {
              "label": "Skin comfort",
              "value": "skin_comfort"
            },
            {
              "label": "Shock absorption",
              "value": "shock_absorption"
            },
            {
              "label": "Hinges",
              "value": "hinges"
            }
          ]
        },
        {
          "name": "nylon_reason",
          "label": "Nylon (PA)",
          "type": "radio",
          "options": [
            {
              "label": "High durability",
              "value": "high_durability"
            },
            {
              "label": "Low friction for moving parts",
              "value": "low_friction"
            }
          ]
        },
        {
          "name": "carbon_fiber_reason",
          "label": "Carbon Fiber Reinforced (PA-CF / PET-CF)",
          "type": "radio",
          "options": [
            {
              "label": "Maximum stiffness for industrial work",
              "value": "maximum_stiffness"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Risk Assessment Mouse Over"
        },
        {
          "name": "risk_assessment",
          "label": "Risk Assessment",
          "type": "checkbox-group",
          "options": [
            {
              "label": "High Breakage Risk: Due to high-impact work environment",
              "value": "high_breakage_risk"
            },
            {
              "label": "Skin Breakdown: Potential friction at the edges",
              "value": "skin_breakdown"
            },
            {
              "label": "Fit Issues: High volume fluctuation (swelling) in patient's limb",
              "value": "fit_issues"
            },
            {
              "label": "Complexity: Patient may struggle with cleaning or assembly",
              "value": "complexity"
            }
          ]
        },
        {
          "type": "input",
          "label": "Design Summary",
          "name": "design_summary"
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
          "label": "Short-Term Goals (2–4 weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "short_term_goals"
        },
        {
          "type": "subheading",
          "label": "Long-Term Goals (6–12 weeks)"
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
          "type": "subheading",
          "label": "Design & Modeling (CAD) Mouse Over"
        },
        {
          "name": "design_modeling_cad",
          "label": "Design & Modeling",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Sculpting / Smoothing (Clean scan data)",
              "value": "sculpting_smoothing"
            },
            {
              "label": "Solid / Surface Design (Create mechanical model)",
              "value": "solid_surface_design"
            },
            {
              "label": "Feature Addition (Add straps, mounts, or tool holders)",
              "value": "feature_addition"
            },
            {
              "label": "Ventilation / Perforation (Add air holes for comfort)",
              "value": "ventilation_perforation"
            },
            {
              "label": "Multi-part Assembly (Design joints or hinges)",
              "value": "multi_part_assembly"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Manufacturing Specs (3D Printing) Mouse Over"
        },
        {
          "name": "manufacturing_material",
          "label": "Material",
          "type": "radio",
          "options": [
            {
              "label": "PLA (Prototype)",
              "value": "pla_prototype"
            },
            {
              "label": "PETG (Standard)",
              "value": "petg_standard"
            },
            {
              "label": "TPU (Flexible)",
              "value": "tpu_flexible"
            },
            {
              "label": "PA-CF (Heavy Duty)",
              "value": "pa_cf_heavy_duty"
            },
            {
              "label": "Resin (High Detail)",
              "value": "resin_high_detail"
            }
          ]
        },
        {
          "name": "infill_pattern",
          "label": "Infill Pattern",
          "type": "radio",
          "options": [
            {
              "label": "Gyroid",
              "value": "gyroid"
            },
            {
              "label": "Honeycomb",
              "value": "honeycomb"
            },
            {
              "label": "Solid (100%)",
              "value": "solid_100"
            }
          ]
        },
        {
          "name": "infill_density",
          "label": "Infill Density",
          "type": "radio",
          "options": [
            {
              "label": "Low (<20%)",
              "value": "low"
            },
            {
              "label": "Med (20-50%)",
              "value": "medium"
            },
            {
              "label": "High (>50%)",
              "value": "high"
            }
          ]
        },
        {
          "name": "special_instructions",
          "label": "Special Instructions",
          "type": "radio",
          "options": [
            {
              "label": "Support structures needed",
              "value": "support_structures_needed"
            },
            {
              "label": "Multi-material print",
              "value": "multi_material_print"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Post-Processing & Assembly Mouse Over"
        },
        {
          "name": "post_processing_assembly",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Support removal & Sanding",
              "value": "support_removal_sanding"
            },
            {
              "label": "Annealing (Heat treatment for strength)",
              "value": "annealing"
            },
            {
              "label": "Padding / Lining (Add EVA foam or silicone)",
              "value": "padding_lining"
            },
            {
              "label": "Hardware Assembly (Bolts, Velcro straps, buckles)",
              "value": "hardware_assembly"
            },
            {
              "label": "Coating (Chemical resistance / Waterproofing)",
              "value": "coating"
            }
          ]
        },
        {
          "type": "subheading",
          "label": "Inventory Details"
        },
        {
          "name": "inventory_item",
          "label": "Item",
          "type": "single-select",
          "options": [
            {
              "label": "3D Printed Nail Clipper",
              "value": "3d_printed_nail_clipper"
            },
            {
              "label": "3D Printed Hand Brace",
              "value": "3d_printed_hand_brace"
            },
            {
              "label": "3D Printed Knee Brace",
              "value": "3d_printed_knee_brace"
            },
            {
              "label": "3D Printed AFO",
              "value": "3d_printed_afo"
            },
            {
              "label": "3D Printed Prosthetic Socket",
              "value": "3d_printed_prosthetic_socket"
            },
            {
              "label": "3D Printed Assistive Device",
              "value": "3d_printed_assistive_device"
            }
          ]
        },
        {
          "name": "inventory_quantity",
          "label": "Quantity",
          "type": "input"
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
