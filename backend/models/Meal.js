const { DataTypes } = require('sequelize');
const sequelize = require('./index'); // Use the database connection

// Define the Meal model
// This model represents meals available in the system, including nutritional and dietary details
const Meal = sequelize.define('Meal', {
  // Unique identifier for each meal, generated as a UUID
  mealid: {
    type: DataTypes.UUID, // Universally Unique Identifier
    defaultValue: DataTypes.UUIDV4, // Automatically generates a UUID when a meal is created
    primaryKey: true, // Designates this as the primary key for the table
  },

  // Name of the meal
  name: {
    type: DataTypes.STRING, // Text representation of the meal's name
    allowNull: false, // This field is required
  },

  // Nutritional information about the meal
  nutritionInfo: {
    type: DataTypes.JSON, // Stores information like calories, protein, carbs, etc., in JSON format
    allowNull: true, // This field is optional
  },

  // Allergen information for the meal
  allergenInfo: {
    type: DataTypes.ARRAY(DataTypes.STRING), // List of allergens associated with the meal
    allowNull: false, // This field is required
  },

  // Dietary preferences or restrictions that the meal satisfies
  dietInfo: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Examples: "vegan", "gluten-free", "low-carb"
    allowNull: false, // This field is required
  },

  // A score representing the healthfulness of the meal
  healthfulness: {
    type: DataTypes.INTEGER, // Numeric score indicating the health rating
    allowNull: false, // This field is required
  },

  // List of ingredients used in the meal
  ingredients: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Examples: "chicken", "rice", "broccoli"
    allowNull: false, // This field is required
  },

  // Dates when the meal is available
  dates: {
    type: DataTypes.ARRAY(DataTypes.STRING), // List of dates (e.g., "2024-01-01")
    allowNull: false, // This field is required
  },

  // Selection status of the meal for each date
  selected: {
    type: DataTypes.ARRAY(DataTypes.BOOLEAN), // Array of booleans indicating selection status
    allowNull: false, // This field is required
  },

  // URL or file path of an image representing the meal
  image: {
    type: DataTypes.STRING, // URL or path as a string
    allowNull: true, // This field is optional
  },

  // MIME type of the image (e.g., "image/jpeg", "image/png")
  mime: {
    type: DataTypes.STRING, // MIME type as a string
    allowNull: true, // This field is optional
  },

  // Dining halls where the meal is available
  halls: {
    type: DataTypes.ARRAY(DataTypes.STRING), // List of dining halls (e.g., "Main Hall", "East Wing")
    allowNull: false, // This field is required
  },

  // Carbon footprint of the meal (e.g., in kg CO2e)
  carbon: {
    type: DataTypes.STRING, // Carbon footprint as a string (e.g., "0.5 kg CO2e")
    allowNull: false, // This field is required
  },
});

// Export the Meal model for use in other parts of the application
module.exports = Meal;
