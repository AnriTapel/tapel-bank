/**
 * Created by ANRI on 11.05.2019.
 */
function createNewUser(){

    var data = {
        "client_name": $("#client-name").val(),
        "client_lastname": $("#client-lastname").val(),
        "client_passport": $("#client-passport-series").val() + " " + $("#client-passport-number").val(),
        "birth_date": $("#birth-date").val(),
        "client_account": $("#client-account-1").val() + " " + $("#client-account-2").val() + " " + $("#client-account-3").val() + " " + $("#client-account-4").val(),
        "client_cvc": $("#client-cvc").val(),
        "client_keyword": $("#client-keyword").val(),
        "client_phone": $("#client-phone").val(),
        "client_balance": $("#client-balance").val()
    };

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "/sign-up/new-client",
        data: JSON.stringify(data),
        dataType: 'json',
        timeout: 600000,
        success: function (data) {
           console.log(data);
           $("#overlay-message-block").children().text(data.responseText);
           $(".overlay").show();
        },
        error: function (e) {
            console.log(e);
            $("#overlay-message-block").children("p").text(e.responseText);
            $(".overlay").show();
        }
    });
}

function hideOverlay(){
    $(".overlay").hide();
}