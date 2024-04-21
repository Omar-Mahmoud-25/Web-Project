const target = document.getElementById("nav");

target.innerHTML = 
  "<!-- Header Section -->\n<a id='logo' href = \"index.html\"><img src='../images/logo.png' alt='Book Store Logo' style='height: 43px;width: 50px;margin-left: 20px;'/></a>\n"
;

target.innerHTML +=
  "<nav class='navigation'>\n<input type=\"text\" name=\"Search\" placeholder=\"Search\">\n<a class='nav-link' href='index.html'>Home</a>\n<a class='nav-link' href='categories.html'>Available Books</a>\n<a href='login.html' id='loginButton' class='nav-link'>Login</a>\n<a href='signup.html' id='signupButton' class='nav-link'>Sign Up</a>\n<a class='nav-link index-button' id='logOut' href='index.html'>Log Out</a></nav>"
;

let logo = document.getElementById('logo');
let user = JSON.parse(sessionStorage.getItem('user'));
let logOut = document.getElementById('logOut');
let login = document.getElementById('loginButton');
let signup = document.getElementById('signupButton');


logOut.addEventListener('click',function(){
  sessionStorage.clear();
});

if (user)
  logOut.style.display = 'inline',
  login.style.display = 'none',
  signup.style.display = 'none';


else
  logOut.style.display = 'none',
  login.style.display = 'inline',
  signup.style.display = 'inline';

const footer = document.getElementById("footer");

footer.innerHTML = 
  '<section id="website"><div id="logo-copy"><img src="../images/logo.png" alt="Logo" style="color:white;width: 30px;" /><p>Online Library &copy; 2024</p><br></div></section>\n'
;

footer.innerHTML +=
  '<section id="contact"><h3>Contact Us</h3><p>Email: info@onlinelibrary.com</p><p>Phone: +010010101010</p><p>Address: 123 Library Street, City, Country</p></section>\n'
;

footer.innerHTML +=
  '<section id="social-media"><h3>Connect With Us</h3><ul><li><a href="https://www.facebook.com" target="_blank">Facebook</a></li><li><a href="https://twitter.com" target="_blank">Twitter</a></li><li><a href="https://www.instagram.com" target="_blank">Instagram</a></li></ul></section>\n'
;

footer.innerHTML +=
  '<section id="subscribe"><h3>Subscribe to Our Newsletter</h3><form action="...." method="post"><input type="email" name="email" placeholder="Enter your email" required /><button type="submit">Subscribe</button></form></section>\n'
;
