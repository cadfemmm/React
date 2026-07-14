import React, { useEffect, useState } from "react";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";
import { createWorker } from "tesseract.js";
import { localDateTimeString } from "../../../shared/utils/dateFormatter";
import { TinnitusAdvancedForm,TinnitusAdvancedFormObj } from "../tinnitusassessment";
import { HyperacusisAdvancedForm, HyperacusisAdvancedFormObj } from "../hyperacusisassessment";
import { AuditoryAdvancedForm, AuditoryAdvancedFormObj } from "../auditoryassessment";
import { VestibularAdvancedForm, VestibularAdvancedFormObj } from "../vestibularassessment";
import PatientCard from "../../../shared/cards/PatientCard";
import { OTOSCOPIC_EXTRACT_URL, API_URL } from "../../../platform/config/api.config";
import api, { getCookie } from "../../../shared/api/apiClient";
import { BookAppointmentModal } from "../../book-appointment-modal/BookAppointmentModal"

/* ===================== OPTIONS ===================== */

const INTACT_IMPAIRED = [
  { label: "Intact", value: "intact" },
  { label: "Impaired", value: "impaired" }
];

const IMPAIRED_LOCATION = [
  { label: "Right", value: "right" },
  { label: "Left", value: "left" },
  { label: "Bilateral", value: "bilateral" }
];
const YES_NO = [
  { label: "Yes", value: "1" },
  { label: "No", value: "0" }
];

const FULLTERM_PRETERM = [
  { label: "Full term", value: "0" },
  { label: "Pre-term", value: "1" }
];

const TAB_INITIAL_VALUES = {
  subjective: {},
  objective: {},
  assessment: {},
  plan: {}
};

/* ===================== COMPONENT ===================== */

export default function AudiologyDepartmentPediatricPage({ patient, onUpdatePatient, onSubmit, onBack }) {
  const [values, setValues] = useState(() => ({ ...TAB_INITIAL_VALUES }));
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("subjective");
  const [processingOCR, setProcessingOCR] = useState(false);
  const [equipmentOptions, setEquipmentOptions] = useState([]);
  const [equipmentBookingOpen, setEquipmentBookingOpen] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [bookedEquipmentIds, setBookedEquipmentIds] = useState([]);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const bookingRow = {
    id: patient?.id,
    patient: patient?.full_name || patient?.name || "",
    refId: patient?.referral_id || "",
    department: "Audiology",
    // disciplineCode: "AUD",
    priority: "Medium",
  };
  /* --------- Patient History State --------- */
  const [patientHistory, setPatientHistory] = useState({
    past_medical_history: patient?.medical_history || "",
    past_family_history: patient?.family_medical_history || "",
    alerts_and_allergies: patient?.alerts_and_allergies_history || ""
  });

  useEffect(() => {
    setPatientHistory({
      past_medical_history: patient?.medical_history || "",
      past_family_history: patient?.family_medical_history || "",
      alerts_and_allergies: patient?.alerts_and_allergies_history || ""
    });
  }, [patient?.id]);

  useEffect(() => {
    if (!patient) return;
    const updated = {
      ...patient,
      medical_history: patientHistory.past_medical_history,
      family_medical_history: patientHistory.past_family_history,
      alerts_and_allergies_history: patientHistory.alerts_and_allergies
    };
    localStorage.setItem("patient_" + patient.id, JSON.stringify(updated));
    onUpdatePatient?.(updated);
  }, [patient?.id, patientHistory.past_medical_history, patientHistory.past_family_history, patientHistory.alerts_and_allergies]);

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
    if (saved) {
      const loaded = JSON.parse(saved).values || {};
      const normalized =
        loaded && typeof loaded === "object" &&
        ("subjective" in loaded || "objective" in loaded || "assessment" in loaded || "plan" in loaded)
          ? { ...TAB_INITIAL_VALUES, ...loaded }
          : { ...TAB_INITIAL_VALUES, subjective: loaded };
      setValues(normalized);
    }
  }, [storageKey]);

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

  useEffect(() => {
    if (!patient) return;

    setValues(v => ({
      ...v,
      subjective: {
        ...v.subjective,
        pmh_from_registration:
          patient.medical_history || "No data available",
        family_social_from_registration:
          patient.diagnosis_history || "No data available"
      }
    }));
  }, [patient]);

  const onChange = async (name, value) => {
    console.log(`[onChange] called with name="${name}"`, value?.data ? 'has data' : 'no data', value instanceof File ? 'is File' : typeof value);
    // Check if this is a tympanometry file upload
    const isRightTympanometry = name === 'tympanometry_report_right';
    const isLeftTympanometry = name === 'tympanometry_report_left';
    if (
      name === "otoscopic_report" &&
      value?.data
    ) {
      console.log('[onChange] Intercepted otoscopic_report, calling handleOtoscopicUpload...');
      await handleOtoscopicUpload(value);
      console.log('[onChange] handleOtoscopicUpload completed');
      return;
    }
    if ((isRightTympanometry || isLeftTympanometry) && value) {
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
        patchActiveTab({ [name]: value });
      }
    } else {
      setValues(v => ({
        ...v,
        [activeTab]: {
          ...(v[activeTab] || {}),
          [name]: value
        }
      }));
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
    const mergedValues = Object.values(values).reduce((acc, tabData) => ({ ...acc, ...tabData }), {});
    onSubmit?.(mergedValues);
    alert("Audiology assessment submitted");
  };

