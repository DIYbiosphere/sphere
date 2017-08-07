$(document).ready(function() {
$('.owl-carousel').owlCarousel({
    center: true,
    loop:true,
    margin:0,
});

    var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn').click(function() {
        owl.trigger('prev.owl.carousel');
    })

    $('.beginningBtn').click(function() {
        owl.trigger('to.owl.carousel', [0]);
    })

});

$('.hero .image').dimmer('show');
