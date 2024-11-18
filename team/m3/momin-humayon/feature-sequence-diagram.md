# Meal Layout Feature Sequence Diagram

## Feature Description
This feature provides 
example when you reload a page. When the page loads the information is first collected from indexedDB if available, if not default values of 400 and 20 respectivley is 
used (this will eventually be fully replaced with actual values scraped from GET once the backend is fully functional). As an aditional feature we have implemented a 
history feature which shows the usage of swipes and UCard debit used over the past 14 (2 weeks) days; this to is implemented using dummy data but will eventually have 
real data once the backend is fully implemented. 

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


