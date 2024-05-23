var isuserLoggedIn = sessionStorage.getItem('isUserLoggedIn');
var isadmin = sessionStorage.getItem('isAdmin');
var username = sessionStorage.getItem('username');
let Borrow = document.getElementById('Borrow');
function userHidden() {
    let ele = document.getElementsByClassName("user");
    for (let i = 0; i<ele.length; i++)
        ele[i].style.display = "inline";
}
function adminHidden() {
    let ele = document.getElementsByClassName("admin");
    for (let i = 0; i<ele.length; i++)
        ele[i].style.display = "inline";
}

function deleteConfirmation(id) {
    if (confirm("Are you sure you want to delete this book?")) {
      window.location.href = `/delete/${id}/`;
    }
}
function borrowConfirmation(id,available) {
    if (!isuserLoggedIn){
        window.location.href="/login";
        return;
    }
    var username = sessionStorage.getItem("username");
    if (!available) {
        if (confirm("Are you sure you want to return this book?")) {
            window.location.href = `/return/${id}/${username}`;
            return
        }
    }
    if (confirm("Are you sure you want to borrow this book?"))
        window.location.href = `/borrow/${id}/${username}`;  
}

const isAvailable = document.getElementById("book_availability").textContent === "True";
let owner;
if (document.getElementById("book_owner").textContent !== "None") {
    owner = JSON.parse(document.getElementById("book_owner").textContent);
}
else {
    owner = "";
}
if (!isAvailable && owner === username) {
    Borrow.textContent = "Return";
    Borrow.disabled = false;
}
else if (!isAvailable && owner !== username) {
    Borrow.disabled = true;
    Borrow.textContent = "Borrow";
}
else if (isAvailable) {
    Borrow.disabled = false;
    Borrow.innerHTML = "Borrow";
}
if (isuserLoggedIn == null)
    Borrow.style.display = 'inline';
else if (isuserLoggedIn)
    isadmin == 'true'? adminHidden():userHidden();


// Borrow.addEventListener("click", function (event) {
// event.preventDefault();

// })