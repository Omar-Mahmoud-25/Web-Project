const target = document.getElementById("nav");

target.innerHTML = 
  "<!-- Header Section -->\n<div id='navbar'>\n<img src='path_to_your_logo_image' alt='Book Store Logo' />\n<nav>\n<a href='index.html'>Home</a>\n<a href='#about'>About</a>\n<a href='#featured'>Featured</a>\n<a href='#newArrival'>New Arrival</a>\n<a href='#contact'>Contact</a>\n<a href='#reviews'>Reviews</a>\n<a href='#availableBooks'>Available Books</a>\n</nav>\n</div>"
;
console.log(target.innerHTML);