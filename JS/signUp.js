const form = document.getElementById("signUpForm");

const users = [];

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const admin = document.getElementById("admin").checked;

  // Process the form data (name and email) using JavaScript
  users.push(name, email, password, admin);
  window.location.href='../html/login.html';
  //   users.push(new User(name, email, password, admin));
  // You can also send data to a server using techniques like Fetch API or Axios
});