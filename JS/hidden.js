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
let User = sessionStorage.getItem("user");
User = JSON.parse(User);

// console.log(User);
// console.log(User.isAdmin);
// console.log(User === null);

if (User === null){
    borrow.style.display = 'inline',
    borrow.addEventListener('click',function(){
        window.location.href='login.html';
    });
}
else if (User.isAdmin) 
    adminHidden();
else 
    userHidden();