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

function findUserByEmail(email, password) {
  // console.log("in find");
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
  return [false,false];
}

form.addEventListener('submit',function(event){
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  // window.location.href = "user-homepage.html";
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
});

// function login() {
//   // console.log("in login");
// const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;
  // Process the form data (name and email) using JavaScript
  // const found = findUserByEmail(username, password);
  // if (found[0] && found[1] == true) {
  //   window.location.href = "admin-homepage.html";
  // } else if (found[0] && found[1] == false) {
  //   window.location.href = "user-homepage.html";
  // }
  // else {
  //   alert("Invalid username or password");
  // }
  // You can also send data to a server using techniques like Fetch API or Axios
  // window.location.href = "../html/user-homepage.html";
// }

// loginButton = document.getElementById("loginButton");
// loginButton.addEventListener('click',function(){
//   window.location.href = "../html/user-homepage.html";
// });