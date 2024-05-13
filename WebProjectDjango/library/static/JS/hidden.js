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

let borrow = document.getElementById('borrow');
let thisUser = sessionStorage.getItem("user");
thisUser = JSON.parse(thisUser);

// console.log(User);
// console.log(User.isAdmin);
// console.log(User === null);

if (thisUser === null){
    borrow.style.display = 'inline',
    borrow.addEventListener('click',function(){
        window.location.href='login.html';
    });
}
else if (thisUser.isAdmin) 
    adminHidden();
else 
    userHidden();