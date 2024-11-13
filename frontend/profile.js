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

document.getElementById('user-profile-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const profileData = {
    id: 1,
    name: document.getElementById('name').value,
    heightFeet: document.getElementById('height-feet').value,
    heightInches: document.getElementById('height-inches').value,
    weight: document.getElementById('weight').value,
    diet: document.getElementById('diet').value,
  };

  const transaction = db.transaction(['profile'], 'readwrite');
  const objectStore = transaction.objectStore('profile');
  objectStore.put(profileData);
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
