// Dummy data for dining halls, meals, and time of day
const diningHalls = {
    "Worcester Dining Hall": {
        "2024-12-11": {
            Breakfast: [
                { name: "Pancakes", calories: 300, protein: "8g", fat: "10g", carbs: "45g", img: "https://www.allrecipes.com/thmb/hB7uGW06pqyk6hApOfGxk5kG4SI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_001-1-8fc3e06998fe4fe8b5f2ad6ba7e8ad46.jpg"},
                { name: "Omelet", calories: 250, protein: "12g", fat: "15g", carbs: "10g", img: "https://www.simplyrecipes.com/thmb/LLhiA8KZ7JZ5ZI0g-1bF1eg-gGM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__10__HT-Make-an-Omelet-LEAD-HORIZONTAL-17cd2e469c4a4ccbbd1273a7cae6425c.jpg" },
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
        "2024-12-12": {
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
        "2024-12-11": {
            Breakfast: [
                { name: "Pancakes", calories: 300, protein: "8g", fat: "10g", carbs: "45g", img: "https://www.allrecipes.com/thmb/hB7uGW06pqyk6hApOfGxk5kG4SI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_001-1-8fc3e06998fe4fe8b5f2ad6ba7e8ad46.jpg"},
                { name: "Omelet", calories: 250, protein: "12g", fat: "15g", carbs: "10g", img: "https://www.simplyrecipes.com/thmb/LLhiA8KZ7JZ5ZI0g-1bF1eg-gGM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__10__HT-Make-an-Omelet-LEAD-HORIZONTAL-17cd2e469c4a4ccbbd1273a7cae6425c.jpg" },
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
        "2024-12-12": {
            Breakfast: [
                { name: "Bagels", calories: 250, protein: "6g", fat: "3g", carbs: "45g", img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2020-08-how-to-make-bagels%2F2020_howto_bagels_shot14_197" },
                { name: "Fruit Salad", calories: 150, protein: "2g", fat: "0g", carbs: "35g", img: "https://www.hipmamasplace.com/wp-content/uploads/2021/06/199259152_166663622165057_6223652316946896551_n.jpg" },
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
        "2024-12-11": {
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
        "2024-12-12": {
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
        "2024-12-11": {
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
        "2024-12-12": {
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
            img.src = meal.img;
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