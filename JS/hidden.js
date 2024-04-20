function userHidden() {
    let ele = document.getElementsByClassName("user");
    // ele.removeAttribute("hidden");
    for (let i = 0; i<ele.length; i++)
        ele[i].style.display = "block";
}
function adminHidden() {
    let ele = document.getElementsByClassName("admin");
    // ele.removeAttribute("hidden");
    for (let i = 0; i<ele.length; i++)
        ele[i].style.display = "block";
}

let User = sessionStorage.getItem("user");
User = JSON.parse(User);

// console.log(User);

if (User.isAdmin) {
    adminHidden();
}
else {
    userHidden();
}