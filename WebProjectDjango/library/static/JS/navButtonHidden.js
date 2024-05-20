// let user = JSON.parse(sessionStorage.getItem('user'));
let isUserLoggedIn = sessionStorage.getItem('isUserLoggedIn');
let isAdmin = sessionStorage.getItem('isAdmin');
let add = document.getElementById('addBook');
let logOut = document.getElementById('logOut');
let login = document.getElementById('loginButton');
let signup = document.getElementById('signupButton');
let available = document.getElementById('available');


logOut.addEventListener('click',function(){
  sessionStorage.clear();
});

if (isUserLoggedIn)
  logOut.style.display = 'inline',
  login.style.display = 'none',
  signup.style.display = 'none',
  add.style.display = isAdmin? 'inline':'none',
  available.setAttribute('href',isAdmin? '/Aavailable':'Uavailable');
else
  logOut.style.display = 'none',
  login.style.display = 'inline',
  add.style.display = 'none',
  signup.style.display = 'inline',
  available.setAttribute('href','Uavailable');