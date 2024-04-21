import Book from "./book.js";
const jsonData = localStorage.getItem("booksData");
const data = JSON.parse(jsonData);
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
document.querySelector('.Book-Details.afterNav.main .imgAndButton').innerHTML = ` <img src=${targetBook.img} alt="bookImage.png" style="width: 300px; height: 450px;"></a>`;

