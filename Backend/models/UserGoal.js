const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const UserGoal = sequelize.define('UserGoal', {
    userId: { type: DataTypes.INTEGER, allowNull: false },
    goalType: { type: DataTypes.STRING, allowNull: false }, // e.g., bulking, cutting, maintenance
    calories: { type: DataTypes.INTEGER, allowNull: false },
    protein: { type: DataTypes.INTEGER, allowNull: false },
    carbs: { type: DataTypes.INTEGER, allowNull: false },
    fat: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = UserGoal;
