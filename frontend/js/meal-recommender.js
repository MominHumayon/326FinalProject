// Constants
const DINING_LOCATIONS = {
    worcester: "Worcester Dining Commons",
    frank: "Franklin Dining Commons",
    hamp: "Hampshire Dining Commons",
    berk: "Berkshire Dining Commons"
};

// Sample meal data with diverse options
const SAMPLE_MEALS = [
    {
        name: "Worcester Stir Fry Bowl",
        location: DINING_LOCATIONS.worcester,
        calories: 550,
        protein: 35,
        carbs: 45,
        fat: 20,
        isVegetarian: true,
        isPlantBased: false,
        isLocal: true,
        isSustainable: true,
        isHalal: true,
        isWholeGrain: false,
        isAntibioticFree: true,
        carbonRating: 'A',
        image: "/api/placeholder/60/60",
        description: "Fresh vegetables and your choice of protein stir-fried to perfection"
    },
    {
        name: "Franklin Local Harvest Bowl",
        location: DINING_LOCATIONS.frank,
        calories: 480,
        protein: 22,
        carbs: 65,
        fat: 18,
        isVegetarian: true,
        isPlantBased: true,
        isLocal: true,
        isSustainable: true,
        isHalal: true,
        isWholeGrain: true,
        isAntibioticFree: true,
        carbonRating: 'A',
        image: "/api/placeholder/60/60",
        description: "Locally sourced quinoa bowl with roasted seasonal vegetables and tahini dressing"
    },
    {
        name: "Hampshire Grilled Chicken",
        location: DINING_LOCATIONS.hamp,
        calories: 420,
        protein: 38,
        carbs: 12,
        fat: 25,
        isVegetarian: false,
        isPlantBased: false,
        isLocal: true,
        isSustainable: true,
        isHalal: true,
        isWholeGrain: false,
        isAntibioticFree: true,
        carbonRating: 'B',
        image: "/api/placeholder/60/60",
        description: "Antibiotic-free chicken breast with herbs from our campus garden"
    },
    {
        name: "Berkshire Beef Burger",
        location: DINING_LOCATIONS.berk,
        calories: 650,
        protein: 45,
        carbs: 35,
        fat: 38,
        isVegetarian: false,
        isPlantBased: false,
        isLocal: true,
        isSustainable: false,
        isHalal: true,
        isWholeGrain: false,
        isAntibioticFree: true,
        carbonRating: 'D',
        image: "/api/placeholder/60/60",
        description: "Local grass-fed beef burger with artisanal toppings"
    },
    {
        name: "Plant-Based Power Bowl",
        location: DINING_LOCATIONS.worcester,
        calories: 520,
        protein: 24,
        carbs: 72,
        fat: 22,
        isVegetarian: true,
        isPlantBased: true,
        isLocal: true,
        isSustainable: true,
        isHalal: true,
        isWholeGrain: true,
        isAntibioticFree: true,
        carbonRating: 'A',
        image: "/api/placeholder/60/60",
        description: "Protein-rich chickpeas, quinoa, and local vegetables with tahini dressing"
    },
    {
        name: "Sustainable Seafood Plate",
        location: DINING_LOCATIONS.frank,
        calories: 450,
        protein: 32,
        carbs: 35,
        fat: 20,
        isVegetarian: false,
        isPlantBased: false,
        isLocal: false,
        isSustainable: true,
        isHalal: true,
        isWholeGrain: false,
        isAntibioticFree: true,
        carbonRating: 'B',
        image: "/api/placeholder/60/60",
        description: "Sustainably sourced cod with seasonal vegetables"
    },
    // Add more sample meals as needed
];

class UIManager {
    constructor() {
        this.setupEventListeners();
        // Load initial recommendations immediately
        this.loadInitialRecommendations();
    }

    setupEventListeners() {
        // Listen for changes in dietary preferences
        document.querySelectorAll('input[name="dietary"]').forEach(input => {
            input.addEventListener('change', () => this.updateRecommendations());
        });

        // Listen for changes in sourcing preferences
        document.querySelectorAll('input[name="sourcing"]').forEach(input => {
            input.addEventListener('change', () => this.updateRecommendations());
        });

        // Listen for changes in carbon rating
        document.querySelectorAll('input[name="carbon"]').forEach(input => {
            input.addEventListener('change', () => this.updateRecommendations());
        });

        // Listen for form submission
        const form = document.querySelector('.preferences-card form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.updateRecommendations();
            });
        }
    }

    async loadInitialRecommendations() {
        const defaultPreferences = {
            dietaryPreferences: [],
            sourcingPreferences: [],
            carbonRating: 'none'
        };
        
        this.displayRecommendations(this.generateRecommendations(SAMPLE_MEALS, defaultPreferences));
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

    async updateRecommendations() {
        const container = document.getElementById('meal-recommendations');
        if (!container) return;

        try {
            const preferences = await this.getPreferences();
            const recommendations = this.generateRecommendations(SAMPLE_MEALS, preferences);
            this.displayRecommendations(recommendations);
        } catch (error) {
            console.error('Error updating recommendations:', error);
            container.innerHTML = '<div class="error">Error loading recommendations</div>';
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
                    <img src="${meal.image}" alt="${meal.name}" class="meal-image">
                    <div class="meal-info">
                        <div class="meal-name">${meal.name}</div>
                        <div class="meal-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${meal.location}
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
    new UIManager();
});

// Add necessary styles
const styles = `
    .meal-card {
        background: white;
        border-radius: 8px;
        padding: 1.5rem;
        margin-bottom: 1rem;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .meal-image {
        width: 80px;
        height: 80px;
        border-radius: 8px;
        object-fit: cover;
    }

    .meal-badges {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 1rem;
    }

    .badge {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.8rem;
        background-color: var(--light-gray);
        color: var(--umass-gray);
    }

    .carbon-badge {
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-weight: bold;
    }

    .rating-a { background: #2ecc71; color: white; }
    .rating-b { background: #27ae60; color: white; }
    .rating-c { background: #f1c40f; color: black; }
    .rating-d { background: #e67e22; color: white; }
    .rating-e { background: #e74c3c; color: white; }

    .no-results {
        text-align: center;
        padding: 2rem;
        color: var(--umass-gray);
    }

    .error {
        color: #dc3545;
        text-align: center;
        padding: 1rem;
        background: #fce8e8;
        border-radius: 8px;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);