// Initialize Pie Chart
let pieCtx = document.getElementById('pieChart').getContext('2d');
let pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Proteins', 'Carbohydrates', 'Fats'],
        datasets: [{
            data: [0, 0, 0],
            backgroundColor: ['#4caf50', '#2196f3', '#ff9800'],
            borderColor: '#ffffff',
            borderWidth: 1,
        }],
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        size: 14,
                    },
                },
            },
        },
    },
});

// Initialize Bar Chart
let barCtx = document.getElementById('barChart').getContext('2d');
let barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Calories',
            data: [],
            backgroundColor: '#881c1c',
            borderColor: '#ffffff',
            borderWidth: 1,
        }],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 3000,
                ticks: {
                    stepSize: 500,
                },
            },
        },
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2,
        plugins: {
            legend: {
                display: false,
            },
        },
    },
});

// Hardcoded Data for Testing
const weeklyData = {
    week1: {
        pie: [105, 125, 58], // Protein: 105g, Carbs: 125g, Fats: 58g
        bar: {
            labels: ['2024-12-10', '2024-12-11'], // Dates
            data: [800, 900], // Calories per day
        },
    },
    week2: {
        pie: [90, 140, 70], // Protein: 90g, Carbs: 140g, Fats: 70g
        bar: {
            labels: ['2024-12-17', '2024-12-18'], // Dates
            data: [850, 950], // Calories per day
        },
    },
};

// Update Charts for Selected Week
function updateChartsForWeek(week) {
    console.log(`Updating charts for ${week}...`);
    const data = weeklyData[week];

    if (data) {
        // Update Pie Chart
        pieChart.data.datasets[0].data = data.pie;
        pieChart.update();

        // Update Bar Chart
        barChart.data.labels = data.bar.labels;
        barChart.data.datasets[0].data = data.bar.data;
        barChart.update();

        // Update Average Calories
        const totalCalories = data.bar.data.reduce((sum, value) => sum + value, 0);
        const averageCalories = Math.round(totalCalories / data.bar.data.length);
        document.getElementById('averageCalories').innerText = `Average Calories per Week: ${averageCalories} kcal`;

        console.log(`Charts updated for ${week}.`);
    } else {
        console.error(`No data found for ${week}`);
    }
}

// Initialize on Page Load
window.onload = function () {
    const weekSelect = document.getElementById('week-select');

    // Set up event listener for week selection
    weekSelect.addEventListener('change', () => {
        const selectedWeek = weekSelect.value;
        updateChartsForWeek(selectedWeek);
    });

    // Default to Week 1 on page load
    updateChartsForWeek('week1');
};
