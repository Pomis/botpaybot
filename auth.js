var HOST = "";
var ACCESS_TOKEN_KEY = "ACCESS_TOKEN_KEY";
var JWT_KEY = "JWT_KEY";
var USER_KEY = "USER_KEY";

var access_token = "";
var user = "";
var jwt = "";
var passed = false;


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


