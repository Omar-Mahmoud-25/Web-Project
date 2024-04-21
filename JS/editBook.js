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

var data = localStorage.getItem('booksData') ? JSON.parse(localStorage.getItem('booksData')) : {};
function getParameters(){
  var url = window.location;
  var paramsValues = window.location.search;

  var urlParams = new URLSearchParams(paramsValues);
  let parameter = urlParams.get('name');
  return parameter;
}

let param = getParameters();
var targetBook = data[param];


const form = document.getElementById("addForm");
const name = document.getElementById("name").value = targetBook.bookName;
const author = document.getElementById("author").value = targetBook.author;
const description = document.getElementById("description").value = targetBook.description;
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
        return data[key];
      }
    }
  }
  return null;
}

// function printBooks(data) {
//   for (const key in data) {
//     // console.log(data[key]);
//   }
// }

function edit(name, author, description, category) {
  // var book = new Book(name, author, description, category);
  // const jsonData = JSON.stringify(books);
  // localStorage.setItem("booksData", jsonData);
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    var found = findBook(name.value);
    if (!found) {
      edit(name.value, author.value, description.value, [
        checkbox[0].checked,
        checkbox[1].checked,
        checkbox[2].checked,
        checkbox[3].checked,
      ]);
      alert("Saved Successfully!");
      window.location.href = "admin-homepage.html";
    } else {
      alert("Nothing to modify!");
    }
  });
