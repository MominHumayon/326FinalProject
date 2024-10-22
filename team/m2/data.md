# Application Data 

##  Overview

### 1. User Profile

- **Description**: A user's personal information
- **Attributes**:
  - `user_id` (string): Unique identifier for each user, probably SPIRE ID.
  - `name` (string): The user's full name.
  - `email` (string): The user's email address.
  - `password` (string): A hashed version of the user's password.
  - `height` (number[]): The users height in feet and inches
  - `weight` (float): The user's weight in pounds
  - `goals` (string[]): A list of the user's dietary goals from a predetermined set of options
  - `restrictions` (string[]): A list of the user's dietary restrictions
- **Data Source**: Data input by user when creating or updating profile

### 2. Expense Tracker

- **Description**: Tracks spending of user
- **Attributes**:
  - `dining_dollars` (float): The amount of dining dollars a student has left
  - `debit` (float): The balance of the UCard debit account
  - `meals` (number): The amount of meals left on the student's meal plan
  - `budget` (float): The amount of money/meals that a user wants to spend at maximum in a given week
  - `expense_id` (string): A unique identifier for each expense entry.
  - `amount` (float): The amount of money spent in a particular expense.
  - `location` (string): Location where the money/meals were spent
  - `date` (date): The date the expense occurred.
  - `account` (string): The source of spending for a particular expense
- **Data Source**: Scraped from Umass Get & user input data

### 3. 


## Data Relationships

- **User to Expense Entry**: One-to-many relationship (a user can have many expense entries).
- **User to Income Entry**: One-to-many relationship (a user can have many income entries).
- **User to Savings Goal**: One-to-many relationship (a user can have many savings goals).
- **Expense Entry to Spending Trend**: Expenses contribute to aggregated spending trend data, which is calculated monthly.

## Data Sources

- **User-Input Data**: Most of the data, including user profiles, expenses, income, and savings goals, will come from direct user input via forms in the application.
- **System-Generated Data**: Spending trends will be automatically 
  calculated by the system based on the expenses logged by users over 
  time.
