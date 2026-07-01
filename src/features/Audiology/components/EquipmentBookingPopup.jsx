import React, { useEffect, useState } from "react";

function EquipmentPopupField({ label, children }) {
  return (
    <label style={equipmentField}>
      <span style={equipmentLabel}>{label}</span>
      {children}
    </label>
  );
}

export default function EquipmentBookingPopup({
  open,
  equipmentOptions = [],
  selectedEquipment,
  onClose,
  onBooked,
}) {
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
          <button type="button" style={equipmentCloseBtn} onClick={onClose}>
            ×
          </button>
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
                {equipmentOptions.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
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
              <input
                type="text"
                style={equipmentInput}
                placeholder="Enter appointment reference id"
              />
            </EquipmentPopupField>

            <EquipmentPopupField label="Assigned Staff *">
              <select style={equipmentInput}>
                <option value="">Select staff</option>
              </select>
            </EquipmentPopupField>
          </div>

          <div style={equipmentSectionTitle}>Note</div>
          <EquipmentPopupField label="Purpose of Booking *">
            <textarea
              style={equipmentTextarea}
              placeholder="Describe purpose of booking..."
            />
          </EquipmentPopupField>

          <EquipmentPopupField label="Special Handling Instructions *">
            <textarea
              style={equipmentTextarea}
              placeholder="Describe special handling instructions..."
            />
          </EquipmentPopupField>
        </div>

        <div style={equipmentModalFooter}>
          <button type="button" style={equipmentCancelBtn} onClick={onClose}>
            × Cancel
          </button>
          <button
            type="button"
            style={equipmentBookBtn}
            onClick={() => {
              onBooked?.(equipmentId);
            }}
          >
            Book Equipment
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Styles ── */
const equipmentModalOverlay = {
  position: "fixed",
  inset: 0,
  zIndex: 10000,
  background: "rgba(0,0,0,0.45)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 16,
};
const equipmentModal = {
  width: "min(660px, 100%)",
  maxHeight: "98vh",
  overflow: "hidden",
  background: "#fff",
  borderRadius: 10,
  boxShadow: "0 24px 70px rgba(15,23,42,0.25)",
  display: "flex",
  flexDirection: "column",
};
const equipmentModalHeader = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: 16,
  padding: "18px 22px 14px",
  borderBottom: "1px solid #e5e7eb",
};
const equipmentModalTitle = {
  fontSize: 16,
  fontWeight: 800,
  color: "#24272d",
  lineHeight: 1.2,
};
const equipmentModalSubtitle = { marginTop: 6, fontSize: 14, color: "#7a7f88" };
const equipmentCloseBtn = {
  width: 40,
  height: 40,
  borderRadius: 10,
  border: "1px solid #d7dde7",
  background: "#fff",
  color: "#1f2937",
  fontSize: 24,
  lineHeight: "36px",
  cursor: "pointer",
};
const equipmentModalBody = {
  margin: "5px 14px 0",
  padding: "12px 16px 18px",
  border: "1px solid #dce2ea",
  borderRadius: 12,
  overflowY: "auto",
};
const equipmentSectionTitle = {
  margin: "0 0 14px",
  fontSize: 14,
  fontWeight: 800,
  color: "#24272d",
};
const equipmentGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "14px 10px",
  marginBottom: 22,
};
const equipmentField = { display: "flex", flexDirection: "column", gap: 7, minWidth: 0 };
const equipmentLabel = { fontSize: 14, fontWeight: 700, color: "#344054" };
const equipmentInput = {
  width: "100%",
  minHeight: 26,
  border: "1px solid #cfd7e4",
  borderRadius: 10,
  padding: "10px 16px",
  fontSize: 16,
  color: "#111827",
  background: "#fff",
  boxSizing: "border-box",
};
const equipmentTextarea = {
  ...equipmentInput,
  minHeight: 68,
  resize: "vertical",
  marginBottom: 14,
};
const equipmentModalFooter = {
  display: "flex",
  justifyContent: "flex-end",
  gap: 10,
  padding: "14px 20px",
  borderTop: "1px solid #e5e7eb",
};
const equipmentCancelBtn = {
  padding: "10px 18px",
  border: "1px solid #d7dde7",
  borderRadius: 10,
  background: "#fff",
  color: "#24272d",
  fontSize: 16,
  fontWeight: 600,
  cursor: "pointer",
};
const equipmentBookBtn = {
  padding: "10px 20px",
  border: "none",
  borderRadius: 10,
  background: "#0b5cff",
  color: "#fff",
  fontSize: 16,
  fontWeight: 700,
  cursor: "pointer",
};
