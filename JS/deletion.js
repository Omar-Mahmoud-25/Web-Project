function getParameters(){
  var url = window.location;
  var paramsValues = window.location.search;

  var urlParams = new URLSearchParams(paramsValues);
  let parameter = urlParams.get('name');
  return parameter;
}

function confirmation() {
    // let confirmMsg = confirm('Are you sure you want to delete this book?');
    // if(confirmMsg) {
    //     window.location.href = 'admin-homepage.html';
    // }
    var bookData = JSON.parse(localStorage.getItem("booksData"));    
    let param = getParameters();
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            delete bookData[param];
            console.log(param);
            console.log(bookData);
            // window.location.href = 'categories.html';
            swalWithBootstrapButtons.fire({
              title: "Deleted",
              icon: "success"
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            icon: "error"
          });
        }
      });
}

