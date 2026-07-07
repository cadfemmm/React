import { create } from "zustand";
import { createField } from "./fieldTypes";

const MAX_HISTORY = 50;

function snapshot(state) {
  return {
    formTitle: state.formTitle,
    formDescription: state.formDescription,
    section: state.section,
    fields: JSON.parse(JSON.stringify(state.fields)),
  };
}

function pushHistory(state) {
  const past = [...state.history.past, snapshot(state)].slice(-MAX_HISTORY);
  return { past, future: [] };
}

export const useFormStore = create((set, get) => ({
  formTitle: "Untitled Form",
  formDescription: "",
  section: "Intake",
  fields: [],
  selectedFieldId: null,
  isDirty: false,
  draggedType: null,
  reorderFieldId: null,
  dropTargetIndex: null,
  history: { past: [], future: [] },

  setFormTitle: (formTitle) => set({ formTitle, isDirty: true }),
  setFormDescription: (formDescription) => set({ formDescription, isDirty: true }),
  setSection: (section) => set({ section, isDirty: true }),

  setDraggedType: (type) => set({ draggedType: type }),
  setReorderFieldId: (id) => set({ reorderFieldId: id }),
  setDropTargetIndex: (index) => set({ dropTargetIndex: index }),

  setSelectedField: (id) => set({ selectedFieldId: id }),

  addField: (type, index = null) =>
    set((state) => {
      const field = createField(type);
      const fields = [...state.fields];
      const insertAt = index === null ? fields.length : index;
      fields.splice(insertAt, 0, field);
      return {
        ...pushHistory(state),
        fields,
        selectedFieldId: field.id,
        isDirty: true,
      };
    }),

  duplicateField: (id) =>
    set((state) => {
      const idx = state.fields.findIndex((f) => f.id === id);
      if (idx === -1) return state;
      const copy = {
        ...JSON.parse(JSON.stringify(state.fields[idx])),
        id: `field_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      };
      const fields = [...state.fields];
      fields.splice(idx + 1, 0, copy);
      return {
        ...pushHistory(state),
        fields,
        selectedFieldId: copy.id,
        isDirty: true,
      };
    }),

  deleteField: (id) =>
    set((state) => ({
      ...pushHistory(state),
      fields: state.fields.filter((f) => f.id !== id),
      selectedFieldId: state.selectedFieldId === id ? null : state.selectedFieldId,
      isDirty: true,
    })),

  reorderField: (fromIndex, toIndex) =>
    set((state) => {
      if (fromIndex === toIndex || fromIndex < 0 || toIndex < 0) return state;
      const fields = [...state.fields];
      if (fromIndex >= fields.length || toIndex >= fields.length) return state;
      const [moved] = fields.splice(fromIndex, 1);
      let insertAt = toIndex;
      if (fromIndex < toIndex) insertAt = toIndex - 1;
      fields.splice(insertAt, 0, moved);
      return {
        ...pushHistory(state),
        fields,
        isDirty: true,
      };
    }),

  updateField: (id, updates) =>
    set((state) => ({
      ...pushHistory(state),
      fields: state.fields.map((f) => (f.id === id ? { ...f, ...updates } : f)),
      isDirty: true,
    })),

  updateFieldValidation: (id, validationUpdates) =>
    set((state) => ({
      ...pushHistory(state),
      fields: state.fields.map((f) =>
        f.id === id
          ? { ...f, validation: { ...f.validation, ...validationUpdates } }
          : f
      ),
      isDirty: true,
    })),

  updateFieldOptions: (id, options) =>
    set((state) => ({
      ...pushHistory(state),
      fields: state.fields.map((f) => (f.id === id ? { ...f, options } : f)),
      isDirty: true,
    })),

  undo: () =>
    set((state) => {
      if (state.history.past.length === 0) return state;
      const past = [...state.history.past];
      const previous = past.pop();
      const current = snapshot(state);
      return {
        ...previous,
        history: {
          past,
          future: [current, ...state.history.future],
        },
        isDirty: true,
      };
    }),

  redo: () =>
    set((state) => {
      if (state.history.future.length === 0) return state;
      const future = [...state.history.future];
      const next = future.shift();
      const current = snapshot(state);
      return {
        ...next,
        history: {
          past: [...state.history.past, current],
          future,
        },
        isDirty: true,
      };
    }),

  exportFormJson: () => {
    const { formTitle, formDescription, section, fields } = get();
    const payload = {
      title: formTitle,
      description: formDescription,
      section,
      fields: fields.map(({ id, type, label, placeholder, content, options, validation }) => ({
        id,
        type,
        label,
        ...(placeholder !== undefined && { placeholder }),
        ...(content !== undefined && { content }),
        ...(options && { options }),
        validation: {
          required: Boolean(validation?.required),
          ...(validation?.min !== "" && validation?.min != null && { min: Number(validation.min) }),
          ...(validation?.max !== "" && validation?.max != null && { max: Number(validation.max) }),
          ...(validation?.minLength !== "" && validation?.minLength != null && {
            minLength: Number(validation.minLength),
          }),
          ...(validation?.maxLength !== "" && validation?.maxLength != null && {
            maxLength: Number(validation.maxLength),
          }),
          ...(validation?.pattern && { pattern: validation.pattern }),
          ...(validation?.errorMessage && { errorMessage: validation.errorMessage }),
        },
      })),
    };

    const json = JSON.stringify(payload, null, 2);
    console.log("FORM JSON:", json);

    const safeName =
      formTitle
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") || "form";
    const filename = `${safeName}.json`;

    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    return payload;
  },

  markSaved: () => set({ isDirty: false }),
}));
