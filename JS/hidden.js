function userHidden() {
    let ele = document.getElementsByClassName("user");
    // ele.removeAttribute("hidden");
    for (let i = 0; i<ele.length; i++)
        ele[i].style.display = "inline";
}
function adminHidden() {
    let ele = document.getElementsByClassName("admin");
    // ele.removeAttribute("hidden");
    for (let i = 0; i<ele.length; i++)
        ele[i].style.display = "inline";
}

let borrow = document.getElementById('borrow');
let User = sessionStorage.getItem("user");
User = JSON.parse(User);

// console.log(User);
// console.log(User.isAdmin);

if (User == null)
    borrow.style.display = 'inline',
    borrow.addEventListener('click',function(){
        window.location.href='login.html';
    });
else if (User.isAdmin) 
    adminHidden();
else 
    userHidden();