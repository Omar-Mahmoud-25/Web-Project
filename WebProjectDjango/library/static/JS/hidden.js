var isuserLoggedIn = sessionStorage.getItem('isUserLoggedIn');
var isadmin = sessionStorage.getItem('isAdmin');
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
    if (!available)
        return alert("this book is unavailable now");
    if (confirm("Are you sure you want to borrow this book?"))
        window.location.href = `/borrow/${id}/${username}`;   
}

if (isuserLoggedIn == null)
    Borrow.style.display = 'inline';
else if (isuserLoggedIn)
    isadmin == 'true'? adminHidden():userHidden();
