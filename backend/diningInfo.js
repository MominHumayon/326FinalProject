/*
meals.forEach(m => {
    diningHalls[m.hall][m.date][m.time].push(m);
});
*/
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

