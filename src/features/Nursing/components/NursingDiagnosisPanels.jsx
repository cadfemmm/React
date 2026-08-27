import React from "react";

/* =============================================================================
 * Shared Nursing Diagnosis / Plan panels
 * -----------------------------------------------------------------------------
 * Single source of truth for the nursing diagnosis picker (Assessment tab) and
 * the intervention plan panel (Plan tab).
 *
 * These panels read/write TOP-LEVEL form values (nd_* keys) so the Assessment
 * and Plan tabs share state (issues selected in Assessment appear in Plan).
 *
 * To make them safe for the schema -> backend -> template round-trip, the
 * schema fields reference them as:
 *   { "type": "custom", "name": "nursing_diagnosis_panel", "globalValues": true }
 *   { "type": "custom", "name": "nursing_plan_panel",       "globalValues": true }
 * and they are registered in features/CommonComponenets/customFieldRegistry.js.
 * ============================================================================= */

export const NURSING_DIAGNOSES = [
  { id:"cognitive", label:"1. Cognitive", issues: [
    { issue:"Attention Deficit", interventions:["Environmental modifications (quiet room, minimal distractions)","Structured routines (set daily schedules, checklist tasks)","Attention training (brain games, cognitive therapy)","Medication review (adjust dosage of sedatives if needed)"] },
    { issue:"Memory Loss", interventions:["Memory aids (calendars, alarms, reminders)","Cognitive stimulation (puzzles, storytelling, mental exercises)","Repetition and reinforcement (Consistently reviewing information)","Healthy lifestyle (balanced diet, regular exercise)"] },
    { issue:"Impaired Problem-Solving & Decision-Making", interventions:["Step-by-step guidance (break tasks into simple steps)","Supervised decision-making (caregiver support)","Executive function training (problem-solving activities)"] },
    { issue:"Communication Disorders", interventions:["Speech therapy (Speech-language pathologists for training)","Alternative communication tools (picture boards, devices)","Slow, clear speech practice (Encourage simple, direct sentences)"] },
    { issue:"Disorientation & Confusion", interventions:["Reality orientation therapy Frequent reminders of time, place, date)","Visual aids (large clocks, labeled rooms)","Monitor medications","Adjust sedative or opioid dosage"] },
    { issue:"Lack of Awareness", interventions:["Gentle redirection (Encourage safe activities without confrontation)","Education and counseling (Help families understand the condition)","Safety modifications (bed alarms, fall prevention measures)"] },
    { issue:"Impaired Spatial Awareness", interventions:["Visual scanning therapy (Training to notice the neglected side)","Marked pathways and objects (Use bright-colored tape on furniture)","Mirror therapy (Encouraging movement of the affected side)"] },
    { issue:"Poor Judgment & Risk-Taking Behavior", interventions:["Behavior modification therapy (Structured reinforcement of safe measures","Supervised activities (Reduce risk-taking behavior)","Safety planning (restrict access to unsafe areas)"] }
  ]},
  { id:"bladder", label:"2. Bladder Issues", issues: [
    { issue:"Urinary Retention", interventions:["Intermittent catheterization (CIC) for complete bladder drainage","Timed voiding (Encourage urination every 2–3 hours)","Double voiding technique (Urinate, wait, try again)","Medications (Alpha-blockers to relax bladder neck muscles)"] },
    { issue:"Urinary Incontinence", interventions:["Pelvic floor exercises (Kegels) to strengthen muscles","Bladder training (gradual increase in time between urination)","Absorbent pads for protection","Medications(Anticholinergics,mirabegron for OAB)"] },
    { issue:"Neurogenic Bladder", interventions:["Scheduled voiding (Set urination times every 2-3 hours)","Clean intermittent catheterization (CIC)","Botox injections (for severe overactivity)","Sacral nerve stimulation (implant device for bladder control)"] },
    { issue:"Overactive Bladder", interventions:["Bladder retraining (Delay urination to improve control)","Pelvic floor exercises (Kegels)","Avoid bladder irritants (caffeine, alcohol, acidic foods)","Medications (oxybutynin, solifenacin, mirabegron)"] },
    { issue:"Urinary Tract Infections", interventions:["Increase fluid intake (Promote natural urine flushing)","Proper catheter care (sterile technique, regular replacement)","Monitor for early symptoms (Prompt antibiotic treatment)","Cranberry supplements (May help reduce UTI risk in some cases)"] }
  ]},
  { id:"bowel", label:"3. Bowel Issues", issues: [
    { issue:"Neurogenic Bowel", interventions:["Bowel program (scheduled toileting) to establish routine","Digital stimulation (manual technique to trigger bowel reflex)","High-fiber diet and hydration to regulate stool consistency","Use of stool softeners or suppositories for regular emptying"] },
    { issue:"Constipation", interventions:["Increase fiber intake (whole grains, fruits, vegetables)","Encourage hydration (1.5-2L water daily)","Abdominal massage and bowel training to stimulate movement","Laxatives (osmotic, stimulant) if lifestyle changes fail"] },
    { issue:"Fecal Impaction", interventions:["Manual disimpaction (if severe)","Enema or suppositories to soften stool","Bowel training to prevent recurrence","Increase dietary fiber and fluids"] },
    { issue:"Fecal Incontinence", interventions:["Pelvic floor therapy to strengthen sphincter muscles","Scheduled toileting (timed defecation) to establish routine","Use of anti-diarrheal medications (if needed)","Protective skin barriers to prevent irritation"] },
    { issue:"Irritable Bowel Syndrome", interventions:["Low FODMAP diet (avoiding fermentable)"]},
    { issue:"Bowel Obstruction", interventions:["Nasogastric tube decompression (if severe)","IV fluids and electrolyte management","Bowel rest (Nil by Mouth – NPO)","Surgical intervention if obstruction does not resolve"] }
  ]},
  { id:"skin", label:"4. Skin Integrity Issues in Rehabilitation", issues: [
    { issue:"Pressure Injuries", interventions:["Regular Reposition (every 2 hours in bed, every 30 mins in wheelchair)","Pressure-relieving devices (air mattresses, foam cushions)","Wound care (dressings, debridement if needed)","Adequate nutrition (high protein, vitamin C, zinc)"] },
    { issue:"Skin Tears", interventions:["Gentle handling of skin (avoid adhesive tapes, use non-traumatic dressings)","Keep skin moisturized (emollients, barrier creams)","Use long-sleeved clothing or skin protectors"] },
    { issue:"Moisture-Associated Skin Damage", interventions:["Frequent skin cleansing with pH-balanced cleansers","Moisture barriers (zinc oxide, petrolatum creams)","Absorbent pads or incontinence briefs","Keep skin dry (adequate air circulation)"] },
    { issue:"Diabetic Foot Ulcers", interventions:["Daily foot inspections (checking for cuts, blisters","Proper footwear (orthopedic shoes, offloading devices)","Debridement of necrotic tissue","Blood sugar control (diet, insulin therapy if needed)"] },
    { issue:"Surgical Wound Dehiscence", interventions:["Adequate protein intake for wound healing","Wound monitoring for signs of infection","Minimize strain (using abdominal binders, avoiding heavy lifting)"] },
    { issue:"Burns", interventions:["Immediate cooling with lukewarm water (not ice)","Topical antimicrobial dressings (silver sulfadiazine)","Pain management (NSAIDs, opioids if severe)","Physical therapy to prevent contractures in severe burns"] },
    { issue:"Venous Stasis Ulcers", interventions:["Compression therapy (compression stockings, leg elevation)","Regular wound care and debridement","Exercise to improve circulation","Avoid prolonged sitting or standing"] },
    { issue:"Radiation Dermatitis", interventions:["Use of mild, fragrance-free skin cleansers","Avoid sun exposure on treated areas","Hydration with emollient creams","Steroid creams (if severe inflammation occurs)"]}
  ]},
  { id: "life", label: "6. Life Expectancy in Rehabilitation", issues: [
    { issue: "Neurological Conditions", interventions: ["Early rehabilitation to improve functional outcomes", "Prevent aspiration pneumonia (swallowing therapy, modified diets)", "DVT prophylaxis (compression stockings, anticoagulants)", "Physical therapy for mobility and muscle strength"]},
    { issue: "Cardiovascular Health", interventions: ["Manage blood pressure and cholesterol (medications, diet)", "Encourage physical activity (adapted exercises for disabled patients)", "Monitor for signs of heart failure (shortness of breath, swelling)"]},
    { issue: "Respiratory Function", interventions: ["Pulmonary rehabilitation (breathing exercises, oxygen therapy)", "Positioning and secretion management (chest physiotherapy)", "Encourage smoking cessation and healthy lifestyle changes"]},
    {  issue: "Nutrition and Metabolism", interventions: ["Dietary assessment and modifications (high-protein diet for wound healing)", "Glycemic control in diabetics (insulin, low-carb diet)", "Encourage weight management programs (exercise, meal planning)"]},
    { issue: "Cancer and Chronic Illnesses", interventions: ["Early palliative care referrals (pain and symptom management)", "Nutrition and hydration support", "Psychosocial support for patients and families"]},
    { issue: "Mental Health and Cognitive Function", interventions: ["Cognitive therapy and social engagement programs", "Psychiatric support (counseling, antidepressants if needed)", "Fall prevention strategies (home safety modifications)"]},
    { issue: "Mobility and Physical Activity", interventions: ["Weight-bearing exercises and resistance training", "Fall prevention strategies (assistive devices, home modifications)", "Osteoporosis management (calcium, bisphosphonates)"]},
    { issue: "Quality of Life and Social Factors", interventions: ["Community programs for social reintegration", "Financial assistance and healthcare advocacy", "Support groups and caregiver training"]}
  ]},
  { id:"community", label:"5. Community Reintegration", issues: [
    { issue:"Physical Mobility Limitations", interventions:["Physical and occupational therapy","Home modifications (ramps, grab bars)","Community accessibility programs"] },
    { issue:"Cognitive Impairment", interventions:["Cognitive rehabilitation therapy","Memory aids (reminders, alarms)","Structured daily routines"] },
    { issue:"Transportation Barriers", interventions:["Accessible transportation services","Community volunteer driving programs","Telehealth options"] },
    { issue:"Employment Challenges", interventions:["Job coaching and vocational rehabilitation","Workplace accommodations","Remote work opportunities"] },
    { issue:"Social Isolation and Loneliness", interventions:["Support groups and peer mentorship","Social skills training","Technology use (video calls, online communities)"] },
    { issue:"Mental Health Issues", interventions:["Psychological counseling","Antidepressants / anxiety medication if needed","Community engagement programs"] },
    { issue:"Lack of Caregiver Support", interventions:["Caregiver education programs","Respite care services","Financial support for caregivers"] },
    { issue:"Stigma and Discrimination", interventions:["Public awareness campaigns","Advocacy for disability rights","Inclusion policies in workplaces and schools"]},
    { issue:"Financial Difficulties", interventions:["Financial counseling and assistance programs","Access to grants and social welfare","Job training for people with disabilities"] },
    { issue:"Healthcare Access Issues", interventions:["Expansion of telemedicine services","Healthcare navigation support programs","Community outreach health clinics"]}
  ]},
  { id:"pain", label:"6. Pain", issues: [
    { issue:"Neuropathic Pain", interventions:["Medications (gabapentin, pregabalin, amitriptyline)","TENS therapy","Physical therapy and desensitization techniques"] },
    { issue:"Musculoskeletal Pain", interventions:["Physical therapy (stretching, strengthening)","Heat/cold therapy","NSAIDs and muscle relaxants"] },
    { issue:"Spasticity-Related Pain", interventions:["Botulinum toxin (Botox) injections","Stretching and positioning strategies","Antispasmodic medications (baclofen, diazepam, tizanidine)"] },
    { issue:"Phantom Limb Pain", interventions:["Mirror therapy","Neuromodulation (TENS, spinal cord stimulation)","Anticonvulsants, NMDA receptor antagonists"] },
    { issue: "Visceral Pain", interventions: ["Bladder and bowel management programs", "Anticholinergic medications for bladder spasticity", "Regular stool softeners and fiber intake"]},
    { issue:"Post-Surgical Pain", interventions:["Multimodal pain management (NSAIDs, opioids, regional anesthesia)","Early mobilization","Scar massage and desensitization therapy"] },
    { issue:"Central Pain Syndrome", interventions:["Tricyclic antidepressants, SNRIs","Cognitive-behavioral therapy (CBT)","Gradual exposure to sensory stimulation"] },
    { issue: "Headaches and Migraines", interventions: ["Migraine prophylaxis (beta-blockers, calcium channel blockers)", "Relaxation techniques (biofeedback, deep breathing)", "Avoiding known triggers (caffeine, dehydration, stress)"]},
    { issue: "Psychogenic or Psychosomatic Pain", interventions: ["Cognitive-behavioral therapy (CBT)", "Mindfulness-based stress reduction", "Non-opioid analgesics, antidepressants"]}
  ]},
  { id:"cardio", label:"7. Cardiovascular, Autonomic & Pulmonary", issues: [
    { issue:"Orthostatic Hypotension", interventions:["Gradual position changes (tilt table, slow transitions)","Compression stockings and abdominal binders","Increased salt and fluid intake","Midodrine or fludrocortisone for severe cases"] },
    { issue:"Autonomic Dysreflexia", interventions:["Immediate removal of noxious stimuli (empty bladder, treat constipation)","Sit patient upright to lower BP","Fast-acting antihypertensives if needed"] },
    { issue:"Deep Vein Thrombosis & Pulmonary Embolism", interventions:["Early mobilization, passive/active ROM","Compression devices (SCDs, TED stockings)","Anticoagulants (heparin, warfarin, DOACs)"] },
    { issue:"Cardiovascular Deconditioning", interventions:["Gradual structured cardiovascular training","Monitor vital signs during exercise","Beta-blockers or ACE inhibitors if needed"] },
    { issue: "Heart Failure Exacerbation", interventions: ["Fluid and sodium restriction", "Diuretics, ACE inhibitors, beta-blockers", "Daily weight monitoring and early symptom detection"]},
    { issue:"Respiratory Muscle Weakness", interventions:["Diaphragmatic and incentive spirometry exercises","Non-invasive ventilation (BiPAP, CPAP) if needed","Assisted cough techniques and secretion management"] },
    { issue:"Aspiration Pneumonia", interventions:["Swallowing assessments (MBSS, FEES)","Aspiration precautions (upright positioning, thickened liquids)","Oral hygiene protocols"] },
    { issue: "Sleep Apnea & Hypoventilation Syndrome", interventions: ["CPAP or BiPAP therapy", "Weight loss interventions", "Avoidance of sedatives and alcohol before sleep"]},
    { issue: "Chronic Hypoxia & Pulmonary Hypertension", interventions: ["Supplemental oxygen therapy (maintain SpO2 > 90%)", "Pulmonary rehabilitation (breathing exercises, endurance training)", "Diuretics, vasodilators (for pulmonary hypertension)"]}
  ]},
  { id:"dysphagia", label:"8. Dysphagia", issues: [
    { issue:"Oropharyngeal Dysphagia", interventions:["Swallowing assessments (MBSS, FEES)","Diet modification (thickened liquids, pureed food)","Swallow therapy (exercises, compensatory strategies)","Aspiration precautions"] },
    { issue:"Esophageal Dysphagia", interventions:["Esophageal dilation for strictures","Proton pump inhibitors (PPIs) for GERD","Small frequent meals, avoid triggers"] },
    { issue:"Neurogenic Dysphagia", interventions:["Neuromuscular stimulation (VitalStim therapy)","Chin tuck and head turn maneuvers","PEG tube placement in severe cases"] },
    { issue: "Obstructive Dysphagia", interventions: ["Endoscopic removal of obstruction", "Surgical intervention (resection of tumors or strictures)", "Soft diet or liquid diet until resolution"]},
    { issue:"Aspiration Pneumonia", interventions:["Strict aspiration precautions","Swallow therapy and compensatory strategies","PEG tube if oral intake is unsafe"] }
  ]},
  { id:"communication", label:"9. Communication Issues", issues: [
    { issue:"Aphasia", interventions:["Speech therapy with SLP","Alternative communication methods (picture boards, AAC devices)","Encouraging slow, clear speech with yes/no questions"] },
    { issue:"Dysarthria", interventions:["Oral motor exercises for strengthening speech muscles","Voice amplification devices","Slow, deliberate speech with short phrases"] },
    { issue:"Apraxia of Speech", interventions:["Motor speech therapy (repetition, cueing techniques)","Encouraging automatic speech (singing, counting)","AAC devices for severe cases"] },
    { issue: "Cognitive-Communication Deficits", interventions: ["Cognitive therapy (memory aids, structured conversations)", "Training in social communication skills", "Encouraging repetition and simplifying instructions"]},
    { issue:"Hearing Impairment", interventions:["Hearing aids or cochlear implants","Speech-to-text apps or written communication","Good lighting and face visibility for lip reading"] },
    { issue:"Mutism", interventions:["AAC devices (speech-generating devices, text-to-speech apps)","Encouraging nonverbal communication (gestures, writing)","Psychological support for anxiety-related mutism"] }
  ]},
  { id:"cognitive2", label:"10. Cognitive Issues", issues: [
    { issue:"Memory Impairment", interventions:["Memory aids (notebooks, alarms, digital reminders)","Cognitive therapy (repetition, chunking information)","Structured routines and familiar environments"] },
    { issue:"Attention Deficits", interventions:["Reducing distractions in the environment","Task breakdown (short, simple steps)","Encouraging mindfulness and structured breaks"] },
    { issue:"Executive Dysfunction", interventions:["Step-by-step guidance for tasks","Cognitive rehabilitation therapy","Encouraging use of planners and visual schedules"] },
    { issue: "Impaired Judgment & Safety Awareness", interventions: ["Supervision in high-risk activities", "Safety modifications (grab bars, reminders for stove usage)", "Caregiver education on managing impulsivity"]},
    { issue: "Aphasia-Related Cognitive Deficits", interventions: ["Speech-language therapy (alternative communication methods)", "Encouraging slow and clear communication", "Using visual aids and gesture-based communication"]},
    { issue:"Delirium", interventions:["Frequent reorientation (clocks, familiar objects)","Hydration and correction of electrolyte imbalances","Reducing sedative use when possible"] },
    { issue:"Impaired Social Cognition", interventions:["Social skills training (role-playing, therapy groups)","Encouraging structured social interactions","CBT for emotional regulation"] }
  ]},
  { id:"selfcare", label:"11. Self-Care Issues", issues: [
    { issue:"Hygiene", interventions:["Adaptive tools (long-handled sponges, electric toothbrushes)","Step-by-step prompting for cognitively impaired patients","Encouraging daily hygiene routines with caregiver assistance"] },
    { issue:"Dressing and Grooming", interventions:["Adaptive clothing (Velcro, elastic waistbands)","Occupational therapy to improve dressing techniques","Structured choices for clothing selection"] },
    { issue:"Toileting", interventions:["Scheduled toileting programs","Bedside commodes, grab bars, incontinence products","Pelvic floor exercises for mild incontinence"] },
    { issue:"Feeding and Eating", interventions:["Modified diet (soft foods, thickened liquids)","Adaptive utensils (built-up handles, non-slip plates)","Supervised feeding and swallowing therapy"] },
    { issue:"Mobility and Transfers", interventions:["Mobility aids (walkers, wheelchairs, transfer boards)","Physical therapy for strength and balance","Home modifications (grab bars, ramps, non-slip mats)"] },
    { issue: "Medication Management", interventions: ["Pill organizers, medication reminders (alarms, phone apps)", "Caregiver assistance or pharmacy blister packs", "Regular medication reviews to simplify regimens"]},
    { issue:"Fatigue and Energy Conservation", interventions:["Energy conservation techniques (pacing, prioritizing tasks)","Adaptive equipment (shower chairs, dressing aids)","Encouraging rest periods between activities"] },
  ]},
  { id:"mobility", label:"12. Mobility Issues", issues: [
    { issue:"Muscle Weakness & Deconditioning", interventions:["Physical therapy for strengthening","Gradual progressive exercise programs","Mobility aids (walkers, canes, wheelchairs)"] },
    { issue:"Balance Impairments", interventions:["Balance training and coordination exercises","Vestibular therapy for inner ear disorders","Environmental modifications (grab bars, non-slip mats)"] },
    { issue:"Gait Abnormalities", interventions:["Gait retraining with physical therapy","Assistive devices (orthotics, prosthetics, walkers)","Fall prevention strategies"] },
    { issue:"Joint Stiffness & Contractures", interventions:["Passive and active ROM exercises","Splinting and positioning techniques","Pain management (medications, heat therapy, massage)"] },
    { issue:"Spasticity & Hypertonia", interventions:["Stretching and muscle relaxation exercises","Botox or muscle relaxants (Baclofen, Diazepam)","Orthotics or braces to prevent deformities"] },
    { issue:"Paralysis", interventions:["Assistive technology (wheelchairs, exoskeletons, FES)","Physical therapy to maximize residual function","Caregiver training for safe transfers and positioning"] },
    { issue: "Pain-Related Mobility Limitations", interventions: ["Multimodal pain management (medications, heat/cold therapy, acupuncture)", "Exercise programs focusing on low-impact activities (swimming, stretching, Tai Chi)", "Joint protection techniques (proper body mechanics, braces, orthotics)"]},
    { issue: "Fatigue-Related Mobility Limitations", interventions: ["Energy conservation strategies (pacing, prioritizing activities, rest breaks)", "Use of assistive devices to reduce energy expenditure", "Nutritional support and hydration management"]}
  ]},
  { id:"metabolic", label:"13. Metabolic Syndrome", issues: [
    { issue:"Obesity", interventions:["Nutritional counseling & weight management programs","Supervised physical activity (aerobic & resistance training)","Behavioral therapy for lifestyle changes"] },
    { issue:"Insulin Resistance & Type 2 Diabetes", interventions:["Blood sugar monitoring & diabetic education","Medication management (metformin, insulin)","Low-glycemic index diet & carbohydrate control"] },
    { issue:"Hypertension", interventions:["DASH diet","Blood pressure monitoring & medication adherence","Relaxation techniques (meditation, breathing exercises)"] },
    { issue:"Dyslipidemia", interventions:["Lipid-lowering medications (statins, fibrates)","Heart-healthy diet (low saturated fat, high fiber)","Regular cardiovascular exercise"] },
    { issue: "Inflammation & Endothelial Dysfunction", interventions: ["Anti-inflammatory diet (rich in omega-3s, antioxidants)", "Smoking cessation & alcohol moderation", "Regular physical activity & weight control"]},
    { issue: "Increased Risk of Cardiovascular Events", interventions: ["Aggressive cardiovascular risk management", "Medications (aspirin, statins, antihypertensives)", "Regular follow-ups & lifestyle modifications"]}
  ]},
  { id:"intimacy", label:"14. Intimacy & Sexuality Issues", issues: [
    { issue:"Erectile Dysfunction", interventions:["Medications (Viagra, Cialis)","Penile implants, vacuum erection devices","Psychosexual counseling"] },
    { issue:"Decreased Libido", interventions:["Hormonal therapy (testosterone, estrogen)","Couples therapy, sex therapy","Fatigue management & pain control"] },
    { issue: "Vaginal Dryness & Pain During Intercourse", interventions: ["Lubricants and vaginal moisturizers", "Pelvic floor therapy", "Hormonal treatments (vaginal estrogen creams, DHEA)"]},
    { issue: "Orgasmic Dysfunction", interventions: ["Sensate focus therapy (non-penetrative intimacy exercises)", "Medication adjustments","Use of vibratory stimulation for nerve reactivation"]},
    { issue:"Body Image and Self-Esteem Issues", interventions:["CBT for body image","Support groups for patients with visible disabilities","Encouraging open partner communication"] },
    { issue:"Spasticity and Physical Limitations Affecting Sex", interventions:["Supportive pillows, adaptive sexual positions","Pain management before intimacy","Partner education and involvement"] },
    { issue: "Fear of Pregnancy & Fertility Concerns", interventions: ["Pre-conception counseling", "Fertility preservation techniques (egg/sperm freezing)", "Safe pregnancy planning with medical guidance"]},
    { issue: "Sexual Identity & Orientation Concerns Post-Injury", interventions: ["Sexual health counseling with an inclusive approach", "Support groups for LGBTQ+ individuals with disabilities", "Exploration of new forms of intimacy (sensate therapy, mutual touch exercises)"]}
  ]},
  { id:"nutrition", label:"15. Nutrition Issues", issues: [
    { issue:"Malnutrition", interventions:["Nutritional assessment and monitoring (BMI, albumin)","High-protein, high-calorie diet","Enteral or parenteral nutrition if needed","Appetite stimulants if appropriate"] },
    { issue:"Obesity & Overnutrition", interventions:["Calorie-controlled, nutrient-dense diet","Behavioral therapy for emotional eating","Encouraging physical activity as tolerated"] },
    { issue:"Dysphagia", interventions:["Swallowing therapy with SLP","Modified diet (pureed foods, thickened liquids)","Feeding tubes if needed (NG tube, PEG tube)"] },
    { issue: "Micronutrient Deficiencies", interventions: ["Nutrient-rich diet with variety of foods", "Supplementation if needed (B12, iron, Vitamin D, Omega-3s)", "Lab monitoring for deficiencies (CBC, ferritin, Vitamin D levels)"]},
    { issue:"Dehydration", interventions:["Encourage frequent fluid intake","IV hydration if needed","Monitoring urine output and electrolytes"] },
    { issue: "Pressure Ulcers & Poor Wound Healing Due to Malnutrition", interventions: ["High-protein, high-calorie diet", "Vitamin and mineral supplementation", "Hydration optimization"]},
    { issue:"Diabetes & Blood Sugar Control Issues", interventions:["Blood sugar monitoring","Balanced carbohydrate intake (low GI foods)","Exercise as tolerated"] }
  ]},
  { id:"safety", label:"16. Safety Issues", issues: [
    { issue:"Falls & Fall-Related Injuries", interventions:["Fall risk assessment (Morse Fall Scale, Berg Balance Test)","Mobility aids (walkers, canes, grab bars)","Physical therapy for strength & balance","Adjust medications causing dizziness"] },
    { issue:"Aspiration & Choking Risk", interventions:["Swallowing assessment by SLP","Modified diet (thickened liquids, pureed foods)","Supervised feeding & upright positioning"] },
    { issue:"Medication Errors & Adverse Drug Reactions", interventions:["Medication reconciliation during transitions","Electronic medication administration records (eMARs)","Patient & caregiver education on medication use"] },
    { issue:"Pressure Ulcers & Skin Integrity", interventions:["Frequent repositioning (every 2 hours in bed)","Skin assessments & pressure-relieving mattresses","Proper nutrition & hydration"] },
    { issue: "Wandering & Elopement in Cognitive Impaired Patients", interventions: ["Use of monitoring systems (door alarms, GPS trackers)", "Behavioral interventions & environmental modifications", "Supervised activities & engagement programs"]},
    { issue: "Burns & Thermal Injuries", interventions: ["Educating patients on safe temperature settings for water & devices", "Avoiding unsupervised use of heating pads or electric blankets", "Regular skin checks for patients with neuropathy"]},
    { issue:"Seizure Safety Concerns", interventions:["Seizure precautions (padded bedrails, avoid sharp objects)","Medication adherence & monitoring levels","Patient & caregiver education on seizure first aid"] },
    { issue:"Self-Harm & Suicide Risk", interventions:["Routine mental health screenings","Crisis intervention & suicide prevention programs","Psychological counseling & support groups"] },
    { issue: "Workplace & Caregiver Safety", interventions: ["Use of mechanical lifts & transfer aids", "Proper ergonomics & staff education on body mechanics", "Workplace wellness programs for staff"]}
  ]},
  { id:"energy", label:"17. Energy Conservation & Sleep", issues: [
    { issue:"Fatigue & Low Energy Levels", interventions:["Energy conservation techniques (pacing, planning)","Adequate nutrition & hydration","Physical therapy to improve endurance","Medication review to reduce drowsiness"] },
    { issue:"Post-Stroke or Neurological Fatigue", interventions:["Frequent rest breaks between activities","Cognitive pacing strategies","Mindfulness & relaxation techniques"] },
    { issue:"Sleep Disturbances", interventions:["Consistent sleep schedule","Pain management before bedtime","Minimizing screen time & stimulants before sleep"] },
    { issue:"Obstructive Sleep Apnea", interventions:["CPAP therapy","Weight management strategies","Avoiding alcohol & sedatives before sleep"] },
    { issue: "Circadian Rhythm Disruptions", interventions: ["Light therapy for circadian realignment", "Maintaining a structured daily routine", "Encouraging outdoor activity in daylight"]},
    { issue:"Restless Legs Syndrome & Nocturnal Spasms", interventions:["Iron supplementation if deficient","Stretching exercises before sleep","Medications (dopamine agonists, muscle relaxants)"] },
    { issue:"Excessive Daytime Sleepiness", interventions:["Promoting better nighttime sleep habits","Adjusting medications causing drowsiness","Encouraging brief naps (20-30 min)"] }
  ]}
];

