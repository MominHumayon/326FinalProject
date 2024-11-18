let db;
const request = indexedDB.open('UserProfileDB', 1);

request.onupgradeneeded = function(event) {
  db = event.target.result;
  db.createObjectStore('profile', { keyPath: 'id' });
};

request.onsuccess = function(event) {
  db = event.target.result;
  loadUserProfile();
};

request.onerror = function(event) {
  console.log('Error opening IndexedDB:', event);
};

// document.getElementById('user-profile-form').addEventListener('submit', function(event) {
//   event.preventDefault();
//   const profileData = {
//     id: 1,
//     name: document.getElementById('name').value,
//     heightFeet: document.getElementById('height-feet').value,
//     heightInches: document.getElementById('height-inches').value,
//     weight: document.getElementById('weight').value,
//     diet: document.getElementById('diet').value,
//   };

//   const transaction = db.transaction(['profile'], 'readwrite');
//   const objectStore = transaction.objectStore('profile');
//   objectStore.put(profileData);
//   alert('Profile saved successfully!');
// });
document.getElementById('user-profile-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('first-name');
  const heightFeetInput = document.getElementById('height-feet');
  const heightInchesInput = document.getElementById('height-inches');
  const weightInput = document.getElementById('weight');
  const dietSelect = document.getElementById('diet');

  // Validate inputs
  if (firstNameInput.value.trim() === '') {
    alert('Please enter your first name');
    return;
  }

  if (lastNameInput.value.trim() === '') {
    alert('Please enter your last name');
    return;
  }
  if (!/^[a-zA-Z]+$/.test(firstNameInput.value.trim()) || !/^[a-zA-Z]+$/.test(lastNameInput.value.trim())) {
    alert('First and last name must be strings');
    return;
  }

  if (heightFeetInput.value === '' || heightInchesInput.value === '') {
    alert('Please enter your height in feet and inches');
    return;
  }

  if (isNaN(heightFeetInput.value) || isNaN(heightInchesInput.value)) {
    alert('Height must be a number');
    return;
  }

  if (weightInput.value === '') {
    alert('Please enter your weight');
    return;
  }

  if (isNaN(weightInput.value)) {
    alert('Weight must be a number');
    return;
  }



  // If all inputs are valid, save to IndexedDB
  const profileData = {
    id: 1,
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    heightFeet: heightFeetInput.value,
    heightInches: heightInchesInput.value,
    weight: weightInput.value,
    diet: dietSelect.value,
  };

  const transaction = db.transaction(['profile'], 'readwrite');
  const objectStore = transaction.objectStore('profile');
  objectStore.put(profileData);

  loadUserProfile();
  alert('Profile saved successfully!');
});

function loadUserProfile() {
  const transaction = db.transaction(['profile'], 'readonly');
  const objectStore = transaction.objectStore('profile');
  const request = objectStore.get(1);

  request.onsuccess = function(event) {
    if (request.result) {
      document.getElementById('name').value = request.result.name;
      document.getElementById('height-feet').value = request.result.heightFeet;
      document.getElementById('height-inches').value = request.result.heightInches;
      document.getElementById('weight').value = request.result.weight;
      document.getElementById('diet').value = request.result.diet;
    }
  };
}
document.getElementById('login-button').addEventListener('click', function() {
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');

  if (firstNameInput.value.trim() !== '' && lastNameInput.value.trim() !== '') {
    document.querySelectorAll(".view").forEach(elem => elem.style.display = "none");
    document.getElementById("diningHalls").style.display = "block"; // replace with the actual next page URL
  } else {
    alert('Please fill out both first and last name fields to proceed.');
  }
});