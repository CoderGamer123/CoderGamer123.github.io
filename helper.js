// helper.js

function getCurrentUser(){
  let username = localStorage.getItem("currentUser");
  if(!username) {
    alert("You must be logged in!");
    window.location.href = "signin.html";
    return null;
  }
  return username;
}

function loadUserData(){
  let username = getCurrentUser();
  if(!username) return null;

  let users = JSON.parse(localStorage.getItem("users")) || {};
  if(!users[username]){
    alert("User data not found!");
    window.location.href = "signin.html";
    return null;
  }

  return users[username];
}

function saveUserData(userData){
  let username = getCurrentUser();
  if(!username) return;

  let users = JSON.parse(localStorage.getItem("users")) || {};
  users[username] = userData;
  localStorage.setItem("users", JSON.stringify(users));

  // Also update current game state for pages
  localStorage.setItem("coins", userData.coins);
  localStorage.setItem("characters", JSON.stringify(userData.characters));
  localStorage.setItem("packsOpened", userData.packsOpened);
}
