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
    //   Get meals. This endpoint returns an object with a 'meals' property
    //   containing an array of meals.
    // REQUEST
    //   GET /mealStore
    // RESPONSE
    //   {
    //     "meals": [ ... ]
    //   }
    // STATUS CODES
    //   200 - OK: The request was successful
    //   400 - OK: Incomplete meal request
    //   500 - Internal Server Error: The server encountered an error
    this.router.get("/mealStore", async (req, res) => {
      await this.controller.getMeal(req, res)
    });

    // DESCRIPTION
    //   Add a new meal. This endpoint creates a new meal with the provided
    //   description and returns the created task.
    // REQUEST
    //   POST /mealStore
    //   {
    //     "name": "name of the meal"
    //     "nutritionInfo": Object containing fat, protein, calories, other nutrition facts
    //     "allergenInfo": Array of allergens such as wheat, corn, soy, etc
    //     "dietInfo": Array of dietary categories
    //     "healthfulness": How healthy the meal is out of 7
    //     "ingredients": Meal ingredients
    //     "dates": days meal is available
    //     "image": (optional) picture of food
    //      "mime": (optional) mime of image for base64 transfer
    //      "carbon": Meal carbon rating from A-E
    //      "halls": Dining hall availability of meal
    //       "mealTime": time of day meal is available
    //   } 

    // STATUS CODES
    //   200 - OK: The meal was created successfully
    //   400 - Bad Request: The request was invalid or missing required data
    //   500 - Internal Server Error: The server encountered an error
    this.router.post("/mealStore", async (req, res) => {
      await this.controller.addMeal(req, res);
    });

    // DESCRIPTION
    //   Clear all meals. This endpoint deletes all meals and returns an empty
    //   response.
    // REQUEST
    //   DELETE /mealStore
    // RESPONSE
    //   { }
    // STATUS CODES
    //   200 - OK: The meals were cleared successfully
    //   500 - Internal Server Error: The server encountered an error
    this.router.delete("/mealStore", async (req, res) => {
      await this.controller.clearMeals(req, res);
    });

    this.router.patch("/mealStore", async (req, res) => {
        await this.controller.updateMeal(req,res);
    })
  }

  getRouter() {
    return this.router;
  }
}

export default MealRoutes;
