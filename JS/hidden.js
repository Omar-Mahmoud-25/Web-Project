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
// let admin = User[User.indexOf('"isAdmin":') + 10] == 't';

// console.log(User);
// console.log(User.indexOf('"isAdmin":'));
// console.log(admin);

if (User[User.indexOf('"isAdmin":') + 10] == 't') {
    adminHidden();
}
else {
    userHidden();
}

// adminHidden();
// userHidden();