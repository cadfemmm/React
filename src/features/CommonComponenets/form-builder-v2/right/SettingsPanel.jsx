import { Settings } from "lucide-react";
import { useFormStore } from "../core/store";
import { FIELD_TYPE_LABELS } from "../core/fieldTypes";

export default function SettingsPanel() {
  const fields = useFormStore((s) => s.fields);
  const selectedFieldId = useFormStore((s) => s.selectedFieldId);
  const updateField = useFormStore((s) => s.updateField);
  const updateFieldValidation = useFormStore((s) => s.updateFieldValidation);
  const updateFieldOptions = useFormStore((s) => s.updateFieldOptions);

  const field = fields.find((f) => f.id === selectedFieldId);

  if (!field) {
    return (
      <aside className="fb-right">
        <h3 className="fb-panel-title">Field Settings</h3>
        <div className="fb-settings-empty">
          <Settings size={32} strokeWidth={1.5} />
          <p>Select a field to configure.</p>
        </div>
      </aside>
    );
  }

  const hasOptions = ["dropdown", "radio", "checkbox"].includes(field.type);
  const hasPlaceholder = !["section", "instructions", "file"].includes(field.type);
  const hasTextValidation = ["text", "textarea"].includes(field.type);
  const hasNumberValidation = field.type === "number";

  const handleOptionsChange = (value) => {
    const options = value
      .split("\n")
      .map((o) => o.trim())
      .filter(Boolean);
    updateFieldOptions(field.id, options.length ? options : ["Option 1"]);
  };

  return (
    <aside className="fb-right">
      <h3 className="fb-panel-title">Field Settings</h3>
      <p className="fb-settings-type">{FIELD_TYPE_LABELS[field.type]}</p>

      <div className="fb-settings-group">
        <label className="fb-settings-label">Label</label>
        <input
          className="fb-input fb-settings-input"
          value={field.label}
          onChange={(e) => updateField(field.id, { label: e.target.value })}
        />
      </div>

      {hasPlaceholder && (
        <div className="fb-settings-group">
          <label className="fb-settings-label">Placeholder</label>
          <input
            className="fb-input fb-settings-input"
            value={field.placeholder || ""}
            onChange={(e) => updateField(field.id, { placeholder: e.target.value })}
          />
        </div>
      )}

      {field.type === "instructions" && (
        <div className="fb-settings-group">
          <label className="fb-settings-label">Content</label>
          <textarea
            className="fb-input fb-settings-textarea"
            value={field.content || ""}
            onChange={(e) => updateField(field.id, { content: e.target.value })}
            rows={4}
          />
        </div>
      )}

      {hasOptions && (
        <div className="fb-settings-group">
          <label className="fb-settings-label">Options (one per line)</label>
          <textarea
            className="fb-input fb-settings-textarea"
            value={(field.options || []).join("\n")}
            onChange={(e) => handleOptionsChange(e.target.value)}
            rows={4}
          />
        </div>
      )}

      <div className="fb-settings-divider">Validation</div>

      <div className="fb-settings-group fb-settings-checkbox">
        <label>
          <input
            type="checkbox"
            checked={Boolean(field.validation?.required)}
            onChange={(e) =>
              updateFieldValidation(field.id, { required: e.target.checked })
            }
          />
          Required field
        </label>
      </div>

      {hasNumberValidation && (
        <>
          <div className="fb-settings-group">
            <label className="fb-settings-label">Minimum value</label>
            <input
              type="number"
              className="fb-input fb-settings-input"
              value={field.validation?.min ?? ""}
              onChange={(e) =>
                updateFieldValidation(field.id, { min: e.target.value })
              }
            />
          </div>
          <div className="fb-settings-group">
            <label className="fb-settings-label">Maximum value</label>
            <input
              type="number"
              className="fb-input fb-settings-input"
              value={field.validation?.max ?? ""}
              onChange={(e) =>
                updateFieldValidation(field.id, { max: e.target.value })
              }
            />
          </div>
        </>
      )}

      {hasTextValidation && (
        <>
          <div className="fb-settings-group">
            <label className="fb-settings-label">Min length</label>
            <input
              type="number"
              className="fb-input fb-settings-input"
              value={field.validation?.minLength ?? ""}
              onChange={(e) =>
                updateFieldValidation(field.id, { minLength: e.target.value })
              }
            />
          </div>
          <div className="fb-settings-group">
            <label className="fb-settings-label">Max length</label>
            <input
              type="number"
              className="fb-input fb-settings-input"
              value={field.validation?.maxLength ?? ""}
              onChange={(e) =>
                updateFieldValidation(field.id, { maxLength: e.target.value })
              }
            />
          </div>
          <div className="fb-settings-group">
            <label className="fb-settings-label">Pattern (regex)</label>
            <input
              className="fb-input fb-settings-input"
              value={field.validation?.pattern || ""}
              onChange={(e) =>
                updateFieldValidation(field.id, { pattern: e.target.value })
              }
              placeholder="e.g. ^[A-Za-z]+$"
            />
          </div>
        </>
      )}

      <div className="fb-settings-group">
        <label className="fb-settings-label">Custom error message</label>
        <input
          className="fb-input fb-settings-input"
          value={field.validation?.errorMessage || ""}
          onChange={(e) =>
            updateFieldValidation(field.id, { errorMessage: e.target.value })
          }
          placeholder="Shown when validation fails"
        />
      </div>
    </aside>
  );
}
