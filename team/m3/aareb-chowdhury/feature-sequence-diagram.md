# Dining Location Meal Layout Feature Sequence Diagram

## Feature Description
This feature allows users to select a time of day, date, and university dining hall, and subsequently recieve the meals served at the selected date, time, and hall. If an invalid or unknown input is given, then the feature handles these without errors and prompts te user to enter valid inputs. The feature also shows some overview data of each meal dish provided such as calories, protein, carbs, etc. The feature is implemented using HTML for the structure, CSS for the styling, and JavaScript for the scripting. For now, the actual backend implementation connecting the meals to the actual meal data presented by the university is not done, but will be done in the future, God willing.
## Sequence Diagram

```mermaid
sequenceDiagram
    actor User
    participant UI as User Interface
    participant JS as JavaScript Logic
    participant Data as Dummy Data Storage

    User->>UI: Select dining hall, date, and time
    UI->>JS: Trigger change event for selections
    JS->>Data: Retrieve meals for selected hall, date, and time
    alt Valid selection
        Data-->>JS: Return meal data
        JS->>UI: Display meals as clickable cards
    else Invalid selection
        JS->>UI: Display error message<br>"Please select valid inputs"
    end
    User->>UI: Click on a meal card
    UI->>JS: Redirect to dummy meal page with details