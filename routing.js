//
//   SPA
//
route();

function route() {
    setTimeout(function () {
        if (window.location.toString().split('#')[1] != null) {
            var location = (window.location.toString().split('#')[1].split('\/')[0]);
            if (location == "dashboard") {
                loadDashboard();
            }
            else {
                loadAuth();
            }
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

function loadAuth() {
    setTimeout(checkIfUserConfirmed, 1000);
    $('#content')
        .text("")
        .load("auth.html");
    $('#auth-dashboard').removeClass('active');
    $('#auth-li').addClass('active');

}
/**
 * Created by romanismagilov on 26.06.16.
 */
