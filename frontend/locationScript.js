// Dummy data for dining halls, meals, and time of day

import { diningHalls } from "../backend/diningInfo";


// Populate the dropdown menu with dining halls
function populateDiningHallDropdown() {
    const select = document.getElementById("dining-hall-select");
    Object.keys(diningHalls).forEach((hall) => {
        const option = document.createElement("option");
        option.value = hall;
        option.textContent = hall;
        select.appendChild(option);
    });
}

// Display meals as cards based on selected dining hall, date, and time of day
function displayMeals() {
    const selectedHall = document.getElementById("dining-hall-select").value;
    const selectedDate = document.getElementById("date-picker").value;
    const selectedTime = document.getElementById("time-of-day-select").value;
    const mealDisplay = document.getElementById("meal-display");

    // Clear previous content
    mealDisplay.innerHTML = "";

    if (!selectedHall || !selectedDate || !selectedTime) {
        mealDisplay.innerHTML = "<p>Please select a dining hall, date, and time of day.</p>";
        return;
    }

    const meals = diningHalls[selectedHall]?.[selectedDate]?.[selectedTime];

    if (meals && meals.length > 0) {
        meals.forEach((meal) => {
            const card = document.createElement("a");
            card.className = "meal-card";
            card.href = `dummy URL`; // insert URL from Momin's meal information section

            // Placeholder image
            const img = document.createElement("img");
            img.src = "https://via.placeholder.com/200x150"; // Placeholder image URL
            img.alt = meal.name;

            // Meal details
            const title = document.createElement("h2");
            title.textContent = meal.name;

            const details = document.createElement("p");
            details.textContent = `Calories: ${meal.calories} cal`;

            const nutrients = document.createElement("n");
            nutrients.textContent = `Protein: ${meal.protein}, Fat: ${meal.fat}, Carbs: ${meal.carbs}`;
            

            // Append to card
            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(details);
            card.appendChild(nutrients);

            // Append card to meal display section
            mealDisplay.appendChild(card);
        });
    } else {
        mealDisplay.innerHTML = `<p>No meals available for the selected time at ${selectedHall} on ${selectedDate}.</p>`;
    }
}

// Event listeners for dropdowns and date picker
document.getElementById("dining-hall-select").addEventListener("change", displayMeals);
document.getElementById("date-picker").addEventListener("change", displayMeals);
document.getElementById("time-of-day-select").addEventListener("change", displayMeals);

// Initialize the application
populateDiningHallDropdown();
