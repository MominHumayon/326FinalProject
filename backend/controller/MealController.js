import _SQLiteMealModel from "../model/MealInfoModel.js";

class MealController {
    constructor(name) {
        this.model = new _SQLiteMealModel().init();
        name ? this.model.init(false) : this.model.init(true);
    }
  
    // Get all tasks
    async getMeal(req, res) {
      const meals = await this.model.read(req);
      // The response is an object with a 'tasks' property containing an array of
      // tasks. This could be anything, but we define it as an object with a
      // 'tasks' property to keep the response consistent across different
      // endpoints.
      res.json({ meals });
    }
  
    // Add a new task
    async addMeal(req, res) {
      try {
        if (!req.body || !req.body.dates) {
          return res.status(400).json({ error: "Meal is missing information" });
        }
  
        // Create the new task object with a unique ID
        const task = await this.model.create(req.body);
  
        // Log the full task for debugging
        const file = req.body.file
          ? `with file: ${req.body.filename}`
          : "without file";
        console.log(`New Task: ${task.id} - ${task.task} - ${file}`);
  
        // Send back the created task as the response
        return res.status(201).json(task);
      } catch (error) {
        // Log any unexpected errors and send a server error response
        console.error("Error adding task:", error);
        return res
          .status(500)
          .json({ error: "Failed to add task. Please try again." });
      }
    }
  
    // Clear all tasks
    async clearTasks(req, res) {
      await this.model.delete();
      res.json(await this.model.read());
    }
  }
  
  export default new TaskController();