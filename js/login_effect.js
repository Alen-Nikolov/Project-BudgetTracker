//login form made to popUp on loading of the page
$(document).ready(function() {
    $(".overlay, #loginform").show();
    $("#dologin").click(function(e) {
        e.preventDefault();
        var username=document.querySelector("#loginform input[type=text]");
        var password=document.querySelector("#loginform  input[type=password]#password");
        /*on click of "Login" button, if username is 
        "admin" and password is "1234" 
        to hide the login and show the page*/
        if(username.value=="admin" && password.value=="1234"){
            $(".overlay, #loginform").hide();
        } else {
            username.style.border="1px solid red";
        }
    });
});