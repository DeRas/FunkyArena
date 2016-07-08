$(function () {
    var gameHub = $.connection.funky;


    gameHub.client.playerMove = function (player) {
        movePlayer(player);
    }

    gameHub.client.initBoard = function (x) {
        console.log(x);
        boardSize = x;
        boardInit();
    }

    $.connection.hub.logging = true;
    $.connection.hub.start().done(function () {


    });

    $("#beginButton").click(function () {
        gameHub.server.playerJoin(document.getElementById("username").value);
    });

    document.onkeydown = checkKey;

    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode == '38') {
            gameHub.server.movement(1);
        }
        else if (e.keyCode == '40') {
            gameHub.server.movement(2);
        }
        else if (e.keyCode == '37') {
            gameHub.server.movement(3);
        }
        else if (e.keyCode == '39') {
            gameHub.server.movement(4);
        }

    }


})

