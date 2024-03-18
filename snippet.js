const target = document.getElementById("nav");

target.innerHTML = 
  "<!-- Header Section -->\n<img id = 'logo' src='images/logo.jpeg' alt='Book Store Logo' />\n<nav class='navigation'>\n<a href='index.html'>Home</a>\n<a href='#about'>About</a>\n<a href='#featured'>Featured</a>\n<a href='#newArrival'>New Arrival</a>\n<a href='#contact'>Contact</a>\n<a href='#reviews'>Reviews</a>\n<a href='categories.html'>Available Books</a>\n</nav>"
;
console.log(target.innerHTML);