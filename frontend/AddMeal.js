class Meal {

    constructor(name) {
        this.name = name;
        this.nutInfo = {
            "servingSize": "",
            "cals" :-1,
            "fat": -1,
            "chol":-1,
            "sodium":-1,
            "carbs":-1,
            "sugar":-1,
            "prot":-1
        };
        this.dietInfo = ["None"];
        this.allerInfo = ["None"];
        this.ingredients = ["None"];
        this.health = -1;
    }


    //Nutrition Info: Serving Size, Calories, Fat, Cholesterol, Sodium, Carbs, Sugar, Protein
    addNutInfo(obj) {
        for (let key of Object.keys(obj)) {
            if (this.nutInfo[key] === undefined) {
                throw new Error("Extra key in nutrition info");
            }
            if (obj[key] < 0.0) {
                throw new Error("Missing value for " + key);
            }
        }
        this.nutInfo = obj;
        return this;
    }

    addDietInfo(arr) {
        this.detInfo = arr;
        return this;
    }

    addAllergyInfo(arr) {
        this.allerInfo = arr;
        return this;
    }

    addIngredients(arr) {
        this.ingredients = arr;
        return this;
    }

    addHealth(num) {
        if (num < 0) {
            throw new Error("Health value must be non-negative");
        }
        this.health = num;
        return this;
    }

}

const mealArr = new Array(6);;
const mealNames = ["Cheese Pizza", "Turkey Breast", "Black Bean Burger", "Vegetable Sushi Roll"];
const allergies = [["Milk","Gluten","Soy","Corn","Wheat"],["Corn"],["Soy", "Corn"],["Sesame"]];
const nutrition = [
    {
    "servingSize": "1",
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
]
const healthful = [1,2,3,4];
const ingredients = [["John Cena, Mao Zedong, Yusuf Raza"], ["Sameen Shaik, Aareb Chowdhury, Harambe"], ["Peanut, Matthew Perry, Youre Mother"], ["Stallion", "Monke", "Controller"]];
const diet = [["Halal"],["Vegetarian"],["Whole Grain"],["Plant Based"]];
const properties = ["fat","carbs","prot"];
const font = new FontFace("Apple", "url(apple-chancery-webfont.woff)");
document.fonts.add(font);
const font2 = new FontFace("Schoolbook", "url(C059-Roman.otf)");
document.fonts.add(font2);
for (let i = 0; i < 4; i++) {
    mealArr[i] = new Meal(mealNames[i]);
    console.log(mealArr[i]);
    mealArr[i].addAllergyInfo(allergies[i])
        .addNutInfo(nutrition[i])
            .addHealth(healthful[i])
                .addIngredients(ingredients[i])
                    .addDietInfo(diet[i]);
}

for (let i = 0; i <4; i++) {
    const elem = document.getElementById("m" + (i+1));
    const foodImg = document.createElement("img");
    foodImg.setAttribute("src","./" + (i+1) + ".jpg");
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
    cals.innerText = "Calories: " + mealArr[i].nutInfo["cals"];
    cals.style.fontStyle = "italic";
    cals.style.color = "#306584";
    cals.style.fontFamily = "Georgia";
    firstLine.appendChild(name);
    firstLine.appendChild(cals);
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
            td.appendChild(document.createTextNode(k === 0? properties[j] : mealArr[i].nutInfo[properties[j]]));
            td.style.border = '1px solid black';
        }
    }

    const healthBar = document.createElement("div");
    healthBar.style.margin = "30px";
    healthBar.style.marginTop = "10px";
    const healthText = document.createElement("p");
    healthText.style.marginTop = "0px";
    healthText.textContent = "Healthfulness: ";
    healthText.style.justifySelf = "center";
    healthBar.classList.add("healthBar");
    for (let j = 0; j < 7; j++) {
        const cell = document.createElement("div");
        cell.style.backgroundColor = j < mealArr[i].health ? "green" : "silver";
        cell.style.border = "1px solid black";
        healthBar.appendChild(cell);
    }
    const thirdLine = document.createElement("p");
    thirdLine.textContent = "Ingredients: " + mealArr[i].ingredients.reduce((acc,str) => acc + ", " + str, "").substring(2);
    thirdLine.style.justifySelf = "center";
    mealInfo.appendChild(secondLine);
    mealInfo.appendChild(healthText);
    mealInfo.appendChild(healthBar);
    mealInfo.appendChild(thirdLine);
    elem.appendChild(foodImg);
    elem.appendChild(mealInfo);
}