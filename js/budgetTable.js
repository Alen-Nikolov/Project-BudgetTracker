(function(){
    var buttonBudget=document.getElementById('changeBudget');
    var overviewBudget=document.getElementById('overviewBudget');
    var hideContentDivs=document.getElementsByClassName('hide-content');
    var inputs=document.querySelectorAll("#budgets .hide-content>input");
    var divsToRemove=document.querySelectorAll('.hide-content > div');
    var inputsInIncome=document.querySelectorAll("#income input");
    //event listener on button Change budget
    buttonBudget.addEventListener("click",function(event){
        event=event||window.event;
        //Hides divs
        Array.prototype.forEach.call(divsToRemove, function(elem){
            elem.style.display="none";
        });
        //Shows the inputs (display: block)
        for(var index=0;index<inputs.length;index++){
            inputs[index].setAttribute("onkeypress","return event.charCode >= 48 && event.charCode <= 57");
            inputs[index].style.display="inline-block";
        }
        buttonBudget.style.backgroundColor="#6BA368";
        overviewBudget.style.backgroundColor="white";
        var divsToRemoveMain=document.getElementsByClassName('hide-content-main');
        Array.prototype.forEach.call(divsToRemoveMain, function(elem){
            elem.style.display="none";
        });
        event.preventDefault();
    }, false);
    //event listener on button Current state
    overviewBudget.addEventListener('click',function(event){
        var inputValue=document.querySelectorAll("#budgets .hide-content>div:last-of-type");
        for(var index=0;index<inputs.length;index++){
            var value=inputs[index].value;
            if(value.length<=0){
                value="0.00";
            }
            inputValue[index].innerHTML=value;            
            inputs[index].style.display="none";
        }
        Array.prototype.forEach.call(divsToRemove, function(elem){
            elem.style.display="block";
        });
        buttonBudget.style.backgroundColor="white";
        overviewBudget.style.backgroundColor="#6BA368"
        event.preventDefault();
    },false);




})();