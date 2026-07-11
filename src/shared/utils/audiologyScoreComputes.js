function toNumber(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num : 0;
}

export function getVasSeverityLabel(score) {
  const value = toNumber(score);
  if (value <= 2) return "Minimal";
  if (value <= 4) return "Mild";
  if (value <= 6) return "Moderate";
  if (value <= 8) return "Severe";
  return "Very Severe";
}

export function computeThiScores(values = {}) {
  let score = 0;

  for (let i = 1; i <= 25; i += 1) {
    const val = values[`thi_${i}`];
    if (val === 0 || val === "0") score += 0;
    else if (val === 2 || val === "2") score += 2;
    else if (val === 4 || val === "4") score += 4;
  }

  let interpretation = "";
  if (score <= 16) interpretation = "No handicap";
  else if (score <= 36) interpretation = "Mild";
  else if (score <= 56) interpretation = "Moderate";
  else if (score <= 76) interpretation = "Severe";
  else interpretation = "Catastrophic";

  return { score, interpretation };
}

export function computeTfiScores(values = {}) {
  const domains = [
    [1, 2, 3],
    [4, 5],
    [6, 7],
    [8, 9, 10],
    [11, 12, 13],
    [14, 15],
    [16, 17, 18],
    [19, 20, 21],
  ];

  const scores = domains.map((group) => {
    const avg =
      group.reduce((sum, index) => sum + toNumber(values[`tfi_${index}`]), 0) /
      group.length;
    return avg * 10;
  });

  const total = scores.reduce((sum, value) => sum + value, 0) / scores.length;

  let severityLevel = "";
  let interpretation = "";

  if (total <= 17) {
    severityLevel = "Negligible";
    interpretation = "No or minimal tinnitus problem";
  } else if (total <= 31) {
    severityLevel = "Mild";
    interpretation = "Noticeable but not significantly bothersome";
  } else if (total <= 53) {
    severityLevel = "Moderate";
    interpretation = "Problematic; interferes with some activities";
  } else if (total <= 72) {
    severityLevel = "Severe";
    interpretation = "Substantial negative impact";
  } else {
    severityLevel = "Very Severe";
    interpretation = "Extremely bothersome, affects daily life";
  }

  return {
    score: total.toFixed(1),
    severityLevel,
    interpretation,
  };
}

function resolveByFieldName(fieldName, values) {
  switch (fieldName) {
    case "vas_loudness_severity":
      return getVasSeverityLabel(values.vas_loudness);
    case "vas_annoyance_severity":
      return getVasSeverityLabel(values.vas_annoyance);
    case "vas_awareness_severity":
      return getVasSeverityLabel(values.vas_awareness);
    case "thi_score":
      return computeThiScores(values).score;
    case "thi_interpretation":
      return computeThiScores(values).interpretation;
    case "tfi_score":
      return computeTfiScores(values).score;
    case "tfi_severity_level":
      return computeTfiScores(values).severityLevel;
    case "tfi_interpretation":
      return computeTfiScores(values).interpretation;
    default:
      return undefined;
  }
}

export function resolveScoreBoxDisplay(field, values, storedValue) {
  if (typeof field?.compute === "function") {
    return field.compute(values);
  }

  if (field?.computeType === "vas_severity" && field?.computeFrom) {
    return getVasSeverityLabel(values[field.computeFrom]);
  }

  if (field?.computeType === "thi_score") {
    return computeThiScores(values).score;
  }

  if (field?.computeType === "thi_interpretation") {
    return computeThiScores(values).interpretation;
  }

  if (field?.computeType === "tfi_score") {
    return computeTfiScores(values).score;
  }

  if (field?.computeType === "tfi_severity_level") {
    return computeTfiScores(values).severityLevel;
  }

  if (field?.computeType === "tfi_interpretation") {
    return computeTfiScores(values).interpretation;
  }

  const derived = resolveByFieldName(field?.name, values);
  if (derived !== undefined) return derived;

  return storedValue ?? 0;
}

export function computeAudiologyDerivedScores(values = {}) {
  const thi = computeThiScores(values);
  const tfi = computeTfiScores(values);

  return {
    thi_score: thi.score,
    thi_interpretation: thi.interpretation,
    tfi_score: tfi.score,
    tfi_severity_level: tfi.severityLevel,
    tfi_interpretation: tfi.interpretation,
    vas_loudness_severity: getVasSeverityLabel(values.vas_loudness),
    vas_annoyance_severity: getVasSeverityLabel(values.vas_annoyance),
    vas_awareness_severity: getVasSeverityLabel(values.vas_awareness),
  };
}

export function shouldDeriveAudiologyScores(fieldName) {
  return [
    "vas_loudness",
    "vas_annoyance",
    "vas_awareness",
    ...Array.from({ length: 25 }, (_, index) => `thi_${index + 1}`),
    ...Array.from({ length: 21 }, (_, index) => `tfi_${index + 1}`),
  ].includes(fieldName);
}
