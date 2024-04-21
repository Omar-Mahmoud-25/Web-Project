import User from "./user.js";

// class User {
//   constructor(userName, email, password, isAdmin) {
//     this.userName = userName;
//     this.email = email;
//     this.password = password;
//     this.isAdmin = isAdmin;
//   }
// }

const form = document.getElementById("signUpForm");

const users = {};
const Name = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const Confirm = document.getElementById("confirm");
const admin = document.getElementById("admin");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener('click',function(){
  if (password.type == 'password')
    password.type = 'text',
    Confirm.type = 'text';
  else
    password.type = 'password',
    Confirm.type = 'password';
  toggle.innerHTML = (toggle.innerHTML == '👀'? '🙈':'👀');
});

function findUserByEmail() {
  const jsonData = localStorage.getItem("formData");
  if (jsonData) {
    const data = JSON.parse(jsonData);
    // const foundUser = data[email.value];
    for (const key in data) {
      if (data[key].email == email.value) {
        // console.log("found email");
        return [false, true];
      }
      if (data[key].userName == Name.value) {
        // console.log("found username");
        return [true, false];
      }
    }
  }
  return [true, true];
}

Name.addEventListener("input", function (event) {
  var valid = findUserByEmail();
  var messageUser = document.getElementById("usernameMessage");
  messageUser.style.color = "red";
  if (!valid[1] && valid[0]) {
    // console.log("in 1");
    messageUser.textContent = "this username is already in use";
  } else {
    messageUser.textContent = "";
  }
  if (Name.value.endsWith(" ")) Name.value = Name.value.slice(0, -1);
});

email.addEventListener("input", function (event) {
  var valid = findUserByEmail();
  var messageEmail = document.getElementById("emailMessage");
  messageEmail.style.color = "red";
  if (!valid[0]) {
    // console.log("in 0");
    messageEmail.textContent = "this email is already in use";
  } else {
    messageEmail.textContent = "";
  }
});

function isValidPassword() {
  var str = password.value;
  var size = str.length >= 8;
  var num = false;
  var upper = false;
  var special = /[^a-zA-Z0-9\s]/.test(str);
  // console.log(str);
  for (var i = 0; i < str.length; i++)
    if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase())
      upper = true;
    else if (str[i] >= "0" && str[i] <= "9") num = true;
  return num && upper && special && size;
}

password.addEventListener("input", function () {
  var passMessage = document.getElementById("passwordMessage");

  if (isValidPassword()) {
    passMessage.textContent = "That is Ok";
    passMessage.style.color = "green";
  } else {
    passMessage.innerHTML =
      "Password must have at least 8 characters and contain:<br>upper case letters,digits and special characters.";
    passMessage.style.color = "red";
  }
});

Confirm.addEventListener("input", function () {
  var confirmMessage = document.getElementById("confirmMessage");
  if (Confirm.value !== password.value) {
    confirmMessage.textContent = "The password doesn't Match!";
    confirmMessage.style.color = "red";
  } else {
    confirmMessage.textContent = "Password Match";
    confirmMessage.style.color = "green";
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission
  // validation = isValidPassword();
  var valid = findUserByEmail();
  if (
    isValidPassword() === false ||
    password.value !== Confirm.value ||
    !(valid[1] && valid[0])
  )
    return alert("Invalid data!");
  // Process the form data (Name and email) using JavaScript
  const userData = new User(
    Name.value,
    email.value,
    password.value,
    admin.checked
  );
  users[Name.value] = userData;
  const jsonData = JSON.stringify(users);
  localStorage.setItem("formData", jsonData);
  window.location.href = "login.html";
  // You can also send data to a server using techniques like Fetch API or Axios
});
