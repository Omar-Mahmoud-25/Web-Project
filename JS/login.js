import User from "./user.js";

const form = document.getElementById("loginForm");

function findUserByEmail(email, password) {
  const jsonData = localStorage.getItem("formData");
  if (jsonData) {
    const data = JSON.parse(jsonData);
    const foundUser = data[email];
    var user = JSON.stringify(foundUser);
    sessionStorage.setItem("user", user);
    if (foundUser.password === password) {
      return [true, foundUser.isAdmin];
    }
  }
}
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Process the form data (name and email) using JavaScript
  const found = findUserByEmail(username, password);
  if (found[0] && found[1] == true) {
    window.location.href = "admin-homepage.html";
  } else if (found[0] && found[1] == false) {
    window.location.href = "user-homepage.html";
  }
  else {
    alert("Invalid username or password");
  }
  // You can also send data to a server using techniques like Fetch API or Axios
}
