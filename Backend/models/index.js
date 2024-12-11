const { Sequelize } = require('sequelize');

// Create a new Sequelize instance
// This instance is used to manage database connections and queries
const sequelize = new Sequelize({
    dialect: 'sqlite', // Specifies SQLite as the database engine
    storage: './database.sqlite', // Path to the SQLite database file
    // Ensure the path is relative to the Backend folder where this code resides
});

// Export the Sequelize instance for use in other parts of the application
module.exports = sequelize;
