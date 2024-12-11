

document.getElementById('save-profile-button').addEventListener('click', async function (event) {
  event.preventDefault(); // Prevent page refresh

  // Collect user input from the form
  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const heightFeet = document.getElementById('height-feet').value.trim();
  const heightInches = document.getElementById('height-inches').value.trim();
  const weight = document.getElementById('weight').value.trim();
  const diet = document.getElementById('diet').value;

  // Validate fields
  if (!firstName || !lastName || !heightFeet || !heightInches || !weight) {
    alert('Please fill out all fields.');
    return;
  }

  // Create a user object
  const userData = { firstName, lastName, heightFeet, heightInches, weight, diet };

  try {
    // Send a POST request to save the profile
    const response = await fetch('http://localhost:3001/api/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      alert('Profile saved successfully!');
    } else {
      const errorData = await response.json();
      alert(`Failed to save profile: ${errorData.error}`);
    }
  } catch (error) {
    console.error('Error saving profile:', error);
    alert('An error occurred while saving your profile.');
  }
});

document.getElementById('login-button').addEventListener('click', async function (event) {
  event.preventDefault(); // Prevent page refresh

  // Collect first name and last name
  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();

  // Ensure both fields are filled
  if (!firstName || !lastName) {
    alert('Please enter both first and last names.');
    return;
  }

  try {
    // Send a GET request to verify the user
    const response = await fetch(`http://localhost:3001/api/user?firstName=${firstName}&lastName=${lastName}`);
    if (response.ok) {
      const user = await response.json();
      alert(`Welcome, ${user.firstName} ${user.lastName}!`);
      // Redirect to the next page
      window.location.href = '/meal-recommender.html'; // Replace with your actual next page URL
    } else {
      alert('User not found. Please create a profile.');
    }
  } catch (error) {
    console.error('Error logging in:', error);
    alert('An error occurred while logging in.');
  }
});
