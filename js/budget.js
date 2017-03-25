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

//Button for  new transactions, new credit and new saving 
(function() {
    var transButton = document.getElementById("transBtn");
    var menuRightTrans = document.getElementById("right-menu-wrapper-expense");
    var creditButton = document.getElementById("addCredit");
    var menuRightCredit = document.getElementById("right-menu-wrapper-credit");
    var savingsButton = document.getElementById("addSavings");
    var menuRightSavings = document.getElementById("right-menu-wrapper-savings");
    var buttons = document.querySelectorAll(".buttons button");
    var inputDate = document.querySelector('.form-group .select-date input');
    var inputAmount = document.querySelector('.form-group .select-amount input');
    var textareaComment = document.querySelector(".description textarea");


    transButton.addEventListener("click", function() {
        menuRightTrans.style.display = "flex";
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
        menuRightTrans.style.display = "none";
        menuRightCredit.style.display = "none";
        menuRightSavings.style.display = "none";
        event.preventDefault()
    };

    //Changing the transaction type and saving the input data
    var selectExpense = document.getElementById("select-expenses");
    var selectIcomes = document.getElementById("select-incomes");
    var selectSavings = document.getElementById("select-savings");
    var btnSaveChanges = document.getElementById("btnSaveChanges");
    var spans = document.querySelectorAll("#right-menu-wrapper-expense span");
    var inputRadio = document.querySelectorAll(".radioBtns input[type=radio]");
    console.log(inputRadio)
    console.log(inputRadio[0].value)
    console.log(inputRadio[0].checked == "")
    console.log(inputRadio[1].checked == "")

    function setDisplay(expense, income, saving) {
        selectExpense.style.display = expense;
        selectIcomes.style.display = income;
        selectSavings.style.display = saving;
    };

    var seletedCategory = "";
    var selectedButn = buttons[1];

    //---------------------------ДОХОДИ----------------------------------------
    buttons[0].addEventListener("click", function(event) {
        event = event || window.event;
        seletedCategory = "";
        selectedButn = this;
        Array.prototype.forEach.call(buttons, function(elem) {
            elem.classList.remove("selected-btn");
        });
        this.classList.add("selected-btn");
        Array.prototype.forEach.call(spans, function(elem) {
            elem.setAttribute("class", "hidden");
        });
        setDisplay("none", "block", "none");
        document.querySelector(".radioBtns").style.display = "none";
        document.querySelector(".description textarea[name=description]").placeholder = "Пример: Месечен аванс";

        event.preventDefault();
    });

    //--------------------------РАЗХОДИ-----------------------------------------
    buttons[1].addEventListener("click", function(event) {
        event = event || window.event;
        seletedCategory = "";
        selectedButn = this;
        Array.prototype.forEach.call(buttons, function(elem) {
            elem.classList.remove("selected-btn");
        });
        this.classList.add("selected-btn");
        Array.prototype.forEach.call(spans, function(elem) {
            elem.setAttribute("class", "hidden");
        });
        setDisplay("block", "none", "none");
        document.querySelector(".radioBtns").style.display = "none";
        document.querySelector(".description textarea[name=description]").placeholder = "Пример: Сметка за тока";
        event.preventDefault();
    });

    //--------------------------СПЕСТЯВАНИЯ-----------------------------------------
    buttons[2].addEventListener("click", function(event) {
        event = event || window.event;
        seletedCategory = "";
        selectedButn = this;
        Array.prototype.forEach.call(buttons, function(elem) {
            elem.classList.remove("selected-btn");
        });
        this.classList.add("selected-btn");
        Array.prototype.forEach.call(spans, function(elem) {
            elem.setAttribute("class", "hidden");
        });
        setDisplay("none", "none", "block");
        document.querySelector(".radioBtns").style.display = "flex";
        document.querySelector(".description textarea[name=description]").placeholder = "Пример: Рожден ден";

        event.preventDefault();

    });


    var allSelects = document.querySelectorAll(".categoryView select");
    Array.prototype.forEach.call(allSelects, function(elem) {
        elem.addEventListener("change", function() {
            seletedCategory = elem.value;
        }, false);
    });

    var allReceivedValueInBudgetTableExpense = document.querySelectorAll("#expense .price-bold");
    var allReceivedValueInBudgetTableIncome = document.querySelectorAll("#income .price-bold");
    var allReceivedValueInBudgetTableSaving = document.querySelectorAll("#bugdetSavings .price-bold");

    btnSaveChanges.addEventListener("click", function(event) {
        var isValid = true;
        // console.log("banani")
        // console.log(selectedButn)
        // console.log(seletedCategory)
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
        if (seletedCategory == "") {
            document.getElementById("span-category").setAttribute("class", "visible");
            isValid = false;
        } else {
            document.getElementById("span-category").setAttribute("class", "hidden");
        }

        if (isValid) {
            if (inputRadio[0].checked == "") {
                inputAmount.value *= -1;
            }
            var transaction = new Transaction(inputDate.value, inputAmount.value, textareaComment.value, selectedButn, seletedCategory);
            currentUser.addTransaction(transaction);
            // console.log(inputAmount.value)
        }


        for (var index = 0; index < allReceivedValueInBudgetTableExpense.length - 1; index++) {
            console.log(allReceivedValueInBudgetTableExpense[index + 1].innerHTML)
            console.log(currentUser.getReceivedValueFromBudget(transaction.type.value)[index + 1].name)

        }
        event.preventDefault();

    }, false);

})();