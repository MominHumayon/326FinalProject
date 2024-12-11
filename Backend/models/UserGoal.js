const { DataTypes } = require('sequelize');
const sequelize = require('./index'); // Import Sequelize instance

const UserGoal = sequelize.define('UserGoal', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  goalType: {
    type: DataTypes.STRING, // e.g., "bulking", "cutting", "maintenance"
    allowNull: false,
  },
  calories: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  protein: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  carbs: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fat: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = UserGoal;
