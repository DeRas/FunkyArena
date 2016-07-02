(function () {
    var canvas = document.getElementById('canvas'),
            context = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        /**
         * Your drawings need to be inside this function otherwise they will be reset when 
         * you resize the browser window and the canvas goes will be cleared.
         */
        drawStuff();
    }
    resizeCanvas();

    function drawStuff() {
        var canvas = document.getElementById('canvas');
        boardSize = 20;
        height = window.innerHeight;
        width = window.innerWidth;

        eachHeight = height / boardSize;
        eachWidth = width / boardSize;
        console.log(height);

        var ctx = canvas.getContext("2d");

        for (x = 0; x <= boardSize; x++) {

            lineheight = eachHeight * x;
            lineWidth = eachWidth * x;

            ctx.moveTo(0, lineheight);
            ctx.lineTo(width, lineheight);
            ctx.moveTo(lineWidth, 0);
            ctx.lineTo(lineWidth, height);
            ctx.lineWidth = 1;
            ctx.strokeStyle = "#d3d3d3";
            ctx.stroke();




        }
    }
})();
        


        