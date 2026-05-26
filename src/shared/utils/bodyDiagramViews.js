/** Segmented body diagram tabs (Body / Feet / Hands) for wound & pain location markers */
export const SEGMENTED_BODY_DIAGRAM_VIEWS = [
  { key: "body", label: "Body (Front/Back)", src: "/body_high.png" },
  { key: "feet", label: "Feet", src: "/feet_high.png" },
  { key: "hands", label: "Hands", src: "/palm.png" },
];

/**
 * Normalizes schema view definitions for WoundLocationMarker.
 * @param {Array<{ key: string, label: string, src?: string, backgroundImage?: string }>} views
 * @param {object} [_patient] - reserved for patient-specific diagram variants
 */
export function resolveBodyDiagramViews(views, _patient) {
  const list =
    views && views.length > 0 ? views : SEGMENTED_BODY_DIAGRAM_VIEWS;

  return list.map((view) => ({
    key: view.key,
    label: view.label,
    src: view.src || view.backgroundImage || "",
  }));
}
