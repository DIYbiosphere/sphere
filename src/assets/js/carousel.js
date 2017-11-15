$(document).ready(function() {
$('.owl-carousel').owlCarousel({
    center: true,
    items: 2,
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:2,
        }
    }
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
