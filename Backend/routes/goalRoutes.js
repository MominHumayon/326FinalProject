const express = require('express');
const router = express.Router();
const UserGoal = require('../models/UserGoal');

// Set user goal
router.post('/set', async (req, res) => {
    try {
        const goal = await UserGoal.create(req.body);
        res.json(goal);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get user goal
router.get('/:userId', async (req, res) => {
    try {
        const goal = await UserGoal.findOne({ where: { userId: req.params.userId } });
        res.json(goal);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
