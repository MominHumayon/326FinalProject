// Initialize Pie Chart
let pieCtx = document.getElementById('pieChart').getContext('2d');
let pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Proteins', 'Carbohydrates', 'Fats'],
        datasets: [{
            data: [50, 30, 20],
            backgroundColor: [
                '#881c1c',
                '#aaaaaa',
                '#cccccc'
            ],
            borderColor: '#ffffff',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// Initialize Bar Chart
let barCtx = document.getElementById('barChart').getContext('2d');
let barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Calories',
            data: [2000, 2200, 2100, 2300, 2200, 2500, 2000],
            backgroundColor: '#881c1c',
            borderColor: '#000000',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        maintainAspectRatio: false
    }
});

// Function to Update Pie Chart
function updatePieChart() {
    let protein = parseInt(document.getElementById('protein-input').value) || 0;
    let carbs = parseInt(document.getElementById('carbs-input').value) || 0;
    let fats = parseInt(document.getElementById('fats-input').value) || 0;
    let total = protein + carbs + fats;

    if (total !== 100) {
        alert('The total percentage must equal 100%.');
        return;
    }

    pieChart.data.datasets[0].data = [protein, carbs, fats];
    pieChart.update();
}

// Function to Update Bar Chart
function updateBarChart() {
    let monday = parseInt(document.getElementById('monday-input').value) || 0;
    let tuesday = parseInt(document.getElementById('tuesday-input').value) || 0;
    let wednesday = parseInt(document.getElementById('wednesday-input').value) || 0;
    let thursday = parseInt(document.getElementById('thursday-input').value) || 0;
    let friday = parseInt(document.getElementById('friday-input').value) || 0;
    let saturday = parseInt(document.getElementById('saturday-input').value) || 0;
    let sunday = parseInt(document.getElementById('sunday-input').value) || 0;

    let data = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];
    barChart.data.datasets[0].data = data;
    barChart.update();

    // Calculate Average Calories
    let totalCalories = data.reduce((a, b) => a + b, 0);
    let averageCalories = Math.round(totalCalories / 7);
    document.getElementById('averageCalories').innerText = `Average Calories per Week: ${averageCalories} kcal`;
}

// Initial Average Calculation
updateBarChart();
