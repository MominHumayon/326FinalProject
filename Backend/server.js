const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models'); // Sequelize instance
const mealRoutes = require('./routes/mealRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/meals', mealRoutes);

// Sync database and start server
sequelize.sync({ force: false }).then(() => {
  console.log('Database synced successfully!');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => console.error('Unable to connect to the database:', err));
