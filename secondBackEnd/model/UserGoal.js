const { DataTypes } = require('sequelize');
const sequelize = require('./index'); // Import Sequelize instance

// Define the UserGoal model
// This model represents a user's dietary and fitness goals
const UserGoal = sequelize.define('UserGoal', {
  // Foreign key to associate the goal with a specific user
  userId: {
    type: DataTypes.INTEGER, // The ID of the user
    allowNull: false, // This field is required
    unique: true, // Ensures a one-to-one relationship between user and goal
  },
  
  // The type of goal the user is pursuing
  goalType: {
    type: DataTypes.STRING, // Examples: "bulking", "cutting", "maintenance"
    allowNull: false, // This field is required
  },

  // Caloric intake target for the user's goal
  calories: {
    type: DataTypes.INTEGER, // Total calories per day
    allowNull: false, // This field is required
  },

  // Daily protein intake target (in grams)
  protein: {
    type: DataTypes.INTEGER, // Amount of protein in grams
    allowNull: false, // This field is required
  },

  // Daily carbohydrate intake target (in grams)
  carbs: {
    type: DataTypes.INTEGER, // Amount of carbohydrates in grams
    allowNull: false, // This field is required
  },

  // Daily fat intake target (in grams)
  fat: {
    type: DataTypes.INTEGER, // Amount of fat in grams
    allowNull: false, // This field is required
  },
});

// Export the UserGoal model for use in other parts of the application
module.exports = UserGoal;
