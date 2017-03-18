(function($) {
    "use strict"; // Start of use strict
      // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
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

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });


})(jQuery); // End of use strict

//Button for transactions

(function() {
    var transButton = document.getElementById("transBtn");
    var menuRightPayment = document.getElementById("right-menu-wrapper-expense");
    var creditButton = document.getElementById("addCredit");
    var menuRightCredit = document.getElementById("right-menu-wrapper-credit");
    var savingsButton = document.getElementById("addSavings");
    var menuRightSavings = document.getElementById("right-menu-wrapper-savings");

    transButton.addEventListener("click", function() {
        menuRightPayment.style.display = "flex";
    }, false);
    creditButton.addEventListener("click", function() {
        menuRightCredit.style.display = "flex";
    }, false);
    savingsButton.addEventListener("click", function() {
        menuRightSavings.style.display = "flex";
    }, false);

    function closeMenu(event) {
        menuRightPayment.style.display = "none";
        menuRightCredit.style.display = "none";
        menuRightSavings.style.display = "none";
        event.preventDefault()
    };

    var closeIcon = document.querySelectorAll(".close-icon");
    var closeArea = document.querySelectorAll(".close-area");

    Array.prototype.forEach.call(closeIcon, function(elem) {
        elem.addEventListener("click", closeMenu, false);
    });
    Array.prototype.forEach.call(closeArea, function(elem) {
        elem.addEventListener("click", closeMenu, false);
    });

    var buttons = document.querySelectorAll(".buttons a");
    Array.prototype.forEach.call(buttons, function(elem) {
        elem.addEventListener("click", function(event) {
            event = event || window.event;
            event.preventDefault();
        }, false);

    })


})();