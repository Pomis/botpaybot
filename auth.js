var HOST = "http://botpay.us";
var ACCESS_TOKEN_KEY = "ACCESS_TOKEN_KEY";
var JWT_KEY = "JWT_KEY";
var USER_KEY = "USER_KEY";

var access_token = "kek";
var user = "";
var jwt = "";
var passed = false;

localStorage.clear();

function auth() {
    var win = window;
    $('#content')
        .text("")
        .load("loading.html");
    window.open("about:blank", "myNewPage");

    console.log(HOST + '/v0/users/authentication');
    $.post(HOST + '/v0/users/authentication')
        .done(function (data) {
            console.log(data);
            access_token = data.token;
            window.open('http://telegram.me/botpaybot?start=' + access_token, "myNewPage");
            localStorage.setItem(ACCESS_TOKEN_KEY, access_token);
            checkIfUserConfirmed();
        });
}


function checkIfUserConfirmed() {
    console.log(HOST + '/v0/users/authentication?token=' + access_token);
    try {

        // Assign handlers immediately after making the request,
        // and remember the jqxhr object for this request
        var jqxhr = $.get( HOST + '/v0/users/authentication?token=' + access_token, function() {
            })
            .done(function(data) {
                console.log(data);

                user = data.user;
                jwt = data.authentication.jwt;

                localStorage.setItem(JWT_KEY, jwt);
                localStorage.setItem(USER_KEY, user);

                console.log(jwt);
                console.log(user);

                loadDashboard();

                $('#mymenu').append('<li><a id="exit-button" onclick="logout()" class="btn">Log out</a></li>');
            })
            .fail(function() {
                setTimeout(checkIfUserConfirmed, 1000);
            })
    } catch (err) {
        console.log('step2');
        console.log(err.toString());
    }
}

function logout() {
    localStorage.clear();
    window.location="#auth/";
    location.reload();
};
