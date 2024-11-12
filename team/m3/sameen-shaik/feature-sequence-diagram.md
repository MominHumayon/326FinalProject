# User Profile Feature Sequence Diagram

## Feature Description
This feature allows users to input and save their personal details, such as name, height, weight, and dietary preferences, into IndexedDB for persistence. On page load, saved data is retrieved and displayed in the form fields if available. This involves user input, JavaScript events, IndexedDB operations, and UI updates.

## Sequence Diagram

```mermaid
sequenceDiagram
  participant User
  participant Form as User Profile Form
  participant JS as JavaScript
  participant DB as IndexedDB

  User->>Form: Fills in Name, Height, Weight, and Dietary Preferences
  User->>Form: Clicks "Save Profile"
  Form->>JS: Submit Event Triggered
  JS->>DB: Save Profile Data in IndexedDB
  DB-->>JS: Data Saved Confirmation
  JS->>User: Show "Profile saved successfully" message

  User->>Form: Reloads the Page
  Form->>JS: Page Load Event
  JS->>DB: Retrieve Profile Data from IndexedDB
  DB-->>JS: Return Profile Data
  JS->>Form: Populate Form Fields with Retrieved Data

