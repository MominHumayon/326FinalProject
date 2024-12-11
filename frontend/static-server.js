// Save this as /Users/ahmedabdulrahman/326FinalProject/frontend/server.js

const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5200;

// Enable CORS
app.use(cors());

// Serve static files from the frontend directory
app.use(express.static(__dirname));

// Serve js files from the js directory
app.use('/js', express.static(path.join(__dirname, 'js')));

// Handle all routes by serving the HTML file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'meal-recommender.html'));
});

app.listen(PORT, () => {
    console.log(`Frontend server running at http://localhost:${PORT}`);
    console.log(`Serving files from: ${__dirname}`);
});