const { DataTypes } = require('sequelize');
const sequelize = require('./index'); // Use the database connection

const Meal = sequelize.define('Meal', {
  mealid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nutritionInfo: {
    type: DataTypes.JSON, // Stores carbs, prot, cals, etc. as JSON
    allowNull: true,
  },
  allergenInfo: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  dietInfo: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  healthfulness: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ingredients: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  dates: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  selected: {
    type: DataTypes.ARRAY(DataTypes.BOOLEAN),
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mime: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  halls: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  carbon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Meal;
