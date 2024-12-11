const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models'); // Automatically resolves ./models/index.js
const mealRoutes = require('./routes/mealRoutes');
const goalRoutes = require('./routes/goalRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/meals', mealRoutes);
app.use('/goals', goalRoutes);

// Sync database and start server
sequelize.sync({ force: false }).then(() => {
    console.log('Database synced successfully!');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => console.error('Unable to connect to the database:', err));
