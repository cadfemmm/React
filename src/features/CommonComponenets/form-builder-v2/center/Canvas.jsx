import { useRef } from "react";
import { useFormStore } from "../core/store";
import { FIELD_TYPE_LABELS } from "../core/fieldTypes";
import FieldPreview from "./FieldPreview";
import { GripVertical, Copy, Trash2 } from "lucide-react";

function isNewFieldDrag(e) {
  return (
    e.dataTransfer.types.includes("application/x-field-type") ||
    e.dataTransfer.types.includes("text/plain")
  );
}

function isReorderDrag(e) {
  return e.dataTransfer.types.includes("application/x-reorder-id");
}

export default function Canvas() {
  const fields = useFormStore((s) => s.fields);
  const selectedFieldId = useFormStore((s) => s.selectedFieldId);
  const section = useFormStore((s) => s.section);
  const dropTargetIndex = useFormStore((s) => s.dropTargetIndex);
  const setSection = useFormStore((s) => s.setSection);
  const setSelectedField = useFormStore((s) => s.setSelectedField);
  const addField = useFormStore((s) => s.addField);
  const duplicateField = useFormStore((s) => s.duplicateField);
  const deleteField = useFormStore((s) => s.deleteField);
  const reorderField = useFormStore((s) => s.reorderField);
  const setDraggedType = useFormStore((s) => s.setDraggedType);
  const setReorderFieldId = useFormStore((s) => s.setReorderFieldId);
  const setDropTargetIndex = useFormStore((s) => s.setDropTargetIndex);

  const dropHandledRef = useRef(false);

  const getFieldTypeFromEvent = (e) =>
    e.dataTransfer.getData("application/x-field-type") ||
    e.dataTransfer.getData("text/plain");

  const resetDragState = () => {
    setDraggedType(null);
    setReorderFieldId(null);
    setDropTargetIndex(null);
  };

  const handleCanvasDragOver = (e) => {
    e.preventDefault();
    if (isNewFieldDrag(e)) {
      e.dataTransfer.dropEffect = "copy";
    } else if (isReorderDrag(e)) {
      e.dataTransfer.dropEffect = "move";
    }
    if (fields.length === 0 && isNewFieldDrag(e)) {
      setDropTargetIndex(0);
    }
  };

  const handleItemDragOver = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    if (isNewFieldDrag(e)) {
      e.dataTransfer.dropEffect = "copy";
      setDropTargetIndex(index);
    } else if (isReorderDrag(e)) {
      e.dataTransfer.dropEffect = "move";
      setDropTargetIndex(index);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (dropHandledRef.current) return;
    dropHandledRef.current = true;
    requestAnimationFrame(() => {
      dropHandledRef.current = false;
    });

    const reorderId = e.dataTransfer.getData("application/x-reorder-id");
    if (reorderId) {
      const fromIndex = fields.findIndex((f) => f.id === reorderId);
      const toIndex = dropTargetIndex ?? fields.length;
      if (fromIndex !== -1 && fromIndex !== toIndex) {
        reorderField(fromIndex, toIndex);
      }
      resetDragState();
      return;
    }

    const type = getFieldTypeFromEvent(e);
    if (type) {
      addField(type, dropTargetIndex ?? fields.length);
      resetDragState();
    }
  };

  const handleHandleDragStart = (e, fieldId) => {
    e.dataTransfer.setData("application/x-reorder-id", fieldId);
    e.dataTransfer.effectAllowed = "move";
    setReorderFieldId(fieldId);
  };

  const handleHandleDragEnd = () => {
    resetDragState();
  };

  return (
    <main className="fb-center">
      <div className="fb-canvas-header">
        <h3 className="fb-panel-title">Form Canvas</h3>
        <select
          className="fb-select"
          value={section}
          onChange={(e) => setSection(e.target.value)}
        >
          <option value="Intake">Intake</option>
          <option value="Assessment">Assessment</option>
          <option value="Follow-up">Follow-up</option>
          <option value="Discharge">Discharge</option>
        </select>
      </div>

      <div
        className="fb-canvas-body"
        onDragOver={handleCanvasDragOver}
        onDrop={handleDrop}
        onDragLeave={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setDropTargetIndex(null);
          }
        }}
      >
        {fields.length === 0 ? (
          <div className="fb-canvas-empty">
            <p>Drag fields here to build your form</p>
          </div>
        ) : (
          fields.map((field, index) => (
            <div key={field.id}>
              {dropTargetIndex === index && (
                <div className="fb-drop-indicator" />
              )}
              <div
                className={`fb-field-card ${
                  selectedFieldId === field.id ? "fb-field-card-selected" : ""
                }`}
                onClick={() => setSelectedField(field.id)}
                onDragOver={(e) => handleItemDragOver(e, index)}
              >
                <button
                  type="button"
                  className="fb-drag-handle"
                  draggable
                  onDragStart={(e) => {
                    e.stopPropagation();
                    handleHandleDragStart(e, field.id);
                  }}
                  onDragEnd={handleHandleDragEnd}
                  onClick={(e) => e.stopPropagation()}
                  title="Drag to reorder"
                >
                  <GripVertical size={16} />
                </button>

                <div className="fb-field-content">
                  <div className="fb-field-header">
                    <div className="fb-field-label-row">
                      <span className="fb-field-label">
                        {field.label}
                        {field.validation?.required && (
                          <span className="fb-required">*</span>
                        )}
                      </span>
                      <span className="fb-field-badge">
                        {FIELD_TYPE_LABELS[field.type] || field.type}
                      </span>
                    </div>
                    <div className="fb-field-actions">
                      <button
                        type="button"
                        className="fb-btn fb-btn-icon-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          duplicateField(field.id);
                        }}
                        title="Duplicate"
                      >
                        <Copy size={14} />
                      </button>
                      <button
                        type="button"
                        className="fb-btn fb-btn-icon-sm fb-btn-danger"
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteField(field.id);
                        }}
                        title="Delete"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                  <FieldPreview field={field} />
                </div>
              </div>
            </div>
          ))
        )}

        {fields.length > 0 && dropTargetIndex === fields.length && (
          <div className="fb-drop-indicator" />
        )}

        {fields.length > 0 && (
          <div
            className="fb-canvas-drop-zone"
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (isNewFieldDrag(e) || isReorderDrag(e)) {
                setDropTargetIndex(fields.length);
              }
            }}
          />
        )}
      </div>
    </main>
  );
}
