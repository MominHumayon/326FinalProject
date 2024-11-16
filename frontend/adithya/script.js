const swipes = document.querySelector("#swipe_section .number");
const ucard = document.querySelector("#ucard_section .number");
const swipe_inc = document.querySelector("#swipe_section .inc");
const swipe_dec = document.querySelector("#swipe_section .dec");
const ucard_inc = document.querySelector("#ucard_section .inc");
const ucard_dec = document.querySelector("#ucard_section .dec");

swipe_inc.addEventListener('click', () => 
    swipes.textContent = parseInt(swipes.textContent) + 1);
swipe_dec.addEventListener('click', () => 
    swipes.textContent = parseInt(swipes.textContent) - 1);
ucard_inc.addEventListener('click', () => 
    ucard.textContent = parseInt(ucard.textContent) + 1);
ucard_dec.addEventListener('click', () => 
    ucard.textContent = parseInt(ucard.textContent) - 1);


