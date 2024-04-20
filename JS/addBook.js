import Book from "./book.js";

var books = {};

const form = document.getElementById("addForm");
const name = document.getElementById("name");
const author = document.getElementById("author");
const description = document.getElementById("description");
const checkbox = [
  document.getElementById("Romantic"),
  document.getElementById("novel"),
  document.getElementById("prog"),
  document.getElementById("scary"),
];

function findBook(name) {
  const jsonData = localStorage.getItem("booksData");
  if (jsonData) {
    const data = JSON.parse(jsonData);
    printBooks(data);
    for (const key in data) {
      if (data[key].bookName == name) {
        return true;
      }
    }
  }
  return false;
}

function printBooks(data) {
  for (const key in data) {
    console.log(data[key]);
  }
}

function add(name, author, description, category) {
  books[name] = new Book(name, author, description, category);
  const jsonData = JSON.stringify(books);
  localStorage.setItem("booksData", jsonData);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var found = findBook(name.value);
  if (!found) {
    add(name.value, author.value, description.value, [
      checkbox[0].checked,
      checkbox[1].checked,
      checkbox[2].checked,
      checkbox[3].checked,
    ]);
    alert("Added Successfully!");
    window.location.href = "admin-homepage.html";
  } else {
    alert("This book already exists!");
  }
});
