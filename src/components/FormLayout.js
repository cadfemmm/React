import React from "react";

export function Row({ label, children, icon }) {
  return (
    <div className="row">
      <div className="label">
        <div>{label}</div>
        {icon && (
          <span className="icon" title="visibility">
            {icon}
          </span>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}

export function DateTriple({ form, onChange, pfx, days, months, years }) {
  return (
    <div className="triple">
      <select
        className="input"
        value={form[`${pfx}_day`]}
        onChange={(e) => onChange(`${pfx}_day`, e.target.value)}
      >
        <option value="">DD</option>
        {days.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
      <select
        className="input"
        value={form[`${pfx}_month`]}
        onChange={(e) => onChange(`${pfx}_month`, e.target.value)}
      >
        <option value="">MM</option>
        {months.map((m) => (
          <option key={m.v} value={m.v}>
            {m.n}
          </option>
        ))}
      </select>
      <select
        className="input"
        value={form[`${pfx}_year`]}
        onChange={(e) => onChange(`${pfx}_year`, e.target.value)}
      >
        <option value="">YYYY</option>
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
      <span className="calendar" title="calendar">
        📅
      </span>
    </div>
  );
}
