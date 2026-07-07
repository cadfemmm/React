export default function FieldPreview({ field }) {
  const { type, placeholder, options = [], content } = field;

  switch (type) {
    case "textarea":
      return (
        <textarea
          className="fb-preview-control fb-preview-textarea"
          placeholder={placeholder}
          readOnly
          rows={3}
        />
      );

    case "number":
      return (
        <input
          type="number"
          className="fb-preview-control"
          placeholder={placeholder}
          readOnly
        />
      );

    case "date":
      return <input type="date" className="fb-preview-control" readOnly />;

    case "dropdown":
      return (
        <select className="fb-preview-control" disabled defaultValue="">
          <option value="" disabled>
            Select an option...
          </option>
          {options.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      );

    case "radio":
      return (
        <div className="fb-preview-options">
          {options.map((opt, i) => (
            <label key={i} className="fb-preview-option">
              <input type="radio" name={field.id} disabled />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      );

    case "checkbox":
      return (
        <div className="fb-preview-options">
          {options.map((opt, i) => (
            <label key={i} className="fb-preview-option">
              <input type="checkbox" disabled />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      );

    case "file":
      return (
        <div className="fb-preview-file">
          Click or drag to upload files
        </div>
      );

    case "section":
      return <div className="fb-preview-section">{field.label}</div>;

    case "instructions":
      return <p className="fb-preview-instructions">{content}</p>;

    default:
      return (
        <input
          type="text"
          className="fb-preview-control"
          placeholder={placeholder}
          readOnly
        />
      );
  }
}
