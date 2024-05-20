
var isuserLoggedIn = sessionStorage.getItem('isUserLoggedIn');
var isadmin = sessionStorage.getItem('isAdmin');
let Borrow = document.getElementById('Borrow');
let BorrowForm = document.getElementById('borrow_form');
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

if (!isuserLoggedIn && Borrow !== null){
    Borrow.style.display = 'inline',
    BorrowForm.addEventListener('submit',function(event){
        event.preventDefault();
        window.location.href="/login";
    });
}
else if (isuserLoggedIn)
    isadmin == 'true'? adminHidden():userHidden();
