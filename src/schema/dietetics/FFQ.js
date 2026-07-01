const FFQ_SCHEMA = {
  "title": "Food Frequency Questionnaire (FFQ)",
  "fields": [
    {
      "type": "info-text",
      "text": "Frequency guide: Never (0 time/week), Seldom (1-2 times/week), Occasionally (3-4 times/week), Frequent (>5 times/week)."
    },
    {
      "type": "accordion",
      "name": "ffq_diabetes_section",
      "label": "Diabetes",
      "defaultOpen": true,
      "children": [
        {
          "type": "refraction-12col",
          "name": "ffq_diabetes_table",
          "cornerLabel": "Food checklist",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Never (0 time/week)",
              "columns": [
                {
                  "key": "never"
                }
              ]
            },
            {
              "label": "Seldom (1-2 times/week)",
              "columns": [
                {
                  "key": "seldom"
                }
              ]
            },
            {
              "label": "Occasionally (3-4 times/week)",
              "columns": [
                {
                  "key": "occasionally"
                }
              ]
            },
            {
              "label": "Frequent (>5 times/week)",
              "columns": [
                {
                  "key": "frequent"
                }
              ]
            },
            {
              "label": "Remarks (free text)",
              "columns": [
                {
                  "key": "remarks"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "sweetened_beverages",
              "label": "Sweetened beverages (soft drinks, juice, energy drinks)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "sweetened_beverages"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "sweetened_beverages"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "sweetened_beverages"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "sweetened_beverages"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "sweets_desserts",
              "label": "Sweets & desserts (candy, cakes, ice-cream)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "sweets_desserts"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "sweets_desserts"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "sweets_desserts"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "sweets_desserts"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "refined_sugar",
              "label": "Refined sugar (honey, jam, syrups)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "refined_sugar"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "refined_sugar"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "refined_sugar"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "refined_sugar"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "pastry_cookies",
              "label": "Pastry & cookies",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "pastry_cookies"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "pastry_cookies"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "pastry_cookies"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "pastry_cookies"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "hidden_sugar_foods",
              "label": "Hidden sugar foods (ketchup, yogurt, sauces)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "hidden_sugar_foods"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "hidden_sugar_foods"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "hidden_sugar_foods"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "hidden_sugar_foods"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "others",
              "label": "Others",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "others"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "accordion",
      "name": "ffq_hypertension_section",
      "label": "Hypertension",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "ffq_hypertension_table",
          "cornerLabel": "Food checklist",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Never (0 time/week)",
              "columns": [
                {
                  "key": "never"
                }
              ]
            },
            {
              "label": "Seldom (1-2 times/week)",
              "columns": [
                {
                  "key": "seldom"
                }
              ]
            },
            {
              "label": "Occasionally (3-4 times/week)",
              "columns": [
                {
                  "key": "occasionally"
                }
              ]
            },
            {
              "label": "Frequent (>5 times/week)",
              "columns": [
                {
                  "key": "frequent"
                }
              ]
            },
            {
              "label": "Remarks (free text)",
              "columns": [
                {
                  "key": "remarks"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "processed_packaged_foods",
              "label": "Processed & packaged foods (e.g. chips, frozen foods, instant noodles)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "processed_packaged_foods"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "processed_packaged_foods"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "processed_packaged_foods"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "processed_packaged_foods"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "fast_foods",
              "label": "Fast foods (e.g. pizza, burger, french fries)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "fast_foods"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "fast_foods"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "fast_foods"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "fast_foods"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "canned_preserved_foods",
              "label": "Canned & preserved foods (e.g. canned vegetables, fruits, meat, fish)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "canned_preserved_foods"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "canned_preserved_foods"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "canned_preserved_foods"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "canned_preserved_foods"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "sauce_condiments_pickles",
              "label": "Sauce, condiments & pickles (e.g. soy sauce, ketchup, fish/oyster sauce)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "sauce_condiments_pickles"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "sauce_condiments_pickles"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "sauce_condiments_pickles"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "sauce_condiments_pickles"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "salted_snacks",
              "label": "Salted snacks (e.g. salted nuts, peanuts)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "salted_snacks"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "salted_snacks"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "salted_snacks"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "salted_snacks"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "dairy_animal_products",
              "label": "Dairy & animal products (e.g. cheese, salted butter)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "dairy_animal_products"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "dairy_animal_products"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "dairy_animal_products"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "dairy_animal_products"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "others",
              "label": "Others",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "others"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "accordion",
      "name": "ffq_hypercholesterolemia_section",
      "label": "Hypercholesterolemia",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "ffq_hypercholesterolemia_table",
          "cornerLabel": "Food checklist",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Never (0 time/week)",
              "columns": [
                {
                  "key": "never"
                }
              ]
            },
            {
              "label": "Seldom (1-2 times/week)",
              "columns": [
                {
                  "key": "seldom"
                }
              ]
            },
            {
              "label": "Occasionally (3-4 times/week)",
              "columns": [
                {
                  "key": "occasionally"
                }
              ]
            },
            {
              "label": "Frequent (>5 times/week)",
              "columns": [
                {
                  "key": "frequent"
                }
              ]
            },
            {
              "label": "Remarks (free text)",
              "columns": [
                {
                  "key": "remarks"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "fried_foods",
              "label": "Fried foods (e.g. banana fritter, fried noodles)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "fried_foods"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "fried_foods"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "fried_foods"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "fried_foods"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "fast_foods_junk",
              "label": "Fast foods & junk foods (e.g. burger, pizza, french fries)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "fast_foods_junk"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "fast_foods_junk"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "fast_foods_junk"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "fast_foods_junk"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "internal_organs",
              "label": "Internal organs (e.g. liver, brain, kidney)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "internal_organs"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "internal_organs"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "internal_organs"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "internal_organs"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "fatty_processed_meats",
              "label": "Fatty & processed meats (e.g. red meat, sausage, bacon, ham)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "fatty_processed_meats"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "fatty_processed_meats"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "fatty_processed_meats"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "fatty_processed_meats"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "full_fat_dairy",
              "label": "Full-fat dairy (e.g. full cream milk, cheese, condensed milk)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "full_fat_dairy"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "full_fat_dairy"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "full_fat_dairy"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "full_fat_dairy"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "baked_packaged_foods",
              "label": "Baked & packaged foods (e.g. cake, pastries, biscuits)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "baked_packaged_foods"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "baked_packaged_foods"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "baked_packaged_foods"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "baked_packaged_foods"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "others",
              "label": "Others",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "others"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "accordion",
      "name": "ffq_gout_section",
      "label": "Gout (High Purine Foods)",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "ffq_gout_table",
          "cornerLabel": "Food checklist",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Never (0 time/week)",
              "columns": [
                {
                  "key": "never"
                }
              ]
            },
            {
              "label": "Seldom (1-2 times/week)",
              "columns": [
                {
                  "key": "seldom"
                }
              ]
            },
            {
              "label": "Occasionally (3-4 times/week)",
              "columns": [
                {
                  "key": "occasionally"
                }
              ]
            },
            {
              "label": "Frequent (>5 times/week)",
              "columns": [
                {
                  "key": "frequent"
                }
              ]
            },
            {
              "label": "Remarks (free text)",
              "columns": [
                {
                  "key": "remarks"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "internal_organs",
              "label": "Internal Organs (e.g. Liver, brain, kidney etc)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "internal_organs"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "internal_organs"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "internal_organs"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "internal_organs"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "seafoods",
              "label": "Seafoods (e.g. Sardines, anchovies, mackerel, tuna etc)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "seafoods"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "seafoods"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "seafoods"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "seafoods"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "red_processed_meats",
              "label": "Red & processed meats (e.g. mutton, beef, pork, sausage)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "red_processed_meats"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "red_processed_meats"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "red_processed_meats"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "red_processed_meats"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "alcohol",
              "label": "Alcohol (e.g. beer, home brewed etc)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "alcohol"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "alcohol"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "alcohol"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "alcohol"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "sweets_desserts",
              "label": "Sweets & desserts (e.g. candy, cakes, ice-cream, chocolate)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "sweets_desserts"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "sweets_desserts"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "sweets_desserts"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "sweets_desserts"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "sugary_drinks",
              "label": "Sugary drinks (e.g. cordial, carbonated, flavored drink, bubble tea)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "sugary_drinks"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "sugary_drinks"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "sugary_drinks"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "sugary_drinks"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "others",
              "label": "Others (e.g. yeast, yeast extract etc)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "others"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "accordion",
      "name": "ffq_overweight_obesity_section",
      "label": "Overweight/Obesity",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "ffq_overweight_obesity_table",
          "cornerLabel": "Food checklist",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Never (0 time/week)",
              "columns": [
                {
                  "key": "never"
                }
              ]
            },
            {
              "label": "Seldom (1-2 times/week)",
              "columns": [
                {
                  "key": "seldom"
                }
              ]
            },
            {
              "label": "Occasionally (3-4 times/week)",
              "columns": [
                {
                  "key": "occasionally"
                }
              ]
            },
            {
              "label": "Frequent (>5 times/week)",
              "columns": [
                {
                  "key": "frequent"
                }
              ]
            },
            {
              "label": "Remarks (free text)",
              "columns": [
                {
                  "key": "remarks"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "fast_foods",
              "label": "Fast Foods (e.g. pizza, burger, french fries etc)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "fast_foods"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "fast_foods"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "fast_foods"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "fast_foods"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "processed_foods",
              "label": "Processed Foods (e.g. nuggets, sausage, hashbrown etc)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "processed_foods"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "processed_foods"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "processed_foods"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "processed_foods"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "chips_snacks",
              "label": "Chips / snacks",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "chips_snacks"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "chips_snacks"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "chips_snacks"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "chips_snacks"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "sweets_chocolate",
              "label": "Sweets / chocolate (candies, chocolate bar, ice cream)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "sweets_chocolate"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "sweets_chocolate"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "sweets_chocolate"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "sweets_chocolate"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "sugary_drinks",
              "label": "Sugary drinks (e.g. cordial, carbonated, flavored drinks, bubble tea)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "sugary_drinks"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "sugary_drinks"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "sugary_drinks"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "sugary_drinks"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "creamy_cheese_dishes",
              "label": "Creamy / cheese-based dishes (e.g. carbonara, cheesecake, buttermilk, naan)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "creamy_cheese_dishes"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "creamy_cheese_dishes"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "creamy_cheese_dishes"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "creamy_cheese_dishes"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "others",
              "label": "Others",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "others"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "accordion",
      "name": "ffq_cp_feeding_section",
      "label": "Cerebral Palsy / Feeding Difficulty",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "ffq_cp_feeding_table",
          "cornerLabel": "Food checklist",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Never (0 time/week)",
              "columns": [
                {
                  "key": "never"
                }
              ]
            },
            {
              "label": "Seldom (1-2 times/week)",
              "columns": [
                {
                  "key": "seldom"
                }
              ]
            },
            {
              "label": "Occasionally (3-4 times/week)",
              "columns": [
                {
                  "key": "occasionally"
                }
              ]
            },
            {
              "label": "Frequent (>5 times/week)",
              "columns": [
                {
                  "key": "frequent"
                }
              ]
            },
            {
              "label": "Remarks (free text)",
              "columns": [
                {
                  "key": "remarks"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "thin_liquids",
              "label": "Thin liquids (e.g. water, fruit juice without pulp, thin soup broth)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "thin_liquids"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "thin_liquids"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "thin_liquids"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "thin_liquids"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "smooth_purees",
              "label": "Smooth purees (e.g. blended porridge, yogurt, pureed foods)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "smooth_purees"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "smooth_purees"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "smooth_purees"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "smooth_purees"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "soft_bite_sized",
              "label": "Soft & Bite-Sized (e.g. soft rice, tofu, steamed vegetables)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "soft_bite_sized"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "soft_bite_sized"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "soft_bite_sized"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "soft_bite_sized"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "mixed_textures",
              "label": "Mixed textures (e.g. soups with bits, fruits like watermelon)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "mixed_textures"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "mixed_textures"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "mixed_textures"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "mixed_textures"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "dry_crumbly",
              "label": "Dry & crumbly foods (e.g. biscuits, crackers, chips)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "dry_crumbly"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "dry_crumbly"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "dry_crumbly"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "dry_crumbly"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "others",
              "label": "Others",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "others"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "accordion",
      "name": "ffq_allergy_section",
      "label": "Food Allergies / Intolerance (Paediatric Allergy)",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "ffq_allergy_table",
          "cornerLabel": "Food checklist",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Never (0 time/week)",
              "columns": [
                {
                  "key": "never"
                }
              ]
            },
            {
              "label": "Seldom (1-2 times/week)",
              "columns": [
                {
                  "key": "seldom"
                }
              ]
            },
            {
              "label": "Occasionally (3-4 times/week)",
              "columns": [
                {
                  "key": "occasionally"
                }
              ]
            },
            {
              "label": "Frequent (>5 times/week)",
              "columns": [
                {
                  "key": "frequent"
                }
              ]
            },
            {
              "label": "Remarks (free text)",
              "columns": [
                {
                  "key": "remarks"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "milk_dairy",
              "label": "Milk & dairy products (e.g. milk, cheese, yogurt, ice cream, condensed milk)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "milk_dairy"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "milk_dairy"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "milk_dairy"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "milk_dairy"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "egg_foods",
              "label": "Egg-containing foods (e.g. cake, custard, mayonnaise, omelette, egg tarts)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "egg_foods"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "egg_foods"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "egg_foods"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "egg_foods"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "nuts_legumes",
              "label": "Nuts & legumes (e.g. peanut butter, peanuts, almond, cashew, soybeans, tofu)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "nuts_legumes"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "nuts_legumes"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "nuts_legumes"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "nuts_legumes"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "wheat_gluten",
              "label": "Wheat & gluten foods (e.g. bread, noodles, biscuits, pastries)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "wheat_gluten"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "wheat_gluten"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "wheat_gluten"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "wheat_gluten"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "seafood",
              "label": "Seafood (e.g. fish, shrimp, crab, shellfish)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "seafood"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "seafood"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "seafood"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "seafood"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "others",
              "label": "Others",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "others"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "accordion",
      "name": "ffq_dental_section",
      "label": "Dental Caries / Oral Health Issues",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "ffq_dental_table",
          "cornerLabel": "Food checklist",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Never (0 time/week)",
              "columns": [
                {
                  "key": "never"
                }
              ]
            },
            {
              "label": "Seldom (1-2 times/week)",
              "columns": [
                {
                  "key": "seldom"
                }
              ]
            },
            {
              "label": "Occasionally (3-4 times/week)",
              "columns": [
                {
                  "key": "occasionally"
                }
              ]
            },
            {
              "label": "Frequent (>5 times/week)",
              "columns": [
                {
                  "key": "frequent"
                }
              ]
            },
            {
              "label": "Remarks (free text)",
              "columns": [
                {
                  "key": "remarks"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "sticky_sweets",
              "label": "Sticky sweets (e.g. gummy candy, toffee, caramel)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "sticky_sweets"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "sticky_sweets"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "sticky_sweets"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "sticky_sweets"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "frequent_snacking",
              "label": "Frequent snacking on sugary foods",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "frequent_snacking"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "frequent_snacking"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "frequent_snacking"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "frequent_snacking"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "sugary_sipping",
              "label": "Sugary drinks sipping throughout the day",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "sugary_sipping"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "sugary_sipping"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "sugary_sipping"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "sugary_sipping"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "sweetened_milk",
              "label": "Sweetened milk drinks (e.g. chocolate milk, flavored milk)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "sweetened_milk"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "sweetened_milk"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "sweetened_milk"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "sweetened_milk"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "refined_starch",
              "label": "Refined starch snacks (e.g. white bread, crackers)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "refined_starch"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "refined_starch"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "refined_starch"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "refined_starch"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "sweet_spreads",
              "label": "Sweet spreads (e.g. jam, kaya, condensed milk)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "sweet_spreads"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "sweet_spreads"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "sweet_spreads"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "sweet_spreads"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "sticky_dried_fruits",
              "label": "Sticky dried fruits (e.g. raisins, dried mango)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "sticky_dried_fruits"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "sticky_dried_fruits"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "sticky_dried_fruits"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "sticky_dried_fruits"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "others",
              "label": "Others",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "others"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "accordion",
      "name": "ffq_gi_section",
      "label": "Diarrhea / GI Sensitivity",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "ffq_gi_table",
          "cornerLabel": "Food checklist",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Never (0 time/week)",
              "columns": [
                {
                  "key": "never"
                }
              ]
            },
            {
              "label": "Seldom (1-2 times/week)",
              "columns": [
                {
                  "key": "seldom"
                }
              ]
            },
            {
              "label": "Occasionally (3-4 times/week)",
              "columns": [
                {
                  "key": "occasionally"
                }
              ]
            },
            {
              "label": "Frequent (>5 times/week)",
              "columns": [
                {
                  "key": "frequent"
                }
              ]
            },
            {
              "label": "Remarks (free text)",
              "columns": [
                {
                  "key": "remarks"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "high_sugar_foods",
              "label": "High sugar foods (e.g. sweet drinks, sweets)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "high_sugar_foods"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "high_sugar_foods"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "high_sugar_foods"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "high_sugar_foods"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "fried_foods",
              "label": "High fat fried foods",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "fried_foods"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "fried_foods"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "fried_foods"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "fried_foods"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "spicy_foods",
              "label": "Spicy foods (e.g. chili-based dishes)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "spicy_foods"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "spicy_foods"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "spicy_foods"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "spicy_foods"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "artificial_sweeteners",
              "label": "Artificial sweeteners (e.g. sugar-free candy, diet drinks)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "artificial_sweeteners"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "artificial_sweeteners"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "artificial_sweeteners"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "artificial_sweeteners"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "caffeine_drinks",
              "label": "Caffeine-containing drinks (e.g. tea, chocolate drinks)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "caffeine_drinks"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "caffeine_drinks"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "caffeine_drinks"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "caffeine_drinks"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "cold_foods",
              "label": "Very cold foods (e.g. ice drinks, ice cream)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "cold_foods"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "cold_foods"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "cold_foods"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "cold_foods"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "lactose_foods",
              "label": "Lactose-containing foods (e.g. milk, soft cheese)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "lactose_foods"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "lactose_foods"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "lactose_foods"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "lactose_foods"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "gas_foods",
              "label": "Gas-producing foods (e.g. beans, cabbage, legumes)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "gas_foods"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "gas_foods"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "gas_foods"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "gas_foods"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "others",
              "label": "Others",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "others"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "accordion",
      "name": "ffq_ftt_section",
      "label": "Failure to Thrive (FTT)",
      "defaultOpen": false,
      "children": [
        {
          "type": "refraction-12col",
          "name": "ffq_ftt_table",
          "cornerLabel": "Food checklist",
          "cornerLikeGroupHeader": true,
          "showColumnHeaders": true,
          "groups": [
            {
              "label": "Never (0 time/week)",
              "columns": [
                {
                  "key": "never"
                }
              ]
            },
            {
              "label": "Seldom (1-2 times/week)",
              "columns": [
                {
                  "key": "seldom"
                }
              ]
            },
            {
              "label": "Occasionally (3-4 times/week)",
              "columns": [
                {
                  "key": "occasionally"
                }
              ]
            },
            {
              "label": "Frequent (>5 times/week)",
              "columns": [
                {
                  "key": "frequent"
                }
              ]
            },
            {
              "label": "Remarks (free text)",
              "columns": [
                {
                  "key": "remarks"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "milk_formula",
              "label": "Milk / formula (e.g. breastfeeding, formula milk, dairy milk)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "milk_formula"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "milk_formula"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "milk_formula"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "milk_formula"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "protein_intake",
              "label": "Protein intake (e.g. egg, chicken, fish, tofu, tempeh)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "protein_intake"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "protein_intake"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "protein_intake"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "protein_intake"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "energy_dense",
              "label": "Energy-dense foods (e.g. rice, noodles, oils, butter, cheese, nut butters)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "energy_dense"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "energy_dense"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "energy_dense"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "energy_dense"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "fiber",
              "label": "Fiber (e.g. fruits & vegetables)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "fiber"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "fiber"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "fiber"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "fiber"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "beverages",
              "label": "Beverages (e.g. juice, water, sugary drinks, malted drinks)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "beverages"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "beverages"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "beverages"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "beverages"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "foods_skipped",
              "label": "Foods often skipped (e.g. breakfast, school snacks)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "foods_skipped"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "foods_skipped"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "foods_skipped"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "foods_skipped"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "picky_eating",
              "label": "Picky eating / restricted food variety",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "picky_eating"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "picky_eating"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "picky_eating"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "picky_eating"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "foods_diluted",
              "label": "Foods diluted with water (e.g. thin porridge, watery milk)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "foods_diluted"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "foods_diluted"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "foods_diluted"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "foods_diluted"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "low_protein",
              "label": "Low-protein foods (e.g. biscuits, plain rice meals)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "low_protein"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "low_protein"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "low_protein"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "low_protein"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "frequent_snacks",
              "label": "Frequent snacks (e.g. biscuits, bread, cakes, noodles, fries)",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "frequent_snacks"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "frequent_snacks"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "frequent_snacks"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "frequent_snacks"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            },
            {
              "value": "others",
              "label": "Others",
              "columns": [
                {
                  "type": "radio",
                  "value": "never",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "seldom",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "occasionally",
                  "name": "others"
                },
                {
                  "type": "radio",
                  "value": "frequent",
                  "name": "others"
                },
                {
                  "type": "text",
                  "placeholder": "Remarks"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}