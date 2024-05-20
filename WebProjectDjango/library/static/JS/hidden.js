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

let Borrow = document.getElementById('Borrow');
let thisUser = sessionStorage.getItem("user");
let BorrowForm = document.getElementById('borrow_form');
thisUser = JSON.parse(thisUser);

if (thisUser === null && Borrow !== null){
    Borrow.style.display = 'inline',
    BorrowForm.addEventListener('submit',function(event){
        event.preventDefault();
        window.location.href="/login";
    });
}
else if (thisUser !== null) 
    thisUser.isAdmin? adminHidden():userHidden();