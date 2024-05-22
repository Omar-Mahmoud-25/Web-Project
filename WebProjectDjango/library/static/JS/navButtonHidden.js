// let user = JSON.parse(sessionStorage.getItem('user'));
var isUserLoggedIn = sessionStorage.getItem('isUserLoggedIn');
var isAdmin = sessionStorage.getItem('isAdmin');
let add = document.getElementById('addBook');
let logOut = document.getElementById('logOut');
let login = document.getElementById('loginButton');
let signup = document.getElementById('signupButton');
let available = document.getElementById('available');
let borrowed = document.getElementById('borrowed');


logOut.addEventListener('click',function(){
  sessionStorage.clear();
});

if (isUserLoggedIn)
  logOut.style.display = 'inline',
  login.style.display = 'none',
  signup.style.display = 'none',
  add.style.display = isAdmin == 'true' ? 'inline':'none',
  borrowed.style.display = isAdmin == 'true'? 'none':'inline',
  available.setAttribute('href',isAdmin == 'true'? '/WebProjectDjango/library/templates/AdminAvailable.html':'/WebProjectDjango/library/templates/Useravailable.html');
else
  logOut.style.display = 'none',
  login.style.display = 'inline',
  add.style.display = 'none',
  signup.style.display = 'inline',
  borrowed.style.display = 'none',
  available.setAttribute('href','/WebProjectDjango/library/templates/Useravailable.html');
