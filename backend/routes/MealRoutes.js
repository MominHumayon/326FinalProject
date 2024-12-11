// The routes or router pattern is a design pattern used to define and
// manage the different URL endpoints of an application. Each route
// corresponds to a specific URL path and HTTP method (like GET or POST),
// and is linked to a function that handles requests for that endpoint. By
// using this pattern, the application’s routing logic is clearly organized,
// making it easier to add, update, or remove routes as the application
// grows.

// The routes pattern is crucial in applications like web servers and APIs
// where each URL endpoint may require different processing. For example,
// a GET request to "/users" might retrieve a list of users, while a POST
// request to "/users" might add a new user. Each route handler specifies
// what action to take based on the URL and HTTP method, ensuring that the
// right code is executed for each request type and URL.

// Organizing code with a router or routes pattern improves readability,
// maintainability, and modularity. By keeping routes separate from other
// logic, such as data handling and business rules, changes can be made to
// the endpoints without altering the application’s core functionality.
// This structure also supports scalability, as it’s easy to add more routes
// without affecting existing ones, and facilitates testing by allowing each
// route to be tested independently for correct handling of inputs and
// outputs.
import express from "express";
import MealController from "../controller/MealController.js";

class MealRoutes {
  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
    this.controller = new MealController("placeholder");
  }

  initializeRoutes() {
    // Define the routes and connect them to controller methods

    // DESCRIPTION
    //   Get meals. This endpoint returns an object with a 'tasks' property
    //   containing an array of meals.
    // REQUEST
    //   GET /tasks
    // RESPONSE
    //   {
    //     "meals": [ ... ]
    //   }
    // STATUS CODES
    //   200 - OK: The request was successful
    //   500 - Internal Server Error: The server encountered an error
    this.router.get("/mealStore", async (req, res) => {
      await this.controller.getMeal(req, res)
    });

    // DESCRIPTION
    //   Add a new task. This endpoint creates a new task with the provided
    //   description and returns the created task.
    // REQUEST
    //   POST /task
    //   {
    //     "task": "Description of the task"
    //     "file": "Base64-encoded file data (optional)"
    //   }
    // RESPONSE
    //   {
    //     "id": generated id,
    //     "task": "Description of the task",
    //     "file": "Base64 data"
    //   }
    // STATUS CODES
    //   200 - OK: The task was created successfully
    //   400 - Bad Request: The request was invalid or missing required data
    //   500 - Internal Server Error: The server encountered an error
    this.router.post("/mealStore", async (req, res) => {
      await this.controller.addMeal(req, res);
    });

    // DESCRIPTION
    //   Clear all tasks. This endpoint deletes all tasks and returns an empty
    //   response. This operation cannot be undone.
    // REQUEST
    //   DELETE /tasks
    // RESPONSE
    //   { }
    // STATUS CODES
    //   200 - OK: The tasks were cleared successfully
    //   500 - Internal Server Error: The server encountered an error
    this.router.delete("/mealStore", async (req, res) => {
      await this.controller.clearMeals(req, res);
    });

    this.router.patch("/mealStore", async (req, res) => {
        await this.controller.updateMeals(req,res);
    })
  }

  getRouter() {
    return this.router;
  }
}

export default MealRoutes;
