const express = require('express');
const router = express.Router();
const UserGoal = require('../models/UserGoal'); // Import UserGoal model

// Set a user's goal
router.post('/set', async (req, res) => {
  try {
    const { userId, goalType, calories, protein, carbs, fat } = req.body;
    const existingGoal = await UserGoal.findOne({ where: { userId } });

    if (existingGoal) {
      // Optionally overwrite existing goal
      await existingGoal.update({ goalType, calories, protein, carbs, fat });
      return res.json({ message: 'Goal updated successfully', goal: existingGoal });
    }

    const newGoal = await UserGoal.create({ userId, goalType, calories, protein, carbs, fat });
    res.status(201).json({ message: 'Goal set successfully', goal: newGoal });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a user's goal
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const goal = await UserGoal.findOne({ where: { userId } });

    if (!goal) {
      return res.status(404).json({ error: 'Goal not found' });
    }

    res.json(goal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Optional: Update a user's goal
router.put('/update', async (req, res) => {
  try {
    const { userId, goalType, calories, protein, carbs, fat } = req.body;
    const goal = await UserGoal.findOne({ where: { userId } });

    if (!goal) {
      return res.status(404).json({ error: 'Goal not found' });
    }

    await goal.update({ goalType, calories, protein, carbs, fat });
    res.json({ message: 'Goal updated successfully', goal });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Optional: Delete a user's goal
router.delete('/delete/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const rowsDeleted = await UserGoal.destroy({ where: { userId } });

    if (rowsDeleted === 0) {
      return res.status(404).json({ error: 'Goal not found' });
    }

    res.json({ message: 'Goal deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
