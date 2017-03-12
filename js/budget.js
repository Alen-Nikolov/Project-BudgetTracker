(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    // $('#mainNav').affix({
    //     offset: {
    //         top: 100
    //     }
    // })

})(jQuery); // End of use strict

//Button for transactions

(function() {
    var transButton = document.getElementById("transBtn");
    var menuRight = document.getElementById("right-menu-wrapper");

    transButton.addEventListener("click", function() {
        menuRight.style.display = "flex";

    }, false);

    function closeMenu(event) {
        menuRight.style.display = "none";
        event.preventDefault()
    };
    var closeIcon = document.querySelector(".right-menu-header span");
    var closeArea = document.querySelector("#right-menu-wrapper .close-area");
    console.log(closeIcon)
    console.log(closeArea)

    closeIcon.addEventListener("click", closeMenu, false);
    closeArea.addEventListener("click", closeMenu, false);

    var buttons = document.querySelectorAll(".buttons a");
    console.log(buttons)
    Array.prototype.forEach.call(buttons, function(elem) {
        elem.addEventListener("click", function(event) {
            event = event || window.event;
            event.preventDefault();
        }, false);

    })


})();