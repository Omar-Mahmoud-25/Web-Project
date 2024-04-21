class User {
  constructor(userName, email, password, isAdmin) {
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin;
  }
}

let currentUser = sessionStorage.getItem("user");
currentUser = JSON.parse(currentUser);

function confirmation() {
  // let confirmMsg = confirm('Are you sure you want to delete this book?');
  // if(confirmMsg) {
  //     window.location.href = 'admin-homepage.html';
  // }
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "Confirm borrowing",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: currentUser == null ? "Login" : "Borrow",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed && currentUser == null) {
        window.location.href = "login.html";
      } else if (result.isConfirmed){
        swalWithBootstrapButtons.fire({
            title: "Borrowing Completed",
            icon: "success",
          });
      }else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          icon: "error",
        });
      }
    });
}
