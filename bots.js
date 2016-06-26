
function addBot(){
    $.post(HOST + '/v0/users/' + localStorage.getItem(USER_KEY) + '/bots')
        .done(function(data) {

        });

}

function getBots(){
    $.get(HOST + '/v0/users/' + localStorage.getItem(USER_KEY) + '/bots')
        .done(function(data){
            var obj = jQuery.parseJSON(data);
        })

}