$('#auth-button').click(function () {
    $.post('/v0/users/authentication')
        .done(function (data) {
           
        });
})