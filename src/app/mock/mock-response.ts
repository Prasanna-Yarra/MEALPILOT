export const MOCK_RESPONSE = {

  response_type: 'grocery',

  final_decision: 'Order Groceries + Cook',

  reason:
    'You already have paneer and wheat. Missing items are available on Instamart, making cooking practical and affordable.',

  ui_sections: {
    show_meals: true,
    show_grocery_cart: true,
    show_fallback_food: false,
    show_dineout: false,
    show_scores: true
  },

  badges: [
    'High Protein',
    'Budget Friendly',
    'Instamart Feasible',
    'Low Waste'
  ],

  meals: [
    {
      name: 'Paneer Bhurji with Roti',
      description: 'Protein-rich Indian meal.',
      why_it_fits: 'Uses paneer and wheat efficiently.',
      prep_time: '30 mins',
      difficulty: 'Easy',
      calories: '450 kcal',
      protein: '24g',
      pantry_utilization: '100%',
      estimated_cost: '₹200',
      nutrition_focus: 'High Protein',
      cuisine: 'North Indian'
    }
  ],

  grocery_cart: [
    {
      item: 'Onion',
      quantity: '1 medium',
      estimated_price: '₹10',
      priority: 'High',
      available_on_instamart: true,
      substitution_available: false,
      substitution_item: ''
    }
  ],

  missing_ingredients: [],

  food_waste_reduction: {
    ingredients_utilized: ['Paneer', 'Wheat'],
    expiring_items_prioritized: ['Paneer'],
    waste_prevention_summary:
      'Paneer is fully utilized to avoid spoilage.'
  },

  fallback_food: [],

  dineout_suggestions: [],

  scores: {
    convenience: 7,
    cost_efficiency: 9,
    healthiness: 8,
    time_efficiency: 6,
    instamart_convenience: 9,
    cooking_practicality: 8
  },

  delivery: {
    estimated_time: '20-30 mins',
    instamart_available: true
  },

  summary: {
    grocery_cost: '₹150 - ₹250',
    pantry_utilization: '100%',
    overall_nutrition_alignment:
      'High protein balanced meal.',
    recommended_action_summary:
      'Order groceries and cook at home.'
  }

};