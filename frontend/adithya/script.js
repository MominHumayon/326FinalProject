const swipes = document.querySelector("#swipe_section .number");
const ucard = document.querySelector("#ucard_section .number");
const swipe_inc = document.querySelector("#swipe_section .inc");
const swipe_dec = document.querySelector("#swipe_section .dec");
const ucard_inc = document.querySelector("#ucard_section .inc");
const ucard_dec = document.querySelector("#ucard_section .dec");

const historyButton = document.getElementById("history");
const historyOverlay = document.getElementById("history_overlay")

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
