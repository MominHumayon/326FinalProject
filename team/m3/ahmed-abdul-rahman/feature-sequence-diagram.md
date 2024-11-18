# UMass Dining Meal Recommender Documentation

## Overview
The UMass Dining Meal Recommender is a feature that provides personalized meal suggestions based on user preferences and dietary requirements. The system filters meals based on dietary preferences, sourcing preferences, and carbon ratings to provide tailored recommendations.

## Features
- Personalized meal recommendations
- Dietary preference filtering (Vegetarian, Plant Based, Halal, Whole Grain)
- Sourcing preference filtering (Local, Sustainable, Antibiotic Free)
- Carbon rating filtering (A through E ratings)
- Real-time preference updates
- Nutritional information display

## Technical Architecture

### Components
1. **User Interface (UI)**
   - HTML-based interface with preference toggles
   - Meal recommendation display cards
   - Nutrition summary dashboard

2. **UI Manager**
   - Handles user interactions
   - Manages preference updates
   - Controls recommendation display

3. **Meal System**
   - Stores meal data
   - Filters recommendations
   - Calculates nutrition summaries

### Data Structures

#### Dining Locations
```javascript
const DINING_LOCATIONS = {
    worcester: "Worcester Dining Commons",
    frank: "Franklin Dining Commons",
    hamp: "Hampshire Dining Commons",
    berk: "Berkshire Dining Commons"
};
```

#### Meal Object Structure
```javascript
{
    name: string,
    location: string,
    calories: number,
    protein: number,
    carbs: number,
    fat: number,
    isVegetarian: boolean,
    isPlantBased: boolean,
    isLocal: boolean,
    isSustainable: boolean,
    isHalal: boolean,
    isWholeGrain: boolean,
    isAntibioticFree: boolean,
    carbonRating: string,
    image: string,
    description: string
}
```

## Core Functionality

### Initialization
```javascript
document.addEventListener('DOMContentLoaded', () => {
    new UIManager();
});
```

### Preference Management
The system manages three types of preferences:
1. Dietary preferences
2. Sourcing preferences
3. Carbon rating preferences

### Recommendation Generation
Recommendations are generated through the following process:
1. Get current user preferences
2. Filter meals based on preferences
3. Return top 3 matches

```javascript
generateRecommendations(meals, preferences) {
    let filteredMeals = meals.filter(meal => {
        const dietaryMatch = preferences.dietaryPreferences.every(pref => {...});
        const sourcingMatch = preferences.sourcingPreferences.every(pref => {...});
        const carbonMatch = preferences.carbonRating === 'none' || 
                          meal.carbonRating === preferences.carbonRating.toUpperCase();
        return dietaryMatch && sourcingMatch && carbonMatch;
    });
    return filteredMeals.slice(0, 3);
}
```

## User Interface Elements

### Preference Card
- Dietary options toggles
- Sourcing preference toggles
- Carbon rating selection

### Meal Cards
Each meal card displays:
- Meal name and location
- Meal description
- Nutritional information
  - Calories
  - Protein
  - Carbohydrates
- Applicable badges
- Carbon rating

### Nutrition Summary
Displays:
- Daily calorie progress
- Protein intake
- Carbohydrate intake

## Styling

### Card Styles
```css
.meal-card {
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### Carbon Rating Colors
```css
.rating-a { background: #2ecc71; color: white; }
.rating-b { background: #27ae60; color: white; }
.rating-c { background: #f1c40f; color: black; }
.rating-d { background: #e67e22; color: white; }
.rating-e { background: #e74c3c; color: white; }
```

## Error Handling
The system includes error handling for:
- Failed recommendation updates
- Missing meal data
- Invalid preferences

Error messages are displayed to users with clear instructions for resolution.

```mermaid
sequenceDiagram
    actor User
    participant UI as User Interface
    participant UIManager as UI Manager
    participant MealSystem as Meal System
    
    Note over User,MealSystem: Initial Load
    User->>UI: Visits meal recommender page
    activate UI
    UI->>UIManager: Initialize UIManager
    activate UIManager
    UIManager->>UIManager: setupEventListeners()
    UIManager->>UIManager: loadInitialRecommendations()
    UIManager->>MealSystem: Get default recommendations
    activate MealSystem
    MealSystem-->>UIManager: Return initial meal list
    deactivate MealSystem
    UIManager->>UI: Display recommendations
    deactivate UIManager
    UI-->>User: Show initial recommendations
    deactivate UI

    Note over User,MealSystem: Preference Update Flow
    User->>UI: Updates preferences
    activate UI
    UI->>UIManager: Trigger change event
    activate UIManager
    UIManager->>UIManager: getPreferences()
    UIManager->>UIManager: updateRecommendations()
    UIManager->>MealSystem: generateRecommendations(meals, preferences)
    activate MealSystem
    MealSystem->>MealSystem: Filter meals based on:
    Note over MealSystem: - Dietary preferences
    Note over MealSystem: - Sourcing preferences
    Note over MealSystem: - Carbon rating
    MealSystem-->>UIManager: Return filtered recommendations
    deactivate MealSystem
    UIManager->>UI: displayRecommendations(recommendations)
    deactivate UIManager
    UI->>UI: Update meal cards
    UI-->>User: Show updated recommendations
    deactivate UI

    Note over User,MealSystem: Error Handling
    User->>UI: Updates preferences
    activate UI
    UI->>UIManager: Trigger change event
    activate UIManager
    UIManager->>UIManager: updateRecommendations()
    Note over UIManager: Error occurs
    UIManager->>UI: Display error message
    deactivate UIManager
    UI-->>User: Show error notification
    deactivate UI