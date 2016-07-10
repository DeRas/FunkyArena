var boardSize = 0;
var theCanvas = document.getElementById('canvas');
var theContext = theCanvas.getContext('2d');

var winHeight;
var winWidth;
var eachHeight;
var eachWidth;

function boardInit() {
    if (boardSize > 0) {
        boardResizeCanvas();
        boardDraw();
    }
}

function boardResizeCanvas() {
    theCanvas.width = window.innerWidth;
    theCanvas.height = window.innerHeight;
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;
    eachHeight = winHeight / boardSize;
    eachWidth = winWidth / boardSize;
}

function boardDraw() {
    for (var x = 0; x <= boardSize; x++) {
        var lineheight = eachHeight * x;
        var lineWidth = eachWidth * x;

        theContext.moveTo(0, lineheight);
        theContext.lineTo(winWidth, lineheight);
        theContext.moveTo(lineWidth, 0);
        theContext.lineTo(lineWidth, winHeight);

    }
    theContext.lineWidth = 1;
    theContext.strokeStyle = "#d3d3d3";
    theContext.stroke();

}

function drawPlayer(x, y) {
    theContext.fillStyle = "#FF0000";
    theContext.fillRect(x * eachWidth + 2, y * eachHeight + 2, eachWidth - 4, eachHeight - 4);
}

function deletePlayer(x, y) {
    var eachHeight = winHeight / boardSize;
    var eachWidth = winWidth / boardSize;


    theContext.fillStyle = "#eee";
    theContext.fillRect(x * eachWidth + 1, y * eachHeight + 1, eachWidth - 2, eachHeight - 2);
}

var players = new Array();


function movePlayer(player) {
    console.log("move");
    var found = false;
    var i = players.length;
    while (i--) {
        if (players[i].UserName === player.UserName){
            found = true;
            break;
        }
        
    }
    console.log(found);
    console.log(i);


    if (found) {
        deletePlayer(players[i].x, players[i].y);
        players[i] = player;
        drawPlayer(player.x, player.y);
    } else {
        players.push(player);
        drawPlayer(player.x, player.y);
    }

}


function containsName(a, obj) {
    var i = a.length;
    while (i--) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

