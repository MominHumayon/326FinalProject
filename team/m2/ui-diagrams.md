UI Diagrams
## User Profile Screen

The **User Profile** screen enables users to input and manage their personal details such as name, height, weight, and dietary preferences. This information is crucial for creating personalized meal recommendations and tracking nutritional goals.

### Key Elements:
1. **Input Fields**:
   - **First Name**: A text field for the user to enter their first name.
   - **Last Name**: A text field for the user to enter their last name.
   - **Height**: Split input fields for feet and inches to record the user's height.
   - **Weight**: A field to input weight in pounds.
2. **Dietary Preferences**:
   - A dropdown menu that allows users to select dietary restrictions or preferences (e.g., Vegetarian, Halal, None).
3. **Save Profile Button**:
   - A prominent maroon button that saves the user's input data when clicked.
4. **Login Button**:
   - An additional maroon button for users to log in, positioned below the profile save functionality.

### Use Case:
A new user setting up their profile for the first time can fill in their personal information and dietary preferences. Once the data is saved, the system can generate tailored meal plans and recommendations based on their unique nutritional needs.

---
## UMass Dining Companion - Calorie Tracker

The **UMass Dining Companion - Calorie Tracker** interface is designed to provide users with an easy way to monitor their daily and weekly calorie intake. Users can input their macronutrient percentages and view detailed graphs that update based on their entries.

