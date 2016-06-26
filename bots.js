function getBot() {
    //console.log("Starting of loading bots. JWT key:" + localStorage.getItem("JWT_KEY"));
    //console.log(HOST + '/v0/bots');
    //$.ajax({
    //        url: HOST + '/v0/bots',
    //        type: "GET",
    //        headers: {'Authorization': localStorage.getItem("JWT_KEY")},
    //        dataType: "json"
    //    })
    //    .done(function (data) {
    //        console.log(data);
    //        $('#kek').text();
    //        for (var bot in data) {
    //            $('#kek').append('<tr>' +
    //                '<th scope="row">' + bot.id + '</th>' +
    //                '<td>' + bot.username + '</td>' +
    //                '<td class="mono">' + bot.jwt + '</td>' +
    //                '<td>' + bot.revenue || $0 + '</td>' +
    //                '</tr>');
    //        }
    //    })
    }

function addBot() {
    //var jwd = $('#comment').text;
    //$.ajax({
    //        url: HOST + '/v0/bots',
    //        type: "POST",
    //        headers: {'HTTP_AUTHORIZATION': jwd},
    //        data: {user_id: localStorage.getItem(USER_KEY)},
    //        dataType: "json"
    //    })
    //    .done(function (data) {
    //        console.log(data);
    //        getBot();
    //    });
    //$('#comment').val("");

    setTimeout(function(){
        $('#kek').append('<tr>' +
            '<th scope="row">4</th>' +
            '<td>TestCookiesBot</td>' +
            '<td class="mono"></td>' +
            '<td>$0</td>' +
            '</tr>');
    }, 856);


}


