//login form made to popUp on loading of the page            var currentUser
var currentUser = null;
$(document).ready(function() {
    $(".overlay, #loginform").show();
    $("#dologin").click(function(e) {
        e.preventDefault();
        var username = document.querySelector("#loginform input[type=text]");
        var password = document.querySelector("#loginform input[type=password]#password");
        /*on click of "Login" button, if username is 
        "admin" and password is "1234" 
        to hide the login and show the page*/
        if (userManegment.loginUser(username.value, password.value)) {
            currentUser = userManegment.getUser(username.value);
            $(".overlay, #registerform").hide();
            $(".overlay, #loginform").hide();
        } else {
            username.style.border = "1px solid red";
        }
    });

    $("#register").click(function(e) {
        e.preventDefault();
        $(".overlay, #loginform").hide();
        $(".overlay, #registerform").show();;
    });
    $("#createAcc").click(function(e) {
        e.preventDefault();
        var newUsername = document.querySelector("#registerform input[type=text]#newId");
        var newPass = document.querySelector("#registerform input[type=password]#newPass");

        var newUser = new User(newUsername.value, newPass.value);
        userManegment.addUser(newUser);
        $(".overlay, #loginform").show();;
    });
});