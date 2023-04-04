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

function changeIcon() {
  // set delay of 350ms before toggling the classes on the icon element
  setTimeout(function(){
    // get the icon element
    var icon = document.getElementById("icon");
    // toggle the classes "fa-bars" and "fa-times" on the icon element
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  }, 350);
}
