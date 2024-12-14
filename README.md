# UMass Dining Web Application

## Overview
A comprehensive web application for UMass Dining services that helps students track their meals, monitor nutrition, find dining locations, and get personalized meal recommendations. The application provides real-time dining information, personalized meal suggestions, and various tracking features to enhance the dining experience at UMass Amherst.

## Table of Contents
- [Features](#features)
- [System Architecture](#system-architecture)
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Development Guidelines](#development-guidelines)
- [API Documentation](#api-documentation)

## Features

### Navigation System
- Responsive header navigation across all pages
- Mobile-friendly menu toggle
- Seamless page transitions

### Meal Recommender
- Personalized meal suggestions based on preferences
- Dietary restriction filters:
  - Vegetarian
  - Halal
  - Plant-Based
  - Whole Grain
- Sourcing preferences:
  - Local
  - Sustainable
  - Antibiotic-Free
- Carbon rating filter system
- Real-time recommendations

### Dining Hall Information
- Real-time menu displays
- Operating hours
- Location information
- Current capacity status
- Menu item details:
  - Nutritional information
  - Allergen information
  - Dietary indicators

### Profile Management
- User preferences storage
- Height/weight tracking
- Dietary restrictions
- Nutrition goals
- Meal history

### Goal Tracking
- Calorie tracking
- Nutrient tracking:
  - Protein
  - Carbohydrates
  - Fat
- Weekly progress visualization
- Custom goal setting
- Progress reports

### Debit Tracking
- Meal swipe counter
- UCard balance tracking
- Transaction history
- Usage visualization
- Spending analytics

## System Architecture

The application consists of three main components:

### 1. Frontend Server (Port 3000)
- Serves static files
- Handles client-side routing
- Manages user interface
- Implements responsive design

### 2. Backend API Server (Port 4000)
- Processes API requests
- Manages data operations
- Handles business logic
- Provides data validation

### 3. Dining Data Scraper (Port 5000)
- Collects menu information
- Updates dining hall data
- Manages data synchronization
- Ensures data accuracy

### 4. Sharing Scraper (Port 6969)
- Scrapes information from UMass Dining for today and future days
- Stores Meal information in database
- Shares meal information with graph and goal tracker features when a meal's "add" button is clicked

## Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)
- Git
- Modern web browser
- Text editor or IDE

### Installation Steps

1. Clone all repositories:
```bash
# Main frontend application
git clone https://github.com/MominHumayon/326FinalProject
```

2. Install dependencies for each component:
```bash
# Frontend
cd frontend
npm install

# Backend
cd backend
npm install

# Scraper
cd umass-dining-scraper
npm install
```

## Running the Application

1. Start the Scraper Service:
```bash
cd umass-dining-scraper
npm start
# Runs on http://localhost:5000
```

2. Start the Backend Server:
```bash
cd umass-dining-backend
npm start server.js
# Runs on http://localhost:4000
```

3. Start the Sharing Scraper Server:
```bash
cd umass-dining-frontend
npm start mealScrapeServer.js
# Runs on http://localhost:6969

3. Start the Frontend Server:
```bash
cd umass-dining-frontend
npm start
# Runs on http://localhost:3000
```

4. Access the application:
- Open your browser and navigate to `http://localhost:3000`
- Ensure all three servers are running for full functionality

## Project Structure

```
project/
├── frontend/
│   ├── index.html
│   ├── header.html
│   ├── header.css
│   ├── header.js
│   ├── meal-recommender.html
│   ├── meal-recommender.css
│   ├── meal-info.html
│   ├── AddMeal.js
│   ├── MealRender.js
│   ├── profile.html
|   ├── profileStyle.css
|   ├── profile.js
│   ├── goals.html
│   ├── server.js
│   ├── location-layout/
│   ├── graph-feature/
│   └── adithya/
├── eventhub/
│   ├── Events.js
│   ├── EventHub.js
├── backend/
│   ├── server.js
│   ├── mealScraping.js
│   ├── mealScrapeServer.js
│   ├── routes/
│   ├── controllers/
│   └── models/
└── scraper/
    ├── scraper.js
    └── server.js
```

## Development Guidelines

### Code Style
- Use consistent indentation (2 spaces)
- Follow JavaScript ES6+ conventions
- Maintain clear file organization
- Comment complex logic
- Use meaningful variable names

### Git Workflow
1. Create feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request
5. Review and merge

### Testing
- Write unit tests for new features
- Test across different browsers
- Verify mobile responsiveness
- Check all error scenarios

## API Documentation

### Backend Endpoints

#### Menu Endpoints
```
GET /api/menus/:location/:period
GET /api/debug/all
GET /api/debug/location/:location
```

#### User Endpoints
```
POST /api/user/profile
GET /api/user/preferences
PUT /api/user/goals
```

