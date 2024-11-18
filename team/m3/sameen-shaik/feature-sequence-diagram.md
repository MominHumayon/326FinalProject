# User Profile Feature Sequence Diagram

## Feature Description
This feature allows users to input and save their personal details, such as name, height, weight, and dietary preferences, into IndexedDB for persistence. On page load, saved data is retrieved and displayed in the form fields if available. This involves user input, JavaScript events, IndexedDB operations, and UI updates.
Log In: Users can log in by entering their first and last name. If both fields are non-empty strings, the user is redirected to the next page. For now does not verify the user, this feature will be done in the backend portion of the project.
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
