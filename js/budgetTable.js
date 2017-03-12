(function() {
    var buttonBudget = document.getElementById('changeBudget');
    var overviewBudget = document.getElementById('overviewBudget');
    var divsToRemoveMain = document.querySelectorAll('#budgets .hide-content-main>div');
    var divsToRemove = document.querySelectorAll('.hide-content > div');
    var inputs = document.querySelectorAll("#budgets .hide-content>input");
    var inputsInIncome = document.querySelectorAll("#income input");
    // var hideContentDivs = document.getElementsByClassName('hide-content');

    //evet listener on input value (keypress)
    var sumOfIncomeDivs = 0;
    Array.prototype.forEach.call(inputsInIncome, function(elem) {
        elem.addEventListener("keypress", function(event) {
            // sumOfIncomeDivs = elem.target.value + elem.target.value;
        }, false);
    });

    //event listener on button Change budget
    buttonBudget.addEventListener("click", function(event) {
        event = event || window.event;
        buttonBudget.style.backgroundColor = "#6BA368";
        overviewBudget.style.backgroundColor = "white";
        //Hides main divs
        for (var index = 0; index < divsToRemoveMain.length; index++) {
            divsToRemoveMain[index].style.display = "none";
        }

        //Shows the sum of divs 
        var sumOfDivs = document.querySelectorAll("#budgets .hide-content-main>div:last-of-type");
        Array.prototype.forEach.call(sumOfDivs, function(elem) {
            elem.style.display = "block";
        });
        //Hides divs
        Array.prototype.forEach.call(divsToRemove, function(elem) {
            elem.style.display = "none";
        });

        for (var index = 0; index < inputs.length; index++) {
            inputs[index].setAttribute("onkeypress", "return event.charCode == 46 || (event.charCode >= 48 &&  event.charCode <= 57)");
            inputs[index].style.display = "inline-block";
        }
        event.preventDefault();
    }, false);


    //event listener on button Current state
    overviewBudget.addEventListener('click', function(event) {
        event = event || window.event;
        buttonBudget.style.backgroundColor = "white";
        overviewBudget.style.backgroundColor = "#6BA368"

        var inputValue = document.querySelectorAll("#budgets .hide-content>div:last-of-type");
        for (var index = 0; index < inputs.length; index++) {
            var value = inputs[index].value;
            if (value.length <= 0) {
                value = "0.00";
            }
            inputValue[index].innerHTML = value;
            inputs[index].style.display = "none";
        }

        Array.prototype.forEach.call(divsToRemoveMain, function(elem) {
            elem.style.display = "block";
        });

        Array.prototype.forEach.call(divsToRemove, function(elem) {
            elem.style.display = "block";
        });

        event.preventDefault();
    }, false);

})();