const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CalorieWeek = sequelize.define('CalorieWeek', {
  weekNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  calories: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

module.exports = CalorieWeek;