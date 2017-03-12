function User(username, password) {
    this.username = username;
    this.password = password;

    this.budgets = [];
    this.credits = [];
    this.savings = [];
};

var userManegment = (function() {

    var users = [new User("Moni","1234"),new User("Alen","1234"),new User("","")];
    
    return {
        addUser: function(user) {
            if (user instanceof User){
                if(!users.some(function(u){
                    return u.username===user.username;
                })){
                    users.push(user);
                }
            }
        },
        loginUser: function(username, password) {
            return users.some(function (u) {
                return (u.username === username) &&
                    (u.password === password);
            });
        },
        displayUsers:function(){
            console.log(users);
        }
    }
})();

User.prototype.addNewBudget = function() {

};
User.prototype.copyBudget = function() {

};