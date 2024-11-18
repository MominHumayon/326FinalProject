```mermaid

sequenceDiagram
  participant User
  participant UI as Calorie and Nutrient Goal Intake Tracking UI
  participant JS as JavaScript Logic
  participant DB as IndexedDB

  User->>UI: Selects Goal (e.g., Bulking, Cutting)
  UI->>JS: Goal Change Event Triggered
  JS->>DB: Retrieve Goal Data
  DB-->>JS: Goal Data Returned
  JS->>UI: Update Progress Bars and Donut Charts

  User->>UI: Inputs Meal Data (e.g., Calories, Protein, Carbs, Fat)
  UI->>JS: Meal Input Event Triggered
  JS->>DB: Save Updated Meal Data
  DB-->>JS: Data Saved Confirmation
  JS->>UI: Update UI with New Progress

  User->>UI: Views Weekly Calorie Intake Graph
  UI->>JS: Page Load Event
  JS->>DB: Retrieve Calorie Intake Data
  DB-->>JS: Data Returned
  JS->>UI: Display Graph with Calorie Bars and Weekly Average

  User->>UI: Views Weekly Nutrient Breakdown
  UI->>JS: Request for Current and Recommended Breakdown
  JS->>DB: Retrieve Nutrient Data
  DB-->>JS: Nutrient Data Returned
  JS->>UI: Render Donut Charts for Current and Recommended Intake
