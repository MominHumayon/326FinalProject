sequenceDiagram
  participant User
  participant UI as User Interface
  participant JS as JavaScript
  participant DB as IndexedDB

  User->>UI: Selects Goal (e.g., Bulking, Cutting, Maintenance)
  UI->>JS: Change Event Triggered
  JS->>DB: Save Selected Goal in IndexedDB
  DB-->>JS: Data Saved Confirmation
  JS->>UI: Update Nutrient Goals and Progress Bars

  User->>UI: Reloads the Page
  UI->>JS: Page Load Event
  JS->>DB: Retrieve Selected Goal from IndexedDB
  DB-->>JS: Return Selected Goal
  JS->>UI: Update Nutrient Goals and Progress Bars with Retrieved Goal

