import React, { useEffect, useMemo, useState } from "react";
import EmptyState from "../../shared/ui/EmptyState";
import { ShimmerRow } from "../../shared/ui/Shimmer";
import {
  fetchPatientsList,
  normalizePatientList,
} from "../../shared/api/patientsList";

const AVATAR_COLORS = ["#DBEAFE", "#D1FAE5", "#FEF3C7", "#FCE7F3", "#EDE9FE", "#FFEDD5"];

function patientBelongsToDepartment(p, department) {
  if (!department) return true;
  if (!Array.isArray(p.departments)) return true;
  if (department === "Nursing") {
    return (
      p.departments.includes("Nursing") ||
      p.departments.includes("Medical Assistant")
    );
  }
  return p.departments.includes(department);
}

function patientKey(p) {
  return String(p?.id ?? p?.patient_id ?? p?.mrn ?? "");
}

function SelectablePatientRow({
  patient: p,
  idx,
  selected,
  onToggle,
}) {
  const displayName = p.name || p.patient_name || p.email || "—";
  const initial = (displayName[0] || "P").toUpperCase();
  const id = patientKey(p);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onToggle(p)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle(p);
        }
      }}
      style={{
        display: "grid",
        gridTemplateColumns: "40px 2.5fr 1.8fr 1.2fr",
        padding: "14px 20px",
        alignItems: "center",
        borderBottom: "1px solid #F1F5F9",
        background: selected ? "#EFF6FF" : idx % 2 === 0 ? "#fff" : "#FAFBFC",
        cursor: "pointer",
        transition: "background .15s",
      }}
    >
      <input
        type="checkbox"
        checked={selected}
        onChange={() => onToggle(p)}
        onClick={(e) => e.stopPropagation()}
        style={{ width: 16, height: 16, cursor: "pointer", accentColor: "#2563eb" }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: AVATAR_COLORS[initial.charCodeAt(0) % AVATAR_COLORS.length],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 13,
            fontWeight: 700,
            color: "#1E40AF",
            flexShrink: 0,
          }}
        >
          {initial}
        </div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#111827" }}>
            {displayName}
          </div>
          {(p.age || p.gender) && (
            <div style={{ fontSize: 12, color: "#6B7280", marginTop: 2 }}>
              {[p.age && `${p.age} yrs`, p.gender].filter(Boolean).join(" · ")}
            </div>
          )}
        </div>
      </div>
      <div style={{ fontSize: 13, color: "#6B7280", fontFamily: "monospace" }}>
        {p.mrn || p.icd || p.patient_id || "—"}
      </div>
      <div style={{ fontSize: 13, color: "#475569" }}>{p.status || "—"}</div>
    </div>
  );
}

