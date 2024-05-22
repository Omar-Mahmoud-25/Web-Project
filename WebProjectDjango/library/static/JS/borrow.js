function confirmationb() {
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
      confirmButtonText: !isUserLoggedIn ? "Login" : "Borrow",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed && !isUserLoggedIn) {
        window.location.href = "/login";
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
