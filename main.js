var HOST = "";
var ACCESS_TOKEN_KEY = "ACCESS_TOKEN_KEY";
var JWT_KEY = "JWT_KEY";
var USER_KEY = "USER_KEY";

var access_token = "";
var user = "";
var jwt = "";
var passed = false;

route();

$('#auth-button').click(function () {
    $.post(HOST + '/v0/users/authentication')
        .done(function (data) {
            var obj = jQuery.parseJSON(data);
            access_token = obj.token;
            localStorage.setItem(ACCESS_TOKEN_KEY, access_token)

        });
});

function checkIfUserConfirmed() {
    $.get(HOST + '/v0/users/authentication', {token: access_token})
        .done(function (data) {
            var obj = jQuery.parseJSON(data);
            passed = obj.user || obj.jwt;
            if (passed) {
                user = obj.user;
                jwt = obj.jwt;
                loadDashboard();
            } else {
                setTimeout(checkIfUserConfirmed, 1000);
            }
        });
}

//
//   SPA
//
function route(){
    setTimeout(function(){
        var location = (window.location.toString().split('#')[1].split('\/')[0]);
        if (location == "dashboard"){
            loadDashboard();
        } else {
            loadAuth();
        }
    }, 200);


}


function loadDashboard() {
    $('#content')
        .text("")
        .load("manage.html");
    $('#auth-li').removeClass('active');
    $('#auth-dashboard').addClass('active');
}

function loadAuth(){
    setTimeout(checkIfUserConfirmed, 1000);
    $('#content')
        .text("")
        .load("auth.html");
    $('#auth-dashboard').removeClass('active');
    $('#auth-li').addClass('active');

}

function addBot(){
    $.post(HOST + '/v0/users/' + localStorage.getItem(USER_KEY) + '/bots')
        .done(function(data) {

        });

}