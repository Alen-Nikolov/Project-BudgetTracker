(function () {
    var buttonBudget = document.getElementById('changeBudget');
    var overviewBudget = document.getElementById('overviewBudget');
    var divsToRemoveMain = document.querySelectorAll('.hide-content-main>div');
    var divsToRemove = document.querySelectorAll('.hide-content > div');
    var inputs = document.querySelectorAll(".hide-content>input");
    var inputsInIncome = document.querySelectorAll("#income input");
    var inputsInExpenses = document.querySelectorAll("#expense input");
    var aggregateDivs = document.querySelectorAll('.hide-content-main>div:last-of-type');
    var data = [];
    //evet listener on input value (keypress)
    //calculating all income, 2 items-salary and money from last month
    var sumOfIncomeDivs = 0;
    Array.prototype.forEach.call(inputsInIncome, function (elem) {
        elem.addEventListener("keyup", function () {
            sumOfIncomeDivs = Number(inputsInIncome[0].value) + Number(inputsInIncome[1].value);
            if (!isNaN(sumOfIncomeDivs.toFixed(2))) {
                $('.income-aggregate').text(sumOfIncomeDivs.toFixed(2));
                data = [aggregateDivs[0].innerHTML, aggregateDivs[1].innerHTML, aggregateDivs[2].innerHTML];
                reWriteTheChart(data);
            }
        }, false);
    });
    //Calculating all expenses(15)
    var sumOfExpensesDivs = 0;
    Array.prototype.forEach.call(inputsInExpenses, function (elem) {
        elem.addEventListener("keyup", function () {
            var sum = 0;
            for (var index = 0; index < inputsInExpenses.length; index++) {
                sum += Number(inputsInExpenses[index].value);
            }
            sumOfExpensesDivs = sum;
            if (!isNaN(sumOfExpensesDivs.toFixed(2))) {
                $('.expenses-aggregate').text(sumOfExpensesDivs.toFixed(2));
                data = [aggregateDivs[0].innerHTML, aggregateDivs[1].innerHTML, aggregateDivs[2].innerHTML];
                reWriteTheChart(data);
            }
        }, false);
    });

    //event listener on button Change budget
    buttonBudget.addEventListener("click", function (event) {
        event = event || window.event;
        var credits = document.querySelectorAll("#creditExpense input[type=text]");
        var savings=document.querySelectorAll("#savings input[type=text]");
        buttonBudget.style.backgroundColor = "#6BA368";
        overviewBudget.style.backgroundColor = "white";
        divsToRemove = document.querySelectorAll('.hide-content > div');
        inputs = document.querySelectorAll(".hide-content>input");
        
        //adding event listeners to credit inputs
        var sumOfCredits = 0;
        Array.prototype.forEach.call(credits, function (elem) {
            elem.addEventListener("keyup", function () {
                var sum = 0;
                for (var index = 0; index < credits.length; index++) {
                    sum += Number(credits[index].value);
                }
                sumOfCredits = sum;
                if (!isNaN(sumOfCredits.toFixed(2))) {
                    $('.credit-aggregate').text(sumOfCredits.toFixed(2));
                }
            }, false);
        });

        //adding event listeners to savings input
        var sumOfSavings = 0;
        Array.prototype.forEach.call(savings, function (elem) {

            elem.addEventListener("keyup", function () {
                var sum = 0;
                for (var index = 0; index < savings.length; index++) {
                    sum += Number(savings[index].value);
                }
                sumOfSavings = sum;
                if (!isNaN(sumOfSavings.toFixed(2))) {
                    $('.savings-aggregate').text(sumOfSavings.toFixed(2));
                }
            }, false);
        });

        //Hides main divs
        for (var index = 0; index < divsToRemoveMain.length; index++) {
            divsToRemoveMain[index].style.display = "none";
        }
        Array.prototype.forEach.call(aggregateDivs, function (elem) {
            elem.style.fontSize = "1.8em";
            elem.style.float = "right";
        });
        //Shows the sum of divs 
        var sumOfDivs = document.querySelectorAll("#budgets .hide-content-main>div:last-of-type");
        Array.prototype.forEach.call(sumOfDivs, function (elem) {
            elem.style.display = "block";
        });
        //Hides divs
        Array.prototype.forEach.call(divsToRemove, function (elem) {
            elem.style.display = "none";
        });

        for (var index = 0; index < inputs.length; index++) {
            inputs[index].setAttribute("onkeypress", "return event.charCode == 46 || (event.charCode >= 48 &&  event.charCode <= 57)");
            inputs[index].style.display = "inline-block";
        }
        event.preventDefault();
    }, false);


    //event listener on button Current state
    overviewBudget.addEventListener('click', function (event) {
        event = event || window.event;
        buttonBudget.style.backgroundColor = "white";
        overviewBudget.style.backgroundColor = "#6BA368"

        Array.prototype.forEach.call(aggregateDivs, function (elem) {
            elem.style.fontSize = "1em";
        })
        var inputValue = document.querySelectorAll("#budgets .hide-content>div:last-of-type");
        for (var index = 0; index < inputs.length; index++) {
            var value = Number(inputs[index].value).toFixed(2);
            inputValue[index].innerHTML = value;
            inputs[index].style.display = "none";
        }

        Array.prototype.forEach.call(divsToRemoveMain, function (elem) {
            elem.style.display = "block";
        });

        Array.prototype.forEach.call(divsToRemove, function (elem) {
            elem.style.display = "block";
        });

        function addValueToBudget(inputs, cb) {
            for (var index = 0; index < inputs.length; index++) {
                var value = +inputs[index].value;
                cb(value, index);
            };
        };
        var budgetExpensesBindToUser = currentUser.addPlannedValueToBudgetExpenses.bind(currentUser);
        var budgetIncomesBindToUser = currentUser.addPlannedValueToBudgetIncomes.bind(currentUser);

        addValueToBudget(inputsInIncome, budgetIncomesBindToUser);
        addValueToBudget(inputsInExpenses, budgetExpensesBindToUser);

        event.preventDefault();
    }, false);


})();