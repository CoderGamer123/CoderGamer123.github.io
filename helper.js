// helper.js

function initUsers() {
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify({}));
  }
}

function getCurrentUser() {
  let user = localStorage.getItem("currentUser");
  if (!user) {
    window.location.href = "signin.html";
    return null;
  }
  return user;
}

function loadUserData() {
  initUsers();
  let user = getCurrentUser();
  if (!user) return null;
  let users = JSON.parse(localStorage.getItem("users"));
  return users[user];
}

function saveUserData(data) {
  initUsers();
  let user = getCurrentUser();
  if (!user) return;
  let users = JSON.parse(localStorage.getItem("users"));
  users[user] = data;
  localStorage.setItem("users", JSON.stringify(users));
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "signin.html";
}

function loadTopbar() {
  document.body.insertAdjacentHTML("afterbegin", `
    <div style="background:#1f2937;padding:15px;display:flex;justify-content:center;gap:20px;">
      <a href="index.html">Home</a>
      <a href="stats.html">Stats</a>
      <a href="tests.html">Tests</a>
      <a href="shop.html">Shop</a>
      <a href="chat.html">Chat</a>
      <a href="announcements.html">Announcements</a>
      <a href="leaderboard.html">Leaderboard</a>
      <a href="admin.html">Admin</a>
      <a href="#" onclick="logout()">Logout</a>
    </div>
  `);
}
