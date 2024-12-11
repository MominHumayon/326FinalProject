const express = require('express');
const cors = require('cors');
const { scrapeAllDiningLocations, fetchLocationMenu, DINING_LOCATIONS } = require('./scraper');

const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS
app.use(cors());

// Add logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// View all raw scraped data
app.get('/api/debug/all', async (req, res) => {
    try {
        console.log('Scraping all locations...');
        const data = await scrapeAllDiningLocations();
        console.log('Scraped data:', JSON.stringify(data, null, 2));
        res.json(data);
    } catch (error) {
        console.error('Scraping error:', error);
        res.status(500).json({ error: error.message });
    }
});

// View data for a specific location
app.get('/api/debug/location/:location', async (req, res) => {
    try {
        const locationData = await fetchLocationMenu(req.params.location);
        console.log(`Data for ${req.params.location}:`, JSON.stringify(locationData, null, 2));
        res.json(locationData);
    } catch (error) {
        console.error('Scraping error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Regular endpoints
app.get('/api/menus/:location/:period', async (req, res) => {
    try {
        const { location, period } = req.params;
        console.log(`Fetching menu for ${location} - ${period}`);
        
        const locationData = await fetchLocationMenu(location);
        
        if (!locationData) {
            console.log(`No data found for location: ${location}`);
            return res.status(404).json({ error: 'Location not found' });
        }

        const periodMenu = locationData.meals[period];
        if (!periodMenu) {
            console.log(`No menu found for period: ${period}`);
            return res.status(404).json({ error: 'Menu period not found' });
        }

        console.log(`Found ${periodMenu.length} items for ${location} ${period}`);
        res.json(periodMenu);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Available debug endpoints:');
    console.log('- http://localhost:4000/api/debug/all');
    console.log('- http://localhost:4000/api/debug/location/worcester');
    console.log('- http://localhost:4000/api/menus/worcester/lunch');
});