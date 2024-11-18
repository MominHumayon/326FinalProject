# Calorie Tracking and Visualization Feature Sequence Diagram

## Feature Description

This feature enables students to input their daily macronutrient percentages (proteins, carbohydrates, fats) and their weekly calorie intake for each day. The application dynamically generates and updates two interactive graphs:

- **Pie Chart**: Displays the daily macronutrient breakdown based on the input percentages.
- **Bar Chart**: Shows the weekly calorie intake for each day and calculates the average weekly calories.

The feature involves user input, JavaScript event handling, data validation, chart updates using Chart.js, and UI updates to reflect the user's data.

## Sequence Diagram

```mermaid
sequenceDiagram
    participant User
    participant UI as Web Page
    participant JS as JavaScript
    participant ChartJS as Chart.js Library

    %% User Updates Daily Macronutrient Breakdown
    User->>UI: Inputs Protein, Carbs, and Fats percentages
    User->>UI: Clicks "Update Daily Chart" button
    UI->>JS: Triggers updatePieChart() function
    JS->>JS: Validates percentages sum to 100%
    alt Percentages sum to 100%
        JS->>ChartJS: Update pie chart data
        ChartJS->>UI: Render updated pie chart
    else Percentages do not sum to 100%
        JS->>User: Show alert "The total percentage must equal 100%."
    end

    %% User Updates Weekly Calorie Intake
    User->>UI: Inputs calories for each day of the week
    User->>UI: Clicks "Update Weekly Chart" button
    UI->>JS: Triggers updateBarChart() function
    JS->>JS: Collect calorie inputs
    JS->>ChartJS: Update bar chart data
    JS->>JS: Calculate average weekly calories
    ChartJS->>UI: Render updated bar chart
    JS->>UI: Display updated average calories

    %% Page Load Event
    User->>UI: Loads or Reloads the Page
    UI->>JS: Initialize charts with default data
    JS->>ChartJS: Render initial pie and bar charts
    ChartJS->>UI: Display charts on page
