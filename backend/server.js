const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models'); // Sequelize instance for database connection
const mealRoutes = require('./routes/mealRoutes'); // Import meal-related routes

const app = express(); // Initialize the Express application
const PORT = 3000; // Define the port number where the server will run

// Middleware
// Use body-parser middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Routes
// Define the base route for meal-related endpoints
app.use('/meals', mealRoutes);

// Sync database and start server
sequelize.sync({ force: false }) // Synchronize models with the database
  .then(() => {
    console.log('Database synced successfully!'); // Log success message
    
    // Start the server and listen for incoming requests
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`); // Log the server's running port
    });
  })
  .catch((err) => console.error('Unable to connect to the database:', err)); // Log errors if database sync fails
