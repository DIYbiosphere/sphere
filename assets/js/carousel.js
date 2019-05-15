$(document).ready(function() {
$('.owl-carousel').owlCarousel({
    center: true,
    items: 4,
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayHoverPause: true,
    smartSpeed: 300,
    autoplayTimeout: 7000,
    responsive:{
        0:{
            items:1,
        },
        700:{
            items:2,
        },
        1000:{
            items:3,
        },
        1400:{
            items:4,
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
