const form = document.getElementById("loginForm");

const users = [];

function findUserByEmail(email, password) {
  const foundUser = users.find(
    (user) => user.email === email || user.username === email
  ); // First matching user or undefined
  if (foundUser.password === password) {
    return [true, foundUser.isAdmin];
  }
}
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Process the form data (name and email) using JavaScript
  findUserByEmail(username, password);
  // You can also send data to a server using techniques like Fetch API or Axios
});
