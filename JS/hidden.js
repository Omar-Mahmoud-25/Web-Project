function userHidden() {
    var ele = document.getElementsByClassName("user");
    ele.removeAttribute("hidden");
}
function adminHidden() {
    var ele = document.getElementsByClassName("admin");
    ele.removeAttribute("hidden");
}

var user = sessionStorage.getItem("user");

if (user.isAdmin) {
    adminHidden();
}
else {
    userHidden();
}