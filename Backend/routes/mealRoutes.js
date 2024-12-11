const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal');

// Add a meal
router.post('/add', async (req, res) => {
  try {
    const meal = await Meal.create(req.body); // Expects all fields, including nutritionInfo
    res.status(201).json(meal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all meals
router.get('/', async (req, res) => {
  try {
    const meals = await Meal.findAll();
    res.json(meals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Filter meals by criteria
router.post('/filter', async (req, res) => {
  const { dates, allergens, ingredients, halls, carbon } = req.body;

  try {
    let meals = await Meal.findAll();

    // Apply filters
    if (dates?.length) {
      meals = meals.filter((meal) =>
        dates.some((date) => meal.dates.includes(date))
      );
    }
    if (allergens?.length) {
      meals = meals.filter((meal) =>
        allergens.every((allergen) => meal.allergenInfo.includes(allergen))
      );
    }
    if (ingredients?.length) {
      meals = meals.filter((meal) =>
        ingredients.every((ingredient) => meal.ingredients.includes(ingredient))
      );
    }
    if (halls?.length) {
      meals = meals.filter((meal) =>
        halls.some((hall) => meal.halls.includes(hall))
      );
    }
    if (carbon && carbon !== 'A') {
      meals = meals.filter((meal) => meal.carbon === carbon);
    }

    res.json(meals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
