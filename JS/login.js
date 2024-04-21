// import User from "./user.js";

class User {
  constructor(userName, email, password, isAdmin) {
      this.userName = userName;
      this.email = email;
      this.password = password;
      this.isAdmin = isAdmin;
  }
};

const form = document.getElementById("loginForm");
// console.log("in File");
const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener('click',function(){
  if (password.type == 'password')
    password.type = 'text';
  else
    password.type = 'password';
  toggle.innerHTML = (toggle.innerHTML == '👀'? '🙈':'👀');
  
});

function findUserByEmail(email, password) {
  // console.log("in find");
  const jsonData = localStorage.getItem("formData");
  if (jsonData) {
    const data = JSON.parse(jsonData);
    const foundUser = data[email];
    if (foundUser.password === password) {
      var user = JSON.stringify(foundUser);
      sessionStorage.setItem("user", user);
      return true;
    }
  }
  return false;
}

// function login() {
//   const username = document.getElementById("username");
//   const password = document.getElementById("password");
//   const found = findUserByEmail(username.value, password.value);
//   console.log(found);
//   if (found[0])
//     window.location.href="homepage.html";
//   else {
//     alert("Invalid username or password");
//     username.value = "";
//     password.value = "";
//   }
// }

form.addEventListener("submit",function(event){
  event.preventDefault();
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const found = findUserByEmail(username.value, password.value);
  // // console.log(found);
  if (found)
    window.location.href="index.html";
  else {
    alert("Invalid username or password");
    username.value = "";
    password.value = "";
  }
});
// var button = document.getElementById("loginButton");
// button.addEventListener("click", login());