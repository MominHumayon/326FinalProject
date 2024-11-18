document.addEventListener('DOMContentLoaded', () => {
    function navigate(viewId) {
        document.querySelectorAll(".view").forEach((view) => {
            view.style.display = "none";
        });
        document.getElementById(viewId).style.display = "block";
    }

    const buttonArr= ["profileButton", "graphButton","diningHallsButton","recommenderButton","mealInfoButton","goalButton","expenseButton"]
    for(let i = 0; i < 7; i++) {
        document.getElementById(buttonArr[i]).addEventListener('click',() => 
        navigate(buttonArr[i].substring(0,buttonArr[i].indexOf("Button"))));
    }

    const nav = document.getElementById("bar");
    const hideButton = document.getElementById("hide");
    let counter = 0;
    hideButton.addEventListener('click', () => {
        if (counter %2 === 0) {
            nav.style.display = "none"; 
            hideButton.style.position = "absolute";
            hideButton.style.left = "5px";
            hideButton.innerText = ">";
            document.getElementById("hideWrapper").style.height = "100vh";
            document.getElementById("hideWrapper").style.width = "0px";
            document.getElementById("hideWrapper").style.borderRight = "thick double #000000";
        }
        else {
            nav.style.display = "block"; 
            hideButton.style.left = "130px";
            hideButton.innerText = "<";
            document.getElementById("hideWrapper").style.borderRight = "none";
        }
        counter++;
    });
});