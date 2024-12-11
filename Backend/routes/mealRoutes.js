const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal');

// Add a meal
router.post('/add', async (req, res) => {
    try {
        const meal = await Meal.create(req.body);
        res.json(meal);
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

module.exports = router;
