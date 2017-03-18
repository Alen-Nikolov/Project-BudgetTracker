function User(username, password) {
    this.username = username;
    this.password = password;

    this.budgets = [new Budget(this, new Date())];
    this.credits = [];
    this.savings = [];
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
User.prototype.addPlannedValueToBudgetIncomes = function(value, number) {
    this.budgets[0].incomes[number].planned = value;
};
User.prototype.addPlannedValueToBudgetExpenses = function(value, number) {
    this.budgets[0].expenses[number].planned = value;
};

User.prototype.addCredit = function(bankName, monthFee, feesLeftToPay, unpaidFees, maturityDate) {
    this.credits.push(new Credit(bankName, monthFee, feesLeftToPay, unpaidFees, maturityDate));
};
User.prototype.addSaving = function(purpose, initialAmount, desiredAmount, endDate) {
    this.savings.push(new Saving(purpose, initialAmount, desiredAmount, endDate));
};

User.prototype.addTransaction = function(date, amount, comment, category, type) {


};
User.prototype.copyBudget = function() {

};

function Budget(user, date) {
    this.user = user;
    this.date = date;

    this.incomes = [{
        name: "salary",
        planned: 0,
        received: 0
    }, {
        name: "mdmanddn",
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

    this.transactions = [];
};


function Credit(bankName, monthFee, feesLeftToPay, unpaidFees, maturityDate) {
    this.bankName = bankName;
    this.monthlyFee = monthFee;
    this.feesLeftToPay = feesLeftToPay;
    this.unpaidFees = unpaidFees;
    this.maturityDate = maturityDate;
};

function Saving(purpose, initialAmount, desiredAmount, endDate) {
    this.startDate = new Date();
    this.purpose = purpose;
    this.initialAmount = initialAmount;
    this.desiredAmount = desiredAmount;
    this.endDate = endDate;

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

function Transaction(date, amount, comment, category) {
    this.date = date;
    this.amount = amount;
    this.comment = comment;
    this.category = category;
};

var sav = new Saving("Travelling", 100, 5000, new Date("July, 2018 01:15:00"));
// console.log(sav.monthlyPayment)
// console.log(userManegment.displayUsers()[0].budgets[0].expenses);