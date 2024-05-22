const form = document.getElementById("signUpForm");
const users = {};
const Name = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const Confirm = document.getElementById("confirm");
const admin = document.getElementById("admin");
const toggle = document.getElementById("togglePassword");
var validUsername = false;
var validEmail = false;

toggle.addEventListener('click',function(){
  if (password.type == 'password')
    password.type = 'text',
    Confirm.type = 'text';
  else
    password.type = 'password',
    Confirm.type = 'password';
  toggle.innerHTML = (toggle.innerHTML == '👀'? '🙈':'👀');
});

function isValidPassword() {
  var str = password.value;
  var size = str.length >= 8;
  var num = false;
  var upper = false;
  var special = /[^a-zA-Z0-9\s]/.test(str);
  for (var i = 0; i < str.length; i++)
    if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase())
      upper = true;
    else if (str[i] >= "0" && str[i] <= "9") num = true;
  return num && upper && special && size;
}

password.addEventListener("input", function () {
  var passMessage = document.getElementById("passwordMessage");
  if (isValidPassword()) 
    passMessage.textContent = "That is Ok",
    passMessage.style.color = "green";
  else 
    passMessage.innerHTML =
      "Password must have at least 8 characters and contain:<br>upper case letters,digits and special characters.",
    passMessage.style.color = "red";
  
});

Confirm.addEventListener("input", function () {
  var confirmMessage = document.getElementById("confirmMessage");
  if (Confirm.value !== password.value) 
    confirmMessage.textContent = "The password doesn't Match!",
    confirmMessage.style.color = "red";
  else 
    confirmMessage.textContent = "Password Match",
    confirmMessage.style.color = "green";
});

form.addEventListener("submit", function (event) {
  if (
    !isValidPassword() ||
    password.value !== Confirm.value ||
    !validEmail ||
    !validUsername){
    event.preventDefault(); // Prevent default form submission
    return alert("Invalid data!");
  }
});

Name.addEventListener('input',function() {
  var xml = new XMLHttpRequest();
  var txt = Name.value;
  xml.responseType = "json";
  var messageUser = document.getElementById("usernameMessage");

  xml.onreadystatechange = function(){
    if (this.response.exists)
      validUsername = false,
      messageUser.style.color = 'red',
      messageUser.textContent = "this username is already in use";
    else
      validUsername = true,
      messageUser.textContent = " ";
  };
  xml.open('GET','Validate-username?username=' + encodeURIComponent(txt),true);
  xml.send();
});

email.addEventListener('input',function() {
  var xml = new XMLHttpRequest();
  var txt = email.value;
  xml.responseType = "json";
  var messageEmail = document.getElementById("emailMessage");

  xml.onreadystatechange = function(){
    if (this.response.exists)
      validEmail = false,
      messageEmail.style.color = 'red',
      messageEmail.textContent = "this email is already in use";
    else
      validEmail = true,
      messageEmail.textContent = " ";
  };
  xml.open('GET','Validate-email?email=' + encodeURIComponent(txt),true);
  xml.send();
});