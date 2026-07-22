const AGITATED_BEHAVIOUR_SCALE_SCHEMA = {
  "title": "Agitated Behaviour Scale (ABS)",
  "enableLanguageToggle": false,
  "sections": [
    {
      "title": "Matrix Tracking",
      "fields": [
        {
          "type": "custom",
          "name": "absMatrix",
          "component": "agitated-behaviour-scale-matrix"
        }
      ]
    }
  ]
};

/**
 * ==============================================================
 * DATA SHAPE (for backend storage / API contract)
 * ==============================================================
 *
 * The ABS form stores **session‑based multi‑timepoint** data.
 *
 * ─────────────────────────────────────────────────────────
 * 1. Top‑level form values
 * ─────────────────────────────────────────────────────────
 * {
 *   "abs_sessions": [                       // Array of session objects
 *     {
 *       "date": "2025‑01‑15",               // Observation date
 *       "time": "08:00",                    // Start time
 *       "to": "12:00",                      // End time
 *       "scores": [                         // 14 element array, one per behaviour
 *         "1",   // 1. Short attention span …
 *         "2",   // 2. Impulsive …
 *         "3",   // 3. Uncooperative …
 *         "1",   // 4. Violent …
 *         "2",   // 5. Explosive anger …
 *         "3",   // 6. Rocking / moaning …
 *         "4",   // 7. Pulling at tubes …
 *         "1",   // 8. Wandering …
 *         "3",   // 9. Restlessness …
 *         "2",   // 10. Repetitive behaviours …
 *         "4",   // 11. Rapid / loud talking …
 *         "2",   // 12. Sudden mood changes …
 *         "1",   // 13. Excessive crying / laughter …
 *         "3"    // 14. Self‑abusiveness …
 *       ]
 *     }
 *     // … more sessions (typically 1–5)
 *   ]
 * }
 *
 * ─────────────────────────────────────────────────────────
 * 2. Flat field (single‑session / legacy)
 * ─────────────────────────────────────────────────────────
 * {
 *   "abs_date":           "2025‑01‑15",
 *   "abs_time":           "08:00",
 *   "abs_to":             "12:00",
 *   "abs_1":              "1",     // Short attention span
 *   "abs_2":              "2",     // Impulsive
 *   "abs_3":              "3",     // Uncooperative
 *   "abs_4":              "1",     // Violent
 *   "abs_5":              "2",     // Explosive anger
 *   "abs_6":              "3",     // Rocking / moaning
 *   "abs_7":              "4",     // Pulling at tubes
 *   "abs_8":              "1",     // Wandering
 *   "abs_9":              "3",     // Restlessness
 *   "abs_10":             "2",     // Repetitive behaviours
 *   "abs_11":             "4",     // Rapid / loud talking
 *   "abs_12":             "2",     // Sudden mood changes
 *   "abs_13":             "1",     // Excessive crying / laughter
 *   "abs_14":             "3",     // Self‑abusiveness
 *   "abs_total":          33,      // Computed total
 *   "abs_interpretation": "Moderate Agitation"
 * }
 *
 * ─────────────────────────────────────────────────────────
 * 3. Interpretation ranges
 * ─────────────────────────────────────────────────────────
 *   ≤ 21  →  "Within Normal Limits"
 *  22‑28  →  "Mild Agitation"
 *  29‑35  →  "Moderate Agitation"
 *   > 35  →  "Severe Agitation"
 *
 * ─────────────────────────────────────────────────────────
 * 4. Score key per behaviour
 * ─────────────────────────────────────────────────────────
 *   1 = Absent     — The behaviour is not present.
 *   2 = Slight     — Present but does not prevent appropriate behaviour.
 *   3 = Moderate   — Needs redirection; benefits from cueing.
 *   4 = Extreme    — Unable to engage in appropriate behaviour.
 * ─────────────────────────────────────────────────────────
 */

// ── Behaviour lookup table ──
export const ABS_BEHAVIOURS = [
  { id: 1,  label: "Short attention span, easy distractibility, inability to concentrate." },
  { id: 2,  label: "Impulsive, impatient, low tolerance for pain or frustration." },
  { id: 3,  label: "Uncooperative, resistant to care, demanding." },
  { id: 4,  label: "Violent and or threatening violence toward people or property." },
  { id: 5,  label: "Explosive and/or unpredictable anger." },
  { id: 6,  label: "Rocking, rubbing, moaning or other self-stimulating behavior." },
  { id: 7,  label: "Pulling at tubes, restraints, etc." },
  { id: 8,  label: "Wandering from treatment areas." },
  { id: 9,  label: "Restlessness, pacing, excessive movement." },
  { id: 10, label: "Repetitive behaviors, motor and/or verbal." },
  { id: 11, label: "Rapid, loud or excessive talking." },
  { id: 12, label: "Sudden changes of mood." },
  { id: 13, label: "Easily initiated or excessive crying and/or laughter." },
  { id: 14, label: "Self-abusiveness, physical and/or verbal." },
];

// ── Score options ──
export const ABS_SCORE_OPTIONS = [
  { value: "1", label: "1 — Absent" },
  { value: "2", label: "2 — Slight" },
  { value: "3", label: "3 — Moderate" },
  { value: "4", label: "4 — Extreme" },
];

// ── Interpretation lookup ──
export const ABS_INTERPRETATION = [
  { min: 0,  max: 21,  label: "Within Normal Limits", color: "#166534", bg: "#dcfce7" },
  { min: 22, max: 28,  label: "Mild Agitation",       color: "#92400e", bg: "#fef9c3" },
  { min: 29, max: 35,  label: "Moderate Agitation",   color: "#c2410c", bg: "#ffedd5" },
  { min: 36, max: 56,  label: "Severe Agitation",      color: "#991b1b", bg: "#fee2e2" },
];

/**
 * Compute total score from an array of 14 score strings.
 * @param {string[]} scores - Array of 14 score values ("1"–"4").
 * @returns {number} Total score (14–56).
 */
export function computeAbsTotal(scores) {
  if (!Array.isArray(scores) || scores.length !== 14) return 0;
  return scores.reduce((sum, v) => sum + (parseInt(v, 10) || 0), 0);
}

/**
 * Get the interpretation object for a given total score.
 * @param {number} total - Computed total score.
 * @returns {{ label: string, color: string, bg: string }}
 */
export function getAbsInterpretation(total) {
  if (!total && total !== 0) return null;
  const entry = ABS_INTERPRETATION.find(r => total >= r.min && total <= r.max);
  return entry || ABS_INTERPRETATION[ABS_INTERPRETATION.length - 1];
}

/**
 * Build a default empty session object.
 * @returns {{ date: string, time: string, to: string, scores: string[] }}
 */
export function createEmptyAbsSession() {
  return {
    date: "",
    time: "",
    to: "",
    scores: Array(14).fill(""),
  };
}

export default AGITATED_BEHAVIOUR_SCALE_SCHEMA;

