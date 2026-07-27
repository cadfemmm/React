import React, { useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import PatientCard from "../../../shared/cards/PatientCard";
const WORKSHOP_OPTIONS = [
  { label: "Hairstyling", value: "hairstyling" },
  { label: "Culinary", value: "culinary" },
  { label: "Entrepreneurship", value: "entrepreneurship" },
  { label: "Barista", value: "barista" },
  { label: "Pastry and Bakery", value: "pastry_bakery" },
  { label: "Floristry", value: "floristry" },
  { label: "Design", value: "design" },
  { label: "Creative Multimedia", value: "creative_multimedia" },
  { label: "Electronic", value: "electronic" },
  { label: "Electric", value: "electric" },
  { label: "Office Administration", value: "office_administration" },
  { label: "Sewing", value: "sewing" },
  { label: "Carpentry", value: "carpentry" },
  { label: "Automotive", value: "automotive" },
  { label: "EV", value: "ev" },
  { label: "Domestic Electrical", value: "domestic_electrical" },
  { label: "Graphic & Virtual Art", value: "graphic_virtual_art" },
  { label: "Art & Crafts", value: "arts_and_craft" },
  { label: "SPA & Cosmeticology", value: "spa_cosmeticology" },
  { label: "Call Center", value: "call_center" },
  {label:'SIP',value:'sip'},
  {label:'Job Placement',value:'job_placement'}

  
];
const WORKSHOP_MODULES = {
  hairstyling: [
    // Men Hairstylist Course
    {
      module: "Men Hairstylist Course",
      topic: "Hairstylist Basic Learning",
      credit_hours: 2,
    },
    {
      module: "Men Hairstylist Course",
      topic: "Hair Care",
      credit_hours: 4,
    },
    {
      module: "Men Hairstylist Course",
      topic: "Hair Styling",
      credit_hours: 4,
    },
    {
      module: "Men Hairstylist Course",
      topic: "Man Haircut",
      credit_hours: 30,
    },

    // Women Hairstylist Course
    {
      module: "Women Hairstylist Course",
      topic: "Hairstylist Basic Learning",
      credit_hours: 2,
    },
    {
      module: "Women Hairstylist Course",
      topic: "Hair Care",
      credit_hours: 4,
    },
    {
      module: "Women Hairstylist Course",
      topic: "Hair Styling",
      credit_hours: 4,
    },
    {
      module: "Women Hairstylist Course",
      topic: "Woman Haircut",
      credit_hours: 30,
    },

    // Advance Hairstylist Course
    {
      module: "Advance Hairstylist Course",
      topic: "Hair Colouring and Highlight",
      credit_hours: 10,
    },
    {
      module: "Advance Hairstylist Course",
      topic: "Hair Perming",
      credit_hours: 10,
    },
    {
      module: "Advance Hairstylist Course",
      topic: "Hair Straightening",
      credit_hours: 10,
    },
    {
      module: "Advance Hairstylist Course",
      topic: "Hair Keratin Treatment",
      credit_hours: 10,
    },

    // Manicure Course
    {
      module: "Manicure Course",
      topic: "Nail Care",
      credit_hours: 4,
    },
    {
      module: "Manicure Course",
      topic: "Skin Care",
      credit_hours: 4,
    },
    {
      module: "Manicure Course",
      topic: "Hands Hygiene",
      credit_hours: 4,
    },
    {
      module: "Manicure Course",
      topic: "Nails Color",
      credit_hours: 8,
    },

    // Pedicure Course
    {
      module: "Pedicure Course",
      topic: "Nail Care",
      credit_hours: 4,
    },
    {
      module: "Pedicure Course",
      topic: "Skin Care",
      credit_hours: 4,
    },
    {
      module: "Pedicure Course",
      topic: "Foot Hygiene",
      credit_hours: 4,
    },
    {
      module: "Pedicure Course",
      topic: "Nails Color",
      credit_hours: 8,
    },

    // Facials
    {
      module: "Facials",
      topic: "Face Massage",
      credit_hours: 4,
    },
    {
      module: "Facials",
      topic: "Skincare Treatment",
      credit_hours: 4,
    },

    // Waxing
    {
      module: "Waxing",
      topic: "Hair Removal Service",
      credit_hours: 4,
    },

    // Make Up
    {
      module: "Make Up",
      topic: "Asas Solekan",
      credit_hours: 8,
    },
    {
      module: "Make Up",
      topic: "Camouflage Shading",
      credit_hours: 4,
    },
    {
      module: "Make Up",
      topic: "Eyeshadow and Eyebrow",
      credit_hours: 8,
    },

    // Basic Haircutting
    {
      module: "Basic Haircutting",
      topic: "Cut One Length",
      credit_hours: 2,
    },
    {
      module: "Basic Haircutting",
      topic: "Cut Graduation",
      credit_hours: 4,
    },
    {
      module: "Basic Haircutting",
      topic: "Cut Square Layer",
      credit_hours: 4,
    },
    {
      module: "Basic Haircutting",
      topic: "Cut Uniform Layer",
      credit_hours: 30,
    },
    {
      module: "Basic Haircutting",
      topic: "Perform Clipper Work",
      credit_hours: 0,
    },

    // Execute Basic Haircut
    {
      module: "Execute Basic Haircut",
      topic: "Provide Basic Haircut Consultation",
      credit_hours: 4,
    },
    {
      module: "Execute Basic Haircut",
      topic: "Carry Out One Length Haircut",
      credit_hours: 10,
    },
    {
      module: "Execute Basic Haircut",
      topic: "Carry Out Graduation Haircut",
      credit_hours: 12,
    },
    {
      module: "Execute Basic Haircut",
      topic: "Carry Out Foundation Layer Haircut",
      credit_hours: 14,
    },

    // Execute Hair Straightening and Colouring
    {
      module: "Execute Hair Straightening and Colouring",
      topic: "Hair Colouring and Highlight",
      credit_hours: 4,
    },
    {
      module: "Execute Hair Straightening and Colouring",
      topic: "Hair Perming",
      credit_hours: 14,
    },
    {
      module: "Execute Hair Straightening and Colouring",
      topic: "Hair Straightening",
      credit_hours: 10,
    },
    {
      module: "Execute Hair Straightening and Colouring",
      topic: "Hair Keratin Treatment",
      credit_hours: 12,
    },
  ],
  culinary: [
  {
    module: "Practise kitchen hygiene and safety procedure",
    topic: "Carry out kitchen personal hygiene, apply kitchen workstation safety and kitchen food safety procedures.",
    credit_hours: 42,
  },
  {
    module: "Perform vegetable and potato cuts",
    topic: "Determine, prepare and perform vegetable and potato cuts.",
    credit_hours: 42,
  },
  {
    module: "Perform cooking methods",
    topic: "Practise moist-heat and dry-heat cooking methods.",
    credit_hours: 31,
  },
  {
    module: "Produce stocks",
    topic: "Determine, prepare and store white, brown, fish and vegetable stocks.",
    credit_hours: 52,
  },
  {
    module: "Produce thickening agents",
    topic: "Determine and prepare roux and other thickening agents.",
    credit_hours: 31,
  },
  {
    module: "Produce mother sauces",
    topic: "Prepare Espagnole, Bechamel, Velouté, Tomato and Hollandaise sauces.",
    credit_hours: 104,
  },
  {
    module: "Produce soups (basic)",
    topic: "Prepare and present clear and thick soups.",
    credit_hours: 52,
  },
  {
    module: "Produce vegetable dishes",
    topic: "Prepare and present vegetable dishes using different cooking methods.",
    credit_hours: 104,
  },
  {
    module: "Produce salads",
    topic: "Prepare and present appetizer, accompaniment, main course and dessert salads.",
    credit_hours: 104,
  },
  {
    module: "Produce appetizers",
    topic: "Prepare and present hot and cold appetizers.",
    credit_hours: 104,
  },
  {
    module: "Produce sandwiches",
    topic: "Prepare and present hot and cold sandwiches.",
    credit_hours: 104,
  },
  {
    module: "Produce breakfast dishes",
    topic: "Prepare and present Continental, American and Malaysian breakfast dishes.",
    credit_hours: 135,
  },
  {
    module: "Produce coupe desserts",
    topic: "Prepare and present coupe desserts.",
    credit_hours: 135,
  },
],
   entrepreneurship: [
    {
      module: "Entrepreneurship Module",
      topic: "Fundamentals of Entrepreneurship",
      credit_hours: 10,
    },
    {
      module: "Entrepreneurship Module",
      topic: "Human Resource Management",
      credit_hours: 6,
    },
    {
      module: "Entrepreneurship Module",
      topic: "Financial Management",
      credit_hours: 10,
    },
    {
      module: "Entrepreneurship Module",
      topic: "Customer & Marketing Management",
      credit_hours: 10,
    },
    {
      module: "Entrepreneurship Module",
      topic: "Operations Management",
      credit_hours: 4,
    },
  ],
  barista: [
  {
    module: "COFFEE BAR CUSTOMER SERVICES",
    topic: "Prepare coffee bar customer service requirements",
    credit_hours: 2,
  },
  {
    module: "COFFEE BAR CUSTOMER SERVICES",
    topic: "Take customer's order",
    credit_hours: 1,
  },
  {
    module: "COFFEE BAR CUSTOMER SERVICES",
    topic: "Respond to customer's enquiry and complaints",
    credit_hours: 1,
  },
  {
    module: "COFFEE BAR CUSTOMER SERVICES",
    topic: "Carry out café sales activity",
    credit_hours: 5,
  },

  {
    module: "CAFÉ OUTLET OCCUPATIONAL SAFETY, FOOD SAFETY AND HYGIENE OPERATION",
    topic: "Prepare café food safety and hygiene requirements",
    credit_hours: 2,
  },
  {
    module: "CAFÉ OUTLET OCCUPATIONAL SAFETY, FOOD SAFETY AND HYGIENE OPERATION",
    topic: "Carry out coffee bar equipment cleaning",
    credit_hours: 2,
  },
  {
    module: "CAFÉ OUTLET OCCUPATIONAL SAFETY, FOOD SAFETY AND HYGIENE OPERATION",
    topic: "Perform café housekeeping",
    credit_hours: 1,
  },
  {
    module: "CAFÉ OUTLET OCCUPATIONAL SAFETY, FOOD SAFETY AND HYGIENE OPERATION",
    topic: "Dispose café wastes",
    credit_hours: 1,
  },
  {
    module: "CAFÉ OUTLET OCCUPATIONAL SAFETY, FOOD SAFETY AND HYGIENE OPERATION",
    topic: "Execute café occupational safety procedures and protocols",
    credit_hours: 1,
  },

  {
    module: "COFFEE BAR WORKSTATION PREPARATION",
    topic: "Execute coffee bar workstation cleaning",
    credit_hours: 1,
  },
  {
    module: "COFFEE BAR WORKSTATION PREPARATION",
    topic: "Carry out mise en place",
    credit_hours: 1,
  },
  {
    module: "COFFEE BAR WORKSTATION PREPARATION",
    topic: "Inspect coffee bar equipment condition",
    credit_hours: 2,
  },
  {
    module: "COFFEE BAR WORKSTATION PREPARATION",
    topic: "Organise coffee bar daily items",
    credit_hours: 2,
  },

  {
    module: "COFFEE BREWING AND MILK PREPARATION",
    topic: "Carry out customer's beverage order interpretation",
    credit_hours: 5,
  },
  {
    module: "COFFEE BREWING AND MILK PREPARATION",
    topic: "Brew espresso",
    credit_hours: 20,
  },
  {
    module: "COFFEE BREWING AND MILK PREPARATION",
    topic: "Texture milk",
    credit_hours: 20,
  },
  {
    module: "COFFEE BREWING AND MILK PREPARATION",
    topic: "Serve beverage to customer",
    credit_hours: 20,
  },
  {
    module: "COFFEE BREWING AND MILK PREPARATION",
    topic: "Carry out workstation area cleaning",
    credit_hours: 3,
  },

  {
    module: "COFFEE BAR STOCK HANDLING",
    topic: "Carry out coffee bar stock check",
    credit_hours: 2,
  },
  {
    module: "COFFEE BAR STOCK HANDLING",
    topic: "Organise coffee bar stocks",
    credit_hours: 2,
  },
  {
    module: "COFFEE BAR STOCK HANDLING",
    topic: "Handle café incoming goods",
    credit_hours: 2,
  },
  {
    module: "COFFEE BAR STOCK HANDLING",
    topic: "Inspect coffee bar equipment inventory",
    credit_hours: 2,
  },
  {
    module: "COFFEE BAR STOCK HANDLING",
    topic: "Prepare coffee bar stock and inventory handling report",
    credit_hours: 2,
  },
],
pastry_bakery: [
  {
    module: "Cookies Preparation",
    topic: "ALMOND LONDON",
    credit_hours: 10,
  },
  {
    module: "Cookies Preparation",
    topic: "TART NENAS",
    credit_hours: 10,
  },
  {
    module: "Cookies Preparation",
    topic: "CHOCOLATE CHIPS COOKIES (SABLE)",
    credit_hours: 10,
  },
  {
    module: "Cookies Preparation",
    topic: "MAMA CARRIE",
    credit_hours: 10,
  },
  {
    module: "Cookies Preparation",
    topic: "BROWNIES",
    credit_hours: 10,
  },
  {
    module: "Cookies Preparation",
    topic: "DANISH COOKIES",
    credit_hours: 10,
  },

  {
    module: "Pudding preparation",
    topic: "Prepare variety of pudding",
    credit_hours: 6,
  },
  {
    module: "Malaysian desserts and traditional kuih",
    topic: "Prepare variety of local dessert and kuih",
    credit_hours: 6,
  },
  {
    module: "Cakes preparation",
    topic: "Prepare wide range of cake",
    credit_hours: 6,
  },
  {
    module: "Pastry product",
    topic: "Prepare wide range of baked goods made from scratch",
    credit_hours: 6,
  },
  {
    module: "Filling and cream preparation",
    topic: "Prepare various type of filling and cream for cake and bun",
    credit_hours: 6,
  },
  {
    module: "Doughnut preparation",
    topic: "Identify and prepare doughnut mise en place",
    credit_hours: 6,
  },
  {
    module: "Bun preparation",
    topic: "Identify and prepare bun mise en place",
    credit_hours: 6,
  },
  {
    module: "Pizza preparation",
    topic: "Carry out and identify pizza mise en place",
    credit_hours: 6,
  },
  {
    module: "Muffin preparation",
    topic: "Identify and prepare muffin mise en place",
    credit_hours: 6,
  },
  {
    module: "Cake decoration",
    topic: "Prepare and deco from scratch to final product",
    credit_hours: 6,
  },
  {
    module: "Bakery & pastry product and material handling",
    topic: "Prepare wide range of baked goods made from flour",
    credit_hours: 6,
  },
  {
    module: "Bakery & Pastry product sales & marketing",
    topic: "Arrange bakery product sales & marketing activities",
    credit_hours: 6,
  },
],
floristry: [
  {
    module: "Flower",
    topic: "Identify flower and accessories selection",
    credit_hours: 1.5,
  },
  {
    module: "Flower",
    topic: "Apply flower tools and accessories care",
    credit_hours: 1,
  },
  {
    module: "Flower",
    topic: "Produce flower and accessories design and arrangement",
    credit_hours: 8,
  },
  {
    module: "Flower",
    topic: "Produce signing and arrangement event",
    credit_hours: 8,
  },
  {
    module: "Flower",
    topic: "Florist costing and budgeting",
    credit_hours: 2,
  },

  {
    module: "Wedding Gift/Hantaran",
    topic: "Identify the meaning and cultural significance of hantaran",
    credit_hours: 1.5,
  },
  {
    module: "Wedding Gift/Hantaran",
    topic: "Recognize the tools, materials, and types of hantaran",
    credit_hours: 1,
  },
  {
    module: "Wedding Gift/Hantaran",
    topic: "Apply basic wrapping and arrangement techniques",
    credit_hours: 6,
  },
  {
    module: "Wedding Gift/Hantaran",
    topic: "Produce one complete and themed wedding gift arrangement",
    credit_hours: 10,
  },
  {
    module: "Wedding Gift/Hantaran",
    topic: "Wedding gift costing and budgeting",
    credit_hours: 2,
  },

  {
    module: "Surprise Gift Arrangement",
    topic: "Introduction to Surprise Gifts (Types, purpose, and creative ideas)",
    credit_hours: 1,
  },
  {
    module: "Surprise Gift Arrangement",
    topic: "Wrapping & Packaging (Techniques for boxes, jars, and baskets)",
    credit_hours: 8,
  },
  {
    module: "Surprise Gift Arrangement",
    topic: "Decoration Techniques (Flowers, ribbons, charms, themed accessories)",
    credit_hours: 4,
  },
  {
    module: "Surprise Gift Arrangement",
    topic: "Theme & Personalization (Selecting themes and personal touches)",
    credit_hours: 4,
  },

  {
    module: "Bouquet Arrangement",
    topic: "Introduction to Bouquets (Types of bouquets, flower selection, tools and materials)",
    credit_hours: 2,
  },
  {
    module: "Bouquet Arrangement",
    topic: "Basic Arrangement Techniques (Hand-tied, round, posy, and simple layering techniques)",
    credit_hours: 10,
  },
  {
    module: "Bouquet Arrangement",
    topic: "Color & Theme (Color combination, matching with event theme)",
    credit_hours: 4,
  },
  {
    module: "Bouquet Arrangement",
    topic: "Decoration & Accessories (Ribbon wrapping, adding beads, leaves, and other accents)",
    credit_hours: 2,
  },

  {
    module: "Door Gift Arrangement",
    topic: "Identify different types of door gifts",
    credit_hours: 1,
  },
  {
    module: "Door Gift Arrangement",
    topic: "Select materials and decorative elements suitable for door gifts",
    credit_hours: 2,
  },
  {
    module: "Door Gift Arrangement",
    topic: "Apply wrapping and arranging techniques to produce neat and themed gifts",
    credit_hours: 10,
  },

  {
    module: "Terrarium Making",
    topic: "Introduction & Materials Preparation",
    credit_hours: 2,
  },
  {
    module: "Terrarium Making",
    topic: "Planting & Layering Techniques",
    credit_hours: 4,
  },
  {
    module: "Terrarium Making",
    topic: "Decoration & Final Presentation",
    credit_hours: 2,
  },
],
design: [
  {
    module: "Basic Adobe Illustrator",
    topic: "Introduction to Adobe Illustrator",
    credit_hours: 6,
  },
  {
    module: "Basic Adobe Illustrator",
    topic: "Lab (Introduction)",
    credit_hours: 10,
  },
  {
    module: "Basic Adobe Illustrator",
    topic: "Artwork Project",
    credit_hours: 4,
  },

  {
    module: "Basic Adobe Photoshop CS6",
    topic: "Introduction to Adobe Photoshop",
    credit_hours: 6,
  },
  {
    module: "Basic Adobe Photoshop CS6",
    topic: "Lab (Introduction)",
    credit_hours: 10,
  },
  {
    module: "Basic Adobe Photoshop CS6",
    topic: "Artwork Project",
    credit_hours: 4,
  },

  {
    module: "Mug Press & Design",
    topic: "Introduction to Mug Press",
    credit_hours: 4,
  },
  {
    module: "Mug Press & Design",
    topic: "Introduction to Mug Design (Using Adobe Illustrator/MS Office Words)",
    credit_hours: 10,
  },
  {
    module: "Mug Press & Design",
    topic: "Mug Press - Lab",
    credit_hours: 4,
  },
  {
    module: "Mug Press & Design",
    topic: "Mug Design (Using Adobe Illustrator/MS Office Words) - Lab",
    credit_hours: 10,
  },
  {
    module: "Mug Press & Design",
    topic: "Mug Press Project",
    credit_hours: 4,
  },

  {
    module: "Shirt Press & Design (Sublimation)",
    topic: "Introduction to Shirt Press (Sublimation)",
    credit_hours: 4,
  },
  {
    module: "Shirt Press & Design (Sublimation)",
    topic: "Introduction to Shirt Design (Using Adobe Illustrator/MS Office Words)",
    credit_hours: 10,
  },
  {
    module: "Shirt Press & Design (Sublimation)",
    topic: "Shirt Press - Lab (Sublimation)",
    credit_hours: 4,
  },
  {
    module: "Shirt Press & Design (Sublimation)",
    topic: "Shirt Design (Using Adobe Illustrator/MS Office Words) - Lab",
    credit_hours: 10,
  },
  {
    module: "Shirt Press & Design (Sublimation)",
    topic: "Shirt Press Project (Sublimation)",
    credit_hours: 4,
  },

  {
    module: "Shirt Press & Design (Vinyl)",
    topic: "Introduction to Shirt Press (Vinyl)",
    credit_hours: 4,
  },
  {
    module: "Shirt Press & Design (Vinyl)",
    topic: "Introduction to Shirt Design (Using Adobe Illustrator)",
    credit_hours: 10,
  },
  {
    module: "Shirt Press & Design (Vinyl)",
    topic: "Shirt Press - Lab (Vinyl)",
    credit_hours: 4,
  },
  {
    module: "Shirt Press & Design (Vinyl)",
    topic: "Shirt Design (Using Adobe Illustrator) - Lab",
    credit_hours: 10,
  },
  {
    module: "Shirt Press & Design (Vinyl)",
    topic: "Shirt Press Project (Vinyl)",
    credit_hours: 4,
  },

  {
    module: "Shirt Press & Design (DTF)",
    topic: "Introduction to Shirt Press (DTF)",
    credit_hours: 4,
  },
  {
    module: "Shirt Press & Design (DTF)",
    topic: "Introduction to Shirt Design (Photoshop)",
    credit_hours: 10,
  },
  {
    module: "Shirt Press & Design (DTF)",
    topic: "Shirt Press - Lab (DTF)",
    credit_hours: 4,
  },
  {
    module: "Shirt Press & Design (DTF)",
    topic: "Shirt Design (Photoshop) - Lab",
    credit_hours: 10,
  },
  {
    module: "Shirt Press & Design (DTF)",
    topic: "Shirt Press Project (DTF)",
    credit_hours: 4,
  },

  {
    module: "Basic 3D CAD (3D Printing)",
    topic: "Introduction to 3D Printing",
    credit_hours: 4,
  },
  {
    module: "Basic 3D CAD (3D Printing)",
    topic: "Introduction to 2D & 3D Drawing (Using 3D CAD)",
    credit_hours: 10,
  },
  {
    module: "Basic 3D CAD (3D Printing)",
    topic: "Shape Printing (3D) - Lab (3D Printer)",
    credit_hours: 4,
  },
  {
    module: "Basic 3D CAD (3D Printing)",
    topic: "Shape Drawing (3D) – Lab",
    credit_hours: 10,
  },
  {
    module: "Basic 3D CAD (3D Printing)",
    topic: "3D Printing Project",
    credit_hours: 4,
  },
],
  creative_multimedia: [
  {
    module: "Establish Vodcast Production",
    topic: "Strategise vodcast pre-production activities.",
    credit_hours: 10,
  },
  {
    module: "Establish Vodcast Production",
    topic: "Conduct vodcast recording.",
    credit_hours: 20,
  },
  {
    module: "Establish Vodcast Production",
    topic: "Execute vodcast editing process.",
    credit_hours: 20,
  },
  {
    module: "Establish Vodcast Production",
    topic: "Oversee vodcast post-production activities.",
    credit_hours: 20,
  },
  {
    module: "Establish Vodcast Production",
    topic: "Perform vodcast publishing and distribution.",
    credit_hours: 20,
  },
],
electronic: [
  {
    module: "Handphone Repairing",
    topic: "Basic Tools for Handphone Repairing",
    credit_hours: 0.5,
  },
  {
    module: "Handphone Repairing",
    topic: "Safety Measure",
    credit_hours: 0.5,
  },
  {
    module: "Handphone Repairing",
    topic: "Basic Introduction to Electronic Components",
    credit_hours: 1,
  },
  {
    module: "Handphone Repairing",
    topic: "Basic Soldering Techniques (PCB Board)",
    credit_hours: 4,
  },
  {
    module: "Handphone Repairing",
    topic: "Techniques for Soldering Mobile Phone Components on PCB Boards",
    credit_hours: 4,
  },
  {
    module: "Handphone Repairing",
    topic: "Techniques for Opening Mobile Phone Components Using a Soldering Iron",
    credit_hours: 4,
  },
  {
    module: "Handphone Repairing",
    topic: "Removing And Installing On/Off Button Or Switch Button Techniques",
    credit_hours: 4,
  },
  {
    module: "Handphone Repairing",
    topic: "Techniques for Opening and Installing Mobile Phone Housings",
    credit_hours: 2,
  },
  {
    module: "Handphone Repairing",
    topic: "Troubleshooting (Mic/Speaker/Buzzer/LED/Vibrate/Components/LCD/Ribbon)",
    credit_hours: 4,
  },
  {
    module: "Handphone Repairing",
    topic: "Techniques for Removing and Installing Components on a Phone Board Using an SMD Blower",
    credit_hours: 4,
  },
  {
    module: "Handphone Repairing",
    topic: "Trouble Shooting Components Using Power Supply Regulators",
    credit_hours: 4,
  },
  {
    module: "Handphone Repairing",
    topic: "Techniques for Installing Mobile Phone Accessories (Screen Protector/Casing)",
    credit_hours: 2,
  },
  {
    module: "Handphone Repairing",
    topic: "Introduction to the Software Section (Format/Install/Update)",
    credit_hours: 4,
  },
],
electric: [
  {
    module: "Basic Electrical Wiring",
    topic: "Power Supply Specifications",
    credit_hours: 2,
  },
  {
    module: "Basic Electrical Wiring",
    topic: "Electrical Wiring",
    credit_hours: 4,
  },
  {
    module: "Basic Electrical Wiring",
    topic: "Cable Selection",
    credit_hours: 4,
  },
  {
    module: "Basic Electrical Wiring",
    topic: "Electrical Accessories",
    credit_hours: 4,
  },
  {
    module: "Basic Electrical Wiring",
    topic: "Electrical Wiring Grounding",
    credit_hours: 4,
  },
  {
    module: "Basic Electrical Wiring",
    topic: "Electrical Wiring Inspection & Testing",
    credit_hours: 4,
  },
  {
    module: "Basic Electrical Wiring",
    topic: "Practical Project",
    credit_hours: 8,
  },

  {
    module: "Phase & Three Phase (Conduit Type)",
    topic: "Theory on Electrical Wiring Single Phase & Three Phase",
    credit_hours: 8,
  },
  {
    module: "Phase & Three Phase (Conduit Type)",
    topic: "Practical on Single Phase Electrical Wiring & Testing",
    credit_hours: 10,
  },
  {
    module: "Phase & Three Phase (Conduit Type)",
    topic: "Practical on Three Phase Electrical Wiring & Testing",
    credit_hours: 12,
  },

  {
    module: "Pakej C: CCTV Installation & Electrical Wiring",
    topic: "Theory on CCTV & Electrical Wiring",
    credit_hours: 4,
  },
  {
    module: "Pakej C: CCTV Installation & Electrical Wiring",
    topic: "Practical on CCTV Installation & Electrical Wiring",
    credit_hours: 12,
  },

  {
    module: "CCTV Installation & Electrical Wiring",
    topic: "Theory on CCTV & Electrical Wiring",
    credit_hours: 4,
  },
  {
    module: "CCTV Installation & Electrical Wiring",
    topic: "Practical on CCTV Installation & Electrical Wiring",
    credit_hours: 12,
  },
],
carpentry: [
  {
    module: "Introduction to Carpentry Workshop",
    topic: "Introduction to Carpentry and Workshop Safety",
    credit_hours: 8,
  },
  {
    module: "Introduction to Carpentry Workshop",
    topic: "Measuring, Marking and Reading Drawings",
    credit_hours: 10,
  },
  {
    module: "Introduction to Carpentry Workshop",
    topic: "Hand Tools and Power Tools",
    credit_hours: 12,
  },
  {
    module: "Introduction to Carpentry Workshop",
    topic: "Wood Cutting, Shaping and Preparation",
    credit_hours: 12,
  },
  {
    module: "Wood Preparations",
    topic: "Joinery Techniques",
    credit_hours: 16,
  },
  {
    module: "Furniture Production",
    topic: "Furniture Assembly",
    credit_hours: 20,
  },
  {
    module: "Wood Crafts Production",
    topic: "Wood Craft Production",
    credit_hours: 16,
  },
  {
    module: "Wood Engraving Production",
    topic: "Wood Engraving and Decorative Techniques",
    credit_hours: 12,
  },
  {
    module: "Finishing and Quality Control",
    topic: "Surface Finishing and Quality Control",
    credit_hours: 8,
  },
],
automotive: [
  {
    module: "Introduction to Automotive Workshop",
    topic: "Introduction to Automotive and Workshop Safety",
    credit_hours: 6,
  },
  {
    module: "Introduction to Automotive Workshop",
    topic: "Automotive Tools and Equipment",
    credit_hours: 8,
  },
  {
    module: "Introduction to Automotive Workshop",
    topic: "Basic Engine and Vehicle Systems",
    credit_hours: 8,
  },

  {
    module: "Inspection and Servicing",
    topic: "Routine Vehicle Servicing",
    credit_hours: 12,
  },
  {
    module: "Inspection and Servicing",
    topic: "Brake, Tyre and Suspension Inspection",
    credit_hours: 10,
  },
  {
    module: "Inspection and Servicing",
    topic: "Automotive Electrical and Battery System",
    credit_hours: 10,
  },

  {
    module: "Basic Diagnostics and Preventive Maintenance",
    topic: "Basic Diagnostics and Preventive Maintenance",
    credit_hours: 10,
  },
],
ev: [
  {
    module: "Introduction to Electric Vehicles",
    topic: "Introduction to Electric Vehicles",
    credit_hours: 4,
  },
  {
    module: "Introduction to EV Safety Awareness",
    topic: "Introduction to EV Safety Awareness",
    credit_hours: 8,
  },
  {
    module: "Introduction to EV Components and Systems",
    topic: "Introduction to EV Components and Systems",
    credit_hours: 8,
  },
  {
    module: "Introduction to EV Charging Systems",
    topic: "Introduction to EV Charging Systems",
    credit_hours: 8,
  },
  {
    module: "Introduction to EV Diagnostics",
    topic: "Introduction to EV Diagnostics",
    credit_hours: 10,
  },
],
domestic_electrical: [
  {
    module: "Introduction to Electric Domestic Home Appliances",
    topic: "Workplace Safety and Electrical Fundamentals",
    credit_hours: 8,
  },
  {
    module: "Introduction to Electric Domestic Home Appliances",
    topic: "Basic Electrical Principles",
    credit_hours: 10,
  },
  {
    module: "Introduction to Electric Domestic Home Appliances",
    topic: "Electrical Tools and Test Equipment",
    credit_hours: 8,
  },
  {
    module: "Introduction to Electric Domestic Home Appliances",
    topic: "Electrical Components",
    credit_hours: 10,
  },

  {
    module: "Diagnostic and Troubleshooting",
    topic: "Diagnostic and Troubleshooting Techniques",
    credit_hours: 12,
  },

  {
    module: "Repairing and Assembly",
    topic: "Repair of Small Domestic Appliances",
    credit_hours: 20,
  },
  {
    module: "Repairing and Assembly",
    topic: "Repair of Major Home Appliances",
    credit_hours: 20,
  },
  {
    module: "Repairing and Assembly",
    topic: "Wiring, Soldering and Assembly",
    credit_hours: 8,
  },

  {
    module: "Testing and Quality Control",
    topic: "Testing, Quality Control and Preventive Maintenance",
    credit_hours: 6,
  },
],
job_placement: [
  {
    module: "Job Placement",
    topic: "PENDAFTARAN & PENGGUNAAN EMAIL",
    credit_hours: 2,
  },
  {
    module: "Job Placement",
    topic: "RESUME MAKING & PRINTING",
    credit_hours: 2,
  },
  {
    module: "Job Placement",
    topic: "PENDAFTARAN & MELENGKAPKAN PORTAL PERKERJAAN",
    credit_hours: 4,
  },
  {
    module: "Job Placement",
    topic: "PERMOHONAN PEKERJAAN",
    credit_hours: 4,
  },
],
spa_cosmeticology: [
  // Facial Consultation & Analysis
  {
    module: "Facial Consultation & Analysis",
    topic: "1.1 Analisis kulit muka dan lengkapkan borang konsultasi.",
    credit_hours: 5,
  },
  {
    module: "Facial Consultation & Analysis",
    topic: "1.2 Jenis-jenis dan ciri-ciri kulit muka.",
    credit_hours: 3,
  },
  {
    module: "Facial Consultation & Analysis",
    topic: "1.3 Masalah pada kulit muka.",
    credit_hours: 2,
  },
  {
    module: "Facial Consultation & Analysis",
    topic: "1.4 Panduan menganalisis kulit muka pelanggan.",
    credit_hours: 5,
  },
  {
    module: "Facial Consultation & Analysis",
    topic: "1.5 Langkah kerja menganalisis kulit muka pelanggan.",
    credit_hours: 5,
  },
  {
    module: "Facial Consultation & Analysis",
    topic: "1.6 Indikasi & indikasi kontra rawatan muka",
    credit_hours: 4,
  },

  // Facial Preparation & Cleansing
  {
    module: "Facial Preparation & Cleansing",
    topic: "2.1 Kelengkapan Alatan, Mesin, Bahan dan Produk Rawatan.",
    credit_hours: 3,
  },
  {
    module: "Facial Preparation & Cleansing",
    topic: "2.2 Prosedur persediaan pelanggan.",
    credit_hours: 3,
  },
  {
    module: "Facial Preparation & Cleansing",
    topic: "2.3 Langkah membersihkan muka",
    credit_hours: 2,
  },
  {
    module: "Facial Preparation & Cleansing",
    topic: "2.4 Langkah menskrub muka.",
    credit_hours: 2,
  },
  {
    module: "Facial Preparation & Cleansing",
    topic: "2.5 Langkah mengewap muka.",
    credit_hours: 2,
  },

  // Facial Massage
  {
    module: "Facial Massage",
    topic: "3.1 Tujuan mengurut muka.",
    credit_hours: 5,
  },
  {
    module: "Facial Massage",
    topic: "3.2 Jenis-jenis pergerakan asas urutan muka.",
    credit_hours: 5,
  },
  {
    module: "Facial Massage",
    topic: "3.3 Langkah kerja mengurut muka.",
    credit_hours: 5,
  },

  // Facial Masking and Aftercare
  {
    module: "Facial Masking and Aftercare",
    topic: "4.1 Tujuan menyapu pupur.",
    credit_hours: 5,
  },
  {
    module: "Facial Masking and Aftercare",
    topic: "4.2 Jenis pupur.",
    credit_hours: 3,
  },
  {
    module: "Facial Masking and Aftercare",
    topic: "4.3 Bahan Campuran pupur.",
    credit_hours: 2,
  },
  {
    module: "Facial Masking and Aftercare",
    topic: "4.4 Sukatan bancuhan pupur mengikut jenis muka.",
    credit_hours: 3,
  },
  {
    module: "Facial Masking and Aftercare",
    topic: "4.5 Penyediaan pupur tanah liat.",
    credit_hours: 2,
  },
  {
    module: "Facial Masking and Aftercare",
    topic: "4.6 Penjagaan selepas rawatan.",
    credit_hours: 3,
  },
  {
    module: "Facial Masking and Aftercare",
    topic: "4.7 Jenis pelembap.",
    credit_hours: 3,
  },
  {
    module: "Facial Masking and Aftercare",
    topic: "4.8 Penjagaan muka di rumah.",
    credit_hours: 3,
  },

  // Facial Procedure
  {
    module: "Facial Procedure",
    topic: "5.1 Prosedur Rawatan muka.",
    credit_hours: 3,
  },

  // Manicure & Pedicure Consultation
  {
    module: "Manicure & Pedicure Consultation",
    topic: "1.1 Pengenalan Manicure & Pedicure",
    credit_hours: 5,
  },
  {
    module: "Manicure & Pedicure Consultation",
    topic: "1.2 Indikasi kontra Manicure & Pedicure",
    credit_hours: 3,
  },
  {
    module: "Manicure & Pedicure Consultation",
    topic: "1.3 Anatomi & Fisiologi Tangan dan kuku",
    credit_hours: 2,
  },
  {
    module: "Manicure & Pedicure Consultation",
    topic: "1.4 Tanda kuku dan maksudnya",
    credit_hours: 5,
  },

  // Manicure Preparation & Treatment
  {
    module: "Manicure Preparation & Treatment",
    topic: "2.1 Persediaan bahan dan alatan",
    credit_hours: 3,
  },
  {
    module: "Manicure Preparation & Treatment",
    topic: "2.2 Langkah mengurut tangan",
    credit_hours: 3,
  },
  {
    module: "Manicure Preparation & Treatment",
    topic: "2.3 Teknik dan procedur perkhidmatan manicure",
    credit_hours: 2,
  },
  {
    module: "Manicure Preparation & Treatment",
    topic: "2.4 Langkah kebersihanan dan keselamatan semasa berkerja",
    credit_hours: 2,
  },

  // Pedicure Preparation & Treatment
  {
    module: "Pedicure Preparation & Treatment",
    topic: "3.1 Tujuan melaksanakan rawatan pedicure",
    credit_hours: 5,
  },
  {
    module: "Pedicure Preparation & Treatment",
    topic: "3.2 Proses kerja rawatan pedicure",
    credit_hours: 3,
  },
  {
    module: "Pedicure Preparation & Treatment",
    topic: "3.3 Langkah kebersihan dan keselamatan semasa berkerja.",
    credit_hours: 2,
  },

  // Oil Manicure & Pedicure Treatment
  {
    module: "Oil Manicure & Pedicure Treatment",
    topic: "4.1 Teknik dan procedur perkhidmatan manicure",
    credit_hours: 2,
  },
  {
    module: "Oil Manicure & Pedicure Treatment",
    topic: "4.2 Teknik dan procedur perkhidmatan pedicure",
    credit_hours: 3,
  },

  // Manicure & Pedicure Postcare
  {
    module: "Manicure & Pedicure Postcare",
    topic: "5.1 Penjagaan rumah selepas rawatan manicure & pedicure",
    credit_hours: 3,
  },
  {
    module: "Manicure & Pedicure Postcare",
    topic: "5.2 Produk penjagaan kuku kaki dan tangan di rumah",
    credit_hours: 2,
  },

  // Makeup Consultation & Preparation
  {
    module: "Makeup Consultation & Preparation",
    topic: "1.1 Kepentingan solekan muka.",
    credit_hours: 5,
  },
  {
    module: "Makeup Consultation & Preparation",
    topic: "1.2 Variasi solekan",
    credit_hours: 5,
  },
  {
    module: "Makeup Consultation & Preparation",
    topic: "1.3 Faktor Penghasilan makeup yang efektif.",
    credit_hours: 5,
  },
  {
    module: "Makeup Consultation & Preparation",
    topic: "1.4 Persediaan bahan, alatan dan pelanggan",
    credit_hours: 5,
  },

  // Carry out Eyebrow & Eyeshadow Shaping Technique
  {
    module: "Carry out Eyebrow & Eyeshadow Shaping Technique",
    topic: "2.2 Kepentingan Bentukkan kening",
    credit_hours: 4,
  },
  {
    module: "Carry out Eyebrow & Eyeshadow Shaping Technique",
    topic: "2.3 Cara-cara membentuk kening.",
    credit_hours: 4,
  },
  {
    module: "Carry out Eyebrow & Eyeshadow Shaping Technique",
    topic: "2.4 Procedure melukis kening.",
    credit_hours: 4,
  },
  {
    module: "Carry out Eyebrow & Eyeshadow Shaping Technique",
    topic: "2.5 Kepentingan Eyeshadow Shading",
    credit_hours: 4,
  },
  {
    module: "Carry out Eyebrow & Eyeshadow Shaping Technique",
    topic: "2.6 Teknik Shading mengikut jenis mata",
    credit_hours: 4,
  },
  {
    module: "Carry out Eyebrow & Eyeshadow Shaping Technique",
    topic: "2.7 Kategori warna solekan",
    credit_hours: 4,
  },

  // Day Makeup Procedure
  {
    module: "Day Makeup Procedure",
    topic: "3.1 Warna kulit dan pemilihan warna",
    credit_hours: 3,
  },
  {
    module: "Day Makeup Procedure",
    topic: "3.2 Perbezaan solekan siang dan malam.",
    credit_hours: 3,
  },
  {
    module: "Day Makeup Procedure",
    topic: "3.3 Indikasi solekan muka",
    credit_hours: 4,
  },
  {
    module: "Day Makeup Procedure",
    topic: "3.4 Kategori pemilihan warna",
    credit_hours: 3,
  },

  // Night Makeup Procedure
  {
    module: "Night Makeup Procedure",
    topic: "4.1 Persediaan awal solekan muka.",
    credit_hours: 2,
  },
  {
    module: "Night Makeup Procedure",
    topic: "4.2 Persediaan pelanggan",
    credit_hours: 3,
  },
  {
    module: "Night Makeup Procedure",
    topic: "4.3 Teknik Menyelok Muka.",
    credit_hours: 5,
  },
  {
    module: "Night Makeup Procedure",
    topic: "4.4 Prosedur Asas solekan muka",
    credit_hours: 5,
  },
  
],
arts_and_craft: [
  // SEWING MACHINE HANDLING
  {
    module: "SEWING MACHINE HANDLING",
    topic: "CONTROLING THE MACHINE (LOCKSTITCH AND OVERLOCK MACHINE)",
    credit_hours: 10,
  },

  // PRODUCE TOTE BAG
  {
    module: "PRODUCE TOTE BAG",
    topic: "MEASUREMENT",
    credit_hours: 2,
  },
  {
    module: "PRODUCE TOTE BAG",
    topic: "FABRIC CUTTING",
    credit_hours: 2,
  },
  {
    module: "PRODUCE TOTE BAG",
    topic: "STITCHING AND FINISHING",
    credit_hours: 16,
  },

  // PRODUCE CUSHION
  {
    module: "PRODUCE CUSHION",
    topic: "MEASUREMENT",
    credit_hours: 2,
  },
  {
    module: "PRODUCE CUSHION",
    topic: "FABRIC CUTTING",
    credit_hours: 2,
  },
  {
    module: "PRODUCE CUSHION",
    topic: "STITCHING AND FINISHING",
    credit_hours: 6,
  },

  // LADIES GARMENT FASHION DESIGN ILLUSTRATION
  {
    module: "LADIES GARMENT FASHION DESIGN ILLUSTRATION",
    topic: "LADIES GARMENT FASHION DESIGN ILLUSTRATION",
    credit_hours: 20,
  },

  // LADIES GARMENT HAND STITCHING SAMPLE MAKING
  {
    module: "LADIES GARMENT HAND STITCHING SAMPLE MAKING",
    topic: "LADIES GARMENT FASHION DESIGN ILLUSTRATION",
    credit_hours: 10,
  },

  // LADIES GARMENT COMPONENT MAKING
  {
    module: "LADIES GARMENT COMPONENT MAKING",
    topic: "LADIES GARMENT FASHION DESIGN ILLUSTRATION",
    credit_hours: 20,
  },

  // LADIES GARMENT PATTERN MAKING
  {
    module: "LADIES GARMENT PATTERN MAKING",
    topic: "LADIES GARMENT FASHION DESIGN ILLUSTRATION",
    credit_hours: 20,
  },

  // Produce casual blouse
  {
    module: "Produce casual blouse",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce casual blouse",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce casual blouse",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce casual blouse",
    topic: "Assemble and Construct Garment",
    credit_hours: 20,
  },
  {
    module: "Produce casual blouse",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce casual skirt A-Line
  {
    module: "Produce casual skirt A-Line",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce casual skirt A-Line",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce casual skirt A-Line",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce casual skirt A-Line",
    topic: "Assemble and Construct Garment",
    credit_hours: 4,
  },
  {
    module: "Produce casual skirt A-Line",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce casual Bell Skirt
  {
    module: "Produce casual Bell Skirt",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce casual Bell Skirt",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce casual Bell Skirt",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce casual Bell Skirt",
    topic: "Assemble and Construct Garment",
    credit_hours: 4,
  },
  {
    module: "Produce casual Bell Skirt",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce casual long pants
  {
    module: "Produce casual long pants",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce casual long pants",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce casual long pants",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce casual long pants",
    topic: "Assemble and Construct Garment",
    credit_hours: 12,
  },
  {
    module: "Produce casual long pants",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce casual Palazo
  {
    module: "Produce casual Palazo",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce casual Palazo",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce casual Palazo",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce casual Palazo",
    topic: "Assemble and Construct Garment",
    credit_hours: 4,
  },
  {
    module: "Produce casual Palazo",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Kurung Pesak outfit
  {
    module: "Produce Kurung Pesak outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Kurung Pesak outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Kurung Pesak outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 4,
  },
  {
    module: "Produce Kurung Pesak outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 24,
  },
  {
    module: "Produce Kurung Pesak outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Cheongsam outfit
  {
    module: "Produce Cheongsam outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Cheongsam outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Cheongsam outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce Cheongsam outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 20,
  },
  {
    module: "Produce Cheongsam outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Sari blouse outfit
  {
    module: "Produce Sari blouse outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Sari blouse outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce Sari blouse outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce Sari blouse outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 12,
  },
  {
    module: "Produce Sari blouse outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Kurung Pahang Outfit
  {
    module: "Produce Kurung Pahang Outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Kurung Pahang Outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Kurung Pahang Outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 4,
  },
  {
    module: "Produce Kurung Pahang Outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 24,
  },
  {
    module: "Produce Kurung Pahang Outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Kurung Kedah Outfit
  {
    module: "Produce Kurung Kedah Outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Kurung Kedah Outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Kurung Kedah Outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce Kurung Kedah Outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 20,
  },
  {
    module: "Produce Kurung Kedah Outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Kurung Pesak Gantung outfit
  {
    module: "Produce Kurung Pesak Gantung outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Kurung Pesak Gantung outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Kurung Pesak Gantung outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 4,
  },
  {
    module: "Produce Kurung Pesak Gantung outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 24,
  },
  {
    module: "Produce Kurung Pesak Gantung outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Kurung Riau outfit
  {
    module: "Produce Kurung Riau outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Kurung Riau outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Kurung Riau outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 4,
  },
  {
    module: "Produce Kurung Riau outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 24,
  },
  {
    module: "Produce Kurung Riau outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Modern Kebaya outfit
  {
    module: "Produce Modern Kebaya outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Modern Kebaya outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Modern Kebaya outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 4,
  },
  {
    module: "Produce Modern Kebaya outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 28,
  },
  {
    module: "Produce Modern Kebaya outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Modern Kurung outfit
  {
    module: "Produce Modern Kurung outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Modern Kurung outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Modern Kurung outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 4,
  },
  {
    module: "Produce Modern Kurung outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 24,
  },
  {
    module: "Produce Modern Kurung outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Modern Jubah outfit
  {
    module: "Produce Modern Jubah outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Modern Jubah outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce Modern Jubah outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce Modern Jubah outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 12,
  },
  {
    module: "Produce Modern Jubah outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Nurse Uniform outfit
  {
    module: "Produce Nurse Uniform outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Nurse Uniform outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Nurse Uniform outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 4,
  },
  {
    module: "Produce Nurse Uniform outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 28,
  },
  {
    module: "Produce Nurse Uniform outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Corporate Uniform outfit
  {
    module: "Produce Corporate Uniform outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Corporate Uniform outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Corporate Uniform outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 4,
  },
  {
    module: "Produce Corporate Uniform outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 28,
  },
  {
    module: "Produce Corporate Uniform outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Short Sleeve Shirt Outfit
  {
    module: "Produce Short Sleeve Shirt Outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Short Sleeve Shirt Outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce Short Sleeve Shirt Outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce Short Sleeve Shirt Outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 12,
  },
  {
    module: "Produce Short Sleeve Shirt Outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Long Sleeve Shirt Outfit
  {
    module: "Produce Long Sleeve Shirt Outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Long Sleeve Shirt Outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce Long Sleeve Shirt Outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce Long Sleeve Shirt Outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 12,
  },
  {
    module: "Produce Long Sleeve Shirt Outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Trouser Outfit
  {
    module: "Produce Trouser Outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Trouser Outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce Trouser Outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce Trouser Outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 12,
  },
  {
    module: "Produce Trouser Outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Baju Melayu Cekak Musang Outfit
  {
    module: "Produce Baju Melayu Cekak Musang Outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Baju Melayu Cekak Musang Outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Baju Melayu Cekak Musang Outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 4,
  },
  {
    module: "Produce Baju Melayu Cekak Musang Outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 28,
  },
  {
    module: "Produce Baju Melayu Cekak Musang Outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Baju Melayu Teluk Belanga Outfit
  {
    module: "Produce Baju Melayu Teluk Belanga Outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Baju Melayu Teluk Belanga Outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Baju Melayu Teluk Belanga Outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 4,
  },
  {
    module: "Produce Baju Melayu Teluk Belanga Outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 28,
  },
  {
    module: "Produce Baju Melayu Teluk Belanga Outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Baju Melayu Moden Outfit
  {
    module: "Produce Baju Melayu Moden Outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Baju Melayu Moden Outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Baju Melayu Moden Outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 4,
  },
  {
    module: "Produce Baju Melayu Moden Outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 28,
  },
  {
    module: "Produce Baju Melayu Moden Outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Baju Kurta Outfit
  {
    module: "Produce Baju Kurta Outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Baju Kurta Outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce Baju Kurta Outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce Baju Kurta Outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 12,
  },
  {
    module: "Produce Baju Kurta Outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Jubah Outfit
  {
    module: "Produce Jubah Outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Jubah Outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce Jubah Outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce Jubah Outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 12,
  },
  {
    module: "Produce Jubah Outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce T-Shirt Outfit
  {
    module: "Produce T-Shirt Outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce T-Shirt Outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce T-Shirt Outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce T-Shirt Outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 2,
  },
  {
    module: "Produce T-Shirt Outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce children’s shirt.
  {
    module: "Produce children’s shirt.",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce children’s shirt.",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce children’s shirt.",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce children’s shirt.",
    topic: "Assemble and Construct Garment",
    credit_hours: 2,
  },
  {
    module: "Produce children’s shirt.",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce children’s trousers.
  {
    module: "Produce children’s trousers.",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce children’s trousers.",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce children’s trousers.",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce children’s trousers.",
    topic: "Assemble and Construct Garment",
    credit_hours: 2,
  },
  {
    module: "Produce children’s trousers.",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce children’s blouse.
  {
    module: "Produce children’s blouse.",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce children’s blouse.",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce children’s blouse.",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce children’s blouse.",
    topic: "Assemble and Construct Garment",
    credit_hours: 12,
  },
  {
    module: "Produce children’s blouse.",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce children’s skirt.
  {
    module: "Produce children’s skirt.",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce children’s skirt.",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce children’s skirt.",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce children’s skirt.",
    topic: "Assemble and Construct Garment",
    credit_hours: 2,
  },
  {
    module: "Produce children’s skirt.",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce children’s dress.
  {
    module: "Produce children’s dress.",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce children’s dress.",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce children’s dress.",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce children’s dress.",
    topic: "Assemble and Construct Garment",
    credit_hours: 12,
  },
  {
    module: "Produce children’s dress.",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // ALTERATION, REPAIR AND RE-STYLE
  {
    module: "ALTERATION, REPAIR AND RE-STYLE",
    topic: "ALTERATION, REPAIR AND RE-STYLE",
    credit_hours: 20,
  },

  // CREATIVE SEWING PRODUCT SALES & MARKETING
  {
    module: "CREATIVE SEWING PRODUCT SALES & MARKETING",
    topic: "CREATIVE SEWING PRODUCT SALES & MARKETING",
    credit_hours: 96,
  },

  // CURTAIN MAKING
  {
    module: "CURTAIN MAKING",
    topic: "PERFORM MEASUREMENT",
    credit_hours: 4,
  },
  {
    module: "CURTAIN MAKING",
    topic: "CARRY OUT FABRIC CUTTING",
    credit_hours: 4,
  },
  {
    module: "CURTAIN MAKING",
    topic: "ASSEMBLE AND CONSTRUCT CURTAIN",
    credit_hours: 20,
  },
  {
    module: "CURTAIN MAKING",
    topic: "CONDUCT FINISHING AND QUALITY INSPECTION",
    credit_hours: 2,
  },

  // HAND EMBROIDERY
  {
    module: "HAND EMBROIDERY",
    topic: "PERFORM DESIGN SKETCHING",
    credit_hours: 2,
  },
  {
    module: "HAND EMBROIDERY",
    topic: "PERFORM NEEDLEWORK",
    credit_hours: 26,
  },
  {
    module: "HAND EMBROIDERY",
    topic: "PERFORM PRODUCT FINISHING",
    credit_hours: 2,
  },

  // Leather Key Holder
  {
    module: "Leather Key Holder",
    topic: "Measuring, cutting, rivet installation",
    credit_hours: 10,
  },

  // Leather Keychain
  {
    module: "Leather Keychain",
    topic: "Punching holes, edge finishing",
    credit_hours: 10,
  },

  // Leather Luggage Tag
  {
    module: "Leather Luggage Tag",
    topic: "Pattern making, stamping",
    credit_hours: 10,
  },

  // Cable Organizer
  {
    module: "Cable Organizer",
    topic: "Snap button installation",
    credit_hours: 6,
  },

  // Leather Bookmark
  {
    module: "Leather Bookmark",
    topic: "Embossing, dyeing",
    credit_hours: 6,
  },

  // Card Holder
  {
    module: "Card Holder",
    topic: "Saddle stitching",
    credit_hours: 12,
  },

  // Coin Pouch
  {
    module: "Coin Pouch",
    topic: "Zipper or snap installation",
    credit_hours: 20,
  },

  // Glasses Sleeve
  {
    module: "Glasses Sleeve",
    topic: "Pattern drafting, stitching",
    credit_hours: 12,
  },

  // Mouse Pad
  {
    module: "Mouse Pad",
    topic: "Large cutting accuracy",
    credit_hours: 6,
  },

  // Coaster Set
  {
    module: "Coaster Set",
    topic: "Edge burnishing",
    credit_hours: 10,
  },

  // Bi-fold Wallet
  {
    module: "Bi-fold Wallet",
    topic: "Multiple panels, assembly",
    credit_hours: 20,
  },

  // Notebook Cover
  {
    module: "Notebook Cover",
    topic: "Precision measuring",
    credit_hours: 20,
  },

  // Passport Holder
  {
    module: "Passport Holder",
    topic: "Internal pocket construction",
    credit_hours: 20,
  },

  // Phone Sleeve
  {
    module: "Phone Sleeve",
    topic: "Pattern customization",
    credit_hours: 12,
  },

  // Pen Case
  {
    module: "Pen Case",
    topic: "Box stitching",
    credit_hours: 12,
  },

  // Small Sling Bag
  {
    module: "Small Sling Bag",
    topic: "Full assembly process",
    credit_hours: 30,
  },

  // Waist Pouch
  {
    module: "Waist Pouch",
    topic: "Zipper installation",
    credit_hours: 24,
  },

  // Mini Tote Bag
  {
    module: "Mini Tote Bag",
    topic: "Reinforcement techniques",
    credit_hours: 30,
  },

  // Tool Roll
  {
    module: "Tool Roll",
    topic: "Strap installation",
    credit_hours: 12,
  },

  // Apron Accessories
  {
    module: "Apron Accessories",
    topic: "Hardware installation",
    credit_hours: 20,
  },
],
graphic_virtual_art: [
  // Basic Adobe Illustrator
  {
    module: "Basic Adobe Illustrator",
    topic: "Introduction to Adobe Illustrator",
    credit_hours: 6,
  },
  {
    module: "Basic Adobe Illustrator",
    topic: "Lab (Introduction)",
    credit_hours: 10,
  },
  {
    module: "Basic Adobe Illustrator",
    topic: "Artwork Project",
    credit_hours: 4,
  },

  // Basic Adobe Photoshop CS6
  {
    module: "Basic Adobe Photoshop CS6",
    topic: "Introduction to Adobe Photoshop",
    credit_hours: 6,
  },
  {
    module: "Basic Adobe Photoshop CS6",
    topic: "Lab (Introduction)",
    credit_hours: 10,
  },
  {
    module: "Basic Adobe Photoshop CS6",
    topic: "Artwork Project",
    credit_hours: 4,
  },

  // Mug Press & Design
  {
    module: "Mug Press & Design",
    topic: "Introduction to Mug Press",
    credit_hours: 4,
  },
  {
    module: "Mug Press & Design",
    topic: "Introduction to Mug Design (Using Adobe Illustrator/MS Office Words)",
    credit_hours: 10,
  },
  {
    module: "Mug Press & Design",
    topic: "Mug Press - Lab",
    credit_hours: 4,
  },
  {
    module: "Mug Press & Design",
    topic: "Mug Design (Using Adobe Illustrator/MS Office Words) - Lab",
    credit_hours: 10,
  },
  {
    module: "Mug Press & Design",
    topic: "Mug Press Project",
    credit_hours: 4,
  },

  // Shirt Press & Design (Sublimation)
  {
    module: "Shirt Press & Design (Sublimation)",
    topic: "Introduction to Shirt Press (Sublimation)",
    credit_hours: 4,
  },
  {
    module: "Shirt Press & Design (Sublimation)",
    topic: "Introduction to Shirt Design (Using Adobe Illustrator/MS Office Words)",
    credit_hours: 10,
  },
  {
    module: "Shirt Press & Design (Sublimation)",
    topic: "Shirt Press - Lab (Sublimation)",
    credit_hours: 4,
  },
  {
    module: "Shirt Press & Design (Sublimation)",
    topic: "Shirt Design (Using Adobe Illustrator/MS Office Words) - Lab",
    credit_hours: 10,
  },
  {
    module: "Shirt Press & Design (Sublimation)",
    topic: "Shirt Press Project (Sublimation)",
    credit_hours: 4,
  },

  // Shirt Press & Design (Vinyl)
  {
    module: "Shirt Press & Design (Vinyl)",
    topic: "Introduction to Shirt Press (Vinyl)",
    credit_hours: 4,
  },
  {
    module: "Shirt Press & Design (Vinyl)",
    topic: "Introduction to Shirt Design (Using Adobe Illustrator)",
    credit_hours: 10,
  },
  {
    module: "Shirt Press & Design (Vinyl)",
    topic: "Shirt Press - Lab (Vinyl)",
    credit_hours: 4,
  },
  {
    module: "Shirt Press & Design (Vinyl)",
    topic: "Shirt Design (Using Adobe Illustrator) - Lab",
    credit_hours: 10,
  },
  {
    module: "Shirt Press & Design (Vinyl)",
    topic: "Shirt Press Project (Vinyl)",
    credit_hours: 4,
  },

  // Shirt Press & Design (DTF)
  {
    module: "Shirt Press & Design (DTF)",
    topic: "Introduction to Shirt Press (DTF)",
    credit_hours: 4,
  },
  {
    module: "Shirt Press & Design (DTF)",
    topic: "Introduction to Shirt Design (Photoshop)",
    credit_hours: 10,
  },
  {
    module: "Shirt Press & Design (DTF)",
    topic: "Shirt Press - Lab (DTF)",
    credit_hours: 4,
  },
  {
    module: "Shirt Press & Design (DTF)",
    topic: "Shirt Design (Photoshop) - Lab",
    credit_hours: 10,
  },
  {
    module: "Shirt Press & Design (DTF)",
    topic: "Shirt Press Project (DTF)",
    credit_hours: 4,
  },

  // Basic 3D CAD (3D Printing)
  {
    module: "Basic 3D CAD (3D Printing)",
    topic: "Introduction to 3D Printing",
    credit_hours: 4,
  },
  {
    module: "Basic 3D CAD (3D Printing)",
    topic: "Introduction to 2D & 3D Drawing (Using 3D CAD)",
    credit_hours: 10,
  },
  {
    module: "Basic 3D CAD (3D Printing)",
    topic: "Shape Printing (3D) - Lab (3D Printer)",
    credit_hours: 4,
  },
  {
    module: "Basic 3D CAD (3D Printing)",
    topic: "Shape Drawing (3D) – Lab",
    credit_hours: 10,
  },
  {
    module: "Basic 3D CAD (3D Printing)",
    topic: "3D Printing Project",
    credit_hours: 4,
  },

  // SILK SCREEN PRINTING
  {
    module: "SILK SCREEN PRINTING",
    topic: "Introduction to Silk Screen Printing",
    credit_hours: 4,
  },
  {
    module: "SILK SCREEN PRINTING",
    topic: "Tool, Equipment and Materials",
    credit_hours: 6,
  },
  {
    module: "SILK SCREEN PRINTING",
    topic: "Graphic Design Preparation",
    credit_hours: 8,
  },
  {
    module: "SILK SCREEN PRINTING",
    topic: "Screen Preparation",
    credit_hours: 10,
  },
  {
    module: "SILK SCREEN PRINTING",
    topic: "Single Color Printing",
    credit_hours: 10,
  },
  {
    module: "SILK SCREEN PRINTING",
    topic: "Multi color Printing",
    credit_hours: 12,
  },
  {
    module: "SILK SCREEN PRINTING",
    topic: "Printing on different Products",
    credit_hours: 8,
  },
  {
    module: "SILK SCREEN PRINTING",
    topic: "Finishing and Quality Control",
    credit_hours: 4,
  },
  {
    module: "SILK SCREEN PRINTING",
    topic: "Equipment Cleaning and Maintenance",
    credit_hours: 4,
  },
],
sewing: [
  // SEWING MACHINE HANDLING
  {
    module: "SEWING MACHINE HANDLING",
    topic: "CONTROLING THE MACHINE (LOCKSTITCH AND OVERLOCK MACHINE)",
    credit_hours: 10,
  },

  // PRODUCE TOTE BAG
  {
    module: "PRODUCE TOTE BAG",
    topic: "MEASUREMENT",
    credit_hours: 2,
  },
  {
    module: "PRODUCE TOTE BAG",
    topic: "FABRIC CUTTING",
    credit_hours: 2,
  },
  {
    module: "PRODUCE TOTE BAG",
    topic: "STITCHING AND FINISHING",
    credit_hours: 16,
  },

  // PRODUCE CUSHION
  {
    module: "PRODUCE CUSHION",
    topic: "MEASUREMENT",
    credit_hours: 2,
  },
  {
    module: "PRODUCE CUSHION",
    topic: "FABRIC CUTTING",
    credit_hours: 2,
  },
  {
    module: "PRODUCE CUSHION",
    topic: "STITCHING AND FINISHING",
    credit_hours: 6,
  },

  // LADIES GARMENT FASHION DESIGN ILLUSTRATION
  {
    module: "LADIES GARMENT FASHION DESIGN ILLUSTRATION",
    topic: "LADIES GARMENT FASHION DESIGN ILLUSTRATION",
    credit_hours: 20,
  },

  // LADIES GARMENT HAND STITCHING SAMPLE MAKING
  {
    module: "LADIES GARMENT HAND STITCHING SAMPLE MAKING",
    topic: "LADIES GARMENT FASHION DESIGN ILLUSTRATION",
    credit_hours: 10,
  },

  // LADIES GARMENT COMPONENT MAKING
  {
    module: "LADIES GARMENT COMPONENT MAKING",
    topic: "LADIES GARMENT FASHION DESIGN ILLUSTRATION",
    credit_hours: 20,
  },

  // LADIES GARMENT PATTERN MAKING
  {
    module: "LADIES GARMENT PATTERN MAKING",
    topic: "LADIES GARMENT FASHION DESIGN ILLUSTRATION",
    credit_hours: 20,
  },

  // Produce casual blouse
  {
    module: "Produce casual blouse",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce casual blouse",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce casual blouse",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce casual blouse",
    topic: "Assemble and Construct Garment",
    credit_hours: 20,
  },
  {
    module: "Produce casual blouse",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce casual skirt A-Line
  {
    module: "Produce casual skirt A-Line",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce casual skirt A-Line",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce casual skirt A-Line",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce casual skirt A-Line",
    topic: "Assemble and Construct Garment",
    credit_hours: 4,
  },
  {
    module: "Produce casual skirt A-Line",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce casual Bell Skirt
  {
    module: "Produce casual Bell Skirt",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce casual Bell Skirt",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce casual Bell Skirt",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce casual Bell Skirt",
    topic: "Assemble and Construct Garment",
    credit_hours: 4,
  },
  {
    module: "Produce casual Bell Skirt",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce casual long pants
  {
    module: "Produce casual long pants",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce casual long pants",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce casual long pants",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce casual long pants",
    topic: "Assemble and Construct Garment",
    credit_hours: 12,
  },
  {
    module: "Produce casual long pants",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce casual Palazo
  {
    module: "Produce casual Palazo",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce casual Palazo",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce casual Palazo",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce casual Palazo",
    topic: "Assemble and Construct Garment",
    credit_hours: 4,
  },
  {
    module: "Produce casual Palazo",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Kurung Pesak outfit
  {
    module: "Produce Kurung Pesak outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Kurung Pesak outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Kurung Pesak outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 4,
  },
  {
    module: "Produce Kurung Pesak outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 24,
  },
  {
    module: "Produce Kurung Pesak outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Cheongsam outfit
  {
    module: "Produce Cheongsam outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Cheongsam outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Cheongsam outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce Cheongsam outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 20,
  },
  {
    module: "Produce Cheongsam outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Sari blouse outfit
  {
    module: "Produce Sari blouse outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Sari blouse outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce Sari blouse outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce Sari blouse outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 12,
  },
  {
    module: "Produce Sari blouse outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Kurung Pahang Outfit
  {
    module: "Produce Kurung Pahang Outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Kurung Pahang Outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Kurung Pahang Outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 4,
  },
  {
    module: "Produce Kurung Pahang Outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 24,
  },
  {
    module: "Produce Kurung Pahang Outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Kurung Kedah Outfit
  {
    module: "Produce Kurung Kedah Outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Kurung Kedah Outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Kurung Kedah Outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce Kurung Kedah Outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 20,
  },
  {
    module: "Produce Kurung Kedah Outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Kurung Pesak Gantung outfit
  {
    module: "Produce Kurung Pesak Gantung outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Kurung Pesak Gantung outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Kurung Pesak Gantung outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 4,
  },
  {
    module: "Produce Kurung Pesak Gantung outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 24,
  },
  {
    module: "Produce Kurung Pesak Gantung outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Kurung Riau outfit
  {
    module: "Produce Kurung Riau outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Kurung Riau outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Kurung Riau outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 4,
  },
  {
    module: "Produce Kurung Riau outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 24,
  },
  {
    module: "Produce Kurung Riau outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Modern Kebaya outfit
  {
    module: "Produce Modern Kebaya outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Modern Kebaya outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Modern Kebaya outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 4,
  },
  {
    module: "Produce Modern Kebaya outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 28,
  },
  {
    module: "Produce Modern Kebaya outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Modern Kurung outfit
  {
    module: "Produce Modern Kurung outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Modern Kurung outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Modern Kurung outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 4,
  },
  {
    module: "Produce Modern Kurung outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 24,
  },
  {
    module: "Produce Modern Kurung outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Modern Jubah outfit
  {
    module: "Produce Modern Jubah outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Modern Jubah outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce Modern Jubah outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce Modern Jubah outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 12,
  },
  {
    module: "Produce Modern Jubah outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Nurse Uniform outfit
  {
    module: "Produce Nurse Uniform outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Nurse Uniform outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Nurse Uniform outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 4,
  },
  {
    module: "Produce Nurse Uniform outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 28,
  },
  {
    module: "Produce Nurse Uniform outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Corporate Uniform outfit
  {
    module: "Produce Corporate Uniform outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Corporate Uniform outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Corporate Uniform outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 4,
  },
  {
    module: "Produce Corporate Uniform outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 28,
  },
  {
    module: "Produce Corporate Uniform outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Short Sleeve Shirt Outfit
  {
    module: "Produce Short Sleeve Shirt Outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Short Sleeve Shirt Outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce Short Sleeve Shirt Outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce Short Sleeve Shirt Outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 12,
  },
  {
    module: "Produce Short Sleeve Shirt Outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Long Sleeve Shirt Outfit
  {
    module: "Produce Long Sleeve Shirt Outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Long Sleeve Shirt Outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce Long Sleeve Shirt Outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce Long Sleeve Shirt Outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 12,
  },
  {
    module: "Produce Long Sleeve Shirt Outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Trouser Outfit
  {
    module: "Produce Trouser Outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Trouser Outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce Trouser Outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce Trouser Outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 12,
  },
  {
    module: "Produce Trouser Outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Baju Melayu Cekak Musang Outfit
  {
    module: "Produce Baju Melayu Cekak Musang Outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Baju Melayu Cekak Musang Outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Baju Melayu Cekak Musang Outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 4,
  },
  {
    module: "Produce Baju Melayu Cekak Musang Outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 28,
  },
  {
    module: "Produce Baju Melayu Cekak Musang Outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Baju Melayu Teluk Belanga Outfit
  {
    module: "Produce Baju Melayu Teluk Belanga Outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Baju Melayu Teluk Belanga Outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Baju Melayu Teluk Belanga Outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 4,
  },
  {
    module: "Produce Baju Melayu Teluk Belanga Outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 28,
  },
  {
    module: "Produce Baju Melayu Teluk Belanga Outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Baju Melayu Moden Outfit
  {
    module: "Produce Baju Melayu Moden Outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Baju Melayu Moden Outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 4,
  },
  {
    module: "Produce Baju Melayu Moden Outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 4,
  },
  {
    module: "Produce Baju Melayu Moden Outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 28,
  },
  {
    module: "Produce Baju Melayu Moden Outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Baju Kurta Outfit
  {
    module: "Produce Baju Kurta Outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Baju Kurta Outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce Baju Kurta Outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce Baju Kurta Outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 12,
  },
  {
    module: "Produce Baju Kurta Outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce Jubah Outfit
  {
    module: "Produce Jubah Outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce Jubah Outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce Jubah Outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce Jubah Outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 12,
  },
  {
    module: "Produce Jubah Outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce T-Shirt Outfit
  {
    module: "Produce T-Shirt Outfit",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce T-Shirt Outfit",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce T-Shirt Outfit",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce T-Shirt Outfit",
    topic: "Assemble and Construct Garment",
    credit_hours: 2,
  },
  {
    module: "Produce T-Shirt Outfit",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce children’s shirt.
  {
    module: "Produce children’s shirt.",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce children’s shirt.",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce children’s shirt.",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce children’s shirt.",
    topic: "Assemble and Construct Garment",
    credit_hours: 2,
  },
  {
    module: "Produce children’s shirt.",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce children’s trousers.
  {
    module: "Produce children’s trousers.",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce children’s trousers.",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce children’s trousers.",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce children’s trousers.",
    topic: "Assemble and Construct Garment",
    credit_hours: 2,
  },
  {
    module: "Produce children’s trousers.",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce children’s blouse.
  {
    module: "Produce children’s blouse.",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce children’s blouse.",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce children’s blouse.",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce children’s blouse.",
    topic: "Assemble and Construct Garment",
    credit_hours: 12,
  },
  {
    module: "Produce children’s blouse.",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce children’s skirt.
  {
    module: "Produce children’s skirt.",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce children’s skirt.",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce children’s skirt.",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce children’s skirt.",
    topic: "Assemble and Construct Garment",
    credit_hours: 2,
  },
  {
    module: "Produce children’s skirt.",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // Produce children’s dress.
  {
    module: "Produce children’s dress.",
    topic: "Perform Body Measurement",
    credit_hours: 2,
  },
  {
    module: "Produce children’s dress.",
    topic: "Perform Pattern Drafting",
    credit_hours: 2,
  },
  {
    module: "Produce children’s dress.",
    topic: "Carry Out Fabric Cutting",
    credit_hours: 2,
  },
  {
    module: "Produce children’s dress.",
    topic: "Assemble and Construct Garment",
    credit_hours: 12,
  },
  {
    module: "Produce children’s dress.",
    topic: "Perform Garment Finishing",
    credit_hours: 2,
  },

  // ALTERATION, REPAIR AND RE-STYLE
  {
    module: "ALTERATION, REPAIR AND RE-STYLE",
    topic: "ALTERATION, REPAIR AND RE-STYLE",
    credit_hours: 20,
  },

  // CREATIVE SEWING PRODUCT SALES & MARKETING
  {
    module: "CREATIVE SEWING PRODUCT SALES & MARKETING",
    topic: "CREATIVE SEWING PRODUCT SALES & MARKETING",
    credit_hours: 96,
  },

  // CURTAIN MAKING
  {
    module: "CURTAIN MAKING",
    topic: "PERFORM MEASUREMENT",
    credit_hours: 4,
  },
  {
    module: "CURTAIN MAKING",
    topic: "CARRY OUT FABRIC CUTTING",
    credit_hours: 4,
  },
  {
    module: "CURTAIN MAKING",
    topic: "ASSEMBLE AND CONSTRUCT CURTAIN",
    credit_hours: 20,
  },
  {
    module: "CURTAIN MAKING",
    topic: "CONDUCT FINISHING AND QUALITY INSPECTION",
    credit_hours: 2,
  },

  // HAND EMBROIDERY
  {
    module: "HAND EMBROIDERY",
    topic: "PERFORM DESIGN SKETCHING",
    credit_hours: 2,
  },
  {
    module: "HAND EMBROIDERY",
    topic: "PERFORM NEEDLEWORK",
    credit_hours: 26,
  },
  {
    module: "HAND EMBROIDERY",
    topic: "PERFORM PRODUCT FINISHING",
    credit_hours: 2,
  },

  // BATIK MAKING
  {
    module: "BATIK MAKING",
    topic: "PERFORM BATIK DESIGN AND CANTING",
    credit_hours: 4,
  },
  {
    module: "BATIK MAKING",
    topic: "CARRY OUT DYEING PROCESS",
    credit_hours: 12,
  },
  {
    module: "BATIK MAKING",
    topic: "DEWAXING PROCESS",
    credit_hours: 12,
  },
  {
    module: "BATIK MAKING",
    topic: "CONDUCT FINISHING AND QUALITY INSPECTION",
    credit_hours: 2,
  },

  // TIE AND DYE PRODUCT
  {
    module: "TIE AND DYE PRODUCT",
    topic: "DESIGN AND PLAN TIE PATTERN",
    credit_hours: 2,
  },
  {
    module: "TIE AND DYE PRODUCT",
    topic: "PERFORM FABRIC TYING AND BINDING TECHNIQUE",
    credit_hours: 2,
  },
  {
    module: "TIE AND DYE PRODUCT",
    topic: "CARRY OUT DYEING PROCESS",
    credit_hours: 2,
  },
  {
    module: "TIE AND DYE PRODUCT",
    topic: "PERFORM DRYING PROCESS",
    credit_hours: 12,
  },
  {
    module: "TIE AND DYE PRODUCT",
    topic: "CONDUCT FINISHING AND QUALITY INSPECTION",
    credit_hours: 2,
  },
],
office_administration: [
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Word - Basic",
    subtopic: "The New Word 2013 interface",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Word - Basic",
    subtopic: "Writing Your Document",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Word - Basic",
    subtopic: "Changing the Look of Your Text",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Word - Basic",
    subtopic: "Saving Your Work, Working selected Text and Bulleted & Numbered Lists",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Word - Basic",
    subtopic: "Final Document Managing",
    credit_hours: 6
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Word - Intermediate",
    subtopic: "Managing Your Documents",
    credit_hours: 4
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Word - Intermediate",
    subtopic: "Using Formatting Tools",
    credit_hours: 4
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Word - Intermediate",
    subtopic: "Creating Headers And Footers",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Word - Intermediate",
    subtopic: "Using Time Saving Tools",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Word - Intermediate",
    subtopic: "Finishing Your Document",
    credit_hours: 6
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Word - Advanced",
    subtopic: "Introduction",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Word - Advanced",
    subtopic: "The Insert Tab",
    credit_hours: 4
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Word - Advanced",
    subtopic: "The Page Layout Tab",
    credit_hours: 4
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Word - Advanced",
    subtopic: "The Review Tab",
    credit_hours: 4
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Word - Advanced",
    subtopic: "The References Tab",
    credit_hours: 4
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Excel - Basic",
    subtopic: "Introduction and Format Data",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Excel - Basic",
    subtopic: "Basic Formulas",
    credit_hours: 4
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Excel - Basic",
    subtopic: "Formula Functions",
    credit_hours: 3
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Excel - Basic",
    subtopic: "Charts",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Excel - Basic",
    subtopic: "Sort and Filter",
    credit_hours: 1
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Excel - Basic",
    subtopic: "Additional Features",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Excel - Intermediate",
    subtopic: "Advanced File Task",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Excel - Intermediate",
    subtopic: "Working with Functions and Formulas",
    credit_hours: 6
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Excel - Intermediate",
    subtopic: "Managing Tables",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Excel - Intermediate",
    subtopic: "Further Graphics",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Excel - Intermediate",
    subtopic: "Enhacing Your Workbook",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Excel - Intermediate",
    subtopic: "Finalizing Your Workbook",
    credit_hours: 4
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Excel - Advanced",
    subtopic: "Advanced Setting and Format",
    credit_hours: 4
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Excel - Advanced",
    subtopic: "Advanced Function and Formula",
    credit_hours: 6
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Excel - Advanced",
    subtopic: "Data Validation and Form",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Excel - Advanced",
    subtopic: "Solver, Financial and Query Function",
    credit_hours: 4
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Excel - Advanced",
    subtopic: "File Protecting and Macros",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Excel - Advanced",
    subtopic: "Data Analysis using Pivot Table & Others Advanced Features",
    credit_hours: 4
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Powerpoint - Basic & Intermediate",
    subtopic: "Getting Started and Working with Slides",
    credit_hours: 4
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Powerpoint - Basic & Intermediate",
    subtopic: "Working with Text",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Powerpoint - Basic & Intermediate",
    subtopic: "Inserting Illustrations",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Powerpoint - Basic & Intermediate",
    subtopic: "Formatting Slides",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Powerpoint - Basic & Intermediate",
    subtopic: "Charting and Adding Animations",
    credit_hours: 4
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Powerpoint - Basic & Intermediate",
    subtopic: "Presenting",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Powerpoint - Basic & Intermediate",
    subtopic: "Printing and Output",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Power Point - Advanced",
    subtopic: "Customization & Editing Presentation Masters",
    credit_hours: 4
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Power Point - Advanced",
    subtopic: "Creating & Editing Business Diagrams",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Power Point - Advanced",
    subtopic: "Working with Templates",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Power Point - Advanced",
    subtopic: "Creating a Multimedia Enriched Presentation",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Power Point - Advanced",
    subtopic: "Expanding a Slide Show",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Power Point - Advanced",
    subtopic: "Creating Web Presentation",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Computer Skills",
    topic: "Microsoft Office Power Point - Advanced",
    subtopic: "Collaborating on a Presentation, Securing and Distributing a Presentation",
    credit_hours: 4
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Customer Service",
    subtopic: "Customer Service Basics",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Customer Service",
    subtopic: "Developing Responsible Customer Service Skills",
    credit_hours: 1
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Customer Service",
    subtopic: "Developing Verbal and Nonverbal Communication",
    credit_hours: 1
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Customer Service",
    subtopic: "Customer Service Best Practices",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Customer Service",
    subtopic: "Attracting Loyal Customers",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Customer Service",
    subtopic: "Customer Service Work Trial",
    credit_hours: 6
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Effective Presentation and Communication",
    subtopic: "Fundamentals of Presentation",
    credit_hours: 1
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Effective Presentation and Communication",
    subtopic: "Audience Analysis and Supporting Material",
    credit_hours: 1
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Effective Presentation and Communication",
    subtopic: "Building Presentations",
    credit_hours: 1
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Effective Presentation and Communication",
    subtopic: "Presentation Mechanics",
    credit_hours: 1
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Effective Presentation and Communication",
    subtopic: "Presentation Process",
    credit_hours: 1
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Effective Presentation and Communication",
    subtopic: "Question And Answer Session",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Effective Presentation and Communication",
    subtopic: "Fundamentals of Persuasion",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Effective Presentation and Communication",
    subtopic: "Presentation Trial",
    credit_hours: 1
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Social ReIntegration Skill",
    subtopic: "Keterampilan dan Motivasi Diri",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Social ReIntegration Skill",
    subtopic: "Penjagaan dan kesihatan Diri - Klinikal",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Social ReIntegration Skill",
    subtopic: "Keterampilan Fizikal (Grooming)",
    credit_hours: 4
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Social ReIntegration Skill",
    subtopic: "Penyediaan Resume",
    credit_hours: 3
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Social ReIntegration Skill",
    subtopic: "Persediaan Temuduga",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Social ReIntegration Skill",
    subtopic: "Komunikasi",
    credit_hours: 4
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Social ReIntegration Skill",
    subtopic: "Community & Social Integration",
    credit_hours: 8
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Marketing Essential",
    subtopic: "Marketing Planning: New Pace, New Possibilities",
    credit_hours: 1
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Marketing Essential",
    subtopic: "Analyzing the Current Situation",
    credit_hours: 1
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Marketing Essential",
    subtopic: "Segmenting, Targeting and Positioning",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Marketing Essential",
    subtopic: "Planning Direction, Objectives and Marketing Support",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Marketing Essential",
    subtopic: "Developing Pricing Strategy",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Marketing Essential",
    subtopic: "Developing Marketing Communications and Influence Strategy",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Marketing Essential",
    subtopic: "Planning Metrics and Implementation Control",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Meeting Management",
    subtopic: "Meeting Management",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Meeting Management",
    subtopic: "Meeting Minutes Concepts & Functions",
    credit_hours: 1
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Meeting Management",
    subtopic: "Minutes of Meetings & Formats",
    credit_hours: 1
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Meeting Management",
    subtopic: "Recording Processing to Minutes of Meeting",
    credit_hours: 1
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Meeting Management",
    subtopic: "Adjust Meeting Minutes Language",
    credit_hours: 1
  },
  {
    workshop: "Office Administration",
    module: "Office Administration",
    topic: "Meeting Management",
    subtopic: "Approval & Records",
    credit_hours: 2
  },
  {
    workshop: "Office Administration",
    module: "SIP - Computer Skills",
    topic: "Pakej A: Microsoft Word, Excel, Powerpoint – Basic level",
    subtopic: "Theory and Practical on Basic Micosoft Word",
    credit_hours: 12
  },
  {
    workshop: "Office Administration",
    module: "SIP - Computer Skills",
    topic: "Pakej A: Microsoft Word, Excel, Powerpoint – Basic level",
    subtopic: "Theory and Practical on Basic Micosoft Excel",
    credit_hours: 16
  },
  {
    workshop: "Office Administration",
    module: "SIP - Computer Skills",
    topic: "Pakej A: Microsoft Word, Excel, Powerpoint – Basic level",
    subtopic: "Theory and Practical on Basic Micosoft PowerPoint",
    credit_hours: 12
  },
  {
    workshop: "Office Administration",
    module: "SIP - Computer Skills",
    topic: "Pakej B: Microsoft Word, Excel, Powerpoint – Intermediate level",
    subtopic: "Theory and Practical on Intermediate Micosoft Word",
    credit_hours: 12
  },
  {
    workshop: "Office Administration",
    module: "SIP - Computer Skills",
    topic: "Pakej B: Microsoft Word, Excel, Powerpoint – Intermediate level",
    subtopic: "Theory and Practical on Intermediate Micosoft Excel",
    credit_hours: 16
  },
  {
    workshop: "Office Administration",
    module: "SIP - Computer Skills",
    topic: "Pakej B: Microsoft Word, Excel, Powerpoint – Intermediate level",
    subtopic: "Theory and Practical on Intermediate Micosoft PowerPoint",
    credit_hours: 12
  },
  {
    workshop: "Office Administration",
    module: "SIP - Computer Skills",
    topic: "Pakej C: Microsoft Word, Excel, Powerpoint – Advanced level",
    subtopic: "Theory and Practical on Advanced Micosoft Word",
    credit_hours: 12
  },
  {
    workshop: "Office Administration",
    module: "SIP - Computer Skills",
    topic: "Pakej C: Microsoft Word, Excel, Powerpoint – Advanced level",
    subtopic: "Theory and Practical on Advanced Micosoft Excel",
    credit_hours: 16
  },
  {
    workshop: "Office Administration",
    module: "SIP - Computer Skills",
    topic: "Pakej C: Microsoft Word, Excel, Powerpoint – Advanced level",
    subtopic: "Theory and Practical on Advanced Micosoft PowerPoint",
    credit_hours: 12
  },
  {
    workshop: "Office Administration",
    module: "SIP - Office Administration",
    topic: "Pakej A - Office administration : Incoming & Outgoing Communication",
    subtopic: "Identify incoming & Outgoing Communications Requirement",
    credit_hours: 12
  },
  {
    workshop: "Office Administration",
    module: "SIP - Office Administration",
    topic: "Pakej A - Office administration : Incoming & Outgoing Communication",
    subtopic: "Process incoming & Outgoing Communication",
    credit_hours: 12
  },
  {
    workshop: "Office Administration",
    module: "SIP - Office Administration",
    topic: "Pakej A - Office administration : Incoming & Outgoing Communication",
    subtopic: "Record incoming & Outgoing Communication",
    credit_hours: 16
  },
  {
    workshop: "Office Administration",
    module: "SIP - Office Administration",
    topic: "Pakej B- Office Administration :Filing Administration & Meeting Management",
    subtopic: "Prepare Organizational Filing System Requirement",
    credit_hours: 6
  },
  {
    workshop: "Office Administration",
    module: "SIP - Office Administration",
    topic: "Pakej B- Office Administration :Filing Administration & Meeting Management",
    subtopic: "Carry Out Filing Activities",
    credit_hours: 10
  },
  {
    workshop: "Office Administration",
    module: "SIP - Office Administration",
    topic: "Pakej B- Office Administration :Filing Administration & Meeting Management",
    subtopic: "Record Filing Activities",
    credit_hours: 8
  },
  {
    workshop: "Office Administration",
    module: "SIP - Office Administration",
    topic: "Pakej B- Office Administration :Filing Administration & Meeting Management",
    subtopic: "Identify Meeting Preparation Requirement",
    credit_hours: 6
  },
  {
    workshop: "Office Administration",
    module: "SIP - Office Administration",
    topic: "Pakej B- Office Administration :Filing Administration & Meeting Management",
    subtopic: "Carry Out Meeting Preparation Assistance",
    credit_hours: 10
  },
  {
    workshop: "Office Administration",
    module: "SIP - Office Administration",
    topic: "Pakej C - Office Administration : Basic Data Entry+Computer Skill",
    subtopic: "Prepare Basic Data Entry Eequirements",
    credit_hours: 8
  },
  {
    workshop: "Office Administration",
    module: "SIP - Office Administration",
    topic: "Pakej C - Office Administration : Basic Data Entry+Computer Skill",
    subtopic: "Perform Basic Data Entry",
    credit_hours: 32
  },
  {
    workshop: "Office Administration",
    module: "SKM - Office Administration",
    topic: "Front Office Reception",
    subtopic: "Attend to Visitor (Knowledge & Skill)",
    credit_hours: 34
  },
  {
    workshop: "Office Administration",
    module: "SKM - Office Administration",
    topic: "Front Office Reception",
    subtopic: "Handle Office Incoming/ Outgoing Communications (Knowledge & Skill)",
    credit_hours: 28
  },
  {
    workshop: "Office Administration",
    module: "SKM - Office Administration",
    topic: "Front Office Reception",
    subtopic: "Handle Office Incoming/ Outgoing Items (Knowledge & Skill)",
    credit_hours: 28
  },
  {
    workshop: "Office Administration",
    module: "SKM - Office Administration",
    topic: "Front Office Reception",
    subtopic: "Record Front Office Reception Activities (Knowledge & Skill)",
    credit_hours: 20
  }
],




  
  
};

// const getProgressSchema = (modules) => ({
//   title: "Vocational Competency Report",

//   actions: [
//     { type: "back", label: "Back" },
//     { type: "clear", label: "Clear" },
//     { type: "save", label: "Save" },
//   ],

//   sections: [
//     {
//       title: "Client Details",

//       fields: [
       
//         {
//           type: "single-select",
//           name: "training_center",
//           label: "Training Center",
//           options: [
//             { label: "Select Centre", value: "" },
//             { label: "PRP Centre A", value: "centre_a" },
//             { label: "PRP Centre B", value: "centre_b" },
//           ],
//         },
//         {
//           type: "select",
//           name: "workshop",
//           label: "Workshop",
//           options: WORKSHOP_OPTIONS,
//         },
//         {
//           type: "input",
//           name: "total_hours",
//           label: "Total Hours",
//           disabled: true,
//         },
//       ],
//     },

//     {
//       title: "Vocational Competency",

//       fields: [
//         {
//           type: "grid-table-flat",
//           name: "competency",
//           headers: ["Module", "Topic", "Hours", "Training"],
//           headerOptions: {
//             Training: ["1", "2", "3", "4", "5"],
//           },
//           asRadio: {
//             Training: true,
//           },
//           showRowLabel: false,
//           // Column configurations to ensure read-only styling
//           columnsConfig: {
//             Module: { readOnly: true, type: "label" },
//             Topic: { readOnly: true, type: "label" },
//             Hours: { readOnly: true, type: "label" }
//           },
//           rows:
//             modules.length > 0
//               ? modules.map((item, idx) => ({
//                   key: String(idx),
//                   // label: item.module || "",
//                 }))
//               : [],
//         },
//       ],
//     },
//   ],
// });

// export default function VocationalProgress({ patient, onBack }) {
//   const [modules, setModules] = useState([]);

//   const schema = getProgressSchema(modules);

//   const [values, setValues] = useState({
//     client_name: patient?.name || "",
//     nric: patient?.nric || "",
//     workshop: "",
//     training_center: "",
//     total_hours: "",
//   });

//   const handleAction = (type) => {
//     switch (type) {
//       case "back":
//         onBack?.();
//         break;

//       case "clear":
//         setModules([]);
//         setValues({
//           client_name: patient?.name || "",
//           nric: patient?.nric || "",
//           workshop: "",
//           training_center: "",
//           total_hours: "",
//         });
//         break;

//       case "save":
//         console.log(values);
//         alert("Vocational Competency Report Saved");
//         break;

//       default:
//         break;
//     }
//   };

// const handleChange = (name, value) => {
//   if (name === "workshop") {
//     const selectedModules = WORKSHOP_MODULES[value] || [];
//     setModules(selectedModules);

//     const flatEntries = {};
//     selectedModules.forEach((item, idx) => {
//       flatEntries[`competency_${idx}_Module`] = item.module;
//       flatEntries[`competency_${idx}_Topic`] = item.topic;
//       flatEntries[`competency_${idx}_Hours`] = String(item.credit_hours);
//       flatEntries[`competency_${idx}_Training`] = "";
//     });

//     setValues((prev) => ({
//       ...prev,
//       ...flatEntries,
//       workshop: value,
//       total_hours: selectedModules.reduce(
//         (sum, item) => sum + item.credit_hours,
//         0
//       ),
//     }));

//     return;
//   }

//   setValues((prev) => ({
//     ...prev,
//     [name]: value,
//   }));
// };
//   return (
//     <CommonFormBuilder
//       schema={schema}
//       values={values}
//       onChange={handleChange}
//       onAction={handleAction}
//     />
//   );
// }


const getProgressSchema = (modules) => {
  // Check if at least one module item has a non-empty subtopic
  const hasSubtopics = modules.some(
    (item) => item.subtopic && item.subtopic.trim() !== ""
  );

  // Exclude 'Module' from headers since it will now act as the Row Label
  const headers = hasSubtopics
    ? ["Topic", "Subtopic", "Hours", "Training"]
    : ["Topic", "Hours", "Training"];

  // Column configurations for read-only fields
  const columnsConfig = {
    Topic: { readOnly: true, type: "label" },
    Hours: { readOnly: true, type: "label" },
  };

  if (hasSubtopics) {
    columnsConfig.Subtopic = { readOnly: true, type: "label" };
  }

  return {
    title: "Vocational Competency Report",

    actions: [
      { type: "back", label: "Back" },
      { type: "clear", label: "Clear" },
      { type: "save", label: "Save" },
    ],

    sections: [
      {
        fields: [
          {
            type: "single-select",
            name: "training_center",
            label: "Training Center",
            options: [
              { label: "Select Centre", value: "" },
              { label: "PRP Centre A", value: "centre_a" },
              { label: "PRP Centre B", value: "centre_b" },
            ],
          },
          {
            type: "select",
            name: "workshop",
            label: "Workshop",
            options: WORKSHOP_OPTIONS,
          },
          {
            type: "input",
            name: "total_hours",
            label: "Total Hours",
            disabled: true,
          },
        ],
      },

      {
        title: "Vocational Competency",

        fields: [
          {
            type: "grid-table-flat",
            name: "competency",
            headers,
            headerOptions: {
              Training: ["1", "2", "3", "4", "5"],
            },
            asRadio: {
              Training: true,
            },
            showRowLabel: true, // Enabled row labels for Module grouping
            columnsConfig,
            rows:
              modules.length > 0
                ? modules.map((item, idx) => {
                    const rowObj = {
                      key: String(idx),
                      label: item.module || "-", // Module passed here as row label
                      Topic: item.topic || "-",
                      Hours: String(item.credit_hours || 0),
                    };

                    if (hasSubtopics) {
                      rowObj.Subtopic = item.subtopic || "-";
                    }

                    return rowObj;
                  })
                : [],
          },
        ],
      },
    ],
  };
};

export default function VocationalProgress({ patient, onBack }) {
  const [modules, setModules] = useState([]);

  const schema = getProgressSchema(modules);

  const [values, setValues] = useState({
    client_name: patient?.name || "",
    nric: patient?.nric || "",
    workshop: "",
    training_center: "",
    total_hours: "",
  });

  const handleAction = (type) => {
    switch (type) {
      case "back":
        onBack?.();
        break;

      case "clear":
        setModules([]);
        setValues({
          client_name: patient?.name || "",
          nric: patient?.nric || "",
          workshop: "",
          training_center: "",
          total_hours: "",
        });
        break;

      case "save":
        console.log("Form Values:", values);
        alert("Vocational Competency Report Saved");
        break;

      default:
        break;
    }
  };

  const handleChange = (name, value) => {
    if (name === "workshop") {
      const selectedModules = WORKSHOP_MODULES[value] || [];
      setModules(selectedModules);

      const flatEntries = {};
      selectedModules.forEach((item, idx) => {
        flatEntries[`competency_${idx}_Module`] = item.module || "";
        flatEntries[`competency_${idx}_Topic`] = item.topic || "";
        if (item.subtopic) {
          flatEntries[`competency_${idx}_Subtopic`] = item.subtopic;
        }
        flatEntries[`competency_${idx}_Hours`] = String(item.credit_hours || 0);
        flatEntries[`competency_${idx}_Training`] = "";
      });

      setValues((prev) => ({
        ...prev,
        ...flatEntries,
        workshop: value,
        total_hours: selectedModules.reduce(
          (sum, item) => sum + (item.credit_hours || 0),
          0
        ),
      }));

      return;
    }

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 return (
    <div className="vocational-progress-container">
      {/* Patient Card Component */}
      {patient && <PatientCard patient={patient} />}

      {/* Form Builder */}
      <CommonFormBuilder
        schema={schema}
        values={values}
        onChange={handleChange}
        onAction={handleAction}
      />
    </div>
  );
}