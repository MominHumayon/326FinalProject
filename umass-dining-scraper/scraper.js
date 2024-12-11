const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

// Constants
const DINING_LOCATIONS = {
    worcester: {
        name: 'Worcester Dining Commons',
        url: 'https://umassdining.com/locations-menus/worcester/menu'
    },
    frank: {
        name: 'Franklin Dining Commons',
        url: 'https://umassdining.com/locations-menus/franklin/menu'
    },
    hamp: {
        name: 'Hampshire Dining Commons',
        url: 'https://umassdining.com/locations-menus/hampshire/menu'
    },
    berk: {
        name: 'Berkshire Dining Commons',
        url: 'https://umassdining.com/locations-menus/berkshire/menu'
    }
};

async function parseMealItems($) {
    const meals = [];
    $('li.lightbox-nutrition').each((_, element) => {
        const $element = $(element);
        const $link = $element.find('a');
        
        const meal = {
            name: $link.text().trim(),
            description: $link.attr('data-ingredient-list') || '',
            calories: parseInt($link.attr('data-calories')) || 0,
            protein: parseFloat($link.attr('data-protein')) || 0,
            carbs: parseFloat($link.attr('data-total-carb')) || 0,
            fat: parseFloat($link.attr('data-total-fat')) || 0,
            isVegetarian: $link.attr('data-clean-diet-str')?.includes('Vegetarian') || false,
            isPlantBased: $link.attr('data-clean-diet-str')?.includes('Plant Based') || false,
            isHalal: $link.attr('data-clean-diet-str')?.includes('Halal') || false,
            isLocal: $link.attr('data-clean-diet-str')?.includes('Local') || false,
            isSustainable: $link.attr('data-clean-diet-str')?.includes('Sustainable') || false,
            carbonRating: $link.attr('data-carbon-list') || 'N/A',
            category: $element.closest('div').prev('h2.menu_category_name').text().trim()
        };
        
        meals.push(meal);
    });
    
    return meals;
}

async function fetchLocationMenu(locationId) {
    console.log(`Fetching menu for ${locationId}...`);
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    try {
        const page = await browser.newPage();
        await page.goto(DINING_LOCATIONS[locationId].url, { waitUntil: 'networkidle0' });
        const content = await page.content();
        const $ = cheerio.load(content);
        
        const meals = {
            location: DINING_LOCATIONS[locationId].name,
            meals: {
                breakfast: [],
                lunch: [],
                dinner: [],
                latenight: []
            }
        };

        // Parse each meal period
        const periods = ['breakfast', 'lunch', 'dinner', 'latenight'];
        for (const period of periods) {
            const $periodMenu = $(`#${period}_menu`);
            if ($periodMenu.length) {
                const $ = cheerio.load($periodMenu.html());
                meals.meals[period] = await parseMealItems($);
            }
        }
        
        return meals;
    } finally {
        await browser.close();
    }
}

async function scrapeAllDiningLocations() {
    const menuData = {};
    
    for (const locationId of Object.keys(DINING_LOCATIONS)) {
        try {
            menuData[locationId] = await fetchLocationMenu(locationId);
            console.log(`Successfully scraped ${locationId}`);
        } catch (error) {
            console.error(`Error scraping ${locationId}:`, error);
            menuData[locationId] = {
                location: DINING_LOCATIONS[locationId].name,
                meals: { breakfast: [], lunch: [], dinner: [], latenight: [] },
                error: error.message
            };
        }
    }
    
    return menuData;
}

module.exports = {
    scrapeAllDiningLocations,
    fetchLocationMenu,
    DINING_LOCATIONS
};