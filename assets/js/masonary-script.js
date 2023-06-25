document.addEventListener("DOMContentLoaded", function() {
    var galleryContainer = document.getElementById('gallery-container');
    var masonry = new Masonry(galleryContainer, {
      itemSelector: '.column',
      percentPosition: true,
      gutter: 10
    });
  });