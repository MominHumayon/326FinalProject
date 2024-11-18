# Meal Layout Feature Sequence Diagram

## Feature Description
This feature provides a display for each meal. It includes a picture, name, calorie count, nutrition table, allergens, diet Info and images, healthfulness bar, and ingredients.

## Sequence Diagram

```mermaid
sequenceDiagram
  participant User
  participant Din as Dining Hall
  participant Disp as Meal Display
  participant JS as JavaScript
  participant DB as IndexedDB


  User->>Din: Enter date, time, location into Dining Hall selector
  Din->>JS: Search Event Triggered
  JS->>DB: Request Meal Data
  DB ->> JS: Return Meals
  JS -->> Disp: Render meal picture & information