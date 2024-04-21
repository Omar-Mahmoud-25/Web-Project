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
const Name = document.getElementById("name");
Name.value = targetBook.bookName;
const author = document.getElementById("author");
author.value = targetBook.author;
const description = document.getElementById("description");
description.value = targetBook.description;
const checkbox = [
  document.getElementById("Comics"),
  document.getElementById("Biology"),
  document.getElementById("Programming")
];
if(targetBook.category == 'Comics')
  checkbox[0].checked = true;
else if(targetBook.category == 'Programming')
  checkbox[2].checked = true;
else if(targetBook.category == 'Biology')
  checkbox[1].checked = true;

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

function edit(author, description, category) {
  // var book = new Book(name, author, description, category);
  // const jsonData = JSON.stringify(books);
  // localStorage.setItem("booksData", jsonData);
  targetBook.author = author;
  targetBook.description = description;
  targetBook.category = category;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let cat;
    for(let i=0; i<checkbox.length; ++i){
      if(checkbox[i])
        cat = checkbox[i].id;
    }
    edit(author.value, description.value, cat);
    alert("Saved Successfully!");
    window.location.href = "index.html";
  
  });
