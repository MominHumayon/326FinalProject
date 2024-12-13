// Server.js
import express from "express";
import MealRoutes from "./routes/MealRoutes.js";
import {scrapeMeals} from "../MealScraping.js";
import {Events} from "../eventhub/Events.js";
import {EventHub} from "../eventhub/EventHub.js";


class Server {
  constructor() {
    this.app = express();
    this.configureMiddleware();
    this.setupRoutes();
    this.eventsManager = EventHub.getInstance();
  }

  // Configure middleware for static files and JSON parsing
  configureMiddleware() {
    // Serve static files from the front-end
    this.app.use(express.static("../front-end"));

    // Parse JSON bodies, limited to 10mb
    this.app.use(express.json({ limit: "10mb" }));

    // NOTE:
    // These middleware functions are built-in Express middleware. They are
    // used to process incoming requests before they are sent to the routes.
    // There are many middleware functions available in Express, and you can
    // also create custom middleware functions.
  }

  // Setup routes by using imported MealRoutes
  setupRoutes() {
    this.app.use("/v1", MealRoutes);
  }

  // Start the server on a specified port
  start(port = 3000) {
    this.app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  }
}

// Initialize and start the server
console.log("Starting server...");
const server = new Server();
server.start();
