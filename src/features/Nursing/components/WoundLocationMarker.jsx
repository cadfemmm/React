import React, { useState } from "react";
import { resolveBodyDiagramViews } from "../../../shared/utils/bodyDiagramViews";

/**
 * WoundLocationMarker
 *
 * Renders a segmented body diagram (Body / Feet / Hands) and lets the user drop
 * pins on the image to record wound / lesion locations. Value shape:
 *
 *   {
 *     body:  [{ id, x, y, label }],
 *     feet:  [...],
 *     hands: [...]
 *   }
 *
 * Coordinates (x, y) are stored as percentages (0–100) of the image so they
 * remain stable when the image is responsively resized.
 *
 * Props:
 *   value     - object keyed by view key -> array of pins
 *   onChange  - (nextValue) => void
 *   readOnly  - when true, pins cannot be added/edited/removed
 *   views     - array of { key, label, src } view definitions
 */
export default function WoundLocationMarker({
  value = {},
  onChange,
  readOnly = false,
  views,
}) {
  const resolvedViews = resolveBodyDiagramViews(views);
  const [activeView, setActiveView] = useState(resolvedViews[0]?.key || "body");
  const [selectedPin, setSelectedPin] = useState(null);

  const activeSrc = resolvedViews.find(v => v.key === activeView)?.src || "";
  const pins = Array.isArray(value[activeView]) ? value[activeView] : [];

  const updatePins = (nextPins) => {
    onChange?.({ ...(value || {}), [activeView]: nextPins });
  };

  const addPin = (e) => {
    if (readOnly) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.min(100, Math.max(0, ((e.clientY - rect.top) / rect.height) * 100));
    const newPin = { id: Date.now(), x, y, label: `W${pins.length + 1}` };
    updatePins([...pins, newPin]);
    setSelectedPin(newPin.id);
  };

  const removePin = (id) => {
    if (readOnly) return;
    updatePins(pins.filter(p => p.id !== id));
    setSelectedPin(null);
  };

  const renamePin = (id, label) => {
    if (readOnly) return;
    updatePins(pins.map(p => (p.id === id ? { ...p, label } : p)));
  };

  const selected = pins.find(p => p.id === selectedPin) || null;

  return (
    <div style={{ marginTop: 8, fontFamily: "inherit" }}>
      {/* View tabs */}
      {resolvedViews.length > 1 && (
        <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
          {resolvedViews.map(v => (
            <button
              key={v.key}
              type="button"
              onClick={() => { setActiveView(v.key); setSelectedPin(null); }}
              style={{
                padding: "6px 16px",
                borderRadius: 999,
                border: activeView === v.key ? "2px solid #2563eb" : "1px solid #d1d5db",
                background: activeView === v.key ? "#eff6ff" : "#fff",
                color: activeView === v.key ? "#1d4ed8" : "#334155",
                fontWeight: activeView === v.key ? 700 : 500,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              {v.label}
            </button>
          ))}
        </div>
      )}

      {/* Body image + pins */}
      {activeSrc ? (
        <div
          onClick={addPin}
          style={{
            position: "relative",
            display: "inline-block",
            maxWidth: "100%",
            cursor: readOnly ? "default" : "crosshair",
            border: "1px solid #e5e7eb",
            borderRadius: 8,
            overflow: "hidden",
            background: "#fff",
          }}
        >
          <img
            src={activeSrc}
            alt={resolvedViews.find(v => v.key === activeView)?.label || "Body diagram"}
            style={{ display: "block", maxWidth: "100%", height: "auto" }}
            draggable={false}
          />

          {pins.map(pin => (
            <div
              key={pin.id}
              onClick={(e) => { e.stopPropagation(); setSelectedPin(pin.id); }}
              style={{
                position: "absolute",
                left: `${pin.x}%`,
                top: `${pin.y}%`,
                transform: "translate(-50%, -50%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 26,
                height: 26,
                padding: "0 6px",
                borderRadius: 999,
                background: selectedPin === pin.id ? "#2563eb" : "#dc2626",
                color: "#fff",
                fontSize: 11,
                fontWeight: 700,
                cursor: readOnly ? "default" : "pointer",
                boxShadow: selectedPin === pin.id ? "0 0 0 3px rgba(37,99,235,0.35)" : "0 2px 6px rgba(0,0,0,0.3)",
                zIndex: 2,
                userSelect: "none",
                whiteSpace: "nowrap",
              }}
            >
              {pin.label}
            </div>
          ))}
        </div>
      ) : (
        <div style={{ color: "#94a3b8", fontSize: 13, fontStyle: "italic", padding: 8 }}>
          No diagram image available.
        </div>
      )}

      {!readOnly && (
        <div style={{ fontSize: 12, color: "#64748b", marginTop: 8 }}>
          Click the diagram to drop a pin, then click a pin to edit or remove it.
        </div>
      )}

      {/* Selected pin editor */}
      {selected && !readOnly && (
        <div
          style={{
            marginTop: 12,
            padding: "10px 12px",
            border: "1px solid #e5e7eb",
            borderRadius: 8,
            background: "#f8fafc",
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <label style={{ fontSize: 13, fontWeight: 600, color: "#0f172a" }}>
            {selected.label}
          </label>
          <input
            type="text"
            value={selected.label}
            onChange={(e) => renamePin(selected.id, e.target.value)}
            style={{
              flex: 1,
              minWidth: 120,
              padding: "6px 10px",
              borderRadius: 6,
              border: "1px solid #d1d5db",
              fontSize: 13,
            }}
          />
          <button
            type="button"
            onClick={() => removePin(selected.id)}
            style={{
              padding: "6px 14px",
              borderRadius: 6,
              border: "none",
              background: "#ef4444",
              color: "#fff",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
}
