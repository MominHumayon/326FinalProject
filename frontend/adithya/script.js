const swipes = document.querySelector("#swipe_section .number");
const ucard = document.querySelector("#ucard_section .number");
const swipe_inc = document.querySelector("#swipe_section .inc");
const swipe_dec = document.querySelector("#swipe_section .dec");
const ucard_inc = document.querySelector("#ucard_section .inc");
const ucard_dec = document.querySelector("#ucard_section .dec");

const historyButton = document.getElementById("history");
const historyOverlay = document.getElementById("history_overlay")


//history chart feature
const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/chart.js";
document.head.appendChild(script);

// Function to load values from localStorage or set defaults
function loadValues() {
    const storedSwipes = localStorage.getItem("swipes");
    const storedUcard = localStorage.getItem("ucard");

    swipes.textContent = storedSwipes !== null ? storedSwipes : "400";
    ucard.textContent = storedUcard !== null ? storedUcard : "20";
}


// Increment and decrement event listeners for Swipes
swipe_inc.addEventListener("click", () => {
    swipes.textContent = parseInt(swipes.textContent) + 1;
    localStorage.setItem("swipes", swipes.textContent);
});
swipe_dec.addEventListener("click", () => {
    swipes.textContent = parseInt(swipes.textContent) - 1;
    localStorage.setItem("swipes", swipes.textContent);
});

ucard_inc.addEventListener("click", () => {
    ucard.textContent = parseInt(ucard.textContent) + 1;
    localStorage.setItem("ucard", ucard.textContent);
});
ucard_dec.addEventListener("click", () => {
    ucard.textContent = parseInt(ucard.textContent) - 1;
    localStorage.setItem("ucard", ucard.textContent);
});


historyButton.addEventListener("click", () => {
    historyOverlay.classList.toggle("hidden");
})

// Load values from localStorage when the page loads
loadValues();


//Actual code to create the chart 
script.onload = () => {
    const ctx = document.getElementById('historyChart').getContext('2d');
  
    // Dummy data
    const labels = [
      "Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", 
      "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13", "Day 14"
    ];
    const swipesData = [2, 3, 4, 15, 2, 4, 3, 2, 3, 4, 15, 2, 4, 3];
    const ucardData = [5, 7, 6, 17, 5, 7, 6, 5, 7, 6, 17, 5, 7, 6];
  
    // Create the chart
    const historyChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Swipes',
            data: swipesData,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            tension: 0.4, // Curved lines
          },
          {
            label: 'UCard Dollars',
            data: ucardData,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2,
            tension: 0.4, // Curved lines
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Days',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Usage',
            },
            suggestedMin: 0,
            suggestedMax: 20,
          },
        },
      },
    });
  };