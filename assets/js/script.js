let element = document.getElementsByClassName("modal-backdrop");
element.remove();

// Get the modal
var modal = document.getElementById("contact-form-modal");

// Get the button that opens the modal
var btn = document.getElementById("contact-form-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-button")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Navbar Icon

$(document).ready(function(){
  // Wait for the document to be ready
  $('.navbar-toggler').click(function(){
      // When the navbar-toggler button is clicked
      if($('.navbar-toggler i').hasClass('fa-bars')){
          // Check if the icon currently has the class 'fa-bars'
          $('.navbar-toggler i').removeClass('fa-bars').addClass('fa-times');
          // If it does, remove the 'fa-bars' class and add the 'fa-times' class
      }
      else{
          // If the icon doesn't have the 'fa-bars' class
          $('.navbar-toggler i').removeClass('fa-times').addClass('fa-bars');
          // remove the 'fa-times' class and add the 'fa-bars' class
      }
  });
});