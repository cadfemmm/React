import { useState, useEffect } from "react";
import Select from "react-select";
import { API_URL } from "../../../platform/config/api.config";

export default function MedicationAssessment({patient, onSubmit, onBack}) {
    const [formData, setFormData] = useState({})
    const [medications, setMedications] = useState([]);
    const [medicationOptions, setMedicationOptions] = useState([]);
    const [unitOptions, setUnitOptions] = useState([]);
    const storageKey = `patient_${patient?.id}_medications`;

    useEffect(() => {
        fetchMedicationMasters();
        // Load medications from localStorage for this patient
        if (patient?.id) {
            try {
                const stored = localStorage.getItem(storageKey);
                if (stored) {
                    setMedications(JSON.parse(stored));
                }
            } catch (e) {
                console.error('Failed to load medications from localStorage', e);
            }
        }
        }, [patient?.id, storageKey]);

        const fetchMedicationMasters = async () => {
        try {
            const token =
            localStorage.getItem("access_token");

            const response = await fetch(
            API_URL.MEDICATION_MASTER,
            {
                headers: {
                Authorization: `Bearer ${token}`
                }
            }
            );

            const result = await response.json();

            const data = result?.data || [];

            setMedicationOptions(data);

            const uniqueUnits = [
            ...new Set(
                data
                .map(item => item.unit)
                .filter(Boolean)
            )
            ];

            setUnitOptions(uniqueUnits);

        } catch (error) {
            console.error(
            "Failed to fetch medications",
            error
            );
        }
        };
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            let finalValue = value;

            // Medication selected -> auto fill unit
            if (name === "medication_name") {
                const selectedMedication = medicationOptions.find(
                    item => item.medication_name === value
                );

                setFormData(prev => ({
                    ...prev,
                    medication_name: value,
                    unit: selectedMedication?.unit || ""
                }));

                return;
            }

            // Validate and clamp dose (1-1000)
            if (name === "dose" && value !== "") {
                const numValue = parseInt(value, 10);

                if (numValue < 1) finalValue = "1";
                else if (numValue > 1000) finalValue = "1000";
                else finalValue = numValue.toString();
            }

            // Validate and clamp duration (1-30)
            if (name === "duration" && value !== "") {
                const numValue = parseInt(value, 10);

                if (numValue < 1) finalValue = "1";
                else if (numValue > 30) finalValue = "30";
                else finalValue = numValue.toString();
            }

            setFormData(prev => ({
                ...prev,
                [name]: finalValue
            }));
        };

    const calculateCompletionDate = (prescribedDate, duration) => {
        if (!prescribedDate || !duration) return "—"
        const date = new Date(prescribedDate)
        date.setDate(date.getDate() + parseInt(duration))
        return date.toISOString().split('T')[0]
    }

    const handleAddMedication = () => {
        if (!formData.medication_name || !formData.dose || !formData.unit || !formData.frequency || !formData.prescribed_date || !formData.duration || !formData.type) {
            alert("Please fill all fields")
            return
        }

        const newMedication = {
            id: Date.now(),
            ...formData,
            completed_date: calculateCompletionDate(formData.prescribed_date, formData.duration)
        }

        const updatedMeds = [newMedication, ...medications];
        setMedications(updatedMeds);
        // Store medications in localStorage for this patient
        try {
            localStorage.setItem(storageKey, JSON.stringify(updatedMeds));
        } catch (e) {
            console.error('Failed to save medications to localStorage', e);
        }
        setFormData({})
    }

    const handleDeleteMedication = (id) => {
        const updatedMeds = medications.filter(med => med.id !== id);
        setMedications(updatedMeds);
        // Update localStorage when medication is deleted
        try {
            localStorage.setItem(storageKey, JSON.stringify(updatedMeds));
        } catch (e) {
            console.error('Failed to update medications in localStorage', e);
        }
    }

    const getMedicationName = (value) => {
        const medications = {
            "metformin": "Tab Metformin",
            "gliclazide": "Tab Gliclazide",
            "perindopril": "Tab Perindopril",
            "amlodipine": "Tab Amlodipine",
            "cardiprin": "Tab Cardiprin",
            "gabapentin": "Gabapentin",
            "lactulose": "Sy Lactulose",
            "pcm": "Tab PCM",
            "tramadol": "Cap Tramadol",
            "ravin_enema": "Ravin Enema",
            "cloxacillin": "Tab Cloxacillin",
            "celebrex": "Cap Celebrex"
        }
        return medications[value] || value
    }

    return (
        <div style={containerStyle}>
            <div style={tableWrapperFullStyle}>
                <div style={headerStyle}>
                    <h3 style={sectionTitleStyle}>Add Medication</h3>
                </div>
                
                <div style={formTableContainer}>
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={{ ...thStyle, width: "18%" }}>Medication Name</th>
                                <th style={thStyle}>Dose</th>
                                <th style={thStyle}>Unit</th>
                                <th style={thStyle}>Frequency</th>
                                <th style={thStyle}>Prescribed Date</th>
                                <th style={thStyle}>Duration (Days)</th>
                                <th style={thStyle}>Remark</th>
                                <th style={thStyle}>Medication</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={tdStyle}>
                                    <Select
                                    placeholder="Search"
                                    options={medicationOptions.map(item => ({
                                        value: item.medication_name,
                                        label: item.medication_name,
                                        unit: item.unit
                                    }))}
                                    value={
                                        formData.medication_name
                                        ? {
                                            value: formData.medication_name,
                                            label: formData.medication_name
                                            }
                                        : null
                                    }
                                    onChange={(selected) => {
                                        setFormData(prev => ({
                                        ...prev,
                                        medication_name: selected?.value || "",
                                        unit: selected?.unit || ""
                                        }));
                                    }}
                                    isClearable
                                    isSearchable

                                    menuPortalTarget={document.body}
                                    menuPosition="fixed"
                                    menuPlacement="auto"

                                    styles={{
                                        menuPortal: base => ({
                                        ...base,
                                        zIndex: 9999
                                        })
                                    }}
                                    />
                                    </td>
                                <td style={tdStyle}>
                                    <input 
                                        min="1"
                                        max="1000"
                                        type="number"                                        
                                        name="dose" 
                                        style={selectStyle} 
                                        value={formData.dose || ""}
                                        onChange={handleInputChange}
                                    />
                                </td>
                                <td style={tdStyle}>
                                    <select 
                                        style={selectStyle} 
                                        name="unit" 
                                        value={formData.unit || ""}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select</option>
                                            {unitOptions.map(unit => (
                                            <option
                                                key={unit}
                                                value={unit}
                                            >
                                                {unit}
                                            </option>
                                            ))}
                                    </select>
                                </td>
                                <td style={tdStyle}>
                                    <select 
                                        style={selectStyle} 
                                        name="frequency" 
                                        value={formData.frequency || ""}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select</option>
                                        <option value="PRN">As Required</option>
                                        <option value="STAT">Immediately</option>
                                        <option value="OD">Once Per Day</option>
                                        <option value="BD">Twice Per Day</option>
                                        <option value="TDS">3 Times Per Day</option>
                                        <option value="ON">In The Night</option>
                                        <option value="OM">In The Morning</option>
                                        <option value="EOD">Every Other Day</option>
                                        <option value="QID">Every 6 Hours</option>
                                    </select>
                                </td>
                                <td style={tdStyle}>
                                    <input 
                                        type="date" 
                                        style={selectStyle} 
                                        name="prescribed_date" 
                                        value={formData.prescribed_date || ""}
                                        onChange={handleInputChange}
                                    />
                                </td>
                                <td style={tdStyle}>
                                    <input 
                                        min="1"
                                        max="30"
                                        type="number" 
                                        style={selectStyle} 
                                        name="duration" 
                                        placeholder="Days" 
                                        value={formData.duration || ""}
                                        onChange={handleInputChange}
                                    />
                                </td>
                                <td style={tdStyle}>
                                    <input 
                                        type="text" 
                                        style={selectStyle} 
                                        name="remark" 
                                        placeholder="Notes" 
                                        value={formData.remark || ""}
                                        onChange={handleInputChange}
                                    />
                                </td>
                                <td style={tdStyle}>
                                <select
                                    style={selectStyle}
                                    name="type"
                                    value={formData.type || ""}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select</option>
                                    <option value="HOME">Home Medication</option>
                                    <option value="PRESCRIBED">Prescribed Medication</option>
                                </select>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div style={footerStyle}>
                    <button style={buttonStyle} onClick={handleAddMedication}>Add More</button>
                </div>
            </div>

            {medications.length > 0 && (
                <div style={tableWrapperFullStyle}>
                    <div style={headerStyle}>
                        <h3 style={sectionTitleStyle}>Medications List</h3>
                    </div>
                    
                    <div style={formTableContainer}>
                        <table style={tableStyle}>
                            <thead>
                                <tr>
                                    <th style={thStyle}>Medication Name</th>
                                    <th style={thStyle}>Dose</th>
                                    <th style={thStyle}>Frequency</th>
                                    <th style={thStyle}>Prescribed Date</th>
                                    <th style={thStyle}>Duration</th>
                                    <th style={thStyle}>Date Completed</th>
                                    <th style={thStyle}>Remark</th>
                                    <th style={thStyle}>Type</th>
                                    <th style={thStyle}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {medications.map((med) => (
                                    <tr key={med.id}
                                    style={{
                                        color:
                                        med.type === "HOME"
                                            ? "#3b62e0"
                                            : "#0ca948"
                                    }}>
                                    <td style={tdStyle}>{getMedicationName(med.medication_name)}</td>
                                    <td style={tdStyle}>{med.dose} {med.unit}</td>
                                    <td style={tdStyle}>{med.frequency}</td>
                                    <td style={tdStyle}>{med.prescribed_date}</td>
                                    <td style={tdStyle}>{med.duration} days</td>
                                    <td style={tdStyle}>
                                        <strong>{med.completed_date}</strong>
                                    </td>
                                    <td style={tdStyle}>{med.remark || "—"}</td>

                                    <td style={tdStyle}>
                                        <span
                                        style={{
                                            padding: "4px 10px",
                                            borderRadius: "12px",
                                            background:
                                            med.type === "HOME"
                                                ? "#E3F2FD"
                                                : "#E8F5E9",
                                            color:
                                            med.type === "HOME"
                                                ? "#1565C0"
                                                : "#2E7D32",
                                            fontWeight: 600,
                                            fontSize: "11px"
                                        }}
                                        >
                                        {med.type === "HOME"
                                            ? "Home Medication"
                                            : "Prescribed Medication"}
                                        </span>
                                    </td>

                                    <td style={tdStyle}>
                                        <button
                                        style={deleteButtonStyle}
                                        onClick={() => handleDeleteMedication(med.id)}
                                        >
                                        Remove
                                        </button>
                                    </td>
                                    </tr>
                                ))}
                                </tbody>
                        </table>
                          <div
                            style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            padding: "16px"
                            }}
                        >
                            <button
                            type="button"
                            onClick={() => alert("Prescribed")}
                            style={{
                                background: "#16A34A",
                                color: "#fff",
                                border: "none",
                                borderRadius: "8px",
                                padding: "10px 24px",
                                fontSize: "14px",
                                fontWeight: 600,
                                cursor: "pointer"
                            }}
                            >
                            Prescribe
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

const containerStyle = {
    width: "100%",
    backgroundColor: "#f9f9f9"
}

const tableWrapperFullStyle = {
    marginBottom: "30px",
    backgroundColor: "#fff",
    borderRadius: "6px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)",
    display: "flex",
    flexDirection: "column",
    height: "100%"
}

const headerStyle = {
    padding: "20px",
    borderBottom: "1px solid #eee"
}

const sectionTitleStyle = {
    marginTop: "0",
    marginBottom: "0",
    fontSize: "16px",
    fontWeight: "600",
    color: "#333"
}

const formTableContainer = {
    width: "100%",
    overflowX: "auto",
    overflowY: "visible",
    flex: "1",
    padding: "0"
}

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
    fontSize: "13px"
}

const thStyle = {
    padding: "10px",
    textAlign: "left",
    borderBottom: "2px solid #ddd",
    fontWeight: "600",
    fontSize: "12px",
    color: "#000002",
    backgroundColor: "#F1F1F1"
}

const tdStyle = {
    padding: "10px",
    borderBottom: "1px solid #eee",
    fontSize: "12px"
}

const selectStyle = {
    width: "100%",
    padding: "6px 8px",
    fontSize: "12px",
    border: "1px solid #ccc",
    borderRadius: "3px",
    fontFamily: "inherit",
    boxSizing: "border-box",
    height: "32px",
    lineHeight: "1.5"
}

const footerStyle = {
    padding: "16px 20px",
    borderTop: "1px solid #eee",
    textAlign: "left"
}

const buttonStyle = {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "500"
}

const deleteButtonStyle = {
    padding: "4px 10px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    fontSize: "11px",
    fontWeight: "500"
}