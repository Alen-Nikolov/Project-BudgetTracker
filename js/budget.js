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


(function() {
    // make elements 
    function makeElement(type, attributes) {
        var element = document.createElement(type);
        if (attributes) {
            for (var attr in attributes) {
                if (attributes.hasOwnProperty(attr)) {
                    if (attr == "text") {
                        element.innerHTML = attributes[attr];
                    } else {
                        element.setAttribute(attr, attributes[attr])
                    }
                }
            }
        }
        return element;
    };

    //Button for  new transactions, new credit and new saving 
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



    var allReceivedValueInBudgetTableExpense = document.querySelectorAll("#expense .price-bold:first-child");
    var allReceivedValueInBudgetTableIncome = document.querySelectorAll("#income .price-bold:first-child");
    var allReceivedValueInBudgetTableSaving = document.querySelectorAll("#savings .price-bold:first-child");

    function drawBudgetTable() {
        //drawing the incomes
        var sumIncomes = 0;
        var aggregateIncomeBold = document.querySelector("#income .price-bold");
        for (var index = 0; index < allReceivedValueInBudgetTableIncome.length; index++) {
            allReceivedValueInBudgetTableIncome[index].innerHTML = currentUser.budgets[0].incomes[index].received.toFixed(2);
            sumIncomes += Number(currentUser.budgets[0].incomes[index].received.toFixed(2));
            aggregateIncomeBold.innerHTML = sumIncomes.toFixed(2);
        };

        //drawing the expenses
        var sumExpenses = 0;
        var aggregateExpenseBold = document.querySelector("#expense .price-bold");
        for (var index = 0; index < allReceivedValueInBudgetTableExpense.length; index++) {
            allReceivedValueInBudgetTableExpense[index].innerHTML = currentUser.budgets[0].expenses[index].received.toFixed(2);
            sumExpenses += Number(currentUser.budgets[0].expenses[index].received.toFixed(2));
            aggregateExpenseBold.innerHTML = sumExpenses.toFixed(2);
        };

        //drawing savings
        var aggregateSavingBold = document.querySelector("#savings .price-bold");
        for (var index = 0; index < allReceivedValueInBudgetTableSaving.length; index++) {
            allReceivedValueInBudgetTableSaving[index].innerHTML = currentUser.budgets[0].savings[index].received.toFixed(2);
            aggregateSavingBold.innerHTML = currentUser.budgets[0].savings[index].received.toFixed(2);
        };
        //drawing credit
        var sumLeftoToPay = 0;
        var sumTotal = 0;
        var sumPercent = 0;

        var leftToPayValuesInBudgetTableCredits = document.querySelectorAll("#credits .leftToPay");
        var totalValuesInBudgetTableCredits = document.querySelectorAll("#credits .total");
        var percentValuesInBudgetTableCredits = document.querySelectorAll("#credits .percent");

        var aggregateCreditsLeftToPayAll = document.querySelector("#credits .allLeftToPay");
        var aggregateCreditsTotalAll = document.querySelector("#credits .allTotal");
        var aggregateCreditsPercentAll = document.querySelector("#credits .allPercent");


        for (var index = 0; index < leftToPayValuesInBudgetTableCredits.length; index++) {
            leftToPayValuesInBudgetTableCredits[index].innerHTML = currentUser.budgets[0].credits[index].leftToPay().toFixed(2);
            totalValuesInBudgetTableCredits[index].innerHTML = currentUser.budgets[0].credits[index].total.toFixed(2);
            percentValuesInBudgetTableCredits[index].innerHTML = currentUser.budgets[0].credits[index].progressInPercent().toFixed(2) + "%";

            sumLeftoToPay += Number(currentUser.budgets[0].credits[index].leftToPay().toFixed(2));
            aggregateCreditsLeftToPayAll.innerHTML = sumLeftoToPay.toFixed(2);

            sumTotal += Number(currentUser.budgets[0].credits[index].total.toFixed(2));
            aggregateCreditsTotalAll.innerHTML = sumTotal.toFixed(2);

            sumPercent += Number(currentUser.budgets[0].credits[index].progressInPercent().toFixed(2));
            aggregateCreditsPercentAll.innerHTML = sumPercent.toFixed(2) + "%";
        };

    };
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
        if (seletedCategory == "") {
            document.getElementById("span-category").setAttribute("class", "visible");
            isValid = false;
        } else {
            document.getElementById("span-category").setAttribute("class", "hidden");
        }
        if (selectedButn.id == "transExpense") {
            if (selectExpense.options[selectExpense.selectedIndex].parentNode.label == "Разходи") {
                selectedButn.value = "expenses";
            } else {
                selectedButn.value = "credits";
            }
        }

        if (isValid) {
            if (inputRadio[0].checked == "") {
                inputAmount.value *= -1;
            }
            var transaction = new Transaction(inputDate.value, inputAmount.value, textareaComment.value, selectedButn.value, seletedCategory);
            currentUser.addTransaction(transaction);
        }




        drawBudgetTable();
        event.preventDefault();

    }, false);

    //add credit to budget
    var saveChangesCredits = document.getElementById("saveChangesCredits");
    var inputBankName = document.querySelector("#right-menu-wrapper-credit input[name=bankName]");
    var inputMonthlyFee = document.querySelector("#right-menu-wrapper-credit input[name=monthlyFee]");
    var inputFeesLeftToPay = document.querySelector("#right-menu-wrapper-credit input[name=feesLeftToPay]");
    var inputUnpaidFees = document.querySelector("#right-menu-wrapper-credit input[name=unpaidFees]");
    var inputMaturityDate = document.querySelector("#right-menu-wrapper-credit input[name=maturityDate]");

    saveChangesCredits.addEventListener("click", function() {
        var isValid = true;
        console.log("banani")
            //validation!!!!!
        if (inputBankName.value == "") {
            document.querySelector(".bank-name span").setAttribute("class", "visible");
            console.log(document.querySelector(".bank-name span"))
            isValid = false;
        } else {
            document.querySelector(".bank-name span").setAttribute("class", "hidden");
        }
        if (inputMonthlyFee.value == "") {
            document.querySelector(".monthlyFee span").setAttribute("class", "visible");
            isValid = false;
        } else {
            document.querySelector(".monthlyFee span").setAttribute("class", "hidden");
        }
        if (inputFeesLeftToPay.value == "") {
            document.querySelector(".feesLeftToPay span").setAttribute("class", "visible");
            isValid = false;
        } else {
            document.querySelector(".feesLeftToPay span").setAttribute("class", "hidden");
        }
        if (inputMaturityDate.value == "") {
            document.querySelectorAll(".maturityDate span")[0].setAttribute("class", "visible");
            document.querySelectorAll(".maturityDate span")[1].setAttribute("class", "hidden");

            isValid = false;
        } else if (inputMaturityDate.value <= 0 || inputMaturityDate.value > 31) {
            document.querySelectorAll(".maturityDate span")[1].setAttribute("class", "visible");
            document.querySelectorAll(".maturityDate span")[0].setAttribute("class", "hidden");

            isValid = false;
        } else {
            document.querySelectorAll(".maturityDate span")[0].setAttribute("class", "hidden");
            document.querySelectorAll(".maturityDate span")[1].setAttribute("class", "hidden");
        }

        if (isValid) {
            var credit = new Credit(inputBankName.value, inputMonthlyFee.value, inputFeesLeftToPay.value, inputUnpaidFees.value, inputMaturityDate.value);
            currentUser.addCredit(credit);
        }

        function addCreditsToBudgetTable() {
            var parent = document.querySelector("#credits .container");
            console.log(parent)
            var fragment = document.createDocumentFragment();

            var div = makeElement("div", {
                class: "row table"
            });

            var div1 = makeElement("div", {
                class: "col-lg-6 col-md-offset-3"
            });
            div.appendChild(div1);

            var div2 = makeElement("div", {
                class: "row main-row"
            });
            div1.appendChild(div2);

            var div3 = makeElement("div", {
                class: "col-lg-8"
            });
            div2.appendChild(div3)

            var h3InDiv3 = makeElement("h3");
            h3InDiv3.innerText = inputBankName.value;
            div3.appendChild(h3InDiv3);

            var div4 = makeElement("div", {
                class: "row border-red last"
            });
            div1.appendChild(div4);

            var div5 = makeElement("div", {
                class: "col-lg-8"
            });
            div4.appendChild(div5);

            var h4InDiv5 = makeElement("h4", {
                class: "percent"
            });
            h4InDiv5.innerText = credit.progressInPercent() + "%";
            console.log(credit.progressInPercent())
            div5.appendChild(h4InDiv5);

            var div6 = makeElement("div", {
                class: "col-lg-4 text-color"
            });

            div4.appendChild(div6);

            var div7 = makeElement("div", {
                class: "col-lg-8"
            });
            div7.innerText = "остават:"
            div6.appendChild(div7);

            var div8 = makeElement("div", {
                class: "col-lg-4 text-right price-bold leftToPay"
            });
            div8.innerText = credit.leftToPay();
            div6.appendChild(div8);
            var div9 = makeElement("div", {
                class: "col-lg-8"
            });
            div9.innerText = "от общо:"
            div6.appendChild(div9);

            var div10 = makeElement("div", {
                class: "col-lg-4 text-right total"
            });
            div10.innerText = credit.total;
            div6.appendChild(div10);

            fragment.appendChild(div);
            parent.appendChild(fragment);

            //add option to select for credits
            var option = makeElement("option", {
                value: inputBankName.value
            });
            option.innerText = inputBankName.value;
            var oprionGroup = document.querySelectorAll("#select-expenses optgroup");
            oprionGroup[1].appendChild(option);
        };
        addCreditsToBudgetTable()
        drawBudgetTable();
    }, false);

})();