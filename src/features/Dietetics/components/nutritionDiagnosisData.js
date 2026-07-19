/** Shared IDNT problem chart + etiology options for Nutrition Diagnosis. */

export const ET_OPTIONS = {
  increased_energy_expenditure: [
    { label: "Voluntary or involuntary physical activity/movement", value: "voluntary_activity" },
    { label: "Accelerated growth oranabolism", value: "accelerated_growth" },
    { label: "Maintenance of body temperature", value: "body_temperature_maintenance" },
  ],
  inadequate_energy_intake: [
    { label: "Access to food, fluid, nutrients", value: "food_access" },
    { label: "Food and nutrition knowledge deficit", value: "knowledge_deficit" },
    { label: "Decreased ability to consume sufficient energy, nutrients", value: "decreased_ability" },
    { label: "Prolonged catabolic illness", value: "prolonged_catabolic" },
    { label: "Psychological causes such as depression and disordered eating", value: "eating_disordered" },
    { label: "Food or artificial nutrition", value: "food_nutrition" },
  ],
  predicted_excessive_energy_intake: [
    { label: "Culture of overeating", value: "overeating_culture" },
    { label: "Change in physical sctivity anticipated", value: "physical_activity_change" },
    { label: "Genetic predisposition to overweight/obesity", value: "obesity" },
    { label: "Altered metabolism", value: "altered_metabolism" },
    { label: "Family or social history of overeating", value: "overeating_history" },
    { label: "Increased psychological/life stress", value: "life_stress" },
    { label: "Change in living situation", value: "living_situation" },
    {
      label:
        "Planned therapy or medication predicted to reduce energy/nutrient need or metabolic rate/metabolism",
      value: "metabolism",
    },
  ],
};

