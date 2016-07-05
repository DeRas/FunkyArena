var Board = (function () {
    function Board(bSize) {
        this.boardSize = bSize;
        this.theCanvas = document.getElementById('canvas');
        this.theContext = this.theCanvas.getContext('2d');
        this.draw();
    }
    Board.prototype.draw = function () {
        this.resizeCanvas();
        this.reset();
        this.drawBoard();
    };
    Board.prototype.resizeCanvas = function () {
        this.theCanvas.width = window.innerWidth;
        this.theCanvas.height = window.innerHeight;
        this.winWidth = window.innerWidth;
        this.winHeight = window.innerHeight;
        this.eachHeight = this.winHeight / this.boardSize;
        this.eachWidth = this.winWidth / this.boardSize;
    };
    Board.prototype.reset = function () {
    };
    Board.prototype.drawBoard = function () {
        for (var x = 0; x <= this.boardSize; x++) {
            var lineheight = this.eachHeight * x;
            var lineWidth = this.eachWidth * x;
            this.theContext.moveTo(0, lineheight);
            this.theContext.lineTo(this.winWidth, lineheight);
            this.theContext.moveTo(lineWidth, 0);
            this.theContext.lineTo(lineWidth, this.winHeight);
        }
        this.theContext.lineWidth = 1;
        this.theContext.strokeStyle = "#d3d3d3";
        this.theContext.stroke();
    };
    Board.prototype.drawPlayer = function (x, y) {
        this.theContext.fillStyle = "#FF0000";
        this.theContext.fillRect(x * this.eachWidth + 2, y * this.eachHeight + 2, this.eachWidth - 4, this.eachHeight - 4);
    };
    Board.prototype.deletePlayer = function (x, y) {
        var eachHeight = this.winHeight / this.boardSize;
        var eachWidth = this.winWidth / this.boardSize;
        this.theContext.fillStyle = "#eee";
        this.theContext.fillRect(x * eachWidth + 1, y * eachHeight + 1, eachWidth - 2, eachHeight - 2);
    };
    Board.prototype.movePlayer = function (player, x, y) {
        this.deletePlayer(player.x, player.y);
        player.x = x;
        player.y = y;
        this.drawPlayer(player.x, player.y);
        console.log("x = " + player.x);
        console.log("y = " + player.y);
    };
    return Board;
}());
console.log("Start!");
var board = new Board(20);
window.addEventListener('resize', resizedWindow, false);
function resizedWindow() {
    board.draw();
}
var Player = (function () {
    function Player() {
    }
    return Player;
}());
var player = new Player();
player.x = 2;
player.y = 2;
board.movePlayer(player, 3, 2);
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        board.movePlayer(player, player.x, player.y - 1);
    }
    else if (e.keyCode == '40') {
        board.movePlayer(player, player.x, player.y + 1);
    }
    else if (e.keyCode == '37') {
        board.movePlayer(player, player.x - 1, player.y);
    }
    else if (e.keyCode == '39') {
        board.movePlayer(player, player.x + 1, player.y);
    }
}
board.drawPlayer(6, 2);
board.deletePlayer(6, 2);
board.drawPlayer(7, 2);
board.deletePlayer(7, 2);
