const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Meal = sequelize.define('Meal', {
    name: { type: DataTypes.STRING, allowNull: false },
    calories: { type: DataTypes.INTEGER, allowNull: false },
    protein: { type: DataTypes.INTEGER, allowNull: false },
    carbs: { type: DataTypes.INTEGER, allowNull: false },
    fat: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = Meal;
