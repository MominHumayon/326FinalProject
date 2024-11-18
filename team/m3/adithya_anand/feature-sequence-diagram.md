# Debit Tracker Feature Sequence Diagram

## Feature Description
This feature allows you to see how many swipes you have left and the amount of money left on your UCard. All of this data is stored in indexedDB for persiesntce, for
example when you reload a page. When the page loads the information is first collected from indexedDB if available, if not default values of 400 and 20 respectivley is 
used (this will eventually be fully replaced with actual values scraped from GET once the backend is fully functional). As an aditional feature we have implemented a 
history feature which shows the usage of swipes and UCard debit used over the past 14 (2 weeks) days; this to is implemented using dummy data but will eventually have 
real data once the backend is fully implemented. 

## Sequence Diagram
```mermaid
sequenceDiagram
  participant User
  participant Form as User Profile Form
  participant JS as JavaScript
  participant DB as IndexedDB

  alt User Clicks "Sign Up"
    User->>Form: Fills in First Name, Last Name, Height, Weight, and Dietary Preferences
    User->>Form: Clicks "Save Profile"
    Form->>JS: Submit Event Triggered
    JS->>DB: Save Profile Data in IndexedDB
    DB-->>JS: Data Saved Confirmation
    JS->>User: Show "Profile saved successfully" message
  end

  alt User Clicks "Log In"
    User->>Form: Fills in First Name and Last Name
    User->>Form: Clicks "Log In"
    Form->>JS: Log In Event Triggered
    JS->>Form: Validate First Name and Last Name
    JS->>DB: Search IndexedDB for Matching Name
    DB-->>JS: Return Match Status
    alt Match Found
      JS->>User: Redirect to Next Page
    else No Match Found
      JS->>User: Show "User not found" message
    end
  end

  User->>Form: Reloads the Page
  Form->>JS: Page Load Event
  JS->>DB: Retrieve Profile Data from IndexedDB
  DB-->>JS: Return Profile Data
  JS->>Form: Populate Form Fields with Retrieved Dat