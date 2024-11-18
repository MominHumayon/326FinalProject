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