export default function GroupInterventionPatientPicker({
  department,
  patients: patientsFallback = [],
  initialSelected = [],
  onBack,
  onProceed,
}) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [patients, setPatients] = useState([]);
  const [selectedIds, setSelectedIds] = useState(() =>
    new Set(initialSelected.map(patientKey).filter(Boolean)),
  );

  const departmentLabel = department === "Nursing" ? "Nursing & MA" : department;

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setLoading(true);
      try {
        const list = await fetchPatientsList();
        if (!cancelled) {
          setPatients(list.length > 0 ? list : normalizePatientList(patientsFallback));
        }
      } catch {
        if (!cancelled) {
          setPatients(normalizePatientList(patientsFallback));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [department, patientsFallback]);

  const deptPatients = useMemo(
    () => patients.filter((p) => patientBelongsToDepartment(p, department)),
    [patients, department],
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return deptPatients;
    return deptPatients.filter(
      (p) =>
        (p.name || p.patient_name || "").toLowerCase().includes(q) ||
        (p.mrn || "").toLowerCase().includes(q) ||
        String(p.patient_id || "").toLowerCase().includes(q),
    );
  }, [deptPatients, search]);

  const selectedPatients = useMemo(
    () => deptPatients.filter((p) => selectedIds.has(patientKey(p))),
    [deptPatients, selectedIds],
  );

  const allFilteredSelected =
    filtered.length > 0 && filtered.every((p) => selectedIds.has(patientKey(p)));

  const togglePatient = (p) => {
    const id = patientKey(p);
    if (!id) return;
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleSelectAll = () => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (allFilteredSelected) {
        filtered.forEach((p) => next.delete(patientKey(p)));
      } else {
        filtered.forEach((p) => {
          const id = patientKey(p);
          if (id) next.add(id);
        });
      }
      return next;
    });
  };

  return (
    <div
      style={{
        padding: "28px 28px 100px",
        minHeight: "100vh",
        fontFamily: "Inter, Roboto, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
          marginBottom: 20,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button
            type="button"
            onClick={onBack}
            className="dash-btn-outline"
            style={{
              padding: "8px 14px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            ← Back
          </button>
          <div>
            <h1
              style={{
                fontSize: 24,
                fontWeight: 800,
                color: "#0F172A",
                margin: "0 0 4px 0",
              }}
            >
              Group Intervention
            </h1>
            <p style={{ fontSize: 13, color: "#475569", margin: 0 }}>
              Select patients from today&apos;s {departmentLabel} queue
            </p>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            maxWidth: 520,
            position: "relative",
            display: "flex",
            alignItems: "center",
            background: "#fff",
            border: "1px solid #D1D5DB",
            borderRadius: 16,
            boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
          }}
        >
          <input
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "none",
              borderRadius: 16,
              fontSize: 13,
              fontWeight: 500,
              outline: "none",
            }}
            placeholder="Search patient name or MRN"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div
        style={{
          background: "#fff",
          borderRadius: 28,
          border: "1px solid #E5E7EB",
          overflow: "hidden",
          boxShadow: "0 24px 80px rgba(15,23,42,0.08)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "40px 2.5fr 1.8fr 1.2fr",
            padding: "18px 24px",
            background: "#F8FAFC",
            borderBottom: "1px solid #E6E8F0",
            alignItems: "center",
          }}
        >
          <input
            type="checkbox"
            checked={allFilteredSelected}
            onChange={toggleSelectAll}
            title="Select all"
            style={{ width: 16, height: 16, cursor: "pointer", accentColor: "#2563eb" }}
          />
          {["Patient", "MRN / ID", "Status"].map((h) => (
            <div
              key={h}
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#64748B",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
              }}
            >
              {h}
            </div>
          ))}
        </div>

        {loading ? (
          Array.from({ length: 5 }, (_, i) => <ShimmerRow key={i} />)
        ) : filtered.length === 0 ? (
          <EmptyState
            icon="🧑‍⚕️"
            title={search ? "No patients match your search" : "No patients found"}
            message={
              search
                ? "Try a different name or MRN."
                : `Today's patients for ${departmentLabel} will appear here.`
            }
          />
        ) : (
          filtered.map((p, idx) => (
            <SelectablePatientRow
              key={patientKey(p) || idx}
              patient={p}
              idx={idx}
              selected={selectedIds.has(patientKey(p))}
              onToggle={togglePatient}
            />
          ))
        )}
      </div>

      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          padding: "16px 28px",
          background: "#fff",
          borderTop: "1px solid #e5e7eb",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 16,
          boxShadow: "0 -4px 20px rgba(15,23,42,0.06)",
          zIndex: 50,
        }}
      >
        <span style={{ fontSize: 14, color: "#475569", marginRight: "auto" }}>
          <strong>{selectedPatients.length}</strong> patient
          {selectedPatients.length !== 1 ? "s" : ""} selected
        </span>
        <button
          type="button"
          onClick={onBack}
          style={{
            padding: "10px 22px",
            borderRadius: 8,
            border: "1px solid #cbd5e1",
            background: "#fff",
            color: "#334155",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
        <button
          type="button"
          disabled={selectedPatients.length === 0}
          onClick={() => onProceed?.(selectedPatients)}
          style={{
            padding: "10px 28px",
            borderRadius: 8,
            border: "none",
            background: selectedPatients.length === 0 ? "#94a3b8" : "#2563eb",
            color: "#fff",
            fontSize: 14,
            fontWeight: 700,
            cursor: selectedPatients.length === 0 ? "not-allowed" : "pointer",
          }}
        >
          Proceed →
        </button>
      </div>
    </div>
  );
}
