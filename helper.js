function loadTopbar() {
  fetch("topbar.html")
    .then(r => r.text())
    .then(html => {
      document.body.insertAdjacentHTML("afterbegin", html);
    });
}

function requireLogin() {
  const user = localStorage.getItem("currentUser");
  if (!user) {
    window.location.href = "signin.html";
  }
  return user;
}

function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || {};
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}
