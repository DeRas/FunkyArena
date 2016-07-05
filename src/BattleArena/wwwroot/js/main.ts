class Board {
    private boardSize: number;
    theCanvas;
    theContext;

    winHeight: number;
    winWidth: number;
    eachHeight: number;
    eachWidth: number;


    constructor(bSize: number) {
        this.boardSize = bSize;
        this.theCanvas = document.getElementById('canvas');
        this.theContext = this.theCanvas.getContext('2d');
        this.draw();
    }

    draw() {
        this.resizeCanvas();
        this.reset();
        this.drawBoard();
    }

    resizeCanvas() {

        this.theCanvas.width = window.innerWidth;
        this.theCanvas.height = window.innerHeight;
        this.winWidth = window.innerWidth;
        this.winHeight = window.innerHeight;
        this.eachHeight = this.winHeight / this.boardSize;
        this.eachWidth = this.winWidth / this.boardSize;
    }

    reset() {
    }

    drawBoard() {

        for (var x = 0; x <= this.boardSize; x++) {
            var lineheight: number = this.eachHeight * x;
            var lineWidth: number = this.eachWidth * x;

            this.theContext.moveTo(0, lineheight);
            this.theContext.lineTo(this.winWidth, lineheight);
            this.theContext.moveTo(lineWidth, 0);
            this.theContext.lineTo(lineWidth, this.winHeight);

        }
        this.theContext.lineWidth = 1;
        this.theContext.strokeStyle = "#d3d3d3";
        this.theContext.stroke();

    }

    drawPlayer(x: number, y: number) {
        this.theContext.fillStyle = "#FF0000";
        this.theContext.fillRect(x * this.eachWidth + 2, y * this.eachHeight + 2, this.eachWidth - 4, this.eachHeight - 4);

    }

    deletePlayer(x: number, y: number) {
        var eachHeight: number = this.winHeight / this.boardSize;
        var eachWidth: number = this.winWidth / this.boardSize;


        this.theContext.fillStyle = "#eee";
        this.theContext.fillRect(x * eachWidth + 1, y * eachHeight + 1, eachWidth - 2, eachHeight - 2);
    }

    movePlayer(player, x, y) {
        this.deletePlayer(player.x, player.y);
        player.x = x;
        player.y = y;
        this.drawPlayer(player.x, player.y);
        console.log("x = " + player.x);
        console.log("y = " + player.y);
    }
}

console.log("Start!");
let board = new Board(20);
window.addEventListener('resize', resizedWindow, false);

function resizedWindow() {
    board.draw();
}
class Player {
    x: number;
    y: number;

}

let player = new Player();
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


