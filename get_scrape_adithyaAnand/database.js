const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: './database.sqlite', // SQLite database file
});

const UCardTransaction = sequelize.define('UCardTransaction', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userEmail: {
        type: DataTypes.STRING,
        // allowNull: false,
        // unique: true, // Ensure uniqueness
    },
    swipes: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
    debitBalance: {
        type: DataTypes.STRING, // Store as string to preserve "$10.31" format
        // allowNull: false,
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});

// Synchronize the model with the database
(async () => {
    await sequelize.sync({ alter: true }); // Use { force: true } to reset tables if needed
})();

module.exports = {
    sequelize,
    UCardTransaction,
};
