import {
  ArrowLeft,
  Undo2,
  Redo2,
  Save,
  FileCheck,
  Download,
} from "lucide-react";
import Layout from "./Layout";
import { useFormStore } from "./core/store";

export default function FormBuilderShell({ onClose }) {
  const formTitle = useFormStore((s) => s.formTitle);
  const formDescription = useFormStore((s) => s.formDescription);
  const fields = useFormStore((s) => s.fields);
  const isDirty = useFormStore((s) => s.isDirty);
  const history = useFormStore((s) => s.history);
  const setFormTitle = useFormStore((s) => s.setFormTitle);
  const setFormDescription = useFormStore((s) => s.setFormDescription);
  const undo = useFormStore((s) => s.undo);
  const redo = useFormStore((s) => s.redo);
  const exportFormJson = useFormStore((s) => s.exportFormJson);
  const markSaved = useFormStore((s) => s.markSaved);

  const handleSaveDraft = () => {
    markSaved();
  };

  const handlePublish = () => {
    markSaved();
  };

  return (
    <div className="fb-shell">
      <header className="fb-topbar">
        <div className="fb-topbar-left">
          <button type="button" className="fb-btn fb-btn-ghost" onClick={onClose}>
            <ArrowLeft size={16} />
            Back
          </button>
          <input
            className="fb-input fb-title-input"
            value={formTitle}
            onChange={(e) => setFormTitle(e.target.value)}
            placeholder="Form title"
          />
          <input
            className="fb-input fb-desc-input"
            value={formDescription}
            onChange={(e) => setFormDescription(e.target.value)}
            placeholder="Description"
          />
        </div>

        <div className="fb-topbar-center">
          <button
            type="button"
            className="fb-btn fb-btn-icon"
            onClick={undo}
            disabled={history.past.length === 0}
            title="Undo"
          >
            <Undo2 size={16} />
          </button>
          <button
            type="button"
            className="fb-btn fb-btn-icon"
            onClick={redo}
            disabled={history.future.length === 0}
            title="Redo"
          >
            <Redo2 size={16} />
          </button>
          <span className="fb-field-count">{fields.length} fields</span>
          {isDirty && <span className="fb-unsaved-badge">Unsaved</span>}
        </div>

        <div className="fb-topbar-right">
          <button type="button" className="fb-btn fb-btn-outline" onClick={handleSaveDraft}>
            <Save size={15} />
            Save Draft
          </button>
          <button type="button" className="fb-btn fb-btn-outline" onClick={exportFormJson}>
            <Download size={15} />
            Export JSON
          </button>
          <button type="button" className="fb-btn fb-btn-primary" onClick={handlePublish}>
            <FileCheck size={15} />
            Publish
          </button>
        </div>
      </header>

      <Layout />
    </div>
  );
}
