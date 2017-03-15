(function($) {
    "use strict"; // Start of use strict


    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
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
    var menuRightExpense = document.getElementById("right-menu-wrapper-expense");
    var creditButton = document.getElementById("addCredit");
    var menuRightCredit = document.getElementById("right-menu-wrapper-credit");

    transButton.addEventListener("click", function() {
        menuRightExpense.style.display = "flex";
    }, false);
    creditButton.addEventListener("click", function() {
        menuRightCredit.style.display = "flex";
    }, false);

    function closeMenuExpense(event) {
        menuRightExpense.style.display = "none";
        event.preventDefault()
    };

    function closeMenuCredit(event) {
        menuRightCredit.style.display = "none";
        event.preventDefault()
    };
    var closeIcon = document.querySelector(".right-menu-header span");
    var closeArea = document.querySelector("#right-menu-wrapper-expense .close-area");

    closeIcon.addEventListener("click", closeMenuExpense, false);
    closeArea.addEventListener("click", closeMenuExpense, false);
    closeIcon.addEventListener("click", closeMenuCredit, false);
    closeArea.addEventListener("click", closeMenuCredit, false);

    var buttons = document.querySelectorAll(".buttons a");
    console.log(buttons)
    Array.prototype.forEach.call(buttons, function(elem) {
        elem.addEventListener("click", function(event) {
            event = event || window.event;
            event.preventDefault();
        }, false);

    })


})();