const target = document.getElementById("nav");

target.innerHTML = 
  "<!-- Header Section -->\n<a href = \"index.html\"><img id ='logo' src='../images/logo.png' alt='Book Store Logo' style='height: 43px;width: 50px;margin-left: 20px;'/></a>\n"
;

target.innerHTML +=
  "<nav class='navigation'>\n<input type=\"text\" name=\"Search\" placeholder=\"Search\">\n<a href='#featured' class='nav-link'>Featured</a>\n<a class='nav-link' href='#newArrival'>New Arrival</a>\n<a class='nav-link' href='#reviews'>Reviews</a>\n<a class='nav-link' href='categories.html'>Available Books</a>\n</nav>"
;

const footer = document.getElementById("footer");

footer.innerHTML = 
  '<section id="website"><div id="logo-copy"><img src="../images/logo.png" alt="Logo" style="color:white;width: 30px;" /><p>Online Library &copy; 2024</p><br></div></section>\n'
;

footer.innerHTML +=
  '<section id="contact"><h3>Contact Us</h3><p>Email: info@onlinelibrary.com</p><p>Phone: +010010101010</p><p>Address: 123 Library Street, City, Country</p></section>\n'
;

footer.innerHTML +=
  '<section id="social-media"><h3>Connect With Us</h3><ul><li><a href="https://www.facebook.com">Facebook</a></li><li><a href="https://twitter.com">Twitter</a></li><li><a href="https://www.instagram.com">Instagram</a></li></ul></section>\n'
;

footer.innerHTML +=
  '<section id="legal"><h3>Legal</h3><ul><li><a href="...">Privacy Policy</a></li><li><a href="...">Terms of Service</a></li></ul></section>\n'
;

footer.innerHTML +=
  '<section id="subscribe"><h3>Subscribe to Our Newsletter</h3><form action="...." method="post"><input type="email" name="email" placeholder="Enter your email" required /><button type="submit">Subscribe</button></form></section>\n'
;

footer.innerHTML +=
  '<section id="sitemap"><h3>Site Map</h3><ul><li><a href="index.html">Home</a></li><li><a href="categories.html">Books</a></li></ul></section>\n'
;