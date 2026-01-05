// helper.js

function loadTopbar() {
  document.body.insertAdjacentHTML("afterbegin", `
    <div class="topbar">
      <a href="index.html">Home</a>
      <a href="stats.html">Stats</a>
      <a href="tests.html">Tests</a>
      <a href="shop.html">Shop</a>
      <a href="chat.html">Chat</a>
      <a href="announcements.html">Announcements</a>
      <a href="leaderboard.html">Leaderboard</a>
      <a href="admin.html">Admin</a>
    </div>
  `);
}

function requireLogin() {
  const user = localStorage.getItem("currentUser");
  if (!user) {
    window.location.href = "signin.html";
    return null;
  }
  return user;
}

function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || {};
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}
