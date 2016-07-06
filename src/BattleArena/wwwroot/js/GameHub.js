$(function () {
    var gameHub = $.connection.funky;


    gameHub.client.playerMove = function (x, y) {
        console.log(x);
        console.log(y);
    }



    $.connection.hub.logging = true;
    $.connection.hub.start().done(function () {

        gameHub.server.playerJoin("Dennis").done(function (){
            console.log("joined!");
        });


    });

})