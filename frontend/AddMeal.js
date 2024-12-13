class Meal {

    constructor(name) {
        this.name = name;
        this.nutritionInfo = {
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
        this.allergenInfo = ["None"];
        this.ingredients = ["None"];
        this.healthfulness = -1;
        this.dates = ["None"];
        this.selected = [false];
        this.image = null;
        this.mime = null;
        this.halls = [];
        this.carbon = "";
        this.mealTime = ["None"];
    }
    
    

    //Nutrition Info: Serving Size, Calories, Fat, Cholesterol, Sodium, Carbs, Sugar, Protein
    addNutInfo(obj) {
        for (let key of Object.keys(obj)) {
            if (this.nutritionInfo[key] === undefined) {
                throw new Error("Extra key in nutrition info");
            }
            if (obj[key] < 0.0) {
                throw new Error("Missing value for " + key);
            }

            if (typeof(obj[key]) === "string" && key !== "servingSize" && key !== "cals") {
                const regex = "[mg]";
                obj[key] = obj[key].substring(0,obj[key].search(regex));
                obj[key] = parseFloat(obj[key]);
            }
        }
        this.nutritionInfo = obj;
        return this;
    }


    //dietary information: Vegetarian, Vegan, Halal, Whole Grain, etc
    addDietInfo(arr) {
        this.dietInfo = arr;
        return this;
    }

    //allergens: Soy, Wheat, Gluten, Corn, etc
    addAllergyInfo(arr) {
        this.allergenInfo = arr;
        return this;
    }

    addIngredients(arr) {
        this.ingredients = arr;
        return this;
    }

    //healthfulness out of 7
    addHealth(num) {
        if (num < 0) {
            throw new Error("Health value must be non-negative");
        }
        this.healthfulness = num;
        return this;
    }

    //dining halls availability
    addHalls(arr) {
        this.halls = arr;
        return this;
    }

    //meal times availability
    addMealTimes(arr) {
        this.mealTime = arr;
        return this;
    }

    addDates(arr) {
        this.dates = arr;
        return this;
    }

    //carbon rating: A, B, C, D, E
    addCarbon(str) {
        if (str.length > 1) {
            throw new Error("Carbon rating must be 1 character");
        }
        this.carbon = str;
        return this;
    }

}



export default Meal;