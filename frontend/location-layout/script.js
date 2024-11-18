// Dummy data for dining halls, meals, and time of day
const diningHalls = {
    "Worcester Dining Hall": {
        "2024-11-16": {
            Breakfast: [
                { name: "Pancakes", calories: 300, protein: "8g", fat: "10g", carbs: "45g" },
                { name: "Omelet", calories: 250, protein: "12g", fat: "15g", carbs: "10g" },
            ],
            Lunch: [
                { name: "Grilled Cheese Sandwich", calories: 400, protein: "15g", fat: "20g", carbs: "40g" },
                { name: "Caesar Salad", calories: 200, protein: "5g", fat: "8g", carbs: "10g" },
            ],
            Dinner: [
                { name: "Spaghetti Bolognese", calories: 500, protein: "25g", fat: "15g", carbs: "60g" },
                { name: "Roasted Vegetables", calories: 300, protein: "5g", fat: "10g", carbs: "35g" },
            ],
        },
        "2024-11-17": {
            Breakfast: [
                { name: "Bagels", calories: 250, protein: "6g", fat: "3g", carbs: "45g" },
                { name: "Fruit Salad", calories: 150, protein: "2g", fat: "0g", carbs: "35g" },
            ],
            Lunch: [
                { name: "Chicken Wrap", calories: 350, protein: "20g", fat: "10g", carbs: "35g" },
                { name: "Mac and Cheese", calories: 450, protein: "12g", fat: "20g", carbs: "50g" },
            ],
            Dinner: [
                { name: "Steak", calories: 600, protein: "40g", fat: "30g", carbs: "10g" },
                { name: "Mashed Potatoes", calories: 300, protein: "5g", fat: "8g", carbs: "45g" },
            ],
        },
    },
    "Berkshire Dining Hall": {
        "2024-11-16": {
            Breakfast: [
                { name: "Pancakes", calories: 300, protein: "8g", fat: "10g", carbs: "45g" },
                { name: "Omelet", calories: 250, protein: "12g", fat: "15g", carbs: "10g" },
            ],
            Lunch: [
                { name: "Grilled Cheese Sandwich", calories: 400, protein: "15g", fat: "20g", carbs: "40g" },
                { name: "Caesar Salad", calories: 200, protein: "5g", fat: "8g", carbs: "10g" },
            ],
            Dinner: [
                { name: "Spaghetti Bolognese", calories: 500, protein: "25g", fat: "15g", carbs: "60g" },
                { name: "Roasted Vegetables", calories: 300, protein: "5g", fat: "10g", carbs: "35g" },
            ],
        },
        "2024-11-17": {
            Breakfast: [
                { name: "Bagels", calories: 250, protein: "6g", fat: "3g", carbs: "45g" },
                { name: "Fruit Salad", calories: 150, protein: "2g", fat: "0g", carbs: "35g" },
            ],
            Lunch: [
                { name: "Chicken Wrap", calories: 350, protein: "20g", fat: "10g", carbs: "35g" },
                { name: "Mac and Cheese", calories: 450, protein: "12g", fat: "20g", carbs: "50g" },
            ],
            Dinner: [
                { name: "Steak", calories: 600, protein: "40g", fat: "30g", carbs: "10g" },
                { name: "Mashed Potatoes", calories: 300, protein: "5g", fat: "8g", carbs: "45g" },
            ],
        },
    },
    "Hampshire Dining Hall": {
        "2024-11-16": {
            Breakfast: [
                { name: "Pancakes", calories: 300, protein: "8g", fat: "10g", carbs: "45g" },
                { name: "Omelet", calories: 250, protein: "12g", fat: "15g", carbs: "10g" },
            ],
            Lunch: [
                { name: "Grilled Cheese Sandwich", calories: 400, protein: "15g", fat: "20g", carbs: "40g" },
                { name: "Caesar Salad", calories: 200, protein: "5g", fat: "8g", carbs: "10g" },
            ],
            Dinner: [
                { name: "Spaghetti Bolognese", calories: 500, protein: "25g", fat: "15g", carbs: "60g" },
                { name: "Roasted Vegetables", calories: 300, protein: "5g", fat: "10g", carbs: "35g" },
            ],
        },
        "2024-11-17": {
            Breakfast: [
                { name: "Bagels", calories: 250, protein: "6g", fat: "3g", carbs: "45g" },
                { name: "Fruit Salad", calories: 150, protein: "2g", fat: "0g", carbs: "35g" },
            ],
            Lunch: [
                { name: "Chicken Wrap", calories: 350, protein: "20g", fat: "10g", carbs: "35g" },
                { name: "Mac and Cheese", calories: 450, protein: "12g", fat: "20g", carbs: "50g" },
            ],
            Dinner: [
                { name: "Steak", calories: 600, protein: "40g", fat: "30g", carbs: "10g" },
                { name: "Mashed Potatoes", calories: 300, protein: "5g", fat: "8g", carbs: "45g" },
            ],
        },
    },
    "Franklin Dining Hall": {
        "2024-11-16": {
            Breakfast: [
                { name: "Pancakes", calories: 300, protein: "8g", fat: "10g", carbs: "45g" },
                { name: "Omelet", calories: 250, protein: "12g", fat: "15g", carbs: "10g" },
            ],
            Lunch: [
                { name: "Grilled Cheese Sandwich", calories: 400, protein: "15g", fat: "20g", carbs: "40g" },
                { name: "Caesar Salad", calories: 200, protein: "5g", fat: "8g", carbs: "10g" },
            ],
            Dinner: [
                { name: "Spaghetti Bolognese", calories: 500, protein: "25g", fat: "15g", carbs: "60g" },
                { name: "Roasted Vegetables", calories: 300, protein: "5g", fat: "10g", carbs: "35g" },
            ],
        },
        "2024-11-17": {
            Breakfast: [
                { name: "Bagels", calories: 250, protein: "6g", fat: "3g", carbs: "45g" },
                { name: "Fruit Salad", calories: 150, protein: "2g", fat: "0g", carbs: "35g" },
            ],
            Lunch: [
                { name: "Chicken Wrap", calories: 350, protein: "20g", fat: "10g", carbs: "35g" },
                { name: "Mac and Cheese", calories: 450, protein: "12g", fat: "20g", carbs: "50g" },
            ],
            Dinner: [
                { name: "Steak", calories: 600, protein: "40g", fat: "30g", carbs: "10g" },
                { name: "Mashed Potatoes", calories: 300, protein: "5g", fat: "8g", carbs: "45g" },
            ],
        },
    },
};

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
