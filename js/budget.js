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
    var buttons = document.querySelectorAll(".buttons button");
    var inputDate = document.querySelector('.form-group .select-date input');
    var inputAmount = document.querySelector('.form-group .select-amount input');


    transButton.addEventListener("click", function() {
        menuRightPayment.style.display = "flex";
        buttons[1].focus();
        inputDate.valueAsDate = new Date();
    }, false);

    creditButton.addEventListener("click", function() {
        menuRightCredit.style.display = "flex";
    }, false);

    savingsButton.addEventListener("click", function() {
        menuRightSavings.style.display = "flex";
    }, false);

    var closeIcon = document.querySelectorAll(".close-icon");
    var closeArea = document.querySelectorAll(".close-area");

    Array.prototype.forEach.call(closeIcon, function(elem) {
        elem.addEventListener("click", closeMenu, false);
    });
    Array.prototype.forEach.call(closeArea, function(elem) {
        elem.addEventListener("click", closeMenu, false);
    });

    function closeMenu(event) {
        menuRightPayment.style.display = "none";
        menuRightCredit.style.display = "none";
        menuRightSavings.style.display = "none";
        event.preventDefault()
    };

    //Changing the transaction type
    var selectExpense = document.getElementById("select-expense");
    var selectIcomes = document.getElementById("select-incomes");
    var selectSavings = document.getElementById("select-savings");
    buttons[0].addEventListener("click", function(event) {
        event = event || window.event;
        selectExpense.style.display = "none";
        selectIcomes.style.display = "block";
        selectSavings.style.display = "none";
        document.querySelector(".radioBtns").style.display = "none";
        document.querySelector(".description textarea[name=description]").placeholder = "Пример: Месечен аванс";
        event.preventDefault();

    });
    buttons[1].addEventListener("click", function(event) {
        event = event || window.event;
        selectExpense.style.display = "block";
        selectIcomes.style.display = "none";
        selectSavings.style.display = "none";
        document.querySelector(".radioBtns").style.display = "none";
        document.querySelector(".description textarea[name=description]").placeholder = "Пример: Сметка за тока";
        event.preventDefault();

    });
    buttons[2].addEventListener("click", function(event) {
        event = event || window.event;
        selectExpense.style.display = "none";
        selectIcomes.style.display = "none";
        selectSavings.style.display = "block";
        document.querySelector(".radioBtns").style.display = "flex";
        document.querySelector(".description textarea[name=description]").placeholder = "Пример: Рожден ден";
        event.preventDefault();

    });
    Array.prototype.forEach.call(buttons, function(elem) {
        elem.addEventListener("click", function(event) {

        }, false);
    });
    var btnChooseCategory = document.getElementById("btnChooseCategory");
    inputAmount.addEventListener("keyup", function() {
        if (inputAmount.value > 0 && inputDate.value !== "") {
            btnChooseCategory.removeAttribute("disabled");
        } else {
            btnChooseCategory.setAttribute("disabled", "disabled");
        }
    }, false);

    btnChooseCategory.addEventListener("click", function() {
        console.log("banani")
    }, false)
})();