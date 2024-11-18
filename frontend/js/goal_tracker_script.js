// Log to check if the script is loaded
console.log("Script loaded successfully");

// Dummy data for the bar chart (calorie intake over the week)
const calorieData = [1200, 1500, 1800, 1600, 1700, 2000, 1900];
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Function to draw the bar chart
function drawBarChart() {
    console.log("Drawing the bar chart...");

    const canvas = document.getElementById('calorieBarChart');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
        console.error("Failed to get canvas context for bar chart");
        return;
    }

    canvas.width = 500;
    canvas.height = 300;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const barWidth = 40;
    const barGap = 20;
    const chartHeight = 250;
    const maxCalorie = Math.max(...calorieData);

    // Draw bars
    calorieData.forEach((calories, index) => {
        const barHeight = (calories / maxCalorie) * chartHeight;
        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(index * (barWidth + barGap), chartHeight - barHeight, barWidth, barHeight);

        // Draw day labels
        ctx.fillStyle = '#333';
        ctx.textAlign = 'center';
        ctx.font = '14px Arial';
        ctx.fillText(daysOfWeek[index], index * (barWidth + barGap) + barWidth / 2, chartHeight + 20);
    });

    console.log("Bar chart drawn successfully");
}

// Data for the pie chart (nutrient breakdown)
const nutrientData = [40, 30, 20, 10]; // Percentages for Proteins, Carbs, Fats, Fiber
const nutrientLabels = ['Proteins', 'Carbs', 'Fats', 'Fiber'];
const nutrientColors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'];

// Function to draw the pie chart
function drawPieChart() {
    console.log("Drawing the pie chart...");

    const canvas = document.getElementById('nutrientPieChart');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
        console.error("Failed to get canvas context for pie chart");
        return;
    }

    // Set canvas dimensions
    canvas.width = 300;
    canvas.height = 300;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 100;
    let startAngle = 0;

    // Draw each slice of the pie chart
    nutrientData.forEach((percentage, index) => {
        const sliceAngle = (percentage / 100) * 2 * Math.PI;
        ctx.fillStyle = nutrientColors[index];
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
        ctx.closePath();
        ctx.fill();
        startAngle += sliceAngle;
    });

    console.log("Pie chart drawn successfully");

    // Generate the nutrient key
    const keyContainer = document.getElementById('nutrientKey');
    keyContainer.innerHTML = ''; // Clear previous content

    nutrientLabels.forEach((label, index) => {
        const keyItem = document.createElement('div');
        const colorBox = document.createElement('span');
        colorBox.style.backgroundColor = nutrientColors[index];
        keyItem.appendChild(colorBox);
        keyItem.appendChild(document.createTextNode(label));
        keyContainer.appendChild(keyItem);
    });

    console.log("Nutrient key created successfully");
}

// Call the functions to draw the charts
drawBarChart();
drawPieChart();