export const IDNT_PROBLEM_CHART = {
  "1. Energy Balance": [
    { label: "Increased energy expenditure", etiology: "related to insufficient energy consumption" },
    { label: "Inadequate energy intake", etiology: "related to excessive caloric consumption" },
    { label: "Excessive energy intake", etiology: "related to prolonged inadequate intake" },
    { label: "Predicted suboptimal energy intake", etiology: "related to insufficient protein and energy intake" },
    { label: "Predicted excessive energy intake", etiology: "related to insufficient protein and energy intake" },
  ],
  "2. Oral or Nutrition Support Intake": [
    { label: "Inadequate oral intake", etiology: "related to swallowing difficulty" },
    { label: "Excessive oral intake", etiology: "related to excessive oral nutrition support" },
    { label: "Inadequate enteral nutrition infusion", etiology: "related to interruption of enteral feeding" },
    { label: "Excessive enternal nutrition infusion", etiology: "related to inadequate parenteral delivery" },
    { label: "Less than optimal enteral nutrition composition or modality", etiology: "related to inadequate parenteral delivery" },
    { label: "Inadequate parenteral nutrition infusion", etiology: "related to inadequate parenteral delivery" },
    { label: "Excessive parenteral nutrition infusion", etiology: "related to inadequate parenteral delivery" },
    { label: "Less than optimal parenteral nutrition composition or modality", etiology: "related to inadequate parenteral delivery" },
    { label: "Limited food acceptance", etiology: "related to inadequate parenteral delivery" },
  ],
  "3. Fluid Intake": [
    { label: "Inadequate fluid intake", etiology: "related to reduced fluid consumption" },
    { label: "Excessive fluid intake", etiology: "related to excessive fluid administration" },
  ],
  "4. Bioactive Substances": [
    { label: "Suboptimal bioactive substance intake", etiology: "related to inadequate intake of functional food components" },
    { label: "Excessive bioactive substance intake", etiology: "related to excessive supplement consumption" },
    { label: "Excessive alcohol intake", etiology: "related to habitual alcohol consumption" },
  ],
  "5. Nutrient": [
    { label: "Increased nutrient needs", etiology: "related to poor protein food choices" },
    { label: "Malnutrition", etiology: "related to reduced carbohydrate consumption" },
    { label: "Inadequate protein-energy intake", etiology: "related to excessive carbohydrate intake" },
    { label: "Decreased nutrient needs", etiology: "related to insufficient fat consumption" },
    { label: "Imbalance of nutrients", etiology: "related to insufficient vitamin intake" },
  ],
  "5.6 Fat & Cholesterol": [
    { label: "Inadequate fat intake", etiology: "related to poor protein food choices" },
    { label: "Excessive fat intake", etiology: "related to poor protein food choices" },
    { label: "Less than optimal intake of types of fats", etiology: "related to poor protein food choices" },
  ],
  "5.7 Protein": [
    { label: "Inadequate protein intake", etiology: "related to poor protein food choices" },
    { label: "Excessive protein intake", etiology: "related to poor protein food choices" },
    { label: "Less than optimal intake of types of proteins or amino acids", etiology: "related to poor protein food choices" },
  ],
  "5.8 Carbohydrate and Fiber": [
    { label: "Inadequate carbohydrate intake", etiology: "related to poor protein food choices" },
    { label: "Excessive carbohydrate intake", etiology: "related to poor protein food choices" },
    { label: "Less than optimal intake of types of carbohydrate", etiology: "related to poor protein food choices" },
    { label: "Inconsistent carbohydrate intake", etiology: "related to poor protein food choices" },
    { label: "Inadequate fiber intake", etiology: "related to poor protein food choices" },
    { label: "Excessive fiber intake", etiology: "related to poor protein food choices" },
  ],
  "5.9 Inadequate vitamin intake": [
    { label: "Inadequate - Vitamin A", etiology: "related to poor protein food choices" },
    { label: "Inadequate - Vitamin C", etiology: "related to poor protein food choices" },
    { label: "Inadequate - Vitamin D", etiology: "related to poor protein food choices" },
    { label: "Inadequate - Vitamin E", etiology: "related to poor protein food choices" },
    { label: "Inadequate - Vitamin K", etiology: "related to poor protein food choices" },
    { label: "Inadequate - Thiamin", etiology: "related to poor protein food choices" },
    { label: "Inadequate - Riboflavin", etiology: "related to poor protein food choices" },
    { label: "Inadequate - Niacin", etiology: "related to poor protein food choices" },
    { label: "Inadequate - Folate", etiology: "related to poor protein food choices" },
    { label: "Inadequate - Vitamin B6", etiology: "related to poor protein food choices" },
    { label: "Inadequate - Vitamin B12", etiology: "related to poor protein food choices" },
    { label: "Inadequate - Pantothenic acid", etiology: "related to poor protein food choices" },
    { label: "Inadequate - Biotin", etiology: "related to poor protein food choices" },
  ],
  "5.10 Excessive vitamin intake": [
    { label: "Excessive - Vitamin A", etiology: "related to poor protein food choices" },
    { label: "Excessive - Vitamin C", etiology: "related to poor protein food choices" },
    { label: "Excessive - Vitamin D", etiology: "related to poor protein food choices" },
    { label: "Excessive - Vitamin E", etiology: "related to poor protein food choices" },
    { label: "Excessive - Vitamin K", etiology: "related to poor protein food choices" },
    { label: "Excessive - Thiamin", etiology: "related to poor protein food choices" },
    { label: "Excessive - Riboflavin", etiology: "related to poor protein food choices" },
    { label: "Excessive - Niacin", etiology: "related to poor protein food choices" },
    { label: "Excessive - Folate", etiology: "related to poor protein food choices" },
    { label: "Excessive - Vitamin B6", etiology: "related to poor protein food choices" },
    { label: "Excessive - Vitamin B12", etiology: "related to poor protein food choices" },
    { label: "Excessive - Pantothenic acid", etiology: "related to poor protein food choices" },
    { label: "Excessive - Biotin", etiology: "related to poor protein food choices" },
  ],
};

export function problemKeyFromLabel(label) {
  return String(label || "")
    .toLowerCase()
    .replaceAll(" ", "_");
}
