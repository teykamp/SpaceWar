import CONSTANTS from "./constants.js";

var canvas:any = document.getElementById("canvas");
var ctx:any = canvas.getContext("2d");

function canvasInit():void {
    ctx.canvas.width = CONSTANTS.WIDTH;
    ctx.canvas.height = CONSTANTS.HEIGHT;
    setInterval(draw, 60 * CONSTANTS.TICKSPEED);
}

function draw():void {
    ctx.clearRect(0, 0, CONSTANTS.WIDTH, CONSTANTS.HEIGHT)
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}

canvasInit();