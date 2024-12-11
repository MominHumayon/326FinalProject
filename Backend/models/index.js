const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite', // Ensure this is relative to the Backend folder
});

module.exports = sequelize;
