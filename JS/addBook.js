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
    for (const key in data) {
      if (data[key].bookName == name) {
        return true;
      }
    }
  }
  return false;
}

function add(name, author, description, category) {
  if (
    name.length &&
    author.length &&
    description.length &&
    (category[0] || category[1] || category[2] || category[3])
  ) {
    books[name] = new Book(name, author, description, category);
    const jsonData = JSON.stringify(books);
    localStorage.setItem("booksData", jsonData);
    return true;
  }
  return false;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var found = findBook(name.value);
  if (!found) {
    if (
      add(name.value, author.value, description.value, [
        checkbox[0].checked,
        checkbox[1].checked,
        checkbox[2].checked,
        checkbox[3].checked,
      ])
    ) {
      alert("Added Successfully!");
      window.location.href = "admin-homepage.html";
    } else {alert("Fill all data!");}
  } else {
    alert("This book already exists!");
  }
});
