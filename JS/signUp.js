// import User from "./user.js";

class User {
  constructor(userName, email, password, isAdmin) {
      this.userName = userName;
      this.email = email;
      this.password = password;
      this.isAdmin = isAdmin;
  }
};

const form = document.getElementById("signUpForm");

const users = {};
const Name = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const Confirm = document.getElementById("confirm");
const show = document.getElementById("showPassword");
const admin = document.getElementById("admin").checked;

function isValidPassword(){
  str = password.value
  size = (str.length >= 8);
  num = false;
  upper = false;
  special = /[^a-zA-Z0-9\s]/.test(str);
  // console.log(str);
  for (var i = 0; i<str.length; i++)
  if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase())
    upper = true;
  else if (str[i] >= '0' && str[i] <= '9')
    num = true;
  return num&&upper&&special&&size;
}

password.addEventListener('input',function(){
  message = document.getElementById("passwordMessage");
  
  if (isValidPassword()){
    message.textContent = 'That is Ok';
    message.style.color = 'greenyellow';
  }
  else{
    message.textContent = 'Password must have at least 8 characters and contain: upper case letters,digits and special characters.';
    message.style.color = 'red';
  }
});

show.addEventListener('click',function(){
  if (password.type === "password"){
    password.type = "text";
    Confirm.type = "text";
    show.textContent = "Hide Password";
  }
  else{
    password.type = "password";
    Confirm.type = "password";
    show.textContent = "Show Password";
  }
})

Confirm.addEventListener('input',function(){
  message = document.getElementById("confirmMessage");
  if (Confirm.value !== password.value){
    message.textContent = "The password doesn't Match!";
    message.style.color = 'red';
  }
  else{
    message.textContent = "Password Match";
    message.style.color = 'greenyellow';
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission
  validation = isValidPassword();
  if (isValidPassword() === false || password.value !== Confirm.value)
    return alert("Invalid data!");
  // Process the form data (Name and email) using JavaScript
  const userData = new User(Name.value, email.value, password.value, admin);
  users[Name.value] = userData;
  const jsonData = JSON.stringify(users);
  localStorage.setItem("formData", jsonData);
  window.location.href = "login.html";
   // You can also send data to a server using techniques like Fetch API or Axios
});
