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
    participant Browser
    participant IndexedDB

    User->>Browser: Loads the webpage
    Browser->>IndexedDB: Check for stored swipe and UCard data
    alt Data Exists
        IndexedDB-->>Browser: Return stored data
        Browser->>Browser: Display swipes and UCard balance on UI
    else Data Does Not Exist
        Browser->>Browser: Use default values (400 swipes, 20 UCard)
        Browser->>IndexedDB: Save default values to IndexedDB
    end

    User->>Browser: Increment or decrement swipes/UCard balance
    Browser->>Browser: Update the UI with new values
    Browser->>IndexedDB: Save updated values to IndexedDB

    User->>Browser: Click "History" button
    Browser->>Browser: Toggle to display history view
    Browser->>Browser: Display swipe and UCard usage over the past 14 days (dummy data)