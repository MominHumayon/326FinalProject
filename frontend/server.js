const express = require('express');
const cors = require('cors');
const { sequelize } = require('./config/database');
const mealRoutes = require('./routes/calorieRoutes/');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/meals', mealRoutes);

sequelize.sync({ force: false })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error('Database sync failed:', err));
