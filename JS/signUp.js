import User from "./user.js";

const form = document.getElementById("signUpForm");

const users = {};

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const admin = document.getElementById("admin").checked;

  // Process the form data (name and email) using JavaScript
  const userData = new User(name, email, password, admin);
  users[name] = userData;
  const jsonData = JSON.stringify(users);
  localStorage.setItem("formData", jsonData);
  window.location.href = "login.html";
   // You can also send data to a server using techniques like Fetch API or Axios
});
