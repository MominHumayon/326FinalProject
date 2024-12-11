class UIManager {
    constructor() {
        console.log('Initializing UIManager...');
        // Initialize state
        this.currentLocation = 'worcester';
        this.currentPeriod = this.getCurrentMealPeriod();
        this.baseUrl = 'http://localhost:4000'; // Add base URL
        
        // Setup UI
        this.setupEventListeners();
        this.setupLocationSelector();
        this.loadInitialRecommendations();
    }

    getCurrentMealPeriod() {
        const hour = new Date().getHours();
        if (hour < 11) return 'breakfast';
        if (hour < 15) return 'lunch';
        if (hour < 21) return 'dinner';
        return 'latenight';
    }

    setupLocationSelector() {
        console.log('Setting up location selector...');
        const locationSelector = document.getElementById('location-selector');
        if (locationSelector) {
            // Clear existing options
            locationSelector.innerHTML = '';
            
            // Add options for each dining location
            const locations = {
                worcester: "Worcester Dining Commons",
                frank: "Franklin Dining Commons",
                hamp: "Hampshire Dining Commons",
                berk: "Berkshire Dining Commons"
            };

            Object.entries(locations).forEach(([id, name]) => {
                const option = document.createElement('option');
                option.value = id;
                option.textContent = name;
                locationSelector.appendChild(option);
            });

            locationSelector.value = this.currentLocation;
            locationSelector.addEventListener('change', (e) => {
                console.log('Location changed to:', e.target.value);
                this.currentLocation = e.target.value;
                this.updateRecommendations();
            });
        } else {
            console.error('Location selector not found in DOM');
        }
    }

    setupEventListeners() {
        console.log('Setting up event listeners...');
        
        // Period selector
        const periodSelector = document.getElementById('period-selector');
        if (periodSelector) {
            periodSelector.value = this.currentPeriod;
            periodSelector.addEventListener('change', (e) => {
                console.log('Period changed to:', e.target.value);
                this.currentPeriod = e.target.value;
                this.updateRecommendations();
            });
        }

        // Dietary preferences
        document.querySelectorAll('input[name="dietary"]').forEach(input => {
            input.addEventListener('change', () => this.updateRecommendations());
        });

        // Sourcing preferences
        document.querySelectorAll('input[name="sourcing"]').forEach(input => {
            input.addEventListener('change', () => this.updateRecommendations());
        });

        // Carbon rating
        document.querySelectorAll('input[name="carbon"]').forEach(input => {
            input.addEventListener('change', () => this.updateRecommendations());
        });
    }

    async fetchMenuData() {
        try {
            const url = `${this.baseUrl}/api/menus/${this.currentLocation}/${this.currentPeriod}`;
            console.log('Fetching from URL:', url);

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
                mode: 'cors'
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('Received data:', data);
            return data;
        } catch (error) {
            console.error('Fetch error details:', {
                message: error.message,
                stack: error.stack
            });
            throw error;
        }
    }

    async getPreferences() {
        return {
            dietaryPreferences: Array.from(document.querySelectorAll('input[name="dietary"]:checked'))
                .map(input => input.value),
            sourcingPreferences: Array.from(document.querySelectorAll('input[name="sourcing"]:checked'))
                .map(input => input.value),
            carbonRating: document.querySelector('input[name="carbon"]:checked')?.value || 'none'
        };
    }

    generateRecommendations(meals, preferences) {
        let filteredMeals = meals.filter(meal => {
            // Check dietary preferences
            const dietaryMatch = preferences.dietaryPreferences.every(pref => {
                switch(pref) {
                    case 'vegetarian': return meal.isVegetarian;
                    case 'plant-based': return meal.isPlantBased;
                    case 'halal': return meal.isHalal;
                    case 'whole-grain': return meal.isWholeGrain;
                    default: return true;
                }
            });

            // Check sourcing preferences
            const sourcingMatch = preferences.sourcingPreferences.every(pref => {
                switch(pref) {
                    case 'local': return meal.isLocal;
                    case 'sustainable': return meal.isSustainable;
                    case 'antibiotic-free': return meal.isAntibioticFree;
                    default: return true;
                }
            });

            // Check carbon rating
            const carbonMatch = preferences.carbonRating === 'none' || 
                              meal.carbonRating === preferences.carbonRating.toUpperCase();

            return dietaryMatch && sourcingMatch && carbonMatch;
        });

        return filteredMeals.slice(0, 3); // Return top 3 recommendations
    }

    async loadInitialRecommendations() {
        console.log('Loading initial recommendations...');
        await this.updateRecommendations();
    }

    async updateRecommendations() {
        console.log('Starting updateRecommendations...');
        const container = document.getElementById('meal-recommendations');
        if (!container) {
            console.error('Container not found');
            return;
        }

        try {
            container.innerHTML = '<div class="loading">Loading recommendations...</div>';
            
            console.log('Fetching menu data...');
            const menuItems = await this.fetchMenuData();
            console.log('Got menu items:', menuItems);
            
            console.log('Getting preferences...');
            const preferences = await this.getPreferences();
            console.log('Got preferences:', preferences);
            
            console.log('Generating recommendations...');
            const recommendations = this.generateRecommendations(menuItems, preferences);
            console.log('Generated recommendations:', recommendations);
            
            this.displayRecommendations(recommendations);
        } catch (error) {
            console.error('Error in updateRecommendations:', error);
            container.innerHTML = `
                <div class="error">
                    <p>Error loading recommendations: ${error.message}</p>
                    <p>Please check the console for more details.</p>
                </div>`;
        }
    }

    displayRecommendations(recommendations) {
        const container = document.getElementById('meal-recommendations');
        if (!container) return;

        if (!recommendations || recommendations.length === 0) {
            container.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <p>No meals match your current preferences.</p>
                    <p>Try adjusting your filters to see more options.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = recommendations.map(meal => `
            <div class="meal-card">
                <div class="meal-card-header">
                    <img src="/api/placeholder/60/60" alt="${meal.name}" class="meal-image">
                    <div class="meal-info">
                        <div class="meal-name">${meal.name}</div>
                        <div class="meal-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${meal.category || 'Main Menu'}
                        </div>
                    </div>
                </div>
                <p class="meal-description">${meal.description}</p>
                <div class="meal-stats">
                    <div class="stat">
                        <div class="stat-value">${meal.calories}</div>
                        <div class="stat-label">Calories</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">${meal.protein}g</div>
                        <div class="stat-label">Protein</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">${meal.carbs}g</div>
                        <div class="stat-label">Carbs</div>
                    </div>
                </div>
                <div class="meal-badges">
                    ${this.generateBadges(meal)}
                </div>
                <div class="carbon-indicator">
                    <span class="carbon-label">Carbon Rating:</span>
                    <span class="carbon-badge rating-${meal.carbonRating.toLowerCase()}">${meal.carbonRating}</span>
                </div>
            </div>
        `).join('');
    }

    generateBadges(meal) {
        const badges = [];
        if (meal.isVegetarian) badges.push('<span class="badge vegetarian"><i class="fas fa-leaf"></i> Vegetarian</span>');
        if (meal.isPlantBased) badges.push('<span class="badge plant-based"><i class="fas fa-seedling"></i> Plant Based</span>');
        if (meal.isLocal) badges.push('<span class="badge local"><i class="fas fa-map-marker-alt"></i> Local</span>');
        if (meal.isSustainable) badges.push('<span class="badge sustainable"><i class="fas fa-recycle"></i> Sustainable</span>');
        if (meal.isHalal) badges.push('<span class="badge halal"><i class="fas fa-check-circle"></i> Halal</span>');
        if (meal.isWholeGrain) badges.push('<span class="badge whole-grain"><i class="fas fa-bread-slice"></i> Whole Grain</span>');
        if (meal.isAntibioticFree) badges.push('<span class="badge antibiotic-free"><i class="fas fa-shield-alt"></i> Antibiotic Free</span>');
        return badges.join('');
    }
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing application...');
    new UIManager();
});