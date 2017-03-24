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
    var btnSaveChanges = document.getElementById("btnSaveChanges");
    var spans = document.querySelectorAll("#right-menu-wrapper-expense span");


    function buttonListenerExpense(self, category) {
        btnSaveChanges.addEventListener("click", function(event) {
            var isValid = true;

            if (inputDate.valueAsDate == null) {
                document.querySelector(".select-date span").setAttribute("class", "visible");
                isValid = false;
            } else {
                document.querySelector(".select-date span").setAttribute("class", "hidden");
            }
            if (inputAmount.value == "") {
                document.querySelector(".select-amount span").setAttribute("class", "visible");
                isValid = false;
            } else {
                document.querySelector(".select-amount span").setAttribute("class", "hidden");
            }
            if (document.getElementById(category).value == "") {
                console.log("category " + category)
                document.getElementById("span-category").setAttribute("class", "visible");
                isValid = false;
            } else {
                document.getElementById("span-category").setAttribute("class", "hidden");
            }
            if (isValid) {

            }
            event.preventDefault();

        }, false);
    };

    function setDisplay(expense, income, saving) {
        selectExpense.style.display = expense;
        selectIcomes.style.display = income;
        selectSavings.style.display = saving;
    }


    //---------------------------ДОХОДИ----------------------------------------
    buttons[0].addEventListener("click", function(event) {
        console.log(this)

        event = event || window.event;
        Array.prototype.forEach.call(spans, function(elem) {
            elem.setAttribute("class", "hidden");
        });
        setDisplay("none", "block", "none");
        document.querySelector(".radioBtns").style.display = "none";
        document.querySelector(".description textarea[name=description]").placeholder = "Пример: Месечен аванс";
        buttonListenerExpense(this, "select-incomes");
        event.preventDefault();

    });

    //--------------------------РАЗХОДИ-----------------------------------------
    buttons[1].addEventListener("click", function(event) {
        console.log(this)

        event = event || window.event;
        Array.prototype.forEach.call(spans, function(elem) {
            elem.setAttribute("class", "hidden");
        });
        setDisplay("block", "none", "none");
        document.querySelector(".radioBtns").style.display = "none";
        document.querySelector(".description textarea[name=description]").placeholder = "Пример: Сметка за тока";
        buttonListenerExpense(this, "select-expense");
        event.preventDefault();


    });

    //--------------------------СПЕСТЯВАНИЯ-----------------------------------------
    buttons[2].addEventListener("click", function(event) {
        event = event || window.event;
        Array.prototype.forEach.call(spans, function(elem) {
            elem.setAttribute("class", "hidden");
        });
        setDisplay("none", "none", "block");
        document.querySelector(".radioBtns").style.display = "flex";
        document.querySelector(".description textarea[name=description]").placeholder = "Пример: Рожден ден";
        buttonListenerExpense(this, "select-savings");
        event.preventDefault();

    });

})();