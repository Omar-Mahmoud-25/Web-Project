// import Book from "./book.js";
class Book {
  constructor(bookName, author, description, category, img) {
      this.bookName = bookName;
      this.author = author;
      this.description = description;
      this.category = category;
      this.img = img;
  }
}
var books = localStorage.getItem('booksData') ? JSON.parse(localStorage.getItem('booksData')) : {};


const form = document.getElementById("addForm");
const Name = document.getElementById("name");
const author = document.getElementById("author");
const description = document.getElementById("description");
const image = document.getElementById("image");
const checkbox = [
  document.getElementById("Comics"),
  document.getElementById("Biology"),
  document.getElementById("Programming"),
];

function findBook(name) {
  const jsonData = localStorage.getItem("booksData");
  if (jsonData) {
    const data = JSON.parse(jsonData);
    for (const key in data) {
      if (data[key].bookName == name) {
        return true;
      }
    }
  }
  return false;
}

function add(name, author, description, category, image) {
  if (
    name.length &&
    author.length &&
    description.length &&
    category &&
    image.length
  ) {
    books[name] = new Book(name, author, description, category, image);
    const jsonData = JSON.stringify(books);
    localStorage.setItem("booksData", jsonData);
    return true;
  }
  return false;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var found = findBook(Name.value);
  if (!found) {
    let cat;
    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        cat = checkbox[i].id;
      }
    }
    if (
      add(Name.value, author.value, description.value, cat, image.value)
    ) {
      alert("Added Successfully!");
      window.location.href = "index.html";
    } else {alert("Fill all data!");}
  } else {
    alert("This book already exists!");
  }
});
