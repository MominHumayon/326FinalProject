import Meal from "./AddMeal.js"
import {Events} from "../eventhub/Events.js";
import {EventHub} from "../eventhub/EventHub.js";


const mealArr = new Array(4);
const mealNames = ["Cheese Pizza", "Turkey Breast", "Black Bean Burger", "Vegetable Sushi Roll"];
const allergies = [["Milk","Gluten","Soy","Corn","Wheat"],["Corn"],["Soy", "Corn"],["Sesame"]];
const nutrition = [
    {
    "servingSize": "2",
    "cals" :150,
    "fat": 10,
    "chol": 20,
    "sodium": 5,
    "carbs":15,
    "sugar":4,
    "prot":6
    },
    {
    "servingSize": "1",
    "cals" :350,
    "fat": 20,
    "chol": 35,
    "sodium": 10,
    "carbs":24,
    "sugar":1,
    "prot":13
    },
    {
        "servingSize": "3",
        "cals" :250,
        "fat": 10,
        "chol": 9,
        "sodium": 11,
        "carbs":13,
        "sugar":0,
        "prot":5
    },
    {
        "servingSize": "2",
        "cals" :250,
        "fat": 10,
        "chol": 25,
        "sodium": 10,
        "carbs":16,
        "sugar":0,
        "prot":10
    }
];


const healthful = [1,2,3,4];
const ingredients = [["John Cena, Mao Zedong, Yusuf Raza"], ["Sameen Shaik, Aareb Chowdhury, Harambe"], ["Peanut, Matthew Perry, Youre Mother"], ["Stallion", "Monke", "Controller"]];
const diet = [["Halal"],["Vegetarian"],["Whole Grain"],["Plant Based"]];
const properties = ["fat","carbs","prot"];
const eventManager = EventHub.getInstance();

for (let i = 0; i < 4; i++) {
    mealArr[i] = new Meal(mealNames[i]);
    console.log(mealArr[i]);
    mealArr[i].addAllergyInfo(allergies[i])
        .addNutInfo(nutrition[i])
            .addHealth(healthful[i])
                .addIngredients(ingredients[i])
                    .addDietInfo(diet[i]);
    mealArr[i].image = "./" + (i+1) + ".jpg";
}

function renderMealInfo(mealArr) {
    document.getElementById("mealContainer").innerHTML = '';
    for (let i = 0; i < mealArr.length; i++) {
        const elem = document.createElement("div");
        elem.id = "m" + (i+1);
        elem.classList.add("mealDisplay");
        document.getElementById("mealContainer").appendChild(elem);
        const foodImg = document.createElement("img");
        foodImg.setAttribute("src",mealArr[i].image);
        foodImg.classList.add("foodPic");


        const mealInfo = document.createElement("div");
        mealInfo.classList.add("info");


        const firstLine = document.createElement("span");
        const name = document.createElement("span");
        name.innerText = mealArr[i].name;
        name.style.textDecoration = "underline";
        name.style.fontWeight = "bold";
        name.style.color = "#346e43";
        name.style.fontFamily = "Apple";


        const cals = document.createElement("span");
        cals.innerText = "Calories: " + mealArr[i].nutritionInfo["cals"];
        cals.style.fontStyle = "italic";
        cals.style.color = "#306584";
        cals.style.fontFamily = "Georgia";


        const icons = document.createElement("span");
        for (let j = 0; j < mealArr[i].dietInfo.length; j++) {
            const img = document.createElement("img");
            img.src = "./dietIcons/" + mealArr[i].dietInfo[j] + ".png";
            icons.appendChild(img);
            img.style.height = "95%";
        }

        firstLine.appendChild(name);
        firstLine.appendChild(icons);
        firstLine.appendChild(cals);
        firstLine.style.height = "10%";
        firstLine.classList.add("oppositeEnd");


        mealInfo.appendChild(firstLine);


        const secondLine = document.createElement("div");
        const allergyDisplay = document.createTextNode("Allergens: " + allergies[i].reduce((acc, str) => acc+ ", " + str,"").substring(2));
        secondLine.appendChild(allergyDisplay);
        secondLine.appendChild(document.createElement("br"));
        secondLine.appendChild(document.createElement("br"));
        const dietDisplay = document.createTextNode("Diet: " + diet[i].reduce((acc,str) => acc + ", " + str, "").substring(2));
        secondLine.appendChild(dietDisplay);
        secondLine.style.fontFamily = "Schoolbook";


        const nutTable = document.createElement("table");
        nutTable.style.border = "1px solid purple";
        nutTable.style.marginTop = "15px";
        nutTable.style.marginBottom = "0px";


        secondLine.appendChild(nutTable);
        secondLine.classList.add("oppositeEnd2");


        for(let j = 0; j < 3; j++) {
            let tr = nutTable.insertRow();
            for(let k = 0; k <2; k++) {
                const td = tr.insertCell();
                td.appendChild(document.createTextNode(k === 0? properties[j] : mealArr[i].nutritionInfo[properties[j]]));
                td.style.border = '1px solid black';
            }
        }

        const healthBar = document.createElement("div");
        healthBar.style.margin = "30px";
        healthBar.style.marginTop = "10px";
        healthBar.style.marginBottom = "10px";
        const healthText = document.createElement("p");
        healthText.style.marginTop = "0px";
        healthText.textContent = "Healthfulness: ";
        healthText.style.justifySelf = "center";
        healthBar.classList.add("healthBar");


        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("div");
            cell.style.backgroundColor = j < mealArr[i].healthfulness ? "green" : "silver";
            cell.style.border = "1px solid black";
            healthBar.appendChild(cell);
        }
        const thirdLine = document.createElement("p");
        thirdLine.textContent = "Ingredients: " + mealArr[i].ingredients.reduce((acc,str) => acc + ", " + str, "").substring(2);
        thirdLine.style.justifySelf = "center";


        const addButton = document.createElement("button");
        addButton.textContent = "Add";
        addButton.addEventListener("click", () => eventManager.publish(Events.MealSelect,mealArr[i]));

        mealInfo.appendChild(secondLine);
        mealInfo.appendChild(healthText);
        mealInfo.appendChild(healthBar);
        mealInfo.appendChild(thirdLine);
        mealInfo.appendChild(addButton);
        elem.appendChild(foodImg);
        elem.appendChild(mealInfo);
    }
}

renderMealInfo(mealArr);