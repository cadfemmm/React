import { FIELD_CATEGORIES } from "../core/fieldTypes";
import { useFormStore } from "../core/store";

export default function Toolbox() {
  const setDraggedType = useFormStore((s) => s.setDraggedType);

  const handleDragStart = (e, type) => {
    e.dataTransfer.setData("application/x-field-type", type);
    e.dataTransfer.setData("text/plain", type);
    e.dataTransfer.effectAllowed = "copy";
    setDraggedType(type);
  };

  const handleDragEnd = () => {
    setDraggedType(null);
  };

  return (
    <aside className="fb-left">
      <h3 className="fb-panel-title">Field Types</h3>

      {FIELD_CATEGORIES.map((category) => (
        <div key={category.id} className="fb-category">
          <div className="fb-category-label">{category.label}</div>
          <div className="fb-tool-list">
            {category.fields.map((field) => (
              <div
                key={field.type}
                className="fb-tool-item"
                draggable
                onDragStart={(e) => handleDragStart(e, field.type)}
                onDragEnd={handleDragEnd}
              >
                <span className="fb-tool-icon">{field.icon}</span>
                <span>{field.label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}
