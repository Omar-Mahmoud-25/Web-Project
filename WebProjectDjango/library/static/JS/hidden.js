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

if (!isUserLoggedIn && Borrow !== null){
    Borrow.style.display = 'inline',
    BorrowForm.addEventListener('submit',function(event){
        event.preventDefault();
        window.location.href="/login";
    });
}
else if (isUserLoggedIn) 
    isAdmin? adminHidden():userHidden();