const express = require('express');
const router = express.Router();

// Hardcoded Dummy Data
const dummyMeals = [
    {
        name: "Chicken Salad",
        nutritionInfo: {
            servingSize: "300g",
            cals: 450,
            fat: 15,
            chol: 80,
            sodium: 400,
            carbs: 20,
            sugar: 5,
            prot: 35,
        },
        dates: "2024-12-10",
    },
    {
        name: "Grilled Salmon",
        nutritionInfo: {
            servingSize: "200g",
            cals: 350,
            fat: 10,
            chol: 60,
            sodium: 300,
            carbs: 5,
            sugar: 2,
            prot: 40,
        },
        dates: "2024-12-10",
    },
    {
        name: "Pasta Alfredo",
        nutritionInfo: {
            servingSize: "400g",
            cals: 600,
            fat: 25,
            chol: 100,
            sodium: 700,
            carbs: 60,
            sugar: 10,
            prot: 20,
        },
        dates: "2024-12-11",
    },
    {
        name: "Vegan Wrap",
        nutritionInfo: {
            servingSize: "250g",
            cals: 300,
            fat: 8,
            chol: 0,
            sodium: 200,
            carbs: 40,
            sugar: 5,
            prot: 10,
        },
        dates: "2024-12-11",
    },
];

// Endpoint to fetch data for pie and bar charts
router.get('/charts', async (req, res) => {
    try {
        const pieData = { proteins: 0, carbs: 0, fats: 0 };
        const barData = {};

        dummyMeals.forEach((meal) => {
            const { nutritionInfo, dates } = meal;
            if (nutritionInfo) {
                pieData.proteins += nutritionInfo.prot || 0;
                pieData.carbs += nutritionInfo.carbs || 0;
                pieData.fats += nutritionInfo.fat || 0;

                const date = new Date(dates).toISOString().split('T')[0];
                if (!barData[date]) {
                    barData[date] = 0;
                }
                barData[date] += nutritionInfo.cals || 0;
            }
        });

        res.status(200).json({ pieData, barData });
    } catch (error) {
        console.error('Error fetching chart data:', error);
        res.status(500).json({ error: 'Failed to fetch chart data' });
    }
});

module.exports = router;
