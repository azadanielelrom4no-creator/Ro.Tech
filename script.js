function signup() {
let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

localStorage.setItem("user", user);
localStorage.setItem("pass", pass);

alert("Account created!");
window.location.href = "login.html";
}

function login() {
let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(user === localStorage.getItem("user") &&
pass === localStorage.getItem("pass")) {

localStorage.setItem("loggedIn", "true");
window.location.href = "dashboard.html";

} else {
alert("Wrong login");
}
}

function logout() {
localStorage.removeItem("loggedIn");
window.location.href = "index.html";
}
