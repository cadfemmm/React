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
import api from "../../../shared/api/apiClient";
import { BookAppointmentModal } from "../../book-appointment-modal/BookAppointmentModal"
import { fetchBookingQueue } from "../../book-appointment-modal/bookingQueueService.jsx";
import pediatricIASchemas from "../../../schema/audiology/pediatricIA";
import { ACTIONS_BUTTON } from "../../../schema/actions";

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
  const [bookingQueueRow, setBookingQueueRow] = useState(null);
  const bookingRow = {
    id: bookingQueueRow?.booking_id || bookingQueueRow?.id,
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
    const loadBookingQueue = async () => {
      try {
        const data = await fetchBookingQueue({
          department_id: departmentId,
          limit: 100,
        });

        const patientName = (patient?.full_name || patient?.name || "").trim().toLowerCase();
        const row = data.rows.find(
          (r) => (r.patient_name || "").trim().toLowerCase() === patientName,
        );

        setBookingQueueRow(row || null);
      } catch (err) {
        console.error(err);
      }
    };

    if (patient) {
      loadBookingQueue();
    }
  }, [patient, departmentId]);

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

    const token = localStorage.getItem("access_token");
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
  /* ===================== SCHEMAS (from src/schema/audiology) ===================== */

  const soapSchemas = pediatricIASchemas;

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
