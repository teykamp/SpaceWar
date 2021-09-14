import CONSTANTS from "./constants.js";
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
function canvasInit() {
    ctx.canvas.width = CONSTANTS.WIDTH;
    ctx.canvas.height = CONSTANTS.HEIGHT;
    setInterval(draw, 60 * CONSTANTS.TICKSPEED);
}
function draw() {
    ctx.clearRect(0, 0, CONSTANTS.WIDTH, CONSTANTS.HEIGHT);
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}
canvasInit();
