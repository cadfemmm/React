import React, { useEffect, useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import { createWorker } from "tesseract.js";
import { localDateTimeString } from "../../../shared/utils/dateFormatter";
import { TinnitusAdvancedForm,TinnitusAdvancedFormObj } from "../tinnitusassessment";
import { HyperacusisAdvancedForm, HyperacusisAdvancedFormObj } from "../hyperacusisassessment";
import { AuditoryAdvancedForm, AuditoryAdvancedFormObj } from "../auditoryassessment";
import { VestibularAdvancedForm, VestibularAdvancedFormObj } from "../vestibularassessment";
import { Hearingaidtrial } from "../hearingaidtrial";
import { IndustrialAudiometry } from "../industrialaudiometry";
import PatientCard from "../../../shared/cards/PatientCard";
import EquipmentBookingPopup from "./EquipmentBookingPopup";
import { OTOSCOPIC_EXTRACT_URL, API_URL } from "../../../platform/config/api.config";
import api from "../../../shared/api/apiClient";
import { BookAppointmentModal } from "../../book-appointment-modal/BookAppointmentModal";
import { fetchBookingQueue } from "../../book-appointment-modal/bookingQueueService";
import adultIASchemas from "../../../schema/audiology/adultIA";
import followupSchemas from "../../../schema/audiology/followup";
import { ACTIONS_BUTTON } from "../../../schema/actions";
/* ===================== OPTIONS ===================== */

const INTACT_IMPAIRED = [
  { label: "Intact", value: "intact" },
  { label: "Impaired", value: "impaired" }
];

const NORMAL_ABNORMAL = [
  { label: "Normal", value: "normal" },
  { label: "Abnormal", value: "abnormal" }
];

const YES_NO = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" }
];

const IMPAIRED_LOCATION = [
  { label: "Right", value: "right" },
  { label: "Left", value: "left" },
  { label: "Bilateral", value: "bilateral" }
];

const TAB_INITIAL_VALUES = {
  subjective: {},
  objective: {},
  assessment: {},
  plan: {}
};

/* ===================== COMPONENT ===================== */

