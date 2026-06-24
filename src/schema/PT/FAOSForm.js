const SCHEMA = {
  "title": "Foot and Ankle Outcome Score (FAOS)",
  "sections": [
    {
      "fields": [
        {
          "type": "label",
          "label": "Instructions: This survey asks for your opinion about your foot/ankle. Answer each question by ticking the appropriate box (only one box for each question). If you are uncertain about how to answer a question, please give the best answer you can."
        },
        {
          "type": "accordion",
          "name": "faos_sym_acc",
          "label": "I. Symptoms",
          "defaultOpen": true,
          "children": [
            {
              "type": "label",
              "label": "Answer these questions thinking of your foot/ankle symptoms during the last week."
            },
            {
              "type": "radio",
              "name": "faos_s1",
              "label": "S1. Do you have swelling in your foot/ankle?",
              "labelAbove": true,
              "options": [
                {
                  "label": "Never",
                  "value": "0"
                },
                {
                  "label": "Rarely",
                  "value": "1"
                },
                {
                  "label": "Sometimes",
                  "value": "2"
                },
                {
                  "label": "Often",
                  "value": "3"
                },
                {
                  "label": "Always",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_s2",
              "label": "S2. Do you feel grinding, hear clicking, or any other type of noise when your foot/ankle moves?",
              "labelAbove": true,
              "options": [
                {
                  "label": "Never",
                  "value": "0"
                },
                {
                  "label": "Rarely",
                  "value": "1"
                },
                {
                  "label": "Sometimes",
                  "value": "2"
                },
                {
                  "label": "Often",
                  "value": "3"
                },
                {
                  "label": "Always",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_s3",
              "label": "S3. Does your foot/ankle catch or hang up when moving?",
              "labelAbove": true,
              "options": [
                {
                  "label": "Never",
                  "value": "0"
                },
                {
                  "label": "Rarely",
                  "value": "1"
                },
                {
                  "label": "Sometimes",
                  "value": "2"
                },
                {
                  "label": "Often",
                  "value": "3"
                },
                {
                  "label": "Always",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_s4",
              "label": "S4. Can you straighten your foot/ankle fully?",
              "labelAbove": true,
              "options": [
                {
                  "label": "Always",
                  "value": "0"
                },
                {
                  "label": "Often",
                  "value": "1"
                },
                {
                  "label": "Sometimes",
                  "value": "2"
                },
                {
                  "label": "Rarely",
                  "value": "3"
                },
                {
                  "label": "Never",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_s5",
              "label": "S5. Can you bend your foot/ankle fully?",
              "labelAbove": true,
              "options": [
                {
                  "label": "Always",
                  "value": "0"
                },
                {
                  "label": "Often",
                  "value": "1"
                },
                {
                  "label": "Sometimes",
                  "value": "2"
                },
                {
                  "label": "Rarely",
                  "value": "3"
                },
                {
                  "label": "Never",
                  "value": "4"
                }
              ]
            },
            {
              "type": "label",
              "label": "Stiffness is a sensation of restriction or slowness in the ease with which you move your foot/ankle joint."
            },
            {
              "type": "radio",
              "name": "faos_s6",
              "label": "S6. How severe is your foot/ankle joint stiffness after first wakening in the morning?",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_s7",
              "label": "S7. How severe is your foot/ankle joint stiffness after sitting, lying, or resting later in the day?",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            // {
            //   "type": "custom",
            //   "name": "faos_sym_score"
            // }
          ]
        },
        {
          "type": "accordion",
          "name": "faos_pain_acc",
          "label": "II. Pain",
          "defaultOpen": true,
          "children": [
            {
              "type": "radio",
              "name": "faos_p1",
              "label": "P1. How often do you experience foot/ankle pain?",
              "labelAbove": true,
              "options": [
                {
                  "label": "Never",
                  "value": "0"
                },
                {
                  "label": "Monthly",
                  "value": "1"
                },
                {
                  "label": "Weekly",
                  "value": "2"
                },
                {
                  "label": "Daily",
                  "value": "3"
                },
                {
                  "label": "Always",
                  "value": "4"
                }
              ]
            },
            {
              "type": "subheading",
              "label": "What amount of foot/ankle pain have you experienced the last week during the following activities?"
            },
            {
              "type": "radio",
              "name": "faos_p2",
              "label": "P2. Twisting/pivoting on your foot/ankle",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_p3",
              "label": "P3. Straightening foot/ankle fully",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_p4",
              "label": "P4. Bending foot/ankle fully",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_p5",
              "label": "P5. Walking on a flat surface",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_p6",
              "label": "P6. Going up or down stairs",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_p7",
              "label": "P7. At night while in bed",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_p8",
              "label": "P8. Sitting or lying",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_p9",
              "label": "P9. Standing upright",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            // {
            //   "type": "custom",
            //   "name": "faos_pain_score"
            // }
          ]
        },
        {
          "type": "accordion",
          "name": "faos_adl_acc",
          "label": "III. Function, Daily Living",
          "defaultOpen": false,
          "children": [
            {
              "type": "label",
              "label": "This section describes your ability to move around and to look after yourself. For each of the following activities, please indicate the degree of difficulty you have experienced in the last week due to your foot/ankle."
            },
            {
              "type": "radio",
              "name": "faos_a1",
              "label": "A1. Descending stairs",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_a2",
              "label": "A2. Ascending stairs",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_a3",
              "label": "A3. Rising from sitting",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_a4",
              "label": "A4. Standing",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_a5",
              "label": "A5. Bending to the floor/pick up an object",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_a6",
              "label": "A6. Walking on a flat surface",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_a7",
              "label": "A7. Getting in/out of car",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_a8",
              "label": "A8. Going shopping",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_a9",
              "label": "A9. Putting on socks/stockings",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_a10",
              "label": "A10. Rising from bed",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_a11",
              "label": "A11. Taking off socks/stockings",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_a12",
              "label": "A12. Lying in bed (turning over, maintaining foot/ankle position)",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_a13",
              "label": "A13. Getting in/out of bath",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_a14",
              "label": "A14. Sitting",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_a15",
              "label": "A15. Getting on/off toilet",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_a16",
              "label": "A16. Heavy domestic duties (moving heavy boxes, scrubbing floors, etc)",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_a17",
              "label": "A17. Light domestic duties (cooking, dusting, etc)",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            // {
            //   "type": "custom",
            //   "name": "faos_adl_score"
            // }
          ]
        },
        {
          "type": "accordion",
          "name": "faos_sp_acc",
          "label": "IV. Function, Sports and Recreational Activities",
          "defaultOpen": false,
          "children": [
            {
              "type": "label",
              "label": "This section describes your ability to be active on a higher level. For each of the following activities, please indicate the degree of difficulty you have experienced in the last week due to your foot/ankle."
            },
            {
              "type": "radio",
              "name": "faos_sp1",
              "label": "SP1. Squatting",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_sp2",
              "label": "SP2. Running",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_sp3",
              "label": "SP3. Jumping",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_sp4",
              "label": "SP4. Twisting/pivoting on your injured foot/ankle",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_sp5",
              "label": "SP5. Kneeling",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            // {
            //   "type": "custom",
            //   "name": "faos_sp_score"
            // }
          ]
        },
        {
          "type": "accordion",
          "name": "faos_qol_acc",
          "label": "V. Quality of Life",
          "defaultOpen": false,
          "children": [
            {
              "type": "radio",
              "name": "faos_q1",
              "label": "Q1. How often are you aware of your foot/ankle problem?",
              "labelAbove": true,
              "options": [
                {
                  "label": "Never",
                  "value": "0"
                },
                {
                  "label": "Monthly",
                  "value": "1"
                },
                {
                  "label": "Weekly",
                  "value": "2"
                },
                {
                  "label": "Daily",
                  "value": "3"
                },
                {
                  "label": "Constantly",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_q2",
              "label": "Q2. Have you modified your lifestyle to avoid activities potentially damaging to your foot/ankle?",
              "labelAbove": true,
              "options": [
                {
                  "label": "Not at all",
                  "value": "0"
                },
                {
                  "label": "Mildly",
                  "value": "1"
                },
                {
                  "label": "Moderately",
                  "value": "2"
                },
                {
                  "label": "Severely",
                  "value": "3"
                },
                {
                  "label": "Totally",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_q3",
              "label": "Q3. How much are you troubled with lack of confidence in your foot/ankle?",
              "labelAbove": true,
              "options": [
                {
                  "label": "Not at all",
                  "value": "0"
                },
                {
                  "label": "Mildly",
                  "value": "1"
                },
                {
                  "label": "Moderately",
                  "value": "2"
                },
                {
                  "label": "Severely",
                  "value": "3"
                },
                {
                  "label": "Extremely",
                  "value": "4"
                }
              ]
            },
            {
              "type": "radio",
              "name": "faos_q4",
              "label": "Q4. In general, how much difficulty do you have with your foot/ankle?",
              "labelAbove": true,
              "options": [
                {
                  "label": "None",
                  "value": "0"
                },
                {
                  "label": "Mild",
                  "value": "1"
                },
                {
                  "label": "Moderate",
                  "value": "2"
                },
                {
                  "label": "Severe",
                  "value": "3"
                },
                {
                  "label": "Extreme",
                  "value": "4"
                }
              ]
            },
            // {
            //   "type": "custom",
            //   "name": "faos_qol_score"
            // }
          ]
        },
        // {
        //   "type": "custom",
        //   "name": "faos_total"
        // }
      ]
    }
  ]
}