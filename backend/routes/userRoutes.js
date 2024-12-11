const express = require('express');
const router = express.Router();
const { User } = require('../models');
const { Op } = require('sequelize'); // Import Sequelize operators


// Create User Profile
router.post('/user', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// // Get User Profile
// router.get('/user/:id', async (req, res) => {
//   try {
//     const user = await User.findByPk(req.params.id);
//     if (!user) return res.status(404).json({ error: 'User not found' });
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// Verify User Profile (Login)
router.get('/user', async (req, res) => {
  const { firstName, lastName } = req.query;

  try {
    const user = await User.findOne({
      where: {
        firstName: { [Op.like]: firstName }, // Case-insensitive comparison
        lastName: { [Op.like]: lastName },  // Case-insensitive comparison
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
