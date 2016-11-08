(function($) {

    $.fn.navBeer = function () {
        var
            navBeerBrand    = jQuery('.navbeer-brand', this),
            navBeerSandwich = jQuery('.navbeer-sandwich', this),
            navBeerMenu     = jQuery('.navbeer-menu', this),
            menuWidthCompensation = 30, // Try change this if the navbar is collapsing too early or to later.
            navBeerWidth    = navBeerBrand.width() + navBeerMenu.width() + menuWidthCompensation,
            navBeerCollapse = function () {
                if (jQuery(window).width() < navBeerWidth) {
                    // Get the navbar items and put them into the sandwich menu.
                    navBeerMenu
                        .find('.navbeer-collapsable-item')
                        .appendTo(navBeerSandwich.find('.navbeer-sandwich-content'));
                    navBeerSandwich.show();
                } else {
                    // Give the items back to the navbar.
                    navBeerSandwich
                        .hide()
                        .find('.navbeer-collapsable-item ')
                        .prependTo(navBeerMenu);
                    navBeerMenu.show();
                }
            }
        ;
        // Check to collapse on page load.
        navBeerCollapse();
        // ...or when window resize.
        jQuery(window).on('resize', function(){
            navBeerCollapse();
        });
    };

}(jQuery));
