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