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
console.log("hello");
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
    elem.appendChild(foodImg);
}