const [isOtoscopicLoading, setIsOtoscopicLoading] = useState(false);
const handleOtoscopicUpload = async (file) => {
  console.log('[handleOtoscopicUpload] START', { filename: file.filename, type: file.type, dataLength: file.data?.length });
  try {
    setIsOtoscopicLoading(true);

    const base64Data = file.data.split(",")[1];
    console.log('[handleOtoscopicUpload] Extracted base64, length:', base64Data?.length);

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

    const token = getCookie("access_token");
    console.log('[handleOtoscopicUpload] Sending to', OTOSCOPIC_EXTRACT_URL, 'with auth token:', !!token);
    const response = await fetch(OTOSCOPIC_EXTRACT_URL, {
      method: "POST",
      headers: token ? { "Authorization": `Bearer ${token}` } : {},
      body: formData
    });
    console.log('[handleOtoscopicUpload] Response status:', response.status);

    const result = await response.json();
    console.log('[handleOtoscopicUpload] API response:', JSON.stringify(result).substring(0, 500));

    const rightImage =
      result?.data?.canals?.right?.image?.data;
    const leftImage =
      result?.data?.canals?.left?.image?.data;

    console.log('[handleOtoscopicUpload] Extracted images:', { hasRight: !!rightImage, hasLeft: !!leftImage });

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
    console.log('[handleOtoscopicUpload] State updated');
  } catch (error) {
    console.error("[handleOtoscopicUpload] ERROR:", error);
  } finally {
    setIsOtoscopicLoading(false);
    console.log('[handleOtoscopicUpload] END');
  }
};

  // Extract tympanometry values from OCR text
  const extractTympanometryValues = (text) => {
    const values = {};
    
    console.log('OCR Text extracted:', text);
    console.log('OCR Text length:', text.length);
    
    const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    console.log('OCR Lines:', lines);
    
    const volumePatterns = [
      /Volume[:\s]*([\d]+\.[\d]+|[\d]+)\s*ml/i,
      /Volume[:\s]*([\d]+\.[\d]+|[\d]+)ml/i,
      /Vol[:\s]*([\d]+\.[\d]+|[\d]+)\s*ml/i,
      /Vol[:\s]*([\d]+\.[\d]+|[\d]+)ml/i
    ];
    
    for (const pattern of volumePatterns) {
      const match = text.match(pattern);
      if (match) {
        values.volume = match[1];
        console.log('Extracted Volume (label method):', values.volume);
        break;
      }
    }
    
    const mlMatches = text.match(/([\d]+\.[\d]+|[\d]+)\s*ml/gi);
    let mlNumbers = [];
    
    if (mlMatches) {
      console.log('Found ml values:', mlMatches);
      mlNumbers = mlMatches.map(m => {
        const numMatch = m.match(/([\d]+\.[\d]+|[\d]+)/);
        if (numMatch) {
          const numValue = parseFloat(numMatch[1]);
          return numValue > 0 && numValue < 10 ? { str: numMatch[1], num: numValue } : null;
        }
        return null;
      }).filter(n => n !== null);
      
      if (mlNumbers.length > 0) {
        mlNumbers.sort((a, b) => b.num - a.num);
        console.log('Sorted ml numbers:', mlNumbers.map(n => n.str));
      }
    }
    
    if (!values.volume && mlMatches && mlMatches.length > 0) {
      const volumeIndex = text.toLowerCase().indexOf('volume');
      
      if (volumeIndex !== -1) {
        const textAfterVolume = text.substring(volumeIndex);
        const volumeNumMatch = textAfterVolume.match(/([\d]+\.[\d]+|[\d]+)\s*ml/i);
        if (volumeNumMatch) {
          values.volume = volumeNumMatch[1];
          console.log('Extracted Volume (context method):', values.volume);
        }
      } else if (mlNumbers && mlNumbers.length > 0) {
        const largerValue = mlNumbers[0];
        if (largerValue.num >= 0.5 && largerValue.num <= 2.0) {
          values.volume = largerValue.str;
          console.log('Extracted Volume (fallback - larger value):', values.volume);
        }
      }
    }
    
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
    
    if (!values.pressure) {
      const daPaMatches = text.match(/([\d.-]+)\s*daPa/gi);
      if (daPaMatches) {
        console.log('Found daPa values:', daPaMatches);
        const pressureIndex = text.toLowerCase().indexOf('pressure');
        if (pressureIndex !== -1) {
          const textAfterPressure = text.substring(pressureIndex);
          const pressureNumMatch = textAfterPressure.match(/([\d.-]+)\s*daPa/i);
          if (pressureNumMatch) {
            values.pressure = pressureNumMatch[1];
            console.log('Extracted Pressure (context method):', values.pressure);
          }
        } else {
          for (const match of daPaMatches) {
            const numMatch = match.match(/([\d.-]+)/);
            if (numMatch) {
              const num = parseFloat(numMatch[1]);
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
    
    const compliancePatterns = [
      /Compliance[:\s]*([\d]+\.[\d]+|[\d]+)\s*ml/i,
      /Compliance[:\s]*([\d]+\.[\d]+|[\d]+)ml/i,
      /Comp[:\s]*([\d]+\.[\d]+|[\d]+)\s*ml/i,
      /Comp[:\s]*([\d]+\.[\d]+|[\d]+)ml/i
    ];
    
    for (const pattern of compliancePatterns) {
      const match = text.match(pattern);
      if (match) {
        values.compliance = match[1];
        console.log('Extracted Compliance (label method):', values.compliance);
        break;
      }
    }
    
    if (!values.compliance) {
      const complianceIndex = text.toLowerCase().indexOf('compliance');
      if (complianceIndex !== -1) {
        const textAfterCompliance = text.substring(complianceIndex);
        const complianceNumMatch = textAfterCompliance.match(/([\d]+\.[\d]+|[\d]+)\s*ml/i);
        if (complianceNumMatch) {
          values.compliance = complianceNumMatch[1];
          console.log('Extracted Compliance (context method):', values.compliance);
        }
      } else if (mlNumbers && mlNumbers.length >= 1) {
        const sortedAscending = [...mlNumbers].sort((a, b) => a.num - b.num);
        
        for (const mlValue of sortedAscending) {
          if (mlValue.num >= 0.1 && mlValue.num <= 1.0) {
            const volumeNum = values.volume ? parseFloat(values.volume) : null;
            if (!volumeNum || Math.abs(volumeNum - mlValue.num) > 0.1) {
              values.compliance = mlValue.str;
              console.log('Extracted Compliance (fallback method):', values.compliance);
              break;
            }
          }
        }
        
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
    
    if (!values.volume || !values.pressure || !values.compliance) {
      for (const line of lines) {
        if (!values.volume && /[\d.]+.*ml/i.test(line)) {
          if (/volume/i.test(line)) {
            const volMatch = line.match(/([\d]+\.[\d]+|[\d]+)\s*ml/i);
            if (volMatch && parseFloat(volMatch[1]) >= 0.1 && parseFloat(volMatch[1]) < 5) {
              values.volume = volMatch[1];
              console.log('Extracted Volume (line scan with label):', values.volume);
            }
          } else if (!/compliance/i.test(line)) {
            const volMatch = line.match(/([\d]+\.[\d]+|[\d]+)\s*ml/i);
            if (volMatch) {
              const volValue = parseFloat(volMatch[1]);
              if (volValue >= 0.1 && volValue < 5) {
                values.volume = volMatch[1];
                console.log('Extracted Volume (line scan):', values.volume);
              }
            }
          }
        }
        
        if (!values.pressure && /[\d.-]+.*daPa/i.test(line) && !/gradient/i.test(line)) {
          const pressMatch = line.match(/([\d.-]+)\s*daPa/i);
          if (pressMatch && Math.abs(parseFloat(pressMatch[1])) < 200) {
            values.pressure = pressMatch[1];
            console.log('Extracted Pressure (line scan):', values.pressure);
          }
        }
        
        if (!values.compliance && /[\d.]+.*ml/i.test(line)) {
          if (/compliance/i.test(line)) {
            const compMatch = line.match(/([\d]+\.[\d]+|[\d]+)\s*ml/i);
            if (compMatch && parseFloat(compMatch[1]) >= 0.1 && parseFloat(compMatch[1]) <= 1.0) {
              values.compliance = compMatch[1];
              console.log('Extracted Compliance (line scan with label):', values.compliance);
            }
          } else if (!/volume/i.test(line)) {
            const compMatch = line.match(/([\d]+\.[\d]+|[\d]+)\s*ml/i);
            if (compMatch) {
              const compValue = parseFloat(compMatch[1]);
              const volumeNum = values.volume ? parseFloat(values.volume) : null;
              if (compValue >= 0.1 && compValue <= 1.0 && (!volumeNum || compValue < volumeNum)) {
                values.compliance = compMatch[1];
                console.log('Extracted Compliance (line scan):', values.compliance);
              }
            }
          }
        }
      }
    }
    
    if (!values.volume || !values.pressure || !values.compliance) {
      const allDecimals = text.match(/[\d]+\.[\d]+/g) || [];
      const allIntegers = text.match(/\b[\d]+\b/g) || [];
      
      const allNumberObjects = [
        ...allDecimals.map(str => ({ str, num: parseFloat(str) })),
        ...allIntegers.map(str => ({ str, num: parseFloat(str) }))
      ];
      
      console.log('All numbers found in text:', allNumberObjects.map(n => n.str));
      
      if (!values.volume) {
        const volumeCandidates = allNumberObjects.filter(n => n.num >= 0.5 && n.num <= 2.0);
        if (volumeCandidates.length > 0) {
          const bestVolume = volumeCandidates.reduce((best, curr) => {
            const bestDist = Math.abs(best.num - 0.75);
            const currDist = Math.abs(curr.num - 0.75);
            return currDist < bestDist ? curr : best;
          });
          values.volume = bestVolume.str;
          console.log('Extracted Volume (number scan fallback):', values.volume);
        }
      }
      
      if (!values.compliance) {
        const complianceCandidates = allNumberObjects.filter(n => n.num >= 0.1 && n.num <= 1.0);
        if (complianceCandidates.length > 0) {
          const volumeNum = values.volume ? parseFloat(values.volume) : null;
          const filteredCandidates = complianceCandidates.filter(n => 
            !volumeNum || Math.abs(volumeNum - n.num) > 0.1
          );
          
          if (filteredCandidates.length > 0) {
            const bestCompliance = filteredCandidates.reduce((best, curr) => 
              curr.num < best.num ? curr : best
            );
            values.compliance = bestCompliance.str;
            console.log('Extracted Compliance (number scan fallback):', values.compliance);
          }
        }
      }
      
      if (!values.pressure) {
        const pressureCandidates = allNumberObjects.filter(n => 
          Math.abs(n.num) >= 0 && Math.abs(n.num) < 200 && n.num !== 77 && n.num !== 81
        );
        if (pressureCandidates.length > 0) {
          const bestPressure = pressureCandidates.reduce((best, curr) => {
            return Math.abs(curr.num) < Math.abs(best.num) ? curr : best;
          });
          values.pressure = bestPressure.str;
          console.log('Extracted Pressure (number scan fallback):', values.pressure);
        }
      }
    }
    
    if (!values.volume || !values.compliance) {
      console.log('--- AGGRESSIVE FALLBACK EXTRACTION ---');
      const allMlPattern = text.match(/([\d]+\.[\d]+|[\d]+)\s*ml/gi);
      if (allMlPattern) {
        console.log('All ml patterns found:', allMlPattern);
        const mlValues = allMlPattern.map(m => {
          const numMatch = m.match(/([\d]+\.[\d]+|[\d]+)/);
          return numMatch ? { str: numMatch[1], num: parseFloat(numMatch[1]) } : null;
        }).filter(n => n !== null && n.num > 0 && n.num < 10);
        
        console.log('Processed ml values:', mlValues);
        
        if (!values.volume && mlValues.length >= 1) {
          mlValues.sort((a, b) => b.num - a.num);
          const candidate = mlValues[0];
          if (candidate.num >= 0.5 && candidate.num <= 2.0) {
            values.volume = candidate.str;
            console.log('AGGRESSIVE: Extracted Volume:', values.volume);
          }
        }
        
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
    
    if (!values.pressure) {
      const allDaPaPattern = text.match(/([\d.-]+)\s*daPa/gi);
      if (allDaPaPattern) {
        console.log('All daPa patterns found:', allDaPaPattern);
        const daPaValues = allDaPaPattern.map(m => {
          const numMatch = m.match(/([\d.-]+)/);
          return numMatch ? { str: numMatch[1], num: parseFloat(numMatch[1]) } : null;
        }).filter(n => n !== null);
        
        const pressureIndex = text.toLowerCase().indexOf('pressure');
        if (pressureIndex !== -1) {
          const textAfterPressure = text.substring(pressureIndex, pressureIndex + 100);
          const pressureMatch = textAfterPressure.match(/([\d.-]+)\s*daPa/i);
          if (pressureMatch) {
            values.pressure = pressureMatch[1];
            console.log('AGGRESSIVE: Extracted Pressure from context:', values.pressure);
          }
        } else {
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
    return values;
  };

  // Process tympanometry image with OCR
  const processTympanometryImage = async (file, earSide) => {
    console.log(`Starting OCR processing for ${earSide} ear...`);
    setProcessingOCR(true);
    try {
      console.log('Creating Tesseract worker...');
      const worker = await createWorker('eng');
      
      await worker.setParameters({
        tessedit_char_whitelist: '0123456789.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz:mlPaGradientVolumePressureCompliance ',
        tessedit_pageseg_mode: '6',
      });
      
      console.log('Recognizing text from image (first attempt)...');
      let { data: { text } } = await worker.recognize(file);
      console.log('First OCR attempt, extracted text length:', text.length);
      
      if (!text.match(/Volume|Pressure|Compliance|[\d]+\.[\d]+\s*ml|[\d.-]+\s*daPa/i)) {
        console.log('Trying OCR with different page segmentation mode...');
        await worker.setParameters({
          tessedit_pageseg_mode: '11',
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
      
      if (extracted.volume || extracted.pressure || extracted.compliance) {
        setValues(v => {
          const updates = {};
          
          if (extracted.volume) {
            const volumeStr = String(extracted.volume);
            updates.ecv = {
              ...(v.ecv || {}),
              [`ecv_${earSide === 'right' ? 'r' : 'l'}`]: volumeStr
            };
          }
          
          if (extracted.pressure) {
            const pressureStr = String(extracted.pressure);
            updates.peak_pressure = {
              ...(v.peak_pressure || {}),
              [`peak_pressure_${earSide === 'right' ? 'r' : 'l'}`]: pressureStr
            };
          }
          
          if (extracted.compliance) {
            const complianceStr = String(extracted.compliance);
            updates.static_compliance = {
              ...(v.static_compliance || {}),
              [`static_compliance_${earSide === 'right' ? 'r' : 'l'}`]: complianceStr
            };
          }
          
          if (Object.keys(updates).length > 0) {
            const currentTab = v[activeTab] || {};
            const extractedCount = Object.keys(extracted).filter(k => extracted[k]).length;
            setTimeout(() => {
              alert(`Successfully extracted ${extractedCount} value(s) from ${earSide} ear tympanometry image:\n${extracted.volume ? `Volume: ${extracted.volume} ml\n` : ''}${extracted.pressure ? `Pressure: ${extracted.pressure} daPa\n` : ''}${extracted.compliance ? `Compliance: ${extracted.compliance} ml` : ''}`);
            }, 100);
            
            return {
              ...v,
              [activeTab]: {
                ...currentTab,
                ...updates
              }
            };
          }
          
          return v;
        });
      } else {
        console.warn('No values extracted from image');
        alert('Could not extract values from the image. Please check the browser console for detailed logs or enter values manually.');
      }
    } catch (error) {
      console.error('Error processing tympanometry image:', error);
      alert(`Error processing image: ${error.message}. Please enter values manually.`);
    } finally {
      setProcessingOCR(false);
      console.log('OCR processing completed');
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
      vestibular_form_obj: VestibularAdvancedAdapterObj
    };
  function TinnitusAdvancedAdapter({ onChange }) {
    return (
      <TinnitusAdvancedForm
        onBack={() => onChange("hearing_assessments_launcher", null)}
      />
    );
  }
  
  function HyperacusisAdvancedAdapter({ onChange }) {
    return (
      <HyperacusisAdvancedForm
        onBack={() => onChange("hearing_assessments_launcher", null)}
      />
    );
  }
  
  function AuditoryAdvancedAdapter({ onChange }) {
    return (
      <AuditoryAdvancedForm
        onBack={() => onChange("hearing_assessments_launcher", null)}
      />
    );
  }
  
  function VestibularAdvancedAdapter({ onChange }) {
    return (
      <VestibularAdvancedForm
        onBack={() => onChange("vestibular_assessments_launcher", null)}
      />
    );
  }
  function TinnitusAdvancedAdapterObj({ onChange }) {
    return (
      <TinnitusAdvancedFormObj
        onBack={() => onChange("hearing_assessments_launcher_obj", null)}
      />
    );
  }
  
  function HyperacusisAdvancedAdapterObj({ onChange }) {
    return (
      <HyperacusisAdvancedFormObj
        onBack={() => onChange("hearing_assessments_launcher_obj", null)}
      />
    );
  }
  
  function AuditoryAdvancedAdapterObj({ onChange }) {
    return (
      <AuditoryAdvancedFormObj
        onBack={() => onChange("hearing_assessments_launcher_obj", null)}
      />
    );
  }
  
  function VestibularAdvancedAdapterObj({ onChange }) {
    return (
      <VestibularAdvancedFormObj
        onBack={() => onChange("hearing_assessments_launcher_obj", null)}
      />
    );
  }
  /* ===================== SCHEMAS ===================== */

const SUBJECTIVE_SCHEMA = {
  actions: [
    { type: "back", label: "Back" },
    { type: "clear", label: "Clear" },
    { type: "save", label: "Save" }
  ],
  sections: [

    /* ===================== A. PRENATAL & DELIVERY HISTORY ===================== */
    {
      title: "A. Prenatal and Delivery History",
      fields: [
        {
          name: "length_of_pregnancy",
          label: "Length of pregnancy",
          type: "radio",
          options: FULLTERM_PRETERM
        },

{
  name: "length_of_pregnancy_notes",
  label: "",
  type: "textarea",
  showIf: { field: "length_of_pregnancy", equals: "1" }
},
        {
          name: "birth_weight",
          label: "Birth Weight",
          type: "input"
        },

        {
          name: "pregnancy_complications",
          label: "Complication during pregnancy",
          type: "radio",
          options: YES_NO
        },
        {
          name: "pregnancy_complications_notes",
          label: "",
          type: "textarea",
          showIf: { field: "pregnancy_complications", equals: "1" }
        },

        {
          name: "nicu_history",
          label: "Did the child spend any time in NICU?",
          type: "radio",
          options: FULLTERM_PRETERM
        },
        {
          name: "nicu_notes",
          label: "",
          type: "textarea",
          showIf: { field: "nicu_history", equals: "1" }
        },

        {
          name: "apgar_score",
          label: "APGAR Score",
          type: "input"
        },

        {
          name: "prenatal_risk_factors",
          label: "Did any of the following occur during pregnancy?",
          type: "radio",
          labelAbove:"true",
          options: [
            { label: "No", value: "0" },
            { label: "Alcohol abuse", value: "1" },
            { label: "Measles / Rubella", value: "2" },
            { label: "Infections", value: "3" },
            { label: "Substance abuse", value: "4" },
            { label: "Sexually transmitted disease", value: "5" },
            { label: "Communicable diseases", value: "6" },
            { label: "Maternal illness", value: "7" },
            { label: "Rh incompatibility", value: "8" },
            { label: "Toxemia", value: "9" },
            { label: "Zika virus", value: "10" },
            { label: "Cytomegalovirus (CMV)", value: "11" },
            { label: "Maternal X-rays", value: "12" },
            { label: "Smoking", value: "13" },
            { label: "Toxoplasmosis", value: "14" }
          ]
        },
        {
          name: "prenatal_risk_notes",
          label: "",
          type: "textarea",
          showIf: { field: "prenatal_risk_factors", exists: true }
        }
      ]
    },

    /* ===================== B. HEALTH HISTORY ===================== */
    {
      title: "B. Health History",
      fields: [
        {
          name: "ototoxic_medications",
          label: "Has your child taken any of the following medications?",
          type: "checkbox-group",
          options: [
            { label: "No", value: "0" },
            { label: "Vancomycin", value: "1" },
            { label: "Chemotherapy", value: "2" },
            { label: "Gentamycin", value: "3" },
            { label: "Streptomycin", value: "4" }
          ]
        },
        {
          name: "ototoxic_notes",
          label: "",
          type: "textarea",
          showIf: { field: "ototoxic_medications", oneOf: ["1", "2", "3", "4"] }
        },

        {
          name: "high_fever_history",
          label: "Has your child had a fever greater than 38 degree celcius?",
          type: "radio",
          options: YES_NO
        },
        {
          name: "high_fever_notes",
          label: "",
          type: "textarea",
          showIf: { field: "high_fever_history", equals: "1" }
        },

        {
          name: "hospitalisation_history",
          label: "Has your child ever been hospitalised?",
          type: "radio",
          options: YES_NO
        },
        {
          name: "hospitalisation_notes",
          label: "",
          type: "textarea",
           showIf: { field: "hospitalisation_history", equals: "1" }
        },

         {
          name: "specialist_history",
          label: "Has your child ever seen by a specialist?",
          type: "radio",
          options: YES_NO
        },
        {
          name: "specialist_notes",
          label: "",
          type: "textarea",
           showIf: { field: "specialist_history", equals: "1" }
        },

        {
          name: "ear_conditions",
          label: "Has your child had any of the following?",
          type: "radio",
          labelAbove:"true",
          options: [
            { label: "No", value: "0" },
            { label: "Allergies / Sinus problems", value: "1" },
            { label: "Ear infections", value: "2" },
            { label: "Draining ears", value: "3" },
            { label: "Chicken pox", value: "4" },
            { label: "Frequent colds", value: "5" },
            { label: "Head injury", value: "6" },
            { label: "Measles", value: "7" },
            { label: "Mumps", value: "8" },
            { label: "Tonsillitis", value: "9" },
            { label: "Seizures", value: "10" },
            { label: "Breathing difficulties", value: "11" },
            { label: "Flu", value: "12" },
            { label: "High fever", value: "13" },
            { label: "Meningitis", value: "14" },
            { label: "Blood transfusion", value: "15" },
            { label: "CMV", value: "16" },
            { label: "Encephalitis", value: "17" },
            { label: "Meconium aspiration", value: "18" },
            { label: "Rubella", value: "19" }
          ]
        },
         {
          name: "ear_conditions_notes",
          label: "",
          type: "textarea",
           showIf: { field: "ear_conditions", exists: true  }
        },
{
          name: "surgical_history",
          label: "Has your child had medical or surgical treatment of their ears? (grommet/ PE tubes)",
          type: "radio",
          options: YES_NO
        },
        {
          name: "surgical_notes",
          label: "",
          type: "textarea",
           showIf: { field: "surgical_history", equals: "1" }
        },
{
          name: "pain_history",
          label: "Does your child ever complain of pain or fullness of their ears?",
          type: "radio",
          options: YES_NO
        },
        {
          name: "pain_notes",
          label: "",
          type: "textarea",
           showIf: { field: "pain_history", equals: "1" }
        },
        
{
          name: "noise_history",
          label: "Has your child ever been exposed to loud noise or an explosion?",
          type: "radio",
          options: YES_NO
        },
        {
          name: "noise_notes",
          label: "",
          type: "textarea",
           showIf: { field: "noise_history", equals: "1" }
        },
{
          name: "noise_in_ear_history",
          label: "Has your child ever described noises on their ears?",
          type: "radio",
          options: YES_NO
        },
        {
          name: "noise_in_ear",
          label: "In which ear you feel noise",
          type: "radio",
          options: [
            { label: "Rigt", value: "Right" },
            { label: "Left", value: "Left" },
            { label: "bilateral", value: "bilateral" },
          ],
           showIf: { field: "noise_in_ear_history", equals: "1" }
        },

{
          name: "condition_history",
          label: "Has your child been diagnoses with any specific condition?",
          type: "radio",
          options: YES_NO
        },
        {
          name: "condition_notes",
          label: "",
          type: "textarea",
           showIf: { field: "condition_history", equals: "1" }
        },

        {
          name: "current_medications",
          label: "List any medication your child is taking",
          type: "textarea"
        }
      ]
    },

    /* ===================== C. DEVELOPMENTAL MILESTONES ===================== */
    {
      title: "C. Developmental Milestones",
      fields: [
        {type:"subheading",
            label:"At what age did your child:"
        },
        {
          type: "paired-text",
          pairs: [
          {  name: "first_word_age", title: "a) Say their first word?" },
          { name: "three_word_sentence_age", title: "b) Speak in three word sentences?" }
      ]},
              {
          type: "paired-text",
          pairs: [
          {  name: "head_control_age", title: "c) Hold their head erect?" },
          { name: "sit_unsupported_age", title: "d) Sit unsupported?" }
      ]},

        { name: "walk_alone_age", label: "e) Walk alone?", type: "input" },
 { name: "communicate_with_others", label: "How does your child communicate with others?", type: "input" },
       {type:"subheading",
        label:"How much of your child's speech can be understood?"
       },
 
 {
          name: "speech_understood_family",
          label: "Speech understood by family",
          type: "radio",
          options: YES_NO
        },
 {
          name: "speech_understood_family_notes",
          label: "",
          type: "textarea",
       showIf:{field:"speech_understood_family",equals:"1"}
        },

        {
          name: "speech_understood_others",
          label: "Speech understood by others",
          type: "radio",
          options: YES_NO
        },
{
          name: "speech_understood_others_notes",
          label: "",
          type: "textarea",
       showIf:{field:"speech_understood_others",equals:"1"}
        },
        {
          name: "speech_concerns",
          label: "Do you have any concerns regarding your childs's speech?",
          type: "radio",
          options: YES_NO
        },
{
          name: "speech_concerns_notes",
          label: "",
          type: "textarea",
       showIf:{field:"speech_concerns",equals:"1"}
        },

      ]
    },

    /* ===================== D. HEARING HISTORY ===================== */
    {
      title: "D. Hearing History",
      fields: [
        {
          name: "hearing_loss_risk_factors",
          label: "Factors associated with hearing loss",
          type: "radio",
          labelAbove:"true",
          options: [
            { label: "None", value: "0" },
            { label: "Family history of hearing loss", value: "1" },
            { label: "Jaundice (required transfusion)", value: "2" },
            { label: "Bacterial meningitis", value: "3" },
            { label: "Pulmonary hypertension", value: "4" },
            { label: "Head trauma (hospitalisation required)", value: "5" },
            { label: "CHARGE syndrome", value: "6" },
            { label: "Down syndrome (trisomy 21)", value: "7" },
            { label: "Cleft lip and palate", value: "8" },
            { label: "Small and absent pinna/ears", value: "9" },
            { label: "Skin tag or pits around ears", value: "10" },
            { label: "Rh incompatibility", value: "11" }
          ]
        },
         {
          name: "hearing_loss_risk_notes",
          label: "",
          type: "textarea",
          showIf:{field:"hearing_loss_risk_factors" ,exists:true}
        },
        {
          name: "family_member_hearing_loss",
          label: "Do any of your other childs/ siblings or other family member have hearing loss?",
          type: "radio",
          options: YES_NO
        },
                {
          name: "family_member_hearing_loss_notes",
          label: "",
          type: "textarea",
          showIf:{field:"family_member_hearing_loss" ,equals:"1"}
        },
        {
          name: "previous_hearing_test",
          label: "Has your child had a hearing test?",
          type: "radio",
          options: YES_NO
        },
                {
          name: "previous_hearing_test_notes",
          label: "",
          type: "textarea",
          showIf:{field:"previous_hearing_test" ,equals:"1"}
        },
                {
          name: "ear_infections",
          label: "How many ear infections has your child had and how often?",
          type: "radio",
          options: YES_NO
        },
                {
          name: "ear_infections_notes",
          label: "",
          type: "textarea",
          showIf:{field:"ear_infections" ,equals:"1"}
        },
{type:"subheading",label:"Does your child"},
        {
          name: "responds_to_sound",
          label: "a) Responds consistently to sound",
          type: "radio",
          options: YES_NO
        },
                {
          name: "responds_to_sound_notes",
          label: "",
          type: "textarea",
          showIf:{field:"responds_to_sound" ,equals:"1"}
        },
                {
          name: "turns_to_sound",
          label: "b) Turn to find sound source",
          type: "radio",
          options: YES_NO
        },
                {
          name: "turns_to_sound_notes",
          label: "",
          type: "textarea",
          showIf:{field:"turns_to_sound" ,equals:"1"}
        },
        {
          name: "enjoys_music",
          label: "c) Enjoys listening to music",
          type: "radio",
          options: YES_NO
        },
                {
          name: "enjoys_music_notes",
          label: "",
          type: "textarea",
          showIf:{field:"enjoys_music" ,equals:"1"}
        },
        {
          name: "responds_to_name",
          label: "d) Respond to their name",
          type: "radio",
          options: YES_NO
        },
                {
          name: "responds_to_name_notes",
          label: "",
          type: "textarea",
          showIf:{field:"responds_to_name" ,equals:"1"}
        },

                {
          name: "startle_to_loud_sound",
          label: "e) Startle to loud sound",
          type: "radio",
          options: YES_NO
        },
                {
          name: "startle_to_loud_sound_notes",
          label: "",
          type: "textarea",
          showIf:{field:"startle_to_loud_sound" ,equals:"1"}
        },

        {
          name: "amplification_use",
          label: "Does your child use any amplification devices?",
          type: "radio",
          options: YES_NO
        },
        {
          name: "hearing_assessments_launcher",
          label: "",
          type: "assessment-launcher",
          options: [
            { label: "Additional Tinnitus Profile", value: "tinnitus_form" },
            { label: "Additional Hyperacusis Profile", value: "loudness_form" },
            { label: "Additional Auditory Profile ", value: "hearing_form" }
          ]
        }
      ]
    },

    /* ===================== E. VESTIBULAR HISTORY ===================== */
    {
      title: "E. Vestibular History",
      fields: [
        {
          name: "balance_issues",
          label: "Does your child fall or lose balance easily?",
          type: "radio",
          options: YES_NO
        },
                {
          name: "balance_issues_notes",
          label: "",
          type: "textarea",
          showIf:{field:"balance_issues",equals:"1"}
        },
        {
          name: "dizziness_history",
          label: "Does your child has history of dizziness?",
          type: "radio",
          options: YES_NO
        },
        {
          name: "vestibular_notes",
          label: "",
          type: "textarea",
                    showIf:{field:"dizziness_history",equals:"1"}
        },
        {
          name: "vestibular_assessments_launcher",
          label: "",
          type: "assessment-launcher",
          options: [
            { label: "Additional Vestibular Profile", value: "vestibular_form" },
          ]
        }
      ]
    },
  ]
};


const DB_HL_OPTIONS = [
  { label: "-20", value: -20 },
  { label: "-15", value: -15 },
  { label: "-10", value: -10 },
  { label: "-5", value: -5 },
  { label: "0", value: 0 },
  { label: "5", value: 5 },
  { label: "10", value: 10 },
  { label: "15", value: 15 },
  { label: "20", value: 20 },
  { label: "25", value: 25 },
  { label: "30", value: 30 },
  { label: "35", value: 35 },
  { label: "40", value: 40 },
  { label: "45", value: 45 },
  { label: "50", value: 50 },
  { label: "55", value: 55 },
  { label: "60", value: 60 },
  { label: "65", value: 65 },
  { label: "70", value: 70 },
  { label: "75", value: 75 },
  { label: "80", value: 80 },
  { label: "85", value: 85 },
  { label: "90", value: 90 },
  { label: "95", value: 95 },
  { label: "100", value: 100 },
  { label: "105", value: 105 },
  { label: "110", value: 110 },
  { label: "115", value: 115 },
  { label: "120", value: 120 }
];
const AUDIO_FREQUENCIES = [250, 500, 1000, 2000, 3000, 4000, 6000, 8000];

const OBJECTIVE_SCHEMA = {
  actions: SUBJECTIVE_SCHEMA.actions,
  sections: [
     {
      title: "General Audiology Assessment",
      fields: [

        /* ===================== OTOSCOPY ===================== */
        {
          type: "accordion",
          name: "otoscopy_section",
          label: "Otoscopic Examination",
          defaultOpen: false,
          children: [
                {
              type: "row",
              columns: 1,
              fields: [
                {
                  type: "file-upload-modal",
                  name: "otoscopic_report",
                  label: "Upload Otoscopic Report"
                }
              ]
            },
                {
              type: "row",
              columns: 2,
              fields: [
                {
                type: "custom-image",
                name: "otoscopic_right_image",
                label: isOtoscopicLoading
                  ? "Otoscopic Examination - Right (Fetching...)"
                  : "Otoscopic Examination - Right"
              },
              {
                type: "custom-image",
                name: "otoscopic_left_image",
                label: isOtoscopicLoading
                  ? "Otoscopic Examination - Left (Fetching...)"
                  : "Otoscopic Examination - Left"
              }
              ]
            },
            {
              type: "paired-select",
              right: { name: "external_canal_r", title: "External Ear Canal – Right" },
              left: { name: "external_canal_l", title: "External Ear Canal – Left" },
              options: [
                { label: "Clear", value: "clear" },
                { label: "Inflamed", value: "inflamed" },
                { label: "Minimal cerumen", value: "minimal_cerumen" },
                { label: "Impacted cerumen", value: "impacted_cerumen" },
                { label: "Discharge present", value: "discharge" },
                { label: "Swelling", value: "swelling" }
              ]
            },
            {
              type: "paired-select",
              right: { name: "tm_appearance_r", title: "Tympanic Membrane (TM) Appearance – Right" },
              left: { name: "tm_appearance_l", title: "Tympanic Membrane (TM) Appearance – Left" },
              options: [
                { label: "Intact", value: "intact" },
                { label: "Perforated", value: "perforated" },
                { label: "Dull", value: "dull" },
                { label: "Retracted", value: "retracted" },
                { label: "Bulging", value: "bulging" },
                { label: "Opaque", value: "opaque" }
              ]
            },
            {
              type: "paired-select",
              right: { name: "tm_colour_r", title: "TM Colour – Right" },
              left: { name: "tm_colour_l", title: "TM Colour – Left" },
              options: [
                { label: "Pearly grey", value: "pearly_grey" },
                { label: "Reddened", value: "red" },
                { label: "Yellowish", value: "yellow" },
                { label: "Bluish", value: "blue" },
                { label: "White patches", value: "white_patches" }
              ]
            },
            {
              type: "paired-text",
              pairs: [
                { name: "otoscopy_other_r", title: "Other Findings – Right" },
                { name: "otoscopy_other_l", title: "Other Findings – Left" }
              ]
            }
          ]
        },

        /* ===================== AUDIOMETRY ===================== */
        {
          type: "accordion",
          name: "audiometry_section",
          label: "Audiometry",
          defaultOpen: false,
          children: [
            {
              name: "audifile_pd",
              type: "attach-file",
              accept: "application/pdf,image/*",
              title: "Upload Audiometry File",
              multiple: false,
              previewSize: { width: 400, height: 400 },
              hideInputAfterSelect: true
            },
            // { type: "audiogram-graph", name: "audiogram_graph" },
            {
              type: "row",
              fields: [
                {
                  name: "impression_r",
                  label: "Impression – Right Ear",
                  type: "textarea"
                },
                {
                  name: "impression_l",
                  label: "Impression – Left Ear",
                  type: "textarea"
                }
              ]
            },
            {
              name: "audiometry_type",
              label: "Type of Audiometry",
              type: "radio",
              options: [
                { label: "Screening", value: "screening" },
                { label: "Diagnostic Pure Tone", value: "pta" },
                { label: "Play", value: "play" },
                { label: "Visual Reinforcement (VR)", value: "vra" },
                { label: "Free field Audiometry", value: "free_field"},
                { label: "Aided Response", value: "aided"}
              ]
            },
            {
              name: "masking",
              label: "Masking",
              type: "radio",
              options: [
                { label: "Unmasked", value: "unmasked" },
                { label: "Masking", value: "masked" }
              ]
            },
            {
              name: "reliability",
              label: "Reliability",
              type: "radio",
              options: [
                { label: "Good", value: "Good" },
                { label: "Fair", value: "Fair" },
                { label: "Poor", value: "Poor" }
              ]
            }
          ]
        },
   ]
  },
    {
      title: "",
      fields: [
        {
          name: "hearing_assessments_launcher_obj",
          label: "",
          type: "assessment-launcher",
          options: [
            { label: "Auditory Profile", value: "hearing_form_obj" },
            { label: "Tinnitus Profile", value: "tinnitus_form_obj" },
            { label: "Hyperacusis Profile", value: "loudness_form_obj" },
            { label: "Vestibular Profile", value: "vestibular_form_obj" },
          ]
        }
      ]
    },
  ]
};


  const ASSESSMENT_SCHEMA = {
    actions: SUBJECTIVE_SCHEMA.actions,
    fields: [
      {
        name: "problem_list",
        label: "Problem Listing",
        type: "textarea"
      },
      {
        name: "clinical_impression",
        label: "Clinical Impression",
        type: "textarea"
      }
    ]
  };

  const PLAN_SCHEMA = {
    actions: SUBJECTIVE_SCHEMA.actions,
    fields: [
        { type: "subheading", label: "Short Term Goals (2–4 Weeks)" },
        { type: "dynamic-goals", name: "short_term_goals" },
        
        { type: "subheading", label: "Long Term Goals (6–12 Weeks)" },
        { type: "dynamic-goals", name: "long_term_goals" },
        {
          name: "equipment_list",
          label: "Equipment List",
          type: "equipment-list",
          options: []
        },
        {
          name: "intervention_plan",
          label: "Intervention Plan",
          type: "checkbox-group",
          options: [
            { label: "Monitoring", value: "monitoring" },
            { label: "Amplification", value: "amplification" },
            { label: "Medical referral", value: "medical_referral" },
            { label: "Further assessment", value: "further_assessment" },
            { label: "Auditory training", value: "auditory_training" },
            { label: "Tinnitus management", value: "tinnitus_management" },
            { label: "Hyperacusis management", value: "hyperacusis_management" },
            { label: "Vestibular management", value: "vestibular_management" },
            { label: "Prevention program", value: "prevention_program" },
            { label: "Others", value: "other" }
          ]
        },
        {
          name: "intervention_plan_details",
          label: "Specify",
          type: "textarea",
          showIf: { field: "intervention_plan", includes: "other" }
        },
        {
        name: "plan_options",
        label: "Required further assessment",
        type: "multi-select-dropdown",
        options: [
          { label: "Otoscopic Examination", value: "otoscopic" },
          { label: "Tympanometry", value: "tympanometry" },
          { label: "Audiometry", value: "audiometry" },
          { label: "Acoustic Reflex", value: "acoustic_reflex" },
          { label: "OAE Screening", value: "oae_screening" },
          { label: "Eustachian tube Function", value: "eustachian_tube" },
          { label: "Auditory steady-state response", value: "assr" },
          { label: "Auditory brainstem response", value: "abr" },
          { label: "Electrophysiology for hearing", value: "electrophysiology" },
          { label: "Special test", value: "special_test" },
          { label: "Hearing Handicap Inventory for Adults (HHIA)", value: "hhia" },
          { label: "Client oriented scale of improvement (COSI)", value: "cosi" },
          { label: "Tinnitus", value: "tinnitus" },
          { label: "Hyperacusis", value: "hyperacusis" },
          { label: "Vestibular", value: "vestibular" },
          { label: "Speech Test", value: "speech_test" },

          // ✅ ADDED ONLY MISSING

          { label: "Videonystagmography", value: "vng" },
          { label: "Optokinetic Test", value: "optokinetic" },
          { label: "Spontaneous Nystagmus", value: "spontaneous_nystagmus" },
          { label: "High Frequency Head Shake", value: "head_shake" },
          { label: "Gaze Test", value: "gaze_test" },
          { label: "Subjective Visual Vertical", value: "svv" },
          { label: "Positional Test", value: "positional_test" },
          { label: "Dynamic Visual Acuity (DVA)", value: "dva" },
          { label: "Gaze Stabilization", value: "gaze_stabilization" },
          { label: "Video Head Impulse Test (vHIT)", value: "vhit" },
          { label: "Posturography", value: "posturography" },
          { label: "Functional Gait Assessment", value: "fga" },
          { label: "Sensory Organization Performance", value: "sop" },
          { label: "VEMP", value: "vemp" },

          { label: "Hearing Device Orientation", value: "hearing_device_orientation" },
          { label: "Hearing Device Trial", value: "hearing_device_trial" },
          { label: "Hearing Device Fitting", value: "hearing_device_fitting" },
          { label: "Hearing Device Verification", value: "hearing_device_verification" },
          { label: "Hearing Device Validation", value: "hearing_device_validation" },
          { label: "Fine Tuning of Hearing Device", value: "hearing_device_finetuning" },

          { label: "Others", value: "other" }
        ]
      },
      {
        name: "plan_options_details",
        label: "Specify",
        type: "textarea",
        showIf: { field: "plan_options", includes: "other" }
      },
      {
        name: "plan_tinnitus_options",
        label: "Tinnitus Options",
        type: "multi-select-dropdown",
        showIf: { field: "plan_options", includes: "tinnitus" },
        options: [
          { label: "Tinnitus Handicap Inventory (THI)", value: "thi" },
          { label: "Tinnitus Functional Index (TFI)", value: "tfi" },
          { label: "Tinnitus Visual Analog Scale (VAS)", value: "tinnitus_vas" },
          { label: "Tinnitus Annoyance", value: "tinnitus_annoyance" },
          { label: "Tinnitus Awareness", value: "tinnitus_awareness" }
        ]
      },
      {
        name: "plan_hyperacusis_options",
        label: "Hyperacusis Options",
        type: "multi-select-dropdown",
        showIf: { field: "plan_options", includes: "hyperacusis" },
        options: [
          { label: "Modified Khalfa Hyperacusis Questionnaire", value: "khalfa" },
          { label: "Hyperacusis Questionnaire (HQ)", value: "hq" },
          { label: "Visual Analog Scale (VAS) – Loudness Discomfort", value: "vas_loudness" },
          { label: "Visual Analog Scale (VAS) – Annoyance", value: "vas_annoyance" }
        ]
      },
      {
        name: "plan_vestibular_options",
        label: "Vestibular Options",
        type: "multi-select-dropdown",
        showIf: { field: "plan_options", includes: "vestibular" },
        options: [
          { label: "Dizziness Handicap Inventory (DHI)", value: "dhi" },
          { label: "Visual Vertigo Analogue Score (VVAS)", value: "vvas" },
          { label: "Vertigo Handicap Questionnaire (VHQ)", value: "vhq" },
          { label: "Malay Version Vertigo Symptom Scale (MVVSS)", value: "mvvss" },
          { label: "Vestibular Evaluation", value: "vestibular_eval" },
          { label: "Dynamic Visual Acuity (DVA)", value: "dva" },
          { label: "Video Head Impulse Test (vHIT)", value: "vhit" },
          { label: "Posturography", value: "posturography" },
          { label: "Functional Gait Assessment", value: "fga" },
          { label: "cVEMP", value: "cvemp" },
          { label: "oVEMP", value: "ovemp" },
          { label: "Videonystagmography", value: "videonystagmography" }
        ]
      },
      {
        name: "plan_special_test_details",
        label: "Special Test Details",
        type: "textarea",
        placeholder: "Enter special test details...",
        showIf: { field: "plan_options", includes: "special_test" }
      },
      {
        name: "plan_next_follow_up",
        label: "Next Follow-Up",
        type: "date"
      },
      {
        name: "book_appointment_btn",
        type: "custom",
        render: () => (
          <div style={{ marginTop: "8px" }}>
          <button
            type="button"
            onClick={() => setAppointmentModalOpen(true)}
            style={{
              backgroundColor: "#0d6efd",
              color: "#fff",
              border: "1px solid #0d6efd",
              borderRadius: "6px",
              padding: "8px 16px",
              fontWeight: 600,
              cursor: "pointer"
            }}
          >
            Book Appointment
          </button>
          </div>
        )
      },      
      {
        name: "plan_required_referral",
        label: "Required Referral",
        type: "radio",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ]
      },
      {
        name: "plan_required_referral_details",
        label: "",
        type: "input",
        placeholder: "Specify referral details...",
        showIf: { field: "plan_required_referral", equals: "yes" }
      }
    ]
  };

  const handleEquipmentBook = (equipment) => {
    setSelectedEquipment(equipment);
    setEquipmentBookingOpen(true);
  };

  const planSchemaWithEquipment = {
    ...PLAN_SCHEMA,
    fields: PLAN_SCHEMA.fields.map((field) =>
      field.name === "equipment_list"
        ? { ...field, options: equipmentOptions, onBook: handleEquipmentBook, bookedEquipmentIds }
        : field
    ),
  };

  const schemaMap = {
    subjective: SUBJECTIVE_SCHEMA,
    objective: OBJECTIVE_SCHEMA,
    assessment: ASSESSMENT_SCHEMA,
    plan: planSchemaWithEquipment
  };

  /* ===================== PATIENT INFO ===================== */



  /* ===================== RENDER ===================== */

  return (
<div style={mainContent}>
  {/* ===== PATIENT INFORMATION CARD ===== */}
  <PatientCard
    patient={patient}
    patientHistory={patientHistory}
    setPatientHistory={setPatientHistory}
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

/* ── Equipment Booking Popup ── */
function EquipmentBookingPopup({ open, equipmentOptions, selectedEquipment, onClose, onBooked }) {
  const [equipmentId, setEquipmentId] = useState("");

  useEffect(() => {
    if (open) {
      setEquipmentId(selectedEquipment?.value || "");
    }
  }, [open, selectedEquipment]);

  if (!open) return null;

  return (
    <div style={equipmentModalOverlay}>
      <div style={equipmentModal}>
        <div style={equipmentModalHeader}>
          <div>
            <div style={equipmentModalTitle}>Create Equipment Booking</div>
            <div style={equipmentModalSubtitle}>
              Reserve equipment for internal use. Fields marked with * are required.
            </div>
          </div>
          <button type="button" style={equipmentCloseBtn} onClick={onClose}>×</button>
        </div>

        <div style={equipmentModalBody}>
          <div style={equipmentSectionTitle}>Basic Details</div>
          <div style={equipmentGrid}>
            <EquipmentPopupField label="Equipment *">
              <select
                style={equipmentInput}
                value={equipmentId}
                onChange={(e) => setEquipmentId(e.target.value)}
              >
                <option value="">Select equipment</option>
                {equipmentOptions.map(item => (
                  <option key={item.value} value={item.value}>{item.label}</option>
                ))}
              </select>
            </EquipmentPopupField>

            <EquipmentPopupField label="Booking Date *">
              <input type="date" style={equipmentInput} />
            </EquipmentPopupField>

            <EquipmentPopupField label="Start Time *">
              <input type="time" style={equipmentInput} />
            </EquipmentPopupField>

            <EquipmentPopupField label="End Time *">
              <input type="time" style={equipmentInput} />
            </EquipmentPopupField>
          </div>

          <div style={equipmentSectionTitle}>Usage Context</div>
          <div style={equipmentGrid}>
            <EquipmentPopupField label="Department *">
              <select style={equipmentInput} value="Audiology" disabled>
                <option value="Audiology">Audiology</option>
              </select>
            </EquipmentPopupField>

            <EquipmentPopupField label="Appointment Reference *">
              <input type="text" style={equipmentInput} placeholder="Enter appointment reference id" />
            </EquipmentPopupField>

            <EquipmentPopupField label="Assigned Staff *">
              <select style={equipmentInput}>
                <option value="">Select staff</option>
              </select>
            </EquipmentPopupField>
          </div>

          <div style={equipmentSectionTitle}>Note</div>
          <EquipmentPopupField label="Purpose of Booking *">
            <textarea style={equipmentTextarea} placeholder="Describe purpose of booking..." />
          </EquipmentPopupField>

          <EquipmentPopupField label="Special Handling Instructions *">
            <textarea style={equipmentTextarea} placeholder="Describe special handling instructions..." />
          </EquipmentPopupField>
        </div>

        <div style={equipmentModalFooter}>
          <button type="button" style={equipmentCancelBtn} onClick={onClose}>× Cancel</button>
          <button
            type="button"
            style={equipmentBookBtn}
            onClick={() => {
              alert("Equipment booked");
              onBooked?.(equipmentId);
              onClose();
            }}
          >
            Book Equipment
          </button>
        </div>
      </div>
    </div>
  );
}

function EquipmentPopupField({ label, children }) {
  return (
    <label style={equipmentField}>
      <span style={equipmentLabel}>{label}</span>
      {children}
    </label>
  );
}

const equipmentModalOverlay = {
  position: "fixed", inset: 0, zIndex: 10000,
  background: "rgba(0,0,0,0.45)",
  display: "flex", alignItems: "center", justifyContent: "center", padding: 16
};
const equipmentModal = {
  width: "min(660px, 100%)", maxHeight: "98vh", overflow: "hidden",
  background: "#fff", borderRadius: 10,
  boxShadow: "0 24px 70px rgba(15,23,42,0.25)",
  display: "flex", flexDirection: "column"
};
const equipmentModalHeader = {
  display: "flex", alignItems: "flex-start", justifyContent: "space-between",
  gap: 16, padding: "18px 22px 14px", borderBottom: "1px solid #e5e7eb"
};
const equipmentModalTitle = { fontSize: 16, fontWeight: 800, color: "#24272d", lineHeight: 1.2 };
const equipmentModalSubtitle = { marginTop: 6, fontSize: 14, color: "#7a7f88" };
const equipmentCloseBtn = {
  width: 40, height: 40, borderRadius: 10, border: "1px solid #d7dde7",
  background: "#fff", color: "#1f2937", fontSize: 24, lineHeight: "36px", cursor: "pointer"
};
const equipmentModalBody = {
  margin: "5px 14px 0", padding: "12px 16px 18px",
  border: "1px solid #dce2ea", borderRadius: 12, overflowY: "auto"
};
const equipmentSectionTitle = { margin: "0 0 14px", fontSize: 14, fontWeight: 800, color: "#24272d" };
const equipmentGrid = {
  display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "14px 10px", marginBottom: 22
};
const equipmentField = { display: "flex", flexDirection: "column", gap: 7, minWidth: 0 };
const equipmentLabel = { fontSize: 14, fontWeight: 700, color: "#344054" };
const equipmentInput = {
  width: "100%", minHeight: 26, border: "1px solid #cfd7e4", borderRadius: 10,
  padding: "10px 16px", fontSize: 16, color: "#111827", background: "#fff", boxSizing: "border-box"
};
const equipmentTextarea = { ...equipmentInput, minHeight: 68, resize: "vertical", marginBottom: 14 };
const equipmentModalFooter = {
  display: "flex", justifyContent: "flex-end", gap: 10,
  padding: "14px 20px", borderTop: "1px solid #e5e7eb"
};
const equipmentCancelBtn = {
  padding: "10px 18px", border: "1px solid #d7dde7", borderRadius: 10,
  background: "#fff", color: "#24272d", fontSize: 16, fontWeight: 600, cursor: "pointer"
};
const equipmentBookBtn = {
  padding: "10px 20px", border: "none", borderRadius: 10,
  background: "#0b5cff", color: "#fff", fontSize: 16, fontWeight: 700, cursor: "pointer"
};
