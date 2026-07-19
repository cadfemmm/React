function fieldsInRows(fields, cols = 3) {
  const rows = [];
  for (let i = 0; i < fields.length; i += cols) {
    rows.push({
      type: "row",
      cols,
      fields: fields.slice(i, i + cols),
    });
  }
  return rows;
}

const BIA_SCHEMA = {
  title: "Body Composition Assessment (SECA mBCA)",
  sections: [
    {
      title: "Attached SECA / Body Composition Report",
      fields: [
        {
          name: "uploadedReport",
          label: "Upload SECA mBCA PDF Report",
          type: "file-upload-modal",
          accept: "application/pdf,.pdf",
        },
      ],
    },
    {
      title: "Anthropometry",
      fields: fieldsInRows([
        { name: "weight", label: "Weight (kg)", type: "input" },
        { name: "height", label: "Height (cm)", type: "input" },
        { name: "bmi", label: "BMI (kg/m²)", type: "input" },
      ]),
    },
    {
      title: "Fat Composition",
      fields: fieldsInRows([
        { name: "fatMass", label: "Fat Mass (kg)", type: "input" },
        {
          name: "fatMassPercent",
          label: "Fat Mass Percentage (FM%)",
          type: "input",
        },
        {
          name: "fmi",
          label: "Fat Mass Index (FMI kg/m²)",
          type: "input",
        },
        {
          name: "ffmi",
          label: "Fat Free Mass Index (FFMI kg/m²)",
          type: "input",
        },
        {
          name: "fatFreeMass",
          label: "Fat Free Mass (kg)",
          type: "input",
        },
        {
          name: "vat",
          label: "Visceral Adipose Tissue (VAT L)",
          type: "input",
        },
        {
          name: "waistCircumference",
          label: "Waist Circumference (cm)",
          type: "input",
        },
      ]),
    },
    {
      title: "Muscle Composition",
      fields: fieldsInRows([
        {
          name: "smm",
          label: "Skeletal Muscle Mass (SMM kg)",
          type: "input",
        },
        {
          name: "smmPercent",
          label: "Skeletal Muscle Mass Percentage (%)",
          type: "input",
        },
        {
          name: "smi",
          label: "Skeletal Muscle Index by MRI (SMI kg/m²)",
          type: "input",
        },
        {
          name: "smmOverAge",
          label: "Skeletal Muscle Mass Over Age (SMM)",
          type: "input",
        },
        {
          name: "phaseAngle",
          label: "Phase Angle (PhA)",
          type: "input",
        },
        {
          name: "appendicularSmm",
          label: "Appendicular Skeletal Muscle Mass (kg)",
          type: "input",
        },
        {
          name: "asmi",
          label:
            "Appendicular Skeletal Muscle Index by DXA - ASMI (kg/m²)",
          type: "input",
        },
      ]),
    },
    {
      title: "Water Balance",
      fields: fieldsInRows([
        {
          name: "tbwPercent",
          label: "Total Body Water (TBW %)",
          type: "input",
        },
        {
          name: "ecwPercent",
          label: "Extracellular Water (ECW %)",
          type: "input",
        },
        {
          name: "ecwTbwRatio",
          label: "Water Ratio (ECW/TBW%)",
          type: "input",
        },
      ]),
    },
    {
      title: "Segmental Skeletal Muscle Mass",
      fields: fieldsInRows([
        { name: "segmentRightArm", label: "Right Arm (kg)", type: "input" },
        { name: "segmentLeftArm", label: "Left Arm (kg)", type: "input" },
        { name: "segmentTorso", label: "Torso (kg)", type: "input" },
        { name: "segmentRightLeg", label: "Right Leg (kg)", type: "input" },
        { name: "segmentLeftLeg", label: "Left Leg (kg)", type: "input" },
        {
          name: "segmentTotalSmm",
          label: "Total Skeletal Muscle Mass (kg)",
          type: "input",
        },
      ]),
    },
    {
      title: "Bioelectrical Impedance Vector Analysis - BIVA",
      fields: fieldsInRows([
        { name: "bivaResistance", label: "Resistance", type: "input" },
        { name: "bivaReactance", label: "Reactance", type: "input" },
      ]),
    },
    {
      title: "Energy Expenditure",
      fields: fieldsInRows([
        {
          name: "ree",
          label: "Resting Energy Expenditure - REE (kcal/day)",
          type: "input",
        },
        {
          name: "tee",
          label: "Total Energy Expenditure - TEE (kcal/day)",
          type: "input",
        },
        {
          name: "reeTeeRatio",
          label: "Energy Expenditure - REE / TEE",
          type: "input",
        },
        {
          name: "pal",
          label: "Physical Activity Level (PAL)",
          type: "input",
        },
      ]),
    },
    {
      title: "TRU Body Score",
      fields: fieldsInRows([
        { name: "muscleScore", label: "Muscle Score", type: "input" },
        { name: "fatScore", label: "Fat Score", type: "input" },
        {
          name: "truBodyScore",
          label: "Overall TRU Body Score",
          type: "input",
        },
      ]),
    },
  ],
};

export const BIA_REGISTRY_ENTRY = {
  id: "BIA",
  name: "Body Composition Assessment (SECA mBCA)",
  ...BIA_SCHEMA,
};

export default BIA_SCHEMA;
