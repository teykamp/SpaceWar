import { CONSTANTS } from "./constants";
var instances = [];
var particleInstances = [];
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
function canvasInit() {
    ctx.canvas.width = CONSTANTS.WIDTH;
    ctx.canvas.height = CONSTANTS.HEIGHT;
    generateObjects(); // should only do when gamestate is fight. add menu system
    setInterval(gameTick, 60 * CONSTANTS.TICKSPEED);
}
function generateObjects() {
    // generates ships/sun
    return;
}
function gameTick() {
    ctx.clearRect(0, 0, CONSTANTS.WIDTH, CONSTANTS.HEIGHT);
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}
canvasInit();
