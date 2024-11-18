# Meal Recommender Data Structures

## Meal Data Structure
```javascript
{
    id: Number,              // Unique identifier
    name: String,           // Name of the meal
    location: String,       // Dining location
    calories: Number,       // Caloric content
    protein: Number,        // Protein content in grams
    carbs: Number,          // Carbohydrate content in grams
    fat: Number,           // Fat content in grams
    isVegetarian: Boolean, // Vegetarian status
    isVegan: Boolean,      // Vegan status
    isGlutenFree: Boolean  // Gluten-free status
}
```

## User Preferences Structure
```javascript
{
    id: Number,                // Unique identifier
    calorieGoal: Number,      // Daily calorie target
    dietary: Array<String>,   // Array of dietary restrictions
    timestamp: Date          // Last update timestamp
}
```

## IndexedDB Schema
- Database Name: UMassDiningDB
- Version: 1
- Object Stores:
  1. meals (keyPath: 'id', autoIncrement: true)
  2. preferences (keyPath: 'id', autoIncrement: true)