![Screenshot 2024-11-17 at 10 50 03 PM](https://github.com/user-attachments/assets/99cfcc44-1881-4a47-b06e-e66c9982a217)
![Screenshot 2024-11-17 at 10 50 21 PM](https://github.com/user-attachments/assets/cae1ac67-c62e-42f3-a4bd-6dd850502b0a)



### Key Elements of the Screen:

1. **Daily Calorie Breakdown**:
   - Users can enter their macronutrient percentages (Protein, Carbohydrates, Fats) to understand the proportion of each macronutrient in their daily diet.
   - A button labeled "Update Daily Chart" is provided to refresh the daily nutrient breakdown graph based on the input.

2. **Weekly Calorie Intake**:
   - Users can log their calorie intake for each day of the week (Monday to Sunday).
   - The interface calculates and displays the **Average Calories per Week** for easy tracking.
   - A button labeled "Update Weekly Chart" allows users to update the weekly calorie intake graph.

### Use Case:

This feature helps students track their nutrition by logging calorie and macronutrient intake, making it easy to adjust dietary habits and stay informed about their overall calorie consumption.

---
## Meal Information Cards

The **Meal Information Cards** are designed to present detailed information about meal options, including their nutritional content, dietary restrictions, and ingredients. These cards provide a visual and textual overview of each meal, making it easy for users to choose meals that align with their dietary needs and preferences.

![Screenshot 2024-11-17 at 10 51 58 PM](https://github.com/user-attachments/assets/093090fa-8c1e-4fc7-9b80-2c559869fa83)

### Key Elements of the Meal Cards:

1. **Meal Image**:
   - A large, high-quality image of the meal is displayed at the top of each card, giving users a visual representation of the dish.

2. **Meal Name and Details**:
   - The name of the meal is displayed in an italicized, colored font (e.g., *Cheese Pizza*, *Turkey Breast*).
   - Below the name, allergens are listed clearly (e.g., *Milk, Gluten, Soy, Corn, Wheat*).
   - The dietary restriction of the meal is specified (e.g., *Halal*, *Vegetarian*).

3. **Calorie Count**:
   - The total calorie count for the meal is shown on the top-right side of the card in a stylized font (e.g., *Calories: 150*).

4. **Macronutrient Breakdown**:
   - The breakdown of fat, carbohydrates, and protein is displayed in small, bordered boxes with the nutrient values (e.g., *fat: 10, carbs: 15, prot: 6*).

5. **Healthfulness Bar**:
   - A horizontal bar chart at the bottom indicates the healthfulness of the meal. The bar is divided into segments, with some segments colored green to indicate the meal's healthfulness level.

6. **Ingredients**:
   - The ingredients used in the meal are listed at the very bottom of the card, providing transparency about what is in the dish (e.g., *John Cena, Mao Zedong, Yusuf Raza*).

### Use Case:

These meal cards are useful for students who want to quickly assess whether a meal fits their dietary needs and preferences, with clear indicators for healthfulness, allergens, and macronutrient content.
---
## Dining Hall Meals Screen

The **Dining Hall Meals Screen** provides users with a simple and interactive interface to view meal options available at selected UMass dining halls based on the chosen date and time of day. The goal is to help students make informed decisions about their meals.

![Screenshot 2024-11-17 at 10 54 29 PM](https://github.com/user-attachments/assets/f7a4be3c-fc0d-48ea-9287-3ed88f7691eb)

### Key Elements of the Screen:

1. **Header Section**:
   - A bold maroon header at the top displays the title: *UMass Dieting Plan - Dining Hall Meals*.
   - A subtitle provides instructions for the user: *Select a dining hall, date, and time of day to view the meals offered*.

2. **Selection Options**:
   - **Dining Hall Dropdown**: Allows users to select their preferred dining hall (e.g., *Worcester Dining Hall*).
   - **Date Picker**: A date input field enables users to select the date for which they want to view meal options.
   - **Time of Day Dropdown**: A dropdown menu provides options such as *Breakfast*, *Lunch*, or *Dinner*.

3. **Meal Cards**:
   - Each meal is displayed in a card format, which includes:
     - **Image Placeholder**: A gray placeholder (200 x 150) for the meal image.
     - **Meal Name**: Displayed in bold maroon text (e.g., *Steak*, *Mashed Potatoes*).
     - **Calories**: The total calorie content is shown below the meal name (e.g., *600 cal*).
     - **Macronutrient Details**: Below the calorie count, the protein, fat, and carbohydrate content are listed (e.g., *Protein: 40g, Fat: 30g, Carbs: 10g*).

### Use Case:

This screen is useful for students who want to plan their meals in advance, ensuring they are aware of the nutritional content of the available options. By selecting their dining hall, date, and meal time, they can easily browse through and choose meals that fit their dietary needs.


---
## Swipe and UCard Balance Tracker

### UI Components:

1. **Swipe Balance Box**:
   - Displays the total number of meal swipes available.
   - Includes decrement ("-") and increment ("+") buttons to manually adjust the swipe balance.
   - Centered, clear typography with a maroon-themed background.

2. **UCard Balance Box**:
   - Shows the available UCard dollar balance.
   - Features "-" and "+" buttons to adjust the UCard balance.
   - Similar styling as the Swipe Balance Box for consistency.

3. **Check History Button**:
   - A button styled with a dark background and bold text, placed below the balance boxes.
   - Clicking this button allows the user to view the history of their swipes and UCard usage.

---
## Usage History Graph

### UI Components:

1. **Graph Box**:
   - Displays a line graph comparing the usage of meal swipes and UCard dollars over a 14-day period.
   - The graph includes labeled axes: "Usage" on the y-axis and "Days" on the x-axis.
   - Two legends, "Swipes" and "UCard Dollars," are color-coded and placed above the graph for easy reference.

2. **Check History Button**:
   - A bold, blue-outlined button located beneath the graph.
   - Clicking this button provides detailed insights into the user’s swipe and UCard dollar history.

![Screenshot 2024-11-17 at 10 56 49 PM](https://github.com/user-attachments/assets/c7a2ec11-0258-4f6d-b803-71f1b9eafd4a)

![Screenshot 2024-11-17 at 10 56 57 PM](https://github.com/user-attachments/assets/14cd22fb-3f90-47c0-a289-5670e5060f7e)




---
## UMass Dining - Meal Recommender Screen

The **UMass Dining - Meal Recommender** screen provides personalized meal suggestions for users based on their dietary preferences and nutritional needs. This UI is designed to enhance the dining experience by offering a variety of meal options available at different campus dining locations.

![Screenshot 2024-11-17 at 10 37 27 PM](https://github.com/user-attachments/assets/6e4a6a4c-6b1e-4879-8f80-5e3c004a6a05)

![Screenshot 2024-11-17 at 10 37 56 PM](https://github.com/user-attachments/assets/9f8e5b56-7b9e-42f0-b203-f633b131ccd6)



### Key Features:
1. **Your Preferences**: Users can select and save dietary options such as Vegetarian, Plant-Based, Halal, and more, which will filter meal recommendations to match their preferences.
2. **Today's Recommendations**: A list of recommended meals is displayed, each with:
   - The dining location where it is available.
   - A detailed description of the meal, including preparation style and primary ingredients.
   - A nutritional breakdown highlighting calories, protein, and carbohydrates.
   - Labels for dietary compatibility (e.g., Vegetarian, Local, Sustainable).
   - A carbon rating indicating the environmental impact of the meal.
3. **Nutrition Summary**: Users can view their daily intake and remaining nutritional goals, such as total calories, protein, and carbs.
4. **Sustainability and Sourcing Labels**: Meals feature additional information about sourcing practices, such as being locally sourced or antibiotic-free, to promote informed choices.

### Use Case:
A student who prioritizes sustainable dining and a high-protein diet can use this screen to select meals that align with their environmental values and dietary goals, ensuring a nutritious and eco-friendly dining experience.

---

## Goal Tracking Screen

The **Goal Tracking Screen** allows users to select a dietary goal (bulking, cutting, or maintenance) and provides a detailed overview of their current progress toward meeting their nutrition targets. Users can monitor their calorie, protein, carbohydrate, and fat intake in real time and compare their intake to their daily and weekly goals.

<img width="1226" alt="Screenshot 2024-11-17 at 8 11 42 PM" src="https://github.com/user-attachments/assets/f883da98-dbfe-44f6-b8e2-121d6c91be45">

<img width="1203" alt="Screenshot 2024-11-17 at 8 11 59 PM" src="https://github.com/user-attachments/assets/84940edb-214b-4adc-bd0b-7e3084aa61f4">


### Elements:
1. **Goal Selection Dropdown**: Users can select their dietary goal (e.g., Bulking, Cutting, Maintenance) from a dropdown menu. The app dynamically updates the nutrient targets based on the selected goal.
2. **Daily Nutrient Summary**: 
   - Displays current intake values for calories, proteins, carbohydrates, and fats.
   - Progress bars visually show how close the user is to meeting their daily goals.
   - Example: “Calories: 700 / 2500 kcal” with a progress bar showing 28% completion for a bulking goal.
3. **Weekly Calorie Intake Graph**: 
   - A bar chart illustrating the user's daily calorie intake over the week.
   - Each bar has a label displaying the calorie amount for that day.
   - A horizontal line indicates the weekly average calorie intake.
4. **Weekly Nutrient Breakdown**: 
   - Two side-by-side donut charts show the user's current nutrient distribution versus the recommended distribution based on their goal.
   - A legend explains the colors representing calories, proteins, carbs, and fats, making it easy to understand the comparison.

### Use Case:
A UMass student who is focused on cutting can select the "Cutting" goal from the dropdown menu to see updated nutrient targets. They can then use the daily and weekly visualizations to track their progress and adjust their diet accordingly to stay on track with their goal.




