// helper.js

// Ensure users object always exists
function initUsers() {
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify({}));
  }
}

// Get currently logged-in username
function getCurrentUser() {
  let username = localStorage.getItem("currentUser");
  if (!username) {
    alert("You must be logged in!");
    window.location.href = "signin.html";
    return null;
  }
  return username;
}

// Load full user object
function loadUserData() {
  initUsers();
  let username = getCurrentUser();
  if (!username) return null;

  let users = JSON.parse(localStorage.getItem("users"));
  if (!users[username]) {
    alert("User not found. Please sign in again.");
    localStorage.removeItem("currentUser");
    window.location.href = "signin.html";
    return null;
  }

  return users[username];
}

// Save full user object
function saveUserData(userData) {
  initUsers();
  let username = getCurrentUser();
  if (!username) return;

  let users = JSON.parse(localStorage.getItem("users"));
  users[username] = userData;

  localStorage.setItem("users", JSON.stringify(users));
}

// Optional logout helper
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "signin.html";
}
