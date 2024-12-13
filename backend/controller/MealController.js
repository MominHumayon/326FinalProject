import _SQLiteMealModel from "../model/MealInfoModel.js";
import {scrapeMeals} from "../MealScraping.js";

class MealController {
    constructor(name) {
        this.model = new _SQLiteMealModel();
        name ? this.model.init(false) : this.model.init(true);
    }
  
    // Get all tasks
    async getMeal(req, res) {
      let meals;
      meals = await this.model.read(req.body);
      // The response is an object with a 'meals' property containing an array of meals
      let response = {};
      if (meals.length === 0) {
        meals = scrapeMeals(req.body.halls[0],req.body.dates[0],req.body.mealTime[0]);
        meals.forEach(x => this.updateMeal({body:x},response));
      }
      res.json({ meals });
    }
  

    async addMeal(req, res) {
      try {
        if (!req.body || !req.body.dates) {
          return res.status(400).json({ error: "Meal is missing information" });
        }
  
        // Create the new object with a unique ID
        const task = await this.model.create(req.body);
        return res.status(200);
  
      } catch (error) {
        // Log any unexpected errors and send a server error response
        console.error("Error adding meal:", error);
        return res
          .status(500)
          .json({ error: "Failed to add task. Please try again." });
      }
    }
  

    async updateMeal(req, res) {
        await this.model.update(req.body);
    }

    // Clear all tasks
    async clearMeals(req, res) {
      await this.model.delete();
      res.json(await this.model.read());
    }
  }
  

  export default MealController;