export default function AudiologyDepartmentAdultPage({ patient, onUpdatePatient, mode, onSubmit, onBack }) {
  const [values,        setValues]        = useState(() => {
    const initial = { subjective: {}, objective: {}, assessment: {}, plan: {} };
    return initial;
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("subjective");
  const [processingOCR, setProcessingOCR] = useState(false);
  const [equipmentOptions, setEquipmentOptions] = useState([]);
  const [equipmentBookingOpen, setEquipmentBookingOpen] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [bookedEquipmentIds, setBookedEquipmentIds] = useState([]);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [bookingQueueRow, setBookingQueueRow] = useState(null);

useEffect(() => {
  const loadBookingQueue = async () => {
    try {
      const data = await fetchBookingQueue({
        department_id: departmentId,
        limit: 100,
      });

      const row = data.rows.find(
        r => r.patient_name === (patient?.full_name || patient?.name)
      );

      setBookingQueueRow(row || null);
    } catch (err) {
      console.error(err);
    }
  };

  if (patient) {
    loadBookingQueue();
  }
}, [patient]);
  const bookingRow = {
    id: bookingQueueRow?.booking_id,
    patient: patient?.full_name || patient?.name || "",
    refId: patient?.referral_id || "",
    department: "Audiology",
    // disciplineCode: "AUD",
    priority: "Medium",
  };
  // console.log("bookingQueueRow", bookingQueueRow);
  // console.log("bookingRow", bookingRow);
  /* --------- Patient History State --------- */
  // const [patientHistory, setPatientHistory] = useState({
  //   past_medical_history: patient?.medical_history || "",
  //   past_family_history: patient?.family_medical_history || "",
  //   alerts_and_allergies: patient?.alerts_and_allergies_history || ""
  // });

  // useEffect(() => {
  //   setPatientHistory({
  //     past_medical_history: patient?.medical_history || "",
  //     past_family_history: patient?.family_medical_history || "",
  //     alerts_and_allergies: patient?.alerts_and_allergies_history || ""
  //   });
  // }, [patient?.id]);

  // useEffect(() => {
  //   if (!patient) return;
  //   const updated = {
  //     ...patient,
  //     medical_history: patientHistory.past_medical_history,
  //     family_medical_history: patientHistory.past_family_history,
  //     alerts_and_allergies_history: patientHistory.alerts_and_allergies
  //   };
  //   localStorage.setItem("patient_" + patient.id, JSON.stringify(updated));
  //   onUpdatePatient?.(updated);
  // }, [patient?.id, patientHistory.past_medical_history, patientHistory.past_family_history, patientHistory.alerts_and_allergies]);

  const today = new Date();
  const formatDate = (dateStr) => {
    if (!dateStr) return "-";
    try { return new Date(dateStr).toLocaleDateString(); } catch { return "-"; }
  };
  const calculateDuration = (onset) => {
    if (!onset) return "-";
    const onsetDate = new Date(onset);
    if (isNaN(onsetDate)) return "-";
    const diff = today - onsetDate;
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
    if (months < 1) return "< 1 month";
    if (months < 12) return `${months} month${months > 1 ? "s" : ""}`;
    const years = Math.floor(months / 12);
    const rem = months % 12;
    return rem > 0 ? `${years}y ${rem}m` : `${years} year${years > 1 ? "s" : ""}`;
  };

  /* ---------------- STORAGE ---------------- */
  const storageKey = patient
    ? `audiology_assessment_draft_${patient.id}`
    : null;

  useEffect(() => {
    if (!storageKey) return;
    const saved = localStorage.getItem(storageKey);
    const savedValues = saved ? (JSON.parse(saved).values || {}) : {};
    
    // Always merge patient data, taking precedence for read-only fields
    if (patient) {
      setValues({
        ...savedValues,
      });
    } else {
      setValues(savedValues);
    }
  }, [storageKey, patient]);

  /* ---------------- EQUIPMENT LIST FROM API ---------------- */
  const departmentId = "5d5a96c5-4d06-41f4-8a66-9f8bccbc0f98";
  useEffect(() => {
    const fetchEquipmentList = async () => {
      try {
        let page = 1;
        let hasNext = true;
        let allEquipment = [];

        while (hasNext) {
          const response = await api.get(
            `${API_URL.EQUIPMENT_LIST}?department_id=${departmentId}&page=${page}`
          );

          allEquipment = [
            ...allEquipment,
            ...(response?.data?.data || [])
          ];

          hasNext = response?.data?.meta?.has_next;
          page++;
        }

        const options = allEquipment.map(item => ({
          label: item.equipment_name,
          value: item.id,
          status: item.status,
          equipment_code: item.equipment_code,
          department_name: item.department_name,
          raw: item,
        }));

        setEquipmentOptions(options);

        console.log("Total Equipment:", options.length);
      } catch (error) {
        console.error("Equipment list fetch failed:", error);
      }
    };

    if (departmentId) {
      fetchEquipmentList();
    }
  }, [departmentId]);

  // Extract tympanometry values from OCR text
  const extractTympanometryValues = (text) => {
    const values = {};
    
    console.log('OCR Text extracted:', text);
    console.log('OCR Text length:', text.length);
    
    // Split text into lines for better analysis
    const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    console.log('OCR Lines:', lines);
    
    // Strategy 1: Look for explicit labels with values
    // Use pattern that captures decimals properly: [\d]+\.[\d]+ for decimals, [\d]+ for integers
    const volumePatterns = [
      /Volume[:\s]*([\d]+\.[\d]+|[\d]+)\s*ml/i,
      /Volume[:\s]*([\d]+\.[\d]+|[\d]+)ml/i,
      /Vol[:\s]*([\d]+\.[\d]+|[\d]+)\s*ml/i,
      /Vol[:\s]*([\d]+\.[\d]+|[\d]+)ml/i
    ];
    
    for (const pattern of volumePatterns) {
      const match = text.match(pattern);
      if (match) {
        values.volume = match[1]; // Keep as string to preserve exact decimal
        console.log('Extracted Volume (label method):', values.volume);
        break;
      }
    }
    
    // Strategy 2: Look for decimal numbers near "ml" (for Volume and Compliance)
    // Extract ml values once to use for both Volume and Compliance
    // Use pattern that properly captures decimals: [\d]+\.[\d]+ for decimals, [\d]+ for integers
    const mlMatches = text.match(/([\d]+\.[\d]+|[\d]+)\s*ml/gi);
    let mlNumbers = [];
    
    if (mlMatches) {
      console.log('Found ml values:', mlMatches);
      // Extract numbers from matches - preserve original string format
      mlNumbers = mlMatches.map(m => {
        // Match the number part (decimal or integer)
        const numMatch = m.match(/([\d]+\.[\d]+|[\d]+)/);
        if (numMatch) {
          const numValue = parseFloat(numMatch[1]);
          return numValue > 0 && numValue < 10 ? { str: numMatch[1], num: numValue } : null;
        }
        return null;
      }).filter(n => n !== null); // Volume/Compliance are typically 0-10
      
      if (mlNumbers.length > 0) {
        // Sort for easier processing (by numeric value)
        mlNumbers.sort((a, b) => b.num - a.num);
        console.log('Sorted ml numbers:', mlNumbers.map(n => n.str));
      }
    }
    
    if (!values.volume && mlMatches && mlMatches.length > 0) {
      // Volume is usually the larger value (typically 0.5-2.0), Compliance is smaller (0.1-1.0)
      // Look for context clues - if "Volume" appears before a number, use that
      const volumeIndex = text.toLowerCase().indexOf('volume');
      
      if (volumeIndex !== -1) {
        // Find the number closest to "Volume" text - preserve exact decimal
        const textAfterVolume = text.substring(volumeIndex);
        const volumeNumMatch = textAfterVolume.match(/([\d]+\.[\d]+|[\d]+)\s*ml/i);
        if (volumeNumMatch) {
          values.volume = volumeNumMatch[1]; // Keep as string to preserve decimals
          console.log('Extracted Volume (context method):', values.volume);
        }
      } else if (mlNumbers && mlNumbers.length > 0) {
        // If no "Volume" label, find the larger decimal value
        // mlNumbers is already sorted descending
        const largerValue = mlNumbers[0];
        if (largerValue.num >= 0.5 && largerValue.num <= 2.0) {
          values.volume = largerValue.str; // Use original string to preserve decimals
          console.log('Extracted Volume (fallback - larger value):', values.volume);
        }
      }
    }
    
    // Extract Pressure - try multiple patterns
    const pressurePatterns = [
      /Pressure[:\s]*([\d.-]+)\s*daPa/i,
      /Pressure[:\s]*([\d.-]+)daPa/i,
      /Press[:\s]*([\d.-]+)\s*daPa/i,
      /Press[:\s]*([\d.-]+)daPa/i
    ];
    
    for (const pattern of pressurePatterns) {
      const match = text.match(pattern);
      if (match) {
        values.pressure = match[1];
        console.log('Extracted Pressure (label method):', values.pressure);
        break;
      }
    }
    
    // Strategy 2 for Pressure: Look for small numbers near "daPa" (Pressure is typically -200 to 200)
    if (!values.pressure) {
      const daPaMatches = text.match(/([\d.-]+)\s*daPa/gi);
      if (daPaMatches) {
        console.log('Found daPa values:', daPaMatches);
        // Look for the number closest to "Pressure" text
        const pressureIndex = text.toLowerCase().indexOf('pressure');
        if (pressureIndex !== -1) {
          const textAfterPressure = text.substring(pressureIndex);
          const pressureNumMatch = textAfterPressure.match(/([\d.-]+)\s*daPa/i);
          if (pressureNumMatch) {
            values.pressure = pressureNumMatch[1];
            console.log('Extracted Pressure (context method):', values.pressure);
          }
        } else {
          // If no "Pressure" label, take the first small number (not Gradient which is larger)
          for (const match of daPaMatches) {
            const numMatch = match.match(/([\d.-]+)/);
            if (numMatch) {
              const num = parseFloat(numMatch[1]);
              // Pressure is typically small (-200 to 200, can be 0), Gradient is larger (50-200)
              // Exclude common gradient values (77, 81, etc.)
              if (Math.abs(num) <= 200 && num !== 77 && num !== 81 && (Math.abs(num) < 50 || num === 0)) {
                values.pressure = numMatch[1];
                console.log('Extracted Pressure (fallback method):', values.pressure);
                break;
              }
            }
          }
        }
      }
    }
    
    // Extract Compliance - try multiple patterns
    // Use pattern that captures decimals properly
    const compliancePatterns = [
      /Compliance[:\s]*([\d]+\.[\d]+|[\d]+)\s*ml/i,
      /Compliance[:\s]*([\d]+\.[\d]+|[\d]+)ml/i,
      /Comp[:\s]*([\d]+\.[\d]+|[\d]+)\s*ml/i,
      /Comp[:\s]*([\d]+\.[\d]+|[\d]+)ml/i
    ];
    
    for (const pattern of compliancePatterns) {
      const match = text.match(pattern);
      if (match) {
        values.compliance = match[1]; // Keep as string to preserve exact decimal
        console.log('Extracted Compliance (label method):', values.compliance);
        break;
      }
    }
    
    // Strategy 2 for Compliance: Look for decimal numbers near "ml" that aren't Volume
    if (!values.compliance) {
      const complianceIndex = text.toLowerCase().indexOf('compliance');
      if (complianceIndex !== -1) {
        const textAfterCompliance = text.substring(complianceIndex);
        // Match decimal numbers (preserve exact format)
        const complianceNumMatch = textAfterCompliance.match(/([\d]+\.[\d]+|[\d]+)\s*ml/i);
        if (complianceNumMatch) {
          values.compliance = complianceNumMatch[1]; // Keep as string to preserve decimals
          console.log('Extracted Compliance (context method):', values.compliance);
        }
      } else if (mlNumbers && mlNumbers.length >= 1) {
        // If we have ml values, find the one that's not Volume
        // Compliance is typically smaller (0.1-1.0)
        // Sort ascending to prioritize smaller values (compliance)
        const sortedAscending = [...mlNumbers].sort((a, b) => a.num - b.num);
        
        for (const mlValue of sortedAscending) {
          if (mlValue.num >= 0.1 && mlValue.num <= 1.0) {
            // Check if this isn't the volume we already found
            const volumeNum = values.volume ? parseFloat(values.volume) : null;
            if (!volumeNum || Math.abs(volumeNum - mlValue.num) > 0.1) {
              values.compliance = mlValue.str; // Use original string to preserve decimals
              console.log('Extracted Compliance (fallback method):', values.compliance);
              break;
            }
          }
        }
        
        // If still not found and we have at least 2 ml values, the smaller one is likely compliance
        if (!values.compliance && mlNumbers.length >= 2) {
          const volumeNum = values.volume ? parseFloat(values.volume) : null;
          for (const mlValue of sortedAscending) {
            if (mlValue.num >= 0.1 && mlValue.num < 1.0) {
              if (!volumeNum || Math.abs(volumeNum - mlValue.num) > 0.05) {
                values.compliance = mlValue.str;
                console.log('Extracted Compliance (secondary fallback):', values.compliance);
                break;
              }
            }
          }
        }
      }
    }
    
    // Fallback: Try to extract from common patterns in tympanometry reports
    // Sometimes values appear as: "0.74 ml" on a line with "Volume" nearby
    if (!values.volume || !values.pressure || !values.compliance) {
      // Look for lines that might contain the values
      for (const line of lines) {
        // Volume pattern: decimal number with ml
        if (!values.volume && /[\d.]+.*ml/i.test(line)) {
          // Try to find volume label first
          if (/volume/i.test(line)) {
            const volMatch = line.match(/([\d]+\.[\d]+|[\d]+)\s*ml/i);
            if (volMatch && parseFloat(volMatch[1]) >= 0.1 && parseFloat(volMatch[1]) < 5) {
              values.volume = volMatch[1]; // Keep as string to preserve exact decimal
              console.log('Extracted Volume (line scan with label):', values.volume);
            }
          } else if (!/compliance/i.test(line)) {
            // If no compliance label, check if it's a volume value
            const volMatch = line.match(/([\d]+\.[\d]+|[\d]+)\s*ml/i);
            if (volMatch) {
              const volValue = parseFloat(volMatch[1]);
              // Volume is typically 0.5-2.0 and larger than compliance
              if (volValue >= 0.1 && volValue < 5) {
                values.volume = volMatch[1]; // Keep as string to preserve exact decimal
                console.log('Extracted Volume (line scan):', values.volume);
              }
            }
          }
        }
        
        // Pressure pattern: number with daPa (but not Gradient)
        if (!values.pressure && /[\d.-]+.*daPa/i.test(line) && !/gradient/i.test(line)) {
          const pressMatch = line.match(/([\d.-]+)\s*daPa/i);
          if (pressMatch && Math.abs(parseFloat(pressMatch[1])) < 200) {
            values.pressure = pressMatch[1];
            console.log('Extracted Pressure (line scan):', values.pressure);
          }
        }
        
        // Compliance pattern: smaller decimal with ml
        // Look for compliance even if volume is on the same line
        if (!values.compliance && /[\d.]+.*ml/i.test(line)) {
          // Try to find compliance label first
          if (/compliance/i.test(line)) {
            const compMatch = line.match(/([\d]+\.[\d]+|[\d]+)\s*ml/i);
            if (compMatch && parseFloat(compMatch[1]) >= 0.1 && parseFloat(compMatch[1]) <= 1.0) {
              values.compliance = compMatch[1]; // Keep as string to preserve exact decimal
              console.log('Extracted Compliance (line scan with label):', values.compliance);
            }
          } else if (!/volume/i.test(line)) {
            // If no volume label, check if it's a compliance value
            const compMatch = line.match(/([\d]+\.[\d]+|[\d]+)\s*ml/i);
            if (compMatch) {
              const compValue = parseFloat(compMatch[1]);
              // Compliance is typically 0.1-1.0 and smaller than volume
              const volumeNum = values.volume ? parseFloat(values.volume) : null;
              if (compValue >= 0.1 && compValue <= 1.0 && (!volumeNum || compValue < volumeNum)) {
                values.compliance = compMatch[1]; // Keep as string to preserve exact decimal
                console.log('Extracted Compliance (line scan):', values.compliance);
              }
            }
          }
        }
      }
    }
    
    // Last resort: Look for any decimal numbers in typical tympanometry ranges
    // This is a fallback when OCR doesn't read labels clearly
    if (!values.volume || !values.pressure || !values.compliance) {
      // Find all decimal numbers in the text - preserve original strings
      const allDecimals = text.match(/[\d]+\.[\d]+/g) || [];
      const allIntegers = text.match(/\b[\d]+\b/g) || [];
      
      // Create objects with both string and numeric values
      const allNumberObjects = [
        ...allDecimals.map(str => ({ str, num: parseFloat(str) })),
        ...allIntegers.map(str => ({ str, num: parseFloat(str) }))
      ];
      
      console.log('All numbers found in text:', allNumberObjects.map(n => n.str));
      
      // Volume: typically 0.5-2.0 ml (Ear Canal Volume)
      if (!values.volume) {
        const volumeCandidates = allNumberObjects.filter(n => n.num >= 0.5 && n.num <= 2.0);
        if (volumeCandidates.length > 0) {
          // Take the one closest to typical volume range (0.7-1.0)
          const bestVolume = volumeCandidates.reduce((best, curr) => {
            const bestDist = Math.abs(best.num - 0.75);
            const currDist = Math.abs(curr.num - 0.75);
            return currDist < bestDist ? curr : best;
          });
          values.volume = bestVolume.str; // Use original string to preserve decimals
          console.log('Extracted Volume (number scan fallback):', values.volume);
        }
      }
      
      // Compliance: typically 0.1-1.0 ml (Static Compliance) - includes 0.44
      if (!values.compliance) {
        const complianceCandidates = allNumberObjects.filter(n => n.num >= 0.1 && n.num <= 1.0);
        if (complianceCandidates.length > 0) {
          // Exclude the volume value if we found it
          const volumeNum = values.volume ? parseFloat(values.volume) : null;
          const filteredCandidates = complianceCandidates.filter(n => 
            !volumeNum || Math.abs(volumeNum - n.num) > 0.1
          );
          
          if (filteredCandidates.length > 0) {
            // Take the smaller value (Compliance is typically smaller than Volume)
            const bestCompliance = filteredCandidates.reduce((best, curr) => 
              curr.num < best.num ? curr : best
            );
            values.compliance = bestCompliance.str; // Use original string to preserve decimals
            console.log('Extracted Compliance (number scan fallback):', values.compliance);
          }
        }
      }
      
      // Pressure: typically -200 to 200 daPa (Peak Pressure) - can be 0
      if (!values.pressure) {
        const pressureCandidates = allNumberObjects.filter(n => 
          Math.abs(n.num) >= 0 && Math.abs(n.num) < 200 && n.num !== 77 && n.num !== 81
        );
        if (pressureCandidates.length > 0) {
          // Take the smallest absolute value (pressure is usually close to 0, can be 0)
          const bestPressure = pressureCandidates.reduce((best, curr) => {
            return Math.abs(curr.num) < Math.abs(best.num) ? curr : best;
          });
          values.pressure = bestPressure.str; // Use original string to preserve exact value
          console.log('Extracted Pressure (number scan fallback):', values.pressure);
        }
      }
    }
    
    // Final validation and fallback - if we still don't have values, try very aggressive extraction
    if (!values.volume || !values.compliance) {
      console.log('=== AGGRESSIVE FALLBACK EXTRACTION ===');
      // Find ALL decimal numbers with ml in the entire text
      const allMlPattern = text.match(/([\d]+\.[\d]+|[\d]+)\s*ml/gi);
      if (allMlPattern) {
        console.log('All ml patterns found:', allMlPattern);
        const mlValues = allMlPattern.map(m => {
          const numMatch = m.match(/([\d]+\.[\d]+|[\d]+)/);
          return numMatch ? { str: numMatch[1], num: parseFloat(numMatch[1]) } : null;
        }).filter(n => n !== null && n.num > 0 && n.num < 10);
        
        console.log('Processed ml values:', mlValues);
        
        // If we have 2 ml values and volume is missing, the larger is likely volume
        if (!values.volume && mlValues.length >= 1) {
          mlValues.sort((a, b) => b.num - a.num);
          const candidate = mlValues[0];
          if (candidate.num >= 0.5 && candidate.num <= 2.0) {
            values.volume = candidate.str;
            console.log('AGGRESSIVE: Extracted Volume:', values.volume);
          }
        }
        
        // If we have ml values and compliance is missing, find the smaller one
        if (!values.compliance && mlValues.length >= 1) {
          mlValues.sort((a, b) => a.num - b.num);
          const volumeNum = values.volume ? parseFloat(values.volume) : null;
          for (const candidate of mlValues) {
            if (candidate.num >= 0.1 && candidate.num <= 1.0) {
              if (!volumeNum || Math.abs(volumeNum - candidate.num) > 0.05) {
                values.compliance = candidate.str;
                console.log('AGGRESSIVE: Extracted Compliance:', values.compliance);
                break;
              }
            }
          }
        }
      }
    }
    
    // Final check for pressure - make sure we're not picking gradient
    if (!values.pressure) {
      const allDaPaPattern = text.match(/([\d.-]+)\s*daPa/gi);
      if (allDaPaPattern) {
        console.log('All daPa patterns found:', allDaPaPattern);
        const daPaValues = allDaPaPattern.map(m => {
          const numMatch = m.match(/([\d.-]+)/);
          return numMatch ? { str: numMatch[1], num: parseFloat(numMatch[1]) } : null;
        }).filter(n => n !== null);
        
        // Find the one closest to "Pressure" text, or the smallest non-gradient value
        const pressureIndex = text.toLowerCase().indexOf('pressure');
        if (pressureIndex !== -1) {
          const textAfterPressure = text.substring(pressureIndex, pressureIndex + 100);
          const pressureMatch = textAfterPressure.match(/([\d.-]+)\s*daPa/i);
          if (pressureMatch) {
            values.pressure = pressureMatch[1];
            console.log('AGGRESSIVE: Extracted Pressure from context:', values.pressure);
          }
        } else {
          // Take smallest absolute value that's not a gradient (77, 81, etc.)
          const validPressures = daPaValues.filter(v => 
            Math.abs(v.num) <= 200 && v.num !== 77 && v.num !== 81 && (Math.abs(v.num) < 50 || v.num === 0)
          );
          if (validPressures.length > 0) {
            const best = validPressures.reduce((best, curr) => 
              Math.abs(curr.num) < Math.abs(best.num) ? curr : best
            );
            values.pressure = best.str;
            console.log('AGGRESSIVE: Extracted Pressure (smallest):', values.pressure);
          }
        }
      }
    }
    
    console.log('Final extracted values:', values);
    console.log('Volume type:', typeof values.volume, 'Value:', values.volume);
    console.log('Pressure type:', typeof values.pressure, 'Value:', values.pressure);
    console.log('Compliance type:', typeof values.compliance, 'Value:', values.compliance);
    return values;
  };

  // Process tympanometry image with OCR
  const processTympanometryImage = async (file, earSide) => {
    console.log(`Starting OCR processing for ${earSide} ear...`);
    setProcessingOCR(true);
    try {
      console.log('Creating Tesseract worker...');
      const worker = await createWorker('eng');
      
      // Configure OCR for better text recognition
      await worker.setParameters({
        tessedit_char_whitelist: '0123456789.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz:mlPaGradientVolumePressureCompliance ',
        tessedit_pageseg_mode: '6', // Assume uniform block of text
      });
      
      console.log('Recognizing text from image (first attempt)...');
      let { data: { text } } = await worker.recognize(file);
      console.log('First OCR attempt, extracted text length:', text.length);
      
      // If first attempt doesn't find values, try with different settings
      if (!text.match(/Volume|Pressure|Compliance|[\d]+\.[\d]+\s*ml|[\d.-]+\s*daPa/i)) {
        console.log('Trying OCR with different page segmentation mode...');
        await worker.setParameters({
          tessedit_pageseg_mode: '11', // Sparse text
        });
        const result2 = await worker.recognize(file);
        if (result2.data.text.length > text.length) {
          text = result2.data.text;
          console.log('Second OCR attempt found more text, length:', text.length);
        }
      }
      
      await worker.terminate();
      console.log('OCR completed, final extracted text length:', text.length);
      
      const extracted = extractTympanometryValues(text);
      console.log('=== EXTRACTION RESULTS ===');
      console.log('Extracted values:', extracted);
      console.log('Volume:', extracted.volume, 'Type:', typeof extracted.volume);
      console.log('Pressure:', extracted.pressure, 'Type:', typeof extracted.pressure);
      console.log('Compliance:', extracted.compliance, 'Type:', typeof extracted.compliance);
      console.log('========================');
      
      if (extracted.volume || extracted.pressure || extracted.compliance) {
        setValues(v => {
          const updates = {};
          
          // Update Ear Canal Volume (ecv)
          if (extracted.volume) {
            const volumeStr = String(extracted.volume); // Ensure it's a string
            updates.ecv = {
              ...(v.ecv || {}),
              [`ecv_${earSide === 'right' ? 'r' : 'l'}`]: volumeStr
            };
            console.log(`Setting ecv_${earSide === 'right' ? 'r' : 'l'} to:`, volumeStr, 'Type:', typeof volumeStr);
          }
          
          // Update Peak Pressure (peak_pressure)
          if (extracted.pressure) {
            const pressureStr = String(extracted.pressure); // Ensure it's a string
            updates.peak_pressure = {
              ...(v.peak_pressure || {}),
              [`peak_pressure_${earSide === 'right' ? 'r' : 'l'}`]: pressureStr
            };
            console.log(`Setting peak_pressure_${earSide === 'right' ? 'r' : 'l'} to:`, pressureStr, 'Type:', typeof pressureStr);
          }
          
          // Update Static Compliance (static_compliance)
          if (extracted.compliance) {
            const complianceStr = String(extracted.compliance); // Ensure it's a string
            updates.static_compliance = {
              ...(v.static_compliance || {}),
              [`static_compliance_${earSide === 'right' ? 'r' : 'l'}`]: complianceStr
            };
            console.log(`Setting static_compliance_${earSide === 'right' ? 'r' : 'l'} to:`, complianceStr, 'Type:', typeof complianceStr);
          }
          
          if (Object.keys(updates).length > 0) {
            console.log('Updating values:', updates);
            console.log('Current values before update:', v);
            const currentTab = v[activeTab] || {};
            const newValues = {
              ...v,
              [activeTab]: {
                ...currentTab,
                ...updates
              }
            };
            console.log('New values after update:', newValues);
            
            // Show success message
            const extractedCount = Object.keys(extracted).filter(k => extracted[k]).length;
            setTimeout(() => {
              alert(`Successfully extracted ${extractedCount} value(s) from ${earSide} ear tympanometry image:\n${extracted.volume ? `Volume: ${extracted.volume} ml\n` : ''}${extracted.pressure ? `Pressure: ${extracted.pressure} daPa\n` : ''}${extracted.compliance ? `Compliance: ${extracted.compliance} ml` : ''}`);
            }, 100);
            
            return newValues;
          }
          
          console.log('No updates to apply');
          return v;
        });
      } else {
        console.warn('No values extracted from image');
        console.warn('OCR Text was:', text);
        console.warn('OCR Text length:', text.length);
        alert(`Could not extract values from the image.\n\nOCR found text: "${text.substring(0, 200)}..."\n\nPlease check the browser console (F12) for detailed logs or enter values manually.`);
      }
    } catch (error) {
      console.error('Error processing tympanometry image:', error);
      alert(`Error processing image: ${error.message}. Please enter values manually.`);
    } finally {
      setProcessingOCR(false);
      console.log('OCR processing completed');
    }
  };

  const AUTO_PROBLEM_PREFIXES = [
    'Ear Infection:', 'Echo or Ear Fullness:', 'Otalgia:', 'Otorrhea:', 'Tinnitus:',
    'Loudness Discomfort:', 'Hearing Difficulties:', 'Communication Difficulties:',
    'Vestibular Symptoms:', 'Duration/Frequency:', 'Triggers:',
    'Audiometry Impressions (Right):', 'Audiometry Impressions (Left):', 'Reliability:'
  ];

  const formatLocationLabel = (v) => {
    if (!v) return '';
    const map = { right: 'Right', left: 'Left', bilateral: 'Bilateral', in_head: 'In the Head' };
    return map[v] || (typeof v === 'string' ? v.charAt(0).toUpperCase() + v.slice(1) : v);
  };

  const updateProblemListFromFormValues = (currentProblemList, v) => {
    const lines = (currentProblemList || '').split('\n').map(l => l.trim()).filter(Boolean);
    const withoutAuto = lines.filter(l => !AUTO_PROBLEM_PREFIXES.some(p => l.startsWith(p)));

    const add = (prefix, val) => { if (val) withoutAuto.push(`${prefix} ${val}`); };

    if (v.ear_infection && v.ear_infection !== 'none') add('Ear Infection:', formatLocationLabel(v.ear_infection));
    if (v.ear_fullness && v.ear_fullness !== 'none') add('Echo or Ear Fullness:', formatLocationLabel(v.ear_fullness));
    if (v.ear_pain && v.ear_pain !== 'none') add('Otalgia:', formatLocationLabel(v.ear_pain));
    if (v.otorrhea && v.otorrhea !== 'none') add('Otorrhea:', formatLocationLabel(v.otorrhea));
    if (v.tinnitus && v.tinnitus !== 'none') add('Tinnitus:', formatLocationLabel(v.tinnitus));
    if (v.loudness_discomfort && v.loudness_discomfort !== 'none') add('Loudness Discomfort:', formatLocationLabel(v.loudness_discomfort));
    if (v.hearing_difficulties && v.hearing_difficulties !== 'none') add('Hearing Difficulties:', formatLocationLabel(v.hearing_difficulties));

    const commLabels = { in_quiet: 'In quiet', in_noise: 'In noise', group: 'Group', telephone: 'Telephone' };
    if (v.communication_difficulties && v.communication_difficulties !== 'none') add('Communication Difficulties:', commLabels[v.communication_difficulties] || v.communication_difficulties);

    const vestLabels = { '1': 'Vertigo', '2': 'Imbalance', '3': 'Dizziness', '4': 'Oscillopsia' };
    if (v.vestibular_symptoms && v.vestibular_symptoms !== '0') add('Vestibular Symptoms:', vestLabels[v.vestibular_symptoms] || v.vestibular_symptoms);

    if (v.duration_frequency && String(v.duration_frequency).trim()) add('Duration/Frequency:', String(v.duration_frequency).trim());

    const trigLabels = { '1': 'Positional', '2': 'Head movement', '3': 'Visual stimuli', '4': 'Spontaneous' };
    if (v.triggers && v.triggers !== '0') add('Triggers:', trigLabels[v.triggers] || v.triggers);

    if (v.impression_r && String(v.impression_r).trim()) add('Audiometry Impressions (Right):', String(v.impression_r).trim());
    if (v.impression_l && String(v.impression_l).trim()) add('Audiometry Impressions (Left):', String(v.impression_l).trim());

    if (v.reliability) add('Reliability:', v.reliability);

    return withoutAuto.join('\n').trim();
  };

  const onChange = async (name, value) => {   
    
    // Check if this is a tympanometry file upload
    // Handle both image files and check the name pattern
    const isRightTympanometry = name === 'tympanometry_report_right';
    const isLeftTympanometry = name === 'tympanometry_report_left';
    if (
      name === "otoscopic_report" &&
      value?.data
    ) {
      // console.log("OTOSCOPIC UPLOAD TRIGGERED");

      await handleOtoscopicUpload(value);

      return;
    }
    if ((isRightTympanometry || isLeftTympanometry) && value) {
      // Check if it's a File object
      const isFile = value instanceof File || (value && typeof value === 'object' && value.constructor?.name === 'File');
      const isImage = isFile && (value.type?.startsWith('image/') || value.name?.match(/\.(jpg|jpeg|png|gif|bmp|webp)$/i));
      
      console.log('Tympanometry upload detected:', { name, isFile, isImage, fileType: value?.type, fileName: value?.name });
      
      const patchActiveTab = (nextFieldValues) => {
        setValues(v => ({
          ...v,
          [activeTab]: {
            ...(v[activeTab] || {}),
            ...nextFieldValues
          }
        }));
      };
      
      if (isFile && isImage) {
        const earSide = isRightTympanometry ? 'right' : 'left';
        console.log(`Processing ${earSide} tympanometry image...`);
        patchActiveTab({ [name]: value });
        await processTympanometryImage(value, earSide);
      } else {
        // Still save the file even if it's not an image (could be PDF)
        patchActiveTab({ [name]: value });
      }
    } else {
      const problemListFields = [
        'ear_infection', 'ear_fullness', 'ear_pain', 'otorrhea', 'tinnitus',
        'loudness_discomfort', 'hearing_difficulties', 'communication_difficulties',
        'vestibular_symptoms', 'duration_frequency', 'triggers',
        'impression_r', 'impression_l', 'reliability'
      ];
      setValues(v => {
        const currentTab = v[activeTab] || {};
        const nextTab = {
          ...currentTab,
          [name]: value
        };
        if (problemListFields.includes(name)) {
          nextTab.problem_list = updateProblemListFromFormValues(currentTab.problem_list, nextTab);
        }
        return {
          ...v,
          [activeTab]: nextTab
        };
      });
    }
  };

  const handleAction = (type) => {
    if (type === "back") onBack?.();

    if (type === "clear") {
      setValues({ ...TAB_INITIAL_VALUES });
      setSubmitted(false);
      localStorage.removeItem(storageKey);
    }

    if (type === "save") {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ values, updatedAt: new Date() })
      );
      alert("Audiology draft saved");
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const mergedValues = Object.values(values).reduce((acc, tab) => ({ ...acc, ...tab }), {});
    onSubmit?.(mergedValues);
    alert("Audiology assessment submitted");
  };
const [isOtoscopicLoading, setIsOtoscopicLoading] = useState(false);
const handleOtoscopicUpload = async (file) => {
  try {
    setIsOtoscopicLoading(true);

    const base64Data = file.data.split(",")[1];

    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    const pdfBlob = new Blob(
      [byteArray],
      { type: file.type }
    );

    const pdfFile = new File(
      [pdfBlob],
      file.filename,
      { type: file.type }
    );

    const formData = new FormData();
    formData.append("file", pdfFile);

    const token = localStorage.getItem("access_token");
    const response = await fetch(OTOSCOPIC_EXTRACT_URL, {
      method: "POST",
      headers: token ? { "Authorization": `Bearer ${token}` } : {},
      body: formData
    });

    const result = await response.json();

    const rightImage =
      result?.data?.canals?.right?.image?.data;

    const leftImage =
      result?.data?.canals?.left?.image?.data;

    setValues(prev => ({
      ...prev,
      objective: {
        ...(prev.objective || {}),
        otoscopic_right_image: rightImage
          ? `data:image/jpeg;base64,${rightImage}`
          : "",
        otoscopic_left_image: leftImage
          ? `data:image/jpeg;base64,${leftImage}`
          : ""
      }
    }));
  } catch (error) {
    console.error("Otoscopic extraction failed", error);
  } finally {
    setIsOtoscopicLoading(false);
  }
};
  const AUDIOLOGY_ASSESSMENT_REGISTRY = {
    tinnitus_form: TinnitusAdvancedAdapter,
    loudness_form: HyperacusisAdvancedAdapter,
    hearing_form: AuditoryAdvancedAdapter,
    vestibular_form: VestibularAdvancedAdapter,
    tinnitus_form_obj: TinnitusAdvancedAdapterObj,
    loudness_form_obj: HyperacusisAdvancedAdapterObj,
    hearing_form_obj: AuditoryAdvancedAdapterObj,
    vestibular_form_obj: VestibularAdvancedAdapterObj,
    hearingaidtrial_form_obj: HearingAidTrialAdapter,
    industrial_form_obj:IndusTrialAdapter,
  };
function TinnitusAdvancedAdapter({ onChange }) {
  return (
    <TinnitusAdvancedForm
    mode={mode}
      onBack={() => onChange("hearing_assessments_launcher", null)}
    />
  );
}

function HyperacusisAdvancedAdapter({ onChange }) {
  return (
    <HyperacusisAdvancedForm
    mode={mode}
      onBack={() => onChange("hearing_assessments_launcher", null)}
    />
  );
}

function AuditoryAdvancedAdapter({ onChange }) {
  return (
    <AuditoryAdvancedForm
    mode={mode}
      onBack={() => onChange("hearing_assessments_launcher", null)}
    />
  );
}

function VestibularAdvancedAdapter({ onChange }) {
  return (
    <VestibularAdvancedForm
    mode={mode}
      onBack={() => onChange("vestibular_assessments_launcher", null)}
    />
  );
}
function TinnitusAdvancedAdapterObj({ onChange }) {
  return (
    <TinnitusAdvancedFormObj
    mode={mode}
      onBack={() => onChange("hearing_assessments_launcher_obj", null)}
    />
  );
}

function HyperacusisAdvancedAdapterObj({ onChange }) {
  return (
    <HyperacusisAdvancedFormObj
    mode={mode}
      onBack={() => onChange("hearing_assessments_launcher_obj", null)}
    />
  );
}

function AuditoryAdvancedAdapterObj({ onChange }) {
  return (
    <AuditoryAdvancedFormObj
    mode={mode}
      onBack={() => onChange("hearing_assessments_launcher_obj", null)}
    />
  );
}

function VestibularAdvancedAdapterObj({ onChange }) {
  return (
    <VestibularAdvancedFormObj
    mode={mode}
      onBack={() => onChange("hearing_assessments_launcher_obj", null)}
    />
  );
}

function HearingAidTrialAdapter({ onChange }) {
  return (
    <Hearingaidtrial
    mode={mode}
      onBack={() => onChange("hearing_assessments_launcher_obj", null)}
    />
  );
}

function IndusTrialAdapter({ onChange }) {
  return (
    <IndustrialAudiometry
    mode={mode}
      onBack={() => onChange("industrial_launcher_obj", null)}
    />
  );
}

  /* ===================== SCHEMAS (from src/schema/audiology) ===================== */

  const soapSchemas = mode === "followup" ? followupSchemas : adultIASchemas;

  const withActions = (part) => ({
    ...part,
    actions: part?.actions || ACTIONS_BUTTON,
  });

  const handleEquipmentBook = (equipment) => {
    setSelectedEquipment(equipment);
    setEquipmentBookingOpen(true);
  };

  const injectEquipmentOptions = (plan) => {
    const mapFields = (fields = []) =>
      fields.map((field) =>
        field.name === "equipment_list"
          ? {
              ...field,
              options: equipmentOptions,
              onBook: handleEquipmentBook,
              bookedEquipmentIds,
            }
          : field
      );

    return {
      ...withActions(plan),
      fields: plan.fields ? mapFields(plan.fields) : plan.fields,
      sections: plan.sections
        ? plan.sections.map((section) => ({
            ...section,
            fields: mapFields(section.fields),
          }))
        : plan.sections,
    };
  };

  const schemaMap = {
    subjective: withActions(soapSchemas.SUBJECTIVE),
    objective: withActions(soapSchemas.OBJECTIVE),
    assessment: withActions(soapSchemas.ASSESSMENT),
    plan: injectEquipmentOptions(soapSchemas.PLAN),
  };

  /* ===================== RENDER ===================== */

  return (
<div style={mainContent}>
  {/* ===== PATIENT INFORMATION CARD ===== */}
  <PatientCard
    patient={patient}
    // patientHistory={patientHistory}
    // setPatientHistory={setPatientHistory}
  />

  {/* ===== TABS ===== */}
  <div style={tabBar}>
    {["subjective", "objective", "assessment", "plan"].map(tab => (
      <div
        key={tab}
        style={activeTab === tab ? tabActive : tabBtn}
        onClick={() => setActiveTab(tab)}
      >
        {tab.toUpperCase()}
      </div>
    ))}
  </div>

  {/* ===== TAB CONTENT ===== */}
  {processingOCR && (
    <div style={{
      padding: "12px 16px",
      marginBottom: "16px",
      background: "#e0f2fe",
      border: "1px solid #0ea5e9",
      borderRadius: "8px",
      color: "#0c4a6e",
      fontWeight: 600,
      textAlign: "center"
    }}>
      🔄 Processing image with OCR... Please wait
    </div>
  )}
  <CommonFormBuilder
    schema={schemaMap[activeTab]}
    values={values[activeTab] || {}}
    onChange={onChange}
    submitted={submitted}
    onAction={handleAction}
    assessmentRegistry={AUDIOLOGY_ASSESSMENT_REGISTRY}
  >




    {/* Submit button stays */}
     <div style={submitRow}>
          {activeTab !== "plan" ? (
            <button
              type="button"
              style={submitBtn}
              onClick={() => {
                if (activeTab === "subjective") setActiveTab("objective");
                else if (activeTab === "objective") setActiveTab("assessment");
                else if (activeTab === "assessment") setActiveTab("plan");
              }}
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              style={submitBtn}
              onClick={handleSubmit}
            >
              Submit Audiology
            </button>
          )}
        </div>
  </CommonFormBuilder>

  <EquipmentBookingPopup
    open={equipmentBookingOpen}
    equipmentOptions={equipmentOptions}
    selectedEquipment={selectedEquipment}
    onClose={() => setEquipmentBookingOpen(false)}
    onBooked={(equipmentId) => {
      setBookedEquipmentIds(prev => [...prev, equipmentId]);
    }}
  />
      <BookAppointmentModal
      open={appointmentModalOpen}
      row={bookingRow}
      initialMode="doctor"
      onClose={() => setAppointmentModalOpen(false)}
      onConfirm={(data) => {
        console.log("Booking confirmed", data);
        setAppointmentModalOpen(false);
      }}
      onRequestOverride={() => {}}
      onAddWaitlist={() => {}}
      onConflict={() => {}}
      onCancel={() => setAppointmentModalOpen(false)}
    />
</div>

  );
}

/* ===================== STYLES ===================== */

const mainContent = { margin: "0 auto",width:"100%" };

const tabBar = {
  display: "flex",
  gap: 12,
  justifyContent: "center",
  borderBottom: "1px solid #ddd",
  marginBottom: 12
};

const tabBtn = {
  padding: "10px 22px",
  fontWeight: 600,
  cursor: "pointer",
  color: "#0f172a"
};

const tabActive = {
  ...tabBtn,
  borderBottom: "3px solid #2451b3",
  color: "#2451b3"
};

const submitRow = {
  display: "flex",
  justifyContent: "flex-end",
  marginTop: 20
};

const submitBtn = {
  padding: "12px 32px",
  background: "#2563EB",
  color: "#fff",
  border: "none",
  borderRadius: 10,
  fontSize: 15,
  fontWeight: 700
};

const section = {
  marginBottom: 24
};