/* ── Nursing Diagnosis Panel Component (Assessment tab) ── */
export function NursingDiagnosisPanel({ values, onChange }) {
  // activeCategory stored in values so it survives parent re-renders
  const activeCategories =
    values.nd_active_categories || [];

  const toggleCategory = (id) => {
    const exists = activeCategories.includes(id);

    const next = exists
      ? activeCategories.filter(c => c !== id)
      : [...activeCategories, id];

    onChange("nd_active_categories", next);
  };
  const visibleCategories =
    NURSING_DIAGNOSES.filter(c =>
      activeCategories.includes(c.id)
    );
  const selectedIssues = values.nd_selected_issues || [];
  const toggleIssue = (issue) => {
    const isSelected = selectedIssues.includes(issue);
    const next = isSelected ? selectedIssues.filter(i => i !== issue) : [...selectedIssues, issue];
    if (isSelected) {
      const nextInterv = { ...(values.nd_selected_interventions || {}) };
      delete nextInterv[issue];
      onChange("nd_selected_interventions", nextInterv);
    }
    onChange("nd_selected_issues", next);
  };
  const cbIssueStyle = { marginRight: 8, accentColor: "#1d4ed8", width: 15, height: 15, flexShrink: 0, cursor: "pointer" };
  return (
    <div style={{ fontFamily: "inherit" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
        {NURSING_DIAGNOSES.map(c => {
          const active =
            activeCategories.includes(c.id);

          return (
            <button
              key={c.id}
              onClick={() => toggleCategory(c.id)}
              style={{
                padding: "7px 14px",
                borderRadius: 20,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                border: "1.5px solid",
                borderColor: active
                  ? "#1d4ed8"
                  : "#d1d5db",
                background: active
                  ? "#1d4ed8"
                  : "#fff",
                color: active
                  ? "#fff"
                  : "#374151",
                transition: "all .15s"
              }}
            >
              {c.label}
            </button>
          );
        })}
      </div>
      {visibleCategories.map(cat => (
        <div style={{ background: "#f8fafc", border: "1px solid #e5e7eb", borderRadius: 10, padding: "14px 18px", marginBottom: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#1d4ed8", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 12 }}>Select Issue — {cat.label}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "8px 16px" }}>
            {cat.issues.map(iss => {
              const isSelected = selectedIssues.includes(iss.issue);
              return (
                <label key={iss.issue} style={{ display: "flex", alignItems: "center", cursor: "pointer", padding: "7px 10px", borderRadius: 6, fontSize: 13, fontWeight: isSelected ? 600 : 400, background: isSelected ? "#eff6ff" : "transparent", border: "1px solid " + (isSelected ? "#93c5fd" : "transparent"), color: isSelected ? "#1d4ed8" : "#374151", transition: "all .12s" }}>
                  <input type="checkbox" checked={isSelected} onChange={() => toggleIssue(iss.issue)} style={cbIssueStyle} />
                  {iss.issue}
                </label>
              );
            })}
          </div>
        </div>
      ))}
      {selectedIssues.length > 0 && (
        <div style={{ marginBottom: 14, padding: "10px 14px", background: "#f0fdf4", border: "1px solid #86efac", borderRadius: 8, fontSize: 12, color: "#065f46" }}>
          <b>{selectedIssues.length} issue{selectedIssues.length > 1 ? "s" : ""} selected:</b>{" "}
          {selectedIssues.join(" · ")}
          <span style={{ marginLeft: 8, color: "#6b7280" }}>— Go to Plan tab to select specific interventions</span>
        </div>
      )}
    </div>
  );
}

/* ── Plan panel: intervention checkboxes + summary grouped by issue (Plan tab) ── */
export function NursingPlanPanel({ values, onChange }) {
  const selectedIssues = values.nd_selected_issues || [];
  const selectedInterventions =
    values.nd_selected_interventions || {};

  // active issue
  const activeIssue =
    values.nd_plan_active_issue ||
    selectedIssues[0] ||
    null;

  const setActiveIssue = (issue) => {
    onChange("nd_plan_active_issue", issue);
  };

  // empty state
  if (selectedIssues.length === 0) {
    return (
      <div
        style={{
          padding: "14px 18px",
          background: "#f8fafc",
          borderRadius: 8,
          border: "1px dashed #d1d5db",
          color: "#9ca3af",
          fontSize: 13
        }}
      >
        No issues selected yet.
        Go to Assessment tab first to select.
      </div>
    );
  }

  // group selected issues by category
  const groupedIssues = NURSING_DIAGNOSES
    .map(category => ({
      category: category.label,
      issues: selectedIssues.filter(issue =>
        category.issues.some(
          i => i.issue === issue
        )
      )
    }))
    .filter(group => group.issues.length > 0);

  // active issue data
  let issueData = null;
  let activeCategory = null;

  for (const cat of NURSING_DIAGNOSES) {
    const found = cat.issues.find(
      i => i.issue === activeIssue
    );

    if (found) {
      issueData = found;
      activeCategory = cat;
      break;
    }
  }

  if (!issueData) return null;

  const selectedForIssue =
    selectedInterventions[activeIssue] || [];

  const allChecked =
    issueData.interventions.every(iv =>
      selectedForIssue.includes(iv)
    );

  const toggleIntervention = (
    issue,
    intervention
  ) => {
    const current =
      selectedInterventions[issue] || [];

    const next = current.includes(intervention)
      ? current.filter(iv => iv !== intervention)
      : [...current, intervention];

    onChange(
      "nd_selected_interventions",
      {
        ...selectedInterventions,
        [issue]: next
      }
    );
  };

  // category colors
  const getCategoryColor = (label) => {
    const lower = label.toLowerCase();

    if (lower.includes("cognitive"))
      return "#2563eb";

    if (lower.includes("bladder"))
      return "#059669";

    if (lower.includes("bowel"))
      return "#d97706";

    if (lower.includes("pain"))
      return "#dc2626";

    if (lower.includes("mobility"))
      return "#7c3aed";

    return "#0f766e";
  };

  const activeColor =
    getCategoryColor(
      activeCategory?.label || ""
    );

  return (
    <div style={{ fontFamily: "inherit" }}>

      {/* CATEGORY GROUPS */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
          marginBottom: 22
        }}
      >
        {groupedIssues.map(group => {
          const groupColor =
            getCategoryColor(group.category);

          return (
            <div key={group.category}>

              {/* CATEGORY TITLE */}
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: groupColor,
                  textTransform: "uppercase",
                  letterSpacing: ".6px",
                  marginBottom: 8
                }}
              >
                {group.category}
              </div>

              {/* ISSUE CHIPS */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8
                }}
              >
                {group.issues.map(issue => {
                  const active =
                    issue === activeIssue;

                  return (
                    <button
                      key={issue}
                      onClick={() =>
                        setActiveIssue(issue)
                      }
                      style={{
                        padding: "8px 14px",
                        borderRadius: 20,
                        border: "1px solid",
                        borderColor: active
                          ? groupColor
                          : "#d1d5db",
                        background: active
                          ? groupColor
                          : "#fff",
                        color: active
                          ? "#fff"
                          : "#374151",
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all .15s"
                      }}
                    >
                      {issue}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* ACTIVE ISSUE PANEL */}
      <div
        style={{
          background: "#fff",
          border: `1.5px solid ${activeColor}`,
          borderRadius: 12,
          padding: "18px"
        }}
      >

        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            marginBottom: 16
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: activeColor,
                textTransform: "uppercase",
                letterSpacing: ".5px",
                marginBottom: 4
              }}
            >
              {activeCategory?.label}
            </div>

            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#111827"
              }}
            >
              {activeIssue}
            </div>
          </div>

          {/* SELECT ALL */}
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              fontWeight: 600,
              color: activeColor,
              cursor: "pointer"
            }}
          >
            <input
              type="checkbox"
              checked={allChecked}
              onChange={() => {
                const next = allChecked
                  ? []
                  : [
                      ...issueData.interventions
                    ];

                onChange(
                  "nd_selected_interventions",
                  {
                    ...selectedInterventions,
                    [activeIssue]: next
                  }
                );
              }}
              style={{
                accentColor: activeColor,
                width: 14,
                height: 14
              }}
            />

            Select all
          </label>
        </div>

        {/* INTERVENTIONS GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 12
          }}
        >
          {issueData.interventions.map(
            (intervention, index) => {
              const checked =
                selectedForIssue.includes(
                  intervention
                );

              return (
                <label
                  key={index}
                  style={{
                    display: "flex",
                    alignItems:
                      "flex-start",
                    gap: 10,
                    cursor: "pointer",
                    padding: "12px 14px",
                    borderRadius: 10,
                    border: checked
                      ? `1px solid ${activeColor}`
                      : "1px solid #e5e7eb",
                    background: checked
                      ? `${activeColor}10`
                      : "#fff",
                    transition:
                      "all .15s ease",
                    lineHeight: 1.5
                  }}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() =>
                      toggleIntervention(
                        activeIssue,
                        intervention
                      )
                    }
                    style={{
                      marginTop: 2,
                      accentColor:
                        activeColor,
                      width: 15,
                      height: 15,
                      flexShrink: 0,
                      cursor: "pointer"
                    }}
                  />

                  <span
                    style={{
                      fontSize: 14,
                      color: "#374151",
                      fontWeight: checked
                        ? 600
                        : 400
                    }}
                  >
                    {intervention}
                  </span>
                </label>
              );
            }
          )}
        </div>

        {/* FOOTER */}
        <div
          style={{
            marginTop: 16,
            fontSize: 13,
            fontWeight: 600,
            color: activeColor
          }}
        >
          {selectedForIssue.length} of{" "}
          {issueData.interventions.length}
          {" "}selected
        </div>
      </div>
    </div>
  );
}

export default {
  NURSING_DIAGNOSES,
  NursingDiagnosisPanel,
  NursingPlanPanel,
};
