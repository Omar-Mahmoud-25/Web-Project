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
document.querySelector('.Book-Details.afterNav.main div .BookName').innerHTML = `${targetBook.bookName}`;
document.querySelector('.Book-Details.afterNav.main div .Author').innerHTML = `${targetBook.author}`;
document.querySelector('.Book-Details.afterNav.main div .Category').innerHTML = `${targetBook.category}`;
document.querySelector('.Book-Details.afterNav.main div .Description').innerHTML = `${targetBook.description}`;
document.querySelector('#bookImage').setAttribute('src',`${targetBook.img}`);

