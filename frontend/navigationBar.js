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
        navigate(buttonArr.substring(0,buttonArr[i].indexOf("Button"))));
    }
});