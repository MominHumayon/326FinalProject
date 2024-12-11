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
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

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
git clone https://github.com/your-username/umass-dining-frontend.git

# Backend API
git clone https://github.com/your-username/umass-dining-backend.git

# Scraper service
git clone https://github.com/your-username/umass-dining-scraper.git
```

2. Install dependencies for each component:
```bash
# Frontend
cd umass-dining-frontend
npm install

# Backend
cd ../umass-dining-backend
npm install

# Scraper
cd ../umass-dining-scraper
npm install
```

3. Configure environment variables:
Create `.env` files in each directory:

```env
# Frontend .env
PORT=3000
BACKEND_URL=http://localhost:4000
SCRAPER_URL=http://localhost:5000

# Backend .env
PORT=4000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret

# Scraper .env
PORT=5000
UPDATE_INTERVAL=3600000
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
npm start
# Runs on http://localhost:4000
```

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
│   ├── profile.html
│   ├── goals.html
│   ├── location-layout/
│   ├── graph-feature/
│   └── adithya/
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   └── models/
└── scraper/
    ├── scraper.js
    └── utils/
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

#### Tracking Endpoints
```
POST /api/tracking/meal
GET /api/tracking/history
GET /api/tracking/statistics
```
