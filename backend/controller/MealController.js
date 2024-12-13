const SQLiteMealModel = require("../model/MealInfoModel.js");
const scrapeMeals = require("../MealScraping.js");

class MealController {
    constructor() {
        this.model = SQLiteMealModel.init();
    }
  
    async getMeal(req, res) {
      let meals;
      if (!req.body.name && !req.body.carbon && !req.body.dietInfo && !req.body.allergenInfo && 
        (!req.body.halls || !req.body.dates || !req.body.mealTime)) {
        return res.status(400).json({error: "Need search criteria for meal: Either name, carbon, dietary info, allergens, or halls with dates and mealTime"});
      }
      meals = await this.model.read(req.body);
      // The response is an object with a 'meals' property containing an array of meals
      let updateResponse = {};
      if (meals.length === 0) {
        meals = scrapeMeals(req.body.halls[0],req.body.dates[0],req.body.mealTime[0]);
        meals.forEach(x => this.updateMeal({body:x},updateResponse));
      }
      res.json({ meals });
    }
  

    async addMeal(req, res) {
      try {
        if (!req.body || !req.body.dates || !req.body.halls || !req.body.dietInfo || !req.body.carbon || !req.body.allergenInfo) {
          return res.status(400).json({ error: "Meal is missing information" });
        }
  
        // Create the new object with a unique ID
        const thisMeal = await this.model.create(req.body);
        return res.status(200);
  
      } catch (error) {
        // Log any unexpected errors and send a server error response
        console.error("Error adding meal:", error);
        return res
          .status(500)
          .json({ error: "Failed to add meal. Please try again." });
      }
    }
  

    async updateMeal(req, res) {
      if (!req.body.name && (!req.body.halls || !req.body.dates || !req.body.mealTime) && !req.body.image) {
        return res.status(400).json({error:"No information to update"});
      }
        await this.model.update(req.body);
    }

    // Clear all meals
    async clearMeals(req, res) {
      await this.model.delete();
      res.json(await this.model.read());
    }
  }
  

  export default MealController;