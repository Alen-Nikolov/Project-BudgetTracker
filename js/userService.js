function User(username, password) {
    this.username = username;
    this.password = password;
    this.budgets = [new Budget(this, new Date())];

};

var userManegment = (function() {

    var users = [new User("Moni", "1234"), new User("Alen", "1234"), new User("", "")];

    return {
        addUser: function(user) {
            if (user instanceof User) {
                if (!users.some(function(u) {
                        return u.username === user.username;
                    })) {
                    users.push(user);
                }
            }
        },
        loginUser: function(username, password) {
            return users.some(function(u) {
                return (u.username === username) &&
                    (u.password === password);
            });
        },
        displayUsers: function() {
            return users;
        },
        getUser: function(username) {
            return users.find(function(u) {
                return u.username === username;
            })
        }
    }
})();


// --------------------------------------USER METHODS--------------------------------------------

//-------------------------planned value --------------------
User.prototype.addPlannedValueToBudgetIncomes = function(value, number) {
    this.budgets[0].addPlannedValueToIncomes(value, number);
};
User.prototype.addPlannedValueToBudgetExpenses = function(value, number) {
    // this.budgets[0].addPlannedValueToExpenses(value, number);
    this.budgets[0].expenses[number].planned = value;
};
User.prototype.addPlannedValueToBudgetSavings = function(value, number) {
    this.budgets[0].addPlannedValueToSavings(value, number);
    //     this.budgets[0].expenses[number].planned = value;
};
User.prototype.addPlannedValueToBudgetCredits = function(value, number) {
    this.budgets[0].addPlannedValueToCredits(value, number);
    // this.budgets[0].expenses[number].planned = value;
};

User.prototype.getReceivedValueFromBudget = function(transType) {
    return this.budgets[0].getReceivedValue(transType);
}
User.prototype.addCredit = function(bankName, monthFee, feesLeftToPay, unpaidFees, maturityDate) {
    // this.budgets[0].addCredit(bankName, monthFee, feesLeftToPay, unpaidFees, maturityDate)
    this.budgets[0].credits.push(new Credit(bankName, monthFee, feesLeftToPay, unpaidFees, maturityDate));
};

User.prototype.addSaving = function(savings) {
    this.budgets[0].savings.push(savings);
};

User.prototype.addTransaction = function(transaction) {
    this.budgets[0].addTransaction(transaction);
};

User.prototype.createNewBudget = function() {
    var newBudget = new Budget(this, new Date());
    newBudget.credits = this.budgets[this.budgets.length - 1].credits;
    newBudget.savings = this.budgets[this.budgets.length - 1].savings;

    function fill(array) {
        for (var index = 0; index < array.length; index++) {
            array[index].planned = 0;
            array[index].initialAmount += array[index].received;
            array[index].received = 0;
        };
    }
    fill(newBudget.credits);
    fill(newBudget.savings);

    this.budgets.push(newBudget);


};

// ---------------------------------------BUDGET CONSRUCTOR----------------------------------------
function Budget(user, date) {
    this.user = user;
    this.date = date;

    this.incomes = [{
        name: "salary",
        planned: 0,
        received: 0
    }, {
        name: "fromLastMonth",
        planned: 0,
        received: 0
    }];

    this.expenses = [{
        name: "utilityBills",
        planned: 0,
        received: 0
    }, {
        name: "home",
        planned: 0,
        received: 0
    }, {
        name: "foodAndSupplies",
        planned: 0,
        received: 0
    }, {
        name: "transport",
        planned: 0,
        received: 0
    }, {
        name: "clothesAndShoes",
        planned: 0,
        received: 0
    }, {
        name: "personal",
        planned: 0,
        received: 0
    }, {
        name: "entertainment",
        planned: 0,
        received: 0
    }, {
        name: "eatingOut",
        planned: 0,
        received: 0
    }, {
        name: "education",
        planned: 0,
        received: 0
    }, {
        name: "gifts",
        planned: 0,
        received: 0
    }, {
        name: "sports",
        planned: 0,
        received: 0
    }, {
        name: "travelling",
        planned: 0,
        received: 0
    }, {
        name: "medical",
        planned: 0,
        received: 0
    }, {
        name: "pets",
        planned: 0,
        received: 0
    }, {
        name: "other",
        planned: 0,
        received: 0
    }];
    this.credits = [];
    this.savings = [{ name: "unexpectedExpense", planned: 0, received: 0 }];
    this.transactions = [];
};
Budget.prototype.addPlannedValueToExpenses = function(value, number) {
    this.expenses[number].planned = value;
};
Budget.prototype.addPlannedValueToIncomes = function(value, number) {
    this.incomes[number].planned = value;
};
Budget.prototype.addPlannedValueToSavings = function(value, number) {
    this.savings[number].planned = value;
};
Budget.prototype.addPlannedValueToCredits = function(value, number) {
    this.credits[number].planned = value;
};
Budget.prototype.addTransaction = function(transaction) {
    this.transactions.push(transaction);
    for (var index = 0; index < this[transaction.type.value].length; index++) {
        if (this[transaction.type.value][index].name == transaction.categoryValue) {
            this[transaction.type.value][index].received += Number(transaction.amount);
            // console.log(this[transaction.type.value][index].received);
        }
    }
};
Budget.prototype.getReceivedValue = function(transType) {
    return this[transType];
}

// ----------------------------------------CREDIT CONSRUCTOR---------------------------------------

function Credit(bankName, monthFee, feesLeftToPay, unpaidFees, maturityDate) {
    this.bankName = bankName;
    this.monthlyFee = monthFee;
    this.feesLeftToPay = feesLeftToPay;
    this.unpaidFees = unpaidFees;
    this.maturityDate = maturityDate;
    this.planned = monthFee;
    this.received = 0;
};
// ----------------------------------------SAVINGS CONSRUCTOR---------------------------------------

function Saving(purpose, initialAmount, desiredAmount, endDate) {
    this.startDate = new Date();
    this.purpose = purpose;
    this.initialAmount = initialAmount;
    this.desiredAmount = desiredAmount;
    this.endDate = endDate;
    this.planned = 0;
    this.received = 0;

    this.monthlyPayment = this.calculateMonthlyPayment();
};

Saving.prototype.calculateMonthlyPayment = function() {

    var months;
    months = (this.endDate.getFullYear() - this.startDate.getFullYear()) * 12;
    months -= this.startDate.getMonth() + 1;
    months += this.endDate.getMonth();
    months <= 0 ? 0 : months;

    return Math.round((this.desiredAmount - this.initialAmount) / months);

};
// ----------------------------------------TRANSACTION CONSRUCTOR---------------------------------------

function Transaction(date, amount, comment, type, categoryValue) {
    this.date = date;
    this.amount = amount;
    this.comment = comment;
    this.type = type;
    this.categoryValue = categoryValue;
};


// var sav = new Saving("Travelling", 100, 5000, new Date("July, 2018 01:15:00"));
// var user = new User("s", "1235");
// user.createNewBudget();
// console.log(user.budgets[0])