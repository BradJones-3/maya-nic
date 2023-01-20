var carousel = document.getElementById('carousel');
var hammer = new Hammer(carousel);

hammer.on('swipeleft', function() {
    $('#carousel').carousel('next');
});

hammer.on('swiperight', function() {
    $('#carousel').carousel('prev');
});